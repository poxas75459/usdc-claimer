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
    "23NvoAq27Htb4qh91CPP8nBdNvDcuxJcEHS3rb6dGEcyZwzKmrnGLmZfUCQcs3G5Ab68yo7iZ7kzUdtRaBc8WyzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ncjUTh67KvZ6defd1ui6pfb1Nh7phcsLgRqpSN1NFMoBJcar536HCg26Ps2MUhtKTMq7qh5YPjJf57FRYf7vt5o",
  "key1": "2GQ9TtMmvwachFq5VV88488E7zJQ75qHYNtRACQNayi5UwD341qUurugLcD7ZYySPrw43T7N2zRcoXRdXM2LfJMb",
  "key2": "3GRawvU7GGv4Crg6KiRt7QjWx8pP7SS3wNZuBRCsJKQ9NAedf2SZgW4dXpf8t9rfpJwvLTrVparkJAzWRgRSHVjX",
  "key3": "65wyJBRKGQbfMTxZLANaCgnpsW66d7UxMwvjdo55qnFt2f1mqrW8oobPYcJT71iCc2Mb6bN94JhMw5HsWpDqqLET",
  "key4": "z96Z9cgVkB6qQbxNjmmuPoRTbCG2MmgdVSGbvYFtLWUXejV9WQYpoHYCiEqJkxtHVChDNxT6XEk7CaNJciLfA2t",
  "key5": "4vbu5ETpkDZ9CXBNr7tEbyBc1zwAs7adFpWWXCHfs3WimAiipWNLMtarhkhCeY7xWvHXLSapx7HvxaPUaFrshLKU",
  "key6": "2QdFsmtLKpEmnpRYLU4VJhGdqkivEAT7tT9ApmmVLG6Cxs3JSUtyg1VGfdYx28VFNQxm6F2Yvdr79iUXFeafTcZk",
  "key7": "2cVVzqRBat7MVE3adxtvcRk9A3QPVDDjsYpZPmyeQfNew9aAmGDBkLG2D3LBhEo3rf2Zdk77yCCG5uMDP4YUAo7u",
  "key8": "5Gfy3hXaqC4YXATdZoQjezPx4h1V8o3qvYESszoJCwnssrJv4KQ3sdVbVkyGuy5SF8ubCLrqQN2y99VtwxHUAUAC",
  "key9": "2yewfAAtFdHZ1eQkEqv3ARBdkzfuggv5jHV1LeNvF7VhcXgK2o3noyuSs7jvdYXM9uijVpT1e9Va1QVAcM7nQwXN",
  "key10": "4PR93jhDAV4JwXkTWqqDFahnpwBeaWtwanZvyzHDzu8R8rXEPE99bfKaTvLxDeBymUjKboWqjTofcwqmUWF2cQZM",
  "key11": "4WdNfSLu1BhUqWQZgZULrutLDYXyaa7DbW5DKxoiSAUSb7czSnZVwxo2mmFsPh6eVJ332qxTavXRruj421ak26Pa",
  "key12": "3cCjsTPFBeK6yPoN87Qhkq9iyNGpdeuK6mXNJyYY21z8LNVRy11owqeMqyX6gKV1BJGrJSz9sP2QXvqq5K5VAdUa",
  "key13": "4V3NHK5sbg3ENa1yWVzNxvXDgwewz5qJKzCp5cSPBUAV5dXyCpqRorz42fDSYwkMggn6pSsmuD9EBTXJSPF9bkTD",
  "key14": "2a7TkRXZJbtJr8tCujt4rFNbDK65B7HhfCg8e2Satq8ht7g9o4sKVFNMKGyVSEG5FPvYfhDbXNT6F6ShdF6L3ZCh",
  "key15": "2yVDSPFEHXsiHXYrnzv4pPrNym7akhnWkj5iyv8sp29HRkRX9Z2G5Sh18tV8yAbFiKyeE8fA75PogcqhydN4BR5o",
  "key16": "3yLZsaTy6yPPy3m3mLZ7Dy9n7q7TfkVY9zxw4bxw15J5nyf9ME88s97Ufy6XwByZ1NtKnNBt6355mmkYzCthf3KE",
  "key17": "2ZBM98rDr9cHG7tqbdLL6463vjdPbLS8Ki3Yx2tLCkqjqHZiPykdTNqQgmohnVjkrJ6r84AeuzhFm1ybPGhwdR8Y",
  "key18": "3GZs6yZVx74CwrUtBhBPRZqox1TqNtpR1VZuKt3Kdj9e3zaECRDZbftj6dJTtkrbKvXCh48666h538t4ACVdLUjo",
  "key19": "rGsU56wdDDtHFt9BWC8BGKMp9WdNXhqhS1VoepXznzEJ2hcbmK1d9a4sXnXQDknMyFQcmGNAZfRMWvsEu9DEVUK",
  "key20": "4jceUuRXyesLTx4mY9ziduMaVMw74mFerjj1z5mjaThph9nwMiGcuVTnzHT3haHM9BiatXmzPpsA3raugEuf9jD1",
  "key21": "wBSyB9YS2Ava8pe8CxdfosYcU9R7JYQKZPmMzmL2VWxnPYuN3ctbLjbcQyedAsxUy4YWHArEFtKEMy4WwZBsACW",
  "key22": "4U6jSPkKXv2qsXimmDWV9nKukvEFay1hc3iUw4Twxs9kzj1ayHmVoFjFhxt9x96hVFjkgTTdytccnkB5fSZey2P8",
  "key23": "3XhLeqrZAS5Ct5mDYwCsVBcXK5i3pXNmHKXXQz3Ka1Lt2akGnRUQkm5Go5nZZd7szgR4eqPkWewz2NUDpTCbhZS1",
  "key24": "2QBhXaRSWuZx1Nh1A98XHPSEma5hmaJn6z1NsJKPeBR3ycJo3eye5mXavWcyDdDgt326oieu6RvJKuUb43UZJcpb",
  "key25": "cF4epMGomwgpToinH3ZAeBf3sPbL1icmtfK8naEL8Xfy9VtDeR9nWrq94fyRWfdSm1qiqYyPju3MKU9SnoB8CH5",
  "key26": "4ajjYpgW6QNJb45Tey3BX7LKV8uWCuq8PN8uvJDmBizTgZ6pmycJJGSW1HRKKj9JJcKUrhjB3bEV7NRgYwE8osRV",
  "key27": "5aiiFjxfGEnGr8Q8mmSD6DD2BCoVASWsdmTJbEJxZEPHrkqoaBZAHeBHotUBN9JeNrdSmjSUdRkBUocBtKcqBKq2",
  "key28": "2mNTSoiPNLQqDwivBo7Jpn4r9W1yDTgUjTDG54k3zev7TeZihtbdwu2WYctqtgVgnaABYc26ZMBJAae7X8N3bFrE",
  "key29": "59zYW9MrLR8zHLa2p1Naz5hi1iyPRtRy8PecNrKmHr624kU1JV8ndpD23k2SvdiaJjLbKCk5eMgNX5chEY8sSvgw",
  "key30": "3yML6FrK7tMfnuPxvsQHvwNgTXBCSTTGWqFnPuvs8kmdYswc3NtsC4VafvSvMYJerMhvjt9iLMTiGKcay1ynKPZ9",
  "key31": "3koHaMnnRqbjrXsHSDyLPQjLX8C9a4cWuosgb3ukNU1cDDo1GNz1HYHZUVyVnj85u93FWLNgBMjs2SiDYSMdZSqd",
  "key32": "5q8CZHjtLz27GQHy7b1DdKr2F3EHFWnTvoYV8hcygZs2B6LwMuxXSGTSRuDwRHEW7dyZHj1rGnEZAJ8yjSUfoMEA",
  "key33": "5m18DCZtnBnG2SvwPXxt4RKnFcwR8EBxTohK67ZSTguhRCEyYQLArfyv8oaWVxuBJ4hXBbeqD9EqQ3J7JDMVbsMU",
  "key34": "5RNxj11WfWrPpMuMnnFu3zTt2xRMBjRHL5rJrjmqAoshKPugQKVNa3419MEYnLc2sUXYvviuMCbB6JixgzSiRX7q",
  "key35": "55DR5ZA6YVguLgEL9xKhCrHq7psAbnWD378hzd2ybL1Bqu46ARTL7VM4FdutQ1Xwxn149HFEx3e3XTrtu9dacbCg"
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
