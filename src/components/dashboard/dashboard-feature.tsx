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
    "3VPyKZpU1Ui7ZmaMZyBZGVeYH2Srj7RJyMaV4pwL5bGDSa7vbDEafD3bq9XzaamDTDeB1GzNKyknkiTyNqhqrxGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wAcWsjwEMXjjRjqhiqFyMFpLAnVTwVujW18k92u1TS3oUnuheKYBmhywW9mSA6wzwpCA2f5sjYkjkAxwr8odUsu",
  "key1": "4Y8GGs7h54guyDM4rBeeN8FNmycZaZ59RBTYbhaz1kzcC38XX8ri5qx7csipKciTouQomKY5ypJButaSEZZNKkQU",
  "key2": "2G975yoYpCDNLnXbhtJwmrxG97eEPyZ9Dsdaw2NWhCuFrF5h2r4p8K47k2jxX2yPdDqD3wezVXGkoRs5yK2N1RiF",
  "key3": "2sxj65D89ixS4nrqSTKqPPwxGso5sEdBNUKKAHdwEazRw6wkBNzEVZoRFLZgiMmA57Jv4zmMH7L5g79eh5mfzwVv",
  "key4": "Dg589jp72B9SLn3Fxp7arU2ruCug6tcjgv9gS8dhFDe4Zo3YCpQCWt3ZS73GT3XsVDTKLH2CjDnfKLWUM66jitG",
  "key5": "35MPJNdJXEm4nZAeaqMZfAeT2Zg7vLPFyBhFSzUaHoD4h1KnVhLoUbMdYi28wW1JVJ9hrbTAExrUpaPts3T2woCo",
  "key6": "4vv9yJ9nNxT1ipXSZpD9XDGCkq7RmFXKkgpzJfBo2FhDrwAcze97w3C1K1UDWLfVMwEEnPS3VaDhXW8z5fXX6tE9",
  "key7": "5zWANeqhVL8DDCJgoy2yqGpUULQdMBUY3pTy46mrTWNpidGPqQE5u8wz379VHXD4TDS5hbenJ7N4ELZFvqtYHdD6",
  "key8": "YdPWHW1BstvyS47VBwXLL319bWqAcmEyfdoZoEVjMLR4bsLwJhu28XFzmHxb6CyJbNdMMznCzwmAdBHnq8xLxUj",
  "key9": "4zF8ce1UbEMrwSnWVp9LkmN8Mbfz989H7fwyTXYofS7XcNe9BhMeSfoyS8wKLgjDYQPidwkx4NRjinioz4rA8U4K",
  "key10": "4W6ToK8ZfeKP5yVwR4JaBKf5vEFakyFqj8sHKMzVnXF3BA8D4fYbaHdrcuesHiQsVBv22k41ThbRZ38kLeD4hQky",
  "key11": "4R4Kbp7U5p6nGag7MQw2iParuP7LvnUNTrgYY3xyRKgjrcs2UyDzkrYK7hmwWXwdTHY8B8PH6GB5sWdbTnKTCG7z",
  "key12": "3hvGwZjHMFeMpjRixzRGDKKVTD9LgpsxMDzaPiAk28vdBrKr7kfwDuS3nXxpHa11cXE1TkwEFiJrTRXRZnUjY8ED",
  "key13": "2JezLKwvRxJ248piju1z63VBQhGRGkENc5NTsNwi7pHWJrtC4FBHw2rkDdmAC5QTwW83rEnr63MWBSaJyraxZpVM",
  "key14": "5WszFa4g9Hut62qZh559KLjRP8smCfzDqEK7ez2tUinPwn7oRappKe91xBQdCHz53vqFrDjRBEfcK1hjVyF99W1G",
  "key15": "5TQFb1mhcUzjcvy8ZF5rGLrtNq2djTJWDDEJF61ZZjTBq5Ufz7KqeeYkrGpupwbhS7FqzYtPdqGTn2sRorVzv5nr",
  "key16": "2RKgPwGNi5nbtBTg9kq4Rdko4gPva36s955zdphA9FABd4fjS14X4z5c1q1XzxATh3aSWLMAHyaAwpWVjgXG4dqc",
  "key17": "5ZwyTvk7yeBYbJepDrnSEFfL6f7qd61zjXJZhqLgV4VGXF2T5EYzqcCcZQu2sdZqoahTq9riH2ZnZb3h9MAGsVY5",
  "key18": "5hHW99EZc3WZWFMCdDEdeMcfdXitcC2s3aCyp2mnN4JRTPbRth3ptiRsEmtShKRRNxbbKQ67kucuUmAw82Acte22",
  "key19": "2sta2A486s7zEBmQRPHMPma33spQJGCqi8jHh6FDdZ6fhX3fGZLBnvT9LFamnnJb33Vk7dgCNWw8uJfdNDUf7LEX",
  "key20": "2JHAWYccc8ZFQiDwZhFzQTVmgaby8ripkyuRtNCubvQA1pcZw5C6t6n935D5CtfcJ1DPm1EmY6qSnpAiougYSYGX",
  "key21": "3GFLhXViEUsd9BrCrksUmejPuMgL9hz5XeQSWqQawcnEbSNDFzDGcvCXKcxcMBe73WvNDYWGGgAb9eXThaKBUg3t",
  "key22": "3ojWhDQX13AEL89Z4BSqrUAKT3UxBsbmfZwY6BwATcoU1VAmW1iS3FDpRKCBttzkgiN7ZtuXxY2u8Tsk8bxJR9X4",
  "key23": "2sUQCQYgYWVrLAHRwpBnusgQovyP9WHzCHRRSUSjLJmrukKhdxkiNjCWsCoBxvYfcF4KTExd7CTRVVJKSjqqx6ps",
  "key24": "2JFuvziyUQU7AEWn9Jt8msa6cJjQJpvMpkLTaBabu5admjjfqpqq7FSQ2suwTM6RMrThuM2E8aipQ6F7WLdr35Jb",
  "key25": "4KFMuGV4HdpJr9mpFgJ1xvLCQCP5qh9xHRxUnFGMJVkFHWheSridashdc4Kqcm83msh6ZMkJSJmqu5EPnaXMMEzk",
  "key26": "23a47sFY3a76aL5qvqMFT56scGCykupXpgCuVZfW8S7tdpWj2AF8d9et5WqwrbEK6tsDhzaC6wE4tKoUmrbtEZ9r",
  "key27": "2FEVrCZbftkfsWjTvgJdEXvi2PT2h6b9RQVBDoRoAghVe3C8ZYLPpeLMMJzdwfZPMP1BfQ9NneUviB3CQjkqbGUu",
  "key28": "4wkkkNoxouAMX2LTTz6xHaYpmZRN5eb5axcoJrk6Bq15iBiEgm2DvwCS1KBzuaKB7H4v2MHA8mUCtAyKVpyWQWW7",
  "key29": "5yD2T1DTMLuy6CrCmosnRgnVc52rkfBRtrui3uyAAxhKyCiSSWi5NVWMLMRpkmSR8LGPtqs9NBYvQxMTNMnEBSjY",
  "key30": "2dXjbgkVfRr6pzPUZjSfpGpWRvbefHULWgxJPUX7vAMtkvrmCjvztsfjsV39YwnTj4Q3CHqUCNevXqiJzqbzDCG",
  "key31": "3hCif7Lti5BHMUQHWj2mGJwGmbuhdhbJkJEEq5aFocqNuPrztQ2S6c9N6nVNx4XEokRgN9BsahhxHkE36YKK4nFZ",
  "key32": "4HHRxX6Zw84N12F7fGnDeAaAKX3GA5TdxwxvgTYRPqbY33AaJkuFnbrfQAjFeJH8i8hqo9tyi8VSCQE14avP49aD",
  "key33": "5zguHyNYJAaEuq7XyV4Yt3dTEyhYS8Cj5Q84k44E7ei1AXsQBe6jSHM8TiriP1RStBeKnUaz4HVzFYftpCv7NfPh",
  "key34": "33j8Dk1k7rbqdGpeFPXpruvKrWAWczYBQ4gYw4uwwA6NRtBntQuMct37QiRdJCiJiZA7pskzKzVN5VCmnVBfcAwP",
  "key35": "4xQ7N7vzgFT8xmK3EG8KdmRKbmxTCwkHBvhFwek7xV2NYTC7c8fz4ZDuT9ia44aR4DnBqJUiy52yusdqgotaArHL",
  "key36": "2qKmwNaqBUZFkno3E9RLRFEnBSJZwjVXe9pzwJZaLRmYb1urQF7vn6Y8skKJ9ELMoztSfFkPxXZzqC6vBgYLWAQD",
  "key37": "2oN6U9q8q2kt8P9iefk3fM7SzoEndXrybmJJGWFGsy33x51et47FMNi227YLeAWxggwZfK9y9Df3Tes4UdCaLJyX",
  "key38": "3pQrcdzJakHGMRWbbVes716NCbcSQwDQJQK6hUm825aXzux8Curymj1QhNyqnyQB3NmsfTG1u8S8zgMKqKYjCGkJ",
  "key39": "3Nx6uHpTwK9PnJfXdSYWVayBvNpqVuEmoC319PK7mC12xHcT6QA9Kd83QmthUhd9L6AkwQbxAKRhiMA5Ns8zgPz",
  "key40": "5V89zbLdDGsRnP2Fp4qY46sRXPh38MZ1GDAhURBtxmUJfXAhrhrQ5LszYuAwLRv7CpX9anD9XnS3npupQyBf98dG"
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
