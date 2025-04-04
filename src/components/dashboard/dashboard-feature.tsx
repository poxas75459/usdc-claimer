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
    "3LjcvLrhi3D3VoWNJ17tDwSe3v2xzD6o4krBiRbHN6TSZSE53825zJvLdjeeX1GKyw9ucJoQT5RHCrEiLK5wfcCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gk35dVD8spsySmoeDLQE8eyCvubqy8HEpWxoAsrxzFf8ydvTJE8Dv3tK1RbVqZxBJKdevrAeBqYFX61YPXa9QTF",
  "key1": "3Y4PB3BKv3Sx9HhuzQe4y2qENRu72oNhofKf1PPGphrKqeVEmmQJDEvhgu56DkojdtzrdawRVDVoq6t2EpYyiSd1",
  "key2": "BWE25xGg3F95tSz8a1MgJL6LwubWF9AjRgYccsvmpES8ojnpPHJe6BVMyFoWdiG7pqsetuTGwBeF2oFVbt2XVnN",
  "key3": "2Whpvj3zL637yrUnWELHA83cK9rS2teXmPPJuAX3EbDNDazEG2pxsi15YJpGZ9aYjRXaisj7bsc41ZpcXytjBrHn",
  "key4": "MaJRJCchdqjmKsV8HRxRX8UNtxzkowjiAHHDYTWWQkazFWjFKSTjCzgwi4d5NAQeTFqaCJtnVDMgbuizDj4fpxa",
  "key5": "2bj2nNU5AjZBKEPkP5v8JWF38Uz9hb2MMyVdhHLzm1C8H1988tapNgdfXZeTkhZXT2SkvBJ4uHnxBNSpeUKKoSaQ",
  "key6": "2V74tCXTtDRn9iTNcP219p7KDmGAzCeTFkS8hFc5Je5s3BE1HuVHSex2e8oQLTjLf9JSKZYRkSFnpXm8tyieH5jz",
  "key7": "2wUGdZWVMiJgSw7U3QtMC3TkezUK6A11tBwURzm7RqHgxjr8QviU4aQRVkybQQUpbLphoWT6DWhkz8nC47JFWx3G",
  "key8": "5vheot4w4VnFnUV1ULw9Tee5wSQn7QmL7Lmxbh6uBJgoAB3CrcSDVACRV1o5LSnbtiS5aoPWvSzB3aVs3SvXhmBR",
  "key9": "LMNHSpXvKu2v5Ckyef5NwL9YrK1eRmMqcwn1yQM2PiJpqdWotRobhLM81HNnbBKf9Uo22An9JWd5gcpTfxcCA3v",
  "key10": "2vENfErJtNt3MTiPK7HJKqwCgbCe1k5g2ad6EfWZbYRcZrgrC8TG47dBVjvGmCv52cY6oYXEx1QgeCBNbVhR9iFf",
  "key11": "5FanPEqmo3VV8LujbW8DjKs1miLjoQbJFyMuJRxFobmSNhxLFGXMLXSVM1PYiQxzMHEouDnaSpLMDfap5PmcqY3Y",
  "key12": "4kJKdZim2uLu2xvYKjiD2frSn499TdS9TiHTX3P5i5gaDnTLXagku2W1tT25Y7MCZ6rNZyZLwnrbszSPbyFT5oAm",
  "key13": "2V6MsDsWQWc5eV14PMV48DGjn7hitgzsd2uTWjPRapEqFUMoGFU5Du7rEnGD4A8sbrxo3ow4HT3dKz2nrNLQonoM",
  "key14": "2oS2NC7DcLeef9rKDqQtBPvZYzx89L6DEAE1JhTQdgRQfm3aADQBFpQGKdNYocZc3LS51nTYEZBtuu7VJtJP1gi6",
  "key15": "P9W5QRviFKnivivHo1JYGpDUa12RUWdc4zmWyW3DhsbeiG45aovrfMveBjDxhAitWJioY8h8GMSnJe8qBxNi9eN",
  "key16": "5E41LTDsTxxbiYqbstEWvasknJCUiMXE8JSTME6NP7cnHkyzYN4Yki7zjuB2FsJb1GdutLoG6vVgvU4jhEcgitGN",
  "key17": "5JGHVQXbNyBVgzJG85wo1x9dQeWuztztmu1Y5PLTiDnfeEXWQoiJuT9tN53DQYncS4sXLprZHB6qQybt1hdkXnXB",
  "key18": "5H7vgzsLPx1FbtaoqqbVFjGjkDfcmrxCQFeSNymjpFa1VrpvKWePZiiqfcocvRZpv8xCVi6tM3YQHJqoDwmdzfCa",
  "key19": "5mG8NosswvfUxsHcV8qXNnPEL4sZJ6VSyK8qBctbAE2faJCNp5VXWRAo5gw6SrfCfSWx6JRdeQUAT4BKNMJadMtz",
  "key20": "4yfYSPqKumL59S8Rw7EQ6sKn2JwDh3HyyjTrFWi9jc9pqQ7Uj527NoFySwKvUqpxViyPLfrMzWZjPN83TpQKJQKw",
  "key21": "2MVXkNExBi33cbecux3U6YrvxzXUAxCzsiZX4nEkk1JGqxTf1MQbbz5WJmowETuMSFDtRKRUD7kgXSjn15g9VLaG",
  "key22": "2TVWSMYQcj4UREHpckJQHYwYaCCVWmCbDJxXpUnaQAPAVW4ZwBEzALLGgQX31Cd99YJHSSTPJfgmqsA6W57M76oL",
  "key23": "2hVg6KUQsuH9WGQCEz28TTbS9DviYvSaAVWPFXu7zcGq5ZKfVFYNuPkdZNV3goQ75THCRqqfmHd9DjkQsy5Xhywi",
  "key24": "4HTvwSCWWAL2p3SK9UKpcMUx6hfyZtSgLLAUyoTLyB5UCgs7bxTM1PGyceh4t2JB31FyFFN4ymvp3QkT5EUPH76W",
  "key25": "26MdfNPc2ZSsNFvJ1EFqwiZrebAgp7sBc8kpoDUj1DHghZmvcm2i35Ed2DyJH3fJUdSZqzYM35hKZ3aJMEpHQH73",
  "key26": "5h9X2WKm97nNqdCKEsqk4vXQTVJiTwEHn7mwHXTWcPcrUanMS21VdSKte2411DdPgtwJwmKGCUqjzhrVxASZREnS",
  "key27": "3XL5daNhwJGkdLNQrSXY1exbjjotazhvFZ6bNMokyskkrPfhbDQJ5sfcXUSDq7UM4Ykw2kkzkuucZyjPZcrbABv9",
  "key28": "2TxpjMfirsrvB5mg9Uam2nfijdrNR4owNk5z4N3opvCBpuqKMPsL5BFoixrt4zqa75xnb9DQYzjuqDUfc4QfQJ9d",
  "key29": "4qB98VyhsfvTVMgMnzJkw69Ug4Tb1FxJoJY8Kqquwd2Vk2Fz1XgZ1QtTVoCUzTUBxk8s5sndcy3ajZK1JxprzAp3",
  "key30": "5m9kq6gzVDtxvQBo7wEbYDhGzeUqjKQjD7exnWoNLr4SkffhuiMVFFWZuXx9huugUnF4ouM1pQBRSqqanwxFpLJJ",
  "key31": "38k8hRFKTNK13fFQ5Tei1B93zEm9mVSp4RERPWBK4igCwNN1SzortjudQxp2KsCtJ5AnJwy1FkiWxhfZKwgBrbof",
  "key32": "5pVN7MvZUtg8sZhrL8mCKC1fxB2EYBdfQCjKfpgzfVSxNc58ZanhUv58eaKFBho2DnpRXsHzB1FdLPhxN8hMX8fv",
  "key33": "57HnKyJQ2NfLULkoppgUuBVsh4moAFiYN5Jw18JjHEXZxW25QBmQ9MYNpBx8C9b9ZMP6LeZjwGoD59L4DkxRBQ78",
  "key34": "3EvGDDUDKAgVMuZ2jD794JVx3tzFtfTiefgBmmzDi4mxndVQ7gmZMFiDsY5eabifWoNdduSjwPrzEbrMGYzfcy5d",
  "key35": "4XBwWbpad6Go9ptq72YRatLkUYXDhyg6xkdtwBVP5HuSdjAu1FBGG5rDWfH8K8XvvCUG2rdH9NKb2p16X7dHMkTw",
  "key36": "E12R5KPBg9knFSW8MnBEbWAUR3cPyD9Bccnv8cFkxFzUuDkFVqCcb6xyKrHNbYo45Yo6NyGcQ5HQhYi5gkqWWxC",
  "key37": "4xt6mjNKuJqoLqTR3oYVxC9f7ySv2Ug2Jqvvz8tYtcZDaivGjrGzFA4t5qsAbazKSp6YScwYECFZXo1NZUToeYyk",
  "key38": "ma1t8Y4tfxNMGPdL9vV8QKyShyBF1LMn4hm33mYyr57sy6ZqnUQEnAXbhhUh3GRFWmcJh6Qwd5SHfo7qqYZSiLx",
  "key39": "2nKc7N5qrPP2ip5XLT8h7qPfhTpYXkji8cuzcsD2JzLsyytiaAC5y7fEK7vPpbm8H65GUXHAyU11gDWvyTNs2FTy",
  "key40": "4UKNPHDNJ78EqWbo6nGxk2PDAqhMxQwWADZ2rCXeDU4RvjL2UkoLEax3W6hVhQgaJiATEuGjMEiLuGAwW3gYoQyG",
  "key41": "4kmLNHg4mjUeWxT7L32un8FxNauJ5KH9sTxzYRsvAV8NE5uuMu1vp3Rke6oX5zdiagXDsL58qLi6m4zCa44TDdcu",
  "key42": "35pj8c9heaQzkjb27mYqucqKbtUthXKsPbsKgoLigvnDxBnFNCJbujGUMKHduHf8DXW857zAyDWJ9KtKNZpyxjFX",
  "key43": "mWhriYNnuz7j6i8cMYagZaaAh1pbHPBDpjD4fDpA4L38cziVysnV8W7gAfZjCB8WQ6J2JLM3jGCYrcJE4QvVM6S"
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
