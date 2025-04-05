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
    "54vYka5FBAcvUDfMHBy3Cv3JtchBRy4VyLtXwBzKr1ppgzzVwr4h1QdTn3QpC9CJ7sTpZEEGh9B9fzXCARnoKRTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sZ9Nv3rimCS2nvXe5UoYMzvvKCpjbfn6c6asM77jRHPD8pV1oaKqBnGmF1rF1yFmiJnp13J9zUozhKhUJ8S6Yqi",
  "key1": "3zWDnRMfR1gWiePoXJg8sPWmndM7jyUnXXXeSAYum1Z5S5kG1iQz31DMBVBcQ5padoGztLEncudHqYc47TBFtz5s",
  "key2": "hizBaQU9zv46pH6ANwWYEudXRiWHLuyu83j573uHV12vBfFQzgvaFrnACppSxZsgpRZiZun4q5dWGfs4KVULCtG",
  "key3": "4ETn5CSfD14gzivU9oPYssMFVCTEipGk3Wpw29EsnpU5LhtTEFQb27qXcJVRGN3UkCL3gedmzajXe4m9rNTezejj",
  "key4": "5GZF6hs4bjPsEf3pSAYEp5F4VuJZ1vKy7ocWF37SXH8mBotdtLomve9HMWKrL2RXrttevDUwGAVDTwFK3HSz63dw",
  "key5": "2EjXxam8APM698sy6ymoDhcrConwtxRsuEomP8adRopMzxP7WbaRtdwqzabP3Q1XNa6ZvVAZz3X8jtJrLE4azBNm",
  "key6": "2F7KR83a4Rh93CMhsV3q64CJJZxP4FcwUTPWpnq9ujNtg9ucwJrL8vTVw1WtSphU57AdK9uD1AXEgMbf21v12qVn",
  "key7": "5f9Ue4ejNTyihEjMM5MBH5QFVnn8swCSeSBa93HVfv1ETxx4s3LCbE1m5ygFmp4LRHsnXQLmc5XuEu8enrNMCz9V",
  "key8": "4Xkhdj1dfifot7azNuTU85uFZ5TPp1tbzjyKpNBFjZXZHzRZtWgTSkkF4AcBG28h3wUrKFent1EmV5oAVJQLcwKN",
  "key9": "28HGVwnfebYDHwvPoXEsJ3SU8KTpwsXfzGjyh89e8rDDAmUTdFJ5HhJ9PTLyxoH7C9Xy97Jxx4Rm5Cqgc9nd6ZpA",
  "key10": "Q9G7h9pT4oXd4q3ntaMnxTfuGjzSA4wCexsZ7qkgypKeXGtDsedbMAqws9YhqCPaC2suYjPLnCRe3SRHv4ZBoQ9",
  "key11": "tj8eToPhTKrKycPktTCcpE5j9Va9zcUfTqa2k4jNUbABhkYbCamfjsvBvWFc1tqdsCkbXKoHbJ9evGZpMPAhP2K",
  "key12": "26BCirukewHc9PTSaeWJg3nSRP3UYwv1QQHy9askwCrnvq7GVDxZarqwMR522XupGBmQ1ZTFVp3gNWR9YmAXat8L",
  "key13": "52LGw7BG18MDXFwTDvurdkKc3aKhmg7ifxQkwsuXymT4vF98YLbvo7enXjCTRJm49MLU8WVkPnBx1hTkV7Fv9vf9",
  "key14": "2ZVNauWBibMiTJsgtfe4wJ8rA4GzKPZdam3tJCjQt4WXx23sCZGoT3TRjRLUYKbRuG5TybenbzioeeLk62ocHjYR",
  "key15": "5ddj1vXKA6WZpt3kVAvDxURyE1piTrnfkhUpZogo1gnjfENyQg37P3GkyfzrJAnU1UERUcSAiA8r2LGBYbC1KnTf",
  "key16": "3ZgkeSFL55GoZfugxC8GPFKA6GJxvtEK8qbA1CisKmygrz4obZ76bsXy91tjYYjD62xNL8hYT21wC3uXQ9RpnHdF",
  "key17": "56iEKLLieYZXt5FJtcv656JtLGZtkVsxrkKwYpCtewmrbBpFJt5abzUPxbDp2q6hDBjv1LSwCfLYezZM3WgKovCX",
  "key18": "4jM8F88P6erLg1ZmUmDn5zMnjzsoTXxcchNocG5Z2JmjfN7tFc9ziWb4ZPUBPNgdwbe4iK2LFSbhyJdpsrKe3Yci",
  "key19": "5wfdtuN74Zc3ViNJjybzMAnt7rPViB3wdDreigUBCR1ch8EJeSJECqGCjTrzL9BLXZpzAYChyQChu9WtSNpBFCXc",
  "key20": "54m8bTD41n7hpeJTKGrPwWJQeYXUGcW64BALaM8oJKzB7i7P9p3ufcAWcaMbJ8BFPMfHkbuxoHSwY7YZQqgqbc5M",
  "key21": "rwXksJdQ9tuwi1jSEac3Xr6xKU6RrXbGWobFARDVT2yAQMbj4HoN4cBdD6vTak9PjFjQmhMXRfhfEgyzSjPSJF9",
  "key22": "66SjKfVrN6UE4RaC1tfdyD5vCHsNvnVxmPFshK3t9pwc5V7rrwPzWYiA4CcL5s4ndthTqkxo7zcRSMLnQrUv5H4x",
  "key23": "4xjMZaGKexsgeWFjEdVq6YVydvUP91xEAMAtUobjBtnjDJjNNgaDCEmjR8gvFAtGteJipKcMwEVv9GXPESBkA6ZK",
  "key24": "3rSPPgSiytGSmtZ53j4mfCrZHLoHXwB9ykLck4jE3GvWKV67FkvDpKVNg6J8sQtqEtom8irymy2zUWatPkjzKx3q",
  "key25": "55XkCqk3eKRuYt8eJW1ZoZhNUC4vBjRcnhVVhcru3EqZhAjmexDBwJzpWDUi8rXnsT86iCf1oB9Kh9SoWmaDRf8N",
  "key26": "3gGzLKwVenq62FLnAV5qQWYh7b2wYZhG4Gihd8djhkKzeYqL4DczZHGZHNFrgfAKdK9uDr18fNP9bk4w2ebF7t8q",
  "key27": "4HDVRKzR6YeFtX6FQUoagiHhLc4VHuATgfHSCxsaBmYpqMBhetecBv2sGM4ARtwcsLvmEYx3W9oFHdDJM5G4mm4N",
  "key28": "5DTvkLy5rtFpgJ7bBi5UHvEPwmgtNC4yFr9MEBMgx2ZSHx1eYFK4sSxUcAg5YmEZESp5Ndbho7Ctt3UfN95Cunrr",
  "key29": "3VcaZKE9xDSgCmdaCqy2yd2Gpb11Px7SoQDnVBhz8jvZuXChfBkg5VtsYvAQnExs5GamyQyBaB3x4Wy5rpbqBYp4",
  "key30": "5oVfc3fJ6qTkHqJWkoPu1R8A8d1A95Udg4MoxefvJUmTTovQhQVdgtZwuaemvAc8HwsARoC6V2s834skq3kGf8ZZ",
  "key31": "4NnL8o2fJBQmH6zywho557qiK8rurN9q49v6miaCeocekwRxsnwNJ3KQZeg1tr4RMhuTZYxT7sDa3oAygduL3D4N",
  "key32": "2ByFLCJHDgTGZ9br8iZKp7MER11SmbFHidZJqYrFTbMTL96YuLpZnc1d88xKnib8HRkDksLJXcFYAKjTr4A3y3Bi",
  "key33": "5h6FFmQ4vCZ9TVKr1U8hUJn7mPgbHUDZz1uUjVbeDPqo73ktKatDCX1bM1GF5ayLbkErtsNNvnj4HDsNnWvq94VE",
  "key34": "2CThzyu3tEY6KLdTerdDKkMGTgr8kr97SyFrWwMEZWgNewN9zBYDkPbjLfZmpVvRFUo9GSdQQa7L6ape1427idnw",
  "key35": "4oLXKDh8718v4ZcU7c9Poq8YBXw5WHCfoKURw5JQdfcyoogkkLCdfKyPpu7FFzBiCk1WeLi2ZkJJwG5uGBiwA71i",
  "key36": "DKimUG7dbKTJSsr9vg8bzu22me5RE7xWodthwMrprEoBWS42dLxGTBmVzDEHRFahEnVTRGda9DMZ4NGjqg7dap6",
  "key37": "2kZed7U7Lbh7cLvPVxVBCsTJB1CCfMUHMBd9zFKnWdLLgKmnC7Q1VwwctZo6t7F6kdm9M5Xka5HJzEpUdE5qt92Z",
  "key38": "3nWNrVhurSvF8FbU9V4EuKkCw3T3DqxK3irDGjNqxXPMAxTynD6iG8Eio8aAcpHrX5SjAUu6MXbxdDDmFti9VgzE",
  "key39": "5Sc84ZiC9Li7TYgGSRBiWWVstRA16yQ6MyZAZm2HDfV7jvpx1tohbw4upD7i3mWDMkyzo4MxE3dABTWjXmGvCFUL",
  "key40": "3CtWcmpYEssdb83vYmz9fVWCP2m9ae14NkHh427SCGiFKHGzL4Hz9fs86zHmLe5i4CURu5PgSTxa4G41iK9ZHetb",
  "key41": "5aYxdVcZNxBXCAJ719doDAtUPZiDHAwSh2KdedsYF77aC8CTULUPSnhiJTS1qVFk3ZeCyZdgAMrubRUFi4WvTy7u",
  "key42": "3y43JoyPhvvU2KcgbcMaWPFWgbEp1McMeLMUtCpWCWRjPyia9vQFf2wtDXCJf7CZv9LmL1V4UfePYqM2L2YwtUaB",
  "key43": "5vE4w5TuvUJF5eq26wZVBeTyekVXzUcb3dSA2phzGziZ6twhLjPLU5cGASz8cHYE4nFT3xpkNzLFgkqydx4vXdRn",
  "key44": "d448yp4NeyCEtGXyCnC9G3jVW38f1VURuDeReFSNW5eLG1EG9ibQpCttSRFnEx8fpQhMZy7Wuyi2cHvAvBHEF7C",
  "key45": "5U7fX1ypawiyj7tKg3gqPdkY56c3dLN3mCjcZsGxYi71PbAUTQEwRGPU9UiaT2F3q1ywCHppHv6f1fwRBW4tTECj",
  "key46": "2EwKEQdhVHsA66r9VGYgvbWaFCLPXJqVoztL2FWvUEN1jNWqxsuRL2dBERqUTni3D5t7BW6gSsbxiw86MUDrtBLD",
  "key47": "5cZSu9EWW1ZZHe6GkrTiRiEKc7PKpAczfrVmJMjypj44mq7oieusb5zS4iC3yRhCDbCHCA6eDt1KQ7snBXJ212n7",
  "key48": "4NjVEC5d7BbG2CV8zZrRjyhSdNGswuzQqBSeZgsTUr4Us1a56rthdwPnWNMKv3s8bfnzRKrFeenzCyVeaC6Eqqzp",
  "key49": "5Qv3xMygTeJiumoJX2M3rr86LEfLkk4h4Ubn3atMDZ8zz3kXtojxPZm6P6j8MgqwUNnGsHtKvj7o19WH1SKNFNw8"
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
