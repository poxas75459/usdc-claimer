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
    "2z6NvsWTRVXgiw5LEqeKaQi4wAKKVFHAQxdW6WiZoMvWpfU4rRzzwiU5NexiZBTP3oYyFiTT91xBtxDitR5bYgH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ydkZvPDyEps12vNcXAv69t1hSRpwrpRYJ98oXwb4QHiqy9bKvJBwNYBM7x8wWiWFQ93C1UF7ECVHdsnYN6HfJSW",
  "key1": "4J43dk2GRFfTAhL66hLEZCBQ1fgA8Fg8oeCKqTk3zRX2D26tYASfaLdjgttSYFfx4vDDuVWu6SqYmYKBp4vZk93Y",
  "key2": "4VvaXDYBC82fGfN21gncSoCGbdU4DvDZHghLGi6DFekBubpMwLMZXXgndS1oQHkZWUDSzki9EezUnHQxn5txMnMm",
  "key3": "4iNUdNT4HpFetPBRTvocF8SLajjjmkDWT1Ye9c7uV6JfpvCYieoossPDPjMQVQ9YX24io6wRbaWAs46bzgw1rCL4",
  "key4": "3FxHw2fo6sfEP2P57SKpGPKc5a2XMwezFsVipi9vrKxUkXz1HoCNEy5AihRHC3h3z1YTLvi1A4MMnWsRXc4kdnBd",
  "key5": "47sDBRfMs9a9cz5KVftkZVWJBDxXvgCziymGENrmuHWBiEmeYjw5AX1qM5UT5sA4rLUL7pD7hszJMzkW5pC3qKWB",
  "key6": "3yBo7FCek2fMtWrVbj4P5ZbDKExjobjqzdqmZqpG6JTTBxTADrusegNqZfHsh4vKDSgpTshsS89puXjYsC6a66yS",
  "key7": "5GC3jPvdWPGCnjyQBXvwToKa4oPVADZK2Zh2L9DHBg4AiHbqPczeGghkmEDDFpihqYCQTmMBztdZfGLoyvsU1Sjr",
  "key8": "54ZQSCQwFp2cdpUMn5R7g1x3R59hAQq2pcB5dWJhUtYRR9MK1D92RWgKUd1xu5RQbULLxF5SxT1rfNhutzsq74pW",
  "key9": "4PR3jZBvz9JKsPiqKVUeKdYcyFgfNwSaLCHsqcP3cXUUkZ3dBiGXmmpFoQQLFopoJwniwLLP1Fp3asPAEXbPJTB9",
  "key10": "2xYQT3BAwHBvVGPgoMz8Q98iefy6KAAvfLdKuqw74gESse573BtpiCBjLiUpHjBRAxAhUcmCVw6ZJwkxkVR687h8",
  "key11": "2HR4y27dRNPrmUmsBvbKRFHdQFp4SnwxqJA4WKhbaCR3eqtz1cnbHZKuBMxfWRxU29eikATQ1BFjk3ujoFVt4Fvr",
  "key12": "2kP8vCy92CvW5FmV8ZZe61fCMto87W3ipQEmHGsdgAvF6SSSe4gF9Q8yN8LeQZGUc3WMmd5ggsraJJk22zxwmtrG",
  "key13": "59K1uWfnPdrgGxHPorP1SQAbS73Y5fmxQcX3gLCRQqwmczGijG2z3xj1fKczXTHxa9hDR99vWjMw3bxL9CzLqmfj",
  "key14": "4dLGFUAebbjADRtiLSxg2LrNHzwmAaEg6a2vCBt6xZ3MxXBXQgrj64iChtGYAFsfuyZTRgWDvVnYkvCynvipCu7R",
  "key15": "y5JSQzKUrgw2H2JkAeC5QUwuCRurccN1VG1gtmTue4BWLuMU9nFkmWrAebwwY4z9x9yoo9gMgWGJLSvksEFd5DL",
  "key16": "2wT4MsjcEr5Zj6iQes4nf1QV27A3BQC6UqpkDMB7wZ68zVXxx6zm5AvbyAEXi7qmnZne1rrfW4tpMRbEJod7bwb6",
  "key17": "34TdJo1sXWmPzgSFPFHksi4z5q2H34GKHpmwxX6aeMpEcjnNyKDCgTXx2Pb2V6dxZupLBmEsNEW6FWMFCqsBADmZ",
  "key18": "9yeyTCXgCkSQUogNaCCYVJGbGJAxUaxebXiUQRjzybPNisTqXJzYvmYm1KKhzwQT5rf9di6d7GTsqb3XsnM7ZWi",
  "key19": "4BF9JV7SNhEgTbNN2GeKLmHYHhiRtEpWE2EBpZYYw1xDrZT3gTP5QNW32C6gYmD4mpmTZe43FnyMH6pa9DjdAgwf",
  "key20": "2LQ2JdxE2jTQms5xmZy5bLfUyo8JeVDcdMBKuabtt2Wx4rgUPv1iggDJpoMEu9USPdigV7b4sqXd1WX9iMD5qviP",
  "key21": "2nVCgPUD41GG1C4fTiGfWHzQLE4MzMguQgdAv3GBJGmzkGGEmrU7mCdG7AbQMbxasRPSXaNCg9kS9yDjqqr4zqV6",
  "key22": "63mnTkDCJJq3VsXRzYGFYNcJaCDfuCDXz2JXbGxeeCvd2HAqykRtjm9uKn4F7TRzcfHaaT9uid1EnAkpLBdozjjb",
  "key23": "5Kc4vmg1WzJnrTZbb1ShM7xoXTYrErk9TndvizCSyq3MbXMwqVLs1bNLj6FV9PZ1StcD6TNCL9CoFJLU9U8xzHNK",
  "key24": "64rip3ueSXrXaVN5BVZLtAauYPXA2XH1V4pCQouh72mmud3WKCNgq3i7AJh3hb6PJfs3uiXLZSRSpzrtXSDRBbfF",
  "key25": "3kwDwtcX2rJ8isipLvpfmJ728JeKuj1cZtiVhG21vtrFaRhwdoAiumkx61WqMmtmses93GXscU2CEc2kngy5SH9h",
  "key26": "4uJ7x6TDeMdc41GoCFMgHVZYQpEQyfJEQe7RqNaX4bVFDj98ExjMrzRtJdg4yWfWQrkXrXUamBCcWH5wV7wwqUSW",
  "key27": "4ta4h2R7qjoj7tYWhzatw71Rc91L3CJMPBMjXrPTSh46sEzd8kWrwXzz1JhPcUqUwQB4zwN1GzJiaksuuJxLzaCa",
  "key28": "3QT4dHGsYqjqPA3oEfCcjCAmX2uVVyhdmYunZnC745Xiiv61TUyi1ESxRDqVJmFge4qGXTqReThPyPUicn7VcXoR",
  "key29": "3TUbdDBuJQJaUzat1n37KhfDaZBEWNXcLc5t6E8qBBsK7Uvf1S7j7E5axoTnqhWRtVwQPXjJL9rsy2FVLtoxi8sX",
  "key30": "oxv5UjjfQdHVmHyTMeaWZ68dqPRcJ5yUcrDpX49Myr5Bz1noZbX7jiZ9LTVetW352ijfyem73GiNDPPemfgCoEG",
  "key31": "5gLan985D3tBzgGV48Rn3ZF1o1XdAZKUD932XYHEnopPJmhb9ivxB2Mz1nYFFo7mWDJEBKgL12UrWteQmxkvgAs8",
  "key32": "54wAKdEqeQrCt81fdufNEbBsubfnQznk3FYwpeYRizAYarYbh6Pd17AJXqPPKhterk8HQBKxHA9RBv11jixkvj53",
  "key33": "4f1vhTCrr7JTrf4z83f53be2p4uhH7Wi51zEPhLoEwDSdHpLK7WCcSqZUc5t6YxtSAtRZzTb7zvAZQzrhRh7KdKS",
  "key34": "uRmA1iZzxGB1sY8xPWQte7hSqhZH2xsgzx7avqKaUFDCMiY5rtMbZzHp8M29eHXXMibPvr1VdmPTb9Zpsb9wCXL",
  "key35": "3rVoZTPVx5TqqR3eywNVNVhXpeKcyqNq8CnEUes7MKLsW4LDTk862oyhaZthTBbFSRp8ji9AwmkKYJWNpukEqXBv",
  "key36": "4oMJF6KH39J3tATSZRqbsJNJWhTn62ETNZWwoNAkBpGEPRxMCpNZwnMgLSLDD6MDi9jZNW8bZq5pha7KrCGWYZ21",
  "key37": "Xk81wzxPCfUbtYDFNLH6AnxuUzB6Zu8sejiSu4GYrRgEmUmXHFFD6AP71zeMphT6wKGQteV7AibaqBF54giQWnd",
  "key38": "5zz8Sgb6GYgcVV3CVUZ13dTTMNq7GM8GXk8TVgx5fYWJzs3MMftuzFYd7aUHknQfzfZquH5VuLCJq9vMLN1RNML3"
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
