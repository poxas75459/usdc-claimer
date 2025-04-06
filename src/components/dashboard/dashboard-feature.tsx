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
    "3DyRrdkxNvLqnUKc1V3j5AWQSoAnxeko1c9tndgTWMdfcVM58szP3KQVdCktycSCJ9e63tbn8nKF2fLaKh4PjfZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XA2uqovSK2FfUph9nRXzfBqPbjNn1TGHQhkpnQ178w6JDjpLan3KKy7BbVF8keHezoVHFnjCsvTTiqcafPu3Rut",
  "key1": "5NGtXSCi4wXGNthn9n4nkaKm7NMJZAWwJfXBgWJE3ymumEM1XF3h8ngdNak7ATk4YRE995G21xLCY48WVpv5qBZ7",
  "key2": "3FMv1Bj66uBUFPQnD8zt37XzhMAWNQJkZKq4SGfn5KPBXZgjxu4WjpQZt6R5zsL53sTehFe8WUeecjpUzLt8qCEp",
  "key3": "aPGGDjfAsB86aM4aLpSxTgE7GSwr3QwfhTMHuWdXmFS1p57WhD5f2a1u6sTnmGEiHD3cdjGxRK5U6KQWTGY3JVy",
  "key4": "3rcac2SD43gCs9Nicg77tBuURFj44tX4GMMXz5TR6tVZr1MPusfpj1kmQheW2TVK9PzTJoy5oa1nj8SyxuxN5V85",
  "key5": "5jsEEo6LcWq9TkP9j3QaecBb8KmoY8qha7jNXkEooZxeZ3CBSaFG936mXFNzFLEJLgnYg2qdu6QH6AitTftdDZfg",
  "key6": "49xJtkcCjXQxShAqeK6aXmuNbk3Da9wKeZogQCNCxHKn9LfFMbUm4qUz2ywNecigFDL7dHRALkrt1uyKb9qVioea",
  "key7": "4ittyjXfNfeQYLAyvVrquCKP7qspsUmug3avBbDHbMTArTq2g5aBJcPtobvEBbQ8iv62EviZcZhVNuZnF5NSqP1U",
  "key8": "4myLBhzjSmMHNR1Ld8PkKKcTtrG65CszXmt3qUxohk4R9LQpaVASCi7K8KnZbA53dF19RjD8imWauXiBcvk2GBiU",
  "key9": "5HtFL4kCKFyDAJ4V4iPHV91voXJTU4hewCxbYP3kcnMHBhbwTEFTpq6RRWNcm88m4bxu9SA7pkRETWj8z1EssWi5",
  "key10": "24VRySDvU5wpeuHFPzUomfLPTEZmMzzHApFYcczfoYFTrhu2cS911Ag1zM9XkCesAu54HDETETqgvvpXgAXnybCM",
  "key11": "5rpFHpbPanEZi5STPunBDQNMih15bQAam1d7rtL7STNxcubYu6BgPP1NgyDXruGrX7fKcF6E6pMufftj5epcr9xG",
  "key12": "4ZQK57WY8rWgxRYYPEiQ7GsniHzWcEm41ZrQuTT7bY94GZbyWaJ7ENnGeh1hzMxcyEsDUPGnrk3gKkcEAUALBfpt",
  "key13": "3W6EN3B2oENJRvTk2MXcHMQmcrdaKMywY5YkCYukZXHLu4pfCCSGXXttWqS1d9hDxhuFKkCVq64vRSiqFCWXy67D",
  "key14": "4vzd6dJjoFknhpkRf9foNLmNNmfSQAbabcdzCX517S1TB3FEEfUNYqYH9GpBxi35t8jSsaxivkpqgGhz4h6ocwUV",
  "key15": "4YjTqf4F5YLqaviTNa7z2ELiS4mbWYN3PYLRSRcBqbtpA9TNCD5ChdnEzBw52fMd7CcfxSgnGNLL8t8CRG5nNLSM",
  "key16": "5vgx1yC9Ni8cURSCkUr5mG6GXZLNxCqk7me26pQowASibMDcmMBtrbPznZk8GJmvJxdLRToA1W6dt5ezL1iN8PiQ",
  "key17": "3Zgrk1f66ej3c8NtAZJs7s5P4sHh6pbHtbXfJdGgbbW72eAwomTEf1SnZJ9YmaoBKdxxwtS6dzfqGKnuT7zsV8Sv",
  "key18": "5NNdE5h6kipoR3eWfnT92YUPFWRer1qF9ti16cHoWPnkhxiMkeMFZcG5SSQMoybxesE1o8KZ3PvVpGfpML8crnxu",
  "key19": "4hYu948YBd61NyjvkR3Roieh3dtzxDeiRZMfL6sxMSdr9R1aJubMeSLM7iBnnixL4ixuRLEZ7NpEfHT3btDhWFoK",
  "key20": "2YXPcZR5ig5iqmMrgoSSznUDzFnyAAukWbUFGJnQQqtSKDbWY9bREhUJMiYXeXUMRaPgMjYbZSpBZhi3Dj72ipVY",
  "key21": "bkM3qB6TEy1bfXSPayQ6oNqtb2CfZ7gYfzYQv4o8YmKHxceiX3goTq2wvrRuNDa6fXZbqabzvm11qKW5Xkxtj7V",
  "key22": "2PexeaBw1xVjzniwtAAWSCYq1zpGCYkjA5nyDhyLAaM3M1bH4Jtv1naiJe8P8LfWWCchqHheuvP91fCAKJq1YrSp",
  "key23": "39K4FnBjLnJxMYSyvmYkAjksvxhijPejzf7eNeqPtwpkEtCiF8vu3pcNJVCcfrrPVnVUxUHdhefxaSjDUtewRMie",
  "key24": "3SqYY7ZYR9foRc3mUKUWmdU6mWoMiLYfzPLv1tLDDFFhqufFuFmtakjGULcEGsb7jjNmGF5aL4qLrBQ2Dsvav9Rd",
  "key25": "4RV95cviPjFTyneFGHwjP7G68V9hiPqwSnGFiVDZ95THQRTfkPb4xFpPvgviCbTrprFchYZGH4B1DCwrSERJG8CC",
  "key26": "4tpAMxh8kM1JwS2B1SwteAhAE4y6tUhP2Tk7o8dWU81vSxM55mYnzqAwTyKZJQ2f4WDUgJUdEqJeB1bxwtEZFiYz",
  "key27": "ZudCa7XXQHRptpnzDcFLF5VDNmKysTNikvCjRgaCSxmBcJUyvwioAcocNP362wRYVsdqr7WQCjE1T2oNPNfG1ed",
  "key28": "2EGA3VaKNw29hvRQZQbvQ64HjHmiq8v58kpYXSQM48LbWX1ewcyXqkjvczS6rhqoUjWMXWeqLqfpbVo4JBsG3gNE"
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
