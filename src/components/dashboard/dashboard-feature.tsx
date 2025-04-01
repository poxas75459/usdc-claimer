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
    "42Pf8AN5GnLDqdTsDpPV46a2aVueSDxTPKEyx3k7KAMDAgbQVhgqy7k51NCa2PGSSkx9KranptvwBJB4Rjqb23XX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yTEB69GipebPHp3HVWxEBfTvLfxKStvvVbzzoQ5gNso362ZAUo99koXo74b3Cdb9bqhfvgoVng9RP85G637LDJo",
  "key1": "2aAD1cvs7eDQikthEAWBeFTSicDqi5nUy4u9atqm5vDLMxiQvcUq1uAiD9dn4YSg8VRDnVQXXHNiycfugr1zhYYe",
  "key2": "53FNUsTW12mDT6BSR4TN8WTxU3SrphnpWrbX4AJS5ND5Qv2TPLYfc8ruYjkUVQcXGcxWYwpbo4hRj1pVkNc91td6",
  "key3": "5XzieRdikF1NB6mBgWn9BqkiabPN6TQseyNcVsZ3dsxLTwPvqZhbLCz1WFXX3xZuqJtunE1EuZDVi1NerKBgcVCA",
  "key4": "2Ea8Q3v5h5bL8ZJL1y7ERN7CmShsXSE3cBg2e26cHGRsBsV6LccHMi4Fo8HKbw9fWNEpA5jT24UKeVUicYMpbPPk",
  "key5": "F7ewgq2XHRULiHstNFbUr7Wgd5k7JcYkoGqjZvNKVBoQwLjsY4fEgtbYwDVmcG398kSCmysh8y9y3XyPWdJPJr4",
  "key6": "3AYe4gKRsC7ZRnnunJCZPWKcABgvefh8TMAto8ujB6pD4uPLEe92AWfE5iG9qDduQonbpabVZL67SWhuzcWTxpjz",
  "key7": "2AUbZSi4vTBbd8cbB9iNDw63kFcosvaaNbHTP6xLGod8BxmvRpqbuddDvNd4QgddTUmYUP2kfQ1jx5FsuXbgr5Bn",
  "key8": "ASVsPYuqYKvfcCZMBKYPCkQ84mdsswqNyMW3daUZERZUtewm8uKQEtKHb87pA5PYD5sXmvr4997SEU1oHkzfhC4",
  "key9": "4iNh9TQpPNMmSbV8ApzWH6CKXBvYB3Bfubt8RXprvHLcGcCfC3mkESELGCNRQtxpbjFco1H6jaC6nz93JjJhx3r6",
  "key10": "3zappvgauY3TNKvwPRAK4dTiD3zLb5TBwao8Nh1GH4oZYjXFiYXpMWXNqbhaGZssVW2BvJKbRgkDdRWxcdTBt6am",
  "key11": "311JKAJcSuET4uWMCAiBBK8hvFxrS4p17yjxmvfQq5WEessYf8SxoJXckQRd4DwgaXTC3iUysyXc6ke88jHjkEdn",
  "key12": "35VexmWfLf1Gb3m76ojdQ78iVAbKa9HRByAcKch6imPvUsocf7ZxqMBKCEJ4o7tcemC16MBMJksbqYPmiVNo5NzG",
  "key13": "5bFtofVqrimA9rz64oszmEVXqgWUX5qGZh3KsGkCZZHtPJbVDk9MLMEHN3y8MKaHqnm4wfy6WYvgrbVPgD5rDgcs",
  "key14": "3nFn8CdTybaz65qDdCvZp1nqe9degv2Z22By3rPXtbvHs1ijgg4Bg42ma8i9gFi37Z44yLVdkLNcznZVumVre9u4",
  "key15": "32f7iLnHLZzSoCs4Rt87zQ7vPhf6zMRcdeCJGFZ6dA13fWrak2R4or5V6FBQfDg275JEay7hXDwvJ7YkF2uGdCRY",
  "key16": "3DPcjsSsCccr9ZUqHr5hzne1oSTwPSQju21TuHAhzeJkb66ao6Gp3qahHQiFwSj22HwhdVvJg2tX3uBUqg6T9pfR",
  "key17": "qur3xKTtJLhPciVTdXb6nCWjcJttEvSPDcWrnbyPHrvG8PoTL4okwHBjQJUbhscnpEr9vJ6d2VwGxY4VNAyZwfT",
  "key18": "94EKgx3nbgbACwL91gxBDXS4DYh47ZYKeCuowKTTYbCRA8sfz4ojBgRmHTjTFxZqnDMtJsGTUSRx9C38jDXHBNU",
  "key19": "48drHefyWbqjSNjqydcenqyDEdbVDTK5RnRpe2oYsUd9NjmGPorr1948cR5qXf2965uKZSdoEtHThKgb6iezpCGu",
  "key20": "5MqaRMB2UKuUTtAoCXwGyyQHSnMdiQzpJw8hGpnJuR3uWFZJoudqMGKa9j6N5UuAP5F8aM4P533bLwEuqHi3WRMj",
  "key21": "5V8uP2kFrpxcCWCEkoooiWox6qju1zX9jYiKA2fbZFVzxWUVecBvebNc6pC1ScPupGw69oP9Fqp3XabffSGDxtSF",
  "key22": "4sbcNkNrFVBqLrwqcvXbnzJQcrZGTfAKVzTx5WfWHDEFnSRFmUV5XmXcGnbvv6AMAjewnasqjQU4JGJXcnEPq1Uc",
  "key23": "2XUWX8s9xNNHsZz4ApJBeC1EjYukqgpNq3FfEzRaWxMBFVT73DzyF4Y14ihv3rwE6huNaDpYSwUbfDhA6vxNY6AP",
  "key24": "mu387ysD6aZiT6za1YR1b5MLmtBKRVkD1nwou3kR3443VAzLmQYTNay34MHwYSzqaqKns97sGPHtLYQk4YbaKD8",
  "key25": "5M4GAgCvG6CgWbHdf2MZDosXux3uPS8F3qPoznJqgmemDHanwbEiBM3i7V4pp8igwfGHXMm22RwBGDpjEjJAnz1b",
  "key26": "AVkw5KSGtUewMK8Ny7EijWSyiNmC9Rn6RVZgJ6C6eKD4NozTHnY7zCpwi5PJyMgAv9YPtDKkkfCvdCY1JUjCTKH",
  "key27": "5VeT9yRaWjDBvDwccfUTg6bnqcc4aosNvqGcqQ34m3ZwTs3mtuHpCSujymHc64qpV29Cks6wYCS6Vhh1aau7XxmT",
  "key28": "4gi6C8eqdD54AUona4mBTsGkEHGox95wqNCYFiz1zvLFtp9EmWskR9QY2jarfHhFm4EZeU3E7BM7PifS2BzCi9Js",
  "key29": "mRfQpbE74JFqCcBjivGnYd3WEun7mTY8yEgKBXnBUy6F45R4uuPHg5TgnRaP2BZjRSxf7E6nHBdAEexdKkaPseo",
  "key30": "5HfqHchmBJwyC7HGPpMErdxewFtD9GbPe2w38y4pT291559hRAZJjjHtCRSx9xVnrjz6VayTiwtXnPCVYWJVEMip",
  "key31": "23Yq642oHY8rRH8Y3G5AW27rGBb5oC8YvdKp7sDw57fTB3tfrvDpRoGZYguC6VHUjqZ8RwmAHnTruouGvGepyy9q",
  "key32": "4iZScmykioEanUKuxm9eecBaRaTb8HjkPYvfQ4BUJGwQtRcwfUjX8SwG6UUosqNdv33bCRLCGub8iavMWxwUYmWq"
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
