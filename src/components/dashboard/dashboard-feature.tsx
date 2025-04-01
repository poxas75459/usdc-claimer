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
    "3Y6WJ8kWsujJ3nJSsv1kiVojNcq25by28vBuFAHsgXquj6erANporyYR7gHETeKkpFHtarLfuRBEtxCiHzscgf6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L1c3UVA5x6jPUDGEeWHvj66FmMaWiJWayxU6JhD43BNmFJoaGRdn7KGQ8FPd3tA2gG4ZU2ipTVruDwZ5Dbcdjnz",
  "key1": "5uYQrvNqzjrbUSVokLc4yNi2wWaDrkyabZ1NMGD2XVjGmKWZX3xWURpkpkGcTosnDZcsEXv5NXtxdsbY1hbHv4Pm",
  "key2": "2yQuXx2k7WSyjmTZVhrcMDdRovni7ecQAeC3V6651QxZXKBYJBjosBdwCjf2tjCYkP3mXdSESmupH1PTSgMknBQr",
  "key3": "5sjCBM83Sb5GuM159jz1aec93BDAnkFuGDv5KkxSE6RM78KsXpRp9h2iyVcqmVF9UmejuWyfd4DozTeeMTT33RCr",
  "key4": "vL3bmqh2ndkSeLa2FXAPsk6ZEB1FR9pxpg9nbk6RiqWKkmje63nUwDAPq8KCNWqFWS9aqujRf7KHosHaEuHQTh2",
  "key5": "4XEAahivZkmWvQxeRwJSyWRE7AsoTmaLXF7w3baWHB9afMjcnFWz9jbYDXYvahBsDvUA7Cpf3dHVjizeyEE1yxVj",
  "key6": "EnT4qjCJmTSU2vYEDZ3QPGbDXuhMPgVooiH8sAZLVEL3P2eZz8cDWTQ5HtVggMksvRkGZ79woiBbUzSo6bB6dmC",
  "key7": "2xZdhkpf6twgtHkk5Mq9PLf6hrcTn8wM9QuHPBTNqfK2HVH8MxE9BUoGiT2VFgua68EKvDURotrTf8a7HiHb6Yjy",
  "key8": "3wTtx8y2FC5UnkA9o7U8UxdrihnLw8EF47fNL3ZGGiFs3GxXG41wwvF3XzTPmjnXz31QVXVmarg6GmNqS8VNzSDw",
  "key9": "3k5y3GBfi9ALzApz7vZhjMDZxKHDw6y4FgsCTn1VBptEfd7obLgy1qyBNFKuDYeDbTEokXU6Gov53eZbdRaUBkF9",
  "key10": "4XShXcqBGmnSo1QyqjPtQyEVvJE4a6i3dF993d24HaM28JRPVpk8kVEBwPfBb1gqsNeYNAQHi5aKoKbihHxkniFT",
  "key11": "hkz3Q9FT69H8ogBuj7vAHHPHJaNydeZkMzBXAA7kqBT3wxLJ4o3ArNvruNVSfLZzyJPWkbX5rc8Xjj7rBTuJ5pH",
  "key12": "A5FAZUtGBXLWKdt5eLqXKSoDya9PvfHqUz8x1o4WwiJK57SqKTMQ4DH59K6BUZ8mvcr4ADY5tYSDhHTgxNX4zQp",
  "key13": "mXPpkiyvoxqUmbVpEmRGG49KWGrTcr9g8KgpoWynqpvPHUo3FSxX4msArLQY92a2tJSLsz4bVkQuuqJ7Pp97ZFi",
  "key14": "u1xJdnj7At5RPthokBt2gff3mqt5Xt8yj6pxEbC5qqGzGrMCL4GJNkXcbtoErxJMveVP3VFZRRV1jhTvGfve36d",
  "key15": "2noycmVnnFdwz8iVw2NDUGNCeTk3AGGLHuWAH6irGGXyQqoU2V2qycWgQNzoAVD1YqChLTL4fQqEkMAeBhAPYsJi",
  "key16": "2otSqQNf4tiAVWMdBswTAvD6ahn13YWPj7NyurcLDnqv1XdxQCkXPY7A46VuN337NTdiHcVAmFofpbZCDcoCukpH",
  "key17": "3Nz3ShAjE3zQyPq84DVZsY1j2jEQeajDnyk7avjEFh9p66Z3YVG1KDwiywFNpqBK5JW4GFiucYfvqDofm2xX1a5Q",
  "key18": "2dS593k3mSWaomYR7vAx9wNT16m7yZc2dUiXs6eUgkc8CquM4sS4Fxgqb2gXi3A5ZBAgTaoaLjdZrMDH1mRczwPC",
  "key19": "2unBTwL3kZasDSpVV5cgndBrPNR9RTidxj8BrG2x2299ohCJFZ5phFpRTxKp1UhXNVq2YNB7Ddrutx772RCowWmA",
  "key20": "2ZudWFuYjDBdX7AVxrJJ1bYjuzuRMqNbvJQvRGwfGVegdG6YoVavwBmpy3EyeFdvJBPv4ycYg137PodHKwwMxt22",
  "key21": "2s5LNeBT5QK8SvihARbV8q1Sj1vGriMTreohB8BVtwSHgwa4GFR15K3EKNnsuGQMRuFNauoi8MREvsQQ8yYHJmjH",
  "key22": "4BUBaWgwrmd2DRvHBuY3jPWEZ2MGUYKhGtRjkfah73AjMwHvTPupSfgeSunkwfft7epKhJB2HHBkvV1W4dVpDAbm",
  "key23": "4yPSoFbLfsE2uKA4JnwKi7b4rFcj4q25vZ4yxsw18pincEBaVA9cj7pzVwDmkQGu3TPKtACvSQpCZHza4ZHG67iR",
  "key24": "5H5cfGMbe9x1s6AKhiKjxVgZFzj7uboeeHaDsiWdDicMsKo79x77NEexaD7amPa264Ndfv7PGAdgLqMrJALb6GQM",
  "key25": "4LjevqMKsiVu8F2cDi3hFCMQpaRE2eqRcua6de5r4tcPQ1yrnehZ493Yk14pBX6RZbVVoHTZGyCVZ2uj7xAKxBVr",
  "key26": "5ZxK65JKYTAXtrykWe4AKafJx7BXmN4C4T7FxUxh8z9jWF1E5UXMui5ME7UbU98tHgwYjNVVrVYLMZqLuMH4Vt35",
  "key27": "6Lp2xGNf4q59yVv3orMRkqk7M2Yhkk8RzErEFudwHjoaZ9ERn4xvJTkGqzyghD67HyGhsEMXBqyKW7sugUXWkeR",
  "key28": "3cWXCLTuo6sVfPp9RWzvQ9E83eda1Qj1t7m3rUMXva5RZYSCaPd76bTzNqgJXLnHKV3XyVjY4PBQzmBDAW72vhEN",
  "key29": "2vvxnCDqd26ce3UZWYzhj1aTM8aYa6CMYN4xBjWVG4aqKQ41NXTzKPpStBc8MPC5RykjWPTeTGffK8Bi3FDYHD3W",
  "key30": "2mbyiqVuKApknMXKVGyqz385F5dLT18htzRHCS1iHbC8ZZerqqBz74SoovHhpi46jdxjj1rKqBeuP9ofkrX54UX6",
  "key31": "4fEYkgvFYJoFEgma8u15XmeEh6ueRUt6CeYHKLnGebfhQPtXSayFoRU6wYV6onMPrDBpocqsCK5cNUXHb4GqqJtF",
  "key32": "E54Pcmfzwqhk7fnKHiu51DpX89TuMk8qLa6KqLVhdRwU4VAKbDAJQ7GK1gDyXqwootALzNTuKi9HRLgWq5CyngX",
  "key33": "j6vt3n55SmH1Lc5HqJuqweNsEyf5LzgKPyBwzhJfLbVvrPwKiCED9vJSQnc3hDmouTUcU9JhebSFRyXa2wfudEf"
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
