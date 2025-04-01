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
    "3q46NDap939A6DSqKnht49ekjPSgpaTF7RnA9zatQi8otbeHG1GNcXavZuHLGFUXZ2VoLk3abTCdnGj96JEwo83D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EzDFVHwbLMjamB919j2qKVqyCpZ3bHNu6y2Yr2nU7bhhdtKSGWBmZvEU1hf7kEkPTSfHqRTDGpdU1vLGQaCnpQm",
  "key1": "4HdyxJhT9Gu7bmkeNcFZ6UWtqm2rXWAMLHBFvph8uAoA7X4wjUDP5A5w72iY2uNnod3texNj3HPfZzQnVPxQkQm2",
  "key2": "42Jo2VnD8BZPxWRtGZrYgR4CVM1MBWoAWxY177BZMdMTQ5vGtHZWJJrXGu7hkNDJrqB4qXbRKt6NmzuxZEpgAa6H",
  "key3": "8LAM8pW1yJRvbpzyozLToPa8Lsv23bcaSShgnKG6PMkyKHZCvoR6sPJjdm8UQ3KVUt8LzqQDhVfDMhxjM7hAihG",
  "key4": "2TGnqAyy888Lo2GucL5j9zAB9q8tK3gvRet1kjiuPT5VHbQTrvwBc25zPrpKE1DetY34sXDJCMgYLR1PfVfFUynv",
  "key5": "fC6MtCgnJPBQDH2QdxTE3ncqrLWoFNe3D5Lqk2sZiJzbXxzM7BaBDSjBdv8yAsU62GeF42GFTxaHasYSbSAAg6U",
  "key6": "eDDhFnrgpAX1rXrKkKNREgVenqe5Kx7R1H2vX6sX5WkF2BvWyF4mKdaUoKEVsL4W9Ezn4NW1z2Nda1Y3b4kqBPH",
  "key7": "2zoLLeSrJd1sjrcxpQqAdPovGJ16VbYFE8A8Pkb1xNu2v5AeBSMU73c8dmEdeVbS4fdv2AYFzuMY8ybKqf4keQhL",
  "key8": "4ErUvysj3Rrq2dgf4uQXbhSkPeEUT6iprAgYPHR8m2SKjmxFkq2wWSXLGpkhKJBpQ3HHyqjTihjRQXeo6dJf6mgy",
  "key9": "3KK5XGWoCQ9rux3y6Kmrakatq3394sodgHtzJewcYRoJcN2AowVFNDtrVkcg2ttufN1wYv3Dv4fUdQb3e7atLU8u",
  "key10": "5RE5GjKrjnrYdUBYW49BX2wQaFKe5qhabFopjdRGg5U19hGm5PSAfWQTsqBvtVmuFhdcdMQWkXAQaivG48q2dbjk",
  "key11": "3KoNqJ1istdSZm2ZWqqvtwoCxgpkvr6ywtH2s9xiGezurWac65LyzM2G46FnhnK8bFRWYwgZyrDnSYcPky7PpWUg",
  "key12": "5JKKCMGYCa7YE8cATo7e4dVizbnjkwBoLk3RDLJ7b8LcEvgwutTuBz2jPaR1yBf55s9Dh41DpnbjfPepLX98ZPWe",
  "key13": "syNRMojtAZcBnS8gDvg9nwK3xd4P5aJbnS49GaaqB2J31ok9hogkEWLJqjVua1gk2ac4fzw1yt3H9uMW8D9VdBk",
  "key14": "4x2MjPXEowHmcqB9zz5Ug3pEWUReG3hAzEi63hQER5qV6ECXEm9pgyLkff4q8EqcSibvGcDaGvXVBwMrCWF7ejL8",
  "key15": "2XgZVysFYhcaXyW5Hdy6zUredsrtpvLADLdAoXhRA2xaTvSv6W9Luj8jR7ZAe3bCkjwKeKgjCw8RPdWdmTvU8ttC",
  "key16": "4n5jBozLaS1k84XqwRfQHHAvpQf4vGpb6qr9YW8xmYXC3LnGdfmrPvayfevKyHXk7aijGkV2wFqNuCJwgeSP6sHD",
  "key17": "G9mTn1mCPT3AWSkrNeMHeXJg9gHKqiXtaeHCSSnD7HKqi9ixcjQmEn82yzUrfeSYJGzDqrJ2eowgCd1px6wvzPq",
  "key18": "5KmaFVLG4sqmnGwTK9uN8haZ88sCDtKPoWFzqhQgLjSLZ7xtqEaFzfkH5vv9L3mPnf57aDDi4TpaewmS8Xse9eiw",
  "key19": "5nHznQxrRDwzSYMtihkWd3bqXdj3jxmxzi7WCcr8unJ7GG45inNtekrAWZFWtTLjS2ExwvzFS9FTnwhMPzYWqWVt",
  "key20": "4cMhAysEGf9Seg2mgPB4tBhYSSfgpdhrdM9LtSjZY1PCu9YWLeBX2THQ7ZvcFX4QBW1BP383RapFmMfCoQGP2Jh1",
  "key21": "36iuc4LYWTxmSTkLaVtojiqHyoWk9hyCcFZRXaELiD1bmjRY9DBUcXhyqYqm3pvZcTXQN5pMm6PQCZ9iY9y7Xv6J",
  "key22": "2YBBuMKBQaeM4cSnhWwdGaYga9YYw1n5y2SUPVrQqsVpvJHpar8PkxsNwLdMtG2pGsAVBBdRgDTBHhd3iykWi2aG",
  "key23": "5ADnVUmvbzLoSQ3HNFWLkt6DWQRB4pPwSXZbbM968jYqJyoYkVhhvUT8juYEuDokxEQhJAxjW1ouUkBZ6jF3m8KS",
  "key24": "2bs6JH31fmLCdLrBz3gnByVBTxHkzRNmY8qXHmUzig3QMrAyGXnY74bUzQcPkEasBtGigZ1sJCxd3CZpyLt1PdTS",
  "key25": "3Ry6v3LKrtuhkMTbqM9Tv5XyTqNAVhp7XBYNSdaZJMKRyMAXo71w6VMkXEWneqEnW2f1APyoXt5ZF6WiKmHyLfDT",
  "key26": "5xBNX8TwJUpWeXcgcDR7QtRsf2X3us2Qajt4FujRiygewkY5FsE9smS1oQmihWtGkMwpiWH6o8ViE4x9Qj4X8TqZ",
  "key27": "2UTBn9HvoiYEpiaXAVNY47eWLUAAf3v4UFb44wHTL2vPcvxXD6ezAt56kYj3MbnJTM8iAtAD5h5VENDyo3FWkNrk",
  "key28": "4i2eKJMKN5vfrz6ZhDc8HhXmmshiceiogBWYYau5a9fxyS34bcwio7RaHwpqhvBsRMx3D7uxtGYUTVkNkZ2kkxSU",
  "key29": "4vi69KKoVr2AWzuVcmDS3dQXikzEbJ8FzdStYsbfuyktYq8PGnwm8jJxCc5hncqsFXVxVJdCsKQPCU3xWhrCUGVM",
  "key30": "5xcctmG3o3w2TKSuxnHfcaoRw2K346EXPatAoTSbNsRs8Ad4kFWJz1SanWS6n6JsULpLDKfXsbGQdqezTSGtmQnt"
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
