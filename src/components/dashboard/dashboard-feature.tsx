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
    "4kcgVDWHpi3cHnUsfP4wSPzPnDkrHbdypNQEVcahE2Dszi3m2rpr2J1rA2NVdvpxB5jPpMNLQSGfF6APKhz1VFaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sS5JBi9KTLayEQcaS3TpjF8kUD2SCmtGfQ5mhcD98j8czR9mH57ucfKbLsS5Dhj646wmyh8vHkDGQaW7JvMpKYe",
  "key1": "61fWdRs1u6yRx6MFEXLvKJfKEC8YD5b2ozSc1XVDubZziJfN8p3KmeL3FWhdnzgcPQZn5ALEGrMUvWquDKR7u1fB",
  "key2": "4eRYGZDUe5S6NgPyzi82FE7WsxJn8Qk5ZisfZfst48Riz2zSdvoNVM3buj1LetvghLBUQkeQLti1jRjXEXRa1DNq",
  "key3": "B9kEyDZyawsYmTMtCvLGXhg2LAVUbyVxCWL1kSRXKSx4dq1AKcb3xKeJaBtdNz89vn9586v5WZ7anf5jp7FwizA",
  "key4": "2i3sjaU3zfLSi5EwiZtF5Ng3dxG29qcADey85ctYis7rzdKwLEG16CC9Rr3bffBkx8G9aJT5Lx5wmhtuZhkPnojs",
  "key5": "62WaqrLvZJHWq7vo4xsMqs62uqVLMyZbDqD7EzB5G2nDnd7REvVtSShpq7g4VN6aEgqQB1Vv5QgxusfLgj4LZhuy",
  "key6": "4uX8khXW8QkkxgiPCQzdvPEzKFr6hmDKANAmCVsKCVsSXfna5nwt7bQ9L6icnMMEeABt5RxBMDR1xwtwPve48vNz",
  "key7": "4f94Exnni8GVL5mnZaFpWtHAiQgoNb53KVoSM9Zo7vBMmyyVnRYk6fgyzi4YBmBfftrPe8qatDjVkDMghfbGEmTz",
  "key8": "2nSTiH7KhKNb4bsHrRPqZVQ7ERCtHpQ5Ljhvy8NshBResYGeab4cYegjGxbAMDodW4SeF3NPU6QQS52Jd9qRj1Ux",
  "key9": "63rJXiWS3Y826De2SSjHRiMqW57G2oajnn5Nen56iQPFeBCexVhc8aCNsEPBb8uUJkxC2cbb31ru3ARAhgzfLEWb",
  "key10": "56LNSdKQEo78Af9sS68Pj6JqKB7gEGqC7o6DiKQwRwRZzKLo4Ak4n9DsYiJvby2poYSL3jDSceYhLT34AMYEZQYt",
  "key11": "KURfj8EsG9CwC7ByiqyAaEFBvp4kuMmMsNMgFHJywQXxyjnoYxPfinviS4P9wpWgHEj6qpJakoU47uDP11dttRD",
  "key12": "4mBkTGh3rgvxhrPRWsLcffHtvhSGWMotfAR1Qdctrs7Xc8dFk889Zc52iZG5AhXsNSiaApQa1ePmoAJoAvvoCjxs",
  "key13": "3N9VDL7aVyEL6vbUidmvKQUwBLbnJm7AoCrQ84BiFkTZmS9bvcMkPz9Ckj11mXWLuFdYt86a32a3NHYo2v1qDChe",
  "key14": "4u6cTioZz2u9NvvJyv7AtamYXEdubcHGKkfhBtKdTBgngowP15r6zsRE5eahHoJcH3fAC9u2VWZEJybGjcx4mxy9",
  "key15": "61iDHCzDy9NuSnVJ31mwY6CMjioBMG84Xb1XARV6Dvywe654otmUERixdvgCN9YBXrcEEsjtuHRSwuYoiRoGJaGr",
  "key16": "4dvqWqcuZxopXhARHVsgXfs5kMyVqvon6tuBesEWC5B2KnD9nyZjEgnHwowShSRwjwyq78jeYryLxCBjSspECNZh",
  "key17": "4oXUb7fhCCGxAbZ3Jk8X1EyneAzeHPjRRTkY9u3imy9sG5Bddxtp31YrTotQrX3jUWYyy2ULWeRYWwtGUc7HiC1x",
  "key18": "4TUF4BFR8tPU6kDZK45haBn4GwWFSKh8hF6B3iGWP7HpU8J3y6p3zXQHG6n2HSN8mw8TXhVdfiqbRd6UcdmZrr6z",
  "key19": "4z7vbVmxhA9PPmpuwrwdFf4M18iGcMqf7AgXELSrgbK2sucRSDKpv56MuqR858Eox7sEAEA73VDdvxWvScXvQ6k7",
  "key20": "2JhqEymzJSSsvjswn7UuyZQPwyGxoLxVCc1YW88Hpd9wZgdDHf9CEHsGecjSkQ3Fcf9qPYhbvCY1ZoKtdLLWW3en",
  "key21": "4C2nxkVvpM69MaNWqwJUttmpHWEZzDVBSC7fxPzv6kjVvYNUGQYB9dmo81zmRVBKzcptwmfovBAR138WQ1jnmgXf",
  "key22": "37Lw5UHgiPhXhveMTn7XghWo63wVWwxMR2gbEF4JrfYqeH3m8ts4kPTzFcpYnBMcvgUppGAWHtS4C44voCam2QUT",
  "key23": "27Vqykaa726M6v19J28QXfnu3r7voLWt2nyCUS8LUKME1tnXATzmJJu9oiZXJE6rfSnyxXiTvd5cdp8t6EmmyFvC",
  "key24": "3PmX2vQn4ggiEf5bmqoxA9fzv91ubgUrPyQaFuk7YihfvX66mt7bbLpuUTEoZT69ngAB7R3Q3ZdsTtCqAMdSiwrM",
  "key25": "3TE1cXFAdZRHYeHxrL8n8o5tg7S6QSzgFbABsDH9BwXj4KZiiJLLfXbFhhp8DurXKfMM4J8rGoYUFwGL26hN4k8A",
  "key26": "52r1cpToKcukFhYte2xWiMs4siydw789fPS1mRUFQFT7NEVMGjwms6n7vqzVbKEuuEjCvyf2SUCSCAaKgGK2pPWz",
  "key27": "59wnxHqU4BWQdAwae1Te4HGrRc1kXB7MqVVHSRZi5tPkK5SSMnMQva2KxGm5TnSdBiVugZKAHJtzp6vxSJVjZ677",
  "key28": "29apg2d27hW8wQasawkVaBWzcBMVvRV2dHq8mpZmF9buh2sw6YKxjSzUgnE8qZrfAEJbpM1fTeK7UwivcaFQ2LAm",
  "key29": "5AtwwJYvHWQaqTvEw1hFtBb67mXdYjGXPtYPDA4w8JDzMH7MNHRmtAVuD3ViKtHtWPn8GwEcfv6bvTnFxq8LVZxo",
  "key30": "4rqLwLv8W1jnrgPkEVPrnFexA4vxfCFkfdhVdSmGrQRBEjcN8vrHPZEpZNNDdTZ1EjBsDmWtw3K9xaGVcTrEFf45",
  "key31": "62MPJTMpBxzhAVC7bQvMMqv4RR3tYi7mmScJaRFf4PoDgLH1Sq6KAGnbvtq2as9zt3E1jQ7cNyBWzHVUj8si3AiM",
  "key32": "3KpaSh1h3DctMLVX6vLBkSXYkz3KF2uMooV1wUKJD6ggChfvYgbPBonYdrkWXgUBBLRma38TipF59UQ9L2K936HA",
  "key33": "5EeC13bSVRSg8G2jaGjmLv7zDmRw6ikXTzaCgWrSuGp9pJzdF76CfQvb4x3Ry3Ynu6VVKKy9QFKpK91x8uxMxSXh",
  "key34": "2ijL2LBSSLQqvGsCVoxJXGJgkWijMVyPa9nNqRFJS2BQFPdA9GUKC8ZyWFEmfVySsVfP4kUgCwxNUmeQpSU8wJV6",
  "key35": "LKeWEaHDn9oXBAFppMr5itM1wr7RcNufUbwK1wpCTvNGpK5Ds7gH8s38VzKicE9zR7P2WUsvzbauJwGLdVoG6ss",
  "key36": "3Lhg6aYsn5hLL1WabFxauHhCBdHf9qhwx5dANxETjDydvBLVtupbWsq2tayBfJQg7gUzjvZYUCjDHNk79mhbWvpV",
  "key37": "52F2EorbJsBAMS4mwH5fv1YSb9RmDKH64XEnrQ2DAstKSquX7FzgoNzZ7rmmhYnjnMaxsQ2ngGXMXSxFdMryAxjT",
  "key38": "3Yogi2LDVExugjfX54Qpio77SpmQ5xNpoF7RZiMc2qE1baj2ynDpwRfuQYARm4yczkkxL9bHN7r4oCVXKDGsb3hD",
  "key39": "3px44WZu7wT4mkivAbmEqoNz7jY3wDYN8RfM5P61dSYDog2xVRnBfE1P3DhP8aJ15p3fYWWP4XSEbcqatyVCvYxt",
  "key40": "4qvGc7AU2pkniM6nSv1YNavDaCAjuUspFTKitQYCkvUu9MKTyXqenHDmfyPRkYBdY9eGnua6B2YSXgBxZsFmiHZL",
  "key41": "2mnsxmT6zukQguWTHV7tTbKxnZUF2np4RzpATV9pNncnePxCvj92SxrSJVbLBQwkKvro4RPCjvfNeQaRP83gvwbc",
  "key42": "3G4M3nrH5UmPZGCZj1eddmZB1zXjFDf92WFwRsfJpHFVougNYbKC149dCo9W58T2ibj5fg8wpKMeNmykZjiSmNK",
  "key43": "4xvuNhSyobySAz33TsPs4pRRVSKP85ct8hkMFUwoXG5tSHgzMQj7xnBdxfrMmpwjmyqAouWJSA9wYwWQKKxNKnK4",
  "key44": "4d4UsH7GjY1LBjz1aasAxALHCwBKe6eztbsz9c1TjGvCVhx7qynms4ANSaY6dzct1XE1w6jfAZ3bewVJW3CA8g77",
  "key45": "65ySfoAuwLQuqramf19HQKWbBbPxYLsGYXswtqfcDyyoGTdP81Q6QdwBzxbmNoVNZCTYQkZ7Jo43KWHCdwqLRfJK",
  "key46": "phQZqWvGHbf6T2FDxf4kAxXuUNrU6e1yNiwhxTuEan1scoa77Df6WV1Tyw4jKMgP21AbhWnqvEwcM3sr26n9fnP",
  "key47": "3G3xoBRXwW9YAEQtchGw1Uth5iDvzZKfR1kqrxuavh2dfpGgtHB4egoWUcnV3vagR3cPYdfj9dzA7sscP1zg9z6U",
  "key48": "4BjxRoDb8J4NEqfCznVxnjRHAam14RcAZVgyp7KoZJLuDJx2PDqLVVi7JeyuxytxH7buJ4AvV2L3nzWXUAQNLiip",
  "key49": "3qujNGFSbySf7EKh2A8HBhJNSNVBT3yys623KBxaKR4KubeHDUMc3bk6izV31vVs4rhgJ8jjhqE1U9Qi5iCwmA36"
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
