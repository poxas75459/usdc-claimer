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
    "XES4KEeso8dzJBsLwtnbQmUGakE9Dbr4Tfuj6mggv8CZs2skYJ1t5TTMoGMzWAPLh2yLwgW2KgpuiF3YuUHB14c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fPqx1FkCWctoZ2jnAtx8eXBkTkF1h4k4SfKD7yScjkNVarvYWE58YKXoVR4gd57S4eM69DJzwP1EcDJfZdKKSW3",
  "key1": "3mKYpXxGJJfETPGTf5mAWW6yU1pTs5sWnijtrGa7MZrSH5yMcE1nG2RQSd8RTrgkSd8PVMoPqat7wBdMKcKvve33",
  "key2": "4dwsgQWVAKf6fRGt6gPST4TzNonjGcRRWJUrVRg2aVjQModzqpnvHVkazDCq9y13wZdj2aaCUg5kQGgYaS6pz21d",
  "key3": "21FnnNYMFnbURUe3rU6hQT7928V5uBFZrUK1M2JudnLK2sNAdiyrM8ZCoUJ3E542wNbUEMGEMaoXHsAmU87zcnJW",
  "key4": "4PjDAaQwKnjfw3CyKzNVJwioWHTPBMCkcca6bw4Hbj7D3VKp59CeVK4vBfwzENduPZSvUqmRkoW9ak2Fu5jVgqWH",
  "key5": "5TJ4Dq73ZjjLLvaCYuKhh6eiqPiYGKU1LotdEAyUUwuTTXKCkzDa7qWgrnBSPd6h8VgRDCrPPssqch2xwQBJ2TJk",
  "key6": "NB51BWKmazWh57CwFtgf7ewteiqLUc7zpG22EukR2vgs1RcBS35FzXCBrrHqKi4qqpNm9CVmRMxho2idSCwDGNF",
  "key7": "3dkUitvtgJ9X6TsAPz6xoXd3yN5TzpuNo1NjMR1zCCaKQKG1tr7SokU1t4ojhHehV8x8CECy1nbNidTLmALrDVsB",
  "key8": "3KGfbSJUj1ktdt7tV82Gs1NywP8TGXxnGBwdb8nFetcvWBRvMoYawSy8vSWoxur2m3b2Es4PWu3PHP8YKmABZcR9",
  "key9": "57SyGt7PCMaT2HiLCYiEe6nApSDbzcWLcgXm47akVwErvLpHgb7RbcFBd6Tiwwoz3zrvdJzYEnLBJtgDjN1gbP9h",
  "key10": "35n5hmvoVfQp2VT7zDwDv3R6fti3W5oi5bK12oPLLig3KPVAZSaRu3qPX41MEiyJqhwzbjHhEo8h3XNyGiogSCDT",
  "key11": "Ursvka1mfbPeE7RTHwkCFrx1BKL1RQ4XkPo2HqfjS8nZYxoKrQ42tSb4MQr6YJzQLK1qBrbnw2rDEdrscQQmMf3",
  "key12": "5KqKGKfhdGkDHFkPxQwyeQGrdZpvCNb51HKnZy3WVY2yiQZnVqCqYJPoS2M4QsAAx4JpAsuho1dXiCB8QDh6jzGK",
  "key13": "26rXztdGn4akR7TAonfGhR4YMpmJ1bea2VhWeL58FgKa95wdjBDDzckYyfzDrWSQz7cPhfjPt3KtxQnVCQTZyyVn",
  "key14": "3SCyVDAgNBncdYhvrDbRGNn8eAKsye7RxvjoJaDPN1bZJ2HXj3qQmCiEaXyKZjQgpv9zEJWXk8u6AE4NpLUWCvqy",
  "key15": "kr8W8GmkWTs5kjmvxLgLQ3ySzMkWxWsHFVizi7uRZTjSV5Kwfew9Z1ffeGV1C5a3tRj1yvrW8QkqTbPC3sRfb5L",
  "key16": "5FLs6UbMJUXjxaAhd2ArcxsXCXoCm1jWhz9rYt18zfP94LkywzpSJkXvZvYfU8A6CpfvMDpcJdBah4vxuP1LDa6P",
  "key17": "42KQoKhjQBDtirzBkTiMoV6b5riuLYTET6REKgUDD4uX4nRnDiQu5Y9SLnFyoTwXpfJYwu3hZFH1NP2uumzvwcWc",
  "key18": "2ctoPbmURCHmu1LmUasma62dNPZWWBCtVrH1H1pM9LXhnT1d4D6EwsbsuhyLWHZLhym6T8RaLtf4db6Dfa7Wik6m",
  "key19": "29959SRSe125rpFbHRHTKzeAJxSeGUaFJD22kySAF6L7g7mHKTKHoCtKCvf7AiXGXzpH2EBF86hXtLwYQEVpqbxN",
  "key20": "i4UU5nfNEVAK9bJpWx6jY4AmZLXbEF1Xo4BTNyyoPyYuGqTpwP9JCurGivrL7RJbPLL2o2Zk4NUnNVPHcJGiqyj",
  "key21": "4rGFPLvRdD4K3bxrtuNDVo5jznDqWn68xPVWqDrpWhkca8jofeiKmsKmpGQBTUZnLFoF3tkgQGNLHfSShgmVoZQN",
  "key22": "5aZq197uPvQYenq7AXncL9mTcXAQGa3Q7GCYM2ZXJnyTjU1QrRM9b9P8Ev9VwC5BCjBaBYPVa7bSghj8DvqhaW4U",
  "key23": "5a5aKkRUW9jfqAuuhAuRnbfyUAyiS22hswJ9ZEqTY15aed3PzUHFhHTtoDTw9jfUksw2rUgemnWb7bd7K53ce5EL",
  "key24": "6111QXR49zv2eKg6MhA4KhnLA1gY5jZE3dywAFnt42G7BGWuEa9XMLVYDifQXv34XcU1NCC4BwAHy3UxTnBMMns4",
  "key25": "586QCoj2m7p7EEgUxi1Gy5Kj1PJrmu8gSL6cqqfm6d7zKrDPVNu5bn8tfQv7p1dtTJuBHQStNwpBNZSLGmDSJMv9",
  "key26": "49TGbLwBjyCxBPNtBH6Te5emkQjh7DqUWegCJjjS2VRDpA3dC3BN6ygbgGoa2vYUzH7kxUAHeeYv1y31YLmxuqWH",
  "key27": "dPQXoZ1f4gx7pNbgL4uUnZSFi1MzyNzP88JQi29JyxxWqtscJjJSTZrAMeenVtNiJKtpged5XPhACnyjcByqi8J",
  "key28": "2Aff5F5z9hfNu19nF6RzqNw1zNiUe5yqy995Jk2MYqEjEFJZ6ZQ4JH5ESfF6pGjgHCzkKMU1GKFXzUaCGgfkCD63",
  "key29": "Rmorb6dwzGhhzaUKTdZ1p7yrG3MJFzZLXqMV5Z1TuWciPsCNNYAdWAXE1Bnuu1TFXZKGh1eYWqWNuc2BwDVwuJE",
  "key30": "rZHNZmk1JYBUA8eLd5NdujKEgMH1FRNGdpUsyAhWaeqkaTZaenqMRJe8MZjwcLXSB9F6KAdvYzCjTd5svXNWabn",
  "key31": "4vssk379fnNibSrDEiaGQmTWVr93vv2fht3xV93HQACMd7LMRF3yTrCBKGfo4rpEzJAC1J4eo8hXQrqi5VpKqhDm",
  "key32": "2WyrsUFCMBnntAA6rY5DnLTPNmKTB272Yb5UuajyRcU1DocGqRMJZKYy21xDBn5k7hHUKEMNCp9E1oKyQSzj1qWP",
  "key33": "5kxsMTv8vMjj39JVRKNiku2od3mzKMQMn3NVvHwXmWMerDFNYMENR672pJBokytfNpveYq2W7cJfgCeGEbm1Ydtm",
  "key34": "3Gw3REWdTpFXtLJJ8hEJvVwdz7VPediePMR89k416Zpd3CHMJPsyTC3Lk8cKmMzz9B6Rqkvd3nFpeYvbhb6DiLuh",
  "key35": "3hs1E2umJnYAGkgBvweQbsKn87vXH33LpU4JWsRE4ACbbKv6tiT8BtFb8CnJv8cFSYvCNTyxBKWm3vzv6cjnepWw",
  "key36": "aZEEse1oCuVv8HBjbSTkBTU68x72j8isSrLq6KXdW5w2m4ihhEjmuQQ1zchvmneLddH6WxKRD2czbaKR6eX7ric",
  "key37": "aCxnqPP7zLdMr2u4zsmazbdVcxrNEWGykb7MC72gikJZUETKyWcUrzDxLrpc8ayA44kwTEd2zTQMmYQq6grDyiG",
  "key38": "2gvVMpjo3SYDC256yW4JN7Zpru6c5WkJj5LN2EFW6WFhMgrGB23moBcgJ4XF65UkKaTYFjo24YHnU37kp4YJ7DHq",
  "key39": "5M6z8WwKkLbRHFMtWYjE7QeG9CZDb989LnKTbdtTzrS2Vk77yRPb4ZhA2QadgeeT7SBecp5FVveVnFgebqcpg1ZV",
  "key40": "5juLvAiAkjxRvwCX4iM5iqa7H9kFK2Aoo8Wd3aBJjQGWJvNWVjG1Utx9mTCoN2JRfSttV7CiBVDryzQHg1FjdFwi",
  "key41": "FE2qq2zMbtSp2wpJDay7u4tc84jhWTjSLuEjgBPp2fPtc6uWHkWuh2KN13oUwyGFTiuMgs8DRNbkeDqMyNDWgmH",
  "key42": "5EdLeZzaGxbx2mBRGRMRk4zgnna1Psh7t6dXPuK26K9Pp4z3Uq8YMcuRTjdmBDKMNx5v13vyJMgvJxZQeCaKouNr",
  "key43": "3xKXd8sPc7fzhBKEKFm4k8jKyueKEdW3imRXFzRohAPcLp8bgDmhow5z6d7dLw6uFYuPvpKMmsn68K6MxcFp8Ycd",
  "key44": "3A5hFMYckyA4W9g9P266YgfBwFqBRYzHcXAErVLvAVqZfPHjqNCuZFANXazCa9dsq2T5g1zJZfJoUekeivcV428d",
  "key45": "3DCCrxzjjLmBvxdC3ucBDYNVR81scadqzxCfV5Dr1XS1uDj7vmbs7cKgR8nn7X7HLCumb7gegBcPapFnVDkTrB5k",
  "key46": "2LGAqPv1dAfkXwTKzhKvhN5zuUjTWYt9TDRcjZa2uSrGWWpJV8NSEjT8FtrNnVkkry2K7HMbK1dRqsuHPq6N5pF2",
  "key47": "4dzgkaSpQoaRQmshMitNCnu6YagjdVuYWKC75JLhTaTkyVkHC7A5hJBSeQAJhFaiESpZFEvginaDotRZu2bAxTsw",
  "key48": "3Hx3Sk9R7ZAZm3PdeTGJcmt9HKaXf8KBwkC6Yqemc6Q5Gtr9fj2581RLud7gdQM1qBJPUc5LiFzUGRHz3XohRX5R",
  "key49": "3b13mQ4NKGVwHog3rRHhDBtxFBxErbqjF4gqkXM3mFXiZFD6da1UGYzTTTu8DCSPufWLsEPVPasjh6kCkK6bp2wD"
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
