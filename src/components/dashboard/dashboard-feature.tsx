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
    "hsNjGf9pmQQWwgyxAFFPu8Uh686KNwWvZZNtFVs1APk8REdjVsrbUupxis1RcignmT6qtuqDPBDZZ7NovZmpXkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8FvyXAHABdVWSn51S9QXCaU2E1TPqa1ARhteVmpXBCGgx6Q13WKF33fzVakgg2oqK2C2L29giFkyH9n1FbscFBw",
  "key1": "3cqJj47cCdmkU5hf5NMVoVXPpWwnYb1JjEgeWkXi3A3gmVFQPWbXoNwRWTGurzM2z9aULJdwCXLGFdd64FbRD5gJ",
  "key2": "61StvWvCtnz2UHAYELhbmxnr9Qgnw2HSPLg8JEczwjfvbdR3EPbbbRKx9tg1oPmsiECjVAxwFReBgRZXHkUL6gdf",
  "key3": "3xenME6jht7RZ4V4Mo6SmfH1s3bL5UTTu5QeWsmLTwdJ5T2QhsUctx1ce7Gvvt18ydzCBC9AhEvPebQp2CwDE3Qw",
  "key4": "54bq8dCdMC7vVF4JasVeQiRm5xLusGCR4YKJGy1Wm5kiVtKJ5YPXKrdHkui49B3nFuW9opFvLC8xzNEWJ4SUYeEe",
  "key5": "3okgejpRhpEZTFgtCEvjsMSmGDkCLkSnzCfccF6ScLqNHSJvbVWov2UtrRVH31mBVHE3pf1p7e3UKqjg4G8BeeXK",
  "key6": "2ov9nCVXy1WD3h8p2BBNezEYrqW41YUAUJL8g6fewmckiAoUtWDiq64HK6Z2ixC1782TuNQm6Sn5yvfE1f5omnjm",
  "key7": "3QKKGQN4SMhTijmfWxdR44hqYXvZfiB8b3y8nXZA2LS6eJ1oYo9cVy6X1iLmm84XYwVf3RFVSJvj4Nr3X6zWXS6W",
  "key8": "3myYYTMita5gr7EVzRsgCJYRMj5bGXcaHmyzAysrpR8ppQ5LpDckQ4Ab5py8p12FZ4UrWxjvcamiYJN1wz4vpb3Y",
  "key9": "4dmFhRBFg7nQnjZDbSYUZsZ7MfkdaS7rXR5t2DLw8vC9mntDqGSiUhBsUCAofqov78tgtiGLnxfsJRpvSZHQqKjo",
  "key10": "o6kCxpVWwozMtL872ZDxv6fFUvsANHd5Sup7aavstUbCHRMVAQaRjqGLCHwhi7kqXdBMWFH3mfg9q2yhcohoJUi",
  "key11": "25g5QGXjHaj2M5iuEajv2DK6qgPpQo2RTPXeK7MGWfVs54FU7RpixcxYr5VHP8ebfn67NTdfJFUrhxJPkJ5QWm8J",
  "key12": "xvX8vvdrTmGAccgy5PW1LTR1fy1LxgizrU11tXbXGHPvjr41GA29fybDtWL9w5diSor49C5ssza2hU25hMXBuBq",
  "key13": "5FFJA5ai9KMi7a1G5DGJF3UYhY1gu1fbngwGNT3tkzUqePnwqyKXxJeueMcTUtWVpeaEuPbHre2XTCiCtxpCrrJZ",
  "key14": "ZMxXLvy2ESfbb961nKrfzu8zZRNyCz4uAg8VGcDakqxh813Vftxu6V75sKV5Vc9rqVkTrWxGNnN7qAyVgM2XZpP",
  "key15": "5PecYn9vBUcKj8FjCWmBmDQttoJvosnXxe1FCnJCSLJ7wdwt1u69Wt7C9uw1XC76JXhU9Kd6PJ7RpGqaHKeAKGzP",
  "key16": "3ozy3t94XboMez8US7QUjysjvx9KqbhDkuUQ3vpnTsXUNEtLwWNaw65cXfbSsMEYPWJ4vcaDva2NLmLioaZpUBDF",
  "key17": "56kZYx8XzbuSJkftwWX9eG8cnCSThBb3ZJFqQs4JmWaoiGEwxfQ5xtd3fM1ZfUtBpz836L96qyyWyzTAg3xP8Via",
  "key18": "5FwqYNyvDjMiyZfugoXKQYJzm6saJwS8nSRgt5GjVJBfuGwVb91yv75paKB4rWmoZWRJVaMg1auPZny2HUZLaSuZ",
  "key19": "4KNHf73hMd5NjpPAJ5ohLSBHxNMZNSbqkQcNNRFmKLwkGzd7jxqrPNpnSf49WTvMz2SaXkEQRGEBjCzGaquaHJUk",
  "key20": "22NRhL4HzaA7PX23MdvZ4fedNypZNg9TwvJuTPPkiiSsQrkrvb8vrxEoziSKNBbznfiYDBhhJ9WFXX37Bu1SCYXC",
  "key21": "mN5JaatTh824ihHjhvtCMadYWjSGLdmDKbTz2tcEmTJKPP8Jb7Q6URhpkkn47csBxveRMzKdqxPskSxtkpnzuxz",
  "key22": "3zyp3AWptKPEn6PxTdeqze4hPgQ9KESWotAQCBNd4MCKjyQd7Hnw5W4Ma8SPWmcYwe9Csmoo2Wx5kaU3Dd7PPSyo",
  "key23": "he3mg2vq3C4bisbvMJQp3R11My6u73TjnJaD43nf4GHtvktivTd4yecsuwMYbNATV2mGckXXYHztf9soopNofLw",
  "key24": "2m6zS7EP3WQxshH4JBpuaBXnBtfxSjNC5zmDkGRaG7bobt9kQugZ5rcEDJAv31qiKeKpCHnNm3rpKALPRHj364nZ",
  "key25": "2nPSuky3vp7VS6W3qZSRpgohbdJCSJnnXNKT1ndAPyBZRd7ejqddj1cUBTCJq861z7a9XPCpuRyWSKBCP3qaLZBP"
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
