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
    "2pcNBTNUuFQJVG1LkQ6GwZqMm8ru8riuwK44B7rMEpusY19kMqgLXCvMfq3F5txpLsrKtF67WomCiooMnZmH8TnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "588R5E9JsxVRqyNMytskK3x7Av5L2ZtbzWsSRxNoqn3rEDzJZWwMK37id49WHPQ4PrJeV9vPjVk8PoZh8FDt8AY9",
  "key1": "62MGKdmanvMYbQMq6HEnZ1dHNVrRM8icv42NWHXhSuUYHr1ZsaFaLctYgfKq9MbFTBwpAc1TLrdrshvMr4rrwBE9",
  "key2": "3kQH7U6tM69GThH5yzUjTytNsXAcsnvomUWhhmP8bFchmENyNyyQkZ5GPbDwngxP9KbQq8ofHzR7Stf7vVFCgnKh",
  "key3": "wyXinsh2JPchqPFmS4P3rk5o8USzb73eBrp2zSXNYjnfQE92B4aoKrz3e79rQ1JiWk95he6HTDU3psaQQF8te9Q",
  "key4": "2dk3cJYhGE2ocMLM9qcfztKrA8oVYWXWp2938f2KqsPBdbhouXKSn9p8B35mcqB8Pc4TsnLPPjzTpcDbU81GXoVa",
  "key5": "PJ9JjUiR5JoHD2m2GDFi8hk1CBcLwkSxLSEdHeMRZT6HyvB7arC464Kf7NUDwq2WqxtJWk8evo1igG1Rdtqh4oS",
  "key6": "58K69y5VYKzfqkif84qP9KqSbQoez2os5tASgsdBLKBTU8gfK4TsucudCScd97AkWNehgyr33eqHdEPcY42MAwv5",
  "key7": "4pmtwY7S1wNq2p6zP8xnvfRfwz8REfy2yKJyvh6SV3ZEJhzg1uYquyKDaadXCyLMwSLVZsBUDWhbZkxCLkQPWdAo",
  "key8": "5qfmUvBqEJkNR9nxWptDq44NMAyR9EQ2MeTJdu1jRnGo5tkTXLga9FJQNE7NPfAZDbyYyNsajMuNgQ7nVDEg2cXe",
  "key9": "3T6Y3uMKPH39jULMfY5zVDyP8Q3cYf9UaC2yiDjWriRTpc2vRZaBbzH5ChXvLMHtYcs1kCU5qTCrrLpoSCJ7UB2G",
  "key10": "hhrrKny91J6QbFMkJJpEYuBQSzjqqpVPRmMMFqxLdKCgpYYs6x5wWTXB7x2tYrAEDb34ZS4LLnpxVdhDKjCExro",
  "key11": "4B86ECj8iX7sJSQUwC7tj3qTwqMDSgiEYziWdupCTYGw4nwSQTWXFGifuzDp9zA4vr7AJuByTG7FymPxwfu8MKwV",
  "key12": "5HLqtjTkjDZYoUdpVHqHc2mSrZPLSbPs9k8jp7zJhAwgEfKbgyHXSYi3nVovr473Ahax9UwdCbaY31Fip9F9s13g",
  "key13": "2g4Ym2nWsL2F3umyAXk8hNdwQfoE52w7ZyTwPaAoFKcdfKsJKoNy51zgwfyVNC3dmR6GnkBxwt4UGKeS9T72ARYa",
  "key14": "3m9okDuJcBMqsE9B7g1CPxsdZRYuKfQossKWKNyPjZQBH1jm3vzdzRRhtac87dFZWVfEbvwWki6vg66ZkcFwB4PR",
  "key15": "2CRmXPyjHdv71sgVKMgqhu7JU8rodWmo6QQjHgt8S3Y6JLL2rVRAvJzn2MpF8dHM26nj4SQufiEm5ctmUrZnhU5u",
  "key16": "5VhQ2JKbvSKFmDgoTW9u8ze9WnKgEAqbgYGu7qccgJ1CqxkAHJL7LD6PmQRwCf8ugoKSv12we957z6c6y2iu92hq",
  "key17": "5TYS2Qjv99DKHT4SQmQNpe68cWCMD6MjxvGto22A1g3fcmrhAo47smraFpEa7bLRb2aLrsZ79h7HrHYSdeGVqdih",
  "key18": "2fVTXW3pq3aaAuMLSWa7GB5dBZCwoTieHm9Wg556uxEP13pp3nbcEeq6tU3UsoddatREZvY9HsmjmYe6aazMsaW8",
  "key19": "5DXTs5idGBJW3yY36xWHasSQgTqUhECxigC3c3zvdgoammxi9wHYD3jsAEVM7NGB4CN4wFp2KpgtYwrj4usZh1xj",
  "key20": "5mcJBdExuzijtp5sr1TXumq69qEn3GXjCxPxfgvnAiX6hvMVWGMJgcsKatJgxocv6sAkNPAHtCQAfEWosN2i8awL",
  "key21": "5GKdo4y9GhhBVnyGEDMjP9igjGNuoHLiBnxjMBjaJtiAyYMPj1DxLGnFR7K3D5KKQXn4vhPpP7DKiRmYc5aEYEJn",
  "key22": "3n97KpZbgEArBZmgNjPSiNYj3uV74KNuFe6EQgGjsuw8qr2YYp6532qZfCcB3kHyp2Wz4somyUtaXKqNMmDfbBJs",
  "key23": "9tj555knG5ysMzwV755FJ13xYkQF8FtuQy1G5WTRXpgmMPCK5SccmHV2DgCHNjdKdN55gtMZNf2Ry4G4xpzNEq5",
  "key24": "9yCJGbRRxxdbccXZSocznQn3PvQ6YB1TSuwYwfWhVdnYPAt7NibrNp1Q2tQWc71gRPwWz12T6SHynoyTtpLoLPP",
  "key25": "RW3jaZppLRt7u7eud4Fc75xyAnHRKwYQqtxHqSGF8dZ18w9FzNVr5dDskv7DSnXdAhskJkvBeWCdMmLhYeuqPPB",
  "key26": "4KVSHzgSjXQDVNy7rysKbthxpMRf8gx2TksLF5xCxK1zV32yrHtaqpso4hHFedcohc4NhUKRkABzvV7zMdKvShug",
  "key27": "2UrFMiqAdkUSBKP6v2X2TDTMgDU6ha5ddpoTJNNrTUbpDfSq2vEnoDQt8GJTufkfizRHxvcCqD4RD6oh3SeUkmK",
  "key28": "457o8syKxSfKEMqRsk6q1CFZb7eysasoVUrzzmW314aFxZPRaNkMsKX21PgowiNt8F6sPb19PpR57FAoctmJCnb4",
  "key29": "3UvFNjHL4aEP8Xaond2c9MXascdtcXuyaNW1nUyR8dqbbWZfsoA5CoWyWCWhcmeHMLH7zcdAxkzUJ16hDgvrgSTa",
  "key30": "r7b9erMuTqM8V9o7KHAY4b3YTmiPkFnrykH5KY5q5RtshfW2TkC2iu36cfA8Uao49x1mZLDajn9AFYSw5YM4z1e",
  "key31": "2K37KMRix4HpcEghnjFWa33BjtcNr9SDqL5mAjUKeb55r2XaGA4bVKi6fe5ebeAFg6VWxDCLMZ3jTrKybNi88UJy",
  "key32": "3PJL8uCJ6HB7SgfRZuBexy6aNqBJbmoGMd7uWzDiFbcYq4L8uvancniZaPFQYgCmiVaHSyXaV4gmMSsKC9iZoHzD",
  "key33": "K8qT3CPrwvL1q6AzUday1CyVpTFKEUE7XHXa9vPMScWUpikG2gwKPyyZDtHPb5N65hgg3JeUgsFfhREZcc8Drb2",
  "key34": "4CvYA75xF7ssFxbv5BRzLjDWJb8Wzv3CaetD385ci5Z5T4CVgDP6ZshP3eMd4xVe1b2iMghKfDg1uxE5PopH9ktx",
  "key35": "5ddQJbcVfp8FLevXDqhydrsGaaP4dLxHJetpa4n6Z3Wpua1GxKmJ6zKY19ZRdpBPx8ubRz4GfwAvt3Pn7YyU4MXr"
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
