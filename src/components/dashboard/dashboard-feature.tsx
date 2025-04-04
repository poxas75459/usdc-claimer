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
    "p1gwcdXxbhMNCAtJxYDoDqptpZQ9kiYLBS46GuExP8S2NiAbKJwwsAq8Q9YnFeEPgtK1Zd5EXefunT4cj9ABLo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZtbPrN5Sh4AShpU8Ev8Tc6CMX1eCKfkECYLU6MPkKPpZNMpFu4eUNdayLnoDbzgjvepjNhJQNyRWqLBnd9PQoF4",
  "key1": "bp2j7deASDhd2WMydRT8juBofgc8YFqUGC356vmqxWQ7Lg2EAJHM4p1qCXW5RtuU79evKgR6RS1FcGtJUFGTngS",
  "key2": "5xknp1Aua53GAMsQybr1cfj3rksGZs1UYPZzSSwsh9EVCRRyXZygYyaG712TnN7fGurwiZz3UpC3j94hMZtoHgVH",
  "key3": "52AQSDjd3DFn7wn5gLPyFAduPQXB4XoLkdyJaon3Wa4wiri2eFFEywByrXnNtpxuXpP77F8L2XcvUePBcKFLKFa",
  "key4": "47nNzvRMMrzZFHiV3pa6GwNLNQp4KMMZ2Y2nqEJUYnuh4Ezx2iXbcwEAQJiPC2VSGymzXGSem6sAkKPjxefdENKV",
  "key5": "2Fvo8z4DKRmYdQpmf7RboKrp4cfsbZTUq2PZKjoiZkuCtfkNRDYn259NqbesAH5ULFVfYMc7tNgt8xbZbYGJaX8Z",
  "key6": "2hyku3aeRwkSvCoQ9WbUkGcHJ1ySpLv6FXQRiikfgJ39wDWgTgGKCEN4RAFsffhTVTs9duYipCH9z4GmqNmfjEAk",
  "key7": "GrKHjAyJY997YKEyjmbZMNxe8a8H7sqeyxiXkismFJCGgzA8GgEMMvV8rse4ke2zqakf9FVb3Vf67U5UKoukDJH",
  "key8": "3rrDrjLE2caWEqAdb7sDrDyyGy5DFBJ99y28TJVnAZVUZWivDNSfhn8LvpYUErBvkoVigz4oRnuK4t45BwLe1PK3",
  "key9": "536PsZjB4idQKa88e9rJhSX462UZj8okLEvTVPsU3ka8sB9qQ6JWojeXt6pXRcnT8NiZDXu5bJduhAPUqnwEPzGy",
  "key10": "iQzcLTQqxGt6UhWWUPH5kjBuCEocTgnsfFpxrZxxPKjz2zMvEWzj5sDepSouZz2x7Y4vrnYWnFZx2rkLzQp5omF",
  "key11": "3wzkq189PY9vue4xW8LZs9n6RnyXwi1PoMfVasASrMdzMzZDZezoDfnMYJETN99XRpQzXGyrgMzFptUVWC9uW1U1",
  "key12": "59ALTzJvEEibovHSyC9nK4erU4w7W3qobr4pEZiWiXmJaYWLV39pXMSKPPEXndhBwM8U2UtjSy3SE8LGbnpXXfya",
  "key13": "4hQqRe3jsffWXhcQqsL3zHfApdaVAokjfFLzjKMpEh6uG1yHQyr7E7YMQtspRSdpnkSv9SzARdXW7iirDP9K6ZaE",
  "key14": "2rNV7G5ptAMHjECsycnyh4ZUwJCNEXNoiwg6S7yTaFm4q8E8M588btfMHRTophgAJadt8ktqqEWKBADh3azHueAb",
  "key15": "2RvpMGBeVmvqtzcCXtZgudWaekpUZTgooQ1WQxfMwfBzd29Hbdp43xhzykiWXWQ44QDfEdnvFMPMXdt5i4HbBsxW",
  "key16": "4wK3ozLfdHoyB2t33F2mvJpH12GNgQ2bTDjddYZcZFj6gYWqNRTPsAPJpwiFGqyfS6XDmaVZ87bwy62yk7tR1p4p",
  "key17": "4ii3ScACAFbKYEAi6AHsgHPnRf2CiP8Ped3XCxSUido6bVBJDwx8reDp1dnJhrQtw2adca4z5rLdtW1CKk9DqXV1",
  "key18": "5vqPvm3nzg1qkSTgr15mL3NUQWigtVjVeoF2DpKqnmSrUn9Bf59tgUDSSqUwsjKvx9HAjmHuxiCEXUbpHLznZHsG",
  "key19": "4dfuMYDkxgJe6JkHLaW2h3Uwoy1XvrbDvSHtA3mcH97bUGWain44HSNVLZeo4SjYTUBvAPjGtG2PG4Q6671fxapE",
  "key20": "3FBg9rJcvXSMa3rRUTVjCa8Lb88H2gLVVeWiagGrYRs76Ai6AV9FmmMdWv2gB2NXqxHMfyQGSgQgV6JEGscpDs9k",
  "key21": "3iCX4u6411hLUQH8hbkesyTgrRo6nv3cbEBaL59cGoN2KeNCkJ1u2a3xtqfYE5P4KMdrMahBjxRmU2pcAsXv3PRP",
  "key22": "wVb2N8kmoodFds8QSJ2n5ji7pD1g1C4Tb4NcZSyEUm3RoJBBwR9FgUpNGYAs6vMGXAJ6j7eTNwMR8AN2WY3XDMY",
  "key23": "2DiwXH2BVgH6VVAFcVpokdQuiaJGC1dC1jTeVqWGr6RWeTUWjjPZ5fiDw5dRAYMinJeigRxccTg5TeMpda9iBGEr",
  "key24": "4ya2Jn6ap3GZWissfedZnbfBPcTeX4RK8pECXeDFtG6jj78izw9YxTNS6r3cec2JC2MQL65Uwbt7ZMNVjKCZRBkN",
  "key25": "uvxPjr46xwVXrGGUudYwKAdNfDXya9Vo4dbXyja4bMJyNt1pqoUxbyRrzdU1gJw87m38ZyVZ8Qfamt6etEeCy4G",
  "key26": "rcd32ngkU2Wz69tsEobBuv4QMqDA6dsYCXPWP3jD9bMR4HhXbJf935g7XARc64viBwWzPHiRhSYLtVs5AFjJ7LF",
  "key27": "4gpThNXhAPQwnpX1u8voovw34srK6doFYc6VrqTNfdYkKbxp8xa16tmr9jWY6jhefToF9edGoNkNb3foGxT4Em4H",
  "key28": "36DFaC1p96HWDVustuCqaaNibG7951ynQyoKSch1dkAoA29X1dSP9BvxJVvszUo5Vxn44tCpezv6BMCL8FnAwEuV",
  "key29": "3vj6zvawcJd678xzoqW6KmxVczYC1vtVU1N1V8nR6amTpVDckyscggofNMfvj7VqTPoeNwcejPBNap4LLxSaKMwx",
  "key30": "5BTUd94goMwmFRqfq7zbhxEZcF6y7cmFyYemBzEEsnTJsmhP77ZqmLCX7rajWSoA9AwHR6FLw3JuLXQwdJcyKCmL",
  "key31": "5ZN3obJ4tgCXHNDB178qZZf5nszhGZkND2AbSHQf49He1y7uEThwdgqYZnY9xf1FGLvBFyWV8DzVxa9W5WFBibBz"
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
