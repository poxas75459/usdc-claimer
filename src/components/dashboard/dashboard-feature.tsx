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
    "5V2KnGajFNFDZLyeA5omEB6u7Zz46LkGgWvY4QTjxNTtUypSRg5JzNdVUuxuKL5PLW42AzwLE1ZRe7q4KXrUAn3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tmdnZPrAUrWdiSAxNf5e6A1rYvb94hyWvmAb7xLywp5Vrh2eA49idWSHLgx3eGMMXQwjbwJ1THESf8VjkjULCZM",
  "key1": "61hGg5RiibfZo87E46WMifm4owY8ghJBWxrNV11CQDwka5nDgqRy6UuwgxWFMR48XNafdZTXQD12PoGpNsNBA8HX",
  "key2": "5Vy8kswRyyBXWmQwPQ9Rwg8b2UYZZgecn8opqWCS6mQx3TvGHyQLEJ2LGRzTDQXgcP4LJn5NBbr2ck1LRiBUf2Sa",
  "key3": "35KJY5crFeFo2ULbJZ2sLPf1zeoYqoDtZd88F4N63WsNkCgBaEuoAK4m8QBcjJGBHL1A3scaaVy2j16ni77KAZ2s",
  "key4": "2FeMLvPvvzczE8pBXDHTwBW5PVQgaHNNAD8pBEkFVppNR2ecE8vDTtd1rpgniXyFMU1AmG6h9FWsRQDsUgonGY8R",
  "key5": "QbNZ6FKbhX8RisawAZD5AAZXAFtVC7usaop7VSN8m55w5Wmuzv5d3LqVtsRoY8DqSfHCqP8RxHzoTfvuuSssdCv",
  "key6": "GdAWVrx1Vk1AuxwJDJpSPa9tRCTKUN1Wzz4DjEtAVieNLE1zPcUedHqaw64vTH4W1koahcVQy6C3WgtPo7XpAtK",
  "key7": "ZiQxKUtyKrf3Y2GT18SxmJCBVBfZeswo7A7W8uhLsk1kBaTtpweaePm3RkbaC3efqJFAJQ83zmBkixVtWFRWxid",
  "key8": "4ENFDLbWtvSPL3av3ZDT1GZxsc61nWfED7md76k3wi5KD6xXnZcd7gMexJ1rUx6k9KnnrGUtR8bx7nCg5xpkQ3ES",
  "key9": "4v1vK36Ui8Cc3eTi32FKAZfkuwiPLUmCy6Q8814CWyUdr6rT9Keqm5UYXGRYy9ZHACJszviP3xx2f3wSn4zvdf1W",
  "key10": "4ya484BhVJNDQzNQyF5LXnau6xBycuhD9ga2D2AiTDMzGtB3dhf4yiaD7GpGZvAV5oo6S4n5Kb8HoGZBF9L9ZHJj",
  "key11": "2XWMub9vNtGkjUjH9HCnWYe9TXAD2hL4ogc5jxqvQZwaWsecxNUpXMW4xzt447hpJ7JqQ8ztzYsXg4vH9gUAAa2W",
  "key12": "5TXcd3UwsVSRq1ycGBXjsn78GX5QetFr1E8oaQftpCTDaqhXf9NFdfzWkdM4G391zrdB8yos6ZvvTcTMSdJGArLp",
  "key13": "65aBQuUycrHE2P1qxuwuTfpHMioVEm4qYr8EXwE2Sfnsqc51fok9yKBfaXHNgMxmnxzMfmo39tgErsR4HqJS3g7M",
  "key14": "63p9JfA79ZQDRLigKBF2EoFhvoNKeQrDXtESmPV21MQKTcP2HcQSKuNibtaEed1TjjbWDEtYPAwYgvC65pH9Z3BQ",
  "key15": "2ZxMSdCmXnumYZyFQSuAtK93WLGDk98J7k1k3UsXpkm1v5TYYbFKPkpdyMXC7n3WjdbGKj8sYbT1LfEeQDaJaRv4",
  "key16": "3CCW5pozcEL4QP3sapeeoQnvRrTLBhHmCUPoyzpHBebbRF6VvGkSPr7mMkK2aU7noKgq3FxUwvezVRF2dhztcbMD",
  "key17": "4b87L2u7rJkP6nvgZu8yxDSuqYqMGhUTTLvhZbTn6Qpws5jAMSxKdSPtk33AuJ4utGM6RGiGDkyQhn6d4AYCosxj",
  "key18": "5W457ucAAF1tJHYFfWe1A7KP2kcXigsricxWYkFUxifjWZn21XRXXhoXLAr5J2mWY8NM7NyJGegKtxJ2scghoUve",
  "key19": "2ceEnU6kSQangpArdeJeNcZBvjXheee2sbcAfy3MLTPZd2A8vB9LR39g2xuaYB7fow5B76rMdDTK9qfms91wSAyz",
  "key20": "hr5rBBU95ZD8fZ6j5UQQBDfiJtYi7mj9prpncWpf3v5eQjDo6E9VTDzpeW7aj7paBwrYuzBJfvfy3sMekFPRp57",
  "key21": "5rxAxuMoDVdYbuQUkVy9L2DVCZ7pLN2CGNgKjpRBK1pTX734v6uZNbxhJHRACugwf2Tc9J9fgjfHvpeic7q7jwRi",
  "key22": "5vbD4gPCj5XJnC5Hu6ywtogrokot8F88s4CLC5vtP4wp4fBg9iEdW1gtMqK9GrGKdCnpNgwCBc8ufy77R8aqqLRm",
  "key23": "488Vds6wRebYuwrAAXzVcnaufPf6xJG1MntyGK6J7L21WkbaXpFxicFdVvq5GnhZsJgA8r65pCw1fGhXFDz5ApHv",
  "key24": "5H8b6GT9dDDpTuVkybUgbNk71a89jYts5u7Y665G9wzcQ2VSbEoLMhivd1Vcfszr52jhELveQKsLL2G3gGAysJzZ",
  "key25": "2jduSsdTEvvHg74yH11NPSTiDnca5PrbkT4u3rPto8Xn95bEKWCL6LmSK2PNgjtBtR2DQ33VUxBoj3YWoEM2wpxs",
  "key26": "65s4C9s8kzM7PHoHAeXkAqrovnP8e74GujK4wh56qD5trc3TLSCsrNLxR1J1VSXfDiRtNZiNZCv3i98YNgfXRVXL",
  "key27": "5j3nnUt21cwMHNaFRpD3Mn5tdCyniCk1QgmNjCi5XALncKkmaTWJj5wMGWHDQRpGn9SNujt2iGQc27e6WGs7K6eg",
  "key28": "21Tzyqq7nUQJYrJJWj6y8Pg9H9fZNv49ETxRxmctBaBhWVzhexhnYV7u4Xsac8EAk2nkWvPqmMwiJSyYj2FphG5a",
  "key29": "XPPSNnKvKictCZQFqaHaBbsTt8HpFa6aDGVKfzHiFGZotYgR7ADwyBUXaXdQRx2Sivnb1zXvTDpDGHqF69ZShhi",
  "key30": "3jzXy1bpDJu4reAybTtUQtsBpf24QC4mcZhrthsPgEwK4yK7p34BBWjk328K8nw42S5Gx3jrFZWpRPLiu6dAZ3M4",
  "key31": "3iZFUetHpTkULnnP8cwyqX5te17bakT8zDu8cBZtNqb5LS3mkaxsJAatujzWiz8eaeWnva2knX5n89jmjffULDih",
  "key32": "XdFPyDhrYZMiM4pWZrxxVERZGcG5P74DxyevmHDWmCnDtzue5DVTs2byNLCYpcR11Csy8KLCpncKfo8Unrx7K5s",
  "key33": "j8RAKPBtKsNb3nidYEW5xxvALKsQpvpUFSEfqB9bbwsri4rZHHN8dKR9gb2XMXKKqFNTs8Txh9DgTwonsqeszqu",
  "key34": "4smcJkv4yJCHvYPJE5Y287cKa7robCQBiuwoX81nzen7ngX7g4obAJaoNUR8aXpbz6SozZw4z7WWN9C6vgc4Xrag",
  "key35": "4x3RWWsU4udvTsJk46i1veiGV7tQph2ek6seeiqokhH11F93BMqWHidTBmgBYHVMNceXFafddjtrVskbi8LiDvSJ",
  "key36": "2moDxuEgJdpAxZSYQrGsRgJMbEd3Y1AhURES7XLWh3v3iKCc7otTyv3q3zTQWhf4ppepXL866SZMKyXH3e5kauYz",
  "key37": "3QSGV4wzpmuS4ZhLSjTkmQS2Dq6GxEnfWStNB924bdCaq7AoX4BFYB9nDvec1C5o8Mk9rQZ7SivQmgYFin88evnw",
  "key38": "2hVN5FWXTbowAoAJ7gvR7ZvjvLZkBkibv85cRiHqodyaT2EL5tMDem2fo3wC7T3cM8qmf5AKVwCAFttGVku7K9mS",
  "key39": "5T7GoGTmt2THNhaevKW4ZDGJ2NEyWurKeUbKrN9iWN5kd6amS5hWRbW5absNVohz7bLsJa3yLhwPkLGzhwj4jT2j",
  "key40": "p4NVMARrKKW86xQzvzFLVYdd566utJMyYLE7ejaiErUmoeZcqhagMmkSeUCx8MrE2rHpWkoYrjhEwQQnSF4ukaK",
  "key41": "2DST8cX9CLWddCSuL7qEYeEBLGTShCWC3DyYdmeLVvkceQm2TyN8ceYu8tpq4GaAyG4yg4VvC26x8rjkfWnjEPti",
  "key42": "3hgcWAuWKE8n4eN3XcQBgXw9HMvxyaeVnBwcDpowGxzgtthE74jBAVQu7LdbNt6yjqbA2X9uqt2DEmsQ2NHBNCaW",
  "key43": "5LBnv6P87nvPRP4zJjiFAc1xeKvLxuM3pGVa5YWncGSBRnhntFC6uKrRjh8E2BR2GJGQYFiQAPrt9R59GdsZrxAP",
  "key44": "5V538DuzuBUvuXbcYZRuC2Joxw36xc6vkv1t7yCNbxGmqrBfsSvbPtvNG5B4bFawkJXBf4UKb2j1Q3i3LxUXCmaG",
  "key45": "357DNUGR9YCTWqyVbTgvdJsemCXTwL5uvav4b2WzVaGHNszySiWUnvFurSk8w8fFHW53n7KMBAPV29Mn58Yi5EJt",
  "key46": "4Kz2piHCKzkn5BGykKrseE7joda3z6okKMpSz4kPgqfAgMonNvx8SxPfATPtnGrTRqsUq1TZFRB17s8b9aeuLQjS",
  "key47": "4AvWRXufprhCWmzEMtxgWdY5KthVobQu3edbxNqvYQn65uhKx9XuYGsPZ6B5RypqoqEmqz2NsdVD2s7vHicDrVCy",
  "key48": "4pKWiCcLfNYPXdJEgf2zCnQHqxPGjeuZ1tyvffQXJ24Vvxb876K6eu2vz972Lejnc15JT6APLsYrZLuHVtMsjDAe"
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
