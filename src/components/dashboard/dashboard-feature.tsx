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
    "4FD8CUDYvoDzToFnQFMyAjCNjk39R5hRHmSeZXKy6KF7vjvETmHxEPp8gvDD1Grpo6bPpfLwxvvpCuvixHy3gZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2det2oCYMKJBVCzVeA5dY6FYY222PLdnFK9DNge4FSSj28hvXKihEy7FAQP8PYS4c8xJLJUq3LdQ5v7191YAsJ61",
  "key1": "23guJKzHY7VWS2BwnP9siUrHgo3W5PLKpfE2GLKGX1qoSWaorV244sAqzYj1M6TWy1rf8mutXcpJKRTZFZW1BPnG",
  "key2": "o71o9W8EJDUqFGLcpjqTXNNTY5sXQ6deGsbPdR7x3RUNYG5RSWBAjzCJwzpMPZLSnyqpLzgyBs3kHWkAD7p6Qek",
  "key3": "kKRCP5ED5HQpFDpts1JzSL6JtGzQdtA8XAVTMM2zVGDsdWKZP5ZysFZPNhmD3hJKGBjSNYr1hhpbo1EmCFHNeWi",
  "key4": "3cjwosE7gyQ9uG8KcGjMJQ1Lm2gTDGP6qGNcpaxbPPodCtQRX1wWwFuUQRQuBfbujhrsq6CKEszgFkVqENNJNcGs",
  "key5": "2pHsXg4KRdtUJWrXQ94i3S5NtfYfLUcv3DRVhQbx7cdzmpvnQMKNgwCouzMMjYgepigNNWhaTz1DrG42xmxgwMdS",
  "key6": "YiQ8ydbCDpNd6fEw3mKq9eUvgwbuya1XQBJmmNyoi5bXqxmUHddQUj6HsuJsAT9vTXbj1bSx1ZnuMb2k1a6Vzau",
  "key7": "3tznaQ5DsTmT8WASiXCDJxhWpCu5tE8XRaJ4aHfSAvWPWN9NZM5uQmBkRhBN8YKTCkAnLaMoeKDLqfaj1BTHQVUP",
  "key8": "HnUkhf8VcLPP66UZtvnDn7P52ahhopCX77WowrLYL88BJgx1bNYTNbyrJJ81dB38mpKu3oiwimjL39daRPnu1Uy",
  "key9": "rcmnokFQzGGR5ykrgCY5VnKtaiLcsFvLf6Qsa895m6encsaaz4JtRPh7PjQtJJDvpmAYB534AtpWs9C9L1CZ34D",
  "key10": "4TuD2f45TaY5rtBtjWRFv1rH7pu2BEDFZyxJxNi3D4bQL3ir4rhzmV4CkXggMBLek3UG238EfL1dbGoXXFqtEKew",
  "key11": "4ynLsrE1sPtKiWBQu1jmivD2TnMVeCpFHa3uunz2wK7Mc1g1sBvSetQ2k1HwAtTPrUbgtCLe2dzUEph8y3BGfRC9",
  "key12": "4gcQw1Qv66hf26WTSGJF6yorJZfZ3TZ5ccAoMfUL4yFt86zNwX37118dpk5uK6f8xdDvKuvgbSgqwnGmdT1KjQT",
  "key13": "3iCWBiuPhZRMgiTrcQrfEppJxyx5URsuMBhh1rB3qe4zbYGfymczm7EFHSoX3Bffr5M6N5ZpXi8NHjJcNvMUPzXa",
  "key14": "4gAMC2B5e6Ex9Tsfr5DahTTppfHHhiti7jwF4mfGHojtMufVJ8KS3a2kgLp75PxNkFnCj6w84akEdzCbxAGcDukp",
  "key15": "4b5gPtEbZoxKzUyS1d1nyXXxFicJuu5v4kxH98HDEhLG3E6nxaYTML8excoDZuP9tGPU8VKhDJvAQ7xyXZybb1ma",
  "key16": "5cUyfvswxGZbBkKoiJ3uhZdxeLoRH5duV2Xk5LBAvCpUmUhD5E1DfZoXhTjfmTVFcsQKnsE5rKPPSKSbHW45ozh4",
  "key17": "2UvENnXapf3pSCLKgq6JGLKsmrdqvASSTE6E5SZQzCdjWoK3HfNDpA1xssXy3DNvYYbWenMe2wNorZLC4ia9DtQW",
  "key18": "QAXbG5dyFsjvVK2RXpaun9nZbXkDjbJjdtNdWXNSkNT8mqT9Qs2Jpzs5quq6gYNRiTmAZ92nefjdNgkLWGK8LRa",
  "key19": "3braftpcCkW7zkiEXQv6nCkYeaGrbq573vBL3i5tquoDXnkKbXS892NxAnZ8rNfqss5KNhkt4Uo5UyBvVpqDopdD",
  "key20": "3tjH6M3YMaKdYfou7UNJtbcaS13c11nDjs5hUCnU6ZcxPUp5Dn3aEd5X6a4i927vLPXq2UbS8HnFJoHNPCCBQCRb",
  "key21": "4GxPosEgR8nC6LXi1pcK9vrG3fZnt6oxiust79Km2caLAryT1rCWUcTsUHbWVR4VzGNDYCBqiWddtSHMYwxqFGYa",
  "key22": "5HTKYsvBcLVXjQdq2etL5JXawVfqvdDoraQWWRi5wXjizQFT82iqakqdcYzbXB3FtbumpK6tHdK3e79CnkcMHJev",
  "key23": "49mwGtzmZF3zkew4dx3grRJ268YR9S8amR1dMEThxPJ8jeL6K7byUwbVD2TpyHfjG3PoA36TsVd5tFkpuNyjZLNJ",
  "key24": "syjWpnummN8McHYmo5vUCjkMEZPa7ZnzGKjimR9gjLn1qoWAvLWQarNoLD47p79pBfyQn7Pfx7RexTNDXTNPUok",
  "key25": "2NmkszuFPV6Xxps1GD7N9iKLQEptQF1DNEzk6yLWcrJd9VdYcBSNF9S2tQhttqqq5Hvy2mJVz44W1trsLwDmuJR2",
  "key26": "KP4xWDXRMeNqCHzeB6XDEqKPtNb7zboRNLALg7gLc64LwroET1e7XeTdkqieVHn51UXwtG28eRufznESBtHRQju",
  "key27": "3YERJvejRduRUZdyt6KxYoZhLFDSXaTC4cbQzYDH7gBnhrFC1qJTpYJbXHtnbLzrM7DyMzfWDaaxnt4SV82PH7zV",
  "key28": "2jgmFiYtBNMGn6M6bAqH9cqrwyG9EnvfpZgAcnMNBjUqj78cQmyP9NFodgdWsGvCMgGd6swXAaebsxS5ijSkMrDP",
  "key29": "2ib1DCzQZ3c2u1Hiig7iGvTmaF7ByQRJKuArakC5wH3UMWwCmdrM5JEVq7LagkxLpqKCEpycu4sboLkhiRAEwe4h",
  "key30": "2j9gppzWESu8DesWrF5QxEnHxUBZ8c2PjknZX9xMWgougjLeZwGW1wUSMkrRY6dPnLVXMprqku1cjhDat2x8HskL",
  "key31": "2hGwLMZE9Crz1CZ27iMdkbwbHQA8JL6kGMVmpxffpbyd97uGJybhEG33TLkbDrBjUiZ9PQ7x6T26tAnYaUPap7Lq",
  "key32": "4kNijGPovp6bBHEw9oi1dekVtJ1hcwUqek1vihSsNnVxJzY5FfnS3g9QbRedxktGs6efXPuiaqCegAqctqHtJUYP",
  "key33": "jwLC7SfjArfjSstcewKSDVtaHPmcSj2csSGguPHhd3FSFBQzK8NVoEMVJYB21n4yaWfC6TbJnsWAGpX24WJrrSA",
  "key34": "64jJRBLeqDyAijixvFRe4JYwZS8a2uyKKDUk4Y2pLahsgYgdkku7f43UciVpRALLyRqLCWrMoSQzpp2tRFUTwGiQ",
  "key35": "PbkP6RhGLx5pipuAEoWDB48n3uCGGwbhnaj8U881ZV1mX8nDs2nipFRHb8npSVwQdKtUk6F5JQxzWWYX2kUps4u",
  "key36": "4LZCEkyKasfhLyD7bQdaTA7eVJqsiQ8bsh7BCJRrMwfvCK9QFGjkiJgYS8dQrCUMsKktzHwoxva8QBnMc8vDxRF8",
  "key37": "sU1rpYnejvijNypRyvN8Ya2FRbsQUiLTKuGokfuVMtCc6p6wFpvBCtNFBsMZBtpJgirtakc8MyVE1rWnJSjgvSq",
  "key38": "3UqcnAFh4t8Zmi9DAbYfcMpXKSUmfuZtvfpDU4xfDRyPBsF4SCKCvcm1J1nMoiAxtewzfuGiTK76pYhnewYqBqSe",
  "key39": "32nv9Wcdn5CiDJCKbgu3PgTQhoJviazz2mAbqorLeaHg8R73ntSb6netfXGBb6MGKU67fMdNcmxT1xEt6UrwNn2M",
  "key40": "5ggFYdteu4g7uBNNttkMRBBrtQctRhNZ3TzqrwVifRBhwNSLV3PJvYcjnfRoZj4dz8YPAjka85usKXrMT2RJDKK9",
  "key41": "3S87EMqh74k5EvKLcK2RnxReeQc9iMk5vq2ivJBymySod3QqeY9Q63yfgZvjAiAxyk87VUiwVBRtWScWxNfRQACi",
  "key42": "b5x555kxkGw6FsSYsMrdYz1rENnkxqBq3iVMXN18qV9Mqjned6g2pC3L2VkrF2BM1LJ6ojLH2wKrYdjFxsWKm18",
  "key43": "2myhG4DSpkoPinGVgdYbypubZqDdkqaMhMerikCuY5KRapojTKq3qHM7CcVZkESu9BRCL4VK3d7zKn4WQpMCqpC7",
  "key44": "2RzXtHwaNPvov5cPoAqLGWCTvHCNNXXvdGiaSeeJQU78cmy1fZdVrfAzCsvuVKNSbiUPHy46KvYUGNv5SLdyrvTU",
  "key45": "2gY52VAdRmhbdmZZzyaCn7QzD8Yi8CZDdiz39vES48RkquXhKGUqFzpfrefQbqfjwzzWstKUj9FiMsN3Rn17n15W",
  "key46": "4GRTyivtkKy2dwq77cyJHf7PSVpxHtSYhN6rDNPcBkajzixg3rhFXxPE9cs2djy94sAFNpaKkbmiywdNp2kneVUZ",
  "key47": "5TAq6366MrqHU92MsZWvUxjFVQGTAEn7HnQUg1V1PP3FHviBr928TWUd6Wgy7d1nAh97HbmJDZajdqxgbakT2cdb"
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
