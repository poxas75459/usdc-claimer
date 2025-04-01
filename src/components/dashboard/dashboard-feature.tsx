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
    "3Q73vpFuVfkEk9ubrafvCJnxheX69xjCRmRgVLVRiQEU24zmVEHvMHfyKcaP3Z8ijV9YfWKdmAH3sTEgRFijMZYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2veTXbdvPBTh84AMFfCL4K5Z2T3tQmGLGmmwoXHTfX4Xppx8Z9Hg5sV7pTHMLwWpQFq1duzsL6RkDCD7r36Kykbf",
  "key1": "3uCbWsDULbHeq4qU9Xjp4qn8Fg5YRV7igAR8UpnuzM4hQboaVEVP4zhfhLHfP89LUbe5m1EHXooQj5PQuUt5i8Vf",
  "key2": "4E4YLSX2SUwogyW9xTqaaKBT1MvPbKEddBiN66pyXRNNvm1KnpjYUPLK9k17hauYVnodCw6DwdorWakiAbB7Jmnr",
  "key3": "5qNxRStRRv2vcNHEQRqCePNoV7cjH1Vm3LfsNtNtAhzVjuCgRQFy7iPyHYn2e7zMDrSjAoc8ohY5b5EwS5kdE6Fa",
  "key4": "5AWGRhDLHpr59x2nphghe8k7X2fpGUVdHDQoxZAAU6YiJAf1H7L3HZwPfVSyAkbEYGPaNLYgagCnVBCoQeUE6xXu",
  "key5": "4Eie9P1XhCU7R47ZJRejNgq1ZYVepXLT1WoyRr8FvvaCAJyS8KfYHK4F2XAwLPf1ETsmsX64zsebfYRSLUyGK3os",
  "key6": "5vumfWoHiAybFzptS6dNa1AqagAfQMXaS5WT2M8fuDWWkN6WjFZMi4yRyk6RkmUu8yn2irsYFpF92JUS8GZmWsUS",
  "key7": "3uF4GEWrvwquTjbztwJdUZAT88PwQq5Q5gCgnjdv9UpKHDSyKqG7nwY4QE4yLVomovJ4MEW1RkJnJb3BqZVQnKiP",
  "key8": "syevBZ9y1sKSQUYeaU8aByG4Fzeg2rdidiRHezakTux5P3qypTPKuieiNSjVmmezF2cPe61L3hAFonmDLV9WGn3",
  "key9": "5Cqwv7GiYcWUeEfDYuCwgBgqJgWs3HyPNbW6iTSz2bQxoYVbrkXTZ7mgQhFULuMx4XBEBnyxD49ZA9nb7UpjUnJ3",
  "key10": "5bqqs72tp9ZMutpW6v1GSvRskVj5aPwrNVHbwetm6cuFpiBGhu2njac7HR9wnkBsdtn1kPsvkTvULDx2PVjtWLbX",
  "key11": "5Beua4qHZq4x1ft24pwCGwxNDQS4SjQxTbVi2mHSzhgBBeJHEbGV2xtaacra2HfevVCkWRNGRQckLXYcnuuVPhC8",
  "key12": "WAqAtxBuFaTayk13oTRrAsHWbaeA4EBmyfifjVHy2rxBny5jHmCboQceAza5r7jQ6GJV3m3y1WWsFLEu56Tmd8G",
  "key13": "4ydGyzsBmu6mWExKNjNfdoqa9Nn6XUHQB7Mkzzy8QPutQCtjt21Z2hqwsNCVz2EdQXbquvnxSs8bjUBKUNJtZk2W",
  "key14": "4hQXUM97SHkkCpKV9jjCfyHjtk66GPsShDNHFB8kXfdPFtZqUHncrXaBUTnPDQoAUNoSNzCq5JP6Krx77F3LxsUh",
  "key15": "4MHN5EmipacGyaPXHaHiQoLCWYmcVkUqk75JfW7DDrqYiTeq415y7YWw61VZdr2oa6M63845nGrNA8Va3BuoBzje",
  "key16": "4gvpJhv2JLFVT2DoW46tZ7m1j5MSdpgNu7HKDvP5tDBauVMFGWb31rrXFQKKAXWpLXw5xpqzocVwjYLuu2s16jdt",
  "key17": "5ygjKjz7qwymXnNtPiuE1jSyP1LVCk4cgerMDGfD1Y5M76KL3bkNbBZnWiLCt9SxJYzHcsJNUq2Mbc6SoNn98XQG",
  "key18": "2XeyRuxMiJE2bcvpGwZc4t1ri6faYFrzuzEKZtCLpvQsShZeKgMjSVEEtghyznV17hRuTrYswzA6XstXLGSmYxWX",
  "key19": "46usJaamCcuwRBYUtaLhgxsMaMhPVKsoZAFiwJRXvGYZVCFWg9LBEMnrzK9kAD8co4hCjhfeXwvzZnx3Ve6fqVM4",
  "key20": "5dcG7S8DJUjuDj7UYnPL52SYdcdUKYUPkGQtdgtGr3JoEJEDtzypUE7zgai2UfU9rBKwHN8nL3AkUd7miFUHTRp",
  "key21": "325dCMV8TAWaKu8iaSk4Ymvtdz2s69fvVZan4Db9MwFdCy3DSa9vC77N7fYqfRg8owa9jgaELfXsQRYyFFoLVjA7",
  "key22": "5PbmSoReAUdMu2ZLC82AG9sTBU3NVFWr1ABbwBifFeBGv2J3LzDvzEx4owrxwKzu6bF86jUCpwEzomCUUqLvxwYV",
  "key23": "UNoZ1gApAzYLFRk4vShsMH5ZgEoFKbAWo3iJsgsTjF7BgVE2GZzfW3f82idAY4qbJ86js2WcL6791taKrT8hxso",
  "key24": "3EkzXKRaqqAruhB33KKRHQiY5dukTTR9QdamYARNemmcja7sqUPYm46o1CjFgQ31gXEmsZ2x1j9mhK5YoQYe84jJ",
  "key25": "2PiSChEVZ783yK8mBoyhr2Ykn72dRZzUQ2F1LgGQWzmcbNJoEST9Sbv69z6KX9fJjBzR4vRPBRkAd8nutjPTcXzE",
  "key26": "dyRmU91rWNVSvghs9qEFx8X9XuTVdRiA6qNsVWUr79P4nrkCrbDAHEu53DYgZY66WmdKkEf7eJ7zNzVgMovpSEw",
  "key27": "2D6Q3gHKaGRtCSvBeMcR4CxMY2tiAhGJssRn8syXwCESwzyS2dfKHLb4FqBSGkZv2k3mYTDHrPM8AFCeDrYgAMwg",
  "key28": "4SGvuXNCqwwu2gyMmB85Yn2wanguV61F5xPo9h2SFk5dU3LdGXSNfEyBCH5q8JWusLR2hCCgg1EAfKgTwSbg7KRx",
  "key29": "4dTv5Tv44gtXSmWfrjYKjKLeXR2TkbAr3YKqKztTPqCukEUyh9M9MxBBdhr9pSnKH37e8e18JQWLzHZHSzKeC3u6",
  "key30": "3jEM8RtBiwyWrQfoXEoLm4fmDHy4UA6LSzJfPE5gpoSuaTX9zpUexPjmfhuZ2W8FrDXtVeQHRxwriTnuqoyP7NXq",
  "key31": "21JkxEwxjAzzZHgrgVSrSKejSdEFDwHBdffaSM3hqh3qWnJp23dmjk3AeMLzzFeABX2x1jzizrJ8GAoogmuLvuAc",
  "key32": "2v3A26BVPDfnFACdL6vxi9eUV44sKp278nRjP2AV7HBjctLqVP4Fh6gSxrU8YxKUoKgXbHwci72ydzRz68LjeTfu",
  "key33": "KoqnbbrM2v3YWN5tjQjxBhkSGDw9mcwpiKV8CAtZcXpBq5a9WsfyFMGhy8qGsE5vpo7sxBiuXM62yz1Fs7n5DZv",
  "key34": "2ErH19ysSzBrFLZiDpWQ6GSy3GsLcpGo5psS8EZ7ai8sWFzkW667o1mJkdV6gyd1yMQEUiGvgCZPKCa2HMJZvkpf",
  "key35": "3qLPs7n8N55DQEwTaQDeN8T4t6sVYaf9PJfXXKSH4hKCMpEDwftULMPTB7iMR7jzVGHUbko2dTgGQdASyDhtaiig",
  "key36": "5wrk8tGAneT69Dq3X1hg7KZiuuQFjjDjZBc8Kjt23rYNnHtcvvJvwVSYe8eob28gsNaxiVeHW8VdJYwBGvo6muVJ",
  "key37": "39JJa4scz8x4CSJ6tUNhXhdnoAgfrhyU4nt5CfGtnhihgAfjKLYtWNsc6QABD37y9Eux4gX9ms28XUzaXC2BEAzb",
  "key38": "66sXha5QgnYLH1h64ja8z1H81Kei7K3eUKJyfk4AuuS6hL1AihQJu3spFPogXBfMkMaQ3YaYWFf8cMmw5ZVvVPYh",
  "key39": "3cZjwjcwgQCzqraGfhJiCY17oJzoELRBV9eRt5BB6ZoHaNDLMwgVVw4dfiNpiVGZABaLkV8RH9P42cMqkUAW4MuL",
  "key40": "3cZRuqJG4zVCj3DBRF6GoUf2RuNdZ8Dzv5qQrPGXhyCSWWtUb8kizcQ8AjGU77UnmA5tujHzYFrF7867VAiT2zD5",
  "key41": "3FAeGigQSDRn8FHdPTZiopL5wmkoWovAo931eS5fgbNyxgrFvGQ2Np4iucNfWqZt3xdkyoSjm3Pb4PXwFEogbK94",
  "key42": "TZ6SNwAg2xqcWQLrkene4LqUhKzxTTpWmb6Y9dq33CKEcsAYnFbGy7We2dX3fkUbcVMS2XREc7aFkXHSrkQj1r6",
  "key43": "5JAdyLsWN7tMJWgvaXeFqGrhinuxe3khfueMg1rN9DkGk8C9nZNRDeLN2JeSA995WUE22xQreseSJTszpq5jDuHB"
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
