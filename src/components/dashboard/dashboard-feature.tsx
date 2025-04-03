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
    "2gHv1BNtb5EY39fnuRtQTJ8ZN8X7Kg3PM7tiYoLdTGoJGpEPCvoqQsDTnJEbn2M2ajMxjnrTw85V4i2JpVM9zpQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57t3W1819WhQx5rVYe6PXKuBjjawpRGoSnGFvLCMMdP4XdHr1bsmSE1pCYzoWS6Q6VvJNktR4LNnyuGey7TxCGZs",
  "key1": "YcuWXYR8vkDM5Zbmv8j5cvxN7r78oVDy6JD7FRHtmy8hTwqn58CNDbKa1HotqGmNXqJZJNYDy7PJ5Sj28BiuKPd",
  "key2": "wfdfkaiKT1wrH9V27UuwvsTzb1yzYVaEZjkXQD5y5HyotFSwavMRAvK2Djf6CPFk2iPaBJgJHGSae1QtVmocNcT",
  "key3": "3h1PwRqUGgxrHTiTDXrANdJXFSVReDDckaSbZvy21ddm35kRtRQ8m9wwKyvRHNdzUFpRkMUTfHHLxVRSUCXb6HoJ",
  "key4": "dpzVdVr3Vy2eWwV1JKAq6SNahvfos4gnCeQADKtAq2CVu6FZoqmgeuAZLugmUB5znDzfortUJsWdq8y7LCVDo4q",
  "key5": "57DBmkrRcJsZzMgxdcxhrNpLBGYDDFRnfUimuZs1zquv2Eujjs6VuYPGtFsgywDQLfhJuJVKvdKEr8YAedmtj4s5",
  "key6": "5KJ4WHV5zW9Yoy3Ym2AUP3NCfa4an1MAo8UPhK88ibC9dcVbY2RphSkDkXCX2NUFAUz2zS8QxkcdwVrMjMhXsikF",
  "key7": "44ZYbrf3FbcgYcd4AW3faxT3vgPgkaVxeRsTTVT9HGJAquKiDZpvpHYon1jPofu8LSSqRuXKbj6ZVubfrfk5owPm",
  "key8": "3kcH9wAzHDWGsyg2Nb61VMh3LX7NmbNEicmgn4zKbW4Bavxr963tPiGSULUogkvp6TwDge1wDbneKnkRs3za5cMK",
  "key9": "4Yn45mMaDQvkEaCTVDzhHopzzAUagrkPoDuPzL3bteLHQvwR1nUkxq5hjwkMwb2AovHvWB3cpQwu2JauUSqDX7EE",
  "key10": "4J97mFJiGkV8SNvATG3xhre9aAHVJdJTPy7VheL8yB4gUR7wFWqybMPN9n7vCJaWuzXobYAZUoLgm1qGJaEfuwAE",
  "key11": "5n7nc3A5dsKti3qgSqnLUHXJVDxusMkMF6kPioqkSzoTE9s9uWFixEM8V5VCrm9rbjYhtUfZZvjBC4ZpsbEZykAL",
  "key12": "1gMG5it1LyTaYRcznzP26tx2NrJczfhFcs6y2Q4vhds1QfSfNURxRGW492E9VLJ7BWZNFRgtcpsfamHUEGQcHgu",
  "key13": "4Qd2oTz5WgbKnPcBvM2stPSCMLazagcgYSeA2ZCY5wzDsELFc8uSBSaCSpBHBGJsz9RDrrFvu3A4K4e4ZcHrZaDg",
  "key14": "2JTTRHZAaaGtyRGM5aHyegmD81sBhJ4ehfZ8ESkbcPmyS1mUFkL77A3F9NWoEMPbVyV3cbgpYsLSR8prx23Bgwg9",
  "key15": "5xY7kTq8SsriLmvWZQ8pYNWJ3R4iMZeBPEz4gimYRwdUB2EEm3LLHwnpcaTy4YTKzqnVQk8ZRiqVJxLuDDTNNQcx",
  "key16": "3zrLa8C1hGLeHYehpCWKjVggzY1ViEY9KGAuVpVsYaMbHBpH2va82bFhx8784Bp5dZ6hPirhvc5AmCwHnX8hrp81",
  "key17": "2zTh5vLymbkD164nuZepPbwCzQqNT2xjfTLfmv7Tt5va1ckLVZBMruHQStytcrMahCBzeEQEUiBkFu8urRozP1vg",
  "key18": "tFT4KEtMqJ6enS4ahNnLXiLm93199XFT95uuxyNhvPRrATD8kUaMVLYgVgHJ7VdQgEJ8pdo7LBsd7GwSCvwFo8M",
  "key19": "2GyGGrqqx58JFPXfeJUbwEx5WyJsmxPVJS6fUPS6by8F28wmV6vR95hZSq6ysX1EFQaZt9ksFMxPCQdioV1xjxYJ",
  "key20": "2tdsHSDfYicdig9JbvJgVoAKNvYyqkbLkGjunmvAzBnDhhnT7RVUDc1CSwUNSYUjSdg9aunKX3LyatCHiEHBvtww",
  "key21": "7HTUW9NnGuPgAFpYszaK8ZMHV8SRzWhAyAFVx6UTBW7BhKWzziqEmG7jsjwSjDQQaqxED14Q4U4JiuBjHto8fro",
  "key22": "4fDX1os5UoEYGLhNahZM7qnpy7gbyaMVpDD5RR3pGWCCdgTQxMWHQxUgTBZDkLmoAkP1464snT2qj3GZBtS3bVnv",
  "key23": "3oZ6zvYxVuU8KucQC2w6TyNRaeCSDnsGqQ4WX8gayoHn5iziDPoeoVQS8Kpp2qnX5wA8aaAiE46vsnt1hJR247aR",
  "key24": "n9Li7nJFY4hEGGQcm4xQW4QfHXCcUCzG8ohh64HEsKRTsjJ3B4FnptKXDaWXas5ff6NPM2uV82paipCPXpXg8Vc",
  "key25": "53STZegHziyAMcH2deCQLiqHvaRAAzyyc5DVzTpPqtTLPu5b5ouVmmMYH53yW8p5e3tp3PaU4nMYogrRs7CewLCy",
  "key26": "KGNLvqqmDVcCEmfeWf7rsskgKbTC6mZTo4mBETgDh84HFhKpHAdsNoFnyLstZhTZNgsEistXqXsx8onetp5xyen",
  "key27": "3iE8fetGSe3fTtErjgAhBZc8zym3bqqTNn6LsoPSnYPuxbH2DjMJbtmXUKehCq2RjHFT7wke1zDLkws12RGUs8Uy",
  "key28": "37UWXBjmEE4W2nwZAPFzJsAmMk1anyggJMuWgzzx7z8GQ8YLWnXJhfLBBhL9dkivUUpPt53Sj6sS1T7EW3yipYPe",
  "key29": "3YFE5gZohEVwuP9RKNWjGwwSRHwmDK5aZnQVcBn15a84C3S3kziP5GPUoNqbzpjFr9AsQeXkqxMYryttYhUD2C4H",
  "key30": "4AtfAxm3Rq9KNdwow79MT1qyNLALBtwRD8ENEGhn8Ryd47vqtJL4pRK1VZBwWNQQQxx9oJuFyY4iscQrmRvqUynD",
  "key31": "5SRTuqRWLNkxCbCsNixfK2VFycuqdXKUrh6QxQiWy25kc9cELQtE3cVSKqKduXhbCJX7LcjAY9FDspL6CpN3S8LP",
  "key32": "VQCbid1aEfeiB9XXLnwAnfB3oVv3MLPThg1JEXi4D4ht97rgikYts7FYM5ycri9VGhDF6nYhaj8bayuibmbVr25",
  "key33": "n6XT62JLSvWh7hiBTvZJftxtSqMKEjcYWW4AoDge8Y4P7xBccmN9qqEMn5zi9gbbG7fk9P21oeGyLNwkuCTb6SS",
  "key34": "2Zr47wfnaXm2y4DQ3bfjgA7dS8X27FWw5tZxz96PSaRnhUWpiDoCifuWc8QCtN2vxrBv67owUXhHbSZEuPmL1XE9",
  "key35": "2hrb2k6naH8yxFMcPgyqdmmeBqdrWEGqaaCV36PN12T6AsTFKxAYuhsH5UGuDv7dBuXD1TDcokgjpQYHqYYzVj4M",
  "key36": "CiNdsBiCKYUKrqqJTKuUoVP3x5fTxfZq8zKnqrM71KZz3svKSGUyYz7tzszPpYAyC8r5Mwi9rSRt8ps11bqvG18",
  "key37": "2ZiqUgqH5B5nSsrqG48YkVArct6SpSUnKV8BNMzFyMrMtF5u9DcJk9VP1svnRESPoPE1QGXjkxxuWeR44jfj7BYC",
  "key38": "2WtRy5nEHckaEgNoxn7ecBgQxATqCrxXcasCZKHNfdCfbeEVozrUx9BnoSK2Vhyzn4hRBb2b1fG12jgAhNVQVwEX",
  "key39": "24NeU4FfZ9FSopoU3FV1rRneCzQH8xofHt6Je6WE1JkKJCe9d6s3SLRoRwTgqxFurUpG6Mvvddjadky54kYnAMTB",
  "key40": "5hoxestufymCGYoZXGyThEaC94avBt56e6WqekU7eGeqDyu2tA7vWyKgeJbwMDAzbp3MbqrVLav2cJLVNaCPWAih",
  "key41": "5CS7U3KkJAhUkFCF6XUKW8VCSRigfexAzebaZGLhdw9J5x8jAJ5teH3oasvE8TkuJ27isyEsZPVg2TisPTFsfziG",
  "key42": "4e66eVigExMGbVotKZ15HNA3x4p3tKi6jRCd1WNVoEofWVuQLNnoKXwKveWUsaxxdqCRKBwi3uoaBeUtzWYjvCUC",
  "key43": "3KJbZZ9cqRTqVLif3qkiVQisXPatVQkea8vnZ4r45tqsEwT2LmjgXe5youQdhAxWVeQxHA5hXoBgyHbLCvibsosm",
  "key44": "5LgCGWpWRgzaLCwczkpALEpEbjBtuyH2vdjE7FM5pURtUBejNbPMosYPqKDGTH3ngBvw8pSkmpw84RBP66Xao5Pw",
  "key45": "5RzzbwR4KMELG4Br1iePKZiC3XeVN8fKUGpdauEmw5Mm3thTK5U7r6owDNhbR3mi74qjD5Uyx3p917zZNJ9JZsZV",
  "key46": "5Lxb7BPwqK4iDfyZQkRrR4xrShxfx7F72gk5t5aFdkHa1b4TpXAbFodcbHUCYYPGqEhUyjBYuZneQ5DeHbZYjgEu",
  "key47": "3REePcMtimr8R67A9NDbeqPX81sHQaC8eQTZjL5MebSpPVsZeSVpfyWRCUXTUrdWHi3qneKbSUnBTwjg8PwygNms",
  "key48": "3Txy8nUBiaa8spFPyVvvtMFGvCxkBhX5TjfiaCS2n5YAVU3NaCYa4N2horCi5koVZKeRhkCCSnvii8eCCBRsKUtx"
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
