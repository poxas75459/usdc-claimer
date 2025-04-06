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
    "5YuBaQThjxxZgg9RW6LWfGcw2sM3j9FsEfjMsd1LULXT5onDU9DA2NTxrY7ik9EWgZTBMya2VUPwiRd9sujmQCUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hKLHBSDeLGomEvpBJn3awkHxViMUQKNV1BoCA7CcyMUimkFq4JhrQPA6x3WPRBweMzGauoPCk5mzLFdfFJjhvdv",
  "key1": "vDuQ3Z5SggGR9vFVgaWYaProYj9LSPYAFmRC3iS22xcMQpUAc7ZVsgBbj4eHHi7gKJyAdEzHWJqGQQVvyTASRAN",
  "key2": "2LXxe6dMFEY8EKoFenEzb4v8QQg66Mh3jYBgUohPtmvWmrGCtYAwaLfoYB68SCttt7yNMhWUM2a7etvTCPYMWSHJ",
  "key3": "3JZPZw14C6Jk4mdNyX89eHBrnXAc6DPa9Ybgp9T7AZG5BsKJezczKSMiAPAtcJfQG5uC3vuNodFzhAAG5Wfutuko",
  "key4": "5nEJLSPfmwfnY8cD47ZDphMV8zBQ4WEbZkNUvqFJdMKBHjr7JBFt7qhazbrmm6BKeYYvQcvY8h3CegEXc4zCFoxA",
  "key5": "2x2KGk8hoMkjMsjR6ZobxM3yNXYcjHPwGLuQ6ezTnEKFj3QMwYwYce3etyZaJDa9aK6CqXyZdVdsT9mAwRVXksBV",
  "key6": "4EiCj9vUPZmPtNMotUdvkZT5Np3PJgkj3kfF7uZ5tpHKuo3evdfHttg9a5pNGDuRbTB62qfcnkBRZ32HR4FzTY7y",
  "key7": "5QS2cVJVVEDBbNEBnVEFVJZUrnQCvdfRz7J3P35seaAk8JAfEEjBrhKhaFRV74oBLcxQ4B2PUs1jsjENf5JtmPT7",
  "key8": "5zzWVYxwscXAsM4Y8ymYpcFWWzXkeDETUAoPoDMtpu9ZK3gbAPMXw6aunWkkLtFs5SYj7T8PBP1Q8YGnfxeYDMyz",
  "key9": "4kUTquCEVF5jrh1uEEadp4cc4sKMogVdNhkNxCiwRkoVK3UoG4Zr6yZzHVYrDv6McEKMdv6TCTS16q3wN8bZfPUh",
  "key10": "5BTxyM1Trcry11U5hZqSqoxEGCAwcoxcies8Qo596uQ6nAd3bPiTKoRDbrUjDLQ6kBHad1PUMb9sRYxajCygi9tS",
  "key11": "3LQKc3tfgwLYyKqJeULHw7xPD4ZphtGnZZNFpS93LY5jVf5b1jnkQfBc7Pqp2opz9Tj6RBYXrwJjYKmyGpWvWQwC",
  "key12": "3kGMmRRR1dyCWwkgqFfFJRD66GZmgcADejWR5NGyUCXwhda2MM1pAXTtZ8AGsrMpRK9kW6ZSuMVXDxNm4ZU7b37Z",
  "key13": "5jgU3pVgM3Wx5EVR6t8naCiM6ZvBgaWWGggZKMHbN9ivqeAtQG4s4kxRydt6nPPsWDx692GnsWKNTzB1QyhvjFGB",
  "key14": "4WCYvoTiEnbuiScbgix7nG4mYgNBJdLeWDkZuBRM1a7mcLVA1DfnaYFyupTZZf9kTyWdA7tpCwBQY6imjRyfofz3",
  "key15": "2BNiBPKcS4iWNe7NHABRc8uMcpweQ4bRfSDQSmzqjyCxAdPR3KeFGyYXUpPC7dk8GkJ15aV5Gkyb8PHRdiNVEaCX",
  "key16": "fw3SjDfVzkR33k8WWw1dF3iYaeZihvmABrVRxc1PqYpFdyFptfC99TPskdiAAW2Do2uu4pmVk7nnmtaacHxgwsz",
  "key17": "58kAP9Q9ZXUoJT8o82whCHAMwDDrGavqhA1dkVNxdFYqeToyEXfJr3RQybngQjY3H5M7QydWvmEN9mkG92tzXRCQ",
  "key18": "65Sbc1WNN7oWbtFmETimcjiYMHvuAN63HpBxJLmF4o5BWjpmHsKTVBez14wbXG36D6HmNHRa7V9ppxzXWfMc6uf9",
  "key19": "MgBXERHMFHVedE8MJydiQ1VAxdBBJckH6pvCdhRveZfqyv8JdPM7cSDBZPzJXU6PQ3zfTbKNT2uArspPhtda2C1",
  "key20": "4yn1h2sKvpo5sRJxwvBkfsJDnepxGPodzEoxqiu3zXWyZC9oP3hFr3HaPWstnJTUtkZNeuSCQQp62NB6z8rp8Mkf",
  "key21": "2kmbpeZdic7hc3gaGUpPxP4XxrEihE84BfXJBbRuAicSoHe1rpwvJPQRXHpUd8DkbV3cyzowPeLmuqjopiu7XzEB",
  "key22": "425Yg2fa7Lz6PQUvhZ1Deb5TDJZgpj3SKzeZf4VmezTLJ341V84B5jrkSDPNWLvsccpMLGR2NnSkXgEoYu1smAEz",
  "key23": "2JH2Vf3PJFYw5M4zWm7JbYhoW6FBB94dY2cDAYvTETgzrVESphenswy26Jn8H1HRUu7UELNzmp1gb5HHgxysUyyq",
  "key24": "3UizineZZraFUYiXmE8Rn4Byft3CtBb8SKAhGndNhAemjk5nkXPieSFfTQ41ysfGbo2cpksPfWKuNaoLcGQfu4XD",
  "key25": "2jCmmjHk41eooJpzF9NiXxcSfsbppv5FLPR4e6wHXuW4QeqSczTD4jUD3tNZSTTwNogAkAhzgAFATQyr28dy2pUE",
  "key26": "4NtosDCNiq71vevC2Fhpi7seU46xMDgheqVd3RWxJyrezYRYvtJS5kF74NpVdY21KcUa1hyG6MiyjxkzLbyt4FAh",
  "key27": "5mGPHmy4ZhxQ6tkWxBzqcdjpgR6LKtUjxRQrjpPHt4FZ6ozwUh7i1WLL2a2VNiK6eDugZKVVCj98uFSZ2wbmEVHf",
  "key28": "tgQQku82eWc34MLsCU4Lx4V5onGGWG22vFV7bYHySmAqP3By5Qc1nrWCbn6rs68F1EdaLe7YHQhaNKt7ipnKc84",
  "key29": "4ykYXnS8UbbizBHvuWF8DepoZsJkzBB9BHCF1Pf9rLM5Bt4fv4s7mgTPSfTVHMiGN3rbNcnUmeYn4AiKUBSufWBj",
  "key30": "2adByGg27ayVHUU6rpgvDp85Zct1w4syg1dp9VGpiprb4PRejD9fF9Znzf1SQ5gYqEtZfYCRJxP59aNpAc2EQg8z",
  "key31": "3vgnNkXSbz6ML2P9WYPoi1ZnxwHh84UbFArm1zxhFbij8dK7ugrCj3RShUV3YB4gr4otvGV1hzPJQQHGLAfbzBDH",
  "key32": "4oh1ehmcabgpg7UuTpPWP6gSJ14D1GkB4a5VLCuuv5tMS8yTg6715t4oPJRHeY9e8kTedUDYauSt1J46RuXhNPpz",
  "key33": "EtuFHA8qoF6H5sN2usnwhrDJUdam3iFA2u6yoxa1T37uqcPkRKSpci1T4iGGMcZq56qdBgj7eEJEEGHiPxZiTDr",
  "key34": "3d82n5q9EfSMJam2EqxygiXsBdRXm5A9emRpdG8aiXBJgPZTLw24s9TJcqay2kQ8vu1AvR3aVSbhARzpHPJNvRqY",
  "key35": "42DRTgaq4FaCPZ3sWjLAs7XvL1YBcDHa5pVscTLuQ6PniSbBGKxiquiDcoQqrjgycDPxMXoVjwdTnHgQHwLK4xzp",
  "key36": "Fifh62egoAq3Y4PbDHHnE5PkzH8GDGBARb2iXhhL2DvZ736DBo6wdDqsKFpbuXJBpqpXszPRq3rGXjQqUjkHGZo",
  "key37": "4ciLMfRfVHxGWkxbDnvKBfxyjFP2VaZomKjWuj8gfKy6oQDfHhxo921x6CqoLNsrZdf8buinvYzKZ1MWCRzWrUU7",
  "key38": "vjQnA8WqmzrgA1aju8RTnybyGyAn1HAPZ8PcW3c2PUZtNp6pVP43qM7hoYWTHXDFYtT7WobPpk4sbLTPs7Nfv6T",
  "key39": "4kEy3oF5T2DAwnGgJu4MnprRqKRPBoKdDAcyKV8u7faFqJBV98HgGaii3ztBciuUcpS2miCqYB2eWhMA1mCjBabw"
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
