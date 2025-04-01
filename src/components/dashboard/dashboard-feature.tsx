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
    "44CXHeKX6v4L8F7PdnsyX2Q94ANUonpHVnEqyKLeiHa9MRb3Kf6TyZeD9Q9ezcta7Hj8rL5hmMtdg9LbHA184jiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zwtAWsMFwH6sXEt3zECwbTpawLFBiUUdux7wg2TnaagPWEf6AozkZUN6sFCCytJhjnvrySfinKjnHq8D3rRPJVn",
  "key1": "5rXLVx8Ky5r7WkBfWkTJ8CFCapA2mfJJapzvschizm16YLJUPj2Wc6DYyLs6hWVuidhEcWFzDCdd93nHaGNkEdzo",
  "key2": "3eJPKbCki9VTVwenZiZv6yWNE4mHckqkjwY94P4iAfqb3Mk9ywtB6p9q2BURJsR5rt2qCt9px3gvSX69UhJHicPL",
  "key3": "2zYKJJKb8pQgKdyiCAQi61h7eAnoacx14NebJkuH1YykfaPEty3rhM3BWoVqxmm67uhD7e11HNqXnxgkkGc2m9nt",
  "key4": "3aiqRgSu6puHNihpCJ6U5q7SnecEyh3DJyEe1eWMCJrF5RjJ8NARwSDMcV2pEGy3ZvuK37x481RvMUWZpWXe8jkK",
  "key5": "4m7mwpVu5ndEg5xCRZAMGPeGiGHkWHnXsfTqLT3XqW5in6ysQZ3mE3HBXEd8HGQpoYQ1NemKe52YxG2FqtuXeDA3",
  "key6": "DfvkDkEoCkVDTz5aGhEhThS8JiGD4rdXEqbPwDDDo495YXyg8Frzdh6beR3P6U4hymyDGmD5AtvkR119mnh5KeF",
  "key7": "2XjSARUDJmHyE35bsJys28hB7qk1zRwTLF93izLPeS8MoGvP9aiQTipap6HtyPqug6L7SKx9HLX8BkR61tCb5gGP",
  "key8": "FdfknV2mp32xJhX4gSFPbS2bWGsdiVjkUoanTjN26tuERjd6okip5x4NQxA5Te6dWrTuhUxL77MmTsqVEtv4HEg",
  "key9": "AAPEzD6cbx8NY4J9moVyq85J2UfFDJJzNrxanXQAmwyyc1Frj5ygKLLfPeXnW3qZUYg8iKBWqoTyzGZuktbfo8Q",
  "key10": "227q95CcBTGAeUxqrqiBdVSTQAf1NW3GFo56R9vSsJKx26FN1cqHZXZpbPGSXr8yti4ismr9tpV5eWEP76GnVYTz",
  "key11": "34xmREDNmkCvef9B2q91pjCF5ccgo8sTgJWFfaL3CXNjKQKuxnWzqPSWnKMHPtx2p2nskqaQhqfPVu1NU9HvtKVB",
  "key12": "Nmb8bmcFZ1HmZbJW5admEjgrdGUcUuMvqMzbTUCoxY2qK42wnmm6C2Rju2MfDWo63MiDhwit9hfLGWw1KBuxfv5",
  "key13": "4yGBNeh9mvYDPoAK15TRqsiQV6Vxxs2cf7hQya7LPa3JFsRKHuv2Gtt5hBHtrVvNLu6y6ZHScKAWXkNyq3aUZsJQ",
  "key14": "5zeGmffAZLi86gazaBDbKCbtVUW7YcxCfeof6qNncLEYpMxdokV5BMqJ2vPPeXkwn83Ka9kPPqeQdnwnxPgVfSdL",
  "key15": "655aTkweCQHqSxmfrnUM69nZnkTYQKnAzEY6HB5ds4wKk2Ej16M1yU9Arge5g6KKV4GuUQn9LJKd51DcgKX5fQ4s",
  "key16": "PWQ3quzuAW8qXk4qFdHRcorFm69M2whqaLLi5HQL7L1h71etpCkd4nqJaBxdofTAnF5HRGuXtyRFpFQ2SDSNAXT",
  "key17": "4nrKHUpvpGJjgyTWz9vu9xBeFfq6GsDcrpUGiTNWn61bCxF4uQf2Rg8sqFrVWpVfE7bYdbcdZqiR8FvWYHPnG18V",
  "key18": "XwA5W5Ak7MRZHhK8icQbBoPE7JtZsRbKZpcaUm4LWigkLHEWzWNupatHfweWKxxAF78SEuz5j9dBTdze8rZYRw2",
  "key19": "5Js3hyTGRtedkuP8q8AWdaUNWRxvyCAZBd3escWhVipmLBCna1SxJuwfjEN4J3H1XQAPrEbAwxgSzPR5rTw5xxNt",
  "key20": "pvyFVHcnCUVAmZc6YUeiHHFibun1jCDMzRdNjLdYUchgvmVEXQ994Wqc3AHUng4MUbbvgphwj9Zr8JxQxmBj4QQ",
  "key21": "5ohEngmQaPB9Xe5U3g8iJeKzJQSQ8KZdp8hJNzTBJEqtNdJSz6EVH1qrggMEsuxS1M2MuaW4eDdpyFD4bBSjrdYe",
  "key22": "5RSpqxARY31cAsVjawgeakUYrDxJV7BRgM9juLzWRZVUgshCn7KkhHdoxFxKmoH3Ftp8hW8JD7hTqY7GsMZA6kE2",
  "key23": "4t6CeyG4yPaSReKG3UGz5QGx6unnXt8pX4Mws7Gok245fv6BSgx7pquAsasi5eYkYe1TYH3JqjEyGxdRvx4rmcyb",
  "key24": "5f6tYbBSoyQ74ckatBFMPizfD3EZVmWNpe1YFRgqvKZxrkR73WmRBdkEWgsxrZrqiZvXEfyhNBAFESpRGThaTn4F",
  "key25": "SxCngtAUxuTTskVoroGsLUU1jtSgCMmGYKUGvJvtCibqJVgmmzhfDAAVWrbXgh1UTrQ4wGyFJTaByCcebFinb5s",
  "key26": "2ou5Zp5148sPtaykE3GbxGdfqWfy5ez2xEtD8uxxEsiJmqhxJV5BqVFmqNDcKeqNDCV975NMTdDP4kifLqpFBcAu",
  "key27": "DudbVor3CpNojxg7k8Jz6JawjEHKepK6ZGw9pTtuDnvGdyqSvNqV7rz6p3nPf2fWB2nAHFnHYQLNoTjVoT6vRc2",
  "key28": "5NGNcUFL4PC9HWqTZVToCE2F43Tj4jJaDavT3N2U5Sj8kVaXwYrfanju79kuJ9JmBy4E5pBGLu4Kj2swEg66btxw",
  "key29": "3As95ox3yqkfumT7fvKtaqo4ZRS6MzCtqgy9eXzopsKkRHGs2qwkptNBrQczjxyiCDaWRupQedkH92XM7ZiNhAcR",
  "key30": "4BLHc7eLE8PtfotgCYvaw2L6EbBw87PiRs4XqSNBfXxsmdpKBymy1yGVoJMbbn2ybyZGXPkvDd9afLpvaSquvSwN",
  "key31": "45kQeuW56TwdyQKuv2NSem9qF7XNpi2mjkfVzgJgUHnuFuEdzAxJ5DHx51xz9UUUPp1tmVtA8CDLLHbUVDKLgZha",
  "key32": "5uY2EbKS7qGppRasqdR3PydqQSwvkrWbF6VmT44CJNsYJ6cWKkCfDPvER4gj1p1g6tn4RHm2MD4LJncaGGRP3fbM",
  "key33": "VjzAXxpgD1KkCf5UX9MeKDoT7d9LaSkbHbtr9cnM63NaByuHP1gjiMhh4VySC68MJ7yQjVbzavGkAoLDwZqPjam",
  "key34": "59wUuFswsavtoW5QErBTzuQTTNfTitCzbbLW3AB76Pesqm1dD4nNn6NqFeyuxHLqtkS2sCevqcFzvX8sigZivdhq",
  "key35": "3XaPhvXWeeZrZHfP8xTfkobU3gfgPpAS7uaZLK9ruJYr8rsJbH8Kj2rcd5nzNGYzJGfjJyUHekaTbqkM4XW5Hsfc",
  "key36": "5E9WY12TX1JPHXTgREMN7CDcSdxRpRm4M7FmoAUPAWTfEJwzxxqybewGyFcJGgY1EsXDBkFp7AFfkxEPFbCPzkG2",
  "key37": "2fzxXLTjQ5refvEdgNEZxeWfwLejQcERWhjodrgubpeHGF4zUFwB3XVMYGVYXQQhxEd1hjausYXSWqFQmZTbADKA"
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
