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
    "3rt7UFnTpXpRNwVBQpD8R5U2xsuS8ptDtM4JBiyNAUv4LgQBrGFaJ8EdKc1veUKT2bKWd7aLodwwRrsNH1kh8cyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48RdnhQdEMqPJ7PnNngtnKbuD9hSCnnjvJoCDve31UvX9FLdALrJkApJGXL6J1SvVDeHgxVG3t1cyPPvMR8AfEy7",
  "key1": "vKq1wg8GBwjnwFRwC8Q3pDUjx4vq6hrLy4J71L6v6ztHKAPVBsmaRXBB65FmX6JDb3wnjQ51cHjRHzACLs6xNqa",
  "key2": "361PLqA5oEwnj8QTzb2ocppUBScgEm3TYsD69UCxeY7Z9dTMCWDD4TYY2RU37ckVxB9ap9RyZX8mGgCvrjHvds22",
  "key3": "5ubgHyeEuxkxKA9pYhkPWRPmzSRX4WJHoVCgkZj3W5DrUBoamjc6LeDC9s9ydbpWy5cGWWbs5zMeY74BsNgtfrgY",
  "key4": "yC4VmzHQ2mU49KaSyQ9y2bEX4kTxYhg69LZpAoebwnGvbeh3dZZXnDL74xvwC2te2Sh56U8UW4D5FdsenAHrntX",
  "key5": "38m1LfLa5wkESBpRFvhBTuwVProiD5ijNN77qAtaEncrnmgu5KCxKtwwW77nyEtsgeSRQ8MJmDaBhArCV3rJczob",
  "key6": "3zfEiekNXZUxX4dYdErtANTqQ2w8tZMbhNMTDgNpFsjyQ5bQ9wBrfdKGQi7rVKzATHtrF8bHTwLzegVUkqxCpfcC",
  "key7": "r8se6N75WGjgwhLGbdvfYboH3SnY3Kh9KSeDmSiWmxX5gSZzBPYwk1AyZexQaHDKPbrygbiyJoKsTVhA6sQwB9w",
  "key8": "xdF3JpeQYJ6yFRLkHpibhgk9mVTSEMyLb512QFw6yNbiBkATQQAmjqb1QpWbqq8PwcN7Tr6YAVjVfmuRoGZEo2S",
  "key9": "3jbtbnLeoU46Cv7CobCRqbuWMjc2ts9p8Rh8BrSyigGk1dy8DfMgeosE2viuymZhLyYQp2L4keYa3KFEED5KN3pQ",
  "key10": "4fTP8nsfGhQ9Cnnv2WhNp4xKjYznPg5Nu2pdycAX4Xuma7U7SxLHSp9hwewWEJ7Fxrw8vSgTkCWkuLokmCbf1NFo",
  "key11": "4R9QysnHr3CQWd2XcwiTqUCWHPjRRe1RSx6FcW4uPwat36z413F9FPjprWU3UNCNVDpp3zN6WMNCxC2kY9s7zCin",
  "key12": "bhHcZHTb8naSzhK9NDMddkUMdXUL7F5FaqoVn9pVutJsuH3nBy9xk6TVCCTEwyQuC9b8F4EWniHwntAs3L22So3",
  "key13": "SiwXuobSwt9cacKPbk3uZ6Kv9SR9Ns31uaRfUdtDuZwD7HcfGgJKZyDzg9K9NZapZxqTyLq2m3DWmrvs77qMcQm",
  "key14": "5YTfP6tnAaaYzPRTh2K1HC3jPXH1JgGxyYg87LCQw8LTyBS7sqdbYvGmy75Pp7xs2CiBjYkWZLNXSZfML4gg4MNr",
  "key15": "2MqtZSPqFedCfdfTym8gq62sbX6eStKcjDZVE9pNr4s5Nxavr2o5WBMuaJTVvCYdj2Fe1VRhRm36Dyg1CiHezRTm",
  "key16": "64gmCKpvSj1nyRYS9136Ct8jMkgwGSiUBdMXoWjUmgvbZTRW6oSifqJafWCZ4XWToG55xRefpSK8NUnocb5n8nTy",
  "key17": "2GJWB4wRXQrYFcsyyGVpBXnGwj1ipRQLetigM1W1Qhx9Ew94CrKnV2ffdAf1DD6xvyFvxUJ4gQcpqbekEo1nxh7j",
  "key18": "45kqbFY5WWhKtro8iLFmDFFqQhmZkqJtRo4mcSW2XawRevYc7BDLvEfjzZtT6AXWjNSY1vX6747DXpXCbRz6AZ5U",
  "key19": "T3FaoGxoxNp4KK1jodQmnFXufh8C7kwYFGCxNWrHUa4EGkGKdRGx6jLntsDsUNxDdAyXt6TiABVovi9N2U7mUM2",
  "key20": "4a9PoCwVPnMB1AbHYosV71YG3StDE4wpsgkWtJRQ8Pz7FnqfHmWDJDRDTUQrdZBS4B75TWTQQUtrv7nZvfLoCe15",
  "key21": "2F5L3NNiWhNfmt37DHwjeU5GhmyVZbJWGfy2YyPvBUQMrupYnK14rsFDYLkcYAKH45wBs6edgQjBb3J56dyGdtP3",
  "key22": "35VrgATavXgpM3d2thUHf4ffNUGDk6TYvfXzbb3zcr2fjidhJhDepGPg7XWFFZJiY5di5g5VfX4ANYRFjGfRJnoi",
  "key23": "57cEMzQ8digJwjDeh9cLLrUKV1twjfLUCfqEC9n25GzxsrEJCuin7q2L4J8KrxTX6rUNHG4c4ekoiQyoxLj364wb",
  "key24": "5V3RiBshfc7Bpaiwe7YBq7uJDCKjh4N7LR8Qkn8SeoaEiAcKZCowKvpytHfRSXy5Ac8eNRR5FThmaMePnH6diV6a",
  "key25": "37DT3eej12hMy33YPcJcC8jVG8NoVkwfKenB2ohDN3toUbYPBKAVY3Mr5GS4pjQ3vjCbLQdLbsrkherkovjYE3ba",
  "key26": "3pyXAn9Aa4N9DKmAC8dU8FkaYjQW9FfYoDCrmYEP6zA7WZYGb7koEsGRW4VwwmwMX3qzXHJsZjhi7mjhRPoyxswA",
  "key27": "229mjC7txTxG9EzqjXEVzswueh4Jg92F1yYjuySFwz45NTq6P5EgNbZpHSprcboDVJXVnA8x6No9YE1Caoc7NXCT",
  "key28": "4dAToJR8HVCqZvCm353mUnqwgvNSmxYMgmpfwKyMJGzZp4SWooSbkZdd9smAM519857RXNeWDxfdciASjy7xafjF",
  "key29": "3hVfs3pSY4L5rYrBGYpbQ9zKQQ9HSiqTLjaWoyST1MuMi1yLYYmf2N2uGD4te9p8gQdSyvY8Wpw81bzyRyX7g6Bs",
  "key30": "Mr1eZMVZupMN1FuzWBQMujNVtV51HqjZrVk4jcPs45GNKeVVALu2HeYCEhiSHKXN7Stu6oVV48oAa9CWBpMyzGL",
  "key31": "5XGdqpAiRXBbFVKVtJSC1d8rMcmN2oPD7LHkqYeKZVTBeeZ2Q5zq8XicbqavWfkVSyVv6pYBgnyUJz7PQMTceRco",
  "key32": "5u5RWfXCxjQAavW52AiZSFQZFkME7PLkiaFA5uop4m82H3pjpzGuMiA6mSZt9uCDXMubj2AGQs72cBNtYdH4SRWR",
  "key33": "xdnpsXn7zm5PjG6zvJMMiKYF9buQtJBjEHTgBPQbGTgzRJGWGHG5w3fAfLEvaDWQJvFhyUWDEGAaGS1CWJm7G1a",
  "key34": "EpNicWCpxNCjMmFFqA6ARWLA2ZKXPswvZGAUmyEzy9fCeAnKHek4NFhMbo1symitDMUzsoh6hBt7TKLkS24t1ou",
  "key35": "2jqVcW5Wrsys32vYQDnAVgp1enYqPhaJwRqjBYgEVyTLokBttbRgkzW9rQSHCEpfqUiEGb6whhdxJJLUswebXipn",
  "key36": "4JMqfcaq6oDVRjkejZDztzBpSQLizXTLo8k14SUwFzoX34LEYJX8JkWtzf6FMRZiY4B69CSGehdhCRMEtEcHuYYb",
  "key37": "4eaagAibSi1EcwfsKNYrhusCY9RaW3zvgEKFdpE5ivGjkFRo9WfXkD1XW6xzbnrQxjnL8jDnpDYoAE1CS8bnrVW2",
  "key38": "3MM1dX3cSsGSepv1ZEk7A3YTREfP3tMjaMf8m637FGRgKSjqKwPEM4c4QuvEPiA9LyiNzqVBei4ADRXMfCo425M3",
  "key39": "44qrDFb5YD13wKtjioRn13K5TxChCHTryBjVchTeA8fRrnxjPNFtWqrbxUy92f9EiktU4qHQJn718K1q2cyDUKji",
  "key40": "5wASN8ZohQ8CADV5WpoZi98oE2P4TT8ruE4De5yk9ptigpxKEoEV6ZdPu2C5PwZc11TYqMNFmPtARF4g3n5caWVM",
  "key41": "63LhWXs3eSym1H27QYn44Lb3PcfiZbeicM8131my7wRqtsjztY7Z9qVSg6SdX248sSx6J3n4BHb7DKfW3XFrDKrp",
  "key42": "3WHJNNXpde2qAzzu9MpZbdzFLBK953SC8WqqVgmk6TpSiz4YPPUuhFCc2jAaAanmjFrzdZeE2ybcveWoBtyBpa52",
  "key43": "5F6c7gQmz5fCRh1eNuq91Q7mmk2HUzkZUwRcEaUdrgu7s41BeKDpii8w7ZnWm1LvNJ75duKrUVUfnf8PC1XWGqdc",
  "key44": "2VT8KqNDtr8shnJCB4Mw2oQdXoyVE4p8Q24Q6p5tP8ewAvB7UmLjMZW4Gd333uRS3nvB3Wh4QHbUtLRuaL9wWXVF",
  "key45": "3qFVsXrGfCsxAaFdtENZmw5QopapfrzsHfNQs1iH61i3ZULarRNtqJdLjPZb9mPCUbumFm4JvENaskqFcNkiNddX"
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
