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
    "3oaG6JZovZg2byi2AzJmf79WgvbM94p1qDcYw8eXgvinWPpEGMsvLxnNqZKMysBgP2n3HkPELYMsmEPukTGhiNDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "527XK9fGYBmqj3atrdNnvXFAcbE1H6pTgs1fNYd3m8oPi8hiqwyuXEmQgJHm8dbUQWFFQ3z4fPcRhYZHvCUM3hVr",
  "key1": "4srxjFayvqvUbyKed9M2LGmzDFD8WWPsREiRmu6Em2SFUyxuLW8EBXSv42UGvUpBKvLHwR6v8YzNgxtU5AXypmFC",
  "key2": "2sp9A6cwJy6tpKqTvGE7xDBCBF2GKbi4d6xukZ1vSZYejYnWh8eruQdvpDRCYEkqqUe8LeJskS9Lsp4su88qQMRg",
  "key3": "46WpyicaYRTJEchtKAnGTMf1TE88zcNV22Apx61knz699e3fBxxounNySnQjRSjELe3PXVX4u8Gctyspefgyah2G",
  "key4": "4DvUee9XKpKzAzdm9D3aZGTTp9zXMZ7woCNCSJhaxdrsMpm7ZdHGWYUFjMo7NCMkpsLWcNahR799TQ72gop8xAd9",
  "key5": "4Q6rmqUz2aPjwEsZCQFjAZYpv6v2KEzfiHhjVp6NDnz4R2QTM2mYNYq1soEagiiKQ5uUcjaN5LxEmLGumqLHRr7m",
  "key6": "5CYyNWe3M48P1ZASKrc7h6brJVNbzoGFcHkvgyDtkuL9vFkraFGAWWZPUAikC14SnHREZt1EwcsPQ1okTu86fc7x",
  "key7": "26ToGygFAdCzN8dmDKGhjN9W5vbAHest9a3RXf9iBvj2ga6CFX4Do54tNaC58DGjW1L9iKPFttos3oC7jjBofZEU",
  "key8": "4fxwgSCwsGWcJGazKULzy7beSJZHPonnh5AZAKPsnCAcxDo7SND8ySZa1M4a1ka67xxpBnkT9LCf14tWozRNTNVx",
  "key9": "4BBZa71QehzbovyZTYvJ43JUw3WkAvcKjt2A3moAmjG9yR6vvaNSDAeXbagDHtj53iZrmt77DMjg5B5TUg39E46R",
  "key10": "3eUSuGPMrSBZdjs1srqig7wMJmKQaUE62jQFnV3eEYT89ZfDY1SDTN5b7stR2PTzbCaAevMuKgpGUhEChxpw92kn",
  "key11": "4dTbwq5iLuBdFDHN7fuKgc2CmMMjL5SzHH3A9rvSs5ZP7f4Gxk7m8nJeg4yj8HsAsu1t1j1PNVyNSmaAkx2tYdxM",
  "key12": "2NsJNdaZRNyj7NsRQ5fR6XADtJ8454vNJm2BjgZtkZHLVs3kXZPqj3WaUbWViLASttABwRGghGFPyXs5R1St65dr",
  "key13": "3sYFhoPrUQbEtBPD2UKwcPvDJDWj1huEkYHtvgEpTXLkbCup3Bvo3Xj7MWXq7TmU6kRurACjLr8sJeXSkugjZerg",
  "key14": "5U4r7KxaNjM9Bresbg6qKvsGEtoYGvx1uzV7sgtZ18ojDQpDpSN9wqhSSaWxAtMiutyZzjTG7AA3VQ6QxevZbmqV",
  "key15": "2bbNWp8tAdjsKAJTVKHTT1GbyWF4PTme1RpnsGBtfVaqg6Yu4DpgMuEi4V3BEW6BemMoeYvNWqHsXRfH9gg5XmKq",
  "key16": "2gR9Lt7x2EhZ7DXqMHc2scUszhsn8KmrBd4gvBnuyH5gM36xnmyLk3ADSvMdgEr885fD6pGsxntJ2isMPsMbg85t",
  "key17": "4kFduvuMPuXcHnSeQaHZhbSqFKDAEtnHGMuXq6o5D9RafkPLkYX3rQ4WcLt3pVNSBFdHdzqPJGuP7iVvSVpKYYZZ",
  "key18": "3wRJTz4th6FiwxXKZ2Amw7owRbjQcGqSPy56rY9yyZ81p8cQsf7cT9Qyyxeg8nmFDE2dKdD8QskKvJBN7AhczBtm",
  "key19": "3v3rxgqGqZryAuvaR82BpWrXYWfxqMtEfKSErnipRRv9MXyrJhcjMfzFZTq6J4eezH4MeUmQX61Uw1uDQS8qr8Uc",
  "key20": "3ongruTqUfmRMjEvXYSbcLR1C5dA5tF8USJYbQHE5aoeXyVcU3nACGtEVmMXRzeGxyTur7gWMnwHtg3MFRn1o8Rz",
  "key21": "53byNkhKxnQmCpZSwgQsmvPeQDoqBRGxvUR1whRDrHYFD5NkssLx6Fhix62sDXPBw19xHSmh3kHrwpghXJVUGu2j",
  "key22": "36jkgVUQh9qxGiUFGgAVviUMKQkZA65iTQBJeswv8PuS4SNzxZ9TtqrfEA5yQTDpX1TXP9WZuP7khmANFM3ixn6U",
  "key23": "NPXcVW7odmipaBxGbdVmwoLp7LTyVdGzsuLG46QjXVtDVAE7fAbJ9tNuBVwENMyCMPtSAFs5oKktokonDbprMXc",
  "key24": "4meEiN5VwdGxdsxbGSXcVo4yvNbUckaGmYbXCorKc8wymGon9kcNyKnM1vkdxV1GNxcVu6akGv6q7ZqHqMK1A8AQ",
  "key25": "V16z4dbt3WQdXaETxdiF5x4VWGtkLHS9pRGW3dYpiAQ2BSu192VY5Qq2fn73yJ6Gni491LgcAEp517tgzTbftYf",
  "key26": "2mYpta3tAMtSsUy4sJXRc39qZccWHEevR93twJaMWMuxyn2BGwdorcL2pts5jYj9t4rS5TqSrWxHLUWrZxAvwEdh",
  "key27": "47Ka1PuVaHssyHbBNBnW18UfpgpAN9yu9eJNchNao4sCQQfVcou9aXDJa45ysA4Dy8jmVV6w77dxGWEdSgScaMPS",
  "key28": "63h6yJtwvsrbYxvMBEtmB4DXpAyWnZpfGmBwt8rWQZ3ZpHALeGnm3augTNCrRjAEHy6Znpyabkc7Ytvaz7wwq2Db",
  "key29": "26ccsh6CsHamFe6YcJAhW8Rv2TLTLhy7u3VQJE24nC6han8aztQUGFLWwYLgSquobTgsNsnk97FzAkSyUDuisznQ",
  "key30": "339EieX4Qif7espQpLid6T1wwz9NYxvphtn3HdVbxFrrGynNRspdc8nM9aukBCk8er5dRJ4qw1QchtCegUuvXUoa",
  "key31": "3dk84UnNsNU5mDDxRcjMgJSWiPiGYhXMqw7pK6wMU7UnkrfPGbnHdvEZtomvwxryk8NFJEY6pu1V6YRNhZuZ7KSq",
  "key32": "bcw6NxGzxCjt2nfM2CWRrSpbxQpjR9BoXH6EFngRwFTc4jke3UAxaBjLVoidsxzqe4cQDY3T7pRXrTD7ftyTifP",
  "key33": "61cRKgPDbPjrKjKw4WHaRbkq6JbhZXwvbsUZuKd395NdKZp3ktFm8yFe9bgCu839izNgBAFTvwU4yepyQBNjgmbC",
  "key34": "3J7WGvbAh1o95q9RSM7CaRpJo2kHr9Kh3BG8e8KqPiTafPV6Crnuvp2a8PiQTgdYwFV8HCK3JwS5RkKXQDnRM5F4",
  "key35": "3jeUj7P8RekaC8E38M9unMGhEg5DUREzUZ8dCXm7dmUnCpsSkiciqCvePCmN5iH7k5XMxysbmkkN8TT5CQYXS7Xe",
  "key36": "cHp9HwPHW2sPoem8Ex2HYXAz52LF2USEE6u8BzwVGmoqJnLqi5iakCj7yNSPhguYMXx689hdzBcZvTJmGErUDDg",
  "key37": "27eKm3tS2ibnrnT2RVC9YGSWT9ERFPyBonXas8BkBb7q8yUQwD7bC6irKZyuL5YaD9k2jkuQuPoRdJ5a2kkea2f6",
  "key38": "62VokSm25BnSEuDpjKvboX6GHTogCVmXdodFghkqgFHYoQ4SzkmTxyPMH6iaSfPV4uYmeENt51x6FPVEK6YSQJFb",
  "key39": "4WwWrpZSVW7kHd1iKDDk1SCP8pSmZHsXgTMXu7pN7Q98sYiDBTmut9VaA1cc6pMtvQbBLvtbt7Xn2wPcpRSzRpdr",
  "key40": "32CkmKLiqWp1pxnwq56K8Q5NZNwRGePxAqduvLJW2X98dAzq8Xe5JMWs2LvFrV39kYMtxZDX4LidDF7N2Q5Q8Myd",
  "key41": "4w2tLMJthkWM96Fi6WodE3QJVPPbw5Ae9DT1sq6Z5c7Qizz2LpWYPJfV1pu56B4fb7wXnzYkwpkW6YxZtN2jALPV",
  "key42": "5Tex6zCSSnV3ohvD8EsrYWvpJZZFpNHxQe5JHxyfq7YBexmmzPqjceq9umn9NNW6165vfnfnWuuxchEyF8MPrWar",
  "key43": "5uajxNqPgvFHkTG3xdLJRVKjArCPgDedR7ijeWc1gf7Swodjv6agJPeVDxPtdJoSPzNzfYKNQbTnEknasTR6mdag",
  "key44": "3PaTDoaYtVUPGNzuxWBkyCZB7YEgvm67w9xQAKQWnqCxxXTCNoaxHPQGn5GLkRQezCGnuV8J6bE45KY8MjmPm944",
  "key45": "2K8kj1ywECqeLfGA7oGnYAC6vLNKDyB3neY9k4xt7DUWWrGFmNvvoqqTUWbajrpdcgArGdHGUNBy4mHkWwR4P1Vu"
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
