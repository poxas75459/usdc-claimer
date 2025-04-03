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
    "29HJXuKDLZUpyFbRmK2PezH22ACJXur3D9B1mfJzng1m5TKwtRUakuDrcbCMkFkQL4cvDj2SWYZJbzWaibeoDBaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yBVYUmh3CbUbsDJJLbBVMwW4dAvufngV32crFMJaeYUjXvmcquQ7QyWvJNcvUY5MLQFwVu6eqM9RNPBBGSf9Tyh",
  "key1": "4zxs9VxqMUJq7eRMRYqBTQjrkQyvLx9wuq8dTaZgmP5WfQ2XaFwToHykFDDnvXne3iGSVtDhMWFaC5YHpNrfdS3G",
  "key2": "2AyY4r5vtzt9TVrteUFFVyZwq7HWNgRkHrJsTK3UEbFdCNnBV37Nckz5hGc7jvJRKKQZLHhmoviNxvGaygbJsbck",
  "key3": "2s3pZSUNJMNUc7kaNfHBfMJcSKeVHWvciLEXnWFchgNNqq4gVmvqKh9ruqR26A9tnSn96mLfstdmsfM8Rf49Q9r7",
  "key4": "4eZQKpukcCZNobFTJgNjy2siQvhK9nsFiSUQZF2rLgACG9zvz9EK4MRMDsi8ca51Ea3kBhMYB6tTmHJtv3L8HM1C",
  "key5": "3FumGMeaUARAdCTxPSG6zJj53BfngvV6WN7isP4cAYQkeRggreyxxMhUXnHiqriBrPPuCM6x2McfDKuo6LoukkXX",
  "key6": "4YS7XTxFiDHu2DH3GRFeNFnCuS4n1sJKwonvU8J9bmtY6zoxwijDaEsvJyzm9ivwpiuC9bTJ7AMQXBmNtmgCi3qH",
  "key7": "5oakREk2mbTJWZaRUotVMjt57DX2DTZxp66MfwYT7ap3AnkQREfEeT7N5nnbkCFqLiJUyZ523hW3UpTZfPNc8qVj",
  "key8": "4yCsVhmeCEAosnxLDhgHraMp6BmoA6nbDTeH7EJPfQH5WCBXv9Xi4EX3EC9ZdFCPn5ddZacE7pQatGD7U7jbZf5X",
  "key9": "3GLtJJL19YmyyoYDpRUGBMTvoYQPsZZ5YBf89BkZ7DaEgfRE8z3fnqw85RM289Fv8nGzU8Gp1Gq3f37YeDyEXWhm",
  "key10": "3ZhP3dzjLZYB4C5hxeHnnGWPSD4mhBZe7RN2BvamRoSSWLmXRzkecKuJciigXa9wbcwu46b42QG3kpjLZ7jHzVA8",
  "key11": "5YCRzjNXhc7pp2YhADHiu6jLZGEkGCtP8jvrYpLM9T17k6MavSFt4yhofUPTY1CrU54ZWKPHXCbSYdTEwAz5ezWd",
  "key12": "5Gjwqgbn4qvC6sohFJG3ifgM9NwiF6eF1HxfwhekchbeFzLL9Bt3x4bH4p7e6c5jSehWM2PzWoAENVgefRz31LBk",
  "key13": "36bGtyPtwF5JAYeDD2nXMb7q9KZd5vNGYr8TEs4a8krynVmnJzQp448BywATbWzTsCKwFwbKob5FmexQTSBc2Roe",
  "key14": "5rxdJtYHbmrefF4tcPxzbSofHBbCBbyNyKTsGdVLDsqecXGS5euegv9xFywZbUJXbJbBpwceE8qpw3HRM3CNE4pU",
  "key15": "37YS8upvL1R7wa8md8SDvQ1M1HKbYYSzVkx9znS7KtK3PJKRFajWjkanGcjYNEwe1vGsxPYEvnzqgnaK8PTZKjZ3",
  "key16": "3sA9zYTngu8q19f3PY2ZqLX8ZADzrhnZ81WTdv8LF9WdiTbGBXpFRYEd5EuD9EpGtCUuJkZyS1U3cZQjxBHLYr2y",
  "key17": "3SQtjY3HBga9N1BzKCQ7UZz5hdcWhgTpcugH1JYZbjpowE8mhEfHwXziEdCmgpFwWqULVkAnhVLThqMMQKyWxVZq",
  "key18": "w42DbfmHhC8cuMirrMFLvzCqZexaZaRTYctNVrrWb44q7mZFaSUXCvqrwxU86YVzzCH8VTnMJ4eyvmGPAF2Mrq6",
  "key19": "uT68LbDi7Z6GvgHNWhN8Egsv5vfZ31xkyEPnj2FJyoyC1oeS2vx1emRgqDNi1E5LDnfo3EPUn8AKBWZDCmFauFr",
  "key20": "2g29eRobK433aoYHYEvspiZrkirR4DYfNEKMsokD5F8YzXPomnHDtTCrssLYxTxBXR6kXcDpAw5mDimzq93P9Dk3",
  "key21": "4xZnZPrPUgTBHtkeVgoViRFvAhNANy63BeWhA7MgB7GmhhYsxPu11YsmdU7uHgBrLzqUbsmxti28ErGWttcFriCZ",
  "key22": "4y6hQBy4fBpDcCjqVZGW5aGWUM8MfcRXqM312Wj3KhbgA92zcEm3sXkfM19h6ewecp7E3eVrQEkmZTVnGtjAkSnc",
  "key23": "5qGYgdkrGjmtkNN3XRzfN14DMru4EYNC8NEuMtv2nmfBF35ZAWiX7TJQ8Vaaweut6acGCHm5ponKyZjBpA6DXXuD",
  "key24": "3E3eKLhHPnaW42Z2BcnxsnayA2ctFCNfVBjdA2FrRNiEzYP1QUL71zPNZDQEW7YKBMxkdQZuX2aZP9pThm6MCAri",
  "key25": "3hLzqEWcy4GsX5vCUUxX48zHLfJbFQztTn471HwZYqWieRftBCfTCqryPjLhfvrC78SPsk9mNXp2eZ9taB5Kr6BG",
  "key26": "3AS6Mo6NBtw75PxLv3DeXpML3RFWxiKu64F1Bjfve4x8aSKCY1cFitcvzU2T6UyhVFpnMEpWbba2MSPWanLjwcUb",
  "key27": "mQWwhuJr7UzvUBrPLKSnN3cj82YY9vxy5My4WsZc2m2FvXsFx6TdXFsd8TVNkm9qJ8nMqTzzWJ4otFeXEaVHEip"
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
