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
    "5nYsFtRrni26urEFdffKW1Lq1wximWWENdrckhb4F6EVrYJidAMKEPFxEEM5Lze2uWqqi4wBDnYsVzkiuDFey18f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36y5kWPf6JSB8tfx6prJzBZJWEd6TvLA8S1iXiH2pV35JcFZpadChDnmp27rH2eTnHe6Pgb8AB5yogFwe9jfca54",
  "key1": "hUMjc7DykBGmnvZ1wvVP1hxPxf6Pd5Mjqs3919NmHzkY4MkFVVioUeUsBuuGTca2q5qCTATrEcGay2tLnN3CEdY",
  "key2": "5caC5fqUfY5j9jnW9sr3Rmn5tecER7nNm5HE5pfsXDRFbJAat1La1A7Y9yL2u5RgecwCxF1yKy49B5WBwM3m1CJP",
  "key3": "2kGUDUp3yrm9rvqShcGtT7k2BanhcgHAEZCZM6VrtaW7XRx6K92cjEfNnsTRjGyersp67gVpxUN2cLrcCEm4qVFH",
  "key4": "5jAEfNWmRniUKYvM8qkqBJwTCXH81dFZHGRi15QzWWoZQaaby5WR7bk6s8nkQzuHPjRQSD3M9m3dwBhxDwtGQ569",
  "key5": "2cYeTxo4Ceim6aifauqW76339qZmt5LSCVjokYn3UBfq6QCnZpQd7zWnU6CcSf9Zc5Yktt9eXLLuCXEGYyu1MgKV",
  "key6": "2bwFUP8qcYiTDrY1dAqceKk6KgPoihFJaKpcyjbrQKzME5t9BdM14u3KeMg4L2w1aRDyapNbKAXA3k5JgEWaUdK5",
  "key7": "4kdpErePBcbnobXeqsdYYxiefAyBhEhxYyjszuHxw42VJCsAXmeE2KpxGPHWfA2JJkhESnsGHVW4GydvkYefkjpu",
  "key8": "49PtJAy1njwMQdaNsE22voWhN818SopUHwCt5zZzWHLFPhY2kZm3UxhppfPanygYTchwzf2Sb7UNy73L7sBL9EZC",
  "key9": "3XQsRVSRxXy4LFWtYTobCMUa6CAf5uVHUPTDgzn6t9wvxEzwjsSkPJA3G1xz69VPbv4hPm5P31mtVbxE5L4p7q13",
  "key10": "dTSFJVvDYm7kzrBGVK72phCKCoquVKHiEEpBpYyUEasB8NmGXQcPUXpArDU6UciQ6f1v6xEhNxyyZH81TKPN6DG",
  "key11": "2cFQ9wj5uwhQAVk3yREYa2RaZWq4xrnmMZpmAohtrutAtHTz2SAnEBPye5C1XU5Xq6xoYGC654gLW7PvPNPk8Y56",
  "key12": "tLRWqc8nXDKQmX2NJkwu3Wqn17juoTCk1S7Q1JaLfD8JekBupey1PqPau9pF3JSjqUnQsKaNAifuaXds9zfSVcv",
  "key13": "4poaPia7U6FpyrWZGM4cWxysqbqcjAC1PcS8PB8Q2tW3JL7H7VNSw5hDCqyjwQUVD3Fy4ifMojQw5RVcJ1kPhwPp",
  "key14": "62ThxmwRKYcAHG3nCmfs8HUsfB9ah4HtQ9CD9GecVAWJnNcRThHrTCqHDDmphZ6axfbLZNjjR4oRyeNhWfgX3s52",
  "key15": "5CSiaqavdYDVtCC5UQ7Reko6pMB3Df4xsXqrFS1bpeicaKeHBRVkUcve5r4b8chbe7CVViWjBPxFFuYZh2Rk9rVv",
  "key16": "5vQcYqmV6MPxh834D4jH9h2LohJSiWH1iJncMUDELXTXjAkCWccKQxHjAmBCEJ6VMnwkVFDppfn4Y8BpX4Ya17Ep",
  "key17": "4MuMU5FFqUY1FV9c6ZRxtmMN7sXhapsNAQuWGSvHCWdLCU1HLyEqhz7V95GxLwrDvBbDb4DncZkNLaKbJnAU9AYP",
  "key18": "4XWLNpAUjyNw1FUGQvV137Rv8aTdnx63coaH5iEnC6ztjBawQVGx6917E3cdhavT6AHNq8UL9kWnSxxDhhq3JEbb",
  "key19": "5e4L2aJb3c6J9VJ6giP3cDE14N8YcWKErEVNtb9V2ob4t5nu7GtyHr13vyjk1mKTjBQ1BHUzCMwrAmFW5xBMHq7y",
  "key20": "49Hn51LirKeQfLQBKNXJZdN6m4oAAnEJWgT3EbjDfrSyhUxZmM5kR952sgrYWQc2HE8fCB3sQNYuc8G32QJHhNyF",
  "key21": "3AsjMS7A3DmUkqPGBPLqQero8CqZzVrku4wSrb7En3o8vv2itvme1XAgj4fXQz7WCSxiYidM16nMc2kde3QxQGEq",
  "key22": "2bwC5SE89HKEarvAnr9Q6LH3dRms1GecJSVytjYWm3fPNDyeMWhzJj9Z8KA1J3axAyhCX24JrTz2zrjHiQDxYihw",
  "key23": "4gXyBCYUF7inK1tqcRMw72bGDR4jL8GccuKoKUfGpjcATcuStg5DrsGtYMQE21xdNUQt3MRH7hCNyoN91tGWoAi5",
  "key24": "LEY7wrMdv53RqjXgF9x6iLdMKZftN5F4RBUg3awr3MB2Hhr2khU7VYxRfZfZcgBBdCDbKxRquqBxBngYT65uhPz",
  "key25": "QjHFxZG6o9pAzkf2EYPUvwkg6ztkm2yh2HtuPmyUi6vG48c4n2mG2Q8xtdT6UcPnz8fYzJqEzAjjWtUh1XLVThN",
  "key26": "FPH7LHPuzaijDtyCB4wPACGgXQwqrKH7QMzxuNYdsb2rmathFYGs2K7Wp26PG7YvL2P8WKDbCawynnPYw3MPhxc",
  "key27": "q8VZ37yVzaLi2g3LunbgsYUzrXK2ydQ5PE4iSQNBMBgy414vNqfz6sbDdErgC8AQyV8sVu4DysYWMNNScLVMKFt",
  "key28": "2oY1rtccXy2PjL1MDCSk82f8V3MZKL5NzKMdcasSHojyjeQ512B3SqXYYyDvnDYdALpp4d9LoLt4foYzTb2MZqg7",
  "key29": "3U5o89tzjh1PRGiwz4wvSGBjcHb6NmiJccpF1HS6JHvgaw8NFeVTwqGpunZVtvdMvoFqsuUA7qA4PJHpDoeYvfxk",
  "key30": "5ENFFTuFQgKfRXDsBt5XpmWjoffFFKmsw79WYyjhAqJPmBXUaEHGh4kmcVaMvWAij2X1kvX3cZ4MVP96MxcLbBVa",
  "key31": "21i6fYMm5Z1AmxifZRxi8m6BrFx5oAQCojrxpLMnxww5EwpVmTjTddfovjBkgMRZAwzuua1L4QYNJZacf7A1HJ5M",
  "key32": "2LEoYEpHLYqpLkAqmSA713c77AvrLcvC37Yhofa6LtskG7JxCDkaTPnmxSfyJuWrJFXBRPFoVpYLqhEBKjgkpG9V",
  "key33": "GKu9W9WaVx42BUrTxbzSAMkqg6GmizXXVSLArhrs12A7aRiBm4raS859xSARr87MFwyUTwdPyKsFx2hcMactSz4",
  "key34": "2SBLsBHE8DmsVjtXdcvnhDXWo8N4m991V7it9wtpb1XE92Az5uH2eBN5hxWeHvyRn1Ugp5S26qpdz6WKs29aBBwe",
  "key35": "24CcQ88sFEg7cibAUEGza4ibNRA9bo4jpgKNa6rpCvAGRyCrqKbWo9Y6k1p6FrmdpqAqv3BFRV8dy2zYYu3TahkC",
  "key36": "o1yfTPUSECsaC8HehZv654PDY9zsvQ7xdzgoL8itrdPD8VX9nBopnLQRAhTxLE36wPYLzw6keeKLCMcm9hZy9rm",
  "key37": "2YEv3mJLnPXmqkVYRB15kDV4Tq8z7oGsbsm1zUbkRepa1JHznJVvtjEsy6US1B8TTtBiEJN1LavDuuUGuSRaV1wx",
  "key38": "3sWpCTfywtATBrqcg9K3LGkiv8uM6S2ddUJ8cuehjf3qv8LdUWSMcWZoFTtP5x7BvhgNjLkGpzy8bJpPCfbN5rXr",
  "key39": "cgjH8mxf5fm8rB9hzZygz38gJe2gzQMtZhMceVN1zcPTd8Nnxxy2uNB8uapiFwHCUfUAo7wQ8bxs3VBvmi9vGDC",
  "key40": "2XoHnP2yRZBo1UH6CwXcP7nqBKPkcRzEtzPFwozPsbjCopkM69nKG3NiPnnfGPNs4V55CVVM3dqqRFbjkKt3yvK7",
  "key41": "2VqvzNCXTVRfkH5RA5QPFDgq3WtmZRFFHTFY6RKCRv3Dj5nZohbaYq8uECycjAjVj8qci4vVbyjGTyMRfjLaPPGw",
  "key42": "3ywD4KZ1XH9YLpJKQJw4ZzARpctEN8A77DC9CtZzYyWr83DnbZ8wK996ZC3JMeS8nwQDrTGcAMt3VKn5tcLZt7fK",
  "key43": "2fJMmXM536dFxG4vnoJd4yFk9i2aBphx1iCrE8wDruxVdZod752ateDk8bKzGi9ny2xmVoNdQjihvvgSfXqgTPsC",
  "key44": "UeY6fcDy6BndcJ74JpNm2evUBTWXQ7U6eSTMBDqcpPnBGzHjwJ4ppRt6PWKqaF3RXABLhSayfJfwZm4xMUGc97Z",
  "key45": "4cDsDTLFB5aD1MDtCWHzCaosqG8StA8PwgTM1WqNp6PdFYTq1ugF8wqjvRs5fo3iu7ETURLNe4QX3PEpqQCkYX7f",
  "key46": "4L8ZUesHw8G73z3DxwGPuB4x9m2QL8fv39kSKerhWw4us222xGGNFJw6dK64kdqsusvn1vswtXGkFwa1L1LuBNyq",
  "key47": "3Bc5w7ezkYSAz7YjcseHWYyVDpikfq1Hx1eWpW9QeXnHT9PQ2iPDUZdfSDNyonB7tZAsUPijeeATpRjjAHmt9X7v",
  "key48": "K36qfpXuwtXUnMMYxoD6anyhWjnfjqc4D35d5iNztZa4aNYHJGtFu4M94FbqEzUcPGtx3Aj1NeJUgyb2czuSkKH"
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
