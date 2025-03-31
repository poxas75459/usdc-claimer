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
    "4wdSiAW6WBhmyskvQzs48ou9yycqDDDMc8LJx9dfo3343VQazCeGy5jpvzTdUBfH8JEiXCN7LLQU7usmQvAf3TNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W5dSumFA9xt7SeYVww5AFpxEHEDrJtXgaXPiN7BxH3QC245BmoCsWrEkuburynQff3YopJGrE249HorP2CAgRdM",
  "key1": "26ABpbC55mXy72k5voFCQ8ffkedMtpVMgBghEe9U2LNr9QmV69N1VLnAisGnuNd78qoUWd7CkqyE2ayTPF8tc8BY",
  "key2": "4cxHkn9X5VT4SoiN8sjNgXXgsX557aRCyqFwViwN1HJh2Qr6kKnKxs4BZHMS2eo75x75pUrySjTqcET5dEgV74PG",
  "key3": "4yBvGMm5c6WrcvtVpQp6opPGa3vy7TtBiDwjpxxDonpRWMNiAxAQxaDF8NHpLPw3pxFMhUkfBLNGQRonypqBTivY",
  "key4": "3VKjyhGFt1FJMFbpuXD8vyHeqgaXNaUFG6gTMdb92v7MAfULdZUUHhH8jKNQ2o1kawaunz2c5eagjEwLUBv37AFV",
  "key5": "33QHhKWY4i16MR5vGz9Q8zcPbz2eW7xMXxCfoRJpVhYiMiKqHFh2YwqpNfXytVT3ax8DCW2266dKCmVWHCKGjQqa",
  "key6": "4nRiRkEZKpgGGFXa6h92Yv8SzfXPX88QmmQDg7zkF12fpoL5S1Z2jkFbMrE5Si1h5c5SdTv29xiYhcrXiP8NzRpR",
  "key7": "4m49anFARhZdAtrKvzEzTAY2sBpvp3xSULN8772odH8SLLhxCfAzc2FBacAnRxEjSyuEALWnNzHuGK5KABhKjRPK",
  "key8": "yqW4FzURbS8RoR7hcXusg3tunA5vFbEYVJFhhQWrT93SQ1zHq4t3rPMcuexa4zpMYC6j8VE2PAnAifeGnBpdHS5",
  "key9": "5eNgCmhkPA4aaCaiKSmqBB7gC2PCN67YPoBRt6jRtS6MfM2amA8QrnDXR1SjeEbrT8tAQg8pmfXNDGhTFxQBP7t2",
  "key10": "66dq3LuC7NE3kxzbrw2y347wqp2P7MdE8AsShFMtEyaN5RrvLwJWMrjL7das5C1wWxPYqd2AcaGWA5DzZBfDga1Z",
  "key11": "2rdBdhJNaVxAZLewUYH6ArKH2QA6kEtqf3RSjsnjsV4jbNqyUMTfrRPGG5TrDQdUAvvSohTeYtCZyT6dgV7yCdxY",
  "key12": "4yeZW7WNKuQ99KWUs1VC3ZyMNPZX2sTXyj2sEdkzVsvXHjd5n334zV5eYTPoaYYrX3qfB6hSMTytFsia6sDixFzj",
  "key13": "38YfAkDGzwKxSwhQZa2c3vk87HbRnBUFusdHUbghtBCjhBuVBRc12yH5U7mKafitErm1jLnZMoLSnSp7Y7yvkhBz",
  "key14": "5KTnrPTim5p8Gjs4A9PoyFgwtDYsM5rWLCfgSHXsN26T6tsyKx6qkaYrXawNQ7dC3AABwGWFzvtDYwC67g6nZafL",
  "key15": "2W6dBHFYXXnXztg6FYHKm2RFZHYkmtqjAQtHCryeortmnCpfsBWHbfShaA2Lat5f2qK5GhgrmqhG56Zdu4hzAQuR",
  "key16": "5sc6pXqgFKYUEeM57TTmZBjCJYA8WmJsfmTTLCkQo4A8L9EV5WeeYnMq8BtbdXEhJCwW4GHkLk3XMJP3s12bPFtg",
  "key17": "2gqeEWzpQjbg1w5oi7EBKTedqf2DFHuTMY5ADj8mh7MtjZtQjJStxFhyncEmJuWJMprLbYmEu7EF3vKuytHJyd8S",
  "key18": "YFJ8fEhewzBq1rpNm5Q8DpFEC7PSjG8voit62QFk24kgQzf4a51DoZ9MPiyaLN5UC6veXAWeWaRSMmgB4Tz7cKe",
  "key19": "M8ipqj4hAZ6SY8Z6fmWRqBnKDFLXJneDT5Erx49ujo6tKWWSuoGiBK3dp2ehDV1r9cdhNHnBhBgXibJiMfDbfpG",
  "key20": "CMHywba6ohMe4aKPSEJMs9v5KWijFcd8ntLKUZ3azJraCDLq4nCHAEcU3TtUs22NhgvJbUE5sGLcthStf1fnWxb",
  "key21": "bnBbyXkKP5W8hnVMxUx3MRRPMqDVZrcfnAGPB7NeZhP61iWxoBnPM1r71byM92Laq7vUxVJrTV4XriJyW4coURx",
  "key22": "5d3fqKsi2LDDc1WCPPgeTcx5h7dbprwr8kwWEvmqtHfPNM38FoTA9Tvpdmir82g8qVJs95CtUbGGi8R1zL3axrEi",
  "key23": "4Ne7di14Lzs9uT9MfHW9ioCUhujfu7oS6j6hy8wGQSHwfAU5HxcYcR2XTvnBNsCnQRsabDNJkxUtp5wSaGMj6PeU",
  "key24": "3YsN54qv3czZaDoJs6WuHEoeU1db9wmdoaEpVhb6kuRUpNFffKd9nxj5pdBWZqnE9K5ao3pYsXRjm4g52N8Szh5a",
  "key25": "9Q1Wn6Z32DQhUY4WVwuQa61XpBtA1TWFMGDfxPmQHcuHjNEnJqgkR78zpV8QwBCEUuLdKzbkdT1weEr9xARPYM9",
  "key26": "VurCWGmdhdX1qVjSxqgJyiTzzEW8hjZbQMYCaSnd989uTF8bcYa2XjfN3vtyTczhmppLaoPFVqu1j53QyDesSGY",
  "key27": "4WfnySS2RxFerpmfk51hLsx3twshEnznqwnz7SHf6vwvWKqU2Nhuf5iE9jBnoQxY32NFEcuf3CKVohmCs62acRK1",
  "key28": "3pKynJHuGwN9GrPkguJws5Vb5V4cFVSkNbG6iqrJYSRr53NWJvqzajgeg9Jfa5im6ZMZ63QExuayfSxkhmTqfqth",
  "key29": "r9trJKcwvrgMmwfbntLKVxM29JN5czFSHPTw7SmUMtzGWgBMAVRUQ1bLscsM3TQqzChPQSQir6W5Ph1RZ7Z9b4Y",
  "key30": "5spF1e7fQHDcGiYc9MviTh4qh7oqzYoCasiVDeuqsxgJon5qBLUtMdAjDsCebWy69z77wrC89ViATwz5eFyhwDQ8",
  "key31": "5BHYJvhuk3vqGEAny3bUweLDXsXjE32cL3yxnUjb5szUEr9o3pcBU1baCykc8sxBLKjjk8fad7YRmTy1mo6L6s9x",
  "key32": "4Joa8TydT1UESoxZw2CZgkMSBmQNkjH6BVct94cm277y1s5XfUFgLiDARrDhJ8RWYd7zqEM5F8rFomEbHddeGtQY",
  "key33": "TugXCw1kmftUzTeuSc7zVNQw8WZhYrdXNMgJBr6tUpBjaRPMwkjv7yYXrC7yCb4NuWwt2j47b8hRrnEfy4S1y4G",
  "key34": "Jnj739AxvZjmf6bwht7CybucFZ7uQMp5LDVFnnzbQK33RyjfyiiXEhSP1memm1LLs39rJZU85jon4fNA2sx46eN",
  "key35": "49wg9pJCApED96ExCNR9L2GR9UZfqU4LTVsc6JZ8FGeGUsEnMnTMzBbEUPJY2NPmBBFTPdn7jFKriCJP8Xi1pDra",
  "key36": "3pqW44Htgq3dKtkTcLukV3EAMzHd7bNRajGZB7zXe5QrpT7u6ohug16HaNNuCCb37LRaeM3JNNQwcU7tNzuCeDUh",
  "key37": "5EDbpdtymz94xA3Ei1ojEy66BSNkbX5k24qCnZTjd5ZhdsmxxLCXgaVXBs5Qhx3p9vQWH3cPXos2YWJn2HFMiLka",
  "key38": "57L8wLETQEsH7wcbJzT2HXbuumT94XkmctjmYFR3BHgxAr44nxLbqwVgmQFQ2zbNpoFiDcuiconBbo7Tm7cneXjC",
  "key39": "SwNc6sXFRmeLbQdB4sN6cPaDGZN4nXLA5x2iB3ewhV3UdsBAn3Ga1zWjChdw9vkFkFJ5J25CRuh4ihktspGnp9p",
  "key40": "2zG3SFLATQ6YXVR175SV5j9A45QDQ91LVRWL3eNDY9jweCXgo829fW3xKFttWhSCpFQZAv5inRDXrGzKRpggdEJ4",
  "key41": "65Zr38fxVFzj3XR33XsubGEPfrDfVWLTPU7VNVpRQtz6HFvr4Zwd5z3J4HW7WSSjH7jhnxEWzDn6998VeeZtWiUi",
  "key42": "2Yfiw3ZhXHqaiD3pVDviXH21JPZjHF4UNVRaYFPeUYhHkU48EHVFwqg4R6q3FyirXGipK7pTs2aMiExsUvR9FUrr",
  "key43": "52y4SKvtoomaSqx1MchyvPW3S2oHT6EwpKqgzBk7K3WsgwsQnXjjPcGaaNpsQ3wB7Uk5twiPbnQjawSxGvK2j7xs",
  "key44": "64L1dkpYX6iXG1VYbPQrzUoDNf1x8Ryw3P5wXt19VZd3SDCDKM8PsXTJ1D8ZLRSUFgyFHnJjec9vPrR2e8B3xbdi",
  "key45": "5nKdFZ4d3o4Ku8vHEQq4e3XSJbaRwKsx7wT3LU8GtD4JFtzuwrgYDNqeKNGLvyd5fLceDZNsBaKbbchgMnKGAAoT",
  "key46": "3iCpKgfnHyRQw5kqScRDyk7HKe9tN1BHjkfH24bWUv2rhSRXq8hH9ML38CHaqEwnTK8d2war1pjUrKkgvUXSQgK5",
  "key47": "5AXndYU65295GzKKNLnyVngCy3Kd3kk2KMGikxdcSLww54ZVScv9p3LcWP5wf47hKqZSRE1DPnpxcRkYiFuA5wez"
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
