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
    "5W8Upr9UH3jcE238q4tJrVWb9BLvNvQcfjcQRApKfebPVnAGknpmVR4sfeGHb9om9Xz5JoHqdatPyY7SFw8vKfYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qQuRSYPsefGtiPkAwMakG5jtKrTodGUp5mXVGNtRiqL9sQcBLysbjympLzsWv2X2wwvJzgjEWmR3iL4rpTjMmpr",
  "key1": "2wntJWwRV3GsQfQQuVQFtP4HMy66zNgsQ1HFnP3aJPwGgZFK8UiUc4QVRF6Y3aQsBo6jEZNk456zMqKricpUpvki",
  "key2": "3gfi3qZMCdnwjp6gLNhfgUHz2sDrTypkc7DGM8qqwY2cNzme4PNgLwAHCUeDdEeBTQ8PyL9E7uBTANjjhM6UuCWP",
  "key3": "5A2oHdsRSYuszHvkbmTafrv1WrF3ewaBobYjLXddUCb5i7iaMxQ2wqayRR4zS6J3YGgSNAVTyLWZmeyt1rNHHJMd",
  "key4": "2DHFdVmyytnStrSkwL43Dt6uMPJwr9nkewWYBBiAKBed433f6oKxSiAWigAh8WEF6D2UrRD2sRfjQxGDqthkryCb",
  "key5": "Axqi5T3gZJw8MAohWwZEYTUnrVj33KZjjopWsJuXSh5PiJua2QLfg8bBXJLZ5kwytFqEzWgp8a5yMghTCtiRDib",
  "key6": "4xCbeSeSxib2nttaajkrKVBZRByEKvYLo6banAjSTNwxHHpD7yxG3bcA2ZQPDKbJ4tzRHpa4Xw2zmULY3uU6BUFe",
  "key7": "2U6c9woSWtvLJg6qRja8HfgAAhQbUR7isrpf8bgy6w45ddRQHgMcGCDaSfnCmHqNkMfrEMxU7XgWTorfHDw4kEyM",
  "key8": "5McEnpCpNi8KWnssh5aRuamnNQ5WUD2Eze96DXco3wSiqN8VSYjbNLxs9Q1Wcc7n3wkrenjbWPdYtuBKmtKf8Cso",
  "key9": "4Q8QsAKRcoy1u2UULYJvyzziCZwK8hts5v3iqGmc9H6yRGmfigt53Yaa1oVAUZRJ9pmkMxR22ddK468gQuoXp8Ng",
  "key10": "3W6XaACJG6YVCP1x3RMbb4pdCTAVNAt3awAeZiBXLc8TP3ff78pDuTWrTQU3Hvz24ZskW8QCjXqzE9iXpfT4u7sx",
  "key11": "3gLSQNLeLiGLa1zCbiugdkiABEKWRHkTm64dd3cr936H6GiVLR1QKbE4FmPuheNrWV8BvdiQivjLYFitVU5CkwLW",
  "key12": "5wjp4q6ZoKdYNMavD3B4RsFp91JC1YkDdTccda3zBxv7mLdUbc8kyagPyjBadvVM6qubohgg92YXwEw6X17wexL5",
  "key13": "2d7yMy6j7fdxgxnQwf1UZsmD1bCA5A88MYLfNAaZo5fCPSsWnMdjKQSZpQhBY6H8rWEY7mmnBg5ewmtaZzFfwN32",
  "key14": "5f6K52EaMGni5JG7E2TkqjfJzpsfSuh21Lcy57uvBJeSapRTQuiHN8xknP3XH3aCVhqkvavupdV8dkcyiSjo4a96",
  "key15": "63sV5vLVNh1ZFdLJVg5vtqVEQd5g1gz7MiW1mNXA5dtkP8357BXkDjs86Qz9Rjz6ATraY3RE9ts1Er42Kyquxn5g",
  "key16": "5LTuK69e3T4LBZuSHsyN1djwLweSm1KFKNrPejS6vQzF6qPHFPrHof9zshU9YL6f2FA94kC1vv2KXGwNW1bZJsZX",
  "key17": "2SvQ1653E4c2N2z2fe5wiTs5qjTZ2KKGLQot3MzXQCv6d2FdAwQhKqZsbH2X3UhYYeYQrAvAEn96QirKsFaV6MHV",
  "key18": "5HAK8TXFgLDKAw8DjgTmMZoVFmB8BZwUsmnE8KezmoodjSvdbCbAzefpqH3JNz4pmxBjdJ1m3jj9WNHMni5ghfZb",
  "key19": "2ddF1XPUU8jTaSX1h6FyEcGK4Z6dGrucxMVRwhgetVhYkjGuhJstuBph1fiHDVBGb3AjiZbu41NaSdPtnf9Cpvtv",
  "key20": "3M5cGsk8Mxmamy7m79Q3b4wtc3brQU3g8SJFHi119zMw3aCsrsw2dcnWWzM5pEmRPhDGGMoeCwp9vL4Kj2SfeJLi",
  "key21": "4VFJ4qEAF1Xta138H8MAcqfbQf51JL6wgP3GiFN4Ld9puQ5WauKbo2TEJGPuibNkN7zUSRv8ZfrDrrA7xzUdpZR2",
  "key22": "2eX9XaJwbMTXYhAzWmNsuzqZZaDZDaUPDECJJbsyajMpJKacL88NmBn3YyqZDp9VMvVgyg3Nry5Ymuu4SyxUdTVi",
  "key23": "4q4QEUGTh2Z6TeNTkKHxj6B3587fxXF88zjFiDPpVfR22U15gEejkk5mh76AN6w1JpD8nK5ySsu4nzRATqSwopbV",
  "key24": "3FrMPjquKrn4UqAtScoN8Amaed9Wv8JbxnK8T5V3DREkYHgHhxmMviucuL8FtezHiCwvJYVajz84mZhtcuoiCbWK",
  "key25": "5HVMheojjBuVDymaatBkE6BfX24fKD1jEmyjqTsC9a7bhm6hdRNtYVS3geffSPqw9a5ReZkwwWi7isJHnityYRra",
  "key26": "3KS9ewY7mK8UACjVBMzqrxx2si4Rr6NvFNBwKJHPagcscygFrfGmoGRUWKhqwzicgVQydjVFvjSXQfXgPdVAKpHV",
  "key27": "ZKa5nYVnmPk4hDpuQHRvEAk8TX2dF5dZwyPr9VjiSXUWyjSZJ2BUoNAZY6nj1RJtDcVEkwEFHoGLm73EPPQ8Nnz",
  "key28": "4wL9TRHJ7WYvPoDGJmPh2uvPs3KAEqmqgiuXKkaTGSjvQf48LVv5S6vik6Cgx8HzVEssFuFB7mPq9wbLtwJS4nWX",
  "key29": "4GfvujiNNhpH42Z734aYEjSmpogJcQfBjYdAvdxUNTGZK41tm8Axg2nBk33YLrgpLbfiTrNMdhossVZt48rmvY7p",
  "key30": "i4ewGvfQUkLpb4bWL2K7M2dYMxmuPBzLCrz6dpXU1qkchhqU6hVBZi3bozj8RngdVqcBh2a63AESJ3uTp884Cbq",
  "key31": "2KgfRZdZogdAzMgqq5KQ51sSfrimDHyuCy8sfJA46tL7bQMBCANkZEPX1NBAqDcjMbZnjvf8U33R5s7a19Q2JSHi",
  "key32": "3FW8qY1dZcq86mWRjh7ueZVvShzZc5LnsZUQWbdPffauwBrhDAqqsD47UD9y1EhorW8bNNL4jKds9qTKKjx9ckU5",
  "key33": "5ai7AEFaqe1hkDB7U6fomCELJCb5EzhFzGkn8T4xqv55rZszoKpo1bcBV6amCTjfmRkGpyu7SpoDoVmNnaGRKPP9",
  "key34": "5o8VoHD6xo8uhFPC1wZNEFUQxLt1KSswGRzLhNMZKJfQiQoFnRMkDPmwW27eCULC9SGtnBSiDcR35aU3Mq74pS31",
  "key35": "3KZjXdGFJu4GTQ82UF7SA5bxWxE3gWBtQLFa1LUFJs9E7GHRvybeEuUFzWMDKQPsKT1fwpRzgrXYmPZ3PfcRAMdt",
  "key36": "39Zzz1JZ5dWLWA1K2T51RUEGh6T828HaCY1Fdk7Scpe8EfEebkVMtnDdn1XFuuGWjwfC5tL7uCHokKKPbgDFRFmE",
  "key37": "3yokwKEbDZUULEjPfKnaNnRtFdfyEYND3FHmFg9egg298ERXmaZEnoPQ6UNFWvtNgnWejgMmj3KTpFAo1MBwSRQG",
  "key38": "4AX5aHAJpBnRS9gu3QU81a7wL8PCy3mpd4sswQjTJt1ctKSMMBkL2ehR6GRVtZUPVcr8AsvNzoCJY5cTyd1KRTPx",
  "key39": "2SDhLo4FmR7omSBUbj6KR2CZ3Zn9ogqtoUixY7nZ9ACxY46pgvNbqANojk1Ns1BsSCZGLWB6wT2jnXUmF138z3Zk",
  "key40": "3uwQ8zLxjmYptcYVaaFrdaphLq3tapjro1Kbu6HcdAbYPcR82kX6SprnrbMi5zwjSmj985hwMGGie8rtQ2eLCXPR",
  "key41": "3UcBhU8brwLuoK1CdMbC4Q5dTy4tUz6ukJXdqd74w2XPZ3rvqfp26ff9HgTD4yAmfXfmW75RmQcx4Y9QThrmonKw",
  "key42": "rbQBikDZrdAf5WnbhZWB55MrFiFwkUofFdBpzDsd8fFWeC1L4htEBVDykubxbdoWSPVvaNYHMVM1VZ35SPXduPg",
  "key43": "59NfnjJkQMwyico2PBYTrSUt42fEX5YUEz4vr3LVpZ3hN2b6hFgt5UrSchSaGFgz6GtpN1qYqLNeHqhhWXkRM6WF",
  "key44": "35K6iYdpN95eBusbVF3q3MwC7SyBZF2SfjFTG1UmVa48q8oVYz4Wq7WeXQGF1JcMoQmHPmVeVqVRwU5zZLmFQ73a",
  "key45": "3FFHMzRqSbrQ6P3mQECSKXxH2cbcwxMnTFDg4NhvrepZf9LqVd2BRuafJBKicQNBDLMpi6Bc8YHxH2CdqzuSCNje",
  "key46": "3yQ9JUTrs9xKWbhkyoTtGymsuWtL2E9AcKK17ec6998iDJKvokf4njbwdXhodFbGknP2oh9q6xCBAqiYcpy2A3TY",
  "key47": "5ehg24yc9cLwZroeHmaXD45XDL4cxqDxYTLS81URXwQSqkb4GoU88B6atvGWmcduFvnpyZjd2169jRt6iUGfmsqa",
  "key48": "28qAcEFrFGHkcdcBD5RddmBepbbz2eUTh8ErRPV2ZAXqQPNdKd9tTE4otm1UFGKnV1Jgr5J7G5mP2yUC3oQjGR4C"
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
