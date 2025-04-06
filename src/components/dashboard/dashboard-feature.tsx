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
    "4Eg2A19dqqp8e7EKTNWfzDLha94kQ9CsU7T7bwTje6Ngev5PGmgAmxe3yXBYVVdNZfJWnLKpAYJjqTWwFBYxVbt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49zDbTv2c2zRnw2Bx2AtHoYz6JGq5LhsFHPddeiNuJ1VHoxHS7LR6GT1vN14zhiRfNUXEdp6Z9z6qp6qzZ1deT8e",
  "key1": "3bBLBUeXWyUE83wCvyeBxdW4WNJm5YAWnaf2XR9KQvRmstUqfQRVs7gwMTsj11nLx2M6mtqr1dqcXmsFCprNYDpC",
  "key2": "2qbYzqkwDuab7kWXjZzfUAkG1V6fD7itZtbW92cFJRryJJFZQ5dprUFHrf6kef2np78UJz9uJYy9pxKrkmh9FGkr",
  "key3": "4LKwaWMRiYApNaUhEx5QjwRTNbNZzHUbyj2mqER2NXdxeLuZgj9qNNhKnouDqcfWsYFi8G1AQm2hUZsrjwQ2sVYw",
  "key4": "4buRVyTuCXrE9favLPRschmgZYKB7LQH5r4zLCnpUN1WvAhmXSVPVkUxjkpzmzQzXS47Boq89cp8GbfyAe2onoyn",
  "key5": "67PG3BR53vvqfRvPYXEqP3ernMGyFbALRjC2cVjaBwZmMM2FtqNPaktrr4eTATteNGAEax8LVZ6kp4JtDFDdokps",
  "key6": "Wu3EUsQnpixAqbMkZaHbq4PcKdbCfetnmyWLrid57L6ZkeGXLbpGoEF3dtzKyXutKpVvymmL4Gzcyjgsfc1hTYq",
  "key7": "QqNYArHzZKSfx6t3c8DqbofSAr9JH3p331yTQ7HiP8eDXQcFwmxWjcpMuSBMYeYBHjd2K1GWxp2jq87u7CcK458",
  "key8": "4xCCJcWBj5NkkFahTDnwA3fTxNsFH81mNFm5vyzts31myKqCUC1XNJrJ8SknvR6v4VefNaAbzxywMiGuTGCbNTo2",
  "key9": "3HsTmw7nSPzuougV2Reg7VKmu2jp545t76hkT1YC8Wf7AE7ahbVMmfR7oVnWkga2fWMam61ENpm9GeyaLFseQ9dy",
  "key10": "57tsf7qMgp3wizDUELjiP61fBjCnuE9PFfbAnqvT3c2nLKVDJN8eiHczQVssZuT58J7hgAw7eJKymLpDZsPNwczV",
  "key11": "46grC7QMAVw3mDYDpH8hk7MtDSxKAGp7DLLwp9my49qNoWgTaBqeV2YQvHyFr8wyvdjCLVr9dBwgoqB98BCkdKc3",
  "key12": "5FdvoXkDi5P1kEEBt1mjDuHPDyECofkjDupqXZvXgjsz1iMg7uKyRrfXWZtKZoK2Fc83W9tGPtRgohRBr99LQifs",
  "key13": "3EwtaXY8H1aN1MmWzWRFKkXw2QkimtZhUtg43yHbSCDyjGGzEmZE9CeF83EsfY8yHqkfjwE5r2sJnQ7LuJ5yC7Z4",
  "key14": "3sDAcMZJ4XuUwpPe4Ahn28hzPySdUkgZGYoLCiy2QU4E8HZPBd6yX3caubV2yNA2zjHL2218zfvQkGvB3PntPNkc",
  "key15": "3toUz2CdYYJW9WPqJaLN4wdfDup8M8pDbJvymc2AsVne35ks6J7pN7GBYZnkRfT1hiPEVhCbkweDEELTwMVuER5H",
  "key16": "U11z1xcoZ9MDggvRCiTjTEayvuL4L1Jz36GFax9MKD3dSb7wh9U6mfwXS7k6N39v5uvT6CWatcW8uCMRrhrfepN",
  "key17": "BA4jeMo2jVbSVoEuZ7WPZNoohZHHdNaPFKkWe8Tj5ZSoFzZeF87GAHtpxUo2VJssncyYcM1YHX9mt4xSJr6TR4N",
  "key18": "DB23KGK9JANPnAHjPU7uUxF6TxT3w3r2MmRn8vZWDsvYKbJ9ymzCSBnLdww5LfLLgMvQuATf3UhBZMfYcm5xMXh",
  "key19": "5H7NbanxPuz9JgtJQ8h7ExG8QdhafMjD99jD6Hb4JawV3XkXY1e2Xm7zjagYHvVcoT5G8ErsdmELss4cLbG1qCtg",
  "key20": "3Htc9j4kLKBT4yd5o1cuJD1CV4mRaUBCXVkCv9RchdwVQdfGi6QmpB87RjGivvS4G8RBCWoTEatNS7gThPTfMy8W",
  "key21": "33Hi4uMQxDiYGd1eQS4iUsSKup42fVRbPMRDq2aXopeA6K3P6mJi6whmQpoTQuFU5AQ26tXxBKJ3g6eEUEyUEmeV",
  "key22": "5gvUpQgQVRcteMDkYqtD9VS4PeFFanGPtzhLxMKbW8UDPGMPrHxHbNWvmNGWmdX7w5izBrYyTVV2QEEZn7b5ta5D",
  "key23": "53PygS9vj8TzEBSatma3yozr4zPrMdWkG17z4yAJ5kXDDjp6wjyABGpv7DCjquBbr2gAmwV5NUCNAaEiXnKwkcHZ",
  "key24": "FYZNxvuazoX2yYQpCbUeJKK4fAd2aStKjaTm7YaX6EK7fiqMCuuPJhNoLdha2NBijSAcUapepyrCgnGujsVzdRA",
  "key25": "2ZcQgsYkva5uugaHy63ZxNo9pzqFKqT9Ja21R26PXn6KytUDdkBxJgPCKHwACRv3kMQZLoB2sZbYyWuHV3GXFjiY",
  "key26": "4h6Qz8rWeYkvT38auY3YLMiNfF31pnXn3u6cDyN7h5KV89HP3GpQT8d3DwPQewkAsTUYSCg3oDSRWDaTwtTDbE37",
  "key27": "5WNCpUjzwXCtooB5wsV8DHW9TJCRutRMeJA4VsQjtJpRbY8ucfnPdhsZHXMvVXdAFVaR2nNYGVaZKTicQUkqBmmh",
  "key28": "3196Z5jTb2qsxeYnnq5sLmoZLPk96tH9SRLHmNCw3AkXc84j7CkT5MALXfPDPtHSm7LaSkGXnidMCjwZremQC7P3",
  "key29": "65eRWLqKaHprKsZkrD5yLNb2UtuEMCNLaPbuCD2by4TeMsGv6Gf7xidaV22ArgHAEVBESWfc9oozN94wvWBnbjqV",
  "key30": "75rYNdTnvidJGcMGFQsgdw33BrT7JJ4VE9BJPFw4u5AY81qKLMuSP5u1ziDpizP6xVhiXPnfSXrc4iocgV7YFHd"
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
