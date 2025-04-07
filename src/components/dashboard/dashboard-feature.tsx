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
    "4PhMynMT46wojurG1Hs15335JjEEgex6kTpduMH4JGWzHiiYDNg9oz3JvLHCA8XShNjQnv9ZpFX6QmkrxUGMxnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z3uq2kHNANdSyvUwTbvz45fnBWnwor2DmUpH8shLCciHiCbL1BygfZp8YVjvrxDCKr7xkjEjhrTjv9kTMukETMR",
  "key1": "3ovUACzk92yfwrxBWt2BjtFGFQviLF6tS9kz6UhyQogZLnsRtADRrWDKAePBxPhvHFbGKNh8CYvGs6L9kRiWu1Qq",
  "key2": "54j8ZWV3CpBpmMGCRJEWtyqCuAgeTweMwMMAPqqiXyQUyVPDS9bdfz9DP5X1TfX9iA4shPCGmAMTMCGqfo7tSn3o",
  "key3": "4MrHxeEiWWFG8grrncWYxKGVYRuaAsH9afDxPwFotQysSiKsMkHGW1FHpxHD6SZko8jzafpghybaL6jnXAeVZggV",
  "key4": "5kiu5s2g7sEsjb5EVM5uuEmUA9nFLmAZEcAQcfyzhWS6tKXxhdJoriRmsn5MyquEcQhUSbwRA2YZkEt6NebqjSkP",
  "key5": "2wJGGfLHLds5XFURYnhAxrRs9sjiJKk7ijPnHXsoTnNZ3MErUjiiA3MgA5s3nbgMNTo6ZxxrH9GDKcDuCX1SnBEk",
  "key6": "2vGdFTrz5jjumZnEwuFHJDYNqivpq2uDvzebLdsoFrRXp6ZUx33PfoGNkwxH6sF1JZWNLAXxKxWggbmgRo9h2gU",
  "key7": "3BqwvAfsCbEoLcyjmChJ6EwajsPYPyii3kepdBJu2V9bScJU1V9WPRjTvTA16znDKjBxJrTgKUE2ybyDdMgXiPxA",
  "key8": "5vV2zyjzTNExGxEfQDxa2KpTqRpQAUfhngpSUqj89YdtZZcL6yveSE64kwhFzrCpfSu63bjeje1CR9WqWkPmShWd",
  "key9": "5ZrQuE1oJKyJSxQ88ok3UoHsYz2Jf7mezEqSmGx8ybGvMoQbL3ArJoAP5oZSob13HZExokFEwUrYRkv7rXm6ZZcJ",
  "key10": "4DcM3oVdFP7zW5XK63r2PffTcGkGvjEwMqRfnzWxLVuxUvSxMKbmBBeHmq7UdeAiD7YLiTksjtt1qXFYbEk8gyQ3",
  "key11": "3gqLoao7an2wsQwY9ShZX5DjauNNj2g1uMH7mDw7jqgwt2uhnTxyVUgEJ7qSRj3x21stTSRUxGvy9vD9LSHgu1cH",
  "key12": "5DWSA8211J7AccAjT1pNZ5AVAqY6xxz4CPkR7uR8pzPtMQAZ4V9eQRbRMxFp6LV9Yan3sCgHoigSmHfeWyjsJygF",
  "key13": "4R1BEb8852pD8MyTvmjJhnpYozVXwcSh5jXaFRufwT25wB7viKYAEBpH1TpMZ9Gz1pLVj89qjYCNqmvcjaUMvr5f",
  "key14": "VCPVi5e69U92fsNTBujy67K9j5TubmNNav9fKP38qdNTxS1D9vpaCagAPLTS42yPuQaBAVejLDJZ2jc5wqWMP72",
  "key15": "wTWDF2AX9Laug62yq4aYBrUKhzMFFR646hHXjWKUJVjec3ADpUzLnpFucyPwTUzCJJTpAh42aJe7GtAbhdjhj6C",
  "key16": "5MbsEaVMmEZa37zL8wfHEUSkdXRLKa7FTdXA9bTihZWxBhPTaY43jKZdBf9zpWgTRzoubxqhBZDFCaiQBbEjzmUd",
  "key17": "2J3omCDZG3c3V36tpEDERAAsjjLtqjP81ZkgESUZS93f7eCW92bj3HZE7kKoN95PtLP7uEMrtdABvhWRNpe8Qi22",
  "key18": "5e4hX42TQvuUVkgjvLS8FFaNrdUAFunmSpQLRdyK1eGEp12yYdXez6Ei7zZnHrqcbWSzUZJto41kV3RhtkyLoECE",
  "key19": "2zhQBu56Ee6oUMGotKMMh2GXecyidTcRX1wNN1BXZ1HS1zE2HDXxXtMQwC4gqa75xvu9njJaP85155M7r65wUdea",
  "key20": "2rHxgKj54iRH7w5v7bvyM3P9t5G3JYQuqnbYefsh7MQka376zUh9WoK9ZoSRQBiZekUi6WGDzDygJ8mwqkxvcB53",
  "key21": "47cSehC2EwwYo1Q9uGWdRBpJN5ydcGMyyQF9PjrBcY55NiismP2WSResteumhjqQWobVRS6kcra8r9179sXdPJK",
  "key22": "2ntBdxMK2oZP9JcZSHmYPvscioJM9e6rrr5s77RPRVU1YoFaqLA7RP7ALty6CxbnGzQ7eJLXYi3WtgTwdJ9ZseRX",
  "key23": "55MyJ163U6m8ohG4h2ixnLm4azxwLeiPgzSyd8itEjKa9WwzXvr6QReCVNriKAEzJNxLWgx5zVTEsP8dcduVLadS",
  "key24": "5trfesxWF65QvjZ3mdn9qSEafJeDw564mPijgDEk8kf1mWiefyn6n8iVc4RecyhuzsLL6yhPx1hmk1iG5Kve4WNu",
  "key25": "5QNnSRdL5V8A2Sdo7RsWcDM3frJuiNBFT4VKY5djksDnxzM8gz8fMACo8sb86DiHiAVLurhzHM4VeJjyuGkZEU3q"
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
