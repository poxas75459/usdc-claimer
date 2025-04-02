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
    "3MAgAtR81VC1ejmADaM8Qt6pVgcpspN5u1XPFdvbAa1P8GVD9wCc3MD3svLZbXyHybaQY2YMPLaE9K9xj25B6g3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ERmJeHNcbdyu89GQ6gbg7xL8AFQgNEDntSpMyGAdrmxxmU2VPDoSVt1AxYa6LLwiuaQYzPgFbRJKDaH9hekg53A",
  "key1": "1UZhgkPSTXyHS1JFr2QkZydNHfkPbTghySrxAEaw7YAxt6zsjzLQkqvxS8LUU89SFEFJnfX64Z392EPvyd2X4vt",
  "key2": "5mpdiHzgRMJZzH4CKswfGva1bZA5XW6cMj3wND4eqeyaT5mLvBqoCky5yjasg8xXMKSYgqoypE6WhQBLrhBCVTaE",
  "key3": "KEXEUTmityNXJwre1RuxjMzp4t4GsEKp4Lvfrj5v1vDjekRBWXXXGk9mA9r4Fip7e12hgQe4CTGQR3gC1nA2MWm",
  "key4": "4GJUbcgyzj4G4tmd3UhcmxxQncgwv7nT8mCo5hTYRio1xP9RLpt9yu3eiQm5nooaiiYTxYEGcAUx6K7Lb1eCp29Z",
  "key5": "4UBKeciC4FpgiVenuUfsVGgPCkGCqvneBqz6mJ1CaNf8Hv2noaMENodQAakZ19vr2oPbux8papeX9pdia3hPoL84",
  "key6": "kiUWBVrfTNqLhPeFZRSnFtoXBW9BZW6s4mrE9ZPpcC6L3Qcd9hMqyY4FKXjYCrXAAjzQ2g5vTktEAUKnFGxMWYP",
  "key7": "63AzcfbqujJHzsdaaFPF4RAwcxuSEF1yAYpFsqiJcRqmeRe5wfGj4za1JsUzzsM3k91RDABJyKtE9jpkZcr1Ftkv",
  "key8": "5xxSP38sGu62fWrTsQbKYFzZ5DTzmQ8smMLnCQi3L4UK7o7PmRZMcvCLdMuV4RYiFQ2esrqGsLCYcVJotXvP4Kgs",
  "key9": "3buo1dbXL9rsLhbenj7t8WiMLCPmFLwsoqQBAEf5GXcmFWq3Eu3e7qrVxRV1YrzJmpjy1oCxLQUtxcNm9mqEkRG9",
  "key10": "65qhiokJSvBgfmo9gKSWrMrrTwCsWxe7HNd42w2oN2nXmXNnvtU3rvbfGb44PMpXLVJXn55Rt6iT4QeN68pZfgzh",
  "key11": "3NCK7mtMt4ChXcdQNAToCxSryqagBiittB8tw6tRWDgvarwRxHz7V3WT4NXvLoau8d27qUhiUG7vipGH62wGRjg8",
  "key12": "2ScnGR3x9xgxnWsWGVRhKFs1sGtJr6NCuCNpwJzpvDt4yv4gwSTjPKGMjt86QTnttR5xnBrxid9fxf5T39phfsd",
  "key13": "2uBSMKqvMKG9vmNQ7nEufiSXqyiTVPtGbZu3RjvC6WYAXj4f7tBRForWFXKi4Qk4cFQQzx6oL76pYFEhKPUn9hHm",
  "key14": "39S1NDAcN8s7eWcBTMCBk681RbHMy1JkFmWGbGKA1rcwBX6QETJspMbTrweeA1riMJjXp6JSFo9H1LsKdLsScfLj",
  "key15": "3gMAfZk8chdAyioaZBQQHf5hGid96wqGc9GGfuZwXF3xYq8t6UqTU5QKhNZoM5YvxnCPbtgi1Jbdveur9VFCktoY",
  "key16": "4uiMQcAsHqccjDqyHHHEpvdNnNKU7RUcP4gQsYDhyb7k8wje3HJJrdQmd6MzTfh9yE9n3oh2fruLdTnkg1UcyEYD",
  "key17": "r3joeyK3JYLmm4qpT2BpkGDrjz4rEcXFUvrbqiCVA1DW4jKtWJFKcFgpRitfx1ckrWQkWsvMeKhtibXqb2c4foX",
  "key18": "5YPiAY22CFKfxg5dPyyQQ6smkRoEsUEAdkMeSMRMpFHKfeFQrwpMdLqMqN3H3V3iAk7VJB79GdD3VZguWsz2F85E",
  "key19": "3eD4TwS3HwBdFcEQYUqF9B3995z8Zg8ZhhEQ7JAVKM85TA6AcFLso6gKEEvCLQwA9w27Y7cEaKqxVuGc2dq2ahtR",
  "key20": "62fVcrcPb3PJ6SLRdyHLXA1okDbabN1QW8k4YFVi976A6iH7HCj9JwdVR6Q9keLUu8rmKu7zG5jLoJqqqaCn5N2c",
  "key21": "598UvFs2RAzeG3iWqXNmNgytUdQmiiYcrWuRXwW2Nz3gkokbLuV2Xz2s3VsqDfpPgYK76FJ5KarVmTU7CTDPcgvs",
  "key22": "GfBsLPvZz5pVT6zDy6tHp5Nn8RrqMBNCkywJEM9fZXZMD3JkVcxX87U7HhbAwcQ6jBMxLoWe5Kat8ccBSMfSGHg",
  "key23": "3PyqRXDkVZd5UZVykeLVEeo6tZERYTUkemUXckACh1PwQkufupFz1mfKDG8GZ4PoN1cRkJbsQVSAuu8XdsK2NAu8",
  "key24": "3sr8XJpFHtanLp2rQmDJHJYAa4UPMN3UY4FSw4f6LrM6YWfSeRWJrc9wRZQ8MBv8U4mkpJys94SisA2MN159qvrZ",
  "key25": "4VJqFR16gBVk2Ueg3S157oDMNJi171vaY5vuPDMbNK2C9Sko6qJdSPr6efPJeE61fttQ3CpTk5fiUFWQZRJ5NRa9",
  "key26": "5uppfmp4Z6xntoLCUc3U8JYetP7gdsZJzyRUTDgDDVTiApYBcdmUxtTKMMaCQ2X5pPJKdc1q3vreZYhG2R2cd7do",
  "key27": "48ae2GusvdU1d29Xah8zvfhvJindx12GJcHa8qyyxQcoiokcVXw2rF3KScNxE9XY9ryky2MxBF427vqHPk8cbP1n",
  "key28": "MqiTJ8cENRqAiiaaMuH13G4unKdPZsU3diVqdjnGeZNfRc96LEk98623mKecZqAXLXcHPbWjk19vUf1D9XXhhu2",
  "key29": "4rexkXc3vdQFNHiv6txnmKW6umaNNp88AyrFvHeCdg54bk4t8m73XMznYCFYCxhaX6F2nG7LL9WKNASrXsEvx4vA",
  "key30": "2ewHonZKWWgzcZyPCkuChQtxWfNSxcQAMubpeGRTwpaQ6SsFKAQgiScrGqjkpT7cwyCTSkcaBRTeRmNXBq2uabZH",
  "key31": "3sNa1nQ9JCMjp9zxdvLCeEzRpJvDJFTKbfXdGxbroSv4CrdEAhdwKYXa7dKLAp8SB5Wcn3nBEuntF9MSijmu191H",
  "key32": "2GQB83mQWksx1XFhS37xqc3ikPwJrNa5a8SiP9TV3pkvuMdDH9JjDijCxA3yyJn1gyP5yuCcTFfVLW8YRGp6czqu",
  "key33": "5XkqSuvcmEVSWZLyd78NajSjBRPnhxz37FQY5U8LuvKbAdA4dVoWSWQhEwsceV4Ya8NZgC2EDyHDj7nS5SBY8pSG",
  "key34": "3PWrNmL4wySnjsfAfmPyzz7ZzpV2SQGd4Sh55TtEb8kuNUBfiv13ar92UM57oXcT6cddHjCTPvACLDZgdCKTRYT3",
  "key35": "4WFg3kf2DBSeB4sg2MEJtPgmGC9aLyubRh2oy1p8nGN5W2YSYgW6nFmnLi3SczAvxtbGnqdUdY4ctiSW4HmuVb3k"
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
