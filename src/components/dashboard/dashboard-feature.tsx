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
    "3fywdzSAo1H5UDCtC2uWqfPAsRMKcpn8H3We8bkLSKQXcSRNQvvPfjrorkWeniniJkoegXFTTL1i19eamnpUnsZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mcZBhm6rAesMXUJoWfEiZSFBWtkWT14PqQQ8eJHkXsouTjm5kwd7FY8Exet2SohZPwEougeSr7Bm5xR83RUdm1t",
  "key1": "5P96eaSvXKkdei9FABpvf9Ku5ZhXSUomquFSRXZq9qp95y9bmb8gKwoUkaTWqAdfsEKveqyiSd9J6KdD5SaDgzuH",
  "key2": "ikmHYwU1PE5obqRXy2wYZTCh72CQMrTZZDu41n7Xi3m9NCgk6XA3rLEP17dJeNZvxqHvAruWWmrN74QD3fpjyT9",
  "key3": "5grDVyDHbBpKryu92HKMz6osmtxo1gWqWJxEUrevUfy4Pe4cikf9Z1k9eGtS3AcwsY6PX1GUTGMg7Y1PBoThZbQQ",
  "key4": "4cXeXbZ6NRV1gUBDHJRysRk1S9qLFVZVmeirLJPSqvSVYqownmgej75FdTjMLRqhqrH7zr6rpmMaKu6tVGLQJAQP",
  "key5": "4nV1B1hXpTG5RoKUQA6JX96GMnSdgRvpbudNL8nu6wiqvgbMSCjtvQfiwCC8CxpmKuob31WLXmhxWAt4vjBnPegS",
  "key6": "GZKBmDvRz7xyu4XPkaZ6w5i5iCvmkj51U5hBiwWCJzRb58sEHGKLbTmxQXLNHWExXwnSHFRcnMEqtGYrKJbbtUn",
  "key7": "22ZQEMksQQam5dL7fU7tUhXfwVqvgYsASr7duJ5pe6b2FLnaCvrit6QU847ndaWx3mFNagxsQL3Fagv7LX2TvF1J",
  "key8": "GgKhGLZXq79EGqaDLTFc9tWQT8qHn8QffwrcSuicvjsBvWcb58pfN2G6myU7oDZbpABWwp1D3u932cTyS3rnYVw",
  "key9": "2YaNMwvy81CHNNzERmrjK7EJp2UdWg8oY66r671ZzDSAFMTThkX1WGx5TssC8WBMbE7gKMPFyTJDRPp9z7mqDjWG",
  "key10": "3v62pVjCvpdZqkDtcK2iCJFbb9hnTZEgzXyKgwPYAw9YcuCqqRLaWM1aUL2wK1WYEorHxJT9TMJbNya8L3fHX6Ew",
  "key11": "5BZbKAZ6LFsaRE69ajg4F8PQLhZVHbnnv6u8UYUm8ykQ1Hh5FDqqB6m1XMxSxt2UJhYWFBzqH7dyL271db7QodXU",
  "key12": "45F5og9cxtTH144FpRDtNqeYcS8ZUJdtyALQCcu5s4BkMvchyyiXoixRqKcGdV1AdAkScCTDAjwZgxceH6tHP5jR",
  "key13": "JYthTCy5ykQiTViNmtqo1Zz4G3DYuFbUQYrxhnXFd637aufdxNNNsBZQ2WMDA64kyD6HVoTdytpsZrQcJmLCN2s",
  "key14": "3HEhqbjeW5xmkjYcPEmHFj57gVMndxGUhp32AUEQjZuQGTv61dFh22CqaoyipcYbtSGsz3CFcM1KpKbs49JNA58P",
  "key15": "288U9Q4PLcMTtF1FMxrzSo56qKMbDrg9X84WRrm2vVVS6LznGTVLwrZ5AqYrifNYkrtDdUT6mZBEp5SxNF2P4ScC",
  "key16": "4uV2kqqLoBvbzGRv9B5JEpTBTrpZPjsMA5dN4pQWYFiLujuW5eh2BNPBHVrYrHYyrc3RrSNhShBHWxiSCuwsRn1N",
  "key17": "Nj7zqY2ZvULoXg17DzsYZePjq92wPHC3h4V2pH4q3zbhixB41aWd3gg9fVZhmCWVMEhEPrYZfUqLQ5AcqxaXeZY",
  "key18": "55AqqcWQ3hfuiyjuJKQVCYCLoeMDHDdRF7Mfejc5e5yP84pebPAKYtpoNpqqWYMxAJZBXKXzX897fyKKtvc2oNPv",
  "key19": "4nhf9Y7FFqDYwbsFFAtHaSm4iJCuder6KbJ7Ci2JEWLLKYkvGBdn1ZcZrNVhyMjgW8U96NxhAPru5GL3fx8wBQom",
  "key20": "2bUguV7eoaoiZLGqNpcGtfELF9DS6dq9jfTKfcC5MjzdFqT8wCRJfNYfUZWtJYBzYyDEB3woy8yAWczqUHyYyt8w",
  "key21": "3bjqdDNUKF7kKUKXdXDFNuK6AECxUjrF8pGC2amrDfL8c3q1DPoyBnF6NHV9nzqvjPztyp1RNxqgNWbugEKS4MfF",
  "key22": "9crq4kaRdSzTpGCctFFhBztGyvVtVtRRUQwUcrBV4qGM5ZdxSGbQufKEgp4TkrPzGsya6qErSmrw3pE7F4aTXWe",
  "key23": "vB65mnBsdj3wEKyCwcwwzzBLPydhh9QjDBwEfvNkCF25n7By21RF12DmHS2yabHwLmErMPN5g6JfQiJVxHTNTKz",
  "key24": "5MxoSUNWsEvdUw8FG4VPzLvsX82YAT12ovZaNQLZEnKcMqeekf9Uk3JQx8op91fadyVWnPYkntLnpjGbCo49CAgD",
  "key25": "4ANmj1F58cL2AX2vLt69a7nznkhTtWtcBgQx9MrkkyWo4zHxuFJV3qQeZgayXfDeuLxt2rwgHP1obhXh9ERy4YvY",
  "key26": "2fsgMHvU43nH5cnWa1XSAtQ6SF19mtJoHzUUsqBe2R7xcC3f7srKUx7jeqi4pXZh9xiAfKd9G2FJsvSWPY7Eo9Xh",
  "key27": "553mb3ec6j1rPH9Hf3hAqLzXefc829kf7R7oGvN37udHPRDx6ey61z9SMpYoZcmJWBK9QWKw5D7oSQQ7DoKFFHqk",
  "key28": "Whhgr9djAoC74fjfVAkaNLWtPNEhYntt9FS4hzGH5HUqPECFSqFGbaSCsYCHDZXuyY8DZnUAGvz51NAKQQFjVKe",
  "key29": "48owCDTN6UsRkZC3VDi9CTQwvpD2EY8aDcbbqRFfnTfDTiV1kF6bZE9xCnKxuD3PJzUqTFVgu8Z9dqG4c57Xkv6f",
  "key30": "GudND6d6fsSrmaJNvg5By4TwEQa5DffKuwmrwfEpo127ysyZLVexp4xbSDTE5jAPhJFM73EvPGv35sPmRjCPfKu",
  "key31": "61TsPtcckhfLqFRLjHCX452KtooxkcdiPP1fpMtQqkRbypNsoKybjeareKAv6EgV2N5vyojobWf9bzT2GomWKq4E",
  "key32": "4gh4rWKu2vZUYVsKC1e64dSLKU26DUrNs53xLR81HnA5L9nJjq8uWxB31rymzHtkCo8VaVcjTUrNhPPS52L3VatV",
  "key33": "4bKWJ3bGtNh8DjG6F5TVGP2HhqRMbD4skQsSWKsxVxbSvqv5TcDnwFXGE1BS3nc5mGLHbtHBWBRSHXcZYvQAPXT7",
  "key34": "4WiHhwpbqSgdBeM1MM8iSw8dfCJpAwb23YC63rY66PuPafUqMGRxQqQiPufUorKtLTT7YksArSsqQFfzJWWCU7nD",
  "key35": "KYtmLUxVUxMeRJ94TyX38jVGPe5G9mKTxSwVjznRwUWhPe6AgSTQpDSJSmcgoNRJqZiSVHHDmQy1UhLS8cy4AUV",
  "key36": "58CL9vADoJaMoK2KZCff3VVmpLPpVKczHYhCBwNf4tfyKG2R7reCxB7K6nx8u1xPsYX31GkkFnMAR1HAZDwb6Ha8",
  "key37": "3gfyxBWncZYxKsxnosJVrtAWuzDwp75TzGFwLiQ8RvLTRnx9GkkqFnoTrbRgdwy4dEXvGEppyhiut9iGosfbbiEv",
  "key38": "vWs55ZeXCZ68Z2wovdZJDJYAGTm6kSwWjtAjZirrEWLo2soXhobSqSupHD8n6vZxJnAvgFvpHm75NkocMfQ8hDj",
  "key39": "5CZhTXqAdkKsF1uKQuva8oS5ZLaRuFF4E48AW9SXaiqgcj5KzoHZNDE1g1Gshk7z2VUtqjyEnoLK7NQAJ9pLKmBu",
  "key40": "3H8TVns1FJdGgpvUttkpExuLLcZxFfCYue2hdKhCbmXEQSH4ngsEwwnDyCNxavfHTEP2Du8d8v57RyEtRF1bRmZj",
  "key41": "5oLaGVob1xkh5oLWoCGT3SRUCgxwaQDw7si2H6vMAXSwv2G3NNGVZtBF8RH3NLMdriy4bKn9fDvV1T2brmFnu6kx",
  "key42": "39yxjVUKi6XhcJQeyEczFC1ipno4BgpPpuNXqwbRdP4QYjKsijXrGXg2RMou3xk5Z6URwUN95qPjQPcePZ3NsXmo",
  "key43": "2zekLhEFNgnEKvsMYWrQpyeJSgo3PBw5NhhL8dQ7ZSHcCJu7dy5PhNzSRSYp34t45zWPiKPq3uBZ48rYspU5QRkm",
  "key44": "4JdP6SkLju8T7uYeufHdJCU2S1jAdU7LDak7De8pgsLcyqnR8BmGxjvJnYroQZe67267jyp2QRYzdu1kLrg7mrwE",
  "key45": "3kLVLSFiFjTeQfRsHCytFhUTU2jLmV5zjWgRvot1LrNJ9TNKMWhGS6JjVU4fK2E13uHSdfUFKsNVL1syHhehSyNM",
  "key46": "2WvYPF1ib3fW1vfREaYZpvWkiYNuWr4MFPGytEna46HBCi1qfBcv5C2qagJPSy3PUvE2KmXgEZWpNmiFvgt7KfEz",
  "key47": "3FiGzMgVkrWYdccfo1xMqcNbW7eYazWnTKcV1FzQfN66H38LTT7Xwh3wkL4bgJtwVjZm9BfzrCmGbcBcHyZqzDi7",
  "key48": "7B2VWyPcn6KoXWLGN3kHdEYwoDBtW5TWFywmsQL5EHTHqSse8QPot3V4ZVRnFScHNcRognsDvLwTpK75DSjuBic",
  "key49": "5ZKxNxmTkAaf7GCZwvzzeRdtas7duPMccw6vdnwXa6kuhQ29xRHPSWhQRTRHUDXAJukKHA5mjgjYkoYrHatUN79N"
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
