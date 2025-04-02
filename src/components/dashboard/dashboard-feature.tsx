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
    "4MZaqK76k1vwtFWUvyZza2frdJ9JXE62khi3xzjWmofBYjSeRgGHrFm8F7rtESMsNYbXPhssPB6NSyVJwSjYszHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47rqbf2J9N2eayJ3VUhW8PZiTLSNkANGdKzscQW6CFeGArtqjQHNPZWZ5EtBxCB3yE76WNf27xeAedSJCb4jyNST",
  "key1": "tgAqGYSTBgC1cjnm6H3otG7azMMzCHX9jit3LBU3UaafggM6nYjTkX2bHzuYFXjjuqywrvyFaNWYcCuAUD7K7Sh",
  "key2": "53VQWZMegddFkKh8tqjGTqU8CYDFcdRy5mwm1mUT5vesEew2cD63Z5qMKp3yNGakEkaG1kodofQns7JXi6abNUuT",
  "key3": "2JqbwGWNPyDYitbyipmwj5DdidhK7gsf6NQpSDrcoYz2X5RoToYo9fgzHFS6YXEKJFdgPYd3k8Yk39eo3xEyN4SQ",
  "key4": "62yiRyJvUSXZ5vo93bzKeNt6DNevL8hbSBPwHNgSAmxsMzD2hCtY32pTtoMWaS3jukmyfGLum7fCGuTBafBftxaK",
  "key5": "2YdCxH7yvSTLby8arVzgrjz72xCQN1gJL1HY4MNBDVCoCfgQyY1GQMpo6pVs3K3FFgi4gZ9Cjh3KBu91Aayg7Qxy",
  "key6": "47FBSZe9btQNDPyXduqFY5LhNnY1EZKFXgPEJugSz1wDosCNW4U3iRWmGoCup1JHVAx29wjXMNbZQz4cUvhdch81",
  "key7": "4ZUN3mcj2PAo1pbdoqUc1ZBmd1oGF2B9QZvTDKFf3eW6k3c1aV5yREK9JNDs9V9776qRw68n6Ewf4eqDSaa6QHdz",
  "key8": "5vfVeebvf2hoJguibKcfe6WeFS3qTgrmgqiMGCrpp8MRSSgg6GTB6ZP5axzzKXCQRwG6ANwmetvJfKm3bnaF8SiC",
  "key9": "p9Jacx2UjAiRZHAkNpBpkKmLNH1L7jiWZ9jvDgacbyUD5NF8QcspderghWHMSCy8CbXbG31pKf8cEoxDdRFY6PG",
  "key10": "4Kh6R6b8PgtU3roM1AEM3hnmtvSmDUotJHwdRqoVyJ9D6shp4foSWcX6rX6nDBg6mDHe4KeyHt2TBt3PihRRRNXP",
  "key11": "47ghYqDkposrwprEQArp3s2LBhVes7MJDTY9A9pu5KpTpUzDbryTZiFppMyg6hWUE5dJgTvx3hthomkEitxwAxLh",
  "key12": "2nW9xzYPDv6kKwwHSbSs1gSURjiLFZcKidgc6oNuEGBmNKz5XCa8RjeXp6xV4GgX8mmBfRGAD3QPqsLAzkoFtVCr",
  "key13": "5BYtdBQxXsj86mVPjr9X44wQeJRYqU1Hi9XapEziqSMX21nkuWs6x7zVep3x3w2BkFQ9hh2iArWfVrzjPhFGGVX3",
  "key14": "4pEC36sWoZqiMWppbNr48bWh3xRThYEqAw3CZ4NC5fEKT7Bgx8dLcaSfhDpTt7rUU3RKJTDZ5r4R5e2uWiGdx3WP",
  "key15": "47mPCwgHwRyQpqdAwuHRSx4VVKVVEdVaNCJWmPJekTURkDUPygGPGTTR3jCV3zKV2TmgBFvuzwmrBuN44dnVa95n",
  "key16": "58hnxqddGXd5yhz4a2xu5mvu1rp3BgjgYqEY5BQ83VH59XZCHKpJ6P9GMJZttzYJuP2qCfD2iWfmedJiMKKVPcTA",
  "key17": "5ApiyHzenFzYM1VS8smxxKHkEnKnKsSXE5sYsS3eCLAojfAb2hhLiBwN95QPeiKxVjTU4cPbmbbWqLkjRiQ2h42c",
  "key18": "5FDGrMyTrt1t5f2KuR6DsJLt4sVWanah6nS5qnThBG1yAE9nCir2irfaoG6zXqgYSeq8mKQk6N4C9PFXShSYuXTQ",
  "key19": "4gB9uThRLfwV9yuR4p8PtqqsYE8HjhiCYJcU93nCrFHVZbZ7F41JMt3CuVEQ5EXGuGpoRFgivymWE8LZ7fQVd228",
  "key20": "4ox7XVnddmpj6SqRk7zkDj6yBtEefpEqTeFvm2spK2phVq2UXw4pGGVEhWXU6ro9YjHcKdW3VfBUoR9AtU8zBGuk",
  "key21": "29vEA5W53eXobB3ZcafffWT21phqLwSvvjj8voAhwMJG4vMWULKTWNqGZfmqKxJgw6EbuYsZZUZYcjbTK6NSV3i1",
  "key22": "5mNggpzeEETo7jfsHasVf14t929J4v7JkVBuxpgtYLU9mR21EW17spqtLHLj8Y1di9ceqigm6AS58rRrRLQP2vjZ",
  "key23": "4t4t8ZcWSA8LCfYoqprCC2BzLJ1XZTLy31MFA1nnq6fzyr16V5JTNMRcBkf5Lv9eZbMD5fHkcN3jM89Qsbz6MKvd",
  "key24": "49tfLcPMEjonQcxnbSQyVcpLwzcSwKdEgqUM4n1DPFajxuYQbLDCLXuGY3NLPBFRJJgRoKF8mAydtv3mfQc78y85",
  "key25": "3ym33pNkiJQJPGtmykovTPTEaewguQSmZ71FwNHNDQ9AUR2vwmyk3C8xXjMiKFKf2gWocBAnQtLHLbb4EZeACXet",
  "key26": "2G7XxzkJpvqFpJNQz2XhFTrhRgRACaF9F8VjrvAfCcnKsHp8NgbWdEqb9R6ZU4UP1X5Z6TtbbBSbFjLWnezDwE9v",
  "key27": "3kpFcbqHhfGpEWKiK3wDMTVD6HGVw418BkbFaSmDvz5QDVzGCV9TZK8siCHzD2QHGeGz8HWfHKQnaFHf4BRpy6qL"
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
