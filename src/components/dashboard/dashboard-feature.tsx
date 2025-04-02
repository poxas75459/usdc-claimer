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
    "5spGvUNgyry9R9tyyNtDD8ebrSGDxxyuri5vgrLWSiN2q2K3W8AzPEVwME5mbPaFh81gFXDSjMRKQJUa5kvrW2GQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YDrSbKxrg7n7b6j1pr5i3kmkS3c5FcYj3d2f85oHhAwudfzcLMrPG6pVXtfQqTBKfYa2KzjzUh8R41N8Zxzk6AQ",
  "key1": "3Ap2GD9TZu5gzZscjcbhVkfitHcrgCYBBzwB3spf2xgdRHMk73hsQGvggbhrPGtBMA3zJVAVEYUgP6JyqUDkUfNY",
  "key2": "3gpKWTbd7hEAcmkMzohyXsicPbXmMZBGrqku4jbKWLAde7GS5mqUZinRVeMDcXx7M4CieqFGrsbCuTmEqbzHSBqY",
  "key3": "3qqWMfEW8xuiBWSo8XviGXwFjWY92VxGJhNhvviGDyTjwbe6Mvge6KEvdDpSnMhmEmFVB9emGzm9ZWPwMkxv3siu",
  "key4": "2YwAXJKbT4tUhJ1KgGybWCt4VQE1HojgQThH1JRuqD9wB8y7fM9KuUjyVJQFTu5QQxVZcYh2VTtEKHQu3SZBbV6Y",
  "key5": "4EWzuy9XtMwRwkUMoUbdMkoAcyLSQqudEdgmdKap3e4P4ysbRki4nVmu9S41wKDmykMrek4BDvBTSSvK2jTedJps",
  "key6": "2QtwRweZBW9FQPHKJPNWA9ovLCuaK4KYxocWebEtwCxgQH712DeGp7TSazb2oVYhb9vW8xf7jJEYPScgzAUwhyPg",
  "key7": "2pjQGsxnyNs6shY74Z3eXrk8mVdgULrZcfJyVhNMEHiRsAvhfpDfF9qpH61ssjaRsG35NMyf13tR98NzjMaAbMjm",
  "key8": "2miWppi3NA8pXumVACPy21N1nwh5fU2GBCooNuzfxniGxz47xX8BjCgeD8TMsz1rrwC52VzWextFmbCvkLDtaPj",
  "key9": "2AxXJ9FyRFDqdVPwpzHyn1GErN5qgtjR8usPaJ2qMrjrBCB4FdVx2GK75BtQLEEnrgB2PDaseaP1PMGroTAWsKbV",
  "key10": "3zfq3hwU5tT6xMcYow9GofuW1c3KpU6b1WuCtxZd63E2CP4kXoVuVFGQGFKJ85WXT5qFqU1cdfSLgv3WqYSezxB5",
  "key11": "3zq55Up7EUNrhBSweo9VxRVYAsAFsHr9NJWDb1vF23F6KmKjYP8psqoC3iWmoCTeMbUi6E7BnUFGd7QeLGb3kbg8",
  "key12": "4Q2RAnhhSqAvRu1kBhd2PAbz1x1ENAge3RmK5t8J4QY7ntCTv4C1iqw6Cd71rCh4qi9HL68HWdW9wLLEMzdLLDQT",
  "key13": "339EY6us7YDwykmUEVtE3ZQN3UNohJ9HyLmaEVs1qygNiRMp81b3EjJuX5yUQtRUHpbWBYrBZoHdPm5ptKfdbjWW",
  "key14": "4VdGoNXBuvBYieE2BSCK1MSAUHE8Hymk7yrgWX2he315zVRMCjfRHWaDhNMj3WMDo9SAXaFTd86T67b6FX9WV4UV",
  "key15": "5CrszdcZwTMKG7H1SC6QsXeK8A4U5bQkytUhiEcQcpzajvFg8oqq7KHQJe6oEgEnFqfE7TjGnggm8c4GiZiHJkmZ",
  "key16": "4cG1X5uPrDBaf5jK9snuSzXcRvkZYMTQWHQrU8GnubrNsh1fNYmkbiLRqubC18pt9NDkXDNJBZeZfpaGCdRbVnVV",
  "key17": "4kP6hpsB1R3HSjnyo8mBXvBbu71cnEHUpSj9AS3UzHfWUup58sJVip4giHEVH89g5EWirZ8dvi2X4frsXaekoSbZ",
  "key18": "fZy8RMHXLoyjg6aA2kb1v5N4p9oU7Uipy7XV2pKqL2BzGPzSergjQi3s19TnF9QHH1NHqSAAxLrLgAozPUaM9RA",
  "key19": "4LDMcgTam1Y7CjzrkvySjM4Ehh2rqLeV84r9jmCo15ZHTbCbsVbo9VXuxyNa3FyBmC7TWhJXtNULAt3JBD6fUq1t",
  "key20": "4DvvCM9BogUL6S5e7dFTwG6zg6FwWRcibtUi1CfE53SCWuipSY8pqVbxRYWw4tUr2XtAv8utbrf2debo2sM4GMdU",
  "key21": "ebyyM2gew5127vxpHnMesCtt5jvNp71U5rwoiY87XdMikyYQ1SrESfquYCSeUPvmaK7jkkhkrBUkG9DXxkeG5wu",
  "key22": "4SL1PH2g9NLuffvpXXpuuEso9KvoNyAQcPh5QCnaDskrHyKNkDkX3oojZvVMj7jE7rqhq1XMwmWVpXxLqaLeE1d4",
  "key23": "3U4NxnRBD6V9A15PUqgtYYrtU5F8NQqzsKxbuWh3Tmd7677Gygbg3MMYSaWanDs9bcEKfH7Qp3JxBe1gF2mpa5rw",
  "key24": "24Zsdjtn6VD7kPE8GsCHegMyNRTn3CjoJdu7EDaF2QeeHWRihWWeEXFHf6WwshNhWNsmbNmwi5ugZRSZVim1jhxz",
  "key25": "jBg3b3mTV1UGCUxC2zViV56NjKrUkmbZrCMgbLLkNaZAmPTzibfCjrjqk7VPZNf6n39cAxbTWKqttTAVvMuBSgm",
  "key26": "2PSsu4bR9K8pRwJWuRCXqq8BrtU6bvzRHAFahDp8RKQ8217fRNyhc19tNd7tYuPdVRfgdCfmd71UK23Q46wpNWqg",
  "key27": "53Mta13EyC3oGZHRUoo2LM2K3rhBDun4X5qTmqDMpaCZdcKRG2dR61SXVGrLsLbru3teTNZXMnMaSTzB13JDWpsh",
  "key28": "3L1aSbGYyyc1vgN1sJLzfM3N479LMm4TY2HDCSbe5ueWzG5qRsrWnoLs7QZPhGMHxmizEFxv1bTWgvy9Q8AJCivy",
  "key29": "46tBEn7Q6RfMEDjVwLiuqoyjVRuxzVRDTfhuAgT8iApcw6ZxBVJmsGA9nZH4cASX7a328xMrUvTbXVF5BPYFmyZv",
  "key30": "54X6WMbgB8EoEYL6eNGmavSX5q5rN2Up7Ss4NjbLwJeY8eJDY9yY1wMCEKyFqjVevBZdBucQninmtbooev1rbqDM",
  "key31": "4rvJMvdbVGDCMMbUqhcWgyPt9Z37B5RVXUz7t2PBRjoezyKPvWNGnq2eJmfu6ckfZKLkpUm1Cs1hiR4ZPXJ4sMp7",
  "key32": "5edWJH48ihxhUEwQo7ehWX3APvMiNiRnuLHvxoVKJwn985avwFshTXomfQf3BQqwHPFaSj79EBtj1Dm1ufn4ym47",
  "key33": "8KpfnZ3Zk8U6Ksw6ojY5AWy4QTQprzgXraCwnUkvUgCqTRSZE72pjW66s9wbDVCtcScL7skXD1cXnPPq7Rnpikv",
  "key34": "5w5RrbkozXQ6r3uwb6oMWJDhfnFDMEfUUaZMeiHatvV1XoeLcbXjRejreitWouVvVjCxG93iSn31FyGuF8bEuRiG",
  "key35": "56zJkJa16SzkXrnQxK7g7Sjhrz2B3iCsRvMRB4YaWBDx2B63ipcVTkhgysoaH147puoWUZmn76S7bGLXYDFEv2PX",
  "key36": "1i6QXJz1ZMfyrvSgK1CpmHcgV2i1DKzXh1ciCofWwgxRMyoWousWNmMQnLoqByN7YFU3PXmz8FBLxF9JF6JvLz7",
  "key37": "8ds5pRXm7iWYnAnnL4J9xpPcqm8wN3gbfTdS6vWVJboVSu22ojyhNsFHsRPeBwvuyrCcGvmLiNxDZdXwTXLjXvr",
  "key38": "3RcMsVUK5cUk4GhXL4wvBGPiqFer7sNewSvu43uNnQ7Q8vw6NhCxHbgdRC8jFtyfoRsXfaoymFdRuHB9da12KqkR",
  "key39": "4Lw7ZvUUy6VruWgksLf9XA6h18e5qd37YQEy5H4dauMxmgowxP2NLmE1SUboSeaXvEiQgUXpsDu3UMMUdcgbhsif",
  "key40": "3QUj6TAgKyFXh1bvxb93tRmN7h6krL8jrN65mdA5Va1ZThX8XJXMryPY7aAL9zYdzuR5nccSmSyXHFKxnbSv3vuW",
  "key41": "5CyHowCKFdzw4RuE3PgetVEWfF36KC6GQyk8di943t3MHD1rmJ9xRFCpF4MfJF3JLdh2xgbS8eEKK7QAodFRmFGD",
  "key42": "Ljc5qUnpH9SwXBvdfpVacJCEtAuWZd83qhhG18MRirUwU5ii2yTRV86D328C5H4YvsDscy7viDcoMtqXDnGh7Qr"
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
