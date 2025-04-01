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
    "22MVdqj7iQqhFb3T3CWN4WV731n1UkMFvaPAjpxPtA1qLhz5Qz9559osrcUdUxa5VffGVHwD7EPqy5Js9qx3RkhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QUAdpnCLA4veYJcziGtWmXGtJAc1Hb8hKionZDYDqyrco2bUYdFE4Z5VvBzc6pHXrwTXPh7fgDtV2PczgX6ZX1W",
  "key1": "3KGbsoGfUNXVBzsaeDcMAfK3RnYqnsyhV7xPeHhBxNRrzhftAKGpeRTfeuDdKsNr3pafrnYdLQNoJvGVk4TP5Dnk",
  "key2": "2PwczEZiLnJuu3uCbqa3QvfeStZzyYhhfGbnde7Do1hjimzFDhQ5j4Fc3Z2qtVz55ANAL4eHyfwzoZaHtpeMTKJm",
  "key3": "48ZQs8Fr98vT4oEkX7zAcHseonpJ3dB48No3YkzVdnJcgHRpxQM9S9hMUPT38WgS9DZNbujmXDDefebvfnPnWfu9",
  "key4": "2YquQ8nGzdXJ3YsmX9oG7KcC3BL8dRt5wajYfM85ZMgrrcXykS7jN2RKqz4SZMfCGpH9TdvRYCm3u6R3m7ewsah",
  "key5": "5ZThPnfQkpBStuNXSUB52e4DuAshwHaBZCgXjHVs58hGSZTkAWQgivDpYJxxJQfJKnVHUM7vXSc84V8uyjXQTNmp",
  "key6": "4uxazASNcdgkWdwe1KjppY8KQC5MCXgwu5eiv6VkJU8GJr1m8V9ghvoaquVShynTnL4u1a65135q8fCVSQugtzSi",
  "key7": "2eYAwpcqdsDV2X4pG6a5ecyqoqMCUBxBMAvALD6cTaumkVjDi1yafPt5KUysRFNy52NztWbTBUoX38ZRxSDqzzkq",
  "key8": "5EQbNvxuQVQoNnZs9SzhTWavnXyxskH9khCL8J5ZcQP1rZ2QR2AGtM1s9dUJKzVBM6FPjCLGVG5hKJx3TnTidbUb",
  "key9": "3EZUtCrbQYTdiBpCMeVQ1mk2JuPYu2MVAMhG56wHmQfreuHkCDJynCQmwW175rVLyeVQ7SJAnALVH7KS3LsiJRXG",
  "key10": "4rr8rWNWFbX5B2gtWBYz7AyaKSeXKT6dCGqCEzRaaCcsNrV9CxMfD1YYxrQ2W3sb9h2Gh682DnUAzwUL91WdAcN5",
  "key11": "4Qv8s8x8agHVQPUfLr9SnbJkcbKWdmVYGSFjdqAzL2T2Yc61Z2GVVbtrxAJE5iY5oVsFTxU3snC5CYyRemJbSzFc",
  "key12": "4TjyKb2LSLFYdWiMgDoT9MGBSX2Yf2tzM38fpMd7H2SqbCUgYnupiW7HWFuxGdYerKPeiJZiD2RdjUvJznEgKrJT",
  "key13": "4epxt75iL97cGtptpXzPbJiJ98QUkn33TR4BUgQ46uAeZJDBMC73B1a2cuSZ2UYWpCgkSZ6uznfhm2xGvEuiYZPZ",
  "key14": "EjyLJyL8dBp8A1q1PYf6KvjgspeYXA8xcQYZAwu59h8uFqRdHFudFfWZtJBxmLvE7iDCUbZJgCut7AwLgXtZWMb",
  "key15": "3chYTMB9yfzNSao2v6QoupzZTWy5vsgurzgzXCbgiFCCe89zVjyUWdMYfd6MKuwuHVRQq58BzKTffgmLks4dzniq",
  "key16": "3ugAoHmkGNmv3DhprgsPcwbgJshvjrKmR5G6Nyr7HodRba8QZovTYQFvshTNUsLnytFCvdgHq8cNiPmHWLQuWyxF",
  "key17": "461v5wb3QjRPv3P9znh9pz5VfrkCf3UR4NtKzqPGZgYmDYke5BmP5izctBvhnA9cSTas1omFQcpmjNPuYpjwCUEW",
  "key18": "4vHFjsFpbSkPDmcwUeBDN9RYTHgDskiRbiuHMTQ6YjcvFu6jYRmkvTviQErLkLTT49ih21fDU7oYn5Snq5pQLS7x",
  "key19": "aJjuy5cAqpXgsK2cf17j4q66ntqrk9zEwsDYJbaP8irFdck2ChSQi6WVYmC7CvxUiPzd11GrwWx78AZqe2bFARH",
  "key20": "5y792kyBaTqBHg1u9Uj6Dc68VAdhUUHapU5K7ybx1C126L5B1fgT4hJYYRT8T9CVH5GmwSLH7eCfRGq13uHaQkuh",
  "key21": "5yPhaWsuCSpBxRz9KTrjfQVRvr8wtrXMsoqYvJmsrxMejKvLWcLPbS9o6YXiiRb7tPMnfsu2VFWBCxqRAoKMTp4M",
  "key22": "3JRRpEZH9c5kVmgqr3ZaHYrDk3tjCT22ksqjXMii3jUMyxZ4WGdZ34MNTJpBzAiH7eQP85RjGVGjvL84rkRkPdvd",
  "key23": "5cYSMVYCqacRYrVuHvCid8RGAxZKy2HA4mwSAbfKYVSvwMx9aKcByrMUfykUQuvwsegj8AH8ybMybV91o7M4GonJ",
  "key24": "HG5XxbaH7hqVZqNZHiy6rpz1xk1iNqZw5TJBkPiXh8C1ToKvciUiQtiJiv6Fm4i3zzXiKUg2ZDaCxTxr2JmShLc",
  "key25": "271LsjamnkbPyQJSTF5rBTTJXzVq13tDdcLggMCibxH26GnbDg7q83xZe5Jhsb2iPg1rwppjf8uAkuE8ETMCRZ7x",
  "key26": "2wJaXW5nbzhD7Amii9rGcEJdzXpbC7eD8rqk1nnekcf4DXKea22rcds56ULBFxDCT1WxDeGSNcVUKQx4MteS1zxN",
  "key27": "bp65jdm9xS8fnTkV8hBGBL4bmQLjREQY3cYWc27GYzmTajxVxe6sFEKheA9xB5JewMZx34eii2qPq9ut2dn6QqW",
  "key28": "455BSwFUXmM57ZFW49aByFkGCJCG7oQkYmQvGhvpxaaCBy2xn5c5CHfDTXhKohwtmSona4KWnVLncs37uq4bhxzr",
  "key29": "29ctP2sX7jredcF8Y61zLJxCcsLuy8sP74F47xook74Q8Yi8u6aEHbWN8RebTVoUD6T8UGnFVVCVJ3Xvwog2w8Ks",
  "key30": "597qmzMTNHYqcXpGeCdcsadACB3Uk2EmXZn6F8jRNzE5yp2c1a5rzGF36QwHdbmsSkHQhrpq3Rt88cP5Jm83MoQB",
  "key31": "4oxtVpVSngJ1bgdFrxcZYxEKdpSBKKmbisRRvzBupx73kWjzrKEyXUQiKdUU83J2YHCerxPz13oFreJBGCDgDK4J",
  "key32": "dMocTL1cozEczCubgUZ6roXqQv3hWB3iPyoqJbMmdSZBedeycxfsdfXBEggNCwWpy46fn7E8wJga9EfJYBrkS24",
  "key33": "4rYXPLwHtBLd4VHupgjih8s93utBXkBjo4oZEmmbzhRQYEA2r2wyKkao6bCd1GwP45jE6FN2T412Sc9zRWgvaTac",
  "key34": "5VVP9Ba1QACY1m6vyDuC5xzekd9Fpox4HDcsvH12QD4DwszhtjqVZSmZLJxTBspyCvGgppAogMkWDp5qKaX1kHMb",
  "key35": "4x4PTPQjVxjoyksFxZzhPVQH7chADPctKQS7T2G3CginJp9ZKLmkrQ32951mPoMT47i4o63ne3HMvxSnNDMiR9Kh",
  "key36": "4z1bsaJE9HACgWVJ7h9L5BcDYciJwKwvXwpT6x7sFHC84SJHGkbVgMrkMCX9CiKhsBLo9xQrH6KSekfKjGHyQG9n",
  "key37": "55sQ5wftB6huTpsh4o4YVzFkZhar12JLLmec4YrJFi37ZxVZM8MRRwhjEzrdjzEtQNyxLuKdQm5X3BEzSFBZzJg9",
  "key38": "66nmcJGrtGYwbbD7MeLUTEsHy97toJ3YnPzdugurYe2qB15YdZXQwe76RTAT1nq7YFGz8vGhmTdN9AmP4DAwgcbK",
  "key39": "Mgy88joRatH7oCBwkaDARjsyEX6mKZjgdQhoXCx6R4k8eY6xtgdkJt7CDMwRJpJpqEzBcB58NKUYTes5qifc7Fq",
  "key40": "5ptoKErdeHNYFvkRhdiJ67H2B1X2GTuCyAnn2GtkqWFpRVNPZ5rFFrYY21WfCx64rQXYuoWikFu1Ntvap63cVx8o",
  "key41": "62WzGwR46pdJEGLh5gWiCfYtFjP4vgNH1f1XsWiXANReCc9GH6EQLRskEqfhWUvWgfaPQRB7vmUagyBdH5G1Z93H",
  "key42": "2sP5ZkSk6hB13gWuorgUTyDJcAn3kDzQZec4h5Subu5ZohXsK4pnUkdfthCr18Cd6Sae3fUK1D3Zzp4xMJRBfyXd",
  "key43": "4kPe2heU1xva3k47VYkfY9FXGQkfh71yPPLbmLeVRMr9LB5VtqNYN8Z4JJuvvTGEdUf2Uv65mnu6dzV8P4KFVFgw",
  "key44": "1Ysqfn9HFG28n3MnoiyYXYMfGc8kihvp1onnLb9PWPmZuyYCmcAqNGJXnpvEtRCVRQUeuTdtwxQZTfvmN92JXrH",
  "key45": "5zfZEEMdeoNuziGRAMxS64fkX1AiiTVWU45XAVvN8kDwpDjNvsM7kLcX6Y7JXBZ436WtDSbHZWN5X5LfHcGcMfQy",
  "key46": "3tHF6DPz8nLy636L6LeJTJD2A9g5nESeFAyJKoDCoPLnM64aPBNjoGV6kwvUBbachodVVYunesLWXo9cJ3u3dF1d",
  "key47": "2oDbQYNEkizFBdbYeYr4n7wF3V1FraLgqTwPu3LeaCj92WkEnwLvjNqQxjcAgAcoucybVvKryX4trTJH5iiMX6uh"
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
