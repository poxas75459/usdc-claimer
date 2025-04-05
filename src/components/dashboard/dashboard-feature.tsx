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
    "MqqzUCrDyar2PQVFjyJNwTjMrynWmNJqJ9HXxdYJHrGb2Gk9SUyQpfVQrz1bnddF1vtLtbmdqy3HoyBHL2SW997"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LRFEQbHtw9bVWTu5GHUhNn8VG1SzUM2DbCRkwV9ovjFfw11SpWEbLWTgL3Dguaaq1HLd12j9Gb16ENb3SDC9mhj",
  "key1": "2CWZviBY1W5XrNbrDVvHkyMzGsd45mkDTbsmLpGpQajBuJJgVjS9mostpmt8D9u4JuL4xMgwTqUqbdq7c16G1mLc",
  "key2": "hpttUPctzFHSY7tQWnF9qzn6qxyBG1sQL42F3Rk7UC6REWkGVFfQ3Tn9ykvpGGqXJyvFvdxezvfVfVqdpP5rxhv",
  "key3": "ojv8Ku2s7sV4NEmrx3C4WKspk5hfVoXUWKCdgeAZJrPMMtfgdoNbiXcy8pd94qgvUYfZrtKbBXCzSwW9hm1p1ep",
  "key4": "PGB8NZ5Uo8sg8qzt8vqg4BDacVhdeEepLnEd23zsAELKxVd5U6fevJbNo8KwLtDG6BWQuyhXtaSD5XiN5uJHQQd",
  "key5": "AG2DqrNmVTHctsvJP1FdfGRzsz6ZjrQZVEWeBV2KveTr3BjYK5jF51GRXwMo2ZKpoAxgfNkf6iGRUCfZx8hrTZu",
  "key6": "2sAx1eAbbt7Hw16uBnUtNUZG7Ev5dyAzgqXCKhkhp66Rg9JecyaoDTQLEo8Z6eQtg46CnTEGBjBJaaeZ1j83mMke",
  "key7": "4T6nc5Gjp4z8WCse5cBEdSa9ACKBuu5tY85ooD6yhpY12H9pogv8MZrXDAAW68dzLtyuuCf4AyfbWTCqUZu9mPks",
  "key8": "2jcRzNGvroCq8Xb9y2FZK7aermUcgomJ1yoDaj9W9RP3yVhKF4FYVhbtxqv8gka6B6xL4wrwkVFbhTFAKxVxtMep",
  "key9": "3CkpsNLwQfVbaCFory3A8ZKNKFSWxGL3gQ6qvqqzVRRhiBKwQNeumUMBUW9tRJtQTaEYQLUheVukr9ZG8ZjbpsCG",
  "key10": "62F8tMGz87aHqf8khuq1JudMfTfDzYZXzMVNmFYWDSFHJc8po78bM4YUYN2pmFPChDb6oNbCZJAigUTtRUCgDvkK",
  "key11": "5BJHmi8f3ACuVhjwbieAfi7DwiUwXkLsZiksWMbDs6MZtNogpS3DGkNfRdmVmRrK2BprdsorFynPVbdcKoZFNsBC",
  "key12": "2pUmuG47QgVfax8FwwEak7EYSor9csC71nodqX3T9paFjSX6HBxY866wwDPKHSA9xZGgzxp2DUEq7xrp1JMH9HB6",
  "key13": "4GmhyrPYzWCPDAM1u2cWPFWU8iTvesWU73Swdm8p6MLjJSx5FHVREzrTZv1UoQ9xYgkJ1reoYeGPyTisAWXwXUWc",
  "key14": "4fHwjjqsy37C47Vzo2ohHW1YB6ZiErRCshhqjXxaogd68UjHBvrYuMCkPE8hk6GwY9QXABkUC5mPZwKwdRXf8GtH",
  "key15": "5oF5ERgqxNGvGpiYhgus4EVSUB1pYA2L79MBzLu2DYkdWKDSGsMACMVGoR4Riz1jP5AbboqnB5xxGPffjfzQBXcT",
  "key16": "4oQFMs3WiyGJ52mv6a27JCvqYEf6Qe9vxGavN7NhoL9ryQMWTcGLPu6iGQNa4EgSFKG55nB3To21do3jbuMn5FTv",
  "key17": "5Njt4V6cHJ1vTxBKjRFa78DGixWpmuG3jHgHFsun1bbtkTAnsxyTHi2GYRcxAcCgBuCAMLsAKKttWq3amshbjha",
  "key18": "5y1GDpRHci4H1mqadAUcWoEsNoo2a8DYnS1Jn4tMKuwQA7DokoeoDUydkF2L62TxTMfeCX6Qw3NEJSzwicJWM8tA",
  "key19": "5s9Sw7cMUis8j9d3WPSjKEf51JS9Wivc7GB5vPi6Z6QLvfpCtt4mfKf5mS1yjH5ed2PkAcpraTofaZvbYb8CLocU",
  "key20": "5rPoUM5T7S4SvWQdQBLB6WAe5q1gcu82p6TVK1MHRQtBFZqSFai8uKJ2tWNkdTT4WFizkzR5fRiKXxnepqGVFnbF",
  "key21": "i14QwCdEsZtjrYMqGY3EcYQ66fhNuzso6SKX6mVpBUTH4WjRMLXHLzzZpxduSXLHDfrTwCQfYnypUbPcqnyGZS4",
  "key22": "3Arni2PM8Yo1oaEeVPc37pbLyz1RdHTm9DZ2hGqmUxqqWJrwfVY3p48oQ7TBmh6V729vUw9u6NXvr97HsBqsQa8K",
  "key23": "3EHGKk2J2hdwiwNtARr5XuewRLBWsUJrcvyoM2BcQxyXfosZvfuAJomDWjuhgoHXTBPihM5J8Bp46PwFh5EzB9gw",
  "key24": "34qyJWLW7C6S6jYQ7NSfd9GRyNSC3dLkHGQq6ZjS2tKQ7TuHCy9iiUtmL1JSZV1ww3boKsa6682U4t7555c1kQ1h"
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
