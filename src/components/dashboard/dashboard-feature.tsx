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
    "2pB7GxxRbD7ecASNsyVLP6fMPqsaiadNKBAgzdxSq1h4k6HXBofY4HLN82uWDE6qcugFrDDC9igcqZ2hbNRkKDGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NZoQtpE2R1oePgWRCQnAXmYJAhp2FjRdHsjKpQ11MdtTVQEoSwnzXuWVHhRi7d8FXkkJMBfcH8oNUrdBsaahAb7",
  "key1": "4TnoFL7hjvfgiXHMcWWnybTmwBjw4qRJwL9sdz5gKKMxaEDFjU4HEvonrFB2K6Euv4M9WfepxP7g9CKmB4caB2AJ",
  "key2": "YwN5EqR2bNsk5DHk2JZxog1GdzSeK7kXJEmgeBRFxiZjvaXm1qPyBxseVeR1y5wdkzXbfbyuvsLp1RS14tFudcV",
  "key3": "2tc76JK4yrC6kshrazPQ7ovWLzuADHMLW5XFaFp7XJz7WsKTbbr59RbejokgPK6fHUgYEGiAo6efSCyWof1St3sU",
  "key4": "4QqHaT6ZeDkhBPCvmKjm2UtZX7JCP8gXmiyB3E5CSVx68ZSBRVwhxB3ywbQM3omiEcf5VRzwnaJTzCEGABBDEnwV",
  "key5": "2u737d1Crha95ZLjuA31Z54Ngu3obUjaapZadw81EbWFBWxE3muyMjQWZaJBhh2eCGiPr75vvXvqjqCHgBGTtiGL",
  "key6": "3SF1act9E35kn1YDyEWz2eY7WP5meYE5rAzNk4FJg6U1zf1nDCK9Bw85m3Sk2mEBKRGMDQZw9aMZgwBdjwVm59CU",
  "key7": "4SdSttVDizWQLMx4S6BtkrETQKyRn9hiTkWiZwjELKYVb8aj3CgB38dY3qtbkinug3LDTcG7VRBfCtAZUJKUKWvg",
  "key8": "isAsp9L4sQyAbHBeWJPrqZFRxecvyvuMLU4zjdp3vZWBAdXU9JksKGGDrDZfUHmNU9b9CuJdnaDxRZFMMV7HCzA",
  "key9": "3ZGiBQXDTBp2RecJe1GWoPqM9B7cWKZvqKBdkgknCUbiFX8ZffzPJTmw5JjwB4gQVYxkCxGDkL6EeFybQU8jxQX7",
  "key10": "4xGwoFy1z4bu4VP3codu9VxHH34cewoqZikmVydNLdumv2QxYN5Bc5mhC5RbG7fDAPFiGjgCrtM3isSqSTHQRh8n",
  "key11": "2bTBEweGyvDU5cxm5EqgArEZVK2gcaNmFLwU9oYUUsDYY62rn7TtLCcYEMUFnxfArMNq2zVSwYrPZPBEspVu8qxN",
  "key12": "39gLjYSRxS34khFmrL3yXyofT38xMLpvLtg9NLdxpGHqiUZhDAh6WqheaSKqcYHiHRrmocUn7LGQrf7cn4wDFeez",
  "key13": "4Mr9t7JfCus1nMuyy4XKNqPwsP2L8PDTWHwsFKtWyhaBZMhc7DsMGtK28aLCyYTWkUwwHwsLqKvnA81C32E5nGCb",
  "key14": "c17gLuEV1EmAU3D4UYErDUiZDpJm2rv8kmYdGEYT6xvkh5Au1LFCWq4C2VyTYckK4ECLba6v2LZMrBRC7gysXaK",
  "key15": "57hDWSHYrASRMn6GWu6nSdhvcn7UgtoDiGABCNhawaDaG5pGYmRsszEYebdKiYc8NkhvGusDymhQ6pxcQRwwvSYz",
  "key16": "4BbSXxCvdMcuAHs4pHZ7tsoFc9G8fEsAsXqCnRaX8uQpBpQDcpapHezAbBx5CkdHs2uYcoQwPtevEbrti7R8K8mC",
  "key17": "47vZxJALwmhkyK4oHRtLwR3zFPzAKjG3FSp5twWmJonzU6nKc1jQSBCXavTegxqL1ws8dG7X86isaSoh8ow2ucZX",
  "key18": "2TXAoAAT7JYMCBse6Y6B46aiF3vnMbhAynKwMpR9ZqK8zQFpm2YzQ48wvP5mjnBtTToP1C8dV5PuXoSSTsXBnLAw",
  "key19": "4wAZjX1zrvShzWZczJH9NUsUwqVpnaVRRxjRrFD4WAGQZAbqtmg93KjyU1r6XyCAdQo486szzYs6gkLpeQ5PfWrL",
  "key20": "3qU7Yk7WqS6JKomvs3QChdgxjw32KrYyuLQeUmLhwZ4jD6T3RisicVV3RLcc5bQLEasHjTE5tAmhfS3okqZmPhTt",
  "key21": "5dheiV7BufWNPrjGEbdSYr1is5mcGoK1TQDtDkxevca29AmPLfAqraDkN4T52kHwqNpjakb7bFJgdGpD2cemWJkh",
  "key22": "MRkY1kP8AN5axG7SECe1gexLNjzy2s531yhhYBW5CJwW3Y7TnABRqVWMNXtANU4EtAZ293vfai59ApCDrorzB9h",
  "key23": "4cNDZZDbT3BsPvbecQmYZiu3CLXuoCbJH66R2NtKFTwTVagRwAgf6pEZbrBviiVJLH4AzWbeKwkWWYHaf7XrcWjw",
  "key24": "4CukE9qyzVFQkdXQCwZsZJf38HEs7b9TNaeBbKu8Y8BUMjXCtapKpg5L22RHrbqBuadTTkkzq8hTS68Sawpf4Bsa",
  "key25": "3o1xtNfVRp75RjufixzoMz4ACh1TAdxdhrG3RrFJ3E4LVkrgFtx67ktRmbS28LCniMTFjLDdT4FWH6vWsn58E4e5",
  "key26": "4TmwLX3FxwJ6qsHJfTk2adeHEyhnszoGrTMTxNCHFB66TzXjHKdkWBbAQe4qA7fceVgfSd2T8Ao8xqhqWncnp23i",
  "key27": "61GEDempEs8LokTLombNQUJ8G1JN3No8Lm3dnchdnUQrsAvk9nv4uczyBgi2m8S8jGCscA31tgAB1cKYzDUkmwSp",
  "key28": "5pqTfvDgLpvsvCwedjUXAU37aQq8Pftn6G1VL3yn8nk8tU9y2eyNopjNsosCB89TgHR15dZNBDBiKAzoESMAqmo8",
  "key29": "1FeA7HxhekCA6FLk89sWFGXAtVudyDt5KVdCEmyyHxNu5q9xXcGgwhDwHBDKmYsMyNUNKbpu4acXuu1wJmwhgyo",
  "key30": "4re3cstGWcosW1AM2ZMz8uVEiDMhUqZHqmpUTZdhfFEPMinN32PydyhSU4KhwCgqU5RC8ZyaerRaWmS74nNq44fN",
  "key31": "219SMznQBWZhmykinn7SkNKUAWzJvTn4CwAsDhbwoVvBPJXCSEJE3fiB6Z7NkhLEuBarSt7QYAeYevBQ7KipQFmc",
  "key32": "8nSU38WBLJCMNrLzMGqvAsP9NQ6MbyiEW5zxd5NnZRwXBPoeAEjWoLEqyX45qJhhcdgMtDQURRs6SFYTkm63tWB",
  "key33": "rvCBdMNKfrg7MewnXKjUwReTN2vFc65b5te17JkYyPA8hr2s8AWBH4oee2xTsrQt1UUpFxe1KiFQLE1WYE2bq8W",
  "key34": "4EfYNSUrKH5KCffnkAsRDgKuHtMxD3Wb6cHxsojCa3BTdxRdKRR7LmMFd89f4y9C8AbqNSaSwQpWqK6VpiH64E6n",
  "key35": "3U33YfciJywNZtU9sh6fQy8rxHHDRv1hAqJ2XPzqmNriKD4n5bVTTkcHnERb6oSSExYeEki6jQjLpzrTWY7HxVVf",
  "key36": "4mDAunHwyuGjsDwgiWDk3Ko21i3pb6grKBBiW3hJdsoV66oxWN12zYp7uRrG8JBbUGyohzr3DTgMuym5KCifMLTk",
  "key37": "4gdtp3i82FhkNMJ8fzQYCP2bfz64G7fuJmFHZuHDqmE8KMD6UPVGFXQjjCBh2JqizpyzV8Wm3CfrTWZ92WMrjDnD",
  "key38": "3TSST74oUeyBWgHkRFm2Ko5gFuz3CoNF6kYb4jypcrTZTbtjBoGWfgCL75rN5kqWThhNkk4gRJhoSryXd2ay2p4g",
  "key39": "5gmQwdkxHL4aS9wpi93XMA49kgy3m2ddxXmpZFL1qPYaH6ACGbvK9sPnn9DdEjqV7PZxDqUZYSj8LAkuuAmWTjHo",
  "key40": "bJWR4cyFv9apnz1K3pChthYtiUTbbAxqvBxsquU7XSZj8oYHqvDowRjR5yc3o69K3mEGN7dqzve8j6cn4u5kFtL",
  "key41": "5iQDwE9vUceHEVzA5FRGww5BSigc3e1ePLnkGByd145QnnXMsTf1Cd8q97B3F7E8FyUd5LwgGsAVrvhX9Kx9pNz4",
  "key42": "62ozHc2zAeM7bWbpZSbp54rZmGMQKNHtTTUarPGecSqjhiEdDJAb2vkYGpc1zJGnxGoLFaA3uStkC4QJvrqBFuLf",
  "key43": "HeKDrEobPVUtvh3JF2MKsqWy9Y6JYGekWr917vshDXMSjswuvD4ZnnBai1puYdovd8XcCJAByY1ZQsx2BsBh6nv",
  "key44": "4gwK7A8Yg7QGQPct3oou58rF1DKefZeRrJGiyBbu2aRh1xxWtKCGKAFnLy8e5jceXzaFntWRJav3hwsPk2UFsQWh",
  "key45": "4FQkZy3pkkAztNDPq7iTtffXTAVw5XiytogLHHrPSBuRUpNLScpTomZQZnkSfBuB2KQDJxHdKfvhby5sjmgtBQvG",
  "key46": "sdrz8xmzL5cxeDSWD12ZfZnx8e13kg2A3bJXkDkNUzJcMfmVknL9yt3SnT84QL8YaNrZGPf7DqjrSsRuXHAS6v6"
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
