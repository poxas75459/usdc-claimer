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
    "4Qgh92avbJ1e2kuWj8fS45CA9DpUtGnk64rX7PAji7deb9P6e8yzKDUKM9GH53bEffSAQEknuLZn74sJh1ANtu4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57vHNb85rsWiAnyvzVTz3WKEMMtgEwJgCdv4isBnUVvoGqHyGZrix8DM1KznNnhm8FiKnm2ZyQcBegCCPbraPpGW",
  "key1": "MrYDinSJg919Pv8BHMbsHX1gzNTPoqSXrhUtAUPoWNbWxeSqTRKTF3zeE6M1f2wfViWpc4HpruveiufKNtFazNk",
  "key2": "39fMUzTZH1h9cw7PKUdyYoRhK1eoeKW6oaNUx5RfVifZCRrGw72hCfDHVR1EDDhGbYU5H327cepccJQvp1Nx8eve",
  "key3": "4MdW2TLLxEbBLAP5iksW71j3hp92uDjAGifC21rm31MJgDaRh6DNWpdd16bvz6HipDtEHADNxByAg3f2anda55Ui",
  "key4": "2yZ9W4ijJTZsHJr1Hq1dgk4Leo52YBRiJUD5q1QU4U7YUKWAHc2SbVh1ZKoix8QYsuQAqJvKHzBsK6hWArHiuoRJ",
  "key5": "2eKEHxBBhFyVN3f4uy2P9jaQ8E7ZSjQb137jkYATj7nsoL5RTQouDRbzZospQkMf3f8vzDQpPrRUg77fzqt5DEnx",
  "key6": "32XzjcUhxuzeqMwEKpQG3h4gts3WhSDM8sBaBRfjLMPPqg2tAuaD2XHyaApa4zcP6AVaaEhcd8JqgzfnvDypkJXV",
  "key7": "5g5JE3vhjksJuqdpJcSwrEnP2LkvSvY71v6cE34qaE6YGjcTtVrQq8XYThrxn4dyGXc3anuVfjoatY5qTbvvN51L",
  "key8": "2ic4HnLtxnmjj1n8KLmvY3hsau1qmuRRXtxivjAySnFq4c9zhNHtkBtqZsLYkdCBBQ6HfmFeiMb51SxsW5BrXNT1",
  "key9": "3Vx5dsuyaJvAiBn5knzabtvrJASZ6q8nwngw5AEaWbZAbwu2pMN4vp8GyyGYvWiRU2kdiLVqu18AKnNTeAYGmkQr",
  "key10": "4JZjo61NX2bhm15wvSwsWMctutQMKLCWCpV9aXmqCpeUgCyQu65myG9FXFVWYTNkX48JJesNrqwu7D87QpzDzema",
  "key11": "3ziSX5mzeGy9UnwAYKSiDt29mwRLEGQaYoR1wcBY272BUAYDfvSRbC4dnWZucYYiaffCpN7JYNr2B2FXM7AsB4Vg",
  "key12": "UzbSgW94rGw5Y7aFHHHDAgiqfPhqEweaBMc2zrp7grjXyBLAyBDmne2dcZ45pjp6N9Twkc3aGjY8o8btMKZJgLo",
  "key13": "EiqET1aacRQAN5bkgBAtCHrskrUH1JkN7TdzanpTrXin1x4EfXds5PJfhaFHYXRUBwnaXFBLGxXd7FPHuKHLQkr",
  "key14": "Ysbdy3CRjQSFHtL6UGMYRfJ3V4JVzcGzHz5W53CxUsz9FzPjZ9EQ82AAxSpEHqsKW9k7NvnVYD8pkihed8GtEfv",
  "key15": "4oZpefFtPcZsHLt5Sq7nBsB9M8Cvvw8pCR8HX8ooQSvDvHHy6ifgXvDnjY4EmoJS2Zdu1SkMJqqS83amJzzQwEFc",
  "key16": "56acqdNQ5y6KAHihJZvTkDmFEP9LUTAmPhzfoiwwAGoFBLMgYkqZSmgsqQDLKzXn6ouLuEhF32RSv9BpPnAr9X83",
  "key17": "4V7hC1qKjqMKPEdEUmue1e7erKrcjw2ENEXygUoaJcf6oRNpYw2tqyWx23bzYAWfjsX3S3s2pctukkCjoSwH5FzF",
  "key18": "5BoqbiXURKJhhXZ3MdpxFdg8LPqpx2S34nExgTxWhvrzw7o7f1uijvzu7gVmFhJqsmjJfPPRtgBeBU2hCUNxUgYY",
  "key19": "3FoYdyFr4TJHbVSLKyMd3CXedggssiGGNg8cHqcHKoAQuFjGCuL2fD5Ri4P9GASWawqLVopCAf9oyX4p351TxD14",
  "key20": "Zifgur7HTGE74HDPxWoFYYpDRY5HGctZADrYkTwFtsPEU5YQitBw1rQZesYMNJjt11395Qg3fdwih1pJmT6rSHM",
  "key21": "2E2jpS2shzcdbQj3Q5F1Qror48FCjysHJuxxfShBUN6famh6bv6uh9UNTEUNzuR9ugugVYQR5xEdohSmYR7QGLsr",
  "key22": "5sVdnWWARLML6oGmqtUVReuehwGsX8jKdyqgFmJVwMBNpzpi2rX9A21a9E5ezAy4AJooPxNKLvFo4WZqAXdRRJPV",
  "key23": "4wwxZ59qBGHLstD6ao83dE3Na2YYzmzGxttwnoHyCVxPBkc58DpAgk8S7APWqBwfcKi9qfB34yPCmfKAn4h9NHMG",
  "key24": "4ZupwSGK4J1bcdZ2yRqjtyDjV8exshv3JaXXSse3Qz64zdXLc8emtkhtLwCa5Zctr7PwpL5Vek3y1dmYWJn9WJsy",
  "key25": "5V1Ny2KRegwahtfj61dKqvMzCe87QdzZniGrgN8bbF6uHoRAHQ6Tsq5ygYQ2ZqQxA4R1t6KwteuUBanCbRQ8gtRY",
  "key26": "5W6psLnb39cwSX5G3mhstpBmQ1QNP2UtT51ddPA4qhRRD6PmB2XucFW6zM2rBe6osoZ97myUCuAT3rwBb6dy5pdS",
  "key27": "5hTgtKphAYZR9LjmZjmDNr8hVPhZGkBT2NndnPMMiQkswVetX6ijhxgjdhCve5ysgk25zEuCEsgwnUQyJ4P23twj",
  "key28": "e9Ldk4YRs3D4RmjQMSsxZNzzRiupoyrbedVrhCYcRmjUmbyvsdpQDz6Cc6KBdpdxYgQEoBvpwkwjkdF7tJuBTxt",
  "key29": "5wQhAAACbb1J5cecDKhXC5uDJ4WbNZRLFM9F3nD75MMVwpeQkwBXXxXp9RPdXyqSeoFK7XriqJ7kMdoRqYeSC3rf",
  "key30": "3NwN7uPbMLVU3jKfT3dNJHC46w91xTGHMGjH8pc9ytirErFpJbHzsw1H4uMtuNrWKQdQc6h39rJewRJo7Zoac5xT",
  "key31": "4KxKbtxjDZaJxxr1dGTJ7gN77afJoRAVN168WWdHWTbZJbKRyod9Doix5rLx3Z2HJzXjcXmkpEchXSZT7TGvRKeU",
  "key32": "4J4jVrY2PqTXNzysfAQFeTGzQwCoTDKLJaBE1mJTEMu2CHbmthqfjKLujrku88Vg3kcfezDsUWN575Xx9tXGUZHA",
  "key33": "2H9opg3NPwTjLwUZpa19kJ6mowGCjjkn7ynQw7Jssht1sEf7CNww9iJ56iWQFaVLgsw4bBXwyo4ygasjsAby4c7p",
  "key34": "66JHgFmMAriwntUgbt4aSGV9vXyLZjHuqRDsFnne3T1tHVwrMoYLfvREWMsk2fhgF4jG1yiqMyYh9LZhfupRJKuz",
  "key35": "2L2NTQ1zpELacpS8bQfzUYUFtYTFSr85nsVCyZWn7QLWAkF3VqHHQsTA1ASZm4gcNxsZqfo4bzPhQegssEHCJp45",
  "key36": "3wDBJLpUXadC9yujSqt83iCKfzC1SXafpnCkrkVr4U7xJnRHzAyK8cRE8i6pFBCTc667pb1R3mWw4YPvMnkA6eCb",
  "key37": "4KT1wtVo2s8Q8Dh66HyFZ8H2Hg24pAJFSE92bkf1M48zao8P3wCHFdQiYkDr9rfKWqMdaFyR6KQSz64nYMWes88N",
  "key38": "4u9nMhvZy6Qts7uPgA5wjNYcLtMq1TKbA7jxj1weQk93WnTaHSMW9oH4jZ7EWmRhFgRHXRWLSwPKHc5gN8dXgkBu",
  "key39": "34T2bT2rbLdcLDDsgAQip5ynh1D6P372ZybURXPkmR44oLc7DBtXHkgMzBWaPBwbrzQ8nQwGuV9PBrLBWap3Z11m",
  "key40": "34HkNjPhde748wXu98jgKj1GYkM9jmZLY2okZnBzBuCHU6nL2sSaqaejECw4Hsc5V94PAbKBXMVv9oys584rZyca",
  "key41": "2LvARKE4XfS36mv4kHjz6xU9PJV7FUrpx1zkWfX9apEqQHMiuxeJsTzBvdCUkECvfdJcjiCZ8Tm2Ut5WPH3otrcH",
  "key42": "3xmAt8BDtDpe4BqQgBbf4u8m9CgqkmX51SiVH6w3y65j2dLMKMEFwNZXBmM8oAmMg7u2jG9JdkVxdn6qBpHfKGSo",
  "key43": "2qtpxHGSSES9jVWA5gfbRRy7XNk8DoDv7dTJDmLYAm94n3tR1SPjsXfR1qrhnUZAB3dvQ2pY89AzQzvLqJYMu92"
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
