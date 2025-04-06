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
    "31nm7NWm8o2eX7gLYLKRGBc7FhzfMm8cRbQk3ZCECG4gLprbyQHwAZzAtbUEbmM9f5MgrdUE8xAFYDMeegPTgTN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3myNQDEsvYbztP3mKaCLjGD7ofhsPSmkdpxKpf7rQwkLT5c5M3LM5VvhrGjMG1f4VaS36RmPgHNrNTQAcm3dFFtW",
  "key1": "bZ92NeZUY2UgQKqGahc19ZaTm52yKeu5LWcNFZJRAw1cfV8Z8TFTFf7EuNgepdZk91pvw9vU7qhf68cuUzU2Ywg",
  "key2": "HPjM2upXoK1Ge9jfoZPPWs251piAdFQ5G7y4d16SMHXEGVrnK7kKhBfWcUmCnviiUPzkFyxLLxmQpG98RB51xT2",
  "key3": "3yZSNdiZ97bwh3EFTNhkEw2VX2PWczswfLB8a9CyvKH7NMwhqPXBiR4wBYwTihmXystU25iiVJqMNx6k3sHS3nfx",
  "key4": "43wSAX9f1GozNgpykKUY8DEcvtFG8AJJZVb41BPJRRtwYZXKLq2kegRkaTva7f6ikAfWB6TuAR8mWEzGuRbEDb2y",
  "key5": "5m7yGcj5C5YH7CfJa9bkcNLc8gBQp5Lm2kvZ9wL2KVm3CYrJxwKwUMZtBx8wHEv5qBq5Uc5Ay58Ga2QB9TrRr8d9",
  "key6": "2BkiTUeL29AtXFGvosXTwhwCPmdzMEpc8LhnPs8WBam8fDLyftFFBKQTszwp1BiyunTeKtWz8sRWYdPpJAyxRRrh",
  "key7": "62kcD9imDnteW532uWfC86h7xzFNj9y541ThGFFTJzPevP6zS6jVB8BDXCvh5t75HedtrQQjq6YZpCkJcyczsFWX",
  "key8": "4T8FWVdBE55Zx9zqLLnW8QBAWVonu1rBVk2BbcXx3YC7sGw5hb96V59LLNxNnjKzkxRiFvnpduKobPh24t5J9Sc2",
  "key9": "53AWLnQ6vwyx9QLMm1JUACc2PYAe7sn67Yy9wpitnZqSCHm9Xfu6PoffXpmoCT8eNoPpmXtF7BbtLjwZcppuqYN8",
  "key10": "5W42fkeE8crn147zKLgVU1bmxVd378r1YKfvj5UXri1phUsmjdDPFgWUmQhdxpu35PzYAHyWn7rejj8w4TVtVpNX",
  "key11": "64Pad4tp9VkNScLCZWcbma83fjDbvXN8yfGjSHbbeVdvQhX8fMChpUDeYH3yrhmKA1KYzdPskSkQnFNG5H9gzs5F",
  "key12": "1tftEgrQXfSmEnNSrooxeRZ6EUyzmDRwRjAExCPXRu6BXxpsrdtNyAmkct4zE8haWC5jBnipsMPJTpjHFvzTfYU",
  "key13": "2d6jwWg8EMND8QW1t9oXwQ2ZDNiAdaApm2omgtjBaKiP2Y9sgGKoeCYyEsLx5HULUDBip9gizMnPggCXVkEwD25F",
  "key14": "3azXNTCeQGePsz3JaSAed4TEKgQRF1V8yX8gae7qntqAjyoNrCQja5QDgoEnGmo7NNbyeeGZUpBeeTP7nUb54V6i",
  "key15": "KEztQtdRzGvNAr65xEa1MXwX4TqhFiiRaYknAEZydBvHPogW4j2HghcxnKSg34eqPpCNWRQriLkiVZGEyW55Tss",
  "key16": "r4CXgVT2ArjrdXFfkkuHCrGuEH1fvbayPGeFHi9zcPHBre3Q2ewgk3FDSDjJbJfdxhwFGyMR82NiAugeFnXM6Fg",
  "key17": "649iTpguvA1rg6ucJgFWHoTpeDMG1A2cq3vS2a6N93CoZyKj4PW12rgC1Ls7vK8myTfaaaJw66d4uM3UrSSgCRmB",
  "key18": "TZsSFu9PMs8BuPragnuho24WwQYtfhvvxBBbu2dRmRrJkec2R9mGcaL23KeU8XEHe5ucpcDDpptZSuD5SL8VxKw",
  "key19": "3vhafeZqsTzAuT88zauHrtYQMQ4JhViB14zfjH7wpkSRQobwM6ee2NYbRNDkX5MgnVTT7ktkgu5vtmppUcBnKZZU",
  "key20": "5kL93tkAtNhYv9RCVdqRmcyZCSgkk5BK6VCUw9F833aezSpKVcUKDqgEZ2qcrHJVA6nK8m9QWyCs5BQkoDKvsQRt",
  "key21": "VVh3bkBbPM6c3BmV7v7e1fPQT3H8bGjcUYW8DaiQ2qkzauvZU3Ahb5shTW81zbneesyt8fjFQ46Ev3iu1Jd5yn9",
  "key22": "2QfcBQktXYqek8jgbJQAjwVw6Qq8JPQo6rSitPVpPMe2ujc4q4e29UwKr3ww1boEtNYHmRpVYLZGGeUxGAS7HBFE",
  "key23": "4FtwpFdc3Dr8qAScP9i6we1P4oxu4WNJnmswS8gH57go4B6MREVN3dsWK7sn89Zo5csCG75suYjKZ1LsZ7jBQX3r",
  "key24": "5hSL3J2tz7btbuBTxRnsHr24JfQUydhSp1476jhnXK5Y5HukjAWcGsSWLPoA1ZTW4xTjYMjhQ9wqxFiTGyC4pLgj",
  "key25": "2QLmAFB5QNbj2dtqtNFWBpgD3uvc7iqFt2LyHC7PHWQY7TxfyuTWATJ7nweS93xmEMMDX2HtSvg71tJPWpNGcf6J",
  "key26": "4mh33GZKXc18s5uBkShtYBuWFQvcvMjoKScLah1anctYYSGGbTvoKdbM19X1WXGWgyjkMUa9waKJRDNSKMF2D3pj",
  "key27": "2Ebic4hpSj2bLf4iqKgQGopHeKCnmSwycR31mUjfWngmCJtsukPQpKycDGDKRpiHs18mdu2cyhH7dQvgd7JBVJ7b",
  "key28": "4LpbABhSNfDKNFKvKYXYktWzaxCriiV4CrAy7UVeLnuVMhkntGFEvscxK2UXXnsmcgeA1HaoFVwYrtMmsKYvMJH3",
  "key29": "64Z2on7BqG1Ho2ogHs9eNkRM5iuaEe9Qu3ss3hULFNpvr6bBLA98ciMdeu6HNTzUVXYoprvqG6x59Q4BZsCaiH5r",
  "key30": "29XF5AycPWggGf2CzbAS6tzHjjkniPb7YDfGNZxvctmvxeVNc7SbWJcbbWbrBWrAdQpAJhoaEbniGcWRfxrQ9woW",
  "key31": "3SyMjc564L5uMLVJ6uQV8V3J9hFBkfjSvSqUNkwZLGH9uTMnbgmn6AArDDLqrbDxgNJVpMRJVHDwsD4RKgqGYPbx",
  "key32": "2Y4ePCtjcEF2Nj3DQkmC1oUda4BQF7VLyZN4PKojUns1eAaof1Myb3bmeDGhQqo3zuRZw86xQHUBEydz9a7B2fPL",
  "key33": "3mhkWxdm93a5j2fWe3UcPAr1qQ9nRwFuLTuh9LyZ8sjrqYwfNNfferipPcLovdrNkyfxmTSmn7aiafVPonYVuAgh",
  "key34": "4eH6csKrAMh2sVJVQ2sCuRqXKa3DJSQmLpKARekutaaKvJKFHbTSoXUVAEv8giYTXbrr9PchVp78HNnh6qiQzeHb",
  "key35": "3FJ7S1iSPpNWbofPDV7kWZtfrei65q1MW2oe1HApfjPZNxxXBrSCyJpyo5GrozGwJbbKgEaz3kJ8NHJrFb7N8wit",
  "key36": "2xrEBKdd3J3E1ozNs1D84jSxBx8DbKbvZZTJEJgQMeqGBspTQWKCXeMycdUyZYQfKuY9i1dwpWmRqiPWtzQgRGvi",
  "key37": "2pRL7mBDW9oogzhQ5ZBn4VFnymqrWm5eeD6c2LoUhDM4Emz74cr8TrvqD6bhZsdSdBedAodZRR93ard8QaGg4YB6",
  "key38": "5gsWi7JUyXbYUqUdKEdGTJH3Mf13syFkjJitbxzXoQoGnyTDW72V5Q6MAu4RqJ1KpMMVJYkZxg7yjgZK1a4XLLfZ",
  "key39": "sQCKqdx4ts4D7mnDWNn4eCqeCsBVPXbRPZqeLuaeWVwJzzPmT9PT2YkzLX92UFHxNi28EmpmmYvAqcPUW78hkZC",
  "key40": "52829EjeeRmBkiuTS5VH3w6vhGkc27LAkTV6E6qB8FHKkwvgkf6jdRQTcgC8AdPJWTQvGM6T5BkH1DgNjijrvoWp"
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
