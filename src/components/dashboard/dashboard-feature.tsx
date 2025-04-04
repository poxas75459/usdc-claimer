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
    "4LTSovUBW1Qt2HYXvtD8quNdUj8YwQmP1ses6qMkp3siG6V65kZBBZcc8Xb9LgHdq2HLHptJdiJtfafUpaqrhpZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67oEnouC81aRFa4Yk7caAr3NnfjptghKYSQnJA8BrjEBSSTQsqKxWxNFCnZ1NMBwe9M7uRa1NU9Rgf1RWA2unmD",
  "key1": "D1q6yZWzZiithGYRChPoCtURSHjSuz1cJXFLJEe4kSLgkHRF5x1w1AxjcpPCKn3cTneWEEYNZo75DskSsvCkWWS",
  "key2": "B4xjN6uhsLje2KnVGvaqRFT4BLHQiDMLun8hZsN5ST8bMBYZGhzvqrZHubh1jc3DgnAS1d6bKPNtguVefLeWyrA",
  "key3": "4aEasVktPZH1a7F4LUA36M27ZXdMGGKF2xMsCFnve4rLj5S3GyFQBqXXVqHf7Tkv2UVTDdBrCjHc4FKp3JNiMw8P",
  "key4": "5zW8ZF5cRqvmRpCnQdH5zV6AnB1AxCL6bZQSSCRYxjYf22tEvrbTSDAYzDFn8HMQyY8A9Xy7eR6GU18bBDUjVfUD",
  "key5": "28iuhQSjYMFUaRcSc376wVzg43KHtijhBfsiyFvmutSJkoZpj6hP6NtaAXHxLKWzzNm3m9AXCkS5AWXS2WGEaZbu",
  "key6": "26oE1kUL8EuJq4FQaf7nNJRAgNjWBokqcatE2JytdsqdFpSWrYTYM8cftiVHVYFdk1spc9ENwwwzVUpexGfM5o8C",
  "key7": "4aSxJn8yxhjSzrkT4US8V3YLbrXSUVHe8gUgKpvehjY3UBCb9HWRj6S7mP5oorepjX2QXKaHG4Wq22zix3JVRARx",
  "key8": "4gTqQytzYR9qv84AFNpRjYZQbDVfSsqzZXmpxvHuwZpGbg3hGX2KAkW5CBPPHo1N2u5VUCWv5ZPUkusx5EpXvn9y",
  "key9": "2tPNkqCP6euPeuPL5wwX7ZovAi5h5qx3trXQ7TB3U3ZfL3m45vZpdd8mmamyLBu2xinKbHUGmGAfhRTUnA3Sf6gH",
  "key10": "3H9Hr2qBH5F3qs8xkgbnsWutVhB6o2hCNUGfrWgbP5KGdv4hsnbD6u1azNoKjHnqHMaLy2ry6BtpAJ22V2h4nLE",
  "key11": "28ziEVg8DZeZzDusTCMS3x2GGA2Z39Bo56rRyFtvmXfs1uRkQTuo14PMCY7bcZFUVoYmauwhaT7hdMR3z1qhKGb6",
  "key12": "4iS8FJVeEJRmjEbjEMQPEH2eQ2PQWvxJRhMRVWqpySycAa4HoTHxvbyxDT2DL8mGAHit2h8SwekAC26i6jGwa53D",
  "key13": "4AkJXdCRBsGCcPtWYHTBp3L1DQSzeMdn6H7N3q5gvG8QLeeg3ZLHf91iPwocgQf2qukQsocqXKM643zn2JowSHLU",
  "key14": "5Enn8aHYmvJUdfTb26jyJL9Lnxnsnb6CsjBdSpSExPHCP4c3NDrv32J12hz7qy39eupYjaU6PESpcCAZhfepiCQc",
  "key15": "3s6Md7MGgVQSnsTWNug1Dfv9ZUbLW5Cm74BAJJh2WiFHYULqTzCNCqFNiRZ3EGfUpLYgP9gManuEysbKskU6nd6k",
  "key16": "41yiPkBfUrf9tDgqh463uT1s1n4yZ5p41xNNS9KBtRYLkYUV4CekmeuHVcd5tC1Z4rrGZyqc3A42fXjo8s9zXZqr",
  "key17": "RAVJdxSwvVJfNgV5XNW8HuAsqhoWuZ7UPGHsxBfh1YAKC7Mw4yo5v4MXdvp5vBeQsChAxnbTEVnBb8UpkPzke6e",
  "key18": "9BgCuXudDpAeGoyAFH1vS94rn1YN66oy4evF2MY8VJHEGoGEVpXCCcWS8zMACekLXjFPqyyyGqNddNEoLEoM7wM",
  "key19": "3hHqdGPwaGnKnNS7FKgL5sULVpjyi4ueqvFSYScshqWRyni2KS92aZu8DqkEtf2dMV4gV9G3CTo3HiovXmr7jmsJ",
  "key20": "4tXZsrqcmWZvTh6bXquqYYDEawS8sBLXj31kmWdNUvPWMqeuMocRwUk9VJ2uLSo5nc5iAM6Sf6BFUxYBdvyw94aG",
  "key21": "5Fa1dXCPSXZ6iTtA3nRqhdAas2nN85bbmu27W2NDLgPuVheSBNXRuf5GHvUhC63iyaGRfr66GesBKBfUuxRNh9uX",
  "key22": "3XN5ogG4pvrLwz45mDeL3Ep6yMLjPCaTPKGYFKLqxefcvYGiepsV52gsKnHtHLn34GcvuS1FidjhMT9HGmc2Xwp1",
  "key23": "abKVvpE9vkUEQBYSbFsZiLi9LahJm9qDPBJPmwC9psWDHfjx5PahXu6VwyghKW4vcicXEv7u2DF2ycXyQLVpFqx",
  "key24": "2cpUW6S7nig4nU4CJGbPjgV9yhDaBcnAjPc4qEJKGqBafC18S8qfSZUczuvutupxJxdBBZxYY2Tcu38Cnx5oyjse",
  "key25": "4ocmhga8pJmjFRvtpB7Q8qnSqxTVJsntmcRdmYYug6qHyhJBiQJmrxnHjyzK9GE2kARqzQSXpFcdLnjDczCZPgTi",
  "key26": "2BSArdScVtFF3HzC5bphDvHiYpSBt5uXaZvqFchdg8B9WoUJRsBX2SNvqWiZjoz9Zqv7ALRBC17JsSExktmbaLnh",
  "key27": "4gxMnmUmnwrFVxGgemsUPy3TNnKwrJwWVH3q71oCFdL5CLeHpoeW6pC9xtBGFwgtECb9gTVoSKRfqewR1NRPvBpF",
  "key28": "65AMjAE7QtvEjuBprpVq4uXDDBmfZrLdjUuKgcpfpzgtueZxtanGE3ZYyCCXtFbmFKtK7XxXtQCMQbVpXcQZvUMg",
  "key29": "54AmLWEjJf7Yb8ojj6pVKnZrTgU8HJWxgT4ePhiLqKgTBompvadZLnxiKzkrx5yfbrtUPnsUU5eAHo8aPubJJZth",
  "key30": "4BHaT2nB7sYeeeUJLDKRo1eugt3QKTLryPgwSspSQpfi1vp5nqQgo81wCuGdnpEkX9qZX3zUDTmYrRE53FPJPirA",
  "key31": "5nssixb6HfRg2S4gaQsUwhMbSq6L45w4puwacgxBKZtrHe1UzoEyZr2Dy2uKiaFy5sCsSTwwjGV7VHQ4LocqJKUY",
  "key32": "3AdAHk9yYzY1cMB6fPjc9n1b2QzK8mZA1Bxs8yAiNNcEB8714nhvAjWghyPRbMK5A9JXzkwi9tH2JscrUMdH2eo5",
  "key33": "4kanEawu6tWyg7vChdJLAUbvzL2j849db8h79yLdSsLp6wVrM3Kib4wDy7ipo6LEzUAJ3fcjyGWSjcHGRSjPYvUF",
  "key34": "2gfKs2vMciWX8qpCJSHbh1SBwFL4to6id65uYmMJugE7hNydSu1nAxkWh72HgW9GFh5gU5yaTDfvXe8YbRpQJTXj",
  "key35": "xmBb6BoGdYVGEcy6XQGyyeihmoEbu9DZAYK33Eon3KrTeuxUpkZ4hriF81Kscx5SndwaGTNYwvPHPP1HfSMg11j",
  "key36": "3sx54auoqCD2bYcHmCTZH6zu2Rmn8Bd6taSEn83kY7pHJ5Mtb99vXeCFFYoifyNLfJgEC5gP7i5TxF9FXtmCf57v"
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
