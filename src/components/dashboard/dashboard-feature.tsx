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
    "4ckoEssGRwwuTxiYSuPo3UwNqnJ9PXBavS7QvKtppYEXCjdA4KBrm6mxxLvQEjhoG1cF6HktL8xxpkh21qqPutA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ubFDQhDvtFZo7XXrNNkm2psGpYKptBbQYavnZdPygCyj3dAuNbH9FHWS7Ku9UL6zfGe21cJVHsiS3NqKkN3etg8",
  "key1": "2QnitbfRW9TjqvmwATenf3gSvj4gJUGaegHno8Af2i4V7PykcA9Nyd3ZkQGHZ4PxbpVHjJ4dVPwZYSLJPirssmyW",
  "key2": "37jrv5UShQWB21z39y49y2AvAfkygUiVu8PZEcTp1cmQMiRrJnWSDqADmo81VacyHDj2jngDDCPGsak6ozULNzjZ",
  "key3": "33CfGN2ipAoJEijvVMEbFzAWHkdZkvKq7PxfEipQDtG9vZEhnoujyswxWsVqmEvBx8xWvitTaL56WtwSEw5GxNuV",
  "key4": "5b65RxmXRTsvat4K5T2CDVaywpRYGexFgjFe7CK7fGyyCa5e5P8tmHy5FcDfwou5y5jbo7g9oHkMSq3c8Rnv2QPr",
  "key5": "rfW5PZuPx2SNiGZLPQRV5VAMBMqnaUqyneBkH8QkAkRc7h6JUFUqZhL2279Bj1vZcrL4uqfQDEs1xvwvtDkqYpC",
  "key6": "4uaBRr6vrXzqQcASeGWJaDEAsJKWjjjAE3WsBKiK8sJ2Mb3x5AHZFs6j69qkTPp6DEYuTpPwBGSKqcngogqcoypD",
  "key7": "3Qgt7S9unvKms2ZPdYSJxvCNTjsL8JcDuCkM3p3JSaAVdLV2x1EsG4vhze6QAG327hgaKCrmjU6xx8bC8CuQ4DjE",
  "key8": "46HMa7AVBAQLzuHTpZuE2EFqnZncAiwC2aP8Kz3y55wuTNDkB766YVXfe3sexX4eCAZuKtMP9WWNkGuSnvVaoiF7",
  "key9": "2MDJRs1e56A2uJT8PJ7KWbfwzt3UAqfdSVceqvRwKHfXx6SKTjb5iCv2NwNSxNGcvkALDWeEF2zrKYv9oEXty9Ci",
  "key10": "WyoDCZ2qFEJsPSTEz8H1KUd5excr2C84U9tfPrBZ13WfRvsTuxfnv2XRsA4ZbqZMNAuhSpPdu38tp4RzZ9irDde",
  "key11": "tMXEJazWwHgrv5rExM7hZWdcb4KZzaQZ61H6TsUdRbzGmy94KCa2dP4E9JmXUnqhbSnTjzTvjmqPjkDB37rS88v",
  "key12": "2NvXkWRP15L3PybvhmoHWgTod5mfFwbjHdL8i3Sse8VY6nSPEkc52ZuZYgC88iAAWA2S5KMLZpDsBShF6z7cCHtA",
  "key13": "3L5nhUC6Qr4AAdQjT1biFvpDFmEfNgwkQqatULicJsDHYMcn8uHyHQ4djyW7imtvE64NFhkB1YrPCLxc4wB7AKRd",
  "key14": "5J5723gUfKV4urxvUFtUUqoTH7TLMEnjLkPujF6Kc1cS7uKw4fWdLiaM3k29BzXRfb7Zccikp5GGAe3safbFgso3",
  "key15": "3NdtAEfQwf4dJ7UH8wEK2RqsDh7L5xe9C8n8UbAoJxM84r5ZgXMV17cq4XUz55wBTXCUkKZzRQJBzGWXRXACCRDo",
  "key16": "5dztsDXoWVoEwGSr6T3VsD5vxjjLooSxoNb61WgUjqp99VcXfaimb217AYYnHeDwjKKEpAAvQ6GE7QzoAwe6Qwig",
  "key17": "22gnwsTRxT9B8HQQbGzCicCfZSfPnP61Z3ZNoh8U6megapvWUhtao4L6qRbU2ZnMczHqYT4mAPajHXRK6nsdGvmZ",
  "key18": "pKK1zF7AN2czNcupN8BXodmhmNH1GncGmFUTJCum7YnCikvvLHQXT3MiChTe62G91ReMebdTN1R9w2mhsZfxosk",
  "key19": "62cnZGBQkhSerrx8VCMUnPmY6YJfp91PYJa16ssEyR77z5gCe3ea6TWEoKAnbP8WYAR9SYQQTQQXr6GSsvP2iySz",
  "key20": "4sxkLKkBxB4eRbjUnz91DCw9PVqJmzmFF1hKJDBqpFA6QzG9z7dV989D4GoW1mahJejpFy7BunmvaekFAojSyuKK",
  "key21": "27huBW2rWbNTDzg88145xiKzYQAnnFAL87PMoifNVKKzaj2AYRr3kTcEMpH4AvEdE88aG2Pfyps3w1UEr19YwKJ4",
  "key22": "4otaYiBBcgbv8FpQSHgKTngqNjA2VwNbZtSxDAmXELbP8zoTra1DpxcNodh9wbDz5MTFAKY1Dq43ufZ38bcZBAKT",
  "key23": "24x8oktRGMqgiyosYQV4v1x67XG2AaBEG9GakX49bvMyBTKE7A9XEGFbuCncLGwZ2oEtnozX8bTJqhPnjJZ8jqJv",
  "key24": "4qHA3CPgBtBKHrFK7FVtr8BV2wB9xvJittE8QqPvPHUaH5sEZy4mYd4jDYhTYrh62z1ZniS3pMu1PZJXmDD3AXRC",
  "key25": "2GbagnAAndHrj2cv4SxBimAZtjo69twuWjBtznvwxo6xt8HvUaEERBcgBy62xBHNU9zVVNb3cYsmEdQ3Z5jAzD9K",
  "key26": "67Ey5aAr4Mwkv2aKN9BKZBUaGEaAYSW4yg1KduUad95CBY6P5Lo7oQgaE6291fz8AupzwMGcTR7pe11vthBx3Tf",
  "key27": "31ucf4pDSRX2rKvzKKyEbGEAKkETAHCZRF2JRCfResMRkoZi1Pr6FvNfgH978M3TQtttsqLNv2c4HP1uHkV3FS1a",
  "key28": "Mwi7oJTM9pLZiukrhUmrd6AofrkyahKrXfox9VeX6HNfqupy2dYSSAVYdkncF35EUSPRwxsGLc34G4kmfgNj9KE",
  "key29": "4pNYXTaFoLsc5FsTa2Tf1c1pMbTv5M9J2WYFsR6V2L1poWqLA3AUDaoc8p8iptCAsx24T4uxMKD2cjyeGuR9mYfb",
  "key30": "3ZtS1ZA4ozz3ts9cLaVxCagqvCAudo9sHdefhz5KFrKytah8UvZgbtfpb56CqD7UBX46kmWrWn1CUx6jfQyZbiMV"
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
