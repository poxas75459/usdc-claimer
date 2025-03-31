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
    "51d2HTPdL2p2W8oBHtQ7r8Vb17gBhA84sUJbbvYamjEUUmZ2CUwrFXT6Qqft32Ychpr3zWJM2cBeHW7xRNVJkBuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JyLyaJEjhtLUdpKZWpLv44vsaK3t9wudgTcQxzzJVBoZ6JkMopUxr2dU94oczxmx3kJk5UxnuPuVQNcQtLKSgEs",
  "key1": "4TKYoJQNH86Egwn8M1Vr1UBDRqhK8Qb7LR45QaNSA41Sv6YZoBVHa45hG6Bf94EixFpepEGx7RBCv9KBdjLYTaLV",
  "key2": "aW2kVFDDQoEopXK3TPuu1dVLRXTncf5Cx7ZJPXHUeE9toDCW9ZgASRQw7Yh4eAVguBujCvDWkB9JzZHCaLYmUx9",
  "key3": "Uurtz27qNpkT2GH6WrXwQUJsuuVrn7b7QoQenzhZHxa7TTFPvsZWwJZGECdy4J4a9iEzHV6cNiWMdvPBx3riBTe",
  "key4": "2iwKAExftVn7fzWAVMcQWBUca22znhhdqjj77edWDXNkuYHqrQwRR2B5DYqayf6eH2GEVhz9kAi1Rr5dnedHofPk",
  "key5": "4b8YuXBXWf3bEcu7SeSndn71FbbLqTQ11WahXsHFrCEQmmpkifP9CHiPPX4mPxGQDyrG3RJwTooytZM7NbnPjtQM",
  "key6": "2bCdaLLcre5oomZ5kP3YyCrsPUXQZcWZn6EQTbR15X9xxnPYLHxsSSzZMTpQ6vmoQsrN4WoAhBoht3KQoxmdBvi",
  "key7": "BjZgVpntkaTyMUN5YR1mnGWDYQcZVnM1yVEjKm5z6rbBmR54vzu1G3UQCanE7gJWmV63PDijDS3rtY3wMsrkxug",
  "key8": "4zYKVNsQhw7XvWsaxbuDTvNV5fPMPxewm2jzCHVX8MZy7nrJbQUfq7gnob72MS6ojZbVkcw2Adr1z4TgnDcYVVHw",
  "key9": "XmpgBsvbcrsVoaHbw14UMfnDg3vfUWo9U7jnNE333EPc3e2CkqHvF2r1H6rAy31fN813mynbyx5zHQ9yVKnybSf",
  "key10": "4HgQ7pnH9miHqZ7vs9APeEWVydymZpx6Mrgtwh2S1SXktNQi2FDyV1jcmAmMz2ZQYr94rgPwvEfZxcUbs7Ba2j7F",
  "key11": "2eDpcPtRvwKB1icxjaVRADBS67KTY6pkU764tgRSaBvgnW5JB7eCcDyGDF62eZ9AkJvuqi44QLtMK5iWUSUPHexW",
  "key12": "5z2tFD9zwvgmYqYme3uSdL8XwEUpNzxfxcVAXRbUj1gSW9jA8f1115KMok2NJYca9pZFR3PqE1eNrzdhvdUAyvWv",
  "key13": "3G9Nm5dSq4W5qmZzTNdAGexoq8n1vadCvr9RfpMEywizqQzU81rSC7LkWYEgoGvyDuGNnYVxcEhXKcbE5iJsNPvR",
  "key14": "2pF51NXdQ6nxPr23Dv5eTW9j5JzbpokhN6waxX3YU5tL3xD5PG3pjNScrEQSE6vFeBm98XtccpwiqVbR67BM1ABJ",
  "key15": "CuqgwDqobzvZvugHNtTqQdopwtosxguGiYaMYBLmsEwBbxqqkGVNqYpPSN5sNT86bRX7hgYdbqg9kpTy2uv1NF1",
  "key16": "3U594JgLqjvbgDtrDufikeApC9AZpSPEPaXc8VEN5FsSx7a3LBkinZSN2ncip3R8d1qT7PMarPpvAEuTo2pxtDb3",
  "key17": "2hVW9aZo6F7fntbsKqzReK9oV1X8FVAc4weRE3iQdDcnJQHNjad1yaCiaa23B9uotQtMJrF5UyLQp47Ag54S1whs",
  "key18": "u9Zj6EPUQZSTb2psiX1nWEWeb2M2LmSg1dL3aRz4AECGq1WroWxQ3YEBDpad3JxuZBE5MHx8zUXjb4tkbsBeWc2",
  "key19": "5AjrNJjSg2vkmXSwT7SzGpNvAwRsodmBtwmx7mGC6BeRRe2zFLpvFQ5egio7wnpzeg4BZMtYtJEtCEjBCmpFFs4P",
  "key20": "2f2aU7PzQZmoVCTQ8ufrgAmHgLCC9RwSSxrjnN9wiyPLHkgKc3AK252LqyP7vyCVmia5PPUgbU6PkEhNKGkPuh6V",
  "key21": "3ETmshzwpoL2XvVasTq2Wt4Hqqk7ijsgZWP1L9Fgjd8zodceSytquYga6XNK1jWugj7TM6nkiQwwxSngM53F5LpF",
  "key22": "3fYLjWth9bAPzfUmXZccKrvnAv7bCjz3qnEcE9HBYHc5wftzqg97xrDTXRV9mWRdNYvbk9UuWG2r43ZDDgy62q1k",
  "key23": "5CTnoQeCxDgZMeaF4kze54XYj8o4YNVVv5Qboi1U6i3v8s7i8G3wM3zLk4ScJdTynAnoNqZBxTrK5aTWRRD4AZqq",
  "key24": "5jyZi3Zgx86e2dKeHxVpRuVBJ9EAXkjvvjXAvNmivR84nhn4EQcg7vXGEzwmSLtPWaJkha1nFbXMyUTKGYtMJQGu",
  "key25": "5WtEVGVmTkPJT7rnpk9auWM2RzCzf5uoYBykELD4wvL5vnwwbzE45TTGPL81KdARP9FbdWkpS18VQHLwatmStHYJ"
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
