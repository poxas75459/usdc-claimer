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
    "2kQcY7LQ552Gnr4Vg3BxaxJuPYca6JuxUJtVoW8Au9SGd1YEYbQQpd2rMjbyVpFbKVtbJzVU78hxUQKGKqLz4BWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YLng7ebF9u8Mz7jsu9qLg5FE9cMAKQqhNARM1Rhg52vkoDeHNXdWqVsvwidem94XicPVW6D8cb6qmUJfU7PxEg2",
  "key1": "5LDvRwAg28VmxWKRSvLYD66HCRYhSYpek7AvVykXcpdHhRwhqQzrGhZVny4NKsDWpqUJW4i6xritDFa3sTPxVppX",
  "key2": "4hLVAzKqzQNnRkJSCkozmoK12UwXfprevRGK6bEAkQfYsteNBETeh962vMUrVTsbvUAUEV3g44DeDrEc7TYu8ucL",
  "key3": "2VeW4rZFJHUZERQLedYoVA3NuEU4JNabvpcSCS8xahDysVUyREz4oHK1d3P6AeQVSDi2Qy1bt2MJXFpC1oW2eWAF",
  "key4": "52UiMMbx1YEcjTSTaAWAHjEKo7FTmKVzsMCYEqXa9iNMuDnQBkHhcZ7MZt6rZ5xqjVTLpvstYDk7ThSqBieieH7V",
  "key5": "2kRxGPugHq3pKZ9XW36wq2bsyWNbZTQMHXYrwvCS9fZCZmhYhhkenZkYPzuVgrKsBvimZYEjTCbzpTHTXaDSgi7A",
  "key6": "3d9cTEV8qH2V6pArSQeMom7sGvmEB6PQv61vRCRpf42Ug3SLkicHMqdAM7vsBPJGmaJ9WKu39kUsLASVPHVb6o8Z",
  "key7": "28qP14UBVZ154nmFjqruo5u7i4cW9jbLfw3Cx4ipkpAE5piuHiHkHQo5A4gFbcRyzTjKZs97GyoDxY6ZAXDzhwW5",
  "key8": "3Dx9Bo477xz9wuWKvxx1o57StG4wL6G3bv568BjHdwsWpC5mJiyJ8b2iNa9AnefVsxpwrKsZGSaziYxR9C8kWEw9",
  "key9": "jzu4GjWvd4uozpeQJszL8j8qM2oV4XYGreikZEGS9G2ii5pKPN4qiGWb3CRaYDZZ1UWykxR31DJXeigQtrQEj95",
  "key10": "3v5tEXqBpCnuG15bU4bD9oTV87uqgYGU8ELjchU3X8P3wSmwN95vNQXEF5Ctvi9c4a47q4td4xzsiLBBbuY1HqR",
  "key11": "5py6xu48mwLiNkGG65nYj7epinTxpsUEqR4v6H4ftVCsKtoUGyT7nmttBqLcde6kinbXN9Z6t1sZdJTRJavCVyAP",
  "key12": "3jtD4YLSVyhver6VhBLSLwJPpBYyuAGfNzyTCPdFCbJAezp5TJM9dNdKnvYXY7sbtrq7SLocpRi1n4hv91BGyGAu",
  "key13": "4dbLe6XGM7rZE1USAGFKtm6HTXtfbUXH2crQdL2CekmySERWNsP431kKsLxM7LEamtBqekRKKQKiMLNbkovoFYmY",
  "key14": "B8mydLtgKF8kuptP2eZoaDuDTuGW4mXz1jV4dAcg4FVLWpFGceNietpYVjohfoquxdndgQmYC4Sedh47yU4dgmd",
  "key15": "36cTsD5FRhTkgZ5crhiyVzRNVB8McQCTWCB5jPfMA9wR73tc2S43frUvcYVoxnTS1L4aFUJUVWcfBdga3zWZhgVs",
  "key16": "twM66fMTjgXK12qbZvXMQqqWvkB1MQfPXV8XHaMeHoah968hevvCnHWCamgxo2Fen2xVBpxWoWwxoT7A2nBT47R",
  "key17": "3pcQULZWQm79u7ac8KSmBqRo3zGGhX1KzYHKiLcmw6N53doExoi3aYfcBneEE5J8e6VAkdxayedH4x5wWbwZStQk",
  "key18": "2hmVTedSiF3Z8edBHEa9RHFGHfezzD3xHLFsrH9A4gcUAdNNuznu6ZwhR4CQsbgjZodb6jvn13yQYSwSoowwGTP3",
  "key19": "QHuMnSCPx4zAEakaqB4tTJLU6LqrgFCvwq4DTjygHR8rXPD8dzbbeskjSwopo86DxZyokKcYSuHVY6DLinZGids",
  "key20": "2zxhTYyLv7z3jJo1nepFqzCVkY4KqJjpyv5fWTXCCrVmq5vJ1XF91FinBoESasupTTwX9oAuDrH2EPW8bHwjHiSv",
  "key21": "5AvoHBY1xHR5iiYdjPc9YrDVELAvURaFtukmk9zHj8qXcC37gLd3P3qe24wRyJ43MBiKT1R5JYp4c2z1QA29Q3ek",
  "key22": "4e2gCZPCnVvRopsm3ks4jyyrd8gZHjsTkbVgYL6srodLkXBLmEWBtQeyryCiKrCddvu5Bb28FVn8Dkd81C74xTDG",
  "key23": "dsuN6s29R5bQwPjhUASnSq1D34QYE3uEi7fyzjB3fPbDSqH4i8f4BEvQVqMwmyDUAcKrjnhYEYQ5Dpi1YADxeWE",
  "key24": "3X2hNrxhmjnnQRqZRbfoh95CvgVfCEK86wJXx6E2zw7Pg4Wqjj1F1eXzKmYAikR2taDmkVLrf82d9Nco5V5aopmJ",
  "key25": "3y6Hqdu1XzutkPvx6gpbz6WqEgEX9KeL7d9KToVq5YTDPKh2zptsCbez5yMdFGXDq78f5AwkQJyc9dzV1QQG43Z3",
  "key26": "2SkdT7xk3pBFANvg4L2k2ApVNLH5vbGEETbnD7r9M5Kd2EJ4bfLCYcBRuYSu3NgSzCQfaHE9uyKEdGds9HHXm8ZW",
  "key27": "4KL7LJBJSiyVVX5Wj8vzeKDpXtouvq9Hiy3ShYxFQ897svaeyCZC8J95aj12Bg6sfTEvRr4r6zVRVYW1iTmQP4t",
  "key28": "492UZEpfCrhnMgC7JyK5pEcADvnG6M4jTyaP27jTQWsmkBEtuPDj9AmHYeBGWM5Sihg7EgWDPiHUibE4MjaBctr3",
  "key29": "3CUmTqJLSjAsUVhqvsngz2nXoNgxWRzZSLJ5phTCfBsUitephdYznBr1tMZXSvzMbdACJUEA1xL1mUU1ovcxdDGU",
  "key30": "2hTLdfRPw3GYuQKmCT6GDsFUn15vNSBh2LeDiLzCj2MMrDARkp7XcYYs4WECCHQX93G8ZvTfCAGSFxZFsWRXtyrk",
  "key31": "GykiKB88TUVQ2Yu6LuEr6V7BEodzLTnRZy73WPhY43zE6U1SsdKTpBuDFpSruYCrmGFF6wRXr1ZGkUFEqGP9kJm",
  "key32": "4kEdTFXBEwuRheEbAXvmJpUyGuoYeFiHZW3nQxRwe4TExjnnkMBw5cxyr9dWjKsr1q18zkijgpd47DVvZ4XQ9BYC",
  "key33": "3qyn3ZA1rgfHPd8GZcCtk1nwxWByyK1KqeFFp7kU75MeeMQy8t2rJYh8FtvurUtQzeZjeUdbV5iVNKu2Q9bpvWk4",
  "key34": "2c93WtBeRLCqNUBFrYEVx8QiCVbePt9pXicaDmkbB3iQNhrGHT5X4JkcPnN1G45XdUvygLURCfq31Bc1DV2W91Ab",
  "key35": "4ScqpmZb8DwuvEbtsuMSfmKq1CrHzMBG1GxBQtJRqzEPHeQC9x5Pw2zJL1uH5AtcoNsvEXrjwxBPWTVjt8qvnJsL"
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
