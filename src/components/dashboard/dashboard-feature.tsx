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
    "2zZaAHYpjYCb4gSppppgv7QPYV5aU1GXMnrd6esgHeFTgxwVayfhnEVtuenZrK8PUtAxhFaDQ9qfLNcvKZ5gUgmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pFCQR7CSxwNLFNUo5apBfgzGa459BntPoiCkf2VgjUUcrCoE5PmKg9EsNQoasH1BkUPVW1Dw5oQLUcp8WvafBsA",
  "key1": "2LUhAvCKUNC7ikvMgjU1satdj74b6aHSkNfUSip5qBwUtX6T3cKCZT8jDF3pnaR2HjanURjsNTWBAULbLRx9ScZW",
  "key2": "4GZAXvwBgFwsMNk5Fuy6semp84diBbn86UpGsbNQd8cj83TP9r1vH1sG7qcTZ8fKznfTNvV43bEHNwYzjfPQBYeL",
  "key3": "48sEwHS4vWwWDfvz1qBSjTYD5eap6QsHvxMeFCrb8sj9RaPfTkhnQsFJaPM56mA634o7T2FMK1zteysawEyqHnHY",
  "key4": "2XxBaGW2iDf7gxiZfajyxG86QSd9BSaXqMoy2cbiUWDS2GRZdQPPDmqEdqEViKejSbc9MKA7hoQcxoUUxSpTztse",
  "key5": "4h4scQrsbDoZ8vLhViqcN73QFvyXPTv4wxQMJJb918txGYyvL9zse3ZB7qNKXqphYRKq3ZMiSBBWCV2VkvWapvxF",
  "key6": "274wZfmNHMB5ypfYuswjFetgfKBZ4JMD6DoBDoWUSditHoek5PiToeRShDRLQ9wyXASeupG1AKs863efVegW8bVm",
  "key7": "2ny9Tp6b2CH5dNa6KZYNvcbZt4ukfj1dsvDB5MD8m9KKwL8xVFKPiobx6681bZaYBZ1T1CEqQxazACTeNsbh4HrR",
  "key8": "9iz48G8MaUrZmJTgWRD3VRSS5t9TJ68FijPqaqEDK9mbTjSuoW9N2XR1Kfjo2tAJbWRk1WLE9JYACCwRKcy4zpU",
  "key9": "2DQZjPH2dH1cFztZ7HWWYtgLzB2jmrBypvYKa8W4BDQvB5FsCv9TfrVcSKhPuKfP6PThkYwFghBFNxr5L7CB37xk",
  "key10": "Y4VZKf7TXXwTaNFmbUkEb5HtYeJw2ewBzC1uQu5wb5ChwTphiVDiQE6c82Y3kt7rgjQ9cVdKe8Jvu8Yb8zCfZF2",
  "key11": "4A2QgdQsvDeuvvrZaRTu4vKbL6m5DS27kiPYvAWMgD6bVr76tJy8pHjNvjATxrYk5puF8i2hmybhYFvTF4HPo4zf",
  "key12": "2Tfq9nVLM4tUucxbCxAhcDzndqVhjp5qkRyCzGwxSLHTMutTsJBMT8C16uvip7JtbggHqsDvNztjTnpFSYXMPX1f",
  "key13": "aNL4sGL74vemgjhRngi4DJAFpTF4L8NRhiWPkuoybuTfYpeeK5ixEVJF7EsqbSSXSrdT8YqB9Dj7Q4U1nhkyAKk",
  "key14": "4NFQhnsvzPDiPpiN8NDj3tBz22KcHTneGixcwJo1Jy4cqJqV1A91USY8rWSbov6psL7zxDfu6bPhJGqH8Ee79dHX",
  "key15": "4jKt3Cp416GTH2NFoqB27iuMVPHzJisWr4cXSR1SxfjHmw7k31uvg6LPgdKYaLKxuqFrK4zpBtufJhApA1NmECUG",
  "key16": "i5xJuf8uEQ65epVpMBkwE8hsDd8th1u2Uw75eAy3sVzNgEF9qQwMUHopsgVmVxwKum3AxRFKiX4F5U6At1V4d22",
  "key17": "4RHgNySmozNCpcJBxdapigiAtU3XDYneNm8yb1E2pQoNLWVnnYoNBxYmUaHoe12YwKsrkJUxdMcGt9s5vb9MFdB5",
  "key18": "5qZb2PVB5ov86q9ojS8EnBBPM5vSsqT3EbXwknDcYEvgKgY9rb3EKovDt9KZDaZb7hRt53WSi1yevqTeZcCVXQ9C",
  "key19": "4W6RBQnTMyrtyC5oQVYbJvphd4uy7pR2SeFVZ2veahHJAdMKiSmsZ19SpUCxarU6vegK5gVmchhdgCAKG8nBogPK",
  "key20": "5PsvtNvTnBjjZ7vmZdJM11GL8kKyLfrc8neAD2KsspWPK4R6Xcykz9Eh1x8svy1XwA6jA6CiAA9bWNQHvzgps3yU",
  "key21": "2wGD7mCgpsLnMaH6A8yBndGniFUpSjAYdRzjo6WoYG79SMvbU7VD1AaYvQLA7vgBWN7qZVHLqPMbwr8bXVfGxASv",
  "key22": "4gewCV958NMgGatP4eFXp7wAC67xAXySG94XN7UxXQjs7TByHmD8uu3RHKSZ4WroCwSNjsEkQa9oHwCeMm6PEGcc",
  "key23": "2ua8Fc2avKnZBhiQ11zw2LyJxduPAdMBK4jV7XzG2fCWMV3bceN6V17ZgKvh1iJqsHNHGdd7TjdDrTgLKDBrwJXK",
  "key24": "D18XsZpQtsQsNCoYR8qzqzpjXkRWLU4CYepzFjeXx7Ya1YWcyEZCTCpWSeP9ppvVzVAgvBr5XQxgFrziidjGAQo",
  "key25": "5YqviNCKjWqtFjmyQwTmVLyChrk9UNs1edK7dd8tSyJ4Guc5MZ5aL8KTSoFq5F7rkaEK2G6dU3ta8rL4Pu6ohvEP",
  "key26": "4sXs7YW3WpVs3Y8GgiTHm2e6y7daqgbxrNrnErkLKFMt9QU6CTwXrfZ7KFJYMK3CKTajpjQqjMjVeksiSS2UfPgZ",
  "key27": "3e9AX67zxPL4NUDzJSdvDZ1SZLq4tXqSwWSPowcKaGwsDucubRMHYjV8QauuZPHZZnnSawodijVKrw99ZQqCG7Dt",
  "key28": "eA6agEKNGBR9dfuSNgpawjh8RHoLupmrYuhXguxFRfX5fhoBTYhXt4HtPhYyShQhrpNatCbepq3PgpqZwhLUzVN",
  "key29": "4zM3XYAMVjijdrRUKNDu72pu8Zfsg1vr6jfX8GXHdCQZFMHZniPRhzEsDKdQVGR7AERJpAazK3G3kWWA4ZeB7wXu",
  "key30": "4cspL4nAkrKdfLdnmiciS6vpkH9CmjR26h5dFtSVzn9ZJjECJZAdd3xrur2GfSu8xfdYpta4RougTLB1aKRRKqb9",
  "key31": "wTGYzmEW3NeVBcgKz6mWkEbL2fSz5cTkBGoaBhcKvKAR23s6PkJvmEx8QoNGAMv3rbeuQRX6JRW2HXXHFhLkU2S",
  "key32": "56149t2sJENSyPKKRQ4Jo178hej48C6sgYcSBmVPK12dijQhgzeTFcYVKoJjdRaqdiiA7diKnJzefNL2vkhqqeP8",
  "key33": "39dPmjEwfRQ5cPPbA9m8cjs758wG1iSwuT7zCmXw6CHmfzc5RuLBWM74765y77Nnqt9z7vuPgR7X2qFdSsHCFSoM",
  "key34": "5LbyDWRfD8MRWSaJtz6MPo1iAJv6mNRqsaQquMXAVH77DvbCvFXzsjsvcibNmEGxwrKbs6dm5M9XtQBu8AwBZ5Zt",
  "key35": "5jPmxQGv9C79xLsd37eLAXWUiz1gieYwXqmuXcTg3pnBoxAiYZS8zj8PPcUJqhQhEUtk9iTEPPsV7LDXYfbKG4ru",
  "key36": "32g4sma6HLWzmeKx3pCdAGvyixKNXeETQPaEgSJ4xfyQHvDrShJpzSpb8bTbBy7huCRqezJ4BYYoQy9LF8CSsYbP",
  "key37": "5s8ztiRX3sVh86JCJyAQE3cFZYUFwCW2zMovNTLXrFC1Ba7WQ7DzYDQ1FyBu6GQ6im4XXgpRuyrE8AzLNqZNb8fM",
  "key38": "NJh8JQGywFarVeAHbhy5Ejk8ZvCptf6nWFgjpkiCksNWF4mrFAd9emTbn8E16ysvmHpyzki3k8ovT4hd7QkNSRc",
  "key39": "3SRKzjuu1jwetaSLtdHv1DRKHkEbjUSdwnvPGL5cbdmNRd2qRMkzCi8RZvikJji5GeEq5EZfpUi9kazABPmabcwG",
  "key40": "4uA4D2t8wyPLhMzuYwTBYtk1x4fS8CET3rFK7fHqCfNn7tJzv4vcsT8zrtUmgCny3jsJ23RgqzSEwPqoTznJ8HkL"
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
