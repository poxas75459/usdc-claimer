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
    "2HQC5RqEdd5QisXTgSSCJjuLLqjhPpsxii5sazmd3sSyx12dMEPpLv4hJ6iSp8xq2fi8Azf68W7mTniY38k4HFDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JWmc42e3m5ZzeSoRsoX7EoP2TwhZiZpAavsNyNodt1EuJfLhhG8QzCLUkbe4LsE4hSDhhvvwYXMtt3jEGYi92iJ",
  "key1": "4gZAeygcUtrnNqfQnNd6BkUUrBJaAaoWfDbX6HWrSrMmhZDHbd39QsKyu3sLbePMJHfiABHARGQGMRWk56Wb3DZ1",
  "key2": "45eGnA35vzGG2zag8iKrC7pM8KvKdsgXY7nM4cyWfJyqfnSXD5W84wjXimCdr7gMNPGyrStUzm8myTPGayT5WJfU",
  "key3": "4AzFwHzat22TokFDz3d5r31Gv8rjXjV3VZ61pxoSM7kTvozmY1V7ByEJCo6eXXhFu9iqfJ9LKAxD5q9GMvBKhYko",
  "key4": "3KxqWVvCd1AfDmNDXEYqHoi8hbWiZJEJEL6xNkvrrNLRsHJ7vftkftcRo755yGvT87rrTu4p5BeKrFDz1UNaWWnA",
  "key5": "PqiTc9wQ47T1HoCNetSWXdsM81t4ovAsxvTTEjCUoxWYozVhiJpMmANKa81Fxs2HSgv8Kvg55xqKt536XZUZ8oR",
  "key6": "5GHS95nhLLvUGE1SP96YyK4zib6BAcMLLnrQwAwTTTguUe4xth1R7YicX1fheMphfYueu8ye4hhKP6Zb77AAHe83",
  "key7": "5AuzGxRFf9vUWz5F6zL4bgZXeSYurAh9GVRKFY4dqijH9cAgwt5kb3FTuKGnHzanTZyYMWDB3bSeaxaqckGCjzL7",
  "key8": "ReiyovZkDwLQHu32hZjhjJUWCweDbVifC1m33xX93KG9vXG7pmFaw5wG8AkTcVi4pqrspLH5BU2NWWhL546RWW1",
  "key9": "4FcpZHmqjGoBVToLhsUPLZeXJWGZsLwJq5oZx1Lenzy5vDKRXvqWyKbuD1JdjeicbfwReWpyL7jNGXw5gHgbnizn",
  "key10": "3GNNXSZ9G9gJZuS8q5wa5SgdTxZczsdoxHt29xy257mYPSPTZUo7UnA5oRraLxDkxS1sGL9SAauajpVKYEgU4LL7",
  "key11": "46mttzY4g46yW5KSyG5zLyhsHcRdg4xPvvQFnen4qb9nQB2Ud6LZ1hVNf2mDZaj7XjE5Fr84mogZWmCwkbkEc8cQ",
  "key12": "4SWTPQQoXhScXomy1P1ur8woz9YAbhrtdRWGC8kmntUdQJyTYzD3DFpQC1Sr85vYJnhbVTJPPs7HeBgKupYH3g9P",
  "key13": "54q9x9HNWDP6tVYmziiitQBSYHoTNF8p9DhhS3uo9bigGEBA6pL6zVxBZW5rhTkg2x3eaCdQiA59QqP4FQ4a4JcZ",
  "key14": "2d5MGKzVQib8ehkgczND71ZjgrvS1FrVVsJnR6BMFg28fUYuhv3zWFXW3EnysF2HnReFQ1sC9P5EGAddgE5csqM8",
  "key15": "45xsQy95eUQPZdDdUT29joUrFccoxvDoCGLh7D8vvBTA2UMYk7qHfkitNAG3aEoaSwWN1h1NNRLMETTrURxLGMAW",
  "key16": "5j6NRg3A1W8ArxfBUv2VaqVvXB98hZ4bDjz3Rh1z8WeWPeH4MneybKCH9zNADK8a2kXscyNfe3mj1y7JUjESDmzj",
  "key17": "5BkMNV7kkq5rWDDLtT1e9BkWpxpDDCzPAHwu5FqdPM3e72rc7yH1ucb9SwDNBUVj4DKktHJW7AUQrDj7TTVCuwo1",
  "key18": "4NnAAE8GTLyGW14d6Nd8QsFghkkFU5PMUYBzy1oHZkaDuEgTGkDJNRNoxckEsDuDB6ygYqNs4KPaN7kgSy7FSAap",
  "key19": "4VjXYmyZGbw65QLnsNoWx4NDRqXUnk2zyeVxa8ZWfhE4oELZ6YDALCEpsqhg3Ysga5tH7PprhY1Vzv7aPfmdcjS",
  "key20": "5bdpSFESwTmfWQDarPs7K3dWLix7LzZT141z3rVfjUNoDr69nPJTofCpUfdNjG7SGkyCjrsxgN5GYmaUQPX1UNUW",
  "key21": "3vX5gBLs2vLUuwLkapRgqGgNX3728C9WmdfsiYHjXZFk8o9zNntz5ZpzC3ss8kgkbGFhk6pzPPc6XWxaLx2xQmaE",
  "key22": "WCA5E34xbYuW1Tvsmv5mJWwYMwBYjhbkwrfmdfEMPEN5BLxSCX5udKnHYH7PoSjQ19YJ8mKXF2inc6ANTUvrJaZ",
  "key23": "3ZBCqJw9573Gbpz9DjDZ4Hei8rKBpe56xJAU18DNBDxmh9FHL2Uw5PTXFbWanmGhrAfzfEFMXQsJrNRNgmgLKmpC",
  "key24": "LWhR5SSnthakCFR8NR1s8GddGXPzpFA5dwLgkb84vFhYdP1CcJf5hGDSNo83mAeX63hbkBry3YJaQvK2yyCgdzg"
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
