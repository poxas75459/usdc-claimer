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
    "66aNDxrRWWTJTL6gGy1tgKVVErRyGjtw3SGGJRMXC1Bp7ScdbE9eWQUA56krrYy5W6SDzZSXvULuqEnawNEi9DMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q5csFWt3QJvG1TzoBuBWnLxqnHXAMGadLyCnCecnFwjQxNsay6LzK519a9dvtozcMk1s85RYgGCRXC49rRMXoLL",
  "key1": "27doDQmL1Et9rW7ww3sLQoSSNKx7PhcSjCraT8vKiQjbQQ8ArNJqd2yZQkFBcubawJivKcM2jvLHqjNVsP3ZRutX",
  "key2": "3u2dE96b2n1AvRSdPyMXnxZMRioxXsuduQ3icGtsdZ47a9A1MK3RZcWf6h3QfNJpACAkeEG1Bc8mXb6vbFxKDxLm",
  "key3": "sz3QGNwWcyQo7v9xhNbBEHPL1Gr9u9kcQHQYvDeJoJVesRYRjzUTXtGFF6xndREDyTsijm93LnTUjFtAD4Rhcov",
  "key4": "57SPHqBrVgs3AgEBqEgmc6abWmbqkfezQGjrsRjLmiwkjKrvjRAXPkYyteTdpBK6hfMVTKenVpJfmBeMZ5jQucQn",
  "key5": "49fEwJ6i5UnNxRZjAyaH23T6LpY54ixTKFWcmT3AFeHgwNRXYyr3ptLp5LXY1Vh9Lb9CbK1THGHda8EpbwYW8aFF",
  "key6": "3sSgmRq6YmqhWV2GrGoke3rVQyTr2sa6i6AGcDTiExfHKPnVMUgYee53itFFBW49JrUkEQhPq66XXTVyAttqLiJd",
  "key7": "4wRFoU5HYHLSdnzET5eY2WketX555a4YtRjFQPwrj45PMWvYieNNfG3xPAu8Rrg9zQ3n6rS6WM1LhqpEVchGhHZv",
  "key8": "5QjgWxDEPRhUg95fKVXCg6pU6YYH7q4whuKoorXbdBXnWTuG5NWjygaafS71F4SsHaN9dN1C9y8cpJ3QtePiDspM",
  "key9": "4QepscQYWV8Duj6WFtDQCKCwXTBHw74S6tfeoc5bkKAGJtFYxUydy5SGar2Aje7t4X8pEQpESgHSBP7M38FAbLv8",
  "key10": "7gQEYTnEuistVh57EbEq5XywoDaX4ugBgvNgyL6mior2JKz6sj3yqCG7PuccRX7Qr9262VAUoMdHBPTbx7DtVR5",
  "key11": "pTazdwxzRDSd3E6CY7a5nLfvTgea1TYNuNswRpaApoYF7Xt8ujD6UASuux2rj9yWoDMQr7pNQWbGXvUcfWJNdJD",
  "key12": "2D2e6xMtFBpKiqcqEZKiyZbeT1U1Ht75N5C5VQrv5p27K9T8Lik6XYRFYt3pEzCYU5iZK4kjtUPogPXv26CqdmCs",
  "key13": "5JEm7KPNppWFbrwe88K9Y4bsXPbrJoDDjhQ6disiw2sDAz627bDptWE4yPLPiCyuqWYVsLa2K1DxGnjseBZWfviV",
  "key14": "5yvXfvJFM48zNaAhk2iKD24VaCj37VvtnDMztGCnPRmHgnQoirA5ouPA6XxP73Ajp6DgaPoZZhTgifTq1s8xXZeT",
  "key15": "4DzRpbS5wwZpNkRGQPCZNR6kjEMLCZ4CVzTFWHJ4YVyZACpoapbU7BjnTDwRa6PMVH4wrzjqZ6qGDvFEGNVYBdpS",
  "key16": "3nqFfYM7dNshNhwpJBnD6c21GVAgdSp5hE2Qc76y6pYsHcdXeiTumF8D9DDpSghEyr2RCNSRFeef4WC7tGhZWdu4",
  "key17": "3XgVre1zT2oJdpgdsD7Nh9furpfYE3oUg9q368nYDFocKpggdVeHR1nuAqM8Upn6TpSrnyaXa1UqJPvdvG89XPQn",
  "key18": "4AxRtVJP4N7duNT4TFr5NPci5xkwgZj1XJ4bJVsTsdJy4hcFzs7y2t8BBpdeo1AKHnfh5j7UZ5HsLCd5rkvB1bEL",
  "key19": "fPiUnfpykFdjeamoZk8KrDLTzFLEGCXps2DBDdyB1e83UaEAjUPzCX2nVyMdKduS3spNAQCnntrPD3q4cs9agzz",
  "key20": "3aehJCg2GuUwqMWFebjCgjqLLX9rx1sAduTF6zmBuKJqBpiJ4Wg9hZfesMZTdLUv3mCoWW359PF5Zmy2q7qHkHK2",
  "key21": "31msDGiRGvfFFQVVi1D1y8ytpcZt3Vk5qeDEfNLcjXQPtEVXJaTwQ4KuZmwDJRKeN6JQRYoksqi8wBvMx322pBNL",
  "key22": "5kyKSSTSFKVz2ppyqf7qUGiwYC7zPAZNF7qkwUmUGfuTxx1GmXbcfGm7rJhxqQZsxfU4z1DXh2Aqf7eTrqQy5BTt",
  "key23": "6EWHmLiGuqwZyK82rV92sS1Wzupf4YfiEGsxpySWDtw9ywo7V37Jb5oMmCHjpMzyeqcdf62BEayuAWvAE482abg",
  "key24": "3oXF6E4zgX4WttSuVVDRpc2fMQ22Q8La2hFARd6zgWzgb1tRBvv1Jh6dBBoPXBF7GYuiaovPFCDVc1MrEtWKcpyU",
  "key25": "4vabZt17ukpkQzW1KnLqXsSesrp3cLsTQG4XAYr4wAB11VG3Ki5bDQxmyermNXsUJxhtV5EW4C13QwK26X2AiGKx",
  "key26": "5Y457xhiJGS82c6ZKEstN2D6gk54sqbZX7Ere6jzASySd4YzeSRb6H8HUddsobWsGkpEgQabhkU7RMmCExgkqy7b",
  "key27": "58yrhCzS3xZ5Khpha9gfEwxJaG1DPK3JhBuRfKMnckHgBAD1Lp4UsRuWMruYEJoH538D3debjTT2XuUBdZtxuCq2",
  "key28": "3rva2nAVg2QaefUxHWxg5bZDExtx7UMUuniK8WbYCGWqiedJMAzpvegxB35quURwg4zshmtcpC5XV86MwqanRjgX",
  "key29": "2XABALjBr5kKJhHxUEQVY13qJsuoTUK19cjLfimjkKdGnQkhMedjEWmFpvH6uCvfVnBMu7paPEpWKBPQrWK2TXmX",
  "key30": "3RkGTbgmRoGiTsoNE1njh1mR8M6fmGKPEzcNjNUQbDp36rdy1b2kGRL4wup965MiwA1gzNicoB4V82Yqbio5srD4",
  "key31": "4UxsEcEcSqBpy8N4mUMMLqtggzNfocbo6zCdCmoM2nbap4QZgT95B18rpjoRFM76uZEE9jeDf94ugZtFbpTnfb3h",
  "key32": "2wEWvuL5Sq688c1KX2nnDnt8o5w9V3tsxdhwZKSMwKzoSDMM5RzPNAVex8DtAkBxxzkRgGK48HWvBHiVgWh9JDJ8"
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
