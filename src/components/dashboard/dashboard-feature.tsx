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
    "2DXCq12iHLYxYnboFXXK76ZY8sChV27Uhno3f4XtTrX9n5ExyAM3TNPhTXA41GAWSQYEQkq3ThFwwgz7wPFxjs7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XcT8aUqmcWNcukgkPvHCKcASujnXcrw3JBz29MSgYzoczcuAR1TV16RGWgcSZiNRxHJ71vjm9uw6nJZAN8SV3yW",
  "key1": "25FzAaL32HHN4st8jGLdWCmRe5SUZ3FuLwxMmk1Ls59ptUqUsXhQ2WWTqP25cCNT9k4zbmCCf9MzedFAXGZLN2r5",
  "key2": "2bhNpwcwnNGoRbBwG8JShsZj54bUENRSUFac1N427nTbeTkPsBPqKB1qGGivXhiiVSYSwwyb4NwLqYfASLFjENSw",
  "key3": "2bFyeCjGogJRSSsecVVqjtdZAawbxCJV6jatj86hNKEE4NrbmsVCUebqxCMdZUwyqbAQQBpZuM8AusV9AaZCv4N9",
  "key4": "vCXHmCegsmebweNnGbvp4mcSnqWiMxjdc7MzWg9MEkxYYmzUzQyJpRuhmAyvY1gbXyUdPjRVGXQLWZdejSWD2Ej",
  "key5": "5Yq2q71eoABkvmkjgctEwVaRMLgfotC74QtHPov44QBow3kYrKdEE3R1NRjzBnZztsvSuMSocQyH7skSm9iZj1sb",
  "key6": "2gap32Yq8SfYMBPwo6i4F7sFSAFLEsZzVTJAkciXUvxcE2vvs8X1c6KL5crW3gh4Be3Ymue8KrBHNmaLYKjdQo3h",
  "key7": "34mA732Hh7N6KVt15S7ojuvKTywphNqBxUkmrGQZ6y1AP842Bmi28PBBdGj2KbfzLa7MLqfPwT6XinabQrcnQWea",
  "key8": "4VTNnNe25YiWuVsL8BfiW1MkSazZLvzNdcNZYXqhNAYQkjWACPJuY816Gwp9HqLn3uaxJQR4gjMUAot3SUnuzVkC",
  "key9": "5JxWxJjfTzTu7576HwyxGNsFqgeQhMasm5tKxQDKgajBvci37UvBtHooteqmvkr7HjuxmpcZH9fQCawa8fHaPijD",
  "key10": "4RkyLuRaEo1QWZDFxj2jMZiDRPjMamg3JvRgPAFepqUPfCWTpWN5UrbzyLgVKjNF6FoEXpgkUxFeQNBV7Zp5ZY2u",
  "key11": "dJyqTJ6rtz3ztWWzFe4gk2a8JbzYJ2rBQfKMrcuLGNm43KybBDXD1rnEREtuJHwYgqDZcXeuaGSBXWF6pHknTRv",
  "key12": "W71qcybj75dH4ywRo1nB1ebYzh5mYX8PmaoaEPC25pv9YNEigHB8FwCwcNwRtZDM5jHCqSjybPL5dGqC12zG57W",
  "key13": "vtJMoLdJZycVbybSNfGeThErgputZXHbrXZKff9fWZbFuRR7ByixX4RhoUWmHdtrdbEipQpC2pbZUvUoxg8R95x",
  "key14": "3oLz2YyiyehasJNGxBAmrr8hQrWaKEe6my6AuwXa96JVyAjYSfgGMB9wDd7vMLE1gTVKDi2Q4G656TQK5yf4c5tL",
  "key15": "4CwDxttEynSUJjmLzmtn25co7i25KGjeXTrGXXCpBWvrYoc2edoPMchVRYX9cAFZULKQkkLWMsgEryVSpMAXi6Kc",
  "key16": "5fhaAFh7NfAaAvydZuTp2PXVgKVXubp539FnZs1sNPqoRGEreMpsgXbkZrgR3mxWFPRuMbFujR9pCkit3xzgaUws",
  "key17": "226pL32jaEzGrmSW9JNvA84ftJr8S7tRkEfTTydXYH633JJVbQYgrt7y3U9jGbkm3f7Em7fhGTTXbE9vDBLeETgH",
  "key18": "GGwaEnXiFJEmZPok9i4zDZCQyb7V3wWkFcz6B8FFQF83ryDDmoRhFrorY3dnaYzgxe7CPg465gMbSzv5FjfrjXw",
  "key19": "4JgsPrvwwVKgdSb2wWuec6nQBmMEvTNT7gjxQDttKPfe3L911zNgKLnrYnjRvHjGhjBqxe9HRYypzCibwWsgdSWp",
  "key20": "5SVSHjwCKCMeN5YutLNaCHRpfpn95jho9H3ZHqHsy1iRBHUCX3TgqE4u1xh5owGRDdv92w56vpuEHkRpd1cQC6uA",
  "key21": "4S5WCqgRFC7UjTUgPCVHu8NynFWiUHenPR3iq5uRR9j8YtzuoGxzKgFQf7ZTagfEbCLJjkSG3Kkamy5Cwmx8gsb4",
  "key22": "UxJx1wceoD7u36cKpLgFQmUPLKvaVCzQoEshF9BVq9ia8iLd49u5xzvsReE11eLqFhNvM2Pp7ni6MepKwiXnMUF",
  "key23": "3ngnm2NGnrqjMUMZMZBwtuJG6k6FAX63vrFNWqD7RBYxdDAfGanC3pmexPH1qPZaJaRFH5YXNqUL9aMWwdkU8dP",
  "key24": "4ABNosFyKcBPbsgiArMsJLikD1cU5LTfDYFVnUjHg3JzmQBqyus3MyFsyhXpsCSk5XGdgwk2EW1hcSBybZeCb3t9",
  "key25": "5rCTLw5LitmDNQEf9R17n731udRCWfq2mB7QF3L4TkjHyyNzLSNCyzkPjtNZQtpfYp2BeRgHFcuRdD8yne7HbESw",
  "key26": "3f2EvdJG7B6CcE5pNfMxpMRDxfHe34CFwxnuHVACeaz4tUSiuCGicj37L6Qb1fZA7dRzjMFxAEVLVR9wg6Uetdtv",
  "key27": "2iVd2r679pgn5vreLmybv8agqHUGKEEDE9C1uw1YZPEVwMarKWNwDEnkdCLaLFQegQ7YG3hJCLCp1eftYCA1mShH",
  "key28": "3CNjNA3Dp7RmdtsUUSekwbc6Pe8cixwY2kVKkmxnsVyAe78vUmiAt8fTtjkTpFsdT9XRGTPLJJikLyZ8SaBWuvYw",
  "key29": "3VQzALzFzbQdDpZorLaNBf9ctz5pAzgYocJ5b3pTV36X2wPCvmN2gR1M2xt1fR9Ru9fH2yrafHsrGNsivbZ6D2is",
  "key30": "4kfvizcQtGBoMRAAvAGYQPREcyj63tZiHwRYguLhhLMR2pYJCbJHAaq7A6qEQSXVoqAHoa1cfSejeXcoQNGKGeGU",
  "key31": "43QQFq8fM724CFgMtBXAY42Y1doXgownsrdxo1zHartjUNKk3m3vgzYCr7F3XDy4tfPX3AXYWSsMf2Xm5dAA3vHi",
  "key32": "3Ai6TMt8m3Fk1uMwQrrwY2B6sDxr5KifvjUN8tCvn9v1kC8ppMqFPtHHdb6E7tzHcj5gzaJcf1XZkqSLMM6mxXgx",
  "key33": "5wg11GNC7BHxNi1PCExnHrJ23Z3icysmuWVHUCTb5N8e2p4r7kaMn4RpFR5huwSgFU8c6NUZr6HD8fLXW8zswCDq",
  "key34": "5Fk16zo54w5LyLZo2ctQHgTKdmLRiuB6xb8eSd2PJwXbSADJtV1jmfMoWsiHoBgSfhTFVUj3AosbaDuiDihaJcdz",
  "key35": "2RLUifRG3FuAm2YYUqGwyYkssCm1YX6jQd6yK8LxVL86igrLp3zf6eSTfUynGJ8nDYW6euC4e1Ep9hQmvb5ifMKF",
  "key36": "5GqznNAwXhYmU7YGJgDATkocUg9VSDLwzDQdyfs2AV83xfy59CU6VVD77ainZWVNjAiHMRHKHLu1kYkd24DvvYws",
  "key37": "sqhEQUNnP4c84TzMjesGiRWamMUpqhkRgvTXRj2c5xpH5wQbXZa2JsYMi5SJrRFgCrbee7WRR8L4dQ29Caf2wRv",
  "key38": "5VpaECZaE7CQ1Frign14Um1ZZNce35fgvCYzAZ4aPkX4ugpckruVgEj3J9LB2zphSVBKy2UTiBqZANHSY72A9ApB",
  "key39": "3EBQ2vgp4PWJQeKf9AkbAnREChh19PUMGG7F4KWu5dmnayNkhbvfMCR1wFCp64rSLjoHsWf4sv74dBQxjvBWe76z",
  "key40": "5Ur7zwJPxQjNwVuVHXZPDWwGTwMPnM6HPw9smAFFrzTSCpWyAK7bfT2NbUYHiJnfmbErx1a3tqgfFSdMNy4m2vfU",
  "key41": "4ny8DzL1Rt5ELeFu61A9FraJ6ez19EXNL9EeL7gnhgazyG1DRr9CnUheB8qQG4GCEzLS9DxBQ6Hf8T9hj2Gp1657",
  "key42": "gVBEspxENb7rWNrF1uYJQ5Nbi8NmFAKLWsABFoYTTpiiyQQhFCsy3iW9h9F66S7o3P6cqb9eutqd64WdTHcMPoH",
  "key43": "4KR6tFbWdKdk7XGXXG79ZHMbiiNoG2uTWJprkLgoMSwxVJ9rR4mEeV2cEe2G9e5xXt4JThwubrCehrf6m1dBZCU4"
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
