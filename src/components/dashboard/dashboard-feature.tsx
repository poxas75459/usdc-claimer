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
    "AjiVwi91dNGVxktN96EtjYyERs1tUo1cJRhSkiX4NYKnHx6XWJSh8mqTY1iceToiiU6VvBhEfMog85fmRVVhR5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9WgHYiTWZF1bDsRzgcKzZiSCmj7hBLD8J9yDNkW1UX93ShPJyDrJhXK6CqLLxPHnCy1FEGp33SgiXb1hQd4Hfjr",
  "key1": "4aLzSzrcLhAdeqnUdsj8kJ9Uwr7ZoPfNnws8jpwV32E6GAY5XPpaPc3UaXsYSfyyMTRbEJBBx1hgYAFo485efPcr",
  "key2": "4RRKKZMhD9Gd6WbX9v9e2YCitcMMxvzPK5b2LXyN8kBzCwd28yjKkkLTbLGSiCdcZzH6g8HULtZmQRzbBJtyLHRd",
  "key3": "3NaxfR8UovrceFMXzRoC1nsJ8DQsmUNSeqDdaWjE8vhXqcCvunT2FkmyKeBMmtySKtbxNfpMzjiPyjHS9EPWYNTL",
  "key4": "5EHHXWTDej4EHjZ3q75dg6uyzog6z67emJbU4EL7dHcnztDL96QFbqbCXypMPSaB4e5NLZ9nADaeqM7bsATaoEkT",
  "key5": "3NjKKP5qrh6zsyzTm7E6RakKfy2tobVEFowxr2m5Q9i6J8qVzNv8Rki2Hs33mFXVhLFuX3KMjW5tmDWM59iuNMY7",
  "key6": "2KX9XRUme93Sg41VVzXuZczJndHwsXTD5WzXpXT9k8MAedrL3ShyBN951UcuTSMfPc3qeSFfaYk75gikpmuJpPLc",
  "key7": "2X4LK1CtPZnrxpQbMm6q75s6oQFRphUWLvg5oamZQ7DewPyfjeSFxrm1HqgbwNx9TFQCtN9trgH4CVi4bW7medXv",
  "key8": "59gLeyDQR9Sd7uy1VBsqnCsPr8xA6dd332tnMUqWtKorfw5gv7fSNCrrRm42HQKMUDvnQqdeE4DpHmjNshPwst4a",
  "key9": "5HZ3P6xNjSF8PRvXz1P4PwpyoRag8otTQ8TqgYvG5hTKyJ39UcZgftewPupPMYqpLM8aCagwykyf6aZKoRyfFJRq",
  "key10": "2KtEvF9YBt3fr9QM8WCn4TxbXZRQbv9C9XsVHRCZsJNH83pUK67WiXooHwBQGXZ358zpZd9CVn6cbyMm4iztrsge",
  "key11": "3iyJj2aaVGy2CnkDwjzYrV695XE49vGnFHJEr7qP4EcQdg8CReTKBDt5Td5Q33D78FkvQHbLQdTpmbwResrAvoRc",
  "key12": "3abpxg4rYWELMzwNJZnF7QCsNzj7HUV193JNHyyBkQ5ujy8yCqRQWLTaJUffXkpTZ6f9cBYgRjMme6eAVoMHXwny",
  "key13": "5rQGM3CaLNhtUp6kp1vfYrS5Zem8MePGS5rQXrxcK8YX8Wsr9CyD6bmyJaPmfDwyuq7A3fVnUW6Lkxr8U7qHzSaq",
  "key14": "3ZP3Zse6SBNXSdU4UhwKw1XfE9VZ7ai7GyBofuRYGSjmv8hXe1mYt3VeiRWar3BdbuHqCbrHFCkoCiPmbn5FLggM",
  "key15": "8CigHY5bzWxskEGyn8jPWdA8QrzaZGZ1GqKyTG61R5HfcSJt7Tv7TzsKYFi4Trh7XQLGGW6x5JQ9nGoEihFUNEt",
  "key16": "4DxnFMftFFDrAnHt35DUmKGTQunY7BovsJP3zqs5SWdYFmrnpnVLwUtyqCNncF7iTS9oDA5zExKCc9cp6uKMcUfy",
  "key17": "4ua4sEEQXhz7uPTPnVZyqYJmcpQQuFKMpka4UQHLFNrkkoWJC7LYuKjPNX8Tjz9NQ2LwWP1VzFtoUQ768dnq1C5L",
  "key18": "5f61GCyq3H48S5Pndo2hHPgAUeVVkEuQhTSkHsGX49RuCri8d5WtzLk95qkNbAjnSA2DdmuuFos2nWqxcD3YrGcq",
  "key19": "2UX7bNXEt2A3NEB7RH2YQmNevanaDb26tM7EosMn18XEGjgZdf2z4yQnNeKMUXKWoPmijRYC58dr3P6DNtMvWiXU",
  "key20": "5i1vTGh7vXpXhVym3fyrtPKovUPk4p9Mk3CdWH8yAtGsrrLwSTZUBMhs5ZYjQaBg2B4AMPx17f7oxC1p8QFLTDjv",
  "key21": "3kGJH6gzk5y3ZePeVAcqxYeiuhdkWLb2jKVvcbTxitahTqUVDxDMzndrj7N97CxQGbC8LoYhBWKSQfXXGXv5WU4v",
  "key22": "Hh7HkiLeDrjmwEo5FH5dy46G8aM7oVGV2zzYL2CHBSBmvgEW4HKRdxvUGRhGEh3QCTDLiurkjLJxDU9mDKDT5XX",
  "key23": "BaEano47j2Zet1GvNu1HcT3ikNJ3RBBKCdPYH4eLbaRTBuSxpDFFdFAgcQutPUxmfYqGkzU8ZtMBJVWi9Bp6fac",
  "key24": "seV56G9kBJ8gmWH6y1puk4hbYsU1WJ1moKKoc3pPhyvEvrYbFmZpnSVJ8No32e3N5tyNSXUmjSv7d1tFutmsVTS",
  "key25": "4r2QkkNWv8oz3J1PhkPouCArA83jeU3pTkveEFx572PvsLVpr1yAPDAojxMEont585MotkHred2kugCd9rvJdVgT",
  "key26": "43SWtpRUAMwsnYhSiQSeWH1ehp5Zemq9mNdPpHHkpw2HXPTqg1HoeYs99m4iupRF2jrtyAfCjEA8t7g8SbFTMX9j",
  "key27": "2iSxUiaawJDpziGdnAPXfJXqA2rUmN1HxdrASyADmLmSP47yiD2obRAXKcoGvMWJvDGKjnixSygNgV4DxB6ZMp1b",
  "key28": "5PocL3jdWPYGssRWnrr4Z2x4ubE1ooBwmCHU3pT4hvdVrXP8kXptZDTwfutyCa3r6FYfzftytx15ZLBeBEDLt4gW",
  "key29": "p9QV2STwju3H6Ug533dFNwa8hnq1A1SYtEuRCF3B3cRZTzs7PiVpFXXxYEeFttLCYJwbRjPz3k4qzWgaHwdzs6N",
  "key30": "3r6ZrQksQjEYwQai8sMzD4MwVXYnmDSeEeBxb5yMreo54uXCqbfuEBYBZF84XjqCQqQbmDiEf9gMb1Es4Wm8sCGg",
  "key31": "2useUrPt3iE4vMeYcNgUsMFtCvj2K2c8tUtLg3f9H5kmCSWqBcp8oUGpUyuKANZ768kmba6gkh3NV3g69j4VrUqw",
  "key32": "9Qs5GP6wLEFBnNqK3zDhDJZgUaMKbHBm2Asx2A3Vcf6HPARMFZLchGKPk1Ur8TezGf7NEvW8z4VHoFXvs9e6Wdd",
  "key33": "2qDmZTGp7vhR3mRbfi4NBcLfA84w6CZjpkaKCp1WZMDbaav4ejrLAryoQR8S2Sekn5rDeE5heJgfiPsHUuznYsx5",
  "key34": "3EHNk1tipGvZ4knbQe9ZTgQTCPiYdZoPJcSdXdK12FvNuUen8z4rb5hgnLb9s8rX3EVmr7egy3yhmm5Vx6LbNvR5",
  "key35": "32aFwYycayWhZy6mmNsro2jtPH8D8H7vWdbJedBtmj8EQsQ7qLvianSB4c9XV33k3nJRRSFsbJKPFZ2MFzpZRvhw",
  "key36": "n3ySdGSpfWNdK8E1b2rhxci2Gdi6qiD8y7eUZjKSrfTVAc2CN3TQUxTJ3adkt3X5NLR1oWFr7toT2YyobfLwFak",
  "key37": "46mi5LgnWsZDhYZf99gjdvUcA4KNAxsP7ZASVcQPvNCanW5459jBx4pp6iA1asbXuSYusDCR3LPLzW8Pa9Y4aXGS",
  "key38": "3Tp2TxK2yy47U8Yv4UwKcdGiqFaucQEvEgc2TGYQXsb38LfsTAnTgS8eFnJDXwrV9WGHdiqhdCXDAQvk3dqXrkw4",
  "key39": "3bZrvijMM91FyC47eXZN5ihkYAnt9qVMm8YsJi8L3hFVsRUDG8M7PxXsQW6NaSjrNvZyuFZ3oTMR2S1sXSwQEj3G",
  "key40": "tPPLJzoW35GcTYTdaTUXwmiaDcXwtfh6VK8WDQFZ5Cfbp6fXiFeDwvbufKnESPMYLoR4gfH1puCPS8n4Ls674Zm",
  "key41": "4u2EGkVAJMRAvxbf8Xw2RKqzKccC29vFebrHfVg39osyczaRdN9THbCYUA2hd3fSWAqcTYckVHEhWW6pxEQrFeSG",
  "key42": "2Swzzm4WNzByc8XkQ6cn3etDgFavt8wWknTXx9sTnJJ5VyS3fK6S5pmb5tdf54k5rurnhPvz5wN3Q4MKCSouSGWQ",
  "key43": "23A56b7V7vUVdM3HkkcSgjYCKdDBrUL4XnP7PAHDLeuymFKTgbt8vBqD2tyJMpfejq7eEx5FAdLGe6fMQnH1Rho5",
  "key44": "4x398xF8iZZVyJf8CYtjoJ5U39wXSSCcRUnBGjyy9tVX7fMHuHwyCHmjKTGxCf2RdSp95kSzZk4s6GDdPdB36pd2",
  "key45": "diAtS6R7fiCiMGN2rE2jirhieTNhnbxcdHf1frHEdME3nckkYnjq3mghaEZLeaFo8TpPtXKorvjupWngrBx95Rh"
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
