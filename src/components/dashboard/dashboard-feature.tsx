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
    "5UsypM9ChECnuWSdHuMEcPp524VDBudxg429GhVtGMndY6nAnkschp4EBB3h3rfvXn4j9iaH6z9tFGYcUhHeAXbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VryJimHhETEEWvuM6FpzVfawkWRre8u4ceLaDpm76QoWVCcqXi4DLq6yZPAAY5kqobAoKnCycHVe2METXCjJQtZ",
  "key1": "oTG4RC4dRkPCbQM5nriEoc2viNpuk379z3GHESvPecrXLf5GYpXrzs4SEh4ChyCg79ZiKpbxZTBiZvDbjLoaytK",
  "key2": "4EqLqmTnkRRwA2eJDhEgCUTpwWBv2Ex5yxNy4beQukNhF3yHeB82BpdFLdz3Lfaae4DFL7YB9dLTkn7J1a2rzVYU",
  "key3": "5HrGmpcodyJXrEymfqkmQMoABRQ8kas3nJYsjBWfcGGksaB2vkcZ5XckSqfnsUJE1rAUDo3yBrXad4wkyun7skix",
  "key4": "3HQAq32AzvJ5XQacDSdc1nG5jf3HB121XVa1qaWKzdEkZV9tnfR25geQNXuKRXXpbpHuCYF8zdmKTm14zf1HfMhB",
  "key5": "4jNSbENQUvdvALirJzKReewNPdujXqXDKr2DQP4kWYQKqgeepC7WGnjxP3aD5yokADkRU3u6oDUnNfaCNS8SBKSN",
  "key6": "2aBtW2vSuyVNAB7atra9ACQJWqHDm6gWG6SD3BpfxJoVRYUbiyS75HdmuW6U89LB9FuUwDbLuw3ZSk8Hn62MaXtg",
  "key7": "5wPiJ6Yqkd1piY8u23uoV5aDb2Q9xtzLkehQxfi4XfPfdSgaKjNNAL7THh4mnQBYCx9GoBXvYx9Eeq7bAVeEJL2p",
  "key8": "4rEWtKvrgv3PcHdVtqbWdZmvoSmKnB7XTkoQjK4vtpTweDVXE7tnhFeBiBNGnXPH3Q8YmH6YS38Yhk6HDHNpeFit",
  "key9": "ZvoJi9oFVk4WLxNtGnHyioRYEChDeY5M2K9npHJNPYEHxp5TooKekbV5ahWGjDfQWQz5sCvy97C5qwhzN7fn29c",
  "key10": "2Metir1LEQstZPBg1wBxoAdc1c85cvYdbUpzJo7qq3HFfVnRSMXqixKj7eoQy5sCTWNmrgM1JQ3foJkAjxUuBa1u",
  "key11": "8EWjx11yWq6ZtGyKjQrfM5VsaK1jsFKtuUuuno41nQ2UMVebusXugvKYTchoM5Kg471f4ZJ2tLru851ytfT8xyd",
  "key12": "61VD1xPFrZiYbJZYts6eUA6D29qyd7X9tCAzKct9pqS8miq6WVbozWFRuUEjo4Ps72yEMQ4hDLKsy1CnR32TmrEy",
  "key13": "3aFXPvrBjWEg28epJFUyjiqq2mrbdwUe6TqpKS4XLhZpFiiZ5xi8XtyJcPqAZiizmF6ahLeN86ca7RKG9RGvbww7",
  "key14": "4k92KswyWi46ggNMaXwc74FnMf7nMnEkdg8RAE3YwSpVnensZF8w62rGBV7pKnu1YdPtvUgjYMWv7RQQURT3SHWt",
  "key15": "4Bv8m6wXLgvsNBuS7AP1ZJwuQWXzZhj8T1CqJ5qnpb7HkPrK5nnp1ZVwroneMEtkRgKJJiUNHXJ3fw8GWnD5ZMMK",
  "key16": "4LiDc8stu4DQLnMAPvdvvpS3oSVgHREDp24pBXr5FAcm7kfQwPiwJVoPnh5JYUNHVAt4BLeZzQ3P8KdK1KLLp4j6",
  "key17": "5dB5wHnnspiP2KE236ZFMj6N62kMJgz67aqAvxmoDLa1rP7jvCpJgJycnzMcrYrT5ebp9mrFtfQJR6y4HAvwEYEo",
  "key18": "4GcsjaYFgdeP4JtNYQ6y14ppTfZ3ZV6KYfZfVuqaGsHzXN7HNfvN3BPahK8ZyYxV9fu3iv96bFFD6i2KuWUcX7Sk",
  "key19": "4TgrJBXGQTTFEXvYiEkGEeqjTpyyNVUqfHHDpCaqGRxNYv3cCq6pQBJBGQJ5kM61RuEHqJe7vcXd9QaebeuLfzQj",
  "key20": "tjF1yC2nqfobRbZuWQSFwrUUqihadXm6pgEKKPvEztDtrmScKYJcUBCfB3kGJA3zKxKHHWbXF3BazbxnzbSTuSE",
  "key21": "4qCwKrCWGmkhUpEhmtNiFyLNE4N3M5P5BRiNr7EEpBpM42nT4qc7SnWeB2UeJeuJZ85FyacBXEcChDkEfxmwQnKP",
  "key22": "2ZYhPov4oJP7posdcCjNiMcivU522xdK6EJoFTTuqEDvBmi6aCwJoksF1nemP24iN1PLpEmGyAJLtEuciRZhagcB",
  "key23": "2AkGS9mSY7EhaaCAuo6j1EHAUM4M8ngWStniFmBnf5SF2uXCqhrsZMtABc9nMvjJQKFgaxNchYjBpdpQyEd5H11c",
  "key24": "ELdXYMjThkqT626ztE4ayLFHQpvV6thPQG8VqDheQ9zYUX8WAWZgtsKzGuDpTczmnfC7z8zvArqwuhtH7j5F2Wp",
  "key25": "4SpQHbYPCNV4LcSsZpLF8ESH8b15JgFbmCdiHG96NQSYK7eQuM2954Ta9bzJQaBPXx8Fwa5FpDp2Gk2Xe7vjFXAu",
  "key26": "3v7jXK61HVJnUMHEq93gLycrHzZCdHJ55qBzLq29ZYuTg1Lz3fzmeAf3HYgB879MsEb2s1jByBtPrjsZ8Ygv9iHF",
  "key27": "45LuvY6tD8cwVcEM2SS821EkYo8hSBk2tn9V5LZv1DNg1Khhr1rHCo2HD2RV5dszhFE2vBNs452b7GNmPLdNhgot",
  "key28": "3XL9A9zBx63tMbKzkqoWQ3ECuYUU8gvKS64qPS7BTsiWSfiykWS252b9SVzpYvFXxxw6iGZyDZDaxECZpwH2D9zR",
  "key29": "5v6CHDqEdnGfZV86QFuZSL8UyQDmdtnPNMQgxKgxxfB46NZEZnpe4eZiKbvw92h6jnfB6zvnqFofFzmQTSX1rYjr"
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
