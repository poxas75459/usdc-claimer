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
    "5h5C1RTyi71fu2WFARhoVA78AJX3o6PrDpDvBWPbx3xx53hd5gZScjm3d5f34vUTv9DUjZXLAn7HATtu3eFpbxX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YkgQo6FxHL5MW14Ecqe2wuA9sActX6tCvt85mskF2eTnLxfnbir8Sa5PjjDpBm37YRCpsLfNodj7MNK9BFuC2Ex",
  "key1": "5GJMiA59YzAgYrMZhDG2Ayaeh5ejeCd7Upf4AspYVGXGLV3PmZ3BQmy7D52py1VBG9ZyNNn7ima3ZfEhwzJLEV6y",
  "key2": "4u8UCnCqxoGdS6iXLP2y4X13hjYPUirFhpR2FVVvp5xzR6j6Ep8jd3cbX5EuNVP9P1mWzcZBJkHAxxmrgvc5dTnW",
  "key3": "5maHFA8tGwSFedbaCFa8RbkE6WrGBqACAbz6Z712UtWiebwP4fEvHQsKGv8JXXo8sP1RD1Mz8YceAp3sZ8Jf8Agh",
  "key4": "3pvLiMwnivQur7Zon1bfCQ6iP1ffgBw2rTa15VHPnsy22f2D323vfNq4PeyVopLnqQ9DFzuFd1YCZy8UZaUEQjG9",
  "key5": "2rNpugvM5y36yFXgJsW8re6jvPMEXVzYC2JWA9z3ec2yKnfYSfEZ46M6PPLbNV5ejm5zCXcY3oduy4g19a2K88ms",
  "key6": "65Td8EdsBh48ipDhpSApKw9riUtU6ZMUvU3zAxRcojABob2FNrNcMkXgTpmMdLedMcdQsRjcEiB1T3pZM8o1nntE",
  "key7": "24DZAmC65yPxDSaksTLHsGfn5dRp9RFs6Mss1U37fNPStfnGSGHeP6diKBkoUWv9Tx2z9UjbkvfSkRo5N1pzMdHE",
  "key8": "3caUFTYiV3pM3zZ6k7vuuCff69kjYKquCPQcA7XcRx8rKFxmQ3GQsQTKVxw27C7EypWdm5seYySFWDLk6ZF7cLCw",
  "key9": "3PuBxp89FzHY5JrCfJJ63uhSn9ivpYqBB1NgzbfCHjZnuHUdJoKvZUm8ToAUVpNavgP596LqDtDPz1KryAq3tpyy",
  "key10": "3kYwemcu75FQXEWE4bHxQ77MPhor6thSuKd56qtHnkxfGce89yBUip5xJcLBK2gBWTiUK6ryknvxMRH2R82zBBUh",
  "key11": "2wt8jPeg1iB2oTzMMj6px8YaGYZ2wsPTmJRNYSqf5LULvz56BVQTj2VR7GyxMDthSNWpGdXVxb55qhyCJTVRYhbz",
  "key12": "58GJiMLxavhHbtepsGSqVMvEVa2j8uDsqoHL5BfN3CNLYfdi9TBQkDJxobuyskqP44nuwhEMnTSfagcHNYBGRE7E",
  "key13": "3MEPK6PW3JyswHeKMbNMypDmZBe2N8DkHG5TMwNMhY4cz8kaSuGPQdmnhBAyWMT3wevbRTXAq7meeDWCv6Bj7p6y",
  "key14": "4svXuNKwSMyzHgUAvvijyiGJuaaAY4fTKrgHh5c283xdQ19CaD9FktMnVkvoN3Z2iroBAUWBFs5aYnaoQ2fQn8tQ",
  "key15": "5K6b5WibbwSUjTa9DP3v2wAcy5HHn6cY8p5PD2Ac65DPMvG9RKHwQ4jioeXu18kT2DuSFF1puRpKEaFMNNqD81Cg",
  "key16": "2aVfkBczepTG5yfhHw7CsWmqMXWynZtqXuL8Uqhho4xx9YobNmeVfJPcJin7m5KSWYoA2qSov17e9Jnqiz8CunuG",
  "key17": "q1wCjM5UJv5UDs2a8i1AEeHvnv1Ytdp1nG2i36siWrAM8UiDAyS2j33byv87NoZADSmnogdi4zqKMSQwU6Nyrsf",
  "key18": "5m33C3HePidwSimzN8n4gGJaahEEz8UoigddA1bATjq1Z4UPt5hiqxMZTrip8XQ9LLtsqgPKLqTULihPxjGkCUyw",
  "key19": "54RKYYTSDWVu88xfPrawTTw3BqzM4UeGkTEx9vQVdW764dQbCidbts84PKxnAVk8h13QX2qj8qV8WBnzxWzozHZd",
  "key20": "pkdAhG4GBcDS64jnJJqRgwT78KkXQatKx2VCvfci6gdqGmNai25BoifopPZq4VZh3KxR1KEtGn9pnYfEkpDLnaP",
  "key21": "3ZJPXEu5yyUHKgNnjL3RLsFr36KmUR39aKJeT5bV7upHJJqroPftZqMKRDjPrXHeqj7x9YBYXyCepc84KgsrcTY4",
  "key22": "3nTeQbpws1vURYoYfsH2bWKRNaymxta68RdsZ28Ak6ZNzXoTcEmYt1r9vLD61pQr1tjwtCQdyCPE9hK33qBjvehT",
  "key23": "4Xe4rvFE6xPsmNTjAhuGytLdVBmYzSm4sYnmtU5ngN9mywuXhFSsKGqxq1gDazubnWhsQrkEjo5j9Sip9xzbdJrG",
  "key24": "4TjHj2Nvy4GvFXAoF3UG4dhgh4XxUC9Jf3Wu8ZkkMjgWjnEyNXR9CvCmoEvMFCa4FaxReuQL9UsiZ3A3d9SmNFGj",
  "key25": "2y1L2VzHEVfJZZpwfZJLntfiPVvAwTrGN59wCTxC17DzZLWepNmV63UWWdBBpUE4cDgf1NQqW6JYPWvU4F8ajwp6",
  "key26": "5PL6xnMAU7TMumevidRLHVLn8gCzw9eUvz8F7mQ44btAvzB4Ssn7cjcjtyz5nN7YQmhfmRq6KLnSXdJFMxAZ82dU",
  "key27": "2RuEKXF9wqhZX1eQPQ6ucXmxDCDcQrAv6axNsgxBHmyEPrGrwcB8wTG6edBacmmvGyDTGZtaU7CrJBxXve3y6MVH",
  "key28": "MpstGr2ok5ZZD2soqaZmdCiY45mhPP97GNcN4TkSeBCAtyNwfaPP1mxJp5iJzmotpv5TKjujVKqxHXthsg6aJuP",
  "key29": "4afyYTRhTmbvFrshuRQ8Hr533cCx6Yk7p15iWfyXSpeVvTMe4wpWVLKXXoWAmgFx6cicB7F6Z8c7EYNDKVXkRT6X",
  "key30": "4snQ2yUJrYLjL2sCFhaoMYrzfihbD4bEZ9t8SvMGEjQXyWNoaai2HCcRc1Hp9XGPFTrn3khHD4xuDyD4XT2nhUPx",
  "key31": "46AFZMq7t3z6UAmydhKCnNnnhEzsMFGAQ5cPsH6SVM4BysMBFBsx1e5eYhz2c1w6MyrYkNn5nrAgHtXVD1h2SujS",
  "key32": "2umYW9Gut1m9w6Jtwi2ASy38RpcGC5sfwwmVZLmfV1XnzKAWrWfcYPSGxBHcRtsuujTMe8jwPaDWHuay9DeB8pVE",
  "key33": "4dWZQu5SzsxvDHCQgikigUbq2JejVsbSfF87r15q4uYdcbduhHA58ShVJT6uoKAR65N8mXpUbKaCmNBZ7GnV7hhS",
  "key34": "4LsYYAo9BbgQBzV216dHNmdEs5fgHotSMxmS736eRL6Lhwjx3DaZ5F9cJSHaQVuQ95RzDhdRU4BJxRgMqa3erfaG",
  "key35": "3FPgATiRBEjyH5e4qBF2yYeQKpCtkRHb1nYd4PYC6Nri2ep1KKA4PrJUuYx1c74YcZJtmQcXmZkUt96vDjdjZ2H2",
  "key36": "4dtfYk5DpEmPFfbRDmEGzYheY49zajBRg1R5Joam7U1XUYH3FSeeVevF3E4eFV5WN3oe5XTW4Ms4LoHecqKAwA6b",
  "key37": "2TF96ZBDW5uYWvWmv7zQqTYCrPLLQtDXwfbDa81rvpqwBEKiXihCSTGeh232ndaPVb9rdRqh6kAg8BV2Fjn7wCRT",
  "key38": "4MHgU2KpWUuuWF9r2HTsWJGFoR3M4igVZ2BEzZMDiZRziVuBKnhbEW18CWi8YDqdTBkB3UPJxZpwRD2PzsMeaWAz",
  "key39": "2GPhwhrbV1ZQraHjWT8NqC783hwL4AN1DnvLBXnrsQxGkzNt1ua47y6MJrU9rVLXfSGDKy55Hx2Nv1hVdXwnMvs",
  "key40": "6VWV3FBFwXEniDUM3hmAGjd2Ujjv7AMSvCpxAqWxdptTXk6eSUAza2C51mNBxUqMFR4MUDAv7SQPJ2kP3EYeYXD",
  "key41": "5tmu7XpL6ovhu8iY7MJp9qSkhS3f2TZsHd8S7LnowB3BeMZrxjC5194ryyS8ufaGjE3z1M3Q9nh6G7kWTPFuznT3",
  "key42": "4tr1tJxq6kpEXTK5azPTF4ivkKXx7ULZwBe9tk2m2qn9pY5ddpUdL1XJepXxLsjxqEYiXpegyvd2FoHq9cD1Gby8",
  "key43": "3pvHYZRBEuo51C6jW3dJMthqaBY2wzEXjT8HcFvjsCE9saHnAVtidEny5pkmSoE9g18YrdqkC92B7nNbWkEfuKYA"
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
