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
    "2PRxrVNDBEfKKVKGpwEX9P1e3fs4nRPEvXCM1y7n5TwsSv56bxaQR7XcwgC1kH2DexiRnxwkPeAVbBubLiWZz6DG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nueKpEjb2avxmPco5c5xGcKdKWb7PNQSo9TQ85gJWCnMwS6i1AZRZkrboLUr1NNr92WatnM6Q3pHm49ARtshkCV",
  "key1": "4VTCfP2xa99948BFpLT424BCJX4KvGQVv7KKGkksNmY5fz4XsYGfhjdbFtH8XyxtiEPCGJk4nQdqRK2ZyVUQ3AFg",
  "key2": "2Cv6WGZ4TazopzDXJgCNWZT12wuya1fXMpz5BVwuumz4VV4quPuWUtfV9UQuqD6uV6Y5h2W7f1s8J6HgvsxVkRRV",
  "key3": "5aArFQVFZwdvHyLR1vU9vm2NiynkPvHzWDubBCmeU1gs4PyK79FdjCVMCGLiARRvvgNPfyWDfvxx34zaUeL5GWLJ",
  "key4": "3rbDxy16xeifiCTr2fXkk39FembGQYHRKFrGGxh9YywqDu3hjBsjvq4Ea6f5X3cfzhXqpyB8e1HcGYdGC2P6b9Fg",
  "key5": "5SXizz4UAwnzmGvumjxUFdFxk1TXs4B2nS4yBMtSXYEgV4sRKKu5EU1XgYArxZRZLDeZpQnfieSpyUwNCj41qZp9",
  "key6": "58i6y79XpswUxYhuMq52b3LekutSgVhw2WkMVSM9mLxfKLosHzELPQXRqZpXsjRzrN3d69qTTVwaV3BbsAso6f14",
  "key7": "5Pd7ytGaigFpsZKqGjquSk2mqPFBxSHPiaRRXxT41z3gZvtzdpcwJEG6rgu38f7efQSXcgUGFQ9SMiku79u5hqLV",
  "key8": "tUEJVyFR4NRZ1fop3HJXrm7JsNuUT9uymQP9zbhqoUHgvb5r3CxjgsfNmGnD5hxRQtdvw11AbzR1ggyDKtxWTjZ",
  "key9": "26TDuzj6B6SrVfpzLffFs3Wei9zzLJkk3Ys8mz4JPiHjRcKDVeDRDUsYHJfq8wWxVfwQk2fxneREheKK91r3kuY3",
  "key10": "a25VYemc1Q7ecTN7stvFcPCyjkcdVPNjvWaYmwTqraJdqeS1Yn5x9rtgjKbNK2VkDfTP9wTodw8UCEFq4Ef6u7T",
  "key11": "VNGQaNCVhAWURkhEwj7nLrsKykouSzpc2zfDUVKpCeCs6p8ECNzqpSrAetF6QDUME8qoKc4qGwoSpZRzfVZvTYT",
  "key12": "46Xsbu6rnK3jbcEVNCQErhU1g9JeWH2T5oRYdfmXxQLULTmjxwJ6BXNM3nSsd9niJSLdEEPdkV3vXjxLnk9wtt95",
  "key13": "3uUQVGrdwjXpKWhrMhmiVhxTaqRSHz6g9CuwLqNEvQmEANV5wG5y1WxyKMHgZDLweWY1fC9G2vHdgCHCRE9T6X91",
  "key14": "uHaSTuGo9ETPTKmsK886HhT71rQtDDr3GtULwpJLJqMqA7nK7At23NdvWhTQ3brWudfpwtGP2A7h19E1yodNtZ4",
  "key15": "5n5bDWxcFyMfTxem4tiG1dtpBZbWxg8tUYdvDzXg3mKfekNEZnGaH6P85D8yMYsCJukvSQQNVhFSgJjg2omVxrpx",
  "key16": "zaD85YtoqXhmLYjQcy8p5z4CfW23wE1dh3h5Cv8shQyja1zr3vDQB6giHFE8vuZNR8b6bVvUDxDDnTbHtP6HDav",
  "key17": "3ShPCDRL1HATbSZGKuQmtyQ7HVfMZVHR4oL9AWvnDK3VwvzjZtceM2eSEDVFUFDjXDZg3Mantnw7xzVkDhzf96c4",
  "key18": "XtrMiNL947BeGVrv6aY2v4Ghbdyp8afwEQo7mwvrpzXZ7BAWm4sUwYMDKYwyr2y3vWEikLwCFHmwRKkQfyBD9KR",
  "key19": "2iREBDLGr7aRSc32zZptkruevYjroKTnRC78KWT43xngQcj9GKGATwb3VFDvbVqiCa8EmShq2K5UxnRnBwy2QsDw",
  "key20": "eWwwzZ4J833F97k679ikhkUJBBuRvdaRmNmxEE3kt3riboGSuDyrfCYMkus2Q9NRwB3NxiJkEiGyedomohoVpWh",
  "key21": "212iSL3Y2G2K47VAhyQfGmspPzTqcXTZpDCDRFbiZrQhQxz9z7ix9bxY2sPps52HgTEKacRrnS5kNUqS38fsmgLx",
  "key22": "vojCYnQ8Lvo1DcvEJ66imcMSS8Mj1HJyNFiYgSieuQZWQ6R8TeFfRS3bwTi1mG7C63WBu5kbiKgARJPPxWw3fQz",
  "key23": "4CZZzCZYXGCvqbN3TdNFRQ2twsXTrd5JmifAiDadQCRNU34kQjouwCkaQWcKUphrdcw6jSc8PyjwK8Fk4on5VSi",
  "key24": "5u6Ptj8yUJns7KWxPMrLprGFDATaqEGNNgWnWax4wMWwVejXjszvahmUhv1Mp6QTX5ZmwJDaDvULPhyeAcY7pBaV",
  "key25": "2FjZujLL3augrfDsuvKaZVva4eAe64R7LG6mABzBi3s37euMLr6WqfawKZfttorLcdi9MRYu6m3qgc5qjdQbYPVv",
  "key26": "2hBVxtk5ukVDsZU5wRKdZdvtTM6KXoaviSzmwKzjMYqqqeypmcKDtQoesPerCCBDZjNAsaZkdCv3NsZSppTbwk82",
  "key27": "2bwnqSUNz1i5rWwCkut4J1aoAJVhfrh6LXFvZTYkGtNcDjMhscmCDDYfBQuAw6JsgTtCVDkkhMxRNWfPZJYxyGFp",
  "key28": "2AupTvGUMRSrch1a6svAeRP2mKn8kQoZgYtaf1K3StazQbPA88VkqZLLqHV1mkS7GUubAksKTZw6aT42kASMbpPj",
  "key29": "Y4csDxbP8hsh1YGqk8TYcyuHizKyALegxDqydwGBMpJs2vkknAHLR8acCsPW1wpMfXPczGf2byzWHEMRERJTSLa",
  "key30": "2qCoLTURmX3CtUuea8d8yZkGFTb9xWJB4pFfg9An4GFHveawxw3q3AL4ySH6Jqpok6BxsEswtCZrBstKtULkNQc4",
  "key31": "5nJ13yXB6yhnwKeKSPUqtGfa2X6XqUp4kdU1KT8Q51bTVTreRhPuf2pHmKu9psw6DyzVf9dBVuLX81kmqJ9Mq3mR",
  "key32": "49p9qCEozRunqzpqnsmGKgmdv1996ehW9M7eijkJNSMk2yBjfWMeGdw3VqdDjGxdUdURqCHaWyBmpq8nTBjfFXoK",
  "key33": "4X1uaZS6z7c1KZVZepgyvYh3bwPSS5HU4PXkTWjZLpbYyZAdPe3Q4X9sq8EGkvwtYGLtE35U15RkptBry11yNZy1",
  "key34": "EHrjTB2qscMzfcLMEFesDURLt7YxzQoXzn9QyYahBavv1ZqyTCT2QbdzMSP1bg7Z4z6H9CEqjLgVauoMUDeP7L4",
  "key35": "4JtHMgAXRMN1YfJn1o6yJGENEGRfCv5yBcTi6U5zGGHRgdkGyLwu2F7BT8SjYqTx8nHWM55EGestM1sc5yZPyARj",
  "key36": "3jnbauuxvSpbkPhtEpKMByGJxo5FZ7cLEJnEvx3fYMiw5SCGNwLned7EvAgfVkZkqv5aeAe5JSMsMVnYicmnshd4",
  "key37": "wTeqbRStw4ayo1UX8e8V6wixwDgnYMuP5Pz8pF23zn8xbpV7bjrM7mXrFUg33hTgK5sQKuToizdLpSqXrVEpcHb",
  "key38": "29saMtH9GPLsTyoUu78CSVqwzdZo7s6fcJwxbuajG7HqbHDWGWvEoXy92QBP7DXcvfBdtzFnzNBg1BJvjmzSERUt",
  "key39": "5MZReb2nkeEwHGsTnqoow2iRG7MzQDnzT78Xm5rNfYiyDiaCoMu6fQXByS574kAVheVoC5rCb93D3wnoU7fDRehc",
  "key40": "3LEXNpa5CFUpjxYaFDxZ15PvuUpuM3A79VmUJSqGuTFQUam9Tfa2Rbpcr4AAHUQXL5mMqbsLP3iPD5oFCK7R2SbD",
  "key41": "U7gak8a3DYEFpijGtxVB8J5hL7TdEJ1w4TF1jmoAzNREhYvYx5idmLNFJPmRBDT9gMgfwZgcWAdXa73r7k6w52m",
  "key42": "2pLm7wkDPz8R3WfFRaDHYnaEVh7QdtSfVbH5tnCogFntTbupJqAC94FxFJGRKgDdstLwHnr3nyJPYN7a14B2fsgP",
  "key43": "bBLyuiabEcm6SkLcC3uZG9cwM1RqN1SovNS4eLSYmRmkFRoMux2xMndUhPSEFc2ns2zVYAGZNUZNp2cpAdpuibQ",
  "key44": "42PZ9q38xBDLsY7yxJwETrcbuuzaACUxRA2MYgWdmVhndMK8j1VjRFxfj72NyUb6dVPaR7aQFdc6ydPCJF6fVZVp",
  "key45": "4fjfropQ9JXPyLhTRwQ9AmHizn9EUWxtW2EbSKHSm5Wr7fDRgTbkHEmmqRbjQguR9gpZSMKQGwpUYJDZjn9F2xkF",
  "key46": "8hdaQbXuA7d7NtzQp5xrvtWrhg2y8fY87eCE7BoJtxG2QkPuSi8LkAyBhAWJ2UKhYDBCsQ2jZH5FGiiL33mG5ZT",
  "key47": "3wfPSz9rWD5fk4TjpfLWP3ZeRmTZ1r7odbCaBgFngSmGnSC8nBiMLuh3uZdPhpRZJU4tqCufN8F42F5w1Z1p7xGK",
  "key48": "2xsZnszLnRA58q4U1c7icWbsJ1NvEWiiajeYiqfPyHNEE31ohUZ7oBaQyVGGjVBSC1oP86WXhkt2gz7hZ2ryv94g",
  "key49": "4QrASv4Vt6kgEZFveR5Z5xWb1ozdGMxGi145frQGwPqGFCwwjh5FWzSv7VF3WNSaxyn8PKESewfPAxpd4u2jBY52"
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
