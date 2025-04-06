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
    "2VHXWhAq1Peo4xtF5KqCWcViZT5s3kjtnw5X8tS7YqgmBNdq45HCLSsurgCiW3X92Zo8PBZbdW4k3pwpu3ryHBYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AzcrjNusxaUZ23YAg3fVFMhnchZW4SNi5ToR81pABNLcAcF9JRDj6bPHrmmnHoqdTJv76pDNb9AmzaAgNiDtisX",
  "key1": "hwMMTiJJTzEAvpVGnPvuY5cFK9U69kix48MR9U9zXKm7Yt4ouzk9GHCaGGofuTKB6p2aue7wArFePsnmhY2Akf6",
  "key2": "4ECoyE8LWWZvUnbnnD5URxmtkc1cLkL8ozMHJc1ya3QCXhDtSsJWVEBiCMz7pAiSEPvyhv9T1XDGJAdVENnDdT9d",
  "key3": "4HgoJe412k8BnkurnDJTkJPFURujMhGMkJAubtKnMzFRRG8Mk7NgmhyDrvmnTk44yR6g4gEHrrrMH2KzuvLSfDau",
  "key4": "4z3YcCwG2ZCQ6DTv5LT29d3gnaGBjziv91QWBEB6L7RVufNLSDqRswJmqRPfmqsfmfAghTVC4MxWCoy5xfe3JSLm",
  "key5": "Exbjs5ngXAVndTzCjxKZ6bVAZQ45B8XXQ5esYyitYULXT4BwVPqih6Zk2aiyt7DK2qCKf22uzqXvfFLmZNDzou7",
  "key6": "2PrSewGs8jcmQeM1qwB6QV9SzDWTQGbqRiVAdnTyxx78f44Pkt1GJSycrR71QztmmHBQXDxT8neF7TvbeGppBR9F",
  "key7": "523NYvDa9bJYhhMA3E3QhYgGkwt6EerH1Ruobyv7eywQyaCkmTbwD3eBHdQXALD6Y2c8CiXYWtbGzpG2KSup73K",
  "key8": "3Epyfz7adm9uimg2Vk5iQb6dcB7SrcyHKCAqkcqC8jKvJYu2QVbrZzprPCNUwwdjxe7Si3JpDHvcVxKVwivqDnH",
  "key9": "55oFNZShXjqCsyDzxTz2dp9oes4sewVsPpZ9RP6ckj22qvwmZ2Q7XYfDTzqTnvAJcF1fY1mXRgNmeTQcKrAqGdY7",
  "key10": "5CcpaP6gQqt97GfLGGbCdUbTeMLk2NsemRjPFwrQJPS5fhaEtMYj9jjarmLTfCPTABo864p8DCji4g5zUwtBzW9v",
  "key11": "2it3AFj5jq3MBXhTrQXuNyEgGCpTVMJed7p6tjaMLWgJCnYjwGGauJ9TzsMmSWPV7z56CPCXRikUX7vqxSmJzxDf",
  "key12": "5T45duTvXjF1DDPDnHmqJhHCP1kM7TqUzAjB4MbGv3KZD2W9PH3GvYRhrrtiZHgRsRHEsCyLYMWxxfNBjRNKikK6",
  "key13": "4xtGuGWmRJK6nyM86KN7BChxkaVh6hHYwmdZ3UaDQHZ3ksdzDaNbndnH2squS43oym7VEV9DFo3pvTPtfyqRwkRk",
  "key14": "3qzpD229URi8vtkobug4xZL9yjNHSpem6M7QT54ohwWb1nLZD4ywqFJ2pfN6NziRB2Ut16B2TFuq14Nuq3wgXpsd",
  "key15": "58EPXkUFrcv9XiokPijaHXVi5o3EFsVCYeMhHoRS1itW8wudeCwu5yrhDtdUQ2MZv4yzgVUyn4FJJY8y24gRKC5A",
  "key16": "enkmS4FPnXca1xZph7WS9Dkv5AjK5K8XsJZFMzWMbhx8g346DG5qHicATBXridova3eZqJr3yB37JuLMb8xdP7m",
  "key17": "3E2kx9oWZJKv1LmNcBogSqeS52SuVKpxAEn8n4gi3mp2LHK4zXwSdwmMGp1mqF8resEPtmvQAPQdRmMGfUBKHZDc",
  "key18": "5joaCL2Fttap7WoadaYEjFV1ZCuToQN39sL9AHgwubeNw53icE8XMmLH3uHsnJ2QcHFHrFuVZsELddo7cMc5iDHq",
  "key19": "3q6tw5Y8uDSTq4615HRecfsDZLMRKmSXHgxpgrHL7b9FoLcWwP75onqUXf4BVyDdDtbexzVUDCaV33gmQoLezc4N",
  "key20": "2ybqqCHEBtkSxDAMsTGhw9brFBaXteBGdDekWWRdsTmVmq8HthsouZrfuL94wq98oyM1bPXR99tZE5zPEwSumeD9",
  "key21": "2S8cBvCw2ciEgHJPCrtgQPoPsZw2xiA7ntmEBZCyXU7Ay9PKhKpDKqfuoniBFdCth6nPii95D1f4y49hqwiUHiXW",
  "key22": "4KTLdSLe3NzLEav3Fz4LM3K6Vf7t9chadzGaGDqHmEXBCo6qkbyyeLFVqsDmTDGqJS8jS3UCPp1vZq8WtVtZoNee",
  "key23": "46YC2TcXRBqj3PgMbW9KxKn7CXFpjLdZAQ3jNWqV1AaK14iKTiu8VGUzZ3HVinhHEPAXmtSHqadqvgzcN1Mti5FG",
  "key24": "3mhpyJj3cNtci8qVeXo3GBF5jzYeDHpBmrXodZR9UjJswJdTMkPPQCwoG7WKhWdxvJmM6vkCSQ3ecPufvrjxgMQX",
  "key25": "33jBemMWqaMCWqm8TVRdd7UrksfSNej4xAT62YiGeatVz2RjommVr2iev9pbNMVHM53u4UrSny2rhiWmDMG32Qz9",
  "key26": "3vBkEwnJ9JnLsQjBV8Tcrrx7znL7U75JNrHA5FxjFUggBcVJswj5MdwebjFH1fvmCQfayr2nFpLwPAQEntz9nQPm",
  "key27": "xETWj8kwJbQMUHkFchtB3F9N1csCLnPKBXFRKjXAgrzmkWrMJ8oFvEqa6HkrHQUecJhmNUzCjQK7159F9KYsFem",
  "key28": "4FG8seUdZ2eCS5mngqWc4tuHjrDyRn2PyvWDM1wKQTaGhwEeFHk5WWKHRSUpdGt78rtzc7Q1mPt7YdBqnSBeguHX",
  "key29": "3W3QDUtPXNeVUtqaqN3FA9i53BNavymAT7DUQS68HuzfHBt7hbajrnYVCihrHLYXkAkBemAGhAqCK5kqvy8hz92n",
  "key30": "61NGMN2uJQmVaaZVR3PUymLRaEy62vwqbFi8MzQiehKA7JZwTjSo38yWpQ4xrpzsjf44yy4bJC4uatP4UHEHeo2k",
  "key31": "62TCYzNgof9NYw7JPE62yWDQewqmTRBYT6K4swLdW8hMkPbL3UW5znGpD2AZtFTu1g5tc76GAn5H57rhizBTJpbu",
  "key32": "3dArALCph61mtoDm5m1EPhABCJw39jf5dFs1iT4g1762CQj1me9DaZLiK3kvWHHnDDMQ471SyUk1cP2RKNUB82t3",
  "key33": "2xzVHm8XiiwoeXA6kSFt7AtpP3PWrYJDj5RiekyFxrxWgxAE34yzTEcyJ7Mo4MnMj4o9n7KnmHWuUH8yeckw6QkZ"
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
