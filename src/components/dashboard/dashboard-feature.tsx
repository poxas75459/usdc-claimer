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
    "3h6E3E2dG3GtUbL3rB153LvebSdPDbFBnGiRU137oqQL4obtwMyPaaE2Kuces3uqaHyqwnNWmNxFr8gEeZcWBfCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZvUno9bmV2vyYR5p4ajkH9ZzaoXa1rHuUsswX6wBRWSeoy4BaCLxYxd4UT5bCwu8wMjomLhAeBb6DMUvGiyQzRJ",
  "key1": "47nHd8tHMpxwKjbEwHQ3PWQkFHAAmJWapu1thjp2Ho5R9fHLAdgjBorvYeg4jNLXcuB8MhKWcsuLrnUUvrHyRJbR",
  "key2": "2XrpBnJ2VQ1bStug3PRYqGgguyYc2viJGf94Bqxi3BfRVmmDJpmsXcMBkigXepbb4QbL6foZK4fqGSkfjXcfRo4U",
  "key3": "67AWuyBFyt4aPsYnMGbEzCpLyGfeYA59Mv9EaNEkyxEQ1HDQA3y2HUBb1okkJyqeJm1gQZkTTSUaxRfMQiGiv3cb",
  "key4": "62LyNQkxCnEDV7fKE3T45GVxLB7Wf2236nJZ9neQEHWkqDVzw5JE38sNvuWptvjaKAmtbZU2aTXWEHzqWZ33LqyM",
  "key5": "3ik6T9ko6eUWQL84LdiKQCuGg8TR8g8CbKPbGMNac2RygMVNph2xLVYMd6teaocGJoFDEeTVMapVXdLZMPipAjTs",
  "key6": "4k6FxbTqfzvBDo1zrfrz3GyTeugwa9VDtT6TjfR3digKMGvuawkozPU8Y9kWfsDP4oee9JWiwBeJMJuV116DaV3x",
  "key7": "43dBjsbZZM2t1NwExWnJdWq1CgtEXcxueEYmUBbqHnakwK5xg2ioNS9dUJuGdbK8fMgZ67oS8p1agFY62oreJqqw",
  "key8": "1ozvSDRXYBCPfwqKBMNPsZzJajVYVXnYgHd5FotHzxmCt9bpe6LLQaavehndGNjkrSPoRxJgcSxJMTAAT8P9TUK",
  "key9": "48e7w4i7N6BsTw5qLx62NYNAAcgjPLjbUmpNdTGphLT2DSJgxt2RM6BYKMUiNsdb9yuBi28kQNhHYwBwQDoEXjjx",
  "key10": "Ty568mmwuCY4UoLnut5FBtDNTAhvKDRfn3WStmsCdo5Py9PyTW8nENNGrEV1YfQ5Yn54BXdeD3fpVRNW7ocgAD9",
  "key11": "3DngJUak4cyW9ScQyPUGw1a7gqk1uJsbGWDD1QgSWUZmyoDACrZTULUubC4SZjELNSHTJwBavSLkqmDf6TyA7zDS",
  "key12": "4oXNKDzQYRWtj2VFT15B9Bwyfbn94TiPt3sbCztufNxRJw5SjGjbRTRFGCzTsX1Xqye7e1p1nv4r6d7n6dVHfg4N",
  "key13": "3wCGYKUDJUqioZw1Q1TGEqCnFUK7cGF2SPNaAhcQkKSscYFLNXReyFEF5E1MisLWV9wDRkw4xzz2ENtHQieeNgjM",
  "key14": "2enmbVyXsJShnEC6mejxJSN9JynXd6ynBF4aBUefLa9BFVQiUBcoQaFVLs3tvXuRZhneu21Nh8fcbEx9titZYzBF",
  "key15": "48fYbhKB7nkRcEQ4rhbANCiCp2CZNGzchi2ZyFKisETTjoVJfkEqWRtpcQmKk8rxbVt8wZT7H9s48Amuspy5oyBc",
  "key16": "5usCet2EwSMLGPjuiMSs8pA6wi1UrvPQTdVmPSVLuoyvtuFzEe93WLRXQKdZmL7jgQLzWdzQDWYSaniD1iuBAtMC",
  "key17": "3Xdu9bjcu7yAPEkJifPz9S4aE47HJRUnXCb6xvCbccam8wvyqHGw5NqdvsfYPaLhrnFk9DfEFmieQKmMQd4c3Vh1",
  "key18": "55WUBBHpTYjFgeQmnthAU6y3JahLS7W87ujqJs1tGhUru4cZJf8W7e6TYPazQMc2FHHNHuzutYt7N2k4asUvae99",
  "key19": "5v8P968wKUjuSBeWkobe954KCEpZb4fYNyGHms1R4iaN9c2WAtDVVnMmkXoeeU7ZxGAScqESntkStHzDkojkwiDb",
  "key20": "3NYbo9VrxrWkpUAFsiBAoMcfVTrEgkc3BwQhpdL5BPea3Qn5298dHPA7N5NMenvtJ8WAj8VTvZvyq9woHmtgWfBd",
  "key21": "2bqwzS9DC2yShDarwDJhpze1jXnHCLw2knhGzZo4nVKSJvuLwaa1M1Smkf59TCdEKzqvop1oQPtWnoCRV2gUJFuu",
  "key22": "4CrXzUREMkVnJs6jx47yLPCXtWXF9DmLN2ezQaQTEEmQaXsqmDknG9EZr1mSfYAx8S7mumNu1zoFXab2Qfshhgt2",
  "key23": "5gWezasKFDH48pNRxbozrmeMwQ4diyXR55WQZwAKEkrgSBzM9pLXKBX3hhvqVaP4xPy1nxJ11XEbfZLPupp9GBgR",
  "key24": "5PyMgnpudJV51G4JDWceHASnEq7fxCaaKZun1E1XG9LWjZPn6rXfbZZMeM6qNAd2EYPDykESMJfXP5MM8WEffQi8",
  "key25": "59xyekDocxNpVH2YFRwAJuhF9K877Hhj7X5eH5rVg8FF9jfec7gmUxayfJehmi6kLsCuBbMp55jz9hPQsaXijr61",
  "key26": "63G7GsoCkqGdxEGBjZBLt7gF7wYobskHmsQ8Dvjr5ha56rb2VBDUAbsM12ExqvcB5vLXydsoZbqismDecvP4YobG",
  "key27": "5jpaMuWr5C9ot7ApzHqBm5FzGDFa6GMbimAXzCYkwP9uRVsocPwyzkohdyujXpj2HciTK8g6gNxxcQgxSzB2tSzL",
  "key28": "34Fii5hHeJgZpQZH3TsSsnwzC6i4NCDfku5zB8JWYzUAoHbvxTz1WvqwwMYDeEC9GpZpsW6ncx8Vz3K7psaYhDXB",
  "key29": "EL3umj6aMLXT93kthVdBdiSTWqcJMfVZvnsJJr6u7HTyvEQLCPwsCr5a7YALitAy8Cx1gJdmighzXThLjJwjEhR",
  "key30": "sSoaKEerGye8kZcv3DA3txy7ytuLgGmu3B22LGquYeTPjpnpnicPttpDp1buAVp2eKGFa4tPmVjfHyE8x9rgsre",
  "key31": "46Nd8dKwFQPMrDDwZoLtrsBeLrLj7vN7L2HmeALrHwE1YSueF8UCKLAZAFdhAcuzjCpnZmKUqcoqj9i34c1HQHV",
  "key32": "5G2Ffqr98qAxpCHtRj8CdPeyNvqsfYUt9upnKFQSKEPyeEPEit7uzeVgBEWHWb6p6zYLsZKCCixok8qki9DMgjzy",
  "key33": "4gGMZjZR1iDz7nYRGCKLRkjLC3yjJazw89i6dvGFGcMhM9cuCPvYMTBoqrY9JSHes5M6f4kvmQL3FAKZMsd2jUkb"
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
