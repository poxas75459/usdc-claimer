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
    "63KMqb1Shr2AnUxyxjbQV2qw5MaCwQU7jujeSJmmVf2nbzR772GzVMLpVRTAzYVFhwDBRbzwBuC9M2aYkre9SjoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TUePK4YrV1NgiNsjXPsw14a9q8gkNRiB9jG6BdZze68pU7Ye5KA9pD175apB11jZRy54pmJjNNMT6XHknY5AV5m",
  "key1": "447BQdLtNiE1cr5LX3TZ4pkdUUgtGeNhSQ6hFtiFopysDPaFx9yTCvBRd5oXDLwz13xVS88MrcQ19H457PhABaLU",
  "key2": "1t9FPEJAMgtxGTXYuEL4LmES4itMk1w7Pzk4KZW89kUhbxhyzb5gLP5DP4x8UW8az7FWNNVFZmnkfENpZquPJ6g",
  "key3": "dsZ4YfWtju48fRgP2i2bs6g67aR5k6JHk4foGiq3jpP3kJ7JBP373C4faYjKAbJhzMi4E25SzcZghXx1thiunRo",
  "key4": "vM5MqUVct3LkiE3mjpvzHgEmoqniTgC6Z13LnuQykAZBU5PXvocy3pyHYPGCJss7JrLHnWrvKn6fEcQfoVEXqLb",
  "key5": "419jPhbTQJyUSkwpxzscFXT3xJaAJuBTLz5ammxqWRkbnMFD3kw1UHoXzkv5oyd7V3zn66UuDg3RR76GASALAXo7",
  "key6": "3x2JuMkNejUNSQU8Zh25cPsgfPxABHuJwd1rSUpZov8UjFkRR6nECugWE3EmEwK67KeDameVzijF4roqZyA1bSRv",
  "key7": "2F1JDJVhivfNuQKxTFKYTdRheuWXv3quitoTUGi6PoevSKFCrcLn25T16fLiA7gDFUeqreuG3qsZ123V59EyCQk3",
  "key8": "55zubhUpCPh2qRzPVpzLBJhSi2EBjfZcDfNQJt4Z42j7xatiw8JCcJR2tUcVupvgQqoCGvUHxMBoo5aMpgwSeDdn",
  "key9": "3rL9Bpf7sQkjwWBi6SAVtzFxukqueiQM3QHQ7ojsdu8fKXeLVwkNz7sUTGoN923GhyTigDaR8RF6e2fHFgZscSwt",
  "key10": "4LcLTB72CFk7baMr7XtzZ4bteRAqvribdcTMdUhHsVGYnJmDjsa8ciw4YF3ALu6sgRr9UQTLkoCa6E4C3wWSMVpr",
  "key11": "5cKFCXceKTYbGTSVBsJrEN3YoqFhEi1Sb1zWAKCTj91VkGsx8LMjq4kMz3oB6yAHX4SzMhqe8sDWSdE7e1t2iK4Y",
  "key12": "65sB17u8u6X9DWtyBLBTqqn1DHp36ZgAubn7hykKF1YQX2X86MaBnVjsiNtUZSiwLn1EcnLZwhDA5eaDk9ux9Ju3",
  "key13": "3euPp1DZ5a2RkDdU95YmNoNspgmxdxmeMEbRw743xQqtUwzanVmSAQjPx48JgyNC3Y6F1pwq4nSzk4RsWmW735F6",
  "key14": "28wfQgJYP6Ucgmb6Tw3rq4yskon9TdM9e5KmtTUk1BNKB4hWCXPZU6kQX6QSwpcNENA862bYb7xUGGBBJfenWshc",
  "key15": "3vb5bnX6dQ3KM9br6sYuyueGxQsELQkdeUxaL7puh4os4KG2vK1GvUYnjvzUJj4NPyR757SiJuhZC4mgiiUPh53E",
  "key16": "5AQWcy2yR2yttyuKuSMB6Y2gxg1SGpUdnryVVGQTjmRDxyFFmf32uoMKPqcomSsodYjY9K5FMeVNQncyBbDdDxzc",
  "key17": "5g65tXnRCwkgKHiMXS7t6VJstf2ZNVLMRswbCyMBTmHaCn94kYCq9jS6L1WhVsKy2Zu926rVeMP9eTApWTafj2F6",
  "key18": "kCF3jBw6L1qV9gaHjJEHeJbQQvtjvJQrcePUbPJYLEYQUD9pGNpuDRrLg6MFKd9hSRTMdT8Mf9qD3yX5fvwHiWe",
  "key19": "3YMpK3KtcnhTjqH18z4XBzw9Y7Aat4VSG4wY4Knyx7K9ahHx9DSNDk3MbcwKuoQ3BjwV25NuZw5yWqh2AWhCpCv5",
  "key20": "3d4XW7wXruCeQ8CQF9E73UWWpvua5wwUjw88H2wm9zkPfgVC78qrUHsev5vZYzptJUbMTL4BzVZvCeXevxxskBqF",
  "key21": "vdZRmoQqGTrxyUVeWeuJk1BwNXAE3WEkemKEwFXiKcS8EsjC6z6f9S5jRoVyS4hSeFnbLoqFqX1DYWwQGvZBRiv",
  "key22": "5mKobkKW9ZSiBiPjahQV9XFXncyZjr2HrBh24eatPtpFf1hE1nGWWmpQWa1iA5E7Q1xjyyhsEE2RErjqB1E8mzZj",
  "key23": "58ybNoX2PBWrTrko6DBysnTodexDJrxGeCE4tXVBA4Hke4nBCmVg1MmPKTBJkRmEnYm6gYegBKMVX2M46eQ4bFeX",
  "key24": "2No8TbR8NznzWvkuPdSPaZQooPwHcSh7z3pqKBvuRKXsd2rFecUUbxc24fxANnpz6oQYEBH6dRTJRjKnTXYPMepu",
  "key25": "4qg2cDmzPm12SHk5XXWiXRTm5YDiF8kDXBJXQJ5wQDYqPw8Fhve4vGQ64RxyBeQUGhCFzSgv6DYzm59QRacSGVxw",
  "key26": "2za4N2A4aiVB2uykXsW1fSZX4hfbdJccfFmum6jfrGa5jZzhCzMMz5dWrJchhaVyGJEMoePkuQd5f5A9EQruyvCk",
  "key27": "4t5yyP4aZJE5h6jSMJJpTpMmj3CGHziDEUUqXv7WDLVKxF14bqDhSXQmhK76jaHRjPR1m4sSB2mYNohFqxG6Q7dL",
  "key28": "3FXCcCFQE27EdGFVDbuDrTjQpwy7v5BZn6Q62DKJNRZ812nLK6kLpYdzedBDdtoKWa8FXdtzNm4fVnXDMwexPf6U",
  "key29": "4ZssY5pbEqf9qkjXL99PbN472NHjCFxVna2LTzJR3m3qkjqpfW225xGD2HMtmT8DXDEAmWQWXpXeGyAsDjyRRX9n",
  "key30": "HFGq5tU455M6y1u6KWbefERRay4XpgVkvwxPN1ujBoFAzv5FE1DS9VbzL3yBh4kJrxyX2QSyYhCVeGWnjUE65px",
  "key31": "46AadvHEhV82DrDTueaqSjpJfxxvW1PR8EMK9eUCp6KDVXrZZC6kaBTuwVKoaZKTgaQ5ewdxc72WiYFD1jZaxrhn",
  "key32": "5c3ZtMdD8eCQZVqmfpb4gpiVETRRYaQEpTnQP6oCXLoQNMZ9K3gazzbo1myMUdEXX56CQnLpi7vgu2FiyhPxUWPa",
  "key33": "ynXJXkcb74h92EXUrd5doLkLjNNGxna1qiB7CSbnxUoevfPoZ2LNNiFGcUoEyQymeCJuxyZkqo1a5MFS4Qu39Xy",
  "key34": "3FDSMELt5Ufj5ZicW9CPPRbK66Hih79ZYbuAZXozYQqR2wjFjuViVMYEZCiSqUoGmuHtXRpkvVKxS3eotwpXENAX",
  "key35": "5o4LXhUczjoSLcF9B8epX7PwqYZUq416eU7xtbTLJ9RqjWUgUpPfXkXSN3WuLdiTBMarvaePX9Jfxxw3iYjjaoZe",
  "key36": "T6xW6QrFyDfXy6pix9zrDqyR3orZHDT5ofXbHkWSnn7JcM867J5rBfoqd6LH4wRoNSBFhUQ8iLyZEcofK8DKwuZ",
  "key37": "RagDYvd52dZBiPHEUoRKRfDZnd1TPQa9tk488UkBhHw4ybY6r3t7d4pxYSJyBa3HUVCHCzGRLYNUz13sW5v5btP",
  "key38": "3DwyJWC4HuT1tH6DMCz61aZytm2nGr4t7tTRNqpwYceYxvUpRgKw7DDLsXWdfjT2AAXtsAPU1XV3TyP5FdR4atrr",
  "key39": "4RMZYkRApsRMUY9qBUAC1PeBbxPwrvYhkdpTrabeqy2ctWTS3ycTysmuAUDSrEWMYP7WPDChye9VH12xAov6VAfR",
  "key40": "49QEzcZW78exLzDv5bcEsBoLiCUyQpxHVDi1hW1Lmfp95X5xHp6dB8NEkQXPxBNNBNLg7am19GWD8qoe5pabPuSA",
  "key41": "3FTZQrKAikQfRFavmGgUtUFoi5v6hohZmDxtpZtcq6Z6XtE9QYWeWBPAuAThQJnawdTwAdEawA6EUogS9njmCt25",
  "key42": "4XQEMNVdxKeTtov3gtsedFRtuV1zKFbRVk5iSwR9AxzugGsixeWkqTWnHP6jytapFirLWSr6bYU51HoZsA8gdr2d",
  "key43": "3i8bsf8UcLc5H4HarDcQ9Ppikbx9YiAAzzBhKwfhMvrfwofVppkzGhZVNur3BrRxmsLuh3f48LDbmdksdS9zrVAE",
  "key44": "51gVk4ywkhLGxqz4HU17hWia5k9h52hUPwYam1xRfEXHzZG93sNS8TDv6EnPwQZ1M4oymgYK1yBU12SncpFJJuFa",
  "key45": "BKrML5JsxzMouRRmvDbkbReq7wNFXypw96cDCbELYtukc6tgrZxRJ3Y59emyHsDzkCWpEPrtaQBt9BcFkV24FGj",
  "key46": "KBKjyE2vv2CLyNEK8HwyxL5DgxwhTztqnKBCSybjDVWh9e2Sk1dWXnAArxQWqmdUPeH2jERABVZKXx9iJzp33cn",
  "key47": "5LYkiGPRvR7hLfdrnNBvcjhTABqqXZtASPf65osww3qRGDeGD2bVsT49MyiQiBpTsni9nkYZzW8DKPn3WqvrHJAX",
  "key48": "62WVs9Faj9f3tCnyZBZKXcLC4r3rC1BWQk4shpRobiivTWdydVyoZT2HRdmmRvN6D5T42jmCRLuU5vWQmnZQ3ihV",
  "key49": "5MjtUBtWCvG65R5pLGKVCeQhzGdgwdfpcXQNdpC9XfAZrQAhQz3KA1a7g7jaR38hea8LSNwixDKvnrpoigBXpKV1"
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
