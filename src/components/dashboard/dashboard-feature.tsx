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
    "4asUhzssXnZfHG81gDGy9xxiD7RQku34sMVV51Neie8eANduMGib9CdQcvJBGj5atvA3GjMEojL2RSWun7psV2r6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J5kH1vjgJgsUXDiBibTsGmT1pw3Ff3YeEadXx5VyR5ZsrdBaR3JSd7HP54Lo5d8VsvTRtbanzkJN9VE9i8MAX9B",
  "key1": "P8k2TQrNyxU64p24wRoduo2bUWAENGaK1LtFSSp6p48pJjcUhcg6SPN4A81d6njP86onATij8ZBCsqEcUJeAJPV",
  "key2": "4iTmfTP3dWNBMHc53mwMANN4E2EqJcs2WMC73Ap9kVnMDZbZSjJTHhK1PSEUoXaCimZxYkRenCngGa3goYwN4N6i",
  "key3": "3GCVGyKSMsQ6NEJpPXksesXNHbdYb698rQc6dPExXstrS2LrmSWvmM9ryGVoq1YuKdJU41oyT3HVmRD88MzcYNXJ",
  "key4": "2TBo18VdD2febkF5nhdXM8MYSzU9UW3TL9xaF6ak2mgZE9noqC2vHjbNdPGEoXGZWmfSvZfpSyG7848FZFwDGb9t",
  "key5": "JAiMwFiCp241DNoK8x47KpSd4hmBqCNvYN5e95CdCp9RPrWg8rM5HybkXXzc54nMGUsgDa4mbxu9Kuu9u4CvCoK",
  "key6": "36sGY2ih19FY6YhhegAthvh9LVPZwMD2AXQdtVnfDRJgFi4o61ZLy2FtjsZH6y9CpAED4xbP8ofuiY27ZuBHc7E3",
  "key7": "5oH2rDPtX5gqwh3hAWRByBWDpAsnZCf63YDoYwruUiDSBR8nT6XXFca3tG8aQCrUFrYdBn8DJRWzWkgAiWRQFQfe",
  "key8": "3a3mMiJcwMh9XgTPuDnRcmoVnAMSai4Ky39TzpLSm9qEvw6pQ2YiS7jAzQvDSZRj3VAfXKGNfrzajXCmUN4fEbvv",
  "key9": "4CCAxAsXKMmkWFHSWYDBXhDmhSs4mkXxJqhdovtwrW6j2RtHAj7w8nzdqvHw6o9HMNaJX9CccHWWPQJa8cLkqYTq",
  "key10": "LP3SnvMyWAaQ369hbQ8YvutwCe7NBLTXpF3xtV78hY8rbmdSRtf9eZ8Te8Se9NRbs4fgdzss37LyNN4uyb5LGbp",
  "key11": "2Ffjg5fzwJRS2hFcci4ALSVtW8DuRC4rhUoKkQP8JmqAhY7UXXyF4ZsPykNobcyCHVD93MVrqPAFUaJs7vg4n1FR",
  "key12": "54zHZm25TuQqjVehFp7e2MpgPM6sUzfeaGPcfcyq7ag47QJ2iZUdWFWAuVK38mtcVSksMuWkif7134A7PgVWQPmS",
  "key13": "3Xwb3HuqbSscAXAHfjwUgW4kDVjxrHjZQZZJfpk7xCfoMnYgYdSDr5sNCCmCMXithkU38FbvFBg2gJCBgUDd6raG",
  "key14": "cMhdnSU8Q6Sw2Bn5T3FDSVTFt3JYErigBMtoLHFVb6dWxvAZSYiZopuzcLNxzARfTzAAYEM2NyErBX1wuCUeuEQ",
  "key15": "215u6jXHfkyewJRE7PLTztNm6cC2mUuf8Zj7TPVGdo4JhGGuZFvTJrSN6ysoPRG8zG9yA1MaoVEPGUCJA3g2mTik",
  "key16": "5RWsdJZ9m6qmAcV33CzCkPGF8DHhBkUeW6fT3qYMTQ7DowpD3comAjZa2GhYumendBZjBrCfCAyKhB3QBS8CYQXE",
  "key17": "DV1zBabTmHnxVFVgtK51MiTq33t3ZNDXMpBxCcmxLvw6Kh6RRUD7kFyjAvWqreEmAFPnNz3bGkxWi8dXWMx89ui",
  "key18": "3mi7b6eXw71dHiyrVo15rfpsre6MsU6qZozJxGhgLDZmFYWRGx9kWbSZEBRENuJMjTHKosZjpdY2ToEcd6QUDc8L",
  "key19": "4fXMBMwnRVXHy3RheWfMvydnHrtsXyw2qMMBtfyYkA5jt6wPKd8MAemDpqdZn1rtHgM3yayyPiNa4TrXQM3Uu2BY",
  "key20": "4PaTgpGPN2jUPigzptpJtk4ZdaoXQHW1mzQi5udwockd78pN6DM3o1ZJ4BLXMFt977kpT6mNbpeVYW47px4VHQSP",
  "key21": "63ZF3Gq5CiMhjtBsokdUBxSPDhBzo9ZFzKqs3mtHRkgXSmEsHuvTiK3gWYjkqj1AQgdroAFYBoAgqbFSKMR6P6ES",
  "key22": "5gohJtJW8rYs4aJXeDSdZyEymrpR7D7gdKJF6rv4uBDX1i3raAWSK4z2ZWyd6rFs3dtzeQz5LXw8aNNXj3ENqLst",
  "key23": "3a9Jw1NJ8FBEND1BfdvbXyotJ3KX5oeg8KhhabSk1TqcCgKc8Gpg7ZdhQiCjAxF4Q1ZBqgNVNbmWw8gqCNTfM184",
  "key24": "3U7muRi4bp6SyTwHiaimTfGtnLZk1JQ8SHwSG3KFaTtSfJoDMra4q7MURMAddvH6prHL1Yctktb6i5HQKAixeZU4"
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
