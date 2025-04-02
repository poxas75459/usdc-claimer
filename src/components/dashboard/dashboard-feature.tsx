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
    "MpsYiW2gceTdDR1cWqLS4gqfz8pSVV9D2C2LQp68JYwfQV5xLYvFtXVNM1Mi346ReiQSW9QbQgTjSr7PnEQkxfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EJJnbXc3a1WFnQWvQcbEZELM2W5mUhTpkrqQQSoGbuAzxfyBaigq1yMTaPcQWFiV7wPTGnPmhANfv77hH9NUCu7",
  "key1": "37nZQ75RKtiQ3c4gEXWCiRsP64RzrEdsSDx7XqMamuQDNLQSSw1xAKmgX6EkFAWhhYFUDaNWbRT9UnB9zGc5H3ok",
  "key2": "549t2NXgSyhhHcS5PZdmjYygDGZ9t3cjKWjDTC3PwBfQ4KisjMNqLBxTsHC5t3KaVUzuiknpwbx67YPppmNmnRFf",
  "key3": "3UtViPmmvfaT2vsUWphTjePT13G8RJZjyzypTB21eyjAnNj1E3rkohRsA2oNoZwSY3dv9JJgRWFoXTkkJd9iTpSf",
  "key4": "5gWtE6WofDevPuYs3F8pckaShx6ZMH5ErRTErFTCYMEa2upm6wJJsKQsQHW8zUoG3Hiq9WwpR8vs26aSoNwrZ2tP",
  "key5": "3UYiodoshSnbnoqjVosM3Fb8dkjx49Hx1HUovjHZUotL8aWhUg1h8QEFqW4MJnSUm6Sv1uPsMUK4KV2cjb8KyQNM",
  "key6": "2rs9bgfiWVuT9CnKc2bs6vg2kDsXVbYBqJ1PoubaxjXmjyoRzpk4uzHkE1aWyoikXhPzKMDyiPyDdrSnV57BXoAa",
  "key7": "5YzWfLRb2KxVwcBUAqhxGbko6HkJ9AQx1RZmgpU5zRMxzrYD81FiRuXfPokCJu94MCA5DZ3b2Ht8fymgojKFMKSq",
  "key8": "5UYTfd9jFaR3aQgUjqrCnHrdMXkvXCGazPV8TJinNMeUkh9nWNhbsKk6DiPqmJapGhgqep5doWENBpTy2Yh57ef6",
  "key9": "4RoB34x8id9vCZP2o41VggkuVDypQZGLWYpd8T2aVY6WLKWHcvcttMMs3LsDo8bd1UsjAX98HK32pPjFCR8LURkq",
  "key10": "3uyDpzGHi3X64b3sLvjuUrxoipjJGsjjyqMz1ZeoFZTtGzZUzpKLNqWNPnTXpXfPTpCZC9WSgq2FuNLATJS95oPr",
  "key11": "F6sFUoxco1UaK9sKbnXLKgVsZ6t8YGa3Weo5Dmv6GaoukrKajfFU4D8cWpGHtLJbh6fu1d3CFP7z1EvKvav2HLw",
  "key12": "4UNWuJfZ25vq3KweRScPryXSodoGyPgnXuVDZNWGeEDoDjrwEDXQhN84iWZg13hQA9ydL9K4migbVTQb88sHQDhQ",
  "key13": "4BiaYsYVifwPJosZYX2ZcZnrFFyGjKtFpyyPbpYsjYmxUyCovsTvAtxCwQq8URaBsfz8csgLBmaXUyfdD3mk3H2C",
  "key14": "5vAcX6VW4HjoiMLeegX9AtDQE8pviUMJtRpmgfrQLTNfGAiWq4oTFMwvxQ9Ywvjhg3DBknAP9bGFRqWLPsNpYZ9d",
  "key15": "5QRnFUWBu5HcaPw13vZvzofBymCvdywnXPtBK77HMAWCUhSsHpb5quimq4ZqAsDYopr2oBU9h68NjHhq6394Qm4N",
  "key16": "2n45deBhNpJ5SZ8JgJnZ4ahmuKfzjM7sy5XbgMey6914s86Jj34xx99v5ohttgvVtTrbsL1a9hhpFUv1o5n1KwKx",
  "key17": "4cEHWiZgLn67jkSvaaRf8RrRBzcHdhBT8Egb3USoW8dy7AaXa4gvzzjLPmTKhdvh3P9xrtFxzJLL6w6EEGMxUB9F",
  "key18": "5Uey9prkCnJCan7WD3RZZ6oYRP9o8c9ciD8CadUGADYwKfBLTn9QZgppNoS5KYauws6hQLrVsVJTCbabmoL7WzCs",
  "key19": "3qUfm6iNVddfMGjt3AhTFgKWQFfHXwt7pjKLyHChwXdvfz68KDDMKks3XczznyVxW1P6vYhfSwGGT8LHfZCta2ka",
  "key20": "2d91CAvD5oWELrMSX2XH29kBvXmRyNdd1HeUrD6XaYaGxvNHYoYt9vjwwx39yuhzTWRW5YMGyiH3Vo8F6xSGj2KS",
  "key21": "4NXPs6ULEqfGA9SHm416YKSDFpifLi58q9zVUKhj7SNLEP1FMxusdCf5xXwPmGdWtmxkH6ko4fyKWAcFmh2KnVXD",
  "key22": "RZJwHjRXNTFDzVa8rFno5ab8qx5RXkwx4untna6dczDwbScPsmmyQEN8sEvwPZx49K4Gy9jvnmiYHcHMp39kB8m",
  "key23": "uujomLqYPdW41Jd7qoQ7e8ZHqXhvx3TSxny28jn5hqYiArK2CwJFjXbK6djAzc9s4DWYeDaTuQgWmNcxa7ij4wB",
  "key24": "4CMgFDvcjCy5b2dH5qMd4oaAaDBZFciwTVSFw2Fsy9Zaq7NNSXQqL3u1HXBniaxyjLHwnRoaV9HiyiVqTH7K8HG1",
  "key25": "WWgxLkrKNRSctE2inDhc1tVYtF1fH7viaHKFAeKpeTty9TZvjLbe68ijdmeiAEzhRG9iEcMuZ74VEMzmhxE7Aww",
  "key26": "2VyS1CHJejyuWtGLJCvzgTUUE1BM5hhjjXkiWeHZQycUAZ2chpJWDL8sXrwrPwNvtZAhZUmETswcoiDncZ7tCK3y",
  "key27": "5NgkCVE1c5VwFDn5SuDg4sfbtiPUvGDKZUVfpGvjpwGyccbAmB8BkzvUeC8tafrw9y9MdigGoTVV3rnVNfuV39dg",
  "key28": "2Xuct2gSdENHfuZyg9KYRBXWKcA3AFLTdDhggxfHLUGjGGuLrzy61ZHtiAKssLMPpiZXn9WoKncgjBb9SCmMVtBW",
  "key29": "3piuo86bt5V8uKUktcjEhtyeK61ixTxJGKEjB32EdRByciJmrULqwmEZXmts7SEq5dAyqvSY2kUJYZfBrFa5LzqU",
  "key30": "i2xz7DqTexGdwFUEuci2LdnXf17vSJt3UkHqyjNnt6dW8ofVMSoxyuTLXJ2fwnfb9uiDPgZKbLknzCuK7UjZNzj"
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
