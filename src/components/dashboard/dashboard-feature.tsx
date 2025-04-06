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
    "3sE4XYHYeWbjGda56aNq84JPryQ9Xw5E7ZVzGKQ87Y6hu2LrTd7s4iPYh4K5FE8iLvgNTr9GYKnaWhXAjTyvrZx2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "igt4RAoaceJi7pMarLNQ99oUw6ieTKNtA7py1h51wddWpgEEDYLG6v7YjATx1aKbfXXBCXDkCvQXVgCK2QSnfoQ",
  "key1": "4XQi6oKAGWwTYK2F6v96f4EmQsgPxGu7DReGBvGzTuvA1t9qFeGBkXeFjR7Z5v42VivQqNS9mFzrf6nEYZBJqD5h",
  "key2": "PwsFohN2kRqf4GLbBKKCrJvYEM94ADnvQJxz7HBYvsEFE5MgyqE42ABHSyUi5iFMQtEz7V7hQ86FWnaurbWJtYf",
  "key3": "3Xtc4GpX3qDuAY61ErKmPhEew3NxoJS4qie1cDHgJ24BBYQwTFcBZMhvBecjJ2ZPLqMwAw7smUvWmuymxo2inocd",
  "key4": "4VgdLbgq19ymFq3HwgbtRFuDNhDEQ84HGP7dGQ86PZvfKeNTWwWJ8hLNnyL9Hsn79nsVShB3vQ9zDbbK8azzTVi7",
  "key5": "3b38JxNe7q2Tk1Za9HWyqHd8Cmp29m6RQHF6pN8rYPjQ9epZVEP6UR8hZaygNXF1hephnrQnEvHWEwWQFsqpYwwi",
  "key6": "3jG36sCYEWx1vsALxwQqXoezaj62Ftg83eM2o971SNRsmadZkx44qAJkvbcn3EdDCEqS3AscWqA1oPdaUnFvzUWt",
  "key7": "42p1chm1QK2mvmgfj9yTXZSk52mC1zza7125Mhy78BjYM3kihn3HMUom5uqJFt3nE1qVuja3stym6vLbMQtBZZyT",
  "key8": "5Xk4UkJ23D5Ppaf7rxSAMAU3of7dS6MuRyzDaZ9t9BjwUg2PN4Mdp3wFX6wDZYqGSgBmV6S3QVb95NmqW75d9s1J",
  "key9": "4MgVW36Tm4QuWavHdprfJQQ2vHP7EPDc4mLoVoJ8eNYixBM9VUbz98g9Gg2E48Drukvde7GUBGvRQyqWYYxKVVqR",
  "key10": "dTAtruktigEu3vgR6r37YwLgumG93QoWimnwQXvunFhkwJDiF4D6k9oH8tkibBmeC5aHLAqGJqVo1PQsaRoK4yF",
  "key11": "43g9AoZuNNPtcPff6CoPGXdbAABCyLxB7WSt7ccMQCqbNq5Y11wRQbxL4PWCVMgXJkgQWoeQTjFxbTyQQL6wdfqo",
  "key12": "4LoQ6jJ9aVHWJqt9mtJAvTWVZWeVE8WwXfQTCKH8WkG16iYjVkfFQiqeXdA88UXVVpgfWbYZnqUuLhvefvihfHcW",
  "key13": "4KrPRdgUcjH9YiSWSijxe5Ue42K6BxFfsPkm8AaPN9Hs4YLhWhBb7E8VHzjtuWkhNjRPv7Vd1xUGVizPeLN3nFRb",
  "key14": "24MMjwD72zTMezq6pJeBHXBMkW564Z4WMrx6HvL88Tg82RS4cm1QRrWYEAXTg7WC66ZwvhoVQpUZcrJWrHb5JLBG",
  "key15": "AmEFujJrJo9LyHBNvvCmGcwKmWWPWg3i8ztBA3E31KuDi8CBcmQF35ND2oMry42o8cyMnCaEQ7mbPhdxnMmVN9K",
  "key16": "4UKP5Dz7rMv8R9ggMFqCBquLm1jSrcVjPusqXrJ7kb8RTPuNbcJ6aqA8wHTQcqt4Qhmx5KUwt6Rzqh6HX746ugp4",
  "key17": "4PU1chB2UWXigPaAh9NJFpcjwXs2PNLugY5932iHwv7DxTecFeGA7R9JUs8LG2B4aJEVLk8xwg3WhryCY4etJ3rk",
  "key18": "3qL5Ri8B2HXBuSofMBJ3CxgvfZq8V3H4c7Hf4eVeSXkfEuskyYa9F5XebxTNDAwT1WMubFE63WGWfaMwascaMa9P",
  "key19": "5tifoGqTWHbhKxkkgsALQvuus7adaxDQsKoAoxsjxMNf2sJYZXiuhsu5mK3PJZXGxns8ZfdMEoduv2DMgQrsFnhF",
  "key20": "474Z3Uueq4iDTuoqnnhsgy9GQiUHDm5opyBZaDXYvRnnbCAeSgtSBGAvK4ki2B1Hjc5knC4avhoYK8nafTqKPXcG",
  "key21": "fvNjCw3cSUyzqKAEomk2X1UgCYa9AkaW7tmFvUfySyjayMtznNnxnikQFiZvFCW23yphjUtcwaAj4PARDryCt38",
  "key22": "3ftfADfgS8KUMCkShtevy1GbsGsPP7NUibNBkUGyukgz94Yj2zubgNofqEHK36zXKHWmExYFw9vwC23QNrqEcNZZ",
  "key23": "zgvxGgmUsetqS6ocXD4q2V7bMVwVuu6kDAYA3yP5jazcF2RQqz6mCo1dBTHpEuUVrWWope8FVdzcjjLSxCqLFkh",
  "key24": "QfJDkuwQnAfcVdoHu78JLRfwFR5jFfvG8ae74QATyn5u6pAWP3ajfHqKnY7jaanS7mNBKuhaXoVX1ARDMTLQroF",
  "key25": "2cNujTjwYqpF2E2HubQ3omcYCykbmpVmw6yawpEoYMfWqWrMn1A82hQLdrWRu2aaWh4vcN5MGRN8TJkkkd5z6XZs",
  "key26": "3TvZZiNsCTouxnjXmDYVFoM1FDTsRLiDhLavQC9w8kighRGyTGDswQCi8PUiubF8jq2ufTkxJNrp6CHKugkEB3MK",
  "key27": "2QuEyoS6jM3A8SnteVkUBs36jQgnECpkvQG3xuu6LUQtdtqnmNrrCQEzefC5ghMFh2XUcSyNgorGaiXnaTWB8hc1",
  "key28": "4DZXdj4c4M5kN5ncb1rLSoiqpK44LNbNKEPuHys1RoTHyzqyNBzS6tHD4tECEqyMs9iJYB44cckKzAZxbivJ95ps",
  "key29": "5dNQJD4c4qkspYGuUDbp9L5QXbJqtDLJ3TBYiECp5nWnqKtdFvCRgk8WAziC1TkfDxe4fdSnMhTTwJzrKSPebPya",
  "key30": "5oyhTtSwZccSfpn9kDsTrJfsBpRk3erj3CFb36xYEbszPKvjiEZyeQFA7CNn5x1PrLqA8uh2VWH3ASxEq8GfzseH",
  "key31": "2L8NfG4k5YnmJU9r5DDQBMN8Z9H1prVX9wbDJpFnMUHkBpvkzRdJWCvhNJ2PsABhCUmJRgNSn1XWN7u2pRH97YA3",
  "key32": "2ep55iWd7c9EiZ46QGdwf9CLexA7WRhKdnHFCjN5PB3QXZNoFSyVb6nx2FgDkLnFSVRwDaFhZQaCLtbNueQDtWgW",
  "key33": "3u9BD5Mc79ds1rZnex4eGvFnKB8rikTZS9hpCUxXdioDvVj8Q1YiL3AYis8HRyjfZFSUv6rAxsN8gtkxX2bHPU9s",
  "key34": "a7kNytd9VjxtSepMKPJzqATx99oi7h9fVdmqC3YDjRsNHEZ4n8avAr5SNmF3Hr5q5AYU29LNMGoLo6jVaTUZoHi",
  "key35": "nhsc1Y9MG7h3W77RRrgnaK2kgaoVn575deBb5PciJV6WXcpkycHMvSbdppkf3LaS8uHtQiStqA1SW3TQQsmsxmL",
  "key36": "3eKjhsEuAco7goUcKDmaQKg5DN8xNCMnqaS5kmBLG6Cg1VzMNDsg9f9TBH41LbtJRkmKLMfjN6Va4cLTQxeVCp4"
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
