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
    "2EfaAoZFejhiwy5iRvGfnS7Q6DJPjUKuzF2jpR3pmjX6espM624EgDCDVqRNGYSFLnx2SA5PRWbaTTYUnkFsuPai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1iHYoc8RBQ9vh5b8Bf7Yan5YyvpR3pBq3CAbzZ7keQtrrnDoBhRt2GJXycTQJiyrj5ZKZ2FCVTiSC4FDxWpDL4Q",
  "key1": "3RJGa7o4F3GCMbT8im5nsQkE3QwMwGaZPtmv9EV1UA65epQHfi5Hmn4vB8pFkrcToL6D4fDFvwt5FtBfcCZfnVEg",
  "key2": "3GcYXUZo57gC3SmQjVWYJNsWG4mL92dBgRxoMEXuunVYDyNtwNdrJ7aEURZEpzV4qKb9zzqTXgMFHgz8YkAWQWDB",
  "key3": "wBGUmioaBqro6L9Wk5fLLor6ZgGY5BBvkkjmCKtJ8ajziwGU5uU5mUBm5WysESF2rSBsGD13W5QmrP3pFxEnvgC",
  "key4": "8mR1GDUBq13Arm7F3A39qT9p7dzCtoTamjBULFVs1DbPAFcMVYkQGdPPWH1ZcRUwA29VakcApsm9UcNtHcLnMWk",
  "key5": "5MAPbgoeP82WD9VkezrkTJmEunEVD1n8fJ5FvSKJg4kQ9DBPmKP1ho9QVuAx5nKFfD4s1t8zYoaGPYAnXgAKNyBM",
  "key6": "51cKTuy6eKQL9FXbsnUFrMZQNdua5kW99qqDCU4yupMYuKgehhM8zsX85GbRnDh4sjqvyv8XtogsNXcD3HXXppwW",
  "key7": "2GB1DpdLpT2ZsmmCJBGhM37756UvTxEx5hhGSVMQobS3soZLwDnFA7fMuoKjPqpFXE8hAu6P9YexWycFrCpdRGLp",
  "key8": "4Jnt46FVvKBCJfUcU2M2MN6UCtuXErLauELLwR8yKtzhfarZR6td2bPSuyEcf1nHeYYJEQ2Tt7TYzgLFDgfRuJVM",
  "key9": "fUe7SztyMNKy1Ypp5XTr2z31TKo4nFYQmCVcbRBzN1M3o9RN67Kct2uv4D9SDGA8VetJhcuiyx7FjR7heyFJsDj",
  "key10": "YBKrvj44eds5XKeCj5WDNgTYHmpruiqdUV7odA7rxsRmUkeSPCzhXKtSSCe7VSa9JDVFaQpAqDXkf4gMwjn5v9E",
  "key11": "G7dyZ1ARxzfNp4hQbHb1YbdHCps99vyBQpFMaSPcEt2vJrGq4b6oMnp1VdFVAxs5fcnRJgP5eRxUKTxc4hFySuv",
  "key12": "eaYWXod76Lrj46cwj62wmVFxaod26vAxuGqDubtcN2efsFeHjTcTz4rmXhW7iP9Whbe3Hsw4fUL8QFRdvG8Fgxm",
  "key13": "5zYjB5tmQF9Tif2FKpgjGAy5FwkEAyXDDpGCFfzeHaK7PY7ARtWMBGvT3VuPm8aZiJVxXJ4KfRfBmMatr86vjQAo",
  "key14": "2EN3jFnuWQ5ejdgL9c7RS86zKa4AGnxdcq317PhpHxsVXDLbFxVnXy5543E2GNw3YnwNHQyGyvWj7DzCPrCfEVCz",
  "key15": "3F6zj26bX3XTGYadht6kn93sS4bRbnEc7ggTLVD2AMDXghdHmuBm33WaTMkbbogwD2a6PSuQdxmwf7XXDuhakvMF",
  "key16": "4o5SzurVGEaUeJ1D2stVP4ghc6wToFpRAVJGNUAGGSRtHrSgccAW35i1r42Z5WWQm4prZR45AeNimL5sqrWaPDNn",
  "key17": "55EqwVk5JaLsmfuhvD7JFNFjHyFsZ4gobprM7LbDYXEoJRxxxJ5LbbNt3PBuyfmfQQyLd5vnDPnM5qes6R17H3jp",
  "key18": "2MNK6moSXSryxvCFJKFUDm5n3prw5svzHaVLZ9k1M6bDpXmVzLwWS2ru7NFvorJ8MzKBGd24E5ewKzQ9qwNz8cv7",
  "key19": "5QtB5ibSc1K5rkP9y8wqADCk6tazgjfi3JaXQWXLtEv1c8AQqCmWrvLcqGjNz337cmfXQYUYf3v97Z6tnKCh9cbc",
  "key20": "4XmNyC5jmwHYH5dPaZnyBQ65X74cVxfgtTfvG1u8jEd7oShiAaY2YVzEWJL34YKUcGreAgz9PpucgrbJR1oE71UM",
  "key21": "5Z3sB1MSZt8JcVvF1FGttUqe6XeFvHZpDPsQnT5jJskrgXhfWLDEK2DomAEjVDBwJJyqPV6SUEzTkZVeb13CcJoC",
  "key22": "5g67jBPtKRcoZLRHRNkohtbUaufFLJarCnCdFv3nBUzHAhvk8AwzqDnMCEMsCBsBJESFrDYpJwXZN6CVZU7MTECK",
  "key23": "3VoYBRG1uSpsNfTQb74mkNtD5xYsJq5rHCor48R6dVhk1Y7R5AsPmPZERvLQ56fkCPXDUKdSwM8d6a9iE6BEv4Aj",
  "key24": "41XCvSTr2XPSFbJ5BhBmoUxCxaurCr9kJ45zL31uSCjcS2MoJovFXzyzJc2Z9hv5KrPwQZ6R3H2e9vuEG6TfvTy8",
  "key25": "2WF3Phj38amRkniRe6qNbYgt3a19qQe2ymoC6yMNcLcfvCQgazzBGqRfz19GvxMe1vhnajwrgHTc1dEgx2UQWuAy",
  "key26": "3RE2iTde9Jx93b65VQtE2x5rG1HQqpjeLLRRcKsWUYQncuKNRqLfmabBsR8epqnrJ1rXSZSKqrepEzHN4JziGvDB",
  "key27": "2bb74ZWbCF2nqaENAisSvhnngreSJicgPznN2DjLHTAXjHybbskuj8f2abten68vbL1ergsQPQJ32eQNCy9fe6m5",
  "key28": "RrPUsKn9EEXtoY6P2Pu2QNBKthRBR9Z3cha5t2vievgAqV5FQ1DJ98qywfbdDwfJHCj3uhVuCkvT1TFBZH1UNiu",
  "key29": "4RAjDNtCtSu6d89MeETaZ86TBVdNjPhScG7q2sHV27CJJ7qN5j68ukqkjkRDGS7ZaRxNKX9gpNcuZRjGq7gmqezH",
  "key30": "Bhb3PYRzo6JL1pqG7gwGDr8UqVR8LHLyBTKDs6dLkNHrK1PQxt8GhMawfo4txirZmEWpzMuaDKBYHXfQDP7gLY8",
  "key31": "3ZAmVUYeCMrzUWcXByTXHqhgNTpDjgR9fQgq3qb79jua7WN47LFzcuTsiCzq9gT6aQJ4oAX2gqU2e4ft3MM8XdYb",
  "key32": "uFmtzCLdJVevmDcirNRNmPvTJKRBXtM2KpBfxaVUPTzcCpxyhErcvqBWeipYBunr8Ek82BAFyFdjFdyf7v3P5eJ",
  "key33": "2jxq4iNhoQ9LsFQAxuA4kqU191uQyQN8sjPmCq7S9d7Q5TQHjHEjercLw9UCX6DTi7YKCuyiWz7MQKVztVUTBSDV"
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
