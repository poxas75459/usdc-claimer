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
    "4yvz3XF5G1faC6fEwhU8ZHxkiGPbQ95FmS9FM5R75wda4CkH2txrEjwasiR8AZTxzbuBTzopBN8ze3shcffxEVW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eb7JJ39KnuBxuCjFZ8Y4EzUxaW9wvHNTQXqcTe9Ks9wh3F5SRbrEqHbB6eCvp9VVAFNqLTy9neV8rW94RA3QNn7",
  "key1": "4yX1RKiBB9WNVzCwMPy6qirKK5U6c1jg8K5VrHZjovjJz899XnWSRmwn4FFViUHwwhoKVXLsyXR8NwEz1WbzGNrR",
  "key2": "66cXAS6McMWEGWg7VpP8aSKpUsf7KqEgXLDaXsEZgGKxdMCQVJSeKjtkgegNRCF6f5mxkt5eC3fcZAJTFtWYUb5v",
  "key3": "5UmobPRJyPM7kFottboj1CCcHnQsqCxve4ogvHaVDXjJYCiGdNzfsWxqiWLKiYCmYE5Suz78z2TG2u7bwFboTPE7",
  "key4": "3aEsPQwsPLB8crS8KGVB9bns4Q1JqZR8kxcEQARgE18sqxN6YbjGTCi1J3BUURfjwr3oWax8Y5KR6VNjNFSkfqK5",
  "key5": "XZhmUBG2Vc2Fqf4ZW7kyZP9sxtcKzJ9raTZTqiw115EZ2biNpF7jmET5cs6ZyABwuQqnzdNp6TfWcn1A9VgGyb8",
  "key6": "5mXvDSfkmaU5WiV13TQct43K3HcBRkWR5qQ67d9YqgczMrjMedJF1sYkajcj8q3srJaVruSjvKMfmjN6bkFvpBMT",
  "key7": "3wvSBNMGEWTwmXBadSbkPSvzCnwoAkw7MCzrUkwM2o7ZkNYRL3pJDknXziPfHyidREAXUcjMtxhzxttQcpQ7ukXR",
  "key8": "3miwiQsQ5KYT1uP56bownHL14FhbZnEkQ4F6TcTx4tGshpsTRqA9zg2idJdFzeoe1Aqn2SeHqQt7JfRUnHjzkHsj",
  "key9": "3FYepdykznTe1dn74b5P8kfSSCkDatrdo7UAX9D9rcoj7WbEkM5HJSEhQbxePCg29rz3Saa3YHJ3vW8RhBmtgJj8",
  "key10": "5xiwc3Mmefuhj2aJZHSyBL4mYAPx8utjuRyivJ3MVF2nM1vrmug2CkB2qBtWekfC6FEuKuFerA3gQecrUwe9ZMk6",
  "key11": "4N3dB1pFEYxvdXHPAb8SNATWGjPSVcgfdNBdFjJhETWMtQX3Jk4nX3MHsXMhTgyDg9Dm938oGNQJAuPHBz7JfDnU",
  "key12": "jEkwwrbJAgXvD3dY9pV6iGHxxq1tZpGiJvMc5HXx5Q4ai32Vd5wTipSrHyUviAHvsNwZLqk7vwPt9bQtsCJk41X",
  "key13": "3V3a9ruQzEMttCYUN6RBR4s1hrZVuHLVUd6zFYEmwaU8XbKEewZPBsJLeNajGPFdbBTzzke2p1BB5Q5QjD94V8hZ",
  "key14": "45opQR7psVu2ATGkDxCePbPV9he6aQGRgri4STrsVDdrv7LDnrVPNVWZnuSftNA8CJrCXB5Dy9SVJ8KeXovdh3mX",
  "key15": "5FDFUSstY1R5iaHn9eiq8LWYMV3YG4ik1Khi6yBPJNGY94QBq8RS26tt3594ruzSoYUkMPfyLgZDsF2jrbbaXKjr",
  "key16": "Env8bkxhDSDL2xFv2VHxY6XZwstANZR4WPSwsdHRfGo7N5JgoMedcxCE8thdSJ47aoyM1xCA9k4EzkDu9UtwXod",
  "key17": "932cf61NyPk6mTzfxxzjBzpezqDb3oakwQkt7b9DHAUBFf7GQuZJAK3vKPKGaitoaQjf5rVc51P92Wb2BaCbdZq",
  "key18": "4AvZUKhnNxdwSzDVJkP62xiygnj9Eg9Urqx6SCBBxArjEqiXq1CXPKP3LAWsnyiXgFdrnfBSenW5rBzd4jahwFjQ",
  "key19": "hehWncBL4BV5oQB6JddzdCm5THviXQmbkvLtLot4uKxvgNeCEggiUkvocXbDCxB4fMgiybyNTwNG5vHvpx4BHRP",
  "key20": "4kkwwJ3AFsEmV3d3sE2jkE1hBNx72CiTw68By3PhzbALoZzKU4KruyFfJBCCWmRAX8KsWdkqxgD42dNMsb3REeds",
  "key21": "5AeE2rJwGLnWjJCVA2cech1ftANLG6mqZ7rSaUYbD7x4wZGryPTjPXT7V6nEBWxNyfJqEAvxGCDsZ5M7uTHfndLK",
  "key22": "2ErK2u7HNxhLvPy5ymRNpbuyZesDodAPyMSD7eY82XRN8koZGKMZV1M4KzP1BCuUXbKrKgqxLfG8Qc6tZiBqnKSP",
  "key23": "5o41QqdGFHNfTKXX9vajQLoGN57zp2uQEanYyU5nVWUMXLDHjC5aw5FUbANBC2EEDC9LC5WAmMQ6bPDsXaQM6ZGa",
  "key24": "52AGN9e2q8KFbb35wmMYTGBaLEhM7ZV26oj5nLVsZzU2oGBagNyqhNuR6NpYvvkV2hMkZSgmAZ9znUZtmpmuozYc",
  "key25": "2uNhVAF3shiVvyMMnuUbniFQUnvYdNpzJMJANx8DqvhtANjoucWWzahQQvAHNz4c5JNA2681cKsscHzPxbTywjqH",
  "key26": "5P8n6PkgibxoDZzWsptrugkp1n2EttaVfHCtf8hYN8RSqHWcNsc57SP7RH8Zagsgm2AHuhmreMMShmxNVz3osuy3",
  "key27": "5rw3btgttNbC6r5Bm6ZYoe7nsRHtFjeKHZZJqTdehefFucqCaFjLEY4VPG5trvbj9T4Kjmeb4njdoHEm29gPssQ2"
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
