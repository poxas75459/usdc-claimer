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
    "41Fh3tpJWh8jZtiqHj3Mw5HNeaib1fYBiT598TSmHxNpY1F9jXw3o8BaUUcsjkpfeL8PDRX9wZWwat7nw6XL3hYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y9VK5CpTd1751kv5QqzLXf1pATRUevE72bTbbEx8Hm6rG8cApxNUeZXRNnXH45GNDF8RDtDnrg8dm2GFCqJLvAp",
  "key1": "ccmW1wKskWkADMFigL5XVUEghYypDPuKUGRH1BZvN4FKzC8UXqw8BKxbJdBvuNJ8pwFbp4HwKFMg9kyoJfXxo8w",
  "key2": "5LeegTj63giAorJFwBPxXtRoUxwRuDECNvCN8UJzbx2JtiGezTQejMJ1N6eXCMMizmzep6REtjiDLmPmDo3aqUdU",
  "key3": "3dB8uEjvNLM7gx7cdcVrJ6jHvpJa88JKwgh6jUv7MaB9aYdewLFRMaJgxUjUWVR3ykTdCJkFjKdqBA1WyWLyWMmB",
  "key4": "od45Ep97qv4VnxVSr7Y7gXEpZ3rPWecXx5VeLpDYoa4t4onhMuFUewaGnYaynUEpW1taDwD4CRQrZsUsCwi5oD2",
  "key5": "gFLzLG8K9gaQGWqzR7hXd3GXpWAWjn4DpvL5LtcrmPJ9CEeeKHmtTX2dHCKpPgE48dGNvLLW58suQDMXwbnhirW",
  "key6": "5x4TKxfbo3cb13RKgg11ne1ErbLbhdPrZbvaCb9zK9VwbaUNXL6Jvx4gWNtAFCgcTkPvyhHpESYPggr7GnxCs7zN",
  "key7": "2DR2YqFqZNoDynV1MRDqYQsmL5Jq25mp81nffvpRcbG15Ue66qRKP6HpVrtXeRB377SWYrjjf8nC3CMv9dksP7N3",
  "key8": "4jXXcSKUBUKibTxaNrU8ShYwfwmvfbDNbr1EQGm7Fzr99nRVcF69gFWfcbs9qi1NWjiQj9P7QU11JXN55fDTEa1Q",
  "key9": "5LR48CzocaRwDhNRV68gxhLo71xboxvPQRGz8i5f7pHQwPcukzAnd7MTEqo3b61N2SdsYnLoG999Qg8tbUhY9gsR",
  "key10": "SsB73arYRaemZj3uXhKV36s4kVxntFjgbLBbb2xRHERSybjrHzP2gxhmRTGs9oXoivzcaB7JRFGZvCuqFQCEfXt",
  "key11": "Vu5w2y7mQunLYatoNWvDgGwL67LMA2mMcUQdmyPRi92oDZcYg7VshMYqCWhyiwFMz2PCksuQMx6zpGXhDHy8ZX9",
  "key12": "5GnVYVA3LH7yLtqVPdCdGkSBHkAA8KTjQV35GqhfPd6hzJrHidJhGVjEmcjkW9o8kkAWjmFznsjcHu7pRxwsw9C1",
  "key13": "2skKRAo7nmRPHh3Y9S1uk1KicuzpePt5cyk3Nc1DkWEygV8Hrq2Tw912DDsSj6jF5hWBPouacq6DPzKoPuG3fePt",
  "key14": "3QL5cS3ZwUibNwbagDzqYGofwhcmyQkxE85jfGgk7ExgsNRLrYFJVwUySrPRrPk4zEiSVAHTqSabMtDVTpUakqca",
  "key15": "49FKsxtoQNf45XorxSDBNkedZMVVySKJ4Ur7XBRTGu85WUUZF1JJm6eedVXngrZu4sox6fVhrrybuAcBTyUcjj8N",
  "key16": "5SZpRGayNL6oWvwLQdMUq97oK6yt4Gf4wFzkuN1Eyd5q2q75JQZcLxcREtveRJFonpsAaUZ2kRpXznqRCKebuTDu",
  "key17": "29WGjHGFHTqU33ZGE3AhkDxZQVQicF1WytnNJWosBTnhBn9BQZGyEwP7GkJQzmkxJUMR9oKXWpK4vqYvzFK1MQRa",
  "key18": "4DsFXtHaweGPLW56B68MBgM8Nydv8ZecVr2aDQoigMyZnNmjmRN1hpPFyuhoRNMAaCJS9ef9wnoBLPhXXavLCgWm",
  "key19": "4hfa1XoNii4UBLXm5jFLBADg4iYcZwLZrxFhYbySAtkqjcNVX4t3p8ZgFKcqdMJ6iwDwSuyn2xygLvnz5GDn6DWD",
  "key20": "415WLhqafLo7hbSGgxqJf3So6JoPtSRhfhHFjfuvBzVJyZfdg6PPLZh5qPWakXFWRGAWXnZqpWqkb6e1eEs8c4c3",
  "key21": "3wBWKMJuD56bBbEinPa1yrcdmtn6aQ5hCgaKuPYhQcZhGHmwBBDEjabzmtRaaoGrAtDkp86ksUsDUhJYnaTUxbL8",
  "key22": "AwTJ5NWZEgoLpQYSCyb1weCDBbXLDnn62aHtwJszQtjqAqhTFjQ2Wq1pRCEJN8qeVj9JiWJUGAQtesnyvH4nJhR",
  "key23": "2CN2yVByU6Z8vCtxn6raf6Bhr6uqxzAeAL5zFeyfUYjfv5f2LT8HQ6ZHgXceM8RpiNysUhWNE4vMPyjNUiDk8q7t",
  "key24": "2C9qgv4yxUpu64MsBNBv68KkDGiRWS6TLGUgRU5cBb3t4LX8AXvyuiK3FLhPJiRpU8FNWHXQvN3aCyGi7ub6yYfQ",
  "key25": "4mvwTzUho96o8FJsZPitnqdUyzp7cuwEeYwxKhtbNzomLv5aWNRRm3f83nMqov7CihQcjZoWdFunpwqc5VNfQofP",
  "key26": "2KaRncdR5krb5LwRhLQBVSQiJ7FzneFXqHRTabiZ3y8a8XwCrnU2LPNL8tocL5PES28xDsGF6LaRaP4HiYJnrHRn",
  "key27": "293zYH5JmGaRdRQuWACUbfG2G4uMj7UdgEyAxvkhGr6D5dprSDoLDJbu2yF6c4fGo5G1JJ5D7AqiQY5k1BezG5dN",
  "key28": "5nxdR9chGr2VSbQXWn7VccDHJPJoesRoHTfYq8raqdbsUEFpAvmfRNDMbgrZyXzb4mcDU3bmsxs7VcpAiXwhs7ZF",
  "key29": "4a9ZXG3UpKWzrNJvzxPdMhxoq3CaVxuNAnnWkYvv4b1M4LStJjDQpgNa2DZoPKofSNv3Tjd4jeAhd6dVuTmcnM7j",
  "key30": "2JdpmzQvSyNstWcyBKwJvbwBA78izqsULGG5eUiBdJnPdgMNWX9cL423bNNXZxiSXoUGxiSfHamESHvuPYytGsxj",
  "key31": "66mx3gMhvy4m7BayjCQcQgqP3Jd2PAZoXH1Nn6RXBL25pQZi6GwbHFqJiRrtV4xauAXbpQCqnFZoAFzQcirZBdKE",
  "key32": "5ZRjVBp22rUjdGoW8eNr6ShsLpaizwVhv469F6q6zebrmuYjik7jZmsrUTiMmjk1dzmd6jetFg6oKsY41eDyb3uG",
  "key33": "3Vvcj5dFE8nZvQBkkW8Y7XcKopCQhhQsHNVKCA1nM5ywdiGj3DCT9J8Q8EvMj459JpxA1BpE6iDj2rtWtfXSeXZ3",
  "key34": "2AqWdWU547AwEiqwgtivgZDrffNeAomsbRWYDD76hmGihnr7GUz2Gauf4dk5cHumBcVTRcubgyoCztSSDZomNuvv",
  "key35": "2tjDfCh4NvyybGk8tWqwJ6wnkP16HRnA16ToDaKBfGTXfYq9NT1eH27a5UWp7ZTZCzh4NjSmoUeASAAnQoq2hg6w",
  "key36": "5rNohQug4RZGGrhpWERx5sZdqw3mSpKJmXcoaTBgCgHXTyGHT6CmEFPXAxw2UAfmEBZgrDL4adgnHseyJSH9jUBQ",
  "key37": "2tSPRP66suXmwLMTEQRdBc7sgGZucB9uVNsG3Y7CivGzgrBPanrFwjcjpM9PHP8XazJtf6BwPdCTP61jwV5fNTsn",
  "key38": "5AevPN49ekcZHKftMrAwz6noA9yQYYx5fiiyR1Hs1YjzgQcGwT6xMFQAtUM1npaHbvK366BYrHaQAHwRedjvtY71",
  "key39": "5GeLiap71MGpDbbZGWy1T96ACptzM6UV42mWx3Me8ffA9qS3tmDdeFP47CHobajnVMd7b7nMYWqAYNqJLcQjx4tN",
  "key40": "5KoyBK6NwN4nocu9snPDVsVx1vJ5aXx4E7Xe6Lofiu2KXVdLcXieGeGaNAWR6TQ81Lq6DYGCjyNgGJkgB4Eg5HL3",
  "key41": "2HhQ7BzaRF9FJWGYjwcvzMaqMKXnk2weN9bLxBdCBXT7tqJ5Zs7AMHcZK3shbyt41M5ctbC535nHUiDaV7QUVb5B",
  "key42": "29qWYcizwox3AfT58MCpEcdU4iZvoCQMRhM3m4ptEbTwN2WiL4unYERvFJ5NMYttFspdbdEYmwhLznzuxqNTsjra",
  "key43": "385JzqiJc3FdVYdL2b99qWUw6evskTLZdKB6P6MxhaBDECjhGQffto5CwhQo4t8RYZ5H5wvf9mvdArrf1HnbPQrv",
  "key44": "5FrSChuhuEQqvCcekpqmh1r83vW6R8qYhq62ftCQUKPycXwAvasdXqrdjrvKRJMkiHMGqbeEtb2RRuu838LigP6i",
  "key45": "Z1ZPND71EzeT6njLat9VBqBTkJLDSBXJqjszwEafnTE6M5LvX18m6TxGG1NyMzJnuRJh688o9S7bHJronQ98aDS",
  "key46": "3QpcJ2eBu8MPdTxhosBwQtZBRHiMGMUJ5fKfzAo2dBgKruR7o3NgRQQo8m4NSvo8BM9GHwn7xqECiKKXzKnAEipi",
  "key47": "2hcViXU3MVXgdL7bCN7M7S64gc1d3GPFtz6HRMHmmXXymHDFGRi2M2oXPYnjAVPNoBR8fMw2Hg88bdXLvtqdbdUd",
  "key48": "4AzZ4LHuRtwTfWsozP63UDw6f2NxLJQdWod97QkT2BtgX8GAKRzd6rRkTZstNAHfEgrw4BXi6APZzM1JnUG691XL",
  "key49": "vwiiFTKWNG1ycQpKeer39fJRuzzRbQK7dzVwWqEavLGtbupk5L8ZkBQxumfiRh22QPCtDyQ9WdnzVZoadUG7Q31"
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
