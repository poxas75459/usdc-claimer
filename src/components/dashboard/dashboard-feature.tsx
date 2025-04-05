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
    "5AbY8HMHHSc6779S5kjMTA7x5dswHeEGQj81Yg1rV5Wt6LQxDS8u2Bq8TAg19yBnhoGZ7sUvg6EqVj9rc4nhLjK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MWzt9XDNpYexJep5EfHxZRyKpZbdXdopY7AzEcSsagSCeQKLwnz7yLfh6LYPZPzy8cwaeX7k2e1xRjpu7qRMb9W",
  "key1": "3zzpojhG5AoYuvc7aPULynCFu8gVzA16HwALRaXYhCbM8M3Ctu4zEyHtM7Z4USzPeEBqDHNGAtjRaZyZGoacSZkV",
  "key2": "2Dj3dtc6c5L9E1RDCwwC2jJDoJeMNTmVfSko5vKcNL2SGgjJiypn5W7cvJZYNqTWenUFkK4nkZLQePnKvft1kA5o",
  "key3": "3Upvia5mUdMFgAe8pSmU8JCfbSGvDWAnK8LHehQdAyE72pjooA6neTb5tWmuTtYSTNpoY6Ewh7wFTFQyqybqWDQD",
  "key4": "2DgQr7JRcbAxaHAk2YR7iV59Zk7MZAEb9tfoyoaBjPvMoRmypdJsfSFBqUWP9TKTRNtbBdEDEuGmXp3DpPd7c3eh",
  "key5": "4tQMdjoZ4mpSo9qQwi7MgywxqY337yUtyRKJFyDKeeAM7ia5i2dK1snWqbA4eJWnhoa53crim7WhHxnrx73uG13h",
  "key6": "3UHwGQsyMwYb4oKEK6nNGZn3jYYYdgKmAJimCj6wy97Fifie5ujh6LTqSpEwPyN4hVZhhcZpX9F7RQveyWK7cU9M",
  "key7": "3ijrPjAcSeEdxWRXx5E5tZUaoNgfPQZeUzYgJBnJSnLehKSx4cjYFMTKiiyeEmHmFMW6jRQyruTZWXLF6hEoQJdC",
  "key8": "5Ne5n2SJievSAWGPk2QLqhq4TztqeLNDSBoH2cWG5pHtGPPD4vehNVKQaRAJogBMEr1h6cifdZ58ib2G2bpm6NRq",
  "key9": "3XcUZWkot2MY4gMuPGixa4dvvc5vUbgvGr8TuQ9qgvXwg1wY1NDRRzWjZRWYh4sK7k2HsTuz1dUujsb3smEhFB3s",
  "key10": "474zZNytRqRRY36NsPMvsi38nBRTb7NjiXvTnr3MPoWgmbn9Trqh2RCGuC2UPiik2HGdL1CacGdddoouopa2ShuY",
  "key11": "5eeWz9j9ZNQFE3NXH3dfZ7GJdR8Ap7WJz3obXfZXf4P5sAX2qTeMXVeA9uFy4JVVZ2S6nybhzTyscxeCSSn1agmM",
  "key12": "5xbJ7K6Va6FSRWuHz6FMHX8sDd7mYKCZsF1ywGgLHPG7KLZrhw7Qsp2LmDVMLjA5gmsXLia2wpHuRce35vuCHD6r",
  "key13": "3sGKtdd6EEqXC5qVpucrRahgVe9HTsU63ekKZQpq4W6tj6QX9825gvu2z9YomNMFFwhzZLAGJu1VoVtuATxwmY6H",
  "key14": "dcRzuqiCpanAPBpKhLDiiazYcXMvRoTM3qzNhLFEZLzZ3ZGwByj5qb7bhTJfSk3HvmxT5HmzRtvGbE7XysCWBet",
  "key15": "4LAwbob3jM7YSQVpP8WxeyDtfoAgonwpiubQC8Cw4PBQrzkNgc3qui5QaQhUZYpZPN9wVFmUhQJz8n5pYnfJtqQK",
  "key16": "2asJyhE64HHU34ikL4y7jDHWg5F1enhghfvG7qus2GrkASSx7sccfnexMHAipUh7nX6NiPwrnyC69RD4ssuxGMeK",
  "key17": "3kBnHodEKgvtuytXAqJdooiw57toG6yvRaYShvaZij3ke1pcMQrpNoSbGTNvy4t9SGCHGyZfhhkz5GnqUG7w9615",
  "key18": "2HB9Kc6WMmjCpY5LH39ukgRwS77aZjeinckWEn4vnjQJtHNqyiF46rz1imVECT9MxVU5shS7aM1Vjn8sP9MeWpMt",
  "key19": "2Jj4GBQwiBn5oBRWhszrQSPTb6JUpynx7kTDYd1RKdJRPuqgCA8kEmFrT6L2e3zedNx999TE3KkzcLyhDogF6wi5",
  "key20": "cuSkDyn72WzKLX4UgzKTHCbMDaDRzivh4RrSUiXsHJx6VbP5nDGHZEqDhyzahCLt54pqEKR64CFzdHxYFqd7A4H",
  "key21": "5K2LpE1A4Dijfzxyhatfxh2j36mEdv4VTnyPRLck4wsiYWbpkdAdhoNdJ7pVsj9L86ekLRKiS3qm1Fi8Ypv1ympJ",
  "key22": "2esxuY5poMBfCbZbsSstM3BGv83uHzdKpeDsNJjZKXSG8fLTBoLj9PeXtDSdieZJZapCtJRBbmrHeHPu6tUjijh9",
  "key23": "4TJG22uxhPXinkxYnh93YcFMHYJdLuqyKjbzWxKL57dkgi9YDBB4D7W91qJYBXviHu53aGDmtBbyCFMeQpgtvM2c",
  "key24": "5Lx5EJhQP4x9umGC4JFHnbXPgYB7LwEnoAh3hNLoycEUF6cRs2DK6MDyeXsYxEtqQ4S6qzrXUqpSQZf3eCQikvy5",
  "key25": "3K76aggStd9Sqs4392Q3NbzJjubpi97hDLH4DqUDCu6iwz1B2RCVG1aaBXqyrkWmL4eATWTZuBHzSjj1JmTt7Cak",
  "key26": "5ETCHGb5MUVe75cx83NjpzZcQDWB6wKDZGETPcBFGWtyKnk9eeTaPbXpn6NmGMEkgBZU4pw17na42Sjo8FZsjKTo"
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
