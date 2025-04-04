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
    "4tecN92j4nUbPcNJchGKS8WYMZiYpPnee9K2TZUDdBuuRqiV7eSqXThq5uC2Adbr2vg97uL97zvb8eEjE5RDdhhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bSWZmeDpT1xZLEeGJrntntzgXQwshieBY9PsWTmH9zJTCoM19uJefSUEtf9DA4RgsEddfxwCea3LQXciUFPDm32",
  "key1": "4YsTNR4aMJcAC8iB5M2TWa3ArXktNLdcKEWY2b5tDikavpZAzSR7KuEcLuJXKnwwqTYT8onX2WGiP1utp2AmnCeU",
  "key2": "2VDUc8F9TUKWhtF8kqwcMxPWch82Pvo894Y6Jo2BLysETqLkm2z6Cgb2F9VY3ybhNeSEkJrJsNT5vLZCoU8nJgqv",
  "key3": "4Wpx4yyDSKNsnbgwyRgR7hfuZi66xqMie2wgrViwetY44NuR1r2msyR4JkFNhuh9GxsqmDncs9C1A3mBtswWFBTy",
  "key4": "T8xniZGjtJzNVzdfgWqbvMNJkuwFtinPfKt9x4bm94NghirVPXvHVZwHmv6wcMSK1BZtMXHzY9vF7UXT8UrCk7P",
  "key5": "sBf1KFBSqF6dyY8ro5yJ2VSZQxKda55TQ67vh9dUbbSdEtjRkzmTPBB7JUrMiyrs3V9n6KtH7BiRP1MfU5tb9M5",
  "key6": "2aTNZPuH2dZ6y5JVJyfQ5EPD5WBKwFgHTFTCPipd2bhP8eXqwjEM3XA2Ru8EJV137DDMfDgrWuQwrv3q8jhWFZRS",
  "key7": "48LRVpto3Lcm9c6MDxXbfvU1bC9XqgUBwzTN3WQUB985deR9qVghjuBdc52zRkcRhxJNmb3oc15Zh6qqt6wHPn2z",
  "key8": "5cUfQGQB6jsP7nhuzC3dixVxf2b3T1UngSFkEZNE3CUhqjsMhPQz6NJUScs6RTe7sLXoxKgSgfbi9CUK5YymQKj8",
  "key9": "3UBTdoRv3LKuiKxyH2oq6YpAa39QWkzriQVxQhVbqWz8zhnRGGvQgM8581MNLcWdSCuTPNd4mtiJ5v3TBhLtm1dx",
  "key10": "2yLkkkKkUQzVBF3wzmtahWT3r7YJQsKaHfGoJaXRXMnLh8GbmUsfvJDBMKvpPnyJZ452MbHL5w3GP2Mix7vPvZj4",
  "key11": "vGcRN1rPgn1zuEzM1S64JpMezDyTn627vNrRcdvHmQUEtUvPU2yXo6NnJbhy4pBLkzeddMUoBkFHsb7Gx6M8K57",
  "key12": "46ZD1VGwyKhQcdzmocrR776Fo7xZsiMVPTRCdNVm2rUm57fzDmGcqu6whTExQqUjZeYp6DT2iGim1bHAvX78igPe",
  "key13": "4vQkpZBi4ywd5Cz3pUS1eZjCrhEvc4fetiFkxdLLrDYo2dVpccGVHDKAgmWtEvH6dubR1MRiSeko3VWw4MrZpb5J",
  "key14": "2SjeLRn5cvCYGHnkRKbQVauoxvxaQKWWt49DbcNW417hEKzMZx9eHAW9wGzd6kotMGWP2Y87CDyK4H4w9JHuSJ3E",
  "key15": "3iuUVsktqBtax8buFAQ3ifg6mjGEJcQ7jagmG4yJu55FqYp9hV2fQySsYpv3FZWxXnXUWhwobA3x9xzBq4Q42vQV",
  "key16": "2oPzMWFQc6sgnWdwNy2E5Jauetc8a5bZ3rKaDpwGfLqPzVAfS8T3HTv9JFmSoCAZzbf7GQZNqx4GCNMiPpRuYhw5",
  "key17": "4pvACekNTczQcNZ8vakH9VCRQdTwAiTwg6ZVRNBpxsSN6KWNg88JbLaHdRhEubZGcXtCtWnZat4sqhBvKNYj3Ado",
  "key18": "3jqEFaAWh95979CQsM5waqtGQqQfHzuHsguAQa3TuJHiqVNjsvNa7WQLj3Z4pJknufpt15JZjambWXQgVPwHybun",
  "key19": "5BsQmDn11jo25TJAeUASaSrs1c2aDd86yFVLf9yimQLcGyY9eFXNNPE6sUJYckN6srHqjDsF7ojFP9cFJZ4PXdmB",
  "key20": "2bCZ8r62gsLbNeifa7rRq3M2vjcDVzBsDx8pDECofG9CFsZiG2BdZuHN8mDRQQXGxB3qjmk6cP5HNHRDvJxgJdAK",
  "key21": "3PUy9YmXCHNkx9TTpZdpYimGBtfjoRwBGYRnGEjwZMQ4gQZzfnZimDbTKuJjPGM418dPy6eL48NgYX8zNnvLkA7L",
  "key22": "5dMJjiRHwZ2quCYv5Be7LkgYfWF4Ms8paZXGiiHrPPnhtMyArvqsxjEwjPLqbYjMPqNjRCQTuG5cbM7iauDD3jn2",
  "key23": "3XSVnJE21ftKshvoUz87deue3rzQsnuuwCe8Btmf5HHyyoMiTKXHUSkLLNYfAjisPycKJ7KFMajNJUZg3H5UssE5",
  "key24": "aCh4vPhUZFq3tXVKDAHnCoFSdPgeRDKEGj4vmyqcEh7ZoEe1vWJw47CwqZzBV79gZJn4LjLRumkJVasNZcqDYin",
  "key25": "cwRGdshoPboiwjCwF7oem8qb9ahZ18kSEr4dZZkzDQpovFaoJUNPgLGFiRVRhiW2Ah12QSqav7AoSYbFNWSV4Sy",
  "key26": "52HXMEKR5Jc4MbkD4Xx9SLpcbYxoCq61Gydo8VcZeibt41AKJQ9uJ4yeUSZrzAVHsaXgyfw4fo6squbR8y5zaKqg",
  "key27": "4D7GTfGuf9EkSyU5KFTV9A7eWZiAcewvn5QJaFuzJ6DoPqzmftSK2FWvJWwNUvU5ohUqAs6z1vevgTpRTwMWV5YP",
  "key28": "3BR45EdhTwFsTZHCdhXnbcA4boiGsagdPQNDFPh9j82CYEkqo2kxRAH5A53BrviUoXRxb3VLPFeMfydFHtTvoG1N",
  "key29": "3gKxhW7yv42M1PsrSFofotS5Uw2siJiLNmQvoGgnCFoCsMVf2axHjaYPBQnYXJSaS9yWNYPjTKwqRP287aGrjpVg",
  "key30": "24rmo26ZmVQHr6LDtZCNtd49whyVMLNQSJqS3MVqVvR5XzkabCPNLKp2B1gxZg5dMwWrzM4CQ8E6CuMtUycb5Rcg",
  "key31": "48DpqWgCFy5rTKN4LARB8SY4hAoLHU7RhUa57UVZWqZcQ3WZNV4yzsP72V7K2mAcCCA2YDwG3Ar76jrt9jzjhs7m",
  "key32": "5EmUMotP3JtwFZD7Q4w46GAJz39BRCeFfcPktq5CPXnsdGff1LnvvoBMFchERAdcLAVyY95SMEkQ6LJgYFg3aPJL"
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
