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
    "2jYBVzr7XhT3XNkcNciB1fsz41rq93NeMLSmdLWoekVsVyckYQWs7CGKW31dCrHH1bvi95w7JXmeoX2YtGCXHpzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VNnd39DmC9a82QJJ6P85NGGuEJgJCYrEGAgywKdXBEX4feAELxq1rx2tu5MBsdRMarPps4tK9NLfVYPQG55q3NP",
  "key1": "3fjG3zsnQa6rAgUg29unGygH7yi1sJ2kAEBpdxDCVHxegTyHvEoygv1CShN7fKaRTo2F4h4BVbJyEcjEW7dBV1c",
  "key2": "RFDsTWUyAgaPR3hD8wdv1LcSL2ZDLT6Z1SqTLMJnn9x1UeAEHQ5UR3sfRCURRBH7ozENY3quiuQZ88trTZCuoJr",
  "key3": "2jQjBvHpWXSPp728zTQNhxnR1xDSs1bDyNPJdjRAazzbJShRVJ5ue1CvyKSVE6jSXL8Vjug8QFsaC9i53EZm4rgL",
  "key4": "47JSyfk5LWfx52BiwdVAMY3mDcRFDcVk8Rj1yTpfeHP1aqBn2jNb8EjoDAyrasf825ogX14rX3Ceu1298SDDmmfX",
  "key5": "2cJBGB6y8MKrxzBV2XMyhTRm6Xi6Ukkpe4dbLyZnENbjUP8hw3zHmQ7L7DVafFVSjYKef2q6b18Sz4fhj6DsxGn8",
  "key6": "3H9LkY5okJ1mnw7i8h7gWndWCfEbTRcLr3GgPPHQU4mBiwMqSHUgtEQtYTaQK2DgrK2GzDcta32NNZzPwEPv4kwv",
  "key7": "5hKECP6iaswiURjV15AZSBCafAZbcmEzQG8nfhDRP4FNyQyzJ6QU2oKZNdZJRqTz4RrYU7Qzs8CpR8tLmjkWJ5fn",
  "key8": "3YFCQ2ob6RvWbqLYwsSzkrVqWa4PqVEFoyRneTUtvmhfypua6fhw8kYgUDUJ6wGGFNSVq9m2UdE5csEE5TM9ksNj",
  "key9": "3xpUmnKK95DQsX46jJjUaM1m3Bm37QMxneFM8BTYGiZVYmk7hQhHPkg3fc4y3QWWeAwdghVJLSL8EKv4dQp6cV16",
  "key10": "2rtFMRvEC49e1XLjBjcUvGfAAZWPQkv5NhKiAspq2jbDJuynFwhyPXsizHmfU18sZJDVkK3wCA5VX51n5tHm7MKy",
  "key11": "iByVrEk7AEgsQpYPY87nZ51YkJR6VktSp8mujtLrLD3zcZuedLBszXmZT4YytQ3LJqQekZ6KqoZiaWriPo9eJhv",
  "key12": "48q3uYjeykP21Ymq1kTSvuKbL7q4uNQkA9vLGPxRqTqQZKH3pmD3jf1f2KD3jgmdaxP21xc7x8zN3KdFpV4WEk5m",
  "key13": "45xBgkXnQzj3XU6BfiZJcioiupk1CbXaUNfo5uUnXMa65bV9yiVr4Epo7x4CA4bwBx7oCoFya8GWYYrtxdioQMFt",
  "key14": "4vmLxHLhCZJ8mDtb7ijoVXi9fACaNeChdFKo2S2uNU88SMmRUe7ojwCeuS1681d5jFtcZGz7sog8PnuJ9naup5PA",
  "key15": "4conoz865ZAkvJhHH3xh167VNrSDpwnfNFPS3uvmrzbLzRkv1CgK15QYo78vWPVcDLDHQ8JR2rbJCUHNYuQoFH1c",
  "key16": "5kCAF9dq2xRfiphpKQEnhrjhwcNqf9SSNn7wkB6V5bFpjd7NJDz2eV86qsGgQ72CLpw5MWXEDuB8JcferRGNjbX4",
  "key17": "3wXopt1WKAunxmQGgWmuEGNFCpq7PiUVkYbyJTdgYSoZLKjWxxv2VGLcLnrR6geWfKZLcEx6bFeyt31ASN2VJ218",
  "key18": "31mYQ2qfYdCF13D2xeBCqcoG7xTHX4evGeLBiGHjRdFtTKZVdu2Qpb5wZz1pRLVGdArtT6VigdDJwpZtvJAbBV9w",
  "key19": "2w126HqR2AVhoopGUqBfPWvL1GN1oVjEX5aTUwYj4pTt7eGDbjoYCKKE92oMRRh1xHfJ95QBpfXPU3zTHVJGFQxo",
  "key20": "3cWsJCirftBpmK5wcFaPVGRXjrD4qDnV4FyhL4RFWd9ghyp4EzcD19a9tYTrriNAixps7m9Z7AAvBRMYckhUy3CK",
  "key21": "2CsYP53scERSd3GXmDpocNvqrJGmMnHjh1BVdJLWUsKQNBNzajnjEz47ZzHra8HrYEWwjoQph3BuL6SUdRs4VNBU",
  "key22": "4kKjnNwhKyHiz4SvsvMNsQnPQatJmgqQ5FzjiUGEkbY1qMsa98tF6NQZKzCM7EaYK6YzVmUkqtCzunUnN9L3GpjZ",
  "key23": "CFH3dSy7zxTofCK6dTYiZaZYhCdvu3kQpCtTXH11hkcasuEik4TBNMwm6LZd99eP4qR1m2xxTuRxottANSyC1bD",
  "key24": "4bpKx38LVKaDehBxGMvQqhD1pKAWaHTgPNwvE35gkLpEy5L1s7MSqVohTGydkD1Zz62B6qJA2tR7UaHTuZ7sJuDp",
  "key25": "4Y3QCEjNy8Jkcm13fcMGnHsF4yhex7HmPCip9rqGPwoxvh2Kr15FubBeLYAmz4M27DgzeRirB4mfXB8PH989fH5D",
  "key26": "FgSvpFjMhtb3Ggg2qFq2xXirKyFGgbbT5oizLuRp9XYRxyjEuLWZyYyDtaK7tLp64x4kqEPAypycCkmb2EbJyFD",
  "key27": "5p7421cnmbvq35i3oR1cZxe8T77MTkyMZyx2aBiXfippFzBGVpTRK6PuuVe36wcVVJqTCy4RMufqUayMRaxKTcBf",
  "key28": "5GQdUYGgsfpjxGNYGi1xiwoPMXwqfrzAfXUrsTcBrQHWtqXBZapMkQFpadJNtJnRLRFsV3w26KwdhAyzYj5nqcPm",
  "key29": "2zPcSJqYNhkCYScZkZWz5L1e6oGD5uq5g3kGBwxnLuwfr3ZoxLjNzZAQm7gYJ1dA8vVymWNV1UYLXgnR7fLjBQJC",
  "key30": "4xhjdZay3DGfttWk7pNFEcRH6PuAQmybH3DJcZA6ozvkVW8vsE97XaoJvrXbKSZfAwmXScgkzbdj44PHafY2xBTL",
  "key31": "A4MP6auhjXHnvhfpCgiQdASwDegDu5bnrmHERcRtKmxShLzC5cGZNwbRNb3X77pJZB6HoJd3DYNef7BAhAAJicf",
  "key32": "34KtcKQwcGs4scxgbVUD9ZXGhrktYG9kN8y2bSbnELnfTexgTggXKoKRSKYWFUMAgsRu7bC5a5QKoRk5svC4rvRh",
  "key33": "QYVCS5tRqqSSuYoeHCVNviWHAq7NRM1tVt58CtimWNkRDmwe6rToFLhtAbDdzFhyUj2gVGdpYfzv21vn8pfSGAJ",
  "key34": "iB9Ai6pJwSFG7frKH9XPeXS6WXdaj27bQAXo3gJx6U1T22Hk867XX9CFDiFNP4zJxZUw14vSZeK8MPQk2ArZxRB",
  "key35": "5CugzGWxpuz9XWAXfw1e3tGHP74LezEHn4DHtP52LYsMHC5sMocZf5CpnBv1M2GjCut7dFFXyaV8ATKMo2RLwv9W",
  "key36": "5wCtd5XD49xCnzTBNL3sXpBUkRLEyZQLiGDJNuACWTHvAwDNdGRfnmvEQj1s41QEKwotGtKN9hHpnCRNGyUiuBAi",
  "key37": "5tsCbk7C2rDSQdYQXEMynXFPaBhs6cWMH9hFFo2aZGBNqdhWJQG5NcJogWvwzRHf42oDg6apWTmMv9KqoWhCYvqT",
  "key38": "5YTq3TRf6mpaxdjxoJSSGX8fqks5dLqyAwK46i4ZxxDVsNwThNz7nS5YLcmjWNT4mduHDB3zhSC2MbkdwYeXW6fk",
  "key39": "4TfrNCFbL8mX56mh4ieNzaAPKjoWtojKpwcXj7ZmrKJPoVetaxMhCm46L8X6wtME48qFY1sJFgsmkXBJwg5nSJj1",
  "key40": "43boT61Ry13V7XXARNwk9S3ceGP7JWaVbGiw2bykEdZW1GXRYfvDs2oCrBFYKS6JsFTfy8RngtdPAbkQhyi2SN9s"
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
