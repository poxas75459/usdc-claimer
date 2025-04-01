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
    "25XfPv1UznWN2rJbXuht4qnCqWtuLZAFKNnkFCw6bkmYmeVxixskgNZeLh5ajmWy4ssX8siVg1wAjJToZDfYCtZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V63VgpZ9g2gEnKxFi9gQJosYFdtanYBunwy6rz9qwuozabkXg41NrgRYbyMQebgFWnV65KbfbzC1AS7vEDhcYJH",
  "key1": "51BJyMDT75mEUw5u4oYChmNti6CjfVN81oz8WXQQMDVJxMEcHEHfdTbS2CaKn13CZXksGpzM6HYimAAvX3c6iwsQ",
  "key2": "X78J6RvofyED6wEKWz7YA8Y6AUCAnKjD2pPCFF1zYUeW4ejRTDM89CpRUewMQCGvYquDt4igcVwspMJmHZrGuKv",
  "key3": "5D6t3ouQwVg4e74f2dGsFYU2z1dAsP9MJEi1RpZCVk5geDtb8hm3B7mPQbjPNAbYptsaVbDBcT85ERN8h5wdZYE6",
  "key4": "3XWnToZE6SkZjV6hmEygrLLvTp8hvMaMPC6pVJWk1v53fR9x3qJSpZB6RyhVadNVrJeVBirVBZB449g2FCj3crGV",
  "key5": "3qJfaJaerRpvUYFBur19wzaUwx63nKdG7W6G3P83vLkQjBArPUKGMUFMXTpiyrbanWFfib92tG7aCairWtMZKExx",
  "key6": "5BjwbdYW17k166UgAiyf1sSShBBkyWKKJfuP4hWVjpX2G5a4dgHba3GCuCWHSvz1N7go9Ser2Sp2FTvQJiSviPot",
  "key7": "47d3GZNMVmG8RWwzMqb7kxEcvZzQa4Sk9tZEjH2ZR2CKdVKfd9EPBz4Ks9UxdLGqUx5JXFJSH5rgBjVQoX24SaUv",
  "key8": "5nP3EGSxChKnqmuanrBjo6DpbTe39fYZsaqWCBjgEWkrfrMg16gVWoxVdpz4HLwTBhZwAjuuKSarREgLhT2qXVqu",
  "key9": "5THUVT1afgU6yhffaNaKKuEK2N9mV5cp1UL3oR1BJAzb9CjdDgQHXuoV2hTiX7iwRxe7TaNUaHvXnAefVep4g2xj",
  "key10": "5hrYJNrZtPQ4BVRTo6MRt28JMatSTbmbzJgigooxb4aA5y5RLvkKUw8AuBZn8Pma13woBkZBw6aPcByrTtfoVUCP",
  "key11": "adBYVDLT4APD3yQX9hYxhg6N5bfpnKykch9T8J6ddNDp4aQGJ9G4uoJ2RnCxqRw1ETTmU6Pt7t5T1Yh9e7enpBB",
  "key12": "3RwfTQcWPusjuSLQvDB4eknPPJyEU9F9X4xNU7CkeTy1vr1aCtjDRgchPT2FEmVPurLhQhzdqADwUNYkqEFsWmuP",
  "key13": "379YVzVKQxJPiaggXyeEYJEGNyHinvRX6qw2PqeZKgjPePpHgRUoMaajyNYw25QCSVNfj7xRRa375z7DFKqJyPVJ",
  "key14": "oNjqFACxp2nGftzhv7vmscREswae5FLMxKMRVdS9r9kny7oa32SLMuGwTjBebtW67PdmpJUN8V8g9Qyiqgave4f",
  "key15": "2dfKwrHe4dbPdno6wJmnuvXnQEXDrAkJTrg1a9xCVDFJMhfUFSiTFvmWY8qFT4vzgtrqynvMJ6e3PJjuzjqMFLLi",
  "key16": "5QVBtVykDYyxXUQph4EqVarZqUQd1aBNTRcQyU5EhjWDJbxwyABU8ea2ibp2TB3wGJoR8sFV2pykLc8mcj2xUVz3",
  "key17": "37V795mYcPgwRS4ejvmf78YaCJK52D8j8kfoWk1qQQB4NxjPmGtD3hiN5rk9AJBADLvVfxqcQPgohiobmzP2ZdVE",
  "key18": "5E6fxwhcqofHDuBUtc9T7HxKcp6feHJxymuVktHu3mCfVFKgkJygcvzFYX4ZGfnaL6o3CDqRoLo2JpTTMWsMnwtd",
  "key19": "3im2uZyXL5GJqThi7jJ3r97NmfoU5UNPta7ouf7oMqafGv5DLXWp4nF6tHDZ1VJ4uJAr94cBfQgwf4ksdt97Zwnp",
  "key20": "5SW76v6ieavYGC46r5PcsvuvY4ZVNREyD4UHq8giZS5eFs3kvGXcbNvF3qd4MZ3PYgeQBFsLUKm63SSQW6AbbQKq",
  "key21": "5AP25C9weif9TA3YBSA57D8cYfg9eA3qGa8obMZz2176si55hTn9QJog6iQSSJdE5PgFjdP2VYrcqcvWhcT87XJp",
  "key22": "5YuaRNJ15qyBAZzhNQcaRNyfjdWBRFquCFAaWrvEAr6jJS5xyyfFQuToEmFrE6KbtvPBBwY7Af3drRfKhbYHggXC",
  "key23": "42yys1ebmXBVeZ6Wm5NGDWj8b9Hvyxk32CFf68UgeET2HT4ZtXH4m3YGr23Y71Db79R8EibaA7qNCzobiyR6K5XK",
  "key24": "BpPeZFs4mgEGM2jyExy6W5qEzvca34BEwYc3ooxHQjmybEFZiLJykNLWJjvV3pfMeXr5yhM1yguQVhdLZdD1DeH",
  "key25": "5MB4zavhLeEDf7M4XhEHVsckt1W1nBGwhCGQFShAwhC83Goi4awsYy4ph5gs4LbSESrmWH7kDGgt1SnrSrL8jr8s",
  "key26": "4EfKBmy8xAznrehiL33ANBmqDGLH2yBCSU5MLsTJ79yAAEouZgCmMBhFHVeeTQ3tSqZuaitqtuBkSE7yxHfJxais"
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
