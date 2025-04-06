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
    "4fYtX81EtCmEEZXtBT7DoZKPrUaP6QBsSeiJ5XE7gYkxSB9Y7TeebrAzy2thgQwXiaQ1C3rvGLzJ9ZuVJKjkYyha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mRopTmu6fgJKsbsFPJLYfREpZbAueyShdJVJEoSiRgJNdXwxK7wAontkyMdgombViZNHruEBkWdf8agviYV1ygT",
  "key1": "3DwFx1WikrhFuwkX3D4Pj4eVnUdYzuKYVkZN67pyMVJ8E53QXvsLzwq8PzrHNccXmZ35GFNgESW73ExphLQbkJti",
  "key2": "5Fn2M5xs4RQ9ykhcsAnvKkRFcmtS3VQPiqmju6FfgvCMXn7EnmJfVUfYwUZcP9j9uDkGMUcjetJhA6MCA91xWrH9",
  "key3": "MfD9Rq4diovWaaDo9bn4Jtkh3Zinur8CwBocrqzw4mcELSzWC86oTQZM8CuEWcjdBz9fLGmaBHFHsyNZ72K3F8V",
  "key4": "4UaY59WNQ9pLrP2BKKyfXyVM8sTSDxR3118gPdxZ6QaJqyNSBMdRHvGh6k7raE4kRj8NT1XinWeW71PDycV25nHx",
  "key5": "nWcmK2TfCXHX8pApaHmYYH7a5fnxJ4ksGmaGz7StycvH1Qou4BNAjHrERxSExGVu6hhr5XCMSsH578H5t8TeTPK",
  "key6": "3vDhyRLmznQKjMRRzNRmTZp59tCpra2D6EJ7V5wkyXhFtRBGq94CaZAnMa3ebkmTtkqBdrsfDpvUjeDzoe2Kms28",
  "key7": "54iQEzVcjYyrTxvWMTQ4DsS8GprfdRJcicKAs9hpcksxS5dvseRaBEAM8ZM7Sm5bUShzxCin11dm1tHK3QNZc9JJ",
  "key8": "q2hUGNubBFrux7xzUJRbtd7JhvfVFkozPsuzZCWLnPfGfCbjiS4akyGdEchKb893vNeqn8HRr4nHAL7He4vZSAk",
  "key9": "5292TxpMXbyRLfRD9zD7jfvNhxBsasAJyRJtkod2o2C8VRW15UPGfkM86PQGmLhQLmWv7gxA7gfCd6LGTNhopCh5",
  "key10": "3gyWtT7a6kEN67hfwEfK5mf4CueVFME1r4vkhKUZauSFSphQ26pQKRTdtGEy6Wbk125TYu5zrCKBV6A4yqqMKzWV",
  "key11": "3o6nJCf3FhsADtqiBpofWc6qDE9HEHNmhSCaz4g9sXzxtiBPiCcTTPTwsaM5yrdMAY1zJ3nRdaoEFM7Ut9sZTei8",
  "key12": "3wWCqAs231Lv5ENzaHnfePvdVthMvBr66cJKY5EjUSNYnfuw3A3F129Krbs8gumCzZRqcESCknsREYtqqQREfeY5",
  "key13": "3DpEj9YcmaxWNH1ZdwY7PPTGGVr98nMZbAFuCUmQ8qwWiGYm5xYiFYSfSajy2Z3HP6NDTguEGn78pPbME2YFqzcn",
  "key14": "5FYgPSbgN5kvRVGWsQefkMLVYR72DcE956UBdmTaRbWG9y2JpYwdw5rJwtHnB9UYfZPtk3c1eQJ89gX9mX545JwN",
  "key15": "3daug2KPrfQZTax7MfAjmwsFBYKbeERwGPUsJHKbzfg245sQGgfHX3FYc3bWbubbdTQ8k39zGaddY1gtwPjs3ipq",
  "key16": "4pm8wNCGXeR2ozutgWivZEGPKaEqUeEnoY6bT3ubaz9mEe5JfpEupxpyPUnn1xoRvwFBopxzjbG7iHDHzoDYcWdR",
  "key17": "WUBXCVDk19Kj7BoTNomZ3V34aobBjYHkKxgCHSC7tu455fVSsG8giKALDjAFYSvyDuiUmZzLYX5UpCoDsiNS1ns",
  "key18": "3bNaSdjktP5DHgcL2oiHwrbGWQq9hkdLHrouzd1kyjEpSGi2pF25vHTdtZZUiD7hBBYAo14aQoFNUsokezhSj4cy",
  "key19": "4cP73y2F2X76bwcswke3VDBPQtubWtQZZr7RbjWrCXYLMcJ7Cwbwnbibj3eZEcEhezYAnqmPQRvkyiKcbc4VaRY7",
  "key20": "2LDFh4ws9d6xeUFze3UQ9YfMqc7yfCicPHor3QPiagC6YoPSQ5hE88BbTgdsDYELhdNdDqZqtDnnXoi7Ko4NcKp3",
  "key21": "5NqNniMms5yvb3px1mXCwgNRqGBxvmEEhZQPBu1CHHpaN7Ez9fEPcVq7RK2MdvdqPi7M8MRbGxMWfQDaH8ecZ1Go",
  "key22": "2ZBmXTn4uTjH4RzxhLzboEys2dZr8qtLtLXCNZGtqRaPTAgFoYr45YrRevPjYMfXSaGfNZksnMUjKwTqTcGqnpkH",
  "key23": "2P2y1W4xjj6gJZf8ViVecJBfQY7n8ssaJJsQXrLEMySBQJ1EhHW7LUDJ8ofKuGVEeVNbEXRTc6YcZX9b7i8uTn7s",
  "key24": "373dmHjewaWrkZunh5JT6gAChd55HbgrDkYwxKBN68dvZqvcfM9Zwn7mLpDHZ1DiGe7ti6rAGtGCtuq2ryhCB15b",
  "key25": "313KNFEp5AqY3Ty9VdjghBmPSSPaXSSBTVHzCXCvX4Sn1gc6PR28vdYPnBnPEWdVSSs3sqr6iBH2KkkZjbCdHWCA",
  "key26": "4fATepZg3s4orfqvywzEmEjZcshrWwBdF1gVxPTkJZYnKkm9Sap4p79n61qrNSgUiJyKZNa7cJTGTkM7RnpyANMm",
  "key27": "2WUXWEJ79NBMNmjxhQKP5eBUdZa9v3o2rhPAJicRysSKDJaB1YGgL45KRSE7tEaEx6qw2ZyqxPRAd2vkhHaqTWbG",
  "key28": "5rocyWwCvtiNGT1kZLCNw3tYceZ3MeYV6EJ15mw2TujtNk93RvPyhxT4DaSxZbo1hbJpPcxpSvhyrnVV1qGPxxUY",
  "key29": "5f4775kZZt8k4Yfj2ANBQje8w45gnJZEWa6UoGTsYLXMELArHc2q8tK3WuDYL1FgUiNXmebZ2DwKsYZGa3M4MmuS",
  "key30": "5WBjJCmpnYgDjtg4ki7xYwFD2aL3t3ZV7WxWDzmnAUbYpLHmhsJF1v3q4By6ysYnfdxu9wzAc4v7UyaMjQrD2SWS",
  "key31": "BpW1LdVHxpcwz8sFsfxrFStDesUtGkDoSffx5x5J1MWdbdNCmq56zSFzMwtcM19ng3jF4tpmBSEJm937sDwtHZQ",
  "key32": "63aU5TVJhLZf3FU3sG5NHEHxFZYBQ58oCAB53EhVVsQ3gMjZ4kKqyqfYdvDUFjaCZ12r9ti5SPmk1skdcxe3eZ3x",
  "key33": "5wwZADLvGcThqvcFfJjcz2atsxxME448nj1PsdT8xSz6PxnXpQKdN9DngAGWn5hX2na5ftnen684khBpA6QH97h2",
  "key34": "4eYonkNd6PEnV5y9oYAhsFbw8BVQHkWFdC1ybnAB8sS32v9vt3CvYv29mWrzt7Cct96SS4riux492yuvVkxNjhvi",
  "key35": "2qRFjLptRbydvn1LMavDPsNrr4g7neT4Vmq6vKFaAowrvf16pvxwEoCEUqPE1xjzDfqs3MgzC4ihozMLuteYjdfN",
  "key36": "5irtgPQqob3oav4PySuc3qbQV2ph3xZiRWANyMXyc8eutTTyocifMHxeU8vH4e8fExiQYwRBUAfYCPk54BWVPnoZ",
  "key37": "4xEbbA4PVgzwG2GfyGyKaPuVzP26T8T1tKbQu6qf49QGZoZTWHaaRUv7AWj2DvRtMfD1SCjRJStEK7MNJd8ddyGs",
  "key38": "4cJ2uZgKV96x7gE2uawLyJ8VgMZTXtTbUv9beJrBU27N2SadLp5u8VDsEmhSfcMiquJLnMYTG7uM35GBs1cXfxFh",
  "key39": "61URvX5EzJ4EMhFhFb64MfHx67DEnnDwrKF5N65t5p4CRTKggzLa2NEkP6A4XnAkzbzgfx4crMF2aEHUhnvwtKYU",
  "key40": "FtZCa9i3KPBfXajP9xqrz2Fz6Mns2rtViPkydJZ29MrUk6GpPQNAXCyYba9aLKwsMg1TCH2fGS2og91Q3oWsBB4"
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
