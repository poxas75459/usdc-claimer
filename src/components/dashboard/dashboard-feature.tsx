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
    "spkGr99dY5GQLn24zqevP8nxSmZE6HebYqWNbNgJvdcvVzYQFnuUnd3meafxdbkxoHm66TGFm3wq1YiLj2zjNja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nbG7q3NDcKqQ1hnKZfpmTfdQPAmx7UvdeBnWgzJayWd91yhbtkaqGeBREHTKMdGza65LabH8WyGPSCruqqhVnCy",
  "key1": "2f7gG9L8gsVniyNs4H9TENUHnQpdF7DhsigoH3tQWEJuwS5kePwLrMouHCbRW2LTmwcRHfLnrdpJwubzmPZSPtU2",
  "key2": "4UGvYBeoqgK4TP31CmYRnL4xhh2aT167mKGwArys1j4jKLKxdxQxVtjokRECBx9NVffENBSWYgk1U8VQKRNcfDCL",
  "key3": "4XvNLaKEDPaP6nREK9zYXt1a5oDssPRfQsUNPkKaok7ghbxdFDWaDKaGtchAuKhcMsQ5EtKhGQadrvdTiJZiAbtX",
  "key4": "3cHjUBv2mF8hFZXYBvHs8Djx9hC5zdUPZrBrhKVUodBHo1Cwiax99hyJ1Ddw61fUh5nFrZoRTJW34Tu76cjuPdYk",
  "key5": "4JifGWzmfZmR7LKLuZjoHfGBYWpWWgyyw25A9tBHaEV2YmmwgjotLVHiH6H72GmacKkN8dEX8S5n3hwFeXs5NKYn",
  "key6": "47jCKq5yE4MkbJzNpeb6tjV24XJEaA72J9jf7Do836HVzT6vrDHBBGBmXVWgHBAZbCfgrRhXo66z5y7oZRnu4xdq",
  "key7": "22ro8y5TDnbxcDTb3MjcXaVwQqLaPU7HYn5wAzQsMWbh5YihLwBL9Hdpu5rFAFJXMz9PQMZaFaMBhu1tFZs56sQv",
  "key8": "2hCMMfA73fy2Z4Xee4v8HiM8cWBVTRaHM6j9JfgtzoYAzXr5MJZaQpGf9ccrZ8ie6n1ePG7iw5MqtBC93cu4jscP",
  "key9": "EF1uTsY3PmpkrmkgjKQNJnbpcU7Tijbcust9Z7dfkCgm7ZPcRYhMknot5rZnjWcspRrzJMA7MHKdvTVNQ2zxks4",
  "key10": "4cXRr51qrFQWXbVeZt2Middk7ALkrTKwoBacWppbfF8sBqzJ49pfGYi4JWG4KKp4FFnAZ1RGHBBK8P9MM1G1DJT8",
  "key11": "5hPe1gpjBtQrQM4WCXX1pBavbMWsRnvUU4B1t5jNR5yUcrstWk5X7BBtGMTZiGA1HyTTjhwmFzJUocW41wcBtv4E",
  "key12": "3g6TcNcDssiamCRsMxNmpFzTk1zPDPF31joxZqEwxcCRVqZ5HKbW3SL5BqG2EkrCXUHUDmiQD8Ko1TcJsxnuY3Z3",
  "key13": "45yEC6WKsRHtPayw4yZ87qeNqdhXdhni6SpqPv9KVXSuCmNYYzTw5RXMeG5F43KJrjACg1wPy6ptr4LacYgYo1X4",
  "key14": "4oCwM1VzpFcT5tSZaYyYN6DEbWWPNLbFDh3i5J5EFrA3ihuKsdd9SjXmZb4CaFhC5XsLh3DibmxTUWR2MsPepHC",
  "key15": "23Z25Pdi8ZP1fAJW1oxchbiiaQiyE7hgTip8VutnxrNKDxKGFQtJvDWpntfqgWFMi27m7naHjYDj7XvKxyyTqY3z",
  "key16": "4M1W8rVfh1oEDsfExVTCBqwrZXJwQvmxkBuC4D2PSZdQXFL3rW1nw3xctuaiMFcSoMqhwUyJ8qxBMyXCwLANJTZJ",
  "key17": "5TKAuxdwxvE7uocnCw8mEGvER9bBZxpV5VZfD1FswK1hRGXhcrymns8Z7bzkRQw3JGAovzL4TRnNeJeaHu6izUtf",
  "key18": "oQEYJV2Qj1z6qAx6V8SndrZweewdWgvgtYRJm3FXsAPb69N2uNEV9Z3mGSYXFX5uvjRsCCpBxHP1rVdyZcmhAmg",
  "key19": "2s9rAZJy5m5CX8Cv7qtgZX5jgqLgYAxEx8bVVkAF5eW7cq6E9TxMxK9eVPAWLEjeu9bukfZhFwdmJxVcjdu6fsbm",
  "key20": "642j86YR2pNuesDiZnqziPm7NAF5cxvnuBDKYv7mVj9rutsdf7xRneaJowUCHpZwUt3RJX7ijfSdmBgigtzyZPVV",
  "key21": "2afuV7EwSENZ9xFsrwSWR8hmNQzB5FfKhhCpSEwDGVz59p7A4uW2pKpQvsps3coSQ1buRcVBQAbrSN5tF1rAYfAX",
  "key22": "2knwn42p7x4xo9BSra3LkzsophEG5rdhG1NdN1zRf3RFEMSzoHotCDAteVsXRoEp4GozmL1EHqChV1bQWFCX9PJf",
  "key23": "2Whf2hrqTvGVEHvp3jJtbk6XCgVoH9hR1soHf3e1K91WoZ3YDXnjgB1FS12vEQK5oQYut2mStrNYFNXZ9ybUbynM",
  "key24": "32igrt9NMDzgx69gAfQ7Wqr6qcQoYeLduXqsyUoXZYymzprho2KENhVHmNLQzxcoxgaU1fMWg9wUeaU3TVfZ6xdN",
  "key25": "5erkAdxsVMRNJesRQ1eDnzKYgsaaXmkYQu9PrexyYAgxcvYbM4CVaNZuiTBECrt9KqqcG7xdQ9C1jNCCsxVhssDW",
  "key26": "4c2iK3BXyDHZbRD7UYj79yPZ4CX2HogJ7owjKGV4B6VLxLe229WDdoVfcB6xXP84mEGuWVzsps9XqEDZkrTajchR",
  "key27": "2agrD6BVRiap8seL9NDKpXQrvsaRSUkjhwyTyHURTbSEVNWtBuJd3JwKu9wV8Y2g6uBvoMrXBYC2r9ARvPC46cyc",
  "key28": "5oWgVpke8Xtpc2fDqgLuV6b34isRogmRLKUvGTKvdcYLGCS3fHoDGCRS1Xcdoz9Fg239U8CFsCjCQh4Pn6ZiqaSC",
  "key29": "5Pb9PSEdRNHUqpQ6fpkaXxiH3tYVdCWdjStiQ3QifTaJKFA9HQxgxtiBic2KnxsnLKDGiRj8K1cRz1hWjLjpQ2jv",
  "key30": "3r4WkoLuhmBE5m2k2qPeKvZBDzi6xRU7s95gHBLb4vq3kxxr7HVDifLDyhz6JbENyM3RrYXTpNr1KP8B8TwthGnS",
  "key31": "2AtcLra4xDe5zGPcgnUcfqNLY9j8cvxpxTCEchysETuDqVM75JJcfq4QLgWsRjn6WrLJSsZiE8YL4vAJAJxasGEy",
  "key32": "pC1gLiuyi4bqMxqHTRk5kgKJSafSvodaJm36UkNgpymoVc9RuyoZHmiutNwF7HyQuUexA1vvMgUFTP1K2Sd8d4z",
  "key33": "5hpR1TaAY5XZb2w9T9xzumPBM9tQGG7PH1ajrVjwUZvgbmrJxC2ZUZZ9RiyhJYLxMFR9Rd8uae22JSSF9MdZeRcZ",
  "key34": "3Rb6vSG82qssAowPCaLh4UvFbbjcM347Zm48HGiKPeY2vb5MFCLZmrBSibQDpwJWrK6dPwepHYEikUWmFFX1PEPm"
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
