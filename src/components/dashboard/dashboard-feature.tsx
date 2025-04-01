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
    "64gUYijQK6BRKgrV46MFjKUPtvWWEU2MHJvHG1EPv5vWZKnV29oKoyXfFfVmR1exGuAgYeyazv9uCsnvKMSkBepy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nVmj9oj1ZzNHqi5o2f1cevCTPG8wP7JRUnsBhoK2nuwemNGtzCUnS3pjQMwVKDo8NyAcSe6kvvp5DEDhpvnaSSC",
  "key1": "2oZC1zbNZcyjGEUirUx2GW639dHsrT1Bn1ws24Q1ozaFbjVUDVfCJWhni6PR2urtYC4zUBUduwPtwfT6BqMyMEkW",
  "key2": "4S7vN3ZhcWNtZVsD912uubp9sgD9roswqnb4EPZ6GwL7aT5NK5QFFTRD5MPMZCjPpzxWbYPHKWCWZWCxHZvQn4FV",
  "key3": "4nSFHUkHKuQtoXBwWr7UnHVFPxMdq47gtycVFLP45tm8RSR7D6E3qxpmix3jxB88rbnTgrdXMBTRR4SQhvymYSrk",
  "key4": "5nhgcJMCADrfNXHuY9CEbBwQQAUmrPxY9TCtbVoRRU3W1jr2Siz3qCF5f9opHr3Nsu76e2vWGixKNF1GnN9gSb3o",
  "key5": "4sCepajHYSkxfTwa7t8KY12F6pgqK6kV7Ajp73G3wPKmyNuPzzLej148jFbzduieZrBbdnPeCZv8j9WkGjmGdVcQ",
  "key6": "3UG3mshcBu11F752sVyWC9AsoYef29LbjeN8zyD7MCtDK4ypCXHoGx4tPtzZ7YiufXsKigURdNYkmnuPpEqYzbPJ",
  "key7": "26CvepWmX5mXSLY5TdmCQkg1USWKHU7uFDCeqvPjiuQTwppVMYSg8tZSBS3163vMWm5YESuXLtSqqFZtKSxoYXk1",
  "key8": "3vaaL6CjncAXX8jzgNRHatMwGRWd428xJXvCm8nQD9Bxkv5r51JKwhaWtL9HiDHmEsGiZw3tT1BZgrToGAVLBKBf",
  "key9": "3De2p9CW45fghWpKLJUaJVqUhMaCXX1JNYJo8vWU14vhtvLo9Yb8jqFUktSEJpDU4iPYUDLnf1F9MRbkY124BNUr",
  "key10": "2T1GJEMSR5aVxLKgzietq8krP7y3dkrF7t4buiyiaCdMbvYcL4MqncjwM1HstATbcmXsH71zNU4W9tXksLvVwwHc",
  "key11": "5MQET3tb2oYWEfQb4AZKembcvN8C6KzfakS2imYnyJk1wKqFHdgpmCg86KRDa4dAsJdwWAmQdAwgNaCad13dYdhV",
  "key12": "53q9pVzXTrjWRBLpemTBVUTK6dJ6So39uNTUTp4JrPWm47M7odiHThvDqGpT1DWnvgLJ58vVeY2GxL1J5gmz5mDL",
  "key13": "7BeJKV7xKF6bqrEVSMaV9PV3ETLZt9QDEEzwtSeep3as1x5BUdcvbErRU8KGcCAvDg6nvxhmeeo3PGsciZvGC5R",
  "key14": "3RJkWGzXZnAwYdF2Sxjn5ztofrfSfcWUNmdXi7KxdCkUrbS8tY4nhUt4KyMVVsHC442HeygXAjLFx3faq9ccyX1",
  "key15": "4QnK1G1RNjb2mJLUfsMPBvytQzwKqEhUWTJns7WU2tTLSwoE18gxApzCNC8f5dacs9jYJjaJgKVoxz7b9oYTszCz",
  "key16": "8mTyfSUEbcgnU3tBAnBrp61ADVwTN4jVpBJZVfYFX5mntVXKB9P9wCiQNF1hkQMsgDg5yZTZUT4QYPhuyYw6Jom",
  "key17": "3euK2YcewcxAiYqTNNWubuu7oVNMmRVDLmEBr91pVta4m73bt3mtVxwmE7ewSPPQRpAuoyYszmVvAqiCniVWnFBD",
  "key18": "WxdYyLMeFdKXcePKDqD3DdFxMgoHrP6uWBXu1dKNGeq8X8HHY3YYPcNwwiy9vE47k8pUbLF2nZpYnrjhx8ybfvh",
  "key19": "4ZRZwMYzGSg1BJ65WMf76u7xLx7TXE9KqEkCzi7u3hBfbWVd2ayy78SDTwh5QaQexqL3mHScn7zk3cG9mPo3kxB8",
  "key20": "jso8jt2VYBoL4GpPwbwBmiDQfv95xJyM3vfWUgtw6GLXx8dH5D6RBAV29jX85tQifSeGsTrnd8LPKyHcatUQBDV",
  "key21": "4sHbJv9svgFsGSu3MwbRXBzG7XPci9XYDD7d6pj6gn4ppnhtbDb4mECgs8pfqX5LMorcCMnNjPr6gtKgNyZL9GWb",
  "key22": "akCdE98696eVD9tg9QBJkByPFh2xTPJMRbs98WxRn4Bpzsue2vv4o1hi1dCCFj4EVMV5WC1dAqhzUCxHUWuniuG",
  "key23": "4UrayZsY8epgmAGqnuRcVxNZ49cFXX29X5vewuSwGJk7FAB6a1o2go3mufxe7qdR6FG6948Zy2mhRC7oKj3NWB44",
  "key24": "G4QRX8W5CfK1mysEpZr9k1nELiXYJAstjBrmnANueQ5t8AQwbUJLi1eGpLeF7FFBZ1KKek4zHfJJfspeBkk5yKp",
  "key25": "38Bh6RytooAHHjfwZ7Mn2pyHDSg4GdT4Q3F9Y1iVW4aYS24FYLkzBggqB5WBfP69rvbhD5TirapTo8p3QgdJ8Hfm",
  "key26": "2zEhh2JL2pvj4BRLkMso3oew7mZgdJCz4G6CZ7xhTSqRmK7cmnPdxrr8QbzM3iwuxmKdL6NHVcRdyid1kgG5zMfK",
  "key27": "3aBxpJYLQ3mJx5eSR6wbdC5NYVh7FNAtVb3chHJN2TSCd8WQGbRSRboQQoNQ2JYme7Lg98suEvbQ8KcgyU7EEZBt",
  "key28": "5CRB1LUh3GywGP4Y6rzcYEHKAmy2yLH2vSw9JoGVmu1eL4xcirb7hp6bXe77MXLfsMQgCDB6ukuhAg33QqxHv3S",
  "key29": "3otWc7XcdkF97qPdUMtYv2YY8dmcNi2ugsRWwMC6esa3cpkTK4dSDWxPRA6FsDr8wnzgnWemWbCyugtZbUjyDvik",
  "key30": "66H9yfFvw8H8VN63Q8KCmZbBVRBNrTjRAVNbTcZHRkzUEmupVsq86LToM277t9BAubLanG88BVBMztKA6HW5kiUL",
  "key31": "dmYm3pRtT6z4PURejyM24pGNbscp3RSDQt13aosVr8V9eV6n8rz7xqpHxMaHeUcE12BWKyLtmppvUsdWCxafpdb",
  "key32": "4rYDLWDjNr4tGxTbczvs9DS4pJpY5kTtjJ8RwXphXoRD7j1nyuUQSGS5NZWVsk1DERcAZT48gD3vhzj9ZNcF7c63"
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
