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
    "3RbeHbBLtXsMdr8UqqPRhkzq8PnETimCJUVH7377t7AZnF4VzVcEEA86mRhUJLCfAxVjhtBCwH9Q1BJRucL7FjB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bFFFzKJ24rFJamfAvW8aLQJHMhq3aqH5mXuBypUUXqT2N2ouhtxvYeqH8g3EefCanSfEK3BJah29dxw2k5NrX6u",
  "key1": "4XK9YJ2PHAHZqpLso2GvmFkw7QnFswZ98tEBEehcnc77QR97UNwsNXT6PWh73r4WrroRJzx48pxmDgxYtUf7pHPg",
  "key2": "68jxZxjPqx4KsX3sGJWUAuJLGSBmMesETSGDEybmjh4iJvEYyKLpr9BPvJpMmtMMehSfYPuBwwKY6HTkhxnk33D",
  "key3": "4CWP1e5gAdk2cVuUsLq5WT63h4CBzJvKbLvxLLfmS9e3XEbE1UogfiV5Xxmcmb7dpQVTh821TRMDtshp9tAwM7pV",
  "key4": "3nxhvT3K3cvh8LXZ7ao8kkoxEYyxgN14gP8AeZwjAoCxmQrUrhEM2au886mEk358yoPS1RaQyZcn5uKbzq9Zr1Ck",
  "key5": "5DbyBZKv9nWM3euot2qD8SwE4eLNGenPYjKLTwygg7V2F2tBN6QS19VXe74uVVU7qksDpRBELahpipATNwKGp3aA",
  "key6": "5FuKzNGHqhjiUCvSDBnbNCx8kxwFytWwW9JamCmQdNaWeargcwS56S7eA2KBx6t1qpWm21GJsJKBsjnNibaSuQnT",
  "key7": "tWx6wQCqwFv4pvQpM35g4VVkLU1csjZ3NEyznnGxuP2b7KaMYEACmNPbcG8Fu8xAapNhxdZmnuBsL3FxnGk7ruY",
  "key8": "35eMzfJeEWffLUYZTgCX6v4BFgdRKCDN5QZkSs7RSGhmrwqFMX99iGNdsKu5HxS5zUpyr8fGDfc1fU3D4Jzk4DUt",
  "key9": "2P8GrW571dgoaFfhBRprwzZEcASgYch4WTTnT1UX4U16zeWXLK5K88HucMmLJycAihuiwhx9k3MWhcbFuffUvTm3",
  "key10": "4WvJFr1xgrbhHtJUDJwkwYiZi8HUmFpFwVLVDbBGaw1VRG2FLeFRvse9VCZ6ZzENEESRBNe4RtfQSBeWXMJn65K3",
  "key11": "661fsoqvykQkNi17X8Few5gX3deqvPrkGyPop6TE4Xerb4qGifkfGpMTijMBDzabYA1oWDvdbWL2TCoTiKz4i3NW",
  "key12": "w9hrwJeXxhjV97YXnVQEk35SU3kLddsSyJB6KVRpiLEeBYCiY5JUPBrXLU4KttSTQBUFhq2dTHwEXnX7bZ28rVQ",
  "key13": "ytoe5jX9nCx5AmJRLENCaupxuvhFDngRbw861khJFzEMXvsqfVecq5DTdWT2suhBeC5AWZmbEh1VZ7U9pmAXk5Z",
  "key14": "VZrJGpbGKdQFYqh7fr1AEZpV6BFED34qxLjpGbCyYoR3qNraNBK3gmMhHS9XHtSEZa1QHZj98sub8DHnJbALfoV",
  "key15": "5Ge6ij6k7qjPLu2ffNyMGsMzid1uESVhDX6ZexgyrKUbmDZquC4yHRLnccTMADiFPGqrKGwQJhjouiuPsyHL4et8",
  "key16": "41ERYuA83LH5iVVgqyxZEh55xtZBmaWDVtCqtaRWHdifWfo5dM874rBZs4MfsVBTY1ZQUQFv8qj4CFKEMyTEihQY",
  "key17": "2vhfaHgfVzoP8TgnunHb656PDm5vxUL4PzNDNh5AgcExDzG8sN3UrNWhmxHSPor3RiBhfCDRrxAGqebsWdQkdZpT",
  "key18": "4ysq3FPEVULVQ1ZHcey2amC9YTsZ4E92BYf9m3sUwsc4mXfKUoJnhm99CrkazCUXw8MCufpXYuTigQfDQq9Lm1CZ",
  "key19": "2bKQEcn2KjfEo6bqqz5rrwV1DjCmSeSqpegKcZZYufNpohnxneDzN8cmeuibaX2D16RHgWLSsXvixUfqgTwnPKa7",
  "key20": "2DARGJsvVysQhMFEeD1zEsiupQnuzcYLy13oDrcVJJCTdmdoms6bbJBszZh9gGd2G6JTAuAzPi6a1Wy81BeSh5wK",
  "key21": "3Pan9nN1g8W1ib3pkKrn3FQYDYKpXjBBYfXpFswsgQRmr1tE28kmzp1sgnNHCk9JdJoU2EYkP8RUkanqpSiGhALM",
  "key22": "4TiZijS9a6eUjYNJ7k8jv1iRfrmBCoGtoFDnGT2XzhPMjqBaadGPSfnoNTcrW8LNF9MVmpMg4FuYSmkxuzGPsAYs",
  "key23": "3dipgRj1Md2jEAAtFDuutcFYnsiwmeSyWGHBwvoG8fNJNdh5Cv47Xe5L16fdhQBjmSPq26kxXAbqZZojmT74L252",
  "key24": "66pdsBSwjn6pvZDvPJgVzohuBoZphUv7g4fCsPKGrosff41H6SjhLwmp31x7Nukd6gNvDo5NjaDCES6urxJHUy92",
  "key25": "4i1JR4VRStCPCKwP9YYSg1yWZ2sbRu3tQRcP3F745eGmfiyKdXDJXGxShX9K7yKoTWBtrp8MGDh2SPg5h19J8xjw",
  "key26": "i3qgzcPTDRZ5br7gu6AsJjZYFbQVhXT9HNvJ1M17pJeR2njeq9yaCFQBMGahX47hJLWdkWYMXAU58NVeDDJCB8y",
  "key27": "5Sz9ciwx5R8dRjhiGZ5GwYQHAQ5g2TRcuhTNYfBaDuf6U1XG6G9frcTMi6EqbC5qRvhpaUjTcv1PhbFn5Mva2fxF",
  "key28": "5qg9wMUEPvmzKENcBuGLJksN3mYNjjY5akanWdcX2WUiuGKVjBdUrmNC1q3KK2bYkkhE6QZN78Jk7GYyrh1Xb3QD",
  "key29": "2tvtx8otZVMwikWSXLhhtyhzQABcv1czySBKE1ZAeXdwHXLjuFVe2Rr9FDnPx9SQBJuhoDzntPjsMTgErwAxUteS",
  "key30": "3aNwctSFwXqhFQz2Ew372rwQPCSMWMb4yV9tWEUsK6YCWnRMGQWSgbSnH38EdpwKjJsNTPAYc2ogLfmSy8Q15nuC",
  "key31": "54Qa7wS7gPui3vQT1CeYFFwZ6xYHCLYbPYgUMTaHrgjHkfqidR61Avw6BnMaJ8JTen6FwwjbdALkWtVxK9uaymky",
  "key32": "5LKWoyvQc6eHqAXPwwTBLzgRySnwj53NwWMECwXySHqFuscewR9VVNJQwu7ai2CCLpgyt1i4K1tzHWoq8iTiVpLv",
  "key33": "341ViCT35U2TgPu9Kn3gYVYMiS7GaWox1c9TQHpejh9XwJ58ppNuctNFFFKCU76EDkKSdqZ3Ao7YBzQbczPVvzso",
  "key34": "54ZNVzaXRV4NjNjMWkKar19n5jjoGNy673NcPcSPTMJpeYHSoYkpEpRfHGNUxvYyrAprfwNgKQGBb5BF5NcBsyoi",
  "key35": "34gvGSgGmx1cCAN19q1pnTP7MBUvEZ5wyZVh7eqqhSwjkHU9kHPKqw77DKYbyeFQMRuaSwEB4YCCK6XAkLnzMmFW",
  "key36": "676TPjgLiVwnzjnHDLBpwoxZq4TwLfSW3sFZakRphYBx6oi9fdB8apbMAHEfTRBfP19RFMfDTca3RczVJ9WKtKZh",
  "key37": "3BFzZDhtYqZmohNGdZX8Uwiu99YnsbzwD5GsuqXqNdMva1RXZSZmPzm5iGw1XxW3fawG36CgczShr8wSWrui1ZTZ",
  "key38": "PpaPbPNYh8sqnB8i6cYC2sPS23JgwTK6rNpiP3SncTzeyMJimFHFh78isxnui5RBwjr5ZeKojMVgjY4aSXczYoc",
  "key39": "5qxLwz274ZTTBPH3DozGDYSetfd5RcQY7Qt1jjCfxnQp9DyCYj12J33RfnCn6xa415myik6c4FiUPfx4KbB84SNq",
  "key40": "2N7LG4ESbx3gSytkgQxdQFRsMYvRYcwZp3bRrSQ945s1jTXJwPRCnTqLu2aLJumrjuE7EVua58o4XMJDZYvmseBZ",
  "key41": "g16pNwBa4KGhqctocLzHTRaYxS9MRdGRMsereFEgRwSZ7HD77sLLi4mQxyb5qYAr4anoJjcp7oPL9zuiHw4k2pX"
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
