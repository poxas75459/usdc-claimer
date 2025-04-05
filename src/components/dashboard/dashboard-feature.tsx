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
    "4E2m8HgNRJmQFN8VKfJ45xGa5WEhr1dpF3nDRrrmgyPkgfEdNbGV3JBunwU8ATLBaaCTqGG6UW9niHuyiuQCzkcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UuiBTBeAHVaXetWwdVdpYAuZkPYiY7iuKyQGm97JZ6kPHecQ8Pn39oupVTfD1TnpfhsUohGpk1fjzTwaXFHNJ18",
  "key1": "4H6kwijpcZM7zyJgTCFpZsyAmQZNGHMQZ8DovrqwLfokhdJn5FNwJNudCAdnpUJrnwTLS8txHA1WUmCtWqxRtAYX",
  "key2": "3cGVCM3hxgMhzVkMihbKni4DHETkkJ5XApFFDbtCNuxitGdai1y3P6TLcdFeyhCCDeB86qjSVK5KYFK5LSLAUcKQ",
  "key3": "3m672LJvpRvtGrSySgLkKoAtFVpq8CdznKDQSMzmZaSWgFzmr4Y5diLgXNZ8GQXH4rrVaxvs3fFoQFVNnGccnjnE",
  "key4": "5mk3pH4pMum1VCdpYcZdkzovsg3DBsq7n3v23JYZ3sPix6MgtA19Xp3qPo1RGMZWJcDYH7nsavEefuFtxCggqqFB",
  "key5": "4tfJrpECGfpH3Mqqi2zdQh2raPN8sqwf3GNVk2b5EzfS7b9LUJedyG9oqDADhQmtEuTYGn4X1WksberJKa7V3AEX",
  "key6": "5k6aY4PPADCarg5RyNQgfosb6vpaWmWQocLnGS7igEUvxbcy7RR3fRCx9jzFEt8fY459ohZRP4Fsyb8S3MqzttGX",
  "key7": "5wL8oyST9fxAJuJQ562uQYER2cg6vqCNXsYzkBUa8nK8ukEer8jkRndRA1ZDo3yZ8iRC54qhZkfeYGUuqfq2dnKX",
  "key8": "5HhHXjvzRbJ2NqcEU4iokeDq1ujwrJ2EWGtjJMMVMbJyUGZiBu9cjHYPfJDeQSdZoJaax9wjjkkXrFmEhKmsyLxj",
  "key9": "3FLXp4TrNFMUkAyWjHHG6EDuo3Zn1FGb9Hq8hJcRZPvV5fzmpZaGXWf1s7bUMjjDmyXufajQyMT6qkuiGJLEDuSj",
  "key10": "5h83K4k72KLPJriwf7ieMm8qkSYXQPhSAzAYL4JMhoYYsSPsii7pktmL4JndEiHyHMGHqJtkFrypsNZF5SgnCBSJ",
  "key11": "yDCigbjrewysCkn5oo54Ws1Q4vhoLyRNaPZnTgyRfXfpwswBNZyWp6qexkbEzPbj7tgytGvwXuzSfPMSJR1ARmT",
  "key12": "4t61rfbmqVKZmrfLowjDE1uRprc7ST9oTPJct7FhmYo6jGNTtS6Ytd4b9kfJhrojHq6d3BpPyKuvadYjX8Snf5sL",
  "key13": "4i5YXb7iqB9t5svwvVPcHCu2kxUrRhseRacnQxSMuJnb548AyPNb8VEY1tWS21M11vapohPbWMoHPw7Hfj51eN1T",
  "key14": "43eScYbgYYjrddPkcc6sMbqPtzzA8BFw3Vb9FWwgxM1NccDFsuBbvVNoSC14buoGX1wFF1BzEGhnsKxXmSPfbf7M",
  "key15": "2t9XpPemU5cQkPQfZVa3dzRtuZH4QwuYGrzM5A9Hyuc9D5NW11NMX8cWgaxGhnpV2oBh8G9Bx6P2vrFygRzvdxMV",
  "key16": "5sWs5Qnn49NLttvevrCMTU6Fumwio56xLbn1L7154XEqBSLtvBYxNzSFp1J2Uigiv1sXZziz9focQqLJoDshouAw",
  "key17": "2p5BjyrtqRrAGcX1YwwX2k5cqQQTMrAxn8fmB1NYKHU7VHEo6RkedrRmgau1WZm487S3PfbdNYJSPah5n4A145Ly",
  "key18": "wXQnkGSsqeVq1oTMsLGbi7FnLRpgHBtyEgsreBM4SPmQwH4Qh3pqv3849ViQVJ99LAhKw3Hm6pgt8PHaaswmb1u",
  "key19": "5UMWBy4GcuBrkTXtzyQUMfiXgARQoQMeqJFcFGKucsni4zRU2cC4AhY8J6VqkVqrnpRLh9ujsP6VjGuYDMLBLybJ",
  "key20": "2QqtnY69Jcr7F6qydJbyzV1vdqQmQ1v9gJZjY1YfERgbtd2GBxqbi2VXSeuuqENieY1FHZVwJAZirpuFm5A2pn5X",
  "key21": "ppTTYmkyHMa6dYHpjjGrGk8NaGHJnojeLchn4XkPTrzmeGTVTGZ9PPZ3FyE9Bn27hXpR6fDrDMMVzgKLtcPdueg",
  "key22": "4aUbD15Sduz9GYBjFQyc1jesgL75CMxK8SeH8ayCgQgN5rqpfWvtBSSHbUYP2GxbiuDQBdPMZqv4ykpEKpQNEEp1",
  "key23": "2YSAr4uX9qHDhNQSsXdCDFnTZCozoZaDTaQBe5qsawdBKCqNCbwyRpwxiqNPvKAZtmCKB4g6qMgQv3jZuFciBuRy",
  "key24": "4yhEX7KkrV7E5xcwSFsivg4NkfHXFeLiejy8jMyihXCYtineKgLxt4YLFX1YVm7q24hoT2fQ7e6bb9zaUYtzDeND",
  "key25": "4k81KGfE8sZzB6AsvqJSBvk7g2bLdbYTYUY8T7qvddVV5rvbsrTRkMPkPbKZzJWFK6vxuVjPBQM3mAcK1YxKXC9p",
  "key26": "441csKcCFgXErHYouKUc6EqxfJKbmJMnorCUQqdZXSd1RdMeAP5jsjhu1x6xZzecVY9ggVtPCpudnEqiJo8XAVNZ",
  "key27": "55e2n9PFL86gZVzDQrXGjFWzJND7AJTdWTvv9W4F36JKH1YW8BgeXx4NqkjhKdCSdUmJKbc8yWJsHt1MKxQwnMcZ"
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
