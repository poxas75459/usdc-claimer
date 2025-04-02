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
    "3sDBoD8opnbfzovNGkzTSXqqhpZwFz1vJXYq8ztRx83Jusc9qWvVJAYp4KkZGh8XZ2KnKuSExDm1FHHEAdGy95ND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K8YPEurY7R2MHu6Y4pAjmC4oPvFRZ9f7VhauCb5ZPgaAYYDZVtXiuf49i4kNbtt6RpAwTmNv4CQTd9GE2MFkNxm",
  "key1": "5N7g7t3NVq6Bbh3msf3iZ2Lrw7otS5tB8XxYQzFL7PV5CsVDnLSb5zWr4bSqrGg6MmffdqRE7F2npUFRNA7f9gSf",
  "key2": "2tU9rErNPQcC45jWTQL5yrT6kBzgXezP5HNK1swsAEqmQj29rhSMyKh1p3fHrmwqxvC5AeakLbdTTkksc7wpV2Po",
  "key3": "4UNVbKH8Tzrq5umTpjpfCuhUt9kKUw1zkR3QDitomGRntzpWGD3rwfysM45mXNghVDs4sBbQ6yqJGBCM2PBDnETK",
  "key4": "giYdKr17fGHbgpei3r2kxZgzY2VxwqGrWx7p6GgwP1AjWz8Y26kneZCigLRHFMGGxwFbJRyPuvjEdv1zf8At5Km",
  "key5": "5o3w6m6F2pvX7UaMec2cDPwZjxVgq3dUwHftTcUsH5V5oXXTE8vvdRQydwXLkqUao26rPrRgJ4x8S3yiGhu6sEWr",
  "key6": "41kQzGtqakNwRpYnyviQtrm9qunTbDJ1vfqv2zhryRhBxUCH8hKkSog7cNvG1isDXmNKNi5iUFTXVBKgQb7M4fQd",
  "key7": "5HZXyMrZa19hMVnMGCiybbmrvfLzHH6oi8gqPPE8KHy2xaDvPCVyKP5RCtaHiaZmwpFuoZmSgZy9Dy4gPHZUiA68",
  "key8": "4btHZd3h62T83ZVNAmkhKXy73QFzyckSsPvzjJu3WaQdgzVKFHNB1Y1jsSmArY1g7EoALUE6fqFJ5GXmbyb61yzE",
  "key9": "5oHjPgvViWuqbbMJrt5e8ZkDEaG54a1mfPNBBnkoZvsG4GeTptamCisrPJVruEKxvck5z88CgPNAT92eGbotYtER",
  "key10": "31gysGbDXtnXHmYCrQjA1vsKefKdJpCy8EX7GLySsq9EdFx6FRQYj2Ht3aWQr2Kwz2bYcwZQmRyoTjLcgZc9o7ir",
  "key11": "34pUS1HRq2Ms4HiGj7JpZtNRs9WcJHMq2qUCGvyB1BXqvxnV338B6jEotu87niXXX3hYhzfUsqyf9nBKrToD5fmg",
  "key12": "2SdmxK1y8MrEv1arhCSn2vBFPua19VWRT6zX39XfrkgrY5PiTpPxgUm8u6cfZfibMmKcWcGR7SP8KTdMKZTpLgJv",
  "key13": "ApZPq68bf8am7KiBh4XXHUa1FzRTmxzJPbQ5y1KgSk3HGHudQ4NFU2GWzNPaCQzK1yv8KztoAmWsnNjACRL8o5v",
  "key14": "2S1rC5XPyLDqRLJEZojiM2adWcNN3ABS4sSK5e1Mxb48tKf2RBt4VJ97pF2W6ZRguqusd9Yta6Ayy6rynLpy8Lzt",
  "key15": "5A4EAzc61jnJnQfcZxyoE2KGUJmL9vRVQRkVaVC1U5FEw4QjcRYz7nFip8n6ggZNk2wC4c6H3drLoZHf1h6f7C28",
  "key16": "63RfABxD7sNg34cDuHb62vMPU3dNpAnc93Cfn1FWDq8TxKD8eSQh7HEQXiJt5E7ud7U2szuvPCNESDu2EafhQjmz",
  "key17": "3g7sD6zq6J1josGsZgsSW7KkR7QuZJxu2p5EvL6g7fs8921Ez8dhmr9qZ4AYqppYkggt7kbvyim7V2YitQVv1Yqc",
  "key18": "3yT7dtQ2eLKsRHrVjreDHdJwq8xemJLS4XRsnxqcf7CHNhfYyETMSQZfV75mNUusoY1VJQPMfEyAKU3kbQJieHH9",
  "key19": "2PtYfv61S92brtrXmEU7RcUVJbzubS5dYQTmVTuteCRSAw3sJ1sJoMKSNjuzCvvqzgLzfZLZk7peLJMdja3Cd3pA",
  "key20": "2nMss155Ga9wMG5CoxYFBnftc2twdju1ptz9KtBLrcN99a9H4cWQvSdbSruUvHEQKpQkH7uFEPXnptCXanUYdrcD",
  "key21": "4SicafxJg1J3L4ztk1wMmxGCc7SW8i9WbDboAfKi1XoR5X9GVUsFdAiBB6q9GokwG9SyC4VapwSm4CmhsYrzEjNb",
  "key22": "2bNZUjdwzBZcrFPbzYrtMbcjLFBQeZrXnLGHDwdFij7ik8WmvREfPXKLAXKLY3BMyjjLQf2e4XFEYWfkocGfyYm9",
  "key23": "w11VZbnQp8L4SJdJjkAZhCJEKwM831qA6DCgqDS8QB6U9kGTw58asVpYLyqJCVA7sjRWZxsvjyQAn48nEbYGq5S",
  "key24": "ajGutkEwkYLxrcvXmYWcyokKp4SaUnyWByNWd4Q5Z3YfavXSbTeXC2E7V2LmyhGc4A3ojYBQt2BvLp5e5X2eWwF",
  "key25": "4H3eyyvGQctasamxENrHZWo72QGLcMRZMXXzaNmbsHRbRgvXiJdeCetUbiHqQcQZt2hT8rGH1jewBhzVjyT43Efh",
  "key26": "216u2wzhuWJPLUVc6iJMy8DB7dvNNHAw92xcuLLKQHTXYAMjLYEd7W8mr76PPihyJwA3f2MbCJdcpYDd5GKFRn5t",
  "key27": "43rsvXgDpL5xdaAYfT3HzmrFTCX3ZaeGgeUqPBL43h7JNn5rviRNktafaDLkPz7mrmGkVLXpSFxR5i3qYE1Q1Bh9",
  "key28": "B7awYBcF6Uk3eBw7pLUtcasVKXer2vyq8mzJb9138xrGrUL53Y1MWzuyyc7wxR6UrfRPx7Fk79LDQT2zaCixgcT"
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
