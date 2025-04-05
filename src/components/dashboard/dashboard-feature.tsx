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
    "2Xu3732nXB2R4qadodtbe5cwMSfSvAjVd5fF3mhkmZiExt7mHaDGVWPn16CvsgKE8sW8UtmZ67ay2et4D5g1C3PS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2upAM2wuEFCPfVZsFvRRGH1Bh5XTnMnRtDJCrtd7Mch7hNcEmAtHnUpW1xyYZK9oSRaL6vBBpkuDHzRr8kYmHuzV",
  "key1": "3fXG4WjYSDGi1a7jk7LwyxhoZWTeQsLHfD3nBeDq56ZJe2ZQQVUypYtZw9QzL7GoQ6qhgLmzDdjmztjo6mVLCijJ",
  "key2": "4bowbZiB773SQNYdFoZX7u6Mkka2KJJjhvApDcFKAmKoWAYcDRMQJEZ5K3UUMgh79Nker1hunFnyZ63MqQaQgqeH",
  "key3": "V3RuQ5DUBuJ6ne1WfNAhTeT2gHxGRQrX3Vnc6v2pxorNjMJVtMWCaRSUQ8fRiz2sx738n5TAw53yPSUbgKBmpdw",
  "key4": "3H2AxsyoQ7uSC1aLSjXEZvg74szSKQ5ZfgNc6aQNz128KJAL9xFJKor7KwunrrXRJ8oAxJH7WCGmocZv7fWUP6Pf",
  "key5": "jheLagSEubQcjNt2TZiRGgHy8XdwEBZ8BVdF21qtGkRVHZFLyHAGrcxTXpgF2eaxsaGk3rng5GmJt9XBCABu5ci",
  "key6": "3S3ogPco2AEUopEeg7VEgvtdFKYYGMGXsMQknCth3tjoAeq59LbetSweLSVPVdm77KuBTydctaJqsGoSQnQGChr5",
  "key7": "UQCL9F1FPxm1avc2JaKZFsAiwidjazegtTrGZ6AgtGG4avNoTMnwoUEhJqrTNqwZ3NQtFGAgHmBBRfNHpbbR5cj",
  "key8": "27w6iCU4ChBZaLzwsh5SjHHy17W83o5LCYdZtnU7zr8BiPuzi4PWVxCs4eL1AyTastcBp7TXiC3ri6uYC8AXaFv3",
  "key9": "bxwvj9SHSEzo39vfvei9SxZwqKcFhLvudePF39pRu1BiXErVT8763cQjsDBpsVGpR17V3Jc9rdqHZkZUMx3TC8B",
  "key10": "3Riy4QgabByeZnXFg28t9kFfSddnATRgTebDA5YNnPuWxMWFvHGZUS6EpLFpagti1cwHZmEJ6ewz2SYUrKQcSgxW",
  "key11": "54Cm5FMw4qJsSyacBbiZbCwg9sVkjueE3Pkx5b9F5xLx3SjQsUixNXcVss3WCfT1qMBy59EaLTpDq5ANyF6vFQs2",
  "key12": "3BjjN7mpevPFvPEGGzLH4XxriLxEtFDL5D8doPePRP7yFj9W28VJVFynFpqwE8aPQxNJZHsPBxNd2TUBm9MeXN4L",
  "key13": "3aAZ45ZJi7PVZtHSLUfMkZD2s8Dn8nrzBn5dbxHKjg4bgvN1DxqCZJ4r1zgmTNN4KU9QGGJEY4tX4rwijdNHtq2M",
  "key14": "d8BzH1eyFReAuPh53q1bNSQkSWasCXx9acCT62gbYgSxvn4Bhyy7dfEP7WA1EktAwvRds3qTaiW4PXsoeDAwg3f",
  "key15": "24YYD2bFx2haZzdyzNCuUinXUs5yEPZow3mHJVHMXy5eYzprzjs976mh8CFkwCHLCrWinBLLPfxhHwThWUiiitvt",
  "key16": "4nYUrgHZoeKT8L6E9KMAwk1qnDRwSBKsZ29M6uEkqS39nu1rLL5TCqR9qZtoknfQYgiA1zaytWWAfEGiuaAupezB",
  "key17": "3wBif1jSX7B93HXK48MG9piTYdi5c2aYqUw7VZoowka4Bq8ZywfVETGsdtR9TJGSTWYyabb58XvhTBR44SHyjn7J",
  "key18": "fmkqtT3U47DQgur9AtwX2iG451WDJyRi27uSGcZU9aZxbdfSXF56HA7cLi1fCQwmEYDgzRWRhMtdU68ngtGz6vs",
  "key19": "hDj91s34yzjNpATQxD46FheAjrNw3UxV5WSBTuXx9ywUpuXnjL2vADUaJ53SWPf5tbEcpKZqoG5pYCNhcFBWgBU",
  "key20": "WAYwQXV9xDgoEQxMY7ZcPH9tEQYxJHAqkdqEiH5A4uD7Ccm77wsFQQwMaaPbwd4NrahbXehGVWWJzjaU1d7NfP7",
  "key21": "5KtTvTHpgx77fQTeK2nb9PYHVWThjNBLm38mmr3p6Ug9mLcjUqaUBrrDZg2DtN1xAmxxU56JtYNkJ5k8Z5jhD9Ns",
  "key22": "4f5B8EjC5R8fwvZvi7abTFntrMAsAtnfhuGDZ5SQ8ZUBzxPkUmzhcJLCVCjXFQKGuhtQTBNi7DdFMeR5XnGyf8WL",
  "key23": "4oRkWEWEYVSmSJAtYdZg2Ds6jhaSTv6CUrQZQXwKtMFoUiko8RaBiiHNnfgu554C2s2bitBiG59M23qeYu7D13NF",
  "key24": "cQ5wzENWLz7AP3j2YRoGC5sDs4v58Aj1xEoiDN6d1rmLADuKfrUzxz4y4zvwG7CR8bEFNv9BimdHTYnfDELitkw",
  "key25": "ZrnCVkW59vkDZme4xg2dREkAefrRwEznVSSfUCHiHABAoRTnza1xAF9kBXGXJ2fFXyhPMHzijLTtpJ1nhhtyYdV",
  "key26": "5i3F31bndtUTFYzFyoSKMmnvUCEwwoc2tC4q4mrXKmA3eDih6yjebRtqaYDwakMvmdGJ1LQDc8dcc9VL42YG7vWu",
  "key27": "2KQ6sw6px2UcH12VC8MxnzWumzV4c8bGucgmqAxFwUjRMpvLbDokPo1hu8X94ivax7NJtLGtV8ecJKQbMBZxtCJo",
  "key28": "4cEj9A4Ed8MTeiri3LQFSpPaNpk8yrcV4EUf3mAaykixcRJc8WF6D3XMQTBg3Dy1NVHpA9MaC2Ypb6h8ma9g8vW",
  "key29": "CEUXxBuAiT1HMd9sLxtqzpGsW5rUZBtzTX4aUEK5CvCVKoAL9QGdDBurQXessZGAPBjwMgVNDQwQctkrxDZ7ntt",
  "key30": "4KdvogwiUejjTHAKaaP9Ypixwz9jU7RAT1iymQqBUWgJo3By3c8R8z3L2sdxpkBRrouwThfPWDS5HWP9hFFQXrew"
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
