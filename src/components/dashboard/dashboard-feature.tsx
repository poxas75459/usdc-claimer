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
    "2pZF5jwu6Ut9C9HjK6VEqE2w5KVJNy8pcBzcMyaLeqnbQYgpmix5LFMaCDHouPbngAtXftDGToS34W9mzkx5aYGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jvBBE8duAxK29mPDS9JMAFhetnAr9GPL11owpSmcRsoPVrChqJ5iT35ahv9hi7QKBEN2N9nBuz2xXdKctv6iqSY",
  "key1": "5nnhxwXWJrnjVaUtwcU7MAx6Y3qa14DzRPK5avThoigzNj78T3qLyfY7hdJN6cdF87B7pvZ78iodspfhbBAPQ9kW",
  "key2": "4DzN2QNJqc1YzpnEtawcV7fMRvvJaCLGWmc8nje6jVR5ozurtzXQFewihohSWUCnYUWqAB33U7v62jVHmThWJXYq",
  "key3": "3ADe3NdxbpzQwtKzSX5vyyNJz83bdVkkhfg6ciKoxHqSw5rrXHwGWyv4VrxFGzPfwMgpRDBV2n7cmDsFvP53QDvF",
  "key4": "3wkD2VX5JgzjGcDy3Ln96tL1dQs1bm4LkLat1k8x4ZpL5cBeDRnUJYuM725eeCoD27n4zKmEZbSgPN1YZBCXsUg1",
  "key5": "3iUVsbatrX7Dg44jxLZzbzb4jmVfNCQJaRvEKPCoWN3CH24ncf7pHcbMVKKTnHwK1FwKNCtK9vBmhb3KUZpns2je",
  "key6": "5Scq1tSJSrdKhp167yuoXihkqA3GmVT5qqBrXuAsKEJqKXccHa1YziCAGZ4Ug9LERExjCpLJ3dDizwB5owz85qgB",
  "key7": "3yHpoqNEtKh5QwwtVcm9pahSSPmN9dh72Y9gYMawFnhe6WfuhyaQb7QDTAd7FBPS9JXBNE91dYpn23GK45yhLdto",
  "key8": "5rzci2221QNYMGv2dMYpLpK23TqoUJ13W2YRKjtf93FLhQzuaQV5ES5s3BWNZYta2y8TpbKfpACubxZ2PYNi3GzT",
  "key9": "DPRMGeSm5qgKsfhnnWRaccPvyJPamas6PZimYYSbhqVoXrzzuKqzR4MPAvtLgzGnKniYXUFi78Ztf6YBnkQ74xU",
  "key10": "3cRQFWSdmW2cXimaPpS61MrTG3GwZx2emsZ5BBG3iRWsbwTqfpMXWijQNLpGTnhNaTcy3DvmA9cXgWW8qk4ZSQF9",
  "key11": "ZvbDiUGFyuajkKN4aaVFTJGBrUi8h5FHFZwq158WSR2kyWAFA3ALZ17pm2hoC3G8DepG316TDQunFWYzN61vjUh",
  "key12": "51Ukvy6wKJQ4U6wChgWhdrgVTUDrA6umRCY4gknHjdbAnmLRGqqhe6HNeCDY9jmhG3cwscWhBcv24rWscSfjU6hQ",
  "key13": "4mz4o72YmdRhyAFKuVscJmKuuwsE2eJokFAk37oaZ5QbtYiz2skYgdrc21rJLFXnDP8fB1K8zksrzcoaLRKZK72a",
  "key14": "5Yeam3FUNqM4BnJ73gsSF2DJ7Qua8S75uaTgtWYmQvpQcjYXXtbTdf8vTdAsRoh2xNnvSqWpVy6EJqtEdBJpdyAV",
  "key15": "2DM2PNNrLJUHPpNBdXYmxCQuubtaRo4ZiH59aDLb2XApaGMtaDprFANNnN1t5WXUkNTPcYuK5chaSE9CLkQm36tp",
  "key16": "WwVhCwAyaWNjYtVK99AXn4A6nfSt9rmqvoKdVAVPLAGaboa2KEkjRDHBuFUE821vH33rBY12cu71gpZFXzijXbN",
  "key17": "2aTQDrncD9v93drmbhNLQBNBMFvpTVDqBqNeaE24dUFiA8zutqoknAm6vbvSPxuwPTgRD4fCLTf95fHpNEiyKRht",
  "key18": "2cQZo6NAfzUknH4zN662zDxYBtCEYHdk8YqprM13C45TkVJ5kPqeoF8KxBjvgpsR57DDKdnWLUmTdABqH672DikL",
  "key19": "2h5bsVXKhjEJw9BxFY2RbMQxUnGUw1SrvKGikAsZH8YxoR4pw81dbz6fxZnFuecgmGyAP2zPtqs8C5zSuRgJR96p",
  "key20": "4oqtQVqiiudhjax5C3HYvXiBTYk81g6eYUxooKbd7TKqn5P6nH5hagLL5ipcZqYRg55KBHaBrNA9zMgGQSn3PChL",
  "key21": "5KH25uV9kLX2BYYF39Q5qjEwkwYZF2o1FCKwZUsZdaMWwsypCU77hRsKHLDKa6Wwcu7PhDoHSiMkCPvn1Yev9TQL",
  "key22": "94q8TWF1mqDYfcx236d7ttemmpifsBEhDYKNez6hEbeLzyoyKWh3HKaxRf9QV4giegX49Eft1kpUcAMBTLRqGLC",
  "key23": "5yRLPWEBkuKxvZv2hGYe1ToLw1zYcLwAikot5NAVLqkNuHv322EYYnnH4oydywZfsLYiHyWw3eJWaVgP8NkimXnL",
  "key24": "4iQdxMEEqUzUNgU7p8esEpPpoq5jM8pXPGpv4d5gvXyEvCFFbP5a5Suy5zRiLcL24uUteq7Y8t5HrTZUeionpGGK",
  "key25": "3qTf4gFPP9KTeE2uVYjdiwPmbNBM8cMgfbFqxDm6LXpbt3oN2t1bTbbJv1EWxWnupbrowiDGmfJJJwUzDnvYWvS6",
  "key26": "4W3CL6mayeDNHZZHtnBt742C5YoxagiaGu5jptxLYWmC4XByXpEDVffscDArKpHXLcpvfJGLt2fKc9LPgKXzYPJy",
  "key27": "4iDTo2GAHvfbe48zLsvsYTxRAuYVnoU9kTSVrrZQUAyCrjM3LsLVDrdS6VBykDPz1K6msNnhneivFaxFpkfmHpCK",
  "key28": "zvsSegZZhfwjWFUinQz1fHzDHqYZiXAVjBprrpWVfbUBV2H3xeWJhWctgAmG3y91kRhqSfTf5J5eZtWvyZDhgce",
  "key29": "ZpSt4jBuQDuRDa4AYqpZMPbaaRtTH42FEAJxCb3xDXVo3AEkNGUgH7L2D6KMbj6oJMXyGYRtCMfmED3z6wzPGfq",
  "key30": "5YhV87YZiXA1pvucmVQ7AVcscASHdee4ynMw3koVfcGapDJ43fcDy4XSJ4FXJsWEqcZV2kj3nevqiLdneuV1YYHn",
  "key31": "3gcTtaWuVnYLZMp2Eab2GxfQPT6DKPYkY7rhku7eV4kvfjFC1mKoM7KHdEa9cRy6J8h9GBnpbvjT45jyYBqBFdoB"
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
