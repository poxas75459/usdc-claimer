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
    "597RNEg8NrLdxGriNPTiijVfPTFkagRFSHBDLyz3RyE8JNQD9q2woPMEf5p4GuiMSh7FN1bexSeazSq1DrWUeeu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ceAwFJPNWKxgxZ5fvoWKro9EsjCByfpXxyTQjN2WiH4sHeMSodQ4MTqvsUCoRcnpJNZmrJozkycFW4skw5Myi4",
  "key1": "4jWsHDQmriF5v2kSscvECuTxEpjiMQH4YA5kQriZ96R7LBitXHdereeoFtUCTJepGsjpSEXoZJ4GHsQ1Hmxn56zo",
  "key2": "3Fa7BLigWW3F765GfDZEPmdzNW9WFSsFULUR6iejgDtrReKjmdFP3mycbzwuCFASaUhzovY1vumLnqdGEayMEy8T",
  "key3": "5oQsXKMoqzVqs9bcCnfwtGT4yUptLdG3KsY2TipaJYtBqDmty3EV76xYBJKNfKDFJFrsFWaVKv29QiTaVJRCNJjo",
  "key4": "4Bcv64kD3MA7LueJqVnTguSPTKUifR9z9cjNwTqD9Veb1gwJmtueLwQceyB815kvBKF7VM1AmJRNyhDeCLeBCwVy",
  "key5": "3Fe95ek2U7nxAfiihojd8kLV6Aba5Puor477ZjjtLCG4jqeVFhkTect2CG4hejqw3mbdecrkJvVydGtHPw5gGAQN",
  "key6": "21waw6TQvT9sBhgVe82xMCgDJxpHT1hKCFHoZYwfdqKYCX7vwrBQSiQZTdGDSmDW13ojvREC3L59ganSbA9xnZ4F",
  "key7": "5WnqYoVGv1ahj6CRUXpY1ecmwNthxuNf4zZNcBGZdsUK7frTDA7hdUcTXv1o3jfdgDz77QYcRNhwsRebPUMQgkcP",
  "key8": "3vhVrTodc9Q5CMNrng8Mht2RxT3LbzKDFqa2S2ujyxPByLzn2fsQBFuUbEbrTVxNrHhKguEz3crLPoJSovTno2g6",
  "key9": "WyQJrPJDN65SCcrP8Db7hyEoPvN52zmZkbSifwhzHGpcaUZCXLaF73mt7XjVWP2Kok9sbS7Tk89pcDDtfTNWVxt",
  "key10": "4GmiYnzkpEQPYPdwywrdsFqwnGBJtk74JzC9F2gMwPQU4Gj3rrmjAFv4vMHd6dEyYQGN9wgRxvNFYGMTe5ob5DLF",
  "key11": "3hLmxudLmte6rVv7t6n94P7JvgcuVqGgdhU3FUx17KRRTkFkLeNrT4kAeUF1TtjUDcmRQ6qqF1zurHiDsneN5oxU",
  "key12": "4MVUVAv8hpgX7PLitJYWnqDGDsi83fbjHs8rsJYgHn3YsT9MFUbqWGAUAxXWRkqessHxcfByeuvXj8nrbsM1Pbpk",
  "key13": "3YxbJU5C9NA6PfA61bMs93GGgK2YP77E4dDQyUgvGWttipqUchx6gJrGC5Upiv2EPTZVhPZUsWRvh5qxJG5yy8dt",
  "key14": "4N4sTYJbxGXEqnB74pybmruCSDPXSu2GApU6F1YGbJroftB4htpc98STwfEbf9qxrWwECfD9yb9WQrvnCLssx7a2",
  "key15": "2gwGJ5CJcSZYGFXEZqBJZREHQXc7e6uDanyJpkC3nbeQ2sxQMu9ybvTcxMVAxR2ZVLPNxwYh31FWvJjrpenHoAcB",
  "key16": "3oZkWw9CUGvQ3L4RsSNK7jgyHSD6KAHoJCqbe8bJ9i8DFBk1bUFCi2mswiMf1p9F3K8QLqcyHNHw9YLCPCNAZgQv",
  "key17": "3hiVsZjUTagh69c7dgEMh2GzUBtsK2Uo4jaQiDjxbxms6wkrQVtfEP6fE7EgEWCVe2uN4WTePoGQ3nQqrHS9mGFa",
  "key18": "5Kxgm5yDD65NVxgZZ99SSQT71RtfF4tYFSQGKZrCmkMa3DTr5SHRQkR7yBv84TaEnTFvwVtrMiFkBgLw1HLfuTEh",
  "key19": "VZ27W1LSbu5UKNENffLGTzgPiHqi6PymhvcEiDCdzCtkjHPkGJu24P4zoDWAVwpX88mAYB4hYg5CoM1LMmn9sAp",
  "key20": "5ixZqRCGrgLwH2pJcXBjNPWTf8PDmt6rLnmu1hX59pyrnUbgF22YD8x7UdGvJk6siYNJzzaH4T51qXQNbumb2qMe",
  "key21": "383MQjKAjbBW6Yqy7Tv3TuTBGTdyNnf4ofLBoqg8AJP36ePaQesTop81m81kk76jgaKUZaKFESDGTQZGFdCNRaKR",
  "key22": "bSQDLUfZYkGn6VdpSXdo6N5j8Cd2VtyiP17o7cNU5deYnJcw8yVJFoXpb7wSvELKPwaMhHtth5HyGJ5CG7Aqm9y",
  "key23": "3cqW4rUxughAf6DcmMUcdjR2c2Ge3EVcTKDnQtGkDsoGCjCYhQsm1KYcecD8oQFJkBVtMoD5kGXjZwaPgfMkgusL",
  "key24": "5B6kMkUpQJKurqcYRmmQxERFA7Umb9kVmqtQKCRecuz7ciVhXdcUZcbXMESvCfzUHn4jnFbygFFaoEJoHG8HYK2x",
  "key25": "2r2iRBCpFjptMuwhP9Jb8abmo8uuLmFawQYMyRk96GZDD25qqtaiZ97ncBoSm491nqn6Eu6GZKTzgcU6HgFUBRXy",
  "key26": "wjcZmn7DD6ZoPx634mT59KiTGjPpm5bKXSTMB38uXPaM9voMwmxRdJJjgoyNFiHZoYh9PDzv4CTGSLNna34stP1",
  "key27": "4qNBjmibRVjKoKe8XCvF9z2cVnwfJ37dF4vpUhG1QQvFJTyNJXduhPGWV5jrHyBA8kaXRkj6TByTkdRopsbCnYkU",
  "key28": "LpCEZaECNw56rwhj3Kb8pbZ1EuzvNGRS1FzencNrMBoJFekFptQqWznXF9vCqAx4Lh1peRdcXg2DjE51bx5u7n9",
  "key29": "5bmMdV4kFgFtotTx351ANk5uMQxkGJzivM9cwLACL1rHNzWjS2osiq1pwtQkCwmg17HsCpsuLirsHrqaenVzET8F",
  "key30": "42ZQXjiKqUVz4jMgNgcHUGbogdMRQB6B3SZDyLmncNNVqKvd1EfufcRaAE2iVXta2KG7AzuiXwvx2ByMrgpepoHH",
  "key31": "252zFC6hkmaUyUWpeQyPpSQdpQ4dECeGBvN6i2MHWd96dRvQaWJHVEVsoyPH1QmhjB8JLvFrsYxBE13EfD9cmaQs",
  "key32": "4Qy2LgucQCHNR8XxqrijJWkNh54kWQGEqwPzbhnFSj5BgsKu8QGZC38fTLUz7sNYzE7Ke3e9JTnnTJp9948SN1Wo",
  "key33": "65YpAeBPw2sPUVD9TfNP3beSAf7Ab1iT2GGKy6v9BskQmi9nabn5YyqZBF5hXiMne1NsMjXzTERzSKt1RD8HJXvE",
  "key34": "Wc2cGJ3ehWFezDbuhSkuMmfX5b986o3kn2jEhBhmKVm1rFRxsnk6m1THSZdT9oCE4KUqU7svkeLMPXWoPFrBP3y",
  "key35": "5kMaxLvuE71L3oY4fJr6CDYZZiFC9qA8tpKp38VSJi7rFWAWa6Y7HK2butgBKP9DSdzKMr5Pes2B3S9T2URsMMNY",
  "key36": "27QPARHzA5QKrEqemAvVFFhoDRWE6DcELaa6RNJZw1xeZnmHjqoLfHMAJgxKC6EE2zk3vgztk7iookXwifFGhfqD",
  "key37": "57r8VhtVHnTQkGQUg1VEXahZwYYnJuKkymTzZrFBjs4yTFT19zTVjAzp8r6i6c7xE7eN44THXiDV8sTJ8Tp2kTb9",
  "key38": "3Ai4fzKCLWQUQeZLP59gXcdfAW17a43W8LvECXy5DMe9t4HJB8oYr4TT1b9K15qhc2PVRmQNrKL9uaaptBJQQt7M",
  "key39": "2tCxuJdvfw7mAaqdrJYuzgz4aSYhzKKnQoVXycJXzLx3MaZLpShzvHsMxZXgi1mZXzR6N1MMtgxDLpxr394cgpAf",
  "key40": "TitmDWLmRczQyGLDYwNjvPfH7juUXKozGzqgMtYkAZJoWWVSFFQxvJnYGknqg1b98kdccsmLfVjNsdGH299cYas",
  "key41": "56vLweih7NRJowHnXqwdb7YPcK24P5pG272bc5gimnEjW5nTuwwu6TUBjTDz59XFKcgdqr1YWV8NKMauJw2GDbMB",
  "key42": "PSevpDtM25yErAN1Woi1cDEGF4RuTciZevHcZLNbQLdMT75myXEdGk4nAVKwGVkgbDzaL6UrgJoPVH4LKedvpfe"
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
