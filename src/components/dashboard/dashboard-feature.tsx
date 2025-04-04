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
    "hEDAnKuTPrNTvWuEFQkAmgFvzXCS4gqoXoBgpJQxkVSWCUpRzNmyEt3TDGFVUM8So1izb9hRbq7uJQ4j9UQWFq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QNMyqfR1gcuihdkNnMjQ74ZW7vGV8ug4dWMPZgNnic5LWQ6opgA3AadhJrEB1w1eBns1M8nfVuFwGWBcrkZ3B2t",
  "key1": "4wBq9wHsFTMERkJc3EUvUWuMa9PtSGXHbWs7opzd1RAYGTFtike3kDRpGzaXiJVce2MGJQqVBMkS1jbSpxJTBQp1",
  "key2": "5MjmHwQ6SkaFvsFuXM63Rm8GSgCvP9ktxdWTDZhg3WSCEEsv3uHTg8q8hU3Wv2asTf1kRC3PACP2tzmdL5wR6fBQ",
  "key3": "4DyDP4hykM1aEnHhJNuZBPPfZfHCqciCSRnjN4HWkCEbn12uN2auAsyB4rk89utKEmfPg4ddAuKVhkf1nGrXFeWq",
  "key4": "5RJyfNJ7z4PqrtP1BwVGA1BbJLS1QY4SJwk8w1NcibniZ4GQBSPNNAuFukrEKwKa5AXtTP4To7d1rdKHF9VCbjDz",
  "key5": "3vXnwjpkHVTQZEkE85FwgNaB7SBn5HySPbaszN61cpmCgxRM7Rc5c1Nw3TUPsCfo9HoStiryiQtwADKeRqVdTfuu",
  "key6": "2eBXKkPCSJXUxSAyFUtDr9HoAA326MofEXmdCbELJtnn8GPhjdVdVmPF5YWkFHYhmUdmbhTnckxD9bHyga3sXLSJ",
  "key7": "JeUCJDz8LZ4GwXHQRqs5yE2dkGTELGBYJkqQkv5QPfUQRs4rusN4sbNovVWzHgpFFPM1zWYjJemb8XN8nZgezwJ",
  "key8": "5Xa3aq6qGRVcYseX26M3SESzDrFLMot7J6NpSb9MRbwsMrno3B69jX4zNpwCq3kjTZUZVks5VLvLpcuLgjF7fXRw",
  "key9": "5dwKDnBu1P4eopHTju3stmH9cznm87RW16w23hekyAMEV3z7hgaKj8kV72MCA3ut5GVXS6pGLmqzyJW8cPdMBRkD",
  "key10": "4ChqMok6dokFfRz7M638gTMFctVGv1mfss2LEbzgZTFG2Y82WdfYRqmhcbVDa3iuwb1cp6zGnvdEKwABeXRGSrGw",
  "key11": "q9P492ErGLoJxDv4fAHRT6rJJ3bWQAn8yitE5GaR9zw8WLRD1uTcUjSijEvqwBeQKadtn2Chrn2TGxojgDM4W5W",
  "key12": "2y3x2zykKB2rGh9Yqxyu9XrEoRddZShckE8WN2XLD5RqpBGZXE6QRNGdaewxaku8NE7Rqemq7qthpWu8QnNBzJef",
  "key13": "25cBRH6qW5R4NbRiECywZc7xmrRU7aP49iYVAQyfAQwo8wq7dbiFWibaeyvihxG3ePWwsqQamSfcLF9QhXHUQ4EN",
  "key14": "2MKRK8wakengCHTrUTYoBL1ZjcSacdhYzuc3ptELMegyQT3iMW1PNtuQxhhCyRYRkb9J83S28zv5TRatK7abhoxG",
  "key15": "PiFCSPpikzTPpxehH6wc6h5JT1CNitfZnmGNXNeCkLRTh5pj4Zf9GBr8bKRwhA2MNd5hDgCatbEtzPwU1dQ3BSj",
  "key16": "22DxGLcLtufVyrB4HSAs4w7Wh2QEMDed34o5VQ7ax3kiZxY9zXogDhXaaTRQfdP3dB47YZZZhkNdRvPHVB1tmz7U",
  "key17": "A9T2y9M4QE5GM7YvN6NNMkfvZvoLFAgc6SCGjiug9agG4pUvpQwBZziH5BCua7pQKGfKTrsg7RRxCt4v4KmMic9",
  "key18": "3ZKwpATkuPFpfTf58Lvcw6iBAyxNh1aXcXp5LAgge7yqyY9mZi7D6ccaN8VvKWxVKkGP1JFCNDAWdtNUHS84m9jr",
  "key19": "4MjbtNtnobuq3G9qbCFAtXag2TCEvqHcy2594qyPJD8xwPnNQ6JQJGQFyuHxcKncQ6uPfrK5LDQnvRzE6CwmMFNY",
  "key20": "5FcBfG3GD4yHLrjVgHx2Zg2iYgTNdFaaNLpq9DqWP4vTTbSaytMURUmVAuudZXG5Rvj94J742HTRGKZHLz6wnQir",
  "key21": "3bRPPoK5ECiFoHbHj681t414z69p8tL1QL8FfGNfSizcshBpSNVBBMFzLK9Gtr4bnQez3P5P9NCr2YQL9rKar2u4",
  "key22": "318ABdqeauUVjrhRuRiL8oYgZ8yD9GdbtgrrmchEZzdYJinEUhvg4NjQRgYy4dPZXCCC84WeE3ZbfiSxcn3nkepB",
  "key23": "zyRMNADm9y9DHBoWGuTXpMjpocw8SRvGapYQvLKkoBfWvEWvg2zgK8RePzX7mVmWMcAtQgkMVkQts2xM3hN71nh",
  "key24": "2EF2Xr5Rm5wYCpaiCFNZb3kRHZWXbAV8GWN93JJ2BswbtjkL9xFTFCQphXMhE53xXERih1gKXRi36WwiAwXSAdnM",
  "key25": "4KooMFFiiXSvLNmmEYcvBcfGamHbGwkoFjtgLoFiEHrVfw5zENHmnDruFH4W5CJRWH3KnzdT9cGxdvT7phmjUTx4",
  "key26": "3uv98LuSxXSr6PsCi7GGPhWmYrYdCrRSf3AFsB1QQwPXCn5gCi9psftLxSvbY62iJjUSU5combugE2he9mgcAWoo",
  "key27": "s9DbBrqxKwbB8cMPYGZ3Li6XtRGtPMFJ1zHarQ1L5WDB5pS4CFZPVNSbLjppwTha6V8aH69QtGT8DkVe7Gz4eFq",
  "key28": "2FHt8mgtxFLmauBG9t76aG6ykdLv966ozE7Fcs2NrETo8o6EdS8QGNCTaW826ydZsoDHXzVQTvwgTySryirKffmo",
  "key29": "2rtX9aiL5tQoTaUe47YasNX8ggXh6v8oNUubyaXMWB8beGupyWUdoN1H6G97k9aK9HCBH3MQ3GDv4wwgwJpN5ZWy",
  "key30": "4Nur5n1mDm6X2FCzPUdPBP9KXJuYgJi1sQ82CDA4VCbS5SgqaYextpB7qGEbV8BxSAe148c8eZ2oo33sXRca6PUX",
  "key31": "386vg4hL4Ey5cpwTVgGaSsfC8D13DkFwVx1doM2hJcvHmjkhDTgTZJzt8NLv5NpeEJbeQq9g7rHj4tHQPyqFSLuN",
  "key32": "4Qb6S3dcS6CUbKzTFusjY4zReLALLX5oVgmLnJvfyvAhqGsFpvpsNr7g7smoQbf4SSKvadbrUQrJxmxQvDhNAvn2",
  "key33": "X8Ffd2DVZspVkxYEgEkAU5ExUCKgDHW9EDMQxgSQaHgFXGUNzMtuw9eXbhrs1Hf52k1KxDJJDUvUaL7JN7qGMpA",
  "key34": "3Btc3QkKyjUSttDeQ5gm9uc2zwat9zvnPA7WN38FHMCvwADiCcx3Zbt6mRScodDhYfh7E3s1aaKmzAaSSpPih2jA",
  "key35": "2bDXYfasR63fjuLwJsP578sz9hETyCShjQPSY6iyMWpH1cE2GPTmPjpyM2SjrFyHvowsjgWZqddRLw4RS4269sTb",
  "key36": "aDvuBgFNqbHg8ADgo7o4zReeeBAEBCEpqkPru8D67xu9sYU9iY9mqbBrYcxxBkL96gWAA5PzmZLjVAaoFoF5qTz",
  "key37": "23Tx7HBRgsJUVeNSc6mWKWPztYxiQwvQeNzk3GYLUyq2xQGynA1Jym4BiCsX23jEysfFAmgxwM1krrXrnWaFpcp8",
  "key38": "3XUvAF79Cb7hFs8kNmTDQnAVhWZTgwp27m7cCXhrYyq52WmFC7BVoBkF7yyKV27HouuRKw88oD1uC6VXrCtsy9p8",
  "key39": "33LQrcriKsic3xTjDkFNmXqqggmoBZCK6ebtWSSmbHWk2N4Z9VtSmjL2ybHjoK4nGtahw1sC51koVjU8F9ottj2t",
  "key40": "HVay1JbJjSmJG1wHGrCPfQUNAvLqobKc1rDUBRkNKNFBpjS5njRyoV3qCa1KC7Y84qdY9wQaYXuNXdPmZ7qczDd",
  "key41": "4sEEaFrG2UZsNGsFGomcd2oEXCBsbWowujpYwxKNzDYZ85bq8eWrg3x2p8WoLAeMcfcJLrKQjWwenmAzxrMPvDcr",
  "key42": "3pyvHwtSJc1xKiw2onZbiqjrb7mxczEZEtMRzP9zaYYyXMqM9uffqWxD2eiSYHiCKN6pqc8wckYNjkwcXunDrp8e",
  "key43": "5i1WhNPiRsLn61Hdpwcju89vZzFb51eAkBekJkvo6rZriPkhikfPgsBXThvtZCBPFaQi5cSwRZRaTxXpvQKWDHDt",
  "key44": "539fvnNTVZV5yTmGTb2ieXk7jFZtUMwN4tNCvjsw5Zp64K8e9icziEHQ3ojxAcFig33bEvcxp627QWCSjErtYBgq",
  "key45": "2QiqfENWNvn8Yy1VPNanDpMr8ePQ8fJ8qF4qUfwfw5ccb9LGD4h9ZhAWts87tLBSCjzpACJhc8NFgbzJC9WgZ8K6",
  "key46": "3f7djAFb3q2VE8MHczawQTnkzqr4Ze8xmNCr7PFNc1sbHNm5NQ7zHWpTdUXACwtYp6Uwfq6w3a9NXovuKYoj5P16"
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
