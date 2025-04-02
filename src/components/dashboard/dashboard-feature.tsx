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
    "2ypnyMKKUxtjWG8JvppfjDTWdZt89CaNQcWmvUeiwjKRrt7KA4n81SMswYyrhdniR3iBp2fXQbn1tJFiJHCa9y5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZBBwsvGoDwnH4aNFduj1gBTe9nuvK5wbvVYzDAih3NVWHsDXaaRJUb1f6or21mxrDfQydDBKFWrtL1M5HgguUVG",
  "key1": "4FUBkSEnhUq8wJE12f2ocADk2qEPwNs2zb4GKNfxQvwu5HHzREJAngUjh6Efmz8AwCizTT9hUG5aH9n6Nbv4ygNm",
  "key2": "5S3uG7xCXPTvpzgCo3wxxuwgUbM6AXXKAr1oCvS3y74QKgVgNThsbbJweUd9CfmFRncWFh8kPACqBiUWcn2VE8pt",
  "key3": "3SQpdeHiHuLr729Pddbe23KK47HYjRT4cmZAUtaWcGKKkRcRpottL9nndvEfA6kGE61yr2v6yLQU6wAEyhn7u6B",
  "key4": "3Z2rJRdLcYrvi2fnmniLMammzgxY1UP9CxQLs8GkHZVhWcJ4eHQaKv43u4qnj4Bx9uZ3Vpm5Hx1f826QMUFLGXNX",
  "key5": "4DN6hZVMhswxbcMMAKbuNoUQzPnCRjTwghoY4dndYB3GQsL7x2DobWrRJPFDkmoqDBjLj7Ls64eDa9swg7mAxjP",
  "key6": "5HuoDVnC2ZrdPMN2rqCYqwEchVGT5ycxzPf35daJwWNqCukopNH3RNrjXdSBquL6RdkMKswCzq1KZMwWjuiJM5r4",
  "key7": "3RtuD8vUjmMhn52YGmK22Mk4i2BjaZCYGqCazuDFH1ZvTSSvuPR6UMob3mLJw2r3b8wE1NAuzKgU1mmWxBzPoT35",
  "key8": "3eQpCoExbdMUoPWPYXJwsiMYyhVn3LiMH3515B4jFGddHbcDCfZZFxNqReGMRLM9sn8LKPwpAeiVz3b3nRVTcgaF",
  "key9": "3szxD3Sc1174M6zmWN1QGRqGAobkDxvRsZc6R97MenUs5MuuWX4s8eaQyLMTLa1TUaUHWcauwjGeAU2f23Lc7EVU",
  "key10": "2sUNf3tf5PGvZg7qpqgCZrifc3aoqJysaW9KjfRYQzy8VQjHn7oRV8n26stsGj6SMAw2Ym8Uxx1RKE496qNB7aSz",
  "key11": "4jRJa3UXNxpfrswkvB42DHjvmCnQGJ4xkWJ3hRwNsC33ie9vjvQhjLARukVFTbTbQjw4WhdKZUPiE6Qr6ztuwr1J",
  "key12": "5yaPWZKU6Cio32RVKLCafbnVhKuGYUHMWvpQtEgmGtxQJXuNhLqA7CA8BdmyetTSzEDXVrRB2fVfz3fTr1imGrki",
  "key13": "7LYS3BvrSqYk6NqQjRZHSeEJ64Km213d93g4t7BcHQ65HAWVoadkQSZJrYTofoWYx7Jvy86hmYib4kNNCRo7fH8",
  "key14": "2nUNdtToi6vuiM8zMFh8koZsqig7YLkVKsoVVi4EqPHjnXfwaoc5WrSZoqKfG37yegnoSEP2uUY9pGJS5Z3qqLqb",
  "key15": "3UJt5JtK1tQaMwAVsZWqY29WyeXTYVyoyoamtb1quAdFwgRqtWzQmayBSogMhLMc4DcwJNyADmkdTzZuiqN8uoof",
  "key16": "KE1qfrMTA29QqpTSpCbVx7xWMuLo4DpdYreX5UGbdLHnQJun2njhoY8mg3XNLNDBBtdLM6pJ4t7Q69qtCmSNGjZ",
  "key17": "5LT6nHPyvHYzju8gDaohKDBHZtaVeM72B7MQ3RN7EV8u4oByeYAYkYasvKpKhZStRv8BmishALedMh2VvYxNj7B3",
  "key18": "5CtiVa8aq29wQX8SwRWkHEPibBmk25RFJ4hLJEVAJYYirRREkwrfP6jBsmMjSBVPG9kJGgvieCWzbENabtTV21mY",
  "key19": "5AYjdqCxR98HdVfuwPjDVLbzzY87fUcsMRACdvaGrDzHVFepQsJrXaq4wqDQQ5JRb3CXtnecmJ6EdDKUWpRgEUcE",
  "key20": "3wf82FM9FgwoAqF3DMyH5bsf54FYLaNsMDdrxHesVonsnnkxx7bA7Ax1TbXU57t9WdrhGzzrE24c1zHcTDZSPkHH",
  "key21": "4za8UqtuCQVG4xA4gJT8EDLdZbchgtS9fH6BHca8GiCxv2NbgkNyr2eNU2M72C7h6dpnf2pL7Yu5J5wzJJ9kVdh1",
  "key22": "5JjF2GwTAPBTJe81w8Tv95Wsp2uS8vqm755sJpknWULGTXphXy5mwsd9zSi14nwsTw4f8c5XcFb2bs9bhoMREAAt",
  "key23": "5wUCUMbJX27RhsFizKJmMqREnQHto695n5FZ5vV3uRsJ4CWMrL2jZfTgJCAFn4uN94QHgDbudSj2AixVPyhEU9Wh",
  "key24": "37wampT42T7wNP4CGX3TvJjmjMunFaRyPzsm74f8zqmUSbm7Cxau3SpUwm2yHgxj4hysf7hjrffbYLWR6XoCb9vT",
  "key25": "4QertSDWkYc3ioXJ4AL5oRs2H8Z73KhrxsFv5z3Usczy81Tcbez38V8okAMkgEoTtRkSduQKMAvGtH4uWhLuqn8H",
  "key26": "4zDQJxhtt2oJ32qc9LJgW8ia6EwvrdEyGZzFkFbHC4BzJeZG2FtcBxaewaxP4mz4bpkbE67Pew6bFfME9bzUMsBa",
  "key27": "CY8nTYFiYUAKscLqnF1bDXFATDyQay9j3kX5hVHTshLaBCYYDVhfFU6Y5MFsW1VbQd8NXuRBS2btwoggQ9tbBox"
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
