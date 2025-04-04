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
    "533Uo1AMJLjZJkyRM7zo2TW6xMbhUX12gFGriZybNVgpp8HSWkVkdXk1odW4Vazc4oJhSXC1LjUbWDvnF88oyMzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AxJEwh9j4n4h7mKugwmBb4SEj9PqoRAsRVEqPKgiwej9yVHt96oRKt6yQDd8QjcMh6zxZJFPVeHDyPGQZpKkAZg",
  "key1": "4jsoc8pieXkTkVFe4q4gaemHsTjaB4cm6DUF5noMYiFydk84xxKCVAZz8BERTtzFaMEJmTb2k8rFDqWtBsgiVdQs",
  "key2": "2yopd6Zff5b773WzAwiW3vLpRDnbwhrYkx6P1YUgYGybx2CzxWC1Jxv5E3Rdk7pbfCqoiZJgWqKyDGsziFS3iF1s",
  "key3": "3Ddp7Zsi1jRNZ9SPMGM3LA8HXDpjBp8DiJndJU3JfZgj6eZb2zoACV92tEZTcesRjJuzftMXQQVqxj2ZpgbuEian",
  "key4": "fVpXX23tmN2WWuxzqhK262Q29TdZf3hUSakFqh4FVyMWuEjHLTvxWDcF91dxegsVqcxXHcse7wVGrTK61Up7dW1",
  "key5": "4Y3RA6j2y5aJqKJuFwQiQevBDkTpQyUoeF6s7ekteigRziV7U691FtNc8xbpkG77ty8VYbDHRJd4yCBfiGdJSiDK",
  "key6": "5HjyZYrJFz3HMD32RoD6d84P8HStnETufB4uGXG2BfJRSitTz7Y9DGSUBnf7E2dqm3EBK1MedJJgXsC2XoN337ay",
  "key7": "4FqWssSCpCjwL77C9hbh9564swYUfAeikgc91KVAd4BY8FdzUraycBaDtH6gnjS9zWsFzSqjPWbX1Up87TaRcRoM",
  "key8": "r77HA7DqN3RQ7WJbTGsaib3z3cge69ss5kWLWe3ej219yueVLysETzw2bc1zSeMCuBftxHGWaZ83GK1ZV4DvYwu",
  "key9": "3WG3UpxQmA2h6i3wbNGqKkNjKVyEMfbZWBJ5y34LNRpXyZMUAh4k7KF2qctyeQ14tP9agPKnBZ3ybudEzTze7oSw",
  "key10": "5t3EP8isoViX38m8z3vyqN4LJdFSnhh8bqJ8BnWQQGuRKS7Ffo4FVWK2gnuZpeSMj4mK5SPNXQAriesau7akaQnh",
  "key11": "5zKPNBUauRBQLAdAdiL1eMPVE812P5EH5vD3QGXoRZa3wxPvU2433KMw1C5oeMM4iYHAt78H3ASdazakncJe1rur",
  "key12": "5wJFfZinUZxpUofgh2La9uPCzgWFkW8meurcqa9Z1iM6SsFzP3aTzgc1v9YWK6RsLvG1W6nsp5d39EBFjxkpozgL",
  "key13": "38aipYREv3vuJEedd1TaPwDPbckiCxHDMg9NrPqn6zhACXh2XdzhmMxWYS6GuXyGf77fiLCPC8RFUcc3dj2Gmu1m",
  "key14": "3TLZDxUcKS3NGvefZV6RaJBXifyvHCDaQpRX716F4mXjdTRpUj7Cdrh2eV778mV5DdHa49SAmAY6uGdSZo8Weo5f",
  "key15": "DPhgLUJ9CxjKmwYLQAhS3fYBwvqyNBhmqUzhNNxn82i7pLMXUcpjzuthjW2MMxp2WEvXgK7264mVE4XjDgXHuY4",
  "key16": "2bQebebCU2YoTiKF8fQja4cJ5EyMfegbPYnX7dMWQwF4nXBcn6Bqh6Dov2umcRC4TWWwus4MtXRXdcEmTxWrQ2B6",
  "key17": "2cxy4v15NHzsAZqj1Znnm9UVYZTaXShv1vvWaJWkzBKZZPpipVA4pJMVGXfxBhd9zteBAHbjr1He1FcT9jx5giZr",
  "key18": "3nwyS1qv8jtTMVNwjF8PStnZYmjRf76PU4vuv8ZWUiuVTgCfqdAQHAvnQ7PBut9YiW4atbyDg1JRdKsCYX4vG4PZ",
  "key19": "2X3Uujk7pV6f9hj6EmQZH12EtHSwHitiPAqPAZ4qrG7mKuACQhUWyPdk4nGdE8MsRpDq6E6mzk6ApuWr9nVpq6oL",
  "key20": "4H4LcJ61WyJs27S346qxGtFYXcz9Q2aEd3r1Xypnv7ubZXvYLkHPxxgtVBpwCesDsxRHEiALb81j2dEFJk95mkdz",
  "key21": "Ej1xgDoZrBqSKBCMkQJMFFhtqznmqXfK5zB6fWozGPB6ae9HA5H6WfAuzRYa6cNmUQTgd7r7kazUUbXCNNcoRQf",
  "key22": "wD7Cr4y4xtW2qi96ub8W8GrExpk9d5E6SM4m2EBuCjwAfyKiNCCcyqAnREYaGDG3pu6J1BGgc9APm23QACDd8uQ",
  "key23": "5SYLqh3s5Lw8VtZRZTKQRSRvSeYyRWbkhZ7WMx7rXWBCbS9m8ZH5JMKDPb5JKzYnmdbVaJJfmptjN669UBq4x6Au",
  "key24": "569j9A2UBye3uYf18n9uSiJ548ja9LagKkooiQHWhR5cdjbGBwCDwUVuTqYaxyzoH664yWkXSPrv6dKKBCv74ut5",
  "key25": "4Tvgui145fC87rRuJyRJYuCFiK9xj6GA5v8naxQgrDcDWLVpvFhA9wmztShkoSWr7GaRadnUg7qveC237VQ6onH5",
  "key26": "JjP6fd91pA9L1eqAD2jSeQNVt9VF8GHQ8uNBhVucqDZ1or7BCNzGv5YesgyzuqMbw7p2iMjojouJ9Tn5t5cZg3m",
  "key27": "5wHwMvwuQensfM7SUiN8LBAwR1gS33ZNQhBuRoaLhkH1sJQ2bG6oz1HqVV9SJpVTLJGt5x7tVtSnN76384dGscv8",
  "key28": "FUSnxCxFCZB4br2WkX6MjS8DHPJYvu3ACNA7CNeJCb5NSSgndrx6aH1pws412fdoHerudvxjppyZhnHuAJCjgFx",
  "key29": "45kRhYxxZZVA8do7nDgqBSzayxbYzWWZnR3pM1mh7L1CEviyFCpCYVQefSdyAUhUAd2RXdoJmytSEhx1dZjZDvLq",
  "key30": "3UfLNygYzyu7CZTWQ19ETyQZBKKh6SEZUG1sS4mrCHyyc6haKUUJwXB8T6wtnBZSEue7xj1zSiu7xD2e7GscTWda",
  "key31": "9cS2vTPw6SCRVt9FnBGFdbFe8P1CnEXCuyEJNkD2ojjeq85EYNGRPuNQzxK8UZHNrN6Xt5LWy8MBBrYr76A2bni",
  "key32": "5DymJvtDqV6VwS5NQRWKUCNotUinYFnNhsGcWFhMcbfRcDuEjWaZPjRG2Xre91EtEoqt3RC8Ggicvop3nDyNHyL2",
  "key33": "2qorbJyE5KVcnyPsr5E8PyXZf51acnLj5tQdihTRamjimpce7avG6ocWJuSQCCvyEDh8DYGGwEyoy3TGvvtdcAoW",
  "key34": "2pBEj3453ZhMazukZpqtqZ8PBYuUvvMJeKpTQXKY2aywLrcFNKb4M64qSKNT5FYEd3o29QQgCHDerMfTgjBJBc8q",
  "key35": "3itht32mrewJKKjuGgsyKqaoXj2uXDMC1rbFmN8T4cTh2txg5F6i828MG1KeLd3kpXyiMRVfFzJLCfUuS1tERqjH",
  "key36": "2TpYrrdTFZJnu9EAqou4RbLNtZsFvHW6aXrqpEutxNi9YfJMK5xSnDQXqpL9HzLt9iLd3bzzZ7MsJhWLoFeDcDpj",
  "key37": "2xj2oXZMSLPFA7hTC9AS97GFoAt3nfes8PsymzLz8tYnP7ms5m4Lh9RBr4vG6SKuYYYPxk3NJj2Bzno3khfbd19b"
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
