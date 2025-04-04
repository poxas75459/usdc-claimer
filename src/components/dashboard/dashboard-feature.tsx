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
    "4yN9khZBHRGF8UA5RrpHUBdLHjB6SZQeYupjy9sep3NTAeoa6oiEmdYzYdD87dbqca1bxtJonbN3pEbLmJLwwqvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A5WpksWabVXox9Bc9dsH2nFrU9Ff7m3QCGnqywx1V7JowPzydiJ45cYhRMqBu1CSZS4EQy3PPDVQxcj1aJ2ajDX",
  "key1": "2Nv4cLQAYzS5gyeeSQvWnNaMkutmzAk32NGSemzD9nDmgMdR7uUKGTfNFQpCRNa24S43ABpWFQ9zJWJ8wcV14EHX",
  "key2": "226fpsb3HJMDeAqMzWJSaXxm8KbPRTSuo2PsodtspbP4RqtjVHfNMvAZRWwZ8MeicPPS8EpLkXwBuRCJxuhmb4eN",
  "key3": "3GFMj8pDGS1dDiW3YLmTrj56UXcmP8JrKAV3MyQc3v1uKSwxrgQWPdDGLYYpG7Ucj9wjmDsSUAzgDk5kr8wUo6u",
  "key4": "2nU7npXWuEVYPRSju1iEu5dQzNcs6TbSnDVXYTcjH5JtjU3MLXKShCJyieUhFsc1bgaGjUVLUhrLymm1ncB1MzVr",
  "key5": "4zshA1Wf8nwK7H5vzt3WzjRE7cuK3o8vUuPVMvU29FLokdkXkNJ9E3WbC5rTbiJoB9ZtkixmGut6RAz7tzYCWJb3",
  "key6": "35nr4bJF3H16CAGSzBJYm15BGutRHdhQ7GEZmoZmGR5XE9F2MnBA8vjS2349BofQrgLYCuNZGZDfoABK6JjETRtQ",
  "key7": "4NyNkyh1AdxzaMf8TdxtzWLdGaaipsJMFVoJmDZu5dE6KAjNpfui9Yra2so3uYhZtBy8vVGpm1vtX4tYnZNphmzZ",
  "key8": "5uBqLfeqAguYWkkUqoXTB91mroszavkuQEBVJj8q4hP2qyA5L7BNu7qBXxKDT695fHHNKKdu6ok51Gpg6YCF6797",
  "key9": "3piNDx3idkoxFLX7Q4BvEdsk9VCVQnyEuQdXRnfaAh6ENgs2PXBJWqZ8s4gwSgoB3xRMb8HivLD7Hjr8hMYJLEHD",
  "key10": "3tQ4R4pZLRQ5TjqqXsnJM7N1NECCQCvTeFV34wgrQ3JaahmRi6B1FkBud6bEHRjdFJMWDyZRsuSgMQbwH7xNx3Fr",
  "key11": "2pmYGCHL9gEa3LyJb6JuLZAFibC597uiZr8fGiGeQmbUG9oXS77RPrFGHq7XnfgVVHoH9nQ1geoPtypepgocfc77",
  "key12": "3hymqvFSwb46u5UwbJ9q5bBjxna2q9fwfvC5Tgbr7ErBsFcnQsJTJ7rtDy2PhvrQxmF7Z2SrXidHErkgWu5sXYZB",
  "key13": "41nPrQZf66JcudsApKqmqBN6tUm7VRgjkmizuszbzEN666vcDUcbrrimZfESYVKvHx1ERqEBh8ZeCXmW8f3XxAnY",
  "key14": "2j6paFZmPStm71J2zLTY9SS8p54e4UDhiDtVtfaEhDaZf1zJTS4C8esMuzgAVkp8fakLe73HS97BrvT9VXhQ5Tr",
  "key15": "6oGuF3Soeq6Mkx4s5XqjN12q68CfFNGwXB2UcWooMgLjPq3DfpmPfARcKbAZXkTzKWhNroZYTQFmNkHKpEc4uwr",
  "key16": "5gzrx7NmdULpSNnio4uPXpKAsqJUrksbScLzGubstxU4E811WR4ScrjAQrwVeEzRGPSqYwTDwk5hqPY11exf7EHk",
  "key17": "F69HJYiDUKzseF2wHXPmUZm2FCp6T1Rz4iznmkUpR1hXJb7N1cjoC1JinkZ8wnJZzQvkm3Riztin3FN5zc8h1dw",
  "key18": "4D1zuzY8rYWNqAYFZUEbXmHR2XHF2pg4D4MspU9quMSf2NXubHy4PvGsEBVoza3caDGhY2wqhRiK1tZ5av5Nm2EG",
  "key19": "2E3UiS2s2toVKTPLEa1qTbo5vMnYBstgoiG2vttu89HKQiaCz24zRBYvXdgN3qxiDkKQwxxVc5WhHkL15NsV97YR",
  "key20": "5Sya4LXJqYytUs2JFoN4c9KmWwVBXanehvhjebzmePP8WQjpTW3jxb4gTdC6AFmYqHkmBwCjXZZKkQ5htvCnVRau",
  "key21": "4np6cQBHupMDjoKDKTanvUmhxKvEScWTKYaggZk2LyRGSkQeq3vSuRKUJHeBk7vsrD7rhr4C9C1fxKN82d4n8MYo",
  "key22": "5pdQkJVc2zTJ31WBYLxsQJN8eYgKJFp4Wv4tvwA9fq6i4erB5ibCoiq4SSfVCNJiarTz3xgxkJxMhDZEjZHW5YUz",
  "key23": "2M6DyVfPKP3LeZHXBKc1j2xjjVuJHqQ4pmWFs6Pb5BRDHKLpLptVkdKKKP3bbdQf7vR4Ry973R4A78i2VScPWbSk",
  "key24": "4g7oHDJWvarF2QxtBagcJw8Bwwo3A7p6AA59fFKAUcJPg5QwLneuipH6LoCJ4oGzFPj3qkfBudHnpXgEjLyBZg3E",
  "key25": "3tWxzeYjHwueuioWFEfEE8UcGZvvtif6W9zaRuN2VbCGKE4cibGjkVxUqEDMHodwMEUVFp35wqcxXu93M2cbWEPS",
  "key26": "2A6kDYLzxEbkCGqRTjrj9Tf3FE5Tyw46d395Tcg7hLSiJHBgEBreuKmdEcwM7g4mJtXFRuiAeLNnysqn2t2oQbmz",
  "key27": "5xcTYQ44FKMMZnHfGNcPB4YaeVMvyApuVSjCqQYUJhkACicZ93s8SpeABAbtqX3Lv1m7R45LtbB8giJEyUmagX1w",
  "key28": "YBVKYpjpaqhe2g5wR2t6Sz1w5oP4UfJUpvJkxzy5QkC2AwxeN1kQcqeLxYw5ntXe7rF2YXRHNTgLwdjbM3PtUnP",
  "key29": "sgmdRFn3bKz7uHquPo4FgtrLwr7V65fNMvNJ32LcaE8CEScYkA6K2wVvEfUQSm96JjqKMTpqDsXs1xUs4Q9Ktvs",
  "key30": "3SwKGz9Yv96uhsiHA8kLMZrMkUQE7vH64K3iAUZJX27PxtE7giQ61hPmMgn62oh9gmhx5u8fpmCn8mk4ZuCTB77X",
  "key31": "4bKFxQir2WQiP9EN8J9no2FpLY4TN6fz2S3K2WwbJtzUUxMQgL9h8Vh753sbdsW94BbKby8VtwK69AwXEwBhiqpx",
  "key32": "3HH2dpAKLM9bvzV4MiJLf7zXi6o8VNSTt4EEQcvSGrS7g7dCsSfqPT33zuMBSFw5vgzm4jJ238GDntBEiARUP47b",
  "key33": "TGkfEeWnSxENShU7iiMLjSqCXj1awztG4AjiHUbf8w5kh9cB3Tda8EQVd25Hq1EY9xeeA7YvRhMz8XmeA4FDgA4",
  "key34": "3Hkgt3SfbwD4wHv2Gvp1wPJho9i8GgpUH3mvTbNttp8mugGDvLmPpVFdD9MMkB63MTEuabyVa8FYiitQMQhpF4Nv",
  "key35": "5KfRM4wUAk3iXW9t8FfUWTvN6DqKzgg57rALrBTHFPwEoNhzc6QoTpm5AGQfmaNvjGsThiyoKuZgQX4zocGnyrFA",
  "key36": "44K4w8idLjtXfqMZrVbjs4ikMS1HZysQXHcL8uFDx2tGhnjz8TaYL4NRSDBSmeV9x5qoPEYMpm53hHzx3ZssqFhy",
  "key37": "625VPATzHUoNq1Bseu3E1RSkBkKYRScsUyhMUNkr1t2BSJMFp1xy3gvZEsqZCoKScsjp24AKN31RcZsZzCzXx6Uh",
  "key38": "3T4RAFTVanss5GsTRrn36sr79JfbBwLwtJX2uLQzxtgKCAcz8cQQyNmiS8iXN1f9tRvmoUzqrcv3piLeznGdC3vw",
  "key39": "53sZLXuGBmWYdv7fmEXFjypZdDzpUS5xGcS84JpX2SBnWJueqpSvLzgmksX9zXaik5rMT6XRdZXNBXRhRcvcwutJ",
  "key40": "3mNs2yZZ24TpMmC6KmHqHVkX2D3qdNwEDT61JR91JAcJaW5LFp24VCYnnRCXCSU75F4RpkNejWnFJfx8FfKbJERn",
  "key41": "2yB2mWaNJs3ewaCzpVPLw9mC9fJpTvoUk5W3N8VMdoBvBiHvsQGEbu66QES5MnUV5JNhz1p8zdQt8w7LCo5FYv65",
  "key42": "2XAVH3mPHfGHAb3hHDyHZ3M45LELrv3bg8BGBxpiDZbWNBs8JofPiF6yd1Nn1A9tDXFZU8FY7gJpwvXYemibsuss",
  "key43": "5MGoHrdZ8eKQX9NRYxb6PtLUh6nHEnxFkKWFND2AymMc3XwRteHtkA9BKNBDDAZsvTXGruWq6svisB47hUttFryx",
  "key44": "3Ae4TwhbCbH6wpNr7BZzJFqviE77JLfKc8nuM86R2CKW3KW3DngNVufyev5nDuD4eqEZLtma8stqEYJuCWAe74fi"
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
