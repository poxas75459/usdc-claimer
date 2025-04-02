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
    "WXjFki96WudYFpNT4u9xNuP5gLwvTY7J8B6VUQVQmNK8wfNpNTe6G9DRKsHReUNfhcXoeczbXW1YcLi4Wyd2VYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HtaE3AbEYcgyJbEgPrqitWadZut3bPXQfKzMWfE4Bv4vZVoHQjJbtwhsCPadassYpkZ4bVJtv8HXABjj641WwS8",
  "key1": "3ahPLfGNE4WDY5ykv9eYPwnXQTQSgnottjkaFttJpLg8D11reCURykJky3EmRWzRdQGYBMherYvwfUM7rsfsK7P",
  "key2": "382riKgv9mQwDkLnBt1UVfZb9cBrJ6bfhAHGGHYqcpj5NWQLR7ik5LJp31Q2V8UrLUkDhLuKgD6vMntqfBfzZq3x",
  "key3": "61Tg9d79W1rmm5mq27a8VVu6qkZHwP8d4Q6mt3DzYFSwdivupcraHkKNDnrXWDspQFTu9wE2NHwWwnESrcoweHyb",
  "key4": "3cHNN6Cskcte6mzimM5QXHx16b4ruFR3Gs6MBzf2auLXdUZCbxgfmPQt46joY5hbVrnH8FNoBbSHJuSuSGJvTpXv",
  "key5": "AUPHXW6VtWg53SWVEQKYH89PwHac76ug3sozEkyTRrFiGmw59tXPridJPvKiN3eMYH23r6ykPSuoXzLboBu9Ltj",
  "key6": "41S5zDnPWrw1Y6EoB7XwsT8ffvCo4zKHApmPxXqduSdaKteXXa1h2ejBUjqUmMtaXMsejRUiADX19GpxmuniLExt",
  "key7": "5CHXka9aEv1E9P8rurDR4XVL19K7eEqZHHpd5QvSrBxyAZq5mwKNMkH5pBCFNWfGYu9C3QY7wCjikCYxhRHyN4Yq",
  "key8": "3XFVwEVGJ785zM982z7EEuXkHpd1gjazCDuzm67ThvDnqNFY8pe83CYfHXkKhfWQR7ZB1JQRuPndr3h7b2ZMY1GY",
  "key9": "62ewRUN8wqR581kCSvyy5YqXF3V4Qaty41Ksgpwdy8FTzjLrKvtiFUwCHSSJLuYKq1eGqawW6NtygHc9xhpSCqec",
  "key10": "2sS2H2ndECpubgZzmwZQc5tJiwtPjB7dpLSeiikeMFmh6op9kc61w4t15ER3JS7wyNvRERKWQRUKuaSkWMt1NWDS",
  "key11": "vkQ3fuk64mucqrZ7vKoAov6yJs8NQtGRWogYRvBTaw3P6FbacdgKJbAo5r5rW3V53LeLCmj5Mee2KpqTr5kg99h",
  "key12": "45KTExer3F7pXxcknz9yW7D9Bww2KDUKeECfXcxS8voJVPEphxp183onK1YHGUxwLSP6U5vmcubPYTFrQ5Qs7NqK",
  "key13": "4uCJSxYA3WELRazbNBLy7uQHaEqduBQLtwvnDPJWsPYzSZwDir6a4NUWy6a1bBw1Yd5vNRPgNxz42vcmNbV1Bjz5",
  "key14": "5QTE2tW5KSiVKnERbcpytymwYT2ttR1gMZQ6uaUCbZsQZ5sXQhPDFnLJLvhdViW1cu5ZWWuwyoRDkAMaVbRVR8Kt",
  "key15": "5nyLJud9AS7udpQZDWN9U3fY7SWVhFoUKGoaSf2TWeccTbGRe8ge7Q3VPtbEK7mo5CBWWPAbvLxP5vnRnzWMxpBH",
  "key16": "37f8WmQwNhfJjAqG62RyCF1YGQ9hbDh378M4EhtPirQgWSdy8DN2XGMoccte4Tvdkb2yj33MQ5RifG36uN7Epi63",
  "key17": "3gGjHy1U4SXASf1huXd9kMuVwsYAeFTaaFtxUvx5GTDuEKiSipKNbkQvpeAHNSoE7RqsCfownGrftcPZJZ46vygR",
  "key18": "uwTDrX4ebGbXqQoKgNC5WYkWiXJ7PHHLCXj7eZjg9UGpt2Anj6JZZt7AUxWiS8ePgifvrFq93D2a8NBjVd4VWAb",
  "key19": "4eFFiWYy7NhCGyQrKAMLgCLyD4eT7Qfz4QjkRZxoz8wDp2mgaXuaLszE91AKcveVJfLm6Vsyh6FE8UnSQSNMPKpx",
  "key20": "49s1QwFJyUAkZRsbEbAAQttjForMTSApYiq7p215aiFFWDtBcH65zr5BLwcbXcupxx1AqsCeXKpfZQ3TPA5fYXSb",
  "key21": "2SmKdaAgmN5ThgR54BWu8yU7UiBEDBAhbhzCvtKXygK7hCtJpaMk6fq5XowJF7XiWCiBo8woywYFpeuAMGSbfyh5",
  "key22": "3nNU9uUHSnPxcrYhXAEFyMp197CBbNsBGyzohERiqP58Jhw3KwoHomved1rm5EyS8mg7TQmStZ6fkRu4xJFoqAnW",
  "key23": "672TBzBUkxf2BP3tyKw5NxahG5kyVwMQF9qiueJCk5f9KaogPQGHjPi5Z6wBb5sgrCDcaLFJZGcTftsxz5a93kBY",
  "key24": "66FjUyVXbpKhAmQmHz5vxMEj4RsFaDW93oQLCc9A5q6tobZB2FEcU4unqY62KG6cQNV5MQPkdxsfhZuyErx9FH42",
  "key25": "55AnnjpWC1vt69xsGT2aMKG3qLYapgvPEZYDuSfaFS4nBEJtHgZeUWCGjpap2GZhvWYVcjEA99NritELETNhPiFQ"
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
