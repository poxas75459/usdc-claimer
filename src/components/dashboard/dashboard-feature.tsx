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
    "5pkFGonzuqdzJNWWuexrohiWQY9Ah7Ho7AtoqWFKv5bvkjiJKGbzvWH39yD6xD5ubtwf9TmSwvLcWc7RANeoj8oy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iFXVKKxFrFPE2CvXdfEwgVX6gFTY7fCdwvQQze9yYPByww1HNtZTvMX7wbuqJ7SXUiWzkvRw9vay9hMBr8EEmuu",
  "key1": "4MAHKW1GVg2Xe1HsFUK3epEkY148MvGhmmHe4vZwWWQ3bkfCfk8DSuDicGbdZvEwKEgVmBweoQMBegcufFUd6PZH",
  "key2": "3WyYjGtT9pmqpRD5YucnvCXtdsoMExeFpRht4P2kBBvByXaB4yD4tx6TshyuSbPj3PsQcy3zRr48nDVpjDVMtZ6P",
  "key3": "62pz26b6NEWsaRtq6ZvJPTJbdnCfJysTFnL1EL8tMgsAPuP4Edxf6dsUhqT5ZvXb8Ru9cQBLPEEFSkHN9fWd99dw",
  "key4": "5yAkyYK19jbigomq9P8huyFqXV5UN1vn3eWNx3NhuSCJzS7UiXdNQd42Ab7KGt4BZYy98HB3hDDLfesaN1ZhHXB7",
  "key5": "4QHjkq58xvGPZuPTtPwkGF5u2xBhVFC93eYcgi6SkbwkXu4iDGjBbWY3tjp81PSTyExhXJmj5KMvYzvSLaFCGQub",
  "key6": "5ZM6XA93V1WF3zMs7XX8YCV4MNG9qmu95dGvwaeZEvVC53y4Dck3BoiJaoHtkcXfPMrZC6bV6a3T1PawwYKX1qw3",
  "key7": "49KaaY1fmLW1NkpmX6VJDfaEfM1gu2bcJFLDQ4mPknRkRrUxYvC8NpcTSNKfDkF8EXv6epPqxzGNz8Z5Gr921D7N",
  "key8": "2Q761EceHc1o9CJXkeUSjgiPVYJn7zbaYjBJZ1Zfnh4xvLjpLjzB9mRcozsa6uz8J4MGNrWRxUpqPHZashGB9RfU",
  "key9": "4Pup6WicRExWofz4bUUZYCwtsY3AtMBMafdZr3uEvv2rVxwesVzuF7Pvm4TgpkNETVdfCU1JLLxUmzKDPBHqs8Tz",
  "key10": "5GFBcUbuFgN87WEzvzokrF7jtnfz3bWykTHhJJAwZfmzVPzYHJBVXtZF8yTMkiBMGF5ymtYPFr2b5LGFDP7o9Btq",
  "key11": "3Wc8bg8Wzvne2JB7E41ubnDQZtJeYZPHyEYbV8goxjgGf2cbSgyTYpVd3AcBgW9inPnj3LjvqcXo8rj96UQTBoUa",
  "key12": "3mEtHyX7JL9P57auxAefqzcNmthqJ7DMRRvcTCc3T5Z9DFXJkhxtSnyGNpfKWscYKoxBNWHzoxqiUcWyxzqpsn2G",
  "key13": "5aBPR1UyMbPLGwnRtQhRzwW989TNjpf8Lsz1fDM47mv5rbxV4qndXgL3sESEYDLLW3ht65vSm4QtkZ3vSZjeTpjH",
  "key14": "59ixQEDb6FcjeKhNgryap8JASL8EwcKr1QRgfTpvNPCsM5VUioQoQB5eZzGkdwmCMTPJf557K9xVahztZmWK8cY7",
  "key15": "55NvoncSMZc1t1ys9bojuDSBRPuNm7VM6xdMigTNpdL7AnLaNL4yJnh8SVpUsGBRFfJBa8J5KVTutHRWqnKt2iU",
  "key16": "32eMZodxDb4PfkBuKG3DZkM7ZzyHHnRPRkJbgVyBR66rfBTRFLuzbm7yoeYwzECY2EWG38QqS3kLiznMYKdAhV6j",
  "key17": "MyYWo4L7w67esvdwgqYdA3ksVm8dFR4kZUPp41EBkSnSwW3hiC7tpEgeZHb4FRwLE8XhbrSnihntj83JKaJeUKG",
  "key18": "5kaqh4pDUAuGRQJt5YiiB3ApEbntUhL4qbJJ9nVZPuATfvRSm7g9nE7vt2sRyz8mAn1ssSZygoTCBJe19Wk7ttLU",
  "key19": "3Ad4LdfsXAkHuBwkVqfWgyDe1zjwGriHyfyDJD1zkAqJv3NR6a3Za886C67jfSSh6aNWUnKx8ZNXasf29vT3eweo",
  "key20": "5UEu1axMqVsGSGM8snFTS97YpZH99xzdfikYiB1Q8qw9Wep6Y1y6NNZbGpXiLz77VfJWaNKo1eyZQ7pBZUkttCqX",
  "key21": "2y8bVT5QPXcBw53t5h7YTUyv6VK2nV2VDfNyNExNt2L5thF636ztmXNR47ujrAerDo2CX6vS6vxRFuH48Kd9nBuD",
  "key22": "2SR9Cm6Zb5xX5Lq6PKbQ2z7YAf5v8QG6dXrt74m3EDMSGSVEgq6uNuY59zw9nUsGqhHi1PV6SG2GPFyfVNaZmwLc",
  "key23": "64HQbyfGkw79QsCbBFiMqQkzsjiQuAxdGoXjo79sGbNbtiwhdAfeJFZW26mPeDsmqQr6JzTMDQp4FCzjpHRaTVXa",
  "key24": "9ifMLT6pYd8mma2geQULucALPHiRS2ULjUe5KAb48TS4U8WLr1eHbS7a22hMrueLVPomdFvmPZfDcr6JXiAx4wk",
  "key25": "52NRsyNgctTbKHcHB9pgobewUUjyavruyR6fB28f3B2q6koCSyBZHZdwU2TwL5ekYzc8ytkjygz3Qc3h7e4LSfsE",
  "key26": "2VUqVMkU3Wa48m7EPHDoJ6CHAmJaKBivkWMSmK9k48ZXwam5L3BGU18KdDB4meXzomGAXTiyBoVJBVtJhiPvUj7f",
  "key27": "2yRWomYQucwujD4PpdzJJkDe3FWa4gTmSinpYu6Ccv5RDLKSqqrF6GjCiRzvFUHe3YCtHDE71m3bgfKrJ6n7uCfg",
  "key28": "ZXaN7prgRGvGYqghBWjP3KL7SewwoPYz6wHepqbECLYcnUpX1k2XBaZV8HPnvczHXb3hNxz1UXApcbdES4uG4gi",
  "key29": "135R3yn55w3h3SGPgYZnebNZwQA7QYKZn3ecCGRCrpuDA9DhNvassNSMPukyaRzyTNvvKTCuYeNrdouxTcTdh4n",
  "key30": "5UqYM6g9VHKM9XXRb9h6JExkmBgqZVfEWbowSe6gAXfvcQBQptyLPRremFVvuW4oR8xrNtkfeEwxHhn8TTsopxgc",
  "key31": "3THACJvBWikHBdCge4JfZHYEpWcR2SgspGWSRYokBi5saSkycnzHbXsHtCZcbTdF6XSUx7SC67LoWBQi21sHM9rP",
  "key32": "64tkAiMTQfZaGDtoqE2oVTFmQu92JiK4ZAHcfy8xaAHpGmyEqr5oVAn7THPMNnF9gSGyz8n3ZG8VxViLRuyiEWh2",
  "key33": "2fp916zfxNQWqJHk8YXcAZf91ZTNkHALkHkPnpkm2RQHdXQueqDYhSPEiccuAc8hEucTZn5CVpPyYyMKCUQBvpKi",
  "key34": "AD8LeECbNdCpvAJN47agBq4dZqhhzcRQTLrCaHCyyMBv3tZxz9NSqodwRpeaGsTPq1KtC6HQGgWTndQEJFb7YZ3",
  "key35": "61mnfU8gkDoQFvnURwyfBFDgr2qbZHmKL74LAM6jiSdKfF4juDHrRmSnxSsfPW9ZGPPrqJDxZuqvL5F8Be59iTQc",
  "key36": "5dZAPrevJdwNkzGMvZUczwsJRcT8bxFJAWRpZE9BRAqMr7x4tsA7U5Sx53KdEEqRRAq1AzjAvmT96x6mzBungt8u",
  "key37": "2Crf8JX3GiC4Tg5KrsqoAgptKM5V28ujsxzNFXFwDbTBqLqQHAeSXFL1r1RcZBzTQLZxfB6rqHYWBur64FRBWi7c",
  "key38": "3MinqbaymnT6yWzbinkaRBg8JKfueENXKFLiRXDA74NRtwRTBReJdpgJnHKR9Q1k8726ebGRFaq1r3AhJeWDFRj8",
  "key39": "4n4BzhQMSy8za92nS88MKRyAvZriSKUfn6pj5N4CRQjyAPMDG6EiU5P9ynEkwBPJoEfNuk6kHB3hcU7HBh59PsEf",
  "key40": "zrBvBLteNw94LQPn3KwD6qXAVup99nQ58o4d4DWnySjoV86nW27TuP4zEgD4TPWFX6HASC5Q5uUj5omQWHhwtE3",
  "key41": "455DFkpKA4JYruwRPQseMT7GLvNJ8V54DE6X9LPDhmxCAG7iYFXKKAECKxyy19auqPHtLobFoZZ2T3N2vCnG4KB4",
  "key42": "3LRkMAEQDtM4Gw5yjmWJSEzyWPAJRe2o1GuepaujXiCqc9sFtmkNUzkyFWEavzW9YYwPz1T3nCWBQjpYMrswZXTr",
  "key43": "2qydihDkpnYQ7otc6mAqd6b9fLimb5xMY9TxnULse26z8gpbCfb41Jz1CsHFiHXcy8sWKJyrjRWS4PtwKgh3hGMJ",
  "key44": "FYyQhyDjf7GNNBBfmMYVnbpsRY68cf3eeq6UQAJJWRNFkjM5YpK84SVQ73fRN7G3DwHSrTd3cJMM1Ea5tm2E6QN",
  "key45": "2VvpZUco6AZ7CFmqN1reLG2FRmYaCc9wZcC8ErPh2HiHSd8r5WXgr1Ee6BWrTFkezHSxLx3McUwCzqLbfGxeViup"
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
