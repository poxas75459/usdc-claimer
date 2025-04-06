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
    "FRQkmzwkDA1x5beFzNpgMW5Erx1J288xnBXPKRq6bcKHvobM2rPd3MQzfCXB2fXkq33eeh11ycZvrHTGvgYUFJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZPyakSeQCtNkLYigs9s3YiXAUeaZJqHThyc8aTdgXEYALzr5UBA1KYFymjteVzm2roVKGfEe5vU7Sj6YJ8u4pS",
  "key1": "5iAVb4xmocq3eE7Z6rN6Lf7yoHXnaYxbRJpVwzgdL6Hfhr6T6r68iAj4Yvc2FLYY4iS8Q5WhNwJc1AZqtXzzs3Va",
  "key2": "5KM4L9G2YAVpHHcq7ofnkxTTQJU7uJpmHVJWRGnjoy67e2Sosvcn3reczWPt7nRGx4oCyhe3cZYp2qvuAhDsvEdV",
  "key3": "2AsndQMPmHDxKWFBEvLVc6JP1SnJKoEpCUio6U93QG4GfPNTR4FBr9cSFBFFqYFG64RycoTDZbNRTf4vfqExE6ks",
  "key4": "3Mu5ZChzyQJLVC27gXCeShLTwcsCz7jEWRmpxbqr7Mk3P1am1QiTSsKUUFaB4Cv9rTJnfcQjHrwRzXtq917NjR7K",
  "key5": "3fy9RKjkd5JqNvRG9Vved5oRrmG48vmb9KTtMHNfRc4JkQipDbvNWcFf1Q7F69G51SwoHSbt5yh4LEPsgqBdiT74",
  "key6": "5Baks8FcpcGtpgpNDMUTVijdFodbdPrxu9nPBhBWqKchYM8MunZpMem1VAxuTDN1PMjcdHWEqxSeQZc7PED1TjDF",
  "key7": "4TmKjNcngXn4QmAwm6h253s8ybbF3TfnZnREDd1iT5wZ5xC3Nv4f8wb1qvFYr6VVLuozCEvyGmtJo8TnJ27Hk3M5",
  "key8": "4s82B2Bf6RAqwMfh4goSTESPTmXiAeBK97MC2mwoPzCfo5aCsyKxSsnszYrhsGh1HqXvqr6KT8ygoxnU4CkA2ghT",
  "key9": "4fv5PCpKfhT8tKWvTLTBUF4w7zCeQtj8Qcu6QwthgX1EhUmnytpRwEwPHm3C7wQ6u68baepadMZHSNUgnzexBcnB",
  "key10": "33fNMbsk7PQK3Bzo54nkzuNLfXifaLbSkBhx2EngUiR2ZwtKPhS1zUF84eCuY5pKYwgoufcWuSXSiqS38L5v6TA",
  "key11": "3y3LmhsCutr4JhLnLLjBvdaFwXT3bMj5mAr87tfTEodTvop1hkm3KnBoYXkqD3BcreQGeNmdCg25dns7uV73dUMG",
  "key12": "4RUjVi1QCAWySXjNzm4F2s1es6C168YZm7shePumL4kykXC7jRK5TRyyHBKBo5yiFQvUFxujBi8wsC2ZEfg8fCZj",
  "key13": "48NgC9ptnqKafCTY2bxjeUdrXE5EGWsQy2zfaQji7FYK2rHAV23cJRLmBQTccSGj5KNnTu8rEzEvLq9NraHZpAH1",
  "key14": "5TW8LDFfCXKwEkXpR666uuE4aDeumMkgkqzYNjgdhBo176gJagdzD4bKusj7QvZ2A2aeKBKmx26v8wqFzqhDgpG3",
  "key15": "5PczkHJSFMibthUBEiYXfTgyaBJoEs3Xx3vWCnqmiBwd9Fysk3EAxxgPuN5g8zHZUhgPXEQ79bdyaTPnqBD5CpsZ",
  "key16": "2SULDMYq8hMueJbvGHgeKXKAex1LkuLMK5HvWCMHBFhBB6xXXmBvirDQMwpDKK3B4LWxAzDvsHDS4wscmW3ToAPa",
  "key17": "4eQfqdnYbQ6DtATunx7k5Z5ytYFVyqqQDfU5YRFcmoQt4UiQ8NwfK3suJ4DKMHEdcqA24dC1dGumWzSgmSym55BQ",
  "key18": "264jTeSRnkdpwtmkRURhGNYJqWfDjXRjpaN7MN5QUvQZibvgFkVmkLDJX6yvhi58oiqv7XSbikkTJEDQub9iuTts",
  "key19": "3oFRsSv6jZVdwhTYaAMJjnxj9gJKXQsmim5dYFFLxqYKR6FRQ7w6k3Mo2TNvJim4fcMM29tSx7hnmndqN5CUPtyo",
  "key20": "4W7m7Sh4eF3Wsm4pvnUSnuqFicqtPseWF31Panqbs8vRszNEKrSXsjxUBM1sPi9ToybpbiadYii2AokEF1CwRBrd",
  "key21": "2EvyepWNyx92UvTphYKKZ9dZTs1pSjuFCWNJ88FVqSi2ww3p9TvAfLZRVBJPhJvmQPQVhrD5456DS7e9ebYpFCrH",
  "key22": "2v22d5gdQr7pDxzG813fqZvRgFZb6pPt54hpqKiT4AKprp8R9XSkPyCmF9cJq2TN1cBRoWCDZ9dEr6tVJ1w6FGF3",
  "key23": "3pkb2jRyXepBe7PPbnxa3T9gHjbihCpXo3CcewgnspN9uCPBDwqaPiG8JiGdfgzDecJsDP7QwBAxMdqWeSfEYBB2",
  "key24": "hTwq42jpeW7iBrgeURyZKqpsNkW8ozpMYwJdU7B9d8e12bKZyLUUmPvzbdMhorSCWuWYyRXasymwQp7g7YRfCJm",
  "key25": "4q8uH89JFXwovSd8SvBwCvA3EVfMr9aSsk13YhDv1gNUbaB6N8cQVTcy7Fpr9129BKY2ryR9mhUa1VamaWuEsfj7",
  "key26": "3kPxmrq7SDSzciJUAmQJw3PzZWP3UTv7HBsgHGs1mDm5Ke4u7fhqBqPU6NxnV7TPiMFhd5fWLeSRFHZYNQAWTDAF",
  "key27": "2BYGBAP6Jf7zKKhMJ9ugzcdBvoGtb4zcfHcXh43a2DnUinmSsHLWWBfePAvpGprn8Vgqn8uUUR1ybP7N4gK9dHN2"
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
