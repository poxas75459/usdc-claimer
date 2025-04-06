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
    "2xWHvFdFUVDqSyXhWeGtFkKCikojBwEUE7WEoS3ECaTs8nd2qskj4oeTHaGaKykdgNf6FwvFyzjXtkeUn7LiQeNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53yK27JsYxfA8D72gXApL9k5riSqiZrn5wDjbJYiupZ4wEjR14oXFuTGGsf6wSZVNGZUyvHdvTJuYMsAC8FyLPmE",
  "key1": "484mSvqBPPW5LVu7BhWUgfezdfEF2Jupv7LBdXgkjSr6m4mu2LLoPj3GiUmJsXTLJGvnUYSstBHgrV6p2e8ppBQL",
  "key2": "4tVe8QAZZftaSSQxjHGL4yBvDtuwGA4CP1BNm4iTh23ghxM7A69iWJ9dcYU4VMB3Gsh2e19R1P7wJdybxrWCxrYZ",
  "key3": "5WPCout6dSaaEwd6L3jSMWaPxnPhj9vsidmkpVmfPERA5XyfCANpEojpXptLgc7RFVYDib8ujiywyPrfYGP6h6vj",
  "key4": "4ofYWBt6rk3LrFKFaq7xH7xFR4nMV2TdNPCX3uQqa4oJGrWnPhZAtg48JFT7CUFasuzfZCQMMMX462DcE3meF8F",
  "key5": "4d5dsxmuvCF1cUjvAJajA7hsFMq7rRVHX88YaZ4u4ZYW5JiP8RpLyTEbTUJFhjr3bLLLPZmA5AqRXkkP2zZswfKo",
  "key6": "5pkRv2ZJnKyhexv1NwUYGxBwowrHD21cEKz1EvSqPSeziz192YzCQvKsv2DC2FpUfWjgLJ9zU2aTq9jwdNsCzZDL",
  "key7": "41DCdmbzaxNEDnjw7x5kYUC1juNgVEo36Sb6AKS4gnENUQuBKp6GLDxA4roUaatLYWinbWLfWDa6s5DJCM8Q7xj",
  "key8": "4gg41ogLYE63K2ihBdVrz8HPNArUVhzGWAK5cbiCxQ6Rsy7RvQ3v9EyPYRx94dpeNBF3yiqQG5Jpq6EUJYngikcB",
  "key9": "UzaSNVjK1zxPzzWnZM1pPLQrPpdWspxCK5pzLLJAKhHS6iVE83q7gcq19Jp5EYFHndwkx1yBDHvzbXn9o7Zf8GT",
  "key10": "5fK6zW7Z2aBVYJ8DAPCQ7ZVeNnc9Hp2beAGc6Jqr81jbkr1HBFYBt4AwveXGUz9Hv4sA59DWDJTXhid33c8eKCMj",
  "key11": "iV3SgkBZjpqJENvshrtAP18mF719amxEeku6Jwfbuv1LMvDDq2p6KSjy1hpqEjLaLUhxUDX4S5vUejmKok4vw4s",
  "key12": "5GSfURqn1UQygouMaegnFz3XoWmnrjTwRsYZd44Df3WjbUC2Cxen24q9WV6FE299MKkA2jBa8fe6sN4GNs54oxff",
  "key13": "4DZnSYjESXtHjkMVAVctkHCRdC5RfCHLrYQUpufAGKvTyXKmRmP5wp5CH4awebZtJVspojy3gRFUef6oJLGWyHyE",
  "key14": "5ZnayprdWYZjDUJSkB6P79CiRdgtHbszC8DzdJuYUHSFvXouR4vmPWYipbTvH3QCufrW4jXLx6QM4sV8LvZ86iQF",
  "key15": "4kvionT9JUYm9tGCywqfiGnb6uj6YAUG2Yd2gXhNYGoTdnKkdnEMR4rSXiDFjpmLfxWQv78NwqZszQRRN4sgf3et",
  "key16": "3pfnyrGVm3Ynw2DnpFJxTryZ3eCdRdRtB4QAA22M5zUDAcnp5A8SemwCvcKnLD3s8URx5ApimkRQ7h8FyC7oPM7D",
  "key17": "4x8nBuM4V23fzpk5ov1RDvz9ua8sGWBQKSc1vomCTDcpytzFdUkv4z8ChhNC8tjRvxKWkW7rspXLYJJxarPEsWuY",
  "key18": "51iYCFJLJYwTaGwhptoDxUaPDhBxKCYAuvowU85NBqJNXNwJWf7NhcnqaCWH6JUoNqaQAdL15u5YiNSMfmgU9zB4",
  "key19": "33bjqqRZXTTyVCNUM95KEfGtFKTmA7RaRbRDV9KuRjNoFkAP4xc7kxutknXM6H84ALUSbF6SWqWN2ffxr24qhgMj",
  "key20": "5hHJJyxbhwjF234wWZkpo37gPABsgkTEbwcpBHFXi7mQQA1vyeaaA7pvrK1ABpxiTXyvEHq42uAdfVsLKnqAPqDq",
  "key21": "KtVLJmy64W5EhmDLJVx7WcCdGGXbznmNwiYMJeKrNg85C1ZNr5Y9cMucgGkTs5Zq6sLbhHFs12Bfk1PrR8BzSPg",
  "key22": "5WFKDTaqab4Zwk8CcHEvo3PVDbo81kfPjSgUSfbTLFotTBRaiuKphuYQaH88cMmw9UdptxmgfTLBZ4ZfnjHpBAmD",
  "key23": "3n59v4ZJ8KFHAGEkxUWzAJFriLdFXZ7neG4Xyeavex5ntr3bUopUao8VgLdSwBvfyEWrv8tY5Cn33yXWfneeg7Bt",
  "key24": "3CPeuEi8cgXq8B3C1RtP2Sf7LXcHB4UPZGKQYrsqXS1vn4xC6XexVjuLcNSRTKfmqPC3wUpxcZkJqZtNRMkkbGxU",
  "key25": "41nYkbRkjH44xspBaXQE3f97zaW1oiQUz8XHSJj3UG4V4VYjiCC7HiE9LCUtqX4VmVDNZPXtjLRUoagDXJZdBtMk"
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
