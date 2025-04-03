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
    "5jBdtGE2BLZxfpTPv35wfeRwvn4b1sJzdLqUGLjYyTdbQ1KDiCtzzC7uc4pDGtgq3mxJbHYTYQNetqniJ5ZzE3Ui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jNfLYQFexfA7BqFFdsL6xnDLJPem4ya7wfuif12cuADohTMUvc3EPSTjbWrtTUqyUiHC8wcvmpBc5xLergTcBCy",
  "key1": "5A4ZDHyhMvRPquSg4oCx9Az9eoH9aaHR8tG789ywyPtsX56qH7wwBzHdFp3fN9wUfzLtgQkEXT4Umq6RMnbnqfiy",
  "key2": "29tiun3SZtSiJjmYEQ7te4f9b9rXN6vaW9sc7UXeLgyETzYsKWjDTcapccjUBdcKF2ceNoa2KJ9G96iwC2hmmj3r",
  "key3": "2w6YE62ffULQZQ3wAb9pZpDGniKGW8b2mcX3QHRJbkno2yW8aoGUdR6krKzbUR44eQ1agNnmDvRpdonkCvMNeccD",
  "key4": "5KmetrXvy7u9x7Nzzg9PyoAW5hU24USyMfTchxVa1k5aGtew59pmsdnwBE6LBCdzUpEQUMMfJKD1XEnJBp8iB1EK",
  "key5": "47EqFLBExr2hLSy7YiYUkrDmeM7WiTJCEV6jD5QZHA6NSz17hx3j8FYrP9KTrVn6dgKw9xiA5RpfWmZehC2TT8fM",
  "key6": "yjcU3LUp1nPKHgssDGKUyJdDjRBDGiAGG2e2btk7HyiApoxt8eFjux7hDY2s8Ctu6S2sTzoqYafE3BUcNh7tYLg",
  "key7": "2Mp7jWPhjhZCyVqw5BwPpghUatwozjYXb4KfQuJSasV3tkn2b2uUhpUAe64AqRnWfyTAD6HAPbWhYQMHEqERcLcg",
  "key8": "Eb5bXmes33wuTNhHKLerA1Czb9uh3ML3fCpqV8fuswsbsbS7i5912cs2SbY1BakHykax2PAdFzMXSeps5w8oTG1",
  "key9": "o83C6dhceuCae8KcTVNBxUcmher1PvghGpVDTJTA4DkA8PVL3Huw26SAy4vUtcXjTGfr5sC4ehMwvddkDps52sb",
  "key10": "2u9ssjjaD2AucbZBzwmv2d4z6tFmrJE9f6Ktbaf7g3sgYgXVB92ASAJnYVkRE5GbzTw1AenCXwYoWohdSjBbsCtb",
  "key11": "2BhzVqSQ28PKxsGTeJ9pkSEppmbe8aneYDuwDewvjXxYxjG4Fa1rFzqnuXpphcbKwcR2KBBF7RpCyEx6h3UeAekN",
  "key12": "25doj9Fkt9fyJEDLuvev2dAJDxdTwqcNZAHt5P3i8esdHPhwkBoMfnG2BANqiXv3sBX8TtExyjGucyobCxTP46VE",
  "key13": "Zh4FXUZBMFCU6u4poUsnpTPtDyWUEwYqJhbJUrSqpsH453RhzbgnUsw7vvTPu1oBggYhYZoQUR3eFwjeTzyxA8e",
  "key14": "3ASNPJQcKMDaAvCpSHRVmzYQnQLZpwEbebN71UvRSAQxwnqoNyNiLiVjDyRckANWhLfNMTbnxXkYwuj5msQ7W7qY",
  "key15": "2Mkpe63WRrCLD3sCWESjfC9br2vZf9K8iM7FVTUW66nzJ9ULbumym5jTuLnZq6Jf23LZ9fxskSAojNLDFmEy3RrF",
  "key16": "pPgfsLfvQ21gxUqGuMyb8zb7N5Y997UrkXnYeLS8PhKEHTTRXTEcoxBiD9j8SfsfkEYf4ievyLKLETxQVquEqBP",
  "key17": "iof5nYHB6Qsz1WFYGFTwFtWErBX52YNqdqNH2YL4v9Li9rjpPureDWCsKzVUWfegKGpqiozJaHCuNhzKzVeuT7A",
  "key18": "4BZhh4eYMCuQCAciGXTpWqvgfnAygrgWqkMUQ7H8mojfVw9H9XHkrqmXPGEhD5ay6r2NELBcDTh5UNLAAkFX4cLS",
  "key19": "2V3BW1mbBwJtyhLZeipsanw54yFJ86oY71frtm69bQ4R1n64ePTnjRzpe8cUU6MPKpHPKnBNAiZRci3bCRcMiqb7",
  "key20": "5bTohM85xRYKvupbmw2jbE7NLcRBmAN39t8T7ZBEiTZkomYLnhcNFHXeDE98Us4gobHxDSo1Mn3p3zeXcJdY513T",
  "key21": "5Km8R97KsJvEXMCpyNRTdSnq56QD22RttskEGJjuGGR4PzG3BKgWMgV1kQPpAkk6pkCAREYPK9Db8grzKMeces7v",
  "key22": "5abR1cbtea4hypkLKWimgmyauD5z73WbwhEVzLCdpT7t1du6mfYdya4gNkmBgPfV5YjtJGgkob2BgFGvFhdTNdAa",
  "key23": "2jJqPtkpHMVZQ7sRD79XUHLQitBgpV2amkvykJFgfCaFDLpDgsU9SwbxkbSatorm7J5BKnad5yvEHWj6paHogj2b",
  "key24": "3occUCRTV69R4LZMNzbdsR7QKXYc6qFegVk5fKxaJd6Fhx3hLkWoGPidpADjCNGxQpAhBm5JbRE498LDzYsL2sgF",
  "key25": "63isHLeAgbNUubWxqjv9TqHcMXEW7a8aL6SGUd32k8U2Xn5cp41PdFuoCYBS5G3eTdJ6gF4BjpdZL2K7EyPVy9jj",
  "key26": "42aUsdh8RgtXDmuWDHRS49b93aM6DkKy3qrvVGHt1AFs5NuNbPbetFEU7bMvWLXjShTBDjQiwRbV4J9e7PnE6gnX",
  "key27": "jWAbix9vwjanKZfmipVv1o4EgAA9Nx71sBsTirw4yZv4q2Cxvaja7YLf6XfAtB5Y1SR3HGEQo6rxU5Hha6oVq9J",
  "key28": "SCtaJ9vyWHwCjcCjaL5cRgjUUH35E5JFMXM6jLHWwEwwMzkRXxbBoX8ZmLcZSPWVvFoo7qXB1NasZWc5dKktx8L",
  "key29": "4YxeT8C7zXsnN3bkkYLM1mFxmHwaB2Sso1mWv4hQ7ParBpncUdjc9Uz91tkBWGqKQxS3LQQKgJnaLbDJgYJnHBMF",
  "key30": "21Vk2YjcR28KJSAjdPn2YTRCr2v1A6usjAxhYv8RLsghtDBiYwg61bM9Rbw2W7vxzRhwPYCFg4M2PpYimsqp3zJ3",
  "key31": "2nHug2PvmWu4nAazmd7iQzvkjnZtsHwbeyg1iazhaLKs4eym2tYXKM1g1wxAv7WWz7RJoErUZMBCSpFk8cde466p",
  "key32": "XWvwYVhF9HeVSptRyseaPhVq3aRcGKdNxKoT1uKeHM1cpkmnLoNYoJgT44syoDz7h4EjVidZh8zeZ5sbuPMcqCw",
  "key33": "jWvAhrbitMbcydKCckSiZCXdGyfgHAeFedVhbdAzQ1C4ZTSx4AtvzNSmi3a3SakXwYsM7fB1LnjyKK1Kdzsibn7",
  "key34": "49aBzd8YTMrLuBFYbaktfbM9JkiddiUBLMKdeC9kwvgsiiTa9ZEiufhsnR9TE9LLmRrxASTj5ZLmVKRnjRp7V5JR",
  "key35": "3hiZcScmWbYVQWDcJtGnvqXWzJJkv8DYQfbVqPtPmT9Ztgc11PUsdXbX8MFhU5otMRZCwpkwXkceKBK56UQ171T9",
  "key36": "29nXFJERmhh2W7aFpZYjBfPxPaonDrAYeMHnryFm7MEzZgGxdUVR3x8owhuYLTjWNpmxJHwT929wbYxSGt4a72bT",
  "key37": "3jDLdr2NNw8MDPKtV9RedmVAV4PY9caKJ2hCgC1yUQU613tXvnDbDENbWq4tFtdHke3zKMSbCRQKsgmBSJsEmy2Y",
  "key38": "5zjKWMsRwSeBa5myaFEDADRVuezaGW6Dyr2WNUyM7BtTiDsP5G41Uepog8YgUmQxBEvACTnnCbqLbRBrLsMrTvnt",
  "key39": "4uMiL8edsCB7YzPRygWnGMqRG6JzpWqJcKaZep7iep4tafDgMnBS4CG8wMqyADqnyYU11QYmCZBuNA7B6Q9TD2R",
  "key40": "4jqgEY3vugcBiTGAJ2KAnYMKsvLDiwob6Ynqwisi3nBpGz7n8KiqPdteyAFe4bXA7mehCZEJmiTUXxDSYqJviho5",
  "key41": "GiSuPh9ux4HrncDVvssPVgDTZRqqEfC4HLB788kD34SVAjxJaLNk6SmStM5jKihbdUjA415avJSJXHAU8W518un",
  "key42": "jvXt9DbVrEN5zwHZHJCfnq54RSeXjB8cQZNJsgyHHCWp8puEeJN7pogY2p5qepCymeduFd2JkWPFx2w1biQ1rTm",
  "key43": "yoXXhaju5iuuEbon8Crf6VAGoajwmLAWA52JEY2RPQja8hp3Ayh58o2oCRnyt43kaeQXWcGXTZbbu9Xwhh5vL64",
  "key44": "2WxjJVxCqX26KBvh9anTjomYEhr7ppJfPk5wjD3L26kJQf1SFNKSkyU7BMxgytFHxLibamVdA4zyGArxjZz4EKt6",
  "key45": "4rdnvJgBBSpdcuutzFEayY32PghpRTvZgxu6iHZTDW35Yoc84LCHG9Kz3m2KtZYRzqytxjiitvBwkYGeZXyopfN4",
  "key46": "3NyN2qGY91Q6zbPAuoDwP8kpHxaBLRosFqeA1vDGaQDRRXVvWYx9jiepN4DBt7kt54xoXse5HqdJVDwv6WGwMo6C",
  "key47": "dhycnyuXg6fNmqnbQkyE5RqdrFk8JAJYenDx7H8SJVnYD39hyZnrXM8YVSGqgXQE5oyEHTHzBXZ3N3pV2hkXH3B",
  "key48": "3a1X3q1W2okNJMRaxWdfjgsCSycDbNnWsd8yPivkHwyHsuu5kXeJEq9DoYwLKP5ib2T8611oRFpgkS348R6tyoNH",
  "key49": "kfZH1CaMM35v8obnUfGMmXocaQVD2SumsUp8UfvJGw87bwoGqZ5Pv29cjjWCj3siSqJdG4D25x2s5a31TF8pooU"
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
