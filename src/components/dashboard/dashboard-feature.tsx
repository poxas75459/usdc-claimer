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
    "kBpPLFs7sbhxrhdWfarwZiRxUhepDzPS1LN56YRAwqWGBAeofiSBiiYA7oTVtJPqGMiDAqAQGuQLrXjpXHRDYiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X3L7sT9zunSGcpabqCDhL1BFqXxgNXF5fPrhcNuaAJuSG1QqT4LYQigakBH4ATZKvyPiCA9jGZPgnJisSxNrm9D",
  "key1": "ePjtzqC5R9r43VqmoCF1szJ6eodHM4L1yYNXu9bPphwFBZybqBozKCzfVE8jL6ryxGt69qTSAAqx9UAkBEJxHLw",
  "key2": "4CdDWV17WqSv5o4G5r6vCwH5ArNTs9AXLvpbXif47ga9kpcQoMHd2MfDbsK8pWBTDiGU8qnzu1nmww6rneeBwSSx",
  "key3": "3cJ8kh6MMUSS4mW1zMhaXwcZEc6CGzeQrLvAvCCS7KjMQBxB5T9untJVJbwAwKjUjnoXNteijzdQUn1Y3Ty1yfEi",
  "key4": "HHzTzQ3o9G4rHDf2t2kaERMk8FLPWDbizZfSdpw7zanXktYSFT6a8YzuNtU9rSLjtbEhqZi9vbrXsqRAebP3ECq",
  "key5": "3d4Lxx3NEy4YTcKaXfizj3ZZb3ryddoc1fsP7FHeZvi3UapathaezE3FjQgd96ydSVFBaMpbprnJ79ofdmbgVaNE",
  "key6": "3iBkhSfVZFuWakyFqohC52kAjt4uVW6VeWQATm7rJraomgveK7ev2WFLCNVpEGiyp1RVmjLooZY5QfPoLHYNzjWJ",
  "key7": "4Q9316uQ2qbqekgcYBR5wEMc3ER99WpmF7JmTzRn6yy9FesW2mSN7nAB95zNjqKxr8az6zLNXhVF97fDifHZgyto",
  "key8": "4jDT5eg2MC8Zqsnd52paJ22XDp24mXdVUzRMyGyouwjFA4iNp5DJZs6x8i7Qo8auhSyS2PUDixR6id4fqMRJubW",
  "key9": "286cMhh1oz3q5Pjhavk9F4TxvvUhsTcbdpY2EjP2awjZ2RZL94V62xeXLHhLU1o2X7QzkYVRGtWBzPs9TkpQzUBC",
  "key10": "3WtYVtz9EvmqTLQUekhdvEwAHH1KioD2Qa85EWQZketcxKKXcpkAFpnxJ8tzLjado2tS8gjDv4DrCSyHC7Z9CXqB",
  "key11": "WBaSUGxTD8NG6jAYnQFmz7TRF2CLdY8LabPjFycKTvHLzwcXNCQeauZbzErbVxev8VMqU3NsH5YTZr1V1mKtQRE",
  "key12": "Dtu2xgEXJeAsSUTeSzXTM2AWBWTke5BWJ27zCwwDfYffD8aqXvMAmRNK8uyV1WWYPnjeyxJYwSWzpL8X5QKbvPu",
  "key13": "4uLdPkJdbakdH4pExruWidSgm8kng3Lg6xMXapH5ozcLgnMtWdVnU1kj3NS2EWQED4NfZ1tNnTKYassqy25YiMtt",
  "key14": "4wubJKDDjEjEHkiVnqknLXanSQR1Jti2DcxTPSKtvhgmEMZJLR8nuuEDbsVRKyjSZjuLxUFaFiuiPVoqHMGGwPQt",
  "key15": "53BQnL2VcPmykB1B4x5gp72aYwhzJYuRpRZcgM1uxtcBoR7kZmdD1RyX3Ngg1UKfuy8Z3MGviLxKijbUbQXd6io3",
  "key16": "4sswi5zXj5TqnUi5g5rMxEPao8d2q1XBk1cgaKwQBqpEkdBC2adxgohQhYysySFDKFw1M2ZU6vs9B9pPJtrD1dxs",
  "key17": "4zVDi1s3DhYhkBxKbzUyjDpDWEtp6X1uu1RSKxxk1iJNRHD7wMhqyGVF2KQJSUJ8FyQJmXTtm4BNUzqAMjzbQyTv",
  "key18": "47Lue4QGES1FhXJSRyUnHUGFHinsgizfGUSYXiKFRnj5qDKdm6rL8aSz2HeKAWPt4JzCzxAfvKgsYeUyMbs3x7HV",
  "key19": "63zj85mhELnzkbQ1P2ADELs5m9kwKwdKH6k6fc8kRVchSiyGcSJ4wzouCsZH5ELJvUafp5zMHo6QQomHP6sDu6fA",
  "key20": "26QERifnpWZntjCKJdWdjR4ZEEgmQJABVs92UKvnuaxbCmh6PTAtqMqS6Ktics9LxQZnodTsUrkK6zCdF8X8XdmX",
  "key21": "4o75VGh4CrmoFZRHoHoUHGyyvwjSMUP1j7eM4uLq4Ffd9K8KY8dSth3AfwC2Fvgq9b3HVrzUfreE7bTcHQEVRGmu",
  "key22": "3H9XfbNBmATCEZZGSpu7zPWvehf3RLAqad9aREFXdc3YQBngGbmDYGJXiBna86XBNB8jZpmFJo3Tj5WZbc1V2c2Y",
  "key23": "3u9YLwoFsS8cnzptmPBiU3XfjdD1VTspDwXnmeV8W3m5ykpoMe2bYxrY9PR6MXo7xXzvyLJxP3LzJsn9gnJ4PFJB",
  "key24": "3EFmsGHgehYbcDBKiSAWxCsq4WSpnH2FWmb1sDmooYzMpymgHK5EcqLr5sp3s5MbVhh96NEg1yQJfpykeHYiqk6h",
  "key25": "3CW23i4aGV3vcRkY54iiicBwzrPS2fqBxnkAGmbjmdGbnhcGsHWYDprZ6DfKiwBPxGvrKAcBogPo4owGCwauuA54",
  "key26": "qjJQsCfy8qyn3pPWGCrKmL7qJYAHHhTqkHLzBoeSVWFAUoWYfXNGPAxuZu1wUDG3KTrPAxMRxTgN7q1pwHJ4zqp",
  "key27": "2ppsxZJEsgvKsvtjQB8kTyemwGw1jaWKBpxTVwXXeKfuDRufUGfkPx51Zut12eyHBnQHtN6ytBFoaUn34Wx1tXUb",
  "key28": "346kLhN8rF5CoWTLg1vPNzdYJvpYSSkZaMGUWWjFW4ftMyrhDdpUxCeDaMd6HesE2RQ1HB2f7VAqA3S3RF7z9XMo",
  "key29": "4tJ1hYqY22UHHZjJJLzYzpftK47dE5KZp5U5udxoQeSxFykPgmTR6jy8sG9W6MLjhSL5WbAuzXFRc9wCECnN1Gu5",
  "key30": "5HcLufWLVo3ojF7scSCQUv2LfLQftPNvAfxFZhvRqMUaNs8FYrpyo5CQbq6qM6RxPYnUsgTjazZFJNBty5VVUeX",
  "key31": "37dXrg1VCbGnDZmh4Efa8RDboUWbM7GpfBMwHxtRxdHDrJTTNv5LkRtKv7SAJhSeTPdhKSeMz5MjhKGCQyNoNoWB",
  "key32": "4DqwAdKUTcKBfUPCB3XhKsXNV4566jVkoWxy1NjwUWPTZgrEaNLKsN3viAHBMm3pfxW74p6fHbUvFS5UCmKcEkyg",
  "key33": "5cMUnJJwqCXDGe91G8C4ap4eAW7QN7HTdAx88vFfw2NXEVFiPqkqNfhbG9iWxZv8o3Wkdj1rBJsmYLPgZWcBjjtw",
  "key34": "XtdmhWXZmsXKqmjwHnYawDwB6eR3CWuFt3dP9mFC1ua83GoqHP2BbFZAbxnmJvxbcry6HbdZovJRXZvQGxmEdun"
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
