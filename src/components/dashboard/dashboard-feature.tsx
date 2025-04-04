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
    "4PDdMtimYyJMkrSLzNS4npQH5Hd4aChueg1fHf3cBXnY7Qsieq5DyfY8qJ3x1DdsKLvncgqmpCGGBa8qrTd2GEHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5go3wiWyjjz5T3q6s5MNKX5TNctmYQFv311gpLRE4yU78GJPPMkPMUBVK6uA1rJda9L6kLyvEUVbcyNk4Hn4tXB",
  "key1": "3HjZ1qVkozKMLZTRd9EUU6iAxX3cVUAMFkUxqrv1Psf1BFqxCrtfcxWfYYxqfWP8ViAw4NkotNywBYFd8Qitfuvc",
  "key2": "5H2DjKnLN6Es5WJUY68ZQZULhW7mr8mC9vD3HrrvUPpc9ZQpL7es6YE64SLHXJKKWRJZSNV1GG7iUHfTdZFfs2Sw",
  "key3": "2zhbGNNPXuLiQw5suNxshYpJ1osjr3uQ5DBz2cevwSVDMSZqhkYmNLtG7VWxaSLb9h5rJvTZLYfoXcrd57HXtB28",
  "key4": "5EeGtmMG6XPZxZCuyYyLtHgmjfU3zmSX5GC4LuJAUUUtYP3f1rWHgFregLYKYVSzv1wnivw6G6LqcXA3oQyNpiMT",
  "key5": "vF8CCgvuaBUU9FSRTKgVo9tYNgMErubwYDHHwP914dcC4o6jH3UXghCZA1nYeutmZQnjrc7TtuEZvPiKKBecjJv",
  "key6": "WFLpz6zaAtfedi3bEz6RXugajgciQbkT61vQWcbme7JNsCyar8bY2rLToqeWJCYJY8tZv1LtesZtGQsemwWWpAQ",
  "key7": "3nXthwBu51MjgZeZBAkY7WYqvxdW15PShjqV8jJ1pNme9mGLPp6GGKLpj67Anx7ue8NsFMHJ8UDDfmTPQ1TqtF6A",
  "key8": "4dUpo7yELK9TLkvmBYip9rp1sYKLA3M29SuLFkk5eiQHkg21jxm9Bzc8F3yLsRGZ8UHVX3QMR1AfVr8teTycDgJk",
  "key9": "3jSbEgY2fTzKyQQ6NeJn3typmL1aadsBxhxBG9cEVoAUoBWALQeDdo67LMjFnrTSUS3st3Lyd1NnE5LtTRveLrCp",
  "key10": "4dB6KV6MF3An7T8wMSSThMtcLzyU5E2oZ8RQo4MtPFtmMgsK1sVbVG3dsRR59QdoWAwgF4AGGvKpYvYc8jgQVomY",
  "key11": "25KJ4gurDNRD9nLRa9tFBRKvWeH8sHPZhumhNR7ELJBckPoTYTJhZBAYYJL8kCYAB5DgKCtEzyJjzaN7UXiW2iCG",
  "key12": "2TadvVNV4AWR3w5KxsVLWrEZJfiRPrkjR5xqU9yd8RstsHBkDpXpWMhqm8aVax7rRwgwDZg5bNJmzKCpwvV9z3xP",
  "key13": "3g1UQKcV4FYRKRT9Xe5yaF9GWj4K8PCYBQ86FQm68n9auf7Tb3X1juoX3LrzVC4UZJVDkDyMxiwyJNvmQAskos9R",
  "key14": "48QuiuiH1VVRJRSuDJK4acyZMKRF5RezDFaYXdZzLrhc8W394CqXcN3KEj8sLWmk7NG1xn2xjnoYo2KdSukdN3BA",
  "key15": "mFkSFsHohKmBss5qPeerVrBdBMSer5UgFxQsoyhYQg5StXtZuV5nuAbcNGhaEfAcuEQ2u3rSarsVLcyZMb6QSGH",
  "key16": "nxWvaS7ckAi6r7TwZhY28VRLopksqzfYtH4gnADCtjsXBakZNVE2tWivVKytdykJD9RM6hXR7n3MrLp3v8ToJJM",
  "key17": "2ByaR2YA6gh1FUZDhDcjia52du1Uvn3u2UzLspwkRfiEzB5cvBvnYPXK5eRNH49fX8ScadSc9pk1VUvB5buYMGvP",
  "key18": "5HfVVSBYcEZzhqW4dAuSxnpCKE6DZitY4uVgMbdPuR2RUJWWBbDM8N75K9TtgpsqFAvboejEDRPojiTY7AADpFxu",
  "key19": "3v1qNCrqZUZRN2L7gSKeuoT4KcyKcoCinHQji6ibEBfv4P9e6NLna429Shzu9nSgGmiJYaXJxQCfjFpPNEVrQW3r",
  "key20": "5J7aaBU6tqj7NCJ2UgbseYm1uxR6iUudAb7zQ7kbiN5y23SRSdER3Eza8ntNXWT3PbLK5m6wJvyHgNMS3TwEAVeg",
  "key21": "4EhgEGVdWizfbBNXuyQP8v6znwqJKnvYuLx2Zioyd5u4xCCQXr4CKNC9HtcC7E6DzJb5PMBoQLvtPgDUcbEVDEhq",
  "key22": "29fDAuypL1F11sF3Krpne64TRuei7Er3oAbSsUATx7dxM73m5ptmMzE1x7wxG9KjjMqrKDKtC6qJwEu2q2JLzTGj",
  "key23": "3ywb7N1Vdsu4v39BdFNaCXw1SBvgCNTqVSpQu74CWBnBMDRbu5Tf8WzJczFDvZ5nPPwdm4D2J2hweBRHCvjED1R",
  "key24": "KFnmBqAhdnAMa8QKfTEdyMwxiqPCPxfLvLxbTwsopxD3ytta85ejqxCYxrTsAyiKWWjQSw4eq1fxfsqrG6WKYfP"
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
