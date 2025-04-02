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
    "5dHxdf6izQLtax91Tt7EVge2U4pkBfEX9mrABMxjE7rAF7aeRhUJGa8sY11EEhzHG7TZt4bLwCHkcrzeQ59UpM7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RGy3e7VqWmgXBs8RaLfVvvnv4yKgoeYjvfNWf1TXwVBqgdER2kYU6yiz9sprRMjpSrhP6BvZyrUx8zSCdVcKM29",
  "key1": "xqozGhUDkYKsTF9tnYMqBjoo6x4kGs1xvnNmJ3x8WpB7T36j8bNBEPLyYKb5AEE6D5BmLhhZepNKFJZVNmKG39Y",
  "key2": "1weSdkdGtYLywqzw5vFfQ1VyjumUUvw4zEaxWCRuzoKD21mqysRSNjM362ePQE9x7S6ri4Pr3YLPeyoXCHpX8Z5",
  "key3": "2caw9DWVvZJdxE2ZykKfLA3wffozHsDUugzGNGwV7MX3qMZkr2uGk9VTP1Vq5p789Gz7Ppp7sFb2GF1iCW6BR2G7",
  "key4": "4DMcDH4E9aL1D58tN9D2wwJTmXD76uZjE7HbZx9Yvf5zq5X65i5B3VhdycDfoQVtpyEE26w4iZRKsALHdCZhZdo3",
  "key5": "3FhDPQ3yGjUg27Kj44P3hmMJdYs61x86JkHq9FPJGL3WRiz5eb7gNcx8pEQeaj5eoLyDSm6QwHQpPPaywAUewFBp",
  "key6": "3if3evqQSamKSqpzoqWu9VHETUH7eEgUDUQZ1MiWhsgiCTwMQ1Hu2yZNFndLxwHvqURgSj3TLRE5UAq11jqaMgDv",
  "key7": "3hScKvwzvddY7aYhBA61RDnNXt68JU15QcBwCe6HaqcAHf8fbZMPT9GLyZepn3zvFdU732tWKPNLiBh8iuvTNHYA",
  "key8": "2ts9R7dv136qRcvbDBaPETWbjqg6VdjbS3VUQkCNnutyKK6YkmhqHbpx3s7gQfzKdYpg5v6oNFA9DzqiPFiZoWgn",
  "key9": "Y8h1H8kADV51mQ5AjmGsJUgM6x2qisDDdya24ssTAcweHYNpfXoujwUSTeLABKQV4sHogQ5aFNnkngNqvrZ5jz5",
  "key10": "3Aui3SSTZFibu35d3KQXLVvdxzZW2M31eTRDRX7Ud87CbJKpsT3vRw4gQgzZo2sxF4ZcH9f441nM1BUytSbypg93",
  "key11": "2YicKF2AwG6TcfbmwvzRfvdecTTDSctVmQ6hCXqp9hqFH1htbqUDNKACEL2P3MiJfNzXQyNpRKgQ6AHkFDkKReKF",
  "key12": "23jRaiyQHtbbDNP4C8Hguy69cXYto7adeMNaxwHSzmS1exnyVkRLk5rw8JmPYJ1ANnKT5qNwoSD3bvFyDx9ypTnX",
  "key13": "3tHbdbkJmoUv5fUyMAnrZ4GL14wdnjePVMLFTarty6hpBw3eApoYUZh1tdUfHBot6c6zZDC9jTwNj27rnaqGxELb",
  "key14": "1TGcA9AUX2D7PVkuHVVyBJGApCSv4bPWRrPQk6nbAqz7ZXz1YyvAPZ1XbEivAHR8DmNZxCywqBa8LEPpEXnLuEL",
  "key15": "4YBAgq8Y2TQdJMSiiZFohafdezPQLbMHx2a39CbBWo5q3DsphXL99krpN2nmLHPMcagcoHvkgLn3xd3aXRz4wCNU",
  "key16": "52guWcxFpG2AHXcuQeabxDensNuk1YVxQzPnESBFH5Gr3XueyVit5wAqAJW6WsA5sNcDvX5zn56zYcPa9oqB1bE4",
  "key17": "5vTER7kjhT37fBvSRCCXPWZwgpEmkz8LguFciXTxHDU2ERjUgxQY5Z6NHy1TGPjrMLoMEJsfFbCH6VG94bn3hDpr",
  "key18": "5ibHv4ByhgAKiZQKzgVvuxE9c3rWSYxM9SoGkY6Sr2qQZFu1suCo8B1vJo5oAkiqjr8L43iWJTpWVWPKyzTxPwj6",
  "key19": "Zr849WxEdUGmF3dHBn35V3emyYtkYtkLrrif7ehBEbKL1sbFtmmBqYKrWqTbzUnKWK7NPVihudTwNdk781rq58x",
  "key20": "4RLDpU7zHd2UVbSFbgrXaEYERTojkTEDN6eXjo2fxiTBN4tD7anjhwKriAq3AaLeinGD52pAVzFjkjwgf9M5cZA2",
  "key21": "5WP3dLztiNfRjoDyBLAhRX1J7SGSvaUVwzKkkbFhmqZtuwcq6p4N11CM7GqYoCbkfsRurG88VKCSaELsJ2h4WGrk",
  "key22": "2VpXFf45FyQo3QR3w7Kb1Rmpc7zcDxBWBQJk5Cijhso9BuVB5srDYAHSspxKKyVt1Bcbf1F8Ai5a3VpSfLRnyXmT",
  "key23": "4rfjgZRNsg6X1UYFahex9UPgmz3PXDQRTgqacrDJ6vkSdDKQZmFfnw1dSdXvR6VCVQ9592fbnY3CYejm2g9evFtv",
  "key24": "4UMAjKqNPraA6ohh5hHRwVs4Wp4nUGYK36hiRJDwRXvWS4Ru7STNn8fRoT2SN2tNePQqcurdg11aL85ft73TpLi9",
  "key25": "2SQMW6KrLiQrVSrFBdZgHMk8XxUxDuPEbsRb3nFnLuqYa9ZsxYh5wdhE5WJ9YDrQqxsAWv3UpA7fxfs65jEGRqNC",
  "key26": "2enq7JX1n44VnXsh1u1FgcYfUZffY4C6uYiyzbZJgDJ7RAKRM6LNk4bx5CtnszpuuSN4FPe3Lbkw4g3rM1MGut4t",
  "key27": "2jpzPL29VsDJ2Pa4aaKBvb1hpu2TmQngCsjpyT9dADs4XkqysZe64HyGk3BwHZXUmagYgxDAWcu4QW6b1BY9X9uz",
  "key28": "3NbULe9B2b21V5aWa6v6xM72B7qpX6RfDTdtTT1Qep8Z2q9VQAT8pcq5uwcUkm24w47k8yoBGc7XAbGvZs35gdwp"
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
