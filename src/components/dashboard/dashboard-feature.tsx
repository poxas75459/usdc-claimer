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
    "2e3FDMXB7wQQzrJfx3R5y39kFXuLfiBzpK5N7dtfo7vp99dxWXWF5R1PpaY9XRjAX2GX7E2e19asXx5QsWQRz2pc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ANikuLxnuGtCeJ2yrd3WNUrzbuYzenixvrW4HctBVmcew7Kg2iiaq4Re8cEgJ54h8cYgt5Cwso7KRVX3BQemq6a",
  "key1": "3jnuo4VafZDwhukGyvvirDyXbgfk2SRHZTfE5R4EWcKMKrGaohKMDoDujcx8CE2zafC3g3bghgksM1SfrtYRaD3e",
  "key2": "5tZLD9sLYrEkFFdGCkR5HqirvUMYN877A2mEp6fGUjhmM1uCC7VeVSWjhYzVm43GFw8hQfU7zvU9zKfKk5iYTJcp",
  "key3": "5uHxhrkxmuxbUkWZpb9hfTQYha5XQW489kAN1igkgrHmEqc9Zs3T1kzXEofNpM1w4L53o2kHmNjkD8yhMHjcTjUp",
  "key4": "nwttZZfwY9TiDqmuCfDHrddqDS8UYgB5TKACt9de3jYeAKaQTg6oj89xP4U2es4Y3P4qwYF64sLjYY8YN1qDNSU",
  "key5": "4KqqdTyBffMMLcmimXsbvEAj2mro3MFidh5FY8eospUx6VpKtbk2gtDYN74BTuMhUhTLnV7LLFvdzaoSc4EYu7QK",
  "key6": "2xVTxYy8AbbKo7GC3QE7KmbiF3eWFwqvetsXCT51MJYnVY6e4RyrCFjkSAwGcHi3DPe9nCydPML58KW3KDrGCVnf",
  "key7": "2NSpUHw6YKcpznRLmZSdgu65VvZiit7GKu86AV7pMmQYK6jgyEeK4h3fwCQPuiqKeruenSjBBKx9PheYRURR3swa",
  "key8": "4bq59vxQ62qXdv5jx54sLAdH5Ve5tA9Jw9DWkpotQwDZSeFrBsULk8tnkYhmVek1ddco7WSKTMXDmKdPXeZ7v3b4",
  "key9": "2x17GG7ecD1eSUnNBk3ES188CYRJtvDFTWGKwKLrY9twpGxEHmr9ANeBG4EpSQueLRGW2FzfkBXBDowipuNETynW",
  "key10": "5ZPwDM9hGLCKPopcmg6mjfHbsTLQMKUheMpq7ysXYNSJAWV4NtRrir7DAfLW9QSHG53KM5mFUzeiFhEPSVgAVCKZ",
  "key11": "GLSZd4QFrCsisVLo9PqZMDrHg1j9L9J3RM2FzgMGCN1FMak8VfGVuAE6PH1mKhsHTfbd2sKRBuwaDX2k3EtySVD",
  "key12": "p7JBkKGp5SGd95urqx6uTf6eo2hjKUC8rddXyKNHCaZar24stfpp6qPTYxoZaLLhRFb2W8GyN3KXDygqsT3aXQr",
  "key13": "3YYJrXdXuv1qpNHio4cMaH9PKR9BJSF6ceferVw6biUrLRVG7NKWhD3GdZy7UFfmnGoo8EHhsGe8BtW3y5Tk6nW5",
  "key14": "3PpgxeJkAMU7d9eG82ynDGbRtQSKcXcSWanYWMFrcRcBG7zaq3CoTjeBprz3PQbsQHYVHcWBs4aJ1Swfm9FFN9uB",
  "key15": "FYHJM3QGBpB8pSRBRhNHNi2Sev8ywWBUZxvK1ZvfPKkehRkgc9m8HJx1fcY6Yb1bQ8t4GHCogheVSLqiJAGEhWY",
  "key16": "5YZ6Dv3V6o8J6tN9rSZBFNXKT971UMG6A62FY4yaQx6bRoytqZGk3WJhaUTZ2SfsRSwF6cugqJcvPBPSnTY8gY4K",
  "key17": "29XJgwATHdCWfS16SyQXGVWU1aRUKnLLdbHhx9Jw3VMK4ciXf3rw1heoQDQcRG6jrLrDGFDQyJdbMtMEHF3zQqq7",
  "key18": "3GQxXLKxKGKZjwCfNfTSCLTo61EtuJFFhrmcY5WuKDrx1ksTWCvFjvDeY4aQ5zpTimpHm7YWeCYsVrgokV3rUbb1",
  "key19": "5nEGs5L9F5JZiWceAVvsg2r1uNb7J5eZEihwQCoGnBVCMZKYWhHexGcjpMxEV6NU6vHXRuoch624ghtcUFBUrCKz",
  "key20": "3z6aQHLBrRLkwmJX2WVC7tQCt1KgZQJLzfk9tftVv4x1DqvPRc6enoKUqUhgTy5drFzS1QNtfHzHXBqLV2HyJB96",
  "key21": "4tT2N2wgnmD2ER6J23gBpbcDYnca7GyHj6ApUgKcq8foxQ4TpDi3YF8N7mgVQxabAAnXbErSydESy7sRNdyWztBd",
  "key22": "5FUfFknLu6MF1Uvcddo2CWSE5dCrfujGDzLUnxwnSXCJnocUz2CGmQAGPqEFGpHPMNNKmGqHaiETwCRv7prFx4eA",
  "key23": "2rECpdHzhJcYDzfmCLBH8qenrWFUaa6f1awqudMQ4CqN1j6fbuwNjq58WVaKUsUh7ZXxWA4TNXiv7G5VXY9QhE14",
  "key24": "42qZc2x1dDnfVUXNU3UAQZFA5DAkwXrZMh7Gc5xsg7MW16khrkh3gsbfcZEu7wrZR8YCwJ29Bvqi1jyR2mskS6G",
  "key25": "wfW3T74jE5b3KQ4ZxGRtPi6eeWByWq82ffCdTVk6gua3YW98rQezKJAMaHmbWYYnX1NNMZaGVFnKxnP349aQo7C",
  "key26": "4zHV9E1xVH5ZNHpbJJsJw8gYQKc6q3hgRvRb9VhpK1AqofNWEMK6QHLikkUYYLudTJdNpC8oJEcUfxgPeQBtGj5q",
  "key27": "MZXNw9nuPTNLYQHiTM9Lkb3yaDiRBMyV2WM7y9my1DFerDBMSgC77X67AK4Yuau9fZ6kStX4amHYsYrgcG7YFSm",
  "key28": "5n63YLWkqkyuJFrrX1QySWa9vSZL95efLsrjxWH5szSbrqt7WKoZrQiYQcSwCLw9ggdD5Fb4Fkcn8nZmDN6BCx36",
  "key29": "649uPME6EbsPrVDESXJ4DZ74JMs2TXtU1Lz3bo5ZCgfZEf5dySPKsa55Fb4E1x5Rq79DC5Q1SyRYSVY5TZsPj6Gz",
  "key30": "ysRrXGEuoHkKkxDmzmu8G653UZAZqR2MpyV8b3upCeFqab7kmuJhcdzkSpZjdE3VAvvtngqtg8BUsukZnEKrY4L",
  "key31": "2eT76vfyWnQ9YEnLTjkcrs5WyMLS9Kxc7FUMhhjTeReJnrWb6naA9vSsaMgqMUg4n4HQzYrBm3c6uFvneYQA8g7f",
  "key32": "4isHBVBnuiMiyGXjDUC1s6DRo99D8QKhG5yfiymAbzbQjE1nCoJ2eCe7b8bPg4cLikk7a9e6KUXf4rm9QyP37fCS",
  "key33": "3pFBR6PjH74aewTJSS7hYVAmv36KiqW7EjSw5mNeCc3ZFcg5AhxVjXe71XQki2upHbbH9cNfwyzK8mCMudGm2LXS",
  "key34": "4f9ETpfdMzvstzwgxWfVC6QHhLqG7pXQXgqJZtMku83d3fWLRYJCk8Rr3mjALePv6FUUQxJcWYZvFhnsMP71uPg9",
  "key35": "4yYGBf3b3CMNwj3CjciYDVUFBkxoVqNLwWcAgdXEc7TXUbJv6oVNkpkdt3oCViNoVGjfSWLK4Vy4D5BpHFLyGLcm",
  "key36": "5esutdj3s9XLDU85JtBDTHdJEtXHwqn28WveztAU6uHaT1aXaLzLZS6dzvyP9VxZpDd4ofyZSKwhmqH1RBcb1iYG",
  "key37": "4jHieswAEubfsMAiATnPQZp5d5pUUXkY5trvcNofdAMC1188n2othgFy2Bq9xKLoN6GYyR2eymmcPv3Xoozj9NRp"
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
