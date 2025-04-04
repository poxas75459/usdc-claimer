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
    "5FViqhxVr8Pd45EGDHTx5MKSu3ToXUJG4AJ98op8PWpRjAGDWyfhH5ucNB79utMYNWAYx9zGT8rcSm3NocjHainb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cxrnCHHZxcaBv9qvT4ebSABYvhsyrEa2FLFNj5YKmJn2A7ruCcWanVwXXzDwPsKgLFhcKq9w6MxEHMbPppNqPgV",
  "key1": "4f8QKfvpNj3YraEXaJcYGD9KWeqwwEUjvmuZEWkRoi2Zx9iU8UY7ediTzaKzQRMDgDySM5NbLXCk3pHLdRYTgsrT",
  "key2": "4ouxDvTH5VKjkRknLAF4dB84d51cyFXPubes4gHeYpvwAmCy7iYc6EjeVcd3PXhbYxqEuhCJ6wLLu2cpzZmsKV49",
  "key3": "rPwBe999LuMaSTCreivc4FBk6FifpsjMwJLBaRb6DV7VxxdobHt9McFskkqt5ebZq3HfV69fcxnc7cfWR9DNMrm",
  "key4": "2Xs9d8XWjvmyHvxuKyDx2iYL6f9qzHeTT5iTtWF4ubZLXZcBDpKSYDLoXt2Jq5ed8J3oN98tUe45HumVV22dtBmN",
  "key5": "4YuDSTzPdJ5hGf5VcMsRz4a4PDZMAwfGVUeKuwErauYUNG2GKQkR8Pt6kXLHLFvtJSBmfn43SYaBhuz1p3TczewA",
  "key6": "5oVdRUYasAX4faiReVQU51HyW5g5Yffz7sTsNZRTmoby3E8L2zDtaZKVkvmKYF9Efh3tEbw83E3GWs3VxBXjZ368",
  "key7": "5ohDfrLDoC8KYbbbhbrZE2jE8j9aTxDLzWfa1vwSiBPwWni79EmKytU1JSpnoJJfHCAsRBhhrTMNXziLFERP1hsu",
  "key8": "53YgyXFAKBrvE5KNVikRynzqq15dXTPx2mK6Nfjnj9RKCmHkWZzbm7fRyiDYPEx8C2j12uM2KuHrCCev3PvHKQn3",
  "key9": "5cgcjFt9WA27Zb2Cpqe1oHsQGDgq2uv5c2spBDJqNEHewqAptxwwtRKSh567epRZ4KrdBrHR31pvbS3UzhRt3LM",
  "key10": "5g15KtMvLEN4gDeDSoX95fJASGek5tymNd4SZpHwyjQUeN7jgJCtHk6yEaPk1p5fMeuxAGaGZQ78uPW2Jtw2B7Se",
  "key11": "4qPrP12GCekEZc2Xs3LBAardzQ4KVoZkNNggQmrUtMsqVMfXfQBVkRyazF67nFaEgApMJ25x8rLRuYwayrjpaUr5",
  "key12": "V8Qb6bc9YAweUV3XDqY62TtAZTwQ1UAaSf2FEkhpwd8VGrgnrsQSbDMkNJMd8N8UGLdwWXxjYM5iaPa1N8F8nW4",
  "key13": "2kdzX2TQpTjzhNcYxrS8idkj7KH2XfJjsPmnY2y4j6jNvswiWksefgYJ1u7xSwUGH1vqYFZcMvK1rZbjeqHfjEbF",
  "key14": "3eNovaWHJfL74wnGsPLVU2E8hEfNbCifqXfDUgmWSVKc6MmfTMkDy89GXMSXXLe5PrFeifDNjW3jgwfeivDL65Zv",
  "key15": "3jRFEkLTtg529JRthXbHyLgpKaeKZziwKJv6TJkzhRRH93wZhxVVM2GpzKEALyJwJXTdqSGUpxuw3VEiHUoN7qBX",
  "key16": "2JgCB5o7ZmLzNGoZMRkBRtst1SHfMrQPuiyMeCYxE1S3v6xK1JTSvMpS6ZdUSDpdnpjNddSVFo3qA5fNU7gKWz8o",
  "key17": "4qkMww7HzFM1oL3t7D8tnyWHKmP3Zh4fHuG61eLJ1q6aUWs2bkaAFdrzZtEoHd8eNsfyRAQYe14breWQvuBicrhr",
  "key18": "5GXqZMYYKaqQh3tp2bNpxoog3Xx6cbyNNWNSfbsKEU7w2bfcE9NrFgrjXLKmCmqJPvQVmRhhgo49isHodKw7vtnB",
  "key19": "3HxRDj6DtyUzq2Gy7Trp8uewmok8BcWKjRrgCDXW8MyT8rBD35aYjUCKcghe8fxUssAAjBxCAtDsKdxP571mQyse",
  "key20": "4GT339ZExzYqFD8iq1T3NHm4aXu1e7UnVtJLbYgRzTnngchhd9KucVANL5vqSpWP2ZhwfipH4QVDgDin8cWhn5yU",
  "key21": "262pPXaL2MVGCqtTExscBG7ptALtGcBgGXibmxx7mzJvwFgHCmNaktVz28dAXnoG2no7xTUwRxASehx7SM3A44YG",
  "key22": "21miAwJti41f3Sr1hSD6t2uBmVsfiKbZxmFhmtanM1yxaL8TpGkm5y2T1rxXp1KPY2JoaGJC4oTRe9RA41fm9nJU",
  "key23": "2S58HHkeXh4owHzBqd8cm4DWHDZiGxJo2gjUA4Yo3K5dS2MwTQ5Ej94FcXD9GF5BoZs5iWGmnSjz94sots3v562S",
  "key24": "4yvgonaVrmSYaVGLWkTzSX7ZyZ7X1atcxcQ48bUnfkxSoX8iR2TQWjLxHsQDGfAQcHkZdvzsgci6AnM8zkkMVFbE",
  "key25": "uZ2wXnRjrcckq56fDSaoGzq8wBbKUbanrKvNWL8W2D7JzCq2rMvFozfduURgERzgK918bb1eCLyi2b49PTdBgLF",
  "key26": "4YyYNKtfTzigYrLaJkrNPoinoJnNr9u66A4jm72jvSGmQKCPSQtE2mCxN1xJ3GVGQSt5pHDFKUvaPvE7pQfziNe2",
  "key27": "4fNT25oEwQkVAmC7nSxAhvjhh9M2UzTbghBSjgCQSVtmwT2td6hEhx9tiW3NwGeVk79y7sRMniAdt4REkyZHxN4R",
  "key28": "53DAeLTc3iULc2H7Y82kMPzH4omHJazQ9RW8cdCk1YABtagL9HCCkaMMKPzYAmwRyLqSHw4cAszdmnViekgrCEuZ",
  "key29": "4Yy1nQ44iy9hiWz5Z3xcdp5pHt9u4nxifaX6qF65LXBxxpLLY2wwdRzmkLL4SLUvGfcNii1jB2RfyXvu9K95s4Bi",
  "key30": "5QY3A9eTvE27XsyuUjT3vmNkDdzfF1g3Y6NgsoXrrFA5qScp98hs9gwVKKfUjNgcTja5hqGiv1xcLyidQXtVt8Bk",
  "key31": "3Si3swaEEMm7hHrRS8ZY3Gnj56onCxQkSP9Ga3UJs36E7KVzuSB7gKfU3XJabZ9k1SM2suibwy34drhnfu1RKqjG",
  "key32": "4mHkdavy3tuiLZWYtd3NZmgAp6MoUj4u2yat5qAii7qmrn9BmGDne26GHsh1o82hFMHuQRjfAHg3uePBovDdVKv1",
  "key33": "jiyVfEGbyGj4ZTwv3sM4M2RCkPhqQz3cTmvXvpJt1Q7GnPFkD9dVzSc728YvbZ6wYzzYiL3GLM4wyTpo8Yxgsnw",
  "key34": "2pSw9sh6QUmVH4jYC4iXeE6epk4vVCDhkH9c3uwvJKyWPQBDqpc3b8Ln17J6mXrah9HuggeMByxmCHA66hk5Q7wJ",
  "key35": "5aERe28uJxYnToKwo27dz7vmFcEmC8NkFHSLSg7HctuFL66YYE2NhJUzkqGn1QzTdy1shxVF8WxNeozogW5uyKjo"
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
