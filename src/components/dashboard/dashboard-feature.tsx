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
    "2jr8mKSZevrxNpCCgQwgGkVzpSuZ8tiJ8VQi2BomBGxrKvUTw95wwfG9NnWtyiJM2vydKjn8irg9gHbaqXRFR1cD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G2BhchkVZyYmWBb8M1ZAf4uWeZigTvnE4aWaeE7SsfFzvi1iSPckemjcCg46k4sPiUXQ56nL3v11kd5SwSATT2Q",
  "key1": "52zUymShLXm5Hi7n5LYkJF4nTMsYuU7B5yP1E7vLUe3vBHySwJWZBuvHV33Mj83jyftHU9PqN4KQDLBpyRzRpcJz",
  "key2": "i1nS8fCqWpVAXFAwcdd19ZZmR4Hx5hWftA7pm7adV74aGDDBF8Bv7Kgv1dyWntsYCRQEnLxwa1GgPQwhux5hDQ9",
  "key3": "th1b5p1oJn1AZPxsyxqZMA4r7fsw1HkqCGjGBcsDUAuyGBDKy9GEjCU1sFuthpEqCVpnkhtQJhsBThjVHF1kBFn",
  "key4": "3SrNFeXVzKZgvMWjTkuhjANJvMySxgnMbBg3EZzmYiNRyBBwk8m6bzjfv4bTjL3En62XYGCAb49U5fHgMaqtXNRx",
  "key5": "aXcpKLtiom65PreN8N2jjGtURQVScSTG69j2Wpm7PLPzLXixPcFWzGrJosoWhJGeNiJoPEjsmKjtk9Xpnt7VKBD",
  "key6": "3oMTcN3uykcQVwsSMSzrSD3zMCqoeJ62tFCGQSjdoctkkFRbdCtDLCvpdKcxtAYoUwt3pCGFFXs8oiCprMUHNEjM",
  "key7": "tzNKwy1dJZqPskrC2oALdGFJ7eeJ8aoqCkA6DBRx6EnVb2DjVPpe6Egfk6k4WpVv522RFDQeX3bLr9Q4CSBeWi5",
  "key8": "4XrjSu4MLpTW9uoG4oHqgPPHnir2JrWMHzUsoHXEajzKRaNSFBVSafbX9FQkiar54291851pLVs1CfcSwhyixF9w",
  "key9": "29XEqemDEEZKHKdgos25nKmvwKrp7Uns8CWFmPty2NjJboPUaLQwJTRx6ZHUzhU9mV6CCjcri6AKAdGNrT3JzKRS",
  "key10": "KDAHH6FQceSufYWbbrZEbST8ogtmaan4qarkjqe97UhtraCAnHj8UCS76F5GscWtf8J1rJjWYmJfDLNuhps5tsW",
  "key11": "DGtYHXUXqTGs1udQeXSKSokLvigkL3LmVt4RePHSDkPmLDZtdRvC8QToeZywe1F6JF6S3SydTKMgtXx5hLPFX1J",
  "key12": "65SACJiJxs3owzEj4CYztGmTDgXgx4JrQS7ahR4Z2FJ49GKxLYE92D6Bg7kRHZF7AotYMP6zf88qTfHibB17F7oe",
  "key13": "4PjdTVkoYCP1h8gvuC7XMohh31s7Bqqgv7kLBqD1pmP8gSndXpjatsomnRdLPHRdmCBBnCBQH3EeE2kNhzPEP8sU",
  "key14": "45WT3hrc415ZCLixchJroUWppyWzqhBXjNePgZzToJFFR7yMAni57tiUEVtBntcaTrmiLh3fDLSXFPxP4zUqHJJe",
  "key15": "28ZPZSyyWZci2Qib69b6GSAyJ8qLVFseAUNASSM2gXpmTJhhzgF9aMVXpw7pk2DZR7S9stpwRxC4FnZMk7jCsZ8M",
  "key16": "2wtNk6KuH3zKQCYBxXfj2PDS1cTNoHtBq57MhJYVo5oi3CMmeYsT2TJ4sxxGWdbDdjZHd3gCK3MJoUXiJ3X87n4Q",
  "key17": "3eavJuUo7iQoakDDcfemJakSxQmk8qzt7WfVqRwnG3MhC5Dchg6naY7sx6LUWf7RvL8jKJ3RE8hNHx3fo4suWtag",
  "key18": "2Eah4G2TZd4EqM4eiLyn5Wpx7H9Wqywi6oetpzHaPwn6awaHaHM4434YmCNctiJdK62GxcE1rgqGHGbGaiXBw5ni",
  "key19": "6m6d4m7ExEGZwq8AqhXyVXXs6kPmmb5WL1h7DBqw92rd8vJWayPeZCeh9HPvXTn41JNWkJBaXxHq9vRoDkhK3Cm",
  "key20": "655cqPpNV8oWHb6BJ2exCxnDkB1FcrQiByvL425EVnhXLY2wPbPAprckdjDB2mKjFg6YGyLCgaK7K8bKQB9y1sW",
  "key21": "5x98RE7SdgpJcNjfYAaK39gEofFPGKXkdJF1NjwY8jAXjPWKE6MqkkdwGbXkDWHL6nijbLB5mRGSVjqduxtk92Xe",
  "key22": "5BBveEWm7wcdwWibFiv2r4jZMY62snKdQiivsQg9oWQAMhi5bnaKWBo8C9KHEUCRV7DoFEMLDfeSYvpPYYu1kvgK",
  "key23": "2mgAPwHESUwjbdsTJeS97k9hr5kggih8sSSu1FPsdveKGuWArK9wbTWDrfQHmjYm9sEMBXd7epqUGj28qJvT8Wr8",
  "key24": "5cdb88DPSBsNWPNArisXW7vptnbFDzUXQJ3N8w9VhNT47uscq4rYVsZAJ9U68LSGVf6qWBnD7CxX6hx8UKepnkm5",
  "key25": "3x6YAZjEouB7yxTvV8UP5ohCp4R8619EeGfoKQ4kYGMVS5QddAgyQb51SMAhLoAnhjnsSHrJiAQcSK6K1xcos7vW",
  "key26": "4Xx3FhH71oZ4a9W38NYv5qzye7RrzchhSjgqaofvNLCGvvp8kwHcwPz3V9t5eopRRYF9aJyRhbD9koeVLqqf6Q7H",
  "key27": "21dJVBaaMVFMXXVKL5D5wsWjjJkpcrgCFKDoZYb73Nm7WUo2WLSaGHZjziNYNVkWhfAWoyqTeEVpd66TSdGQLqdf",
  "key28": "3t4nyurujEfLmfW9nErgJTWGjZgTLvJzrFu1SW7XcXxfgAbqUo5gLwy34SYdMxdm1G5UKVjsxCd9Qg3DPWnpkwBa",
  "key29": "34yrvTgzJRrjynPJRGS59Y9TbySBGw1mHecydQa1jBuBaXZJTi4Y45ANVHLEaxwJfkHaP5VVVFbWTstExM7RtXs8",
  "key30": "4JmjxrzZCuU2DjnzjDGDsAg2MZxjFeHnd54zUR5AbDjeaqhbx67pHKyrQAheWg7DASWYyZELYh9GzgRfAjLZtev5",
  "key31": "4FgeeCLBJ2FwTM7QBKxJQaphvMX433aSZRr6Pvja4MuTrcz3MEaFfZYA8uGxS61ufsZWhfRjc5tAdfXK1bc8EjcC",
  "key32": "3Vdq17xnjD1ehEVArQjwJku92Pbyv334EC545Ciz6fZKpYuXPxYcdSLs5DvCCdh9QcnYaQ8jkqwE39GTwaHuc1xr"
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
