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
    "51VuCn2JmJjawgpedus5GYB2RZ7XJNYS8z6TJrjJ7Z4CwmLUjbPwHo78heBMYBAFRmJZguGs8aHQaDFKj3VGsu8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9XevcjBUJtkbjxQmwKFNzvDux35bV16ezqvAdhwMcxbXBAu6UjE9hYbtvqWF9XjJF2s4vXsgrpkgyMw6w8tUAKd",
  "key1": "4dEY9Jp3Y8i76ZTAGqurasRKAfM3qkuH2pa1M8AfqV1CXktXKViKfPo23dGnyLTy7cDY6zu1nyReTK9UVmYJxYsW",
  "key2": "4t8oDAVKzV7qE6gBSZ9DZZks4gshvRXWK3AHzWyGk14HZGSJn371fsUhe44PQUZcQyZzTmr8E4pjP5DYC14CC8Su",
  "key3": "4tyQhZwiSxxc4GXTuH2QxPQWMP28Qwvu5PC5GAH2oNbFFiMpuABiZedvi4cqbPYmswdwj5sUapbTPSNm9nf2eC6",
  "key4": "32WNpGY8ikQ2AE9D2KMkztey86aainny7TR6QKzBBYsBni3h5t3H9SXQr6inzY3QTKWMkSxhcKcQfpmZ6FWfp7b8",
  "key5": "4N8sG7KN5sWQj82pXz3b96W8SaBdpJCDYfmFXT1j6b9NKBrwuNsG4cuzcECedGtvwCWWUWzQkSBkc7TzAAt9Lyq6",
  "key6": "4SeqSoEYSWS9qetEAsu8geqrb3eGMfskKzVzpqZHMdMsGFDu5B8EDtEYRhd7cF6zZwn4eJq9UwURscYBjtToVaF5",
  "key7": "61ysEqcie4bxvsUQZPk5nu439wmxZffgfJ6QFAbB9nTQVgLbFUxua7yEB7nP2xXWi5ifKmLKvPEyCc9Fuk61gGRq",
  "key8": "4bVrwd1sD8auNRbdWgofj6gszheki2j2UdkmxCAfnf11xeNZonwPFHHSaQVGJ6wvJQLDP6xfc8ZpCR2jzJVpQxgw",
  "key9": "5Kb9b3dVK96GU7cNAM2reZqvdLUbzrnHZ1PebzxArhZmCsaCRSZk4zchiM3w17xNYQtCW1bkiyHNWEuaby8Ah2VE",
  "key10": "3tEjtFr9QxH2z2xxPcvrq9pJKVw4X7Tye7YsVywG5mVfYEVhCpiE7LNav7sxM9oDZenyujK7s7bj6Cf36ySRUfZA",
  "key11": "36PFvmUfB7EFcLsDJeSwXeRf4UojcbH7L5qTA4bbTnvWt6Kd1pkGoYYPj4iy5o5sXKUkQm39fmJWhXU5LK2D5zbH",
  "key12": "1GnhK6YGQEeooTBx5bNNHwTSkj6qSPbWKh9aDLpfe15Wwtb9zEKy4FTbkTLtqt2XX59n8B9P6HxsvDWpkU5ZDBQ",
  "key13": "2Ucz1BZdXrEzRpQzuiUoNFJYWuYUZ2NZCmPUZSkBWT8buKmHv7vG61pmTNyMr7ipHh3sLi8g2SNqMKGRLDh6heh",
  "key14": "bfG4ZNBzwRd2gEhXjEdW4ZUYHQAVS5gKSvwdFAY5vFHDzpvpmCdCA4rM3ZBohmdiDvc2S5arE5f4xQQbtAsTmZR",
  "key15": "3TRsUN6mER2GLdbfAk2oPqtdoH45ozPLVMkkTVCNZtUHxDBwS6MTVnm1TsZNrKu1dJPLNqXS1VWjBj9HUKcJ79xC",
  "key16": "5hUUEoizL72QFJbnWnJjtCA7AuGekWfqyLa67nsPcwRwpTvAKFh7Ptx8sitwv85UGZpnMvYCt6q7PdobKfn6J913",
  "key17": "4JMiSfUDckVxNjdGb8o5xf9EHnXvPhS7i5GV3i7X51ce8vv3ikAuMYPkjMdEe5eTLf82eNiQKhEetjbcZ485CU53",
  "key18": "5AY7ZpJrCbZVoZkkRtBvamsfEN1RtqPMX1fPnswP2UtVMEo6ecqzQv8Z17v1hWsiQ289JXyHTBdbSfb2utsgLeFY",
  "key19": "3VpwhuuxzYjzkyPDBLTkWA7M5NJX6GwAwdmXv8Fxof5R79HaCL5y7umxQWcQVFkFPmF3GVHBDH1Cb5ap8eTCbEDM",
  "key20": "3DykAcsTgF2xEnzGdBEMdMzckLLp8FQ3sYC7R7AHD9kboYyFxsRJY6ish4nKqt3pB8NRZucmYGZ5BcdwiWV9rjxX",
  "key21": "3jZ8qyt7Mo3EfUvKphRU6vUktL8QU3BxQcGcDVsybDBTwaWWVeHGKS86cgWvfmpuBtziBd6fXkTyzf5jmnVft2so",
  "key22": "4xbiDaupKyzUbgmWygTpRnjU8ECGwogVVEThtMpRSWvFMJE4Z9T1aRDHFvaLUmppg6SZRTRPX4BCfkm6o4SVCHDC",
  "key23": "24fABYyrH5ZHCkh7BK4qaiQr4UZ6jXpsXsYWkhMt5AATTufkoW1bqTHUVmCzUo9fVRopgToeMapYY3HCVCXBdVX6",
  "key24": "2jP3A23z5v7k4Zc1CpwJo5q6KaZCFTT4MCUhCA2t9axT9eAUEwuhb7bmKhC1PobXHXZenZdUkLpffA4ybPzETqwG",
  "key25": "qUUNfyHfnrhJnvi7CCmZZsvheVknr7fCAvPwvK4M7oYRRrxzLRCdApu7e81s4cB2YwHS1eHjMGkHE6SNXHnbkHV",
  "key26": "PZ2Lpsz8j3pg4d3XCcoNa5J466wKe13RYTxqNaSdYo6fhkmJtWyY7Uy8Dyoik2HPqDSfw5wzjRAxMdra69wFKsi",
  "key27": "4F7iBdDCz14a9P4hPWXuD9Vn6CgKWhySAgGcSKf9fHM9NkWRbGwnQ9dfLqFYNpWnfFTovN94tnyV8anMkyy7q5to",
  "key28": "4knHXe7xqPyKNJbMDBEvBHtFt4cBQJMQeDbtUBPRRJ8f12pumB5LWtGvZZQPn5D4kfzSTPe8oqrR2b1NJibA8v8d",
  "key29": "5LtHWuYcZEwq3H3RL9cCE9JtJjcAXV2sqpTbNqMp4vvJ6zy9cZUPeY4UMLd76aDyHXbjxzz9a5n8aJd34Yd2XQSc",
  "key30": "vcQsXEkWAKLLkgrVSGVNneP2owCsQFgZAv5Z2ZAPUgaW3o5jVXDE4YLPL68ChXZeACyL6tvq43xLmfQTPhk3eM6",
  "key31": "3w3LgiEDrcJ6T6gCrDcNbtE3h4H3PY7tg74WVX635SEmVK5CS35FGksgebHQ3Lf4YU8Cg61fyvR8sFGGvxz8ct89",
  "key32": "DsgeLKs5YHEyZtAkCTAyCCDBjb51Wau8rxMP79EzXGq6Y98GGh7uqPa3z6gPs1Fd6J3JhDRkTi4Uh1TgzJtUCqe",
  "key33": "5LiMQUX5Cgd6YMGALMNzUoQ8jZTfL9D5mBQZTCvRpsrrhzeQxDT14zaxTSjn4FjM6QdkdKmV2q7UpbKfxTvZeabL",
  "key34": "5x2CMCsL3YhPeYtfvMxyd4xMKRgyhTJqbyHz5VK257cWcmwbFtfHRf2rr4rYmFGHskZ1U7mbhxMkEQ8g1gCX3nsh",
  "key35": "58yQ9knfCPUwajPL1gxNsAEFApd8bqbWXf1KPuRCY8eedkZD35y8akGsG23L3PuDkHa9dN2RNo8NxezWDu4fZdxY",
  "key36": "5RbRoZmKyUyKu3rkj4Vi45HMouWsE23VAzyhtkQrKx9BxanEWbbeX8GoSEhPLsTd3hXeach9vZtheTrCDirug2nC"
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
