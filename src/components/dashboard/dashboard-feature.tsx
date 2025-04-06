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
    "4iiX4SyghsiyhTQq7tpv51rq7RGyzEvi2RF5AQ9uLDGke8WbaP5HYkwo1adfniPK8oZEAwF99h5Ma7V3VYCLFkgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KYefsejTjVSVMTLxCreu5GaA4buNkAm4hqCeHTouhCuCR6YTg1PAvSYDWftgfcRpL4uRpp6vq1TLwxA7bUXuCuD",
  "key1": "5EC67r5y9m4qaMw2NX5tjUprUyBUFQHAntDte8dKjSKeEbEb1ayoKjQt842cMqgoSpWE8ywV493GEygj9YURRbs7",
  "key2": "5tCkTc2zaF4LTzqyoUQajNxap9vjwjwEd4fzZv942c2TR4VedVH4LHh4jnfHGexwkiVbNMKn7Tqt5cVcAqg1nArs",
  "key3": "2iCKNjSCFEGf1JfaAg4ax3whKitm694hHA1uGE5KkSmFkDsmMtFZHU1V1mAt7YqDXGuEL7QJhixSVnFR6xVDKULV",
  "key4": "5gEMSfrjZv2PdWzybYzW5Ym14wrQR2uy9WUxELJaMUgWnHNKe6KPA7Msqk56G9cx5xatQfqHUpHCUaCaTCgD3xs6",
  "key5": "47YpdRcBQMHVAd8XWv2fYVxUXDBM1zXVB4cxN6rLu2ywzbdxkkfKW2KNi12BGxgCAvLoXXFDe3mwyhZrbtjniwc8",
  "key6": "mZCv9wxQFK8XugqrwrbzeJr2fk49C71FREa1P2S7XbJRXvLCaNMq8EzQnyWnToLaC2aYqMWQDgJLkum67gqvqkp",
  "key7": "5yTkndBqohKGXvBvD88zo8q3eDx2QbUQgrHKH4Rns9faPNPTHGgRTmA6g9atFzRtSkx4Z4NrCsaSqodfP8crZhWo",
  "key8": "2TiiseVJxhUtrLGZQGefoBkvLr8UkPu6GPTuhpx5iT56KqiNKQg4DCDU4vCGB8JPn5PamAq7ANqAxgL3K7ZBjBup",
  "key9": "63mLecKqKxZ57r2F1WvYLYMLv89y7pvzT5TTt6mWgYezzdniLse1YTXVbPyRct9gYqum8JXL3PThvh6vM5h1TZ6Y",
  "key10": "4HdHxpyiHTJjfnRGezAu1kMFSc2Dk3yCU1b7fjf56aVZ9VhfVkXNQH6NkWvxaZhNwup8yK5CYs6cM92dTocemgSa",
  "key11": "3gPCreZ5BPh4WZ4yMDmXbUTwjjknSUZAb43yKqAVmAZ7adUq2kZzqEnrnFSmYfgxY3TMSuTKFU9k4gE766m1F4Cb",
  "key12": "35yNvLzggRtVgoNcQwfYyfCerppHLCyje3rd4Bjo6Vg8ZCKLCs4pyPEiLdpue3NLtLdnaYgawR9o6vjRFauk4eWq",
  "key13": "4PMYYatUesV1ftydyRrQwz412yfPfyCkrKyBAG4Jqyj4QWhqFzQrNSU9YzXjbHAZxTy74sucQUn1KVXpkM7u8cW1",
  "key14": "25rkbAaxGEEyCxRgGcBMH3zGMUuZo9zW4yr2ijMogv3conVGxEb5qgwi8wTfKrLMgxqPvJMDee23TbzV6XLiUDGA",
  "key15": "3A9bhbb2Kds2kYPzucqLe1fAqKDJDRAYSdqcM61heXQBxH7LvSnAFfjh1z7xVo1Le4LcMfe1rbrpRH9nqP1B1FwE",
  "key16": "42AUXqdCZUQLfCEW9q5wpEw2zYANiQXN2ZWoQngvGcADyJLBcqSEiVeu6277yYBxRcM6mKmGdLUqHM7ir362wz7v",
  "key17": "4BhaMnFMFSHYbp2HUnmmMmFVqaTiX4HZ7LVzviTHjM666CukEMhbpWBZSkppcckzBremJi87rrugHJkHnwz7wRYE",
  "key18": "eHVaXQ6nBWFoAZH5ZY7AUJriVoti7su9MUwgFJCoN7R6L8pKCKUMUXjMJEitrwnLR4kXC7AKUF5yUub4whETGVw",
  "key19": "4EJdA1ZUkJ6vdjpvcgDA6BjC5nbqfsa4RpaicPMbAzYwzMjfmbf3UWuzfENQCjizKeY2ZrDZrTxWymVS8WSHmerV",
  "key20": "5dqWfAuBoVFVKSCsTn2PpULjTrgBrJvwbDR4DgjCNXDXvbzKbDm5og1xdJoZM4336kVDYARcHhvV3jsdz9CPGZ96",
  "key21": "5VPaxxeZCXZm38cZoFhR2nzxoPqhcdqNf8r2LK1FnBQyesWvAp7Zce32vHW2jHgDKKU68ggsmZMf2HeDpyRJc17M",
  "key22": "34p3WBE2S28nXnb9qQSGqe3vhtZfNhxuVUmixxMrqXijtKY4YtDCBNZqBQGFMmp2fDkTNquJrLnYTqBs8Z7bgET8",
  "key23": "2f8ibYseskjeQybHvDehrhp78syBf6Ub9nYsH3ytpiiP1veC1qXzRYhhMpbdH2WW8PsAGxiCaUQQaVGLxUgKLPkY",
  "key24": "5nnXYX4p9qMWWKY8vEuiu1QacHhGGnyMfU9QCgZbUr9mzFVJs6Lu22h8A8rpHRvTrgrre1C2pntCRQWuguQhTnDp",
  "key25": "34U2E1AT2S5w3AGqRbkASy1Jqq8stdE8QggqBjMPMfmv3GEJQ5g7tHrBpu6KtAswDhuf27442BDth1pMjEHy6wvP",
  "key26": "P7yK2ZQthtPU5BBsMVseMDfEwpX572LAMtx5XpTBgKCqQgbrBCZRJwFCcr479boVGmWFkjZLGeJ8ifyxLSc8PFb"
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
