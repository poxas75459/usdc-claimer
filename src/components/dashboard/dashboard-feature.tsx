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
    "5krtYB5gZHDSotDjiN3ryfDigvHHpxFqC9xqH1WVAKWPG31zFQCMNr8CRDZqm5Uk5uN8iyYZJNBwhdGPdR7w2UwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GpZ4i86nLvEprcuDdr8PJtNmNvECN4B93kvEcs7Bsni2KybxHRV16C8bh2fB65pdauSNUGgsYM2aSjwhzv57wET",
  "key1": "5TVkZYo2JS3ePgE4LryAFVmQB82nSYWPRxqFVrf9NaTcnS2cyyThLNKn393Y664fswf5mbgQDBsnXF8XQ6YhGYCQ",
  "key2": "MduCzbqdZEdAWE6YHjs8pf8XiReAjmZvri21PLzPuMNFpUiyJxNBHxHmidFFBzs9TNpj5mWe1PFg4XWPo3rF6FX",
  "key3": "Qcim44Fu2ds5aLKvjnxANAinyRGXRQ9cNp2ZzJQWixAxzobAhv6JNwUQAHgFRkUZrivaEkAy8cvw3SNwH5vLdy5",
  "key4": "3GitipvkJ3cgv2nj6rDibCkyHKANJ8M2pfnmsBuw3AriLHgumncUyWHYn4qbXGZCf9gGLcvbgryDL6dWmagsXjur",
  "key5": "3bR6f3MiuR27DnqmacQtnUjRkpHHUrYkBpQSECSVSrwGNrBdSx46xXknSTSMQmXJU45jxRaYLPwHq7ECvJLtRMZP",
  "key6": "3Q3SQfeibD7ssUrDYv9xvBxCUjxNNRuHhbfFWD5hjJrbYwn7pNtPrBxha2a7pmCLpHnQ8pXetUjyQ4HMF3oQwRde",
  "key7": "4voGQnZveJDg9LJ9F9cN2sTFd2EtUrf6fSVnNxJHAhNL1hbth8zYZYxfMXpi3AQFEyRFbGfGQ1VuEYmqW9zyTcvd",
  "key8": "3hZct6d4AeP1furHhjDWts1zXKmWVuQHCEjASn6xrmzHX3ckYPu8UzArYtEnhK7ejWzRqPedjkutZNxhfA5KPWLb",
  "key9": "45Mn76DMLgNWaiHLZoVANQXEAJELX9TQSJwm6oUmsqikhaG9qKYokcShCQdXNyhV3boxZRPTWA9uvJz39EwPQdSR",
  "key10": "5DfJWp6aMy2hbYDJDZFaRCvGRhAFCBUwhWTvdWkiqUaVf9YB88wKnEybm1AvJz7t1tB1A1UnYMNmxovaprB3f3Xm",
  "key11": "58yvqnHdB6RzryfP73CnsyLB8CGd2evuDpizmCeLGqHU4Yvzp2zjModmaEboWKkaymtqAbz6fNrapBCJFy6J1AMs",
  "key12": "BcQCHgrt637Jq9V1dv6dTp7m2Ywum4nz4ngBnkFQco4FLhao6TcgMtcPg5Ga3uaW5i621cSLT5WWoTu3S3qUnfT",
  "key13": "5QkWQtu2urK3W5AvG2JsH6RJLm2p3gkPRmZ6kxooEkbnkJBpf8x1ixk39PCpzHADMmz376djqUi7CGoNep44TkGq",
  "key14": "P9ecJyUtMnhT6zoWVEwbLKrmPUdFA4toWmzNvnMjSpFAamBRfZ2TxX53kGKi345rrp2aPbrXCZhm5t2WRxuvqYx",
  "key15": "TC3XxpD1tzyLeBPnyKbAoEyieEBZge5VssGW7Hdiq93QT6SSL2pbo2RUoNxthiwmreQXPv8CX1mDnNP4iFwoJ17",
  "key16": "5bSRpxaRM2Nykdy8fiGvUZWgXP95gJx7ix6toda1TADN7vp9BE7KkAgZvFuAqGPAzWmJj6KzLwoQz9MnoKCuw4aw",
  "key17": "628hmV6jFmAuNiJEiqYd6nKGWRu8eDv4RJpexFnvsMJBE7cZ51oBY2vdm3Gb29GCERoUpDEvsMbQp7PRX5GYtrgL",
  "key18": "XAxKQbdYL59bskFyKeYvNfLQVvKzL4Guiar2xW9iQntiapcXUWPKq29L6BvrpN9DjvKowYNpxR7QpLAfPxdY1NL",
  "key19": "4AdUnHgUVCpx6RUmRx8ejKCBqtPSteieJeNfw7maWqpNqA53MJu4PY4EhfgiEshopPKY4zSZd9XUcLBCsB59w1wU",
  "key20": "5Xu4HVi1wpTTB3nW6SNY6sz3mLuFJfugDpNQ6x2XRcZVASbDPNR8ndcFcXRrenMD1XD9xGc3R3LLW3KG8gM9eqKD",
  "key21": "oszDa3vTUpZ9fBjSKC9HXbfMFva81AtdScucav93ACho6KasH3BivFErsac2Jnxswnr4TY4m91zRf5BcqPXfKUk",
  "key22": "31RAYSF3bAG7pTH3qneqo2ZFE6E19XDtataVHWqqwgdMsBeraoVovCrb3fAXUvPJvJ5WLBDTZYGei1FZaCkstBEk",
  "key23": "59d1aoidjaum4W8uxAzhfyKaSCkhYsKJQfdzbjJZgi5rdmWwE2MGU9tCJ1ac9xqohRoFGtgJhjyktL6z7Ha6XeCs",
  "key24": "5xjKuY9CZq9Wbkf9cDVrciva5YRfeeCb9DzFE2jLhN3Y3Gfvii2TB9uLDqDbWJiwjAqkNhzdVZimhKPqs4Xx5nS3",
  "key25": "3Emp9ExxWJMQfG9eaGntM58yWeXzDWWNQrdStW4c4Q3cJ4xsX85HS8YKdCUrnBsHyS1ECpFvDKszDBRqSVR5QhSV",
  "key26": "5Dg8wJmE37PKqCv2UheGS5h4xYcsrSiajyT5AmH5ep6WJnktU7sTj3DE6PnjpesDe7sUx6ojYTUqF1wrffhS4RHi",
  "key27": "3FoBGMNSxzPsJjujQXpSpNYzPxbbPqp4vPEZafvW5dDZkMiFEdexrXP2P29q9p6DDnqcvq6kimtwZByQMWMffc3Y",
  "key28": "3zQPWdmrr95XNJYUh12jVtnftrzaf37JRBnsxTWqdq8TcDHauJtpPQvkpXZht81z3Ah8VGVTvY9p4rPn6rHpqad8",
  "key29": "23Q6bJ8pFpAoKtVwViPArE3RzGQBvUJ8Zk2WktCCNy95tipvV6Yvnowdp8xxpjHaZyAfoZCisFBUZ4Q1ENJ5uByY",
  "key30": "z161KKPmxgEqzPJn9xeLuQo2PpQjcko4bC9rBLTkCkqXx5eXZjGnHtw33vSGpcFBg6aPXntnNJNtkpuZxFyeAMJ",
  "key31": "3Eapv81FVkpeew7q8AuQowFjAoWmeQpJVPWxNcPWtkSenhkKNByobzX1oJLZmTFFfoWZGe8ivsSpDvQim2yGxpKH",
  "key32": "VRBf2Hfm1ZNyTaFDVx1eoJBMGksgBcrn3N1TvjSHQRYjdVQ6QeFJ7bMMNTGojhmR8UzxbaHjH8cmg8ywhipyYgw",
  "key33": "hSmz1re1NmNsWzGH59TJ8c5RKqYNDq3hdjMDEot82EYuj7wzoBbg4M4iKL7Ph1YNG6gVPj6GT4kufBiREWTzC1b",
  "key34": "2Q218FwBq4UaZZFDds5LQ6gUK23oSnsT8QFnaZn8xf2hkP63aobsMcB1uGH3hiqYA1ePPzs4nk4sNC7YJanjRJtJ",
  "key35": "5XwDcqHbU3jircjC2dNH8CZfhHNu1MrGhYVkhjoLzB6ikE4kx77skB5s7zuuEvmhe7VFXZdUv4zrHk2CNqF1fLVZ",
  "key36": "3uY5ZVyR92HhULF4BgasBapKr6Fs6241iCynPqaFgB4n3fDP8Uqsvhn3CZSrXRGBWFaRQ22nd8Ej38UDCQz3MJsn",
  "key37": "2pe6wkor15M1L3ow1qLEcc2JyN3gXRFBwnyV346QfsAz3pY6msMMQXf36SodK8cCzkcqqJRjUUaG27CsFdenZPa1",
  "key38": "5eApi258JMahCQE4TKG1Hh4ALyzK74zTc339go6WSne5cM1D97q9XAkL3oyk74bmFSr4VFEEWih7bPzntShsuFNv",
  "key39": "5VhpDLS22fhmjq1RCFc5etGDMjFbKWxrHnnZxQzxD8AyfvESAFE2E4xnKEou9PvWdn72Uw95evMKwfZ4gSakpC9r",
  "key40": "2FMhTLux7cSfYkWgN2tjC8M6cRgPcrVmmFWHHitXw2vYHwjjmPKRPm9gTN8vGukz1dYbN86bJExKKaTW24Venp48",
  "key41": "33XTB6cW9hL7pc4SmFd55WoU3scBCZwrRgSxupERNKbxQhxMkKTDQ1kLTVKXg7od7R8NrmTGdvzsKF4zSwLvcwN6",
  "key42": "2jtsgPDU6yNo9eBFiSWkPnLrW2DDCccYLarxN1hrFvdAaWKeaaJcBWVdCcEywuRjgnXFjB3DeEZuoedHTzg5c46K",
  "key43": "3rKjxDw2deGFGCG6niEacn8fqZTrSfaQhok6b49j47JJ4tC2aoP5sBo1w4sWWHx1Tk511ShXAKQfu1QvoDHDXpR5",
  "key44": "3Tj8zvXU8XhGNFzBgqkkZtCXgdmRMuSCsjCsEEM3xpbDmExtT6kT9CdcZCiDYr773oUH1zBzwYT5MpiMqW9EJFTA",
  "key45": "4aaNjU4MWC1265jC4CrdS5ecE4vtXjDtyybBjco8YiUyh6kiDwQrm2m9C4vH4yjB7dvLXKnb6tFoANdtLUKWe64a"
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
