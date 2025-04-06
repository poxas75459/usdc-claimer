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
    "2Pd3Jd2ecS7UZF7iug6nbiriUEpr4Gzp8nSJz1Cjo6sKSgRGn4ADLA9UM9P1x4gPJC9BpCeWNB4gGGexxWgJ5cT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kt45wdiZQPpMDsnU5AZsFn3Y1p7i3gHzokbaALt36ZmS3cn7fRMLicVF7UaVaUJCwgvKB4KdiLXjJs6Xz99mcWx",
  "key1": "5Xzi6z523Ap2gYTaYMdxL94qtjXSFvNqC3uDqF9B1mBs59a2wFzJA6ZCxqim3BhEU9R96ZxiiKWL9KXhsxMCkS74",
  "key2": "62GvDYbJMziKJpW87mvKTKsFkxT93t9W72LNMUCsF6Sep6fvy52mVEYBZFMFPkPch7KKyHuzhjgPLpdpqk8pMnQk",
  "key3": "27x858Vp3ggv8Cer5vWpovxC1vsGiEa7UhcctxJPNqzL7ZNftGns8BxQy4uS3GN7weCMjy4E1sEdfXyc9t7MHjqs",
  "key4": "49xMMSSEirnRWHwg9RtLUZxNupz3g5zJ2HXfiTZMTXktKNLAsV1BB4GBZZbD5NmNGfhByEk3MmMpMuxohCyykVFB",
  "key5": "5voyUkeyzz6KUdTprg22Q2PV5FdMMFvjAtQZFKdiRgprhQU2JMCS5TBDaoQDbZe7pCuoBLPNoqFg4751V5MUgpec",
  "key6": "2gQSeZ7zX5ddjtVfFd14bPJ8gNZsEaF7ZyAKQn4usJDMmPaGC2LHVEpdwDvkvjX9LvHuKgJvyhbBdB9pzLHe8xiC",
  "key7": "66v7ECW1Jgwja85DyW1szcxk7Ni6wDLd2duD4ChH3iHTBKxrdXDigr5DQdfq3oQCLziGqF1hcyTWUmxus4vw1tNC",
  "key8": "25LCNdRb8nsQb17XneJft7LEtGRDquYz6p5nK2HbYTSRAUgkef18K6Bm6V6W97W6t1b9j4Xc2YtoUrgA1o17dSW3",
  "key9": "2RH1YLX8gKypaXaG4diitLTRzS5cBTmcMPmnezPJYcb8RykT4PcgEHWP5foZCkhJf6NQ6c8d7xYPyffQaDAMpqS2",
  "key10": "66kRTS6FvoxEaEHGHwhLU2mJGdpBs57s4hJuKPnrJ7bK8VJeL32Hc4dbfzjk84ZExDJimp6SxGnoYzCZ1qwZGK5m",
  "key11": "5UuLC7d8LBdC8E3G2qJ4ajczxTpwQMMipuybRATtvdRUQ3fLfy6c64CFRCF1J4FagxSJkcsSgDvcSHvRJSMDQh58",
  "key12": "5WWQWXag9uD5Fo7c7qhfGG7aUXTZWTUbK12MngkRqPTmApq2CzF1vfBJENkZJgVpR8yJeCb3bDuTKpvCY21QAXH8",
  "key13": "2Var2oqn4AihCRjXQsJ5HsSzV7vYSGa1oYEy7kZ61LSBAeyqreGDtf9FHCQ7VuLN5U34NakpHLEZKRAbMJobaH9r",
  "key14": "2o64JHvkwmBLf8pVz9pEgVHJ7ZsWqv63oqwo5NmiJEcA6dHAkFuyD626RJW5UM51bjm1Ag5NwcABVTxFURCh63jD",
  "key15": "5qhe9s49v7t9kWYsaht7tNbVeQGQK6uyJHugrtygzSamartfQcuKHkr9EL976yNrQc5XG6ai1qc6CXUV1Aa6HtSN",
  "key16": "QHydUAfga6Z1j5ZDuoEi3tDB5wL1714uBbnV9bs2py25GjfsB9ZkKmgZUQ1ECSYcVEK3TBWPewZRTXTfZ4MSwnH",
  "key17": "4LjLGNY5Eoha1VELcY4z1sDQ1aKFufzEQwAX69eyaHngKx7LD3WFivy4WZ7bHtNf3rzTbtSMNTd2Rb5E966BDqXW",
  "key18": "4XoXEaC1QAnqQcjiD73cjbNF9PaEp7rhYNNNPcZ8EQTQZnoENEpZSgkuaQ3Sxt9HxD4urPJWYNH9ziEzQsuKfMem",
  "key19": "5bMb17e6VNpKs11aWGTdFoPhxQdFd9Q5ERpaefe1z1weC2EqTVZYJpEHLSPS16STAsLsyt3DpCFaHcMShgGhhhFA",
  "key20": "5GQruDJPqGUyhXebEUQ2NqHfk6U9tpeWoQoGY9nMMRuQF8JdRNY6Z3itseqAtsgZJ1wDG19XyuMb63jt1g4UJqP",
  "key21": "4TfKXDUL8GThpcbeUwvmCLHE1iHvz9bbU9Te3ce8vesirAckYFjPg4x9AbPvkLcCg8CpcZknQi8Vzg3jiKSeEAxE",
  "key22": "3abZc8smkG7RQtFUWZ3bno5eJYBbyJhDJMGi7zRKDL6obeFbzNiaAUQHF3Y2noxGkdXA8orJFjti8Cnab6GwWhkv",
  "key23": "2SaSqfvPweNm3zCev54kMj6DRVM8E6ZSejUKaxaUM2evjHrEDQjwLg15B8NDLrLy1cktZJgE8qUaMQtviXX5GSbo",
  "key24": "48JbhaGU81fpTqJnVNHArjzDA6mGEqdnP2Bn3eiAknFKvwjE2CBgF2aEXitXairyLk5H9YoRi9VT9nt1BQoM7r9M",
  "key25": "4hxw3N4WNmFHz8ZDZU9vPHV4g7BcCC2rJMzbn4TycN4uyP9jguZRtz5vRkWEcwUgTnfi1ek6fcPYPNzvZUPkevn2",
  "key26": "2XFGfuJGinrfWByj9C4FADb86FcNCWeBHx8iRqWHzf5XxBDyWnejKKjHZ6Dy4UjvakgiKpfVfLG8sbiYR23W6k4w",
  "key27": "GNb3LGYG1HayByj1mAXBv494ph5PL7hmmaTxGbkzRXUdnDCwbMZZ2kbq8NS6RoVT15upf7K9ggPaafQ93oACrE1",
  "key28": "4iSoLY7wyLNv367J9Ei3dYso6kLfHjSPo3Hh1cXMwb8NbP5nGC8eYEgMwqFnQ74avkYPX763ytFyezHs7NYXZYS",
  "key29": "4FXemmxpu1bSuHk6WL2Tsk4U4ptG1BNB9diGK9YVMkUFtHFZihGNPrRDVjwP4hs9DMqBo8nV2FcxPmnzQu7ZiJiC",
  "key30": "41Gy4b9Sc3BWuEJCF5UY9eJEmCDWjp21aGDWqSMEfkmZo5C74vTrEnCfQHxJkWJ8qLzfVPGbnCnNJRwp7rQM7bxa",
  "key31": "2xGLjgx9girWfbua7hq778G7CKRi1f4d8hByLqe3xPrpEQqYb9XSstmYxuWuZr54MD8vEDFzV8rkZoxVAiU8LFKZ",
  "key32": "538WHAxpNH21vfr2U2Rb4t57HMKpVzy1q2GsmQP9jWcLvbyB4665bgPVR7HZksw8NxVm3i943UiPzfhhLiUqDo7E"
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
