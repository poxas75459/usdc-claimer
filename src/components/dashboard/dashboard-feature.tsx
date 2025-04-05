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
    "2eePYYgLhg4kVtEMKRF2ZqNYB3Y6jMChXbykRNupLebBBDq92nwVcDZ94URFHKTmN4jNMmGykDhSELJAZ4oKzBAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Tr4tmtjxFLUhndPRNoLv1HTxutjnckPoWFwnurJR63s3buxHRcmMbhwwWJdJCT3e1LcRfcfVw6MVt1Fz59cD7C",
  "key1": "3c2jJjNXoS3g45zhhP135AyxycA628eekThSUgJSFYptQzZKZm6wRk9PBP6ppR66h3cdQbT9qS7H66nv32to7rxH",
  "key2": "5Lycs3FXVMPHfPHwACemQxghdqMznWFnxcDNWRpK9nCkFKyUecYoSRHrKMrMqeLDBik2p45imTevshW6qSx1k7xD",
  "key3": "4H8yq71CVwXNZigELng8Pf4nn5XJ2duHn7XCCuhYDgeZL9SniUUbTDpyEeeKkYFzxcY6WoqVBLMW4GSpafxFLCXM",
  "key4": "5USexwLs5oBMSQmfMyr7HMzrsiUdj7uJzNJRuAikRtsLsYVxwMLwbAfYuodLTaKyK8HZgKJL6p9LCWgM4a33eqAR",
  "key5": "F1CiLQfjAyPdf5fjWMzSvB4V1YMxuz4cUARFHe78HA2z4P1v1uLyjrmisybRTeECNF1vqcXtuE1KfZjoc6AvXXA",
  "key6": "5Jeimd3f3NrAeMyv29Qb49rdGfqf9AHV6ywZtQbh8UC89BQuJMSbvrVtLxmoTKytKJtn7LaLme6oSaKhuKFsR9C3",
  "key7": "46Ge4kJA5RvhVLfMSMAh7FigdSaTqAhT34DK8FxzmEXWxjpTp7L7RyznvozLA2FNh1fR2ekmNpAvA5Xr8bXZAMwM",
  "key8": "4WBi6a9NtjUhV567T9uFvY1aEFkjy2mvVBUsXpAmQkQxZCyedK738xVd6g8NtFxSvk7JdScVLXJqcCH3T1j77hWc",
  "key9": "3myRzjqwfhm2APiCW4C6r87Zgs4oNwpyptaBHtSfKsRnLaHAnwHMn1gxqDdWXLH5RPmMghviGVBLEq6AcafTWYsV",
  "key10": "3usUzZAXbQHHsJw74iWxzYxhZxTi6rZDbi2G4vSavuKbM3eTD1RVu26cPutY6sUryRZpEEgmy1wFPSYhoJgQUSnN",
  "key11": "2Q3QTdbw82os3h5bkDTzUFK1cRtWs8DJesfsfUaQh5A5VfQ1URBSrXvWcS6txwm7cp68FVzmZzkax9LTXgrAjso1",
  "key12": "2rsYFd45skDSk4gwiwBHVa5zvaYyQMAR47dJPgRNnZdxyubcwWv8JDT34ZCcLbsamK3mMCkMbEu5HwoUgk5CHXvP",
  "key13": "52AQfgWxZfG2mNiFtxNFsYV1mrvNxZNV88hgUBxJvgHeWQRS9jn8iVLKMr41DyutaTJ5rdPsFK98KXxnbkj3XsJU",
  "key14": "4GC5tQc8aq4JLQWg63QA1jTiLLeqjpjN7G1oRs8VDhiXCWjXjS2cPJXZmEUUCG54rzwyEGzdRgVEnqMMtBqD4Uuv",
  "key15": "fjfNWiku6qBdouY9fHj9TUVrRRifiSUT2RrUeXRjfQgG6RBbANcZ2zC1AYpF8xLLHUatopvADZZrja8oLKUEFzp",
  "key16": "soUWG5P8CQoKYc1UX4G3fzC64kRdYxEs5JvuUTLRm33rWSaGXtpPhuvAJRPbme2z98zC4QRqpDZB8jfHB2mwStq",
  "key17": "zYSkpQNUki7geVRifgZzmPXqKpVgXW5t57bNnC27W9iGbNDb1nWxqfzkJPgHVTCG11GK9kiYhEui2d5fJGmGLiN",
  "key18": "2YrnLqfNZomU444p6iQJNtpcAmVpBjjAurXFs8gxskVmw3ihdJ4x6ws7PMpRvxb7WXAjZGVKxXsiuaXbiMDNeZiH",
  "key19": "62682cF6H7AVgucSjkmkacxuKN74F9HrYQ8wjnqoSN5LXwe6yWBPJmhmz7sSHrz6zcKdk4pToDQQuVv6tYFNeAFd",
  "key20": "4cP8uiepxuWynh8fPph9NW16Ndxh8m17NkR9MGi1oPa4FuhxybUk5SQBnGc2cX11gjTxmWrPqZzX2fLKdKyCGp44",
  "key21": "3oor96w1Xq4W4RKvu7yzFicWPUD99WKP4fWFr5LKu8hiNi7RvGZCPyJQoELU3YdLwxJcBcj5V2Fp8G97w8aN4oPr",
  "key22": "3AX9xoifMjQVVd3Bmxd1QfccWnpid7c3UEYgh72tiP82PBmBf3B5Jcs7kQFtDxVRhV8W29n6LaTT4hjJhr9NLpqS",
  "key23": "3PG7Wpjw9tu12suhm1DUBKmUWoq8CFKgm23yeeW14HCTKB6Qrxrpi2DWeHAmZBvEzS38diBkZhtAds9q3aBphJXC",
  "key24": "4p2dgjFo4L8DMfSTEwhSx9HfTXqoiQWdSToXdfBBFAx79fkCn8PtWsD4gRtCScHeB8RLzEAW1DmgPgFhsYk3Ro9e",
  "key25": "2yXfh4u6sxqy2TTz9YCLcvYDcUurnAmuAGHT8bC6ZmCjqNJo8ZTBkGbizZzfPV3eBNKToJcP4apcmu9Bf2eUVwz8",
  "key26": "24WBJtssTrcThYQLhWpZeNYkc9cu8zUdySB1NvZVXdMtnd7vv4MttNvEbY74W5vvxfKCw1CC3D36wmVgaUTgimEm",
  "key27": "5Sqo3DKGqv1hWctCk39LrwTrsbjWFrJbj9v8b37dL5SPTC35oo8k5crxQDKDMytGtJMfPX2CMBpQvWJzXHN23bFi",
  "key28": "4tcP79LpQSiabNfeC8VsRTKmx6DZQFbcL7BoVXhhr57nje2DWcSPBJRg7k9ZtPYySw7uhV22bbsC2G9GsYvgrhGb",
  "key29": "MSHp2FdimMM1pSdEKZWvtgQRxnXaysT7JvekAtJYrkYDMvfpXp2Dwoz4va7pE68RoEkLmxBRiVQ7pXNm7MYjcJs"
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
