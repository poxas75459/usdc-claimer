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
    "ZnBC5Q4zm4eK8yrPYzSWTwAesKENR3DvBqCbL9AU9GBAC7yt7Atm4Xet2U7gaBzHgqxPW2n9jM5M5r1H4BBCLkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZTWb9mFfLjwnk8Gd9NBU1JYeKzWXVvjR6Suxztiw4GjcPkGkXPGiVFngkbcze68KrKF31XUtpp8DVj3SCQaK2Ci",
  "key1": "Mq5pPZgecBBUHLXCBpUy1UMwP6fhJTYbP1sNAKEeM6YH8gncLr1q2w2TZBwWwx91Xy5p8qWQW16uWeSMxaamwg1",
  "key2": "5ti1CrZzop76QmE3RQ2XCBEKcoJqTnoXhHoBprJidW7Gh82DobAFJZechqptn1FppUQS1vJWoWqv4fYgtFuUFSHd",
  "key3": "3pShsx75dSBBranKRkk1H4fMcwtUcmCte5PL4W6aZ2dceNtyWrsuVj2AHheRApJy5bqCJjUv4JsXJGrMLS4EgYaU",
  "key4": "Ff2aAgk5KVYyM6Ce89HAzNQPg3kKtiPy3YqfgWBAv57XyVADPct29WjfT7mosqhi1b7jaHXKyk2Nhh1fepJhcX5",
  "key5": "2opNihCUNNGJkTdVENjdiCHeML4Xzzc46L3WVpXyxMqKtUrgChtbztMioK23W2oRV32RWjb7jFh5FxTeZyrPKgGK",
  "key6": "35g9JbjEYfT5QogMyQSapMsZQhJ62EtnwaBuBZvDVKeYhpCPZmwZyGQPBWUBn6hKsx74TTJL7RRTeEZzMjYN7Qcc",
  "key7": "64DbBFVacKmPpv7nz6XHEU9D2xtsJEyny75CfiEAfHfWnKdJB3bJioTt7SAAoewnQyJ7ZdEb65wwQdRfoktm4m5U",
  "key8": "4BWUPZDpfyAWaKg8c8Y2m9Vkbye14U3yhUX7hxZ4xkqMkPb2X5XbW8qrrKoRQCWg9gv4mdwFVWckF7YwwarhaNfx",
  "key9": "4GpnRtjecQZKb2Skgy2cfFKpa4BdLhZei2Bb1fNTnAzDLwWbMHnPXFwJHYLD38umq477VqgVuggFZqrpd5E3K3Bh",
  "key10": "2hxLH23Cor1gJpJbsSxNX4R6Va1cuQFYA3Y1mtAx34NfA41e3hQaMMcPyrfwMmvhVWP15ekq2WurVqdhZjQChnJz",
  "key11": "56FAsEVQJifAmN4PZS3b3eMbWtnDMxz9HKGNuWDfAJD7SvTwjxf6RKAyS4YwBpinoMiCzWvkPsptx98PaydH3ef3",
  "key12": "VSBBG8MELyVMe58jDsdrvbS6YtFYQZ5E3siDFA4NbCGkt4Lp7qdZGjvQFZTBrzERhYo27iYmLBwn9yzmuqoyMhH",
  "key13": "ZeRhJD5ErBWJSVJaCw2XSrixNdNwwR1WPp44PLjWqTgLckdEmjS1xggYspgEanxbpZs3j3BqupgY3xfFvqaKLp8",
  "key14": "AKwR36CKRMEhp8rgAYWL8xy4D25pNcznyA9quHjyv5xKKYcg7o82n9PNuGevbAz1uw1NNPi7tZUHMUW7t5ZLc51",
  "key15": "36gagGSK1KwYznWAXCL2A5CSyVb4tU2BneHpgKz9gay4BqRTSHgFVM2BFptAgxCVVwV9rewHUrtPS39FLzsvXnes",
  "key16": "3V5ZrRn9FperWxNYhQFR2qwLueWkzt9CEGWPK7hzRgRJUGE5XfC2JiZCVaMLoAwsdKqTegFtNf5jEpfDzdzzr54b",
  "key17": "2GuLxdJDvhLbnwwPojzaURnnUshqYh64WA7Nipp92uxUJTfdDwqB9LGyqbB6uZR9bmKWpWLx9n7ix86uUhFrcMn5",
  "key18": "5KPQwaj6PYU8ryqaPjv4bEfMtVszJznAoyaNm7oPqW4k9LBdVtCjESiFQZiXQC5B6A8fDBXPP3tDZ3aU3M2RNwc",
  "key19": "2bj2NVb2ZzHAJAAbqpTwMQdtoYy2QmegC2kSLCuDJKoKNDLbLY71wyFi64Gaeeo7trrF38gY3MDjgobogNruj7Xg",
  "key20": "2y8jUCwuKdQymA2i4gfsZZ38uR9z9S1UGDa7TsyjaWGnH23J6QDF5QjgtbgN9v2f8orJeAwG1P1MSTaXNToS4snL",
  "key21": "3H4FZnvJVSGasH34KSTL4tJSjSLuja7GT4zzgknbWxVBWPX1k4kxivPqX8mR6AipdeG2kjZWPVWsakbkAC8YUtot",
  "key22": "4tDy57MrHXBRUnQ3gE42wPGyyJvgwpEzU1kci5eZLKMcNELjdHseEtfFk8U5ZqiTVUuueS3EzqDCcpXFqh3F1Pjs",
  "key23": "5VnaweMDL3YUjdhYSrMkeyuZL4PLD6o9pc2hm3nfkjvUUXQ1BoPmsVYMpFdFWmyGURH6ZzEhLbxM7nDjcD1oDVc1",
  "key24": "3YMpKVLGLWp32yqQv6bqnhKbgL3WMRhMxjbYycdcLRACNdVaadUSLGjvtb7cpPHPo8LtyhvYami1EeahZF3yHjVm",
  "key25": "5Zy13tPnA2jqTZehHeq2HoxSL2QRRiTEFZjK4JBRiNiLQNLJHuDWaEmmJ389oKsw5iM8on1W3BbmxsikH9ZJ9NZf",
  "key26": "wzm8tcM8fyd1j82kMNJvbWZyuKGUoWpnaasXJTficmpPBcT5cNjeF9Btkzbd21wQUwip3UosvseZ6HbSFKwSw6P",
  "key27": "2S4D6KHGqsw47iCNcFDS7Wd8GkbVW2M6zZjNLvoEVAd8xWYsxkA81msN4z3RYKrSQjyff4oJ3A6xcr81tQonpHu5"
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
