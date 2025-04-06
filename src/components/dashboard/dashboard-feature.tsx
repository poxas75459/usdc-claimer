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
    "4puUoP6pnuLcwc5CZqTigfsbf2q3tqBYgmbD5oCLMga4kZKL8N6Mi6GVoMkmTioEbKsZBpU7KM2FVaGcEY4VRyv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vhxtKChwoQwq1Kv7fJeWvsi8VZWfq1UutEGtC5Mu3h1QYev7wEuT1TT64UoXS92NeLZ75zCqMLpN3jRy8TnuK9X",
  "key1": "4HYWkYe8P4fTC3SNtAZtWkF6MNwhQ6MH6hC9VcVgb56rLZ2ZZWMuBNDk94Xo63qGJTVb5tJi13DCFGFudp5t9qhk",
  "key2": "2fbWkkRaDmyNRSy9DPTikAYtKGmpbN1LB7ApFjgpb4r9ZwD3bfyjUqCvREk1yeuEtitLnvdkDJoVJHY4K2rqSX64",
  "key3": "2VWyf4NMDxhhUjc3xQKKZGV2Z9LSswy6qPrc4nLoaBNqKgVW18A1i18rG6JWRNcFc1LpyWiLyB6gAS6UXpJ9Rxrr",
  "key4": "1eYSavD9hUHqYB3eRGwMAGCHGiWeLc3KKbEX4eRuLLHhmGwHrdDNTPXrpNZkPBPdWrLLAii4pm9YACZb2ha7NXW",
  "key5": "k8tYYNn9kLHrW7rD9zJL67tPVfFWoBrhmG2trEC5x25H54F2r38HLY3V2QBSLYP4G8FgEZtgezM96raN1qzdqqG",
  "key6": "2GAJBpbuuP4dj8kujdfpDB2m8ozaJXa6VHTZHzNca7CWohbsc9xrPobmGZyNDus95e1JBjdLhgHAt58yS97zH6s8",
  "key7": "8E3Ekn7eE3sV9xWu2zA3tPDFzjHCRSRXDJMfcKikYohpBdTcsDgaP9xnQVF4WBvGS2q6PgRHrev6p9GqiE7EvqV",
  "key8": "27bSxYgkF2zguFn6a6exCriMusiXWRRDh5BH5CRFibDAzqVKEkm8Rx7n3Wkr5qG4D6qA1g2fwLDZRonofNVqSAGf",
  "key9": "4v4Jq2ANbeh4MxGJgXPtSx3dXhr6bJ6ixLE4yqpJKPsmH9wAQyNaNdc4E5sFWpNpqGtb3nQPYPmfrdqoLzHsRWAQ",
  "key10": "7DKngbvdfG7mimsc9yM2b4nVCHSGCkbhwEKZ2XKDcvnptTPBYyXMKm4aarLEzk3Rt3roneEWrV97Yn1qhHF3Bit",
  "key11": "2fYRc9xeDSqg85LXjYavd8fFxUxP73yL4AaqoRUi7NHQsnvQKpWThREn4NvFnDK2bS9YR3gtQ7eS9npSUjQdEbSs",
  "key12": "W3NE5TNRUjo6SHERFD9HxEYznaHxurZvpp7SjrsxW4fD3nt3eXftj7vQkoCxX6DPSw4va3n46a5A3ocC4du1RNE",
  "key13": "2rAcxiFrNFBDvkiYezHUHHDTrZakbGft2erMTyPfz1dtydejDJbxqaN4wsEueW1FuKM9PDUPcUbueWRQZJBpd9e1",
  "key14": "323ZTuueaN55xrBSKCQaDFdHSJ5kH5iPqxhGwFmAK7yDCU61rZkgJsGeZkgq39BkbKHExa3px95s7ioJW5gZw6t3",
  "key15": "3AY3Li9vzvihiBSuL1uTSYL3QV2ccpQMSF27m2umNCX3tkfLwi4ajkZ7mpsCW24ac21GLy8BJeCrMekEVwzoRZGM",
  "key16": "4KS7stnz3FnePMuxZm9uqQJfuCu32CTX1SzGDxBL1F2BNUtnHmSByoivx2VtEijhc14sohJtafv8zQBcNMLQQZnN",
  "key17": "5Bj5LEgmT6YoWmaJWe6md1G24Tmsod9AUp2Srficv35JSokEMwmGqkgY6BuTbvdxB8dfSWcYUgWWa6hUbThLrUKn",
  "key18": "5mNFdRYk3XgLh12xmfMHy8Ytqo44T4Zt3jyB7XMgs793LoVPYrS8V9aawCo5RT6PRTBpLdm6cHGcVtsH4UeNAdTg",
  "key19": "53jfMVuWHryxB4dohLoSZ94dBxTdggCmPUH6tjt6DduiCsmQgToDCEocF625vNhGp12iyFUCnQzwJR3WCPJJWuo8",
  "key20": "276BLx3mv5KrTK8mMLWZoKCGSzWQh883zFukaakK6FjNfaumxARqT1uXAQrQeRzENvJ1eKVknzEhiDx4YurARqqB",
  "key21": "2qpFFKzJD9gWkMydqPTmhY7hAfzcTebiDZup7WNwcDrdEBgbekhN6n4ybWgUvSDkpvQ4P2P72pUrZpgjkEyYVAQ3",
  "key22": "2TmVibvUkuXqp4rKsF1H9a6qXwf6EPD2GAm5RVvKfpUgCB4dbAa8Ed2mNaLKm9wYU7kdStax9dN269Mck4mKH5gU",
  "key23": "sYD4UdDDMyMJtzary9M5kLsZ4zxxSAbHh1fhH7RFowamsgkmqAdH1Qf3gYKbQQjnWFpzDia6yMVg3xWwNdDXFs7",
  "key24": "QqDS4icpTdYs8z2Sw1i6JF6zsd6mbtXxCWvyHvYsNd7aJu5Rvkw7hkghQHnb8f96ooM3GoS7yZsBtoYogmm2xtc",
  "key25": "8P6iKiWdsWuPtzxT2rB6cgjLzMLKfygrxXJStA6uKn1LGwnfwW8jnnhQRgFDynEhyNGhJSZ8LoiKP9aoWnxLeTc",
  "key26": "27j8VkC9D94F6RnH7a26PHkYRvygUeYcXxagZTZQNYGZszhEQRkaL4anpMoX9U7QHffshavNTqUjUEWAcBJUHjED",
  "key27": "2rvhyiyhEDeY2J1MgnqjaNEso99giYZfos5R35AThvMWQQiBVmP8JE7JUBjynLtp5avedA5vRxEwbRiqjXuNVKM7",
  "key28": "39r8CNiRaYBZiuzPBkeEBq9s2MKqWaSNLTW2wMQMhodmWtpjgT8F1Hm5muT7zDo1Mpg7A79iv8X2vKGy7mjKuXKv",
  "key29": "28oZdWL2BXEjDKFq68R73amsWcHg9isUA6xNsviwXTrxC5911oJMpjiJGSTbeBSK84SSTT7ywBxGpmH5rmxVJBbi",
  "key30": "Ny3mjFvs7ydue4WW6Pqx5VF84om4aKBK4abPckwGz7gGvFNN8JRwjvLqz8Bg44ikcE9psrgeZeXDMb8vyHJrYv8"
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
