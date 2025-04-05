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
    "4XfH1zwgE8KbBx3T2ZFvfGg8rCvEEgTbD9QcHgcCLjHSEVrLQWro2mDmQQU6PriMoZxkfYVyG47RiV12kRHn4KfV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CWfVKmLFWeZFGtT48tZFQ39L4C7AXkgtEP6UNipZDGcgDHMFhf44kTALFkksz78A3J6rrGodmkTh7aoKcJC3CRZ",
  "key1": "4YZFrd4CQDkR56wX97ULbVjkY3dFdsk42ezqjeScDPmrw7HEm6HDFBGMm7inTCNzRULYu1DFefD3tzBgN6VjyyzA",
  "key2": "2ZSN6D2ZfQczRwcBUimoyaLBT5YjFruj7osMyxksogdTJ3xAQd45hVPySaE5xX7RLycTCkuojet4exempTGoMeyp",
  "key3": "3FPbwgjE46Pksa6AM6oiN5uAqxKWcKsf67bLPqrwyndwiMZkefvSWHz4JDVVm6tGuTsKiyVqShubbMx6q6d8TeX8",
  "key4": "DZuWwbqm9BpxVK9QTeEsFiHydx22zsnQAPiTbsyhWfcQt61SzL74wqyM8V23KRTT439KSAEFUXS2JWTHyAqpeag",
  "key5": "5jCmszKsDCV4Es9jUXRfXQxLR1i824MMDiDEtbPKL4Qkpk65Y9SwSb2jnisY2a62QfryPZKYDSsQ9mTPFtDm3iJA",
  "key6": "uih3XKaYz2zcPmDS7g3U5yBvNA4dvm7zU6JvtuWrYWxfJvacuv45MQLiVyHH7ZER5ivNccF7xmc4m3jbCQ7P7aj",
  "key7": "3whqtuQFAB1fgEEm11VPazeQi8BseMrj3ZBeETRfZsjR14H9C43LBr5hkWr5Gh2riiDzsVcxvSZVGRNnWzFhLEYQ",
  "key8": "5SnXwHFGnP5TS38D1AKSkiMW5F6dnUx4twbLptMfst2LXBNyZKTWBPj1q2DNveC9gx5S6bFrhP6ARBdstG7LWasb",
  "key9": "5iH9v33zatBvfYK9jiLLFAAn9XRrVSfMuqKDahygCkEzNQmizoxq4JfTjUeqa7hGrzftVjJqccHiM2oxyB439dfY",
  "key10": "36GjhwgtPWs2q1MTVc14GNHMiPt9mcXyj8aRfFMRWwJJh9Q793bCAJh64Dcv6H5yew35wd1vKevW3tx4pFAkCZYu",
  "key11": "5j5fT1tAGSEEmabBs9UCm8iHSFq2CLfNTTU78ULwYCHnnyV6ibfQq4XX475Ye12uA5wHxCAoeezeUTeHz5xjoiX4",
  "key12": "iT1x5wAtcMpPnYQtkdePKKJ7NCeM2qXqbn4A8UkfeX9U6YGK8NG39KCBUDHy8FTKsEDsANeQ1pjwypxyhNkzYyo",
  "key13": "5SHiLq671crDT2Wzie56vAZmV2L1SecGwYturh9LXkyN7mCJ3DLXByV36qYBj2edP1QJnwUi8rkkVZDfrwfTyVef",
  "key14": "3Wgp8cdgxb9UYnMMtnaQYewbABTGxKLLvHKVJg84PCxs73MG6BmfRp9F1aAjhbA4LcyafDvfepEukLnrQtLPX1Af",
  "key15": "4UQ5RSJtvBPq6L6rtgdtrZgwWFuQRpsZk9vE2AciU2NwzCBsExTk7o4PosxaAFg7C1EiQios42qgQhQv8KUebrpB",
  "key16": "2na56ASxjmE6koT1HNkkEmwqjEFrBPrbU1nPHdSZ9WViiZCVa3A1K7SGoketksrhLPPtfZu2gNb97jTTY5SxDxc",
  "key17": "2VUrezPAgGQbFrpijSB3ysCKng7sWxsiZ8JUT8N5niPnAbddcim1k1Q8jfHrsDPxiPbFQpqsy5C1hGbCS4e3wV7k",
  "key18": "EFLNkCBpGkYWRzck9Z3vNv4GgPEHep4uALRoVKVPY8EG4GQX4uZz5wixWDkbRWhDMFkqKte4kBZQsUzuTUSGyVk",
  "key19": "5e7NAZopSuZrSvSSRoLDGKd1jFmeXZDeQXtRNQcR7JqkvZEPYyQWFrWbDgEeztLQ1uhwTYnqxytP39KK6vSYBZuk",
  "key20": "57DqjshWtEkZ7z7pdfMqqC8ajLbUsaTHvvk28q6HQz5hjDxdrq2wDGRcwb2kYSuHDK3BrhiGkWAweGYSdxypLoY5",
  "key21": "3vK6Y3LpgQyFFSP6teH9C9NyzzPGJpJv3PEHCuHJpXZxTsNKxZo5gAoY1PXLddLjaFNuUW1L7PMDbWDadsSW3CQ8",
  "key22": "287TDHd1DMJvhtipsE1G9RQTDwUqRPf8E4rB5KF6AAaK1UDYPbhkiN2aaVb3DRGFr7uiicnGbAiJAARTPEA3XxWf",
  "key23": "HxvP3cvkp12dG21xsVTUQKqorVSG2NF8ePrb7zB8N1TmZ7HqX55GsmcdFYWEBymmdtxErTebcMC8akR8GqghtCD",
  "key24": "4R2akdd2Vx53Lc6qRf1aR79NBCrFfJHiARZ9cNEAYytcmyon2wfSZPioY9C1dH9u5E594yWZCByPWYXspPYPWwer",
  "key25": "2NWSxcgJjmUcBZ61Kz965St29Xcnu1yszf8YXdFvGDQGUMmLaTAdqbirfpuiHcWUmByEZQyanzzcQoc7nxfZtNYh",
  "key26": "61ZU1Gty4tZVwLYQb6NYsGbAeRqZ8vNb5m9sVfn9QYFdFkrY8gNuxHvKNd3aCRKGyenDcobRdUVMXk9C8pmTVuvk",
  "key27": "KWrezDLGpgaWTLTq8rE3qjF2HBFEBJtSJGPRZhRDrZ6yX2rJ4vzFQ8TYuwg2Yh3EuHYJNW4ZYXGPQadqZiRqMd1",
  "key28": "5aekMmXWfKCUN7wrcNwE9DhWnmagvxZztXzW9Q5qrEgggLMN3LRXWdr93ut2tGfww2mDVkC8n6GgzA6cb35Dvqh4"
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
