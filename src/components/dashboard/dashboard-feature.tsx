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
    "67Q9d2MxpqCB5mTCaV5tbRdtZ578nKouEjFMXeh8f1Cmm7J8TkcLqWbSZLTEhWGAypajpa9opPvtbexLXMgYcgxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Htd82xKvjW7JrxHbBegFFCbJmVNHnxm9xroUG1STASMpQZ8DWGiZoDrmirRpiMFhS2M9UE5aGLzxkE8Q1U8sJ7J",
  "key1": "5izte41WFK6gAegfJWmboZwxusPMf73j7yx8jxefiv4gv1BKy9GzZmwqRiauUyWjSAauagUyGwLDAXoaMNz5DfCv",
  "key2": "4nwnU5Mk1caT3BMSAoBgKjEDTMScyPVzP4a269UfCvvBQcfTRB2zqudi91xAhMqrXteCv5vsHby4MEyH6Hiy3Qwj",
  "key3": "58LthJnAof6t6aAY3CymhyctzrUTRPvFUjmgdT9yXcMFnSqv1WHF3qPaRHpZeUBha6oqGPcMTbBPbEVnNCGCZZBS",
  "key4": "5KKG6XsuicMfq5pAAgo8tTepn9ZFBEupdx15YGPNP8ovMeJ27Arq5yTXqUVoGNtwsxFLdaTfU6r4v6i81C8QZBJS",
  "key5": "TgPb1ynpuVHLudRQqUi5BR7M4VjkdCnVBwNHAhHXgJbyWYmykSHphvcrJ9UEudaat4WjYNx2UQ5VbGEn7FeR5wy",
  "key6": "quF4Wtz2vfWXPo7YdzLDsHnTqihZ2VwRPxcHVP3jNKnLv7z7GcafFHUXS55ygCQpCZfTSqAS58JAerWPa9PGnnE",
  "key7": "4U9XYfR2VjhNJdzoW4TVZMXmEYVHfCd2bkpSy7MUDCnT3q5e76ppztfdFueBXaGBPQiQzyrRWHmLqPJtZnFVk6AJ",
  "key8": "4zFjUrggDuw4CUS3WHvcPx49HEmFLp87c9PKEpf9eiyfgvoeBPhAjqini8zhVzXvS8bATq7K5qdSA2MsWMfC7MeY",
  "key9": "459DCBF2uuBFErzwLxEWhvfQJ8T4SgyCS5Rt7jiCqfHE72yzTSxzy6dJq5jbsK2i3JYEnk8Qgo385u3VbYBdvrAF",
  "key10": "2C2whVLbyzyAs981DD6oFNh3ia3kJ6dXFjevXVJMwySyJEuxTg3Wsav9KMn7J2amfxTktxkrbgGSc95DKQZfagoN",
  "key11": "311cR2HGkSdRttZvDk8XPjVkm3jBaBZ6CuDKr4JBCVMznvXnmDpQfsS16UuiirxnbSwhac7g132y6LTfiw9p7CWt",
  "key12": "2iopuzuXBE6wg8xWRYB9nKEWuntyECEGLvXNvcW8wjnTZcR3FsdHJ4HRKxYHjBULhzDbLRmdGuG3FU8Vhv7eAaTU",
  "key13": "25mpvKmMLhjBuHgHZH1bqspPbNdFRAovHBRSMbpTMpATYwd92NamgEFpGWXDa3wEoEwCfsmGqFaaszsgFBVkGXZW",
  "key14": "4WNtpkQXYoSnwxqW6LWWCwvHAoJ7deYzqVeWZCDYu1E2Js8Udr5DMQ8ssBkvr9PtGTpZPZ718u2FmUHAWxzwFE7m",
  "key15": "5r8R8Tn1jKMhAJBzFFGdrKnkx13dMgk1F5BqQjFNy89wLgKyrRzEoQ5b4bSShhP5zkovtmzmDAnWSZnTMNLsSGGc",
  "key16": "49VLbQRCiTSRMcs7c4vdTh2cuTHk275bGXqFv74tBiA524onXEXQaTu9iWz4Q2TwemzaJHbc9cC2PQk8vqT7weHj",
  "key17": "24up3t4e6kA4fBzKe2EKQ3cX9HmkKHV2mVw1tKXHcTvuzJSsrEnfJPJbiZDEKBjZvM7BYMATowmcgM9KCRTLaHcp",
  "key18": "4mfxa1E1zWuZrnhMWErPKpygCyWvPXMJzDpitxt4ELUr2h6LEMiZuvMgXxCRprEoYCYkrRmjor1YBnCnz8PLy2R4",
  "key19": "2FY5C4oNrdmR6fkZZKure1hBQtiVdMqm9GRbBFGqjXmp5q8TeHmAEebwvJj8N31NCynwZUSWx7GFvpktgtUos7zn",
  "key20": "5CRoCnXxDKErRm4s4Qa9mwhw9FPTNGotHqKyaRioYBaAmMQVdxZk8ogdGAiU2yJu24Hf8JkwV4n2dLxn9UFEQjR9",
  "key21": "2E5wLDbf7Bms5STK7AdSu766zVKCRMqExPTUPgrKnKHNRYj5NyHEZFp1oSApLQW8caF2WTMQdw3n6tqvtYAZeooN",
  "key22": "3cJRnbDnEH5EnJNvPf75ts4125jDGQBGm59ZLvfv2cX63XLL5NnTv6y9fHato6sMCHm1U4q2UDZSgGkADW5acC9U",
  "key23": "3Y9KLcBLU5rpysQf9YokHTdQgpdv5qNfSoxdhTfqNs1i9jXCVmDnCQS5D7ke4ESxJ7g7EHjtgQ4rpedL6fUpv58N",
  "key24": "4eb8EWpXKb7VhWcSJLWBqDDHj3HEXZtzCPhPk9Da2kDCf8i4hwHPGBndYchXRnipWrng3SEzrmuP7TTQRXwecwz9",
  "key25": "3wJYFPFWe2R6oBhpQGZTEer4YSjckTU5U4wa1QMF59fCU2AT1KdECgdQWNZuoQMifd2WRxBWLCvRanHBDtxxc46S",
  "key26": "2GhXt8RvThgtNz9bNJ5qUBLDwArJdWEi2kxSr9LoyQ3qbSh2GeEjYk9VoRLojDFuCRb412AEhn6vWv4HQ8QBsDKj",
  "key27": "2DhMTk9D4417FwATpWk6NGtpyeroic3ZcgZrGHwLfT8AjBm2imYhKX9YuE8dupPqL6Y837iuQt9mi7UY1T6JGeJg",
  "key28": "UsWSgew8pNmSSoAb4TPMCEwpbSwEKJLxBvZHQ5i4u6vxvtNL9cGXKiAwaRgCXQ48J9qjtDuAjigVQfhKDDpuw7i",
  "key29": "5wJPzPBJXrt5ZCq9iUUqW8zGuBkmfsng4yyUYzGfnif1Y4AkcVue94kcmJTvFNDvn3r4q6WV8vtf3ec3wRmRZYAi",
  "key30": "31Pd8pT3pVCrRGVEBxNpvw6qgGFs9hK4zyeP8uS3u4fqYwFELCimcYSARTQYtfGf2tMYmJxRbydGLD5E4UzBL2t1",
  "key31": "4DCVa9VCPoNUUygqUZbmb9orRoAYYxoo9LYcLX458SbQtsTsSSJLX94GSCW7oY5zYzgiNTSyHhHfCkwijsrRMqBY",
  "key32": "5aa4KwpZ3rxk9mPbpxvwepKcYrE265H8mGKXnF1xHcJywgTd33jqnhAQYBGdphAP3vav1BZGzu9SdJjzMsn1LNbH",
  "key33": "61qZKfnm16KZZjqb7YPoqZHbyxbEgsK4b6RgDYZbyzERktHSATqTa4iJbXUcycNV8WXHiukWZmyy982FvBGPJi5j",
  "key34": "3SXxvC4xbDr6VF3wvbjs9UKyFJxnD1baZQFUZjnuZ3qZccvf3XGYLtQhqAgUhk89eqdMBJmVsTiFN924EeN3p7nL",
  "key35": "2PnK8r51N4LtA9vdrBn4nQBBTrP1vTA6NuCryWQwWNSXxrEic4A6RnqLFMNszcmrPoWi5YdsycS7KnZp9HkUkoD1"
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
