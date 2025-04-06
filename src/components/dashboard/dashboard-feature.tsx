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
    "iuQwrkpn1N8wuQAobS7HHbwVFmrWiZUzTTFR7s2UfBF5Z5UzgSPBHBoxbkZ4LjFpkjhdaPG3rfa5TtW9mduoWED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jU3JFxZwkiu7rL377fDQVeRREDW73hhzT9yMwxiMrWTnrEfHEDKDmcuxD7n219HXsuEo4fvshjzPWqVgAjwNKgw",
  "key1": "25ASWUdGer8nf2fbHTT6svcsSwGPBt5b7Ef4sdKhcsPS7jRxrYnXnMqLSYc3tqEveCxCyk8UKg8JqSq7fyRAq8X1",
  "key2": "4oRPfnpLqDPvV8f9xS9L391CUQAW2V3UhBFzasmAsgGNJP9EFqczbTeYgAzNjwCv4Tn88qPsc5iNqfRh15ivRbZG",
  "key3": "4WUFG494mgR4KU777y8t6DUdzZAkh9X2UcBdtHB4jthyix8NYvMd5QDqfGEbv12g4byU3qSXusWThA2FwXf6Agfp",
  "key4": "5mB9bMQnFsEDRR8SbWZdiZg7gbKYFEehe66MRFnfpqWnuRAmMvkxtN9DiXiVszim1B4CTkwexk7PyWA5XJrt4Kui",
  "key5": "4fKs56XPxZNwfiVTEtqXTaSHSQ2X2jtefpnLwiuPFWGvks87UwmLrqwjkvKCvGNm322Xy2uurP4uwLAELDN6Qbga",
  "key6": "5Da8sQfjGiqDLDeQZCAP8sYWNtm7seDH88zrYgg4j7bp4vpjRb5LhRLfhykujZdPA6ugmFbP9yiRZzBFks3NAWfV",
  "key7": "5cNnXgpMsdJThNNxdB5U5bmJA68EZ61AqqjEMNXWCei6bjf7HZYnj6w89HCEz9HHWi9ymeruUpBRfo2CYdUKiPEt",
  "key8": "4FEosWzRRZ4H9JnqahjKnnindEfUwoa5pVu6ehj48yDb7EdT1DUudXHx32H95bxLXTqK8DUbKH8Qw3m1ZvMHmnfm",
  "key9": "2Y8Y6ncwkALqPruP9jzR2Z77YQxK85Pf5h5xFXG58tydNNoy7g7tMhnxFunhx9FixDt1wodPYH7ssd1aFVr38647",
  "key10": "4TCuR93LmyvxG6TAo1aaPWdcg3tmiNrrgx4keXbT5gqGHD7hynpVP5WmvVZEDBosYj1jWVuzd3XmtfGwNdQh23zh",
  "key11": "5Dpi5WMcvnxcj9gpQ5rQBEoS2Um8xNf5VenxAzSVCS62XopLZtkk9K6vKh2xEYww4ZCM9MZtZJoQUC4i9XJ7GoYX",
  "key12": "mBBco2GAm4cusj2QbKYHkx1rqwp6Wwao2c1oZGWyKnJ9cXiGrcjqJY88dJxwAc6oXUwZWcHWbx9vHfjGJcWxZTZ",
  "key13": "38P3SDQ42K9hpPNbvC8BPFcksFccUKNzYpDfZ2JoTEmfac2udXfa7bGmT8RnicmLU6exXSEGeNoezBB8J6v8Hpgs",
  "key14": "ucWUTZ9gNXpsBv5VRDfBfdCkKLb7VWPDuQXJipyd6jCL1Mcneg2JTxGxrZnMrdewjQ3mnLpWkRppCbfCYCg3E4E",
  "key15": "3KcUmHs1wP4PCftC6Vi1gBYspcmViXjnKQTXomBTripcBeihJzM3hmhPZNUCHJQXRWvZmQZzzcXaZSRXweLjbSQP",
  "key16": "56BkYrm7np3FdbcBLZJRuRAoGGdqwgpE1pHuLU4kPptG7rTDAKjUFFwfxdBcP7pSoZnrhh7ipbxa33xY1QZnFgVq",
  "key17": "45bZSv6MAeQ7dxP4RzrQ5RKjtyL9Dv1GV6aw5rpeLcBEo9Wsp671Rzqd2dP2wwexLQ7YiEjREU33Qbs1DMRSQ1ZA",
  "key18": "2NFKYNr9RdF25ECnicegJGL8NPR2mbZTsmJBKU57DY6D1y35vmzftvmsgZ4pzmnriucUEP52uBhmpuFz3Z4cThbQ",
  "key19": "4TnwG5Ddv5pp9t9kX5EAXkTk9TV2SJQbG6x1xcgSJ23DBpnjwmqKj4A6H52f6UHAmMMoA2GWBJpbezXT7tt44evr",
  "key20": "3yQTL9yWceE9kEdiav8k5qUx7riYKLN9UPsrw2vy6qq951hTfkxfokbioSgDmUvandS38pxsrRDM91uCm9PuE2mt",
  "key21": "4Y8X3Gfr9jbU1swFWgxhKUeHCvAj74jgb6uxTASsVMrFyaPVrkmEu5DdTLePmATfYxv8ZA8UgTCwYbDSpquTuxqj",
  "key22": "3g8XYiQLAUWVMXNwjC93FaeVi9FTWbykF7YKUSmW3MCpNnoMftE5gJtjQAson73vRvaKhQb5USWfHo2bHRbVVYz5",
  "key23": "4HQX3dPJ3DRFzfaTASL6q4FVxfnZeDgQzG9E97vUGTUrvTfSxrnz9DyxsPSqdnPCNWyvABZQrQxmBKhqqwyM2m7v",
  "key24": "5a8ex6FauB3fhUmc5r62oEJnUPPJkYe6QigUUHdtqwqD7YgAJD7MKe8e7pucEX7mT2YhyLwjVC4xegLz1Ye8TGam",
  "key25": "GGyZk7YxJxYkZMZ8z8LhKxJZSo5rtowd1E8iWuQHT9oA52BkmNWefnUFazv3enXGAHEu68SwodVRgVhaid7Gxf4",
  "key26": "348Sfu8dq88w5ceFGVBT1vArNEonjAA8nqXbuFbNTqNQZjzSjS7ZzacZddqMgxdXuSxpubrDvYztcDMHvLPrnjjL",
  "key27": "3mtTFBiYL2wRgWaE3EcBrRrwLdq6S75u3tEAdz6AHazuShFpTeRMn8VtJJDB4RXrPntxpTELwd1A8fNYJtsvpoZ3",
  "key28": "4nDbxanz7FeLM6j2QFCfDbS8XGgbWpijx8jiJpEmqe9ggC6Zd8RgQAtuyviPDgknDJc2gEKQ3EZjsVw2i6GA1Pde",
  "key29": "23v5LLG757SSfeajXJy5cmz6AbmKp3hKSXsGpc6qCU8gnSQaU6qUhznxHWpXuYp66cSC4Cme9errbMR8xwWVWoDX"
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
