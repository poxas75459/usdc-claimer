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
    "ZqYAjJb7DWrVZhtu6CDt9vBtMAMhGuswmB2Nqbnayy7Lz6KNTYBoz46dRWkiWojmUBjVJnuwQnfrXTf93TvXkYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KGTbmvpYnGP6dzRsYFzNx6hyC1BiTpRje3sAzoz2hu2tifLoc4JEfS2qVHvczMMU3QXioMnvXNJ4eAZdt6aaC7g",
  "key1": "53TH3vqNgLG4nkcbmuphCcJyGuBynPLkeauju2xHHUFVSPxN8ahf8VKqKh52hV2xEpdh6jjdHnM77yMDxt8hN8hd",
  "key2": "3pMX8cVxQXJxCd6FQFSCZpL3v8gnT5UXSZXEj3XJichqRXQZkbp4dEbWzkFV4arDhK4pa7VXCMck4hspnnaMK3Hf",
  "key3": "5engmYPvdmu6Y2pfDGxypJyxaSmFnCrM12gLdDyVwKnFjqc5wFi1VUtjNXR8QSz5ag6gCH2WNWybCeqbnu82MgFh",
  "key4": "3yqSp8qqRSqKTQYi1rx184WTWkpCw48aj3rpZHXU9JbRoR9Pg65YyZRyRnXFXZKiUNkGAVVn81wuwb1szLJtYdF8",
  "key5": "41NGhj2bLQ11kaajp22h55vLUNyqr7CxiB2zCPf3oyEKAAeoCjmeX8chaSDPgLe4vVwDiGzgJLxxGwDezwRFWnhC",
  "key6": "2Bk7udz7pZ3hvKbi8Kc9JrZwZmWdadvSNVXMdN2oonMDC5kBeFQEB6WFeANL138VYMN3Zw77Ajf8KQZ88aH7Horj",
  "key7": "3WM6sN856TaQaQWw44xwnyV3QtTkHqdQHiLrGjVZWWFNM9WAXD14H21koPrKpHT7sw4oAbZz5UqCVyZHJ7ePVw5g",
  "key8": "2iK1wPrb5kUsJNbRAorLdvZ9scatfuzujJRnjkGESSbSnMLvRw9nbSPpRoK5GyGppGNTEcmSecYtDLr2Xr59m7XB",
  "key9": "3jPzSQQ34mywmygQNH1yHPPhoQChMP2dactAHzgz49hHLPqbgHsev4ya79r6NgYMRkXTSXDfo3jsWFE3MPKEoHmn",
  "key10": "48iXccMtbEduERoifdi6Z7yjuYwtttakKijn9cE2DAjGwWv2vUWQ9Wzucr4ZexH2tbyipJ5BuC6E74gB1kCcGjL9",
  "key11": "4YnrFgxCH3ZaGfxXFHMR6a6X5rqfehrFi22QyGs3Q3vUf9muV117GNic4hYyUy2aBjcfvTxiGmsVsAsfpCvc5zdr",
  "key12": "4vcAQPAAubYtGgx7YvWbkYXMPzAg9wy78V2LB2QHqzZg4uarm2TCbmNpATmNr5dVBNFQgwZHw11uxG6VipFcLLvK",
  "key13": "4Tawvc1P2QRqH8zCb1gHwcEFDmbQL2tX1PZbxwsoqjVEvrNEyLLRofMThq7VUnLdqu5tFrrKppdknjYm7P814V52",
  "key14": "o7ryfNvcZ8fk5nmkr1JrjfdSvJ6kPUMEdGPNFPpNoXMksps4m7Z7WVotzECpdrA6Dm15Ppseghsy6SuKNMwo5di",
  "key15": "2Qk871AxCv9iJeBAXRg9Z9XX2HEjAfnwoSSS8kh5SkZdTLg1cY6ePBHhFeJs28nwRWTKMwjAFJH5JVYd2ZR5hNTm",
  "key16": "3cRoeTApRVGZCqrbYJ1nQkNLv9VutDRq3AWhVSdDdk7q8zinsmPqjEizZXMdcKNCWACPqNCFWVtt1B1h6Y6THDEh",
  "key17": "maSmBaXs8mDVDmBfr3JRtTCu3tWnstS12oM7q2NJaTMNBo7q6fzzYWkK4jkoUemgS324sye9d3j8j8oAsf2nCJK",
  "key18": "4RRwsqUFfMqRXQmLuBvfKNjk1t4nzCLxAseU4r3aYMDSzYJPDpFKXTnAjN3GqndfECjCGKi47799JZnuFR7mqWr7",
  "key19": "5X1JidKD5B7gWiGL5hqRU7J1bmg1AjkM8hRt5k9P2nYXw1Vp7s2Wj31Kob8UvADqg4C6SztAxYhZYb5B1q3hA6u3",
  "key20": "tpLvT3jwo7wnkjjGzRzCWkokgzDudYy8NtCnHA2jSCe4NqihJbTixoyqsZGCicvCXYCZuJkLiH1PL9iKUSdqLdH",
  "key21": "3DE8rKfTw4ZQiLpVdkwBMag3gZurkqhNkQwLQxkVCLFNoJLpQM7ohyTkepLfxJbpXxmXXorbNsKkxTQjjyRop76M",
  "key22": "3A7hPvraLByuF9Vqsm8ggp5rLGV2wXfBGpTQJFnEDBoq1QjMnRX6SCznhfbNwVY7e2mztVvnc4BdxzYw6D7Yc7tZ",
  "key23": "2MqtUgSBhxJ35oBrZpgUMFScxTMTCxgGvji2sLpXzDFMCarQAtD4W1kdvRLqoozMeT2P4mtYjXf7uYaWJu2gbNDh",
  "key24": "XxnXHt362ozyUasbWoyxTHRaFJVNcSCgnT8MbPBgD8SJRxDfEWraBKuFXcHTk8CDE8qFcnq2dJkkEfqf6rnMjoc",
  "key25": "4ECHTKnhMntdT88QBGjqWkGHbYBrCTgoiEczTQjVVyoB2EkN9feuMDVtNthHLmmAmv2Bwzs1ZWHmYTUjJ8ZPjpve",
  "key26": "o14kVFLQLwfkih3PePUqRjc3CnLu8FwevxX58JokfvqQA195xnuvU7yKtPzU8W4beEyFHroBa3qErAZeyPbWxyA",
  "key27": "8VsDWnWd7S1RfZZDkFYoSqm7KUSN8wDSms3qPk9AShZvuMRCg2wGt5APQ3pUERNqrVAE5oDAH5PCojgVXPtfohv",
  "key28": "2pQkDbqGuUoE7tKWbuu85XwnHNrvjkonVSddWjmF3T2ZsSbx4Pu83MXoSy8k19wjyheyFY3aait3QG1Mg7U28j6h"
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
