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
    "4iq85G3T6npLnnLgHnURYsYUQtoH1jfAZ65eTfvbXH287YRmntfqN2VRmAZHeKq8NPc34yvg8bQPHYUvmudVTpuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CrKvu34mCnWFwnJfGj1iUiWxV6jN47AD59Qt2QP8iaTQrH3kKpJu2BpA4gErDdcQ1nVodXR1K4KFQN6vxkZK5Gr",
  "key1": "5EnrVJ5qvKC7CTCTZqsixsKBEd943EhmaK3JuLfD9iVpvirq1DHYCk5vSJaBzmcWrp66KPByrGLtj8UFG65EVsam",
  "key2": "5NZvwVzG41AwXqAkxGyuZy5WxQ4WxMcxTBvyAuZFuDy8N2784iK3LcWdrZeHhaH4SLv4VcSedL2y1WssQk8sb478",
  "key3": "2axPHizNFFWUV8siVSgiQy6mqrTjQmjYTHJUGcsWETwAzWaEyW26tSD4wVzYeVobYKDzQJ2JLixSZ5ce5WCLCpES",
  "key4": "2K5xDRrPKTFuNH1XzpYqmLzZJnniiZjXWZhWYmTdFf1kP7dp1DqpWnCpEYDQDCaNxrE4HZ6LiGLRMKRD9MwV8Tki",
  "key5": "3tspA9QzGHj5XTHNsgun939DLYaNaTwhHZNPDPj83t55t4kvhkbBwz5vujkxNw3coVffbYvG44sQ8jFm8DyyuUx4",
  "key6": "3BaCNpF7h5seAREoWkuUPgwQ5Kt7uqXsju5gDcWFvsePNwYaPzTxiPaDq1cg1AQzbvWbrd2S4iHUUeaSbR989GMV",
  "key7": "2zRn1h9Cnkv7Pnhn7vuQanPUoKf4ZtaiFfX8a4JgWd8wDudG3wpkdKbJLqh8XmunuquAH5oRFRxudU5eNqYKvqkJ",
  "key8": "2sdAsiQyoTAiKdwEAZEfSdnEEr5JWH44u1yWrTaHnDuNvVb4To4iLtvjYiH8SxG1g8ZAoqbSmHH2zHPj5dCVaDhc",
  "key9": "5F3zuSLTQPUbsW1KEZ57UmdVynwV4Ag1rBN5n5namcNx2g96hui7NtCwfXjdcVS4MAWgQWnsZzR4yXqs81M9W2jY",
  "key10": "2LvtXepL2yUmZX7imzVCBy2whosro3jMZT4kYef5nNrxoS8E9ie4Q5qNLd6gkooBdgvLhVqeqQ4cNpdhusH7FyvK",
  "key11": "4jQYxGMvtCaNcdXbTa3nHoKGGyJVvkEQ7NQYuis3Sv9NVR99az8CvRc66TfUHLYs4FBQU5TzmjYgALZM3J46o9hU",
  "key12": "4cEaNtDV7Ljtd1Tk1mz7pk7PNQFd27BsCAkzK91sNo6bug8eHQAkttkSpHf2ZZjzi6NDgK1DRGbCGe8M69uXyifA",
  "key13": "3GUb9QkQtDbtscYQJ3nUu6jr1a2CTa4dRLQtmSPtJvJvKv6Unera6dmtuuQMKori2JnWWCq2MSMphfyGxcRGEiUu",
  "key14": "6569p2GZvPXL4QyVp6HpqWpvYu1Mp765mR72vuCcpC64Cjtxxr9NavXzmFM7VgRGn3hYoQSgWafMgqak7nYyTPT4",
  "key15": "5VqfRqt7BZD7NNHP4tDYw13fjQ33V7kfjeKrh1thAFVJj7SCnX2YNv9Wxh8oqmG4Be77fDi87xM4arS6eSiHU1DS",
  "key16": "3f74Qm4GoY5f3Wutru9Ewih2y5ess4SZoUfYCi4UpnQn2ZsZabVBtCuUa6GX8ndQ3ZJoQK2d1n2XuY6wGc8n3Eyo",
  "key17": "45gLegiG8YcHJHzFfdd4HxQPDSEKDEcWfgBg9qXFA1zCyzuC5XGyubGwKGptBhYdBHjb9iLPyrirNLQVHbpR2jUA",
  "key18": "4cFnZpLymxtK8fKr3xoukajmANUy213pspZCx3fuiJDtB1P96EccPqJLotvf9eREvFmPGBY4xTmNJ7cSTCU5inzk",
  "key19": "3a1HAmQrqbGRwUARkxsBUNsUfMDszcLzuXdr8qstzC1AJzM4fXhwSUbvshqtsmk7o7re1F2PjTumJARM56jnS7DC",
  "key20": "2WrqaPM2PD1SCJi2jiW6i4jMNmkuAa8B35fQps8L8ub6v3VjhvJ9S5cAkyMmUqoh4L9SXkL9NbBkkr6bSjSuyuuq",
  "key21": "66vKTnMueyFpP1nW9EX8tq1jBDVTNs7abwBATMx5XPSb77WXv4t2TKuHsxHXPLSk5eSGQoW6bceS5jfLtMm2fVdZ",
  "key22": "f625Xs2EQ2D5KLK7qwsW246J5PL7eAyV1CPFsWbW5LUbcZ3PBgw77budbKEFu55dGYWsMeW4J94hzaTzTKmUj25",
  "key23": "2YRb45MaEhkH48nvAu9sXD9pRLa9dT7dciooymwbyujDMmUxcgCHCDJjC1MgLmMDdzgnc5QcYYHaXHnhUguCmQ4q",
  "key24": "5L2zkRz43BVGVii6eeBpJK8PHGnVgWDgfTaYexRY4uqDYoZeQunJwf69cBU3ZSRt1EfK2EKdnXZcJ29ptrGsC2sJ",
  "key25": "5jkvSTcUiTR147Z6tv4jnkjnZCXpWLyfdHfUpM1Z29XibimoqyCcbxoxYP9niNwKFVayEFssouvhkr3TFDEv6Neb",
  "key26": "49nvhLCFzjdE7SA7CEQtpLvo1t4n2raDvRos8M14BEWvNDytKvS4963timb2Ck57FzKbq281wEskdea91ZUqJahK",
  "key27": "SWM2zN61PH3srcaTrkHJVXB1EU8DRJkYb4DDKBpT3XPffqV5bTaERzUEdTtKajBzTrpTKno7khQkLAgykBVP3J6",
  "key28": "5iXgpSBRcc6sNqzKy6eLXWdi6v8tVRUJc14NbpGsv9bzpPYRrEKuZUNFpwfxPbdhA8nBAc2dCwPrvBWDyEbdMgrY",
  "key29": "35K9kN6QSiMmcdTFJ4Pnn44eSrujwYKqrzyYuR3Msryu7zxD7jM9e1GTmnPTtxe4U4nC7sMKYkRBz5mw5SjzThCm",
  "key30": "4b3JLcu8KSpP7CNNvPvtbqxN22Vz4C3w1fAmFbSh8chzUE1h3pGkLF2gfkjDTbzgLFJQyTaC3oLpZCmfWef85e1D"
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
