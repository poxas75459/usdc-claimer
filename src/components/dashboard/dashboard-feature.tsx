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
    "3JZFcLH3XAt5LJp46x1pUB5e2RfkXtdUi4gQwiYrEQtUGVD1zio1RSX7FFhTwnxtda8VkjXX6tWGHnPcRCT7Pqco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sd5Diaj3cmzS4LskhhW4mgEYaPs9oeDTwkrz1kKziwBkjxoC6EXspjuDNyroMta5xNiXEHgRsPD5t4ee8ZVFtbY",
  "key1": "49KefkUZFGVre59rxT4XiuEcr4fgvB1tsUKNXPauMTnYP1V2mRLqRtmWw2zzUZUZYY8jmkoudpLFyxN8XP2s2DW2",
  "key2": "4J4A4n4hguYNFEx3x3XpTyD2Y6EYFbEQUp4q2jCs5XzYxrJAw6B7dcdwyPyxBwfCRu2vRbEVgNPpqDht3NLAG8sH",
  "key3": "rGnXoU5EgKtqVtYgn7jn8mHj3ut7F4fNg67FnNjoTTSkeMpcZ2ypiMS89pMMUfS2XjF6G9ngvYVwLaMH3DX26ej",
  "key4": "3dLhFn95hUH6qifMfDn6QmGAciRyYBkyY7jp2QjJsRyC8voRTtKvanRWCp7ZejEdcKupk4PVoWUdxSzDR2ahARTv",
  "key5": "3QLaDcdF6dsyQWgtqC1KcpupCBDFj1suT6mM2deBU36uFEzGxDcAF5ehsz4pL3mrrXTL1a1Dq9YHFngN8tvznwSv",
  "key6": "uJrS4mJ2xYTqcTZUavBHnA4nazMa4tPtkKBwQ2QtYV55LFmGVAeahNkJC1QYvhAwP6VhpWKxkhwdrXKyEgr2fuX",
  "key7": "5zUytYMRjGRMHFhgyQScK1dxN4QNewTCERBYuz15UVsmVEmxgNyPGMX9vDPNhEZ2r7ANnDSfxdbLAnyVfAsGHA4k",
  "key8": "3Np3zZSFHMVK36BsdbPXA6Ej3RP1NtAxNv9mXHwjHJm2MjGkMeiXBe38cEWbrEuQLJ62v8mtyhxYnJTd3Ma22daV",
  "key9": "3FLWthXA5XYupgDFa3mt9bgja25TzRxxy9nPofNuvLjzfvXVQwXkehzmy5562MvAKCLiTk7SMeX1MDrxDqTzWtht",
  "key10": "3kD6JwPxVfZ4gaG2iDRpobXkkdLkxavRZGZpRh4LLz4hm9MMVc9onuJaRLkLuFAp74V3NKY3uB7bQocx5zzARDAG",
  "key11": "5jc9NTRRL35WZaXEoUwRekBfzZBxuGPTaEhSXUSnqXEG7drBj8F8PnRSqNU2bqgbCqqnCfrGvFaUMoU6TaG9zRN5",
  "key12": "3RWLoW9TkFSMCLY46iNKnZFbgxhUteWx7MySn6rsCiSuaQCDLV186A5AAshg6zqWTiVeGKjGkDwbwZ9tsSu2kGYD",
  "key13": "aMaS8G16TgJfUidTrKhyi7T3vtr9y4oNjgQVasdDPLigGUcXJ6FEnPmAYt16ZTiWMhncX6LqcWJkrcbEJvjqYTg",
  "key14": "3ti4sDtUGEboAmLUSWNPgsnij6nk66WYtVyoZXo93PHGvfNThk8wAMJsHJAxHBsSNepeF9RvSg5boncjTPEdP8HG",
  "key15": "3EKg96t4UNAm9isfu7Qpu2bZWQ4hh9Vu17HquAZmYCqgE65NXaabV9pCTCTQxDGBpcXFpTq6zhCv8QrPi4rLYQc9",
  "key16": "4AkZ2xyQs7XjGioxJtjVa6AccDtPquRWBt3NHFxqh5dHJDtF5jPW9Sre2gW8j8RoCwJiFpaHNTr7pwWPdYzYLTzP",
  "key17": "3eAxBhnCsDwoJKePZ9dZUumBrj13o64vrfHYkidN3Ktwykihs7VCtrXk89icGf2eevc7R2HoSZL4Ns64FzB1wrnx",
  "key18": "3a23fz6gU22RcdUYZM8j5tBeu8ZrAx7PeXGmRUd4EQfQJue9B1CzePYbHX7MikAr5aHWK5ck3zG6D35XNBpGuFrB",
  "key19": "57qyXMrrkVz1yLC5hiF3uH26EvemZH1cwopwxMEw5KnVT9ezkagYLL1SW9DjDaMBQopa91mQMEk4DbsNW1RJ9nhz",
  "key20": "5ZoAVKrzDokNBDTyUodckmPVRzTinQhacTXmCt9Pz6wSyV3cECXHWi5atq7zUGuqBUwyhhQYuGW9bvBQ7q5udv4a",
  "key21": "2e5mSB82VZ4PLSyBvY3ueo6PAkzo6gGAfcDsCTeBC3PECBHqidDAZMFSkj2WbvhChUg8r9WeVQEDBUCvjj9zmpVb",
  "key22": "vjDjELjPjwNvkAdmZcTDhbzkoYMvfykmcz2QjocAHRtF8MWts1Z7SJesdxN3hPW6epeEfEzXLuFECaH1KN4mLpM",
  "key23": "BxMLgTUUxFn8h5BLfQXuvhMEFHeap4ZgcQKDuYqKE41MNVRjQ39EqGPVfd8waSHYWqWUuAJCWnpEfaW6nTG7Hsw",
  "key24": "3JJbki3EcLXMk8ttGpk4q9Mnk1LvTA7fSkRNUwz5FUeQM2T3tJBGdUUSyqfYtyFLQJaez6yEVWFaf4SuESEmxLZD",
  "key25": "i9Qa5bWSSbVybgku3f6HwLhy5XThfFub5MgpGLD4kNBVDScu4HnvpUL73szqzST2FcyPosRiLckjERJhaCAyvPF",
  "key26": "5XzAvt6PoKh4DUB7H3KBnrtB6hm3kRmEePXSMydSyJoR2XL5j9hziaioZQ3PefZuxPKaKkpfk7tUpnRqBkZkWSKn",
  "key27": "56Pcn6k1nurGBgGMkKFuwuQiTh3HJqUr1mm5k5tfYsQr8Z7P8Q2r1PXZxgJXkrcf1Ar127ZcT9VnnPjntGHWbZAN",
  "key28": "5xXz1QpHedFqfQWG47JiehJ1obyPqm5e6uiSV1N3PRBDknfV8yfbenxXzikqrNfAYzMB26pGwdmjLLuXiR7bdQ2p",
  "key29": "4FvSvaG4UsWuaRKXwZzAHPUhmMq9E6jVh71y37ytXGLBgeENKK7JHrA6CUkiBDsbTfUhfveqwq7vyvFn9TAtrGQX",
  "key30": "5Rqbt7vSGFGZYEy54ojbCwKmTJ1xBV35FBMmBsGpPACGNgHLMiyVgz2H7y2jBeNmL1BrzAAtb26dX54ybe2QYQ9m",
  "key31": "59GtDugKzfstRJk14A6Zbg31KnBEsZEYRSd5Daxhmf56Ems12RTWS1B4kHbwYPkourvv8KDMVggu9e4b9ycH64Wi",
  "key32": "PL6QJvczx5SzvpfbYEBTMAR8HvWpBw8KFJJjecs6isEqQ7YX5RmXZDDQL9BTS9oFx2idDdSQ81dsGPKPVjnMJJ3",
  "key33": "4TnnDGgVuHrGvLnbpzkQEu8R13cWzitYhgnbQPMN5YDiHjAFKHGhQmyEvyTk3zq2ArgoRBkiarF9VUV96rMbuPfS",
  "key34": "3zHc2fe5mcQ5tq7yvucA38RApbh7PdCctfd18JzvuDaB2N5WW6W8fLkJwxCDdEPBAYgzvBBGxFSKzQhGBeo1wQys",
  "key35": "4vmsSmGex2UCvtST7ZXAidUqZ4ynnrFFMJYKpYuh5CQpRvg9SFC4ynNZeKJmzUwboKAS3acHeXRGXt2TrDnnL8DN",
  "key36": "2cY4vCkyjJhLmNAjGwzZwBKVdyrCik1jLiYY43trTyCEouYmBA3QsjRLnSE8xmTu34yYzZSB2mNx6xLr2oADsxwp",
  "key37": "83TreHmWYuQoDTeYKdNffK2fzzyvkTLChux7pWVUJoJnHBiUHcFThizuwhUTaWGnpAfA1YwjC38iC7Bpsv5KBNp",
  "key38": "2KcTSjzT82sBjudcce1C4XzXW3L1RgCHVLZ31vvXeaWyzeVVPxzbfRY7AQMUurFkXXSUd1fzhsQPfgY5bgs5qMFs",
  "key39": "5kLyPSQFKmDo5wUVf4Uw71MTEZJRUPfz16YQkVEbYU8sc7WKgENE9gYeYL3yvPJvan4AXSWkqV6HmSpqV4A6v5Bf",
  "key40": "4VY3u5CneSFumAwMBK5uD1s9a2ZjnaMfsYaZ5Q8BLcTNNVRkjQs5XHZehuD82tjWMoUejKk3TCP73VwDP26YzsKN",
  "key41": "5KZY71AqbSuG3KpM2r7Kkf3jRP1dnMLRDtrNzTt2tvbdoeN4x8VC5xUg5yvDV5vzvek2gVwEZSrsRi9AKa5mogs2",
  "key42": "5dhutYeEp1LtX4N1zLVabpDW7zEdp58pC7GuxHWCnNUM5xfFZSagY58U2vfzpf2N1npYkp35c7RgtkLhjTEzQPG7",
  "key43": "5hKsCUBoyRTDusQw39o57AgXZ1prR6qKmNEU1MM7v5bNuVE5XC7NomekF3JnRnAAqcvz262RxCMdzn23J8gE6gyE",
  "key44": "64QGC5pNMVBTe3UuLF2sf6owzY3NkYGxxK9cqgZic1nBs5zY6trCopHry3bYbwhgVsZwkNHvMJLj6X9wi7RkcsaS",
  "key45": "5emra68XzNHjoiUfnJ15TnrXS34FrihnVqWAfi25BD7dShcDkexTHRUfmRtmxkc9gevoWyYP9C1CWnJpq4JJnVBq"
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
