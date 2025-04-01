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
    "5Kiu8qE5PTzZrwH2sMdgs48CJdGaFwtgtHBak84yFN5Eu1v18hKf9bvztYJPcU5oxrEttgttjn5HQ33VD5kfrDbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ScJTVDjTzbY7ZaUjdBd8DivE9cMcarrK6Vkrc247iAoFGhcbeacEnoJCnbC9bys8AhC2nkRbcGH95TdYcGpJG8",
  "key1": "67oUdHF6vjEGzRJF1nzNZy73vhBMkxVfm5KYJBatzTA6H22CG4cUJMebAsGj38N2k85eFST5EWiT1fgkaH3BHrbv",
  "key2": "5mFjUQdhYxdwqG368byoR2jphUMc1wfbYHqcYm7LSmNtcCQYLyDvsMJ84axotRLpbqNvVZgFC1AX8GMjSMEGsNKd",
  "key3": "3BqXyoLodrFg668PkDRcTruLXCV7dU4fsRSvYSkzWWN76w89TMUcap91uRj3ouhQyewQUEhgmkmMLzNsGXb2vBdo",
  "key4": "27XwVU1Wtc4Jx9aUQ9efZi325iky2CZQVYDukiUQarRVP3d7ASaTViAw8TLCD7REPfZ8KHG7GHaiuZHLFMc8guCg",
  "key5": "2etT3FCDvuBrAr987Bky3xeeyfGEuhCQfj66rFwQ652qKguHuRhU9BogpkhRxnvXUocC5CASf5ogWVM5nomcLYPQ",
  "key6": "3kpJAyCPonjK6MmeL5vBA1YKTknPKrGpbpV1cuK7xhhE5kEe3wgzmrnxYZ44RvWf1LsB6zSWqUqEHpie1g7TAvYx",
  "key7": "5dcUebDWPwDev9yVGzCLcW4CX2hAtoffjHiocY7EGKKZq8SYqX2XcCfGuqxTBHA5FivptaBXNVXcobwXRCykpDUu",
  "key8": "4V8UgVFmV2GybtNJjH59fnZDsiNN1zjtZdPi4kAFqsPajWuCTJaKHsbbKbyZw6enx2YYhQhoLTYD1L4pUybYzaM4",
  "key9": "5iSCyuPpZjMqbLdk5hk1UwKXL1kG8n936xa2qEDGsYdTEEKgKAnASns66aqFQjTF9eCcYni3wK7aWF89fmRb1ZEt",
  "key10": "Quf32RPKYMvVJYNB7juWyL34D39rNtDdghrypgA74deBe1wXG7JTpmLW8ASrFp7wmsgsA63hTyhTZMJWfa6bEdK",
  "key11": "42vJrznpWKky16ezR9Z5qdUDTet5qmvpTnFEAzLCLfxAyDBUm8xAsDp9cJqBBp9uQ3auAT4PPoi77HaagFpRtvcf",
  "key12": "3TZ4pqvnTfPwU2EHdU6T2Fj6LZApQ6PsZ1SPRzk9scWtBgzM7CV228qNe8f5hDnXxdDgUAUziAH4adYJnbdCqtRm",
  "key13": "5hhuVWSYQNawBWYXxvncpMx88w5kLgwp3EUYAsoKNfYioxtdRkU1SmAMcNozkyV21GSUy6a8AUMgZ6gwUEk8yP1n",
  "key14": "8Cs6NabFiapqCJSs2V4g6hw1Awr5fmmWG2oUhfDnZJJuqzPXGMrgsfKtN1yxT1zp794inqMZQCrYkPWc4uHTBtq",
  "key15": "MmeWZGSQysg27BgUERWwF3HZqi29tBh2yeVqMxEXdTZHZN3b6mnCNX1uptUiucqPjaHw5Kn2H35H1vqeToqev3H",
  "key16": "22grMP8PNE7FDi4tMz3bUjwmuoSgTqZXEbaBLtqykUsFk9wcBDd2FhdkqBBve4HRHhAqdNAqamjV4Hzuqc3MuUSZ",
  "key17": "3j8naAUwb5euDQD2GNChQWKXcq1KMFTihXjYxFmvLALATVka1M8TRgzQt4a78DXx99dwJHQoCa7LU9Lh54HnTYKv",
  "key18": "44asBA9UG3k7xDMQgw5Ufd74sma8NgefcZ9yYzFaSpR48NiYpbYBoXLjVCv55VB8yjXYTsKZ8QVGKLxyDSqzd9Fc",
  "key19": "2H6seP722JymCtf4xSGDEgNXvqZQbpuiXsDfwyS5a7d9ybv9GVcMRTY1ouU87pxouLo4qR9i5iKAFvDERsjW8szT",
  "key20": "4mxxCENYTGiLkSpzB8snx4vKGkAeyuDc3yb9cbkerCWhDtQuMnrv4Wh6sBPji5P2wio8763A7iEjdhVZLGAqbF4k",
  "key21": "4ZfB1aSL3ciDdWFFERefMCUKPZvZhFyamUiW32vFuBAS8qqZA3bzFYmJZzPEfrEAKVn1wt5C5zt4MFZAru36QjSd",
  "key22": "23Y1CABNoq2fBo7UenJCh1qj52YaND3SDvz7NWVzxgYK1j3d7Gzk7Ef143NnZhfaAzTtwi2iEcXr4vL7gLAprm7M",
  "key23": "2TasoybHYrByCF66yeQLfMAqhL7WVhg7jBZVpvSfFUneRkuBD1iHr7r4e6ha6nSN1aZgsyY3TTNeyqeoXqrBzWFh",
  "key24": "4MyA4oipyBm4Mq3CNEETgXYmWpDGJjq8uEk5YdJNHMQY484p4R6DNJuVffsKekEikmvDUQXHrnVFgxrvyJrdzQ47",
  "key25": "4da14oSqZGHBKFx9M6JQQ57LSxDXgdRNWQupS54aofe2fybC83z9pfKjyJtFJ2AU95KQf2K68cJSo1Zb2YtBqi5m",
  "key26": "tUqpPnLLsuKvmL4gxfqnzF4FdSbxbRgYZsgt1KyBkrCjf79niNFbQGE9evygHx1Y69kvueWKDHW1iJ94ojDgYXo",
  "key27": "4nrH2Aa3FEtcqDWj2FoqfqbLQ2NbA52b9yVd9rQn5J1BCuzEZCLcdM6s5Tzyzsr1ggD73jdBBCF6NNcw821oga9q",
  "key28": "5paES6vfmTmmFnAwmJULzZmJRKzxGWgk72R8DfkoUd3PPXvFkzwdjEvdVmGtQ4ZPY2r3aEAFGLqkesjkJZ53PFnX",
  "key29": "2D1LsU5XkUwt15o8yJKb4AJ89PAXgKiw83NsnUuFsv69ggS4ZgW4napZauu9JYxBoFEaMbe2SWw333xTMQ9RCEWs",
  "key30": "2FXBejepdTR7faxFM6e3Rk27jQ3Wi5pJGujhrmYhFCc6cm8q9QcAVHwZrmBckKc3vZrqypUSRTKjvsibUdkNKs2D",
  "key31": "53Qk3okzHpnY9rzLheHsSpjSP78xmtJ69bS8BmjJbA8zpR3r6YynZyEMreKL7uQmN2gRgkx3yDpgLukoGRvhL9Cc",
  "key32": "8rgNJaR68nZtHZo9PGb2QGPNq21QfJbiVF3AS1Wcowo7QYLWSbViWqAy98nodn35bY5Gfv9DiXemKF5eEpqLHb5",
  "key33": "57wDF2ehMUGRLcG1fgeHeGg1tSgK85gwFwwGprufrVQWQDmrKuN8w9hnyy7Qut6t2emZaabokEb755VjnbSwxxsy",
  "key34": "5ACqTn3y8URvdtyyedNdobXV27jEKb71pA46NJ4o1JSR4ypufL49syqToZSpFiVm7v1mqpgYHDqmMNrwF6fcKLfg",
  "key35": "zqti5NHPFSs4CedhK3UPEVHhnMrqiGJotoJt62ypPxSTJ8NgcvnsMT5av6BKRVag7DYBhdXDkXzok6CJV9GYnG8",
  "key36": "3ZAViQ3wdYvhLxddDBcnW1XzTgmAWEqdrYTBdWPBoaLZwcgERHwpVDL7gr4fLyysLZttn8CBLGfAQamQiEVa8YDu",
  "key37": "56dLBCjr68b38MKcSNR6MGtCYJdENaY5QBRs5qz1RAKXoW6SPpv2b44bhpvw7J66t4mip9BBpMgDvsYwZdwzxaUr",
  "key38": "33UVrXTfkYob9duXnTBLxUbxMupFgahN5VwNNDTJgiFkmYX5wGdGAq8Yjh3K74WYLH7dsf2buNePMeMz3VmJdBuf",
  "key39": "4vPK3k9TRapqBcThe19kAWWauzh9iz1GzYA93UY7Dq1iDeJQNL77dQKNA2eCkDSofTdcT1B7h5gqffXJdPaTZp4M",
  "key40": "5ZQT46X9d23BF7HQXKznvh9BzydUqo1MeYUM1vM99sZGAdjT8K7uveEuZ49Rk3SY75wkMtTdadMBse45eqM5Z18H",
  "key41": "4u4BJ1WwpwBmrY2GSAWucKf5AfzAqMAjAtagFMfRFMJu6aDkJef4rSYvbp9nJiQs7A2boPAFJCMhavsLEC1eQskV",
  "key42": "97oe8UCKXz1nTtgChEFLGLtkC5DHiXV6wmsuajYKY2bCmJhyYjuEcA4xg2hKoTsvAbxLvNc7TT2J8AcB9R9yuA8",
  "key43": "52EKVJZSTXQu2ZhxmLC2UqmmugMfTSEFyWM7ALrCNMMWjptnjCSoYYTsrPByrxEfqwy7z6BKuYq6uKqD4RtfCMEN",
  "key44": "4zvxjEU8LSw6B13MKbbRbT7Lw96WtgkhnTbiBb7seCq5kKwqpJNqxSc3aSq4kiFrdkMv93Vpqgzp1MykQWDCwGsK"
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
