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
    "5rFqB1EuAZpcrZE2do1uJLgmvAepSoycDzYFTvWhRnTdJXyD7gEt3d6No9mRNhmQhierJVpgEUoTraa3vEV9u1FG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n2F8rXPDj8AKhBVP3NrWCHMjYzaaaaBUUxxGmbSWGsdUWEtRnfrwDP2p3wgqP8w69ZEhEhgiYLUUMpXwBSv2tLu",
  "key1": "5sVsh1iXGA9m3Ep9r5nLYfqYsRbBdcP8ZWJ8E3KXH5oBDAP8C2tFht5AFdG2FnVSC1HdfrYFJ8o2WBViTrdW5ktK",
  "key2": "5JHYuW2MTmDNK9Z1WFTqMroBjAVrBgbsHiuGHoBBHGhd4rPGDUsABnqbrBe2e6krsbuEeQYVRAZipjwcTeb6be8d",
  "key3": "4zvfo3o9mczpJ2C9fv2XFT27j4J6h7w6ErUNfJuUe5UqB6uVaXehPdjBtptmv4RP1ay9AAAibUqFCnEKhkbp4i5s",
  "key4": "3AnmMHwmm1cWiE2ced9mi8ViUrC6psJJsLBK7gjetyo7hGBExvZKsaHHKDy4SzMZbjQqJEb2yKqQpdMkJACSzUjC",
  "key5": "8EUiqrzwK5bSduR2C5AgfyWyQjH4SFhqJVEwqQ1e723EuoUaGF3YjGqaqWeG16TbDiXgA8XQH8QDHKdANwBUbA9",
  "key6": "wcp5wcShLCL6kTMgYSQ6WuQtcvwanhVhWf9qqSsSzMZDrJjoopm3HuuWQQRou1xS9SaE9yY5me8GqqMbPcxEBis",
  "key7": "5Gzbbvs77wwZqNu6xZtTvcq9TAVe3SemioHkwETGAtS2ydbaghwXB1FnSvjzT6euT9r1ThAwwBvVjph8owj44X85",
  "key8": "2kq8JdeoxxVTDqTZG4z2R8Q6cD1kZ2jBNJS9s5WxzgSs4L62VTboQFApe2JsncE3c3Ja8iVm3FTwNDUCTqgNHYX",
  "key9": "579rpMhYWfJd7HA5jyS4uDycowtnz3hcvFWtZKR1MmBsbV1FJ54pqr4f8jSV7sMVTifQExC1cJbZzJNBXoXtMHh7",
  "key10": "2HANhPLz63yMmZsuBoWtwePAEQaUXL1CwJWsdyWycg86zH2XxedMKSA53QgYFShWLHYU1rUC2gsv95BputwFstsY",
  "key11": "33H3h5qoftqvTQNUNCSbq2qhsYLRK8a7dt3oFvFDwEzDkFaGAnNSisXXuNVcQAkRVp26D39QBhYTEvvBksxmAJnA",
  "key12": "26z2tC3QT8WkXJKoiv2LghGcFqUsADa296eRvrb1y3s9M3ZSjn8sScT1PpkvvMJ1NE2yhccJdJbwnGx9DBC6hdrJ",
  "key13": "5tkfJH2gERYde5gcSwjUaqik4Q3vKwwB7VuG5kJt8dhH8RyBpo22B8v19DcJuF4XUJR5VKbp2G1zDpM5NSC4ED1d",
  "key14": "3cnLA5XR43jsPnvd4BXeNfWsSj9W9GLcTqszPf6e5xzXFffthMn1B92UiYJRaECe8PL4LYS6JHgDKG4DLvxaEEBZ",
  "key15": "5WccyyQ79WgP8dan3YNDJXe7sxynhyjZm4DpupXPZXdtiuYBCZeDtzoZkW5FbfCwZQuHiZD5dSjeCgcpjwBPj2PV",
  "key16": "4N6S8grucNaD8ikwFZ38jJaN873zH15eXvQwPs3SjdGdy9JG1mDXM5SLHCLXw6LqzfSrY86kih1r7UyXadyBjL8S",
  "key17": "ytouc1Au28F72C4sPK476ECL8VwcFGXSV16SXhndCtrdsWTU2Hb43g33Av9tQoiyqUP6MuYj48FtNXrBWeeYwK3",
  "key18": "2s3RLgiWhzXqtA1ApdLodSmfkj5KwCvM3zMwyLZKHAL3HSL2Rfcx8imXYutsUYczXpuaxEu5w9CtBUmBPXMbS6i3",
  "key19": "37J58ctnZ8cVZTcpTm4NEnirozig5c2FJLHbxev9YVwg4xV6cdZTqbKQ6cNJWhiBAGxKf1KwZm9rsZbuCUR3GKug",
  "key20": "VF7Sc7kDLWDq5MCmDtyWGEcy4vcmcdtrM1RNWaS5kwGeoA2hGfcR13vfBrsc4CjZDu3d5kLTzYxRduNn8Q3b5DE",
  "key21": "4LRM6jVWCpJwhvi5Rw63uqA7Dkx8otf85SRXftu2Dforfh4nwUpmvP7ApFR1LTZmC958xS31AsXtUAaDyTHFmjcK",
  "key22": "28xb8SyNcqAh85Kr44BPcgvUo4fypYMXdQzTvAFSh3dBtE23uaY9Zp5ydZSwYN9M2HiuSVFvCP2XXAdd1RkxoCdi",
  "key23": "5NMpiMr2xJa746NiQNsHAo9yyj9DyP1i8WAxmb2ZHVSTL85HYhVWRXnS4RuvzF8ZC2D2mukbsP5BcGQdHGK896uk",
  "key24": "PPRGpQWM5aNZ5bUqK8yP6Hc8LnDgHH3zoeCjFcVHuszVnuL4LXtDvAtvoBq7u7S6NgqzD7mduQ7ASwbzPF86jJ2",
  "key25": "4oW8QenuFMqwLeFn16Vt5mSskYyBrH4GMxczPZm5SD99MfL6fchGYJPc2H1omXueJ4PNUZoJNkecxTyJnatLvwyf",
  "key26": "445pwEjbAJj3S1YaxKiCCASbckpsqgYmGYCzEDqmdyFjtmEqFUEhAe51oRsHwXyXM5KHBZYUbnjosR3VkTvQNFTJ",
  "key27": "4NwJLgC1JjjxGm8pCqZVZXm87qd255XsEAu25oz7ARVFR4a57XGBXnQ1H7kqdKfkQV9vXbsivkrEzCD6exf7BTGJ",
  "key28": "2D26mfAVtM44PRQs4qtePNoXSutLgn5MfRs7wnjzqpdft3vYkv4HwNEDY4KPJEEUs3BLQRLEd2uyP2H4mcJBsy49",
  "key29": "2QtPmP1vqJXDbU8egLvQt7swzwHeTiYrzErU9DwrtmKNHQ3GEwsJUL2GHq6SM4BaqEQ6fd4RqRQPT1nah7qV4jv8",
  "key30": "4Gm9VJUKhAeQqcRtqnyiPkrTzxFMzuB432f92rt5wvCcNxmGQ1S3cQBTKFDVxQT8kBpgghbLYstLteJs6m2dyHz3",
  "key31": "5QPcK1MJZfkDgwemK932JaWrwtUT92bnXPPrERgdNsBuHqmPdzsgcnFJYqy5G8YeuKD6SKZy5hSorugJzNbiHUv9",
  "key32": "3JywaFT2FLP5FRCZ8R1ogmiGfpeCbNfY2MTgvc6chmeMrbK8VLWL36beQYTVxjBHNZwr7jRc83JWnbyhZHSfuWcM"
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
