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
    "3j1TmdEkowtvXAAasoxwZHbpnYZ2b9SXkTK9YKLHTDTkWu17TE4L9c3Q3Mggdmt59uyWfhV8xjGa3CSCu7JPQqpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GdRiGartVfdkPo7ESJMUAnYNB9QxieWKj5MB4dQGfG8GSWg2XbC1vGY8biByBGFMz8Vij7NHRz7k2j9tn5yDCM4",
  "key1": "4eETJXGu2buAJbuRJ5gfCydZGcMXWCkNG28g2eLYghpVWzSyiMckPyyrdBcumrAfs4PSi3T4iy4rZGD82CWxb6f2",
  "key2": "5X1147eg8honY37UB9MLhVi8EZCiweYqm81JPGupUgND5MB5ztfudaN2uaeFSR8FBEQAT8ULvoxzvc22egxzVJxm",
  "key3": "3Xi6FDn8SEt7csDzsFNd3Q1fEpQkQDmg6ndTxpBMZUcG1Se6sppALAQAx2U9HuU6poHY64bm9bQW2mRzH7dsjXFo",
  "key4": "5ZvBc4ubcA4Tsi2P6g9R4oKu3DQ3kALpGyx1tXzeUGXZW1kSyxGQbbhcoFYQPNe8YZAqK3ubkpsJsmEi1UBkiXWY",
  "key5": "41Fq3m8v4P1GjWbcDhJ3JvyzA3eR1T1C2sJrE3DLnWjfVk5oTxgZgQ4ExF6Nrm37jdtGsyceZYEKB8TUKz73L4VZ",
  "key6": "bpZe94pz3hfogWgijr7gzgG8SNgYP6PS4vmg6fNA46znUc2x5wD6EJCdYjfhX3mKG23u5qGSRVDT9tLMc2wM92D",
  "key7": "3NX8X3HWm3UGpG87fmyxJm8LBHsjQHdXQu4sUszBCNJ1TTFwVydtNtRgzvuQ3R6AToqCFfZ9cx3KBB7bbuaJGNHm",
  "key8": "4hoMi4Ao7gZCbUMFePvGgiseipadqVhVZoe6EJKSDaAsrRNvquWwu11PRNaNfC9oxhATmA8R9Cg3is1SKZ68zrv3",
  "key9": "4waYimkq2Uq46tyG6KqDyRf5fsEzH9KuRk5sHgy1xw8G3tCawg8fG2u8vv1KChCeytC5BSyq39PQyWfgjdWUQAZR",
  "key10": "bTyt4WYaYyGk6XBaBPJPaDbXAUYiExEhM2FHKEeVLgRbq7NmpAF6xvEf8Xa8N69URaMa3ppJY9AEK5WGs3woVHV",
  "key11": "3LNNH7d1fMbUbRaTXgdYj3ievpYCSMP53H8dr8WhKC42WSDH6Jx8vbccoFnrMqHzaL7ZkiJMpi5mkdNhR9P5eAbT",
  "key12": "rab6AZQPSFJDJWNCeZHA7TaT3NjairsTFVqnRk5DAT8ZgTEQNg4e28EEtTcMzY1psUk9GL1Czcvaka5ps9uQF39",
  "key13": "3QnNF3aeeXfqFJuRnj6LrVWxvcjJDG6r3JnkmYimQDGXrbVq67TR6uYjfWXVXLBwZgqrZqzgFfL3QywGcFH7H1Ri",
  "key14": "5JCKfRuaBdjQWvkU66nRwNmDdM3zWrURgLVDYGYVVgBTPDsBmR94LYjb9RLZM77f9ji2NieZdDznVEXxzVzX8zNF",
  "key15": "2xkfRfKi9ruyhNyQqa5MoHnYoi86dcD93rf8FYMuUonDUEYtjeXDV7Xd4MnyHJUgEHMdr4LpUw6saSegZyTuqjQ2",
  "key16": "4pHW7redU57JhgazcsfhhH7J3z3vDieeiwnGYc26JSJJCM39asuX5LMfnJh68zpcy53AMSR58Epsnf8QCGVDNzTa",
  "key17": "3usVkMcTW9SkvCh478mr4eYZLFPtxja9wJpMrkN6rTUMHMxvVuVZZysTtDNAhgzE1xZngwMdSZG4yW9hSRaxxAec",
  "key18": "3zwKJwqUX6nx24kogtVCkFxQBxuv3VSFFjs1jLg6LRj1AsucsTo5RXYxcRTnU7cKwNosFDCmviyPzL89fsAPHuAT",
  "key19": "2B8EciBTqKcZ8bdach4BxGQqXZtxi2K3Jj3KCMvE3jtjR1z8SjW9xHpa6SrKLT2RDCMgrVyjKGVEVJY38TRVMxSq",
  "key20": "47HHa4kfSqSGLjT8tUHq4RTa6egps3QhGPGXpFa9DzWmSD9A9VTmhMYhjrTWtDimthdvMjRat2JocFEDj7enKgL3",
  "key21": "5z4ZtRjGJpqsxXk9YgCjcqkc7ujpqjE7j3Cszo9N4By7muLhegvk7woJiYw2RN6HTPyCfb6vNdHL1dNVPPctcsne",
  "key22": "PJWcARCDgbCtAn65T4AhGqAp5otXJuoLSMaLQyDtqiSxpTb3v5fRjpyn6uPpnhAdMWvfwLAMNauimBHpgusJDyD",
  "key23": "TCPSCtN4xZg4guvzAWtyk8K18ReqDPxM4tejuAr3N2SXc9F6uwAeVpKsYaVQEKitLQwrVzWhbCkkB2NHfqrhbkx",
  "key24": "wEwJgcGoJcKYuWfrqm8zxiM61WQU7qdRgNa5ikcCbspSSqkymUHQHSVVNg17rN9nrhP9j4aQAuKy2hm2xsB5aS6",
  "key25": "5pPjaWTYUsssozgN5oHffV8BLWtaeufXtJidNKJ2f9xC1Lqf7VmXdHnes7xNhA7gshGEhjNtUQkBKEcgyQKVgWHj",
  "key26": "3uDoaYbeYRVpSi64EHJqkcU1PqUFD67c8qsjZ6hzMigcA8kN9FzM8AxSDsHHPrW96LJ4Pnwv49oktgJdTojcVmwN",
  "key27": "3RdkYwdhB5zKHu9Ca416GaXxAWyLDcHB6u4TrD2ZrCfpauyucdanP1eaFtp4LyBoUQPCe2htFFR3rSDPb6dHsYPx",
  "key28": "4GmJFkvHkoypaLgmhUybX2UeAJojhMJ9ay8hQuKPXQb3MJK3USf1TxkRmsgQH5NcT4AZYS2HQ2gEzrKnER5BwUZu",
  "key29": "aRw5rxNXtVUmLxsoKvc4WfiqBL6gLe92LuhzESNDC6c8tRziHRifa5QWs18CZyADZ9iREv9mtJJehxg8fVXZxGi",
  "key30": "42xQqwACGJo61hJxi93G3qUuJEHAN87oCQfn7t2i7KBzFm9TAA1vqgvdXRRrvoagvnks5wee9rFVu93QSZ6WNXse",
  "key31": "5CsEmh7f1YUwmhEjZXNb6cnZnRwbVBadCfMKxxTojGR9QvrrsSwgr2GVqNaHKCxmj1EgSHefLc7j7UGnn7yF2F9w",
  "key32": "3fJFQ3PkEa9XPZDCbretVbfReTuFB6dy9Xe4avGbz1kUBzUZFNRxHo9Jws8wqXKed6huvki3B79AwBs6uwXgdw31",
  "key33": "2rdLMBuQR2KweYcn9EjmCbgfX5yeGLi7THiC7NEiHSPkVubFRizcjTbFrZ7Gnu8nvXsCVfaZi2JdTWjZP9mfYbBT",
  "key34": "5P1bgdv1PnPtTF9MneEiPxod4tqeeVirCK8x4uCm83sVuTEfgbpkombbWqVK8CstVBHfsNqGijRzdHqvw9GQRvVx",
  "key35": "2Du5ka8LHujb4up6A4cq52SBjGKPMxQpgAsWALtLcchxe1ouADeGx6uGWr9voN1KqdaPFVMZHfncjFLjMpAASZHN",
  "key36": "2BW5aS59o2JtxVtf63V3sckdqsh9SUdpEFJVZwwBfd7ztxicchYi3F4MzXZmvHaePiH39CL5T5Kuh7RVPisgknr",
  "key37": "5YcxeKqaUFJkTLzqHfcQg8uhJyY2MDqCr22FMo95eDpJEvKmPQRSonH9onS6Jg2QmYSe7iFQBC2CJHoUoGcajiSX",
  "key38": "3wMTQJkqikcqsZgiPSnjp4ALAnCo2BSpii9Ci97qUhaAANQcx1Gf5agWW7vTJUiKT6njMcAwWbbksCCMrjKgg88m",
  "key39": "3b4xr5GHRDppsrQdFPvmMFJ7FcWgw9osA6Vq75PoRaudk1H7ZqQvFXrqpDQY3A6QJvKbgSJtoGnUd8wBzcvGc3fp"
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
