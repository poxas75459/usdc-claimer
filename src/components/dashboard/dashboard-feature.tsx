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
    "2qNzC1wYgMwV4wbTvMdVqei7tDpew1w2gSS1qMSNVMxGbi7upgTqxJGbe8o5aryyKvtz1bKGVnbykRKsXCckFJpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nZxoitoHBbooxzsz3u4jCsUHgGxhoHzDVzT4U1aQQAh1jC7YiphYPaShqfSTtnV4LQ2rrASinwURgdxiMjZ78zG",
  "key1": "5AudRxkMDY9e9xE8Nn1jbaAAG1xj9ygdoPvD7bZBECVLC5V93ffcFd4jtoWdpChP53h1fcX3NucKU6eB9nx5RTYT",
  "key2": "3mxJuFJZYLph6Z8xGrk9u29r8Kzgr8phwr877xrY84UkABzKtuVdkoSUQCabse1wptaub4KhqvukmzX2q8AtXvpC",
  "key3": "4CEepttrudviWcx8UsGVXLRFChYbC6YhLCdowNRNnfyjsbUx31Z87PS96k33JNS5eGGP4ZV1JKvni5QRzd13Z5yA",
  "key4": "29kZVF7ffH2McuCmQ9z9tAMrwk6wFcxrxuSrE2jf6PcVTMZEi7Ys8eCFer1W3SjuWTAbtByanF4PAcLnS8addN48",
  "key5": "5v1JAznobBEWqUWc7YMyC1kMkU2DKYp13c7sTsZNw3Hr51D2jMezY171HBeemi99LLuAkXYXrECZpQ6qYm5TCrg6",
  "key6": "HkMajDuWzS16svR5K2Hqyod19cbWjtwcygeuEEyFX6bomNZyJJhJComyCGZRQC29TJgRqbDAuC4Hw3kZm8u3t1j",
  "key7": "5EBS7VWby6RDpzZ2vUcgJwK3ewJeTG8EfvSR9rsh8RHpjgzVMJX333ThZMPSHuUGN2yaPTvf9VYVNcskUPHxo62i",
  "key8": "2GB8Pdbmrs22Qr4jBLEVtyzr5jc82BTog5R2HHydk7bUqawF6BHo4padndwXUfc57FjGgeKbU5kp4CbLEn2wFEEa",
  "key9": "67bNBtMdrGCjL5nJGcyuKLmN2hjr5KXLXJvvkYhCvd8csXKwFZ7h1A6aiEZXSfK1wAMXVwJuVNB4JkUzBvRyx8Da",
  "key10": "48vqZzoqLvFXKrUGG3U7qw2tgCp9omzKn1DdokG4cnCa1x3KESJG49oFMTn1cJZrgCNdxHYD8vKnnZQ3ghevsxqH",
  "key11": "2YPTnisoHNmZTcYYXkC18yiV1sQEgz4xrRebX2ZWRdmDN9xPTqBRLNWwtJZ3tvst6XJphLGoa8zQUbqPG8ByGJKW",
  "key12": "44MEPTGeaujjBoBqeoFjM2b153DcAE2vpYVzYFAX3YEzaZ12AHZfe3mdVu1BdMHW5QnU53HHgRyfXxnosMThYBM9",
  "key13": "5pa3v3rCUg4wFLsmLejiT7MrZV2kBFuLaryJbNomFc6dFfj1uztSq5eyW6S3zKuDrbvd2Jz2gNNzKHCsEURZMDYn",
  "key14": "qRdkLdfZay4b1YxwGtowdy8jDHQc4xiW6CU7n35vjgYttu9Xa4LHMQfNjnrJfoMpvmAyxUiWj3LSCtwDPZ1hA4Q",
  "key15": "2icugvFkqurRasuQhCwciwPVf58CavqTYp1mKAkXVuCSTx3nRtyY7qUTcZcN8ZW21HMCS88Zxy3wKLxFFKj8LQJq",
  "key16": "4CgJdjiprLj3ZuX3nr8KeAA6qtJv5KqC55SSDkwoSe84UwYG2YwWMWANdjkdERvdHdwCyrxFrQp9DDgWfZN2Z2T",
  "key17": "32vLYXpaoxYngvsAV7LvdK13rYuNe4SdyH4ecuHjft7cqahH4dbajWByGxeCYX5ke88i5K8PfrMgA6zV1f7dVKbJ",
  "key18": "2yQukgoDLzQhJNsgE13RXs9bJ5TQNHdFghpjaVforJFF1ZawqS4vkj9pyK4gzg32q9R7UiQTdV14wVML61uWXWQJ",
  "key19": "JTyzyb7fCb4NmhWTiVZy7DFWwoCTDc6D7B8evdi8CxvdQoEfFToTJY77S6YfUStYCXBJqwzbj3NiHm74iCyAJa8",
  "key20": "25VGbrG4t3rXmXapPcMMW8Rfqy5jethhc1JgRvaQUk16E5kexgzXv82YH2XcVDZ5cXx4JuJ97dh9fQAijZPSN5Y5",
  "key21": "52eSQTdtRqWrAxBrTZ2Y8bWYGv5NBcZSdjQhigRGF8Qy4xBS5xszc4HWAjXduu6Zp1ieBM2ActoFNzGZH2UJDjjF",
  "key22": "4MNhMS9uDyPDQEf762AyZk3sqmGTjCPsReWuxP4YA18UvDNQJWcgEZ7yqRHUviGKuU5jnUHXZprY5ELuARrEeavR",
  "key23": "43RnVDGFqHyjFkF5nWvuvyXcqxcUH1kcLq1LMd3bHmQX3tNcwz7JsbEbh8MM2TpLTJTCtzU3eDgKjZigH4joxdcq",
  "key24": "3J95oB4X84g23H4PCAcDpmEpdo82Lixs6qDcDXph4hpQEDZ7HDTzHu7aSvxCYLatfdnTLKxGc2SMKf11xMJg9fES",
  "key25": "55tDXZWBWwLscjCAjoiM1ThRwd2kpbvrAFTEUrcHn8SrPeZfKxq8qJRTtiTrBZQkGLDrgiEzNB5NqUNArguCzJ41",
  "key26": "3YY3FiwzwM4c2FJhGYXVjQxqcLkwYiTuJgtvnsbgcqYWVP7DWLjUnhaQxZ3o8UrwxMxxiEztFawLBdstQeWa8jfZ",
  "key27": "5Gu15TW3KFZqb9FcVQBy7Ln64RuK6kvZKShzoYsDJsLABQNN5YeRxEykVpWccHXRPy6TwBNXwau2UemgGYmzHdzz",
  "key28": "5nAZKEu5Sudavqde8oUgPwbojvbE4btKZwDS2efWtwbi4mfU4NfjYPNuXDH2aibE1hA34xSQqaVcUcsMyCXb5LUT",
  "key29": "3cvopGkJ3qKgfjpBNZz95nU6ZCDv68cZfyF1uks4MgwLxANSsVwn2xCMkUPUA7HgmneahowX1Lq9FiCZpwVXZsZJ",
  "key30": "4gjimQ6M4SETPa85dbst8G3uHdF461jA9TrKuY4oDqC31ddqWT4ETMor6RUAoJpArkML548zhm2Bud81zCJwtBUD",
  "key31": "Qjg7EEu657bFvQmz4M5Tu3nVSKMgwGiy76rS732NYK5xMLPqAf3wLE9W7GzgrZ5t34WviH5pCGtaqa9z6saEAzV",
  "key32": "5HSKX4VdTtWgSJGgsVyyxPZ6hWaLGm8PssYx7XbhMgYdp6gjCcKVGbLHCN11rT94zpLnWFmnpJHQHn1Zm3gKz2w8",
  "key33": "5tLgeNQS6D3ZocksmhCBWkYJPjRnHkmcrTESSeNN9p6bdVW3v5ka61borYr2DSQ7C6SxpXeWc5wNnzG1BRDn1gG1"
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
