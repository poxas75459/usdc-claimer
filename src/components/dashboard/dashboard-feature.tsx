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
    "5QKHY3RhSccEE1FKAPNBieGadQ5oV3ZbT5rYRjVvxmXjjGJjM5sMfPaBp7eGHZ8witKsuKnvAzkqWNLmQKYWy2hd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MfcC6NgqdLXFQZNxkuh9y8YgiNEua7Fq9xsjeHV4KcUkzEEStXJLf1mnAY75ynpDVJU3V6TYJsdCC5toXnVZRqw",
  "key1": "CoGCH6bPuZVeTxTQ5sQL9nnjviSonrMmEBWSjFf8sTttvWzoW5TTGTfqgtAkFAwN1vrtJCq8LXcBbYVHv8r7KdG",
  "key2": "3pDrLjfnkAEbNS8VS1Nfg9N9jXE5hCjsgRftu9TUeVyj75mDMtieXD59nJNxJeFFrcE63w8UxHQLtsvfRhuYZpJN",
  "key3": "2ADZQE6bRKQ41Ro5NcBDEKhVWwqW63YsfsQPdVWcH1r34QQ8bTV15pwwFQ1JpFRFNDDCWWL6D8payxZZmnHPeD7e",
  "key4": "m9agjJ1BTkXjhFiBTU9xheUwN5ALoSbDhsus9GXokf9FRz2nLU2uMqqLSWo3JwknEDmzYBabtRKAymGVAT6Mnud",
  "key5": "5HeNH5d3q1VDSKq2EP9mYitR8TTjiqGZGtp2c4Lg36tZ2Vru4gL1bD2zkstf96gsqg8zSy6GuRGUL3fgf3qSiCxj",
  "key6": "4dS3TQp1GStPgha7T7kDYSQDprEBBRwdHV5hrkXqnFQYT8bGc48JMjLSdFx38p6EmGzunvsYAqNpjrEgtHzUuuK8",
  "key7": "Y5JdghoAQqx4s2ypnycnvtkb4ZYcnfSbhsYucjWWb7kwKMqhtMfuMrrKuu1sfLgWwAoBLhpBd4kroyRssjvPr8u",
  "key8": "5ou2b5PTXBnRbuCpgDGi98e2EsT1df86FbVSpXteckmVfBbjByqCehySajCzeWavkcUebsBEbfXnXUwktqRvxRZg",
  "key9": "4fQ8uuN2QcSBcnAyckMhcFhMj2ebRA7Dbv1SFin1xFRjZpLw9QPfRhWHkaRFYAWiQyB6RXCLo9KfSSo7uBYumTmm",
  "key10": "2MrqMLbhJoHyqSfTxXztEyPGkQ3c7nzikxyRenkBjUAQwMcoojEFvtGaQWtaQdgP5PmrchRxdVr19uJ7i1GdT8eH",
  "key11": "3HRZbEFZ82zqcz2Vp2qChGXFLW1gnBuLMStAJTSpKGqj3hBmDxSkQW2mK8g2HUaWyEsgp4SULdJ1HMFUxBh2vBSE",
  "key12": "36rwGBk3HWtrE2vsoQ13m3F7CTszeRmsuzDwU654moARUZPBJHwBsPP4qyLafKF3SRQ6VfnUdT8hNPf8Qo5XrVjX",
  "key13": "maE4pX4Btp3QeAi6J3JfmVXgPED6FQ35phReipdhT636Snh3jsPvok2StZ5udSTKEGRkBBui5YdDPBB3UeWPKcd",
  "key14": "2ibDtJfucCXaxWnibnAcc3ewxMXacc2VzXzrtYi8Q46RUAd2HCnizR29oe6tWSpxbSobLc9AfyqTvwCCksJa3FRa",
  "key15": "jq7mvQSa2NhHt4E7ubuNMG4qLo6yPfX4iCpovHviqzQxofvuJAxXHEQQ9P4G3vbYzSdQD23zXVZ8Q39xpTeSnuA",
  "key16": "5u7tL3nqcg4x4iy6ZpHx5MA8M1WP5ZGg6xrJrjAXfBaAGxh78VwZc7ECbr6MNoNYTN6zm6urDZBaw1PkzN4o2Cwr",
  "key17": "owWiqWSnXDAz4podN3Ckv4ZcGNZHt6bo3495ChhBePJmzq6i1RHk7ER3fYnQ8ReNxqYvnT4ukksFp778GKD9sZf",
  "key18": "3PBqDy7pQXd1Kc7nvZt9dGzQ58tJw8AjEw3wxrBaVf9Wze3eKpsgU2AjS3rZLuS7bNi4ubrRhLyJobqRYLaeZsty",
  "key19": "3qUzoooyxY17pfK9CUrXbxbspiyt1wS29Wr4YG3nZ1YBvhbEEReWUxrHzak8krWtkfn7H1Y1pf2sZQ2uAChzwtEH",
  "key20": "5LNoAeGVz3LnqKvay4QtBEGPVWow2GeVK2G3nDxhZELnWkM8zpjRTw6zEWT8HY1xaophXXiQJnVf5u8V9WuJ1ZUW",
  "key21": "2mUegxzYS5T76VaC72rxy4eaUdCb86ZWAC1JCfmCbmKjz8fzEvv3izJKPSTPWh3SJiy2pVn27KgmuGceL8rYUuA6",
  "key22": "4UbBCATjm8NxRa1naZuLG8wXAChcEZ7v8t3tweLGm3KbRYvDPUnhzs5n4jrvVw1i3VouL6XiSkkjX9jBy5g5V1Ng",
  "key23": "3biMvS7Tmnkx5EhMM3vu48zFCzfYjsWYchZj11J1bytqpou6ZLqXoPLUSNbHyXqUd51m6HSmPQGvMaFjShrrY1ju",
  "key24": "23VeME61Aen2QoRA11gCPVhpSaSurx2RNf7cWYSAR3i6J7KqAVwsdcZWYCSPdQVCgAq2z46SXEmYoossSJffdjhX",
  "key25": "4fhpLYVd4xx4cSuxhBEHxkHkAxjrUTec2uGC441jmDZsoxE1GWSX12uXAapaH2u85EYPRJmNgyBzvZAYrQnrwveB",
  "key26": "2QFz6cJBX9ihPZWcjUfZZE4BzPXvzNZawpzkyeDjgAJQR9mwnvL5JPjb7LwCix2UkFtzEVkMSUDDYMU5KC5goMdG",
  "key27": "4piH1NrKehyiPH2qjcC8QKQac46qAKRSJnG1W6LoEF6m9wbjv6AMrkJyLUWHwKopDZJ7HmbLZzYKcD2YYVMiWMZX",
  "key28": "4uHFKpCFrbgQhQzmx9sE44rR7G91UB1K8J2377yDKzXZYgtiPtfcFx812BVdvvSnrX4Y5Jo343hFqsQmxwQBgMp3",
  "key29": "53tr946jnaCAm72XsFpDSzk6yDT6nfEcCW2pKM36RHi7HzPU61vyW6mZbhNzKLjWHUUmVFPE6idJgcSF1gpm4RyP"
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
