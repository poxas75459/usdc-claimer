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
    "3p3NNDWWyNY4C9w5vqGhYJnp2rUurkqDzohfcYiwSTWkKSgjD2fcVxzCKXrp2n9jjBXx9Bbd2aqUigMfYRv4cM3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27gqP7ehgLricLYyf355vEF8hcZsaJcom3xvJye262sVGfx88WV2iGjhbn8steQu61YM2G41Q5346xuNG4frAmhF",
  "key1": "moHTHCphKiz72S58hzTWTQqiNzyH3ExTxmjBt2NiYArQNcZzPqhhXZFsKWPmVbKrsKQA1UaN6CxMPisRoEtXshA",
  "key2": "2kCYPhMgsJZoiC4x4mR3ASGiY9QBnEkpGQc7RUBNX34kqZ2ypbACnUZ2dM669MPcyqrGRjyzyLjQcSC6GdHsN2Ku",
  "key3": "4PPeGYvJc1sJNQggHb8prifoNqncLMa6M3hPwzMoihsaP9CEPVWj7cWgTocbUpQMN6Q17pCvV47tHGKfgigq7ME5",
  "key4": "LQbsBo5KYcrtEa7kpqSxMQcuiE3xFR1BADTsLtu4wY7ur9mvJLTgenStmU8vmyUBhY8ZDGFqN8mdJ33iFeRqCq1",
  "key5": "4LiaGsPi6y1uGaCwcaWwMEvDzknSWY3iKKvnknNkVpbUEB8qL23bQwT2KV82C34w8RYZKXANxgr5YQXvz5v4ZkP2",
  "key6": "v5AwESSeZnVKPY6Ddq5ePhSNny5Hq2LYBrXw4UXWoLCw8Vu4F4hps5Jc1tKFieKe2vsQNGWsLsEMiSt29svUEbr",
  "key7": "yD2dmZx72fU74D9pwFtbjye2cFwEcJM4Fc4Ty1pxZGDnRdkTyCBxsGLPystXNbHpYV9wpJR9Gmhsx3GbbKWg9AU",
  "key8": "wcE8mnS3fTRrUBaQqMAAig37tjphaw4rwGpHLgz3Rjdd2yVmWF6sH56xDsM96WeHiaiA5mMGQCvsnpUX5vBEMb1",
  "key9": "65MwFb9HabtRp7XnmBVemsHFkZ3m2BkyJF9RN9tE66nm2WGAjKKwbegurc62QnyUNNpQ1YziDWEHAHWMopPrgW2M",
  "key10": "3NoiA2MZxCL3tNAbsrGq1pRJVWuBPbNyxqg1Juy5qSx2KyhW6C4ZjQa2LLC2HoT4pEPLCQYd8fqbg8Bp7dtBNxAD",
  "key11": "3H7CvotzsZ3mPDQcsAQqAPVX6ZXVn6mquiWr2CvFesq4LUvNPiPEVHgqZjkAXf9Y29nsd3QnU3q8ETitxQsXzAoW",
  "key12": "3QVY9Bk3Y94YJ35kEtzuQAuyT4sutSNXLDSHMufrxUubUCHK3Z3J5V2QPjxF1Bs5MzGRZQf8RtwyJKQZDxFEX497",
  "key13": "2AsXx44SrjzX9XdcspRHoVoBWkJEhGqQtWq3T8ttRt3kmHXEA44N4FPFpWfhWK99p2rYfrAsMwerYL1MwivWSepw",
  "key14": "4RkDNp2o9oG1bKq2PivDerQWQGfZcjZirnXNnA8dNLp7wFSZiaJ6oEpXwBJYsB7kGebtf9w9F4AqmzysPbqSZ1qh",
  "key15": "3UCjJqgTMLXekzYmJdjk9LiRQG1UszNHbABbcs95eJ6Y1UfqvD6Re3BnqEahM6xyU2AMMtHpQojAPvHoEkcPJtQ6",
  "key16": "4nAgXSy1Ln6x4BdwVekLBm8k55C3Fa8oJuZ3knfhMr42KwRz5hS1HKDk3e7cw7pz93yy5r9E3rzKZFTEMZ5yPziA",
  "key17": "3EnJFANhYAtH8WxZLVQnV5LVBynTRj8nLkzbkQJWyLzYGaTYtgycPQim7aiv7tAdoFZBephDX52Z2vG7XvBG9e2K",
  "key18": "3hXmJobWaDZbQ8R17nhpSaTsatkggpupkSD7i5v3D9foFfUcrc36X9eYnfWypQWBzNwe9NMa86DPJNuPdnPWYUWX",
  "key19": "5vhH5iiNQW67vFYwbxZX7V5LcfVFQJ9XzF6xg8UZaS22WsR7UPi1vnqcqDSsTEoYEBMX2RGJ8hJRvG1NFhYpVRbd",
  "key20": "2WAJU5GSf7UJQZeAS3pbBXDmmV2eGcK5e5TCPa2JnVbCy7p6F4HZRXwvxejnf79H3PZgzmmcEd6JU8stTEmUo5wK",
  "key21": "5Zgp12wW4Bop6rnLZdiVhsWpaX1y8SCP7VeAeBjrWm9y7TJyHfBMPr619k38pQFx9KCmJTvFxYSu5H2P6HV4qUgA",
  "key22": "3iLF2VEAG1YB1qgaii5Xc3oaYkc88hXjDSJn6Lox7hHZswEJfyLQ5L9xKbchBnPmwEZeCaYWEogb8BWvVWnfmgzm",
  "key23": "4XfB8JKhtyXdEaDggJZPX96sxmwR2rERNrJSFfRA2wbKpsxNMRiCvXHuPVJnW49w83yxqS2tG8daphLwngH45xCh",
  "key24": "3tQMPPj5TwUMURPnKD1XZPnVrAqKDpnxk9M7vmaARgK5e8cePjqVm8wmV3Gse4a52R8Au1mpbChXXP5PvDDN79Ko",
  "key25": "5s9utSUqZeohGeJBA7GFtgRQMezzTa4owSegQXatAbPP7XXRDmiLyDLTwNViBJqmjYPYV1ZoLiBAo4Ls4DL1D8ZR",
  "key26": "5vMPfLgToCawKzQyAEQRi8eGZYqXEZQAZNYLfZacm9SrNS6F77DkhC6KjB6cyg7WWDg8s4nDkjRNDufGdbuj1Scy",
  "key27": "538eDYQEdYWfYGcKbewFHHhqTSVfx2jWgMksYi2TSFBbZgsV9Rb1b1RGADPMjugLJkFGZxcMXvn9hcYgypiPCyEn",
  "key28": "WTYG8QYN8ca3Ss3ZQkeZg7NFuqtUuQf3UTZXyFw9vWBEeqnhpH2kXq35W2Xs46PmW3fWotMJo6xujFrAmbu5G9j",
  "key29": "3o6shDLzMPNUMSAvVF1mhqMetxCBMRQsaDpPj4hj2nFW4didFFDJqy2uPUUBGXbw2Qfkp4L89nmCKCdfuwvEFuPR",
  "key30": "5KTS2vcxX3ybs3TLUorovr9Q5Yj1EjTLAPX3FwTF25kGALXwE42t7C4RcotmWqaxMYPA2qWM5RHGWRLuuAGjemuu",
  "key31": "5U7yTtw1nXgUoWGqSwo8gbHqVhVrrcfne68FCjWGNhDkgxmyBDC1g3p1XzrPXeQrYQmpAH1ETUuPQsfh2SQX6XXi",
  "key32": "2RRy5TUznou3yLKeAkyLWvHzyrGzcpYVPfqQCX5StQR33P8VG2BAgzKVoqhuhhHFmGCvmYej7jgZ1Xgbpt7JeL9",
  "key33": "3benGRpH2bMBL3beZVYBN8Nh6sSNmrKYinXdWpKqPtfYxRdhTt3ysFFBWk1ejC891aPiKpJDPX6A3VKF9bpp9uq1",
  "key34": "37RDEuv2Bv7zXR1wEMz6EXG1CbhpzmS2qeD2UxYkZJFEjfNHV1bqyY9QDCrtk3Qk7xhy26B4H2vQia4AR9i1zk1V",
  "key35": "52krYXpkaN7Do6brYicRwLb4kUXDXohBwtPLbN15uAFcv6t8oKHeABpnxT6nGdQHvD6K8jk7acoyj3PJ7nTnVhcm",
  "key36": "dnRTSdF7ZcsAL4rzzHCFSYVnXRMZVPLfMUt8g1vV8XJfjWQRhzQE9ri64h9fhZSVAZBLn1uRhBjqcFkBntsmSTi",
  "key37": "5hnVteZVsPoaHCZbhFxmwzeDkw7412WhHuS2WLzuXTwY1gSennkBFvFGWAMnnbPMZx2htCCemSGPgNrSbRzuPLxM",
  "key38": "5Rquo1fMgKvCNt1jXs7RrUWcBYfutZxji76AMdR1mR78tFekgQQxHkZNckdkzMBfN48jA5hmrCYHnf1RjRCsVY5E",
  "key39": "3fWy6WKCuNbkoWi8WwRSsUxarqkqrW3xeA6q3DJiKLuRP68xVPgwENiEhzAk5pfJ5v3R7EHYRKTMyDWwexAQgsMf",
  "key40": "27XqkUNUr6U1KMCjRyYXCEXTgyseG15exRXawYJYbYm6FN9tQgdkNCsME2qCm2gj9Gef8LVmXhuBvZy79FGnmMoT",
  "key41": "A2KNkpMbPBGAtWteyZBqKagUN7DF5ZuFrCRKQxrSueeTG8XTRuD9RoUTTaBSJb7B8EWuQkXWtjjriCxrTSW5r71",
  "key42": "32BsuV6UGgY1K3uF7hQ7wVjpT8zYP1b7PynZJ2M79hJ9dx72gnA7J5TUFEzWPxcDNniskBF3BBYfSaULmGqgo8Lc",
  "key43": "P7K8b4GwZMcngvk873kn75zpin2n4cGrvTpWMJM21HNPX1MHYU4kMmp1GL3YEwneNy4vf654bos8Ef3TbPCJkCt",
  "key44": "ZsbMapnbKq7onG4hazWSpq2gJ8fYxye4RMgAYWLy8Mzvsk5nV6xKm3jnPuQTKRfnmrSJFzY12XnAUg5aNLCsnhF",
  "key45": "4nE4bHnJXDraT7aUDUiT2VR67qSdZGRW3r2qgwPDgHLeNgS2QusaqEAFcwijvzV2o1nNqqVYNCNCMydtBRS2hfdc"
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
