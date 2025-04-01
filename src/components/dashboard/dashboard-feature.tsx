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
    "25yfWmTVYHMDDasF5EuTh43bbxbd2sJAi66GrWhHejy8ZtbZG6JVmaF6TrUjAsPgFcvySjaPGdzTUTYGCFCik6UH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vFTWJ2tvajNJ3bCkteucp7Lt3nEwj7mu2YanMkaKu1XAVaXNLPvVushWHmvPXN8RV31Ut9xdjggEkQyTnNs94wH",
  "key1": "3tNgQeB4Eb8jZ5WdQ6SYb8MAbfgA2Ye7XYUy5FBo4D9W262vy9gTdSiVKq5P5ZLZLUQMFHGXTfUV4uZrTgWSaGp6",
  "key2": "34bb3eQjkWcfufgdWEki5DehFekDX3x7kEdat7Qb1848MVbRc3xH2vbCMQXqABeruPnYWvW8FyMr5jvv1Xy7rad2",
  "key3": "62FQxefdJhtYdQJkhJBUnB2E5dbvsuhnTUQoT5KGqV3fnj6bVhnDJwozGbMpuki1e2BWc4C46h1c9p1sZr3rpXgR",
  "key4": "2oESh9F1gKMGde4PaWDACXY38r33S9BVpfAonj1ty87uYeaAusL8BGX3re6LEyFPaJGVHPsBKv5z6nzaVDUxzRcn",
  "key5": "KQNsJika63nN2bnLbCUasLvzZSKPsDCZoNjsuyHtWP1UoLpwPqmdNQjBeVVmy73oGgZfh5LgGVE9JwGZdHKsahR",
  "key6": "2X1jkqme3noZfghBpubksLtQnPYFWLpwMFGwKVx1gWmPTLZZZvFLXKge1ZBR778sUcwrZebd7D2wcw3M6ieuzYfi",
  "key7": "3jzbnL1T2f6aJXauhaXZAtMMLwNPGuPBeunLiMBDis1nSurvrQD8TuN4RiH46wzA9izCGsFGvQgNkGHtBJf9JgLK",
  "key8": "4o1FNjUX8xPYZgpPPDvdhnxLPLxVH9YqK72fcu8HvXmq3Hh3Bt8B9VnaKGysJtAYXo7PGxBsDZGxXaZTkEANeFea",
  "key9": "4k5uJhbiQkdTW9TByirqBs87qACPdDJCV5BfsKiT7Ees5J3W5e9LJFqqpSsGtyoWFPxr4gJGLFzh1eoyGvZ2PS2p",
  "key10": "2Gzr1QiPgdV4f475fvziCqmkgvA8L48Mr5MjtZFsxrv1Gt7R54LKNgu3WXLgta9gF45at89uUheHaTeSEwirtZsx",
  "key11": "hBFcBi9S8ywacebTbqpVTWWijsgm5wFKJNd3rU9zx5znFVPX7pSgh51sNgej7FFVDGe9xNV1eUz3qr7rr13dqHH",
  "key12": "54UWejKat5Lq64SffMKAenPRsvoqUjZr7MdtUXnY5386iyXjvhT8U3N7pyze1wSCW96z2TsdE4Pssja28CNKftsW",
  "key13": "5mTD91D573jBMPY88JNiFrnwap1zFMGnq1983z2tQrfeaavp9RYBaWzHo5sF2TtpP9dmbaKUcAvC8gPS4a78TzHG",
  "key14": "2GBAnc2WdGj6ntj46RsH2MTnVbjRsqKwZwNxRBsFQ6C1pqmC3u9CT2xkcDqd6C6w9pk2L1MmzQVoKRKpZbGwCDG7",
  "key15": "46nYbt8fdKGvMu7HDNg9Wj7NSPf6qh1VxrJ97dUXtqSV2rBL6xuHF5mNoYZb3sMkCfWoZhjeAfuNwfn4QZwZTsJd",
  "key16": "2N7Dgwgcj8yddpu2aV3rFAgSH11dbeM6bH9nT6pcnakZujkbpNvNQL1g5iULnYmVh5c52fzNWkb4QdSM6bDaGkUd",
  "key17": "41M4WbmBUG3sDefqiKrQEpakdNqErT4JhU8DgkJpdJSzxSowt456pBtgPKmEsmwt7EdBW1KKYYktnqAL9oCjXJ4u",
  "key18": "48fF3R6jQ2dDNyKPdCHdP7rdEQSSTxKf3gMJHLHkJqntccn23y1JZz5HZDSyKDYTxt6dSJc6D8kvaJwb1pSrcSbx",
  "key19": "5tCbmoFAmqYZFuJmDQzXJGLEV3jGBSY579Q3JsxnKXW3CbDASjtZdmr76fosTkuVEUeWsvR9xbuD71FRjqkPERAG",
  "key20": "5qDTXJz9G2hnz12bZjmzfQgQrzFSoykFnXk4kZmst5S6YUmNbVr7yKAqjswPnDsGWSFCv5Hpu48ET2JXMBgjBkwd",
  "key21": "2sjbzMBvekoBVAD2s6JCX5e94odGWLEG4jg3nF2wZA2UxZ8KbSkQ1yxfcZ9wFeeWem3hPTAoDBkc6srA6SRRsHNY",
  "key22": "R8b3QQufsZjYtpAmccYucvVPxK4wDYoyH5ggpgioC9aKy4vcoyePjwJwAtAdyFrCWCNYq6qWpUQtXVJs82w38nG",
  "key23": "3Xw47NvbBPdpwzDqaJX2mX1ENL5enZrgPYsBYNw8X2fGRvjJReeu9Uq9CLvTXhE7ijRVoh2T9ft9iqZ7CJ9D4hkL",
  "key24": "5nkztARtrsGCfpXGYNJWvuSyMNjWtR9i1buzszLoFy185ADoPjC4E32UkTKrJ5KFjMNTw5AJxUscLFMYsrCnSVK",
  "key25": "2RSNbpSpn7aUTK3M9eFwAMquJsdL6cgPtZ8cqGEBRVBz47z2MbhXHcXyaojHktHR987Aex32xNSFs1fY4QSaPVAr",
  "key26": "2THLQLbt1u923gw1pyYmgh9NZf52jNxtS24AYPAt27bFVvwfp1cCruxo8TXCCk6Th4fpsxRjsrzeFSqKf4VY5P7a",
  "key27": "3H2Tbrxkb9xYX8PVZmzLuYCeJ9ePYKsdVNex4QhsPTdiNkBLYNZRSTKkNfEkxunNYttUy3oo33jaqaRsmL7pPqHY",
  "key28": "z3saZTNKcrrQ7QT8LFuoqc3TcXpKN9JLjAAPW7A3oCzdueRNLVC6x17gz1PpGsJoJ7nV2LGr9jC2UC1hbxhyh1Z",
  "key29": "4DMvN64oCcenzTpiMccCmfraskE6dThT1HWf7eFL93jAtgaraS53tKaQBfmXgb6rmway2UhN7qPXu4nVpvFuGHhB",
  "key30": "44bMC8BBFm7nvfz6nTuYaJ1LKmtY9WbQeF5uAZ5JAQdw8mzVMco2cREnKFatyQtr769PranJV4vtAECnAys7gK23",
  "key31": "5JxQSqq6F5TDN8oiN7RUg9iCRbKDpNCHuKoDvypfuhrNrvW4t4bmnJ8EH96pXzoikAmSL9N81WAv2nuHbVrzCYm4",
  "key32": "4bciXKXzidfdMoMAPrBvwJuTxQ61VFoTRS9TH84togsTD6o2ksL4s6XQWPxKubKLFPZ6cMFi751eskzEgK9sbfR1",
  "key33": "DLPFgfm2GKYZvip6W7bwYZtknoPsuSCo2edYZDTZCvQbTqntm5GjvGpfYq9rFPQwimz7ELoR2hCHKyjCmTBAzYJ",
  "key34": "3Qcjwv9qL9y1TB5oyX5PgjxwKkoAZvLAQ5tnce4PvNLoj2L3aBGPvczbux3wCzVC58ZjvcQWRtAj2GQbsWMELf1Z",
  "key35": "5sxJWdsYBfY3XQvs7XGLHJ3Txrt914sRH9UNFZR7B83NCtpMoUYrd8J2uye4x3chUpRdpettsgVPEGR9RPJj1qFA",
  "key36": "2W1aMtKfaF8WbQYmWqDVfwfs9YbzQ4hf5Z6yvnibQDaLiNktz8oLajHsJhf7bntzwAP3Ynrm6aFPCGGyZkCtQVYX",
  "key37": "5a5ci6J635dL2Prf5sCC2pyogdshc5P38aoVN8uZZtkgkZfdbGoeL6C6x9iGQYhoSx4UV7v9XdBZCNNWkn9GBiRG",
  "key38": "3RhUKGr3NKufjHZAa5QmLyakgR2LYMsUmabfmDPcL4PSRQRq63ozCho88VfPxJdmQT2VUXdsf7dMKpmhXGem2Qxa",
  "key39": "2bEWokKQxUXMALe7J7gWsmN6WTVArrgr7cYGaKYsGrExMnJqDmiLNaQf4isyf64gaAsQxxLN7j4CaX5i3dyJxGkJ",
  "key40": "2XGjXsXHMkyVoMUhJhMfmKsUkp8NGVsFoDozfCp2fZowry4nbiuJhSxSpFo9fnZGcpScCLoD2pgAmziosj5Bf9P7",
  "key41": "63LB3PsuU2ag48mkLuXHqKw8gBY73vpwaKtBBQ6RTKHpD9KvVhoiJ2Nmpjqfri9xTbVcpLfVujt5BnT62XxrRVYL",
  "key42": "2gzrm1nPzhB5YL8WJoC9wVgtsRT2urvdvL4VX5bd5hEUivf5bZZJ2ZsX1AgCVNZmPn9dmZKyDLF5aCPFEjpPE6w9"
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
