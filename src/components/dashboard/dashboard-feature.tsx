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
    "5BYTpQz14JedP5ZTnSYE2fyBmYmpnT7HK7ZcKELvgExMyHyEbBtSSaYTNW2mMiiFVzrJuY1L7WWAt9hb9vcSMoJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46dSQpQBhYTakww3epGFAM4hcWr5izsq4uqmrHDzXaBF2LMufULP2yxSgE7LL7Pfb58KMbk5MEiRZpZwKPwxrGnU",
  "key1": "3oBMbL4iyoXsLNo5Y2zkuEgqa1QYmzhKBDPbQuU3TKtfM7CGSoBtBdLu4xLJodcpy3fPq5J3uWkJGssi7RGWf8um",
  "key2": "4HY1HPUanzmGKsFTytKzoPD6ebfj1bA7Zvuop8gk2Zosa8AH2NP3w3Ma2pD8RFB1N6ShYjdPKsbX6m22cUbUD9Du",
  "key3": "3wL6NpU1em9ZCs7yEFEQyD2UfUGWWZLJuoaEtd9vh9aydmU36sVhN198KVB8nanJsxWKNXdYyZGEL9oHAP27Q7sh",
  "key4": "5e2H2cEe2Gu248D9nSYA8GUX2S2nNET2vaHnTqdp4B5cfHmKCKJXRLTXKV9PCgBZHERePx397huU5x2gd5DAymme",
  "key5": "4CvGV6J6vSXZE1GmgCCyg43DzLu5Y93yFeMJv4FmUTPFWSeJvZQ6WKURw7XNGpMTpLRKAqL1B6Knpterpxf4Lv1K",
  "key6": "YnsQnp5EcPyQYbQY6xmKQBaFmAmnAPyGMBGyNj1JkFBgmqQnEh6yG8eCujDCSjD3eCDsMqxzuoqdsDGJRQejKh8",
  "key7": "5mMf1Y94YoRyeyBhEZTwurmBzJLDuhfpMemajgkFbBZ6nyCD4iWhGGFnPvscqAsxURoXCkhtsAomgfc2AVJ9n83f",
  "key8": "33sk5fgj51WwdnHgCiQCkttucmBx6LZ7mqysFdc4itMp3sMM83L8uB52uWkYSkoB76g8uZviFrE99Nrpd3yd4hjc",
  "key9": "2qqr1s3GZvoZLZN5YVT9RoAmcF5mCMNmJ8Na8L9b22eeWp1YZF8Wh12SFnmKN6tSp4uKFV1zCUGLyqzSbTV2ykM",
  "key10": "4v4fHDUDSTm66JyPv9MWDTxALFNNraoKxeSpbGvJX8Fmo1A2VUfgMhRVfysKKNtb9qLLHrH658aX48HXA32oXoPu",
  "key11": "3ViZbN7L3RGoLxkabqxjKkvWCVKk8x5gy5c1BCj9Unr7vZcUhxXSDkJpDLQek1iLaJHySyAxs29fwtYXJDwT4sno",
  "key12": "5e2txUF9svxJgDKt5nWCPpV151KUkLSQbNoxGok34pdvGhKxCac6ZGN9XoPwNKPPMhHQpMvb8kaVqykrR2pKqFyK",
  "key13": "5kcpBYBMYtQRJwdV2TZPJAtf7J5vX4tihCkrt6qSihT2rLUYqUviBTGJJBRzWKV2zWPsuuGWrbwxPWAEkKVtHCUe",
  "key14": "G1zH33qaCjE3SKG65Wf4LUSie2XANH3F2KKDQFeAdG4wADYw8K4fHMUMZW8qLLNuq7fE11rsSrK6dYXTPCpFVnA",
  "key15": "4znGTNHtdC1WqsLYpd8E6YHfo5Eq8rKe25pnAYjE11qJnwenmUd4tuEztbjjQjJ3BhZyjNZ7Bmpi4GnGDL3wi1Rr",
  "key16": "5vzLoBuyExn4f6LyHefcuZoJBeA2pcefM9mj38PRHNxybv2Ag3MVLdSCRgPfeq8jrpSiU2FFvRpqQtDwBYJghiYL",
  "key17": "3yfgwmMnXs479oa9nn5TQAZoPRviHYwjVH94aJAprc28EMkn8WB4sqAHndMqg1opM6z8NkoX9MGwwjKuuWCy4Vs",
  "key18": "54PpwcnEcA6G9cqKSuuc5Ez7CuEnTWwJBkJ7JQNjTXScWKc3NfTQgnMf9pbZvwhMqqhTDFnxLJMkAbioM8ASqM77",
  "key19": "5VDKpvmiavhHHBijfTqAGkWL48Zp6gd87tYAW6DGyjpk6Y2cFBsuKMCzRW2vuizRLXx7HBPt8CPatbqcHYwTnj7W",
  "key20": "4kW9zoY8Gortwyx7kxDHExHVQp8QrdtfpgZX5qeyyekX3TKzAh9dsvMmtUtvBeaN57Ydx5o6LVGFZhWAnYKZt7Sk",
  "key21": "5wXjjRHhqCctpPafgsRkTvNqGzoLfLxERipQiZXnTYGBFdbZ995v5Y2782NJqKpDgvzZMrHqgBzLCV1npSccnnFp",
  "key22": "3SvAn6SDCR7vnCzi8JZHvPQabXzQAF4LsfFZhNG3noRb3gqdA8ZxFS5NenyVoos29zCXEVfWjic6hqsh28m3MdDD",
  "key23": "2EbQ2opAAgyqJdf8hTWHw38H1ZXhEjrEtUt8F4a5s13p4ip678xqoJvhGUDqWRcaJuxDivwVvdpa8HM3N9ojQX1G",
  "key24": "3i9KYj6Ctg3zfob1P9KDZRGvB4dtSC1aikNWLzK5PxYhTbKxbDhMSsSsvptJfkDvG3asVEHw4G1ngTM2wEkYKWqS",
  "key25": "mpfkRKGeka8CBmV5fPQQeXwfgbwJh6rMiWmMniPAsGsUm1tuoCCn4C9yM8Vx96kdAEWxzpg1x1TDATRYSHRHneh",
  "key26": "2yNJDUfKQNiT5P56EeamPBoNnqNfqvKZEaeHNRgnxydW7SdmXmnYwbtBjzYG7i1BbF5ZtzHTMpk1kavWaJqMzWPr",
  "key27": "3F8aNSu3Sp3cJ6TSVwyCDh1GjR3mJ6nVc1ZxJpmAKpRtXMW96KBqxT49CHNXQNbxZ2ZURB3tAGDx33CNarYAtCB2",
  "key28": "5efgwYT93Ts99WGzxHiZauQGcQWS6rmDGEMCe3XQJVsD9xx92PFiLdHJMg6vs8FarUaz9CfpEKGkXyD5sL4vksKa",
  "key29": "4Wm5uBg6kAmEBajYFGJQc48Hqkc5z3TDw7JDLgePW4yzsjpjjum4zTh3Paq1tnrQSYUxBMoGgZAPYFNjd7ska8Rt",
  "key30": "2Dt6VhagojhP4smfGgX74q6GihwwT5UzXLaGWsgEicQDSWFvMBtsgZ54CzfjNjxVyL8TbxFw4oiEAXxkwvn26RQu",
  "key31": "4Lke7WsxfDGCzMdx3H4juhvgddVH3JhcnZDH3B8QzNSKW8gTEom9UBWVuEGNXFpVG5v1fuMzHk3GXK77VkWVLdGU",
  "key32": "4BX8q8j25kjgm5ZDUwMTKxE1e1EckyTd5E72RnpYPzdcvcmeZSYVUEcgaUVCDHCdQ2szdYBYjLdGp9As5tFZ6Fk9",
  "key33": "thT7YjTnPp6hZFDGxmaGkKHQowsu6JqDaiReMee5UZENKGv9bHqJQvS1oZrnVCmqD3YxCbmeNsUHcR3cgFeEeWv",
  "key34": "LFnRNTkD9zf3kxLPqa1gftSn8CbsBmmCvHe4mppdUJvPWzs1x822qRYqXRmGoN9FV3gxerDYczTvRLYAZoozk2y",
  "key35": "5nBYTi7dAj4drw8gWPWmViXXgV5zKAQXbSud9YpQ6xa8TrUDW5SB52Zi6jQmSvSJeSGMRdYvgqexW8i1j3FwmS7m",
  "key36": "Veko7naxqQy4cKGM2Z4L7XZcniJGoW2DkNyGuiaLK5vyioBFKqaC23688WSAWdG1R3TcxjPNftPD69R5zoa46ER",
  "key37": "5FWJyVLZ1Wdc17ZzG45dz9zH9S9yUHLWt95QcRo6M4ibASkjE1LataYmL549BQBTTSmaHWNYzi6ctxM7RGWtMVN2",
  "key38": "3jLsaxWMwedHbnR6VXDRvofiAgieGQS1usTvXircbKr1w6d2iNs2eeZDPDdynEsgAXWWVfTwWjNiwSjkZUU4Z7R9"
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
