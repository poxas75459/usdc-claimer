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
    "5ZnrwUB6pzAxfbP2hpVeaVcdxx4xis2f9z7K7fx9VApg8BQxdU9KZZM1EpcAA94XRsV3jPt22Frq6ZBAXZ8FjJb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RWBj72mKZsZdP1t8VWiAzTgiQYvgwBykSVmcn3B1aBJZih9yephq7jzT5ZCbTJiR3j2SLiztssHEsSHCypjujXA",
  "key1": "64PYC2kgwXjxVUvZo2AUaTVRddzorNg56SpaCjcRQQFGrAARsiFdNFYNVfSHZNWjjbayvEeFDpVQmmiEg5zXCkyr",
  "key2": "2Y3MVY4oRCPZaDibDGVLopCVvAseYaRez1ieMFgrDcmkUf9eWimQ4kzU3Kt2hNfeFEcZ1NiiQy3qikLfcdR3iDxx",
  "key3": "5fPvT7vtczyirHccmcnQayc2wehfMNJafVummWzMm7hwvZseAYSJhNkoepBRwq7s5iHwktFrF4whG5sb2N1w8r1c",
  "key4": "3Y7suJP2mwLMoXFH7P6jGbTdD77NhHo1mmTAkDbkX7jMd9ZgiJGnbHh5ndjtthiKKjgUBxy9NUhTgajiD7mZ3fTn",
  "key5": "3zUdwcqNdRbhJ6WqzL9NseBtq5w726eKSC8gtADSfbSjNjwafy2ymbebhpkcdoEFZgYTqNosTFebMWKmCBLBu7GR",
  "key6": "4wxs2RRGziwfFbQh2dZw5ToXhahabKgJ3fKFWFw3w8Skjso6F7mkndi5hw94EhLHKUpHxeJ4rUELsZ3TGqsKX1Pc",
  "key7": "37GdkvpX7LZJqbtQ4ieNc4mmfWagTTw8pqZafkvVSuLdNmk5peusSvfEV7x92UqQzYTgjTexhX8ZXxHkLW3ZLSMn",
  "key8": "4BzMxXBVvnf65cknmuCe8rXQxJZ5twZnBmZuMoeUy4sDRj6MKHSJ9SbmJgmoEfuoXGq6tfqCAZJ8yp6FRgGxJyS7",
  "key9": "uYojZb9u4M7z8Rg1KYZAyCgh7h8fFQSx4DowsSAP9kRzyMcbjFyf7yVJd5YhhXmBmBAgrdbVECxZZvUKChAfRvM",
  "key10": "vWB6uBPxXCvEzxVEpzFJM1o8wYD2oUXhP76uRZp5Xq3ncjM86sPh4fqVvqjWw9MAva64uhTf4kL6HXAzszoaUYq",
  "key11": "2dQMttvcK9Ns3XJF578PYYPCfNkZjJGEi4YToUBuqLdHoTRrCFeF4QpEkDi9QP8vhtLhkHP3H8YmCGtQHz1iZodv",
  "key12": "391ygmq2S4BUibdQtzdzaFdCbakPBbPE3LzP5SZ8oWXzqs7mWcp71iPjGQyfnBYtRvKJM19e7xg7uA7D1xNRZD7U",
  "key13": "2XYG2MBuvyqJf2zTDrtwfCqVKNEtXWwjUY2zJyw6HtafHPLJ6ZawsLh9bvn6Uc8Z8WBCaoVujbd6Hup4fFWtP8u4",
  "key14": "29r6FaUMpvEPX6WFu7SxDQ44WJu8q6QtF6NuS1XJUvR7pnp48Wv59W1pYGVQRqoYuMD4CtX6Ftj2B5VvJ8JyaBgt",
  "key15": "4cyf7raSM5ed33Lsrh9XdsKCXKkSiPyoLm6oZSg6VwTrE2tveGgMrM1nFGvTJ4t2jYUG7xMuttTkdy1L9nrcv6XA",
  "key16": "R6w8Y9zPsmvHGgjMThSDagvMZdeGSvT5wa21zN5U2afB9z6TPhHc3PDmxR5cEJfNG1a49h32WwiTx9RAQrtvUsu",
  "key17": "5EvS4xS7NpA7Ax6NRddgD23dqWoEXohcWaRWARaUtm5iGCfThDHugiyPNYd1BSHXjvTKrjmnNet2jq4yzzvFdKuq",
  "key18": "2GmKrXG8F9K9ziALfWtMP3xeh7kQytsBiCLPxTvPVWAM8Lg4jXTaxPfk2PLj57CfemoVapxoCLHGBo3VDbedrCdW",
  "key19": "XsKGvgdrtycZ1ACuSHPedZouS8ZtBNeFXqcm8jXP4NrWDWFfj6iatsXQ1VD1S77U3zJJv11R6u2L8RoWjMg9ZdH",
  "key20": "5UoQRbA75Q6M7NnGoHoqHyDFEXZqWgbDJSWRh8oagY1nQQHDjcNMXC9c4N3T76gjbFHtD6ZL4oYRTDgVP8QZqosZ",
  "key21": "5DGZpkcKSPNbHHm5YRbjkw3qK5oeqTtucDGdW5uqpaheB1vQhwWPTeXgGtskAkwKKc2KMt2AvHHdGkhfMsHKivKv",
  "key22": "3kRScxL9psBmSeDUffb8Mkj5XoTWKsiroDozsmJ9AzybbKHC3NSWzQ6wLJvbTJZK8BRRcgeBzSP3SxPWBycn1LAk",
  "key23": "5J3LauajZ67MHq6KYwQxJs4WHtrVh8chM73RCfPRxvVV2DdkDhpQZ5bnNCE3k17XkxPzwGCeTcTNBFk6yeDYTwSE",
  "key24": "VTcaMm2gQcGPdmBrFcW6ien6MSLfSDoRA4X2UnmZ19Z4wd3dfQejZXpFdMy3YAbwMmaLLEAZvX3jXt41Pc5KHjx",
  "key25": "5gdrAEAMmvZxKCaKrF2zWtf6WMh6oMuedbXiCwtjgqUyT58ZER9QxefX3T87bzFJuepR6U9khSzRa5yE1dumZhtS",
  "key26": "4VSQNECSZ57hnQhQAYsdMvKgFgTEePuYjW6eFPus8DjkyRxHjSnnYjDd6GbWDLxifxPggVWc7xYchWMwkvp8hERq",
  "key27": "3PGcPRinbg5sSnJ7A13kvrqmytQY1bMQdZZ7yV3m2gqFUSSTm5m4XhBTHQAZSNMa5PpwApsjobKddGoasC7eqxCj"
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
