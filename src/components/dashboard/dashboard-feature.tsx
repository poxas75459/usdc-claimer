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
    "65vhaaSqvstuJutXMMziuCJQNqodj3gCP1VooZCQsjpPfH1idL9oexqUeVXWw3nrUmGPomPLSFN1ZbYm8cwikje7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HZHyGYruKAJ3vZKeJQLo6N4D6SA22qc7dsgkhbStC2NHvTFvSr9SbpFsV8LYY8ZckyRrzDsEaFYrJFVrgnwJb8e",
  "key1": "4FDQy2rpixs76Sy6w7KGNU1KmbmaWh8hAq5WPHQU5HfWB2rAPhSzCRNVzBka9Goo66UmX1bdyRz5kzTpbfVPkqBe",
  "key2": "25e8sJzG7yVpMsJeKTnnCVYkHrU865JA4VEKLrmRY1jNUEMzgam5PuxEiYNuoxp6mv1ZaUjyef6vzTUkkJQpRY6h",
  "key3": "3zyFSEfwpjyEumnQpLTAacMomRy1ZrZ8ryUCLHFtXZ6cutVZLx3G1SdN7meAM4Pi4qDHzZjNdeeCyLHsjvenHZda",
  "key4": "4KzRekDXCHHLSEL6Cp69SVUWVk8waKPm9bmaGUDBHtFWTAkC1XM9Mk9HhPgvsYsB8zbHmkajcqutPnqdgYjJJCPV",
  "key5": "26V2PFCtBFD5nKC99YbQ6FjXSpApzh3WEn82fKAdWbCMoiptBSdaJqQAhWaJwWDpFrFx3TkorZZWW9mYgCbiB8z7",
  "key6": "3FU3LJmuVodisTXXyVXBgmSZL7aGMdSVQHJXCV4X3MHLkRRaodf8evor5URBM3aRg9C4nsdcYV8Ymt15ntp6mGJ7",
  "key7": "3Ubypr48gP31iwzb18QKohdgM3TbYc7PPCsJy8pLVw9k7Lu1uvePC4X3U4EQpX3bSqu1dXrXrweckEnEVES5q7o7",
  "key8": "257nHGif2yTPTWiMvZZ3Acq3ZyCzDisBmeSrmRYyFaivxq1Boo4GAo6MCR4ZRPC7RdntVjpaMEKDzaPS3dhihrp9",
  "key9": "4spKw8f9uNUNrjEkXdENPStHJKQgkmdBYH8UsfdnDkoXQtSeoD3kqsw579avHLJwNwYMesvPk2BJRAHwShrWpdua",
  "key10": "3Y4SLpwX4GXGMMgGc3djzpzC1w44iVFdD4Fih8oQPvU9tYToW4PGoPDKp768gdwKcWZggJxb3JB8RD85ducfw5U5",
  "key11": "4QpurffjVABtrdDXfZhU4bmmmxmi8CnXfvuysWn3yzNmMFo85q8fmEbgYYjR7ULKgyvhr7ejsH8bWJWKYSSTS9NV",
  "key12": "5d3QfbLjd6i4Zn1URVckDFREtJXiNr5rLHV46XJkSh8yNTFDPoKaPoKoY9VvPinH6LMdRm743uwSBc52ZoR4pqjy",
  "key13": "3NP4g5eojAihJmTdFdQxiWGxsX2bxJ5NupCp3HiwUZr9T3SajaE1wWhLnV8mBxikpzPqJxJTLZof8grN8MAyKjTj",
  "key14": "4Vdss9mTJQLiMD2kMokpQ4FwXeXBnAPhkTHZ7HS6AehgNtKAXgwJ7gcHXqGvd5jZvmkTmyQDms53h6A6CM5mxRQz",
  "key15": "3Ur3RUz5Y3Wyh9agsmnM5bwzwzCs2dc9zmosiHgyrkN1Pu4Yp2PNrM6KMDScM8XwYqWaHG1yLjaBbKXq3vaN8AmJ",
  "key16": "3zpxokhVEyJ7arX6zbYCiRyDr7wgUxBmEiZEHHEBXEwzoRN17PKgP9f7yU348nVWYgbjx2UCd7agMmNam5S3gJyt",
  "key17": "3QhgqG7ys3gZNbFrSWRgaG8vJSNJiQadhXtyL5EdmoX6UW3ekSpUCoVyMWRJr2wWXEaSr1gnbb8Z4JSrCePqti7S",
  "key18": "2XSsnC9ryTbiVcFsBYwHJjWiQYdSBkofaPJxaBK3Xf8gwrYpc62RzYsyrEDKRubbnnA2QMcGActi4uVx55ECD4Wu",
  "key19": "21AfxBkk3KEDCzeYgqgvRFQtqXLshwRN4vMSCopGECYX8UPJLNYB8uBxZ5dtr7kaRd15q2TMySGrU6F8cDMNaqGQ",
  "key20": "5NKVx7J98V9P59u1T8cHjegWJXykz1s1DVjghwqansNWhXLHFzowWQH22ZW3xFF4kf2tgSzFTbvNfv6W1HQNRGun",
  "key21": "3mvyo8xjEuJevu13vVugak1AQuVxHv6jobCchQk4VkPYxanUHavx6sYDq298DNxqYJf3mZVwS1GB9s1YLotKGtkH",
  "key22": "3VfeaqUs4KLNBRuEtCPL26G3Xh3uREhaj4mXBp7KvTcejjtEikN53AgbB3FqhP7W1pTzLHxuUrbfNAV7vYSDRh7n",
  "key23": "5zGbt38FsibNpBUJ1UQXdFVDFXFHaFmzqSjjjUns9fDc6Ap18JL2XSp77GJnRfSfpV2CyUdY8NVpST9yoGAM1FjM",
  "key24": "3crN5Y3yoHLNo8pDGfivXkEnhkSWA3ryghjWaftmfZdHsHAWFavtwaBtpY2Aag98pvkj9AanLKJFWXmeyyTj2qdy",
  "key25": "3WWVwoKd5sAEwfrE2VPZQ89rTGFUYrde1PUKQGY7zzeJSXNm26X4bofk3AQfQkbjNwUhn9vXXc3GYiVpu8Ugh55p",
  "key26": "2KYthpuJj8a7gDuK66huSBZErXBrndxYbjUyunCFdQq9GLCnK7exgvW2mUzCV85cgUhh9BsLfiT98jNtR6atcz5d",
  "key27": "5VxRXTtaPNHEEQnZH7wkyfbf4aAeQEcg5y9sKV8RTucRQPMxjU1HvQWxcNK4D25i9nmoXQVy3HxYozHgXvY69qnH",
  "key28": "4b1AxUi9k9Sw5sRgRvJhQi6888dygyHZLLDNxt6CEakvkvL1Xr9vBpGBmn2ShRXS86H5RdiBisrtfiq4EuNFuD8w",
  "key29": "2N5yMLWsb1QtLcZBc9xy6WzQNacZxsXNrfZdPBqhegA88FLQ3US9oUPjDjtd4zb7c1DMNJwUbSW3wfeLKVvHBLec",
  "key30": "2PB3wvLEm9dzHv7tQzSnhm8HHajE9reT2vDZQ9HFXMoeAuLgfwwyxLPvtZLFRCxMsvTqbUmCC9L2ZrqEcHqUPrh2",
  "key31": "4YmFHbQZdzmHojNyGH9P8GzmbSryQtpZLh5Zoj3oHt5V46enko5sg2CfoNiGkL7RpobC4K2a5co5b2RPCoVJVg4P",
  "key32": "3ZQ6KtMKVZSwuafBSbEKEid8xPaBQ5so4SnEsQfw3mg5Xk6Cj31tMmGkQxf9CSgpsPTZ7gBRtrt27gtvC2cb5EAB",
  "key33": "3tqnFGuk6pPYZbFWi3QGqdvpyZLZM3HCoSX17xENEvCRr62dFfQNtkcGNYv3Zbk3CBCeZg5kpyEZzaaDmwWn5334",
  "key34": "2JNbY6KcQWYsGgWjPXYLhmxhwqALSiwtSgKiNrqm1dQVxG5S3zVvnRUYgXvH7ycyXntchwascTdFUyr8FtcxdjGF",
  "key35": "aVcc5WBRAonYRzTc9ongSsxX6fBqUnNnYUBZkTJ6mtok5vhTzko9oeSbmWYy8tQQpLm6eQNTEWY9AgQivisSaqk",
  "key36": "MpZkLAC7wsEq75FReY5WyeP3FKGdzTysQtKKAAQPDqaqu9Mzu7jNjTRisv7zGXucSZ45HqZrpa3LzDssRNCPPwW",
  "key37": "2t9YcfwmPjmqNzwakhCdTBEJNCfEQgBeWaFpJGvZFe8pkmknnLgBVcSfJrLws1iMZV3176P5mPhoZXFMm6V4RJuP"
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
