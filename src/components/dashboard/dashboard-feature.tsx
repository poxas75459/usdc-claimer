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
    "aXv8tL2QGkh3zUYBd8K6rkRJGJ4hr518qARhKMCwdyqYmM1VkaMU5PRucqUzpC7xuGyrJyyM9phCKfkJ3oz1Joh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TynDdYpLC5rtuGmSE8fYGYizNH2b8cfXP5Kx7NdzSA8PskkeJQuscQYnT9Mf1owzQwxioBu66YipKDPoiak3Mbp",
  "key1": "msC571xEhpdtSjbhT2JpKQHKhWaCsg6zHUaB1ewq7tHphA79NqQSo1rm1kyK5rbBiEmrqJZZaNXrZNJhjT6jFcR",
  "key2": "UMsUA22kJnqAEGjfhaFP95v4Eir838S7vRSXjf78AZKE6RDzvYLGjEQP73dtjQhD5sagMNoWvNeecxKAF7euQhQ",
  "key3": "Fxqn2md9adnCodrTKXvBJDasi1F3i2RMGZwY2sVFYABHsdSP3Nkzi3NmqvqNUJJcabt3rvc5jcbiX4uV7PQEnhR",
  "key4": "3L9JpjStiYQfk5GF7x4fGbyFYSwGmpVjAHStT2mRpY16nZWwBqekauX4HUSBANfkZCzTSMdn28e4RY2rz9RuhGtt",
  "key5": "2rLkLzpx4msW3Pme7qwQBt3wUBguRSNBx1q6h86PrEaER22WugHynx8fS2wRjRjbusWNeEXLcnG67yVRCS4hTsnr",
  "key6": "3dFmEhfiwpDzwRRPZchdV3EsuRxytfsWj7YHdBZ1B9rQFPHaK3ts3tSLQLN3ksCCKGmWgihec7vtRQ2a38NXZxzV",
  "key7": "5yZH8LkwGFknkNqJK3VarXkbh3qTKvr3xC54463zLHxHt3Nrc7ztjiizy8muyDzZNHjwcFrs56VZkw9oyqhaMRKJ",
  "key8": "51Cagh99DxZUX7qNVqGcGDAzMghJEJY9sFZoY1mDztPyu2eXjH1iAZLBjireD1TS1cXmcZheXk9bTxgZJS4ofZjx",
  "key9": "5jfwD3FWiWZNaKTDQcdpVw7naMP8wQEkQ4SFiArH8N4uVpKPV4P1GWozT9ujaJco93ZbGE3B9ckCmQRRYoSeZ896",
  "key10": "nCgwR7R2SvBpHaocFfa1vUoBfoCfWSiHL9WKrf1S1DDiQS5GR6LVs6CGZbNKqjdxBjMPXdkEVY8xtHjspYfYj5R",
  "key11": "2YymnjuFvTrm1povpUKkJQ5Tt6DrCbQCorLh4HxBWYwL1b95q5TEhhv6uuVN9jEHf2ixe54LWiY1T6EVmSHhmKXz",
  "key12": "uFy4QHc8BZEaY6G96mmucZkgKA51ZW5PKVRjqq3oJ17qw3xpEt9t7rT8Z5riEPG766g8CyVNUNmtHo3wUue6utc",
  "key13": "5nTcBi4KBxW9RmFkQhmb4Sg4hsSDua9rnJTq5gfTSN1o5NfUv7c1hsrdLPmWadxyTEh61r6hbTrTzRQwqT6whDqX",
  "key14": "krZjwjmpFyNXX39YJ6q5XZM1cs7uFkPcA342njGf8tuQrbWXmzuRnS5aUADqnFVMjordfK7jMnrn8cv4tcZRFCU",
  "key15": "2rwBEcAG3FKnDksZ3JhszjZG21kaKZ2hbYhw16GNQvKqbftBMBkNbraav3eyjBJG5L2zB4pYwCxQRhA4ZxavQm34",
  "key16": "2UXXnnr3KSAzZhdGGojqfx2M5TLXjtYaHfdDTyWTeM7vQszPMM8xhsNeNwJvcuuFjNeTRi6xE7UErkXfwrMQkS4Z",
  "key17": "3TsPS9EMTXp89FAAirnSAs6BA4PbLvHJcsa5USJiWCQ5Su7RBYfX5ATJvg2726dBDyR4Ja1egyUgd3bozNPo3rD",
  "key18": "24ihXpMF1dZS5B24dmZ2eQFPeWC3qvLgcZZAfZ7AW1bJhGzdNaDf9LubAM97buZUZgPcVQ6B1FCefxkVW8abP42S",
  "key19": "4CjREGBUAkhqyzpRr5aQcUGn1Ac4gPqM65UHPKncufxFkKLQaY3b6qKAVGmYF4fbwcjo5wJub3KSKhUZ2AJC9tgY",
  "key20": "bsWefFQw7sJydTxFVE4qLd4XmvDPESWTUVkeXjavMNsMuExFcAZCjXGt7AFkyzDULNC1g8q9w4cvDUERREoBUhQ",
  "key21": "35EuaBQbwVU4wp8WXFQcZsJJcLjvQQ4oqZbThhaZP4cq1zTDuB4eogbQ7VB6LJ8AuTv6fQ9Uh2Axmey6yDupy7uV",
  "key22": "4F6vLXk8Qbk857K53v7zkf8XPEXD4myvrwRNxKicDxoSm9madNhkiYk6weKpHc5Q6FBzZqbX2YmkFk4KMoWAh69k",
  "key23": "mVfni8sc6SQWn4BiDUwuyCPp6vdPYEXk49KkExnDCJnghbNgoPwVvLyi6epnrVyAoH832Eet16zFHVWo4QZtu23",
  "key24": "5moL3qgSunjQaEcazAgpQCbs9LjzmNAJ789a71bNP6VxgrniEuinjmpntMzJcK8PFNWcf6dz6uatdEKPPN7G5Lgo",
  "key25": "4C5VVa9MYWsKcAmXLKf8oYjczuxnTbLKbyKF48NiDQGt7rJBXi6VjPcVsniSXwkUVPfc11AWukubfbu9kyw5huBW",
  "key26": "5D7CoApB833J17oSmbN95r18WH5fAeaKnUcAjgmsze7gC3TPeLHeA4MFwjropGnxQkLfRvk8NET9mwnv4vuQR8q9",
  "key27": "2cMjGVZgXFfM1E5EEEETTXoteWH7qqdRB8qXimTHocgcY3T8vwF5ieSjuHuMUKEEFyCmj25Kjuu1esHiyAtmsiYQ",
  "key28": "57F7dVTvHPVkzGoBW55789NU1ErNga9vwgfX792XJMoR2CUfR5rfygo4wCtzbRfnixy4rLfmYEELuHbkrUyUqdSu",
  "key29": "CKU3VecSKxNyraJjdz7WEQs5aMd5qSPvhLYZfek24Sxb7WwPbx3PW1vUzEZWPmEJd6vvcuUdShKCJChLRBt1z3Y",
  "key30": "6464dhrv1EysRHq67HKVhW8Eh5gHewJvojsxQW7KMoRnc1U5QrTwCgn6eDRpSjfiLQeByMqsrpY2eppHZ4pWVkB1",
  "key31": "3xyLpDLTDpjspvFFj5ZTjEmgzgPDqkR3k6PSXiVdxpwaDshWxEhxSQJstw75zcuVzTCmKJAUAYHFSTwtPNvUVq4d",
  "key32": "652uSq3Q2yJxqu59hNVZoZDzB3nR4jrvxoq6VYgQmTfiazJ1GyCZtvBPncsycP6vsFMCv4X3Bsd3WiTqU4CX2ETP",
  "key33": "4NhP76Dh6bD6HDqh775sWTF5yXVuxEek4M7E9DwniBeR6iayprKv7YJtM3E23nL1f2CkyHbY3uuXTRZzwZWcjBZk",
  "key34": "47ZrQJVsC1V1zCUoCwdzAhQxc7dtPtPPnFZTvsoAJCyF17NhSiZ71RCgmXRtLp6yJzY8Cu6s6JyLEqUHBxrykWsg"
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
