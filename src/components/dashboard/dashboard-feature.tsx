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
    "3TgQk89SxjXi1znaWYqWYaBzWcPbLfupZVuzZeYg89grhFx54uxrfXGnhBwe9FxMLZGDZkaAnREEyzpy5cZEiHuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5srXc7KUdzGRgwwD2AU1VzX5UWXou3e6NpYvfcrXv3UYCjBk4cthALSN56nspkKE8Pf5yU1cQ1NjN1UqV1WxKXxK",
  "key1": "3cJAimN39zyoHw2yLFS26j5j8sGiPZdK2ihqAeSZYbQjX1QpH2r745xuwRdasCw6HxNAG5icSHrJ8EDGY5bxYtmM",
  "key2": "3HueuDo7ZKTeC2mJeSCsZmGeiz1pZRQWqA238kKyg35fL4d8yA6n3T4649V4pMpgLAHSRnavWMCxJPSsRraH2vZ9",
  "key3": "YNFBUWZJoSyVn8ZeCUTm6A1x5LR7Py96LKfc6ga7megqE3GLwk8fACnYAyRbzsFxq6E2TCLfYwA73jd8uc6H7Nh",
  "key4": "3bCHgiTVfwq6fAw3NrYJejYaF68YVgSgEYJrQwY9YRCxjEzWVHaSiHh1LHhiGqoV52exeeE9QbtPVUW54vyDTd7j",
  "key5": "5P6oS2TgGeNcxq6owqaUQzc9LnYB7wiekfvpsYTPh7YEB3xXqWjqJe25uvYkrvwTeXibt3p2yTgijAewGabVbUoo",
  "key6": "gJsAngYG1Eq5JE2wvBrg2kC69LTz2RKNT8ZCYtnqs897itkGt5PotsuGXiT7UMwXVKPdnV2nuy9oiTJzUpyrSNB",
  "key7": "4BQ1U741JxQNiZLwYwSKSLoMgFqHV84yyu2tJN1FscnbqbDEdg2QPzBnSQknXede7QJhBbKR6zTGypTWSxuYEmBu",
  "key8": "3kzTGmcAqMz5c73B9mT8SWGWk87Gtti5Ey9J9miiPxcdxN5GjRkwCFS9SR8MNT8atTiDUouXcnydkxgUbGYukaTr",
  "key9": "4VyV4LADLY562JtRSQJNNbFpQt12gbr9DGz7WHuPK1r6PA8urZJyFeZExyN73JDMnF6xEAKk5cFja2B6SyLjT5eF",
  "key10": "2yxYiLvfB6Uj38hfSVscPnztJjHhSR9cf5Nb2dXShXjRwbHcamvdWJvJcTokJFBmGc7AjeXqdfuTq5Awf9jzSAWt",
  "key11": "4VFrYqdLFJJfqid3tHbEKVG8AoLuXSoqTKHVD6ebdswQPPj6wKnN6wTAe97Kn71K79UXkLE1QZLUkSjeCoSC2ehZ",
  "key12": "2in6Ropift2jg66yDi1fsCVjouY5vAPZeawTHHU4BqGSRf4a54EwHZWfcgydHByjLuKGrNbGewFirKSiFRAAskgz",
  "key13": "Qq7DbDbJA4byBgQS6iq5Xx7Rdwuq8iE7UKZADuUva5U5FJQ9Uw9SV7U37bUpqqbgDzA9VnCTPqzorTHFRk2Uois",
  "key14": "5yAse4rEz7dsX9pVEriR7KmspcJw4uadUBnpexXGmyNyU1r6PC1mR1JLA7ZrcFEubKdi6K75qsZe7ZottuWzvU1f",
  "key15": "4XNh2XHWLhcLLvUqCaUkWx4WZ6Qmid2kihJKRuo6CRBTVxeVjXTbtXUwjQabrgcGwa8ZVhvNrhuciryqwkNzDL2",
  "key16": "2tNoxn1mCLb8JLD2QpxVAxLDPj9iqoTeX2Z7QNFuESkoHNbpe1jb7WJfvNZSrA5XVvERsqxVFYsw55vk36n7avek",
  "key17": "423iNbFhW8Ghq84mAAxbwroDxi232PrL92z8285EgfmY4ZBortzGMYfYozHtGuRH7i867DRWSCnp1H2Kwh2mpW9M",
  "key18": "5jLqEE2DLsNVJ9JJAtyJm3fzUJbrspF6FoN8sN92wUs156UQkExTdvPdPnMTKhrQ5FBjGo9HXHkcPiNvx9ahDywA",
  "key19": "4jRQSfZKDJgx8aiJqtDPc8t8N4557mZxyL1pqMhJ9PEst6iyvBWUkfiHMkdKBBPTK5MdW3TaPa9hUQge3oYX88XS",
  "key20": "5bfmmEjq5HxWAXkJcZAj9upZZDSTbdYbn9ijZQnNviy5vN3QBfRMtVEoC7sABmHqti2CQwPxpwFiWcEkskDH2byy",
  "key21": "2gZTHL7SNNEVbGXkGfqFCYfoADZJELXhR7X3GwM66RurDxNSXUxy6GVUR6BNVEE4cP1Lhc7VjZu8CxeS86CffwqA",
  "key22": "5Pv9BYCFeTYUZbnhm9BYbzuC4xrGcfmXSrKXFcTGuRqkGUDwtT58RBxdoXuMd1kAKBxbtdefzRKgoCvu39ZKbmMy",
  "key23": "ktPjo4KFmp1AQ6i8DqWt5chv2Yjq7V4HsVsne5J7Fz9BUv7inhnB9iviuQrZoq1yEv7MUuwqDqsSAiRWrXRfP38",
  "key24": "PA3BmBUmYEecptXz7LjuLUKeZSq4HoC6PaQFLxHbhUFFHj6WrH8s8N5obmYW7hp8ee5KPZi6mNgKhyxeujTQchd",
  "key25": "3q4pB4VTpzQzZYGW6BF2Pvzhj6J5Tf7mcvNJZcLuLWXLnEusnQJuaVSZEXavvX8KQRV6ng2QLrdp1VhfiptjSv3S"
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
