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
    "37inMvnDyRePWdZrbTXEt3qF13hxQ65uxob2KwBFrcYet5ciEDiekGUP9vFsmBX8m2Dq4wA1yxpYWRwHxEjBr2xc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YMcpJcriHqppjdof7SU6wQ9T129w17yNo8vbKGrXy4zqJZtvMGPxddDVif4zov85y7urLnhpNY5purEwAoceWpD",
  "key1": "3wq4BnDZj7sWTEGim6DmsCBYD3c4jn5oRVpF1Uhrez38PSdh8ba7bXkHdbb5WmWeVbaoUrJZH5q6vZQTjX4QrxsP",
  "key2": "59T6ck9jPN8DJpY1L8Fm99NN2QpWWqMokuLip3RtXRyC7uKyr7ELiFTHwAMq6KbGRJsomYXHsCCBYVYcunNDHSyq",
  "key3": "2XtPY6Hd96Ev8hg7TYPFaUZmB9kJkpaFSjuJgej3byNk4dhBpYTXQzW2ipmifJmkcQqtM1dwANvdG4JyC6nPvRbq",
  "key4": "huJChFA9FsYAnhra7BiBp2aqFiABBXvntFy5cE4NxoG4VgDbSA5KC8HZkPsH5p38CbRanjMi9x4mpBp8mUzMFeN",
  "key5": "JVbG9Sb84uzpkQ9gMGHRfojZAb9r2RxcqRAcECmRagWDViZZt1GTji7fRRXexK2gyZJkz8YkbCnA88xsBGUpteJ",
  "key6": "3o1VvjEsPURw55gvVny54LTfAbLhSsL8cCsjZ1b8ErhR9bAFPmhAQJmpZcGRAr9XMe6qcnRRTscRoESqYMhtD7b5",
  "key7": "xQZxFQKUm5kcH5pNvycspUkYX8waQQCfZoiyKCNx9dhvbUhpMgews9tSQUBcr2HbivCoJATRTBsxCEAHahYYSGh",
  "key8": "5c8ipNZssE3N6Vs3V8DRKLC63xVgJTdffAru5JUFsgzGonkTLX5rWeTVEi4rk6Jy1dsPythDBkuENsfq9Lj1WyrV",
  "key9": "3kTmtco1oT378hcqJMCVk9bj8HT7AS4Dz189Zj3pqoruLUfdKhRfjQLzJCqEpCdUAKbEbMBkdn6PYHt3WegXt4GV",
  "key10": "3Ygx56XGc4MLP4xEVttgam4Mpdf3BjwuKpgQQ3vV8Kbwk2hsPRrEY1u2UBRKBnY6XNmCqwR8ZNH2cbUwQDLvMa6v",
  "key11": "pWZLjfHj8F5fmi9hkEuU2NX6zBjyrbo5MiLfoHNjoDnSFpAXHqhdsyCm69zKBY4y45cFCgvAS7vMDzYBm4CAJLi",
  "key12": "3qWDsioGwaAmSGGb52Y8faXhhxXTLNNZqiMtv9PGgnaDPt9yHGoAxvXYPymP2QVwK9KzXrzCmyN17pMmiYUpWW5n",
  "key13": "r1San4LY8AZumNcgWnXC8XzeCceb5rX4KWZasmJswz3moHj4dNCQ7X5sVmgSz2ew4fVKaf9yaNMUVCzs7rB3fXq",
  "key14": "gcMxS6XCyEssoEzxFMgrpou5KTi4jzmiQijxNimkqq1PVMKwg721UjjRcN4CcyTMgt9DXPGUyacVJQoBMxstHfp",
  "key15": "56Eb8wzyhbFGxjn9yRn6aCWMCU2uMc2gwXH7xmtSaCgqxsrjcnJGCZUFo7YiLoQg88A2enC9dXWPxYQy4fq3xtcF",
  "key16": "QgBy6E4D2h5kTTXmzdCGq2RBNZfrEJzXKznxELQxrQ4q8eGtv1dzXpQWYeB9ek6iXiC38Rk1wgBCDex5DSWtQfo",
  "key17": "2WrhKjwChZGSUJhLKUZKnHP5xRkU6sTBbvkvhhPwacrPimfkZ9tkDJySoohEEsSKAdrfuipDGds4m5tWa2WCcCkW",
  "key18": "SMvUwmWbB7C9fjdCyfEGWeV3FtHs4gcjXYhqEiQkmxbpLrWrCgBS5RCagVGhR1BwS55zPPsHjtY8W8wtAMZFtfh",
  "key19": "3NasdUdAgBAY5YxBmTnv6V1UiSaZ8WEAswotX6F19b7aawXt7BmiT137dEWqNvNdb2epHbBAa3DV1WDhsNvYbHay",
  "key20": "4BqMdscqisLkxJxdJrr5DPR37c9Y6EbuenrMGEguMRL43x46fi4puiukhxMLUu4KATdp5QkDUrEVNey3Syg59jTC",
  "key21": "vhxo1xKdQq5VGkdVF2s7N7yqiPoS6D22yioPAWgPxvnmPkidN9843oXUtHyAuWbPqzVcMaN3Dw9p8CfsiWjS4zX",
  "key22": "4vUBmzrSxwXcP2hWcYfh7ZJ36Ahz1zqAgDvujkzhXgm2rGLk6YXnXb9ZYmcoUkifhHST3FkQ5GCh8tDXe2uZ7bM",
  "key23": "4YKpJ3tt6aBjFUSQWNf51FHhh3c5VFtjw7cXWKwAMn74VHUvxnJnQESUAfGJnYgAyYQqUYPz2h3SLUBrLzgHWVVs",
  "key24": "5AegKaNzGFzUmncL7UXE5dM658LVCcRx9d4p4TZa9mPXKwUdQJiuyyS16ZUp3zzMQz6xf66Es87Rj9VvAiJnv9do",
  "key25": "126XkgavXrjhVUYRtF8ikeFTQdyfoF149wMx48q5aBv6LtwVxgbn4uS1vZC1G25jK4bUs3RLUswDSmwSFcWasPE",
  "key26": "3RdYCmb5chvm96G4xdDRk6yxbUWU3ZHnrZkkxiDK3JFSC3LEADrkNA1Bz2Xx9UtE11vr1kq9UPAh7UeS7tnjTomi",
  "key27": "2RXPPRQLdbFaW3AksVWZ3Px1McjE4Pmako6ioHRjrMTxF6wNjwNNRHQrAfUnJAVpS5uHYLMZQk5DfcoUM2u2yPJ1",
  "key28": "ZAuy1Fh77cUkSuk2ymwXdu7M3iUqvr77j2LCzS2viaUaWB6cACH6FbL9MgAhnnSRWca2WKqLEZfSm32hEX2qBAB"
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
