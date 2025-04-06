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
    "cbbroKD1CcoywifJ8Xy4YAsxrZwgv6H6eFZaM2vmAwoWtqfZfipPFNDkR4Nv3qEDMh9qN2WMk89KAAgtuErYFmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c3MzjYgWDpbPemgQXrRJRsDhp81oDpKzwHhtBgR6X6BC5zNumdaC38oFNLbNuMPwTCym87XBEpRW4bz4RZTs9ka",
  "key1": "3goJWmP65cBH7nQcVzzQAk4P2Wjn286jPqQFiQo3iMzapvjqYSNvtg9xS9LAFx1p7H1QpHqB8BqgWUJCqS2QQBLi",
  "key2": "2VgGH24vjV4VpcY6NWRXUsCXH5vnnA16MXxs4iUVQUAGVCQwmgdvxgo4R48bbUnQsezGP16GH1YHpS5KSCpa1GEv",
  "key3": "2G7SrSQVLUwFeVvPiqjX6ZoMvWT88BZQFMQAEAhemYSe2YgRRD3NtuHyTLKtXuWWmn2tey6kkzxjDgHGA8tF7e8Y",
  "key4": "2WwdBpjAnJUL2pxniGWJxPTn5HYFNMGq65fFG9TF1A7Fecvh2q9aBcEH8Ht8DZFSxM44qL1yATDDp8Wm4VRJ5XJB",
  "key5": "5hZf3k4pF59iahiXoMHrnzA5L2i6f26WsNPFypnn5ht6vk8vfMmUvdbSS3VNw7sG5MTxoaHtNuHdF5cQEowjbpUr",
  "key6": "Nuibs6KryNRXe1UM8UDkdFjkjkqKmH78r9yEQN36FkV9eMePW35ykMLTCkAGqnzHL5gFCPMKfvvabZ451z8oPVw",
  "key7": "42MZSXJkNkbcKPKppGbXUZijdgG6ZWJen6f1VuNmoSUsdYr7dV9q5j4YJjswQfHSJtSDkw2V6eWeTHe7T5hXihte",
  "key8": "3JQGiDyCYNFpfZvarncwL4RUgm3djAnXv4kr2qzuWxW8dmXehihZrMxm45xLGfjjUNFADQPZfGdx4KRX91Kcfp6S",
  "key9": "gPKHzEdmKPUpE4DkqWaGmV3SaK3GXY8ubTPeWoQWA9CM9Z86pcKzoQaC1Bi46jPwJsQ4Eq3qU2QPa1M8TrnHFJP",
  "key10": "47TSVXFqLFhNFopHmau9mCmMLCoffbLuGGHTqDsFFxsQy3AX2YPUP2hjJxBiAQqD3P2765mRZoRjApxwJvrrWXXB",
  "key11": "33gma2AfZPaEgeUP55W8VRNDGzutrU6Kw66m6JnuReez9JonTA52XFXVm3XAe6DkjWwsqxPjkPwjYKAssSRvV4jv",
  "key12": "3NyM4M7W9fL9Hn6kTDyax5q5MMKiWJSzhz1ZMGkHoPXmR4RaqmEHsjFK17bFwadd7ubTqrPMvdhQh7MrQaMtGkMf",
  "key13": "ZShSLDw1Zt5Jes5EiUqwjwJBhxLm68SJpwVaAEcuJuTzNkxHnHA1DsBiMZgVogQkHcJscKCqSCFDAhR4ca2PvR7",
  "key14": "4G6d35ScY9SLTr7g4kU5vfXjJQXK5Rww9WUqQTY43gLAqDu6wZwWAsjkeCMgfCq3nMPzb5NkniDEHew56WyoQZ6L",
  "key15": "473BBqdd5pXrEBevsGSLdw85MacHynebfWrvjc1zeUShiNNCzxydV1qubjFbB6wWLyhwZn37pVf8DdDEVyMsA13S",
  "key16": "3KwYZFeJv2JSTFLx6gEwwcvhh3KrjK1rimGvLyhhxsAKAtwtAQuQkVGorx8Pa93YzpBXkd6KMEyWnT4y3wFSSDVn",
  "key17": "sV2KA451oWqJN9unYZnViMT7JdM9eqQVRL1ELGGuErfHYGtBjU89dFzyGiwgbka95uyPUHW1Jh8prKUW8xqKJQU",
  "key18": "yZreoxKa8voV93fvs4sbVG5PugFpKDe9yHWbSPCYLqmEEGZYwDpXtUvZdbDmbUqMhbm6Ck6QQmpKuEwvSwXBw1P",
  "key19": "25zyPJYsHQieMRNYGTf1oVbXFSvUxKUHoTBQ2VH99D1u5x5mtLp9dQAPewjci5avmsBFryKe46bYjtv5fL3AurbK",
  "key20": "65DWPAm5hHWRukujNsA2QceJoBzd9wyEwyqyM3WwERRY4CPrBZ5ZKceL1e3wNZWGqHynqahuiYq1P6QfPtEpsLG7",
  "key21": "5XVEVDx66okxBgGR7UUw1VSdkrB8CDk6DQkCJBQkkhhwYtW4yEJN4cHh45zwCU2smpHCnSXcZ13STxsrWUHXwUhm",
  "key22": "3PoPT11FnoJHgh4dEEf3iqAYxThpuSwks6ayVd4QBfzu8MbvAMoU15bJAKZyg8z5dQ73NCFqhoNCuiBdQo5HHz79",
  "key23": "mht6agYseA5Jg3zSyDLQsQkufXE2EuJEtnmW54S1Pm9sYHjCzttNGRUbtgSWw2KRfnDqna26sWD6PFzc2Un2Arn",
  "key24": "3B2CLpuhov3GtURz8ZcQKYFpxbaUGiSwBbjrA4mqQ15AsUMtRxETRFTK7LBLf99RnSoVZLZevcJrsV7B1iH2fqpf",
  "key25": "2vCS9d9nuFVVzXGL6MMCS52Z4NRUQSSM2c1A2suAECirvPWxqxAH393ePtsUWEcL7iVbrUZXSwsAie37KnFzsXCt",
  "key26": "4GJx9hupdByyswWuFBdeAwc94QsVoD8ZQdKr7J4q9PDp2uq2UNB5ogxZVg8PGJa5pjWQTVsbhQ12aoBtX51JbozD",
  "key27": "4YPugPdPpRFjingudbshD4TUNfYzmtwJRznAX76zRrv3YM5Vi9rY7BTd5etGAQF3namnMYXvgy2dv8tHzFHiZLRN",
  "key28": "2aQLw1yQ7SFNWuBn8Af4nJYxzhXxWa9gPXy5q8drphmvrGkcVA81FNyW8ma6XyoFo44j3HcEaCx87njDfWpTYvdh",
  "key29": "QdTzu8f7aTpYvhVnD8YUcafM9UTPW9ikctuMTJ37zc7BQPcdRvS7TddXAKC7kwX81JW6SPKEQJQdbWh6B42nRYQ",
  "key30": "3fuXSb2H7AmFnN9JmXUYUrCgfMJCdsXFLQ8XWo7ykT6SqLqGBYE9WDXheZwoQ3MTXioFmQtPw4rH2TGvmkcNxa3w",
  "key31": "g9b1tZBbJeqdZBHD3DxRkidCCjpy7c6j4KMg3M3gWwuHFBf1tz26shCPcPJ1ozAEGcDxyk53YwN4xJ5RQGHv3DA",
  "key32": "4Bf5HQpvsS7R5nZHiW7eCYoWkSq1GnSj8idcmbbSe7Wouj1zP6hA2PnaVRinkGq26FYJFpXA19gsJQ3GbEk9iika",
  "key33": "4GLpAcceNPa66QZEkoThmKwVeYzTPnKRRJbMAY5ZUEf9PnLozVCDHZaZLf94uT8x9fw3wHrFj4u3qn6bbgznKDuU",
  "key34": "3ZLhxNxjPJFEi3ffALQjxBQp6ciEQhDHEJYA7TKki5JBxvgEXs215GfihPhAbJnvTTU4sxjuz2w95VpsiNKG4i2F",
  "key35": "4XHbY49t6MzmdabVdzJPKzRR4CaWiBEXyhcKL9fjj5UktWVN1H9xpfcLnZCTJwsLsZwXJPrt2To2BR2PRj4zFQX6",
  "key36": "38MbqY3XCcSa8oWZAM2vn1yjLSapX4Xdwiq4wRSryLAy8jDR2aPfCDhJ4gUyRRdLUdHrQqr83iUV1uZhDmB4wNr5",
  "key37": "2dsMso5cLQGsaSYHrfWff6zvabmn1aHMwo5ycevNFozHYMEEnAnWjPJZ9UHkuXvgq8QSrJ5WFxi9uYYcVa7A9c9G",
  "key38": "4d11gvnPdiu84qUgSb3XQCgBmYka2FWgJFMh1YjqJmFsasqhRENjpbgtUZVSb28NUPpXs89QtbDVxoMF85r7Ri5r",
  "key39": "5FU6u93K5VLQkAhQdWJvs9WShkE4ajC1EieUhyq3MNKzDxhqCo7Qm6HNiryzFrbDAhRjZ6h6CJ5S1twe9piWFUST",
  "key40": "5ioEMNZW6Uqs9YB3SiMeEpNEFbpvomQzALGm5GG2b1fmrFk53D9ULVcrGd1Sg9CAtjWUpeHMVo8FXvhheZqXD36h",
  "key41": "MBeWvXEfApgJ12bgavgza6fxkJerhyD9DYjRfekHiun8o5VZhUvXg5ZZ8VdwTNybYLcrG5hjSWjq3dN2EshNviu",
  "key42": "HDSWELSqNkK19Gy4Ctziept585M1KMpU5KBMsRkvarXcu6rzgPYdTwRg1X64HskuBopt41W5TyNDJ671upzUUGC",
  "key43": "4inZYeHNT52f8CwtC3jEnoAbRnSeFBpHUa8x5K4tg6K1U87i7KL3gB7koTidjSxT16QTouUhis9iwEzCA8uCFBzN"
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
