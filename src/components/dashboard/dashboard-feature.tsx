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
    "2ib7EAw3aTiGYDgtkbP4pPRLUJCGguvrenEUsXPVc6uGvgo1Tps2YsJ67JWQHnZ4nYSuGUJ8TsTD31RAvBsKZrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WTBjsdzFnk2C6uhM3wYyBNmMvDZkcStXH1kDGBKvfWxoSZW97Ks1romhsSunE1nrVW1F2vNz9VrFtR3dfSSg9Tw",
  "key1": "4G2DExzjQvphxGE9pbQxVzY3s9LAGGRKDrxXywvuf6PGuzJLCCiCiuMpMnKK4mQqM5dXJQHSx2HY59qasY16BKCc",
  "key2": "56Mwd5irSwuGm5HoLRxrxx5VYtUE6BdevBEgUJMTLjLKbdYVxVaW5YDgMbcGXiX2zUbBTKZA5Fbsz1NeVeDZ8JQ4",
  "key3": "2eGTQXLT2rqnjQBJ2nC9WwFHT9jLRvFyUZNpzwFddSCSFE5C5sacwVT1ZxXNbmWvG9nsF1xLz96iyUBWfkV8fEiq",
  "key4": "4gT1uj2eA72m6zaUzx7zfgsjk88CRQgZxPMxEWgEHSgZJ4U3WNaNUUKKytVr8r5eEZqHACVdNV7tafKDa8jbwBTT",
  "key5": "4oEG54CJPUWFnbiuxBRcFqPuccu51gg7Zy2BhUoE2iZrfeYcgS8DYv1GRCmXkL6WEhv5d5BiuCFULxAha1fZQ9HN",
  "key6": "3AvdGcwrDrBgmqrtUSiTm2FoFs7CBGEdvQ6w1sNazp8KwFLoNP2egAUBiikQEUENcmt8cdpcu3XEdwuUNmj8Upu8",
  "key7": "3guRo5yx7T5UhWDjWtiKDykJaWJr72admBRGHAbLBTgHXPmcyXfYFBKyM49BS56c7iymhhYLm91ARBg2wh95BHvt",
  "key8": "26bUcRNL7XVZQfNf3R78BWJgJ8HPwThKc2CRqfGqryoT5GTocdZ2gEdmasWjZzxiq5Eyfx2bjgs6hVWSaUEMQrDT",
  "key9": "2GwYLvpmTAcEKQ2S2TMqfCRXwgABX62g8PUpg5Y51bpyK1wJdH9QTnojb4BSqdJKVGRZgN6hEQUVjCdy49JLbmHm",
  "key10": "5UdHLBURRHRNt1PxGaaaFctUCh352xQcEEQbQtppKWX6egowpwbxz9UBRDVqpcA1zBoFFfjWxJL9944jHuWZycKT",
  "key11": "2v8wEv4MR5RGxCcNq5DG6rkvCNZw2Q9tcbwHSpY7c5k9D715ckLoxqnHGU5f6tMThatz81zzCz4LyNsTdY9FnUy7",
  "key12": "2oyN6W1RTwnt5XzAQ6c22kD7CW8PkaFCqFAdJwEdVRnpYxM6V8T3o6cSmwpyy6MyqQjkyVcZUP6qeDcgndi2RyWD",
  "key13": "4NeHc7QiuB7LVLmnJnr3Q2LfvFPwtFGvVQa2Gx55pCjjD14NGNaw1qTD26RLaoqwXogZGTrCGVrYUyDirrDpyU7q",
  "key14": "4HrYvJEwjoQDygm2VtmS7VeSRkj8chqqYoEWDj2ZZJJCjDtYKbyn7h7ZJPRbhXfb13ajjcQSJ7WNcG2T2PssBs75",
  "key15": "5GdCq3UHTNibm7PptTbouRfJp2y3WxV2d87n8N32H5dSvDkSzoaF6cYEHaNoo4HD1968SK2qyiTJBjR6BEZfLSUJ",
  "key16": "xNg8c5bBNqLfjQscYqZp2VePPz86rFLLj3UtvKhUPv7VxWeweRRfoUgcEFyppokEe7JdCSpKoyzPKpJZ8HPP6mM",
  "key17": "2qAzLKdEstyxrJTojANdWDyoEUroh9fhbphGWtRoxoH6Ee5iu6NrSqXxpMHZcouxAcAU3kUSi84EfAxMNKArn6cK",
  "key18": "SbvxtDiDg2rhnFLFNDHhiEDUgiAwTm2qf6r3wLYSM1ehJmzbhQy8Z6FjYywJd8SXTAfzhKTSDWFc3PEbdbzvzBn",
  "key19": "56ANaTNkSWcPMAK3sXKvJWbzQfT827JB7FZpdPDuLaEvnXKRJWbGxr6jPHoCvdtdh4TxigWPn8rMEzSKaV3jR6kg",
  "key20": "2m2oDptbxkzWoSvKkKYGV3MTvVrbVHuG5ibc6fcSHDLMTvnUn7AtHepAJVmMoUroVyGVYpRAtPsHAbjvQJCpAQT2",
  "key21": "4t9Wt9yce4ntr9VN6Yovq5Pf14VEKB2ikskR85fZJwfmGBWo9ny1TFoWimVdc2XGjUy24Jg6BuG5Se1RVuq63Jvv",
  "key22": "3v4KWb789NJNYSkvToH8MddJMdwREMgN3uZ9FxnFinx741eGBM8ekh7ts2oFs1on3pQUCJ44vKzx6XqPVoTTc34t",
  "key23": "2KHMJ4tpTBgJtQfBDFBH34Vn8Re31gcoKykC3V29XLmeXbLCSbBjQ9EReyun7qcWETkv7bQ65MLU94R6n5cZ6598",
  "key24": "2hcPRMJuS9xP58QpAs9XdRWPuTPmEErUcUDJSDdE9sC8a8svy7GWquZzPcbuFbShYZujjGmVhgwT6Pg9LixARCzD",
  "key25": "dzLvA6EGUqYxY5MCrZCWPxU9rWS7CSR6ZMBpSwwpX8HEorumdQN2Zfmds9jD1HYZdK7NpHiTfL1FXUwrug3SAaZ",
  "key26": "4cV3MHCZSkZcVN28bwiW4h4x2F7tKrNZ38CwAggHjA4BgR2arN3irc85oAjbfR2gt1JUA43QZuNR2qtAVXAH6AT2",
  "key27": "55xtpLB3fzaVRBe7BE7CvrYfhCKCQpbiGv7ceiPg7H89NPgun4H7nRAmDsAdRvTEPAPy8E4jq6jeZ8D1Gdgc1cfN",
  "key28": "2qzhicxGWYN9UpDmBwMkiT6NH9jUVMuGTC5753E21f3EL7WTDc6i8NuFRNW23c4Reh54C7ifs41CMBHKh8871EqN",
  "key29": "57v2zPZD6yu1x9sEFut2rcQcuhvRfykGyuSRb1GxvcNkt4szLMEfUZyQyGVy3fPfAzwzWNvhFtXFNrJF4wKdvyhu",
  "key30": "2J2B8UaqDJVCMKKjS6KBjLzZ8zq78RL6ESrdXDXdZdDqRmkyqCVehVz6mBpog1n4cDAc34P1Q7mRorMe7EEivtQ9",
  "key31": "4hgxp3xxBg8UB8qdJcunzLi34J3i4h4kK3kjXfgUXYC5CWYcSgmoyiVr8baKaJ2vmDkmEKpkLxXoDqrcSU1Lfd4f",
  "key32": "4mFN2cwpxKx9UDWsnh7tUG4k4Kx8oQtx7MMokapDob9Yq59t6AzrgNRJZSU7VTgj5FsrsousHvc54GdbzciZXAq",
  "key33": "2uaWps4EnPWsp2Tdxy2unC2wsZds1bWJnkX3VarKV9SBugFH96bDZuyeZRretpbqp3cZ9b9PPzKWRp7U7p5p5xsx",
  "key34": "4ci4PKp3QxaNK3wrE3MWCSPncBCBdA86Rq7VKD1DEkJb2qBLEdhm5menLM4vi8cvAyybzxqWbbTVevKXCR1LeeAG",
  "key35": "5mDzUkSyDTsy6n8CkjQm83VK7ajthwcxX6LHzstRrEJirki5khpUi5fF5oUuearpfpU6mUqqNEm6yVhakSDnFrWY",
  "key36": "4LyE5XUbtZ7yJdtTrrLftqsELZa5XsT7havuT39aDDVyuNkjc58WxH2cAo91EKdUbQuwmWLMDFjaArBVk9ygzStL",
  "key37": "55ByZRD99hsoWUjphVG6r3QH5foTANGJfbw6qT4kYLWmLB7XqVP4BjLaViCs1f89iT22VjSBCFWpumS4JD2MKmuW",
  "key38": "4eQ1CXDZkQNQM2RAZYaYbV1HJWFCYrMP27MoazHRr5Nr8wnQjHziCAKY84TyTaeHZSFspYKsNz7JET5Ui8gssush",
  "key39": "2KRKTXeUfxtHczcwUyh2Y4wYtC3qHamp2rucq7UmEEUvwE55N6jPpXitFPYu6ycdgnDsMKCoM29GQ7GCsVdY1Md3"
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
