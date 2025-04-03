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
    "5r7bwXvR6iFLh9FMyfJj7aoVNPjn8ncYQpFcDqVdjBgBoKJnL4rSvkUYWGzr5JXRufJnSUDdN8Q4rxRSm5bmjUZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QkqmNWe5eTEcqu8CzB9jYy7Jg98RE84HtNaKGGdLngLFMMkuAQSUsqCC7igqxyb1W5daFsWmXqAYsugDsG5woA9",
  "key1": "3NWu3JWxKVP5K3JsiBrkn3GxDkb64gbKscchqYdqQTxshTgEyHe7ZSFM5gwZCY1UuoeAVDESNudYBbiW5VXAs95g",
  "key2": "4EhD9qz5BN8VNK4sQbzm9XB1SjY7wuVVzTab1FcXJxnMR5uMszYBnj4sH4gRZSYMudzK5pECosxADjssu3gYB5mv",
  "key3": "2vDLuhD6mQmZsB74mj2GM7cLQbr57sk2RK9uYzdBBUBvvpY8R73pVHmYCNR6XrzD8hw5q3oBJAQRZmrM1zenemqN",
  "key4": "3FphU7jfzHzyp9JP16vD7JqBrX978wncanAaQiJbG2aXgGeVrxx8xMPgT5TDEfsKue7r6ii1VNxtQXJj45NL9TXv",
  "key5": "5HsZhXWrmjHuG8pDbeCjZPFFprBndSX2ZMBcDyC73ak9HaAJAd77QH7HMon5GgDp8yU7BTTXHuBvtDmBR3FY8QS9",
  "key6": "3pK23JxybRq9XrTmgZqZpfCbRrTHAmUDxiNHbYAqWEqPbko3ckUQ12yBrAoYWuqgVMeoGet5iCqYmMk71iSCjkod",
  "key7": "4KjLMm5zwXJBoYzevu1MZDijXdQvv69hSz8RZszC94qPbtfbvSkB4aWGJQdJhGBG6yFLN11GxcysbczanMMCLWvg",
  "key8": "2WxL6iW8T9hNnCWtWJFWrxvkVczRtqMjY7EsqZP21CEXQYJ7v8jmxxQCcEREfD9BtDohExvDZZctNYdNq8cofHEH",
  "key9": "3scfJdEdhACnsKvaMuCgHrMPpu1eyqzYkMnQoKuMwSinUi4pfTGyJbiRTG4h6qnwKVJQ3yFeFCGzYMRfLbq1VgPA",
  "key10": "t7GFkzmfE7zysAsiCcEbgdo5jY5WiaMgq2oiQ4EWMH1PQnCQTQZrVZXCSrqZbUagG8J5LwBWwjcdn2nuQGyCwTt",
  "key11": "27iR7V6Ni7cTqE3861BrEnu3PnjJCoh8eDpDmbC74x3TNmh3Z5fxq7DSfPkrkxyxjGBGC79NfbMPb8vSPgyk3ogg",
  "key12": "4Hq2VcChL6nis4YQLaQkvd58dgxNZubnmwPXiTxecG7DdUCQd2HBH6XBKxCmdkKJQuBzwbQedcJzsRdNtSMYV8jP",
  "key13": "4Cdi1UociKJ2bjLytmkx8Zssf8GHSeanXEXAavZu7xtpPLysJRVBAPgvYbzgkiKbM4GqhExoLvMRTLzVrBVP3geB",
  "key14": "3dAhoChZerqHY3dmy2waFyAijCz3s1ZmsFDaCJvyBdQpPpsYmVUrSfhbz9BqQhbJthFfXBhFPsijeMQ1vzgp1YTC",
  "key15": "3JTdZEAR7C2wddxe4NfDT5XLj51h5xxFnTLChJpuVQCky5DFdRoqPHv5qKMwwCvLr7R1DEgog2hP58X3hS27m71d",
  "key16": "5DrSCcQssD9LwFKx9XxpcVvyBCQKT7DHG3vhQoPMcgtFHwKzLUwcLeEoCXvCJiXteRMKyknhVDUqL8jiddV4zasa",
  "key17": "3vrLsj7pCMStazFWjxBM39eH42H5KCW8ErfzfGoTNvCs6Cod7yNrHGQBdYvoe6bhr6e26vTzDwsJFb2zJNG98UKL",
  "key18": "2G46QtbabH27JrSNvt64xEFXWbGPSsX7xiaMHXKsvTLv5LF8nVnPFnL474qSNoJepm6n5vgGAZ5S16UerskxagN7",
  "key19": "4VBxDbCtDYFXzyUt5bvEUs6Kevw7iM4EUmWzH9e3bT9fWzprLha7mskTCoC1BZgNMeXYjS7bzX2Rdy7N42haeqEh",
  "key20": "4ZjJPzUxPq6mypdAYMSVGH215UC8PvzFr2bjNVLArrk78QmnN1Noa1JhyaNF5HrdcwYctbESfqzKaGadma62uPVa",
  "key21": "2Xazt1vs9ioPDnP1qnCfxN5rs6XSB7SvUdA4hWVcfkhoHHBQZ7ADmsvwJfo93HnSz1wchyr6WRWjNfDChX5d91NN",
  "key22": "4JhUfPqP1QydTRNUY2fYFap3rufHX6CmvtYGA5jZosWEAdPoJwFa5GNrak1vBZjvVcQiLNLzvH1RwQCxArwa7zYG",
  "key23": "5css4XDgVbjFZMcmHbtcEqUqee6pPHQQnKKdvF4DQ9tPMRQmvWWs1AR667M4Xe1dB4xLYq6QiKLHW1iwWZCzHuJT",
  "key24": "4NJkanW9xCx7i1zcqhuZ2f6KpWnyUfhwhVqDXTJNzhcsYBHXcFaE4k1qE67SDzUUpRd9QrvERsyHaEtKwhVKVqVz",
  "key25": "9QyDWf3S6KrHwrvBLtpiHpyf8QkrYms6bLh7i7fnJccvHMPZ2UwRPPNoS4g1edt3auXkcNsaUSqKNoEEcKx65u2",
  "key26": "5YqE4adEw6Y7toUKQFmKw6aESF5AEk1G5G1wPMCPp6RUSBfP8EHDZsoJa3rqFLtUVAh2Xxj5GwwxxhgxBeyW1NsN",
  "key27": "3f1cMSC1tAc6GctSYTSXLteLYfqc9FsowTQUUpayZXQqKcay533bi9zuSspc6d5UJ3gh3e7k8JsXcDjVMKm6t5h3",
  "key28": "6bNmJFfnRtYrgiVG23DchNF3CDBs74NhhxBYZWYxc6LizKn7ues3Lyt2RMNX7ReKFN8rxA9sLCxndctNrBzhrnp",
  "key29": "4rL9uHAP3puXojokJyt2n1cm2fuPvLf61e8dJo7VhJhXV9Bj9taXVF77A6151VCCk1b4iAgPGZocmB736nPp2gx8",
  "key30": "rRi1wDGzVZrmWyoxnycdTfCHcKUDB3uqXwnzyrT6vNMw5iJUtc2QQ3i2U66qWrgyJ8ercMGPWPovqixBdaZRNdd",
  "key31": "2LzLqu8X9G324NDqNMBzNszTHBJ1BGnLY9rcHQUZsTdyF1enk97FioYX98HTPKArLdjuQVuHnpypBrfHukqgic5x",
  "key32": "21knRnipjMmpm9gwqNgNZpKsgsccJttdcHZEBd3V51Y2AjkBTKuFRbCnsJrA8wfnE6LhJRonUD8PVf7ew5n78QXQ",
  "key33": "2g5dnhg1EH1HiTsUX1Q9Ak26Xhzyfa4qidjMkL4446rjHaepTh9qhVGZD6Voe9mSKxV1nxPQKAAXexV2KUWtvkkU",
  "key34": "2ytiNoM6iwHEQk82yoYdU5dDMKZhxrua3MafcKCFBJmPjNvtCFrx8j4ShZhC9V6nxgeoHNyyA6NN4wTEJRRtLYKF",
  "key35": "32kycJ62kfq17D7uCu9H7QHB9iTKYCHGz68MFS265C1onaZT9rGLFP7UJXK1eGQHE6819LmoFXh5uFmTSESDKUDc",
  "key36": "52ASpE6W1GCssCQ7rX99mGAJ7DpQxVaHthqonAuqo5D5YmxPHFPtstEAg3CENJhUDf24HDLD3TUMLUNKsAHPmiNf",
  "key37": "RhRgjetNUQvL8KaMa2vWPg12p4qKig9FVgz91pwRNi8jB9ZreUVxcuEkpSGqiABV3FZgRASexmQWtyVGuAsoVQs",
  "key38": "4LY7aBhz44gKR9aGkNuRfVWj8KqHeZ95psG2ikBaAv4wxNPsQpka1i48PfNsnkY4NKeXE8UhB7B3jNwC2of4LXPk",
  "key39": "2dH9c4MsNEbeoLuSk9DqdZodDpNgA7TtNTxRpeHGxEcaYhYgGqi1Ac7zi6LtZgV9jR8UXXgExJZLWYvGJxzD7SzN",
  "key40": "3DFWmYw4fWssaw8DA6w4FoGGJw1cJG1FfzpWDcMPigBFwhfV4EY18aNmHhS1TWgF91mjvkyfV5XAoDC7z7V13pLV",
  "key41": "2DwJeTaJ6KyWVgmBfnMcP7ZtDUi1hUxYT8LCRZqFb2FAJowTXFGHeevtry32oqfKrW3b6m4sBSgd5sXpZhk9syzD",
  "key42": "MWSdutEhPzBXisKgkDUaEj2A3TWsUQjMNzkS7QzbUy9QaRD1jnDbJvAQnN4mzLPXixjsB7YizEdSwgpaLrtMtvM",
  "key43": "4TDAGKLLeiu5eJRysHGYUX31FtbFt6f9XhQ6pZvaUakRozeiaPnqSJw3sJiXwNDCfPnbt6xmN7LKAVDRP3ZWXztT",
  "key44": "2MsNo9vvuAvur1gHCTqAwVLwfiuRCbiHGhf93bbWux6s6RhcrmgiHfywFJxR99vPDd9jCytfby9QvLvGUaASQiRE",
  "key45": "32oaEx9SPyEUXKn6AZDK2sYKznXecnkNh4ievtGxKMs8VBQ9YcFEc3efinJwYFMqYLnz4cbgktYkyBeuEzrRbZYe",
  "key46": "sYvGg5LvjKnbCe7F7z3ZA95Rs6XvJMt4abnpW4BCjr5UFsxwcPUu1kVYwKB9g2NPd9DTLaamhJdEsu7TkQHq6aP",
  "key47": "4KAP6yU9jZu34WxbMqkuYiuyBBowMcdRcK71MbdpCVBsYcVjSMSJ4kKvdmHsWWGAPpp3VAQvSn4J3uyKjVJPN789"
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
