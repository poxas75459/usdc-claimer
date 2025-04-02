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
    "PGZcLPbpbfkEiByDbTkHKZrocBJBGaCRHvyH13D7CZYCcS7tZDwNGz4Zu5Nx6XTM4QwyemcNgXqwfXsZdotEKm9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3suTqkpKivSsyaUKGyWMgJWBj49V9L2LGPk9YHdkLC4W61o1CTCE6ksP9PBMzL4eaSjaYFmCNeu4HRzvx4ixBsyw",
  "key1": "44LCZ6dzb2bNcAu5imtpB3TYZtZNRFGg6hgNwCojaCSTtEDx9TEwU5TxLLQ6mKbgYJhEe7c5mNns3h6H2agT8M5H",
  "key2": "4MAc6ogWHn4hMkUSYcg3dj1narj2EjVtt7ADScpYY5RXyb688nNhRbrm6uUHMXbH4MtnewDAyMYv9r43Q3NcUTRF",
  "key3": "5ddytYueEobP8Y7LAHDRwWNnTeEq5q1bipdDWGi3KbTZ2C1tSaJXFumAGdkMbvHmKq7doAeez1JHoWeCPvRd2dbC",
  "key4": "294fCFUwYFab49czK8p66BQfQDUdPonyHeUYets9MC2M2YBXSmBncnJnyRhi6WfNeEny5R5hu4saVoAxZ5fUaMb2",
  "key5": "qEd3HWP4tbc1bstyyuB62D45aFdYnYNzn9zzEdGtUbcJhnoR4v4oKf9GEHQwWXSAiGaP4XQrNkXdUGjgW78Wsnr",
  "key6": "5sA5cHk2PNqT1bT8pk1hJC9fSF9HLnVgj99cayKpHdKxmKn6njsNegPLHEhcnZbzccw3X5YmqgAEN8i11TaLXD2T",
  "key7": "421U96keaik9fzThX6Mz86rnHCh4hMdsz1yq6Pt4or9fHTff7S3onrzNvighGmbFSUuWU9EaQPRbUz2Fy3SmRFh",
  "key8": "5rFLzvSL8Ens3dDVfd6BQQDUwPq3QokqHYjtd71W2A8235jAxPAjfdgKRg7gK9cv82Twxfj9uamyrpqSsq4XtHPv",
  "key9": "2etCE8ZUCjo3QstihZhCaXomFnQbEbANWeftUBHK1uRRGpMQpJTav6ofJpjnMSHA7ejFa29YAhnwG9QuzKWVRrzu",
  "key10": "485wKU9VMafh6G8b8ZyByVUD5te9end752zqkPeaGqGTXF8BX8w1T5aH8zSg42sNWRw85YFhebNyUCo7P9KydvRd",
  "key11": "66SM9h6t8pTMMMecEwHrb4AdP2Jgg9hr7f41gqpXDxJUotcoE69vpGrbqESbdDXJXj5v7FfBEUBa5SHjp6Mai1Ux",
  "key12": "4Vr92pLzrHihK192UCAhCS3SxGhoWs5iCJF82nsaYfU8RoJ89JpxVNL5CeeCk4ixQQhkQqMrPSLfGPLFhkkmsPCi",
  "key13": "52keHZdthyPgfVU5zGbcVR4UgKH2RTgs1EV1ZZ3nKZPqu5roweMxs6fpMYgtUejdsRmJ6SkxtymuT8FC1Xu9i76P",
  "key14": "2ygAPwf8uLMNVooAgEU3URoBEZToXjDJgEZzzCzw25DiYYiMfDZNoW8APfV5hYyn6TS6RUa2tmUHP5JataESuy6d",
  "key15": "3j54MRy8wFCbo5rqeAqQD7oBCqvdt5FoRZBJXwEQu4Zu4wUsjZt2ANEoBqtNte8meR79XWjAKKtamTZkAnD8o4d2",
  "key16": "2tan9SJxyL79SNMWZjF5EBbXGBmwJv4ZpCJxBSBkj1SBGDDgD85mSjy9U1bNxSQthGTadYUozqZFBS5ZazZ4dF5V",
  "key17": "51R444nebU4i7XHQxPKk7Hqs15SwM6yJRvHRaFfdV26eVaT21Sij7DPcf33hca3ZaxD5yqbSTRzFCgijMdTUw38k",
  "key18": "3H7r6ieWDWNcn4SVDWT6nUEYgzjQ8cSiDz89u9BiM1Fw8uw8arqHSn83pg1vAxvfuiA6hfoRamycsrbeiKq36gjd",
  "key19": "D8bLR82w93n9QyMpa7Cs6XNZzMeqUuUV1xodecFL6pKLKhMp6e7oU9kU1Wnj3GhK1yq9cSJUufWXJGZJYn9huNe",
  "key20": "4RyELiRW7J5xiZEQu7omYCwzJHHSTkj6ZiuLBMj2yvkWPdTz2KcEa3E7WJKwuAXwEbytGC79VbH8SCU32sUjhAMp",
  "key21": "4u19QiC52vNE8W7tKpUyXHG8wi68M38LBBaP4BBQy7ydHrYnZjE6C5f3jHkkjjmkfJWYYJXNptMVQA7acbPbszEP",
  "key22": "bX1m8AN59HaTYaCRnfpTxgvCSXsf8tXhGg4nTa9HerENRMufv8yA6T6iA3GYZ1J1wphuLRuoVC26KAjz6GzWRjY",
  "key23": "BvVACDJBgnr2LKP49fG7aKJVpLEcFtZzJHLUxDtRuq7PZW2hRy9aLA5onvsEy1oZN9v9LVuCyjugiuxXXdaDWhR",
  "key24": "JadjQomwN7pPiTVCXcM8neXc7gwhcSTMFbtuBfSpppoXGPmYJXaGwvwekfsqym9kUC7GZAe6bSpaAeVAkUYGAS9",
  "key25": "4GBczgs5evKHLAQshtXMYw171tiBa3MUez49XVu6kH9G9F6oR6EfeLS5UgJxsZ3v1v2wnmWLmAfx4uW99XE5bnLw",
  "key26": "2tdPDTDeLgXtT5kjqUHiAXzYokrARzLWY6mKEXgBERtXdTYtU2WZxLULMvnqpR7eX1UrqQienn5reFe1PotQJvw2",
  "key27": "4ZXzCxjc7pGDWKW9RoCCQPsxrDY5NyB6r8Dgf461xN3SN3gMUwYguCcT949uXXXeiLTLPwAKrvAF37mpnj4y2MkS",
  "key28": "3tsUMamtZGRHBnEo4xm461ZfrQQ2wqCT5WmN7uRQoQkT3uPZpB8iy2CuoSM7g37p54gdAS3Cd8JVMQgjbuAa35yY",
  "key29": "2AS6Wd86E4uWYPo5vsehrcryz2dKCakM7p4UfzBwTCr5RF9X6Vmpfo6Yoni4Lt7ggvbF1yZc6PAZBszLWiqyVFFZ",
  "key30": "4MoJAzf1xPtei6i6nQR5jHvEfhNhzqVPGYEpBWUhzHpVvRZmpWnGesdXqNNX7LoyJGvd5GnsuMkTot45hWg2R6xk",
  "key31": "w5RSdC4NP6UUmgnDx8mqmRDenHM1fB2Bez4r8nPpXrGSo8HzHmM56VS6McLiP4KoEADcGaLovPe8aECgPVxowcD",
  "key32": "4ZzZVMarebpM7eaypvQrE1NxWQ6Qp1DiZDffihunmvKFTWK7rVMCsmkY3YWPRjDPNhcwGMhPkxkRZqcry6B8Pp2L",
  "key33": "3py4LB6nw5dhJ29CFUimJTRov4Px55HmN5VWEoNzgSYuSpbWLnvEmf1WptzcaVuWFMDCPzdeRDnX1PsNMgGRxJXm",
  "key34": "2LN717VKvMqxnGTb9UCFcXcVVhZkkryJiWY8dKB4je7YcDx3wdKwU2fxDQrUgmyks8z17FhZHfHpvy55pmhNtAg8",
  "key35": "hvbkqCBRjeQUVntYAXRzDZdc7EMxkNQAatHpM6hnydfTdurznHMeauKhkaFGhWLkkwZAf8riMbBDarZBDovt892",
  "key36": "x6q5kmpxwCcn6s8GHS5gXkV8pSbwEKUDm8eEtCsU8kesM2arDUNn7GxUUYatp2XUcKzJYuZfS9CaJu3iBbs8dQr",
  "key37": "5RyDTWgtJu1aAt5EEEdDvE3JosH6SwJe1sPTg6kkvHMdnU3YvqkszuLanPCDK2TvMTHhYgxDzZtQouUj1PDJt2JD",
  "key38": "584gVPSehcxWRAHaPEsYEATJUmKQh7fr65snsRuUEbwjpCR2K72uWrJFBxE5hNz7E6uJXukqh8wFZhwnAmn5AJr2",
  "key39": "566tzHqQY2QX2gmWjfm4We1BwTBTARCaPLhzovY3A2mChyB86xeXaPVKmHvrJ1wi7fmApdt3RoQpkQwzSLssmJQB",
  "key40": "3YTdP83mVNwhokrNMLYS1ddsteiDLLTAVXDhyfJt1ox1vVxqqMm87Sr2Bbz8oxtcdD63L9bB5aFqEbNGXGvXJ1gB",
  "key41": "2Tx4WqWuNcfJ3Dixf2xgS4uF5N4gANr6AKdhirAGK2YeNDR9dkaK7R1jSTgVW4v739Z2x7AKjyvXYBAhqEKMzxPC",
  "key42": "3KJbaQCyRTwURX3wm1MZk3sAHCUhQdRnV1TBXiggRVfFHvnr5tKwpSdFs6YvPNiZCWqMTzpqdYCvY9z48ahVzFug",
  "key43": "4BYs7msGqDLBVZwty7jLjSGkPhfCNCPE134Y6m8t1z8hrmiKmFnX6NsrAfxDXknW75auEcRXHRzFQXTDmKkpYDDp",
  "key44": "5cP4JTxsZS5z4m67dZbU6jFHwFraj77Fh1FhcMwFsPYsdcopuFWM1htanB6Dwus2LeHUbw2H9X3E3sBD5xyThr1J",
  "key45": "3dkWrUzHRUJ8A1aJG3pDMnTdutaEaUJgYpTjBLJUUn7EwPHKKcWRFn6iVzTrCKmCALEPHEd43Nec5hRYnpeK7b9S"
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
