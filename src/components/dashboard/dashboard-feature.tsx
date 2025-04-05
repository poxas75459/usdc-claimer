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
    "3c1VdUY6RJeMDhAVa8PEKtGuDEiy3xG3N7cQjj39jfCmqSFSZTSRw5piQbBGsrMzQraVzcH8sQy5zkndRXZGVyLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qfBcgzJo9vMqtPHqeXnDNy6NhUARkhKYaRx6nrmKNh7cqbmPYWKsTgzqv9iX8DTVW9Hb1ZEQySuuBtTnh3o5UcZ",
  "key1": "3yr77B51hsRtAiBT9Epk8RAPfwC3f9a2pP7vc1gybbnhVHvU76hE8hxC4eMnonzAaz1VSqpd5zjbXZShXfQgvtV2",
  "key2": "59VVuwUU8oVXK4sWgCBUJGiKJ85MGEVTpLtijw4ohPpfqcQngyyyJU69b34gvCFVnRE4Y234bjpVHASW3bj1knXm",
  "key3": "4ii1wQv71aFmRpbzxnssEE6HK1S9DLmTwwep1eBiz2PdmxDm67fq9zu4Qnie8LiBEyWmcoEWRx3Do6sN5DzPJvzx",
  "key4": "3PT6prQLSp9jgbrXpfTCPt3wdmmnYEqx9cFPSmgREM9pMd7zL5X9JAsgVK6qQ5Vx5j93sqGAF9bKZg6aaaMUrWDn",
  "key5": "4NtsfgQG2gPgqHckpyvZ4oqXfEuCeFcQeY6wW3cPA1B3DqmJyFYcFS9KLK5iBUNoVsu72e7jeeR1ehfXyPkVkwTW",
  "key6": "J3qKoWDXMuWdG3ikqp9qMG5tj34mtdqwRm4KvyRb9cxheqE14ztXakbzsGCTHW1LtKQWCEBei4JgByvrH1HgM1m",
  "key7": "51kST4MTe4iDAFZESVGDCwXuLNTdRLb6HwBRbAhaojES1fmBkrQNX6XKKWaviEu53aeSCb6kS95kgYFFBmrUuUpT",
  "key8": "23nMRZywE2bdJtqBM89YLFhCNkXtJbqq7RLDL4HU1uvZArQBe4GtBwsnoNvuVxe9ndatmyYvwnk9KTnZg16N1DD7",
  "key9": "4RxQfE4cgTiFpUZa3EYE9dNgir7azBYvmmAkZiUaX6PwptFEjGTef8GXA7Rd28pmadhpgQLp2qRwRgDUkYztZMrp",
  "key10": "4a2YiyYQEtTUYAwFwNu5sMdaJd8Y5mRhifUfooHYjxUtvQvqP5c6gZNgXSLHktVHX418Y7DgDuJLtEi9rWsj4fwh",
  "key11": "5dCr6SNgMJ6eetqSnEYJ6Ef6NcD2P5qurgygzzEBCHP6rTnW4G7qW1jJ4SkGC7z29txJiwdionQ8FAcy36ybUDwb",
  "key12": "5zgbsyViPqzHPuWSUKWvYv3noNHb7Hf15uZ5dvMpfxx7hdvpqQNZVFmSVScwUv23jNRmTp25ufF6UeX4c8DoPAc2",
  "key13": "ufVmZ8nxFQQ2ZGhTTouYJ23BkPwKaPvoEHHMev26NrjohQeCbi7Q9S4AFrXSazGuRoT469VhRzhWMYcfvGEeS4d",
  "key14": "4UG9S6Q1pc35mkCjx8FsF1d8cXkxLTKPRjJmVmreJ88WNbQzBMLPHpa7xJ6BKKxAnNcFHay4TuLbMvGokyLRP8ju",
  "key15": "2nAvo7SsQru86xhqCxGE7NAkahXj9AyTxfVZEjdXxHhLfD7sRjCiN5vHMjGPx95yGE9qvetBRo9UsiUDNqrZC1J3",
  "key16": "51rtzAWXG859ryzf2i6223ppW4M9cvNRVGQkN18x4j7zoGw5KtgHcx4BpuoHvdrkmBDAzFM3mhGASWVsGXu5rvho",
  "key17": "3P757Ufn82k567wv3a1Bqo6uTdwFdaBJ88u15WYPKe3LoUNBQrSgThqAAKRxesSK6gAhUxhg4f97ecfgnHXTWEfv",
  "key18": "9QLuoQiYrvouMwHEhF3EBkeNWDJLVjGRe6Dn48Juq9ngi8HvzP6eVeqPTEy2grWtb1n2Bnmnk24wKbMawD7dZnx",
  "key19": "5EajLVrjJXjPS53wvVaJDKfT61KTAV3nHMAeM7H5hwLrX6tpH6L6jBgqY2r4nFNCZvmHi6UPZgfUUN5ee6sPSBKs",
  "key20": "2FVN2A3yoYUDYXgBukGbDfUPyfbsX9mhT7TZieYhmNtHsXoLkCyFYoPLTygEWR1CaUcsd4u9KrdiksUtA27GBUTt",
  "key21": "k8JZnLuPXbhwCxseyCDChKgWsjzsrtiBiTYSPskdf23YBRptC2ADjJXDdE6ZQLjosphAiEo4rRfnareixMJAYoK",
  "key22": "3UnrrrbMDu4NLuoh7g1Rwki69jmrPoGvSoCt6gRzqnoQXEhU7ufJCoyKt2Wo4YKmbykaWiNmmGHS5sQdMHKMS2ip",
  "key23": "3HH4i5kvqBePGBcZQngrLinWs4vNv3GDYXHNRFUJb21o4ZfFPbnW7MHuAsVc2ZeJTf2RRPyyp3o9pCbzatEe1bT1",
  "key24": "3EA19kkifLugMuwgMUdSbNAkWd3wHmRowDMctvDV2oegczmji3eCiqh4rGMY19r2EPUpF97SXYUsLRiPER2ruYWf",
  "key25": "3m2FMgDhzDGsEPvsUpRxG9vSWVsyjkuRQiGRKPPPhyj561j4Xus7AD7TqXme3AGiZsTNZArtqbaiRoC9yKwRzxg7",
  "key26": "y9sNC6ufUYqHeumLBRb7vdg66BezXvhm62BUkVKgnGJYfZa6WBBioSGNt85YfCzf25G72gDB9eagwQqo1pxc6Am",
  "key27": "228xjvcQc4giY7xEt6P4E7wzUZcjc5ctA214AdRpbguakcj6mHhkkQ3TRGU1wFB7QMyYgteWofo6LiTbkPQTRbxR",
  "key28": "4PBxJJB5vRaoiDkQY7BK1ks4ZHTJMHja6obLXVx3wUbNzKkbPV3px9oWqorhosi7kTptoZUMi69RD4MwApi2ABvM",
  "key29": "2tfrSfXjtqFEhpdAHcU7Hdg2Vi17Yn7bAGkscYB2Grq56wndH6h8rCEhjQGvRJKKKPxPyUGZRGF3fJAhxhg3dkuh",
  "key30": "3hUT8r1ReqocRgaRZ2qLYUorTYrxfsMWYbn7e9GnC5z2ab7Um2pJ7jf1jn57BoRz2QKELjP1hpnK4ioLKPyggBaw",
  "key31": "52LL45TfobShUjmpEJnfLTh9vNB1PVigMTY5FQvfmPDob6qtSrZG5axWsqhBM2enFYGKTwwyiH4vmnBCTcbEYDjZ"
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
