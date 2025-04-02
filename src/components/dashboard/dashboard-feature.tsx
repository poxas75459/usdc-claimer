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
    "5patvjTTqVmb6GmGN8Htt4dvhFWDvMZScyBFZWPneXpVoY36LWsvfq4G7a5ngVWYBecLQGSZ5c8JAYa4aJACFWMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RrVVXYmNmcoCrerQjVFvfHio6L4MK3XveAhNAqGSgdPDu2rHUpz3DWzVtf4aBbfa7TgiEzd9VwsXRRnEvT14GgY",
  "key1": "2jT4xBApEH1xJPM39MyY6aeMJChtDPYk5D9ERmy1Av5NKMw9dnaXYv76XaJVE61FMAdEYEcGUrntBTfuenBpMjkR",
  "key2": "34em5dw2YMZS8L2kr3tpbcG9NG7ePCbvXTAJJQFwzess8BHcokbMtYWiuiqSpt3ZXYpMZrWSpNfGNXR9k5zgLfv1",
  "key3": "3E7MfnwHkEh7pHvscKqkToso6x9dMjGq9ADFHwLfmwE66V7WEQZn3ixxxuLgSZG1SeciwCbswMfYsNp1PyNR7Eqd",
  "key4": "b9dE2BS5GtBTqVTokWp84tpS4tV5u8PS5k7QPr5hioRZspfupJxRifGvNSjahNY1aoxkpAb14DCZT6BvVoic4pa",
  "key5": "3DHW3sGnBZ1rL4maBiXnuz7jtsw7eaHBrcTweSKSBS7ZDeig6HjoTf3y183mDzFK49QBgbXfVa9x5tdoyZ3vXXUa",
  "key6": "4cBN5oz82GFxS5P7aT4hHG7fFTQhTernbbVmErkPW2nkijRSMfmUp8MjNJY1xF7sdRGaTyeqa9jV8tEBEmPdy46F",
  "key7": "5JVduWKF568ghvBy7TzdqMi5MvJnx5o8CuAupx8xaXygg6fGYT64Meexmw1ws4wJDseABYFjsD6SZ2zVtdRj6Fj7",
  "key8": "4bPY9Lc2G1JBCb9rNQQNnMPXMziAaGDtzhVWEMi8FYt9GEp8aDfWsJcFwpdGr7TPgeyif3ZK9GU6qpcsHRpNVyCt",
  "key9": "2usNZNKHT72SHbUQ3SzYDmz6W9qbFtRQ7DJckAUpRGCo9CcdJ2N9ZxziNYCVuajpPo2sPyWe7ux8pwGuUvGH7Hkr",
  "key10": "5AGLvHrTqF8jAKH8gVBtfJQgL2WiHW3WXF6QtjdrYAdvrXNXaXVB6R8QFpV6VaZCaK6BsozMLXFMeWqtAXBfj8wU",
  "key11": "CPy3XSZ4RpETdoFKozmco9vCTter3Fywbp3e9oPNnUKoZ9U6s5xMmy6Vr7ruppWmUjBK6SntPvieRYENfqTqTKP",
  "key12": "4nx5eePXETgVGTBoXfmMLNNnaYx616fmZh3zWWXQSdJXSJzq2qeZfDYUewr689qE35YiGutPijrAXq5pMr5H6nVa",
  "key13": "64DYdYbgsaMosG5ZtPjoHLZ8578tAqJiBs3ofCsMrwayCuYdayk8mX6uQgV2zN44nnGXo7qFfW1QzbdXo4UrXPst",
  "key14": "5SxhsTr2KqFnPjefjTsngDxmppGJenTB2NypizZx259UtbZXSZZTtgzsksYoFmGWnpT2TpwNkNkYJPHyYLE6bfGc",
  "key15": "5ZWNjJG5eSao99Ji1x2rJaEFAYVLxij3frMTdJA84qNhPUnD85eaTnQoRL51jn61kLqFA7MCXpvXkcr7iX2kgJ9B",
  "key16": "4MYYSKqrynnYFkTj2zUpQeQiVjhMwS8Vx4yK6R68FZa2VRZn9Wyg7ka9JqAEsPnFNcTweai2Uc9UjUmtnUSrMS8Z",
  "key17": "5UCobixmRxLusmE1ArrWKxGQeNSpSbQmfDPwd2uPDxWS9hr42y9Hk5M6XPkrgf1foo8mCMzHzH3g9ggGuDhvkZJa",
  "key18": "4SBKwUFSn67sKRv33bZ8RUmeqQqoDjTsd9BXEXP8QgixYAGrxWg1FrcCPUCmkYK38ZMZWYURLYznGNpsxxVx6Gtj",
  "key19": "5UW6awg17YyGrm15MqpBUSuS7tHSRtqrySVSbZV81WiC5PtPvuPQNM98gRFc4yeup8obyTSK4Mtc877SepeQTmK6",
  "key20": "31Xgyo5LFHgsQiQ6zoqKzubzJSWVDDEN5Xzg2qxQzDCcZpMyixbxasHSP3a9t51VefkHYtWiPyY4qmBjiKaWs7R8",
  "key21": "5drPsPA44vyzUYFcF3xmbV7Pks7rcAr4JzjqBMRRx4PLm4TMDJvYaxufmwYUxgJpyvzfHSqHdcfXJaCh8MhW4xu8",
  "key22": "3wQCP3hzUYvuoneFDZUJVf1CvMuoeeiJtWJS1hLacKQBY8yHmFrNKpVWLWyHTRAeMTtr4UdejTvM2ADvUGqka3XE",
  "key23": "5VLGvqoKsss957jyQ39U6m13PgxYbGsrC1FYd6SSSCu2DS524yuGUYbq3u4VGGNby8fR1Wrhtbp5kcxp7CkxWYdd",
  "key24": "39iAKE8samaaiemFXagFweiGfezijwhGY651LvDXEVEGrbEbDGnH9hsXd4SA7xLseFssGa84Zi35H8T92zQwdP2f"
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
