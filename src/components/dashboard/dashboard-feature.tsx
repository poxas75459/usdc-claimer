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
    "5t2LForBWrDULsaBEUf2zHMRpxRhJsR7tSpPupiT5QuwWq3ZPizDv72QR6F2sChcUHiptixg35YHD6uYyzN2MZNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sZDg5CoTtD7zhqZt89ibqicWzsqaMHtvJoPcJ7zeTFPYEGBsF5WGNFeiNsr69fyC2dVzdgPhFjCWQmRYpJ1x1bL",
  "key1": "45eePH1SPfAqKM6cKpYruHV1jJbeJdf3TKtBNU8tZFdxE1QtNeZfmMtdYj4MZyaLMhfSzL9mSrjpXb2vSgJBD89T",
  "key2": "4nr876geCk6cYaB8JZ1rzWmg2UMzmzs7TJTLJguQmR2EcqCS4K8GWrA549DBK2RFk8TgQ843w4HMgkBXWBGWLMsX",
  "key3": "25KB4xb5j3LSQzKwSadx2UxWz9vK2iRUUgx7zaX5Ww9c4NRwuGQPhK2R8w8c8VzFJGqvegAnZRVEDw5EHDDUcby3",
  "key4": "Ubfa2RSqiGNRTq8TfLBW8fAQmCzwHFxXPiGWa7S8XieUoQzbZhsofQJSsG8S2MbFLnj8ub1mjQPaHxsYgWAE8Eb",
  "key5": "55p2Rsq2UYzWNziBmFnAbykXpwSkXUt9NsRAw9nqopV9PXhxfXG9wJdydAruJZDNB3dcBwEXVJcewoJaWCnqCUVi",
  "key6": "2U6578LM8L4JGMcgg7TRvku3m7TV4fCx8FySAjXbt5DPvKFLqywd1aWxf7gxg2CKEQ9xzzxMh15UxRdKz4FfCoyV",
  "key7": "BXDXckY3SUrgCrkmHkQqkLK6r6eu9RaoouwHtn4NqZMpwL9e4YVGWqUkf85qvAWkVvZF5uUwjztTg2r2hWDCGbz",
  "key8": "3mpZFvbmGZeoGqMpLrsNeA5d2MYkWL18Zbu8zqQpdNcDqofchTgymFcxhQ9wCzSgaLNyPhxMQLwKNsNHbhUa8hPm",
  "key9": "5cjipgFchvHrZw11m7XxaatfPYq3BJSLNDmcumKMRdbGNwsrKxY7sQKHqEFzhRzdaTYK4aVpB7HWGKrwSGHGfJCh",
  "key10": "36XdLu8JULh5tPAaw5u89zqQSBiJeBuEKGXk5Ga4ULziV5nUyMzuH5xrkiQ8gxt8MWcLPnKw6L4VxCtzGRchnCat",
  "key11": "4m1dGouTqpWxBd1FTxHQSafLRj31tTdkUfXHdVEa4HbG78vgz5iGPQgQbyghRDuMyQ5d3qfUmdLgT2Sn5Cef5dBN",
  "key12": "5AoXMa6Tj8SzhCPiqhsSvkc2VuUpRTa9KSEyM41HAozrRq6VstLHDaGaMVW5mN57msTiuAa3oARy4U7pRw1kAogk",
  "key13": "JPk4USPTQwAcZBbtCLF3VZnWCwFu1SQDFxhfSQNA4v7xCQ56DZYBuu1k92Z2pif96HfjTsQNWLzFJ9Et1jwTL59",
  "key14": "5f9MmJ2uTSSFHiMS4k7FBb5obCvcJ1YxXMBtXiXp2QVquNYQkw98yR9rXqTLvjgAPL4Tvx9ZrK685UMema8mhrd4",
  "key15": "3gaPNqEnM5spmNX8wFMiHNp5evj5hGez3hEK7rh1GribD5n731N3gtgUjj8qYESWHPc6sdaJaEAh4Vmr2LHTBKfa",
  "key16": "2QHHhZJMVMmiXGDsSEED6CSsJLNTYJCnRHSS3usRDbXnGfGQbaYTw5U2J7M6iBrNHci7DXmLLxRSKeUT4AGPZEYF",
  "key17": "4pjrywRGh4gR5pWkjLSQsWSxA4L1h9bowJjAGEKZcBthbUNbm6mx6HeaWB45UwJDYb9wgDHByHuoeVE2xniZhHXE",
  "key18": "2v96M6AikEFQ2sSNToQ7sEVzqHJ57SWN4Y3DunUXqhfM51xpecdCsc8YQzrL4KMQ7hhaSMva8LSHQUgAcEbvAroN",
  "key19": "5dUyzK1yLXjYd83kyGLBfY7kzYzsKtw16MZqPXLU2evXCcTbky8dPLLs2wE5iYTRdNGRab6AQEUqaS3j2Nn78VC",
  "key20": "54MawTAV817cUarahEC3q4HPxDuysb9tEgDGZFGdLrwwin5QjrRkpEjqWYVke3oqF5hbN1Ub1GWPHdNVBafvkK7G",
  "key21": "Syy3XymRB8gf5Ce3k3urS2Lfu2pXoom1C3j6m1GxmgtFxyAcbY6SpYgaJvBT85CFm85wkpSH7t7Tb78hK7K3Xgu",
  "key22": "3oym98Hr9hH977QM42xU1KTxmM4YS2zR5ayj2KWCf2TfU7fdjQ5N6XBWJu2TJFS9DJWcuuuFF8wdabFCB7MQiymy",
  "key23": "4EbVrbKMSGP56dq8BhsHvcPAr4axij45kgmCMs48AuF85xvs1pbfuT6B5bgN2oqqhsyRRbaxNV7Mzr8SGW6kcckf",
  "key24": "629dVvpPKVGn4ReN1RraGJGtVB4pqy7Ts5xVbSsm6wkm7EXrDxAM6g6V5BMDTDXZoYVuHuJsxMTns32GymtunwJr",
  "key25": "4UqxxHgiEe5RA8XFEu5mMVRPJgUXWRtVTAqGEMVSpcxY3fxA8Ys9ALg83gog5UDBDZs3v1EMnu4tXhXLzXk4xMuv",
  "key26": "Um85mB36cvsBaunTB2884LeLzvpw7mdyvvYqWS9Vuio8XGw7W5aaoukHk8P8RfQUbYKePDXHZz6BmNmsBVP8tDJ",
  "key27": "3XDbu7uTLiA9MgoVz1NhiQsnc6XKRWwsPRZicVbDRL1fXjkBgs715t6F1tytjQ7mjJxAKpRUUTzzsRXHV2oCNCZ2",
  "key28": "4e3tPJ8czx2MgXtwmmvAtj9WftxQB2HX1naJM41YEVCrS3qSRoyRHfxjyjy3h8Mh1WMMaUmaWv2iahBV552SVVyM",
  "key29": "38nQc3zyyQrYD1D7tu21YCDteivamNtZeLpFeahbKq11GMsncEr557JW89bNCLLovtCs9Q9rCF7m3wqQapNW57tX",
  "key30": "2roqsVna9ephGdk4vktArdpWQSfSfkEVemEaKzFxqm7P8moA1xVYPLBCaHAcojxqGbRBhv3ktjwccZnyMDX6oddE",
  "key31": "5roSHS7qGnjm94JubQQxtSeC4FRUmWkaj6q2GpdugSw51UPyxNu542HFkkmMXuTj9X37MJTS3BWbe9M7yzFspefs",
  "key32": "39KMmxG1nPKvnSgUAsD91WHWNttiSndXPjANENDgMB3nWZpY9vVTw632Dj16RfdUqKvSyjToCWBXmuZqeCkaGs1w"
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
