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
    "3j8JTZZB4HXA6W9zH3W5FfCJXDNS8uLXyWmK3j79TxgzGzRBtTbKzJWDsTUQNMJTf83xk1daDqEk9J4seSGBQuXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CEcxknDLGCWnN7AJkcsZR2sUN42qqUYSgkbS6Pu5Mot1DG9pepf4oggfWeUzWTyNKGAG7sNMpLeGPkgan7s91BT",
  "key1": "5BLHY9xWCyvcdvtndre6XH8qk5dEPrEnFSJe7bVYM7XcoawdmwzxR5xSoGN2pwj26TypUeDw5CVn8BzYeL4Et9jB",
  "key2": "G7KeWXxnvsFSbTpUjtusvwNMkduZUQJHj5rn8SUD6rGPR8XuX8AGERCT2U5xfC1StETwG1LM1GBGhCDBPKaqHLB",
  "key3": "C6eiVQ2Tfh5KS3Ess6VFgkj4qr8QXXCnPoW7H7mQbrGGBm9cwj6apoz3TkZVesHYJXzvuJujFzk6UVFoRAsMkc8",
  "key4": "3EoLxe3xeXewQKrQj6ubntnwuWbrpFXCPMG2QzUrTGHPXPEdoe1oXho1WmZS7kTrS8km8vfTF5Xhc2HDnJCNt2ab",
  "key5": "8KnhCTqPzDwWuTo1EHjQgpppMMJN5sGnaZcXvKrZhMq6XB7q3prrbpstmq9F3kEDcGFhFArPyYQ7vxajqYnwvhp",
  "key6": "4x2mNJfMMChUCnmReqFniZW569kMXPPU9aqL85uo411QmtubyiHKFz7D2ao41wygtvKr4aHG84joYrwfHxwA9idi",
  "key7": "4i2EKYe31hwU7w4k48Xva5zmy4Sn6rsidofDcaiMJXexCiqPkwQAFuoWfMA2gN3vE3XqYm4CTNtNAryQ8KFWpgJL",
  "key8": "3eCebsadBAKx3DdUjZaxuxN2CntaHRBVoK2boHNJLAj2f3U4LQVVihBHbvh7paKq85W7Q571dXd4A7xxtpCnmyfm",
  "key9": "5vkiMDtqzvZFahk91EFRKuLzsXDnxB8uag5kfcL1VD5zEwSQazviNHTzELfna38UtYXHsb4gVMTbTA8PhCsZpcKT",
  "key10": "57kqEzBE8T5c8XSawe7rk2s39qE8aPkCrdSvEL3TEyMNFGd934RY1NHGhx2ur2Kxnu9vErmw9X59mCgo1DQn1DfC",
  "key11": "5jhFB1LDtSvQiZEmJBsjih1fy96V7m7K2T6fq2vob9yvUXuGzkt5htXv6v5L6Csk4GaatTGrHZkoYFHq57NuE7vg",
  "key12": "3AAEWxyJP9QPgjGMxE9NRXmWrijsPgEKFFfw6p6fwUyB97shsCwLmHDKXJMxWvRwHzRXBTx6Y3W6RgkK2ZbJEyDg",
  "key13": "Q47VdBxGUSypQmkdM3dN5zXJYoYTE2X2tVVQhqBghAq65KZwbFwNFY4aoFtAiRbCSSP53SgFz9XseCaDsJQqxwY",
  "key14": "ZhTat5q7o5Zox4fyvwPemsXAxuJQtbZCBnLxuagyCyUvfa7tKyCW7b4kSkXrnVWHdekNWroRJ9JHuRHE3xaBqRQ",
  "key15": "3WxWXm1XUK1pFP7362Rz1uyPRTwePgXzBqjv8CwHvo2Zd7fdjbRTqQoaVvmjSNppB2tadM4feqcpBSJstwkSLYjG",
  "key16": "2soeg9fSGYF1UeTtyVuiKx4bzFcXeh6jYBCvJmY4J6HA4nBe7NVDYrgBmJefgTGANPj8i1uktxSi3agg9pP1LSxZ",
  "key17": "2rHY3fDDRK9XxUsAq5JpAgwBDQeZ8BcB2GdUDtjcC48twPQ3HYNeFnNQsqftvXfWjoZheNbjJzqu2UZCUUducU2R",
  "key18": "Ami7QM1jLXUG9U91diEuJbXN2yJXzvMpmfRdMA4BgUMq3GZWydgkHY2fPGmGMzFdfHEzE4GB2cym3YrB57A9BYf",
  "key19": "39Ypi1arE8EuH2L2LDCuTfBEenxbgQbiK4kxvmFcs6u9gThD8dbUsw8cSNsHN8T23CA4nmd7vriaemBa1VarxhZL",
  "key20": "2QuCrpH8SZvtHT5sy6iVvzn5gRya789DhLZk6J22kgzjfafffSi52Qup4v4Fm23qeDtJQunUxqh6kqTRMXUX5diB",
  "key21": "nDzPHA9RrAyVfLQSPJrRbK2F4R1ByU7pjnjTACVXmEhVATENgFHKStCU6qpNaXJat26D8bSwHK3gBUpb1qWCn3h",
  "key22": "4Gm4LWCDFs73RjUCt2FWGR6frxGADoXMnamaQKyqrb84oseHKmpa3W4WWkN4FXrbB236rmWcrHkuGxVRNyKUyxCw",
  "key23": "4CpKyupQF86XfKUuTitRwa6UWPsWa5Zt9A6nieQcAbAEr677MF6DG4RBn2iaEk2p4uPdBsKh2nvQa3X7ZvkqvK9c",
  "key24": "4Yq26BbEy5DQPRiMdLZzjD65HsFYJQyT2YDvwyjPQQCPYwFTNJuCyRBswcuaMa6pjEoMkUjkNUySBLJ9rXezurMj",
  "key25": "4pX1ckoK9Gquq4ipugSbnu2dfoiiFnC1VR4ysc4qQVpJL6DxB28ZUmS8xGBDWaZLh6x8fWr4J9vDpXJ2wQRNvxLL",
  "key26": "4wRFwZdzT1VKNEW5ziCzMMSEX2Tf8gWzs2dfQih7k7ALAqnQwPZxbKPBH7pXv5VgHQZCHGC776QoNQyF1BZdsdtR",
  "key27": "2fPvYkwRhTUaPcknSJDiM4qA7VSknhEDo2773G4MMfiPYJAY7TWmrxD7xzr3D7gVVYShiAotG574KkJ6fcsqzEQL"
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
