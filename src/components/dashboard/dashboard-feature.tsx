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
    "2UHEtNmRKEpStjFmC4YsaZC979QSFbnQ5TuN4a62irrNWVDC9taVqkUT61hF59Qr2WomxbPW2BAnfP5uDWSquFQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uvRgnCuoi14rPLziRtmatPXVBTM3B6nEs7sugKXnLmTj3CHr2s2ZM1q6QuwPaSiPaXi3cLXrGQhy3hfyUfvgmFR",
  "key1": "2usSEMFJNCjXKsWQPQwqiymrEVGZqP2VV1kLCx7wh8iCv9GUzZKKEyxJrQJqKqGio6AwybSLyWgM1L887BoDKsou",
  "key2": "4JSMPtWDMUBYxJiUW68WEzr6iQB24tEWdgAuxiqSBJYGpLxs5itij2RWBMN7nYkC2oYm7sW7yD8UAgquVsmLsJYQ",
  "key3": "2xSUU89Tx9F7bFzqddKfUGGyvVm81V38a1WL2CxDLmr5QBjSLpyEmt123mXXY99aA7Te5wLcQEWjxrbwzAsEWeXm",
  "key4": "5mq3JGBxdD4fZKBVY6mSb7bPwQW9rZQYy9JKvrKFowQ1aabw9mGWeEMuqRcG7ewmXEsSLz1ufzNZ6BRFaAbnymKF",
  "key5": "yGg3sytWKH1BcC9A6Zzw85a7iWLbqo6ip6ydiGEgN9YXxmnsebnVtP1qbbDJ7rRpHtnKzMNs7rmV1E76nTYJdtF",
  "key6": "3Ry2GaKAXrwDAy1UAaCDMux1g8Exm3SE1JhB5312XUVXXeKeG54tVszW8ycpxpatkWYeqi2wqeqzQUJ3pg5im8v1",
  "key7": "4N6SAWoKwB1jMW84SFM2aTY4iHwCNdJ97Ay6hbGxH3CUCkKwznCEA18HdNvnunLXzRxvio1YTovLXEgin4YQo1AF",
  "key8": "45AQczBg1FhhZDBUefSz2e6K5Srofi3YirJ83Q57qhPJeUhurGr3ZzB3BBck3qNDTthz5BpVYL3Z8VEX5qPy2MMM",
  "key9": "2yuiChdCj5iw3rHYCijPzZ3PAoqBXPXj5KguyAGex1QNVRMGQGNNMW2vNERn7mH9tagRDMYHLL8MLuftfEGe4sd1",
  "key10": "2bC4xrR29uBb4Gv8smyRvjRQVoSvyLHUUvQfF559dYUQtWvHXSPr2Hiq83ycNdNULvzT5e2qztSAjbsME1W5xK7o",
  "key11": "NiWJmi2vXEUcp5igSjoTidwjfiThQx7KJsXD1kAePm1HrRw1cMHyyZ96wakJeyPnk91kaU7iiZ4hzTL9Z2YLbuM",
  "key12": "5T9gb7WAeKcg3KS39nRcGqx7PCwL4C7DftTgvSuWWaKKUU9ubumysdhA27hCjFm7UKaBesDXoUXGunu8QnSgnZ1X",
  "key13": "5nu5Yy488VwcKpWNaqoyv1dUnWsV16gq8ucjT5DgdQoYSxjcJsr1Z1ci9Q52UbKoox3mYqcV7EFXn1nsHNEPmqz3",
  "key14": "26xTGd7JYKQGcdtCkAvj37LMivMVMps2uW5v5tJ36mAS4AtjAppbZGpA4JnMcjW9Wxe4MNtTZy1rUHgeCYDSq7fM",
  "key15": "2uLr5NC8e4WwQkxCb5ZA96AiDRmJsFC9uVFcpTq8JWQFVX81e2wjsahmVs7hkEd5inLhv18sdxxAPwYqDcGx8ech",
  "key16": "5vHgbZJyHAqqJZHTMc6BhFxeeG3nyoYXS3gLzHUySnqd7yN5nPwHsBfZadWk6PYFDETjqwthcbc7zeMpg1ARN3dW",
  "key17": "B2TVa36QPxRHmBqtFcreJF7axFUWJx2bFaS164CaLpnZttSLqcnPr5trU3T45X8Y42DJ6UYGGYynpCxX3V31ARd",
  "key18": "64hHtTK35CqTPembsfXKRh2rC5UijEJdzq2WiMFnu34xTDtgm1tp16am8kJrsGuxHkxgSahYfaj44sFZmtKTYkC4",
  "key19": "5GZiEfUqjotQZH17djumjkYPQDjQKE9hqVGsx8KcjxGb7EbZ8EYQkJ1KYHoDUXcHv1ERCxeQDfWt3FXaAN6tWRzT",
  "key20": "5geUhjaQt5Q7dEdbnPFHDM5HzcBTyEcv4a1JkuyyV8RhvAN5fsqfhP8NpRxbnjCbXLqANFiZVKXNGZgD28b3QiaX",
  "key21": "2L88xWeDUnt9y9KEG3BxX1sPRWiy7v3UWKD81W9GK8kQtjYmvp3ABmi9AZHyDtm6ZRdBUMnHVZk2NYurzw13nKBk",
  "key22": "EEMNfvyc1aLtCZSoqSp2uPydkbG1hbBrQXfiK13WQBYgnWSZLPiG259fq71yiSRwPAZy5ftXzXLhZcpvejayBEa",
  "key23": "83VWjcYw8sr6b9d7YgAT4eDfpcDwwsvBEa1XuQvaNy7kzWv7irtJAB72rxLkr9HWkiHjk777A48YJaYWN7kfF6t",
  "key24": "3Cq8CDGZUmKmWjizFq4gDVYaVceSWB4GHKjch3Bnx129p9Zkg93n795K1wm5factQJC3wAv9qCNr5zg3PV78VQY2",
  "key25": "4QjdTBZgNXRnoYheQJr7ittAtYxE3AeYNzM3kGM4wLAwsRCW1bG3zZjMt7Xc3h6CD1bt51VUmnovA46Br4G5YXPk",
  "key26": "61qnBj1dwEoCr5ppPiomr9kd1gfBTRsNjr3K45aBfALrgUMDUwcj2gN2vQ2GhtufguL4NpCwmmhaA1NNddv8i5Nb",
  "key27": "4KXL41s7fk1nqavgKxKnC2uaCzCkfk5eMRYMeDr4RckRP6qPrTr3uNzojS2mWK4Q8C8hsSQ3vgDmPACM6gNtuYav",
  "key28": "5C6msiJMAhLSDvij88Ktd616Cg8fY297u7sN6Anfsvbr4pRshvnz4ScRe7z5PC7uZTN7YEHjcuAqfskFowRH17wP",
  "key29": "3BFT63MYVtrrwcy4XecSgdjef6tiEVxgQQb563WAwZxrUw3oCbnv1mWpww4nSUv2zELorYJXYZYbpGPaHTnZhsdf"
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
