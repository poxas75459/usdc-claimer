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
    "2ViVLKijqi8cydtLpABhzYbfyLMKYPkprPQKnM6xexW46CtoknPyrRoCWgwErChckhNAkEyc1Ga1Qc1jf9VPsAAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A9CDP7UkDw7ELueuRJ5mmebNSXAqAgmdA2VK6nBuND3dK8w16CZ89Zp8QCK3StGxPg5vRi1mJixU6WBYchyopj7",
  "key1": "bqkDQhqz9pki9U5nncbG84ZMhMkF3q7XAKSe4AjBu2FcinrAnCLc7Q5ZLi8rS1PgTaixxKaMjw68JAruBdBMRuV",
  "key2": "2P7aMYsimPcSFJz4iQzb52rJ8oZZFNLFYfLgZZdNKW2CuSMjYBDhayo9rV4epBpqPySXYjiZ7JuYJPXE8SHRZUUB",
  "key3": "2abUmGG6aAMYAt2iv1CzhAw1fNkJFk5mMqbLuAkjNSqDL7kbm7rWbXBVMhK3QHJZekN1utEajcL1VQeTXRmHSAFn",
  "key4": "2zHboMtcXwg7hiUnh46tjyyZGt5dD9DCiKCXKvBL7iv9136A56ziBMJ6hCMYRL75MZhTkpE4RKhVyfYXQbYoxf8V",
  "key5": "3RMnDGeYLpZyKTcbnU75J1h8ScK2UvFfeoqv9VWQgZb96jHLeqeycqvLjM3K7uC13aNne2WXG7QbDYEhUX3ouDsh",
  "key6": "5X4RrY9izuibDK3cZRs5wAoACiEchZuwJ4aaKhozLd7uEEZ1Gy1KeHM52muNsshFaS9sAFBanKshHfPWaPpTe84Q",
  "key7": "guu3ZnSM86q5FTRrhK5Ss8bHJDbqvGVmb91zAi5XpMPyFsnzh29xs2uvURM6HG4pCaRrFfNqHYxWKvV9ufDLbsa",
  "key8": "4bBSBPPxqj9WucB2iyFvNkpD9hqyxejXRYiWmwvpGePaRB3rx7Xvd3giQu12978uPq8tDY1Gkr3neguWHaTbETWz",
  "key9": "4tbvHbpP7WUUbCT2wbPXHaXBkLF52pWNWdK1xCUhSYJCWK6pBgdq8Tsf8SrTaAVcSA7PPsiXf1fXUKAqTHuRuTyE",
  "key10": "5MjzNfmeAEMq1NNiEZaATMqLWEvmCBc7wzeUA11sTMfZFLadynR4A5Djgr5c9fLZNmDG12XLiehMAXkBD2qabjwa",
  "key11": "4ynSvZhGHPYJjyGqW9FnaTDcBY7qXNH6X1Bk1Uv7sZjwdyXERSmW8d835RN7wfWgbcjKp8zHEpuMGMPfz3Qy44yd",
  "key12": "25ho6hkgEquu11m6t46GFE3x6YioTAaJttZWPpXkjV9XPw8zNELxofSUuWKeFWKtmDyBU86ht6Fy81v4M7inQnaH",
  "key13": "3cTMYXXHJguM9zvNXTJmVtj1JZAjiD3T9eUjwiNMB5kGAndjC3uoKZ7p7gkSY4GgXnCbr8G7o7f1koq81aLxeP19",
  "key14": "2JEv6woPh4MBnCdh9hV1eNjaRJokQtKgkqc6Gvr3bBxu2JB8jgnbqDQJw3N53FrTyuoaQqaHm1P4AzBpTJ7t575g",
  "key15": "2a4Sfg7UWHBtiqPWt2kGG5epmrnwXdWGzhBJejB5Gfqm9AMBCMo79USp4SgSvMRLW1NXaKoaDcT7hHqEymKu3qT",
  "key16": "2Aw4tsVths6LSY5B6RjLR5yKAuaPQhPNXyu8y92cn3z67e88fmSvU7dseJesdL1pmUdtGMdtvg6222qpjK3bXCDJ",
  "key17": "4qMMiAq7bpT7dcmoazACvCGx32DTi8GH99kR6tWdci9zn9koqprYYFBGjC66m28s54cts2jt6RBFr18Nz533HCXk",
  "key18": "4mvDH13pobNW8kPg8HybEA8Cw2WhKcQpqPeJPsh6Tze3SpsS6XqvgNqhYXJBg5Fn4zp3teeVrnXQUv3Wdg5H6p5N",
  "key19": "3ES1FTtinhQ1yrvPhoSmrYEqfgXVMDjfaRJAyyke1RLZrcEusPKhuNvDYQMTrWX5n1v5n4dnC1UJYMXbBsmXZCa4",
  "key20": "5p4M2H6j5FEtceyucu9jZs3MyfpjKAbZWEeP7f3XzTjHDArwmz9NCZbmR2KoAFszfvwh3Gd3EFe3z4y1rSKJAWca",
  "key21": "5eHrb1F74xeHcqp6xBgvbsns22a1xktZDwnE74RYMZcD2612YuByTkDDif4EEb2L8DuFbfLkg41xNUYSe9kTCkG",
  "key22": "4w9ow2HRkfiQYAvsEU9X3nuejeVumj7ZGGUE9SMVqWgRqDyL8gwY9SG1mnCHwHxPsAJBTSueHX8uBx1XXLzpA56J",
  "key23": "3vXBgEGqUeCz2FRxcV7UfYDDXQcqiccZCyMu4CGjD5rSK9arLxzvAZE6w77gLT8GqqzAWWFaLLjTgD1ugFpCeDvH",
  "key24": "4qRJM91ggr6JbMR4BhJrGuhWiSkjacvir3hZ4BzHG5sZKZTJJN5966sggxxEGyqUhFHLm3u4nYycQKVtp4b79Jho",
  "key25": "3A6MpY5LHryzKqXUxe7rYnJdKiHsSrQt2GborBkfuBjPKBTr1ejs7r4djwh4RmG16nCkRjWMHuBtur9wy7zSpR7w",
  "key26": "3hUSVKCPK9MMmQsqTaDnuQQNj5N3owA6unb1W3BfW8CFoDMW5a4tXHpJ2as79BtkggiJEBj24LDQ7vCtpG8RhVqF",
  "key27": "4fE996rAL2fU6tvKjua4XismYtXUxbhuGLHW52e5j3rjoQ7WmHUBbVypewbrbPuyP97aVf5UeRnRmBcjxmwfth6P",
  "key28": "m1RUxdC2VkUvWPkmk7LLnHXpQnw3QKgEAkLbLULhdoe4RZwNZp9QL78Y5vv51MkYokYXGTmvf1c5o6mAuRMhVmH",
  "key29": "624X54tqakR9PzAjYH8Au3kY3W1xUCQ6rWjx27h7ZAT27b73eXDHBVjxVMZNHouAKTx8kgj2dAuBPehP3ZS8TN5V",
  "key30": "2cMjgRZhnNZvVTDqihfNjhvxWpWLQ3xnozvAv9EAbUsLyMqmsuANdFjfktpHxovP513sDuYmetoz6y8ndtBfFmme"
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
