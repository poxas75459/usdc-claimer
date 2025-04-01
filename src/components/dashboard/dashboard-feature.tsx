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
    "3uNtVsg7axaQbgUy5B3Qf7iBpnGqTD1XnPn8bYmXNqwy7yz1jgGs6VkQn4WjnWVteKPsJdKwsukvh6CENjSFQPDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SyzvEaNKb5Sd76aY2gGCSKBx1AGX91pgB83yU5SsofJKJUKZmHV3ia9MhPahVYiidfb7H978jFvqSWuQgFD4P3k",
  "key1": "cM5UsRAs8RsoRtuHpZcr5FkwoM5Nb1MxPTjg7edxdASeBQA2GFo1qMCgWSNonPQhWykxbvY18bH7vcoMgM5Vwv9",
  "key2": "4yNgMswtQbgfYf7ZwSty64Wknjbvs479ivb76yGccTFvjgzL3mBpLhkPK6Sk9kxUBJyiKF28hP383VGJ6UmiDmMB",
  "key3": "pdmsKLByzjkT13CSLRFERJfsB8fVFerduAnTAeVtw7ob8YH2JN3w1yE6rV1Pf7hoHFDJWjF9ZXujkFJRfVzBfrC",
  "key4": "tVBMamiJsKihqe3yhvNi9d7V3P16sWoSx8TD6YYw7Swe9Cc1tbsCqm5gVTKNfX97LLjr3yrXWP8ZXkWK1HmFTzV",
  "key5": "3wWw4sW3SwKL5tKaq8xftYhyTUP8ChyebWX8Runuhr2Vu4Rzxc6pT3AL19aVvXwiMxKBqaEMd1GGfVxT4zMqLhHw",
  "key6": "2N8mLbi9oZUuG6ZykUTVK6XGZ1huoeFbPTc2gaxV8mYQ9fU31bfRJshbqggx75wwxoVGaLvL9xox8rP6QCygqELA",
  "key7": "2ghGBkpR7jkDJd9C2fYVtmEw6Mv46k5o4vMSoX55vVMMZv4pEoKi5mDZsJhEoEBFee2pdoVFrp4GVEFqyyi2zxa",
  "key8": "5ptVn1PbuZTjLijRrzT4HonxqkyJhc4jDkPvWQQUsMnXgmG1pKzKFvWhQqNhC1qrD8ktKFCZMnzuZTEx34BW9ai6",
  "key9": "3gK4XQAcaGKNvncH9j54hvJGNkwn7w7F4oBZ1nPpAAMfpcHUT8MMm9Vb1sCdzs3YgXXYCkoVVyhchTKcNRPqbZM4",
  "key10": "2UdTT1dszgjcrBkWtB5vgSTzziwNn8dnjfE3f7s6jSL8aLLbT71xjeCetW87KCbCwW1pMbGiu3TfSUUoABAfwgUk",
  "key11": "2f4ZqnovFA1C88VTg4usXVgNd1a9qeTbzoqrHKDeGuKcsH4cxXcAigVWTyv9PZagfhPkNRLexkExv8xwS7EF62oy",
  "key12": "3gz2K8y19U5XWSrgf9EPX1AYVVGPZ3Xnoo3ixkYLQoLpgZV74Nh4qhBQeEPjaCSbFy2qGmr5HU8btYxojruFZN3a",
  "key13": "8yzNui6NZ4UbToK8G1ikVJ4PfB22di8ttqw2JCFbpwNAnbGmX41s4sUaFkNmjixxxT8XBtjkq3H2uafeBTQg26a",
  "key14": "2h7wjtBNUgHCY8APj8MT9jiNc9zueMaJj2jn5nNdYib9JRKMTBEqYaFHAAhymdS7mgUSE3BwfFCNyF3f1rtaiX9E",
  "key15": "5u4BKXFToFb3XZpET8FcgNQKWFkcuL8yZXxh8CGYDK8tuxKSrDN7enKBudypG91DT3MM2YGSL7jQvN26Zv3BweMK",
  "key16": "3o7LPLhQLVvEWPXDR2tkjNawZ5cnRQsDp97smytPQSjbYwp29RaNM9nJDbHperpBvvuQnUrNwmg536YriBuiu4WV",
  "key17": "g1BuePuzWA3vy61671qaSA9bH8Un7x4A7keqbGr95k9NYGxh15bWMouRLSAWbrSzmBRyctq4uo4xqz9m7hp2zFM",
  "key18": "wV2fSf2T5GpEreCFeABmM86tgRdeASySGW2gBTyFRzSTN4mKa4Nkg2sAfwNcMQ4JJR3i26WTiqBTBZbNM8gM8hj",
  "key19": "nHYxvNJPgwezeJjygndGQ2bZSqRqU4zVy3FMbD9wMG1JPFf2oAhdiBNikf7PASsgEUVHTVF4c9pFxZi7RMc5Syp",
  "key20": "5F8Jatu4UJNJ1i6LuYMhwAdoaE3NCd3HXgyNtTnsow7wEBd1e1iFdQDWJjK41bHEBfweXyBXSdR4JMvqVzgkBza7",
  "key21": "2eAoR45ipwRDkFskNJh8Z1GhckkU9tKh2KmiaEkwr8hWwqwm9HvweqwUfAJwmYmJ1wYDEZcyhKQkE8Kt9FLw2kuG",
  "key22": "4zUVBof6VpQfuVjG6GFmYVJ588kiNctMRJLtyVtvUZ4C5oHMjgAKgGuyMn7FQA7PK2B7SHLAYhNFAxHodw2uRS6v",
  "key23": "3Ri3JsVRmoztsjRvtAmLKbGvMM1rNAAktRJtFuqgqsjJH9kezuMZweoqMuQmvea8ULZrSSpMyD8uxpGZXxfQYmYN",
  "key24": "5yHwqeQzvEPUsBnQCsrsyW6yDe8YYHa9yBqP5hEEpPRCSXRD9Lnzz6DMtj41YXUi2LcsYQ6opB98xNBJvuomBbLL",
  "key25": "3QzvqzL7TebR74rTbYmeVK82gwCDAXYD2Fw1jg47XSpYdvtxexKx8quqkHTvirJVn8VNt1gNdaGCHwAJ5gT2vwWY",
  "key26": "4VMwWDQ1u3c8wzxcMuk7aN21Q1zXyP7ASjXPE89F2hexndyjzJ8viuVuD8WHvZwzGGZopGB4Mj9fHXJugRZZwsud",
  "key27": "4vWKmaXn4toqxRRHD3K5aBXwrMURbF68iCnbVaPje3qJ2V33RrjomHbbpMWS4wBMjvrZfKM765MJByBo321nQ3wB",
  "key28": "4PM7zPdt4Pqv4UxtVti38qJwxVj2C25JLuE5JMwfr35xXJxAoAuWrRkxG3UCCCzj2cJ9aGQkuFzF8QdUnbTnBBCw",
  "key29": "3PP1SazN4rVdmAAVCjhYB1Bqg2KsumzgJokNEuiPTK8nAanDNrJ3q5RwJXJZs6pYp1K8ciPcwD28UJP2XGsgdKy7",
  "key30": "3dwJhTm747sdXYUkuN2GNJnbsRgp67yFARJNf7zGqm5a6RcVyxqZG43pcmX5SMXdyTCqVqGK1xwZCPr44RHNteuS",
  "key31": "5npDDYuQ2Nq7RNcyWLCiqa8HEAbKU4s3A61zsrVXwXeTXombha9KR26agccQa9uUWBe7bf2jC3PBirvkTQzt3Wuz",
  "key32": "3NwnDESQaT4UsMicfHFwHWnKdhQaArpytMbZubob27sBRZRjczQD1qyZBuGYLR87wxAxf9cB5RwGCWZT4aLEygwk",
  "key33": "2J1piE7EJAsWNDFHx8va7s7no7mMwMfX9GTd5oiUpd24obv8hRphXAjPxYBrEFc5pfgV4d2rgJPD4DaTwgWWh5DW"
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
