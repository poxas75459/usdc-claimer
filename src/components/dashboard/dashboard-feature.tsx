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
    "2xX4eiqBrhizLB7kvECR3tZuxeZ9PdvAGTEJo6bSU11RErGU6Kmg1uRKz1Zxi1USfxnwE7CWfepWUbuRmYN6duFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "812edrUsnQbV1shTCSNS1g3UAF26dtnhVMK4HE8xHcSkSSUMDdPGeTG2YkaBbmZZsuwWKeYPA8nHo9MCi4uzucA",
  "key1": "26gRrYLQ1ZPV6j62ZN1Hjr6Ep73dg3vKhH7nZYb6yK3CM9Uv9kk63B3UDdEnnknjsSFucx7mT2uJJxfgGsSVRn3A",
  "key2": "4KGFPuHkze62cifWRiaoydtKrrCgbMZtwrjmHbBKTp2dEkZnmZmKNNFpcGJXwAnDjSivJ6pxNMb7CT4qPdY1JEAX",
  "key3": "3X7w2yLtSZPaCSnNFn21KfoRYYNThBvafUjvg6hoE7iLibYQT1Vv9o7zQ6dRDV3S9gSgdPe8kiBh9eTV7TY8DB8k",
  "key4": "4KVJt8qDaDWYn4Tcst8H2WvKG3bhPxw1sArx3KSuZ1eW2hZ8eKwZVvS95A7N7JSYi6cy9cVqyMWGcYydbxjt7shM",
  "key5": "5zFuPKngSGbxYgA3zuphRhijAvAuycmPpdeyuts9UMf4gQvX4m4K9ZTjScNh3XEHkK5rSyG8Dz9xGwhTi66EnYuh",
  "key6": "2xxuzrqMEY3z5hrP6Eyu4xoKiPH3Jss9acPJvD4Hh4Q9N9CE5XTPa2ZBcoT3sngeE7rWicPUBxdoS3ac2wKBsQd3",
  "key7": "46oVd6NyHUbDJ56W4YzT64kMMU3YqegGi4YzQquVF3Mkc6X2pUULGu3GBrQW1VwG44avjxKBY43Gc9cEDeYVMceS",
  "key8": "KbxJJjiXc4LQ8HQyGPw5rSLx1AkozCdJAjH3c1bZvoNtN4cpQYcGfYz8wEgq5bQWi4zUSCGKqtA2x7sBAARvUW7",
  "key9": "5iAGbGe7yWmduEs4SW6a5KxLjK4VVABYxC6oAYgH4r95uwtL9N1TEyzYykzqV1zPD3RRLGiwmKUdca2CcZRaxVTi",
  "key10": "4g6Q1WFn59sf3UZ691JjxbAihyZLXiopv5vKHEBJUhbShruStkZDd3HhBgi8rvPeaBXJY7KjAuSqEb6pLvGSteb7",
  "key11": "2XZr7RnRBh2ChMxa9kFRqmBALn3MJTYYicvufk8oAxNQPKSbamxdsiqS2WB1m537TtAJXVV9EfeGCU6qCnbgRE3a",
  "key12": "MrWTAi1dXNhS1wB1ScEgHSTNPdij39Kk5uQ8J92CnoKggZB7VrcGHBaAqiir66pfVVgzar44uV5SzxkgiwwqNF1",
  "key13": "5DFTvKiHb8TAUhfccgLayM96M3EF2u1CzDrydTPp85qEj1FYRvwuvnenUvEsSvJznzG4HNSxGqUEDmjxUEAiChRb",
  "key14": "2pojRKD8NgCgA1RW4sQ4T7dtQ9uT62jPtCkCnjj2WPCfv9wMXwJ7q7QzJHLb1FZdhhmxXr3ebEnAVmhQ3abXxGzv",
  "key15": "27NmsVvC8jVtQzTKKpDgFXm2dz8aGT7EjxhieLLrB83h15pFMTZFXad6bBNUBFavSuwJiXM8YQug9iromUgpNxtE",
  "key16": "QznqbCTiEzkcFQNGxvygbrhMNH4Fpjriii9LTtxajDZEh5NikHh6vSipq4kmbuiQJj8JdhJkcMy4xgKFZbqhzS4",
  "key17": "4gDiKH8HN3Yf8qRBWC967qSPmU571cMLVnN2RW6GCY5uJK44YqghmA67qemHmX2R8wLCGF5oEMTg2hEsDUKQqYa1",
  "key18": "7pGmHxCFAE2Q8eM3mcTcUSzaBK5QLbsHFf2rXq3SZruZ5Xq2WVxqKEmxDi2voK4SZnvknrsQVKnr6tgmRtZtHMj",
  "key19": "Yg1mcYf6iYveQYbK5vdeu3xY1Qvcmttti5pKVT6GiRQHiF5PDhpqSc561Zmi7Z31PWLBfRtozdXCNzNLwzsqB3t",
  "key20": "5Ab54VKuCgrT6eyxgihgTFw3s7L9yumRd2bQSA2JAsxJoXZ8iJPFJjYBGnaoL9jiNzt9GNkde13dYwobdYLYRWty",
  "key21": "6Uatu6RxdqbVBTfwEKnajwiiR9GWki7zC3tvXpXfTB5ZD4k6eFuxDQxzv6mna98CLyxYPKHZSwcGFxspyD7DGUS",
  "key22": "344BMWSga3daSXwDfnvsh8htfc6BAeuD2aza8YWgeB52NCn8qjavFhQUZvi2Pe53da1Poatzs1sMBMDmab2EcNw7",
  "key23": "5gpZEi1GjUQhRZF8LfKE1ec4TzpDpumnTjJjYin2TeyABL4TWStzPB3Zjz83FevGFJZEegeBXceFg5gqCdJxvhpN",
  "key24": "4JvenqA3CZ1ppQFns6rohVfG9VTSMkydPkfP4KF3fifCANKYiw1zKxNRYA5tB1CzuoPg9k96trzPDHg2XWTuzQaE",
  "key25": "3qf8fcHuvLpgf7fHjGhBrUpd5rPA14UKAZhnAi7PsxXPusJg3cPyMCGVKrSS6qCDuwg8FoWFBZq7tWkGJmSEgFSH",
  "key26": "3qZKGeGwQSFg4pocK3QncNvMtZrdyLrqmcy5Tq4ej6MkvZSK8xLTBLiZ1Hny2wui6mCbuGamXNtxZw7oMvzndxCy",
  "key27": "2yjfGyrrfNwNTkewGsckv18UmpuFQ8Kz2zhx5CmLxifYjY5DJgCvh4TaGEJDc6bwHjiaUxX4Wxw1TwSyX9ffS8Y7",
  "key28": "4BZS2NiK8QB7N8ng5QaKPPWhVJhLE61WNsv9PrfgEZnT4K7c3MazrmsdCoyXx2UVdzTZtEFxFBhqWP2hC4vYBpW6",
  "key29": "qG3KHPjcXZQP6mp85ZBzqRf5k8vFem5YmYkw5jkbZ8PTPuCEk6xVRADciS6fQYG95katzWc6KqdGSSLKzNZLXeG",
  "key30": "M7Qku72tmSfs6JqudfjaghctLNhm1Ek6P97rEmRjKoW58mZmdnixpgK9jNG29pKnnpAUn8kat4q1UxZsJPu2GeU",
  "key31": "4hwMH9VHc9i8HDUJ36fMNNFzTfMTmEH8sR7ZrMvxMK9voGNRhYzn55ufCzp23Jqjhn3e5n9Wc8CQpyz2QU9BBUti",
  "key32": "gS5bR8rA7zC79xAr7BvzNivjeX2gP5ahwHVyddE1qFrFMXAwDs879cuuAknu43UugFcUsBgidLrsbXfVMrWR2Qh",
  "key33": "xptw3KGNJpXSmuQpN91nTGp9bBMc8HCokuzuo9fTM8WoN1Ye52NeFLV2gdmm2ceTfgTkqAcWyReTCirpEFFdbsy",
  "key34": "XkbVWugeJZBnQKuWDwGrNUJ8TqpidjDsS4zYrLoqDVduBPmYG4M1Tb7UG2NPrxuBBQRneYZt8vMD5B3nRhu6yFq",
  "key35": "5ej6NGjH5Aqg7HuqFzVkyw24Kotu83czsg88pEQAat7EEJg6j18xA8rr8QKebN2ot1N1W6gTPeJ8xNW4EuH2SoDk",
  "key36": "3ak5cqSWhzq4P4LaGTgcm1RfgfV1HFs2aH6C6nDuXY2sDyivYcBJtgA3gFq4DdM4ZpyWNFjBdbqazxMqnCWLSye1",
  "key37": "3TqQQgKfQQLGKYoSPftDZnEdCLuxoeRCsmgKuQEPGziFKKpobMMFeKXXUgAvnFQTsEUG68pk2yqBo6YAbFkAXzaj",
  "key38": "5X2fJ8ivqkQ4YZ6ePZJAGAcbQgk2cxPMM4bN1zEfYMTdXsvY8YxXR53t9sxfYuSUUHtQxTGCsfypHBFamu6sx1aW",
  "key39": "3PEcEXZF3hdAtkMydUceM4ax1JhHrNghEggJKjUDX8SQUBJVFMSmm2ViL9pPecCbLNCnDW9v3E6a5UPHstBK9VAC",
  "key40": "fXpaZXSC7gdKSmVKENoapD5XG5rxvCGaeYzbm9iqvL6rpmYGV9XU3GtboupiDbYBwg7ykgcRTPBVbzdwFCcDbZm",
  "key41": "cGPuXH7XBg3HY89hvjzf6QQbaWWrqVVxndY2pzX31ZQ7uNMDeAZ5NJxG36V8AAzrEDhBG4Ft8bpzxdGZvYcJGA7",
  "key42": "29hsLPkgKMisQpcD3XUDWE24xLJYSB3f4tGwc76QL4q3PttPCQbR5gfYMycwFNGK58JQBBJV3Z4sbdHgGLFtVNWH",
  "key43": "3MAjs4aFARHqstiuNU5KfsxXRuBQek1Uch2fdYPNDwEScLLYKwWarSQUfNXL1KhER3juy4W9zaG7Fs5sPTaqLkr1",
  "key44": "E1zpyeQEG4FWrEzZcQ3gA47HdoczDGot4Fc2Qra93hQJQeV5STGRMEuomtnj8eHoaegfReYEKzLcoP8FLDqLr9i",
  "key45": "2Wmpn9KpJ2CNgncJvKacPQGnU7gukMybZvr4QzKR4zQt3n7kpYBcaFyRNJX2QwaffywVNMQxNCxWJwRRKpQjug6T"
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
