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
    "56eKVNGoeoZbzZi79KCghAsKR4d8Z8w5DyvLp8PGi2cHfuU6M9aYGfmvoiZBa6mLXSviYoxDxheAVqCNfgBTGLkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d5UrKeKzgJT962Qo2CXp6zDhXaSTGcmDE2tBvcYXWFPey1nRFzEZNZYUB8y5zn8sjgJquACTmF8GJoPnzAbtEVP",
  "key1": "5mxvexQ9Ebppvzdmc5ZyP7db7nCBAvAzqBxsUurAAz23PbwbKFfdgp7XmD2xUgmG63SgQi28dWjxjUiyQmrHeAFh",
  "key2": "5MubG4s4eoB8WjGRzxV9TZFvSi7bGbA7FoXsQW82BazCEZVWU2uAbC4vuJaxnzfeMwyVkknv39YdJGBmRvPNjajT",
  "key3": "4KrvduswF4EiCN2RnZ5ANfBnRuBNBXpuTPtNPxb7VQDUyR37xPWL9ACMGrte44xsfGhYm3wSsS97sABgaMH7Qa8c",
  "key4": "5mmSJepMMpMnoqbHg5DN7P4eb1G717NneH7wcZhNa8HTtUaec7xA6qApcAuwRLGC1R24CWnXf4SkHkPHasTGm3zz",
  "key5": "23dBrYhweWGHEYA4c4ibQQWDmPF4r3k2qKoSWEjxV9ZdaeAPk8bDVn9P36dTnJCnCGQf1jw2vuFDSaKPQ2rrJ8Ps",
  "key6": "WBz9sEmxf9wtqBj2aAk99oPxEM7fZRxDLjc1wVAzrFCbGD2s2BAZ6qi957PVaSrivzbYcuvt6Rq98ZsNQ8muKed",
  "key7": "5F37NU5P6jZsxwJgDFERAGQxiH5fVBrKWiFPVVhx1vDvJBwxzB1K8mYPF8Ry2ysjzoXunDqFBa1bd2aijNABi6XF",
  "key8": "5ouTPjzKfitN9px3nwmgWgoYv3oo38XvTLXxwxv8LRbAxSKGhTWASeSDbXCGVJfgQDd7aPj9A53FXiTcRLxnfzQS",
  "key9": "5C5p4Ds1U2ADzXbG6KPYD5d6GmeE61n4f12hX1HmsBGzpw16WDGikCXyPL75RYAFMEVAQonhtPDT8HcGP1zmnoqv",
  "key10": "3i4CwYqkDeodPJQ7avKuoi91npuBBzdZDYGEJCuYSctYaswdySpDBkczeWyNCrapoqPSCatotCNka3NmfBajSFJ4",
  "key11": "5WwWRYZVNiSVb8X53Payj9YUa48szXrAdqj21LcD6vj2wwzRF4NpfhjPCYoZcXyXHgEoCACMBdXjZJRo4c1zemey",
  "key12": "4FrycvmKa1m8MXSTuKk6zN9iauLUe9aPppgpVY1BqsqMsAT6Grk4VEDMfvHPsZUfjjrp3PyPoDaMM1ACSu93c8ES",
  "key13": "ev3jf1zewGSwsuJ5n3ntaweBYnEp1k3bC2rmdJq2vgCW2iAiioLdrLEjJ7cEBueY2BEV24Jiz6Mi2sG4gESSnTd",
  "key14": "n6LABxkQ1ZLqML3Uddj5rtKSHfYzNoHMxT6XtQZoh23U48jfzxMnoohK7voy5vwrEX1dBtvyvwKmDV7jLwdeasg",
  "key15": "5vaE85srxVZiuHS92wKJXq8CsCgPwfNycxmjUgiZbhu8cWTzRR19LNzd9Hpvu8xN6ErCiQUMQirqRCoaxHxnfMwc",
  "key16": "3qFqDQW4kfxnZszM1GTnJL75kqZV3ramxXURbxaMADwYmoMUd14qmmRKMsvWZDpE93BuA8D7SG8KxtzkRUXjYgu5",
  "key17": "5Pbf2CHEkGfqbVo5VYyRLEQS48NiyR4UELTZM8vNu4L4kQR6gtBHekMFev7upNzjLqym9LZoeQKRe2q43ecQWGdg",
  "key18": "4yuKgXW9ut1JxLU9ZX6y937DYrbhsuPgxMM1bKZkCByzhpVK22S4czs8xaLxPLhJn562SWVJxxstKbc8TJvtUBHQ",
  "key19": "2LQghZRN71jTvPSh7baPAax1R3e5T2iRt6rrS2N2onWvJSaWqE3ByhQJX9t6fuk5zXoNF6VcsuFdwnTvyadJjYan",
  "key20": "2WK2Vi3fma6GeEs8p2do6nfK8oLWMrafLXgWN3VQH5YG12YCbJRDAGQhQ1c9iHkBE35SnH9DDVu9H5Bq1q1pM7z5",
  "key21": "4vbFyHGPtFuiYhamvBmfdqhfygBGLYpjxTqXzBKHsJTh2EupY8uorqqp5xBmAhaykQhrK9cmrbTChLCh64funi7S",
  "key22": "36VVwrSJGeEjp9tKYJ1JsUGHD5hd4D5EFWmgdn4QDdy7XASxYpkHqhQwq2YpeZeVXBXTDeh3HcdNtktsii8szE1w",
  "key23": "3DAkFUmKH2b4FgBhkXBtRtMnktFP54UytPYECptz3AJAuiFSDcdEvX9fhHWg3N2yd7tCYJARZq21Rutd7WmnqDiJ",
  "key24": "5qFUiE2yYjaCJ8mVwcMzEzEyZyvsYRZaj7z2yg3UHXWVkiKJGzApEsBjtFFeSVst64KppJxSTjybyJUoZXHZpF1C",
  "key25": "64ADaGUry3297ia5uXCvnMf5h2GnuBdtk76LCxckAk1g6dkikZ9GxKrAebGdhogEpk9R2CAYgF7xgYCke3vSjQWH",
  "key26": "33GXGeTw7gUCVkjr5jA8CLByoUuNpHK4G6LTfXAHqD6sx2wnKZv4yBZ3HAgxwqTg3GPP5pnKWJz4j8BMxxg1AgX8",
  "key27": "56UKdK2yqFRqidTUTUB43FN4FGdrjzWqGtfcGkCKr8VQAjhKsVgreusUcb5epaU6LCu5hviuDc6gEtyYyq4XwNWV",
  "key28": "5PTpB9qrrjRCt3cR7L45s9SVkgZS85UCxrxECNNdR8Mc8RUNL4j5NYpeqh8bop9TZNiTwGdMmn6LSqngxB6TKmkS"
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
