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
    "3ZyzHNNSKjKY6SYhSbTuF6dA5XsnzEHGyg4owkd3i5rmmKzuHWbQr3eJeRB9x5NbvfoRJDRkKzoGHZUTRcsQ8mrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DUD8HinWdTeRxeEThfQWF6wZE4kmaZqJKdroXefPdieWUGTdkymBCQ9xcXhophqNa7Qs5XacmzwR16JrRygku4J",
  "key1": "eQFbG1gyBr3tqwqKBPh3xJU8gstVmi9x3YB5GNVUs2wkUM3qWwW6FiHv2UfvstSeLTZFxQmrwet2mHreZ7yJHng",
  "key2": "4ByHmXnhKkRV1noqGgfRkkmg3SdwoaPmkg6TaqsrJ5cpwHz7oYsjWDCA9pSCR8fXZx8CkZ2XSY6Z1SF4SfvMxTJV",
  "key3": "3MTkMEYeGphE92oDHTMox8THYs5HLcCtEaxexTBSQr9SkgwU7Vm1iAfLvS65gwEUCSrzBNGgCXsUapPm8dmu6WLm",
  "key4": "38ujMpKGLg5Hn8yz1CroZJFzGyiRs4FjwDrZ3GpmD28crUQS3KLnRE5rpF9Tnoy4YpDMhJUvvWub8yM7iGYTAnwB",
  "key5": "3XZPig3dAJDwswKu5s9DNcfiUCxoV7ZNU6cwZ5o6z8nep8Mg3dMiaU4qb9UmJTa5a5mDjGPGkJpTcL6upi7gcReV",
  "key6": "66zVJE9uXRKLweYMKMdY5o43JA3XXvgGUW62C5vRyJsazS8dCQVDzE8PypknnrKXkLsr4BeAbqfRY9NBdcKhuJf",
  "key7": "66UUHoU2eKk7Kcpus1mSV7wjkEiLAgkti2rBoeZT37kwt7svomQMaiM4PLrbkKrVPv2Q9Bz5W6VdTwdrXHU2fkn9",
  "key8": "5sxBifrKdzc4DrFkRozeBEjwce6SFKHRNBt7CGmAqgYDMs7WhqzCJo83VkK16GohW9M35UTVSct3Tiw65K3wRDVH",
  "key9": "4AKZmv3stuYWBw3nDmqrUNr8qDKNjVKD1BN7NtpBEjq71MBc4YvPiwQGtzQKiwoDsk9pgBxUoHJmcnfgZRbKuUQh",
  "key10": "sAa5K7GVFzGDH5GyiQ5RhxVS46sT4f6yU3P1ETqL5CgMuDYhsPdqHzVw2iq88xCUzrMkRGV8fCMQLr6J62catUR",
  "key11": "2rzHDXcgo4YJjjEmzMS6HhhzuaNkmMvZ5sPRbfQYXk71Pp1dJCgzVS7uzDWF2s6FutZHtisN2EkDsDRBFUEzQkPy",
  "key12": "2DSQkECGyzfm13sovg8izrDq5U41oY6yJWLR4KwHmEG2LScz6bE7VWkiCwemJTGR8hXsbWTocu3PQWpqzxunw7R6",
  "key13": "2pGeovTyPkfiSjep2bzTmC3cvL1uNb1CriBsN19SMpE828M6x2SqLusaqjopJ68hP2LRDmvy9wVKbT6hCEKdhfMQ",
  "key14": "5jPLNm5BSy7UsRhw7vP2U82Kbw5LjWBVrCayzkY8pNRbQ8Cqthtuqvi7c6viT9wazS31nPCjZEMzn4ESW5We6HUe",
  "key15": "5fea2jjeYdMvXHPhMXRaid3ZMRkjdVSnQR3DuRgvBZo2m7KXPtyL92e9mRJ3C6moiAQoy4UtkLhQA7XewWsHBk4E",
  "key16": "4iTC5b1k8uBmreidx44oPrMLiUkFSX9MvikYRXdC7vPHkNHZR66M8Wf6tU6Mc9QVAcFW1G3JGRvBMdc8zcYVA19K",
  "key17": "RmM2epqrAk2r83ZccoHt1Yeu7v4CwdZiVbp9YZ5TMC2o9RqTCQq52K8zhStunn5Q4th5tHvJgzLfuepxbEWucur",
  "key18": "3mcFbWp4y5kDiKDzbxccowsaFASibQW8EfmiiSoXrNeM6E5o7SCNScTRZKXdTdxVnjRxaf2zqz8RBe2bVCmG1VY",
  "key19": "4gMUU5w64d6DPC76ru4uLy21CsuwhbKq6T29eu9XuxXtmAorejs4EwN2e2TjP8RcSWtadXrC6k6HMyxnGex2SxaS",
  "key20": "32WbZnKY96oUPEm9pnbtTF2Uvz4hL1NwNtDPhH4Mrpw1opPVXpfzJKMEdNcHHQNAiUo3ZNNpSXEpT4Xpt1TTyxNV",
  "key21": "5Hwr5Tx6mtdKeSzHg3fNMSRLCN7vQkhGcmELk7u1stuDYiUEtPvARR9oWWshYYaeCemjJ4a4BsWooTRV3jNKh3XT",
  "key22": "3KodtNmUvxbzEKyhNBF5Uw9h4f1XdFVzhSB5xqpeQGasq1ogVed6W9hYUYXaE1R1PJv8i5PwtaodkoSVnxhhm73s",
  "key23": "4na6R1zYYQ5x5nuTS6G8CbM37Bf75Q7qY9oiDbnWZFTvqBTAn6r6rdTiGPvmB7uzr6qfV3HnvC6nxaq5DjmPbWQH",
  "key24": "XcJx91AJC49UiUHb6FqZ2SJhZiDpWBApogUqKiqm5S84btboHFr1XymqBuuEkGcyBpGgjCQUBKQ6MXtMN5gPfgq",
  "key25": "2GbGNpj2VmvN3b8GLGV8bnrU16mGLLjbXDfHkBCagk2b2ff6624WxQALcNyQKLgbpQdmU73Zqgj9ueSpzgQCeMYL",
  "key26": "3XpFrpPmjUusxXXVbPhNC7ey6RTGRpdmkbcHsUtYTQ1FP4fFtRfeNEmLRwxxkgCPjc8kJpMUnT2s6uKtrBb5YHsv"
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
