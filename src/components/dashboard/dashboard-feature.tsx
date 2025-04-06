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
    "2e5NhABfGFnrcsTuN8dagnsuHAHTKfjovr4BgYpVa13Ez5MKTcGg3TpR1TDFbxa6wJwobgkk6R1c8NXEz4N9DVJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y2qTBgwUckpZPTYC6PSdrmgNvgaGcQzWuLm65Bc4uhiqAxFSvH9Fx8eYSGQTPLBdtCvCo64JVncon3HpYTgKqMf",
  "key1": "2qSK1Gq2okdqMdnBn9GoGNt9JDpY3H3Wzzc8kZ4Fwb6PkAFQo5knmcAjetMCgUy8KGVEZeDounQnGyC1MQpdcbSK",
  "key2": "4VMmfQNShicsLCryiZvtgwXDyo1TcsiaQKevyb8xNK8V3LER99mX5QvfbKsqrAn6JK7wmwDUxkRKZJUojbWzHP38",
  "key3": "5rA9CDWi6YsE9Vpxh9Hhv58ozc6m1RGSqFLZ5WBvnyvDijp2dZWjuGZHBLqx837gYFWyLmrkt5kaQRzGurgfuiik",
  "key4": "5WcsANGrhuNwghoC3ebh7JxVuAvnDUWhoiAZUNLErPG9KacjRCgVd2dBmxnnE3aEZGxaShTbEsCrEvtkmWfbhkMN",
  "key5": "2jrmWFQxkgSgQakUUtiEheTbN1ZRFr2cGyvz19hHcs8kYAdSx1k5ve83faqcXypH1LEB9kVZfDYbWrBEBAkHHeCN",
  "key6": "2sBpDdkwvfUMAe57ytShXrvSnPrSPyDtubaP8GE5u8e1TFSFyobjaAw9QHPK4ZnfZcisRdUyhdsNgQu11Cku43u4",
  "key7": "JEcHvVsfhzzspppgAdV9HLAELzc375n34FYJPLdm6vDmGtqbhiip5WtrdRo8FYcKEpD2ACPZz4jC3NfF9oyseCU",
  "key8": "3Lz8MHeygzqx7fBQnpw15MdrnR2Ni7WGCrhr1kPvLj1FBM3LFF3TPcpyyb9ebjVWtsSVcJC9BKaRtd5FJATx997g",
  "key9": "5WVUsdvByyrshvjx6mApKNWyonAas2i2ECPpSWZ12KfKQ7HSXoUEEJ9QbHK1n14aNAP5UamXs9g1ipoeKGBSj5WJ",
  "key10": "2sijVNwrdSNqgyr6ShwBRRgyVU4FffVkSAF6Dkwf6zh4XYxAyKUVUR1BHy7eWvLpiTudoFoVKG2Qc25akUcGsz8X",
  "key11": "4NWcRmpZcVvoJjTakewVpRZZsdyybEoWC1mPEZ6L9NqL44v4VL6phR3nuVaZYVz6W8x9Zek3frXRoHthYXJApUJh",
  "key12": "424Xm3diNJ5gtjudCp7KCcFo4MUoyLjMbFfy28LQgAo8zsbPkWUBtLBYXbjkbXMgBK8BdpSCnBYaC67No8FvvbxT",
  "key13": "Dxc7cgUC8ZgrF6yQyJWaGbTToFmVPab8B2VfDTmwoj78GQQK6gH1og1qNBdd1rEEiafYQsGJpt3YgNk7mX57937",
  "key14": "2SvBTakH4mmf12N5cfSXjozrC1NwKuMqvGVmEtXJtMj9dqZyEYgZtCmqH7iYztH2ora88mpoHCZmp7PFPsQGyceF",
  "key15": "4FCzuyVYmii1kzXgfShaeX3FuXCsPV3XEyKx1bja64LUdV3TNgDgS1NW4W5zHaLktsDEn8gbMFexVZtvUno52eDC",
  "key16": "4WNUsrTbRTqxrHHHuyB8d2UD3MKygvReJZLaBrryyhAPxAqgArLz9VZiST6VbYVLKu7qzR8W2R4PsH7uKvEc3Qj",
  "key17": "35BotL53vuPpjzvm2CeYaiB7ngia6LcsS2Yvto4T8JUpor5yBv72VDa9p7ttQ5UhSvk1LXjAAYJLgRJtvuCbniHb",
  "key18": "Wi4m4L7QzvCAaq1TdDcgoKj4cgeucLgfb1GxarcYbmZpyjbYwbEhsmtNpskj9e6LCTNC61ntUhF45FGgTMk9E1G",
  "key19": "2iYTQs4njVUj8wZyBK4HQoNFCnQYZ2wSPuv3UhqTwPjwBdk1CvUMBHBpPfuWCcKUEfFXTq3mf3YhN59FvjoBFrBL",
  "key20": "41PdDJgbdfaPVAsib4mgemy4GD8YY81Gx2c7musnwwkNZpdKVQwxcq54Cx7kHxsSue1c44ucr42FZTmvzRd78Set",
  "key21": "5DzrKT7ytxNWzB7bdi4hBrUvhvJ4aF4J5vMgstC2Eyzr4hpzMcZdQJbY1JkKMzw81rXxMeLzKm7h6JnXZN46mzu2",
  "key22": "2nou5ZxbczNEVTPcfNpUFU4PgFaDxsK5iqwaRYEZgF6bxk8FQ6ofh8p1vwLXc2dRqCZHeUFD7BkD2q1usPWeeCuo",
  "key23": "5hrVbXXs7amZUrLMH3jjK8WfUDZHC4eNEjncH8Ld61JGDCapkF2JeoCJ2o3y9AXjAqJHpC6FFbkwZMisstAGgawM",
  "key24": "3FtCsKmyKU5LvQPsAUEQ2zXkN7CcFy8Fq9CCcg7JzMpWnccbPH98Vu8yZTSifxtsBT7GymUzUiRKCFgGGQFfi9TB",
  "key25": "SYyW3MRY4QaxKZvuVedWc4tqX2NLPV8pvXZXamekvZhj8AyeF17p6oiZpijKgGUGfKZhgBazTbWJGswrsgvqx9W",
  "key26": "2MiDrgwD5prPhbeqi7AW6iF2DqWK6onim2bHNnz1JtyeEs3iPuEjfLtv4Hnsgvx7rbf1Xt9moB3Ui5K42i4TmoBD",
  "key27": "4TB96N4zaNmd2zyVWk2WojnCVTESTLkoyZK9gXanLmTL4RsXu2iyhmVokhh93mSw6o8eqeeQwxCm6LJw4tkHW7jM",
  "key28": "2b3iz6zusLJN1Qj5X1uFJ6zVQ1MF6jnDjdh1KLowGuqc3Y6UZwvKSQZug1iv8mpgWwLqA6v5VxqGzo9vB4ytvNqg",
  "key29": "4ChzVXiiGNuKcuUFqigu76HDJC3RHdSNm4bvpYEVgFB1jn8oeZkpNDMXAbCNySkF6emC89ukujHy9XUTiEdojCZM",
  "key30": "4C41oJ3SbC8MVvspKd2nbz5i7BsaRUz9eq14BcTJcXGTcp8ZB1b9H8nUhAqLpnJb9xaAmFJq9JWUwN3188EQAu4y",
  "key31": "3BVLeGuxKQEG4hX3JNCYLYrHfW9J5jBTKt3LWCVxPKjWenGXczhYGWA2ft5WHobqHSFN4bjWno6a6qidaPWvoW6W",
  "key32": "5he6hALTgmiW4C6wRNoXoxDMcNZ2hx588veVjdRubSCDuYEKR7VMez9N2yDd4LfKiASifyxC2XHh9tvz6BiUipKm",
  "key33": "3Q2a14YETEQzZ3AJaAT67T5xdJcnqgbzbFeY1roFgXrANFdXe6FeVfg326AGtQqjMFXtsK3wmQcCSyBYdsnBkAMz",
  "key34": "4jx2DEYPuevY839fxEougbX3xguigXexjSxCKFgfTniTx6u1UrMN74uGFJ3kkWaMcU2fsASep64pvEcWdXA8mSA5",
  "key35": "3H9jV7ULvYmG4WxipjgWpHiAaaVmYLv1R4juCHtB4SfvaW9WR5MJgcCBQ8nmXy41Ya5MtdjCqDxjXySdsGEpYPoh",
  "key36": "8A47kH6ZctKwn3iFtWJpFTeYNr9rv57PaAdL5xmPP1KKj3qeAgJWtHGRxCUNDzyg51tQ6q5z3rDz8AppKj7aLxT",
  "key37": "2KB7LqQxiwi34CEggLkzoLorVcFLPMXpajaS97uEcQKEgvtpxug6DCKYLBKz3yrgATNByz8jV6XLGjCgS4hHJ3Lk",
  "key38": "pQ5cMjmsjDWQA8uNhC1KtF2BYKqXpKzJ8pKAFVzetYE5YgECth8jrHrKUPVVRkPp4qFL9MwLrNeFXxLyuRYrm5q",
  "key39": "iBUHikpapB1H3c5hU26UBPUrxNJ88vqmAmtEewHUxFWsQCLu6xWyr8LMTdS62T4Mc9rCSQgQXNpmzWGHYSfkLm8",
  "key40": "2tSY1djB7mRUSnjtqkSPmTZYEBmxTsprDULDQVNnLz2NyfqK8ycaPtPiMAaNjHXceS1M6EACdo53KLmYVqWQW4aR",
  "key41": "2SfvFvpAzDNLByuNjwnuETLjyBbSX8Xhhnt7AmE5Y4n4B6hgNCNnPP3v3Nd5482jMpbZdHkKHNDhgjS34uj61XLE",
  "key42": "5YHv1X7Y8tU3pTQxzBj4mYr2bXgE4QyJ2JavGq11iSHoBVq8TRKtNUFA5fcxQQZ2rA9tbAEGGAKQCAYvBycRvXh2",
  "key43": "4ehkbaw5fbt5B74CxuLf6SHqc8HNFykxuNogGjzKFWiqqsUg7iR48mxYh4XBCu9Xi1KktqnVuXVxNTSpqDKNHWL6",
  "key44": "3zDLsuRg5LKPLajc9hLCVvtVToLwVfcHq2jeE85kRDc6uzc76X5BNz3hvPAJJ5y5iCBncz7bAU4E8FMJTt4iRSkN"
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
