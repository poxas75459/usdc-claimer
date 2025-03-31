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
    "prRH9rYp7B6M3J9Vvr3uQ2vn42CpNKTpqneDvXVmfXHuEANWgEknAkN8SCv3sG4iqF8yYJaJKoRakJCJ9uSAyHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JH13TUbfpFaHFW7LAe8Z1gT29U8jVmoDKJDZySEL3vscyhRkWKPXUVn7Ld7Wvx7uwnD1LT7zx9Y59DG41JEwBus",
  "key1": "3njYxJF8Z9wARNcuEsJTNf3J9wezKiMYPCvZi2uoDuGmwqJvMkNYHDLdYQ4gpyXxk2T47XezCXnt5Ra4tg4iop37",
  "key2": "47WY5mDzMrbAbd9V52tXsTQ88m9AcyK4PPPj7GJrBgRJHsGonEXu1vznjY1XniGhTJFVzeerXPHHHHZ44z7CXJid",
  "key3": "54p4ruUAeZFY9XBrxGjKtcBjaF8UJgbQX9WUQWaLDqTJdCEa2F1coS8uT5YZZsN49X25PtXg1dLx46WnmKeqbPLg",
  "key4": "66BeSKCYZAEgp9vwwo2V3YtncH4yRdCSibQLrpXFgF3VVL5BXCWKxi8o7emvWjVqGLHuTYavfB5rc7VPrz13Fsa7",
  "key5": "3nRkkm6LfJrSLLnp5eYFNXmwFSec6LqEHNqd3Zn6pEAvS8jEFfyNAfuiw86hWhXd6QQJULAAuqqXYbXW5Fp7MnU8",
  "key6": "4D4sGWb4RRTjPPTDkzG42zNCxrZ1HUjCDwYbwsRbQXo8fKutJJLrVwnAeNPDMnnRc1wvm3vqb6rMPGxiWG9MsKWv",
  "key7": "54dMRaR6LNHZS7g2W6dRxmEbL7ZszBecmSLmWuUoM9VTZBaEBChUqusxeP4d1KQ3DXhvT2iuCz6o86Pb231MsTmL",
  "key8": "KFbFR2HEDhv7FXjdYszuVD6Q6n5iQsFGmnXpvM3eJtYrjdH9mAL9bsJdm1YjeBdwCJFWYbxahQfmzLwr5RFBPi9",
  "key9": "4eHn7d23A9kJ3spao3M4YR8cgqrcV3aR1wK9U8ahNVmuD2NFhTSMT8QsARDbRab1pctx7J4svW5vjUnaPdGekR8V",
  "key10": "4KPRRaBhjLn6YYNgKxUK85aWKLQoPoderGNGAzrucXcB4hAhpReGa2WTiMJ4o6suZXxYPFVCWXXfnsVu1w8c1Jvy",
  "key11": "3esQaxCShs8RGqZFYNW86BsjhdxmiadkBfKi6uecfn6etqnGGzXxMpdKz6DbmQLP4ZY4r4csi2JbQjn2okJqXDAo",
  "key12": "4Wajc7pRi8DBhotMspH6hPfxoPXGejJLL2ZNCbAbcbf3nov9zdPvKwwhGTdYSBQggbjAC9PnrkymHecwHdJrJuLc",
  "key13": "fSqEMWjnKUdjH5J2doaj298Cm9aUMpkkojo7AaWQq2GZNt4y1yGmL33oXiqayhzKHLfbaVz2mteDXfwebCEr4YP",
  "key14": "5CRyYfLfa95zXUt3UT7fZF6Ap7p9wWPkJYycrcdkZRuQnxdFTjpzDpABVekRC61qpK1u4Ta2oxA2spSC8gkvVXfc",
  "key15": "5hyzTpJiYFYHNpyRnsPRDvgRW7iXb3t86CgrBHzmkAQBiPZot5aveTb81GYzMmhZDJz6gWLVvAK4Fm5Mqt58j8Dc",
  "key16": "fmXJfXAaYkH4S9STyJT8UbKPnvba48GZapP9xScrE62ks7o7yqM4TQYwCWLzXv1RfCLQAzwH6ATmDrebNohxwAS",
  "key17": "4nF6s9ebEY2bM7LiZfoXFkynhUgxdSjMZMhs3tYK2svMNutXye2ByXmpaaTHN9av2EbxX7YGDxoZ5DruvuyNntnt",
  "key18": "4o4uyxtBWcFyKscBH2v7vjUHZug4iAtkm2t6peJCsdZAn8jjrdSsFKoCKF7wPCqwvmLF26CErwcDer7Gucik1dLC",
  "key19": "65wEwU5vk4N78gPcphrXg9AqtA9MrnX8zSBJaVsEJgC4C6RvCnF4GAgDD2LHf9UfBRdHAd86jXVeJ4A7T7XKmEo3",
  "key20": "4uWK7q1yDfn6UYLw7s5Qfbp8J2L9PFNmkkHef1YGtkJf8n6kGUg4F9e4USaGpobnFDo6q6DJARokVZkXGM3n2oHB",
  "key21": "4oEdh26KgnPrd8WL414HT9aN1svgWt7sty457xhTw6h2NKwEccPJb8V4WKJX1N21fWyHFKygLKhfc7myFw1ct5iE",
  "key22": "5nCycdfRgk1PniB4RX4UjWcdtpYZJhHQG4dJr5SghLb8eHrfuwmBaaA5tadAJ5kfwBMTpgybErygq9CSCNSzGVWK",
  "key23": "5U1SmiQMRCTi6QQvFou9mEx5y6LZj4UgqX3TkcZAUz938RP9QHoaA5DrdYePv1RfECUEnQXXq9Mxm2sziK18azfD",
  "key24": "3xS3tAzqPmkdWVbiMctJfEivpizVLRqGeoREfw6iV3SYW3DZwZcHTFQqXzUthtNSV855JxQYUNCtZnzde98fanrp",
  "key25": "14yPfRNd8VqAUtUdYvdVQ1752DmaaF9MUmFCDME3h14rvHJKDqzQhPTJDdPbV6WTuBoPeTFMKNTxEdEJvruPJ1X",
  "key26": "3iLSS6XkXzmgYUuB6G8oQopk2gjx7fQfnnbpHL2tP563ps3DR1R69YLN7LUM8einNj9pbuK6btiwhXh5vkU3ey2v",
  "key27": "2sThytLgkgr3d3K2NrHFUdTHFraa2yFHiBQWQHKosXhQbhXKzr4aDc64sYscNdh5289xZQNjiHRQPYQPSoZANTP1",
  "key28": "5PJwHj9N9FQpsvB3n2ZZqHBZdx84wju6xjH56gjGamFZEb72kwezz1pdNYHtYeKT1XtYKXRYTSzUX6eug1XZmmEX",
  "key29": "ogTnQ19ZpJpe4hD2WgFiN8GymbWKam32icVH37BPSQMuU6E42HPPgh18cp4zJDvCdN633QTzGDX8kqWQhKMVJo8",
  "key30": "3o8gVW6b5AwG2vQAUPCvEMWyuVYAUpVALM8doQuxGC5TsLTpPSMEJ8suHJbxGbJCahJf92WJiQbnn3jQMgQaCNPc",
  "key31": "5DVtxmxS6Ymgr7m2h8RfJNfJQed1MGYiwf57g9Zuzohv28PodEhDqiXfVpT1xY1tX7jGSyXakmyUSX3JkMCe4Zkf",
  "key32": "vtsLiuDtG3KfTBnuK5cStGwsGjXEbaUnvmmGWLUK8mzzAohqDFTWFcAv8UZuU1HZfjW72wobBUE6vvTpt2P5mK7",
  "key33": "4BSEomEMWaoXNwg4m7bwGau4GmrB5UjeBw5K5aPAoSW9vYA8UDvFZzYZYEZfWN8XxVpgFPF8XVcGLnrCJwHXgwKF",
  "key34": "3uxJTDhWNMYQaM9tCYZhT7xkdETJMV9nraR6NQmLQKMfyiFrCqocz81oxv5P3JMkM4pzBJfAx743GMJ7PnYg8rb8",
  "key35": "ePCt4zJgxfMres5dXVqT2LCRpYYQv8pNwNbyGDvA2nzzNrAkEBpocEssH65Caf9UmYpHdYo7p7kmbVVNxJ8B2Zd",
  "key36": "4JLX1vPu2YVg7KWrVqsAnGLJ77w6NEb2D8UCR3m9nAPSHaQjYE2ikqvVBuS3dLVYZBYKLenfdRaE5oMnQTggb6yt",
  "key37": "p9QtVyTZQjSWVQjLCPBPzYGGVUEdkQC34qjugvY7TTBfnuZ3gyCuKsbAxy3PMFreZC1utNPAEXSS751HkRexphF",
  "key38": "5shnws5rKyKmFEubwbqNPGcVtCeUE5Ys2yhfr5qp5dEPcjbxjFHR8FntEdMiVdgj7mC8ky6fuMfyJjVBoAjzFdHU",
  "key39": "2EfxpJny54eP6yqYcAKh61BnP1PG2HPscXw5geCjUamfEAw9Hf67A6eQiQ8XQWpVzSeWtYiKiCfQ98hryoodKFom",
  "key40": "5pWwrcxfb4RwiQYQeJGVoGgnz1B8BuBfA56mPJHjstbQrvqMgFwugK65uYTUKeVzDH2n9s8VQMfDeaBWXX61Shr9",
  "key41": "611bT6koktqBaUY7UMesnjaw4Q2ECvuMDVWz7GqhaVipYkXz1hETjWXgkjV8RQmoewKx8BkA9tP4wMnA59neAnRV",
  "key42": "2aYVQ1ecZuaj8DNiKCc2ZFkaxe7uW3QQRpuAJFAoxy8GG6FfskzM7yJBzvAi9iTeExVQBPErEMhZ8r61a2E8Lpj7"
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
