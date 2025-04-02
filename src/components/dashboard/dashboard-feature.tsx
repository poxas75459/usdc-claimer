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
    "25Hv29U4hKBfatE5edawsTatDuDCjsszSnG7HZS4iTrsmjW4edAniNgB6AQgjEwBC6eYCzmqzw63De3stuXFr7hH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KqafFYz9yz9jWkrznKMzvEAxUz3JUx1zJEzHnECX2tzzvrSKju845rhPqxFCxo4JqXDaq5HNGC1hWrLh6rJsoGX",
  "key1": "4wmzKHzNNRVBGd86S3AHnYVXNa7CvrV31nRVtjp6fLFYPcVxG3hvPaYh1cRubgHWHcWFJr7L385R23xnqzr8Hzj7",
  "key2": "hvHgRN4p5jCjvcCB4kHp3hn3P8NBt2rU1eUSkKEoZd2gnApPJ1Vao8U1BxemptHe2aQwgJFgcAs6UK3tdTzSQFn",
  "key3": "2qL2pRgARtRMq2brNLXTFGU4ohPhFkShYybcWonnGFA5naif1YjmCfwaupB3ys741tQWSJ1T1rnuQm7rSFLWWLL4",
  "key4": "U241yN3W3eAWokNvgB41crnNiLjBstUQvdewyFJ4dqZEGTfowZbqNQJ5AHiwQAuLMsTNqzDEAjw7TobbgPs9kp7",
  "key5": "3H2brd6EC62tRrstMWZbAWtKjduD76V2o3MmexvQ8j7NZvs9DtHt3uJ9e9aopVS4Easd9Xoyz7rEVwCqVCA7yFdR",
  "key6": "5aefD4U8un6JAFeEDALMGmxNSJxHjCWtSBMD1QyeENScsGM3jsxnPbWVJ9b4NV5gqFFxq7x42aPzLNFsAMXxehKS",
  "key7": "2zNxbJfvEZ7KiHv57ZTsjjT2duxTyjsHfNzpHJC2iTMDqmDs8Cr9DQSqEqmKEtHaYop5Xq7NNg7X1Y68u8XZyhJu",
  "key8": "5P9ThH7cNt3wFVq5MDLgiKpzCHTwnV9LhbipjdFxaTF2y417ZzYdxWbiwnGMNxLew26EZKcsaohp9FhJcGwgSkTH",
  "key9": "FNDLPeQtPii4hwyG64hLGyxFW83YYUnVBkDjB7PxTwsyu9XCNP1zEPGda2e3F4g2xnnK4Z7LyyHRFjVWepmjtRo",
  "key10": "NCb7KWkC44PkGSFvpCkZavERDhAuc8Dsc4ZyB8eVGNM9vETHLvygWLvRy6GSg8uXJ5KgRQrVXxRUSpvR5ciF8HU",
  "key11": "47wKZj4Ve8ponWbCYEQLEg7AqTfoR8dtVFowHVrDxHWUP6fNbiyr2D9Fbs2aYTyGSaNjtSmruQbR4HMHwHVnrLmw",
  "key12": "5UEeZWsi1t1GviGZrbp43zNMRqzV3ctYuFn6BBNuvRAv86ncszBvphzURqGE7UDU1r5ghuGkoSaFukGJLYaSqT3s",
  "key13": "2WwjMiiHm381dVaRtRGDFRYPiG6QAeBDBXXgWu9LeGaveTH3n2AA6gXTpaxcpMukAXghrSmDJGfgByec7cHGfQcV",
  "key14": "3gX8p1QZtfbZjPEECQUtik4Tap8DectxZFgfXq7xCUNdXTc6RZKeG58eiez8ZVdajQNofurTT7bXBJuVNkvHzkFT",
  "key15": "CMGDpgnWrRv2eSCqNF38Dn7R6rTa8taKW1acNeu6kUUG5A3U5NoAkJBcTNUKsdetz1EhPDP5CxVfvexAietTzFW",
  "key16": "3cbQ8H4GDXBrYKsVJ414P7RdeyXYeA2aA2WMopHbEUknzxQKoHf8N7bjPD45Dw36xFbSEc3JcuNxjoVabPwRb6hW",
  "key17": "66NY23sGyJbuWS74WpsWDcvySqEKyqAxukERYFKmvVBkrbVpEh3nLJKWNX3wjBft1CK8sqAZYM76gW11M4u8fSfz",
  "key18": "61rM9Jvbm6YhtjY7PdyGeTsqPFYpoaj6dkwbRqpyHMwpwuixQuDCrJT6in5cVMzniGL79mppcKtYPDQU8B1ji2Jg",
  "key19": "3rbZdamnPc2XEdazmdevvcZCCqxA6z62ELFTAgLSW1EuZT1Wo4ththPp4gF9yWxujMXW13pFHoxnMSFmGNYbPGBW",
  "key20": "4NDx99Lu4yH65P3635nA5FBuuDLCR7DiVdgtpNJomDMYS3FEnzA7WSuZpB792SwAjert5AGtd7XLjoVph4GxGQ9G",
  "key21": "3AoKX49iFYAQdz49RBQP8kmrGFLRGXj4hK7chBZom1uPbUaxwKS3ZLeuW2gL7yXJSn9BR6A61BP87coaVDbTmBLt",
  "key22": "2HTvzo6o6jcyi3DcjVso4GcL74NL8vFm1dMd8BgtsaY9YQvki8Q4GDRktvp1fvCLaczQDHBV46CDTbpGTmv64nit",
  "key23": "4JHkYRvHTz5uSWxtsePhnSBjdkVF69nHi53TaBFG13Xwbc5N7HNQn7LD3XrbZCaSWNQEDp8FYVwEqR2oE4KrjizS",
  "key24": "2votAC3iTDxQtiVvmamKQ5qVpr1t77gCTfC8t5ynHdhiKDSFv89E5aiVVikbFHQqFZ32eTaeuAfRMcbtY8Y6bSkR",
  "key25": "9dvbNuqkwZbRJiZLuqenR2xyyMhU75WXm4fmbPkKGg1TDeiW5MA73gszc3PJWqSXdJGB7yKweQXtAVxgxzYDVi8",
  "key26": "4PLXyuZm7pxv5vPXEsaR2bTJ3dQQQMyAxjiH3XSVee8iBhC8GcCcDJyQAKpKZj4r686xjNmsBTfq7ncv85fjGjGP",
  "key27": "4Ufxp7B2vg91NDae7evUaXVLgRTTrAwWWg6PWn9eT3KUsvGBYX43vfakZsyQAQsRnJd8bD142xMqfzizRzQ7KYqJ",
  "key28": "2XxW1SBhdBFM1BGxMAUgUByRetTs7Rvwoe7UzCUeJzQjR7CZW4t7pFrv8zh8X173QFFQA57MrYy5SLvSBAuEz5BL",
  "key29": "3UAZ6DpczsPJQmS1Nw6EyoMKV5WoGisJJC3At3Z5gRyKkCJKtXWM36vEN1TC8xrugMxmBURzZp4S9ZHeKg3FD9gt",
  "key30": "2pJhv3UThgwxb27uNt1125MoPApvAnPThgtgwjuXryLJ8e3Bvg2zrhXgnZLR635evh7yGqz2hcMaW31QZwK6wdG6",
  "key31": "3Htkbw8argXMKEWFys7D8bDSGohuY1yumBE1VXQ5yEAt7XmpFSREwSy3hS4Lm31a4ZnDv1hSZGnQd1YYzk9LtBYm",
  "key32": "62Rdq5nKsfUC7Qt4MUZ1h5zxmcQoUkE17YUSWTwnGXVdjS7U26vUvox1Nnf1yDLARQ7Mnu4ES8BxCJDyDzx6bLtV",
  "key33": "4ijP2Jw4h2ydat8Ys5xNXkLzfMh9DbYmDUrEMhwE3dbFeXLx7pmwKjnN1naiddmbR6ZkByHEhbn59KTULgFsjcEg",
  "key34": "2HFWaVf8PgasMj6AsiSEXH2Zrfqb4t7WKjZRpZoYQqM977A5m6jHE5h54QtsFTmyi7birjXXYYgpkLTwFT4tkRgA",
  "key35": "5zFRkiUdJskxzoZtsm9Bwu5tj23ZmULqohDGHFWqbhTC5RvkHCPS24WGz1Jtq8jNBPBdXfwqeiDDdifqhVeQybgN",
  "key36": "56YJMMyhBwrtKYEP9tc6ezzTAN1DqJgeAtB2HSbCL6KouevQwRbxCaysUo3YfebytWa4EfWrc3aB1mgurkYvBPfE",
  "key37": "3shaDGzzypyW1nTjPy7rmhQZk8VkyAKTmT9YGReyV2C8bj8FKgU4fBq5AW8suzwP9abpxMtyBoG66ohMtsRHWvPr",
  "key38": "4cCeByommHSh6x5Ac2nZpg6akXKgN1Tjypr7TRSKp9UoVABLFg8ex1paq2bjHHpqk3nzi7CBZeeb21YaGZuVLQjk",
  "key39": "ztKF7Ezm8Wzgii9X6jNmcYQn8gnMdGLTdeu6QyJXfLUNtFjx7uQaCRKZX4HChopNTuYXK1v1LcorzDbFqbcUE9A",
  "key40": "2QRmqNw5DnoP7MiLvUP6FrXgo6eWgQNQ4cjYD8jYm7UJCwanmRZnieDsYfTUHeZdzNof2FnvfgQk6vsVbD7usJgv"
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
