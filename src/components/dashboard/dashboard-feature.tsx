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
    "2sDSuPKn36oQPSwuKtdyCGNGqDoymWva6AyQizeArGNEBL59XGrHjmCGGPqV8cSRUPBfCAbsEy9k6A1xWgAQXk4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n4k5qoCCmF7zkjcXniZLfWMxZZD4cA7GbuFasVhpiAc1CiebteK8H3RwrNTND84s5ZLGnzTxMm8JABGrHqXXevD",
  "key1": "2LnBXCnPj2mobZPSmE7SWSQFuEoh3dJmVnPVeq5SVKK1ratUVMFy2ARQuDiSfgo2HcqhH35DnfFkp2HRbam67Mkm",
  "key2": "3RMhGePJKMidpBS6y1JrvqogWqwzreVJG2xQ3EVS8zqxLJ4SiMznbsosVHVkTegfM2cAgtEwtvEdDzbU8bq9oMcC",
  "key3": "4pJcZejiB79Woy8TEwRf1Pcv5gFemLGKKBHjuuJhsB9Qv6avjS72NruCobU6thWbMURByti848P3eiczeUTiuvsK",
  "key4": "5UMsyNNEPtXCkq7jZf8WLpW3DJa4KQ8L7gtpo8Wp6oSjr7YL3gRB6WutBbEVxawKGq4eTYr8dJxTxFWkNzkfR3Yg",
  "key5": "5qBJq85T5Jwi3co8mwSH5FBEbTXdt9qsfJHpvVMoJratwVuD2xTDc7SFvgLHSLJSfzZD6ikeLFJZk7yTEDcfLAsL",
  "key6": "3Ero38B5mFdu7md123WMCf1kQvpvB3ZFzS7KNW6FkzJtXwbcG2Fn79XPj93nE88TRvV6AV2GsCwUzeBshpZzZMFr",
  "key7": "ibPdkMLo62ZHxzA9du19a1mcTR99CJhjSnqv3Pe8SgytaY1Ffibz4XiYmA3tsuECbEPUmYPSCoEQuSugTmRtbqN",
  "key8": "3ZofpqUwjwmT4RSr1J5SQis2UNL45KhPfUVH9RFgaK6wuxi8p52pfauVhNHwygd7tt7Sdh3WVtyPrw5gRFRGhomc",
  "key9": "sszRj4EeDUKkbtvEaRTo8r5EkJjn9zFcpt2DwqvboyqhnPsia9MWN6iPCfvoTvScFyrJMg2KJ8UX7q2436hJoxK",
  "key10": "4yDpkB7yqbp6LwrjhR1BCt6X9czBp6iVrw7y9374NEnECWGnPsKDnLe73ANxWv2uX3rTzBGd9KwpsSWv4mcmqSHr",
  "key11": "32PRTNAyRtAwiqHww3jKka8f1JXDpacBDAzq7wgcWuB5VtiMNYKi4Fw23seavDa3BypxkxXgpVpvJbKkoL7x19Vo",
  "key12": "3cTHYGdX1Sfpbcna6uZo6XUFjtTK82o3LYAE38XN9TdJxvdcw2eXzLWzRjWpaK5riatdLq47NmbiVWAaGG3pqjCL",
  "key13": "2jiaEednsBnJzQKcyrZUKTjUGZKEtvZvVAKF5LDRgyHjJyT6TBgvivnjwUnH8oJ8aMcwno4xWWPCkJ9DN49ZxZEk",
  "key14": "5XkeYNE7M67B2rYpz6X9jeUe4uphpyy5mx5v96ysfREMgYjLTVcJRPqAetBQkBPvuR3eVAcwYSHucPH6ewZYsJ1c",
  "key15": "3nFHDu6QfQAtoAN3i5eSKouPTfLL9ozjGG8jtPaBJqzkAFWX8JyuEDqy5tHNBsmJoKeJ6A3njnwEyaxUqj2unhSx",
  "key16": "5cwAVbzanEg99cu9SnNtzh7CH8TZ2Qwcx7zav8Uk6XTBBoH47yfRfREMXFAbF5wa83oTG8ATPkJpAfGjBaKFpRzj",
  "key17": "5s7vqq11jvxEVxJkrMcY7GLy1uUwDLtqL7eM9oQSLYepBYgBksLmFp2KYr4vJsJhbFJuugos1nba7Dxze8MYw7eZ",
  "key18": "jtDPgM6Vq7gxKJCgTP81EGwdmWLA2jd7EzjzmA8cBVs28arSv5S1mQckVXXseoYDPpYCbHg32AXRc8oV19LUvj6",
  "key19": "4jacxmBRGgDVYitURJNztbZ6s8sYR1RUxp2sZLwJc7UED4ZcZzrgQQVkx9Ev9sr33VXnvUvsDpZXe3cm4YkPHc5t",
  "key20": "4tC1Uv4CYQDfGzUZiFPwadcZxBZdoNt9MDRupvpsup6JMXk7fT5qsdbJsr7KfMQtdHjrNjv7DAozgD8Ti63aMCzX",
  "key21": "avrHUUfifSSBpVw47cHzAfW84YsPru9epdMjpNkeLciS4Re8fGA3z7Gp2donjS6YYJ8jwb4SxgT8BkaHKSoe95M",
  "key22": "4g8rCiRbHsRBJ5GChwVa5uVsCYCZNkVkhWVEEcyyiHKYVz8QFZfmbTf8tDirWsq3Poq4oFoAn2xUDYP6TyXLKmQ3",
  "key23": "aoes4i1AuzdjKPPamj1p9Sp9zzssEwv5hpk2rUGbBZfUPSopooxSYowoK1d9of9hErgXnEVi3pihF1byk2Aw8zs",
  "key24": "3KcqwZsg859AzJyCwg59vBXzdgdJqSNnfrorLS2XrtPmW3sQ1w2VLGbvA8zPxXDqXL9NckQK2iLGh4J9FdFc6LgU"
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
