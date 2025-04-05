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
    "9PqbaAv12TtMA6JhT7iQbvZRn27J7wjb1PonJ2T1NRZLPnH4zbi6rS461vX4TWoEWikmfeDM96Hzdse9zwZrb2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c1HNNdARm3SwKBBd67aJ8xzdZhnteCRXTyprZpjK3C7winCPDXWmNQ5RN9f7tTfTk6T9mNsumqH5diBM26X73FK",
  "key1": "473sv3GrT7y4fjQnpAQRFPtzTbppGAomyPzuUdStmLzVuYbwd35gCcTLimeMFPJDTGEEKTXAi8xbnxe1Gk6WEbxo",
  "key2": "BpB2Zi21eCEh88C2yFiXN6hzk6rBvLZHjb4BhyvgCFh665X78ZwSoyDt6xyNP8utvnfMcaAhnkyrcoziVXCNQfh",
  "key3": "4HZEhUHbNKg83T335tAoXbbimR5dY1gSAv5amN2raqJhuNq1jWhUA8PBz75gdyskDGq1UFr8UZwpUswbKzc8odJQ",
  "key4": "4RTDY5NFRSAgdHBfqzQ4CtNyu1wy8EaeMLQuLyMrKEeNnfh9bwKFbVarjXov57DbmJwrBSGzFvGsudWeKpUR8xXr",
  "key5": "2p6BwFJeHFdjQLYqeEGi5LoQ4hQ3kXaBpyXYxfmZMLiMnjNTezcgfJratGcGDbbVV9rrutb3KgNwQz6wcrBYfyTy",
  "key6": "3cxX8X6e5bJvZUp3fpGijq7a4VtgyPJsZmdnFjfMDxRa7MJCuBN7ZW5CMCWN428TL4x5H7avqxjSVQE3TpdsBm4t",
  "key7": "3s5W7TyV2xsZge9jkW4oiWVEgtMxQjxvqtJZbifXAeCFWYBZUeGrNDtt6bZtG2uGSs2mi8yLpqn6z9Gy32qJ7XY3",
  "key8": "24d8a1MKTFzj6pFdHNCrZThtRpvfP74TjGQ7FKmUVogkcRLiKTFdQdwgRKRrUH1jC7TmQTFiRjkX2aQMsCHk8GDf",
  "key9": "4hqQWSkyq3Z1W8HWx2hXLZ3yrwSZ86nCnj2vgCMLUxK98FpJebL8FRMiqN212jax8ag99RXarmwDXCg61RYGtoD7",
  "key10": "32JcHiqmvJvpC4VRyesVKc3ZXPi62wkyS6U9V4XfcuFZTwvSc9GqsEfzFNN6Av8RNiT3T4iPReh39AP2purBHRGd",
  "key11": "4DZwRzyxaxtRrP1125PmT3r9mjULsmt2CWihQuGrcBkSx9pNW7Yz74jAU5S8AbfG4L6f6bBd21DSyngJQDcHgv1X",
  "key12": "2q1uDLbjJCYYNP4jGgjbDqWV3Yp3PmiRUXqHmqC8pvA6jfMPvC7bHV3FJbg339wcANNA239sXREhUu8PsxYuKn9z",
  "key13": "4K1MLGdbAvVUdUE4jix38H6NuguzNjYBifLQw3J9W6mqGrSXu1q2A8GXMHDz3SJurdHa7Cw6KWZMrzWNuTpugXWR",
  "key14": "4WBMUE647of5qs3jBhMrXcJbd3EhHdzdUmSDKnWxTWPqfpMzy522gJwiN29aL3fLGg1tT2qTgdri6Fcpu2FkD6FY",
  "key15": "vwB4LZAWsZQjTN9p4vtQyon3HR88sSHFEhZTonc2j4B6QeT7pLNoYKY1UFgesE1HmxwHJ12YdtVYGs24rnJuaCW",
  "key16": "2XAebXs3YgghsdF43JvNaqU1kuJEobRkuPFAFqtTx8RnkCRFtttgFBUf8Fj2jyF9Tw9k3eP8XenA3VHW81yko7tN",
  "key17": "5VLEJvjMPQCDYEU4kjcyNa5Sk18bkfyqsSzMHEGMUUwbrJ43VJxVWAdpxgimqyvu9QbgPmSba8ktaTom7DM9Jm96",
  "key18": "3jcJWj2F1PgkzJPR8PbxxUtEDPELPzJVveeh7oCx1uLQrRpVgEuxpSsqECAdUHJjXhDrT8kCSywtA9DD3P5QqbGG",
  "key19": "3WARbwBvQo6vgsAr6ZqGqG8Dt1QSyQaoeuqSgH1m9djKWnEzQHZpQLeRgNFsmffv1GsmFP3fGuiNWjKfgufyUbxE",
  "key20": "5urtcQt8Vfd4PHW3SqTVoZoHPfkkmSdmtWmJLvVKhD7CKB6ukLxKvktztLSVoTDwkMcndnJ9qwTX3VPJiVGhXjVp",
  "key21": "xTDE4xDYwLnyfUg57rF6nZ52SAsW576ikQJSp935dXULsRUzFufQ23NEHnB7bMUTpykFssau9gpG1hM3Mc2XpzS",
  "key22": "43etVcfMdcAy7CJnYppfdjKv64TeNirvLSATaPrNqtvLP2mpCBzBLF2SvGMmYVL8p6usjjY7Zeu5C8nxe9ojoq97",
  "key23": "3yjac7zZvc3SQDDxzyPKAfSqjCdHL6pv1V1rYFLaP5MRzxRq7haBNZvSiddSi5TDDJP2cdaANjuVnvYgDr6Xc5us",
  "key24": "5rfigXrhnafxM7Cm1jUJqdzVKkoGPWz6nKkqTPDNKMupzc9aE9q32423sqjEKVKSsfZ391jhvGxzDZnFHRafN44T",
  "key25": "4f9GkVeAhDb3AGHRSBoMi3bvppeyYPctyEzRJDzub4SvGJ22WX1EhMXMPEiNSWz8ry9cd9SHGbRRm3KChwreLhLL",
  "key26": "uUqhrja9uacNVygMGsy99iQkAS81qozDG3CKJ8nQUbvMA5Mq6XonsiCkNUKG2EMHJvgaZYXfxXzW6sHw6D2yDgZ",
  "key27": "45o6UA1mQ1DJHAnTY5YtG3uDHJ2jvRgrA5wcEgYFfHcZEHBZGckjbuXgg8TiWnuWmoLnDBovgZrDGrsq5yDG819N",
  "key28": "ztJ4FVoVTZ4e5bzoUpxDNeuakpyUiDe3sEg8Hxk5huM3GetEUEdXCrdJs1P53mokk22YbFrVYUpHWYdWV6qWsmz",
  "key29": "3mbwDaWGyxDoD4UHVPuDxLbazkNKN9RLVgkd8zoBEw7kqTrBR9fKMgB3r2eTtsdqJykE3rq1wZ7Uyxvad1bGaHxq",
  "key30": "4KXNfRprDw5sxrQafJD3cer3dq1tzfoi7k51EW7JBqtEoabPGeVooohVEKVvcUKMF8VmianWDbpKXZ3ZUPPj9Gb5",
  "key31": "28r5mR3kS5mJn1g7btpLiNqTPortqdxKQPUDgCCj8c2ryHZB4XYD41jugR1VbJ1XNi23fQoEuMCAkQgvt5c14BvE",
  "key32": "4HNE65ufgSy3DoLHHyKf2d1ddEgw4rPuz8NjWKhNfXv32cL9BqMDzYmT2H3X2XAsugiukbVMvG3aj8tMCVDaXZC1",
  "key33": "5y3yRQ9jU5z8BjDQcf2jz5PGC3HirxUEG5vdX1tin8ZNretwqCJjxkRBjKWGKo4D6CSxQYiVTFNwU3s1UWfzN9RP",
  "key34": "597SuDx6kS89eiMbLioh8R94ePgraZQ1cYgj9FoJBpYRSCDfKHUt87YRP71W6sWZ5cuP2Zb14BYfe4iGFVf7gPQu",
  "key35": "5LyaLesUb3kB7mw236s8PdrP2xrcs9v1ZCJMyaa2gW57AsXkcvPsVXpsqiCyYquj12HtU1Mhu9wYHgYqoiqRjMyy"
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
