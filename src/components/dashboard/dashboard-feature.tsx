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
    "39UKZKMkDDTCPpMsFWh87Hz3yuhkbDyiBs7nU5VAaXYAcV532UckKd7x2Jn4vJtkCCxXYn3jBpiVMBk5NV2mj2wt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZNRtzUqMAGJjsHeAZ9HwYrVXtYc2uSYhLU1qV1A3Dym4Ywico7k7s9KevfuYu2C1FhH2tSaxtHRbAd5V7wUPryA",
  "key1": "2sFWz9uegfg5x4DuhQVJW98D8XLnLRUkGdJULBWjMnLpTbdFW5yEYL9cZfequSxtvaTzBQu9osHz3jg3X3Rh5ZY4",
  "key2": "622kBamdLnxztMCC73bhnAgagTsA6Nc181k5nYL32BwWNaEXhrobWezsxUaiFrQCZRh2zMz2ESDvSgDuXYQjQZMh",
  "key3": "2Q61oD5s1zgd3tTnkXkWLC81UurwXeX3cuMdrQB8rN32xoTKb2Pr8E852yEVLQ2RJRxFmrhDv1yzEVdxkpBDpJBm",
  "key4": "2ywUyjv8GX5EMPpQMw7n5Km3JN4BDcbFhvNWRLBALM9L4yPzwVdVHZBer3kkffjhDt3xmo7vKQBstsuWGnehiqGD",
  "key5": "3U315va3n7nY1Yg2nLKywrzvpDU2wbmLQF5pYa4gVsAMP5i1PpFbmYMjhMRfJxmiUBUWARAQTqFLfm2QMnv4u9ai",
  "key6": "5LY7FPxQzooPMsbojsubRN4kMwXngSXsQV8wpH6BrTt7k4oHom4SNMDEMcmDFwUJSTkX65FD7EzR6qjK5HPLjVYV",
  "key7": "6wacXqdUJCbmVjeLh3UjLYM8ossCx27aMCSkBgk9cN5XAWCJAh2PS6P7iLc2pHP171ybFEhjF6tEHHVwSjuCYCB",
  "key8": "46j2w8kKpxYnjHrctDuDM9uJBJ9ocoNE59XQ54arQykxaE4qCBrch9xDejD33r6MR2kVDXqsqdnYFr8pSQ1Z9HdS",
  "key9": "62pHpTwsHLCJUMv3C7b1o3mSpMtU1rFiG4uUnGPCTcQXMBo57C5Vb6DKQojV5nTk6EZQ5gCYGzXszXPoz6RTsVpz",
  "key10": "3kD2TYvaf8ZeFbeCEWbAVjBiXZoMf4B4dRQCpEpZfx19NAn21zE2Z7stmrU1jVaDF6ksCUtDsqFdKateMcC2rP4h",
  "key11": "3t86jWg9gAN9JGJNHMS8cfCtunodj6vnSi6Ne1wMDXhZrD5RjVm1KcGXmd7w9y91aS7rUQd9RPUDztvBqcyxs4oK",
  "key12": "2Wnv32U5mgGaQu5zSRgApyzExAZTEFqcXRZhgNAPu49BMKNtA2VMJrXbGgPAZwv8P7x5pWQwrhTk31UxnKJqpCfa",
  "key13": "4aueiSm3RnELH9JRF3PQQ4C7mHWdct9DyfqqTaqse9kzafesW6jPh2f7tP6958SCUcRHsy1pPcKcCH7MTspSdPdk",
  "key14": "8uk2zojr7m1EZeBgE7iz4hEHjharW2oN2ZuyMtu1GM249objXCagcRPZeAhZxbdTX5eVB77t2D4wVPGA4Pvq5gF",
  "key15": "4kxvSVkFp2iWz7PARnocPQd2UDPadmbht4ct6xZwxuvXeCSkEf6GcNoS1n7eBGK6pWcWvCdzsd6xsc18Pq7J1cP2",
  "key16": "2TE4zjEqs1TMCNMQaw7e1hocz7688C9TQvooGjkFtkRdCDqXb9CmqhANa8p9UuesrkZqfMEpfFP1Bz7328aJZh2x",
  "key17": "21mKyLAeg2WYtFBa9sFmBTvDJADfPwBRBn7ZdYqzwCDAXXRJnNqy4GpWreRWHkbiqfTdWQWws9FqewBSV2VydrzK",
  "key18": "2M7RFfasrT52bqphuGeHEv5BFHsALtSeS2TH97NbZxh19A4Tdj9R3v7kH7dbFHeivi4yLoiqF5h71vVGNPd4NzEW",
  "key19": "54iafCfwfqzjbMNYSV3wmhSt7UMkYAsAPhoS3rNARoKCa2p2GW3PNhnG9uNQ1nwLThq1Nkpf1Fh4KvXF4XfQJn4P",
  "key20": "2uXmk8qJ3yisTfzAJbVamLt5YvgwfDv9eYZd6HyuAduWWregasGX4ouyPSg7hhGXLjui6MTZ9rJ1729JV5GtCyfi",
  "key21": "2dEZKvHb9r8uJ68GVwWgShPn1wwyreqBkDhX5qPEMxiNhNKsnutwVMbShGJSyN3cu1VLj9e6kcMksTMgxuvDLU3q",
  "key22": "3YBqc5DurWvff2H4fbPgpEdxMeUbjXXjNHTUPdXDSU1d4CAkokeK54ngSL78P1ycYqRUDUeMZDeKR3pW1uNj6FQF",
  "key23": "4VJtSCmKVj4AgUneJhCAkjQvpUC4kemffu4WZh3x9tNbqwpjxL4wvebVVLWhsf3DiMtH3KzLZt5AMZCFZgHqffq9",
  "key24": "4PCzsDX4a3Rtve5366maE9Q2qjERqdJkvwyP8KYcKyGyGNeTstxYd7TjPxJrj26gbCN1EFLzjb97HzjrxQC9a5ka",
  "key25": "4MmXfWGnyca9mPsoF51YqaZwL8f7BWchyB9VsBabLgiZtMNP1pgUVpK3MseGgm8VBxXunVfbjQvzwLp9gMNxsYax",
  "key26": "2dGJbZv84Bc9vycRgag9xydNYE4WrkE1GBhpkLfV1f3Egz9PG6g6EMVLqDE1gefSBktodhoMGNT17d9UysmeBAMu",
  "key27": "4dm497BhrdLVFhmmoRjWAzva7Fexmp5xgr9WhB329z6jW4UX1VL3pVQukZFVhgMxN6ZMDKDGT2gmYjjduYVBe5FP",
  "key28": "2eQqrJRTaSX4J4arY3RxVAfURuR6mF3iAoZwQ7WJgPUZzcWm9cC4R5CfGvCuLU87Z5SwnYxL3AptZEppobEX3E8Z",
  "key29": "4c4JHYxcLHWYuWGh972X7LjwnTgnV4kkJPZc4gWx1C2hXobS635rvxRcnPQpisPnzJXYQ7nC6rjUVG2jMg8J5pWM",
  "key30": "67eQaXCtQR8DPmr8Nfwd1ZrG7xoa1iHUTnMBstagKPTDWynyi9HgjRrALyjKvjFx7qWjKbeDQm3utVsYAP8K2i2F",
  "key31": "Vj4MW5dkdy93gKLRmTbEBPq6yDaYhYoKYyZc5S28V2Hzi8jXgET6QPbVCxBucZhUPp6ZVK9h8f3BB6V7tEDUvq5",
  "key32": "25GhqTdTpgRmWqyeyVU5PwAzhvm95DbMoqgXSvTxZ2NADVUALJsJ5TXBSRY3UecTUawagg1ayvuYeNRFhbb36tqV",
  "key33": "GJSpJDdpG2P1y7FUE1ko6NN5vNMCmdEVLV4Q7QdTYxHsY4f6Hps3ioEFVRwxoPEYQifiEcKZjsuuXAmfLtNAWCA",
  "key34": "2qPTuij8fBzHWu9skWc1ryjp7vzXLd7rt6yK3A6kumXYonsHN5wAhwq4L7MFN7ctiPzJDw8kuY6ARTdWYpUTd6gr",
  "key35": "2Mr1ritGMJ2KGRueEp9swyFTySRvjWF7CA2SpqE4TBWwjHst6YisiEjzTzbkQoh87xVXxLTC45h2Y7p3GcKWv3rw",
  "key36": "2nN7xbs3LN4k6WcA6iQWh2bMxCEqkYPHTLet1Df31EUwLr61AfDV6v61sBZa5Ed3eyC92XJdMXkzRiwMurAc5J12",
  "key37": "2Fw1aFPbC2c1JAEjfF83Ec8SmG2aDQmqefRyK8ZoDaNYqdwudj4woTybsnopUJja7atVaAvQRvpjG9njVMkNVv6k",
  "key38": "4jgWfDLC5F96LU2JRUMWPLkSg8666Rk5LaAbrrzvdWPuehvNhGd5aLZ2v525krBbJjn7yQUDvs3dgHALHuMRL2NW",
  "key39": "4Kg2LJpAKpH1DeFpyDqpw1xZFyW8AQBik4YB2nW1qyBHTAkb4he1zUMUFgWHFAaLZx4pGWHQsdQE5T8sL3uWBuJj",
  "key40": "3rVoAWohmp5QhiUJi8EP2HCuXBmsN6LixCW3qW3g3Ysc1EDTXajGowQjXQRvoajbsQ59nATA6QrNFvRDPtLn9JEx",
  "key41": "5hjE12aKwA5gHUbqMSnWmEntUa4Ex9bY8WjhW1NcpM1e61YckPhQ1PyKtPUmGryZWuxRhHph5ZyXySBi3YBbirta",
  "key42": "5R6uY86oiDNREVxRUcabEDvmfxhodafQWw7MbWuLp3MWWgr8vkYWBYzqPtqZwwLXP3A2eZad8i33yZeCzwszck9A"
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
