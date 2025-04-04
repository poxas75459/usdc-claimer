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
    "3xEjAXDuXYkqvTacBZfVCUcFZJtPfeFr9hxN5TizXGDqrXdkaHfvF6RtusVL6HpcnXoqQ5DvQ5vnv9m9EVfCn8At"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U43ywJ3yaCbG1CVj8RSd28qGpUeWFEY4BYNF86K1TNQkJTeABtfNyv2MHf8EkT5NhiMvnMFP47uKQykjMrF7DCQ",
  "key1": "5qtuMKAAqoomuhxVoWmBJLFEKsfFdueNyYucvEEzq1ThPcZWArjhDVushnxGCTvuyywYCSomB5qXu716Ko84nx5Z",
  "key2": "k1GEjoXdsfUqCfQ9eKa6F2oGXWiPexEYuSLchFbsGUGJp4ALEjJi7ZDPLL3hBXJU8YksSYeNzj7x4ZWFQ5mrNYK",
  "key3": "2LGKcQFd9RtmYtfc9xUPQUqvb2wzj9b48hvK5Em3DNtoDvMQhrdTzf34LcViW71R3cBWjNDVk3Y7wJSYKCP2S25R",
  "key4": "axJyrNBUMo2KxBZjuJffqN9Lz1fmn8SzmL1fj1wMT6moqBe6k45Bu3Z9g7N9PpFLNCq6NrW2f8LVKPb6MjKHkiH",
  "key5": "FLfj9NUSQkEKaN9wbdGbySmcBZTdfLp2tJ3TcgUX3zzYsPFuuREVDGpQifkB5GRyDBxZXNV4Dzj8NHDQy5yEY8q",
  "key6": "3wCzFvnaZw41DMFcrNcxbxycYo1FtbGpDjjWx4pGjz2QQwhFV8eVVH3pKy6bcGz4SD4vKPqaBAEvskMxwnqWNr8J",
  "key7": "2cEgVfSg5rAb4oWjvuE1UjqLTYcTXCWSNKRxKKcHQPe7tC5JTpmELUvJWTFFuMgAePbrVA9erbF3mya484z39rEW",
  "key8": "2HC6qAqSvLVVJH1L2ssZHwwsrbyeAUkNWTK9XzTxjzGcEGe9hDfiBxw6bWedkYoP9dUmHc8aUjijBiFAJcyR7Tph",
  "key9": "57emrZPiBjkgWbBiM8fGFqewyTv3aZg13zb1GaDSMdTSwZ476EdEi3sqXZQKmRXAuz9tHbR3VgWuvHxAg9DduLxp",
  "key10": "4NkV7HNqtvibHhT6xMiXdCTc8ipWVmvBsuw7QRvCJrAXLq5BGLQa6tDCQr5XtFbNS22uJDFjCgwrve1qJmVwZCSP",
  "key11": "bNvsiCEQUXWydBDis6YiXW4wxo7YHF1RoZmuut8A5yqNV7zY4Tjbq7kw1BaaDyAuarotvPtjsCopJ1Fh2odP6yX",
  "key12": "pW3LgqKX8g3yYk4CHnFnUPKZAiBxpAGH3G68Z5eBFhfYoWQZrmY3492PXKFoCb3C1mnc3f6SXvSieGn1KrR8ek6",
  "key13": "4K4G6P1c3rxiSLkdg1ka9vSfdcPBfZhoexTC4h1hHxucezXefePmDeLjmhG8QigFoEfma8xB7vSVUGUzwdXSVLsa",
  "key14": "4yDUgXZHRGRVUmjJLvxygiTyXitDPT99sqpmUWQJjCg4zA8gcAkegEKT6hn8teEY1XVJwuy1J2kjRsM2ibUGcG8i",
  "key15": "34iqmDcU57oKXCiqZ7nvF5LqHQxMSyWJqrsA32vnG2ec9iJfvkYVRAt8BrZ5mc1rPdKGgPPz8QN3iz7pErwYuZJL",
  "key16": "4ugCWRu6djyhvQdp5boKgHZhZTXqaBTjEiDYM2LHwxfW8GvpZRZKFUpgpS3HiF9q4NL5MhqZE8MfBtD87rNYQxrz",
  "key17": "4k9JNUwYtM2mM3f46tnyJXSmYouNC11jEUmdXsFqUTJ5wofLakwXEaS8V8kYDmRxTPy8GfhYoJ87jfyFs9nDby84",
  "key18": "57PgDvtjAXzrqKqHGisj8d7J4exo6pFgsgZtRydtBAvA3e3zXJN18r3jnVju3weV7e5quZy7acJy3yR6jJVCQVZD",
  "key19": "5WUbL1rAw3n5zMxU2iyq8XJLPa8XHvkReeeBXpNwJMo5q1naHN3xJGyjwNYWPmY7dQvpSj2e5FFcSeyJyCdhuJKf",
  "key20": "RHX5QQDWG5664CfkzYRiZfqxZxxorrhQSw58A7r6Z5sznTS6Apv9xoX1RWbFXYNrSrsDrHgm1AbQKHg8GTtzngj",
  "key21": "LA7oq59wsrHJBYC8JLuFVwfBzbCEFkUtHDJtBrTY78sFggt6WocwZWX8B13jDdxNScTsiSAWBzYcNnCYu5U8mc3",
  "key22": "4FnCc1c4Y8vJQZNXKZaboKsPrgu3i12W5fU2ZuwNy7r4dew7K6XD33mWRuSrf7bQiCt8Rw74hdCY9zqTaAJo5AY1",
  "key23": "2tmRrRfyNL8qh1aBbeiNEzUVHgzt7ddYrG6NZw6BFYRRgBbVeNbkqpu6WwSugo1AXNgZ4jajX5SMhVWJeu4Yi7DC",
  "key24": "3i7pfr6tZnBWaE7ynMk9VWEY7DtoiFJL9AC2gPDbeVPqs1XhdCtxMcZFPU7BRHEm58EJ1Jbobw87AWQUGuSZibBQ",
  "key25": "3PwqGNXDmWq12YJmUoM9NRCCQoSr37uG7knCFnVyJyRwdCRMuQCrzHAB4h6RgtqHHxw6q8u7epNXAx1mCkbdqT3C",
  "key26": "2MLy4PKfBahrVH7hdyJ3rDNdDd68vNwkhAutKtwfA8B6kxjM5xMYZKDycCXqT3cfzky1H3RNtp9kh4s1HXCpQSh1",
  "key27": "e3hNNgNFei6zmKVsyc3UeEdqhd8uuyLPaTvgkxvMV6e5Kh4yhAk9cSggucX5FTjMPQVHXc7XyQGYomkAYg5VKCi",
  "key28": "61RH6tJiXuq9oAsvvQFJPuhkc2uCm1yvKBsmNz6ozVwZX5bTSqHHBupANxSp17qMvtBJfDK8gpp7NmRrhfQpjXhp",
  "key29": "5ABxoRQQvVMBgjHVXAVPcaDUhswt6zyt6x15h9NHpv3uD7vEHqrLb6u82177ntcyc9VyT45D6f9Khj83cSBNXu2G",
  "key30": "3n3W7SdCbMiq2QKraZfvpZwoX7bgnK8oRU2NTbMyi9Xi6DS5dc5duPHgdzjx5TZbZNC9wr9Pu5kQkrNWGV2yU61P",
  "key31": "YM6cHPh3N6jXv5s3oTEBNcXCSowgxfmz8igoamvMjyaoZycSWbEz95xFPY3sJD3r72VBMoPG13uRUzg7u5v3oc3",
  "key32": "4NWMcYyVEfSpV8mjASWWzqxEdZdj52vYJm5b3mQ4E9DischduMFBVG2tCM4Mq7SGhvriBHMLVqTWWSA7zQVU9pCc",
  "key33": "52MG3r8QjoiBCrjNGUkRy5MpzFrtcs2My8aabBpyZCQuUwdvg4BEJRTeYnExjXX6AVEhMC3mXjqMtn7XtXRHzqxy",
  "key34": "614Gfwos8PGQrnVBkMhdbQjz7FubVrHcCcpxmURnYKBKkZd9T4fAEYvNVCpRGUycbX9UuY3qfMnEs2cVmUJ6gS9b",
  "key35": "5jCCsFP8h6aG4fKTremX7nLUzZ1GHwNKXxaqbEGeqbXwtcWEzhhFA7wnsf5nSNkC27LjTD4PKmfesYnexH77nEuw",
  "key36": "hY9omtW9jJvBDPkgFGiPwBJg3J9G7sZmhvRq94NqJYwNCnYYtpAR1fnM4c3XfZe1cLwwaPCFsekK2WTwph4aG4Q",
  "key37": "2PYkLGRqJ36Pi8X2zQvpKZcYFnbNLi6HAzrgPQCmiB6qRrS7fm16EHUzboi5xUt3rmaiUMSnyELAsTHrgmX8zEvt",
  "key38": "33zmjkR3cf5ik5wZoj2wXrbfwn5y4ASbz8nkGeE46DvFe4NXM8LW7xsrDPRQ9iKfMKisunk9x3yR9s6vT4NopUpr",
  "key39": "aMoWhDDjSumfDnXCSwZv7mjkSaEJeSwKAEtobgTFYp8BWo9ohuh2by2s2FBHXVBzf3VyTk3TuUKX1XXpNdJRe4x",
  "key40": "54ftE74ofESEFhuYMAZ1kxxZRosDiBz8Ln4Dwu233Y9euvNh3XbQLfsav3Y2scMLKB5qXamGt6koae5KcWvb37P5"
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
