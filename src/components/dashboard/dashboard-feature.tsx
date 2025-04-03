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
    "3vguvfvUeKchMGzDp2MDsZsP2Zk7ZYAnhMLivfweF5ikcDsWEjuHZy7Tsb9tDs9cs5w5F1LB13AP1Y3Hit1Ynioz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eNXoRhPT55f46451Q9yY6jTYzSiEtUihhujCmdJAq9opQcawg2oefkqHezkVqQv3ZUQiRaHSBvAPaYuabZrdGi3",
  "key1": "4p6zdgrFFfau6keJAzZFS7Do8Q4psSCu7ZQ7rErfPmvHaTQTxHbkgvmiTCpsmdXyE4WFATFSGSrDWC4fyjn2n1o2",
  "key2": "3Cc5i1KrkAy23J5A4Uy4y1mFW15oreswUHRJ2R2hEwXYSHVauFuBqAYRxebh8ZuKdV2CEBK9AXK1zbhBaqN4uDzG",
  "key3": "3Wza9j86BGnYYKTrxiu8HsWUE3FJM6hFB8dczWsspNmEQC5aVg4uyGm4eTLvYPKCG9CcE6KCvuHMfX6UDxjtYZ5h",
  "key4": "4nmyjfY1nLY94CYK8fXYE7LiVaBUp77RFYadVJGKGxUAm1tjitEDupuu4yXCtnEJfK6hK4cWitiMudtL2LNrvb5K",
  "key5": "2BsC2eZ44MtGZYkfjCxBtUcR5YkQm9pMd8nGuUUCanjNAze6LaKaFNSeVMhDescmxw8Wm3smJxGd6ttrAeDKX1u8",
  "key6": "2yjWBPhx9W2KDZtzmNn5F8HYqKWkfmL9f7rNNCbPV7rZZYPyYY5a4V6auJESGnYwhFS5W8vJiZUoboS5e8nQeqXR",
  "key7": "4JWMbQH6kykwPj6mx3EDAdREEibtdHrTJkh4YbozUdNSavy8AhnSBGQHxR2jfx3vVtgxYb9NBiNf6n3jH3xXtV97",
  "key8": "5BkycQxk8QbB5MUS6rQYCpuvTBHg5iegFN7BrW2md9Na2zQmuwFg6dNjURS1w6pY1G9EWXSufq91LYTBbj2HQpja",
  "key9": "3boLZrw3pmcPsRTtXGk3KytB2JyGXMrNMsBM1Gc8nTKSyCRr2qXqq9aRBPyx8EvhUp5V6HUf9y32FUtRkh1zcWwb",
  "key10": "5kso9MbWgyTv89t5UEcxyA2x4scFjAwYuDPkUzTNbG1kYqDP86DPx3Mjha5iRPcE3MXL5KdhiDebo8H1JjNwvfbn",
  "key11": "5wqkuEZqACkhkCYqPiqnGaPVjbLcXwdk4WSsCeYJGyCmRyYRc2hRzSEDBYsDYPeoHgMArwxTnFw6qiwoY7Kh9PKC",
  "key12": "4pMAVkRFaB1XkCtoJwo6HXDXDQ2bvV5Dp31r4kiHPrDt1egxCrASRjyG7JgSun2raFZYrieH6VsG49jGZKyMnQBb",
  "key13": "49zC1VFo9ccx89GTXozk9faKxw4Ja4rvcWfxhFp3J7VGGejWpapucFSaZhVSxao56GUnd5NwDdC1jLtLLGRXWKeP",
  "key14": "26htZhqNxRLgdCPUJX1WHCHgWCY2pYTexFY9h2HTQmzTp5rah3WV3gpG8pomr25DpaYty2cgFZFnfavYsDfVDuFT",
  "key15": "1cwAPSGgJHbSYaYNCZ5qCPkLC8AdN49B3xQiaTXWSKUPqgbwMWYCPY4cp1QiXhicNFGewGYQVvGz5kbaBoszcuU",
  "key16": "5iEoSj8CzPus6vvoSapdcTGSk7TkdHWdLhsTmsJoifHXuhnUSaFjzQy8VS6vxeoVcqHDbVqQr3YK5NfdK3fxRjzL",
  "key17": "2tkmEFKzSJHUhkePsPV3xtndLiJVTjgETeoby1pziR516MGtviJXwB3S8E4FYPvFMxSurc5P2DzR1rqhXteGAo1v",
  "key18": "4BzXCSeMwWYHzaxx9BRbL5Qfq8RYdhVCgFp6NQFDdUyYSPr9zwVZ7gk31Z9j79i6tLcW1oTHbEmRQJe9F8ZZqW1u",
  "key19": "3tMoqr3PhYn2CSgXmc9HirSGpEhiiY53p5PLFogNJMk9iucWLX6KG1o9WHCk1fAjqG2ds2jM5wwipCvRT3DKLyLc",
  "key20": "34d3tHNv2Vr7izjcaKHwZG4mf765SaEuzH9HdfSCRQxzqkZMhETb3JZ3dkZnM8mao8FQC2GtymuXets85cwTqGEC",
  "key21": "35JCx2ZCx6tDqE6qzd9H3m7SKoeq7f54hXjCEJApEQE7TEQmLWtTha2x9oo3MKgV4gV5KHii7qkXoKqAToqPnd4P",
  "key22": "5K5se2dGAyEMGyWyNfm2bQbTHMGdWmXsYJ5MgfWyFBom94fq4fZHTuEh4JySwSeTEDjQA5hSbypzDG6Tj6g2Mdom",
  "key23": "2FDTzgjVh12daG8tgRXWRgg3Qe9aazoNuDmDfXWXt1F4VSDgb91ADxM6AyabgrriWWUfrnXfv1Qx13PczRR3FbEY",
  "key24": "4tJ6aKp6bta1D1zJ3ot3uzPm81EBNFywiaeQV9rWAKjrAaRp3KeAhwnfURKzViE5tVs3R67iVKL6B8iufTUWyKCa",
  "key25": "4KDdDwJGGxQJ5AMYCmYZdmXEexcdGZauZz6so1WoTngLfAcNCD9UiTMn5benL8koJnXH4BQuj7yaThHGdPSSbUiL",
  "key26": "5ueHjPgokLjU4Mja9hYEMjZxz2JmnazMrcKMXG26MtJMvakQiUCuneg91sMh3M9d9jy18y5G9wnLDikcc6pRzLpC",
  "key27": "4DyWUKfvQW2kNRydDMLTVDUN7Xba5Fi3WtXddRTjSnqjNU1nRjecoypj9uwzph3MYucYxvB74mMbVFGWyCLoVh7C",
  "key28": "4QkTLjPNSJe13Xvt8VUy9HV61usUU1vHzTxcRQ7KTPNRjTaSreHzCfjU7s1EVpyhcxRAdzApTJuHE12gGDJ8AaUQ",
  "key29": "43Lxg4TUug4gW7aGgddETiHuJTTbJU3FUbwL9EqPapsB3AwsJqGtYvU1mxKN6AeMt4tt3hgxKRU1yzTrk3VVmQrj",
  "key30": "3ZiEiszgMz8347y8u5kXSoVHEkVkm5WACsBccpUqxsgpbWBRc4Xq1iTmipZEE98yD67cLv2F3DNtStp6qVRRgB6S",
  "key31": "5BRaqSGkmjEYA5GNYuxx6J6pTDb9vbe5ceR6Y5quHx5bB62WazPKbUJzWPstk3StfSig7iw9wxqdNg6bvPFRfy36",
  "key32": "JASw4P5h37Ah3YiUCMgcDE9itMNX4t72kNwF7yhDh5rNuha4WC4JQGPQGQunfwdYGFJD2HhdAwSXLJoS9AtkwNH",
  "key33": "nfN6QN3Md6Vp85BeXTtHpkVGyhS3wQdT13C7To9NAd1SmCRbSDc69WP7sA4thVkD95DesbCyrfHuDGq3fDtJ9AC",
  "key34": "4v7q7HHm2emosTLxbJ69bV1a6XXbrLqwCBG7jR33TTm7Ttc5Xcf5yo6aZuH6QgRoxqtWGq7L8PQjaySzrpDsUpXn",
  "key35": "4bF3XxXr6dyoMTMZYKxEk9t2r9cmfLN9Ek7EmsbSBq3Z6XXoo348r6mcWfJpWmTVQ8FismKmXBHmRZgMqyuuDxnb",
  "key36": "29QGFicx2cn3tXrqyvwqb2WcPYvUmgq5wTJsKhswyge4MjvmhXKJEYGM4reTo7P75iScXfpBftfc256GeJY32DyH",
  "key37": "2FTTswXH7xnBZQ6f4nfHKaPcjZVcmJ84zvyLYaA8jP4f8UAw7mq2TGnxKjNb7b8TKsdAarY5oZE9g4mPkdosF3Cv",
  "key38": "44vgW5qvu5rHrpK3yHkBLedJnnQtrKWZXPL7xhrVM74hzAa8d1psDwwyEHNiLANFqEnWrrv65zfGL9P2Rx28ZdSj",
  "key39": "2XwSdzpS9rvLg7bZeuwaGed4aHPLrEgHhDuk56QdWLaCyCY2GojBb6yBxxX9ZAgytwewd5NTipZTpRTwVpjNuGG7",
  "key40": "3Gev6n5XNgqKQdurLddEae9A6kX44PJfEUE3aqyjgz4zdXqPyBQCAi9ACKZCn7KSmUT9Mc76388s4Fd6A5y8qtFy",
  "key41": "3Ryss8fQTMPiphSEk3BCUA9g8qwKrxZoMBKTbPbVuCEgcRcNdYNFzs2HF4xreCnoj5TkoTqMk384TKS522Uz7Teo",
  "key42": "2tg6L95fRRtxH2rWhi51dVoqgkRdz56agthwfWhJqYVttoLzoWrNUqc7NAJztjRLJjaPpGrJT6Zh6VC5DYWcTNHZ",
  "key43": "4DN8UDyQDNruQ5ddZ5dTLEmmF5ge7S8ZMN1L2uwd3bPQuZ2NGevok8P4xJEwRs32CMmGoi5yJAAwpBj71QX8fXXd",
  "key44": "6534RF5cmadsiN1g7hasp1yjHYtidHn3P1izAK3xef7niyckQkm831UhTovYhZTbrWVWq3hDPP6UTfSrQi1Zyaxj",
  "key45": "4Nihgz2kifUCksVMev45MvbTS86BXUF9ZCrbWdQhn1ark9a2Gq64ExvHfbUD3gppN7LC4AJnutv4tbWV9A9a3tEK",
  "key46": "5z9YcJBL9nK9UF9b7Bc93rBjUF2shciaGgZt6tvx4HwEWPEY3ByzQTnm9JjoPQSwABAbnMwvGu8fZ4Q3MGwejZPY"
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
