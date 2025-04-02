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
    "5Xy1aNjnkAXqrSGQ2Un1uSVrhz3WMMgL7w9Gfa4EQDkFRwaXvdC5NaKKnhfNM3WzBU5eT5Rc9GaaQ2bMo6icBJoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21dY63NYDp6GRaSs1QHDKVp8YwUNEg13Tnq7pPrEwPDnu1excEUJifFFfsjroWUdD6JxA1jKisaZK4QrGe4a1hQf",
  "key1": "4GFhyHzxAQcGQ6oMzUxWF7DwCBPVXy1S8jsHLyScoWMbszptqqyMLMRE2a9ewJubMSd9XAgY8kbEa8ERbgATwSfy",
  "key2": "3wmvapGTqWUTLNq2HpzCJ7aYtTDKgJpPtHHy2gQV9T38YXbJBRi9pwwMD5MpscWMSPZwYMagW1WFWR666J9hcgD3",
  "key3": "32xWDgbjodwvj2wtbZi5tjBn68Rk8j4aEEzzAg7WGG6KrjtkkDRtDezLEWQKFNbXPeo5GwMtnkp2zZGXf1dEZpt7",
  "key4": "5w96QegdSuWGHo1itgXy6fyrLhkW7FnR9KwgwWGVB3rE245qQPxYMMr9JCmSLAvrLkLNFAsyrVjXx7B5mF84bxJq",
  "key5": "3s35RN3mqMLr8cTdoUGgLvQRt1yPzAp19uMVK4KDc3FudZ8nGiWbyvkdFgArZv9V56bt6cEWudiyzoxAZUKu8q6i",
  "key6": "ctEbSQrFRUsmETjGkNXmA1RJ9UDAtriNG85MjPPLuqvcUagq7jBj1vM1b2uV4iTYUfW265RhA8jknG9zvEAbqon",
  "key7": "5GEGaR3U6F1F55aNi552LU4H8ZGNFqUGNvAFieth65PbgT4GXoJpg3ekUESx4HdgoX1r7bvoezgjRBAAHtqztgsF",
  "key8": "31eT19qtDSFz6iyjibUhYi6poCqp2yPkvcNsmzchFreLkyS1XnPr2NkJgh9thKpgwWYJi7EpAgtLh6WAtG96jRdB",
  "key9": "2Z6wbnDkwYzmhbK4EswZNaLiQKt1pG6uaRMAQUTJGYhmS1DgzX6y8P9oCu8trhzL7HFrBsXLJu22PDiEdpRY5pTf",
  "key10": "378mYDgPvdegstFoHn4EMuA7mU7Ep1witXXrv3BN6TixNufW9C7WZekmYe39gV1YqKr9MxBdMmfDoCd46eDSyJtJ",
  "key11": "2rDjKYvMu8vpwjfX45vApRanRN1DSixrgjjBRqNQeqishBFsd21xZSeDyfGBF5ARG7yRSVS2yyaEcDQfZ7Nhub6X",
  "key12": "hcAsKD1BosbMtgBCHJkdMxDkyGW2vMdkwXUtRwd4E6VVw9vxWR8q7Ts5VvVv1J1ViYz8DGDcJFdwNkwrWj9jX2c",
  "key13": "2zH9EkVDaXYRkVjozf86C6Li82vY1n3RzqoUaf4T3hpbMqxoqtNrXNbs6K5oVXfreiZQGdRa7XfxzCF5oemwEemS",
  "key14": "kBQL2snpyDKn5yutxh4xD34uDGfTAX7g1DP6jWwAGGHcdxweTEucXfXRqsMPHriN6AjdBDMKqPKVC9Ue5fvgxiM",
  "key15": "AAG6LCCndtk7weqtoDZnp9L6qVvUh1RrKzC1Xg2a7vGaZktrB99hbPXnroJ8XUsR2PjabAWyUk7jzB8niEKXurS",
  "key16": "2hqHMxqLt2txEasU21SdURZctGj57VptuwP3JQzsENGD7UGPH41DDmhecL4vX5rRu2Q6S2N4LLBzeW5i8ix1rY8m",
  "key17": "2D4XzzjEK9kyiu1RqPEPuc12Tmt5Ba8GieK935hunmMHTxnJq4StJuWFdU7idu75u2L8fj4QkRtnVqiKEppPJYkQ",
  "key18": "2WjyxDD24EiYoNSLFvLYJznz8XevtFik4kZ1gcFgJiqR5DiJ71yJpAXXe82cw7dM6K2KyVdMG4Ngh53GSVADZLKm",
  "key19": "567MxTpQ6mKkvwiBusJ4Jtz9tJ43xBijJSwRqjQp1K5ccU3VaUxaQgdcSnhDeN6V1LR4rGFC9zGoUqk2ubWkvdgS",
  "key20": "2SnELHLUWoXC5jsMiWc37oi7rDENHREDpLwuXgaauNEKBznL1yxafypmWjVEBg8k2mcpWwEH1zue93imAhf7xPS6",
  "key21": "5XyRoDHxPUBuU3ZNMJ7gE6nhjb6Uz9JQPPPr2Q983cmit56LtYAdZ4KBkmMesBY1UNep6S3R4Ffjihbv35577CRN",
  "key22": "2FP1tWzNAgY9w1FtBHQ3vUxLGodigV3eGjkK7tNA4SnKR8V8ekTYDj7Rf3aoTpZyuQHDL9mW7Pve61btqRjx73S9",
  "key23": "65HXyR6JhrFfTskkmN8ArUNhwxefPeaP2bZVmAz3QHcucPaYVXw93ur6MZFCkxsc9LBY3EuzkotPvxYSZNoB8zeb",
  "key24": "dV9MaGJXJutZB6KMX6x8oq6ta9DwgG5VnumDZgWUKYHncV1q1NYeXAgXV6hvpimJExY8MjUoQYkctYReQSuXcie",
  "key25": "2TPxa29URnESpvyxbQrSTCXoZNZ5C5pzAqyrrkTGP8GS6V8YmvGR3FgvRKCrEeGjahgM3YR3LyPkYjomi9po1MvY",
  "key26": "4BxGfytghfFZAyvitJP3V799hGPudFXPJgfwUqDjDsZbUAyMVPs2yn4Wk43VA7ReZ76fsmFppWn63J6vSMwACejD",
  "key27": "2gwPKsUMA6zfcHwxNTY9KGgMejZSpngKwgsHnx1dp5MWTvQ91tCjhsXHbLCwi5rEKc4hB9FgYHpav7hkqV9HwLXc",
  "key28": "4WDvrDHj8qB668RTpAvrXrfzFnq51R8E1yDjSa7VomCx1jmCXmcpWZzzfC3sE219k9wuqcqYS6hXh88Qx49ScWxY",
  "key29": "2gsGFVyuRvCB45EyNEb7YuqSASHmnh33Cre6cTiRi4XCdhSnqZJx22LWAA1e8scxjXWGEw6qALR5HpBCSKUSkfjH",
  "key30": "5ksqj475A8FpYmi4GDBezWSFYSCEuYskeq1JZtjJG4xCia27B5pfTVj2EwXf6ZC9FCnte3ke8uvhS5591m9vHXPC",
  "key31": "5RpjXcpV1uFyz9P5ToTydkHR86HwYQgAjXuEXrKhJ3Qvbn5KhmgiG98wEh4VKSJ2eVd5pK8uuS7J5Anse2swBd6Q",
  "key32": "2DyUv1URMgx3thN7Jpx9ysGY22d4GZgon3jWdwnhKz6CXjyYrNHTjYizEmVCwdt1mz14NtRUn5eu2aoAnnccfGwC",
  "key33": "49dtDmsYYFiKQ2FJndtpzDPurSPDPkG7S5usohxW1DPmQJVpbSQ8NGCDr4kYwnSRioz1SgQj4f4MxJPHEinqJZsu",
  "key34": "5Q27dV9Z9EifisiD6Mwv8xTz6rLvDfhQn4ELJNBbCqZfjEUkN39LYrhfJzNqapjVffBDKWNNetEWDY9couKCEk4a",
  "key35": "5D2cVhrkqXpVRF4sbFQXZJ6DaJiqnxxswRQbh8Mxzd2w8FCakbpjphLYpd8bhB4saaDuicf4aLKnuzLGBCFDiAQp",
  "key36": "2c76qbAA6ZcsWzUjx1cq9nGJxLSumD3WVu7gdG75T6goj6uiaUKBjXBRFQ3rbaYVFGiFLCfJ1s9w1HRkqCxPdsxg",
  "key37": "3tRUaiD7S4xCC2R5RYxUiFY4TGJjpEP6GJvVcXtZdS6r5Y3VAEUZ8LBNyGgEDaNQHRcb1xgfnHTNdDEqbwTvh8Jg",
  "key38": "M6PD6AX6CqhdY9bYVhut6tLoAqxKvkEt56kyatBGC9vnX9Tdp4qGfPFbzuhvbtzyGjPKVhXLwGZEQt7FXKm1ec6",
  "key39": "33S7o3RU2E5EkCBayz1Y4M1aUtFivuqAtwcvYPr7nxsYyAXYTtp7K3YGAo6hS9WeuN6aCzNShZwHbJZv5YJt6JpP",
  "key40": "2DTRVQFXXVUvUwsFUxf7KvtzwZNM2Zjg5M6p27GNZrPTGaqiuRPiHcnqM14LDeAiLGLhBYW1Aco99KVeouQTuZ8o",
  "key41": "7UrMoLaud9B1UqyrkS5c6DdHsKFxVJSuJh9N5gM1N2fJ7DGTnruXD3Zzf1XWiEuprDGXvQU586yPLGRXiMHa3Pw",
  "key42": "3d8imwGYqwLHx7wuLmxnZitzNHn8jn5znAYuuu8JpovbC2FVUhY4ivfsSgFACKHNYG7isqZSiMkzxDAuyv1BBwMD",
  "key43": "QXwPZxDPuCBraxxT8oD7EAKUD5q5iiMGnJVvjYdorvvEB7x9z9in4mQHS3FeV6i9Yo89hPR93uhkz7QzjRBP4WW",
  "key44": "qdpAhTGC6Nk8DsSmsSZxr2EPrqizGiHUP3xbjygYWokwmtyuUerdHKgCEPEk4k4RVWgV2ev4QC1jyQWPLcTBAVZ",
  "key45": "4WsEYMbv8xtqqwDbGU5NVQtqPXpAKBaR2oNtyPwnhwTVcpnjsaxGH3UpkCiV4v61LaH26FmBiYtEfTe1PpTwb5CK",
  "key46": "2AV6v6aTUu6k2ssBf3D7wxLvE2syukvvgd3ZnviujkNQhkCEdt2VztWTjZHzDkr4Ndja5Y39tLpSpVuLC4ZkGCHz",
  "key47": "25fZYf2Bo99NdwjLvjrx2XzR6CbuYtDwJTZsNPjGcTALBBY9Beonui8bkTApvNon7A4yDn1pAVd5CBYge6eke6GW"
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
