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
    "4o1t6LntYL4F8ZfQPkTuuPdDXJDutmmQgRE3TNcGRhrvu6wE2KzfsKKZQrYCoU4QEZEdyLuCigY7bj9CofU3Hg9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CkfVuzrEktchwGrC21kTDPC63t8MasP2uVQfPzjdBhpwAb5Rci4dQMfGjLfULJGmCjJePsJin45jQwbxpC576pd",
  "key1": "aLuK27zpZHf96ZTavP6mQyJ8RFjwUjzGQiVh2DPmJcSYjKz7z442WC5aV5A6isJuJPJV9ZmLEvHWQDSBSAdm6PS",
  "key2": "3BFbFyML92FxLXvVrP6NCtRsCMPGgzoZL1RvYmaUbiZuU3Gkj8VHwJU11EMxKjayWPA7gnGVaudpybMwFsno1Gjb",
  "key3": "3L4gKk2UCyi17moVDNpYXPpJatGLUXYhaBHYYeVPxRpaSKoiQTPp6oJsLDf3vz9ZWUTZyAFt8hJnuc1myk8U7PoM",
  "key4": "2a7Bxy1dyd663qMR36b3z3JVsGTH6vGvfpVAB65gUzXr7bSdoK1Us8EeNFpQPvxUNoYWtwHqasVr6w1ca6oAxEvz",
  "key5": "5yUpyMRLVcMY2XXsphB63Qi4dycMJrDjCidU5ADdeBGWc6yuBBD14qZ7q8kA8xLrmLiHUj1jvKuWApfujPT8iScd",
  "key6": "vC4Ls2RFF4Ephm86iLrcP1PmQKKKV8WEVLjp8zxVHSgFbTa2N7otfkGp9Mzev6wVyvsa7GRRNnHuYRq5NpgRRJU",
  "key7": "2y3Xusy7BME1xjG1ggYvgmekXgQgctRMuj4v3MrEpFbpL5eNrSxEp1YhSSZMzebnyisBLZBYNvo3CLzHrEYxvDeq",
  "key8": "4esY5ZaiZSKCXWdeq8a7nm3hysT67Re1mZooFLXzc8e2knPhrVgFCo2G5nnvxf3zHmSB12mSnkydgJGzQHu45otd",
  "key9": "2wF8h2ejaKzirMH4JQNjNAgqqsmkcDvjqRXrEpJM4qNPmMRni5qJJWWsry3t33PLfaTqaR7m7vEnUhhYYjWmktZv",
  "key10": "24LQ6VssS7c8Zpeav8boYSg7sW1ymJBmgWtQPUhFCRDkbQzsEENU2pzhuQGNVZAyDHxLAFvzetyjpvfXWvpUn6Dm",
  "key11": "4SfZgVfux2AR3DfkxrspJQA9jZs3E8ydoXBnhtMLx8Y5QUp9SyDxxPMQsyBooqjWuW2RvvSg978rkz3Rxsw1sEkV",
  "key12": "3EWUVgaV4EM3Sx1gGPh2L1Y7KWK4QXa2PF7BrUyx3E86xpC3M8Ss81QG5TJU3YwHXVsFuFtSRU6Xb5wqiwgmBA17",
  "key13": "4whzeSBwbpdTFie9P5Ld8FdKFxPBY7T387J3kv3zLDEhFvtbKg68hfjCbrWiAzLUix17PyLYwUjUMzDhss4yHHQR",
  "key14": "T8Mrg7TH9z6ChBxje1jyYwEpNSS1w11n3HLQt1DXdj9U1qwsGhUTRvHoyU3NDj6oC82xMNCWPGVsUofD5274r88",
  "key15": "cPPJEMsiAxXWAJvqJMKZMtz58cyDQC26E87gGwyTiENwFgt2k7wA9w5WKnjsew8o8M1CXKUjhR8FKbMrcyRWKkk",
  "key16": "4Mx8DmcuWtwHcszUQQPVhKy6iEhJ43JMWF1yMUpdnYd69Csxz7PTykZCt19FfkFsaEoSkjnU1Mo8jrZtETz7a37u",
  "key17": "4QN4j6F96uRCgbj5eCjKRZrfgHW2LHPtVLLeJqmADodCQrBuqncWmYAVgMXNFy37aF43Tn6Rx9Z9n4evqBZqcByD",
  "key18": "3fFbfJ4upJExMxTnT7vfMp4momcxPkgbhq1F5p2hTKYg2PyW6gNQv2gEDYnmWE7aMUQwaVeLoK5SQuaqmgGQM5Sn",
  "key19": "4W3rxAWLYqSJmNLxHZWFufJDxf7wrddyRb5sva3NoAX1MhqCznqNRVn1m3mLqqYFEyu5HGNVJrV1hwFtjhUq8kVr",
  "key20": "zGxdrSdegUZDBnYtXoZTQasE7a3giudSJASBkQv68FpwxauXjsr5ZxG1GjcobuoF1HaWRrVDK1YpSrnMT84qbPC",
  "key21": "3mhBgz959tuDM9fkKEXARc9pEwTq1wL2n5p92jxdq5vbc5pu2U3emKcTuCeYtz9ZvHEL61zFKcKdn2iM6FEQeJzv",
  "key22": "5noVRnQjnK56U6D5Rjn5ukZQeHRMEuuDkjMGYjbZPCK29uAk9HnEQ7Tjb2UHf4dmLBYKCp76UUExfLjn8pKKDqM7",
  "key23": "355Rw8rdEfHiJmbvUwymDMFYcFr2wtY5WJroVbdq2nEFbTfgSMXt8pje5HaaaXiz8hS6LJY6miYJFf9p7WgMBbAx",
  "key24": "3ggtkgGQrZZVvsyjtgatG6uxkjgSPpDvTGqD5bhnwnVM7JQANnaf1jQgssv1REb8fM4DjmXNnXcicXEjTbPZq3BV",
  "key25": "2yowgwLr5VSgdeo6vH8KF8TZDUSEcP3dvnBq4u24PaxrkHTevwn2ib6HQayYHFzPXFKESfzT8azaJaWXr22KanEu",
  "key26": "2rNiZ7vAEyu6f2yw5KX7F5guts9tbkHLPFKpMohGm1a7UU4P948Yc5KDKLnztY1m31YujFTSYeJHQCJskYtuTgZy",
  "key27": "3HcVzLFhi1t13TsNAAWCrXTzynbGnHchFjVjRoSNLFvB2BK8URAqaR3QZqcM5GyFfFZUtsAJND5AvSFAd7dVuprj",
  "key28": "5WitNy72grqYkqcDiKquyPBm7iHjWTcePMgMKgt3tyR7WftbuDVjuEvBFHoK7k73WdmBhp9mBNsSBHiKM7yWcFwJ",
  "key29": "46mBBtG2UxtR9ZwMqD5dpP3xpQXTfoJqUoUVRZ9SjZwvVgVhazYMVUn9djYppQt52dtD4d4ykBHBA1D5RYSLMovc",
  "key30": "2RmaXUX4T4BpSAJBnMtyjHMNng93JDeuin4YE4PMzd9Sqq6Bj9KyyBJetQ7HBYtHnoMnDcJUwJ4bc7BA1rcSh2So",
  "key31": "55ykxhXTakofJvTDZ3SuwCSyiqTTCgyZg4PQUwAjHQXWtyrjzyeGBF3pv4wQ7epPCvtKh4aD6S2omve86HDLbRzt",
  "key32": "5VZCjcnz72XJScGx5gYFVfvzq1fQC2WmfnJbCt7mo3eZ2ZpajtwFuv3RWNv6UX3aowmjsjhoCx1S1hr6W6oEQ91F",
  "key33": "3a5hK5e2Rt5Ri7WZPTvDNRLRoBFefaRN9B7U6SZSmcCzCvLmW5FQQQuZWi2qF1SQK2rwkHUVoeWJqwhYQtWd6vQ6",
  "key34": "k3PCS2zMT4og4dmTgMbuvXzSHbLSY8CPS5iRFC9rUxCWJ8LgsCR3MhfCJF6AoM6N5k7s6BzmGkbSQPUvLHYqc7X",
  "key35": "59RJHqyahPmHbXdBoATotQ61d7MCmGmR9pWD1RU7S6FGS45FBwSPAuEcK4CxyvWogvNvWUAr7SDg96t2ZcgwSMdw",
  "key36": "2Uamn83QokJcYUY39ikXVwSqSH9XJfzSe8EUx5StULQeAGjpiDJYKdZyYasF9qYkXG3Lm7q9LModP95qFpQubZjD",
  "key37": "4PLfU7YxpG3LheW4ATYVHp4RSXdrm8KKeYFRjqLVu5Kk5EDCxQm7rYAHYMkedmcNBFKLGQMb6XqMkQnRnDGERxeP",
  "key38": "4STDCJEJejGawqenJDH6Li2MmrTg2bd3a4ppBsB4bYd9rY73hQzSyMCP4SprYocyAq2BSwTeih8pFnEbBxhJZNPt",
  "key39": "Q7gnHZnyaoTyEsQPrS4z8eMqy7K7Uk1MRYpx1xfWXrzExkdRss9wDfqQzxCbHdEstK8jVTAMsLjfJTvkqraPKBe",
  "key40": "4PXfWZby5yyf8pTU8H5c8TddQgndjP8BKfL5PPwqfnSWa91HtTkB3mEeqCvFwYRV276ZDUe2kouRSewaUQzQaQ5B",
  "key41": "3sc5vEasRkEGxWJciF83FBLfDHyD1aD9wydir4VHcc6P3Jhe9feTQbXZwoEcPCMqRRcDtFvono7NymkxsibNEuny",
  "key42": "5NLtp9apZAkYp35fy9kj64T42X8C8YhbeLc35665qp7LKr43jPPJTytGqsnwcEtJJsttFFjYZBvx38DbDVdBrwE8",
  "key43": "3XUymV77xyo88Ww3Wk7ZVdEUkJkcuJixKb2qPVwaCHxHFMYZFDBkMCqj7rttZ32G3GxjfSAuy5Rv9UQT87YC2Gnf",
  "key44": "4HSw6j52rXNHwsdizzKJzfkMhcxw4QRN7rEVwZT96CuSGKQcynxCmfV84Eo8wKr8PXiHso3monYwohK8sbFgRJ1t",
  "key45": "MYcjKvNpC6UGik7qJtkgX25h56xyxuSQad8SBm42pD6ucuxtTn6D9ZQwCS8sai8b8F9h37ngr92DJrP5v4cE71B",
  "key46": "bfo14X9ia2tMgEBbaWx56TG3rwRGLKrgBAknKoRwwkZk9TSVixdHWfivzHHbD8SnV6ZpgD4jauDEjKXEGe9TA7r"
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
