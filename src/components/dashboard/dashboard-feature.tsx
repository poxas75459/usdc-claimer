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
    "2ZGZekDMygsWZhh3HieCmwTJb2ZysjLG8qSw5TLJz77p9HEWEv1nybDGsdfXbLArNCXFPBDBHAqsNmhPuCVYwUpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J9diiL3uB5mAdmtnKZXSsLdvnaAxFSmcEqSmNEqrhBp9KsYccyJ3xtGg7VmjKwo2CdEJ5qkcaW1Zk2StLL6CnYo",
  "key1": "2mY6PhoSybpEwQE6hRUj3vN1PE3prNJ1bLn6vg7oPCdkMveuwnT6Vxypm75F1jkmJE75j22xbVVFtQEDtYJ9xKfN",
  "key2": "SYyMh7trpTfLAJ2Q8NF9yP13GhuQKJbz3VQqYiqWNiaYz4jRT2jC2qJvHtzhA7iSJAaV19w3XZUjrAwn39ff6z1",
  "key3": "4PFVXDk7XV2upcb7PEiaQSew8Rz1QAnE6AAjLdZNLrVbyEches5bnP1qf79AxdiynTAni5u49a3ART6Ge6tUARM4",
  "key4": "2LTgt4ZBy4pkuMXnwSofJpqqmGoaqRW4ESC1e88suZdVVzrw2h86suJcY8dYFyPMSqzkUfBYRERChKp1pvXNNuCv",
  "key5": "655kmmxxVbFdBeJCjMpzKbsP5hKTHtNyd5kLBYTDo4WQV44fesSaAvUgsF5jcbxZRwEj7XCYJX9TP19RxCY1RmQR",
  "key6": "57zUV49umxhtnJELTcdbhS1eRm5Uomix36ChAe62fmNk6n9a7FtZNBjkrujpH52Set7it1r6vJS9AKQeXxSLw6BC",
  "key7": "ZokEnmrhYPTwKpbMtJiLAFo1CKqATZ7CSFGfuehyPg3gxS9d9KjJNiZGf2PJwMawUk6P8HbgLVWd6dUJKgchw9e",
  "key8": "2qjbmkxR3scMC1zUfmer346YZ3BVddVRbeBihJ6RLHUXvgoBqVL3VNaxUuxGdiTZFL4ASA9hLzekaxzBH1gnPkWt",
  "key9": "5s7Z8kZCZWPikmjyJghn5g5vTKRe61n1JE4yXFaTJtG5ropHfkZYUz6bzj53E4F8yGTcKiUJYsxjsuSLYke4apsA",
  "key10": "2rH4uVUpr4JmQsasD3YywEh5hue1XJ5ieF4ttikyrZMCY93YEH4D1Cm2L6qTqxnNdAhvjsZSWHuqVLgK91ws65vr",
  "key11": "3131Nu9fETtN1VrLX7aRJbsEdH1CcJgNfQxmTVVghsxBGJZ9Wf13DdY2VN4iMPRbfAzrU8UCffbouvQcgPdazDnD",
  "key12": "xbRkf6u7U5wmSQ4wTn3tE8p6QTqtJM835b8z289pZfBKgpJkMWKPidVFRRNxBNpsPhcJjqFDgNfxkFyrfPcrCJ5",
  "key13": "2faFKyfcbX7VWPoqi967VFmkf3GEPyL1QVuTDAbKtHfnJCL5YDMV4Pu8Ldka4UAvByhpvgTHEkHdD2xhwBPdSuYB",
  "key14": "2rCSoifWR3Uh1U4FLT667o9fZ4tWBT8LheLowNTAGRrX6fo4xV5LMsJvwJ1F5PByLZBbXvdMN8fBRq2b5ndJBHg3",
  "key15": "5n8iZGRMxRuwvFZduvmpJzQ2iGEwcueHaH6aU6foYaBhFRCQpXahUvybyecaAgwMoGw7yrg9KFbJhAF1ssDRDB2K",
  "key16": "4mkeXhi3EH7H93SYRrTxQpqqNN44DMGbYxzsgN8wrNb1UQkN1ceLfqgbfvZfYRp8MWf2bzxSMnH76TrHEy7B3wPZ",
  "key17": "VnRHw8gas3FAsgwaDCBYYJEmNpWFMk1aLZDBaWGJ2JNi71i1fYsz3U8S1L5ghoTw9MSx5y9RHpR8dist2x8QVme",
  "key18": "227b7NXYsAso25J7yiWgeRhdTRGRF5dQcNKYL2bBiKr5WqqKPKfkKMrC3x6ck1JmzftLxNLNowmqoRv2Vr6UvmWJ",
  "key19": "3BFWYqJfLgPLHf5S2RxWLy1kMWvgYAziZZW3VQGYBBcDdShMx4MJWNbnhME6Hpj25YvVcyW6dvvp3E3D2UUhLzKP",
  "key20": "4g3vMzCwE7JkCpuSwoyAF2PtGGS3ikUDknFJ1V5UdazXi2BJA46KM39LbEbpcUukNkcit3ReE8YyHUGN5xSWvyd9",
  "key21": "2SD2SBYFVuNdQw5WWNQgSvf6V4Y5b492vUNJmsxureuq8gExRzLuCUgEDKYs3aq863yt3ntrQHxLF8qHhoeHZdt4",
  "key22": "5Ugc2nFb1yNGqRSQZZX7QzwFBHV3ukWVYEo6ZQC6PV5CLoPdDxhMsaNVUYwT9bVu9bdzLNn7gFVk4ZYaurK1ThjY",
  "key23": "5gR2QM2nVv9hjTHRhdFBLXJnWpxhFgzD4fSvjjm9FvqYT73ET8Q6suGBySHYt2SHLALJGaggiQEoyVbCopkJuXEV",
  "key24": "4YevF7XatkizF9J46oB6orvdwmSFz1cgHiNoNPhSMgtixZh6Y3hXB8NyWFAZ7B7MMQ1PzUdEhKRBUcxqyPhkiq5H",
  "key25": "pqJ58H8FEFQMBWTPeucvWDR4wNK8tTJJWytu85UT5LQE2m33EFfyDhwYvRv7FMV4n7kyKBiPoraawStCL35H6aq",
  "key26": "5hwS2kP6X8HvANajFQeDXgjb4oXPtFyofLHJC5xVMxN1y8AQycu2BCz2oM79ZcSYRaS4MQZn9TKK4kF7qgNsnMGP",
  "key27": "5jjFk9irb39TPBdyysfoEgGLSv55iq4LUUi43W8xLZmpRULH1nggfoYUre85UaPQzS91nPhFYmRSPitU8y7VrTDs",
  "key28": "hbZgn76cnzGo3ex4cz6SS5WAHMNywJmjoVEQi2ZwE8XinnSxoZW4TDYvLMmoQGwgWoa4EnDBuESobYU68RbvpYf",
  "key29": "3K1U38evpvJnZ9CeLbJaeW7FvauDkBj7ksCiMnaTbXpj5Nhg96PyeyTq2K58M3ysH9n7hhGWb58mzcuyJBhfujX6",
  "key30": "5toPYcZQSsBHoz6rjAURQLmyieJN36LNe1tFR3Ac5fzTbM7j2zGxZtH4Su5fZe2Stay3sRFJXFrsJZqLpLtrLsc8",
  "key31": "31ZjFcsACmcJVdB9YJPuPweNR5G8BRQmGLiMJybmu7j1odMpzRD5FU16C4msLtc3nxJQQ1G3evtN9G99BCKyz4qT",
  "key32": "3gGfkWnCpEo59Pj7FouTWeksA5o7pDFxFDD5CdfYdzy8HzcuXBrjnqXPPzUdfuCDatj2gkcj15CzbKNrh9tA1j9C",
  "key33": "Z6ioYXgqyomzzzm62P1yA3JQRzyWvP49upBcxdzpeLW2vnhqSgQzGNfeg8zUDXxzj7XMS1sNeq5asC8UN4Sywcs",
  "key34": "2nuecJJGehA4vPHukQpGu5ot14YfcogBL34C5Sj6GPsKUdiNeczAd86gPtoYt5iSSxZgtv5BDW5dBveHMnT2EyQw",
  "key35": "2K2MQgqCT5igPED5okdSTDYE5V7QpBRPH4b4cHtVXvpzEkHHgzZxAdK6rr1zhFRpTTAdpYkr9RBxkUWcEaEYtyP5",
  "key36": "5yfJSTfdycGdQxBZVuwBhVFVdDQzJt2BRDYH6nkBLSAFu6MbjgU5GVqmkipVKGgAhFrHF72qhM1Hp2v3K5HLSiCu",
  "key37": "fYB6SuADGDad25Dinwejjh2nW1oz6udtqHgpbiutnFF6zxt1LPJ8HbfJrym3iYtsXVgQHY1iW37g4VcXx6yoL2a",
  "key38": "3WbxU5urbbnDYKyBsjWRY5X2Kc7ucf4J3m1f8HSncDgGUdrdHTfKSh4DbsGsGfrSqN7pjJX1hm9BaWtZ6pd2Ldbm",
  "key39": "5o5krcKKQuxS4AYmm6D7Qx4eELFvggWNxd6i9JgbUbtLGKCaLUdg6NoZ1R9cYrMjbMAwXdMUzVYNNTp352tePKHk",
  "key40": "3GgeqTEEyNHRU78E4uBMLm3tPzFYz4b5yRrQzsKV3oAbnqv1M8gR8fnASipJZDjyTjbWxaMeqViBwME2SJ5CPcjN",
  "key41": "2tauE8pnJUPjRdetZGe9eEGYrWPcfYHct9T6RyBFBbp33CwjerUafjEBtCcFgcc4pjCx39KuJGAiYFBF6LATquFg",
  "key42": "5KB61wuukksXq3jqZbHmLeHQdi5yFi1kUDUc39X4pN5yKhQ9aVkz3gVF5HNjbHLFtWAxoSvQpGTL3vszfR1xrTry",
  "key43": "2m5qC6thHWyyhwqw3BLvmzKybyV47uroqhYAQP1Rxf5XrEQ9eZS6YPtWXG3GnEY3VSivouH2XcQA31L53BJHx7BS",
  "key44": "3pfY5mcpkC9jsG7AC9Mz1uF4tqR4wcoNHZKHQ1ncPr2Ki2S2jnhvQufjB9Ji5Q4KeAvNHeuuRiUzdpfHrtVp8hGi",
  "key45": "2jbQj2RXZ3DFJMKnEfoFsqonaYHX1ztbyc9r14mgF9D6J7sJRtSxnJTzAD9MkYdPJpL3QLW1x5oCJLHNX3wtLrCu",
  "key46": "ZXTojHABSxg6XR6uSB5CYxPNKEPLgjsiw9bJrs1XKHneNWwKMoBn8kDt6ViBzFQg6aP4ujwFiMYebeYDgfSeAAV",
  "key47": "5nizAGSceCyQ2gs7cNqqHPEzKdsSvRV2cTERNEkggfgzsasu59UcXmBymjNHjd3LpD6NHzfrrbPVjTQM5fmQbAGw",
  "key48": "3bJCZ8QyJKxRq4tzFn12cPhnW3ySTCuPNpBVWzPATF59y6Y8eFhUFQh6XCSXSaaZ7bBMLerGtQvLJhoiToU2KpkL"
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
