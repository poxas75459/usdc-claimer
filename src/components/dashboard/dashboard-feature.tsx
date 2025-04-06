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
    "52ga2LLvALB9hcYKz59iZrPqkdoPeadjaiP2tTe4fYEJu7JVEaKSE9SN51kS6SrLZfnq15C8RjLNk4PzqZQQPmEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bCJenqPQwDgY97jLsGfa9A7xmTxHECYXB3G3d2s2rum4qufDe7QCBrM5FvwmuhJGcv95LavfCT3nbeTXXpfzCAp",
  "key1": "5Bm3PYabpFZ25DBic2z4GaPNQuwhWt8hno9oNUzXHez7yxFAvUpBy3iKBK2dMs3mAs9rAh6JwWtGACLukWPSB9DT",
  "key2": "5JYTToubkDkxH7KdHx6je4njnci1mn5aiLh2uu1hr444VD5rkHhJV1kdViTsuraJ1wWwR319zeiPNYm6pX7Mk12b",
  "key3": "4FhbdyGLABhn4A2qA3iFyNiBZp3uJFVfW9f6eGZq2AP2tLSLjbBPEKHDWT9yT3BUuSLqt7CgZ2VPeB5oprzobViq",
  "key4": "2Kr7yN5gtzBDzGruSAD7CSNZ1ZCqyKJB5B4vtrGvcufTeGej4XbhbLnQayqQ7oiU5KX5qnk1rZCbguLZvXfcaKgx",
  "key5": "4sxiLpjqMv42RGVUenkf3QbCSZyoC3xsBUimVugsMAtFUAimFUS4KsGxpNCLXZrtdcVCmkYbg5uJhN5R9srEE6dC",
  "key6": "5m83HKwYEf4zVQKFoRRXBfvk4KN7GysAbnLa1XhHNHoK9wea479VQUFhEiS2j5UuW3EtFctGTkLU2bKBt4m1kT29",
  "key7": "3kx6qMdFq9JX7FzDJPYRYVU2fMPgy6KmF88b5En6BH5JPRmXsjoyKuXz6TB9fVL8nicX73CXzi2UfjFysUiGNVKb",
  "key8": "3GFBGSGgKTCiMdqgoMr4QygTAgvBoMFnCVRPZvnUYQ7aahWQe6ehzhvJi93XqVsKB9b8QvntZjeZiUnrmHFBZwAt",
  "key9": "2Hhmr2YTKqxFwsHYfHBiYAc8KHBwRHGphE8GWeRNgprtUT49exxXKTBZqYR3BwstJe6Pf5KTc2syWPTef5VEv7Ej",
  "key10": "4huhRVbLGfLDwVV5eA9p466uS7t5Lfvdc9af8jNpWakJHZsXUs4bwRPWLbQrKMsyN3yBKTSbKcSpLxPF3NzxLoag",
  "key11": "4pPdcpS18qa4pFCCmVy5oue5yNQ65ScuG6BCNyYxaJCMtXcfEbRUc75J2cdrWNwaQrVsYmojagiFsVoM9NFo49su",
  "key12": "3A4K4UfEqiS6wx8Ze11MEv97p5GUkE9NPUuFHnALV8Kc8FnWQSjaH3FpcqE28hkMq9VB9JjCtbN5ifSbZeQZaj8t",
  "key13": "4krHsvbK4inNbfTuG5vVRZtVHrZvsC51gA4xoeomuCTmGfBsaQwkyiW56a36KzfYqnQpvou3f75S5e3HCxyNn7aX",
  "key14": "5pvAZhnFyQzwmPonbQzbDeJHgrm4W4y62KK6BVYeGo4LoSvmSFuQhozpg1dLepmsM9v6zsGtHbeaxFkbzcx9RRfE",
  "key15": "ixGAKkKnrTYayfAgRgnRkd3zZGL7G5RxNJutyd21L9tZTtc7mjr6ix3DearWtED8CN8dYuizZ8m4f29mYuK2Wtj",
  "key16": "4AFkAjq672fU5hyh7Z4Czesm1XVeiqvG3QFU7et96VYAFUK7TmSc1ThCGFcY8VdPyVWHR8toaSnuGsaqcNsJMX4J",
  "key17": "4GUBidzDSdgcFpouYU9rnWwoWDTbevdra1Lfh1DGwWwPeaDbp3Whfm7inewMk9ZtW8dhzCEvjFCgJjt3RwVmiPzK",
  "key18": "64vRYz4TiUjGxdytmKkCjQusAsz1YTrmzpzrtS1UTsCBYhRYW14GJWAaEVPE3vtoMgh8AaeU7xgVM9u2Acj9LuB7",
  "key19": "2CA6fDqjKdspG392T3Yr25a8YkniohVJyz5tPYqixRrmKXYVSNWXVEAetahEXocWynTAxYrJTdM8C1SdQ9bUeFLz",
  "key20": "x7JeanpHFZdSLgWVbxFnjWJnTiAiujUNCnG4zc4M8KPJhUbDo8YwPsmi8fuF2L1A9WPiKZU1inFcaMBQkPEGG6U",
  "key21": "2EDPeKVNYmK27JWHWAR8GizJzMDNAFMM9H7T7oPg9GnaLyLi5EgiMz8kmX5mNWqcNKJuF3H6xShi9wjdjrmsq74S",
  "key22": "xdFm245Unrnb3xzCbWQhUAsFnbi3siQWqwnHdQou854p1NvRHCbTewtEQhXijpv7oJa9HELySLStvGRBrUpd9Fb",
  "key23": "5B5osVGwvNCr37GcdJSBJZpwK2Y7yaQowkjoru8DuQW2wu7S3aiNHD2ocDFR9zDBeESnb9TXuU7fcyA8uNneHpAb",
  "key24": "3kFgmrRHVYrsSpWUKVermaAU63xjjQhhFnQKvXN6EBHEMEizNL1b1PpeDAgUbZ5aMtcEfZZ8VuD5JvpLEWHji54p",
  "key25": "9djwBA9CnsQj5w7jts7yVZ62uGBMaX71WUJRqa1mPdZkdBp5HSzHHA5VYZR9efj93pNyvZnbWrGkmFKnX764czg",
  "key26": "3jHXN2Ja2g1E3wcAeJ5jC6hzJr5kPhHaZ6vRXcuWFNbft3Zp2hsxUicPR9nfF8d1RPFCY83C2BoWkt3TAojUDLGm",
  "key27": "2miDJsYqRLzTmkpCPJioiShJPAA3hnBuiviCotF6ByAhMCSyFurU4YLTSX4osdFDzh8LATJBLFEf5APnjoAbRCvm",
  "key28": "5Jriq4MkCmf4sLrhUjT4S3Xf2rA1Tmh5ErEkGrCAem2w7pvCnY6GM7DTi6TwcMdy16iUj6wX21MnbcSYpNfS9Npw",
  "key29": "6j4iu73Qr9uhMX9KjWhunLYRyq7ZLjn6HvmBpSnyWBaePVGCWEhNEngWFeYKat7XWt2dGdwrbwetJzkv35Suji9",
  "key30": "5GjRbvkzHAKhRGtyuEnh33TZCGgUqaAGht7j7BR5iMt7MBn6wNzRndCiwA2GEzGVP8LqU2YT3F1DM7ht3ytos4rc",
  "key31": "4whAvhVcybbJG6kPZLY7zsT4n26nKEscQ9UTmkcac73ZuFkwF4EYp3QD25CFAjifhSb59EdCbKvH994XfHJ8NYqD",
  "key32": "2GPq7hHhhHFPFkgzPMDURQE1nZmERNHmoZHmaN6ksEAB2H7WhNj1yhGoeGyUn4pVQBjp8tQ8o8GG2M5U47cLeqjr",
  "key33": "4NVjahpWzvmqo8Mptq2FgjHdNLBEsXEwcymXBysQZFDfNXsJxJay5ZKepQrSupLPZiZLXrz9zsGXTW3i62oQTk5A",
  "key34": "bmrvy6qc615RAL6YCbQvC3JSUYvQ9evLfZi7KuTb9PbCJwdzjjSYVFTiJSUDwqVfv4dTYDRSLo1Zd7LjjkrBxzb",
  "key35": "4QrVvoLr8iDcYoFyqHb9FzxNd41QCcDSsJnQmZbckbEvbQUvh6Qm6DZkuu5WJQsLykuH1e9u5bgvmo4xBHjj18ro",
  "key36": "3Txd8hGew1GdL5KU2k2TQf1gw7vD7xo8K39Uk54i2ZFVvnxuaLsnEi7TJW7dejELavsmpJN3wE8x43X6E4CUrfD",
  "key37": "2cDRJNACB3QJn4BBZ49rcPC8CFtsbGbKtgHGxXDHfoZg3L5unsmBPovfZChuUthjP5c85QsqMTkLeiicvkYQtNyF"
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
