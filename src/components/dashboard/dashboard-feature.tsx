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
    "2aEqSBCszRnHMzy754n3gbKBjueScANCLS2bTx9Vfgw5Uz7j2fiY5TKiFdzhRXeWHUsD6WTuEhxFyEhAUsqPbtm9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dYWyQbvsYr8WKnf4wPupM5GmsqPjkhrNQJpiGTjJ5jQdi6uSTLpvF6WuzavZJcpu9AFAsrwgbnTtFumDGGGiYC7",
  "key1": "5eeiz5xQJoBVx9fEuWFowZcqtDkjyo2F9Vip1scwcc2nKj73CdhjRRUHi6Jo8Jr3to5KtzzpoGqS2aamSYipd7VQ",
  "key2": "4kzrxQ5xcZhq8ggdrXrd8q9FW2P9jvxroQp9y9Xq4agQ7xHLbNZYESEoLEjtxDYbp98Qba2uCopcb88ggsEJweCq",
  "key3": "oHxcMKqfAfD3NhP9gmRPTi7H9sXyKRC2WaUimuXGV9H38SGZrJCaoDzyAyXEg5Jcf6vKY4RPSmgYRPGNzkvRDhk",
  "key4": "3UxYuq8rcDm9GBPFXSUSD4ysYbE16t9nKp7fELNA9TyBBEVrqvNfevT1BsQWWnnN2NLD26oWqjKFvqTezBzcmAu8",
  "key5": "5XyfiBKm6MZBwzNZbNQmSVxfRR4e6LmV4Nb26gqhhffrnsHjMJuVWim1aMi5caBx5pEqDmcAFFbhzeDWSkjxpdqW",
  "key6": "52r4Zc5zKqMhjv5gb2f6UyTQTNbfGaovykRfQ1AU8K5sqZWcPLiXo7PLtr2Xu9zf7yi4HyNi9sB5w7hxDjxFWLxd",
  "key7": "5Tow5g6CwZ8jCh2Khz82HjRx5qxhGw7Q7Mv6xvhVnP74gM2cLnWP5rGzL7kp6zsWnNFFSGYcx4wvdvgWo9RUKfCG",
  "key8": "4Qxe87AinrWQSxLvghKEuMohCabukLYMhosNRQfif9fk9ef6g7uHskXSGtrZvH1sAoDhUYcfpvXzx9vjnTMFJB8j",
  "key9": "442pdQR3xWLZrbn3YZA8jb6exoKWtRyoEc3TtWsUh8m1iDQZzdpz3Y7UdyMENisSQTe38ZzY2gM6xrt61tai6qRw",
  "key10": "45XJSRa8ZMnWxMBUUs8aEggw6B2qxuFbg1fcmLSBvukSFbjdLGY2btVDnzT4P6mpx6aJJsUn8cdxgREPzrKicvJw",
  "key11": "2z6ZY4TgUmQA3AUN7Eby7dfvxTS1J2jnMe6zK8snhmsebkscs1bwFyhcqsJoJJU9bWhgMkX87nAJUy6DHfedV1Tj",
  "key12": "4BckVzZ79SyvHZ717s2eFmT4DjanyP4gtCaoR5zgMSB6u2tnC7HM6NbYfYcGvYaiTGrqwFXTqxBrxm6d73yU1t6u",
  "key13": "4FjqnYcRuQP8cRLiXxWLTvYtvKKjTcxsE81g4qtiKDhAFPYrkiFjLHNRD33NMeHnBXsptD97sXVYRWM55U1k4iNW",
  "key14": "5jCNaYf6Lso7D1NcYjBKLxeZTVLCVKdHDXPzaYAjFQfAZMmbynqfWB9JEZeEKi4SFMPPznofGNj2wDBZqr4gYUB",
  "key15": "33oB1H8KBkZC4tAzzgfCMZZ79o946zTosASJcM64jC3yxJVhdgKYbRXn7q6QA8afVvsJgtbAKhEkBcZEXLTBPTbb",
  "key16": "tephirEwtdaKTDquvFBvzY2zZWnGdQt3X3ucgueiKbepScZb3hjNHAkkdSXVmwR29di8j9TTTWyXS2bvFx3uZBq",
  "key17": "4TNnHw7XLcQ76x3qhjVUJzr1c6yRk4P8vCRVu4gouUFXa378zvgEijpRTA2SQB2kPMv6v65UW8iWuiaH8hnYtA4e",
  "key18": "2zr7VAJ4chp9PwdGgywSqgmEKWpk76DSEjvseQjEjm3XYNTMtTcgWVJAMvyrtJb5RDpdmX7E7CtATRo3kkzDUznW",
  "key19": "2NFx57zctMhrbm4TRuKiYPksGWkFH9Kz69apsffA7tRqnX9359AysofYipcGEgJTvm18annqMpB7kgapZAzcbk7e",
  "key20": "2ibKryca4bYPCTd2oANGcsRNuKHQeNTDbPfWR78s3jxFYgNNsrPxee3dzbPBjNUfZk3vrNkgJFWt31ocsqQBuzRK",
  "key21": "SQ9oQCJ28sRwqxd62aBLJbAr3WnJneG9QFUDrgr89tnHi75c1VHEY5CpkDtPpFi597PS14JdDu7XqFPhuRT3ohM",
  "key22": "3ussg321zVZSrQQy6F1MotGvMYAyH9hYjHKiGcqySn5EfYWVyCDgkroViPUKsUNPYwoqT6VFkbiNcHojDAwnfwZi",
  "key23": "RXQBCREmi36PBKG56PC5iFWh2ze62vJhWkZJprxhKyqSr5G5x98RtfrDR5CyFGpCQoXvKzQG1cRyAuY723VoWLv",
  "key24": "3Y7RAa47pgB4JTvbZETYUwcEWG9RDtAR2Ty5gvZBz2V8ye1vPUDTM388W4mYimdvDhr14WdArhbegWFGktyQnAJ4",
  "key25": "5xTVomLugUVK5YRD2y7yR9zDa9hm3hy5w6VrLrPzxRe5TMy9ML3E4sjuLxd8oDFQt14YsRfofRjShNoNQREaRypb"
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
