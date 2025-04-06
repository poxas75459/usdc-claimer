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
    "xMrfeLSaeSdpyKQMgTcXC79e3pgBiKtCKgW9H9ZShLH7CvYqK5RUwRXQkaFPHkd9jaTas5y8xsWFVnyH5cYYjCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EfAB7sYYDSqCEg5bfjQtt7f7JnTDtM1EVs91SLY1b3bGokKafQorduptnJuk4YHRxH8Cpmnfh3Qy8JqNcDYcjaJ",
  "key1": "46SmT2YR7cen76uUrUcUQ3oqh3FMC4d5Z8hgxVkJapTuAeVMKZG2UFQCfk7bGGMxSK8ae7zG8sdJjk7p5CVkGR1v",
  "key2": "ECmp2F9moBy3seP6E6j5rSUBq33VfFiy4dCL8CYuW4o5zwYFtxkVYw66ayiy375rERAC3thawv1EiWsZw7PHkd9",
  "key3": "bmLxRu8oFjNvj2sDBfeqgmYEX4uNaeyv19Qq4PD8MyQuCYogqL6Lu1YNQJthSmwLsYJpLAWNJMgvnYHyZ6v9NyJ",
  "key4": "5bnDbWWjFEt1YNTVhj3Tp64WTkge5wF8GjvzxdsWKLx93XFuUastmGwoJBEoUmPogg3K8s69h9KQRquoBwrYmftB",
  "key5": "4uCugaVKXgYYwN2aQ34ZWEJAZaJWSakKGiWF5BWRg4cQdoYHZo3r6BUp2foqpdsG9VNtC7RaJGcDMTh7he5KX5gh",
  "key6": "2h9HDnU2onRnCRYmQt499FphjJgFSsM8nkwVeKZ7bMmUgxBXVXr3GpfuJ2cfTPzx6ED4WoUkoF3h8J9R9mETsFbs",
  "key7": "5bSsHA17QvZ9NE2c8n5fTjNiz2X2uYUC7V5umRm7EresvUKZKpXwG2NCYLCMHYEYjfJmeUimruQEwigskjzbiTfd",
  "key8": "5KUuqpRC7U91HZ11uK9aSVUk5Ap1UeqoB2CWc6AAdRQN7HVi4dyFkPZvq1GVpRQVN7TW9aYsuh63YVULZHVxvhJL",
  "key9": "3kugHwjYk7X2qFpxJxVQsiDmxMcXNwhMQHLGNMkea3ApAcfZWoktKKfkTCratw7Xb2qwFwQeRbWU1dzQ5Zku5FWD",
  "key10": "5C2W3KBEsHbh1sEMkhMB8QmaLGDrwPcjbAEE2bAg5VpS7TJo9r9BYUM9BW42AEKZ5oti2rTtDU7h3p5HU2KQDqFh",
  "key11": "3wXpqRRNp2Bqj8ZAN7H9KUbT3vbbXEXd8vzL4GRy2qupmqVyp4LCuvyBPN8fxdhvTRzcaEMYkofyedgds6apPXqD",
  "key12": "4Sc6Q2BTmpMAM3nZrQ9kakqgTqRMQ9jh1GHW8gPbSpRuTZm77icAwwp8RCtqddbbjbgBXrfxzMAES2arvVsCZQi8",
  "key13": "61GfZNaKs7r2kxjNUcYF5Jwni7ez79jjbNU9kb4vjEVKnm48uZJHX2UDKYCaLaTpKT8XenR5L8xJdH4JGZMkHtY5",
  "key14": "S9Vk2Uktf2ghMw7K6EWjfT1PoxeAHERvpzNGWMJfAacNwJviQ74GkACEwUqVYwtncZzVAxVSULFkNZTAnYNNFHD",
  "key15": "3kwjpGa3vMvZRuTusQUNq4ocffQ4iAQej8abKMur4huhTxfwA5Fgf3vSzimvPsYSp7oDD8xmZhjaBW5TrcHnojXX",
  "key16": "Jkex9MF9K24oa1oXubtiWZsDhRvBSmTm7JxAUXW5tgbLTZux3H2CJVUbsNviPQVKrV17LEJ8FvwvxyntknSiTzw",
  "key17": "2Y2AnJiFJbyapph1z6Zo7yxNYhBLFt2dVVHV5Yxk3xLnZ9RdhnjSGREQdCuL3iomacMDkPtto2UTeRjW5upiQKTc",
  "key18": "2zi3sNznPmF6twEJ5uMUFweTwyPq1AXecMmx1LNH4BQU7xpRTJgVgBMWkKAYECmCn3YsPToHERFoge2xb7z5BwAm",
  "key19": "4zKp4fUnCEfExvRASDASHmz3ceSo16QrAUW6byU6BXPqc7JCLs3ByqquJ1WsgDDEtv9gVuaUGA8yPDYgST9zU5cK",
  "key20": "65XNPBUwJE1yPav89cAp85YPgQHes7SipEqCxx4CL7A3H2dyqPsrNNqfNUfGpJ2roZQnrjx8TdiFVa7oYFgaco2C",
  "key21": "5i6UQfXNb26JjxiG8t4zx8YeoovC4A4pNEZ5pAMSktaRRkqZVsZWrKcfwFSWmaVZ9FX1W1jJJfA2asYv74jzTUwu",
  "key22": "5swuEJGScTGS9oX6RftZmDW9ub51SwQJa3UQT2GiSdbc3UB8tojH4MiADaJyNzDY6MzSEmyzDhNkrFTUF2huptig",
  "key23": "5x6TJGNQZjV13jdD1MjXwQSa7W4QQUn1yVsuW9kJrUKHbk99YWU4BG22seVWbxzXLpgpZRjYZs8npRBVrHVT5Tvb",
  "key24": "S9CmFg5fRtKVm5cs8UpYqj7YxS2XWHhrNsnjvEyZVumcRbScviXFnJkA1NiETTAeAWqUqQTCTHyCN9eCp5Nho5a"
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
