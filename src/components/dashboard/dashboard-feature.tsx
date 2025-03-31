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
    "4DJahZYyejVUNDs4VFytfRUHcuu1xKakxnxxQE8nucKhBfM6K3nU8Xm8utdutrbynAWX5oNgrwZyChj5xXZMRzEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bq3xvrVktWmBX9Btu6NmvDGUGD7tFpXb7bACcGP5YgDhX5KK5epR6KKS3upg9ZKQGWYzveFqaEs7S4K8Z81crqT",
  "key1": "4r4RroCqqKBqCQCjgcFKM6cpwkGyVNJF9Zdsw8JaE9nnG5k4Go3r871w4s3vHYeP9hhoG4sDv2ybWEfvj9pvTJfr",
  "key2": "1ZHEHMNNnK8pPKm5ujgPBy7q85GdeovBGSAbKt8Rb12xEFPxu1D19es4WpzpM643nFpcha6uXg9zLV5dRsSRj4a",
  "key3": "3MyqicsyacMMgMqTKZJ7GPNQUgkawjRRg181aZiCwHJV8E38UtJKbyNNbsirukJofA3UXAb9BKnzoAzqAefefiUf",
  "key4": "5BWKr1aHA7eYpGgfadUmu5ZCZVxpzk3eKhrvV6ktoc7VVNNsR1JcUdJh2MgJzkCwbiDaMWsdC6BVFZ27K36qsh4o",
  "key5": "5oAkctFy8Yue3NHa5YjMBuXzP6bPN7wyDcXCniQU31HPYcULfZhryQEHsKf1EsBpFzWoNcQeP3Sq4fQwps8TEBAx",
  "key6": "5EgzNgTTTYGSdV2qPRFL1Rv2xRH8Ryjr3CUfjQdfAsCwWisR6A3G97SVmXqYcQfT7QfKpuMLHW4gFjaZktNFQizi",
  "key7": "2mjRX1quUHWkTGwi6aERYcEvJPx6J9rbhrr8zJwF1wkNhmUNS32LmAZ1Xqfo93ZX39mi7JhEc37evfWLDCCKTq7M",
  "key8": "3LzHZQ7yExxSFVfKaeCJHcPSVnxZ3snARFDberE9p2bKUM3J3S6UbeJhhAFJ6VKMxVyVZQcuUVaREZxzGNBiWPEr",
  "key9": "26DWhSn7upzSc6D1bY6ZJoaGYFZGxbEFEHxazDuptjbn3KiRShA9wiDrbfZWjYZH9Eqv71HbrkmMRCse6acjStCT",
  "key10": "xPNJPiY54vFeCp5in1WzuTHUCFVhJS6wn6X4EZgKroXmrFBqwXE1msQ5iWAKszFE76Bg8xf2qQhREe4hEUSKC8S",
  "key11": "2X7RopedASrCtsdVFk4mDkzbfFFuWwLkuB45adcK7DMC3iqZSQtrDgbzDiuGu14coiZvwrtiZgvQNbRfyg3JeiL4",
  "key12": "5dh8nJu2Wppg4mbNLLPoi9mJTp78WcjVTWKMhVUCFh6D6MFVD4h6krCJTHynJGmoTKcDAoeQTVjnjpBwvFMFqFez",
  "key13": "4p3voLBZPpTsUCAjkuzesGnJM2w2jLMwSZpMh3hQf3hqx6C2SxiY4bCKLJ2LRuMMuJ4Zqax8BSvyrcJoYbo6XZjZ",
  "key14": "Dk1fn5zbFp2rV6iXeP7tmp9kf9iTnvGxQwnqk8NNQsh2w9XA2FTeyu5ZNsRiNnq9zidHgCSrz2AM2KXVPK3X87L",
  "key15": "7ASNsw7J1a38PGNDmE1WaEUaDZwaVqPhZD9d1xrUyuvKZrZXumA5JHVxo2Ym1yhd22YdQ6xG5doz1yvDg8oPZKm",
  "key16": "5JLorSw4uko653pX841J8HS8PfqNKRLpE89sofF3QwyF3dbGGPEKtdn4RMbPfebScMJEMSgjt97rYWCkd5MPR7Zj",
  "key17": "3WTHgg2TpMfbcvSpgikUX9bdYMPzmBMZT5z2MG1sAiXqSsvZA1qkf4SGp9zSspvvChpXJzV6yrSYHMre8J2sMziu",
  "key18": "3PGp7JexNK2Um8Sy63mBxVjqTqyvgg5EzSSzmmBz2edVtdcHGWsWUFQjdxCCVmqq8oNezGoQ4XcMxAHXZPsqVzUB",
  "key19": "26HmAuXLT1ucEwBAGQJHNbCpHKnT36MVAC3z4fHf9k2Gv1WmCFeHpzGMPXXSUjWe5Vt2uv7gnBJaFkztHhczC2yN",
  "key20": "2EhPa5BUgSwFj1vpyf4Xga1D7MJYEgjPjizCNTQ4zA7cFFV62ejLJEZS18XvnLynXTHXy6q18xZBRpTDEukqcxUr",
  "key21": "5PqGvYj3mxybwauUQ9xYsXjwS8Y6FyUTk5oZ5omkCpJm2zm5nhkihtNTJFewEps2Z4wR8KbWNS1hMoEqQnA491t5",
  "key22": "5NpkgRx8STgmhzAheKmkqugXvkBytXgcZFofDY578zTHS81SgxAqg52LESMTRtJ3EhVpfe1RDwj7fQNVhd9447ru",
  "key23": "4hxJ4w8kTyVGBGnUgq3gNtUdHsoDwc9CKeqoFv8Z3V7jXKwFJhiZrSEpJwxi2NhKMj5qKrKo6ejPuzLxftxC6i7X",
  "key24": "5PqEQVFnDNUmgE9mfcSZpk7cqDavxHkfQc43Pqa1qePe2LnvbZvSgxs32U6XuzL62VeXLELgHVaZ3SeRUfiqoxXb",
  "key25": "33npAxpKPdFpwhsFvxsyB71sn3tByYQoBf6wQ3TQicJns1juJSPh88uE1WhzQxBXcVfBAtEvmyQhKSKi6mNUnrNp",
  "key26": "4cagJnmqwD98GdPA8JiRgVnvg3sDW9DfRAEk4Gby8LYKtEggRQChMbMbiDSRwNexmwRknRuBhmpL5ohMJPVp6NyZ",
  "key27": "5CqJApqrXF8yaLviTuLyGxRUVyLZRQEZxWafwpk75aF4iMA33bUxjcAw4QZAnoKJcrYEBxDrVozAAiQVR5ckTcrF",
  "key28": "57fi5AKw7JypXCp6HHH9vhDVwDruYgeRYrNe6M5tePq4dSVqLPK9BXsNEWEZxBWF3WNt9SDq47yvnF355qta15CX",
  "key29": "R571WRkCEpdfHmTmpZrjQscga64ZqWVaX4SaR19D3iywA8zKg3f8ghnwzeYm6iTAmDKvxxNFS9VLEVnDn1x8vA9",
  "key30": "2cezhQt1vCiHQY4izHzwyzQsgcWMNVGs2ficepqYNLuvk3tcHJTUr7ZuhPSF9PRmx5Uh71qTQjtTpb9mbnZDp9VF",
  "key31": "5UitvoCTHT2aru77WpcnqbNp6n8WHWQgEuGCPG7kYw6tvxNa48pevRkfLKBChD4vDS7gAupEusEdSJrA87ijTuE9",
  "key32": "42nWaKnXTAMZ7X8qBEoUGKR6dEQVtLPndWhpb4TntXHfT3Jn89zNZsAe3Z2QHmKQrGXahD2xAPytTSboS9vgoPF9",
  "key33": "4ZXDU6PSrnVSTiVgxpWe4RiBvuDDnyD2EULJ8ew69LN638GSjhpudcVBYxF3WsLd7yg5AXsGwv3WumN3bWS9JeJ3",
  "key34": "3ipixEsniZmVtTVHLaWTv3jGauPVAT3GHjG2Dfox8W7ah2WKAKrV3NcmQnRhAhbBke97HmytpmqJdGXF6Rg3Vkru",
  "key35": "44sUSH8ahJ1n7meyaB9ZkLw1T3aDniiojUqjhei2g87xqVjf97wkmYNU4qZanA4vNUvr6KPiJr7JyPeEp5rg1nK2",
  "key36": "2aWdJWJVbHy8mpgSFBVwkrwmKWTcwyFo1tRcam8C9gVS8oyWshRQPK8gmp8KxasaEVSq1E9hFUkhqF1TfLhQTaxf"
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
