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
    "eZQKoP4GKDnEGiQfCovHSPPiAwX9Cd5tD9Dbdm6YNpvQv5v9mjyw3AKaPZfrvR2Hy5WmyZu12zqUaEjYk2mFZxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sf5DaQikbkxC3zAyEV8EspmWJyURUQViCpKkNfJFgDk9x1fYJcStPetbb8Vb7Wjp1QAK8gRvT3WCS7gmdPAAaHb",
  "key1": "5HJqhX9J2Dxr912oYRvwyabqtVtPFWuYnaRu2wTkXCCn6GX7oAedGnabxdQGKsbjmCnxzzhTsK3YnJKSwbsJERue",
  "key2": "5fw1jCiX6QG6mRgKmNNLnxvTyGxxMP9M3dhoUKvbZxFFJRpttyVgxDwxGsq7sScZ5LQqTmKiVwaicXe21h5eCBPX",
  "key3": "R2XwHWsb9vgQivPbVpL1VTxEnKdfZidrdmHuSW5x2rpTPne5qNjKXACxt9cHxiPFTVX49kwjStMUoHTNxd8ovHY",
  "key4": "5FxvouJhQButFt65niumbPLthPzY6qsKv7R8KuEwVSZMoFjbcdMGPXp6ZmGKCnaFLhGgm7TyCZcnMFWxsFZwcoqm",
  "key5": "4XrC3shFYxZYd6ZY3w69eueS9vR4qey5b22DHhEYKrn7QktXL4zBeTVzNuixn45uRVEYrnubKEYZKrz3CXRvRF4q",
  "key6": "4KXiRy9eLQg7UQDdaJ2t4XpcV5wGQ3F5TjZefX8ZYjDxfE7C8qpJFH2LGuD6qQZb57Sgtgbc7MBqpiBFJNZ9mDih",
  "key7": "3ytmGrj5otUV7PiNQBM2RTRmJUMnHF9W1tu6q9UGTnia1E2b6TmP9Aa56asRwya1Kj7ttLrVNGF9xwTTE9y6sufe",
  "key8": "5shoZz86NbKCmMGE29YhF4r5kJpPsGCcZ2Ba7hQGjNTNFSBR6Qhv734sBqPAYMtx8Sn5iGgpcJmBgASpBb6V4pfE",
  "key9": "2YT5GrgdJ6G75VeXpKraywkAXweVWUgnqfsqpLnM2QZ7T3nJyzsEtQWsHHFW6y25cRPXyX5cHdxAknMohGxaodAW",
  "key10": "5bhmsKJKafVUbxTssA4cqnFyTmtd3fHNKA5CEVQuiCMR4tUsSPPZXHYDdubGcFKiYcJoVj9Eh9Kr7YXr262c5xai",
  "key11": "2t1xLqo2WWgz3NJJaSap2QsrJ2W73sjMCz7kWJNeLPSAMJDVo8ePGv8NHjDDcQ1eeGexZ3CrxvXQHzLrZA8fn3Fw",
  "key12": "5LcnB18E9nk32hgjfDf58cq4ASdFBjdx8MjfudJAVA8yGwtN7ssSKGx9K5hD7KiCj7Nk3DDiunCWPabwyePVYZS7",
  "key13": "qSN5GWjP9k1Fv5Vk45Ksc4ESRwxnHUiZ9XaiwGCLVdPQM2otabJRFhHfm4aAKkAiu5nyadCQ6FwMYW6nrx4ruxd",
  "key14": "2gVfS15bDZphnioBdUqRpfkcrswNcFKsPxD9A3y2J3BhHt5J2P5hLgfcWHWQzor4WRKQZKbhpkSgzBS5sB7eED8J",
  "key15": "2ZkFQCBz9H1uBZ5gg14uMTDbJkUqxVzr5pEbXaNjS7ChxHNwu7LYaF2EWESLRiBLuCHaLiMo66g9jfSiWYjt5bHY",
  "key16": "3HXohnLVsAEkBERgZUwRFtdBqt2FZTkYVFtFL4JZvhhL8tctk7VKc7GdAHHLW9xGHq4vQ6gPaS3ijMZrJohCv8AZ",
  "key17": "Si6RdkcRcCGfcXaAaT2vD65h7SJgMiWzmSxWaggPcodBP9p3Rfr5DdfVS6T2tVeCmEMFnqHEYARsEJs2svN1dkp",
  "key18": "L9Ww2JPnUWPppsUymDkScrGLBmCbWeZB8Gk23mvSiiKGQYCpgVvW3f6qvjAFVMQ82c6CnCm6fqY8h6M6cXgjTT6",
  "key19": "4NfuVH518Uur1jnwYwCPVM7i16HyPCH54ePbeUZCyojtdwQKBKxBFNJeeyqePmKTi86F3QsREgHcyuneR9W6EeD9",
  "key20": "2fGk42WJbNVCqCctaD1EHYJpGRdgseteK9Y9mQ6YJTvX4u3MqKbyJ6BwYW3fu12a7aVan6hnLNWssWDH8quEsbvA",
  "key21": "5q1h1gpkPaqHoySGVn2adL67wHCMXVBWRFvEwQY6VQ6nkaUVfir7Y1BGLvgHZg26JdskutnxadDQmCCii3qtw9zj",
  "key22": "jBbyzMhxRdG3qmwvqi3fb85dCGmypcQMwPDjSYdHcfqjhhPBBKFP5owNCwfxGVvHRw98sHDrAaoS62yHfeXy247",
  "key23": "291hc7PmYksDiroEMwUJkKXw7xbzo4VGky7DKMXzXQ6Z26jPL7TeLwYqdFYNZEMK6PWAirXczcgXUU9ubuU4YEsK",
  "key24": "2z8jGqowpKPmt72qdRkYunzSFGasYTiyn9CHRm3m3k8diMge4pu9R9NZfV53auH7bS1GV61UsskFhjWjhTqiadBR",
  "key25": "42p5uuHsBtrfxjQGsNqc6c29aXwxmDXnjaNP7LdX5XU6aofuAAidUZJF5kJAjjaQmFZSccd4ZKef3xvLb7kg3ref",
  "key26": "2FW5hhBae5L6GKYFULR4spdm4FqB9vMMPNj8ANEVbS9xe9BNp9Xbk8D7ZhXTFm8CApA2sKMMNcRQa5rqdSYbYo6s",
  "key27": "d7AUCGf1UVhpwdMaTGFAMKMaNfEDEqjJsBHn9r4uYwNncfWGpC5hg5vYMGhwYpTRNxZHC73oW9WKxnW6Yq2YdV2",
  "key28": "4VPQHKQLQ4dTfRSV733FBMVSTgqmgmPyvtoMWb4ztTLvwKi45qQgP6BLvkAgaKp1JNmLHq9xx6SAR7nAbedYMRfF",
  "key29": "UdC2YvJZYYZMe4qJEDiZJ2qRKtb3GH75QT9DqKnxk5q6nVP6KWBewAuuH76N37Xpto2UwZ6oXsyb8yy7M25ASDB",
  "key30": "287KHrWTSdJxsXyKZ3JdsLVAU8jnZcmta1FWyQnB5eNMQMh8c5GaTgoZQ9wjHpgN7oLwodshs68Biduoom7XDBND",
  "key31": "4RCVCBmnSqNAG6nKej63u8qnNCeUxDkApWTarHtWtk8747LujfXcfP2iAYC91PTLZsAhAbSLPgxK9zjgvetZLiks"
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
