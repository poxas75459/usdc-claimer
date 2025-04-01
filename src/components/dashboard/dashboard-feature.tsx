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
    "2GMuy9nwCHD1t21vSg1iV1JDBqDUbrQEgqf1Q1fUtftAtYmHcxWF3mTiH1nRFzu4u6N7teyGXWo9z84SxCJwXD2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xv9RKg9h4R3EnQSCT6d5ZZz5WjagmWUWP3JzcctCNP4fumy63FLNZ6dTJ7R5nfFZK9SibWv4s9zFptzq9rYUu3U",
  "key1": "2mfkhNrbFM4dbE4vBLcd1TpNyDRZhq6A4k45yzq3rxHVQnGBGjtGixFzAE1ZB7qc97xQ2mKVKRgHNKUqadGzjR7h",
  "key2": "32jotTCur3ACpKFXzNDMFJ7qjF5WpQNacVmPT9tewbZ27e7qemf3V5i9DuwqMFvSrV5mAXK1nj7kGQkxi6hNPNSa",
  "key3": "5qP7hKXMk4efnMTVnzMgtkwhQvcaK5YoRHsGhYa53KV3LeLKmoKgQjNrRwJRky6YvBUMoBTv8uUGrPkWKx15ihHk",
  "key4": "wndM7oMw51VzngPXBARDQnehFW7GGDDkQVXNDaUmP6wS1TYfcygtEXesLGNomEst863wmHiyP5jDji3rpMy1EZ5",
  "key5": "4s7sTen8daXFVNeh6mW4fBXGyn4SZnDwCJEXB8WaDBWaUfHvpuFuS9bwweFdVLbZT4hgssvNpkFDEP6TFvamK7B8",
  "key6": "2gp5cNtMtBK6TTfk6sxJponcD7fv1Sxyv3sX9178rPQ9w8ov2nWYs2FxRo9ev55QabepCZXVhQTs1CYBYvp5KK3c",
  "key7": "65fpS1LULg7bqQh5jszS3y9aB2zWJgpYn5CjG2dfMUp7DC82GN8SvfovP3M5e36zpmXsWmw2JoLizaVZftcNAJyw",
  "key8": "G81sQ7ioLAnos6TjT3Rs4CjBStzSoa62jrscYDAYE77NtLACBX1B1LHTBhLbrfif34f8Y1Y5wnKR17E1WHbcSKr",
  "key9": "5goV7ZammMnzeb2HsptHvHErP9Xt5stvgZrnPo3ffa2XSY4NYLUvbv87dkvyBhw8T44wsxWZxbx1W2YjhXmscEFg",
  "key10": "4TrfnkRLaZHnD2qenJgqkc3behUgagi57tdLRtK86xadMJdsbdc3rPgEwmUBue3NKKEirFjwoAiaTP5tsbppdkag",
  "key11": "2KqkBnjdz3zXRPjGjFQEdhjr6jUsQDVhrsQfQMxCnPi1ro5tHGV7YDLsL3WJu85bJGtF2Kz9SgXRQ3tgjH4sxdsC",
  "key12": "2J6BKZ6eSHchunmq3qnqJuqM4VSZLUscwg6hB2qaKGiusT4nmyULNqmQ6fESfC7NqSRiZPd7fexxUoAmhR2LS8R1",
  "key13": "66CDvNbxnp9Yje3MNmLeg6saKSmy7eN614jFcaezWV7Lo48fcZeos1qTKa3R7a6oCiNyjy3vr3DAdMQA1ZdWxURE",
  "key14": "3MuYEoxYZF3AmTKeGzyvRRE1THBcHXwjaKdTvg9WDDTZwq7d4kTweAoN3GEqA3mWVWx3bZpJKpJ6FsC6LZ5HpoQ5",
  "key15": "2HhB5QQekYZ3NvNyqGQ4u75cG1DaRQCZYqzuUCYZtCHPJqddTuJnhLjtKuy8Qc4Cm8FyX3ARbfLQSVx6tjMw7svz",
  "key16": "5ssVnSz3yRCDap8tHKy4sYfrepCdrvuJxxEH3fDp7C4BHsSYJE7HW6SJ2gKes2G9uJHG4caiyKpFdtV6Q6RKpfRd",
  "key17": "gPcLQiPWdpbmzg4b8fZSjvtbxAzZdoiRy3FGAdGzGNgxNgL16zwa617J6ghtv42CFuxpMTRKMxtzaSu4NbiCzRm",
  "key18": "3YH3SvzwFF1jmt8maFk7LAwKb1g5GBcnmPZupXyG9AXA1vzK5vAFRPKV5w8hcCNUQPXfoCVidVqJN4wi3ZpytB71",
  "key19": "4MpF3awauhpS78Xb9vnJRPRHfiywTucYW2mjeC2STG3bEUGZLfFHkn1VuzwqHGDnsiQD7Lz5i2kRev3eDps7m17N",
  "key20": "4uKjgiK1qDaf7toJjaTcKvmSQ6Yk2hqVhwocK4QmLL3sHdrGPCJFQGQivdtxNjeuMUyADrtMhyuxW7fqJK9SPY9P",
  "key21": "34P8WdJPfnoHbB3gixSrkREbTeZYUxKa2ukBU6KNrV2BUt9wPUNUvtQpfYsyjsv4RDeN2TMtDwLyNDdw4vTVf55X",
  "key22": "4yWww74diXQw5i42DzP4QV77tpCEpLA4tiEKTapWF6mAn39e9i8DdpUZbTbQsHNgeKvaBZbtVdzQ7E6L5XtNcEdx",
  "key23": "3pCrPg8zpnX5G5fAmNMHY5awWCqj1XU9LT3mHY6dkK9tt7gh1vPNQD4Zu3SxxxyoymazL39cUVaTnbU614qEqqgX",
  "key24": "59K6UQiH7ybCS7Wu7C9RSxcW3szqKkBDX3iqXFyjixFx4qmfS72SxHyM1AsGHnbiXpyb1DWNVNoXuPUEgXtj8kky",
  "key25": "zP4BDC8WbgR67S1bo3Fbq1UXRjPZv2oTA27xMVAYR8mCVxPz5Z1q8GJ1Js8p7ax3F1cKPqeuobJRJjytKoQ45BK",
  "key26": "66WXhSNq7QrWoBSd8QFZMwciPa8kzwwCvPfsTbWCEtN3pQhwozZrUakCj3JmgeQDxhDszbFnbYVCed5ZckCjpDwL"
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
