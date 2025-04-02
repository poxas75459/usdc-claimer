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
    "MSeoeMcugFjy6YA4bMrhvkRDurPLNMNLmo4RASUB7TWDSEgxsMtFA3Hs2G4YkChGV6wenxHg6Kg2eAoqed6YXy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59qkYYGoM4W2QjrkkdbQ5PzDo9ytzGBaR59DqmMNvW4CM7d8LWL7BHS5BtTuYW5TceLxa5xtbCckqPB7vQgi7vdh",
  "key1": "52Zqak15A9bxzPYoadGsXDF3mauEmhLRRjvv5nukoMVa8baa4kyWs4zfjGgUwmYABaQRhXA8ptUv819WFwGd367N",
  "key2": "WWAmSSa6u38iRc1BWPtNH36D1hCPA3gGL4sPKDSGemkC2Qk37stRy2zd6Da7DocX1icvwPwLd8dw5DPMRFVrTfz",
  "key3": "2boc5KzMzZ7JdxwQr5sZTtzBsvu3YCtwRomvpxwBVf7HNxrt7mAMzbbQPAbpLJqoKZC3Ju6P95JcAbTY7rqbvEL1",
  "key4": "5zGJfF5Vrsg4iFNvDb53hRTnTomsL9FFrVrsAdjvD1c5QKEchscsoexEyVzaUpvSDLu7Rp6xtSSWEkLZ6chJ4f5X",
  "key5": "3yhN5NbGSF1SPHW6nwowEfpuGw9UDcP8jgrtcuyNVzXq3dHm33i1WZdmkJNxiZef49LwSpvUD6X19hGHxhE8u1j9",
  "key6": "5z1zSAN1uNkyQfcW8c8RpCX7NX4qa22ADrKr1d2prVqfwJZxDoPCXUvq1eYRvLwcw4ot8kfUGN9kL7Cn2oqzRdGV",
  "key7": "4NV39q2tMr14ZHmTU8MYM83VAhrexcuYeVTXfecbArKWVw8ysqhqvATkHqtY5PJW16efeUFLJ37H6UbgpSQWbyLQ",
  "key8": "5Cg8qRgnF3QemrfHXenKBKNqWzxSoPE6tLqWNsUmx9RysVUCbVbSykXqyH4PhrqxjbYWq9texASfFue3xUFp4e8M",
  "key9": "4B4Ksv6vB4Kk4tBVtDxsXmjwnzQU19vgHYxmr3JpjcEr3Yc5ddHsZuVzUYJjx4GvGjKSBgWE116aXajkJvWremnB",
  "key10": "3wDvsvnZAkM3ocJkh8wVUK7gDPzjNcZUwUGQCaBxUqPhDB5xXN9S6nEkeUiyB4m25TPNWpibi9NoaJbuKfYn3Jnd",
  "key11": "2egX5QkuVVhaBNobR61qwfsPEkHM3v7g7Ywq4ZsR81uE2wyHN26QCKmier4YESZknbdATAdJ5eGtwFeo1P1QrGP8",
  "key12": "5skzaL5sUUBcza73TbcNPyqG1yTqm9XqA2LsM46xd1Z4PsAVPtAQ6U3y9v9rNYQKnXDom5o8nCxbXrTRdKpgD6vQ",
  "key13": "5zzqhK1PBwTxFLfmA7cYyZRzbn2qj4bdzrE9rzzoVB4uEfcCrpoobxuPPknxndogXG1rv64WYqAEDN62EupKmvdx",
  "key14": "3z4S8bya7EicNe4y62R8PTudr4pNxd4PpKrhhbEpBQPbXhqwf35eZ7ZTHhCx1JskaEBhskcmFGboyxUVscdmezXE",
  "key15": "4o5ADNd7vscAts9M6Q7TtSmhutFLbmFatySCwnApoNFM9aKm1w3L6fTNYtDimhw23GttmhqzXcsfmabJq3JanU4v",
  "key16": "29yobYnkjHspBsJwoQ5MjdLvdqJFwag8FDa7axQjn5sUjaXQUvrpM8zARLiA2mTzYbPs6iTUxGTfhZM4FM3joWH8",
  "key17": "EkBqfx9kfnsShQD2jtUyZdfNY14wjKii2M1isutaZVvshYJ4z7mestxgXjTuBPkayeSvXUeqihVeXE4QKMymHWx",
  "key18": "2trUdypVT5wAEFn74mDPB9XCFQD9Ndo9kQLQekSkmhRXCqNJ7NiKkGyFF1JNChYD2ZyFCGrFbWhHxRFjfXwdWFBL",
  "key19": "GmitPeQ594hijhvKsCzAbbnb12xmTkYxc2FVM22gKEMhHgz9xignWxnWXEE53sukMzStAkyU8Y59mBq7cmahrzi",
  "key20": "5fd6kAAmrTFrYZvhRyKDUh4hEMduAb1R8dRDkSe7rdWK3uW7KVJLSoWo8bZUzExqefDwEGZSSaxSuH1uFgjkxE86",
  "key21": "2uA9oj1xusGo2PXxzEXCStPagegemKpB1vrfnrmL1wXpz41sU8oyNoYXce5XQaqBjtJkrhcsGqdNwELg2GFc2kvS",
  "key22": "22hazB8W5U7FEaRJZxwYP3qWwv8uPSJeQ4qkQ2siva6eoRqR3zpTMPyFscHT56RE9o1prG5RB1D1msriY9Ga1iY2",
  "key23": "2WHeLuVkAsXC3smCZXbRD7ET93iNZ1YmjxMCYu1eXEQmUAmXdvv8TStn3acFNMcenpwvmT1BymP1j3htgKSR2U5L",
  "key24": "5dxY37z1NQ5cQMEvWZ42QMvbUnBXRYagWp6WR6uSpkwx9Eo7JSLha6oMnnh7zkXDR4vKDszdwAEu3YgbbVfrUdKd",
  "key25": "4e4PhVBP3sXqgJfYr2gFY9ZsqHsasiHRtPLPMcG5Zy1HJyjj2uhgE7F9EA34B1CuyHc1WkGGod7BFre3BXWybtCj",
  "key26": "5XvzdE9kaVueJBX2qu7YkdQp8KsWwYUZsYnR6HqaSrCHrsDUWGkwXLbvmnZJ6os4SKC8wNdcRboiacqcojSBuhmp",
  "key27": "5XDzDWS67TrbJT4r7nvUcereKN4njnoCEya5FJLffe5XAd97uCjKNW1dbhz9w7hCvd8qDj1aeMiaPJsKn4VnXKuY",
  "key28": "5FotBqjcQLS2iktYs2oVMKA7Xs7W3DPaZfAjwZMvXpVeFbonyhWBPGejhduKsVVKoM7sZJ2XE6d97KrarorsMsd6",
  "key29": "s8vJUxrYYJHG1YEsgQUpQHbKuF2uEqv32ZoBwMqNnndQYbRuYzaLVLQwSffHSmz7Kj2z47aRwCsv76s9JUBvnc4"
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
