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
    "2tuuYJMsWqfGUiuhyWy2HSafF4SU6vzvoBGTekrRh2YxADHNfcju55X1T9Q35mqDX5peEF1RJfgmuoVnrzWH8C5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nZJfFh5WTJbKeHDX1yJ33itVHMohAni3f8SBXjxA8R1BSKvGmyqLgWQNHn8ZmSJcGwTjsA4fKLndPTQPpBWGqox",
  "key1": "5w3uhGJ5xb5XuKgkuvRAUkPkRSmbaPkywrn9Xp9bbhX1BpEvzy5LV5rPhXhFWTZXd6jwEsWRzoYDCkWKatn1WKLq",
  "key2": "2bHHz5V53Pt4p1jdjzxHgUznAdhw9gH3MpeX8q7S2a4R5AgBFYnJe2po6Wh1pEJLjkN7SZLNMhTNTrYE5Fq5o379",
  "key3": "3WbgQoxm6D6WF1GWrMQTbAWbgSa54teAmDJqSFHEfX1uo6kyMCh2eZsmAW4VvmS9eJPyaG7EzEFgcwwBDKC3tQrF",
  "key4": "3XdZYNh6mMAuE9MdegBpDjxENxcjzWpXrC4zVy8K8xeaJhCKPH4jeQzeZ3HiSSvxh4UWJpFiq7SaoKh4em4a9q7J",
  "key5": "RaewK6nekfkQcg4nVhekWfpVTjZuoyC9KBPZLXpwWDeoYcYwvjCS4ME7CG8raEAbnX3LGHBKnyv42oaoFttbkN1",
  "key6": "2jkxaNXWu9RCNuMBet8267PbENDHjsuFsef3CMKhH2R3ZqqSf7ZWv2A3McYnvgskZCNejiRT9CyBnNbcLPsuUkDt",
  "key7": "4sTRAtL7i4Jwu3eJvGNHxZAm6nXwE9J5o6wfELNiNd2U9wUL4VWt4eTTtfjyDzPx4stsyKDijz9G4cREJXUJp4yV",
  "key8": "5W76QMdK1dSmiUxhELeiKADGRHTHLJKMacpk6RDhCHk178WFGSZDdUriyfF2ZRpeFZ1fet3HXfGYNBn9b85ci1op",
  "key9": "iMRMNTgQgKt55Ji35yg3cyEP7qGbZmMCeBd2kxwVNyhQTzy3sZgvk7rL4QPrW1DHDginscpVYiaJS23xrhdDqS5",
  "key10": "212uvShNrSxtam1oxsAU31KM1f5kYMbPTroToABhzyxQoMMdQtvJC2UaCSEW9A1r3h6Axsg9cE4SB7KfFUX9kwcW",
  "key11": "3YCaLMH3wq84YmhRkKY2fyGaymofo3Dy7ZMRUP6Yivu1EpDY19dSxF67eWki9A5LPfzDsGijKgeZaSSQ1FVrCn38",
  "key12": "64xw2vtEub22z93x6qkXD2ksQtQ9H66AqJqojGkB7kUK41DCqa6ePx4tHHNgUMMY8GpGu7VVSDhfX3wf6iqzfpLz",
  "key13": "5HB36Nxx2hKTaxAq99drfq5o9fYQ7Ra8V6ip8rdf4ak1ETSpUUMU2s1TLKrjqmu4ZUyTcyhV25yWzxTVuFTH4LrR",
  "key14": "3D7mDF4VMgJfHSDgQ9RCs17fo8Gag9nFaxoRH1iWQdx6FRoxRZfTjcRuYurF98rQQkS9fhMVgPWAL9MvTeSYMYW9",
  "key15": "4pEErqRs3rNJ7WGBRzbLPDwduR7uUNDJsYqj6uVofazNgFPr1sQEnfUxft1AMUU1XLfhwaPukvvPMm2mNJLieCNP",
  "key16": "52YSKMURhjoE3P3gA5zrWxrSynjW6R6bMoXf7R8RgTLQC4vUZFzxWrTeN8oxsX6Nw2W3HXKJ85D4DnthhrqKpnzm",
  "key17": "55iHz9uMTkaKFvrQx9UaabC2KM8qWRnL6KXqrcSzWdnDPhNijwfCnGgrAyJ9KxmxuiVGXUsTpd68XNTkiB6uN3sD",
  "key18": "46s3Ph2rAGWntRUmMrMVyNo2w2RBkGXLmPUsewMVQGtRweDNbt9pjVkgEvStnZMyV2XMBUEoPZ7WFZPxLbav5ux",
  "key19": "2AUhJ3CUoszvojDDToBZmiAG9GbckEkKYzE2tCxdaqPDRP6zwHKTHmKjwy7reqftDqytPyDczAbQyiJrjDL59Usf",
  "key20": "2JJ6CyFpJH44tCvX6CR24oA8ewfBtQsMi7kHZ7uJ5Aawgk7v591aXXTdnxM4eWCJGNcfD5AwwcC4cbbR5P67kwP8",
  "key21": "SqxeGF451JC6q1LTdSSrU6so1HJnRjc6hv4ZJdRxb4R2xkh8f4DrJh61VzZTLdEE2KMxybGuuTKRxCTgdZh6aLS",
  "key22": "5WvcuWzR5gEGaXwAXntyFWm3oakyrPEB8EpaHcfbL8RbjMoQZ5ARPNc8jtkBke9J4yThaebPYrKr9LiZVjsYgyPV",
  "key23": "2XED9ZJu2XhVJTpz5QFdLXkYpkKzUgiXzowKaNtJm3AX6FT3GrkM1omigGKnwBkC1D7hfPiycARHZaYGBi8uEJ1Q",
  "key24": "5dUZF336JSgFzm869mEWLiyR1kCh4RqxgfxGysBKwgKGjPBXYxenjjZWimdxJMBcKpgBdSQCR3Rrp8hM1V3ZrLLB",
  "key25": "2MD3fdxStAeEiKoh32PBqkQkgbdWvk8niMVz1gpt37fKYCfzA4qAo4maa66i8uo8cJcRb5dRQsmB44P35fYGuzym",
  "key26": "gRyHgZLtkeAL6oGLhiT6d1k8ZERHvAScgbQDsyXZ5JPhjm4cUr5d8JVMwMGhCG2V6DmAc35gPyEyxCi9ivGBXPA",
  "key27": "2SsQ5eDgJa8ut71R4o2PhKiLRtJHRCokqydVp6mh1NGgeVFK8YWPjav6t8pPxSLZXysAAoEfXpnD1zTqLdAVySZL",
  "key28": "4UJ15DwTxHcB48XBrmEZiQQ9ickSzFBKEQbkjHLQGSmmMyQBWstQnRUAfK9ePTrvk7A3tqXAXwEnG5XdPbqNHGko"
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
