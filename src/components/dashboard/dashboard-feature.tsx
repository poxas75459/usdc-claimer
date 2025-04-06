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
    "29perMArbBxW2aK15XEhtMvjY4BV4QEAFisFG3RRaq5yYBKNNSCJXooDuyySY3Um1ziNMapgytxkqLKG6Yw1Wy5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LuLX7Xa1R7DXW6M8p4uePNwhX7UuAWkWFFLQjUyaZyZdUwFt7pWkEPVnTL9vGVUAGRGZGN1xAZgBvjXLrtrsFu1",
  "key1": "2KhumTFYJt7pAPhRdRReu3vkLkwFxomT9KPsfmTdPjN3veZiAs3p9UHr8GfD412Jkt55pHkpRNiTtm6Q1yLfTis3",
  "key2": "8VYAkDn9zK6JxZHx51qJiLY4qE6nEa6irauP35HuWsMa35bx9aic1YvNCTPiZtW9VfVNAKD6izzYqBGJdABHzuu",
  "key3": "3DaNrcj68XBrk7xNApuED6fi6K1cEHnYo8wFsbrMLB5juTfdnpezKUH24WCibNLjsNgo5bb1gi9v3RGizZZbVjNU",
  "key4": "jsSoMNYh2AtRvgUWvdSyg7Bejikykujr9UqqTT2FbydW5stXc8Wbq6Cr7i49Fg22T9FtyGESW5Z742CViszynsK",
  "key5": "2529dPEQZTZPPWhfouCwEBJNVSGdXXr7uGQVip6DPTaiDYE84NpLWDxTwCUiPrjoBjtojyxGjXurPuWDZuzigkgy",
  "key6": "55zGCw57pGTDCuNgBUDvTZ1q7VScg5iRzPB7hmLdrsBhwbhr2moVy9VGD6P36nHYKoY9diWAVbAzNUd5Y6CYL3rd",
  "key7": "3DmH46kGN1iKE2ic1Bveiicadifh4ufwWsDa5ZQX4zjwqNvjufjAgZHLzunUKQDH2ZoPzixbgCQ911S2rfPjsED6",
  "key8": "3FiTMTufn6cmoA5Hfjy7UbffinmtRAdCWh3XCwuUz546HRWkKD2gwWfGaUxYpAj85N5VPmSnvYBKYcsHSd2ZcVVq",
  "key9": "3YyyTzZzVFjNkALNfdZu3FURYXGLMdsA7ERwtYSdfpTiETk5mzyKPbPGpR9BLW2fUgbBUp8dP32Qb8zQgLd6LfCn",
  "key10": "221nsiAABYrk7Ti8tDXX26CoMBZ3LKkq91iJD7Fd66CjjMQHPqmZeEmNBgPMj9DjH3WW1w7CH5ziYNmdJoQtMgKB",
  "key11": "26nrSSE44HWHH2ZscrhX7Ji1nRFonThu1btfpctE2aXXrUYSbb7hQuANMRBLfvo9UmiMwbpkYkGV3dPckQsXuFGh",
  "key12": "56xdWaxEnRQUWKqAVmpz1dRpbwNFARsFfkDC8eNCJp5mjuwd8ZvuUJf3rRqnc55ggg4NosCfEN1R28ZKfyAt3qE7",
  "key13": "2stA46coEuVFmJnfZF5G9bTfE6RhduD4nGVyQUPLtven1Sa2HPRPbnnWadfKWWEpKgFzmN8nZcEqf9LNU9Sg3njD",
  "key14": "3LUbwum6jdqanTUVEqVPtrejWyWvotHMUNUXtzKFa8xF6esWAJk5FsW46CeJvbnZfypMZAEw5c4ZyDYPCisENzAQ",
  "key15": "32zMx8xhrz1FKJvQNMjyKqHcHVcchyFRqet9GCV3YFK4QRGkKhJxgtX6hcRoQgGxFXD6jeQAvBjtHC2aemGnWNE4",
  "key16": "5N5pm4PmnjVdZTQrEhRnaListmpQixKtvLZDG7mQUCxykZU9tZkAcs6AY8nsbY127Y9hxjSoLahyU4Cgms4Rcvp5",
  "key17": "5kqhZchp4QgTC3j7CqprykbC8Lcq8j6sojMrUJVD7AXs6ZE6e8mRfAEbzYApcepkWffDUxd7isSsGJ8AnLRXNoms",
  "key18": "5vHCSfN9Znz5mTvuFghq4hnzyMX9dKWBV1rPFUiPeyM1QpxfJ77HGChQg5umr9VgHiUvPKTFD5PAwbjkrTkeCow1",
  "key19": "5Fjd5H3TioVCeNPWQsaZ7SRsvaWZZhCSFZ48283iAmYqkDpRSibQAtMhSGYVCZ82vEMi35u6axsBFF7SHWA9Mxqj",
  "key20": "bgVR6Yk6w9FafRKCHNFb3W1oWqFG2E7nBT34xoQAhBrHNKapFYNuhvzcpUAUWWFTNqR7mGcrzZVLdFim1eai4Vi",
  "key21": "57YhRnwzR5YrS1DoSzkofv5V9TyAiiqQ6xs9c5Qkgp3PmJeJzXvLoNP9A2VWEPrZkwQYLjqZSScch2ZvRuYvN9iM",
  "key22": "5MX5V8iQzTMoaFGqv2wwfDjSS54aQo9zhCrrdVUrUuYpHoRGnLzHsFRAMsFcMk522QtZHfLJneD7tRC65LdewUY3",
  "key23": "3tjvoXcQoceSEokxZ66MJ14SBzzJPMGVxmakRBCqURJrFtt9GAzAB6Pgbek4XXHfm2rwCAhoKb7AatHuwYWweiqX",
  "key24": "2YcgsoeCUhApJUsjp9fDwxf8W3UgKWHMfm1eCz6BAqkddQsXCf32H54pQ1Jtz8cC2Ly5aSJ8Z2hVAn7AyMMGUWK3",
  "key25": "2RzM6wyspCSWH6srnRdr3i23mbkUobEyKxDfQDk687tEhQ8kxynJtWF1dp3DRYuYkkGeyBbjAhqNTrwkVfPUcf9f",
  "key26": "4EUY2BsBdfGDHdRCx6owb9zERdnVrroU3m29jAbSwsDcQM8yj2ouxrU2vfyHML67giifww72aSpcfTiT5vK69hYM",
  "key27": "3FfN7wGeL87xkXUibQq5jjxBpNesNzAGAkdBreWZQzt8C8BUhWLtpKo6H8bjYV7LYR5ivYN7iaHDVMEfTLUwi3rx",
  "key28": "2Q1dESQrbNd6mVPtsk2AE3E7YRhwVhFmtSPtymi7xciEBATyYQmnDsTM9FRbNrbr3hF1KGt81VFGGvWyhJbSP4gh",
  "key29": "2ea7eFeQcwfK5NV1VLX2x2iWmc7Wh2RLCGPqD2Vz3oVa3i7a8zfeQo3wMfd5ziSUXQoEhBYfnJbgD5b9X28gCinE",
  "key30": "2XK8MejKziemhTr9CGRJfegTiJaQNhV8HxHoF28qZ4vM4F57UQszhemnjp5SVzZ6BqfroP7UxSsa2GsnGMwSn9q1",
  "key31": "5gZ7oeFZbbfK6jvBDBEfWReRRhvTaAn9M1RoYPkFFFFjredAjYqyQedwoTe2o9zQRmizrQhQpaHM5NqVYyAs4yeR",
  "key32": "7y8PFA5U45Ck1B2riXjvK6MdoeDcLANkVoPe6Eb7Qehg8NSY2tLWWvruDmP5PH5UsAZG48ePzZHVFHin3xJbaEj",
  "key33": "5hbnXZCexVFYjisepEjv78FM3LTGyEqQ8NsCazncP6FrECUyKfV4vbyN9yo15qtKBQuhWDXpxeNYkK9xQpy283iZ"
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
