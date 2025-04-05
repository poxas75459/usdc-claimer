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
    "2UqH3eUpNh52DSd6yyuXa3845xGD5LgeomMP5agMF8b2pzk3Aq8aZiTepyit7avqE9FboEhrQ3Q4cHeoGGpttYPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67T5guKmwTVVQ8aKyjZy2wTCQAm4ggdzz9PtUG2GtknwGza8Vcqdg2Qa9jav5FRcd9a4qc7CE7on6RVN4TyRXuwn",
  "key1": "2tXPSQpSA8egyRtt7iYAEzpicQUuRpB6go8fdQZTof6zbjwVi63NBekqq2kLwQUn6nViYjeH4dakoaL67UNvQ28K",
  "key2": "4WnQYDvhy6XohG9tzR41y4sU8LUAQ9Gv4kHbN5rFiwWQgPv3XNTPHpNRTuarJYFFQediQf9CmmV9MzyMWLfxoYme",
  "key3": "vrsmcZgkxp1A5wsscAvoVWouwzUNGVdbMAuP327Xt8jAHE2bAcWGPKmcAYaiG5eUnAf5S8Qnc4f8xCW1wjeUxcW",
  "key4": "3nP2ikD2jmyFBogiYAMirsMrPBTkUVKr1HnHbh5w2D639GVyi4sMz4tdSth787qiyXiaDsXXV9jimQoRLKTSmcTu",
  "key5": "622m6QSNnRHJCvb4KFy1mDJWCJrP9VW44thh45j9AgvbwQn6FPTXWq6xQiFPn3iK3NShYhdcu1hyxAXuVLSXztf2",
  "key6": "mgvvD15dkBAV4GNQvZxqKjkiAzir3D25n4mHVeDJiJHWQ4mjEdhmwf8n4EFLsKStw3r34jJUdSFj9Kc7mfCFkf1",
  "key7": "XfoZnLoRagqn1wNifhvf6WCBVWqz9i3LfKGzu7fRyqYcQf7Zhw9VJNjnXVTKRTpqVigzp5WXwbyLcyzD1N2JDgQ",
  "key8": "3wngkSEaPp5d347Gv2455vxyQjPhajuvThoPfRsBLYk3L4PfF9zZ4o6QJrPsT4cgCgZo2P2FXdvdgtCRxXqk9Lc3",
  "key9": "3NRbutuppq6sSshpZqjRqcAfKgZbTwyTPhhYHrPwJVQECU2EvhNbywNUgTnduw84wKi16VGimf6s2r8Juezwn4GS",
  "key10": "2FMjB9qUo31aKLjUwtpZQ4Mfw5sRTDmhtUndE3R6pkaivtrJRDktKQDx9yNFvkj7vj6WbQZD2XjENyy7fdhwYFRH",
  "key11": "6mwNwqZ8TioAXbcUv8xQafrn15Fe7ttHYZyzLfmoMKn35P88ZF4EqKM3bPA4DPRDqmae61fTQYysGPef5NUY1e3",
  "key12": "4yy5uS4exbJQRWJvNunEWpL92PZhqwWqqWkhH1eobbnCeYkQVB2Tkrj4Uf44tyofWZAW6YjZMQjR6ShdnmEaUitt",
  "key13": "3XYVqsvnbdmRxRZEDEu6bqeBisNrBJbwaWVMVRDdzoUebpCxifqchriKnhfjBSgpgj96tnAXpCrRYUgiD5rFkDt2",
  "key14": "3fBcxXt78vnoGg8o7ndupuVh7faYK2D6c515pPvMQgiuMNkW9EjcpCaQW41HvaJeueHSuvrX4uuERB5dCZxn5UuA",
  "key15": "51WupWXQMJN3G1m4XiAKmsfZgpYJSnWh6vN7qn6gzfpajGF5UW6EPWRFNtb7WJZU64ou98h1LA73L69MdFywxYYV",
  "key16": "4eqXpa14QC1P27M1AHCHd9F671ec1m1yGJCk4imT7J9jiod9xxG9TL7yRaWQuND8TcjU2L7AtV6w8rjWE6ngSE3G",
  "key17": "r9XCEB9yMsbp1WhYPaQRrnpGjQGsGwjpv2VenfGVnAusVKG4ouN33jyk79jEBK6j2Gz33pXvwRTRiJh52F4Brh7",
  "key18": "Xj29Q1PEX9qSpbbj2hg1ojUzZMjzjcUuf3jNsmR1czepxmN31fBL1YJucZtLt6SR1DowfRwqr8KGC589ToEhift",
  "key19": "5mYhTK2CMdP6ywdWDssNd1FuYKydeH1RfYgF9yPkQhWFFepkzVAEg6jm6dofY5SKh41TnPTjx5Pjw3Xiz9DuFH2C",
  "key20": "AXAmV7qoaYm4gzHzQuN78Cad5VYdayevpKcYbP9dVNLn19Tke5bkznx19brz9dE9hDmZTuw9ij2refBWNNUCNgS",
  "key21": "4SFTXP5Xdq323BnM9JzRkNd6rsf1vwVm8VF4E7E2J7uJWa1iXXbYtEGUrnRvNEVGuozBbUnENQkL4hwtrfjsfiEq",
  "key22": "4GQCTYC3oLDbiepqjticne6F79MUyvgHPYkLw57aznjdFgBeYs5uNrYmQwgfbHdMke9E5qBd65kxHcr4CNBdVUuj",
  "key23": "4VcuFvnCuGPMXUo2SbC8CDNQyBaDv9cbFbfTs1NcFjbW2KDfXWKmrDa84Le8MP59YKBxuL67zz2bqFbR7ddyPVDj",
  "key24": "3M28M11WcaLxgnnwPbW5UUAifp7axEQt37uF9w4jSsgmEayJskQWJGbGrVwqhL4VUmsnG7nRQyDuTYeKejHuxNpP",
  "key25": "2Ae9sdL62EEdzhzVwUEgxXaNjkRk3iRhyobqycKhVTbAPaSSKKzwtqKu6FHvKGuUi3gwMvurNaEDfH1mrCQPPAku",
  "key26": "4Ujswm3yQBD8q6EQw1s2qZVDgsNaMdRWtxpgRMC6n4SSewYEjh94RFJquXvJNFExDm312NXhx58gfEKq1GgqqsVJ"
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
