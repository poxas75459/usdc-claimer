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
    "5dpVEEavRNDcpSGx2syATBfN3ttULZmy3vNQ4LratXjTm9ghoi8cnwEHrRFVD3uYHsMt2eayQGGzjtFwVzQu7zue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ByfK9tWwmRmugUydMXmpb8u7n3VwwPCBM6S7TV83gipwxwQMpGELFyUwxrnm9taZT12vKThnPYEiUpag6UXuiRN",
  "key1": "4N3jVCccPM7yWkg5yqHBze23pWQTx1AnJP3hSmNoEHDGws5xZA48xxzbWUPSZNgZz2TranF5p6MQaZWiC1ywe8Tk",
  "key2": "3PNJYFqh5vLL3YF1UdiWi8Y93KHjiFL9k4rBS6xtGfcyeRZsdKpXBJoR1Bqb4PmbHxwRotfj7yUHSsqbTRNava21",
  "key3": "VVWbx2rEEoxvn4UjQyUc8uy23gSaNMdMjDyPXU5hE8pc89TTRKxWa2hzPL6raQsApdUvHtdzXFiu6BvfD1fGAq9",
  "key4": "ns6HFdit4Jj2MhAYYQPsF49wZwNgfEJRH4sCqg8TSLijkGvByi9zQGLd6ybTEUBevEiYSwKWdogPosCc6q47bMr",
  "key5": "2sVhMBp2z1rtUCXF5oFj29hJWdY5SKxbuna19aUbwrvrWHAeXpffY7pLxShaZdvCf4q2pTdWvYLhwn9aRiXc6Z3o",
  "key6": "5Ag6rrEVQpNVYyrGNEixxpXPVAHNnjj7tqhP1zdSn7jGD9CwLYpTc2QLXaPSpsrLsRpksfSUvNnDaVkJHbnooB9V",
  "key7": "DU8xFkNhxhprJXv6taaitx3oJZR1n7zRf7xoHEASu4DeixKaMrEBriJyNyHUCrappTBNLcyW71vUzxwUvkabeEK",
  "key8": "4s7iRDPEuHzcaYkJtyeyAdCqooWJ1euEDSLrQQUsPA2s7TTF5Rxi7qfZ1hhKWrFTuw5J1fb8KSHAdDBVxjUNvpGf",
  "key9": "4nyXvSxBMk4FDyMPgKHQmXmv7quaWKQUwsVRqAz3bQrCYutpzQ78NJPjavVnSV9wJJTnB8HSNR4dJyUrkWKuR2mH",
  "key10": "4qnwnJmNFLvsTWGwg2tDyMK1dxxJqZk4EfU4Vtbs4mctberyiYB3kDdhuEfY3T8cbVYzEk9EaypUJNRktqCNed8x",
  "key11": "4ex1LmCR6nGfkuJao7wAMdnU88FHfPsy81RwRRENt5qtLbNczAzj3TvQ56VZ3evZE9SG8LYM92im6uXEH4bp3mJE",
  "key12": "zYQenkG8x1VyDoXj6pd4QRtPA7ZVTfDqsvk2hNdZVJXhEBk8WZHGVfrnNueGeJoJDsk6Zjfh3heYdsPb2v9G11y",
  "key13": "3GregEtnVPARaxDcK1F6SLYugi144KigQ7rSaQmc5NNdiPemeLd6BeoHZDWVKnyoy3tJZPUeUQqg1JETHkBNgeRs",
  "key14": "cFhTw3P1H2bMG6Twz3enWgJXroP9ZnSBra9tVo1eLVQt7c9cpCp4qGvtNi218f55Sj3qwiBioAttzSPwMumHMAf",
  "key15": "3hy2XzvQj6RAypYtSMWbgWYpCMnujvTC4gsRm5kQBTFiB2Eqc4YxgkrFUQSMbJWgPc7bDWgfHaywKvAnwWB55326",
  "key16": "5bkAXtv862ZzTfbQnxXRwargzY8tMoU9DurtTbqRH4hEDz9buPVxQSMuKojBc3JY2eR3MY7XtjeBS8q6gX7FyS7P",
  "key17": "46VwaFrJQyZQkqJfcKypdLWitdo7HmSXHBRh8XwwC4yuYCYTFmWSNwrkGKmrKwAE6JN8B7oyQEKkPZBBPqSqEfoG",
  "key18": "3dqGLaW4AJwoDdu2Hc321yyRJayNDP2wy8r5NgBN5oAHXiZKbhwzGbjjhrfepXtropFdVmgf7mDNjBT9oN5wWsKx",
  "key19": "53d2wH7frKgQppqAjkh2KvjVwzRJELWGcczRHeiPeM6te7bKjZoAEaKYqS4z8qMK1BNCYQWtBUb9GakGRvF3U9hN",
  "key20": "2LrrVzMNBpLYqTUFCBLktctWgQNty1L1tXrfmtgXX3H6hi7kbmPrBpyYuvH9QhdxESgsDZB6NEFxbZwUbmS53caB",
  "key21": "2vUbw9kcsmeLeywQ3NgMS9h8Zemr1HK3LdvkFWqa6eK5y6yWcWqBQ9Yruk3jHrrS5Z9YZrUjihJ1T77tQHA81KBw",
  "key22": "5Mv5ueB6oSGLHQAzBYAWSEGEa4MeHGWbfrDK5hqL5ueKWUNhmy1mBnCN3PjTqqA16Hep47X9UvB5t5tyMvs1nsZV",
  "key23": "VFbJJ7vjfyfhZLnE9zeNzwJLKqnPSr33HMyGvujFVuUEoRFrLkEBJck4vgBdAj9nrF6zCxdc3izdYxLBpLW622J",
  "key24": "K9fAB9Qc55QnSVkM2w8TEYPevQJVQ7XRVNokVZXTycw56wCc8mWykujDvuisaDojR68ZMciWuxFQPDf4WJiCHAs",
  "key25": "3ePsk1yFx7vBrrNtpNGWKR4fPW9NWPQhKsWMH8H17HfBpTn8sgCDUNriSRC7npd5wdHXFjXHPRvKjKPRPQfABLiy",
  "key26": "3Q5yeSkS1APVfh9TNVbzNeWfmM1xkJHKKp5RQyqYyFzmT8z1dK7o8p3vo7NZLfHxyySZiCYjFJQZ9hnpSZydZMGV",
  "key27": "G9soSP9Dn67HDjz2nCG7Hj5VmWSZKWL5FXPWt42CdwKZWud3hArBPmZHJgW3jiSYPMAyPWVCZFtcVBFzLJNZVWK",
  "key28": "3C64QkhDqFeCBCqM1Fhfdwcdsb8qPkmEuaAkf2ixruNxoo5CFTTH4c5HfGTWXqxL8GBiVpD8Tnx7cBPTc54cZMHQ",
  "key29": "5QzVqwtDfRXzRJpy5ZjVHMz2zXn22j4XyM5JXHS6yB4RJSatyeffNb7QQoGCEzmk5VVvUhTQmo9i3LnqN4xoBD6w",
  "key30": "3fShHfXLKHVFbGavwTxMHK6w5fV3hARL6mWMz9XktqeZuaiw7ULrnVfuGfXxtPdUBVmQULfcZyNaQrXqwDSaiFm9",
  "key31": "29AezY62FbLYQrym7zLVuWZHqYg7BDr1cSmgP1sLkLyncvarpk9LBrsUVyHkKdJq75ry4ybYLeT7jGicwzMQ8Qh1",
  "key32": "5mY8wWg8DgA8xhiepd5yvusqLeWLmX6LkZH2DBfKk7vKoRf2iWV3JrhhG3MJtsgsv2aLVPiXbmqS5fLYi99CBXxA",
  "key33": "2NgBUrwAVx4UdKYwUe9sbyTEmR8Pyd1ZwhESmnUZNGLaBcusQw3CgWiEB9maoHKmpYgxoUpM7F95MaifWLxfoT4b",
  "key34": "4Ve6h38Fu8sRfW32fP2t8s9yY3RBkLJKXfpwPamiDwdqmMyVEQJQBzycyM735216gg8AY2xdMqNz7fYWjHRq431P",
  "key35": "5kXVdfBnCwyf5yCABVWAMThet5fkB5pQT4UhbzpH16YYJLPhiGhMxJi7vJ1dn4QXBavccGZQ3JmMoMncqaU9gTzF",
  "key36": "4h5a28wFugzJmFVuwXPmh6QvJuqdhjCaXjzYC63FTirXyJRR31qg1oLFFrpZcJEopNVAfa28D6H5AA79wLWwNau8",
  "key37": "3GS26iLjFfeTd8afpe1vRDBcPaBmKq7nUCABHBjCiG9LhnL8GVmMeAm4DqW2kG8EGnbhfM8AbTnfuWqsTuLhAZct",
  "key38": "3wPqPacVQXnkV29FK2qtigxMqN35QYjcWsTKzedwSqbD4c4RKPYaVx6edB9C6T19JPYheTxjRR5PgRJy8YUys21F",
  "key39": "3rATkFhGkLHAasTvbJdj2ghHGqJySMn7Bho2jvbbsusgoRpa4qjBPPUcUDQ9RPRdCwpkMBonBeegfS6b1cfEq2jX",
  "key40": "4p6QAu9DhfpebC13LiJoVaVqApygXV3sZJLgwo3pYZccdcBuKPM5J5iLUxjHgk4XPkmYbTfXMXQ6b4UBUxe5vGLC",
  "key41": "3nY12nNjyZ5T5oy2magEZF6TERAmSfEW9Dr3FhosX18EtAbpyjTgDfWztbSWi9BgXDhxE7wDsT7mR5krUWGzbVSb",
  "key42": "4vjWe4AktmfE9cjaVUCj5a1w4daeraDTgjGJS558UMRxV7Wdj2jByHmSr5oHT4bvwNRWTmAForZq3FR2ygBmmPcP",
  "key43": "3qgJDB1x5qbCi5pHEhQbh2jUDYBemF1pHKAoGnrdyJQfvmw6xYDzhcy34oQMBWqKJLWKz9AsT63TqPdtUzaZBtX5",
  "key44": "4KmFewtf9j7Z1q4CcvGSZUdhG1DWFTRA3Vkp3UACCCYJqnNMNtGiNVuyW9brGCS567nCeMXhLbonK52WyBaJDZ2L",
  "key45": "4gjZz1ZMVGE45RfxY5Tszca7GGgaHWmP1JqoDKN99y3VV5Txx8LHiyfS8Mpr6fNpAn1e9cTT3nUZxHUy87DKkeX2",
  "key46": "4z2Di5WT9ZNqnpSPTigBB421SFCpXwHvAoTvWxzGpA5J1cPNFr3LfonHLrmruEzSBq22KegASdnqvaiys2GS3LUF",
  "key47": "5xKnVoiLHmLMCMHETZWQM7qNZqVqNw1QmjJGJtLWmJD8NCUBp9x5Sr2tYrrJYCXJw4P8vWPVVys7RkUid4ZYnYm8"
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
