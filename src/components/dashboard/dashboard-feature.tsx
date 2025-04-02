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
    "Te7VKnrrCR2Sohuasem9Ggwt9mgRD5bq9hvUjbv4YB6u4bBFnj8frT3pYNr7zhh6U6S43BQ7BKkQM2gLs9S6Swn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BkMvrdK6Tgw44g8wjHNBLg7c7S5C8WiwDUYDqMcXGAtvEgCbyxg9RkJR3dKaQCxbLY3Y3PBknV4enEKqq3zayeL",
  "key1": "3pdvV6neaGKLxQuQhoPmoyctE2K6L5utTYJXvc55CUfQWV5rwrRtk3V484UUwBcLmDfdwic1nXe8PZg9QmhoLAtR",
  "key2": "5BFM4vovYCTWmqY7Lvti87Mr5B6n7certggktiMen9xMP4w21bk4wg9auFp5S2j8vVW9JgAy8Eo5uheq92oe6QdQ",
  "key3": "Dx3PweLwQoqSxnAhYT2zZF1oen8Yo9opP83vaS4u1ky4TrN2du3vdVL21gpyi7rCJ2VhesmfjdRyL5tat3AkAVM",
  "key4": "pSeaLLGT9fvbNjRFPFzbELf8WzavgpVnijHsbyXfYpnsUiYEkcu2rjM5GuH6VFWaYVEkWsSU1R82DWAGVzQSrNn",
  "key5": "4KFUS568X4SXq7QP6MpJrpe9FHccvrsmXXzN5T52jLbbSFDESTNXfuUU5vwHyXUqwHTJGEbvz7PjtPSvNf883Cd8",
  "key6": "zVkWaVnoJyUog7YGxcFkrRayre9zN8ySgbn468LYv65st8SbRkhnsyGfHS1nmM6rzP7D62ZBWCiaDvthYPd4RYV",
  "key7": "4Sof3aRLnsDWEofWa9N8dDCvYExr9CxBxJ2FvwrQfXGU9W2jdtKSHGLksdYQKHqsBgogQVTuXevjzX8LW8MoVmjH",
  "key8": "4b37rrHdm8Ro3Z16NeeUTRZrjgrx31UapPhmD9HsSPTxSbayifBpd1GYAciND8ssix2rYrv4YDrhtLCMkYr4auQ3",
  "key9": "NZXBvLa8wRi1MdSFCwjMpDGmjUHdjzukmPXMU2a3R18taV7msd4rWCDvyW7f7ZgM2YbHVsjv1ZNWW5j5MTdu6Bn",
  "key10": "5LZRq74GaGZfNGi7vsdmhVdU2A4sJp695wsrPqZzKBkHgr8L8MM39TkrEwKtgxVfed9nNDNMgQrQPJXhou6en6sb",
  "key11": "2Hipqy8nh7rEuZzenNb8VS5EBvaYjuy8pnMYUKng575Qj4Fc2ZzrKtKgUFDpiCz55Le7RSTM4ofsLzyyFVnncsVo",
  "key12": "w7UkzdFR2UZbxDwDgCvZN5Y5q89R9DUQiSjC5RDH1nWHrtStg9v7v2rEi8Bp6CD1M5KVwbGVSWoUNmt1CtamZ9y",
  "key13": "ppMkTyNkvHWfLiuZETXHoNdkdAi8rDUfdjteGHPTV2dDqPamfhYMu1vmEPMiCU6wnGDqCgeQsEQ5WDVvcpKrVhG",
  "key14": "43nEtP2CQEccFpw7SkASBieyQ9Mw4k8LBKekQSC2uk4SsNnZHjKSt3CrRxM5WAwr1sK1wfYpWz8rbmcVP6dBydj2",
  "key15": "2fSGkwYxDcgTb1mMLJqFvgJEHQ5hFbLEC8XyTwS4cywLFgTGnqpm5d58qSZXPm5tsRUCkVJPGJfp4EsBc7dNvZm3",
  "key16": "2bhcMcUnXZvqhUhykfv1oSR4TCcf1YytYcx6Re1NvCmsH5noU5gJXCJ6jtvR8w9bvQwVGac2WwQhPTYaQjeVkie5",
  "key17": "3XfVxjnrdUujZ5WKJPk7LzBsxcdmcMvrPTjo9hTioViSoC5e6BMnNNzaECXwLVgVmJcHYJRweuNygSGTa8bUad2c",
  "key18": "JNMoRwZd6FiAVL1LGhbdDRcsmxcqKzURCXeoM5sx8eXPoruTAEjMg2a9QgFHZuyh1FkE2tDxDrLEDRuhPr6vzq5",
  "key19": "3jQ1LaD6eBJt1SGuCDb2ufdY8d2d4xjHpG7NNWHAMzGphRD1GXtk5igyKQ919BKyx9Wm5Mf7BJmLsJwLhgbbLkDw",
  "key20": "4LjriiqaXMWxrgxavvg1Gb1kxk3ox3jsCokrj4VfiuiT97YHxNa7cz2NxXJuWV3PS57SLRpvLzBoHhEs2WCRSVsx",
  "key21": "29gUSZyh3QeF7Ccq4qv54sctcYhaHeqZ7ta8Q7Z8oirixv5uybB6ce7mf8yCSVYuBRJg9zHWzRDbRngsBwZahDzL",
  "key22": "2Dommbc6MRSMkMedi8bY5aHdaaCerBpZufj1CQaJY8pa5LDG3QyprBN5LFTV7QbmUvsw4hp2vjHvMYuqgSNnVtHf",
  "key23": "51tYwv6CQN5yQq3YvHM7v8nyS2JfhqpnBdEEcXB1JqYbRbh1F2bLLA14jPUcUUxN1L4ZsS9BCL6r6LtjxpAcy1fm",
  "key24": "4GtTPankUHwKYyXfdp7vxDWJCSmDrUkuFK4N2UM2HqFj2RPUC2THoKpLwKK3qk95v2EU4o5wQx7SurgzhhtLAc1q",
  "key25": "NbCKrUKUZoqwnsimCC4ZUb8QyWEvrD55Jh8o8SoRsC8qJqF9YCYbUUha47A3RhvSMUB2Amh4ZbLRjoWgkPMdpmL",
  "key26": "5fWkyoctRh8xGWV6hd2wN8UEkRtmAuFo7xoUhWosvuoU7FXyiPLPbkyQo82JgMWj7WhGXWkWEwjazFCrkEb8movp",
  "key27": "1yp2nESoSJGjouUN7pP5Gn7j2R5Uv1rSTuyQthUsUG35kFzk45DcJQjcSGna9ehfxbHi95EFfkkD8NDuESfRDWu",
  "key28": "qrcdQGirui6T2QVW3cwiifcic2midsfFfp7pxgiwbJsj3DbpoMyJKcUrJSjyYRZGA4ibzxJiMVi2ZpB8qhqnR4u",
  "key29": "5L48g4awv8iV5zy7gpU4iiaSpjW46yNYDguYTLpvkZbm4kXmQX2x5nm6ZHoVgNjP3fCWZGgkNkRcLmfHiUfCgf5L",
  "key30": "33rP1AMpVKCnqK87XbSQ7BAcM9Qr951X1CwWYQtQpC8DM7ZwqTf7Vp4CtpREhNsRGY8aTS6Q6nnyehvsaMLEoHYa",
  "key31": "3wSrA5wVzEXJByGD7VK59xBC6QyxXvXqYfLbarfppCSYujdcbvpcjndgq7HjiwjcqQres9CjTkuQ1hqfEvDsg7Pq",
  "key32": "5oND1c7yZqJP3eiVZNuqtpELAiiMph81Bjoxx6HRnNEQV58ELWDfU1FxnsAmuzUuEvtRJ44vqweqkJBfxye8nMSN",
  "key33": "5u1QndvahETuuTqY19dgPvota6DPRQpnqtbYoSNQv6ETFdbz5Myxj6uts8WgyTHRb3LFuZmb6LnkhZypuTdQzEQk",
  "key34": "3Q3HmFq8vZ1LGGUSngBr332Ap3GvZZngMdtuvPH7TV82MAq7QWF2NWKgbZCxAZQ6SyF3wav8fF1mv7iqD26vdHg6",
  "key35": "5TERsiVcWXVPnfKYB8Gr4iqzmgEDewkH4sfFrmjPNMKVhMcMEsK72oriRpJ9o3YaGPDieBsR5yczKhKiU3EUiDu3",
  "key36": "591323817Thm2BEGmZtHEL1LB8G5cvYCi4g4qV8h7FezF6KbpiDtmNxgRpvt8J4x7m1GiKsCWivptFLb9fvuWyQd",
  "key37": "62MtyrzcR7LRaWT84ZcQpnwQP1jk7KAUR8DwB78naMg2DX78yVmfgGGwYHBq6tCZ68Fd6XjK8zXU5d99SLUoam7t",
  "key38": "4yvMX7AQ2HsJtJstNAB6gwCMT2UMKwgQ2N78xMFGUChTEMW7AyXaRAVvfU8jRiWHu9jkCoRop9vsgC2pzCcTFn2V",
  "key39": "43Jd1bJ9b7YkrxqkmapGQ7z2Krs7Vidjgz13VyfvDAyoCXkccgf8MeaTYUtTmGSht4aqEETQ7UfTGPBEMccP19rJ",
  "key40": "3d5JeLNvtRhaKv93w6RDYqFqfZxpaCe1RduSLxeiScpU8Q1sNFBMYwEkjPRHZ7dNzLHxYu5NiEX4AmT1wsdZTyW1",
  "key41": "3UtweLPEhLhr7NFw18EYJZ6BDs7fadwBxXuDsJGoQoNPHKXv646WhH8GXDuhvuxTehAMntsN4Z6QdNFK32cduPwK",
  "key42": "2PVw48BNtXyJwDFuhTAzukaoBJufUQ31Ykqj7MLmRGEdVtJGGsnTczCYDJzQNTLK6sPH2vGnNQADcdkdibd98gmP",
  "key43": "4NMDgnWguLKFU7t9m8tyZ9EkaUxycwKsdrxNJfePcZp18qUJnE1ef8bLpUWH38bxXeHZ3i5HzqXYEBDtSVCmvkn2",
  "key44": "2Jrci2xna6YeS29pYPX8Sev7LDBfY4QYxdTuAWpRSjguL4hneCH8fYMw8qSDYmegTRnxehhBmW4LbTGJbBseNAb",
  "key45": "5VG7s3Ye1NXb7wUhkPGQUb2z4cEG8GcxyJP8aZWtt7QcE8VthYjAFxSqi1Lhc8hFMDLR8X9Pc8EkuF4DMYWDnN6t",
  "key46": "5oirYQgdf8ihoxh4MxfGwqFNZzoZfLNmV6rnE4tQAaCkMxB1DMqEs2dham1xMTsPyWtyQXuribaWrZa1TvJisJmi",
  "key47": "2R2cxojm53fDQNH6j6jQp75MwNowhZ45xbkmzXeYB5dE4ZszJhzdqgGo6Mgf43xDHS1R3MbeLD68N7XkJLxcH62A"
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
