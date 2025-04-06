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
    "5xZMWmHvHaJyTie3dddz82SkFfmQtEnbwSupYV2Ue3oFCutRGvAw7KbN1yC1nC4LKZQcyPXAGsgurpmfuFpJHnke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "365R1M896ajbPppEmz5HqqeszfYbgRd33mbBVqGWekA628Cp3wkpGd64BpuaK68B2Dob2TXbgpzVADvQS7ucobew",
  "key1": "3c3ywfuoVx9htxwbHEkoD2EsRvZrSSbBFhDYAhKbnoiB7TXDiyprwcTheChoiHBnhrc6cW1UyMWKrd2ZnsYauVi9",
  "key2": "5yVYHbmp1vD1zoC36hH4pRUNjY1uX4ydF1nZSRFGUxrBxScW7oJrB3mNPCLo8FXSZ9EH39x1TnJwxY4icatesc5A",
  "key3": "4vDYmiMxPbLzsLh8BdaUCtHx7SCP7RUWaJNQhkgeKa9LSE9gJkSjUfjUhWNPrd8556t3m85ZjwNnFqjAoyjn4k82",
  "key4": "WZRvYpuBBzdRYuegd7rfzf5j6emQgHPCG2G9KwRHboF5fcn1K36QMhS8nn4gsK2eP3sGCtePbpcoowyw28E8PNo",
  "key5": "3x1G8tpnFCwkJZvEsA5RP343nA8xVQcZPFFEp1x5pZUknjGW3LBd5VZtczJCLoqFej8SziU9UuRtYWTxBev57yoo",
  "key6": "5aeTxBPneiH8Bkpk3t63VvDzsCKE3tZLFnA8qRs5t7ib5eRSF5KQeF98H9cSRVU8naH1yevFCMsTKZNEJdjyjVVC",
  "key7": "26EUf4ZwD4wLBakfFZWYusT2RBi5tPY7FWCT4MS4WnN9R2zKBHCkBR7WcEAeqLitZNsZYH6AixC4JAc1V6cCwh7U",
  "key8": "2w8m24Z55fs8FWeq4BfPKvYRq1hFeijtkBww4RZEPKGWU4bxsLaqHasvb9g6q7Hi4sQ1qgBdQ8K8PMq6WsugMyw9",
  "key9": "2ssBgK3QdP7syrXfNwTWkBHj6gehDPGTiRcD6UfHsck7XzaizJSjEEkWVwdkaUrvBjv7Je5cFJfQx5pbpLbF7VVD",
  "key10": "4dDQpTGYGR21dg8FiAF2cPpMLPGXHLxSxaT1sSbcrg27jWHzWMXEbktn9wVc5t74mt56EV1SB661mrw1Xc9noADZ",
  "key11": "4EbanH9ZxxeBpgsmFopJL7gHxy75TQwS3c1H1NcdL37UTv4ShgiGrkp3ESFWbHxo4ww24qcZu1saNAUnRJ8fNLy6",
  "key12": "4kmi9SfXZgkT7ejWkFFjXzTDDF2McwywjagitzqPtQUoSPT7KQpvVNLaJ2JxbCqKqNTKWTGLvHrCuWBx4VhajL5o",
  "key13": "5XzmkbYcihXgJnwRXFKQaCR1nUTnVzib8Tr7iu19BzZYNegGLu7siDJsPmi168aECS7WYynBWGwV3z3rR6o9jq4j",
  "key14": "4pSvdBbptSttkimJM9z5RNAPRsAzgECttJQ1cWRBf8Tnq9JV1r3Xx12K9w8TGJzwP9NCGWYgcuafvynhSFRJ16u9",
  "key15": "5KAcTv1pBVB5DkEmKPMt7awJEu77r1ATSj9sMQyKf6gdBPVqKUfqU9quzqP5qyUQAH2R4kvs64jWdsmdhchfuqJ8",
  "key16": "ioynGJST6pNcYYMotgLDAK8vHEjFyEs6osnuazzCdFqDi7n4eJEsQhSB9kpoFLBqz72Gx5KyuWAJgg9kaquGdoK",
  "key17": "4ezAwmLJT2YkAE2iSsDcJafqJRs32Zx9GsKv83Zjc4VAuRGNRsZTi4hRU1YnSYN5puZVN9e5gieoK8QdpppenDuR",
  "key18": "2JTzPQ9c7gWCE5UdX9sCdTC8HAQ23LY65N3qnKanqB4X6z2tCmXyTZkrCc21QQQUXvUDpxCSkvw7xN2dWgjoT1c4",
  "key19": "3Fx8ES41DQDxJbQMts24RbmJgdgUD515VmkNXdiDWNFfmre6XVCmJHUwUuVBTdzdMUfoLnDam59vky1Ppgr65Rb",
  "key20": "4zYJ66ms52NpQSU5HzDtUGFjAoDGx9uQ6kTtZVbwAXwCsSBwVGuWJ2WwpwqVDc9WoTo5TGGbCPkTTDicKy9BtDQn",
  "key21": "62MJEgUX99Qv4NtfUo8qiuAuKVxwj94TpnWvLdndqans7GLGGaWwBPspSKgMXrSzhBz5H65y5EzdK8Zarg2v3HTF",
  "key22": "3ZeSMP87eDNjCcJCBjEAyFXcfZeFYmMnFTz5TiZucWsHtT3vWyyGWcwQGtBH5R3FLeGbE7LVzRrz4HQwdp4mzTC6",
  "key23": "addwQZYYKtYKVbvnGT1jpsAHURr7a36JamV9c5jGPUAfAcDQBzVRuTgd5tyL1mW9yGuJoPXFNDfHCiYh8CpgDbd",
  "key24": "3m78L3iMc2YNwfaLKqcRu2Ww8E9Vxhadb7TPyShekhHUWnxLr7bndBjuXnDX3zyD69Vpo3HZKxRhwNKaEac7Mr53"
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
