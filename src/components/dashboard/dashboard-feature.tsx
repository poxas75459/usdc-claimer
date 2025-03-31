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
    "2jn9Jj7MuTiSCCr4XmGJ4trDKLheKLUEpJeZKLz9UXU8T5S3sHyJ3TZWFLKHfsFMN24xDHZTYzVXtohLCXdKRbZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U7rCPi17bxVpchmpty2eNEE7RioioPtyAv5ptLHuaHK1aJaDeraq4BKPhTmtPedf4CXijEz9L7GKVi5EKmZEwoB",
  "key1": "4XWf9bho7v2YaWHFAcneLSGY5UeHwYmDwPexPkQQR8nMR1tJtHqxBuqiyG7gshUvtAyPhzY6bRaxQ5ozAkNjZuBC",
  "key2": "TbDxhzAmD4DHRTNkN2QHUb98wcBSGcCwANuhRe7XSRfZBzvSYdmYktqHdt5XUSLM9pFvNpoFhQB5UXcxnZm5jV8",
  "key3": "5ogAsseGvkGaqwwwUqeP9oXGNNLx51TRmKDcC2wjFsyKuHDZFK2nBvT3HXAWJaVkJo5xXieDxm64pNowzdQYMHpH",
  "key4": "4AbWcmgwbSu6rVLa8dwnZdrXKVkFqihS7mciX7EHgP7eqzKGmFtRgVLuKAdLFh1Fvx89ZyeAGpwJ1jAigTEeq3Rr",
  "key5": "5VcGb8yLbZKn11SkDYFWnG1Y6W1AUL6tSJSjC5oo2oSsVsqEBBZKdUJwvVR3cBLt4GwTvDquKeFtPeXKniAM7Epx",
  "key6": "5Gygd7UctBzWGpZuzX1gstrR5mzFgudmyGMdjSVqsJPWG936Uj8GgRgHDEGBfU7u3m48RF5wHPc1koXR9ibVvces",
  "key7": "4u1xDzZ9G2DKFhCykTJ7pEdWJ3rhhWTCndra67Ay9o5y9AmzwfWSGfbrqWk5eCsNVMh7q6CitfT4xHLM4Rb77VQS",
  "key8": "29cabnuAEa5ehZ44wb7uZYDUADArJyGUpTu69bU5yjLeFTZXMiiod8jAPavo3maLEui8sf7GgTixSQojqPEQHAiY",
  "key9": "4wHJoXV6EJ4sdQdjJG8zwWV8bJNL9Fv3zMLtdYd4jbqcwKxDzLCoYY15Xtr7c8q4ySgCLCM99yi2114aF1bvapRw",
  "key10": "5FBaTMnNTUTpFRGxL62jeirnwPJQbnFr6u6GCBfsmDyM6BuA5rCnorp8HcpYECWS4mnB4URHmwsfVmaFJDVggGVn",
  "key11": "4yfMi31gcYJFHLA5TY8fnvEdos1wbkTfBBjaN44pRfRwb4i1vXRGe7j1FwXWsWS3mZfHRSppQH2te89NVUt5EF1Z",
  "key12": "qy49oj9nwDtJXdWUEwmr3VvrDsbXTNSTob8cUYrVq12w3cpCPeQ8YvEtzKr5Bq96pY23UnFPndaG4VNvf2TNKpT",
  "key13": "4N6ujSFi22UDW75UHzUSWpVMNSQ8pqMZt4YEFrsjrDft5Fa8MjzxMiwpCDnnDNSCphfHqkksm6nwHSiDzfPnsGn2",
  "key14": "4QaShxQtZs5mTAiMeibhrhFe3WYier8mg7fyRsoo9mqVs2ybzBvB2tDVUwfhHbMqNPkbXmec2c5qPhVb9Gt9PLoR",
  "key15": "3Z5PePEYgfkgo8vABQc3e9nvs8ua8pUwz2DPjdWdvFP8HiRhFjhuLkroWC7RGj6ZoKW1mPQngjyohuBRPeEPzbuH",
  "key16": "5fHByvq7HFPaX2bTuSrvhDKV7aTtGpjdQHeJg86N5fESQVmM6tZ8mc2swtracoKsjAq2QuYuifiyUuqMMzghkMzJ",
  "key17": "2tK5M1jGLh7NJ4KQfdAv2uo7BGorq37myFK2WEfpNFWiYFCGbzh1kuYif11pYbnweRw7kw1NwTWahQY2X6sM4vBN",
  "key18": "2wRE6aCbhQjNrwiNFNR9gPw5XLLXvtW7UsRfv82KmUTgRMQQEUuxCrkdnAjTNMkH8RrXeYUYBJuaYJtKmnZrBYdA",
  "key19": "jjxeLPk4C6YVNzMZD2Z7rQPpXdiCjdcX81CBnqq8dKBrtq8SwgdxuSzZu9DdCAchXKahB6XPnFFkuLyPP2bKFWV",
  "key20": "ritDUYeXMWnikQRtkgdKi3C6k65c2KP5yTg6NSmHctCjFn9v1dxCUf9yS7kA7MV7zo7AaZHYaG4o6389yPS5r89",
  "key21": "33EncRxbUUSKuFTZvYhwn6vv1VpcLWN1YXMudZE5SCkCfGVMQvpjb4zF9h3N9wJmELQG5Sfd2XAJsgTFqQKyATxH",
  "key22": "2oGv1r9nD78KZJGPjN6Ugzs85iZGBjRoZXUP48uywRdf5gSfN3RjiE1zT4gPRFXiPLN6J7APr6X1VsS3AufQ6bPm",
  "key23": "25hULznuxqcmAizPp9TW68L4C8gKmg6wmBMtDGVNQ6qFbAksdcRcx7YC8TZBEykn5NNu9wkmgZH6hJWJ5sqAqTeY",
  "key24": "5kQe1vZ2FfvADrvTrGtmmYqPXy8M4KgySHknmdaGpnjswosxsBNy3caSrKEVygqfJXayV9gSgRRvsrntFubzqscu",
  "key25": "5vVkLoC72knA5o9P6MDLCaZKHQGQC4Fs1yeWpEFTbtf3A7FzGRjmdU28Mv1TnKhVhUXuKoZkzwW3oapGea1gWF1v"
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
