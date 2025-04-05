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
    "48XR2h3quinwnLPY7dALYGuoYw9NQKa58HwRKa9NnT8LbVaHeAgLU2JoYMNa8tAwdyEKy5DDH2M1gRKr3MrPhwAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WTB8842uKbpr9qGu5DyocpjH5q4AMtqieSJ1T2KUX7JvUvTVFM835WdKYtDSywqiXSAnZa46HqiBtT2N7EtXQof",
  "key1": "4t3rAvaE7gZt2xoXVB2kFtMENCdpP8zySV4JiHZXhH3838qDMRFWZUFiQwEsrioVdTjU2fjbdwW1ujxNdKW9YUrf",
  "key2": "u3mpwJfXmSxZdjUU1je8vmFHYDXa1TcoZXcJRfd8PTEY4k6fTDTcPQAR5Ssc998PNRfy3N5YZA6du9YFGbNQHDr",
  "key3": "4VxTFfuCvxKT6aZubKXRfevP1XDPgSovtgDWbcmy7nWGMonbvn3g9xyoTaW1kfW57F5UFiBXqEDoJxmG3kuuS39D",
  "key4": "2fA18DUE4Vm64b2iKCWfTkovxPhwzFJCJCzZ4cJzyyLpG2EBkiNgGHJXVq5K2Z7HstmzLFxQ2ofFVf4uyA4mtKes",
  "key5": "5G25LCBcPMx3wnwLjSs48KmxzrvUq2AkGiETMo4pJREDCM1bFCPqWpmp8ygsRKFnui8hdupif9ESHdy1hRq77ZQg",
  "key6": "1251n5ZRtYQn8T292abG45YLaVXFWw3ba3so13wDcemCphddH4MqE97bXCAtgh8ZcnjTBySTnfvSevaYXpTUamtq",
  "key7": "5GxBqrK1gzAf9kPA1g78HsULzrSX4HLTGm3bL9na55Yr5moNamkg9WPoJyJWneYHy83iMjBgpDK9WagkXPYh7WRJ",
  "key8": "d6TukGFuj1hCoxDdEek7QyS4FVpZbmDqDjR5RfYZhbDBwzRnGv7hYAatYWvG49czMZbQ2fh3mexv9C7eWEEBdbJ",
  "key9": "4qannT6i2yUsx8X5Rf3i6CnpRwVGWSe6PGSnPXsjRVKGRNyLtwqzkCqd8SWA5ftQrDytQhQ8LiLzuFh5nJv7ALb6",
  "key10": "5F7rkJVtwkNQQWsDxzYij2Y8VyFdE9kQXL15Uuk1JGaioPN2et83Yree5ezh2C9rQs85huFRRSRpHNh7KSkiryfY",
  "key11": "4daWevfNW6uLKscgCEFjQ6PnxC8gz6DjHkynQbpSEvMPMPjj6hSTMLUdFfngXhLQyfR9Z1zaF4vASiB9fRpfHk48",
  "key12": "QaSfv1EGv1fwzP9DMAdr6DZ7WdfHVkYbQGRmerckhZ29WYDiuggRBe6BGdPjS6sQs28QBuD6nPm8HZXDd9pvcHh",
  "key13": "5uvyR886mE3FSJWtmQdsxcrgo96vdKDNdFgoU6f75he3qddQg668B1YMoLHgp2q2WvFQ81yoLN1du7qRjQCLDsHF",
  "key14": "TGF69CcLM3NKpJ3eJHq2osnfGJzg1sDuFgk5D3MVkLS2LNGX8dBhYFHeiPLcwSoPMHKnMXRFwy9wzn1tvFPafuG",
  "key15": "338t7VLWQ1cigAQpQQNE6rp3JF3iDCjgZFkHaqnLwH7NUqxvMkW6fyxoGWqwJTfy2GZoi6LXCK7WZH4ebF252ngw",
  "key16": "32XeRdS1kAAG2uDNH41APEPCTzzgXeGaz6MFPxnQaF5Gp8CSLr6sgYTLA46Rai2uKxcUktNZ2Fmjco6YSwGRXC6z",
  "key17": "2TzuceeN45C8bCSbH9P7avVi6x6MPAhL9HoSU8KBpAxr1L43GwYBgeDbZCWhRXX1vYAWbUedH3CMgJ8g4QSYMch2",
  "key18": "39RFrQXywPnL4kvwo3F4XV4NeTUUaCbTdvkLsAVE4nC4UYcZNcsjHypcgNi16RbZEZgMzQjXzcQxV4oVTawUYHwz",
  "key19": "2XfuCyaq821poGxxvCinhigWn4iQAJfAcjnKJycqYJkijuJf8W7FGgEMZZL6qm2GiG85GQhKaFWua2s8ye5DwYnn",
  "key20": "53e5fnWFEkpCazc728vJgxKp76SeiDMe664Y4tAFiDZ1an5MxFJdKf4cJoqg2qzAUyzetbi2SfVpnjGxvXmDKib8",
  "key21": "21By3nECscaX5DLWGwCtkwnb5snhLn2o7NpEWqmG3nehdh1mmszsT3WuKazdLD1PrNGYXnX4doS95dFz2ETRCBGr",
  "key22": "1Q5BP28YWsTpTquNRikcBjPYyyFRwRggPTSDC2ASbjiJgqPShYDFgJABiPSA2GTz4QNxW9BaBTgku5A3TehcpDt",
  "key23": "5K6zQa2s9fAurFJbEq3SpGsJkqAy9pc7kAEynCUMTr6vEuvCsw8JpHo9XLBMmaf14jXMiSRZBMRMqRDWw7jfX13h",
  "key24": "4Ffu8kcsHYQsQ5x1JarrJ493gGs881wsGQWkgs8SVjG6HRniNVFPSuLuBURTrsJifMXmzqDrVBAVBKt3qsriouyZ",
  "key25": "47qCRC34G75USSEKSSd6jaAwP8w2qCRGaYEEcyB25G3XBwVazmSrAcaQkUnZQXbTFHfK8uhhAWJrx6EAX8V6N8aZ",
  "key26": "2f6LgsYxHv3ibgkgP7bfqzsX7g61VzTHwM4KJ9yRugvZGcUDMVXTofpC5VtbA75izQFcdoDP8orQtepfRVLMjAxp",
  "key27": "21fJ5p3jwCnKYJ2cmmxVAAGyXohyMU9a1U4xZ4svp5Rjborg2gRHWFGHkneLycYnMfFRbCkndZ9qKDdZUujPnpXk",
  "key28": "5PBv7btdwAa8BAa3TEpbASNQAMuJTUiCTHDEjdbmfEpWNrn9WEVb7veHAc8SKb6vhUKy6zXfDNBB9MKdnVwLhjNS",
  "key29": "2KTh5miFWNGHkENinzCgjT8bH9S8gfuZLgYbscm2F8VrtHCmRU3obT8MGESjvMG1U4jH78kqPdXKyefxMnL39iyi",
  "key30": "3CxpdT525xY4WdenhUabhjowxYBfKmcV9xFo9LpZgie8LrX8CsypuMtwhoZ3TBNKYHWv3HnRvo5NPawVwGRbP6L5",
  "key31": "4UD1aGwL9xJBtAA9i1GGiivaHsFD5jLc24NAJ52Ugy1QNhojkkvUtqcA15UjMkb1FoYgtjXacnZnjUwd7Akfh76S",
  "key32": "2N87gafD3YaDuj38bGnhUdqbeLuX9DqhMpebbBjZC5GgKBw4dPomjzywURcUqNuxrEET4C28egATTTm7Y7kzEzQ1",
  "key33": "5aWjibkjTAfASJ3tUuykTsSAoqVb32ViLSxFLZVwBx5hvApZHJVrxMJAhk1q55yy33L5KYRgZWc2awH6W61Rhxbd",
  "key34": "5zszRfYvT7sjo7PAizP5CXuJA9gmESA8QnXk721k9QUkRGURJAcknUCY9fgyDXxjBX9FHmcsy6uej84F3ZEzCbi2"
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
