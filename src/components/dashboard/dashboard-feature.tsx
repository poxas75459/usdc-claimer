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
    "37ZYP1G2fJbWaw6c2sFdYYWEAFuZmWSFxV49xEYwNFgCgqRnRVh3eqmiuugZdkzMkEA29NcPfSMvNukVEX6yiMnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mkwZcZXw93GvUq3VvfCjbyh3r5Lfd9yVTG2ZtvWgNv6H79tRWr8vsjveREgboq4YEE9MyVgJwFAt23Lqp84sEjM",
  "key1": "4m5Wms6RNdCwExiREmMWX3JEPnZhhgNefjRvHuqQuo51MfyWEy9ENLXzu4RERQY6SFB5RQi3Nj6bmzBTLCCQS1nG",
  "key2": "1gSFFWUmeYWH7EEzjUhoSPcaUN57N9wN5Gd1YzYwGeqkLEGiwisR3KS1kkpDVsZgR6DPDJQVn4uSKHMgbA4ti6n",
  "key3": "3CJp1fS5ikudDMABEqJN2tY5GW8YLvR7VtaebkF8fY1AJbv8edEnmK1rXMCqKZr3mzWhUMfUvJwZKuSHCjZXt3f",
  "key4": "4rW7yABwjWySPpzxukddL12mqK9RSYSKAJvxiYtvTXFTfjFTpZw3x9faYhP7CGzig1CaSWXhQFKUU2dSey5WdytV",
  "key5": "4PZQcZNq3XiBHow4QW3yKW7ozSN5cEy5eh1BWsMKBoKP5S9AprR4jFw5KdWSMshGjymiyZAPsYNzpWL9b7rbXvPX",
  "key6": "5vQRudjf2BASrBZwM7zPpMKHvMfPUWj7AQTwvCtsJ1gsLdapXwA5n8kZ6UVKMo68BjmUMuMkYbdt42A3yR4La5c8",
  "key7": "3ea2GhndUZPhEPrpAPF9iTCbtux4hSyEWnCP7DVApkLWgbDubhkY1oaHuLEFoJUtVdynQfAX1D8mBKA9tuZkeCZk",
  "key8": "5Vv95zAGUrqcsvFHVVZ7PezP2dc2LHeXvnVUwFjVVDXbtfmr1DnZ7BcUymaezkuM77BL8ZfWqC4wWfS8pnDvo93R",
  "key9": "3MZsowCE9gghF6NPATq4rp1pH8eA2ghxgz9R612nvD6aHeYQauy3J2uhgV5vVNvgphLbx6o636rWybRdkCa1vVYB",
  "key10": "KBUcSurnZVtAKpTmjjY1q75kF8HBwmTuJAfXsWUpwxuspjaxHNdCjckNPThbbN42J5ScwmMeKoVEuTHu9JuHbkB",
  "key11": "4HgaUQFw1L45zKAzsB4xGgfeiJpii9kUWJY5w6LAzMeDMocQKWUXeEWqQe5m7ozQ5G2QFoVRd4xVpT95ZLnM4WqY",
  "key12": "3cdzRM3Yy4aryhcU8Tq8A8dRNTpMrDCvHNTX1ApCaR6zDWCvXSaazRqrqbWKqe1YSDZaMZXLCtYLjCKPWpWb6m8p",
  "key13": "3NVoCuvnqC5xFXS5Thp3TPpzfVPLMhJUmBsVw2vUv5HwFUN8tKfH4wJJtPun1Dn6oM9FDsh2bmC666uTw2Y5tbyk",
  "key14": "dLosPPCLm9RJzLJE2WBnJRtAQ3afMbacYrtPhdz6ypicQdGZN71ewu5TgWHayz9yV5cRuABCNDkUyw58GJieuKq",
  "key15": "43kSVU9Trg1Nmo2c7PWC3yfQE83C4ds76hSZGRJH1h8PeZVaHHEpooCNuPe7Ki4HEwoq5dm1v8vjJpLKCcmmN8WR",
  "key16": "nQCtWkoKJC3HoHsNKxvpMNdn57MzvpVbKnE3QAZBWt457Tk4SdsEwthE4J9p2JFE8JUdwj4LW9txZcuWPwweYdD",
  "key17": "6SeW8TkXxzpJdGCEeyA3Bn5Cg949iufUVAFtEAFjEgJ5pK5CLoip2zLGZaGMTdtL435H5LtsLLowvMEavBq7H6i",
  "key18": "251fkho1KCPQQZooSxoz9Qf8BGPQLX111SKkW7YzoYR1qVkQkUppaNyhmWV8ZjpRpYVa1beGLYoM31jn4q8WFiZB",
  "key19": "67Ce9CMWYqGtcty27VtfNQpMZzdiT3uArBcyuzVcABRVncNqNgFaUemJpiwe7eAMZf7oJ8ednRNU3aRyUpRQTttP",
  "key20": "LRP4zV3mmAvSweKQWPCTuFYQx9ZvgGKNf13gR4EWVewiZd6pVewaQwNJH8hPtnCNQTTVqqrQQu472mydk84TwNs",
  "key21": "2vF9RsvSQiUuXULtpcenK6qDjG5WCqCZrRWsYPXLnBTwyF7u2zae6YRM5gBzSYoZ9MdwfPLSt96695Lkc3SMLfyW",
  "key22": "rAdGEWbFMgM1E3MpTdmTTuHBL1EU925MtCPZrJnqLTVinq9qVsfq1DdP7vMiTVGALnYm6fRF2igJy8bToFLhENU",
  "key23": "2zpAR68tcri6MbJcACr4snovi7TX5Qz12K5MH1Tgs2LV3wx8eBPa5ZXQN87wfmWqtSeKCnoLWvWDz1cKwipuuPK7",
  "key24": "uE3WCgCLv4BsFhmKSG9NdVAY12zsFTowALoJXy4cQz9vG7qKPSRsYR65BSgCs8iRBRePXBoWSTcdvm9jcsd5jQR",
  "key25": "5ge9nZuNBT7ApP2NPAZSuUs7msTf5i3vPsmeuEv88UR7a5TJ6VZTGEjEGUdo3SHruR3Q8htdcbqgzuwbYTi1S4Kc",
  "key26": "2zpnzvFTD7wEqRiBWy3iKwYJRWZ6yMaVxxqxnELQfvzArLCL6mu5nk9grnJFBqmKL5s5r64EV1aQEWrcPk3teDnF",
  "key27": "2QngJB66JpviGLYo7GESsTyr3LKSqogD1ZWmXF8jqohqH67egvVSGYcfMceWgdKvPvpNUKxLmQkz6we9mZuJzM5u",
  "key28": "NDKd8FPmPD2bFQLtnpS8CZGfqLMmZQBZycNEd2h9C9Hvh3JQ4KBcUT29aBmc2nTxuGR559X8bhaCymvAtY3UJSM",
  "key29": "44AmUz4trrm6h858ZQY4WPrzhqPm9y4qdiu2C4feEuKkj1xncMadbSRRvVqjLiUBan2rYZvZ6zn94qdX2AEyuDSc"
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
