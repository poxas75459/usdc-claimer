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
    "nAVcFzvTg9hPdFr6nSxx2xepkufh7eNLhAKhX6vtStXEW2UiFqHzPw2FcXiNz33UVJj2vWjnRPETBi2ZRihyPzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vEsbSi1sDzUP9AvboCHpsSeqeWi4x8mXFB5XzEzxTcRjycrYbCgjJNwM1ZveqG2mUaXcxMjjUCLDe855ueUrxsS",
  "key1": "R8mE6ZwopRjcYJXgjvVGpZ7GZmrK6cJ7zu7zKJwp3Fgt8MmkRMnzSZWvDHvAVzKqxyN4XkSp1jkEQKZVkHV39Ww",
  "key2": "4Fcwc6rr8uRrLaw4FrkksueTSq6xWpoKPC9XdBDrTjSQ6u6PHuSVpXJ91ksdEJhvKg7xwBHDivSzPLoNX68t9pPM",
  "key3": "2NNxk9QT5bt6X3oF45WGqrChG7GMCprgQ9fwdrsrsAUSrsviNTazuXUwdvkaj8KTzezXWvBqPEGBdP28hmskxXbu",
  "key4": "dfaafr9rZL83bWG3NRA7toPgsjGqYua1bQWxsEWDoj4rKerzo4RsU1KwhH6Urqm3PEDdL5BVT9FT19BCed7Z4xJ",
  "key5": "2u28muDFrtGeaipeVwYbC1tBr732iBE6AM5hEkKCLqVmak3pFGbcoJg8EV65PcGP5rKgfpa56LvDCKPJYk2pzzWG",
  "key6": "4Xn4JBezEnVeBiFBbdvMMBq7dxXWTQ4ZZcz1FCjkrGEHBui9qxyLFLo4zRPaDRoCktsAFXar75h3z86AUuR6bWBL",
  "key7": "3dMkhgYFup319h7yaC7YpndEeEW2t58RmZNx5MQAXm3VG8xaTez63vAYZG1JiZ2jStSGSypZvXssajRGFq7bKc6m",
  "key8": "64yqGJpiuLobcQfdbCvqzfRyZTYixPFLXAKPpfQVcyCZRhokcvwzYya2uvikfwXjsePWpHTFa6PfYAhhFtVTSJxF",
  "key9": "4SWe872HKFsjFCpEFxKnVQn43cihxBACC5u63BNtqdUx5U2fg63qRXCyVqEFBh9NEBEyaaPCYWuBQKRRoJm9j2f2",
  "key10": "DuwxdELGwgac6WPaFTuZVDikB9t5hf6du3RgWtJG2D7f7MLUWQZCd2N8w8esXoMszccVsvYzcSRQsdJtHg5ibg2",
  "key11": "4uo1rbmnSCzrv81oaFBgocoWHtK9AdENwz5vAMXy9H1eUCSts5JWLL6J74eA8tWSJtSmn4ZsEST4vx5rZ9jbMPZg",
  "key12": "krqsUyjKfbzD2mxmoeoyRQhn4vHVwj3CWVzbPRYoz1uQYbqEZcjDMiJowF4K2V4RRg7s2y8J9FqWQwukb1SmyMW",
  "key13": "2Zeg2uxBs43xha46Tz1JjUVVPhQ9xVqNqM6W6w2dnLqnGJhCh8DAbd34K26ypbGPoepjFPCRJSSc3mRctT6dEMTD",
  "key14": "5Y2SzhuzVxKsqmEuRRpTZCpxzGucA6pEoFpQwWmTzUy8H6L4wqof6UENhHtZKPaLMbAqVbbZDE6SujmDemagUJRF",
  "key15": "3JdmhdTwt8akEbiBEQRnjFkFixRAP1bc2f2nVms9zUzGjk7KboC9uh6XFWj5Dt3cZLV7EUxG74Kc5W1Q8ZhB4Edh",
  "key16": "bjeedUt4gP9jg1qGMLa8LBKEP6vzsBCBH3uaNwBc73RowuBFFZC2nZRAZbotRTBRYyoSntnfvfCRiEUujpD5P5F",
  "key17": "5guMMHKxh34YCxvRzc38Zf3isZW6MZM9AS63FcgR4Nc8RrsVA2uYNbuQg6311oMKUB5YJWdLgNiuHYL92Dj2xqbN",
  "key18": "2WwoQNrjHGNtneV4jgMFupprT9Qxr3atEj7devED6SKwiPfomBNXP5fy3wUQbGRFddWp7M4BMoS9KoLtbceVXARG",
  "key19": "57E81fUChuUXrXyjBchJSnbZYVFkVUDRFDgTBctj3Q3jca3qm5CaynPu7bRZ3gToZt4ZD67PG4kVm9cXbSxzEURg",
  "key20": "3FoJpMDnNLXLLUxJ7DL8mU4afQenQn2aNigRcF2YU6hyFQa8Yc5Nba8NW1jzLZjYiYGXnf2xBXz9hsVxEuafxnYk",
  "key21": "3r6wmJV6xe92w4eQ3qZuSYM5mqGJDEyxQE9X5jE9MzQLyEJxWQSbDsiShBo9TuyXayrCVaedV6xPiE5pDXuk8iYd",
  "key22": "4tdd2WrVH6NWaT1igoK5jXjNUz5U4T43UJ5UDc883UCvJ4Eok17nBavvWFePN6XbSgbyd9hF8nMT3XjKRi5VJj8B",
  "key23": "5eK13wpkfdFFsnj4GjRNnxqYA93PRKigSNWwjfrKofLzkRxYbTgjRB6LAAURMQUDPMZvMMxW62VQ7ZcJdPBmzRbr",
  "key24": "4SPoVnzkYqRvStkow8Y4Dciny7dvACzJcxEbUda4j2v2LhqwCJrP8daVKBZ49BMo1FxShYpF5pAgwfLVwR5f8kzQ",
  "key25": "2c6sHZw82ttXpdwMyVB13qiHXox8u6KES44zkDV7LFp3uWkaDWpM5U2qjRDD8cW4wWQ9N41x96DTmkrLoNsxUgXB",
  "key26": "2r99J8ARqqbvZs8RtuocG7EzawTRubhK4f7QoqT8zwvNVvJKUxpkULsW9VrMKgoDsQnSetxRxBTzFWmTYdwQ5fKo",
  "key27": "tvSW2sVr7wLpdjjaJQvScfXxDv4FpknGaKc86wPTFErzctrxJfySzVwMDi2LZFPGe9K5KZKnsgiQNub7fDyhp66",
  "key28": "37sA14czsH31QLSBspHZ8fLp1TzNdLJkom4nWRAcaop8fr6X1cpwYX21Uv9pDDi2ifbis1qMcpHjqM3R5rsK9QYG",
  "key29": "3ZfmCGYTbJ9hUrdTFwfSZE3onrVRvM94EBwNSZx3GL7jVBrSmZ3sTRTtNF7hL7U7tZmE3cQ1VppjiTPTY6jp93NW",
  "key30": "3nwCMkf8WXSCkua2zbvVrMuzdLbBaWhFxNSkwDhYtHH9Evjt3UYMBcbWUp2NPcTxzHPEFDpUh9iuZvEmLN86nVoz",
  "key31": "5ibbaQZk3pRySr9Q7oidmSR85Pfmoi7oFQahzDY4p5wLkBnbVtK1UWNsLjZJ3tyGxwgCmKpeoxAEApk1F5aBHu2V",
  "key32": "34XtCNi4mCzMtYaWyCW1ZvUyocDkwcGRYk2gcP6PwyWvgadzGhgQwCdTqq5ZotntdEUtoNZdJsEQbAv2J4JbxYtp",
  "key33": "5eexzMDaUyo8YCXkXeZHJr698Mh9LWYT7eScXU84gFsgCFoQfeRZ3SrxjxJWtfS9UFBPkwsh1MsGWRJcUS2AgzQp",
  "key34": "3sfjgJx17JezVMYH1AQp8iC2JRzp2vXibnr7MRUEsyoU6Mbtaaz6Z1qfWZTvHp9L5fHZ8BKuABtcwSzpc8xuJkLc",
  "key35": "63nEiQxRWbyxPWX6jARUbfiBiMCz51kvcpbo7PCAP2ALeYAzg9W7KrTwYCUfWg5zbtaGeJW7gwFjZRaDFeWcmJ12",
  "key36": "3WaFkSWWnri3bGwwxcemYPAMrcnLXZ4amGuSgNBbeeRcwVgEyGyrhb2CsUW8nbEdtuXf518Tjfs9DZzt68DGJLh9",
  "key37": "21JG54NRZew3apKmeLRejvbQYvXTrQdjVHG4LnN5ojPtieypEnSFmmHYgHjgK5vE9jXeK9z7ooH9NfoSpbayTFaS",
  "key38": "571W5jrQtoV8j6SLBm3bBRewJgqxXYBRqVcBuwVQK9KZR5c5NfeS89FdDtd3ZTYwf95xUe7VuU6mHvVM6LwRKWMV",
  "key39": "3jH46nkoKSQ8EYbhbo4BdYnycEtgiYZfeqRYA1esLiDkJ6bULP2S9PUoCTpx1AtfcUg67nwaqwgKAA92mKEuQ5gP",
  "key40": "4HFa91qwXtN4mwM3NfwjgbiB6fwZiTspqDjBZ9vtKE7rSdCFs3zYDoupHnRPbyNa7uLeMR85H1jnNrnPQKakUuNj",
  "key41": "5C3AVwkosSa3ALPnAgTKsHMgJ3oGocNJPuq6ewBQpPRuqStpvBwZMhLNLMKLhcfBhkSB4LiEcwQp7VtzKVhetFS6",
  "key42": "5JypjRrJwEFhqPhzR5gqVDeKy5kpSWcTE9yPiWY4yJgxeqtVWU857EDdca1sUzMEqTPR16zV76ZSJvX7Pu2rvVS6",
  "key43": "4YKzDpLujKdBW9MzkidjbDfcF4ETUt2SxkJQTG2mWYrtzP1pfihnSNSme5LSQTjS2wn1JTa8ZeQWmV4LFT65Fhd3",
  "key44": "7vsJU6bTbcJqSV8CwuZcSVDLD4vZGs5mAecvbbKVGH7Vb99ypkY3G29jNWyERZR3yRniZWXP3U7M7JcXcXm8coY",
  "key45": "2LaVCnoD19Gy4TdQt7BRj9G1XWdjjttMagiYeFrdUsgf4p88KSm7BiMpAxX3GYwQvpsrRXf19B57yf9KhwaFFsJc",
  "key46": "3hZgUBUEhiHX9m1aSTHqv6gzw6PzrZ37GbE7zhqKoDy9axHVb5SL3MWnJQBA7oCogcQctUe8A39yJAcT6y2WZaqX"
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
