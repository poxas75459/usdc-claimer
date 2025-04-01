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
    "24dnS4xgFAiEZfy28zwZUMvy2rQYs28hdQ9KGFqtNBdLUTWYUraTUsoh6piUfP4rZcPsnTT2jYWFYD2LUTG2UAf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52v2nQ7fb4mUaGwkm5iXPuXEcfMHabx48EWMrb3MAzqXz9aJJjLUsvDB47movKJQ7bKRNHCb4KT9s8QmzEVo6Mef",
  "key1": "cX1QY1EYKEAWxdNtvLqpmmL4dwRFeKPqUfShC8qieuQLA1A4C3vkbunszkAuoUntebFJ4cpPpRaxguziX7tDUir",
  "key2": "3EbE8zsrCZoPxu1ud6NHzJBD5Pp5zdr5baGL5hnqc9M1azVU9nUoRFMTr9JjxhbrgzaPRvuwDA6JFHiTnScbutVY",
  "key3": "DnH3KUCPLw25Dhnya44xpp87RYSctSTyk5gpHoaVv788xEMyVikpbWuBpdowZo6iC6JjsuA9DodN8kZUUZeaA9N",
  "key4": "2XhD2dsXFXfVBBq6EGub7KPFaZ3VkkoU6pbP7B94wAimC9ZZmwCqi81qTHDZeFsEGidqDqw5XEQqH9nieZSPJUJ1",
  "key5": "5au1WAFthn9dEQB1TB3Dyzv83KmaFpSDk3eV7PehyGryvvKRiXnX1U52oKdXy2igCnviJjimxRjaYu3sEXFKApjr",
  "key6": "5yBBPoWXJ9mSzB3imDPqtu8p4e2YEKFHhj5DXBTjAhb8kWJkWBQxud9kRm47JUWqVpDb8DNgtm3CADydesinAQjQ",
  "key7": "5rGesPSfNyamwBZUBDGKPEF545xrSoRfzt16ekRNPyaLu2YCnu3b4WDBEEKFJp9c8FV9oXDANaxg7a9fNNXE94Vg",
  "key8": "5yyVFhCrLJ7LD21hKZTQMzTNDadNU3mGcmeFzWqdapL25C7JCJmtGUyjG7V1YPJkgtiJ5qez1chczsWfkEr6rhHw",
  "key9": "uMnm59KedbPRh9iT7HepoEA553RjsPFZYTpd9ppinaEL3Wh8J4sGJnRV4AVWY6DQGeAGAE2Nm8NGDaYJYQAM9dc",
  "key10": "33uQcN7pNnnpuZXA8LMj2z4tuqwybz2ckwTtNLLu8dRkjkY3oLjrvqefSJ43TSvYqLztuPX7yecscgrMXghQWwdx",
  "key11": "4Mywpwfae1k6PPRuWwwBoGwxCCp5zNQFxCMSGGM3KaAxxH1ZPoNzx9pViFwvwJJ4jrmcy6qBaZcDLtptbhm4P6NL",
  "key12": "49EG3iQ2ui2kznGsPm38UaB2GaZLevRq2ty7xU6GX1CShr8Q1BMcQiBR9cHfUyZMwAbwzC3m1xqMDKcbPQsfQKYU",
  "key13": "3jV4ERXQYeezVGd9XSsZovaixTVABUuotyQ7zQXcXsUXyEimifEQ6yyx6pKVC87o322TBW4uJDgzT2LoCFUhvZXQ",
  "key14": "ncyKe5MGotopzW8CN6ZdRCZGrpBWJxnA3ndrTS2gPeRCvvqZMPCXYe8fc5aeTZD6BSfzss7CefJXU9K3imbHLwQ",
  "key15": "4ctmddNQTwsCnxWXLaR9NfSkp9DU6bm1fpifKxozxsBsH4ru93qK1kQ61n4vKhATkKj2yLUZAGt4RusNhW74iKe5",
  "key16": "5dys81a1zRpE5C6Kk5HDzkWzSP1YEiZ5ac4om7nUEnynZf8PWBkfL28N6PJZYfDJw936Wzhs4r7sQD3X3UAPxVD7",
  "key17": "2A7KPPy4PESKATk7TMhCPkzAxE4jX9Moy8e3L5sRLpjUSah9nJYXwvoH8dMn429jnqGJvgELeqH4DGgKadD7qthH",
  "key18": "5wFCqoCZtWQgnQze6Eb2hvMEuwKULGhsbftyZvSLxTHU8HQQazi9G12Mfx6H6wnrXd9UALTWRpSdzkRKe8DHAGRo",
  "key19": "4F1oEZCs2kQ3uwxdfSfG2f5FtiEQ5eCoBuzstVQEEk2mQj4sdJMsYre3wJoJM82cZU96rJZvDyRKvfK3qjur3vGt",
  "key20": "5nJXSePKKxoqoM4pKoRmqvDxxqj5VtWeJeADcPPX9Req3F2PajCdyyjFt2m64k1wB5rX1yGKbFccuzcFX2zmQC6M",
  "key21": "2owmwWgVsnybpSzeaRjExQ5kNdhKgDBmUgFHGDiRi6pyy5CM45zQZ62xHGdxyA233kbciLVG28MZHDwgioAhbQL4",
  "key22": "3Wx6Mfp7jP5AswqyB3a7YsuhNpsssdTHpXzgawZPSH4e275LxUFMqRJesJAXBu2ABbsEUhaLRk6XLwdFDNswYyRk",
  "key23": "2cc6zEZbD6FbBXRYG5x4wygJaTSafQpQf1SgW5dYeVe9EjXy1jsPeyq6JKvMprasS4D6YdaTcpi3rEnpYAA3pmAB",
  "key24": "5aeXxrMHpbFwTkdu3XsggoWGrzwwqQ4yRSppQ45c5zKVcQBS7SySZhG5N6ZjVDVLUqCb9Kx3QYs635DSDF7UBSt9",
  "key25": "4pU6jZz4NnsmPv72QZF9rYaW2omfsGMCj4g1xx2fdYG4G6w8uoVafAUQn39BSYV6EVJm898CMrufovVgbpa9UgM9",
  "key26": "2mPY5yucrbjffod8gUC89LxCsRUSGfHNni8bWBFoBeL1EcN6h2cPWZ6HvKTvrEVhNn7uZLjf48Yo5qww1gEeBic",
  "key27": "4LeQP42DF3X3iEniBtLAgwPABJJBg6rdW36wAfFFq2wMhREWynHvE15XdaL9F4QMDLUNbb5TNXHpAjqapLEaqxG4",
  "key28": "5ARunut8kKmdYuY89PT4uZUhehAbXEomsHABPy73917k12EVAnabuLi63PosAGFFuhfFU8QVKVMJFLSki3TTVUyE",
  "key29": "4xzwC4GNNzWUABZ5op9xmYJwYSv5UkUgrHDanpWncYtHcqrteT3tzcN3uSBGEDXEcH7EfLhwhQgcAaU6yCZ7XvxG",
  "key30": "21J2muRWZUhZDDbv3REGkzC76M55m1yaNzHVKF6TVPbspgSC1rNT5Ax7hcJs3DYLrFE6PZirYaCXyfD2tmZaNpCm",
  "key31": "2oWX5MwYedrC46WU1PZw4Y2HmpSso87H4BwQ1FFEZCzZZyXikTGnE4FcEwdEH6JBHSsqitPggSBpkdyNKkF3WVqL",
  "key32": "52cjytmgBNHaLrh3paZVo1aopgnrr3woPez99DRLR8ykqEQdyuRQmWKMhzwdfSy7iRfXSRafi5j4wLuvD2viH1W8",
  "key33": "2KUbrP3qt9tpD8WWB27e6ESvrTGSSsceH44Dj2ca3ExNvgudYmyaAkPbdZ6uk1WhEnXBD7N4pRLJeLjSd9DQBxpS",
  "key34": "5viCo4GnKP9cU19jtUqezUBqoPD7Zd5g3vuS6qv2YTGTGt752bfFmvPT9G2TPzH2iPKyFRgeJBQcXPsG8JTyDHsd",
  "key35": "uwgc9kXdhs4jTGfDaUGBZ7tFwpgUjGrg8KA7oyCNQNQ431fzbVX2bKwq3SS4igv3BcwYHSQa9EuePtpDfnMQ2z6",
  "key36": "2hTVy2ALy12hTXVA1DJzXT4jSogtqttUqG5gQmx7ae1RMAEkMkpAEN6tbZM1DT6BayUUmXwQKwBw52VMmJtmvnsM",
  "key37": "2QCVVNd5F5kRx2kGaBDNrX5hhqdrJggjn6YbU6pJa7nYmmkqPKJ3VxMS39c8uacct6wsZY7PD2PFzbEiN29LrDpc",
  "key38": "2roDYakjd2npKsJmGyrYHamimhzVy599TM7w2zFnq9qBkbv5apAXG48ryyoUWU8Bz2UQWGj1bNBcdNaWbownhL9i",
  "key39": "3FBjurfmzAB6HNvZdAzT39X39rL9Vd5Z6KvEeLbXU9JeUiTAgPQJrZbhcCpQZrChk15SxW3rZ8tPQqvnxoA5Kvnz",
  "key40": "2fMkmZBZRo9wtf1Fcv47KYfEv6uUEN7CcqMV2ytJBRQiTH2FGC3t3jy513mrxxo2z3GQGGsYWRpgjhucvYrZJcGB",
  "key41": "3Sn84Ki3RdXKxQRCFCaCetKYDP3naP4pskDoMtiCq4oNBSqfE2CxQqrjy4eKqi1BfdWatfjGaQ2qv8TSxxDJoyKf",
  "key42": "3kTv5Ezrh7NWmtCNeE6XfevLntfNFrAT3hPs8YsNwepM1iVibz1RbEbXAsZ8s1bfRubLjFV1NaWXSuvZSvoJL8Gz",
  "key43": "5xSBW58tmSvotrXJuTZfK9ntCmQXRizCNdnARz1UDmsMzRVj87UpxxxaxrdQ6ahJn2NpD35op4yYACYCPQPuoXMa",
  "key44": "3JHrCaWgNbfcE2bwEkX4xcNj1nNXTsnwpdwXyg2y46gdWuNpDUc8fif1KJZVPVxLbs8JBqJA7oXzaEqTskrbTXob",
  "key45": "22YYazSKxKwd5JvBFnKEYN18Lou6edXdwN1KmzvqcKWy9Xe4c2p9SLwVDoY4xyvYVnVcG8zWDNQojeUsyhn77P3u",
  "key46": "47akLPRg3TrbW1k4CiHjxW3j7Sch7ZjHFJgJ4J2wBofxjdiwf5Z6g2dL9c2E3yHVo4nFmjofxHNwpdKPqp5bZvNQ",
  "key47": "52sGucgSe4XjoYG3JS14Wd5VFiRxvA23HVwKK72Sqch2uj2nvua7aeqMZBp2BzRUwSHfH3kiL8DZk5E48YNdQskZ"
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
