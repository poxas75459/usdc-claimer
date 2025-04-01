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
    "TwTnSzaxiF7sNmPCJ2LhswZatBKynJNfntv4N8L3miEtAChoC3xciHeYUoootMLHDQ6X2p4vUBLx2nfqSe7CDoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33cjCKcLHH8Ze3v441aHEr5yv8bJejM8VnDfqwz4KaCVTipiZ39cCLfN1JR8fThs9zsXCR47n1xoVYsVoBi34A4i",
  "key1": "25tDbSrrdgTGoDuDuRAn3xCXztzCvXKGYgxR8gbPP4vXQ1F9Uhnppxufq3qK5KwnyPnXcvx7JEfASZPKNGLJ1j1V",
  "key2": "2z9mwJ3PVRituSmyWdzSezARFpNVvLcPEz5xUJHx12Ak72NYhdBtY8JPB6mCagBgp3z8Vzws7jyhGLpRxR9qwku6",
  "key3": "5HLFVV3YEJUVZS1GFzz7eeifmbaVh1RZE2crgMEmNdFqpCTDMkqg8LzohodYRxapip12VjfzZ7grPzoPvAnWLTWe",
  "key4": "44TxzaMkmHJ6GZpZSKMXKqPHihXia2QUotjVTjhaRQaUpSHbv9fRLMkjjF4zWeutSJ2ZiwRL59JK6V1rPQtz6MiK",
  "key5": "5na1sAZcbisk6vyqtYvCgmEefSeCk8LS3KJPsnSCwEYNuRf54nnHyizGvyovPQgUt5Nv5vhcmpK1ox6jj4euFjoE",
  "key6": "4ePR3GqSFxvHoNSwnNprdqP9ik9AYVxLPq2p1wBxtrYtm61kC73phKgzZJvNvuftxMnKZL82mgNn6XJ9v15uB1Qt",
  "key7": "YCUNb5FP75UmbDtScGStFQ9DFeqUwyAwgaJN9bmrfvUgStpBQU1AajAjLqQT6dt3PBuDiio75ZoVrAsswDbWYxj",
  "key8": "4XwGoPbLeUsKnLiPDJjyhM17upH4Vov1bCAD3GB7tVgKjzFsJ1XaYVBwJSSzbp75nmZoAVPWuuLQ4DmUgGJDrmDB",
  "key9": "1XiYfKTwcbw7idbvMD5uVFGdAAMrrchJCsY1UM3xtD2LbQwwaw3vF94L7mRcgos4c5P2ddKRhdkbazTT4tdbE1h",
  "key10": "5ZU3evEAYsfLt9wY6My9aE8dyEL4u7WjdnQxdigfLcy77s5u7oSwgxWP689Jw2gja97tUXiN6zgyX5f6bVVNcTiU",
  "key11": "4YuMpgpkoBZuPgZG4JVKLhxzmzhEvVt2cLzapvptZUHbLe7vEKkmQqvZF4trAWv1ZAQikLyxotzUFqvauVcjkzAy",
  "key12": "tSvyWdTneGSRzPxPgLdqR5MnR8nHDmRq69C3rjp2PFPS56uWNc3Kzkv4Gu399T8dxn9RQYtC6oUzmBzuqvZapmf",
  "key13": "js9d2tfrRnH1YG9Yk93rdRBbx67RcUXJEFYaYzv33nQgwW4vzTmPpavzq1oKb1rBJ9agk4XCadE7JKBguCWE1gN",
  "key14": "XWGnYwRYoQh9H1rFWew5CpRmNR9PHZodb9jGKwAudH9ZQamLSpZZQ38jbYvRut6kEEXwLLgfHP957UAYFh267FG",
  "key15": "4wpKtujwkZs8KQN3GrahPfAn8YJogM4VF5K8jgjtRUhxLqdHNiNUMsrPBfVE9qAnt7GmkaFUsTGnDXzCA9ztLjoz",
  "key16": "5mz8PEoyR5PxjMxNtdgrE7rJQun9nwi6tS91UpDgqonR69yJWEUrPrK5mJ2iuSNYhccZY4RzZjjU7BJfNd5vE5mB",
  "key17": "2KMyZLrUewkCWPzSTysJ4uomezBawa7YNYakKcbsctiycRmFthz3ZD8t7YMmrYZ5G7GzJwx1hLfNMB2KzcPSjeJn",
  "key18": "3QDQfTTwfnzdfnApqSNvV2VWduiSExanoha9U3kgXAhwCN2kJqo8frEfAWrt1ciEn1E8kqCoDgkQ5v3vrHBgQ3ZQ",
  "key19": "62zcXdTKT1qsGXyZfQt2YnBZxF5t4uUiWPaY2mnSmuyGwytg2oRAs68HH9gHQMAVAT8KQhAbcdrzJB2zL5e8zWt9",
  "key20": "24K7fggwqG9DQhE966ZohGU47172EcvDqk499FMva1N2at3StjybVkK7RqE9skzMW1g5iGc5mWPjNZcFvnvP8tXw",
  "key21": "EF1cAfNBvRqWSsHNe5poJpkSv6RyvEb9omKjtpe1sZtiq8jVt2KWaB43Qb5s1qZzxiue3uFx9fBkpWo5fMjWf5G",
  "key22": "4Ck3bZGRpYGqPQNbzAYcRPu22MaX22rdMJ3HYjnHmi8imarPMxtHwSEi5ANJme1bGqdE6RkPi3EbqP7b9Lk9QdSN",
  "key23": "7eJV1znB52Ub9Sbk6TjjobpHsb17rjnh8XRyjvHtCdhuALz2FzP5zbJKRDaw9LhXEQQFqc8k6Lcy3W1QseE6oFG",
  "key24": "2XVwmYM9dnphmRGJDcLv2V2Js2xMCiteCWdNFnC4kyW42jXDYsDTAYGtG3QDNLiqLa1mZaYr94mqqzEeMqeEizYA",
  "key25": "4fru2J8j2yrYNmYncnnhoSdXWCR2Go8iiMs8uPwFfAFXtdnjV6oWpsADSEcdaW1yUKT4gfzFog3WZpUe3wqiMEgj",
  "key26": "5WjGtXHvUfC6yNfwn1Ch46RBBnZg8SstPNdisg15jjsymyZg5eVrRtY3hoFN6Yt7Wg2nCnG7UPitxPjxvWF1Xk2A",
  "key27": "54W9Ki79dxPYRHKfVv7kPcgpq6qCZjZP6Yhrg4TPVAJLfAZYEwAgv7U7rk5Dg5ZGFGZQDox5ZYpVPsvkbxAytpko",
  "key28": "3R7xeHtj16GpcMfrSwpoWNBoH7ZXNNHp3CSY1kCx6dNF94dyUmsQhACjiGdzWo5tHxskGP9zMqwhMxysYkWRuiur",
  "key29": "24XTWmnmnGomSNkX71yTpmfiAwr8ZQL7AVNXw3tR4zpMoBvM6Hz3g1hXZYL8zALpF14dAdNQMgoSck2zvwenTS1t",
  "key30": "34NAqokozs2CKTUMSGxSAie3wNd3XkE4MWWvu3q3Xuv7XZw92mN1m2TitwKEcjAqXbMrZfbJVFGRvrxw6LpFuvpZ",
  "key31": "2bQXagh5C5A1PzfnreCFjPL7x3KjbtCM5YyqNQSiuRCWrYXGzrZUmfHhPiHrXiknW68z7CnwqDVcg5MKRHFYmyda",
  "key32": "JPmC9FmAxHTNWgGcm8cTPk3jGKNno6BnpL3kmPCyQjDFE1gHtqr6kXnvtT3VDSn2CfwsKUMcxBjQT5bsHZwbwQr",
  "key33": "5XvZjUqnEJEraPjcdbPKgoronJqEFonRKZiq1KwDRUkAvUsJEMQvkUM6BLpivSaz3PaSzWWsfPeYJeqGTCbYyUyb",
  "key34": "2KuV2h599m1L5PPc4CTFPPDAP4NoPspZb4TksrPacAe2ZJ1eLeTJfTtq8qC64awx8bYzJBdNTXtmPB9vP68r6ufK",
  "key35": "5mVAG2Lk9UuwssrHmzKBGtGVQZPxb6JKsqV6PdGED5L4gin3rwZwhBeVQrcPrCUBkuwBrZxq6PhyvWc3Hk2637WR",
  "key36": "2CxuLHuvJJsndYFLMazdDid6DZBEMKPcthLckAtPQcPQSBMwGhNFCcwMWaZufqQnQ7CLPv6C3cEn2KasW4wxnBzR",
  "key37": "23ZKGbfXahaAriEvhNJw5QhJ9RER3Zzo418v8iaGk7xQx9R5p7pbaWQkQGaEWVJHRcHhqTQ7CwU4B9ReEgKRT5S2",
  "key38": "a6ovcZrzxJqdBa3YEmtbujsirePRtsVaPPSFsbbyy2JGwn3jHtTS3U332XHeucJVt8YcgwYnUTAEJpAzeMy4U21",
  "key39": "De75GnMoMoHwTqoLFDYxrVwD55nTpYQPLGtuBNfk4UGBBrbir6BnGGa4MkjoSMZLu8zzTw47r9Z3hzrV1xY5Wc3",
  "key40": "2i5i5bJi4K3nAw9VqyrCrQWLGetsSHMbpksDdN6838RqA4W5SqP5ECkit5XxNxBC3ifiHP4fjJ6fEewZHXgfHPyV",
  "key41": "2TwDR3thwAYdBP5BoKQgATbtuPRXb7ieHLgcRkcGWFi9aSLJ3ZuBNbkW5sLa8MP7NGihEVpZW2s3Zj1QMyfrrKAi",
  "key42": "24SgrZVW24bUKRfBMobpupBjmC7ALoXHdCCNUd6eUP3dvasxndxeFcqk64YbQ1jBBsFrzv5EhJbcGjaBh3pCZmGx",
  "key43": "2Wq6831bmeweVkajUKrZD6VEqxiAQkqmhTDjQGAAnP9KxHsuLJHHAchBnjbAJb2wqvJk4UexfAVwiq3nTocFEoSC",
  "key44": "4erEkMvmGurc5pmBtaRjZ9KsZNFDPLJSLKewxYsL4VnDtRDJjwUgyrvSaAqeHjAjZEdqnmsFCWyWVE6BGgy8Rq7w"
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
