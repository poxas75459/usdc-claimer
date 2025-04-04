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
    "SqEG3FkMMdCov65HfysABntu2T5vtdic8qjRwEYq3KN9hvMNJJG3DRBvykEPK4V7gPkJS4aZbeRCAfErUZGVZ6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KzroAfbjbJER1taZGKbLgGN3pJ6C3b1mMJaXw1TjJSCNs6PiLWTotLLSc5UUyCeUBDXttTLttWMMV446S9F4jSx",
  "key1": "uPK9Q1ny6pYQBr29yxKqQpgWhjiRGrZmgm5hadyE7FCdGMyKQBAyqDG5WR2UX2j3XaU15bCWxiJjYTfqcfHKYH2",
  "key2": "5Hs8NhR3xm54m4Vjt429p6PR6sML44Q2pNKsXEbZdd6F9iaJbsktvTMABspKWFQdfZzYQtJr4cmCzzzQpL3nwTWA",
  "key3": "2ikbr6DSHpFfKCHowxCCAA4hLvFXvswEdQA6fPHpaWUWG8gmQM51YE4WeQkkNCcaHXdGQLK65eiEazWikhhfscSD",
  "key4": "22KW7mtK6cQJJrDA2nDo9dw42T75b8TZZZMyWYkp5KkpoYtGRgfyTxmB25eq2niCfvwLQybKsemWrJMbZmHAKLXU",
  "key5": "66EWYB7rc9EyzF6h2Re61msGAaeadDGGEZFCTJGazMLJFe3p1eRHDxvj4veaVaNcnasYQHNZeyQSc6gke9Fo7HY",
  "key6": "4Z5SaUKx4JgN9RQfC7gH59CaepiaBouZUwMkYMDkkuSt8ywxMc3ygxfHXzfM7uNfR9hxeChyXr1rz3jE19QUCWeP",
  "key7": "2eKic2qmCPgr19WKPXRmssGGEQbiZ1fqRQyfNBLz8xdXAkesBZBShNihAdJo3JsM9iZAsKDPCgm5fhQ8emEExEFJ",
  "key8": "2QzZpVdkAS9y8gYHm4XaZtUKzh99xspDFDyftUAqhgw64wwfaZq9VDiiyhYNUFHJydLsw2bVMiHgM9k1ArEj11qv",
  "key9": "31csz87AzippwQP67oixCHqRidipWa9ZRHLBUhphuaqhZ26mXLNJCEA495D65J6tfXpdjstw557snH5zE7Hhy3qW",
  "key10": "34Ne2X9Q6cYczbMUgKvYS9bqbYjsD1WMRHwii2aGDVe6KLvjKsRU7uoa8MRK67U913x93ZkYXBouYMhPhKtLwiyw",
  "key11": "4bvZzcDSdjNFJ8gDdXFmBUNNPTPneWR8tRt4jZUBtjsQqRjNtM2oXvaDhUCX4x9tENZ6rbXyzmDDNgRWSfXTLXw3",
  "key12": "4xmT5rM51kLtoSorT7ESGrybPKq24TqMpveVgNxw4x8ccPYp8Y7cFNefo5aXMNKNzAKzn4hrgLCBeGXLZELTxigB",
  "key13": "66MjEnG3ZxUAH2AXfbuyxf4c6c4GKGg5rmrEKti4e1ebXjvRLWUbgN1JBz7qnpLfVtKowRCcPtsHdqYfnxiwL6T2",
  "key14": "4sGfVJkfDD63ZG8BEiDfCCYCps8pz1cUR18yPELdrcSyHaSg7Jvj27p1ntuS3j4fAn33Zb5MPsgKArboz8PXbnb9",
  "key15": "3qE3dXkLQs6kWGKgsnCN2CTF7GaYjJbgoGzPMoiThbscXPEEJginxqKAnhUhtmNo1n7rSjtEMqCfipbeicsD1Anc",
  "key16": "rCtpag199sCYZpKzrCKLdK3CEA6T2Wc3HUEdWp2dibBBZAEB2etUgiAqQZdgq49QZVvL2XGqQp7ZGWnxVHr2Rv7",
  "key17": "5fnEBAz8YBgTFrHYKbQ2Xzx7wrne94v8RbEwFx4A78g14cpSaoqQgM1sGo2Ns8D6tS8YYMvyjbSNNJEFP5ptngoo",
  "key18": "6tf4mCZ5ayeLmGPAQiEYMUTuMyyirboTXbHWhsXJv66B4WjmpeMdq1w9hdjh5jkbHnTrCRwKQ9qhK6L5pFfR2hm",
  "key19": "2xyYfV35LHKLnayT27VTVTfPN2h6nj37XESF9k12xy4bZG51zgBe11r6q2F56CBpUtjEGXCAFz6GY31hKVmcaDTK",
  "key20": "2BaERLU67qjbz5BNhhyLbfXHMXRGiisHsudbsB3iGfHAuUFPKUpUX4WfGujoCho75UxpNCc4KvF2cy3Wgr3spSME",
  "key21": "bG2oCuJdwm3m5FSAZHTv2jd59FbYJCctWJKTikEA4s5Y7VnrDkA9rsrMRafsebrL2MqnmGTo84sg58TcSkKHPAT",
  "key22": "noFGRgSpsU1KTG3WrBGynkBSpDy8kCfBVqrwbv489Hm4fZgy9a3yeLYDxSKViWgsb8QCwnFqjwQ58vsAshTvq2y",
  "key23": "3ibyZyE2YcEUCkwpJ5m3oy7sHV29pyuJ2jFqbLAiTrixHFq1kzY7NjmMcuRm4xMTDDFyGT14KpeEJWNXfuH5iF2H",
  "key24": "5HZBw5ygfTyrobKwuVPSpK71uHGn4HJc6h76BrfZW7zwNgUfhMY2AFfeg7VKLqtVQ8gv9eD4vS87aTgU3aesqCxc",
  "key25": "3bVMYRRmY5u4AY1tyr3AfX3MRNUiTh5RugNHSsNAyxvYZruBmSSeUcSc5C6AZt1MG1w5hT9tMq6Zca8iKaacqYHb",
  "key26": "2hnNwiuRueHNaZekM5yjxPFN37BgpoXopsVNBUNgBCCu8gkEiFRTRsBYUmGSgBzTNLpDSa7N42p63vVnYQS4SiJS",
  "key27": "5ZFBZX9gGP4CGXt6kHivL2NApqQLDAChDCSNKFx8gCdQmWHdhedMiqc7kEQHvqUERo8HXFKHUbitAG61sxg2xWLc",
  "key28": "3GyS39RToiHC1M8xgwEdomnqd4Ra9geZt172iJi44R74CbKN7fufUQdFttCpEf8cbjEchqt3kHsDp5bS6fgZcq2o",
  "key29": "2JGjtqp6ucUjMhWGRfxnfheTP8pcDbTLzByobEqzhStn6DLDUGUSgw8VN1ahDkkBJM1YyY8Q3FFxWrs8hRSFrn9H",
  "key30": "3Qs2fk7FZiVtUiakeAfa16P43ZnxH3TziNJW2cJ2Z1xToL3tBxSUkk7Dhr3QyfuUo6xBwiYTvjyXyCQx2nimY9fx",
  "key31": "55FVF968TW3ehnC8NdKE81AgyurfFrhv3nZEnJEcWGiay5DgvKzrdrE2ueKuVvDPuFYLMdzipAnKa3RUxKy31DKN",
  "key32": "298gNetU3BfaBRgmCBqRYFNJHHfAcYLaXP9G8MMWkQkMUznSmPWBQtcjaLgBP7U18naQno9VZWzeYzFjmAh4E29C",
  "key33": "31NmSb8cR9hRCMZerCh8Ms8YPvFfFs1vUBXQvCfM4nTqkaA1cabM9aUPABJRcPEiJnYFFtEXmw8VH2WSuR9U4jNM",
  "key34": "4ue2BWafrcJ8oCWZHPHdfQyEaUiiNS9655zPmxUjPXosn5Rf4btrjeGbUn7yYv6SaVkQJwnR4tLQ9frPW7F7peuK",
  "key35": "5DZGZ9G1X6PenXhMtH6MZ2Gu6c8Jb6hemNQiQgEHnQsmA1rR5oTnbQTdGMhABY9udkHuG6d1TptXYsF6jKkbtYYu",
  "key36": "3qx5bYxko8s22ocysyKpVsBoHmyCpr3uwyMcHdqtkTXBgC4sCKUWDhr1MHD5k1Z7JRa26v2gjPpZSPYuDeJr64Ci",
  "key37": "3oZ8pG6atkkcuW527H7GVw5dxZnf7KHobGtjLisMyEtCnNJMwESehjkAL92eBmVWyT4ABq3tGwCyFxwLc29Ugvb4",
  "key38": "3Wuha8o8BZqQxnLt1icDx4ipbDpukGyn2E8WxTrberhwNzSsA6YhawCMYC2Qr7gQL6pwk6DKdAD2kn3ruWHiGcRH",
  "key39": "3Z5s9BRwZRpDtDkczF9sSsMazWMXAnu5vq2DRtBvMkJmypg1erzduw5SYi5cEFATXR7X7r8MADSvxsuGPWqV3H56",
  "key40": "23KoBmAUPp3D2HF5S2F1ZF9h2XSA4tCN8jFVKdHJDMuqkXqpWxEAjVdRUyCegYSTawvCjk9QYonn5aKUL5XzdVTE",
  "key41": "3tEkMsKD5wL3CRjYDML2HQQjnYvYktn14kbujqb2J6oFTivmvFAq5CxxxtPBj1ZQSNcEbyqNLFTVWTyX1sGo3Jtd",
  "key42": "5wsTLYfJWpurUsqCwtnA5QVG6a2au3aKZxnUuhencSzoaxJbkhNpLgH4PzSMmYYjvAfrrTdfiSzPB8jkhAzkQXsc",
  "key43": "5JQURkjoGBqmF5wk62dXPATChC9HSJ2fZnLXbzEpHvARaaSo76ZiWzJ5DUCA929tp5z6YdxyLhkciGwSdfkzsHQk",
  "key44": "E9Ur5YaQx5WeGdtDAqVAc11gQoCgNnZRzuu8KWciqrxzCCSHRod9y8jUStCuaB14CdQENWtPz6n73RSpNJhdaMg"
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
