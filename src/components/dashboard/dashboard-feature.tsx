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
    "2A5N8SB66hwGiTZBrV6C4A6oRUNkCYnBvaAk3VZnD7UtMxokURmUJjwW97oVhezisr4oTNxkQpHxLag13uSdnaz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q7znRYEM5SggPNfgVkWwb3EAuJxwfThNwGJTXkZrAeEoRH1yMB5SACxsDPyW4tk7zFKA2oAE6tEmJ5mn9tXu9j8",
  "key1": "3oG3L8ejQdiR4CxA5Ujc1ax27bhrHZR5oV76qbMBVA494ZEhNpsgQa6teaVrjLJuV5U3GELW2bYWBQsdxaB1agnt",
  "key2": "Ywukv1Y5pCCFk5BH4DoAf7yXbpjFPXiQfS6ZgPbrVFH1UGwhHaNejiApoe1XKkjdvtkRTJcahjLBn58XrZtYs15",
  "key3": "3nRdB5obpP7vfQYSXGRSTsFqKwRZRQW1Ze8yYwWqo85TtSPS4UgintvK24w75cCbVcNpKnjY333yx1irPxmTjgDR",
  "key4": "4wAnDFWLWF1GUvrdufbXgWtVjtJnsxEdpRcvTMvA99nAXc9Xu4y9LSfYVejoLh3eWHPLH9F5aC7aEGLgqT6YVvtQ",
  "key5": "4JNF5GHTBvcam9mDyuUsFKB6CP6NR2t5xKWGWrJZLx4NtmVRS6pStgfHGyMLpU6pTniovmMnV3ZZ4onZd2rfWWGW",
  "key6": "3jSFsyC93BEM8TqkcR5aSvKQJUa1JfsEeeNysASxiFHR8MBD9SedMjoKDx419pvGaGNnEnameRwjp25AKkcrVh4Y",
  "key7": "5XUTrevM33Nfuqq5bY6tXN5ZBH5oSnW2pbh8J6iDvugKGYLKC61DLjHkfSN1nUaic6NYLr6vuJGzArapCXCJEbDJ",
  "key8": "c51hDJbvxqtjReFubvRbYeR5zyKMx5RUReuH4XGF41rh2JPRTqE48L97HQotFUxjikwyoG9x9vy5EGL5RqV9DDZ",
  "key9": "56ac5RogFX2SjWK5egPC8mHwMLT25rjunvoVrQNN9x1PiJ2co2nmwZjxwDw825uRji8HBpBVJjQLra3BA57DHvHC",
  "key10": "4Dz93kj6rdjCbEwRbeyq9RAa3PfvDTGcucytAHCTaYZBTzLCvU6fbUW7rYhn6k2F2fShHqpejZt8zK8Z4T6pkNZ",
  "key11": "4miHHmWWPDhKcaEF866JSo33WUBVk56RXNT6ChuSbVfij9JfSWJqC7hHcXJ9NurNa6y2xHQ7ib9xNqgQbkhresEm",
  "key12": "3pWSx9fAQK83Bs3NZHexp4VwALTCR2vgFBoguwZx2SSJA9g1gH4yKn4RG8typp8mRy6X1SVif7QMEBg42mgPX24f",
  "key13": "5kDZHra8eF4ydUHoPjjgafZaQUiAhZuffWVUUra37EimQ7XCAsFaMB3ZdRrF6skaU56CmsuonGXtkfg2ys3snFPP",
  "key14": "4tjyy6pXzfJpVkZG3AmsEkqe3HdsbbYupt9oCZVTMordtfFoT8CFTi534tng2w9EwoCxVf9oB5HoCJNThH6jpHbL",
  "key15": "2z7kQt7PQZT55j2sVm1rDBrtdgJJy3s6hafisrk8d3M8RjYbPZ2c9gaBQz4pLUoUGRiP78o24y47HCfpA5FsLw1k",
  "key16": "2BRbKRMrKZZ2FGN7zbDQMoPqmHLXZ7RzEPCsPAU5oBRkQo9ienCWkyTUXEGxupiDBdWFSLnv7WzBh42EnND8AXvN",
  "key17": "4EFuUwLSXQtCUi5mYw3xL4xHy6WLyEfHRSswZ4B4AsKoq1rbKrctPjMej1jkgnQ38zx7ZRsgXHhbMFgt5BcE3nT2",
  "key18": "5WS93k7zrsTahvp4gyqsCDBg6wQViGtipuMgP4QYKTtK6CK8NE1Wo9N5rTEjCoxDPWzZzfJm73sj5G6WR5zzKYAX",
  "key19": "2ozyoSwi7R7QcszR2WAgoFNjmENHAZJnvqrZ2jbLihWWs2MQv7AKznuDsigefNjgRsCVdUCKghMqaC4ASFwjhw7H",
  "key20": "2D2TFxqzoRE9S5J75q3ZbHLT2YyEPaMyx5S3fvUTZDHzc7CZVyG8P7DJef4Sv1rganVzDc3RM2yk457twK9SPyFd",
  "key21": "24bjJJF2YC6F9a1NFew7cgrhBNPid9CiQdiioJw6Y1ouMcuZJu8bsxmPUuisPM2tfS66pBLqDRBR3M7voXueV2ko",
  "key22": "wnNc7NTThBgVbbsY1csC15ZZnZLQD61s1HoAYTBL1LeYEuQobFMyQWTL8EaTXhPKEuucFgvozanKivaxEEVwrqU",
  "key23": "3d5yYsSB8cafK4aHMfB7s5PartfatUjNgQgYoCor2NvV3wKKQgMAituAoxgLG8Dz6CdaL3N8emDJEgkY9i5JWbRg",
  "key24": "29kCbxs3SqCoJtGbWYCUg7SuAP9mLbqqU6bK65DaLYta3js1HwdSyXaABybs5m9E8ompFySnhn1ExB6kMFzHWMkH",
  "key25": "aNLgZTDj384Qg3pqCBkoAWzwfHhdHfYnfQ5iJnDAVA4p8zksn25ovUgxE2C6stnQGxt7kApYRvoVVUKxGtcjZvf",
  "key26": "Uvx8eKAeU73Z5VTEf6H5YA1ECeu9t6prJJVTCRTKKLNPxEYojCadaoZjEWcWyoPnVCTZJd7zEUMB5Yq3YkYDi3m",
  "key27": "2FyWqUpEEHKNHCxWesKGz9Y4zFvcVQz1j1hErh4iAwR7MKto8eidK1ZYWa7fL9RCxvLqegBxAwQ7y29VdGJDL2TW",
  "key28": "4ywdDcx9wUaRGnp1433WJpY1NDpfCVbrV2xf9TQZjfCZsrEeWZjDF4V1cYQf5gxJqi6whbN3bETDQLucXmAdGwGV",
  "key29": "2mC86V6EkSUcjKWEukBgWa6AP1XJzBjv8DNSsht3zx9qLLRJcWqBSpXbwRgnjWsqPMgbxfr8DgjWib5YevvFsrzh",
  "key30": "5kfMHfC9YedsZCTqZt8GXCqC1psF7yEB8F6B32D35vfGcE1HcYgu5jMNbgjJiU1kqXLdL9mBHkrGR6hKLVG1sJWy",
  "key31": "TLFQu96dUaZQLgzo4a4TiZYQ5QVN63uURxWiN38NU44Y4Yh3xAZ4Lj8D4KELXkjLoWmJoztKy8Sju8TgTdW1ujQ",
  "key32": "3W5vLFmuWCAGgxd1c56ZYixjWbzWuYkAMXcVNzL1yoxso1c56Nf2jCAaia9iC7B9TMkwYdXvDNguV3Y6jppcYY4K",
  "key33": "2UiW8Kt99i94hEWZTMadoi6y8x4AAULvopxbMjhr8e13PdVKLsJ6NjTZYYZEqjec9HwMmoWFqzdXDEwUUP7BH2T9",
  "key34": "2529kSRV4KQfPz6QivXNmPVjVADwh36Mi9R7c1mCsSXN4br41zxBWnc8Rcm4kYKz8ti7aEjjfsD6hGosvPT1ffm9",
  "key35": "2vy7x5Y5kh9yiwxdqThuUE4m7EorjH45nSjNR9PrVgzZMjYoaKQZwo4f8AYY3SEggXamQ85fYDBQSyuU8HLVNPmw",
  "key36": "4a1nG4uAtvUXQ15prTZBDLnwVwqDmU9jsEJ33vLD7tyNbRu6Y6aqfrABsiDSLnruQv8VALaoAUitACGuw9eQNxp7",
  "key37": "5Kjh7niryDP3Jyekvh1onUqdAV4p185LZsumHxRPASR8JwCEUKhHmDRuo2JyqmaQkKDqYnDrht9NpWM4rhDcgJga",
  "key38": "28dg8JM7Uc2JAJM4GbDoSXjTggdDNUtEY2AsAnkrHkP6ipuMh69dD5em5Z6o5pgRhh5ogXa26DEDCrubqdKcjxHM"
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
