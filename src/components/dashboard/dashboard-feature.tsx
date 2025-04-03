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
    "5wi5oRUnhrnivzA4qzQtCVHxFwCAaYdAMg1RKK7jc1PD8UA2J7TWNti33VhAPJk43y62vRRJUfxTJdM3LKwAqsSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zqZivKPVcDkPNZzuSkvXsN3GFKLmqNuwKy7gKbLbvCUgHypWJ5pcrj7P5Vq8UUmqsHFd6snQiUi1LaaTGFXVzpE",
  "key1": "2bT5mG7x9Zc5JQAM7VY6mekPGXV9zdd6QRNTzrDHJBuidpwDmVaNCYfLUshZrrtd9jtBc12Gj89KwaWY8w4Cs3Qw",
  "key2": "qyGn5RTEpXAkCtkW2zkvpnWjVidRpngtGdcfCHrAcDxbX1iiYm6WJ4VbZtwAkvyyguBaYY4ZPUgnXeDAKcZFiKa",
  "key3": "3EhMw65w3b1CR5s3sRcsDPnrpsSz8iBwrct3iJ6cFymtw5QK4d6VN9DSgDYRstwRZ4kT9xk5M4XHMTycYyeFPPGE",
  "key4": "48b6WdbcZVzMfG28apGpT1ZUBGxz3jBGwPrYX8tKdyiUoVX3j17hcht7kdG2iRJ3hYtNw7c7n8RhU1snNw8H7UM8",
  "key5": "3dLAgLGcMfxa9QuBSgB8jA6enRnzRShNbW1aX7EYaM2tDzdnqT71QJCAM2HNncxWwNtKCKipX7zrvyuUHZoHkyir",
  "key6": "4Qf5KY3XLsZgv1YJr13Nj79YQAWT79Efh1xpXiGTeBiQfNN1V8MrUpcHCGeRtiGSoucNaiUE1PhC2EdKSS43vain",
  "key7": "yFRFf5RXtx87UokDuhQXCnLv9SzNu8XtE1VhBsk7pPemSkBfu3bsr68p2sCJkPsBhqkca9kLqF1hhjhwPtxkoMt",
  "key8": "34frmtG7epSYR2Lc3136ERomSdXz9pE6RVXvKMkQFnvcrVuVtKrovMeb3huTAYY5euSJHDR7ZqSHyhDaCaRABZAR",
  "key9": "3YuoJgPUpVsjx4M5r1NzPJwMC89ckqNobH8ycNWip1NxytKiexdHSi4mmRwmxjtrVCQq5eNnxW7vvKbJBQ1XoaHD",
  "key10": "4zpozuogyhLHw8QBag6dUrXJprCn6EvS2WMNJgp5oVX1evFuSYuHJZzXU9xKoFdNVSVWz4pjVN5ra4rPJBVrztst",
  "key11": "51ZMENbDc8oPWwtf4FywztkvfN9qXqYxsnGgHvGgYFKZNfVsX3znJEvG23kxh27y7bKHKbA2gswqxhTZd3YTVrTZ",
  "key12": "2J7rNY1931GHqfvpgVYHZtHRmD5Gh2AMXMKrfKAkjJb3iVe4xEJgFr5vKgkpwvcdWkt4zyRUB6si9QSPAqu6eiJ9",
  "key13": "3GcScNw5xmHD1LFC3cqdbpFYde4pRrrav7YapSMeysxwmUKz39Uc45aDsRUfRexRDA7tcUu3HNR8jLNHLX6Mb4TV",
  "key14": "4mjktQHEXmZXCYiW6TYLkZoaC6DXCBD8LbvSGKQdrsmGGCBrZ91PgpaeXpg81gzfkDX2ueswRAoy9WkEnXNcrc5i",
  "key15": "3ktGL93gw4gaDtwGAHYpRW6TvWVS6F2W8nuRkRd5HzmmKFGWKBZsfyjRmxxAXjw9Fj528wXzjfk1Ho6g2ESDFdgD",
  "key16": "5c7YYekc6f94tpc4uL39MjrAe7mXosS162PczfGyFBusrVC2jYjpyquf8LK1cfmpRhSE5PnppehSW3LQrMTgPx73",
  "key17": "57MgEQLRPWLBpg3UWqDp7GNNkZj5VirZudqZvTwGvpnWh6JSNnpR5S1hrniBT2BPb6Vt2mMGZq3YFk4diEe5Qsyr",
  "key18": "5LM6oTvk1vRGJPtbfuVzsRtHhhxi7UsLWGDR5WNQuC6AoCktCuPLBnQht8JCRMfZv5YSXuWzcKBAvtKFfDx16R8w",
  "key19": "5MGZNfs8FkL894tFX4RakrkS2ZtGgCwSh4i7xtB7otCSURv2Naah5cLFG4Liw6pnn8Tnxg9HkXnVmRwpD5q7HwdR",
  "key20": "5EBBNz6wSZc8TRWeJSuQEbq57VseTs7etXToqdFYU2T4xtSvKGfGjg6ctTD8d5XiD5wFEwcnQN9Fcu4qtxyiRYq9",
  "key21": "4kWea8NSy5KwdMLzY86AAMyzLw6T9Cjwb9tDh2o1FZxerymrKHhW3wjqhKi3kdQMLZgVjNGnRZeHetbsuzrfXr9t",
  "key22": "3pubZfgPgs1fW7bxt9L9oENjVr8e96wTWSGN85K13LXmGTxFVmUsqd3onE76YzJ9PHJiKuEJ5DCXgiLHyRHriHNE",
  "key23": "3RFJNHenS6XVFQthYpFP941ZVJ2uK6vLkqYvfhe8nNS2WFdP6zW6E2i1PZhVU7fvGdXUP184GAZc7QQGrQ17VsBv",
  "key24": "5srnFxLNtFdyAKTi6pTgeBRaBf9FHVWr43718EUc3VzvkMxuG2KGerct7wmysXdxZrkBvBvdeHakRsL5o9jngg3H",
  "key25": "3Kjc3322LhLZcittLgXnAw3A2JKMHUWpDGcov1Mjo99tq4k6vqgdnvoPWVC5BGiBmEWJsvpE8aYi8waSrP8Y5Wqr",
  "key26": "2x2oNCLje7DYMU21u9L9jgAZiFuPuZoMXq13c8WMh5mMxJUZJxVaYykaM8rdBQb5JrBnr9LBgwME6vyc6kooi19f",
  "key27": "2ZDWVYmPexKHuxvfz4KUZ769RuScyNKubikzre8Nncy1uNrHovsnzrdS26pPnyyHdBPppi4tMfSE6vnf3HYmJDvg",
  "key28": "3s2cpRXEhqYfPUk1TYP6HtdkJjGZ3mRWuRs8dt17Q9rkUtYuamsQdxwayhTvLGK5R2XUa9pnTtAMspLmHfnc89iZ",
  "key29": "58KRy3uBoZRtqEXgygnWQxaG9ghNHk789XC5pUqLD2136EtoBgsa4xvoTyN1fAZaeieCs4KY5NwZiaTs3zCNSS3j",
  "key30": "35SYZPdhzrodvTTzhDJXKcz91uJ8X2R5Yr8mHB8TLXdDtqx4CkcaXrKxH8v2rLqCL63e1xavUoD2pB7y3nUFNKsG",
  "key31": "4YaU5tv2iGMNDStmhSAcPH4bwxej34RQCj3ChJqj63ztycfQMLL7sTDitnxLKQ45hk4cTegdUZz4BkacZuTPsE36",
  "key32": "5E2JEB2yw5KMx66ThDhXPyfpJMvXgQNvmdfcswdjnLgMd1cjUZsBHSFmncbv1qmToMU9b9GmnBask1SXRy8AffYN"
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
