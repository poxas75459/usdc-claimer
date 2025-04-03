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
    "3DmAPEAihYVF7wmWUa7VWUrMzzBLiuhiQiUvgkS4EzB6aVRVxc46wnyhjVHArUQhrHdBGzckjF4S88ou6qo3rYxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RMdAZ9Pm5psP8tv7fh2ryCa7jiXPYDcqNfF91cD5dSeWEzDy87QuCnabQXKsdfSoUso5XRWcd6wsSJVHyJsHfR8",
  "key1": "3opLKiucNTi3s75Ckpf66ECGT3XZJricJaBpQ5sgjSsMENZfaKKVg6gxyonEJwp5En1M4CN6bewhvcHWSPMeJhm3",
  "key2": "3Qeb58kuGpu2HiBdLAabP6ko7D7zbeRhgpMT3JR4AiysDXnRE8Eap8QkJpXT3EMMhS2uamSWYURH7g2w5SANdaAX",
  "key3": "26L7ga63S38xbsyEECpFjNga8qPAsKbGnCLg4XZxQ7TirngiZpCCHcDSpFYRgFHZxyXctmhCH7qQkHrwmYeJqFD6",
  "key4": "38qBBZG9P4MTVcdzpq6HMpc6hRD2omJmUc7bpnkacSWXgkDb3gAWCcMR9vT4zdPqdLTgy8XYriP4iiWwDXcfQt5J",
  "key5": "3E1Mhxia5RcqMVn6B5theJwuGBNwhJc9JjZcRDk5hnL8HceJF49tviM9QVhoZ91FY3dfrAUUKbyDRnrFx4LcQ4ES",
  "key6": "3Qobh8HoD8tyN7622UPJE7BDtpw3i4ZN9xzfUhMb29BP44ofBB9H2wYS26KNETRdBt8QUvx3wnx4u96ZFrEYuTg6",
  "key7": "5yfqmMxqBizJm9r71iDDcrMnhxyfJKpnoAfxmf3iy5rr2wwQctNDggAqReyMKfd2HVFvv3ko21k1ShZwR9u1Hb26",
  "key8": "5Gx92js1EmYrNgHkyWWULRjuBHxh37jNBfGtjR8T1ua5VxAyS67RcjdMfaiy9GHJbsVJTGZkHch7pDZcGGyHvXWH",
  "key9": "PJ8tbJPpa3DanF35ExswtHgfKBLfmRU3UR9Yd1Pa4dcz3KX24AwaGbCY8knk8d6i4dhyXDNJE6mjTJvTAy652PE",
  "key10": "4uMXrfvnbMPsCvJq3GGy9S9DCZedzWFKvCYCLrqC5vL3e1tTsx9uMdPRConGifMRfZgfqXoz8PtPmVzhTJQDpMgg",
  "key11": "uz1VdJxAb2wAzq1jUxZUHTKvDQxdxvM25VbU9b26Fmtypj9kdM9qeMRfNbuVwojimuAfEAeM1U8xbRJ3mahcsGu",
  "key12": "2ChMzZAvVFSfkennqmd2Ut4U3oASszrmYv8zQujhjoyMHFxeuG3K12ytbSK4aGhknPyKYLNLiZ3RW18B9jzR8W8g",
  "key13": "4qakVCk8t8ndg8BNSy3vnqp33KdKEHsRMzYtJkvTRCcXGQxWYkY2XvJeAZX9RWQU8otLDurY8mKwokysaXu17UHU",
  "key14": "5vzezd4iQhmFxXKPTCzb7pvsCznciqbGZx7gCSRzkivDhc7EtMaLnEgZriTBsfyULsmewP8B2nwsbJzGi8Pq8fRJ",
  "key15": "2LiFMK2TDha4VgKbUira1UTJC4N9FqjcGxL5FBV3b9Lk1MGa8EoSgw8yeYZCgcGv8fLzcx9nKCJXcgB7BaZkvwPf",
  "key16": "262XQF1VWGVYBrEJXMqR7WXwCiQ6ziVBdXgqcLTWGSzLHAgeV1zBNNbQq21Wb7sY1JnN7JSdLbAcDC9ELrrcDeWU",
  "key17": "4JpRdzDBW81ciZd9GEsf8qz8LLgPWp7AL4Pcn6xT3NdgyZpGMPby4aGfsH7McpFAzCV3o4c7NcB1Pp3KwNjrL5xF",
  "key18": "3VV2AQ8P8Cxg1nv13dARnoVdfMCX9JFkx3f3SfTLzgaxvefzp14m6A2Ra4hH3SbJ9NWMiEzzUmZf7ojk4umbgSCC",
  "key19": "5k8qSd1XrVt24eAZRLK6U5D1gC9WLA4dkeHamsVNfv4bbniX7PLWQUqLJjc5Egp1oCvyvzTga8ZMTrP7jLwcMFv",
  "key20": "66CrgTdwpaKn84ZnRjSfcmr4aY7inp7JvyfTqsjRd89MDjMTMZk2Kkr7PzRG2yEjDy231Bgay6yADxFhL61X5zvR",
  "key21": "5Hf9AqrtvFh83wHaLXQDLuD1bQhwKQfbSc91GQED4KxypjdUHzua5JUcLCYvCDzAo9okPNpszdY1ewsNPg5H7qbP",
  "key22": "535EriCTjKMbNsj2qyCHYx5e3G6JoHyrGo6cxgD1oqMbVnzDSPtuLfFmnLhMgiHenkASxq4Z5ZHXagkHMCqNscJ7",
  "key23": "3b4368jQmtDF1D5F8gJHXnAroWVcrb56JUZJ1BaRsXcCoZJVnn3dDsCbNKaSWnPEdvUAtUSgfzqJX17BzCVUgpEc",
  "key24": "4eXxX7GzbtCJDrwPY3RuDnbeY8AGLxDSjVYv6QxGeh49TND6ijNGheAedBpREQVmsoPcQdJtQsuJ8Ct2Y2Ho1Kug",
  "key25": "25WXJSCzeToMUFSpEybtJJRFKMkX8KGtwVCyrMmP5oBBu8njWjPSiVZ7qXRYnHeV1eTaQTYUSTopaqDJcTegsoD3",
  "key26": "4JL8H4Jhb893ANndFyTLYhznHetErGpeFmtanhddjuSnun5vb5zjL513VWqFkq4isrNWNrmSFymx2UApn7oG4o7M",
  "key27": "3EuR3JLZyw39UaLwVFVWa96hFaQLLpABsFMmAqqaTg2YT28wfLGu4eEQTHySp2ypkAkXd2BvEW1qgNVPJ7RUSGEk",
  "key28": "2hVkhcyCSi83FE1aAZ7uHTXqr6yPbDgmNauj4RYAY8KU9eMUx6GuMQMLTLpNoQZsnRkr1yBdynx1R42uQFzjWECV",
  "key29": "5btKUhRrbcKuR2snBQPUyrNAn7xzzyvGcYPXyaRMQNjffpAwvbAFNTtXC7TLSY8Svj98t8RPgg7wxn6Q9EFkvW2q",
  "key30": "5p1sea7mEg5YfUnkt5EbccUyjGq1YU4iytg2rXkzMJcG73Nt7dmShPDksV1r5bLTpYxpuZGYHUepUpqeFRrYwYmF",
  "key31": "51r5Cb1e9nmF7qtfQ1YLNqsR8qSmaSqJNqEEMsG737AYWGRd94RaJknKFS8bbadVw2AMmHZBDZYTgQJp446VFXXs",
  "key32": "5G3iKca6cs4m1syCgvoKkyWCVbu42ZPZLuKHFGmirvmKKbTZRiC6hEnJCHAtxi4ZviHFMy7AHeSF3SnH6XyHgKWb"
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
