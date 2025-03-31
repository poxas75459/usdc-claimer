/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3UbjwCVtJwpHHQSLHV54q8XVHupUEqAYMEAomcaFSeVe8m6tBqVY6cUAe9oKrjyuTHEccFZWbTfDh1ALsBfSBe4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DgFqZZyuJRqTK8hdfthbxxuhPXGMyM5P7eVUQURPtEcAaDKhJtS1hJU3JPwqtmEiSNegxerUkn1TS4W8TJD92Rg",
  "key1": "2uvvMvCFKigZMcbFRnsufzvn4h4aUZoaiimpB1yzbLEb2gagmCSuUYT3RQb4wCJw3ekZVudCUPEtvrRWbYhUnHcq",
  "key2": "KXTJTpKDBKM4nQZq6FKgr5PtgpGGkQZBa6eRzfGJa9sknqyV7TJigZny7ESn9BG4ckZMvETGGGnu44yeggV5NT3",
  "key3": "38iFsSsfoir8FxaC2UQ9SauR1NLi6Hyng1qH9YUasqWq9gh4yiE2B25fzUYRC4Nsr4MSfVbn8LJZcecg9mMf1Vn2",
  "key4": "3nLKxY2i5yozr6w244Q9GDixDmm4jdtTCG9hDTtQpjwjpS3A28QGiK2RC4epWdn46No7NW7QgPtoPYpNudYhGM1s",
  "key5": "5k6LBYNGHcY1MXuGnur9qWkrYBzm94CvHLCphKgRDdqXrXzmfHeaFS3mAZ5cNPAUpbq2Y5pRo7CdrWb84FBjPG1C",
  "key6": "42o7Du2pZFSfzsqH6PjGSiAcwd4iKo1Pfcq1hcBGsPRSktjW4ganDGtxvhjgnY635eK7dKvredAi2hCoNDWthmGD",
  "key7": "yEMehiyMhFwUZXvsvqAc6mBrtkfnTahho4XKdQAMq7aP4rZbLT1k1UTmLYb21fsg9ze8JJ88vJ45Jvo4WsJ9SVL",
  "key8": "FEmV4bA8YJoA7vKgFQGnT4GKZQurNe7Qa45n9NufwGqhvL4QGjMjjbJN1Y5BzvVKBu7bLZRvmXyWDynS4hatwKZ",
  "key9": "3eSxZGfwytr1z5SEaUqTcP2SYruRog4kQ9S9J1T7TD6EfvsF5uB8b5rviEXdJJvRKEMaxomPGdfKqwPtiQcT9Z1h",
  "key10": "Gy6hEdr1NpGnSnvZV4jMCBVYLY4EDQwv2hfQyYueTdbU4QtSJwTFL3V3JiYWMhsbJFXoFbzLVyeae1rF9rGB9iC",
  "key11": "2TmxX388d5YjzyazpjordpsRw7MzQGsuHw7mJ4jtCMQkm9pWc15Yyn45dH8eohCe9NF9caRWZZoA45biGqjNESh9",
  "key12": "2yfr7xFUU77K4V5QE8PQ4gS5z4wKaUHyMLvj6XkgFF1w2bqFeb5wZrir2oC9Deys7JUeXBwMEk5RgCD6vxLXHv9U",
  "key13": "5y8D4UZpixT5HCkqtd61376mbs8gkfG7YRx8GLkH7ZB4koMrQDb3QuCS2DuZRqeT77v2rB5nLCUEsvBqutrDM9Bj",
  "key14": "3ACz79WG6zZmuJ9HgHUVfXfoNwdUESYDQQiA2p2L6xJuc5X2oQF7GKXczFr4f4H3DF9vtEy5LGufgi2hNMJ8hbRW",
  "key15": "3vfSaHe8qRw12ntQ6ftaXKwVJTvetY4ymNx8LBvFQBHSzvA3aodaXSkMsLtrG2ebBnffnreyjy5fUhXNpUPcp7sQ",
  "key16": "2fFj9mpRPr2cnbFG7xVwj2krkhbbttVKXjGNiF7yU2Y6k1b3TzXQk1QxYhtdA229QqwPRv9CkSFa2KSwktJ3Mhow",
  "key17": "2TtCh64VLgvUsiWb9a3NdFTLExFP2iMVNHJDy617hWfcsfGNWfsWdhKP178inXv1ZtkCfe7ML6UmnoJjDuyrQLBA",
  "key18": "4bigKoj2zCFTv4eKArEQA1E13vjFeeVcMe7bUUYLFYZYX2uzzQvscpBbdK98jpJWvaod5kJbVkgpeh4gduER3Zjf",
  "key19": "4NeLDjbtfuv8fd96bZ7P1Sk79quAh3YnP3yCzmjHHEBfZtFjXU8KyQCZYRHSXbAPydyBo5JVSSk3gU8WefDRXMLZ",
  "key20": "Q75pyFUuoHA4cjtRbcRzSHUjovLbxQAguYonurWkRr1ffATR3BifXjc7ttA28X8j52y9v6iiX2bh6qjpzuJ53uu",
  "key21": "2vsNZeRdPWw4KnS4DDTeTSxATiCoW9iBCpxpaD4QUoWGJu7CKYqs5Eq1ep7kE692CypwL8Xgprojt4Vh9viFjeJQ",
  "key22": "4cHGXC2J3YwXQiQovd5UAcoV6RGuMURAqvDdnqbcCa5M7gVkJHJivniEBeHUGPfeqFQVphLoEgxYG4G6ASXyKCKY",
  "key23": "3W6KfzBWMgPLhNBDt1gkZPdCEts9b2RZ3KMzvegrnr2AtnWNkoNyE88auXUcvrgijK8wQrqZiNEmq2y4NXcPnCMC",
  "key24": "4Fe4s5oXCGKx4atTE8fPPahADMJQtS2iR3EtzhWMPDmJc3q5TqhX8uLwm7ousreTYa2QVvwaLKaPu9q5o6ej2MDg",
  "key25": "JuYMGvanwWd5RRM3bc95scug7MHcH1bdkBHMjdNNf1JLPJNRUBA8a7Ng3vJc7FvMF9hmMB7ibFLRZdqYgihV742",
  "key26": "4EiKWSyXoX3VJkWLtvAMvnVmmqjY3bsg6sozh4TDQDaDr4SWHGHW1NfNDtoHdqBBzFPp5S562BpXhKBXijYaSPuF"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
