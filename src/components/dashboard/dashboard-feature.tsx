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
    "5ZZPAwsvKeHxX6pRYDiucKp8iExr8niBqQUTZi91cWNvUKkR7TWw4WfoDviMSaHYFrJ3Nhc2XbdFyL8pavHNn45G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uVZWJH6vuyMXbXNFa2Aq2RPCWUHaci4JfNkUAYGRkLjfeCiWPzUPv5Re7991hLrBuxoa3kypyYjqtsSooeHDy3u",
  "key1": "23ma827nt6QYg3XEqGQJVeGXaWy3GKKfGDzDqV4ntc2Hhoc4PiDCrYwyfqYr2maa6HiNTzqufH9ENSToqygUcYkb",
  "key2": "41jC3GgMwkmdJVFHGtJM5K4ytdHyhwJa8yPQgs7pR2bSMLcVY9A7Ncq21zUtQEnnMLbexrhagkXwBaLWSJ5Q5gPS",
  "key3": "2MC6Yofj7pTBWivesRpdFXpCxq9W1fggVtdUxvN64eCNHMC12bmsbFfPoLWzQqJHwbCePc6c4VqR8xyzGG17jemm",
  "key4": "46UYANotK28R7cNkYPBzaunxogWe3Sx53yDdPmNknYCEfsShuyK6d99N3qnteoPBmZDARQYcFnNKF6Kf2WeNGHd",
  "key5": "2EjovR9wRPdNLTkCEkAzb4QiKpEtpiioF8ARMntZCtdBFijnmjsWirUs8if6MzWvK4JetwXbGT5PZ2267evWjgtv",
  "key6": "5QdFtsFLsBk7NxmknSPNyWXvHFXu9tK2fczzh1znBmQ1jdqN7vhULXXpMqiAoCEF8Z7qWzgoyqqC2VB4aZPRzUUA",
  "key7": "5NVDTcyh7BdRq9xbHGcgNPFkw2ohgxwjW9zqRs6ez28o4BBbvFy22VkCqSuDJQLGniUqYbRpLwJyvjKAvf7HRx9p",
  "key8": "aTTRzjU7NxUTW1cHYc74n42jbfmgHzUPTz5u6jQDKow5LEgP8Qt9ZpFPRz2CfHFZDWAchEibUFMwAL6cLGsbnqR",
  "key9": "5xwb9yV1WhYMYwazXydH7zj74wjUsnnxPnvShJA2vFfoYwP3Z1kC49L469TYEqvfwpZRggt5MnGFkY38UJzboExa",
  "key10": "3HcbqgcUjgi1Tr3wtiUGvTw2ya6axCZdcJvjPVAD8LgFmAAjMijvqHaEaRA742vPqHvif4JKvudmkZnr8TQSm3hs",
  "key11": "kLJLfkyMBvNKG3ESSQpaePxqe3QatnDsmTku8eiaLP1tRTYuPRHEm5TZHkoPy9MT9m2d1iNyZaaKMFs5MFV2ovR",
  "key12": "3MHJjYvkAV5eHK9kKFGGd7c1foDaT52fWRrgi9yYejKTVE26Pxozus5ZLS16KRmgymUjTiekr91aaycTKoMyvbyy",
  "key13": "3u5ymCQwhbqdCxLdTpusUYYg3mDe1SNRq5LR9s82rJzHQHPj8xbxJpJmxQLqjGizZvcKub4nWzym3cfm5kVUpnUf",
  "key14": "2YoB14AnQdm6jzJ9U4Ahjvw76KQgspLGDBGTSaDs8pRvT1jy66y3iG32XZQ8zFV4jVGxJsqSRm7Q87gnVMqAv2ea",
  "key15": "3h5JNM42MsfdmitDvWCAwmHTL6JNELnABhiTUcZnXVTnokjKJDheh3CN9Bv2LJ4U5dT9pHaBZ4PikiJVgq1Zmhiv",
  "key16": "29BhBjYmibRZEVLUcSXNmWjLs3xDAdzQKX53yNtNZHbxHyvzwjTd41gk6hNqELzFzXRFjzPawTWAn7xFGJwvDbiW",
  "key17": "3gSgVTWjgTd8b9htP6C4c2Wj3EyapJ7HzeNTzxiGKRRUjL3o9m5ogapqkFYfxwH3vkNbTB7LPUEAFxCayNdAZkbe",
  "key18": "577YxxsSRK75rXverHnxJzFw9qKYVZjUFbMmz6Fg7GQKPYmxmb4yFV1KHZGMNmVyvoqPTHLDaQfMNbMN7wHSLLuN",
  "key19": "2jn332fNTwmHt1WRwoRcyRybRGmEqpqZn15PtRKuPd2rDWcVnFUxtUrU3k6oKXZCVh9SQq4tPzFtqjmKygkATRfL",
  "key20": "3PcSwMXE7QxpeVHqjaSY1hRsU6G8LDoVpR43MbEegzFj8uQNLxfBswUDGNk2Fxq49Myy8b9vpjd3MqMCqFPFibbp",
  "key21": "5Tb3GMzCum8YzHc9hajwv2QXjKUSEbpYD983aj27aRGzAmCAp6VF4gBurXvSmjuThC7tZM4HjJtXGiNwhf1DrAR",
  "key22": "5joX4rFQBvdCYonQhESrkhcWWkGBUnz7GW8G5P2jCbt2WRjTVoKeuWPkxoZA9Xrbfq1jsTT9PZbGBm3QtiGrro8q",
  "key23": "Z7CUEehPgqnuWTz4fCmpDj6X7SaNou51KWzB7MyoN6tMbCJGzw4Yva4cyH6TzDdP6Zg6xc1oyCcX1YDaWu3GFcH",
  "key24": "26WnqezxM7NQaeWogaN1ipcwgfBxJUouzDj79Bj7LmZocaSLJ1Fn84a8PYVfWH1M9HoFa1v3pQhs4H7g9sFGNPdi",
  "key25": "5pqvfCZTHjRL42JU2oec1jbdQwpM2XsWxtSCzEC5BR5h8rgqzae5rpo3WKN4no8W6NYjE9NXvzzRbQLkPcvKFzYF",
  "key26": "3ymDiDnUbDn3K2fCoTzbmpQHSzPmRgtnqUG64HKRNkSHZrxas9VjmDt9ov4KSEx9FUVoY5Ht6UuaMuSQUFFXwe6r",
  "key27": "2fF7PoehxdFB3gEwQfxsjSSYpjpJrQdEbbHQqWsebvTpKHABU7EextKbFBGzmFsD49XhWZR136JTZ5xEBm5fFPyR",
  "key28": "h9DFUR9PkTuHnd2MwZk55Z1ufGD9rpKNouSg3ZLpc4AY7MLU6AU5ZbpGv9z3s2gWEsRhbhvgFNJTtpidzAAWzSM",
  "key29": "4t35TZUkoCBpcF8xZHs5qM4w1VaPggsF7mmsiC6ApwnGW2BPLBCppAJt8tFgAnPnwfjNFggbCYTt51sy7gnuw9zv",
  "key30": "2T4G2q8trUtVy87rZmgWvuefL1HDKc6QYUCQsxyjwo3rgNJ5h7nySDuqBLUpe3pAVSyJzSb1A11d4W3TSGRK8HVR",
  "key31": "31bj1rrbbcJwPeFQNCdM23vrH7gxpAHh1wQpyYqwsekhoZneKxa25AqW7AKviSvZXAHGApRcVk9oArqnLtoVBfhV",
  "key32": "2zucfNo8SsnyduJBkYwf1Qvu27cwczCy6cm1Sjbz3MLNb4n1QiNGPL5ybBfMiaqnFv5LPV7ATAhWzA45CWmpbHsx",
  "key33": "4fV9fb1dGZUWzsvQw3HK1jnY6ZeuqMtX73rA7W3ErHru8hgu2rW2VQfozn5msx2uagJra57KuVunhawWiiYwPSeD"
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
