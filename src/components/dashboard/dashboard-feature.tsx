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
    "L77CXqQEUBsa6yG7r6DSrsD6D886QW6jiNLGZrzXrXQS3LmTtCQZi6Ye6LyddorZgAuwTy5KfszeQPn9k4ipQar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48PopbWiP9gJC7otqPUH1jTe34qzy6hCt54AtVRzWnk36D4VCF9GNMiheSMHZkpDpyHGb6teo7aCuDyxjkYXdcid",
  "key1": "588pz77Suxxt3frcw7ygBEeBskB8eNPsJMHvWo2pWDMx3dC13ywuvttAEvbGtTeZQMVBJur5DsVhw5iXkFuPaXFd",
  "key2": "4vCvksagRbkK4uS2PKrmwHsKPvT1EXDVJsCjHPAKqVXDbg8dbBBo5JHKn9Z79CCgk1UgqwwYwpM89rGWQ9mquwPC",
  "key3": "2siv2ifNBRATLjitkRyK6zS9noHmdef5MS8dXFATDvRa23Ax1jWTQhwk17wxkk2e2JwEGp8unCeg17XBKk3wj328",
  "key4": "3CXy5XyW786wYTV6BHBXY4MQ66rgGiPjjtPSgecNszgPbWyvLWv3dHTghXzVfXaCS2iGGRFme6KNj85Tf44w5udB",
  "key5": "44KWttZuLBVLysBnBqZEqcxEcg5DraqsReAZoVKuCtbRUxkZcPaEaiGm3iFwPHxj11ARn3xH1c5XEYsMJ1ycXADS",
  "key6": "3acMhKJ11mRbXEw61xMGXoVo1k8tadtijdQ7b5J17zGRXTUoYr3Q2hZpnpW5hWkJw9xLk2PM4N7oh7PrqgTzLERm",
  "key7": "3nz1yyJuNy8eebiKwgfggxF694eRmnRtJLq4a2Npg1yy2VFGjd2BUHjPaSB7tEukDxwvwxcvimqzJj7p2kX6tE5Q",
  "key8": "59ihYXf7mHU885CaELm9ALSr3TTPuVpGgUhjj1XwHSWVbkTNCzHG4qPXLxbdTGqodFLBbshgsicwmngZojPW468S",
  "key9": "dLs9BndKfYs7JWg8q7rLzs6V4otqyhB4AqupDcevWMABy1Gefm8AciWeajvdpmUrPvxu2qmu7UUzEHnrmy3p8tQ",
  "key10": "3YgDGA1eFF5mCMa8UpZjaDGvgVik5GPYZLAU6cFGx53APcG2cZuQL4wDzkjSw71q8qtqzYshTpyqvxbMjmSeNgRs",
  "key11": "3dQwS6A9VR9JdAkdpAWNNFT6VTjo8gpvhDg7D53KzzeeDgkuV2bSZg7NTQkKoZ7mLkF9Rq6QUgM91L3x5wX9RNtd",
  "key12": "4AP8WnGcNT7Uo7GASsHKexWaBQYsK2m4BWMGUqAE8YwLgNxf1kDSdB54EJ4GfQvkoeZ4cd3bqRSuH2yBfdMtgRuR",
  "key13": "3D7S32NVSezd5AWYoai1vkDUAgHf5dWUjeFzp6oqdvtbuYxmFrKeijUeqF3ZoT7x3QT3Hnwn1dNAVvCsMd7qjLMN",
  "key14": "2AYmgiDrFrFEaVWnTsdfGjKiGeWREMoH3nNv3MiTMPRYLm7sBYJS6qnL1LCtE5FwcxwdrftgZhMJpvaaD6oNko8V",
  "key15": "3NwG8wRPC6RuWzLbW1NZKgFNAbuJkcHGQb13voXH83mDHnJxyJAjuCvRF4tNhrnbYiqzbCN1XZzQeA8pNhLRu22b",
  "key16": "4gRCi8D53RTFxv6BkTxkf31GYXg2hpVUjmHAB5nzu6M91WBhNHgTScBCchVqQX6c5gT5DTXcmrESfa1fbtphJYWA",
  "key17": "2KQT54NctD4sTNpSDGY516LWNDFX7iJdWXNVteh3UG6JofbHnq85EJRXMXCdjwAJi4ikhBGXfeGFHU4w8uLjdQkQ",
  "key18": "62BC4fE1xg22MCarSoz7CbnLbCrGx3yvd8N55gNMR6Vi2KYjGNhgfqEZ2zngF5QBUxgDhxVUv8wZAp1mXYG6PoTL",
  "key19": "5gMnsQe461Vp1y4bvHGs5N5yzU1TYvi9NFHUWpXQXVuSSwmH1xRpoTc9VVp56pvuWR6C69pgP4oFScK9dEVJZi2M",
  "key20": "5xyeeDPwveoru1prEyrQZ55V4zQryesPRbyNz4qvg5QPjjpd2n8bLj5KPULxW3YWhte9D3cYJB2Z35m9TsgJu17f",
  "key21": "2f4E9Qi8owaxfqg3n8weJRDDvmeQ3ms5fpkLNSZZejp3HE84rMH8d7orLr7AggGEqxa99rYZe9iHhAKYV7zQJWaD",
  "key22": "o5xqzkUZmBN9A2AseUtb31VZpw4fJFXgHmXweMwXZq32W5GgFcckJ2c4XBxuga5Mkh63fiJ2EQeusffKhR6hH9r",
  "key23": "5eWB28qwTetX743T9gw61QwScdxZ9igHC79qgJ1UmPj7Vc9xBpxmBPSCWugHNHSGhr1KVjStQowpTWx8X6VksUpR",
  "key24": "4yRQFkF8LVDhA1HLqgamzAk7emjY5ZzKu8hoJ8thSqXCNYZGVq9v4hDMwbHPfdFGuZEd2e6XLja7ydxuXYzLGF7G",
  "key25": "5qtLVXDMphrHLnCXzN7uTvVYDYzCM9p6DyM7ofX6yp353gHnSfmLJxHrJwyJ8daxC3UrmxeGd48A3DoxM9t2BTBA",
  "key26": "ZDxoJj1J3FL8jQKthtm588vrfFJKssj6MXCtBGafUyWctjH23BSi2jfYDjpEovtWk42Nyz5WknZqXyX8HYufkJu",
  "key27": "4459G8cn5tmBy6ToRnBfHnksXs3LJs47dphdtGS4jR5bV5JwWFDxdJiDBYQMPiWgLenSqn6yTEn7e3DPdRcjJRqp",
  "key28": "M37dPAoroBT6tSQRs1j6NNqBtoxvtNLG27jR4nWBMQ1Vuvuau1wDHB3sSzVusQiMHghGhfjPfMBCXyHAKmKqaW9",
  "key29": "2YHzwL6uSiHp7bEU71cihQ7GaRK6z3h3YBUbpuguKy7zCNSWC9m97a9PVF4KKonb94PQg4NnGK2URKniAuKpHmv9",
  "key30": "3hGzAqfyvL6NzAxRhqqv388x9FRqyLYQMjzFGG6ZHwuvtGANq83MLghvEAFaHamB6y1UX6cA5fPPQkFyXL62i9Lm",
  "key31": "CCQKk1UyEiKruBGTfvLmXyVsr6j1E38naAPQACP6uvt4HRY1nEPpEjjuJW5w6iAa5uPA2nZucanXWW2R2a7xLxz",
  "key32": "maKivGtd4PgKYH9U5iTU1wYVXmNp8S24k3hv8ccYByAoVv2ayfNfTMUF7aPPQPgKuJ5EoAvh6QM18pwW2GULC73",
  "key33": "2jVBqA3dUE5PfgnskqaYmcKjXoM4FUF76kqJSugmcNhVtMKhmDUyrbrXWs32ZLWNFpcSHDHXY9ELtgenxuVg6x9E",
  "key34": "2ZfdRWsZKYuJfUqxhdaBUFqkoPdoiHnbvsGzfWZdMy9GgFtudzSERusK5RfMmVPaHr4DX6974GQYUdop6Y6JguoP",
  "key35": "62nbbzVBVnwh83BsrUiQ7Td3a9u8nWoeqhGPv8krgWVo255iFEZuFgxkpYa9JJLGeZZpAXASJXrLazca8ivCXPaH",
  "key36": "3UsukvLnoG6abyM2qozs22wuwNDrp2EoCYbm3XZAwYZnfHV49wUH227w6Vij4C9x8zcBMMDwAa4Zg1bJmWduH4Bb",
  "key37": "5pG9psEuzuAFKKpqpaPAWriVhEMSwcVkUEh7rzbfD1x6pnJiRcEu4rMH9WfMGxHaoBbvbqxrUneMLcZNhH2SkYZ",
  "key38": "63ZX54dK8sSYNycbbZyid5vZP7D6amKxRvrB8rLdy3PvAHnNGfXUw8Qk3eXYsM44juEGZsxHnPhUrbMSbNgbUiVY"
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
