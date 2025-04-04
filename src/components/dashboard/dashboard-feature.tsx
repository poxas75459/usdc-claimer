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
    "NzFCpoC1LbaQ5v7zz9YQCi9YfgQmzjeNfrBuLghHAhHXiDtYhbkR6uwpKnESWyifsCP289fVNVfJyzH635jjc6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VjNaU6Fo9Bf5ocjYMXiAQeKeqiBtWJ7AxX4D2DzLRmEy97m5XBnxU3p7ZJC7H7dey29HMP1v4mpVLo3RfvvjroQ",
  "key1": "23iVSuupd4TQeU1BwXzT1PXUG6o9xxJ8Y2DtifQAzvKqWqkn3spBjkCYUErD45yMXsvCN5w2jq7jDBtWGdzNvMDE",
  "key2": "3bzK8Y8ZfyDskHmCY6ZQAxNG7xmRuG7kAdpsVUYVmzLXLyiDchV4GDcE61u7vEQsZ6yW1RkQF47yEyfspeKmN7sb",
  "key3": "bFpSS8axmriPWJKLojThbdDxeFDcKH5XuEKn6VrnJvVnxEjf8GXNhj33xmQNJEE6i6Hf88v5U2GsKe3Bg52bU6E",
  "key4": "2QPqEvjn2JpdiaxuHyHA6WYdJDpmKrrQib3gME8kDcFNatmNGTBKXRaPyuUKzKkSRfxDNoPJrMTsY7cTR7Ya3AFN",
  "key5": "2WPzkkRp2tjXdrmfiyyQ2nWjojZb5uh6thpPoMMG73jnt3n6mvV6vvD6aPQxz5zDwHjuw1syg9oqNV92wBCHz6tp",
  "key6": "3iYJnwZK7YtgvpuRBpDhQ3BbPybLFfJr4BEQZdVzKJKNfgdBvLKjbt1qTBEMfzzYcaT9RXraAdT1B2FQ46eqCC5n",
  "key7": "tieJudsx8qyKBha4a2RWkvMCKesnhwL56tmRAjhK4ykWca1CcAtSZTJr27RXgYSjZHV6EMqa5aFh6BdkZz24Bhg",
  "key8": "2ne43ZgmbaJDarCpeWqdN9f2AU7jskeF6CXpxYLf8cjhPuKMLjGeoM4vMWRViGg1oipVqkzXVAjJwGp4A366NuTQ",
  "key9": "58pePME8TjxJSFmgtrY2Rt1eSLEoV67N4sZ6cCrsFsGKcVgeirufobBWNceYz7qX6BHwehwGPTsHjWJBGYBg3U7c",
  "key10": "47MeqW3GNAViyXLX2bJzH5eX6fC4PUqACTMWMNw9yXb4NKuLEQN5MgA3UXKM5EwirHnP6Usq4WKehhh7bogc8vte",
  "key11": "4nBrjcCuRZqFwakvT9t3kbHond6VBB1CDYcaTH9CPhojCukwFeqNgcn5B9fNxQ5rM7FJob7GT1oq45viKGNRTySn",
  "key12": "2tLpWSUcBgB8U8cqts3jBbmUotim5f7S6LKptb5jx28JfJrzahsvWSxUE3zp1G6dbmDRaGoatXbr6StroWrQbujK",
  "key13": "3PTuMUwwc8sNvbG9pPj5adS77r2dw41Fm2QSvLVd1kYmi9DG9CbC5nGTLJoDpwDQpPhxnhYaY1ok4kA9jSKy1MCn",
  "key14": "2weetqTJRkQA7Bm7bpai1NgCPE84hcujmRQc934t9xUh5m7sApV5pNeMfjPW8Bae9Heyy52wkWUxHkMV9mCNtoNM",
  "key15": "DprzApSN5iaAwrGMch9km6zbhNgHXuv8rnLWEu3VKX2gfHSGeSMsp7pBsExb53wbdu8kB9rreK8dpqJLKuMB1d9",
  "key16": "DBM8njX54PMrWRmEzmmEXhZ2KysrKgXLnAPUPonFiW7H6qs7MsMD9WgQ2ac71GLygAk3KzqTvZvKhpkFxV8oLbB",
  "key17": "Tb3XpqmRnk9LkhDCuMyubcQEhuW466NWwiigwgqXvXejGpKkC7dPkhgrB9VK6PhCjgdk2vUjPG2z384ue2wPugS",
  "key18": "zX7c6UhhUSnKsRavDBSUbg2RLyExXH9u6Jr3S59bz773xbVGqXazpxyDXeXwBuwdg3GxuDVy7AqiXu67MyyzVpk",
  "key19": "22GhsciXii6hPPpdiWo9ZdUfGfEBoKsyAVyb6HxPX3AmwsaZ2La9JNDZpxsKvJM6XyETSrWtbUD53tjUmvjsQDxN",
  "key20": "2mFV6jgz3u8GChPHzMJNeE4hfkzddCbvC47AXUjSWNugAbzrw2THZSNGqSAus6ZgvZWSNcWPqFv1zhY8ybQBVpfR",
  "key21": "2Z6DXtpkNukkXy5h4Z24EHKy3bspPEYVDxBQ1Tc4eQKadtLDkk44Tn14tcXzXPkHKPvMjHmWjNwTnSTWrgYbvbP",
  "key22": "5bJXDPPfiSfbLyKiUPAUHCYpY7DPoY4smU3d3EHKUsW9WU8wn5o5eQygbM2gNyXr1KMKb4JjVtfi5xU3XmDLCyw1",
  "key23": "5VbzEMonSnD6sR2fmJUpEVswnC6ntiZXNtJdncZXEMsggTthpy7x6pko9JZkBgGtUdrJszocCcYDwGjvmBUmV7M3",
  "key24": "4uUw3TPvzTZ5K44JNG9CCkVFcR5NHzHRY79aJz8s8bDvRhMt1597vsCZjiQmSWFTyxQn2JgTvxZ6ict5TE85Z3BS",
  "key25": "2BattZ8ceuNNRxs3RHNVNA6dLuHZKyxhfp4YmeKmNberVRiuxoQiE7FYe3HNhF7H5mHuWHn2xkLA58j6rD1joBNA",
  "key26": "4qBq2MtRKSJq2LWtTymDuuLrPzaEzZBUEcrgXviGUXwmy3MoohBYA7juv4m3WbNUK77KKwWXaT49d8P7L4ChPVqJ",
  "key27": "3Ue6Uj1pcRad4BXUxr3YuHxUi9cT99SrWrDwSVcq62gyHJ9KxiuJm3EbP6pyDyDRRm1hJE48AEcqqjnLX2cyrbMD",
  "key28": "5J9STsyox4UZT1e2zhCAYhPFocaWipuTGfizVjU6VdS162gSa3nc52LQ82iKBXKzoXgd5yoi27vj4tHCAatf9h2U",
  "key29": "5pKWFpC1mG9f7SWFC59DtC8CcwZNxhfJsNLLCJAhNig9bBpbLREvKEHsi1fK18GKt6SZGx4i2hvfK883KSEcYrAs",
  "key30": "ZvG2iPvMPbAfYvdKtcV2tWK1bWFMe8FsTpUBXVUPMK7F24gM8RyH3yjHWogeeZDyjCiKhvVJ6LzrETCVcwgXUuJ",
  "key31": "5qgp8ny4ccvXAz2LjgkPvsYNma31MpUV7SdcD5qC3hLNAck8DaUhFqGyqBk9yznDPNBko1QLjiF3ttjYfNfYnbpp",
  "key32": "4oCN5m8a6e3RH2542hP7D29zhFm62hFoZ5psdf35L8oJwHVARrAKfxpGfiYV3frTCbD9R7hbWYkcYCEEBjziG4uQ",
  "key33": "4jKFsjrTcpicyjTneDYtQdBJY9HLuidUMLWYJkUptgMpk2rXfNSHhdULXFz7jKWDUHrqhvWs2F7f6RjNMv2BEMLi",
  "key34": "4fqeHKgsxatZDXJvruYkuRSouXuXRawdiE4aMt77TbdCFXzdYFguZ7XKjuWAHbiUiXmbxUBLaomZUoY6Jwumc1dU",
  "key35": "58h3R6qaXu6Y6AkhoaEwPEgqhsWeL2t9ZAV22g58bcexBkbyYZvpMnyxUJ5mw8WCHp3kkAHbfKzPA2B7Pg5Yc1eR",
  "key36": "4pPww224Kp8MkDUm6ajkri4m92RrG7X51emQZE99xkNz2m7qmXu7fN8rM9joNo6KpYH6KbXc6WP9oMM4HBN326XU",
  "key37": "4eEzAMgSEHsbjKoWPKVdu9GZ2UE3472A8XyRERQbyRdk9Tu6aRzT4WoJHBdFfWMxwAMgCbiu4CpyN1QmCrPfNqg1",
  "key38": "C5NovhqYB6uceKt77toZnBGomCKnLi7ZbDNm3C7RwPDbS44BoaVbe8j5MTV1bg3pqkGEDYnHASKutSQvgCsmB2m",
  "key39": "5JjPSB2AkLZ28FeQstM4zHdbSbvDH7VhEAvFiFA77QxocjT1pKFtA56aa7brqCv6DQ1x1vYc1pAJXzsgTtmrToLT",
  "key40": "4aiSSZEZYczEbW9uieoAoMaTHK9LMFaJMY3sWJ4XsVZgBUxc4jq9QwDUwNrwsaVWqiC7GBcRiTyT7NHWPbYT8FP7",
  "key41": "66wXcscEjyyh7g89fnQEoKp2dtD9heAzXdHhsczmoVDqFTHC3EEroXokwwSMaw9XvHxsNBBvh8jvMHVNW9YAyATh",
  "key42": "ZRcnx2LfnVCzvEr9VCYKAmUasZq8WxPTbPpvwHfv4qsX6aEYz6Ws4kqTTeqmHJqnfUSz7rthgbUznMTaSvjs8jF",
  "key43": "UqqY7DzvbbMUbeYh4joWE9NZhYQHkxbdWokD56yYfhsMywxjFa5XzmHeH4A1yqHNxH46aXQFjGsLSjYihtLt3N2",
  "key44": "3xmEW3qLhdLAMpQDgHVabhXpiJobUkU6S2LDoRPGEVfxE7g2TAHenKFkX86A1GeUVTmAREUS2diEek5YMPj2MHKr"
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
