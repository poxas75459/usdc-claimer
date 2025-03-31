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
    "5a779szV9jaNthnDWscrwhREaEondAam1CHQHC8z3DtD7qk6cHsQmstAUFPpHcQALmQDBCwfEQD3knq5hkS6t6i7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4otmLNvRNTj4puPG8wQ8K56xP1v9HeJVs6x7PF1qZjAKWyik5WUyq1k4Yz4zmvQVym39JfULiyEok97eHvzaddBd",
  "key1": "2gCfYD1pWR2zkSx6mC5Zbaz3heGPMZruw5zbHC63UgnAMzJ1h6LKW9ZGuqT2aVp3BndmLRMMwqeTJne2Svgnos9p",
  "key2": "5Jhb5eyxWrJqdL7j9eWwMLfaoSmj23r77smPYR997sNQwM8WSu9YxHTNS4ULQXL6msxWMmrCw3Qb7oLcoRNSu59f",
  "key3": "3pQrWJePsPBmfbSRE87tga5MJYiEjyWyVEyExYhTe1TRR4ASeHbhE7HqtbZSDtQk7NCe5XTLG5umxe5Xb6ti9btw",
  "key4": "53jHR1ZWinjymz4aKrRqbmkgzbRKs7Xi5ue9no7CvURURF2FZg29kC3uQPvt6ambfAoEVHTvxjmrTRwDAbN36kNm",
  "key5": "65BzapFmdzjmuhVe5jY3qWuX5psS9ru4g6fsgycJxeeFULG9wDT1hKBRg3dQiPBAEQ8gGAJfK6LJXN7woWQoA1uK",
  "key6": "2yhuGUzPFtmh4enB72H9wWZMfnWUWCwWmx9Eg9guNac7UX3k1C9JiCL8v88ugb3mxwL52ePjUySCTuvr9KdyYtTR",
  "key7": "3bg3YVzFwfz9uEpk8HMVEsBG64rQEc4rwXBYZa4twXFquq7tp95tx1wzZuSaTasRkaEx7RoKURwTvz42LxQmWcNd",
  "key8": "ofP3Mj7DkkfKo2xAtcPP7cwMKCfmyf7CCBsWw4YwG1E82WMDG4XkmKyCsMULnHS4NpehahpFF8Quv8SB2EASYqt",
  "key9": "3WekSrDBARZ1Muswn9y2QPbHngUhhffoJqurRcMp7ds8bFBhL5RTkCfeEh6aTy7S2uGUWLdzQfoQz4UAzVk643aw",
  "key10": "5PuTYiLZdjY7pth9RPA2m2QEVSCy7ZNsEhNX3Cpotc6GzHjEM17V7D5Sxhh793AsEdrUXHhjRBe4p7sH3Y7nVsbA",
  "key11": "59GXSJSts1FNcA8s1yPwTbwmWh8rbrbrvDFtAARXR9WYncFFNiuRQsKSamkz1UdLFoVdHwZRpg2Ctt8u2WYGbSr2",
  "key12": "48c1c5wvWCdKkGU5qVUVQbUoW1Xwm65RDb8Ly8VEwX4GREZky4X9JQrwTMiG48mxPuQJg8efTv2fyJjkB2i5A7UH",
  "key13": "4sYKpY2yzCs9PfSke8BdBxMvzuqJrmsoXn3UR6zPr7V4eHmA7NCa8QBMnsWSjMwT6yaU2sJvB1qHQbtJ9tLxcwLd",
  "key14": "4PKG9hRVHQaGnAyrT9vir3QgRWXu5PMfr27GwRFqymhSyxjuRfQyQELBUudm4Acn81r1zFKLsFDg3YHumPfRr4kS",
  "key15": "pxr1b5swwNps42jXwUdUsdKnzYcqu5TEFHRrvWpb938AFDURByPmeb5QvHGNDTtmxBZu1KjPMVKgN5yUhjoJ9Mn",
  "key16": "2yLZucTTJmnwD9MxA3EopjkM6AgcLmvvkt8d5H6jYctMbZCENKZKskeiSmsxTVTaHjkxXkQu7HKn1TTsRsJzFRoU",
  "key17": "5TV6X3sAKUtHW7SYsYGaX9DXJCf6Z8SCfT2ExLDLQpoVfVBA1XZXUK44aTRkWj2XCbqrw9np6G99yg3TwEJVjFXw",
  "key18": "4d2QdxxpS6h66JjXrZkAhAARgsLTjx54RNHG4owb2vbaHcREHoGoEJjwTn5AnvM4ArRdd4YSyjaaMsQcaz95tDaQ",
  "key19": "4ekea7P39H1BFkrZkyCCaL1hKp55pMSYK58qJWxxbcLrP98Wa5eoeY4mAeihz4cteSzB6ZGxex7bp5pJMYcYtkxQ",
  "key20": "3g6B21eVU1YaaoMyHZrxaWrfjHGFsihiKqAgbiKzBbM1aYRTDLGnMT8SgZnDUhdLgBm5U141watDzbjVPGkxrF5u",
  "key21": "5GzsJJUCZ6zfPdwEde5doNvoonZkRSvSL7QoM8BVd6bzZVCvt5rK95iAxqEdNikSNduK3KrUQhDWAZrKBzHd6kJu",
  "key22": "3QDrr4MD4QpiXUyKmnkbmTxnSTyN4R4QxxbTtpRaXw9xUfT9ERLfPcaAptB6Q2GjpRbphZsWe2pFyq681S5MoMEJ",
  "key23": "4y5W5iEpYqEaCGpjcnEiXQ1rVY3fFpZSTv84iqcDvdvsWWJEr39dohV52t4F1VXAomTJ4Mx1bF6uv9NAoWXGHvy3",
  "key24": "4kqYFCHjipEzThM2b7pWwaMuZ226s7c1N9VxS5vsu3HVRFGUW2uXrozpsfko5Pak5pLCSh2iUkyGgXMZcvdy3tQy",
  "key25": "3TU2W7jvWVjVQwKjBJhEHUVRX3Mcac8HFDbeUD6Rr9f3DLHD1Bjs5d7mdoaCtPoVPvvj4Dck6goDFtxtSm6UFkWU",
  "key26": "5mLsrVoJBadHTx7N6jx9oLFdkQLBUtwHdJuS2Fi8S8mJoG2z4VhCx18vTZKLJY8zm6rHMCMN8C7k6cpQkgenLBue",
  "key27": "9jtKKmZRDeggg4VucvKQxjnkcjsZU5Dr69sKNy4eGp8pwabb5h39725cSEf79VE1NdnSW8zsLTzFNSjquhBwVyR",
  "key28": "3MaQtLtYp5m9S4kPVkHS2qmENefVY2w3HF7w5jxPUuopJLhkiVhkBgLUpYJXev8k6xf8pQzGLHa2xyvjUFXBNGkW",
  "key29": "3cayaT8NRyMrMUyYvA2d7GvyxodcwEuXZf9eodANkQRa1GNHCXfLtezciFWpTuL87tQHMwe8pSEKQJu6hvAJxMvx",
  "key30": "urkidH8WHb8Q6RdduUhVCdJfF1h896P1yTsa5MKXvZtVMudrhzcvty4Rw3gz88bLWp4BjJYerqGFD2es85WgHJU",
  "key31": "65ZE5f7WnjcZimHbTPkhgNXkqaFKKtx36zgWg26XEPETw4WdeHB6P2ADSw2hAu3EmvhoCK4tFYEWUpfBLLy2VQb",
  "key32": "5dF4UN8Z8tNAhgrrMHv6L2MGcfQeVA5FTjrAHiF7S79RNBGHaUY4KxQTeoPVoWohBFGFvzYKtQVDcnCHdP2GRqZh",
  "key33": "2KxSY7nDVCEiDU7KyB9MxgA15GWewSs2yf9xqGDSW5Pry68aRE3iasXDybDVdVEnMJiP7Xq9Hn3TjxPZwgek12gy",
  "key34": "f3Z4ZTag41mPgJQ6EjSRc41YKG3YKui9voiejoA8qEQyFohvXVo5QVh7R6Emgc3cHsAYaZ8FaCdXHLtxx1GPus1",
  "key35": "2gt7bwdVk2ukjyhEREm9c9XkKvH7vZ3atmz4a99S6qM3mzRb7uq4QpQHvvLfwMSU92mZkQpJTubvwRMzzwDE479y",
  "key36": "3b34Zdr5wXiPnwZJD7wJBm5SJvp3C5Pjbw3kZSRXgTvqjALJok86QpHbpWLrJ4wdkgQ8GKdNgecLuPQ91ZM9jD8e",
  "key37": "5yUFr3vkMMNrZkok15dwbiUNvRfq1tNa4NyuPcF5cZkzrkVxFMkqzFwb743QnfyNAdKZ6vhQu348eSaXfM3VytVH",
  "key38": "LpY3osMPkF1D3ebDtVvzTYspS3rxMwMVd8L2b86EJAbDAsatav6rVJhkyyh5qMRBAtnMbrbqzpR7MEmmuvv6qPs",
  "key39": "3JfeRYKyqXaLHWoUfiNRZV7nMctUY7xkWNxb9m7ktpgDc7UiowCKDXQ8Fuc9vPLLnsAgx7CHktV7vUG2udfLaveS",
  "key40": "4Cs9M3vL5HRTe6VfgiSNntTmDPZ4kHzToKf9SsrSoEdRqeq8cSrDFDjDUYH6PmuB6EHbe2DBhzzfjo81otUiMdta",
  "key41": "3GDpHwbxBxMR94khNETHiqkDDsgRArfb9kQ2RV16cnERGg1UstnEMNfBriXSD8okQeZT6dbzdTKHxwbsZru7dvog",
  "key42": "3VW6HGT8AbbUTsMv9EFuX8bUyzc4NJhvJcbmF6HDPe6XURxp7NMs5nLFaGVWEx55eANd2BgExt5qnz2jcdxFuD9p",
  "key43": "23pgQgDoShzFoz2AaWpGjovjJtucSgifafWpCJBiLgRNARmC6cBdmo7zatUvwwUZokuHcqjWNidHGzWn9igYM6Da",
  "key44": "4J4LWVPKcF9LCmSndSWiLyAKShmw6MnKBfxUzra8YyzP76NEbTHVySMWgeetFZjntsShWScLEcaxJdZxcEzXe1js"
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
