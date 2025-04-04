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
    "2bmtVbENpMPCj5QC2LYJV1iDoUSRw35z69tLs7JPs6hoLr1PCD33JJA7qSW2Q1vgNqmMitJfyPt7VGWBTpnzJku3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZV1UhKuKB6vX934PMP9H37vMvVidHP1uSewL9bDNboCpYJVxfrZXQrCPVMqqQXy3nrjMg21jgsATUjx9LUW6Q2n",
  "key1": "8DD1i4FPNgv4NdxiB5UsCVHdgQ7dfS67BLsRmmJL68uLHRiE4vbab9MAFPMRy9PTpqXjHFq67kSb2mnReATWgZA",
  "key2": "2EdbA8yS8eKXNkob8GFHqYtUUxpLe2XsaDeA8rNjRRjh1vtrhkK4Y8NUKfndY18foqsHg64jT3YwrUBzdFqimj84",
  "key3": "48Mu4J2WqYRBJJmX4X1feTAPviMaBVb8bJ9id69dHg2nwrwzaTeCcD3jDbQP9dANHqgZ7P9r7Lux7mruxyZFLWKv",
  "key4": "4DxeXkTqXdDNw4LM4DNBYVTrtt6mf6T3bX47PYv8g3AndK7aLwAk2R1hfWuKxjvjEEkxihDkGHmcAADs3a49xPhk",
  "key5": "37jtc9n2cuCd9NPVerKW2zRNJYhWjt7Zcp5Wu4j6BgCvD4s4S9XsdVCoJZoSJegxYzwndWcQ8k9Qum6nPjuz11N4",
  "key6": "4JuxpnaM84hjWc7s211sAwenoadxSj91KmbyLXkE7TreAiCamPsBrH3hw8v3UdsLJZ6LLupiThmbxQR4MHhJjbTC",
  "key7": "4KP1AfcpsSpPa5WEcejfqF2uX3e15qQ4L4Pvrdp6qhhAbAowejeUDUfg18bBra2a6ogj5URxKaWZbDLB2bZE5QHs",
  "key8": "5UQ7pU364kqK9mUGBg2ABh4HWv1ZyhDqjgs1vuSV3mk6ZZpCBGs6gqL7cd52MGYtvd9ChqWL5uTgW5MG8LCBK419",
  "key9": "rKCNA3BtCKTgJKemmZLm6oMmM5R1G7gN3tVAxqP728QpEvudrzT8xg1Mwqaiyw4WAoZirmNo4A2HMYD3CWuUMtD",
  "key10": "Jt5wgAkBDXQD7tbeZ4GrA9ZshShZJJzpoFcXpxa17mhPH3qNmSvEb68K15MUPmTipUfcimzLEj9HQkabssi4Wsb",
  "key11": "4EFqBnigeVUXSgYxcSwMYmeUGmUGmbS9j5mYkELHvZAnEU77e5fsbx6geBRcj2vZjYDcfmWPkbsNQptYukBaRreN",
  "key12": "4fHKxC7HsfFN9zEzLdhCMeYAWqx5kAvdi7ELHLbJtKdakKfrQ1yUWhktYyCebxV67s8T8woQvtrmfCkorBVmwGpS",
  "key13": "3brKYAkQQmoanscTkD1aRqvPafkfuwkDdiQoqCzwD5FaTPMFRNsoJaYzzecbHKoVRgqr2BCrmfj9bXZEAMeDJ8uV",
  "key14": "5gGe2T9pRvS5J1LQyjosi2ujAxzzVf26QgTtnFLeqP1gQRznVUASzf9s3WF5jinBsbcTKEtt6ZLCA9qEeuhBLQ2X",
  "key15": "2H1AgUXmaMHdTAPvsT13DML12aNNTcEuxKVHthWzJF8bw4pYgcBGPHqLPAFm6KaPJXfrkFFALjEvw6dtRfXEx4R5",
  "key16": "yzipHL8c2WDsjWC5o8LpAEJGjWEL1m4SxTzFq5iQC2N8JQggpHL8KRQRkKupxJSic2pxu7vxELaZzUQssXkEf11",
  "key17": "4QfukqF912PoXMyFBSsEwasDjfNkLoA5fpeGJ116KiRuvjo9yPouNxjAScM3tjmNF6SLyJE2JoGrt8HGxL3LtCfw",
  "key18": "3pGQTeGVmT9mW5gYCyRnk3fHdixymYrEo84SWrfRQJTxFqMsgZj9ApFhtvwGP1Q1tYrBNrw3HqZMAskNmQaWmRQh",
  "key19": "4xnXR97PbKqANsuSHAC9f2NdrJBqAijXBLX63Pbj7BvPM4gEFEH2QiFkf8P3oMJWWp6EBZoUDfabY2yVkR2bc5k2",
  "key20": "4p3ZsJSV7HrnH1kpVu7fGv6fbUeBL2r6gGNP1H2RGoFhbSDKdhSD3vQd6YubRHSCspyfsTE4JTwGGknKtHnFpqvq",
  "key21": "3WG2US7NxEhEUH1nzMtQUuC4bZaFntvNEEgpiXyxDEAdyd3n635vAwK4e4Qxo2o18yFX87Cx2KNmkLhB9QJ9fv4y",
  "key22": "5voYLXKe9ZsB7vLvxdNrnytMYV7xF6sQ4rsZJKiq4i2XxevAHVnfnx3V8FfZoTEVzLjNeM4v6PEdzmAMhqZ6XBPN",
  "key23": "4aTASSJ4GQra8BTmndMJZDbt2RhunCezYhyQjnPKaKWgFWeWbqMzUFLK6tszYwjuzrEJkoGZGyDqE7x1S9dUkjC3",
  "key24": "3bRDVmRA95aCA1ScL3N41ew6jiwKwK3tEn3mDqPuMa4GUPiX1iwiY9h6UozgVwQtS27wYohRLV1UZi5eTUWkcDGg",
  "key25": "2qKMpg6niirMtRP46EMELy4741R3co5JBYsAyGSWXiUdXP4q3damBRcgNu38f66PgriauQD51Lg4fminfHxrEGB1",
  "key26": "3X2ZJDpMidtJw335xBsViAnGvVcSLMCpzUGnPxZWKhjP8w6bT1gsne19LdcACH5k7UweBYp4L2bcM8DkRowZTWix",
  "key27": "3nYGNZRM2bdxAqoXXa6w5fw9xcuYZq3LRUVknzAgV6GNUKvR4tVusM9t1fffMYcXfRtTkRjWCmmWrr7tEB8JMvYk",
  "key28": "4wuc5PriPpeuGAfeBy4koMQuPfHDgUuw8b57RpTXNvweiPZyKfjJ31tQgnDPVxvCgUYP1oFCezRWUVzudzGbpY7p",
  "key29": "5J9b4tXD1DRSSE3HznEbCGe3ZPkUg8FAXHCD68gwsES5nefCnPEeDsfjBJNCTHN1JqcpjBfMdnQEVsvG4wuYpn1x"
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
