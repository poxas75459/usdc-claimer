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
    "5i9auxwPy8CDct6so5czKUJHmRAZZTUpKdWs2ne9JJhmeweAnMdRfQZVN9MmL2YDngppt6D4DepUfqqspE2f6jbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43udiUw5ZNSyZS9cwD7DoeMy4DfBPpeJ2G6Ces9QvBdxqtXXV4rPvQ89totn2YeYxh6ui52jo2gkuvogLExo8jzn",
  "key1": "4egWntkWEtBvC9TKrbQV8wPgHXA7rq8DVNAs9ujDKMecdGvefjVZmuFjmL7ArRaK9j1bTZJwS5Xia59aa9FcjrVE",
  "key2": "5TbAaRDyGADRv47JCCuSwxxMbVvSQKX3kdr1xEQpoDW31KRd7EgeUTSgiypPr77PC13pMChv4Z4Kddmb34mr2dGu",
  "key3": "5YzGABQuqjCB5G8B2HNMo8R1bicft7TxSjBmMZFUVhX9nWqNVngqW4RUsjv12QfzaFCv4VdY8LLyVwbvq9Biq6XM",
  "key4": "55p4fNhXe29woLD2hnccFDa9yHmW1tfxbujX39iAZQEQ6xbonFETi4czsifPQGiugcDfzpTX7f6mDdWpUxvYdtxP",
  "key5": "5w1CggYaZYhVcvdFapfwpVZ7wD8FSphLNUeSNnP4PTQvd3KEP8QZwmyUEzuicxvM4Ndt8F6tgS2ETaitw23JcBcS",
  "key6": "674h8qQs98ZwkPBNwWcTyoRX96GgrU2wbTUvk8BgabWNQrXYr52hpvhZbW1RCg252tTMWy9iPWTURZB12Ap7r7eo",
  "key7": "2ta2mx61xHnUEcKMykLAwMFisavbnDxbpsiSERrV1C6dms3dzmfJCThAU8wzFEV7ipfXaAKsfVUeaMsDDBnhPUSk",
  "key8": "m1EJbmv2uGDk1y4WDg5m6Fa5JdHpjPKADgN3eYJ5ijuiENRw5qqHgrTcWK5t5E7nQqfdSaGCuTkMDwLKogZZivB",
  "key9": "4zdr1g68DfZUL2sApkw8nFP2G7nTrCMuEdPDk6jZZi5y7DQ2zQq5T8mkHnqF1VFYLdiaFQNTxbMXGHx9Lfy6D3SM",
  "key10": "L4wE75K4pZQ5FpvBkC31NzfvQAu9NcN8dGeMe6UD74QV5SC6q4tJVGx8JDWpCunRDzgjgHxLUpX79wYujMZBD5k",
  "key11": "3BDjjYtU474wdKW9ApGzGxvZ9LWcrNXkvLQYszfrCzKZ1nViGfsbrHxxAj6766Zt84QWDRbBs8xrEaryfVtZHTcv",
  "key12": "5rzHBrW2HJUrqXBcYeyP5f7HGoo7UQCvcJFP2M9GDoS68yVpqgvTcAbdggKVQZ2KHfipGniC7xgboeAsH7DF7oda",
  "key13": "4Sg8MFdKgutALkVMLjdRWbGPmQZdQJT2i4sUJP2KSL6GAPNU4qbKbou7HbALQMbk6sCWDMbVGhdsvcGmWdbKhaU6",
  "key14": "4rmBExHs2y2q3oncJZAHdhNfCSX41FqktvUDkV4X2P9jq2rNanB856xdfKuiPbbXS1e3f3bqUbxJUnb5hnY2LDHS",
  "key15": "2PCrFGPfvRicSyoawwzra8CcZ7sCJTXkjQ65r1iieFLk4CexbhPuNrutAhKkz73N7NC6gL4gkoUAevNA32DKrhCs",
  "key16": "61tkcFacwchaYcx1Fg42uuKLxRYnB6w6kBuNnJbYqScYwXALegip5sAsuBrUPypAVYqUZWXtny1uEXTxf7erJHDh",
  "key17": "ktq5WZWF9fgBnJUvpgf59ipw55djAdZ5CBGULgA9dMSimBNvVeDvw9rTjRBhBzWN5PpqhWdnu4DnWF6vKyrQ7Do",
  "key18": "4zhUi2CuvtE6xkmhQkrLecMaEH625W51wJHES49jFgVWCqySwj32jGmZvY9dBGB4ofJiXMKXwrkUsz3zoSkd7sqG",
  "key19": "2Sek2mSnm2yg4jgzEMKgsX57YpUkRm2epNs4yZTutYbpBPBbMgSmZiBz7URtcV5UyepXRwoxMjJqf9FqBoSTg4Zq",
  "key20": "4MCtHSnG5tqzp3L2MDVzwq7nCnL4hmwWmQP7NafLtmwo3XHP9aUQeMjRctFkBPFHSZmPgNWo3Gg7fLD96MFzuc8J",
  "key21": "5UzRHj6RtuZhwJCXRVx8GAAbbp6euGpScRJfmSNmVi4UrsK1QzX5G88uqoUxpX4y8dyj1DDqg9YtKSKz9EZX1VAe",
  "key22": "4BczyYRr8QvMr1yNhhASmSGqdwqpgNySavEXYgUDt5Lhyiubq7eozeruY3ZencSVFojSNphrYJuPXY4QucVTfdg2",
  "key23": "5Eh83KjMDivE3auGgzE4Exe4K99eE6kwqwo4ZcJd3bayTkv1FmNdpmowhnQf75ksqF5vpS8NULqWeVhFkagzEBqZ",
  "key24": "5g4G8ZyBUr4RsK4B4N19N3BCLotzFoUZK6ti1EBeH8v2KGXtarEeKRpxaKgQxnGaU7uho4rLCLuEHcWCisdGCV5k",
  "key25": "4GDM1qyTp5ZBQQkTnHr1vgD7iekzUw7TC5b74LG9ZVjdMQDqMjd6LC9WNp5RkFtuWNPBrCLAu6G9gD9Kz6u4xPCm",
  "key26": "5UxjtQDE7M3A7wEuakrcTikobmHnyk3JYs4YTm5tFcJF4GZKbtNXyTcLfy6spw73cL3p4D4jJfhgzn7JqjNVSzDV",
  "key27": "2vuA5LsKWLURPshzPZ9V6JVT5SwsQHVzAxYvzo3HYun56eiq2vAZBnwvhR9ohJwTxNh4edhYhW74HUY3e6pyTXZW",
  "key28": "4byA48C4ipPqMEah1kbUNYMDNS5XgRUz8prWd8ZEwVFPnJqxNScjLrzNz47Hp9juWeZ2UJkkc7DipKMykRXLzEej",
  "key29": "4oUdfvP5h3wD7626JSa92kg6vkAQ9saE237FUdD7SbFshEq4bZouU5TrfXQBnKhXgsWU17iMhFmT6nuVHXBF6v37",
  "key30": "3ZEt6DHPV7bMr6fHzdt5WeU39LWwgnGL77wzvNWbmvcdaz2iJMZFQ73qVPfTCyPVsJv4kNemHrtfNGAHtyAxL9jw",
  "key31": "aHAia63LXvEYqj3wPNnfNpHR9zpEPympbyWe1rCG5JXb4y1hfBq5p6dJJXa5iJBYRLu5fJD9zPNxE4SZ5UNfb3D"
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
