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
    "3dHytWS6APSLJwqwVHG26ERjCTvtVLikFWgwBhbZ4hAxPcUwhCheSc3UKrqhJ2gZRWqH7i4YtKmhk5bCnP8TNtF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HoS6nju3UXXkjMGGyrXZ8y2Lwu3xkBTWY7vuN7gqBe7k9kATWQYQREv7gppoZKBvKx7BdVUNJPw54ZKyVdYoadY",
  "key1": "4LvKNhcHXsthHSLRKGuNGBbVm2nbgQZbHWbiNAncqSJBYYPnSE4FVfZaDaij92Cj5XzcYHSbykn4TDSagBD9c4Nv",
  "key2": "4SCMKWiieyGp56FFmBuG7Ey6o5t1bGLuH52mr9M84eiyw3nBfA8cjVDYzcyZSTfveF1LFqX1N8Xk5DQBPguQX7kG",
  "key3": "4g6KisZp1KyPaMTHDxG1oHxmu2Nz9MbC3CCwdd8LUoa8JRMyTRUJVbZDmgBJB8jpAfRfGUtK8Vr41sKsuxDHfY5c",
  "key4": "2UAFJzSgsYxvY3mKzWEXpL2vsHSbkfRfqyBfkh4kxTyshM1dLy7wZ9LqGgXEbdsJ1oCaogC5ead4z1hNujdAKs1G",
  "key5": "4y44Q6CaAPY4XX3ADqKThVpqu7KnCQkwTJfYQXKZ7aLYv2E91zyr1N32THoBdjVWKEf5sxMTQv7RYeRHJT3ZSnfK",
  "key6": "3x6HDaLkNJtyp4gjRbALkxxWe4io3iSWkdt4QvZpLNuKWZqRULcuSuCsEsnxNnjMX33u185Vrg4FDnNnH3dWn31a",
  "key7": "4L8nNjnGSiLDYpdxjD3rJzAoH3Kz9ajXsHyWy4TGLcfUjJr7avJkXDVg3E4WVi9zG5VYjXt9WgP7gAT3bWhvH8JH",
  "key8": "5q5Ldm936rg9RxwPYDKscJ6fqwwoAnVCw7qCFn8wKC2q9hCtH2tmRWhqZwtsyq5rpQABkoUC3XQpivZb8cwoyuMK",
  "key9": "5PzQVBQDKNEkB5zYze1Gsu96acg6oA1mSbQGXLGySBMYrHfj6gUz6Ab6CyBnsSV3sAh9XkXP8PUcEwX29ZWC5d4r",
  "key10": "8YcEJmEHWrc4Q5yjVqpBFQeHEoGAdgDtmTSqSvQWGAurmvEGrXvjxJVMoxYe7YLQUdyqG7FD8TyATACRWrdURLx",
  "key11": "22B3gZ3WNWVao1MRBUn1P2uoHLupMZBgE2iSdSNQrSy4y2huqEehyUekFc4gNBMRRPXW1hNv7jtPDbbB5Qnjf3DJ",
  "key12": "3J1V3U6WYoTDqoERMEG2f7ryPYtvULRpDcKuB7rYWAH6uz9KM3GTrMnynBRSeHhb7kBWcERPRNWtKUuEvr9d79eX",
  "key13": "638HbbyTbFvXNz2KaZpesLitZtVhqCkjzTuBSqZrA3jbb8vuu67eH8S3twRow2N68eWddnQznVVpTba8Y8ZdoUk2",
  "key14": "5K8xi9iEJuhEpPBHMYdVUtsaaJhQiYqAeVb285VB21DcCNm9RHQMmQiAmRHYcieVkAGSk64aeSUytqdjQ9Gbmy4C",
  "key15": "3XEunVqKgJ7taswVxcULWU7rMQ6TGHaEzpQ8gVGbkAM8PbAufi6RdzL6p9Bs89Ve3HtcGSk34tNciE8NwVjqaMLP",
  "key16": "tcQMMZLrKt8AhjSuhNcJ7EBjwjnMyDmv7SpYgSxb7Cv4aApWBZYFgLWHDSwDuAVTLxGiAR3o8zwA3BpqEUYB9Fs",
  "key17": "4aqBmL2XZJzSnADSpMgLEEKXZ3G9gL5zia931pv3QETr96cGbr6DbGmeemeBEj19Tmp1jEieAKBKHyPEPBzzyJvb",
  "key18": "hQwzTVXBuG2oWmgaFy9F2cJFXbwichhzenyTYaAj2yWbFuAcuNX4TMMTWXxmvC3CDVttvT6oXYoUBhNA2YvZWux",
  "key19": "NRnPMYNq1S9zQd2kAb38dGzTEoBNtyuEtKCjkx3AfxVRCacMDFhJQPtudEqb28iSyZjWokwLtoCo3ppsR7pRHLU",
  "key20": "2NFJJKRvoNFUMrMkmWnWfaKhaEQbMqgu5u4jGuxJT8CWhwmNWETaqZ8QJPUPAnEmkCHaWCZaRS5TBf5bSMLZCsEn",
  "key21": "pVssaNLj4hiQZnpF3AEJnRAcBt4goomYC5gWRNKK3xTJ8AAM6Fk7divuiVREnzX7e9McSyBbwRM9cJwDeTi3hZ4",
  "key22": "3SpVBbKByP7iLd63zWEkDZyotFxti1etS42Mj2rN9Fz4sFNYtyu7ecHnkGT3uWK72gfuupFgF2K6ydoNhpAxR11b",
  "key23": "2PPiPLSJiW9MgkdgjPxcQ7ND2tSika9VXcva4fFgiFfV6pQfafymC1jNvU3CpJLuCqQJ6nJLjQvyiT4bBs3LK8f4",
  "key24": "n4qtf5Sia9uhJasbU4A6NQvAoqGQWVjVHi3qu88eXEwVetXpEPuebTKHaQAm4567Yqn3Z8KLMoPF2cSDf4zN1KQ",
  "key25": "de4zc3WVxBiM8CEmdNBqnWFJVX7Wfo83frmbJcSqSUHrsDfU2gBHD9S2FKn5dHS58nKzvZTo73aR7qexdoxhPeK",
  "key26": "5Gz4c5paCUEmYE4Ai64gosoAcUNfzX9Y6Axwa2icLzNZNFcHUgqhExE1GUmSDemamhHx6HEzcKtjpHcJzFJHpa4q",
  "key27": "5mW8nCYUvS74NrsYx6hmt7UePTGpmPwdHQNCvRUcxrYSWMCtZbsUKy5X1ZgtVKLfZDQ9mFfVRNmX9SVU2F3Y21ga",
  "key28": "4behP3Wo6Z9rkGohs2UT4EhfSeizvAZNegmTaBZFagLDpTGbYKGA6gFwaBB6FM9Ru3NDJMiHMHEN1ZBeJJomRkUf",
  "key29": "3952x6BCb4VLGtUf7Z33L2PMieMXWzfHjtogVq1rJBo6W5UEw8jjVN2yvhecdQoVDRpfDPBPY9MnK99gZQBcsWkU",
  "key30": "36CSA7qU3E8BFRhHNDoTSJLPnXN7YSrDkzXu8RXNZ5yER22JMDR7eU7mMGo3mb71CLUWh66BP1DMnLaCDKDmrE6Q",
  "key31": "2t2vUQoAbjh787SiUToeMppn74Evo8YWzcCzsvtY8RUNLn4UMMtXSbH4FeFknRbcFYxbqAqxtRUFrXpbT9cbZoXZ",
  "key32": "348xRrBzAaktVZEiX5tufV4FbHhazgH9tWazmGnPrQkGrPCPC3h3QjpdGjdqmxiZP2uevgb15VWPjjxpZRj4tLHV",
  "key33": "duPUHRVb2vLL8PYvuAX5VKwQ5foRp4izr72aSQBPFNsm3DpL22KsuNSNez2ey3MXaMQnjMGuWrZAdQPgJ9sqzyi",
  "key34": "y2sk7TVGHJ6spFEQK81nR6Zj6PgZt3APCk5rdtbetfJbaNUs7bZPAjmDqbrmumygRnQqU85JcEC1WnsCiN5escN",
  "key35": "66EMZH2xKsjDwpxzdgB8z5MWYXrPKhcFTGCWELhqnNHu8CYt2MvRqMYidSLeuKGzSBbrEa2TC1bofEFFmWVDAQgW",
  "key36": "4Hatbh716zi1Fn7Z7NoeLH1X7x9pBct2fisLDeKKds7p8qP5PXv1XoX9BZUH8JrgMYsGosiG19jBJ6fPimMUcH9W",
  "key37": "62KkMiYKXVLLejfuikFrfUPRrcJyYP8bsjTA1oMyE8xbRPJtDzy4fWd6ZjAGydAmCHeLT74jKqsfRED1f3Cmvn4L",
  "key38": "5N3Htsih14LWqSWwYFmmGzjgwDum2KZeqpzNh5zpMfKzetNN7EraT1zJX7pGM2ExMjsbSQx7iyosZRMBamcREM3S",
  "key39": "2RvYQbBDEW5cw937tm2Z5AMixhG5jXHkqpXGeQa82JRoEM86JfW6pHNkET3EQdczh1ZXzXUPHNVZkB7VWTatv22R",
  "key40": "2z6XvkitGDJjWW2NAHvsL7eoURS94swjiudp5EqrM6sVsp9aQ4uPJbtiZuyW2LehugH7Rvokcmtx2QN5wAfGSEDh",
  "key41": "5BZGssSNWM9Bmq3WeGkVPfMdeQpdm7uMtgLFpjcXAQnyjPsuExb2Kcbcow4dDdy5s6Jmc1NqhyqSfqb4xGguAAMa",
  "key42": "4HbGc1H44LyoxpWNQRP9D9PjKccfcgvJvWaLJECAhwMg3vKRsuBLs8RzjeWtjuXWFRbrt5MHjFLT3tJXSM82CiYX"
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
