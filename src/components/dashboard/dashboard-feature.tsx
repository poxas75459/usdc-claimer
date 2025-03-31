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
    "5UGny1mF69LK9BVrPDFXenoLxCM1n8Nm1HUbaYJD9Mnb3E2ZdANrQ129G3gg5SzYqTaoQgBkDMp5deuFdkHdVdjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28GPGWuRMZjTmEsjz8Nm4cRBCa9GXCoiNgWMjKCQUb2hRWZx7sa1oCM5JzsLibRrJteZeCHeCANpGTPqhbXf21LS",
  "key1": "3Z8sxjpn5mXwYKUdYvwMFnxsKqVG7mkkjeNH39vy1Ec19QCk8vJqFJUGYAUWnb8CEDWEhkfXPCQxfDoyhVfT2NqF",
  "key2": "21bNd9k3hjwzWZkJgNgNmQJWTypVsDjqCARHGiU2PM7TtPFCaG48oS8GY3uFwhRQ2VwdkWQVp338tWqDLcQSw4AJ",
  "key3": "3xdVr9Kkm5NEVya83oSCGYZsnzYrcgcTDTfT2inp1n66V6DDWfWyha7fEERSgw1SYiNyAxvenLq3PmqNJFKHFPqV",
  "key4": "3r5NEtYm3KToAbkJoNasiKhieKPRJUmmyL5mPMjZEzopxe8fJJ4d2vgTJxaFLhi9Mn2ywYrbSNpX3xvQTcHAJD9Y",
  "key5": "5FB2eTBD8WoQ98RQGa6i6HvRjAMjCKE8AyzNbFGwDKSZRN8xVNUbPiaV53xiG8Sj5QEMQDU1JUJbTe6tfKCggkvy",
  "key6": "61apNdW1wRi336hG1DUQ9fBox1cmqhEuh8dkRcwLPhZvv8J3aBm9SJsrfxHZXr9UjxphbVabFWaM5vcyH9cWL37X",
  "key7": "5jopExLhidzEmhuzoReVonbZQfkSPFbGZ2zF1N6aFLhXxUX4VZQbezdvVdN5ZUP19m6Mv95jK4qAtEU8ZR59Zpgc",
  "key8": "5URVCs9qa4F58YR46NPjg7p1dzrCFXNqjbwgCt3N3Kj2SPGzA7DtCMrJVEqrTHRfqfyH6aWu3r2Z8iGFY6CHg8ni",
  "key9": "AjmDQ4Lgyom28oEbbR3XK1Z1Nd5WyETa21bSvu2EDg2xYwRKSkNgeX13k68hEEqNs4AjwhZprruHQ6QkbKayidq",
  "key10": "SQ9Swdb9Yb5P2ErVmLp1Fy7XpJ8p6UKvdaPTPrrjfiYXRYbrsbnEX3LRcgn6BhNXMBuw7Vmy7tcAfWLiwWLAZi6",
  "key11": "5YScvrRNMksZZkwXr9mECR8ec1CkJFRZmLW4Gp4chYDiufnWER1LHnWW8xdXtz3My476CsDyCJkky1NAxpkDwTQF",
  "key12": "2jKjCbtYD9wS5gM6pKq9LCPHVzTQ1DTo5TKjBKsb8UnMHDV1jVfQXxp4hhEPrWWEogBgaf2WVnAegaBFkN3T1jUy",
  "key13": "3HmG9yP2LmPN5sC3fY1nrQrgaMZa4VhwsukbzDF68oUaTxR52ANFxKmTexSKt4KZF5XR4uHsRkRjuvUjQQ3w4CDc",
  "key14": "4eYtRPq3mvwm3vQRcqCZ9kXm6fQKYq4HdadDqGWjW75cadAmL7VA1943MS8Nwi9zva9WM8CVXL4axpo9FKG9K5YK",
  "key15": "5dLpfF7tud1t9YcUv195dD6fs4M8fAbvSKcvmvbN7WjyL78reS1Grj7k2c9jCjq6EUypcYiTNQZ7Ym2jN6JTuWoT",
  "key16": "twFh9ZKB4748FTB8DhAAxRFvCmmxVBjBkhKshyPHRXThu9Cmba9kkHnwnXhjuJnWHfXAnSa7XJqZwQQcJXoJ9Tg",
  "key17": "4Jih1JjrPgX3Qu228xqfdgUqVdExod7P7ZQGaCdVVbeVZCvDvR8411HBj7LoqCM1NzEdfbYJFtshUGFM9zNEznnX",
  "key18": "VUTE67qageYUSk1a6RW4RmwdHtAiKHZeWNuY37QtfzNnzY46bBu2pZdaGtnVZpFJUPRjpFiPFHCkC1JVyAYeaHe",
  "key19": "1pd9HBkV5Hbia4DVhoySnhzqh85ryHy7ArWtyn2AR2VShssgXG5nDrLCqJo5vfNzzbegQbsrdNVz4Yh7dprodH7",
  "key20": "36F9bRWE7Lu574SKu3HYbVzsqEQtWxTX2LMHggZpuA1pp5zW2bnvbno9GbsmG1b48Qe9MY1pS1ik6VCS2cxyNh3k",
  "key21": "c24DkzTtrN8hj8NzPnQGKHenHMPZFmqtADHnKrv91pW94xtCTc6siWEaYBBsPEkzuzAkCahmDZvtS64LH4LKtfo",
  "key22": "3naZbBGTQuFmrDdhsUpsweKsy6DM8mXbPLf76D2oRQW7dLnzKbgWVxSEhdH2tnWxxXzTjz6Jc1b567R2qbpLE8qk",
  "key23": "HxbfnbXW8xmtNtR77Ha9FR47nmewrbF3SpNm673RGgz6FuLJ1m9XqXT9N4C9Tf3sp9ZgEdN3MUtdy328NGJ5gko",
  "key24": "2ER8wxriNbREfNGbbMP4oCcdPy9ZqGV3pDXB4DdKMqvjCryaRiGGSZXwAmWtMGeWz9MhVomqAwFj2JRrozAwc5jE",
  "key25": "5eCzkexc1Q5aEjo3dbYWsAEAQGGNAycwP6oegsC453VZVLwRLt3NVo1DQvMKfqwivNPoS3j6eDCez4YBeWqKL8Vr",
  "key26": "4nGj7fq16Pnb8NH4p2rtdWSPP2THyzEuovQ994ykv5B679uPtQyeUNuEbKskaDmatk4gpiUX8Aj7cjQFGrpk2sZT",
  "key27": "3GuxHer2dsYJxpVHWbBu1rsScgAv1U3Gv55R7KU4UhKS63TxJ75CDfmdbPtznZX7fGwpjvZwtcLgRyofZp3jcfAZ",
  "key28": "576UCdFrwoCZFJcFvWRudrcBiDTBa46qCedwLfz4S1A2T3WGyakBYuAwAmdfbRpf5ggdQ2DLJMF97hAyh6rSU3RZ",
  "key29": "5uWBBzRi9Jcdda1QvhBX4f4R3GLLAvcecuDfQ7oLYwhJSTRyiQYGHLnJVHbDcBaHnuLRN9AqAydAYsiDf8Z44LWd"
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
