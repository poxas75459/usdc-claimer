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
    "48SrZMMifTfJ8C9nJHMB8XEcAWyvQvs9YoCCRRo1QGKLSW9nyk5CLZeAB7CjcVWbXunkVbPXMMoBFAvZYws987yx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "212SeqcenZEiJ3X1kNa3BGS7DmWrN55Ub4ci8BDr13cHPuVb6L58GcpMnEaQDie33M7K51mC8bA2H2rSrTg3NygJ",
  "key1": "2oN6mM94tVv4cGcMXMxRUhzBywz6cajcS96DTGhfPP1ooUFx6mGfrzYe4ECCbn6kQH2zdFbEnHDf4sbxi1w18L7n",
  "key2": "5Q3Z1wYqswNEcHMYjZxNi4M4shMXNzeCofJ8NKNUb9uHfj1dLJwMjRDbDP3qp3WY8tz9CQe2G4UPi3akkRBLDTqX",
  "key3": "3JyD2n9WqVPUwDBLDP62EprMh1Y4AYq3tsuWs3JjfbNPgbiMgXEHzoawoqX6pUSwgCzAxojuJ2cvBF6eq4NW73Ge",
  "key4": "4zCjETv5x8i7VUvqpuXQzLyD7wRgbnynzaRMPwEXYNMVP4Te8Ljp849FkkFbwSqBX7xtY8jEwMUdjNRATeqgujGU",
  "key5": "qhqiRNj8wGAfJnsMYUfznguTyb6PRYCJHwcxFfGAZXsnKRMVD7v3qE5Ey5T5YPMbb5P4YUWG9Yd2nY5DZwoH2cv",
  "key6": "3DZjUkA19AxU7Lm6EWLQoYTEg9vnqfiStu988Wt6FnTYWjMoYRYAzoGbshPiVF36SqXgVUvjha6m6rTqDhthkMDi",
  "key7": "2aBPK36vHyPJps6Zewvado2YZ8DHk5xjPC8Lx2pvCjNPB25b1sHWCQ7F7FtxAJBQR77j6BQngTR49dn4WsScCARS",
  "key8": "2Ww9cVqmX31nLS3xd9zoWcTvj45jt1sFmGRDgJN8SYLemtivw1sCfGh4wCxk7vLBddacEqsPEyfZELJmFdWsWwkr",
  "key9": "GjvdBcAec6xhKCWG5MQNp9tBNTf9aNFviob7NZ6oSGRknRmMpbkyigjb7ny5hPFXmPHVuhdMLNDHGj83dL8GjfG",
  "key10": "3MjcSL6Vuzfxv8PeStRRMEJfbi9BUuv2cFx5w9eLHtBFvxbrECT4DTNWQCxtQ8n9ZTdoKjGuqStCVYZTBzqjRZZ7",
  "key11": "4Z9zddci5ubAbebzKKsndfeBdKXT1CE6GskHXNbSwKtr4ddsh8uETRKfDsKhmaLsUzGqeEeXy1Mew1ap9QfhXWY9",
  "key12": "2kTkakcSgPvUJ2A69QkJnsPb4trWcRHmLLBRAZ3hjE2ZewKhADss65moNoD7TuAKt9v5dZXpntRy3XQ4fBFXxLWH",
  "key13": "4cnThEjzKJq49kza1iaEiorKx7fngiwzc5sLWMtDwEiusapNcCbzJapQrXb4tF2mYJqd6iRkyrEtcYombkeDb89C",
  "key14": "FaEfyr27LWDLCiRoFbcUmpUsrSHFeMEG8voUKLXCbiy9iVMTKjREpsQKiNakTrMVK49p8iEniqf7A6HHBfuB6g3",
  "key15": "54wwv9xutsVuvRGMTGAxL2TfDgwdNd2YsMHodBZwPq3cBXkS8SSAr4FjFprcasMB7np6SXrd7S8RtAPi9fHquDb4",
  "key16": "3irp2egu84uex6EqhQYtidfBmY6eXFeiot2gNH1gTmQdHeBxrwXgA1QsKsfBscn4LG7Qngt5D91GS5j4CY67KnjH",
  "key17": "3CVrqcpcoPgTnoNCeeAR9YjJAbRz97DSTqiYnDotBDRzz521rpy8ELPe44Le6Hr5orHsy6K2oVeQGkNhGmDaZTDb",
  "key18": "2bqfPeko3Ew5h9Aak2A4ViMakEYH9QQLJVPA5D6H7hpxgoMG9BXLscytGQXMGy3TE8joWXXywERBihc454qEPmkC",
  "key19": "5k83oPqgWamfyTgjzfPbyfcDaVdukFFenKYEG2ojKHRTLk9jcoGJ6w9yMeacqPFkn47XLERmj4PAbH8qYsPCZPJ8",
  "key20": "5ZBbSbm3Cse93ZRhSTw1hfZstHPUR3bqEYbwdh5RXCaMJ5QUW83P5WPYMLqsgYBofe5BBKH8HVN5H9SazdVAcK1d",
  "key21": "h8qkN1rvDXHqehdAvEcF3CWiJw5JofgWaGQZRSZrPN9hHFwmgD1HuMC6LC8FF1NQwDo8fLveh1Vj8eKYePpnFoP",
  "key22": "3Ca56rHZBqUzRx36ZeoCznGgFXLDgoUEHY4Z5GnPxnJ8SJVuYEAkpyd4pJosHgLbLTEBjuZA8JCAJkM7JJBmsQve",
  "key23": "t7WT8KpzNVVvdaK8udQtXRor5k4Hmg5gkz96a63tW3Fn678bQrWFfvRxooKqsn1RiDmuuX5tYARDXD3K1fQHcbi",
  "key24": "vjAjcm7WwTEQRui1PmzBLiFMreqfK7AyRYVbSmdmmvYmzQLRz2emQ4i4Yvd2y25bzM3ZzH2wv7CNqqSA8HDb3ae",
  "key25": "5qPJEnK3xoFzLHDtcPMXUZfWzXE17yZBwGXqGRXjsjPtf5moNexsvfiZ9Jrt1jfawG9wAQMs18cN5s5yHY4L7Xsp",
  "key26": "3cHzXTvJpnaqhFkxaSFvu33oDHNMH9QvvJHk6c8ruzXan6JZWhedpUNWPXws9tD8r63kJ9ZKsMWpeScG5MdsutkA",
  "key27": "8rwEWBFPPdhYFT2eYnVtSg5C2UMftSEqGmEa3j7YgRwV37jWE5F3HZGLcEwdro7hmnpaFakCej8kcNdFoKGYtSN",
  "key28": "67Dzig5zQryh3NLyn1RS7FJaAikzxWvV9sRzdVemFta33VeUbDRLUQRrHYhxFnuqS74uEgPtU4k4FjukwWXdx7QD",
  "key29": "3sN8kzTNQYH7PQtxM5TAfZuyA5fJ4Zi6UsCF9iqhJ5zE1CdvV12RmJC9tcfxxDw79edRJwcpowpH2X39X9ZMXYfh",
  "key30": "2sQbnvXv23Dqcat4r1A2Y5XwBbNBDEGxdRrUeubryhBTDyrApxKXQuicWYEnJuFkCyTHSMwJFByexzzzD2Tyhbpo",
  "key31": "xu96zGGQ6oYZSrQMZHTbgxSGsnoCHx5EHrgtg2ChBoca5kSnRmwaBexf2mTTRyAuCXYvBgL5LhrNLTsT8xwFjww",
  "key32": "47LPudyAHeKwcoyF2dwrr4KhaF42sJWgBMJBUuzSkw4JLM2RrV3es2DhkUf8RePspaQ7CUZvRc1f1T1n3Y8gwNXH",
  "key33": "5SYMEjmtNAdXUxC3AerLFntgvibGzUhkxV2R1GXKPzmx5iHiZXoNb1ExPHr6b3B6KJdNPQ4yZy8E9uPMHpXi2u8w",
  "key34": "5yjAVCRJMsUGwhYKKVKvvTJHwsvNhbeBJGusYgbEo868UDnp7vpiKCoHg9vZbw2Rv8ScMiDFUteGyrEes8z1Q9Y7"
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
