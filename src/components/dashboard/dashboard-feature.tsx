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
    "5M227qZGF483SJ5DvtuSHQFbuEX4SXrw8e6G7CXqYEFkWtoqxKhZDHfSYpLxeYzPmR7NPDUve9UJEoe92eGbrcS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XBsApTpLhuHKfG5qV38N81o7GLSR4Mk8K4cD6HGxSsmdbn9piKCSNFdw7REP68GbKvCZ4yGUW33jsGF4s4nUpJy",
  "key1": "3h8Vp3fkts88u7xe4Y8pYNuUeKN7ZdAe5RHjn5jUuKnQuRLfSEziZTEz6VCgrP9HYnWeRYAFZ63cL2txSUYtZDvB",
  "key2": "MVkpmpNGBKDJpH7TxJxkxrCGgJzBY8BnuzUZecteGjqaLva5XZomRrj4hyRcrz6VVTEVrfqmZwNxeXSgdR4mS1z",
  "key3": "5yhgJzB8PeC53pXT1gEpg5fDmyrwr11b8trM2ThgRHy5sNLa3Ave1wh8TYiyPTMf4KMGJSyeBCY4wNNTiq9m1ovB",
  "key4": "FuB7X2ea255PJ67rU37Pp3ueaHqUXkJvWCeoxqQoEy7P7LWcGtudqyGyQgpn3odKXZFxK7DDGkJHvWt1Ub65MQK",
  "key5": "4kqpJqdqJ1VP4qrXefANgdL6kKfRAuC9X8f5XWhWuWEo8ufZssxN94HLMvRQn7a1zABJmdYcMjk6QGWJQvfCZ5Pw",
  "key6": "VYunK4CQEw79k9LyhRTMEmiggyGqkhfkx4PtvreHHoT1LG7T9oqfBiy4ikLVqxjmGtdDUpS9nrx4295VHtTmtwL",
  "key7": "5zH5rUGeRRhrNwQXF5BLd7cLyvtUPemXMowjhWCSphFbu1AYntXLdQuEuk8zD3ac8NKm5kcqRc8e9xYrxH8f7ezE",
  "key8": "4eHwevUFC71uTWd9EBvoH4b7E947hYtQh9vwHn2dMUJjSNLnFSwPbK6hY14k28MRnpxgCVFFRqTqCu5pmN6jjWYu",
  "key9": "46uHsTv1KGKESLryYR9BaDC2Aombsv4oLM3AQ7htD8UDpnoG6sBknTx12zV31VMK5kFFUVEsYRwPmHP2nof7jt5D",
  "key10": "27GPsSQSWVAZDfCVrTe9U3meaR2Yumger6HVaPVF3k6sMUPTMQ7TtwLPmMnQyKpgsoTojyFbZAppbffLCE1mzZL8",
  "key11": "2aDR3evnd18Lg3cxh857QUvaBfyKJwi6Zd9DxStwLLvtYfEMbiYgLKRSPKChqxeTWxndif5dFdJYDL1QXu5KLdmc",
  "key12": "56y2FNMKho26uXk1gsyxkMUFAguchyjkrNB44eQWF1YbkAPPi9vi2aAatX5Vb7e6CoAMjWPzmuCph2w2CMu7x9hf",
  "key13": "2puYAD7mu9nbDvta2cijvDU1mazExeY88Br8H3ZWq6XnNFpjT9DRdTLc3gn5bHEzLz6gxXativEU3LukPne8W9hp",
  "key14": "2cEN7wsGa2rrGs7FZoFx9WbkcAsRigMhL72ENkJ8PYxxKZZmQLisGNE73CydSR6iJHKNfBkkW4CR13GzzzsWq7db",
  "key15": "2pCuDbThfH1wX2MHbszMxUEgF1736PEhEyoquZT6vyScU6BtYsdkBSoPfj5N77weFwDvNaZXhukCKNBpsPpuAmPA",
  "key16": "5kj5fTdU2MHHT3RVfSgFGZtTpkyvUD2iu5bRZkr26dm6dW92nec7UAxHh5dztTXq6Eru2EqWUZ6de8pGZRapK8fX",
  "key17": "368RXttRbw4cATf7igEiWu4XXg3V2Py3VQDsGM1MRXxVQtvrrMfGHL9rG6NdX5e1RDu2YFF42LgxA3Bz99QS3QrC",
  "key18": "5651fsgo3Zt726RXHbt6HXiVUyT5nFuscxYwKZa3jVdG754LhgQNKnUTXfWzn1AtrjkgAPbZ4BUaQUVoTmvButA2",
  "key19": "5FRqPCqXvHpgChZr7uzUaejH46QoX5UADftqPDhCPz8kdWtxqfA93xbsdCpmk7HWaf3Css3BoEZSQLfuSnKZ9tNN",
  "key20": "4tTiJVbx8kgb1246LgpR4aifuPgNw6zhJq3UnfTLyxsjQMvnQ8J5a8Liw5RJqLrsMGL4Xu6o8AbDpeCBvSrtRAJV",
  "key21": "43Vq3RQR73FyMSZW39vW9Lghw9irqvV4wVzVJ6KUnLcFVc2vKfAurt7AMwxtfQBsQtYQfxEK8wrG97SEmDho4eUM",
  "key22": "2Yuu5bPGUfSPdehBxtGosGUebTfZyxPrvZtygF3jB2R7tJUKGGqbBzjWmqekxjrCkicpzr8UDi32NQQDNaMjdLTq",
  "key23": "ApoLNNsLmXbHwmR5fL4TB79bzLXNARJvheDYwnWAbLTR9ZmDuhEVJEdoD9HvMRzARXk1RX4L8cnkjXPd41Ry3ZJ",
  "key24": "4gtPKifXeMZQ73fbWHvHJ9UyBmT7NWpCUH9Q8CU1D4nzjKhp4vE5tHq1hcPvdzLT5dd4ugT17HtsVxGtawiStwkF",
  "key25": "3MM7f2PX5BEw5in3Tb7ztkUppV7bZpV3yc7y8Noo7rkyQRqt3sPDNypa5GqeA7MGqYBqFjKMDw4NyQ9yYj6BCPkL",
  "key26": "qG2BAcpu6swvBbtkeCurxRhs4iqfG57fFekR5w9iRFF9cS8SEVU9aZqGJ8Fp31SJzzxs19LYDTyE4k5MWjn8g6h",
  "key27": "BMayXuADjhiv4mduC82R5CdUPJk5TyUsjHg9kUsDrAHSX411YFbbsXdV9aCTBgasFu8pSgy8X9JJxoiXQSg8wu6",
  "key28": "5LYCaw2mc1KE9CcSdtk7mWv1CKpHavh8yNLUpF8mcKLfKxyqzf1UGHqN5APaU417xVbAuDqwq1EFdsdi23iAhMT5"
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
