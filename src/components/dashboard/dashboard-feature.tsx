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
    "4KpS2nQnjVicXGCNyEq7aQBeGXCmsLRNnmy8Tzbvj6ZvrJbPY9TVMBzroBAa8251EhzGHkeFMHRmrPmyyY2XiExd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JjMQradUcSNGbGZKATygef74WNvDdLVWq83vp4otWexHMmD93buM7DcgGghswah6o5crgHj1Q3R7ExCpTm8Hipo",
  "key1": "3AJ9SU8oDfFbMLFq6675YBeTyT4RWNyxWHAjtbwNnQmsx2ug8qneYvAnigrufgDFSkit69Gqj2eLZMMLRusiTHzC",
  "key2": "Cc9skXgF3x9jusMyEYhGMCoCskipMjbP1e3RQy2NTsF6TAhJThRREE1d3e6ePs8dBWtsSTmoBxvzvBSrq4macYv",
  "key3": "2MF4nDZ8fhjwrjhx65KNB7G3bKmjB9DfNA8wDcxrHfMTYPtUk6AJFpgzMYgq1csPKYvwh27B1er3qXni3WU48e6G",
  "key4": "2whj4NsKUnwff8u894RATfc8hXvGuLcsF9pJcuoFmCRx43YuBKorRGc3SAapo9HqXtK2zP6V2PxK4Ms5X1NGnh3o",
  "key5": "P6BVcDDWtgnqWWa1ffjyLi5PCnVpqUJBJyHoKuRH9FCgrNuLBxkUvsRkMzDfBAnHqjKtrWvVQo2tzQQew7RARNd",
  "key6": "4YXTnVSXfqKdwfHnCkCVxrkPhv7B51h4gmVAAB3CzYmhxNMUTjd5uf5CUmCi7rA5hBkmLsrTfPYn3UNBxWfeAeEX",
  "key7": "4xNEzjgPkwAU5vBn5ghF8WAgf7kK2PqmmkkwMtS5zpV2V9ex8H4tW6G9wJZxouHr7taD4qWLXVjkzqodW9uYuYpP",
  "key8": "7QwWRbwCvMUogf42XMCrz87KWASU4D9DbWHphRV9cRFp8zzF3EwtdfnTTmBAyEB9wVzdmw57yTgyFQRoNRH1RCy",
  "key9": "9nD29gwPzCzq1zHpouNNREcNWA7uadtk4HiEvemS7PS6GAdAS4yCsNHgXrJEdeND2iXnokKMo9kihvTdA88WY2c",
  "key10": "4r66uXdQTy7mmZwDcuAFPrthckNMnHSfMKPccstT5ZrPoWSGDFv623RUx8r88LKSGMs5B2KidaBqXYGxyGyGGeGG",
  "key11": "512v7GuJt2tToM12YJcB2RvxhsCEqJucFRqzWFsuyfVY2Nu57YmhyivbzFei26U8vTkiBtdu19n3Z8EnRayzAcWU",
  "key12": "hpdVkpodYertbkCvUzsHpHJU2uFJACybu1VT3J26fNMjkDmXMUPLCKpcuasYW6okqWKaLLkT2vtd9sgWNxH3vaz",
  "key13": "5xGG8BvqzRRs7wZJZjC6uWaKWFu6LWVTwCvpws2MWfwBinzj4GzeZsSBSWWPaXtuavFRdsHri4TUe9c56SieeUQm",
  "key14": "2gbvkUW6QZEjCT1gPKx111bq3YYDivyzjiNyCLMxziqxGEEBMCGytG97U5KdXwPDeYfAHAD46RM9PcsGmn9HMqHR",
  "key15": "45QS8VzYQXfwiSoCUD2G7c1MjeP8bsdvNE94rLCVggzVctJCeSSebD4x28DihhyiFs29GH3zzRLUVsY8sTSd3qNR",
  "key16": "a5Kp4Z3vDTSvoXkqvYep8fahruiUYJDNo7sUG2Njd12pZhTiGcXfDnrv1Ri9sWqfHsb494BhM7D135jt8i7fBVe",
  "key17": "4ZgCoR1Ci2ZPS1h7VwHi8ET4DuVGxKqyVLMJMA1ZgqzCeRtpoWTt87aQiiNWAvPp8z6UGA9Pw9qXaKJxRKQF5ddn",
  "key18": "5kn9Kk6GNTjuijAtJvvjEV9vJGLE2P7TaKJ22UgGW1quFvAKFWYY9WH7FWXkFhazadmzm2JBzWNgi5XBbjcUYpTf",
  "key19": "4MZMjMN2oRJmmKMtSLfPDCtVrZPTw4BvBxsdc3M4SB4bXX647xZT8nV8Fex3xsjQiR7zqLE8XcqnsQXYCHfxymn4",
  "key20": "5G2osH5my8EBBVWHf1v69Lti9fTmzBiFwBJJKehH7pfGBt6XkJEMVvnv29CQZ1YiwG81DBdWysYyMRxFBW9cWDUG",
  "key21": "4r46fgFYJjBENE26qnBAmsbPgTfNYTgM1weXFar1HcUUWfAxhuwpuUGsfPBrBbpHg4qSKVjBPU3Ywmsph1t7Ygh5",
  "key22": "3NWUVY6GDsrNxrc3iFsr6TcBbMhJQBLR2gR84D6J1s5JhisqHMnQZVMyzFCBuUHYKsGw7LBZcQwpxQagFsAQbw7v",
  "key23": "5g3X8ZMhJYaHj4Je46UPjRa7gaEjbgL2s2ftjDUdEk1CdGnz9asZAcHBJKTa6qNK526fupbtDpmMMUs2rE5sToSK",
  "key24": "5axzMrSXaXF5Lxhi4C8h6kaDLvajabjWZASvfG2cARk9uC6xZ2oeqs7Xv5jYG3wR5hhR4Etp6GQLiSFrXCSJRJqo",
  "key25": "acX77dasDBS5x7FZ1gaorTLRdVcqMx5e2tiPJ1N41zh6aTEDLGnv9XGhymAeWfhioPKL6Jrz1sHzuCJkJKkQPvn",
  "key26": "4dWq1fgb8Z1XACYjLGkT4fYnGZsyCPDCDGxZnsqGjnUkrU7T5iNUGNY7cweCcyU9EHq3yC28vC4VoyzLm7Z8ArGN"
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
