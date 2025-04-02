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
    "4GNwqs3y2gAskPMgNGhPKXnTWe5a65Zkuf8ZShiSNwQ8HZS4gKbGEsyyT7jyizx7P92FVwFycw8PQmuPHG7pMwFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BqoGEbS8tPwGDdXMQxkEuh5ytLd4ZoUwbWu6uBJziPKSVF2cDjiY1XNS1GnjrPj9Xp9DSvGkHEwezrhvaw9g38r",
  "key1": "56FoM16horjDcQnpJ1ADWpAbBRidJa2ZocNpyKEaiNDnmVbX7mzMJkLpBePots6ctCooKg3KFQyCjKAT9H3vkXJn",
  "key2": "2XFauC1eCkST22AGnSFv4pLCBe9b9DwJguZThoguGxnkEiQYKhrqpirVbGCbWVwojWQdFSWf7mr5FBeTRdaA3QEE",
  "key3": "596am9bzuJ5rMumgRkW6uJGSuzy4y33iwn3GQPbtqYvv6zWqe16ievbg4nG2eoBn5A1EtbkkyjkqrVnfFcHHw6UR",
  "key4": "r3GkxTEHfJC3t997WdjZtRPT1Y7KALA2DR3hWNVGqH2orgPP2P6BGQB6knQAWtyaar5GYo7KJhyxzRAnrzt911F",
  "key5": "5Qz8LMqc4JHXugreHhUydr7o4vbRPE26opVZYWiSZMgwBH3kKfwYSQtXxuq3kb1WGMgboJg6G5qYKfj9CR5Tnn5N",
  "key6": "PQpGmnn7E5ENWCUjXUwsQ47PqvNYCzAMo7fNrdLKw1DLmnmSfCTARgK4UYfRRLkrbmSyt8mFtGzwcnZNmmLqAuB",
  "key7": "35vL6fqBdT43QvwhPbiCcdjzyHn2GD4Epp9wdHvKjd5jWhd4d5hzcZekMq5woPoWWNV1iBo4cuAhwfyUnN6JACAR",
  "key8": "33XMndJqJxJ9DAfhearKRVGDvoBB9L3kZqnpe2FT9euW5mSFhSV6KcGYz3d8BVSBkZir5B1fgetFaap1aNHNwVvi",
  "key9": "5AeNZrvN9E2bP6zuoPK2RmwNGHaQfKDBrxweCNn1mSEWHq14xM1H1jcUWmwoxqcp1LpPUSjEZXFvSTq3AEieHXsM",
  "key10": "5cXs1QRg9xm6TDXeFAN1vBHinjcaunHafJLitx2P2oiL55EHh7c3EHWRrj9d5jFaYxxcqwgPG3jBJamih8uiANE1",
  "key11": "5hUBy5UVADM7XFTvbJW6tUtzgBpspv4deHrHaVh9QjvKKJuY1ozk9imTinDruKnQ4agM8h5eQtCTF3jiPsftDFdL",
  "key12": "2SUrFm27GUPN7Z8cBxEG5aQMnyLpTDJpeFKr28gNgb5DjYqg7rA4kxfcFRbrnrHUBXfot9QG6rLED7x2t38AUTvh",
  "key13": "3ahvVWikCTbsQHcdqRJ2zxsDihXiyE7s9oxXmN2iin1uVknW4kxaxN9NCkFVvsoyDdvVgtqVuAdU4ePy2QdfWHaB",
  "key14": "4FxbqG76DqgAaPZg69YPQ4wW42iUxzy9szVfwDCVHdeuds1M6ywmLGw2jvL4iQVYFR5wYTAEiYWisaGKdZfjUzR6",
  "key15": "4azjXbxJKqzoHdJ1f8FnxrdwqgbEaQytrtVfNbMhcbn3yroLNYRrZRSubFz9bCbTET66mtiP7ShvjynBTguwoobk",
  "key16": "CfxDcVcux7aW9wCjqHtehfAp3rVUGvKJhZxe6pDsorvvfUZNYgeXaJj3ce7nB4rT6aAkFQMKMUHW1NrWvAcF1ri",
  "key17": "2yrc6S6hvrmiV7gprZHqqtNC7tewbTtm38QRcuZrsmnxnpvR7LVfuE2WCga3vUuPbtuheBMcHyz8bg9YXdj5AvhX",
  "key18": "4Ku39cwsrqzSBhFhXtxjqvuScpxH1ggV28SizrqYBqHiYJbtmYCXxLXcwYftydeyjaSKGhSwgw7LyqsigCfVkcVT",
  "key19": "4xYwmd1WU8vagPBogUz7Xs3nf4fyCYinctvE6EMZC3t9yU9xLexcP4iJRDT8B1qzfzfTT8pbsnu2n3efP3YfCNoJ",
  "key20": "3bVKWyKCHnL1q31QpvvZzjJui4iS2VtLuBuz9pahMmRrj96M2HAnvdQ4muUBXtJqktVGsRAD8mnFHCkAPJVd22Rt",
  "key21": "5KJtyHnaANCF1tFcFkWrhMi8gZ8ZveeCNtEGiMGCYnna3VhSMbCeWbuKi6uQWrRNbBUL9198gxtCYxqNaKSeJL7b",
  "key22": "4rpJER2UTzNFoceK7WkUXVnmhMHDWu7gYkKDL7bPuzaFokgv9wdUDmC3pf2Xxxc6cAV1nkCATUL6TxkjtrPPSpht",
  "key23": "2yjiggY9iDvHJ6usNWjfj4EqgcMm4Y6SjiNQj6pt549HKWfL5KLqFuarEJSVZE3Y8mAjMXFGkgf9E7LANghZn1XE",
  "key24": "5bcDYnMPhVabzH6dT2NqC6S91zsJ5bn9DJUNMUsNN1ghdwCp4YwkgEhd9y9dBUqFy2KRRNvPF7NztuqksxHvLsos",
  "key25": "3kxyc9xMYwWMbYWGyJ9MxUe2g3gfdrXh6WUQMUdERuGhVpEQVqKLJP4KYKEHqQwgZp1ZrjLUysFpoD3LFKQW1iVx",
  "key26": "3sbN4txCqTw3iJWTPCdYgmyFiJnmJ9wRw7sNE9k5Ds5ZhJCuGGorTV5rUAGTXJLwCe8szLHDp3Ki2pHzsaVLu84M",
  "key27": "5EYRCapKZHAYjoR2Ccs6vmPt1ha2A2PpTDNaPjwq1jfnFBg8tAFK4Qzrg2gAaN4CLVbFKdwkhmRLzKjeULCXS4Ev",
  "key28": "3BNd4KvnURcZ6SQhtBeNWi9fhjaf7MU2ZCuHPsZWQELnVEJd238c6BeGpHcEXb5bvq6JRNgNdAFvCD5q7MidJ8qm",
  "key29": "3df99p3bZb4xqdYaNWv8dQ6wmHNmDU6heH2JswF8HqFtAfRhRfjGC6577SnVvjr8e4gEyM7X9uW7RuZ1eA82YFrg",
  "key30": "5Z9eMw3LrfMR9b36DSAEZo2uL3nUduzZXPyJVUfio3YZSRuoLMYJfCbq6cNdgtYj6emJZrBCVHWZYQdWpQkhjjgB",
  "key31": "4RAGNdNz2bHJg6Vu5KqNNEdbeJXyeLWtxeeyzetXjobGxh7fJAtvtxS4dEGKLNkvUiaXgRLQDjcRQErWXvAEsUCd",
  "key32": "CmSajyuYFZ1cNMxyFp98Dkh7FkiTLZweiHNXczaYLEKniAmLo3itkJDZ5ancM33N4EbzFmjrRt6bMrTVswh9F1q",
  "key33": "67YZVjg29UAji4xrHMWodSonYmnrCi1z78VmYoKwmSaruSCCDSyCuwxqxeF2g5mJo1KV9UgCsC51WkivbAp2EALz",
  "key34": "dPDfvXw1LB83tgWZbLdMhnMWERLE7ZjwTUQSTc2pReT6fGHDaeQhDzQWbHv71FWwciq1MfdqdXhpdnLs8ppccr2",
  "key35": "4BgqZgi289hpJUcUcccoi3vzEkjhqdX2bueXPnwdF4WfG3qs5ieoGa1xeKxBt2agFLVMQiVvRFUE6r2sQ8bXZNiy",
  "key36": "DzMfbnkFFAJnC9DMYG6X34eTpZBjpKJvQu9RUHu526hnJZQtz2mkCYJ3JYuq5XQDKQpxBtDoWuswUvXxNTA28Us",
  "key37": "3mc6S6aH99NMXMF6MvHVbSNTmfnW74Y66CSwaHrNoaqre9U5nhSjvQ8UnJDgtJ6vAXphXyHFnGZroHWYLcTj7ZPR",
  "key38": "2QiJ8NAJ2vCnXmfESkWgzGS1tAMkQndbm5D9YmccPLzcR2ygHpNbGkivDzsTCeBHqCnKZEFWB5ceD2Sc7fgUmvuF"
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
