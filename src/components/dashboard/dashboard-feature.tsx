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
    "55nTEnZxRofr6Sx1EKByKD5xVACBbwiSa5XaLCqcVN9t446F4FqHmbm2ndaqom5VtAqcm1KPzSQgg9rfX1KXUsvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cVr4JMwRPnm1GFNxcChpQiNTGYPxh2JhRDpo1GwNPAvJE2EBCoSDK5A8QvABZsahUKz46jKy35GA78rphmzEa7z",
  "key1": "vLvh3PT8pcjxQPEGZV98f99EuDKvKQ9vzr4VHgNEq5qrLdZahCTQstz5bgtSpi45UNzyz1kvmHXfMXyUr3iVLT2",
  "key2": "5jf9Zu2zSZsmANt58736Pxaj1MqHtumXfyQdJWFk9PcYzbuTQZ4G2aPDvBpAePkTqTSL33HFKLkzhv3UpWuckW7",
  "key3": "4sMRGsU78sJ2gsUmnfXWT9wo1KzoFh6MtFM6LLC1bYreLTVHgyktQBWSSwQ74uHNbB4JWVAxGh9vud4UcwhpHDbM",
  "key4": "GbY88hZPcA7KxGnfW3AbKNQzeWmwGKgjQ4SH2z44fYvMBH8aVmPXNk1VWF9B3yMa2yNBThGsRSyJ9hAswqBENa5",
  "key5": "4L2rHeZhZrXGAmLTP7H81gFUZMHyn9qQvDVnzFyBJyG3f1wbPBiZKe7z9cX7qvPD87QqVhe5Wm821C6N3Me7AL7b",
  "key6": "4CQFskkAwSvjjNm3G1gWhTETgvEiZ4cMB3TKPSf3R29gFMgqhsrtUr8kwZ62BJpSfP5V3JeL8vSdodETgUAbhCHp",
  "key7": "3gu1fg8gdo9caEAHGqhh8Ro95ZYQnXttrsjVxyHhdx3qAtf6h9kabSasHBqiD59AjSyXwEeTo2z9iYEJCgxZe4S1",
  "key8": "5xDXJbLbDetMUpp4YAkpSAUhao4SKALwYGxAzm3LcS66hp6FD3zH6tqwoywphWkfdMsqhQM2TBuhRhVwCPeEN2WT",
  "key9": "ZuTNqXgdV7U1C1UiRoHT6XEbELsAY1kr2DE1GddhPfKf2xJa4peVgqMVbbvdSk263RkCwo1K38LfKxrryWm1AXp",
  "key10": "5PA98eMYw3jrLchWsmSRTw9tLsWm5ZcsiLDN5GdaRZgErSxhfbFmiE9VcovxHEaL13iJwyLzSfyCqXtc6cYrTwru",
  "key11": "471XosmYNQyR1T36WS4oKV7V4iNvXcnJsZqAKkXSkmRZLcbXQZMyups2pV1uuHafmv6jrKo72zDfHDn9WHQRq14z",
  "key12": "5z31UjuJLizWLnuFYJRewx6sgvSz1eMLSp3gayEiF7rCexywsnZ59bavzvfUwV4v4PWRjvTV1khCXaHMzzBhKUUk",
  "key13": "5LdNtB4hM9oxXxGwb7YX85axhXsfXRj9qhda4z7uCin1JRQUQSRE4JuqXFPsbsUfnVPNaz1xSWcr4Y5BLDBHV3uF",
  "key14": "3nBPcCGhbPeF3TPMHgnEJZPyaMZ343gxMe84x3wJWBFexgsyfWm5AA4cqsKnFE6HMsHCQNuLFbGwQBMC2GT3XUgs",
  "key15": "44WeiV1Rpxw75XtV31JiXkRhYZ8zQDbbTBhVZBYekE72eVEN31VJ3cttpqFLgpHLwxRZowGGaFBZvTETG4JDdPbt",
  "key16": "2arg59odhbTtMuyw2n655wPtj4x9EYeLzZr9tye5XKCQSHXeborahkQQThQd4sPVgbw9aJAGX9kpF8EXjZEJBEMq",
  "key17": "2Zso5M22vf5SfdGXjo2drurPWP3kQ2TQXSaaReU2ALUN3NgZz7zrxtNr69btQnNd9jnpvhXkidJZFmCRCUBUX5CU",
  "key18": "5ab913EcqDD4SZk3UKhh8WrGtqtSA29GN3VehUZ3ej1rkRnPXGrBu3NsccmTeBf9U8tB6TbVY4XMqBKa4Su6KGrY",
  "key19": "37thoXHgd1FMSAzD1HEGaxc4F9NXHERPHyC2KCBpLjP8BtzPehZ8J3JdHkLq24b37rqQyDK2MUYtzevocBnXWxT",
  "key20": "5DQaY8G29dojx3wPkYoEAfkjppmyv4aN2RfzJrrMxA5JSXEV5ig8gfYkLD4zyrYvszib6f6nCEEzxu1x2bJc1ejk",
  "key21": "221dc74g5ErU6C1GsN38as8zUEsnPDgD4SSYCbg4rtxbGoFNX1mA37vjWsXnhbX5qe1mAPC5UczDVC2XfU4xYHaA",
  "key22": "24wRCwpYycVFitXe1Lh7r9K13pV6vpYdYYFDNnR2snEAWnjyz4AKRH1tkVQZjwhxUnwUfphxmHKq7rLzHsX8KHrJ",
  "key23": "3gLCVZgvTP7V1G66h2eUgSzVVuKvu5QZQPZfbwW5YZRjzdrXjcaJ5GgVPkg1je6GLg1HNfebZonchfEzty22u9TH",
  "key24": "zzggYcuL3DmBsXvYH7C7ZwsAYsscF4BMKkPtHbHrvjZ3CvGg4DxQVonHkRro4eESQBmS9tWMxqtnnAZhFWg6nK5",
  "key25": "2o4dqzcMkw7qmD2mfoCH7YQhbiN3bhWeN8wH4u7DMFg7dvufvPLyNr63UMbuhxy8QHySwwo5ZNCbiA6mjUfvDWHF",
  "key26": "4R6i53cLruwWKykCdrV3JAuBo62zDTiPJbfCE9j4K2e8ESe1FijYLRGE9zaigkXajzmUi5H3dHwhh1gRHucwYAoy",
  "key27": "2YuQEimpe9BUaEoWR8RLgKpHs7qszH9jkfJNkBJQ7nkDZA3WXhS2AdNquvJUj4TDaXZjRjc6YBnHQhrbNAg25nEh",
  "key28": "4ndq6VjdNAUb26GhnKw2qK1JivTjDJFqETKna2Ukgwk71iRBQNoV3KHWmcyjXzu1sTPFKGUmd8oiJisyc7YJAbbW",
  "key29": "2XqVyY79QoUZaSqCFJT3TNCShCwPqsPuANnFDZ4dDJV3i8fqyGursTVNB2kooKfEG2KHYjbkMLNRgDFes3MUwskN",
  "key30": "51KJwESdMta6L6Bd8ugxcVAra3nqYN9cv5yKNtAp3atTZ45hmuWAypjMmq44ZAuEjDArrtBDzi27fudDLaSPRjW4",
  "key31": "4L6N9VkKM2NJNeZCgGVTGfCjM4tmeVXAhLR8A7RWxZAB8R8Cu8ALTFiJDxt6ty2xK7WfKr8BzxYTfsFn5mQuu4bJ",
  "key32": "3VUWLBAQpqqm1e6NL5Ck98vfEnkw9KsdSke32dtaUCbGY3dZQevsdWzDwY8hv5wEtK8pM1Ca44DSoci6B37i17Tm",
  "key33": "563RV5vSWdonhUCpVTePUyXMkFrJdhJ3Cs9ugyhJkp52ejxN5GAiyGbZyY8zeEFsoCETQALeFpeTFR4y1Gv9Ce1A",
  "key34": "4eGYAFYpk2K5AcAr8a4tuxWt3NsiaMxGYpoJCFgbicFbUp6gis9YZApPerMEFL7VsQbXRKCmRTMBm6tKzCiV4grR",
  "key35": "2Cc3aBB8CvzvZZKJEqosmDCMCrbvZbqQq1TZzpo7qscAdN8PbYkK9CWWWdAC9NdKkwrWX7vGtShYPTKuuLjwwR2q",
  "key36": "5hrSh3rEvkCFfb7z6YwtS5MimkW52gnH82JBN7acWcYJ4rUxM9F2A2qv7GFB1YoKBsupbNTfX8kxuQveRqELWiJs",
  "key37": "4RPEckYqSmsMdFUMLYu7FXcaopmAgS7TTpm7V8fzBwaDsDnaXbh5mXofppPU51o7x8gGVC36ybbwF7AHW9XFnfoS",
  "key38": "2PvzobrLc9MdWRP5L53sEKhw4Z7YcuHimZE6QYrmRTzToGCmARpp6f99QtCnH1sukLRKN1FZbvZ9PWh8ovPyCcC6",
  "key39": "3Wrn6esJq8pxgdGXcg3URt7fTrnojoKZvCeaPutoQddhRTaaX6Z9xeZW2dGmiGKaf52SDeAAKmBL9B2eDNpxRFHL",
  "key40": "2ZtEkegG97BJnwKFpWU8kpCkkha9dBFhVjE4mk8P4QXeFo68XCRokwSqJ3zYW5pv2uLG8qZuVL1fC7nDzEk2w1RM",
  "key41": "4RJz2R1LgKyLEHbdDYcUdWuo1dAkJur3rU6VXZ5BbVKcB163BJwPju8qyd4pLs4gPupY9Ag9smjpmitDs5J5X9qe",
  "key42": "5ky5VNYmKywqotKyStx55VtM53epCuwmPwD1X8iMzFaV1dmZEpmJvWNzkdRdsZE7mcbqWY8ysbzCoM35N7waT6TA",
  "key43": "2NxM1KeRy7RQEpYxZ7AKrzpNWy4b3tjdJwaYh9uzcQDfe4t7p9XfULbfsb9DftuNdWzs7E64Do3wGqcTq25XSqDV",
  "key44": "25h2UNZVmYWAU9UakvJDpe3CPpUpPygu557LEafrYmsTWerg4zTTM5gGGYguAJmganJa2CtiMAGB1piJQMaueyk3",
  "key45": "4EoKmVk5q7EpEWV2Nqo4kXmQFMN7xzbvfFxXgTkV5iNNjyFzasd5tqNA8enwT8kUbdxgA8uTwg4Jy7NvVf4e5eEx",
  "key46": "4Ern483DXat4atpd6rwwQv3UMDVkpQsvFP2HCJ1e21Uv6H9wRVNv6fJKwkniy4oPztx14AAkg1dej3sd8q9WLD1x",
  "key47": "5o6MLA6bpECNv2s9bxWcXD4Uaiq7JhZj3pTAZ3nNXBUXQbRTLTQm1UGoRKpQUdq3jCUAKpXmu5VXsSfKv8UKnzmA",
  "key48": "2Dgg2BP1bBUD1QD9U58jHgmhgGTuVDAMhbfaQARQLALzGSMGsbrcJzq3NuT19zYq1mWBPHktw8j8sk5No7unTN24"
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
