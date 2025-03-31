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
    "3Z7u75gwLLD779REgzRZZGQjLwyAo9MF8TVZ4PGnx4tFADC4SzqcjoUxjVycPR4929KirVRZXzqm3PGm5VeLoqvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zU7e94kvYHyKuzpHps6MvuMs55NtrNfpTLxWp6jSsNwuBZgi476YmYb42HXEErt3MobhHUvNoTTzi4MQ8HLQY5X",
  "key1": "5K9cZWQ8Vr6h9QctSRqLinmUc3r6jREwtDCCWqpf8qQcTQRA3NLM71XYJ6UeDu5vRJYdF11ePHTM8bGKSrAco144",
  "key2": "5K5eBjpbBaBTzzC3q73taNU4jCzYFsEdRvRLZAmKxAZcEwdu47XTKxfoRjtjNqhC2U551nvh9TSWV6iy6TeHGpse",
  "key3": "5sCaxF83ToF6G6Uqkipa6c1RoTwavnF5oNrSTGAFnHm8kgqwfbs9GDeA7j7QdbNZ7vS2g61rqcug5PAF7Cp4dNKr",
  "key4": "5qgpZzu4zCD8vT6oYH5r9fD957T1uUXL1vPSjiXfNbsBKwYb9c5e8e7W4bWpGFmKfHPpVwWirLsdfNxLQLGUjb37",
  "key5": "4T1K6LQep4jMmVPmoPsrF11nfqdrHBg8D2Fiqy8FafNKvPSXYcyjZTJhm15P4U6WoeWouMHLqk34G3jSibVZBy7n",
  "key6": "4q9AGkz3viug7Fic5DzBtrw8uS7bQCRE5mTcV7QPQKH3qkjHgrSTbSzAn2H8xx455dR467Y8ihYP1Y6v8bbQ1EjT",
  "key7": "3pAdNKQERrMJ6uAwonqP7aVbk5Gj8yAoM4aK165x4HHJJ6tDJGfKcjearv9MRYtVWHBci6nixZ8xFGjxobFQLkxS",
  "key8": "5TNzWfPCRJcQPDvMyBzvPWC8i7h2zcizFpZhkdv3bcGxdNXKmGNw5Z2dKHcvy3ep3PbMFzq2uiqhbQjotpeunZZj",
  "key9": "32TyQLK6sRjFJvGTPYYNX9L4GDpjH1jxW2D8gytjmTEAQN733dsHXA4ZPm4WhzHRK4cFcDAgmzV7F4NEEbfkpVQj",
  "key10": "5fDJspRGCXECeDzcvjueedEMke6ux3DXuw3tj33SgbJ7hET8EoQzZu9AUQ7AzdKWzsyEGk5dvN5Um6Z71r42p5CM",
  "key11": "7DJAKFhusJNLe6KdorNADVgbD3tZ76UEtPeVwzaBbFFEynUmtcGM4NbMUwZCCTNB5WkY3xXVJf6XSYPg6ymHbZb",
  "key12": "2o6mMxvP9bfisD3DGh4dXW15XnbbjWakAkkgerpE8Fe7hRgib49tiBxiUSzh5YdBtByT6qRESjipEoVWk8Bf64Ry",
  "key13": "5tTD7ZJSBzSyockjqshUcb7HjpPKFDFbuj2VJZD4BpzPZArTmFCVC3wJkpGEQ3oYeSkpX9j7NtpjYPUHB9pGFA4v",
  "key14": "9X9QhcQCKs5BANgSmMqJLf4iqm7HP7VhrJTuS2dSM4Pgt6No6GwmnLTiawPBNhkoKfA6oKfVryNKFCvb94C6V3P",
  "key15": "hzEzEtNZs6kAvNNHxzkRbmV4d2LvywnYf1hqRfD5tzMRtNWhSdpAWo3FVj3xVEnzNs4j4p4w7uQA8eB1zymC8Xf",
  "key16": "4ZXBC8KdpEERJz6cU77cx74a3WJcoRv5cpWLHSWGKwBfPNGSGRQER2SGfiRX9hYwMtdGtYRk7WJzPfQ6NGzMtpbY",
  "key17": "WE2s1d4RUHPnwr2GnVvGToxZrQRAyRPcE2c5heqkVQTzo3dRMzPzZLbakMEEyKuA7tsTS4E4jXed6CWqZP3VpdP",
  "key18": "WTfZmZkVUDnWPhSw3jR8RDs5kdo9GZhtiQYSzBg5hPSoAYe1yA5XMD61ZSZxChdADaDhapqzrE2TgxXdcukAFyH",
  "key19": "38igDoSsPqz3Pxo6v5Ap8y6XGFL4ky1CvT5SqVwmYCNbXmBKvbDED2USNPCGcz8qvqomXSgKYZ2nJYQerCKyn6cn",
  "key20": "43J6gxDYHuNtRbZmApArc3Wvz81ctPYAVVyoMSTHc2bBqZPhd5Fpx7zrYegf4oPm6uP7WUAY8y3g1NaoN1h18Vtp",
  "key21": "xwXu7LCmPREesBgB3qSz8YLiTjva2PG3HwfLQpNJABSCKerzPW5vzdr1hNf5Jpq6yLNiYz3SKvMkKFcpKNk5K5w",
  "key22": "2NkYXwTKhjm79eBsibgA1FeHMd8rg6PhjebFX3xxoLBqhcyvDjLuPch1vsiBW39Xm5Y4J1pJNFPFxXv4v1dqfvoE",
  "key23": "2CSvUtD5zXj9Wyd1WYzQiJvTbatKfrebrvgcwiqa9T2PnuVV2dz3tEs3NpEqtVX8SiFz2DR4VhJRkhvF4GYv1Szu",
  "key24": "26n21YKGG7JjVVMyWMuzH4a6nG5JBjSiddqE5B3aejvmA4urJBuS8zGUSZEibr1D8HpdDTT6SQwkQk2WBHRSub7T",
  "key25": "53ajt8SpSKh6RzGMDXd1Rkk4YJwELEbhVDRs32K33uN9mmKUBY71jHcYaaiPZHVKfUeDSWSt5uezMYyTYoYpXrCH",
  "key26": "4pADiZfkspxm6eBVUuS9ud4CwYLkhay4V82drNc5UmQ7swBSEU7uQgrVatU8G3FFJFvLbu4vaAZhS2KR33vxpWLP",
  "key27": "2BEfePdEijZo7bppi6FhEYFASW4idYNpxsoK7Kt2vDLfyiHDHLLzQKf7oHrDD4jGBoXWAVhi1Km9Wuz7ai4VTJ8n"
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
