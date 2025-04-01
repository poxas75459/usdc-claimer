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
    "hKDKUdfrqGkoK5omRTYbShSvdAVCsCWJG6Fo3M7EYSaKJT58UesQzah3BiwPuonwZCjjbWKiE2JVvrudLeuYmKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v6jvKjoiaDeFCxZPrtFPaFyKFNsoPWT9Zdw2zyErMmprx5ywQJ75DUTuhvbVwN34ynmM4uWF57MfA9BbTEnKGtH",
  "key1": "5HKWPhJk6ALTih8v7a3Gv7F3SPDeV3RSL27LJsMXsFneKCwFMW29KpzVQZmd3p4T6SJsXKc9sQowhB53GsNjX2BL",
  "key2": "28LqHsswLvHtqNnXEoMNtMjvQQo5pQtauBoz7fmTRfVoPGMARmMxdYs8QraqhjdYsb6Z84A1eVTTQciukKJUweKM",
  "key3": "2MSg5WxiMUv94EQnhC25QforhDMMQNS1dUbbD78LoMrMmyXN4vCH8mJc77yARKz2wbjy9NyyjBSMbVeQk1WVUBsc",
  "key4": "ZhYkMHuWdywE6w1MWFJenTYfyLB9j4Vsq5By7sWcz5VUgMHB4JG6XdDv26bN1hdtQjd4b3UuBf7WmgzSwU43dMd",
  "key5": "22WLGVkNFeq1k8jNq74V1yhfJZCPtDqjVYq8mwpEmts5pcUHMij8eFMpKS4dPD4R9X1qwr3fgaehj2tpc4HLQWkh",
  "key6": "4WjXKAUa13Hq3TpxNsfYFvBbCaR3f92wPVXFvbHR85rqywDU3oJrHVC9d1sRX8DQ56rvwjs6gjytHonxRmFERKxh",
  "key7": "CN41BQcxAc3Vu4xedL3V6vEa4H5KmLTWuqE2EWL3zNtzFFoV9R9icKeZiwC1YzCL6ZvbuQftTbeceCsMeb1xD1z",
  "key8": "2Uy3en7KB1ntK1zZT5mtPQ6VoJQqXXfEzCjkjPR9zyEXJLvYHKJY7tvzsjWtpfA3LSMCTA2ZKJff4sUEZBy2Q2nU",
  "key9": "4cCMcabCzFDj8CQynyojURzCBqWdHMRXGwbDcipSQfKGgGVnnafiPaCqWJccRX26hZt3BnVssQC2AVAYjXUherzt",
  "key10": "25jRn1BiY6A2uqg9cMAzVs4vZqdzQT6iDYGzfHzgKVdkufYJ3XUCtPRQsTwhYaDJSeZXFjJNJaAwfMjckgSgYTKS",
  "key11": "3hsmjcePMN7fnDptAHFdccZiL26LvfeHHYJN5H28Cax5r9r4f1AvxVLGYARdzZv4vE81idK84SWj25j6yRud2Pf5",
  "key12": "4fVd6sZcYGAxSWMsPEX5sPVQiWQjduGFTGYMr65xGV3FPCnVBNMsFrPoaCmWNRW4UD4NaFcK7R9X2JGVviycAZC8",
  "key13": "n2R48vujMh9G4TFmH6hXVQPLjeazeS4EBUZSAYmdFPqAP6UV2LmPoMvfQjMiME76bcn8CMfXAdsrUuD4inrQt5V",
  "key14": "3eDBZRoHSJL8p4cNNwstP4vChQEoA6znLVeqv744m21mwZVP4a5RX9B54ARF4mG6ytVV2CbpwzS6a9iYe9Nu1chf",
  "key15": "3on13bnXKTSGBbzNqjY7DoTpdMFY75QyRdAYFX2aRQniCMBb5ofV38cdMDzVz4QZnziQfCbiTTqVE7bbcATHNAHe",
  "key16": "58456WKRgyujRDwj9RxwjqvjYqDHc1AvziPvzXjjCBA1jihjeBhANUMBiK3WSFD6XgppXSd92vMewjknJ212FvjC",
  "key17": "67othLqQuUju8fzp4okraoXM7Ncqpj2aMHivsFCMAvma6twhzxqbnsv1o2HCy5jgsMzC2T6gjTxfqy96qpQumts7",
  "key18": "5AeXsWCL6QzmnC1D8FA2cjkDhXKjjdLU6J2D8mVpUAHwKkqNC9tR2D88pGpLCPA2w3HTDwx2tcz24FSCtppHwUiL",
  "key19": "4zdczLUky9RJzLvj3QcCnwKTKHuGfXMN2Bt7Dq5oJeJLXLLZ1eAkaphdhmuwUELhhtC67hyzHJwKsk1PmHXBSQgT",
  "key20": "2vHmBtcydE9yytuzDYkDvwg8H1vZQCwLmXtcp1EHS374CAjdee8adXX17bvnDG7jwtvbFfx9fKksVkMA2LYiBdf7",
  "key21": "2Qhp6EkgRYvfXhN6TxGcwE5SDRjniLs8GSLQU5gr9TLeWzSDVaGkD8vpr4QQT1mgZjCpukCf61BYUfnNBXeN2ETc",
  "key22": "GrXhHNziwByd453Xzg1vZvfARibXXTTxMhUUwj3eV1Bn98SdykSA7dCLmLGfLQKMvpDLGmzt67EC7Y3v925bgfG",
  "key23": "TUqsBCGgYK6gTwZzJxfcmVHUvVFBaDn5qGDtv6r695VJk1SYiosJNhKMrKchQh6cU1t4ywjt44LAn4iBLQTSRBh",
  "key24": "49M2YpwJ9cSdbhV4kcr9kXtfLSCcbf6NCv7nWxiPZT4CmCiJkgfmBSdLbbyvVLdCdtj4W3hN7h4wjqhkdQK6gnQS",
  "key25": "25DnVr4Ami5dipTL2g9zi8vDGaWA9izWWdiDLDheo8DvUSQoPee9GwTBAKyQEVd6oZfKZfr2BUgenqsh4roCCGeu",
  "key26": "56Jy6cX9Ua3JthRmtzAscYLifHkLWrfPCkgKKkw9m2xLP3ptPJvfBBxX6FougEKQxFeA7ertcZcpHQGpM6bofGTa",
  "key27": "4toqSDZZApb8E2mLVKVYd5ERQmpVfsXGD4o3YpsfFSMhaQUad9Jv6U3H15J3CiZ8Rt5fvohAy1KvracpNmwjJRdq",
  "key28": "34m18p1JHoxsNM1XxKw7J7Bb86VPAB1ceF7RqhJFvHxapmzKRv9u73vA5a5uNs6vgriL96GCqFhMuB4Yu25pyTuo",
  "key29": "46qDbnrLeWMn1VARSk9LsCjtaZNY41e2tREAN8xWwoTFptU44jMLy56HTkfFJzGCjEY2Zg2NsHJGr1FUWYTVbYPV",
  "key30": "4Fq86XFyHQpkZRrFe6M14z5z89zHXkPYPzCS5CR7WQNPvNiVLEe5ZP19yMYZbrhLuknwnRBn4R6nDAocbJfdUTPp",
  "key31": "56qQ3ZqECQX8i44fXXRxH3nhD21U2zkPTEm4JJK9jwD8PDQJagoJaY6upAEaMVb2ZppRc2pKNdtYufFgfCVFtXjq",
  "key32": "2xqD2RtF9Gnf7HZnNQhegXZwGd1ijaB95t3Tqbtqbwi5MRbAtQwbKhHMJz5uF56XnStbyKq7RjQfxp53M1ecy92n",
  "key33": "31Ramf2bMAwreMLJDLJY7ht3rkKw2jnwMwdV3KUi4x2TjLuYcLjWLx5ACtGtChCbff5ycCYHXGwec1FgCztWFmZm",
  "key34": "4d4tgEGQi8yYH4gdmP5SGoigradtwMGyVQ5L32ZrXiP4RYwWNqRrkc3RiUybLYQfKmx33nEVXkMbieJ2f7osdmRS",
  "key35": "5PuirW3bCV6vs4wRXC7uKMsk5hukXaZN3bY28L6bhHHdW2vFKcGFUEN5UriPzYe2sY9o3SqYiZa2TtUUK9ZR87wx",
  "key36": "5mt3vkVSUdsLPFctgQwRoX27TpdHkAGsVWovdaWFRNtu3R2dJ2Hz7JLYrT9XzhN8av63HSc1TZuVk8BMQ68vABLp",
  "key37": "2xRrPr5tyfWrvt4P87ZNkiZc6KiWnT6DVqyeiz1BHJA3o1o52iAVyeCrCWbADd92htmDMELA31gQvBiEiJrSUaX3",
  "key38": "24CvvWERfVYCkXBmYZAM8ie62UwYeYKnwfP4Vv4JBSWfLvu2Ya74s2Y8eF8YYaqE3FHDwL8XBJDBDUj6WzK7LKsq",
  "key39": "3AsETLnBcYZDDpH5z7kmzu2NuWmSMRXSvutuD3qC3EGpr5bCQE4uerBvzD83NCqbxVe4K2DxFMFgpz7Xy8Y6kuUZ",
  "key40": "2RRWGbyYGYBibJSxR7SDvscDdVY6tDYFESw1T7KFm9qp8tWCYgQ33FWPmuMJewj5ejhYHVggNcPAvKJRM6VZpKc9"
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
