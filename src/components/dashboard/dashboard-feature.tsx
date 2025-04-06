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
    "2uoRQvCQHQwQ7mdkoeJFUhhQ7Nwbxmq2xk3qx79Sj6L8FcaEtJiuePB71puN1Fa2DRDY6ASHKFCtn4vTkjge1Kgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y7CfoQgHZVdVF9SPzHqodShh7nYa8aAo6h9ZRAQDLJQktuxHPwqW1YC4mZFmEPogqcGWqujKMQTC6sFFynyj2SL",
  "key1": "5Ut4yrmFeTLTZZjPt7ZmTXjwDC9cFMMZKWB4FzjjayUDpEWX4oDNHdmgiZApXbcNauBQrkfi1ujpCHoQtMmpjfWW",
  "key2": "qtG5LtWiArzCaJKc1wREq6TAPSL7pF8arx3KuvUyGVzFTv7pHuybuvL1bRb8GEmNFYFVyjKg8F4772TDj6HukZK",
  "key3": "5MdUeLDQG9U4hmkFK7hjS2ALtscewE1yQ572DyduQZZVF7VNKFL5xrxzMfKMxUozBW2BpXrHTtmb7zYSAwDAtYRJ",
  "key4": "9k9x6wcTM25poVuXrghGww6R7rqaDEoRjwTZ4yBSbupuh13oRGvY8tsLwYxv39kv7XxTQmayoPGBhsD517omhRM",
  "key5": "3Hd8vQYkHAMgtJd2mAjP3Tbc3anNKURW6JdHH5twHER4ZrwGib1xUgkdtppfcqnLZevuqsP6cd7QGxMkd437d1wR",
  "key6": "xqtwucXF9TA4Mhre5VopxQrcdXkuTifLioDPhUsrWn8HfNA15zYL1AV8a5XQjrWj7i2Cj84TSizG4vQpdH7yJXB",
  "key7": "5ATkWiQoXBjZ5y16pvRzKao2Ni3xzBSsTr25PKmmRoSqUQ1GKRWe5WZR5pVy4iYvksv4KwQSG2jJx2YxsLFfvAPU",
  "key8": "4zFP6oqrz9SNMY46FqCC4DHEhLkXnEVQJJb5MQcdPZC4wzTn1T2xWxzhjGut9f5S6ugwng5X5PhZXBCFqkmUMEPh",
  "key9": "4ZZ1VAYofkuaMUZXh182v611UXhjuN6vFbRcM7StVihCDv6uficj5hzEujjFajuDKBRT7a2p2J55LXNwphp1rMvM",
  "key10": "5ruLRPTLAk12isvLdLJhpBUzwTrB93bNS1v3CyKdVNwBtuFKsPokfzoBPikJKg7EAA9RKEj9m5Gkv2s36wZBKsX8",
  "key11": "2MATnA43hrsoTcqhJ436sin6zXGt6WJYGRp8VZjwJizZL7Si2prXBZDvsb2KS56TzWnmQ3rNuZz1mKD6SxTaoLL7",
  "key12": "LKM24enmBNKp2wsLVjDjnT5jkiREbKn9RdPAcunByqfQRD8W8WiUvoDNfzKXswpnJWvSvKhwn2jPcQyCmyuMJGf",
  "key13": "3jAkTWPec8QSoHYkrS7E9Na4WvHNucQZSdF3WXrHJqVm79si5HndQcD829u19iC96nP9ze5wY3GxaUJMToLdtyaE",
  "key14": "9DUbj7Jg1e4Hg66fRvEm7oGfa7p1UWS3GqeBb69RvLE2MxesAvZo6BLHV9w5D5q2jtGc8hUELQN55chn2ZXfNge",
  "key15": "2zemnXQEcK7KQefkou6gm4d3VgCv3zopvhCC3T6TEFGhBFFxjfAu8HQSmXBUPsGFtuBrcNhYV2t2v51kT8B9rbv6",
  "key16": "LEzSiLL6kRwv9NaqRbHeJkj1uKyyxskkpaV1Z6CVzPYw1aABdxYbBBTopEBBfuWUcM4Two7jqsCcrwU4uD9pVPS",
  "key17": "67NWmmxaa3jr9Rwr61kuYhNjxJgcXHMDbGnP3rcW3Y2EsxkKbWpUZV6oLtn78mkp5FCskEM229ztWa6p6EUpUXHD",
  "key18": "2RTjN1fNZfs3RKhQ4bcToB3To5djAS6ZpWXirqQEbwxVf9FWN6eNHZT2EwzR5rUHDNvzkUVUTt6RWkwusjyXZP8L",
  "key19": "3552cnNYs8tEk8jM62mBZXWkHNjA24FWALRSh7tsXvkdNSBXjBLJfa6R4MPRgW6qNEwrR8wQXZbQp5XkNQMLX1sG",
  "key20": "56sCqvi265d15zSzQtjZc7pSJtoXfbbqFGbLsTBkxiKb7qzA2wr5D8BKhe3eS63EEUj39oMdxrGQixsfo3XFVvy",
  "key21": "dF868PhqHMsQh6UHb1QEeYNzrC5mNkAjnpCjBj92SkzSmkuqBkHYaCzrpuStDYC1koxxzu9vVboAMgSFwFFwvHA",
  "key22": "NFM3NbRpRH2PbEmzzbBa1G3zqjPKfvfWpPmbXjrAQaoPcTWERa7f8Fq9o6qSmeG2eNXZv9RBV3aVfDVaaQpjvRu",
  "key23": "2fwJNcGfpCLnmXQXrcsuPab66ScxZPKych9y2ABoJKARs14S64qNmsVz17D4r3RMSk1h7Fpb4JL8RoNNLNggWehA",
  "key24": "3f4pD2BoRJW2Z4sPRjQivPS2wWFYkLKRG1JFLuRVUeEPHbZUe5ouMvXH93UnLPu1dhnkUVcq7FARh2AL3vD41bcT",
  "key25": "2aWyMNa4pQczp6Y7eJ8tYhaEyaJBc52XjdfvTBqU9vzXa4APFBjsa6j4Lwzg1izS85WBUPv52RDqVkkgWbUqviqg",
  "key26": "yAoAibHS3weoiD8gLMqnfPfXf8ZSkDaCF7cVzggo9F4te1EaXV6cjTucMW4UYyNbosER3PGuw4B57beJSC33UY1",
  "key27": "2kGE24esH3j9SeeZ3YRA58LazUe6mpzLjxv3qwbTGcUghVqixa4U4pD8ooqcXVigwkjsBHkRtWqJBVQCvARy2D2M",
  "key28": "3vrvQ4mVxyrjNRJp132d1k2GwM8BMQwT5RYTWkbEtf8FmTknDEKh5CjcvFpzs9EtJgbMWAqjAkKViBs7LVSNwMYb",
  "key29": "2c2NkCgs3vWjufKQ5DFfK3aGwbJvwuD5hRUvAGg23vLE5B8fFvA5n9Es9v85scfJnCeRam4RME7XxkGHyo9nxe4W",
  "key30": "45jE2iAD2Tp1i9o3wp4259XKC7CBEVVEQjv8fP7SNyihZx2u86yeNTFWxC4cRAdjqCFEtQ6Si2Fs9EWtsXouThzN",
  "key31": "3Ww65joND6SgdgtAvKdb2GbuTCtkXxaw4eZvpP991Xtrf4VH3WrRKL65YKkL3xTCrhQFuKNwPhrNZZTQSL3fy8wn",
  "key32": "8rJLwc7XiTWsHvXZ2ihy3iYaTvio7V616VCYSYg9TqQ2cPgMLctcM5KShPu9vBHyrZLqqGXwxVckQeQBGeoRzrU",
  "key33": "5j2dnZvoN97t4gCwfnEdCW8agCTSzBunr6paVsGHmDiFgFevyjymQM22NZtv1M7uyi48CCHdHDMt8Zq6HNqNaHCj",
  "key34": "XHwDe92ugsVxN6pwJxzKFs7T22AAivZ5vbqzQ6RsZpHBdqmteEmzvHLBoH1Z1djESaVKivPEQyF6AkQaZcye7D1",
  "key35": "2kPAW4EDNHQst6kMMJ6vvEmL3EvrHSpQTUakHD5xUGjevi6E1FnRiTEYVg6eorYATuqfR4BCy2UZrNbtaJQoUcS5",
  "key36": "5RoEfSdU81gq6upgk11Mc28phgDvorA4wj3bqLAVGtpcjcxvXqEYmmarNGQCmZQSsHdLrDLcSoVQL7moup93aTwB",
  "key37": "5TaDCn1x1zQXhLKBky1c6KpdpCBhS5UL91nVQ1TMM1jgdoh1zHyN4H5ZD5pBiiuZaeAYESgQQkpCTrpHUrAJGevN",
  "key38": "2u9RndZ4i7TgtHGLXjcmWK2K5KdbsCyEijeaU4LsZkHhKDpWWX9d3x6aTzDP8kQVBWE8pVXyjBkuhEBzKoeEiigg",
  "key39": "MXaaokERAAsNFprfYzfLsoqVJ7NxUnzhocfFxv3piCYfZS4Nm4j7SPmxXm7GxnSyE4w5K5AjxTJVLpAojSL7tXu",
  "key40": "uBTRJdAhwBThs3NdwQ8V9EfRDeQ33k5QKpztKx36hNc7PZev1bZ1pxQoParLm9bdaYaspavZ8wX2wwUiY7c3Tv1"
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
