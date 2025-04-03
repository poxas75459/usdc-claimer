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
    "2d3V4U5B4geHLJxjCsTVnPjn5Bn7LeDzRTuL8svfEqXjSysjQ8oC4p9pd9m3hhKz3VkSrZfQUKCt2ts4mqziA5Ap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YcPWGrkUpq9RVsxhzcwEqAr8UGFu55cDbeWWpStwKcewzVKCL2CbJghDLLknyEaBQEJqJu23Am2fu9rEccCYETu",
  "key1": "2XUvK64W2KJc8V8d56BGMLskyam8AsnBmNcDc6Mo3xbjwBNDhQbLV8AU7VcdQDpgMMJd58TMs82mgN2fL5uvbjFw",
  "key2": "24M2GLBc14h8uVh6t9peGjweR3iX93bp46We5sBWkSKDtBb3zWhfeHH4u7dzE6F4Utfmf98g4jUn6Xgzawg3jwYU",
  "key3": "54cEuAQPTk7FUQEKLDK1pNiPA5XxNBnYRQ8JA5jcGUFyan81N9x8eRfaj3sZMdVMnW8fZeRN4jrY2RSCSEKt38AQ",
  "key4": "2qGiVJ95hwwV3YJ4WdrK27QMiorbZ54q4qDANfaK8WGn8jkXE6NNNtDzEAfG7NXKpVASWBjEA2NMAZYy6EfPUkU3",
  "key5": "2t5BFB2b86et9aMhNjXrK46UQDvgYAXbuHbSNsuaoYf22GuEHrUZFdTtdLKR4wySpy5MoDUYWp21LUq4zTCfbqiV",
  "key6": "sKigYMQyE7pn9232Eqyo7ytpgMhavi7vNARC9XcfAFNvgTaRmrpFuXhUkGfunbjw8PezmgW3izs4Q9g1Crkjajs",
  "key7": "2y2YnHqP8LCbNodmnSsqPdDK9paVyYCpGcCm7QMGUrfx3bGdM91HaoMmYtcJdJ3RvDWYM3dD7jgVX6NnckBn73cP",
  "key8": "4aFwcBsGZaoqJyhh3jHAi1GniNLpzKq6gM5A2b6QfUyQ2DPWoeTddvbUvBqrb7Qx3TpV2eemVd9E99di4sPxjnQn",
  "key9": "3guZyZ3hKG9ZY4Gij91PbBWcfA54qQi5jpfH59YVeUgn3ZW1JT7B2gFFQwDVEcmPztjnE9AwZ1kbiZq7uCet7Rz8",
  "key10": "5HBmup7aCGKYB4qgpW5DY2spVNkBfNRdAr8fXEUrmrE5wcpwpQDzqzbfKRXWx1y95AP9R3tW8Gtpqaqx3w9SDSqC",
  "key11": "37pGyL72Zahk3g7yX8a2kAyNJ3FFQSwC5CdvJ52jmu8u3cAXeYfUkeMnJ5U6SmXtu7kZ3N7hzZLKGsMv3By9VQ5M",
  "key12": "3QmS6r9wahVPekTMAL5hs8w7SPiHVAqBTQh83Tmsk2QS9bKug26uYr3yi2aJZsLihBHdXSigRhFqMJbBT5V3tDp4",
  "key13": "UYsJpKfj2uWEZatxyoQrEGdoVNYb1Yn8nZaAZbCRrAUavPZSu2uYdWLC9jShuW8Sf34JDamAe25ZE7YicAS1WuW",
  "key14": "2dgMRTHfNYWEim1hx3KYHXcZonrk1jE6DBVqNHsJXyfG59REWaZSFpbJs1YAgLT74XJTYgq16BmDfAMcgdinRTzh",
  "key15": "26psg9YTCEtiLmEXdhynyF7NeiVsGhiX6ZMJtNqppT7ojkPaBYUtCyGLRedEvHTeu4JUFVQwZB63MWxwNfuW7b2g",
  "key16": "5WT7Cao8g54FuVWNAsTdXNHTwLudho9cYRTu11rmVtYsZ8ScKi1vrGFKcJoq1ANMcB7n28Ercx4PgavYAjunsHnP",
  "key17": "5wh5ZTcjs6ZRYc6DyyWaHtijzNQdS9YttLbNtKoUgzmHD2HaKcCiLP3tEvAMMTfWUMWyjrPoxeiGsxCordnrKFH9",
  "key18": "5CGZ8oyjfy8Wh235RJDFeotNFHL18shuDe1muJgUV96VM2yvUQjsbFDx3EH5R7nVrhbBrxyEGS3efYggeSqz6xnD",
  "key19": "2nxFu79Zef1M1oCKroTG1F8vdq4V3BSv74Dd5YpNgKYMNmu7CAmwCxBXWxQxXRs6pFYWNkW7jDn7At7t7rUUjdxa",
  "key20": "5tgD65owUJGZuMEtFQsMrFSjAmfRQ4PxTHiC34PMoU9xcLTWYkAkzSApZGUTyQCDVNMETJcamkC9CXGSqfSXZnz6",
  "key21": "3cKY7k9CoSUj181vBkx7ZL3HdbGtevGMHXi6EeAsnSjzDVhkYpwcryTo9DD2H3FRLgeJdi2ydTP6Wt3Ps7Ywhtym",
  "key22": "5UGyBjFPq9HPBqetP3znBbZ2fDEjT8SGWKz1aN8GuwHciLLQx6AWVcM3JjVT2ARpz7BgA79HCLUCmQ3XtPPksX9F",
  "key23": "4kZrVMk3t5iPtiN1HjomeZtnJZ7Ue691VbfNSHZSXxZ3grnMuBcbMjQ64fZCMcx59B9HZtkzoh5bhz6qoLJ36EZe",
  "key24": "5LWmwG8RLgeNiDdaZt53D88LJn3LYAULizrrM6iV4QJsExJuNeqtoexvK7MzgcLqohU1Q9mNAXskLuG1zSzeBJdB",
  "key25": "SxGiCyjWnwG7tjr52CK6icfEcDLeW7mPaLL7Ddwk7iSnsmomcNx14DVkcmv6mUHVDHf2Aqsf21kGWcLrQoM2Eti",
  "key26": "2u2pPY7ZFVEaqRDZHxyLbj4Nu6yFUtWAeyTmqLa8JqH3kww6ZkZY3hbQNAXXsKHiAihwZ4xjo3JbR3xnCBwFL5Hi",
  "key27": "29mSQ8xn5v3ooa2sHcwn47qKkizu8vhsAUgFokAvS8uhJ5gAqCwxVYJFZaiX6BHkiM7x5WoacK8YRKtM6VEEpxbm",
  "key28": "HvFPLg72LGQFgMb3vdooxUGvemim5QPRgJzYrWzQQV5RC1yDoem9SP6QofnSL2fwgNC7YTWpwNLqyHJM3iSJaVw",
  "key29": "4TKMybSWKuC29E3VucovwPWKcoozh7dZ81yaRXGeXmnLatRVudm1rn79HWSCjhJcpj5XfBmvjYLMqVCQtZWB8Ftv",
  "key30": "4JziuMLNaX787UEKuoGwcLjFfhQVD3ne49p3AzRsP9MbimXpg1tFsqXM6Kst9TNddQrfbUDMcgf9i3DsZSvTg68N"
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
