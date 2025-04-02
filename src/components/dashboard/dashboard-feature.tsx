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
    "5mB2PbPqaCpP3RMvbcFdxv8kPjBXGmNM7cDwtrRTr7VjSq7oChh4gXaoweGc7hyCatfh3CJcTJ52ky55JPDo5a88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QMWGTtyqe76WLtTVuj164m4yJDotYUY57xKFzHzQhD3J7yWewhnjaMjAhKYRjR1NsMSx41B7BRnRg9wBGsiNaJ4",
  "key1": "QLmajUXoJJ2A5XRgtYeH5sxbrFQHYnkkQC84UZodM4Hue1boocjKgu5dP7wux6DMQ5YbsMn5Lj6oh17ZDqnRYUq",
  "key2": "5zPfPd38af2P4Adw5uGyoi35f3kxg5VLuJcp5ZeZPmUB6QcTi4Nv1q7gvJ6FHkfNZPuK5jKPU7uEnpt4MQZrcSn5",
  "key3": "32J8MSwQbJrPct9rF9DcssdWKkg49hcEQsXHLtoig5pboS2SxDYWokvHhQR4jrpRy68Ldrgtko48ME7wdcVdZpER",
  "key4": "4dWnDnrXjWpA4UtJrH6Qak3bzZXYDtQXauKpVeFEq54uD1gdKC82pRdeGRd7e8Rm9FDejhewzcMzS5cUfZFH6F9q",
  "key5": "5838cekFsF6eeEinnwuGcJyuSdnb4wupbCHyj5bm4B9C7pjexkrVz17D37Qyx6PY16jboVJB2a5z5FiQ7d7G4m4h",
  "key6": "4CiunoySXQQ8fJqvXhuxws8fCdaEYRKwv84XCeBwSNSAF4bowSyFDGJTPehiS1524vFpgVxrqZCNuvaUzE4yeAE",
  "key7": "BE5poKdRfxq2rnk6yBneXbo9GEcotXT3ti4PV2KPEnFV7A7ESc2WozyQYkave3Bc5KUfWsdM1ZfzZBpU2US3Ky2",
  "key8": "4k4cLqqvxzwFCXbwHKVZTD5yeb6MwEJmNjsBPNsLnQ6wUU5KC62uDBu37FPSx9wu6YQfSxtvGXSt6C7U4DNhVnJs",
  "key9": "4feF9u11WJaXKq9VwxfTBSMWygecZdxd1s7TaXhfSFWZW4rQz4DnPYZCoErzPh89jJ6eYra5HZTRa6B8dHjayiNM",
  "key10": "2e741WVckhnmV5M4ab3TJQe2YbS138Wj9tS2WEwXJGs6a5x2ECLq9VpsrEt2hothWwwEfr1sX3cwwJBxWitFSTuh",
  "key11": "2GK6q9fRU6iZzWMSNdfjC6Xpji2T76Z6VprgXmQ4yA6NRQN5iwsgcjUxiJ8C9tq12G8BCkuKXkhJ3zUUXWDrJKDo",
  "key12": "3m7XaYMrctPxCdcu9Z688M9CVvXfmFwNzD5gfQQXUPuTuDikRkrLJ6synC6m3M2orbf9Ko6FTqJVKtCVfrGbW2p5",
  "key13": "3ZR5RPuBvveUsosG4wy3v7mmXt4zaq81ozbLv59CSHZxYVhA5EGot73ZPAo1h7ceTCBFYaFwsFrekXhVm2nMS2DA",
  "key14": "4gJn5BLpEC4QLeceCJAhN1DWhPVTtdBtMQQ13FtnH7LjSzizA5bX3CbYBtK6b2Rr7zdGFnHaLmUPCWwGmKhP96ZU",
  "key15": "3eBiicom2Evb5GgBkp6M3rAfjYRn5Nky3dF4tieaTgkmVQRCT6QsdpbmauSaaeKVMXKc8z4kBizTq2N88XRssXr3",
  "key16": "3LMWYYgZsfjt9zeKaB1vtPKMAbgKZYk24ZrGPvAuT4k83RUvk2fXBMNXQgfur1kB544ESGKBZhRqSijAKc5AsetC",
  "key17": "3t4t75QR3CNUftJtGjuCCfoRvzDbZE8CqUQ6pkzu6CRtEU2vWcNvzQNhnvYVVpt7vnQcMvX1R74kNJTZdgqesxvx",
  "key18": "35eWuuHoUdLeUAb9PmqEKRHFdG1dHLwqpGFNqbrBE4YUj5E8URo2iWE5nBoADfHnxyDaN3sNBwzgxrThSjgq1WAP",
  "key19": "5Bwv74nSy4j12iNuGyJkVNwKDje3vahaK4cC3mkppSBeqW16h8SQJbEdyHLECif5aLpkGVViSkeuH2Jgs5e7Gcxd",
  "key20": "29scER7NctqJgDDcC8zX3D7zGhTiHT8SVtYf9Mfhcdj5bAJCE3yJ47ooYcRxHEvX1BHmXAsnXSLPTRdNpkq26k84",
  "key21": "61uhpbgWCGNnsL296epSJgbE55ygbCFsGBx3hEN3FWnp3q2sLu1RfsmWpvs7B4n2ypM4NNet8u1qsxokwx7eTD8Y",
  "key22": "2pPMTR7RfsTw9gLGLaHbvGaCPZkufSXAg6BJaKJpce2FRKBx74yQtH8PwdJZfGtE5LxvhECR6P15gwhyE4X6cFmU",
  "key23": "5b2pJmuist9xTJC97EM7mE5pRMfGVrRGNS51AespHsUH6p26oVyRwhdxbwYMtuZ9Wg4y8xfSAFu17MM1HkZHeXq8",
  "key24": "56KAEaaMebMBpSz8BYTKLmyXVgUQ1VgDtRzetQeLnqMEv1pdVZqGVtjWExBk763zYxQX4KQZtdDgMHF6Kt375yTe",
  "key25": "5W4DBBygEhQEnEyDdzBqYo8noNnNdHFrDmiUCazxUa1UdgSaX1hGtBYF943brQzq4k3PLzf7voeXACSJ3WCWgK3p",
  "key26": "5AJzvpXWY4td9sKKSEiJdKPVexEh4HfQaauLptnjdC6v28E75q7ZH92GZvbDfQXWKvtkL6nsnmcnHazF8Q8cnXmN",
  "key27": "9GeVp87knxbGLJSkHbexykx56tFn5CQ7s7PTFwXKneZ2YBizoPSzg3yhoge3FVX7XNnkz7p21kfM5D9ZgBc3Y5Z",
  "key28": "5Z2nnfBWjWxdMoqxnUiNETaWDUB7UouVe3JCz7JUfr9h25tERRipQVeGjoyoZ1ygiXG3aJwxKqVndQSt65R8nDVn",
  "key29": "38vgtZv24v4H8ebShNxb1GZWU3ZyujNLq5eJGem3g8nFvPXcDJNAy46UhSdiCACPXDixieFLB9126GgMcDKD95kh",
  "key30": "3YA4ixjHoEkddtHEpStTe9NSAbLKs9vvqJy42CFcXt4rVH3E9ah3S1hwsn8A8taqmWFwksgtzeP9CcnEAYXUNknu"
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
