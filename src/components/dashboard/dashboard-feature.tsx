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
    "4xBoEURCpT5Dg1pG84Jw3fttsLYahHkQNvk6NibxZZ1py22ncpvrV4LvrDfZRXQVWdyuvcDgMFhPKw3D3mKG6nBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iTFaELpcabgsiF67A7HXJQnFQ1b1nEWPPhZj4t9T9iyRfmUBeLRHgs1LK9epzYZvtR1kBrj7QG6h1MWmqYQEnwM",
  "key1": "eJ1WAwczrXqRGf9qtRDv31RKDXD9sbQdopLTJ3ZinXcquZt9k1YJfFtAuLkmr4VxrU8EbmHHsKWqKwojBftmKmP",
  "key2": "5fFJy88PGXFc5BNy7EENSsGdhTbonZELWixdSjHjmiaqtFEWQKpVwKkKXb1dhq5LJTW5fW4tuaUdfH66dUsc5XV5",
  "key3": "5nXwTJZRozvKEztXLMqu7pM56P75PfCrUFSs7m8wD7WwB9WGLSX817jy9aHdq7aYZ5PxPPSAXD5jrhHQNpEfGDch",
  "key4": "3RQWC549jySpAytevArFFYNWConM25T3UWPN5zSidRY3ey8P1kjoFz9RQvSp6q7pz7GDAvg9pCu9HwfQyktbCi3R",
  "key5": "3cri5efFCSTyPdMXY2WtNdgjh9PBNWUAV3Ccoe2KnwG1KYRiaDTG3FvDhaG2kHexEY2oVmeKSqXUxgqgUbGgrfXS",
  "key6": "3zEua4av3yuaaT1rZAfomnkeNQkeFpHTAhAGMdZYbJbx4AJJc2DtfYqXbdtVPgeP9ZEQWXmHWLQwPamzDFSUwcZ1",
  "key7": "576Q9aJHoicRmtMkSdf4LyEzkyakvEhGhmZ2WfVF8pz4gREJXmfxaFv7TJczBEkFksNLSH6EBTtYVxkDvstMMAX7",
  "key8": "34FLwSQ4pttZ5RCStBEdyUtM88znLrqb9qSeZpus5dFHndfQmqgdvEWvtwsSDuifXJEdBAK6ad3H9rUbtYM9LxRi",
  "key9": "CcaW7T2zk6cRJeBBPGZPcm4696AuJKNgUoM5Y1fhypUPKtCfnq4UWwojLrpzWLUY3fn9p2Ab4DGS9A7yQJc2o41",
  "key10": "5XKM9n8y9sxT7XbGJckA5rLUz7ux6eU1MD6w4HibaL4PrXL7ceiJS8DMw1bQ1vf6LiYK9V7H3oTTbnY59mALCivV",
  "key11": "4Z22G2Czu3CcksaxZ23f63Nco5UrizYgN9mc7soh4FXX8Y6Lc85UqS5cztBHP54nsu3w3PW1ThCAVFFZJ8Td6o8Q",
  "key12": "54vrmh59fuiG6UiQ2CXe22Nb5Ya22v6CkoZ2tM2CpL34qwf1KxCmXa4pt93M3QVsKGc1CWVdrw4m1uba8rAWmGkR",
  "key13": "3xd7gQyEnxV6VdynFRAwMKsPpCpP8XkAWmVRowCCxBJ84kApAqoJ8ZgtsbFLwktAkmtMeX21wG3vVL5Y4zoyKPsd",
  "key14": "3kNVo6TFKkR8LiD2AEpftj6n4vub5BpHFdm37BekU4HBfGan8pKGjxjxJ9rQVXsVThqTgL4B2iTcpCBPJPU3iJP4",
  "key15": "2yWVPTksV7U7fa1y2KN5r4yW2qe39DFirWScsfrh3hq3Hqbc19cfFnc1qd43scfbfdPkySfmCBuMYS3vtwTg1dAL",
  "key16": "4kWbxnioZo4Z1c3xMHxW7gyVEu3ausnAHzPCsUZKasGRE3WF6zmsT6jRSmSSN15kKkGgDP1Y12s2ZcKQruDLwQyU",
  "key17": "34BZ9FK8nwkKiv9rCkuq7WkZSphrzKgmtbFhrcRMWsf3ZYTp4bHXFpiDrL2k3owjCp9uXvGMXhrkQfHcoTYhduuh",
  "key18": "2HbpkG4ixFNvoMmjB4tAR2UXTTj7LbsDttZwhis877K64UbXbyhksPsXTtkUfDECah14JJk6inDwtZhVSGrTbq9Y",
  "key19": "2ErNzcVHLeZ1cqP9bLpLcBCY4UtipDH1A7TWdjye2tPUio8EJjWY1aXeUoHYMY8bYATReRad3nHX4a4PwCJEwFhD",
  "key20": "3oowErkFjsUvHNrANH9X9yo2tD9UTSXPoBzMUcCUuK1hG7BHaakedzogLsBLA69MSu7qptwnvYzKsZi4CB4PWuyB",
  "key21": "7LMir5L3quNYNvH5nWCzDFST9mmGdcYfTu6xd1FBmSqW39THFTobn99vzfBFBRMLnXSpfs5x4soTShasF2BhLda",
  "key22": "2vhaoAtuTtpGcND8z81w4dLqMrVK38yoxSijmgp84bevp94MQoDgHxi38oKRyVuyAtnc3g3rnuhjKwn63FfkimPR",
  "key23": "3Qa6UA7aZe2xR11pVTa4G2ZhdY9QrgXYCY73cK5JBWBzjSE3AKmP797eYmwDbWQeFmuY6dr1p26BgigMQwXc5VuA",
  "key24": "5Bu4rQv2YiGgtSADFKDMGASQR8p6zcJiTZXBzH964MHfCuUhmoko8skPxm7ctUyYWKke3y7zv2M9L14jdPCkxaEw",
  "key25": "4JgUULkP1BC8Gh3wNBCReMxa8sbUHiwmQeP689yHKKo6xap18Tn8cBohoXDbjz5LPe16bGsKAXHAiL99q2BMg7jL",
  "key26": "2xMfY1ukS4cLaqTqntDPwmwsWzcbRt37SUXphBQykX75VBPU2w25CFtzY3YCLHGUfHjXPdQ3dL7zUfvZ324aUdbn",
  "key27": "2nfXZh8YS5xB7Rp1a6rKt8L7cRPubyogfbBumkLbtiW5yuwqXb8QLcXWxJe2EPDR5rRtbDhBX5bmz6KAT2M6So66",
  "key28": "PMQvhcPsSZw6TR6kP7nfqNcpXHqJeMkkkoiQnDyrsCnU6PFA84z9kHkRkeQgsvdCKvgJfqiRygNebYkfueD9ksL",
  "key29": "22qp6gQjrnxbXXmJDwGXgTYLi5HyHnd4WjMoifUU5hhcKSntExfdcETZrnYphjREoaQGEB8CaptAHcKqRo1WFDdM",
  "key30": "2cdFQcLLYrRLDrku48XuBR4HC5JofdFrvDWioEya7rWiXAX3vvUAxk1CX5gzFifqfJ9eJzBMuXZnP2szKZE23JLE",
  "key31": "5Am46PK3Nz2TaZqtV9VtQVsXbgcYYkvw2dwxJoK8gzKpd1RVsNVU6dWdbKJ9D4Mfs4DPGFgLyQkCsuHnew2MvzhF",
  "key32": "2stQD2pgewmv9f4tWDwsshfVFJzxgmaFvQMMAjMNUAdSsAKPEwzqb6wsZfwD4UoUNsBvUho64MJJK9mxJq8xqWvH",
  "key33": "saMJvFuhFwfQpTdFm7LEacSEfhVWeBp1ryVPcobErwAM42Bj26Nmsh9wDzLwSGNjDd3E13jowEcxZY32eXQk6WV",
  "key34": "25Vp4KggCBMYzqLiA1V8CYq6Bo4QXLi6F7qYtYxvU2gHTciNB47pmo5sSKMN7DQtq5dZ64LijJsgdCa86SPFkfwy",
  "key35": "5GdZzeFKGFFNgcFUccMdbL7wCHAitxch2WWk6gJJMyXRMug5tFusTxo9tjnTm9um8yA64uS4sN7Uf5ijQyqchatW",
  "key36": "2LtRcyDJbBdx2x65u4eL57FoqqVmpi2mFu7fvRK8rt9WwKtFYbVRdHU7wpboZPYr58R9n1L1zvaNnzP5iC7TaeSA",
  "key37": "4x8EKbSNU7Er2YHzM2TGd5V5Y5kLdYUzGbqDngm2mPLsVR7H67rwB3xVXAyR2xQ5Fbwurh1HLCTmqExWqbGsbYDf",
  "key38": "kW6V8uacPbPuWQnXisamrmZxN7Vnx24UagRhgZCHmnt1MGwn2LhjXheAmsWFRqzfBFTiEyJSSW8nS1ooxqNzgXC",
  "key39": "3RqUjmb3Hg2vqT5KL2dYWfLEuerEQcKJxj4jchFPs71XTavUHYSahdwtHifVfWDGbr7y8dvpJHf7h7nBcvuMHfQQ",
  "key40": "5pPaT1UC3qcXk4zrztG9FnqxSDeyqevTjxA4AzUVAgj6FPmrjTzvSGrywZ9pjkx1uCN9bQak8K3mnJPU38PbR6jt",
  "key41": "3cRpTr3S8cXBcJAx2EDi8XwifXckvTQeGZUZP3SGpbXGTzCuTQuAhq5h1JaHxVnBpdVRzAfth1odgWG2rMJmGmPY",
  "key42": "pfrkGJQ8ZXy7ZEDYWSnjVSVMz1axeKzNsXGhuUZf8MNYWFLpgEChhqm6AG3hvTRimbWMM1Jo7eqVPngks6QzvSJ",
  "key43": "3A6Fs6RcfVzwSy6MhPW569DKXQ7pTVYUvNkgBGso5CUfx1wLNKqYt8EDDSi1LryLu3BApRPCHzUYLS7s3yPRcFhR",
  "key44": "7vxDKZJaLrSehTbSF1yNMSy1Q211URh7fmLMwPc5511Dn9XNkiRgzzTxULdDt7vagESWykRxw7p5GFm5amengbs",
  "key45": "XkD8vUQqAkmsR5hoFAHrgtYcDpHRSU6WH19L1PCoMJrB2iRfQkUMde1vkUu3iSgVsxtKxbjegwhWfPc12w7FKd2",
  "key46": "3v9jwHGTbEtqr6akMbiQHfeVAL2Bgxs7SdLeHn1ZF5k2B2jLMYFsmyyRiVHLJwFiCRHjNAvJNLx9cBVQaB7JvkLf",
  "key47": "4jxHJPDqGwguDXqRrKwTYwLj1ahQQGfR4cXQRMAUdW2JzfPhs1VGYW2goEn1kYxrseWD4SVUxFm7fGSMBzpnfpYR"
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
