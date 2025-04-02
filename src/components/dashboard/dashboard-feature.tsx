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
    "4w6pNw8c8azaMnNZyDKXDdkm8xDWirfXLhSHqr5g8J3dg9hYozfkSf8p3mgwtj1FmssyZrABdr9oKgWGnqxEJabM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24NrXYihTWZwtNbufc7Kii312u1ByCQ2WJep64EGDP3ge5TuMihYTSApjbUmih9BSweYKnKHrXdDEQpVtzmg9aDF",
  "key1": "gaM6g8Evvy3i4BCrGeQ6UVrAxEdCzpsMrTQNRwU4M87N4o1Nt59tr4fvUZ9217qsFwS7NHAs2Rv1bQeghTjiGTN",
  "key2": "4zk5bxYHeGh8KWCVu7WeL9jXFPcLTnjwXtUfNzRSuzvb371LGGnxnNqWnZGBgLfZ6fhsmwWYbHfLby8b7GvExDXZ",
  "key3": "5o4VVFi2ujMAYJNHYTKMHwN97oSQAXdnTL9ih3ksp6PL6byPpFu5XWuDXqoc39NJwhWYGht5FFNEdjdpX5H2aMZL",
  "key4": "2u4JPU1wba8PEZFb3KhQqPqU5V7H3Vs823Wr79hcRYk1fJtKYudiYwMoU7ADiMVXUht1Tadzqun6w6st5SnYbSST",
  "key5": "3X39B2bjUz3CAsvzFkcNumdPJFtGKwe2M6UrQefVdVWu4i9A7HNdw8bdqSooSB2v7E786WcxWttXanv3wBJQ6HQ9",
  "key6": "zT9ttoA8oPziAeUpNNiKFzEgzvcEYJsBtfjesMDNbsMp2yNeuzahCTPjZ1qu8JpXxtFQPrFXQP9L1WxWfnvy582",
  "key7": "2esozkwFQDGYZk3VGNVrUNacSNFBVymWctE53JqVYBFigtewagjuK8ph4PWa3gGxQCp2LjxtWXc5bwu3qh1D8qid",
  "key8": "5QiTDaR3xjj9WV3cXgixEK3FzmgT79QPT6uS5ZTWpaRwFRqPLdWWyDeEriTjz11WiUv4vhv4t6zsoD6WuuhNtRaF",
  "key9": "2E6jhKdrD7Uk7Bk4g2qCGLqphQEqaakj8SxV53t8V4KrdpqSdBX1Uc48yeuw4DFCdGCPqAgC3YrDhXdzRqMhTmk7",
  "key10": "5pEM9LiiRGKj1G4R6v3FB3AKpyPWcvNyTcKJf8tSn75Jm5cxKZAiTtKtjwtThpysxPuy9jLSzLy2nLk3weCRj4Zf",
  "key11": "3SVsjNRVWTUawdqb8ihwBvGGeJsE2neDBtFqtXgtEpERLV59WVQfXJ2kLYH6YC963yTMxwS5QJsVN8SfC3eniPDs",
  "key12": "4Y9fJZNp3YiQJ4MLfMSzkPkyqgp1nbtejCKuV1TNMetqdPBQvNwFKk8Q3w63C3U851ZvmZwPYNeRJDZqKzZRog62",
  "key13": "5LXELAVRL959im6Hw6KhoeHF6PWmbzimPGUAYiTAZDmF1vAatoBXs67V6PpLBc2gBh9UfMGWZ9nqhjrgmJK4dRfM",
  "key14": "4CEuvxnasnCj42LsQxW7ZoETwZeh9je6dJ1arox6rtRA7axeyXuaZZADajtPxJ78VzfgJEc9ke76LnxW9vCKpiNq",
  "key15": "2E9Ueck1JspPtj2LesxEtqem1Ep4cVRgx6AaT6aYFTWgRZau2BhX4nU27aBKPGbKgxdfS5ZBsZ6Qq2iB6pCgYE85",
  "key16": "Pbd7ecPSypW2BEMAKx5ZcEvTQHX5vATMkABcw71aXHxJonaBKvL1iQreZ5334DgjYBHTL1jUc5FFQ2emmHra2sb",
  "key17": "4f7myDqbc4rjXZ7yVj95BTFY9EKqzCdf3MUVVU2nWH42UGVmrKivo1GaEpBF84PSUHrL21QPr6Ze62Pz2JGdQfHH",
  "key18": "5JzDKQDPvzwg54aMHLo7He9uRJqQM9vKyMGaFLEzXS7nMWpocTTKFpMbuu3tnxpbHf5yTFM5iSz2AYqRW33FHiq6",
  "key19": "2Gx3TAPRzhxxHahrUa7zB66wCzfiWX92k6GNHUo5q5asQkvGTwBXqdmYBFodg7djDfByoxsw24DQsZ6ZEafTpATR",
  "key20": "5Lz1EtLACZFGnrVAWZPURMzb6SnVBW5eqNeRwmybMrzMo3ar4aH51Dz3hFV2XhJDcWYqgT5dMrMR7HKR8V9mKowq",
  "key21": "7XjVyXJzYozAgQUAYVcCwzUh7PxGKCDFwuxLUXvN4qcwSmk4X9Q2kakfqaAMXYCR2TkfwKqg5J2BpiManwHLV4q",
  "key22": "3URxvQJGiAWc8vZ8SgKRjndGn1AKJXsdLhzZjZiEzWAb6tHShxYrGu73fd1fKihxwJkxEwLDyLNXzfamgXQ8PbdV",
  "key23": "2Gi3veZPV3FT5hcRKL6cqSifzhvBAA5uiHsbnDP2gUnM5j6tk84Be1gFwCDHTXUiDgorVCofo5DhvBC3vcUpJEq",
  "key24": "3YTapVY9YkeS3sTo1hjeXWeuHdgJjuqyufarQo3y8t54i4wf8E9PCpjV9gQVKT8Mk41PKsXFMgXAPR4XeMLgBiXv",
  "key25": "2isDL1d7txc9rcUFkryjNjhpd4SRCrgAmRXRg5thZQ1VGNvRBizya5CKYTpBWBjB2552jWS7jNdgDLP8GKrkXnjj",
  "key26": "rwytBhh3Pn5yQ5CZsRrKJWKDoe7FERrUEG5mQonyfDKq3L6PKn7g2BQ5DnVCMbWPuDf2DG6PTqR58ZoX89zxzKY",
  "key27": "21jPXrdopEepuoK4WQsuzYSVKq1uQt6DXeq9cPjGhc9AtJGHDNugFPfTG9ABqZ3UKsGUeiwvjeCDrrdPMiLTdUHf",
  "key28": "662V4yExveYSvNrdHFqPiddmNPGGySga5NCgrbPVdSxC8fEvZZ8xTN88sREwwCzcjqQXUVa3e2hmykmdH8Cq7coY",
  "key29": "2xFSRNtrCXjiYozLfY6akGFQ6x9xdHmaUbBUhuVzmf8krR2xFKqsdYGeEnbEH5BB3KSJftS5oU1kCFEjoL1fyR8M",
  "key30": "5NfinBtagJ8k3rqhuzSSYFpDSj65qognTrxFMLVbrCvecQM5ZLdVTdZCfYZCMpnLynjdQbVAniJXKXEoXD3EGe1u",
  "key31": "4VHTRtfjwGkv3ZmgsGPv6zJVNECogNUAVvnzSRN1vGxCzkidh71DqHuBMJP1XLFvcQ3McjFc113ohMABovTtirXx",
  "key32": "4sH2UT3CNCtWuH7jEiY2D6V7YikTQ2bcLnKxtxdPZJf15bTKFRzjRNeMM5xcGsVcKc65frGsMevqWXpav3tVwELE"
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
