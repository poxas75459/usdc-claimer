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
    "2FPecQ4JbQgEre5BPrgKPYrERMqVh21Q2QpThkC1m6dCi5DgTn8gJKuGF6GVhEYegjzoiusWK3gAdKTGsSDRm4W1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HtFsWfQiMx8ZnKpwsUhv3xjx15QzvqtP5KLn1cp7icMFBw3oidefsiWqhBrL7t7WfGedroJUWXKtv3WZoX1W79t",
  "key1": "U9gtgkTYTBhTYt1ZgPa9BftirJYaYrKJxcwmfrrbxqSZtVqJ9yf5jNmzbAaPtR3Z2yyCAdqJCynmBXWpmde5K8h",
  "key2": "3prnygKxwE8MX543KuHsNRyxgVhsQVctMedK128snepP2XayPXDfCTHwjRNbisnRGxybxWccAyzFXhYak26Tt8Fr",
  "key3": "31VdmjaNuV1Z9Uf6q7gkTPECxE6Ywga72xQct4z8HMyMPBCcztvUfz4EYiBcxRLUMFmDCqjvCcjeZstN4bFsbCC5",
  "key4": "AZmnNv5NDrAzSB31dBrazJk8mTwfQGkSPJwxKVRzD9AvJTyhXk1Q9d6TXCnC2hXmU49P7nrp7sK8HBJTPAWLzQ3",
  "key5": "2c8uQ29szh5whFkT4br18rhKKE79YMte8YpiGkx9K4KyfQT5WvAcU7EreyTPHnA4qRxBQqzoazgnhh97LMAndT1P",
  "key6": "4KVRmB1FFHcFBwojtRsj9shAFoQQHhwPLDL8TjTJj2dmQsNRXbEcHNBCadZxohN9NFK4PGNdCJA335ty8smtZJBS",
  "key7": "3pAb7gvmapFgmTbDqk6gjLx9XgLdFsZHPY1Ha1wxZrPtkBTqC7WtEjqw1vMDqAMC1JaE9ax51gg88ucAMvFG7dgk",
  "key8": "5aTp2tCvWyJVcSpakr77pwmJ18dJxvoV4MrbQiqNV5R8xwp8vscRCcMXtrpQECGJ74cHLAvViULo76wunV8LiHrV",
  "key9": "33mQcMm7LNXcPXgz2NSSp7b6XfZCNofocG9wa95cuPVdMvFHhvZ7mqMTXNMoE25gGmLSdQ2wspXc7mXqSmcrZD9r",
  "key10": "4LRt4JEZXa5SM5YiVePcefHgPhnhADkftkH6rjHaeHeRp6LFg5s1ESLbFMzSUqsyS6Ht9U5DJdkUZJfBCYeRwakP",
  "key11": "3Yc334HGnuFazjfrXYjdztvetrw4eUqAVL5Fbptc4kxhZmSSdMaDy6xxa5Hm9eaaBEYbCLLihpoNfy5B1sMatbSg",
  "key12": "eziFuzKRSoMpYX3ACoWMCyqKttb33ULsAEKaxwdefCP11TQiMPwKpxZJYmCe498oE7Af4qhKCkXAfT5HeaxZs79",
  "key13": "29XuJZhgCdYq1ePMeTUJ5PXsFbg5qpBBASb8Yyj6PCrdW3pyUK746jY6pAEs9QKPdRNjhcQoXfCV7R8wL8VYNbwj",
  "key14": "2xfVDMgYAhYVe2aVohs2VhQFiRoYH8Dw1M5uw8X2UbaHpDMEeiKzsbH36uhcg9gbQ4TGvMcnkgQFXwuKzD86mQT8",
  "key15": "y9UgZJxfxmpZD8wXrkyFedkJUNu7CQM6xA7ZcbTM1xK8MjMrp9TQ7bPppYLMHhHc8yydkn4FdDVKVNiEt2SZ9gy",
  "key16": "4PuLTVcHcq4q67pNN94skHUecxT1VjP7XJqbwcwpc2cFQk33bYvW6qqmRMX5ftigna8z5ZiDf6gy6NJ82UArfPSR",
  "key17": "wQV9wjPLe6PjZxGkoUq6kMsqQnFTywMxg53LUWALhPJeGApd7hcEVSa1BjKrqNkLGjRpmhAT5V5XJG91oXiWMxv",
  "key18": "GZarCujY6a36R7ZxQn2rLpm69JWKGXfxnxZxsyCmSjbns38Pxez4PwmwM4dxFvATgVfzgagJaoSTuesRnHCLcPe",
  "key19": "49QfvZNtb2VgZfaY2SAtfLbB2m5h7gDD4BjETWA35qn66uSrrenHJGjUwqhWzDcJB7UsMk2BgqDsEhwkn1ZV7gsT",
  "key20": "2f2GhHs6xY7TN25UkiogXdtTNpgQ2RPPxYAT1e4L3fnU6W6qBYhT3ydNL86LpxGQ2bW4ec4TcMDPQviYbyY3N2XL",
  "key21": "3eE9BsDiKe7jgnp7Fc7cNxPff5acWMmFREkgWwnHWR3CofMSA3K2cRzfyjcLa5U9mWBSV9cnDUUyiwVTQQT7hTbv",
  "key22": "3ieBzy296NWPCMFVLNpXr5MGxmJgr3BXCyA7zz8dHxR5S2a54q6PL5g6zVftR4ErJwTE39M8kAgcwiLpYcwqWYRD",
  "key23": "4N4YkwH7u68hyKoYGZCxezBXiV6Xbnm3m7vyiPRn9GZuiVTceb1V2pV5UHEJX6kFJfPXfgATK4A8pRK5FxnpdJyp",
  "key24": "61Jz8a1rpAdGBVt4fsQXQE7JS3RfKr88SNzQPDUPGXju8cE2G5dqfaKJjhwjmtMzo3NRPpfVeYLaq1GoM3rta9EW",
  "key25": "3xSgnVzzhD5C1n7pfQvHxBGRhJpZQ8rmMGhZCzMJZTGAkVbNahBXDKx8LD36yH2TiKHMRUnA5rz1UsNG3LEvWajR",
  "key26": "66EjstNPb3k4gw9ZGbVu83WUZB1ob6r6trh62SUahrGcCXg2pQpqGKe9c1UFbr6S6k2gkCpjHjaFKZjG94Udw97F"
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
