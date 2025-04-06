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
    "2nEw7aZdUUNNkNcc6zrBoJqcyGVqwcm2TTborsza2XjLKQbVhgowaxFi7bKtruFtd1NGLeRqy9FUp4qmebVUMtc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XNNMZFZauQ9AeVFk72pGLDqWWuiGrsPvAtB3pqbRxjopdMfXgiTyEh3CAAt9PKJREzaEE7hMqwE5uNvvmAdv4pM",
  "key1": "4vSd3Q5JBCvCz4Cs3EwMQKSwR18qWqttLFVU9KEw8w25DS8WjZb3AxVKFQVQ1DyDSgUmbcVTnTd6xmRBW4wqHzy5",
  "key2": "5r8gWZPMoWhhSS7Jg38KSrjoa2hGkiHeXPEtVPRyMuf6TzgV7Tohp7v34EzPEeGPfnPkEB9DDDJhJMMKiQaRCySG",
  "key3": "2xWawXnGEKShMaXWDwJYoUTPWyUMDq7iToQpKSR3WvBCc6oxH6r9Eqa5H611rubLWZuJ1bmRYiWUqbeceR8CaewB",
  "key4": "F9wyMQ73C9R7iXmGpoWUdfHgAEG8EG6Vb1cNTE34EGHaKz6aMUZGbFWNNeBMKPH9eLtmUmqwUmNzpvTNyfpyiYC",
  "key5": "3FX7HGUkFNjMDuWhbgxFbabAovhHbNrFEUZmhJJo4uRapteKbEkXeqcn5ZEjfySGuiAJZjH82JYB84vXJJ4NCxBQ",
  "key6": "5kiwmvFCtikBw78WggLATE6MMixaYLiYeqsyejqsBkR38x4WboGBzEhppJedCFfyKbvZaeeZsA2mbNaFYkdHLemc",
  "key7": "4y8mqy53VVuxBVJpFBCvLju6MY8Mb6qdqJRYKyzGZ5ba45tButody7Ki1XxB1kdXqeKCxBYgKZQr4pGN3F1UU2oh",
  "key8": "662PGfQpQYx2X7ogkTSJBtQv6Qv7EbZYsujhNqteX63YHG4eMBkgSLTbrvUaZ2UapWVchPnV8V2AswdCymFPsmpu",
  "key9": "5hNdPa8YjeaFqxgD2tmQQc9abYPsFYQbN7yH2hYM3aBNmQuV1zEjtkU6285zsn14NqSWVr8Y34ytpS9LUfk9SQVj",
  "key10": "4AGqUNpkb6tid7n9uou5vyMQ9mFDFg67PqLv5EwahrMCzz3Ed9hPWcxYmYgMmmEnDLNrDKRuMeWxKMK2ipLjBK4H",
  "key11": "SbXeaKh2CgsmbmFBtyFqsoJsVD4YtEqak9hWXyAsMLnyrUCMb9GSMcYdBXjy7yYmEsEJpVN6T5V1J3jVeFb26hr",
  "key12": "5razSSsSXwUTbwruJFarKwvxtbmfRWH9FttmsQwNSJbBumnnfsLDF59KTEToXdLpR1kyYBNTwHXYKvTJrg6G2eb5",
  "key13": "5YXhKaadXM7uzeBQPUShdr2uR8WzDuW1XakTByM2QV88pwjodX6iBkp4JeeRbEBWPqhUFp3LMzRjvccHYNtyiKpH",
  "key14": "Q7S4fPzs7N5DaJ8zn9xVnqcBTFAhg8MmSEshX98VbjEFx2mqz9BMqkzCMRnb8SKgYXUCZ8SUy83K8dYLTAYzsyN",
  "key15": "3vYoqtT3UvvvZkEa4VvhqfHmsSUXUUB23j8hz4rHyzJ8fahhMZsaLfvBWZiyUXiXVPteHbEW56rTTQH3TpAiBDGn",
  "key16": "3zkD8a4axHRYFuFi2fHXMWj8FqEShmuKaGBLwFXtFzLTp21og1wVY6LjHqdNkSqWPJ5dyeaut7MTV8udEisdt71e",
  "key17": "9eALTwPkGVdnpde1sU4T6NaGYgxK7Cf4j8FgFp2tnntRSxE5yK1gX6rzFt5DWtkS4mKEFvY2U2tcYxXJSHzvxNR",
  "key18": "4aicAC3HSqmLVDj2YjivoHt3BrJr5K5TzewcmKLga8knPM9Br7BYvt2qyo3Jk1AyzhS1M8VJaZH1LuXbWRzThEe5",
  "key19": "4R5Jb5YPmU4SjNK5Wkkrff3XJxwqdRVizUQHFoNPWoVagZvPtxY6xGW4acVJJ3rjDmZ8LoC84ntgWddpVqxKb7pj",
  "key20": "22SeXAo56RPcnPtdZUuyE9YnAJjt1Pw97PNxChyXAzBxrDHnLsYiEjQXzUTao6ShyPy3Gya5DFxGsBmto8cATtjn",
  "key21": "uESBFiEswx3YKDwrN5VfkzobuTqgH7wX1bpMR1eMcgJ3oKD6z5DoHQVUD1YbVVuD2c8XZNTHpeHs7hDymEPrgu1",
  "key22": "4xeRpnuW54uvi4RjJSeHAaWbb6bQUEDwwKJSh3SgFGCnt3u2RxD4StmnRiGgFi8dMHeRSj7zq8tq98Qh3mNsBXKE",
  "key23": "3KwRxAv5aLaNce64jdEJAWA8YatDvkELxhaNAfxT9fbpQoL7i2YzfiN1ApVuazcvtv8NEbBokrPrexMQfJseNbRc",
  "key24": "gFp3R9FKRetDHsHn1JXiAaeUzxqyzGycvnJbKt7tRFbBYf4APAv7nui7mL42mxT76Yb64pD4WRHV712oAEjxSNZ",
  "key25": "2xRERkXfY2KX4QfnaAt2ExLTjjYCUJnyGp5iKjAsZPmaz1vcjWZAAeBabZNorJPrtBkNgQgnXMMuRCfcwXmSNe33"
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
