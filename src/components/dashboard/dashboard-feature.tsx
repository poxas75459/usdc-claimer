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
    "4PF5ZTu9yjV8upe8PzfgLV8iPhQCE1zKi9thCTWVnBcv1FNpQ4tkkPu7NLgyvS8rXEXH8TDxpJMzCpRWe4GXQMcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yto3LAsd3F6mxsUCr3YJmBTUpFedbLdUHJqikTGsxBwuJmKVDw3proxFVAVHgEorVxPWW3FGBUYp4GtGXsqyfap",
  "key1": "5dpgVCChALCWYj3v27gqYeZ7QcMg2WfvQjFrJ8qnvYJFZpKLn2XupKzMgs6uD3BzqL8UV38Xa9gpTNyx2tuqDy9w",
  "key2": "5T1vUptRUhKrUoRJ6kPDjNjdiw3MN1pUdvJoAaiFUkRx4kVHp1Zk6QP7siRpAtCTV7GdFqTcSdYahDJJ2zwJeqkf",
  "key3": "41YeetbJhaZGjJzL5Qw1ti52tSf3xa1zhfy79LFq6dysDsSqZRRTtnpGUb82cfey47XAGkBXaun1E2ADzCUhQ2je",
  "key4": "4qvopJzP6MSP4ESzCnuY1AzRde2WPhteFpmVeRuzNns2WSGoZrZkCW5wiNWhNrb1qav7PenqNXqh79HW1apexSrZ",
  "key5": "2trxUroD9Ah4sgvUXcmn2S81pxpKDP7APrfWW24fuU1ELNTdZNBffifFCkCb9chZqJyE8mTGoHWN3vLbrx5dufbi",
  "key6": "3rkNp4R2pq8m3YKQs8rVCqFVEjnhwCqdsZdTMmUmh5fuA7MJqYyGTd16D4taht1yAvwuGKKAN2rApMnPVndZkdyY",
  "key7": "3GmmYN6VxUsdWPgAs1YDjGnJWzzbEkdGKvYi3jU5uL7JcVWjZeaqQkAR6mqgSRVrUDsAwJbEP91u7Gpz9uxcc2cD",
  "key8": "4NPQQxjKXjtjxGMGkrDNi2dBxtQdYex5EUVCCJPWPCnSbxaUjtYLpKNYDgb6joJpbj8GupUnYrFUrLZE5Z7xoQxc",
  "key9": "63LWu7tLDtKG5fuHjAYjvoCE2NRATq54rKcg7h4EH4MDUWjyybsinVL4vHmhqGWC1cVMN1ecWMxXL7i9Ygnr7935",
  "key10": "km8fHJhH5EeGw9jrf9fL29kNyBY6ci3WuWmHxtr8YrZjd8vsCANQe1UtFSCyZQkpVt4gFDPEf6Uz8BddRZ9pRut",
  "key11": "Eu4HygxoTtepo6PbD6ijpy2tikho3mVofVRkjjjPwcXinLRms94aksrvFVUtgQPTzpHDQomSY2KfdvdnPD4Fp88",
  "key12": "BzXPj8VUshYFSoWh9NPH4rEov76Q69airiQAStFAcLKHQ4qAP5o6G2ytjLpRwPQixH2TvQGNn15ubyQWFyrBC1C",
  "key13": "RbGoh6w7QQXEZB5HS9bj4AVcZMPadvZiqWUKcc91nKyKZ6mFNcez2ENgcxcsTAykiSRzDxMfxJsptXukn7D7mCn",
  "key14": "2a45GnXyJU89Yr48eKJ7JhUKU8XMnt2kR5xuRBcTqLKJjWoo9vFDboawtLntfmbkUs9v4FNcbTZu3KGVNpRwCZ58",
  "key15": "2tY13bp6rtVk48woQRyVyufAXTzrVLzHKWM4goxqgoC6WuB5Esvw8EWtvWWnyJFQdM3RfEXT6gnUhA2THVoa3QLz",
  "key16": "3j3MhKi9MTcxz61BSBuav1ZjqZu2zkhJJbv2GtkKt1DVaJuSQyQvGG1Fx6BZ8hUQ7unQbgUJvBKC1q6fzz81Nisi",
  "key17": "47GW9DALEhUduWRTDp9FRCWW2na8j7afSe1WfuqPHi6oz3xNH6NoDQzVP1z8A7xU3dCoGEJXbkvMFcCnkx54tGii",
  "key18": "3Kt1FEzWRbRoxDRvnGMVkBGmBnvoHKiN7MB7aFnWz4vbZk77YR2JgUgbdekgnHmRE8R1X8TWmS3xJ33u5xhrJkmi",
  "key19": "25KhjHquEP1a7Dx8ZCMaxevJtTXPfQrtNSwDUAFY1e69c3CXAQJgt6Pzgsv4b8EBkTqHaRt7TfBKkGMAT1WRdzsd",
  "key20": "64iFmsXP5LSCrid1prusuT1mUvhQpKopcnkcuvHVvpuFKQimzzSbgxQs2X4mFuiZxrXu5n4dnDpQxT91KMRntdWN",
  "key21": "2gXJbnYf2Ap4gzFyJkE88ZK7MNPwCHkEAM2NBbgsGezhPXX4oTQyu2yECr6EcH9pTYoohX6c32Qx4UW3rFYJqMCb",
  "key22": "2mcjUG6eiLXX7VGHvKFLbJ61zL3kNR46zeVZX1nnAHXZiknrv1vFbS1HU493WkuBWveSFvMQW7EKfgPkjSZBfUc9",
  "key23": "4vabvtuFdV2Rjx9Fknq3rrji849s1xT71r4x2yDbRPSfPcQjNAwRp52NdFFtM5577ubRAQr5PRYnnf64RcTskvtZ",
  "key24": "YvqzyMT9t3PEUkok5pxJyYyQpqQdRGhbfoS7mUMdTyN8Axn1d3QNmX8LVTigc3kjddGos51Kmvd2UmUV6PqD64B",
  "key25": "35iTw1Y4Yka1Cct5HB7UPrLJ4KDZgngsFqmWrfuh9RLaBujPHfPkvrPuoAH8PUQLpgzGU2Nz2ZgK1Rtizzw1Gr4u",
  "key26": "5VvRMxyTYisHvTntmhV54pXpMLS1noZJDeq6ZBWiXRfyWhZcn98NJvdBBAuyf7bEBjxTLMxqkLugFiosVjP7phMA",
  "key27": "4ZHv8ogKLp2CWhUc4FtSaEc8eZrwSfpNxKtmX8ruGTVeEeF4SE5FDR1yXhL5xKj7V26VKNR3MWfPPtn9hdgVVWax",
  "key28": "3X6JZQgVqKHRD9yXP6ioSBwtZwAD2WkaB6pUZd86jYFaCnXZpVeY9V6SYUTr48tkb3KFZVPhKo7P7s5c4m4XiV7r",
  "key29": "2m6jEbTCb9e6TPzwDBmqhoqBcBLs6MvUWCDKYkLfpihjeQY58L5U9UCJfRqCe8WqcwYcxmQGAteQABasVi5WPAxy",
  "key30": "49bLbmCNftb9VeFmfA4PtPc6gcu1ccnkNPFPDmAYPSc1aQNAExVZTtBbsgYbiKAL2ocpqXsHzevv7y7EdCAi96su",
  "key31": "4XnP8jtA8v9HCNdJJoqiQHsvsiSnAkNWQestmFh21p3FcBs5PfYVdrJHs2xqnCFi6UiAWozcTJZ1HDbtVFmihtnQ",
  "key32": "5mgj2p4LNiNA6Y3zWuPHqmHLg8oJnVCDSxh4HrbRNtzpZ5ug6ddGQEjHaSPoxmHc4c7oE1pEaEP9apZGEQ31gKY2",
  "key33": "57ZhEfo2hwDNzETq8yShMbgNHpp1R8mTxj1FEDw7r98BJkRssj1MY42HawWeGbpCugfA7R81nhzGUnzYsT3P1Men",
  "key34": "3R9vnngMft3MZAaZBYfKfsLtrWh5UGyA9xwZuqDYTtHBJX5b7iJRJwGuvfe4r2nZsPeN6cgJfBC5cfyLNH7bcgQj",
  "key35": "4ExsMJaMGd3ArQ4yn59YLzzXHHgrpSJtezYA18MwHhfssdtZUcNLg8BGJ9VjvHcdnoHXfEgwgCqGHm48i3ob3oq3",
  "key36": "2UUKksHZooVQYxWRFeU7YwGGsnSbymjjau96nzo1vM5cmLQWRnm3JaCYYUUuUVSeCLihEJxfLSaBemjgkFmDhHc",
  "key37": "22Lenn9p9eHmygyeStZuPmVWTzGJPT47gNvkjNM16JGDCQTLaypuFSg93EbhRmf2qN8u7bW9DC62HqvG8ySiHYxR",
  "key38": "3GV7UYBkAY3nqtsmYmK4wEhDYjnAgMtXidBKN1BfwF8xUifxELbXKHR9o2QWf7DpxyJ3T2HpG8kmZCVDhLrKTYNR",
  "key39": "2o7FrYY1Mpbn3MZDtJ18RmPEJtZANxFj5SkYgepu4ZRUYakpPwh6dK4kWovFyp9sSD4HT4azLg8VevzyRYxJ2Gye",
  "key40": "5C6ZnwQvJp334vtZqRgS7tUbh4X7AeLnRUnqcDa1hQhWXGVCDzj45H5Y7jRUVxPond3sgx5g7GDVdESJZGBd91fR",
  "key41": "3HChTdu3XydBRKpkJ1MMpqwYdFxoiXnqtdWnCEjQLor5xrgmZ9ymSp9Faue1LpZH2Kdsy2Ri1vQ1Hw8RNFVJsT9k"
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
