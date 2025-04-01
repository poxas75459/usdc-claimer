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
    "3syNBMNv44hYZAuh2n1R5GeRwXkFGtgJmZovofpteasgVYC56yEA1Xc3F9NzRk4KELKtPb7Spu4BzXctM7FAgRtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K1PwwnvfHATfXaSb2APxUHTaY2JEC7TygGRujdRcQ5X9GKynt9Jtm1znCC69jmXZntiC7dApUpz2GwbeUbfTXJc",
  "key1": "4kzyFi2G2sjgyKWw7R2XztXyqtnSzrUYVZS6qLZXqs5nGfPabquiPkRcta8DSn7MThvxh5eAwLve6631tz2BpokY",
  "key2": "2KBQUGCxNYGBrSVgZpWHRm7jRL7UegX9dKUroURUpdS8Uxzv7x5jxTLf9RJtKAy8HLeaDRy4QK3jvnQUayk4CEmZ",
  "key3": "57MSwPavFh95rb31fde23YbCS9ZJ9q8z57teoeynjSfJWQ71751qt1H4BEvbYqpsFFTAHoHz8iukYccs1L85Nymo",
  "key4": "2KEjRomTj5Gwkznb6VvwuBZfUDNhQU98xB4Pnw7YfAYKhzsVP2HBTXHrbV6aka7mebQRdVe53sNUqZ8bT4tX1F9Y",
  "key5": "n3QCCx1hX9nAmXEXUjqMMt4uGRQabTMGy61vsvosZPrqbhAaRbXc2G55dmQn9HT7i55usY1VSW3SNSq8pfGcT7f",
  "key6": "PsrPdAizxg9eLsyPyeKKCpAcmr7dUYrn2xfyYydauH6xu3MzRstVGETPrDPwvDBMBCA58jKSWujAKDiBMMG4gZk",
  "key7": "5iYJ4Fthq36zBznDETjHmVoAzq1Sf8ixQTPECM6pkKYBXSPJARsxxscVeRDAPLtEq77Gq5VSk9KR3pxNTwTZxUgP",
  "key8": "2mQ9NpkSHYgNsAAnJdCCDFgoPMwxZ2Ja57mDWeCwT2QKPFpbh9NeYS6gmvKYtgteyp8m1xxy3KrYqPkgH5tWLfNR",
  "key9": "21GzNPonD5xyUecX7ZxgtXe7L9zwvxoQKKHwziqYUKfqJnvFK5TjSLiZv7PUzpAjdy1QCQkL4XowPposAZVwRYZi",
  "key10": "58WbFauZLBi47znB6RKfnWxy3Fc3ZKtmrtAMRpoLSoNLf8a8PSeycW7ZUigXkNDqooxFgyZu29njLTQ23iXvvdhe",
  "key11": "66yBtf7e5o1rbGWYT9jVg9Z5GYxZzapYxynWm4DXhAFrSqbLwBGUQMS9PqDwSRTfW7ipi84xoEnocLA4thFYtWao",
  "key12": "4ZS1k4NwVcDeDJWjr55tgzSudygVrAJsipxHkcXoimCbaxqmAaQuUYHXkLLL8rtfieUzLuYSvVXsDRQ7BundN126",
  "key13": "2DkkSeFocvRjtbnBs7R11MWAa6ECD549ChLMhddeTCSEnJNF411fEFKk2xXfnfF3FSbKKFrrMZLGSrYsutbMF1Wz",
  "key14": "2p82VjMgB9bc3pShdZCLPRbUDKSHat1dAmgTKHLBJXKhGKnFjk3Wi4uiAFz6LWr31M4xwVDUFTBcbFmEfT2XsDeC",
  "key15": "5CLs8QJ6rkLvi9LwEqmmxcTS2YChhvQbrFhYimf3UxqxPRrhnAnrmhmWNkPxTqcz8vTjH7jBaGCSypRSKpxRdRbX",
  "key16": "522EnNk3VRrNvTYNGLxyksh84jB5P8cZ4B3hnNXGgR1iFitFFe91ARtkxVWM3HbnJQq4QsmSrAdM5tTaaHM3rLf",
  "key17": "5o6JKR6oNsHRhthLqWdtXDhKk3GsD7tauGqkf1zTyY7KNpaAHsfuKhF4gT5RCXxHPvaBqAaTT947tHhZKkekyQBg",
  "key18": "2NLBgxfbzpvJsoUctSKSD1mg5mLQKkYXyKN5Sizx6ZYxi8Mbhwb2nPK1QVWruZ1vSRWAT24g5NxUQ4L9fobiJyE2",
  "key19": "4R7JcG1FfWcvoHAWNyDDXdtTWMy91nGzZKUsorUcLXBNGrmBC1nu47QNuLx6YaVXrozd7Vfad7zSXYUrSi9agySQ",
  "key20": "4N5g1Jw345KCso3RgYPAPGQxC1SxPF9o94sMwsDAqzEb9ndUBgFv1D9hKMPyTf4TPJ97CGhUjqpHWRWdF14pkFMG",
  "key21": "3Tk6kheYMegnFNCJrNbTw6MW6ifSUhXViDADTArKhEaSQuxziArwbrcTxJGa7sWUaFnhhfmt7c8Ns8wsCV9s6sBX",
  "key22": "312TqjbUhZVRwJrb6MDNsgMfAiN4wTztWeXuxPPCmZ8JM5GGEhzz9DZHuezesFh5JDxApR7dR1qRGuKBKzJP51iA",
  "key23": "2ASpgXNHwcpRqendXB9eZeTxCufipLeyt4fVLaMUVkWB4LseYEXaknS2vp3wAbQr5dTTc3ENt8vaNKW7nYe7U5KH",
  "key24": "5D4zjXaWLuhdxkHDUoagMAMQdMp7pQLq52WbeEczdRsTU4RD8eqMZ1kqidZ85wfgLb4onoUfLc9ZFni991xNg3PE",
  "key25": "4ijhZj6AXkjXZX7Z88MGexb4cQw1qtywcDgrcyHWdMEG1a4VBjbd41VeqpKZGc8wN6KN8SLHE3BgfYxNjQw5tmwo",
  "key26": "343JM5HfcSRaeAyr55W4DB4YNRGzw7jM2Cj76qwqANTQbjZLaSokvd9BUdPzn35QL6GMWnEqkzkqEapwU7bj8pKA",
  "key27": "4HwkfFN2SQyvZA6s7fjKnEzzKQCUoy8X813CXCix9Kx38U2GNpppS624DHPr8HYnueN28WkQKnujiE5WuLRoQqYp",
  "key28": "2KZFe8wshELNhGCbZ91buVzEDycDutdyu5QQqLBKNMDoYmq3Vev5p9xyABv51e4EmQC58HVNTkewB3qn3TpzEzUj",
  "key29": "5pW385qRzpevtqEv48Q2QpRAJAE27ESNZCL6NdFMDePofPZYyuypzdxugfyoEoNFxd9r2zAn5VVDeL5v6yYu7DQW",
  "key30": "3xvMFCKUECMjC9BUUqxZ2krstHmc9Xev8rAjMr4qag8s1uyhasbz43FonzqNfAgS8qKTGq6yh5jb65R8VkF97wdx",
  "key31": "FZy4MEBHXcpTvhbu4sPRCmNmmzXH8ngka8HMzjpk1iF7MrwwZq4X8rBwDoqEULaFgHpYidccZUK1oq7NajnF8zR",
  "key32": "5pf46PCAPS2Rqxei1gFyhQzhiinKa4LmPVDhq7rNb1Apz1k7iVX9HaJPmTvvoFjCAe4jBVH3F8q7eHoV4iuw2WWD",
  "key33": "3yQPCbYdunxVQBbR4qQeAkrHwQhAFt2hNnHgaVM7gxbBzuLkao1yQkEjDGGyAcAvf2boNoKnqi8u4CnKxb4cDFej",
  "key34": "3CnfgNnbjDS8UNM8cg5xW2NyL2Yi3WxzC3k6LdtagBd5opahXwNGyfz1WMeoEsDzMAUMEnTTHPPH5auJjgJUgodu",
  "key35": "3RCmahufSDUZdqjTBpErLwfCe4pNYwvXdSRBpR1vUv8EnanP4tAC6keTY18oeaFHbUeNJtrt6ij51mbQhwWiKLpP",
  "key36": "bSCFVTHgMRR6ovoLf5XhyM5zUSHnp7Dx1XaxPiSaw4fLvQYs1sAUPQYUGUWMpEv9oxMq8CsdCokkZPFqjGkZmCu",
  "key37": "59dxj9N34kp7FucXZUYgF5xjWXn4Epm68Uz6inGUfV2QefaFs6g1gYveHg5rNfUxgaL3myyuoQzZpXma3AbKRskL",
  "key38": "27P6Z8GiYkT5DzuY6ZAet5qgGwwwY9KTJ5ZsiYrjKzeLWCRyowFkniDVd6BB1P5rcLZVhMayxXXq4PyaPw4sYKZS",
  "key39": "QcKF5pXspCJDuJX7CtbQYiBXxnweGYztt2jXH216JqA7tThrhahgJe1x2c1av7tT4T8M2QRYr1eApeysaM67yf6",
  "key40": "4sG4utTWfWFJEtXRu9ngSQqYXvVMy3TE9VWcmU929YXdJWwphToXmzfxprjr1iNYWFXW96ekadYapgEtpoF2mcyk",
  "key41": "4Rb6GwvUeoXY8Cn7i3mHoguaYsmN7BUfsGPBAbnpFKq8N1ABGAkKXKTcX6BD7JAQa4udgXd3Es4sYYLJRYD2FM4C",
  "key42": "v3gYUjsRkydy62uWqQMXZSWVdp67DLW8hT5CWJhMZyWG1bF5YuHDAgxN8LCM7fuLG19yHE6deV33d7NCPRvPx4G",
  "key43": "4Yt7Qri3RsgohULSgN8ScZgDLkpjVAd4J2uZgnqYkZP8Awv3bbc4MeR9SUm4xfv8opPa9LosBM8gsAmP6Bagn6hU",
  "key44": "3VDkAd9kyYDpvJBerQwHpJxy9p92c2Gvee2Q4s7sW22J27MKTngQrRAC97nqUT7MDWVoD8uR294hphMW5mgBBQGF"
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
