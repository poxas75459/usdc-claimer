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
    "5Du3z6d9Q1geR4g3Cv17Uj2txafMaVWSnJ1b6BPRdyG63fuJjTSdyLGQt9bWZDEGwmG9MWnDPxF6DKZgBeC3VkQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GeqAmJvE2HjpxCRX3yXxsN2BCky568GKTgzjv8R5rvQobhp1bRhmfRb7h3pdFyGLF4D7fCbcxePEZLnQR7ed92Y",
  "key1": "3isnxWuL6B7ve96Q2jFMBrgX5SZWfMuCiEXfDro96LGMC6Kpj8tYEwJ255LaSB5BpbqGB5D5toq1KNEfstfbHKSP",
  "key2": "bf1XVTz8jbUghLkSu817o4pyWCbP16ZKSZNzXYjkkH2XNQnforx3NANDSy3NoBiqQFFttBVzjeTgQe9YHfU8cL7",
  "key3": "3SRtZUQHF1cwec4cyTeehZkiGgMtjdK55HvvCA3wvEqp2cvCQ4hXxkZoum4bGVPjhMZ6ppVVPMiZNw7VvmuzEiq6",
  "key4": "4FTkqGq2yfZ9KGnTEVweamWK4MtpvUuJaubgV9D3jKwEEcr4X9N9yt8skoZsfGsrhzYGNsCrof1wc7iMxftTGvFZ",
  "key5": "2q1AN2H4ZR5BCTRKfAQWe5GFpkk589LUjvC4u7XKRM1LtYHGNrBmJkYvFKn1dcc8xJ852Ly42P4zwBoq6bKg4aPr",
  "key6": "67msdqAEKnf1kax2dWHFZdD159sNnPKbBdNgMs2XonRuxKof9EsNoSAefT9nLwUePPFanpHDUL6B3WN6QJN5UnKg",
  "key7": "4mFZdPZv1b1uWYT6oVKG4VhqwJ1BTzRucft8mdvy7ezBTT26956rS76gyuRN1Sjd6p5mZCXvnEe8WZa41UsvpHrJ",
  "key8": "3AnMvpY5tCutiiqWycEsrFJyKetH65TjGektr4tfLK3eQeivSqTPXJhTDZGL5dcrEnP87ZgL5LxcjXBw7bq841mN",
  "key9": "51nAt8PvNLXm8kGcECSoAMHsKxtsz32D2nU2ZuKx4jdCMATKCZgJ32Df3GXfiSVLYeuhk6HR59oxfhd38S5FkAkD",
  "key10": "C8KJ8kZW1poj3tREZMFA2HuY2mR3iNXSLVop2mV9tXXyADwMRe2bgT16jvsBKeB6Yvic6XwDmwXSWpyLuvHjVMp",
  "key11": "33Ca47VU3JaoWUdu29637fBRwrQDoWNURkzAsRGvvVvTsrixgeisCwPVuM1m4qyw75ntBrDWncsotCktV1yt4qUq",
  "key12": "3vSr3UmQo3qKpaybppTtxYPbBiELUZtmL48vsxrdArJkLRmtnryESntwHp8Vyaw79UVBNRuv1xsqbwygLmh9FFhY",
  "key13": "3kX7tW5ekM1RHxt8V6CHDPSXNcsbaEAvsUAHiZkCTK15MykQv8X9f9dsQx28G5hbnnke4aRo6Y17dHohRm7R2zoE",
  "key14": "65G7nfU2KW3q1GTVknbM5YFPR2KLydJWqUgrVhXM44QqZA2qCVwRG6Npe8sunwJ9Xmo9C5U7X6NeeePaXh6GvAff",
  "key15": "67Cdo8y6xV7kF9bcPw2cQkvJcafE4Gx2kY5Mp9kM9a4YJf5BaQzMjXUzEnoVuJsnAgTqQAq65FaFAqgKSTW749x7",
  "key16": "4vDPwB9EzhK9SHqM4xoim1UhTvj3ZBMm1WJDmAbPAgqYDeUhqqNwbe6fougieny8ov4wAtNyyy4GuCvmCPJvosRV",
  "key17": "39Pmfdpro45LZQHDzdEcZXbMvjRPX3mtXofd8WViu3BCJwemkJbANv2KKt3ivswkbAkLrRv7HUyMHckE2EE7Empj",
  "key18": "Jg8SJxqxno4kVb5HrHBb6oZr3vuppJwJjgCjNgSAoPCfVp4NyR6TfnFUXbGSyLmPCXzbET3oKsJotY3nv5hAJ9m",
  "key19": "4YLwoicM7eSQz1eDxydY3dFwbaMJzVyWahigEh4TzvTH16QF4FfQCFhsBKFizNogJr5r3HtQodwSNV8j1y4jSyK",
  "key20": "2Py5zsbcRbRg19RFjiMsT3yqN9FTBRJV9TrasdEUKfVU7Ux9LTSKew5UWZDkwV3otwhVER2ABwFSLeZSiEBJhRtT",
  "key21": "4sfXupKwUWcA2xsRpLMMbefMwZ1bDUUgmSyGWC2UVdadkDdPvsTs8HSxnrBHCj3TUJuaEGzkT1LFp8sJyWxSVvG8",
  "key22": "5XV9QNBNrh3Ps8jjJ18EQ51RwGPf8yxFd394mVzVgUmn9pjkA9uGvNUGJGerkJgoB7gcCrmkqV9ENRcqgyv49shC",
  "key23": "2usyoLJPSV4K1bvdkbgsYkCGVjMq1rMn4kqzdWAnBkHrYDm9qrQcmSz4aq7CEEmXbg7vJCY17Z9fojUZTRRwUqjv",
  "key24": "4m9TaE5U8fZFJDoyNNwt67TqsGwBa6bcWV2m3qGp3ei4En4chE7K5idmvnZZnTEmJ7AzYnHYBGiXr9XuEwTTtDKy",
  "key25": "64skhjZoJpTkqCcqNhfu86LduFEKEHFKk3RxBdPpFNX9xLitf6yshL7YKnKDVR7hgFPem6avjDmmD8hLjjaDfVWi",
  "key26": "5tJcELFiKSYs4G69dYrvMDcvgx8uhwwjh1hRW6h6eoot1fZwZqZh86FPha8Md6sArfdcHZmHsknf7cpVThuB6bRv"
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
