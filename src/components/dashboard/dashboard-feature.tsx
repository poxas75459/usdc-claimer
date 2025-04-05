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
    "3t55kf66d2wxSyQ5UnETG6UvngetukufWieAve4wr2jgfQ5toSmGGiWtpJ8aGvq8KdU2UGCc2y6gMj6pLxLtEkof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w2xFDb6bKq8eNoV2RPx9kNyXcVqdWAeBwUbAT29v35maHxxhHBfEiEE9ZundTi9CUxvjECAD9GxAr7nreCriBF1",
  "key1": "316Ad3CtYmfNZAxeoPXJ3cMQhgxVr7toLq5NjbsiHLUQ5swN9Gnouqwo6JkTDCj1q7ATyvPBQQouTVsFQYGgwdLD",
  "key2": "29rsfbfwqqfxKavNq9Pv1dD7UN17UZMd8vx57PFjYHEQKEd7Ex5btLQaBXaa2GEr73G6rXMhjnwkuv8MyxF1SjPj",
  "key3": "5uWmBybibFjYAH6HrQc9Akms8Cf6T4f15gEcfegAYBehhrcFL6VBGhLfsUT8x3hfrFmtoruiwX7ppYszL6kJegH8",
  "key4": "4QESpZCC3DK6yBktNxJs5k3Zz6Ak2jQdJaQbSUxjpyTAsoVpDqQpS9i4jeYfgLFACLf1gEETQfMS8BLgv1tXAzm1",
  "key5": "3iBHp71fj3qnmr5i54tMzaKpqaiUWZLoNqap8ZDufbjLabnbi7ihNJZzbdEg6AcbMqB2tFkWHgci66fjHSzoTYSC",
  "key6": "2iX5hCzuKpKGjQmcTFjjz6Q4U7bLaB5q1UfBXDyQqGEXMe5Kdg4DiXzFATCUwvMic2suFcNhZDiYxuxoUYGaV4hS",
  "key7": "6YCc4qGr1r1MZcPJoBTPUMVUFX9QWyjQCYSZM8BEXfJNCRFQ7FFQBgQmgTqoykbh44EP2xY7xHPWyxZGc4FaYM2",
  "key8": "3xGihS7zA2NeyWQYbTWmTyiYJDPGobs1ReZzYsb4fyLeQL24GiucPgKcxF1zNCKKZxu9JKD8qfWm5ueazSpvdXax",
  "key9": "4znxPW7qaJJ8HMN71SaG9wiHvjBKQdTX2jTDz5kAshBjPQTD9NfPrPtms82s67Z8d6LzaQr61Zh1XTRruokqGrEe",
  "key10": "3KqDJevLdmpqU72mbc69d8exMQfoKq2rE2WADNsJkEGvyvNDdzrLMZQTZq41r3rXUBRWFw6AsqJYSmShfQp4zGx6",
  "key11": "2hNr5hYeHvjSvggFLTDWsmTdtG7CqYAaMVXN3niVt7t5qTdj6mtizyuq1y4fikwK1QFrRfYyWDx5LjMC1tDr63n4",
  "key12": "3rcYer7Tb5cFgXyrA1XggUt8tMu9obfa7oWnKEcqVRAPLVySWxRPf8wNY2yyPs1AreS1hySjQHY16jhd9t9yVhwG",
  "key13": "5xDraGvsD9gwU5ghgmEWPbxD1kuffpggKRQxz7D5MnR5vEjmzQBtAy4RtCZKLFw4CkRfHx8gnTn1GSA4NGaUw514",
  "key14": "34aNGxwa8hucvYpLC3MgQaQCoYWT6gqNq9WeTFDtPFEMMmwsRmX9k9uqSZc6pYUqn9Pe98JhHer3zLsbPBa4QxzR",
  "key15": "22rsLzVgbCLTYtaaSquyEjtCRAUGu6jariPXxrZYELuCn4CBNGSxCyrnFjpsmTQwXMGHPBoj4QZst3R1YV4niVmp",
  "key16": "3qh1xm2i7qy7d76tj25TcHn89wjwbnwnT56fFar4JwpsFiErzwdDc6gQeSUPpqBGPUHioPacTjgdBioapdFwraM3",
  "key17": "PmBaCLVmytTt4zHAwHwdpzvf626YJcwsobzipJeNAdRbjvrQXEn4FgcqJ2L8C5LKtWCMViV2E6iGTJDJQtvheHD",
  "key18": "2hux4e98jZ8MRnkhTW1bMQRpg8tfX3MtRwaYPWPuWiU8T2CgDbYAoUFDspb7LWWzUaw3NJudUrHtQK6L8BV7gjmo",
  "key19": "3PawSLYm2UocjpXLbo8rG1NGGxGd2cicvwA4h8a7BzswS5jz9MES8j9nqroVAqhQXbwYHtmFCvWrcwhYKcEfeei4",
  "key20": "4jEezCHb7Dh2m9ZJo142c6Wcdij9ELe3o8nkJ8Yvu1cm3JtDjPgCvXBo87F6p4BQiELDfcWinFomW99mS17EasqK",
  "key21": "5JXuWCjNoStqdKnNTyaQLp9NyKhnamaD7PneYewkJMGKWWreud6NY6zjR1pGx46X9FtQdzGKyWP7rzfUtuvQ1VQH",
  "key22": "5oNyDh4ByK3oxTYyQQeQZKarMphQ6tGHinPedu16NpoLdTkBL1fXyNFRVKvs9odJFjBSeU5jHLubNZyyg6CB4cGP",
  "key23": "4157a88ieSaxEHoWH3wgJokJFfJ5m2qPQBER4LKpsTVk9SmPRwPvh26NmRB74gETbWBGCkCiMcJ8SyKG8awWS6ob",
  "key24": "3cgwHq3r1owzdGxNVwkGPhSgx66hSUEZ6WpUT4uhFULj94cyhpDaPytV1tcitynZbzXxHdPmHk1gbUsGZeUHbtKx",
  "key25": "5rrfoCC34VD2zdnJuytt7KpFxyToi2aUmsG9asKXi4bcuPoZrKhA8TFJY2U9jsumAWqNsgq8DXehGEcSVzDExMgk",
  "key26": "4cNwTJuQkZPw3BYyKAXzby8pctvTnEVrnqpBzUw53K8rKpahu33ibdR2YP735NMrPZU4UmHfbrhdiuDUp5AZfsSF",
  "key27": "2QHLZWgZFc9D1w6QoEcF3VEW9zWTJmjKXpM3kUzFycMHxPWjKavnom2KoffngDer1npPiuKuvDRXPgfZ6PJUq2MA",
  "key28": "52wckVBbswCNZ9R18R4wok1Hdzgu5vpNVrT7vH8GcfhUjtsWut8wMWhbUM7LB3r48VKXdiACE4zH2krj2eh4xw2Z"
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
