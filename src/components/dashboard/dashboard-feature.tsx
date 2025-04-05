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
    "2D1c13mF5LeMwfM1ntHG1wdQNxsoLtFe99DFzafcrLRkF7Ytyi1cmMaDrMhFXMixBzd2AGJs1uHj8zBEbm1fQyu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pshSF4GtSgxESh3nRooz2GPqKTB2GAGhVPFQM5jsFev6u3FPMF5cMbxQ95AmLJEEyB46FJJhoWoaVhFKxdDx4n9",
  "key1": "e8XC8q2MEmiCvDUVZGuDfTJRhTjwcbw9Dx6hrBbDRiMYkT5aoHvUu4Lg5nJYe9rn9bsM2Qw2LPEAmodgKK1x4j6",
  "key2": "3oU2W3quBQR2QQ7dq8hSd4eeW6uNXZvJZ4fEm8yUpjMTV9JUZosBgSwnJXpd4R8BomuB4BgZw5xnCC1vipruVDmB",
  "key3": "5mgTxuoGGes5Pjh5tenVdeA4o5LGHZAnageoFAMGytdtmQktvn2xz6dQUF9ruDRrRMrsNURcNxAUtst3hJ6BB1yw",
  "key4": "2PBtDyi7sH3xRW3RsP2Mnfm8xqpBFAEY7DN3xYLTYBZN34PFrWqBjKSzhkNZ42Ybj2vb3zKsYFLZBcdgJei6gALK",
  "key5": "XrrcmVx77T5G6xFM3xhoopNLXGQ2necXpE4dkGJbDqrV3Ek8E4fyi7Q4NztfeLCLxY6i8WokHdRnFKo3XRMqMdY",
  "key6": "CrKKY14xQ1YwNM8nBdL67xcoxgna89kiRprgsKLFWd4Xgc3TWZFnXpsmRny7w6ePrixwMJfVjN7zJEPTpLeWhmE",
  "key7": "2YaAeDmR7bghuLoc8SeJGah1WUbZxGv1WZE7dWSCKZpa5YjhoCHYrKeaFdzPShx3TAGuddoQ9ThWMA99fHrdAbtW",
  "key8": "LcowirdDNDbc6e8KNrHt8kZpweHH7fV2bunh9vDNsoUxCH9tAdc7PZsmgMfjPSqA1rNEuwEQNC49GsPw8Nrhaa3",
  "key9": "4JavkuHhByG3sAJa2DUVVxWeRTVyMg24ce8ydrbM7Nx3XmguWsaMhDYLqmXjdrAuuCW7X3P7PFbnaRSgLyEDwot",
  "key10": "37Py4dvgwE13QMaUcfPkvnNw5EVRz5QTdPpoPG9uKUHv5VULx89faF1WPHjKd5b3uTpZDSPigfSSDRveCYcRxeX5",
  "key11": "5ZFznW3cryTyKe8nxPqTrh7jY7KLUpGhhdHJAt8CMvnjkJtdwKMqXLQjkG7QcjdXicUHoCULfReLTmSxQLmVq9sn",
  "key12": "56mq41w3UD2rWzYMwwUH6rVmmi2a1e7B8j5d7KTiLguAXFRnAefFx43YeXYcyCJKYdo6hq9epW975qqrq7nyo7hu",
  "key13": "WjEfydeXqV59M3tnePjL4x1d5BBH8MV3YQVygCHdS9HoPoicgeebDkweE9bBrRsZZMnkKpLhudAC2R4WFxT4RsE",
  "key14": "5N6dZChbRxb8Wfa1JshhGgm4oS4PZ5QUTU6EGfKKCKGJsW9MYZeW1E8RpqmAwTozgt69oaomsz8F89PDK27mUHBi",
  "key15": "2TTGMMiNMAQZQDZkdEbXGAQbBeLAa4sMbvrL1HAJgZH8JBbGtM4QjeaBsi4ShZcamT41me8RdE1hyrznT9cTH8Mj",
  "key16": "5jCYTZ4NY92afJUt5Q12Ecbhptom7B2vaRbh9JhkeR5ekrAWBEe4Z9FF26tYhF2xdKxwC74x5reyxEBUSocUAJsm",
  "key17": "5aoAvLG4bcb1SpMva19qBrtH6CGmK1xLMtoznsLG5TpwAPmjSA2CwDQeRzDsGXVeR8rbP5ji4Ws5YRTjTUgmHHJH",
  "key18": "5PKnFgc9xksNcNG3WwFjzQ5ZXcZwew9Aub6KXahRgDdLt7j4TsHm26RGCBbT124Td3FLex4nUtMh49SqDfzBV3V2",
  "key19": "4dsTSmNh86Q9uy5C16KkuVYQD4zBkTvytGTa65L8nS143kgzkHiiDSJ911CKY79i5LW9LF5KKNs1E66AKETV6xd1",
  "key20": "H8CRhLdCPy4HvrUNF21YT2VeJgRFYTQQHYvM61W4Ue7WYKCox76hHknrVoXu8hF7yp29XgQ4PkH8ptT7WLwQDtT",
  "key21": "4bkY4f4icAQQseAVdVBrYc69iUNJkCkLSx73GNSJibuxDy8JyjV4GwTYToiKLRjwCJdYLCcmPpRUHNNAUnuPcQsr",
  "key22": "5bkagtNpxn7zg23LtJEcvcFfoPnpjsZv8Mq3mjbBfzhZn5bdM9zhD9a7zdqjecF2oP9F1jaBtXE9Q4oWkBJxYYGe",
  "key23": "42Kdp1dpVb6dTs8vcAe6rU6y5hGmQ2WihKmFfCM41UzDHh3tSTLfT5vGveV9p8uffsme2sf5WyzYdEr8emkEtFzt",
  "key24": "5Eh19j4U1yMXtKRbM6T1n5tEepSvgaUeshMXEusocyLuQ3ZRHVaHbdKkLe4j7gnte9Q45rRJBmyX81SaTdfXsKE3",
  "key25": "raUzNeVEY3zrHQPhD71S7XLZjUqFWkgfwSgwmn4v9Gvk823gk7BGByRvK7gs9hzJHgehZYkq3ZRyX5y7vpWsthF",
  "key26": "494TkdxDLLZDiboU7Pc2Rh1hG2ydXzuQj5YxEEaQHTgoNDjoyAvCb9okJXnWz5kcFmC6PpzjVnJCrhQc4Ad1qsU9",
  "key27": "5k9qUNT9yJwMkfoyaR1x7AuQd9dkAVrKEvRrxUgd9wDUzq1FdDZnLHi63Rq5jQ4QT6AwwknWhUfPxW6jcKkvLdrq",
  "key28": "2B6jf81LUGkhjvDkRzAwkuTkQedkQZn2Qymw1ocQ2DNTtvyxogq3h2fv2S7a3xPhY5ukhsPxkvAGKxPToGANXrM7",
  "key29": "3ECcnuLsNGRAYLtYeZyeRhQmF1mEiuj2QZuLjaeDSyjTtxGc5amz2mBSFG9mRipH9DQy2jPXkxpwi7eXCctzSqwR",
  "key30": "4vsUGhQX7EkWUSEhB3WX9kUa3r4y4dERHg3sNG6cwg1ezqaEvSZroRbmFyb2XjM7kd5K6yorMFMNqKLR4iLRngU7",
  "key31": "2XRudZB9nMQEBx8T9DQRAFwUPM1oBB16TftMTBzeSdXXnyhzov4RLX1vZC4xKJXw8zGAm6jEDrhryaEsmAUDJ5GF",
  "key32": "D7EVdsCnYTa3fY9x6YMBRvzF38d3vohvjk1y7BUGpM2T6a8V2XiNtUSU1zgiVV8pCHi7xvdo4BH5yhnceUKB6dA"
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
