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
    "3q1XuEjCecgR82gSGLVF1fhj8ufWcb6ohrCSFmdAy16jjV9RxvkL5BMhfEHyhfwSqFdsdtfgQXyeQyDvys7kopd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j4UWYPQDbW5ZLeCPBd4TD183NknAdEUkPDa21adQTTLYNc9P814Th5CN1rYLCVv5GbSJeoMKy4SF7kZ3FdRWg7S",
  "key1": "22mfTV8qX99WP82M56dpi3Fm8nKr9HsVuBFYLQLrni7rsmFLGqvZhtAzt6isUn8kEcBBq9A3yMw5erGPFFnwm8fP",
  "key2": "2PPV7FaDQTkeMxDsnbL5pVJyQwuj11JAioLsjF84tVztaZFeKyem2sGdm8pcWbgAPWkgsy26NdNNSWjWVmw4Pzzo",
  "key3": "5KkxePMqtuutzZ2jnZNQdo4XQpRMTaYwd1jWErQdsjRkfrvGAJAs1AU1gvkoXQ3tAx3H1NzaVf5xA4LwdRPN4kQV",
  "key4": "3sG9jVJoS1iJBE6oYAGPUB5ssAiZ4iQwGGfCA41ak4SPmsuAgmC23nuXQtsXjofCGKzZmzJ3r7nByig2h9ja7waz",
  "key5": "3vnv2AH9vUj8QraxmsUi29pwvD63mucPwbMFocvtG8K7mwbiZbZ3GrugnS7MQ72uD4kHdrZowhn7giNyDae6jdmk",
  "key6": "2UDphqrR2RLcgshCZWLwSJLEWvnU3LoDooAn5XZFrPoqVRWs5po33P9yKPpnQ6p1WdxTH2WK3Qa8xsVxKxaFrona",
  "key7": "3jgk9v18mpp4iE6R44A1NEW5EevFX4wnUwujyxEFjMU48ditafUwCSkWBkDMsBVfvRJwXxLCxnscEaWcCZww51h7",
  "key8": "574hJbeUXwh7wRNXYguxr1JPKrnwiR44uXLg62Jh1m3uhEhJdr2MWidVbJRmencDceWeQMrTpLoKYaDUuL6KsSGw",
  "key9": "5YZfAhM2AXJsohpdCCoGV1iUF4zNJEAmFK72fHF6J2qkPVBpycBUwyHC43oH1KVmwTPE6aspNfXRM4nYKktdY6hQ",
  "key10": "4AejY2YAFxYYCa7FohppchaxRvYc8tJ9Y7FoYeseQVnGorWTHuwNxWCsHEC2P4HtSA3WegiQc51Jmf5zZFodAjJT",
  "key11": "2CkxWRKXvaY6Vb1kUXSmYAGPzcX43aQiZpyxSG2aM9ZLLtkkjcMstVbD35MUk7oFgP9XfhMiVKCHByX193e2USUr",
  "key12": "38HKTxxL25M1ZhA9gL5QqcEJ5GDTbqKGw6AnAwVe8rfuyzGCWEh9UziKNdy18xGNvA5ddfcoQv4Vu7C9qZjXzPun",
  "key13": "42VSGnYkimjp5hBCr1XYqddxLGDe9dZw1ib7tUPFSAZxuupUWYd8P23NtWr5x91Ts9K9N9oJ3KjakdHC1Mq7zEDJ",
  "key14": "4nmRyjeYpsGxvdRYnkuyxaZB3W8Hfng8UGZRqtwdSVM9k8ujF9sLa133bWSqhT1QzkSyEGVM5hAUDZfcpEQxrFDt",
  "key15": "3pHXMgW5LXGjTxQ1x8B3pcMunLzcVyU9QsrBPtL2VpMALkjrjwN2VTuVkMFPKbp2XWKC5p9ybQLve3WKhYpewZjt",
  "key16": "47ydj1La4ziSbF7jiUVUXRwcEufUoGWLXpB4XyUbitUQcYvDLwPAS3yhJSj1AVnmvSgAB3GLRs5yp3Tng5HRe1fg",
  "key17": "w2TXFimddPpoTEdZycytbNk9UZLoyRfXUf8eZCvirhpWGDpzBeimybeBgJ2NBa2jB1ojd6DoeVuGHaR1Ue6NqzF",
  "key18": "618qDJXH7o5otxcUYpLMSJifK3soQPbQ2GrWYZUtJtYE4Votbi526LmEwhuFThkyx65hv2wMFF149jPJoMH9m68n",
  "key19": "2jYsxmNWrWo2oERughoCTD2imnoJ3aAsDofQGzRQR93kdzKPGJpnyw2M1BcQtN5qLRn596x6WEn7jD1MPLsFZkmB",
  "key20": "4iWQZSfUBHSMzGpeppsRX9EgaJKVdBkHuAJLTQQsiRNJrmCvnFE6C5QdGJQU7e2kKjKGf5YJPX4SMGHkouqCZZtM",
  "key21": "2Brd2wSs2Gv6LjmyNY5nShjZQ6dRBUrmpLKpCjq6Z3yB7JRV9t3B5C4sQc6dKpRQrtRhLpZhZGZ1RmasWvLEG5hZ",
  "key22": "4UyMuHECKLaF4stQ5qa9RA2c6J38UNo2eYGNiYsJxUZwq9GMo25nvRyQv1aQDzG6bfZFdRWQCy5gW2TiHTGAHArJ",
  "key23": "4CYMhyYTqGVKi4UcFWSnTKSWTqYf1QHTobVGv6z1Mq25TJ1tNLhQk7ugridVMJj7aRWzaSbdqXyz7KRhrSCScega",
  "key24": "4FY7Y8kJEMLq9ahMvY2u9EWeo93BY8ydgPAR2ihRRocc9cVQx9zNEVfJtJ5otyxSRcpTJ4ea3fh6fdPYtKNsEw92",
  "key25": "3uTQpEqoY1BmJ9fftvX3mjKEnFybXUshVgy8aJ98Mp7eAMa1DkvxPTQrqr1n1Qp52UyQVnxPmLCW1oE68E3FXfEh"
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
