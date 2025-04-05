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
    "4fB5bP9FwzECRRHFmRTEkbQRozUqpdPZHxdyyDqJA33H7gVXUhozeQxWKRp8En6rhhxX6Y76DfsVTzh4nU9r7Zyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pUQXaBcaFHAYr5Wt6QH6FNHf3aYrLDan5R37cipk594JGQP1XjCRLwwLAX9bLHrEwvynxih8ndzYKKBzBfSZfNg",
  "key1": "4e9eLpMTsgzE6Xno43mML2gvYgMKAUoNEBDob2ST6Jkqyhjzw8h4BNEAZtX6mMnu3radTECarRb3mZH6nWZH1aVY",
  "key2": "3kF6hp5FfSH7RPV48p989dBxkXUoUn3jWfGzLdK632GgK3MLP96S45oVkSLtF4Ro8n9W3E4weKLcgzfJf8B64MUq",
  "key3": "4DccZqmwjWRsyBNWHVfooxn7yEg1VBpbLe26d97nDoiqKS8e958WLfJYKPzz3ozXLCjFYLAZf7wdNgB1zUAxJ5fU",
  "key4": "23wzLFj7SHEJnkduzD74LqvDmVUsqXpqefXXepKUGgoqU8sQzb8NGP12tmxhKssBTkXfotqsfEtH77jXW9fT9fFk",
  "key5": "XREeQG9KS1thNhHLXtqSAaKqzwCgvGZqELHPu2PRSs4L4qjoViBCxyYaonAUA2EUSZDAnoViJk8oxehsnjq52sA",
  "key6": "3gcaLFg4XJFwGef2irPioSi21qcjKt6njStBRe3z8VkZPpfEyUBGH9NFXyetZMKg9gX9bqo6ktzkMQURs7GQ3WD5",
  "key7": "Baw1zWn75FFpR2nVzwfLdQAAXYf1zow6PFbp7JaY4JHKr8Toza91kaHqtKzzVQPSLYYf7uqdR4XKoV1s3tkvDiC",
  "key8": "5TBVUd2ackHTyuQEmPVb52Y2J4tKUFz162WkRoBfKD7XQ9oP75fVLnYvCC8xk6qAAxdPG7hrsVADoGSfiST6XeqH",
  "key9": "4BrLfRQ6FmvahAXJ7QjnzoqH1FRqAcScAh49ZMKQqbjhU2D7hP6Jzpqz9g8VZ1Rr1rHpHrvvbhST6qRvQrSkZpLf",
  "key10": "3S4RySNtUL3yRdT3uUMMdP9ex8eK4gtUs7SPbbeau8Vu3sTaihHyibmPNCfGzywcNLy6T8q51mPfyfjnp6Xy8Bvo",
  "key11": "3Tcgm5uuJuS6aXge7UzRD9ro5TUHPSEKGkAaZWNnrqp2DxkssunDi19V2XUB9r4D4aVSYfE7UmeLnctD1paKrouc",
  "key12": "3zyzpMVRPFcqf1AUDS9ihrhxWYjuLZM9fb9diUfErNEybFsUUxphsdEHV6xNennj3SRgmm1Gf9yqAia411hxCP3v",
  "key13": "3BXEteqdKDJsWY8tmokrCTNfauo4dP2iAoT7jEcJTvnMRo7YHL6yFKqiTii48H6ykhTGgqU9x2aCDUtFGUKA3hCW",
  "key14": "4TxgVyvK9ApfxqS3yrXpnXd7Fu82A5qjBAfX3ZY5CotqNLYbxsqQqP15RiorLPfDebpT8RerDReVwLRtn34oBeD4",
  "key15": "2GFF9yRKwVqpf3LjeYvz6SJrBVUACKw5iRt6Ca4MuZMrUGgFZx4Qp1qRe9sf3xdDsM65MMUSSfGEsUE9NJvCxvWD",
  "key16": "2eEVuXQt9a8MJKU5mQ5f5f1u7EQprvXBvXrGmYMXnxuenhhv3Do77eY6Fzwo7rtMLCRxt4bMW7dUpZRCG4v9tNv7",
  "key17": "28CAY3zBgvrfTRCDdyPqHDqnWBQvrvw7AMMwrerF7QNkM1uX8TQPUo7bQnV7VJGwToUKfAmoEgUfko6LgQZ2ZUSs",
  "key18": "5tkTFWHQXz38QRmZEVqf3zw4nvTy9EcxeZVufjtx5uz7Eex2bj6JAfys2ztCuKeT4oWdZdg3y48CdhM1bHAcsQbe",
  "key19": "58CdGkkoPA1Jb3Gc3LYUBzDYvahUTGj9QZAv8p2Prhh3aj4RB6VuPm332xVgQag9Jz6mAnu8f4AEvc8qnCDwxrEz",
  "key20": "57mjpeR318hzKUFyN1sYYXHZEv8DeuwfcGG1FfU5v5qmRhGjBjKivWxHWGzbL8k57S2xCjC63hhCY7btYG6DJ31Q",
  "key21": "5HenLAWw8Co4XnyAjtr3mxmkXzWGz5SfKNPPKkjg9Luouh3np7KVrvAAsEWj2r9YUBL7NqgeC9vBayS13imp74TM",
  "key22": "gxs9i6ZJYZXpdnbAEsToZMhf3TDVQjcwkPU3PPN3MdokU1Mco4z3yzfKQ1cZkdcaQ5VymukLyqiQBA1pyd5uBqE",
  "key23": "46ovcvnQbQFpUzK1zCxsQJm4zbeRFYPvypZ9JoJbYw4RYg9NR43jGoeKGRPsjfnzpbknGTdeT7nm4TSpngvi2JxU",
  "key24": "3MLM4EhwCL2G99v1BmJHA4j6ggWjhSnEtC1iSmhmuMvBv38bujG1jxQYVre8nzbFwzz2Y6PmFSHZjw4HH58NTb29",
  "key25": "4ELr4HtPvX5kWvLPv7WPh8HXn87BmBdaeRfcdfhz559YGxzzvKGnfBhyHnTSNyMywnrpVmXDPL2yfttNDxbvwwQk",
  "key26": "3hwwMYQnc24WaAfaf74vtnE2JHDK79uWMhFnFjkG4xPhSKacH45xX1W5ePR5Fsa6xkKqEpE3CC1h6H9g28bPCbKb",
  "key27": "3WECcAfaa9wQKkLBXjxxWCbWb3WXxbiPUeFmbhYDLsvNvABWnEnH7mWXatjgzvKQY7qhjm31he73hHPjmyugWdJa",
  "key28": "7TQUfpsHyGBt69qMmZ6YxWjUz3h6AbtbXv6wMnSPvJwT3f2XDZxxRcXFopg4LtCdFHWZtPmFbFjYD8E92g2nVyq",
  "key29": "5aU34RbfZ3HLcaDMEDPwVCAobPAGv9iorVJAQuD7PoK6JfAR5VLBcNjte6Vk7ghmypx5Dqx9eZU9wnA2PNcHTn3X",
  "key30": "5Q6XYMZ7M7DxRXZEMUxuXpsbLfSgy5pNV1NTk2p4rWzYgiHi3393WQrctKELRmHfW3d4m4yXFZwERraMtiNV8nfp",
  "key31": "55Ur3MqSUA9aoR3nJgeKQZeXH4PU4A8wmoVkmb6ZRRp8VUj1XPp6UiNSYn5kBS8gokaouZ6xQpMcSf67vxameac"
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
