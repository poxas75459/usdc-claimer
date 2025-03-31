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
    "9WjYyeK5LXnv8XX3QuDdiVjV3aDJXbdzLwQUpED226V3o6yqNPrsz5JVRSzUaLD46kSjMh8QB7X5QWow2EgQTKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ud7N7FTNwTC1fExaSg4qud6cjStror9faA6qJLWKsmdcYqCddyiwTYgZ4VY7H8U7Wg6gQwCotdSBdBrbEC2QJAE",
  "key1": "5fmuuixKCGPfKaPEW8nkeYp863CUfqB8SHTkGjRATKdJvrPCLgNBm6ewtNK4RqiBrZjwWWMHyaDJnrafuFZHLCux",
  "key2": "4g29EMQ4T9pjJWodbxsJkAbbvNRQ1GAfQiFDhqrafbN9TPZE6MgASu2x1BhDrSMzHfdRcLD162JHr2Sm2FSmHeri",
  "key3": "KEe9jnhwfph7eQCMfW4KN5H1XmHF3jrDbz19YR3hogDMuEifwi7yn8fJ6LvVTwd4HmME4wtZBZFYvs8ypZ2LZ62",
  "key4": "56MszTHrVubWBHwosUyQxyUv5emdNcAHoMXCnbHqsX8nJ2gG2WMQoxrPmcd9j9gDRhEN3HictWnzAbk9fP46Vn8A",
  "key5": "2CMHqsDbgm9YkjaLqEr6HhuoJdYH3CJVZdn4MAhQGy5uz1WmkJS3gcfFVxAEynReGMXPnQP6ZXmGiXxz9wzk432X",
  "key6": "NWGZByS8nef5NCK2Q4ZhFukd2HszPwXEBbsT2SUfVgYFHfgRwqpEGF6MVJ6cidWUguDAv7PnB7wFUX4X6QcjZxq",
  "key7": "2NbspCTMdiorQQZiPeUgU2TxSRPX7hRKvgyGrJVbNYTcjxXyzcWfmzJqfSVU47rvmwKxnp7dVTNVbVArCNR2Vor",
  "key8": "3DnmVWtUa5KP3R5TQUJJ6Kto5oLSPco14bfQkNxmDumUcFm9ydAVuiRsJ35GfNfqn5D3WMc2uNaKHRENrLgL3Atf",
  "key9": "GF5K8DLdBXH44qDALdqJ8X9WDaZwNUofxjgvk1zmTJKxgveHSpVP1ydbG2VDV2hratLfQwkC86PXBkdYirLnGXC",
  "key10": "ocAW3NyqmjXGnmBUroCuTewncGF9xZTxwm8CN9TKaAqKFtWCXAj9Erw2uudGjsrc4Bp7JvZVK7SXNJBejDQvKPG",
  "key11": "3EH6dRjHt5Vi8DCiyW4cX3ucHeRz3rEUDtBZ5evev7SG6h3juri6XzA7RawkMMB6nNUKTtmfDkqRddLdBKs94jTt",
  "key12": "5f4ZDaPM5s4basUYp811vKASoDCbkLZxrzX8x9nQo9cEFZ1qfkMi6sgH3sZgEfAE5jhBT9egthbDdAkG2Lx9TZ6r",
  "key13": "427pdSuyYXNbDMaS62sSd4Gzuf97Hb49fGuPTAQZrGhUrhi5vkxv1hyViSZsUvnt1h7VMb9jATbLGHxTwaMZ2XkJ",
  "key14": "5SeHYjbLfFSDHFiC22y1XxfmYs5uQ93mzfXGNemirCmP2DE9s6XSpRZZ49zj7cEyVgobZEyew3SDeX6QSdBtkTSV",
  "key15": "39fniXryTRvXj8zaD3TQ66aLqc7W6DEkchxkh9G7G9dXRGLJxTCt89q9ydHKuBHXXTD1HNMC6duegrLpVGPHTh2N",
  "key16": "4xsa6dya4b6JQBgqHepxxyPsjd2W73Hozoh2ABAuRUkMWs4eLAWU5JEhrZNtrshyusb8qMagga9xwJYqMJhkSmUD",
  "key17": "3tHE15bz5RJ9Tqxw6mUZP1QAvcbzC2a9gHa7CVFsoE7jfCmxYmvbJVgXCmWtXN8BSBZKL2wXcTCPsjcqUEGkjXCS",
  "key18": "26BHQUwHzeRfj7tgkoZXQ6o2oJoTH94q7woRVyi4pfPzvc1xoe49Sxai8rgS11FqFkNzom2iTKQghshMNVAJWPTm",
  "key19": "3PVE69uoozrvPWje7gXVdxDmQBY9UZqvGx7GpXnfcxxsfTfo7nGJnTrbtXkLbn2DGLDfhXn2AVcjzYr4irVNzKCR",
  "key20": "2ZVRcuH9RaQ9WBxBXzgqKJHJo55k4V8um5m1fnLtAWocsuKFWXC975xJUvN9KCgAcZYf1fmUUZBJ8W3nXQ1VNifX",
  "key21": "5nvZDVA3P5NxKDPkmpuY8gcRQUU31RgXX2H99b6GabL669ufxDML45eUxJbv69ZiHo3MbN5iBMCGbCQqb3N8Zuu4",
  "key22": "iYR72ePJ9XDHrCwhp9oqSbAeJwq2RBsokG9oJ72GZ95nCcbk6ySMFhemgb4RXTuhYz9pVcVW5HBaV5sjKPpVTi7",
  "key23": "2xSADHWphf85GHo2fqQx7V7LG863zdKbBMAhHDSpxeiJ7dLK64Az3iQ7hdufvkDASq9yPEDbcHvnd8LtAHkA7eqq",
  "key24": "3R5Afcc7WxaDK7yDfRJWqYHAkyDLPAhrWM4SD6mksBfD2ZrhZaU3H7MrqBFLZUV1bGHxFSWRdJ5FtVahHBV6bSDt",
  "key25": "5j9Mbvn2V5d5wx5t3dB6gJytm6V8vmnnCSyVzZLuk3ncB5NdCANccbFhtQMDhz6LT83XkoTwBizoUbzWbgM5yB7H",
  "key26": "2Ht8fTT78pkR8komETaa7vrEJ93zWTFLFdhzzJV51gR11rMcszRQR4pFu6mhR5bezcoWpLHH1b1xhx6kFkzTfF7G",
  "key27": "2x2ttcaGX653mM6drKo2JZ1PhZvkhdU4NA9d8EgyQsv1crUbv6PieSS9bkZpeRidxRXXiRhuu1Z1vmYW1AVFDHZA",
  "key28": "5UPeH69143FhjnMdw29bNzC8GyCwbNB2wVa2xoMiUji68vpEHRyz5p4zN3SLKsoJMvkigCwri3MnDvjFAWbshZDi",
  "key29": "zdV4ANp3HqJbBHaES5BBWDjNkLpeRAFMtiBns2zZ7qrHYqpGYdv9p59XwgwRtswCoZx2Q3an8xhH8Db9hdrf7ab",
  "key30": "4L4QyoET9p1tqMy7WLrq2Nm3WaY5Ry2Aa87KYysPigcyitxbcVCpwhucEyEzn63T1h2yGvPP8pBqP3d1A2Qt4Y9U",
  "key31": "Qt5TzCSK3aKK7UjKa1epNDyipeNtyz45wMmCM4P88LGbYYUpbvofh6WLEUqpzHHywN9WZ3SBhFnB8xMbVMJQgKF",
  "key32": "2bXsPAPJqrG9X4SUDaUudTxdeWtAP6UxixErQu4YhGPnirox7xo2Y5gbkDGNaDnivAA5s3HaBYQ8AAxVP59VyNwy"
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
