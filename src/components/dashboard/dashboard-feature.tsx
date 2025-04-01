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
    "2PTNpoxQTEJfkdpJpkMDCkxajoFAFESMgAiFPCMgFhNQLquWoZ3tnsb5oMrJ6Ygou3HtjxjfaBM114rjZoiNBNw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pWwr1KEBQTsWsoZUuXEVnMKTZScGSRzkEwAg1yc3YRXe2AdASFQ4GG7jD8NocQHtCZsgsHjFA9P8CRNGJnkQaWT",
  "key1": "49MUaWMCz3RrFTjAmAgN985GpgWqpQtj7bUQZK6SiuuK9ifgM6jpnaPB1yirNhnN976ugM6DPQYqpRN7wCMwrFuS",
  "key2": "55QxWPuipupkvMnNrYc5vR5UWsc9uhaUwaHZ5JjsJmLpNWv4Cwid5BZppsZzGABBe2TUAv89KxtdkKhcfvdbdeRC",
  "key3": "2GYjAggBMqgECgoSCAtvX1oWRbayyCSyHMsgzEw8haXrLNeZahzSMYmregN97f79ifZdLzF8W1AmikyJmiNbWe5P",
  "key4": "3St5Zxh24f9cHZMofSUoivQUgMt39ENJ4HSCWeb14SXgusAUw2E7m3QbADrukxySMcmiEcwLzSuVRsEZVcjXD3zH",
  "key5": "4oTwzBs7pZPBYbWhX6kXADHT4y3Kb4Ve6Tbbw3Q2YbChoBJzoNGvcJQ5Xn2Tyus62YNpSHeSSRen3hsLcvWoMWCK",
  "key6": "3bYPDWQemJTXc6J6FB1ZzNdw3JbtmzP39L3yDQXocX9Jwpb82o6CXSTpAFJrv8Edu1NctxkwR9pegafu71jAsQ5x",
  "key7": "5uhKdyJAHgKQGprv4GRYHXaBZkmSuKW1FS81ibmxpMpNaK2rHLSqUZ3VJVNFZhj3jXwkCtjTUXTxw37ukKR4YubY",
  "key8": "4EN9qaWAcDFiChX27yUicrTuZqCipynqJgnhPg7RKx7EtaBYxXsYc6pQuBNrm3nkm7ZHhdCT2wvsL8CEX5geEzG9",
  "key9": "9PdshBS1bHSopCcgm1XfKHi52x8YqCcJezg1RDaX3pbzDsmPLWFaoezfDiUohW9xzyBgs1XpsZPm4NaU8gzyE98",
  "key10": "5WMcba5ZbzXcUZBVYGrAsakEwmYvyzQ1yMy16sjwJYjAM8SaCM4cGSDvrt2VxBg1CyJcsTRJ6BnkH2TxPDLdDmd5",
  "key11": "5vA7K9Hn3iZbEWYyFrgUcMXNVcNa9Vivkha6BjbzRdYPiH4CbEhQKrju1VTj4pC6xtX7wMp1rPf9YGM3A3u4ZyMz",
  "key12": "5QkbVphwDd824CxDRgJzSATkXWHtXTnvC3LxfqMetcaPHCQXYjxMjc6zemAsHqM1BrcapUZfcsDtJXqkC1ARC5p8",
  "key13": "3PSVfN4r32vPBzrmcxEXcTYceWEUkAuQ6wu6WDGa9MowTi19pLX9RVdsafC62Qx8hfKs5TQALXqdhJdfuVvTMkAR",
  "key14": "wmJxDpJAWW5iC92meez2rXcWYEpa2yFhGo4JKmtun5AsoM8nhDK4dsgWi8nCZyG2Ag6WdRgYkdQdZUtzuwszgxF",
  "key15": "3gRfZtct2Uiqbp4BnJBcZTKqYfT1nmUKFzMvj7bNgQ3pbvRNSK6RHJUReJXgqeZpVJWBXSD18X7f9w3Q7wyyFJty",
  "key16": "61ARZ6Vxkk5sXvVyQs93MJppU3ySGEGppmVJBu87PjZ6H4iMVjtaYg7GZPsZ344UajWm6DxyutrUPk9yVwM2NdYg",
  "key17": "4K3HjZbLn6a6cEyRMuKiU8REE9cvwmCHMbbPSpfL8Sg5i5NL8kFjX8xnqrvmA8z7h6wU1XumSmgo4HUu3jHv8GYB",
  "key18": "31Qw69PWCFoqKLu3JJvZZFRe1BqBX7EzHRxrJwsbptCVNKoqppb4GeaqYMyQpf8We2RVbPRthweJnv1QvJ7cVfg5",
  "key19": "3JZY8xQWnJAui1GCJtTL9d3Z37EA6EfJ5tGTbqhyArBB7quWYLMCpz6VyBeRXqg4G8gFsh5ofaoMdHGeZKvdADsX",
  "key20": "5bwfTK91pM5hgNwFaDmcUTFvJTxzUKHH3JVw2vwn9HeNM37dpvzpT6yrgabfufqMkM8qXfJWr2dQVyWGAmDKRbq7",
  "key21": "5pdoPdC3HNZmfWdyqKt5manh8NjHZub5CdTcCC82B4QqK1PR7ntTSLRMkc32rRDL92UPLyb5ALNyEsA2XE49vfTZ",
  "key22": "51TrcXjUDMCqgyrK9XcWGwncZskp5tnRjbWVvzVXTyyso3MjfkKBb2MtKEjV6LtYPKJNaq5WYCHraD4vWSAF4sYr",
  "key23": "2dpDdUxQrqKgY4ZAkKr7krsQkji2dUs7rAaFo1115DgxguACeRtdWnyLJnZVmuB61xyK7vj92h153thVafXfJ59N",
  "key24": "26B3NWCkRZDVbB4xFj4fbV92GGA7UTMDmR83hvJkxfY2MmCD6dfcCHE7CXUpJPhNRTqTU5ZAr1qaihFyKxmCh3kX",
  "key25": "4U2i6QLcYxdv7obQkr6DNYyo9Hkea1ZyuM2xUBoAeXKFdEamGZnkcmYeJnRVdcqrxdd4eJtPUGL3RJyuBsRUcYNU",
  "key26": "ep6fQEZp1KGzXjhWsYun4DvcZU4fpuStXX76LAws11cj3kEdEeCsYpmb5PCSuHTWje8u1kg75CKmHBN3vqPmPYj",
  "key27": "4svYi5uYQ3a6p1PdmRGorJuEDhB4fZrwoiWF6eJSBM82qRvJ2HtYQ5LqFxdwBZuk85htCoQG8QhBN6k7m7Ug6Yto",
  "key28": "4h3xvdjYVMrneZuf1XnY36kVYwFKRDM5Lj1Jt4VdU9iFBSr3dJ6Z9tSVWiuKwtoC6qPKjZxjEfsH7Ce634MsJ2KV",
  "key29": "29JNWKhfRnvRaZXU1Ym5V4XNbhXzEN2t9cufJmZPYXe8mLFUiuBMBgPZK1NgC36MhGLN1tgr7U4ZF5neVQGvLVMQ",
  "key30": "F9D2PAYAcfENAhCKdCfUkEF8hiiZPaEnBQCyRiwXYxNY1bg6hfaXZEFLgybQwUfNf8sYtA1FkJ2p7XrZ2p1Cmzv",
  "key31": "SGNCX5HaMf3Afyjk7gXrPQdMe25xzmViY2rfg9mUnNLzdPVLr6EDWxGyKdKxWSFHboUTJ7YKmuwTeMsuhVoLwjJ",
  "key32": "67RHYTES6higPBbjhE6VcRTdTNwL58JJ5m1jPE1kqiNnCNjbSigssM1vyVmoDj1jBrHSZcy1fDrnxVs7UbwnbNrJ",
  "key33": "d5bDxqMXrE5wDXkRY9ZgLKdK1LMyfHn5oTY4Gqw2oQ6xxrtfzqENbUHPA7DDbkXT9tjSp2C25iDJVbv2K3DbC6m"
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
