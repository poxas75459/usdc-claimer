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
    "2impKcMu2FiwusiD8QKRdycN32upFd5DxsqoLLiBu5GhZoRdGxW8MuVooqjJSk46k2DPXMWBySmjETnsNNnubcCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3abNrEL92ohhXBTnzVj8eywqmkwmBr8Cvmq56c9xA2JemEpJL32J4H2ZD4Cxq26P29645JC3rycmu72mRajZrfpa",
  "key1": "58BTpDsox9zTde9YdcGaYHrVCzN9pJSf9ydxntLHdmFYR9T84axjaAXGrGDHgZY3kiCzFHU6QbgaBR9iAoWCWv3X",
  "key2": "5vjg7zbC2FpetfWvviNLLmUXdpRiNbx3iuz6bh4BiFpDKcErS8q7JJTsE1egVaN2oSWCEDCoWUyGNxL8dAGxpGF6",
  "key3": "64hzBawZspTmgFRAjSbJ7yYdppGNZnEAuGhUGce2S5KQs27X3VjjLxijMxfyDzVJaSaPSeUbdAYuDVkTH1fvJKe8",
  "key4": "54VpUqkXrmPKMg6o9XBkFgmEdfAux8iFLJqaBom6PtYz2raWZysHxxSMY9ccY6hJ1rYuZebFMnTmeTA2utGS5DmX",
  "key5": "VgbAbiqeps5vA4oFQU4n8PC7ZccuEEHntogmGh2uH4BhHDfyxwb6xp63SkyrW1a9K8F7BqgkVYtpby3NhTN7bGc",
  "key6": "4Hy5pn6HvRCURPkHuamv7Cj4mLBaWuCqoR2auZdzkSu96bHCbv2nFtpmwtxZTRjvh9VeqofQJQXHHt1EFqXw8T8T",
  "key7": "5JdPpqiYCppyMERhjgoYjhm4LbfZc74BhnUBoCWUAmJ222NGHxDtzuWmkFpG9C6zfBSGstUCTPNoDi1E9phUk6R4",
  "key8": "5BshJrjh7h5t8pZE5REHAwZ9UeXwhhJx3ewWfeewb5bZv6qeSjcHDh9VgiMCEYj8hQRJArhwTdtNMdx3Lf7mFKWa",
  "key9": "KC5ZzZYdcvMz5B85UCwUJ1Vy7CawSqaq7RDfWMU8kcyDfDyF4nPE2HrfAxQgua4sGb9GfRXhDebMmm3UrPYhXfL",
  "key10": "5ChKGEdzM4xcYay3Pmdjg7zWYtQn1KTJT9nvsFCp1M5ih5oHawGXQ3hwiLGEjMCiNPAr52UkjrA4RaYPwTmasPvx",
  "key11": "2xNL56Dftu5L8KrwM7tw9Qxjd8giZoEfZrXZL4CXp4RTQ83KEtR9H7Vbce7sAm849FhGuRpiKJaf719zciRjYXKN",
  "key12": "2TQoquonuUEhKnfrU6StJDYz24LfNqjW2YMb893MVZ9xFm9TuNyK8gmnC4H2PshqNWqnzQEd1uN4sb2pNhRA1ieM",
  "key13": "NMaCPKQvmX8mf46cmFLPXGriAtkrhQxhosQ6QkZSDq5jgGS3xpYx2JLrZzRqsEF7zZ9AGkzXdH7oHT4ZWq7vSpJ",
  "key14": "4A7WdY4tVh77p1XyAZuSAGzcjXijkegTcYwEUJXEscfTzVgn1VqQh1Q5GVnfSG2HtAFMYx3Rek7PydxpAz4w8UjZ",
  "key15": "4HzdQjaTRACoxe4bgM8x2axkdeEinjKVJ61EpiwTubmwkLLnPMx8VVukYLtLnP6BLWFG2KFEfACSRbmxquYAntCs",
  "key16": "mYTn9XM5KzxYYpYaseJdMTFYvWUipp5k68UE9SEk9Agt37NUZ8DJwjYen2QPEzCMehNPxCSjMyrXoD7N1vFdF6P",
  "key17": "3iFxGbwdQerinKnveZNtazUcW3j9XAZufkq2vj3gd5nTineFMWYKbQtgFFihuryMHxGzddxTa4AaUTP1mLrKkWSQ",
  "key18": "5ZArqdoq6cvr77FJUdGyqR2h2DgP4iUCYUVXf6nyQxw5vakcz6Np6j3FKdPBYCiULKUtKoHVFtcQzVmEqV6HiqrC",
  "key19": "5ozWBD1euan6diDcRcxh99gHqH34gjG2LUPiFx5fWwPj2oW2GsegJkAfMmozdinEVowACCNooJLmNXNnmLpjN8eh",
  "key20": "2aNaJPG2VFbfbQ3yQWQa95JmG5nnnHMaon6MesLniVWwa4TQh2cuLoXJembUZhrZxP9tMv2E7oexVCAjGACi8PbJ",
  "key21": "2V9BPiQgJU6CMQ8XSEYkjYfwrA1cxdfSwSuzuVjqcPP3GCBQmUgC3nMS2pEJzBQnATiYM4BUNLJvSK6CNHQKmG1M",
  "key22": "4DR5XT1v3Lp2yob93PoThhD37T5GEDvPqsWnT6hT1ozjhw3HZaAs9QAf7x9ECFkth8gB6ASDctYqib6G9CwmwWKT",
  "key23": "4Bk3nPFhhsACTxG8qAU45fWiEMEozzPoc24zqYJTFH7mwDBn7QZezgDUbzhumAHiHCcdXmUUngtEj8vNT99rUtgM",
  "key24": "3ommJpk3tq87in8UGM8WXVokYRBJiaNnZUJcUckeAasaiYpmJc83qz9ZTX21R6ms9AFHSZKLqV7Fdi2eLeFrkdQ6",
  "key25": "4D1WjVymTjNoaBj5kQyBFvWYhLBMVV4rRBrKdQ2zzkMzW6LxfwNa1E4zS14cemwhPnC4WqgJu5RcMUBkR1YiY5BW",
  "key26": "291nxBPicijVgFmz5a1SNhwRNfFinPD7qcX2TKCHbNo1FQTzPUrswWc5BUns5xu9xDLx431PeCDFWWzxN8UPirP5",
  "key27": "2uZ6bcTQQztUxkhV4S5n1dDVPhyFLq21xto4mQjnp2hqG8VnLhrmXjAXEqdu7AaccqQhwes1XvSKoXnUUMZur5Xs",
  "key28": "5o1enXY3UuMcoNXQxRrPPyN5bV5Qp8JQDErUm3TWpHpVCWsAzjRp3okPzTkRQS8FTX1io39tN8e18VKAa8RGtm53",
  "key29": "54cyRCwbtbctgTNsfrGrUbJB7MWoNDRdqP3q5RzYEHryo5drySuir6y5gCsGmTaMPMrX4ZJR4RX8PJLXtY9PD6N6",
  "key30": "5NGfXnaWSFy4N7SKbfY6sL5oSLQtpwKLkUBqHXgaQsfnufo849Y81XdYFmoQjNyYBA97wS5xVDf6q4MWLDmF7RUp",
  "key31": "xm6PoSa5j6QmnupkMrQGfigkkReWoNzWaPP5gvpSSQLnTs9rFyYWcHSMn8FJWHxJjVsi3dMgV5deBN15bN7KRRu",
  "key32": "3JNeQmkHHeAqU4Bk5jwy4iKTow4P894SDxQj7Gvb1Zjmas8iqwEH1rsFzMYPNWjE2hbEmwvHJFqdN66htG2tbDJT"
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
