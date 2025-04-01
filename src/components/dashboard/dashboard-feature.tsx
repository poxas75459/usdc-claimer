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
    "3pTneARX76brknyk5qVzcqFFap2P4cyNePKdoR372tDPsGZ3FWqLcCjHThix1yLKkxheDb9xmfkScwPrX4yaz8uP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BsFJPeBHB2HMxRwwAkgfgUpbyJBawHKRmzSvdDAbbpFa4oZ9EgAk6vEFNkWxi5AiLLgjJwxNYiGaapEtprBX5ks",
  "key1": "3pACss49NN7CfVdARuf1pxE6LWHTBbUyJcBA3Q26PR1kNcEK8BpUU3PKsMkYUKZs3UzDMee1AaP5iNcGBeCPFiGs",
  "key2": "nby3afR2Vvc3eMyp3HW6UsSVgkUd5AfrekgS5KzYRoskWrB5aGBDHBLVpS9WE58XuUwSbd7Sk59ay1AyfqNiXB7",
  "key3": "2mvPAdcbiQgSv6iM8kXPYASxDxoZD8GeUVwbrYtEyFj5VNpcYZDof3yCQgfJ4oRnxhfxRqQ4YtpsAhBYGoEwcMjP",
  "key4": "P21px6q5vrVE8izz4W6GsDRGtfNtGDtCtng39j5aetEgEmEaZLeom4Yd7coYiPA4hiveJyzBJ5m2ppz1PU226ws",
  "key5": "4Dz2A7cMsPEbkSUvbHMKf3o2JMGUrbmj6isMVZpxeX5SG78PbHXo9m248ufHDV3DiCCG4zTTANsC9jJAzC2X3t2K",
  "key6": "3Qcvx6RWschf3RbCRZrcg4GoimMEYB7rs91suzRxrbmnpFaiH2YQ3jcv8FtQyuqvag6to9c1KQLvphjwwcHGpGAg",
  "key7": "4vo8XqAv4MA1hPpZh3A2CFxat3XChnTHaCdGnoJ9gcSbErCuVMuJnLAaCyQHoqkvcXDFTK1uFRcimuMEG483aNcD",
  "key8": "3o4f274aA5YwtLCzmz3ECvCDHRxKaoHTbf9wMgtp1Nd2FQcc8ibRsSJnMq6fpwodqNQsjGLMjRihPw9SFD9cbMbX",
  "key9": "3gVXoBHU45LMCQ55myh9Na4tUMMe5Na29MaNeVBjgCcqD5ghifGke52CxVtgLuExTE6gkqUBHzfudbQoN762XkUY",
  "key10": "5nhv9gsbX61KsvoaNaKqCxL698SgYobKk4a31stiRbXyvFvo1LzojChXAvNHXq1bZjqJ5M7UPzdAPjw8GqGmii8r",
  "key11": "3Q8YwCmuD1q6iaySdbSwsprCspoL2DCwJHbDswMSFE1XvvZFqU9QTaATvNiphwTA9PWb2F6YmbG7YANz1KYPSKcm",
  "key12": "47Fiq5rc2GFesoHQ3xCkgPrT3cfb52R6Qptqxf3udFWn62XMDGNU3ACNe6KKVFGWd9T4ttfzMW41U66JbqeQXoxn",
  "key13": "45a6j1XhLpqXgPeegTCje4eo819fcS4WquK1eyDWHDt6jf3eUmZtRWk11MkWKfcesDp5i5auUoJCBrLauFLjYcXR",
  "key14": "4N1LeKGt5jR4P9QfUJnrLqgXS4THP8czKqgsx6rFwiyZEfEkTVBnyF61MjyKBbtKwV6ycUaKvTDAhFhs1jALh1Cw",
  "key15": "2hPkpdufMZQC36TUAPD7erAMyMJBiLyX6Gn5zWLqwP1cZe9PAgwcyL5i7e25yWHimqYphZYL27Ez5B9UMBYhAUWD",
  "key16": "2Wn56ZGxsksBCvPcbMKghDdKRPvEKCPYWcDtPWeGcXv1H2BaKcsKCZNHnZgWukG8zQX19rmhdmzfJcYH7LHx9izK",
  "key17": "2UFnZ9vnYF9hYeRj7Jj44gfZ7DNXgjLK6pXHqmDwZc3aNhqUU2DBnjD7ACAJn3nG7SyZaHNMxD5J2R3hETRvTvX9",
  "key18": "egfXy7zL5zAWf1tKC6Mjp8QWkVgN6SZ2VBLANfL1TSDs9aeFpg79jeZepvABoXR5CxKobT24LgepSUeDJgVxVvy",
  "key19": "28CebyMWUbvVBHG8bZU6EHKYWwqXnzjyqeYdxHr8fxVBCWP99KM8CsTFdSdZceK4NDaoAXE8PnVZuyqWqr6vJdFE",
  "key20": "4ogJJRpZmH6NLVGRFbHK4aWp6TDs6Wyxxd4NXr5fU8HST6RRCwvPcweuasc87GFGrLb55TPJQXSh1NskgrejwWbE",
  "key21": "5iG2nx3FBW1ZsUreMW93nVMpCZCfASDGmZo7JrsJnXmmGe3C19NaMymoRLstxUrZjNmcTsdv41DgxVfv3mnpLn6A",
  "key22": "5avf9qe7t15wvqFteM5NoWUnfG6TGa9dobsHFLHdkvo6QZR7wB5za7ug1wxrRxEyUPeJ4AP1FYWjfcxUdWU2L61J",
  "key23": "5D72C6jCPbD5LMsem9X3PqiYhiqmUWah6KHTjUArm8HmxcDZLiUx3P6WRmsBg3xeX37aqzaxuG7nW9sj6M7haFwe",
  "key24": "46kJjdti48868LU2poR9RtmBkueb1tX84wKtXs7syuhT9km23MBFgx9FoZEWNke45dffLMK72VPbLCtQhDvSvP8m",
  "key25": "65e5bvj4rLKEyre6iyfBf8UWPaNpHJGYNKRBGGpyN89Kwwarz3Nfd8q7K2oZFXHmD72tux31dVxh7GXWMwMjExFS",
  "key26": "2qLXJA6o97Tz4no9FKXgevRw6Uhy7w6UYqVBCPvcxmy1Kb86sbXbRzBN7mSJwiyK5JczFDehRxPmQefj33wSKHNv",
  "key27": "3sbQtzNU561b538KQUad7kf99a7EkgmhWvqUWyQWbHjFW37wqADHbPHqyzKCFuycsxdm3vRQi3T58tfxN14BdtRy",
  "key28": "2RBBgbwS9WJBcga9w1sFKN6FUPrPY4W7WPFiS5EYDEnJFQt1ays8kPFbUqqw61WMk8X6MpTgs8jmok8zFPot2z3d",
  "key29": "a2t3117nKFChBjriXT3LFqRNeZYbzAWTQhojsYVcYquE3zLnTnDJ4WMQr5RjBfVhCaxdkNgBLu4aMTDMvaLo5mu"
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
