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
    "3jRmrxGCEYK2h4JiAphgFFGuoLL1ZH3FnGFpLX7a1LA37VQs7k6mEDFZog6oQVe9bqk8i3EYL2veBD8E4V1SvRCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V3xiRJjdPdeR5tVfFHnLmsxEmhaUJDyeDJ9TCygPiyKxx7rAVZ5aXHonmsVKFJoF7Ba2hB8gbviyMUjqhUXmDnx",
  "key1": "5Q11xb1pW4jZr9UHGahsPei7wW419yfZybUjiEiZXamwbpDwZXQmsWRXzVAERoB7N3cSB8DjbbgmjvYmnDJNBWfi",
  "key2": "53tc3UQV9R4rgXUEhhV5RVfoKbieBopSvq8bF5gifNG5ZHb3cne8rX5RCV3dUDTEMsvmLBPHfSDMBNdrRosGEsRj",
  "key3": "3Mhyf4o3ZCU93QYxBy6sgekEFemTmCUzrX3MS3GSxZig3rPxMemzHfxqkaVzkoGAXtbMfTYcfMST1tYACBPd1frt",
  "key4": "2PTn4sUF19E2jRmZEdstttCPwjMDMpYgxCGUNsBSeTiaP3j9ZEPQfG6qZr5wXPZDjqBcBGhbbQB4D3JAt88pNtoC",
  "key5": "3aLVULaEEFrDBoMvNmvq6HsbS8y2QGUrbb3KDY3raiJbHNq8XE4wErK13Xoe2u8hP1mxikEPPVyzz64vw9EKLSbc",
  "key6": "24LRpcYK7cecALcPZrZMYC7MH72T4KQbuYGLWYGUauvE1GV8zhfVFWUrAvX1Fwc48dkjVpSk5jRvVCxxScRmuk5Y",
  "key7": "j6nPoxDH15LgfEjypjNT5uGEGxAMYdLRm3byKekHWT6RQ3xxLWVcmFN2QxbRsK9JuX6fDGDQxvm5SDbKdAgZA6V",
  "key8": "rVkRFsmWgJS9bSoJCMG68VFJia5Sts73GCwQtcoqm1TyzA47z1jbUY968SCFz7a2ycqAUcGQT6friDzdSiiyjE6",
  "key9": "2Tec5RstADRfX2xTMUUWm6Sc3XzDRP3RNaahvh6Fk9KnnMY89NK3sDVQHii8qroHDPMYnVPNXKnu51K9MdpE2nGo",
  "key10": "36hxkw75NecetxWtrAsQwFdeUyTTKwVYp97E6M6NT3DngYKxZRSqrDgyY8QuSyGzSQ7sFmY1NXoFB2njt6Bv6dKM",
  "key11": "2XBQuu9iDrLJUtWwypRSvtosyC1jJeQKNCbK2goJNwRveByyEZ99mhoUEFyhbNjEb7hY7rN1ZXajriVJWNjuSdZj",
  "key12": "5svGeyFj3HYznbtrRzrWVbNYKxq3GrSqwzeavS4S4ybvzzsB618TEYT1zGuTYhY3w3nvb8vz53nqZKDzZZFPhBVQ",
  "key13": "29cDTgykUtR59pLghDSaiPjLHLnv1n2xw5MpygBBrozwUjJgWP8EoaRoopnEsmxy9i26J7ViCHoAaz7iQbeSUJjg",
  "key14": "4nTR7TibcznQjN9VJcyUFZ6KPfDdtk7JcNZSgD5XRP1Z1VDsfnf4VkXgep5fEuRrER9eYGS9KG882gM1QASMuHkc",
  "key15": "58qqfHYCq3fFFdNPypbDeEsLM7LTYM21PGKnb6Hkf48MMGhpizCNcncicgmN2XHCAV6UyTjgYTYn3z2cqCnJwrWF",
  "key16": "4DEAfU9ShatZbXgbc4GhPm5qCK16D6VS5Z8PQmoxmy7wT2FERCJmXxdHL9uNsdAtWq92xJfd1wd5tvyb3gKyX1t8",
  "key17": "3LxFVLqicDDxgMaC31JF3sJU663W6xQC5ZZxh58KxcEBjfGJcZpXyuUZVy2fgs815UqpAMN6jn5kQEtS5mw1y8UC",
  "key18": "5XDobdJiGxghdCk827kWvQ1W9zGroCrFGxBriHNhAcNhXgUGess9D7Tx7Xik2YxPfSN3k8yEwQugDR3vpjGXnDCp",
  "key19": "pP5AXVA4rQo9gsxzs2q8FXBkLqMnY2wioiAn3C1jzsB8mpN91SRDFw2fcZrqPK5Zb5cWZjxLvgtEC1w2m4Q68rV",
  "key20": "QohWrGGBNv1VyJxmiFzQAaCDsZbunJ4eeQG4dbHHVzPXVXoYZ42PvfSiGZHviVzBNPAX79HN4X7JGE3AE1JJ8ua",
  "key21": "3CZh7F9vdoYWxPHMfysbq9m3jKHTX1hXeqdFmzVVjurq5GRFCozyT6AhjBYVUcH8RaiXcofWcT55hzso3mKdYMSJ",
  "key22": "3b9ALM3ZH5ke8Q6EwefA8C1n33jRFs9z64MRZ3MKyvZ6yJrDGWjc5FnAV9ieadpGCS4oiHjXrY8ef5FBUN9CTtjj",
  "key23": "3Njb3C8awbqX9TZp8HWkacKL4QAUTUVs32iyQXiYqqjNha26KQskbQ2sfS3rrykQQSvF9jcHJJcdCFfvte7HndXz",
  "key24": "5T8Y3kFDCXsnn8nBUYdZGwvGDTSiZg7QCdPqJNzWd9DvbfUNemr3vDj1wLsk8sNAwqtfDWHoko6MHAFPC5wYKkVB",
  "key25": "zzoGfTc2V4i3W8UT9rjMX54tUWZG9w3qiGLJBXD8qqvxUibcophNg24UoWbg4eJntzRezNLZhEeYdeXCr8MFcuJ",
  "key26": "2bTXNkTfDpq8ii5u7wrz6vwU9NpdAE1omdsFwxjdAj17STLVthvvPkNwz48w5axkY2oqPKk94Npbr8dvGUj1vBpY",
  "key27": "5TeQYunB6TKcQKLkdPcEHaY3AmD6RHHPhq1jQbYzf1CMYefKZqQg981pAwiicXrEmHGtuHvBFHRrDurQ3WYnN3cs",
  "key28": "3HG4VuECcueTrUgHUgXme9ABQ4LdGwXu5pfoLcMEVppLTrVGRGZdZcVGmcaUqq3Uj4UHcRHMXkZJgkjXb3Dh2j5Q",
  "key29": "5nWAQVwpsrJSfTd4o8XcCcMKMQTJg39Bt45ahpzADDdJ9HwB6Hec8QPKbN8GW86bYNVjn7L7D7CbYBe3dArG8mYM",
  "key30": "3YX69uv14466tCn1daqQTyNSe8QmYMhm8BQhTB83b5uNMHbfXjkGQfD7Et42QWtoHMFd8f4Eu5wZLdACBppZMov5",
  "key31": "3a2NYpMLtCSbrMhTRkQdrzbpyANXFTc3thJGQM7CuhfzKgE3dp5HgHBNRCJoXjsgN3QiYrnM6CYqUYUusYgBM3am",
  "key32": "4m6n42QWQRkRybK3WKmx6sFo61RirhkntbytAUzYGDDK3buM7nyypu1EK8ubkbzZNyvdpJ78BB1GEJ8EpEmFftdR",
  "key33": "39T7FbxvRoMyK8rEHsm4RvZma3RuupD7QSi8JaWspP2fYartXAzHhYAJKN8cumtEbp3of6FcrKkN4TeW2d8fHoeQ",
  "key34": "Vnf7xXLzHju6i9AhBvGV92ZmSRs17QnwQGjYaXaQ8QQFYWbHJiJFyskzrjn3q56t2qF6FDVdR4Rqa9CQ2S2RYpz",
  "key35": "XUWBqYZU3Fv5Nm98P9TcJVSHCbFxeNUiZEnGmsMhrMi9urZKbHZBdKvtP9vJsV7vyMbtYU4bNvH6UaGeo17jYpC",
  "key36": "34aStwnmjaJNDczvYXZAtg5CmAzXMiF71cPdxPZsjZbuodfyavydREymE6jpG33FH3qKiGhxoEaqhm5gzuDj67xe",
  "key37": "5tvNngLNv22QVYhG9edxDf2bHZd4psrRY8vssotaLKavDZtjf5scLvddbVWTJ4ZYp71WAk8b1qBZKsvFkyyydTq5",
  "key38": "EQtbCNTT34WTTKaGJ9yS9VrN6r2nfE4HAXKM2wtiDEZoefCD9NRBapNz4iUNREGuPUKRCGL9dwwXRtCWuNoMjKy",
  "key39": "CmQAAyymJjh7cvHWSsfyFZ9LZcDHDo2dQYMN6PbZv8ZjU7dzonZxA4566jfeBmK6nvRNZW1ydNKuyqaM2TT2Pky",
  "key40": "4J6NRXgGgddjQRC6YGb22M19C8VxSyMpcdtzxRpc486zooU1cavQkZ7AnvtZTsy2shsMjUW2kkCXRLj4oPc5RJCZ",
  "key41": "5F3sFWAbPkPam6RBW5b9KuDzirS8YEVetmpYP86Bd3Uh2dsuRGN2ygvUbFBEeTrN5kCJeRHFaou9BFw9DVVMfLzc",
  "key42": "5TrvDbZPjrq1oU7CupzWRUP35NxrdZ7WSeuoauCb1K6pmkBdfCWFkMiJUxBqZ3A7XGrzDbrrMF9dmfxdi5gTwLfU",
  "key43": "3QRNcsksAe4X78bLF8FktqoVCJ6hYTCitjc2fxPKobjQmTYHo6w7qHmddfjHBXNgraYk9rJgzbMowMVivS7631mu",
  "key44": "3r51MBGbyuhY6RUBQbfmAzs4yFbX4NNoSN3Xd3soLtszVEEd9mBnyG3ngMWgB479A3KqNU1LCa7BwUkG55hjyEQ8"
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
