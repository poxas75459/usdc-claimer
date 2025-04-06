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
    "4QD2Rxj9gxTnY13cwqn2nj9eg1MLPWRPj3bawTSMPkCsitc6B4v2Cj8N9kXqdSDEKKqKYfcno4AQV9GZK3rRqQMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MJRW7RVaaC7g12kziU7DhGktB8a7VG7Ekwx9i4WVzHEPHVwvayXdNmy7EZQk84WgXkcNNM3ex4FYqH5jAJmk7rW",
  "key1": "QDTRSxmBeCMJ7KbmydrYzKvkGyEcFDqw8uFBWodiha5KCu9qY3RbWHDjgkzDEATxGguV27R1hMDuYuJNGWRoNc3",
  "key2": "5FtfyrQQe16ycyu9qUP7tgJ11DdR5KaXypsdz9bQUtsbgytMNApG3vvnd8jC2VAHn3JcTbv38bmiwrYdBE5UzNdf",
  "key3": "33Cb3so81VexdDsuVPDCYmMMYwxcgq2TdrPJqukK3a6cgV5rgJopaZs7p6LUZH1SEKAJdoQYTAXGyBgJGvtwq1At",
  "key4": "2QGhjz1YD2yoZ3R5SPG37MzcFy2KTb6yH3d47M4LYcNfLx2DHx1r3JiX92E6adPUq4HdmhAZtvF3iLuzCbKWj3Qd",
  "key5": "KK2u4btYdfUWJy7kCQMMGoB3BKypDmB6T27nMsifVzM5krf4SZsTPw3LHWkt65rM45f9m8tqAtc8FPJ1dNgBrgC",
  "key6": "5xcsUA5DgnFpzetottx1pZeYDhb8aahWsBn3u77twNpR7TQwZWiFBoKZwexeojeQLpCToZBEQHPAATxXedoTCyfW",
  "key7": "2vxWHa1AEeMVgtdyP4ZUgx1PGJ99zKDix6wHX2AfdJ11Sck62C8j93kAYJuGXF3rCjrnFfmVSJBocWWQhTPxRt9N",
  "key8": "5vwZSqAxnHr8Xu3fG9XRQAsAb9pSuFEeMeE3vv4F3SzLLZw6jZkGnt11unxXU1V8X4D42Xu2WbdTuP4QQyEH1EF4",
  "key9": "quNQxV4YRMSKEHkadWHe4u1pmJ7dscAMc86EwpVwbCqD9g55KFCiejpW55D98kd3DAu5d99ENNim43FquyubQPX",
  "key10": "2atWCzwFavoMNiLuaAwuARHARsFAXrERTMewtyRHQi4p9ZdAB3P6pExW4mRoVPVc4aLfHG5e5YA117Xk32bwWHQd",
  "key11": "54FWXgKDNjZMjZTHtpiUEA6dNLAQ7ztazkQWWs8e8us28MzsKUa5QK1iYu5iciCyjbDQUwbXsV9gsAL6shStxxWV",
  "key12": "669zqQJM96bdemAgMWbiBz7AhE4kw1ZHa3GLVPidSE1BYdEhyTfEXaKyEbGjs8MyxDmb7dAa59EJDRRQ5NFtHrB1",
  "key13": "5qUkVEJGJHyxTFwY3seNewgP5Wka7B7g3TuxxedEXB7PpqwyM1mHLYaeGKJbKVNLFABwXB1VT7gyCypCY7NeETdA",
  "key14": "3RYDbdhAgwQtHCvG3DrrYCoknPgbEtNvTZriZeobethCV5vwZHsnWffMMkaKxSJ2s6NMZXggSAkTkJzdc3XmW9g1",
  "key15": "1zm5RAbH11PqMc5rVYRnxJFYjNgJRiN2fsDEWvjFyezb2WBV8T1azcHrVAuZXWUhPekaS9azAn7QNVRqRorsYEp",
  "key16": "4gwCGrGFazyDgSrDw7ExX4DGRWVJio1x1X232rbRAcUHEmCih2f9yGadeAT4E7GKbTZcpNFSucZWmY7DDGPSVnEq",
  "key17": "5xK3UK74dvsxmQjiUjJHVSELabZ3kW72E85qFHgW53z6hYgrHfoHSwKfY5Fhx372b7bWJTqR4Q1FBabnz7yJaC15",
  "key18": "3GHrNeyFZaEMset1qEzTNUKo1KPVUNoD8mPQhxW9tHpxVvymkeBU42ZtjJ7wrePbfjm6tdt46Hnh5mRbUBxXaZbA",
  "key19": "3xiA9ENCVKShtzvzASKsHF8xcRhCErVELgfbFSmfvVeov5oho1BbFxpUyyQdYixgVL4aJSt9raMPRTmjxFPLnz4q",
  "key20": "2CAL586Q7pk5iVfHxGXCuxpzBL2osEwLb9F9q6iuigghnRaE6AmVye6gFFHmwRyxtf2W1QR7xaFv6CCUAp2Tke6p",
  "key21": "4Q7WZc4Hg9XcHhKeY1amg8u79mzCeumduwu5tp4pQS4PcQbPMkrkHEMdSFVCcjjH3oSm1jj4AUMB2cMiMZpgrpt",
  "key22": "heo1atjTqCnqJYe7hLNNyYvWUpadmSkVM7rjpRxXKdZfMVCvBXkW11pYHaG1GqpN5MmGRL1g667y4Xr4NgaJsNw",
  "key23": "3nMuGL1dAB1JmB2b79413ELEcU2gVMityTbKPHaoPVqHENcEemJ1sbiBDqpwDsSCnnyBcQdhqyZw6XkZjJmjYD9t",
  "key24": "4rdzj11jwJGpxYY2ATv41Vk3GQkC3DoXjEFojQYghNYcXBuqbzw43p1RFqEn7LRGdfp3r8zb64xF7iN5rcuteze2",
  "key25": "2CFzPSozVav4wnZ4DZH17roqRkPtdL77bZ6Htkd2RB44VVvQNeCwy9y7SxDsie7Kh1rnjSanbES3EKhFUQT2PzCR",
  "key26": "4MTV21qfCXt7kR4RrBNzV7nNGsw82pDGWznjzpK8AD52iZhSoFuAFHiLa3bbHx3eJdQgLN6AXWfK4FoXRi6hZgN7",
  "key27": "4JjMKBxjF4DribwRJn2fDgSU6ZDPGLk7GQgJ4uMYSSf6uc2tHd79W44J6LVQq6hB1HUpWJGAYpaBSogNbUrNBvuT",
  "key28": "429tYEBSk45Z8Yh3xAKgtZXgrSic7XGFNGKeeFhHC8XWTQqcUz5Sdwz997kqLWK8Z5Z9r2PvwkHfwKuLQ6ez7Z3D",
  "key29": "2TZ8hP3ZEPdWsiT7AtGsurt9GhfibFSTYE6ZZvgYcMj3gjJsqUPhVQbRZG9zTWaYLLfELB5T1nvYJRL8ATq7cXKq",
  "key30": "5thtX73nSYywauEvkNhYSfpQWLoqagpfApQ37SLFFyhUf3E7Ms9raEJoFVJcK88MQ5oPp765Gdkk3UFKp5vCLhmQ",
  "key31": "4UDh3jQ5aavXhGpGhU2KQ7en9EeRR5KTdmuXQr2Rq11CLFejhNS58TqnerogTnzMt5nMAyhf54FhdwjAwWKkR9Wk",
  "key32": "FzZgfUSPxkwK9WCjVjjQYbxRfUAamJd3uzsT99793MZy7Q1iiDso6ybCkyrCvLAhJ4X8un1o8Ewk9Xi4AeEhabF",
  "key33": "HiRxeQjrW6gB3U7zng6ZwbnV5PwARdQEJRwW946dtUyctRidxfRhu56HspL9nyz3kh5kLRAqmf8jT6isBzcsZEs",
  "key34": "4AMajnQiYUfGiYFHgrfjEKqVTkbtb39SuppEAfFztYmt727HpKywqpTDcqc7r9azXEazMEsMC1zyRQbAjMCVVrjS",
  "key35": "3NFRyZJixBYPpQLwNDYf5RADEk1d3L2xuc8mJMooyQNM1MYPhF3cYgT4WtoPMjtdgrT7Uo3QP5RgZ8VyerQRSVUr"
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
