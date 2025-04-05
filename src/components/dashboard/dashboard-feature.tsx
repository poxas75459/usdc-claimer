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
    "5PMB349xai2gUNVMeamBNsqkd6MnVknXoeEv49UBNcdfBcDzd7fw7pc9C7DNeKcmJ6KEiDAQPorQBVwENe73v3uf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pfRAkBqd5ozUU7zJdxdeAU3L1uf6vp3KyF9x9ASDebrxJpwnutX44bMaXzMZyynbBaWBC16GEq5uwrv7U2JEFfq",
  "key1": "4N7VJys9noV4ooJKsA2c4wNCdWaNz2rRjBwMyoT5dQAG7XVyTbifHZftd9jxDhGGfMhNxLos7D27qugju4TDp6HX",
  "key2": "neAr6xTe651BfzGFdG7NEVeRfDPoue99Dxd2AHJq8KyQuRfhco98PdesaDa29XuSAUvunqouLor8G9qQEAC4jwt",
  "key3": "66nwpsC18BTzm89uCZq8HLWTnUbfRNcnpkw17gPgQXphh394audRnoQUvNhhoR1HLZnbAocWeNitZJDf9H7C6x1g",
  "key4": "F3Ey2GNfcNe1uoew3EsAHAGfPVhweFgUkHwJwvPqV8K7hzXB7soNsceoaX65piWSxDYYbLkvsAvCk6PisjhF4QJ",
  "key5": "4vRRsTrftgKu5hLwjFzRhexnS4ncVkKKyJARjH5fyk7NJUjqkskLXdnu6LVpvmF8ZGxPiFZzMi2qQGnJBJkhEEZr",
  "key6": "2DfU1YGu9NrfKXRiosqp4FakGQmntitcCZXgrxxLddcJNJLAjf66DZbP92uayRGDZKZ4E41uakJf3xF5pibJkfnC",
  "key7": "5yjwuZPTwbdPSoKJ2V7DE6YUr1z2xRgkReuMDUzdCREZsxhTrpeLSuPwF8zRj5ALiWXFQ5uSLYJ1VjV9x7soVG8g",
  "key8": "pmsuyqrMDBdJFMFbnasrRNAobGPN1j6XbCActNjKaataPxbfX5rRt22mZ1kwHWz1nGhWyb54CzGqbeKoiNobvKr",
  "key9": "2P8qQNkgtZHx53Nxt4dTCatiZxZPBvvVx92V1V2ikavW9ZhUe5uxXPhgtHqCM2TVAqqz3XgCNPNJKXV3jNKHhDTw",
  "key10": "4WHyL9mikR5nxi3NWz16TPZJGbLwq2BiBKe9dKK8ESTQufQjHD96L2xMkKFi6DLMX9soTZJ11oRfG9AqdVzv679o",
  "key11": "KxBnQuNPRQmR5pHoSkTiUTiySe1okToEHzTJ8soAbiZbivv3SZVoDn96i7ar8RkBpRTCr1N7bbM7TxmbWcAA6ni",
  "key12": "4R6ZmAA9r1EbKi6Lb248wCRyuH9KWh4rbMpAcwE86DLGJnCQPQsw4mwV3bdmnWqSQ39itSrDz3VEnkqsAPajxBqX",
  "key13": "nQmoNN75VVYTbXFaziqEXF7JjTXbP22pi3ifVzp5P2n3NaxGXsvwrRRXSBRoQWVrbwj8gDyHsNkY9vaKTSLCjrw",
  "key14": "SndqGQL5BmrYpVUA5msdjyrh11k1U4W7Zof3A7a5KY3GCX1PRs2AqUJJjQfLbMvMkD2Ft8F9fHjcZMqQ5yX75d6",
  "key15": "4aEp5QbSoBDoUU2WZ5mzPxmKUQ8NxCcKswpZ1R8TbeqHFh6c6dCgx6JjF4vnh838tV8io6c6z2LzPaDMx2sCbXxn",
  "key16": "4E8smNWyUff1PtRi6Pk5AyrVbriHWFF8Fc9TuWDr8FsTTTZv8BhhggiWjMjYxZ4mV5M68sExnasfcrtDEy4hBG82",
  "key17": "2BNyZYoLQEUgTR6zbCL1g22iK1nrf5J52GbTrDq8Srd9ah4ATENitKG4P6YPWFA2AikVBsuJBsL3dErqouV28APU",
  "key18": "2xuduqP56MxcfU6vEBEEax5BaLGDtA9iZEQ4v4DHdk5iRbCa9xsM4qCrV92oeUJW5g8RdFv3keqmN3mCBtwDYDQx",
  "key19": "67bvy1DtwbzvY6LYHk56EkAPfLGN34R2gY5pEpwPL1YVQbfsdxuCjAS1NBfLDCWr57ySxSJpMLJggmMPTP5j4Zy1",
  "key20": "2nC6f2UJ3Z8a3fRevNFhUY1RY9TfHR5ahgBUbH1cSrM6SH6ayaSSp6rkUbfbHpLDLWt9uet8PUsXFbfg4WuHaWhY",
  "key21": "3xQWCkFLNzANSPwccxZRrqsEKjsniW5AEpJKovYLjCQnGFpKMSf1sKKyYUzDGPTxTyoRRh8FmATsvceRcbVuRR7i",
  "key22": "3Bv8QEa4XhcLnn7cMh6FCeXgtpkFyXhDivrKVp7rPEWEvdmVPgvuAT93P3y86yZKjuKKQjjN42H7b6jhtBMsuTZP",
  "key23": "5bUHRXu3BqabCqRV2PTxZMoYF4vxZUjKXrxFz3cNPoFeJ8j6gjWgPsE6MLayEYP8toTBRXnb5HoShHbmyWUu4Cwk",
  "key24": "4mNyGKPgoWQ16b9z4yTsXHphYVNvKmrL6g5sqHUKBCbSZbrvvxQstGWixwqRuFtmhyb2yFxuLEQYSaiT6NgdWrq",
  "key25": "3FdD78x7jLUsJQ6XArUK3HEXU2oc165YG1bV1oCStFHXgiovBEQzsKz2fNU1GczMGy6ZNMtro6BJ9ejqWSfE1ckh",
  "key26": "28YF1tWZrj8C5uNPtJyXEfxc7vHcAQPVqzKri5AGDu5gWHJJyTBRWckGW29Mi9aELMqsAtSaWh4cNNmNPiFQRLsY",
  "key27": "2AGJBGZPoBAqA7bV1AyuoigwcA6cTDLUXaaTbVTmg3B4MRiHQZYXtUBNeC78NgS693vapqi5BiNPDfMrsiLKNWrv",
  "key28": "23JPwhSvjsuj7PMR8c21R1xi9N4bBqkvSqmDqhMNUFCRn1ywPzBmcN1xy9kpEkBVMS8GynstnBbFJ4hGcpNUztu1",
  "key29": "5e8EmQTvoNjJfCMhcMgwBWCMWtbSEJt9kWHoFabZ21Ab178tfVkcbDX9rqxQQvKChNJeyotvswX7n5vdKsGK1o7A",
  "key30": "61XcLWk5exSV2zphFGg1f5GH2WNKHLxywz3r9JsoPy7pQBrUwCKF7TDn5D3LzXSLr5WwpyFqYRp3D66Ry4FHNS2J",
  "key31": "4mBhxX7Nu8Lfe3STEzakjwAKjgsi8YRELE3fMeNzqCSRkfcw8Kz8ryCdqRXEiHiYsmabneD7sL34jrHVRcdxesq",
  "key32": "erKStp2avSVZqD6bgr5v5Q1qqJxNxEgJAw1zFujL8L28JYhWZh19R4dkwDvbpN4ZbjbhrmoPPQi63JztQT3ZysR"
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
