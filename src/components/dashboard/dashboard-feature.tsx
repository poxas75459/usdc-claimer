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
    "36r7d1p2ZFofSbyzmyabgP8CMh2CYStQAqDEPUTi9vHc4J9GAPM5Gc5VuUHf1skjvYsisycQTWJf8wVPitwqWWYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pmHJEXXpPhWTbogAqL2dr6Nd8Z6e73SEW1yQGuU8TqnvRYP6aEK1LqiegoEt3wasQitSj4QHMi2egzgpmK6ZUdv",
  "key1": "32stjDSAa693hqeZdqxySw6MWHoLAGcP76Mp3LgDTTw6AgsgRse6yYm3aXb7D4dDbMK969LV2qa7D6DDDJxS9kB3",
  "key2": "LPup4yU9iPRMUQKbACbC12Go7e4SHJnRJ5SYQ1TZiUthTwDEcNAUan3qRPb89nrDJ8PhZk8oUstHkQGGzzVkZvV",
  "key3": "nnq2Fwxey5cbyrmnaqYzZPW77VB3H1UdcT65xibAws1WoXCecJiA1x3gicJQMVEHPiU8un7uKXK61y4mpu1tCqF",
  "key4": "7s3nnDP1a4S8o85rNgcivmY4EXXdPqeAc3sQiQYK6hWxfWvVmhUxSRYHcGcJPYJLATAAzzR1GFqixUKX7ySgBqp",
  "key5": "uCABtJ9EAZ7CnXY7EXbg2pUEvsui8FoK8xE4KC481txhGrtS8C49kPtT7VmtaSufotSpVwjAZ9231Pz2icn78xC",
  "key6": "4JarhrXqjr2CVzsw9o5ErEkajbnCBEaJcxDdKmQ2zsGhV8MBcWZpWZg9n8UWgbrbPp5KeRXA5ZJJqf2nPHLtXH16",
  "key7": "373zoF7FTSZgZFqhy5aFCBbKF5GThApWTD2VqgckSTKqJqSKxZPpTHJjtUzw29WHLvB1PzN5LdMkuowphf9AfQFm",
  "key8": "4iDWKBYYmcZvcncK5ipvhCqDikxeHfmXV7TrSZ5WQnfzBznHiaQdBGwdf3CiVo68jPQzJ5H4MLBHpYcaUGSwFaTh",
  "key9": "5Rjf9eAZ6EcJwvEKz2yp4wPWvdKLRgAcGctHz9mkFL4DhEZQMd6gA8m3gdTGmFTXpEZ3QbRN1MwKx9vUVwJkkXGT",
  "key10": "4UASpqPSrHZnWZ7PLBSL5EJHgmKkNnwU4AjFU49aWmZbA4jH4VTkaswskLFnodQRVT3fiCqYZ4ygyntAB6tig7QT",
  "key11": "5WzEcKrP3bQowLzTApaBXCxMtoXv2VFtHAZmxWdt4JyGjYiFnLQFhRGXSegCkS5imdnXFUg87mmhpneYkqL1ofXk",
  "key12": "5Vx5R2aLkJuVhi32CM6khcLV5n7J3KuNB1EtN5R7G5r7BTEUcJRrnxXvBrjXPWL3cMfdqBkWBVfxJTHqnMjPNVmc",
  "key13": "xLhfpNufkN9ngdrPAXLT2vbcyCJTqh1JtYrgJLor99bdLn6v5zGQw2qYJBzTiMfotbqfckHjFUfTQ3HaUMEYcXY",
  "key14": "2NpNEmUu7dsPdaCi9hErbDtaDKMQvNBLy9rsnpPy2v88u8ob3yi7Y4wD3iNXtjEYWtUwRkpf2iqchXEAMiWp5vG6",
  "key15": "dA9kkL6VXgVVyPGjgiDe4EYMVDYeDL6cga2aiKPWR9cA9RcmSvoSY8qeKgzzwgg9U8X7uQmy2mP6tpZ4vmZzBPu",
  "key16": "3or1qYf6cnAqapxkQx9xV37bD4K2z7uFPXA1cL7wFS5RAjxRbJHRiffsyisUuBzN5am7LiNHLKyjyxSgdT2Vod9b",
  "key17": "f4z7EJJmcFB46oZHtYcQvaxXffvewfRC3oXNJdaDWh6wdi3gHL944WDYGPV1Pe1vqC8Qzfz3i5GmbJ7i5tNhbJy",
  "key18": "2kkPqTCLW7drU4hFBdg92eKoYj44PMPyUgsWeXMTCCQCCtX5XGXM171991qLwtnJtf2D4hL35rmiUHDibWbUpVTE",
  "key19": "24mvQBHed1ViJFFyF3LHnFrSorm9tVE3DUn9XUtPdnoWyx78Qk3vWD4zKsomCadEDNMzZWwjygetgkNSUuA46M4Y",
  "key20": "zFoL5r7hNPre7isAFEEWwKevEKCTVgk8a3uBbfHwikcG9N1atjMPVHu5NpN58aHKXzjzkCiLF2UnCdopSjxKcwn",
  "key21": "F7J6JycamYt9Scs8U8wgFnrPNv9Dbh1fkwQ78TxDVpFBJczGa9rfzvnehV7kVzrcxcEGXk7aAtCShHvwDw1Rrib",
  "key22": "5TSnguwsZu77WwmxXhb2kiKYUfTNXvdDXi9r6ggngqhfusqZht2cPmki9QxHMDuaPTfUBKSqPXCgrET5gzvwg5zi",
  "key23": "5Whw432kfqubb3t4Ufd896Ts4B8maKHjoaZCE7zkDG18kWasLEKP98Mcy98558vq4BbKnfyjQLU8FEu6j9KxBHs1",
  "key24": "bZTJSe6LkJuTBUQU8t2TdaT3b1PxJj1rJFNR1wKdpe86Xv5wfykDQAdDAwGr8xeJQQZWkARxiAxJR3PSU74usiF",
  "key25": "3Kk75ejbmQEWFp8bJzuJbnZprCRWev3X7TuAeAFJ8P8oxnBCZ1Gx5FN9T9u1jmH51aqARRRQUHpK1XnoNcZwSVoL",
  "key26": "9cyyit2mMHzfnPKvS49R5kUvdS49GVWZuwczT4jKjRsAXFD4jUWQeFDZT6EizhhijgEzMb4HATxqVL5TtuVybjn",
  "key27": "5i8s6CEYxcVC5qyfNMm6FZsQRs9Wg67cFG6Yu4HnLtT95rpCptJc6gupz6htjvtf7tPwdUZvyutmxormZNCCFMhW",
  "key28": "2LgxmsXdkkZRY9oEsDsAGDdG8mwL4xDXaQLwJqfGniiktWyvAo3uCnXxn4osLcsvcXEdt1LUR7eV4SmQpe72HJkc",
  "key29": "587AaLD5ewTTDKj6E1mRc3oYdSJJNXoFW9u1nEL567bL5CdU1FSVu6SdCLKXgrZaFfGfPyLVqN8gwR4ovCWmnZzW",
  "key30": "4XD7VfzaS2jtfoJFbpQ9FTjzCBKuHDB5Tsc87zeZ7kddVY19aWLGzB5JdCKyPAkb93djgRd7SDa521p4UTGats3m",
  "key31": "47DhsJKKosaTDT1E5WwTxLA99uRLHVsQ8kZagrDVTFc6gN6ygPMH5JBVqA8FABjCFhLBHbDjSXNYax3h7VRQEdqF",
  "key32": "wuyuefR6i55nec884hoN7ctKFvuyvsB4fL4EBu1phQF5te94F64b6GNina13eDh6QpPm8wGcoNegjCS7VKVeKS3",
  "key33": "63X7cqsX1VGkG9b2DSFRenRRZauuCgJzi7LkgGYJwvZMHgbFGzbEkPzMVjpvo2gEXBYxQwhyvTPPZvd4mBXAFUEe",
  "key34": "2TSEhNZVeATJpEN7XpAhy1RBUNf6GHcN44jVTxTNya8wDxpnd9e9nyTmzMapb2ose7jQktCzpqdbskVR38ZnZdrQ",
  "key35": "3rn3JmavAk452hamxnjHV4VwzA7yB1mZopR5xRrAkN6ub6TShtmdW2TTmbhxNQ2rXKSuQFWho62yV1bH1NDe85wV",
  "key36": "3WSPC1piZrQyeYDRvapnbZTAidJVnejC1D1VuqEEEkRNopHbHFYkZziRUgAKpgVcXznhnZ1Z1aBpb5G2NnqJZNGJ",
  "key37": "4mnYH7Mgjddrtt9qKWKXgmXiJ8RjqzyGLfyJ4GCfoAhdMaYurYUB2pnM1aUvwhooFipARQ7KMFNniQgfnjxp5P8p",
  "key38": "4HKLBqwbiLHgzySqdXxdPYgUdvpYS9TqUgi8QLuVvgZJ3yqDa4tNnQrMPo55dEyDTLJqfCzqQSEo56qUM4mCUmAq",
  "key39": "3VTVp2RpvShUT1uoMvce2FEZ3FQTn8D5zzx6rHhBhG78i1eofFsnYCDkd6VuRB5GV2zEiaejLmETm92YDH3jw8W3",
  "key40": "4oEFHG5S9LQAZcQiZT2w8wtTHB5BH5vgY7vBPuseD4EGVZKDhrsR7JChrRr3xUUSGqf5oRXFJ2t4jgSzR88tggPf",
  "key41": "4V6LtytXtdJjXP8QRivEgixqTsHMT8TQEkmodUv7Uocz5ooJ2zqRxAxWk69Bbf4qgugxk77rLjR6aw7GqBwT4Hgk",
  "key42": "1bi5va6iaACFDuqGd9BGSPoNTb7Ce4cixA8xMVNyaMMSjpSyHBamrLBzXXA9abDLwCxucJUpNcHTkXBg336STcL",
  "key43": "5SpfgYJjT4XJ7a4iEeYuFPySkC14bYEhFno88zrU1qXFBvrmQAzDHua9UsurWwKbysnQiwexfKWNig1YTnq1Y7G",
  "key44": "MjnuwfBrvbZfMZUVVFHR12Nq8PV9WmqZKTRdfTK8gosWXVmkaj1Rke5zukhK2R5ytEEheKKYguoSaHszF2Z5Y2P",
  "key45": "34s54QeGsamAYkxrBAd4Ew8gTBH8aDibagHyhatVMfS4GAiDgUcxkkXvyrz62swfJXXXqZTsmd4WHAfxVuT6fFrz"
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
