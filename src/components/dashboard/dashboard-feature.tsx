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
    "3AYVuoNZP6WR26rsMerfrt3cuj26osqzneepUA8XNTFUbhkhyLhvPbpmNWZ85nRnYHEf2YuofmbjpPQTqeUGZwev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mYAx76VthaKQJ3Qnvs6mC8yKWsugvum2y2wFXatw4ubHz8y11gk9DxnEqHeCV8ubYsbptPx8i4djXKQbk2vdR3K",
  "key1": "2Drpr3j3Yw1CBx45d1BkzCyY9Y6XkaSXcsJ76GptvsPXDRzcE1FBh8Rt7vx4vpdVF7Qsp4vnxRqRpoNMNj4hhLFi",
  "key2": "5L5AGS82wGfg5ZkAn53CxUnihrJhPKvPmfyDLQRACfnoTPrQiC7KMWC53yW3YuNRDdBsRv6dKTJQUHsQPq9xi7uH",
  "key3": "3QQwDyt9DRRMJ4WQdpZkTLEdij93hvXd7UkmZF113DBY7TAciksmhTD67tSsB5mV9eUPMvEtfQRbR4jmqr4SdeQ6",
  "key4": "3DyjSRfG89jHJskaE6EsqzXhiFkLbbqwjw33fyqmfBzTn9ifMQzXhEuHUzZHYoeUpHqfGDDHcx3pYej5eqWpt8aB",
  "key5": "3UBCc8fbr68qYQxj7W8pp48HQRxqdYtTQNWuz2YZHzPxDFcMuQxjCaazYUbDEEZTcmXXbm2AK4dNcbgiEYwvZAAP",
  "key6": "2TRPhk3evApmnP4VLQkAjZUTMa7Xr8KWavraVasEXDnNRxUezTwbwRskxXt5z1mkELDVTwKkLWpCNhoBE9PyTKJs",
  "key7": "3udB8A8umeCL7jRVoWJJke4LcysW1rUtLWnLw6EX9LkNfPJfTDSkeCACC9KbodQhg2cxp6SWmrngeAWmJ6JrpS8m",
  "key8": "eqe7wCh2tRqCiJ69XgixwQasAUhdHSRJ8rwQygfrgWLRppLcRAmnRAkZnrsYj3fQGBKfVKBauomaNhLKTJ4RQMT",
  "key9": "2uKqGR4m1SzerWe2RuHxeBJtJACeDzBKFNmSDEQtYGrHL3RyeA1MoxY6X5RKT37XmQ5hVVnBdURfn9Xd3k1MRhTt",
  "key10": "65EmCkkCe2ruyivh4NvJnsmFBvLxTToVWta5bZ1xzbNhtab4p4SV1P8v9TvtNxbdzFVZ2jphXEqWBhd8oC97K4uq",
  "key11": "vcvg8sAP5AeA9RYowXC27aY8bdmwA8FTiMD4pnBCz7pJvBQgPCo4d3E6WB99khc5VXaq7cpTcdg1rHEVsQuq9EC",
  "key12": "4saj3ajHgYsTd7Xj5vAcWtDmazYT6BwrN8AiXFp2Uj3JagNtjRSQiThiSLVaAQ3qEfSPVdQZtffeARGKQhcqy3DL",
  "key13": "4GNCdggEhmWfNmNysTPUjvE76Q3oNwbRAUtA6ACf1QY3ofwjnhSw5oAd9ngnYM2NGjCbJb8gYuffsgmXyeMxVGJr",
  "key14": "4ZbnSrqepNxifLhAnVZYdHptnSZmijjTG3xZJQEnToiSmmKxLCKEFcjt4HSVk3f1o9ebADBQbhtpKjw3VeTZmsu6",
  "key15": "3Jwrua8zcJK5aJfLbyxKuGpjFzeXhUNBJTAvmwXKBMdKUtZU8A3rxUmjHyZJkA245nBDpYHT2xpAxf8kfDsY8GdE",
  "key16": "5RKvWwifRvt6vf7wPSxomJ8suGGvXMmCGSvcf1Q8Ln9wUt9phkV8MDGMj5jpjqAbA2538G1NaHdagHPq9CyUhLbS",
  "key17": "34fWv1oY9zKDXM1xFmrtBYwDjWb8KNnLPsJSqcTnEty9B5FRfyY9CMLMmcLqZL8Ucxk3bvegRr2xvtqeCB61YLt7",
  "key18": "5Jjw7V9JEDBT9ZuJaDGYD6xE4keFPAgNN9npkNdkoFgXDfGyNtzhPnPA8yY85rJCCgPjUnxCSRxqAwapEHo6J4tG",
  "key19": "4TxR1NauAE2TnN6R7YfnKjiqi7kaUYGsDp9hz3em4TPyPB6J4kbxHGrFbFLpwvZq6H3jhFqMe8XGLZphQdmGw52W",
  "key20": "aRxbq4hzr67jFoXkYmYc9KvwF4q1iKkRY8GDuyVxsryUvcj9VHrFMZ8uq3s7N1MLPARt3eQbZUjzCEqMPtR1PDr",
  "key21": "4SUrT4DBWw7Xp8f2MNMQ1pgPMTGmRLnphrRXgifdNsCvJmaZFxT7Av6wEHLv9BLu28W1FVeoReUHJy74hTqEgXMs",
  "key22": "2wDAAQe147QrRP3ScLMFH4z3ucwQbvGbRGMqoHPGTf2ESXC8D7Gmkq58jLa2ykPZ6dNRAKjsAYxucyhHU47datF8",
  "key23": "4Y2QDg75e6JxgUJ2s1YjeUQ3LaWScMJ12aiqaMhHmDrXuqbbX4T5mcXZnMZdxMHXkZW7o1crkxv8GZ28UdjWgGWy",
  "key24": "4os82W57gTVi4G9fBDYdTXv3DJYfuo8Fe9KTWvSpt1NtqeiJoty59kxswad1FgvzemoNQuBuEb9p8LmobfyTMfr1",
  "key25": "U7Z97QE6vRzuRVN7gtsVMXiGzumwSvvRQEcmmR67yQAVXt5JoWoxkovzJXokzD9TyYphMzNMB2VV5ettqZCT2Dd",
  "key26": "3JVjXUMY1VowFxkk6q4JVqXQZ6Zb1KDbzceSAwnBZP2epuBpfFG9A5LgVHHxAUEEeEHEPDrhev99MY8fAzjgCarc",
  "key27": "4jb6fuChgwVf79jx6W3wJW7zmkPN2QQaA6cvKALjKXnyhgDzzjf1ZogrUYRYHhoYRE3fuYFnx1RV642qH4Af5kEA",
  "key28": "2vwypBoxq7rfi6N6h6Cf8xm5dHVR4XYGXNnniFNd7UY9uev8BvdsVNyE3gN7N2J6bDLLGnsRSBVh3MWHmMgTpdhb",
  "key29": "34vbddkBkgidRGW5PjM9DG7Y1QVYENR82HekKEHpe5wqxgGYbAVpCm3xUu8qrYPLjqEu2uyxXH2GqkEpUZK3cpS7",
  "key30": "44yFpt9ojjpekoQn9wV1AxYu9SxAAYDUJZuYVmkihA5HLVPAcDLxk6ysr4CQHkwt6BgvaFquYKGXpdu1h8CTMbmS",
  "key31": "5fgHZ1fc45UEKx73TonUubojLztA6h5U3bWMdb62D8BVCW1dimGNEvC6p15StStdA7aPnjkfEDZ9MQrFfRG2T7ac",
  "key32": "4KvwTMkUdNtjnPgfo1KDSYUKgxVJB6n1qR2wYAHe5krX6vErtad8fJQrmyGmfow8CXDRT2A9nDDxG9MqofFmLxyU"
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
