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
    "dT91M7xSWyMGxiPyHVDHCQ6SbFKadRhcMJXVDezYSZ9erKDeS1DZNSu7We3AkTgc2bfxEwQBmJZH4tKeF2gxbVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T7NLc6kEh6GQQecAakNfXGNGmKyvnu8TikPkcUBATLcH5tfThTAXB3Ck4dZhCSsgwuXdTUEy1eQCX1bJthPKSme",
  "key1": "3YhTjmSWW4cuPTSegNpJd2neuvo9MGPd7DzFLr2muHduQa3Qdxff8q1tTwXfYnrLWnL3nCNDFV1JeJZfuzShDg3p",
  "key2": "ncxpQMH3pDXYza1yj7QjkZD7bwLuVogtUJiurLEAUSQXPDhnamyXpYpQ6d7Dbi2BAfQHt8mSGRnSex2e1ggDDVn",
  "key3": "5rDYiBMKEiYy3gmCJPzhbUL9hY5RiDg6RkFPMWHgBznCz2SsMT6YMEGLmhgcT2zMr2AQuGHDKgAF8NcbuvKbeff4",
  "key4": "2N9e2YoccZ3nXYTciqEzPhaURqXKGzvjLb7CivEdcq646bK8dE48KhfKjuYrHqRpYjMyo2dmChrAVrcqUcCpKAWk",
  "key5": "4Vk79VeSFZQ67uCEMFqsUnsnZH4DUykqQ8S9QfAEssJcZDUTknxgMU3C1BscZnwhUP6mFKTfZL5c8vjjD1MFkBUZ",
  "key6": "2GoVi8eQ8Au2SXwv9fPnTye1wzuExYbqHMaXH9CsDgeSRnDMeUvYdpfcmK8NyvLg8bEca7Se96DRGGKne28Dh346",
  "key7": "5no5xKgtCFKeAmhGAXab8vy7C1WWsTiBUG2HnfCGy22pyGKgaXXJuuzztKmkS2uZto77nhBDE6dMSJX8a28R39sa",
  "key8": "3LgVKPJKS5Un9dDBEnnHnjU69wqNZogUy5xJwDbRKTJVqiHBw6CAfsPZiXBVE4esFtP8pg62L2Lih86cNu3ATJd",
  "key9": "3s4s2BYZPAmt5fNQgPxyUHhQewXVBqtVBi5nnYZ5Hvsd7hStR6XzP1ZwjX4yTFTDNo3FmXum9YdcTNyYHmaiBV7Q",
  "key10": "5pzJboJAHZHPAJhxzWntHMhaxaAikQknyuiridvsLA1AZEoH8ztPzUWcyrGs61gzndqnaheEqB6ym3fMS9YwZQVk",
  "key11": "5cGmPnThYfP4D34JaLq9TMz7koK5TkKQz9XNDVmoAc4aDmN1R6aRVM7BHkyexGqFc764WEQaHH54y3YEBdoFgiGx",
  "key12": "2iPRWFTPbXsE4Ct1vAiSJZwyczE5zbY2z8F52J6dWX87mvfbgjRJ8tnoRSv3a7Gp6UB5ctCyZLGiph98CyhjtcbD",
  "key13": "2rTZe3swVGFsQpQwn1afqWoR97RWgLsQzudHhrQmxZZQeM9pYpw6mgMw5tGCwUYCPe8Z1ziapeueDt25YfLVLheP",
  "key14": "64FUJTg3ytYMnJXc9ca1zq3Gq1pD6sPPKeUmdwBaPtuPmiW9C6e6x7uXLG5Bpp7RxvwhZsdC7EXBQ2PrRMkVWYV7",
  "key15": "dkr3dCb8EmG3M5fNt2e6hgLoAvkUAPmoQxQm6T4xRx73YoreM8WJtLyMWgpGeRMw83R7hGWWPktQ9DJT1A8haZT",
  "key16": "G1oEgM4z6tFDq8VZJesUDw6w8sDNdSQRTo9Uy33Ms7LSvr6ji748zwvKYtcwh4KeKMf6FJiAkZkZL9KRkttebaa",
  "key17": "DJo9HSiXXspcv6JLYnPK473FaAuQmywyYmLyMt3KcFM9wgFdDLV1kmyHXzHqzMhKEDbTSfVcnwQ8mCMhqRxYGNg",
  "key18": "TpXKiXzCpTWbaeFovuyXt4wxxhPBx7KBXsgeva2hqikY5jAC6ASfP2LDomJ9YqqbtyxTeTgJoHZAFLLyHFDzCKE",
  "key19": "4SmhQnxCKFf4kcv1LHCEXRDBHWcp5Y7LQXv8Zw5rRzsXBtdtEgo7E3Qw6WSpPNB2y8dmAzsqrbF4tgeiq7fTT577",
  "key20": "iZam7D28s7sPSBvpcvCzMkGwsfhB1EszX6RBJTXZivLS6sm7TFVNCyAS8aaf5nBj1N1jXjduUsRENi2LkFtw8di",
  "key21": "2dcL5NJztY8PnuvpiJQ5NWNRqzCh3VDkGpZzSFaLXbV6s5SVm6T5d9nGFc1irve1k2keN1FVFr1uxJxjGCGHahKS",
  "key22": "4xL5tsTFo3pmM2JBggAPJUx7txADZAdowS6zgs3JWoT6SjGJtpnjqXe3uENfiAtkEc1Xbf2dtBiqpCDn8yMPi3as",
  "key23": "7bn62zsJRF22sfq69VsQZDsKL9VfQjoR8jiYCJx5wYbb2fyYW8RWKmT3iu9qDPUNjDHBJkpBaAUGnn4VYb4dJxX",
  "key24": "23HK98ehuN4WtTYAypmzfbYW84KvCb7W5xazU5RV2PFKqk8wfCLFVKKj8goGPSJEen6SMYYxsHTf6MzS5nnRb2JB",
  "key25": "3jrgYGUnXVDy1WGSu2hBAsgyyWrbiRskssbGeqPf8BqRioKz2Jpvnfd1fwgjmFTPy9eM5At6heRQWHyfwtw3gMLd",
  "key26": "4rTVZYkt1nVsvTdX27G1ikMAoq9cJHu11WncG35wwwZK19odjRx2USgZUAj2X8R62edKuhK8Jkys6S24Nt42kykF",
  "key27": "519PbTyKUR9ppkRL4KtmXEZaA9Egm7g34rdQ5hi3UBuPiQugLkQaGZvVi9Wuik4tQB5u3uRqEFGnSKxviH5QmtRf",
  "key28": "53jLD4SWiZ6tvyRvq7nsM9S7eBgdSZCi2hz9LFQAuyTENnjC3ANztTcNuh1ERb5cCAnv8oCY4k1M4Ayj5cFV5Dpd",
  "key29": "4GD2D2EBi4npBp1MrJeBvkAjgJwCwjqGqmTrWmscoJ3EioL3rYqbVa39Qbp3vDSgBH2eqxDJtkTR3JiCB6QB9qu6",
  "key30": "2WKgBSzGzro8Bwy1D1gxNJ9YDqRBgs5hctLymBHFZNgTSsRKTnrTqLN3boLfYHLUvUfRj2o2ZzCgHLoWqCwBHWkF",
  "key31": "54462cxiqc48LMLPqqY5FxrNmvbQ3yoWu98WPhZkBsM7uwcjTFf27Hfaz6DLTrsvLhQD9i4WKyo6NVFzLFWcgz9K",
  "key32": "3b1bJ865NzJZb9X8U5LJAfqJsSSqnegS2CDTd8X88W7nuZEToYTGHifBpMwXQabX45HCzVG3vUsVnA5AWvDRaFQy",
  "key33": "3FWjkCfrDK8EenhgQM1BQtfm4NX1RggDJY8RQQNivfXJQRNC6ekutsyn3QykSVh8RpQB5zRcgNo9xXvrXj3VYmHL",
  "key34": "3CGKRsKxt1zg34ChXKReynA3Cyr4RWsfqknvX2BkH7bPv2AoJEJHHxr27iswfhoHi61Fuq6eVW9ayJbc3caJ3nkU",
  "key35": "3NHZxEyx9VUc85QLHX7hnAcmkb9NYbUriXLij62VJ58oQemf6EULCVogczAquiPoqjbdQ8MCWauzLPHmF8f7yNxi",
  "key36": "4ShKPapc7jziUtWiu3sQo1wW2sT3AP9yWFMm5nRxE16JQZqDd83V5d6P9bKmRZ7iGhgFQLror4GDdRZEGKzrGktK",
  "key37": "2xw7Q6MuKtkfXzwCXkZmjPJfhYqTXNdzZ3eDzJC9kfWW7VUF8SxJB52N84yAeqFZVeeRjJE64ygeNSLqwJNvHYJF",
  "key38": "cfxo1vMJpaYpzJiimj1Lj6LkuTnou121E1RSq2P1MJTpTFUJ7KYASqpzcmkzhRVKzJcdktT7kJPfsZExY5tY7UZ",
  "key39": "5jJjRRHNeDXxBbCPK6CCvTiLJnC5E8JWYqgZnVLkzqEjwrqqwodxmA7pVhkMEMqYx6bLj8W4qEfDAPHeUXXijjTi",
  "key40": "R49DxrP27bEDQCLqEzNNha9V9u5D8Xh6fGn2kfGDH9TujDhHvfQHBYgd6oX4je9ux4ABf5jkCUo8GLH7W9CCUFY",
  "key41": "2ET1sqZfdFhubgk5KDPRGTT1Tu35GF7QyeT6JTj55SuzicWJkRxzYqfiLA16B8WxoM1e25v9HE3c9B3MR3n9iMHG",
  "key42": "7mnJYfP6zjwresFS4RbfDX64E3CKNdLXUCQU5msnDrx4i8tXAN6aoSb2RrprP4QiYS4SSYV6PuYaWn9JbC6dMid",
  "key43": "5PC92CLu34TGoe5NRNfnzvjMPPcSvqLMDKvGn1tt9sekdGR42hYUXGXp8MfKE1N4yjoRPzyHbxqtSmPuVWzYJvHk",
  "key44": "T3xRpdoYZJj36MhCakhHQnghT5FsZG7nc9E4n7rW3fYsZCYZndWY44g3mtmZJjkja8jREHVsSjN4fSrsbC47Ca3",
  "key45": "4TjeUHqopj2AWnuBbUyS65MQUsrmAudcogrfp9WmgBhyqfB6aTPxrCGbL2BgbxqVjB7uuCcyhnZ7DZq3idighmxx",
  "key46": "32WScFuvcMxpwTxM3hZk24iEn2zzXFDRqUteycXLmwgrWKbF67LqkAkFcfoDEjrspccea1CPhngV3y1aRfTUaQjx",
  "key47": "4d5LyewGaY5bbU5X4rpnkQzB3bB1Zexxt5KN3zirdefxu6QAxv7jCY21CxNWsuottWAEp8MgExzAKnGrP9VbwGYR",
  "key48": "32hyH24MBHHYoyqpyuwoB5sb71vYoQRfqfEfwSs48uisS8HVrcBuW5givc3vbtPUEbeA8gewB3tEM25yT1mVLxQZ",
  "key49": "4zNy5D82urNL2RWQpxo5oWUJGKi3U64P5KmN1ZQJrz45uN1vxkpLZeKMPwY9GVVcQNLBJwHfHrcHsdatWuo4SuCD"
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
