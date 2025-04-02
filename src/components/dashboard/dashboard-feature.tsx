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
    "3yc1q3SPbu9xqBXQmQFQLzdhndroiwuEtVCpCg53o5jVkXGmsZCuTLdeDtdnvSGvDFnM5bBu2niTiJ31cU3NAomV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p3jgEgzWPU7wWEbvV9JnbKYJSqKa2fSqUYwzAZ4x6SsHSuhji2rrnLKxbq1mqMoubw2vW1gFt9a1F3NE5SatfLq",
  "key1": "2g1JhrTyk35VYZhyDGo6VE2HsjFPQRYarEYUpxEksNBQzmtgczJQQJHeYiQScCEUrzhKkUTWLJXooNomNbceupDa",
  "key2": "65i4LHmiaoaWfYRDnipYyjMa1MmU22t92a8XYjK9kQC5j1wWTXfq4ykydfHLVQHKBuuSRchswWU7No4Ak3drSPuc",
  "key3": "4cQ7yQa51vjEuKipqcpCxERJBg9mepmTrh8E4VFSxjUzMgR4U2bPmHigb7h6tHEPnXuxRRBsbVvENaUBP6MqitKP",
  "key4": "28Sr8iGTK2nuhEPAdG1zASpw9LfBNPbkBfnnWa7ehLm5T6FJYJRDq9GzEP9h5W1iwDny63qps195Zrjb1k5KDT6G",
  "key5": "44HbmjikzNgFak8FWDw8ExoeR3giormbLadmP84JdbKP2sCavKxsUxMiwRt2uE93jp5dc2pfigyDZTU49csvPSRT",
  "key6": "3f4uGEHth2bHXp2ZnXUf2M45roA42mGGAvzvRKFj2sX1TtTheQUtxmQM1z2pNMDvKjuciWkWJSVtXMSyrgQzZPJ7",
  "key7": "3BNaB5Bbbknd36J2vfvHiCYkEmLq24C8BhfMGBWzFMdHieGsjS29AnX64SymC1W6ShEK2CJPAYwFUU6VCm19bZZX",
  "key8": "4MKRWPjrysTh81yf5kQwzP3fsZdoGXgWpG4sguq2AUuAUiuukTfu2unbWY7ryxvNRNWFZUezcGtzgFHj4ihYeX8j",
  "key9": "3wNaq8yX3BdnBdDkBt1RCui3UznfnYNvDyey2qTraEhwNYx9TwKPD4kobczENSFgVNonuimbb1bMvpcYfFkz947P",
  "key10": "4ZXqoyQYKE3q3p5T652kq63vWeiGcvpottCtAquuEz15PdQy7T9bjEKhj2bgAX9CgQXsxDcyh8HUiCBqagWAXBnE",
  "key11": "5nf2dPftqEruYj8GCyvcrPwUjfLHfxt7cBVUBnLwDjCHze4wDp3Wh8161kwLpHiSPpSodH83dGJQAG7itMjELoJc",
  "key12": "51ZNZDwtmhyZUkNx1aSzSSDuYv4WhNQtdKiavETAq86oWnK4n7vHE9jRA3R6KzVTGUW96a2h3JdX2AkFQB4vXt6E",
  "key13": "3eHntjEfXywDyLNqzSoEWWDRzB5pPWUTF4QRmUvoQm1359XFRSD9Qa6yCXviGHYMfBJNoiesxQACHtyW6MdBduSd",
  "key14": "5DHitAKxwwW4uxVuoFEz5yrhVqWZJ5gidfsyq1eRsvDPjSBHmkC9NjBEFE5rHfrpuhfXSwWcnM9oniZoGhQuKqzC",
  "key15": "uKwaCWMPjqyKH1ch3BLt6NJyVgtNMD572PWhnpMSkGZ23awUxPyDQSoRLjjLMasxQG5jjfkthiZFuUpgJnXFYeA",
  "key16": "4dkhLzLnrno359Mm97dCS91Df1G6seupXiqxK5P1Xrtx6JUdT2Wpq1Ht8kDaWtN1yK1pYMzEdqNpBNbxE4vCkDf5",
  "key17": "55Wdh7uwXY4JbxeUr8gy4qSZpMVotCs4Q5WT64b5KKtPThnCyEekfc6nQFttUCyPyCVcAuP21y29mM2JBQJCNqKJ",
  "key18": "5dTydZ1KqpXHuWNjW5R4n7pjj5bsnZJpPEGfzdbKbjki1YDuHxPfTM3tgnrr2KSigctPHZy8SWxJoC2dQTzwtN8U",
  "key19": "QhuPcWmMze8rKvt8nWKsBi24UseocbKtnB3hjAdppnmK7vkBfNbEV4pRCeEfRQxuzJ9bRrQRb59TdP3xb3GtuP6",
  "key20": "3DQEMnvAbRPiC7iaXrhcHB99fqLxVM9pGpgZ4WVEcT7qx3rQwZGzwRG1CUzGe2d22EvLxtsLNS7bmJyVavKyyDh4",
  "key21": "3HyQF4CWCENQBWjS32ohFBL7YKrFPJDs5nUw2N5UEKAzzcCwzn9RnY3NVYaZ4aVppeKc57HH9eZ4YMTCikFSYLkZ",
  "key22": "xdREXPoC2PHdyzZdJX5tFYKA3Jz3u3bXnXpB2L4uTDaZpxKKyKwPhb4t3FrXxkN9zDLS36eTnT1TdhkCL8ns6VV",
  "key23": "b4fnbKRrtsrnxxGH14zzp1XAoxFFKSGA64YAsJXskH7oGnK5TmuJmDXGA7wtB56v4fudg5junPgyZcW6N6fPoWT",
  "key24": "3X86obbMSfXSbPaJdKX2mbLiatDA7qgHv6e2QjFUcSQcEKge3JLMGambLGqWwnWdprSk7DfZGrJitbaA9YD24jJW",
  "key25": "3n15TpxYr6CNMpiz1VLRAiNUYiSKprZn5gYZCaEfpc7bGowsw7zwqqc9RnZLVQMEs223srbt6WHoPnGxm5FGRWEv",
  "key26": "28wZBbTt3PVCX3G2DgjbqJao3CZWALLPkwmytfExyWbY3XoC9P7v2TpjtEBxFixEVEM3inkGtsDCVSu1vJz5Zk1J",
  "key27": "t6t7WEZV53G1V3YT63EpqwcUGdrENMraCFauZ2NeugcnBNiNRHNkzNSf5EuVHytCjfi95UL1uABmBaALLiGGRCX",
  "key28": "2BtUnSetqNtydBevUPoNKa1XfZf4KVWbe2m3damgFnuuqy2bnz9iCsqrVzP3UYwzgzp1ceqtmQwwwvg7JV6HV25D",
  "key29": "2Xm7NkbxCUXux3DcFo2vR7ccC4RV3LPeoeuALsU2jbhkCG24s3vDrbLKuNF7LJP1F4XmXhGMoP11HbhspVMsaVmA",
  "key30": "4PBNVc6F2DuFJbvjsPGxyceMHVxy8h7JFvuokcgWQzFpZfb95C1dqCaKZHKnw5sEKDrvhmjowkTHLf1b8jJYd3br"
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
