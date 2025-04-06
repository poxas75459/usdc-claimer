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
    "5kikiy2iFuWDmtwQKpBPDdH7EYVqyZf9idS3etoQjfCjioioz9ZFeNekFn12tNqWDP7wxNgQUKsSqfTQmmsExyxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CEh6wuzLWMSb9XFx7HtzVA8EsY44xxmh4tnUhkoXhvXcwW6DKvwD74VotcUzAtHyfGhALargFR7QxdxTe4NoGS3",
  "key1": "49NNX8sCUbwZUzE6u4j6swijZGQrfQ57fPTQZ4ezGYes7NFUpDvGC2eQKy3x1KtFP8KcDbLarh4xuAs5tq9cVtGD",
  "key2": "cBveXHVJfDBLWpD45PhmMsRae2JPhTF48AGueHfB2uquLkDGS2bcJjbnSwhfa6EZB7idnzyYpZyn8271k1w2J77",
  "key3": "sfpw8EGXRPWMyVoYgZZH6zn79oogLTc4RWBu1vVXqkNraxD9q5vsV8yje38qHC6qag1cswiFiqP3pbodTm8Ecy3",
  "key4": "5uL2S851YwKcPR2pn24hL1256oy2shwgdFwhExuqCJuq7kpWsimznbxDdcBq1vBZeDfVULSeWAunsDPbkog5oADk",
  "key5": "Mf4Z68xHQsUmrr8wM4CZhoH9KdeGK7W9PX76WpMju9LCXbksUw4K8C1qT86Wm4u16QbZ2zF6UbvrwRhssQHLGWd",
  "key6": "EdfvyfgR2qXrG6okoToBS5EYcjKYmTSPia1mE6gLbMADSR3KYuDXthfDbfpAj9XvCA79JvjwyKceLUMpGKXyeXm",
  "key7": "jB48CXRF7vV2iZ2e9p4yFZMzSsQanTp9aL5pJSXzDhArabFjEUU5U4GhSFWQzDTyZQmco6SAXXnwd9onSDXMtSv",
  "key8": "2kYeDfcY1tgk8ToyYjojd3xhK3ZzVco4fGBJeR2bdfmWbAPddWyFKq1Vsbqd429ry6KhyeV5vVnqroH3w5VSNQec",
  "key9": "4fHeezEdQ38EVxbUqZcg9WmkRjAxGaVFjQbnzsDHnDj18JJRSKiabAou1dTsQ2YKWo15rCXPAG56QMVzxKyrtmK8",
  "key10": "3Z2YHLgsztFNPn2Rd6pqbH68qn5eBUoobBcBH4vtgWeS1ZTq4RgfoYBxmMpyUsjLHdfC3FViCtXehqJyFBCeZYW3",
  "key11": "5TvnidxCGdL2msAoufUECCN5MuDSyKvh7k78gs1dQScLuy8GmvTejZ24ysD4oHFMtsRTYLXTcdjcaVTDHGnNr2Lq",
  "key12": "3DdwErpAijpvgiR8AmEPeG4DZUYzdaJR8BEE4fXqMWW7YnvaeWAVpxP3x7P18xsWLDvRUrAjJb36a3L8Rp7bmQmV",
  "key13": "2tfun4aDfRtac1bsxdZpKn9qewGTsyp23ZQYwKBvtw1dWrf5KdQFr2mHLwKGjY31YmDrXaKsXw7w12jwCPKGoN1w",
  "key14": "ChuJqRfr7Bb3MwDKbjuHhvbzhFeF4R2nMn7cE39HZfEPDjEzD2MUWf7MRhd7oNBonnnfZ1AKvY6nuUDFB9MsMYU",
  "key15": "3U5gnMPATKif6dckEAjLy5ms3MdwR1KkJkbZg6Eohj56MnAAH2hDoErzydZkffC61c3LiuG4mZwxCv9LYizY2EnC",
  "key16": "5QyM6W6cynrXpmrbfnxbFbiAAbbpLqmB8vw2Zb9USvV2yR1vdjX374ae84VCU8UHrPs9u6RwK4E9bKBaeUkKfB1a",
  "key17": "455hmKjasY16E1g2aToyT9mp52U5X5WaH1Jc3GdqJnAc2otbgkY2ahMqaXcwRaWnCJcZTyfUg5zXgkjFEB7SvrXc",
  "key18": "3Nsm5Y6BjLVBSq5hCBMnQ6hSaPzc1yTosV71qFdv13d8z8oLAQsKZ1YyU3Jmn9Bh1z2HLXTmZD8BEVK2TCoarUpG",
  "key19": "37xQXGkzptY3VY3aCYpLXFmBq8Y4yNbbnzNpf1PEUVcJg93yghagGq49DG4asnxfPbf2V2m371mTGRM3eeygiWiL",
  "key20": "5RRgnn1hSZZWEFLVatV2zCvggim4WzbVd3KopRULCvaszvvHTDdi6gg5uX1KqT9K3oCagLSUUnJpw33Rc7aRcsuh",
  "key21": "4xC3cjAMuccsRu5wx5uUzGyJKuCcMHcEM5WrCQXQyFz67dC5LK6PYLkamgCuxPB2ndHNNiSzZ9MngxeNK3Z4FCRY",
  "key22": "4LQKr7ypqTxkVkHKzs5PR4uEr4SRPVApYTyyv9rx4MWJMyNze845PGBLmQm5sovvR4u88pdquMcpRhpbhZJKbT41",
  "key23": "2NVeU6ZYoyuK5fGn6Ec2MnuqRG1kx42rjUi4AWVGrBjTRDb1tmHWv7BdimDu3cYjovyBCVkGMz2kU34eWaSy5kS8",
  "key24": "5FTnvZjXgUJaxSbfotEPcSn2dn7idTkGvsoy6RcvX2hRw7iA7W7GtskM9LXPXWEEtQoR2tufRnEwKQ6FBqqZokkk",
  "key25": "3hK85sAbjz1NC7X5eGwSUvwSEcS1cJYRY8JX1zkGkHRoTNUHVrZwSXrain4MLMaFEaseQ8tv4vhxXBNrp6DGBMkx"
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
