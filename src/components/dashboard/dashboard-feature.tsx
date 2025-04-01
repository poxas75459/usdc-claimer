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
    "2QrM7KPaQx9z8yQsczS6hepV3S2WPDeH1sSy1yn5XC5RiFjFj7oYm2k2FvFGPRv9fi1tSJzFwgoBeh81joVJz7f5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sWfQM6oJGwoQcVnTWYbas4SawUKswUBDedWkHRLwv25hmt5ybs94JgzqiZpcBknGD4EjotENxsFozNKZ5EwVhDG",
  "key1": "3Vc6MKD9CLfi9euhRm8uyYmnq8GnoYfN2W6Nr4hewBNimvySMgTXQuYGtWepgz9C1fM7rD3TyE9cKTf9Jq1XpNb4",
  "key2": "5YhoTTGFF1E39zcH3qrqg6ZJsWCyHb9GMvsjZJ41maiusDPsBgtiZ5V9ZML3zafQ2FYFDpYqe71jr8nvPQdRYnUQ",
  "key3": "5JtR3sUK8tSftN5WT7z7YVjbVpXQD52E6Kq1wuGDtbmifUZ2QyZhe1JDfTs9MbnNpTLgM3yXvdQtMXgAS6EX7yuf",
  "key4": "3RQf7wJrcEQC6AaK5bM7boBnVyTgcpQW7JBCiTQu4nFLf2s8b5KM3uuPdLc6tYKpYWaB2vnr5xwW44tAbdjqwELV",
  "key5": "3P4s2NTT9XEMPrx6vkReVwtQshJJ7h7cZipFdoPNKrPh95qfvbcMpES7CG7CpWAcjZfXoXL4sjSZA2yGV82HVdu6",
  "key6": "4YXejQN8wrUAo9Ke8k2rXH7FvYAockDvtWCkYKtC2Qy5APtWUyiThtkADqDJbAM5dZ51bgLfm3ry2i64dmwwbENp",
  "key7": "bRBfPDc63F2fTHvyKPX6ZEjFy2JZyP3M2Xd4sHvc9bkH478uhJS8v5c9VE2hRh5mXL6BtNjriL1U97XAdLhdX3w",
  "key8": "2HgVajdWV1puj8UJ6wj8Xppwq5td47JSGUsTcHU5DoxQ7nzVorTHTLARC1ygN9AxhJvbjGUNycAZTH5nNU4qgCRt",
  "key9": "3UJsrHxoHQsVn3r3hbQYwm29y2jaL7FkdrndXPWvitCRpwucW1CCeRGwgz7d5GVPcACQ7fSQXZAg7gFaSCHRwuss",
  "key10": "5FQpzb6n2Zg4HB65pCHYFzX7uQX79qNJ812kDfkXViCyN5gUTGNJNXseqZHtW6H9wwGwXGZwXsBdadaL9BosNuyW",
  "key11": "3tjgjcWb6tzfK8UbugwnL24GbA3SxLpQ4gG8ehd9SmvXUFjHktgobYEjhLPrZavt5D9v5BYw5HMSSDXDF5Hxxcoo",
  "key12": "63Nj9PJokx5KQym54JvcP2Y8r1hGSstjVQzvua9C4PMgpUF29skUTjmCu1eSKhdXJVzrZ3DsCW2xMXf6mTRtawjq",
  "key13": "3w2e1errrt2yGiWZ1Rnpjwh6Qontw7dVNJhsBKYnUKcC3yuthD1qPf7kr2tdYVA1X4A4Z9fTnUPvafTWzhBTg6WR",
  "key14": "3pYFrTtBntGbAhukvq2cZykG11rLbVFaxf7Mkz9kCLQtRdN7onfT91HeBJhwMTY9h5zMqdjzGcmWYUWAkdgwhUkj",
  "key15": "4korSorHw5MrjQfMHSqQdSRun8FbsTY67NAhzYM5VjpFUjdTHikzTAzdQGUpVSi8JWqtacaNvbPd65v4jox22AL7",
  "key16": "zm3hfD7Yidfr7tMXbXSDJGqc9AXST2U6hdRTVdqYwcfRgznCBFnLaGXh7wGnwg2QFjC2a8r7XwZJJwHeMgaKNQE",
  "key17": "3xnHkHjYTRDSi2qnUgyVCigHVFCBbCPv3zTP6tZaH8u9DAS7cxj7h3EFjA1GyVtJtbnxdXtkSPNWhjaLmi5Pr9hD",
  "key18": "2xodEHyVVBcXV6paMWPXZ4JMyP3YbjFg6ZVAZQfupCJaM1nRCfvC1U8jzT7YmAuVGLvAvQ8TMamkgcR3V6TSBgHR",
  "key19": "4t5WZU6AyeHhcbnF9wUxak6EnYkniuNidcn9aPhQBcHjSybsG5eogm5T1zHKGpMUFm1LNfmvqfcdr4p4ysPqA4eT",
  "key20": "2pd3pbmxdodi2NbhSKH2sBXLfw11KfV6mEN1r8bvqTz7NM1ZF9ELnMDMvykqHVhD8c4rN1uKCdmv2UTUcnrnzBND",
  "key21": "2ahoK1XPTCNtZUjjKt7cgD8xzkzaR5br2pZwZCRiQZEYyN19986M8o5pdsNZ4p2EDJE2Q2QkiDqW2Nmsj3aSNKj6",
  "key22": "4mHaofXgEwsFxg4bdWEwxSjAYrVzmsUHgEFqfqvCvbsm2jfzMsxfmRqo8PtY27SSdu9YJLcyD1WMnbwBQfXKnsda",
  "key23": "3fsVcqvdrWrMivYAcfSBgwCBC8B6EccUsU5NLWvc3KjfXweH8zYc92errtzdkuJ5gSkFbESJuJpMn599fWR3aBzy",
  "key24": "2gLAiso7MscdvG9hGQ9zPZVBPg9JBwU254YrdTdS5vu28mMnx8K5qJXvswR7GSAP66XSeXb5g5j9qexV4Wcye3Jd",
  "key25": "2d1hac3oPF3xogpRRFEEdoGxVN6RU5c5nHeix5hGZE8EgG9wCxpTUbQSgnGnEfsXkAZaJpfhCUeDaRVSNwFXsLdn",
  "key26": "5Rwig9rWS41Vbdyvof3VSiPJuCakV3bxhzdQj34eJQBeQvbfbDDEZLXgeLa2WFWWxQx9v2VNcae5aDkXYAH83mqD",
  "key27": "4QQUEj3Vbo9K9a7tLhPKuBBvdKc8agbKYc53JTazt9j3nWKmfFXkXN8VZ9LMGAub3ZvCngwwzb5NUfLru4yDbBbC",
  "key28": "5EDMiwhgeGyy4rr3WDaXyKZNMvCzGQF8yPa2pfEgiPULhPd6Vmh5SfMJSLpZNPLo7GiiLpA2ekivNuru6SSFTct2",
  "key29": "23GvVG7hZBCXH5rQfvEPcmUPw2eU2QNuV7XKKKzsayoQ3a3DPS3AscgKNQtimEYKnaguyvSZoV7JJgqHkcN8D5r3",
  "key30": "2qhydCUeTCvzbgaNTYBCyDPeSp6zjP1Lg6pMrUt7S7NKeGnkukByzWhDZrZEUPtqDJnZB4TvMNAEEGDw7xyv7v1v"
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
