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
    "4E9mc6PUZDzZAtBoaT4CitRn1AYn2raLAw4nVfQnXAq2TEkxVz27hHMPjmiNpmZvyfHV2DJZwx4wzg3en4eNWGdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rHzCjFBg4RtiVrXe79wtZKdN4CdYU9CakKdFzibS4duVHxMVXYGfR5CTxuwWZrMqgpwARxDmHdJTfaYxaP6tj9d",
  "key1": "3pFwpuVXHWneZRpKyQ3YTPaniBbiYiwPKcHC3noH7EjH7ehFVGNvv2E2CBiXqJnu8xfNvffBWbDMrA4Ch8rAd5Ai",
  "key2": "4zLDeN5D4d52JDZFgExuRHqAYwgKk9TPSnzUnPsFCSGgmEenmaMEqfEGJhqP8NXmPQ4GwYqLMDYC2gnkdnD1pSac",
  "key3": "3JQLiNvmZAEwTjFhMYxAYgQcQPCEuNJiLkyZyRBuwnFEdvqWsmhntfECWrffTYRGb4NE3NenAVcdknbMwJiWbos3",
  "key4": "3vDShs8nAuv1u4mWrTrK8jg2hmEivpubBHMDP6G3EfY7E4j9ABhb3ihqbk3PfNGYB5pegTMhD6xRLmD8HAiz344R",
  "key5": "4N7TKJEfPEbXwcGxXcf2YhbPTVp7H646XYGzo59hZkfWwzFNg98gJ9YcDuZqBHj98Vd4y3Tc5TmXK1RPwLojWY77",
  "key6": "34rpEDzGkjMJUKkfq31jTYBZK9bHic4nQ3jVab1c7V2reNGfapZUAidUGB8SJgTBfWSxiAUy9Q7Lqsncgze7PxsE",
  "key7": "3S8GpUdi3SmJjLEMSwa1uWQcHkbuqnABsJnMoi3T15MwsrBikKxCAFfS4418Vp9BRaFdxDMaggNSuXdiaZyqvGYE",
  "key8": "5PqSC5csy5zCCsjAHzdckad8E1Zn7AVWnwF3H2cSBQ7rRrcRgtrKfEDr6rSf8dLhRAhosMSWouk7yedGCuw5uY3J",
  "key9": "56uspJmTa88C4S24NorpjxgmppmpEc8paMnc45hCitzDhqdfuznnJMCrdYbgPrh2X3FJssWfn8Zorq9ShA8H4uvZ",
  "key10": "2okRfrWynBt9wv2yJxifF4GzghS8gBACkEzgpau3yArkGbNGERX3iwTBYNcqZBLZFr6y6jYmzfDUurrG1fEYfnkF",
  "key11": "5q3ske1ouM9g1Ytu6mxu7sUNRbm8HejKNZg7bmqJxS6edQSSTFiv2xi1P7j95Rcu9QEyGM3qWdR4aUTWKz6DHy4F",
  "key12": "84CMS6ym1tTBtEq3YbQvbQ9VnVhx3nB1D2QEqi2AFAK4smR3ah3zCWfe4DYZsgg7Zuaw3t1PZAW5Q2gSMASyDj5",
  "key13": "3ASWWzaHq1rxYBJVHnx13w5kmrFNYrrSX82GA21CxW55JUdQLjYZD5oJ9sD8ZF3wXzYysAJN9DNT9rvnBNiy9ZsD",
  "key14": "5yMgfpyF9ERvX8Luu6HqQDEx87K2V3ZKbcHxyPanRkX4sXxNcNdF4pdcGRKyEXdphGUoUHS8NFhn7PJbPfBF3AKT",
  "key15": "64u4JS8cpC6vjR1ewVmK7dcVTWCZzyrB6pWExWyJFSfxHoEYjLRzoMdTMtqajxrFpYpatoaGfDDM3fQn7DidTHiz",
  "key16": "3XXfptX7r1aarAMS75g3So29FFWNRRbXZZ2nUH2L8tFxQouYW2amechzcVHypPBeVsuKrMKt1kL8PBzF1DvRS29z",
  "key17": "2akkDTRJiiaqH4ah3kAHxi96oXDvh3rE3Kcfxgm1HmdJdJKkPp23HNdid4HoT6ExwJcZzq12enjbSeUoKiRWeWRq",
  "key18": "21sznrUJoh4AQDbbfC5JsuXA9FkyV2MzKZwAz6zdKh2H7EDEYNrtdS29NR2scfH3CW7iN67CCdBoDFHodoY82CFQ",
  "key19": "4ZXpq6iP49UE7C4ohyC35xgT5uRRZf3W7pMRyULYYR3QHU6pdSh11HTG5HekGsGsLGwmTBpmbTP2aHiME53Ph98C",
  "key20": "gh3o3eCQzCQtauECTRJH9Jnaf2THNnkum83p2Yvah43ugQVMFEw84hyQBUpvn8rE33qP39UuiSdMw33YJYPzmpy",
  "key21": "29jNWo8VMPCDazRYf3afGk7Ncz7dcP7qR84U35HYdZR3ccRJLSAkK9gG77SjkNHhRZEHHwjWCbAr8q9edShDRV2w",
  "key22": "DmNoLJNQJkc4piA1zNSBoW2XrUHDqdy5GAFBCG1yhGFauwEjH1m8KiCFqhKRdhNvmYhQ3gMrvhWjv2cLWSTvJjM",
  "key23": "5ZScyUHDJZQxid2zZ2bAapXraQ9jBNZ7K3YdfnJ3dLNh8yUWR7Hnp5DmEwf41Q4YBrRp4obR4K6FkkwTXT6kT7dZ",
  "key24": "3LBQtfcWLoRpG1Po9KFgMvMBjuvF6CTf7p4gokeqqnogsxRxBBJ1bWMkpwvrxvKuBVUVtP389DMnAKHJWDeHFUaM",
  "key25": "2QLDsJ4UAdESfnRhVvdsjH7moady17GR7EHr8yt4UgT1UToe8TKEj23yP4R9y5oWVsRxYVPHpMYh1ncR7JNxCUoe",
  "key26": "RUgTGqbr356kNQMCdxCNCfx6jRdqguphk9GEV5qneV8qw4gk9YWpqn5WuuV7182h1f8c6dBTHpNzBfwnVsdVYUz",
  "key27": "i4gJWj4hQeev44qp4ekuyk6cY75feD4TZp3bmNSmcWdXPcFTRsGgVvRmkeHZM9jFtV1dZgqkWAXv99FJoWSJvT3",
  "key28": "3dNVhXfiDx95CmmgB8q77aV6Ctj2dZHrz5p5FuEJPinsjrhAq6WsKCuUqyuHSEfzBYcEEWUBZz3NpVseeewynDtj",
  "key29": "49mTqUkd6jm6DpRvLentEDrB9rL7ojzMNKGcgCzwrF1t1wKm4eSMsy5gN6EW7NpWernFKgsR27XQrvQ3DkSzS7yU",
  "key30": "2qk7WFNSppLPT4MUxbmCC84WKzX7JdVZeg1dVBWAXfRy6PiGjXo4nGq848q5Bz4JssKmozgwF5aaEoWocLi63AgX",
  "key31": "4KSSjZDaNxg5SrhvSvJkxgWJf9UXGEC5cbdYXPPgE6X6focxk2cSF32SwqqbuTC8StPVafmVnzH93p1QnyfuMN9f",
  "key32": "ya1Cy6VHvbUyxbkPpJb4J9F1wqsD2fLETMcJA4XGtypekSW64MWEp3rQUxKLXvrmJLjQP6m813UYjpcrc6oBohd",
  "key33": "2dJwfzBBUfbmeQNfcm2BD5SDfJQ84sjhay7K54AJTL6rasebH1K3QbZF3FRu4wGTaC7gqr77RJP2y8H6wGmn9sgf",
  "key34": "66GgxP898eakN769VevREZVEbjioMCwjPUTPjdyNUXEavZujYVmN8sMDC1rwHNVo4nJ3rkDUEobzcsqGpVx7ycg2",
  "key35": "2AKBUcYvYPznSnyFi21pU1f1BX7xNUS3Ygv4HxNpf39MddXWm1g37RMjDWNCRJV6x1mxdU2vwALQyUgAdwWa3nxy",
  "key36": "4LvTpydbRFPahEFAx18Zc7JjxR1uEy3PFUhsEFN5YjoXWFNrVXP3z8BoQBMuFXFmh9qqy67UCCbgBqeket17amdw",
  "key37": "YXPgkydpY289KUg5qJtXBSFu2B4CHimS9qskxVWP6AZninMZbc14rkh4fik3RMmD8rBUr5Lgvxx9GyPzaAmRFSt"
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
