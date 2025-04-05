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
    "59vC7Yvhkea5vQiX7KLiFU2spJJkkwSKbydgYVPEjo3sUU6mHWpfaqgUhD7zyueSJQYNgm3ZAtsso9AGGnW22shD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xzSh9Z39WXmpKczBA41Pf9Sp9c8NmWGdNEntdivn6BLJrx1zpmjG3V3jY8q26SJWDFZaWczQdbhHMo26HofsYq3",
  "key1": "5owJ1aJj7mzUsGakqyc6bBZVG6GMz5NpobP4a7pYS9Sk8R31krZvczzQGLVTqauLoiANhePa83btcEYbrtsRjwmS",
  "key2": "59foQ35cCVagbp9LcJgWYZTHCAA4XuENuuhJwRfnYtN6FvS3bJseMwk52duSbRtKbQneKpZi79wp9ZUgCYtDJHyq",
  "key3": "2Co3AX66cqRzZ83WCKURq4dPPVJhPu2AVGexLpZ27M5hRBGRLc474SFm2CegTQjQYhDWt4i7jkjxzgfbBmikamW",
  "key4": "3ALDzA6nfKRAiMiPdGrx31zmHg8QdyRPj31jnNZW1zgYRJiHLPj6mLQrQbuCNAEVxdhLfuhRXqiHD9wb6X5TADYr",
  "key5": "4dxyXP8VnKw5WWVzgBu5ZH1T5covTHow7z3E9J7xEZpPXAGZa188kP2zu6cQnynMQ7Pm6UYhhjkG36voeYoCMYBv",
  "key6": "3nUoWSb8sWDb8oMfdTQAqiczQyEpoASV2kTGer2dNejNU9Rq13gJ8JBh7k7fcEyXZz7q4Zy29X1VSB3FtwcKcU8t",
  "key7": "3QL9LWVJeXVCFPKfUQ4aKPUP5DtaaVMjEq8f5UnXkJNPZ9vKk6tMYDxq9SJSk4JjbBFxTNCFscoS3BtZupha2fS",
  "key8": "5bBDZqNe6oinop3cUaV8RyWy4idHYpTD9mUTMTK599mggFohxv1y7sGZj7MQ4HvDM7fTftimoLZQAKWL7DcVVidP",
  "key9": "4YqM7vAL7gGj1v3fmDy7A4cm4LkXfZcdWxuLhLRMNueseC83FJTZgi7ef6d1Ly9shFsshDxNyEN4AbABA4kQWp5K",
  "key10": "29PBnFcR8M4xV3dzPdp6XejQdqam4cxRvq4f5dPytdhF8Kx6WbmYBCdAsn8reu6TQjsA9xYE3d4dgj29VFzX7RZU",
  "key11": "4JqbgwrNQEjHvsxmjh868VkhcAEnppF6TRXKAEWLrPR7Fy4nip21wu1rMj8pTm5fjdyxuyVB1xLUc9VZqtBA4VRu",
  "key12": "5K8GVukQe6AQDjnrX8iKZVw8XGxVsXD4Ta7RT68yBPoS4RCLp8oSPmYDgUJE9xRybtmhBYqHiabhxwrTq81kgA19",
  "key13": "4sBdBPJMiNXAkaibB134YyseiUtZqgVheYLm9NU8gLR1oQvZGstzhBLrN1WBcfuVjW23LB11xW3AEP8YVeTcX27d",
  "key14": "3LLZRLYtDwr4HnhzgwESidnW7Zn4QK15rGQiGTqsjtNFZex3J3mZU6tUBtQi6aqQbFBSSb2mTAccuqJbsGX5yZgr",
  "key15": "22kbpmPekHr9sP1A4E24fUS32NzRZqgAxsGsQvZYq9Fff7h71K4rXCQ5TBbejnqzxEH2Gyk1FhTXjvnAAQE89SRy",
  "key16": "3XWnFhJ44ghZMP7Zv8nSSXxyEJiZ5Ff3fz8WcfURJMMaPtdidNLQXsZ6pDLTe2JYGDiFbNUmixx4GLZNdG7GYeVh",
  "key17": "LhcGKCvZ8nyh6LJN1QooEYfseBPd4fd4St3Ssj4Gx1v5rfYsU2mjwTdtreeZyN5nhs8McWpHvkgEVTeEpopDRSW",
  "key18": "3w2sf9fTNkcn9SSL2ihCxgkfp8AHj28Pk2g7VbYEaeZ7jmRZGiDULGZC83ziPBmruk57eeUC6Rp3J1XAvvCZdVUT",
  "key19": "oQwnvrmeJeFfZhyTyBfRoAwFVpj6u856aKeKhHT2FmvSenJ5Ba44r5mUtXHhbuEa37Ra6FwbbTXiMbaVsH1uqSQ",
  "key20": "9nG3uve6YJRUghbrprBERkmx1eBrYGSyYCqSbnCH6Eu8djso9rKmFDx39QQVVWCxKD4c5miTNGrbUaTzjtDApvZ",
  "key21": "THXnoDfXQ9QdVd3ZPqnC4w7bnxduwzZjtvk5Ho9vPrFqkgaMTqdBj8dreTiJwyFuzAZY89n6EvunxiVntsvXmUo",
  "key22": "4WdMpvqSNr9TZNfLLX1aRh1fmWvS7f2orybNpK1LiHbqzB4VWZWKMKWKv7JFYjCebmDovtW7WXCv4Fd1WRD6VRDG",
  "key23": "jiLyEjprYqKxeBMoAmoNubxQ1kbUgqbeZhtYimWNssGw9Nv45VipXBUbjwvMJssAqWBZvqUv8npSjtEw6ovNjbE",
  "key24": "5bNXDt2bT67euUdheAdqfD5VTSwjwNC83HTvexrV1DGPN8Ng16qKrD5mCRk53KurvwhYAZFgBhS3p9YL7JAZkNmp",
  "key25": "49NfgiwKfCZQHNKqHp7SZ1YCYpQqBGxnRyNSbQJFxVDpHZsvCn8ZwWVKcMw6jbUZZp59RZk9AZVv5QoaivogdQWe",
  "key26": "2Ua6FqCSQLr3bECw7K8Ju5AAAHRKAVZ6Yg4iNJeK1xzhnvbWtVu9JjBGHRGz7H26YRz4mRqKnqm1tFnRnLshXDiJ",
  "key27": "4RJKJKgRK3m4mmdx38ZqN198rRXTxRg9m5662XCG3LMAyCwmUoSvLKuKQrL9mT1zTR6QxeajA9b4Jv484eduvkwK"
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
