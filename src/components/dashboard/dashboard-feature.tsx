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
    "66MBfwG8T9h3xA63N7w6KsED2sEAQdDxkD3y72TPvc6avc3igrzQtywbEJ8KfYVjy3ZoA2EFT3KU4jvBLnYrvPko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FFP2bvpDZZh3MmBomuiLAo8hCDoDrmTqgsF4hPRHWhj2eReUJdBpdquTmzVKY8CjTkzfQF6QJFV91TjVZJhTaoD",
  "key1": "2WbQEzVQGHRC2MPoojJVDQXCRQksAqxdeMd4sbUE4amaCeaMLCCYJZafdhbAxH4QBkS3Mmo7HYpMqmpN31fAbpQL",
  "key2": "4iA8xvTXWZyXmUsGL28cgiDuBnh37eRCFsaiEARYkjGvZvrvVUPKMdoT9R5XZNNWWsVtxqFHMJ9xs5mEx5VRcHrc",
  "key3": "RD9ecBEr39sLizHqxDoDSB9hnzHY2engj7MoUrADiGDDpqY1sieDjSa5qrMSwGSCW3JKeihQkXWGpZA4fDBe131",
  "key4": "33WE8Lk24gD6B8mTLHUXcUBJqJXoCeeTrSha9ftqoYAUL2kBvEKpfd5rBi9PEYZb8kAyik74pLjCj1mtttC2dutk",
  "key5": "2o6MoFR3T56AJssH4o2LaabcszEQBMBDYJjoZd5hY54eFkD2fwYU362VjyYHSxrarJff65hLmrgDJcTT1L1ZebxB",
  "key6": "5hFFack7T2RqdUwg8iePUSEotMCsEW7GuvgCoHRAZ7rkRgknK1o9EJWi3hdMuAoWV7So7rg2TVLjMcwJCeMNTUE4",
  "key7": "2APHzNb946cPvZBfQs1Hp3bzhARcudFuZiPFjcqWHNsoPdBGE359447ccx19ztcvDD2kz1LoiaZEX7zmucwhCNVP",
  "key8": "2MxxV2yHWMkm76mMoH5jnbQy8fpVGvCWKXYoU6vA8d12eMWhjVDs6bwRaQ9LRtWGc6CAGKHEbW5mkZKWhMqn88YY",
  "key9": "3RXrPXPLqhqQ2YHcXTR87jRqn2vbmeebDVVE59xGvsqigRMgmgCFVGbiGS2wpmioUzFXucTU3KqWqgUTEBU7bd7v",
  "key10": "3sTcyBpUR5SU8XweQN3DZikx33fSXcHtsPz1yFrhPe6ckbjYv8ipxf9ZzgQkSFfYPip423wyiJqQ3tQ5MUB5vZJy",
  "key11": "4iT4yqs8ADAmU8zKwr6p844bkH6c8kfzMDR4rtB3DcTy99uwxq7Fno2iyjJ5SqYMnHsjV2AXJGsyMfXk3or1nKSJ",
  "key12": "4JG21bs1ckchh2yjZM5wxG5uaAgLvoJM5JJAgXdJpHQtYxULChQekhWQx9Wx4iheZwPRkW8XfV9SXBEqa2iuC2mG",
  "key13": "5mqg1SAdXS8rjw8WWw9n1q21jvPbQMTX7qv3DQEeTCMXQtXk1Xzv88rifKef452kYZmTtJsdxH48hhKr4TaCFNj",
  "key14": "cyE5wLVAA9XasteQoFcd4NMEzcEPjx3hsx1vJp2AEUQKHyy4UMx7v25H4dY8oa1g62DTrDNEHkdYr4JG3EiR84U",
  "key15": "ZS2cYYKtGiKut72UAspg4Zt9YtNV9UKFswUur29VJBVevwiajaYkdb96J8a1ePx76eH1Swku5MdftcQ64Pacaos",
  "key16": "inFXqoMitUWk7Rm1uDXX5qvKzDLXNDiriusrtkkAHdcy9jgJS66TWA4xVij1yXiNhSj7TwKNGjkZmyqSNV71ErY",
  "key17": "5yWDoEt2qmCeW2qv9wmPh3vuMnGKaZsutr6oZ467DKcXkxaLXJJQ6SrWzwzBkzpet1i9451sdXzm7KkZaNeWhPED",
  "key18": "DoqGfHP5t2SZqznnXGDH5e2jKMBmiYBa72XyFoxgZVhJhyiCqk5jiqWnT7g5tnSCKeq5TtHtE6X6SxGuRBgN8E6",
  "key19": "5E43UZtghq4QHEQyBmgbv1JkDganyxUprk341YyV1EphLtnyzLxDe7qiP5PsmV2WqFd6ffQMR42DjkT6cAXfwsdi",
  "key20": "5sqVVm6EjAWNqqHYyp5ckApX6yiRKkWJdXwBx4AkqQyhRNJiiGKnCLoq7qSZJbSHHp1jsG2N89SbcnqQruFGkeXg",
  "key21": "3K74esVY1twyXciUwqPRjrPCikmtfE2Et6bwBZScgBUHVcTSbRAbrL197oo1nGXyKCbsL4kA5CLrhGB5mAj4D8n7",
  "key22": "3mug9rxBGUqwCEE6TQ9828xpQcEpfFLd72dQZNQyf3VCdrs57Wv9wAExdn2aL7LKxEVVg47mXeerCaWNQ1xprCN1",
  "key23": "5UHKxZfgemWCScUt9Mq59cSsLZVWzsGDJ99yUogSC4okY5qskYq1ou13mPJNVhg64RnnEF8qJTZM4AgFV3jsiXmV",
  "key24": "iLwDc8GHD5rY8xW89iYomk9vBhZarNjFSpMkrvdrfjDkFZGgXbVsvnXhSQp12Z1Bdb8WvKZUDe2wEiCjyMXiJWK",
  "key25": "3dEKvazgYST85qfNCnEGXc4422cmchjrPHLnL5Cr3PsMbxbyziSYM3sRggfLSyUSC1F7ABMuyNQtufAB2m8e7n3V",
  "key26": "5B1gjvBM4xuCHVr29UZg6JvSiiaeFF1SfVZRGxzaqRDAJchrBuRZPwg5WsSjpXw6sHb4VATYY9Y44DyWSpNLd6Kd",
  "key27": "3VTY1PynamH6EJ4HYfz9K2JK4r6yp7ozoeUWQ8FnUQMAp21LHM8VVQFQ1y4wDk6timUbyH6fZ9dXmmWLs1gjgeHT",
  "key28": "5BxMMenUzzM1qjRHeE6mdKy6dbbzTZgrAE2mzc9jLrZaAnKU6PeQdmcVKMeexDQLbE5jK2TjBJPGUG6pXRC54sFJ",
  "key29": "5ngiMBTVUUqXKt1DxvwpPhQy1U7HwHuAKpxY3XZzZaqQyWj5LBzxwrfUnwkG86LBo1UR5n5Xs2XtyBm6W7bAy7oA",
  "key30": "uhxR3uGsPeC2Xo3YQdHSRCrXVNudz8ZzdvAkpwKuCuugQSuid3Up6eZ8Ft7ALdQvn2JqcFnuFZrrLnPrewkwNNV",
  "key31": "2upwuXSGDhvGpwSPN6sCNSUhJNo2ieCKDQAv2QkktnqQYTUTN9HDS6hTCYa2Dk2ERXaLSYhU8N9ByV6ih61Md1w5",
  "key32": "wbVh9dQ8ZbXL8MkoVxjuGKoYF6hp16du7FDEZ62EkuRiQH8YmohwoD1bUBJu2wJgKC4fUrJfymaztzEaLLBrQDV",
  "key33": "53oPPQ9tB2zDbRcWBCzuD6QLLU1mgftPSP4mwqYibnY4NtVcLh2p7PM8jqCVpcnv7eebaLud6wJiM441sKsyLR9R",
  "key34": "xeEgkGRiXNv3z5WRAradNLxatoZuSQMFu6TXJxWfmCGd4eBrQu1MfYfvt48XDe1s5RrarR2hu5LbYL3f3Dra9sr",
  "key35": "3QsGu6kNVzyiHexV9rJmneiJr6YHCF9AiRam1Hp8GobMfhX2CoFL1QrqUTD3V6qCMQstt6fVppt1g9CCmcaqXFos",
  "key36": "YQWk1jmwMTjDVLgZu1WaqCuYAA8xF6sDRninNqc2mACfykYp82gajaBFJ8GooMFVSwqsjyGXdWmPWiz1bRvQH7D",
  "key37": "2gAcWapDiCSFM2uug34F4vXzbEeZMtbRJ6Anv5ZwnUSRdKpjUqegqWiDSp94GmZsEdvyLcJE9E62mHCb9ZFUvdkS"
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
