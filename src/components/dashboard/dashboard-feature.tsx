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
    "4DBXdxuXxkAvFrVGEcYVfWUDq4Hg7Z9MyZSzkPRRDoQW58irJryU2S5nHXrPYgAypYURaWR4D4dFHLoE5Q3L7ZV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KC5EFmnLijrUBA7Hdbvmp21YeAzuAPVJrCTY15J2c65To9j89FYBUkZY93t1WJ92Mf7zizte1gQ1ihA1vJHr2kz",
  "key1": "5nssFEbgvakiYSm8p4jytdRGvQw81DAHnymy3FAUEmwL9MBzCqwkE2o8SQGBZZ65r1oji61vwYqeZxgGCKC1aZRK",
  "key2": "cxigsDsKMP6QRA7SEuFEzD37qM7qRerWrbdorEYYZVR1Kw485wZySvju2Tv4KBs2Va9GkvjSjW1p8tLfpBgc7aQ",
  "key3": "45c6x5doawuNiPKFPyqLQnYzKmEckBBXgr1vrabLm1BvBRFyJQfj1u2kgCjqd1n5EJB6XpZRBJsT2VVJBF8opk8H",
  "key4": "5KxG9H6G5b4dsBdR4YSxDj7sdX6xXURdNRzvikov5qweK33t2vhBKmcdBtYsEhhTJfKtCZc5ajdsiud7TaQAJv3E",
  "key5": "46hchzMvQD4jRjyfpZScjhZKESCBrreqeqACTX2aNWiKS2YydPPe4V7Sq4YYfC1F7iQWYwBzu3i8kt3ZkAwUQHqs",
  "key6": "2ejMGXw1a6sW5bPW32CzxPDGnqrR4uV2fQT6oV519wARBu6WeNPS5oxzgxweW3ChpWBeEck5f42qiiLiojguvAEB",
  "key7": "3Eoa7QuwxLMhbX1seBsEkGZvte5y2Qz2k5mE3pP7oqU29WCUoKEhSZZ3Z5THBoeANyvSFTnGD6bjjzcNNPpc2S3e",
  "key8": "43RVrWbVmgAUVfctTwUe71kBTV1jZWpXebsXpesuSMCtJhUjW2Lok1pbvjsFcKZaqAXaycrZQkuvXMmBcqmaKB8m",
  "key9": "5qrtBbG82G9Kpy4ycbU6CwWwMeEW67NHJ1QfJHk4SM1Q9V4PonW2DkddpZ8q9zBbJiqc2JF4AaSbXBmbJsR3MC3L",
  "key10": "2zdHCjrij7NCTEjWk7tUtkxUbNjUD4Mgtg7CqbHJNFnT6XCXJpZF5VYr7VGd7t7EQPbhC3bjsBwCi1UfGXrZmdS4",
  "key11": "3xeTPoqXbF6hhcf9asrJfGxCWz5hiTL9hsSBqvYPyadbxAAkrAEWubW6ZrZzs4oPxXrEZcQvCMXtbJe11Y5Ykb5z",
  "key12": "2PZ4WpKKHAcBfNxyoxS6Ha2zeSYa5tBHnVPYppfDUFAoLVX1LwMC1QfdYDMwQBdxmWqCgnWZhFTfpNMpkV15DWp4",
  "key13": "2JCC4KW4HoKPoZTBiZjnp79KMLngwPhBUChWRy83eH6pCnaTy17jA6WVPgSMNvmFbNibRRdzcLJy7hZCUtgXeqmE",
  "key14": "QPTvcQz84Pxh8XBbeMW3KxgwABJafBrRHh79RVpXQsYFeFaQHW5F8sfSk4gsNd3fEEKujHNMW2hh6tifS257m9k",
  "key15": "sbCY8AWChfFuYwitJrUSATubaw9zUYgAozGtAWHia3vM4tX13DG2eeWvjRQbzC9jkmMPhrkBMdLgb5yNsZFKCTB",
  "key16": "4AXgmtWJYZ3f2WsedYChVQdY8XbkbGT6JqQCJhtb6zcxFYrK1GXbyPBe2yB7QSxa4b1eS6cdqdSmnngXPa6qGJsp",
  "key17": "56YDVVJoyfArGFV3qAosG8BevwHqc3tEiBp7N91s7YDdSmt7wFrNFmYAi49NKw9Xm7YKqfrhk5MuzQtX8BoPNttS",
  "key18": "2Q29VRm1vEFXjjVMscTNqccWjPV36499SEgsvGfB1hkHoHsjFcrwUnvAML1H8gcX896P482o3rNnXTd6Z3nxsqec",
  "key19": "2xtrfAZd99skx25SPeXREHmRnRLpJUbmE4uWgxH8ws25svjbAoqAPcmfSFruepyFtxBxnWWG3i77KQxu2ts9SuDk",
  "key20": "4L7zrNUtECmWUscex7iJMeeRqqUS1F7CBgYt1usFbsB26JtzGXBqseJbVrHQdabBiZ9cu5QRA1UY2YZWac9JY6zA",
  "key21": "Djdi7ypezHidEKu84DVw52xWRdLS4uvCjPGrwvoZRsU14wiNZwTFQ2EBiZ2DpqKwpbT7MohLUcPxJx63aAkeJp6",
  "key22": "4Zy31TaLTUokfj5pU9ZdsDKZq8XNNEHd8Yyg1eHkkU9UvFEDXDAx2R3Fai5EvatEqgMytgDLmCBdjL19tU1RjZeZ",
  "key23": "4umtFAHRgELph1K5Qwon261986w813Wfmd78i7wzujvehCLCFLiRsMw4uBoXWsw1oLJfVKt2jVpZnb8B7sYqF6eB",
  "key24": "xms4cQugKJob2Wa5Vd8j3yanJRN3e97Jg2aqT6Z6KjKwCPJAS1Hkn9iKKrMSFtKsweYdRyFe2fbmAMg3CKjURR7",
  "key25": "3Sc3iH7aEZ6jvcxgaGkiajxYdaftXudJaUZuvvm7qRsMVj1RLNZd87vAmmpSGEbVFBvPJxHLZEkHiAjEud6iFLrn",
  "key26": "613T3uoay49ZJsbYWHM1NDMr4wy9mxTRSPNpS6KDqm3PZszkoDUJfxTUT9RHosZzj7WMu2V1qgfvtfr7mewqLfx1",
  "key27": "23zMVYGDDbECqJTs62fp7zv7VXw8RLYm12UzVZQxJdAq7QihiPG1xUtJEKAyimcJmD2TCHJBXh5W35fK8jAby7v3",
  "key28": "4x527LiBTFV8Uj2vt5rm2nGxehsvE2NjrYQtKGU7yzkJdHe4FQGpsRPgxy7o85Skxynj1f76fo5R2L4bLfPUjeXz",
  "key29": "5KT5p2wdg2yAWrgTCVnRmCgkHWzyWSB9kS1MMCai8RoA4qEL5LQ1ctFMbthr7ZrFXhDqKLHD7CiLUBpwizV1hFzF",
  "key30": "5QfEWEVoSEzQoZa7ws1p6uP1TydAxvUwUw23ziz2LndxpyKiuBEUXJNmwQm7K2ZPneFxChqW7kaLc82Jbk9GUbMY",
  "key31": "2zp9PvvExjcCiXjM5BG5KcAkYyYCzWrQFqyWvjrUVsoe829wg7gp4rFmAY9pq89AoPPTsgVgS2g9dQn8re1gcRfx",
  "key32": "3tKvEt69y2VAERCSayAFmrKYsoxDD4focQFWJboVBA7AXZGTKgtJgU6yGAQrQoqdgxFfSqb3BLawrn5s71oRj3Zm"
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
