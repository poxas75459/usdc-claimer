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
    "4YQ39gadWr5jmd4W19NSgW554L26sXnaoPd1fUW7UCan2Buj97qx8zaj1USQfshAVmgRf3onHBZG6U2ouDfL2rjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yg14TcPMgDuHQ7fC9V4bprNv89QevMd1aBTSjZAb1JgPJXNik1yD9dmoGgaDfZAyWCxuBtWiCwqspcvApL31n5M",
  "key1": "4W44MEe4aVEDSYa8GEnQCCxFNZP86myjUtp1nsAxSYJdGQNmCT8nGXZP7M1eQWxSLMabJgvkci8Eq8iwAzvmGVQW",
  "key2": "5XMqxKeTpBTqkZgEPHrMWDZJnhuM2YR86JXce2ZWMD7tXQKgyia8No4LmqrwhdShdUh3e9gpkBf1CyVxn6NgzEFL",
  "key3": "66W9SkBdW5YaU8xYzqLXW4tFJgnVXTh5hSog96P2v6XvzjgureSjAg4YvDA5vDQUyFtwzWe62q488DTuP3PPJCbZ",
  "key4": "54CL1NQnY9v5bm4FpBJSoJUJevDzJ4prgDoGJCdSQX4ToqCMT1Pc8si5j3xDiVdKuisveSMjnVP1wcqdonoFA9SB",
  "key5": "2JCiVpUyvN2SAxqUCW6JcfmwyWDjh1nipNJ2xZVTQFDmgGqqQGHHyFmkFwH9tLJQqc8Do4kd5FomqtqxpBKHhu46",
  "key6": "oU8ntzcNR9wXTrHwgtSVRfKx4uChFEmQ9RSGcDCLbYZAq9oczoY7ghKjtsaJzqHXdg7HoQ9tdEUQpbjCGjBrSAb",
  "key7": "3zcT6uZAy8hcguofoWNi1tDg816KYGR4CyGksXHxhM41HCmFLoJv9pXMmdAysPbBihaMytwFprqxwgbQBEgdSVUb",
  "key8": "5YWG14S49JwhjTLKFxFNGpzMiLPkvA8NbwqDpxsvxq1wpufeFTHZYaZFrPaLcTuexTeC51TRXMCMW7uemCo7hF29",
  "key9": "4Y7qbF3KX8JpheLNmH9nKbt1sumCv5dKUyi2xe1KWoVn4iXJhbqQrubqwEVLcwE8Kk15ehumrSEPXq2kKrWGth2M",
  "key10": "3s5bLrGWCEdGgjo6MAso3FUKsRasoLYpG84dgAixJhdx9fXaTaP57rMvtbv3UQiDGG46MsC4etA44j78ficBcpXc",
  "key11": "3YxgDcLTKvaDgqGPPZSXbNupxXRGz5e3wfcMDE5UL9cwD15SrB3BHjWstHz4EPAHuYHyZ5fqmLrQSMPxdUzEmwgR",
  "key12": "572ZkYHFF3RuSg3A81QaCHyhFv1RXk7uQ5FRVFLPfHixaLuCrc4Hf9jigxqjSHNCusU5AFf9TrCx7RKV9ZyWeHe6",
  "key13": "3NJoFmswmHdrPXJYiiPUDRy95oDXWbXrQBbPyLuynPMTT3wNm2HknSof8c2FaoJhD8wHR77X6ncpK4EPnScNxKAi",
  "key14": "3MnZYdnFg2e6N7C538h2GvEPyEgdd8caUsu2ebLDPpPz2e6ANJrTGQBR4zk8tytsCQafKtEkd5vB63VETHyMtZs1",
  "key15": "3aiiVc5DZCU9Ao1iqBbTgBMQ2ju8inxzihHmBja9Aor34qoGqRKCHmcqVeQWE5F4kRfXi91XZiLe3GbEfUu8vdqW",
  "key16": "bhZMyxh4UockMjHCMC4BhkvdS72EgKpKVa4Z2hx9P1AEpAK89WgFXB8gZKZqfRLsVQSDH61fnjYEuMLAuFiyZb2",
  "key17": "37RLyUVCxPBiJLuuo2LFsWLoGaUY69enAzzjWKoTA7rfDpgc8b3aq3wou5NwjEhHswy4VjBMu5SDAHTwis6YpXHv",
  "key18": "j5dY8hBBExBmVkyvFgoqa6gqfr4akatYgrYT79EVvrkLabWFSDv48RCVXone5VAMXgHAoem2hzCR9WfTD8LmdQZ",
  "key19": "3BxetiNQaG6K22T8Mph78f8w3tCiMm7kD7JKxZMMWALxDpnVNqXNc252hp6VnNbNDFxckPrPJexVVNnsew9W2L1t",
  "key20": "VeX58TvSE2epkfkfibsjbjqUM71FaXgZ2HfB7aDX7nUDozQbLQ1z2Vb7zocHGBPhWYGLXEmyN5ouiHd5GLcQELD",
  "key21": "3rvBwpjP4XwwcQWyU8LpVADspVZSJhshLWdPLsJ9PVXAaUgripG9ACJPk5kTdAC3Zu1XjceiVFE1uYj1HqvZgeKA",
  "key22": "5HKnT54MgfaViwcjFg4FqgbtDLiqTdVmY8BQpvDyJZi3NK3BiSKA9RkrFiYFMFs7LCuNYTyL2jv5LD9UaPWWAAsj",
  "key23": "46gtpSRXe8rMgP8Zf2zme5BFK897PtEqYX9WoCzPdM2GZ4cvnD35RRPHEfmPdR5Tex76aVtnNdZyGQAYXq1P2ZZK",
  "key24": "2L2tQu2zWgxfbcrFPiDbrkWxCXhJ8G7bYnvE4BM5hhqhG88a5tZy5jcd98F8FJpNGMbCtQsYFkKPYHKoXEhX5GQU",
  "key25": "4AZEaY5xNnW2YjCGYYJD3nHNVs2fMdTYCYNogjtjiXeqJYjkTvUE3uGcaYeXsdrEnwiogZ4C5g6ZGJsz8Ud8BFQM",
  "key26": "4e5xDwMVHFi6YKcjjoYVxEEAnT6ffY4ht4iPE3dkAC8q7HjzR8Std5ucVsmLYPLaz4NkjVKXMXPsypkWCUf5oUTc",
  "key27": "2zo93uh2G4ugpCTfht6wXKZW3ev435yTuB5ERoo2dG3Si3BkDqMbKtpEJ9A8Cv53wc7HyXgR34aekhwb29U3TTLw"
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
