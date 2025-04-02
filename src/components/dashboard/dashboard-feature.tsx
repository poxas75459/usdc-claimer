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
    "2C2RVQFM2qAAZAdoRhgRWyA5j8JUhbk5k6MhCtPRUn2HyKi9bdLjTdcL97Gd1dQGCDLK76Umz4kMjaHfsQfhsNrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7dxDFALj3K662PZXzm81oY57DffBsepw1cts2pjNPPRyUzjMvP3hLYxctB1KsEsFUwZPcNUwt4ZYn37BEjc21cE",
  "key1": "4Emhk7LuAxXhL1N1MVFRR9o43ud1ZBR2uPfKcYPSTPmPXm8Z4jL2Uws9RAX9gzmpddQtGA8Ugpc46nWZSFxqcep2",
  "key2": "4SFL7Cz7WtsQn2eXJsUBmGXDvTsYwGHnQioQDbzxTvj2izo9zTGnDe8nemugkDX8cjznPzffyoiwqGq3Jx7tGshz",
  "key3": "3QawTEzeiYHobBbfmhdxogJ5YY4U9imxn15KiRwcxwVkX8HfShtFUC86MMdEssLJaqbeZk67M7e8x6UdRXNCcFNB",
  "key4": "4NgWFjDxpmaNoMccBGEGrzXvd2VKGhPoSDUqu4UGLBttsF1Rn2j8cJPp4sHbjRNqmjKZ1mwrohjDA2kjoJGE1fNn",
  "key5": "3CLUxQj598zLjRNUzG4yXU1UUFE8TcDMHiXWzDQXjkaDL3kFXAqbTiQRqkgwVJSTdaVLJ28VekD8NzRF6jndHjEb",
  "key6": "4kErJGrEajKhB4C5rK5VDEBvR2kMXEQcrp9ZT3Ce3d92yJEWkcukJnVp1KHoi4v3TD1ioANRg21rUC4k2vDwkFjX",
  "key7": "5LWiKuY33bNopcEBxpdxeYtXcCybbD3yrLCmchKA8WEFR7uKuXsFYcNc5Y6FoYbMD4L9EgTrAfkfo5Xa4r7jppwL",
  "key8": "5952mxyuB2V8ECBvMUmEtiqmiMtjXZTwKbYuhdUbDPtyRJ5AHPkiTMBM8iU7vwVa9rkM4AAHusbkn7gdNqbSAq78",
  "key9": "5GaYKWYFm7qTerxSxPRuydjppqSnCfRstJ62EZBzq4m3FtD8ZeK2KyVC378ChKiuQY1gg9ZTvPv4jxx8YJqUKDpw",
  "key10": "3acMFZjgN3CTtjU1zVaUw27SuPWbAHV26QVHNPpN9GD1Rg4TtYC5kf3D3mTVawf2m5xJ4Qf1bS7VsdSSmyA4nAwF",
  "key11": "61bYjdwds14Pcqtfz3bJHhFPvBEZA1vqZAdgLEALPD46p2Bqm1HYxSpgKgLquvoHPFw2BBCStmn3C4bYxbZ4HQzd",
  "key12": "3ZCxj2RMDLXEwZpUNjVp1D94kEPXATb58WNLK4pup4nfuDXfSCa69MKhvZKRaCZ4TYzUBqMCZwVZpUBkY3z4gZuq",
  "key13": "25NHqJh8gQFgBUdM8pQ9FkhwaWbajGyr8z4tEZQcLaRSsquUeRXR7YziG859DXo89PUVmNQQbv5fVKbGkhNrTRPL",
  "key14": "2bufLRSKKm1uYoYJgz3jD6bFsEAD6KSsQAho7jQgehRKH1T2zSj5xMHhcbtVZzJgCUPr9agxbmz9hWHzmZbFx7P1",
  "key15": "3Wm8pqkXrkPCq4FRAbsUYMNy7fWoLn8HUm5u7Qr1hDFNisbjx4CukJPe1oRhgmTNe2RkBgNxM2kVZYmGbHium6wR",
  "key16": "5fdS1JrmQr8Qye9SmUpgWE5DZb98E3Vi4auMrBfPtP3GzKcqMeSUL3mbrJivZBDxwddiTPz9CqCsPkePerM69UD7",
  "key17": "j5mC4UUEBeDEnytNn19kT4EhcwAwE9qwGtBPWUghw4964tv3j2WPx7Rg2jQRPNgo8RDrEHTsqDZTGhL7Ji1h12D",
  "key18": "4V5Gyua6MEDh4VUJMgVtfy8Ysbwe8khBqXazDGPY73o98oXBiFvx9MKPDMZTz1vLERv9FGz1QSQWAavsa4VRNQ9f",
  "key19": "3LH2xVCnnjifd9aQmceiLRSFCXKjmZs87uV1KtM7nRqmguYunK6nWS9Q3ddqxcqBNjTLLMHLPwzV3o4phKScueN2",
  "key20": "4vmbQU8u7FWjX1WKThav6RwsQyKrfQgFeMuNMBkLT2E441KtApSep78WZR9NMDgYyVWg8fUFxnjPjuBqAawkxRuw",
  "key21": "2Vy4QrDD1edF89LdRSbED8qT3MkSWPVKdVy27ntFCvV1FhYyMvQPP6EPKmokR7jP2T4kQTYdipYxuRNcgMDRvtkw",
  "key22": "3x68SUuxRA8sKTCzL2U4NrsmeFrqDxyB1tzkrsDopioPUeHmViANyBGevjauaGxqRh1ZUz234fKQmGS5PveqMNZe",
  "key23": "3iBmq9tGTJjAuKykVUiJP2Zis4qTLTZg4rJprRPkGRDrEFnTYubb42ZXrpUtvJouuVTUWXMY3b2DE56PXdsj2Eix",
  "key24": "4AHrAf1iQo7GYVefUTPMHV3qRCL1Hm8Wt9zqwaZwy5SPgAZV6BSMVHgDwUF4Hu4XTQWN4avHZXedDhEzx7rt8tR1",
  "key25": "5M5EPk4HEGmghiGcaJjASSeiC5tpSkpanHNit8bnBytQ1ahPeD6dr7jXVrh3YvnYgfYcMSPfi9GacS4ME3iDw9Rn",
  "key26": "tDRvWGdSKSN8Q53pwTLG2KkyHCxryNq4uFGPReJupJxw9ZWaLvWx5jNdiRqBkUsfFuo4wpoztHBuCxjpe3VbqyN",
  "key27": "2qcXNyPFYYuVqMpy866mCAJEYEUStsE9tYJhH3Usyvqb1JSWRabo1syHBJ5UjQpHrTtniKwRePpKYd4AhKMFZiFo",
  "key28": "5quA9pi7Fxu4QsE6smkqYYrw5nwdBc5UdqP8tC8E3biNNGkZjbiBheAV2frUE81hRHwWQFN8LYXWikwAfnBt9oM4",
  "key29": "3jJ4MqWCTzcBqoZzJEdnhStN638XPKn1AZ9s6UW81VaX1mWzNmu3DvHimsHgnP6ukARyK31bfdk6dcfvH4RCjUpu",
  "key30": "5r6JjwhwK1vnLVRsECEKbrW6P6AmanNuG2W8WNCBxkedUnWvwE4sh6ML5WCrHhRaBfgaJz4oASDuYpCfmqrYxj1v",
  "key31": "44F4eyUF4YWLpzhNWeYp9bQcrSmrKS3UvmFCCLDzmuX4q5FCPB4vWQsz6JCzc54E7CEL4vZYX9oDU9A2eaBvUuK7"
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
