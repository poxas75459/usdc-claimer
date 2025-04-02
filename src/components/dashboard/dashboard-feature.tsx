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
    "4yTBF1Sqv4srWXCjmbRcuqQY4StKFUNd6EUuKnq82Zo2Et89LyhcSysJnJcUGUvobZEAgeXhVXpXcBniY2j35E7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NANMZEMfo3e2k6qkYKc6LkiYy3iVrKaGzeDa7mA5SiVa7Y8XLL8X9DzCn6p3pHHnsvrabtr3NNg5MyCzjzikzew",
  "key1": "2xibHiS84cGiDPWgZjns5xcwvdZydVcmAsfzAjE34U3K7bfYP15qBSTXDF2rR6fyPgEJr6RKPJEjVgLZyMNYrwA2",
  "key2": "3CHWCbzPt5cicuvqJdx5q9D5My8i47fv59dU89wQhGwEzU9UsMg8o436MP34BCrtyLvZ11nH2KAVT51McnwxtQxJ",
  "key3": "4ANUJJmuQwkBAANVPpF13w77uxK59BJSDwaVeVBrzq4bAm22qMtrWZ2o36RXVAr9a8mdjpSrxXJXwD86HCLbsCC2",
  "key4": "W3f4s9ndsioxw2nsjv5ysLtsiUx4Ln4vppWYnod4azNbJDGBNWjLyEX4oHeLdFxHjMz6WkZge3AAuyYsikofbat",
  "key5": "4YYZnYRDpGBsCRMXubK8Fs33gfNbQAu2PJNNMMPQeuvqzPwnvQUM2PJswKnXSJ43jnFZLZ3qXzh1jjd34CeCsCyT",
  "key6": "1MnCZYdkcS6Jo8bnZLoWCSV4dMX1eSrdLetezhnyTp962HJauvXdJYumZZP55iHrdVEZ3Y5Ty2pR4WRi7vavuzt",
  "key7": "41bfhf3dHy8nZg46JLgaRCToxH1MTutjJoYAngWxY7BKLtLteQPL259Kk9wqvxkjCFPuRNfpuarA9bx4pemZZPko",
  "key8": "2yTcLdu3BJ6PcTuiF8m34mA4qywiNFKQqE4RNZJxkh1rhmR7tCygsQWHdhVYAUySuZXZpYjSk1DDvMCsdLYtrwrs",
  "key9": "4fv9nmeb3gvYmuzunwsXCyc9Urbb4qkD8z7NK1mZSRuTvVgymRFU527YRJb1ALT28aFqF3otpHB7CecHsSrK4Lah",
  "key10": "5SbEtvShNA7QjrDxhNbvTgck42LkUaPM4yRFCibNYrAq5CDV3QvxabXMqWcTrHhV4NFcGWyn9w45h8hobKq53GWE",
  "key11": "2qoxxEpiWvJQq1KHvDAUGGwZQgm3g4mYwGsLiSAjQ5SLimeK9iXNFH8mQzKojqYHJ9TQixGYVPfMrLCrLRWfifNg",
  "key12": "2YN7vCfgsmZXAx34bE1GDvKo6b3u3t6kC9aiJCa3JxQYcH32ksfkxCjyKweYz5rG9nabay5abMtWJj3BoSfop1Ua",
  "key13": "4XcKb9fhYrVGXUWqwXEygXLdU94WsagvK7EizTtqQdrvjKvorirNCrVg8tXiCzofHxPMMrvvC2AwSLUqXcbtDPBc",
  "key14": "2fxThYyQvwzpfqbmL2gSi1y7vuejE5j8uMbTcw1SW2ufrV5aGHjzGKDj3xpQUuAW3tdtim2YVV91GXsv9k882jba",
  "key15": "2dD8qkpqQyieS9yySfAg6U72ZP3Rfjy6Hk33kzF9gcQHRhNffuGanRm7DPt1Szk3rMSzKDWZ4Xu4rE7cFmNBchG7",
  "key16": "2fhQSGcLEbz6Jrgfyvu6yPSu6ujshM9GLwbdX29gAw7rL1ML16T5WuVoAUd4iyeGP211BLF47aXoVQcgzBBjRe3u",
  "key17": "3XvrioS8fzr5j8V3kNzLJbGSr4qBer1bRD1d9eKzqrLrkooAmbmJvYKkkoYjVWmxEwMFCqamQC4xRXpYnkSjMmoj",
  "key18": "3HgytDq3w5yGUBKkQqXabrgn74WytXrW1vf8Knr9mPxW8iHPpzdbmsBFRBRA6SzCbmpiSx2Z45yytSy2HrPWrJHC",
  "key19": "64Ee72mkR1iS1HvDwC5f32YBFRHFXkcTwzHChvBsKv3EyATJXMqTZrzht4sitRizSVwXw555DYhecUxKyK3NQdYN",
  "key20": "cFKB5GTmsDkv8vUKbmcCv5XZeJEpthkAH9DDajg73wbojVpMRUmV5gDhRDv1MX8wwqHhBzbSQXxyDt5MErBEWbq",
  "key21": "4Samr35siYG27r5bgYVk9iG9gcE5mzjDQ87pity8CPEpuNbi9FuBGNmtmayDGFig6fuoTWQMBModtZJMM5wCV5Ph",
  "key22": "5wd5p4beiv8T9FQnq9Sbt3d4ojvdb8yKzB61iKaCe4kT4B5kcKAoEDquB5mYuzJnSEV8yyX9MV2JZGyhrnzdLbMA",
  "key23": "Qco8VEbQaF3DeCc6pnkAxw75fCtRHCUkXw7oZ1EhFxTdKBQb6ucioFnQwHeXudCyoe598rud4nLXSzLz6WLDSZK",
  "key24": "4zzdfhSWLaLTEz9cdnMbQxXmg8hHV6CYE1ueK8ikuVRdvpULwpY89GjewkosFGkyuvGfnHUchGys9FrSTQ19eG4Y",
  "key25": "4SmSktDcPhbgnJDoGRqpdeYhM3rYaLwostkA5fVmLDEkubcerrfKrXErR6r7VEGxeidPMiyNtc2cR8fsexyBi6Ki",
  "key26": "qy3YJ8zoxDst1knc79DvdGaqcwwBTJyDaQcHSLYTNkgLxdDydJxWLc7Mkx7cVHYnejMjAw6rYuiF3xyBV6CPWC3",
  "key27": "28teAfuwbgQ8KM1iFsCjK2ioeAEDRMxgC7FmL6k6NscWKEfhW1uzj2TAGHFiv5xGUcYP54GFL8ChRUDXCrRDashc",
  "key28": "4P8Vh4du8uaHGtVbxxRXiveRsGx2NJHxqGDdfkRkwGDbGQGHcJa8Jyq7CG9iCxe4k2dHaA4oUTvWRanATZd7xevy",
  "key29": "474MAPoQBCKgxjCp6m3aeHUjPorQ8CzJbMGtC2gBVC1Utyzrh7BmPGjZcX7qzNBkGcvU3ZyxxeHk4ho8d5RuxNEX",
  "key30": "2sNi5NaQt1QDwtMAhjJheDrQZDawg3SV692Pj72nkKGFTQDyfLQsMFUDBXmPCCz9LbWpCrF5GJ5Btc5nSn6fPwQX"
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
