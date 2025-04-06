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
    "3nFctKtyPVMqZ3mC923CRbwivvYEJ4eWxF2yZ85MdoWu7EHZ8hz1Trfg7otopccxuAbzWeEF8TdRRbtmWrtxQFq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38xzCXKR14Kcp3oom5zfpwVj6pRW4mKX85z7tjgoEzVTTesmAiN1r8eaVFVNc3Bgu9iEnsMUXF7P4PD4KFXaEWSk",
  "key1": "hncFYEo1SCHHJpxhKd6Qger4GyZyfeS44h9NLNrcG7eBiqiwhNSZ6Coq1F69QcuFvWV2thEP24XGvhrD87GPvaa",
  "key2": "2zkd62D6jupAgchvJKtcPYpwHZ69aevTZfEgwHBhyX2T2eCk2XvdDBpMKZLPQbCdYkFTw3RzcE66p1zhRmGWY8Ns",
  "key3": "CTmcTuBK2tRN3d1Q6w3aKQfSPr5bZ5UuDWJhJfmv47rBRQ5Ubo5V4KmyR7vwhL6WdLKTYJAb9Jk1YvMjF9kVuVs",
  "key4": "38XSmbP6WQ2Dh6k7WUeGKL1bPsHNNrUdHwSd9uPTiQzFxdLsiG57ZAkZXibBNTuMvHWYnrcL5V3Hxkr6LrqC4seM",
  "key5": "5B1sXuMdXWdqcivMoGECs1wX6Yd6YgKnoMBu4DxcffysPLHMTpLq1W9MwTutNPzqZzMGnhj33PCSDwCKBrvY2825",
  "key6": "4tQNQY5gpAaCJuabjuLLjgA3MjCu3j941EXb8duwCXc3QVK1mHEUGSiUBLwTjPsw36rJriqYTtNaPMoUJWtCSh6p",
  "key7": "2un5FjpGG5obE224E24HxbKCeckmxjd2ted4Hkk6yt9zhAeqq4bCaDgkxfNoBMzC4rgeguowBgkwKVPVZ4i6QdXT",
  "key8": "4cZDJjX2ZWaZ5jcqc4gykrpsZcGTP9ao1kt5K1jiTthptj5HUQyVZyLmF1W3zkBWrsbnBd8N5Nasvx9dosxf2YBR",
  "key9": "4SpLEyPSzxJaH7WUmtH3s9o2zWed1JpZbvTCazoYE1d1nQYA1j5MW7sVH8DY9qFct3j3hLv9exzyP2rPToCLCbjs",
  "key10": "25A2NbQ6Xar6QA9tMBX3StLWnq5wEm2Bts1ER6jRLZMuXKqJJYHhSVr8vVTkRATWcwy6UitN9bXhFDaTbJhJyoyw",
  "key11": "5L69vrYeShY3P2gnbiD4a3b9eGu9AE9ao9YDYSrkXS82ox17H6hCWY2aPoyASgTZrPEekvZnMoTLdZ3jtjrPxMfa",
  "key12": "Vg1zKnrv2BYmjnY9JtuYhpifuvZ9g814RhqU2CkBh3qdSnqD47R8DwGp972c4daxu3ZNKDsMGMVhfgRaQtPL9dJ",
  "key13": "Xt6tMcTWU4Fs7Rn3wfEDBHfkgAQ4S5Vc14EU2nmrii8nTpL77EeHcDbY66df964hq5bxqhEWfEYyUuBPXskDTw5",
  "key14": "3P4DsRHCRkgYmB4Rhn84Rc5x5HwsNHNiivjNuNxR5tdAduLXyZqUnYd2WWcQJyzFxxNjbj9JAkfPi2EUV4gaYEsB",
  "key15": "3rLz8XVJUPtBct8dvYdEfnyGLsvXstaxJbRbY1BR5UEQqQ5JuBJ45mUJ9tDzCNXfNzUcwYeEw89Ymni2AucWiHNt",
  "key16": "3VxMvzviybVn6kQZoAUAhc5EQsvcZFngMWQjQMPSjjx2BpaRbnr22tqoFMgACiMTvq5MFtheXU8L5XjNEmKarMER",
  "key17": "2EnV73ta8ohhojr6F9vtgUEEAU899khwEvxUU1FAZDTmdwS8RuJjbnWoJP7TenKAX7QeoqHPZjtdkP76Uw8UWkyw",
  "key18": "2XKVRLPPC8UwvnoFRyVv2mdLLYf59X92g2Wo84QJPPWxN4ZZYfp99p9ZZD78UrLvV6RnnPRcCZCdrNM4keSz1Ack",
  "key19": "5e5QFCVASNoZqdWwHwCGoQ43xcfQTq6eLR7TLZ1LiYPBkkTLBGXueawWPTUsKEsacezQH6EBnXaVRmk3UCoKio7X",
  "key20": "2Z4kQ5eW7oAPpFzBGQXGitiR95cVsZEzjtY6iJUWv3Fft98HtpqXRqu1AfaJjaCXmGrGVcVHGq8PS6T72MHQfGsg",
  "key21": "96VSzStXsYBMYc8R7CKB4H8TqSQZFNoLnc8R5dQydLLSaZU7j8YuKcMAgX9cRqxRbH7Gzpz6pkgtXq6wuPUaXfm",
  "key22": "uA3mZEdqboUuGxEPnahFPooMMoTqbNmuMgZ7djXgS1BwTzoV8HapP5Hdnzeeja6MoEBnej2gcLLN3A4hvewUdNA",
  "key23": "32SeuhpxMX3U2L3qhKX5Vec47XtDVLfq18gxU5F7XsFMLtjChUHnhuayH83fHKwia2TKH7BFS6F3rQNqEgqTEMm7",
  "key24": "gLYVahLk9CdaxMkx8cFX53ScNmPRbs8mJYgM6UT89pn8pE5q7URre1usNmiewfCEenzNRDpGZXtec3LXVSVSCtZ",
  "key25": "5K6z3455ania6n1RTBizL51kz3NqJDBSGZoBx97WwFaV2iMwnruUcq3Na1VpPU3stYtYosgf8sDEgZERSVrHD3aw",
  "key26": "3uNBmHrxz1xvVtWciHotFb7tfCxu9t3G3RxK5wK5W3Ni9DqUyRTRsprVdJu56dpcXhXDV6P8GkbTC8RiUTVeizAV",
  "key27": "3Le9dQZrZMh4vSZ7pZWjfXgqsQGCTtTkLpg4MXYs3GgEn8Rrpv2v3KfLL8vtLH47NjTbm5iWYWwvncSjPEj6UpDB",
  "key28": "4xjTMcLCZzZT2Pio64gMSCJowPHxgWBQsyV9n5UVJaYyoesf7vDVHmCSXYuUk92ojcNdDo8woDJ768wdYeUTVJdY",
  "key29": "3m8gak4PxEX3pEyhMmbGSWfbjrSzDuxVSaTpHTG3nBEruNzfpArxyhHwGXQZ9G4FsN8yy5D31zwjQXt4f4pcaPK2",
  "key30": "EaThgQGFWjy1WjTmbpXHrZVLvSbTasgHtHtqCXGLpQTshwsZMAhF9obMKFJQQtWHwtjESVUuRjEas8AoHwSNJVJ",
  "key31": "rHTPX8o6tZZ8bJrjybAESvz4msFYg3dVdCD6dsPd9QkZ992KSHLPRd8TeTzRcWnyCUxZcYKhBD7EaEM9dmEmQqn",
  "key32": "3tUwFBwsrivxYxiFtWV6YdJgy3ty2iLRan8DdAGi69nRt1b9EUvWBcdEacm66bXFjV2PgjtZhfRY9W6McsMGtvJo",
  "key33": "Z7fCWj2bjFZGm2KZTURX6X6ckfuwEgyH2fRKroSmzigkWjVDtD3es7y48wjiJvHAognSd57Km9i8bgh5QhdVYZo",
  "key34": "3BKVr5YbkiVE2svXMjtik8JPPcuqLgj4CKPCNAebHA9t5xH2yXUgwRWaRusngCsiUQ6eaxtKMxopnye2JCBgSXgD",
  "key35": "4tauw3E7BAPiBhW9wYUQbHxB7bovPXPg8gFBAhAqGkL13xs7FidBvSopB7dwtGpoeoggTVRQMZXANFJofmfrz8x6",
  "key36": "4vP9c7LSiJZudpnUhg6L57NmZDYCtv1pPhU3by3o8Eyz2UFPnHf7JFjqP9HKMpKs8iN5zL3hqiLX9YTq3ZHJSzdU",
  "key37": "5Uf23WaupKAZT6nY5JiPm6omAS9dEsm1mxQGEiK1ooa1BWPjRF553LP5TG2S9qJr1hScLkt3Lgb4bZ9Gy7Fe28L6",
  "key38": "3vQasTJ9LuPxv8mpUe8nTiyqsNYYLcHkTkYguJCSSL6homQwiV6vvMJ9XvzY14u3NNNsr8RLgnFaGLnvJtSiLwyn",
  "key39": "SpFPG8TiKxvX6XKnWF4rBtfZ1RhTmEkNbFobLTjzCdczuqKXazxwVHLzcRXW52Q4b8r8f8kVu4G8gvCuUtY6Uri",
  "key40": "Gx5d9kJLqrHstEXvDj6ccTkfVXdPXVDhAZuvDEkfPS2wCBFmkd4gGGMHYbYSzzZCFyADhKGAsKbVzKUq6TDihq7",
  "key41": "3Lxi32mTSy3yem1kxfpKh2bZzRhPbvCsmWRzE7TkP7WUGFBTeBXjxkHvjPAGnJuAPftKR1a3TWAVVVgyRGainfdk",
  "key42": "2xv2MJDyA3huzxxBaJoAp9hvPsH4xJKemjUFTcaxvRVxMPMSBRmSecoH4SrTWHpRK7F3QXcaaL6VqComYQ4LUx5N"
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
