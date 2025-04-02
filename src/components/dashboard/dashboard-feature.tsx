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
    "5iBKYW4nR7BubPL6vbp2TymSmv9vnSbzN4rKjLCN6tF6HzrH8U5kX1r82UeYSB3NevsEANGLdCqGV1LeicK6nrnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25fxbXWD9mMNHDmsena7gjqYWPrfeXU66X4bxY8xNxm2rw6xJbazF8Sc3uSYDpBGMhGRNFFZwpUyCZiYFGX5Cj6h",
  "key1": "2U6E6vRuqxPXXMyLRJqJvZVCy417xnKeHW6gLj5ZTm7eR1hPgzvv2xrbjfZCNaNxXSgSMbEyCBcx91ZV22Z5gRL6",
  "key2": "5pt9vstfb2J6ySKxEP75L9eVXYYbh58BVG5BJVEt3TGs2uvBCS51Bt3WLR6FB8kN7v2oCxnbVH9dnEB3wPjM4KwR",
  "key3": "65fuxfYcoTBTbDSWcfafBrKDQHYFPQQvmMWSpBAAcRayPbXiEvCaMqBhC3u5G7zJ7GJPJmK6dScTqEK6p3sVpn9b",
  "key4": "5TRufAcKoGehXhd3PBBQjYB3CMD19EjaaDWfFUqwWu6xN61x85hfkBhemAKmCNrLnuLGAAeiHxMcSiA8VzwTVrFX",
  "key5": "4WedwRLTzRBazdyzpvvnVLwVJAGqfUsfsRmEyAjKpndoBG5KSQ7UnMGYdyobVmwbZKKepBtqhteLvaMaPCtVq7Fo",
  "key6": "51U6bZxCrBhoZTmzarYYpcVjyF6dHtuS9MporhQ2hDe4rwE727yvqGSV3TTjs4dEeQS4Kh5QhJBTnBMWBiv4hpqQ",
  "key7": "4x31TkLHpE9pA4wZrqXVCYtFVJ9DPFzHfLN8JGxbZrmVtaWxkgUaGaRACzZksRocYCkahp29UBaEq78t9ZtLs3nc",
  "key8": "3ug6vFDAbusz2aAELgwX34DMpRSdUT18sXYd3yH2xkwiydELZE7g7VWaPTPyNcpSiytWLiJSGNkPY6qWQ12iPjkw",
  "key9": "4XKVwZ3YkMgawMGoUPBGKHgqdfoCLNpZ8R7aWU41Z8ypChFwfKT5thZpCG2sLVLZ42uWECZGEptRt6HhxuNEgMc6",
  "key10": "5TjF4kgxJeuKBKJUSGfYs6QQDnzBEGvzR3kicfhd3287oasTU2JxZz1Hub8Yqt1bk2yfTUkphgW7n4nvpwXTVC2Z",
  "key11": "2sswf346FyQ7C24Dk2vCRBkPXg6QxduPZ786ZiJx7S7wdB9Ae1GbALgSeJY5p2Y2GsMnbMKZ9gXfkNb2SYadUHiG",
  "key12": "3QxS14Sj8GnYBLRwoE1dT1bvu6jJG9avp5D9at3cr3rxRyDEsr5HzzUhfXR5D8Fs6yQin3bwUBBvq6H8umvnK2Q2",
  "key13": "3QVtgEVHgTfKaBxo7rNQVvuf1En9hXTKDGLKacryszXdAmSgzC1pS1321Mh4PA28QCCmn7mSoMha5mGya7Dv7qQ8",
  "key14": "3QpoUkCvZqqvrTnoWSWxU8wdg3c1x8d8KMvLeJjwzzGxUtSkNxFD1yCLE94JbsY6Nn41k9WvD1kFQYF2Nj3eCv7i",
  "key15": "3Kbx6v1GL3onZ8nRNAihDFRDVemWhsYcvHDQHGSSdN4STyQHFkRB413XeLDRU1YGQKrhWVUGNyYA2ZjyG1QgjPXS",
  "key16": "e3D5mWBF9SUVhRcdjDpECvCstT8ptpnirYcEbxp9WH17VLUMrD96nDj5VHzQtAf7jxJcHJoJ8FvW3ijyJanFx1E",
  "key17": "D4ALfYvC3FzaruGHrjqpiMV1n1aFtmr3RAgDJnsLtnUXrXbbzAyEgB6iGjSBr9911QH4eQhBPDrvxzF8vX6puA2",
  "key18": "4Z2Z29tLrYF5AaRRdRop8BhRJpFcbSRFda66zpTKB1thkKmWD14ARPYLWtAhcLPoLFpnVYnbcrBV8CDbvypsAEmH",
  "key19": "5SyrhhtcRddL1Ea5E4AJ62daCdzaL1WUq2j2LFLp17GiQqoH7yS6mXdNMdASEeMC2Jz1YCMxWuGMrfZ6dFNmRpsp",
  "key20": "5zeMU2LPUQjSN15LQ3sbiwxicvFN1FrzM2CZkoYgUgaa9V4SBRLtDHagjmJcGEf6mgzGHRPG8piZTV6YeaiPqhRR",
  "key21": "xiv9m1NKsRqgLB4b5mxovk976ztZTDgF1pZ6zF2be2TruocXmQhP3KsmqMhSK71ncQ2fnD5aemLNyg5QmW5UTKK",
  "key22": "4VfA7G9A1ZCCQEsiFLd2bpWsiFgcc9bLqVn8TpcQi2c6ZgNG24pqXYxBGhpGrMxhD7GKK9SSVLVot5tM3pTQe9Uk",
  "key23": "v5ei1rvfgqrwgD3UZ7E43V7u3zB1an5tuVPJpcNXwPKTQjwY1Q4s7YERJGZkv76qzt984PNpcDYy56pBuNriXK1",
  "key24": "4u4RLCAHPkn7v7sHiETUHLG4cRQc72yHW4T7QmX2twnSZmjKFsNhQk8keTf4aMQgFzkYiqcBGQSzJCjWjs4twqoL",
  "key25": "2YeVKst9Kc4stthDkKfpRXYPpNP5XiBRiNBWGmn3ud9TprgG71fbHBhP9kT5zJr66SRWz4h8RKLVae6aAqKQed3W",
  "key26": "4KDRy4zFDVehgErKMGUjiKx6ZiS2myPZXW7Ntkp4dxpyRU9pmZLGadGF7bhjPvFgdbThrn9aef3dw3MxcerQ2pJK",
  "key27": "3amHWtdEnRGLasGT4Lmn87DupmT6H7vbjF9nvU8QG95CxCEiEGgaxN7rT9ub3BXRNjWBa45CTH4qjP7o5auPHyDU",
  "key28": "3qK3hcFtWhygA14JsVVw2tFXxzwFNoxBGSZXDwh5FbF6zCe2Yob4JGHca2m7wCp3hVo63ts9LGgvvksgRd1Z5CLe",
  "key29": "6CUNv6Vt18NikH5heHu86wHPnwtHMXYnm7bvxbPQo22isuZQf2zAtGdRio6TULHMUqj3uCmRQkjiBFJfxc5Qkw1",
  "key30": "5E9aYw362fQ75LbbRciKJApxPUr5NFrCSpzNe8u88LjojwTxJjMGcScZPadFFonUarJD7Wf7xnB8udqQd9odP8W1",
  "key31": "5LbdPHriDnNhfZVEmomW8GWDefgMSBZJdYmXkSFLUg3ruawm6VyKwk6yx5atNbP8QeweV2BfSH6MXYq4thfWiGfN",
  "key32": "4yMNwriSWAN1h4rCbfCoqPtz5tVXDqjn63ikbQhCnVjJyXhAz3iqNqcYwRnwhWi1oG3WR3E94mWcNbqM6xHB94yn",
  "key33": "1gJd7wFe8a6jEAz9VUjamj9U36AhF3Z4Tv427W7VWhDyhsnJGAHFdeUzjmj9z79avcVQTQ8kzSBf5DXpGuWeJxB",
  "key34": "3NNLjYQzCQUWcTdkfdioVesftboP2oLEetqsunRoSLsuFXShQYwZoyRaCMQPjZzFXfGuyR6mNE762ZZMxRJeo9Ch"
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
