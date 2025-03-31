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
    "4awy3zvhz9FMQRW2wpNbVcYpGGBHGMG9sGnmJXKk7nNBPf87marxcpgCXUKjG3HrvmqVCyf7MNguQiyFynSvuhZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VFUNXXTvMmksib3kbJturC8jvMiRG2sY9pTNwNTdALueug29gqrY6CbYtqFGVtYUQt7UH6JeA5ZdchJc3yxyN7s",
  "key1": "2tTiUvvM5312GSspAPUGy7rVRWRSGeUHdyseigFpSWigmDkaeTnzk96Z5Py3onUsH4tHAvDwmn9q3Y6rhL57i9BA",
  "key2": "65PD9EXSsYkQiV9tGosyJXnhrRyeRY3fV4eNaoLyt6VpyPCsSuM9poF5zkJy21RUz3QMPjwENE6aNR42BvQU1oAR",
  "key3": "2Vjvo2xjSW1phsH4DH1VRhqNACrrfVWWxZhXRr5VrJxWyCyeTfZ7iaZBEzY7FepeSdAjhH2fKgfrXT28jyoRptS7",
  "key4": "5yyMnrDcC1MuxQSxUbfUfEAXunBwLAdonDhDSy6gh5qGUhwy5F6sJtaWAU22SLY6JJ72x4iAbw4RdAXLeMWgzn5P",
  "key5": "GrZFTDphuzzVq2husLbM5ZmRB6F78Akwi1AuQX1gt2uWizpj2r7LLKXrTLie8ZTwTn4xqNMB6mBckkXHH6BQ4Z6",
  "key6": "DN7eB86RzeE3kHG7aCf5u7ocAA7xea2zsQr6Pm1DjMKtkrj7wzYMphfWMdNW62yPLH2Fir3XQJHzvqqpcmhr6s4",
  "key7": "yVZiej3xksR1dV4dVDequhMcimtgJET8gzgNZ9vdz7iUxbLGfDB9mLDjKA9ncUVcqgH3T4L7oR1C6RTXWusjRyq",
  "key8": "oJh6Cyn7pqHuDXn96ntE4EjnjbsnkLj3UsEk4CPVuzCTQyV136SRHoXSCSBp6iMJTG3jdXmaerwVJcnKo7BtnS2",
  "key9": "5zuT58Xp3WYSY3JaFLzE3deQJM7VXgozHbEN6RGhHnZZSA2GKceFmjvSLz9p8QoKXZL1GwCyF36DCMrMwLc9Wad",
  "key10": "4SFGAehCmhMJ3gZrNt6sFbyW5yBcn3oG5oh6jAM87SVuoSzVaJtroA2FPS5VQWTuTEnJz54Yyoa3KWE1pWkDSKf7",
  "key11": "3og5X1ewZk2onZgzEr1Ze5NirBwXgfwPVWLWFAe6sYzr44htxpsn1DaHX76gRuiutHy6cJVJJLxPwQWuzhoohvtL",
  "key12": "KpmCUgBtWQNUVUHDkdAY7TUJvHz6kdrzzp75RbSW17vRKbzQuDW7Ve3X68Shkqm8iw1xPr7BewWaUTBxTUk8FQM",
  "key13": "3mPuVP15oHP1UEPFLFCTV9DXrm3cYvkxcZgehxhgpUsy5fjnvRvUPWWzSrQGP2SnxbkCK52gigs1ZqxHa7BM6K8V",
  "key14": "65Jw3jMtKyix6w3R8Y4uGoVmaza76GN5a42pGCdLSmLEN4eJBz17rKoAeDdG8ckoR4jHcbYARanVLxbTZCGuvUxn",
  "key15": "2DViaVtrhaitoGUghR4hrWqPYz5w4eZ9TtDxQKgo8G7cyT6fBFe5iRTEctCbvqJdyWQdT3wys9fhbowYTzsC2JUB",
  "key16": "36mqfK6C3gkR6M3sBQPFgoVfEcbhEo9JiBzUyStkhnXFqeieTf3AMQdWgD2Q4icYD75UDHEBGKiYCpnvukXsh2oj",
  "key17": "2jvM7NTbkW3hTeJNfDgzFHafox9VVmkwqxTa6HiUtSXK1iHZDJ1YvMmQfXE8sKLmcBpvFndQe867KpABzB6JDQit",
  "key18": "57stAboEnBLbTX2TuJBVSsgEajRi1JKzhhsvMyxMroW5SonfPwMYjScEkxh3Hf8cBD6Tuy4Ur7x5BMjR5Nq6Txsm",
  "key19": "2wM6gM3GR9oyEQNWgxy4QNEULK8fj5DCqQRcGWZ3RVa2GdMFa2v9AuQ3dWX4MzKmRCxf3MaSieBjxnvPmxK5eULY",
  "key20": "drngnmkAkiaHcbPD6o88g1RQn4eG8w4Th15ziSvewMB9grx9ypcJV4MYx7JK9XqkrH8PB3bbzLgorWWZEpE4cy9",
  "key21": "5PJmQfBxuxxqXf2yafa9MmmSQJTDN6MfxiK9YbDzjEPpzqeaVYnCwd3ciKptgFCFmymTbyBQS8mvYiPyY4rpED8d",
  "key22": "62eYJQB2zqXddCYViaaokbYU7ZCXNqmR75PZx4EtnPGDVeZtpw5knKaeeR2gJuL2LDUEbP5wmJVveKU12Rbf12WF",
  "key23": "4nhSVQQeDfMjWHPaAPdQVk1J6LEv5xDTqoU8BVf1wn3hk2tHwBrmzazLmmFVf6zjfVXmQRwzTsE62rt9mRXqfrmP",
  "key24": "4kzxdG4E5bsT9Vy18BNmc1C1MY61ZpZVg8WqoNtPXFuyXcKzxHcBPVnjBo3xmdWKEPRBdGuc9c9yJiYSL5erAF14",
  "key25": "5wG7dJuv3WFrkvr7qmgLULe9RVyH3snfxGjhzMALhg8s93ocT5H51FBU2FECPipcHT7FR4wf6v7SvYcKPD9oHRCc",
  "key26": "49azAyYk84StxnR551tAfn4hZbJQ96M1vrPMMAcbk6FZ3mxWY5FYE6yBtDipdhEmmDLxcja4pujfBX88bPbbYQUY",
  "key27": "4GZPHA312EKVCunbKgYQwtdbjLHVQjFSzgUurRsgLmvx2ssapALAoXJFJqL3oWgyDAmRktKDjYdzpuB22xT3yQn6",
  "key28": "4Pqpq3P5GSbK9tFtRYYiH2q7DpfzGLYZaam3BWVWPgr1PS6M2SHfVv4gqF5b7L2vqbZryNMuRTerTcBo2DdRm3sS",
  "key29": "35vtLdyHjZJy7mtQtMFzFkQz1NAuQkwj7PjsbFMXPaEXj3ATaezF4SEpkoFocvasfgjAgx4UwGbJjm2zJnp66rC9",
  "key30": "56NmDiau1KcXNvZisb71tAMPFN4GRey2MdfeG9N8tj6WM9eXkqeyK2phh1kYuhnp3WxSmCeSW4Tmmqes6VScVskU",
  "key31": "sT4iKhBpnM3aj6UkrKJNzoaVaCsVJgGi3dtdy3DN71a3pBghmYLJreRvEvtBxkaubW4sWqz6mJ18r2DoPnTd8KS",
  "key32": "3tgSpJTWU8pPVWvRdinFiBpyYBDnf99vZkufsueGvtRF41xKb8pt4gzyfZwzMwSwPNnmr6ts22mtGna3QtsvvwRA",
  "key33": "3QrAw4AvM6Lcu9Z5q62GwHZdZ54hP4P2qU9YyXbbwBRBp4xtuSBJfUVctbFqH3GYobsGxQNn1bF4fE2yDtwhCTgV",
  "key34": "3qxmS5PPzULxz8ty4n5Lo4VA3dRQM4G4wut8EHvt5RK7WhSD9gEitcHyGQkEemdAamRUnEhpAtv2Si29ZFb4Zg4Y"
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
