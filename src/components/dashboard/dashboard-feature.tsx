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
    "3BcixS1Ji29qEXXxxsCSpjKE6iwkVj55wKEis281kfJfzAcPzRszsyNc4DAZcyVZPzCG3x4nPBRwpHneZtUzJo3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZgA25CEHWtBmFeCdbzinuqfbYWEawj1WchkNhQ2mBitH2PmFQqAH6sLVmrxPYXhBSvUwDaQXTVkg4UuPaykftp3",
  "key1": "m8gV4DJp7eFdMkjvvXjFgRPLf3TQEQRYyxHmY3hzxCGaiZtrh1ANRUVPBJQVN93bbdpDeRBm4uSKJL532AjGPty",
  "key2": "52GTk4tB3gn2udna9Lv2u3uwmuEYBfiFb8pK5mDiKx9P7QWdM7oQpPsHeEKUDThWBtJQXvFCkYgjrdjyKDiDdgf",
  "key3": "2wJj8MA4fGq9AmtZN7giVGqWpWpfg9PTFrnW7XnUYCxpVdYc4B2WSV1YGwQNNubdvn71csaipcyZSBQN4sezovMB",
  "key4": "AMT1ayJ1kDPbymCeEKBybFARLLTC7iQ7cZhnEqCRtBYKiWx9W5B5RFyG84zSSWhhTQxMeUJBFjRCLCJqjK5pgfA",
  "key5": "2HtJfGHWwgsoCLBmWa74LVr9MirL8WCiYpWHYSDKAAERc5SC6yQPj4TkykQHQtiRgzUGpfo9HWNrj1wXcfdX8Zok",
  "key6": "NC9mkopZiftzKoc7NDqsRehVvk1RYHgRmy2koYaKfK99v8awF4dSswySj2z44VgMacBGutwJQzywJcgxmmjDbbx",
  "key7": "3xm7HPFLtJuzjod4ZQZBuAB9YR3Sjy2hPNZYKASVapQ8MepziK11cFDVpSLmZZo7wNrapxmGFhoF4bpMdWwLN5eY",
  "key8": "69D2Lyx21menJQ1cDXNnX2JjginwSTvBStKBm9kTgxvBGJJ4nyywpN8xfcz2bsRDBwNeLn64PEg9zAeLPBYacV1",
  "key9": "2xfzJtS3XJ5E1EHzJiB8FXMqB4foi8PwG3GjA1XWe43ja2QjcvKgaR1fnSHFpWfmn6bV6cP4Doe52jYfUTQa4WXM",
  "key10": "M9PshEvrN7r8oMwJ7Qbt8LVv7N4TsshbrxrRbGJaQfwQbmx1PqQZJ817AqL2tEf9NRkSxN1gFNE1fDzJfa5Qgua",
  "key11": "4b8q68JZiTpsHnEALSoc6MVaCTF4fiqGLHbNYHRqX4auWwaikzEyfEpHndMZ5VRLc4W4jDo7iR7i4fvRLQ7GoJjS",
  "key12": "5jYGjjXyA7MdEgXRRXdaMMTQ1U3jaMVP3gDvBXAeadvzRnxVWeBjPkWhotJNpfDygWy2WZqvGL9jSJMiqQhWJFrQ",
  "key13": "4giaXAubstqeef8EUqrtRp96wfLXmAdU6GLjkRJ8MaAXU2tbkr9hyEeTsZe3eurHybkWFzv2wNFFS4mCcaZnYtTD",
  "key14": "2aAgje8x2nBQuXB2s6QQKKg7tm9EM71EyzU5hkX8MseWdyKoEfgNVXdqysaPNuTk4WgiN12YEZ6o4NxroJ4KauCt",
  "key15": "5yYbjd6FGw24k2NLq4GeibdTqJvUqZw1hL8kcgWAcVieUNsVULvnDqkznobkMC3aqFE1yL95RnJqMzk7yFXAyK6R",
  "key16": "633CtP1efbEedcjJM7s5KHJBViBfgXWArR2LRxBfTZcCJuua8qpKRRxPTeM3pTsWSmdngahcWkFmnWDzjmsGmTF4",
  "key17": "22BEE1WFiMwjKnHsF5y5dhk4Xa9Dpbj44UYNQDfrC27H3cCyAbUoF5nNrwQdLGLcCqnfS1kpVhYj8XWuTZVzHXzu",
  "key18": "5kDG3JoiHHreT9Nz3osuv2tLLgafPAN7pCSYbcA22djjAgd5SZjygY87qbZoFRNe8YAx2G41oMdXCmF9Uya55KsF",
  "key19": "5MNDLC9U7dYfP1fFSGgvb9XCVSgtt6jpRSd7JWASdZWBo2Yg6nMksNre5jkEmBkn5t3BbYiF57onq4Wa2BRP6tW2",
  "key20": "5xvU2sJXvHwjQS3yHtMVY2YLZNwPRYvvVxwxBfTzkaePygdVv74kXHNRhVMPUvRU6JUCQfuYJcN1nTmN9LGLxeWE",
  "key21": "31AxkU8Vju93r21YtVzTPD7kFLqVvpGfZBjGgmcdLiVcyRNNND5Svex5BbydjGN8xPL7ijJ6q48Ntf1ARVzSekG",
  "key22": "3xicQqUCb1ftwt3rpd827WXGCN96xPja5cSFwsrmbzz8p22UZiLxZBKicocHbfu56dft6QFFFeuAnERCTV31d5Bk",
  "key23": "2eDbyjcKRPTZVEUURutnxNhgfujVuVH6bPTmV7tuvkq2T3oeXxvM84zp9tiykPXzBM9YPSifsc48siyXgUMqTtRb",
  "key24": "32dBeuynibbHhfw9abEtRsxAUmPLBp741SkTUA9trzdVuvPvLLEtDTHfY4FrF9ejYUkmYU839omRM8cBr9KdEHJB",
  "key25": "3ZGc2G5NKYCchkSZ6963esBRLr6NvE1h3jELC3SJZmYanSKAFoihQe5FhURqrC5jj1LVdf6cynzKtotCV2mBgHgF",
  "key26": "42iHBG6qPS5JmiSfjNxXCJ4k3MP2C32PDs1qQkXLxyheuETXqAqPxPv5Bnh1QC5njJM4Zf7RYmNxuurPyZCrXXjR",
  "key27": "4rNsoAEbqYqREcE8jw6xYwDRW8GuroMQdkM2EvhzYwPPPUCAg4nfb3CVr7zwKyzs2nhRCNNL6YfmJbJWo4SNUWxB",
  "key28": "3cY9wHUYRbydoXDuYQdJJAsThXdby1kYjihYgurePGcpoNnc3S1ehLvVjDy6jipFgn3CTZo6E1Zuf85nM6spED3i",
  "key29": "3CMQSd5GKkJGrZX5k5VSe4NJnzoWeYU8dfnNq7Ps3fq8ULyXNFdZjb8BjD77VKt46FPyURHw3M1vB441WYp3AzPL",
  "key30": "3kuqnrshwB9FP6ji252yaywpVCjWmkZKVsyYj9yUvVyBsn6ErKQcv8hxWRfcno7nYcttiRsTLmK75aBWZTHsFFD4",
  "key31": "3teJgqdUMsYzbjHW5oYCcytcz2un9XpBLjXpbgddp4dCqhTSCGXbBMTSrAQkkkYmUzTNJkKZa1E3yJ61iKvAhqQr",
  "key32": "2y2Bhx77VmLxHC8QwEXRN4jwYen2qQN6nnA7zDaN2ip19xaj5yauh5o1s66TGa87o4xf8UoEFJnGnahoaqTB4cME",
  "key33": "3a3nwcN6ayKLhjx6YnoBc6uzgBtqZt5fSwUxYzFj7vzBwj4mJXC7srXdwHqqvYTxYLcN3nQbaGAMFvMgQhAfyE53",
  "key34": "5i6jph4A2CNN3DZPPfxrFCMMvM4YgPhedvguWzB5jDuFLmjkvxi7Kf6rR7ui5ucvWYzt7u2CEu6bGGqVPvszvuQC",
  "key35": "4mj4gDYjKUKTCTPnzQ8NpJyE8ZocSNsXsgXUw5zNtDGHtfYjY3NUPRxzS8UDKsqCqv2tDM2dSGZBtBzYRFzUdhLY",
  "key36": "5QyNRSvSZNTpjW5M8iMd4hF6BxGPREBJr2UvtcCFFAAR7yhf2MzABHpsYSWaAqs6QE1xyxzWnR6DJMy3CujXfHto",
  "key37": "3rhzAumfQeGArw6g2wy93wvorMhewvboh4nPZrTDg3pBJKhEXSFohP25V8xyV5yTeUs7E2K4rDDx73BQdoqfG2AP",
  "key38": "LucNZL4imEfuS1XbQXHSTow9KCSqdu7tDbekqpyM4bsfAFRDG3tTqyCFXcrscSoi8cor92Z6ZQ8h2yYDR3rdET3",
  "key39": "2f9XtLK5AmFKdXn4dPDeMGvFNiCcQoh9y696Bwh9eZ1SKA7mkmocTWRuEzua5DQPptR2fWKC1WdSWC1qUFU9VcbH",
  "key40": "3jHfP9DGR4yzdZJtZSRcunq3mRWg31GMj6f1dhb2CjDfhPRCmBZcwarpmt1xyDton4UHtSRj4WZqmv2gc8vnNfzq",
  "key41": "4YnSgW37xZxi9GtcMHVooKeeST7UXTEo13PpaKgGVToJHbSxWcbppmyLfaAnK3x92PMjSq2iYhVFF31VxGjeRUPX",
  "key42": "3XdaYABbf6SsQzsxJ9MEGb2k9UqE1DwDEoatCHwYyQLy4BVauejJzrFQTP9csrLYZnrrh7wzqurdUF3eF9HRswv4",
  "key43": "3e8TmycbZQRvS5WueYk7mW57AJwZdX6PvLQxTQTYu34WsdE837vbLQamf3324iK2iAizd1kzsiEjZmBAuott9TTB",
  "key44": "2EJ8uuLTqKjUiKDwfFwruYCPv4SBF48dKg7R2y9EFLGTW5TPBEyTrprFw8as7zRBJXerEoQNoN12YGbGyJ1ZnTJy"
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
