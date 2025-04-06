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
    "4UtxZsGyPZgP8jUnwcYUTjQRCouXZwgcEBCejXK7CDmUGGd8kFeehomdHkE933n9thBosfN2BiDw2ikaJHB8qAML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39UEmbs6cRMKwphdf7TzzJdWBB63gugNECJMJv7fvgQ6xAnpKi6ABy3Rp3RfH39T3vfSsDSvU6ojdGq5bS1NtjLD",
  "key1": "a3B7QtfZvXBFsNnCptPTqDu1fcxJPfgvFrQqzHzww6gQ71sc2wNWHuaUQgX4psmWTbagtEcrBeJ5DquUGgLJx1W",
  "key2": "4MARZX9HpxGEwZgNmCTh2u9v39cg5jeDrf6cxn9cFjDRbEpoL8fywNmWPjKavUETbJAe4Qb3SiKPGszdBUzkrcmo",
  "key3": "5cTj265ashn2mixNEBttetBnzCuU8TVevESA5Ee4coK3G9YvC7sG6K9SwGLfrSj2tkG3NRsiVXZ6YyXGgW8xfNvF",
  "key4": "g5vqrDWuXCn2p1go7uGmtC2KH7MJwhx5CkipGGQVZbTPAoGhVoKodJYEDQ1de9AwoQzN9VNcvukgNn7fFDBNnhS",
  "key5": "wDyCPAbd7avwvBNnfUWHgv6g6VuNix5BV4z6rzyakx28oyMufv9w22Uo8WtCM2o5uPHf7EmK6jut8d1WCLt9ptP",
  "key6": "WcQSb3geYes2tEc9oJWU6WrmunabA1Zy119cttKpoczpajRkxqT694vRJT6n5LeHtZY4hY7q6KcPsXRTxfPPaqY",
  "key7": "3UvH2XgaKp2rkUJ4KuqyhNhr9ZdXa7FvxJG524G55kSdjTyBKMYhjfgsQBa9P3hmdy6kD8y35PtLU37mZKZfht3b",
  "key8": "4gEi4dd6wieH8FUcXhztB2MYJFwqKdNdZHpZFwjoQvtgSCRB8Hqzok2qNVk96vdhSS9MoACVrVDuEopkQFgNonT3",
  "key9": "4nhQbbhPLAsvVvrvwqwK1dugUStC18ZjEZkz92PTzMvqcyNN9sPYV8Av1a3GfzdSGQe8Cde9yqM6w6fj55tzPw2Y",
  "key10": "yp2NxXSLk1Fy1iAycyANvggZKYdLJnimHP8qA7hyi3P9CKCrfqESTg8m339qfzyqTGF2QfFneHot4UVQSP2c22a",
  "key11": "3Ymoj67NADU1TpxxB8tieKizRcmob2GLBUoWhaJ5s49Ma7LhTgKoJFnoxd9QyN3hYK8ybYfRY4d5b9x7mcrRMDX8",
  "key12": "G9hBUrc6dP1spCwZybuegoBe75xM5xSgREqzqsJamRBZqQnHz1oRUPJVGQWj2qC9Fw8Dw7Ru65jzNJW5nZJW3Xv",
  "key13": "2jYEF3589URWMoTSeDDT5KW2nSGU7w8g12gGgwTVfLwgiQggQZ9zAezrugRJntZ8ryaofaEHtXfcScDDrC6YdNgX",
  "key14": "2p5QvBeeUxJb7Cm4ckjrRRNf9R17JGNBhfSEE7TRCawDK8Vqc5fSsgqd28JrfEDipyzCmG3Tt6AUBXNwvyJNSoHQ",
  "key15": "nHes5QKoTWGikVcaBisgJBBcd6G1Gnu2pPmL9aZMMd7o1giBDCg9ibx84pV9ohpgeYR3Wd1pSnSQ2AcMpb7YcxY",
  "key16": "5ghwQnsM13tfgJQpJQrDgA7rzW6eAoAQrbs2Z5nifTsPK6n9dogqQ9tqx2DBW9mTHJdUZjod8N6bhixSXocwZeSA",
  "key17": "3fgYTR6nJQBh3gmGjB6s9rsG1pnupSqFQRqCwif91Q4bLqoZ2hS1cDxWinaPonFCi5rvFwo5wPW21xTU66AMLCf5",
  "key18": "5mEB4YKs7XMGAbAPgPsJuGuqtYL3A7uLEdzn9HGm4VtrCgLHKnfxip3eVvsCeN7Eq5P4FXs8hTRoXmAGCX6MV6R9",
  "key19": "3xFhfHeVfBgPLtrrAgj5jXTruEDXeQivno46kcjGqyLp4dfUzGymBBr1uaeTNq6jA4C1onT2qWTgwYjjKHzm1C2y",
  "key20": "xDxzXGsevPaidMRXxiUzEDRBZzsfKETZZ6EmS4juRtzgCkM3cxbPougEpWJYg8Hg4uGyYmK5eqqbrWCe72PMcoC",
  "key21": "KhPiUamyhBoDWS8Uv2cNLaNGfJ2JZK2os1r67zKvs7e4t45MSjKwNewvb8ca9BsRx6ZJrgw9VXhxMqzt9nesWeE",
  "key22": "2yRZG7ZqTfYwp5ddvLjPKhyaM7agmtx9CxMs4ujtwNyfDmFedQutr4YfPZb4gkqM7TXxzcPHQLGYcKxoPqPa8Y6t",
  "key23": "2i5rGNzWgNq9vQ7GkKzwyXX6CHRr9KqsH21iovjBh9fWUqhiC6hFootTCuf1uKv1ur58rsgV4KV85zYrtMSsnkCu",
  "key24": "2tXA7znnRvZEmGUHm5qE4bnN2UvT2vbt1o66Huzv8WjMNcqNciNZLArvWKFd4WqszRQh69skHXDxAVGEw9K8wGf5",
  "key25": "38s93Cwpkhp9koGxi3AmVr9zCNY9Pr36UZqG3ZEcV8oqXL1DLRFfuiMx9hcMo9m1BXLSAj1PKRKddY5beDqX9qNK",
  "key26": "3XBk1va5ycpTpnEvk3CnRtGvS1jgKtcRLTXwEBicZF1L8oy4E5CBGYTXsJkYh9Pyz4QbtKvR6mk1pHwGwugoWFhF",
  "key27": "3iA5bFcG7DaYEvz2hoiNZ5mtUKNzgTxAAwtuLKoiUaUCqdQQi4r2HTh5qnHYUsAK3i597bWzpjwgoQ6FGAVRqqw",
  "key28": "wrLkVMfD7zdnkHq2u2wVKhc6MFHWsshBARbn2tWzbHbZzfBxS94ciKyyvtQHUsWECaSFmT9aXeLxu3oTNV49t9W",
  "key29": "3bMhfd8xjux5cM6guZzQtyoWNHK1zv2KKtkguo7D5ezgfQmBhboNTVJ1jneKEXbM85s2pDLQ5ohdVJn39n5gQWbm",
  "key30": "YkK5Eo7nZ3wu4LzDUoi9ftzPSZH5d4jvLdZb2cHQ5Li7fPfQz4htyJswP8LMsv1WVrQmqrBUJ8bW5WNDo9t2TN4",
  "key31": "4mQrCyVKSvfXuzKjU83vWJH4aDaV1prKQE768RYkvg5nACdb9Dxw2uAEua7fhiQ371wmMWzLut7jXhmo5FtFZGvR",
  "key32": "3uhNu1kT114C6Vs1zHR7cQC5b7qk7wgCGbNmhVajNhDuwhF1QAsDRTN8iJELGCjPRMYBr9QbmUAuxsgD7oKjmY5T",
  "key33": "58GBWoAMLqJnoiTzr9LZawUNCMmSS1JqQM4qC3C9y97s4Tk1yGpvEbANtHSqXB73JAJcguEpxRUXZD33BndboX2Y",
  "key34": "66gT7yUmNdCh1oJthu5fvCcAYdNqiCPc2wkGMF9aWcDtoe5zCnfK9JnuPVqyVQsw2JwHVKtUGdbh9HNsTNaKBhJz",
  "key35": "tr3NyNr9Rrw8gF1AaEhcz1wp4Z8xx4bkqd9fVyTRnAMV6iMu3qxNbzFUCo9WKPjmHadWSea64nEWFuBqmVABehL",
  "key36": "5G1GotqpMw6Dr4zKbbzYwUUFjqia4JEMeGNRXuyg1paY3SQMbjbc5cKB5bdstaaBMEJmXRcsVEC3WHjBJwj7iqZ5",
  "key37": "5mkLdhN7LoPZhexb6oC2kHiSkPpoXo1Vb9emRTyM2AkJwF3NE2WSJ4d9LCF4FwyV8aBGCV7ZxQP4aPayPtRbeKq9",
  "key38": "2ydC71RnFPwrMSjPh4EKMqLU5pfzwqqZRewQZ4x1AQLRAaJ1PgPHTgywqUR7rc6phz1K9dFoMCEWMEWYZ9Q9kwx4",
  "key39": "3eHagujtWmxsz898bc3XfBcgs4MmCaqibRMXRfqEufpPjBNJQfJSaNt4ubT1PzQ8nqoEWatA9ZzKLcudWgyQ6rkZ",
  "key40": "3kGi9F3aVWRZViMDSuRy4GV25pGSxN8W5FBsV8Qka52gfaqtNNnYU2AYKx5whAjDTiUteapMt4kRnD64sH33xLeX",
  "key41": "2Avh9Uv4YcVm5TMoSqz1wNnpchM16Ssc6TzLxYEKviKzPb7DrxeAwt3u2hPPdmGBce5uD4jHCAJZrqSbVbhep49U",
  "key42": "4iLye1bCAekhVJpyLYk8DNXt4Q5Y9KvBUMx4p2bSEvrh2TjsejwmFKcTRyB3aKw4p7N7ibmjL9uZbs3tdSELdtr2",
  "key43": "5ZAXS74WemNWFtCwi3c5mizgEBigEUA5j8aAHypuF76v6ikK8eazRqokiX2ckFmn1FAWXkmXBoUMNqKS378jwuuN",
  "key44": "peYZXYShjjcEn5tKCYDvP3dZboJpatYhLoVV6835xBKMq4UoNkxYBJbc13J7miPyvkxYCDvVfRAFXwSUSgHjzrb",
  "key45": "4wNRQhBiK5Co7XKRWAUxAS3xc1LGoysqQNhGLSZNSzQ575C4dcXLaSDRKxapSKXo8DRD5MRkTYYWKitF6Pkdrxzf"
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
