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
    "2YmsTiYQcQ5MVW7SKQnZd8uKkXHxPToyfX691id29mua8HMkLNRugAfFrVaDFwf5552AGXUB5Kz9SBhyUHj2EDsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1m6vbsW7BbxG1dvtwnCU85K1jKNPibuTERvnZTbw4sbNYqzDAoqgdGuTpXvi3n8rGRUpNNMLKK7CAdCTmXbx34g",
  "key1": "3V8nFFxsSeazBBbhWyAHXjjuBse49LiZXtG3Uy2Rz4XpvpeBCnC7Bin97tqxr3gpoM2iqbKvzo9CfzgU7u5GcX4R",
  "key2": "2LZXT8juqFeb6QrdvC9mgy4YKANRRrsFte1kfTwqS3aEYum37A8Q8DB2sKBhN765xx4Ms7CYKqRpgq9DMa4hjmQZ",
  "key3": "2v1Ji6ouPYKYbXzXLRnuQjMDiZ8SMr3D1WPGKUXpX59NpSmoZfHzG5VWksBCGFWbPL3tf7SrrFAm4xnsULPAGHiE",
  "key4": "35QwycjLJ5km3QR7Dq86SZsHQkJcgmYE4ncJ3TBsHWPLXNUVU2UTi32oSSRBGU3SJ1ZFFU8oWxTda1hRMSx19ZNS",
  "key5": "2KybrdprYS27NJ45MLCVqETZgsNtWY4VyWEmHyBuzkVcsbYU2R9uJEKh8uL1tEjLTvxj7M27XxsqYHHVkvabHrek",
  "key6": "5EuQFkrs5fJAg9GHtN3aLrXTHRVRNg1U1VC2wvfv1abxzstzq5gJ2T55Q3rSngHt4R1e8qiktKxMFs7wtAQQef15",
  "key7": "4SwexceAtGDabFrXrxWo9WgoMKZdvxZhUo9o3dEsMUfWPS5Jh3y3PkkLxKNG9hvEGGxmFNPmpdFCnctiQfTscYtf",
  "key8": "5iP9KXgrWKHqvEFWfsNeVXLnci2j1a7q7MXE7VQZx1U1GwiFEwr9V4F51bjx8yHabjpAu8mrA8SYm4BJ5Eevt28m",
  "key9": "PD5tRE28ejuketwHBkKetUKUZCMSmVphVP3e67Au4D7eTnFzopCS7n7H7nQgbBWbHStYEZPeWVeN5A9HQcSCkAY",
  "key10": "tNNEAMMXfCgx9TumeUXL4VUgsNAB1mMPYxpvo3PP37ge5iB7HeatJWguVnL8Bd1vMbZtVKTDujRQBCn3D5Ff2cW",
  "key11": "2wYhyt79UJQdZaSMeD7NjXkun6S3AgP94QmkyHBZCCg55NkW3ApzFMEAAPVG1bXnwbt9uPWJCbxVk2MzwaknqXyZ",
  "key12": "5WKMXZiQshtS8EUTodb7LXu9zK5v9nKyzeS4xQkGX8bbp8gjS2b4ntoCjJQzUPadEBQHNs2U9K8VzMu1HkwQyUsn",
  "key13": "4ukokEnBLin6nWYigjNML5rzvV6PwNHzQBHUM7ZSZtgruUdS2AzWn5RpqE2wXyoy8VYnKG6Y9r5Lyr6e9zN1Ro2b",
  "key14": "5tU9v7xEs2AXyyRyNb4mr4u5WY2AmHBymBHo54UwfBX1WBJq6A4s4VoCsCWixyqjv4WfAEPjNbhtMPGb6TDd1Txp",
  "key15": "qgNx9yBFUJBsXc62K9EEk9SAyaGkMzXFyXF5b1QjpFmsJbkQV7y3tiD3vaYeZujFBvZ8K4sE5rsJhzGKJF2sSzS",
  "key16": "4wk3t8Lqp6UcFCpN7C1GfvasxdnT2kLguDuhYsqSHwp5wfTLp9yXsXpNXTLZZfzFrRemUw1YGNAwuMWsU8ZaGDoP",
  "key17": "BU5FrX7GEcf5cKP2U7oPQV3rpwhjLZnCacSjdKRN1NTZi3hfCsVVLfSJkW12wEKMKY5CDenMsk7Dnyny4YJd6R4",
  "key18": "3PuGJyWoPZvSD5cysA2mENh8FRm3tLFUeqdgw5q98zNCqwG25yV4hNwxcoGmR7yngiqPikvDmjQmGSmmfTmU6gRY",
  "key19": "4QnMxWsqbrV3C7ozMxmXkMYBZCDA1wuNiwM9L97b1zAxNZD15HhAbPeDYj1MDzvh1Wra3juDFYfuVLyPxJikKDus",
  "key20": "J95sozjLGWnu7J6WEtW9mhvNurviRi22mWfeqpLz7bsNpUUkAEt58RQXUEoEiA1AGw3QnWetjWzgxxemxKy8UvR",
  "key21": "3YLaF9t5wCrMvtJrzvyvQDAVPtLPNKbkeTCaT9edymcmo92PEu5Tw1MbDh8LFGmEfH9E8bmTdDcWryE378Zjpq6A",
  "key22": "pMaSkN5i3tFj5L7riqHaYTZfDnikan9pmzzUMsuq1GN4tzZPB73LtZpbnbCu261RyocGK2FtEmaTCwYfhq8zefx",
  "key23": "4pxphrbcLsnFDYpT5hYVYA9jDHtMUyxmXihHrFr7ToWQHqjWmNf9vSLPuCukX6mFMwQVNbtT855TYSe6iKCdULrP",
  "key24": "5t4v6XFZUYBf7KiyGeNMWC9YSFUnPXXnP8aeWBgcoVNJqsRWqLorif7kRXG4enoHW49gAUzoncqn3NGYKLT5RMoS",
  "key25": "4FUawtMJD4m38a1Dcj7Cd195mPkgP7h5m7pbtDgbjjVsoGruUz7oY9QJ64tmvqw3JJZQPn12FWT4MCUbTgu9MKRg",
  "key26": "21bFHvNEAnSK4qrCnDX2ZWXcVEd5VfXzsoPp5Cxg624wBKAESBRdFzXuPbT7aj7wBYe6KuxajYgiQv5yhUSV6vno",
  "key27": "5f7yG7Rd8R1noaCiLysenRzfcig4AHLvwMoxf1TyXnRTQMTFW1A7Ae6yde6gHfqq18HcoWHXc59Gkp2EAZbqZG2e",
  "key28": "1NrbaD3xSfCbaxmL6TATjLYXf8c9taZhHtnUUWCsVRKZ3P2yF6nnwr9JXyPZ3VQAp19Yxn8iCXXBzpzzPr4VM8A",
  "key29": "42LAjx3GZ9omMHs9iomtxu28KsLhdCe9a3pSJzTfDpJc8jndSV9gmTE7GbZmAw91cAgExvLSmtDcctSkze2oY5LR",
  "key30": "3wgR9RYPgi82MEqmQXjg4HSmfTin997an5PAbyuAxaB4rvWEYxAKFTmfbAJvCtRvGeMQAJEpwsQkQuPe7LkBhoEW",
  "key31": "3SCX7SXLQFCWpCD9ziK5VdvSMnfAgnYub28oFKHhLepos3UotBju6KP14WCb2xxLzPVpNmfT8m2MoK5GiFPHBMWK",
  "key32": "3xJKHmqCnSKqFd6Q8PZFEDCM7Y5z5wJzPpkryZDeihYwzZtMzYosaXffi7kLshxM6rbsRDKmqVp7XhbfnjCVpqmH",
  "key33": "5Dsgm1QgTmqTmrZ8rUivdVMFYqL6aL1Son865SGFnE9J8Gs9rnax8RdohQrzvdUCsjV3RXadtDDcswoWt6DF2v9u",
  "key34": "2JCG5xvyHtSsNHJM9rtcxzYdC8oPjMQc4w4yrkh4GPXTav66HxsheFxaB4WrnqnbYapeyU9z8ZAHGLom2mDqpnD4",
  "key35": "4Ah3q75JtrGvi8aFzBJBxrvxNV1vAk8jP8aJbkJwvTArJvBcAbaULppSBVq22ycfagKPkcS7A1LuBP7YcUG5Jzi9",
  "key36": "uYBxvzVLTMxm8KorSnUdpKY5v62X2xx56ZLkUBt6BepAn6yeZ7UBqPciAghMWNjCYGUPKeuwptQC12svQzkevuu",
  "key37": "5WWVXd1xunj9c1SaRu8rb16NhzJVk2fBaaSUeWz1XWi3wJXYCPc7RYwE5QqA8hzSzENoHVuM885B3UqYysvboUxB",
  "key38": "xeAG9jLYb9osoiyiewKgHzwhRHquwBcbFfBsVycBmumUB9owKqLLBRhGi4o2rBMny22aH6ifpfVtLKJeGtqteLN",
  "key39": "R8qDXXHTAknG75PmF9EzULLkQopKM25BQCBD8yD1jwSUK78PLPVKVA4Ua1ZZGJ46jshnBtYCRMMwdMSov3hP5vp",
  "key40": "3pADiUsTbuM9CamDEj5rrqT9SH1R9HzxEb1rFAov7qB7VwubskCc2z9VZDMJ4TNVrHyjWjWFsfHxsJeDJsSX9N1L",
  "key41": "Y1Jz4Q4KF59NbBjNJYg6SDD49KkV48wJCPq3KM9U8WStCRE78ruiywCQ9t52i8PwEUbQAt9yML1eriWZd8HBHVU",
  "key42": "569A8DFjX5avgy796dwTwEHd3edKdQbHj5FjYG9vrwFZwgkkLzjcepmt7ioMA5mhm5kB439t7B5gF6gvqivJsyA",
  "key43": "1WDaDiZ5jbLmNZSVk8cs8xzYb4icJ6PWYACTaMCiSSNgUWoCe1uTa7N1EfpH7jXvWBBaReYfAfLNBLMfQcMxmk8"
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
