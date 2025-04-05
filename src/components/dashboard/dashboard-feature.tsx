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
    "zW7bwi7nLTuD9SMQTKSEXqdCh9VYTNLjuMPN6uo2jkyiwhvN6wgGo3P3TgRGHGUzQPgEe9cSPAa4HBwkfpJt6bc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KbUbbL8GeziTy5xU12G4WUqgMNGTSxLs5B4EN9oEJSS3BN3v49P3XuDn4fSVv8Hx95nCjyZUJvM7KQst9yE3MkV",
  "key1": "5XCU9m3yDuQgRxs33DoupiLEWqc1LeSbtbsrAhsbBewrtwnzsPiF5t63GaeFewZZFJMLTtHWt5JCVLq9TegoEPDt",
  "key2": "5BVk72U71tcaZk7e48RZ8Buv6SAoVyUGg3zzp7Mrx95VVipzkPhmoi6tzMQj9QHBo19ZyqsAtDL4Nzj5Nz9VPLfs",
  "key3": "31CBb1XMR3EyC81Mr1rQX6nm9KahLDLWFvdHRpU6igjE4EUi5nyxin6hrYaUmFuRqMsGwhkZyVsRZYgbr2QXXqvW",
  "key4": "3M2sK2qAFEqYow9fKghZZRkszyvjQ1HFTVxX69ti57MRqyWLdBLQshJi4Q6vVRMhsQqfdQQRHDLVPDDKp9HHEtYZ",
  "key5": "43H1hNGpCqx2Jk9JmyHPyhstu9BWHSK6ahDh4kStpKriFWp6k5BSUEdF3Uygy5tyKiHPmSm38fqh6ouVgmaSxNaE",
  "key6": "4rBKC2KuG4Diea8UCkxKJyRzQeiwVY2PWXdSLD3NRMR7zyBZGSMmuZB751ERhDZDTjyLjRbhKYBPmCXo8ba4GMuK",
  "key7": "2MHQETvyk5BgTVJcqPqpxXYckPd3j1ZfKqYMQFELRmCbKPabEWkSZy7s3D2cuN1hFoWKSDDYv6LTnfKP6VLfFukm",
  "key8": "XACwDBrEyzmN6T9asmuxS6xPqLZK8r8pFRQXMp5Z5rJE62vrLz6Uw8RrTAyTezhUhH7VhUa2KYPyjHDp4Qp47S1",
  "key9": "4NehLpRSGnE4wP7hVZGkAsuUWYYK9NW29ZDRupHuionxs7mU4csrSUSFq96fvupRYtMHFQk1eRg38Xze4VtjsJRj",
  "key10": "fHd6MTTokU3iSVvtDm8sMZBWpuCUGQ8m6wPHcQ67gYVCvBDPTfKg2fcbQMF7wWjyP8CipaG9Qp4k955GpuBn8F2",
  "key11": "gRn2RjNrDhZqLJA1eC9HTVbWWjuAfEQUsgiVjYoNoRkZRMch1AJnaeXZUxTc9gg29TAPH1FoxRPenppneb4vho3",
  "key12": "4STqYwNuQj7xUVtvKhL6NURGg5gq1raZZEEbrKmPqVtPbophPA3D1nG5NjsbSX9xpciU7u2KCS1qssjandsUT4ZX",
  "key13": "48qz3kG1nCr7dvtAMLVyxvKKSJneGMwwotmSVYRtweJBo2KbxS6haYjd7RuMncQp5fweXAtwfgo928AmmNwgFVcg",
  "key14": "3abNnSZzM2MvB62P5AH6fySDKDHuSP43cwsEL178h9vWtubXKDomRrzJW1gZCBFfkyt4MFK1MSmnY8TprKr3ZGCg",
  "key15": "4YNYWFkUa8i5ZYoX6myMZxwrqs7br7NbbMzQExUVCZC2Mz2SyNgtCBwkaewhY1MzNDZ98tcEgYKSZeTvpdc3UJN5",
  "key16": "48CXKqXHh9Ucyehf3wXkF5LqwcL8zAL5ZwfBVFcFwR9YAzYxeeTbgtDcXVpjTK6bgHNYVyrgFbYGPp8bBVBVC5ow",
  "key17": "3gG56T173WGdfHKinRA2pcv9jmobo5DEXyd63RLKUGa7sLf9tssqgQy27C68BJVoV6Vkq2uvU6za29EJuJ2KyheE",
  "key18": "4JaDCVSKQZwMbHL2vwbTB8KcArWHip35o3wASeaQr2edDdqf3t8ktLjY3ZWsmTndPqzJaXBHtPj4bewt9ue1T1iF",
  "key19": "2NpL1VNFLsri95wsGj8XiCcqxM1StLVySzheYcpUS18avhgRPYcFUEhMKUSjZAAjXUAFsDc7d3nQK1rqT6b1cJ2v",
  "key20": "5YBsJjqKDfkSqmxNDyEegiCjQ3DuFczFg8wnhz8bcJFqziCfByoPRWtzCWd1Fz1JJYP7NzGNmEspNam8MwV25mdn",
  "key21": "WRg7UEKM4FFmz9htUghwKcYic31NSsKZ71MbajewiK8PXPTJmH25s7S7kSwTpVD5J7hyyMBg3YQ4Zn2daBty3Hd",
  "key22": "416mRFtJNgjxe2GqrGfKqQzLt6aqAsfLWe9HL8SvwrRGzF6i7XvGhckRXdkzvzJAFkoEKUsWVduERQ1XsZ9NuGCJ",
  "key23": "Kceu7G4R8BGWrny6gTKNt5r42PRnjXJhqRdrhgbsYTDSyFZQpzrLaKHteVE3vsdRs2fxVMBV6bqeSD4UQ847snx",
  "key24": "62RBSyfWFKRcKe3yh2nbmSobz2ZmCXf8xg58BRNek5E2aAWiDmmMScN7UcgB6AVAQgkZETWDSwDA1Me32nLBGJt8",
  "key25": "4FXPoL7RQDAVYzcHSS6dTBTQcKvfhZF3iB6ehWwfG8rAUhNvMdKUZKto7YiYDSwx9khe37MCnGi9spH7Lkfs6H7N",
  "key26": "4XZxacSWNgcDsCfjz7XrmKYRSdGiW8guAppRYGc26eHcTZhcyhcQcS8ogZ5Unxjb4bPkShhpn1Sy3ao4M7ZHknML",
  "key27": "26BKF7eoH9viJ5K5gPS7xjd3i2wAkRTV6CNfa6zQ1vyYwZmpiRshDCLTLskhRdJNeJZScgFW3yjBV6QXjrEeWpwd",
  "key28": "2BdjAjs7k2ij3KDmtCyLcrPgxauxj6dFMTyafcYehosxtDoaUMQMPeNB9MXCwuuRqjnyH7aMJT6XVpVH5XrXfYwv",
  "key29": "5xTvBB49HhUf8fXNZ6bSbPRYLdgJtpzaVEFWXuRWp3B8Gf3kaezjJz3eg3kPD2eYsuJhCJY4aV5zoHKB3ABBSzxM",
  "key30": "5DZqbhFhuNZE38wUTFKZF1NcPmVS3Ug4Szpgc9fiCzur1ArvvvrV9LPTmJ3tWp81VJAZidJogUQiHEiUoPP9yLdu",
  "key31": "4QHYxSBQkSQMAfYnQ4vAaaSC2T2Tm1iujUxZxBkpjdgwFc7wnk2LDjjs8KCcZZWnbdeY9peA6jQWcHnmRZqdDWua",
  "key32": "475DedKUkYBa8jPLXxDzLAGxXMMopGnL2wzd5WKdhLyigSUXDnyB1aCoPfsv8QpTuCwnUuwaRVKQ8HmSZEJnZUth",
  "key33": "2Hk261SpdJNDTZAzFqpUbZ9KarAGjxpkPjpjEHo64PUtBDYrEty67Zbcduw6FtkdrDgwV6fYECc4GKdZGMPE8LCr"
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
