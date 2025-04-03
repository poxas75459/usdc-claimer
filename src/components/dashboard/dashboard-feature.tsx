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
    "2RcceWwL6q555634tDFU25WjUH1EoKYCigdeWnAJ9hbufsUU6T2vpfzfZGpGoMEux6eSn8CcU2JXR3Yn4zYx7rxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EbCUesBTCVUwsm7FSnLoiYewG53ZsEXHAJbarexuczyHLD3J3TNAnjNeZiuch3ZcTBjT4tcx7ndAaFKNX4JGSD7",
  "key1": "2y4ud6HF4kkZXn2YG4zyHh2DgsMoZe8Fph3m4ZAfoDvizBSZbWBu7kYLbJPTihF1LmWCRTvoE7RxSXvra4PJdFaC",
  "key2": "4q7BrHddoaW6ognKTcfXsi7tDSRb9sqcFbodANwMGUCkJuueknok4bBJgy3p1AmvtZ7jFCGSNimjSkop1ExoMNCU",
  "key3": "cJvxQCzac4jx3xAUuceA66E2QNg6HqPtZ9PeoJZxGSmiEZBGBweLfS7kQKBamMyxMtud1dqcMekBRh7y5qat8tW",
  "key4": "5qTUvYaj3URxBBLE4sVLFyWH7y77axTr9ehvQjuonWBFvB36EZbJtNZJPUwVRUMC6yag9KrAjauyhMo26NbYr7HN",
  "key5": "3CANgAmwFmJDjmQxLzZbmHsyaQYjqXdkx61RF3Eo6UJrgNbj7Zq2Rnzz44AVgsYBwSQsB569efYEXi6NUrT9Uu4t",
  "key6": "3goDh4CinG66uQGEARAYqyGXPXFZD58XatSdr5RNd9P7zbPiqHcYdisYqiwSbPiKjSKmHxRt1ktMY7kAnLbp5aX2",
  "key7": "2VxFSeFpoepZRVsSt6vSNQMBgGqoYHc8FLebDbHWk2MQ88QLAm9Xn6MfeuQoGDxAS3QHLn8NoDjS6cQK12kRiLzZ",
  "key8": "6jxWZpzbJSRWUusC8xtUMjmtrZAzTut8RBsW9LMnXUdrFMH21EabB1fqn8y7xsQm3bqHHBf8pSAfG9JjM2j9PxK",
  "key9": "xdKREjCxA22dWfNbXwiFhsBdUopXw12kGm4pL1bCZjsQLFbKXCg3wQ91XUgCyYLAHeQpn3oa8xWNYzwnp2Sscbw",
  "key10": "r2aCPHTT7ckqeidphxawG2nYYzbSvb2W1WSUgS114xFxN4HXMpxsnHJujrwyXv7MYK9fffKPd6d7CqVH6AKbNeH",
  "key11": "2UmmqFbXDo9KCjZ3ptmKxjaWyhsA8jD4PQCTdCr1Xm8wkYDFMVaTHr3PjV17jsyLDmjse9p4ctSMVajd3zT7CeBT",
  "key12": "4a34rbeaWabJbn3g1jJ1p7ynyNP4NLA8nWwG8CQMnQmb1U8D92hDmDPNRXupJ47A4VNp3K5fZMDoHi9hJ2pYxspZ",
  "key13": "2NWqX28XwbwWameaDwqXKrjVV5bjvXheXG4CnBVVacWeQBBZdehCSdNJZMYJJst2Py5FUnygoJFmfuCjf9xei8w3",
  "key14": "t4y2NnPKKooEAH2puo16QBSA194YK6eUjGgncVJqajgchRDepBWV6XZEd9NLkZthFYEvQPFvoMTjAegkpZbZ8C4",
  "key15": "5vvwp82pWCC526GtFjx2PUkJS5yjrcUaYzLardqfKRW3KsXrJYNLEUEjMfdgzbjtav1ZrDbJjTo9CCCAcTxHm47C",
  "key16": "oKT1JwfibdnSXgF39EzLrQ6M7UjZV9QEXyddwmUsG6K4khCQFVYMqx3aQfyuefjU1WrMXFR4jDTRUwPZdb9VDxx",
  "key17": "3mYxDuHvbRN9UqFoPnSBtwFwBcwHgAqP9VsBNurB3cAY8frhDULLBQLJ8ncyFyWVBv1oc3LAfLLWQFP8bCF1ivUt",
  "key18": "3ojRexSNu1P6JDLbugYvsAQyogHBPe8P2Ug1tzhsUVi3NXpTziGkMG6DtkFVb193XeSnCXmK592B3BMstpsoJBeA",
  "key19": "5zhAfR2xnquug79RwseDpgMzfTsTcKmS6o4acYH74gxaAjwnPgsPez9PunfENt2Kqsqu9M48oCDeg4Z8GHaV7udM",
  "key20": "3yXPfn28qsmt2B5Sf6sZXhK4PJCxt3dBcHRDktQ7ueotCM2xvybunPrCtZqbH91yGMMnyKFYaaGDAYLta5ANJesh",
  "key21": "2EyyfVLCrTn1dg9FMCBZ3qfbnTq93G9oetLhoBsDYi8DfjgZ9A55UqcsMzJnNH4iJP61AfXozJ8uDpiDPZXGJ8KE",
  "key22": "3ShyN366x3jcyXnGDqfX5quuZkHUJhjzcvvhiSRe2TaWNPKULYTBzHLTJ4s71PSmC7oetv9dkaAdjHEMAua1Zets",
  "key23": "5PY9PAgR4Qbo57y1ugPiiKyRv3QVehThuBuUrNKBKnFmnczEJ5pSM8Tx4H6PSr5tDeAweR2jTjBgVLL5wtQCH4UN",
  "key24": "NVjjDp2HSDKnErcRwK4EnuPcqLfJwBbTXcVdBHwovStDUSXfNuGmsrkHSEAyfjiUPNeK3Xcqs5xjk84ejA3yUAi",
  "key25": "mQEcZTp9Luq88smb5vEJ1SGia63JPy87etPsSsRFeaq3Ki84ZByaBveokkJhTnzKf4AFGBWNSqbpSPAGvS6kiXs"
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
