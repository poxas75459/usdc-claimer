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
    "QGruE67WYR9F5hgdb4C7VWh81HBa5R1kH4ZBmERn9RnZ68GA62mhQTkhieBXyvHGCvsqD1zk5n2socJiwyzLaz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48nUrkn7xpz9c8KrTMAWqk8EZQCsMrJvQtVauU1RjpWRkBHtN7HDdZFzGyGDWyx8i8GBK7d2HHNC68zVxLcp4Q7s",
  "key1": "4oQdW8qhdEdAMetrh3hMRs5cyPEt3B8peWpuxSjrNozWEcrzVK38fmsDV2rKeHVNawhXi678AUth9zmzqu1hXpg8",
  "key2": "3NoUVfBtyujiY67E5qksEtQX2LUR4UgV7a3jPpDodcvBGtwHg2sXoeAyNNYYV7gKeRLGxwVyFtsVyS2s7n7oPxub",
  "key3": "39xpLzAAhkFewDKDt6rusZi3vqzjxoSxg5B3CUjxHtao9RkNpfhz9VyqqLVp9g2VtUJWrHsjxZ4icg3AMooEoc36",
  "key4": "4MScBQnnwuZdYt3MedyQakF6mTYJ1BLEshVgUqQKu4o2yNPDjd3qrDVPPgCN4sP4oHUSP6558PEZTC8zQ9pPWcK7",
  "key5": "33Bq7ABynKZcUNkxRDyZeShT5E5wCtBLWF8qRDorNosy41kW5DVGppQbDpA1iZhycuh4nDUPV4YCUK3BSCMQ1WSp",
  "key6": "AgsFKduQxBJnzJB4zhJfZf2oVaQhApo9QuwU6SkqGm68FwgoPb9BRUhedNiAHWaBEhA4H5QTp6LZwnZtuhtNNqn",
  "key7": "5ipewaAmwWQbBSpffoqHQbFekoQ9L13Rt3Za6cnXhRGtpukrNxX1ab6RdoV5wfjvP7XdCLnxG734NVYRAXZW6GgW",
  "key8": "2TpPbCvU5uknukm4UbYJUgN8Tu4BEg9cBwuGWBW3bDAbdAor99bG6pQfTmbZw1fmztRxAT9LQd6an66pQXgCV5FH",
  "key9": "Q2RQCrPmXhynVDD1tRfz36QvzS8x3A7QDxi7y7TQfX7q2hCwur5DRMw6TRRPigYyjCyEr8hZy6HAahM6vujW8VW",
  "key10": "4j4jTRRMwQbbv5iBFbVKKSKSqnM9iTviy132zMTP6UGbG6qYVvYaz6Jioqso6BUQ5x26TRDZ9bsbEdCeSBmGcaQN",
  "key11": "4XeNwkSvt2tnqHNKEYJS52ikixxCLgeUsbpzPH52VS7pUXbHNzRaEJwC75CbJW2b5m7itE7XucvBdtbTNwfJfUGJ",
  "key12": "5eUmQvBfVkQQSVZgdcL64iN8KeR3hNZeMUNPSuST1PXvho2QesyibRNt21N68jLqMr3tP9x752gkyzSB6RTqhvja",
  "key13": "5x3pfA66unRF4oK7XcSLz6sktKhTHicDW4hEgryN97YBb4ZuHDzY3HWFxitpq8xjkeWErzutfHLSwakG8mUzF1f9",
  "key14": "3aNKF8ezvjCkbhTF6eWc87rbKyMzwfXfcg2cVyJZMqr5mrKa4PGnAUM4vjfqotzuBhrSVNF8R1jFhrC3PNbBjhwN",
  "key15": "yWHF765kpHxSdjxfHVekAUgpLqoRXM6xiEfTsWBP9KfTETKuUACH9VRHTXZnmQpaiAPo4AKuGgDNGBfrd6DqyCb",
  "key16": "2G9rRAJL6QgVncjPekVMquh8N9VBX871H8Kpr1C3C13Xx9AeYuMx9ionGoaRmQQxkbE9x11ieWjRfzUesARAeGkp",
  "key17": "5mTLmgCRdixRRpy9dDb8bb9dMMh8sTqmrvGdctTGGTWmCHNmGFfYbsfwnR2NDWnnBvhkhL4WYwYAZj95UCbihaaX",
  "key18": "4NRAEhdbfSF7TPHXYMj4iDkaAJfNJQRXJYbQcJBw5ksNcKP9zDGnn22D7JbV8DcaLWC6XgCi83toSb4aVaDUfxBi",
  "key19": "4BYaYgcs7vNrqMVRk4ufAqV9dxTkfP1k81dTjy2n4oeXPRSDyjtos7a7ibNUATUroKGQ1ZdgWHF9nNaYC6cJmMck",
  "key20": "4PdrcwvzFf3JKaHG6MqtybZarEfhsEwHEctL3k1ZFBdNJtGNJFbaEzgFttA2Qundgm2gvd1mATbbKK1GULoFrVWY",
  "key21": "29RJK2ejQ21yYxKZ5LyzL1Y2uoKMFjFPdExhkXFQsPMykEad4BYQtoRgATkiM47kHsqvhirsJQi4168oYiWiqyMw",
  "key22": "3wAdLLEEk8H58oSH34gFJbXYWWmbnCZae76kbmbnvN5uHkYxHZJwwhc3xSXn7fBAbhn8knhbHkv9nxzjZ7yJvc27",
  "key23": "DJuwzjgxYUqsJqR3r2kL9BLbsG1Gpn54msp5AjB49sEx5LooCfxsNK9MCbzxofWqubbLBaehMVFvBfQwoWFj9Ym",
  "key24": "4EeHnw1uZR83ViUiHyjjQJZyfVMA4A1ZqZsJhXzuHSm42xD2p6hwrp8XVXMkP1CnX4xbZziDoA7mQ4foZmh75w3Y",
  "key25": "5Vje6LyLehNQGeK27UXTYKWdUAYNJpJkCdPLkrTmKmJNYeh4pRDMBrmfX8mnCwruAc1z4oKA3GcHiteVQjDd2Gzf",
  "key26": "4PPaJwwk5gZB4QCvk9X6RuWjsRdwGxgkneg7m84W6sfk1pyCF2r7Ktu2dQ9y1ionU8ZDpGsxrxrDvXPg15YTxmPK",
  "key27": "2EDFhyaE8udaXj1HkRRDU7YLyZfDoyAjVUmU6FCFuhxte1YuYzzafkYKLW1RshMYVqoyvCr3a4uFgTvpVkAGaagz"
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
