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
    "boaHEA7akkhHTLZx4L1XUeUcM8raNRr4uCbRfpHHgUhTgjfopMcYajvsEAhKpZ8TzArEVThc9T1feBG1wC7QQNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hN2TZsQ15zavQSPJLd1Giw4HKEZ7dB7hJiBEjgNJ7kXLZboHBUNagThWARMgkSJLN8tCgSKudMxWiXrAxWnQdyb",
  "key1": "41DS9yLnfT7jQhwtLJoG2HPVVfBVvdh9YD6P11MqJRt4auqHersVXPMuU8agC1KVpU5B7HSxcDhdYN6UFAgGgHSB",
  "key2": "5C5C2bqjGLkNBu2awdusYufFj59BTC6HjPnRQcrP4m31KVkGH9arLWkhEUcCjWrxqvXAi63j92N5mXTYEecmowFk",
  "key3": "dtSdpV2nk3z9aT8Vvxb6QdPxm2iP1auzAQCkKMN6Wv5sTPFvUNdo4ocnVDhk2R51zkXnofHTRtVxW1xZbm7MVFs",
  "key4": "53cfvaoBNPRiewGevFR7PT7ZYeT6ANkwjnpYNFQD41CiYiE1yXUwZ2jzfAwq3cptQJezd6hK5V8eF839BSiMnaqe",
  "key5": "5KLiR78aM93gyjmnWqJoPZVsLxA6smJ2TpgJ3gqXc3HNmxzCWL4aVGmi2hhKxg2VPaUa3QwsgqcCWbvzg9bV3sVu",
  "key6": "SwSxTuNj3ichwCoPvcpXDVMV9D2pYXjX4UzcdWAe2xs4uC5kND2CSsK4U616S1asaxN4myGwyCPxtypSTfjKCC8",
  "key7": "By1Z4o43amCZyWKgsLxpJJyBw1ZW1ZZGfQ7EBg8Cej9g5VMh6uUtCqsGmFyqWyfrYEEjC6BkqdRDQjEY2ApfdLH",
  "key8": "4XkwV2hjsuHj8Yc3sHagAiZmicSQ8FMLYUipGEzRmZKJxKmv7aAzUm4LC364vLSTBGbAEZ9daUpQXhq1XtA5Ao5K",
  "key9": "3gCg3LGKTkZbne4bdK2eeNZKcffiHnJWvMqhMXH6U3P8ybZdrBfB8qkrP54LMZuwA2GibvUfAssaaszwt1pzFL8X",
  "key10": "3HGsWgbVrRgu51jw6zvGEeaC7AwNd5dJSkcTFgCBhpidLcDgqxcqR5h2eKFU9Zjz7s745kqn2N78G6foTShTd532",
  "key11": "3hu3Q9hwfEkAwruFbmRyzrwJZjkPfo4sYLt2qJrSVFj6yZLagA2fiWASac9PLtG5srR9stDvavkugQHKTfzry7s7",
  "key12": "2C317o2QQVoNntN8bCghA6PuCSaiC1ryT1JPR6xt7BHC2VsicmN7EwAVB5VBDCSkWsG9RwPJ28y1LAxxZYABaCkn",
  "key13": "49Vs63ZeeiUxFy8GpjF2cq7z4NcFvRqVNJ5v2s3KCPjbaokLWjiTHFct85iKDRFTu7mJASYjXq5XdCBL1W4Xrv7x",
  "key14": "apMnK4dajBWEbtPtcfkLm3Kpv1QzfE4qDxoprJXY1mGmkAJrr6RRPXhHtkwaAYvNpjiyJi7LpiiXGM8PbjgrDhY",
  "key15": "4yJ5HdYmyxvbLNPCMTG2DgMmiUhYjxBSxaVkpo3WSHpoYFToj1cB3MfM9i9uofb9UE8ahiChJSu2LE794M4KBgKn",
  "key16": "ohciaUNVkdBXpMX37jjJ7kx6R4Q2h8dGgt8kSYn3Dq5j6o2j882oXTG7gwWH37gmvYoyWvCHf27M7idqP4sdhVs",
  "key17": "4XSiwaM6c9U93xuJhfEuWBCyj45FRoFGneydTAFkuW25xrSYTvDESzwFocdDCasHaACTZcreZHzbHMigNDyJr4or",
  "key18": "4FB3VYfopgu4Mujt54j2v56shD9DSsY7MQ5cGozPzMjkEoDa6Ff1Nt5Jnsip3nPaK3E46MET3ocpZ7Hgnx2E6cgm",
  "key19": "5anVdeFQkssvCJXLZgFxiPWHax5N6kwfuJV9FVL9bvSQBhyAgCjhNRdFhemYXRmDvQpBguw94NRr4AAJpWD3NCrN",
  "key20": "5sJr35d1BeNPCYMj3F9exjJUWTpNwX6LY2EDqaFQxDGEyC12EaABhxouk95DG5rTFjLw7xKQXLF1dtXCUBekKr8k",
  "key21": "aR4XDCb42e59ufisC9i3PAwSdAjsv8GWPJoX2MhNi28Vi3HfW6MsiDbDhcP5MhMZBGKrYAG2dD8eHbvEzvYUxco",
  "key22": "5phz59zj3QqCv8hc6GXb1gMJtMTh29kmYDQ1QvVKjG54coVhw7nMib529Qxazf4Kuhq7pVQGvvWeJ56yMoRNSXB1",
  "key23": "4Bg4rG6TxXgns2h8UM8bZ1ysoi8f6LLhh5G24swqHxvJfuzb6fNZqToXmRRYsYaLASj1RF4D9UveRiFd7T7z61Ki",
  "key24": "5Dz7qGc2okNmKFH7qX8mu8sjat3DPaYG6ZXXABWdsUXbCGhH8R9h3nLHKEtT1Wcu1Nkf3oj8N1U5varFzaPpFAeo",
  "key25": "2ciSK6CPrLoMxojeGmqVLM8eeY9WawHeHjTTTyhZ4ZhHGMR19vDEcWVovnryBVWSPWWq2RTqe7vmVA4qGGPyVyjL",
  "key26": "2V5FcxQhtoEsABWeRPWbDNxFWRv6VheswnSp6bqvEhtX5R3E1YrQiLkmExn5RQKtk6tQnSuZ1veqxDcYVTCFY7qW",
  "key27": "2QBMsvDTAWKBmFKSmxk7ccNTzZyXoWgRVTzfw59g7PBJMyUD5zKHr9fM2rxEAUH7c2FL3eViNzhyNs8fJXDA9uFQ",
  "key28": "44xBS1wik9ho6dPWR3i3k1CAyDRdhCYeDMD4otoDyD6FKdV1GGkU1mgpqQEUSxYoWryYDuosHpqxEZQE31mcoZsM",
  "key29": "64chAEazKRjTvaaK8CB25vWBtKzfp1iUqPvmsS5V1WjiLQZ59W2YHqQCX27davwWWTnQhYCraZYbk6WVfaKbGj9h",
  "key30": "3jsr5VvpR7uh5xAdZFS7mVh7YB5w4YShgS4ovSVAUqCoyJYHb33vUkt6BvHmPtGAvEni9wUZuyuVSAU3Fe3Sb77x",
  "key31": "4UxcEyy5vav1rK8Q1AtoCURkUy5aoPdvwp8pCM7JAbfU3ZftKRRxANi7nbihuPessZtucD2dyiw5hrSF6UkvKeXJ",
  "key32": "2YwMGakCqP6bAmre3KwUJ2YiaVVmnszMom2rxEGVU2p1VZs4ZezY4ZtVKv4NjcNvYxmmTrK9ZXa7UV7roFjh9JNn",
  "key33": "5P4DPq4k79qaA2f9vZyv1LiohRgM7c18uBe1xNacBJqcXSFAKVnMg2BrH6tA29w18WrHK9mkPPZNzmZZJbJhVP5k",
  "key34": "4GCN59kPawqMGtLPgnNBTyQzUgSr6kmbLZHhGFRmmRp7yAwmieYLHuqo1cu2qpnA1AaWMDjBqSzV9Vgj83r9Stbw",
  "key35": "499pi4voBHKB59wTtmkoFXScSwX6JYXC2M6Q6hs218REBoYdjpLjgXV8H2hxAYvC67mjwssuTgYyYMndbERPgU9f",
  "key36": "5KJtvaLii8WzfQHhrhQXt6ZUrSgBuE2VKW8CYkrQuGE2UZEKm6F4YTaNaVxZznZ2XdkhX9mASPLNSCBvSWetdvyd",
  "key37": "4nPM9oWB3Ap8EoM3xdv1sYc2phVo1AGR2AM4HVbScmRMvufdFJ65FT1K9c9MEzK6NYjeE4sxfqA6AsME2cmBBaCv",
  "key38": "5TQwjqqzoNyg5owmLWysXng9bGBoNNMSWRXTpGgskASsxwRz1NSGFPS2KDh7Yvofp4hJTPcMbBxVWnJiC5es1PfT",
  "key39": "35L74pSNGDsShrc8zHwCeojD8TSX6657TZEF5AHn68BbuHHaFKiocYh3U3phytMfwWR9UDhU7TQi5vXgizMsVvSZ",
  "key40": "5TAq7YgEzEzY9e6738M9uN7MwaTmLJgQ836xwdswwaRc3aBoZknHGziTFzFBF8mxYs9cg1tHXxHkxjd8FXy2fCfT",
  "key41": "5hypBRcQqiufxT1qLkDrycnf8kHNEo43AGgvjzL8PRFiQ78xuw9rcQqcU1K3F9ECt9GgzbcUh4Kfza3W7rbvfZU1",
  "key42": "3PpEfzHZggyNZzzMCBhLyKR2gEBcA58sGqPvvkxCKsHU17E3jhWzA6LWiNBmGjCPuNjGgMW8ye2UTh2MUnPdm3T4",
  "key43": "2DFQyRC44qULbNtxwxSdXtqk7garHc5Ck89DqujjWrJZFf1QwmNsLHEEnVvQwZpGScudNSWucZMXjs15q9QNvWNf",
  "key44": "2AQW7R61JvTS4JXxSdMvYnUVh2MkdKuTFsBGc8bF7RFmytSGGQGxEMsqXhG8iW2eVT78ScT5cAFkskCimbCo1sRB",
  "key45": "3eixGPsWXiw9KfUEGzBBniv2J74DgSEdkQbAjew7MMjdAYtvRkow8EyN1o4sB4uwJiWNRdrzzRAwzU9y2LPGsov5",
  "key46": "5WLyNSjWYdJkVM5fLRCi77DWqAVBc4zJxhvt2hNEpcmEsBh26xAhNt99teoKx7G4PAdZrNYwLCipr1khV9T1gS5",
  "key47": "4UWe7QRcqYNj9ysQp6ZkmDCd8L4AV62eSPnzRaCqPGZi9YwVvugy7rzAr4xVKeoGHuB8ezqKeUiBDSqFAaxjY9UR",
  "key48": "2K3Ssy4c9BzmvQowdUCB9VgqCybPWkuonDDeq238mBDTtrLsnYTTGzBbZjAKiiQYSauGFMiXTmvpbVBwhopHNXpi"
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
