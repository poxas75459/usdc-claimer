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
    "4K8GQTHc1J7aCo414bEgQ4PaxiHocxCuX6eUqfcS4Z5iJQLiRjW174pCT6tfP39mgVpJkAbyCHmpPS5uyNkGvMws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lbqek8L6u142LSRXQ9B8omvuaeR3i8im4XUgdAUioTGs9cDg5NBZ7HToZryhFyvag6kJMa6DT4P8riB1H73Jvq2",
  "key1": "4UiWhNHwPiieZLjPvX1dz7f6sYTuVf1J9T1FdrH9mMwCAqzpnNt2xwww3MjyDQz1TdjH4fakktmVstTtkKnTYj26",
  "key2": "nW2Nf5DowBRoWBMuzBWe6izD7Tz2keWNoTePQm9fF2UXV68MyMz8Tr2a3FThdJFLL452v9FWEqiVCRHSUyqNeaG",
  "key3": "2mXxRqjp2PYkRba2cNLdoP1H7QdbnyB43e2egzN2tgmQRgT46FYeJYVE8Z8M2ARE3ABsNvsEG1kjBQ1HLWjJjGP3",
  "key4": "3uAZnu6oSpHcGqiqvwNuu84EjveJCh2JVv6XS8LSxrn43GfnLk49Gi1FrSqYZjqhN2WZvzxDM5ZDpwsb5AhkWekz",
  "key5": "5dEHQqjLP5sW6fRqBj4UdjKmdojkQvQaq66pD2PdkhdUQraLYYLFWXvaGsq8mgxKo5FSPynYMwFYQoHUkXTwAq7E",
  "key6": "nVeRFfESHHZkMVwJQ52ePivqqQ2ms257GFqkygqA1QsUgDXQ9p2fSziJQUdG9Tvd6YAvSkKMubuCvujsWQsSxF3",
  "key7": "2Ue3xuMEAyd6v6KPuiq1uzFBddc2wb6dkUHBQryxbDQR1Bxn8vMjJSXDkh8n5ehRnu6SRGQsEEgoqoE5BXn3gKGP",
  "key8": "5AGmvnCT3AzjPR1KojMDRuuogweR25sLx1NX1kqSrEiBhqDYZCgvCjXpmHfrWp4gUnnig8HgbjabwLGNm5k3Ax37",
  "key9": "E3PwAssPfmRmus9G4NqaKXHwq9WKsiftsMhpneCq5Qb9VuuGTUpPAvXvD9pgE6jtQVSWU1C5FRffhkQYcUCyRUx",
  "key10": "4XZt4LGviQpcDCkw8URuXvzvaQDfPxNWSB2vZWhpHfNUc8qxrE2oCXcZe3r6C87BPSG8Gd2K4ndxcYxsTpz7RrTT",
  "key11": "5r3eo1zU8GkGangiL1QWXgW5Sy6S5YTkU3mUG7nYXth52RHTrJYDFUVknMysVxRF3xrcSWYn2VpTrJyfCA5GCMM7",
  "key12": "bH67cSvGUQBjTgGyCfeVwVhhmmcvcU55eFzPZNNM8899xRQMot3ga9fptrcMoQ8xRCCVdeiBktbMkx2dvETxLkg",
  "key13": "54pMm2DQjMqehNNnq5aQHToN6cs5u4zqRThQyvYNgemqwCJsxpzMMY36hy3BWHQWLjotKSKXauzu5kyD9aGA3AA",
  "key14": "428Udsc6SkanyFR689qbYgYadWY1k8r4o6vDM5KT7SBNHPuJaQQ2bYibnYNstWx656pMv2XTsVQpWQMtURYuQH1Z",
  "key15": "4i37c4up1NbkxesqzMTVY7xxSopbPtwZVkak4JJ5qckdG9ndcubsEd3h5dLvEVUJFatZeFB9xufiXhugn5VmKzJY",
  "key16": "2rvocJLBivRxZE3fD7qt1a5eGUo1mN9WzzuyycxjFJ8mvNFSdysFHQbEtwzWTfiCYC7uLZMdxS1trZQDakwZWyjZ",
  "key17": "5rDgrfuH4dWJPsXaQsmmQh5YHHeNKQHidqQ2vi6JsXuNCUpzuqSQuK7ZfJAJfTsNyHbnsQ7cb2LEaHVZgSgHX65t",
  "key18": "3Nxme3tJxJD3yqWmhRQDU4UivMEwAb6C5CWQiToQY9JWAtuwm65TjttKJ8rsS19ArbTtGxrD3U9qWo6FNkXDyN2z",
  "key19": "2bn2dXdNMPcb9kW2QaYEpUfPyr57hnyMwC6s1CnNDV8f8odeAt3aDUqyFenCaCWDMn6YoipaDhV1DC65oiHVpQXQ",
  "key20": "598SnyJSE34Hv3NWL4rzwghWbJEZcoSHhydYUJSomS6Quky4ANq2uAHeLX8K2SXwqazfvpD7gYsyozkrECFnfiib",
  "key21": "238p1c4bBdDyiAwWP6Tvufr3P17CS8ReG3oRj4vv2WBhPvXCcVejLfyZJxRxZ8NWZ1ezWv9bcVZo1fgu6hbCE1oX",
  "key22": "35ScxtApaeUQJZTZFPjRdm4gBy6SWSqrdc8aEEERLtrR3YWrF1YTBpmj6iwihGLo4nNzaJ9f4AUgRbsQdK5sSBi",
  "key23": "2wmtkykWcwXUcgZycBQ3ux8a8MqyGG3MGXR6DYq9qvVRsqynn2WuGpzVu4DMWnptKD9U76WqYdbSkHYTeavimjka",
  "key24": "2fVF7imUouYZmLL4E3TLGkwd94U2LohWNCEJ1HLdeHPBvAvHvkRrJBbzox7Bjb4ohgAE9P65MY7MbW7Kw7pGA453",
  "key25": "2WBHSnkX517XYQ2eaN6yAKnh1KT5UHt1RyjneNTzM7CL4F7uvaSnmzEV6wBYSJ1XCFwupKdoc6XhgM16ZRxrzB7J",
  "key26": "wSTgBUsuny9z1hFMg2zrGym9H3VhyShjmZNrdYbrrgqEtREAu9LDHcSQMpi5smv1dCTXK61mXd7W5dhuGGzzTzK",
  "key27": "4xwsT7yYf528J4Bg5cZqsj7M7VEcf3pXrNun3KUcHLf99dNuo7G9n1r9ARxco5aVD7L7q5VT6yeHYRCoPrXZcZVW",
  "key28": "49ABaR5dRWQSQDMBZ5jaRPd66yivDp8eKmJML11uuvjBXvEpX1w3Kk65osoVbyzvUgGCS3NuHHivQq36nXEwXbvH",
  "key29": "TEUU4TBKE4iSPfBS7n1SHgpYGnQMvVoYVojRtjtGnodyH8JCLGbxw8tRyw83v6uTv2B9aCddW5qXNCUgYUr2H92",
  "key30": "23cwCJqUsch9Ha91UanBNHxPGVFQcX7UhqxMm3k3fvMpQf6dcDWrv3LWn3yL39ZrW6xcW2jLXo7SaeBFdBARSzfb",
  "key31": "2Cn6VmfYaWZ6q648wZHBw51r8GRBBorRnxNVM2iPwesEA732w1z2CGrzWXcZSf8VRrACLeLAiLKnvjmDfWg1fGnm",
  "key32": "2xiEJawM9DdHSsiu99BeV7Maev1v1a8RctZs7fZDpXBd2qy9KZDcJK2uKZ3piAkun4yQ4q5twZ9YHJrQaavYHVZG",
  "key33": "4Fe7J2XUYkNArZ4aiPax1HuSmmoEswbx69KsukYZSUYNfkxTdGvvx1iqc2gB2nr7q5wXPPtTaqZ2SVfDQ9FEwJFh",
  "key34": "ctpnCs6A78ZUkaVifqMYgCrRMXR5HdLqxpukpdLfoz9mdQs5vTQQ6L427vXokyePUDDvaHXQvFPCRNGBgnKpPMA",
  "key35": "2AYcAGFLPXd3UnUT9yXbbaU65L9vEbMgQx3DZMisDQHQLHdif3s5K5negtkpxG3dTbgWXUvbGAYiLUhVtbvkPCcX",
  "key36": "4DDvT8GaZKMa33GJ9EGGT6N3RXHrvnSk9jUrwUnomm2CAE1WhdZoynYQVZsw2pnkreSg8rRBys6oTAp3ZvXsURq4",
  "key37": "62f28B2eAeSqMWSYN5Apcv9Y3mht2yQHEtZ5hBqpupzzLN8ccfPHgBHaxy2tDBMh9ry3dDPRHofZhxnBK3otatq5",
  "key38": "L5hMbZW9RH4N3sQJ1QiQS8ZhccSZ4k2VfuSYh4M7KepGoKjbKcK1zFpiApt5Ntj6H9p7BQ3gfUFqvjCfiXyktU5"
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
