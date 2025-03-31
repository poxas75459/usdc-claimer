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
    "2GqDM8drXTecVQ6BZLdiz1UJJa3417Xs9fBC8fNxLmST2vab4337hoyF3AnArQxfTfNDgQFvWPeTynWgmwRBdhJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t77qeYCZtpJafuFWydvo6cv2hkqSEKwHdgco9fuQNxnPUnLQw3eRv8NTwmzp3bGx2wksFitVbvLXKRpG3Fak1ET",
  "key1": "4dUd8GdAtGvbRBvRMY9GUq3V2xn4sueJ2sHN5gNWVsr3HobKvVTh2zoeV9Q8cureKHFLQ57Wh9BZsPmcTg5eVLou",
  "key2": "dksYTyUaVYfbpwTg9kTgoAJ75c6SK9eC6tsJh9RLNYjFkbH4zJRf1irvhy1HZmfDPLJCjnq7SEnnQo9PmM2KzDs",
  "key3": "5vJQNe3X7i6BxbRhp23ReuDjEkZfHk3pfuzgcEEmuM5Hdf1GvpKrvYDtN7zxiJ2FLtxJrUqEhG63yzRWasyxJege",
  "key4": "Vq53mjY24btm2LP7qoM9b827ekTPofsFzDgogysJq2e2QwW2FunG67LMixohBVkBBXt8LF5hfguQBeLWHPqcvaQ",
  "key5": "NwBZPmXBYS8kQfwtQLUeSdqATK1FvrygTPWW2WJ3Vi44rNhKoKrnqDaeEgF46c3osthLmHZbNXRJCQsTMGwVL1s",
  "key6": "2gkw1sowmGkKeecRQadLouvLNWw4mVVDzWAL6HmxVh34qCE1Pa8TaL96rfzBaQT8rC9QF4rRT1MrPMJFpyy1jRyP",
  "key7": "DR7YJ65UzL9neikPWX5XqGSYmVLzn1ZHhJhM1MXBYskms6pSK15o5gYzFEshGhv4Fg4PW1SKZNZ5V5awTCBdzhE",
  "key8": "346G9QKBEq33HLXm7R3dyXY6ZGaeRMQi6SttzC85z3ghVcoWpD35XUy3fkr4KBfwJcsBt1HMwWjvBW9G42LwRyKk",
  "key9": "2teULzeaDzLvddX4hmKB7cKN275Zc7vW8wPtqi5xXaVj7nTzJM5QH3PCJXvAQZyVxrieSceEXwEKpMRdehB8mC8S",
  "key10": "UXC1YiBr1KAYA2hcLbLPLRKtwdY8dQQfVnwQGEQ7xCXjpDpbEnWzGLCKHGE5JUEBQepkDLm3VsVVPUYumhFafiJ",
  "key11": "4pEE363KEFn2wivZMmyk2vvpVqQLexjZ7nhXApa5k6NEbKH12FPa2wJ7CNuvn8tU8JV51CSd4K819tATMXfqMKGk",
  "key12": "4W5tMFoaNGWd8dR6ofStJFRoFit28LUbBtXo8WzRQD4BhBwaohLoFdkhChcii4v9rBkN4QG1sSzGN5rKTnG4HpQR",
  "key13": "5huukGEEd8UbZgD2YDJzEtvFUj7t91EnsSDdxkHkCdBmzb1QKRJPKothaJBPCp4GeY24cNKyJuK7gwkLTSJC2JvB",
  "key14": "22GyAdmKCz1GYhH7eUcvem5EM11FMisTCFUdYuzznovMR2B69nj842GkoLRo2MtvdVUmr16zrQ2AkficuRAJ8UXh",
  "key15": "2dxmuuFTDaxiD3p332bwGoXLb4KT9NR12weeazumx7Nnb7jiii7gjB9RxHuQKkE6ms2sf8iEK27LvRLRd4wwSR5o",
  "key16": "2NVPmstmVy6Wj6zg4qioBApf87oAF27GqM17ugTfjzqMyqHesA4vCtaLiPy6ESTa2QupxP2RdWm6qbyTJ5M9DFqG",
  "key17": "5aCP6nPxNFgrxvx4fSeE8uGZLRvH6aMxJGuGjzhdTWcG8eJP5RjJLbCeij7ZvkvdAXUkteVqrubAGSeV2y6QV7XR",
  "key18": "4GvmX7vTFPdGfV6Yf6xjxeJfkw4P3LjcsLaXWwrf9vzwoZ1WMVDiHEyFyHgJHNLHzbRU6GkLRjxAXqFs911re2Ut",
  "key19": "3HfoT6K3Nuc9ym8RjS7162siYeDjWEN2sshRMM5MpUBe516PefkBSULL6ELizA4jQ96hga8a8ZX71y5ivr9bBxfC",
  "key20": "5GEYrcmtn5mqYQ813XUjPv26yc9HEtwMzTPsQdfWCkfivJS6VffDj7fBvefSpH5KcAbMtJDQwsiu2RzRB9HkeP6p",
  "key21": "3sBcmudL35EhePmoeoefcXjGY2GN9t7HCKmXuurga8isQuWWHtG8rUF88e843PSxzeL72uim9AAR728EmM9avZGD",
  "key22": "2smcqB6KUSAuVsTCq35GWvrjqHjJ86BLssftGpG2tEgJaFe8VqiMZQcP1sJQ2iXi2NkR6WXNhtUeyG1kNfeooTfC",
  "key23": "51UfaofNTzzW8UNaQYiPGMkHXmGVqxb8kwSyEzSUrLivprU3NGuhYcMegTdaiuBQTfVHdbZPAsKeTNGWyQwfP3FD",
  "key24": "259j1d8Z9ymr5d5N3ADrziejJuz5Q2zGAZwwUoFZsm7EeW35FihCXTEFqmmUSzPGYQhrqnvhBSkunPEkG3yUVnbL",
  "key25": "4YEx7nhrPAnDMRmtrmQ8LrSSHrQPBJ5NRE3EcJSgxfdPQq1MCnUtCWscYiA4Cin6uqqzHCYdeNcpG2zJHaQzZrRH",
  "key26": "63gbZVVbaEXeRHtzPzhSA8cGRSNwGQ1W2HGarjCsay54FtmpVonQBgwNweRRS9LidnpntEWAV17owgAiz45Tr3Sg",
  "key27": "43jnvPc6SHsT8N2rhf6oRYeyZGoo8CJR3FLRu2m62d7taiJjS8jPUg1gdGd94YDMaiZ4PvfUDsXf3i46sSB6jqWx",
  "key28": "51QmygkH4zJ8z5zEti9cDcf1Fjuz2DmY498VBpvhDU5D87PzHsMVB5zD44jrujk4ta8SqkBTZsy4ojFn4DTCTtAr",
  "key29": "5bG26FiCoDqQh6hXNk7fGYLuT2ZhJ8LnytTMk9vPDDsSKg52u2cih9EnretgRWoA8iSfCPSPebYYpULJbpxohwcA",
  "key30": "7HjveTpcEXSF3kDdY42nVoh3nkqij6mTkkAxsnvPWEzutv2GRgWzQTYJh35d8euc1cYmYsHTr6gieCuYAULU8Zv"
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
