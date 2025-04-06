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
    "5GRTTZ8hV3H1ACpXSwt4KdJpPamGotcT4miNPYZx7pygSF3fccKjUqQiLP6N3xhNXure7dmqmh3uGhd1nbTG73xJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34j8zbJS73dbX4kopth8ThT8PQSmDN8zpgx4cvxwi9KB1P1nEa52EP5bMAkhSNADiJUJmjjqqf2XWVY3SdQLrRWg",
  "key1": "42gHgBBWxMwczgqL1wNsoLM3Y7wSrVcfG6jaoCg3ft7Wr2zaPZxovYRvg189R6mPA3zqzoQ3CHHGKPdQpCCtHa7Z",
  "key2": "4FvoLbsqZCRJxZYtWwqu9hEeN8yCuemchjXFfBhZaT9SfSbdSDdvqxqZDecPxjgu5DXbvjoRdXWHzUEWxVyeJLmp",
  "key3": "2CQjyvY6SBf7VrpPJekyzUk7ZMcp9epirqJvXYZ4DySLP39eqnP9cHDsaLviAkD2WSrRGKU6JzxcNMeUzokYTkkm",
  "key4": "2YH9bEZcagAsZbKPq55QKpoeirUXTAFU3euMDpL17vDonWU9UTYLhu4WA1hjShyfjBhe2reoBxDfVJexCcsZgVwX",
  "key5": "4F9FN5vmxp8ACBWqqCQRzYojnMEtNZtEteifUK4cNNU5qohzhCweKDq2Exm2uRpzPJurWUxqzQdHgHFzausK5etE",
  "key6": "3w9ZGcPnhNW93uf1nve7H5tuCYUm3ojLxqAi5NVUj5hge9F4MedtQhG1hCHcpsrKkudRPTuy4Jxgguq2urBsRwcT",
  "key7": "4mVEke6SiYsc9ZJSLpe5axPPHc8mzVPvaYSiq8wV6pdRD1m9d7NQEGVWBoynytdUKy89MTzSQMg3WPHpWFZysXsf",
  "key8": "35NuCxLAcJgcwLawT1gR5eeKiaPhbge4Xk41MRiG3joJq2NsavZGgr9gyMUUi4jSwBm2kXSJudGwuyqkeerY71u9",
  "key9": "4HZj7phcceE5v65rby1sMyhCcJEvB9T9kxakuEQopPXaTbDiAmvBnVtcwfTLNvdpA95wmHEn4v8LogmGRYZfZPQ1",
  "key10": "4etDzVcoV1u24nthvB822iLHAr7akDXGJ3NKa2KVJw4sbb3imywavr5GtnNcmGCnLj6YrKNcxQ9NUQKLCDNWUosR",
  "key11": "5dbtp4HgwHcpC9z59qXURu2Wqg534LhzKL4FzxhkcPYFzR5YPwZXVtnKTStfMx8gC4ZyiH9mYEgPKzpL2G96dmA7",
  "key12": "4agb82pMchUv1Lar1UrSbAYowdU1Dhue3s8PXcwCwKv5aDtUyuzjcyJGYvA83gkd4GRfBYZ4enPCPAJJr6MW2tXX",
  "key13": "52LiS2uNvMR68sKygj81zG4R8zfkHxvvJ5Q8tsk9so91rXxB8yDUMqyQjKiErvAECWvvxNeEzCwxeRCD9U7XfS7E",
  "key14": "42aU7m7WHA9BeHWoPsT2Ldd1EoyLsEptw186YkwoixwUUJizGKt7MfAyBB9Htq4K7xBkYKxiM6vpRFcrHBrrz3ob",
  "key15": "1BBDCExooUzxpSaR345CVwiXi71EZGoSmskJXNz1WdpxFq6p2ArDzj3k6gqCP6CeoUt1F2FPHSYkN14sWuWFNba",
  "key16": "4RvLC6T7RxovRhSks6pvv1oNhPkSnZCAZiv2xswD2kQppRkfoTkpZcQFR1j6mWHXNjUUGofm8FB7cLzfRFVKzWHP",
  "key17": "5CEKdmCu75E9i7B4nSAF5m2vuYNQH9NhgnMpq7DWsmrj8VADw8vnWLP63aVnmStnJJqpD6qQpHkVAEBmRzvuXMHR",
  "key18": "28uDu6EMDARsEHKPh6uMZWf6Wem8HjrRyErGmbzcJqTsL8J8XZqebLtwLdWD7xy4mxoYi5YNu5esoxsJEutTk3aq",
  "key19": "cNLEsfkXYRuaLZHvcB1Npcx71Aawf9jZBnHUX9ju7vd1122Zkx1CQVjJXzXfyGwCFbZjWG5RwhkrXU1kdvAKhSo",
  "key20": "2Qr7x75VaNsHEoebu4U3vP8UxRapQRT9mmxakNbLzde1mhxtRJfVVqKZ56ALcBq2efhoxWTfyC7up5KQhkTpeuAn",
  "key21": "57ptjXFp4hrrrM2su9fBrLCBxgixdreQcgppAgJqgABHma8kjNzp4KmscRewr5992jZFrVB9zoZ2KDXP2n2DHi43",
  "key22": "3VxpcjpAB8wouXdZu6hD14VAq9x3JRE9Dw7UnWffVkg238wVUh4GrFXku6PygGF76V69i3bbPsygj49vZQqALVT7",
  "key23": "3uDCZAj7XWXkQ1CqmFiuVSCFEGvUuAzgo2NsRaMZ2ny33oJJKgZP4exFFLCAMSxbeFMRzdsoxwHPfXmkdf2WE99x",
  "key24": "2UXTZnf639Fz68CN22G7ZsuM77aFiKDV5FZPFJVunk14cxLGzEqCyMUYrAGf4Uy6F1EUwG1RVrGHjxo5wFUf2ucP",
  "key25": "5oR9H7JBjJp2zAFHo2RnRu4f1Y68iMEpB9qAQryFdpEfMeCKu3UkwvJ56VZrg3XWd8EthZyGwZbX257jLKwfq5cH",
  "key26": "5mvMKEiCNQ1yj6vvAhRuJwXvMzTjk9Z5Z5oMdo1iJeq14QfmGLcULpsHZ95Q6bKU5DZfmZRezF5CfEqZnmxoSRSR",
  "key27": "3oTdadgxjDL5Etu4mjPGwdXFtvBYAnZvf3BJ35gwo9e5k8qvbASDpjQniNvDfK6oHTNx3PgfCp8zWj3wLtfVBC66",
  "key28": "5hE7DywrKtY8anB8nFUuw2a8pT6Cneo4pKpGG8AuWhNYxU3FyM84Euh6UKPHg4WcHBDw9ahW3gVqxJ2Mboom2MVn",
  "key29": "3wfuZLyfgtgcSC6Kz3PCYug9B5qXdnYbdaHhSX69pJito9RhFPp91KSqSkY5KwHB3PqAb3KojSGuouJx6cuZe9Ji",
  "key30": "4YjR9Ag9WPQd1GFDZ9Hu2FvmyejezZ12LbjUSUF5jxS4upvKzLtyz3MKfvyhzW7pEcsLkhzwHkr7eecwnPAMtRCj",
  "key31": "2teGhFTm62ZPtD7pMLNwGRvQbYxvH1Lk3ji1nKWJPUXCRbqnXHm5jBQtos9pCL4W31ci6WJMkkYfMJodXVDYHZjw",
  "key32": "5Ccw5CYiBqABcPhMM1w4nNoorrk1Pv9DcQtQ2sDKZr6h9iPc7s2bBznqtRkLFK7ZgTxTJFouiYtqLisYyHNKvGM9",
  "key33": "65d9iw6ocZTri4LsBRZUue1yh1QFJFfaiNEuBLLQ1jYq2W3MfYWXHi2SkaAhCmJ1tdQTSBKtthcLN5cti12vEziL"
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
