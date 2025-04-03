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
    "2cy4DjsE1gCGoSsJszDPiZ7nAxjJ6U1a9wvkgWRjJqTe7PwbkfFrTQoEhjLoiQh5peH4UzkURmRJH5NjgYA7mBmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hYMmXyvnEdZ2X6C5KT9jfx3y1uamNLxuamRJF2uM1RrWLQwBG8UwKLVZmyDeeMN2xEKQeVsDuGhU3jyAcsKbrNF",
  "key1": "4wh12Qp7AUw1YFnoTX7LihkLrfU64HUmXSMQZ6eyPVpCJcr1ZQywztpPHv8Uc2CvwJzxn3GkYjZ9iYWrPM4hV5gP",
  "key2": "fPaUq8traJ9LpaNEogXAcqHScVJB29fs327GfZXjmd4ak3HjaTSATkKYFTRvzLcR8q38ohWR9oph2zHkF2VYW6F",
  "key3": "fSWPH2SYtntpVHdmhvewB723iVDMtwvFa3bvBD7p2gQUhbCbr8obxi9Ds4dKhY5kkLU89PnVrK1xZDLjPJFUPxL",
  "key4": "26wvXKxar6fhDT47UUzQ55AFjmQ8HB2wjf9YBncDDA3WaU2ZMvukTuKtWMdcJMEcqd7jRPtD7W3g8Rcmm1AM8izz",
  "key5": "eJuo6iQMDbUPqGyCKq1pHhAXRuyx8Rfz4Q7Tcv5L9LuZAhqDdVqhdoWFBU1xsm8bn68Jsay89LB5SUtBBu6FCgZ",
  "key6": "4iUpRR2bexKYCzyQ15JvSAbSLZGoTvhpSGVcPgfPFDHy8oUckVQCZQy1N5CnkJu2otVgnqAqt7azhGBD7LTgEyft",
  "key7": "RLahYw1fDAMH3sdeS2fRLE3oBBy7ZuDux3pRESUN64pNXRb6xBDEhZD3zyja9BY3EBTn5QBJhiiMQEaCXuSYcZ6",
  "key8": "5pp58UkkMjki21wfQQZNsHxVp4s39uQYBWFJ6pxDLuXQUnxkTeGopjqXxNXLfHcpvsVusn8jrcrh5HiePhUTjpR4",
  "key9": "ExWQ5MwnDtqr5hYkF2xmia3PABiLTno9y2z7RVwRQQcerXBYW7wU82aU8x5Gbj9Yb2gRgmhD1FDCd6JVYuCdCRi",
  "key10": "3Xx53QExHvAZCdKG9RqdAxVhRvAodSovCijrLptBEUmr8PQVtS7zFzNvfG6RHKZbdZZCUY7twaK7sBg6Lb52XvF",
  "key11": "3ymxp5eZmG1pT5k4tK9aA598rv1fAmgJbxR9RTad5YSYCfVTb8yx23pjEt9ffecD6A9raMdovpcxSd8gWPho46ex",
  "key12": "4KhveUq4qZ95MVVg3hvm6oFnsP3sBGEVdKURjGnJJyCzfaLwNdH2yMv15nyZB2kpuBw6oYdRG757NjgicNpdwc8y",
  "key13": "4bGQK3vsjGi2tUzc6UCto8yQZHgFHFKvkeJ2hPAELamFk334znXd3Madz7sogY6BxKbV9fETVHaF3dTSnU296WHX",
  "key14": "5cL2GjbrRM8SwP1fRFnkh598or41eN3hhqpiZoyTkuQy1Am9rVwJcBEeKfPjDc7KzLVJ9hjZzCpaMDFMdp2NeLNf",
  "key15": "k7LHpbFhkJYR7TsZnp2mYPnq5fdV47nnNFRaSwMRCcMZ7n99xBVjgQBgnM9RYgLPzahkdN2pC2duGE9Hr8sN7jo",
  "key16": "4wdmhSn1W35KuoQRrpXibtpk6tH53waSZHGKfXqPjbqgVQ3u1UPUoVU6GGcg8UKPQCCNcqCosP54vsWMZgkx3ahb",
  "key17": "2cHgNBJPC75gsjxbvQ18pkeN8aG1NYxhWaPokkLRqaSPTqndYHKxs77tFfgwvacXEVRPv7ZGCHncqksuM9GKoFYX",
  "key18": "2jXeMkjwEBbbfm6wnjYW6jKLweBBEmP68r2oNwC2Mzv6YqMmxzW5PoGmWG6HaETZsy4Q2xGRPQgQzpFiN4pqk2TJ",
  "key19": "3gGDFaywByQpYr8zFX3KJknaewxoLCB8PSK77gvvThaVZLpgpBZDjJR1BDqZLvsB1vbnZjcVdHaRy1HH4ybcd5ke",
  "key20": "3TQncjCLW6hv79jSvXGgkhkCmCptSuZrireTpewupU1YDUzjUtuKZuvkG5DNMacMW2mvJiQ7oHWBqurmd6hiX12a",
  "key21": "2o4743fXwqymjCqCHGEaVuqQhHR9gTkZvkxKzhGFgGBm3YN2xRCH2gKpYWwx3tknXrL5Bv6iRYvhUp1QKSWzGtDJ",
  "key22": "28y5x3oUN8E3Ha8sR6MJxDwsKHhqKQWRPpnFu6dTXuqPJmAecBwubzAkfKGeuhtaUUxkQzFnCiPWRgsBTrNtTSRG",
  "key23": "56TSLpdq7mVQABfwFsEPSbk7jr3czaU4KyzXRMSJny9X6mpSriSyv8FCxjB1ACwp5Wc1guGczjYN8CG8c4ms9TtW",
  "key24": "4qoYZnsPQZ52K4sidBsc4CmwChmNETjBGJKNrR4rqgpdZNwGGLNd8CoYXxgN89hzqwa5xdJVQgs2BZm9Zdk6uQcS",
  "key25": "2a4nnXKk5qc4KJN5EHf4Q8sGb44F361wYybeU3ZnZVVmygLY118epKG9da7q6bmDJ4y6u7WgPXQJAx6n48VqJied",
  "key26": "3N21ws1rp5sgfreuLL8ta5rocRje5QtiiwHXEJEVi4fvwupagazVnY5xTqsAS77Zng7FQFLaAADBUHJsznTPaiJm",
  "key27": "4YGtsXTggkreJH9La6aF7yRnX5KTLHuTtWNgYmc5zfCq4XstNxY65nLp3FjEVoR9oS3bvE25YtBQqfcfuYp3Xhi",
  "key28": "2f6STKCS8o6eSgtWg4A7KgfPLSs6C4iiPToBMZcyXNagrqWqu1Xb1xH9zjqYeGSTa7YhAbnV2V1PSn7TRbjTfPT",
  "key29": "3jDy9iS7mr534bJ9CTyXjfMvhkBb1NH9e98KDnk4FponcAmKdupVKSg2nAHE6sBM4K2JfgBJ6sXxCLSVZ31VAzhD",
  "key30": "s3ASmrWDHcRKLK1trNiREUEPLjJvva8tCYDtGUrcmbcij9EaccQvroiDQhXKQzbRN7HCP4EFTRZvLYApgq1S4Cy",
  "key31": "35962qATwCc4yaVnJEkm74D1NdqoFAMXTZ9vZdK84QwsD2BA8v4FVirfeErX12yArpB8DAxeU95bLiWvxntKQ83t",
  "key32": "51azKWzDCDnpcnxsk33Edd54NJRnwVtcxxaw7kcxRciv23ANxGBM7uoNHQYM5uPQdnx1NhKfExvgMKfMoXAmFP7o"
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
