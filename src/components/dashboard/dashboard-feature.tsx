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
    "FygLYtbkYP1sdz4XkNXLRrC7vPYc5hEdT1rXpRJFuXWDgVogoBZP1geTkrKV48QgiYZXw8vphA3Qk2MoxvFZe8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x2tPHKPChmxj3qhhg1LrBkAu7MMg5bKYG3c1Q8xMyy3mLv9btKjoRdAbhqR3UwUYYm3BURjE3EtfGcjgjJvwZcz",
  "key1": "MZS8n9oZCEdTk8EY6KpGG8kSFLrmqhVz6TFCC46po3wAJJk1uejMoeqZLabVYbPXdbRcsAdAZqRpzgedZyfZpH8",
  "key2": "NBoZBCwBpsXwFv4CfGryGdAbVmxkiuCiGETQwJrQRb4JAphS7EFDoJUhFtZmotQfdQBob2MhGESdbWfyV7tPtvj",
  "key3": "4M4cciRENnKKn9WqxBeHyMfxw3WFsWeaUQKb9iSB9s9UrVUkNQuo1EW35Z1PWhpQ4ryArEA3S8XhAt22JYUrc1PC",
  "key4": "21Q9MCcmVQqVnX9sSyc6kAenEMMKKygAQFotvFYzWkqqY3nRsw8Ej6ZsHtsTwpw5Fo7iGaUg1PtfSRsyUyRaT6Bc",
  "key5": "4tcYWih3nYSY58Xi7UJtmf1bCqLPN2k4jGAVTAQtqudiFNhvrp8bpmBpTVzwptNukErHk9JENkFw8bwfQBWiaxLt",
  "key6": "31BkoLNqJsV9x1GdzjUAKog1QrA45LrdHGWoEKAARx2iWQQxiBm7Fb9ikR6A7gGRy9pmors4UmqbsY7JhFpNStSC",
  "key7": "59RGvxPWqET9xRPxsj4bkiUp4U7tAriTJTnfjwjHgt6mUrZzFHatmobkNyxU3dPwtcTVa692J4ZoNQj9JzKc6XKF",
  "key8": "3SHZZe1fA7Q1CNU7A6xsvSgJXZiAriPbajH7D2o5kGuee57iJsnqWPr2qbQNgoJskqFVnTef4QkXUffS3rm9CacH",
  "key9": "2QGprSjYsiPn8MsU2C5Eyj8Skig1jwasgEqkchJ1S4KdsiU2rJVoBngVK83ugdSEADjrgFhVuNSZKiL35VRtRZwT",
  "key10": "3dmS8N8tnDqC2yYRENqto89hFBmDfWwsn5UTzj56KP2unprk7VcLeDqAGw5zspwwV5EKUxksSo5zZi447YnU2CDk",
  "key11": "3CSi3yGwSafh2xavon1du8UvVxago9b5x6pTdA2aMRaUhpxrnpts48oGzEEFHCAEtqjcMEvDEomtiqMMQhdFvA7Y",
  "key12": "3ETdvUqkc2YTghsUo8UA6HKLgkYNQLJsFQzS6QrkvCFAJKmERjVnqf6AdsUkrQoQ6XaCyB9huzQqGVayEVLEXYEd",
  "key13": "3gDwNU9pGDniCf9MnHFMwE7gcvKeb3ye9KpPUTuSWeVu3wbcMff1JC5xuMqhxgaJSL2qWzF5qgz7XL5RUwDDZN34",
  "key14": "4Gm62hpmFYqV9TWt3DaAWF1AAZLDcqTWHay9LvemQShs2rk9bKDcctxchhNyzdw2rCuyctVAxzTXNa7hJ74MsYFA",
  "key15": "5YNPFaCvo9fAeP7w1o5C4CgeEFd2gQjtTV6vRUNef1C5LrqbDWuh6MsScvTJeLQxLaPviqEkNJ2q9WES8rkEKmQa",
  "key16": "3BnP4x6S7WA1XCAqiuHjWjWst9AF4iZw8AK6kWRLidHgfpYpYgp5AYbGdMEbQnb1D5QAqyNrndHRuhMM3fKrmmJ1",
  "key17": "gbvQseQCvZoQjcQNngbpxRRBADDU6pBKpaXhDdKsy7jhnrqQZAojhJQfQTFT7mAexuHmMpniAoZpbFiW9Z2cnWJ",
  "key18": "2ZEPQwsAsv3uevFkJmgfFsXL7X8fM83njVjW5B22nn59mQ8sq6J2uULVttJ961M63ezbWdMGwH99ATsozSBjDEw2",
  "key19": "3uqMkaHd58LR2FvJLXVMBkMoHzskBx2r6ghpn5Y1pjcQ6MaRppGk3gLD7VMbTH3CeXseoJdix6sDk9YoKywkyBg9",
  "key20": "2BcibbqCJQQ7NSme9vv9Q352mk2HTR2igN8uGhLsawksrDNQxB4CFN92i3L6ECga41heMyKUJNdweq3CA9yLLxoy",
  "key21": "5grFvpNtgpDxRxABWDyD3qJciBTNnLyoyGyBKGf9hDU3nhmUSme1kiGZ5NRLMcSSmarcr4qNbqftFdQFW8KaKtDy",
  "key22": "Mt2Twfi62bUw1kLBJme7T7AvirC1fC6GLS4D5a9EPCUjebGBK2X65UJTyHUwywAuRcXQ3ZYBo3nNC1fcTFj1DTp",
  "key23": "64vhSzpcAwjwfkfinQTscP6cxUMP1tbECtRGULJPzX2eGs5uZqJhfyBS8x5cbLY8Kik71AaANUomZ8vgpt7nzBNz",
  "key24": "41AMf9cBDkVYGXA2S7eZovMMdFbyKVN7MDVqtmunYQTFS4y7t73FLG2DByZduGsj3WqUfh5tVk1q93RPGZtGEkt2",
  "key25": "4bQS1nbfqaq2e7UBX1x9CzDQUgr6iTQMm3CrMLyfvz2NeothEXdgN2GfYo6f8j1ZknxMPiHeDnFMbnfaTmdRrN8N",
  "key26": "5QsFtrPgiUNRUc5ZXCqUC3M3S8QcqgpcGDPpw4QtFejr3u5DTbkAjtkYCcaT5ijQ6nuKHGvfK3RrWc41rkemea4J",
  "key27": "543DGBAmzizq9yb5j8XNcN8sxTgn5gep8AxvWeWN9UmSN4WgBrhFEcA1SqptNF59ap4aAR2nyQozfrxd6BGh93JP",
  "key28": "4iC1GAFSjkTJ98iwFwsfew5p7MUsYtCnQy2mFZohmcZVa5VAaR7mfjjYfiGNzKyxVVkxFJj7U4ZM4nc3YdVpGwUj",
  "key29": "2pCAmzVhjJftHkcLQBM7GFNR5hbRCJvoBaq1Zp39NZNVRj5CR5wyAKUY5PaEYrQ5qM7cGFeZHHtavuVHM5FW841J",
  "key30": "443TpEVa9wCxScGdGPbN5DxmT42SiY9DNXxXthpLDEJ6ubdDJB6hwNpUaQMXfm6hSqASadWECCsaQtQ2xyaW3ieG",
  "key31": "5SZPW7qbGPQwV6eSaCHLdTbTGZucXodyKo1RqicQqVkoQVVZV27jzpuqqk7ykpy52U7xs41Usy9ixT4hYgC3xkyS",
  "key32": "445jUxMY7GudF3cbMbKoVccASXnsnk9uac9Za4tzXkZ8dZu6KH76ZAGKfAtwAmGZutnk4UKVd6zmdvahYcoWAMnT",
  "key33": "4kbMwLTpdMEQPx2JKeuUkR3qhgWkfwk5ykEP4AKj7oTJLfB6jY4DBxQXNgyJLffPzStqGC292UkpGXPmMqbMnDAg",
  "key34": "4MyinsWJKeG1RZx995FdJKEhZx6f6kvePgBtfMY7Jynuts8krur44n13U15tZyECd6q7yhBwZuA4ibfS5w1fW4je",
  "key35": "9zENmW9akbJyPBikv9yq4BL1JGqVYdcdu3WxRBJ221CV84RYSMX55vQkXXTnHfee16bKpgNTxjvNhWLApHJc5xk",
  "key36": "3gg7gHTjgxDgapNKxe6eDZrNqvQeNhXH6CQxKUBbptjGzxVPipvWtA3dzkVyj8KheDQhAZaTPyoPPdi4waQiptyU",
  "key37": "5mvDirav5iQRLXYPpYhYQo7Ng4H1yQZH5kDBgWW8ZyxymVcPiRd3GWVXkLBTSFUgJqEqaYe89YeDzwSepVZuTUFw",
  "key38": "57W8rhfGcCA564CpK8Hs9HpGrWcD343bvrULcfkrb6NE74GSMnfLnCP22YGJo8ihsSsXAtrsX3SqHn1wQZtqHLQZ",
  "key39": "2rnyK9GL4V13fuzCB8oYsdZcf89yZFaXJ6kubgXt2a1ry7cc8obCLYo92PasJ21DSuXgwHktRa2D1PrxiGo2dJFZ"
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
