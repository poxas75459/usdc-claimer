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
    "5cDHP5kZhHVUnxstUQ7tAAdCW7M49NecMvtGzjfvJHxxNwNXMcnbqmAhsJGqvghms4drb56GGyqk1A3bKVardCfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XjPSdkRE4PMf24SYH9uXMKCfwk2qtryaEhhNHZLmtrv6zFYybCrwxST5fzDnAfLcLSRvC6tWd7mZgzkEjCioLo9",
  "key1": "ZHEAJs2c6QBEnQdytxdGzdp6rBX35edcJJDJ5kzgzCT1zi3ovtpGyKE1NuzcsVqw9e21YxnE1DD7VadYboZKv9e",
  "key2": "Jvt3EN7buieH1tPPk3SbtVCDkd9PtRHtX9VfEW9zDrHdNPaotjhuB7FYP4bKPTe8hN7gsm3P9sQuHMXiyyRwyxQ",
  "key3": "3Yp8AvyhXccrpxfGq9tCxwSnvDqVKFbw824Frn1sKuy48rj1LAy4BZz73nqfqCBHjkf8nNFtMg3qqJBTiayZ4Nqn",
  "key4": "4kRbseWxniRCu7guBfj15fwdNeiqcmhq6nwDE8LEuiDDGuyBPBm52EmTRgmY9vAsJ3WZ6owjBrdJzNbUMXDkSSwG",
  "key5": "2NDZoLksEzwKgnEY7zFEDhut4BfGDA4sq2Ty4w8dzY77363ivSnRH4igDkJc1bA6SJepDw4Aqqmx49kMmwQyA6Hj",
  "key6": "5ePfe5eezFtbMKeF71wU1GQMYjzdYNyBbwDptd5h4rpnH5SxvYbSqviixKik4AEJs9CRXeiRpuX5nN73ACufgHmD",
  "key7": "wCEDeSjv4ZHt3zxH8R6nYVcGaG4kYw8kXCNaGiY8LAj1KbAvyCB8FRUptMn9W6asZwwbBywZr5SUzGYpyumPXT8",
  "key8": "4wxMmykFaSqGxi5sEE1sYHMnBaPxX6WQZYbBNuRojHX4U6n9VESBsjkwxHB5C3JgL6FWikspkjXK7dA9grDiB4he",
  "key9": "2eEGUmQGshhLYFKxsEjDx2ZLaqzghGvsrX8YfzNYA8qy3Hg2eyxWovcY7SN8UVy5yYS8iWPZAR3bGpjCrtcmMJxE",
  "key10": "4rwXQULwBeuoFSJWv8bw2xhujMW67FhMSQbG9W5ihF2ubAxiKHmH3qGuKi79MgW8x8JqXPePKZDvHXPqcFGThnm8",
  "key11": "3cDZnf9SAze1bb5h5mHn8yPWepq7aHjJfkZ4aPiwjfJwz25iEdp5ZVgbeznNkGVDMyiq2MauqcoAzRX6te16nuZs",
  "key12": "GWc7bL5CBuudeNG5caCfZRULP1G9cJWkPLutafiJCoUwNAntKmzHPXBiPZfQbWyBRVQMn86zKFwjRKDpEg4Ynpc",
  "key13": "4X36NSh8xuS8MpphtuZ1kEbbQQduC6vuXQytmnehpiNXuRRhaQA83KVCpy15jVj1pDTwGJdfquS6fXJGXf12XNqm",
  "key14": "5hywthLZbtQm9PhrxSEFfQeXm54ShSEKRzM9BXGoFdR5gPgZKwLvEJvyty2c6nNvdHuf5QbVtSUgfDtkXoxNfitj",
  "key15": "b4gaLNVECNQpt87kNpJvxmjGspycCvD2SmTEPhYL7zZRgW42vjf4MdoqPnnY95YuqRMXTE1m6amiTeECQG6P7vn",
  "key16": "3XGP84J6PeY8NSoYUiq3veZQH76wDeYR21DVnByQg9gL7esJe6vQkeVz7xnj2RGsWjx1aX6DMbZQnAX2ake6RRwy",
  "key17": "b1hpyhvBHY3A9pu8quwvycn4yMNvAWQ9vaaCXPyGYDwMqTNTc6tKVFY24zHrb1fUSmV1rtAhu2EzRXFSSDTacMt",
  "key18": "3mZcgmzmn4Bo2thKzwQMuDXRiDKdBLt3sbpDV5WBAoQxcgsW9FeJSr5oojVQdr8dYfvfHx5Tz42yaE3WRPfvXHVe",
  "key19": "4HqDS7XtVHbkjhiyyc5fg7iB2ZmPRhJaGBnnmYeBqRNnvTinUbvsVMuYQmyEEQvKT6L1ZvsoR9T3NWxvpDmGYYyE",
  "key20": "4UacZcj2v4VQCqJqaHTpLxntw4nTrjzPP9dVoZ4nCpXD9AW2SKUoT1skAfo8yxBXKwPRcgLtYHURbpikuvREdLjS",
  "key21": "4ECfuivYMCHvdC1Q6w4joisXYpx1YWrSiTHAfskgmjsQX3mshjjszNs1Fx3yrBQpdw3KVJLQgfgZ6zsf1e328jqW",
  "key22": "32yrBR2Syue33CnRw1bzMvZFDS7UNoCj7tHrLgXpdtFAQ5qh67Jer1ERbcd9TEu4DkNVCzMv38zELZfE4Dk31FDC",
  "key23": "4TnDZdoyriPjbdLaAmmytY5vFJkHcw4Q3pXofwJWJU3LpC2p5uH42L8RJeDg4qkhjgfhkSebRNB4hr8ACg7CikKk",
  "key24": "fzwyE7eUnSj4LFdqB7Vc6MbGfvwamwForBXpbueyiRyV5fnWeAJMggskf8qWT5xVRqRmsmLfFgZvN7EiHJ9ktdA",
  "key25": "2U1fFNCfiz6mUHQdtxe7UTTGLQJsYDeFC9C3U9pe3Q9V2bvhJ7uW6AChsMwjqf6um8azqiVQbxBVnyHXZzhiBcHE",
  "key26": "5KeBUASaFByN5PLt7gCNsFh6iYsJfi4RjM88HFbuVvYcZwGeyzMm5nfq8GpsPKkxrzXcsQgrjZgLNX5YbHSFBDVS",
  "key27": "61VDrUdcJr3kNpNFTTJFLfdexyp6xtyRfNAWkeHGuotFg9kGu5BNift3fupEmNoL7MYN9uRm82e94T9GoqFBc6Y4"
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
