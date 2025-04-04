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
    "4PFbftQjxHWy86uNF6CKUcGbewjXPUhoSNmk1gD8Wb51kZnL4KsacEhHnTJ7rQNwPGaAPGo15PGEWjjBKdD7dDfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zd8gnbWdntNTCMiuDEDU53UNEv2d9QC2UkERfHPyvBRCf7kgvxgNFt5uY55tNRoX1oyHADFGPZGCtBXR7rs7xMm",
  "key1": "36oFYqjw1vQTynVo1nLwjdTY6CV1kxhKdfhQToAFUzUo2UwECAQDojDsXbF6Qv6y6JYUmNRFcUmn3SUEb983VRBG",
  "key2": "7E3r28a78CR8uziDqvgbZCyy5BsxKawigbjeRgw1evTxZn5rr2jJ1TM4GjHaLcmb8pZc7xMamnA3qjBP7SkyhN9",
  "key3": "3FurWnFM1F9G8uPdj3a1UWv95xjHPnNHW2YV1LuajYbryST5wG9sSauX713ezT3e52ukxCwjt1VVyeQjdX1HxNJc",
  "key4": "2AqQTDKhwMzDzAx9Q1tDThUW79BMuAcHJq1c3b7ZJRampjbUaW7erAADxWRQ9mgi8ChzMerQ8wR8mR24KFcyx8rK",
  "key5": "57rtkoKXUTXT6SEfRCbLKv6ZSdZitrL33fER6GDJtbLkoCVRBJo8AScnue8xkmpJQ8A18wrbvvF71vhDrRVNUJJ2",
  "key6": "3s97TMyMiz152XN4nWLHRgjPXXq8G9KLC2qNm59KxGA2kWzKH3rzEFsMBarFWtKCeNcUe7Ne4ZSsLoEPyiGBCFVB",
  "key7": "2pq3cMYty17kqunYHxqSaSQTwH1u1WpHRpcZHisSChX5A3rk6JgCgewKC7jWCUZAcy9neDnucnX3GakVnxF9FvCq",
  "key8": "4iFMJykucP7j441vMyXwwr7KxTFTtHXpoqEPhNg1a6xJc8CtE2VLCQhTiFs8srMVy6JLCf8DT4oWcT9i1kHGUdTm",
  "key9": "3X4FKp8MpfDNM6VLYrHF6UB8hfcXEjAPdhcHnrbgRokree4i12FwijZctFyW9tnQ7TFVf5FAjV7vByTfD7nvp9HW",
  "key10": "4smkvFCY49U3q9hYHDoAecedd7JkaE4NQvPXeg7aoUpj3PrAKfwo9gMytRskrmfMpspV56UYw5oyRng7auGXV3PY",
  "key11": "4kuaFzZ36sS7jTrovrLjkCEkBZ9Je2Hq8cuGA2qRmph9Vy6DBfo6zU2yzPNkSzD4hvyiBqLEcJRnJJnu8DzSLvLh",
  "key12": "5NqxdHvUMSN2kiqkvZtRqCkwJrRqkzDEtz1xsRVUNMCWToNjGurw21dRquVikcsX6SE3C2QbbTnJGVfTt7ojAuC4",
  "key13": "2bpDjnVkPJWswKmV5g9Kp9hYc4yDiQ8npEzG5ist2Virj68BqD9b5EaXB7rqk53egWzkhZYjbnviwsp9wcoWdxVx",
  "key14": "5KUFLb3gQobYv2JuRwLuR1ayEdrxFa5Ht4kvbD5WJwxncd6X3finMMANvASGQ3je4FUKsRQ6G3DBS2dQAiefZxL8",
  "key15": "2WawFPEiziHz9wmuP2pQpC1i3mE8DT6vXhTnDcHv92ZFEq8kLXq4YsyPPAVWQEWE6mUDKYBUo7oQbuEW6euQ3sCo",
  "key16": "3kcE36SXkY4PqcgayUWZX7Ue8paPWupwwwyvPXL1KroRL6ophQ6Qcy6d79UCz5rQ3xebVD2f8FK53kpgvq4q1HAY",
  "key17": "4mm2L1LnXRdCJwBi8kzunqkVz2yjWeSLGsgSVNAQ9bG6DEw1HvymACNTrL5MP6zCG6sLrge5VjSempdP1G4ksnLb",
  "key18": "33LWfydR2g3aU9mMkTwZbM2pjxeRV3wk7PQFnyfFMNfEvF7uok9zHTCfY7H4iqRPNBxEnXhET75XLAPEAQc8S8fG",
  "key19": "2mwVqGBoaX7aS3XwAkb47YRTETw9yURcm5XsmLk61jWZYHSmvXNHvdYDEcKp4eQJMkLkrxqhreiakz9msVswwkXF",
  "key20": "5oJf2LLB4YxR2h1QirupA1JzpDTWtxmPCNJ5G8JnJmWs4iLeZncVw65FUP3FwGUDbg7xB1cS4JWndii6Uuopanu2",
  "key21": "3AGvcy33ZjBsZ4WK7fysfE4kL16GCHwW5KwyVjsWreP5mEX6niobRV1GaqJ78Gipcf9b5QHBVA9qNwEBxm4NxYff",
  "key22": "418htGqo9zjuB46mCH9Ec8vmPTbVj9yujZZZiDU8fgdfvB77co7JdaWVVtVUGkduXwvJaDFDCurnGid9wxLm378M",
  "key23": "2XcDM3MybUR3VsuVG669nHrQGCm2qdyBPXcq6hYHgd7rGaQvQiBFBpDwPSxndLdYgjiVfyY6kcgGm4tBRGVyBfXF",
  "key24": "5vEor5f16Avna3uvbTmRmr2RkrcEJLUrnP1v7rtC3Mr86VTkXWcSvWzWHiWsP5HybUepAdzaKbcrzmFWEuA9d3em",
  "key25": "63MZVR4bKwhRtMh7Qf5y62GmMvqFtQsqwcKk2PUQjhtRs8adhVBcDZfiLiCV98YoKSbFXJbpikYXfdcdM45CBrMi",
  "key26": "28yPQkksV8zBGGPf7tkW2kfi5siZGxcsPbKTQ9PE2PUaRG6qSw32K5feFEmkP26L7BK2cF2RjBpgx64QdzNePxYB",
  "key27": "489Myzrj7ptzMBk6H7V6pTA16PDikW6zkFvn2iTuJg9bvj2DiWVWNY2bjyMXcHdXqZ9AHsE6K3Ypr8k7yJa32uyp",
  "key28": "2haAA4CzHPoC7fBMk1FQyKhUnH2iGSvuv1xwh7PW6y7CWaW6eiwRLtA4kJQTz7C9vUsY667qUyAYfin7jBi88KWp",
  "key29": "4o1AXcR6f11UY9JCqiDEfjkm2E2qiHigfUMfHuBmZwsjPsCiZjXg8xb65bwPijZuBKGDZt5nXtJopMYsvjkxXeVz",
  "key30": "27sMkn3xmWzR8MT4csxQ6zrsfEJWbxwuP2FtpeyGuDdUTTFcCu13Tqsx5LrQ42bD4AvqBGvfmPrNuTxJZ7paDyy5",
  "key31": "48hbKfJeoVmrESYSKr81yu9y9KyfKxodzwQty8V4rM4Whgkj1owCH4vPtT4xXdDdeYm71KL8ugAUSmJ6gNMjcDfP",
  "key32": "5FgCTubkqzWnrKK3uHPDu6kJwbTWX4B1hQNHgYTgY2HffrjMwhHxwtJGP6aDgkEXBh7iB85WtqmNqDhLTiVXQrNH",
  "key33": "63HRAk67D5kbjjbR1DAk1gbEDpoKnLHkRE3Y919hFyAiCqLCYQWbTwNToXARaGpavvfeJAWPKqLu4EwUoNCCggec",
  "key34": "2Sy466TH1cPCxsJ5U5jXvNTjEnxkK4wYdGfBqWyoPuFC1XDJtgmHa8K9bA43Xr9MQGvf3KmvGEHvoK6vVqDkJ57M",
  "key35": "2yQ1HoyEEV6b4X8s9DfWXX7pLwNqVE1NFRVYr69jkNyAGPT8AsFz1HeKoHaiD3usdgk7CNhNAaXEtvGa8eojw4oT",
  "key36": "28oFyeMAZuH2q72s8KGFennYXYLqi8wAELbnCFnD2zYCnwQuiUStwQhp2AcbC3FvLDkJHfbA8UgZcXLkTEzQs1Qt",
  "key37": "4GJxanuA4rU9jJ84rJ5ZX9HSkovc8FhDReqp47zd49NjBQJcditu3kBUbJ4sM68Gg7sWixucAXEket9BnEiy57nh",
  "key38": "aBADvAfmRYsp1WsZ5WSFB4bgAZAZk5tfvbnAVBSVoT6MmXNn563JyCxcC98CKLGuCkuU3sN7q1g5RJfRHNuZnTR",
  "key39": "3VSos5UhS6YYdbUne3tWwNZN3eipLSnjyRuDrZZqKRFSz8u8AMir5M3T7JkAa2dipYzecTCjVtFrJyKzxrohm8T1",
  "key40": "5VnvAnnXR7nLanrTS8tjcpq8NHFfXe1arX4QDRjgU5NM1cR6GQXnHvFrGtPDYtQbTXk7q6PTRHok2W989TBChuvB",
  "key41": "5bs6dFMSRcjBHYzA17GRxEsGd8ZsbG2edF2XHBgFbUmZqsMGNtqk1rAQz9nvUVh3ec8tdcHcEgzGcfWacFHLYP4c",
  "key42": "GfVkV9jJxGahN75ePH2hNz1TZi1zfYvmFT7rKuwka5z9bKYfNtCcewqxPDd9qZydfwS2PAkFM9aByp5mfG1QSNH",
  "key43": "2CHwBfsWu6AcGsjFYqpkWgfNHUdnYKnHcidoroR5QucQTc3i6rSZ8h1fzZqEm2jhFLMq2P3Ma7hMLL3316w9E9AY",
  "key44": "5CBYegpSfUofJd25mfsKb7gtSm35VpnRxhiWWh4YD8q4XZ5gHjY6Wm3yvKm2PfHDAS4uUBPWXqyfKcQsLxA8DB8R",
  "key45": "3iVaBMHBxrtSw4WW4GUSktQ7kkHi3hnbAK93zkssMXUXYrBu3d4CAgw5tsH3h9KEGSDq91AfzWYudHFQ4FDc74XN",
  "key46": "3mcRFqob23qVa2bjgnJkanj2Xt51Xi8n6sFXWKq5eA2kjWYpUZ3EjipiVzz3XX93gYEMEZjHvBzg7EvMQc7UyNr8",
  "key47": "5NgmjKgFwde4g1ZGfCFiqofQpZ91bc1zHphFzKed5m99kNpcwFanhSHf8adKje32r4MDuem125Cvd2RQ91JbgmGR",
  "key48": "5FhUDKugUwEpYCy5RekDhhMWpRWqwrwdyeaAbmQrFeesnn6BVvWFN3FFhe45o6wgLy91ScCCuMAT6ziU9FSWsBtR"
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
