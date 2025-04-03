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
    "2XJ7up7uZTMDRGc2o2UsT7PNXEnLxwyqhdcRCF8Rcb5gYQHjmvGs2hHM2Vyf243V4DYuEMUVwknvfV5WrEfjuQb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46nkiFN6694w68GgCHJBcDcfeAytWMg25hE5a2GJWFjCUc7FwF19eSWdSKgEAhrLm7ihA1WC3vzioqqcbJ4krnA6",
  "key1": "5fVTuiipaVGH8EvnxVYu5jvUSLnySjgyS7Ue99AnuD5HLUr3uc4GmcxUsZjp8oBLchY9GuDYb42qQF67jXhj1Yc2",
  "key2": "3mDBo9Fv2c1ekSru1Rxjx9oZw3dL75kcHiS9XkXvsRFKerQA9j4GBX4gjZCAMJeRDBs1RMhQWNYQaoihoEm2tiDY",
  "key3": "2P1xmJCLTweBkMpTYpjDKnRcbfURKqDKdV7MCXXFWn7WQsLqVmXVDUhkSM2v6rzhJS4sQJ3Wgfpxk5phqeEpGyR5",
  "key4": "2sVUepsqcnLm1DJBRhZqsVZ8CaSi1xDAdTq4EozwCGmM6pftfu4VM8hTeDQU6CV2q2AnU4ZgbgbiVxjbahVxpGSq",
  "key5": "532p7XAxyq4N3H94nyATc5XgJKGU3e38fWXWqos139YVsYQu9dQWjhqSoQ3AjbQjU8yF16YLf1ceFa1w9pLCc7FH",
  "key6": "2GgLP3YH3GEkCx2BkFWE51DxgKMo3nNibzdYkwr4uud3X5wHZaS6VM9DAJGrdP3UFEtqKbkCeRmdxKsDjsPe8YK4",
  "key7": "kbeqhq3svtz3daj2JQY4X4KdfVhh2d5sCuP8JbhtqBCLUmr7bfqVYa1Dt51WqykFPVjVSujHp28i4phyAdHsJjn",
  "key8": "5D7ihB4W52aqwHH8NxwvZqFjRzmPsW1CTdhQYZknrK2k7TpdZgcgkdX51DJfYJTFmDCQUw4haMnsJKPgTG4gsmKe",
  "key9": "23GpSbRLjQj3g3CBYge5LEYF9kDrjyJZ1FH4rfxazeVSZCcc3zrCBkAbhc2xAnBWenC1rxL9dvXMBSorEvm4GYGd",
  "key10": "3QSUCbEBxEQNBAhuDqWoZmmnLZmzQ1Bm3iPbXKveHmpMAMaPGpBhP7QZGBkTR1H9XumS4uL1Tn9sw2LwJdpxUMrB",
  "key11": "3cVvYAZ8gyHkXa1M1XjJz8UPoZPyszVT7TDdPeTADSCo6vLJGekz9k2j34n4kg4ARen7myeGtAEHTRhDp7NVzSha",
  "key12": "2d5ByRtVRbxQ6AMVsZncrbE6v9je5N35cT3ZbcXTwXs3u2ipfcjKCwZNoGbfXUkJKibwogp1pEvfDcLAXAUMsLSJ",
  "key13": "4ZaputfdKTgspTqkwZBJV8pKxf2jaPPffvhCBgsukygawrwPnEPoZTp75m7E15qME1q91yweptgfMjoyazJvf5JJ",
  "key14": "4gGukgQqXxs7rd9XRW6x2MUGRHGDtCp9prHtwBnKicJZTtpapHi3qmGe3c5Qbt6KxLEHu2XuJoQqw9rHsSmAr3xn",
  "key15": "4GzhttxMbs3yayUXixZkr3xDuUzAByNRARk7ae5pYkYNJ6RNyHVmT3jF7Mnc9Myj6Ci1a7h4b3AsHkuRjaaaGq6Q",
  "key16": "2C6CUieYpUdTKoHfccmHU45bXAngSdsH1KooeQWzzT9DGKqt8bQwTuRAFgyPL9gRq6HKENSPgFt1MBWaDCa7ky1E",
  "key17": "5AoYpEgbdBvgsMXB88aW5jqjtvk71BS87JyZmDvGuXvqDNQEdNdYQWhPyUdHtfDoxfDMaWKcMjHn4nY6mMS1xPCW",
  "key18": "3frBcR3Nuus8aY1f9CAcQiiGnmzg5Rz4BxEGaEVT9Fv6nCkfLEgowXXbkH6ermESqRsos7Qj7982fpvkBLvhVgpd",
  "key19": "1chjSLUcGmXB7k6cLb1nh3mgvfgZVNaXRx5q9XPNuqhuXUb6XSqUu4QcDNs4MSmeKcWTdFF9Dxs1hRYjjrcBhTr",
  "key20": "5bsqqxBLCoKCBX8pba3UBYPVsL4ThREtWFsxxuLwNL3Ye9rvuCLk7skGKYDNV5fKELfMCqrDSXaYEqRxSYe6AjG7",
  "key21": "23qaxvpr9NwDMAHnWV4RsYwrj6WubQjsvjR2m9B2uJYoTeC1o1ED7cq9yzDsQuy1NkptZRENPZtsLfKRbLoaTEgj",
  "key22": "5zbZrfiZnNHYa34hzu5U2SrTzpMh9irwe3xC5FUZTCegh7R6eNiqT2WcesSdpM6AyM8vXUSwKFRPca5SQYtUnWAT",
  "key23": "27M7s6Q85sHhuYEVkupMEJDh2Vp4r497JdhM4LXTAeDyGLXRYXXkjK38s1wfEtKJLBQVhwc4JKRmVCqPnZuxEnBD",
  "key24": "ShgKaAY6NGFHJpZqsNN4vq3u4Z6M4WesGTefhA9mXarz15P1jNSecHcTQrMYwVubsoR1JvExaDoA9i9EUnGdeZo",
  "key25": "FmkUtNCKmoURTgmEks4tgX3zawShPGfsNzJhyjiZ4V9cRsQVpHreV2qFAtWfzjVjWkweu3mcpvEUyoYbTSe3yHJ",
  "key26": "2cmHR3LA4dkZ8ffXsdiXYb9fPpdN944mfu1pNuA1pEBSfLHyGQBN9SjfqaRWpC77Cj4L7Cv84xKWCAXm7VfCm2pb",
  "key27": "kqPBojSdp7eMijcrBhxbhALiRLvXdcbs4po1dZpWchB9Mu6WrxShbsRQonvrnneV6stcxYZQfVJMZCBANDWXgxj",
  "key28": "39RnWBnoBuaFdhfNCVUGEoSE7Hpo9KKvfjsNPAV63N41nsGND3c7SPNgohWhmuQaKyNZyx9gt5Sa9K5EhvY7EdF5",
  "key29": "59SJ2BHqS6NZVgQYEVYngyxGXyjE8q9TzJx2ZoGxU9aZQa3HEMKm7V6gy1ZFZeWG8gNdsgU7GeHxLnLqFow4wLBU",
  "key30": "5rYYunDeduJXKwH4G53Dv34XKS5PkPphpSyhQvDeDMADXk3VBmZhLDR9huw4bFVen6RfS9WehUZVoesU7PYLRkHX",
  "key31": "5xUjvA44LHeKWC9FdZ6KidUSoEcGYeeL2a8wxWhqSc1Dx7KJPmEn5DaHZSUQYjotVjG54YonqUz1K1e7hcNWEiNh",
  "key32": "3Vkjbzx5qd7FxbtZZAf2No4gBiQsGM7TqDdiw5r7Kp5vkDoHE5ffq8Gw1hr9KuJcarzA7P1AaeCSgZgWSzGWrVdT",
  "key33": "4rMrfyaYUK7pFpsfF96gEJg7sLZxSLqbsX2sMvNi6R29XJFokyWfmf2mLvmS87TTnmBMcWt2n2jvQkiw3zVvsLJW",
  "key34": "5mjqhEyvhrodYN6YKEsnwrNqFm3f26215nsJBzeHsAjqV2EYuXm6JCNn3CPctTtevyKiizubdgDosacfPVYknacf",
  "key35": "4tsQ4CBsUSZuheCEdBXWSzrDnGqWaUNq4KuuzTFHRpDVXACJMtgtzSMWTDCyRAMWU5oNjqNmepcTUJMkcWLX7xHj",
  "key36": "WCfrijotTD976JQeFiwG5BwVcVNy7ZkfWVhgPxxj3jHwUNwYdZWDmNfpzJjbiAZ4Zroi5ai7auFm7ZwtN6sGtpV",
  "key37": "xazV7SBvrNLqy1WeDukz7ivHUDmnCFRfn4dFZVmkSysTNoEcHEc7HK9bEPF2B8Uy1mXqypCpQvpSafNRWfyyAW6",
  "key38": "5x6w6z7QNp8gALHy6qXRG8yTp1cnVwThEQGiRLGdqjV2SJ2vGUdvonj1u8eR7PvepHSXiFi22Ddxjofdgmso33o5",
  "key39": "xqc4xyqePRKihdWkTWjuBWPxZVs2njtYmYa6HDnAuBr42he3msJTzmYvqnjyYABSZYu9UZ5KHxYz5JsY1C7wy52",
  "key40": "4fmDoqUKQbR5SKCPknxTWM5DRMs8scrM6WDwWXN9BKnequDdnpvokQdZqhqs4z1fXTJtYHccDr8zP4bUzUp3C1LW",
  "key41": "3oPxYU9ChsFAAi6pgCMsBsz5YgzWPHUySFRcHqQyogTH1XK5wf7caxkWQXxL331V1NdNFghcxgays4rPUEG6XFDh",
  "key42": "4YTvg1QTztHLfTj5i5KrsRRte1tbMFsDyqGkR8ytFohgo2tnuk7BKx5JpDS4WTmmcWB6zhFuKg434kTyV8Sr16Zx",
  "key43": "59iM5CKSwFiDdFQaW4J2mLaKgR6wr9dpb6X8omoFqKC4o5kU8QjmDxebzHk7KgJaPi1Y7Y2pDjvwbMJvhnransHN"
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
