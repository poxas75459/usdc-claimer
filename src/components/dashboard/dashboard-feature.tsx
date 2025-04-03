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
    "27XMCEScb7faczvXQTCpdkyvZBbxYQLz2kirLkbXQyAfqFYbvLNUsZeRN6EhNdLuAd4zy669F5cJSDuuAFPEDDCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ckub4GKLSMaDU1EMZvjLdYSD98DTzPhNmTPiQvep15obvpKcfHophdLyUjhEgLSQhPJWc6UiF1TDTFxH2f5gUtA",
  "key1": "FUXrzJoSfRWHx8YY9YpZ85HiJp8hYAPiMs8Ei7SWqKoYNum5CqXzPcxBhJ5FuPNyLwF4vpAcmWvfJEGDKV9qpX2",
  "key2": "2y1MhKy6CYSAYgHpJPj4BDajQra5egj9n2jCRE3B8nrQMc3JWdCcb6KdbPmF6WgWmfrSanZkdAFeKkSwiFQQkmVm",
  "key3": "5CWK3Gfu2b5fHvvywAMBTPUFzTm7XWgM7KadgYqoHU3Mj52Mtme5FJtkzKiTKD9vTCVCJP7ut1NhDKDSU1J759f9",
  "key4": "4tBLHSous98ud9QiVuSKgY4mDaSAFUANew8qxWBQA4zFTiWMRgTqomvaFPH1vbBHU89wwXgXGELGpzLRvwps9PEN",
  "key5": "3eWZCeaFEAC8cZYaSV2axeAKognpAMAiG1rnGv7gzqnkox8JqqVLZfd3Wf9qwSBmXcvJXVJa8b7sbRMRZexvyXwW",
  "key6": "3vYu8DZ9KuHSBo9V95A94w7xCYijNFDnBTXiUDWdyQsGVWqoatMFzkQ97deM3QbMGE3vyrbRXofoHGxBgHNiQhVK",
  "key7": "56n2kSRossPLYRmgieMTwPvDz7DKVqrPejUEeVb6MJMewXaJSUavGwgzUX3jCiJ5c1QuvvuWT2yk4FnCkpkJT3kF",
  "key8": "4bd3cCZKi1cnDFHkmXhzhWbJjJHTcLsTJ3LrZSzPF5EYUdqktHeaiLzeb8B7EfjFJLYENwGU5VLw2DFcEJdsrL9q",
  "key9": "3bVzRTwpisZyeUpPt2DmJ1t1Vtg9WUwkSBuV8gdeGXhztgHNo7AAMAfefhRr3WPokWRLB4V6GxaHS5Xx4qRfzKiD",
  "key10": "3vM6Hp42aG5qrkTt2LKMeKekGtD6HemUrzXSPzEECTngbA91iHPB871KD4o6vVHbDwgtzJzBSp4rtnWcwycWcN5J",
  "key11": "2mDwsx97H5NYWdQy6TcHHw5XagUEE5Zy7ST8AMP7Kq2QqWWSkATbQg4esmHVTRou2js7syAa5kgZUkKCynQ84LK5",
  "key12": "5m6u56Sc5AEzFhjfnL2ADn4frTKHDtceuYsbfp4T19s8xD5aJNJzCyxfbzKavAn1tPHSa5SR2dRLoqfQUgmdxzbE",
  "key13": "gsK8Ukhjt4W3ptTP2e7QHvMAEzxGJ1eqJF4TUTrDKgcdrHE9LYUuEJEgLTcq5t9KJVyd3MTPb8Fb2rSKGNSChAm",
  "key14": "VMcL1VDhcrPdT4dnujBxqK3mi87QwBzEoSnEhp1SrzAgBfWS92KVL44ik4c3Fh6TME1SepjENAv2piePcTSV42y",
  "key15": "4poh35GKXSeUkcFYPFAdxYBVPnBhy3RjxMbbmWxfnM8Jbb9Y5Ejq6cWYBjTwXV5N7VC8St4LrQfpAgNpAQLXYBR5",
  "key16": "5EAxoAYyoqdwU7zAitKhrsPJXigGiGa5f2fWcf8tpT8VYi1TvtzjkG4tXKYzrJ5yTrTKJCYCDvnrTFkZSGyrgfNC",
  "key17": "2CfHf2DTAD2ydQNkLqGWA6T8GjrWAavDYnYYaW8Upb4iL8m6R7wGJqcJW56g4r3F51hGRmVUTawxQRuNjB2FdV8Q",
  "key18": "5XzAzP1LpGzku7oRqW1pF7pcysMaMmW7nhKnFt4aNyVPTmgayKAwGEDVdv7yADBUrVifsG4AWePx3Yi8csTrsL5x",
  "key19": "44C4JdGxgB4tFhtrf4ToddLtwqedUhua1Y87dRkAVBeZJ748cBQ2LKzMkihYTw3j8dmD4e3zwAU3uQeQ6PXmhUCt",
  "key20": "44GdkjpR45e4LfHVCpZGgTFnDn7cZJ2E5DwQGr41xwUfhs3JKepZpk1mbMFJkzC9wgo7N3GPkzguXVi8jEiXWcMY",
  "key21": "5tzZd5f2SV2eeuHbnq9WvZPG3BrBgpRtjWCagC2qJZ5GWtVukq3ZM6XCaAsWsLmBikxhkeSkL6DjcqX4D41kYJvc",
  "key22": "2cshujYTbmPBnU3aMuVoo24gL2nAtgkgLV7pxaUMuWNHxRtuetyJ2zq6BFJZ1bcCC74t5qTDKdBTWrL6FXkzqkV8",
  "key23": "2g9LneLjBeUm9S451VQpCBXQG2iHBfBjB6uV9fUussZ5y174LhpLYexDja6ufaYLTtLXoMaPeAAj7HhnfapRGAFB",
  "key24": "5R7iBJUis21xBMyB8RjdQ8i9nYkXYB2yzdJs9U8HvAZ1kNLdAZzrLRWkL49WviEMkGC7M6u1bAebzqL6fXbuwaxn",
  "key25": "2MztjqfBinZwN296NkucgGd9hUcQpXnxv5qM5Nmne2YfqPLvnDGxjfZSnXWVpn31JMMuYEjWmBWn5mPd2xz6x8FM",
  "key26": "E6VryUnxfeqrq6bFvHePGWqaaZbUHLEexi3Tcpca9zCRMzCUfknmPszLRsySx1GUowBDFLZMfHLLZv8MUSdYhA1",
  "key27": "Y5TEbQguYWekKkv8QaANjnQc9nPXJWfkzcAZrYntXw4SVrfL6kszNx6ZzTx9u3MDfBL7WmTLJDLCoCLgKbUsWAo",
  "key28": "3exfm7XWQFHmYFAxBWc31yWwYCnPFercTByPW5jabnwJUPpD31mzVoWy5TmESzStzNktr4nKoncMkFCKHVjjtd65",
  "key29": "4K5XCRyNBetjQYzDmKy4gyvEnog1YjEumeq6H5fegxcHqH1ZDyWu9bVPmPDmnMQicmnZ6KT6Qh3GmvsVtJt5VFCN",
  "key30": "4cHE9UshTG7WZLiJ4jDwcyvWZw1owRpFgYTvPkHLibXuYViVJ1g5N51c1HSn8mfiYQtWZin8M1ChmdrGG8EEpkxP",
  "key31": "3fc1V7yRF6uJ6m4BEw7h6RJM2G9b5Fz6TnL6XieLKtrHLxfz4yk4WAGCB121BHvgqHv8KmUnyvrPymjB65HxydPW",
  "key32": "21MkqnMafgGqUSKdWPvn25DiVkx71XLZcPzGQWBnPxHsr9yHVWahecYbKgj12CvjpNXeaW9gupa4MVTeSgDttGeq",
  "key33": "2ZrThh8JgVN9cj3VEuusz8EZoR7X3tMPRmoa14opgL6q5pQXTQMjVVNdGd98dRTEGCUNtpdo6JKKymDEcWYPTkXQ",
  "key34": "64ofkycjw69MmC1S8Jz8JV3bhKDJAu5CxxMtYnaVUb7N1k6p8THtmQve9Cv4inUwj9mXK6s49QtGdCU4jgGZ8jZc",
  "key35": "wTMuABeGTn2pHXXWr7exykHptpM7RVMXwqeQFfztFMr2tRSYJe2NM5W9zKCRKFnKmufCV3TK3EHWRyAp17MLf8e",
  "key36": "1Kai8D6ExVdzHDELN6wshzaVtju43yCc5B8SrYTtNiLEFqVNUAAJU1moV4YujxR1gibuua1qKVoosDp9Z2kerk3",
  "key37": "39xnhU8iBxNDgiDCaeLPrVHzMjV49PCvZSjCtefoJaycSxCtu4cvyBtXdAfCJVQM3yVJdcTm1eFeQhTxnzTHVLh",
  "key38": "25gs1azjxj8obLiTT5ENfGAFJLuyrH19JwdauVnERKqnHt32y1BuAr2qbgA1tkmaZKc94prQKbS8qqGkYd4QSBHB",
  "key39": "2XkQcHEzxGwQHDWTjKnoMK3ArwGvLWgHdaShxhJ72hWuad6Ku1Pqk2RDhVxtjM9v7voJ3CyB2fNBWNDDdRsLMkb",
  "key40": "45GcertGbDD9SVT2sjoag7r36xL4mMB48wcPFvoEcTct7itAaH5QzHZNYzkJFqbeNNA82V9CdRbWnAUUNFgnggUt",
  "key41": "A5iGqpdQ32v53hr5ci9NvvHEvm7spW3JdBUwaxmqq4umRhZEcfnrcUem5nCxk8wFosKmHrgubr1wk2pso9R5dC9"
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
