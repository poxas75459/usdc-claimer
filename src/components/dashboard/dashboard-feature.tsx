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
    "sFAjqydJsj17zjKzBTqfQQ8T23R1Rh8VsH8UVeKk56YmudMNDy19xYsQMiTrifVnWXXBTnhfcJxMkRra5pB8v7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JR3aWiVqwGtuhjT1mWbxaUhtBaVHj213du9B8McMGMTdLV8EF44pcsaRcbYLjcR6gszaEp6tWzYEvAzkiAcUVtq",
  "key1": "3udvFc3U3jHE9nRugLMbh7dveyLr6gie7rPB9npxq47PGyeYWdz3sXRaTKdJUP3AyQunrMBdeuUWqX8CvrxKf2TU",
  "key2": "3n8tQYwNeEwFqCSNjyQWdXayDkvD8RENL8PejtxCeaSPV3PXfpgdxJtbavPY9zCbihnwbTvn7T2CTvydMhhTD2X6",
  "key3": "5tJQKQYsZNk2sXDrNNv1Vofb4hTQk1F8VtZbgy5N41F91DM2NmKZ3u92b7jbLechBKDkg3xgBVcPyTMeWryNQSwN",
  "key4": "2JrcsJgwYb1bcN2mc5ijdHAdDBdqyjgZgB1gNdqk6Jynp2BaSGkyfCG8vaNU2H2EctqwTDtM9aJLV8vsm6ZWQ8Dk",
  "key5": "5QsD5TgdC1yrVMUbiE2P6ANwBVzXQWTTSTRWA63ghq9wA712rbMB1s19EE1sBRGgP3RFZVvcoCd4RJGcJwTALqSL",
  "key6": "3bpz5vnvjw5sy94yuG4UxEELYmRVzW1qpvCj361bnUrdX165DJtXJFKNGzdjzYJ9rwWds5EktBxvN2iGeirzT45J",
  "key7": "2nsjwXv7Zdd47NMVzUNvDj81uBLm8hXoRedi5NWTg1ESaEWu4GjUpAfU6jSY3VZG3ZjxbQ7WwqAkzUrB5rpmHTRZ",
  "key8": "4pLW8WXbvyszcWA5HN5s2M1Kh5CpM2oPNC19swhJZRJqyYT5po7rXTCpZ42XgE5sCzbfjuNiCBJxSU8aJ5151G1k",
  "key9": "XEU3Vvb1N8vAwmp79vggTyAi412gcdw2xQa9Svzk2iGaeh8iNiRJNBoHzNTSX6B65u4JBURYoDG5GCr4NpfHJkp",
  "key10": "38qDaymNCeB9HVRSSot7Ajqa2T1EiCBamjyscV4ZQ4iJwhTpBB8FhBv2AdfQucx2NWLvsFQiMzLPomYCcAj6bb58",
  "key11": "g1S8q9dNutTxjpTm897AixtEoRrXoebHff9VTTpQiLMEEuLZNUSSqV5NqA6ai5N88k8ZfS7f9EbaK2qAbcRTTun",
  "key12": "4JsAYmhAKncxSdYeCQg1UD8DrZFGjYoFwyoMAZU2j8nFGQKmYwe4JAJnEx9XJRgWMAC4dH28QiFAGkCHgqhoZ7TD",
  "key13": "58EP3y3TrHcLWzAdWRapFDZAEqbq3CZVvdJeSMGHsD9sr8qfjJ1PafCVPAQhRo4XNWe3DuwFUQp4B5o65CD8WE3w",
  "key14": "3GZL2ewEV7SZcEFUP5LPK3sJMQdyyHP83uPS2CSsgQbMVVG6ytwHHX3b4TX1t9AUTEDBYGMBHFnLeTr8pCDYAmgT",
  "key15": "2s4WYP8QpZWqFxYhZi9v8WZSAmMLzimdTBFZ5JAYuJC6CpLMUWMKKkasNPgCQWYMMSg13y7vj8Q8mzMrgrYJcW5e",
  "key16": "UMm8DoFotY9kX4uwZwoy1HR9pPmscL1s3R42C53AbYqLDUhU3rg9jEpBmkrpXhRepre6LY3qH1DXjSkc3fDkCae",
  "key17": "3ETumTuHqrrWFHFxRKJgn4fFXgbSzbePZxmT8soM6WPmWiHUhAQVhFNoSxGuiHrMWbQ1tBEzFitAbZuUYR5rajk5",
  "key18": "5E78QwyJGmTxpwPo77THFtGrX6zDh99V4Nbue9R3V2brNAMTMpZ1rTnAznwNFTrW7vHeeuf2yykziMSBAj4gNqD7",
  "key19": "pexP8gbcTkkt3gh1mkujfRqhCxvZ6W4rLuQj5n2RMpp1ucf3xejCUhDbMrfd92pgSGsZeHuy2PKXYhpTWrqLExP",
  "key20": "5JeaK1mHj8f2kLxaPukpSVgB23fxKgwoge2UMCBhzHXxAzJ7feV9Tg9UxmjniWVwpbYz1VqeGqi8MQKCP1rQ3idd",
  "key21": "4kk7tjvyL3EqNKi1DYPQUgQYoeHxomYHjp4tWbC4UBK7vfJrX1iWgKxJe5cdvKfRyDqDqbT9LBH29Gn82XvQXtng",
  "key22": "2FfawwY3NkUwKDNmq9bXb5FZSvc7amoRLxGc3NyNxMynsJb9otnB8HaRUGCk79Rp5AZFzc2PLU5p2iWVoxZ5jRMJ",
  "key23": "5XsQpT6ikdEetW1sZbkVvddY1eFex5TovzQ3gKo5dPHVMkrP4gHxFKedC9LqebdoDVvHzMiqSZRreE9Cr9R7hawk",
  "key24": "3P6qLNZGTdEVkThitTSpFbzEJPKdR3dKgmWedz9wRRLuhvEwWHNZ17UuAGnJBCTAwLDFDNoKq8pt5hUCCq1RiMoL",
  "key25": "455sPZfJAJfNuzEXk52U7UHdSPENgCRMGHMZQQ3tY3sDwd7XSBXAxiuxEr9NMq64dbVb2GK2tPxqSGuGQrtQt8Ye"
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
