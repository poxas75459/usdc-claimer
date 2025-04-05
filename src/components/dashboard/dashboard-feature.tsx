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
    "2epA2iRecg2YLMs8zJY2LuLfAnqiEKJLCZsUSrgNLrxtM7ge5379MZMMMukHE8khApkjA5t9EGmbPLZVd2m4YT2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DBY9oPQMG8xW1KkKpn3JWBuxSA1nQYNb1haAZJtRrMYE57myKnMTjcxdKSTtrRyoLvNDKeArFCK58MFR5tmZ8ca",
  "key1": "2rB9fZekyzqNvN418y5hEGma9jVW92vnHSXmvnakH364JPw7k6bq1JgiCQ1xheQ2ngRtmpiJYjsBcmSiHEK8qH3n",
  "key2": "4zRr3TFwMwHgpo31VHfryKi8oT7GKuGeFMCrpp8fk2MeihLDi65DtnxEXJtDPhXmCzwHgfaXPd3i4CEMHt2uvrmh",
  "key3": "3FZqZkKvyEVpC45whLYarfVhXQn56VUaZVGksY5Z7mvQp4sUm8owzactJmtb7qYTuHK38Ni3jLkVGzsxKJPZuqnp",
  "key4": "4Sd7LUcf1M368teAJpFdiywkpwsKxX9uMBSfmQEJuyRsp1wGETmQzc4DVxFbKumX9najjCEQ1gsMctmDcP57XS9K",
  "key5": "uGFyz51J7LQm3cbJKCYm7AKzsrqXvhgQf317WqQF53HDNpKmgPu2cRZbSXDiCdvFuhLAEX5VXxUhKf924CwRjbN",
  "key6": "2Q3Z4Q4zkJSuaajs2k5f1TJ8d8ZaGntAcwzV43QmoyYoVeinB5B3ha16kN9w7zpT4Emv5nLAL9iW4XNMJUMcLJHW",
  "key7": "64zD9NCFDrPvULmnRAncTeik2sgmrWVDE2UEq8NnYigmrPgJY9kJjUPh85b68jSwgU8vwtYs2gSXnroL1Va7gshQ",
  "key8": "sf9cfdmVK7umbsxSmxhXdBi8hq9SC587Ub17js49Sh9ta7GBdNc8bM3FQavVsQyeVVKztNk7DtbTMGq24q9sH7j",
  "key9": "2QpDoq3tVGQkvDiNPKFRWFSrsYoTG7iiPaofZeuJzX6itzCyMF93Uv2u7dgznuDtKC7Zz2W9XJXq3cD1xVAWwMRU",
  "key10": "1AtSGgbFZhf1XvEBUNSTTyE36EYMvQrQDDsTzwiWgm5PeU5g9i9XCMWzg5rxA9zvCMHA7zUZF6bCur8D7hw7LjP",
  "key11": "2HcLbF3gq2VVgaFNajcigXcnzDmyVB8cBRSDhXMJVAjF7z5wqZLGtV77uuxZ84x2e3FPiT6r16ciwjPh573TPuH9",
  "key12": "46TorSxpFeWnYFmwJPpFEgqTAb9XH3gmN1kbGhJ9i6Pu6o9vcrbkQofHzLxuMgYmSENthCVyQCBJLBNg1GQGvSLX",
  "key13": "5N9KHjS7xw3C4sqo9B8gXd1bby2UjAt8XC89BXC1syr4qdQDUxi9KDbLhbKJdrjeFek9phaKGJPZDewGxmxi1i1v",
  "key14": "W2jW9QePiUA9gwaUeSLSPpUGGjjbCwqYJmCkwRE9UPoSHcywwwvfet2ExmBHFWsoJazQV7kPUci2quhKtmwENnK",
  "key15": "QuocNSukpbopS7hvsBgyj5czb49peXJ6EcRSKERHbBn5dQQoFtsW6qYNCayuDdJGEobiWRxLJczx8wPmQsNgXEx",
  "key16": "jHTA5YqdvKxWgFPDSN4N6SJxShDgkWtBAse75eNtwp8Vra5mKrvtHyRdz6KGQfY85tZVwGSZxhZr1rzbGFoSmhu",
  "key17": "5kojL8LyzDD52FjZF9JjJzeaoYQR6WTj2SJwoFe6TCUqCmnpWmsu3ZqVzz5tW1sBbd3pKTH13hAGTayky5wFRxhi",
  "key18": "55c3VtFP5kbBhowYmZLkoBu99KexS71S4Vtj929dR32xE1FMqfHZridtSoszuwmrFUYusubS81syUjvDrJt9RXVK",
  "key19": "66GLJhv6AQokCn9tUUkjfwr38u5KpDNdHBZDWfoYNo9PonVNxkQAmQLKDJ1uMvC4FcdFCqeFUneJ7MuxkEcxZ383",
  "key20": "3yjzmwjGGUx9na1uUpSCUMRKgGvcQBKQYz9f8gB2ZfEmfToKkvA62CdsRYz9oEJoXKndvP53AXsdHWreWwAMZjdT",
  "key21": "3jMg9PYhqZLVckZUG79sn17RqmAxJTJ4L2SQDq8LbkqEeogUAXdszSwcKuA3F8hYtjqJJoRoM7xHs5rgcB8WhiWA",
  "key22": "5QQpZbqG6X74rbynoU5D6oG8vW6mNctyzoGsZx3wy9vmncgmujrHPuWxeB4z9PYT8w3CvM65U2gCk9P1MZ5DBqac",
  "key23": "62FX1FLH25pSjZDbYfLmeD51aScCVVbEjNMdc2GJk8WC8dNqaiXiM75WzgBQS6F1bektuECStT4ovi2wHpX1dYSy",
  "key24": "2eaEXoBRriitBsC5oEjwzmy3DcE3b7WxEmw47apWEVBFQqxwUFbbPwzUirWkmxm2mbeUgy8tSQCrSrim3D8JEFPf",
  "key25": "5JvXeJyJgBNEBvfRHDsZnwncziRchkKWfyCovT7xEjyWS3ARCqixGfJpb5TJXFVUoXwU8KJvpgy7J6gKBTMDV7xF",
  "key26": "4nVHGn8wcDjv4z9hwsb55bunap2a6X3mzbRsZATkd6itu6czFMYKpuwTXSYHL6uBj7bEhgdhzjMJxkzppvQdS8Jw",
  "key27": "4zuLYmagEjYJh9V2ciaAq1eRNYkmNAKojj9Ye6mn5yzJizuU413B7rEfjxThZGRj5spqQUxDMsKkU5mpdE7Ap1xC",
  "key28": "3EEhsPRbGnbvCoY6pBhdMQTmTqHLXvLEMry6iFcCsoYa3UV8J6y6eqFMTGgPk4fARu8zAE5UGkzEGVSK9o2pALks",
  "key29": "4AYERDykQiKHSYTiqKtJxegK3p8zrsqLCrf7exptJqLPTTfWJR2QD41PZMMcJHHNC3oZSpRkNTfjEUqWfQYwqAg1",
  "key30": "YwgM1aP7yWfqspjJyGCAExY5YmDx98QKvjR7SNKZc38fXfVP9v62PnyfrmEtdo9Uyqi3zXSTFUvAVagC553bYiU",
  "key31": "Bh894wJzVW1cedykeLpNkKa4Mz2tMWdnsmtBWWX9LBAxiztPjVVTVoAGNNZU5rDt5VDjQyyR6XdMLn8A3Z71ZSi",
  "key32": "2Ppgxk63F36qSKxtdniWk9KLtg7ELij4FRtannaJ2hgAHXhS5oWenTbu6hvEnBMoJBuDLKdssvhZotDCoPz7Jthj",
  "key33": "4bpVf6Qbkbi1SkwzovQc8RiA4zJRHzxRanMYeF4ACN7njPAKv1DyH7WyEwowV8kfZ2xjKJ4Mvk9EXBUgexr65Rxp",
  "key34": "2yty7k1qNJP7Vu47iaBZDjrHcaLDQ2KmgYE4KsTo98rhgKwr1hQqFACKYwxAeiHg1XCDjXWosVVyoJuMWMW4TtMD",
  "key35": "2UYszQHA6xjkpwEkAJZFEPCFWofeDBTsPBmoZgCh2LPoTsCi98HEYWFfSn6JdvfcCShoYKgikWoQmqNeFAE7ZM7C"
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
