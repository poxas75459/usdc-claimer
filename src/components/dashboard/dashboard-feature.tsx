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
    "codALoDBZGQGBnQKeYiZzrLe7xSvnLAw4oSxS7jsUXCoCrnRoC8boCG2suHNUewRmEHUNVmDynsU6G5QUiP1Zb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tB1iU4QSb8j85NXgJpGMYXcQaCEu5i62m1RNdL11q7a8jr16RaV7SqdY3NAPTHZyYP2bcZRF1mmLkrZGeMmopZh",
  "key1": "5nLrVUWAMGddtCEUba8WXs8YY9GY2RyDKuU2pVWLDWffXChdy1qtgM1EcVSPvF2Ya5vNZPkEpZYgw9TvE7Q1nEqy",
  "key2": "62P6Jz8DUQRxXn4wsk7Zg7L58tT1UG8Uzjb6jye1YjnyBhDW9brqZ92rJffREQYF83EF4Sy5GkFR9p8siPKGDKP",
  "key3": "5q1gLpm3QXGQoB5dSssG9ZC3fvq5sg19Ersw2yvJRitdveBuZJZu7pUtewr2KRqzLHS5dhX52w5USafRoRtpRFkE",
  "key4": "5nPZqApe6jJVkc4njBWBt28mrBVFqKa4h936i1XCR669zRdEU3TrY94mvZusRonhgfh6Cbjoq1cviVp9AtaiaCMx",
  "key5": "2yxMLfPLdSGvUgK1a5rsW9g3EEuGw43Zo6hejuJBcyrk8Xuka6ZbM4xGNkTbbmehTAo8RaShJd4cZe1sjvC7krcy",
  "key6": "5iqoEpvKWztcBNN8TtucrKRnZkwuVVUf39AMA2SoBFFbFs2Ze5bVaTqtkJVCBiYymVFy9wzkwCBW3gQbVVyDtHci",
  "key7": "hmrCJZTSySfVovFiL6y1d9FubZ5uKFeygrPoPgJwsN7pKCVy2WuzvJQQWpWKknPbU9FFZbiXuiUf1VyTserc39G",
  "key8": "52d3rRDgggfwoKjqAJcG7YVEMzWYdKFBGT2BLvhscFRcsJT295X75a4hJcqrWaWqjERCCoMtW3KU6yC25goGaczK",
  "key9": "hRagA49xyYetUhUrZ7o4uiMUHhwnr9FtAEVEiSFjL4xfauo7sgP1BAerocT9c5kmtBPJujX9uKjeqj23gE2Dh1q",
  "key10": "NJxmUEbMimxrjDn7ygYkSjALmApo4KK2WcEEHARe8EFyNuetmEopHh728Tgkd6BCPUqE9gijDnYKa43CGy3b78h",
  "key11": "2RSEqA88TBWSAYc4E13g4V5nQb28DP9xHQtLG9vrKWadZ9LAQJzitAknjSUdMmqQSN1gadovhuX99yAZNRoxe2Hi",
  "key12": "3LD8mgyXR7TEwMLSwQkJqjzopJJEFr7zcZXBVEMUzbQ89tiedRbk3TT38mrfYxAfMhtVevWxV9MCXxiL9KEdfxac",
  "key13": "5mfVK7XTHi13U7YHaGiCEEsAJizVR6umG29GJ6nLue1Ld41EDBBJSdHTU2kPY3gWZPirsHKd8DHEcrVHf6B87BR1",
  "key14": "5VLu2dJD6bQM64JuQboL1rHWuuVNju5haKBgSgacEus5jSeA7uM53vwTjW8LLMR22SX9xYenNVC3yrNRUeNsWm4F",
  "key15": "3QVAeXnzRbeBQBaetYjKR1HbGcH2VFXyW8g1ach8rvc5YNS7UD3daqACn2PRrC9gG85aBw13p2toWVapbQUWDFdS",
  "key16": "5AzzNJJ39cJimzf6PK3s9WAVGtfwW2a8a6ahZ9sJhBG98tHRzx257bcg8a1FFtSh8VzjBntKPoe3s6CDS5YLFHLB",
  "key17": "2ahfq1edwF9mo5TviPyYUwszeUt9j4yEVZ8HXbThxxg9PKferZJc5EG32A78RYp8nxCTuTy7nsmvH5fJru34Mtxo",
  "key18": "PSx92AJ9HS7Zh66caSEx4FRa1vnmFEHd5XXkFY7SezzDyMjmJjkGzRACdJQTGFwzqBKqAKQBLuVjdfEQyhLaMUY",
  "key19": "5Bt389ZGHanwUUxjJ29DsMomT9GitXDD5PMc5Vb4kEM469GbhS9HjYTj8QgNNf637S4nDokLVcRt3itfNtfHpF25",
  "key20": "59c9HAP8hBSYQ2VrCq4wZqtqqnwSZs4PSSuen5YZeqprbYRXuqkXFeb6KM1WAwov6tE3rrpUC6cLDD3tC8dt4RAt",
  "key21": "5AwStY48m1j5NP4UBCJiDfVEH1dAPDFcG4csd9ob7rGuZSxzZdqxFcugMADdSJNQXyzh6UUC69Cn8o2nbEXbxHx9",
  "key22": "a8dvS2KLqv14LDALsjA128BGCb7VUfkSEZ9UzSw4i7CR3pxYx1SMCcaQAjGFTHQ5kc5V3S6ZZpvWE3bdPYugpyt",
  "key23": "57vohRAw31igAtufKWp3p5ny5xwKaUbrpRS6iENTsqVmdFvYv2YBbBuFn1Dxu3JxUieNkfFdz44zf4ALZvuFBYQW",
  "key24": "4mRaPiYdgGsghRyJBMkVXoh6hHYUsLPRqLSAUgGZeXSREnTGSBKtGmk49Y2o6MJ93HHto9KSn5Lg2nf5BjuWAbDC",
  "key25": "3Du8VGJYC2WzSzbstuzwd1THp6kL4bhzNiD8J2fR698KyCkB64rU1PxLQZ79zzy3zRDn77wKjjm3EpYg34cqjrFB",
  "key26": "MwcMxGxDUdEbCRDBCDbkFWwTKuS3kDbgwxdSu6HZABn3tyt1C9XZ48qE9eYwRMhHgtdtbCWebZT7s73fL4Q4RTv",
  "key27": "2VFW44tSKhsKbQHcqUEE1JRaBBCzvoV9Rm16KYzV5Li7QsVMxwurA276nmvTT1pX7otG8hHnHNvZXQbjemGVH2Ls",
  "key28": "9bNmskU5GTh7KEPvxL5fyfQRDGhwjAFiWnW2npzc4NK5yGSFWeS8UUCGjZcRwWC1wxoHmUdBQzme1P47gLmajXN",
  "key29": "5uNmgmZwxryZaUbSzsVgspY9xJKZ6HvBd3k2go21RfjUBm4U5wjivQ1HdLSB8jP2ZPTE46uvjUhVmZzXE3qMwydj",
  "key30": "2Sr55DKKSJhEXbYzWPLe8XyGBkTRnUETXXCmrRtgDVaANDfSw1RmvyBuzcL432dptsxZEeghSwJCtemr8XNvPFXq",
  "key31": "3PXiwVr838fD6iUQibLHwR2qhPp1KhcJYzormVWT7ciAKTfd2Le7GDdNUjDzvnaxz5MqjFQM2CLUASqYJL8v8jzd",
  "key32": "4KjRiBn9X92EwAtMs19yewdXQh1Wp4bNB9s4w5ohAm8NM5pFpQLUsycMjBDpgcZVMzDcjmW7LvZxW1hXncwi3UTH",
  "key33": "5UMdVpHuNNCtRkbmZs7XQr1AR7MZj3aai3aiYGakLGfFijcuxRhQ68d2NJenqU6zYtykUaJuXwgawybea9iJDgVA",
  "key34": "4j2MVupoKpRqGvAf5UEMtjNyBmEPvg9Q25RSihrMnbtufxC2vLSpZY1qKVJAe8JPXUnQoY57TjFPVs7rT3YQNLei",
  "key35": "3T2jvmTz8UFbz1wk6xhFeVARvjMJxrYgCtPvaQvSRKSJuXPtdd2n1Z3fdR5EmEWskXgZJFzdd4mzXLpYVDArLruZ",
  "key36": "2L1Kabf5d6oS28mnmRgviJS8iQoKJNequpyU2VQspsuSRs1rELSEabWVvCcJq4X9X37TmC4sEoxkiKB4v6KE2PiK",
  "key37": "4HVFZqTrJiAdhofUGtccMwV7n32WDgbo3FoHTp7YicGEJHdc71K66Mgnt1JKvZdtjHTcscRvhm6fTg1TWFRwftXx",
  "key38": "4QA37r86f2djavbHzQ4ykPkvMW7pMG459hiZv7Fo8d22PZAh8RyHQENyhp4xtLYPfBoNSCwEf4iUAm5Nxz15pRsf",
  "key39": "4HJWSoCn9p4ZcmuwQsWruC9u8A79YC8ezooswufgzaWsYJzcdkiWWPvzuoAbmNAkW8duTE6SEBn5v5epipXkpsTb",
  "key40": "36JY6SybxhaxfpSdNTw658NwzSExbseECktRqBAv4wgHx8NTCnVjcYpRGQdUDGMUpfyGN4xJ1eF91cTNPGRVT61c",
  "key41": "5QjfFCnDjSiPtJFpTmad87tvPpq6dnrGZJKdhdZZUw67ArYmwFpNWYZkcFGjzdcrxUtE3iTZNUZfhEoT7YB5u6zR",
  "key42": "yg1SyfFkhzGZ38nPZHyunAikpKYpJiiXxhPYHf2B4eFM791Hj6AAn5u9154vMrwPmdXwcSKNSBJELRg4DYUKrYy",
  "key43": "5DW3NZTtjp4KSXWMrgs6AMLqVGyEp1eJcbZesdna1tQJW4RY2NAsmNo6veVbCWWYqtq2B14v4vZWrkcFXaRp7EBn"
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
