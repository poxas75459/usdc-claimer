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
    "5sfssNpV1EKjLCzpauGz7LHPxVgN6gZvAx5iuiddWmnNHQeDZhjSaEVodpnCkbMYn5WT32KU2wfuWG8FsqgRsUPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "865Tt78KZnWm8Wu8v3th7NxSDQjAdjYQ2PmJmKyiT7QnPzFH8PnANgEBNLEyq3PjwX1u4bAfim6MgPCpeYQkxk4",
  "key1": "3WRHtBBE9VJxA51NuLdXWg5pAgAGCqmzoJ2yzHnRmWKPAS5Z5XUbZk95ny13DrhVJNxWmwhirjdAYPVZzp2wWMWx",
  "key2": "2Q8SCjbcsWRDuyX3kQM7onzt3ZznpsHZKm1tnycTwNNf9AVfw9u3mpxpLkHKaqKYrEteNAok64rQm97sVue2acX2",
  "key3": "2L5APfA6ygGTcMG5KAK7RmbhLHF1nYVDoWAdUJKWoNEs8cofPkun4FuRoKjZyC5Zf6rTQWnhMryxcEE8eiKqH6ZR",
  "key4": "ZaooMFqRbysxbrfuG3JUcY9eixkDT8ZvK7ggieSmgBtDD4uTmfPBduy8EdubTchJ4BYaxmnCHVsCf4Z2A8FC1pR",
  "key5": "4zHSeFGVL898ivdQXSJXJdBwhb4rjnpHXVeiLxveiLYngFGuo64J5ZDXseLGZWn7mLsQSKvsx4nAd26T9TtWiKSu",
  "key6": "2NgekepgKnD8Fb8hx8YszUCo6PaGkmXyD2YS9aTBckrfeBX7iF7NcyMq4ymSPNng6edPRFuegoAjBE4qyKf8ovK1",
  "key7": "4PeDu4K4bBL4Rxg4CDfdD2eHebTKdeE7vaX3bfrrUGBJrPAXxYwYdaQ1giwL1sU8mKP2vwhu3Hb2LugukSKfU1rH",
  "key8": "3JydAxth2sxf2nfh79tvdPzUGESbAMUATj2AbX8AaYAfpCPtGnubZUZYpCravWhJea3XKa3g467uBjgs6zgBdPC6",
  "key9": "2t1nw5Nyn58aockyGa2Z3ZpjQQ7AKUAWfBWmCHxPXfJSnJWwnJTJekdBDRqWwwYHXtPjHJPMyW4EX1AxVviFvMVb",
  "key10": "5wawe3rxdZBHxNuUjhFLNbCy9HmNvbi95Ckv5cxXszU6MrrrVSuhNoxjS7eK51WTCjQNzfdmGHpbpWZetkEPzYAH",
  "key11": "29wzhsNqA1o44RRHYajM3fkS1TGUZNt7gUdTohJKVPMN1r6DvKVjg8RQ7x5b6VBkP2NvTVjLnKUvEPt1d8psk564",
  "key12": "5cipDspMytK6Mr12GT5udHwBBeF1MPfESniom49dQc8HARxXCU9SMG2YNokBRrZA7mRT3zmH3eS9xm3NkV8ADBV3",
  "key13": "p5M2WRtXFZPAtrD7f81K9317puGbisntqBSnBtmF7TApTKgBAA4ZcG3u6yWw4izrzu8gn99bqVKTTYBS5NNb7wQ",
  "key14": "3cCHZfyLZxFvKmU66c15FFT3MBMSq53sqKbv9ov6h5B4qiLw39LRFgfdZMDH8WuzW85nX58Zb5Hd7BjtTj7gV9Nw",
  "key15": "hYVv9nLYewzWc3YvBHLpwcsjhgext9VsoUkuFCqTf2d6k7Gifdc2UPfMouEKqoEux5HtePAuhXFt8TtmvSxVZyp",
  "key16": "6pr4zRLWTvZcH3W8HeTuGD4JhRMMX74Fnmkmc8TFa8nKF4PmJnmZ3smrge81yRBkNBUKGU49bn1Mevn3tVE2WhL",
  "key17": "5zXkMuf1iNdrQuCzPQ5Yb7dHV7hacdXNKPKoBTdeQXBJsC8TFcD9z6Q9dkKJiiRQWqShCgtG7nXffxEJXavj9c9R",
  "key18": "5TmWkTEnwpp99vmqrFPBhGdajhPWHAtAMmANd3398SefetzmH31uyY6MMWcNWS9uFUkNoKgX9LyGVs2kCK8kMC8Z",
  "key19": "4vt9BYfAvmyYgeG1ddt5Wd7uuuLjVF44eH2PbaUJrf7om5EosGcusYDRoihQbYBzjizu4PofsDBUkqF8cJg6eNJ6",
  "key20": "5Q8zjGPYhrpELPvgjhzpkTGe9RgknALcLPQSfYSc2bLZjqcFjn82sxPFLYniF8qdQgNQHFHM1dgjcJBMMnBcReSL",
  "key21": "2D3cVfoVCnChummPecDWvA1WH9AytCZs3QnS6QXvePxTx32XzKfM7Wrbz8h77hqVMApstKcPRUGwCK1xVJqboecy",
  "key22": "2QVUtwct3C42zNb4TYmvvZXXLCeD1NncJC6MEaZ7WHk8XbtdpVmkP9kAoqf9triL9ogwJ5Lx6aFU3FPkrMJexMEp",
  "key23": "2ErydandekwLixRPonNWTFhKjVZMWeBiXWSvUHQwguqBxxM4DW8CcTDeeQLCLBoa5pCpXmiFfAtofgUY1qR7dBeE",
  "key24": "4dg6GfLu91KBkT2tusuXtJTWap1kHQnRR7Ukv45RjBLkR5n8C7TE9vAEoXoUHSrxXn54n1Pk3KK9ZFJ9jQaenkfZ",
  "key25": "34nnPvYymmTiLaTimW9zs6oG6Z3PcAHfpZPM4kXc1TFy9gx4HXavrkgGqcqRHBLn4YkhRBSE9F71eE7fDibtAh7Z",
  "key26": "q89iHw89QLRHtu293a2iht5FgkjAAqqKGpSgqUNzEc5hDkMPFSQuqtMeZp6cdVArmgoECPvqd8CMfEsqZA2ZXGo",
  "key27": "5gMAH9TPfPaVqfHDmtszHvDvnuePhiNrVhCmWAiW2hxnJiWf2e1tXRuvzcNgcZycNXw5zS1oJEHXs6CZj2iz1Vg9",
  "key28": "2nvwo83gJkf5nVtHRe2TTmRZwQ6w7PXipELEqpM1eApL62fz6wbtZB5rNwsQioxM2ZNW4mrtWfEj7dxvfKSHQAmu",
  "key29": "2R8SWfPH7saWFbR8iGhpDQymuWBoXsBnpdxmznSiNUcgANtqGjC6hjZLXNCiVg9SkmxW9wga3o6oawRRv38FiR1i",
  "key30": "o3fFLCgBFZ9koXURFMDYDN3JRaJV3kXBBAiwdM4uTwtHx5L56vDnpUXru8mbWRunint6fkTtbB3VnS2gMVgYLKH",
  "key31": "2kdS48pmYM1ZmWT2F9eGtRcG3SLqriTk8t126ESvWHf2tPP6ePS2RYK1CL1RB8Gi33zNbSu6oDG3U1gGdRJ9RbiX",
  "key32": "2y2hiUCf7TpCRuWR1ZMrq4qv7iJt6vS6KGh6UiPbdG2FZqYsepNsr1BFYNeUSBMZ5bPS7TmWGLsc8YAQEQqELNMX",
  "key33": "2evaeqZ2inaSMQreH636VQyXHEvU8Vwd5JhM6BnR8c4NB9AFfG2zxS8hLoiZd3fQ7eV1NtmdxsDkMjshhxHNNB1F",
  "key34": "5EzkShFaxQogEKUGMsd3Ceu7Q2zh7HCqHmj41k1MYFdh6KhPULrg4vZq9EWdEpR7BCj7pZW2z61fR2tPXhckU2U1",
  "key35": "3zKtYwguq4UQiZsdqtCWUznW3ixdVCFyK26H277RAYzbhTsa3SAAE8BgndfeSSaapwEGYTUKwsdSZy7TSHB5YRuN",
  "key36": "uKfibAw99CPx4i3pQAVMvf3hG2WJjyQYfbtQrfa9ksoN2QCuuDZvDoh5SM3ERUspU6JuK5gSQwMmJdBEkTgbzRq",
  "key37": "2keHxfqhFPyvoqNrXSGAaoDy6q7SKTRyJSJgajd7hPwAXMvzcgjHqoi2pE3qki9kT9kieVKKdE7Evq8SifsTnnBg",
  "key38": "4ijSkMhjgYNAsshATCrLrctgMhsatStwdP2jQqHQdorH25HciT1ErpGxrAhCGuwgp4rbuSrSdBYrofZAkbePezGG",
  "key39": "4c44EcongvY7WJWmE29914ZixAHfA4Vw82b4PdvkY69hdPGae76Ld6RYbp1sbdh2z2gPbD9MjVDRaQhuDaJgGbfH",
  "key40": "5RT1t1rXVduMFj7NYAshpr6ho5RLFqhpPZ1MPK2zv7R8Mxwd4YGMvE19fDi8q4ELoKpVtgAWGY1kWLypepU76Xav",
  "key41": "4ZbqGUxyTKhr725DPcTewfrHLjL6UZbLJne7URq1V5kaXzerPG8hPiLqD9ydyj7PXWZQtLtxhEX7BCt19xvLM2cB",
  "key42": "E1wxrdqkFpd6CZhf4YVhziAEDyLhA8KGFLYn5CXKK7dqLSuZw4q3qSHZH2iTkJbi3MuVNdfRgf9KssdCkEJ7H5Y",
  "key43": "JTckvj6FVfVorK3QP4N7grG7hdx6vEuqfswVZAPAjx4XsnURiGGfJviUQumXzPnYjjJDHMoKyRrLyBEKTe6xAr6"
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
