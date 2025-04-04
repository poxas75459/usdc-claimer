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
    "4nWFsmFmj93wWTquaB9mChb2WbdBQohEhkxUfUmqn2csRQxZz6x9kk5z4hTkzFDeaHFMgHDE8gYTUeYPLW4VfWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67A582CsR3xb2yG8JyuVc57XzE1iB9WBb1nGRtkfMU8jvXiYPZvjDkNas7TCu5v8ogZvX2CSAJVmwP5vYHDXFvY8",
  "key1": "44t4L1G9yFik5te6tamtik4yjHWmJG5aXv8mvUydXXEy3KPiARtLyDBCBtpKjwWKuCAhaJ7kt8qavCFyP63Yy7se",
  "key2": "47YnTLVWK4gkmuq87NDpXDNA74KbzuJd4KHfjqB3QGA33VnqBAmsD4f37rjcp5bag1AW67ZKZJNK2XgUqjCfXHt6",
  "key3": "3a15DEhY5vkzqxVTgZn8fJKHkpsaZDeVzfPN9A2Sd84ZUZS8mTuqK3BZGRb6hKsAQzcpfmABo1gqjshq3GuYfG2C",
  "key4": "5C474TTuKdUPi3PTkCkbW8VgZNRJa6tn4zDbzjbt6wpE5yg6xf3KP4eHSuubKbNJr64DP6uXvYv9ATdQ8qDnzXwB",
  "key5": "3qoCibachCPX6FRs3N1fzjCuQk1VoKWfYMRLFz2oWjxTGF4UspMPKfN3fabpLqD6X2wjWBGqvNxokgZfubBzWj73",
  "key6": "bkWWEuwkhKaXjxUjQXB4SEy9Ks65KS6ygiijtAPZhEpAinRhH9CFrHsN7AEjQw7tSD1uW3jz8dnxc1W361eDMbg",
  "key7": "54jbiSMvUtAB342vNeG86VUUdpyr5Pf2gn9K2nR1FRfxGM4C5znfgDuPvFUUxCFqBRkucdqynVK9DrUMxyGAKjEG",
  "key8": "s9VLqZeEWScTXge89oGWyoWQ2coEYU8PyDmpAnKjkVpGbxagJ4wV71PeQVhr722Mf9Y8qc9e6XpTYcBhPYAMaUE",
  "key9": "FLaEHW83sWPt9LgoVj2MFM6aGXw9E234t3gkXhvjY96BWizA1isZywpqVNjsVJbmn2uNqHG9xvZvC3tDDWAD2hn",
  "key10": "4cxg94Wm9aj87HvqM4gVUCU4TRvrmepoXRWWURZaKkBJdWMPYZXMVZV9QxKMABDRJtfG2c7FBEmQ59WxMMMdJ68B",
  "key11": "4Eht3q5oSEfUUvGPqaS7T9UQjE3pv5NQ4cLcFYEwyrzRnwE2s7RS1TKFrkjzfKV4AiYQjzrhYWxG6JoADvizJKcE",
  "key12": "Zt3qJ38otsWFVaGSi7oTEnZYMUdkpjeKJg8pbUygz9XwSjo32bzSAMWGaiXcEmjM2tRbfk5gqQJvT1fGMtZxbgF",
  "key13": "5sPe8bVhr5DeWvBeFp6zopKQ2JmBTPjL4YMCcirtCZZ2oPmDdsR7xEkc8j7S4NugReYsx9w8WByvaWjkV2m2hWLE",
  "key14": "2CtN6AbLAi2uYcN3Hj5G2MxcjwyZTozC6XUUtX35jXMGERexB1irPjboNgTKisgn3m3CvRdAP3H4XQAEZUc2C8iA",
  "key15": "SPvFcxVQwoiLuF1PEFR7E6vKoqoPz3rPxQBaeqkzp9gvPkzaNx8sLet9be1cY98t82x51L412z9ngzX1oYkEmTf",
  "key16": "5TCn7gKRrL6LmAipq2YMSjT1NWadZj7FSZyGaqG6s7LZWXahpFSv4kATf7GDAxmpxNLjvpiwgceVrpiukak83oFw",
  "key17": "49oz19Smv2FPaxajPcmNWFdC5Pewy8Lgg2n9DM51Etqpk1NzskGS9u4cBescXyuJ9mxAUcE6HHh27NFMiS55JydZ",
  "key18": "3pEATsEj5PMoohZDkViDjnpn2kQGoJdoaevppbdgsoXtYnnfwZpKrVsPVhDPmyH4RCC3UsCyNTUya8AwcWdcbMPe",
  "key19": "5n9i2i8JMB4zmrgJ3ToU9SrfYbLpcZvNBpYCxddpqfyqngpNjcjSHnb1HskMadP5vb4FUkShaTotAW9NnNwnHtQB",
  "key20": "3Wibbuoj1LJaqM1tfHFABiWZP9dxEH6y716ZxhoDUvjQ4q2tpvBAJN5cR4AnM6T3fVoP9DvmpFggv7XyDUpgDg3B",
  "key21": "28z21B4wkUfXJNC4KXa3Fn5W38FSb7CZHwXVnz7bMUid1Nh7EeQ9okoQW5cYdJhekCuQHxbbtnJoiywCsds8VQLe",
  "key22": "5sqypAHonUrBeJhtTuRE3LriATQJmqH7ZAVvshXaqMipvM5Rj9hCVym5YSdfAikU6DoWjf6JpZWkBzREYXKqJrQA",
  "key23": "66FRNufZ4dnYxkuj9s8wbTWfDqeqH7JcwyZagEEAHTPWrD5drn4xg47pxfEXDD9kno2QBT88uiSFf53VuHkHbBwW",
  "key24": "4AyEEPFBz428F3tnR4EkM6G1jkM7xDiiCHTDD1zcWRFm4t4zJT9VQWBuThkeGRmTV9NuQpRDwHRL5FNBksXBibYh",
  "key25": "gsR6rN2WrummEHDukhFWBUNaFrkhNBT3GK9oc2kzFpq8Lfju4rNLpKvyjxtEzjUCceoTiAZRe9yehHPkNNrkoy1",
  "key26": "3fxmoFK3zokMMc6jseufg8gzxUNoq7ZMuWpEEs4nUaf61kayPraK9bpMH4J3yrrCLP9Ljqa61yXkYcupBQpGLKDu",
  "key27": "4wsRLtS24V5XhBnRh6qVqFvhGbzCSdBG4CnbZRgHWN5agGFmsGne8Wv8Y7pfcQcvhqUtrY5KaGTgGbwfoSowdaMe",
  "key28": "sjQ37FbFVXAN2B6km6mmHap6XhXMuAFybdHzs9XBSL2VcXRBsCkobAc3kUvv2rfS4MCe1MMkvK277Uq9ajizfEN",
  "key29": "5pMxs66ZT1BoWzae8kdiVT5fvvh7is1QGSqNxPYE4Prz9sBTQrLw8W2SAfabU6qdCUXH4JaxzFcLsAwNUUsJFVnL",
  "key30": "4aKbx6DogqigrmSTZDBGxrLjnsFLV4g5mX3qFourQEaqywvXRcqGb6yPfQWYysuoDuhth9WrEyqRHiqJVe84k8uS",
  "key31": "2szJNiHF2szxrcVMsnfvBZuEWkTKoiJDRk8SotEqncPyJLHRsQ28TbNCBXvsFZL3e2D8vNpFxZa2GyR3PRthKwZK",
  "key32": "daanhAET6vQn1HVRCAkk95pp7S4h2sBUXbP4Xg9tby2sd6bD58d4E9ihcXLWkNBMZRPvodprF7CqfUwk8mf6uQ9",
  "key33": "4daQa8aRzsMAAQC4p6ugDUoZYhNzZyXqrJA1jR2SnKJqtdki6SmkSzCzuLoi7wTTTKuWdWLcp8eGBZ1YwRi5buXn",
  "key34": "CpCW8uyXaeLfXF5Vg2un2CS7JsKVLQ1v9FoteecSshra9GwGzjJSY3XoftfiUQR5ZJqYXjf8xvsNJeYN3HSPhbq"
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
