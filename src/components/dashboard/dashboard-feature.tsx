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
    "4XMAyA3Kr9Dok7bE3n1AEeKnE3uDHNccerz7kiwvLeSP2otzTPX6J6j8mvSojqzLuJABvyY7MsoJbJv8c2gcT3C4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vXuAndP2n45igr1HBXUbo9MW1cZ6Axg5JS2A3yJ2VGKeqr4F34YbUwNqFYV7cGKw46wngGQFTJ9LYMy2Jgysezc",
  "key1": "3ywJPn94mcs1BnCoCQKp2HVcpEmngZnXymygpyR1NMEijo6rwULvjL6NnpjpengqfFq2DyLvVbTYn8gMtxQgBPLD",
  "key2": "PXGmDnqwHHQKapTryeBeKYpJW5oanap9xsk6KLT1wsCygPa4rJNwzKcbYJzWDvzJwFut3ySzRwKCeL3zZaKW7er",
  "key3": "3MjKndGH97n5BZg7SytyTjv4u1uksWembnQwY64EcQVe8ip73bSQ3Kcbhtsm2xNorLsdi6TkmiX116VzUoqVnv5Z",
  "key4": "4Vwu7ureoNrcNaBfbKkV5M9Dwa7KtjJDU5DP82Dx16GTmhda3C3fTd5FDJTWXexX4e7ECkihrTUhHspZvbdbjB8N",
  "key5": "5pb6pJuuwjAxf6Q4QWVnF2MV3vNSSfUfLY2akJnSmNPdGC5BVqoPUpTqUun17yAsc2aFP1Mmvr1MSEkNDnetsc8",
  "key6": "2KxmemVow1HcrtjcR2EhJ7cLjMPd5YP8TmY7GtTeL8tuwFCqih5YyhgiaKximZYFogDEYdzkm7Pxf4HLvm3FWEAr",
  "key7": "3bUXvujW1DaAxeu6G1r4bn9f5TPJDUTAtBqCrK4VXaLECdBz56bEqZf5tQ2PJB91HiVeGigvLxVqs6K24q18woCS",
  "key8": "3Fq4onMXWvdzLSMMqicSuQftGNbJ5jQm7XxDurDrCAdf4ZKpGh3G2JeGAMtxGkeyxR2mJ2ANtAZechTNuAcD9PGD",
  "key9": "3H3jDbCotRABfZoNdeLHtDNmSWBRPKLWm4hDY2JT8tMEbaKGKdTvKnUdzs61hu9YU9Qjrqa8Md3hUVv5uVmxK7Kx",
  "key10": "3f2q7HSngsZzoeVvbTkBpQfWF4qjfhZ8YLD4GwxiGp8Pbnor2FAV9UzBvrvqZnEdRz1kHPZDqW5czaTD5wiA5rqC",
  "key11": "53T9mdXmegBVGadL1d2FFqgzG5tdvnGrVRpmaMihTr5hNQBPK29hEr6mAcuj88v1WRhQiSvS8A9ck437PTnFoR3A",
  "key12": "4S6HCgocwDiXPahdRo7qhA39Z5WCLVQzkTA5PmaQq9r2eNWFxSgQuBvuybZr13nRB44gfkcWGidqqhLFXrMKdErM",
  "key13": "2Mwsah6hXMbWwD52twNHhDukBFmLTEqiMxh6BzqUUsiuNNjdTsD3mPbFZsKdWZRGS8fNn3YcTTTZE4GtByShTmpv",
  "key14": "3EuocjnXMFWTW4nS2qFddqYzJNRw8nQtE7p1aP3qvXNMVn2Am1wNQ8rVzrv5untkPPfE2uvFRcNR9bUSJnEGSiPy",
  "key15": "3BbVdXUxF3AJuHKvF2za5BKMLUxQ7FNMdxKy72eqibivzPeeVcwEtCAS7NtEC8CVqDLDrpNWksGpW5taL7oEiMSh",
  "key16": "HD9k8syKq8qPbHcyGNru6VqbrFP9cM5VYpRCgo6UwnumVmh78Xw8XcZr4pGfMP8JoNVyNnegRAGkCpjYr2NVLYz",
  "key17": "2a7GKEWDwgY58LdvGST2ZvAhtxy2e8bM2NwTxNm2Kpf6oHfjFHkkfmMSPPVDTz6RHvWrpr8acNkFKhSFbAP1m7Qg",
  "key18": "38Hi6EMonnvuHMc7smNXxUesFpiVVbNeyVrRmDWkXCZZKwAkEDPYzuMJaXLvdXHRNiabawSeiMWZs3P62WwZb9xJ",
  "key19": "2zjoP9aUh4k3HDwpaSKikr9s2uiguC2EQ97j2DosWCntkVr7W9KHcRp4bsn2kAEFQ2eFisu9usWFXhfhGtG6Cafi",
  "key20": "Yxh7nB3Ru3Gd1KeLotQ8szX2NSasJcvvbhoKqe6wawLKvzBuN85PyAz6bYu9LNubPGM1a8p5MuFUXva5iVT59U8",
  "key21": "2iLwTmABnth7AB7YP8AWemfWZxhQvSXdUk6f95cqoPQdR5BRQnkdEUodUTNHq4Lxid23NyewsXhvcXumL6jMwDrq",
  "key22": "ZhiR5LuC47qnT16dJY7pzLupW9hT7JpTU5fg9b4GcgeU83BkJfUPreTFxr8Cz2eDmQ5VmGmQbR9Wrv7As8VU2xi",
  "key23": "66d6TdQMcvYCXHnxw3ayfzVap7moi4yuTYfcWJkuJSYpdbfDN731JzExUYCXrZ1J8UCk2JKvdeUqKPvmCiMLWur1",
  "key24": "5ZwAndeVRMAqCRuH67uDMPE8VYZeBZ559e6KJc4AhEhQKstkxSY2GuBEfNZWGKtmZXQGVEfNekz6AQkQS3mcxjae",
  "key25": "3rP7UpY94euae5evqKCbkqkJHiRSXy7USTqUnhm1HbckUajkWbUnPq5Y743VxagmmAz5rJJVgCLzqQJqeEj8vXsx",
  "key26": "2opEQ8UrbKBUczJnv3aBJe5QasCXgEYByMiMj1t4SERBM1VjXu3MhT6n2yGDWbv8ewR58ZKmW9sNbAfcKErt6vA3",
  "key27": "2Sx8GerJitFPT3k7bUpLXNss5N4pD9dsSguRjidLP3MgWf1Ugx9v6mwzAx7M4aYkPkc3VrgsqRYqMDKvHd4jQQ1b",
  "key28": "37hSaoR9wpJA7m33x6yMWyZTwoG2k9f6DyZUYt6WUDE4LQQXqzxnjANNnzupMFJubF3jT2vw7Dg34ujuJ7MbrvjZ"
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
