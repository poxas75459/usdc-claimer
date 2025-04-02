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
    "34ycN1mmUfxrmzMDmGvh9vfsRX3sq5MTz9BjqddwXME5au1yubRYSPCu1tTWdqoaR1e5jui89xVbuCmTxgSRdJKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23QZoWncbqF9n98bUQ4ftSJGTZx7BZbysofPE7mHCU5dqWkvfhvx1MfWmR8Mu1hVHL7UsaNiNeAuqnJyDej8nBo5",
  "key1": "NaWBRf9tKy1Dkrv7AynUt1c5usU3Gb8KbmLg7TrRqGkZ4BeKtpxxT6hEFwk6rDZp8kf3PLFdgxFRfesCXmFzwrQ",
  "key2": "3VoN7xUKWvmtTZPCgdScK7mbdWorF6vuor6toTXSA3wkASm6K3mFJZjcRMXZddT3qXZukWBWcSJSsmnjkgK7XJvv",
  "key3": "xR43trgknvTM8Pi2NRLq6mrMqoN44EdEY8CtS5ZGRdDQX9a7qLmbczny58nksJivF9q5nz8KF8L6ZQsG61KGKqZ",
  "key4": "H9H13WZXnEB3tRVaUo3kv6FDj62m2Fxcoioy8bStVbSzJM2jMgY9XHosdxfwBZnJEJQcdpucCg1mnzLs2NFxPaX",
  "key5": "33vdgMcXz1TxWL3UEWn7DHy4tFTG9fyPJSZVAE1etTdgeWURc14H3YFNQbnMWZ355esAL4fGt5cgzfvqdz5QfeCX",
  "key6": "2vGAGWdgnc2wLR9Gbp2xRxFfDCPmTbVyF4pLaws4hrX3Y6HrQMsDFBBYmXen2Xm1PKtS3x2azZV4JcGkJxoYjMwT",
  "key7": "5QCXsrkBrreDWi2xG8xXMuXyBVYVKpq3z5dvnBYR5oToMW6MzGdKgMdnm7tMHJ3VzPC1JBoQZwdrVvZCVu8C6Qr7",
  "key8": "oMZtomPZWWv3ya8Hq59HXdq2FQ6eMCMHpZEvxB6ekyE9ssXGEcQ5R4BRoMyPW83S9p56SrMAeVGC97Z4DzfzvGq",
  "key9": "3RCH4dyHZTf7duHJY8yhYFAxXpnCZqxZVevxzHDXTesLu4s13EE2XEeQLYMwvGzydx9mBgNagSKrR1eq895MatEn",
  "key10": "5phwLSoP7RupuSiP8uCkVyKykYpRzMA3BRRiZm9bfeyHCrXDoMys7TFRumJYM68yrYow8jBAsNDBfhT3fcYs4aYp",
  "key11": "4hSHyGeTj8hX2BZqdkYnd2AnnjvfV4s6Hfq227yV2XXEsDdHtSqJsHXcRxX9eHvFHpQ1n3mQqXCQ8Q4sDrcA9B25",
  "key12": "3DhKeNrCuW9Q4fPqdUpeuGLMFFL94jqPysKxH2FseKguo8uYwM4umtp7bKmFhfC41nv5Ua5GhymaLzLiVLCcCRXf",
  "key13": "3e5TrGgnKbhZk4XCHjufDgX3Fer4wEtM6BojgqrTCV14X63bUWzx1pxu21VTRq3t5mQkLHdMeD9CtZcSwsBpEYLe",
  "key14": "27BF56Z2zdVjT3wkXyUo3tFwqsMUQbnDNemmENc66HJKiCNus7kWfxGi3B3DYetgLgTVQLVL4VEcqHyZyeno59vx",
  "key15": "2DsRQWLcQPdzcivJxz5vaehUNkVZ7WrruqD2AjUEetyTFcorh4BwQJ9GpYc1n6uC8f8c4EX8H2GnYBgT8nuKMAWW",
  "key16": "4Sk9aqt6TbUCs11SSdqfB77DtPQFqoa6Jws4LTU39AkArwJ3cntdjLtgi99n2hVTBPEUJuuKVA4KoPMeHbsWv6Z3",
  "key17": "5TQYVffzq3oaJw4eYWaAmic8c4yDvE6fEv2f4774ok6JhbgMZLs1ZCsiRUGszqGBvySLyPHBCWsoPNPxsCr7zUWg",
  "key18": "4pSVTQuveSkJfrMH9SnT4pc2CmmvTGdRp2P6UVN1NVbaXJknGApX799Jgcuzsig8pxbB38Nqjn5tLDuZxVwK6h7M",
  "key19": "2CgKRy6Y7quPJSZ5FDMQ2Qw4h6CMcnNwmUwQoFL7mfysdgtJLDzrgKDx4kTkXbML5nDTSErUz495t8R3HScuy3Xs",
  "key20": "324vvBgmVp9RqeEMAWw31iWZsHRFwbVSjUT8P8fHKHceD2J7e6K9JkzSatNQhjDgnrtJPgXoz1YLSiVpXPczczop",
  "key21": "5DhVjjM8hD7ogYPKfvgJPhVY8KrdUYMjQum4ubZQKhBDqpKQN5oLy447sG94EhUJoVxXxCpyRejUtQufuF4mcGAe",
  "key22": "5Ye3c4T8YmgUK4vLeXysZ5Gk9FtekDZ8wRP4m8RdDAd5Eu7dqZeTxYZEqdMt16LbC9vijXGrz4qDGstPbgrQ8vUm",
  "key23": "7nXbwwxZXq4s6fmeTwz1cYJDvuuzzdzBCJhGwt688kX81YaM2BDeSMuK3xCgq1Ys9xTY9S6LUyc9iR4qN6LfP6p",
  "key24": "2NkeehRJoYFAWcpSh2HkQEaWpQETMo1t91jhrtUBFdbbjXC4Pv6xkB269o3UPa3NLL1q5SREVeY5HM6e3BXYWwP9",
  "key25": "36w6QX832KJkYD5ULdMZhpv6pQA6gLzJ3x6dhdszoG4wr1FiD6CY6FRWi1VMwiWaiyujXLQqQb7zpTdSj91GfAbL",
  "key26": "b2mSPebT8GYaMaEMVicPwsWu3FAYm3DnHJV3ZbpahN9bMSSMbRYqmFEP3Q18Fd1C68fGxiPaVSiW8VcfWv8EQX9",
  "key27": "4tsGuibAe7K5AvjcNVq3BjkZQx6PkGdnh3ygVmpZHCkKFqt1uKiyQTa2nXBSKJ8uNgBKemFKqkXFnSmnZ49apBCG",
  "key28": "663ZCeyQutvLDupLG7nTAZBvNrHi2nAhdHK84VsG8PD8N6dqsryvzQdA4rn52VhFAf1AjtrZ6EN5QGKDhfehCLuS",
  "key29": "2fcewsNBZbLGWL1UygQW24m8ptK8VcH5GywgbL3PauNkiQnFqYSUuSvr7zjKC3Hjz2CUTvRAZB4M87hthwUntr3J",
  "key30": "XW4qy7ePPgkGtQFkWZ6oi64QJyZNVPzJBuF2NDnh2ixo3P8yRnw24qJTeP1UXhYmYdcrL5CPmBmsJshqmN4oie1"
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
