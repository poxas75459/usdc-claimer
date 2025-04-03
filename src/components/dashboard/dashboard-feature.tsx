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
    "5RAw2oETUUqZ7EPsTaBoGpMZ85RjwsQM69b3qxtLPZ6QAGpGSgKPDYh5X8tGw8oJzjFytaDwuiSKiN4LGX43h8Ef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24h4gj98kEZ3G9ELJ74xp3VTSEAy1vML1pDps5AeVs62GUDLwp545H6Fq6TKZu2YkXSVHBNYpS5L8orJYoN5kSF1",
  "key1": "3WDwUvh5gWKE6u3CUjjcLhAm8SFEheA8wkNZBoGFThcUdRCgUFqgSYUXCKGbH6FaCqadyzzrBA6LmEvrkWEorXp1",
  "key2": "b2dKfZJT891RHYjWmREyYJDhueit4YZCM2SGweRfQpqKxado9WEQy8xDNZDz3ysYto84yDWKVifoBkBSvYooJKQ",
  "key3": "5y1pwZNUBwEcmk23mRq6txKLDtcf9bVAeCsUJZxuNNsAe4piNenYL8mZGPkhLEyQYy9b8rPb7XxYDSqr6qVmAyUH",
  "key4": "28baXHNZYBKnu4US7YukzjHwyCuFtKE8WgekSiRJUf8m9LNevvJXHRrVPnCCPGyqGukBA8JPJPk8oZsXxEjSeX9T",
  "key5": "E2o4Js5VrcoWc8k92nd7hoFVFZhiB7j1gSEh1WYmtTbDnvjm1EpUyXBaRd2brEo6HHyryTRFEaEi2AeKTUUchKm",
  "key6": "4ZvQisVo49VpaFmeo3EfwTekdAoXnWYC57qDYeM7WNdkzvbzubLGor3U1ECjXc6tJmWJPTzSJSPq9VFL9MWkMhBE",
  "key7": "656jKfb6zqu235JAJNqVU4P1wqmr4giPMTSrRXt4r39YwgB2eB4ys4dwpJAgNi8Q3AFtDMjRQStzEhava2iRHXG4",
  "key8": "3cb2Vy2VqLEqKAP8ssjqdC2J1QA6hooWHzQMNzPWjfd1iWHtFkWpAX3sjLEpE4NSCkZvZsvnbrit8LXYk6k9WpJH",
  "key9": "35PcZEDfe9iqM9KWNNe24a1tHgizrc47PzcRSjbgWoE5eb9dLPtJ3toa1uSVunodH3FZeN5Jtykiefzo7FqvzqUy",
  "key10": "3DRNj6CBKMduaFbjtKaffACMjqi2K221R6iDBJ6KceCZMbKA2i2ZEq2D7QDwMvMiZtpd2mngoaHEz8SSS98RCmT2",
  "key11": "5FZX5tZkWtDiV7H5sxVBRQ7JRcCUjmEh7fJpim3DzbCGgKT5Pg67cMjWsDRhkbJQRLcZcDCnofGu8orvkBeFrvoJ",
  "key12": "2Kjs8aHPK5WYNi3XEWzcBHvSzDmNfHCGR8LkvdGZUTAoRcHSXS1pqSZWgxEvGXWufCYrozfkSZAUCYkZg54e3fBj",
  "key13": "yErRJoBx8MJs4gRGUgLciLe7MwsbEKRwYnmwSdKog6duQxCv3XZ4yTGkdq3cC3noPMPxTEWLgDxiNpqsYmHVaDJ",
  "key14": "3HuVxrcpgMbBRP8xTzkQ5cw3DPqaWQXi7YBjzsLANZFP2i91yFpXuJq9yRrfyUo1hVs3TL152TUsWQHypDJ1x1pg",
  "key15": "57my94q2eFq5rhM7Fw3UK6JtZzoGipF99CLEFBAth2ZwmSRLiWNVyoELpLHASEcHS8WVMQVkHiTapayWvScHBDut",
  "key16": "Ed8QgPxMyz5QtUYGysRcpNVonzPjzYFjVdgQiq9wFpf7jEXKqcix46YMRAwh34i8kUbKatj2pM1wpsAnf4FKYme",
  "key17": "4nRA8pJkLtqw2jYW8V5mgCecCU2zejWcvKr7bgRw18J8f4pWGVz8V8Y2kVoUPU24i4SW3ZGkrjdC3MTDHep4Qz2o",
  "key18": "457Tr4oxJrvjWSd6BX1j9y8gZTtKR16WP8WvrMp1QHKm1gSKGs6XQrjgbtsCzbaLgHAgovVoEgs3YgVnV4TxnsKJ",
  "key19": "3geFzisxhK8oviJPCSAMFHtxuVfHj6ezyjqCjJbEJbmjt1iyoRYTdi33mNmG6twE7U1eeMWjHSxR5YaBFnMk3J9r",
  "key20": "5DVcBAY4vPgyCi6Z117MZKrpA4x7AevB7G5KdrTogLFsDqdWe5aaa5EosRkA25tLCFVcg87biRQrsU7EZQvKHCbN",
  "key21": "5zcgiVEZNXeZfrpvfNtHBu1RyhVvVkBDcFFTtiKWVgadXu7ATya4CX7UsNDjg77sF2N2SyozHtqKz7hkeCmpCjK3",
  "key22": "2ay8DukGn5WspSph8ufzLumMJrKiqKvLoPohhkiFbyept57NFycW24o9bxfhGBAyttzMVWumt8WAjT8mNMvCG3Ry",
  "key23": "43846bTraLeSTmohk7XsCsYgVtYE6LhXwc7dun8oENEJeSjbVTDNctsYxyKwXr3SxVd3UUBWixNRMgeqFybveYb9",
  "key24": "4Y6qre2Mt61L6L9aRWq1VCZhhfkwxUEjXEYrsgLVa318FAttAaz3ce6df1TpN2naSSyYPGNdNVehN1LVhbRdPjs3",
  "key25": "3TqZ6yQaVapPa2d3uYELepU1wJN2FeAVtLvRXXfjP82c9m7N87NKhgdx1usAmNuVqkXYrXFPVEucBgihhzU4kpq8",
  "key26": "5oj5SbYAqrcbJZfSuxidV2Ymhmby8pLr8bKAVXL86mcExN6NTXFVZvQBTgJ1JrhAV7RFUbswgDcywhNuZ6NxSNJS",
  "key27": "2L62PYtmf2hS3cweWdo1uRa3o4PCMHoeY4Cqhj5TJxxJFcisnXchX6ZXYDWQLKMBKx2xXrwUXDsj176XEsKFrSLE",
  "key28": "5HtiHY88NQ7vLdubfu2tbjVduw6XRcD9bWPQXtUFrHdWeKb3RAvAEV3og97UJKyecyeeKMo64s85TcDHBH6NN2Xh",
  "key29": "2xJfnrkdXKAi64Lz2rdAswrR5xtkxuiB8DEUoyHV2DgUuJy6V9u9kAjwMFz2KxFfemMm6nxEZukCn7tUoKEQtQwc",
  "key30": "3kLR7PwZJfrLc1cPAUctCz6KHeQoXwCpsz8Ji5up44mWGZ5j1YKtoaKb9TJoKhc11MMY2JcLknfM1nr4s3AzeA3x"
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
