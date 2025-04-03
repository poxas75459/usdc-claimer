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
    "48hkyNMyiPKbPMqHVgzi1Ut2Nxg1wxB36rT3TJebkiQWDZnJihpiHBkatfudXRhJC72McVGGKY1hXdMHGdPGAp4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2omtrugD1T3PXfHu4jTjSdaE96ze176Eu9EDEzDt8omoWL39rnYarJgp7Na9QPc3SdBEpymMokKx4tQyHBCVqwGm",
  "key1": "2hMUKHteB1KFEVc4YM5psomja4E9ZLK4z7nuBzuqdJfpgZj9UMXAScVDra8Dbyg2XPm3gP9UJLnixuPiA5rbxogc",
  "key2": "5ZFM1M7KhvNP6Kk9R6kDBDE9Tfep2nHab9kie2acJ9g9iSig42AaKMNEMx1x4RSvqguDTpb7Ek8nHVNKQpGE6byG",
  "key3": "26w8arg7bEwHdjDmthofAhWRPAiEnvU2uMUm3AFe24Z9gDohuJvjRkCUxUBy2XR3FyA5N3996dG43YPjSZ6NwTx8",
  "key4": "52TH5JvJ1MAcDY2wVGsUhtp4W4eQYHpSE2dT9uFPGXuKQRzMgLmeNMg5AReTeHzSCwLzcPpQWTwQYGSTMSTSERoB",
  "key5": "4naC9tFx4GNqKQnuHXjWGka6usSYxLJhjwNJFmWGffoif9CzYW2aWjng4Y6vxwGTPxskWohRmB8oCG5gZhpL2fuy",
  "key6": "5zX1pzwApV1fBQZGV3miue1L4CAE5HebKhm7PbbxSAQy1qXWJoQCahaHvmPRV4zN5MkZvkZmoCiPDJRkjXK2na9o",
  "key7": "52YBr1QS4HDUoAxYR4PEam9sSvnSaGumtt24Gb8xHFcJouLMQMKuhgT2dNfosJeUfKzeF3d6XBCztWAfNSXi4Tp9",
  "key8": "wbnMcBheihJtibwHmw5GdrbQ354B7GnAAwhMedXyAijv5jjiHdkAw3EgAXhGnWoRUeL43YMQJFmGfTXqH5SHhrn",
  "key9": "Q3yV1MtjxvdqLtuPYY81SyYuqRePPf5BCiSCyWYW8BDqBffirdv1FiaRtgj6WmCK9yKdTQpsZ37PJ73V4LomcUT",
  "key10": "4mAz8MFuASwaKUjRpTwF3kChQgDPuJMdaniLATCYAg4z5LEJXvokya4xperQervq7n6di62ouRcvpe64rwts5vKk",
  "key11": "5jJiS1DwkSop9SZknmLNmQKHh2CyeP6D6UboMhNoAVXoAUspJLFAAXM1PgL4FY7rncPunaiCS5Biz4zjfXKrEMwF",
  "key12": "3soCLQ4R9oA4r6kudeYECNVDMAKConUNsVtHqgQaJNAgEPaTZUJr2rGU1BiNN7h6LiyiUN9bp2tq3c9LM4jMArAe",
  "key13": "488FHMYihs61F97Ntt3xfNcKpLy9cVvp9t9jVwAUoTxptGwaPnjJqUA88tAsdnVWVGxwfB4u6V8NDsKN6psCQCFW",
  "key14": "2wSuaDbrrGyYNS3qGjGWq3WdeCyGU9o1M3VZkguRtuU6SvFoqVa5SwaccrmXrZqA2Fj76mGVgPXu7j33xDoUqXrm",
  "key15": "67PstS5wWDLwPYNEJyc5B5YXWm2kAefaS4UBzuXKeHP2WFBfyTmAhhsgfL7cw2C7tXmKCrcUXE5SJWHBKypbxZMJ",
  "key16": "61ZKTjt67JaA5vvZgKpA3e6bvbo9fK5Whh6GdUTcUxuBtbvSVr78xpCdMvbt4BoddasqMB74GcCnx8ButbkviQSh",
  "key17": "4MjyTM2NqJixG9PtiHjP2cAfKtQ6QbRKc5G1W4hNmMPzAKakPHeuxYQfRdk9ug6x6wDrbLPezET1dnrTocRdwMKT",
  "key18": "5aRNTfWsN8qhSRT4FrW8NPG1yageoDqEtphZ99CKEsxA6h81KmiLC5rJpee1VTufaepUvhhia925G3uEVJrnB7yD",
  "key19": "WTUy3RtB75mYjFucLd1zB3DJDHNchHSZd6KYw6WyJTAAwCrAVyZtJAiipMq1JgwqXrMNQeNqJAeE66gTsQXHA73",
  "key20": "2D9JXYxYKrvDCVLdrp2jYdvJ9ZJanHnimtixbh5K6Sq7Mb7mpqNwjgrtABxQqAroDXATM9EpJr66NcvasvLdpF2x",
  "key21": "2s6abVB99R4HfCbJF5xK69qrvJ78EGTjcAw2tpXbWdH9jPxmsBEzg9X3uYtSKHrjJC3MHhkz1KXY1akB91LAYHiw",
  "key22": "4BXf3zLcw7CYjfNVDuoUXChETFP44Se23KAtGm7dwUxEZqBxwsA7YZ9cUsU7eUJaugzHtJRMfLPUzKqkuM8MGhWr",
  "key23": "2Nxa5YCNvuxq56w6zFtWahBWaVpkYmPJxbcYAvcmFS6pELwQQHG47bz4io9YWbGFPyCvAsJ8L9MA1ooinTVvF5Ju",
  "key24": "3iQaoYMBNBpe3qUukStH5PzCRbFp2G2bUgw4W9R7d1kWsJHY73xvNiK5ZU8WzDG7deMJXpFSZoBA7cuLuUJPHJm4",
  "key25": "38yskcjVQWGNuAv42nfZs6L571dZjJV8BoqGfjzHwAiHcbTC7RCbH3a4ngYiHyrEhJxbPntnzW7xENJAA7ZX2jJG",
  "key26": "31vnkeUJajWKVEt9vS78F38jEDR71dG7VmeFHhDqsxpZ9SptGD1Bcrx8s1GKeN6tNW792ADaj5m4MKRoSkzFUukf",
  "key27": "C4m7p8u5jT2UYVrrMLtyeN6pGctf1cKu36jV7ca6P5LcAUxiTjs3nndE45iXZUSg7MFGht5dcT3LVuNNAPQEjsB",
  "key28": "45Ds7iEcL9LbDtWpwwws7zwcb7CshN38zpZyMHm1MJ23MnQPSDWysQEPYwQSNiJj4GKbSnjRieWwaAi3yjsExyjW",
  "key29": "4hkUQChPixUJix27pobeViG1qFhNQuUCbB8sbFk3eJ9cLdyKNtz5u9DY9T9BvehM1s5ZTKpFbrKgn8NrhViy8VQA",
  "key30": "2dEeFQNHCkXJShwDjMCrLfQ5Mhhc4J31jMHUDHMjdyo35SDjyrdRTnqqVGZd75vypWPe2Ym6ujew4S3kyDLXzLR1",
  "key31": "2i5vDF6C1YDMwjUz7jepZS9JH2gZqeN1SjSvjZBm9K5TCCncMLa9qyc5AgfKKno5oq1f7nfFyeTDwbkNiBoAmpkS",
  "key32": "66KPQAbGRDCMShNvty4ZweU3HxPymD2rL1Z5HHQcwY3LHTsGWuKMzR4L4B532p99LGeQ7niSwkS5EY19xXKmXXsZ",
  "key33": "3iLJ7yvvKWfUPEtLhzG39d1nuPuW9DMNqcz7M8dRSXX8c9DZrh1XUDJMsjR9mYttsyw2dhfc7N9DYq3L9Qgr2av8",
  "key34": "2K9RjTHsjxgnns2u7nLX3uCaoX6Z2NkMFxdp4oafLUegca6E8b8zpyBYc8Sn9g4MhhB82HatBLRPRBWnUVGtaScC",
  "key35": "3BMpSnV88RHhGzRXEEuSwW8LkVVbmfYmGbnNCGUtpuaVDAsxDokQQ1LLSLTGrS3q8YgHZJoApYczr1hUNthHiHjJ",
  "key36": "Ltjea42rhPWoM8ZSbjjAukKqR7XxYcZ9L1q1ipG878mxFnTUfF11ypvX6jdUJ4zBaNvKCHdKCRA8ZVsQTpz1aMD",
  "key37": "2tv57bRxu111MNchPbNW71Y5FyQiL4puESAwZyxfvu4S6MbSGkwvAWkMsKr4KtUE3FkvpyYjEvuvJErU8zpHrQZ9",
  "key38": "3qjkZNtDkR9WeaR5LtYUqTG5Xoeb1d3KLf4hwUjKVAfq1yUqga1rTqKJeoskXX3Fg3HvhP8Ltth1SD8DvzuAU9Nq",
  "key39": "2zjv7Q57jhBaRucvo6JDSGYJ5pncDgWC2rA7fgXW9j8hBn5ZFoEisq3d15D7hwqPfNw766r668XDrrantMEjJYvE",
  "key40": "4Uph5iojsmBMVGn59NFqHvpejkdPybJLQJTVDVo86KSGuLKkqP7t68kVbkoeSc1DDWWBxb2NMajkZnKyiEUGaq6F",
  "key41": "5Zi5DadBJrFfJAmVMgrbL1RqBS52wstzZT4AJ98fuLbi7FhrDL3fmqk8MW5gpxmz9pzBCiTeAtEtLXxurT473Dz3",
  "key42": "2i7o5oyuTApxmi64Rq29KEnbfVBQVVoLXW5YqLTksdgictakRU8GUdn6ekXRuXqvBipe3Z2TBiMYqyusheynr6jw",
  "key43": "zDmrJyxu74D6Ze8EC9VnyCA2oZh5Cqd961hTKYay2SxjcAke6W4UAyYUXUQqXrX8G8ubpjsW29LLF2hyMQxuctd",
  "key44": "ZwDpnHFAFUNZCDmEgR1noG9xaf2Ue3bUNgu5ajvM2MKBnsTZNghgqj6dNnfsVRdGHSzPkpQmUGziQ8x8tnJP5oW",
  "key45": "2jj3Z5vv4ZHzdCzv15fGpbZqKP4obsBw4pmVwbmt1hkvGPyQutnp21TuFQ1C5Vp5Bna5EJ3SQ4zLZoZGLLb5JVJ3",
  "key46": "5jb32zpW6gv14ByBcrSFkHhmKp1VMPJX2Jcb2q2cr9JQiH1cwnjY39vN7r7e5QVpkCmdv3QM3efn3NhNei5eBC25"
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
