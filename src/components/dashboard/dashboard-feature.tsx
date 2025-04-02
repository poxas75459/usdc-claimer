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
    "3yjhUCfrcNqtZefG6awHj3NYUzzoiG6kYHCUPfyhkh2msVurBk6gySansA5y9nvXbmRfjmGqYsG3pEJZkiDJbp7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WihX2zBKuX5YuGUFwHBPnW5bxq1cKA9VyYFC5mkQEZc8nogn5VfYZjSAkxC1vyZ8D9UPhJdyvgf3RuJBnmer6Vu",
  "key1": "3u7PUdSw4ALFgtxrJBRY3wrn67wZfcuF6SSCubm6d7VSubk6qGi1YLUEjX9YQ1mgwNRpVj22c1Wz7szMrPf8fAPS",
  "key2": "2JNziESXrp51dRtPBXVC163yAxfd6zEC23SfBPJQMwFXd3NG51njZatpKpXYtrWEuTPr7L92sMkD1pdC7ApPHgtS",
  "key3": "3n1pJMqFd6UmjchQTStWseogdemmQBjAJ8xfseqxcXLc5Bfv1qFyyLjt4Embq2tpYvLFL8FQQojjQiTH3JPVtzwt",
  "key4": "5qBw5MCNmmdRWGCeDr1GkeQxRT77iBXD3SkvRnmD8JgGUM2N3oCT8DLV1nM8G5ehfP2B6qd2LE9FdX1zJunjWYaQ",
  "key5": "2nwT7gFAruvce39jfcj4NQeQRkk829PP3wjnyABTHfupobSapNS38fRbM5yDY7NTc1BT1xZosLDCHkHCmFYmcBSq",
  "key6": "VraQ8SaXQRZzyTMBgXy53mysgbFwHH8r7bzrKXCy7wAW2tP4eQhmR4rDb84P1hqTPNPcWEQ42srntmbfw3nwtqN",
  "key7": "5HMvCdJo6czg7uAcsHevsgAgDbmTowJ9xdRLNVdknNQLQeiE2zLZRd8NK9NFq7BX715aoCjktwJRqoCiazmkrC4m",
  "key8": "3gfL64YfZ3v39fDkyNsnuGJiexAgNLTTL1hSYdWz6tD3J2qbjZ691BkzbA1NCW7yYH6aKr5neTAwVo7943wg1n2D",
  "key9": "p5zDvCr68DHHSPgE7SvkK3DPh8U4k5CzwkJ5tyPjZhzaXLNRCgH5cHX7G2RQqCZkLnvvHXDgBd9H5LpMwyxwDjx",
  "key10": "53E8eMPBheGEFo8zmu2zxZLFxVEFFrzoeaKccJ9m5vrM1tMa1Tx8TmChg5xu6YXREVTVKFKPxEe39fmdse78T2Q6",
  "key11": "Hc3RqaffrkjdAwWBwgb2QoJ17dnhALPDeCNptmdP46cFzd1YnS7witZgaMhCAXNaJSZHthSFcbngHt5xuy4XTmB",
  "key12": "3YpCXUBYxrxvSHaJHHraihTGFCmReNNhqARRMzFGuD5yAL6KBqgHwQYZ43h5wa3WHSyAAkAtXz3ZPo7FuGDNhkuk",
  "key13": "hfxttT7FckZ3H2wXnEoAGytKP2T1ATjhr1yJxXekYsGJ5LaJzg5N2Bzt4Uu6wQmmh3nj3w9dL94WSp28dBAwjNp",
  "key14": "5z9tYP4CDs4uTstzyVB6pAu7LSM8ARyhiZMF9eECvYYtpo8yzEvvhZ8LkgxtKs6EzRVfohAjapGfHzKGyX7iTd4L",
  "key15": "4MpQr7JN43QV7hM4zPWGhDr5KiatZ9EfJjNCbGU9FETeRL5q1U7YpTkL2W6GFsrCg5ogvcPZoxudpRSmYmHzj3fj",
  "key16": "VKtX4LtwG3Md7U2Mqa77SU9KFX7sggZs7Q7PcfTq3arxc6xUYK6vSEYE41QEr6GKo5GDRPECXU2CbhSJ78TAWX7",
  "key17": "2btnNR74oG58Sh6UvyniYUQKFDwavH2pCLGLHhLok7Bgvmr8bFfTp8mETAKjhbnGyo4qpVu6n2fotsYxCPjRu9bY",
  "key18": "3uZepiFJyuNsnZoDFWt4uMdUPaV1vjMWrrtn6uBYfrzXKkLA6Uw58TjpGvhF9K3irFxHZ8z4tpNTePwS3GmGVbrj",
  "key19": "5sfkShNRf9RgW3FyTbHgLcwTRvE5iRTs5hJhC4vSgFV8FFU2uuTwVu32QAJ5HQXT2DokGnqyBzQRQaPKvfgpXX2v",
  "key20": "tHPtaDfMDqeKDfCu74Me2i4V68aKWkUn2Ae9EiAjF8aSV7UGZsR4ywFZkH56TSUHS9zewiwQiuNYtGFNNHqyqg6",
  "key21": "2V2NHhoWtGhgVV1ooumNzVYYVEB7yZyUpUnePgKSkSimThSp1avpsPHotPxozMgYpue9pri7MZoCQMM3QgtNWodq",
  "key22": "22kJvFj4GcjNSUEKh6bBJKGgRTqLshacsGLhc4sR6QUdJ1XMVtSrdK3vrj3uBtntpEHz3aanBktx8GjbnvhUcUMk",
  "key23": "5ZF6X3TTXvq1uPXfuTg4fgisFaF2qpRkC3o1fg38hdSNpHKWxhAWSaqvw3GLVpzB6nuX2PHrnxmDSNjzQdgLB734",
  "key24": "3TTpXwEBSrZRWN6opLjXWwH6ajW5D1ppeo5UetjirS5uHLPc3UHpfBMBtDpP4YKtvM1wYzjG8RN52fRtCNLcpgXK",
  "key25": "rUP1BTaKMcf4X9TsQTh1d8XuEEBuHvgh6ybP5ga4QkPuyRn8CXEerE4JGnv6bXxCb1aAQJG8ph8WUEduMivHkwy",
  "key26": "3EM3CxiTtviecioU2GNoi9LLHEg5ErvXdpirpSrSHk22Mb1HMe2Z1sJLmhWM9vtRsHkB5XH4kwyAXsmi2m4kkTsM",
  "key27": "6VZybEmKa34UTC11ALVXB4zpXiHkZCgYiTW1i4MYGjnRxnX8KpxEbgXQDLDWeoHhZbkbs37sNdznJ9aWcEW54CW",
  "key28": "4anFUDE5NASCLWSpFURySqiJgMGABCQWX32EJJsXS52TfnoQJfejZHgdZpxMgJgL7PcqaL4zRUhmXeB1smFDEhUz",
  "key29": "66dm8eqgnA3FaMNvZNQmuWN6r741LCxDfk4vGyNPXGbYverbtPoh4GZBq6Uhj1DxCD1Xcj6Esp28nHyyQ9zeXQ3D",
  "key30": "3iaGKJsG2q9mzzXomz6SndCyvp8KeeBoLPduLK1G1sBx7L1dQyLrg5g3Mbr15F7N4ZsYXmordERsXShzWeaH5HGq",
  "key31": "tjSvkwhzG2n6veTkz5wJEUQPBngJrv24wmfVm7RDYkU3E5Bsin4QwEbg8f76YjnLcyAy3BFV1qNrLZvip5pds2C",
  "key32": "64FF4kBABdEEnP79BWccdKJaVq8kbtF3w3NstVckJr8EHbwXKNKmnxGUkyDmT3UbzLVKNMjipXSPwNT7kWSuxUVb",
  "key33": "EnL8SXEepF7eSBAYz3Z7pcXbFXAEZjzt6CNSAdCSXqUjjQF67Vp8Ka8vyvZJpG1ifa8cbiiN4xdJsQFkGPu6VEv",
  "key34": "3h3sjd2YKBxTeDvzfuMx7U9pswxQBcicts5taXYpuJx64roXnQoH6Up2T81MmMKKw3WJhWBTLVRa4TKETpZu9T44",
  "key35": "5qPLhMsJN3oMmHbxfMH4x6JSEU9peRsgndrEvfY9are8zpDGx1SJvm25KLfQ3FRtzNNqrtuSdnxPXEDAytKCcDMd",
  "key36": "d46ThkCSP9Zfb7C3HkHKLeEYAh1uhS2GQqCgzGorpgXrVPLZXU6AwwFmAY3Bd5bjed6u9XY7qdf4zE6AvkAoeHd",
  "key37": "2bdRwcgi2wKKxWf6nVQgpHk6UsDoMt4RJf1gG28thU51nWCweM5K8XC4BJHEztDRFBUpKo5BbjYCd1oyNGGr3Sqo"
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
