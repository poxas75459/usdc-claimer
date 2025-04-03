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
    "3iaw1594XUt8sNx1skEiZo7qc6innxrVri22BQW1ew7hTycDoku1regXLnpevbqAztgWYPQauB6ov5o6CSvyfV6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9bJmKMrmcxyMWEr9e756x7zD6nVGDdUnUrPQtve7cgwM5r3ozu2cdHowKtFiT9AQpFkqMpH8jDujEnsaME48Jco",
  "key1": "5uSz6MENxoBUU8iUPBm1qM4tPLqpfAnb1D99BoCj5fVRMJPhXCWdNo475F1cZGR3gS7a7AAjDi3Cxa9MDJXZ6NFw",
  "key2": "581v1yHo2vg2GYmjMbVP8UQfR3vcwYZ5L5Zt6uwZtyun2xzGWQhpVdXNsfUVTH578cqDY21uo7qYSiJPx7NJfFEG",
  "key3": "4AMWXGLhxomjHymYifBopokf4BJkyBJoZYeCNEnRrn5jZ9HUvRh1uHNKMWvC7jWS1zJSFZ2rhNMPK4RW2Fr7ZdAz",
  "key4": "5PqR9t4fhL1L4i7ANxYXhkhhLv5xGTdFiVtTXgmSVo6pycDHDBPuNe67jDWeBSa1cPTFMHR5qi6WPe7fS7xiKzkx",
  "key5": "4UFHhMMXCfFDpkuZSNmhZBDPQt9khVcqAwrHM4zfmuDRG9TjMWKaaQn3emerCiTB1ZGBzBqEY62X7He8YJiQ1ycW",
  "key6": "2V2LFFoWptmgH71ky9fvNhFDVkx691rSFsumSDSWmAEEon1nYz3jh74uZ8BDkYTky7GfrLbQrgY7BPpfMHZYh24y",
  "key7": "23SBQhb8McKqqzEVFNBWQREJuUv3MMXTozGgJjEztTgzAzdHETAYvYCUkhQD2gmwcGw83YthKq45vWxn6dTKKB1i",
  "key8": "2fG7AdwUby9NrDth1qvTwP9DRTwWuiLiiszu45xZAMhm94xh1YH9gRBo5BaPaGzLfPbznCzmoLaNc2Pmpj3wApqK",
  "key9": "4TZfygNwRNRijhMY6m3nU3AVem2PtvJy1bfJGcME67yDxwA88embDyATHjzdHUp3zj6Z1XQosfPi92DMm1ZoepKM",
  "key10": "XLzSdqAmJhmzrg486cRwj52a839JCktEqA1QeQ5TzSmwN2KLoZ21azxjJYhXxbkNoDq3CU8obDPgd8aXhYsyvCd",
  "key11": "Zj45CRyPRMZGUMLRKhn5VJC6ndffyhtPLV9inPD666izeMaCifLhXMk9G3VmRgisJpb9fECvWiPqsvNHcUjAyNp",
  "key12": "uYXGtaXwiVMrkfriF9cYk4JDja1N8VmhDWxt4M91BoYsPck4d73bnx7PdniuDnsWB4a83VDEXWFNTMRXpv1JCaF",
  "key13": "G4DJz4abDtthGCyoDmXKFjyq3fPwx9NSXitPAAfV5t1h4RyYwR7LhdxLrYeDhovfTxSmTwsn8pGw2yDUypjJbgb",
  "key14": "K3vUhrakKaaaRzHZuqic6wGYFuTkTVYxnyJT1jWvSsG7R2FP3m1tFKUWq2ntUTfSCPiENwh3bD6mhTSxtWsbV8h",
  "key15": "4wk7jpLvaiqRvnLKMBuWQh2p8nA9fxNeHdWjBacJYo9S8gPc3u2Gvb6FJ9f7tQkBv7jhQj16zaiTsyV5UMTivnLg",
  "key16": "52sYXip9E1KJKvUu5fX8rdAaKf2MjP3UfFzuamggj5pq9yq6JDLH2sgKWGhtZRVBDsKg9USoromhJZYrZxrQbr1X",
  "key17": "3VBwad4iuUf6meXyqnh4PVRJDGdsLJeX7RCA4FvC5PzHV1axLNxKcGSG7eRJXeSaU4Y6D3Xx6qDXiXohLSdRiewq",
  "key18": "4ixCm9A2AG5cuxvBy16hbXP2fzVVo9XnvaPvkNY9ds9GYDwwbQkiWHsJPcnx9vyp6RqmSJH6m3rnnUVnuJ33aCQJ",
  "key19": "2EZEsqLbLJS6wBGtYeU6MaPSozaJNifVYkcYc89BZisdMxJQyTHSzGovcFB2PwKX8f9CgaCXqkfTULbdScDcbw3H",
  "key20": "2fJpGTBXWXJdkcTeiSQXfz63Db1HjfF3Z3yyLNZHiC5L1VJCsTMP4P5QTwjMu5acfJFd95B11zpbciMsKwmFSQFu",
  "key21": "5jN9Do95evksAsCosPs8zQdKf7TisHovzUEcALgzkJc1hf278Mru9Gw71WG9hqpp58ypsjgn6HBcPEs1FUxf8Kdi",
  "key22": "q44JtrKsL2RV8Y5H2fk1o2FhK8KnE8BWTur9BxFhGXBhJaL9wXZr5KyA9rNmTCBmMQtfpa9f72unuDc85gBSY88",
  "key23": "4TPFnA1UMarKQvbHUnmJF2gyugZjzuUG9R6BueA5eDpJrSN6ZTDMvs8c8osZEEEfKLW8GmvqCBCXGNecY58p8TXk",
  "key24": "4f2mYQzZRWimBTP1QCPkbg4VtiqPdkVKi1fLKZod8T8damccSuApxnwHu2bxoZcG47wrqtNXpgUiQTtnWBaSDqhk",
  "key25": "5yxWJyrSq9JLkuGw7YEPhxRhMye3W5dhx276nDaHZyVbdpU8u5aBQjAcK7rizdfYaxiSe7px4rRUch9uTQPwooZd",
  "key26": "4Aj5ebjqnpQLM8aiiNDV2puUs59Pb5DwCdecq1zZXCaKRSHti9pt3voYf4Z5SdCtPA8bJ1LNWJJABwbuUEVJDHUz",
  "key27": "nRruUiHTs9BwJ4gRHh5LN37k6J9xH1zg5DQuZH7aFbAwKYwofhFMDgtJx12XazSCPufpAhefWiL8QWv9oEv1gCu",
  "key28": "52g4PPuoetNhiZ1sxTbmmzz4TBBRKLMCRLkD8m2krhzHqkVRQxaB8RrjFHQQb9aR1gv2K17nZ5mNcbpTKAxeE4e2",
  "key29": "Zrh6u3Ezai872SCsNzZ3dzHCtYv5GtQwKoqESTQmFo7wWBpn3dQAwaycEHnQyYTp2vG28kK4eJ5eN2DWt8bUcuY",
  "key30": "2PqkqoDkTUmetZt5B15dAQXpDuvxXksALGLXt2RxjiNJdMTkvuNJq1YC1t24XFuPVVQKP1JqWxyowE68qbicv4jD",
  "key31": "s8R2rvNGmnkAjG7nCAZG5LaEb6Wz2bX4bhvnepcFLiQ51paQYGqHHLvQ5mvRPTNP6TqYb87CEQiKNJ2ixpqq5Di",
  "key32": "626KifWi9yot1x1aVdXykhJb7Lk8icuswur9ppeJXH5kGNhygPjmMqBujsHuboe4yXCDp5xSohVj37eWhL8tGYkW",
  "key33": "2okwYjYGCcXh4nbmU4Uws1mG1u5bt5XLfbFdb5J3tNyEYyVxaBECHAYeVTVF6T5XADPFtFb8sJH1RvRFmBk7Ux6M",
  "key34": "5kMuuSbFGsB6zMnLx91vpJnbFdh8SuXhKUZ1ukcC8ifKb2AzdrnaZXdkQHAjS7EDtXMGecCMrZGBsugEdSXdPwQD",
  "key35": "3FdPBoD3RMkfp1teeZ3ShsPj8kTuE2K5EZkqQMpUND5viwaF6KXy4nZatC4gijvajaeUnSdSP5TYF49gLw5m6NBz",
  "key36": "sjgieW6pKHDod3kJXMXWwjspycZah9NgNvScZJjnVzpr6DPRf6BZjoyjRthnnNTp2Ho6pHMtDAqNyYFNq5mznCT",
  "key37": "41GhCrSf2kwNAE6jsFx8w3TjzujiK4Ssx7aNpWpHvLmpXASQ1Gk175JwX35BGQo3WDQbnihMNmFnLoa7dpBQybxj",
  "key38": "5Wi6qimUMhFjDZVqwA1HKFNqAt5uQeXrnRxTeGszSjWZvMWdCLE671FnrMBcw3P3Z69XKFCkc1JEmTxMukBSU2Q2",
  "key39": "2YwsaJk3o3wrsF5c9BK4rXhvKJghRDYwrkBZze9X1w9KBuV8Wt1odhMAgqF84DWtRaqkT41xDCppV9HqjsNNHLYg",
  "key40": "avygy6k5K77HbLkeHXkukpG4FQvYhaFNbK7jyGx3MquHEgQezyj7p2ZmRERs3nZ4XY5ZBe3XYE3VbpgBKih21yP",
  "key41": "5PgVUamPhHGMyJ9RmgDYbg46oFtNYY7RS4YjWNf5hADeypzjTbqzaPvY734hWvTwVT48ffwxyZ4xGMyvfd8tprw",
  "key42": "5tgW5kWHTtebzSqyS5QZ8UVWxKD1oksaY78DeZJZuvf6pvoCPPffTuFiQanocWy9V5LzgtnxWxYJSLAr7ucuA7s9",
  "key43": "3FzsgXdu6fyzG6si3k8b8hkUv7LJCs1vmRyX7Wm37hTe6drrgyq7SKJcMpzVwi7UPJcwJGioC4zThKVjNjdUGHpi"
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
