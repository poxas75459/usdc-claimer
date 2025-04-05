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
    "29ZveXQGquARzhzUyKRZMufCsAotkMrFq45MwcMBfwZgXEthbo1yFXWDUxTbBe3Y9svgyHWe85zZtNSoypoZxD1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FBF2otZNNTUTcsBwPFxKDvGwqnPB3JWUd4trgvJL9kmMZdZVx5pdqe9uU24WG6mM4EkHFtDLDhLhJLUJ7KBgdPU",
  "key1": "4FWxM811NkZ5wC9U3ZKg4Aids9XE1uz7bgTzf7R5hnEXbDDCA9K191U2bZayHJuMEfzgwLqkgw7iLrbd18eSEQ3a",
  "key2": "c3yh27ocDaoDV3kTnzKwF5PXNVpW9JSfaokhTKbsnGwzs2L11mKNkVChVGwzgnciJENAukQVhSwMErdG1jSEqLW",
  "key3": "8sKzfTBnxjDEfXA7umRcz9Zq2oRUK4cH5hpYFdoRUbWnUeL9aefGGFKtVJ8c7q9Xe4fcDU97jCUtmnMUpWLgCDb",
  "key4": "4opUhy5vnzJ3fLVmjimKVJeisqYr3HhCB3bGG3jnZNtfhoARXDuHPoS3Y4J1vto95A8HsGjwExZ9xNDTcmLW8aRX",
  "key5": "3b3RtAf9VQZkjrD3FqicM8RXzjMsH6YD7vmDdVBKodyuTGPyf6SUoyJrymStSMEhFRgPcTg6YFvExbX7iFbYxBXG",
  "key6": "2fz7FRuEa2ZLig9HThqJJ3rwfLYWJpqW8QT5iweUJo2dEmZQVcDaSkNxFRVsJrkeMnN8pZK4Y6z2ZY2kmKFyZB4r",
  "key7": "4Q6tiwySSWp9MwCyTETgJQu26vkf9Row1c5aaQkcxtutfL5fD3VAtYBEhzLq4NYkmkdxprUgdwCNem58dv5RKHzb",
  "key8": "3x4Qiyoet7dawKZEbvw9qFuPtwfa8gvcSyhhPxQwHKU5RaMCCHHQXgMdfAoE9RhmSasmAfLXk64zyxcouTMbTqXU",
  "key9": "4xSTtDmf6BxHRTNYfoVBQ7wy2jjdoJuCznDgdx15yCWMZTsx6w6Se1Rq5CCUYvVs5pseQF1fj4Tz2S5HUwTbd1e",
  "key10": "aM3F6498Svr9N7rXS4DmrDqQoHZJtzD4rUuC7TkwRHjmPHowQVr9CazEhLnibJPNHHtb9gxfN9Qj2crAPvkKW6N",
  "key11": "4q2Puuwb4S8wTutjAqhsHNHhkb5UxGCQSHybmeBh1HuBSKbuUC5utU2yzkkgXZ7gHNr2ycD3DSVp2ae8Hi654mqH",
  "key12": "3hTePaRwZgFNvziEQMuvPu15s4zBvhCKpSp2K2aaGghaTziXzRqPivzVTCvtgjFXZAknMV1xS6kbvstv2HUPQQrq",
  "key13": "bMXQBYmjHk2wuX5Miw9E5vGdp7VQJi7qkPLMQXdKsuVfcykZxPmZ7skdnBKk3oMDbZT6sBsmDoDpshrnTitDRxX",
  "key14": "LM8UBix3rzRqiVkMWHHThJYgndyDdpRbR7JYiK1eeaMGCKk5XJaT8JxHXRQxjidvJ4RXXknDacJ1v5W5pwSGMgj",
  "key15": "YkMskjkn5caBXkHyvWppskHpKYjVGHHv56Zod46XwC4wi3iKNNxcdsFSyTvCwoT7xFMwrTDQw88pdRcwTyKhehF",
  "key16": "4WKnsjhAPiNmfCACtiLR64GfD6GQeGPbwQL2jCM1yPXb7WLSDqPRfHoiMohambNeNoqMznJZhDHqTmDSgKshUzqL",
  "key17": "eoVdTR1pmrcB97iHPFZEsHMBz92vccYuvA8GajF7ekHJR4SPeopvrqX56QrkNyfTnuRNsmy3ZrunC7aJycrxR7V",
  "key18": "2eybMQ3hMgAPRhDaZyoLEZg2iJ875JQ3rWtoaPEv8dwgr9GT4BJc7PJVFVXs98spqa6SZT4Yz9YgMY8UPjsfqZ8v",
  "key19": "2793jVdEYkaQ616QR7pHRSnUcwTqyGBH6BXNikSTDnZra8J7YNTTprWNLcRy23dP9Y4cZHonynbMoq41B6K9Fpe1",
  "key20": "Ka62MoV4yXK9nguNxTuQejHLDZXLJpT5ZyET1z7JUBwp5R4NjKXMUfLLcYsbg5Z5XtjzFX8JQgUB2GNcgQNmYBS",
  "key21": "3o6dsKLVwcQUzQ1wmAhYRXJrSGftq4grT2cMDkVq1umACHDpiSnV6RraoSHt5K2RKZWugdas1wVginHx5oLyNnWX",
  "key22": "22THAvRcs8Ec1tU4JY4K8yzkJnFv9kF2qBVRLSTDvsMGzLE7iXUwCk2XscydmY5oBK8GnsNMXXCCtGHedFqsuHAA",
  "key23": "3BpiiYYmdfSv7B9FSRdStiYF4Ern1ewsodofzVtXnxWHnzNH2uCiqan5VdDJWVgFHP1VTSouMHRH18QkFVfvoR5D",
  "key24": "5x2itW37fJss8YPnxWyJ5XBTzR3UzM9fwGpn495No4afAL4VWhiQXx8eswcCQhCGvVcLueN1wrXQPr1EgPTDyu1T",
  "key25": "2Btz1WEyWB5g5KuBzDYT5GFYFUDmX2mn2hjjV6CR2f7JgbGRQEVxKudxAHNiBdYaiKqzG2a5geU49Y4hN6farReE"
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
