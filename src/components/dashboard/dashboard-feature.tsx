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
    "5UD6kjdnDXRconxQhczEQwhKGHkst1Tt7wt8737rqwSEfXNTmmFV56MUR2L2sVTEmmj2XLR4QdP2p8oMwNYkip3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DvxBqfMzSwPEESm6zRVs79S1BE8rFmnQUyjj1SvxvLrKHUrTyYmRsCfZhmhMB8uzG9PDUoTrDp8A9KmbTrJfYX2",
  "key1": "5is34UzRhvf92Mbcw6uFNgEeZdsZbXb6v8GoR9WfyFUPPwRz53NXV6aJg295RiVyadvgWC26Lx73fVZsdxAGB2ge",
  "key2": "5FdDy7eEQyJnVBfJLTTP7RjZaFGhDjrrxqHqnp2itu1b3mKz8UtGZn4F1tskSa8dJWebREPq7tS7ogicxJXRZvBf",
  "key3": "47NW9w3sy2QbMdxaSA5oCJsZLcbpw4B71jHhUdVH1sEZ7ZaJBhKHy9egWz576uWMDq39yGFHRvwW3EDvbA9awUB8",
  "key4": "LwXZ6ZAfRUXznaYVNifFwbbQfWo9FrKzn2YfPQU11hvVusngmvX2Dp3X3ZUMW1153KuJmDvXrA7sm8j3BXfmAB7",
  "key5": "2wq5bKaXfY21URpSJK8NiHH6S7iDVRtdgPn8hG1FiyDRP3MHkR8GNQ77wFhJmAaEx735SqKLR8HAozSc385hURgY",
  "key6": "4v4Vqn1uFSB5QGhNLHuBxdsjZQ8o7oXy27jHVXcWmMxawZSqMQcEgJiC2nQzwwDVKLQDNWr1KAnG546tL21FMJYf",
  "key7": "2FF52bxypHjMJV4VFFVUTpUJFRwRnJCNE2YtDx3qTaGanzMBvfGkr5Q7jMDHwXcz8w7UPVFHYCicxMbaqyjQvhGE",
  "key8": "517pK3Kk7uqXoBCg5UjHNDFZ5k2sbq2PZomWAkgq2aKbpmVpNMJMJwybR7YtKZQEquRLUwC9utf9migHUAUcwiRJ",
  "key9": "4xz7dCbTJFV2YJgP9ALYHv6szF4asvEcJHYSamXhNSQmzgzvaQck4WospDMqZUZ69ZM3nt9MFwGrjybHQFdNWtu3",
  "key10": "2bXbs7gjy2LPmXG2DdYmd1wga7X4Gx63To8KXM3Ka3EqYsh163cq9XNYduVaGZxSwRA1AqHdP6VEUzxCGjuC18bP",
  "key11": "2WNqatyrjReTZZRusNKhjEk1XP6qx6wmoRdfpp8TvwwQ8VDCYrvrYNHotb9MFES1xLQaqrd2hJge7HNjuuqvwFxR",
  "key12": "3dUhwKmh2G9c1kD3rsT37XB5w5KZG2kKwEyPDHkc8c6eKzvATSCd3Gpe7qb57sXNJfytSh5DaH8nvNadtD4kYtFF",
  "key13": "SvcRgrbkvXqDsKdwjRBmKihdUGs8a1XjQii483emr1yHh2EhNRqsvF5D9KRz8f2jUzh8kqkcPj7AW2K9eQhp4UQ",
  "key14": "2eXhih5Dy7Hh5nMwqcuywJpSgtzUrFobjExALw6E1nzoEEmiXSYQYfrUvXf8FWW5ycAdijWEH2DTymFASi2uwpF6",
  "key15": "4UJwm88YBnVNBMZ41Cu5tQ2ysnAEHmCNoW9PCEw4pWTS8X19eQsrhzP3dufgqsbQHWATjcRss1ekDFLQq1FSWxtD",
  "key16": "4GG2jVA979noDxEFzHtHBzMHBvrH5WWGJLeppvAtTGKJYp8HGVeBE92BDqcPzy4kUnGRHEzC65oZdjSUtSXZ9cWS",
  "key17": "5sYYZua1AsBDTr4rwfzqYK1UqcyJkfxJCa6QFvhNBe3bF4eUz3BBteAKveWY4MywQ8SScKTvH7HxFUPTiR5XWAvr",
  "key18": "2RUFSooLxNB92bzoNuJjTEAq5GjXCBqNUfbzKMo2VqhDtFxta2CAhUL9pwLhNUyE2xTkuVrdsht4R9ajYreRpCC9",
  "key19": "5HFZDt9n2mynbTyr6Dpgy9G4gbiBGRbxhyWWBACLrUgPZgW3w29wzT6WKjpKapPTZ6ZPzPd39bDVYSe752GnDnZK",
  "key20": "2rCmQKMe9ADL26qjcoYGuLFdtGpVGofiEry79KcuYqV4AjZsd2EvRzR1GA2nEtpceiNaMJGQUyXPqHqiTLWeXyHY",
  "key21": "35PCnSY29W7qtxoSXcrxsGmR2EmWBJUuCaCJzX21TQhzmJQccuxFor66kucLn2bwxPKyYEfHNyLjAr832YdfjKnG",
  "key22": "2A9Cc8evLzRLp9H9c6Y9LPo4w7zqeLW9sbJPce3CQgZffSwoAAmgNbB5QjNiECkguXTavf76vFUHsPG8Adhmu3U8",
  "key23": "4yHA62YFkuNj2KdGEwzYf6KQZDEE3ufuxshypm1qZrfs7kXcrkTPDYQNyr3EPiiYrPa35bWmbsHZWHxu7YurUXsC",
  "key24": "4oi7Empk9zCuSQN94RUpsAuTR1RzB2fcatZsSPdJWxLDFbPSrhUmvJCAoXiMqEanLTeCauf38Ti45NEASggThAYp",
  "key25": "3hAxgPMiyMXC8x2AS863X5hb4msBi2HGjmWd14hqaqVgAjr3wjjGDvvsayjKiC5psDRJWAB51QYPKbFVnaDjBEk2",
  "key26": "2JoGvaJmPyQ4FaYGEim4pNjVyuQ7vseafhmKD63au7KiF9Pm9xidhQdRnx7XBzXunYvWBCMa66hLRpT57h89hhYz",
  "key27": "2AEzncsEPdBXwYGwFYQz4QD32xGwWTazyMNm7KYuJRr9zJwMBrEJbzRe3pM6ce4arXbKEi1yPyBU8Ghbayk3eVwP",
  "key28": "3AGP1DpiTCrHyXRPbBA23m1NiAsbWVrwuo9huhYoo7G68YVacJSnRz8oKUYBUgPxdeFrByHiFZ54HTVDNquyemUT",
  "key29": "2xnJLEn5ZTcQYZXDL4VgPKHLmkN4EX3oNQdaqyUXfJ1WfrEy6w2jVi9TLGC6jnEkSYsS8U8Dp3ZJhS1516GufeJz",
  "key30": "5Z4eJiNmKLL76fsYQawSgE31bQCGTfSwSM3csgXpFm3kRtuGuqbfHiAJ5pQPYZkrN2pci9qLnEbU3kjLtR9s6H5y",
  "key31": "3j48SvkNfnj5wyitMY1kSYEXpXaL3wTAyMvvPT1MPKDAcKnP2aHN4Zx2XyBisW6JePKQNZ5pGhvT4gybLU8vdJTy",
  "key32": "3UMtYCHxfgpyCh3pUCvfLVj217jDPq7JNwea9mm2UJp8KUAdnoDnujZXpySZcGjrRMZHmREt2ueruWE59VdC9wRA"
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
