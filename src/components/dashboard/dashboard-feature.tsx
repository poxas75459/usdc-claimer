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
    "2BkBe9NCCKtAHB1fouev4dhFz1T3V6o2TsESqtT79uo3rQUv7Nmq4m747So1gn75wbx6Y4EYhpSB1YsQEmAXnaXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66E5v3Txe4ATYR343mZSiKU3zjq9QyFwGWepavcVZiCATNzaHKCdfuBn7PUaRBZ6ic2Duv2ebbZrhJSxvbrvvtCr",
  "key1": "5sXp7zicACgqowHv9CCZMYLGdpdfQejBjhEfbsfdf9idqr5y2175LoqEs1Ufgt6HNkRuR7shf7bgZGKy8rgo37Wv",
  "key2": "4mEqfVAa8FTzWqmim6uUxPncMpyyiQeQn74o1WKhh5vrmbq4DWwFEE9ZM8tdgK6ZomcJ2shRreiPqwH1Sjdugmm2",
  "key3": "4o9PmNTjnXrDth8d1avWDampuRefFaykv6bx5DRAbXfToyEGv9hpvgJJYRzaAcsg6EiCVzXZEb1rnXpMr7XvBTEH",
  "key4": "5jKLky4RXRwcskKroQ4u4dE25zqqvek54UGassqVkVZWj5HtwCTRiTZrvMgwVEjnbohEfh9k4kt4caF56VUffAsh",
  "key5": "469j3qNiSz91RNzMhEYHL6QCKgVRL9Kr6EqKJXG6SG67GPGBvtXx4mc7eA6QDwtmm7skPEwycdfTMZHA2kMjdEkF",
  "key6": "2iKwsGWqeJjcd1d17gNw9uBeQewvczGirGqmDec3s5p6DJ4EeRa9Ht9V5fbsYQSw1dXzy5H3ooe34rPth93Y78ff",
  "key7": "R2aPU6xiQ8cYSQHCEERsVw8XzA6vVFzpeMZBCEJTnL2hy2bjcDzyy7S21fHsWb2LZXEzHKGz7cSvuapiJGxULWi",
  "key8": "tXsD79VpVqTYLHiFZ8iF8g5y4dcW3S6JkpzJ5szsaWbYEsRFzPpxWThR7vSWAgGnjJseHmMFdEhgE8buotB8LpU",
  "key9": "4uo351ygcsSfnzSkXSxKz71GduNN8jbjWFMbPZU2FXmaHBb9911w95q5VwEE3whHk1pL7UFBvcCMeBo6fy9Ew9m8",
  "key10": "2qiWyUq7sSactbcJDMBMNVMnaUHcvx2HkeRtjh9xx5uwsCMgSyKXRdPnFoRqRigATmWvsb1GeiWFS5jnhkcWKW8n",
  "key11": "5Ey5srrn4Z56ofGckaX41Bq6z6hbv53imCKtDYHgVArge7qh977oqH4z3ASsQq3zcuH96yaqESvu7sB7SaYDCWTN",
  "key12": "4xNBStBXmE15mq7eUm2U8S73Vb4z4PcDjkA2f8iYFuitwb3L36oaa9Q5N87b7VQ5CkhzjcBk2M5aeUgmq9CJmPyW",
  "key13": "22QoFUrqwnghLXUTd4haChzFGbBubDLrMRiQ6DRFRakVWWsaWKrnezgF6ydKJtYuV7PjBgsfJUtBLcFoKqobvum9",
  "key14": "2sfsnf4eqmX4Q7ADS6xh3WYSRjBtgwrJGehAfjci3uS1y5BtGGFV2Twt2RCUb42oZPNYHMTsdSysEmukRTmgCygc",
  "key15": "5HBx2zKZXZJEhTSD6UqqbjEDzVWLyGdNqWZEhcgZqXjgFZYSRoA3GG5RiQ3YLALA9fyqx7tTwFJMF4yNLZbbv1fT",
  "key16": "5EF2aEq71iqyhwbGjAwmZebbxo6DF6dDsPeqrNMNVmUXS35reDzBAhXDdWSRaarjAwu9NGj8NF1wiFtP6evvYho4",
  "key17": "4NF6uXBBmxJz5JunBPXq2R6U5bUwfiwmBpkp9WvbNyAxAVDR8zRNWvrPTgjRUidLiAfuuJ9tfn26x17jhdH5Crzy",
  "key18": "5n39yvEiwLZUSWbHyK7ZqPYLkTrbQ8dgffbHKq2a5aUvZWz2p9v53Agw2hkAtHWGqkJdaJsJc9KExhp4qDYiAGGK",
  "key19": "4Dg7JTrTwPwJ3DGE42DqHrkmr69TQVXYrbbKmcHxygD3G2z4f26VVHUPG7rF9B2BgPZMynsKLmxcmG3f38LwgQLv",
  "key20": "Y22mks6rKeMFnYEWXrUqGMrJ4RGAcVFtNm1NQuDewwz1fw7YkbS3GwYnPoiWd8Aek2b2TMw8LJgefyg3uBq2UW6",
  "key21": "EckRywALWRgQmWcVHSVB9aHEF2ggEs2tuRiBvTsf8wT4upWpHyqE9Jf4S1JddwBKGaTAGcdRMhhS2HaygkqRHGG",
  "key22": "3DVAE89LVLw9VReqaxyAoJS1jWe3fDecp2Vty4JRH5dsdAq1PTa3m4eWGJ9dRU5W9vjQ1TYiR7RrwGRiq5EGkw6",
  "key23": "AAYXeFi2yZF8z6tDwYgfGDqh9fmt1RS43qMK6MsWbKveJuQiDrCU2XyQnvwxijRN1CCdWU8oA7Xr1K5S2xgFoBa",
  "key24": "4vx74rraahaXAN3d9CboJaeDpD5QZLcNULD5B1AYLqp4egU6BYfpak3Fcecgp8F19iF31Jxmo2rycenH3Gk7RvyB",
  "key25": "26suZ6dwdA5RmdTWz8XaRCktsRhrsv5k69VbSK2eo57hrvvTTAkBWw4q93sesUi9Rn8Hz1RWJV8rKTQmRovBZ7Qj",
  "key26": "5EBNedbFeVNv2kZJMTU5c6XstgWJg2JuXKe6hzxKFK1dbTVGAJrYjaAixXDF8j2GWYAWB2HGjMvee4EUfiTLrvPU",
  "key27": "2MtXgMfpoZ1ZLkazDz3bQVwaW6y2C5BpPmkuAkg7RK4ZJWY7ZXRx8Nhz5DLLf69uAouiLPupZRpqu2A4hcDLHwUr",
  "key28": "3PgJKrMW4vovM5znhw3sT6jzdp8EbBtQBFeEtVZjG77co2WUzMLkkTY6rxN92gjSwWfBUWGMS8Pq8KF7me9142qE",
  "key29": "2xLj192H2KSW92XU6a6gsES4ruzZwTDNK3NkyFm7Faz3uDBaddo8AZQboi7jJmNZ16kFv1GauL5EJyEKXeRcEqX8",
  "key30": "3NkjWwf5jbVgx3eJyPb8iYTnt7PTqvRjRHUJutHbUJRfNE5e3jLt1rBU8MC2e3pw64yk3n1ehiG81ZUEuS32Q4rg",
  "key31": "3pDThvBDPxVs5ubxvnQQdXqqXiCkayV4gVTCN7k19oY7yHEAFLQtXVivTaaTXHZNLHgpen1qN4f5o8khdznFmiJG",
  "key32": "5Wcy9tYXMc6CsC5coTRnKUMqoJdnn8RTAeZ47o1LwBvsnNobTDocaih8VMUbxdikpgNiBgdJ1vTCkKP1vrxiZfmY",
  "key33": "z5i3zGv4LFyhAkrjn31ZxZGXzpWycyUssqoqaApCE51J31pwY9HeyYEbbbfDUtYjY2U3S6hD6togPmV61tSvKMt",
  "key34": "2sB9nVRUFzBP9HeKxPN5xxhqrXRaNUDKVXukvSCPWBUA9aiAbx9HV9LdzkvVieYEyLBNbNZBqtaXivKUdiGfPPMa",
  "key35": "nWsk76Zg85P8UBHCKfk9Kc8frtVnxTN2BGFE4FUZfL17nuHdNzmTGjpH8fRgwPQw2PENLXbC8Eihp3198s4Eb2J",
  "key36": "3aXTznfZPSLYS9fKAMUYuapShaLtZ9Lh32pSeLW5tji95LTeJ5BWzdhhdEE6S3SzKkKbNzaZwbx8yw788BDLA9dZ",
  "key37": "5RiLZ5hYQo6p86HFWJE2EbtKNNiL23QfQgPz85u2Vd2FmZgLknoRcFHnLnqRQqcwrvm9GHZEcXjwuMx6pGCeTqT4",
  "key38": "57fKtNaQAJ3w4PsuGbSiWW5C68bhZDoqQG9nXegoAZiA66THneihRi1SMYuvGYY9KHesnh9cs1oSm2jK8RRtKQUX",
  "key39": "5rpdAopkyUbnzixWx2WdDPWrMRbcWZjf1W2oTz5LVPLTWmkDYWFza34z5Q1oqn431rnLUp1Ek6NDZwsRuFFp3Wcn",
  "key40": "3SJssVHxb7JAk9t78M7wkJ6j3DRZsKZtYaEfZ2sr1cxvahG7fy1H5FfvngmiP4eDG264goca3iNMeH6NFCEdGxjx",
  "key41": "NK4Ya4UcH2dr9siwA9Vbh9gbjsgcm6iYXTM5shsYM7aPd266Zh8FghZdVuxq3wZ3C7TmPP5Y6VjfxCtGfiiy4YK"
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
