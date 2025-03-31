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
    "3qJEvM192Rv5xFdKNpcBbvecLJgjMbigXTnuQ8yPYJiLo7Sx3KvKujM7JPv21RWW7Gywh2mBJ6jZ5gbFeiuK9JRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5md983JNcMe4Eo3kxpVdhweJKD3QHWaNg69YyYSyt5VAZEn6bzZkRkAhUTkw4SLqrPejh6bpXCs7ZjRCkce7ac7N",
  "key1": "2hP558f65SbxkoxvqbB4vjQNvXrzQCoVtJAMTk3Vs5vTU9vijZ7NdYt1mfFuddVx3WpZ6gFjaQHf5zVXpZ9vCCBd",
  "key2": "43f8HTjD9kAWcAoxCRHmbtdhbH2HiyX4BEteBdZu14oTWkYwnx1h5WeukDJFQvL3GqkAthoGjKDUtsz5PmTTsvsB",
  "key3": "5WchBGAi9ntsHP9hpSaLksFEpxk1SCmpevtWwbKzz7S7Ex9tAU1PctANxSKzbTTBnUhLp54aYQyxqJ15uiKGmVYt",
  "key4": "FVvVxtFa4vcZ2uV5sxexQUmPvRj5QyBt5M7rTsP7P8YKnyEegCVCFRAXjFjKdbDzRdbCst9Rpn4WS7efTC9Tav4",
  "key5": "4BKNxRReJdYX4v7WzejMEGEDuHtAMKbwrtkR84hfkbE9vR4TPeiFXUCYZmTrt9gxQLBebfccrF3uxcsncSjsHgCX",
  "key6": "44SD5zc7NSxAH2uZ6b4ZVm9CYA9KELy8LWtokav4tdfGbTmzoFi4YbgwhTy1WDSfQxxeS5CtTvoT5CoJantbmn5k",
  "key7": "aqXx633jdfqYmnjj5Rpb1Tw53PgBFqEQPJrgiK36K1bVtpbLDCJUw6j57VobWWqL7JnRtXsVW4iZgtHdvcj7gjM",
  "key8": "Gqc7XQFbwe7LjYBRmw3kSvFzBmV7VXqkCUPFxqWArtyDtyvQEXb1MeUSkPtiXF9nzMyHnNoM8qVB3eUWF3TYCYY",
  "key9": "5ZFJQyv8CtJg2tGP8pGBDaiGxo6xUKmW4KBLDcVhvAnLu4ykYgQattLxFmBtW5ZbcAaCGviqTRDEENjP6AGJD8kF",
  "key10": "4iC36yWEdeSwyPey8UcrSt9tipPJJc3g9uGui59CXaPxCruTqup8ZuQ7HEaURbUy9Jr189F6jDkvpaQWNQZjnoRu",
  "key11": "4WNxQ11fr8mAedcJrLvacsySimCJTmpf7RDJnkME5tWmcVYDpiVG5NsK9wMn4M5xacJYusZJUw7yZHKzVWm7dz7H",
  "key12": "3fCbgfvrLk8booeHoUuJj4pcEFQ2zQu4bpMo3bn9uX8UAPFqKFrgX9S3aYdEhnNgoo2FbZs5VkKXGH3qDWJoNQRb",
  "key13": "4XNaDWqCqkuqg7jVDMr5N5wrbAYVkGJLKcNdBwymL1qc4UCMJsF4xMPtdjEs2AEDHKiNjtv1DaErEaY9fYfQxm8J",
  "key14": "4xgEEjYVeFRt1PKFYVyf665AwnE9hhh6RKFUM4Ty1dwXvoMbgpxS6Ephe8EyEySWYP2Jgck5LLvZVp4gCmop9bAU",
  "key15": "9R3V642wiqVUgZEu3i6KepX8hZ9jcf5Xa6retaHFLV3BoCpWeY8CE4pLMkqsdRES3W3zbhF7zz2KKoC5QRicrLC",
  "key16": "2V4wec17pax4quo8ejoF3C322zsQZk4gUkPZhQJUjrAsQvnv4D6d2sG8RwmFwGob5ho1iwP8GW4YKeuqSWGfRJBJ",
  "key17": "ApX1c2JpcP9bfhstxgVSw6rQfzmSVq4sZKfHBgpVhY9swnAWxvrj2BoM8fvqdwLMSBRArE3g1YCmpdPPBRuP2fr",
  "key18": "5YTqbebtJKPLjr6gYA2uu8DraAgVQxBuQy3BmwiKcWScC47fvXjxCqtzjEg1ao6v5ZyAC7iMfJPg3kHRMiR7b2Gj",
  "key19": "5x3qDcC7nWHPvStW798TAGX4YQvYtqjBgMo5UzQvEKAVzb73WkadQCknZmysf1W6ikQhcbdv9H8keR3vPifPix3i",
  "key20": "2fHDGnjNL8nYqCjrHbLug7zNcPt9WDHYU5Vm4MpTjTqfDN1o4Mqh2HfcenVPirxTTZyD9ZKmJJqiVDnpQvFKdcBP",
  "key21": "4VYCpzptJ1NhGUUkrBr6K84KFrWu79VBYegSBTc31sfEsnsL71pvAATLYbLCtxaB3NL4q8Q4Bn4WZ6C4FnmYPUJa",
  "key22": "4ivDnrehxhrFBkjsGNyRLBaEXab48Sg6RHVp8zYJrfFFZf277gExPipYabsxxzLsyYJa8auRoSYaRhVv1qphkZ5",
  "key23": "3sbG59nzjwL1QJFkQXUJpgibCxEReTtWmEBYjMLDYo1hQG3C67PPxT2BHVHr6c813VHkj8xNnD4tVcjaAWbZSoX2",
  "key24": "5TBrwpyQfRmgTbPX7bG2Fgciqei8eWfsanqwnnNyfpKZ63BUjxAGeFuon9erpCMX6cNbRFLycYz4FWKMK8zkWxd4",
  "key25": "4Hqnjcuug9rWrWYWSsEi2a3SgmxttUBVmsRHsXG1hr9358aiaHAuzEapKYenApaXxjMQj9KovdrWt3BvJkj31CUX",
  "key26": "3ebDNtBqLPBFwymXhR7bd4ExkDc2EnCYrHPumbtX9PwtxfEt3Qkp1e3edWUmDppbooMT1nTVK4vLXx6puERBfoxW",
  "key27": "4zwJp1cwqxzKD2tcDEt7STauUTdDNMjVgfc5t4WbTuqTduSydQwJ8zYiwXJUx65PY5fY4hY2vDkWwCpJiyazv4y2"
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
