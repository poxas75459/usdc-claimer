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
    "H6M1E1MDPqhpcSVQxaS8cs6Pt6tqmQZc1MUb7Prp27MGdprBPqBoz9QNAXSAmeT75sjHKyA637ia8TRM8RnKMFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WywQJjfvg5ZbLSVbC4CvPBWiNEW5N5yUecRhJ2AKJJYx71xxf1cdFhwPYinCcQQL3saVp9zov34yZ7YbguJyQ6k",
  "key1": "5UUyG5n4DiA83azZLwraQGAQcX9Y1pGd8QZnmCFH2pXqqGVmH6VNZSGJjPznk51xbK98dELY1KCTZcWqMAA13cxv",
  "key2": "38cixmCR1ZaezWGvdpMdBVQPGLRajyi4bfxmcCcWsmAYgvRT2cfT5ASj5Z8LUZ1dokUsRg7GLKo6aHA6gQRb4jYH",
  "key3": "QQuGTcGEZ4tamfJN4W29WVMKkWYkh47g4Q7fJzsW8kH3DPtJhLj6yhodDk3CNUR8oCNHUgYMcQLgBS5s4td2qr3",
  "key4": "5eCnD2rz2JJupzgLknRU3K7ef99ebhtkwQKTU6oqirHKwuhiFTG583m9H1qDct9gbN1UCP5J9t4uuxWEfKsrHCvF",
  "key5": "3aNSfFNn4phww568AyvUvJjTsA6Rjm68L2yghAVSEzvdEw7S5YJ7j2ntjoE5EonXEVXhHrz1nx5tPUcrfm2oKVPP",
  "key6": "3YN5tMP2oartGiVuX7tDT6XDG6W9w3SiDbfgM59iR7QiJRyH98Z1Nf5zNLHQNnrC3w419ccghR56Pq3nfayuzveX",
  "key7": "58Eis2RJh3KgzwGchrjhfe42Vn35igNdWvYDXs4tATDtopMLB5o9BQFPHUyQ3UxEmCfeQE5tUSh718EpsRVH3cy9",
  "key8": "2s6sVdVQnsaEPyhTVVmW58yYaFtw56ChCPxmpjFSmCfHoZjeUuWnm9nDey432hAUSFDyA9o2JBZyWoJkNd77Pgju",
  "key9": "4VYCx5txDSdjBcoTxjnPYqjmCJFV9jncUJm8cBva2BwPNAwb3pCCp6fmuWs9qaBy5f2Pmrng9GiXZakWeAbVdUUw",
  "key10": "YYKPdrvDy6tqmXewPzZ8wUA1btriCJom58ofcpuZadFdPHvhS2H77UEJfYtLZJQkre82iDkPwFHbBYPLSp1rPsc",
  "key11": "4eMrwxdGic2mgdoZofoqqYdB9UTMULJbZnV46kzNfHasZoLgMNXNyfQU1BUgqQY5aXt1wC1g2KNCGS2TGjEZSJ7V",
  "key12": "4Fy3z1WF3Ci1ofUK4ne2BSTsu2RhxDNfxjjYL25FBgeuDLPmGzjkYsYYjNDLQHcmChHzJjJ2VxiHaXsjYCjWUeRp",
  "key13": "2uLCN7FgxDWFCjXamiXtxNAm5tLBD1ULvuhXhxXG9cideRYbcPPHcjvKYjASC8oDoG976FbNiTKpShyYHVguQis5",
  "key14": "4oXvmXVSzBtkfjdWn79FMeJbLXkQpeuSU1hrVk6ymYVPw2RGEdXgXJBnvTUWb7J2KXKG5ZSrWXf3wayT93vzYXHr",
  "key15": "58TSh6AW2616xDFD8tCUxemgM8q8qtQcwx7w3xRgnmoU1h6ZyT1qBGbZBkVmmN3ZNn7v3tfRXfptbV1kLbk5HUin",
  "key16": "YvDgws3XkBgAhVKaLyudHvDtSfscoA2zZXYuGmcwPU75FpXyYMhZc2wiDSVUr5zUiKmUKDVcdNFbvJpkvuQ18w7",
  "key17": "3B3282NE4o81qiQXcB76QV118MCApKFvffCWghNQGPLWdcetkGCVZg4NyyJoPuLppmYkYQTbvDQkFWEmBhaurrGm",
  "key18": "2S7dkoz7zJFeWy72KJACwPZuUAvYNn6xHGMgNoK3XJHnGzCirvCnoBdbCxG9KgUqe6JWetmDc7i9k9tfTt1bmVnZ",
  "key19": "3dSCj7Yq3cY6hE9Sfq42nzqEbrDzyqJvFHkeCTNgtegrrMqdwgMmYitpoR2kjax6s8BcS59FTDzbSkRxRg7woxmp",
  "key20": "2Er4ARWs6EAJvEXhRJk1UG74EKby6nXXYhWxzqfe267Y7WpFWYqLEhtqdgrYNq9sBSAwkoYov94g3mFJkofzV8q5",
  "key21": "iB4kF3XCcY73KVRWrFktJnfNd7cgwXNzgUbNaZB3AhCXMsrCESQgQrwivN9pi8vFkBkM21jSry3Ef1ceJ9ZY8qd",
  "key22": "5n1T9JmguXggCgDtyh5DBcWAPKQz2MAVAZXLcnta1yyipCZEAEZYGRt633sFzc6J1nmsJ5AcVQzuvLxBL3uqJxS5",
  "key23": "gvTYab7wvcWX2VJmXqpjE4RNw9Fc8RP55mBdM2iJLytHdDK1bPG8FKPR8FXKZQHhqS7hRKj5ojTMw2t9pwQgETz",
  "key24": "54QiPAEuaxFypS9w293EfyqJeuf3FL2tp4icfoeK613fgsASWVsN8r4z5n7VSvSpJP4pceddsM68HLPycQNpz1L3",
  "key25": "4sHVAWDddmL5kpktaQn1DzjzhsBMoJPYi9g9WUCj9HXJSwxiHjyEPg22RFkcrCCt2q8JgfoFwqQEGo4nLrB88bgA",
  "key26": "2v99QcC9rmiMT3Mo3MT6D9GfrWWuUW13Uh5TW7vnGUJBAUWBrUeBAqrP2tHADmnkQNQuKrpVuqkZQ8xsGsWKb8XE",
  "key27": "3BcxW8WBomvWWJoK7ADBoP7agQij2aDK78GSuV7rpRKTw6JzirBV5HLajCoSY9c2FbQEQjV49BQKFaDXG8MEGnSR",
  "key28": "qBGjC1kMjJxB78q8dE2hj41A36wa339mLD9X2HFV9VFfBruWsNrUBYFqK1sik3ysijg2KKUbYLa4F6acz93CW9E",
  "key29": "Eun5axJK3nmebK66vqhuN19SCYEN4kLdgPJbW6a37R22VqUHBomgBWtb7Hr2N69FdUWikKZBQtjaNFEFXSMjL7s",
  "key30": "3wQ6fvLiC6aD4UAnbiGjVHEtWUHDaEUTpeA3oXBNmRHQcHzCbAa3Rpmbx4RfXZpunRUiF1L7tHLShB2NLqUb6z1S",
  "key31": "27xk85Sz4uM6WqRLhZLwfZAbKcnsQdLBoN4UhxukbBfJbT7KrfteB4PanL9uA1syBMrDipEvk9Jo8hkvK6m9XRmG",
  "key32": "55DGyKZdzwJdovT9WPVBpGh5e97RMwY8HL3mtP84dwo8Bs6SqHnUiSLD1JgBF3oPrhvtkq1td4FNj4vyvJHW6pwv",
  "key33": "2fN6f8awc7Wa7bMvXDqitndFkrPjLc8WbMxg45KCKGtQUhZRVFhESLNCNJNDnB1mcGTshmQHFZzaQGVRgPmFywtv",
  "key34": "d3Vj8GcyCc84TZmpPuMCABGqJ3FteZSqoe2E7F3avRRH56e6Cph2vQ4SpA2qUFgY8BXtBHoqp4jWFjkpEgEEoCf",
  "key35": "3vcxuBaaEDArL54UGxq7byaYHSQbPDgYSmhGyRfK6nqkZGN3HfpFWKkFrGLpjaKQKA536AxnhKooF2QYxGhVNPML",
  "key36": "2jJhD5m6beqCFVYJQqemj8MfV7FzodUu7ThYqfz6sxNFurkL192QWRZk4PN3WyLzL77k5FJddSQUMAoESVmh24ma",
  "key37": "3diZuneP4JdQsYSx61P6dJdzZGBEo1yQubn7oxD9pudktwXx3ZBG4U7voB8KJEFSWjTSP6psnvT2zDvzX6FZid7X",
  "key38": "3y7gJqg88M9YLg78EiDSfGMk5dMNtLZHwwuBc2uRnPCz3SXmssADX4hJd255VMNCtpxaJvMmeFFe53j9X3CA1USQ",
  "key39": "2rY7TPXwYjsTVHP9dYtFstmcmzJUGbPL3xmXVvK7Nv7yhDdv3u2s65Nvz9brmaQj7reEe2KQcncoMfeZCWzsgo2a",
  "key40": "2dSDMjiv9fdUty4BXSFaTQVNzSzW6JhHWdW5hrcf1zCbikCvVZKw7tBgJaMQiTU7Ab8H8KXUrPHBe6wdTV7jv8eq",
  "key41": "4xx3xxJyJTxWc2jPLgSHssmH9gxWvg9DdoVeJnGLigGLt4sP49utxW6SfiEy8mW5ELhFFAeHZm3hwriCmA4WKCkC",
  "key42": "gFGRyrYHrbfbc7Axjm64k4wZMD6uZTPpuidbWPnPabta6LYBRgpVjEWpQaR9PpbRT9F8U81KfpWwpKFneUuFMX6",
  "key43": "4awUgRfpXPkykJcA2EoSw76q37tw4HL6WdP5skdvXKbGW46bCCziYAwJhHUwKhRtyeDPRe2e6aCHc6QmaATbECxk",
  "key44": "pbVz4hUmgppzvNvS5FZf6T8a44b1bWi9FPmjojJhmmtoYCBWbQ1NCrstwGxcpyH9XPW457PDuRYndXytkKZvdy5",
  "key45": "4iiw7QJn3WnQmaCEk2gA9oztUDo7wYq3A6KWGPyHSheNeKoNJN876wBRshfatc1Nc9uEi8a34vnVYGY1coyHhMXg"
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
