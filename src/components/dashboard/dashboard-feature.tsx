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
    "23ky8M24mBvFRGC9UomLS39o2zSmzw5VZ2spvsAtpMTZPri5quiWzEeTsAdvrNTf5sLi4cb7HHqs3QqdkxnXmABH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "293KUSXB4S2sZ9h4UVBeV9pkRvCiLt6BwxLPpnGMF5NE8WAZLhGY7kkFqwohCPs4RNPZXea6Y4H9yjCBVvm1ywE6",
  "key1": "3vViQc5S23fk8R1wuTuXZTiBao5LcfyynRbzdqiib1Jwumr96Pas8D1yuuzsizPCQBWrCtwBcVY1cPNQb5cCLezW",
  "key2": "7pFKArD6tDAfEEZwJUphJb6LEcPDxUEjPheD44bn4ysbgeVs76rGs7S8iGvCqST4RXuyT3t2vTuYhxEHe3doSzu",
  "key3": "5yhwNL1iUsjM3Zw1GtHvJz7KX3aeSaGydjVCrfJfZYeWUbkWxCNj6mY7KTm2Fg3G6dab78eYooP346Hc9BgUWvk8",
  "key4": "Ag4vnGf4e24dFNfhHVYq8uXNXkH4DGrhWQbBzQXSDtkyrMXPLKuUoVmBRaZ7XmHH1BYGwDz9qq5wF89v8gdn8Lc",
  "key5": "4YuQyN68PCASe77uBTrF59GfcPN5LyytLDfFpVR6qNKSxCFcCqhWkBD17EBBtgbLBe3p2JpiQiV1pRYManvMZFe9",
  "key6": "5bp6QG9oDHW6cPpMPkLVprwvo78fDERn4mM95ksVju2dme6B9GAo7ujk1jty9KwEgTTqs7zJY5cVQhdLj6ycHZG5",
  "key7": "5N2nzMmq1L7KvXQHbmTAEUqRrMueivGSaAeZqVpofytYoBdkR7CaTmntHSGXwdTzpprvLDjqXkgYU1kVoDhXNqLs",
  "key8": "eyRkAxY7bLiffivSyRkAS7Kur991Nauaq5ChQwx6aBWX61JNfkKVwiX2LHHEHgJn8yjAUp5EXP3NK49NKL34inV",
  "key9": "2ufqKBbnZK66tev6ZwbLVN92WReptfZAYBhTRqY9XhNgU4awcAxh6afBhRkG2bNre4JhGSBxytvrFWmRpQtHNqBi",
  "key10": "32CkNvqMG8XAoViHpr53CsJPvcoqwJmc7sy2CUNqyvNMsUbWkw8qx38rV3WwXMbdoSPNh5R2iDBjM6MB4qXNBZG8",
  "key11": "2rh7YYkHR4NLpHHe4chZLHkDkZ1Krb7NkewtbhnkgXgBbq7C2xud1aKMvkCG24R4FvyH4LFnxScs3E1Qcaef93r2",
  "key12": "4Cbi64EdyEsW1eZjT7qnsRW5phbYGeG222eYe1UkjBXsyaMHY1ktUaCsyNZWoP6xUxcUdy6roSyTSmnJfEEWcfXD",
  "key13": "52arW43hhUhU2rYeT8fXxmo12kzZVDfyDCpB2TQ79A1xxWfpvPwX2rSB1Ajg8HFgZDujaapswbzDHr4CiTXH1QCF",
  "key14": "5Q9PGD97TLjQAW1wsgJRFXt6W5E8U7AHDuys92GjrHKmu4biuh5q6bENAXEp6jZdCK6C4vidw7QamoWj5YpmbeaG",
  "key15": "61c6VxDMwxyirpXLCF322ZZjFKrg3Bz19fitmtkAW7sMAcd6TzjFADKq6CaVxzUnaMveHWXzbWZbR83MKzJE5BJP",
  "key16": "2vusQaZjo5PDdiALfe5Xt3tuFY5VbBhpUHBiFbJyo7LXgiFtRw79SjVDcT4BGYanrV1mLNrW9RygybmqJRaoGc3o",
  "key17": "472Tuh9oGroDHNv4cB5BQ7u3RXwC2LnYX1uoxcBCcWAv5teKAmafRbd17SjNR2xSLHcC5YUeZsk8d76J1mNuXgb1",
  "key18": "2yG9tGWkzJ7F9LRxYRkrqUV1hHUmgE3jV7K2j9ayfzBzeRWe8xFepoK3kSipDCq4UfKxZ8UZot9j2P9o1x3UXQzv",
  "key19": "4w5xDwvrdxUMMuqBG39ezocBZFgsky6DXS6Do55D7A32TrGQLLw5BN56VVneBjVePqbxhybBx2S6N9n9uTE2JZ4g",
  "key20": "2soQ5b3zzovvzoG2MkHn1uJm6NPwJQDqzzvJ1ThJKd4P65iv12QjzWh9FHFT3KtdmLGaQyNfEy8jQ1iWZKe6Qx8G",
  "key21": "5Tcff6VAhVG8nWuLz4ag35dzw8Zpqm6NSEz1KfB8uLBtv8wa9YN37q5rv8azwaNpDTkz3jUCXkiFwU2vNtFGkpYK",
  "key22": "s6Qtxy2hBmWomqUsoRRsmv6VTnNyJDEzPa2QKQXPE5ccLLkXmL9XdcNcKfCsPPm8hud6vNgzDocy4wXw9PTJRt2",
  "key23": "4FKhvicH3yKKPz7fuPHihA5ejbqHCPRvAvrdpdRKGo6D2GKC2CcMXHspCQy2KqSmmR9s9MR464zpVyxgYuUyJyt1",
  "key24": "4YvNJi1d6rwfmSKfxAzySKojPevEpYNd6YAhu9TeMqWyb9RmodpJfZ5KqoTZufKb5cWkDyngeWZp8hz7gDBo9iH6",
  "key25": "5JhhcNPqgGg3VmbSVnh2MrDxpQNCkeKYu272oWq4f1r8G3aEZAsej4hA4NSGynWdgZL2cjwDmi8ngPrXVLETQ5Uo",
  "key26": "5g5zX2tRuwZhzexyaCKbwEt5vAujz7ZvtbWQwyWuHNAmf3u1f4BsEJYgRfTARMgKNiZsGxA2Uij7RUMW9QKayJdK",
  "key27": "tVrEEgiLGoeFWE9G2vbJshwcVzLZBgPnPfJaFu78BDPxHcyRyeApCfTt2FgNe5SESpSRK5BYuqVFBW2FWh7bWSK",
  "key28": "2HqKa7fFudPcBbhv6PC2su8iFywhcZtbLmJhpA869m7Nf69DfeHzRPkdnJr31a1mNUuRVMQbrhRLBpYSAejw9NVU",
  "key29": "2tX6jyzvMkpRwPhBmwjQh1uPidXN39rW77ix2VBtou7d6wfY2sg4J4DTVs4xYZwWEfcXKJpTFG6GhxPptHKHnfny",
  "key30": "i2FKwusKcKsNVBNoULzg3SCCmGHaJ9TfTZTr1eWWhucSk4et6PuH5788fsykkb7c67mMYDTncYXEUiWxTVQEpTQ",
  "key31": "2fVM8f3WKuLFhUQgivEE8TGBbs7i6MA8E9GvrZzyzgKXVam3dniSfMg3xwUhTbcW9mqj4HYQBDrJmv6QdzK339if",
  "key32": "3WQ1szTH4ENqNQRNwUZeXrN2UFqewzx8k3g6vMUvZSeZPjFkdKXvoMzzy8Bfagw5zNAouHfukpmtrH5pxckMqDAu",
  "key33": "55v3MtLBPYK2dZ7X7r4qoFzktikp9zXB984rWAx5TmtTYLsu5rp75Uy75YXdPFvoKg72cFutgsNjvBW98YvBRsnW",
  "key34": "38ZKcn8MoiTmB7Z1hTdCZDA36pJrZAZvNrfBQdKt5nxaFzzSQHHRA9Uy7wiAA9UHRaEEMt9a8YTQzxJgBHce8ots",
  "key35": "4TvFnQMfPdihq5tDggQoHUoFmRqQ2itUoyAkepNGdk9ECcNDBE5CgxbFoAtBVGAJeKJ1niTNgS298bA6qKVqFAGJ",
  "key36": "31qJZLuKBD1KYZj7ywDQGnmyVW7FcBRU3bUeZteV5WSWoGzoCmP46nK55tc5NsP71B4CMXcghugjmLwaYWfch1Ea",
  "key37": "4Bdzr7FH6Dv19phNCCCnt77mrc4QEuTqG5ZMGRBTHGbAjDRFpHqKwYk4RrX4aBursNpsC9uitfiZhiP9Y3nXayBF",
  "key38": "3XwmNpzDwUhaLfwLH47S4bcGfdh79nLb2s7S1c8BQWLiku5jRY6wfpXHR1ibwx392sPzxVUeKoQSaxfmdKN8ti8A",
  "key39": "3cSZpNdPQRkRo7y86qb9B8Ptg7NEoBTkCFRrqYvmSkNpJXkifqqNmVg9zqjp93qwbRXCAjqgCMe7DZY857j47nVN",
  "key40": "2nDnavims1H7JUBJ8XFWKLDd2GDtT1jWc5PFB5SMokMXiG9cZqYguGPq3pDe5UhDvyHQDytjsHBbANS9DmzhhjCJ",
  "key41": "5fkU3QafnkyyMKUv6XrqEvm6TJ7FgaPqb22jv78QrR8ZFEieojrEtTfwMsNPeLnwJGZhBL6s5n4cMbBsP1tqZeRf",
  "key42": "3sDuv7ohXma6Zt2qZQpRixUoo5FGhENh4jJcxogRRKaqSzgdzgg215JXt66Z5DXrpZ6KDzb8VG3pLjcB85BFiRnV",
  "key43": "R3UQ6vBu8dSFttqVoE6farMBMaNTD3KRjDUXgqhh7G5foUiYSGXTNH2aX3aLbsjdoQqwMiETd2ksmrQwtfwDCri",
  "key44": "Qn5QsNqtPKqhGZoNmQtMvj8TuVogVAkDQMrhQHTcwTZeX7UWu7mv1iicRG6jT3mS7BehegRHXzCwdHwAmN4odS4",
  "key45": "29k8PZYks8hGbKX3v71QDssHHQfwrFo29izmPwpxSpnPHbzPufjofT5SenQq8SPbNAoR73T3LT8gGUqBSUTk3p9e",
  "key46": "4fokDXRHMKjBhg5ANCdz1wAtBwVDGq9NLKm22THQ1KXRhpsh8kZReVyutC2zybKnYMnYGfFNj6eF2tdDLRuJG9V8",
  "key47": "49xny4cpkweGNHj2DPXkMpy9oDUTbHrKtomhF3VMzGSoiJQ9rZQoGfJTPbFH373C7sVQSqNRT6DWySjx9Xzv45t6"
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
