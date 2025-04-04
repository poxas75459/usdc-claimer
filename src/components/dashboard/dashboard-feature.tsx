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
    "2zVhKeM7NBYYYhWtFXcNgB13CwiPz3vXUvZ79gkfWp7sjN1HqWTNiwHccmRfS1ZxVBZEgzgZxY8wEppYX4Z9wozF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fwEJCP2fcyw1UuvuwXBTBnWBhJ8TPF92g8Lv1SMtoNmPxPorHXH86FtzG64baJaqqP6f8dWiFU4FpNcS5htsQJu",
  "key1": "Tr94V7cq7gzKnTvysNJhwrgHgYpjtHx8fhkw6MGViALDNLXxbddepdQqRyLYqzvV56K4QorpChFDaX4k61ifj1y",
  "key2": "5Ppp8ToTHdRF1f8g4gUftHYLUB3aCfc4yWxqc1Qz56WCVWUNGLiVsvCQpuguf1MFdeCKBJf85mhFspsN8fdtiMXM",
  "key3": "57WZin7fQbZDXF6CCBE9GTPvgbW9YFjThTqeJ9kWWGrQECrJ7z1FygzLVqFghyrCg3Typ32Fk31F1JvBQz5TRqTJ",
  "key4": "3dLsy5bat1qvu81P2d5omP3SQtkF21SUXaibE3JrACt6s9eMeSPwk7Ku4Q4F3cofMYWU42Hz3E1BC3iJETxPPLdy",
  "key5": "k7hmAbyaX3zwHCgbWZ6F4NDZeesSGX5sQriB66xNosm51S4z23SjYYhxHZubqjtD89qQFPCAUhQQQCCfo9CUWzS",
  "key6": "3YAgXUToFZv9UbkFgj8NvS7czfHGPiCGsRu1YDJMfoVDbM5Wx6hyLtjCKSLnrqTQ9h543bDPohFEV7irc3bp9iGr",
  "key7": "66uSdbXEnU68zHtCKWvS1GXToGsEQ1aoL88b5y7dKwdWUj3Kt9i3JoiY3uJuATKxQYCq5k3u8RJqg24tTwBiT1Wj",
  "key8": "2DLv6UCBafMMY1V5YfCfc9gt7DUUnPsnH4PVTbfcUP1GNDxQ6raMneoxQt43SSqfU4YuytAAkgsp7LRD6CsZP5NZ",
  "key9": "4bY41ddfLZqz4tdupBQGd9QdiNXzvYdekutaAPCHjSereVqA7sfX7mg4tz28Hmgq2dkXXpR5VZ9NZvTN7J5pZt3w",
  "key10": "TzLaJgfVgFXk28tv5ftmZmfLZsLwmKR6QDrwwM14G8qEuGQsnEnuXHEHa5h4UbQKXpDvX6Ctx8eBt7iydZfFwp8",
  "key11": "foGWzZg7uYAMAozCk2FxKMY5y95tvhv6n1xq7MB2iWEBNimgXLB5ZEnDrA4mLXWoFdgHiowosUVPp7TokNA3hrH",
  "key12": "4pHV5D3SULCJN5RyBvEFZLH9XsXmgXbi3b1DhaW4EVztiGGAaNfjfiBpmfWipESxZoVQ2EgNRX4uLs5a8kE6cKH9",
  "key13": "xVyjWLVS9s5aGbeijQww1XWWDzNVYuj9utC2Z4V3QzuqfcG3jGCJQmEwmfT2Mm1yVTVHtHrpzxzz7LrnRvBuMxn",
  "key14": "Y1ZRAAKwXwPpTxUpRkXCst5Q5tPDFtCByXM3coHCvV31FSgzB9twFzXfpG2LAYH9ZKdXoKeJiu4RkdN6RTW9cL1",
  "key15": "2zTX2PeLDxygwzP2UYywdf99ZKfBt2Y8MP7nGQsAN7QRWQVLVH8mQshWRqDX77ahdXYv5w94vC5CHhy6Ksej8Z4r",
  "key16": "3PToMUtqxN4w8Pj7tpEmBm14EwpPneRy2qviQSpypsgFGyA1Eh3gxYvxwdFbKLKaWahmEV7KKnG1QbHRKfs7ZYnW",
  "key17": "5QwL1M2AQNbzEQ7n124gU5JyqDJJHmhNf9ZcccwmwafjCdJAHkobFaXZwq49NxhKWg9w78wQ8yDLp5ALNVqCKHiw",
  "key18": "2qhYCYJHMZ5N4Sywt2o8JfNhnZdSQGYts339ZWxZzkvVQycKEZXZ8uw61nAQ8GgYcr9d95ryxgwEYqvBfze353PJ",
  "key19": "2m97frKoaFmPSbk2qLGJAYKdVaenbwFGdJo9RH9sn4UMCkrZQ4LptMhxUeyRgo3dEfPezuNZHK6cLL2TwryBEFYi",
  "key20": "2JXiKqizpfEJojSobFbMxpkS7oY1GYZBiJqBU9euMgrMXjFkr3VqCVjZKyzh2YUvJqfnBrsqm63udiUGNcBk6jkq",
  "key21": "4k9qG92RpkDdm1h2t1hd85Dsjdc1pTVVTgbQt8LP4ymunsVuwh7LqoscFU4X5BPdMmHCDc7fTggHoqUALgRFCEgw",
  "key22": "Q3L8PyC2zdf7GRwbkhmxtnJpc8RjxDtH45WiG1KP4PcdB8xqfq1YBwD2x3KDWxpZcMmFzz3p6LiJA7E18j8kbWv",
  "key23": "34VDoFCzLWJiiX6KufbuA3k2sLX1SLmBxyu4wcsKJP2KzG48St6sMvSQXQS8nu3so51avX63UuhSkddA4o8kjEmc",
  "key24": "31VYSGKMXVieG4iMeZ4Zed94ayLfwhceJkFMVuK3QeRART6r3A9PToieYADBFEFn8M8vhBLqWUcfyU75X2oUztDy",
  "key25": "4aEeXw83jLWQSCf6kJno22PgysEmeF7J8kFLBuxwV4M4ACFHwik9pp8fwGfBLDVyM71eP1fDcmSJHbhQgp8Zqbk9",
  "key26": "3jb1isZYWKu3fErGRMWVzkmD5VVmv3eEF4D84hkz7etRyPe9AM9nWGMfHPnZzRAi2q6p4SXTW5CrxU6gWCx5FyEz",
  "key27": "3NzV6Bvj8kgBXz6ofrqHqjVjCPRfCpNivqjfce6gu5gP2fHRwy3Z2gbuafeRy6vYV64iANmQAi6JdhbQW8KAi1De",
  "key28": "3m9v9koY14TBuGEZqkXST9pv7nYNNfyJ4gbdqtY7jYv4fapZN3SwRDKtCjD1scH9JhSceGtDJXJgaRpA8F7jF9VJ",
  "key29": "45HxMfaEGnjzZYTFoefNvc9Uj3FDSTvwRWSzWAzV97BfdKDQHZsBEUJbj8qFujnsFaSahfzPebyrV5xP2R9kTT6U",
  "key30": "5ZmB8YQrkcCum5nRn84eqYXmBXsgmyQGKU77HkdW1525dAu8DD3JZU9KKVVC9ssbKYvP89mAf879QypEsmhqNwH2",
  "key31": "4rer69HhPiE6X9Es19v1B2nm7EUsorp19fuVxS65WCnMFe2756GhxB27xe5nF6QLzCH3N3KT8D7ay83MRcopQDqG",
  "key32": "oZrAtisTvan8g8Joiy7eAC5P2PB5bit4kmYTr9GvozWUvevdWTjEF41SPm68SjZZGi92MmRGjCPqgY9aUxQme9c",
  "key33": "5B7Sc4UqMbcq3YSXYUJpVZdgsyqLGGiakSsAH9nR1xqUwLdMYp28KDDAtmrrptdxs3LuXxzE6cE5hjGdQU3ax5cc",
  "key34": "rKrJpeVSRu9RS454rGHPSkxQLw9v15C3JuNQoacfmGXRbx6QC2foCs32hoZGsMXQQkKFicKbLNuovq5sE8FfrdP",
  "key35": "3nz8DQPZLNTxHceNpEXTNAP5ffiey3y7NA2J2kijeRKuoZJSXoKLSWFqNZNEXmapR8BmPRCyEbnr8ozqhUPUqxJ7",
  "key36": "3Y8mYFSkFFvfu4BvCMU5wKnhnVB2wcAxdyohhzxDXrqzcTHhioAbJCpojgZuajBQ1hRrtg3tyb68QhTbuLDaShEr",
  "key37": "34Pmm855kUnaqfnnMNsHV7SfYN8WQiJKrUJZ1NNQ4URSUoQgxET2ePSZthQsFiydjLXtT9nbfu7UwEiVusXHtVnt",
  "key38": "2Xk9RG6r6GmoLazcozYf8QE8X26pTjKiq2s19zzPoh3XKxjzARXVeu1jDPQQcMjEqhfSHVwNHMyocnBQmHDMneST",
  "key39": "3gG2hLqv4cp2ymoHGarnr8qKJhasugBTu1s9YugMvNx8FuVjonP3oCpZhTLBDK4DmVccfhoszDz99rvQxhfHsNBH",
  "key40": "4pWJqdEraSadVE6ppdJvuF5xbqYiqRysRfK8BxdLxVocDT3KC9EkXfesyfRVEtMYfq1jnAUD9YbV9i2nQ8u9kGAU",
  "key41": "3fpb5zdqwAYyJo899z7PJpp2jj2ay2EvBr6dGkCFnmiaXYhpxPchW3Pc9ncwEonG24HbZGwFyEfbrqoxGRf6E7HB",
  "key42": "B45eym9NANkyh1G6w5FFbSkfPrnYbRknefm4Mvqpn2sByCMgbDh7oEBAmAZDXTybyfMtmxkLjzbLpENkzD9ymJb",
  "key43": "5xHJKG4ZTMfE6yCKGfj4tP8vim64nBn8dRCZVwy4QfLPk3mm43F83sVyDAZYPLndkWRbVmes6CSJKjJz7YwYqTbn",
  "key44": "2iYou99EcE1WpL4jhCzmWvQwNZvS82pS8NssmcfHuQf2SXtXwZv9zPTLTHhNHRZV4eHvzb3EXA6YTxtaKmA2M4Ao",
  "key45": "3XXhjxyG6RZzJYVe9tY6qveamrb6UkEbazL1ws8PLLxrbnjLRT4GBrLKgTVZuUejgPNaK8WHWHtbGrpxX7hXjPAf"
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
