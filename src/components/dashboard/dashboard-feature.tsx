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
    "5hT6nf2znnkQ6kxiKgvMqBzhXBVNJt29nEF5pBdinfPeitrU471o1btCEHBLHFsAFwarPn7xWqkGgF9T9vugknK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sRWmBAjbv4gWtRpJB6mijkeCP2KbLWxxLtx9Ndc9aUSye2bxRaZFabJheCERz3FWxxcZHFKeDVtLx7TdrTJo5BE",
  "key1": "u3i5AQsvA4Zgrq3tev8QeQbprQoFySgotkGRtLshmzTd7ezjpBxSYC8a4tznKMuA97ytMxiJpb75zw1prQ2sggE",
  "key2": "Tdv5VkgyaM2iNi4c8LibFTYpa4JeUzvEY9UfDRwJuYxbgKhgwQ1qPWx9X3HubUm8kDgoTfGmTwbhNms9oMhZqJz",
  "key3": "LuzquKYiAMnP2hoFwZXEJ2Yab4vjuL6Nskc8fS9mVxpbdotkvHjwbJ59wQcBH9nKUtwTerh7R2opR4yn5NEpiCb",
  "key4": "4NQTgUabU5Toynd3CabfY4oF7NNz7M1R9YgR3hk8X5oUfZ98WXTzDs4zzriqD44r1MH29zYsaFHNXgzu4fJnG7rd",
  "key5": "Bz7yuBkXMreNB78S8gAv8kbkqeo4Mqa2JXYJnmLCAT7JU3Pvob5HEikgUb3eR5ZsmArY5QcihsbnisVJBXSjfbK",
  "key6": "hxnJ9uoSB4QjqEX3fPTLkW5fhED849qZjfiPK8RAS4aR3sKbBJvXKQDqDgJZarSXoV6YzKqmmsuPwCvNDdcEgRQ",
  "key7": "5xAGmEm57CZFHMT3sGe8Ky5vAGd9d7AtHdJXN2c6TSYhsRCqQZKNNZXuCdh71PwfP7MBfToD65SeucGyoHtBCAtn",
  "key8": "uSN6GhNbTMn1viV47ThUrR1RAuRu85CZ9pd9JvxXQYoRA6M6KwAvKbMisy5qr6HdHLSA4hUCyJEpWKciUhNEEHL",
  "key9": "47otpQ9P1YY49HtvksJBgQ1MJ7kbp8akhNMCEdgbqoRz33C9ydCA3sSsMtKufx6TVeScaLRAeDe9bfy8tfiBGJvA",
  "key10": "2aNz9UPsKmdkfz2C7SQroWv5XpTYJ6pZAQv4ghTtNoMfSt8xyNe5emPzJee2GGxEcqjLTQFQ7VUJNixXBhVQomEd",
  "key11": "3Lrnmfwtk4ciAC7NRt2kD66xCAPsUzRnJCnDe5rQZsZcBfjjw8XgxG48pRk68X9Xdkfg1BrUSyWeSQjtuqsvE1D9",
  "key12": "3FK4DiJPP8dxo9uA4CNhi73rErh2HzF2rmyKmcSnyxCaxJtxxnyKEc561pzDT8SWGVkAZ8ArQ691UNee4Umsia9C",
  "key13": "3uuVPZUGYpkWigGbaPeNChwzHhJQg4oE9BCfoVvpBh6jkkpqBLtN43tPBrexXa1c9xmjksBmPif6Ri5DnPc9t2Au",
  "key14": "2gVH46LDhbLuAU9s8cU8J8GykMjE9wZ5pN2kdi9u8vd3bX9WHzWgdMoCEm7nvMV75YxZpLC4cgv27nWKd7AMxMiu",
  "key15": "AsAiqbYagb5YfSpXGCrLZhMCqrNyZYyrrfRt7MXRBni2TYyrTd5QYgVbEyqFbTxhZhqmXCysA2DbhKw13fBXC4D",
  "key16": "2LTM2cbUzGPPqBNfuehb1gCrWUNDoCcZmxRViS5ZTQZN4teyF7FvW9nwyMwmgtQEU27BSiHPq7hLLzKsafFMKRdb",
  "key17": "4uciJiHhFAkyaQy9MFobVTtbmQ5P1Xg9wwTWYE1BavpSJMZ6qyCMn3mqB2f6QMLh1rj868AcBNeKAs7dHA3opV4x",
  "key18": "33QELJSm2qeVbdpXB5Nz2wvLKzYVyey2wMCgVQYqYwzCbvqryicUAoek4f3K9JgPnQJyXKpJfpyumzegD8k4ftWQ",
  "key19": "3iSz5TzwJRZbyWfQUibzHG5u8Lk2MBgzz7qokUdPUSCAAwkoKiyQ38Dr6CMEowGNSn3K1oCXoGXZgka9tFeJmeus",
  "key20": "4d3n6Vt1fU1UYrs7VbikCQsWGkmyvYs68YyMSHTQnTSuxV9bCXt1u8JCdib9x7uVWWWbYaDnUB2ZqcW1aLoQNFeQ",
  "key21": "4rnWZXG41buUjymxNijkHNQvtAP2fiM6KzYWG9c1FKPwybBcPnfUvYLG1febTQC49WpFKc7AoVCKCd2mqyDFwgoo",
  "key22": "2fsCHFL5PSzEKb9Pso6qpMyo7wYYXZ2XW2Y1R8h9ZYr9rQUA6hv4635tuMuWP3rLyStQu2wHsBxGS3xjZ1nWNg6Y",
  "key23": "5pX3F1kw6MZEgAMz7QMUxgv6zZjsTJvBfL6yQHPxxMfyTy7b8ai8oidCM72oLQ2XbmWHNGdThi7Exu4LTJ4kDR4N",
  "key24": "MfLYjvLY6EZNNDmAqGSzn2mMUJpZWUnt766xCKn7LLYE96ksKhoD6Vfb12T4q3oD4UnQcowhzQRd7HNBdMgwhoL",
  "key25": "36oB7Hgi5LFcpMA43TdzPUpcGTNfyiVFFxyHB4B1nKzzUpj5iNrfPtxH1wmtF2Whyi1mT66CVJ4m9jNFtFFpgyY1",
  "key26": "5FR984DRagm13TEoDpFhgvrGwJKvZbtgNZfBMqMiH3sCq1krWA2zrVj3VmmBxmx5v2f5Z1kMpENeAskda2s6knWq",
  "key27": "4Ao5xWa96RYQqQGzawVooLVvZBAcFDjsonnJwTZUPUmuuxYX5gQMf3GTTgDyaK3rzqhGUFKSWJNf64pBfDpWB3DT",
  "key28": "2yPW1yuUiXR7p2zSAe5oVMy8geC7qfwhgdwQs2JG1FyCAjkrYX7kZXanks16bwHjRidnbYCsvgHNeQY999oYkE54",
  "key29": "4EAhxWFd85nd7wpqfAh4TJ5uc37KPbMxc9bgE61GFPdErEHtYJxwbp8gY2m35SqUpyofFeiJneij1HEewbCJpY5Q",
  "key30": "4K716HRTktEF3235F2wcxSYqfWgVkjZscDBfyh3JzyQ1aEmGX5UXX8kUcskBWzHx5sQMyVLhr593nD3RqSAj9oxS",
  "key31": "4FxzNmEayf4rUoKWrZunq2XccpuafYzQr4M4fpvdWqXRtyGGCApjpMp9b4tYCvyaGhmNQnSBzbR5db4YFC6JHVUV",
  "key32": "3qcvQtS6yvxoGAyLzM7GBSg1bmHCD2XbpL2kexJKaeNuWAM811z7YkwQhqcHJphdLHj3eozysU4878KgTGPNZNC",
  "key33": "rVPaX6qM6b75gacsr9ekJLmUBCdSNctmJYthVfTahiHo8ortkyVJkFfQX3ryUjXYKZ1bpC4M7tc1XH6JNyXnx6h"
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
