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
    "4LLuRaF6q8USU8nbhAo64DZU4wGCz9U31z9kQc32GNcdzEZWmWAUViWur8HWrTBHv1Rvtx4AgfuEWki5RvQUNyJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pkETtCuu6FenahPKL1s2WJWXEzfuDAakRUKZcPHtXVomXAiSzzXfQNn1z4msk195pM7u1nAkwja15nokJXcRPxf",
  "key1": "Lj4DXfhonjcyvPKv5Q2STayteRypqvd4NNScvvWcBjqpLv8ws8cPSWm5X6JSDoecuVoMBmH2Rj4KEuE6XxGBGmJ",
  "key2": "5DUYcFhLo2RJtHLsX5z9F1sEojxXS8H2tLSjMfJarX5x4RjvXPTp12qShBxEfzDqgZaE5Fy6bMoYpUT9uGGt6jBG",
  "key3": "3Rg46NQPywaKBPdGFX2y5CCT1GzgahTUwoJrHu6f9HeQYbgxwv3hR4ueZDbfRyxpk3Vcj1Sx7E42uUJE3EFGhvCh",
  "key4": "5AY1SZot1WLX38YCDv4jAoNgqGPn1uJ1i6T81s7v11gsj5mWpf524Hu6TJ5cyayrbnzoEQsAhuiAAZVMcZskx1rW",
  "key5": "4LY7gmpASAste652GfKHViXqzYJ1HDTFn3utW36tbZAwxuHHWXC8FJ463bPybXyD65DjGgaWaae8QLUgbECPN4wa",
  "key6": "2ekkyGivrh7skEV7PKutq3pVZPgUFFnn9iNte5YG3RkMvHVqWXtZ1TbhJdS8jFfs7zDo9mmamEbNLSE5SNtDSj9m",
  "key7": "2sDE5aCwcsJ6MfdCoCgGgEux2sehYW2Sdx2KoEpAcHgSE74SsBZwSuiySA8oK9b14H73DPCwpRTEvgbhBxxKmKri",
  "key8": "3PQRxKhfAJU25VwWZT6SP21Mu9hx3mCwxdFM2kiGqtLsArcZc5oywtt2tPm6jiwYSoKscZ6dtWBDn9QscBJjRg6a",
  "key9": "5DrJNgMuj1aa5JYrojiqHp7Trhs4pUnoB9qRKADntPEAhxBPMAvozDGDYtZ8rWjrHuRZBx3BU3XfELBnkrDjVt72",
  "key10": "66vwVtsE4iyS4JtHBPXNAu12TTTV5t7ZDoTCu8cVrvEGi1M6Pr7HLPeH59kbTzvqLbxvkGbfs2fuieU9mUuqpGFJ",
  "key11": "3M8nwXBRDDdrNuW22H2tP2PrGpszhG1vq3vAi5TtLZvLwyoHfTxjoPo2kcECSH8ywUkVV15rh9zjp8VzaQB2hW3c",
  "key12": "4HNHA1D6XwrAeRHtn6Tti9HbGLUJwS5hALJx4dArji3wbPH99VpQWh9AeVzrSso4cEgjTBdFcCswGeGbjDgxeBZm",
  "key13": "neDpVUWXRC3E5Ee28aj4gQ8uS8epqJmxLPjrYcVfbNecASva73gEWmVS1GEp36qCwFaq9Yudxh2Xou3MSmAaHys",
  "key14": "3uE988WBSLWziL467aTb1RrKa5zLishALTWiseKhFgUyCPgoNDYtGAhTdZZr4KN5dtCnr4hKcKW9jvXVT6Qbfzvu",
  "key15": "2sDM9c3FzqoLoaHJhgXLj6sUqk6WNKiv26ubTL4WHAEkYVBiKRiWLn5FaBP31dudU5374oBzjTDijgAbXYvqD1J7",
  "key16": "GdrWQMiu52c75Ts5oSUkhjWnKGW9YNg6UA755PpqHYNwoVzza2gfJvGN3mS12BDY3jhhzhe7abEeeGhEctng9u1",
  "key17": "XAgxAennfKMHVKmuK4SgkGCZtj7S9cZSHHfLtwJ2NapoVypgqGLrpyyCUg4ZjRiABbgHNSuZGsjmVQ2adWhn3Yd",
  "key18": "4eXEyWx33XbE6VvmpwPjNTJEVDcRU1cZN546FcEEimJ54rGUk1tvZ6BqWnuZdnb9bT3wBy8d1PzLFLvYLGZdpknX",
  "key19": "5UBPNYG7jQDG6M3z1247DNTpNumfXXFau3rTwKvWKeirrMFdoE36S7HaHAPBamfDiN7PSbfXgfArk9X4QXt172AG",
  "key20": "cZedYHkD8GzJ8WjRZjs8FJVmnenh9B9VYmFSZ7BJd5XUG3vPh3P5Shm5Nhd4ZucurFXCh6JGJYhAqegYRYYnhoM",
  "key21": "4DPpeaExLckSqD9vKxzuY57XtCNUAXX6kKjU1XW6QDoKjSqpt73H9EsHZpmRTnJKxCebPBNpSS9wrBqtAMVMssqe",
  "key22": "2QVMcxAqYmagwcoK7iz7TDjxebCncJrXpySfjwggNHSgfoYmuhFX5NHfrFymhWryEcezDBb4sU6nSjzaGAE9pbdb",
  "key23": "E1Y4kZeHcBjhnp37LW9EuZhEFwLBWgc9sueQkZQyxG1GgZU7PPrJEH4AvZbbXgP48H5wHM3yBtbJW6PKmJQ9Gb7",
  "key24": "5hGTbYY8LibYfHavBy2tWrpgerrBaEoSd9Expe1tBhwU8QCYFWrd1iUXvcsvyyDYdutcCZaFBpENjGFCdDH31XLM",
  "key25": "5GZbEeUoUrN9BvXThLw8p12eRVBaGb4aoJ28PU7w86Q5uppxaYMT7Z8NUTwjtXWNfMPhytZApfiNv4NLkuXdxNE2",
  "key26": "5ALsMC7sXnxfWiTdRdBDKGYacTkUU4koG5jdjBXLpcWrhVXE5X6ANsfqbXYc8fgxJ6s23ZLVGM14tj9P7GVZXZMa",
  "key27": "5Zo33W5z5WEFiYw1rq5WW1HwieDDBZuS5KMSBGxGEtPGaiqcwWFVRud5gmEot4Ao8hDYMtgXogErW8W4yymz3Sqy",
  "key28": "53Nv55TJUuMQy8oGTZXBbE5uKdUL1be1qBnQeToL63uzVcNLGYybB99qMJJ3YFEuYBKootcTji89ysiHzacRN7EW",
  "key29": "3ZBs3ULhti2qh7rTz3qrrk3R1w5gwi9wTuq6WMuQTRNGbPaceVpM374rG6emBMhA7artVwSWJmz9pRJkCjHtK4nm",
  "key30": "47xKpPbNykt1zZ6FuC6jtVd19HUk524GSSx6YMLrVSWcH2ukcBvoqoAWBMSZV1wQwPQZPEyV7igYRd6vezsdDgmH",
  "key31": "4S2hs69N3Rh663Y1cxKcMwJCwUYbhuNNvBg4xsEpVixCy54aDEdxCYYd26DupKr7cypqRUSVZeQVHGV8rXKkvyPc",
  "key32": "5rceKzbApTr7hZqGwEjYzhT7N5STS4SqdinqEVDyvkaSpoWq65YLdkC9wC4TGtPoLJpzKZhcvMQNuC3AxTPqocRo",
  "key33": "5ntBUpE5tURQgcgBdE37Ch4W48pgNyWHk38fRYcmBmCGEi3fSPxRkb62AD3zEfZKrcZ7mNRxYHmrsKS168sn5XyN",
  "key34": "5Kqh2udW6bswAticFat7DXouvyjinbpe7AFfRiQRzgrpAk96LKVykj6yjTU6SspXoDTLiccS16QcvqFm4zXiNDfH",
  "key35": "264tYB63EF3nn4LGZ1qxjMphVCjFKxr7PR4z3AfVBazKphofFtbeSHZKqrThKFPL7U8i7ciRtu6vY9m7fBLpQYWF",
  "key36": "2ZG4nz4kD6u9q9MtHU3BVthv7su6Hw6HyUGvidFWT2SU6JUMRTJT7TwzVT2cYpqi26mvaEKaLJ143bAhFFHkckmD"
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
