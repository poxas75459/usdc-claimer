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
    "5yMWZbXVEcqKWT8KfqVbAWKw7y2bAGRdX2yRozJfRrS9WkXm5xvs6HiWC2eamwwCvg3NLR8jmEyKh4e61BzKDqEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RJnSRyhQmbweZAReXV4xhCQmTpBQzPxU7kwM2cer6Buc5hHnjudz2Wq7vqmnZiezaoFsgs2E9ak1fs2ZZDLRHTa",
  "key1": "5qXyHsyHKyThjxsjc74TLKjzK4AB6hXZNEyqVzEE5kK7CKM4aortC3PPBX1ibL7uxatZcLCvrYVcfScEXdLuKnav",
  "key2": "3S6RhWLrFwfXSrieDdxhFtE3cVn9g2eKmWh8BfNJjDhmikf5ZraknH7Gr8NUgk93q3yvUVpmBnjQNLttQvUUhSUj",
  "key3": "5Pvj26cAQByq6yQrXbjJk3216TJsNa54k58T7vsKNDAcZAkCktE2fH1JvCeZxusRMm4ALvd1YeghDiL9vffdfy4P",
  "key4": "3aUwSAK71vYbguKfRkocczp9EFr5BFr6GgWrQYHV4n7DCjsMRHt1AZe1PDDf2Y7tangtTLzhw9bPZy1XrJsiJ4RV",
  "key5": "H9phVw61mdqdYoCHyZsgbHbUceUE1QjgBE1NViG7h334ArHLTuT7QF338MssZfC9AgQ4PQYEGtuQ1xNr3d79i1e",
  "key6": "5D5xcNtMBxydL364rroKHtVc1bsb7PhH6YmwBX5T6JgMziA4EkpZcEfLHxg5AkwZvNv618eSRguckh6vh4cmXVDa",
  "key7": "WStm7BoZN5CrmtScQCB5PZzyb7UmAj1yDaYHnuZtrbTkza3CgGfLsp42QbiX4SykAWaFW2H1Pw9QPqjGcoBJ1Up",
  "key8": "3ArsyVUZDKAbQHz95toELhKEfpGVmyAnQ38grDi4r5Tb9G8h6SsRymEovKMjvZLdUJSLosh8VhjpS97nUfHBpr8z",
  "key9": "5F6tw3T9sRhzA8r6noMinP9rasABxtrPvuJPeVqRgkCEL5UjNwp71sxNDDSibq7kiRAXryzG7H7jSNyF6rVu782j",
  "key10": "4dgUXgbaMiBZ2xFNyqeRyNGhKkviDTh3tMqwJ6ADrK8e1fRW4wnswvJrTGxw5Mb9F8b8KjND1HzSScCFhFCShKtW",
  "key11": "42rnCGh3dKRnRY6kcHm8WYtqxQgiHm2Rf91C638Nac5mH6u7evnJSXD4M26Rd35q4aZbK6poJTSBBijnwnMLih5V",
  "key12": "D9iDaTCeaiPmhUr5PqSZ5SeKeV5mdQXSZeSrNWBG2gbkAvYKg7sMqf5Mq86mWScgw1jbarSKYm4EPxH951eonpi",
  "key13": "3VjTRxy8W7BjW7WdqKTweqmSxpuFDQmwCVU3svy52yX4i2KRWZFQtp1Ny1HBT9s3XxWAhGDSViharRvNNNDxiMrc",
  "key14": "2WVsWBJaHsYboHQRFJPcbGScM4MasVwJ159DQ3MznuQXXsSrvShCqzoJW1jabPwvfKQuxf8TR2YKX6AN3Ggrcrcy",
  "key15": "HoouMXCTvNFwzGKSWfcsTBBjZzdfm7bWR8qMX7CsC9RyxdSh5fbKVMhaTBkhpMY1aeGyN6vnqFmj5QHgo4stFta",
  "key16": "3cFzLGm4hCed1qdtAMm3BXdGyLzcELxyWNoWhG1ia7vqmNsNiUYy6SLUXtzCq9G4Spfdgj4V4bk2GtxVA5pkM7Wm",
  "key17": "3oGJheuq1MLmuV7gCnm9ZLgqS4iHtLz9j87K6RvCQpwsW7kvrGt5wJWQTN7mJgqpkyHmWCgpqHJAgQqGquEhVyn7",
  "key18": "3KcizEEgy3vYj1DwxdEQxVc131kdmaXRndxfp175zL3zS4xAtGiopZyTqPR5Rh4ywu1EaDJ83CyaJzyKsQmYNccB",
  "key19": "2RwnKLbNG5evr9brXSeVMhLWxPb72s8CPwrHnvFf1czXx6kSD7XnYje7HMkwPhoFdSMWr9LDegBBrKq4hmxPpvZo",
  "key20": "6yDnzwyBUK6di1FjrnYKY8hgJGpV1zDgBVeBT1ATZYksXbp1mxdH7T4fL1WRP2YZSVXpderj7HREnAv6F3755Qh",
  "key21": "4mchAyR1ppu7rbaM6GRwcBmEgwKc1mt9sCgZK71ADfQ9GYk1HsSHBSWqGJKPsM5tZQP1ZRCcj2RhFhpsLfU9iQiV",
  "key22": "31z4FcDT6HsmCBXxJDuxPqi8TWgSHuqr8vGaZEFcXqXFrSFjSFG1qZkGDtubcPtktc2oyQCpcdaoapjjjyueSzg8",
  "key23": "2q11VhJD1cQCpgCnUNEjkaB1s3RU1wo95dLZ9eYcUZgRTwwMWuHvpCHkqCVKknbaYhEesgx5JaRB3aNyGEhGS7F9",
  "key24": "vxawhY91QwLHGCynzaw3KrbsECVRzKkiFNKKn9Cd7LbGEFH5yQdr34W2dQx7qDbYBVGV2GirBfrRApbmv5rMjph",
  "key25": "5eWoQigMhXpaFr6ySYTukinNkHkTyvDdrCMMuAMqef9x5ddNbpzgEWYMWbRWaHQDwa94kHrrKu1MeoYj1dtpq8ru",
  "key26": "u4WngcQQ47mNPBD5bHsSPccQrBSiqDbj1EgXV5t56ceJNgXYKS1VQgz1K5ySeZGD36VZqEiBwymeJ2ExZySGztJ",
  "key27": "5pwFML5XB73Et4rCG25iHmcdqmh8Hqr5RyENMFoDoKHYoX2NUzVRJjM7XqJYb8y7TdU4zQzTDgESgiSETte9tovt",
  "key28": "5dznKPzC8ZJGRPpxfxLh9UoDB1ej8NX8tSuq9LUcwbfPvDxgsGXt3n5o7C731Sdz5FKxZbiGBVk25tTs1Qv7bLd3"
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
