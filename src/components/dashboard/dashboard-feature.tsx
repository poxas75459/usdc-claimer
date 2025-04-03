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
    "p2x9RehcMW5NZT1BZvHtuVWfE3uuVfHGY2VfamihzM1GVKJCFQHbWTQbJfHXk1APch5NNhad5mE3GmfWALWPug6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5owL63QZBKZ21WPusfA4N6yC4RXShgfyGWgpP9zqxJzyjt9zEVUd49pz65tF7ohgm44eb4fSUTsSNAcF81CP8hXy",
  "key1": "3hhzmJA3ZkmmNo2m5yYHc4jh4St8ipAAZADjqJasDFHAUUwRWU8dqTK6mfYKjhgB7GLiCRqKDbjHcydKfnte8awo",
  "key2": "2D7QaHJqAajrkHNdsLAzRB1ZkJBA9qoanyEN3cUfRWBRCxqWZseyD3R7X9T9K7ULVE6sKzsNqjWinnEWToZnTcPj",
  "key3": "5xadEin86ttKPyNq6yzbBJNrWrrKGL5yWiF6erGUzM5ZWAZt7K3kNumDmgfv43Vcx74QxYRqtHfX9ZHiGgQYgXDm",
  "key4": "43HPNJMnGaqfFz3eZQ414Fbi2g8txWgfJ5h5jDNDLGgEAB9WMVdGDYnUvUiepP36kzXqXTxGNf35qu94FQWxXNhy",
  "key5": "5QcKUpy9aEXdP2hbmCuEs5TfAYHkaVqVPehrta3yn9WtarXEhEAyAFToeE5NNaiYvU6NxgcvTPojbHwFN6sQ88E1",
  "key6": "2pzCNcxNAETs21mEb2ybFXuBb51WxWUrL9rmip8QBZARsqRAbiBiXZxSbnudZGvTX99geHptLRG1fQhg9g6wzEHR",
  "key7": "GQ2ZpwJFCrbXLsCXj4mYAY7emBSQQiZ7xezTrPBcHi1t46GpWEJqyTKeHeutvCFbTRFLyDSQgtSrKrko2kf3S2e",
  "key8": "3stRL8kRoDZx7RQNTPVvgVQz2eVbo4ov5gCXB6gUsap8Rec6jSEvzaKkFXZdjV4ZuQYnW28vWpKBuuUYeeuJ6sRP",
  "key9": "3zgRELQc7Q9RPxHKV9AKeKQgEjhiMxtR6qCiuSBwgVeMiHdjzhtWWjpGMJQBsLpRivZeEQFG7rYJLZZpsqTYJow2",
  "key10": "3wZEA7hUCcV3WdsKHWhD5tMykE7vTVYMagzCrWY6Bp6qUuPxerT7uarpVjycFUaDu9qLPfeGmXdQkHrV1vpXLGoH",
  "key11": "4ywRiBEyJxTs7VREFT69ZTKwUnPBgSC445W66brmGDmczdu28No5oVTyCvgC1bj9mxXjfgr6HAya3a5SEpzbyehp",
  "key12": "27Mac4HaVEdHrecFWa3NRdBs6SDnoZ42uR8ENQTXWHNmbE2u52h5oi1k3PdaRrsrWFF3aoV1HoNXCbn72dQ45FDn",
  "key13": "28sBsZ8C5n4NQPB34tNgZdCxvxPAc3gxNYVomxYdHnXfBXoM8XhWSz4DRME2m2Sy6TkY2iYsD8CfGqpXk18oP2kn",
  "key14": "zgjV7Cyb29gTHmLc81CPYQKteToYbQUYqrDLxiuGRkroQNRQ6n11oV7P8dKX7dtDrwogcm6qcXn9TLAKAJK4JSM",
  "key15": "2cb5zJk8K4qpruxB4bJbHxB27yEgHMJcg9HuqXZXH2CzS89ESBKfLnaUR8EXrriKJdFYwVGJsYDm7e8QezViuK3c",
  "key16": "27Bgco14JZF3YNo7QTW9pX9dVZnyrDMyNYSdjPaoTqxpZHxDnrSTwco811pUv9tNgpSvJE2tZS8NuCLS4QfR3kTQ",
  "key17": "5y6Bogj4Jp1KxGEQzhrHAACaACen7TXYEZSjDbusLUWb8ozGnss41d1Ro5zEtnG553eJrFcmyZSRnBPrQqZHNQyW",
  "key18": "58i3zWLxVV7ZuApQ7KzU12woF2NZpZo36tNq3UokAXYMeefDfpZib9MMcvmoPrnBLu7cr5o1bY9hperVYq2tHVBB",
  "key19": "3tAmyCjySNCQimnwcYaibeBzbA3fzVrgXdEqfUMxHkTayfEy8HGtQ4gnr79ahMnFgs2BSciNvDtoCckMP2TQiQEB",
  "key20": "5F8yMuHGS43T2C2czyeneP2tnjzb9YL9CDbnMn6wrfZJdQnBa1MZPicpDQSE1FvtGoX6mZGY4uqykSTe84CBsj3L",
  "key21": "36r4arZynUnbZzxukCg22XPQa3pMqNMxqFedwmhJ1N4PvV3L4sTniTDa36hTmZAQZTFvgmkBGKG3NKPiyy52Zshb",
  "key22": "34VQUBhcrtM21oxx2tSXJbYAhZnyS63GHxdtfx3UuecG5mpyWiQJ2uQaKaf3uHbMJUJVrdozL3BQddfpdei8wRtb",
  "key23": "3RrMCwQo7bsZzb4hCdmu9yQH378CAQqrKdtbJXki5eb1zcWoAb9ufnFZwAcjfJtQPPFimhPvVREQFJq41sSPHwPm",
  "key24": "2w1WunZViWRPAvLTs38TkdA1DMpMCveT3BC3DG7MX76AFG4YDVPuMrEA9uEb2BmaCgUjmoFxHQDXVHHd5qrxcbJC",
  "key25": "4Up6FvKEeN8pdNJdjDJ5dgHMGKAkG4FyjnvFJujrGW3kFjf2gjD1gU4q987AB1uRwHMndicr3YvCYxtdzagqQKCT",
  "key26": "oTVrJyZYZc5cyYuA7Mf8qBCJhM3ajyPraxQuam4Za7265siniKWBBgtyBE5hXyXduuAPrLZzKnB9f3XQgKkcnm2",
  "key27": "49pAnmv5x15gwXoJy37ibFeKytyT5hpx6H5fQYG9M66KYgwkCa2poYaevkKCYup5U2pJ6rDXMksKo8bHzeKBbDri",
  "key28": "5KNwVyGRBdyGcT1pzfe5wPidUzrUiyuK6dBemUGw9G7YPiBCx2JekagMJfsUZykW3VrZBz2aHumab3im8ARrSqGs",
  "key29": "beFWNsV1nVy9yDNRLkCXwEVoQPQGY67YTZDy1HUf7fE4A8iZCzpev2MNmX625kWYX6R1N9nhMiioFMUK3QfFQ4v",
  "key30": "2GRiuvisEsHKtrD5osvv17vxtEbNR9sz1w6tGxEtZCL7eQiyKeTU8vMbN1YM2zkYMoMuinQErWc5JBbySpnhR2dq",
  "key31": "2r8PcEbDocDpdiJzGpgWRhiLjQj4Qm2CxFzwfzQkTi4vtEdyEx2H4qGC3X2BWxsC1E7rCiRZfkSNLRZwoSqfutUF",
  "key32": "4iaHnQhKTCwF6VEA31kC6CpfDPkfwkMby3oEMWUgV7bSVD82pkQPq2BFbxcYzyw8ZYHcDsnSruqnG3KTbwmPWruL",
  "key33": "2ruKNVU4cebBJM8WGSvJTUQzDxQUBPJQBNvxaBSitbHRbd3DVDEKbhW5ACNmqRdf5dTvw5ZhRrmGae6pwYPbPued",
  "key34": "9t17mjzDP4oNLSaoLXuRwjewh6NEuLbh6FvHfjWGx22dGaz9fEjM1dhWNm7WCgKkt7z9u32gYsNcUq1PbUBuJGd",
  "key35": "2jNeefBUJeUNN2AZLohuqLqMUH987nkNqUTDpkSLCKjUv619BAzdJ3PDxH2VyNmv6YBYqr1uBTHQEUUpMbPpBEbQ",
  "key36": "4YpdJuJVMMAgrLKqCfmVcnLsksNXXYt72qD69t8bvYoN9vhhFcSktQzSFtVCTzsp23QJ88KBwWCqEykaznHKEMVZ",
  "key37": "fgeq2P9pHDmSCLwzueb9pYPSC77zxcHSzS4yXAqFgyQrZ2sRM4o5BrhQR9vYgsVBKjfoiJn6on8qTg2NHBcwbCk",
  "key38": "3jQkqtopC677p3fpC4kVi6LTXYkXQpyKZozGSspdnTTNdwJUKMD4YEYExoKBaebr6eDsqfcHUpUfh773NnmtsE4D",
  "key39": "4M8cc7MKcvS9Je4KGeyuNQ4vfM796dpEpoAQRnefLb6vQsYnonBDSUqQa1hkpoWLJcMuqwLBBwT9XvxZcjZmwNU3",
  "key40": "46QTQGAvZbHx3d7iBBaFVyJSs3cVBBU1PE92pdVrfU9siS1YEWW4jpbePPtUxTd8ZYaN6BFwzG3vA3owXiY3LzKE",
  "key41": "4KUfrjRa3eQPx4gRjjfDvCjW17Rrj5kMgiQUhkVRc5uNtjFGZGsfXCEDZnb9BPvuwgsQsdG3rMH8c2hsvZKRYte9",
  "key42": "X16Xfqa6QkkP1idyXxJidBxmDizTnee7H9mfmTdfB64K11ieynuE3d4PvHmuQqRURuRJLFLJ98nCPsPzkxfFKk7"
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
