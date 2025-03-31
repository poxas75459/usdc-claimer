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
    "GDpAaNPG4rnSzB8ytA6iY3ij2dnqAgXfheyjaefxDsTHTtuZFdZAKmgFiRa8ZX8PvNFFTU9C6kALmcrpsL1YXoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VKmH3E4U7U3rokJb3WLrojotuz3nm8R6foDxcuwLMrKij5WtW2WvWyPiWiQgaLN7GzYE7ZiTiwNi4u3mca6dBLE",
  "key1": "4qcdpTTxc72hBiSUGqv7pcL9TXRK4AyUmvoWfExRJ6f4jNeeNmHzkfZb3KnTjzYYELujq6eW2wndaQwjMGwRR85W",
  "key2": "26MsqaHpmSwG8zeQVytSMJbcdaQ4HKXJZ3qGWa7hr1k1ZrfEHA66hNiT1ERenMW3LsJveg7uKB77E9Ng7nFgSNtc",
  "key3": "Acoph7d8cB4jVx9bJT8qY37HrDLegrVbUTQGDQqXTvtxU545uRCyMvZNy2Xp6FRWZ1rSuGUEFCmdYLn9FTkFgfz",
  "key4": "4LNe4xdzP8Jej5PhwptdNU7eDgtPNdF1rmAhJ8nsb6SNx47m5dM7tkSTr5CqXKF4WracG9mocTDovgWxht3NyHom",
  "key5": "5DL93u5zXFuKVHz6XMX1RJD492p27zwnq2ejWqo4LkytLEw1UXykPVDu39ro1Xg9Di1yHfvvZpbtTagd5dbs36eb",
  "key6": "2WbLqGvUMFKqQ4rgjQzCHqUBynvtKYoSwdENts2Cyh4p2U7vPMSZQNBdGGr1TKmxVkTsfHbFq1uSNowsV6dopy4s",
  "key7": "4eJ2hnkT2ezpx5uwdrqwn1kQ194au8rS84SVXzt3X6Fymf9b2XEUZhGFLim5Qj7vvSA45gRcHJ7rBeFJbeBnny1o",
  "key8": "4DnJQbRmoCAJ8tsYHhBapjqLFZAG6JDqNYd5iJdnxSKk3ZGn5hRo9cVawKXWFXBYhXiAm8KFwCydgfLkV9yHZ8M5",
  "key9": "8RzrGKsRYv6THyChNec8ZC4iakCqfAHEjrJ88Yh5vwXC37QE41d9Y1C1WkpeoyoEb3bDZdH4BEPQunFebe5DT6a",
  "key10": "5SpEMPuc38pMxwc8SDtYCqYMQ7eBxCxynLQiUZAQfid2QNCM2fD42Ty9usVvRemu7pz2tXfvWNDki2c3eQge2o5Y",
  "key11": "3oBwvK2ULUrTHgkVhq4u6grv4gtJYMbLmfm4VK9ZznY8z4n6Lc5wGAYozHsZmt9P7zE1XV5bgGBm1mXXgW8tzXPG",
  "key12": "4DdSV13ysAiUWxJze8LabpuknGuyezxaHS8uHgzU3Z2BC2ztm7EADd8e8iwwTsDJPK8QsPaxo6Euvkp4nTYjRZ3D",
  "key13": "4CvFhXAeBwZaGMcpjnKH9jNMaAkCYr8edsWoHSRy3cD4YQYjtaQeR2JgUQGEnBeqkTzWnP7dD3MyKnu33bHvmLsm",
  "key14": "35YxBBGd8myprzAGQZ1XRnAs6JiVuUQp3YbCWWyE2GbkxTs14LLPw4FFM2Nh9YkEH6ZkjhMx8ax1K4QdRDwnKPmV",
  "key15": "2TiUVEu2ZWFFP7DZr7tS2qpYdUDE1bngF98TdpSRo3wNH2MTrKsVoxbnCrzhAHeh3K3Bz5kADoe1mePkKwEN6Hty",
  "key16": "43yFeCR8ThiwYAxFDg75bu5NmFJTnmigCaeLED9y9L6kzJCECoXrc37vJXzaLUKx66wsvycuCaNtGt58bN7Tncpg",
  "key17": "4QwR8LqM2xUvQpZRn6uhX88AaKFQVFR8EwcWJQwrvscXKcijUssTA7AL67rWZ6hzSNwZ6bqX8nR92m1pnEHNKsbp",
  "key18": "5iYuDQ3gUsk7S6i9nHLPN5y1jpxV4hfUHDMH345TUmAPks9CjesZNgyWpcsfpDUGPvZpZRjmuSHJPZF55bzCrTHk",
  "key19": "2CRrYtbARh3y2wcPSVokAozT9T81cRYjoTPavTmwZnSXCGN3T2fUqhm4ngvfzssmTFnh9jdpc4XcH51Penb6xYYL",
  "key20": "L5RuaRSJgxNDHRhs9Cwo9LwQP2Q81f6k2WhAHg8DhLCPqwt9Wgdk6y7G7GWXw1ykHm1BG3FnGax6Uhe53ixELpk",
  "key21": "56FvLz3nsMMuphNZoPycGcwTWooU8f6mzLv5ihofmbqzkhj65o1R5no9s46ccpni7ahuW2iKTaUyCpWvdc1rz9vn",
  "key22": "4Qh3uzzWNfy7ypgUnBoUcL37b2D7czf9yqXPfEDVggbPVFnuZwEFPAWXhgdJS7PWHfWKy1e1sJBw9EpGYBDHWe7R",
  "key23": "5AgXwTZVyci4xhqedaK5wrG18CKfPgRNyuL7cLR6JMHJGQxQTb5b4T4Zk95YLDFy7jsDCtfgycMX2usTwd1N6fRY",
  "key24": "4Nu9YdhBv3g251vNc1Ryzik9hwUzKGaiZFLjfwR6P4kTeTRZLA3TxWxxwPGvrSPPxu7HMyWJQHwcjvKqxmhz6LDk",
  "key25": "aEHSYqyoUSFojqqDZE7cD3k5xbgxERvAaQ2BnN9fVMxXQXK5vzn8kPgSHPjDJrkWeUwABQdzCkY9ZcD2wBNohfa",
  "key26": "47KMAtBPGU61U92ru2amzaqDpR38VX6HyE47y9qdss6cJvRx5gW21k7TeP9rjaoEyUPuHoofzg2wcSjnUY7PwaEv",
  "key27": "3omQqPSGb5XRJppeQ4NernGYj2Zi5qHUtQo5rKy4JzKnNKAzJ6M3TWvNv9F8KTB6hm9Hwz5ACTFuvHBRXLg4DZ4H",
  "key28": "3Trt6dwfQJfGb5PixybVn47MY1f8qzYAQnHuPWfbbg59fx17evaEbT9KhZdFKxciC24uKcSYUyXaWMDD1zmn9XP2",
  "key29": "5mzJX7hk2MamuTaY5dTfgUXACSQmrAAK6ogj9ypcefKtGcyuEbxtDzpeFCpUcvkJtEqE4cCYeSpiEjqKrN5KPq5H",
  "key30": "3fxyZMdkmhsV2XrBe8NDaEv4YUg9o9CuuZssvUWsZWaQvn7Q7wCNuePJxv5W7nHZeivg44HevjzPX7EN6x7nKM1C",
  "key31": "4NREY17CbeJPLhefJTMwoC5VZTbCpnZCvfCEkKz1wyKRmYuUk27XUQ4LVFutmpSW2jKM9yXUwm5K22Pzdxq3rpni"
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
