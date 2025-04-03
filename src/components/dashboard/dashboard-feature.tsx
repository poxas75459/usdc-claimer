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
    "dkpzdaNTKobMCnP5S7LKfEJc6MnCM6sPKovPu2pYFJgWpfPyysoVCFy81NuahTQjyADfGKQohd7Rfd3cC5AQwgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HWEF2S8YDFTomEwoARnvfNvBGpPd2ZEbh84uHVqgby4thVgk3RAT1dqbZcd6C92CpNNZBfAn14z49hAEdSnHr2a",
  "key1": "cKE8vEPdv2qdJyiM7QVeD7ctUJvBmXHGqJEnmrWNQkvw3wZhpZpEfSSbAc1PNzNjsKuLUmgUoNYgzPpQCgX2HV6",
  "key2": "4mR7fgdyuUxTQn6C8vNjrHmvYkdfPZ6VKRfuBy9ejWZ6uYR86yEpL9cAGvGNRJfUtkYFM49qByPKdQCZYgfiRpbs",
  "key3": "AeiSHdEuULjEvgCaHteGZGcYb6iee6gCRjCNvFWEZtmtze2oqL5LomHvMwE2XzJTNV9RPiMNkuPB5h1D4jiy6DT",
  "key4": "4h7VHC3KhpnPzeHk2rWQmdpqtpeDd4MynTjHCg4tqtMDDqKnbyvxBno9zqnHrU6HuwtzbS1Lwj8Dqn91Wtgk7yLi",
  "key5": "5k6TJ2jGyPhRBooDHeKiVQRPBEvMDqM1mEnMdFiJSNY33xRRB7aut84id7Y3Cf9KJbNWQV8tEV9uEq7iRG7nxjhc",
  "key6": "5otRtb6B5w17t1Q6xUymK7ojrV255TxiVM2bVav8QNPziPBoFpLc3eU4uDnKB4vcaVMrbZVhQ9QHV9vufDdG3mE",
  "key7": "2gxAK9dLLVxrUdZJdMDsuZmGXhRkK6iSLE8hBdovqNNdsmPapjVyBZbEEpFYj1op4rFmG5sSowqy7DQHWwXrJkD9",
  "key8": "uZziakPTQEvYnSg9G8RxLrjab6wzR8AEQcjLC1hCUWU64NUKonXx9vSZj6Qxfop8BLJLw73fQ3NRkfnwUiAi7Q2",
  "key9": "GxLeyhET62KuNvEf9prt3wnRoiCxPdZtsKi7NaBxabrPureZ7gjfNghAeU3pumqAy7M7BuJ6Hz6YS32Y9aQhXio",
  "key10": "2jujB62Fr5qV7qeR7TQ83e9tdRwT7G8B7x46hPfr1SmwbvH2C2zANX8GKTcUaE8qx94r6xkLaVhFzMrwJvEHDUaR",
  "key11": "aTcD16jdpujtYXNMw9qJqmGWakZ7VtgZwRz5W9WF2NrE2FHxrqBy8BMMHk6kRDkwok3yDCnrf8hdah6AU9XLuR2",
  "key12": "59jFt4aVCXSpyoGRUncR1Y81tAViz7F2TCGARh8CKvZpUh8qkWezRRbNhpuZUkWEMJmiCWHVtYsE27UiB3kXSvu8",
  "key13": "VAdexPmnaY1pxmY2EsuaoBsDH9FKSgmB75UjUeWmgBYko2gerqK3LTSkupEmsqXVBhRMAQYzjLK8BowQN9DjvvM",
  "key14": "3mLGGEARfJcs5MeuiCwpqCVGckEffHdwaxm5xHx13r3sLRasrTZAu9UbJSakkT1Y22CBfGoQmk3VkMjz9FM475EG",
  "key15": "25gsJpBao4aMgQ1EYyey174XknKsmXM1nKJfvVh3qQxA4RWrU6uzp5dZNtqEdfMtRa8za5wwbjFfkdTkusAAVTVD",
  "key16": "1SVZj6zsEy9cyLSmiDUPvigJHu2EZaeWeU18n2T8E5nehFRuHCTmkL8J7aDHi9BPMQNrnKky5vtBrF4YJ6ntpH2",
  "key17": "5cKdCESyYRfm5YN1JPPTEFzBY5pjHBRRYfvegv6HwbfeEfJPhxTgCxwbMLz7iXuA1hf5nVkr3LUeyr7S8iCdwRg6",
  "key18": "CHbAfmoXeHPNj9AtWcPcFTJKajD5kRQJvEXWoLecP4xX91W3k3WDXU7Qb8DSbGnrAgnqxEnRg2tKBHkqHsjxcEB",
  "key19": "5WDmJv6Ksp45uEuFChsFQaVqXDD6t8eAyWP6DUvQZTL8noZqvwgYbUUwmY8Mr1UNPu5x3xqfU751JLtPK4RUuomC",
  "key20": "3xUGCT1eSsgHiXc9LKcJnmytBDv6WvsDP6pD5ksnrEoUZdasyQvHJnG3CYAXkD4BQGjJZiiRnkqNTGH8WXjAqJXC",
  "key21": "4pC25CRznbvpxpCQjmz4G72Wg2tq357tCPXK8fsK3rEcooEqJMsiuYKPeU84aPqWPrjEqNDNFsa9n1hw3wjvDivm",
  "key22": "sQW1psEqQUrwmAyiqAQPoKNeEWfqVvbV5EowMkao5hNzJxZ1ofE2CHAE3eTShbZher3x7yf7i4Fi7R2XVs6kwaG",
  "key23": "28aqNUXCS5Ag1dC6RV3Q8X2i3fizEMDaXi8yaWsJTu9kHcYpk8m9jLxi8Qu7X2FBDJ1z2vk2Vw7QvFbbg7XUzZmn",
  "key24": "5SfpkQarAzCUndAbRLRV3SywLYNzkdb73yy1KkmTMtviEDLccow8CBw2QAH7QtQBzV79s7ZMR3myTNmuMaC4ZK8K",
  "key25": "4WBB8hu76NAE61rwnMyaDXQWyuo6kHPCdG13gq7dNd6NxJbwV4scy9XppGN6CviEHducdd5AuyXFVTJD7VvHzMA8",
  "key26": "5xg5ABhumZgzaYWcTtiT2hueGo5NnHttCSo7LTxJnT5rwfvBxAkwb6vAMXb3KVcWWnJviGBupQorKEzM3Qfeh17N",
  "key27": "4uxh5RPRdKE8YxCCfV1uBd33U1c4DbA5rS4Fv2NGrTHDnyEMXLHGFqXPhks8YCZtzWMNo8thnKL4VGjMZCqjgfFB",
  "key28": "2QFLeEaNYpKmiZfR9TyC1uXnH36gonWnQcoNAWRKCqovrceR9CVNVzoBjvdn7o7N3P8W1nhCLYQsJf3k4g8qvUPL",
  "key29": "2NBZZGKgL743gXVC33hoAZJ1AY7BZ6mCsbeLMbaNoEczC9BK6WCz8REecXChTWxsKQQij9jhCpcXbhfZXTpTXKq2",
  "key30": "4CFMkbPGaYoVzzSYpxLbzkt6SAasiqtXi37sTAtq6M1UNwHFyTRBRVJPxHpaFkffKitXrphjVTrx2ampv2f4vv6d",
  "key31": "2hnCpNPPxL13Hq8nZbFj6XQwZxfMMWRXPPNEjumc3Hzdm7d8wpr1DBmwKu1A3tU5kNQnzSnaoF4RUwfub4ujMKa1",
  "key32": "5RjnKERgxbkRrcyAhVUrJkJbb1oUtZRZoVDVv9Zaeu2BLj3fSDusv6KinLgmdsyA729Lip7gLarqW1FCfh5c2BNr",
  "key33": "K7QTJER4k71W8Pf1RhEfaf1rsnGLmmBg1AsnLotvHdxW3ywZJMj9GMxQEPCAiMjbdx5gN8EtgtGwiHBJfQyaLwg",
  "key34": "2WygNnUfzxa22maD7B38gzZ7brV92QxJBhy8oMVeCFFwCAGbmvcrQ9jS9Br7KVBVCPxLmQvRpPPh3Tm65yu2fg8D"
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
