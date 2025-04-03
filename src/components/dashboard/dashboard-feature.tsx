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
    "QKDmUTveTUtnZLJfqysbpvfLnPXb34TcfZSSkSKodg7n1CSe2s1Kk37W74EkEfWZUry8UeDYBFndLPWndW98s2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2564dD4xizoabPT4Xn3XJYkjxxVouvD8xhCsbzcZQgBeeJgg7UZLXgTZytUTePZJuXzmvGgC2sbTAZUhGShZpHLw",
  "key1": "ngLr9rMTCi6joYyqZQoCT4Y2Lnfdnj88s1oxbyyzqe28whLPTnxCQdjdQU9NjCsQNE63smyxuTn45BMWLTygdrN",
  "key2": "5ZzESKHSrECyegwjZQheWby226UVabNnK9sfhJPNN9VkcwuFrASMEJ13gdWezYB35TcbAuJun5MyQJvHTciRG13Y",
  "key3": "3VAmjyQAHaVrUPPajcMuXXbAcZf11jf5DzkVZX8s5s24fAHbsRVxJf6qtQpooeQWvj8TPHGpteMbGBQCrXTNHrHu",
  "key4": "3Fs2Tnfk3wd8EzAAAgFcMN34gKa8DDcnTLujZTPmextAWze1McyizDdVpywxeVghnaLRzPXgdjWq4REFmQjzWZMa",
  "key5": "UESq3f5eEQUA8P8RhCFrafwuPv9RUV7jxk3DtAYxfjyUzzzVrB2YgvKCxAVDyYmAYE1JvMQqyUXiyy8bi34j38X",
  "key6": "kquk717uWH97qPFSNgn7QpVT1S92kVLtyys46fsvZRGF5iWnhbXpH9aEQhVMEq2jrULYhu93Qv51wjEeypSthAi",
  "key7": "2DwsTEiauyZHEUWPhf2YB8AH5GQKZscaeJiqaNMLjrMcxQAcWbGoXLbcaarfh1JUHr2vNE2ov6kTh5z3Ned4gczW",
  "key8": "4r2ysVqnxiUhFYUzU5g12fxJYvsfn2qMRnJTRqspsTySFG7L46FNkHme7UUmyxnfaLRBY1T7LrQ3UdGYChrkUE5f",
  "key9": "QswuuUzeELS45h1PDESJoKYAgAwX7KiEcf776iMwaQCyaG7hnT17HXr89ob8FodQq7cV9WjB8fTi1UaWvwHCvZu",
  "key10": "3rrgy7pQyhvEdHMEsDBACguyu9P2x6mD5Nvy1UmgNbmAr8mPXNVNfT9RPutzFP1m8NZjcb1GmmtJjUgo2LwgV787",
  "key11": "JV5Baxqe1r8Dn5K4xbga3WAmhgUujHvQBsRr8uXjmYf3tV5mEMAvd5KCkdaTeJtKpWxB2uKeuLMZwRTWu1Lidtv",
  "key12": "5s5ctfE9wRHEd9jSoHW8KBhyC52E7AWZLrAR4jqePgcUNExoB5M9nTY1PsRRFfcFjpJkASAvhbPxs7UUGWvgT3Xw",
  "key13": "TApN1ndKjw8Po8P2zRefdFrUvSUMhUez2kZBfnK3t8y9a9dsZei97D79f2kbcQHPTZ72ihRzM3m5u5sngGD5nfY",
  "key14": "DBYLRZcos2SuhgqYooxrFhFHu75tRx4agvKAZ3YSjy8DCzxBsKN5fj2b9guAyXfqECqhB4vGfgrW3LUd4pj5MHp",
  "key15": "5N6sLMSfzR2ToqgcLnTnFLdfu9WHnj3syDTXMtyjk5epKXL3x91Gk2c5DuWk4gqCmMDDtw26JHhLAckqbDJx4NAu",
  "key16": "2MKLFWW4ukzwwZuvEwnGU7ijF7aT7Wu26j7jMjoEpSNo8cLuKEDRxgch8qUgoX2sBe3k1FWHJrCvQyQzmmjXjCqM",
  "key17": "dgzvZySWw3zKofqg88MS2zxfgcgJKyyUXLMn2i9ZNAbzguyY9Jt7GYPmRTPQX39Un2cyaFzwWEAmx7TibCCu25h",
  "key18": "5v4wpsadKR9k8MxSnGppwCYNDsZLK7t5aR6DTwpWLKWpYkzUdhMR9biHvHJMMyhmwS61uEHxFz6ykr9MfeHe9Nx3",
  "key19": "4HvZxahU1BXybaLDHuQz1HDLqY56QsykJEWMXjEYBnFmDrhBYSHJyu7BWW1h58p99ZcWp8XbAqh2yV1ySbLas6mQ",
  "key20": "3ywRHxEukGwRppaNJYEHsz6ceqwg8qBdczQixjRDc5u6rnkkDPsaAtfvw4GG1xAmwTUPKXibFjEPEriBK5R9hb4w",
  "key21": "22zNewHVP7yaNbRk7Uj4kBroeHShHWXiYUCKsojUu8N4yZC1FfDF98SmZudptKYcgeXACZwokvAKqyvYTobai3DE",
  "key22": "3rej4PygE8HKKmTT5Bm1TbLQ1E6fGogEUK7Gj11CLFCcuUHkGoMMDMnypSnQntMpuLxvG4jvv4iAGuEq4h3pmtKs",
  "key23": "9qTmNtrYQh4mjUtKHSnU7P7T22zicHxJ6MSp9A5yYLEzw9XM8eH1ejeKY7TWa2e2tePgvLkniQxGEndXN48KBZy",
  "key24": "248Uvq9bbaEQYFpb9hvZJtE8BftE3EHPtmJx75h6RGvcCunZqqg5E4pqVHKRnbnaaJsUg5QXWkfhJjKZusgigx8K",
  "key25": "62HTSUcRkjZ3vTy9CjXz3e2xTt6MavVWhcxmQG2JKfcsdAWyiDqn8WKAeqzCht7ArAW8YET484wDYo5pwCp2oPam",
  "key26": "R9PpaSMhwMdKJDpVFmF8RmN9wqDpSktqckqhUQRpgs2ZAsrSQ3jFKUDL6ih27qhjFffz3zS2kcWXD3JJUFzGbpw",
  "key27": "Y558JtMdJptRFYRTD5CqTmbt6mCbzF8VjTu5HuDYHXjdwpKx83paXkgDf5yHHsq4T6y5iRVPppsHqHEz7TRCwR1",
  "key28": "4cdoywsmPfaexQhkvczMEq4CW6Vj1AXiKmhQo9XrP9iY18p2DBpypLCvYe6MDL8hotkr9YNrtaLsSotEQrf6FPqf",
  "key29": "2GfSkPkEwXETVc8AtzraeFo1ytprMVxFerBfi3fsVp9fF31JeEXXABtCxUNe7UoubSvPWq7fU1hZdUBB9TwjQreG",
  "key30": "5o2w6sovuxUcwmabUn46ZRb1g9Vf2ppgGSJuNzT3hRgue9WGa1mBwqQ4Age4hjFJKiByiETfho4ocMzc1U9Jj9SH",
  "key31": "4fFd7jGwD7a7aTmuzhPyH5DEkbPccXgUJAjQSG6pDM7T6FA7yR1MH1M5PFEavYehLMpTf29qEmgBLRE5wFkkUgUT",
  "key32": "2e2m43VJWdxai3hg7ZEQdV2bzmY16aVzQjYTjyrNu5cCqEDUj4ogrYxMviJfarDXmdcgjggC3MNS2qGLReH9Kmgg",
  "key33": "474oTVZ6kYxdWLqhsL3Pccu3WKqYYiATkhGkhRy2H7NeXuLEoXtUVpTA6C2VYfvyY5ideDbnvD7HFAfU5CsuyFcx",
  "key34": "4zGquDxz4C3Dx5Rprr88DU3TdpeudVKB1DZtubHZa6H66vsTrwJnAnXEGoVp67wXAGbrTTKSixscavjMzUwBdeFq",
  "key35": "5EjQZZpWq2GFNzGtRXooXmeLSRoc18w6SMojPio3x3F3syqCBeoUHzQ4avdCgM6TLDPgAXPs1h4LTdKgzCaYMGqL",
  "key36": "2rvf45pGxkwbkJ68YQeN8gVCnUGhRtUgKKouhXDMyEY67yEuAUajoBhV4Y3G17QTWgiZ7ayurTj5wkDZm1xBH6WU",
  "key37": "64npDuv2ahnfnfaqjFuhXpkjegRcWfHCpfRpcVbARu5gyzgraWDuoksZisFpXJfxdmsSdpNguEB12ynGmp8uzHRs",
  "key38": "5ykNTxFot6CRxNL1CBCRT9GiPR92x1k4zBFwbKu3idJ8TUBZN9pnse5rh95k3AqNEnc2sQvSs3xmU9oXNiA6Y6aM",
  "key39": "u5jDy3fGuBEkZ9gHmC35r3B3HViRuUjUiv31edVoyeK2QN8oEumzjRJN2t3gLkUetUJfgdB7DHBxP1eaCwgnkG5",
  "key40": "2LX7R7STPDgk8LZ2vEPRt7TPEAMP6Jm81fSRsvUQPjKEoJ5uZRA8cG2EKvx7h7oZ5aeWYUfyLaLcNUUpGAD3BDQj"
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
