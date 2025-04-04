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
    "66xC5By5hV373Zc7Vds92oTy4RFaK8UoNLR4KTSU287GVtd6AjvVCLSAaT5msjnxR25CxqudSHqG1UbEnQCy67K4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sTucaio7bhaazWMi5QpobmedZ6LBow6fngU6JSfgGWuKrU7jMgnWSdaPvympN9JEF2nMxj1zECqPAMyGrdivaqs",
  "key1": "3rB7kjM5tdgtQZxmQ3GssLzdTsqWmriAXdrUiD6u83N5JVsCi1LRSSSVdD5pJVepSMf6gL4HMrjWGE9HdnEZp7YE",
  "key2": "3ptiM2Kxm6MqEWyW31GZH4VBkVmspHghC2YzjSk7sm2x6PbhFkvUDJnDevu3LMNToiBGWD34h7q6UfwdQeK1yMSW",
  "key3": "4jUHhYKe5o3kELgmzZ3CZypNtMCWgqLkERYegNPWtxmXqDC9k4keWv6Efxkb42YPBXqmm7XNkAETLxXua6za3vNg",
  "key4": "7xdwgxmzs8MHGh4FUXDXeAXV6fQtNah2C679PRCPjk4dYvfqamVbPJ6XUfhxfYNiWuZpRu63wq5HwJZpBx8Dgjs",
  "key5": "556hbyYjELSkpHXGmQTGYW7PYamCUqnqD9ysGCMvFWHKiomnpj3rQnAXv9DV7cLp2JPooV5kpiWP3T6Nv3Q9zSLd",
  "key6": "5EVNVFHMuKLjC9QtHNX2yNt72s2x4E7LYk8bjUU2mo5woJt2SWt1Gd9v3W5QA2bF1kpARtsnsLyoFEsrkTSWKAkx",
  "key7": "5Tf9QaqGvwuvaqqUJnc9p64oxzXBjKDLgdHGhjTBmQAvUiBqaW8WHGMeniU4szqvnGdkBEWQZAEpakVGVRzQLdav",
  "key8": "5oFKEVXxQ3KSK3H6VWqu4fbFmK4V8UKndiWf2jpXNjuu6csz2y5rF2doaguHJhLZVo318f5qa4TiZfEt8o9Qz38",
  "key9": "TSyYsjVtMMeoP5RisWCbCBLVD8UNTDZ81zkVKgDMMdkZdzdr7ajJbNioAhDN4EwCiMTRWLip7vgCaYQZVcRA1Bo",
  "key10": "2u2A9AxY5fXcDmaz12PmkvAKwRNFU9SXRo6jPX6ixo89a4RwEakRfNJQ6UZb3e9AoNFV8hNPjmRB9avAAPcEzfW8",
  "key11": "3WsxKcSP7AAPeNFR8mzn8xdkkNWLF4XUkzd86SZEFzpKxJt1bNQAhtE4U5Uz4MnnR52RLkVFypVf1RHJbFw3UhVS",
  "key12": "4Mb3mVn5fTYHDv5JHPiWi3ZhWDHyffTofpsjgAfG1CVpRAwtSHy9Nq5rWk1vdywn6yf8XrBsEA2vcZfCU7GcHAZA",
  "key13": "4sSp8TmQfoxDUSM2gBjLU44pg5zdiQ2UsFFjFSMCYXi3hwgmHShwbDia52pbp4tLdbh1azawjKSyJdxRqDerHzQd",
  "key14": "5x1znXyc37t7Upste4sB1sMsNWDvNfEVSBNHSgDjnrpyyuL9pWJ95j8x2qLFQjUxC5cEzqkx7hdrVWM2fimWaJZw",
  "key15": "2CNrdsKV6hSvsNLNZjLgSHuH1cNQbf8nNG1zcNJHNinibHW3zwgSodJb6po9q3PyMGvMkjFMPftz3gEg5Gb8PdB8",
  "key16": "2mv9Y698bKJd7tfNhLBh7EQnopn1CmD7px1vCRTKQTXxDuJWb44HRkgBeXRJkLHNSm72zYuh7w1jY98HeB6x1fEA",
  "key17": "5eMUUdHsKLya659fXoJ5UmaykyVvRWsdsHhGtBo121y5d3UZ8eUYcNQRxoZGEirLMamkNrQP9VaznBXF3he6BjX7",
  "key18": "65C1o4FjAFt34AhyHN9ghPmtyZNsa7sYhz3yEqiatZgnRa7SXmvwWUYgscK6gfoVs2PvtDURtPZWfmHPUXh9Wn8P",
  "key19": "5F4U4hDPn367Ki2CphkCyKDtiANg7GTa7xU7XKXvBDHfQoMDAS2NkLZ7CQ7jWc963yn1peF7w9EALsMqn5XF4PZQ",
  "key20": "2GU3FLnk56DcWFs1MAsREBMbqmK2K1bnteAU6jCNE65D4LGKM2HxzbpArCuuL8yYAn4o1pGQXxdBwNpLrngJ3ESH",
  "key21": "41XkHpPb5BmmX6N1DMWfUFQSPz83cKrFWFoHPyi6sXzvcBMM6gNMfEJynrAxhVJhp8mgyc22mTuhQn2uEJiU7gDw",
  "key22": "5kxNtiEi9L9ezhaMypm4epCBfxHqifYEBeGKbQytZUrJSRwj9fJM1QGg95GMDcDywugx6B1y8wxJT8rz5fbdv3Hx",
  "key23": "5goZcaUUM5ZBLM9uApfgdR4tg39Nn8rTYvAQh9j9YjrUu9Ez8bgGdF2KpRE4zmcKyUergkzYEmbRZcVFsgf9Z4mB",
  "key24": "3WAA28j8zqSSBx8gG9iPhc5aC6TvRaZtFihhgYk6L1kCUp1bS7hJTGugX3PZt2EgSfoxDDUTkyb134wTLfKKXEU1",
  "key25": "43UTYQEMo5vr3kKiR33FMkSj53TrH4SvL1LhZx73LndJuZtK4sMGDrTeG5zyGCRMeBYoQNpAd7aXFZ4roWB8YdgZ",
  "key26": "r5e5dv6irpENfhGXUEc3BJ3hKpiRqsvnSZdC2Ty6dkjd1C6nL9iV5YkukGVgrsAxh5W9pM5cfQ7tNx6qKgjV1Ym",
  "key27": "2QdcFrBFdzZronD56fxzYhFB1TSsQcCfGECgPKtoqCRoYmZHL34fJTdxnhFutPubECoib3PSDCWsGMTRS31C34Mq",
  "key28": "52bzN3bMKRtnw7LMqoCV7t3iFw9e4agwtMezabNgzbpkxCbzV6ArUtuhnpbPrCub2hXn2YyiR73WasBfqvE1TEps",
  "key29": "45peVf4tLxMqehEGXebLoFozoWNiDA388uUiEYDtuuk7FPw549ArR7qMz2yx2qQTZmNacHRsezumdgtQkWtDKoSh"
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
