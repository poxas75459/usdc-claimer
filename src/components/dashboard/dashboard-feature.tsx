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
    "34sMae54MKku61ghe6anxjkgBtGfMCJ8wRLLDMZzaqxQZisiUsnUmuv21k54poNudKSSBJsuH9ZKM6ULgFivaF48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MSozBCkPJAtvKy4rC48DmQfTwv2NMxWjhA8bird3csZ6GoWSnczAr1umgwU918MjLSpNGXrADXC5LZA3yTK7epQ",
  "key1": "3GJiGWx7ddSZTHYkbWePqoQz42a8gLDH2iA5viA8TK9wECpmw4Ha86pqBKYq27AvTK1JEBtoHriP58a98RgWsfsN",
  "key2": "4BF1RDmruHeghqqvn5T3cgMNEMdRke6XM12JoF2C5udd15jCudaN1yp65oztPQjJJ5VGuuEZ6boCnPTpuNtg6RN9",
  "key3": "2kgT9n71RroNCDyBwg2gJ4uHzT1zEKKXMeBfQRZAUkfUCTTWQeT53Vs8tCftFx2PJZHwFY9vxCjiD3T8Zi8P1kk4",
  "key4": "34xr13MjtqyYAzzeihAcyLtFf12hYZAii5hjkdaLEYVDVyyAap7q9aoJwYvGNCHNvfLsMx18siXppym6i4k4QJRS",
  "key5": "2fHNQcBwKTZfKzCewTbjFVcbufyLbd332FVnkv4munAbgCoGusYpgpokKZQki5xSkKYnXpBF3gdW4UCPJEx2NcDy",
  "key6": "8jGk5HmBr6xYHheqCq53Q3gkQhUxuQkYN2B5KN5DtQxVhNxAdwR1drfbvHSkwc3CUKmRGouwyR8wG3T29Gj4ym4",
  "key7": "3fEMWDqDxDic8e9Ag38TKc8KHjTXPGHdm2boXrjq6dB4mkgy4a7cF15gt4wceYbZzMumMZCJYo6BL7dyQ2CfjiiB",
  "key8": "t6G4D3EZrVwPJ2BaPNrLK8eq1PWpN7g1bbKjq8gQZmapmQ4JRSr8DdPtpN59cWv4Mdum665X9VHepm1FSYtUYH1",
  "key9": "5aUU7tMmYxFSqAGDQm1JPxthWs2Jr6MRTNuTM3EVp6jdW8BUefLEQnrtenbF1wKiVDpJG3P1cAPhATamKMw5gxz7",
  "key10": "HDCMqGnSoBvXrdbWywVkWMAfPyYMWYzVyiv3rP26GsWHTZ7a7gHzHfJoTL5oikrkVfCZeyT6SzaXWmsjK1z23kT",
  "key11": "FhXvb7a5tBkcv2sBXhmCdMpADy7EiDmc7FavGgBdhumQTjGKJu6Qk9TX1TzRSUN2TEcAyj1HNw839NMd6abJa8r",
  "key12": "4FCkwQ8Zv9JarvJN7CCHQk5Z7As62YbZ4iA2pHFHJj7q9QthkFRE8Eo95dq4autyj783KfAm1USM6juVNjbEMKcm",
  "key13": "3a9KVv1JCfU8DSbufJKouxvhHUagUBsKPRfQtzLZPNCjtMgULUUKvES9JCeYZSXYCU3gDNC8YATHdDquUtozwZAw",
  "key14": "FbFpy916drBpFyDvTD8hxAbQxLuR5U9hjZPpxvJMqnMy2J7rUKkvWuhSYP5xvVGPnCSNnQrnaAaSE4E4EvCqyJV",
  "key15": "2XFx1TSrfZCC3tBoUMWMnfJnhUU3Ho3F44qeXBpDLRf1qQoqfEEWXBNbpViU68xAUBC5hj7PhR36K5nPjmc4oVRM",
  "key16": "4bUUmXWY2oSb7LNpciuErC2LXstT4bbiA3zJxFnuE7Gth1WY8haZsRGKGoEZNwNA24HeRYcZQJZ7BXtzFYmRqaGc",
  "key17": "GzUDejE2B39ybsnj5mvZhr6oBmumKPmKbf3JidXG4r2Sq67H2qzx6MqTrzxU2bwZKG4RtyTAg4YtC7h3MYQFTU1",
  "key18": "3ujMH3oEVstPCJCrVNui6TpqPn5inevHXvKrYn1MycH2NfTyzsmzCQJqEuDwe4jbRD2qMZbr3Mm1rBk6mqTBErEP",
  "key19": "32edUh4VU6GmcRPinVtRzgu2qt1MF9j45yLKgZpysHdZ8AYosdMJQbr7UkbqJkKBUGQWphvyqKGdWaoprX7iCa97",
  "key20": "62oCCEwUNEiQ9FVxqD5eu5zUW56DgcM5TPAA1YrHJuaHo2am7z27RFbskGmHaUiySPvwYgii3yhdtVucTT1E7DYo",
  "key21": "3XWDwhzhjzpsTsnzFB9Pdcufo2pgq612agVRqr4r8uY4VqiuTgdXPghQKyoPowqnRwGDhZrYys5AkN9Pi1b3dRbB",
  "key22": "4z2cjWeRTLGGEfGdoKXDfBAQKRX9B6JG1AYXTuZH6TrUhQxhVexhsospSSGrD3e4TaQXHQAgoyt891LAGq5X2o54",
  "key23": "3qF6shrBtPjGUv6MhbkY81Dhi8eeXhuujdVVByWM8ogGbeRzboWuZhiGNLxTQwejwaMtsHdyxM6S6NNjV7GVJ7wM",
  "key24": "3R2ZLbpzDrWNR33qPubzgkLiRVg6m77PjMPUU2382ya6RdNzPEYjeDURmXYgF2csCuDSgM5LXq2a54bTtJmuoYiw",
  "key25": "53fdzgrj1vGrhWEEehF2wVvjWzDvhCEUA4cHcR8uoABjzNEpXqreXWQdCkYWBvKR6tsBJE7C6oFSqJECdb1HtjCj",
  "key26": "5WPYsbNtLTMuDvJ781kKmfd7QSsufhD6mBBKWvvYEgEnCPB5twPhQPoEHuathup7SRTW6A3LHsSnnLEK3mRFsbju",
  "key27": "3s7QcfQ9sSUfDJF1ZxdW7L6BW2rnv7mVb4ZSQXUN7wX5CJDK13q1CpiJWnw939YfQRCygp1mY3SS9FN1cM4A3Q9T",
  "key28": "2E1S5rJccepVQtHiZ4kVZ4GrdXhd9PXWkGjTdtXx3WeoGWJBbNjHs6hNmiVso33dZtA1Y9F4PMN8Ckcnjce85LwF",
  "key29": "31wa5EBw1zjLGza4nckAyYQD83pqGQHxkvuFoZG8fFunM9mTUU8c865uckcRQzeMRATXiZBMrjGpyM3EyXsBiArR",
  "key30": "3BeLmnJUNodSNTQj5jZ6yWtoSHUvxbucCJWKFamXwmn1DDWCfWaJZ2mTBByB8cbFEx1gCsgGxo1wGHEE5egFaXqm",
  "key31": "5hcKJBcdL341WKxUaVFkk65PcjZMX1RF9wuCBhBQejLE5PzBsi3rkVUfaXnVo7NgjTk7KgZosCwkPpQnKBWQJdcR",
  "key32": "3TT5VeZTj5MHNrjPCBSXLiqVUeyVB4CJKErDA277FArceGWuMpct7bJBqu39pYAFygZKyUEihXhjrGT5mKu6otvs",
  "key33": "4G3D8f8KGqChj9wWw3oy74yR7Z7zuRVz6qxFYnFyLZu3GseAZfHTF39KvtuH4rtdmxmg918Prj8gRY2smj2PZyU"
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
