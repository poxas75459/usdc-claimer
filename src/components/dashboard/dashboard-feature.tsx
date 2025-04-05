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
    "3oyYFYTsmUYFX7XMEjGySESxEqMWqhsY5BGgbQnPXSjHp8GMb8AeBWrLzSLvau7LKU98BM8CQtrMnRBPdgFKK49d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZeTfy79SyBH6DTUE5wf6q9paxyoJDpArp2TXVUamj9d76hA8aAvM5A23Qof4p5aKmz9ivN5SBgxLWJJQGZttFBi",
  "key1": "4pSioyCSkXhSgSmSAN9Ve4dLSAn4NNmFjAeXoJH5LpFP1fJiJq2P1JbEdyVoDNC1em1mp8rnbE2gw3GDfaE2Bc15",
  "key2": "2nuhMHZg9GPYXjorSs2mpCU79K3bB7JYp8pvEK3VS6eEhtgvvWpsm9wpVW2gUDRuKs8bswyeKoB8g38CEL639ABE",
  "key3": "3j943wZbJtMqERSq8pLqwoJ5sqozNntdYU9uCjPZk5Cgnjxi3E6mi8zEYxsxARfow4GwXfh3KUVCZJXt9tCDqcwo",
  "key4": "5xT4FtirCDCTGyFRGxKSH7NtsAhWhWLNBZRPVbXEecUJQzeYshQu9Zk9MXVDub8oKeHgH6pPSiHpJrJSZXt2pvmW",
  "key5": "3jVs1tEXd6semy5AyPAY7w4BVEdt9TNkVqhroPFNRmfoNYmQ8fzEbkUsYncsxvYAFTeeeMCYpous5s9Coi74Z42i",
  "key6": "3yRXDq2LHHyucR4ZRAwtBttVZmvVuVjB8HRNUpsGe1r8CrjJRMdEpaKBqt66nZcFtRBgD7Gq5WM9GZA7opK8JkZj",
  "key7": "4dTwPKA4kYxM5YY2uYfsFj65VSEXNsiZsDyD1XGUeoemFWcqaqEVUKReneDzJUzMKmfYQppjMnpTJHPmtgTHER6u",
  "key8": "3Q7XHpynNDzTFAXUz2NMdupEo57qLj8uwYXyCuh5w5QCjBv2CCynVdfAVXyfHAdU5pXeAzFJvN8ytidLuAqytL85",
  "key9": "2K8AETocDRaeLCXB1Np5Z54NL9Tu3nV2bh2MRYkx6ok7xn6hcbShobUvUJR13s7qhnYEmLfzxcXZdHfZRhsGfGx",
  "key10": "YpnnZBuW7oYJFNEnuptNePc5U4ATrA4veNQjw4rvpedE1WWnox247HBB1xTUu94uFcHJRYEdauvnUkCn2MBn5RG",
  "key11": "2kB5A9a2neRfkmzb8Ey1Mjkr3jfmwjwbFwxowtYfp7EBBMmobmFRfuKJkyAqm2ab7NjSdA32nB6jwYxNCWxgtW4T",
  "key12": "LAv4DvS45jW4gNEDFp8Ey2uzjpzWXFMtyC9yf3VUKmt37K7R2Tre5BSJz5PudXMoqfFADoWxmdFvNcbjV7WHRGw",
  "key13": "4zLLHB1rf8AWkqCP2hBfkLATVwJYpgprFp23j6qHfsFFeTLwDK1AigUcTTd3HMVYuN1vA7BPUZnXWYZgFUCbfevG",
  "key14": "4cb9tLZUihZ5p9kZJkKYzykBvmBxSgwLctiSQJdhAKYUyRZF4RQRCx1UyCSKoYkByNKcUW8GHTMByGgAGWRBt9nG",
  "key15": "5fii1SFzT9w2wVNXvVSvaMYuhka4VSc35TxNK3v1sGqiPj1caFWzHJAKYiPTaAomPSpNRssmJascFGUjwuVAKh7B",
  "key16": "2kSv9WM26oy3kkunVwGvSkYC5onpzjbcSvGN5dSWay1tJFcUADpeCPnan85JoE8sQYkdAPey1HMFhpr8VGKn6dxG",
  "key17": "4TwLiFTXjeL7oqPzaa9eSQCvbQQQfY7WENCLm7uSHkMQip48ktQpvjqfZgPePynqLcaJ5sJnz6FyRXstLc9fuKUQ",
  "key18": "4KswbyQZRpJR5DnYzE2i4vwHPtLAmpp7EZUjxWFy9YwMUEDYkTLazkruoy3MnXmXEthpePAZ54wAeGVv5aodmVQz",
  "key19": "5eGpBTrszzbiNtdx7JyQ4qq9Wr7YbfdELHBZDDUBDZStRwfLTt9Ln9QHQheno4zzr4AZJY7xyQdd1iGWgHfi2JgC",
  "key20": "155WBvSYyyodb1dEMMYWW8hV88Qhs4DefpsgfztvHqCCXDtWnnVZwW99iFqJXiZHskThEoWXcQwsdZDhNv6Ha5W",
  "key21": "4XexeQuHxh7rMtePBvCZFYVkAYt4sTQYsWPpvSDKwaCBskRAD9KfjHWBv94fNBnoGgApHNzggudZMXkQYcBsSRm1",
  "key22": "2C5UYx56CM2hN1Behg5BFsQovMUpRfzJXPyG6TSJXet21SfjXNmt3mVae7HN4B6nwu7a9zwzQfHXhUXp9QNoADS7",
  "key23": "3qBRxR59ibXt414AgReRhJcTiFr5aAW2uUDUvoaD2hVKvg7NUU5c7FVn4V7qE7Tu9C6pchuPWFt7wYL5Rfyhy1Ui",
  "key24": "2Qur1GQy2e1qWxCVHKRYbKsAkNW4FvvWdYpMeHVNLBZGA6RCAN9V6BAZxqpDZrmyDTM2HtpEnns8YfkDmMBPSk95",
  "key25": "5j6xNmaVFMMEUSkY7qZ4FK7zgVWfwWYZFPeDYGj3Qko5xbu8CWjE45pbi8BDDcbqMDVSdHoxLh8hUrHrt9SwtWbQ",
  "key26": "4AxNn2YWVTAfofKb8CVup38NbHFU3XEYAjU81cmzD2MovsoxWdYETxNunsxvAd5DcEjJ981YGWyJynDHYJh9j9Lp",
  "key27": "613PXUEfK35D6sJZ6eG1Fp8SkVfSfx5M69kbn98pAG1K6jUJHFM9mW141ZdHAzQcwKbKFeG2H21WpjAASKvw7QEa",
  "key28": "4U5JdLyMXjTPPTDLT1xNrM9Bxn8Xh5YCZwN9hSDWcFnAvecoMFiN7oW6gzb5tzBySAsSfHpHLgFMEXhgRryFm1gE",
  "key29": "3tsfqwt9uiLrHotJez6QJyLc76WpAUp6m9tgQSCDBuY9zYKgtWhCS7w172tQYJhK3EZiD4ggR5ibLpuBx5jEWh7z",
  "key30": "3r8kdxgAKR8b7tSGbbCfWNG43KUZHmScFDsLTNFN3Smutn5qJ5WmU8nWgKDSNUgrkzhpUhVuHeVyBdsEJvDqJ1z1",
  "key31": "5nxXxnqtu1FSiyCwehDcWnLesBt7JFqJX5tRAwX122SAFrJvCKvRgymXgCR93L2TgjHXfLas1mrfBV39pZMRq8d4",
  "key32": "5UKMbDB9hueXT77S494LRAs2nuutdgEpyj8zJyyTjuGuTh6PjS4ALbrH6RVnj87JtZPqD6VYvf7b3vVGinamWGoQ",
  "key33": "9hmxraz4QNtehEbVMzrUwUm9pNnHJuvX87QQ1u1CHn8tuesvDJtwMg7HkUmeHjW6rHwBdWSiwqDwGeyXpmn5GHU",
  "key34": "62HQ1aysfm1MPYeKfDuLxfXt6KDWWH6AH2qfht4rpkv4zPu2Nx2TYTuAP2QEvKsfRct55nQTApterL19HB4q2qUT",
  "key35": "4nhHU4nEQ94tCFVdgZd3LPWgY4CpmJpnhAumjwP1otg3ZhTSNzV7K8vLYXaiJiQXF5fnxPjCTJsYHpvc3gsMRDVi",
  "key36": "47bV9mb6dQbZnbGCWqAgD559CdCFzHXVKwWgvm5xcBujgrYEaqqPZBkZZXNfGrgKS36Qph1KqU9bj5dx356AHnJY",
  "key37": "7J8BcChGb8sZFnVGiKv7tTPbKArWeLxgPnWzUmCDQkhFJjV63dPTNxEwd1A4nyKvSq5oJ1DkT4Vs76hQoaK3ESH",
  "key38": "5VymfwxGShvrF33xjQDE7W2DwEdihEytvtr1EaJk1SgxEWaptpzrrFPXAd49vTdZZMzNYgcGM783nRtwU7k7APBu",
  "key39": "2YK6PrSYjmSSmLzaucgnb42wtjWdNyx9AcaTDJ8Va9zt3NbYfhxGfFBk6p8qmrNTt7PCujs8gKcUmcczFEgBBzhj"
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
