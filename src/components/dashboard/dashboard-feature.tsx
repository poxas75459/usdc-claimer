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
    "eD2hcZhcJ9u2EUsnkpcdvqGkZ6v22AtZTHi1neBKohBCzVU1sDDdNmRx5fHpcxBMAK8ZwuV45He2hsJSgbTY6n7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51mRtoepKHmhRaJg84LocMoXrFhMH9KvydyNj2Ev3o572NZsKxudneznWxmm2j6q7cdzGiZtcRmCXmeanez7zobo",
  "key1": "3Mvk4yKTxt6o558DjiExcmmQPQzoNJw2DeGNqrHYWtndHjJDBdqTwtmVo2i5iKLmaFnfx7ZZxGwrAkFZwN56Wbyv",
  "key2": "4nq8GkLuYwMkQhprA1e1UnEfhYYtcBPtLKQtsGhNHqQjGb6PA6dL3Az9KhCjk7QF8BShFgLzDc4Mre1rBPdqDRFX",
  "key3": "66ZUEmzzPaiKChMvabz59LAa6EReSUTskhvbRhnATxSrFjvF1FyUmpNdTd6X9hEtVBR5YNt15AMMvbFfDrF2XE4p",
  "key4": "669J3X2nsBT5ex5avDjwFJ4KMybntjApvzRKRLiEQAZUSRwhuuioBFU1vraDUeAxCFWanve9BhTzpAk9XXJQwN2Y",
  "key5": "5ugvhmcuz42rZT54RHNg5VedX9spCczBNFTXH2FLAhaWdS1DPR4PSLnFjkWt5ed4CJoe1wK5xRsF9XjZj9Dcmk6a",
  "key6": "4tP4PKR4a56vcaeaFF2jErmptV51SP16FDpQB65PGq1QuouimBbnBexPzT63mRhtMW6pCPChxQzVtTEyDgL1wFGn",
  "key7": "eFkWD8pMa5XxEHWhf5pH7LCd39ujLoQMjd7cv3jUgjcFw5AVFJsDLRh2cZLbsLk1WXn5aZccVwTwVWkcNpkDGDU",
  "key8": "3fKbSfiMMg1G7xGkYLHPuzwi6wy5uhK4wJ3uGaTF1HSgFPMzuXjFsX52ymPzJHaEj4sznv1vv9oX67p943m5Z6Rd",
  "key9": "42Xmhwpww5AZ33Uy3R5mTPk7gTWtFbrDTixgVibqosUfwRGkis9wSALjZCzjdh9xBWHAZKt1y5yUFpMFh76cToca",
  "key10": "52Z9JDZDeyQX4HUyyPDPgfmn3HrZ5YqprfCuJzP9bcQ5wjNEnDzxVbAZPDLbEpNi98hY6SQAyC6yVP9zAJKGRCrU",
  "key11": "h9UQvHHZyKrApi8t7364iBrXT6EMyeLEqCNe8XemYyyQkL6ax4rAzUSRnGHRjWVus7kfx6Gju9GAB1ivoVy5378",
  "key12": "GiQStBiD44zDWoHAPx17P47rHca92dRwyeRST3XW7rTLRtBgGhGWxohmUKu8gQ4DiaQsUNymyBw7W3Xzoxi67V8",
  "key13": "KdumrESEosNUE9if1JBBszE4XHy7yfPK6oQbEkFU5hG1wM3tvs7S7vGsXERhWgFCieUfzYx1N4PgxUNiAYu633E",
  "key14": "DfS4G2dVzL1f8ntLZfbu4pNhxaY9KuVLQJbKX1Ra4SBr6UTjVuU5gPDrZBcVHW9QhherxF8aHKWYeUMR4JDLEk5",
  "key15": "39JNGQrhnmXnB1xEMC1o7YZUrZbu4TgNiCnfTEjsRzmr71BCYSqv38BSHtZmuMknm8jUujz6Vj8c9GRK7TybfCW",
  "key16": "2iH3CGGcBDt3n4LoRK67RkcHpeyBtwLqAMwCtoJPVj8QfdJufidHdrLJcpiTfLciMQq6YEyZdepkv4ogxsMZ5pvr",
  "key17": "33HBqckMQ1VAEwg9bssNj4uZUCvfiCZuAZYaix1yMeFsSnpHKivq9nWBjER66UawGuk5AZCNTtZRCbYuWRWqZvFi",
  "key18": "5uQjmEBcca6LpBPcNhKvJ5j1BYXx4FVw6e92aTTkdDX7nBSq5HBVD3ER2KwBbXY4Zx5aXDT98816sHapvkq8A9JF",
  "key19": "5C8SDquVVezXszzEkThw6Mrg6Nt5oyqYFFvk872kmf2a3Qb7Q1Pnu1YbFL18yAwrfof2w2vRpBVz1vq4Qtbct2UW",
  "key20": "AsGwYS4HVBgM9V9Lpvf7cqULPGeij4Cf3ng3LmvWBMbPyDjN1x29MxtJwLNuQrf5KoY2wHPTS6WH8p6ySV93qwz",
  "key21": "2Efmr6EAwYTLxz7yekYUektR53DFDruyuMLAEioiESRSRE8K8WENK1ikmVGUZHTTtU67xuEN3YocCFDeibPmCMdo",
  "key22": "KYYkvGAU6q34acKm51HgDzeJeHu1e5bs2gi9aFhFcr1h1Q85XJsDj5YDei8Mz3ZMpWcGSWn2GZUaZm6Qft3p5Ub",
  "key23": "5kpw33G9QFsaLeyCUGTxsBL96XMo4DCnm8fTARSh8GrpbHymxjwhM27DNiNSFhh6rs4xg28YAh3PmHS4ygGkpLZ7",
  "key24": "4YiwyWGebSiFzdF8r6upACWvrhPvcX747ff5qZCNaiSAiaHm5fTW1KwTVP5XUfXnkHG88PSmxPpBYHgDseSDEAuU",
  "key25": "4Y1gZgRfRSWSvYz5boQjjPviU4dMSdk2gU1Qh6tW8qy97Y2eN3jHWAYAXFiGs5ZkMEa6z8ThrAffPfji6dN5j1qB",
  "key26": "4keAwTR1B9UcE3M8pD4fcfoLFxcUAgrN5ySjEHX8S3wYRvt5ZnLWDNfku1ujBiRdad919dxaPDYiL5ZWsM3jpAs4",
  "key27": "5xXXrn29GDAqL53tjzKqFMCn13cHtydkNhaPDyCZtdT9AB3qwEkPnmd5zugUqK1ymctX1Z6Erikr7nF6crMiRtu6",
  "key28": "53o7ShFDYD4Ug6eko57QZWZ1fHZtHvuPF1QtAEEu1yUkziYN4cCvrTxNLN5Ncy7q94CJTWUbf4i67TEnURxwyjkB",
  "key29": "2ratFKLxfVh2piHxQBRJJiTQxn43Q5AhGALv9bbBFiy1mZPywvC3JvYqjgjMSCEYkXEzQyhF4JomqQ29j8VjyuHM",
  "key30": "2rBA2YuPXFnNdR1nGSjoRiC6ZPLD21cXsG8SSs7p3uJbNt4wF6WujaJY83VvFNo7WzGiF9S2UoSSKXLbwGHxSX7F",
  "key31": "62dDNQNQMbSKB1PZieuAExt8AzASfCz91acK1vasQVnSJ7727Q8KDqkcdLsSsyJywUMwjvo94GpULyrG6bLVzPJi",
  "key32": "KhKTAg9qCn9hVF3eunddg5153yMbAQaeDEjD1xAx3zKSKzoCSt6QRWtVqkZdwMMPbuwneqp1fBdrgYCe896y4UW",
  "key33": "pkUv2iRrR7iCU9S5WztmMABjCEnBsuRSGqbsotCPj9SqMjQ3mC3wruhYpYnWzSxmgvTVbPn1Tferrjwxipp9P3Z",
  "key34": "2Q6UDwFNE4kzMohfYoUif97HLFYtZRpe1u9rLsrFXMtswiE2KYyfBFGuA63RKAJTKVXfXDjLDFT83KJ3EctFAKVQ"
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
