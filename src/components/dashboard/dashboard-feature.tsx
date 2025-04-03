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
    "2HKx2pzjw6EbC7sC4dRcNSuNWF3zSiW1H7tWiDS2cAbUUTCmp3k4ZXgRqmxmX7wmgpWk8Ewzg58k4UaqBWgxc2Et"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mgdsxVrzUJbjSFqmHdpMWHipUYzP5jS1F6rcyiQYMDULKDRvBwjSVdHD9KVRrDm7hWogFK88wvsuoEUBmfFtTSM",
  "key1": "3EVA9X4rYxmWcmv7UrwuTWt9vec7R5PzkWm5kYoM2cBbXU2wkQLp4Foi2gdK2MwppzU2uPyfZ2fvcwKFAQJsuXNR",
  "key2": "4DYDLjXo283jRugzbS42NFFhghLvaLNJsFKJ6oDjefmpjxvvvMpX9bSXFakC4XFD1HL888QvdwCFN6apqhhxdMmu",
  "key3": "2HaNwJPJMaMgMvn8qEPtwgfbzxZHtSET7AsLRmMDdMpULJVeBPbc3kymfx3Yxq7FAiWpVP2AiLgprpTSaN9e5wW7",
  "key4": "62SobTrmr9pNtxhBWxP1vrkFH4YqHM7CNRkNBmzb6jxvSVE9UkttT57X7W1uTYSKuavLPiuDvbr4cCJ9gJpGJQWM",
  "key5": "3cxi5kh7bFXJbW1XBpcBbBHKkKs5zDaBLYSx6nDJpoLyTDRQhLqJ2ReLEZMp2J6u7rJUZSNzvutgwjBubmbx53KD",
  "key6": "5RoDqyB3BngpTfUfFuqyBgZJU4khVcmHdxm6QAHPuwrMu4FV8cTf5LKHqcBjEyyYx4XTGJwcvkXeZo5msbdWgrj4",
  "key7": "3AYJKHWWF3xVHGL1xEyDaU3qyBAjBje1cjhAwZaPLA4s1kdFAN1pn7PwF5AkmVakTKeEQ5hE4HbATmbKjfzutjMS",
  "key8": "2VAa4NGz5UKAuQnjX3usYoazcMYnK4bkhqBmYLKTkY4VhERtsFWyN1Yfw2FxAeFQMJsMoZSm1dkQmvS76DWz4a7o",
  "key9": "2myZ7gHro1xw8p21WpvTjTgmnDJw3vodCE6WVRRHK89KZyEvHQA9bsaiVeaGvvUNZzMY3f4T69f6dm48ZTGHxYsC",
  "key10": "p5NubxgWt7ZeDjnhbNxtyoCSxJVxydxu1LMTA5g39p2HoLyw8A4F366puawW5DTqaMMK4vN3HdP8bsZ43R64XUA",
  "key11": "2odSBEfjxVYSqostxHKzqrJ9RPBn7EZpNA9EWxhqMxBxym6WdcyTmXX6mA3Xo7bbCdpdNnPvjUDDq1tj3CtwQXb3",
  "key12": "3bmWK4Pm3RHjMxVnE3iDsEjPGK4kfuY4XvTFeanBB7NXNYDxzSatF3ZxdCNbXFU8twysUtxJpxYsUABb45DQuF1H",
  "key13": "2eDjgSvuLzPfGiFVaNz9r7Y69546XMxwavQr8VU9EVXvd4ZbKJ971yRnBfq3am5qPLiry8E3EL4ZhVT2bYoDQRAK",
  "key14": "3T6trxWALFnufLDZ22yDNnPtNV64CGVTLCmoaAyJGAZoUcCdFDVBxnGP7P8n6sia91CEsxrkwAtqVUr814Ksr7hv",
  "key15": "Wq4xwWNsZTyHNF3q7F6bYjJzKdFVvi7v7tbdVX4YHvtAFZUie2wwuQUU6YJXG7aZV4UceZc7vozV3sgJsKBB1BQ",
  "key16": "3KE68rNN5gurrtg6NMtnmF7qorULR6zww8sLD4aarejVePrtSE5E6oSEMKWSfGeV2ZomKKyxyB3MmEv9NBN72wbf",
  "key17": "2wNR6Sn33VPrEjEPQg1bSHsJ2ghkiv5zTudvJEz64qWKRHHfNsbKWK1V4nxt5hXqsmhfEH9bEi8bbcr6jzEKaKw3",
  "key18": "2J9Yj7Ge6vBFDAp5vL3vk4AEi5oXtkT6UHUqaCqLW9mwNsquvY5vxGMw85cWT2QwXcYoTm4ZG7gTM3vUjbmz1XNG",
  "key19": "38Lf1kmZvcioHGNHGFKCW6NiehiAqwmP9pzA4r6G8dpxKJopAehAK8mRbmpsumjAAaQBksu3YhmfvM1CU3NoAYRC",
  "key20": "S2wBBEBXXnPD7BqmtKTjyf6Kk4BTqFttD7evwWg3TZjndTJeTRhGqebnG7CtDCunDfh1995r9Ct51M4tL7nauxW",
  "key21": "57fRVxiL5FfYFD5bCyyaMKKbKK1JWKoy6caPDsjTrptSY7CRkdqcrLS9RfBbupDcbcupp15VNfrSCEbrPQdvLBhA",
  "key22": "4mdj8fXCHPvVUxKA2Ujmr3QgMqJgLzrYXMd2oCc3XL3SBF97yhbN8k718ULjbSpfMws9G2dX4ihs9UeRi1ew8Tjf",
  "key23": "4AaD1cjg4iXXVHeaiMNTs5pT7yBEvBsx5rCTnosw5jvstovdZmZwDf4aprWGdqoti98iVxdLryzDTJop5N3PFF7m",
  "key24": "4n4GFSWuTfoDeP9rTGDVdjEs3PDzaYHnnmzXDmi3eCrTrtCLaVkRPb5vnJRufFkUyRMRawixzjCef3oyVbdfp9qj",
  "key25": "5ymRrfvWdMnewunk5uhsqs3M2i5iyaarFcLPNey6WJFWncYmaCsAteAHeAHAESxEZafUCXM9te1kWLdjh1sXz6ZN",
  "key26": "ifvL4sSjnWqX28EdtkZonNbGJVe8MKRtFqQYsahg3VaCyr9swd9dd1FRV6eCqGZnji3jhJJWF2a3NoSKnP9eQ15",
  "key27": "3L86msAPPHX5S2Tg8ZvkBVuFuPqypZzbkmbCSEaRkg3jNhhqhCGFkPSKqD7bfpAjMwmbKmPjWggX1JHe33KEwu2V",
  "key28": "zrF5aNiQyeEk9ANMb8eodCQRSuqwCizVCXVcArWBZwndKK3G73GfP57XMmfwNJYUfVoWwwzLmMDi6xMiGfDRzBJ",
  "key29": "3EEcLU9szUTtYE6h3U256ADLJ4usZWpszy74Nm7QC4HpXUxaV1DiKDWPntnPbr1ndtBNpUP6EujmK2ECH4EEP9dN",
  "key30": "63rxtEV5HbkfJkbsZhFL2teJF4b1ohmfKVs9n6awBQNRhTgGLhUn9BjF7gSUPLkfosLfQwfceRozUe83G3oGjhc6",
  "key31": "248TEvXcCEE2CxbS7CPCx8UVeopeTL52mN3AfTY6WxDuvzWsL1REFzJdi377bzX64uz8bzYDyxXb5UtpDxnzPfGf",
  "key32": "5hUS1gQTS17GD9s7U7zz7sugpnw5WuFEsnVvgBLkwG2JYRfkCXyq8kvhb8oUQpWXvnw8HKWdqNRz5mzBYnsDDbxv",
  "key33": "3mqYYgR1GAv1N2nyp9Q4pWcAqgZ6Uv1ZR7AYn7kdXvLaES9yEv4u6uF169PsKd5xotN7c8oLRKNR8F6HXE47dUqh",
  "key34": "5nF3VVP8xGagWTkLd286xcLz8WQAebdEycmzj64tBYjb5CnntS2XQ6ymZnzyK8JhQoHRPtfSMdG1jLRh8NRFukJz",
  "key35": "33dMAWnNtJ8iwKZCNMKEDZAiDWt3hbABN12DSRqbeid9qDzvPqHfaTCre1TnbLgtq1Yc6HfezoqnygZWsRybLXS7",
  "key36": "5uBGnGV2AaARgXkb317oZpqYDoUMtZawF624422C7KANM1yMEk7supKr55DLDJBhk6Da7LukXdW6mKcjvAc4tWRj",
  "key37": "4Js25PmcBiEzfAQWaL4wR2P7qSTDKhc9UQCw2FQALxbVGoRo2rTxjfYy2oYXgdfbRMoX7DsbpNeGDUz9h2hkTobQ",
  "key38": "2iFGJ9H24EwhWQFzLQVvfwy9VxzMozt27bg7VHfVyTiC4Lon9F2ar3JugkfddDCMwQebFjW5hmc42c2HJah8xDf",
  "key39": "BqvBSn5Ncqe5zpmFqT7FcG2WYoeFXzsXRFCQw8X9zJeYE9hsSYP3LFHxeuJY3G9QvpcfiwEEVnqKkXvdVgn8jjN",
  "key40": "5SvtoLfaxigPxDDhdTdCFBtHZycgbiPEhXYpAW9QY27rCsWuToEXbvHA2K1g75Ma3J6P1MjhMMiR6wboRXMqxLdo",
  "key41": "4fARwabcJwsnRitV8fYDwXLXCLv6Tu3rYU7k8fh2REVJ2d43rExnKkfUQg6Lbac3o1f2VttmAu5Zfwd7X1w3qnCa",
  "key42": "cnkuiZvAADeL5H5j5njuhwJkWLJVXDi137NaHppCwunMRCaJSZMiyfhVQCNYbqGsKWAXWosMS5wtxRfmiBRbbi8"
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
