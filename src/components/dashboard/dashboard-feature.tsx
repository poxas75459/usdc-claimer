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
    "5tFyL1BxqmrqzGm5LK5GPzFXVJWjHYrJfbPMu2a9ge9rqVJoBGV5b3UzVvqVLtfu9z5qXZvRFoBAWcnR95SJ1oQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DhTiQQSnH6dS8MM614S8R4uRkYqDHATvEX2A4nEhRvoKmHzX5RC6Svi3xXKxVhMyLxmGEU38n6jSDJFtgWUrdP8",
  "key1": "5ZPJcTHSXeHnNuwdeo1GPdFqu2TJNLfUuPRs2kveCtNh58F48JdvSjfGWB3qQsvKn5MJ7EUxH6M18Hmyzx5tmaDS",
  "key2": "gASnqArt6p3N34RF9Y12bARm8ZQM177C3aiGeFCcbBKgSuPkK1gfHDJrHTW8SRnQFGt2fySgsarNFQk3ArBwMbc",
  "key3": "yPnXEzx2EXstGgu4DC7EQg6z4hyn1kiL2hnCLuyRkASTSQmSz3CMr64EerExmqWuSeCe2kYpzFWmZMgitZTizDe",
  "key4": "59oLepUy6AwFLueLfQwQbbgQJjA6NzMu9TeJgCj11RezrJygZUBm12XcHQxS7Q3CZhA6mPEVGWw5JK3W7yvqSQcC",
  "key5": "55fxwxyf6Exrsqbn8UeamRNkfHKBZHiRfPgVdBbGVSS5m1vWQ4rPZ45pYYwJnftJpjD8WyCkWErgHoBqzF7BSY6W",
  "key6": "4U8k7k4eXWR3ZHTTshb5DHCSRxuKrM9GRH3CyDYwrWYSJNTmfSrQRfM3qHrxAEfTVQ8TXtuWWsCQiKf1N3HFnFiG",
  "key7": "59Cvaqhocv6VdqKHZbA6peeSkMtUGdZSpQY2o4n3mtTQSprq2uL98WkcNTnR4pqU1p2cQPtYvWU4qX1y8a2nWtJT",
  "key8": "3Nn4RT9vktbyznuL3Ki6FuipHLVB1HxCfQsYGeC3NdAJFeiajQtqHoLRcPcLGbwAUwKuR4n8AQGBL497aGQ6wDcN",
  "key9": "4Zdaod7QXfbPddeGDCRuwRfKV3KLQtERugGiMmdrnpCYzptxZ3utgzRnSLkFwGWThVSbZCSsFZ9mv9sGXU7UcRtS",
  "key10": "4HC4RrBbjQk4e4diSFivxSTaWB9iuQfyoGx2tiTQxZyUD8TeVcr4dSk7kToTStW4ZQFvKtd1YAvH53Ckhu3A44zS",
  "key11": "3s58UwFQdu6RuX4xU9D436sR15WZX9e55LQ3aHKYGiQCdevBmegkbPrSjw1f2frK4Mfeo7ND5kNVvNmNJqePYPtb",
  "key12": "ErvARavJ2yR9vWwYMp4GYxZiGzrvzHR53Te8duPLyxBXitQaJ5KYg5JnrxSfDrCsKfQqPFQTfQzjHiwpjMFtu24",
  "key13": "2FAcFJGAcaGWNHzfWPhtK5n63Rj2DMv7AtZc5xkTnh2Q5swji4XeAPzYen8wQrUho64H5VGGmWFoiExnKWD8hLAL",
  "key14": "34edTRk1qQQx2CNxF3r4nzKfLZpEH6s7ySuVqPCVjG5dKgpU7Vp7pFiCaChg4RmvYccrgjuTEEcdFsR9Cq6mLkSd",
  "key15": "2KT6x48b1taPW1Z9yMCojButkWr85uMjXySqPmWEEHj9dA55eumCVJYrRo7pDJsaFrpiYaN5b9jXqN9Rp93d869i",
  "key16": "4SedQ2XBFgmvr4MgjNLpLprp2X5UAaJMure2xBVsPrrL77ercKHDMDxiragGtMvRpNaSVESfb4qdzTW6bJpRaH7W",
  "key17": "2vUjH93QaN7jURNaQPHedPubQdQ56GUNis1X6jW6yV5QW9wuR3FgqZ6dgpycgmqUoSgs9NoKz3EM5ErDpqXrzpmS",
  "key18": "4cSyQWztT5HuYvqeA3fTWCH6Zx98dAj4EATyNxRFeUVfdLyWJEGQsiaYXWSR8533q5W7ErQTWrn99bMrGDL5tZGZ",
  "key19": "3V3vHuYUA98LELVTqamierRfCbgqfXN3jeu4wQWYMfzhcu9a7fvVS64HHMeA3bcwikWRSUp3s2wDi6RZTLQtnJpE",
  "key20": "59ZamyUXPpN8N8xVxzibEtvhHYeqqp5W2RZnbPL2P5MVxYA5ni5QgmU3xRnbbTyQLWDF7uw6JFg4J8HRAeD5HRU7",
  "key21": "2eCqpPzzLKMZ5w7mGgCevypxVLa2zCN4CVVYL43U8M2ULwwUXTMtCHFbig81HwxbCzsM8V7CKFM3SUmpSKh5pSM4",
  "key22": "2ovpD8YMnccW9phKhPqUqqg1PzvzY1nTQUFHxytNeSww1VqeYEqvDW1hG38LtABByYYuGKqQSaHEjN2DdgM6zFde",
  "key23": "eJR3rR1gxAgaKsNaPcN9HZzSLgckADqNF6cTJUmtyBP7SQAiRpzbEmKs3dyTtNZGRaXTNADa9re8KBYR3k7hcWE",
  "key24": "4ouWkpWMAA418FfdQwY6y2h2BtmNHvd8hdNueQvd2pNDHJ589XTV5rnpHwmGYm4JKvXj4vARUPZRkeosgt954qNQ"
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
