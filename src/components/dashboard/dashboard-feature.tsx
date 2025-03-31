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
    "2e4MpWo3LWQZNGBejK3RCx9xsePyATAbEpS2XFNxUJyYbiUUuLCUaDSyayCxbsR49fvKqTdJWuQfzJcVuHFv83b9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uUBDKmDANwnmCjpL1fLKcjUZ1KzUdYCLMqjE57X9yeWdDaudNgBsmHFtz46ynFurYzGZ19kPuuSrHePWF1G8f3p",
  "key1": "63WPJTkMfmJw4neRxqLK3VKj5KwJu59Twz8br7jV3VN56NUbmPV2t3rqyXJ6qum6AYfP4uK8jZRFxZf8i1L5iN8y",
  "key2": "42LPqSKmLSSHbyZRRUBNCsgMCYLv9yjySipoPXMHBtFgTt4TdNXRXgpcpGNc67sXti6J7vHzQyiq4rgUu9smZUQg",
  "key3": "3Lqo9151Yw9B7mGUrm2c5fKd4ePBniLSiuKkddbUsxdeHzfEG4LpfpKtxwfzrgwYdXrhHTmvpRc1Fv7WNnRnhaWP",
  "key4": "3oSy19aH6jzLqdErotB9ajA29BorjeLgS2SBZyoGSrdFZDyBAxu4X5F23gNkD6AyAHmWRz9ia4TdE5dfMWJsFFcD",
  "key5": "5Ge6utmB2wTHkrmVa1EMX4ndpDG9sCsQcAyPjv1GSctqAkhSa4znwd6cvTbyoS1KxVUXCqLVtbJp4ZPxwSkWLKHF",
  "key6": "21dxbgf6dGrD6FZ6iZjLwRH7XJ8MZUgGPXjfckmCJZ2T3bPLeZQPmyyDf2QUdr7JKyJ9SMhAsnDxZfBxQJxeRVvc",
  "key7": "4oF7ydJfnr6WDwcGSwcLm9a2xNNqrTcaKiiLkqj3RMV3B5GbmghovWRVQEXzVniZFFYYsgV5Y8wLkqJjipLgBb6M",
  "key8": "3j4YBcTNSbSb9eARZcXXANAmg9dLTMxxZEMJ5tPYn1kPPixbHfRZyxAaE6RuH4Dej7ZudAdKnFQcgiqAaQpYuYsj",
  "key9": "37cq4QuMrNQo58ojzgVy19UkzUwwkgL97JqetgMahtLYoeCBs6aptYHEoUZHekjooaQb4CrmYw5PCRAhjWfnc9oc",
  "key10": "54rYYuhb5wgZSeBrR8DwZQk24FunyxRSn2vjiVE4n6a9DpVytRRczXGiUV8cPLKqaLPVE9QXvVH3MSkdEzrSvdVz",
  "key11": "65f4k2Zvru7BaeDd96YCvowxfdPVCLwZQyYsPU6kRjEjqPfFAJuErF9A1e5Ptfx4HG1uX2QCRojdkVFgrkLG3mu",
  "key12": "5Pn5HQ4tDVhMfk5jHgXR7MnvJhiuPtzFW6VF4AjPPPHFdA1peWeE1ynhJnha4D61vgBR8pYSQgp4MjTTVPe2iYez",
  "key13": "5tvc4XkPaomVJUuMC4RRGoWTGdw7k3YoYPrdL29r65SzEW1r4xj8rov52g1wz7jh938gYP4yLuCXETBEu6f2Dcz9",
  "key14": "sUyMi9kCicJjgfw6Zk1do1JgsQ1p43bbEj36GAzp4uNbdYCY41HRF8wLZ8TM2jXNKTyDER7xJaKBk56WzwZD7pm",
  "key15": "9m4mbytuLNx77uDuQGzeNfxdYb9m5nQ8ywC1MiYf1e7MFwo66goZ4m6qTeRE3krZ8FDucVBFKNeAWz4PVxKEbDL",
  "key16": "5nh1XA9tx5cgwhdEK6kaZAM73FYbR4FJQAJ4XYEc9tzNHYJfn42bZ6vi4Vou2wj2juMA3gJEA3ru1m1USr5tkHNv",
  "key17": "3zmrk925DXk4qXvsUDXYef2NQYCzGbqQADdKCyj8EddV8dyhGnk5EVo42NuFJqrE3ZckDNoipcLCP94qRaAVqZuB",
  "key18": "4VrcAvU8oLGaihKEsTpLSsAf6ZHzTNJ468rhgxV1u2fgaTw1G1EDk2ynLYfDt195wmkZQD2oEiTGWswAYtyjUnYu",
  "key19": "4kM9ZnqDonw7kJptfzCCEYrTXKfwKudiTBUwonGzq8DKhbyGYcX83HPFVxUdwBELj4XiGsa8voRPWUjSEgsiMVyK",
  "key20": "5CCWBrjMRNquNPB5mcMGX1iD2HTTGD6eeDERiNnUNTRtGEer87dGGuqrDrBAFmKZtDeLyf7owLgK6cscDTzkcofH",
  "key21": "5zAijwHf5y6h1sgztiWNWkqAtuJrJTG3QH4sBFL1jHFwexM8wGkbPf2JKHSXzVYtEibHnUJRb1fXGL68wDM5NpcY",
  "key22": "2SsvLyMgj7zqASdw4BNSvaGenUgGkuqjvs2Sjb8RET8YC5JT2wjQPTPSBwxCPxDADgxF64Sw21u5gEe4JonJiNX7",
  "key23": "31U99hS1k5L6BPJihQeZ7RFtHJUaeG5ELkuag8nAFMJ3QMwv8x92qPDCcTL27HmA6VPvh5tiezC6frsFAepVLiSi",
  "key24": "2zPMaoJwFJjAE7v1DAajrdSYNMt4DNVjQaDwQgTP2PjFYkNaHA8kNxdAEYSmGsTxwJrLsXbFuSo5nbRW47ot5dvZ",
  "key25": "45sWXG7e7AgaMK7MCi6hvZH7HvafAF73BJFndcnH9ExKuxsLmidT7zR7fx4MKLPdFkyHNQuk93ihM1yzf9k5xK5T",
  "key26": "5gUPUmkS3ie4PEm4RQ1TgeKpGq3M4XdZ9ZBGEPNaunPztSrNiqJcAJtSo4P2SXDzE1eBJy4REh8qXxKsjFN4zcLQ",
  "key27": "CkH3ZVRxM7Jcu88dVnhsDqdaDYuUKvdLG8wdbcd4yxAZbQdBJJkQJuHxeV5mh85PebbpL5dtehgQiv1A3YiApZd",
  "key28": "3vTg7nZv3NF7shwdmXVyFWrLKPuoD7k9xzvUZv7jLwHon4Vy24agWamDs2kQqsZBSDBhtkZF8djPXaBDb3S2pte5",
  "key29": "28P8oZVXdqHMsZ9XLTKBqir1Ws1RfyvQC4zSwXfUwk2tuPRjeYpme4ogUnnSbu6PYi1vSEcmQQmvfXxSMM1oJLi3",
  "key30": "5V4pKg76gs7ExQdt5k8KjX6oc2nzqf81kaJEWrrSTLp7BYnM6GhZ3YPZNwbpXdyk1nb8vURGL54wDrvoyHUhnZym",
  "key31": "3JM8gZ3Tj4gmrisbBHF8SXzfK1ym8rRwTpdMbvS49qtstq8LYuyv5So6LZCJjEVHmYkqmeBbvUt4a4vBGeJ6AtKS",
  "key32": "3VdCsFD9D75XmNQ4n2awugGKziYdWLM3UGQjUG3GhTYx4XLKp8Gc7CksCCggpewU5PwacB9fY6ag1zq3pP55jbzs",
  "key33": "3WLhGZDDT9Q63Gqz5cYXgwABZwmKLLag7HiK4QpunXDBZgaRS6MSNPDXZo3AAHS9HmY8GUHeYVNquPEE5kXV45pK",
  "key34": "5VEazj6zDhzsstP5xJEttvy2uUkWNuqbKFTyzcTydAJceuhf1E4akW3cdRFxtiue3a9jJ3EUyo5WPkzQS4XHrsVf",
  "key35": "2yNXN8g8NmUCNjeRY1iEpjrHNvd2UfuELPEJGRfFNN43K5rr4ZxAu9qNkuHswbNzVbaEKHvKQXALLbETyPot7YAw",
  "key36": "2hu9sBwizJiiLVycFuunxKKiTyNZDRk9uJm8HftypDziTw6L6CE73CFd4JS89E5qMSMKbQwGkSGkRQzH4zkKP5F4",
  "key37": "ajpHmptB1mRMPFZXh2TuCq9RAaPp7zvKuS6d1a6ij4x6jYYpg4yxSyjmcXZmT2VSmAJsQNHzoGD2SmofSRVBmAv",
  "key38": "jcFdtRyuFauD8XJcNbvVxXeTR3S3iUgejxGriPsaJ6cphrQ1WRaeqQ8BWDAQmj3vR3zyKAZqCHzv198RN4PafzU",
  "key39": "2vCiQKW6xyQf6C1RQ6XFwJnK1fWLUjUeaju7eZVDEQKB64yqawwWHYtT7z1ZX6q4QdN5uXqJ5CAPE1RG9mP4Juk1",
  "key40": "RuDYaK6wfumvq75HeJhYCoGaf6xH8G1v7H5dkLDe5WJX348KbgLpGaETkKBH8byyxghzN1i5nuMe2BzpJhGgYHh",
  "key41": "5TiAboehRx9es3uaP3A4wbAzacXWp2DEn3CFH4Q4Ky69dbc1NePKev339T3zdKF3vp47sswFJQTyjiWcYwRLgAzM",
  "key42": "3BsJpSQD5keT43dc3Hmjhk4m8whqsgL5nAfx4FwNE57wKV3sxrQm2xm8TbkLFkir8rVyrJ9Lc18HRRmFHMfu8ouC",
  "key43": "2TXQWQq4az6w3PHhR14jSdMwYFYyRUuxE8NkmCM6BoFtRteqrCtYh4yvmet5GmYXPaYga7WWx7eGmwYeBofWNvA3",
  "key44": "3KrSZTePp1eH4fFK7iqNQo8qnMWttyKdKMxQP67xoaerFfvH2SVqvNDXXtTaKVcZVP2sdiAV9m1u9UBEwG13xCM8",
  "key45": "3uxnqTeJLWyTYHoxkTSZYk35pRDs8FTr3E9L3CUiPEsdNMgDV2C72KB2ejA9MJBQ9cM3aMNXzLyPTGNsHro9o76P",
  "key46": "2bChY5RRRgtQVCVTApqELyDyHKmvMFdP8SzRSnVUjiw3eScbidKv5WPtMorob6pdoTT722Xk28JiEFQfyZKWj5nn",
  "key47": "4Kf6iebWYi9ippgjKuUe4WBotwKcTzKmFCAzTxHJsEjbMypdahnckTPz7zhm2wiHwagQ6zJykrb32HeV5wQuZ2ZE",
  "key48": "3idSpezKSYtRiaUYRcAxExzrcQMu1B5HDPJbz6pAn4YBrNcFamK8LAQ5EeyvzVC43HgAo6DUkr95Ja5Pq7ECKNKE"
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
