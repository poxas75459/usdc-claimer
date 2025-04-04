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
    "3XFeJ3gbtN2wRCHLaXamhWrAPwwGMkJAfzTKJvvQd5KwNvqp584RSFtwT2now3G76ks2dUfyyJevQxrHAfV7WM3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "291SfhSSxqowy4FZ3W54np33fEUVn4qpj9W8UgN4bTRdNfFFZaZmxFtSDg8dtkepNRd1ETuoHh2Ehs2FFq98t1m7",
  "key1": "2cBea91hB9bwAd26kthRzyVTb8WSKN62NP72N82FPpXNx1uMwazogMdeFAtp82Ys8cQYM7zkseKr76JMqsyYYKwo",
  "key2": "3m45nZCfj1oYT87seVRMQNqBJVGadHDtoPNQWpAiePSxqNeR3yHTqFSKVtX6LLx43xUyTVm8W1PM95Ln3TuQCiJu",
  "key3": "5q3AhDNSSNpVMo7dwEwU4GZqjNBzvXLVAWhqLMS5UTdFX5nVnFeZ595u6k3V8CfVSX9nt26t7SZ4TQbZ6GqLDbuU",
  "key4": "3oX1KMATd2Tu4pST5YEs8mSCWfStJqX1AfLNkXgv4mvN2F1QviXrLqMXnjs545fjBQwRV9SRRQ62zC6hNGdLmBB2",
  "key5": "2SbcVSqvC5wMD3n3rtPgjDA4Pf8cNvBThEF5y8QRVAsqDJKVASmiRy24aEBZjvLXMACxoEJPE3XTJC5cF4Rf4qua",
  "key6": "Xk5D4e3dPzns4S61mcx6y1RouXU8BUTavYjj9zGvVJYDM5qkYFCV7uBmpN2R8CoNZJ28y12AgwtDUzYhcCJ1wXY",
  "key7": "zGieuHbspdmtXf5W9yLQJLnUPaF4ZJQsRzPSfgYTcFtJvtLDzDgbf8k6SHRTJHYPeggc4p9UmVATULZLiwGonDa",
  "key8": "1Gbs1rGNgbprfxB8ZdJoG4fUPnkb1xtnfRZ8rLA5LmsrEaHASQQZAcmj5cqrgSBxkd1d99cFgGDMRWEJSAcxBNi",
  "key9": "51Vc8EMsKaNrzgcTHi9qsgZrVgpSoREr8ETPqa1LFPyWeH5NgaXNJwo35kg8FC9zn2FW8WfZGV77ZSpGGPbpmo2i",
  "key10": "4Dmj7QaEBWVttCq47kguGkJSc9Y5MtyNBjD5MXkTHJx2VpnPJ7JmjtmHBCnwCuAjYXWHApHptuP5YkZCHpVgUtvs",
  "key11": "2TqufbhARmAH3iWxBeRasN9NzvCBe7imrZwg4ZykszQKVo3CDoLizkrCJxVXsAa6uZA5MA6Zv7BWELekQgfXFgkS",
  "key12": "5EVE2LsLenB7X3BoeAaKsUEfPDSr5ynR4BM4NuspYm8uFf5Hn5A1omaau736mZfRBkcvzrMak9zPu35CR1XiS7GH",
  "key13": "3Kkrrs9dSnNntXJosRJT4Led5XLTKxQDiwgDZRos5WAyeoZasZqAXbRTovCdVbhTZXgWpLcTQbpZwLoBEnR3PshR",
  "key14": "3dy6sWL4y9xtMhPWDthBncPvBrFtYDohR42om5qx3uMtJGc6FGbHB62zq9CK2mkMp3KWWB2misKeGb4D1T6CQxwL",
  "key15": "2gQLBa7uGkj6jKxd2azgx9SoFx1sLF4ZxeqkxYfpHYxQThCtrgPAyCEaSjbAgrWNLG3amMb7onL733cAYwKX82Y5",
  "key16": "LU5t9MQWSoRuAQ93wkZTFDvwvLbS6vDSerVUd2p5p88QhXKeNDxJ4JqUkQ69qDQBeTjXGDT7aR8EqXKx3XJF3TQ",
  "key17": "kdBVvVzU3qz4AZQDaCMM3gA25wTFqv4ywPRBjNUeF3CN6UCXv8sUYE7wR1BToTQ1VMgsj9rceqXTPyMvoA73Bu5",
  "key18": "391oVh7eacoq4cJPKVpWECkSTTcw1EDKPFBi26roZDPJVKWjmqjiMR8jQ4YDCxK6Bbmcvmnqh6TrmwgxLEvrAp9A",
  "key19": "e6xYB1yDdXMWc6x3JCQ5KqjyY7oe3Rv4GPxQ6fdXBqYnLQETphK4t84BkW672zQcdnbLn4xXgsRPvmGrJxYXqMs",
  "key20": "61LtXmwzoHPTrqtUx6Ba69efgiyCK6CiSKivzCeHXZWMJFizQTwwnmmR79mhXcUy9fV6oNHm169Tqyp6K4EKhpeG",
  "key21": "cqeCEgHTyUoFtcPWJA1M5rouA2pAp1KuucwyyhJ8gHo6JbJo2rMBA4pdpLNP7Qmgd99epGED6WRbZQqLKAd62CD",
  "key22": "4B3w72N1nUSJCiFRJsKtwuEg8esYWRk4Yf8Lt1cmPdmT5Ycz8AD9RXyUxTxN77feSwHEZRYg4EeRLQ6ZAbrNVsi9",
  "key23": "5usxx8JP8ggDTxD3eZkt4FE6CUu8V7YbjscDWL8eibzDgeMjrmzRxTgkR3jyE9DRez585A5EzNBh6Qo1s1TotC4Q",
  "key24": "43S3yyAWh5wgrWK8cdfbXNtoRb4Y2GwkhWTLjWcvvvS5KTcyq8VSdWArAs5VHzYLnHE6aC1MUohLYjfUNV8T6SwK",
  "key25": "4PiaP2diaAFj3ejEbzo4isfRUxFZLyWctnA33wYsB6idE9MEr9KPNYcDdKM6vW1MUkyHwHRVhtJW64sCeWAjWJRz",
  "key26": "5tAsJvVp7wSHju5VyVTEcAE9vENPk2nJQDabpJPvAiBEJHpEr5AMDETjct7YA1nUmNeX2hGcYXALuntzUjgVwQDA",
  "key27": "3QFEAKvocvSWWBQdMGf5YEFp9P34PbQnLBurCKBFzWJ73PdrcgFai2xNPFx2afEnQ6TxJQsT6ru9Zukp8pbJFgTY",
  "key28": "2hccSqN1Uibt8NyjviXQS14MUSKQbuUmvP3SxNTP9PoRuSbHurir59H75ktpFaA24zFvbNt5Vc6FoZRbY5upieYm",
  "key29": "3gcUFGBomDW4tYo6rWz6NsHqPZTEYwo337ATZCY9bNmib3obCs3yar4NhdayXsf33pGczsJnmeTrmKBhZ2aXW1y",
  "key30": "AGWyczy1g7h2kubuzykAEeErqj7HVYGhPpwJgM83vkR9zJ59ADhESmRfRSxnRTy8Rd27JjWm4c3s5yTss3eB7rq",
  "key31": "uWjnqPDdp5LMWzDKj3BADSDcVf4tKKiqDBUa1CvSVJk6y4t89kmzkNgVEkBk7JZduYyJ2yuCX3cHfZEEr3HFosB",
  "key32": "44prdU3Td1QXWWz5YsnCkkrceYNgCabL8xz9dN1VYVZnSXvtT7yK7jHy8dC3ABWDfeN7UktyWojEczx21Aki3huh",
  "key33": "235uwrdM9vZRAzhmyrDaSyEBXHukP2M6VBXHThforRRkwqPzAfjCxXq7cbUXL2nfgCkYNF4gPSrUGfothHTbfu66",
  "key34": "5JSqC4tegu1xHWfwGkSSHj6XhkCy3jfDEiyeWvFajhFZGusbjrBHfm5rbyAwDGe6JAhB7kiWYZBMw1iQJ28fmht7",
  "key35": "uQ24ojDg2V7kuZkDCdKrVz4dm1BgFnX9TioeSZTmbC8SXuHnTNf3y6u6tjs9tNZCLJhK8pSz1Cj8V4CnQ5qrwZ6",
  "key36": "2E37tZq6JtHAWXuc2kBpb97EQ4YaZkdKCZn9xXruPCnRCpSR5d3qmBQwB1EUBUeYHgpVLa4bShtnxVNNBMfPvBkG",
  "key37": "pyj2U4UZyyGq1xQSsjWqtTw6EU1gAocKo15gw87rFcyAqz7UM2rZmdj4AVSquBPNbHncAwk2gpnmtYKSmZvfK2M",
  "key38": "KEpHUaHFQfWVBmwNoy5UC3863ZQfiDd1Src1A4H94WbWQFMzg3QQsmy8H2XCN7D2qgSKNmKyDfNxzXq7QgpBVP2",
  "key39": "2zVHFxWK7235Lf4wbiXQ1geNqk68uiVm6sWXg2YQjK3kfxZQMw5c25173a22yBkwxvhVQPxETNBt6qFtV9DEM4Tx",
  "key40": "5zAq2dMirdHe22cA7CbdQci3d66LFgeEADer1baJ4wa6aWi9UGaC4Mg3Ax47p2eCXoyV3KqDB8wMtUWKW3C77v29",
  "key41": "3s2ZDTs8upYJVXjAhGKeoXcnBTY7BAfoj4ozKWwYx9uUpQ5Jz9VxN7PB8npWf7vW8E4zbqVt5rYjTmzQnKpkuRvQ",
  "key42": "5Lx1TcHsvpcTkJvEbamUPP9w2cby57V6q8cYAZCr3mSmz16RAeKUEcbaCQUiCo1cwaGZ7vkdRmkoSA9pGFeYiS63",
  "key43": "2poBGvULktHYHvfE3BYSUi7xbZs6qnVmay8MrJtR46y6YKqhtiJEZaJ4YsSmPtjwwf4MC1FMoTgzoK4VtGYFv3s4"
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
