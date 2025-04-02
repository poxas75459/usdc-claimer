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
    "5D6Sg73aMnPWeW1PgVATX7EvAcdRirafH9G3kANHXrqT8S9ddQ6NycJUG7ueH9zst7p4F9Bq2yvgFp1mSEmzM2ee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gn9cesSHwDUs6La5KTr7gyACHDm7PkC7CPjippcmSm3KkEoVXBov5Xw6wPRY6cpsG4s6aqzVPLfRsbBVkE7asye",
  "key1": "3frBQaB45zkMxhzLjBYsjJYApbeayg1cCTzumyewVPHzHecA8UhEwEj4oYfcvhUBnb8Fmd3QVtNxLKdBsm1YHypS",
  "key2": "5W3EefD1B8CHpWvEGTQ679J9PFfesZHmPuzJffXibQ841NM94RfeHFMeYiQeUuGH2wFgBY6BybgwzW7Ee6Y3vp5u",
  "key3": "4i5aoqTJJ229QV8vSxAVvYfihtRjjiEVLof67KYUEAWsREj86vZuHgLE2FQZ9VTyhuNrvDV55Ag4cm4M9SwKy4h2",
  "key4": "5X9FHWQnNAoYzEG5MyPeKQoT8ZMfmTYJpHm5ehUfVKMdzrKpbAmRn4ewWsUR8Y3YDkVLaBTHPaf2y13HkPAgMUWC",
  "key5": "5RaH1MbqqFRthRaQc3by8k1eDnVPP5jfg6KBPA7P4WdRMAcdhk6UR4j3EBjJvbb7hK7KPe5N4hsPLrQKBpB4yAGW",
  "key6": "3N8tgSTmiUPZTS3s8GmqCgoo1oD19zG6kAjUHtX9gvsfYaX5nwLmkL6SRSnhT3bWTkv9M52ARnKGPDYDC24RA8ud",
  "key7": "5qgoyQHFF8P8RLge3DkhG3Z6SgqBb1JCM2UN7BEg4xigmcmVv1eSgu1nmjb1cMuUjxx4dArvVCjrty98EfZ3hrhX",
  "key8": "5gACTPAYYdpvFXwAou9J2jxyWm9MW1KG8RbyxpmiNQdz4GrjyYyaoyxxjhfL4u5QzBmaoJZCzqVSHqzMGtc8pr3w",
  "key9": "uJveer71PKVkHdxwPEF3thdif4vDChVtFSk8ALM2J9F1cH8fqiE2sb9WMtoPLAETaHaThcs6fY1oPH5GCKcC2mg",
  "key10": "3pZduoWxWxHNA1hUr7dheiwjR2557g4dLgV5VbVgtxiTJwpqK6DLCfWEaorc4An4ASUuAnH7AsharpgUw9Q6Wdkf",
  "key11": "4B2V28p1sxDiyK9AVauSbxt5AtDr5F3ckL7nGHLnMoUjbYGh9MncLjncaddGvSrv5TCkNEo6RwfLju4RVCNCo57b",
  "key12": "5mXY2DPkhvKjXvkMud3DoqBNPERSvaDFZsitvu444UdhzgqEdZjtL3CwqaeErt6uKgTD7BJgr7XWfTBrQcU2abDo",
  "key13": "pfthaMTYJtuvGJvwBtVxsSuBP4Mt3MfVyHVBVPSXEqU6RNFPUJYfiYPNqpLH7yiaiBAa8ZeSjAboPhW1r1NA7RE",
  "key14": "374vS57mKKQvYK3qrL15M6nSpYpqUehYfRr4mwX8kriEgVoSRKYJgNj21kbzBmyufDwTJpKnFHrz9ZsbhEskM4wt",
  "key15": "5uTZcAFryAXae5vLdKcVcioDJCzsMA3LWaLsqBvKRmmURwgkGVpggNegD4LP7AjYaQUZ8zUu2xxkw487JXXNMUfQ",
  "key16": "qu9w7v7qUeQqbDWVHbzEcabCAmAMHUBufx5nWkwnbqXRD8eA5NGrSuJkQVtzFxKQnNFZZXPAYnu8EYET4JRx5MV",
  "key17": "4WtWzCbXfTugN9siNP9BBMhdGL8htH6VoZ6jvuPpV5UESfcH563KyzrRwYrncXr2w7ekH5sEtFVGMecc9WeJHYrH",
  "key18": "3sBCCvTgHFLXBSwB6cstYzXFn329HPdP91hMSPY9LhcP8ei1zEJPJyM9LdjyUoxhbJpTScuKTcQx6vuZDeFVm15c",
  "key19": "PHiGk7Twmx5NYgTjyL3ApYNSVfUV46fzMYZcEtuLmgJiBguR7bLUVTTPHUGhUeGaKkWbckzf2mdZ2Ztf7vh9df9",
  "key20": "5rbouyvyzs7vfcGHqcrRaKSEJXQumoj7mUkHxGDxmb67YUEFXX2bRSxJq459JU8x2shpcBZ4U9BnVCcF5AtkgEqy",
  "key21": "Bb5vRy7HZneDCfG3bpULxESURg11CuLwQzrQzkSZ1LuCvepLREgWKAFKeWfH1nMznaPPXxfKNEJ84tcav9zhNNj",
  "key22": "5XerWKdSysfZKDPPof8GSB1FxDwk5VZXjeAwPaw7wP2sSNzdxEDfWqSKUVfYMMDNnvvb3Xn85MUH4bRTdLjKKwe9",
  "key23": "5r4vGyH3v2ifw2QDVZrsSfVZ8CYAaWWoPPypmfNNqN84x9EzPRguJtcpp7tbsEEWoycyGoW2WLQMWHAeb6g9EZRh",
  "key24": "2KxPyzdwWYTQRdYsmY1gWSsFGXW5jBoGwaj2AHQSvpnipn9i4b9wGom65FtzfvCVdQUuk2wEDHkfFRU9pKow12oP",
  "key25": "4W68RKfjDYex9nrmZ3Ler6HbyjuapJh42qLkrKaR5W6tXHJ7Qebo5Pab5sgz44UhjXUaZsFWRzvqBKfrP7YuMbY2",
  "key26": "3P8e8MW6hTpj31HDFQPP7GyAv8hJDjiAmiG9MbYAEqzW2fXZBUK3kePHHi2xnFgpfGD7cWqDnrPsbLUBWnHgvYQs",
  "key27": "2EhN7ZxMiqLEyrM3uz7jkSFbjCrsjG3PZ58XjHKtWanvNEu8k5J2Fz9WdGRU1U7TiQo4G7u1bNnNrkSrkE8iEjgy",
  "key28": "4giCSYgvC3XFLw6SQY2Q2tvmBRSwAFUX18k4pv5jp6sVgH59ouzdsF2aH9ahXeVCVBBGecZBSeRiKZmPp7REFP2a",
  "key29": "2FAm71CDUXcJsfziZm35KTRpDodHyPJDkEbZFzWemezTG4E4iY6MGLLsT3f4uKJ94x7PLWBcj3EPUZjKiM1easyx",
  "key30": "43ADZcKHqifvjUcMmSB8KEcKG9iLDmbHL36SUtFTey7idArJSnsqqa5thKXkdyYP2jzwaTyvpigDmX5kiggZHLfj",
  "key31": "51xg38H6Jc8PmspyFmmZkMamEFmLqbH4FdvYSZwWciWctV4A84c3Qnz8oD9PwZ9tcML68MmYCUf1miXBuZg63bWn",
  "key32": "59xuysPgayckQeNP8VBB7fsbWP69fsk3nS879V3CPgsuXSz7ves7cd3npCfH7bPuSWwY7EreehmvyTMvcaQvFdUP",
  "key33": "KXiGdKefuwzE1ZNKspJKAjWWranRCfPh5Rgadr1AQ75ED37Sfx9NCpLjBySbmyTdJm7PzTAiFQZxihFNY5PxUPJ",
  "key34": "3YKEcxL8fYjzuTiRAdUXnL5ms5XiHk5W7r1fXWAERXtj6KAid3YzCCAWsp2ppNXLRoxmfR3TL8vgLtnHzgdyzHui",
  "key35": "2sPFuSpTHFS1amt6yZBksFmvetbkEK4WGURioyoLcC8oPBHecE3msEAM9rpfGWEH6Y9YDqRgrAUgCz5Tnnw5uWKo",
  "key36": "58snfWxQJAduc3Wc3uZBnq3S8Bcofgg5WMc6inqA78PqxWgjFYzwKopCuSZREFWFYdtYuQd7UYPynZ3tizQFUyMy",
  "key37": "63t2YcoRDfcTeRsyWXSsAQu3DqJw8zsaNt89xdNcgn3vdiizE2qW44GkVhkLueopt5akEKh7yKYjztinJ8ZKJ4aF",
  "key38": "PEvFurV4YGgQUsCUWRK9c4NND7hvAMn4anzUtBJ3kcSfZKgk9sa1dMPUnxKpBwdQ2faNRMoCNvBtAbs89gkCyNy",
  "key39": "3WzjS72U5Fa2wuNrsHUzsv9UDwsgtXZUxeb1AzWuagFpbFbyB2oiqiwLH2xmVUotvi9jhEfPvaW84wzS3uKVcBb9",
  "key40": "2MDYMBrf8tRVaFR59RifKC196g78FgvPkJa83D26UU5PkidZi3ZdaJkKGfVmBoFeCCmhkN928DrFsPKwZQLxTesk",
  "key41": "5aQEwBYdZPJW6sDoq6vqxyXmqidzMPUgS6GsCp18ZY3efK5KNBha57MPWoTTW9RH7oBUcuwQWTGt2a9R9YJt7fkQ",
  "key42": "4TPfqwbFHVxSBhNafgJy5oHzU4Sf3s5uc2kGLPuD81NZpCfvZMv4rFpxjR5SxMuJ5eAitSv6mXXezUbY4xXWEyP6",
  "key43": "3wDdWk8FRoC68jWSW1fuMAGbH9YYDcAaHQnU3jZjEAETpCbZVCip9f2RXPAzHc9YovwHtAuFJgr8DHCxi5TyHuaZ",
  "key44": "2AE4Rc3Mx4EnEP63w2tHnRQSCp6jCXaSd52xbj9hSnWyffAin5NGGiA28hY3MoNMSMjx7QLcQPqx2FnQK1Q3RpF6",
  "key45": "UXrS9r19tYhJi8XaMjwufBZwi9Ha1sYUw9UEw6BGTFauTXAm6PbzE8V5YnujpgdbrZ9uwG8wQ7FCkRw5ZpWBbdx",
  "key46": "NbZZaw9Qfdh28pzWroJiHQYv1Y4T2ZGXgWKRdA3WmUqqXVsaxeCozqcH31jmC7mbvzPq1Zarg9xoWuyPcsovr7K",
  "key47": "2VTHDSELpGBkemhS7ZDBci3pkcoPFkFwjz1RaVMm2etPd8P7zCzxJyt51foonahXCik5eBU9UUXPgwnMqPbrrpEX"
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
