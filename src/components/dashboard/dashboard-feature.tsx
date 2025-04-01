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
    "58u91N84wL4xXmkbsvTuUoRPZ5JWV1JsXH8R31yrGk26rmsNSiA2ZJvc1zsFbhrdcz8NcKKkfvS23dr3L8qgFYhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CdbmRW5APhyYn6JssxJ2GE25tWAt1DScLp7XEMYoef624xWejVCeB4MZLN937CqWfC5Q3wWytu2oDFmFvU4ukpH",
  "key1": "3AuJuwHgSeMC4USWnZRpVwu3gX6cr9UdtYWUtuzQvHw3bbr7Cx82Mc8TNUzG6JwCNiXGeLFGsHQk3ngQxV3Ks61T",
  "key2": "5MCP3JfRH6t91Ce9Qik3DZD3zGGXm3pbSbuN3kgA4wgCkNidajGPvmuBZ3SmzcCNejPjz3V9TwngGmS6hzRYa5mf",
  "key3": "4gTjpmvpA94jcYXiCQ2NifWg28uN1U1crJYyj55XjNFnPAuMMnfm7BS9kJEWfY12AdAMP9eymCF6rsG8vJeV3rBp",
  "key4": "2rgBqo3JikVdiT3k58xfN3BPgPLev44coYDceCcuJ9wzwgDvFBao6amUycjmzEauXeSGEBYufvdRWHcWbqad1nY5",
  "key5": "5WekDknswT9kajjB3YAniKSJFTG7Fr4djKxxJwcwsjZCAXLUhjsxSzPpGTxNJCb98nqDHMbJkhJTCBFG2y9DU9Mc",
  "key6": "5hs8Hpq8b84Rrg7b8iaxefrrcCB9xgZNN7xmU5pmQRZ2PJqQwQXhGiXr47LxudxqsU7C9q8Doj5VdnW4oQ8ZwXB2",
  "key7": "5qxM6RjzVW4Q9y8kGKW7Y8JAZ39EoWw2XQnBKWRuE1w8ic7qFBsWHmHQerpm9SP3Jkd41XLpYRA1jXZ5F4FJNoWW",
  "key8": "4yr439cwgzTYAkxygzqCD83zhodSsS8mgKKNEK273EeLP3Fr3tpb9BmoqGjEDdadvMdGTam4E6oJbSpYQ3StVBVR",
  "key9": "TfpbsDYTv9FvLkfNxESFLGvpSEYRXqrgfoq2xqrLBg3RKbPYjGU3LJ1i2cw1h5p3YHynZJw1w83SWTEUNsYVVEv",
  "key10": "2AVw7K8AQdug9xAWW2ETBCrfTcwXrKXRPps3oPQzv8DdVbVx8Mwu1CH6ENHkKStKiE2UbN6DYpumYund2LFqFdnA",
  "key11": "3x5RiyuXbQKokCVtsHyJDBgNQUJTKD5bsZBr4bWVw7XwaBECfcjT8PPZQpvUVL97HAsdA6Er555TkH82CDcEoaCG",
  "key12": "47DnuCqg8L1xEssBz2FLXmAWYJ2ZCgHtaXZA4eoiDX5y1bER8NyziLZFzA44avzQdffgEb2iUdBptbK71WxRZkBZ",
  "key13": "5ikTFVcRSptjiyeAmDTVqtSn3TgKZCyQYXmkgtodCZ2TKVpKBnzQXUGrbwxfJhBSxzxWS6sTZwPRsrevUrUameH7",
  "key14": "2v1hMK7s4Nt1ciww4b5gHCdpnSsWUk9pGQjzAuHAp9vfJf75GSm4VXKfkzsxgivtUoL3ECAingonQEM4jjprkK2D",
  "key15": "3j8Qq7Kwn43vjFR65ixKhG6hiNx3vq5eEfqdrGwQd5PTSeCRP7Bg7jQgxE4FXnFxLaYLueMtykUig2Rbqye6Skv6",
  "key16": "MityoWHqfrfUd4aZNuirSqeY8VaVJ4xc4d86YZ8B2pAw5xpHsCZCRPuYZLRbqW5M2V8u1YWGEYdPabURzmQBQMj",
  "key17": "2LLbFRTZWZAUBwZT7dvCdsPpn7cF5VytTRa5dYAbVi5HBL1zVC6nDTbginsCdZwG6TvHTYZpEueiJmE7GfdTYPSC",
  "key18": "QZtVErPxp6MiRYyWaqFVA3G9rDKhacfXxQGk3vvhZ61srDXuGvRzLwA75RPEJFjM3V3PqNQJ3hii4j7ZjpKGcbR",
  "key19": "ABdLddf7eTRqFiPadtZub6xSVaLgrRSjVmNxpTGybrqgvskccf9d5t36jm4P32fRwVLLm1pzrjiDJa1ek1BhukR",
  "key20": "4wznEw1VZSYgGdCz2YmUY52Mv5oV1bdbskmLDwzCMt5myxwtTEyiYNP2WHzwryQUuUFXMkiFsRuZr7CQyhpjgx2a",
  "key21": "3Mv4MsncWHV3TJD6TWbJckTzAG8U9NAWWTgiCd3EpUyCqSEbkDZu4xmmMLkFRy1gk6jKxaQ8m1xrmuk3zGX5ZAgx",
  "key22": "2yCB14uzCcksvgAVpFtYpE6Pojsuos3xqEyWyenWzUhTfV2m9SKL5LZTWnma46owytttLA2pcjybaxu3mjnQpPEt",
  "key23": "4XMce5efqh4ySvfjbca59Ba3jTaXjutW4SonTv2MhpCTFVCNsu3yGyKRxQdgyi4eUE1cfFQYMDTJABuFvSMLyujN",
  "key24": "2o2r3qEWW983SYSPp4z8WC52MyY2ShwP1WVC3Nr8vEbtaLN2ckPoLAcvKdgPKZ2MTEEkZxAnYqz49LBtJV77U1aC",
  "key25": "R1gGGuJk4DaWeMBcPuUYkgi6vijfrovt31QiytwyQzHhDSvb3ShARGfociF3xyxT4BJtHM3X7Gd88wgKcwHWSYY",
  "key26": "C3AakTyRhndhsgGqBKq15duYo7VnJJ3QiDfyMu4PBvCxVoB35trWuSd9GusFrks2KHpeuBeuub5q9aynsEoM3tj",
  "key27": "3uohepA6h31pMTxCsUyGfNEXpLnL86gFTmdRvC7fGHuYw8igC3PhMtGXgSimmGL8n9VQuJC9MfizKXNRcKt9eDFZ",
  "key28": "3hAvaLrEuqxCtMYhfn4Pez61cvVBKtq3DDZGjSpJ87roC6mqtcJFoYYpvRr5mXjUfJ9UkZbxuSUe8jFE6eDY2eMy",
  "key29": "2WjzJsozX2yqtZippYxcc4JcE5rMbbfacXCkrWoxZW1UAsFz1Miu9YgAkvT3yuoXgrRBqyLePdq4ux4wqBgWFp2X",
  "key30": "64YM7H2ctT2sB7ybekER7ApTYr5qowuEg3Zh97PHEGkFfy27HcKffMDTVjMTksZUizQJCJdNgJTsSZ51t9xCuXrP",
  "key31": "5WRQiNxZkuEur3Y7VjoSaLoNcCcoXx9rk7a57MB5MPw3FMBzvrJ4CyWnagmpag4XCUWuk6SFhHq6w9CP4d56bpJ9",
  "key32": "5NKBuHjrEh8nDha2yzBaVhEPA43VggWZKxq28gkXbV4cvPEwAxLWvvkgahWw63hC1RfxTG8ENk9aZaTWNdsfvRt9",
  "key33": "4xzMpTrfBFBnAbdyrv3P1q5G85e4cA19yMPuhBJMSvNfirDwwAZJ82rWp9eG5Qf4UPrEaXmQbXkK9bFpF9YNdDyC",
  "key34": "5qfUVjKncfSRzpT5a2GoasaGRg81Z1ntXPqEsbfAbwQkdTPjY7STWHQMNgLtdUFpNWJM1369k8HERMzPmaF9xAdw"
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
