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
    "27XM3hHt5fhE8stxiBz4M3NbAvYKfhqocSwHnd59pqaLhwsHvTPr34x5GMcPNqNr3cKESxnkX7AioTwAAfYWQgqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "asYDDUxGEosQsLAbXP41AWM7D9oV1y4yybCMvjVfSCHe4gGPPs5ogfNCDwk3XHCwB7VE5mVum8Y3zf9de7D9Y7Q",
  "key1": "2ES67jP5jgRaFUue3ky3NtC4JJDXGpAxE7FrxsTpF9CYUYEwHz4qhPg3seUvgNWc11TvHxch277KMCgCBvUYsiUW",
  "key2": "5mbKHjVz3tJD6J8E429jCf8VHe97eBYQkZKLASrioNy6BVaCnprmePrqEhBp4JytqQ2M31p2YafKgkgP4ZEXoQQN",
  "key3": "5QNgMvTeSPLAFjZLZVGyJP9GYZqtYLNhj9jB3EFcHRyGU6Gb6M2dEJS5C4d4Q5kWhZt6uxdtu6RGJrTDJo48YBLW",
  "key4": "3BXnyqxc621EZSDnobC7UcXNJJe3657zLrEV4ijcDCtr75zBAPn5j6dz8LGA7GfjrQpQhkcZdtPBJMVAkyUV7cGD",
  "key5": "ssNeKFqNjU6FZcAwXpu4RHVg3DVLB2bYCnnzbNnbj8aUk5L7RDgL813imp9ME1bLZAJwFHsq6pM66ovyQpTmoxo",
  "key6": "4G6VAihyASmfKLn8uA5snogmJnBy6ep4s8mzKKbSGThGpY1cVTz5bvRHc5DutJpZ5vt8sFSMQfm9zL94rMsqzSr6",
  "key7": "3m2XZfBYe997ogCSRN62aStemeCvTjj6j9QYJiKzTmfGQkdrn56CLpPFDR2Si4kNA6oJvcF2GoSggFMw8imJRuao",
  "key8": "58W62b9z4ktce67nAZ5bvF8ZpZYVaRw9SHmKgsc11acroAzRtLb8NbxLvkw2gqoybDhDxXLP1GWEBSv6r7yrEcFG",
  "key9": "EX7mkC4hZ5R76S7rg4mTqnsFkyN16CDpBdnnVHki8E8B41GCAR6RzeF3KwWpMBFtehfAmy2UxYPaCThUx4HWcDN",
  "key10": "4haW5kPE3EJcTcSXAwSJ8s1H7qPoS4wokRPsW8RBuUSyqVGjcU75hi3V4hi7RGZ4ymfXwd7tjKUZ4P48ifd4Bjvf",
  "key11": "54o8VQ6t7471y5iLJACZtMyWMREiWERM5QJMrjJAT7BScrf1b5QfW4uiD9SUZa3TKx43HkSDZYRLfoXXKAFt7ceg",
  "key12": "2up3PcjxzxAiwGAeCXNgWXedNVeoYWxDuBTrZhaXXt3ae944To2ya8rggWdW9FrA524bjpiGRK11mW14Ww7U4GK2",
  "key13": "2n5YMMNrf3xxuwScvgR5PX9rRHgUBubZCfA23znStUFVFr8jLrCpEydA4ZmpZTedeQcRc6U1t5upvX7miHVZ7YkX",
  "key14": "hYWrQuamNd3UgWvwK24Sj4pUsKoh9DHecnQh9DmR2ULonJKbtyFHGBHKWaEA3WWsF6xH8mn7bRA2YAe6itRTJ97",
  "key15": "4VCTd51oFL7CAThkwjZsn4Vh8GD2VBwYDXcGcXhB4HEf12my7fSH6tCof4uD7jsDShLg9hZ6cBsKzYAczeoAhE2x",
  "key16": "39HtssBbFBX2ee6gphJfGFxjUwRpaznUe8sMA6pHfqMJyxmkVt77Jc8QAojhTwEbjk5eQZvGiNvZCb7jGdaW1Asu",
  "key17": "4HnLHdKxSwKeG7nqd5c5HHnq5J43atL3K9WpFTq4h1hS1TFR83WpJgCRH36hNUTEUWNnKLpntxhbD1GMAcs8prxs",
  "key18": "2Gt4KJBwABFnuYqEThNsgFNsC9bGu1wVZ23vGGwLpC3paUYy9F8YJPqz3vKFoCgJccUj9N7unT11MRrZFoqXQ4q",
  "key19": "3w8BG3K4mSMzqUWiBrqV4e3rzZB7z9KPyv7heDPkWLxcP3wZAJrk4xHnUShixyVA2Ky1hJ2n8U4jqJ7nQDcckwY1",
  "key20": "24Y7kv7seDaKii3ZTgZusyRYn3mQ3y4wDvum9N6es8TwtG2zdZZ6CCLAFoDW52zZ2ztWkPSXAuYjxyF8FnNXM2xh",
  "key21": "dbNKKKwqwgMch5prAXs96bDvr4mQBfckWvGUfx8aL8y1bzUeaevrfhVff3NVZEBB8WddHmH9SgtTpsehfzXWMuZ",
  "key22": "2jUvy5Gpb2J8iiTjGaWqssd9aBUey4AjA8WSL6HA7BUNqLwWMkVa29zoMLnNMcfjyJJnXcKX9T2oEaeSQSVJmcyx",
  "key23": "5AQVNsnHejc8k7g8kp4MyWLLfGkEUkLsN11ScHSa8jYEjBT6NZrbERP63kzZoabqiFTE7TdFd993Nn6Ebp1xvHDe",
  "key24": "3of3NTBwLq4G4H2XVxnunXYN4AnC7kAab9BB4M4CcNAYp41EEG2dBLSTEtseUDTEWKEYkRjpdevWHgXHQnzEzVBV",
  "key25": "5UKi6D4PxpupcRdoMoERDzE9LwTt45xWVfHHTM1Mk3xC36qEVSF32pWpi7DZ7g6EyYHXftpDK48WRRjsXBmkB2u6",
  "key26": "3dgcaGF51LXHMzW9ubNyUJWYk92KP6uaTuY1EqiYykvdjF436f3he9KFQwaVwNwrtco9UCAXVXZUwV493bKzJ2CV",
  "key27": "617AmqSA57z5SfEb2HKUB9r3UDU5726jJFDHaJBWk1TaYdJNHSoBz5Mg6QiE9j8aTmgSHAyuJkJas9MzoqfZLbEe",
  "key28": "M3e1owsbwbEnM6ppHMr8PzVRMRtscwUziJ2y9MPawLkjyqWSx8Np7WEa6ue6kPwSAP3YpWZBsit35rnjkCS2YJL",
  "key29": "E6iJtrvYucRuR6DVS81KFjXc41FoBZdp93cRQJFdvNZhReMGnnXvKgt2pvmzXrRPJQD8YKjnRG9FnRd9S4UKLui",
  "key30": "4BqF8AktD8UbEbWMsy1nWkSFB99aFVracRS8PQZQeqkKmvTQ1KX1YmSgJ7qKYCUatDkj24JzhHNTyYxmKtZJuQvn",
  "key31": "516GTGCenvw67ZZtLERcgvBeE38dy3v3Mjp9BiC8YbLCFtRtGTZ2qBECkVLQpJpTgn5EeZKHdKJQSMRiirz2uJae",
  "key32": "4GKvaYmeCosudaoqF8uXNGaJtYKyvmRNcsbeVzbKs68zT19w87JnpiR2XvXdrTEsDHVhAkw9CDRZqS54P8TPcKZF",
  "key33": "29eGLzyvDzjduVhbsEtq2upwsBd9pnjbutLTg43hWVV4AsQKEk2mqNJLAv46LiVodX5Y9aq96HvzGVqm4emttrWV",
  "key34": "5TzxZNno3YuuPQSwahBizv4MMki7ewqbrSS35iBtMj83gSwQ5LofKxg7w1PwbKoTLsu9ovXqWUTR26ftDL1oMghY",
  "key35": "588w9osWBX8Df1NK3Jkk5mTVorttZWSknVQ9T53ENCXDTgLa4JcHdSTt2YbsWYWtjakb22ZJjCoTYwr95p1ynuJf",
  "key36": "4kAhbc8vQ1cVegb1vcy9W4rW8riocvVQdJBeFRBfdwGoapGTFzVvNVpyn2ShDwvuamB5CUBUCvALhz3MrXYAkTdi",
  "key37": "3kgjZL8jjyYfMsbdfYxANymTP8AMBS1nZA4deaueBNwrbVXadqfRKgxr75GK67tTYZ9Y9WDLLjEQLgVS7qzRzQtQ",
  "key38": "AoRfJfR4qfxKnvyNrY6sbBSZCqvaVD9NDrDXqSbuDjLQBzYKaqZ1nyZiPrhYTUsWEaXQ3Lj8UavR8naWByzj8Qh",
  "key39": "5R9y5WQUVa6AR76zzuC2HhVt1KGwAndcoEKdJsz3MTw7Yobe7rbuooRHdpmggwxb5qdMjtrn8WpyEAykeNvVE6ha",
  "key40": "mQHBhg9GzJWVBjJrTousmyLm6A2QvBHX4Ga5rjbYBjiYg54GA9ZkiBtMERH9QPKAmyeg8hHrmu3Smezrm2HXzsZ",
  "key41": "3LLuipvQ7q96uKepPkpqBPYPM7v3Lg5vqfbMPJYuKaoAC9GH1GVuiUcBfMinLKd8MgXsXub7DJagMTn7ABY2bRJu",
  "key42": "63FQieuP1AySnCpeTeyMeQsymJWxRBw9pdxvVX4FG5SXZLMyZXg53upKmAR2RDoGF8YhRKvG3m4CLXWiSkdd7AhB",
  "key43": "K83xaGKJHuPdB6hpofkYFbkyMTp9aHZ1dNpbZS9ZxQi8nLBEnNoHxb4872x4CBiTNH9XCnTPeJ9EqtRMMTQfV1a",
  "key44": "2Fz7XWpQvLEKSbfdTMuUtn1FGqsS83QwjNi1qtzrRRjMDAvGtXEnGR5MwuY7zjdAQQpPnW8ju1t4X1y3P8RiLt2s",
  "key45": "43EAWx4YLqHdA3L4cqDTtpGZkqwdrMb2wTbi7bMTPFojcokT1BdjJ5yEFDc67dPVPGFARAp2FwnzkVFc1ATj8T95"
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
