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
    "3SZS8RSgujmnQHwS6xZ8aYivLD3o89PhjNq1ZnGdSsx1Pc82Uqk3D519sQCqa9wjzygpPnv4d9ZDQQceCi79Fdf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UZyZE2GPdaamF2MCHNVNzcyJzU11JnoCwQQbgnBq4tHMCWKUesmBZFXvsYZM5fWpuwM4yZgnxT6L8TynY9HhFMg",
  "key1": "5jweUUTUD4hrTqr9iLKVnPcdm4ac8XBBvJ9gzaKPmpmxkQ7ZNAto6u1E6am97wLN6hRJavWK7qZew1X2xgKxYTm6",
  "key2": "5NeW4Q7mcVSh2C2D8uE3YYwT3XWNUAfeuMhaDJFY1ZdYSRWgufCzrneb4oCzAmKakgrnBVY9UheXppgsey8Bw2yE",
  "key3": "2sovxcjgQQDMBFEtktmai9GgXUyYez9jUJSjv3q8daBnDZFk91nrRiW57GnwXTMCxfnctB8NrcXKmVexLgTn6MtS",
  "key4": "3WGEjM5FxxQXGii9GVRDnKu9i1o2MmhrXRmqbcB8AjFGgwvcCWKMD5WPP4W1bi6Vx9wwaSbVnnYxK71v9Y549Ak",
  "key5": "3MuEiVj9FhEz7hVg61Mduu6FzdhcwzkpubAzkfEGJVSGybtBtZE6fdHevuRo9xS72J7G9KkhRtmLQk65Qa2K6urV",
  "key6": "5N7XoQca5XUtVRyaeyJHsiqPxTiqmvg5y1Lduj5J1HcHrQZNEsi4KGCmqdV7PvG9GtGJpeQWaawHwinJqTBuBZyh",
  "key7": "2W8m7LVAZTSnz3zEtgaVEJeoC5pbNACNKvNgXj1T3VMNpZ77jTxns1aeq6XfqLAzjdzu67PPsa15JsY1hCaW11z4",
  "key8": "5XDHfG9b49pXP9HeUFCwxmp5DnMKKD1mQarTzjyYCzi84DZgxwtoqNbt4tnzLuHtyQ1ja5CThmfTDvWyYDnwfUZg",
  "key9": "bu62UDpTt1PGNrwhfeyKTHgCsdnGtAGgsRULb28datWent6bHqSGEbEe7AKSs3D6SgrbD7gdRA2DoAebTHWzq9L",
  "key10": "3zqeUMsrvcq6dtfGQ8B2gaBKDt14HKnrkw6RxcxBLBBWyumXRZGx82DzZnGoDvurjnfJKJrHY8rELe6RyPbfUjnx",
  "key11": "4uxuGxc2hCgH9ZtfFDyJ5vKrxynSoTt711gDGRyn89BBNNZkaXsy56PeLh7WS6TwGMcKmJ2fq9RMT8oo84f3o5b6",
  "key12": "5Vt1Bqs41iugPqSh7EYr4qL7HQt5nGVBM8sV26KuP1iJ7TFt6GoyQxqoULAXpnepBiuURmtyKzVfCgLhsZRUsXK3",
  "key13": "4DSePaT7Maex5tajzQBHEprtcmdQmUSrqPEUspGhbSiq6vkaTpoKGRCtaHscoZJe5EAWoLv3Po8CUTCfB7n2rX3i",
  "key14": "28rtmwiY34nPRSE1h1LjcMKv4Yk9bgZMZzz19riv2ceQnDv6yDoWuDhxfRDNCPeGJNyf8tx5f4HKurkSUgnPrwt3",
  "key15": "247TmyobFzkwmAg7ubdesfRpbVvgnLvUhiEVu9PLM4HRcmUgG7YvwjmESMteWi2usaHW1YmWAYQRfRwhMJqNbEkW",
  "key16": "amx2CN9J8Gna5rEgon5jXuaX58AV9ibLQAB14JgpQugocFZvqabFcmWtr5qivCvAE2vjedbMzyiNyVPCkk2jGvA",
  "key17": "3LjQ8bpsRtcuzGJzA8yd89dbMjJKcV1AaWc3J9ioH2tFu4bEBN5j98HY1TtZ6AXGVJcUi3m43yAYJj3BnQz3MFnP",
  "key18": "5vqaEozUz1iVcqRy1sFRjtg6kzf66ww4bts8bsmUX6kjdQYzzdbP6SdXT8Cd7JyBNVKqSgkBDDCLPEqE1djEQ2D6",
  "key19": "YAHnR8bbctekAwsvEgQCfsDT2yABFzGF2EvnHHzHU3erCZtwpSpBd76reUcHVaGwDC3U4kDooNKT9RBME6KKeyF",
  "key20": "7kAZaFmHLAtwzF23V96Lc7pgyRccsSr6MZ562VMbVziqDcXGM1g3LQ1s8J9uPMDpNcrXv4bneY1u3iVQCxVxsBT",
  "key21": "5a8UyRbusBh5aFaGXiu9jheE5HKh5hJ5VSXRepZfrpWmpuBAkpDnCRcaSYfwMLo5h4YoNyMXnWEaouF2q1Zhxswa",
  "key22": "2eG2sTzYBiozdNVpQgbS2RjgaigzrxSqt3Zsq1fzCdFDN153SxynH6tfm4kXUttQavniT5bRKPNMm135StFWNYBg",
  "key23": "2WgALSKzCdEfsgQywQ33mNJDiYPzUQSsESfnaezFPEiCiVG2mu2hNxvNNwddYqYryFe7GRzjc6kpfVTfsLPvsj8d",
  "key24": "4jyP27GZKzgpw4DVcGAfqDPqz4SShjX1EwkV9bz4ftfVEZR1vcfMm769rtNx9FvKdcGvxQw2CPpsCYVdF3S2LYuc",
  "key25": "41VdC5mTwy4b4WwjQ821tYEeVSnZfxPjKfnMMLamyqvGDcScxmi4HsnChnxQtM1VodpcrbjNRQxk7jMYYUL4sidf",
  "key26": "2hoUkDPR3nGuvBsF3SkngHLeie8BVynyFn8Aa8mjT5q7TAtShRxJ8pWL77nAAHkkADzzny62U12MDa7exhPJBngV",
  "key27": "5uwB6aZB6mySzdbSG2QN1Vjaka791QdqYbXVKQqE6XxM5PfXpoBpTbLZvXSBiozoXMnr9Xhjfv1cPrWTkDqaN45C",
  "key28": "62cqY4ZP8Si3dC5ETgUzQNNP83ZZ7YbpKs95WPGQGH4zTpRBr4nWVrNYZeSaynqHjjuNjdaXrKyEzvD9FRSnNDwA",
  "key29": "5KJmSpB5DJLQHkSnNuLFuRdSfjwmSsuPe1qwkezEvFYnigvNckpeAbYp4BKS6UP5haPqjBEnWD31ZaMJVozhhb5g",
  "key30": "5nhtYn4T7XuwU9T4rnF87YJwCZV4ZwXXHForVc6LTfXdrBt6giqp5uXxU9tVmSqKZBzWHZo6nJLe2KN298KFMQiC",
  "key31": "2JEZAjxyXTAnTN8sWDon6TjvpgUD2XDUAPZU655hmip4zu15tRhV6jwMJedw6rc1WDz4UtXzJ7i2G8bKyT5VzyAR",
  "key32": "4Uy6fNJsKq8eMuAEPHa1gYzoAuuJwChZAzq3XoqsaPi7cAGFMSFXKPNZMzo8gcQqLPi7zBWpGKCbaPDnEzaGNnvX",
  "key33": "DUm7cscNHqXDvr7jQ7RqYPydY9zxx1t38Du54kgf3iTXr7yDen55bnQuW4tPa6kT7WTEvR5UJg76wfBWhd1b9V8",
  "key34": "5TCQMrmXR3Y5UutGFxJDobezo5X1xibPAhfJ3FkWwZw6h9G7283VAaEKpXBEz2ZcnWg8BA42ehg3GCqiS3zQYSjD",
  "key35": "4a5Th1XHkxJgoYXk1mAjPDpVn6xfBKfke7zM7vK8ZEyyxdFkXA4rZM5JjPnKfsJuMxRwU57vgZhU7AqjMxFE8ckj",
  "key36": "3qJH4FnPdTc6xJhVU8PeDc69irYfz5RZb1FTMxHiSqHfpRFgwSi9FJ9JNnasjSdAzRFjCr6b1m9YuYYNGi1AsaaY",
  "key37": "3sHq1RZvjd5QrZCfAfEYm8pHoo8d7CKwi4BoyVzucDjiQTAtF1CA3YQNcyQbcfdp6fwdxy54aAZ43jcwFVrftfVr",
  "key38": "4eDx59NUwUTg85oBoe9bCYEZvUUs9DaoBJEFpnT9VPccy5RVcHZgzyyLP6xUzXBwy51K7Cp1Njx3Y6XK7u2q9ScN",
  "key39": "5Z9zk4TJBWokfZXp4N2BaZMuteqGspj1DAh2oJ7RhZ2JRtysVAccZ9zipLBi6Q36yP7dPhUwMG9v4yVDT8xS6ihR",
  "key40": "3i43xqq7EnHUVzDQtVT5RWpWgid6Gb5nY6hytuX8jFewMNPmdMUF2WodU436QDjjj7uZ7x37C2umRjnfmRSTPhNY",
  "key41": "5ZkRZTkLR2GJ3NzzE396fkSuBF4BVwwb11kHZFgaXjY7cnahRYdGUTkgovfVaT9AyHiEyZjDMJaGQ5qRkE9p4xgf"
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
