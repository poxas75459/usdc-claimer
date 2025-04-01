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
    "3nsEDRmt5HEP9gy22CcxJWmRs9maHUyoWtoZW71VxNsR9h6hPN7X73imqsJEDZwMGRyUK5EWvZpz3hXbPoHMnsbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i59N4n8Aa7xwmEttxiWHcfKLjWpqex8fG2gzmkoutHWbJugD5MaPBoXRxBxDYWCt7zGn2PQedbQ9KwLGKLrU52C",
  "key1": "4dfbbMKzooCuN9wMJUZ79EEdKNR16f5mkbf3K4sgGmxnyPovkCZnoUzk9v6cqArubwRPh9PU27PCs6hoynTrLwAW",
  "key2": "Fn7GPB7s5mLpYd3Kp7LPrT9psEC3UTqxXYnYU87PbjSh1N2Ae2rJ5EZALKFvnGBd7GTcfpub69KhPPsKxpgksT3",
  "key3": "czqp3NsB66tfBn2we6K7Jrhw6duytMZRCP5yLwWzXnMAf2EbvuZ25UrsuqjjuzqYShofSYbN8usc6ZKscQAjpRe",
  "key4": "3LBGobZM7fdZbKYmB1mChb44obAAi4FnMRRmncEoDvKBBf3YqPQnyRoFHFtwabcGxLYVW24dJdECmhq2Rfo5iHj6",
  "key5": "4SFqPPsfaTWhePUepa8Fa11d7Loeu5Ltgb7MBDGY6NF9H6ainVT7J4bDwGptVpGPTLsjKKnzzRR7vWTqa3iUrUYz",
  "key6": "63wZjCSMyTAup3zmqu43ZZXn7dk75HaxVnQWmJ1joKDoPfAeKxmwUF85659jC4HXYwVusJSYG6FkU3RDkQzL6pjg",
  "key7": "3k5eX55kJEqhfQzim5irBHoNdgsUtvoan7hfHGquWv8kiSczeb4b29j9HLg57Wj4s3aXWMVYEibKQAhBMCvacq5X",
  "key8": "5oFPrPVvdGu18zvEqjL6kVM6aygu6BdxyjdSErax2jV6wuT6R6tuiARnzazce8V4NyVeC5TzGjRK54mm2LFRWP3u",
  "key9": "3vjyQvQmipLgFtxievgm4yFwnVSs4K4PfSwJSp7df2JrHjc2FfAUfLGGb1WpwGN3oZp5kT3DfPcyBSMsFZS5DoKr",
  "key10": "DaVwbM6JcpTRCzX2kT398utyoDbru98DDUfFhQWmC5stDmDpWynQ2tvcuv1F4R6bubAowCAp16J3cYtrNy3CTHo",
  "key11": "31WvddMtwr6W15gMsqMMJBov9AwKRwmn1s2H3YHdAYdou8jWR7UxH7R3rdn1WN3JvvsDCnk72zust8TH3npvWyAo",
  "key12": "4JYiGbA9ee77LGnwNiDLF6txbZw7k9aDo6iYUU49p6ejSgZR4vmAoqg5q3JKyZafXaAH7pKw6bMcLBwV2JjewNAR",
  "key13": "2tk3Fc2dM9xtSX37fdoSKMEHQmE454SZ42Dz4ZiTi7XLkBtXTzkmFcj9oMx5wSpEgScNjjU2e844xJyFLXui3J1w",
  "key14": "4QhhYfk6GVjgpbhkC2YHy9KSWSUeKdpZfUuRj5oR6NgiFMrEEAKBxTS6ZkYTSkoXa968c31GtR5HZBaWKQ3JoGk",
  "key15": "5rF1Y126cj2ynWPyf3L46tdXuQ1hUZU3MxAAaWy3eB42Gr7aSLGMzSQbukcRP6qZxeoU2v9GL5r8nNDoGEc81XN8",
  "key16": "5we8Q4fz8WPiJ8XvtivKg4Azk3U4XwdjhBK8LP4BaffWQpPE2iJEphXaGotqgcVrVUuFEjur2uLBJB8cx8siAZ31",
  "key17": "4TxVgKdFwAr4EreySM4M66dX2nTDJPJMcZNf2HKghKeBJcWBfqHc8VfLcXycHVvX1k7dn6HPBZgzarXp6wpcN1tT",
  "key18": "3ZyatpyYxx8J2yVndQr6gD4bNwqSy9frb3ShY8SpRxgW5WTUCUsgvng5sSQGKCyzvVqLJsHvvcY8YCKpMQZKbKs1",
  "key19": "41WNwPowKR8bmghawPgp9qsK7KwXy2atGid6KpBkGKX4Qa2hETM2gFTn2VTnL7bSuji1eMZ7RVhMPzELH6T4SrWY",
  "key20": "4dAfCoH8TnVF2KNSNkgh2w4RRWo35vUtGCZvUqSuhHYSfCtGZQKAUCmo3FoZmeVbd7sBK9cTTun4UCC31RHmWsPo",
  "key21": "2HSMyRe2aDs4JayCjPS5dFkr8L6r5xVodYJBPeJqd8WLr6n3BuvGYazBP4b8kWzEaqAEdFHqrBmyVDMaqDNcWRdq",
  "key22": "WmCkQc1wBdwdXz9WfX3uSobT4UEXSDEcrsETdewMzpqwCmPhxmUQP5h3yGtJ9YUNPyc7zmMofMEzG7EiVLpcTmH",
  "key23": "3z9HyUqoMnGxKg2runTXNmERxJynS5mDAog4yNdNbZXpfVqa3FjND7ArYZGArujym8oqNeSJLQzZbVpaedJghuqX",
  "key24": "62BTRYxq3cBb1iAdQUXwSp6ugEKDwajfxo954ySzYpyuRdpNKQr4q9fweAeSUAT9zd8WNBnoRZqb23EThtnwDbPS",
  "key25": "2ycRm4ebdyiYsgJzsWcb8Qfa4vUYDT1snTX46BtbE6YqMpPatr4iGx9ga2kFwZhyP4oysT5koWRsM12XJ8wudoDe",
  "key26": "5udZXqsn858PMWhGcJK1enDiWvhvWhRPqjsgfeQ79oDf3a41n9GWsrtscDfxTTWTCQPGXcDXJZxJBMzkc96y2qXs",
  "key27": "4xvh7SyLGAH6J9DwxrDzKdS7UZfho86FYUuiFPeCopRZrPuxGzXv2FfgYHjwjFbZSwuKoFZSHPzQA4kwkPQrgVtD",
  "key28": "3Wf5NvBcY5yxKfw1qheyggHfjqZ22QzWJDji9dbLr5rKMWq1n8CwjBMLJLq5JfkqtANJdwa7draKLAkqWkGEKXBp",
  "key29": "59Qu4yQvT6KCYsYUQhF2zfWQUKL3MYKYZz9tCBu5P7HNDfZzKEArND3aZCXseXJHPz645ovH3Tm92KMQfznERbui",
  "key30": "2urbuW5SFwFz56RFF6FZDnzzjWpbpmefRwfCFDQBoi8mQSVRYz5u19FLPEyPsT9VWinouAEki9hBULAMq3C4Vy4M",
  "key31": "3YxLgAepnjLhUgrkw5xk3ZHxR6cgxHrMdowpoxABxqAQQnUrGXqUTxaX4Xj8smhg7S8qhTp5zUowYYouTe55tcFQ",
  "key32": "38P7twmLQYmREUi6Birh2DPuRXYD8XAqvkEo7s6CzowfaitQsonFuoMh7K5dQdG4NpuZx32jC5ZU8HmHyZEjGbmS",
  "key33": "5Do6W1vCDMzwHKV9chhWHNk2omEVevRZtMAASgmgVwFWPF5mvd5Xdt6nSDCTo9Sq6Lhz12AkF7fhjL2rdYfy62ba",
  "key34": "575RozvQ87PuwyTxtA6eX9jzWJyCmjntTSMqeDSMyCvcpzTyqriFx13iCt4Z4s9BZxDswNQ8yzaXaFgjtoqbn6dh",
  "key35": "o654ks8qtR3oHD9JtGHtbF2ykCWKjHVP1PuY5aPwtz65qcBG7uYS242oZ6Xj3ioBchGmzvqo2hFsb9AmYWJwjmu",
  "key36": "5todKL5ZQbAyW69DcN4iwavX764FqV2sV1a8vJf9KWQshyonsvtZ8qnKahSYf7WEPF5axuZYw5tCoKmi64BoCKvX",
  "key37": "3CHXCgjJnBBiBkiNTUagRtTKD4DxQuch8ZwVpv5BELVGWsRUkPXhYuUCMWf8vaprsVMbSwDoe53mbd5YVK3iohKd",
  "key38": "2pbTLchWEzGuwRecKoEEZPAq8xcb8CdoLyY62bPNL45yszk97pXYHwuw5hMQzK53eXnjLpkZAhtg7HdehvhKBLBa",
  "key39": "31PZrKEku3QwqDvaKzSiWgGPcvUia2U8MpYZAwsg2JAMn9YbNUY4FYYQAxoeNPseYAL1JEmZTJNBUgMv2k3gogwt",
  "key40": "3bCzq69zhKjv6hzrpBPQmuHQJMaisS6vodAPXE8pCLdspTzFZfvJU1hXegkygR83XCemqwjPGv7m6PnWVEMtk3Tb",
  "key41": "Pv1YwS7ZxomCNmSnQJ1NsthfGQsA5Hsg7q6fJGwKBFmYYvhjTuwfJDdjgucPaUqK3HaPWTNwFfpawpSQGhtPNqd",
  "key42": "3Wt5pQdyWAio8SWFqV4XEkFjBUCrhvqxsMuaZBSy3RSejvTFJ3KHtYCR72D9CioLSTV6mo3mzLL8UoCiWqgxV69G"
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
