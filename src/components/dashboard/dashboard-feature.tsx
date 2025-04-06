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
    "2PZt28aYPofdF26PwouSsNMDDDKiuokiRD87nhBzBS7PjNy1wFQNyismcnxdVxD5DnRokQVAECtB9suDULPKCivQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FuHA2uPjAFjFrJrJev94DYHp5vacQdkr8XpAWXhcLAdPHUNuSQNWFYkD72fSnc3qm2rwvdarLBws6nnsAj7Z4i1",
  "key1": "24RFieXBC454PZA8HniZ2fseehJfoNZqqVrrfW1AcubMGSGbKP6zfPMkY3LDPPZNK6cuD84UT9ZtVpKaHRotcAZk",
  "key2": "5zZ1oRAt587XdA9sJoKvLqvjCWpdE1sMkwcqAHW1D5PhEkgi5uV7kQmkeykonRPsRZQYwuTUKzcfEm7SQjtYv5eP",
  "key3": "3h89nxJzvARhMKt2JCqLj8quZnJwzWyspuffKU2S2GcesjHMWYZ3RSBddsmVr6AQGapUyP8sjGKCKtkWhR5sBYiK",
  "key4": "2RfVP6Pr26HFB1sV4o3pW7Dztgh5c83TxVRViPo1UzTVMtkDkzjHkBey4YZwtgqyCS5nYicfAbbgzKpeBrJu44t5",
  "key5": "31z87WJWQgPAr1TDMJsNNCJkUQ68havjCEuPCUQJRYZJoPb9RrmFoAeD51FYH43auNWCNr3Cc31smp3tYjEYaFxk",
  "key6": "qhSKvkiHLmu2hbQyyCktD8ccFjVN9dvaidx2M9BHrGUvrTs374JrxSm3V9zgGa3vjJkaKuzXqDGWcUkKoui4jWo",
  "key7": "29QRUA44FFAZnbyaZ1iTGvwcx8eE4fFetSy5iCM3moTDLHWfasBvjT8tLfDMjrPMFsHffECeUsHzvWZfpLyVfekR",
  "key8": "5mbvDLf7QiZ7anqY188dB1e4BMgDgb6qQMtur3fu59z3FU995ghMtxJpwj43hHVsrjNu2y2yrCiQZTMNtzWCw9NZ",
  "key9": "qS5CqeEhEn8sJw9ZyeYZW3NFijWGyZtaKQSpsTdBrLZVWoczQtJjeK5LNs48vu5kMFSeMMVrzGnJJUu6RxDnDJo",
  "key10": "4cTxBTisEGsc5D65YfQrdn2LPYqc2SuRyzCWpS3oaNRB2WzN7yWvMH4FcCvyqNm8dyhwwZY6gXpQq3zEJpcoaURd",
  "key11": "2Ujjq36e6hLLQcsixiMmLoHmJZyu6GZW1H4V3Fti26dWpBjXAwEhfYmrSMUQyr9ViUyVS3W7MTLWKUEcFux2zscv",
  "key12": "3N7VJbjZomVFLzv2pwpj6UvudFpayvtmGv3qZaMtgWp6DBD4V2HDsDDEzjRbntRLX1uxuNCD2kGCafhFqFFubD5f",
  "key13": "4L1Q9cQNWuK1WYwhQ6UyLCnu6ESPDywuzcLcW2TANJFvSqjTBwFhGGGwvApC9ytEsUafrH1YRHNdVWi8hGKKjLK6",
  "key14": "2Dx4vx6zWc2p1Da1oupCcMKZk45GFjNoxrFZ5754Gt1one9jTfDY3D8aKQ1a5cSHHFJ3xqqMQiNysRZP5AvuHDRx",
  "key15": "3Bua5a8oYgtCcSRJACKLidDqYHGhbZvx21tgRcBV9K9utwToVvMnhpLH2gn7VCfmGsC9nj6g2jWV3WHQsSTPyMRH",
  "key16": "23xQnXirBKndR9hoj437avW8bmPoKeuZUQZ1HmHN5JAoeN4tRpd9yPdQYKC3dZb69imDM4RmyBDzkoYojxAJh9pW",
  "key17": "QzbpWe43nDSC3Nw8gABjfMmEf8NGrjMeMzABnUsm6gU5ZdLhsy7yxcKpnnzECaPg1M53pVEoCQPj2zaydaBaKqt",
  "key18": "4heDuBtdgej8p3TAteWQZsAiGB4SKNebyXitVTa9qRS9UQn3hfaQD8JajNDHZAHjnPuzCJeBiZURaRBfWqP7EDGH",
  "key19": "362JX16YUDhj61qcpkdmtcKc1KrX53UDavujgyjRCGsRjacVv92EHPcpRnUkZV13JbhvxN89qizWnBZzyE5oSVLe",
  "key20": "38W4eZQccpAhtWD4M5xPucvKus499436hC9B8pmZDkw828nbEW59kc2N2vjrzbcJ6uE3QjQDykCiMcJGbpKRSoJm",
  "key21": "REASBso8FcRihei4BxqyNm5pX4DhkDpwuusJ6DMVsgx2pU5YqT6MLPDtMEs15dgfob9E1gA5zAcrHKJE7Uts33C",
  "key22": "4nn5jyQ7Yu9WTSgsahM8mhneBp3WEdM3QaRagdxX7sXv3bQRsWWAHf7pLBM6vMPdyoC7SFiornXrGuixaLq8APNJ",
  "key23": "35HZZHHf8mvakjz7ZhhDuGF2bvaYUZsuaZKsMFH1hh8wfeNYuV7iDGCAMi3awTsnz2gdvRQS59gjhRbPJS4TvRic",
  "key24": "rpGsJJUZzzDySofX5ZqHiej53YAdHcVprPUsmSTzcjMaFUZ3ZVP8hyZptrcg1ZSm7Tbo3SpSEg92AWCGupV9ynP",
  "key25": "HbaqyLhHN5XEiiFDnx3z8TRqYyTrQ1RaqfuYeBZxuNBXULonacMzz5oS8sbRmovPXXnTdeqofsoQv6kXGBhBLif",
  "key26": "3hFTGa12fws7cn165SqfQPb9PwVS4Fhz3ew19dUJEJ93EHxWbu2zDfGHwBSdVV2e5nLNTcGpvaHh49pfML5rDm2S",
  "key27": "4xjjFd217WEPTJK7TZ9cAW7htzXFmir44tjhsbqYswvncDxkQnTjV19RXTam2PtU58TKWc2kPLhBSruPPhEX9WqS",
  "key28": "3P7iEGDKgHyxiJ28U7RpVmLaBZwVHJWJ5qz14ZFdZoqHCY5STPP1N9S3qKC4qvPDVrW3inp1YNquvuP6ocHWPXE2",
  "key29": "287E86uchhmBFjbAQovah1CdLBYDLycYC7QVz49s1d48aPee7Rkkz9ZwnMHDYMV1WDFECRWBBJkMfuPdu1Y9zkqX",
  "key30": "4fSQF7tZTrwUvNii2pKBrNqbNJHs9RB5mmkpznhupeKRzMr41JDC6952FGqwnVLCF5Moqu89RY7HwLZd9NwEAWnJ",
  "key31": "5VDHfL8j7QwFhwkaWcYySHAz243GdAXCTDzomjjpyjdp92bEaVeddruJkazvRkLJu7g9JddTV61Fh9EAbkaqHFbE",
  "key32": "qH4bLn4ZnZ4LPF8qScC2J82GNPwqUsubkq9Qi4sEE6ETUwybHKbUUoybANVQ64Sn6pvSz46oSfyiP9GMhNVg5tk",
  "key33": "PExd4A2VGr8MV6N4X4GPFDrz5wVVVVQxhSBhGtoYQVRgcQrHZGmJVXSkR7yUxcTudVwJfC5pTNTwVCPnf3ZcSbr",
  "key34": "b56Asiw86aQErvr8w4KB6b35dXNSGkndcdyJcvckyBRx1ESnmZiPkeSYoVK6QKvvodCmUjnNK8V24TZQWNBo6me",
  "key35": "2e158qZdfco1XwpXG25Dx5WeKXS3RqWXRgQzecAxNTHJYo3Xo6fAZsbpFHDQNgwjoz8Z3MrnsXQYjezJffK2zkuL",
  "key36": "gHxtLYyzWoZqd674pGHoGUMtNPug7MAzUPEthsPiGoRsZT3fnQL5qVKuWuEEaUGKETaQTR9AvBAHEvqxpwf6FfM",
  "key37": "4dDw9CRwh5J1gxZPCqTt3EQQzcSUjd3Agk9dG1w9bS66y6rKDx2U5vQ6WDdjkzHHqmEThdJ7zy5N6yQN6baBw3Zg",
  "key38": "5BJXRCnVDwNYgBRMR8GYJ5FbMokkeAH2Qon2c4bx8yBHncicVkdaB2pxeQ5sDHjkHf4QSpoLGKZk59XyUTqkTTo1",
  "key39": "fH7wBH1tjeGEyT392kkfmgxQvDk6czvnF8kQUujquLVW7RN59Sw23remu7KnwZako6qpzf4JREkeHiTXZy8DMBQ",
  "key40": "MN6wM3B3TiX34UYVJy317XWzLydt9QDD8EMhZL7WZXwXVDnbMmthK4ZDZS9BmSM38yY2atpUaL4mKjyjBk5vh7e",
  "key41": "4R4SA7cop3n9T1AZRkUbc9oy8JnCavbGkjFmJRebb9umYddVNZmEacW6LAg112iufRV8y9hx2TPwbH4XMLCguTK1",
  "key42": "5J9pbjge7VNGALUMnWqKhjjHYgfVi8QzY75ovd9x16hh644X2NR7PchzEBRAeSwkfMwqK4BRSd9x9pLBGU8Y5Tf4",
  "key43": "4eq9D3WjmEZkYEEmL1H4DS78NHQyEYcsHUigU5YfVQ6mXjEpJc9VLBf5hXjzaJSiB1ssZuzXEGSyfrEt5yNac6LA",
  "key44": "2H5LQoZtSChouGndiEZCVBvkETdu7rq18qjRSaqWCw4bdMSuCykNvuo5DqkMDDghU8fTFLr7VnGMt12FZFk7FTdp",
  "key45": "5mefZd1MwqPUu8Q2Pcd64NrXmrevchno3z9WNb1Ds51HwaZSosVtH3kxGa9csvT3hL1cTxJGTBQY5uesYGRodXNj",
  "key46": "4RLTFn3YAyjGTD1kBfBnAXGnBPJMZbL7LfwmCqT35yNAwkmUovkXqVmqMmccWunh6Hwcug6fSzQDV7udKZRdLtkP",
  "key47": "5kLjk4G8LgMxB27BvmtX7SA1rni98ZQwL7CkT3qwzvYP1wWwyV599VEzxzfyJCrdbtvN8nNoWJpuyn6sGyn3NzZd"
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
