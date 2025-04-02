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
    "Hy2LM6uBxtz6DuQQXpfsjfxkrZGAwmFXz6M2PJEg5EkaErf3awdCErefPwsq2uZVfXDbedABRA1q99Uwi6dxm1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zwndmpZL1pwUvkfPqUDmYk28MYuCo6WNBwd53ca4nm79rLcS63DWkwrBZ52mqr3Rbhmg5onDH3Uc2qXpjcmrsDZ",
  "key1": "3FeUn7LDoQUdemKNMoCgE6YqMT6G8M4ZPFCQEWPAwMXhm82EJRjn952KQ8tuCZ8bqgBz1rczw938ujzx3CtVKgHy",
  "key2": "5J4BvZuWAP3SRdPBpgEBCctzLimP61j1PsZ1G8FVj18yJHNodA9pEEgKF4eUoCHgMeo7JUKxsfQLY2DsSLcS9q8F",
  "key3": "4J5sDWyM7U1spY6zguSUHp7rTGE5dXcE9j6mMQ9dyfeyomGHU6xoGXYMeMd7d9BcmtgfFL5zBTZTHgi4s7VQgm3h",
  "key4": "5pK5TY3ewouMWszM1G8BJLGGTwHVR4cmt4ceuN5Cq2Eu7xhpty2nUMB85DsuSncUMg8LF1szvsdsMGGRgKjA3dNf",
  "key5": "3VdVPNchN1ciG9mtqKtKJDymxxrGVpGudnrnfcMcwMFSKBi1sMiHBBuEixgHx5BjciB1cZ6VHxetTxGau8VZ86uK",
  "key6": "3tN4qoWSaC9pYASE7ag3xG1yB8LNNUeV9d9KkPhCmDxuE6M8cPSLf7s33dA34MLYB4sSuLYqdVBXyN2BmtBb14z9",
  "key7": "64t2PM5P39KADFdX4AnkrxX9GmDK5G959yiFFDnQNPzV9dJuvRm9BXb95zTXnkTfQWgMamqLf46Rt52v4vFGXa4J",
  "key8": "5rMt2TD59t4JqVsZfe8jomAsN9TvwGrFTc7mR33PZMpBpfTtCAkJBSQcX8eRFBfmLKu2rh3j142U7Ht4rXHzAkJd",
  "key9": "5Qo7JVAm323wsBLjaTpFkdyPeVJWws4QNDvDraLKHjpwin1ooLVKXm7NPFMUffwZ1TU9Ze3kAtS4e6azGHsE3Pr8",
  "key10": "4hhLXGEqFNXJofX1P5RPhqxzN7csP8wgLwfURTdPGt55mi1yNRQpjnjTyGc43wAxofKiU2YnAaouhUpRMoaRBqD",
  "key11": "2PpjzFCFM3RqUDRYsP7MZHBCC6CtHA2V8iPuSt61insb3zjdLCt9Wk3PhxRiftu2EXgo3Ck7txP4FbYwyBxaD4Mn",
  "key12": "2xRQpKBMGzSnNt7XVioVqdJZRHBGbg5q47PhihZHJZFirrwx8h8HCa2QK9JrQWuAKA6zLgXr19Y4Aga66iGK3kWw",
  "key13": "467k7LvwyxQGKbrmYLpHEVrwiu9kjssbTbprdEGotABQR3Zc89KDti9CVT6xptsHdFt8G7qgbRGFsmzYH4XGM6mX",
  "key14": "3QdsUKmKEEsnztcwvwWCMKvYyEwUS66gCm3chdZ6kaqWCjMfsvzcs6mESpYQ4KwFPnTSt6txGdQWbSXB8f2GPiq8",
  "key15": "565WRgEyqx2uCeNxVJufgASj3tNH4iegNX9F777jCv32iYmc8PX7cA2eGnzRpeyebGCYYqByoGdGy8fY7Co1azz6",
  "key16": "4vQf5AnU4z6cRPUDfzXiDJfjD6UNQD7VJrojaRWs8L3dxDEq1ZkuNyoHCCTRjr4AQzXPb4VemGaqD354rWzSCmca",
  "key17": "5cHbcVBvXxZHVSwsxEnYszQ3pqUFgjhV3Je2ojHCcmqxjsZhAL8o24zhjcr5XfNbRtivjhvVy4sYqkh76BtetREM",
  "key18": "3HFnBy8b8DAmbbc9R2rYs2CQKFME5HPrxbPxXvwmiNXSPU2FwvUULwx5e12Jmxp82XHe9W6FSr5ezG9fNYAPd4dC",
  "key19": "5J2qAkesTNVRmNjqCcndGNY9EGpMdQeAQmPD8iMZat98CjvGeHfXjAWhZkGd1A6k45FHqG1oBkoeFU5rfg2yjbPV",
  "key20": "66rSo3ZYJajc5orJT8CaLEkNbUKNBBJMiaGiBf3nRArwvv86bffWY9TSwdSk3JPP7apGn4e1NReF3Y8VzdZmmUct",
  "key21": "2LsxpdeuDW6DdckF6U1oNXa1vYhxkvGvRmiPeM7r5bXj9qSypYVysdxRfRQHnMzGrbxU7SXn27cswoTxLA8m9G6Q",
  "key22": "56vERFzWnFS7NtDxLS4cqxWLuGBMCeXfyVvnfhL9Joaud1mq8sUZexr2Zv67mbLcLyhJsArq1dBbBBjRgjpZKkwL",
  "key23": "2uCbFY8HrrGmRUex2hNfMU3nViKxcrEvSPdwCzF2wnEiAxSehTQrjNKDN7nd8ntEazvCX3ASwe8EbHNoZfZYLX1y",
  "key24": "6xHBdHKNKnrpGTa3x4i6F4X1PuVApxJfpmZHTxU1d3dFXKRPLHvHLu1eGbywrkWHGy7fg7BMNRdUh8hmUdurXYa",
  "key25": "3MN2TbvSpuve5R7KGVQRT2DoLNtoN2QF5HvPmQWozkYcXsnnJxYtMb64poQruoFQpjCbkSPsCHGymXSmrZrzbbxL"
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
