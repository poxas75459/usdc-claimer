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
    "5ieho8iBnrcdZHJC2C1F5sSBjtykPgojPKkJ1j2QdE2MMr7w3xCKBJRxmDGrC5jmKZ9fmkDhUmHLCyq7niN63HZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "238BDPfWdimPZHgCcRcbekf452ezh91eMbr8tsTXPJdgW9S9yprgQtmq5X162ujaESvqSZBdr1j5xb3PK4W5ZTfp",
  "key1": "3uVomkvTxe3MRcKj2Yiyvt9dUYyTeQ6ocnAhxttyoduCaxsKAk9CqmiDau9KjtEz5D9oezRdBTRvqPy4w3vPk2Nm",
  "key2": "4p2h6VmpHJTZqFjFsYJ8ceWvmND6x8QAXJvzC8Yytfi7uKPUmsZy34poZVDwUxj4BwrUpRAzTg8aFmYSEV7HwvH5",
  "key3": "2d9B6fsiAULJ3JhyyccntntbxEXpGf2G9v8iPtv6sJztRJhU2GuFbpEN64oncUZkLRsAhUhmJx3nyST3j32SQzCD",
  "key4": "644xKf7TpP5CLNsqu2HNes1ScTG8qmPzmeQEANBWdmYfyacd722MM8yLsq474g9E64kTcPRH81WTdtjvcjnCGjv8",
  "key5": "2YMi1domHPSRdcuXSLmnuP9NzdcfP28mS6J473itBD3t4E8vjed6wmfE7vNpP9hwTDjKfP3kfHyvFetafRsvNfFJ",
  "key6": "f1nUyzhqVs1go2mNRCuZe72boVkuvjZxMRBmUiDHSGvBbmw31s2Z26MyLYHWf3apSoqq68VQ8dKTYjgU4HRGMub",
  "key7": "4ioFPxURJPe3ouat3uXyR4Cjvr73aKzrTfApRM39iB9ko9C4ow39e9xzcb9ncNKfRgRKjd3sy7qZ24Q2iBhQ1eTi",
  "key8": "3zSLaLK7K2TEc39mrw8ghZqqvPL6rFobA4BXyQziGX2k49ZMMcEJnwEBpfwyaSgY6dmn3PDb7DLpUaS8DM8y34Kp",
  "key9": "5SPFfad5ay7wAApaJkaa6zLt9GF3rjM5RtmoeQ5QwRc5hCYikbfXM65qDmNQdEFNsNQpPKbaXa87SuWM7MiLhD3r",
  "key10": "o1uJgCgpexd7wAcXo5RB1fXxXD5MGB5q6RD8HkLZUjqapHXF9M466yV58JxTGF72zzC7H6YGwR3GwhZnkL4WizD",
  "key11": "ABrWF6bRsfeRCARfBe5cHwSMyccSQJCE4TQz5tq2w6VFCUHM5fmxZTfbhojqRfLGwNSNTMFfwyDZK6MCuJfZW3x",
  "key12": "2MMPbFsNWpbxoTAFNsUQbyb4k3FDkWhHZLMKD7RsXnWVzPZKLas6ByDeDRLmt7dkoLuwrwci5RQonr4LQbtBDErb",
  "key13": "3yaHAUg13fESxHbu8iqDbiTqjRni85V17gWnautqo4Qd7ETbw2mKXiaGuSQYqQ9S3uqRQo6SW8KSPnc92gJYnm4y",
  "key14": "4cMgkLhff3JbHSqvgdHxbvpAgA4Kbfj9wgQwb4MJKfq9gdoQNnsKXjmbk4U2YnzEwQS95K4r8m15sY5kTtnz5Zpw",
  "key15": "2x7o92NqyARajNxqsUQJXiLJWH1iUUWMmaGozYuanWfomtD8YGfmgWEX1KRgJia7jGLq28c7obHY24ukoPY4qJai",
  "key16": "5wrvTtcnAYf2UMXtMCADXhJJ4n66y95bVgKBr4LuUu6KBbXEdnZfntEuGemo3JCTPguyHTioi5tdGzHyL8wSbmc9",
  "key17": "4YAd6i8yQETuv2Ewh43v9WZgQvMmK4tDeUNrs1RUFhVMYEUqfqUqUb6Um51q47JE1sY9NPXozUrU4oSx1KpU6Lpz",
  "key18": "5fhNZUQBq84t9pbueN654EfUE49V28zsPJd99v1UK8EUJ756DQmYpof3cBTgdakAWBoT69w6JWoxyXyN5MsRtbee",
  "key19": "yKezDQphecoqdPfSdYxnMThi5g7i2QkTgPGJEVmABtLjVYovaeRZrUtYA8ufVBhiNnZ3s6yUfN5oMKQ9eD1Q92m",
  "key20": "4pfZ9CSKsBGz7htS6qsrRQptayPGV8GyJRyqwk15CjAxK2AxGRWs3xwq9RGb1xiWnTRuKLQ2ymdwraHCh18xELyi",
  "key21": "qjDwtJ8o7HBKE9wp7cEYtAczRQ7SdNtHP22fRNP3in2sRfmqdYuVaUeRJaYEDz1H91gttgA6Z6q6Cxq2DemB1SZ",
  "key22": "4qMvah6MvMMbX2tjEh6Y7pnMxoGKT2YQ1fKEs22fd1FA8NvKDrsfcxYKBuJqZG9XhKWJbhAtBbBkYCQFWQXTANHw",
  "key23": "4hZiZGj1fMHixziL9wsnYLw7Ffj6SFvWx2Ru1iS2vrAhWHzUwz7Pm8P1LtNdvTHgyn9D2oXr4sD7jxaRUmJQbZuW",
  "key24": "3d2KXm8j2iBKvfJ9hnBsukJvqJVf65vxoZq3cDh2oyhXUYFMQNjWQWeJasny6xsA5jAuTAfTBLPPnuEi87jttwG9",
  "key25": "5TFFx5RAcM6EXAU5r5sQbvCHoc8VjPpXyWMo6pFM7Lb3SPg3J71D9cq2cH1dYjaeGTX7bF5L1yvfVQ8V4MXVdK9i",
  "key26": "edxbW4jstJN686m7Rvec68yCSpRkwP66gpzpaFAeTXZLmZuanW9ipJErvn7xuivQRoGdwqPX6LU9bZJP4fqNNnP",
  "key27": "HU4rNXcvZcX42DKy6mmQX4znf7ne9nayAgSPQ5g7wA4GDrJSGPGCsNoYgQyaMK7jFinXfSGYYfx2NANWj1gLzQC",
  "key28": "M9eNDdEmEJQstYSp8w7P2s8SpQy2DSv6mBCs1qPNgUZPYLNQFeKHDtPRnMRcb2wXTMrTpKrQ4nXteKikaQSafKN",
  "key29": "5jP4qqPVxzGGUXCjmLhUDZPi4o5Z3XBYD1uqPtj9k2VQiXRxLEBF7pzygT4PR8BqSAtr2JFcSATLiK9QrtdDhYia",
  "key30": "3vVat68gkP2aUXoQpVthUd8Eu1Jh4eY6aTFHeop4vX4cLHG28xHjG9C4PTHpPcw6tJzWbfu6FxrBRsnMmtcZqPQT",
  "key31": "3WmoNk5jxve9PdJLPtAgpV9Jf5D2DcAd2kmjdnNeKoUWeN2wmKZMjEmAQKpq4wH7hzeSKjSR9sPogkeAFRVAf3yK",
  "key32": "2t3wVFquagJu5fAzknJNcGc9JVo8Qgf5Zx72ZjeyxfyrcTvBZjFVyMyDsGmHz9UKXBQ7v8ekiSTkwRG9f4C8WzBm",
  "key33": "3AdZaboSWqLYLqR7cMjjVCjFwXyWqXsstVmrCBfXAYhdVkzTGPNTStH7nEUbcbKTNLCGAfRNid2E8P3ZPRjtnmny",
  "key34": "2VyXpRNqmA8yd8xJZSdht2nf2EqDb1B7NXWhGQHZv18ys8DUSA7sT5eMc4pvqjFt8pmMotUWnGg55udYAnD2DhZT",
  "key35": "2n55iziakwHmaxt2CvSARZXcaxbrhWsmm25X9P8gDWFkKuKBLdVvVKrg1tqmfunibjWYQZgRLgV8pvte2Q5kyP89",
  "key36": "28fzbTqSh2xx7VdP3ce84tDTM9r68cHVy7FVBc9axjgZvhH2aeLcNz2wzEwS4GzWzrUMkDhh8dimm7wyoc5hZQym",
  "key37": "4WJGvULPCZTnEXQeVpprSBxw6F3D8SGsYRP3JRyczrzkYU5Woenv549rF2omyxe8RZg8xqVHtWcyU2Cdw6kEeZTa",
  "key38": "3w7owV3rL5Z2wYAELvKohQtWsw1pAa1KPszAQLCWDjAez2i95Nkp7zf4XcGdtBPSBWJFyaPXiPVuDMuhnusK3Nqp",
  "key39": "5m6ZYVcjJhBtqKHSdn7A9uHjonz53WXKkzH3Gewd1G6ezQHgJ6ZZPpMggyKqp97U3txgQtRsw9ZRhApigH61ypb9",
  "key40": "4K9hohDgft46kqra9UfPHrTLqTrfYvoS6yTUdcQ4FUz111uBjZNwNkmfQc6gAFkxVcbCakgS8ihLnAXSmYZtkwF2",
  "key41": "4GcNQLHiGKHLeN6jEhuV45Uq77RzWoxdYkCyXw3PtLr6X38AB1LrwPRNDz8VmybR5Z2jbxaaoCVZXyCrQD94pY2X",
  "key42": "5Rit8epRYDRdxZHpRPdvRriLyiT65Pxxh66phmj4jZ4WjsxMYMx53MXdw555QCafPTUiFByZYpDwsFFVK2P4JGVp",
  "key43": "3aiocKdaKPbhQFtDqJ2AJe9q31J7ybyBmS6jwzum3HfpgMszcD3rnpCBvXTN2fFo875U7NAWeUFALAPhiNwnX9Mk",
  "key44": "bej6oiGifvqtA1X8L5ZUZz9dQGcYnqJP4PwAVh9T52WwStS1NPXL17ChbLh5PPs3uJyGGb7X7TuxLG3MNCzoBFX"
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
