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
    "5xH2AMSDKGEVw7K6bSw9rsm8Vyq8Gt8bn5GYWoZi2mFhHka4xvGRSUNy3bRp2prKcLKVTTVP3QpCRK3Ehni7wGff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "965VRZopxeiJw7TJwcm8Ky64F9qwAbrsgWvNno3bAFVCZZiPoyiyF7BZKtPzbf4cpvpdaPoFMTy73Efxap3XoWW",
  "key1": "4CLwLUoWmopmei691LcXP1S9yfgZLgtha6RuPLCdWGYVUjf7YbCawDtiWikuyp8PVR5RSzsYfUwLtaTyGRjJj1tZ",
  "key2": "3m84Voajwd69mSkKimFpgRZqkLh3tDEMHnE9pgzNi2nbi55QYtbBreuTBmg2B7yxBkbBMwV5wsKgxJk86PKjdiJW",
  "key3": "2Qv7JyDE41wBYxGWTZAe22BRLGUw2y7f7WWGkRH6ZPTeF164MeoD8ifBVF45BRBoaaFpbiDceYudSRo6X1CEuCpQ",
  "key4": "3o6jUJUqDjAnytM2RFt5JT2vmUqwo8kgqd22tHEd6eHRAMMbFf3G3vyfgNWAcXir2waxJ9rTJHhZatADDa8r6HD7",
  "key5": "5iQbdadNA3fejryky4so4ubBE287SawBLYBhosv2ruddBMbA93BTnnh9iUmYEXJNYTQGwXDrem29PrvNbLG8HTWe",
  "key6": "5fWUyhx7kavJQHXBBBwvMb14GgWoxY8ENNeUHcXdApYGGvGmWY38BLJRaHGAjpK7tivxLtzWrhCG68AWi7XQX5ge",
  "key7": "id16b2rLhbfWHGwZWoQLGbPUyfa5cVS2C3TtDoNwUNM2kL1QPCefnETRdMDeHeJxDMxxjAxi4zaoMWHFLjLUvEB",
  "key8": "qg5iwMsB6cRDGU82xYiwf3ZRTba2neBs1ArwqEMmWv7R6UfBMZGLVxHpBWdkdDoPvBu16pNg6YZvaVh3DvUG7q8",
  "key9": "4cvxNN7MxVN3KLKsMczpkyAVWeUhy1LmEJAiyanT8J85fFsTUSc8hGvpn42BN4QakvXdxS1wpMvpPi6ocZEXDc7K",
  "key10": "5gTuVhy6KXPRkXrAjsBfUEvWZyRYZibAm1f8meytWXiQh4emhPKZtH9tp774LtWVvMDqFZf27ZdGs9r463z9fwEy",
  "key11": "3ENfx3kkdGcawWDgwdnacMZ432LXakuzmEvKLn9HTyUoX25a9x4vC2gbjyMVGcw4BUtkBcGsWsUWcCcjNumBsMd2",
  "key12": "3E3L1UTGMfPXpWKVJjAgm3HyWvFtgxomA1Hp26anP2HqW5qtkYD1UXKgcHjEVt21dsxCeJSTPtZgBTJNdRfDMG1m",
  "key13": "24N2ut26nEoFjfXFKxbz2DLz33x8HSCS5d1LBm6YMHXhd11AKfTwanfU9Xbrzh57aq7hFTh3qGQsv1388K1oNQkA",
  "key14": "4o1kjA99AGtqZCTJyAriyGUzvtuQoF8DP3HzpWWJNduSPzFLnz7FYtWBdVn4SFChqJHtyzbToPbUNB4QxH3uMFCw",
  "key15": "24Z9GT3NfSTRXjcg5RWpZg4sXEh5GW2cRvCg4B6APNKZj9D13zGAoEjYqUGTnkURAtJG6sChfATEaY5HeeXmQyFV",
  "key16": "39TFa1WHAQeE7Xk85dFSmuVbwfQNTNuQ2D1Rb3buYNYxSA9eaXLt9AqkT5dcfLP67EoDkETVujvdqrACX9o649Wn",
  "key17": "5P3qU31rVp9AEcQ4QPh8W6BxJPsQqc5FGJzU6kYdGfX4HWrtLeHcZSvfoq4spAHCXWpgsy9fKVZFpMY2pAhLnNHP",
  "key18": "xfBHzdv9qnT2ZvCjRteKGjE9z3enESwTjiQAJpTtWvd3ujxetaAfjYo99qZ7GGMx8fp5wYFgqjzHfhRcbD5gzp2",
  "key19": "2gKSDvAL45nzbuNRRX9w9AJ1hHMh1hA8D79fvtnvicon529FfUTU9TGbJQcMHrqKtHhRHRfujKLiSSbMMqYDzDk1",
  "key20": "yxZjZsgD5a3RwzZ8fcuogvdFXCPFMDbC9hcTpeUTwAbEgTg6vFR1K1uwRcjb4nhh3NQrkMWUX3AnchFGQsqMcW4",
  "key21": "3ZAKykK1DbSwPe1BB9y4XvUwUr8MudHLBepyhboBbUzTXi24frhnZvVJRotzvBJuYMD5K6bbxp5e3qS9EsG7sp8E",
  "key22": "5TkUcQb4ji8gzp9tCVr8bQvhTbHfHkz1q1KPxdLj1UUzTt99xKy7PrTzssMSKa7uWRdfzeF94EJGtWzPyDFJBVqd",
  "key23": "5VKL2FW2FsqqX7qYkJG49P4Ktv9uDeXKaNFUrDDjWLMAxGHzs5davmzbaQmKj3J3N2yPwttYmxQvp5qXHis6U7xv",
  "key24": "uNBPp7LcNvd4rLPQB2ypdcfMQzFq3BVaKwkMzqGiUzb2dkuRrryptv1Jz5svB1VTVUeqAoDhkWZXLMW7jgraydb",
  "key25": "3xcgq3xq1qNPesg5uzWeHu2UuN8y78Sqc3jtvhyHZuFTdackybmtxqoXpf56Y1JiS8PX2iRLiEgNuaPSC1ufad1t",
  "key26": "4pkBmHf8Sprf4DviwJ26yVb2ipv44VkPFfoBkqaVYZjd8w7MtMaDq1KYie9PhtbzgNTTvPVdptLenwhbjuSbt7Zw",
  "key27": "5K6C6gL6j1bYQx1P8jHkxAbp7o4XJh4J4PChr7wpRe2H9ZEu6tA9NpihDUuj8zaFTsDxN86x3fD7MvkLzSKxGfzA",
  "key28": "3LfULecrGu11YWVNLupdb4Z6Unkpo18Ucg7g9CQfs5RbdmZ77TZB1aikW44nUr1JQGf68VHx8Pc494iZZ5Xt96ph",
  "key29": "JHNBaD2dPg4RZPNtdvUkdr8w48Pak8ZEbLXBD482xfRjWD89GfpMG3RxuL11Zs7mSiGYsss1ysUi2rQjJ7eMFk2",
  "key30": "2RSn3STVMhkikzDi5NohMSNZt9BKFDrMTCdeCftJs9EvsB1PRPNNvNcbJAr67Ja1cY3TJfA1muQJEMqVGNBTwaM8",
  "key31": "2cxPaeJMQzXmZ9m4G1DmnhRUp3P3uX2TzjqmHGC9EYiwbFunEj1FcHU7yHJbY5uxxSWMvZR2zTHUQ3UVDe2qA1bq",
  "key32": "4E11mTaMnzDPEKnRbaGAfFmmPVQJtuMXk8pHa7JshpgNt5o4gt3oZYAWh7HasgBsdkwDzC9gmKAuvTxgJbc9ZwNy",
  "key33": "4JSADXXPRMfcCDm4AZq75Yx2qtarvaCtMTh2mfXHmUj8tMcAkKThKoC1YUvPX4b68vzhQhcg2CJK28YQRyMFL2cB",
  "key34": "Dyr9ysroTmfDUY7RceS8RJRqtVvJPkhJyQpneBV4o4Tp1CCae7hw7h5cJxqQNCPofuFEZa6jtxoikKtAHKmNT5T",
  "key35": "Khnm5439cz4YgMeJuo13mK2yKCLsaJ5pu9R2i7y56zK59ekxbFBU7e7FibtU5TzYHqinJDeemPHFXTVYugfwHaW",
  "key36": "17NE2DhxxSEYBmJU2mKnSRyNbNUt88efY2ehM9K9wGwy74n4HpUvPEmHYUBiNV5bseRF5AasYtFonDZawd7ebKF",
  "key37": "38ZcgDjQM6DfWZLn2TocBuiCySmwobga9k5HHo5q5G6Jg7B9xcXy3MXmkFKkZos9N2VCnqr9ADRAnLkeLJ3rytsg",
  "key38": "4YooQicS2R9ZfqYsCy31QmsSDowaX7ZJKGzqH8cjYZTmPSovxyjn3TFKHJa7tTNYLRfe3ooqjmnLmL5Pp22EkKy6"
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
