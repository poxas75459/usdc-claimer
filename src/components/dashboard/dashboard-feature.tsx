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
    "3FYbWYo2xGjLR9BP15BSg3G6jqDcCt8WRdsETpdzdWTvPGXMZEmw8px7YkZRqDuyBkcyHJ1BCGQACxS77dy4tbFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GPtR5rFs4hn5D6HvPCNss5KW82pXr6MSyagT9WYNQSqzqnce8aPVxWivZju9SbFwBuDqxx7aNxpJKjXQLm7ceqV",
  "key1": "dKKKa8NtmUSPJnRTYEUeyQeai2ddeCPztANyYnCMUeLyeiyMReytRhPBGrdQjAwLHkKgyjG9rs7CQ5vjb4PhwaH",
  "key2": "4gkrNwWUKNWU2Qs2BuPyUdEyD2kimJNfp8jNxYEkrzjRK2oRvHjAeWkfL1UL8sQ16F86c7DeSJsonutySVwN23QW",
  "key3": "2W1gEJ1dLdq82WgHrJxaJxpbJCTf5YpEyvnV11sJ4N68AnyGdvUpSCmhGW5BsmUdcT5ybziE4sRhcjn16XJUoamv",
  "key4": "4naghH1tveuiQ6Da1qRefevMP1q1BGfmTdDBisvB6z5GoMpWj4REWwyXB8CsaBQhPPsh2fj4fv2Q41uKNBuGieHv",
  "key5": "4vLNNR6nYwfYUM8c5mHaTsk26UrcZ3zfexYjwVFw5T6bF3HwALCDwxhMTYTsrtN8TCB9tjBjFmWysK7WBRSGNhAQ",
  "key6": "HMsbGfTXFCS7nXnDqp9NUSLw2jYAaS11SgM5tv4ePWCJDNwVaCofkioYcZKkd4WcgH7ETxTAtTDzc2NMya9FqZr",
  "key7": "2zaAfVsZL6zV5LRmcbPv1nm4ApR4KmAKj5iZrmNKS1fQL2CH8pJLYmxDpXMd1nhAuKAkLH8qgvLCVjzC5a2wVxgD",
  "key8": "2QfmePR4iBB1nsrSWsJhebWTtGtUewZp5JJAZPfjBbNsWM1KNXonnQ6YB32a3qoMcWBuxK3tZHphGtyLXHXcXf1h",
  "key9": "H52PGrSajYr3cFPQBXq9iaG6HoXAEVKK42X6ypMCW8Gzs3rSTpzwf9irfn7ekYDUE2rnK7ozsAypNv95gvK1KLm",
  "key10": "S2J4FaPhmuSZDrrNoC7DXDyNdnmtF89DLDHyj5ntCb3mM6EggpfvLsamDRdMffHwSS8v75bmP2WSagxJ4ADcpeo",
  "key11": "46LJFL3KrrJHatusM2ab7UT2zeHwuNaSVgqwYdniWwEoskL9C9S6zkyhSreBbUjAnYBe47wD3ZJqoU2QkwwnxJfM",
  "key12": "5SL7CEj9cQwLHPTYJzPowBq9Ju3xDATBYxirSyvP6EvgWdyLQQ8u8TYpPuCzT6hesH6ACoQ3UuqLi8mX2XPKm34X",
  "key13": "2jUtD19x2AAZvjKALjzY9r4Wev9xAvnEhcjuATXXXbF4BMcX4i34KjPcWLCFGYTZ4tPHdNsxmpujzWbS1bZYZwFU",
  "key14": "58eDp4n6yJocskaF2Cgc2ihZRQAtpXRvhra6kydKkJdZ2Uu3Z7PN4U5oEbGsUGTpUSHwnAsmvQSi2Gzp2zowngBm",
  "key15": "57ySUryFVx5zVo4S2Mb2kcjFbz4VchMbBd4ZKhtNZhEwnGrGyhtXmCRjWXf8M8p7Etce8SAo8WNumqGvtYM9CMcc",
  "key16": "5WNWkbjpdzo7f1632e3EXuuk5E5scKkzs4brTcmFRrBEakM834xPWAGS6DTWejbUsfUgjQF6j8cRifu6YDrAucpG",
  "key17": "XVC9sVf8N1kygTCBt5p5f8oUik9GAXQCDSzKAJifcbJDYPx9PW1U36pvuFnCNX6VE1erPFVkKzPUhiqns7RBk6D",
  "key18": "d8q2VaNwrAF5vyj5UkHmpy37bZ8NgJaMxzY1Zw34HEyvtTvkWA69PacjQrjkTciX1hhEvn3DZNbyRzfwbzYuift",
  "key19": "2yKZoVjQt398e3nr7oyTnkYZdtr2BGwoAQZV3VxmZZSgaKW79nNEFoZJaXZXnHdtaW7H5H2Znp7PEMsQ2AByebsS",
  "key20": "54fUAMABQS1JCNDFFX5FmbBkJWk1x1qKpEzX9hnKJRiywkTtZjqLtf2hA8mzM514SmffMHuJoqRahnMCjuJr5YQF",
  "key21": "2gviaBksU4CoPN6mFGoduNq4ZH5HaxnsYXwicffBSXbBDgADevwdLDHb21xPZeoBxNNkyiZZbeb5Na69mJuoWUZb",
  "key22": "2t4Q9qqPfAhP3E6LekvzWH8uAduWGuRX7tTcaPUwp587FaWkXvgViFULe49GRvUMKWWP8UVQGRYf3vLHkyRykyRH",
  "key23": "2R25sDYV4a232FQPdt9aX5FeqPC2bwgHVfA2P6y2LdjFC7BPFwYo9C7medLsnAfLvt9vxYXzRCDaXgrQWQ1JnNrF",
  "key24": "2yDihAJ6bS1ivqYE3PzGzcGjgVTi8EURGBStEHqDK8ppNqnjfyUVdMVMdhfRMG2gu5RxJS6fBYtk5M4DhEcvqbut",
  "key25": "2hrSMbmaX8L4uZFM3eLvvU2T7uo72PZvNqP4XRgo51vPoxhpn5RTySaMjE2rcGsosG8p3rqvEwaLmr7R6CoCXm46",
  "key26": "2JcAjt3GLGmUuUqtibHv9dS1NoYCgNpBmDntqBfLr2FpfjjsSFFqwSVZLw9CkHiHzQY9Hk9c5JxKh9ZiqrmaHAHw",
  "key27": "G8kkGEK69PQgyWg4EDyrnoQy6opTz7UQGqzjTDaCwKkC4Qwx3ERVk5UBPbqNTxY9iWvN71DFRE8u2kyhH4xkF5o",
  "key28": "3n4VpKdmD9xptE3uj5KSbvz6fJnAjRAb7vc71k1vjtevwUc8fb7JTxiPvE19aqQy1qCzWkZit6zanpLkNZSMMrzX",
  "key29": "5kCEm2DAG3wDDoZpc3BYHZ3aauog3QS3ikgyN63fXkr3KYbvHjvcxC6oSBThfRZJuUzrn9XRZnvThQE3n2MUQyWH",
  "key30": "54qBjm2xN8EANNhaBoXZprYQQVFMFivaDVf5rnic6qZdeUDNP5ZpYErhcdGzz19WUHMi3StChKn6LZrPwfN8GRVC",
  "key31": "tBbTPxTA76HTQFYpTzgyvNn9dqZChWcS1rKYu1ArJmHkyd4WSgVp34d61316payTi9a9js1Zd9bTDisETa2tjeY",
  "key32": "5MA4TC3wUrJ7HcMJUr5FjRjwrMruJuF6HTrXmZV65NphhhxXbL7fJq1yN39oVuoMe4WxrkpYpiF4GSKfRkWNz5Pb",
  "key33": "mQMLskbQZokobg3cLSsKjjzjvuMML6nWb9L2YGmFyLpm7br4N9SpPvNNVYHxLZgEQp6EBp1oMJhKR54U6KRK2fT",
  "key34": "6H7P6N6YRNffLasLnzmvBumKPfS2TzYyYwKU7rF7FkH8AiFCrB5EAwgufBSyv4K6HT7QWE54AN8btdhWK7wiS3Y",
  "key35": "4RUaLhoxcAcARh3KnPrx5rnNdAwLkejDY74Kab8EzWamf886a2MWqBLCgeo5KKi5WfWxy44KQ3Mn5aMxiMfakKRL"
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
