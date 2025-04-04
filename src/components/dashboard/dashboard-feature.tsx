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
    "3ArwYKskMwjTwn21dvCzw37au8UCXdTDo8UUmFXp1xpiweZeZj4ivGaXcaBaCiHAZkTcimeNZ1ip9jTA6CM2Aypu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h5Lq9wE8AjFyMX7Y7HbPF7JRqpUKTwdjmNMpeLA3moNs1rGcGyKNbjC7ZfewsTkX9Gz1QjXqP8LUayfX6Vh8cHM",
  "key1": "4F2LhU7CwntwELqo7xWtvgTuiLaXJucM1V3rXjKytctTvzsDM72c8CvtWBFPhstR14QZSrGeThMHEu5hn4aYqjZk",
  "key2": "4pYzvAa7dXJn87zU1yszX8xgpqYLCTEsCRFyxPmtQXFUmuKbM2S4ndGsfh7NQXHrsJgMZQ5bxJgC1N59xS4mrruX",
  "key3": "2Uk26C8m55fPhtrGtHsiDf4ajNYpc9hJguS6JBvreaqUrFecXDad7pMDpdLEJdgwehaatMA1VUTURZC4U5VBCLwK",
  "key4": "643EkCpCfBmN21wN6sEpw6yaCQewzn2AAe8CYERWyCKY8EPKRB9nN9FPJ4iLQMk7AxHBKXz5ch9qDQTm2kSxz74W",
  "key5": "iMMnqbYFXyjCi8Z4gybt4f5a2NHz4i2QSawSZRGoYv3sAxG6izWV1zbN2egAz1mpqcccZyuanuBmxU2hrRsXA3q",
  "key6": "5V3Cq86FHRdt9nRA79QmCWuS1nP5md7H9pXeEA1qos41M6xGGuzKxwqXaZYmYRrsrqByEndASy8d9xp9iYN5zmfV",
  "key7": "JvkEpcJH2j8qnDF2mZaxey6p8zEz3e4vu5VAmbEnAFMvtCxypTLKHRziSuk1fbndzb6ixjghrG7QbxcRHxJJe6B",
  "key8": "4MbnsYChHkqGN1oNHrdFD2zpwSMMBHqXkd3DbA8maG6s2d42uCYhBu1xP3HU9Dj7KYx1VGr8G8ynga7etg4UdLUf",
  "key9": "xhdWGcxbpm5jJVwL9QP1NNkaucGH2YKPwUwMXFN1R65dYjxNhUynP2eMKkwf9X7MmyiP16cHghqoh6YY6tBx9T4",
  "key10": "2fQqe3AVdcegACszWN54Qt8HYw7TZXaiFTskQoNpJZ5yqKFvyX7s8RUdAMycHNNDJT32geLU2raxanLNoPdt1BFt",
  "key11": "59fen2i5iZJN6WgqMH8TEX1qWe5fAc4rmN3UqrErXoePsPky6VijEJy4RMwf8nf2gS5m5wjKFcQhjonU4EjApvwC",
  "key12": "fzNuox6p7rb3skSZZv4ZRPDBztuGnCJn2z5wD79TGUTRaxCHm4hj62UKWViZ56BbvJxRiJ6NrLobq2JR2F7SNxF",
  "key13": "5a99Qp7i7n6xoxtUs4pn9ew5d1m9mFcQcgYLR6dZQajxn2KW6F2yFiz53FfnRPzRb7Avs9TSLRPQxzhz3Zoh2x2f",
  "key14": "3trQwQ2BbcXvS4g7ieqqvQqhBeNawjRDYmjtHmM5XwkCK2QoKhPqjqcM6AFxhmqqsmcTS8hZGESs5isaSiWWoAc1",
  "key15": "5oWjFuNbHyu65adPpoGFiNK4HiidqfWjwp4XZCSbxwmSuLXJ8QUsTv7GgDwMpEQYr4BjqWtGSxBAGwuZZiuw9hEQ",
  "key16": "2eiaBqbUXqjx1UnLwDoH4DPKqJy4PURidoJBFbwHcSVrWyTjrpfhEe7bWYyC2XLkW7mKkdrb3KfUhyQTkkqQGP2x",
  "key17": "5jb3ZyBrpn3Zx5UNuBkJm7dLCKbXDFTeFVAbKNwfzQPdJeXo9PaDsB8Kt4KHj9Hdsu3ad8SzfqDJR39EocRBE6EU",
  "key18": "4qDeSm7UpP9pAuSqfX5LMGtNZ1Xjih6nMpnKCRWz1jeNmE22GZZDSZXYFrMGqkuzYarNQJx29oqZuDwyhmFJ39gF",
  "key19": "pyCgQB1fGvLiGgBpfBifuuf53vdYHRGY6jUaxRVDSZPrZR7DUqjDe7HkmPMnxWoiLSu3wV4BL3R9z91G5dRrYxH",
  "key20": "61uGKnpP2cEXS1ZKXfun9K8hScaxHwtjBbeLCQ2ZGWcY6Pt6Kn7ccrQ7PEZ4Ts8QuZEA8MmUD3334pkgVSLpovZi",
  "key21": "5xLRLiV3XvRC5KfMQoKdMkyVpXXzphT5eXgW83iqowgioA2PGup5fAXjXWaaPSfkZeGjC3SbZM5dSrUyiCzf8NFz",
  "key22": "5QG3Gz49yk2qMtKXBzRzYctojZhfoVpqVnqnc1xn4HB2p78j4sqNBdXTgqVE1FUmSmkrnxTaDBt5gMPnriAGEwGt",
  "key23": "2syQ16QX8CLdLmR6iVdkDqsGFUCp9rfjdJwNd5u9ww6zTbkCy4ZwmceVNYFGmT1ZLdNCw9B6ahkc7KwdqZvwm9vf",
  "key24": "hFsifnd4GRpTNB7xCNTKMwY4YUPU6dwdQhrnh2y6Lmt2MmpG9Y13McSvy5Gn8UcrXnmskfexiCqor4H4kGMU5oj",
  "key25": "ra2JeycQy6wqLAA3CsX6UjuVTqjYMevwALS8CZqyRYRuFiyik4PcobVbDtfTq5UVUxEHbCKxWz6MXCVCG36fiNW",
  "key26": "HRjC2Cw2PVDr2HeSm4j9tthSHtcu1pu3aRM5nAx2YymRJkEadwW59tuRCRwfXCNi2DYMjKk6Kj5xvLkoMgBF5Qc",
  "key27": "Rp2a2hmXNBTneXjc7T6DjamQ6gv3JgWo1myw3d9xdU2p3nkDE6UTh7Z6AQVGGaK5wshr9D6ns5DFYqBSGLKaavF",
  "key28": "4An9FHQLxsaVUeNZKFNobeNiUDA2EphcCQv8jD917BbmCoJE8jKnvZh72vdoZLxSyNXr2AaycGCCRcaCWDwgozKu",
  "key29": "4nffyFfiDx6HscKEV3RYxNgGcbvaPTFAQ96sDLhXiY88qLEtGjYZyDY3XYjLQiwUDTyymG5Fk6Qi4sPiwNj2GXfb",
  "key30": "4PT7VmferPY3ggnPeu5sRC39EEsfmFuEenPPvmFq6c4vZysL75rFjn9qagLsGjXAfLEqgX7Z4cJScvKpLXcwHAoP",
  "key31": "28F4MmNj99EU86bgChK8CQ7unrmQXKGDLpJQf8UR2RZB6G6fLzY9X2J5ikHQp7wpuRvZUVMMWhTSmWJdmErXEyUb",
  "key32": "2DVoZg32vWHC3fqTvaYNjVyKxpj3heaosjfvK1MVyBmjEHodNcH6291pRwTTXaNL6RdbpsKhhszL7FnCc9DuqvqD",
  "key33": "3k8sW2wiYPT9D3V8PAKm8Fd3SCJPSqn9XD6d6ohrgv8SdycoKGnFZ4dUdKfhuFwB8LfqAD3JLSgpCWhDEa9LdHdK",
  "key34": "4KNZSd8fH2DxT93kkx6Eu5ENE2Aw9wnq72X45eFcX432QXmA8yrPADVKxKMQ2wC7s6BqG13WnkLgTrWMmuWELzMd",
  "key35": "2s8Wa5qYwVgSBnXxztKSQfzsiKTDjyW1hPVwBP1pLS1K77gcjrfJKvpkR6FL6zHUm1jdrzwNbLQEJ46YMbagbwdV",
  "key36": "4R3Gj7rKNA6JaDPLtZEZdPRYSeNwTFogJLQvr53CUpnt6Rfu7PwMknd8jKgdqqEvYzBfffDTi9JRTJn4MnAocgFR",
  "key37": "5nZi1wXEcGpZQqDtGucMgjjLjsAh5f7SFVXRTGTZPPE1ugVzL4Yxg8QHLRKpGbx6AuR2AQvUdNXpwp4o91fXN98S",
  "key38": "H3L4gF2irrA6x1krRBc12gFB1Ui3e8SrYdEj6KjEe8wDsGchwYULr56JcBuEE7s7boyRF25zWdVFC2UV7hYB4vR",
  "key39": "37xgsJ4okKGkb6ZKAGqnaqRR2hFgoMQnLzaGMRRLy87NCkqxvUMYFfYtiUGh1TnTPDJMoLYV5idFXUPvg5zVrYrE",
  "key40": "5x5GFFAW9CUHMgLHKSA3N9RQbbsKqrJqpHWtnBYyMTAZMMWgJM1koEXWuC7vSkWscqJCEr7j6kmfqa2fJTfVQFwp",
  "key41": "5VjkwPg8Q4egS5ReyJg5gLnqu54XErRfFfe9RT5wPU5UUo1S1oqoUnXxE9o6AytVjFvkDem6ojMjw3uJoE7AinwP",
  "key42": "23Q14B3w8JdbyzagBm4ViRqLbyoCs5wAeoWinjSFFajoScPSY1PdRnJGJDtWt19VsvMD59b62nEqQyeSoDqbB28r",
  "key43": "2oN3y17MAGnC6KYEkfkH5z7RCpHNNpYgSMSpcZijkZduXfiKoxoeP7aFuVdhikDJhYDRArbv3Es9iRVTXnigmRcq",
  "key44": "5nhYWSvCmFWYAAHsR7ZC7aeNaCjhgABNmV7wuqv66jrskveWgxdtR7yxE7AvwLTJ2ZPvnh2dxAUbWd9M26jeJFnP",
  "key45": "4Pu2Crykv7rN6KRpxPmPx52QGzwnX5bT56qcB7zMp36RworJLBnNtBFwTnQezsAtmFdpj6QrWaJkjxSRZEiKHhBV",
  "key46": "2Krd4QfJpsNXADEPe8A3R3qbQWkkexNeHcr1D8U8oe4oqhd3YwbWTw6G7Qm3kgiCDJUnyQivKNW5n7MjQQp6NxBh"
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
