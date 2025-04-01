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
    "2teHx7QT2fgBCK9eVzzqGmefTispvWHGcSkmkCy8mDkde8V5nwdHAEXgGSfx1RoQjcAM5LG8Hs4FdM8SpRpENmU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aGZV4HWSagNh83unA76j83s3H3VvXzdcXnEZVz95pfvFzczSP5jyNxprUgk1fXVAzmuTqjdqDjif7wTEm22B3no",
  "key1": "4PFpB1j5XrUocnwXCjVPGVnQm8qtpnGFQGhwf8A1E52LWW9AYr738vNBC5pZ3jrzS2AJodW9XT5fhhv5uhF7CRFH",
  "key2": "4CydpmtBEcbWPkHeBErX3723zkBLgt1isKekDYQEBuVXRXBxvukzNhVYA2TzqHV7FUWC4cGp9g62SYCSXh2gQ4fK",
  "key3": "4AqVhsQqQGCc7qEDAZa2dygwT3HpQapB8WVECX7AQC4SudXaRnvEs1ebx2vR3CbbzePg4yWDPuhdYrBVB14W7PgX",
  "key4": "5KGGCsg8W3wVbokXNt9LYPdyDZ6QeTJ8yKyUE6vQUUURYos2utcB5u7QUnTagVWonkmtNDsiXivqkMg5c8y4NK9P",
  "key5": "2Kbuud4B3rasTPEvoB6yi5n7NiYfaj9WYDJ4YdgyibHguWJqMcEgPw4ZMcEm4udd36JtQ2dpdV1tw6EAQsuuyTcA",
  "key6": "4zGh9FXrx61RdaAdLdLPU8qTyCDxZ9X7ZpJrA7Vb9W6SHRjxCMrgdwyzoKe1xKEpB2KbFGxypfdTSPiKVWNvqmJw",
  "key7": "3CQFnC4Qn4zuRaWGTCp5AGyczwJyUiXBGLLKEk7cbAh5sMy91zarV8WtBjFWTNZKxi9WJ497HTHUDV9VmByqFxLo",
  "key8": "wMVXjQo5pZDDRZBcDsP1Hu5WXSPbH63PmWPQG57hW1buQJJ98fPhAUhQDpy4TL9MEv1KoKZNqxudGKjgpjyKq4y",
  "key9": "3fRdtVudx6Qh1KqvZSXo1mEYUVeoVo2wmdmCi7uyADPvJghD1gKVFa8jHCpCZUdSfsFhEjLWbXWZBGhtMDXbrQqW",
  "key10": "4BDvSQPuzWXdWPXVufj3HxBN611EsoyMuFAFfR3W2o1RVssNP8nPZzmzbXDcx4tQQRoJ69Upok4VeUPVzhZQJq51",
  "key11": "5tvp5ARmiaRZijYyg1WmWN5rN8PEPZFjx3XY28ARzfU6WBsWL3yhDrG3Ga8kGZsmCFd3gnx2vHorpvRbjPZHnGUv",
  "key12": "5jxpkskQJm9acK3qdajF93zX2QKxSsTkf1cUMu7UxDqw4Y9jq6tq2a6vHmfehZuVYh97tA4WczzeTGNz1CBekdVT",
  "key13": "4RvkYtUAmNNReVRDNtiCCTZi4GSQrvtQuyiB1hsnRrmtHqRwBrDW1jxqRcA2WVSJRgKLwFwKTMc5RHQ3a1yrVaUq",
  "key14": "64eeVgzYmxkw29MbXKwnapgMxMgPs4465CjnVruGWFUScg7aqCCEREFH79M1CBEXG9XQJfCc2FSTK36RsGeUec8T",
  "key15": "361ZJX12Rx2VpqEtXkcEk5tCaxpX2uyTfSPk7JpaWewntPWvGbqVseeRj8JWycUwrPN5E6fKhRVvzfie7ian3oud",
  "key16": "4pgnmuorwnRqFAitWtdmtE7QFp2bPv1poPyNpJu3CbgJw3c2UVL3QaAfXpCSwaoWN9DRSWM5sjVcKTjvUMGozdz",
  "key17": "4xSxdMPqLkC7VzbQ5MwXiu33xih9hJvsrVTLwfe2QEyxHmSgcKvmKabBVBSt59W4WRVbqyvJmuvdkGKUMW54wxcV",
  "key18": "5vPccZjkyX9dx39wVQ9oGMcTmL5iXrwR3t3B4GaTHcDETsZCy3tAufRTxUGNHfvrvR8dFuobnJdUK7ZkNZRTm3ta",
  "key19": "2owvett6kb2E5EG5bmLDdK7YY5Rn2QapLcLd8dCKpfg5h1z885SjnEUaefHXEZkxmhoJ99HEK7aHHMVYz1i7RGfx",
  "key20": "578vJj9mknTmzDEzv4SdDnFYP1NqBZ9ei7hxKkrNir8wgxJYNfkvMnXCe94tNWyqyVajeACJN9y8fUg6ZrGMu2t3",
  "key21": "5MYUMpaggMqfRVwFiLZGv2rWmN6LmCBzXRTmcMfi2UvCi1yZkDWk9ZuBjCpCkLPGayUpVVUqEEoxPcmRPgpD7vg6",
  "key22": "3Ano8Ngwv2mBYHp24HbwW3JPuP1B1eHa9whPSWyNwku1GmwVbJHcPAhsiFmUU39UwysJCzNLd255yrnSqughq7ah",
  "key23": "kgKdva1q1qzh6sVLKSUCF5d4ruW3NS9ReyrQvdkWYvZ1ioDZrMoyguhVVLHg16aYU3XZYWvuR5mEkYFZqyBZLkn",
  "key24": "3UqfnUssiHT5sDboFD5o3zNgb1cFyLXLk7QUj76JQgfqisURtiXNwzoU2CRWqcbvmJCPr1coxDqdtXXt8VYZRDvQ",
  "key25": "jNympmCcyCsJD2HpCFzbUxHRafVpfNVvuNZjQez14KfKQwTadASDZHJkwwHgDnyYi5E7CANNj1RYiBMfM1AW9SQ",
  "key26": "5FU7e4vonP883q4XqS5gCHHYmgFtZwsSjUgde191HACyXTov1VAjd8s3JYrtiBD3ViJB2f2sZyQA5fVJ1Vv3FPui",
  "key27": "3zb25DpUxgkt9Hfpp1zEeBZrWRXL85qHgjHU6tcKy8gWENhwHm8t7N9qG7QMdUs2rWLCAFfWosXWkGh1ZBNuvg8T",
  "key28": "3SAR7ZxZd3ZHsAhTXy8XMPWGT6YC7r4uxD3gsYTpPyiDtZvmYdXUKLEjFfMGVAJm7FZScyq8FgXHwUBwk81ruyBa",
  "key29": "67WGJRGc3VDpZisvKVL9yLgjM5UBdLAUNCtBSerLkbU8CmSyS3hkX1m6ePA9iMLWBWKs46Vbsn3FS427Shj6GoMd",
  "key30": "33ftLkhGvQMiYGYpJ1GGC6kgdCRRkP6tDVb8zJMcC7JiCgP5AzezaqSDCAJKg4MsRD5PHbb8nDQJaNwijQWE9j9r",
  "key31": "4xdZr83mAtGj47hBfE8k3pa5R6UDhTC314S9fU46EXRUA8Baiki3Gu4fqU3QZytmS3KfC4zRnuaPkHABGGPRuZ4p",
  "key32": "3F5dhrnfU7Hz9tZ52jPJquoP8mBmPu3piU7y3wK6Dsxq33MGQasH8G8P6WPooXirA1jkoCghUQ95aE2XpTy8QngL",
  "key33": "2cU5CojdSQjAk8K3rErDjMV7FQXZwMfTRQbm3PTN9TdxKqQcJTtZ3Gz4Rxbuw1F3SemS7ztDavnkWK4FopWMYVB9",
  "key34": "4bPx75bNZd36xhVDZsEr6vmwxnqCkPkjyPgr5rfkggBgYZVQArEaxbfagkhAJDJFvy4h3hbnD6CJYPeAFxoYzUwe",
  "key35": "mL22ZEsQtuGuWENv7kJ34N13VBfBzdPPrCwF1MEE4Z8b6ApiUL7cX5jjtp8pLe5Eu64K8ihGa497nVghaDzKrho",
  "key36": "42Q51g4evs9eCxj6ye4Uh8C1to5E1JNoBt4z3xuND5fu76Bw2oUDjTC6JPoYLiCDLASwTrYrL78MjJPwKpPvLmKt",
  "key37": "4CyGFxLWadFWqEsMg7Krihi9QFXGoUMibrbD1JoC8hRTHysWiLhboMRf81RbzfVyFVPD2eTQJaxcSb7Vpjbo9Bau"
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
