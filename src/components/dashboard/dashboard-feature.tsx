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
    "5SxNf2ggeekQd7fQ4sQtnoCsg2WaYoTR1tacysJeMoSR5RCXJiLYWJzjLgK7dEPnZHXxu6DWDW8gfxyUbqRAMyDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XVFDucAZbxewUrz6JC3cimaWhB3BT3UAEM3xyAdhy1sh3taFEZeM34jyxGj45bygVrTotKEhzn19J8H5BNrcLNN",
  "key1": "52c3FXBMx21G6Pk8U5D9L9PcyogDXtZNgyR8HLo1ZrwZhMMwofmAV6p2tdTDehmr5s2Y34WFztkVub4YKzYAt3m1",
  "key2": "ZXGy5Wy9Lxbkiotvnq51YS4cZeb2YdFaHsyKx28dMxgmaoEn7TF2VxKFZ39bydQwH7L6TFzqwrmWaFWBa8XLt9r",
  "key3": "5iqVPEJgdKNd5mSetVPmrmz3Q96agoqme9dz1A4vuSpSajAzwGYV8oiADYAxWUED3XQHiG6w9DXMCJ6xZLEqWajN",
  "key4": "GNLwY59fkT26261G8LTpAwjncat9gkC64stouiKyo1wS99eeeKYkPmuLqreS82PaWqCK31CAZCpztcGtsfuXMBt",
  "key5": "55NU7wtRFTGoqLbGcGY82TzTK9mSPmJpJQHtkTMCw1oNoHzb3JUoJ4av5JQJM4KR32NcpyvjaN7y1vMPXKbtfNWm",
  "key6": "5QRHnK8tg78dd4FGtFEtETK7325DDQ3SDGqPyrAKZFXifsEePfLiLXzcC7jh4tRm786FnZfnAhYknAK1aVY43tRh",
  "key7": "5AcbeZzz1jCLwQmE9FrEe4ZNDuYh9RJ3RMqDdPYGgdLJp159uXxqSXLwBgaaSmkesdvVTqHz7bCWmsUJa1K3ufZD",
  "key8": "q56RweWNp6PqtMgsML5fYCF1aRbQbEraeY8Kn8ypkAbBiozdcLFAfLUA3Ht8SErXuvpZjE7kCCSQHxa7yLXHUMF",
  "key9": "2vsUg3Yw7WJAk9EqmRbjEkpHTWr8xPkqxLdPmtEHr39YwUyP8RfivCd6ZbjjjfFF4VEitpvYnbF69cfeBKWQguB2",
  "key10": "4jRircs8bpZiv6e67524ohnXgDx4exEQaFubsppxpyVgysXBefsdh5Gres4apRfb1QtutS6ugf28JDT2sZFLrL1T",
  "key11": "5GMJdnTFMcf2HmZjkAvKwenWnqqKUfZVo3gV5yt3zLDkTr4hoSGdgDwbohFx8zPHj9qFP2LAf3o35GCAcSZCq9n5",
  "key12": "35PqL23jFcvnZGZL9uz81tPr7MPRWTPMcHgrDzBrfEXY9QLGFqQaWBczG2yqpAmaqL8Kn3gRepFzb5sSoEo3Lx1j",
  "key13": "8NqhzGtJQs9Z2JA5LVDckxs7h7K5LR62VQBnZRjBfHvH51idokZ3V4C1QrYZ95fbaB72gSKfUkoqBsL5ngdz3hq",
  "key14": "2BBshxpWNYfjZPNEiVRd9u15xhjmkfwSNDosuG99yF9tA57jCFdiWsNJnGay1GdoM2bnQZB4Wsz2bjyH2rXYmCmY",
  "key15": "33ceppTrhZSNccUynCxfNpnfA5ua1La9GWwkUwon3hMzZriDxb4Vmurfrwz3dZVJHJzi4fvQKzrGnJB64eibV8yz",
  "key16": "4NCt6KpGtimPpKwbQWPPynNkGbVgvWtTWLWrKJwFNadXkjTqCU1R3MrrZJZNBpko6BfPrkizbHQCWtQ9PwRtPEqV",
  "key17": "86NTt54o3Qxan8rZHHtQu29DVkbjjicnyX6VJ74E23BRPGyEchsFM4cmGghC81AN6ukvxU9rjud2eqDkNouSctV",
  "key18": "2vWQusLMccdQr2pX7f47cohd4VTK7yQdh3t19xxskFrttiyAj78k55P3Q9ELmhK9TbNhSAQhzPuax4h5A4XRVDKJ",
  "key19": "5GvqTm4ZXAEv64ab3EArGCNpeg51wPaRFeVgk66WKFwqxr6BxC6h3QnX7UYcg9iLavjAEGK3gE2XPxijFtufKU45",
  "key20": "4Ypn5WZw8PRFmoJeVAn4C2JQnDSjYKA5oziLYxC7mf3VyHASVgHfGNkB4Lqg3Qkq9qKxHQF8tLL9fJo44SpizJum",
  "key21": "2Htr7jEiRUHZx9zeCqmk3zvNP9wDmc2SNCCKpu9DZv4Z3RydviVwsdKHo1PuuN6Qqdva6joV73o4LeJzwecH8trt",
  "key22": "62rbaq868dJZ1YkBQrcWbSHCi3HEHtEfcmrmmfp7opbLCqGetTiFj77zWJNwZDH9frGCkgB4rEt7p939mDrWS8wi",
  "key23": "2LfZ98BrxkXtNgzHbug1V5zkhz7fBDiG1h2rE57XgyJao6cd3kQC8EKog4uHsdRJSfJCDq54ZvLngjRCDywdknQz",
  "key24": "5JakYjBbHVXYJ1XSVDHBaqd52KRCmSwi7F7bfxovEWT8cCigctQZDjqvQ5v3hk6fK4duak9oDtnpcYamkjpLCwsG",
  "key25": "2ZC9CngtgBvzGCU6CL6WfciBa1iZkw4MLL1tBUtzPYWV81n8ECcVJsoBjEekgrzpHsysguRKGxo1zqUAbSEriZXA",
  "key26": "2wobdbNhum8ud8Gh3JQwoapGYkZ4N8o19m3u5fs8JJTP9x8ByBH2f98mPq2ooAphfqYCdyKqXqw7rVYkZMHGrur5",
  "key27": "3DAmNW29NF4FMYaRWGvR4ZkKzhx13V6VUQbLeKRHBhL6Wdsan5CNpsLAgQxFLxejDLGncsTGBJnLo39nfXLkmvpP",
  "key28": "5eUTBHwyYkFucVJ6WKyMQvp4j9nzkZtYfevtms88LxD4FU3WRGsUe4HczDdV5MtFicSBRtrAiHL9jkhLR8z3cpuk",
  "key29": "38PnPM71wP2ezYFgvXB5MykK9w6Rc1cKPGcDGpxeBJ6C8esjjK9U9vaXj3PhXkrityboWNv9MSpvaEWtuuPwLQj8",
  "key30": "2S6H4i7nk9dmCtsXPiySuPT4BGb8S1vQrz4RM5A2kePBCmi3hLp5hU7mk8gvYJ1wDsCk9Zph7MrFFnng1cUU4wf9",
  "key31": "57jcH145RrTnKsHZnxRZshH7pshZhKHiHTUK8ewwJdfDNwQZwdj3VwqspaMJJN2mGq6GY5uqr2qsXX1qsUwo1q4n",
  "key32": "26ttHhFZ5SwqwyyAHDWkWjrAM4LX4hgNfPhxabodKWz9susEDRKhdvbmh8AwDGcUAYkjbU9QAeqiXpkscQKYBH31",
  "key33": "557j5Y5gBhXwdbSo8pNH7p4F4B3PtNnLM6GyzvbdAG6uDzLnnPaFWcA15V1ypp9qyVFMkkxnEkVrkkiDugme1s7n",
  "key34": "535YLmDLPwMCLQ9C8U21WJsKUHU58i4frSMbj5ZDmvA6AJGNRsMFWFepiiRU9qxpzU4hbQ2XGJP5LWrd98L3txzw",
  "key35": "imrQG7VYLvHVDWVkfW4rZ4FPgVZfcpze7XYpqDkyMwSEMUSuprmgaHw9LHd6xBMMyUvsuJGrDTW55T7meoygZoe",
  "key36": "57FL8cG9BTVESWv36tGnh8aLz3s3T7n7KsBJNtgqKxSfL2T8NRV47maxxgLV85Feww7hQRT51XU8VmVqmEkG9LGU",
  "key37": "2KXVEQPdvd9hSVvWCWamWohEmNqQNUQjdgkTVQmgE1cJffeCzyXSJPaUaQGajVqnTDt2N7tnqrQK1gSm5QsMf2jk",
  "key38": "MGFJssxqdhbCizGqueBWkfRcgzs4D3fdpz5pZGgQeb36JJQ2rCJBNAA6YCFsfPCdQmcm8FDkTR5VuvNDcDeD1yA",
  "key39": "4QdQsHM58pUnndkUKDFvZEm1PZGqZRfpNaoHLRfzcd9aRpYWMB8ABUQoKMBVzG5XrTk8o74dAxWmtLTjq7NPDV8D",
  "key40": "aMQqjJgX58vBfXY478wLJt9iasNkwy7HrFLV3iGZ993RVC1RbNAM5F2DWmSgfT8MJu7BPkWf6wF4xU2Wac8cnGh",
  "key41": "DeQDP9BgXuqvEeG6fDZHpaeskkcGWkGCuauScuYigWBUk2zPcp5KoXbSJ6Hye7X8KAbyEq5Px88jDjfYfTHq1R9",
  "key42": "4ERpC8eHQumkSuC7h3Pq4JchDnWsxhhhx3bZNrR51VYbw4DCij3vzXANuWdqw5DW9FUquh6JvYveQ2aAwZpAQoKV",
  "key43": "3LFVVPtpTMeXAEkJ1t4BuTFWMKiBfxbvrQMugT51eYfEGHSmRV64CmW7bkWZxZXG3u2EnXMetE6mZdpMTkcSG9FW"
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
