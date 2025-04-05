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
    "5PycpH4AnMNKBBEzkVXp386EbSVxqovcuovCcM4tetjZe9jKAnZF1faAiPRr7bfs2icnXRCDvbKrqSTyH7Bgmdrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JLYQtePJTiJ7vBKTqycHdMCBgz7GQ38t8isB17F9ENhP6T2BPnG1xkNmXtYUaivHQyu4Zg6DL29qqqnDXZCf7n5",
  "key1": "3jXTFnS2VjGgZYUMpWcCsMCtaqdkuPzFJkRVLPgamjqX6UvcLEEkpLFGwKCGkzSWtHbERsbQubsk1UE4SHdPg2ut",
  "key2": "3C2QdqwVDnsiBYeTvjMTUjnpDKzgzJ2mVFnduBbUqJhGLYJwthGqy7YdVwVWQ9sY1EAR1JVHypxnsRnPeDr4gJ3n",
  "key3": "5wdfouQUiaFubZzKTuT7G9deH9ipqRc8hfREriTjD2w4AwTzqpw29UXpwip5a9wjk2LGTPSfQcuyoG5P1UJ4RnE7",
  "key4": "3W2BCX4jFZYzKvvMvjdgdR6LgmgbRcDt9x7vLZLvS6Dqex8qHSMJjURqCBB9SB67D5gPKa3QTxneUpBhT2h8t1k3",
  "key5": "46Ne1bZ25ofUR3so3gRFtfsPbgdWVSGCUUbBi4XsYQ4ZZ1YQS5X7DNFz8B968yZSCtBPL1HHNkdPi3ir3VDB7GcA",
  "key6": "66huFHXwRZ1XGJyNhnnj7KQrQ2yrJYa473ZGFWPSZSWQNuppECPjmEAQeAfBnKVdUGr3a5NcLBAFvhQ9bU8Tc7jM",
  "key7": "4KqyDxDbTs3nfkcw1aykJbcJ3kgtbe9C91UQSfFuyKwMqeKk7ysqUGEFJf9xz9gMEVqq9EBfX6ayFr7AnVncpY7u",
  "key8": "3C4FzwceuD3WY5tDFScA5KN9s4VyPTRBee6261pfYzd6o7gtghT5ExKtjTp5qxoiL83eh2SdyCmBvetR5ysBM4jb",
  "key9": "NTsvYWYJffKsMEe17QAEejx1oM3FM1cBsvr2yunyCEarEqHwG9r1xTHjZfqfjHTBwQQmV4imqtABfi7Rckpa87m",
  "key10": "4jwHC8GcPGpwbck5q59FDw83AGBmYHgoSCCEMGZwSDjNx8zPf6y8zkdPWHGGkY1s2APNCQMnkFm4NAUCqeXzpN7S",
  "key11": "3CS9ituhJFHjwLpWZGT9xHUSbVYPuZmfPirMdwGRD2nnP4PfJM5GkMU3bxYpVdAWivCNJoVky3aXZAmgKozH3e3d",
  "key12": "45HcHVNkhCtUpirYAK4URPFxXDwNiuPzByzkJ8Y9RrZZDTWnXVRBCumX14zTyy9zSrNUWavpPdrgcXvR5sVQNvy5",
  "key13": "y2nxqXCxxf6jR5MUYCNxV2tJ9ywy39gd8napG2Ec8NmxcYgs4jcK1M3UZtkMijx4LeFmb15GaifdTqA1E2xqFqg",
  "key14": "3mtwPYPSbwgJC4R1LoQ5UcskE1xsBg9dTskYBQeaD41o1oQJmUKh6c3YnaAxSjJiycNjyyDCRBbsTrJk7Vgq5bUe",
  "key15": "3rjWTmxabSVXU4a14QFGeTy64H9STAW6dHXwXbhAdbSBhreWynZnZQ1zYJLFhk49p1xsL671KGeYyxc8n8u2SjMM",
  "key16": "2JagSXmnN8n8ARG3QtJ1HX1NP67jPP1v797PrVosbv84RSzJ574VhHziwmcYqDp3ifbFXpDTjsmy4rmoiuxn1uKt",
  "key17": "3GLFZ5RToRJis5tmaUreLZnNv4NTDk7UWKCfkC2jfJaMr3Pi7qib8a1pP2RZQ17iEh1PwAMBADZRs3AQL9XhdYqX",
  "key18": "5brHNMCJNzWkcPXMt33NxPucjkogadLpSeYxSWdw4d7XJzo7bqfaBfoA54uDEFRydpR6nWU91XFtJtC6o4uMqYFE",
  "key19": "5w8aGS89jaZRfGR6KNduzpiefvUh9MNvFnRBDwFp8PYn2xGWwde6EEdAdqRr7XKuZM1dd9roCHtQFe9nBU2VWGGD",
  "key20": "CxSfAXxHkB13QDkER4fpozsYtRfCKnJhE6Su2o6VL1m8yef5TRfNa1GYKKQ6PWQSEgE3wYQJYSVdPpBN7WSJ8b5",
  "key21": "5eaGL6dqwXaQWQ3QSf2TeFUnrtUjuQ22K1aFnwDH1dTzLaaJN8J9zP7shqPvBygFSeg3PkgtimsuDom4W2beqbtt",
  "key22": "5E9ttk41gkzS6FUqUPWchjHzGhxnoBUiTYZC2aPcc8irPxoAsQ2G4RfnrRBouEShndrQiTuAwR6Nq1XVKKztuLd4",
  "key23": "2Fks3JC1qBxD3Gy8gnvGTq4irgfBm9rx74XxtY2UKZpNAZpYvECmPu1H2oCyS8JMPtqYcLjxRHnR5ir6XfanTP8F",
  "key24": "2Zyw3mcbgynp9uw1kQPb5p4SMb3SPwPKZU48DAHbZPo13hQKRnVs1SLanzpEfCFfwiBfxSTw9Y67i7M9n9SbpUN4",
  "key25": "yPYsMV2AdGtxg2ce3xwvCK7cBttqew4h23vBgnZWEAaHeSpkakyKUtT7wEcsSdcMtBjfwuXu82CXqCcm9XRDrEY",
  "key26": "2N2xZFGuDALAKbrKxsBozCHzBJ81m79n9BWqHQK9MeUrAmMUQyQzf47D9i1VLnqa2SSN6EoQVUsVg5jDmKmLQ6oV",
  "key27": "33TnfzBLvHMh31mao2sGE7N4pq1kQzZiwVNtrD4x9PKSsG21P1qNGmehgvuPuSEXrH3xnUPzmuHxW4LJDFXnJ1Cv",
  "key28": "4ZtwMHGRRbjFhoSQwizUMvJmRZ7XHC3vnZdSxV3LXADz9x1VmVsJgTk2EUtahbAhPevYcvhZfzW7mouNsV4wSME1",
  "key29": "2Gyc4B8aP2FJXaGnnX2Jf1iya9F9HbdGwAK9RgUByhSc3MJbbkfsqHVRpsxL2Tzhdr7QB5ZBfN5Vv7fADawJTzHD",
  "key30": "59Hrd429RBW4aWDKkFWmew14iDAo6JJMkY1xVG4z2w5XPkou4rpYNLkEKTqnFkikz89ks5KFQVyqVggdv9YZfL6h",
  "key31": "2PURupuUPKSHqxPjJfbwvhMo4WQW1GEZwyTBycuo2cdetVt9517qBKkJ2vAscBEAkmo29dmiXJ8167B53uWgSUGw",
  "key32": "bQqCdzPUN6Rb3SmkkHk7MtW7SvjDeQ173Ao7xe9GHHdfksbtYrB7T52rPg99xu5ym7RrzqEu8iMMi8kSEWBeuVm",
  "key33": "4TiF8wvBixfyMt1tdtzqW4NQW5Vb6kjLrZC3xc1QEqNt6UFRtdfbGqt6oftqNBW7vWnZP6vkp9JYLpUnsugVHnzD"
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
