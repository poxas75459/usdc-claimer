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
    "4h1QVGEywYNTSREJSkMypd1kgE79QJnA4xyLdA3rJzbPVFQprSgpsRPqi25ydG1dgUhmvkz6xCdNtHX53CL9mLJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DXEPMyDy4jPYifWwhTz4LYSMBnRvYTSYcv89AFH6y3riT3a6zcCjc7gEjxtekXTfwTaK7wRJd5qENHxfjwXJHc7",
  "key1": "2gzvRqCk8jCCEoqhrKHe4RSYBTmWcCsvNrzbMqsaVbLBPHGjM9kbWxncxL46ZECs5d8fQ9MFp1CLqUufX3jV44Co",
  "key2": "UwrZYQHbNTLpGDFX3R4fWGjN2pd1pJhvpuPfnMecepD7R7EjkHCpUKr9BGxZ9473wPiHm6mftP1c2ScDrfH1VNC",
  "key3": "4XvmN7DG7fFbqy49fxptaV2Ss2gLPXV6owLsaRvP1qn1DyvnvHXTtucMczC5CJ52ahPmbiyWw8gazmJv4jPszatK",
  "key4": "2B6tUKxeQ1UgZAmn7aVuRDqSSVdaTrxFcfdDx8p5uagbSQNDXsjLD9dXJjwRVrqyXHSuPq1UeWuEkijmmV8ezMMK",
  "key5": "2YTVefEWyX5yucyxVGKKxoa1Cfh4SWz6ZiRYGfdfPMjPx5x5pUVmjp7vZthxC3mMrkLPEAdPve3omLRo7iZeaBsV",
  "key6": "3MXQm3QYCTvrD7dTRgXSiqMdGVjfDH4bM6Rb32XRKXyFR8yFPCoRNYP6NEFbsVZ7qxJMK2NsCDy84WEsk9Atvoxz",
  "key7": "3MxQgTKX7rYN9AcMKgyahDBrXaxj6HLsQaDMBkGY47oYBgxcSpgS7gfyZc68FqxwghHkwsrMX2B1fGfX8mj7Ugm9",
  "key8": "KChM5XLLd5p4iPBuh1PdqByjtgzuDW8JZ6J183ay1M41EjbKtau7ewa1W7Yk8fNzXCnHi9c1UX8eiVEvGrSQg5p",
  "key9": "pKdyMtcprPJ155zLfBo1fMutpJRTVPqc1tMehoRxXp6JL2qLC2v6VrEHZ87diqMS5AXLgju14cqiyAqHpwnQapr",
  "key10": "29oz1XDnBvN33eMmpz693cu5iKFByhvB32uA8RiZyQnKEHPkj7aRsPU7MrswNFRCAo8rKkSJPDP4p7B9JRwfXJYm",
  "key11": "23YqEWAGXU52g3vvKEXR7ENTPihWfQNpCnVMa6iZRppXrtDakj6pPedeRLboygDJ7Qkpd9BRSB1SLeiGEA5aY1qF",
  "key12": "2LXSMTh61TcWh9yAxEtimvyH3bf4V2WbzWYhQbfC5fZGJ6ruSYXN2jaho7xrmPee3YYLjUSAokFZKporv4JXdsLi",
  "key13": "4DxXVXAXSL1iT7gniTpXfChwjqE6H8kCFC59ouUnZdVQSiFCf3MrPKiX9JhHe3mEyPHbxHLWKUaKLPRhsRrgcLUV",
  "key14": "39Akaq6NwEEiqEd3nBhQDdjhVkBQWBzrbNVKjKPHAfG1FY3zN3BykWQK8Pib6Rm2dXMVe1xBVqwBDtHNuCi3f8ud",
  "key15": "2zjVbZCSyVCVeYKV3B1Vaa8QCqMXpF4T8xaDznZrYeXSZLMawwhTdTTMsHPAMQjf3m6fFpA4GrTdzx8dF7hF14ar",
  "key16": "28aF6CLc7Y9UV9Cr6jYumrb9QASnfuQFBtKmLbRPza8wuvvimHQ1no1hMFJWTmZoDxmqiT7F41Ljevam8FsotMBw",
  "key17": "4rwtdgCVYyNA7w63F9RzKGwGBeiLHakLXLRS7zhKBP25xdqqS22MBCUXydhDtkMBVENsYXeGppMtvpbSYn47iTY6",
  "key18": "5LNv219uT6SVFpNCK4jhPt8QK8qJ8JGGHEDjenf65BrfhpLhw9YfWj8QnZ1CXwPDyKxBwVPJAyww8Wtda4R61UC7",
  "key19": "5F569J6Ba5neWNK6NNWjXxcKgEWyAVxn8VKKmP4GxZHjGkQyEjewtwtKP1vBQF75fdFJG9KccURPdkBunmCBVh6N",
  "key20": "eFS2ZvirRLrXnidwnJJWk7DtZ5eiNaQArdbbVsKgiKPsDat7KBDBTJBATghn4nQdF2zrc5CWsDCDcudkUiZ9vLf",
  "key21": "4hrWLGiK6crQaEXXPX6jKT8ihpERh529Percm7Q21pm7or8LzWhrM32BiqMerbpJhD4rAYZBkcHrnLsicBg3GZ9U",
  "key22": "2hez6LFUPMZcdG36FAhjVpByCPphB9cDD14zvw8fotXfGbybDB729AAZvWLdP7dYfsPLowDrPYDS8nYCw7P9fmWU",
  "key23": "2E8xQvUbSLm3YYsx6FsBHjcnuTnW3Lj45JsAfS5Hg8q2yi4r1sYtF5ebMkoSyPASdXFpXgGLvUp5JjfN3a42ePJt",
  "key24": "FF3UNtGCEBQ73vm8M28Zf58HoshQTfEW6oMNQ7s5ub7C2G9X44KymbddzsfW8KUkPrBaUR819E4BsbMqZPbXDxa",
  "key25": "mjc4KciqYoj3L7zRVyzjphEhHvFiTrkRiSvpVec4WwSV2cdRphNwMSHA7eYMF4w47UhD7MHH4J4vbu8qXYQSa6T",
  "key26": "64puSh8TRMoUtMzGRvqqyUUhEv6Qte1KED2cF3ewLUK9F2azcLW1DGPhrjuDqySx1oGjk5r3mfExB7r3iPzSbGGc",
  "key27": "4bmamLqCMiRuZYsYDu651mM7CjXQwR9G1DrYkkMkxzEodYQBCGfGfvUuy2LGZGui8TSRJ2LcpJpZCMxjRyxgZbwD",
  "key28": "6jv5HE12i5CLwvGRuWoHhLFKLvewsNuzro7wsDdfKg4LEd8fSyFjg2ZCdhXdT3CoP3mTsGsnYQUHMihMB37AUBY",
  "key29": "4MVgTMqRtJXcsYtT6jSLN8apomQSUNBjc88z9ytzQnU8W5tyoPWTaL9cUsVXYF7ACwXsy7TS5kxsEzpJ8s3mH6xp",
  "key30": "2nPv19sXDYVqfkv2zTMjNyHKDTXMXo2xiqDm6eZkr68pSmjzNcR6jJVPaoNrPf1SdAU65B2qTbFz14RT5Y31xhXE",
  "key31": "5tpacq9oCDYLPSbdsM6HWfq2bh1d6Uuey46hrBJLEUfrTx15vJvxUdpFEPokXs3KmQuMMwCigpjKfrimx1nPgtDx",
  "key32": "2dRSCGNJkchmMu4hNiY6sGzc4w53SBKFqKTbW2JL5a5xbAMg5WLJF6T34172U74fLFpMAuRwttYxYM5XKnuEates",
  "key33": "5WVkNVqqaaf341DNFizCNciwYE4goRZMbeMv5WebRRYs8Vx7RmoXVuq8yRVvVLeJECV5yWs6Simo9ZPW5cWJon7W",
  "key34": "4MhjuobRNssjuhEtJtD1QpeNJt34b84GDpZhyziZCA2TwA7DC6N6Qw4J7wiDmJMCezWXgqGqVWxgC2UuMNiTB9YH",
  "key35": "2WdK3SmUsCvVYsW4x855R59fEoQjJ4hKyAnLPtwGXD9pacDQhXLkUQUg8XDpWgWCYimUnwnRqxBFGBBq2w1d6wW9",
  "key36": "4D7z2x6KtLyRjx8s3EQuWqJrLAvS3i2VXWBQTPNJrYsD9ChRfSqJGNpvcVqCrEZWLJ1ht4dEdWzAbaXju2rSg7GN",
  "key37": "3dib5xULQDUpWC9partF2i1xfuYpc1Aoz4iDEP3X59CvpK6Qd2xRCUCTAYAkHz79Z4qH592Ju96f3s45Tdc7mF1H",
  "key38": "4FZPt5HDfHXp5PojVJ35RVa1zz9rCRyKv3MugheuL1ypnDkM7p1XCEbNtTBt85Bto6fkTjWs823Cuo2syqzngTX2",
  "key39": "3oqzvaH1vuQjpieiMJsvWuWUFZ9rq7E74d9KLnMQXacCBJU12EmMZxEMBP2QMkJC1Bikq8Q4As2GbzoTnW7K5rDe",
  "key40": "4CVuCpWR94JQuvGrPCNckaYdJzoT1bveeJQPzKtUeNfa1mDYujL3B37uHgEwLYaEbxaVCeRZWkQ2aT9XnVVWkhhq",
  "key41": "24FjCFhtyG5RdhdJKmmeQZhLpzFG8kZBnaq7QByCMiKbKXxKi5AdNR3LgpEsc51237xpo1kHas6kk2dMQbrYPaCV",
  "key42": "2kavtjgyuHnsqP5TQyn8poG3fihkM8os9ugoQ9W3tXM1SbDiW6cTdy57ArUaqApZ96PEwDv55aCETvSSS8RC8xpH",
  "key43": "5GwYJHg9UeRdJktzyyfoT2yPCwhCgJtMBFWHNBT2fmk2Nr38PWFQwoyRKhtyvfCf98JAvKnCWCsmtydL4fwDGZR2",
  "key44": "5dpAN5EWJKMN7KmJMqvG9CytqCheYqXFHb12xf1rWEAz6aEPYMf9H2FEXSSo49UW1BVbfLbMEGSTwy7ovWYc7hwu",
  "key45": "P9zfdqHNgebCRsgbHLQjn72oVW6Fxyv6P2Y677pqxKq8MWQjwLsCR1MNQjUgJL1WvsKz7rZFiikycmNyUhrnfni"
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
