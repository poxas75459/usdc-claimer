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
    "43gaeLctETFZSxBzwrxZr5uiLggNHF3VdxgEiqtYd2dNxQi8udpRHzFGYaatQH5HQ6o7C6mqrZTv9JJE6NzUt1Ce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q8DVfbBYJmqjumnUqGTnwnsqAqngFkPipjz58ugj8eXQEBJNVzCXMNMeDsc12wVpp2KbeMLjD2kssUNU2NvQ7A3",
  "key1": "45LvP9ujZfcmiEBi7i7P49uakCXEAZ8MCN6KMbVHWiAv32dFeK8qUCY1xTnyDtscNh1jmjKin1cwxUm3GaP8Mpap",
  "key2": "3zBB7jE7YXt87v7LJ6cMAEynd9JHmZTx22HZgfRktyfz1GVw4yAhvq6NraZsqWF8x5rmCjNazjNK6qy2Q2bukNF7",
  "key3": "25Hqjw8NxQGfQ8y1wUp6aivjbEGU4Zp1ycfH6ZsF97etT2hHKasgm322a4FDxN9x5oGUEo2zAnGL6RCF4AFHjTEb",
  "key4": "37QDoDjqh48kCfYd6zEHh5RyY1JsLekgAATNrzsteXG4P7wgobvvJwmDBuRi4QqmBKNcShzGvMtEmuVLWxjfoVTC",
  "key5": "4XptY66kHo1xJNPVhmQfQDbg1Ux7nE9o4TpiYZAy4TYVkHSce885mgFubXX9QzfCAMmE4apvNu9P8bfh6zXboRUF",
  "key6": "6YT5t6CFqAonA14KJUCuygUSMRKLkmZckRk8iE65Ado9hht3e3GM6brzDtXMqrcb7cHofNDGBrnpKd6UCzVwwYU",
  "key7": "3tiqm6ps17oLwYsWf7TMrBJkj9b8XkQs9uTH5zF4eJcwqroEFSz1B5aKGzeGjDpggwtVUs8oQo8DQipqpRnQsujj",
  "key8": "61qNL6axvFibY67XRDV3RhwKWzWF3eoKNWEWGq9WjXXwby4EyxRdosDoj9MyWr8WFiYjtTpNY7AWoPvfXeyi8yL8",
  "key9": "5cjUgYLKxvdDDYUJC5JFPERA59rDCFbjWWNm6UxDCgVnvzA12zLLidQwPDTeu4q4XD8ZCeBdSvyELhVm9FBkzf39",
  "key10": "6158T7bt7LCAGhqNMYzedq6m4VUNEjeQFZ9wUBiVyRD7s7iGZ9EtoTq7XoAhjLLn96YTeFPUFwXhKvbBbtiJzYgA",
  "key11": "2UbPRbNBhhuuF61agoCPhhjfapDhwJXXgWvPjffPA9xATpjR4BXxmRCur9d3RKp5hR6LowguD4cKjjxXaPeu7HMh",
  "key12": "4LkAukgC87AD7anYuvCBwtiKRfeGHoDhwf3LK3Q3Fi1XcwmrSSfUDXrtjaSDWk9Twu2QeL42emv3PhyWt8a4nw9h",
  "key13": "SEYZubiTsJMY7bF19eqb9WvdT2wzq4kq4n4danhWKKfTuM3ZAuLpDoLx9AFK6DajjCjzomYGRmcc62KupbSZj8y",
  "key14": "4cDjmjiQaNd5YqLv4vrs7Dqg2qoZDxvHQo3jtbjtoB6SVeekKQBpcuuz59LCEVPQas5qmdU7AezuMs8doqHUYRX3",
  "key15": "4cEy7uZ1sXpDmdyeSrYoZLFQmA3UyaXfJC2m3SiLi3qWoaMLs33hbkj3upkTH6omLyUCz9w4DKiMLwh8bWLqtHYC",
  "key16": "67Y2EFi4zigoBTzWrsDLvddCxrfgdbMaRSQRW9txYo7WDgwvcwfV2Wm5DBtEBaTLgW4Li2wSp97SfcUQsgDUGw4r",
  "key17": "3yVexNeAAHLUankiiM3Vf1e5N99H74RKBtDVKn1cZNXn85dedtH6YwewEEdfrWPQpWAKpshNu9YNnbttB6JTgPnf",
  "key18": "4QkpdsRj9CP6MtvQu7FHxoWBBeVW9uNVnHYnx6RJ3Tsk77EFxRkQGXzvsf3jNakYBLC4nMHziMaqwUwdkBvWX43B",
  "key19": "Uf3mccXraprVt92uDhwA2DzqUmzgmApSgXzpnP6LYYuSUFFKdQBP4ssE9MVedNG1vaC5fZD7x3fFpCPy1GeH7gw",
  "key20": "33UepQFvu5Hj37c1yyp87AhRRRVXHRuytdNWGjpC2ZgS7y7w3yhLgdxa3rQSf53iMoDjZ185RfbXAtEXH8ng4kb4",
  "key21": "2N6ZmvbREQ8GEStde9AjZcr7Ub3XxjRwHvcYxeqFg6P1VW2iP848y6KEa4bNx9Uxqd7Ng2fFacy3RUdBRWHcRwhV",
  "key22": "5ZpC2RC1s28rNDBvZpMj9Zec5e4YYpuMUxgR77y4pUsk8DnhCU8J2H5Aww7aiNCT2RKFRC1xgF6roKduWyZJBPWn",
  "key23": "k8E4aT6fWTviVqirzJBzHJKWwJstCK5eUcspZ98ppBPcqnjKAL8wyJPgsmYgj3G8VHP9xwRgaSFLVcXaoboTsaf",
  "key24": "4P9apgfEZANhbbBEgGDsu4LJ81HxMLNvYqGW19eRoxGWzL4BNQo45ggnQXRuiA9FkEsaDS35BWvYzihSoR7G17CP",
  "key25": "4S6Q8wArZcA37vyZHMPDixHFH2F3vfFx1PcLCxrh1A8x4VqGCmiV88yWy2A5LYBhwyvsLmLgbZbuijtcevYpJhPN",
  "key26": "MTRsoKNcNqtZwBkhGS9pyq8WWjxLirQZprvEnFrCxpPRC1iKSH8XtzyQg6J1c5ZCqssEXQtKYHh4J8VF3HoQqwX",
  "key27": "5fCqLz4Bbz4wZbhNh2c7fiEjGuvu6YorhpcsJsz6x8FT9Em74dnioiEMrWpLNn5wFLbVVU77GDNk7wEdFfRNurSG",
  "key28": "2T6SKNAsCiWiP7KkCQwd1HUpuRPuRWvnQQcnjrpZGu3mTjdUdeQxxuKGFbdx9U4YDhQ8o6aAaQcm9iETVtbUg2g5",
  "key29": "4rznU5BiYZBGr48izo1zEHiAFQii3XPvEA1EQA6VbYjr9MKkKJgtWjv8peqed32kQDZ9uDmSm6LYuBVMAqzWMqkM",
  "key30": "2DqYNuCjxAnv2iycGPQePjXSW4dW6BrENC1ayk92mrfqjFqspGg1dBcftBE7q4VG4ngJjaWDDvgXjKCtVRP1GL1G",
  "key31": "jPhvsBmL6K7nJdbfTcxndTtcGU7kxxbs37nf3RunzTfac2NDCrjcQqvF4Cr5L6ZDwXGx7twJdQcp4B36oELNrwj",
  "key32": "4DBJWs87kqC26Vg4MRcFYdWyamS9fJg9j85p5NeKkUMai1MZpd9M871NTtVJrpggv7HU8QpNx1QyCm95yiGJ7QTA",
  "key33": "2tshoAJUBfKSquV3FXWSoGjojw8gwxw4L6qRjX2Gzp21fpPRdEt3CNxk8KzbrrTkgxazuDABDgYQQkbrYaxt7UUY",
  "key34": "3PgtbkwyU4V154CFEVrg7yo8wTV8hEtu45NE7f2YS49hy2ShoNCZudD7JuGqLKbg1xZxEh9aNwdWZeh89qavjBgE",
  "key35": "5WQi5shFeZ399j4bmXpUqpSEa5VSbnXxdFT4uaBPM9MgbhRpCnuBDkTotyncAttxJGfBoeyvBSXmTxr86pbttqEe",
  "key36": "66wCqqN1oboZYqZhfitbXWGtbMjmZ66wguhKJqtfFBXzLkczJysDPJXq34pwLkvnhdcN26T9GkVBr81jfo6ZEPpN",
  "key37": "3DdzcbAjMgTebSgDfxK5Gu8tVymEXSLwL8DCz1wy817P4F2CvAcvUpRP4h69nzbn64cGoD24aUzWhPR34KaTpEZD",
  "key38": "rRKgCTJJj9TNkuP7nKHoApmLVp82w3TnMC8VhDf2skGnci83CMRaJPrDdW8rxg75MBDTPXLpuKyMcuNErD3Sfp3",
  "key39": "4p6uAyUz84gGRV2JSksDZNqUA3ArtsR2HXvM26qwHgqcvbNUiGGScTrBsQR6vsrM8YoaJkNaGxYxXk71qLm9fr7x",
  "key40": "4YAz8gMDTmDxaKCXAi2ecmEHXQbWnAqc5rcpQnFh2YYZBWgEvemFZcfzfg2vYH9kwDPUA1vn1jyh7tC6XhpetyLs",
  "key41": "3d27Ws6iWHqsxRvAwBgqxvXnpfKBpoVGXJ67gDF2RK1Sw9MMgZ7Cmk73rQMZLRAfuiVa2QUKAtwBXvbe2htDXsd3",
  "key42": "4YdAdEqgBKHpwkxKthFuNgFx41tNLTSLY9dBFDjRvWaR25aWvzwwsAtWAfyJpp7kpatad6v2WTzbKhCeyHaRzcUD",
  "key43": "fP6WbHmsqvkAWSRa8UaU2hNthV6ZBBYtZWxfmdyRmNhbjWLfjGtbCsLDxqA3fbXPMZLETTTw8MZoREUCxUZkmmL",
  "key44": "2sDqHaTRfyix2sMmoKVDvytt6wjenPsRCpNaMM2hqskRSmBnfpC4zwLzk7zXB9EWCYt7TjjfENgWucQZNoUCfkyt",
  "key45": "5ZxyLqUFXXe7RFzmrPNSKcZ6Umv82Mqz5sjD3CvtUei9fJo3yxwDEU6uUwHKZvTcmfqz6MEGSA56QeSXTNpzQaJ8",
  "key46": "4P1NdZ2m3RXiBh3FYBTnhL9HPDdCcpcWnvT3p5hg8Lw1rmB5AZaeBYxZcUG7Dg8ddejFaKDmjCV5ybDJkN9tFEmu",
  "key47": "4ZDfFX9WjRPQkv4hmsqihNyyqxoUnxJJqCN2JKnokqbjJu7yXWpUwU8xX8pUZYkpSgEiF19SYuVM199jKxWKxNJD",
  "key48": "f5aVcdRUdM2GMTSkXLCMp6uy8Ya1oWWwtj9eVUkW14whbBLsRYZocSCVZZXhJ7xmZpgaZ4jQBFGxv8c4Rtbm17S",
  "key49": "34RgnXGiKk6cqpn2UtMb9XsyaVnvQ74PxgxaQdD2kvnikV3rCAqeUV1YZq7zs1PqzU8Est9aXEMJc8yPmG1LjSwB"
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
