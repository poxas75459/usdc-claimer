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
    "2g3UcbN4ArP3vXSwKnspdBUPzyc64cszenuSbTrAH1LMt5QRJZqrNsrvVKSh78KcMe5JigEH5C3xHCFeAshbjirg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YnBjTjVGqjThqwEgXEoRRHDdfLHkTh7Ya7KGmFfRUstoKSZ1PNVDVjx1uQaTnUrvmCUMxpw7eYHhiVWBZNKkmWk",
  "key1": "5QWnheGqHCGy98bfsKwEqScNTcFCHRkuwJEwVrw12yEbW8yEqgeGrLaVoyXinT24hr96dcx9eosGFvqmYZA7fyNG",
  "key2": "2LGGMWy4ogRwPmuEQ5LhFp2sU3cSB32PepxbMip3eB6uFaurUHHt83nir5WxiqisfdschxG4BSgeSuqZb8LfKEUu",
  "key3": "3Sr2UUdrGzvC7poinUmiiocdcBFQ9PF1WuECdatrxHXBS3hWEKja3oRr5cTsL787TqDZDRfuwnqUDi3MQtd6GE6f",
  "key4": "4RzV27NUqm7L75nha1vhfA83aPzZS9QXh8RsBmJpWCm9oSZ8B6jEPDLCKkpRsxxfXtEjSTDgZXHmDj3ur2Uu9oaH",
  "key5": "dBJzfu5UFLz8Ny43bw9eYoBJxLpFRusYzxm49AdPytGe9SWw13tNXgq5AHjFTgLjPrWnedQWgbmRY25tRQQty8b",
  "key6": "5x6ryaKYK7DSWWmfqD2DdxQDHTYL8hi5N9q9MtTR7J3Qh5H9MZbSqJjY3FHpbLCmrurZfisN1RVikpAYFDibkqdU",
  "key7": "568Q9HEbYexkHe87Ua4NaHhHCiKJBQtPxDXYcfKv56ytgHWXJL2C3ZDRSQ5yAdWLhSCSxZj2aX12ouRH5ZS2FfHp",
  "key8": "32PaKy1GaGvbapSPrBBzZhqkPb6sVQxXqAadxLVaBNcF5GztGG7zhxwHvYGDcxTjWR8AHZBds9shag5jktAXuw4T",
  "key9": "3hEAF1cnNfQiwGuFUJC7dS97tRDGQqX5i35Fs28EGjim2un7HGv7AebdXwtkGqWfJo4GwTPQDamrLLcASs7RYaDf",
  "key10": "fReNe3qWdsEWuUSGiMLDg2zJnnq2LFk79Ew8adv7dNEtJzPngKPeVSsVFYiCyFhvG2qp6TM8Zbzb3RbHZPVU1gG",
  "key11": "3GxvErSMTXT8Q7g3ohgU4BC1xNEhY1MoftcCDFUMpRMmk3Jdik1vNUJhRcAGBJQmUQ6SN8SkX19dSW8ijEsGGrHQ",
  "key12": "5xQA4BE8Cn7XHfvK2372u2UTSZEapVjLn1RuGxLoMEdyGgNgELYZ2ZoWKz1xqN2RJ8AxnzFqtjhkzLmX2F4kP55D",
  "key13": "3ARcPY1QLpgUrH9LVG7q3FGxK8EnjkZdahFDoZEhkokPnjwATL77ukzKEmJXjGj4pLJ5rTseDtNRFmcCEz16upX8",
  "key14": "3R1cc7LszEuQvZqWj4pZvWyPrsZjtogVzYDmaGv8oyF3UtnkH88PYm6eAYen594i7ApmTXozLsx8XQ1RnzPbYQQq",
  "key15": "2zuCtLS2kGiKVU4WQApq434DU5iiBy9guiA4bK58Wmw3PP9M1pT7LdUKZqb3ursoHzAxmaN5UZDaD7BnKrtesJy3",
  "key16": "aPJvRfu93i25SCCkMDtiXhyx61bmxhWvZwWyScZu5SEzxkW9jod5YuBcD6JWkFtKCQFK4di6VxzB4GkRBjx2w9o",
  "key17": "327Xr2eaD5sTPrydP5k7WQvAGkuHQQxAJwPisMXBkEqjUGCaGPHAKK25ZnkA4Ujaakzw3nRQjRreQeMWpCW3arma",
  "key18": "62mdBc7PZQNdpGrfiTTkis6BmqWQWc7Y3e7nBKUGbXuXaxdGxFcKEabgDza8xzh6QmJ9FNaHnWNxppxmdiJsHRxd",
  "key19": "4iC2xkhLwL9jeD8dP8Hmdwq1N8fZERYDFZr8p8FDDeZBRpSjwD3T5LRMiyBcCwLAEhU1hkugmYh8ki1jwrAzQmU2",
  "key20": "615vnN4HR3XZJQa3mdX153YPfbjrvMNkZEqgdKPbVD4M9iYprABvu4L6sURqCm492AmmBadUyC3jjcxSGSyqS1EK",
  "key21": "4eybddHBYkNPNxxzbg6aCRdeLwSVQeqDXBJS4Q7auiyaKvDEpDofBz8mhpZYDyhDVBdUWij3eqsCfXAKcgZN11Jo",
  "key22": "5feJ2djWciDqovCWiWfgk6vNWWgbrVvkuLDrFgQUQwafs8qkYC8RSwgAe3ZV368YCoEmdL8KTyVLqDbkG2hXFv1J",
  "key23": "28wyKqv8Y2m1LU4bvjAXtcxcnNUHvjBhdXBPXN8qFnW3ju1QK9wYBW4a1Q1cUdwoVc6FP6jUyscUXVLfCZRKLHXu",
  "key24": "3ngDa8TNKRfX3BE4BZBPK8EmxiA3ZgELUtbsbJ2yTtkpSDGq79BeeXgfNR3bUhE5z1yqPHcMESUsca4BXgiTE4yE",
  "key25": "4BStNuAbajSbr1aWuT5gPYiBFvjS3vhFXHc9aSGSdGDVPaYt5YALeBeCLQiX8G8ExKPkbrwFrkbLEsvzZVeh5FN5",
  "key26": "4NSxGhXrqb1JJhhvRWHxomEmry2ED4mNUDyBgnnLnfYp9FDsqT1U5UZU1BEDJymQvF9tmUuDbofWSNVBMSKfkbWC",
  "key27": "25eRZU2uvc1U9VwXDfEwTAf2NhwDjYZ3AwYLUuXVhFsFhhqPByprf4iEV6Zq4aqcNHu7wcSLC5tybYB5gunNmeMG"
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
