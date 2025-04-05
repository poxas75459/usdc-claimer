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
    "36t5v9LgiMVPJ4HcakXcPzna9Ya3udhewbsPmLAvvnajFtKrBeyy2BMTgGeQ3edL9DPAPbnTAsTZeqHSFFtc4NTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2akwLoNvK6qrEqjC7uU1dJX9RRHcv2vQNfZS1n5RdXV6MUt6VpbxAiLnfmoLLWyALmKFQd3jUDAGtxsgnrMTeSUu",
  "key1": "2WNnqNdi2UV93FUWVfoGqzhu5mXsN6Y6TvZ6ZAahC2sBtYnfNJiJ85Xp3r4mZbx1ZHNBAJmnQEaCPexhYo7pu6zA",
  "key2": "25V1qEZ8k9hHVGfceWdgkSizTyRiBzZLg7iu2D8AWWyNoymbixvqvjXzekQEEyByEqhZ9M7eAGjY5uwRJ4Fc3zqy",
  "key3": "kfjc3AYEYPJ1TDLAS9tVA5hpJ62BSp2TJzM1pUzURMRyhRy4TXypXNnCAnyXgNusJ3Yi63pxKM6VF45LBqm33Nr",
  "key4": "2PkReo1VQdhUT8Pe9Q9uRijdhjKRZpxQToybFzqAh3HxtqSaWmqZf3BrfswsGmKStquQ9pXzyxPmwGJKKw4ARMcY",
  "key5": "552GsT4rwtEyoVbynptZf9Fdu1tQrgZSitrHFm4odUAsVPk8NsDuLv9nxZe4neEgogCWAMaBjXmpEvHv5EJhEVMk",
  "key6": "3ataWbkhjbTKEesgnw1Ccs6pt3fyfrV6PMU7aJBTLvTeFpgEtifSdNqqxtGTpwCKyjYgE9pBQF4QBxuM3N1YVKva",
  "key7": "4RjuT1k4msR9Q2XQSRwA5LmsdKnu3SLkvxP4kySxfHzTi41PBsXkEehAJo6ru1skSEjogBMSyaczqGVLEvv2AXkM",
  "key8": "xPwrjxDerVh9Qb1oihyAr3wtgLXpfPf7UDJgLKRp6VsF1UrDos3LzEd3wqw2dQnbYPTo389bB3k4AY8gXg4AG4X",
  "key9": "4oGhuUyZQzmLSRXcSoer8b1e4nBzPB8aEZ7ZSj2aZk66QziLqa2SvbGmj25A2kWD4HquKNQJAY8Z5EenpiHYAC5s",
  "key10": "5cz1S4ffuXgAMGhSWVX6QNSBsSqJysQFSVCFJfZxHujeetRhtXSTAKb2sPV3wH8aHG4dsBTuKpb9kBES23bkEtTk",
  "key11": "5psCpB9aDvrNywzoLSVd3J6Bjs2xqsG7doG3Vc1WJYCQrV6JNV1o45z2EqH4jPcCk8Zui2J8kNqxMTgVz9nDtRDo",
  "key12": "5UUvV45Qy25WWPzxyq7zqS28mYM5w9otKaPzi1tR4yXpLH7JyXtGagz4StPmyNNWPvHcm1B6PFsYmpcgJyPSZ5yW",
  "key13": "xcMjx9SfKFqLxHzrzLNtBfHv2dKqoWAsi1tbMt5jEaT8nkoFXkJb1TvKJLfo897eTmLxKiPxBoR6Z5GYH1YT598",
  "key14": "ZPf4nRG27bidpnoguSQpUtP8TwhgquYN4QUwJRGCXYySBNG6xXpBs1iTBLH1rvTG5bpxbSGfs9RontDbb8RkDeF",
  "key15": "EJdwKkPVxQU5o2MMj3pWYc3qGW6b3xBSqWLWY8jyV45PRibnpBSm8nJKV86iZKhoR86dH1GXFsbYABngtd5dTTj",
  "key16": "5nfKawnc19VR6UvxPTKT5Zz6kCXzbejMRimjQZ6fb3p2UjrE3mjuqingNU9Jz6xqKWBs77NEzubvmVWUsi8rAR6N",
  "key17": "3BX25tWx4TPJBQoZqJ7yh2vfC38NpgpgkUCBSFfgSwhT3v8DXsEjrYRuW4aMmdMKQkLiYEWprYg81E4qfXoevg7t",
  "key18": "3eDsKcXDecqrY7Bz2XfjXS69iFCgUibLQDHNzFkmGEVtdMiEt1fYmttsVs9j6GQaBp6Qkfbs8dSRdZp2jJEudGmm",
  "key19": "631phwnQBcUEcyTaMdzhbMYSHncx2PUne9zp78AtexWjJR6at3N6dH89y4ftDn5tjZJHBduDaiYqNwECteP2sS5t",
  "key20": "3FiNFRhM95xCjH62SxstrccvHzX8ynTzzLo86j6vTSfB4sF94ejkZWsUsAxyyatFnq9ZkKSGWHFhUXLQvBKKNnon",
  "key21": "5DZ7wkCEoKTZ9xF2uryHJtsiMan2SGaKh9k1HfBN1fHRcfrFHiFzSubLsm7fnL6JyhnuDqhsLMKDmmemhVXWZjQ1",
  "key22": "QZB1MZJ6jETKhNaCqVtBosDVp9cGbAb3xFVW2dZr7dH1UWsZAVJzS54wiq4LsVNRzyuJXcnth98G6dD6QTBR1SA",
  "key23": "2gp58keiiCFt3bbDWfUhS3EwZqbaT1CVnTkfqdDgFW2zWuMYAu5fSguNUXv2uDNLWURvjm4HURoTNBubzFggND9U",
  "key24": "5V9ApB92ZoVf8N9pum8j2DsypGPHicZz2FmnkP83R6ZQRs4Lc59qZ8LtdtLEqSmvJncgo7rpyuBP5HniR5hXFnsx",
  "key25": "ANwBdTBKCKuDR8x8omZ6Lmj5AiTnKVg9i3SowzqqSs1JGeXWoPC3jAqmVQ83vBM9fn7vGV2NYBRYAf13bBJmW8r",
  "key26": "5TT6hwDWTindXKP1j9sYkSbP8UPaBM2YygdMJ2Qg2YzCR9PAzDyd5QRCfdhcTTj2DjoofB7sod15s22N73aYWht3",
  "key27": "4nEeK1xHzuzbavZoxgwUnDLJNH7VasZJZ3NqFRYezwsPuJoxJEZnnhhkmNwKh6Xwe5xZ4G7rA4A6GKFCwKX9ryDf",
  "key28": "2CViaAjCoV5FPqdQNXH1CXibzPBuL6jpCJDkDHtn1aVQa1xRXwUm4t35AGRAm5ukhfb9DNigt8od4Rhj6nFqTcG8",
  "key29": "3rfP8ADqon24i3DvXodZadDeZgzWgKwpzikrRNWH47ZghEjY9Vnb1YF1vqeN3A6VLBLQ4V11dnEFHjx4VwSNxEkE",
  "key30": "4zSVBAq4yu1x77jXYL8RSThMLJ6WdYwdvZkfzyiKHTU8nb6ahyY9xhLXzeZhA5GUqiWDPzqQF7hjdUT9dTsRgxVY",
  "key31": "5k7p2mgL84L96a62T2DjfNUPVreCf6RdWVjZzSmRdWagpZDDtNYZXpVy1aqp7T4AtaUm4qdZQxKwiQZfCpLcXrHN",
  "key32": "2SdQKH8ehcWEmyQS2TkiKbMeNTHCqES1rzNqqo1zg1UEgfJfeyVprB8ubMjCMwxwvQdVVanVp4JbTFiTuvdTUbuN",
  "key33": "4kazwh3HnfZ8askdHYTSHVavopHUREq74Tfttyd6mXZUsxPV9tQGMzC5Usaq2EiyN7emEv32Nqq8i37hAGGyt1p7",
  "key34": "fFBs9hmJXSk3dHSVrft3irLPCLPrhtEQnVvxBq5H8X4kpZ5FViVU3mMQFWNJUqLtRWpQzTGAUZL2iaPFsmTvMWd",
  "key35": "25k5D7LHw3oNNuW7UU6nZWz9udKuEbaFUJ86mCWWPdReFwEuNEVH2G9XfnCT1Uv4x79jj4cjPRzWd95LsrBBbkRh",
  "key36": "Tupz2fHKSnrJEDyHtdNfRsBEGB2FUbNzrgDCGFb6qoaPn1HvP867Xz3mQWTvMR4NoEBBWCXGKeQmGhBw4UBFQ7z",
  "key37": "qoNk2WnXuK1u81tJFvmUSrC1LXcvLRrb3a3ECA75xup7DnpyZ6wyXfkz1GzYeyFzX2FoR84EYjtLmNZtB3YxMLj",
  "key38": "3vRgj79Q41BN3U4pLTXxPN3KyXKJUQGyvozb2G9BBE8ftSxUjEer7F8YNftV8j6UDHu5gjzM15gFgUUw2zM3spPV",
  "key39": "3ANJhgK24vmTCViQMUXW7U6rtQQVU8EszU9GiJJCQoDkw2nfHZk2YTKYZYeoYY5MuWEemxgfoBYbtb2GFWHuqsNh",
  "key40": "2jnin6iDw1Z7RvyGDexzeCnCEFC5ALNKoNZsMKX5nrr4c4DzNEjec1F3USYG3u7czhoULA4TJbHu3i6w4JJv6QPr",
  "key41": "2bcAjXYvksFA1w64snt6yx536hRyHAGGD41LfcJYRHB3UfQKubgeJEqVx1KL8otYA6uuZygEyRbggy5kyGPykXcB",
  "key42": "kMFtmkAUDiexgwpBEbSq8kWn3getagUTuJkB9y6NYfAYppb5fPdpLpzjhu6s4r6K4ASLeKgX76KFL6fgbW21jMA"
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
