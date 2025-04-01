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
    "2CQmfJ855XF9tXMNWkP1ZHBRuq99DkqF8hnoKa3u7c2purFnQnYBM8Azf2HuWnqnG5Fh7w8TGLTB9srSFXuASL6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PMmp7kqtj2YNwXm5vhSmVDWEosYUXXTVYq15MjWQa7QkYCtDkDvTgg8rKfwT6PqdyJ47PEPpV5kVhc2xo8tyUuE",
  "key1": "34Vwz8Nk2KEKVe5cyyVbAuP2P85dCtogSzZvNabgM5Sujyxg4YuYzgPoeHvv1XDodWmV5cryAoZbPrtrPs8P7Tea",
  "key2": "5PhrCFjjVBXfrysCgQX2DGZhNFsJKPbQTJx5n2kHRuGfbMReZTzSqXjdQSXUjuEkk5MDRsCoqNKutpwtAdMWNmGD",
  "key3": "5JVKJgi13sKVmxtP5yGGCy45QjDBcKae1XKswopysJzuv6gnbJiQ5gCFJpY6SVgnz55QjTV8ysVZu5MHXh2dZxij",
  "key4": "5sTZhpRHqXhhuq2keZ1zpFZMrqKd5AcJqW5DeU5rTj1MewHJAX1vCm7yJLJzCKS9oMXLMihWN3PLnpAoe9WVifwU",
  "key5": "4NDdkVEF4FuG9j9954rRjUjraw1Rjgzi1MazyvzRE8UchxckTujqtm7jm5pGeWe9G5N65q7n3d8aW8gbANm3HSHk",
  "key6": "5LoBQbYzYkf9LRqSSRg5FW39AASsAM55PMjj5Af9kBNsRs1wMvTSKpMjFcfEPZuEmHVBgkyyGZDrLy8eama5pRT9",
  "key7": "3b3FGRbbueoKHEQg65h4xjS3d8AfEJU4w1pbCnk2G58r8qqk6114fjeoxHbarAa91djzdzDMwP55kZoiHk1Ts8uB",
  "key8": "2Znn3X4v82GUr4kzth737rrDYMKLmtTDTm5rpSNHY2YR9WYx9UQN1RgM2cnU3596UuQL1qspwjA8nSYdwjca1zbj",
  "key9": "23B626BydqxT6tZyELYdcJeWKvYzgyCgSLi8LL56Y6Ta3aWCmmGxDEgaHAmXMX5YyRjBTz6T3brRzRu4P6Wf5Z9f",
  "key10": "4uPKW1AfV1wnPv4MjycBYKu2kdbYVdpbP8WSbgDshFabYDFxp479KYboYABzWN8b3X3LsTAqAucLNRZwjeSRVnTQ",
  "key11": "42amAjmJrX9TZBtTWTaw4zXz6k3vsbaM48a6NDXCXNfJtCLW5rUXbi5Y6PusEBpJpJNBB3MMupHR97SXUAUWJpe",
  "key12": "4fJHbZW2sLcEjVsnKm7w68BdhYjNY5ucQwCSjbGMb3jZEAXhRRm6vye7yNCyQCBZYM4QJfPDyFRnoBvtGxsbZLoV",
  "key13": "qqgyRLTWPBuVgrehVpTDrcD1nMCFPBWnjehXT3RhEeJrBHu6dc95K9cU48DBmidtTNyufssZxkn5hi82dbodCiL",
  "key14": "3XzwsTXoHyDN2EV7yaHse4zYZS5gDjqiCRA4JmXTXX2Z7mF11TFHET3psru9K2sysd5W2Mwaw7A499QcATHKKnkE",
  "key15": "286PqekAM7q1qGwUzGU3yijBWU1iK7GW7kCJWXC5bcc1VWsVRDs7fm7V1yrWvDyrrDaUjbsnZZwCVocjbAy3nKzd",
  "key16": "2ciZo32SQRZYNbraFY4YAyKdxcUVA2HYW3Wzz6DeVVjpFMVbD24JrnHAsrhpkm5AMxQmkxHi6BwVrGH3mmBgdYfC",
  "key17": "4SjCz3g6icbi6LnENy1dSHLnJPXUtZ9wPn1vYyMZJGKJgyyY79BCVW3qfLwPzxPmPtzncPbBj5V1DWgccKhdScHx",
  "key18": "BD8irDz5wz4M5nhEqA1caXJMvq48raczE4LQtj7AZax5FUxfojDb57HiFLxNCCLFbnFacJ91sDybBQWCjM1grDX",
  "key19": "Gr5Vi1wyS3qMMjjjMnFDoRModZHFyMFD2ZuAwBU8BdoVC1oMJHnfKUAyWXuXQ2ghyPPafoZjpPDZeXBmma92fND",
  "key20": "4juRPxeLQUb4LFowh956VABYcw1tJ4h7DqvvY6vEwoWLUSizunr53BaxSYcC5CfTz5QHZzMV2xf5sFhcQTLk3n33",
  "key21": "kdEx29KYK5E863b5qnLh9KXH3QSy6TocV73WpsFKX4JaK7uh8XKmaAUx6xSn9X8hwA6C7Ac8dJvkfTayeCemZjC",
  "key22": "5uZTBLvpMMXnE9Bt5tAC1SjEVrpsyj3zACY6DDFpzJVBhTspt8SUp1o3arK3kbSWh7heS6YKQ7KefDJyBtdDeMLw",
  "key23": "5cMJF9dZGVdY93AXRR5AvoavaTe452rEqGEbm7n111xLprTq3je19qweCZ3VW4uUY2MgnCtYrjMrdc1yaNUXujxE",
  "key24": "2d9hvsLJnoMcXeQoT6TVNmDca9uVTSR4By2WqHN233PfSBKNhd2TqA829bh1WUa2fKQoXC15iRrbQLses2UVgM7q",
  "key25": "yrR6u6ekxcVKVWbr1cyZXEzFJ5B9YbC5fqBbZp8BFvcdfDYYgVzgFTKMNrmDbBkPd9GSJnCVZxBjP4AdYk6Arj4",
  "key26": "6CdxuMkRVvSFqsrbNwSj4tmuHYXZqFNA15FHhpfqmzMit6gR2MHRt2Hjaix7577ywGS1HunrrdPRAw92RpT6c65",
  "key27": "ZiufpdgG1wecvcioXH8kHZexeSoCsNQgVgmKKJiqWnP2yExHDDSf6AxyYB2mzrCcZGXd5GiUK5g25s9GZadPdLf",
  "key28": "4WksHi2Z4CCP3ApmVq3ZNyB3sFQ5wqy69uoJLG5nJQFVjXxc8tDeba4A51ztdM7aUY8Hrf2nZa4g7TELJdApxzr6",
  "key29": "29iwRCyE2cY2WuN6CBifQjmxf9cLaU1fXCUaRqQHwn2Uw2ptxRFR4JExAaBrWr7ZoRNsmsiNQoqUXH38eVuPtbhA",
  "key30": "3a9HZ4jBbsfeJrPwpfYHWPYsni2xT5DVFNzJCDRVkhK3dGZ7dnQ6FcwEjo9Fir8WwbZ8VcNz8G9xRmUN6SwqMc5j",
  "key31": "3i97JwEnGqH4eCxs7pUHBZmruWUKxfo2XgKrssyTTjuZzAbXdLSdVPAszv4TP2LCg9BeAKf7ppnzoScopKVQuSXj",
  "key32": "4gMnjbWjJpJavUqYtUBRdCu1NkHTjY88tJPnZ5KiSfHiF3uJbvtnr5dqRg8p4nxoFrGQPfLZ42mNME76iAnF4Xac",
  "key33": "4dsvjA2zBd5hGLg7RMQ9yLgyHX7TL5CNybohgTfHRBB1GShLVyXuHdkAEDVvoi4A6o6BJN7HXGFTjU7BETojTo7y",
  "key34": "4HkQzbpe3QE35Zu6ovhcAgYEgPUqaBfJgcNjtVMERpNz3iSwn2KyZRPd83yfGfKh1PVp9hNjva4MXTkxFvu7kPTV",
  "key35": "4NfE7zWTtCCPGbQsgcpSiv5p7EGwytTkr8RbNin9KSbbSxtyv73U17td4UF5uruUeQP5zdyYNRsuhp3x16LujDmM",
  "key36": "EdDAj6RTVKGEiD4uv7G8ECs9RzKgpDes9i8ra4yLbTvhKAWuevFCrcgmVoq8vDJexEDMgmiwWqcjetgjCVz8qQU",
  "key37": "KS1X4NeQbCYR29GMQvqX3UnSUM9PWJF3NERizDG6ejqfgQERwGrVDuPtVQoURpVGKK98H8QK5edNo8JK5BSAxmv",
  "key38": "5tjPHpgUHk75gHhx5jmgdX4RbfadkTia7N4r7mFHudWtvy4NrKoDSgLeoWzHXkz6Zmr24nedMPdoEj9t3YFEak1n",
  "key39": "2yPKgey7yDFzyXEEWPxPCtCbf8tpNMZo7UkfPPwVn7B7NhBpgf9DiW3R1JDA8TPgD6mXt8V9D6Abvp9XMiPr9FV4",
  "key40": "5W3StidQ2LV3eQUnbTKr91AGLdJ2gwHfcknYJyaekEv5D8U2WwNW4915e2bJ3PAkzbb1T5gvwtWdQY64ziGcqBy3",
  "key41": "yE9A2nexB5vzHxJKmRMWoPVvsJpQVvGZzvfbougHbLtvRkJH47Nu1LvFhRRRYvVLBbLqYvmiVBRPPjFhkazMQ7a",
  "key42": "2uRfSiL56LkuXpwYxYPvFWgeu2CCJ83GSxUSWLYLZMghZ44XzXAepqjoAjmtFMZ2qCuDdnUc45tUci3geX7yQoPL",
  "key43": "4jKvXC3LgcdpKgC791xuexriuJai5j39oqomyk69r4WmznZ4gB1Jj9CCvi3VdLqcx41MWZhwibDK2SiWoN5Mgp2h"
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
