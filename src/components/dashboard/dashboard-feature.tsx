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
    "4b3S39d8wR45YNQXSxUJ1eGaC6pv8ja6sS2iHzeBinZm2MRgXgjZcguXSF2ELHK53kKLxAHBJJJ1Hisx93M7D6Mj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MRqt6KQffAUd7A6LPWeiDWwjD2x7BC3uYub8xjuiQhnq4ZRsnCcH2py1We2rWiDnckat2xZFemZVtg1rEAAjA7p",
  "key1": "61ui8U2P3mFRYVAG6Y8AYZZng79yVzifLm1teHNZLugYztFh2Pfgj66nW4cLbihSMXdYngjBXZGNrdoFw59JeJig",
  "key2": "4LgXQASNNAm1Mqqqa6SMS2xBuJJneJfdTAzvqc5qRP7poBSSnwZhJ8KXNdaD1naD5FS5ZbMxFJ6WDhzTZfhDmwwR",
  "key3": "5VsGPvuEAfa5KihMWQPD3xrhtVbDZ5W3TRrFDye6N7tdHCCycyipsFjyBUGopwKnEYmJpPH9Pj26Qvef85cDo1JG",
  "key4": "4KPXGX7p5oSpENhWWkF56n9c37rjetYxNj8cin129gAphAwrtPpKGNro5VX6bL36SJshZgmBqq2dexFw7U5DUrDQ",
  "key5": "5hzpxW4zgtrVwLh6HeddHam7tECQ3qo46rymo61HLAdjPDTZ9mDAKFx8EWxA4zU2DCAZYgtMAM6kwFygK9uiMTDR",
  "key6": "5jTbaM9t6qEdfVNiUX38z6QSgSW8gbYSM4BB4NvnokiKu72RBtpbAmqMHWyRZUB9h8sUKaYzegwPiEjjRHhCP5f4",
  "key7": "3bdc7m5M6bsjosy7FLcxUSJ96EpLp2GTpv5YePFSV6KzUbGKC5c5jdSTbKHNz8yUoNSjKbexrd96cFbbM33FhJ54",
  "key8": "4uZ8RYroJGVPTUQaVbXUZMAKhYhfb9PpKSJH7jj1KDzx5J4p4KLWxSnZ9Ry8AqTiuoDyBY4nMMrWUiGTBDW2eQcQ",
  "key9": "5hEiEeJinATSSoDVgbCaP8PbTHNGShCYNwQZuxjzs1k9b3mbmazPByKvfKePsVmgKyXR6CX4RgFvRkNUYGRe9nd3",
  "key10": "3GYxkXfjcqFpdMJZz55UXniQizg1bi6A2qVbPX3TRj6QFwmgBtiM9gHQ9aJzFzbayMdT1mjZAMGHKZSqWA9pAV5B",
  "key11": "5upnURexLNBuMV9Ym1btxR9hzDu1xnTj8mkWvVPB4oBv77WADXWD3rErwQxct8SzfGxuX9EqwujoiBv2pjaU2W7M",
  "key12": "425Vsu2GCYUaG3gCtTHZXqadHFvqa6uuhCi8tbundjCsbUYqp8umfkWX8fW3zAQ3TLZ8e28xVnd5CBpQeFjDrsUm",
  "key13": "4Gr2zZ8vZvWHFkbkfGj9R1iNXJSr2Hc4jJiR1KNWgJxHoL2p6LeZKXQW6L3WZPkHrEdB4ZRZEQUDDKDHi1hWAv8k",
  "key14": "4cUhwLKYbvgBB5gVQNqYyXF5hkjN98o8iJokBiBm4KcUaHttPQJNYBKuZrx4P2EmWwqbVhSNzyWC9kafyZMJ18MN",
  "key15": "2AgJk3stReZCVYFXsxmoitVRq3T1kMnu1CyP4ayhmcrMDsRBPi5dVy2HTvNEMSfoHHKE5wQNcuuDdfkm2uij6RiR",
  "key16": "r15vYCdY9jwMg83bE6BwtVWt3AxJfEJBepetGHeLnWawcevYP67hNwhnbAS5vq8JGAXSi1BGr4U2QqKutYVQnrt",
  "key17": "4wmXH2xf8UMgpQSY9VGuKsNonsREKXmLV5CBCBYm42bWzXGNShkMX5qMm787YApDSTydDqnKqsBMeprBWG17Lm2D",
  "key18": "2ds3VY7enR5UaV594M1ZorNEnLySAFdwBM5bMEx5gsNR8L8fwdVU55Fnzz6wpHFwRPcWZGSEH9QUqgLBx1SVMvWx",
  "key19": "5bTmLNRWsF8QuF5yPLkfwNpwavjaXBnpYwGcTvB3JeLCbwsz7t64FL5FFQv7kjr3Uoi4euEiorENv9S8YGFsJRuc",
  "key20": "3cAv8U797cpLUsKqLjTtyhs5HYHGutiGpJchLNECZ6BzrbGmUvdktUMio3HHpzpc59fYFJGroWrxrJwmxr9R3Tt5",
  "key21": "4qYr9wbhyqxRnnRMxxhRKUWS1AjHfQwW4EEurywv6vMhnstHvqXwRD64Y51RZkorYEbE55Fg9Dshd5wZsEwC1ciD",
  "key22": "J7mr4gw6Vf4VUAtsSLnv6BW4mDdUzU4e26hqPqnrzPs9QbSLfhBrkCuRPgbCvsJsYyjdF9UnQArm73mM44gqTfV",
  "key23": "uADoVhY1yjMyxs7p2aan8LHR7SRknt2gysLcw2oaACtvnHXE2U5Zb95fGQxfzwKXDbCJap4DUtaiz1GYS2Xxvom",
  "key24": "64Swc5P3Adu7dhwFLTU2f76SRBSAiWR8sASFKxMP5onwhJ85jz9g3sbJamRerXFjzRuqRLdTJTkTy7dNQ9xBwsBs",
  "key25": "4PpFmM4VBdAtdD2njUfHbr8rmJ1aeUCikYRowpQSzSsvbLsTPtupo8db7hbshZyWCZFZoQ713fDS3CgqhZCifQdG",
  "key26": "5Upvyxnf4ihpH6miZ764qeTiASjEjhSY2hMQnqPt5n6LUoUS8FCbhGor9fcuzFfp18vnrrLmyXugPuhLv7b7wT9F",
  "key27": "21YvA2yuGCYrSUPWsApaF6B6ELSMcQgaZFjhbLo9UvzBNYt9q7HqQYV35ZiBux2oA8uXjAeHt9JSpscCjiXvAKT7",
  "key28": "2KjhEycf5cwxkKy4gDh4PA5Km3nicXSpiQNegqcCwD65Ua3YCqZyMc6RfXFX2SJmPxoeYNAMvTMPX8JdhdScQRz3",
  "key29": "4shsGNBxcV1mopNV5AFHDJXqqdeQprHVYc7gk7PW8o51XiD9RdCCZifcwq3gkjuiXFZwb4FBSvV91YZhje8Dj1Ht",
  "key30": "vo5sAjHZDWF6VHdNJRRVzkTGz22w4VMn8CCs9mRpu2NSWvopL6rG5k44yKN6AHAi4NidE1uqAWMLjB3ZVFSwwaL",
  "key31": "P3tz3RFv4UWt3Ggeo9wLvTpGRBTUbNx1mjcTBrU7G64TjTW6sZ1GEUDq2gVoZHRtEVbBpDHtdvYAjaqkthsKtKY",
  "key32": "4YtGYKDKsL3D9b664XkeEBiqxQGpR89QWFUCzzC7W4sUEDSqsVFXtY2zWATw8KKSQCaqyWiocWwoteC9mKr7svPA",
  "key33": "2V8Py2Vdbo2cQD3McWyZRU8BufFBthNfg834zGxyZNctVSxL2yisBwcUhK488tpmbGgRmXCW7hgUwij1cd2mYyYp",
  "key34": "fwmobtKByuww2BWJBh2H1Pvpfx5qubc5VrtFhwbRkcCEiG3xegzWrVZZf2QEHgcinkBPEhQDkzbhoVKCtkYNRYv",
  "key35": "2tcR6Nfhy547DcTHoDj86U6ceRqyRBnKhoKRwB7iaWbM6NrRTLSg8oDEn13xWeUNWX5JpSDmbh5nMjU5wSJ7DBRM",
  "key36": "rHEvnE5ZCeSK9YtKfi8C4BEZQ8oaXBSGFjJ3PA52zvBLPXY6RDoW7awikH7BpwwDntXmMeqPg6D5ApRTH6aHbBF",
  "key37": "3Khnh5hkKqGPMNmqtGEUUtwfUSDmXhRQtGat2sMHec6gAbLU2VDoGguUFgaR1fv5VDHKRghCQn4GYG4fELf2DyPA",
  "key38": "5tcSdtwes4T3UH4nGxBNxuYcmxR4jJSjbv7bsv5Fb79Naoocvyf1h1CUGBZdDRHf65NAS58gZhXr4kmLTQeqs3QH",
  "key39": "5cuxVnW1QAWpvZAaKTLnvsZbPsmcdUTNLRDZBgoe8Yjiw5GUzNdpya3oxQMv9mKMcjyM5h9aAMcgHutaVJbDAgM7"
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
