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
    "D4wYqUF19t2RCXWAuDsJ9zAYoVqTsFsy8wgJaq3icjxJL1WuAi3Zknid4AgSt5Aod2xnZekoqAh73gCyT96o828"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cgrdosMeuU9BJ9CSZCvt8LeZBPPQLffQbxpCfTbih29xocBcvxvCdcgBGBh2W8Xv7Xac31hAaCeuYwuxxijkXZV",
  "key1": "4L9d4E4DcYMSjKc5akBRki3vj3RE9fr4FFSqhkTvsD8F2kgWC7xMmKrDSwsjcpFJRA4dvcAR9u3rhw1zEcxNjTNL",
  "key2": "3do2rPXXmakp4NhFZnBos8fZF8UTxbxbqrHt1cnd98kWMwXyZ4bs9TEzp28vo5ZwBs9Fh3mw3XUjQd5Fs9cG5E9",
  "key3": "9iWwm17YSmREsBea2FEShcdt7R23M4WAiYKjGsDvmHPPf4BzmVLHEGsuLNQ6bhXUZTdV4MymvcW67cXk3EnxXvK",
  "key4": "4FWiJgK6M3dPLNkW9deqEqWRj5R5AWfvEMmsxp4vKxKBdrj16d8jxM8fuX1136JisXSquhJX6NogmX95FqiNQrrg",
  "key5": "4JnageaebWuR2eg23tnt3UdwK6yempvBUrsahuUhXsapZRGUTembAxDQDGRE5CtvMv81aRP2DjoAapdVbnJ9oUPb",
  "key6": "5sLeC6tcUh1JCuUTcWf8GsooHe3yDCwadX3341gWitbKUadKsXzyWmrr9B9piHsYgDuH6wGwAnSh6er7FnHb8AEf",
  "key7": "2HhmAM3uGa2iZYagfds7CDRgbXbFvPhJ19ifzXdD4V91RQFtHu1hZb7Qijm5J4C7ZHDWndndJb62H2S5GEbsaLXy",
  "key8": "5A2yZEbRMcpJ7FZ1bhuonkA3fLroWmYuShkE7i3K8TZBQJW85TkNUAPDCXbuADsPKhxBKTQskbJag8LqJTJDPjrq",
  "key9": "4Yvym79X6zZJVde7fCey8wMBwcHCXUx9VdsfVXqAeyEBT3DA6h4sXnMcXBX6YXLidXkzkFxdryLVNfy9nZtR6zUT",
  "key10": "2W9y4DRdxLWtx6n1JS6wEW78nJp8bxv8MTW4qxnmb4TwyyFd2onsHY4WqsivGbWUkcRqrfzkqmvatVhcsbaMMtWH",
  "key11": "PmsLySFRhmS7CDHE8yCmBCk2GcbMYZrpsXGYiDr37g5B7SMAkoZb3TrfoDKYmdANJ4zNNkLoa4nxTCcz3F1CZn3",
  "key12": "45Ssd1mnXe2C2npL1V477asRc9Lf63Avw57X9AcvyVb2QxtcVek7oLSMhTD3cjfg4J3p8petjg1qUFp4AFHikNQx",
  "key13": "yQ2qNBdCumyeN3NCXib8hPmLKnr5UuQHr27xipU9YDtvz44R6keSwiw5LbupAuytxBMu1emLjwAzQL1FS8uLemg",
  "key14": "kE2aG44XsXnGrUFhfpvXMVkgtAfXKM2pkYvvNz3GvkDRv9ccj1BXTRpyhgJbXJcoTkhJ2NxZumVgf7mxzAjVbSu",
  "key15": "dwzEhJiCotPSLNtkukGvLjvKzcRq7TiCN37h5MCVC7cinQcc2UPwLreaFUycwgJzauSYsocTFE25WCDsnM1NgWZ",
  "key16": "BrzQ5eCWZePq5d51jQBjrF9cwExpdSZWiiGJHwZqkkrSJyeNQck48X9AWoQZsAPECDL1r5MFR5wPd4ELrQ49LQ3",
  "key17": "4hX3JBWdwwYW8EuzWDTHtuiBA831jHhHH9XN8G3ibxbqK3zX9444w8zzmE4Y7K72wegVQzLvAmkZH1SewEKNSQex",
  "key18": "5WTJkaPfujtzj8qNAVTWTV71m9qSCiforYJnuQoTkKbSgomL9Be5JNnDCK5REQk8hHMqkYsRGyYYRi3Gk2HzLWHF",
  "key19": "4hfpWgbttNVkWRiTZ7WbAA5ZebyCL7WJ4vrsqx4VWseJQexCf7Tmo9fXJeAcudaiGP1h3enuCyXVc9Sdoes694vR",
  "key20": "3wLmhhPyC3fDFo7jZ254apJjBvdjkFALQLxAZawyhxeEBogLrRe9JfvoVJJTKMroKGn1H9sS6vtXwz4aYEDsDTme",
  "key21": "4RXarRvbPaAbaNVSn79rmnhWGD9ty2amkxQZ4597SQrz4S37MfWetUCwqdb8wgTDFGaQWHag94X45raMCVF4ns6A",
  "key22": "5PvFm7z7FxuMEqEho8q4zpmhT3ErJvkY2TkjNgM5iR3tVjWdh6XtGTjjVtAZpfYLe82DzMCpbHY76555sxhhwY2w",
  "key23": "SUGh4K9PNQ1mFxj88Uw8oYMZCuDUynhr495kmHCntgxV4kswR7hwPTnUy5D7QWZ1TvecidbFcVjwaHYkg3KrSCL",
  "key24": "2igJ3aAQ9jAMN4r2Cb4A78ozkYMB5CWLiGcZ2L9HU58eJbkM4i2ivRYgNqdTkWQkmbBmfzMkQqexgM4XSf2eiSaC",
  "key25": "5qv4X22BTGaL8b2LssfAn1jpU6G6qngiLgdbgvQ7nk9mQbmgzo7CCxDjrNUH9rAHGAJqYDhKRe7nwMmuUxBHK9co",
  "key26": "QPXnypkQ89mH9h47BdG66SPaumjfEFSrrQndj9LFVvvvXqAijNUS9Pf7rFPTrLPUS7DNS2kWXUQ1wpgKNT9vmxe",
  "key27": "5jkjp7S3C6s5U57YworDuvvtYKG64CfUUAr7msiUcgGS9bFdmpFASeEj2t7K5YK23MQayMs5QTAKFefow1VYAJ4i",
  "key28": "4cHPjiHgCwEN6LvscaMJCNgAiA9BMqW2giNMamA6fzbx72yKBSfoN7dvm5ts2aaXPiGGJWKD6YKTLstMhZhNkYu3",
  "key29": "4BdeLpy7QvJS6uHGXtcj47BWMbngFg9PxnDuQfbfchG9QmcpRdsjd9uWikip4AbD9wMypQ25LzsQzrw43Zu1eHMZ",
  "key30": "282o9N67J4fjXLEZokzvZ4LgxjPzse3QXCAvFSHp6VB8R8MX7uAEKxpAsWGWHq8rQTisCKpTt8arwn8XqqscRb4J",
  "key31": "2Ap7CCwyJGRS6t5iRN6rURLm3yVrNqwFhyytQTjmcHasU9ZXePePLiu8AkTnXhxR9MA3FBbjnEQakjHvMRhiitS7",
  "key32": "2FY6scU1qeB9VSTMReHq8WQf1ygsW6crA6NP3FzJjyXybTmdayFxMdGBDA9sGM72FgFYwCKBpfPLadPMxXbakYsw"
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
