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
    "618j2pjij6cKuUYnsvnrRbrX5Di1h4EwyUYtyeZXzBJiWubgXJEC26mFttFJ6ZTTS9W2or77VvxaHntR5nHMFJAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BFnJmHNnbGCftxjC559qMCuHZzy4WjZCtxtTY6Hr5Hc4YXBXDYuAtQL6ptTXPdgbYFoQt4uih5q8rQvjVipKqQf",
  "key1": "HMHeiCJh7Ksx6QYvyS9KCDHmKTq8wgtKGC9bxaYcrWhasv1sqy8UAo1FKixFGfMnVHTb4WkCS1zXUBgeeGXQeQ2",
  "key2": "5WeuEE9hea1s2h4ZUM1hn7jDUekeWAk1cboLpmFMujqg71d8tQkBtyrFgTEYd3cjnsSDrGsjxEW4dFyiDKWr4dQ1",
  "key3": "5b2bH6mySSXxAxkhAgER2wi4hoeyzuf1ZmR2qMr4MCQLxNPQfaf2kNakgBEZiuPTjgh61uyirJ8cTMStb3Y1WXfJ",
  "key4": "5bsreYW13etvmLN2TtKgZyTJfBM2yBXc4z4VoyuLScSftG8y61A2pHcwvuWX2M6h1G7fNpC1KEgRM7k9zektTzUy",
  "key5": "4p9ufpc1NieXYakRHQhwJQfJusvcie7PNhv52RTtke9VfBMd7SNF9Mm76mcEniM9GF4ipKcKSozk7GjugKRJKcBB",
  "key6": "5cjLqw4FqJC2HnLKfFkPYfCfd8kQ8x9wYpxqYxeCYXG5ian4CogABYR31iXdJiU6GeCnMSrrrGoNdqLqSXdnYRc9",
  "key7": "33Yvp1sNvM1qQLLpjZhMnRjhcUrXineFbeN8fwqZHCRN55tHn985bN5bKkf648n5G7gDr3YJsbZsRE7wqHnGwt7V",
  "key8": "5dxTsKpVcs4dxtMgckNZqekFbDJyXiT1Atnydb8HgXZMujx1BhH1vNj3grZdoUwKxXPAohacujC4sLzowvU1t8p6",
  "key9": "4FZqMJULroaKYMT539gVzfMET97SJVVS5xpj8MCFMnfR5n1pZJvUXHLP1yN94LYFh4wjKAsm24dxwPv8MVPxTXv9",
  "key10": "2sDUiYDRZq9REWfpD8HPVRGWMFWESTWrNm3GfT8zzeUgg7F9KfKYALdQ2ytk6XN9LywDkWMsmmdmy812CURX1uTT",
  "key11": "4fiesFNjxuQgUazKCvU9Hd2vBvpo9MReH8fx2gMpubfdgWxPywJQ9MAEh6vEkSZAQ41gLb7W734euAqNtJoR1QHV",
  "key12": "54XvtGHdgMVZbDBvW8XR3A8Q6RxVfaFz2g7AXATY8EEZ1djD3dMEEUTUnC7ecvS8MVxASFTaBX4bj8qTjJDPWJa8",
  "key13": "34xRdBPwmkoWGJBHQn7JLy48SpRCypS5pGFb24jiSmXdn217Sh475dxpGy4L88rs8ZKVXGS2KCLvhczPbXJthSwq",
  "key14": "2bToqNjjsv8yi5bQwaH2H7JM53LKYWTpcTuWkJHyKUPXXSrdovSfYWtm5x2WPza3VVXtTiZKMRPJxKPUfA7zn5WX",
  "key15": "3TtXg3a26FYJQghEQahoU8rGpP4kF6xKaSdfPsNFhJxWvUyXTyLYgkBRpNnesoR1UahsZHQSxvVz1tdRTu6jpher",
  "key16": "o4nGTNnqvw9AYfN4Dp4tmQiZVycdfp5CDeUNgsbuxbeb35ege63xYkyvT8VKJG6PxPgoCWVvuD3acFNmWaeT3Hc",
  "key17": "xSr8CV72o8bAgBDh4ESN7aByC8purSZ9VxawPypbwgy8A2jABeS3PLZwqg1suQ8GhaVN2apy165EDrQ3AnP3Rre",
  "key18": "2MqF65mJfM64MZVDFMyu4CJ3W92bibW1kdxKsXKR5TmEnnAp2v3MLMCuWWzkh754o2DpJGZWKFTBjRATYyA3UxNr",
  "key19": "21zBa8YL1XqnWXudSxEYNAExoN5oz8SgbvhdkXAXkzpjyMyNuVmHiyRDGDGHGzn1m8S3bktQN7nMov61Hj1sTFcs",
  "key20": "PwmtvnaNRxZRTvCRcYWTUhgVNG4TcvLB87Cu19YTKMxV2oePAxXmv1fpduNEVLCDeyYbob9m6d6QXX86ctm6G8s",
  "key21": "MLVXJEX17qhpNRQxfVmu1bo9c2RSSfu2FD283WcVTS7YgkoNyCxaHW1ZC7827mLDrBob9GMxUpLsBRtHSiRBtT3",
  "key22": "23e9BrD7nYLJYi39Y2UudMDzxDDD6xv4TdDza1Ehhs1zD1auAa4Axp27Bf43WoeoDB5eS3cBjRRGNkwfqaaaNGnj",
  "key23": "5HvHDk5DELMVMEL4QnXZykvzUVro6VWRDNy5U9JxkoppSwH2NP1GGJKzgivwLLbYoP4977t5uQbGPGTAhvtVD9kR",
  "key24": "3FsDxEpokc8gzTF5c2TVxca41GmVJAhHKeRSREmtZe3Mjcusf9tXnEMn1ztJaEU9fPopS3jB1cHSW1GqZRumfwxh",
  "key25": "3VrAJ5YZzNJwv6ofvMoB8mK4FXsPQUaPi4eX21q8fUXDpggKG7JfjFM1SArQKnN18PxjhoxuTB6nKd4TE1KvJZX3",
  "key26": "46MmLQ5kiZixtuWXjUdUvqiKCkrRTFy1bcfFyMWB7Uurcui6QZu8xXeis5tmzWSVgd1Dk5owLGVD63BFHw1ZgRcP",
  "key27": "5WQKtkzkdKmA6vwgHkHM4fhoKcMS8HhUey1z5d3LKztk2FpxkNRkedANp6gCzLn7fccL4N4JpNxqy3GGTW1vfxex",
  "key28": "5SMFgD1Da29crhA89Zg851xb7pgwJYbvfQr9wbUkdaKN23kHbRBmSDMc1jjQQgjLFnrsHKSWWLCuvPy6LVF1fcki",
  "key29": "whCrFZNdshj9uouQWptaSauqszA72kAnEdQxCsgCC7c37NYbposY7ZkZi5itaq7wxzziyFeZFpFo8gtN4mfjsZJ",
  "key30": "352ReBuNF3q61tNYKxs6W4gTHYJj2aBLi4j4kKQg8tjg5es2Mt3Lypi931vYFHKQeBiGrg4Q5opFUg9wM4EeNbYr",
  "key31": "3FvaRF49w8UgpSgK3W2rKxhRMqVdHiaXESZEaXpYtdBwxwTmYmNmoxE9UWnCrcUBSMLbEizTAHwJNU9GHYgYkA9",
  "key32": "4TjxP2qf15fRq4pnt35nFyfreo9BCA1yrgUDNEN1oMtfRk7LRKaQ97XFUf1JyoDWwDueJjd4jq7rYn1LvYgwJgMg",
  "key33": "2SEjHeesWGFEvZm3G6PGrX8RdRiAG9aie1PGLSuTKq9YM9oHSHu4donbuSs7Dftpy5uqhvR39pX3CA9WSKoc5iLt",
  "key34": "5mksQZgo71x89H41RWcxg9RZv2yTiRnB6VaPyBK99GKKeKdTzNXNP6axy2Ga3NiDaxuYjfUAeLLXruUa2KS5mxeQ",
  "key35": "4CC3bLda8HbBCRtBj8TeVmg2y6dKxs1FoWBnbbhGwveP2DaPgCSARV83t7fvCYzpKcdKo2GUw4uYxhNvSQYteLNH",
  "key36": "3QxRKcus7wnhab4e4HZM535144VjWyXZpF2zKzCTkqxLJHzmSw6pLpv9SSeqgMwXb3FM7prCfdv6CrbiUQR5XN3P",
  "key37": "4DtBdqfGYFQiN2XGE6msjzGBd1rhahRusHW5h51rfqAWETKmD54fVgq33aynqwVcz15q5RNdGMdzbcHeHvtNvmx1"
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
