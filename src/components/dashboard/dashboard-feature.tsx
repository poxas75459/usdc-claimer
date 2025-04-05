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
    "1ybrrW1N2xNsUFRpPiJfYz6goBW4MCBGfChn97pQ1jsPfBEaGvmSnh9BtoG8YbnhNci3ku9BKj25kfgVsod3Qiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qidEwSUpkyrmyJVmwch8AZAj8VBUYPDwu7NXuvXpxjdbDSpgrjBM83V9VkbL9PZVoxqk7gTQ8mAY9oMnvpmdbyW",
  "key1": "2Z4x2nmbz2LcxfB9ytCe2oaJhkwh2zCuBobFBMYxFprw3vBruvqWwEDPy866LiwuQ3r4kT1yNouVghXTcamUdksE",
  "key2": "2Dxum8t7ogGseEWD9LBgPA7tWsoWo8uTbwUHsKibFwDa58eYyozNE3ajH4oim8TB5hoCiVytuMv1mubBR3GUMFeb",
  "key3": "5fsJ2JwFive7sPSZGChy5DBu3aSJKfS8r1cH774yRhMo9gqGiWtaXcvVUf6k27uEQFwvJKPhj8dk2Y6cacqpUXA4",
  "key4": "2F12qMZyYYc2kydfpak6WSZqrAb1thQ9mYc5rZBxoZkiNPUhPJxuCsp5jrq6JbYGpPAcLqpEmggAVSWT1CUbmWTi",
  "key5": "5ASQqGWJMhGgb1HMjzDGr6DSQKbvJKzDacUSZzCGaLMBzDyYUxbCTEv1ttX1kN4inRK5BCQ5aRaP4owcZvw4sD6z",
  "key6": "2aEXkuCZBWTJTmFc8hDMh9LCAqgXpU6FpXjhGTH4GRK96kurLBUaXZS9n3LSErVNUqAub9E8pAxxnX5TerdzTp5X",
  "key7": "8vh6FwaYpyifVoRGwN4EeKgJMWn3cUNYQorgLCweeXB2tRCNrKwPqCCLekj74CyRQqqoAJkMcKtQJC2iJpGrwh5",
  "key8": "4ThYAX9wVXb63xDM2pSGdHRX7vbuwocDCqMZJqnhMCvG7rVoSo59oCsMZCPfoZnKcQdbZ5PVMRYC8r8836oPzLTu",
  "key9": "2vdaw6JEvScWF3CCG6n7Hc5odqrBfhKVWmLziYcTVCPaueygDeMULUV47RA9GZWzLZxeiunnntUWjtFvxaGHGRxY",
  "key10": "29MQCkKC2RKvmHyCZbtKew3bHxfytVy9DDd2qPLJcpCz1YZn55MFHLCMG2y9eZcojMkpeaHSykGJMfcpDRu8dZHS",
  "key11": "NLqJ5Jck4uh7XNtWbNo32fjsRzFyXHguxB41j5ancfJYSbyXgz5PNZLnXU4orRuvEjaanuHfLUJHboWnZrk7KE5",
  "key12": "GsyTruiGGK1bLnyYLi3Hu3S3GdmpbM5Y6JWfF2GNzB1CCFpVm1cb5vr5YC7JqN6mXFFEJEdEWo8uzULdFcGFqJH",
  "key13": "fF7q1Aj5X3g6SsFJ9Pu1WuwhyRrB3DWjdUe2PNqTrVkKkoMH5UnTj48gDwpCB736NkeGzmEV1PVCoGtEzouwxad",
  "key14": "3nNbxzod8xRertBEYXMM53wbhkuUCrFYKmZTRg6aS53LbYj1yuwPH98sHcRuBNNvw9w8pa1t1ZhJjk4iSk77sEJK",
  "key15": "agr5HYbfk3JNSFYK8VUpRx83eqjUMBRfJtEmGtg9RcRJAk8Dn3rvDihUQ5o8VCGkYVgVupP4Gpp8FZeFjJkRhoT",
  "key16": "31kcchCHupUZCapQYMaVhGkrHRZHRHPLoA8Z7DLeL5SVC8oT9eaTjJTWXT1wMvX2Az2JFbr9utUeS8XLPXDZXkZN",
  "key17": "3XU2jArbr2n2pyrT25pt9LJvKi8HjhJtLB92xpKH4vzTTBbLMHU1hryEtNJiQuwYUMQ4aitrMvifFC4thfq81pFS",
  "key18": "ED3yNCV7778kpZP8XtYCekwEUi4inqry6wJWwoQCYspqwzuYYiHfaamwx6WbMFcG7UtsGdUoxBicuP5L7iSCdUC",
  "key19": "5VDMpcN3DSDwRLtAQ8fdXV64w2ujXiVdKBV56o6XckL2J2pA9Js2knN2PPoz3DyQpFpREp47tDHZP6hpTN6CLL98",
  "key20": "4sR55Vg2QnmTkB5qZFGT5nchGGTVHGov4toPuhXKPTLGZvmWkUAitGgpKVMpb6YUuqzFohLsXw2AGHPaRMJTZ8qd",
  "key21": "3tc6yiKK6EoCW564AtXBijVVCf2xZUK8foqM7PrM2WeLCYrBuStz25pzM595rikG2Zx7QNkcBagErCLuNjz3TcuW",
  "key22": "4nKcBKT3TbLrXSZdnnxC756i7aSh4CxwBEYXyc7uxJuahrZWtyyT2mjXS8Edzoy3Hp5nhnZvqYMTF4B7gdBE5xrH",
  "key23": "4be2np8EYV1ju4mfA3oEnsXAPaEm54bbB2ctnHV4TSMCymRQxng81hEPBoiD5UHL7QPKNBDmagRBKFNkCoZ3Dkkm",
  "key24": "5f8VDSbPQBqZ6j4WhEG6gTUPXHJrnMWMDttYa8RbK4xZqrShNpRrfDrhdQoAPa6ehLxVewLFPeN82EKjBkvVXuQw",
  "key25": "nrcuho9gVB1QEHrN4E2rpUz2Qvm6Pb7UkGtxT9Daw9PYyMkzotgPmaYf1kvnUoUYrsf1XKiRPpzwM6RuGwKx7VZ",
  "key26": "1Y4tJGvUjJQU8TeCrdsz2F4vDex3LVkZaXV4NZ4SwJmKxx9QYDuzgx3fcYPJBbGgkc274onbLARE8CupQzhedrz",
  "key27": "59dzMcpd9TSjsKeCj2ZWjh6Z6QHkFR2Lmnc7idiua6xxcnESjjvuXdyWg2i4C7G86bR9g8gD6GG5pXVSfnFVdjEK",
  "key28": "6KV6dgFKF4XZpqAYXJiZ298ucnTyMJDVF1yoPMX6xd15U1yb8Pcqzgemaa7fNTEW8AZ6aJYbhw1ocVUB7JKb853",
  "key29": "jT6wksKRFFgaHxxmL9xYY4L4xFiQz5J73ydapAiu2i7qp6oWPtYA1QkwWMQXFACtv7rfeerZRd6GDPikffXwVpk",
  "key30": "2qphktm9WjL5kD4cX8NDPaWtbDuEc2m16GCrpodiN6hesBv4FTUPdYU2KCU2aaDibMU8LpRPmbd8YsyDmygPpAfH",
  "key31": "2YgzsQ6qNhaxrGbTqsz4f7SYLpcdGmeUtj8Njz56qPPiLM6hodoAeiok4sSLC9Cs2fn2ibaYyBRdDUv7k1Rw2VjU",
  "key32": "4cqsRfj7sqB9eNY5NF7rGXuQ4TuwbgM1s8TV1hj2BpEpvxrHAGpaKfMuAqgvD4iC5kThtVnmU6rxXdcCFHURfU2j"
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
