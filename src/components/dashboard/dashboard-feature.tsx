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
    "7egVnLhjGfPrY1tu32hUyJXKqxqvX1bBsAGcuxF9gss3gFSQ4EhiKjWdCjcmunC4YJ2eEQpe4a7auhohDB1Y2wi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WA6zAWVxZLStFbP8tMqLY1QfPQjs2oARUozv4zyy8Wk1E9K6UWTRvvxHm7mbzjqEttSnw8AU8PBBvMqW9XujDwM",
  "key1": "5p2vzm9m6J78VijGhW4C5qV6am7LJiGWPxViXQxezogWkouXoDyfX4u7q75hYJRhsPJvA97FKmfosD5aF84sbHWX",
  "key2": "3JLhebEBkMPr7DUkwGam8LDEkB9ZKMdHTNG4vsfNAFjRjKvuHVaKoXBGkQE1bXuRcQ8wQJEPawMHnigzaM5GcEco",
  "key3": "2eacmkushtuw7akLmw7dXBLekiuDptMki8P9eKvA9adpvrjzSP9wyqmUxEvV5cztLqMexsv5hg221kCwR2ki3CUs",
  "key4": "2eyBFmyW4Gd21g6TKcGVJwfcopjZGc84BPj3vm8ZUgQUv5kPuw3LZgn24G8Ce2WEhHxP5PrFPQWmQ8v3ny8naj6k",
  "key5": "MCaKuYv3pnExqWAv66VkXEsKQA927KF92nCLqSrA69LiPMjc2yWhfyssmoHdPZLmocAsNnJYQCC3RLgUyDP7hgv",
  "key6": "rrd8s4x1atByg8gnwZ5J4VaWX1Bat25SWzwF4V2CjVvbeWWVEo9b2kFMKZFc9BoX1cmwquRXCam7NtqUeNwof7W",
  "key7": "2wzQC1ZdCmbWFSTuF3Xk86m5gh37nGwT9zA29N7o8yb2MbEaA9nvTrMVVJD1Tf3YQcfakdvfiyjAkApnhszFK5iw",
  "key8": "2hkyGRhymfAK9oYmKbZRHA9YDnZK5CgphCespB9ejciCpwbXBsSPWUT6bn8BfXehcTJe4TvK367HSdkCRFcTG8d9",
  "key9": "3TeuqX7LWdKQ6zqmiU71hR9AQuwKtFiQxgcXFvpC2CaTu3yUZzudzLxj2WMYM2Nw1vvsWCd4zwfXe5EkWMr1SJXu",
  "key10": "5SyuLA9PiBRDwhC6XYrgoyHXHn9yKrGXSaHCFrujiDknpY9suQ38xX2KUwiLCcmWRvAYiQNTnLVAg6iyvCRedGVe",
  "key11": "5xkgDXLRNEyeNAsfrKuWJFcrL7L2L8eyuasK1eayGK5qjTqvUZ7sxvRjry1JvfSi1y94v94MBxpGqhKjAxoehTp4",
  "key12": "CyBcnuwpBxk3KvsuByMKYN4g2wsmuzVp5w5RArNcpss9umZhDDKqAEP9YmTyMQ7FQjaovTFCNoFTqwTVi8gTwCm",
  "key13": "3HGKUtZg2Qie6PYbHQYFvEVeXgChCmuJYuwRLAj56GW6yAkGigcu76RVqFwK6Vn7RZRrznPLr7KbFLUs14cuZQyu",
  "key14": "52D8MfbnJdQQcyfT7sqV9cuHCMpg4rsJrECJxsNoMkLdtLQRaESJb93Ny5p4GZV7cq8gzvuvYYt5RjGq92Rg8DLX",
  "key15": "4f3FHRdp42HAMBoHR6mSF5TpquWmsSp8XnM6WDfNSUWAJmRH2kiiGf7vSkwg8jUEoyxDU79hn62cz5TQXWKHEydk",
  "key16": "3qVEYT5ncw5zSVo4dsi8n3mvY9E3YKLAf74hDqprc2qDiy69KKc3QHbX7TMHTQJ5voyvZxx919idsbuNu3BkwjY4",
  "key17": "4tASt9jhKhLEmcDzjEddhRXvCDiYKp1TaMqoKzg38UtHYSCxaa86RrxW81XgDF2AEwwkCMN8dErbbuDSz972wV5H",
  "key18": "2Shqc2y8UAPW4rUZKBPySfaZ5nHUyRkFVAMxDvAHt9tRwHiThParh6jL51hggJhX53hk3w9HScPeswEVW9BjHaAH",
  "key19": "32zPc5mYcTX7YfPaNMVyGBewkc9aDAbpdJMVP8fiSbP7fDPvWurh5nuy37MzYfUpDK1M1NqZdwczgNSJE7v9yb9",
  "key20": "5cgQy4SbyMvBSSANsPppsYvd5JsCR6dSNKkV71idfwoqxMq9XuhGVxHJKMSeWaTJJry1rt9dA4R4k8GbEdGuVort",
  "key21": "sFXGgsmBYxL86foD12KEeMxuU1dSHc9Fd7XSq3V6YXvVXCrwvSgxwALxHDysR3NSByJ1wwq2oG2Wkstn7qVGUfF",
  "key22": "3HVKJp3omuA5XQgMrr2rnt6LEsMJtRzdSFi3P29DAf3gwRvCYNYya5vfpnXnbJk5JDzcyV6qmuxjc9eYDx6FKvCL",
  "key23": "5Yiz4pFXUiGrfLMgAnR2agmCM66zvML7vwqFQZmDWVh7P3Wi4ByyU5m9QmDBPGk5TGZMSWCykBjBjx8tQvHZSYP1",
  "key24": "4Q4E14qnjsHSa9mmbzcihTVDNtCyUn8dM7GouJaTZi7ZRk758U2g5ZHmKr3o6VKB2vNyy2Nr6B2htX5zF5njkM6k",
  "key25": "TvHv79PinHjQmehpxCcLqw3S5h8YYqQSMe6P8EjKZXy1H5wyQ1aX3mdFMwAR165TUeC4eXFaMtFRqF8TosYwzKG",
  "key26": "As8iALV4RA5D97grdTNFaLpH1JBPjLq31cL44DAKSPghCUr4t9WZC3PWj6QDv8UwyfdwvuZiUQU44aekLLdU91E",
  "key27": "2XyH2jcLKzuN8rRpmid1M3zdvWr8jCsS1vpynjSaveWk7bCd7WnsQN1d1XTVbk5u85YUer5maiF5b5P7ezQ6WFuw",
  "key28": "Hgbex8QYNWZiCSxP3uJCYTvc6WaTFuRZhDyCUK9gP4gtQ4QLHy1RZzVLF4DJuYsFzhfLmT5sRyGyE7PAaTGPLDo",
  "key29": "3Ds5VHJu8fYKhDJzdr1WuU6HU7QWKqBoAUD6hMUR1SC7HQpQysrZ6z6B8mnhXdV8nTSGCLvhdKbcyZPUeXueTDmK",
  "key30": "2y3X2FQ8YRz6DRb5MwfdVsMpgTWxu9x7USzVkph8fmrMLjLb21nfh5YsSgRKWUXnKWYV8Neosdrgj8J2sM6PEz9o",
  "key31": "63aCzxXcjNSGrjHUjYaMTGGRc82D2FaCxC5SyEvHNN7x9LfXmEC3m9zXTLF31Hb6DLCryrV1M2nmXnd1cHEwWmax",
  "key32": "5oicrx4Yd2jp8uoFeKDekLT8Ri8esFVFLjc4CAFAbt9wxUw7dnQ3uHoEoT2RRTznqidX7zwTsf3PfDuRUBdWaSCj",
  "key33": "4rbBEvT83UV44eNwZvueKyvot7xXGVLpwbeJKTwGfKNbHeBVNLEnCQdSyxXh3rNJvbdr9kwVrfMCMxRwtmpBmgfY"
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
