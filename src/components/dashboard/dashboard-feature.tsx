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
    "AVDwWc3EXi6WETcNGWKpWtj8rW31bHpkZdm7rjR34yQo1QdYAyWFFtJJpWugM2i3tdZTPh3cLQ2ovEVRq9yDfju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RZiBShkpgBJGFv5S8jg1HtDtiWFHsejucCroFvUY63Pwia2gbEpajRrBnqyXX3agJPJdb1q7N46rBkX3pXEsdAd",
  "key1": "4nR3i4EpwTwMpF4JUKg8uGkGehFtMq9bNU2pbCvsrF6vo5wjLxYYxNCWh6ZjV5DZvqd3M1vymdXTzM3NonAe2TUT",
  "key2": "319dss9EFvnYsasn8rK3A1n4nxB8XZMjQtepZAgSvLegeKyJNKjFqPjk3nBaW2jVxGBnanuSq2URaKHY8ZNtKdrp",
  "key3": "22DKqPPSxEptHRVNsGsG1DpT1P2LMGW5R7enZ4nsUCW9BeKxNxqwWQWKy8g4Dq9Me135RvbXsgGvY2Gsxajf4zAk",
  "key4": "HvomAxMZ94T9ejqyY3ACpadcpHcFRRcsutzs7kBu8w87U9o4YfDXm94x63dHiX1DjJCCDeK9jaYuYxzcGsD2NiW",
  "key5": "Tw4UiGXMriD2eiKvPtbddkSarun4JMZ9jDc9DEqzi3JMWtvYWx1YxEg7Sqv4YWUckMo7H47bu5JXMJRgMTBFUsN",
  "key6": "4dPFPt26EDA9H2TimF7FnVXTqnh5sCxZw62k3GAzirJrNgpTKhqCwFr7XjShQgpFZ39wXDygmy8EJxAkW1iBXu5S",
  "key7": "3oEvtJ8JTdYMFDa9WkDkas3dH3SZVaAiwsEr4zwhfMe7itjneK5WZRxqNcQ5xs5mwJp2bZEfYWWGjMUby2PjuNEN",
  "key8": "5SuBk7p4x6mzHpvpqCmb8idqNiDZhgE4QcG8H2XWjDoobzMH3Q4nhMwZgYZr9dwAD1PuH9QmwxQFZ7Qvwb2W7Yvf",
  "key9": "SptQGFhdFQaT2FHbLma9cepDYW4MyrTEDGVEQBt9ky7yqGJ4889444jmZV6aNHQspxnmLhK37czyRVMUz3VbMtg",
  "key10": "2Q1wDQymgYVycBRZe4jXLu4vaZ7cm9j4khUPqDHN84Yq4NhiB23H2TV6FeVssF3xWYkW7SzA6rRuC7A3nRWwmZu2",
  "key11": "2pmxMmZzXCtPqd6HQwPqkNx2MJFdHgM1TXTRajEFgQ8wenGLutWF3kmzbfmZANCiAmYQc7aBWtme9nC7Uw5SYBk8",
  "key12": "24HgZ4GXaMpmfRsCavBLs475NQAzzx4jLmZjqAmF9cGogVwEC6jWHtFGY8kVTRX31rW2v11z7UpSJofYLXMvsbLX",
  "key13": "5QHH22yXGb73qbu5JXG3Hwri7Ktb48saW1tJLFHfFKrWe9EvftDRVMvX3Jn8tB33h3amvrMY7BSMJ9TAYiYegvDz",
  "key14": "d8ps6vyz75YSJy9FmNyzF2x1inqTQb1z4TNb3CqT26qbFnczxSGkp4jPVgAYR6Jut3rGYgKZ7gKzwfszikA92oq",
  "key15": "4tEqc4ri5XSpfncafuw9Qg64ZeYZqz42qhhhob3su5iQsjsnK7EVqLi3LFMEgUV1T4CkxqLU767PBeptp2NLWK5n",
  "key16": "38CLeQZo9Z2ApPNuGaSFXYWEC3xxWejQwFKEEqzQC5Ka3KkmRxQkqY8CpXiqrGTvEeoB54aQvsLxEjtdanLRzN2y",
  "key17": "3gdB4Bpvk9W8pqkx6hkQ5h7j2qdmSyXBNtsHETWg3WM3WyFxF26od8iJjYzZUhitQtP7oeBaSGfUJQRWpgknargg",
  "key18": "51q7YXDbrgkpdeTN4q2xQ6nko4ofYtPUv58NRBnyzGJebh8DshE9fpUhHD1BuzEpM9fEzka98xTmY53EYLxxxVh5",
  "key19": "4Gs2fcaAqBhsqVCS1ZimH5wWGQyyxphXkgeufLqBq1DjG5baCTxxa9JHP8do44Z3r3oCAUTTZZjnEjiUBsbd8PtT",
  "key20": "ajbw7Ax9ojbbmPLFLMQA8vGGFy61PZ3fdTr2pqi2MgTPw5T2MWfTNG7NcRqSDLL2rnZU7TSMCKXSJpdbgJehKtr",
  "key21": "At8BfU7tPPAAibUvihDaNmKJ9DxRBJ5k6vrftpX6DNZYy5gVLaCBMRxjFMzRAPRG4GLDc9eBTsEfFP88TvhkN8s",
  "key22": "42z93bMWbvys9WpqCsy3P7GXoDYJJ29toKksLiiJi9Jc1DWQjPGVaKcRZshL5zQCv61H3po9QFnSaxi9hYoNP7rz",
  "key23": "5E4aW4szpxWg8sgCjgcEBPxaswduWMJwve33grWuvKgJbf3umFGJmt36mCkntDqvyhP1h8sMwu67pwcSJZqHvnQh",
  "key24": "SSDtEuXnzF7VhSsZYpe6He5BsgnSq7E34dgVcXiqP9VQdnqBp6iFUas4QxakcxEcNCs8KSYsG3Ekmuob9vNPqGu",
  "key25": "3fMUQATxQ2xEUApNkNBu2cBXLhZWWeokoynSsWyobJNK6tSiZx7Sh9GURwAtNu5WZpxuejJgLVwqHZYUaG54Fs4u",
  "key26": "2PVuaXPcKP9rd1jd29iNswwqnyp3UYKHm6KTkD5gCo845FZUHZkLLfwEk3tEJ46exgcu9G7ZRf2dopAqd8KsotF",
  "key27": "65fYLnQ7osWRjQLsMBG1yGimXGn4YLESA1wsmt89rM4GwzxsWy1fuq1cBpVPrgb5srrDJzfZLxbkwobAPJSqG2sK"
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
