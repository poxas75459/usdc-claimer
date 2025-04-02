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
    "zvRqTJuBU7Q8dFQ9BkpMmbaQHB5XJNRZMPPakZYo8QtTYQELV9HX8AUg871zNiEoht2UVv5VRpj29eAwNmrJ2Je"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VZAxiADC1X8e3PXwfUyLWeA14tK4QUhUBQaVijapyajmchSuUrE5sME5n1M5DrgMi7wPD1xbqSzEMLfawFkFB4S",
  "key1": "4aRcM8kQk7GGmENFvF1r9vu5jMHSRhdfaLtQbecT3q47y1HxPMirBvf1DUg5ER3eHcGDXbpL5fve9arAA1ERKRGt",
  "key2": "5r4Y7q4m4Ek3fuEDHryy3VCx8hpj7356VX9AfhK6VfjzdFktVJpa7bacvaYTg1pSBBVa25687wru3cP2RtxVHQo5",
  "key3": "LWQ4S2TdBBUemEPsozu418F6z5mDAcWSPZFjWoBuhRJc4J5ZtNSnswESpipH9FnuTU7HHoo5q9aP9Ga9VF4LfRN",
  "key4": "5Sf8F3cDPehCfHKzL3ktAdW3wbQxbxjLC8Awu7EzWw9eMpXz5V7Q5YmE5ABcjBKD9jtRaeHJuM6bAv2TBAkWMBHp",
  "key5": "3E9aKegZ8sNYgXXb7imbnvHfCVx18KwZpRZmdKWhnohTrvkzDxyk9NvgTwFYXX6iNYg4yyC4C7Z6GfdCcRDGvLKM",
  "key6": "4JSmYcRZo9hjpNPAGwgX3zkw4jhrNd9G12dhyjbu35DD6CwraZNrTzDkitZVh1dtaAwhvnaTtsYqvwv8QYCTmRaZ",
  "key7": "3G9JF5b7rmzgCxPhuCLcQ4Fv96KC5spUqzjV9WVt3viXCyfFMxiAoxUhMPfGBu9aNjTdRHh126cvzryZca6x8g5n",
  "key8": "3K3xart3r1kZCifZuBrZ4FuRZgsHccy66LfqqoffEy6xHZf9bvPCeKf2V2M4BeDbQADZo5orJCzuuusgef3kJ9zn",
  "key9": "51qw2xqdHk99MXGHX7RHknp7RKbnzDUxm8oNAbyEArbB9yrnHMDZBY4WXD3jvpaVP8ZUomGQJ7hcaBy18rknGB7v",
  "key10": "BFr8Qm35yvX71vp5Mt8uBL5SYx6Uca4w5hDRkGrCJNgLDwSCFswy73Hujf3zNtL2NWbyn7rGMawT2VDymy8muMA",
  "key11": "4vCRfMXvR6LxDfmPmkBV1efgxu5U8fw9pRnR5h5ta4hWMKqkyMcEmj1RrjyK9HwocbvPpYUhzKAJ6MeJ6sM7i8tp",
  "key12": "58VtWkv3urQ54Yc31HcfUKo7xPjwNsrdgrYyg3v9BKmMc5sbxbbhYSzYhmZyLaTiGrYbH78NCKQ5bWcwrpZmVSLA",
  "key13": "bYEEJhWdeACfV3oiE1EhkQFdMKSZXJppoDRNojpyAWAw7yyhXcLkQVxHo1Ep5EP3ahN7Wy4a133Pcgxsfe5EiZf",
  "key14": "8YEnbWASjdeWjrdQFSWjaPwEzxXK5W39mbtEG3DEPvEJgvwfP4mpfmbK7zHYantRALyDP9ssheFFxsfRu91TJNn",
  "key15": "2sQAEuepLjhiB44UbvA2nb1D83QBKffqjqkmYNDPvBsekBitKix8vc2wED4MpXy8926vw1KxuWdR1kXkHwCmYhSw",
  "key16": "3TccSREQPnUFQ9S2A1NtnWDEVViJSigzjYgoth9wDHtx2cCRnxwzAVreXccEfmUFdEwfj7nfL3jhkMuiqzhyUUCG",
  "key17": "Z5zr71T99eNcneSkato5YB24D6NVPTWRC9mDr1VTQEassxzHGeGGN9T8fUZq2yJMbRwokSMdFiFf14nwxs7k4mq",
  "key18": "3ieAoTJEZqhmCWai52r1kWXCnz1TfYtMRX7t7V8zmfw7GEvUVav2uv9ZwnfbGwdczX1xjCLHYpqHsJQVMwymaLat",
  "key19": "4tbZLudWWpUwNNAtkpzFQwyBvB8k1P9NYQ3SycTtVM1uVt7xuEPBSCJyWtir48u5P87NpJEe4E5p64Ko3V5jmq7q",
  "key20": "26HcNEuikNY2RSNYfaj4AGbFEFbhk1FBi1meGbtsCZCQo2jYR1uDRa58Ng94FSwfJdZVbGLUzhYGP3XzcCgEYPJV",
  "key21": "4WtnYenYq9mCmcyqCQHVfwrELvskznrB9jrRUyX6Qj2pEa5TvKuUmqrsowdKEZhPTWbkZftGiogjFD1XR2i6BJGV",
  "key22": "3kc81gCow2HBpP8H1S2JDu8KMqkDaz2PBM8WagYTuTL19NoPT5TsC82evJn9tNs81juWr2Ygdm9WpLcz9HB4AMPz",
  "key23": "KAqyueLX4LJdDyEF8yQLBxufbV91ecBppC6aWb41Mi3op5Zz5pZxsFT1UJZYcHmzYKTLwvUCiMg8Go9krN3VCTM",
  "key24": "3LyCBQPUP3uzbM45nx6JWCBJXhArqae7EKpFRoNrTXegA2uqjx7o7LbnYJP3NFMxn3vQEtYFpE22i616qNzMpkxe",
  "key25": "syfJcrtQ6uaphV1WNLtasRhKVHtYRQbqcLi9FRrrRGe5PYdZRSA67WsWw1KeXgqDaCgHVgNwPPAstEyLB8bTAxP",
  "key26": "63HWm2qzpD3KzZxm4v2naPeF29vhaCmYWBmYdzKjcVMRDn8EVBNcsc8CvyDYqTuPj8tY1Jr8J416yp6LRBw4GWfS",
  "key27": "4pHbjj6aPR5yK3c4ys2EiUiRPKgV7R3QGKUhucCqcACgGHS4QWiXHX2oUoYjwr1jjwfSjRQeCMPd5UAzGhhaDMTM",
  "key28": "3mvyE9YqNEEacTAyzj2D2ppWmFYF8NE4MzdzyY8BBhxC4M7MQkHKPEinY4gkV6EqLjALcpmrgfa8HFVscXRPRhyi",
  "key29": "3WyEFmZ1EaUZeSkstqLxkWR66BFUewfNGMx2D8yhiXXvtik5xkAW7diunja3F5DptYhoihhU35tbCZvRDnWf8hGt",
  "key30": "2gc5vZSdTrHVGSrNBc7tuczYsM5CfLQ38Q9nWcLbkYZBRwrgf3nrqvEbW4Q3Q7qhqY5FNXpqnJFvnCTreTtoTvfL",
  "key31": "3jxeGDq7nVtzLAxk1eiywcHxSmVYamg8MiiS5oUzGUPpm5sbGc2su93AqqCBi3bcGk3xX7pEotJpRmHRr1RFuyJA",
  "key32": "5CSnYQ8T2xBdhp8mZ1NeuYWYLGfn6MTpyvfmrDAVUDTxFvfShshVb17vjyEh9MzxuGB5xfhkCmbcVMzSnkq7MZwC",
  "key33": "pCZY94uBg5v6Z3XEuKfz5QwLYNoXMLjaNm1m5cFzUwbRQei8u74HWqeh9nSKDHAV35MYei7Uo5cfvZJihgY418T",
  "key34": "5UzcFwbdsYNDRQHqCyHM9sZuMPWLbpqoK5gzeAD2GPTS9eyYia7MZ8sppLvNPTn1CHsHo6ga7QfJo2DST1x4JKAR"
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
