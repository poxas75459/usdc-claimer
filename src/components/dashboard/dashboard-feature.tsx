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
    "4G3MjFCUpZpmHN33tBh2d4oN47TRPXBHaRWBky123FkPAdvDSe9UALkhUhifhS3PAd49QYLuhRghbJpYtimbMDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zg7kwj4M5QvhMy2rC7Sje5eo1i7DzixGUr4ihqm2NubXb5mwKMueDzGuPxkiQfLgnGc72Ey9abAB6pUiV9dcJT8",
  "key1": "49Qr3nnQga67giWFSJ4rKVpvZHJF8qRguJL7b5QqNDsW9s25dFcN4qpjwGTkpytkW6DKnB9ySQ7YjeuoNFj2wReS",
  "key2": "22vdv3PW38RVZqPW31Ny4GGSUcscZsv6UD74RCFiA8kLkXdUd8yZFaHCbRPG28Y4xqkx7oGfwzpW7ypSYVz6NoEx",
  "key3": "o9z33vtxwnGsGMc4zUVKU2iQeTBzCSZU1GAhTBAFeNbKjwwc228qwFXDsQxToQm3QorFtUxdYPNxMMHFEg6KPDS",
  "key4": "4i5dotncp3FUEC1ZSUxJG4LdMn2DBsLza1YFAiYUaTm7UVanshMF9bfn7UubvfdxK4ooZbLB1p5pcC5U7Q9kRMYs",
  "key5": "4CAtFcVH1UJEXjNLbevmMRx7qNzY7zz6ovPH4SbzSzR2MfRymRuFyL17RPqRdtDSztxzcsRVCnHjfMMmVnTQbp6z",
  "key6": "2Jo2iM8ptDQSChqaqfHkHAVRWTNqkGEokjvuMcuPU1fyK5tmDBdBS27CaZKDdiTm4fV5BzrMrEPupLxcGobikM59",
  "key7": "3hGCEroxtEd1eABZExLXanavsmVXMD97hPYAmFL3gwZLbyzUEMJGhc189hzXdxHUqEYP7hXs4oenVVV55t2ovSQ8",
  "key8": "dx9GZtVg4LiSifM593q8Yu1YFcpvZADeRVEefgGn1NarUWYwZ9JnXgbKdgrh8MXrBL2zup27KWVaxs9PNBAm1Uc",
  "key9": "2jNNiCoh9n9ZzDXsyquB4vb7TKGT5uFKH4cWuBtzagVWxEGLpH944JFqxMpinN1BsYredXv6y21GCBPW6XTPshDS",
  "key10": "2PSq3p7rdsypyyAWaznNdgnPHooQR6HDRfjCHTrH2iz444v2Msd9vKwriFQC5y3C2x34uBhBD4kJt6W8sXDXvnab",
  "key11": "2baauJSurkYGRGxWoscaGqHJdCNEvRgAhTexb9CJTpNmPXe194NA1yeYEbuhRpQ1PHftaEEtx5ZEYKEJt78Czwnw",
  "key12": "sJ7jUKesGk9P6CuBr9ZwH4Vg3BRbLzLPcp1jjEqrJp9bm44uegzaySt2t4aCnqsuDH8rFVueTnMYGJJ3E7EYavT",
  "key13": "28j8vCzHqbEkS7dACUaaQqWLHjMrWs4jfvWPufQHsW6cB9UVg6GDJvsZYuBnumNK9CXfM5qiv6NiHxX9aHAaSYBz",
  "key14": "64URaL1ZDxL2YPiAgDYjRMwCVwxTEjL7VWxWhrKWFqE6v9ueGMSgZgcKyJPkYrS3abeAUyKSjkeKimRuVGZHgXRp",
  "key15": "4z1JBTcPnxq9Q2crE7e5nNEkjrXzJsAsDBBCAy2sjogqsDYFVhzLTgMeE3J6i2T91BoCwGSh5FQDLXUeC9TEqETG",
  "key16": "3gwvT7R4H76CBW2sds81vGGFZEaBmjfeSLZBM1jPbfGsmax3Na4qmWsk8AxQxvYMNNnASsiRXEFiDg97P5xgUT1U",
  "key17": "5LrKUtNAmRA1u2mTrVooBNAToVRFHkYBT3zpKHsEA2RuKCKsBiEMzLRLtJumtnDUnSZQo4mZ5XbuTH6u3sWGigAE",
  "key18": "4nkvTjqzbFzEx26J5bGSwZavZ8bN7494FWBBK22RB2SuGpjHSpw4oQ7jiYeWPfqCBR7SkY7h3f3BeX3cEDVsDoeW",
  "key19": "KyLkHGhTKwbvXGMVKEeRP6i7H2YwXWAmT35PWxTtBzqjKKWPn25ubi6SPgSrmWy3D47ww2WW3oejdhXtV3KFyg6",
  "key20": "xGgWrmgkwzZi9t2KJCBqeYfGETn6qE4F7kbkguyKALYXDVTvaDMDFFXzvM6eJ4CLFE9KbxgUwRtwAxEeTXiPWWm",
  "key21": "a5tVeGc6W8YHccsaJLirpWhJvQDnW3mYYF5hpmhAr59WoVDFfK1EhZvctwSBEXqhLBofVQtEG4R42G8Gvr79bKg",
  "key22": "3zCtj3xReavC7w3szRUDjHu8trwpPSHtAbrvLL8MTf21iej9G17YBjw9dNECaMUstZGwjrdZQZ17niK6H3TBng4v",
  "key23": "27BfK6P1bhEM1S1r2NW5keaThd81upEESE28SxcNUo6hvxzRhSbAUYVmwc1hQrYQ1ZK6FTCcXqpdtq9JFcYfpGQb",
  "key24": "CuepQ2wTmpWCcFsLfWRg1VALohKRndyeV4nBThtegbZLSj9qrEZXt897wGrDGBQvVUT575JWnZyxrY599MZsP7o",
  "key25": "5Uq5FSsRXc7aoEFoNbcd1Rcwg2zJneeEHXopbWsH9ZbwfzfWrju4gHVgmDqtR4qrb8PEpQ3AygzmvdbDVQpgQnN7",
  "key26": "2RkSs87Ru4zZwGBJ1MhCz9YLZLpWTVfYrNsc8xEQPb1bP9Tapw7pNGq5zE9UF8qXpCM8J6F8WvSzAUmzEosTTCcx",
  "key27": "3UetZJfnhRApMuXcZbf3yP2atWwcFBpqDkSrGE7iuzebGQJxHbxYopf7z64RPpLq83R3GpcrqSWk8KUZxZ7WGUbf",
  "key28": "x5pA8arar5coR9rHDjzopxnfJjdczYJNPZ1Db9Gkh3utiM9PuNE89UzEMe7WzCyVfussWFaRhNiHMXwLB9cLKeS",
  "key29": "mNKt1Cw99s3NfoQTkxtJqztX7LWaPESwzJ7CuctrTmu3S5hU68Kcn1S3fAQjLx19AYeC1XNH681DnxFR86A28hp",
  "key30": "27HYYDCHs7j73tYxD2By7ZpiAnrSFUotvSejA8QAtE7X3PgUTNYabLLmvWGJKirJmfReL7nFWQh7DhYxHMCYAAGv",
  "key31": "3RT14ovNqRTzZSXM9u3AXViLrSK2mXovGYFxtnsDx6sEFP7xEgJYUzcf3ASXJ4FomfDcZPRmvYLG56GqxWMXUBkk",
  "key32": "4HSLn8GKRxKS6mnju1uE6hj1h8vb63Ws49u5F5ZBrvmBSaUu1LJRFjvqrtEjA8NGKpv8ZShcdy2HF43MJQnF9k39",
  "key33": "sk2Cmtt1i3e8CfTFXVK3y5i4s9tTQa5nap8AiWM1rWkpXP9419BuPThXAcufXTCmX7ZLyjGqe7xjgQsvzuudVwX",
  "key34": "5LDVVdx6bssSxd2nJMRxn2Wy71Ji5pSNUBhjRRpqR5eBJ2U16g6SCVr8FW8SxBN1EQTTwHVcLH6kVAkcAR4FUxNW",
  "key35": "3Lp1bpA3hzGnmrDRuinvqn45H1fRZqtu8ophJCDjrs9EcDUdvDJ8ZV4bGS1tgfXBkTGSjrGMuKioZuRF7ha7ZTjY",
  "key36": "4QZ5WLcZByR9y7ZgSE6kodLhKrVBVN8iDNbw284JYK7bzAFKunbF2rT7JoSMwqNqX4ECjJwe4VdZQrFme5zk5QgW",
  "key37": "C1YpBSeUvLwto1uXW6pZv4SbLWpPn6N8gUPhAUko7v2JNDRhjZQNFhLwLmRFi6g78CDRAygDay2YPwuQEXado93",
  "key38": "4rwTrL1NNXBhBzKE9PfYQTHwrRdMuDqvrFev26zMF7sdHJXMGB3piayhpKWrHYxoVsPf2FsZYt2rYkiSzrda6Sjb",
  "key39": "5UjXSGUom13ahxs5CpUkxo3NTzcddwKGw7BHu5Vj19hbYMmaGVKEnzeffz13qDpdv5vFw8sMsEUWrbKT2ZL73vEj",
  "key40": "3o4MHBPkRwzJjKzESi5bXEYtSD7avuPrS1czRMCyHVxpj9uXTmNXUYYZWXdiZv9N5JsqU3nzHxdU1RiMwniiG264",
  "key41": "2c3iGvm1yjcH9W8C3nt9sn8AcGpVszs9bd8jYtxo3vZ9qjWwjckqgfosfnKchWFpcQAXYmJwHjZZRu86ubMgm1P8",
  "key42": "5ubEpBVJR3mmgmpMQYPxxgDdWWLV26DdarGcPfMcxyjNqSUSRfuevAmfqCPGyb8bkgmBNoCQnALMKZBgELeY2AiV"
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
