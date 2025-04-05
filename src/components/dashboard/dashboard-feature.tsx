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
    "28VBAi22EmHkrwA74JGFcn7fLrbgpEAyi7eiCFjsgqDAqKuKQkYGst3rzePhWZPRnWDFZmQJ4xPYt4bFWFoJiWjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kfmLDbXh9D5BMSynkD8wreXvytaBT3KifFH7g2DHyYaKBK1oaVDjqtWnjgXk8g7ZwvyrQpSVzh5Jx8PL4mx9Zom",
  "key1": "48hZcD9U8ffo5JaN83WkYPhgkhLKGYxanzca44QQay4zXZCND7ukyVdUfZkqXWYA7SwzqSyZmhp9Wbc7ZM1p2uXD",
  "key2": "gNSurH9MgRGw1MyT5heK8sFvVcDd3cvE96mYxKbNCDmtPHmkZCwpRnnDDARJYs2C9w1G4QRf1nVXSr93FjGoabu",
  "key3": "3NVU9bMuREtMZxnECa4jcNK9QvdKZf2bnzwLhnoRJ1NkbdwyEaYcCNsA8gR9MJZyZ4e5voAm3HPAWTpvWoh7nb5Q",
  "key4": "4eVKzcvVhpiups4J5o7hYFmwNGBrgW5Pt93GX1Szoioo5XUpWG4xPj96sCJCTAKDEx21phvHnTm3akyQzdRrzM42",
  "key5": "ugRaqxWbVGRznkH3t4cDEVjAG29n92tiKYkhJevUZUEuJQy91vERG1oJTnjcCFkBXYRpR4jakaYRLyMYgHckcaH",
  "key6": "4XAJMusaMUXsQPwTYq39AAddJFviecQRJ4aTLEyT8RghwB472BQ2GQfBqFfYkGkp5PkmCuHuya2YQmZhpPP263Hw",
  "key7": "GDeQRBgPbTZnARiNhzRhMHQxndtSrsti7bt4M987hQ2Q6CTzkLo7m1UY5qtz5itRre9bvbdufyw4Fp3vueT3qqX",
  "key8": "j51HYFMEMArpzt6KS7uJBHYL2WUYXGAvFBKyzFEEWUfGTgZyehvm4DDdpaHZkdV9EJgfSMgNoKTmPZyMLQ264YT",
  "key9": "4GqXuCWmSBF2VzqGAsmBuUomTzUWx4Np1Ue5sbZMrcYy8aVubr6Z7gKa9g3HzpHWV7JRCEcmr1i492aNRQKY7Tj9",
  "key10": "5TGE1RuMhjjEt3a1dhhZQjbNf1mrNR1qeNDJdddUWJvLaGGPZ8bT46cep3p9hGaEbZoUDonXXwYBba89MQEAmfEc",
  "key11": "4YymTTMcCRGAbLVUnMP41njNBprqeSsAJBgkA7qVp18iGLH3DMKw3Ayr5GECnQDEX5L9v4gJJdQNMvsDiSErDovv",
  "key12": "QiNWmKSaedkH8aWkRXB6zZV4NjtcEcyjHpUDL5LzaNBrXqAhsooPGpy5CGUDCf3pQ1yBmYpfozje4aVDSx5Etmu",
  "key13": "5U5mN8jMep1PWrvVTHo4B3srVhHELFRswesxHfnpqMqJnsemGC7HrdYHViUKaXLt4vW2pwcyB2YUd73qQ8ZF3hY2",
  "key14": "4LaB9Tj3r1woQmbXxi7mFtKGcZqQBsSXHbzynMqXHXCxXePwZzwHTBWQudqx8CvZSvoTc1SpC26ayrCLMtvx2feu",
  "key15": "5pYGXC1uBPZXSvjFXi8BGMtpsLXooX1DAw9e3EknA9RkFQaypqxmGzTbZEyJUqGfKNLwkMQ55h9PeA9fBuSHFbNJ",
  "key16": "33phXCaEP2buVkhm5a353CDXxeeXkon8oeBetcQdv4spMNPGBmUqave4qMR2X8ghcFhJ2RW61cwyYERvjvyKZ6t5",
  "key17": "pkfccNhmtG4Pi9KYjUNEWKw6nm7FMSZhNajcGvnEjhLVtiMj5q1pD69DPKshQzUafncHMMXMLsV7W1Uqqm2KYJK",
  "key18": "52ndg2rdzMiBTrMdPVFpqzy7vfpCS7zBJzgTkcD6o7DCdP2iqEBStMezXqpAq8NnBAoXDjk6QXoCuB72TnqkJhg7",
  "key19": "5re3UNtVEYyeEE86X7x3gzL4PL17AxTjA1MyriFkUjkLBk7Q1YJTbeSYpnppBafVyf2XY2uPvMvwn5hMQKfDjRiR",
  "key20": "4zqoJuH2z3eT5Ts4bm4KgMqRAv7BkUjHiQuvc1BbXCUW9rwTFDJhiQAbH7LU7RfhvGjqPeex7RD2TeAzjXftZFhK",
  "key21": "2UJf3uFfrNoY8TS8oGdSBJab83VLmJoe3rkNtxFo7B6krpo4rscGZF2DqESQJV3NPTHZn2Nod2G4oomT2n5S26ST",
  "key22": "2SFgg3ApmxEuZyBoxF7kfDQgAjVv9ChYuEdEEFjQ2EpMgCSRbz5ijhTaQRs1F7WJqkhGpXhq6sdxfcmk572brF5A",
  "key23": "23XR5KjWMe7RWtMvSY29ruTYnnhurwMmzLG92YtAGf9iWi5eTBCk9m1QeiK7qKFF33v8TdstZetv9EysAj1mQCeM",
  "key24": "4DRLf6MKFhA7LgijqwRiK4VR5cTqcHNsF6VJ49XUyzCU16XW8UBzgudFxHmT8pY7x9BHiYAJT6Higm5VNAktvmck",
  "key25": "2BcYTec65WUYrpLXapes2MG6j2WHdKeMvt7Rfs7HZVBVc3TuNkciBiwaPs4S5HsmLdw127VCxKTcmnFJEnSK2Rif",
  "key26": "RkNn9pKHYoSQzurufBANoN82ZVx4Ggfvewrrs5SSF8KSEzk1ubA7u5wXE5dBrGFTDmd49wX2hMKhLpPToD3zWQt"
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
