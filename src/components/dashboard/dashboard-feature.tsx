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
    "2uEX74KgvGFaChiRaLyT4PKh2TyUKEUvDUuhHZFNDFmH3yU58BdNUKmKc8vu7WSSkNqAcCuja58qiCFJSd15bkg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S4QuSNyG9TysQyXcMXrQ6i27CKSJM4Fbb56ixN9VVAxq9k7esbCfGQ7vEqVivh5nkwQHGGBXS2YiEn1pLmw1A2q",
  "key1": "5qCusQLpJMoyFbe8QbhurSnqPBGPtZ4b971UWw538BCGMPJ4VyrRUmfyc64h3HWYUjumE9Hm46aAAT3o9SngRZQe",
  "key2": "yXbTsQhoT1pP4uJxkBqVKXVH5nBrP1wuGgE9hFVL3GPAQWb6PfZMjsbaP4m1Bq7DhSH3whvaWqUiFaxJ382jZP8",
  "key3": "3LVZ5ZRr6qTzLsPaHmzVBdWWnF6wZ4BVdpy2pZCZr74LnpLZoMJ5mepF4ury8QEL8SoUeN23GusEumQdWgWKdib9",
  "key4": "oaAPiakkiYHybJtYw4wN8p7nvw1gYkf5zpq4m8KQynX2GVqiohUWcqY8gYYziXtUdY5DnkD53boXSBrSYrmkku9",
  "key5": "3LtQjX62d9KM4taQZk8HmpBMEscsx1Sjrbarvvvtw3zAkYugtihLECMf1MpuJJotbdxirfdQXKrfXsb1Qa2RayrK",
  "key6": "675XCT9Gp2tZTDy45vQX8hmUUsDW6LbeXuh2ypBGFWaVY3yi5nvCq1CBM6iooD2yFd6SiJhRnR5MuP9oXUVXRjtD",
  "key7": "3p7uu2dWsPRf1d2ZWG6oLRLFjVP8vZ7KheUki1cQCr9tD9mTdsKUE5T3NiEsgMFPmP4fkvyVyTAcAV6YQ2RqXTy",
  "key8": "L6aYWMHrhurFHF8ERjgi154je59EnY8WJtszqqhmhaMGMFFhCugHQyLc4YHXZqegMxC466XrytxJeYon99tqFUU",
  "key9": "49WPePvQBLhkHpxe6RsLc5Hru1Jk15RbrdvUxDKqDZ3yHMR12LK4bQBzoq5SJkjFBB11peddcPQUGAsUmvA6pYUK",
  "key10": "5Z6qZx9dmJieTpDNVzP4o5utTiododFEDmNfTxRbxYTeio2NgjNCS4qs2YcQzprt5UQF8dbp9d4fuFtXMg5xEzVm",
  "key11": "2tXPgMUpm9j7w41xqZZwnh8dCM1gvWLu7oW9eTUssPVwWtpQyn3WPPzg99j5QzA28NgpgmQR23KcetjXCo84p6Yy",
  "key12": "3JZLjv6YD8z8KotsaGP5HkdgPJpvs8V2rje1wrcfJYqQ41uQw2DcZxajmWHnsxkeZXRqXKz9XYwbG8eYap7R1cbw",
  "key13": "4dkRe77RvekrjgU35vHouk5aTdspH2nMAvoscLT6KfEwKZEwz1yUtS82cNHSMmpFwXZwSE4TEu2R55AvpiyVQFaA",
  "key14": "23MduJJw4iBnUtMTEP5SNiMVEuaiQcLpWLhUrEwmc4rfeBM2yhRkxD7gkBg1igTtVCaQWsuRUbYdRgZXyJSkjYdP",
  "key15": "3wgbC7Ehc4L3GqEZEkVemCmP4953JZmufKyZcprQqVH6JjeQSpp1cxyh8LrSkPqb7tLvELAU4BUBKgrmB8LzQnES",
  "key16": "66YaGpiG9VXTr36NFrAiy3EeARAg5o3ZgQtPjHfJ4ESRkDdn4sxahDuoo9ELR3Pvbu8Jh1y5rv64ezQQuSJzaMb3",
  "key17": "5X2RcgLrJ9s8XeagfoXpan6inrbTLj6Ds33VsSiJxYU7A4Gkse66BJZva5zXF9cmJK16w9BiejWx1cbuLaP9QdtE",
  "key18": "5TC9vdG1VEVEoasWWW7E2MoAGdGyLnqZic3BkdzkB6wR8GNXQZvRe1cd9e7MVtYgr4igZ4pzmm6Wxz5z21xRPMWu",
  "key19": "3Wj7AzXxWVeNeyDbEjiR1Q3pxAWz5D3rxM3t3xUJQEkkes96UPBxwzfTjajuuZqrT8TNBa7m1jyP3r2vZgGoz6r8",
  "key20": "At8FTiYV9qvmkNVvJL5T9LJyM2emRpRpqekrPtvde1ZmAmW5q9AoDmkArwk6xANmnZbhoADWqfZyTS7EMyuacZp",
  "key21": "1e2F2qb6tWP2V3Jvt6jLA5eT8R8njzztHLcagHDjh7AAeXN9TE4BwERyoSwwMX1ihjPEHFpJLUwsty87V5nYNJv",
  "key22": "5z9KMz7ESroTv2pBf6o1pg1r9kckFUsrAhBN6z7FvCefSuFqF8rQ4rrvEyjTabnayBUNNXrtu6ZoXTiQvYSL5B1w",
  "key23": "FPnt3z8zKBvf2o2w9Vh7NeskMMS8CeKZDwngm6SqMaXXsrQ54q884ofXjK4HwXuwUFJR2A5kRFQMKc4PLNBVvVy",
  "key24": "35riHqGGFpXRuKuc5739jpyHYcieSgLjcw4oogKeomZmfbMBZPzHdKKp6k4V9nTJfkj8oVVGFs8s9Ek2sfc7jreU",
  "key25": "2v9qNrWNc4aTkUevxVVt9N1SUKhQkDPr5L28i8CVLW9Srf4NTuwM3tdu7afjS2Ne2qLSGsYnJF8Er5hAhHafj3Vj",
  "key26": "3vVYhvJjC3azGLdQtsxdKfmS8KRcsE1FoABzWjqSC2UYpabGpsMJffqucGHzKEY8cWfYTxb3r9reWYxQh4EZxZSF"
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
