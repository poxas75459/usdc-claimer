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
    "PtD1GtnvgoCfZ8JxnYHtESZGLkao1Syh9KTgS7R71nkKmDM895NWkzuo7pz64VfbYp3KNNxWZqQAwDyVVaLijMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J83nJHubwMG8dTPNEvfrEY5QBoydvHNsXKf5b5AJwHzF4ZBXYW8ztf7jv1jjHy9wr1DLWUh3suUZyyfCJGAQLgt",
  "key1": "25Yitqn9tRspbAuX7FERkAEwWDAvkqYj9Tuh3Maeg3NL53NMHgX3JVcYnEgJxiHogf23MrGc8uR6DbCYFPipW38v",
  "key2": "3mR2iCjmcEJk5YoSaHdE2QzAJhnodHeYProzGrxSjLVs3KSkn5xyw882ELKdNy9f2rLDBzyaPYCeidc53FwK1cHj",
  "key3": "43L579dnQsMUtUWt7u21dKjz6WyW5iarx2Gi43ubEinEW7UCrAJnpFRGXWEt6cmRXVmMT9jvX4jLRZcZTfy3xMWd",
  "key4": "2FE413p1cDph234uQC3RX5VwPw4REmKpw3FmY67Knr69ZCeddnCf9BdRCsBSKrLy2FGPnMh1Dx6PdyUGm344EcYc",
  "key5": "2yJ2AR7GYdr8cuT5dxB5QVHLSYYnqDbUEu3sv9w2ALFPjHxq1JNJvQRVYYnLis1zsMjtazuwh9B843nDdhK5ooAQ",
  "key6": "3HWT37mjwJfqZMCjwDacJdZD21kJFsjfsYRGmhyUk5P5uWyXBwzJSRSVRntZk1cq9LDk77aoqay6HDf35eqKyDVA",
  "key7": "3nBDz3HQhAWGpKLdcXBWvEL88bbQngYstrxrwoLZi1VcXvhLrdADnTULZrEr3eKDFSeiYh15FVg6uoWGiQZUZDy9",
  "key8": "3pngAem8PARrzYKT84xp29S9PquK3KLJYs6sCDt8CGpU8ZbnVu8gLxKPifvYttntTtTSHtiRp6RvAbjhapyPkYWA",
  "key9": "55244wLzgqu2CUVhZ25egdcgeSRPbPmDaoNA7hJ55cQKodgUSeqea7gkK1dbiXfc2XciSrMpibpcTYqFFYW4q9wu",
  "key10": "6AawZW59dFUnMPuhwH4DJEagx8oA69m3ofSqoCk5zGtg4A4U9rkvYDVLvkNDd5F4U9ZeXXirviTMwcc7MW1XEkB",
  "key11": "4bjdTXMsdD3uC7SdSWGRBXNX2WHjSoFmPD9Dqm3KkCETmPqh7hBwfCQVEarbSQ4u6vT3KkkbMr7vUhLj6Y3horrA",
  "key12": "2TWsGgs5X8QzYfmmmR8cQekjV1MTqX8p64xbE3G6jVirrG41g9nj1RtmJ9rkP4wdHocMtAEEEd9LvEuJoQmpZ5tu",
  "key13": "2xZ7RV9TF78TxvCd3qiecHEoWCgLgSpexW9PEiQSDndHofWdVFXZ5dyffQigDsyirZr4M3PP82x4wATuT8y5rnMs",
  "key14": "3bc6m6PeWpnyPpsjBTvGnWASHAtYvc579EYEdbzHeq5GFzCGfHkNJfHLbwEXqYeob9F8hXrBPZWWRJRxEs2d9nLi",
  "key15": "5LhXN5Ch2SP7kLEGAnwjau7RuXRv2dUZU11wLt5iW4ucL8pyG3RAvdQjrUD1dNqRB2Njdxae2PJVuEqzXWpUSkV8",
  "key16": "D7ppWGFubaQAcg5fdV7LP9jQ2JM8Z4dGiqsHuBJ4bBPzQcSJL3NYWbq9yjh3a9f8MWJtrVieuCP45eEMTxUpo6s",
  "key17": "4XQbfwTKyQGjHZ1mEs6X1GTdwWHEVsdaVEicLxmbUKyjH62R9Rz9w1oZAAr5y6nJG8mFGG127BwZTeTCyP6Y2nrD",
  "key18": "5dekaHqo7Eik11Zax1nnkJ1rGUsmPiM3wmPaF7LaFXUeBQgXfNToBjmAe3FnBLT7MjwNdNnBrHHdojWPYK7g7uFa",
  "key19": "4nWn8Fceb8RY926dvah4ChS2ozWvi3daiKt4ehkz3VASvWXxmXyfBtNVNCWrGKCxu5u5wzxuYGHz2dbCsp783mfb",
  "key20": "3g68X63mnubonS9M7rzVgFq6F8LdvEwbzNdbMF6mRpkNr6tqWbHmEsdN31kThUwVtRz9DvUJ4REWGL5ZZyaChdgo",
  "key21": "2a7pbb9PSFGsaboEY6dSsmQDbVkLqznCZpA9eHG8x6tfUd6ZfHN14SxcXD4TwZKQZ4mkeoXEkLrjS7TyjVhBZFYu",
  "key22": "2ZY87dk9viihPjmxafGRKCjFvvEChh3RW9GfhAHzUPy53MPhT3MwFwgRFkRtNGqo1ZSbDGrYFddZWbbo1k6xFPYc",
  "key23": "5FKoDLc6FME2f9E9BgPdxzExmfbKGGtdcngBxsCY3bRtQ27vAZJj6RrTbbifYYMWePMVFiBrapE5F6tGNsokBYyd",
  "key24": "5rPA5egMJQPzY7sdQyNAtTVvapqBLR2hnDs4gkNmsn8qCkadQdTLMfUpz3YNnPkACCgPvBN3Uu8TiJSpL8xLmyt5",
  "key25": "3P5pAC3uBLW46KqvEFNJRsWTNGkoLeiTVJVNVxjA52m5PPkKFE7aTn8Lwe4ZRYSfqos39zputaNKv233NxVC3J6t",
  "key26": "2DcquXUSZFWoT3LvbV4S3kGxPPiKDnf2aT5qk399UZQjZGV7RFQVEuf8bzYXvr2iyF5DXB4UNCGcMfcD34DYYvau",
  "key27": "2RkvxocrDqzAkHXqy5KYcSzcDxrsGpumLwPUCwH9J1ewkPSjokdZLKhxMF9nWbD6c19oLrt5zpDTnr8NtCFfrg8p",
  "key28": "55JoijWcc6AusoPSee4ij6dA8nMGaac9Rvn4jsnCVDmV2x22FnmkpVrBcf1sTXstToiYWkoe4myqwAuj8cZhECcd",
  "key29": "5tZ8BQ1ytwTiBhChWiH67sRqdRbiByR4fmT61FsDm6AXP8Hpea5czaSti22UqvEbMAtpBXiEiZYy8vZxS4aeZVUz",
  "key30": "2KYNz2QJHorRNrxqJYATyP4Vt13LRmYsxmvMntD9LLbCfUBN4v8vYCC4LFGyXf3NbiCY9MCtbRaEmR15MD5PkLcH",
  "key31": "4GgNGXJtad6Pq33Ty4oWt3ZWvVjXJgdNSpw5DbCw8oUwuxNgY2WbdsYL8LACnt15YM8GxTTQS5y9gC9BnbK1SmtZ",
  "key32": "4eTjX6ZcsLKjw6gykWFX3mWvWxuzaxqqr4hTTgXBF3myF9WtK8c4xMSgxfzuhM6kHu9jKHtnkHsBRQ2wtRMKtHKV",
  "key33": "WTd7iRboaKY24kUqLydxKknmAvQxbqo7TMZFnMFEPxVFNHpbWUdnT23G2EXUqGL1zQVyaxJrpu5dnn5JbFa9vyS",
  "key34": "2fKkGmLDE4m74rMwoPhhGsU56tfzZSkhNrWBdWaTt8sj8qKkjeuHzTiPbmDQS8eLsCr6o43LdAymaX2w8V9UQN9z",
  "key35": "3odB8aLNmv5p91RFsMbL21Qnz3zTG2LJG3kTcz1zZDzsMA27W7A1oXNCb71osrKq78A3HpLp57u5AX5r6LPrmrX5",
  "key36": "3vHaK7MAJVK7TBB5sMDF75Ca8ZZu9wnWx9aS8pByFv6xCN2onccuCzqgMxq1K9NZigbBHiM9S5hxLaMF15na8rc",
  "key37": "44ySTWJJkqbnMk5wPSe1uf5mxswUGpavpD3kNfJXV3Po62TP8n99a3hmoQfhdKymUfLNM7Ci83gGG2oNPBbZhQXK",
  "key38": "3xSjTFJTuYYJuccP4192wUNtyVSwY2rW8UYZ4twRp8ZFHoJkb5Aerb5jgb199LFZhEhQREV35wCRpcXdZjndGgXy",
  "key39": "4YuXAQRefzn4F96YQDxAXWkiGC141i1PtyHqrw4Dp7PBDCrYHAbtcaxvkNykaogZdbyjukfdtZC77SavJjndTiF7",
  "key40": "2kNcEESv5nZfmVpHr6GMKu5Ujk9s3zdqzUNWmh5cNzuK2PRHiQLQh9VGkDQsDdCxQLEHdsxDnkxbcMdFX3Pfb9Db",
  "key41": "5497hpaN5haczCFLudsXPdMGhQZxfzeeECC2HciXQ1d8VCKH3N2gwtXmSaa45cbvoRLFgSh9GXaRuYArVTtMATNE",
  "key42": "3nHy7Q5xHGwp8u2TR9CHszVaDffPbVupSQJfAoZcUQ91Qs3t8jevdQtrY7uRgXUu3YVQY87UAH9p247LPddbithb",
  "key43": "5SRX9QoQpfSszSznvQbbq664fppKj7yiBdxgovebH3CGRQAgKVffH4HX2HRRjdXyPZJJASsjT9zjR76DVAMEMtLN",
  "key44": "238MzSrkWt8xLCHZsiw2gVdtsr7tN4RLvoukDZuodgKvBsadjp5NhCRsEzrQA13Ev8CURnVJxXtFw7SXhX3xdw5K",
  "key45": "tUkypayUMvku9aYphxnFfrXZgyjECeEAzWq9uCY2VuphHKN5JMtQZPTXUy8Dj3GSmvSdUUcFZBjr3X5fpB7FQ6U"
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
