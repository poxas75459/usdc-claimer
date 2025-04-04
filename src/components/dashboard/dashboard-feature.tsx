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
    "3gQVTeiSufLkvZjrnrB8nJLYpaWGnTGPYDhCer7xVk9MRkqihwGMFuXf38ArnNAeZvZ6zNRw2LfU2xwRLWJZasNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tDzq5DRDTaLtsvJPwSgTSWRYQpBcPQc5eVSxYAWVeYAegNNEXo2yhk8CDy1WdJu1XqKG1N7KAw7XTg2SmNpeNTF",
  "key1": "2iqEJwqduTtU7Ltrb1E7XiJHVu69Pb7RkVhV3JjFNdtf7FF8Jw3SrWXN9BkgQChmua2kKh6t2cZANY3TT5stv5y3",
  "key2": "5Q9yjh1S8abZTULrPuENrDeJgSw8YkSeEDv2gqfVD6zunSaEDGcDRX4dEEN9PizJC7MXKDNVDGqNEUGKR4UymvgX",
  "key3": "3V9teQpBYTiPxKdvq9yiPt9D1dJoNZmWACFKV2TrSoBrq7xSh5gmYSZn6SSTgDRZkdGZCNxEMjhRtXR7xg4NiWGa",
  "key4": "3qjF1uWYwR13QjDNMJJFWL3Kos6qAEhrH9ZVbFa4nANcu9NgUhY5M3zFXsA3SEyE1HtbBTc6JWZD4ECoufDxEiAm",
  "key5": "4RpzNXduEYZ2C1aEqiAornMDCJ6L5t4pPaSQpDiR8fc6UGDpvJdgnDQjG2vuJFycZpAGvSygiKMUM7thgm8DUHo",
  "key6": "4NsuPay5z52m7tisHA2Ry3Ab4mk1Fy9DdWadvJQzWPXovWSZ1f6efKYRGUkeKeKd1GdspspqtaEwFeaU4KQ21mZy",
  "key7": "57ThRVsMGuHhvhB12dPjDXWRXx2Gm6iuiczE8L2vNHzR7swYwVTHnxasJfCPCCYMCL9npoue6DbYFkJweEU4y4Nw",
  "key8": "FsyU6tknavaA4kJr58VijbD3bmTdRHULiV992AwGHHe3WshG3xh4US4yL3atkrQ5Y19CC9FEASfBkhR2FhCmtu6",
  "key9": "55Z9ZDosBKmBZX1AznEkHgTamoDuzBi5wMngzn3RyrYx44bP8Mt3z259RJ7spWmZjUjhxotTjRyqy2znauyup8gW",
  "key10": "KrJ8u8CghLdacSNKga8DpXwuc4GxZM6amCT5amtWZXYP5nS1wscPRNG8uU67qCvs1yP6prdmrgTRKKdcGeThsBZ",
  "key11": "2Vdc6qvLu1nEUBE4wsXMqRzKbSAr3HMzAjMSHcRPWaSRFScXgtns1Djdt2xiEQHCXKvHAPSsMDvrakhmnNFH5PGb",
  "key12": "5NfiEhfiA3z4pk81tiqfCvEgaxsPLSizUhCyjcfVrVJwQ9Z2v8rDgdjHmXDxQbKEqCaVtQSC47H9mr5exkkMAFED",
  "key13": "287JRytz5N5aBYqxHrRjn5AVHr6YqadKZHkvum5DRoBM7MNexmRUiFutLLeQ6fxQSN4yb4TS6si4eiLRggpuwNUf",
  "key14": "BBQTRcAoo1mQavEyzdopUCDP9XodLdWquh2HhpNKpZ6dndSxsMKwDtJxYtQ635nDoy1CE6R2RHcUuMqGy3a3EjD",
  "key15": "572YcKXos4YCqUVyWrb2K1ytFLCGcG2hcRS3LycTsVksXxUq2AguuSM7bjat6myz4QKotTcQXkceA1wZdUto7W1h",
  "key16": "2Tw8vAC6ud15DxY6JPh2UbtyHLhoQszeP5uCJws3rnPK92LkKfLLdshewa9GwiXg1rrmSc8sNC8cdLj7nBrc4WoA",
  "key17": "2XFqkQpsa1wQmFywPg3HEbeNCx1Ljzg7p4jDupfo5bDJA45QrfcVx58QjiWuWXo7ogmCCWnGowkqrntaXcCx9Mz5",
  "key18": "Kngcj7fFi2awNDC6uzgdRv1v9jUsuUycHiNTTTVFbPzAQjyzTS36RLS7AA2xsytXJAWzpNESbdb6vtAiit4XpCa",
  "key19": "5v6SQABtRdf99MdjWUwdhgNdrb4BmPZouPdfRhkaALhNFTWfQQn1QhnoyvJTAedw9ZENV7aiA78Qz9QDDXaB3KYh",
  "key20": "2vGD38P635bDwi2hzLfS3nB6Fs39N5rWfPbGjCKz5iUnKtcJtvwWhRWPnaUup6Caj9zkbttWCBVAH2ZhE1ryFubZ",
  "key21": "26VKVUhDwioNnYgFgHmhKXP3y6HD4Bw6k2eyDVEb243WbTniVVjDQ1cHeEAkrD5wMzda1DCYL3PWZnDC26ay93hd",
  "key22": "3NZYYfKRQvoB4vd8F4xwVdqaqFJ7bmhnAN3NarGpwew9N2egm1PLWCvQek2as5dDDAtVscEZfkNM6ixsim5JUadY",
  "key23": "4Nv999RTSBRknw8uP6hF9656XNtTH7hf4G3dVHXjrDTfVnCeaj3S5WqzSPHKan19jAzF53dq8kM7UjFfUyhH5Rds",
  "key24": "4kzYWQhf3FG9XbbBCrokXwLBkZB7DyLHeECFxKTFjYLKtNBHjznr2enLU74LbXbm4kbN2kMtv6L954W6JRpxCx4T",
  "key25": "3ZUYRJkaXXhhCZVxe6BLBK7ED5BuHNQgVMoZHwmhKPjEEGptbUq61yHpdcTveKupPvvsk5G2p9X6x5gHTgyYWQVd"
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
