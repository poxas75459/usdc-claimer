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
    "yCdX7JUnEoZQfxMUkJnnbG6ywRZaeqSwZPA2TC9wr1V3yyxXJVcMsMntGrifcTFCuBwoi56LCD45m6vSnyAAJVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yTJtGnWnKxwF8CvDotP57i78BFDVj7pBstsZBvqXN5AMaZeMhs8g4KLHaWyttyAKne4wJb7kTvj6YgCfiZ7bna6",
  "key1": "33G4umPuQaYurYVDKJWp7u9T728LhReKBzs6nTaK9KEkJrRtbcmKh7PrYyAKUurgJXzca1qqDkCo6RJJ1ohChw5w",
  "key2": "5nJzjEA2z1q6Q6g18J3iZiQLMRNZHR2ySMzfa2aZ2fGKHtf6fos6dcxpCaM3a5yXiQKXkMzZnNoKCmmSyX23ABqw",
  "key3": "2aarrPDi5zRGk431TRuZtMMWqffUzRCxVEc6ojF33kiTxJcfxFeNKKe5K1b2CePNZuCcdaJCxcPaf6Gor6iwu6qu",
  "key4": "4Kp7nq1GEyABMu7Yf5oMTmKhhHWUqHThBuSBj78TaaS12cA1MBtjhm64KM78pgCgGhBxLjmbTTKwyeL2tzRdsX8y",
  "key5": "JCus98GhuzWXRQgwPi8dCgqoZUDqFwST2HPwEPJ6TgDfjU47gMtXYvXVzLPvAmnn1LFz6jW4pHzQUMcTs35DpoK",
  "key6": "2t9wu9jDXp6KVatELtD1A8a4vDfAmxbVtRkEAZJmaj4r5HXYSurqwFSoXLcFbt24kxrggQ6YeLE6fBXwKaBzcenG",
  "key7": "5NmVny23Qfo9MuiMG4kwo8BtdvaqKc7dquh6Kex8q1Z1WrUioGUeFPcJ4KfeJcKrPGCGkufB82vtYXvwBEP25v8S",
  "key8": "5foqWQ7ziQaxwNTUxuWg1gML1e5qxAxi1KFyd8QMCyW5z3jYezAKYhLTKoegpXPY3GyWidEWNKpfP1wyn25q2DwC",
  "key9": "4rgstVA3sTW8LUZtjck7cASsyHjHAWGJU3oQCXavMfwMAqiA5iSYyikeC9N5Jvo4iKindfcjjdq5eNR7J9AaCAHu",
  "key10": "4CaeqeEM16oKvWQnJvwCnYxjgeFQXxXnVFiJdVkSEvkmuf1ekVxuMDz57xE9RMqGqs5The3BotA2Yh3u7RjypGj2",
  "key11": "2kzaDXnuJhzZTRscLgFdVr36aF137v8CTTvCNscGvNmpD6CNvQWnznNNVd8x2bui3wVpoiZAqCJ5oxu1t6Mpmuvy",
  "key12": "2e5fC2UncH8EYv4xkwhWKnKLyfgZH5Xsjeei4A5pg3XuN1eDaiEbqvfKEpbvK9zmD4LN5QETk38NfkCiJ6A9khkM",
  "key13": "2yFx7UPDEiEe7sdstJ28yjwfGgvgJxukFa83t5aqGyY2JF71f11bqQz1RHZH1hR4idj9tMr7cBYmP51j7gP2HxU6",
  "key14": "44hZtQUDAwrNrn5oCNiG1XSmwoJ5zbUKVikBZSbvd9MX4P27UjbUM5e8w4mhzY87QsVz7QJPthNg3cLyD7H3cTQF",
  "key15": "3ZDZA7fSrAa4xQJVKjvZPiXu8dhabRuftstjoR2vW4TCvhZmDptr4f7NuYQspznZEo58tnEc7rhk1qW93uw9tbrB",
  "key16": "4qSqHRUeCihD5fovTCYXbaMWYdiiroQbZxtHqrUxekuWj1YEwWNKw9RqgNhEDnYCoRp3NWLuUCNrhYbvGsGL79ae",
  "key17": "5cuemmF6uiBhu9xKg5Wfnp7P4P1GnWBKCfhhnyTiUAVnxMw8D7HkoxUC6fSUYbw15xozb1FYha7cdCt1wEfzoU2Y",
  "key18": "3R9BcHZXog365ajMn25UEdP2xJMHdimgWCfjKrpQXZgFuxpmqWBn7orSxJBsvb2GY4sVvfNFFqJdo7tXzqN8BEF4",
  "key19": "47LzuSvTfSKTXSYaqZv6Zs1dJrvYtgsFmUDft5J2kNdJD25ms7JVzqHYQ6Tw7hBUryArki6z929pY7iVeiqfR52e",
  "key20": "UDMWgf5cdb8aHbpJLSLsDNKetwx4LTpreCur8WT3We9G2BzSYp6Ggck9XfApUGCerHQJQMDRJmWFTamCZ2WvozD",
  "key21": "3g3dYYwELK61NLfrWhpJFbC4c2Kb5PopFvEFEmN8xjHgygXKPhqdtFP1uHeCEEQZ3Lm4SQqnoZy8zZFUNWaBjNPR",
  "key22": "5bwApk71syFFPAL4emufW3nFndN7hi9333fQ8ycwBUiqB9f5ZVTM7ap7YbRhJ1NzjESbwTKNNYaVXDkW2Z1pJJhV",
  "key23": "41qH623bhM76iFZhCPcJeJYkTuBSAr6MoCDCjCjsLVV8jz4tDYbevz6Bis1NP1rXmmaMxkMAkjFqQB3PVd1QTgBp",
  "key24": "BEixWmzged39pYomJK9oA8F8AdGijeneJdks8vB9R7eHEwHvjYiSQULbznGQRmvjtEDprer3i5w44W6FG949L4d",
  "key25": "63cbAMrhpws1r4DWwyzq9aaTJC1ozCoTDFZxT7CRkzehADk7NUSZ5Lqz9VVvLRdu4LaDUoVWSNMr7mRmqUR7WdUn",
  "key26": "3cSzocN1HograLDczMe27YUAyck6j8uekbMvEoM29xfeuZJvLy87RHuaQw4xDGdzroywjG8wDov4Bz2XTVHyidk2",
  "key27": "bAQ9dQgW5VWjR9PULAWrgC7nRu8bCbP4F7rp4uxQ4wHtW22s9hxvfzPdYBvwafTEhFFxpLSeSMqZbGgtcaLctVx",
  "key28": "4aSDjoNac5dsegSe2RpTp2Dtfptt5yPVrDyjVeygvbHYBfKN17yih3UYaGQKEfqXKeHb332nuTGJC5rDX5yNC19W",
  "key29": "GiAuaZxAidU6aTbBYr6FsUoUuudPE3qyzhstMFBWn4ZN1UUp7rw2kZ2GEcyGoFMZfhFWtZgN85SQBr4YwJknfc8",
  "key30": "9a7fiSH7bcSCHaab3uvB6djdkeBJBXkNsMEqQ95Fj7ym31ZwnjKzosVHFsrvqMBENDNM3oT5bJXKdZXRpXS3Cjz",
  "key31": "5yuAtpGQGK9CK2JzFhCmcEJ6tcJi5b2fQyx1P6LXkeyfQyzB2WwBr625rTGXAH26ft1rj3ziUcjXYtbzpNXZaZmC",
  "key32": "4uHi9cCe9gX4GySGv6mcAENbwWFm7f7wtmLFA9xWyTq8qSUx79MBe3rq3a3WZ517mpF4npJzVCq2yn1Vhbo11hJL",
  "key33": "2CeAQRkkNsB4CGxnkwmWexHx1VizT6Z8DcC9DAxbZSEQWZPNoKKndvyNESvcsBXJ8e5B2N1KX2GuFwngDCSmcuoy",
  "key34": "3hphHoh9pUAUnjrCxNVeWaBTqHYxTEkEn3qvn2fs8AwdnirRfZqrt6QLASDXjq9j3GG9engj2o6Wtnf4KQ5W9bn8",
  "key35": "8GDyQXhF5Z25tyHiU2bBdsqdzX6tCvThCBbxeXp18K9LK3XYA63QidV9ytZ8sLB4STswPjPBhW8ksNvQVWhYTmN",
  "key36": "3SJaMny3uaWAF4Z5AdtTXWUUhuuAGQz7Kzv9dPmmdRRwT5pgAYsgRjrscbyxNUuAVqt3YbFdoXute1YJWsxWgTVV",
  "key37": "5msSYhnWy5i8yJ6Fr85CMRd4K71NQBPbFejSiNJnKyUFos57WC8wWRjgcsGJ4tN2nH6ribFtvyXnuGi6Q7wSkTJX",
  "key38": "4fQnCyVrmbi91fMq1XHZybPiTeAvTRc7sLFgXtitLDXxPq3NASCG7MHsSgmjKZWWr9zui6t6wkKvtJmjGeYmmv8p",
  "key39": "3mRRuBiM2UPs3zNY2E7iW61wdw8CLvtk4LfnYLQT2FTRdsZhspPtrX6hxx163wCdHXs3EGHBJZHep4pc1osa1zji",
  "key40": "3w6Yg68VrSE4f5h4KdC3aU61Sag2zTJ9W1d41SymuaT7x3j2GgJvuXcMe6JrtcMsRZozgdV8xCqnuMzKpj36gcnB",
  "key41": "5zVfthQd4dsDsy2q8q6oGLvVyejKHxtnaV2LE7VKV24q9utxCRvzkfGV9GowzA3LMr2efPvgdD8ySAUttBNmsPT3",
  "key42": "diZjUVkXLNteEbZfNjt7ou2jBQXjmR2iWdWYJ6jHNZpdGVyVB9uQAX1ipV15fUYC9mhwdi1kpnB4E5DDbSTNUK1",
  "key43": "3Uvn7DpyNF2azaToNACVXDKVTdRayRCrij67wwFtWvLxzqjPDxM6mieL9Vm46N64YHXd4SetFstnxNBKBmpB5TbF",
  "key44": "23EmgVcnTzR4SNNYBspFfeD2sYdjKkFH7rY46R5yE63rTD83wrP2e3g6BN3mBppdT69DFKMWWKtSG8FVjvs7W8kW",
  "key45": "3nfcSdDF97XTSmfUoKRao22XCZtPXLWCbG2jzt8gTkrLhvxE6jZXXpMmtGTSmxpAiup4GTUhT41F873LD6nW7TwS",
  "key46": "4DUjxJRvsy8dJwfkXXewu7qz4B4G9py9fkNBCeHoQwV1Tv3p9Nd8LyhSnpN8PmKFcGCCKHJw2S2VD6y1pRA2anmi"
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
