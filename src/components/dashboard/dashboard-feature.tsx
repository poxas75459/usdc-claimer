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
    "WyAsXkaiVKhYa1o17D9PWj25qEqVFhbgmWp9JgBg4vkLkfwEakTSjHDQijwbyaobaPDnqHPsRAohW89bWJCtZxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ax4a2hGrE5uW4UUZoDPrrxop2fvjVuPcp2gnv9kZKRGeKXtazg9wAW5Z2M3ueDk6jn6XK1hocdZWhwwrGZqfSeZ",
  "key1": "45qMaHcw8yeZ8zknv5MZE76H53fLW4NjTC9BkqakbEiFVp4vQURff6HkXrtiT6hnGBGnQCRMzgVhVbCVASTPUgeB",
  "key2": "2WeYA4a1ir92W94H2iXnKfSEDvnukPwiZdYa1S94yHeLZhrUM6wpPiyNwPdDDmJpm77YuWJak5fSdq7cNpmmRpKy",
  "key3": "5PtuypLhcAZLcLq8YmTdb4Uxtti7i64wBEXq4M5xCPCuakiPHL98whV6vxrmpfGD8zSWSd8dKcrNGrovxXBCLMbM",
  "key4": "2jKPHdELGccXWexQRHcsCGiUTbuGd85Ueg49cA8AqywQSVzGRZz64mfswYteLxsQf2q4evksvmpPs5rwcLTtHbaY",
  "key5": "3zPfgf4CkV33aYyfH8bdB9PgaZoFKfzn1cHaA93kdB6LQHbHx1LRgwydgYH58HdaJfXGiWJW8iNKyNroQzGLxoY2",
  "key6": "5GHEw49ZvP9pQoPH3hrJmYY8qFEKZehiTFfkYKmE6dSkMxThzzZM1yqAQZpKnUqGBERQ9c4Zsx5DH3WK3J61Fo99",
  "key7": "2982Yawe22nx1HbgUH52h7XEr8qsUeJNEBuvpTTsM8g9WWUEvhvjfxEB4qEyUH6cip3X7mG2Z2t3f5CAkeANQirq",
  "key8": "5SgRdDDuNWizTqRZ5G1D8s5xAy4ffBiYAT2fg71fb9HiDk8QV2GJsv15t5ppHrHbtZXCsq6XryHykWPscjut4LmU",
  "key9": "28b8GzY8kYbFMvFMf2Ydf6LP1NTKSpmUvNGkoxuXDih6XdFcbf4qv7ABXVMtA5ncEf4DStv6845fSdRLg2f3Fduw",
  "key10": "4LPvbd6NfkdAaepkPqYVQB1zaQwsWDBjDsj1URPvuSqdn9MeSPaB25uuZFuweN8mCKz55C6dYwZLLwUGTGM9EK1v",
  "key11": "2PHWFyjT9MMj4NyiiSCDR6P8SFetJxGRpwsNokYnvSSXeRQ4ksUorNYgk4gMnESZC4T5CddBZ3qAGG7FV2HqunPs",
  "key12": "3kXs5em2JgNeFPT2pXX1mLcRUQNFgERTXF72Kd7UUD4Zon94UDLdpDy3QELeKLhebWwcNC66oo115JpLFNzsmC7L",
  "key13": "3ptyEdZvFuRBwrzk3X8Gd8KS2fzs94dZMzgfwu6G3yGLUayeYQE98e6dVKbhmW2rSSyNVLSDSow3GPVtpqNtGqLa",
  "key14": "5ebeZcbkQ7vH9T8iK3Q7GPrB97XXp9RBgU5hWTdi4fwawpXfYK6oY2PFpgprzkaWehvrr6eB952p2cqHtFNQaKLV",
  "key15": "4sSsD448FgrSbQ2LYet6LJ2epGuMT3MR2QxGYTy5tVv2i7Kwwchzqh57LcaX4SB9TMt4TgyjCw2cfNMXs2aHsbb",
  "key16": "5B7xH16ssxA58u5BgFoMhQLopVSeYhUf3ocbkdVTXz3rEKDNS61XZvHAUJ9CRyPT4N6951HLyDZSbVSXXv2XEYPq",
  "key17": "4Uu24Twjt2Y4rRzZju83AJYmhMpjWeh2mwGAPXCXBeyCbaStQfXEV1FenKuaCRKVn167MPzakaQ3ZMtVBmJvZBao",
  "key18": "2E87WpCJ51YmTHxGbJYtLzShNdqutszijzQQqtJjThFjfdr7DJeBBmkqa8Vgv6pGmd9RyyxaftpncZSBtVRb9KNU",
  "key19": "Z2P64tckSadcB2YFDqTEs6svdnef1Me27avmkYGTVAqFdGvDarCZnoHbuAnTTeqPyR9Wcw6RXZBnP6Twqm6CSyA",
  "key20": "2rwSymRNhs68PqSNkoeVx2oDJTS4LD88JBX2reKti4T8URnTGmnN8iUpiAkMdYaagmdg2TsxhncfvfuobRvyCcEj",
  "key21": "5R8NHwvChCJVBLFR99E4vA4qfAuUNGbtxaTQ7Nb2TQBh8Gi6E9JUN7brhHP6vnBsT3Z7TG3t3pjvbqqpmtUJP2f9",
  "key22": "v3s1GiSb25AeDeU3ADSBLfBXj163BHfGZiJnGqPz3gutK8x6jiCBThHj4iP4uuu5Br3FLaPdwkEyid5nmysKrau",
  "key23": "4Y7hGyWmo5GTemG2m8cVB7heJjpe3sxF4u14CFoDpDxJ3pHKZ13tK69L81HLwCSHePhr4nX14cYjYe22wcXqQrM3",
  "key24": "4ZUX9EQy7H3ajiZvr3MmDaeQi1u4qBSfr1gcAXdGYA6F8PnEGqA7grJPM65ucS2BQPJeKwjmARTMVtG7LVpHbSpj",
  "key25": "G293RNAuxt4TQZjFEKKoRyTpDTzZCBLS3PZ4S48Soi8GJLunyAXAiXa6AL3BaUECYgz4HBkL9QYMTs9up8GWCU4",
  "key26": "Nv8NT67K8cV9D1YTKwzUM3SZdGxY6gnKx57VXu88SF2QyrR1juWeXUStmKeSPzwwnkGACxRrZmSVtqXULqqZPtn",
  "key27": "5gCQVDYzCpz8obqnEJ25n56QTJuuMQowg2nr31R6aDFSQRbYFVcBuf1q6JScJ9qWpXi4ANS1khYYfLRGZCMjpWsn",
  "key28": "2mfvnggDxiRW1XzSUkbh1nwd7UUJk1USFDkHpAHXMTRRZh8YgyHaFgGqXDdcXLkxqSNVn1Z5GrDj6fhAcEjjvNVD",
  "key29": "37AU2iGt8MD6jhB4DSmBFupzEvpuwBTRpSpCbtH92KUYGTCiue46iLjsrWm8tQ5aWzCLqzNtuv9V5rqeUrn27YbM",
  "key30": "GGed8hCJL521C4dA8HDJqCW4XpHC94BLwKqm6dHiup4pP9yhps5epGR2GGc5V8SW4C9aaHxbKjWFLfYYxsLaAxh",
  "key31": "3WkLpAuuaff3ZBdKCXPXN6moedHFXAFVxz3cmGRRVnJfayuWhhyT3j5kUHHXE3FntLAVNkkgYbFKKn9Cb7Yv6FQ1",
  "key32": "3uNKzkUcdM4PZYbjLgdNofZF4CrzXUf4sHPW19j11FHkVeDRcV5MwsrrxRCg4CAcV8B6mFx1oRzRs1ywcrZV4gW6",
  "key33": "4punkMebs7eCz7htBJXL2qPkSGN85cJVc7pq1oxh5UEvubMSgMVQKkiRaAa5LuV8nTEK7vgoQhhX2DmmRiew5K48"
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
