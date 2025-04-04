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
    "JtxRrfP9LuRozBPdeFUgFha55A8fpNmL6W1qkH7d42hx4svDPevWAaaZ1YC6V9kmWEMAVKenrWfmg7YeorbR7gN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T4caMftWceRaoVSQTVQX3ULQo4d1WJLCoFCEmd2DVzZ35VqNiCDpQF5L8TNhMpr5HW6ZdyTiyFrfpQ7rux6Ntj5",
  "key1": "ygbuivkKyEdDZL8AwTMsqgXoQtTmLoYYrA2cXfv7WsdJM6XF1fF9VxpM3JU4ycXBBt65UuWgfPntukK2RS7qu1n",
  "key2": "58ThdXj8uRA6GV3N3iNPcAo4jQrJ1GQpBiG7xDxc8Z8dCW6PJCLToPVrDrNXfkSLmWJk6VPsWx8NDksb9UB8w4oG",
  "key3": "2EdgZDDeRZAdtvsd499rFoVv3BagHKFyKzscjXASmprF2PBq5rftpJGYAzPMe7jskN9wYeysdKpbQLF6uRNuFzxG",
  "key4": "58ubDfZthyegPxvhCKAV4SKUeEQUxFKnhbDCoeivqsX21PuwA9mjRBXgPuyjF7VKwCcjGMB4z585EU19vif8KZ8p",
  "key5": "64kFPKhqSHfESWqe7vyvK7BKVxNB8kJ4dQ193ZBjmGxr794tMXAcyjr9itW7QUTSzRLE9T4hzDwESyNCkp3GXH34",
  "key6": "4JuxsxTNwuPtHViwqstsempUZhzMm68Hbohd8U7vb55cMo378vVthFfkrgNm45PTbk6p8Bstf6rxDsTgx975JvPi",
  "key7": "5vAxiogTpPx3ShVwVTGF8KKTm9RDB32eXz3BpMw1kCSP5YgxU22Ka7wmKRTBmEMar7mbJA11Cfu4R5yLtymqsckG",
  "key8": "4DHKevJ3qdRriv8JqsK7bHXYLYEWv7nwAEiYRsK23LutwTFgdpWaQGdvC7hjJdT4JaRbTX81EUP99vHXjBykuPv3",
  "key9": "49hR98GjMEftzBiepwYcDeCNdRYLYPiHQkqmA9pbmBTGYeYAxY3RtymezhkFaHBnQpFFWKTZbnYcWddwQZhAHSCG",
  "key10": "73VbsAJy98o3vk5aujVWzehwijPFpwLJ88ZUhkzQKxu6gAoY1XU3DhqsA8dw7BrMrvBusKbnHhdCU4wSpXbHwMx",
  "key11": "32pRRZd39f3BLFGkNt2g1k8PKX1ZgMXDcbBC3qPjkFseTcJDokeHeg4uLT7dSNftKsonihCDhbGQR2fJNeujS4Eh",
  "key12": "3dH5C6moNNBxakd9mrjjtuqgRUBQNKK82W4eDkNaXEVkDN2KsNxSXy93MTguA2bwjZCczC7veaj4PQJBRFQnGco3",
  "key13": "4A1W86kjLUox9AuwoWuuU93mPQoiPcv3QpULti3mgzzEEucMRsF8YTKbr1sxPHYQuHYibgpHRLf7ZjB2wnLBfDie",
  "key14": "2TMJrK1MypuV1NNxiht6LodxiXif5rRXCgYWX8r6Vfq8foGjdJq1zv3K5dh574NzoRvqV6d8SFgsVXkergM52SZD",
  "key15": "2C1VKyjK2W9kPdQ7hoP8NXJBKC6njVit6pDsdhQs8rJG1BdrseybWBQB3iqXLQdBZjtyxchHyfkeeoJSeTUvYtTX",
  "key16": "33bZ2hFCNvzmVBc6vfkSjmr45S9zJ6j7EQ2qAdyH3j6QbmUVJNDB4hxLExif6uVonTmMis4Pk9Mxw6T2FxZUmFVZ",
  "key17": "5c8LuDcvcVr9jA4zutuZwiEb2uEWPdcq68w6nhVgip5uV3KtF946vwjWwTrsHM831YEVzfqVdWWe4A6ER3bTXMT6",
  "key18": "5TDd5n3CktL6SQ3a1P4ofU1MAG7u9p7UVyNZDvHDyf4RVxRpQDGmxez9tvjH1GYu8dmr8aBV4cvioizE2UdsS1mi",
  "key19": "4QBcERXz3Lx4QxWez3ehtvtBEUSwWwRPwrhvDwA24wo2cLWPXouhvqUuXUf4V9J8UsUYjRsSHK9BfaPCKjcp8A3g",
  "key20": "3aRDDGeadBYY6v7QD67GttuL2DvjCheyVAqAc7ungC1aPXcvYDVHK4VavtSws2X9sM7mJKrpqfdb5RaAv4DiST9S",
  "key21": "4vxdhtW2Ei644YavVJXgnmWPGGsrC5kSaEdqwv2oMVbLfSdjURBZZFPyXGCQGHS3oWQfDXb3YvkjPeLPVsEBrLuM",
  "key22": "2me9QBFXfsZehtyTpF1B6WFznqdgBYJAGnjxek31Z6a9ETD1F378geYn8d4LeHi17cHawPEvueXLJbaHsAjPmzWF",
  "key23": "5m4A3HFixC8QhVrRnmrpEwCDsEybRMvvaSJ3yvraj7t9Jc8AbY5wRaBycJPYK4DNffWveNEJf4RDXXpyqdUWiE8J",
  "key24": "3NoLdAaeBnoqvqDc2eGc3tqSf1hjgetKDdh5BKXYZDWttyP6cUoQWWvxSj4K9uqXemyjaH1W9qSyGuExAhjGB7XU",
  "key25": "5VDAn9EogWkt1kJB7UjyHgpcmkbE7xxtP9iZmVWDuqJpWrBUauwqoNnev95cViNNFDaP2FA7pyMwqQYmGPLCMXxB",
  "key26": "6353KwbxVjmBGSFA5WELqRu3yZ8Mkb6AGJS2UuGqqjJSdz4zsHL91FMV6f8Nd1eZPQH4vzwEJfQL1hxA9r9Qw8cE",
  "key27": "xNmu1X1RwvKWLirrJknmhgQsghk3KjY4r2UhoaJ21S6MbQr6qVdspxMjCW1kBH9N3EdgrncBPnPMVr36TzRgXjC",
  "key28": "3szZr56NCGRGDQPWRcCgHFLZopwD939oAtdqVsqxbGY4SQYKthkkMhRKenjZb7m3s2QKBYdnVyZoJFdYtfGCZWVp",
  "key29": "2CLSTF1QvYAZfrdgVbqrgo6aHM5KH3FsQLW4kneEH7VYEpvK4KDALkpfoWh4hcJiNRcdPjuZULPf4ftV3A9EyKGo",
  "key30": "2Dzbfp23v1Ut1YDJRg3fD71oELTN4ozJnY31F1Ng2RtNiwwD9PbpBYcu6hpdjbds6vKWaiH7iyur667NLjoZUUwv",
  "key31": "XvHe46RzSgKcsH28D3nK3GLdjz6H7NUMKZgmbypWN9b37RWHNxTKdeEmWFSyf6dK8SYkiZk17faEjh3K4nAQgsw",
  "key32": "FTKHhqmadKRhYSGBazyig5jKCLPwJQQDXqhU3HjwZ4inZKseFGKw5cEFPA73NPy17TprDfP7gJDaoCuoR46uHC3",
  "key33": "4jzwmYafPCtXtE6T1TrvVFWuCPcFTS2U9newkHHJ1FsvbmhNHZJrK3m5YUHcc4XgF4nKPqmmkHUhwHEVr11vtoRh",
  "key34": "dezu452ZsPqwywuXvJnGRVfGEikDEaQDqmBcqToSzWdZ3ZvN7vNAMXZn652W7Bhb1FHrkYbUooTKMjA7FzNkR7i",
  "key35": "4ksFMtJt3u3BNHHx3QXp8ZWh8mJYzeTXAAxKSuEbf2PjAJ2MRzr7S61rVkwnRyZYWwRCFPi3eSUoSCjDCWRkYjE4",
  "key36": "4Srhw4ecEs1D7xyenAyqWpSi3WuT8GnKUUsN4BHyoW5SMPNZeNqV28h6jGA1u4xQJA6SHZkkWgNEgJbCBnY3n6k4"
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
