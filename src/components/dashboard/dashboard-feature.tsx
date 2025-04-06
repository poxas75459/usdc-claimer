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
    "5hivtu9USZETFYmnwkWumGqbQNw9y8jWZRtP7NMz3bZZzF3HmQWHC3UatwmacLZuBBAyW21a9BUJMwd66zdFvfup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cQR5nBFyeYsatKj5drYAfgN1mHd3LQdWRAdB8PK9pXtpjGq71FzkfHKwfonLe9shaStihFM9qTrJo6ekjSevZjr",
  "key1": "2bkLkHx48VyZY7MSVFdGXQAmidBDTB1Jp5w4cHjjG3n23xESZZ9XKMmwMBrzb2YUxSNw65rAfJ4kcvpkTE4fHgZQ",
  "key2": "4zPbh5d4wav61J4rH6M1jkBNgE8PEbkfXNKdpDKWkLBo6KZqHCQtqiK6fCR299Rb7fMCnq3ETyJBinkG8QiKhqQE",
  "key3": "2brUMBVCDtQ6tFjnqGVfnfd7qPiDqEHDjcs69JpW5YnLyRFKNPjG1zNoA18FhWJboiZXdtupG9tkzuXF1G44yDt7",
  "key4": "3rNSADrAjoYP3RNhiKnEdMTrTCizZBGMaFagaYJJggRyf7gSUrnbZUn5rCqtWExKhWkPhUyuKwTqVsC3ScQNDdR5",
  "key5": "3kKPLLoyrBK9fG8dfSH6aY7nwpemH1pKLVgYKvVQCwwBAudEbceeQEJw3Vt8qbe8bE1CT9WCotaFgfNZSFjaoMoB",
  "key6": "5YBRUhwS3PwaRvrJGVgGVtooT5BUFaB77Newj6za2aRm5KFo6Ap4oLx7aRpfFZQp3VVXXP7t3UJTjWLDZFxPEzyK",
  "key7": "38S6Skg92K7MNcFq9Xmbma8QaAUM4xxtWbk4z5KbPw2zXMnm9F9yz36TMvS4tXG5PuuK6EqDV7HkMwwwqKm4kmCn",
  "key8": "4oChmnqXz9SwvDfx6G52yBkhabjmbJYvhgYpRpo3o3AUxdLksqMFLdQ6WHTuQQ7SUX8oG3jAZ1KnsSNYdVh828sA",
  "key9": "4RbJN7PPbvf34YLdBo5A7tEemyqFeLLxRugtCw77pRgeDURaxJB4FxFNRnV25DQHhJh6uj6Cza8huWVBNVURob6t",
  "key10": "38NAMZKfGXqYzgQ6P6jxwxz3PzNsRVdGVHZZDDBeGgC4M36JXGBkC1xL1XAJbpf2rpAhtrXUdT53mzDG1K6ppmu1",
  "key11": "5wRRaqRNWEVstVnDeEJzQupZSfARtMyWT2z6j9ZqKw88cBtRv1g7jSEoNg7GcqfUgeEfD9RMYrVntAafbBt7gRwb",
  "key12": "5kCc6aBmvQyJjnEpqAh7K8M5mQ55ifr2gdHxasGYDJNbeAQWku1bF88X9TaesEG6igg7VRdCfmmS89ZTZ8xv2Wuq",
  "key13": "aWc6uA32ZtavdFp4BJ1aTNd1RGfMzEYxN8ThhDjoDtpuysas6m9UBCaBs7N7dbFzQx5tURoo3F7xWgNTcRY8iHe",
  "key14": "3ArKXqwsJfRA6oKppPFCjyjKXBfMQ56HKi7BRB7FXX4RrcB969jSBgEQdm7uL93uhKnSwGnqTtfXbH28ge1g9hdM",
  "key15": "497xF5ZvQK1a2f4U1hKd9VGweEpK89eJQJ6z7WEqDVY1ZUHvEgq2hAxqxq1g2dfaYoWK6fYugnCYCfeawv1KuZ2J",
  "key16": "4HRcKo59RAZhXEoA3Dd6pDWqFD9BC1CMp3Uwdj8WnZCb8ahtk2MNJXGYS7rs518ajq6TTAndBEFH9hZhs6rnXwp6",
  "key17": "5yratiiCamMjRVfNTKWmseobijooHTi7h29CLAaHBuCWHAzUzETN52tZxr1bnD5UimuE3C11nM4rDNKVd7ek7uA2",
  "key18": "s2NSmK6AJBKuQVgybmJdVVcp1tasJmFwyQ7zNWrNYUHfCHy3nvtxv8HFSBaVE6yYKxv8DSSWMsqJ1EZqBSYTkdt",
  "key19": "2CR2yGgFXoa4sy4ifvhb4RKfFr4nX6eV5uWzacmBByCiswsw9U1J9iqHMmc8PDzBvNYVKjooDXgzSj2iB2gTZVip",
  "key20": "2DmSMvJ5UDutuy5VmMWVaYkn8VrckVeqNxoQxKpKPzcTT8QagKkycU9Z8q4SDeUBxAAi4VzH64EphPSJfmnWNnqE",
  "key21": "3UYudi3oxxSYKLss91oySt35iZJUbxrL9zL1jaB4KGtJiKJF9c4q3dwfCrh3WwmeojReKMtR74mgUozSC4DQfd2M",
  "key22": "2M6ENL3mrYWHx3NZQN87s8hxgfuBms9yTNV4JgmHGoh5RFH2BvG5JqxvSj8Hw4Z7zosf1GUGgudeatq1NbGSqs9J",
  "key23": "5P99GBPieQxjwj8QL9qd2pJdFNTSpGcjYH9tVQBRUMoxhLeHhifgcmCXoG4DxRnqQomAeX9Whe5RLPqR3Pksf6P4",
  "key24": "3N8oqFVT55CYSL2wAjJoxz6W9r4FbVn6asSEpiPJQSo1CNoxEN4hPGmayx8KHK5vYr1hAdRZQPSBTKakxYKxaCmZ",
  "key25": "57gBmhoZugrc6NhsRpFz7zwMTZ3TSq8HMwsa8rpVumeHmrXsVMNHuQBt7SzseTjPFPC5sHjJhVDQ3JyAZgPyAdzt",
  "key26": "4BxdqTctqWnfogeaGj9j9QH7y7xbyV4TJrr6yEECBPE9Nx7AKUK21Bn1exBH5RPDiTeScs6seyLwdPN1G3CYG3jM",
  "key27": "3aVqm5cQbsXswpaNVrEyUKVS5ziagpwvjsnryUKxdegB561efr894YuZWiHgwTa9Jk6jYyooxzqig2qdsvwTiLNR",
  "key28": "3YNFmZNs2ahN9Bq1zusbYF2kztfndWubp1dzGikpH6uRgF4s2d1sgMznk1iWwTqNBu5WGgposEqdw3sadmrR4i5R",
  "key29": "5YygwVLTKP37gK2zP2D7miSfqL1WNXYtaG6etkBTT86SQe9qgDoAqPyjDakUW7hF1CuXrJsxz59yEfJ6NJWBgjdp",
  "key30": "3efEtY4a2kcNctNvrmwyMFCU8yh59m89toNU3nanCwbXzpjFMSeC4ut5vfyaUTJ2VTPPGMhTKWGuAR5hb3Lqw2bF",
  "key31": "4co4YRJmtrcyePK53pfJgiSwGeZqtyRp1SDXaunXM5bzWEiDwVbKvLFBLVGePhvozLQr46xasVPJZfF84L4AkySX",
  "key32": "23yAjKTDQxg1ewLVeufTovkUGPtSQgRMeue3sw6VkK9sk2y8ePfeUNm6M12WtuwmX7FcVFG5sa32nzqbNRf1qpS4",
  "key33": "24zchF8rWBaiWrcy8thLR1UgCrua39CZ7K1Eef89ViuyPhPMXzoQxvHuaLqqptLTCBubySgWD6vkGSyErspSDzZf",
  "key34": "3VVxZrgMkdD1GtMYXQ8ZX7oFhmKAcyMjL3MBWuebUZVdSiB3xpZt7Qw2GThtvaCiAYAeD6kJWnd1PLY4m9BbMVcp",
  "key35": "2G9EDx4X5LS8Z3Pnr5t1EjjorY5ZkmXuxxRpPEFmd5K5phuMJKtNvNY6W8hJBYBAct4PRxmnxztwhRBvMzU815Qt",
  "key36": "5nPL1T3VVgVryw6TQJQMNLjPbuEwTPHHxdpUnuUMWADoWfDwftJPmvjLLncV1pYEVtSCGExmgkYF76nQFzKS5kMw",
  "key37": "3qHnzHnnHkDrJsvAyCbTEFeoBxQDoCoNBzh3dyuhQ7CcquTJ79v4PpLGiUKKNNWB8AQXiFrHet7CwrVue3mEAa5W",
  "key38": "5AR8XA671s2h4i5cfsCcfcAVa8ArSh7EHrNbo2tRR3fDMGvtSh9uU8UjPTZXbpSQhYkX1aBgiNYuuuvYCrPRfRCu",
  "key39": "4aFUURioJhoxPVszGZxNgd7AQJnm8HbLDb7BkUUj1S9dXkpD2E1CDDkKjePofvNnPSmJP9dyG6Bz5vpcWJovbFbU",
  "key40": "ToJViKm6bFvfmUA5Whc5QFjVipoySyqi6Kh3EPPMW16oUuiRy6ujfgaTDpjet1Z9yPiQARH1syfP45TwbE4XFmi"
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
