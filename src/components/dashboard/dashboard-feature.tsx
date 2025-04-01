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
    "iv197SVubiFYG2n29Q8rkGPPeysRSCL12nCtMo3Wb7LrDbuL7cYXAU5pfmWuCtSeL1pGttFuw4984hJ8yo6beWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65eQDC4Pi1hTvE33V7MCoAqxMmqX2VzhjKEGjW4yNwFyiWm45ME1gycaw4vrJpdZbQuuNasjjhssyXW3VMBKVzhb",
  "key1": "55feQQHJCadxx2PjHgzMtcPF3iV6dKdcQ17MDWdy3muDDY2DVXpsdvmHzBP9aQPFT2yBXpH3LBQtQbJ4m1zDWuFo",
  "key2": "wJTwyHneC2TdX8ageuLX27SqpVsdXSHw5JcxoPjynYEFpEyjobBiWWZ2U7TSd7xYq6s3tZUd4HaETqHo1rpt48s",
  "key3": "3zUW8MRdj5eGJyD6WySn4tM36ugSod7ZN5D2fVYTMJS91pZ6WoyEbfYayhBsArKnWagcH2ffXW7AeyTYgCGJQdqe",
  "key4": "5AwbEMp1JY2SaVWkcgPpJe66Ek5PaP1ne3HrxNzztGHCjMZ1t24upE1BCfCSXKwGqEMYh3NT4oDXsHsYQX2ZxCXE",
  "key5": "4jADrQ9B8mUKmb27GwgNNnzDFCwRspsjrs4LM2my4K5s5gczJNTWotd7htaeqtoWwxebN6DrJeXPpQEGT1rRjAs8",
  "key6": "5MvcqtKexeDmRbvFnYLLYidJHJFUATwwLXNKTJsMRLX73M8EqLhFVQQ5P4bYYXJohUHWMzB3VLNWfZLVSQsQT9SQ",
  "key7": "2zCfGQKuhMNMS13tyoz1WjnugZh6rqTzN7kvaaPnXLbuAW9rjMepeu7mY7pom6Ui6zjkYN4r8VAWewebBoMeLNSN",
  "key8": "42XFamCnnXz2hgzLHriyZkRwbK7CA3pV3QyVwS95XpcA65J4EATg31EBMCkq5SK7r6T2jdtpgQGF74Zs9tead8SN",
  "key9": "5Tc9fJh2AmyWuoGVukjt5vD7kwr6XsCESnubfRdVFQTtFqZMTuE2r6MqMHk2UQaSzGkyAc6avdYmk6CjiQFhms2V",
  "key10": "32diTDQbfRLk2AKJkBA8uYjV5xuHoE5HoudfTqxMerCmGWjwiYBBpMeehohVnbXVJx6buZBHYeg9bQXAinoXdqsN",
  "key11": "4uKeFQUZUnpnfWTYoFSH2HGdeiK1JTRjCV4Kc1Dnuv5rK5qagA86B5yzpMn6UG1QXcvVF63BFSXpjLoywPAuLFiK",
  "key12": "3kacv9ji1PMKJk3PCMnesuy9RKy4fqzaC2yAQPjQSPZ7mPmh4n9sF6ph8ReZhuXDmMvJzE8p4DnJhKgR9rLMQupH",
  "key13": "3LTEmttWEuVWEAWrDhuQoV9qhkHcVo9Cgshhr8fX2e4uXcGYVcKKc3q7sTWCoBomdPFzaXaMiasouVJsv83JDSL2",
  "key14": "2HAaMYzVgxpFpZpzCkuNVRwXNJz3sQgm5dYzGwXo5N9S3D1iNdA2V5fSYuBksTbjVj5kgp78V5ssRGuuxpopnHws",
  "key15": "5V267kpdGJukrBBp2Jh4zr4jd1VRemRe2f9eN5KrbLrb7afJBnmVvM8UKMdrU6hDbYhJkSwALqoHyRNzyubJXyzB",
  "key16": "4CEPSRUT89vNaXNcdTaMDvcQzfRqPB2GpDm2K8FHJXQ6HxTbL68Q3UdGYQecBwsSgM6p5MtKD1vFZc2dZ15iMMfB",
  "key17": "4yYjNofWaY3mXCt5awNAcG9V2Ga24hFwkjHfk84DTeeE7ZmMC9pTWEVvZ8WEgKnZkyAoE57agdHk3vPUTsLm5NKY",
  "key18": "32xnzLodceyZUBeNTYXLsQqQpD3KoGhHnEQK2ab6fz9jgkf4dJ1T6jqRAtbQm9Ymzcxy7auNK6rih33BCqMoCJXq",
  "key19": "3RFsXwbdFbuGjGXEhbUkEwDCKEgKLegG5FY4hjmry2RFJ6kxaW7pkC21CGaKsMvB26BYVkt4oSHZRApMAxkuv1A8",
  "key20": "4v6FTSByiTmxWev7W6w2Vr1GVC78LSb4L1xUHLVDaZAnU7AFbGLJXqyLgC6ynyBb5tyY6TkVY7xkraTjWXxKkLSB",
  "key21": "2HetERneYMqbXgfnNJZtnCVwV34BPueWGKYCV5Vk7mQ9V17qjWDzMocBkXifKqfB9fLGt64iGBduAt6vcwtMYNtF",
  "key22": "2eChKi6wXyXBgku8v5mACJ7PPoQ1Z7WW1g9ebwubMeLUdrJ1vPr6o8E92MceJgjzsKrShNG6Sy7KBeRvgNSJ4VEG",
  "key23": "414axqPWcLVeKVcm3rS3ZvAx9Y9qkKeWNF7Tgmef7u5M34SZLGPgHM2Q4mGCGJBkx8pdki7s6uDJ9wmDJpfS95xb",
  "key24": "41ydPYnfCSaKZtfsVXzwaW9iQxQG4imAKJQ8BCeUGTRZRExcTBSbviiXft89TG3PTtgSsPrMpQDTyCHJFDNXMNqF",
  "key25": "5NQz7sjJh3Nf7LLfS2Jxsny3LsYDqXZh6wAG5GmNcf13BNq3BvRrCfY7vNTTje1w6URtc6F96s3sZ9qQyJYputuP"
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
