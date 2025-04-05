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
    "4y8u5C7tyoVVtb7BDY5TTWbrL4aCikUdLRPq8c6Jyf9VxV1J1sZ3vE7XbHXHDEznLZmWzWDnTNZxwfc9GMHUT9Lq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KUeWPZgiC6fWNZTXcNMLqRSUFY3WVZbKtRoJdmedRsqMesX2pZGZE8d8NQ81jkhW5nJr68KriznMm1GErfdRZiE",
  "key1": "5rVt1Hhh18QJMMHcT3pE1hwNM8baNxtvHfa4hFKyRZVxeASBFsd81w1FcvNzUZyUKcRpa8DSP5xsHjnFG3YCvw21",
  "key2": "E4SiEJXTv81BGMr5QcQZsn2SaaNZvZdjSN6ZHSq26VqXz6otKaA9UVhJee2EjNdEEFQvecJawAr85xVHtJfBtKk",
  "key3": "4H8KKSh7BiMqAL7mrP8CTcTpHi1q7YKgVeCPVphiBA4Aq3zmPGfwDrzJGNR7ET7nhWy8KbbUXbfL8Mv3FmGkAsNQ",
  "key4": "5CHvJ1o4QgSUag6RYJf63Ze5oksgJskHtnJVch8DdfmobSvNKE3ZJVTZNkaHxYKNHAmmj2pT1e7FPSBRZAz6j84W",
  "key5": "4iWRA4ouDbZghMPCAyxn6KmQrAwNf96zcorhvm3gibd9aMF3WYuJeoeR2rKTUeSJCPuwKfpjyhZYU4Y79ehWUeav",
  "key6": "2NHkAxQaKCMAAafu9kkx7TRF3iZEBrZUkxoTUisRxgissZbzokySgM1RRzPx1VpkAe1PXJPZTydPGt1JDwhaureE",
  "key7": "3vqbe9ds8EpqiFBLvHkQmvShUWc5jcWm9xAbrUz772Yf79RvawJWL6T8ffaHfHg9a7J3zirfzkoW6ich7y1567B7",
  "key8": "4RhZq3ppVaRbQaL2Ceguh1yGoZpbnG6CLMLTxnMhFVoKrEvKKDa82UqAmMw6XHsWHe1y15yf3rMGWpgSvuedrDH4",
  "key9": "4zkBmBYj6U5ty7hoj8vdTPwDdDQ6YGSYfytxHprNKKNBU6Pv6etu8PmEfgE2w639DQSqvLmjqeTgQsVFEd2hRYnv",
  "key10": "4vo4aexcPeQzB3E25pkgKvqQb4XNC7hXYw1mzjuJbvggSZgXcSR9cmNbWDrLZGjQyKoZtBDWKTaSBR7Hr8efabnE",
  "key11": "5qHgg3wFACp6fVFj2dUndsuSZxyDVzTy5tWNqRd7sPzFRccmHUCsSjFrPBtNS9t3KMQyh5XC3gja1Gp7agguwphN",
  "key12": "2V6kFF6Eum212SQ8xydCDYYuK29wmLkXVVvNmYrjJpLHVPD3PCH15BHgwrHDPEJNYSkVniBKf1X32jbYpmdPdGor",
  "key13": "2Mp5qhZzWYrdbAa9mfgGXCUNRCCkbhwdLanVr1TjpbN8hJBGVkePQX8Rm6K7wY66jPZ38cdYkSJPoaQhrDea7BuG",
  "key14": "3BProeSmVYhjdmGuk9sAfVkcoezWQH5VRLJ4smwjdAJPHgCVC7k1UvYWDiWzjP5mAS9cC5eMhDEhNWBCLQVAvQqw",
  "key15": "5MYktNtbSeUZXp7MVifq1gyuvLib5624iDAvYhH8PjyKmLpUdzoetgmTmh56caVKmjkTvjubgMTZ9hLtvH3BUgqz",
  "key16": "2rdcFsG17hP83xG1sUthw25SJg7ufYkpc3nf3VTXz7E5EeN3qYmbzZCFWWkuD6nz825Rp8AQnLGQLEMCxMLpSQfX",
  "key17": "3xuKcNmjKTALBx1LbFENFLikgxBAZTdbCv6ByYZALZfQ3L8Kd91DeqQAxp39YbM2zuPQtVvrqSzeWWtMEsgqQDjC",
  "key18": "34xcNtwY1XFqV5EUimBafcDsVwK836jG3qMB9xgfdP5dyd8Nowhpj8XwMJryQynsfyUsoSCUhXfBLEWyF7LprAhC",
  "key19": "2CGGzDiyjEr8MV8b2P8zzpNaiPfDxtV1ZPpkTMPhv2qodJm5gFyC4QQ5XAGogaRGWtEpDP7FxGWsWahBMPWGpt1Q",
  "key20": "G1VD74hH3eeyXRjptHfYy7KJjjjKWFbmvcznzZ7QupFNjimp3pWSahdtAGq4oPkVeHgTQeQ9JmN22usjEgtjym7",
  "key21": "4pnsPWpj55yrDoD7DZhRmdgej47Qmt5hS2M3ZgtAVUP6WTgu3FJERqDnKDajqjFEp4EnwBjauiQBvcQxh5izxPGJ",
  "key22": "SwYrEyuCz8DgYXAutTN9D9uY1L4JYQUKyVro5kGCs9a1bGkXKtQbE2sf2LJ84PGUDxFkpkSGnX4w9teMpHj169o",
  "key23": "4kU5dE6e8qciXvfEEaYSpPyf3dLqBvcDvinuj6ftyFr7EPEA4a731pSPFRY41KFtyH9GKqSfcXDToqs3UZ73eL55",
  "key24": "3CP9GfkJWZrsBPwDKmoAXyEC1RheSP135xmC9Spj1a6SfH91paQxLsBe1hMq3Mm9VonLdWeUR6EFYqaqqR2ssRgo",
  "key25": "3qiCMooWA4pxWsxnaADdKvpk81dVhrPQ6hy2vEyKhczSACQQRK38V5hQCaEDP19EqZqbjaxmU1taic9kqS5Ceyhg",
  "key26": "2hFKJF1Y7x7jsM9Wz9mFKBTfPAK28xUpUYnb387nTxNx2NC7ajoeNLE1EnNSrqMv4FubJ83KvAeJJBhKVHx7gRrZ",
  "key27": "549LNFyPoH6CxJvxWUuwfNZSuJmF3hAVrvvjEBfMe4KnR3tWSpMCPPQnNwbVUMvbQnpA5AnpN5ZPvy8bRBpPFE66",
  "key28": "3H3B6HSyL46Kaqk9JuxjKRkU64hZPCnnPDN2aWv4MNJqMKkJs7fWSG43cxyzenH1XYRccdiftSCvytShg5YmJxZk",
  "key29": "5Uo2aHBK3BuAJaTyTExpomZkce6REpZLxkgivHWsw8H1ou2tCE2n6gwjiwr7VG1AZ4rkQ1sVWaC45YCtFvmUn98g",
  "key30": "4UBcyt5k1djTAD8XctnciXDcXR219QFwX6i9Xo5g4AANAbmHkYKeJp47FfEEJxFqknpXzLDuKJVcE5PoBw2XzgyK",
  "key31": "4Yp8Q5QZp57WudezPB7QMYyCKQnY3VeAfkkvmMUvKpwJ7bxjVtW4aynfW3SKP6Nk2SA3hKtFPyFDrg54mW5RAAJg"
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
