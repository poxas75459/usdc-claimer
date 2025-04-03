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
    "2g7dUvMt24frgZLZWC7DoD5GmDa7fKCsTZWwXELiiyrUCfS9uHNLFnavQQBidxzfKPAeRtqyY7tDJ4V7NXVXFxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Y2LVE1hZ4PoEAHNettFoxzKiD6nNP5XcCR6HPc3JZgMZedUohJ6hPvMEhFT4p2rCv2Tk9ULye5XqoSSeT7tRQe",
  "key1": "wq1uy7XkfraX7Eb8QMBbvU83fSTXXoCc5Pgpa7hRCyxgfRkTtEyFGcLmBBXtULStJTGGycqpg3AFJ4KZJf9uV24",
  "key2": "pDbuUR1nM9GzmBPDhSim8r4nWf3NsjgCwXiDCB8puUP3bX8xKYLhBb6TBwXbKj2tTr5v4xYtRTuKcRtrazzv2Rh",
  "key3": "2xrZmofzPt6vZU2W8SZSEcuxST8fZViLLNzg1tjFVNVvdgK3EdpkM2qZ2rLAyQ24MXcDSoYFYpv11MFXYMHYDLyU",
  "key4": "4ChrVMtwZs7PW7omN9hcjE8NkkVhordw2CUmCzjN6H9tpiTSUotZUj6MuoxufQmR6qq5gFYZWdN8TT8CCmqohqWZ",
  "key5": "5S1a61BAaFraKn8DqRhJUFtVY1iqFy61GhqVbTH2oa3sW63G5eeNZzPSJ64VY6TkDkizWxqkNF7gGsz1zbZfsec8",
  "key6": "4cu3mVchPuGWCLta54vd8UJ2jngWuKph4DEAMrx9nV3a1Bhvtq8hSZWbHyBHQc2kTjdRP5AVkuW38VVj78149WHn",
  "key7": "2EomY6dq6AZdQkYdFbN2mdwo2cjyPN43pKNhee2mJ1JpZSSkb2yyYRd8TYWLzrambbmkoaLRYr42GCx1YS8r7Kxk",
  "key8": "5tMewimNEnGAATiLnJcCVyCfD9iN6iMc21pedpbdjhX9QJpRs2AFHNf7Zn2YgnNha2a5aZXfDF6w9NhxS1gYvLRR",
  "key9": "2v2rmuY8FRxFy312hbvVZ9a2WbuQP9wjVXgzNLJRpisf1uDxDK1u1f3MaP4DSa5gL3Wkbp3rViViSAzfdvnz6iTg",
  "key10": "suxbzreMZs5W2r9wA1nskqj76SXsiKaf2A9Udy8cYA4VVrtbMrgdSj7oMY2fz5Bw4grw9pf4nFjzsJe5ccdjokr",
  "key11": "2Bx1nTXhefsrRMRPTijRSZum82gLTS5rnvgXqhCPsTTfYdpYWvBz913rY9o57KGo4KhhVrxvcjbdr7CSg5fSTCjm",
  "key12": "2kbty45U43aXFn8eGYbeQJ2pgNX3Jar7jdBfWRSbxZP26JriPTKg2FcRZdtpyUmdhV8HSvJr64MnJMKrm55ksozx",
  "key13": "5ufNsgxy4raA8LgjFTqGxTB2gYn5RLRC1xkZzHghz2qLbn7GWC8z6wVynTFqG2yThAwV6qYGba3xjMoFHNSTL3Xw",
  "key14": "4uVVhV1ZxRJe3Jj9raJYBe37aCLn1i4eWUztvpvdyprWewxvDmCm4KAcNhLnYoR2x1uyVWY7EM9EnMjutZuVz79Y",
  "key15": "2xcNkr4BAWmxwUAMf3u1yW1sfeW1G5yD1YqxgKbyTWtKM1ooDCPYFJaNoFotAo2skX1fKnYu7MZamB5Tr4EZCgWn",
  "key16": "4JjCmoDtFojHFj8oYUivmiy9dG4LW13ZcmNy9BdSkjiQkdh5vkRCSpKuqQzPqeUbrxNtgYRXzCi1XB3TJGfSoSqp",
  "key17": "3TCmJF5DA3tjjjVJTPmH7MUzBLiw6QrhVX9Wb11LB91JTxuidG632N2XQhCCskMCyH4cSxbLtdQ1bZ3Luz6D8WXF",
  "key18": "52rjpSroqhj85CKEuZMCQt9uqq86oNHPVUvFw8qA5BQMQwd8rRfHuCPbgAXRYuW15fUzbzKfbv4sMkgyAy6fASaY",
  "key19": "CG11ChDLsxnQB6X2KKsELoWyRx7e4oXiphnz238aqYqmC3YrHQtR4EVjcxj3tdHHy6jargjg5ne2GzdBxzMRgpX",
  "key20": "27jzuKHDGTBECx5A8U67TPr9brgkY3F8ZyHuX1xu2sLJVXXqJMJRizEKi13KuE21yMMmpQLnAsnxww6r1ufdWQPR",
  "key21": "67fJTUKCAb1GTk7TSf7PbFkjCAV1m2qoLzQRk9D7snmzaCvk8MYmVhiJs9dSeZcVvrtA9NA387x6ZGsLG7RgpiNz",
  "key22": "4WHEa5EEnmJrZjvTZPCTgbsPV75h9jKudys4SZs5vcGCxSPJkowaG8DrdaB7FkapvRHXxqpMxncRp1rm5ATMgUVu",
  "key23": "djQUXvFd8Gov3xTsDf3kgZYdmD33EwrPXrsHou5NfGkCTV4JJQo8wvBknFfsSwrRW9tpwgpRfGty9HkFQGrVDBJ",
  "key24": "5Zj8J8PdKP6EdSXDtWfWdHZzLhw8BMqaQpZGVTV9ouE68mMHtt7EZem6tYet4sSUYfKT6SZuXYzsTug26Gmd6aRG"
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
