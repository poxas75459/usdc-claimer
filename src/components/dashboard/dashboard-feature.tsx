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
    "2953Sb27AQDkmfoYa8pKXgzL59HBiPQva2ba1B8Zn54AUSAcNJUVdpsxyzZsGvJCYhK4wRnGany1vDja8Ry9fNzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sz8y6KcU5TQc3LseTqwymdbLdtpWUiCu4mzrryM7iwKFpkX9ZJeHanYNnxPaNG14M7xsJMP6HfBJMcKeN2RTcuS",
  "key1": "2gJ8gWPwVBKiNWATrtjmvZofmh3CE2DWuGQigYZXejKD4oHrGQF2ZLXUwcU5s99qd1yU5x4BcX4MHSUnnCeyHaQD",
  "key2": "5kZwTnSr1wds3j6khCLgw2PJJKGTDHDwEuvzYxg499NFjtPSz17b4JMCSqVCExtH1RGRtaGdXAAobGzYwQmU11rQ",
  "key3": "MpB2pJfPDQPSdpuukuwJU5RW2PDNAeyrNPvYPmHGmqhE87XCrPBPden7YQab8HoP3GhmueCpE6QgxKacjR9yZ2Q",
  "key4": "5oWbbAWBBnJdtj6MtAREW1nDDn94jTTyWQvqnRrwJHjHTXj7QKQr36vVT2hzDvHojBCvxQvwCsnzNZ4TztQbpDtb",
  "key5": "5ZVZo65Gkcbm8zXVw7BkbQUnLbk8h7bZ6D1E2pfg3CWgagasdErvS4E5AMmFSbMZrPAADBSCZPNg2mXLgrd7hpdJ",
  "key6": "4Vddv9dSbQPkDqDt1n9Xz2skWQL6Xm5z56cU8hrBtpCk8yd7vN4ssXry9GLPS81w3fBiX6mHhu3tKgurUbVeBJmp",
  "key7": "36sa2SZKVkPNZarBgdrNzCR2xrHBG25oXTHeJVNGGyQTP6tfUTEsqvvyZkJAyRthEmSBejzPH8Sm3tu5fHveJwAo",
  "key8": "3NoVw5p2YLQLcdGpzJFSfdTuAwTn4sCBnSFcLs4tHhfktxzfsMv8CGLPeg7Hgb3AhhPVBdQc6wnhaqSBvaRqLNwF",
  "key9": "4c4eMBGQvyBEU5YPgBbhBXYXsRZKU4DjyNd2KEUonWnVpK2yKDqKoRFnR1CWXbLGeaNbo1dE6QmmejFkqjwg187v",
  "key10": "Hb6HN921xeVUZLQyeGtb4ukk9LP7XQ1pXoeM887eTt9oLSBp9pwVDVz182YSh4nUoqJLDE8JzyY9eCvcP9Jprcs",
  "key11": "4kZGS8iC7HE9pbSqNtrU9zRd5XijejdvL6iWtc3nZTPBpJ6ighoBxh9UvnfrPpT6aRVs5KzVY1DfH5CGi7cyySWQ",
  "key12": "2zz6seUij2JNG92nMukeM1MPbFTnSMmXy1K52tJEd399hCMSVv3Vb1Az9DWhMTyeZ5KF2aMVxZfLDLKNHX3TQqwo",
  "key13": "VieS1QYVj6yeMRJZEZi7XRCwEHZTwBPCDNAXj4M8gSikbpG47jNLZwXXtWWHFNmBjbyvTHyZzQYhEqsBjXYhtrL",
  "key14": "5ge3rugszQ8G1DjZE6x252y5T4nSm61R5Qh7L8uXyEmiQ9LdWz4SKiUTAUXGm1jLtdPcDqB14UB586PFJPQJTzWz",
  "key15": "3XpEPhJsgqVCMY7iEWp5o4tt778zC7UKFuF1Nq5YbE7vfZtY9ziFo6haj4VkhjGPXoYRwYrx4txJgzKFunwHpYRv",
  "key16": "nVsHsUF7iJu9FRuBRx3sqYhqSpo3G7dzXFH4eCLsg8EaMxW1yz44ZWjFtVhBCqCVJUurkrNJWdg2LVGcNyHYB4v",
  "key17": "2TxquwBMvi77JKcZ3FZmTx4RwbMQfWq25fMYXGWgz6fiqefQ9euv53iiiefaZXxhmQHJFRfDERfGvLhXashxugUZ",
  "key18": "3Qy7khS54pAyTJnpPYdwyMd84k8n2Xzv9nwg9pZeM15vey5sJcpkr6hJJWWmMdKsp4APDxUZyrdxARmWkXTZRZY9",
  "key19": "4htv9QHtdDrM1dMkVcaQr5LHA3yNGSL2P7UE9BFHmxgtMF5UMSX9UhYCLp7qBvuPZgvQ83seQu6Vn6wGDgFMXVVQ",
  "key20": "54YgVswVbHn16cuj8dBVrNSGASyQ9UbZu6dagPRwbkv5QJv1YLmjNVL9WFQULSYeEefHBkfVkUBGcPpWuL7UTX22",
  "key21": "5D97uQSoYr9DEeYQvmeKGHbaULYve5Xf8fEfunbdhbqZLWPSznv9ncRHKfrQoX1jSgoVNb7qXRenju46MXHJpqZq",
  "key22": "F8dguvAuA5se85NuHT7SxGU8XYpUWLUmj8nY9FGByZB2BX6jxMCF74p3jjb9JMcUbVffLZvrcNtRvxMwRtsz88c",
  "key23": "5uFN5fdAQiAeV8uwvzUe34DoUcQfqwQsZa2RT3pqu4ovmuBPzzGAVzt7XWpcYjFWSKL7ANXoFZ4KESMUK2yppr6G",
  "key24": "MFKBXqKxRCfSnZGm5RjoGjwhi4TAqRp5NYdKDUq63b9UCx7aNE39N3xoNi3yFncY59RevMhj5NvyYX6dev26AfW",
  "key25": "2pdsYUpuPEneQHMz9LNu1ovdyEk9n6JeFic1Ddev9sw3wGBbjocw1xJpvPCYQ8fbzqvgNKiqbjLuhxnRpBGNYpkD",
  "key26": "63uCspDwS8dbT5F6QFVJRHgtUaCnL3ftU5FNAoDKPnUrSnGTLRqqDdiNWTivXsS1pxfyFnMNfE1FhdCJSinjJ2yT",
  "key27": "2KFKBFkuquZruHQuWWBBEjCRjce8m9AasF6MaAZdcH9M3K4uB18uoKFJN5Lr4PC3yPwVmMVvhLTfey77dyaDfk5u",
  "key28": "3nZ6dUz1p3ZAxzGRkviCLoDmxFoC2mbf3p8HVAYqeSBUBJEH1VgmHNS6ySuPbHunioiw8ivqYBjWNZqrEAh4HEqE",
  "key29": "4sqMp6NmR8xNqt78cL2KLSY3Xb1pbxNyL5zbWYLFeZQRDhveuigwUNSL7sJn2ztj7z7bspLBDtxL32jTapPDVq6p",
  "key30": "526TRrxcFYR6tkePFLjFKKVVuRKfcsn8LcCZEEyuSbZMFxwm742y53XwcwrRAo7WmErE7RaAkQ9q1HqBGyNPwYLM",
  "key31": "YYg58bn8Nho93US8rGmhotch6FiSjaKtUgUSzYAYLWdJ53u6prJT2B9zxaxPAKfreFytxZhxbqpcq46HAgptoep",
  "key32": "4eLgb9Jw2VzjoW324d4NFt4wvJuJxEmFTXQfH5cfMSSdcwXiVa6ZKtbaWBc3hV4s2Z4tKSmsJ1kAbyKxvVUTNpv3",
  "key33": "53wEwpEfkvrJRBhvLpctYNWeJrtmyzMW6u5zXz7seLe5uKAKm1GU51S9PQdvRxNNjfF9WzYy1G53c2NXWZRA9LGz"
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
