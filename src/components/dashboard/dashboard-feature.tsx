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
    "5QozYEDnVpe5tv9vZLnxwUUmC2F4C9w1ym3DtEm2uJ1oZH26W77mP7XqbCm7yCnxYb7VjTnyq53TCRkdbi9DRbt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1rnPjKKDjZ9vv9DeTZMtakNKA1pgbV3N2VdwVewmTe66wZ53hzTWajnbXLmTszRHABYuAMNH5KLozkstmewJiZk",
  "key1": "65LoCw7hBFX1uBY2vypbJzy3GaJmGBKK7nBf2aurMmH6N2aD7bnPe911gWK3sL23y7xSpS8AusfNkrEgGgB31szq",
  "key2": "44ki39JQ9GKStB9VAAGTgSVNrXWZ8zrUGS6MKMbxwLhSPf1GMJu4cmPj5nYGivp9Z6uDKGKsfY4MAksuegMKCVey",
  "key3": "4PRksS3MwXC1FX8HAo4Y55SxRdwasSsnmguwuZsXQgxjs8MFU8nUi57VXv4j9aoPe9791PHpQ2d8aASDCUdHYZPJ",
  "key4": "adDXLiqv1KVLUwotanRmdMVxmvR6C27QW5Q8RRYr94Xr3JvER6XT6vNnZjm96P2Rr4AiD9CoXuKbhpGDNJZTo3m",
  "key5": "44sK12LgEqaoiyGQDq4T362413Fn7Lkrfkazj11FwpQF4ifhtPZZikDzSogTJoJfWu2jxftQPD52UCtpXWuZtnB9",
  "key6": "5X6FJGyJ6DFVLWnCu9ZRN6Wy9PngCNKY4eVG1W1A3egXRyBEvJ2ZLmQeqEQbh9zLL4Ye5tuboDJmasj14RbJunVx",
  "key7": "5m2ymGCVjuMhrfDdphA5nJqABJzFEbH7mvUZ5yLYjx97ksjdJGLFUSPGwCPwBwX1cxKG2dnTFhZ4k9gfDsHDowF",
  "key8": "2z6aBJxEBLZFC3pVDMno5F2DTkhPsadKi58v3nyRdW99qDYwQLk8Ch6qMQJVUEQPrrjiSSs713uJ3GY5HoBTV5Cz",
  "key9": "3Vqwe98DkHHmiQT1bLuf9umfv9yARzZS8Adf77hEDdH7RPEzRBKwdtUpPCxUEa5uedgJAHY38wvHEnjfBSqarhS",
  "key10": "4k7ezZu4pnKYgwKTkMeAdJnFKYUT2vYx9KWtF4cvssp6xJf38P68GwCB7etzF3N97X8sScXPX8SL3r3rtevFaWLc",
  "key11": "3sMVaW64snbwVSgQfe4mzKmAgBKyPMVwPqWEDHQ9sup7EtLmqP3QYVnfdst5i52jfqVD6yDgLa8ZLPJHKxCU3qdp",
  "key12": "oi32ZXYV4v3ewJZJUc3eDCLvKUyM3yz7HgrkzL2j4qxe2Nj54xMx63gY7jCBNfkHtH9tztLqFD25s2pR941NKtR",
  "key13": "4tHN4EWRxtJszHkyetkMi7VBpXRBc9qgv8kU1HBGgeQeS3iq2ZG5PMo8jG5Kh5Ru82286YxrfDaimkdsvpewisjD",
  "key14": "23Y7NRTVKZr1dfw55Hk9xP2T5vtydxps1Daoh4LoPXa8iKKHYtwEiLCPVKuHGMDiwEsEnWeRR3jLXnHfgfEE8GRa",
  "key15": "3ykVu7ooWcVV52JAsdkDUVDp3dQ8sL5aR5t9EChMtUfhte2GkFjUxBJa7DwvBAMXj6g2cgJfAYGMwLsxjf2yidK8",
  "key16": "WkPFiXirjMonUgx8AjW1xxJSZd39ZuMTwEfhfk2PnewfZaGYXevtKdEJX9eMvDZ2pF4RYVP7J64tBoUm6ii7eyn",
  "key17": "3e4HVmjbW3tFt2TVqs21Wtdgb7sNHNUKesMAKSLsaj7o69NesS1hL94md8wMCLUbkP84DfBPAGtxhjA3R2m4eeoJ",
  "key18": "sB1gQ7rcHGCkhUz9BHXZLgodUoxvFJDFH497s2cgJr6dvS2uKAWprLnwV1MjA7mjGWYEVSQnEErXM5NktK8hRtZ",
  "key19": "3e4Q7rSMpNuWv2h9rVTpLQkwqK3SKuAER8xPcDuXRyZKq947y7ryzdZxAKBchiF48SF9n2eqY9moYpP8oCQVy78i",
  "key20": "2iyrCf8Uwapp8T9jRFPyEN5iSbTZdT3MYVF3wtaLpPAhyY18pVQwNsmhtXco5AXhq4mCQvYadjSFeA3zFHQEgDMz",
  "key21": "3iWTigjpk9kF988PvU9gAjRTikZvXB12r7eYWx79GuB6NqJ4tSeCRbEDfWa2bXe1MsVEtS6atrdG8EFGPk5bjVy9",
  "key22": "3ThJGYzybpsLxGyzcbswVYHGytbwKTTZ91KvGPAHwprAN8ghHnxry6UAeE5TV6tzRRCR9253XhauWoPmDUS7fsh5",
  "key23": "Hc6joatdQnuYLihk92saj51ipWo1NEwEcChVnm3pA58kqnJ7vf59jfsnfLyy62vnrqkaRravQXov4eQvP2tTYEX",
  "key24": "4JJMzXNGNCxayBwmBmjWutHiPD2FLw3ksM8eAsmyndaq84rBinVXD3fS44fU9bHATvixuL3gECk5cxRU6XJuDA5v",
  "key25": "4zHTi4eoHjh1R6EPdASgnFipVeBo95mKR7q2WGokLrojRi8fxSKvZgCyvzacRv8m6HZBFF6ayhZwGvndUzUjhdKf",
  "key26": "YVbX5XQkR5zDFcuvzdGs3wg6qFvaJ5TqzizfqBViFY5HnBxMvtJoiWa2qYEaXEvJPpWpSCJb2GPu6MVrGgFR1fS",
  "key27": "CyKHGo6hSeg2Gvysys4bbsbZT72nFYvyLxPvQwbts5mSq7JnFtZ963ZWZ83rAKe86i9Z7KBkLXoR5hPpwyxQF67",
  "key28": "WVSvUNQotkPRsnaLKZsG4X8HS7MgKQdPS9RZAmxcdiBbuRseauTfS61FYgXkKLg1SuZ9aS6BowSn9WNPjaMHdo9",
  "key29": "4zBfBRi775M8Kcz2BQVWuALWWLn1LeCqhrGqYp2gwoyNxqW5R4SBiMqtAivUYS75Nv5YAEsGaG6CjtG9yFv4LkL4",
  "key30": "2rNUeJck3FYtvUE73CkPdgpjC5kzpuY8Y2DxX84V4Wiu5pBFLEGhzPANwwEySyAR3CRY1V8DyipkygjJyicZGpeS",
  "key31": "2YH2k8iqbrHU4FyrMNRT2GWYgUS5i5KP4BWLiUx4DvMkMzKjRXzp1CKr2J5k747Fx2eeEeMCPBGJ1pEDtLCZfzry",
  "key32": "4dfoCxPtHf4aLFXd76eF1TMxceamaNL6Z7Srzwyj5bFtaViHsnfj9SWxVbxc7be6MQWdCkXimDm3DUgoJHwQFYBb",
  "key33": "4hXBSmXW5y3zBDknHNtZtdGUbUM4QzSNZysVKrz9T3DcHGC9cPM26iKveDGwxmJYRzq4tA7xBoBCUUbPkLuPozCy",
  "key34": "3TAYBc9ntSFWRNPgqZ4D5KdofCBWfhn42capjAfK3MKLXwAi2ebmLztQd6ktAWe3DqDgwXFJPcn34KHK2e6semEd",
  "key35": "5WBYpYzxxw4hdmsG7d2uzhpTuKKTndX5gsJzkqtPGTb3fC1r6MGZHx8XWFmeWs47xthtXWzEcU6uN2ACNPJzsEfj",
  "key36": "4yPNJMYij4eVp9J8bpaxMosZ5tXJ2oHRGZf9TAS5jEXBj18p5zeZ51bGhrpa2Po5JRo8wYkwZk5CjPffhLtHgJu5",
  "key37": "4mjB9GCazrxAb7CbLArXNYtsiA6bNMgnwZUCdnYNSpYnhF5icsc8dj6Y2zgZdLi18GGTiabKaGCNBYbsAPnsL6oL",
  "key38": "6RonwzpohBmNzZA9JpPERYR9jcSUw9EX9YcmB7U8NSA6VKvDHMeH4bSj2s85WrymA48uKyY6dFJ1BRKbjwmPeX2",
  "key39": "2VDeorzWBAFaA4LnHfpS6DacGGvpYZa3ViXk5MFoYVnZb9ipd7sFFFsvgj5Ti9yEoRxZ2q39VZibPZ5Y2TW6SoUW"
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
