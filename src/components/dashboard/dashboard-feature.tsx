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
    "azdLissHHmfFdENvQfynFD2Ajt3fm9WSwFGZvDVkHddoMhSSBCJ4nArf5f29t4LMfEcY5mui2VD1Vd3DzLYPPH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VGKF9fZDLNsqYQoKG5VJ3SweTpYdxaaEWmQ7d2PSqcJEMVxU2tRVkH8HDWCVde1uabzPGiEfBJteuRnYXS2u7Q2",
  "key1": "5jFKHzB4Q7mZz6CaqHmLDycV6VNJd7wfPiL4jj4aFVyCLK2PjKsAhE5pSfv7Ab7a4h16WZVRYV5Vr2nAWny1jhFA",
  "key2": "4M3PgG4FuwoccfKQMe2D2n7ayUEYDDvh6gUDcQY4CqRxdxnFWDAKTaCFdF6Hz4Bs4Q6mAykS2gsJ99JYZ6XdC7vD",
  "key3": "2YjytkLEdWEJj3JL9u1z245N6BTteuvmkArL45MAB5iFsRbmNfLHGndDAw7Fo7zVdzcPfxdt6Tv7kjF4r7A65n2N",
  "key4": "4fDLykvEYgVNsMBUi3w4zxMdCyqpQvDzkaj2XNnRGZMWMPr13u65pa4P7ebeJ7ZfFxJd59fSoAzYSTM7L9X6Bm1R",
  "key5": "4Q3FSvyQEggd5U2cjquYXjhwkzNf6V7qW7yQg248JGCLy7hLQdDAkJaU1S5AEPDgnr6WoS661p2bpQKApXVVBhHy",
  "key6": "Ko4DFciSL5JFeGZ5hYHnps8pFiqjZTwMJN1ZFtyWtgd18DjYrV3xEnqDC6zyESe6tWxRyg369RW6iznSR9zW9Le",
  "key7": "4qetjF4g9bysgQFRkREvHxp3UsqJqrPhKyUQdrP8dNtTbNnJNBensKrifGcXVoRKRTbDgMbzdHTtyy2N3PtcB6Jw",
  "key8": "Y1h59w82bjTuRFBPqdsNsCN6wJdnX6xpLToiwbCAgsvw3364c7Z3Gxn2LuAZCEykjL8FhAgCoTPmXUn5n21NaKo",
  "key9": "4umTb7FLeSXV4mtKsrR9AhTdR4BgqdPmRPwCE6KVcjT8QLBS7j9jWVpKTPB4oMPoW3nBkQpBqskriEDrbcGy2bTq",
  "key10": "5ARQP5aCnE6DhGAqPt2TQDJuUBetTTyhTUTz6JALCGkMFmxr5LGfiW6owXKs15MwNCbYBE2MV9mDW1n3odJ1y2QD",
  "key11": "2eaFhE7rygFyZgt1Gv1PC8hAsrrGb6TAZQR7T3JdgQnHcgeyG48Bx68fWDZuJC2CRGGLuzP1FQzRJg9yoxrnbZCY",
  "key12": "4ginTK9gKSsFEJRTTRAenNtyzazitz6YtZfoiq6U1ydR6hyw5H1F17zc1eqNxbposPnf6t8MPyhTSSAZGYKuFWYq",
  "key13": "5pVB5JxMXSz1ZForfL232nY214YVuXCbxz5ArDsTLoR2mHok1cL6jj9FV9EHAxaUvr8tvXbVZzwzeQZiW63Z22H6",
  "key14": "5ju7mwy1JHn5XysN3uAYpNdrmNj9hohKKpiA5dxpKeMxGVsaySEGeTqeFPaJQGwEJ9nRFn5oHANWt38pa4F1swhh",
  "key15": "4rDSFT7dwF29kS8j6nfaXGWnK6wANi6tnteoBjGvi6NB4UTLR1G3r7XFyU6e5sJZ9u6irxZFcTuEURfNKrJs9K8b",
  "key16": "4x4RAL9FeWfKtACvsMQyYz3K2W9WYybGMUAgQ6ZgjmRrcocW7HRU8Y8bwpYVvTyL5PUzh4Tj7tMNejH4sfZwb62F",
  "key17": "uYLeWcvKL98j127rJMQLf5syjtuVuDuMNCnavSHq4YjsHzUHecim9WZbqqCwdc1RZDHAoNsmBarTCitWNQ64JtJ",
  "key18": "4Vbfov1Atm8sCnarpxnbbmpYEaC35VB5pTAgGAEBNzvsjTAp8YVgUgYhT8X2dM7cJqRDQSLExe2b5zq3e1T466hT",
  "key19": "5LpBB5eN3GokH4VZQV6NTyRNhRsxKgRe7qWuysFqGE5drTSpxwiETpRXkFJjcY5hVKhjZe2YsoPv5YbLyxRNJLft",
  "key20": "qTNE74ALHhXzu1ATLJjWn455zjbfzNjurCNcKUV3d31B1NpN3YRSSvpw9w1vHaWeq6ZJEYYsD8MAgmN17rL18YG",
  "key21": "4gCgHb4LVbvKbcd8gRmcGkTjtAu7AJPJipHyFm9RZUGgtfx7vBbgiWcuBsTdJx9xvQsrov7ihzd2Epe4vLrXiTf",
  "key22": "3FY5ABLMrKxEr23vqCh3aJ8m26b41DHXLBvukoSXzG38cwXrpr5QoThVTfQLiWpxAc8tEb9uMDk8EndDw8me2PLd",
  "key23": "3A59PPQqeRwQ5A9VW9saqLc7QgybMavS5fspS14wDqiidFqWnKeo3TayHsrLbpCj8BiKFbLbigE3BK4Na34DDn8s",
  "key24": "5yRVhW43MY79qxcXdZYjjwswEN5HCNe7upJ35HrC9RWa3cb8HUD4PKVDcEJM2cQUb4Qf2UY3d6sXjAyvfD2ECjiW",
  "key25": "ybpMNRU4mRSQAiEGmBpXe6CVctyc5R2tvVDB78JfpEwX7GLGvbNcRMbMGSRVNq6EGvybSTbJ1FGH119ptWprzxp",
  "key26": "2Rk53kqvN7kLZwokApjHunKjBW7PuUyakHLtKDCmpA9rRsHX89ikzRG1sLSgvT5YiyJ2umnr6vPiFjBWWvUgRgtM",
  "key27": "2NzsmXDNJFaKHNwepi44WtYoysJ8LP6PoBraW3webgEf6VTyrd7UNb7noq36xgA4vJVzWGofhywTGYyzk5LNM6KP",
  "key28": "jZTK9mq93QsPxMLScsjkNNxkkkTkfhzV1T11gQzoRU6n47k8CnNsC3XLSUGCqqt2huPSz1mNMBH62uSfd42XKBe",
  "key29": "4TYGWZyCeduiGCDDCy2pAXHGgSep1z8j1YVkdqFfP8djF8GSnsybVnQQaJBncseJiqGRTCgPpeENxntEmibdrjzs",
  "key30": "61dLdv2UpqY5kKMBwA7mUdSma8WHwXcnvRh8aYpGQxvspTH5xMgTin84RzLaiMhATDzsqXqvHp5xPG1qCRynHsbY"
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
