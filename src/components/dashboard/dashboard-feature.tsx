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
    "4TGzLGG6mJckFNhi8vyVNwoGbQ9Gqg78NSbLzRuzgb23V9WLE5eBzok1LwDomQ1ADZyPRavn4UodWNNTxbmH7Qup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qeQSSvKyNgpHab6JqsyYwsbVydYXs6AGtSJpuT4JB8wFdT1qQC6bELqAKXVJqvJw2YguJe6AkfW66YYi9AHesGX",
  "key1": "31FKk79B1zdb7E7jHprfcG3KagbWeRPfhx4CfMsC1qjTtAUHhN8DYeFQynsnkB5NCGXH6vpD1LDcijtnWKFbqUYb",
  "key2": "4LWRNcbsUMzsTT9bWp7xTz96wtKvAJiwUDxpfAwYc1KZeGHQ1TiXmeCop8QwKJrvLgZuUGZMadCRneRabeUS1AhP",
  "key3": "25gej1ktmRibTcTZS6H6rFJxe5dmEjyi3QCXFfPTofBsagmABghAjXqarwYSWuA1juVj6WSH22ttMy9PY2GCmZfV",
  "key4": "3d1NuV4LABzMbg9yQNtgR7FsPu8o1tNrPxwHaGKehvFp2EBmoDcaVzu8P2PKAdNMHN1PWybVta5zuhKD5LQSdxwc",
  "key5": "39uD8r6HyMKCtjXQ6BVair5G5urHWY5u8ZDcSgE9Xt2AKEoj92TtQRUuWSKtex1resgmt9cm7sfAtcki9ZuukcLN",
  "key6": "22p8f73bnqyxwWKHAFq5CCrYnXjV7jpPoRGfHAcKTtkvsT9LJ6jVSuUGdbzx4FKyrZ1amY1FZyKBw1B2bexv19PW",
  "key7": "voV3tGQwFr7s8cDcqP89bRVrysQw23wjjKXaqkbouX13EMnHg7aGjGY3ZGkLb1AWr2gQ3LcnPHPPVXctyDTL1Tp",
  "key8": "2osfTcM8Ty9YkJyuP3UvXJdiwYcajjm8P22gvU26TSbrj3FcJR2peBhPuYuWXompC4C2MmxksqsHwNx2vjG15xHE",
  "key9": "67MmB5hfhoGmbjRYMds3tP5QwB57iySR3M2aVFQeMAtLggsKgqUUjFy5TUyia5Yhggshysfmfv3u9byUpMs3ugLQ",
  "key10": "54uWE1dfwep9LDJkoX3F6YaMg3UPAaTGN4zSGutzJin2H3vsdeVRPVTaq7xx1nppGnbMqyVmaez3PgcYY8S8BKq3",
  "key11": "5Dwm3fxUG44EGYVMc1mNhyttzjMpt1gywKakWLK8PM8AjQneamd75XBp54qDrykSBi3EmCnUbF1tmLYJZz2x1Qgd",
  "key12": "dVRPyJ2KnjEQjfG9VrFuKPqHeH56stHsJKgP2imqomEkMskkzYn6Y7xoBWfAV5v1R3UWqW3n4QgxDBPsCVFE44U",
  "key13": "2Kabd5zBDf5pvMJymiRxVj8cY3MJCdVxMBQsGZGZ3tmrXu52khVYgoPxvkB6bsRtcBMC4oE1BghKRQ6TUqvtNoXi",
  "key14": "5maV2SSQLdx7QjJzEaEDBF46WVdou33GdLzBNbj6xUR3VC8s2hCfaJhRKGkr24Eim81RHJyPCbkeyZhQrdJYKPcb",
  "key15": "4nEbrdh37g4EnSj1vzWjGDUouq7zKZfFyxdW5qzw2YMpZYLPDR42mMfEt1hK1zgtyCxgS6Mt2vUc7L9XcwnyNftb",
  "key16": "cfWnGds2Q6YArycRwxxerAUdmWy6qc51AxXeHZo1N6m8EUxNmAyy4kFvynf4GuFs9Yn3vzAr32dFQfj2Hyh7brQ",
  "key17": "3FTYXqBz9KxeQaDQokqyUMmQey3w2pL69rBA3t2GFm8uDjCh1QwvwYXCkLrqpavFVqd3kSuVaEZVpG3hMbc3a5yL",
  "key18": "2rrtmsWr4MpUN4vptcysHf9ws2hBiwpZQxCCoPsic9izQ7pgvEcHjMV8KDNcPTDrecimHBcEc3uEQY5wothom4B8",
  "key19": "2SJzj5kFDq6U3Xvk6snyifwJWhVaV52ZX6dzzcv4g8oHB8QBQ4bKMSMS2yCVe29KhsWYd4exCFv1Mye9NzCg8tx8",
  "key20": "5ebQoWMRR2hpeKF9ydCLJqjninJHFq9kXuc319bevLJyNsKbrXpbMSpANtEaNhuyra27oSfEjAd8tSTcNX9zo3LG",
  "key21": "55rmtaaCtFbRaehQ3Dj468WELyqmSAxfNucjWrBTz7qxUzwQPk3cuaKdvGGX2CJ1ZfRPzejrzieexcHCJMveghp2",
  "key22": "2PJsQmaxKgLvj6ZEfh9EccMjeTFmwYAy9aj5qWvKLwJWcP9xrzBPZiuWAYB8doYMJjFbdjVg9awoggu4RdAM76Qz",
  "key23": "2vmUmHmi2aRx4nUbFmMy8AwtvbaQJqskS18egdrcPFTrZCRRWhAmviWoAjRx7W3o6q3P6HxrSFfS75uZUXmzJVPp",
  "key24": "25nxJvyEQWB7opT61U5JFzXCnHKjJiTQaT61nHyMiGiUSf1h76pRNwvmiDmUQwsAZzT5ozNg6JWEUFYcApMBgPPo",
  "key25": "2xHozJeVrtdw65Td3GCSqQNu1VMb3qdrMeDe4fbd9q2WVHUmZuwVvb3FH6kqnuYd81RKGGKLUDmTYUQdnpSFBMZN",
  "key26": "4ZkP2fCYqVBAZLe9cMjdJ34AvhAjCZ7wHea4DXoAyMRxcmB14ybrLDGp8pKqDMh26J635i9am1FQ7VR4W13iwC67",
  "key27": "5Sd3pSLwk3zV1RrSGn5KrQNryv9rMhdtVML5AoqxM8NNHk6XDu7wLHFqb38C1GznuGdMmeaCy5xostFVg8V5oJvS"
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
