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
    "22UG3MqEzxVFNFvTTyCeQxeqPMSaisxUfGXV2c5sHrTR8X7ZdNtTV6HrVwrJ8pu7RSVPfTUed78NosmEN1Mqpx1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34sQfJMoxsbdVV8duWcv3gQoJgvNujjEkecWDECujVJDytFSR5eVq8HenD99X6kT2UG339CaZSUULMEA2cgrZFd7",
  "key1": "2R6Rn8R2ZJDBzUPdbqVdtp7je8VGgBn8LFSkSZrtrTA7PUQPLY2eN8R46vMc1gRuzNJrNvNS9gh1qEyUSDAcd1kS",
  "key2": "3BzsLu3HJEFnsYZwMQTnWM8xoC3xbbtRe1rmoBT1BPwkTrYfT9eoHtVj6ecb3jJkkbKura1fmBB3xv9zos5Pjnuw",
  "key3": "47xvcU1oYSXCe7pP1GM7erQeUwmcHuvujaxbmHbca9wTdtKBZfHHqTpVhonbdUT7otcArgj5h5N3T9VGcHQCkxuV",
  "key4": "66ExetYqTRTmEXFtFkV25rhQSdHxN5ipUKNHzZsWFVY6s3rEs15RnEV8i6be7512n5sued4hCn62bJupBjgUoysZ",
  "key5": "zPiCadAGzezjcCiZd3JLXYvoJLwvjDLQhQQQsBWh3zdxKENJVFJ1xjTE4TqrrYoQHyEof1UXKEYpUzfXBxSXCig",
  "key6": "KDbk5GNgMXzFSJKCWtNonZFyHmE4mgH2se7v1DxE2Vyt3Gg7h22YgfDRCfRMD2c6VQuEBiYw8viaoacF2SDcmiq",
  "key7": "4mqSWZNAwq77chfxDsY98TGMeBUUyq3NjkxJvo2YzVLmaqVXwJiR3vr8cSDNfBUx6nmSHivqSsxWWxS7B9kYWtru",
  "key8": "4EhmY2U3ALwEo8gJzGBQinHgt1ymDs2MRzjsDjuZGXi18QZ8ipMpDkA1NUBTwAKDG38RAzt8hH1oedpZJaSemDmC",
  "key9": "4d6yVJuSeGToqyh6p5qVHw92XLBhKCVwNBjQ8zxQJyUNK3SYcqV9h2cUfd2eSZgUnyZ6Y34Xq2JXe3A81PyGWVND",
  "key10": "u5CBSCqPo8zXiF1pKS47ne6d58HFQow5AwZyniNFVNN47V3kZdsfrxBzyd7bu4MSL8t4MXHxw5X5k7fMPZ5pvQR",
  "key11": "4uc1EB6YqRvbmQcnFJDgQnoaUyzsTWgvDpfoGoDpq2ycgDL7cUP6u1yJSDLCoyXoYY5Yz6V7dbnz1dDLfCfuNXNT",
  "key12": "5oZNzLWak1uYvbDtLd1YMzjyhtcvmxEhZ5EdYr9wTiKi8hBVouafcztRCfcX79hYTBs4XGfkC6KgQyxqhrixvkXe",
  "key13": "5wErfmk9zFDysP4x6EXbQzk5pfwgUqzmAESmAScMC8JgPLvLLHaYbjn6h7Z4Sz6n8Nf9nD2GFznUjHc5sNUiSxEv",
  "key14": "5pXUwZUHe2jJQjuNSy5WGUSSu8iz6SnveCuH4BaZb4vNMC5esR1o18ArtutFvX41x5pnfjy6JZ5MkcF6T2TdcCKL",
  "key15": "yqFwArMGw3hg4HNZSHmBP2TZaXXrqcAVyHUCmDMSa3b6XUcUQb7YM6CM8vLCKkyJb8pjntYqGLmX3PQPC64FDmx",
  "key16": "3tRJ296fqjXFAGeTEAcHH5XzJ6ftC3YWh6yXtxnjMCwjGEzDENsvNgV3dFR8tWJYVN6u99ykg9qbWppVJHz28WGV",
  "key17": "45wBpEKN8qX6U6hFjXBd6XWaGBNZibNTTFfYbQvK5VFN8B9PmqXn35stz3mQAcqEw1YtpctKnazkJiEhHaqDqrQL",
  "key18": "5h8qMeoDz1FAWfUddcEtLBCKxPkdm18BjR3PBv5uLwW2MS73Y4aCwD6RWkJEGghUkJsFULmj9voKc6kTGzUUC3Ug",
  "key19": "4mPoTrbQJ6PCioyLCsuQ8xpZEXF315cEQSuswHCtXCUc7L5T9HuZWhrvzEbKTfYkaEjtLzec3NtUwFtKYGJGcwLb",
  "key20": "61e238m19YC1TbAGGLZmrXDofbBzvJLnFRZY1hwCNUD8xuj1La2T5mPWP5RBpxeE7v1Yq6LLYSu5PWHDSwAPd19S",
  "key21": "3geUvvnyDgr1qM8ffpnFvtJ6THQixgca32PAqDFWQiH1VbyR9ASypPALJHZ9FDDPWSsga7NSqy8a656QPu9dDzRM",
  "key22": "2WSLFFwER1whTe1h1dUjQuZ8DMnmFJ93TgYJHd4TBSKFQDBUzUpx1MvUN9y56hAACbFHSWzLGY9Tz6kwSVMCvQRe",
  "key23": "5y5h28MrNz7vaT7hvjZWFtWPrwnegFNLzZqBuHuSxxGKroH4mJqhqQDUFgq9NMiSAiwn9wBUkCStahvPKTQdS2yb",
  "key24": "fKW9unV7fyz19fUxmaArjvWZFJ8fzaF8cavc4ag4Gaoc6ow7PzhFYKJLWvT6Tzpt9Lx7ZUL58S5F2dRRvLR4sWS",
  "key25": "63HACadg7snZZNL1VrEnL3Z528mC3BAcnmNtpL5GDcXwZajxzvyQEXngeMJ3PjqimnD5kkhaGdAby1yyxLN9dQJb",
  "key26": "37GgTLvWVnH1SrEmiYKfk6BMJqVg7whn1HUyLvyNMkL5HpqNMs1Gx7nHSJZnBG72k5ppDUtgJV1r6KPBFWR2aus",
  "key27": "2C5wKc82fZcTqRSRESGagavZiEN24p8v8RrKTXyaNqK9xF3e8YYhdVrJhcN1isiJk6KnANmMDESD2s3Pe5Kh8FR8",
  "key28": "5QTLohYmbqPUcLYpkNWfUTKLbTZ1Mw3norcju2AHJepfmGVMGGTLbxJLCLYjGtVbWFrkC1Mi42FErAPddYKVGqgz",
  "key29": "2Vh5bHVWqESghZDSmqhNdS68gkpNjxCgKLYfa3oS42ZSjHUJMnX1C537dQi6LqNmxZYy9afuvXPbGyynvty7FgfS",
  "key30": "2aR89WQGa36ShEytJZirXMVH2QvnZbVEaxFSGFpkU7wM1DCpcMVBHXMPLzBa5P7N6qN5fKCUEQax1EZEHgYeD54L",
  "key31": "2DkQRjKtVPm56tu65CdDFGLHyddSCcWzBSHtuCGVZLmyCk6zbzVQm1YdNsXEvPmRA32aDuMgMXyAHbk3RAVeq3x9",
  "key32": "2xenWwmHiz9R6hiRPKpRzjZCUAtEN3qbT9hYqq6NLtjMEFVxmhK6ZfX1bURVFJ9kvqsdy7C7fy9wFRc4d6FsxVwg"
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
