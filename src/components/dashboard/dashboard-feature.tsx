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
    "33R5ESHos4gRMztHNzS9r2TL7A2KpQsYaqkZubEue18YJaFXrsDeGqpehxRsy4kMUQqu9jwMKszBMaUpMBVRCiMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JS9iMNT6yeZ4vSMNudwhzK8FXXUXyYEhjFfcUmwQv25tZEphLTZEv2Gc1rGCE3z2qFg22deUf7KbVLH2bieSLPQ",
  "key1": "4WpXfCP2UxbMTpXktcxqyH4KUbooJqPNfy8e5LRFuQC7U28skYp44pufmpGpnsefyZk8ZBapPRyzCcLuLmoAReSY",
  "key2": "j2G8V3LpRDHsGfwmzSiXSZ1mdvPj81XcxFGD1p4p9Kykzen8LJ8Z3b7W7zGZCR1tw3jp8QMdCYRcAKbdHBxrBfr",
  "key3": "hxA7DVCRpCMnpMTDGcftj1MM5ycq7nrkDSJoe47wATjt1AbbZMKWsa7L1HPjvEC7gULCWHpKiFeLs3LLJCraLhi",
  "key4": "3Q4Knupmf7ytMGxPG8Tu8jPvwyhjLpptJH8EJ1cL1WL3nRJ7aMsTzx1XN9FcfWmy38368HYtAyznhMKtz6XKQcAw",
  "key5": "4bpj1ncMgcQDvDPmeZuti2QWxoaYCQqCuH1Ee3BVyvny1cX4czUpj77Cgc6osRENaYZyxqXCf4u68qMWE88orNWJ",
  "key6": "43Dqz3LTjwYtiSsLzHcLy3JzgfCbAFMrGhxU83M84ZZRqYqd15cPCXhxP88QropxpbyJFyqUNRktDffVeH974tUr",
  "key7": "gAVBAsgZZbzCMvkCwSwbRwqTzfxHRS6S8LHANKE3iFrzRBkU6zUDEaE2dT3uQWgPgVzH4zPVtBdsKvzgn3XWxiL",
  "key8": "37cKDSC4MEgfPQuB94F7KLSimgyNMa45CsnWKE71zhNLLRS3giEXoUPeVUKRwPbshYEWUL2Nx12Vm8aakwKAbsH4",
  "key9": "dUuNRrKTGdmRbV9aL3wPwpjctradwQJuJd3WmjNUjMvnCcS4KWMLJjYQzLrVB3ZLjVKhdGLnvhtTxGvSCp4eMrA",
  "key10": "3EU87V5KgNf61KkKGD25Ub1yKFjQDTKev44kmus4uEwtuBZZtrnctcWpMvNzgDaK7qaQVyifmzc9dhnGcv3mio5G",
  "key11": "2N75onGtBhnJ5JbMc6iqZsdi8W92NZonxonX9nHbFUtv7WASQ8yXoiwdiXEmxEhYbAtw9usQgGheZNGS1sVZAij6",
  "key12": "2SMuSYGhPSm5R9hDnfhN9xtTUYdrJ9dZ8AHnG6znUkaXU1jRt94MKcMhhwG2ZiSnRr9Q1G7JQhR6tdgWaggjAhwg",
  "key13": "4xRXHQPmwitFewbEeQWgAehsNByY8guqzCwZs7SQU4eU5mt91mByAAWVYYBsKMFEJRa3ivvASUR8R9uWKPDzMrJw",
  "key14": "5JmofjXXbgLYWUop3wHM3Fya7VkcmRSdVbRw77gBpUkxWGZcXUQPFqJDKhWqtxHkLt13CJSByEqkYwz6wYmpvSmG",
  "key15": "4AHX321Kn5V5zAreimJHB3tGcNfJtmU5PKRZX9cJKNQz58D5uY1seDPhQF2ScibPPMwZvcZWuvQVzComVFs2SkYM",
  "key16": "4MfYo84YruXn8sN62YBELkAcYA5jsC7fwe4MxWFgNb7esJzWH9QF3YkmgmufnJaN1EG4Hw3Svh6ePsavRMhjsnWG",
  "key17": "hu9yfXfw21QX7SNzumjXYkr2ry5cRZHsJUhTMmZVeGcybDgoka1oa8tQbLPyNU9w6owMhkdtwzmxCwQBnog9jjv",
  "key18": "6XDsJbV2Xpac37bHM6GYELJJ2fBNLxp7HyDhSFCLamgUWTcCkHWYxdysu2AFBKBvB9ktQUtbyUPeQam41gyWSmL",
  "key19": "ZscTd3oqpuaPzXXgb1Q3jQMPDcYdY2DPBHbFDGRR5kqbEzRKX6WhdXfLaAuktsMd2nc5WVc8rUX1kNfxXnY7T4H",
  "key20": "wcWTgcAwpnLqc9aWJGgQRveUF6J7Myz3R3knC9QTQyfLEEmNvx7CELXEbmRxUz5Je375s9gqnobeanBTSRnQboy",
  "key21": "4z6E4BGXkKnYSiYN2iLigcqPpPGB6erWaCvF8Fu8axfor6YovEepuMFms4E3ThpJ5pjpdB1xBifuZwmV2FuKJrP5",
  "key22": "5RM13c8vQMk6rApMWns37D6Xn6VK3QaeSxSQqucrrc1mCR5a4PVgbCWz6Yirbndd3MK3DigM6j7vx5ktr48aTksn",
  "key23": "26xQskEqECn6YFL8gKd42Dimz1HKLeXbPmQWNeM3TSVYRaa888Zuwe3WkDVohaNUEu1Wj645EA9A94RyQXVPpSMj",
  "key24": "3mJkg7AxVjG1JchfvW5G3T5QGrpG6zgFoPiPaLKBDw3EVvoQYZ8wfExZNdc1GUnXKhEAtpSPG3hzUa3ucubypbTt",
  "key25": "5gkfhKe51iaR9yutFJVFKsg73tchxP8tuhNZPymBAS446eJBm5BUn8qr5tmhKuDDZJGBvQsF5w1fa9ER1gN9YCrs",
  "key26": "5pFecuhHz4aCeWnwaiAwbTXn9UbH3ztgyZAcJCvAMEQpQTmntCNpqm72rtRjb8U3AXFwR8BXkuGuiewscnrAKqmE",
  "key27": "52bC2gVjixsorrCyktvDSkxKAbRLbs2azUW9fFWqTZzsREGmp8FdKcvLZYkk9sWfJeC8stEjYxxgEAKWsLcUBw4L",
  "key28": "4oc2bzYJF82Ms6dFttNzkZgWe3eZzCZxJP2E3U5kFVAzcyLqHuMM4yS49Fzm6hLTiADeJ3FW3Y1mHeXKDoco67Cx",
  "key29": "4iS9uABGpqzEcS6dVwpkyEy5x4LnMJMb4bw8rxZSTpspTJHiuNdottwQySDSqin7hdDN12fQVk8KXFBotwgL59Hy"
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
