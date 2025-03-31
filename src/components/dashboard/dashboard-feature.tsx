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
    "5ZX5t9s5sYhwZALFarSYA4wZnfC5cNf5FY8qtdCPPENYh9jx4dTKtndVKN9Z7nzpM4a1NRPH63owmWW8Ai2hJ7kB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RPHbSA4AzU1nFzb9x4wLkWkx8kqffwTyBeTLQKjs5MPbP8d4U5sA3bku2njpG7we6RsRn5NXmAorz6EUKS7yiwb",
  "key1": "4jB4yGMGMf6yT7VCNULs2DseabmfTtTWz2eKmCasaxAb9cjxKYr3Qdkc87ZfyntmarB5vew79wDpUXdK6aJsbHbQ",
  "key2": "3Mtq68dVdKVBBZvz6WbzgePWCpfLZzvfRp8BAtpxiLxsfcA124xJELiyxqTcuFKMNoiFHQd5rt2MSCYG74CcpVoT",
  "key3": "5wpJAkdUxRvTpuPj2sBRmL8WATeW3tHguxaKUvSuq65dNzJGfV6nfY8obafwCaCA3Wzk4zs1bkoVpfY3v7KeMPMw",
  "key4": "NXc5xsps88JjizZoxeTBjBTNfokpY9KB9PKUjV7T8UnXFNsXcPqdVfDUg7pMrx88XG47ahJJBs2xv64j1FskzC8",
  "key5": "5iLk2DTEGv26q2ZjQdx1TaHjhBJwkg4W435EC4DMLDqGt7Yo68PwVYc4dGGfa4HbajRMqaWcHVm1Y3Vugm5hjgg3",
  "key6": "2kyyoer1reSzrAtixzz3C9UpuiwTW4gDR8L5i3xxsGxQRfJCry99tdKP4Nn8ffmeM3ALDaGJF3wJfSx756xgS17v",
  "key7": "4fXq3XRK8uUsjsffRBV8cLZF9oWfnVSmrBw39qrjqprsMJKTmtEfEm2voPBUXarfGiMAPhMm16siSgZBRxzP6Knj",
  "key8": "3AviqsmsHL7QeSJT3bC1qsDDR6GA9WLJWUaTNHaor6fcYS9EKANkbWen8LbF7AN3F5rf33NcuJu57rXADxVSREPP",
  "key9": "2P1C6XuYUsW73wS4trjyKbrYNeb3hPnTASxPoenGvrrpYU7FjMECc7RwGsuXoRKzji5YsG2qRit7BafSFgpcLaxu",
  "key10": "55Xd6t8Nz7cxQcA34JWY3xBFX21NGcD8MnmCGotDP1tc6dksAXzBT5ypVPZHE4v4Bpr52bLN9qbNW1u9LUMKC19z",
  "key11": "MKshyyB4FWgAmVABgAdmzEtQXWDHRory6dViAFN7kXH3zWP2hUfRppTmVTmbVZJZnZxee85WfewMz1JY5VJD7ss",
  "key12": "4ZGU81fH7KwHPSrb7rFd4mGf6xTSggC5SjvAHjtRuuxbUodEKLABeC7rb6E95M11RLfXw2jMW5ZPMaW7VNW97sUr",
  "key13": "3mLkJ6Fbc9w51DguvWcApnZNDHU8m6QJTFvueLgDUuW25KiLCVwoKudZfgegooNqayWdhnwcTP6B9fax3DAnRLW6",
  "key14": "5yvJW9VmQkJKMsoiUhqpVNm9PkvruXa57By9dZfUBfnquMQduKUZZ6gNxpNbqYAZ1MvHjnTJ9uwU4tX3Rs3C4xif",
  "key15": "2HrbQkWdNs7Zj6vCpArzy2vFPk4RCXMCKjjTZZGk8rsNcokEF9d9X5raXSdrQZpooSmRv7nSGixAuWK7wrLsQB1y",
  "key16": "4dJYosx2rHt5V8xqaq8QhxikTvEbAcwTLBrv1SrcvM6Y2D9x9MpMTt44fHqewkmQiSh1v3LuiyQUcAjFEHp6N4kD",
  "key17": "3y7GYxBjNPBkWjuRAUc98wAhhF4iX63tQQRxoNWiGwvoUowdGgrkbSiyR5ydTmKk26pdckH16mTt6b62C45k8hQo",
  "key18": "27Zurd7fMnmBNXRzWiLMcYDhjvTW5Btcxss2CEuTUGg9fKQckadSKS2qVh7bCk27zyf1jYEdyspAbqyfPRUA96RX",
  "key19": "5W9xeR7UHZM1NFjZpV4tq2RrfLyRSkXfkuWgHcZVmSUFdf9aWwnALfwAZafuHVcQN2FeYruHpy25FzdtrGRGmUco",
  "key20": "3uBGjJMQBhiob8Me9PvxLxNJb53qVCsArGypGprYq1pJWX2YxobAcxSZVgo1kzZkiPrPwGjZzyPci1PoTydgqG3V",
  "key21": "3FCk1URNTZWBgkSyC9b7XbGRwdCkwhSWS84z7JXGsgLrGg8uuPCKhunMMuXYbsFQMPQLjAKhyLun54PbJa4cjbhM",
  "key22": "2H42pobFBnm7utopUAeHN1V2ir1NyZVTh9meiuarHGEhTPLrnHPW1j2Zpp5zJgBo7rrpxzpTRG9sdzyVZuiwDSaB",
  "key23": "3RF71WVFA7hQ8Hoh8eecPetvsaZVco5G5iznjs6cpvs7x8XwWPMcpUvpRcpSWHQMLAcLd7ffcmZL4CsFUB4UTqbZ",
  "key24": "3XSUAcBxzsrK5oNm8R8Ea68w8nCn7kpVXtNCYgmfszFjpc1yxro435evtkRLSxGD3o2SkEuc3H54jb2QCefiaB1Z",
  "key25": "4xLuetTmBB7JZKWtPAvVEdSJiqunXWhmqTAK2iaeEm2WyR3D9SJDNDenwGhQ4ios3MGKuP12Q9oLwxkwDnaXqZj8",
  "key26": "Uzy65FAZdnyedhx4XMoXmi5ynYtFZs4v6KhxTd1PbVVZCfXtTtMbxxDBPaKgfgfXW1NNSayYJ1VX7TyKZ2GB9gz",
  "key27": "bv1eymFeViZuTArHHNsWoKc7Cy5XHd9HjhyCNrj5TC7gyBHGEeUZCKcWeffDcjBGNSLgCrVAkHSS4YhNDg3qHuQ",
  "key28": "5aKsHEqo8thm7CfRCggGtdxwDn4g1HRwEzomB1DeP5qEmfR6WRKWNRMN9C8dNyFVHC1EV148GUoYPDgLnwWV9zMT",
  "key29": "24NBzi177M6yNaBZ3c7zwUESNZjCVgKc8n9gm8ZKGEdFf4B1g22kh9RYXMJCkMhkWFj1xsxsjjMR3YiZYWcZt1Nb",
  "key30": "QzXSBVbNfiFT2uLhGUE1Ee6ZYYCKPD2dV96ZKuso1KHXS4Dhn4akaSH3DoedEoSbyNo9D1LpK4wxxGAmBpkyoox",
  "key31": "3mapwBW48sx9J21XvBYMkg2KyKdc1uv9MUEfLNZdcePPM8SHouYkxuq1yivF2z3AHSmpqgsAuieEY6THLsjFM4AR",
  "key32": "5wjr3SecKLcQvnpmdiZNTdWtF2VqYLSwG4oPwZ1NeVxexr6ZXuBMTmfUeb3bjQS1oHQGe2Gjo7dGzo7H9eBG6Pkt",
  "key33": "EvSqywQEVYJvkvcC4QNynMLGyLRLqV1vHK6xARB96XgD9TYgRPfZrT7Qy5UFvCUXR1po5Gos7d6MbHoB5Y5n8E3",
  "key34": "66LkTdb4K79QLGoFKVWxRPHfQ4bo5qEmeWLur9MRsSGzqxMJWVQHFGjkXkxmJSwe3ncWRUqD3Ke43LHpWBSNmUda",
  "key35": "5GwLWPQPaQYF1WCvWBnEj3jyo5HKorj43kwE5dtJ3Qvfg6D8M3ZFTs6xXdHSjwVDV47sEbyPcUKAQxHvHN5d3H51",
  "key36": "2g8sgiy8ghndiYY4SMFwGpbEQow5CebN9VDiwF3a9exRxYHXh7bycRkYw6gguBHhtEmyTJPZqFJ5wBdboczpmtCD",
  "key37": "5JoyXVx56zpiqz23xooo8ZPVWLuFCeVPaJCfgocLyHqspTY1X7JN45JDGVnpnnau5P9MAK8cdTrfmDNV69BEESkH",
  "key38": "5PgQc8baWm46r1gDpdzkQWMHjXMETphVnoHN2ANNP7drHrXVoSRQWpKtbtCxi2JSC52xyDCyGqVv7WPm7cTer4gk",
  "key39": "5BfkEz9NmLTJMe46Z3icUc3aNzskRJa6rFr36WZZKwN44Q9FGuZMH1tTogqhRdmBSQVmtBemLGwdqUGgTwRFRZrq",
  "key40": "5YCkSnqmCuFRT1TcgZW7LtWXZS6oC7K17P8cE1gTYS31UqbZVmBC8H2paqJR9GYTz6BzLyB4zRrXU3MJFtjjEn1z",
  "key41": "4fCXN5jP2w2KqvQJhuWxnaBpS1h5iV4txxqfauk5PFCSHtxdkJW7CEXJ3nHz1M6kTR3VxnjsUjNf9np2JZaWbCed",
  "key42": "toaqyhyrtL6ZusGr7QHBty7zgoUGeBdY6DhU2LjLPRwBdrUBUAuMZnNfzWYgtc9tDbcopN6qibND9Ms1zQTcYHg",
  "key43": "cvnCCFrjqXSTZY5Te2VuV8NueVxXjmhvjuvXx6hjMZQiG685wzsTVsVz1qh8ZHxaUgCJjSkud6uDjf2AA7iCwjP",
  "key44": "3xFATjbFpegpeXoyFgwpcuF5hw1qhMooFzvHoTAFjc1q4foEvc2eQgJ7X5W45rESGtANn9ntk6zqM9oiEEtU35hG",
  "key45": "qEpiVkG89vpv7reofvxTHmKUazozruovPUeMMnsgvRPQ5djknHB1JoqsjWyWEbwYBfTRMozKCNkK1Ew8mzPNjLh",
  "key46": "3u51uCEaDhrVm6d31PC18yDucXpqgrfktS2dyXepUFzjHTceMj8V9SvpJZW8tQaBhB1Bk7JRrY2MT349eBYmCBho",
  "key47": "5e2A45hKeuogsMEVygGvDF7XqD9SN96mPrxYSDzWkHCePJ5wEKG6HSYgguEgnAJTfmE1jHNVbYmWDx37C9pgdAh2"
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
