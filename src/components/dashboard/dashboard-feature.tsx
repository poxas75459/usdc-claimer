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
    "WYUWfrsw27LWk8aBUKKvQo7MjdFuhRbTA24JyVbVCgUL9kUgG8szaAKVNbZJDCGhoY3tbLb4DiCWYerk5saUR1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pRKmjY6Wo6GYJsT7hfkiyhdGkCgqGRc5qiDNwawLMgLvbykg7hr2koA24sU5wAr6E6gjZRAc88MKHJuDc2EQoud",
  "key1": "5q7H6jr1v82kNcyy3WFFKVUgM5MBq4TmHmUKmFtURs3xGAHGXxDBvLeW3mAFrHgvJjX7jGVepmt2o7Lh9NVvxveM",
  "key2": "o6AY7aQ13B2bg5sCd7TpGafXisEnqbuLk4kWTBdRHYJzqWaESPJ9vSBTRmb8bqZJJv6yZ6ZT9YxmERQV5hVwXg6",
  "key3": "ALwMTVsP5qj94NW2rmixZaz5cph6PjAwe71YUNJd4rnjdhoF7Mh5CiS4oKn7GUWdrVvFd2F9t3ophwmhNa6rner",
  "key4": "3ogfFzNg6FcgqfgkpyFTETyEAssbUW33kLB5ympDeeYWVMyP4X2My9mAtkkj9au5LMJehxsFkLesLF3oo9RRf5j3",
  "key5": "oVBnwpQQahuyVqHR7m2QxQ9Vk2HZqpSSguCs9HYmyeUybKjDUp7N3Ny6SHHnsjWXJvcnbJvVv5pZ445PZWmoXPX",
  "key6": "4uZZ2jUFALvSNGj1gSmsZAy1YkvYaTkUwzSX5tPk9449EabwbF9Z4EiqPgxWomPVGZbnpYFoBDdx4rjYDPDn7SrY",
  "key7": "43iFZY8oykiatpK4xrsa8zrbY2TKPRDD7gGQT8vPDZ4n4aVwfvfY2sjFr4RGwN8hXD4bxLedytKYHE983cuLjJb9",
  "key8": "4AD3MBuBakqgPc23yUH6i69pcaY3fwE85gZEmcvnNL4754UX5uYE63grfzwGV35WrzRmoVJv4v3jWYEL2oNTKSK1",
  "key9": "s16CHvRzgYN5eyuZoFmKZ1usdo5o82GMDxTNspohoYMhGj4yHpBFCcK4coCzjSsSbkxeuGXBJoAnY2Dmk61NFsU",
  "key10": "5fV6481pfG5HRGuDrhzFGSx5s9GWmF3hE1PACegsSxMsCbqGdNahqVCJbsYuddxyiZFwNki2P2n66if3Ja1jdBiX",
  "key11": "2cVfPUssuWvVewNLqfPTKJGh6V5bofbynBcAumPehQfbnUZ7QkpLNrdKJFNv8RNCyidb779TVycv1NmRhwqkh8J4",
  "key12": "61Nzr5fLE27iyCA4rcQyf75LxD5Y7gsnnSMbJPLdVZcwFya5svPBDBqLvnFMRDUTmLXfRa5JjTGVCVPAHnixve5r",
  "key13": "5tQgChtweJg86coNY5G459Hbo3bmB1hvqWbQJmYKbYZHa3J6hLiyXK4vgh9aJ2B3ud34BRa1ieB4sp6uS8PNnsbP",
  "key14": "3otQMkbZsNwWv1pESEuNmUj9k5e9N5WaJzLVot1aSqoNjoxToK4z8E5b4KuEDRczexDSsaeRw8uQYNdijtnigH12",
  "key15": "2UvcY1CZ2KZ4C35Bo4hwmm6yYZCzSG3oz8uVqJySfzWkheEEqnuJJPDEkYvvT4J6zoXQu4ESiTwwFWgwupMAGBuv",
  "key16": "48n6zbtUVrXqtuFinKdsFCo2ScHU6ekdtu4QoW3FCMsavW66rdfbpj3U8nrfzD4ELc2taMLoJph5XJri8iLjf2SD",
  "key17": "4W1PUqMENSkazcjG9GoLsHH6zazUYSogw7QhVZXzDeXeFX7bHZtPqcmoitqr2YN1DzfT8z5v7CmzHQ3cM1ca4HWF",
  "key18": "pagBxGvnrDYyRkT8ufLjDz66UApC7FqCGQqWQTZsGmstqegEy15cgBMeHwuXmTEZoA4ayiR2Dx6fAxzPHeT9K7u",
  "key19": "3Deb6k3D4TyEat6sdFFoPBxN4HBjFM1ubyBFbmHJk7fDraxJbK7wGG2q7Ua146kV2uTDrR2Z4AsHZv4tzf6Kx7rz",
  "key20": "3xZBviz8QYWaC73biqx7bttngqtNC9pFQvCPiDdpB3DxmpMCV841ViFZ51KMqfSxyfZLA94ybv6eQrvaMn6A84uK",
  "key21": "2n2cpyv588XTZdpoZFSL8PDy14TEKScV3s26nL32C13S5mWcRQmknyhQo777LX9endGSKbRt6fV7zdyw3ohn2BbG",
  "key22": "3nanx445GtuYzYbJNC6gEJYiryk6EB4GfCgfUfJG1mvLj2M2XhPpcY9g4tJNUSiv27dU51AJ7Y4tiX4Ad69WTeNi",
  "key23": "zEghu6myACyBvgP3wDkRmyJFyqEbjwv2YqWvjHwosbXmNFZKzxpbDgRswyYHhhSSYwJEMBZzdmE1k9LqsGv2FT6",
  "key24": "5vchUi2oh8MY6VVXj87bEYEmX7K2UmzFNw2CDQRruP1CDhMwfiXeB3N3e6sArHemMDibGs7rHaLy3AshWqh7Ar85",
  "key25": "4SryykTx4qPga8j5MZM9emYPeBUzio3kRQawYtXMQeBgc3AwDzd32ouhEkTeicUQLMP7szoHzutqmgrcz3DmmQXo",
  "key26": "36Vnj7oeWoZzKhEJCD5bgMLGPyHoDXxjRaSX2NUjwYjWYJhwG6CWnhorhPzirAVnAaiJvTqy4wy9FfMeLgdbn64D",
  "key27": "BbSkdPGpD4AbBEEroLnmtbvBRShdc5eDseYyppydL9tq93iAkHs62pL7jWmHrwedDvyQLonqvf2uxxsCWsTBTG8",
  "key28": "TYnLNqFNSNQPmVFqCfjZbnMjxhTc3VWfBhNLqYPFdjuQuanu3iw9BWjeziEcz48va12ZcABWAprVTF6bGvGhqWF",
  "key29": "MzfNvWv5ziyM72NyxrUwTqaQ2wCeN21f6csnVwrUbYS5RfKyGacbGfSDyME6vUnvdkXTgEq6Xxoap798ATqkuZX",
  "key30": "63aaWoqS5PwdujMKhA3qTHR7r3NwGVJUGPBCxKNBr57V562zvBw9nGfLqCvs7UaFXap6bM8xatzdAATALwjC7YKj",
  "key31": "63zWvRr8xAVjsiBEwkJA7arXpENBRF6MZJXroxpaXoTUD4yuQ5uzzpiAuzDNYUC3q2pxLEEPHRhe2g1kmVW1SBe6",
  "key32": "W4naHZzT7w8q7CVeygNihkMYNVW2xHao3KkFmGYeRbioK392ArKHdCbFQKzpnEVUadEUUw6LjQTYJDg7Q3qydui",
  "key33": "4VaABXCQGEiWaGmmedNPc3kXtZFHkMLvt4TfoQP4a5qqN4QARqAznGvXdWAwRAJ7SxdHnETe7wHAeBUUopxrw72g",
  "key34": "2sE8k1SRbLZ7T2BE8BqrTBrq5DYZZvcMAjDTa4fb1SMBNS8EzBqjbxzAKfNV8XPopRPKesCZ76Zwpk3nY45X8uCn"
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
