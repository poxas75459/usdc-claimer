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
    "2FkkYMmSed22mmcL2MHfNEoEEZDH7F1aUgmFyMeMCpSdQnyMSBbqAAd8c6jEqbKavHqGVZCbkNHo9wd8AAUUR1mK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GVp6JxV9KJsTMAzS9MWNwDT5CWifqb43qjW5TnUtXV4TkAcjLs4JUsTUCBarvFFoehGS1muygUrzvW7Rt5fYy5n",
  "key1": "4QRksJ83i3yNVE6o6QfaQpsbxiz8euFktaqtgpvEtGuGuJgkL4FAGUym7LSxoh8HWrQmQfUSniegDLTsFf16QMw7",
  "key2": "5wLRqYgAUVBCn66EZKwAsndzgNCZ7qTBCBLHJM7MazZMgLsJLigxce1r1BuK77T8okoyrTuVmTKAqCXYz7dWnasQ",
  "key3": "EWnLBUhTVj2bNMihEJ3bmsXqGqQRHG1bxs41rFQLMCrx5MgQ5UjzrBZ3BfxYnzGRjf1uTzqYfE5eSE9apj8FwDj",
  "key4": "34Kr2PT28eZwXaKXwvstLyQJ67qVqaNav48iUW33uXmtXYoSZsMCvvivrXiyxf3vK47pWi5APkyzFRAaRSbVqV3E",
  "key5": "65vNpCDnHy8wwNCTnERQvG1Hv8MasoGQ2oZLpi5xyFS5ifiBR6RpuUj7mprdq2LUuKYvKy8WDFaoa8joqMetZ6Dw",
  "key6": "GspLFA8LwjXaVVcyHGBkT4HdPsT65vkUqXMdumHkxqpAWpJJMKhEftinAnB4jJKFUxZfVnp3uMtBWZDPTzFyvUH",
  "key7": "3SkQhJjysF2DTxBQYPEuoFAeGWwRmLR8RRwJycmd4UC1N8GXecB4pB3erBn8PRCYHdRFewzeTHnoF8QVUX1FYDZo",
  "key8": "2AtEtwRTRgFSg3VuD7tEREYLodVvbk87HzSznBvywqbT3fo3fvn7MfsXWd23QU1dtsU211rsKGy5NNzPZ3ibayJr",
  "key9": "7jazppkXLPSUhLoGSomjLKzFK5AYy1nhK7ZzDfHK1U6uoG2bKsZTVynAQeaJnu3t7xJhzNrRaMC1hZ3CD7x3frf",
  "key10": "5g4PPoi7T8aTreic5f6oKzoQojNe12mb7GTpbTyLSA6nFVrRx4o5kF7ZNHXXJUYKkdx7QiJUzkmFjpZrGMXfXARH",
  "key11": "XXE3y9kz8MSdkvWoy369w8xBvDYqUqj1DJj7gDZLycyegqL13ipSXs6wWamro3SevvfafVggVDUHFZqCZEQcfgi",
  "key12": "5T5szrhVA6VhJSeWungeYE4BHZFFBuFRhcTnxv3u9hnXC3FgC7Ug4aWzSa6VNitxrfwAnoKPzHeW2GxQepi14hZ2",
  "key13": "22JpHSjUncUrk41H8n1GYadWkWCDbfE3cZQCBPJn8UAEfP8UQVy3tPKXsAVKDEboL4xx6eiucQ7XjVu9H7GArsKQ",
  "key14": "ktGUYebxnQ8rpbLMdyPraLw2ZtEqEDpMvT3Q1jcLj8A8e9H7LJgecQY5ssxhMee2Jq5bcWcwBLGnNzfuiRrKhg2",
  "key15": "5e4fUDGi8XmzNeqJQaLVh3m89VZ6UtqjbsnEcAsm4Zrh2oAFymPKP5mAM9y99wYkhTmZYEfsunFWyVFvANQH7ZUa",
  "key16": "5WmsDRoE1zLWjUQS9cDKtaq7TP97rVjjg2XUktcMDA7TjKXTyLiYjS3uhDxHRFZcR7WqXCukmdY22rLfRwBzwx1z",
  "key17": "3Kjwtd49qXbosCd3ksUFRThVXkJuzJ5idRRKiZQYnT3qRY3EgZsQEDDT6UMgPYRq8v4ng9xAxQnbmm8Q4cJJZ1tc",
  "key18": "NyqGb8gKfnZCafsZd5KkSbZSoGezdaeqbwyqQMtM4i8MoDMFPu9DYemJH6Gxq9tMn2TNeXpxE5qvAZkeTghtn5x",
  "key19": "5n4vrjHD5TByCjxCUwSdWT3QpRzPigk8XK3tNuu8cnWZiQAVXu5fdbE9DkN3s6afdtLCZac64Q5rNc3UQs7Wdm1K",
  "key20": "4NcJhGweGux5wRqhMnsStUVXnJ13PRsGTnL3yVJiqzi1LsSE8GpxQsxpkNMmWZkiFi9csmtiACMsuwuAtokkynbJ",
  "key21": "56abcYgTTZ4H28pYkJ6FVzGBHFkdfeEgSPFVLaS9csDi9MnfumyZzdaRGz3jx9RBUcewUj3LEgRGC9k1rkMGC6rD",
  "key22": "2MGKiFaSz9xhSXUt8Lx6rK3RizsHdGyeTbKmDkJ4STBaTbPcz4RasBxsA3fy62p8qbnctdXv7RZuM7jKhGozPM6h",
  "key23": "47qDSJ3GzBFsWokX3A7EuiTbLL1s3nwwGeNgZ8Res4LSJndMjM3Qjf1wjk2kwpNvZ9iaxcXLREiF7Lj4cgznTBJD",
  "key24": "5dVixmpQcW3gq9kNoaPWGqaRE5hd6o9GRqhijiJLBvkqnZb9s1KNGU5chVmaRuzVM1cESqhDUVbwoXCszYrHCmcz",
  "key25": "2Q9zCiJF4g95YdC7jdWac3LTskQk6N6Df8qUbnKhiFDuM3CXghsFULeP5spWZc1rE5KktWR3psRnshNQYryRmqu5",
  "key26": "2GYEa4cRQ2buUT69Bn1UJoBicFY5uWbKZDFCUYenhTnqKpGxzJTorKR1Zc8DhXEViThK6Jt8tB9mqKqHrikXHk3X",
  "key27": "3uiB5rUbaTjpWq52fHiRgeb4e63PBL2jRMspRknt4oVMxQutcirmXTVbPV2HWL7AxdgHhSRvh51C3NCUJdQ7tNCm",
  "key28": "2ur54SMJBjVbCi44e54VVDFW4gFu5zfkbmpFdCayZJirveZKM28jMsAfKkdNSR1X44cWjR22Q4D14BukL84TsnPQ",
  "key29": "58zo2g3bvK4VbgjTqRTWQ8sz2BnTQUvbj3pxB13V6LJ8uHZCxNKf2snBvg9BfYJ5MnXEN755XJ4Uz2jf7Ydd8thz",
  "key30": "H7ETwvk2HeZuunSxVLk1nSTNQrY6R4sF1CZ6wiLiFY5NYu2xQBZbC6DYjKFm9uARkn3MXX15p1h2WBXVkFwrTdi",
  "key31": "4PjCZfPaBsFtSoVinzMLjLNTDPUnJfF5d1UitUXXXxrb5b1QxMjmyndSj4XU3jj5rAZMGRy835CqDvzhB7B8MSCU",
  "key32": "5Z3kajxSmVmvK6qixXjhu9SJHU9LLqZUFXBMYQP9MmonQQrJYp7BmdDuYT5ahkmizUzXtyepGKnm27Gomg29DK6o",
  "key33": "4GfHE8jMuJ52QSVN3czK8ALeCCpBoiFmyxiD1Nu4ZhtXwiXX3KTfjR7rGNEcCzyykxRphE33UKvfbAivSSih2Tui",
  "key34": "3KFuxcFqnvLcK4mm2qtUWgzZLUZiA3jAcpee4yVrmPZ775SPorjC2JRQ33gi1np79SxmrQwxWVsumHx5sFEjfeRo",
  "key35": "2J8aB9VtrFc8ZxHcyrELTJxbAy2nP9feurgsZ5ii2Ne89gNWRiqN3PtvyNT7t7LoBYe9NKqB4wKAy1kaLN9MSn5i",
  "key36": "3MpPskGNHn2KzS4MCD2HYn94B12GtLkn12ATcz8QVTRX4eXNz7oodYNcZymHQx7ATH19gjvQ7PGtxTJRpCsw3fgD",
  "key37": "CEoTaFB3VZvN6mnorZ13mcszm3TasYrmsWSs2acRr6BJHTAWRix3FfjA1JYxcSfy9atjGNdtm1onzwZjyHbTRJD",
  "key38": "3jr5rGznvTPaKVydmSCMF98uHPhAzWNrZdMNqY2sYhB5wvccjtJwun1hBZwLbQ37qrXEHL83Kr9xg5mwkEynqZf7",
  "key39": "4BearHJHEWDXqfVtSwDnnEiBU7u1qMGWbm75RDVhCde4SQ3Ew91zdKWNRezmBgjrXu7knvuFuBooB9FMQ7jybs2z",
  "key40": "3HUv4zfLUcDUFhoWDyRUwq8FzFvR9KQUX6Ezhgr2xAUYqH9qQVPqVbvtuUdUCaNr9KX1sSUuRJVpPFUXYyTryJt5",
  "key41": "3sFa2wXk1tLp4WN8K6EaZy7RAWJWdQ1MsXp21jfvMBH9DfQF5uV8qARHTZ9eiPSVLyrTtHU8qoY44BvLWy96fcgw",
  "key42": "5R1tfGzeoeQc2kUVnRnAcAygXV1vEaZnT47hcoYPRjYMyn2rGDVso6CrVK5YCytQ2WhbthVU2PXHsNpeoPRdT8gf",
  "key43": "JyxF7AHTpnJ82fSNHjEjssvt7RBF9gNovnPZNd53MSHymyW9qHzuv47UJjo64xBv6uzdUsD4MpgHofDu3xoUHvb",
  "key44": "7UenJqvP3p6iUbPxHyiJyRqtMhQRFvjPqFnX4vpz7TNAE6n8fuGYMHaZxRMYbRuEhRyguuosNm4jhZ6oFn4iw8s",
  "key45": "5o82z8f1o1yvFMzy7CgUN8mP3bsBULh77ncV7KEp7nJr6YQj7KrH5DCUT5SWu4FNyRWFd7bH9YBhcpUg7jMu35ar",
  "key46": "3Djynf4h9KUnFzfN1SrFHSRcy3Y3RQ7coFSSnz3fYS7FbQDobxvcz9dBBqv5A3yzesyBRLhFoZyGG421i8y1rhCo"
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
