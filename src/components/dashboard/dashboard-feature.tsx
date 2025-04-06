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
    "2Rda6L4qihD8CmDKR63xEWczLj4Cu3jEgvuDCM27QvvkH3hW1aA5h9vBojtbvP7teFyT8kR7rUjgqMEyeVY3F7vk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A9fJ48BYiQqfqsKMpfwFxtGJMorAarjcPT99Yxp7YkKARt3VcyfXjxUhaCbEhi2GHLPhfEvqZvieXeBXxWjh7yn",
  "key1": "4UUDBqKMty3AiWtyJDan8C15X7aja4M6Ze82PotkcsUBPWtuotvdut7T6MCF44Gnrtbe63mThSWdkoH2ikjp3YeA",
  "key2": "2fJ8jKTcEcvGD4ubaTZXHd4NqrAVHmMLAmtMPtgw1wtKXMuXYUbCxavxQVjZkdJRXXwsCn1aeZkaCkx7G8BRABhw",
  "key3": "5PuWwafo6sTixiiADbsGSEgoL5yfvLTVFq5GpbQsfpr8psrkcQowAVvKzXjdgGq8dqcFogtLzt9uaCXHYdZeYhVW",
  "key4": "3Hka6EYYYriRLPE3a7ZcFwmBfbcxsZPoUuyRPuWLwBaUXrNiQs9eVjSdzw4M7Pu6BFreVmzcBUHXzt6DEzziqrH5",
  "key5": "2yion69R6kpbPLdhLNN2mdFxYDkfwqbgRxEstzWBaBsGmrRVzvLXNo58NJ2GnkZiXZHSLkCZVNPQLgbKMAZGaeB9",
  "key6": "3Z9GJgJEYYU6hgAnKCv4Rv8ZSFq3tVTUs826VcCV3EmGLdeAybj3TinWN6m1Ui6Gmveqy4SPrqZGs1XVgBWdjpi3",
  "key7": "2hB1yGvDXpGTGpW3F1hDbG6tBuwDbg9EWQEAEs8TWPm4bTCmvy7BAv8eZjqgMCDkXsfZDBezbfLLwMBnMvnktze9",
  "key8": "GAhM7ao45cAcQC81yHcMLgTHMRAPTmGRNBkrdGT7w76pzuNpGgACpTknJgoSVeiauqLwcecyTF4e6on3KB4VVzi",
  "key9": "2fVUbd5xPgYZccgwtQpLhXDmC1aJUnLpkmrUFpSyoAPdDmcuC4sUrpPXx4ToXq6f91F6xjuw59wptfBZHUx4aR2c",
  "key10": "5zE6fhyrdAQHzYFMHGWZKjY5Rviv7KnRNrH4m2yjYyBWZqzqg2fKDJjfRS9dDf8gzv7DsyEu4SmKG2eBTtCCacfR",
  "key11": "4z6hUZfgp27hFppQnckThrU4AvQAfi7VjivV7QFw9zckuvs4ebMwGpoPiPGTYUQc6mfHKQecPMPs7qByvMHuvEs8",
  "key12": "55cTfwHgp99y5VFA5jJ9n6dbMiz4G8FzBdgeDwud5DNPNzfBaSMMG8idbZEcqUmbNLtRiPByG6FXboPxuXwNxFKC",
  "key13": "ZBbRxNTEr3BVd9JsWyQHFLP6pa6arw6MJrhaysWNFXFDb2ZAfKRxnt1uycd1EVXDvui2Z1CMbxysRFCWfquCp5m",
  "key14": "62HjodnMGFRQjLBSU4KcXcdM1qBSvfTySufx6QEBgwrhAKgWuHWu5FApMyvsThx5XimjeuD9HveoTwWr3wM3Frmg",
  "key15": "5wmjSQUFNJYsxwRoidD8GkmvSx1yfNRZUbiq46zeGA4cXkYXEip9wR9KoQqv2f8KviWKKCEqqXTMKppgZGbW5mds",
  "key16": "3LSKY6y6HJVZCB9Q1j6NUeK9JBHq51WeCYVxK6XbkBoTDzDwubqWMbRonmEDhnyFmESzDLUagJn3neCDtfy2mek1",
  "key17": "3hhXNKkfEEb65S6Xj2J5dKv9Gcyhx6VRUeSWJ1tQ8R675g7WTsQVgEwaeWkavGmqCm1eX6S4sxHdhYzxvF7GWP4s",
  "key18": "2hP5tZhHx3p2WwjY2n6uAb3tNTFuA4UpYj9gBWBqzdFj75eeLaXh97VUwRiMsAmQXtFQXmXHKmYSwKzYtaEuwbKa",
  "key19": "2W4LnyRUe4aryHWBhd3ghENz4C4fiTwJtBkB7QE4sAWFpRn1SqPysmBm21yVZFuRNaFUJUEnq8URyNM9um8PDhk1",
  "key20": "3aB44jqbrJrfE4bGFnozzLGUXQztmUdAD2RsYH12wiGbuQ86r8phJGmFHYHJb9kNg6DjsGVZMzr4A2AeenqFi6H1",
  "key21": "2QyCAuKJSUD5jxb1YmqpBVRH9ueAscjhBDf2wK3JaPpB5EN17i5jfjwMiQopfYN2eAN4xbqzYNanERbKCsPx2KED",
  "key22": "61t7KcefUm29moiqoBznRFbm3homsg2YNXRvV7mpLNXpYbLdE5TtkaDVpwTVeEBiKYr6wiz84HiBriJXcY91Tjk4",
  "key23": "cuDbAFjn3axfGE8DZNceVSuTacyv7M42s2CCmEqKiCHRZ5GjWyGxfjZqqcZo7P3XgpyjxxHRrRnYYALu78nF2d8",
  "key24": "4C2aZ2LNnXGTSo4ApR2bna2hBm5mb5hAM181j4yiuBbPEC7mFX4gCzGjZ2wHfAyr5Y5P81i98SfgPEMFmicDGjsW",
  "key25": "5Z9oyvb9rmNXZQkVyj13AC5vF8xwFwQeEcKKthARtMEbHJGhMg1RNaowazwUv4uSWAtStkZeHcaf3g7eCRBBvYXq",
  "key26": "uRjZfSw462J2ApyY1Uq3bmJcChEUZJxtWT9NTFVKN5UBuobSeZ8VtuSEPSh16KQEYzP3QMScmpwurapxcb4cMq6",
  "key27": "3HzKQH2AW2AnRDUdtrGb5r1YDWTa8zTCiTLQu2SvgjvzryYAArqkrJbfyo1Y7G1X1hS2AxKoC1NymZAE7HBo71vn",
  "key28": "cujifasg1iTiKdrP6TnGieGQDoWv4DkQwrNsdU5EUr2EVSfSY4UHBT79DwZpn3f7LKtm1YHJZSAAuCAafFpzbtA",
  "key29": "3DTJ5PsJ4kkZUp7k6FzMCJiKz8SsVihSzGSa4sCS7RMyTb82asAkSsWdbQ6FWifqfxBtWT5FpXpbu76kbUMaWGqK",
  "key30": "5ooZTnnymnZQgs6PTsti16vBRHa7bwRhxVeBngXytGmPXnFZhmwg5crN911E2f4ffhMwm3WyoodhJ8gGxg68VjNq",
  "key31": "5WFgePwFBhdfYLUdwVRg4aV9nykQkc1j9gfpf9MgjkfUup8wv9HhGipGue6tDXC31rYkyAx2uzDWgof9xyWS4pV3",
  "key32": "2xPA2yEJAvvXMETxFKSTHEchbBNHLqh4tmJBebYvbiHFVgjYBZ8B91tz9cUUdbc56Xsu5j6opFG6iBKGgHurcWcJ",
  "key33": "4bX3pmNBD4iA28k2X2CZ3v4dkfsLxvNVgRPnTLh7jrhApFUHc6po7ANHL5mtYJ9j7HmSjjpdUMroFcxW6L9qyxyT",
  "key34": "VsLZPjs3yAWoGvx2YTwxRWaVcjEh9G4PMAvW2kqUDZEKUTtwnRhXQZ2uxvyTaDYzd9kjZJsoSP1j1k4SGkkhJRn",
  "key35": "4XaBJcvaXaJGn74TtGvtbvx8h3BM3k2wDfXuWzTd5krRmaek7ERrFRtHcvE9yMe8HMtQJaygyc1DBRM1xbKQhKMv",
  "key36": "5i9zzwZqowNRHwgVRipfEsz4U3Tmtfknw3tCs1fggjZLurG5QvL5LaBm5aWvg8qC1NMad5Vh9WUEsCZV8cZEaLvR",
  "key37": "3bLYE674Y43eGeazjbLhbbaQpLbacgoHaybVMzawsDAE8NSoPBkVKwXBEkRBT8Wzk638wKJhorCsrsDMAo3hdK1r",
  "key38": "42XHLNTUn83VqGAqZz41CKQb3eLs6hoNy1ELB5t98gmfWm4VcWU9TWdi1QSdS9igXH2vDiXR4cZ9aZge36hduQnK",
  "key39": "hhxu12GLoD6Xhtrv4rhVcmNAwsZ5fDUnYrUvrMzRL8cE1ktLRhj55t9absdB2jMJ8uqGxr6ntZmekwUyt31B21k",
  "key40": "5pEw4TikPugKShtKtUgX8EWEBariqUJd4z2tWynNRscMoGDdNgs4vy1B8AzRThU6mkcEgbXrnicZnXtkeqFz8wRg",
  "key41": "3HHZVGFrP9FHFzzAjficjMvcKxMC2479WVRmA2jzBkd7Y7K9eTxeCbA54W86P3R4a7P65rRjmSmQCLsdUCquA5Pp",
  "key42": "kfCh24RPs43mLkE6qCNmpvAyteSGoMedB8bNNnDmCu7nHpE7gys7CyvWhnxEkyin5mhhZRoMibnY5GzAGum2Wx2",
  "key43": "51wFvjeyk463DSqYgSFvzs4MivrFwyveMbbmcRQRd3L3QSyuk2jqnRCvmf87P3jo7sQYi2AgkvqFqZ7mL1F8tAc8",
  "key44": "5yGjq8m9sxT7jbSXYKA9mWfVHCvoXYyjKGsRs7GQtJ3YT4jYw4H8ca1L7hiLPMLKRzajgco4YYiNSAd5R3RutZho",
  "key45": "4pY484ivPjTmeMw3Ucn1yyNvCh6VrhxoQVanC4gGQHRLXRJF3dx8C3YH9PfK4aqLqNsX1PT4Xc8Yzv3RmfUd5mh1",
  "key46": "2H8kC45LbMSQhPbvrXNZFDPzJaQqTfsJRy2Hc86KxLQxHC396GpocpYC81dJbeRYLxG7mvB4iYNhU9YSJT5Q95n2"
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
