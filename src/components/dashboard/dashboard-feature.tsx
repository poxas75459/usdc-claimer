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
    "3vfDsk4CiWo5xYUFB7iDNrQPtnAzL3byHaK9LNYuWSZLttHm4N5Ji4aPU4DvXRm3MpA8Gj1CzLh9d5dKoC81BGQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XCcJHHu6FpuqcKgfMqTxhbvFCPXDjdyYJgAZmgMdqZjC1Kecq2uATkYbnxJsZ85XwsK8eaky1MruY33P7yEFJ5e",
  "key1": "4jocRoRLuRV7riS3L8KDE3XGMvNs4GgsfAZGs9KT64qhwBSJG3iKQGQZhLws7jkEUnhdgJS6utBGtTtCZLt4Vjq5",
  "key2": "2oVijPzDxmdPzZRZdvmVnA8C2nPG534ty2adaUr1S5N9pmD8c6FBqgtuNQxsScnQen1dkNUN98GdpcfCxeVaMyvG",
  "key3": "5TVvVbqMbFeStkR3zkNkPMzww23EPSoHiV9X7wTUuVhWai4exAMsrJk57CktZhtXFPsZsvsk8YJj5S8Qom5MwRbh",
  "key4": "4jucuLsiCL2GdxUx3BAVHWDtXD9Ean3FwC7ABt8jTBgpAtuYniwBjtLYqnDh4oxCn9Do41gDWXyWgVVfRfV93f7B",
  "key5": "aSnPRVoETnA3R87RdauJKRzZJwMRke9U7fgqBZP5qXY5bUwu7pUBYa8ztNA6ZTVSVqQP7BEZ2mQPfXJScZWwCrE",
  "key6": "KLywCH9Un9GP4zx78Lxim4qj24Hz4NFysidRsW61ntDMNUrKWNTBVgP7drwcssN55t37Qc2cdnzgVM22fBWLeBc",
  "key7": "MAe4n61jJUt75oiE8utYmTwVHHLU1qm775Txf1HFFuqQpKF1B3ABWV5XQ7VpddBf8NMdnfoXBuAEF7EHu6MEEuh",
  "key8": "V2cMKZWbAo19y4jdETDubuVLRNG2R8pzcLKtpAyqF9Si3k7sfAQAAuiEUpZdtKPv5CPvRfvg2MEo1NjXdxhdwSL",
  "key9": "4WC13zqmzfbe8p2c1etAkWzdRjfaG3F3eB1bT7F8MJEue7MTtQge9SuT7HDmsmZdMM5D5Ruodx2NfMdgtjsYCpQM",
  "key10": "zPDhinZfbe4EixW84kdWCmWe9mboxrKa9mnFRuRdzNbBARbTcGVfDTM7FADmb6ZdCcKoz2isFcGeHszExNx85Tv",
  "key11": "4re53WncDohDroKQsPRmgPj4zbt1wHVhVAy6xtkQpWK3fKXH1uUEXT3u3Dhr6qgmuYh8TpYKsv6c6cK3rGuvhSv9",
  "key12": "2U1EvmPZ4775EPQCmmrXafNBfLGFtZQQdtHJ1RV8t1GnR6xHFyHU5SzueS55XwL6BYffuW1zHozngEmtMZCXWhcK",
  "key13": "4KdEeJfJn4N7a3ak7WGtVMNtBRJFic7QBRBHXrMDSL9eiTXnLuaqrZxyYyNE7c3Zvu8D5hi7G7P6MG4NnAUHg9Mv",
  "key14": "HurnBL5FakBazoW3bR6HvRFXnXeiFTqFZpErzfZfpqhuvpC1U5wQKpNRufBynptavY7dCXq8MeKa8mCaFEuMcRr",
  "key15": "2hcV4unmKCzCA6fVUu4iAKRGaPwMhfH7K1d1Jzgi4rXVb5gC2quTM3Btc2HURfiBiyFmVLVtgWGtPnwnUT99i4x8",
  "key16": "5ix1s3DHTmipSrYAEzuPGFchujt4V8eDmfPhvtRpJ34ASmstbMLoTN55H1bww9Jc4NjWNRjgbqu7uQdSQPCDctDn",
  "key17": "3XcCySteqdwH3QPWXwtUBQEAoQmTQHwZrQ7gquxvwu9ZB9VheA9ZWpbBZQSkDAPjCLAtWVNXUg8wfX1G8CozxxXk",
  "key18": "GA75cNTVybEKdLe7xkC5Dhg4UuUuoS7Pw5x7HT1ssLqoj318HYweVBmtBdStE5DcLojngQ5HEoK5mkypi2LdezV",
  "key19": "5LYFRVEWKAiMYYxaLrgxbj1rPis4JUcfbFnLKeDxXe1LXVMio1TCTWXqoHf5iYdsEhHdGSybBPeoEmxNHwhpPGQe",
  "key20": "5uE3A2xqmMK2RHcAfhC86VzsCWyHoNn2Qct8SAuqLs8y6F6Fe6ML87B5TUJ3DeMzN3WXQZ7rr7FLBqKpd5muGYfS",
  "key21": "3bN9W9ncPffGvurRe7ra8Jvbc9yBwCmKvvfxzkPFuo681xtBbZTPzM2Q5n9uw8pcp6Tf9hY4qQKrUXXEdd4Qx5pY",
  "key22": "4H6FhPRudiCAAsSUos3ct7jNdkx68sbmy83kwHLDANwjwRoP8TindZhFrvH8WNzATzx9CDq3ysxsEN6u7xceW2zx",
  "key23": "37UYFcBFrD5JGhfCyW4vutZphnCY2BhbtbgRKsoCFVDRh9LkhVLiY18VcEDYj36jMdv6WFw2Y7q4497gRVX9UwEo",
  "key24": "5tn9ogyh2DYsnsRGEgYRUXd8pGJDzpeGcUvd95HNs5xoJvZ7zFd5ZtMHXu2oFtpbGE1zFDMnC3a6ACeHdMhPEdK6",
  "key25": "ywsW2XaQ6ExbLqZChqpgJEqCt3u4qWuZDJ7m6EkmeMfYvPfcYdt26eY9aND8V13nfLayaEcT5WYLu2S9DqkFK4y",
  "key26": "5BrFFhRkmanRkKAXQUwbYuW4YQrEgLEZgYECAkVHaoJurXSD7t3DKZiVS2BMKwMtLGFNhzrK8MFDo33v2oyS9oxv",
  "key27": "1fCDDnxkZESLpf1vPSZeMC44LzWvnKBHjCzgNjdu8Rh2u36RSLrVXRVv8JrnzMprkxx9y98rUjACBSnr4pQmB88",
  "key28": "2tSrBnrmzwwG5TsBjwvFUWuhz24zRQjmVfHzRn1AZM1inB3eWN4b8kEt5ByUqUJrXd4hUDyFw2qqPXKLdnY6icqL",
  "key29": "5rFaitKcK88JmAsbx2jzuc8AtHQYaThoNC6J3f1MAYfSLPHEAo3f8Z68pB4pavUBZJXzPViQZg6BMCrk1qPRkJJC",
  "key30": "h3kf6gEkW4Wbindz8fouZSEZcAF7ubBm2PHGqKytJgF2fHAhghSFN5kpUP1eDBde8creLzNYuQFARGrVVJHTFSX",
  "key31": "38k9pJjh5WsuwvDNRbvqEfVz2EHGZdKPtMk2FqDML6ytew1AkAZtGC3Y7hNixsPLrZv7MG86sqRDZFP2EKriyxD5"
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
