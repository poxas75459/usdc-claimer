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
    "4zYjuHwrEB5xDjurCJMUGY9nVbwSSvGFjKos5smQ4xqGvGNY1QioS4XHkNUihE34TUo7giEZn7dW6KrHYfasUJg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZuGWdJyGa1hGoEGeT4z83bK5Va8J3nKoxDyM9mVf5Krd5rX9E6D2jDUXrBms1JuE4UjA2bp2wc5U7ttma5Kh2qy",
  "key1": "4dBkYmfJB1Cnf3g9UPTQiGXf3GrHsr7wNtie1TuH6vRGY3CViQW4cE1UJfZCo5ucQbVLTrZwZoGoPL8UnVyb3Xw7",
  "key2": "JCLP4fm9PwTYnvcFBCN1JF99BWEXBLAdyTnhKDgYcMgj6c2wNykJt5JCG8ZoEqyNkj896hdBPvQjvaidZVxkMUn",
  "key3": "48vNyLg7CXXtBhd2qJbgbhHfJKc1qXWd6GBDztttcgaZsD5BjLGJiRvyEEx7ktCGByg3iyiDUdePPzPdsaW22RgB",
  "key4": "5bBUk8x9adtXnxuRvkJWfGMn8c4nJheHYHqvgkgNNPT5BNRnJggcVM6K2kjf9aeQEKrdetvyui1EDUkScAMCaB23",
  "key5": "3NmeMSwQ6MQvnz552P3BivDNrLbxPmeXKu7RVNJ1row7eFGensDhniD1dsGtK6KsV2anQiKSdGXKGepfrbBwuHqL",
  "key6": "2eTyYZC9GDBZry5UquZwWYCA6TXNE5EH8QTbLDM7FWsAhpLvGD69wcoXzSrPMmFRSe3zXcM7B7GpXkpVQ6njG9os",
  "key7": "5aF3Stun9V7WbVcCyUfsgUbPcAA9StbKH4SnhTA2PmewRm8EFcaXBcGavspzWq8mdRoBLASeTBMbnFGhW9h1BRYC",
  "key8": "GC5B3fmJf3W8SnjtLwed1FKrGLMBTpMK6kNQLwavpAzUvQyE37Q2qwrzc5VRQnNRQZUwHQp7JZh1X9X9QQm4Gw1",
  "key9": "5KsRuC5xFJWzdQ2fMpLKTKy7ktRrNpy4u9DfvLvkUn8kpn2X5oDaWMHb7eSQcYmGzBCP3pQGdordbu6QgXT9LRxH",
  "key10": "y8kZusLuWNVX5ftX4Gt1GBBw2Qq7m2v1effaX3uqFjwZmM9QmsE3EzqgYd6AktABGdy3Nr2grSk6fTnELcNCvav",
  "key11": "2ASJPB9xe2ZpwjfHt4WdxfCDPpyb5sCkvu1ep4sh2s4PgnPngKgEfco3PiyxVErxPBSRRDDTYG9bDeT4Ep3j6RVZ",
  "key12": "3vqGJcuaMTbu9LbKQPXdhRABj7BxBNDLjKhWsgRU8LwUhDGJT5vfSNS3uBJ8aSLv9TkEFyqDReRNFmgy4NKZnXEX",
  "key13": "3cJu8aF2uABULnDF21MBbTUes1wuqSnQF31UUFr1zf2XCFEeau5fx43wYFZ59fEeNV76Hh87MMMqes9rHNtNGG8E",
  "key14": "4H6VdiitwhQSLgqN6xBP6MfmfidgVmFxaXKLQt8buPRRVj4Mj62ZSZzSSstzvgFwEMNc7jBFrXhNpLTy8rs24ybz",
  "key15": "2hdQ6fabn4PtRFLDn6RBsCX873zYPgzn7CKrwtjuBjmSt7MqUqbrZYxMt29DpvhqxgZv4yvQZtjAFzWZMY688sH",
  "key16": "5viZSDZbXA2JEbFVnsAvVxJUgsokYr3L5dk6P7YZco8ZfSK7hk6vwdzyzapGFSLnSEG3ibMt8WdzDbRFaP26WQZp",
  "key17": "48WcsuqdVVPK8TCPgqyzfK6nBs4XWKHGuze36DBgq2Jx4V38o5Peg6obxgZkGXtL8CAjc7qnqxc4T87b88UUWPsT",
  "key18": "3TqqFqy22RkXUusFWfTP78X1rzxknPCbpuysGE4MvaCbkdmxJZ2iKXZcP1bno5fDYWT7znRkvWmUHFczCFMn3WYx",
  "key19": "2ZYT1aw5piCzxH1P3Hp71f1uFtvrXRCDoXNmPdzXgAon9xXa9YfRc1dQFCeRRoX6WzenPE3b7mo8MksdatwU5gb5",
  "key20": "5vaBjWaynvY2LvTJ6V8W4uVgWSncYc2xJht17EFtpbfH8yENT36RbMVs5TeAsNEJYxuZhyXZvYRYegK56aFYnjWc",
  "key21": "3nEd6tELEzFPim51bbvscMCjuHSHnPqPpEdFHVj4AaqeX45vkdigYAX2Lng1KvV2k8Th1EbrPisoRG5mWrSJXmnx",
  "key22": "5hyAEfEdpy8vDiVFXkcaj6CokgKL6BHDfZkvU9bperSgMTAcQcQj3PAnmHNnoFXGdGvXvh1eGU6ZKaDamDWkCv5S",
  "key23": "9p2EMoxREWxPHEkUcTGMW4VYggWdfkW71xhpuTo2LnuuhecJqmBJd8rxDkqDbMRrmC7MdxrLXsEjqcitMzRwerb",
  "key24": "2jVAyqnZmwVUsDvUpKh3y7E3VE7vW4XV82n8n5aqL2Bx3iaBzK9LBTmoFgTKWn6Rvqybuj2TSQamnqr85ARS8Ds8",
  "key25": "31bw3Nr4ycCe3GooJFHezaXfRVUKr1AouHhFXNQfxpSdYkevWukbsevmVb8ayfFZzsdJmZou32Nm98mZZJFnAyUU"
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
