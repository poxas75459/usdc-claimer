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
    "2mCyMvEKiUxcLAVxhXW9G16yEVkggK1o433wcwumXgPgjnY7djjHKHH5HvxjtHJFpCnPGBcwyDqVxXmYd37CGS4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5syJUrvMxU36SJYr1NXXmFZapdRk3c285d9PWMswSD99nfxiLEp9bCasn3g7rmMLCzbkAB4rNjk5qtD1jkHoyZDG",
  "key1": "3q1PyvMi4Y9FWFNCbGCS9vftLaXnButNdKFQ3K9K6uuaEBgRhcbywpibXjz1vE8JdmMX6WGoLmVcZG7wyXaB2egP",
  "key2": "63TfktDhE7P1As13KzGjmNEXAmJcVms1Kqu5z4oFkWo6czmcgfoUiaDaiWAwUdtKT9ZL3ebWKFExygP33Ge8eFSU",
  "key3": "2UCtG4hspbXNGTChPaQUEAVrJwK9XCohDsARYPLuQhuLqSAzjfsoonfF8aLpzC4bWfFvgYWBWUjTwmujDo9TunV3",
  "key4": "2RbcKmDcJkSdD4tTmygSnEoMyTkU6YmJT5eGHK1iTL2tmZVqFeeggmu9fmkTMUxBmDzrmXRXueEUeXw8E68HqxRV",
  "key5": "5VXaHmay4MhAADrf7qwtk7PkH6Dj2bVqNtEJDEDhwdr6us4KHeCG1eVGUurBfZTrQ7QuhmikW9uZMXwiSNqRuRrV",
  "key6": "Q1oTMCGX21e7wA7q76ovS9tZTLaqfBmKzFRQ5G3mDi7vo3r1cTQ4PGshiLGBYWXD8bNZKeAMhMP7en11xH2GrUo",
  "key7": "54E99WpCFm9Xxa5jpBg2ZLLvfahVZ2dban5MgDvzgcjhdjHgU93iY1xKTDhYSHpMkJoRoDShRkGAiwLXprmk1Vee",
  "key8": "56NpQ4z96H1PNKaVRcaCNeM44q1VRJPdsNkgkKhWJJ8EB3YcCfCpC6keP1r9vz8QuhaUxxzNRxfg37hK5iE6SMPy",
  "key9": "5UXzs3mnNTmwQgVhuwee5FQRZV7sUzPDzZpeeeS2wifDpiFrvVFAqjG5zccuCRUzYsaEGTNBWUdGtD3ZAcUwZyg9",
  "key10": "46u8Ev24LbYC1jBkxFt7Bmom3KeSbYfWSWG4nASWP9ajedrFTsZFGSBbErVu6vT7UNajGhduyaxFTHHG1X5DSsLt",
  "key11": "rWMaNPpDGzdQvGVRoa1gbACYcUrXA2Mpx5RT6aH6ZdpW38B4xP9Ng2md7PxUSwC9zBZ7aWe9JPSo5zFwUmTFGic",
  "key12": "xdwv2o8n4xVquCqsuozLfN5vAKYr9BgABbcvZPqyUY1ddi5SHRFtFUzeXKS6uWMjQyZ19rLo2oZFfv7LLhxNarr",
  "key13": "25KbwdSFM3qYsYLeR4moEsEL9sv1vW9YoqjieYPtGJVDwU3761PncVbK7QcbyrbWWViptrZQJxEgPj1qN8KXH9TA",
  "key14": "2XhTm1jD9abxdygwigRiDVVuK7FUMSnDYC2KhQBk3ZX8TyWQFfLDJg3PMQ8L4tuNsHRSmCvfBNXagrR9oZcxD93g",
  "key15": "2DEk2wb2Uk5egYnnj3TfRzpmjcBamsCLzqyf4mqzdpYN46pqGXxqzkxfT91sshCUsNUwuJqYj4WsN3yyvALj2SS2",
  "key16": "4hMDNrjePp3Zvoxsuuyk2VN5YSXVaygcWHLy5Gc8G1eYP2obVCraaxyiwsFLBqVhiN6s1TxT21fqNCscwirddiJv",
  "key17": "2Xwj1yhWigsidGGLRcNvoNA2yCBX7HuQTgwhcJb1BoZQ2YjN8wiRZ8wbz9Xmd2mg7C7pgVoXzXrz2L7yzD8YzKjt",
  "key18": "4bp2qSBgUSayTNk9cQVddrLJRBmUcm4b48pttjkfv1UMZQ5cDD6sfFEjdFV8aHJb94WQiMQSs66wKZVKEsFszX3C",
  "key19": "XDhNuBoTaXnJkQdTJyvbbKygaeeBakMq2jpWzb5mKr8kHQeavMmYPn36EX9oRoKqkcYn5bbX3i2yD12zVm77f75",
  "key20": "3ZEWAK6P7jQnYciMmuG6fHNidTvja3kFN5BGC5bq4UjPSfz2giJZB5pvh9fSjcNSUp36dXdXqU3QYQRH9qob9Fa3",
  "key21": "3VtJe324JUi7783RZQZTYJjV2HZb6igQvSABe9AHtnxiZ3F8EAknY8PA1aSPBib6oy5bgLfmYqSFo1G5cXRWXhKb",
  "key22": "3pQ7qh7V8SYK7Ej6STThXDQZsYJeoQDqm2EHyfP5CgqWsF45CYv5r2KdoqbruNBmHSk3BN6XX4JXWEwwmzaKBaHw",
  "key23": "4J2oj1wSqMDENPAvqx82ncHTviotYaSiJ31EFoo88LJx7RNgLC1Hz4osZbHmbEcwuPVvz4dJzmM6FCs6hFQzYM5P",
  "key24": "4H4iGvoUzrNqE7rmksZv6VDSB9Th9DDdty6gBPxngZNY3m1qRGAaHYSZm44AuejMg6Lqv54Q8JcwHUax7QuQLUD4",
  "key25": "2x1erSyD6oKqAg9xxpXUh6q7SpEJZG8m7HPAhvPqWXHnWPBk6BagxKJRpFLA6JckrkMWjLgW8rYUuRLE56whkZZ2",
  "key26": "4ciEeJy39tcsXdSrSUFeNb4c45aVBBZLYPjwcytmcazdUM1GcucbSotA4FAuKxmPKyuC9MRpCRxMgaqmtcgzXJPM",
  "key27": "5V48bbNvsZ9jr8Xo5zbi2z5BLhw5E3dbvvfHtbqfMzRLdd4Z4aa1NNGGNPyQWXN76DmnUJacTVKSch6ubyYWSFJr",
  "key28": "5vfPvpXHQCiFgJ4piPuWm7M8rKmZN5tyhRbRLQGCBPJZSGK4vaN7gyBWjFMEEeE5rvNsYkdFwnryev7HTCcn5d9x",
  "key29": "2WArAyt55xdj2dfsjkyMzBUq5WnX6UVVGCiKJNKckhgSPwzJWc7paxRd1wtGTiREKxBg3ADLB9N4Pdqzhb2CyUpX",
  "key30": "5m9qKZc29wewYnNqhTRrnKJrwWoGp51BuwiwHTJ7gXoiyWCVZ8bqFNQT1T242VBxhqnAcE45NRpESSHTwt6Ts9Yn",
  "key31": "2Y6fzSbofhPhyenmNxVJJZYaLj2R7hf5uEdjwLkzkFwbdS8H5z6FRRqTRm4QocMgKGYLGLrsSE6EEaj9VuXyDgqf",
  "key32": "5pjmQrkkq6E8FHeBz74F9MoEDVMbgufhNArLjDpLhvqLmMUFCj5wSUmykJgUcxy2BvXUGmi4UPtM4NcAu7Qg9JGx",
  "key33": "4YkSpdEMq4ucFhRFXeAspe6mS5yUtWrF3yoqAvBxVHaBt84yuvy97YVECkikqHZ6UnhLXZDK1xFVvjar9PmAJ1uS",
  "key34": "2aCKicXVUgDcFreMYTToUs8VN58WzVKiC2akFNmNmMp4Chma6MjhA7Cbr1WQt5wp1ovjDUGML41JiirfHvt8K9Kx",
  "key35": "3cqePfcZmF9a7ryXEmP5zqJgNiRivYGvDqzbFcfQ2Y9393wVZbL4BTo6VfcCNv9pqu8uRfuchPXc9QKDvLC1iEtN",
  "key36": "5B6Tpgca4UGyx2pX8UDFFBpgeewgc625dwcUzTiGfVZL4eryfioUBDJtbQACXUfAcVqLeMkjDKA3rYhzcb2vB2u5",
  "key37": "5MBMUmRs7gREFjSjJxyLqzdcYPoe27vAqUKvA8VVxUozKbU1135bcpLFg4wjB1YZNjogM5nP2K8jtFEkagig8FAr",
  "key38": "4DmWQydpXi9Cv44ZMFKrUo2SvbjTmhxFjCtrVH4i81fyxi27Jit6wnAbSFQuEQwK9WTNubd741igwWR7pRtsBSHv",
  "key39": "XRLeUqGmRw1aXaFxQhkZWMu7fzrZeFeuzjdBBDGnY7bGV8hwA6mkRovdVpM9hiYevpXv3toAE6GiwuujRJYPgcS",
  "key40": "49H6bj2Hd566pESHbxsbDQRMHAAbR8R3MkuvAWGb6Hrgkv4UVzXpAxqxSrq3pNu3SoQAYtdGTFzUF89sKjc3yoiR",
  "key41": "X2DZ4TfNeqHaQRyAukhSxoD813vko1anFeHsFVG7wkk779DeKTySiqoxqE92evatyHvba6wpjCH55pn8J4yPNi4",
  "key42": "5zDb2szfXBag8DPNNFtdU8bh7oYeh21MXTnddu1K8Bsa2B7QoeeGxjVGTQ6xrTMgU3qLpWufniJVMpc4fXqikuqd",
  "key43": "575guvqrASaufMevRXcmtL1u6Noc4juxxu9kUBfGnLq7xEgg39qvwF9ofiWQA76QTcg9pkX6NHtWctwycrW8dBeU",
  "key44": "sVueH3NR3YdD8eUo4t4E6gQRJp3tsFgadsX6R6yCKykXGYyUaVnR3yttka2vavfi6uVzzz1G5fGwzvyUWxiaUHu",
  "key45": "3N62QQgwXWzgaGpUM7BFpnaZiZU5HvCstzKYYUzuWFx8Bm9bUdDnsj61nfZ4YtfCeZeceNhKF3sTB4FZpGDRZMq9",
  "key46": "22HZ9hfu9VBTJfVbyGzVwTaVmD5p34Gun8dpyPSvoJ8J8ZKUNrMu6KwCbET82doPX9ZMM76Tc6T22qxXMf4vzxYx"
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
