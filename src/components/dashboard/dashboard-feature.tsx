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
    "5wyfuwz9roZmKfrPtG11zmgsUxSRaKcujiVtZsNwGJwHpVQR3sYGy1znBwLjDXaEQ2pFkZwiSou2BF8qJLtusbAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27HcXfZyjMVe3RbZmCpkJExA6x2Jvj9cDYE7JweaotQHVYoNkbcnXuakC4junmpY42nciDUugBVfgPE4VrfRFibD",
  "key1": "54Yt6M9zyV8y5a4gUcux8EBD9V8EPQZ2MgmzM81e6UnaZJ1E8d9LtgDd3eE2p7pGf1hQ2akD1F7TGBScn8r1iS7U",
  "key2": "5KpWXdHd5DyJw4wvvvEuXphMDquQHEbhosXpP9nkTRybVrLhoebHxBJozP93xWa2SJzZznU68bGge5xRKfSRJQU7",
  "key3": "QHu52bXzNdsW8Ty5ZTwp9oaJrW5uH8QKC5BHxnpzyzaaNdgsP2gkJ6CFobwXxGfbi1YVTyqdpHusurqvgSbSE8B",
  "key4": "4q9B4bpAv8jF5gGU7FTsg5Fy4ccyqHz3TCEAZftySeCCqy98SMwpncdGnaYWUnMRSb6cTMmJg8EPBWY5my1BeG3Y",
  "key5": "2JdH7m5FUL1ZVpvfbGCWBuibWrN6fgkWSqJEVJkxT4mtcji1NCKtSWdKHcSL9bbi8G1zVBc5DwmRo1sFBJjzgExw",
  "key6": "59VnajL1JfkVBYzKoKBuTRY5kj1RoiA3VgFyR6DPZPkQWNZc6oh9TEocNwsfdaoEZMQ3ipFfwqe53qd1bUZy1nS5",
  "key7": "4HKP4djRcX2Xzec6xdrELL6XqsEsDUEu9L3RigPLb4Bs2qRJ1sUtCVA5pYYKMzLn8JsiQuogYG4h21WxprrShA6s",
  "key8": "5MxZdLsuRNJxGtjRA8N17GDrchq7HJAhaD2hWfeWcpSnFBcQUQkpAiGmkxL4sbCvacF6yNBH77UnewX2PvA9Rzch",
  "key9": "64HoPjSbq6pZN4BdK6AX1nEdL4gZcpY2r6tev8ywT2A9RTDwuXC7qY5yGe7XXEhaYHgEWSiRuZ3QYxRczU6tZqqu",
  "key10": "5J5uJnHFEKJu35v6xRPHhT4LimWP5vtMnNjjUEfhHUt4T5z7n8NKVzMPuAxybJuEwajtApih6MngmCpEXVv1xDAN",
  "key11": "3zcdswEsJLp5Q6qTB2MKaRiXGZvr4FjcZyybDioGDDZX5FVpuzHpe9g61bBJXFbLLtTdgDU7vfq1ZBhXowtTapYz",
  "key12": "3Sd17HeuoCRDHbay48YDj3XgbdG7kJQxb2zbq4YxFu7WD4aQfYy4xsnwDSPVMtFqu6GjSfkyMW345eGi7zUCQrhN",
  "key13": "25uW32WmBkY82aoxCXPMduvbupxXqitep36izGfkbaDUbrJtR6bSyW59MTKFHTZHwYLrfhVvWJcuuBLLgYHBxBkC",
  "key14": "V9BpF2aoCtUzZ9zitDDpuZxqWCBRZrYgmeuMBgqjDkTBL4YgR91F9BLdsiHGkKVoZJAN6NVvkmXvXFbg185bU3j",
  "key15": "5KZB9uCTxLsTHwzULpKuDrhGhqNouxphDzUHf72viMHK3sW4NRNgDGCDvGm5HZR1pc4LfbLuPhbqMb4F9JukPPKv",
  "key16": "3iUxouWUpCor67sij2NGHzeZ453WCm59dRPQxp7yLX98W4DaNod9dLMv3HiFAbRAs1LY876LmJBfsvoCi1gqJ5B7",
  "key17": "66d9Wxe7hAhKzcdG9ekp4pjGAT2W8wKsCsxBBZ4HCJoNwNqvi75GF52TZ1taHKZabHWqRQkDdruoKd1zHy974m8t",
  "key18": "4m5RF7y26jqtTJXiZZ2JZx5588VZQYr5iLsVaz3f39ySpF6qrg7hBztEbCuDNV7XyGCG1t51KP5FXbHgqrCAjpXV",
  "key19": "3f2WPo69hVibUVVmCypNnkYMcDQbvr9WYgrUWcfzQXXnNUrRNSi2DFpAWRieqDcX21qg3fwh2qn9Ek8EMciPf4dc",
  "key20": "5NFxkY2GasxEfRAWiYb5zPScwPXhohk1mbKGhMGqHUYSaqjWGxGcEEGSjC6akap2zKsMWPzCN1WrLmbWRdtfLtr8",
  "key21": "5B4voL9D6tEnteRZe17d7r84h4bNgJug4YoiFdeNKQgBjNAw4mzgDEyeHDfMWi8qpTD4SJmLDt3DEhNAMMHbj9wd",
  "key22": "2M5LRvMAubpvoMC59ga6PueG45ibXEJVsXf9a9fFasdzXCFprWJDs4kiXP3cXTHsEd8SCro6pj3pe2XSHuuiXFt2",
  "key23": "5HGcGYnrwRRzWHrJY6ks7MbR6Gv2Ubbepv46K2AozGBVjrSyT5nhGR2m7SKCUHuAcWrvWUZFxCxw5U8t9tzUr2W7",
  "key24": "62gbcc1QT2n14hbYbFBRwgyVfSUaPFG4zKUD64xE28LCNkjyo8aSwiWCVvDjK9aN3mJHeL9PNUdsbyAriuGkndf9",
  "key25": "3nX5tjCsYnrS7MzfmuwJpDS8dkPBhooHyWdZXLY6TFQg6JkZ5TDXFaFEKpgkDpCo8m5UMWNH4kBKQ5sR6CWuEWRL",
  "key26": "43UWUDLVLW2EcktrUy7DxGdthjsi1e6u5QirtSYqPDY22nBA24fkXPyzB1up3MLL1jbsp6uBq6cGWqEW2x1vdbBx",
  "key27": "2QGwaJhQMWakmeUxSWKUmdT757itxXQKCSCNDiWZ7utZjTZLZasbCYP6B6vU4TJhqrCmfkXhfk7iCpQdgdYy818X",
  "key28": "5wYCZLi2zCuzCU6EXa2NpnYavtJP4HAzWwx7uY29SwY6gksBqe8qJiU2D7Twwvaso7Y5xVmaNe8BVqMb5gVhqiqR",
  "key29": "5X9SNZyzu1KMqPCXkBsSD8wRskLGgHpQfLeFEjJWXvnvUGMALJfZiQmJrGfjApHoC7MFaogfvAA9wcRNbPgmh79C",
  "key30": "3GaiYTqDJnTw1dgsSkjAppmHBfjQvVxtPAn3eggrqrsprkbYWGy77mRfBoptwn7EVkKnaLruaSedipvg8qn6iP3J",
  "key31": "5wgPq7XJAZ4qdEFM3XiqWCKxrEJzTnugBESTLdmaz97pk2JMRPX1WUG4ErJwAvYGuBxuF3Htg5BzUbWXyKZBCm8r",
  "key32": "42y6NMFhytoroHNovZnUfwNLpdVzVEk78VmrGyHWAbqoF9LB38WsEFzD6VzKPPbbhVEzZQ4tmVtM47zu33hX6iSK",
  "key33": "5DJ44ahE7kQpCbqzYr2JD41QdxTsHKQnKZ25ePMJucKgybFuJTP9sWNTv9YdsDh6QSbjUfk9n6NUK3GNVDCGdBgp",
  "key34": "5AdnXwdQbHwrpHG3nqPiJNJJryEyQAhkWa8kY8T5Ndq8QAy14X2vmbNqbT3isJZ2sC5A8G1VW3eheYJT9GxQEKsi",
  "key35": "5QAG8df3sHeTePE3PNtAAgVRFNMuW12i3tQdj8Q27EL336vgTT73f9hD4wmDNpb5iaygv8zCj3pGEY9BYCmu2LLs",
  "key36": "2EiaYnqGuPkf5csevz5FAdVeyQYXjw6a5hyWCtcqNNUg65kSBjxEMDkVkQXPv2zik3juxpx5qYmXXgW3emWvtTRv",
  "key37": "3EjLV334c2bLCSesYJ3oxaoJbWTACqczFeb4QPb3jwYdAKug5Ea2jDPGKuBcT5W1cTRT5s5iamMaeaNETcHsoA4s",
  "key38": "3oKJnhhht1YzHGgDPsHF84eEkVhTgWVigRU6455UsTxhoQZQyYsTY6JcVy4ycRqCAmUtZYHyCnFa5sZbTGT6a3D4",
  "key39": "2SSdQj1i1P3ecmpWTZ8u1YszQiSrWt2CZPaPZMzvFY8AQPXRhUk4KPPiQfw6zKYtbCWd2bxWuYnwCAT5bMRiEUwR",
  "key40": "41hHgP36SYDTgEFPif52EM6iWeC2eAdu3VatU5LrsEU42byFY8GRSDWGCLLfTGucMQS6GuGucGa8KNypTzUSSQVj",
  "key41": "2pAL9bbpykBkDDBskuKjQ23oACsuaP59aUPahi9C88ZdbyTeCUByyEcCiAwZR79jvKzPfQthHuomKDW9kJpa4tu9",
  "key42": "4CW7Z7fbkZug4Kvjd1kXHWQybUSRTqDDkPN4ZpZN9D7yzT3n4RBAxqwnJbq6iBYTXwSBaG3r5y6emHZqqefMnnzn",
  "key43": "ZRuE9dSi5LopFXAkPMeSrLvdoRcG36zp7umqhhpRqBcoLujHFpyUKiZD17VjSbeoFFXy8oqARdUKz7Uy2GZf9XB",
  "key44": "51Y8HvEwPd52CuwBPHYqk9WhBpDr6EReA56TYx4arEdt6cR8UD3F77hPhr1oiKVrYK5BNU31bWpUZ1q76axfniNH",
  "key45": "47MfWCMZowgQt7QCm4TJBE7rH4UBHos77V1qu2pVfA5FgfnBS8SYdbzYbxp7xezai1PHoXECvkPqFbWmnVd6iTxy",
  "key46": "5QzmxVxxiDAKeE2ZYzhFC9hKDdsk1cMo1e1GQNb6nR7MKU5pkk3QcB1ufUg5HTD847JVaJ9fDUA18SJzLG5oZTjK",
  "key47": "3hTs5Kzetsn8ffAHmZzFy7pwExEYwk4mRGapPN1a8q28q6iBtA2mQZmFcMTUr21YtUpqWRgmFaipV41wimaENqcj"
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
