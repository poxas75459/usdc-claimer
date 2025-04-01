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
    "4ZijaHcruX4v95FpVxEt3ojZWcLmfFvJCNnQvuoy8ChxWfzvevYUK41QuuB4kLmkEkPgQLNXEK7WuyyRSC4xU4HY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bsKjNA5QgaEVB1DwVTPMtWLpFdMrKgzTaGTBw5y1iAumTW2YRb5F5xFujtXeFZAdVbCC8aSquQhJ3mW5NMEhHP6",
  "key1": "2XrQVfU8KrN8SFLLRTuYw89SAqsQTRNuPA2gVttc5BsMnBximXHybzStjgpk7FXCrYnY8Yk4tey7dcixTQB1oNWu",
  "key2": "5UMh1Jgx4qGdrcBXv7RcpqovazzdGpgPPyv2bzbHR8kawLffCnT5GrUrMQApLpG2gHTYb5Sk3jpTsL4HrxG6aaoF",
  "key3": "vYzKFzw396egxSkSxrXky3agV9tQ2TwSzNK5Gcf8CkaEBY7uUcKfc1GW5zfpjvwWYotW6a6rbcDykRAFaQ8su9e",
  "key4": "x94xpaLmhbNvLVZv9TPaGEFuTMMybYLczv95PgQnhLbFipE7KABEtDM7DuNao1gc6RMm4QdEYzC4r86k4NB1dv3",
  "key5": "tQTqJp5q32waY2th68v1SSMpWFb5Fw6aQGa34MnfCQFViQKck8eRewkyBpbeWevnrp7SUFg6X9PMgejEdkGB9W4",
  "key6": "4EYTjFG1Hp2xqw5r8GmMC6Uuw9fAdDhvJ6XHPYn5vdFQLryEeKGE1Ur79xYFzxrDMnrDVrQBmYCr92BeKAEBUJTL",
  "key7": "xveCuKSBQK2tWz7tpmEwLVJaE7B7MKDAV8B4SdqWqVxqMgSjccLNGtHPAfPHgo1gPi6FXwwKAyRCx9zrefYZJiE",
  "key8": "5ezqWJcseaKGY5nDzxLrS4JEXsXorqedSUW1SYbYdt9549kRNrX8F1otb1aoqqqvAWSPGkwi9LWMdokkEmbU8pXo",
  "key9": "5Wds6qpLM5WwqyWzmjnwwHoNgi13GPJ2NbbXf2SZU1pZXEnAwyeHLHmdV6soq1w38bqhgLRhUEy36yTPRUsTkJPC",
  "key10": "4p9ww7KTQnemHVUmpnyeg4WLmb5LMwgGR9j8gwBEADYMv1zmTBdjTd9YjSmijeTBgSHGudfXJHDc7ii9emonLfaf",
  "key11": "2K23HbyakEokgBd4T1yYz6GMYhWG9Apb8pkfKCnH7JRNV19u1ugP8cfPTwMe28AyvDfQ4EW4qptr6ufFuNYHnPBF",
  "key12": "T1oSxGTVEQbynWE44KfpvT1vhJ84XDnHZbP7PgeoXAs3yDHwoMNnTYkVE7wRKSP8m4jPfj89oqw4AT4eNssFXu6",
  "key13": "34zBg453SEKLsjS8Q7pQ78hJz2EkEGVdGaJQp2ECRreUwq1keNzN8NMAqGdhxm1jCN5ZBrUcEgXEmAzvU1vjswXk",
  "key14": "4UkZ8QhGeqXXuFGPdJBVxJJkUxszTfk6SUvVgPDVZRes25DTksjNgwmgzL7JZk2owzm4UNiPYCNvyWTnxBW27daK",
  "key15": "4KfkZW5LwouS8s8tqvD9jcNEKDVfJNN9wS27agx9kqG13DG4Z7i445bptvZarigFrDaJYK3uxTsTgCXk6J5gzrC2",
  "key16": "34HeDeP6fRjjgeh6rqtZjAChTiSYTWok5CJnaCabHtzrLeYKKjc9p4dVk89i8wMxeLBDVwKPLHWDQiD4Cp6ExEXr",
  "key17": "2XcgNSistgLVKcaknVGMy6i8SsnkuvLwvoST4A4T6RdyximJpkG477N7f1dvBEcoB877f2XL7cpeashgjdtxxQ3w",
  "key18": "2g81orfwFdVkQua3JwqoKY8iFUEvfJT4zzefbfUqMk9ppsgw8TgqKonyDLZ3DsuiQzPUjVd9mYwksewLh61Dci6S",
  "key19": "4g5TwsL3RSeSF2XvV9jEcPxRJPiHXADJR3qehCFHEjaWRb1Vg5aTDTzNM8n8B4xuQe9dW9AsGV4cK98tN4cWHTan",
  "key20": "44AEsHum1SnSxGVFnDwHmtaUQp9pfV6hRQUv6MQnYZM8RJ8NeQcBbiu8ez4XyEmpFuc8P64egAJchGjQkAD2ba6T",
  "key21": "2KWMfWxzRwrSuLJAiLzbXwzAHhHaPUpTSYAq9B7JXNiNpkvZHY8PdqKRmYnjjE9ewbKBkRUyyrJ8njACocyLZoyL",
  "key22": "48BoNXEMmNanJkwjXeCt8t8HPFDEyaD2YdT9VCNkcqxpvaNzKfDTdTWF2XTSaq2DxYcoqu9pHdoD1cA59wt6MJBg",
  "key23": "3bmKZpSbHexASsJh5KywAQYThNLojK6wnkmfn95e1bgXMdD8wonCS7fP4n8judf3Cgz1VHcKo7BJVkMPY9gfDmYg",
  "key24": "2zQXFBTqZBp9e85PH8Tv2VXzaDputfvN3PPseuTu7osvfAp1FYuQUMhapBqaAe6ABWeQZJRzgFoovE6qHbaJsdQt",
  "key25": "4vkhxGqbpRSzR6TZ4UFpS6v2VbVuEkfuX31iXRNd5j6TLbiKcXPGvPxsFMzhEY5nzp4uM66imHvQEhRVitGRyfAe",
  "key26": "5DFFAaDMLeh9ecyEWQ9vsGSzmagDr7qqeHoTRUv9Zk6kmXYuAxDXKiaqjwj7nu2WZheU5af1jqKoskJhe8E9Ds3i",
  "key27": "37633ezQ8tyZborwEvt4Zb7Qg4wUwewi1rLYL9k3hy6hfTAK2ngtYQ3HdnMwizsbsgsdfyso3RzvRRrQSGWd9SGE",
  "key28": "2GPRvRPxjUy1UxqPMXpEj2oD7A2R5BKFpRuiFstVW7f5g4a315ErwYY2vj9TK5LvxMJbtSqdeBh2J9amoTaL7vSp",
  "key29": "HhDDgviQVfKgThpCWeJLs3cWBajZmJdZTdUxKW8kHQQBMwjTRdyoHrNGABygQBLCfTFThkBVj2M3veY8nRQUxSx",
  "key30": "38TQ2mydp41e81sQAsq49uG5Ao57jRxzDbk3VbtVSMbVS5YWpzZaSZ7hxspuTjUwm8FWiHyWN8HK7Ln3ZciKdrej",
  "key31": "4xMoStR8nkjdvHvLFbg3Xz4wpRRr2umrJwvHDWSXEWMTiY7vqZZV1PNek59ZgZ46JjqgBF9C6a2hSPaNuNEA6EQg",
  "key32": "2Z69sawZzx3V4TAWK3mGVfSdw1c1bUWq7tHgn83cTCxmCK51McWXbd5T4WBhXkRDuZJ9XfsjEMcTfr7g9gZpZPma"
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
