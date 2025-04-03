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
    "S1r6tjsLjtQNiPWDtZ6RoPBNNdb5G4BS9BQYBdQDhyiL6oqsPHAh7VTwoXQZbqaW2xY87SajPMpGcHADRzEWv8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51a6w7XRqMWdpK9cVDt96MsFxAmtxd6rg5mKgBdij3Hfva3gsU8FSs7hjLBfMtnJ7wWsTArkcxrUMNxXZ1YuVoeY",
  "key1": "5CWuWcnPX4UKCvvDwfNK4ga21Cp8wPe5mZz8PTMos61vqRXZ7ceVtNcKoTv4sUPg8TUF3DcX2vBuSJWZcmhptRUo",
  "key2": "2kWAuLg1zuxKxNcvCCSeuuJV6HdsPrborbUVpCf9SNLd3PYdryXiCiBvrE4H7TJXNphxJFbFvS2HKXA8d16SmDtQ",
  "key3": "5KYvrBVp2VaS9KBoMQLeixCRspnG4CGABwPgxtkLXjY2ZCa3gmt2M1SQxLtWYdDrSvFMFoTGBu8hBjpQftEg7CPc",
  "key4": "JcxqTamsW6dBDYUu4z6air5xV4hqnKRiQCArBoeMHnTSxPhWx9qjzwuMWDqnFuL8TUmaKHD6SpM2dT6CQDiSw85",
  "key5": "3W6wQjPPESijyVgfWVfLPoeQG6vSQjgfnKHt9rniCPdSvZ3y2Uq9U7UpkRLzhNQvVNnvT6unAeGzAKTKohbzrCqn",
  "key6": "4Dhwn9Q1wd5CP4dP4mSHQubYq4CncUDtrPDNpzfuPepJBkFL7yqSVEwCdvUG31UuJyQjJUngpHZccUx6Dht5kAQS",
  "key7": "r3ZBjLZ698ajeqAvw6aPkj8grSgaEr156H2YSqrUm74t5XkZa2ip5FAvNarVsqVtAL86CjVGSi58gf5aehYEFzt",
  "key8": "g1gAXLchbRJavvbLE7KVG5jnAdB7p6KLUXA1oaghaneWUQKDDpzmiVz4XwU4tNEU4BY6QfRfLoe9ecmD3u3vqGW",
  "key9": "2TaT3UDDXU4pAhmSDh7EeB5iQwm7H18NgiZ5BubvFx96bxUwTDRi54ayZ82BkXSDnkP2Rrh22XYsGXrQwLcmYoXS",
  "key10": "5S6dTXwBnYavfV8CboLX2kPT9PiD23UdnZXdpui9bAQ9NeVRvytKHy53PA3XkawEn34jyQ9tXw5UfZTcfheS5T7g",
  "key11": "2HVLnrVRocVUCQJdNqr81t1zBvu1BCufheGm4U86So25oDb2x5Jv6h9orAJeeSVbJ1mkCbv9QoJ2FEcwHGAyUSB3",
  "key12": "46DAgmVUuVJCWysshBMH5XGNG6Ae5eRxDgRZxE8HHmE7t3HPMD5bmkyh1GrVFoxxdzR99R339eUFJ2Fh1V6EWP1w",
  "key13": "2dzdG4KU8J8paMCTyjidDGA49WvjRS1QsPdkHjscQ6MkacoHvTv7Dig6a5uxHPEYY8QSbxRuhCjFu6xATq6wnL3r",
  "key14": "9dP8KnjWHDhy6VbYgsBg7JD3ya4osSGrcb6FEr7fzFvPZC6MXAmucxeiuFNiG7BVj87k4oyWNTYRaGmq5nJhiXq",
  "key15": "4Rgjh5JhNLR8gPargBk5PEUM725hxdmxrYJVMkvJpFFQBv4GnqpvEosQX8oXwpjaDRekM4quM2eo1HmqTTN7cFb2",
  "key16": "MqgdGC2MbkWWtP7LWi2gwAJ5UCo3pETdBu3gDjrQM1tHuQEdAXDWLWLfZ9dEAtuLzgWbEV2QwKm2CowThHdYR6k",
  "key17": "2ozrF3GZMcSuqpsp96vvZmVTABrGgGkGovvEWraBLxgPSkLAWzRCyixSE5io98x5RaiUw9Zve8YYZKhxvNE7Kby2",
  "key18": "2C5w7fUnFi7MbV1M3NwtgWkmECBVegeCR3Hu1mC4Ev3rX1HY7AoEXAb1K7Ysv3wmUhaKUVVyXH2seysT6NwSwzgb",
  "key19": "qJEnzbNKctCbV1ZsEMxYjnXuo5pw4u3F1dBgu7J9qvKbmw9gp6GQqTHFYC5MkuE3ffGKg2K4N6h28nyd7NtxDrh",
  "key20": "475sL4beZchEWh3VTFki9gpAcR3Q1t5QYZARFGzkBtKzkFFsDwGHD5RQBfWGNd1hVARNq35HkWhY5h3pVw2tPsha",
  "key21": "38g1VHsqmYysrKzC6Aat7NL89gQEkU5Bcshjhuv8E8oPErJRf4qsmwD2YkNe7Gx2Zwsq6oJhfUYveeyhZ5tSbkqX",
  "key22": "3zwfkGQRgwrkMtdHxnikpU89h8dYJoNpmWV8Qk2Y8MwhzyARNQn3pXbgp1TfXSxgNdsSpwiSC6oQ6CfQJpgJmNHK",
  "key23": "3PXYDyjpYjNFhcFhEr8CQA31frmfBeP6ndFtpNe31BtMVqMZHAdQ61ir3e1yBAVkaR8aLrwXpXWVWXm2nmD3DDQ3",
  "key24": "3US6qSBkN8djHDic8bGdBPg45V7JiD8dsGBwWfaJ1pnK1jdfLVNrDD2bYbWa1ctr29FDeMcg6b6yGQeKZAS7BxRU",
  "key25": "D3XvWAPNcbGhdWfj174ZkKVfJyenNUaRK9tRtQCLTf5HzbGxbghiBfbFpDFUmiUDuhWpB7t5nbQD1qrjkYFG4KS",
  "key26": "c32dQmWAn299q67NaxvK85QdnLB3CzJvxpQpNdTW22oGBGLQYg8HXA8Wy58CQPTz9C7CZe92ea5kw8bKLzmoe89",
  "key27": "4HgtYyjiXtRyAKCHR6ucP7XA8gNEhFNDTfN7zfgC4oLuH43RNYLvPkguRt2V4mchVvnG1Y88tVuitv48AuiTqPQ3",
  "key28": "5g5sPqCihmWjuggfdpYRkFtuHjPfvdE6CjASiWz3M1qnjF7Zvh7M29WHKsvK6KqJJWVsqqNnuuLtysmGxErAC41B",
  "key29": "bRWfQECouQU99uJjEF87Q1eM2TMYXfnwNPfiU1yNeFYEWprNeT2nbbMQW7Ux1tFY5Zw1UwB7BvihzKvQZ8Y4Pqf",
  "key30": "5scbodajha9cjiwx1HNDTvWWk9ncNPtJLUTGtyoRYRCbrHrdH9zTreFHxYk6HprvKXYJQ9AiNxXekd2cHgpj6HQD",
  "key31": "5q318D2DhZqY9LPNDC6XeUCvbKWJB9WfvGuapFT4B7B84DFy9Bz3a7yR4vCg68kvwZj5NLEeTX2Ej4wkRRtwzBct",
  "key32": "2FxufvXrqCDsPjLNkWpXLHyNj4P21iJNikqsP8JcrceBafqphG3d3by9aBpdhAdmYq4ex2YnGfeBTzW4ZpYonzfX",
  "key33": "2Red42eZAiPvMZaADPRQHQtjGRnJ3qmitALogQwMpaPFJjhWzSHbPjjcJADXqh85CoYqrETtGQpEfVwtkrZNuyL3",
  "key34": "3LXWSs8sFvypTBjsRhrAS7d7uYvbhF9RuSpWSvYxfjbDh6sz1QThuX5ahdzVVvpnmUxqwNYpY2cw7zrNV6VTJ77v",
  "key35": "3qhzjMGSeHyWARxwz33UmpSMzYDgM7y3PFHfuHmi9bZ7ixrQeRLMjg6VwFa8CZVwic7qnUmsXTijX6ar9u9DRRQo",
  "key36": "5aSLZnxv6tCLG7gEzYCLswqDnx5bN4WyZ6hMRxypv25XwRzv9bUW8AWLr9x4zpmM9MUw6rvFzST7vkABpZLiVv2L",
  "key37": "3F6vSsA9GRFdif7zNhsN2MAr3YsSKkzLSYp6x25WXHC7mwe5fm7vGb53wtFwP68jUQqMXozZFASfVWAKMRZTQGWx",
  "key38": "53WsNPc1arTtfT5dAHDb4Mw5ACdQ72b6Eqbf16mm8YMDKpiomUnDrRFigiiTZWVVhyUztn7TTB6nfXspgRc6EFTb"
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
