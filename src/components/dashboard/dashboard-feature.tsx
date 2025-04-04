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
    "RJf7zqu6mxS4skAcxoFfbk8EjFZ6HznvzNbh7EihXVmwyYZ7QwzALLhZH5jH6VK4VduJ4rJPveC7pKy41TJTZWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28BoJCgNgS6Tj2cdHVihnjtASUmEAU4FEKH4GRmbPXZbjy4Fu13CYLqdWGg9fE9TSQoFqfE5dMpE3bnuixXKaNzA",
  "key1": "4oYp9iUSGQPJTu9GjNoikMrygusYWVmnj8Wuw9Q1udVav6FEYxXewBC7wTP5nABrpDakeZriXM66wv3Dkukbwvzg",
  "key2": "2imKZQCaHzTux9kDDkLoVzfd85vSs8VwNDsWnR7tzMTRXdoufVewqJK5CEA3NzFFA3n3ubXeYFaLT5CtFKQ7swYg",
  "key3": "67nspaU29iFWEGCK7fAn8mx98dcc9KexieWnFJkstJGm3CxAip1ryNgnrF8FWYaFq9AkmNfYb7KPdQiddYan8uh",
  "key4": "5j1Kgpz3gjehzHESjWRkdxkjn4Q4SYWGmgKMqALEfPUHFZ3YJh3H4m1sy3qKdcDPyjbtni16bfG9SQrfuz4AjULp",
  "key5": "5css8zgLSf1Dsw2bU5vFBwYSnqaa92j7vbxHkc6XtZ64pg3gDCxrXKykccQAsgvZAFT2eETAtkpawsvKQArfViqB",
  "key6": "5tHXWHYeXKQLRXzUin4cToi6uaSKSS7HtrkTGNGRrBS4ujyWz3hqLo7tU1nzWykq39XyLyPxjpJrrbTtyCYUq2VJ",
  "key7": "3SMyzw28M7EzPft7kBnvL8fCBQ9HkCC712rE1bhHEu3FfP24Lpkaay6WmPrS5ZoWCYZP9Yo4HtNJK3aQW6qDifUJ",
  "key8": "2g1qa1fstjo9qyg97R8rdR7Gwhn1bHCH5gjx4cMqgYydHTbZRMXEGQjvwV3795kWc8ojceYLr5anrMEr4rKvo7Bb",
  "key9": "2tgX4JxmPPPAe8k2AiXud1F4YseLq6kfLG3VsEuoN7JRBakgjY6oLE7QcJG8QEAKUyJqrDeGAy9VWkkDAKh3omnU",
  "key10": "NDQ5SRPj3dPpx39BKF9mjiYbyqu5kkboHaPFnJ3EKeMHdhHNsHf3pkoDxPXH6gGX9A4DGheaxqxXNLHwff7cUHK",
  "key11": "3yYtaJrer11bYJ5uXfjgKaK5ep5J7E9AVB7ifm1X69RfNfDBcYBurNXy8YnvHTkGRu8akeuJw5xmfXX9UQv9dysp",
  "key12": "4Gx9hz72n3MhV1F16YEWN4p1kpoh25npc59gXW3mqegdZtGeVjAuyQ8DdYFamtuvJQWqSzj42ViggoQd4pNsFnzU",
  "key13": "aNLQed32S49CfVqQMrRFy2U4t23LRU2YQaDy1zfbu7dyQYHGixBZeVBH3688XqnMGycD6skuPV7LK2Uw3w7cyJb",
  "key14": "ZtVd7TgqKg7eUuRXzJgDFmB6SVJsordC6gPduhTkqTdpcMAcvM8PU3psgEyVoUTCASVMSxeqLGCrGKrV315ZzrB",
  "key15": "23jG2bbxNBrPK5ZawMsDG8UwpgCCM4jgtGcchW5muzgTE9oGRdqWLt7hvgMWSRJeg5wU1tNn4WsD6DaowjKTYLTy",
  "key16": "iawKmKFygGKN7yQuLx1hdWv74TU3Mboos8Xn22z5yoCPpq7oHTBqnNUrEmwGPnWTjkHVCYkRSLWybmBTTTbRb71",
  "key17": "2SoS3WPdWvSuHaB7GQaCpcWiKdGZWjfdAacRcvgAZF6Tydiun5uyJ1Q65twxMXBrhrssoC8hmwnj1SxZ82SqhpYp",
  "key18": "3VpjdiwZaNtyZ7ZoMkX7c3y3qY1C4AwzEMUYSEXT84Jd3GeEkA7iRcs6rP6fYJqKum21q4NNuHnqggWGdG2TPEbX",
  "key19": "Ph4CqYUGzxCg9wPoc3zJYizHAwZYHfHGuof2p648M3qL2c7ou9v395jaq8HgR5aZGPTcLfUaeDxDTJrw3vh57oU",
  "key20": "4K2BWeo59KCaHPZXUKQRYVvrncZSvvMuEvpKJdGAKYMFNfAncamxt9ChtgJFyqsYcKytALK1gR8QKACV3eSTpJRJ",
  "key21": "3XtmSsFAwVvU1CESBiHJ22LLFmnVNC6zGEhetBggmpbdJh9FeDxS5utwGCWTR4B756GQkLwxK98kcHNRTcha9cEk",
  "key22": "2JNa43yzCufzFt9vHxfbuj5QHgSKVe7UA5t3vqqtcq44zM5wMTUT3akn8vw6eGYiPtyZu2pkjwih4dRv9s64HKVi",
  "key23": "abnz4yhZcjZoR82z1MsKM7nziVAVXZexQy9dgdg34cQ8hr1bZ8oG1ZNmYtqTNc5MMcKAwqtSdrbr3FgChXecjL6",
  "key24": "5UvJCuay1kHG6d27X4Qspf7eqrU16FGqSMDRD2VEUW9bWpvWcQdq7UTwXoRgDek5z217RQhUURHrELLs3nd5Cr1J",
  "key25": "EyR5TXTJ7hcwajChN9ZoFtXVvTC9Q71PL67Dwv2voFaYB4bnFtAscWHXwR6Tij4djHkzPL7mBimbAmHvxE84n4w",
  "key26": "2csHkUoTsbd5TdgS5PNnFAGDj85kSxRcCGfXoiRwb4J4jqo4W8hftEjaQrvWJF7HJ76owgVzR6divG6BVDHmo1D6",
  "key27": "YLid2xhYDiSo5ozNZKgPUGpW7aYDKa6kMFLq1vjYf6beBbCyp48a2xsRskWiaSVj9Pykb5rd8jNJWC1UwPfiix2",
  "key28": "sXnsZxmNwPUaZJ6jpKy4r847bAGgTb9dZ3gsfU6LhhMeGPNFfdFEqobbsXBeyJv5PaoBWfhtUWoEpu6m6gYrTfg",
  "key29": "2Dq6gDn3enLtByenTpRniBxR8AGexkkK2W6pJMu2GUFDmHvbGvnr58JMKGkBGcKLNGVFCWKag4rdrA1YwsdCMfoQ",
  "key30": "62whTcCy286oXQ5qBsfb95oFsm2M4vb5uvrtPgF7r2iYBaziNdHLb89jqPjJQF93YM9qTUXE3cy1EJbPS4aSxoag",
  "key31": "23WoeeYYGrde1zT5RNSoPWJVe42mxtcg2e9c1y5YagqmFrt4W6Z31Gtd1z9hn1y5nhtPrwRWk1orpRFEMJfZAn1b",
  "key32": "5hMmSMjrWR2CQPU3d8JRwBbnDS1xymRonacuTL9Q2DEwgU1AkmrL2sH4P9ikVcgbk2jbg1Xgs4W1WVSdRrjntB5u",
  "key33": "4YxWfe8cmi4yjxCdf2KMoAXuFyTran8xumTVV9c4hjX8C86Grz7mJN5ibqohm3EZRkJJgEFWiWCfDcnxSYqFRyFh",
  "key34": "3aTxbkg3M5432GYhauCJGwjHao1mqDBDQN9WtB1SGmj1CPqcQN7o7W9PSjP6L5bHaHSjvkySyPxcBSxfk74rWqg4",
  "key35": "5v3CSfapucuvTTZ9ZbBBbDLWLxzmwLr1mrDq4kfSnYydrLUKYjh627MowE44xCVReqLDSgwPawbmxXqudxertNJK",
  "key36": "F7oZkDdXiTaAExxKmn7FvNbbhAGJKVLsapQAMQpJKWRg3Lmz2RbgRo3zdAo8oi7Ecj5mxhEpT91gFvEyyryQY9A",
  "key37": "2tAvfdYqqWy5Mmxdb7UbUWsvoGMkdZRJeuDQewJNMp9qVLdb2hr4V8EcyAuUHUhv5RskCPDMzuoyHDsMkzew1oU8",
  "key38": "5YkjtutJV8mc72kKsX5M3APMJG1a3A4CcwXDvd6NGRUNtQ33MeSjS3F1bHjjjJuMp4MC9SPcWPxh7NuC1TjqP6YJ",
  "key39": "3nBQfSg2h8yNUtSTup6D31UgS3U6usvt4giqBfMVAiMoc2peuAujFzWhU4gZ4raXSUgseQx3oMkanG3SYsgTJD6c",
  "key40": "5MxkLRSjZTc2Bj2Y4cj3X55yRfjYreMbHwjzyaRUtiMhguxRM5KDJ5tApHqNfBJ6CMb215MSPNaTpReSGDhoCi9e",
  "key41": "5csQxh7771F67kF8D54YTsRv8YWww7YZsmcQgLvd9ZWwCbTTZuo3BSTMUzpNnwQf7eoAM3m6kUP3vf6es3Tbeov4",
  "key42": "3L4zcrDQmysUhj9Bm95eYXeGTKNDE5ad1dCjr8NKCFxZbEqg22tfy9notCHFCyef7GPPr4DYuvTQwtkv9jvD4BF7",
  "key43": "Ctm6ce9uSad7j74n3GdoF3uW6PHj8pC7QCLPoUYUV1S2GwmAmDrHtw6Vvx2JMgWrT68NtYPkhNgv3u6KnWbmUuc",
  "key44": "cc9TToaUoXPipr68QTXNWpMmTsHEP7gYcvvJ6NRFvwunFjQAZWzJgXg2bPwf3S365bHorsBbqzgmQJDSNUHder2",
  "key45": "oegDPsAgZG5psmrX2f872mx5SEViZYYPZgv94uuMczVPoGddojAjxq7HnPYReT3ndcbcG1AjenuqFCo5BWUq2cM",
  "key46": "32NTS7PEB26CyL3oGaenw8xyk7SRTrLXm2rdXdL2C29aGA8yT8WYtWp8xn8nJ4iNu5AkPaJfoS2GdBWHQEJn228L",
  "key47": "3bL4eC5JHySk4qKfXZJc6r73LGYm1X2sFxGHR3DNH8TJef167QkGqxbwhn8w1HXoAKDFZmY8xrpCnQX89rzWKG8A",
  "key48": "3DrFRMDNG5LamYTb2op8eiDWMFEB3xkuAb2vjTh9hxw4pi8kKVRsX7Hcxug1KBnuaJ9kUXUoSRpKy2coNJ29QWDi",
  "key49": "4KQGwP7BNgZ1964tCVMwsJtyA5RWFfeEaVpkpV1KfDYjDSvYEZLVeBfJjqWiiJApQXEHCdofzXcXhqwBAdMPzSdQ"
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
