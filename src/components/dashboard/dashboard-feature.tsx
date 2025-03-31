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
    "49g7y6t6m1tbHrwuQ5nJxp5ZUpMSRthSyL9HKrXHxDHdDBh3jSEvDeLn7tsdFqxTcA2y15tLVrDtvwr74D3Q6CB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4krV1pjVGmzuxw74u46KXChQB2JVoSN8eT2QLLc8HLMAbbjoG7LV6yxFQYAv8aM7BmC9RHWFuZEpkPJpRC3RPJsr",
  "key1": "VJkbjzE8RJxrSKaVv5U8boQgujngs2CMmDoCqdL8ngzhAq96oqRpW9ABLeA7gpatiLh4C2ZTjh6Hdfq6QKgZC8g",
  "key2": "4VqAJKZeAuQutF2rHhtPezozRxgiCHcXQNdfaX66qihCjitoC71X6yUWhRgPkuCdU7pWAyBKUhnFDprNmPHbocna",
  "key3": "44bDxEzJ3oPGh6nHRa5TUxBtRLuynsDhhwXsz2TsYUkK7mgZdBB4oia6BNETzU8TdeXXboC9Gnr2c24Twhg4Afum",
  "key4": "2mbrsbjCSxPbhxv5RnohpPygQunzyCuXtoYpEjR4Y5agRH9JskCwKmNEU23GYETjUY6x5unFjNsVRKycRBAaVgCp",
  "key5": "5j4wQNUhFhMCkRzhxXkErVbkxtsTvndqifKAWuU1f2HN1vWV4P4Y4GM7brQdBBVKNnqBsUbjSHS7VyoAciota1rR",
  "key6": "4imYc2HBhJLPZiTJte1jJwpgHr7eNVrGSj3V7qkZMMDcJ3AcxmiPUsL1LX8Cod4eoceZaRqCFZjXztWdgzE19jsN",
  "key7": "4ytY3wdiuSTLZ8UuGQa8tNBhUrvarpHuc6XkcmZhHzFG6uxtR8r4kUjZy2rfJPmnjcbYDGJaGqAxs439sSTsPeWk",
  "key8": "3vEpSYvZvAwvYEevZPNVgz7AxmpU1FJSya6pFUABaKJBw5DaDnCwuPFy5jDTfCGFy3uJSwgpftHy9P7RdWpE17Tw",
  "key9": "3FZ6itpU1pHQ1aqd1jjysy9DMkwkvZ74LcWaDLtgN6qJ7NYymUdrXj1chDvTCcyM9F75kron4siTgP6aVbeBu2o",
  "key10": "2FLGSmsDYAczfbHegy8QSNDCcdz2tCkpHbBXXjVAjMKYdSi9S8h4QPFsEDPN69iDWycMC9yNsq5EEFd7iXJUSLXr",
  "key11": "2WQBtz95WcLZc7vyH5D5fAbUv745N28aKHQSJWdR2un5XGXk5tAUdHupgGXEdfeuvXJqCVY1Ef76EjLi7Uso83Hd",
  "key12": "2ttsgR37xHNvW5JcAyFepfJz8cHkrSVFQqLPn4zyd8zssGDmLiCJEsiqG3izYQAGJbgc3RAmS231n3jKdVa2cREo",
  "key13": "aSHuP9va72YazyThbfHKdPR8kksZczgJjQPgMXJ8SGE7KqcCBnoytpYPMmDuFrJ2YhFV85seSmuqSHr47661bdd",
  "key14": "4KzLNDonqFFpHnNkErcEpAcvuewZ1DA7fShE8pSfytwmpqRDDJywr3GkyQEovVWH7eF4gxSD7mCbiwsxgVptXvRj",
  "key15": "5uC7CG9vRogxTMf4KLpP1XL7eK3DJrqgRLyKVQRJSUuJKjZdi7CGhnQhGJ1yUm9aebkumNdMFP28tSFBBHjgUT9C",
  "key16": "4XzCL5i3U5BMMBCyNNxyLYD1DyHY4Ec8WCPdhFa2sdaYUSZe3X4ze5QjWZdvPmD16rtESQm81CcAQdnUi7aWWEfg",
  "key17": "3pPSsfTeSAzk1j9yW3vUJ1BaR8KE23SFT3uWbqq5GjSPrEXuS7pnE4G6vh847Q6cfMg1fKyZT9ux4MFT9TN1W48u",
  "key18": "RfsP1KkRmco3WPwJMwGSqVUJtxDSPehD5kzKJiqS7w29734WD3CHzk2NebyAQX4tfdVwoq4gcezaGjFGHJ7egsk",
  "key19": "3VafuAUFFujmC5ytuKc8ndMBgdUTsv7jXuBRPo4N6kLVLofGqxURy6UaWgoFnY9JmTL7HqMGjQHiuPFcBPw4qqpj",
  "key20": "3BTbPvHmuUC3P1Vq3yi8djvV9Q8AEXJFiv7iSaa6Scb4Vi6FvNYXJ5hzBghUjmRrTNProp4MVCacZD3xzNBegard",
  "key21": "5GB22aSW3bWHLu8rujRebfYyfR9Bji9rQ2ks8YDjwwYD45EBU6fTb75MjggSSJ4YmMX4avzV4JT2cmYYnfvwU7Q9",
  "key22": "3LMfgGU9UCRD3NqjN8sFNhRmQVMAFLNoshscgChcZQ3L28PfMm7Q5BMbZbtDs9U1dfhHCzPPQFpuka5aDhSuj8V3",
  "key23": "5vxhUiU5r1ortCt4ihMXBfNKydg8JcGytrhS6ntkWSc3MQgMszFewVhBsEt1snJeXJAPR5kp6Q9ikZ599CyWvwyM",
  "key24": "3SHPTBK3yo4xEcngtRiXjXE2kLYwEZgCJe1zUdyWxwbg2hf9LTTGL5wa5W8xHwsQW2ouvxS59xGaErevnpkwj44x",
  "key25": "5qzypgQFsrj1TWu9MsC46bEzzjEEDqZu8MHt3fVZTMeJmQwYisgKdtnQoqhPt4Wm5pxBs4gwtA4beZyLbE1QHxEB",
  "key26": "4bQkmDtFbnqj48tMchmCFP7TSVHJcdkcabhhf289BqxQhp1knAgH3wPeJyakpzLeP6QYsHU46huugoqZnhcTq1Q9",
  "key27": "66ZJK41Xz3z8n2r1qyq7bmsytNyswTYajZ3uMwksojRNepr6Qct5VWrUhZQwjjWg7kvZ8u2sFnt1iVh4XZG3wNTY",
  "key28": "nhtiEhppQs7hKFdyBuvUzWWi5X7JTLM3SJRkecsnhSNPzewZJxPWgLfmwJm3Vv9rW8i2os9LnTer1F2JGgx5jSh",
  "key29": "3dNHenK9ZHEr5KyZssphTCkp2cBNphrjycxhA9FpubStSYHsnZm8DpeJRXeCed1BBtCesMcpx4iG5m4LfB3gycHG"
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
