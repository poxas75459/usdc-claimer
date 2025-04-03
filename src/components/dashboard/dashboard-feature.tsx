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
    "3uZDMcGSRYQAMzwe42qpFD4kY78ir35r8TimYGiLwqjfyLdayPbvv6inKAcLan2bDrPeM94NqtB64FXKvGsdhbZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZbZCLBSjTm9F2dicMfgZcUpMffjE2sT8SDZyouxqZnhAWeZmP6BihvtTThL6jHjMKWwNwGDqeAjJsbLTQxnerZ9",
  "key1": "2WggoR7Nr2ak15zPmYdRcwTcTSafvxPemJsE1nyAaQumBJ9s83uvefSnSbTHEREfLUfYPgkVABWWZ1rMCBftP9Ep",
  "key2": "4VXvDoqEjeXENDhV87KLAWkSXvee4apowGf2bLN5KcwYj1zQKQ9CMNnWTTk8f4YGpPfbVWACr38xYW71y95rua24",
  "key3": "4Af8nMnBqkiRquem6dj4wYZepKXH9BDQBUeGhJBNWRCxFFgmFz9MmhrQjZxzKeGCQMSwMzYgLiXj887XNEcryRZ8",
  "key4": "2FVDSkV1jXSDkUhkbZebPBhQD5qBqFeHMJ8px2BzHXtzb57CcNLFjwt2bG56pZze4kJWV48Ptd8EHy1Nq7akQCkm",
  "key5": "4RPS3PWmHKnfQzvjYnpyotGQvFDypYVdBPwY8t433WiEkQmCmXDfAZk8MoouqTfMnkgq1FZYpyzYqg78VBFNPWCv",
  "key6": "5tGVexeiyA2wUG37X33XNKH3kqxqWrHbmFrorPZpRgofbV8YATw53LrL8i3fL8prRVLLt8xzbjfZroPHAANZrfHi",
  "key7": "kwC6FANVvji68jnrUJKvrYV3vWkkz4qYDTEynE7LmRYcWeHupmgF53yMwavJ99DfJa9bxXwvLHJCRDuvqfRdCEG",
  "key8": "25RMDzRUTiJJbZvqahWuRYVX66J22TTzeEz998wxLw89KXz48XHP97etVcoCxzJ9Cwai3qvwT5fdH8PW5xNuiCJH",
  "key9": "439MDM9xYvJCcj3ADT1jjJwc9ZmusVF1Ti7tbAu5iA92LxoADMF8myfz5c7rxfVWTtbcj2aMadwPM7dUm9k76BnN",
  "key10": "46a5P324u81BkTuuobD26rKy7uJfXmXsTru9YHiVXC47EZiGoF7ZzxKy46veJBS7q24Yxn48bQ9kHULdHbb9QFQp",
  "key11": "4DTR4LekoCYLgHPKYsPgbG2iQKMBaMFYf4rjBpjvH9MqwXcGxF2aoQU6U8PHTAYkE9gHnFr3xFXtDdwae2TvwYdm",
  "key12": "kNTRMCyBSWAKf1HYfH22jS8Eu5uV1Z2YXVTBPaceLXUeneqpgPAocW7q9pTrJvHhDecQNw2KCJ8wgjeTcxaSmSW",
  "key13": "52eHc9zqnWV4XqpH2z8CC2HwEhvQJ6j8Z9Lba9d2ho1ygBCqZbT5kwAaL1tHuxhqHyo5cxPEAxcpt2nVyDFF8xHJ",
  "key14": "BhqZtDWSd9q8duMiTkYViHrPEEKeJ9S4Me4FUAXMg7FRZzfBVQ5XD3FEnYWVKHqGmTXoiQ7AUTZTT3h9bAFvxdS",
  "key15": "5ZrRTNa19T3R3Mp9v2u16mMw2WmWdMpDTDbmNNxw26VPfWjkxTFQ3CwDS4GvMr6FmTzHh8e3D2Wzo3rRVxgYsvSB",
  "key16": "2YYd9hG4fEppNk2cXCfSqa83cy9seD2vNcJ8s9drQ4jMQcKUXv3mBXszc1LNAvHAq6oefVdA6sREku4uJ3rViKCr",
  "key17": "PHEbTHxKq7VzUWewJiX1YhNk6vbaB4LKLD2r6rU6QMQz21y8XjFgTcf6YLdkH4Zvi6qxZdaTsCtWmu6LNQhgFFy",
  "key18": "3fnLtKWfKrR9yqDL7dxEn1q2LPmGo4ovZLgPVjbZwEkpNrVALxhUpsBzye7RyXVLyCNHAdSZ4FcJRbyJYsEbxq9J",
  "key19": "4meJPx3KPNTSy9hPnCpuwaWsaPbXp257tGyUdkDxuqHX748Eq4zojdNPS1SbnhnieukFuz3TfEjj73rugzbwhU3i",
  "key20": "3HGQpFp46fQ14QMxbVWW6RHbyEBhbVjLVoz83sadFNBbbYXMWEMKENBhpW9icTqmA2ZKukG9uo73BB94hAv6hkQv",
  "key21": "4X7cgQM685G8yqAm4rzex8Gpz4H9G6QMg5XLn83EgTYwiL9FPXLu35z1VTBKhPfBk6egnMaEGWPm7WmEeF399A27",
  "key22": "229FSgjLVKTYKQZUsb9LqmyUA4hEpQg4M9diaBraQagQNRtjc5rMY2nDmeLQnVwjfw3ZNdXKyxUJKkoZax2yna6H",
  "key23": "4BBsy1gwKDj61v3rJNArJcHwQ7hJBtyNpd8E1M3TsrBD26Q314PBT2uRWstP7S4WjaSkcMmtTfGEoCSamZTvVBgd",
  "key24": "4YCZBkHszXawUyPkG6M8pUJFHdhK8BFGVju54TGwDgbZUT7vZCAdSsqhfeHDTyM5GgWN8VsMotjKQjuHe5LFbdUv",
  "key25": "4gSVtfKVRyrvoaSShJWmDTw4fA9QBBrvmKp4yZF7QaJzPtZ8SG59Po4YdSFTLE9pcQTBn99tqY97B1NZwGD56d8Y",
  "key26": "5hxGpSiVSvZJTzcD5vm5SEVTC5AWhEz6QwzN3k9pheEaVZzKsx3LMo5AopTCGEwLn3JEpALAqnUnRPg7apqCCUwH",
  "key27": "3RGjrwrrAbfMD2V9zd6eZZqMMidqN963uceAV1bsnkxaL8EN9iiYDPP8yTGtxnUxipZZrakaCjKpU2wuRQT9ubge",
  "key28": "3vKbDD24rWU53byuGCboUjyp9BNVCMbeqCTQkBsvJaRYGuUcFdJYH4aa9dZPaAiZxndsgzNHf1MhGnyqafeEtnVz"
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
