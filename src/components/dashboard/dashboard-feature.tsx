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
    "4cvktmCA2eBHZPP4oJhEWjUmyBuhuth51B6KNam38uAUY7ZDQfDBZpRAKMKKi6gZxx4LxdHn3jgbd5Azz2DVPvtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KNscAQ88ZxVJYmBhAeNU6d4P5iVF1ATTpXtt5TDcot8b8C2BFEPPQXYbfSJ1TGz91nm1EwmyopEcVyCWnPsTS9S",
  "key1": "5x8FYSbPSBnykrgWdKygDfq1UERSr3soNda9TFTBQDu1svT3mC1sDm1J1YRn5zv6GbscDb4aMLpGgLu5EbEJR9xZ",
  "key2": "2qpev437YcQqy9knoRUZjbv5uh9soQAm1HqLwSv6dh4DpuvQPArcB1ETDgN5vSLBFvV6zNZV4jc1JDp7AY4r1Q42",
  "key3": "2ipKR7iKvDfLdvZC6Fpz3FjdaijDij23XHtS219hJ99RwuoqJq6QPtZ55YNoaYtLqw82EY6UUV6EBZXq1P9Bes1n",
  "key4": "9P8WjBmsQHTx1rYhNppzq5vVgsNQf7nZ6X119PFcnw9sW4JwZ7h8CTSWNzcunityLjPxPL7H4BcFgdGZ9Sjx6Vh",
  "key5": "5MNCQtECNyX6WoLG7XHtw5c6rxTXquXKwYptLKXk54zwU64JPoteDGPVemgLPzmrEYxSW6px3xy6JcAy7FF3xNfv",
  "key6": "258DhEyUpkbfANZcJpJmxTfT6un6GKo3tsLgjApaVKKzdRqvy3o6pSgd9vkfd2qSZ2fRCipyVyWdjkv7crcn9pPV",
  "key7": "3zKVNkEhcn1Qz9jPu6Npsvu7EYZWPzSmYsLYWTV6HEh5z1YegrWkTDuyHcsRyQtkQssBYCo8DJPFdmCszmH8Veci",
  "key8": "s3YHzYi1Saw6hxwEQ38dbTFk5Y6K6KHbETNpEETYKBrgiPFWZBh9qhgzSpg7ATGRdV8zZUukjgp4VwDcD8ufsgX",
  "key9": "5WT3eQkeuMeEob9hqTAgX4gumfUVE9TFdRxGVxBgmunWt2BPsSTFA3Act2fWLNV6KZ7ef41kLB5nn9ftw3HxycpT",
  "key10": "4NYN8tndRNfFyLZG5Gtp8ze8BMUHigoeDcgLshpuPssWU2xrXWNZwNPat3YdQ8ezP1joMM5HuWXpUkMnuZboDpgh",
  "key11": "3fE8wPTjnhLc24MijSKTTFkzFrYcmhhMM3FyS43R6wLL7uDC4MzZ4svGzrD3d3v7KSWN2cbm9dtv7v3Nx7wLcMgF",
  "key12": "fCfsAy5ETXtg7L55sMyWAC5vm3oznhUu6DHzxWVghmHvgAbawqgPP1eij1kGbpiSviqwReDnSA5ZQbhJZtoZRjK",
  "key13": "5NNxg4etcQUYe9p27AcNkeXHZVrBWuXg5RxcfKFZJJAPiwQF2dCKnN78ppGXh9djh5c3aHuD37tHUu3suKqtnk8k",
  "key14": "6popA53aLGXsFkp5j2oVMRTTeiHDbHaLxAuKm4JKmK7tCNZUCWxq4n756Pv2uqg5GsRkuYfQfkg1MwkmtCac1Ns",
  "key15": "4M57uQTr9n5eRwUtx9dXJ53cFhCLjSAYumdn4Kx34iV81th12UYJLtMiNbDsZSb46jtq7YsF9RWVM5Wqe6nr4jKv",
  "key16": "4BCfBmEEU7eDVMGBw692AJoF9f7xj6ueVSEDtWaGJvxzpzKxg6aV6happoho6MTDyA7Ef9Xz2CdrJexezhGS6u1",
  "key17": "3w2bWxTDXKu5uCUokG496u51WfCoGfu8SBkRDbrZjyVneDyzKqF3bXfzW7vnfPtHyrBUUN5kUDY4bDZNzJDHfKVu",
  "key18": "4pxmVte5NNFZdFxY1PvixCBDMcT1KKU3F35cAezT5v3viKh9c3tnS4xRj1jh3W7JkBVaZ1d11tymJbrHt9ncfE5L",
  "key19": "3HHctdsXRcyanUXSAxVga5YTEKmTP8SSHeUEGAefHYvjR8b12TD7Ubmy47k6PqkLc1kXTpYsx6uJ9CkuV4ViUMN5",
  "key20": "DPF58fL1zHRpFK1M7oZrYreuQCnj43iGVcGLEH2EQiRuUojjHQoUViut98RnuHPhKnugf9YnonRNfMESZxJoDgR",
  "key21": "4syoaNTAZi4uwZyhiK76o8xkMAkfQ4mECXnLKuSrbYWode2t374bwYMG9drDtFZUnzMCsd7ucQQJmMY8QrQ79yG6",
  "key22": "3pApMCb9APZNPYYkwW4tTsbXTZeZsxK2yvNBtBN9H7wdsC4cordx1WfnxSy8LQUwuPdnd7WSgGj9BAkzs6HT4Q4T",
  "key23": "5k8a1uz42uUCbBS11oesT4HkfW1ggBrNbjxmLMyFg8mcu4TNB9jevXKwoKUywYy3BHAtjBorYSEeijz2QyVpCAXH",
  "key24": "3zwbZRTwrad7w4mSQso32qvJ1gb6mXk4YQbaSi51mRieQhnKiNDCTdTSxEMh2aC61wbmF3vvG6PQ6ZA1XFcLMADF"
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
