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
    "3KP55uqf6LHNoduocVUSRZ584Fh5QUa6gisFhUTEomfXJohzDTRTA8sika4oAHUmmMGJnaWYoMWYp8SiUo2onYFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h7MQX3p5tAF1Ceq712ywf21Tc8pZVQdAjbDFAnZJt46zqN6Xyd1VxE1RksUy55wXCJtxzLBBhF349gAhwb4SmRP",
  "key1": "31G6vTGTCSGRtGBQTAT4Hkr422dk6Y56dS5uf1c42rNM75qmXtKpkNDYekBmjsScRAcVRkS7pFXupTHtpMhWT8mV",
  "key2": "C6NByYBqhgJAiX292RBYM8kZssHfpVDcgkaHz37E14V4H3AxPmMhrAFwY3PnjCHKrg1c5CfpgqC2LLkv2t1m8Jo",
  "key3": "61WM41bMx84y9JG85cKXJinVPqEhN3axJDk9RbVCersBWEuUFXTqdeMhYk8m6Brs9GCLTvtbyehA4Q4hdmzaaiAF",
  "key4": "ao1P5qEJrnoFDN6u2tok3unpjNRkdQ2vofvEbnTE9Wcvkw8mYJGuZv52JAWaKFP8dJFzrRDVpsfM1bfgtQwAjye",
  "key5": "57wfB6nRfRNuma5FP4LAP1dcFad3jL2EjwBkbPWgLPf15Hkp5w2v6LxYKuUZ3ob9vkiQ7YQoGs4DSdsCnSZJW6vi",
  "key6": "61wUY4T2boZnpbnEZp5Hd2sKKUune6q9yJiBNczaQDyH8yYsgMbTMsDgb7BLYPPx3wiJ3cv14zX1cx2yDjQEaMKi",
  "key7": "2bDLiy8deGsvA9MwtaLojVTdmZJ1nKh7QUrdUpkHtfzSEWapjomvDkmzkyLzuZEqFunsBTcUNVuc8xzfUj8zsarN",
  "key8": "2LwfYR5dAtKvw4ZUxaXvB9hECdSrbrobo3Kx7iztCd1sEkgqpKGjqNAHmF7bqv9mJLKnnYGkmwMYCfLtZg9rNGiL",
  "key9": "5xiKAXKa2Qu6fLxkkkbysRVPtiadReG4fZ5R6KfjNsk6amtzsCGwDMrtYHWEBZvPU3ixNKzaNSacJdckn3BCtmQw",
  "key10": "3Lw3nVYF8enuCW3SYqwnChob8BMvV8gi1yz8Lpi6wjyqYwGqisHhP4zrK74NRkYzL8yxqxqBAvdqRSF2RqfSfybu",
  "key11": "3K5JpQNpJFxMchu9tpQMjADCeg5gXpvF12YpZWbPiG4dZpHfgtsD6Z2VBtFxD8t6SoWLzEpLjoHgqaZMNAE5yA8n",
  "key12": "4iMZsxKpWcHvHZQQT4Hdx8r8jd7QnSpjjDyRGs28BjX5tQBFgmooR1cvdUmCrSRn7nQSsJUnb32cZZJeSiWsADRH",
  "key13": "2K979muAxeeEKzFuNZXJ9TUa1GZumBbwZ9mSYjnm17NHmWiwsWJDZM1akcXvbeshRryZUy6feBjwio2p9bgcPUAv",
  "key14": "2RcbqPcpimZ6BF4fAXyK2yULVLWo3G7UmfSst5vdHh42BpoY4Cvg4LZBvpnfgMSPErWsLYXnJj7fRbswvR8B1QPs",
  "key15": "VF8tYVNkGgFsVWruAFLAyrZHS3xqgWc3jZHkiRJETJ4yvtMcCx6EvD4efLqx92sEHMiuFN1q4pU41eaHN7bQ7t8",
  "key16": "5su9iAt9yw7QGaGZVX8W6WHMrcLgQhUkmgCXLysCKUNmTveu2U2vr68Hr1JqCoKuLTLYLf5zDB1vudVs12VT8jXX",
  "key17": "4okMxSATY7Y8TmPovcip2vYSAh1J3e9ovWTCwsPF6DxUqKdjxeyeP7eDrEHaChhnp9YxRavg74jajcxHSKxsbMid",
  "key18": "sfM4KGX5k3QQxwZPG4Qap5Py4fJshPwy35znRZH3aghiieJpgwCjCdRfEV8yKTvZRGPw32uuri88jgMyxoMHD9z",
  "key19": "5XaC8qBTrNkWPjBok5xQRk3fhqBTVwfR5h1Tq4eCJHPTUJ3mo97YBStm9W4oi6cJqZX8m7jbMbtciizpV112MbK7",
  "key20": "2rgscj6GGuHXZK3LACkPDx139MBopZLyLiURfVhWfd9hj7wyTLkkM31Yc8XhVLnkALq1aK6gxeRoMsyyAL8J6iJe",
  "key21": "iqpD19N5ZGmKVWjbEtFavCiDhxqqDbr6fL6vcL4Z7MoR5yTyBwThj1pjRWorLd1grSFguYMC3LYksC5G488fHfJ",
  "key22": "3ztvm2LojPgRdUWzGfrwQbefcjg4TLSgd5kp7sQCkeXJjDT7pCzoDZsBqztLJU2QH2jwoF149cs5baaRMD9csEjP",
  "key23": "2cXFHM9GDUeD8VPH3Cc8EtcMPiD5sgUrXgZU7hLpXZSwoQEy7DQhHhmNLnxke2gBuyAprSGcd2M5SUPQ4YVSXKrF",
  "key24": "25gFVxNckEcTvCUbizEw7Ya7MWB2Esg4B1pGSRwzXwC4RzLs5u2WNbruH5ugpP7NqUmMxKnSB2TroLLuBhNpdwqQ",
  "key25": "5pyxuuAaShpCMdktfPA4jZuYbGhH5NQtQiU31BC8HuPfsR5TQW7qWLiiEUU6Db7LihMHtEuq8ApSK1ho2Xk9pouw",
  "key26": "3DqoGC5D3ayugi9qXwibZCQzwfqYXUMPGYCV7jppGEyYu5b5Zj5Lwo9EtTF1ETBoT6poMaxALrqhohqWyCX3S9jj",
  "key27": "5UPi2892ADcXoZBDXb8n7te6E6oXW4eqPZtxAyoCrxaUfztpJKhMWFL7r4Y5RBzACvzwLrjXpxjV3eyHGDMXhhvw",
  "key28": "3F2NtBCtTmyC4VbVu53ZP5SwmGJY3VdyiadzQRqc4Uf9BhAiT2qzS1SXpPnbS8X5ZBUmGu89fN8mdh4mM8JxXU24",
  "key29": "2szZB9ofCScXDByrqrdzCEhrHb5vB7RQPmDd5hYny1LuWSqkWcFJMnFFdGhd5nCciQkVxQ6w6AxCmZJ5LLbxzheS",
  "key30": "5UJaaPm7Jyj6NTPsbPB2C28SC7cucfTueDrUZL8PuKKqUVehY5fLv3iV7me7o8xiWZ4fsQS5ni1xktA6tu8u6Zu",
  "key31": "3v9X4GxSZ62KnSbCWkwqmxNux5RgWdrETrH7zioHzMCi4Sr4prQXQZVdneyNWaM61wS23mucyHMyuMgAn4zMLry2",
  "key32": "rW5Wa37ZzVhVpTj3s9qg2SKbDp1mA6pPwcC1qRujisi6TT4pVph7rGR7FSUsvje9DRuekuqJ21B3zzgCSABfHFn",
  "key33": "3jA9JpGpedBAeUdhfbQLYRyrMQxS8nZkCKwo83a6KWbi8FAMrJhLyqB5EepvEsxtkWVeVzX6knbz1eyhHnzJJudd"
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
