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
    "2itPm1RC6WCFFZn2zRPPHpHf5sLaeroEb6o6eUYYL7kMCwFqgUXgrnd1vf3VbZrQieLRrojsLpXGp24mDaEPKbV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q3qQNXwB4owvsWw49ZUj1v9srgmd8A5fsjqr7VXLezZpj8DdWR9dxrx2eBc6vgudtFdRwAcNuMnoGLz2Lrf41PV",
  "key1": "42iVsxKqg59hZM5eJtG8tMKUJUWbyoLA341kA3WXWuT6LcYUbSfDBKGUvPDYJz439FuWGii9KFgoMrrkYs9BpMax",
  "key2": "1NvMocQ924xSJeNBPReg34Lj2hBH2HqNmeFqXNj3n6zq8NMLahtGRAayNkG3DMTjgmRwe1DZRgPziJdTUFneSi2",
  "key3": "3Aj3qz6xrujHTvi5pVUxc3zxBMx9S4iBjJkWbyEeBGTemUNapwocaWmpYiYuivSexiknUhspQfS6Y7y6UQjLrbiU",
  "key4": "5T2ZqnNFcXfKtJoZbrvcMnL3BYMW1o53PW8ZtcGqyueaPk3PAmKLh7vceMePB2V41qrW1vqB9nBXBqyYgnsZfJbz",
  "key5": "2MX2zGxjKXc6w4fs6y9EGndVBrLdrBHeB1xoM6XJGrhPsRoW8Uu52BJRu6JeGhNw8tbQ96Gr5Vcc6dr665Me8nWM",
  "key6": "5e8RyxSLL5k1cDf3SdfbTHS3ST15f5eahC8hquNM1ijU6NCtVkx26KWa7t82AJgVAJHHhMt6cPdbgLskBrVSP8DQ",
  "key7": "qcWLDmqweFuEhWF69wnMCjHfrH6V2GDqkxRqmwBPfqYQbnHSa2xuiNfEpcYk9PFxztSLQdCTXdQt5Q6hfV2ZvsE",
  "key8": "5b4j7RD1i7YkWDFnFUVsF5bA7hhxQwmU42hfhAaRhAgqP8bQZwErkQ8dPM3zfMAShDd73S8kCeV3TBoX1KSWsBMK",
  "key9": "3TbPHPpAtVZ58cdeWeiPGAaL6bGwH5VkzKQxgxXtH7xgLSgXkNfTBmUa79RFVb3GF53tGfEHgYVSQi2tw7NsEXkr",
  "key10": "fqd3HLnDtUzCC8r8RzT2JNVKG2cL9Kss7enyyGeVGEgYU5TPAxXB1qdZkxoZLvR5b6cLWHSq5C4Y5nKE7K2HzsK",
  "key11": "2bc1iHECc1EmqPDLowLeyHFTbSWypa2h9c3UnbhvVtgYtbVU6cc5uv4Edin1xEjYGvujBGXFsUsZrYPs4Mu95c1X",
  "key12": "2e3DLLUrhEUvHED5jPdehYvWawyRmVMEjijT7utAKD2Q44KnshBA2BzBw2EqANmQ5SzcEZ9fqh9r6MmYfed5a7Gb",
  "key13": "4tibdey43mc5zE9nBqwz6wuszwrvXQm7fayL4E5BjM1NEqT7eR8fqCv4BJ7T9GY9BueEUjRbNiXC175hFQcj2F6W",
  "key14": "4KrF9hVsmR8uNvTQcbKQ5mKLZCkxPxWVkeMPZJZmQc1eseVzxKDwu2vFuDCPKdYg5KkjJEJfNnZhuUtCgGBeNRp2",
  "key15": "4oTizA3zbjzHq3PncedDDYhoBHQayQ8XkaiEKn6MJijRMwqDpxdCZCs3RGBDjv4vCgdzy4b1tQz4wG7suqSQLk25",
  "key16": "5KaCuHuv1b9o6LoenCmpVCfQsptThmnTQtQ3XgmVosWnam1nQNKkuKrBxin6cSu4b6qFXpb2sMDHm9VCa95aaiWD",
  "key17": "2oFwjzv6tKZGC4v7zzybaEhLmPDPNv8bKjmnU5AKJid5Bx9zR7HwWu6wCA1xqLPnxzAcwT3HcLugG5sRUoTuERXb",
  "key18": "5xybwWys4aCy56HaTZAsKPXRD47mXZc8EBEMZVXYmkbRKKw3SKzEi3T6Fd76dtmv8uHmT6B1D5MnSkW6SvAEGLJ1",
  "key19": "4JFKRMKU34iz97p5UCcSBrxY89wCNP36NvRpDsrRJbFaXzF4yo1xCnRiuFnQSz3bZ92pyzrtAAEhVHWYeRyqAL2q",
  "key20": "4MnGK9EXbw98figLT1UjsWB4wuyq5rvR2xq7uKzsCbkHJ64w5rFpsTjB25WmLwqfD44b6LpsJ54nvSuJj2GoqtNX",
  "key21": "2iLViEBT1n4Jc9ZkeP3AoL75wwSpcL6zkoc9qMGNkQNsUqaSjXr9PwLXR7j8hiRgpEQnYMPfjx9nyGpwpeMxavBA",
  "key22": "PNRjFK3NwDvaD5MksgAxi4qonpUCaYke7F7w11HS2JJk2wvTNJfDgarHtR3kHt3LXQJLkw3qk9vmFavucqkC6rU",
  "key23": "338qmeHcKDYfA9veyWDFND13w8hFEfvr9GL4U45txjbHQPUhknQYaiqqJombaP5SDwXw5qhAqX2WZjKgSKqAV627",
  "key24": "394rULL27bvKvztURQpN1c2P22uoZDaxYnSSkQ4jjakQBAUEAUixqdzbnfqDmYjzbSDctR8h8Mp9ENNnPjAGRLNG",
  "key25": "4cPMfqK7N3y1pDc1s7k53RBKk2Yno8KfcSMcARa276En2RrBtbLVjjQBfXfEfoAm9T11tEmJLWTAZ7pZXjSaPiv2",
  "key26": "2qpStUqTBC5EYmx74R8JuxBNojSA5pj5TjGRM5Ev2zfLkdMcUitAg4cARoy1jYnbSW2fSAMHC6QBRke5YKBZsLcn",
  "key27": "4xA7Fgdg8wRXSFf8gRUu5hxDvLPfcSiGmrJ4DPvpHWNX3gLDaXvvi43QBJB27z6p1BQAbEob9aR1LcGZk9niCKKx",
  "key28": "VTUbi5UPxYYuH6kxUNEGMST2zporJ3wBMV5iNxsgb63WgHoj5rUh6i1CbvwU3VaQe11MBcQ6LjkXKi65LfrDD3i",
  "key29": "245fenbhsxxpM9sUbNpcG1M76WNstsTLH5yxtGYMx8MKYWfvySgdqtatC89dVqsheZcMLk66VKhSsHTbLJgsa9V8",
  "key30": "2tfiTmEjy4rzdtCk6Fnaoc9CkFYR7ya7kdJphgFz9ESwFuJnaDEA8JDXbfXiRTh7K1LKE3Ee2fFXStqvTtCTEgeL",
  "key31": "1GbbEtWRwZEg2pBSkanHe6AdGphfE8JRLi7tLqfUt9ycGt3gynjkoHBNTuisekZEE6DM8UiFm5VhFLnrMfsBPPU",
  "key32": "3rRT3dq4MbK28eXLyMgC5MLj7adNeKVrkqdQ7LHWPfuNHKzovX2EjSngx4CkwbGv4BdJNZm9tJyYd8iE5ZELfCLh",
  "key33": "2w2qFzBY3PLcx8EcFyWSYjC9MEXR7fmeqS5FpgczXfkNwr8D4c9JXUfhhQ4JdwLL5vjaWKuTbtHiWM8McUEp5U1j",
  "key34": "4f4zCg1q3HGLd7fR3mWiucfx4PEZ1mn3c6HGGCFWvdmD9aMtkzT44dnDrqouXEXLSc9BbwsX3yJGEkWWpJnFahHw",
  "key35": "2RVa7Dro6CA6CRxTH5aQ71bBVWMxmkDYtiYH2EbkSapmgiuysyhV4EB833UdwhFSbZQ9ZSU9od6GuQsGNrq25xcu",
  "key36": "5z6BToZCGpJLKkPXH5nt5uMadFuP1EfPEnqTe1eYKdUL3rs2EAonpWwQYo9upEBgEGTx1xA3BJS6kTNQUXj7Jatj",
  "key37": "2GkMvDs6o7CZym2RtrdfTJkMpW9MJBLWN1YWKVsyKJzUoF8Xga9ZNKrEnJDW6rP3xiwzuWFJhoNYyCRyjMYs4hyy",
  "key38": "4GuHKrUPZYauwdge5nn3L6oxsSBUrjPkL4oMAFYC3QQdiUFsDCAiKiSUkkPbZ33NFUqKMqmVL2kbzN3s3gLcb9RK",
  "key39": "5z3XKgfiJN6mJjhux3FovtAShdpyQ75x4ncPBygTYtsEWWaGtY3VRTxRCWjgcfcx48EVWwC11FGn1KTEtAk6oNkG",
  "key40": "3J3owAfkUQMVppXASmphT6TqoNrb3LeJJ7xhgJkME6N3rCze1pw5QNAYsUptYgPKb25Vw9YSG8ZVvQ1X3QANZ2jH",
  "key41": "4zcR8AFoyVsTWD8T9bHCFUoReQza7oPre26UDH6L3Mn1TvFjGSSthWV6jrtfqxGWTCym6femmMVLJTURvpZquMN3",
  "key42": "2fgGFE5vr6eFu1qkQEY7qcjbJMJGtnaLWm4roZ9K3ufyqedXSkKu7cjNvD9dhKbuhFGhu5zf6cVqiJce6oL8rFBA",
  "key43": "5gTkcUtoRzJmwWLc7FyN6iJ9EyMiJTw5GS68YpMpa6Zq3dZJ8YUgdrtviV9QJXspvTd8Qg1sSkJAXqFRpN9UPKcc",
  "key44": "5bFdjvwi7TPrExr4dFKhY27kniBBbcjmAUMUVuZjRahu5ZRLTaNFCgYknThJqmgFuZDvEYoZXtjeDhY7g9ouEx2L",
  "key45": "2mwwanfLy78hafzMHkuadtQpH6j5fTgJDtB2YufaLAMHqSX6FnhYVhjZsZo2f8iae6MP6tqMfdNHwvr82znKLrvu",
  "key46": "3LWSHRSDLzrSy6NyC1Uakdpy7inDxydCJREFQigbNxt9xCNpu6X3eUyTqqKoabhU8pkdBoXMJ1BpBJRmB4SCHTbk",
  "key47": "3Af84cBUsSiRUwdnYK5vJj5zdCQ6Aimxh7f4LXNV2gFauT8LwfqegnPrS5ZzGG6g8BPHrnBTdJkXgo57sXN7c3zV",
  "key48": "6534qkMy7R4AUXaYUZNsCA5wN7buz94TVq3LWkEJzg287nfMpvrfAFY9SEqjuvbsNzpysuW45w5RiQgK6J8QDUEt"
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
