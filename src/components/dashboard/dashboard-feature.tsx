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
    "28VPHja5iQQBAYvNmau3dkE1AB6HZjujfK9SjPc35WjHoEfcWUrJixgP8kYsZGeYTJNzf7iM7SwPz8W3LDDBAV1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GQVyv7wLayYB3Cv7HibfvyHyJWt8Y51vdQAdiZr5dD2kXCVzaUpcb5E2cfLB6u4rSZgU71CE68bWHZhmXoW68f4",
  "key1": "4mvshWHVhRGktasi775AoGR6EnoArZec63sATNi8j5tHqMZUJ7CXtutD6X6691rNtd6uPgDe59E9rYx9eWunF7bJ",
  "key2": "4DrvPaDxw44q8PJAK8q8teBExmfiS2eeV9pjui5dNqBxuL1S9SPHCtKvR9kEi8soM6bc2ZGM2pgjb1FLhppNTJQd",
  "key3": "3npkWjr532yjYSDtQ6qEuQf3LYUSDMc6tpEuezZcVspeYv5nJQvxApNnuYiQNJnTCJJNvvd5VXuqzixfDRADJmnR",
  "key4": "6tzu2AxDKQTw6myrpdmeXX85nGzk6P1h42kECnXRirhJbamoNwqkRWMRy9CPPmdrpuoo9FSbUVxX7rynXA7dCra",
  "key5": "aFVRehk63JVvw5qPGAGvBb1GG9eSxnM1Q1GShLsbmXZr69jyqKLyZGRp4LEEpsFzpsi9voQkJ9Tfe3rDjXCqxTq",
  "key6": "5KS5hidxArZ1SY4vwgGCnifXcQpW5RfWQ361nSH91gz6utXp2fNWR15kB6viJxkBtu9mTo9FyroRTc5zvA7SueUU",
  "key7": "4E3j7zXwGYUgTmY1MAfq6hbqGyGwokTzUD6qtVESFHgXsUK95pimdUwLH2HL5oCksKPkVn9duZFhEomGSTwdEP9A",
  "key8": "3m4AUiEWWzNpDvYTWQUS3Wa5nNEAHKoryDyNtJEWx6c3SeYquZqUJzXAQNLiTk97W8Mo3qNQxRLZtftY2zajvAfG",
  "key9": "3CiJHQmjjh3yQoiPHn3Fq5ywY4GMKUGjYhgsg4JQ97rGkFbVETWoioqresQ4Gq7B5kHYN2KHdac9AydMHy4RuGC5",
  "key10": "1Gn7cNurFdsYeSEEjSFNVTEeiUBF1gKs97ZdvdsBqeMEehpoTXusXSCAXF1iKs6yvmFW9cpvMzjEe7UtCfiXuAj",
  "key11": "UeVc6xdrYLpfy9env6kWVVcZ58gwaZj1AtsRxVnzA7j9Pqc9qMkLCYRVfKjb8C3Z3HMJchm27F6UGFYVJuGzVVJ",
  "key12": "4x7GMJTwbgyQN49mEyLpPD8ZSxSNtyfZGfS2Zn1mD7mHaX9ndhjrBuJmA1WbLeGvhuAzXAWmozhq88qA3aAd6Ju1",
  "key13": "3GeTwcQxSuag8zxDVYXV9rSzL5UxxG2vtvkncXKKAbHyk3ncLYsoXpYs5C3rgRiRizjJ6PThuyAPLbc4ZAeZhYGd",
  "key14": "3p2MuLQZx7hD17ghBYmmXbPUBwQ6vPMUqbvLWsE7oqPJwt5vcV4oX2px53vPLGPfVKUQz25AFGfBaTdhJkxSG2xx",
  "key15": "5cPRi1shdWDeJonvwRkSEE9MzeohnspcvuzwVyQTyYbMAF6BWQqou4bPjx6dcFHPoSwssCYCvAQKxNPUuLsM9GfK",
  "key16": "65kumTW2FswiSNyJcR51tJCtz45t7cVgvX7dM7tWV6eEWfj49xwxnF2SugVF7aU3AE9eCFp2AVjPNu2mF7BQFQ3V",
  "key17": "2bdgtmjp8MWhho6o4miCUtJua6GeXWL2soQmg8dkfHqkNwJkadgrTjJ3XHzwepzQySMYfNtr4MBNnKFARSseDYBD",
  "key18": "5YDs8CQNEtSJeabfMxA4v8uABvkdwEUfQRYkz1UsmiHaBGA93TkDeHMaaQaULSsr4tBpYLswjvKBS3pEbV8M8uXb",
  "key19": "42yw5iEQ2RG3cP3JFSJKTrJve53kvVMJK71pNJ47WMa4MFoDXjj2LXGvc3x3eyMfHEuGpJuK17MqM9jrgUi5w3BT",
  "key20": "5unrqRQVyKRoB9vaNNY81vW5xhdPfafvJ6RSHHNMTqG5vuF7iAMvLGXsNKAmyYcLpUgSxSUdmNQaUGMYxwFjPcUe",
  "key21": "3Vu9ja6D6QZSoyNRjCufhFqrNffoWW4iTrgJKBH5eAic78e3rYoLmpP8n4mBdV6SQL7oZJZytEjnQUozAsBVnAtn",
  "key22": "2HwSZkGmSGNhLQRZNWJPZux45wDsVEyD8ooJJyq7oANLNdJpR8EX7Y49tATqNrQudMQBwDrSmPYJRvCYz1Bc4dVn",
  "key23": "Whoi8cSmHdKcqrEzTVonHpbG1AA6ZFfAwvmNwCMyWFqx6PZ5D4kyubtp4G2HaoVMaiXkow3CJq65GzJLMZKTMhL",
  "key24": "52bZP3Cpbppt2ZnV7qzEecWVKfeeRN2RemZQoog6WxKmqUz8cVj7NwyHD9LoDYTNpR99WhrTv14StoKVsgHngrAe",
  "key25": "q9oifLdCGi1B4fS6C1ixHTMTYRHyHqaWAivoVejoQ3zAdbUw4n2MaXNY9tdcLZYuPef34sdUoN4VfUWTRQC5E5y",
  "key26": "3jLekryPRugPJ5YuhR2WpdoxpYhJ71CK2dGHMW9rwATpc37BHMb1VKaTncokc1YLjs4fGXjyGwJ4Locrr2j18gXJ",
  "key27": "4myn8Fbz4TKnUHfCbdCTxPMcCFduqP3LyRvwiKLWXEEsvkqPserzZe1nsx8AZLcnf8N2UncgXGY1ga3ZEzezW5PN",
  "key28": "3UoaLrdMQdk7bE8BtiWHkByS56y3hq49YbUHNMuPYjL6GtWBVj9w8srgpRDkE6TQnKpmYKhC1jfUt3BeMY1fMAHf",
  "key29": "2H12zVzjfMGx1XMXeXGbLwaL3C3FxkM9DmdrPx48XD8iPm1mqi9hryeoZ9vDiVQ1UxhiFECUTag6WjzvksVYPMwo",
  "key30": "KEKjoigq3ExtFeKe8runHX9krQng1TZ86EYryR1kTWAsv5C7jqAdCdxRnzR4GJEuCzeHBETiQrrybyM7BhDRRaf",
  "key31": "3pmDSByazVT6MbUi36WKFHvvZk1JEngJtv678kkXVuKAoz6CAmcVjH8vexCGhbb5AJYe2t3ZQhiYPBKF87PgBhw7",
  "key32": "4jXGJJxXmMA4NiSH1JmaqwjFW5orFwYjkq1NrVY9UDwUwpZx2mkxtmiHnsatUfaofy1Jk8zET1E7yNirrSYTSG3s",
  "key33": "3u7CRXTLkXDz9UsNYKGQbm8DMG2H3cxp2NBkeZ8smacfvzQouxnbZmxhkvPw3fdnsvVjxVbTAEJvrdDDHfgNbMLf",
  "key34": "QrV2haEA1AcP5GzAorDyWYVNTAdm2WLk8iFiDUi8BMrz2V6mh4MUUhfeDNbxqfALDJnAFdk4miHsb6YYukVzg9g",
  "key35": "5Qe1s9FxzpegomzgCkLwn2ahhkoxRDjeZJbVzveH23vecSqoCKRGB4CvnKKCHbNZXBH4nN5JmvzuFuCLfjiB2Z5j",
  "key36": "53sUdUPZL7eQukfNu4zNy28xeKfLuMEtmAgKmfCsDJzRJ6sh1cQi21CHyA9sEXMGehm3ZLnfEcznN9xU7kRKcbG9",
  "key37": "2vGjckKKAT7RvDsxQAkZ2UmHCJjK5dbxzFiUGAyS76yqnrN9vqzzvBvs6fbs59PSeB3oMJTZxZk541nT1TVdnynN",
  "key38": "4RAUH1ko8gzEskMW4xWkxESyW4QuzhfkfbmJdkPTM7LxKVsJW9qjpGk6eArJJsJFwKksD9nkJEgyLqUWkvTPfDfJ",
  "key39": "5bHf6cByKwH4yHZqbfF5BTYn1UJB2WDWx2pPFsgZ12HJ7g6HXb8Ciki6zjBg2E5Ep9cEztthzqCTsW9EcHzZRrEr",
  "key40": "34e4W1Z4KJwjPi9fvcReHNAYupVj1xfFqsfKJprsRMmY4PjeTvayKtnLy2eYrX885mDaJ39kWbHSzTQBLMAG5Kvy",
  "key41": "3jCPsufv6brmhrgzc9BYnRFFXFKH1gMzofaQagE1nGjENEidr5Lny6E1toMMK8AXwHUMbsB2M8aMT92B2EJkaeA8",
  "key42": "3XzF9t33Kf6uzqa7N4poatgRexA6aBk2MaLZNESxbwcnyZtnMAqjDcpLSz5hgcnEsWSGCw1QeQxyGAYmPWiG1VAe",
  "key43": "5Mq2RirXUFtDeQiVy5JBCnHQkE2vxzeiz9sHwUkMdt5BAW5sPwuCDoQtYaWCZMQHcw7uNJzX3FGPDVr2979sdsoH",
  "key44": "41xshijKn9rUr64LHBqyGFBttPvdd9mtzJVpGDRbYJr9Rer6FxQcRqK5SSMrWLBrKsCY4NgU7DiHTWCb22CqvE4A",
  "key45": "22KppQu4WbnVdiLFWsxF8EVYejqhaizeQUBJLGreZuezkXugp5Tcb4cg6xoq9hLPnUr5eq1WosuCwkHJ4zvr6F6p",
  "key46": "cByzvawS1x2kVEgHGqjURGZp3X3KH3YUBVU8kZvNqGJuRJuLTMxc9uK9C8hYkYFef9r8neHvms5KrB7rwF82qEt",
  "key47": "57uENXe87NbBCWePC6gQPuTi98NzyXr2cf9ZzLZVDLhNmyTb5Eo59jPsyZkHztzSKppEjCaLtUBR5P85VHGa5And",
  "key48": "3Xh4Ag29wUoJJxHgi1CDv99eZd8ye1SThcLen944nYiAdTMgyNMX3hBTmNFMSMzVMuhQ5VJQYYaDv6uFykZYCGoS",
  "key49": "5FRUZtLkrt9yjXfEbyv1BTN7qvC6bTCuaHxyZ6THd6k2tEoL95B4tWCupB8e4FzjhvAe25UaJhxHjXCRtwNJy1YR"
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
