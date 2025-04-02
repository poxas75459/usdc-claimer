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
    "65pvH3stLLn4eWoQir6nhPUhw11z2u21R8j1W1ZA77yJziiA5VJJj4g42mEVWkoGZR6DWJKtcspcR84NaCMtHXU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aqiqUoXGf6pR9jvu4Q4yXGqKNUjeFbpYXSHKoYjt89gi3Wp3qopF1Fk7Ajcf6ovAHeT7WFqWthciyRTchivLVJb",
  "key1": "5eRumPSNpCAnRVxmiZs1Z6uBXLJmRE5MxZ2jUYex2XKWz1T72qdeyTdESUVe7jdazEw3gX5EcG8igKX3pcZSw7t7",
  "key2": "4CRE29frBJgiDJ6CZWYuARodedPRyB4K9ub6BdkHR5maCTrzHeFmG7orD1kV9j5wcmzadQzavW6EJMBgqPsn8ABD",
  "key3": "3E3kZT72V7L3LUoEmLqRLZytKfxokccgK4CVRVjDUs7Kxc8UD8tyMM7t1dvBmrxzWBVSzzXHPyhjRU9x3GMSzi6u",
  "key4": "X6ZExpW7Ed4qa5Gd9q9W1Dvehx9vJBftpMcMAqtFcDuiCDE1M1PvUYr5QZ41ugmYzFnSBCqRbkgMXtpWeimv6Wb",
  "key5": "3gPKnYWWqB17GxqKS8gpNRGZeav7avXaaLP7sxWTEjcgUhNMT5ZCm3n4BcXcsYsgjMaKXsmUuE5HT7Gh7T3Pz69m",
  "key6": "2qhU9gvvJUDzv9bX85a9RUdRW2Qj4N7yEbrkyXinNdKdBekHkbtoz8mvFJWxcGRtow8LYjGSGqisXJe97v4By54T",
  "key7": "4Amo8VNhmdNeaYd3BGYXfMDzzHcHxc1AX55993FEJtQEmPCvbJiuMhSwduLiPZ5YYm2zSkyBCzApTTeD3P5qDjek",
  "key8": "4RZTGRNev3iWw6sUSJf7bTk3cbfZbYwXU53FnNf6ZAr8ibtH54pGLp7NsdmZZC974zHWMDqUn2rn7YdUAmu5BWn7",
  "key9": "34h2NXk1TVP1yNYqfjkAuBwiUZWGmQLhqxA4kVBxihEPk873oXAGFBc9cQrjiJHJYcdrvDvKqMbT9WERp2sfdTZ8",
  "key10": "3qiGpNirA6qe7a3ZzPBtwS8LxnzZ7b982nTJzPCMVt3vR3TSemBgzHHxiztVLFVPbeDr76V9jQCHMuVQyKDumyJ",
  "key11": "2eq1rBFEmicXpi97bonKsQpeTS1EAfqwAvNB9ysmhM9fv6XnzaRgv6P9vMJqGto8PkBdFhwV9Mn458Mr8Va6WcXi",
  "key12": "CHD2w5Mgj4uXhHc5UYYSJHpFHvMUGtNtdgeW5G3pRa64p96abp3GCufWPfepctdue6WtpUZpJKHFF2LSmoFf7vP",
  "key13": "fXtduApxUyGqxBqi4pqpT7pF93hZFvbA2KUcMENmtp5Ci6RPYdP7prCT4wUHuC7WZL7xRwGy2wupmoHWFnKY9aL",
  "key14": "2n8gxWwsdSRY8kUUWUb5atL2tss43895MtnXNnqSaCmHP71KbNAPm9NixPJcehMmkmtnEKE6QN8dar81RK5hNSF9",
  "key15": "2AuhfcywdJGEW1D9YrBc8GASPVoPSQLMjMU3c5swX5UpT3JtcYxxfTKmaXuEAGpB9mn3CuytBEg2DfKQ8MZC2aJ2",
  "key16": "3RpX4BFx4vVEkC4bp8bF8KRXYDHMtrFbBMDjL85gitx5pREet56ahab4owSPB2nhr1iMyZSb3vAwur1cRodxzvaE",
  "key17": "3bskNJWdxU2ZU3kMmLQPiFeLBrUQgev4uJ7nzT7nweqriYmKBdk4v3UmdJYwoZxzDMQaMcqBpJbjWxTqmgbL25u",
  "key18": "2gge8U7qQfMeGTo4Y4WsMTP2RpsQnhJg2oL1qu4RG3E3Z6u7mEH5UNng8EDP2fh5PMXHkXoWR9wSz8Njg5moiok3",
  "key19": "5jTsE3EifhhyRt2Dsah7M8sFLghPHGwCcU3hZDgtb9EPKMunQz2TbvBVeGaGMY8YV3uWHpt15DDjTtdSBoeNkB4C",
  "key20": "4cBU6kd91jEkuhRKKNbT3ua3bA4ukfSapiSu3XYxcbwVwU72SuKucU7ChuJBY16DgeSxytCTgaaF8ExBHgfZxKQe",
  "key21": "5bWDAJA4s5GK88S3aq2YuUdAjpCnx5w9GMGucYzhdgpc4cQCNUb9vy8HNoGKWQhZWHvJPJ45KuPH4tR2psr6iMRH",
  "key22": "hnUS8wSVF9FiFKNeamKBGF3atKf9NAnTRxw6HrLXTzxiGJJnT1EmdYwvrBaa3V8zzLf6Ey1vnufDsSbZtiXfuzB",
  "key23": "44QUXw2v6dgvd8HvL47mRQkyaHFzxdPxEtadRzza6ZrQZ5Dob8JiMJrmSSCwiAEButYB6rQJN4Rdp5MSg5zoKmXJ",
  "key24": "5Uu8CXinBqKTnz6FpmoRkNWuJwhn6XGg3e9cC6JDfMJpJyHMbRZ5R6YWE8VmjPXFgJk7z1UVNJZb7U7vxUEEXUkB",
  "key25": "678PNV1qFWJiFJRKjk3NL5cnEK4iGYydd99kJ2pdD46kWabVJBKF6ekkaQsSEge1NCY46n4LdrtFV5ksuYvjtidy",
  "key26": "5aThpB2rYgRXaVuKPYHammdGFrxWa2RtcJftSVBiqmQJDuvyHEGFrWCf1smxhJ7UYNYk8nGCZyHSoP2nJVrNNkxq",
  "key27": "38HUo3a4hB28JegCC3WRZkS4FfWzdWRAwiduX1NRLZgAEnGEEMBbL6ioJAj1zicjCxAFXU9G5mKgnXxXcttHetTw",
  "key28": "tYRGBVYAN1qNWXR1xSL6g9yYks4cjWR1LVgMRdYfxsjmsHX1rGrFUbYDyozm7ocSDcKZ8DQTL1SW3r8ZUayi9mv",
  "key29": "4zgx2SLKJvtvdWZvr1rCU4c745NjXaT19C8xncAJ8r9cjzx8uKyybveYqzFZgR6gBMnCqBXNeQfZuAdbF1a48eXP",
  "key30": "s65V1Ua29CCKsmDsaATCuX8XEbet2yoPuD33tVTjPdg8sbRim37kJxEC6taJd63DxvkNSLf2SZoQk6Ert5GpHAa",
  "key31": "4e58hMQdDLsfpxo6GhffGuv54GrXxFcd6BGxCq8LHLe5zMGw5YN5vDRN7dCunJgd2jWEbx9hi6D3DauRUq5QrxCo",
  "key32": "3KxgWfwpKwmJNv1nvZWRW3mXujazxxVZG1AddxHhkGLoZc7daDHScwq8ShGVLMTZRoXgetPGUEcQCTTsPJVJi6k",
  "key33": "U4YvXuzmYycDU6Kn7NDDRysbomvai95TdosquChg9LCBsJt3gdtQtwAk7yiLXe1xwpFf6RD7zsejdyoFwXYXdVQ",
  "key34": "3NZJCR6WfRrkwLngJpsEySVedNUpDMJBznu1YVZYqR12B8E2ZNnHLUPm3jsQbSjyukUCmmdEVuufXG2QufN4ok5z",
  "key35": "4v41sd5DmPhD6gRoG4UshNHQ6MUcKPcGJMdCdGzYEUnH6L3pguKm1xVFM2YcQpzFrtL2CcRBvZ2PngRs8T6TVZxk"
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
