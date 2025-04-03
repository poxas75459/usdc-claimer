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
    "21QR9nhjB1VmHN1EckMVzsZpVcWQhJYwLmK9GCeiyVCo4MJCCBMzU681njmX7oYpcyoLMVSgoi6hxc6PFQkS96q7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BzurM9YRNk9dyA7hqUir56HNCuYP9CQ4TNhBM921dukMQVVpE5L5Ez8aPG3Ecv5jgX3azJZgUJRMdr5bz3YMT4b",
  "key1": "2t16gowxfUQ1SLVWzzTj7WKqAmYiFfKEagpXdZtcCBkaEu5KDnv5yT56TbbCz8KrhvxbwAX9THM6Egz2z6Mv1qF8",
  "key2": "4W9cpSnBYJZbZ4kFLSCUdn1QfCHwXGc9CLwsZ842sSTkbeBbUgNsxG5BL84UX3qYZ7hU29kphcFYiTuLAJ3pwzf9",
  "key3": "3HDuCbzBNGZ8Memn7vinprRqjrzGKKvHLe85mybgbm163Mpt1iqYUvDqEUuX4a9FckEXX8nzTazUvZhgNkwZMpjs",
  "key4": "3Repn7hT5FESVoFsgtMYcnhhMiJmaeBqp5MscL2cEgEpqnJZf5ZV7B9oAYeyLNobetMspykXXJxJT48fq6r5AJ39",
  "key5": "2RUgeaWZKb9ZqQyRtFPUn7aE5cziUWURrGDCWzB449mgCPiUpTEeFTdAfA3kRMb1sd6GQF1TpaTqeGNiFb9swuPh",
  "key6": "5q7ynKcuptqov2GuJTX4xYuupJbMyG7zUA8xVAzh9s2eWDEitpgsrFhhxu7cJxM3FLuj2WD2qHfzaHMHyP2Qk6Hh",
  "key7": "2oc6czBF47CFXNd9PUVLE7tM78SH9LHP3fUNk1ehW4MRUp9icJ6ogfUbnKH5ik4DDpwcL5FZAbBD1wTrbmZcQL3P",
  "key8": "5pQBGV2bFJsnwnh2dadhjuQERJwqBx8K1JCg7Fz9WCVUxuK2mvJpgxTu3WoARskm5J8usd36UQVmvehMHHQbDZoG",
  "key9": "2U1hTBzEdm8iJRnn7mNnHhDrFa5jvQEMGN4Z1Tgrc3tKSRo4YWdLuyZNr6eDZ2TUNGJdqNJ4tj7RLc6bCCKv2EfT",
  "key10": "37xgxwHE8VRXm4c1vCLuF9s8xNW67FFj7YnTeaFX8RsQchDJmMHTYUsxRCKFftbSbKETvHJeFQekVCZsK7GpKcrs",
  "key11": "5GR5kHtRXZh6ZkjNZr8bMGfGPRwgCy5bwD7SopunKskJTF2t8ujuHuTRqfW32mr9WWncpBiBePwhQQhqEQxgpLMC",
  "key12": "kDy6xkgRMaco9krDq1YRNRYWY9mSNhik4QAsFWsdgZRDphZveGAAdBeFwaJKah3JtcFfUuvTGuJDZsR827et362",
  "key13": "exX16cifAwBAWh4QMMTkzGGhz3f7frUWNNP6diAWn4WUSvcRCFSk2fo2xYXDyh8tkGp8d91fpkTxnTNW8SDVSBM",
  "key14": "3YZbPEDxizkbih9Y9NnsxmVP9J2N74F1BGmHybhDVWwoirACSkCGhTFmWTBQcaxrHaXKxzmADgZ73L5hVZXC9EuR",
  "key15": "2ArV7X63WGbHzucHUipyXfwRc6csamDQUczmjxYkhByJKSSAewQ6LD1d2ieHKttb9kKL5B4AtGSuhiyd36QcaHZ",
  "key16": "2sDV8iq7d3ucRpP4UiEDC7eXriEKvohq1A3Y2KgsyeRZCneMadR9QQ8932v7wrRmyCW1nDuaApJEcUhn3i23Sjmn",
  "key17": "2wrkkx7dFPgMu9fCfCCHGamNB8SKjR8yqVxCjPvSLpoQVqnSdz4dErKqRWPLqRXzxuSNoRseT5KpVUSNmCqA2aNF",
  "key18": "5RT6oVYtLuNNPecfD84pMpKy1dhzu22yWQ6zCnyCkKRPHYP8onUe7arvrB3eoZ98Gc9drqp2RSVVPXcYp6qaMFTi",
  "key19": "54nzKJ8ouSUCGJzuNNGw26n5k6mvYkMW597HtDvD1LYzf5khkj9WoDR4PyoKrGA4YmU2sU1g4mMs7RzKjM53xxNC",
  "key20": "3Qh4c3EXNcHi4kXnv3pp5GHFqY6vCS7wxvUdSsZAaNXUGanPsAdHn6UyryqGsJ2eAnwts7xoCnzd4w8QECwrjnSe",
  "key21": "2YoaiHoXPUVv7ZSE6RUiWW7JrBLp51Xcjr2fVfw2pmdXSmnEbkkihg7qGiFSgQLufUMGzPRHs8YY1NYnBxU8vcaU",
  "key22": "36Qrvch1Ro4VTYc1ipMA3RA2MEUPsN2fcvEknHhkXx3xwwA7sNJsDPu3JDS5ouUd8qLJjwNiayVQDhGzqUStwHb9",
  "key23": "BUwdae3JULmU4NHeWP5w7V3nVVU4FeCMmoEMoWPw2fZ26W8pXduHsq2i8kAFfvLWTP76ztYhcbDCqXPHuLPzkbg",
  "key24": "5Ag5shQz3jbW2cZ9GpCFnhLiwhgLtG5gFRLgB5SfiojFd18E6rbMFvvdWCEdC1qRj23yvrUyjyQ5KJsmtTVD2UL8",
  "key25": "Nfp4iLhgxo1Ary1AnSUqgV1kVaGPCAh5LMHpxyvkqrb5gJwGV6s7LoMvZ4YUPWVFcUjiuRRX1HNdX689R7MS5Ze",
  "key26": "5dtXu1anjcRJo2HufMQLpp9dBpTskcJ337CUiTXp5fBJbRz6rTnrYWEhQ9xHEh3xD5cLjcMnLvvRB1fCQEaZFECp",
  "key27": "37i9LtpwtxA3K2FRmMbGDGiUnhtFF2bbaSKzcHuVqqLGXGjsLbQtwZXKByEqbRGzUQq25dy5Riavm2A2AGLgZWJn",
  "key28": "31ipw89nys5HzY1F3KTLnezjyuUM6ZhdSD7D1PmNdKGLm2qzxAN97ffuXK7cHNFVS3f7xmmmNC8GjHTQ5UrkqH8p",
  "key29": "2reLEpMpgEEbPKCxCRymYMEU4kSFpoDMpvV395S8E9kEpM3wnxiEiBeGYQmB2Ke6hdtX4F1yiYNVqiBHRpyF7vZJ",
  "key30": "5wv6BaQmgwM3NdkDtxxdDpemT8aYhaxny23X7eQp9uVM7Pne1WAEtX3px4eDKQv38nE1DaEvgpCN4WqpgNdk5hAE",
  "key31": "4SHgBQ7uVNtyH4ZvoAnJpNQKSvphvVh7feik1CAeH2dx4gcAuzmQva7UPEo38coXn5Qk3LsRy6FzHMrqJk37nyYz",
  "key32": "5EXK6JkWS8n5jKQgcZQCorXhzZF7g9geTrJA9Gt36kNgW4h9jbQGmXFVLEy41xxZgkNCmMkTTikGJ2FaVzd97HSQ",
  "key33": "5fg2srLpscJ7zfxA3m1SvLQymZsucQq1gM1YttuSHbAT2GYF9kXXfZkX45TSsm363tdhbqsZxTwMQQBbXAW5NeNL",
  "key34": "2jLrUpG2V88horU6to2xS5Zrif3D2LokuKALWFXN8MmXUpouc6j4mzF7gPzs92kCpcAckgqU1HkhsXnKJWhscTRn",
  "key35": "2BWUT5v8mNoAfkGNYr85bk7mydEgYDC8pq4dRYS4Qzy6MEpbao12Q6kCpHGBvJh55Ai7MqWwcSKjR6gP764qpH9y",
  "key36": "41uj6Y55TpPcpjjWvchUfWnausqweKcWJfCVRPrBUZPTR2WySsD6C6mBaSKhs2G8gukdSykU46XrZ1oj3y6fvPeZ",
  "key37": "2U5HK6daNMjQviC7e9hRVh2x54iCnJzjBkKG616XWXLog3YwXKRyjDFCALMBeibziqHLjTznk1tL7hh4vZnd2zr6",
  "key38": "536NwRaatKNsLxZEFSJFbDcQoh3hGvhDmMMkdbYiZqF2aDZEWpTXZiNMmq81kLxtrPZRFfe8mzbb8H2pDApY2hLG",
  "key39": "2tpYJHBvpNo5Nhmk8AJNTsMui1yEot1HuiBMqSopBFR3tQRj8uc7sHPLd7DU69kgv2ezQoFCcDQAfagcqZetsR2n",
  "key40": "2MU4SfbFFUVEXhruCmA3TqNY6WtY8VyXHpViLBXCvmfYqSJnmZrXqPJMNtbY3g8c1NCSWQyCeX449bJnv3AiRgdi",
  "key41": "4sMoQeu5ivrdZxQQ1ahWDPYr2afmFvycLe6Cm7apEA9WYVj2JjHMogtPYRehp6bVVg9p2KUJ56WBxUNNa1aAAEgw",
  "key42": "4tPfVzaa5qjFNNS8j8KyDcHr6RSfRNkZuo7WCTLsqzPvcsv6fTvn9HVVVEvzsTH5fNKapc6eANG1SUe9bUSmNwzg",
  "key43": "2jcqa5sPiwRi5T27nFJr7VdCSMC4CzUFpgw87h65kTWRr3nbkM6rHfkwkYsqhAcgj1KHq8UyAf3W49MGdzzehjCg",
  "key44": "5by1TAr61KmLhxJsJoFgUE5igoHxigqWFMdUbfvWRgrepCE9qGSxkLrFfumGrGA3u6j2Kph7L5jZGPXhH6oHKRFo",
  "key45": "5cS1VZcxanfYt4sy1aMRZqZiG9oAh9C4Sdw2bGRUVf7naRkmSeKVbaJMn9KioUAA1g93KHL6knaiXFLXq8NuJCT2",
  "key46": "4buqeemH8rfm5wGeo3eBEmVEJWx64sw3zrANEejmvqrgv4Jkc9fyhcKr1Mso2E3esd2BQThQoJAtkcAggfEum67g",
  "key47": "5gA9EwQQWJqa7xPcUD7XdnAbdeEuC9ACGg6PNgH6RMbBMVFrSy1Ybw71DoH3PUbXiHVjZcWH669LuKPfy6cWVP4q"
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
