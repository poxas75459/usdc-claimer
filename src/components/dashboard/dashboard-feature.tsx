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
    "5pSPrMdeMqTDfEuKFMerKmhU7856Foaiy557wY4MuE3xbiW3psuc5Cc8ECNVtjiqALyRfP77w5TzwTzjQ3ufKYhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yZu4HUpzqFPhXRecXEiG54NdCFZF27aJiXuwVdpvyEkqMMRkoTWGzwYeTyQyaVr7RyVDjpDnqnTi6emACVJatEb",
  "key1": "57evzbifixMLfvTnq5i7KE5LUhUnnoJghLSbpLR1gdHSfhmSmxs8EckWp1bgJJheacu3dKgHE3DtbaSAXX3zmUS9",
  "key2": "4vJ8BajpiukhCwSxy7oF7sew3QYQYP2wNpokwRfiUrXzyCBmSdp8w6rdSpCZaC5AgpfA8Aq3W8EYURdzooY5RH2p",
  "key3": "2MjVv2CPQ94XPR6rKxXMWQfWPaB8TqpWf965UN8YNDWe1zAy22Bqu1q62phr6gDAkDijja66DsLdrv8Dn2QuUqCK",
  "key4": "2mtqagXxaabdMj5Ao6rNfTWxUp2fGY37ATj8apsudmmjVN5dsZX4BrQq53x1LU82UQKZxhHpUjS6cXf3NdopnZaF",
  "key5": "3Zf2o6ZFtkHS43gyv1KofiMbzDixu59LFykHnSLuFGqVUA4gnEfAtpPfdnYGSh8B2UYUofGxNLHzpWRa9P66iQFj",
  "key6": "3gat2TfW23khrx9bZ3iwxSq1Kt7fN5LUrNNeWCtfqvryCqbADvVixaZz6E3wejujUb6yrF1KQZg5QExt8e5mwvYr",
  "key7": "24S489uHqLpakPCRthY6rb9KRbAvnmTt9R8oUhrzdKamgqmEgNuaLxvKR4KPhkqyCdtpKpkX7dg2SkmZo53xA2yk",
  "key8": "dQ3ydWxFKxh9KvTgPGh1UuXc3HzGCu4ECdvq8dEDSRpmzLJctNmxudHYnkHLv8a7nnVAg1uL8Atr1ART1tgGmS5",
  "key9": "45NQthRTxUBtbtU1d3f4ckNf4GonxYZMXs6GgMQRH3ytddEXiRg3XLYephJZVFkz5w844Uc4EsgehCP3JYpW7U4u",
  "key10": "XXUV2Jshx8hNNKR78okAjS2gvnkUXpKZ5auyvUFrEAg6uCDBjaDptULHeTCJvhJEYDLXV4atMA2UbCZqi714keK",
  "key11": "2mgau7dLFmpBmkBZdyeR9L6vMV6wzFaYkQW7mKP589J1VogTyrftKStENmcchWbq3WU18CRWhqvEtChyzTeDfVUC",
  "key12": "DqoatcvSwSo8Fian6RADF2pacCik5ehQ4RrYsvUWEYDPKDZQc13C5eh8LtCAwaSDgYW4CSW5nFapK4V8xoyzhN7",
  "key13": "EYAFUtuM4nSfww8D3KPz8dgSHPin8X8wv4cT9VUHzmofQreJ5s9sEWtJ2bd6jSrd1yN8NGSmtK7a5Yt9CW4kdaJ",
  "key14": "xWJADuLK5d4rZQeXzWJrsQ9WU5db8YVJL9cbheduMwBzxidJNy2tA4f9B8iBHigDzJzq6wVvW2onTcSWdcJw9xc",
  "key15": "R8Z9GJvktYVsHp1iwb5eZQX7Y8vt4pEMpaRLNuBhGXT3Xq1voH95JhPFu6D6n6pYkLbRwY1urd13EaUmRWZLbrX",
  "key16": "39KrpvV6Zn6fd8dtUoToFtQHWkrG2kM8id8MVHEkRhRXN7urWckdq8VPd8SkpnYRTZVCCudQ4fvbAjy6bRNUJYgE",
  "key17": "2sbPfC5JKRU5RMrgfXkt271GG2NYxjqcoz6d7g7pUSQycJHNpusPwHTVMKYDzgg9NuyfLF1WcfpS9VH8orAysUHd",
  "key18": "26DJYkFDZXTQqeZsLd46VeupXc8KtNCrJkQYRwHLTYvAEMA4uKU4RiBMAtAUV4xcgP4XWqV1ZyPKAPxqHeXPvycz",
  "key19": "2nE3ZQTiYLvDmGWMghMKUvjPEAeAAKLn8ekR16k1u5mUKzCjqHQhwUJtbwsVjg6tLVxiaMKzMX6cxkcAk9M8MtA9",
  "key20": "5VtVreKpL7kNByLHwbFg5scQn5BiqdrLLvXq7GL7CyLXAmRLnbpFSM174UTwrU8z1BQ8PFBqCxfNxm2UiPwdpW8n",
  "key21": "2jPhTWRC6o2E9VqYA9PRDkXZdVZij7MGRiBpoYhzKAZEdgHGX6ESJFqBjDJQA8aBHZ8Ax4TZCazsQSxszGx27hNX",
  "key22": "2sZ9cs6C28CifcbQZsNhMMrrgS5dc18k1qm2hdHgHgkD4W2WEHfW6Ffxczy42RDnZP4DtupPeMiTi4euUR1vGmaZ",
  "key23": "4bLFWVqRRjnMCaUQBTuAXt2Bi3NgyCrcN7KuPHGbznbkQAD31bd21hGaHL6gmTYBqwXb6dYWnxnswaZ5wjabG1tj",
  "key24": "bXGuUT5UdUM8DYr4xfD8Dz27E9xGYWffZzRjRSBg49g36DVpRfyUuJBmcvGpKp8ZsX2amez4qDZH2Eyz2TvYid6",
  "key25": "5Bshby7oYR5eRRd4AChmwemTHjHWPfPekcGWCoiArpzkkRsi5R2X787Y7fdMThwSKbSdpUaiHWuPPTQTGEZChfu8",
  "key26": "2mdgUgkKj1Tpg6t8Gqnp5zDU8xrFQUy1CzbgYZBSTdVmNZbtmfaWSsu9awf4jGp2CCFPi67S1DvWYVENc89hpuSB",
  "key27": "5AgTywZB7TFeetC83NoViMzgRemyUyVwjQx5onBFQqUiNMjQZFEg6e9jETLfQnEY9kE9V5AKwzDcyABRoV5svWrc",
  "key28": "5MHUoSWakNPcZCpWmfmHyp1AQMRLD51Ua73HcJbwKh9YmdJEkNgRHrv3jGDzGp8iqBVrzp9FS5Up7iHkUYKpgLmR",
  "key29": "2KrdyZkJ8961km6ZskQJm2p6AsyHus3rEPAmaXgJwf1CyYd7TiPBhoXsjtMGkowkCQ5KFaBNMMbp1sa42tagb55X",
  "key30": "2vE32KTMUxDiCdewDQV5rYqHpJvG3KZiRxc3BmrY7vRCybAZyUVKLR4X5vXa1bU6Bq6CnrCriEah472sM7jBMomF",
  "key31": "ZQ7x2yYvx4FtsWc1g7iEXdp4TVi1YpVJCYeRvNRxznFfyquV7ybpFEaPGQDyHRvcUASf9kcZ5Ww9rLHnfbXv6WC",
  "key32": "3grEpwyboW4nRw7E5axiBfQBcjCDaTvRFCtZxJ6C2FbZcFxQJ9iaoPU6e21XouCAFZvyFc9nCxF3WEJf5QY88cEi",
  "key33": "5g6J8EzaQRVuZbnLcvkYuP1X1taSDxdi5chNfgLntjZ6AaKte1jibU2SGAK4aoK2YVaSBcxRFwXdx8JFA9bd5L5D",
  "key34": "3H6sK2Q24jWttNEMqjHpbA41Ea1SC26YKEyJWFJdVGMdBBk8bhsERea3h3o5WNn1TkKhkFDeiHfByt455jpEUnKq",
  "key35": "2WQWM6s3RdYVrzz7T5pWYpHdt4cb4Mo6SEUKDWZZ31n87F2AdKJTiD7SA1HksGYUGL2KHAFnxmPQugYVjZtzymnk",
  "key36": "3Y6GixWrJDTtLavWtiZ1CTYXDTBjEmgXk2CG617jdqzDbAM5gfRCgn4qiizZbVKVcuEnSDWHGGtx4WkB5JQAYhBj",
  "key37": "fJZKDdg3r6EkNbweTshsaEQJ8ZgzYbhh36GGJV3qV8BBdLd2p6gwSN13fiAVWgZsaNtBLCYp4dhpRR8KzRWcDyL",
  "key38": "5CwKG1JhBD3Ps8aGvB1249iywS9JrdvodLanBcbPsqV35jsw7g73QZ7sm2A7hmouUzqpjW4KtA92ErDDg8D2DNU2",
  "key39": "5qohAa4gZHghnEPChoADsCqnqwRr6BpKQ7g5YuEJhWESrVGurYv7piW4aQYHY76VuwcsStPvDEfa6zhhGnhvphcV"
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
