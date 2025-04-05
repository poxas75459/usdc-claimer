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
    "3Xrg88a4PUXVihia5FYBpqsySVxtV9RfZ9M2VgH3f1wb9df4HpkKSRaaXufnNqBkkK5ipL54MGfqbVt2xryNVm3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jj2xLm5cmZ5FZ1LHM6c58HWvMVsz9mrnsFN9kJUBtyU1jzTxfGUXgQNR9f6emdFKSGXWfS38pdhQP8jNdL2ZZWi",
  "key1": "5btsYwGKzZ7Jkt3VjtfpMwk4y8j1hZmpXUs7LNfUF9wAafAnLoGxneUaoPiE6WEpNqmTcHs9b95Fq2cj6FocW3E5",
  "key2": "DmT8oSzx3zVAgrPfXwpz54WRb9VN2vWxBKpdmh4pnMcH9L4KdgssyeduvxKXAAQiSZWVcVftrX94ijnFRBoeiwm",
  "key3": "4xGtCVZX2uXbK5CP1AyAXjwRzWbqUhTKrcysyZPDpQHRdKmKrKX9PcNdoouiGJthNCcUubHVVu7oT26b1HWdbX1o",
  "key4": "5a4nk9frhRcwoknhYyHSR4YTWVCek2Ugqmcs1o8DEC1h4d3jmccAo2Mk7kbxMChopVxp6Pq2LJFVdQBfzGUUGk7V",
  "key5": "2sAUC6xCeHmdQY6g24z64G6uLRnFyz47aqUaZtNm4cfWtMkY9VcoWNnpePUQjUwreF6Vpu8aAKCdrxDfyXY2HC4Y",
  "key6": "2rbtkUumTUrk975wDoUGx3QbQzNw1v2BRcaFgAbVm2dBL3YNi38aL9f75PLuJjVhoyYxZ4kdesrQLPgVmU5FUpbb",
  "key7": "3yF3t2sifiTUD4uRRmVpFLwbBjHybG69uXhxvuVDS34MbogbXAxWxFpibBGnbtpUwp49VyBmdNxzy4eDpTvaQxh1",
  "key8": "4uv1Jdu4ewDzgoTKJUc8jHv9p8MT3zjc2DXK4p6mCmqbYkL7ZUU1oXnsvD1reneyGCxF6yszpXxJe9Y6htPgmKns",
  "key9": "4vAeTgAVJnU2SpsHDWuiDwdwmTQfgdVUxmKQ7JBTc8DQcbxJVjs4pT4ZrsSWFNBse7F1VZpkkjFNZsoNBBcFew1K",
  "key10": "3SJwJNjeLDMKsn5bXxQZZYQ6kkR1SAbernPV8KVLyLpiZvfKVF4K63fdWRjKmgbdWh5VXdeEYFoKTC1pEtzybs2K",
  "key11": "3WR6KieeEdPZQTrzeioL73a5evbaJSXTaskpxd5g9KfqTL69CnW2Z8XVUE5t2qYaFphoS8cRQ5gAYCuhpApZPxFP",
  "key12": "5QQB8NazAfYd6KTkdzT9XncjxY6ZAF6LMhq6qsDeRkFiLFrCv972nh3V1M6ngzGvLwSfPjTDhXh24rwZKeHifE9B",
  "key13": "5BBfSGbapNjwLBM522g4YaJZkwgLCqtB2qrtL89xpjKmriUAZphpp3QcDJp2Ygbt55mJfiZujQguuApmB5ScWzgN",
  "key14": "3CCZeVEuV8pAab3RkmH3ekDBz41YxrY4MYrAdK7YTcq7yuxGPbGtihFaGGTWihQfrTwcUbVkukGRRcYLeVPcamc8",
  "key15": "4sw4e3KP7PMVgnWG54Ng3QPGTZfLx2wJpAx7rsshnwkBfErzkzyLcLFymnXJTdq5H8ZBofYnLeMC3e5kkMHCDUg1",
  "key16": "G5z28b8UHLFZmu1fWiJXYFJjTk1b4exRxJxUgDjgo5dwrSVgUUGhdJKR7A5R648wRuKw2KhvMN7DbRbxesj86rj",
  "key17": "2x3QVqzk25wy1AqhS7h8RC5LFZNxuBYG7uaCSLfXDLQg1LmobqnGpfvQA9bVRVxcPN3PEJQGu4Fk6qFPwD7CUbAM",
  "key18": "2rYkJ4SXYkJ247nUKR4Z9nwUibgux586Z9HFGjzXdRFNSr71ticrYqPcRVU9WEFc2739wLwt4f8x1jHVxvCNnHcF",
  "key19": "3ohSf1YieNRLbWbxRuo1xXHfTBPpnmhALKLniNS7JPxAJ8vdFLtf1RmmS3S6M6HTxSbgrEYVjJwU56r9L6sccohA",
  "key20": "5Qg1e6hzWHYxwY9sMbc7yL1CAiPbSNwn88HJ1SfwLHv4HtujM1fGsGUAMDJ4WUwLB4H39YFaFk4VNv6WN7ouGmh4",
  "key21": "35g1ugmKXTwZ7n2d3Aqvo155MdNKEWuYfk7FmqMCwK5Ee9eVUJq7VAQTLhwq5kN7pHzybZfR77fa3oqK8JkWU2jH",
  "key22": "35hNRtWgawmnDDdxrHVs8CqVa5yTor7vFSKxDJp156Qn6x1PzbyyNUm21M7D2mJenP4PonHMuk9vCwA1MUcjieD3",
  "key23": "2MiffAVmQTZnG4dvwKpsScoS4tS9zYPEixDq4mvCyDLwqh2KcCQPPXnF38UbThAhGuT2CjiZsfr4mgn4khvdwAPE",
  "key24": "5CepLpx1j6uCy3SGRaoVWrNDWfdmCJC3Nw4X9jfFzPWELg8dHG1wK94yc7g1sYHjvrgMJU2QFXiZCdwCyFN323My",
  "key25": "4xKeY9Q9ycSoS5JtXGARBeDXwdHATqscyJdcgjfYekofWcAEKC1fHkxW1woLw8nSH3pDQjUjWApD6apnvdcWfg4A",
  "key26": "5TXKYvpjNmC5oa8bB56esMyCe8WE6QRQd3iEBoBsu8d4ip4ufPkwN5FtMJeF6Mn5DpwvBJCwD3szqy9be9E6GyfB",
  "key27": "3xKw5XgMKhixzHxangkjKhsF2cpjKkjRjeSerRxPgQfHNQaYZT3ygkKSSZCi7vj49YTjFHAcnY6WiKvHVFFL7TxE",
  "key28": "3EiYbMx1f8FCLNXQEyeuNxJTLjbgGmduLhTmmZeD9d3hRAAFxQzXTxVpTZN6JE1vqAS647S5vvZjvRxCjQPrniyL",
  "key29": "5QsPUpq8vwZ9GwpWBTbLv1K2CibVsZpvo8CemHEc9TA9enPm4eciWkJEcdrbghvc7ApZY72WMKb2oYkUHVwVgBr",
  "key30": "ZcCptSzVfVk4qFsexhe54w2dDYqjkRQ1FoAgN8nMBzkBTZ333FBzzC8vhSkArQrM3yFg2GHWmcmKFfmpcViPVZN",
  "key31": "21cENe8hTZkFFzwpCAgYWjtAsznYQ9ttjDhVhLP4a2Rcbba3bXG1TzXEQhUx86BFrf8KztHC6ZG56tL1S1b1rND5",
  "key32": "deoyDM6EWwsB3nEFmFYGzjpKVWg41ajrWbfUZzcGuK2b4RpiR3YvKeZFiqHGXe5UJeqRwkd5eoiimgPWFPLaT4V",
  "key33": "2JzG9ZWNB41AzxtNYgc3CZ6p2P2QhhDgS6zZiumg4u8xBqAcGbgzoFS7ixRJ43tPSzVfiECxAZEA17bXYgGvxLgm",
  "key34": "3pC4ierXr7iCP41jecQJCkQaU7YFGsfzvsmLfeo6yoSTjuCxYonsfuc9Q2JZanbwm2vQ5x7MwQ1Wa6jkJGynRGW8",
  "key35": "BNLMmarTpdmyET3dxLrFZvsHPPdMtu8P4zgYhu71TAGyA9Rtr399rh45zwZkife2Ns6UAmFZndEjUR2EBBCaWDz",
  "key36": "5k9P8y7TgKtT2K9XqFwsAUYTSpkkFeWTdTuBvaf6hN82iG7f5eADHxgpP4GWG7mJqDihfKf7gbjgnJ4MKQBKWovg",
  "key37": "3gcvbDQwyHWvp4xe6jpxtpizsKJ4rB6eSvuFvXEqN2MJaBCHGvmxo5e7E6qtaoETqzwc1RmZGt4d9adXLcErcHHn",
  "key38": "4gvfbfK1jXDoSSWqXU9suSXESDDhnemgruPChzPzVtW4p7KcZYHP322BaBqPw71bVLQtGzKvAL62HQFNcyLKjoob",
  "key39": "2iGF9EXGn9T7RHZhhRtTNLVj3EFg64pVHgY5docDzksdQwgs5hTmxyAS976FsY1kgDDGLpwHs1WxPNsHA8uWu77w",
  "key40": "4HSVu8DFVw84u6cJR7hCNoovctbpLVhyjc5NpJFU9kydPXs2jx2USWJiKtLoN4T5d839b7dHbXrgnFZPuCG6VWw2",
  "key41": "4XCx29z5rdkksb5e16m6Q7ZbHiqsBagijE75DLkiLzEXPn26ZrwHYU2N1udE8m4HKM5Zi9qUh6E1XNW7dd4YQHig",
  "key42": "2HR6dyi1RAHWRTrohB6uguiWQbeKHjyDXfrpseroHQk5PYQ8sNcR25XSSdjYDeBSba9SwwkXxkzdcgpgmnvei8PZ",
  "key43": "2tCihJRb1GJHTg22awt7eWNEw1Ghg5Tey73RtdaSw1zQJzWwM4ZPKsQGwZu4Mo6mWVdqW6xmLkTfErzm6VtWPKXe",
  "key44": "4CaWwCbZ7EPz1TjZTwR7NGrWGCnTXskJUxMsokhVZRbqnWrZee2njbYHfgJFYzLJHXjHqfpdy8Mv1b8YVzjjAs8f",
  "key45": "3AoLD2pitNjxQULgnWXF2TvL1oxxNs7s77Q9dtyaLShpxMuRnabRwpT28oUntjj6bGQgCQyUDgRpJmHo4GQvtW4W",
  "key46": "4Pa71NYwDLf1PxH1d4RyHYu5eMv6S6hHVmFmPEi1qr8ModsYh585RLbpjkXyRQJQP6vie4yhT26szSw8WGnm2SXM",
  "key47": "3w7tDCrroXi9NryjBRgV4YSuEnFFJuuv4SnLSA1pFuC4sTbHWuX6oguK7PZ45yQT8KtPcmFBMfe3kqN1teKWKVKa",
  "key48": "175u6CosdtpeLecRdvsQpsVzQNbvcecfiaKtfdWWyPLzVLVAdVooxEfcrogXbufzuhgu7gAjSk4o95vmWg4kt7Q"
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
