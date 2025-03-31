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
    "3taUFAyPjAhkzCMU6PkQX5a2JEJDNNHEKzpizc8DnLwzYwitYKJGGhENDAsuJzS6yvFq2f1nudXkFu7wLXMpryuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UikurCXG2izW46M3dptRNQ586TSAzrutfWK9HXESL4HG2t67iNa7bGRuQEPQwC3ejjzRJW65SFRWJMUH541Cdfi",
  "key1": "2WnDt5wLApNmgSMt9PFtKJDPruRCq6jSwWywXFYKJrxRmDZDPasTVys52ZS5RksyQqAAzrNxUbiSb1cq7kKtsFcp",
  "key2": "5r6gJnrh6y1AHG9JGeYKfFUYrHfHRbvsdaiPvYphbkQPm1cARRRxz36Crqirp9G8nMGghFYfULQJ2JhTFVAM3HjY",
  "key3": "5WBtXbEGyxGMZodkq8zCkGrqEXt7BfVcnnWAxJV3ix8qvoreuZwgPaNcDuRhmmM8nv3AbzyfmiGVDKkPx4GCKBoh",
  "key4": "57FxYtsZqENH37Tcb5cPmst7UANNHVe7LAdJxc5jKPcMPTV5Rp1VtguMfnz42JZijmirfPJHrKpLa1in5durtpr",
  "key5": "66ac9tgsBjZ8mHbnXmWT9XhScBwiPTfwLvkrEMVvj7bcz2781ySkjuWdxoKmNsA1dpZhmK2zL92HWhi6bjfTBauH",
  "key6": "276Zp6sFpPQKXkBDJykqxfBn963xSNsvk4fsxoq4CRgS3RovseZriE7w21iG5ANWuQM7NjPuf7JCixN4fRziEiZK",
  "key7": "4PtFkxM76DtCxN8bVtbGktpeZEaUg6RJ94PMDjS1aFQ21oH19miyZ8xALi4o5fhwyyLqzZ3G6zkprMosahGgYSCi",
  "key8": "sxCeW9oFgEQuUjvV33An5GAoF2pTgBXWx5Zqj4g2gJfepsJ3Mra3kAsmxzsD1C4PM7vUWP8qRgMRqu3mN5p9KJ8",
  "key9": "2aBqU5DuKQ2kjhiRUcHpggpLVetv9vnJXSJgW426aBRG7cFbX6GM8vsAYt5YR7tGwFn4PJhkkxnLKwWNuvtypgeg",
  "key10": "4srekvSByeidcfEZoq2WGwHVKCD4tw2Hop7bJG2XSneRPJq3AEpeQ2VvoAEqnqXwyvSk4RHypiSrGWgLNQH7dgZs",
  "key11": "63FPUCMi48DSzVoeE8mBU5TrnmrHTgm8yLUrsFja1sDJCwPfAecaou7PQqVLLh3tjWEWCzoakVYPqfeuTn5j8BtV",
  "key12": "uZtFxq4TuSfUqBgxz2k6FpbpRwVv6kYboZoUvhHnuKTvk3xUnyJu7rNY349t7RY6Lm2T9SAj7kV8ojcRD855KHF",
  "key13": "5DhPWSf4zoHPtFY8Q4ykXn11Kd4JKWgfsxGuHHUXH2cDvBnQVR644yKSE1RRnBXm5zueSETNxTZ5UUCgjND3Ccvi",
  "key14": "4MqP6ozdaFSbbxhEZKiDUJoXqHMiXHqa79z42ciCvhKP2E3TiE3m4FDgbH1E94Ty6uwrFk5ddmCMzh462LFHcUa1",
  "key15": "4Xrh4Sm7Wm3ADhSXDeKovqNZuWGnrEB7STfz2Ahoqi7phKgyjLSX9iSLvZGGkA1F1ZoiuHrGkbC25fNJvekEdZ9c",
  "key16": "2pENQhbZgQAHEyYfoeLCYWxBAWbHTUghMevCC2LgFmgG8nz4aRJSNmaYwmM6WRJ6oc7rvgsUyE62JuRSEvtUAqAP",
  "key17": "5kBdEj8kNXbzQGbTiuiaPw2nQFpXL7iakaYRCQ1iW1G5SLgzej4CQFQ7RNCiEvxqhsDiJSozS8k3VqSCGNdNvvaL",
  "key18": "23xodakYkgvKyB49oW8D5r1q7yTHu1yiFCrZ8G5GZaRGkG5iQr1sg48EgCKdP79XfRN6ztgtpQLCPmP8M6EE5jrd",
  "key19": "61HS8c2cAnXk8TLcCvmMzRspRVYbibkS79n4Znpjhf4cnnxZrbdUsTSDmFnz7YZRECg2eY3t7trot24meo4qWVne",
  "key20": "319CGp5P4fnGt6Nm9tyPhj3SVS45rsWrfLasG68UNMAaroKc6bN7DfCJntPmW8tFif9KhoRWhMUNyWc76MPoN6pu",
  "key21": "4ntzZ54RrFzmNSHkb6MfmCUzg4qfa6B6BaERR57z2HG1zK3NHqyKyEJzJNo4MQfbHSwvNDnk1mSRD6P5CBZ4UHvW",
  "key22": "wHZbufynnRyY3eA8MaSzjLbNCkTTnQcJ3wxFJTe8qAKZ2xVMUYSEPjdm5CsTUUHgGKuB5J6fycZyazPT9Lho4g6",
  "key23": "2CSRFhHMdydzwMSernJetywyxxJEa9a7KQEoeq9Gzx8X87tnGtcCV72bhcN74XLxVRrkxxQD5Uji6zBwXFJ7AUET",
  "key24": "2xMVkiaK68oU1bg1FotheejUuZW3Wvo2Yr1Zy7dPJX9nH8He3NJdVpZ3ynKM72CSg1A4EEo9vvQPm7pVtqBAccTQ",
  "key25": "wXBeZ7L1QWAVeToUmjY3QxhtYKX99wh5tY5s8stJhztiKECciZ7GXVs96123nYakPTpmZ9jkd6UK2AokxkXi8QM",
  "key26": "53zGB2Zhjxed1wBkPKnvxC36MQ88qiBMn6sLSvj7hSr87t5iCN1BV2pUXWGo28s2Te9TLTtXjF3pmKRbrjK7CVaU",
  "key27": "2R1yBZ8aAX9MtpFGCkJpkJpKntzMtHiud4PP8XEHhQufF8Y91ejv2cdyuGtTLv239DNuRXGcMy7C6xuBVZ5yU5tJ",
  "key28": "3Vm2DDXXHLH5w5ZvPpY5wQCUsR25TE3z2PYwQDQtuGmzYKHsRnpQWUATejtswF98UFYnSg9omaVqZ7do8YQKRW4J"
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
