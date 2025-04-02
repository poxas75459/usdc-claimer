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
    "3mjcY3qxUTRPJz23rn67x48eQL2AbaPTs16drZXvq7R5QLcuirHCLQkVfrqNqsFwKkXEHiqAmfoPsHLdWBy469gZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ieve63HpTXJfLkcyJunkc3Fps2i11c1vDptUkTNW7isgXY44AA2AZTZVLn4rA5gpmBNvJbBKNmE9iQhZAPKm3p9",
  "key1": "4HYKQrY1xBVr3XvjnDbiQRswm2zbZbFon6Ev9FgHNcXfcp1XzWNxbh6PG7becEMYhpjTMZ4CB8q3qupKV5nZ5cGx",
  "key2": "3Ma44Vmb3yysYDEueXm8SvbFiuz1QTo1Eckb5uVWti62bed2rNvKaDiprperoQDByXEw75Anzihunzi9SvXsCz6q",
  "key3": "3No3owb3bG6u5xBAHVuVrgvD6Q4KReuHxHxcXM46mK5yMpCK5Mkbh9vx4apudUru5iRQVYPbWpGhwjwDFAQJsNkm",
  "key4": "43hEM3nnXZhx6fbxofekBQoAxsMFtHzLQfJ1tpucc4q6HpAWusBZXQbbAEj9mbeEYpx994FpmDR1X48Rtc8xzMkz",
  "key5": "5nZNue8zHzms7bCJ238koft9uqg47ayLaGSFoL6MfjTJu5cV6DZojJjPeAkWtuufSq48XufJadYUyKb9kAhvEqbP",
  "key6": "3VxwofxqeHazDAYtH9HuRZc7YyxdcbnibN8w8k7jRC9AX7Y6LEDmudgPPW9UB8CsL1NT1UTP6G5Mvp824fwF2RFC",
  "key7": "4DfAoafvgYbrbxHui7pDA5gmN7rdzdSsMqrDmkReViLzHWbLQbP1CzCvphpAzYz87LBGuP28qZa8AmbdAWudvCt",
  "key8": "5qqHTXVKrcdZmyAC3NDoy4r2DprbLtajd2EyXMTyfWkzZnW5R7bKiaeo2djhwDcH2vSdgw6xYPaZD8dCDDhYHvwC",
  "key9": "3gr2h6WNd17uoBK5TXX3T3oxwyL5Hxu7zskgrn9BscirYCN1a1dx4eQ1MYKNs8xfcVCR8v8LhMo9o48pFYDpNJhi",
  "key10": "2vci9nt3hw6ZvTA1HQBFKqB1MAYrQBzbL6GnSZamnjNXC2Zm2h1d4ptJenA7x1UGmxBWn1PAExmKj8Uft6pFt3v7",
  "key11": "5ZqzCMyMbaMUpJikyVSxuwKdynJyEHaTboLvVEEjcZUuFFj8UuQXY72ZeMYjitu9qnA86uTGdz22Jvj5y1RxizFF",
  "key12": "yG6i4GQjZGFDqQm6cxE8FRfvDc33PbFfYg8Qqs3zWNJvsxba8ki5CnNamMAfPUt5918XhW4D1MadcyCNUmn4u8a",
  "key13": "5hDGyC9kqXkWjPe2JLkwoS641rzLGAAntR5poKahFA8CGLEenmXBQdpVpUy8RT4TkcvAS7pWRJ5pVJG6NxvV3yu2",
  "key14": "31omKLq9JwycxucBozqxFnFizwkTZKGQL4vYUtLy4LY62oBmsGSggfoSugQkzkXF2DBV1h244YqnDuU7Q4UsD19C",
  "key15": "KnpnmMzqEd9o5urFSLSrzXWhcjBUG8pn5MgDjn97mRWuWzj4bqGb4RgxQLjNCWeWa3EsiMbacaWYH4PUYhCFm3B",
  "key16": "2gpRo5c2gQe5q64NygY5NqjJ1U49eqyBHunzuSTmfHXr1bkYdFzZeUiLY9kUaWVpRLH1CtFDyEdPiDHcQjKrj2jP",
  "key17": "4o2v8Htd5yeDUNPX86AWxFVgJwgwbVYRSYiUrTLDA2Cz66x9UNv1z4zRuVA2GvbQNQsZ9VKzqsjgo9B81xiaBQWE",
  "key18": "5cbeqDjFXfb3hrZ1jPmWmZtaKeiR9BACUoT5QrEJHD4RoePcm8rCFgLCevGtXWLjzJXuKvQnB3YFykQaz3v1wBYN",
  "key19": "3ACJXBa78YMZqMa6nLFvoihHg5CbmoTwmbvVXWR4CFiXJW1h9zuGKXk6cKUFnhf5PUG2jufYcJLhXG7Huk2wTKu",
  "key20": "2JtCy74DmoDw3EzFPoXCWpuQzpU1ygguafcuCUEj2zeERNFC2PH1fmLHmynbsSw5nKZqdWrNXffEwMc4YwCemrEu",
  "key21": "3JymupqPRxwiabge5K1MnSfLrSgMdK1PhEvTxEAK6SXvVEbRujNm18pzRL8naGufPQrvu4LMVxv3fdvd3A27XWkk",
  "key22": "qEtLsjL8ZESVQCEnU8BEAp4xsB4k7GMgSXhRGGiy1BihG1NC51AAVdDr4jpGhM5aCNFDaXgX1kjZ49H1ggoYyiA",
  "key23": "3CHsP4YY7tQKvcmU55PCiGRTJcCMkg2cUVCWMHPeFxA3FoW2Yc1BK2mRce4kfZFzde4JvkQuNBaE6oqDKNTNAyTr",
  "key24": "2RzV5CsRbTa7FNahRNvqwySdGdeLXkCH8UByXQeKRz9ydAggvcqSSW8g7bmKGffxBnoeVHzNucD8UZohzLhL1L5d",
  "key25": "5ghT96jTkod2XLFJjcdyHgeNc3a22rcccqRZsZ7CrWhwxsSaVA5w71jwm5wAYMhuHWiJDKYvAdJNs14dyXoTJdVD",
  "key26": "3ovMJboD1S5it3DEG62pUtBRfCKpcZrN6sUggBeGf1Eqqo5u48uRkaLyqkTfgc8bmGk6r8uHkupKY6XNXTk2benv",
  "key27": "2B327pBYq8qhRgyNwVmwtiJr1cTwxyQcHwJXah4yZQWnUJ4hRqreYxQhwndnUwjzq12o3WAvEiKxiL14wByL21yg"
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
