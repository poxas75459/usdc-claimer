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
    "2vpxnuPZugArY9w3jr6jRPuikZ8fZXaVNY9pDtqVY3vhmD3XfifqwCR8A1cLUPzP2TzgNGCQU1uPuawBLPAABneo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8yoBZB7saZfmbcVxevmKCZ8JkHasn1ESBwTAhdxWoaoGiTr4HuFwix3nNrMKwevfiekzYmuNgGY6YzmfFtp2EQU",
  "key1": "3dwqzajMMhKyFF5UcyeGTdNtFHRhYgcSbzjt35NfnAHZt3hAAf7PeYXmXBvn6HubcvFJr1NnHef2sTKQq7vQkD4P",
  "key2": "4StaCHY2AzHjvsAiAB4yigbiRkV4mMa33mh7vKNkkSba7bbaDYpn1b2g2Bm3TTeHgYZATwy7QCP73VSfWBMKj87t",
  "key3": "49nFVXRrf9K9ifLYd7EcnrVq1oWGegYwQcMtT5SF7hfZdmdweeuHH5hnxwGgfQBzFAnkNE221bku1nWYDLPsYbpX",
  "key4": "3gK6j5FgKEAi4YJUjcnYYNXn7nynBaFKA7Ynj2o3fZBGA2CYt5q5mRkRRgaf1bkL9L6eSK1QymJyD4sndPQ7TQ4Y",
  "key5": "3KrXrMHnjYPb4vpVSpoHboZenNyjos4nV1w3wjXFUFBPXS3LUmEyXbXryAPpidvmWKexxHTv5QGzex8kmX3d1w53",
  "key6": "1YcnegFpfKwsvGet1uryABzhx7yHXZPGMv9w4Mzi5KQYXWyBJK3v1HwzHXPLfwSatf7UXZmWbWJ2HPVJMfaiNFG",
  "key7": "2QCPXkYx92Fu32rc3e5kfhi7FAQWRemZmVmFdEtVwbvthBmCTbJxBjN8Vauya4kKEbL7hD954DJKSckwoSX1GbX2",
  "key8": "cqiyENYxywivsSh62FcESifYddf4H8aGuDWS5aYV2Z7t4KQ9d3aVR4UHMH6BWDmPH9A3cJ18xDDmrTregYadPG5",
  "key9": "41UTAFxB3bPaxDm6JF6gbavT3hDgrfg2dZqDsiYTRhSB7SEwN2zq89bzqbfdqb2D5vKJJoiGfokSCQdQMmJc1usU",
  "key10": "3V3jQsSDXbb7nXWQPDwg1zqmzjJVEiKKpGmHi9GB3jtcdmiuvWiBdEjJFWHpTtEfgjPgmd64q8Vw72BK7x9QZtZC",
  "key11": "2oq3USNaCEAEU36Re6pxvSCyRHHNPnPw9qGUB4mmk1VxY2xamwPvU89aQWjJT6KN1rP7vncAY6QBV9FecfGR8Sw8",
  "key12": "NrHBoDf3CkUi6joK3SjcPC7JPNFbhdChMt1Gf9kBAqXtcvxt21cwpc12DhiF2FcE32vJrKDUB99xnjESXt1EvRH",
  "key13": "4CWYFQTZsgGriTttawRq9GKCWVt8orSmg9AaDY8suRFurJsR4dooj8aodYJimAgCEE2CDp28DZShD4rLgEEXKucK",
  "key14": "39X97j6UyuGJUYaHtnDdLFVou3CLKT1vGTM7fw8VjcDZQBh39B2yoDmC7ptwxKo7S3tc2e6G8r2DMMdZBCibQD2N",
  "key15": "3HqY3g78hLdpGwNrhz2XWa3Fas9ar7exTqTwtv6KjUAV4zyg5mv4NUTfD6GXf3PjMeqQAEUNKBQ2FwZxXbJhJLE7",
  "key16": "5M3J2gUx7iTFkbWxXZk3bVcPGcnzrTvYXiE357ApWWMxeKnozDSzzSQZybddWYHjGLkQEKxTvSQnjZsYmi4wehcP",
  "key17": "48ATeEwscjgVmQ4C8wqnfRXrcHT4v7hQPCfuQKW6mYVLav1sjcw1xHHPkDzZ5BWnebjmwuwS9fUrhWSy5nURR3oe",
  "key18": "41xq9sfEZr4n8QEdfKpfRfYUSsGPJTZwAZJKcYrVsJboQhZCLZi3FmA9A1n96EAvGEwX2XiJeiVoiZcJVmH31reU",
  "key19": "3NUzrz2ZNMJzHiCzPj5bJDJNVF2haWWi2ihEreyW9o7JVyZwtej55upxzuLPtpVzRYfgbApwbc3eCRcGn1Qnxwxj",
  "key20": "2j73UsbbL5tLBvvofuNDAxhQMEHvm5CybpJuD2AV8jJean8HntAPvkAkJohEqLFbYX4EpVFs9quL7KztuCDs7spt",
  "key21": "43zc3FGgxGRBJDKrEzeZDCz5yK6vhFm3mJSHfRuK2yaetPBvxbt3y5mJ3a1rXuCJpmTZUqnszSGdD7Xcesf2FRbp",
  "key22": "5nXZmuA8r44RTe2fPQe4KDXiNs6urCX7qo8CKN3JMjZU3MTWPDmXBp2m2VUN9prXJ5ukYVYnyj5vr86GQvkL3Tjy",
  "key23": "61XK7t5Si5SDDrbLCN4fJvLUSNVUHG8t3EmmsaSTN451hxWJ94jbCZZLy5YM3GUtW3extdHqRUkfMSDDTRgPkqRK",
  "key24": "3kdCDz6Qm9fNmdrUhYrzkTkw8zuUEkcEMW6ZvBbLeyPXDPpiMBvuMnw8xgcpfGyRS1XuCEe68xeXutM7AAAWRSqz",
  "key25": "DaEkqFtpw5CnaxEugGkKqArXJtsNyuTDLbdygFzv93hWNLS9dxpt7YCMRccxyQB8NN349y8KXr99BmjE3B5mn23",
  "key26": "4CHBvs3jCTpxozq35Tr4rHxYex6MQzBm4zFXMiozykmz1XovBpxsxcaXUrxkvnZ3PegGLsUwTmEzBW1noKTarzLX",
  "key27": "5dczm4WehAFtfeFt4yLV88oBt7BCk57EE6fHcURGrpNrK4KB7Qn2p3KvuSaksEVqBP7TVUGdLCVn2hWZoFWxhhE1",
  "key28": "4d1yDGQkVyYtcqy4vYj4PtEXZPoYRFw9HikoZYedosuF2NM9rxTUUV2AJrZ1T2LgfmesJ7S7Hh5dgX5abQATV1pY",
  "key29": "FuerzxKNedi1nMrL45uL1MkBKftqJsT6U4v9TqVDUMHA21pLtxiYzfuGaaUGhZiWDZLFUVukSKCE4kg43oEREKX",
  "key30": "3vYDV9PzQh4fZpHPKamGoS68oRy6pqHj9ApUPUjXiJEHpjyGLxJ8QcoKQBsdeBwH75xGMPqsbGPprYALNQMakGuM",
  "key31": "63GM2vdNR62yJkxGtYsxRy3MoNEUjkK7yWqr59HLYXwjNhBra96JDqD5aPWxQu1USgvNdVZ4gpK1EHuLNAGVF2fe",
  "key32": "78dtLD48nevMeWsj3RTvLcqe3tqBvAp1z7rV3gkHn6rfb1JJsHwzrsKHRinQtuzyTLdQ28Wbb4cvHa3GjBU9CZM",
  "key33": "5bdZoFzsazb61WLshRKgfLtYp57NZ5tqJ6j8LDcai9UreLcCF1CbBCaXbNEMF78zVJUuHkUCjqAfBWuNAjUY12Tj",
  "key34": "39mq75Fpim7R7dfS6PCrfB1SKWF8R6VQob1NuYj9Te5c4u8XripnS7YKBMfpBGJdkX2jcXDGNFPDt8TrpBRpNeG3",
  "key35": "47e8TDgwxFYFcs2SKdLRAtpwH6jVLqcYc8RCHWmtXxzX8tFbzaHYn3hsKnvqWPSXx1vGFjFrd1CJxU3e5ecXFu32",
  "key36": "5H7HSZfeczSAqnhCNFyT9y6Kn1aDo9JNwHLEKGH1dyWcxtbobJFbe4xQHPJKCFdWBJJYbCV73gZDGcsjuDkYZJ7m",
  "key37": "2BbgQgFNNR5irhd1ssSBjGECCNQzcK3fejZqzyhodfT4aTDfxBaQQrRRod9D6axovGMHh1TgtoiES4bkNA1u42gt",
  "key38": "4fDaGnNWZfZLmA9syDsiWgQX7GGLDXG2DUhFWGzWPJFJcgrD7bBkow7xJPfqWBDJsrmH8bG7tgYKeEeop2doW6jq",
  "key39": "3z48vg4bnr67hDTBfWTVTKKyUtKUZq2Hda9wVLML83evFKCWpkR2Fn6TmAocDopJrmaBb1bfmj3ZLaFUtr3JDw1P",
  "key40": "3aYtYkvbgbu1hjZQsqCtuZ6G7aRhAJLQUzLrUspLLUZBns4GnrRG9dbpQY19idjjuVixvi6pag3uPcbfyr6PQrdm",
  "key41": "225ANbNVPVGPBkDRtyXAfQxp4Qw4Hunxc1ZJ9CTuPEghuFbGSgd5D8rGPfqTUApCQwWXhM6g2nSvz3R7nZrSgHXe",
  "key42": "5TCZVCm7NagiCZuLfoo3txvj43iLwQX1e9FcpucZ3bkaPzTJuSKsQMYJTEoSZCLdfo5MzXx4gn3h58Z8PPZLofVZ",
  "key43": "2S3ASrYUGL4E9eAg5DFtR5SpHUmZcuJjTVhPUD8ivQaH4RTcUTmgvWE82JBpwkfp6LA7pNBa5ukCuhwUdKRvRkEf",
  "key44": "4onKoSasCbMM5sZ2jdxjdjVbLwBGAWBWQW741NHG6k85TkzE8gCY4xKHCu4C5YYc9L8LtWAx4ddbbVzLygVz8uon",
  "key45": "Nmm3HqN9FyN3xCCasHs78u5fwSBx7hYXqnP2H9z9XrSFtfm8Lpo1L4SLZu8Lp1N4HFJWPLZGF8FPGL6vMoyPMnp",
  "key46": "5BGqZj1Z8QGQvrbcNpQEeyyGpM5uFASgnyR1kSnZBVizB7ThZTjBb11ipLGCF3uLZtSuDbEewi75vkt3dJ7FiHfF",
  "key47": "4uM9t5yE8cV47d31TaPN9xMMMHXV11K9iKbmLeLBXGovdWskUqnB7Krx1cXnNNQeRDKz1ox6g2HGNwiPPyUcWAg5"
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
