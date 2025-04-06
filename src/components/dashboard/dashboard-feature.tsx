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
    "3jn4o46JA2rAvfrdRzD6A6NXwWJBW8uJU78tzJUzjy25v8Bh5icEZHP434PJy8n1Siz8YDA46AxbJp8P3LrTqqZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oCduMatoeRTVm8one1Auxmd42SGGVrUjbsAkjctFUWa7vm98xizXs4mt3Zsi1y76hyUj3t2GH9yPsfN3gQ4zm9",
  "key1": "4ToNTUVXFpLHZGNUs2uGfg5vPVvbUHYGEdTW4TKfgHrCbDv3UTw58ZwBzpPKri1AAQFe7jhwYozkQq8pfGMchXK2",
  "key2": "237VkVUpKwe6tpcr8P1mk9oPneKryau324uxG2L3mWbSdLvXFtEDDg23pKzLf6oatCNEKd37wewWNMmhgmgQX19p",
  "key3": "5wwF4FbtvrHogSJmP6EJngQirv2CUcKDW6ZWD22uVieC2YuSUuuMxUVhUz7yBBZsux9rBUNM8qwyjGh7EnpNBCZi",
  "key4": "3NvzPXSHQjygF4anf1veC2u9PfzJ8a13qMDfGNiuyoe5PC4UmgZzUow1ZeraRWQUtru7ugUWRQK6TGufiUSXDPKe",
  "key5": "2UWzB3yFLQiu6s76iSN1ABWLA2MLP5oekiKVoC3vC7tw7wsUmTSjMW2ZLX7KwiQRLKSg8tFh7neuKJpEkDCoABA1",
  "key6": "2YZUG3EHtCW3JouxsV5JAJP5jsL24BfUyDog5yUD7FjDTnSCjPSGqdwTY9fTk4VqjF3QMswe23sVyR4HBhJeZpnL",
  "key7": "3Z7GndqHkwhBSQ9opgbdjxgmgiSATLHgVRVjVTfMXjZgkqUyRVM9vmdweAw9xNuG9S2Tw3rwUKaV5pqXXcNCLBNf",
  "key8": "2J7NbEPRUAVijYnJJoF9JdZavtdL2sFSNSpS1AFjkzkagm2J9PaDVdnTv4YvfwPs3Ws2wd69hgoNsj4vNVJ4BnCS",
  "key9": "5cokrw72h5qHvfNbxTBDFHDF19fEsC2Q3xYxeeLQbPhxMMN1a4weD4oP6eau9CDsx9f3RdtyYGsMrxbWgKpdDb1n",
  "key10": "53uCCYo9bzMBQpKHy412y52s4vzQ62A7ZjkUbiFG4DU4hfH4R6wx2FTeWEfE8pPACorinVrsWMjzqonvAwRL7MEe",
  "key11": "5MdY16v8ndW348nTAw3m8n9i4Zd7PvVD345a4W6YMs2yq7jvHJDAjovhY4ViUxtS58RXDUq5fg1rrCfP3QZ55g9r",
  "key12": "2x1RZ4a9VyNzyTnyYkmSrazjnDUkEBv9BWL9XoggXPtyMEmZhtLxbZCivZNgRQqe1xXTZ5DQwhMLQM1Per8wBgXa",
  "key13": "5Mb4bxhuhchBVgUzCpV1sj9jqJd8PpjqiYqxFRFNJSnUJqs3oMYcXumeRwPGPmyYkhG9zENpKW5oBDP5tjVn1dFi",
  "key14": "4YRnT9pqCs7K9JHaWvdFVkS2qVTupVmGaG1aYCHHzu1LZUgiVZbN9V4fBwtFzKHFHW6ewLUfzZa6jjJKc3vmhZsL",
  "key15": "5oAMZEFYpwaJxVUnaub7TGJ428f6ZAy5jcQwgjgHUgiL82MMAYN3pGfckxDAudSrMULKduK3SyeZ2cygx7z3pZqp",
  "key16": "3CgMcLXJRNSfUqpanBhbf9zKtQUNHJZctrAsMjzC5NyXRbtXWAiAzEL6d9f9ZaW6Z2znm8xfVdBZHQ4RvT78ceK7",
  "key17": "Wc3q4yDph7gPN9bQnHbm7n7NvJa97kggnNeGXDvz4n9eP8hEt6GyXKYwttkMmDci152WC7dfxKYfLjqiGaEdgap",
  "key18": "47yNtN1F5QzFgJVQDvtszA9J2WHDBSSvaHfDURQM1nf1CKq881RRw81j5vdYwCz6WSouKmVgd7HCiWqax2kN6mo",
  "key19": "5fwPd7q7qzLfiZu96NSACLUVm1NgU8e35RpAD3TL7cjxY5mTHfJENYcXWjwnLykwtXD5iBvQaZZSM52GdJMDpnfp",
  "key20": "cWdsfZSu9EjR5vm4Edymp9xnmK8tpWePz7tACLoyLDHWRur9FH41fDcpxcc6Z2wJ4oh2RDbFEGqY369ipU8Fz3K",
  "key21": "tWRGRtKTc3qWwgdJzZxAcwuCegGDWPQvexFLDBDH7kPsPUtVc3dt8jWhX3he5J4warTZpLq8MatDKNdMiM2XG1d",
  "key22": "31fCA2X5sHxpRao7CX5oEPhxKEuEdhZcFQ3CASABSVRkhUDYghYMVmszAfFQSSLrVLZ9YbCi7S68218Sr9knhUh",
  "key23": "5AkQ4yV54iAhxXeuY2JnbdvKtb4YVpT8rKN9UGpoNCigEJaA8eMr6ue5NrTcFvbDUwL9ieUuWZ5Vxvp3fyUnkqgM",
  "key24": "gYQpVo8U1ixgJR3gzRpkDnLTp6x3BdtB4DnCtzcxSuGjEMw7HjFMUM1TzRBpxP1mTTA5N9267XswR3RCxuxKci4",
  "key25": "4axhqqi7je1cnhC4XmUfFazczJSMRhWruQ1W1aPqcpjPTfCEFucQJt55Lgm1MBUQb2P98vEbZ1ZPh1AemNNeb79R",
  "key26": "21Z55orvYsw2frk2hU1DthdKiLDiUQQSW8UiVGbkyXDbNWbfkdWxHTTuJFRnSeYSWRXpnZXqCwTQ97GTPuTsjNk6",
  "key27": "58JuZYu26t1rXpnrPd7XSEbbPmdtTS9BpCn49gUJM9av8Jk4oT2zf2Ed9aoFaAykPbNZGrvwHuwqYs2UzUxKD4Kx",
  "key28": "qVx8w7DZmuJt2JjCYZ5EzEY5f5VVVNbDcCycxDXp3ekCpC4pZviZh1FoLZNFgpN5e7MmyXNW2htfG7x9VaQYNB2",
  "key29": "24JNECmxVsVys7SEfL5dNgb9M1mB2p3th2PfsXFjxExQmTQ6kyYVTZ5QczmrqTrc8d6o3c5fLneQ3N1aE2euXWZY",
  "key30": "21yDD1nmgkzo6unKE1gwJDg3w3F6RFVSosBCz6uJ7rDWLvjaDxrrjFacZg1n6NY6QcPBSGhYMrQKqY9BNJxfd93e",
  "key31": "3F5PtXp91uRDx6gHRzDrPTrwa1js3LarBfLQvmUaVMrwgPgWr2nqGpJAaGNDqfMHTyjX82mihnDtRb55qZSzukoH",
  "key32": "38wpEquqDejxJoxWWmbHNLaaACT6xJFhtB3pqhfTwxcyxgSNgtiV4Qb2yYB12F7jy1Ly1ZjakBghifvgtH5mbNG4",
  "key33": "2Gdp12WP2LcKTVwsPuq5f6CkUiXEgUb2zweGHNJXGLMG6DvVESeDsX6PGNcqoRihq8ZwT1wVsrP7ZEo4zrD9DMN6",
  "key34": "5ySo6prmest57fkM71K19LULsapoXvfgvMkh7weHmtbeDbdFwpFNC3XmDB3N8vKnLpQt3He5jYgdmYjGe6EfkpE9",
  "key35": "2QF79tzmixM2A1uBbTkZnujFeGKtXgdU1XWGAbhMxx6Kd96UJhRKBEF19YSCoNauKMLm6iP12YfcJg49ygaZkxbu",
  "key36": "3yuXbY9q6WBx4NhMjTseYPbSuWTriZXJmgXM8YhbpBQhJvfQY4jPaSyQHhV2NANrmASJLeNuimwdc6XJCTB6jUP8",
  "key37": "5H1CYAEcFKvSPSmzoCeYsUexH7pSG4V71QbX9ZaoGakwCYrw2u1L7HkzUfAwvgexx4zw4U4EqnfYAvsqH9Fj1Qg7",
  "key38": "4cwcJwo83YB9QDXZLHS2rrpGgQmKyovyUNj2keUgAoMcSyutd351JFDkDA1mHNLXQ32RWuRsP7wYroKdZqVbYEKG",
  "key39": "333G884QkRobVwB8EGpSsuAsvJN5Jyo4Q5w2kJ25bVaR46pc5r46Wz8tnoBWgF1F3J2YAQ2np4swZy5ri9aDWLy1",
  "key40": "4zeahj2RPfhb54AumwDTMKnoXJZxSGY5UmLFP5LKjGswwNxgxBHEqLwJPhYKqURN5wrTJ8WjKYV78wiJ52UxjP7y",
  "key41": "pNzxoMopswbQPvpPBkVB6JmpcpSMM37Mmvwpw63MYHAaoUTVsMZxVpmrnycH2rBdVvXjZvwWsPqvSmhqVKvf8fU",
  "key42": "2nZMdsgaYRqZkZ1Ej2fbEqDgSe5XHxdVx8TFn5G6dFDz13HfeRJwPkUhBt3c9AsrnGgSMhii7dv5VHcQhSKTpofz",
  "key43": "24gjooq4JnPLJ5CyP7z2jL9kdsLH29pZnNcfgeyMo3uCkLhkbq9dvSiKiL8aVph84hrsyZ21kRBHsvvWWn2Z4egg",
  "key44": "4PNceEcNjRXivnVAZ6QGrm3zFggCQ7TNs7G8bdSeKHNC7Ek3ZSwy2MyfQXodP19SbEWmmCU7emNLGDsyLCsJEP2P"
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
