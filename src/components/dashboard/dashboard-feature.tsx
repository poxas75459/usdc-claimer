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
    "3rUkzPpJRv1Pf8VfWUxkmwcKgtuxTasaeXM9GKAtymCE39JFca4YJJDH4KN5ust2K2szoN8tJ66JwTRVtNR1qL84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4euUXZCdgNFFnMwhhXZ5NpUZcJi7aeWDAwPcDUd1dxCEW9SftG3vyBj5ivU9F9y41mTxrmUpJByBnXGT1HxMQkSv",
  "key1": "2b2wrL91sxHsdgSQ6LpJR3g8WPM9Fm3aXsUH7nfZJF9KpSUsVw3dG1qGEKLQrqcHBPtQZPsBxwtp3Ze5vwxUChqH",
  "key2": "q7NtCyzS6y6D6w5XaCadW1ksRxzJnmyMnNECfz2Q7FAnGbVzq6sZAuJ3ieHLM3iZMFzJHojY5JdzawNUPH26cXL",
  "key3": "Q16BwfiSRxemhDSyjtHuFARZin5E2fLaFJV12hPP3QFH3N6ES94qtaHkim8MPxTYkN6SzXbHze5YuWc7ZJzCFmq",
  "key4": "5cCc43EFjaDNefmwciC4V828WD3YBZpkaWhBmNqEPwDN39tybfTT1AqHYsuxRdG7bQMhYaxQ8PSLHhchnnrNczme",
  "key5": "VYwyiTZxGkJkykHCHJMAPod7mGhk1r2tdHNnWxbRAwmzrApmvGFcoocCd391Jvaf3qBfGG3Q4eCfhjAoxbsH7Mr",
  "key6": "2yKdwpGJMBKZjGegjredmGi3zZB4s4zDLQjXBbZ7H3j1DnwcCDZfnNtSV9sajAATJ1LwpEBt6ngDL8nLqkL8qBC2",
  "key7": "2eh3gWtVKrX8dWcBuH8ZaEQShyHuvA1zkKEKFYsngDpfe32etXichS2UqiqHpYFyJJ9hPcxSVPoSUgeBQwBrXLn5",
  "key8": "4V9UALTfkhevZhwHQGhyYQAJo4V56xk4DqoZnCC21cFGzunm5c885wz2fiSxwN65zcGm9v5M16Jr2H73GPhUR9Za",
  "key9": "5SfwPWZgTKHgJQLEjR9qcW9yCn8vmxdpLzr3rJp6opBtwoid5sWMvHuHMPNFmmHruQ6CMMF7wvK4RSnPUQUeAJmd",
  "key10": "2pcPwomUaiqhSHVw8si8zKt3fbMeQfZNc3N47dHgHw5CexWPogs7uYij995CYKaS8zL11XACRHUUEpx9t9dsxAuf",
  "key11": "3bVfqzyqbxZQcPdFbam6Vw2QKZL2dfixpNEbZanHhtR7DxaeBUhaKjTzQh59jYhrjEU8MtXJ1BG1tHhcBdsETF1G",
  "key12": "3FoNcbW8U1wpdNBigNdgm14t5QeghyijS8gPvJNf2jZYMTXpN8EgiE4L6Sy1tfuoQShiriLYLvEoSw6yQTq2nJMV",
  "key13": "4geBhSTaN9FU3MiZ49EfhcSJ6Dn7VyMZHxB94eYaQQHKFDM1CGbh6TmSBMUUZwYSCewBXUNLahRHBuzDK5rcPU9k",
  "key14": "2p6B6L336aA7eShAbaEnT9mzax5shgeXbwh1PHGqk8FaajZXFP8fWGjFJGRfxT1K9ChavwHUbmcLg8HxgVhcrnFA",
  "key15": "4PXyvVy2gTcYmy9BnDUoETrH4tV8UhbWycQUzPEouEmzTpx96RJBSxhvEw5H48qerczzTgP9iNd9kjvqMuKnSyKd",
  "key16": "5QEMwFjLUhiEfDzh7fVKUpiiRgj6E1zcG9TpYZbp3Fy1UJmXsFj4eQgkyk1agFzXaf5N5xYjX1VMFBcsi325UjCW",
  "key17": "5TcxF6C8CMp2JHQ3AeJL2B8fY9hDp2UdoBJX1aGnci1wRU5oRYfwjA5LwL6x8tUUJm4s6gHgEs4JtrMGr7Lh7qRA",
  "key18": "4bjLtmVrqktqKdwj6NEJYHpJRYxkmq2JV74ZYRg8NrFR8Qmjb2QwVzhdFPpZYoobYxaTbZrwe51Ur3J6Z3GHx7uk",
  "key19": "64i5xMeBLD9JUiwNeq7ix6Nf2drrd7Zg28wR15bWRMHuzZQSqzArwFjQXU3u63goDWTReQkESoyep6K2m6d1xAD8",
  "key20": "5GAztYRXaQS5vqXKvbzrWquMhhaPZuqfaxp97t486JT1Dmzonrt2aP6PaF1HXsVSGZ57a53BzshjjVzjCC314Lws",
  "key21": "23ocCXAPwsuqn5F7kr9uH5k6qBchmKGy2MTXxenRznhH5XN1HHbKva6TFAHxPbinHNBtCLfbQHG92L7THrXKAaiZ",
  "key22": "CkC2NDqXiidCh4Fve4Qojzx5bzQX3pHxWWU67iCjRrJtqjkNhAiquiicFgV418CSxYDRPSknNRp5cXATgU3wS1V",
  "key23": "4hCsSC9L78eQrv8gL5TXEzrbYbAcF8rth261HsdS4N8qQKA44Sm9oZefZUEVPn8fyoErp78k6dkS4cfAwQu2eKX4",
  "key24": "48SZ6XHkJ71e36nq2zukci6i28wJbiYwi2j8SYXjz17NzeRX3J8crmQFvZs8XsKYbGYrnhLNpKEAsZcLjnTQD75B",
  "key25": "5DnujERFGgJp7jSikGpqvUb1kgCYF1PPVzYgueRfqjymaDwRQx5ZWN9ZEoXzrg93yb4aRJCHpzNpCmPmg8URpSrq",
  "key26": "21wCpVoqcZKCvAS3qNnpf9mUaLQH29mmknuVAU7nLVpwbUfgEW4wgAXrXrxNRivE5Q2FUwhUL7TuYVt3iTzRnTsn",
  "key27": "4GryfpKLR8EWTpWnPrs3oHwNroEzJUzA9rJaAq9d7xG86giyr8JGRZWzGhMqpKyYCwBt9nUkssdZM5eXCrFGu1bz",
  "key28": "4oBLczCsv9CXewTFrnRypaSNFW9jVbqa7h26i55RvVohSAJyWSf6Cu1jFmDSoSHDcYJvi3Zm7422ifptnavn4TPX"
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
