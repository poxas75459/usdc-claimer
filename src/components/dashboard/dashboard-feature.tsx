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
    "3RcuzYBZ6vU7wkyGAhFWUHyip2SoJxC8keUqYQMNV4M7LeU5cNwZFUqTgoT6q6jYDKimGvF77n951Xv2nXqmJD8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TZqrdzcunzEr5uyXJuhXmQkqqktSSQf6mWEqmvsN8Lxmm6GYWoDjykev6aGo3XyyCr6GnGWFV4su8rovY1ZrfTv",
  "key1": "4tdW5RYusxjqvi7qmWHsxazgfe625cz7YycAsoFF3GjzGtMkas21qKjc4k5XCHrjX2iLcduxtgiG2gYNt5dddiFD",
  "key2": "3xQHbXYYmXL8zAVTk2jr4F5pyRSBpydKxkbi1bsN4KQy1tSRUuB3WCnE9c8uDjqrUfbuY5osPkbNCfJpNaWyzZsi",
  "key3": "2pUHtn9iyobqMA1qHDq82RpPqUeb1s9LYcRH4A8ZyD9QbMzQpuJvRwrCCdkdCBT8cA3LJhTkxajW6UQoEg1bdqUj",
  "key4": "2h8hVfwyhFPzb2y2ToqESC9Zqp3xqsZnesHGAZ9aevfWQCxchiV9sx5EBzZrFBLzzJpNNax5DjWeH5a4KEbirhjE",
  "key5": "M4bbHGmbJ2JwuythqNLzhhxVo1BkAnikLUtbHSCLmj16GzpGmyR3vWZTBPwpc5m5D5gH3eT49xG2Yuy6gJ1Nsj2",
  "key6": "4ip9JGtiYqaCwG8i1CMcYWXAyURbF45DW3Aq3DLucUquUAAPDm7heU3b4tLmTrxWaA7DojKvrtqHXeBStqu26iVT",
  "key7": "2LhDySS9qSaKinCeZDAA5MdqVnxZNHzMYZc2u76aecjhoV2XvNeQ6FzJtxrWJZwk1Fddxr9Vmo99WPGhSZGPNBNy",
  "key8": "4PN3TC6E1n9z5Xs3PwSvpdZW4hmyY5VabBdpkaMvp6n4SNT6yx4Cv5CY7jCrXDEkgzN5HQAkWE9g4JChwcg5WDNT",
  "key9": "38CBvzXvqw8osBwo4PkjEXTgNVoLcuMr8cyEEnHXjJcPiZhUSa4yBcCQ1m6yaKj3q4ic1ord9e7CvpwmkzZ4cvoP",
  "key10": "34xmXRSgwwFHooVWcKBzUdhWRm586t1oE9dxHoUVFQtQfWTNTdXzDF8s6evhdYvSpCnvM3f1mABHFJzVdDhUpTgi",
  "key11": "4oTf4u45UX68p5iShs24LFPQ1kVfyuqvxBq7Wd8ir7mcV8A6o23NMBrzXtXcZaoVusVtNBNnu1tMCH3fA65dnZpD",
  "key12": "5PjmrqgcP7kzuCtHcBDrypMV4ytDBtcX5Mg5qMEYs75T7Mx7VgUf6pfM2v2HBgyWZbcfk1hML7bsPyenFg2oQjxp",
  "key13": "A86SzukQmH2P477zvj7TyqzSpqtKUawAwToEJ6NPCiP3mthvPTSyJ1n7nv4saPTsVwcUsJPDdaquNKNt4GEHeHQ",
  "key14": "3UaHT4mkdfqvsAZZXzwoPTwJmGTittubAEm4UjYhdBY3kjnL66VPuFQKNuHHm3SbvsxMdm335WfxwMTYZpxFryZ2",
  "key15": "2oU6KXxFHuMj9bg3GYAFMq5okcPie7TcHNm9Fzkazc1s648VYvfHouehdSbqsPGLcCCCyV7CEouyBYXkafAbCH9H",
  "key16": "62Y3wHXCDxwqhgcmaTs8NHJAnkFuUSqENxRwP98FppjV2oyPuCpmcaWFG7xzZzF5vy4UvubSQQAJyFTHiuT47bCu",
  "key17": "3eEER1gnYzFeGbpMwk8usUNsqh4x3fZMVuaX3ygeJNXbZCC5rw9rfG5YYQWgVyS2GGzARbynNW57mVUsoNnmBo6t",
  "key18": "ymqA7v34EPtRHS8suf27uCDKUj2bAK4WxfUw8875tumxYq456tGtHLHcAJK5yZpiJ7uHS9sP5CVe5TCNb81YEdG",
  "key19": "4gzskKSEHz4nf1Mzmwqbw5MTZa16Hcqd3Nyb1fZLpiWUgvebSWxXJcrCt2h8ENfbu7ZrxWKeqXz7KjzLnvgeFWAG",
  "key20": "21Ucc1fztYQoNLN2XTb9rsjCwov5RfeSKhXaD2xbEzGJL6QBb6euEzXdaboBBFRKrRq1y7mHRGU8z29A6CQWasKu",
  "key21": "4PpLmfQcnaDunzbGZM5V4E63wBLPv1SQLB8rJ6Lr5WKCoSrJHxDSwhTRdYh3GGokcdmmPtNrVE1XHiVbzTYpPjen",
  "key22": "4uLC4Yu9UMsyVgszmMVeXb3XACxBKQ8oQwV6Swu58VgTEzUgFw9EhNWnEtgcx1tajN4ZQd9tnBRbdAeVzvMNoJ3y",
  "key23": "4FgCYkmwuQW2XVhU9dgTwKmBZnGyBc1caB42NtSTCMmHp34Au9TkP2TyoGwGZooXUowR3ptWqMxdwHECHwE4H445",
  "key24": "2DNEUHXEvQgK3QYcWfkTLijgPVxcHam1FMu7GFN1RFb8SShen5rzsodNfk3CvE3UGQyiYEtZ7Se73gadNeHf2iDD",
  "key25": "2kEkpePbGiLYt5b59mfRpBDF9SAQSrxUKdwNsMdqDuPUV6erKY8q7kopcF1tL8gjutjManRZgQbhRp58pAX7BYjJ",
  "key26": "9x3Fwgkfvy9srxebRnCwTeCgEKfbGxeSMxextcg2CnA89K8H4Um4p4NSabtByefzbqaYAeoDGXJTpCg6NDECd9d",
  "key27": "5RE5wzx7oF7xBMcXkh6Vdbcj2fpi7EkfySCwEtCYZC1WRJhiNFfxDYnQTnMPjCwed84v3bcZXZKVhUT7oDRi317K",
  "key28": "5oH3tHWhXYyoEeGTsoCKTWgGbsSZGXkpyz88vdGHW5HG2bNSE8qRs77QrK9px9BYDke1tnKk19nF6RTGcNYfBYbC",
  "key29": "5W5gudnikePx1L27DuBqLCLnCbcKkwiYfqiNgGk9yxD8k83uRLr9MQxCrik7JPN54qQWezyyU2xsTu3sm8iuj62z",
  "key30": "4PP8hoauUa6Gwx9zKPqYeFHyp2H4wcnajmPBpp2uoxfejefPRbc5jj5rNPR8jzvanD4qpPZVZ8jc6efBaotc4hq5",
  "key31": "JJcw3KBrs1GW4DLjFA5YemBJJm2vN4c1N6Z8RvLnjgLKME1hmCBKinfkmH4Y7LgNySkzcTVoWTr1FtF1Kmt2axo",
  "key32": "3zbbgyHGviiXHo6weE4GNVx3ZzdM4acdtdRw6YWZjod4r9pZ1UCmxzrPRMqFhoPELqQ2SAgnBgHcQUJf8t37Sam6",
  "key33": "315kMo376z7BMRq6ATpvRhxRLDNJKFb5k4mGJizv2P42n3YDyvXCY697fqmM7Cf6X1jXNUqG7savaeL8uXFm6TkH",
  "key34": "32ENpBZ4BUZ6QoZRwyXsMjQi9tp3jK36EMB4o5N24sizyjFUreqFPkToFPEGFFU17ogeRzpH2kRnxZZ4sF1ScYZh",
  "key35": "5dftZy3r4jeEHzrZKjNZBgtxF9DuJW8JxRffYktNW1jL21mE1YCJo3SzY1WNxhdP1xcoebDKNZFNZHQXkteWhSsz",
  "key36": "66CoyEuJphzNhhxkJPmeUST9ZWUrXWX8QRGnarVsjwWgQjA291uaRQwb1XXpsoqUEfP58wGC7qjm7LsuHMtU4JRP"
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
