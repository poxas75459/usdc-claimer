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
    "5G2Ag3PqF6orhK9voN48P9BLWAxrP5moC2Kc9yCYDqvkHmUTDNUyog9TgMWSMoo1dXKSmCQUJixaveSe9bv1Pvfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JkNA5CtY1DBiqnYsA2fP6Deug6PFtkbeDBqmnBj5N9V7jpJyRPwhchVVQuKgX75wy6uVGzpVanfXeyCMgyKahCu",
  "key1": "WC6Fw1mBtEP9vaCJkWWQ7g6ZzesVquZWaouc2bVqYKhaFxmjCZGEQDmidACHHb1a23MrP5YuaDg22m9RSYR7n8a",
  "key2": "91nRzHjSgse8UMk4MyxeDxPWk82LDishWPTTAcRbSHbkX9BUWU6FsGgFr3WoW7fAYW8Za8meBLN6jc8t8BXMV6V",
  "key3": "3r4Ezvj1b5SV3bwjxuqV14fBE1yjc2twT4ZGQtPmAiyvkWEFURWa7A2awfVABpz1MkpB2qzxtSM8ECbhiPuXWiDp",
  "key4": "e2cJtBkvozZW89q8uKupUGabiCnPWQNecwNQidvudZfQeAnBdMtHL1aQtR91LeSftDEfmwetgFDvzaWUFPZHeUv",
  "key5": "3R57M9zd3Mb7Bg4CGVAcrvemEdezipD1oouwqDmvgYCZaSUjxa29erbsEB23p82Mm65SRDbiFX9VYoxudUcYj8tN",
  "key6": "zEn3PJrJGmaM8vtDswMDS7nhuDM2BDZkZfeYic9a8NxKyk26x5FVQoAwfe1yN3FdnaidapozevXtVbfNE2wHtLi",
  "key7": "D9KmQPU8xYQCj1xNAdYu1it3G1zpgPta9R2QTEdP5pf3uPaSx6P6UYVVuwt8m95ojQohhjDHoD6qgCpwxfB1zYB",
  "key8": "9WNAdNYbYfDYRaExRdQZ3yd4nUeSAyEPoSzphqueAotSm24ZsQsDhoaGqZpyM4ETUAqL7HzbssQMzK4HoQvEauM",
  "key9": "2SszsAzSWb6ZSpLmiH3WNk3DzHZf135afAKYs56GZXwqW9dwpvpzMP7yatXUMHLX6jGLYoEXiSmg3bqotqRkqK7u",
  "key10": "56futAjLZnJs32sARKwcHduxUbxRmtSRAqjWRjViQ3wKWKCnsaPFKC6a1APdU38DLXxmy2nPeK5aH2M3Zv5d126P",
  "key11": "ryb2QjYzX3DMCbFQWp9gTwdDk4MdbPAJi57UEkeieYRW1hqapsGojCSVBZnfmRAyWMNDvEsxVD5ZxnKmRPiHFtG",
  "key12": "RE2pY19niitJwaDe2woetUhx8pXtQ4P73DHdLqrcLQ2u78DwYAX4msKqGpaQxhNdKBGMtBdwuCn4c7hp1YkVtiM",
  "key13": "4y8XLWyzgaG7nfuCoSjPGGBNDM6iEvQCVZxGcsEfVPxCqf33ySUxspCAR34wnKLr9yoAzhX6658G9KKk3B1QEsuA",
  "key14": "2gUGwLKm6VR3hPmTSEKtyEWWRt2sye4ppqihCgm2cvRX9u4FDCkRwzL36QNr1Zi9mVcjUiZUmeSDDAb6ELdq1Cqm",
  "key15": "5sozPr9esoHRtdfRZtHCmAmczHZpZidfJRNSbLDis9LYpr1jPATxCQBp6uWZtak7kTzLotdRcdLQtG3a8nwA7Ytd",
  "key16": "YmVW9H8ntSRzVVr7wEW1DYzeGHj8qYitPWRb7QrGw3N8BvhF7oahZyVp7koMpnjKweEskyeK6vuoWaRkpZkH2tJ",
  "key17": "27R45vvc2Nn3UkJxfiDFgWBY9ck24qEA4Wdsk9PonYAkq4QvqujsLJpBYa8mBHerkw12aY3QDCbHzfGYaP2DTenH",
  "key18": "4briBheggCTasPKnwhB4Hjuo6wdyL17yBBDz7Qin9N19SMj5FAhgboqCzFRPcFNqM3Xnd9u2C9hunFQ9RQaXqtQr",
  "key19": "SPFNLdiwB3fZ2RRbcN5DA5iaqpV6x6fSbirYbNkmtfhpmdCuHJnWficy6KJdyqYtuL1XYdS8Bm2BPAgBCf7dyza",
  "key20": "66TybWYmi3TRwNdeAwZxqSiV3n6gJ3fadXKDhox6fBUp9HG2Va5zBSkyct4gMUZ1SEAFLu53ev1Ed6iW9g8oWWvU",
  "key21": "dY8wn7VgxVRw1grszuHv5aEYRuu8kzNGkh13sTRPJDPoQLNcincaAWWB1WXJzsidXSiLVsLf6G1qY87fcqW4qnx",
  "key22": "59aqtTVefKW4MMchDTZ7KHhtcd48Any4BffRa6t8mAGQSGKCk3S82B5z7CFzRPNviwQMNv8tYJBMvvijxmh3uGbx",
  "key23": "wELRwHM9GcdVaNw83LDoeAiRsHuYqwZY2jkT9JWh52GnhPxwJru6bFhUZEREubGrz4kSr9crKLBAHPcDBX81h6V",
  "key24": "ngXtvT5rdLesFLenBtAn5fyZQvdsQt81kdtN8yBJKxLzFCw9YosmHSBorQqkSmG3GazqDMyjrvEy4rGSpSQ4NAR",
  "key25": "FM5i6pi7e3KiEH3Ezr5AgMqmt1Luu6Jgbfynj9h8hc56ahSUssZUMFQGnqt2GTnZWotC93ntnrw52NJ6UukFfFG"
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
