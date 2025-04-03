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
    "3KrR9mVYVYznFR9B594RvhUjKrRWQ2GA91anfkshp3zhSHS5HzakNLV6zaQWQVPqpfrgaEe6JE1rbVUzcCKCeUi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KbTvT6VUxARKL5oUaVPYWjokt5y2KkgtfRwmDMyVQTd4LKvUDsW2zdVEKe6wbFHjyzmDKS33pTDANAktxWvobWB",
  "key1": "5jy6T8356wFvg8frbnHQxEN2hMnqqduqqZG56wqGUbE6A1pGgXv22wjGL1JBgHKzu1zDTRVaZ2vKDKKvbHmEvzLB",
  "key2": "2RoDCJg68UaEGuH8YB7LAewPFT9WrM3Q79VN22mBeKEm4ZbCimsSH7oWA4PD5Y4xPdoG7dA5J4JXYhce8bSVg9R2",
  "key3": "4UHqeE3fLetiDV9tR2GN3SN2Sz5wucsSZnjxcBwpzzcsa8LdrXvCBnyR8kvvNH9V7gCQjitBm9d1AHsPt6wZ78Fw",
  "key4": "5xYFXAiToYGzpDvJKZ5vkL7JzpAWqqNhaHWksRFVgfrUaMnah6Sj9Kc5tVtAN9tqPsvkxEoMbV7pkkKdekbDHuBB",
  "key5": "HVyTtWcjkVFuZjtawVvEYuHBJvx2ZHgvU754wJ144mb4hGm1MjmV5uysCbz8CAmVsx9PvfsS52Cy43edpZGFe1s",
  "key6": "MfzDdqEfS3UWDU6RqUz7UurqHY7oAYz2A81KgFuNJvKZgb4FdXjKRjpekDsMBhX593fpZcFU6Pffv4WWiGp4Gbq",
  "key7": "3fL6GFqrHeKhcnJwbvozZS4vdb6ggP8WoLa22WgXGW52SKAd4eF4bsTS2mXTgU2GrTqx6KrH6atfBj7Z8c8mzBAq",
  "key8": "dTZPvvG7QzTbv2FAdqDtWVeyuHFejisDPpcXX5qENf7PjB9xKcxYYfjjHaWjdDGQzeUAoHGWhbidSxbGjpCDKhc",
  "key9": "54wBXb3DVYkf8CuXVCRTA4nE1bE7WyvRaiL9q7LMpKwChYs1iYtzJX1dH5piZKot2xXs6YqZJZ7yhKwChiiZHFUf",
  "key10": "98iLXzSb5vhBpAVKRH2FEUxMuiwAtYf1hcziAUVKyseCrXSTuWhoL7LnYmxD61aSaPLAerLCXhkE55HGUmfKsBF",
  "key11": "9FrUrwhcXuwMPvPQ9qNaASnwX9jTkUiRgnMiLpQ9Bjf48C4dnXSbr2iVQs1FtodiKsab7ZPksBWdH5Y8pEXYitA",
  "key12": "33vK996hyoCuELVzA1FT4zxNrd8xxz3dWSd2nVdLWrEnh9cSwDdwHN2Ka4aWQa4dz5E1Cw5cJBpn8NUcSmYZp4Nd",
  "key13": "kzJCnuHvq1Y9VMjkxzK1vQRYdkp1RKJWUNhnpxhGJ1572h8DpLD5rQvAzN5CxPw6mHkHbkYKvEePVsSSQP454r6",
  "key14": "4137LZNj4yZGwBj9AkTYkjkVZNyzTUk3hqECTExGuzdCqBP57dv5Vf2UzBW2pn2X67GHdXjpNJNVFanSRDSyyPGU",
  "key15": "fCE2GnKGjqgknXn8nD8rRk4B3kSWG4P2ocyAiktBNzfFxctQPXLmMMrpXyrzUAxnN4YEeBAhrSJUxfZqsrCaxaT",
  "key16": "wfiGyxr5uZTdvF7t3h3FGU8eMu151L2RbbUDL7FymTPkPjz2aBzCiiaFPspbc715Rjx1RRafkGLpxAuMjjCKgVN",
  "key17": "4WeLMWDyZ3S8thK8eic8NQoP5SNWesHqLRri46NtQtbt2gp5uEfW7qJV5pMrDF26W6fb4fa9EXsaT3Vn2AceJX9t",
  "key18": "5eW6qqWgHDrKvdoEaUoGtydz6Z6qxh7dM5cUwydFqCKKHjwPSqEd3uGyV6VbyQzyvGrY4SFUiG44zRBdKYaBoR8d",
  "key19": "4nsMgZrbwSrG8ai5GATQyoms6Bc6JdGPGMdG2P3iEorQKXN6GRLqrdN2ZV9EkJfb9fByYuoWGLTgaCVkQJ5V4GYH",
  "key20": "2rgwrVbby39MmjdRxoJAWSb6W77e29arQrpLuX4wnPWKHB2A9B41AydCJSeJbiDpWj7oRsf45k5A3k8QJCSaD9SU",
  "key21": "3inspS5378HMQThz8K7h1EXi9px2BkVuU57fpHgfprYk4TJAUJpE2GMuXtAp3gCZmFv3ANXfpUqLQjahD63pWFVD",
  "key22": "jt8ffwABVPCwJN7VSZFdrpTzu9UeHX2DwaCLK25TiXtjCA1Z3QnPjDPwCrx4J6axNiXUHoZqyCAvD7zLTcjrnnj",
  "key23": "4PKc9gbtGRrVeJzSh8WooZVb88nYbgb4aKhwwfuZ1uHUBVx25g1ppf7NxPWSAH33YUNDKGyGaYpBPW2SHHVfAUkT",
  "key24": "5i7kg3QwtytYp6Aa5EjHfmFhFgWYgfo2Q1JiLTPGa9meztUAEWAjc698JyP4Qy6STBvE9bhNUKoMvoecu6WB1CnK",
  "key25": "3ao6aquftD5j9cH6t7Byni2YgvyCe8TQY1sS8R7pkgPktQ2tTyjBkqivnNuyp7oe6Cgmdb5e5WSeyHYuzW5LuroU",
  "key26": "JDvKztPiGqneMaJkjo8eH9br4wxxognKb1AWd9EwDKKHKfYftmhnJJB4FvimKmDMtk83AFRUHD4BkgFnChuXqav",
  "key27": "2emDfc9YgKZVq3N56BxWSDLA9ojZzVQMXC4D4pPsgrM7g6SrCjMqvXyU87zeZaiYerELEHhftKi5i5X2WveS8X95",
  "key28": "34CDxownwWeNDKSfCvyKBFuf2C7EYXSm1HSmZG9Zbmx2yynNyrttiYRe3tdVvdhNRK5zpxCN9256fAARxYsT3tnc",
  "key29": "4TknbGZtJimVr27mVJDCc95CiXomYuHazh78hTwEsVopKNcnTtHqwpHqXRKKjt2Z4ah4trKNrSQAsftJ36GaykqK",
  "key30": "2XGeCsTTGnEJpYtMDUPkYkFxxBE2xGxLqaTDsHJDQQTrRa6ZEKyao51NMWdstZXMLjnqNBrr6WpDWyHYMcqjzs61"
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
