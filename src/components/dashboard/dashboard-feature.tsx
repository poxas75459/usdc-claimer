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
    "2F18ZCFhmtD83VW6s6exNeofnuosgzjuY4ojK8gPj3HYg74B8vdaNjqn4SyzJad23CYa1isaDLzz2NgN2x29oPx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rs8FpRhzqEmCctW2fBm2FUBmoK9HGuRowksw1dbmxeQ8opqxb9TZgZVBF5DKHycddN4eTsN9Vx1Aovvwj7qU7nx",
  "key1": "5JwFApVWnr9whFwK2GQnDJFWvGM1j8E212oSa4JWSMmefZHuzGDzSJybdyHroUjwmV5biNg4Px4sePd6hYrW5yW",
  "key2": "3i4EmdpmLATQnXTeDc68Z9sS8J31xRAjj2B4JRuRZ7ZtN9JESt5EVuFhhhhtP1G8h7u14cg6ALtkhnEXkJwWnLwB",
  "key3": "52ddrexn5qZ5V2GqmAz3w2PP9Ph29ygeqFeAfU8cYN44HLYh5wwNEkcizCETiswwiQ9CbgHfRtTBVpZuUVHq4JCt",
  "key4": "4nkbuZ53UAgV8dpMn5T1g9nsok8PYnJozuD2zL6gsGPUWje2JVrbNTKBgiKJSqFyWsFahhAW7MAmzsXgEvHzaDM6",
  "key5": "3xmPWxnsTkjX5GLN4zK8V2gXSU28b7ft65Gq7sMjKSn4xd643rh43FhdHv7CuRmdXqBnTbfAxTZGPmaBQNp3C3Qr",
  "key6": "3jP8E9y85uWKZ4u4RXWbs2awdLA6Ltpxa1msEWeiv8xiy8FtdaM7ZARxzmhHW5K57ZaeiazFXwFu2aPm7bcL3G5b",
  "key7": "56ject6X44RSsC8z9AuJrL2AzLuX8H2B5wGqFLpz99Pj2496KT1sydBM3CF6KrZMYfAMQwaPNrVxVLwSrvMoxwXa",
  "key8": "55Hdy4BLY6F9CYXigcbbMPZhBh6Ds9N7UTxhwpp52an7YxGEnoRqpcnJHN7DUvqVst1uFVwLLXmMYiUqTDXSeAVg",
  "key9": "4L92xKPLh9dVGn2MQxGfz7c1TDzrwGiNhm3JpnTDqj4RcxDR4RBfKT4b7tYMqUiDrczgqkNrNnio6MipG1pR5SMp",
  "key10": "cEACS7HjFbSLJdRFMHZhPWXudCc9mUvU4rPq32v1zjbVb8dqKYHKeNCLzcYdZ8uAUatZhBRGbSV1vnMjJfi9xtt",
  "key11": "apiACJj4fEPyWdcxPmgGEFFQd7Bf2ihHdrdAgFH3ZGULg829xAQjnRqNfxNEUpKP66fvtFraXHzvBRzDnqnLHYg",
  "key12": "51XYhbQcGyrj5JWszXfdY7zvWgskuGESXruTQZwDvXTCXaE3PsEACRQCU1vx8cSwRRzMmXa1xchTgMfBgMEcsDaK",
  "key13": "FMxVUf9WeYYFtdRHmunsH86Hn35eqrhaE6MrWxq8bqqdoeuebYds8u3RAqffKA4EZrtoiPRXGAPsW4N9FgjqMn8",
  "key14": "4ABavmicyfaKfrrhxo6WrB6sSwHD5h3K1LH7e5CSXXQJjBguEKdAUDFG3bZHC3NoRZc5bRojaCjdRjSX6swvTtz3",
  "key15": "VrAc8sDbXfvFFVdxUCnTd2uAqJKFRgyqoiV3xDr7pHBqpgkMWY5cV8NfWGWK6UgtmaG42fyYjMmKsrmKvuPsWPK",
  "key16": "5kKUjER34UKFRqbEoQAM7j5pfRqDdHxxY9wsCGcCdxzcoc4yY285N4HMoYTib7aQtFxnKstyvfYTGaJHZUFtYd5C",
  "key17": "3hTstWgvDJF3sCcu2X4GzXz7r1x4Bz2CrwLD7gYnTd4JVcw4eCzaiMr5RRegZELSkqNF3nQ3J5yR8LS58UogLEcW",
  "key18": "3R1N9ACWgkwNdB3zXBvkxtB1cjuhKvHQYGXivbxfWUx7mLtPVHz3PSXFUrPLQnDri3RmHXEHZyFrzxGwCGTLoah5",
  "key19": "2HWGBBDZnARn91N2eceCU3apycW3zTknRh8CY7roQ7f8qF7WWMhPNL1y5HhTRB316KJnBECfUtDjjAxV1mWNbViH",
  "key20": "487TaZcbXwWsCANwGnrKWCRWyPQQ3iqEwDGtg98K2q78UD342djaACnm2gvgU1znrb28WKkRYr5UUx1q5fg9LhQa",
  "key21": "5yqHmTnT48HdKbQ4HWDpUpRPeHovcxUHsSvEpHqYgvpcW2hSZdZ9cPquSYq14ofrCRSsqi1qTuPh731BqNXZ4pyg",
  "key22": "5ash2DywdbAYkMLa72M4Mb51QT1d5MvxWQeqPH6kpDbfs9QLaA5JLTjHYpReFCcLKBxXy4BaADTeJMewNn1BEfVS",
  "key23": "X5VrMvdBBY52ie7uZN3qyiuG6p2rUeZs1i1LyPgbf84XFFvSacChtdQxFwgB16Tjjtxc33HzwPcdANWZgvJjYAf",
  "key24": "34fAm75mY1UYvRgLCwntYvYXe33HUcSMPEgag1SESpmtFft4aB1BaTVgUBNXQNpZdNh4FRgDUD4BBsFHu25CCbAh",
  "key25": "G2eg8vHRr7oKCJGz8MtJ7kbj7CLbpkBjisUf8C8QoBoLquQDZZCiS3Smyycjn4esrNnYXUssmnoirzp3HFUKLXC",
  "key26": "4JCkHudBLKHEEb5sh4F6mNFWoekZo9Lwb8SNwDd6BLgZJR1jRSnYSAhoKzDittQjykVUqBNnmRy8MykdiVQ9wwE5",
  "key27": "5gKTaAdniKmkUTbw4TS6ToQmCLytrYoiqscLDesMRQU6XioDS8s2FTcnuEnSC8RqMt2ZeenkNym1Qre5oFSvMr94",
  "key28": "xEJ8WRnDaEssqufyoVGiBLzgEqXUT9PrMGwjVLvjYHp73orDLS3dBtqRR4uRfcZjbCHqDd8XBgeYQ9FM3R7CXtC",
  "key29": "515hKqh6vEmbhsfcjZNfsa4yeYpk9cSbUnx8wbrvDUxEGydTcyERSUFYhJj4FJB3rypG9EJ9fMBZWt8GtRL86FKt",
  "key30": "3tVmJ3WXGh31wvoL4eH46PqZqYutkfakmUkcy6dC1kssJYDCFYgcRXvJHNyA51p3rY8FCJMdv4Hnvdgmws4CnvQ8",
  "key31": "2LKxAYusWgbZa7p21zb8qjWnCinXjawdMuUXaNJs4vhanUKvHvQQMzC2TGwNanBJFHKZd2HtyY5RwAdxrNK4uw9u",
  "key32": "63UBn7TqAz8Z9356JV1PmqsHKw6v8GC2nrxC8CCvBCLXgzHguBDUxkZpcw6saAi1pKcxY9MZoPvm7v1s9wiqHP5i",
  "key33": "n8xQCxRR6iUQeah2LE53722EqMRwqbqQPWPcKdEnGXHbu5AqL48tBuRjbkGL8SDATTmPnPGQLzXq5Uxhb4q9mCJ",
  "key34": "3gKiWJDM5w8VE8KoRUPFXUcuVwK1xcuimdscbrGqtoW1hcBLnxWKkmebGf2eA3faRCw4U1HH6Bbn14r9sEzCMK4o",
  "key35": "62FpHGhWokahVe5LMapgZQDzrDQbcAZUvhunLKnEAy9oixWKkVttc2vfaWAtLmpgarZtLAQ4NiT2NtBL8EV3LL4o",
  "key36": "4FpFFWMegc72V23sD1q8hVXH37mHKJjjT7LM3YP43SpUFwqjwKbh4z98np6MjfGBcwYsxFGiAscqX49E9fK1Ds8S",
  "key37": "2gmfhKzDYJpdR8S8GUDrAsVaEcRm98xP7QY4oMtg15P6DWNAcApTSbypjTbS4zq7jNu8LbLCNYbpkBG1BgUJy7ur",
  "key38": "op9BvdrLQqeZJxbMbcpjryJhK2fVY9yudekojR4AhZ1GfJoxcZw9F8Jo7SPKRZQvxDfwrrBBba6ZqdtJQ5bhq92",
  "key39": "3KNfRE6vufbsWKgkQTN5HCPkAsr8enNiTYeWcFRDnBbvRaXaqTVZEEFPswgM6Kcby213tvnFtwR95nGMjzAdxccy"
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
