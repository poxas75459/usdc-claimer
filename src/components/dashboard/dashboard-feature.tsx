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
    "5BrpmAjVMbbPFZhxnFYQjXGj1TBBsaHAyXvxhuaVw9kFFKq9rNsFaLQ7LDbn21CPTvwakabBHxbuF6FwK62dTARn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kt4HTuihQhVxYz8PymxMr67HpbJSwaGQXoijSCLxDzvTMgZL5QqkVCcnGq9m3XZgEscDYGENGwS6q3d841BEYU4",
  "key1": "BRWfyFdQwpERutoPg1kNjRR24v8xW5As8WmFYGgi2CXiACSREzH38uVpw8tGNNtG9GNXwHD2nRbL3zR9zbAvsvn",
  "key2": "3M9Ma9RmbLhEhATKJ2QfdWBv2mGo5txyPFHz5tnNYyac2QWnCY4VaHwLcKHDcLnHP665WCWhNHqJuNJXcjQEe4ty",
  "key3": "3Wx3VFjcVZTYCA9DNQsauvGK5wTzKfLzeqo2EUAXQGoDZfG6J1c8JyoafoQgi61TTjLnb5gC5DYMRiTij9dWBK1h",
  "key4": "3qVxaRxdnws6qJXiRhbYVCcR9oajo9AmoabVRwzTDC7Lak4F99wn2g4s7GtJC7Qf4Eeev2QSYreJhgUpVjjWWbYY",
  "key5": "4XapmeBiDjxK78emu6QTdPWa6vCF2nTsNuW6L6mWFd3DtM4qBjEQXUp1FSumHHzTjQcUijQedu8s8N2j8T3Xz3EK",
  "key6": "44Rakmhqpyhg5AtXopntRkxwuWYM7Gp3f9srwE3iRcqdpDU3rCXobNkePUkjWcTyxxNWNufx6gios81BtAtUYMXg",
  "key7": "3zhSyeT9SQxhZbR2V1axELAYK8afyTxqv7nDJLSCXhgbE6V6UEgGb5JyBLEirFRxYzxHBwpkcwSjKFxTMXg42ZsC",
  "key8": "32JAKEPkqawMzoqaJEiuuHdWak9m4qEYpPsJwTAwvMxDwNBPgEF1NEkPKswbupgti8WFsjixf6ySUP2sPEG1n14H",
  "key9": "3Ku2ntKQUuiq1ppw6DQcm5KZHjwBWzqvPaL8odGfaYJXuk1djG2LTx5A6Uec2zRFrkMjq3HP6ZGSEbgMQZJRt2ET",
  "key10": "5PUcDCmTbxr7f16zmBvHfvYWKoJTDVemj4P5w3h7mTFS62WzmXkxHMqZNL92N7ShecjmnL7FCSnUdTCbmjQyo4xe",
  "key11": "SgA9yrbijgEz1aYg5JfFBnFadR6ZcbJ4FfebiNJUVjxWJSeD2BrXV9xmSuNT2z1aVLyxTWBX5tDtYJztcLQwEcj",
  "key12": "32313vw1zP8MnCKLeSGRwTDt3zxgUeaYoYY1V4TxHzMY31dQWMLa23i7SGD6b9hkn4DqtLtXVGauNR2FV5w5TcY2",
  "key13": "4iX8L2eBnR4g3nc9D63EPL7VCVjPuZv96hFzCGWN1qbwnBFLKKkQcCBRhppJeqpm4u39wHZ15wjJG9hgAAMhRkic",
  "key14": "obPQuUWNjfGNGCnQWcwgW8GaWwjGMofMk7fxfCxMnYxSPjcxj9gHASgMCwESUoXMPDUNjhaj79Fy4xHZPdnr7ra",
  "key15": "iNmR4wDy6poaT5BmxBLy1friAVHRRrXU68QU5DNXES4XE83KhH96pK87Q2rmaT4GY8r5gm3LHH2ey7t4uqTWEx2",
  "key16": "uLnNJgob7ZQwsEVHTedYpQKamHJN8VKA3iiH35S6wgaFZA2DoEENZjgPDbCcZwzm1cWf4o4xq7aFLosRJaM9wE8",
  "key17": "2Es9qtXMUHXmVr69CH4h9JBP4YKsWnVDQNqF4TGsuqXWM8NfRfHQPF3Qbc6GVBusnwy6zWGk6MvPP5vFrKuC9Mqi",
  "key18": "2L6raLgyepzmUfEJmXH31hkEx41sDQidbz1HaeEGyYY9BwpLJipuSK9P5pVpd8iLd1oe3rtZoQKgZPLHyywXg9JD",
  "key19": "5Bn2dT5wHvtCUFubrRCyDVHqdDdhYdUT9jQWiHvPVKFfEGDWPL4G4F6wLCZ7iC8wEqJUdEF9pUfYbN82LSBkjNPf",
  "key20": "4w6FNckLq2cXuetajC5QQxSMRUwHioXQuAEYDkMLPYCpBBJjWZsGUiYT4wthLDXTLk4okszt7DAHaXJx3CTS1t9T",
  "key21": "4wtHiqL9pVR1aGLQg8ao2pMVGcQeKMoAJiTCyDx8khdzeKqxaQkqci6imGx8Va7syV5128AENcR9KKyp6F5Q57xN",
  "key22": "4TdeD3mssFPGiZFL8ED19eK7zUgFXduhW8Zt8Sttp7eWDHqquDSLbRK2DrBGXYx6bm8o8LU8wbKK2tEmPvttEe2W",
  "key23": "gwkdrb2ZWx3dsVx6MMLWQciJFwsR7icgaFy6DWQkf9r7ZH2J77ZrAopkHVj7KXy6vBcLZ1M3m7KnU8A7aVErwXF",
  "key24": "4Mk3bCNjWULZGmr6HKXsc3o1popnuscDxbf6jFDNv8PRwc1jh4uJydW1WZsyxPQvxtVf9S77AaBdHN8zWUk9E8Ef",
  "key25": "2CerFRdnDfww4ZMXnsFX2YE11JQ2yi5EQQTajhY8mvQt8M8R1Xwi2rCqF6g5Fp5zQkyhcZm1dpYMJXjm7Wdf3WKy",
  "key26": "3kkasyoj8AS1F2siqdGCa3hhMbBAgumcgr32v9eFoFRVjjL4VBmy5ZvMvP2YTXEUAeh7jxNs9xePW85wbiBdHfWP",
  "key27": "3Dhuw8gM2LY7rr8Dms1WHUChZ4rBYKvQkVVkBz7ETa95S2NZ2MpXNtC48DMCDj2jtHF2WcWkdoKPvUjWTFtkcNmt",
  "key28": "2fx3wP6cfChF3zj24otU7J1UHUC9sq228qXVbC6Xud5enuwwj5wPDpqVkjzNnqUwdo4UKVhenLAhdU7g3fJrWTAa",
  "key29": "21iqVLC6QJcouJLfuDMVh5vk3M1bhUGVtkgdMeTSPxHHSAKUg4ci6gZddxeVzsxH4UrGGeAVHLtrEasKVPZxW6Tb",
  "key30": "5QkjkDwKDEAn7A22M8HZPnGD9BVZfLQbJ5JwqJmwT7KCXa3ckNySzKSqJrcBvXvyX1kX4qkTuiCxohoUv5wVqN2a",
  "key31": "3HseycD8Cnn1ANFncHfXEu3cMgYqit2Ba4ykaUgzcdqmuwAvxu9bSnaekNXptL7ATgCmDs6JqTchr1zt13Me716v",
  "key32": "BVbTVkpethFtt1tqwj7NT7QwtxZTed5Cp9qioMYCyusoCrzLDNu77T2wrAXrrPjT7jJebfgFipKkw5UWdkBpnmX",
  "key33": "3WsoudFb1jRnM4xQ16twfxHyh8hY8yNinaVMkL9GrnDgK6GqrMts7jWGk8D52ajyuqQezFtLfWFoULkdDM6K4yf1",
  "key34": "3PT5uYyBJ4kjX7BmVZSffAqJHaksRKztG6jXjxxn7QgW8yLS7i6LCiyPGU3ijheaYi9z5MczCPQ2EHpKErioKMvy",
  "key35": "3JkXEu1JY7R8i4PSP1AzAW9h3YGM9an8pjtR6xmA2XuvFenRp7SxznuVQcnqgbdKeBReiF4bebSUxzFi8WMV5fVA",
  "key36": "4GrPELkrmAy2btRKoAXhTNJxQs6sTSYhAJtpkUFXVFqfsK4FMX5qy7fjFNoH846kDsURsYvtrfzQAZ6a651WAH3a",
  "key37": "2VizCMUDBQsZa6YH1SguKTGZyehwbpzdUXnXKBfWaCLTpRvXwDUt3HZW1T8LWfax369cemWrPjWFritfWcPGofsX",
  "key38": "9oHPQRDaUjHz9g7BZUpptf8RE16zWvT31YN1UZ9o4nUXQnLTY9QYRqjaBYdJUVZk9tTVchJFH1To1ZFoWntQUP3",
  "key39": "2TBC7DGupu1e33Phqk94xdKNgTADTmxDeZp18gYKWavtAq2HepMXMFLJX8VwVa1uBPHzqyTvCd3eeD5KdRVcdCHZ",
  "key40": "23SzgGEWuCWTob3KXrwCoJrAZuDooP6QeYbGHktXMn9Zs6CG1eb3iAKtg36PzNLaipp6JTZ1x9Z6HsZo6KFe3Bsi",
  "key41": "2oKecWjLKEMLBJe2ajjYoT8pUjrGxjet8Z2fJ2qE1wYSbPSUyGonNyH3GJbfcrhU71fRqFKjA4KD8JPCGd7dKtmW",
  "key42": "582Ho4hGZbvqbWqp38J1ZMXH8LMwo7Qtjyfp5Xbo3dKBdNuKbGkJrH4vFrab13hvPTTvKCkw3gaxQDLoMM8WpFdd"
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
