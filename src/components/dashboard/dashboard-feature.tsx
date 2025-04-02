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
    "2r6pJgMyyhqdkLbWDtuxdjbtSiHK6MsTdb7zVBUXyPCnBzaFqjq7gdWu9BQ5yDWotrPFj2uXUcAoHr31ELVjEBUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gFxBBGJ8kLLJaNYMZrU9RNreEbmGa5dK8KdCFq6kGkLzEsnkJ5ksmD7jP7ZaTfZA51Ss1Z3crirYiHswhpERWzo",
  "key1": "2iPomWLHNnVK8w5ZvsrRy54n8VCW8yxpL5eYtcMHG6JYquJ32y55t5s4pQFsNtsHSHsomMRCJ6PCh9FBc6YQTr5G",
  "key2": "2onkaFWsBP4b9L7Kyi8ufTVRNCBWgeNJsGA9ij813KQA1DhPzA5f15sBei1rgsmzGDisSZrs9foAEbXJrViA6XeV",
  "key3": "2yZREAMW6mzqqTZ94ANmFWa7bxXMqM39EQkvjrd8JC9X7rFz4BfzHiHzXPJGXkY9jAizDEz4k8FpTcXKPcsQ3EJo",
  "key4": "2T5dggHkUEthsbU7KQputqMfMM3v1nBk7tPsapQwecfXTV6RkKLbdugroyTSMZSKeScDBPw3X5vJP5FA3YkWytK7",
  "key5": "54ScrDcy56q6mUypBNoDXm1cR46V119cPv2cA8euboAG1mXRAnx617hJm7YwT34go9U2p3sw5g5ASBNLWX28TqBW",
  "key6": "4LVTH8h73jmatgapDDXCD7WBdSSoAMz3ntZE2HNN1pKdE1LTnT6xoLmvgLbN1kiqVL5wWmvMBaFdYc32hc1Z9B5e",
  "key7": "2rRM2Wy5FE4M2YGto1nrQJiKLbi51qUJA212KBs2o7WN7MesRZgMSior7SZhDjFzVPGzLDUgCLEfvtKLDf3KoAoY",
  "key8": "4e8fUb9FiezHrDb47cjQeb1X9yztPhWjjGwx8WyB1pbHgzzjdat1Q2dyfVrdJx4B6fx1UZeFrtxHhAWy3ZUThgTn",
  "key9": "QRtjjqQiMHDnqPW6c79z7WwMHnwuBwSPtCHK736cH6A6DKRipYqoCDneLHjKb9Uza2xbHn4bAXKU98XCm1ELhZc",
  "key10": "3m4gu4uTJvehtBtk3T8PiMoNUaHUtxsfWPbVPNweSazCYbRPikN3fRgQdoyPMZfManVGKNYxStuy6mGEnPu2pW4h",
  "key11": "4vNnfybQLhsmoPX2nwpCiSbXuyakFEEW5tWmGi93LWffknwz77PWgPt989NEBwz3L7hNKYJxPbmqSMGLTLXVsrt",
  "key12": "4bYDaDkSojS6NB1QCzaDgPrKoqCxA2cv6Pr31C5kL5Wc2NXoHyjsyMXdFtwG64Y1sWAx12gZiWAYW5y8iipYJFrk",
  "key13": "3Q1kxSDmz36mrs5fN8YyeaTzi9Q2j7nJHsLmPyn54axK1pP9L3e59b72XYwMnLkdBGtyKAfMUxoWfuKxG7yqEDbc",
  "key14": "3tcbQFo3eRUs3fLX67VRrsJXijffonVu1sQvfGJfF23bnBfRmtPFBFDMzDdN1Q1raRAXbv3z9ap55gU4pY45yYNL",
  "key15": "4cWXuPgCZoNXR6r5vnYYs4RP1yEEgJWcRGHgwQcXvzEByvaWrtMo6QptXG2NnyigbSta2vwLqDfjM1Qyjm7WpATV",
  "key16": "2chCc26HKqHFSqkWTnaU8MR4zV9tcNGMtDicAyTEXEcV5jzYr1x16jANQ6eY6m6rtPvL96YFws6mBimREGy6SVBd",
  "key17": "4NnjJ3nnJCV37As1QeQxaxiZY3kjPTqiUhYt6hXVxs8Y62BQcjnAhcDNySGwDGKen6yrkH16GTEBWccca6353vnr",
  "key18": "47BGMZs7Dij1RLC5Y5ZdLaogV29cHRjHhZCkmeLNAQpZMav7XdqeXvLaYuzmGn4u9scbcFhtAkWZKTmZy4H9B2KR",
  "key19": "2xGS2X8K9fHKGqCRLthDmq8s91JbzDWoAHCEZcevHnhXMexnXVJoD5rzsMJnet4SVJPdHjzJsbBVwZZtE27KiFCk",
  "key20": "MoHUSE9jtZCV7YJBurkKNE27EVmy7rEcyXX5XYqSacBearwNjcVTDNaY5aCeAvszAHfb6JyoU9CQXSB8E8oj6rT",
  "key21": "Ybi3DhNTVniVZddA4yuoNaPw2rrek48uncF19kDqHFLXsrAwdDgNqQqUC5zR1Qr3A4do2aSpa5oewbLBzJiRWAk",
  "key22": "2fat34B4agmRgX8ySwkBubzZxRC8k2vNGqdm9Grmjc5PN1vGxbV4JbvoD6HKH119xWeQLKfgQHUX28dvmT9cdwU6",
  "key23": "2U4q7y5KyehYWfcNYwptvJ2KvKNMmamhgfDGYPu287muwMX2ZiyPcUNDCCwvzJJxJVPdXJZaB3tDzLUMEBAeX2yi",
  "key24": "3x2xMvpbNnSatN8yKZjjqVXuNXgS4ExkGSifFmKy4S86jZMbTDVMf8NU6ksb2qpBRdMeFhdmrqF5NbxtGp4ZcgFh",
  "key25": "3adx9ZSQdqRaQL4dBDGD42FRXhrFQLcGRepc9zFvFq9kfXhTuT4jg4oKdrC3utPVjh985Nuv68ZThvEw35p68vTY",
  "key26": "5acyi7di7ximsoLXacfew3SSaRkHPUbGLnmTUvJ74iwysJtU2kSHm63yZG1Ad6rWEJ2JfXqkcBG5HWpg5mF5J6Aq"
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
