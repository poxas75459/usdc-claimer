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
    "nDrkoqFGHj87UmgdcbWw9Q8LUAHDhSVatE24hD4BESokC2CrEqgEnbfX81R1YkPugDpmk3ZFMrMYS6dP8zsBFtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YApte659KXtfKDzYt71CXrZTjuGp2mnTsPetbf47fHfUjSqZESWKryngnWgCx2HREfLncsr9A5hrDbyoXov7SKY",
  "key1": "GVRGfKPPBbyVj3D9gfzRMwbsaUqR4VLf5zxFPmK3JNxnUJFCgsBGYVk4kBPufRn2JYDcdC9qS2Tv6DhrdcBpE3R",
  "key2": "5mFBothtEXKHYgLX16VZbEZKWkukr4ekW9ZRwZU3ZQwbZBUYbiT7iW8W6he1EtHEkEd9mmYH8C85rFFHQcx3R8sS",
  "key3": "neXBnaNikrvxZy3zuLsCLwN6NbSsovbyQ1SHZB9qnHyaERGj3bqfogLiYCr1esWbxme12KqHjABCtPMtMmNH5eU",
  "key4": "4wjWUfRChin1zXWt5rHWdjmnMESQnsqoPpa3AcZFPhd1nLAZAbWwEKnPJA3NbZos6ivdJi6K5PFUctpvmwTAgasx",
  "key5": "FA9CqQJ9GaAam3QkKgCHqxbGeM8oMNpMyuMD4QABSCJCi6aPPnkH8QrVL8jQgsaofVURkcFac2uKddpYBTzz4Hf",
  "key6": "34hvdNTd7ToSgL1dV5euJ2kQpUnefgno7ya5E28Ez4gkxLJQBQK5J3Nc31ZaMLdN5L2wQza2246uuWmSfM1S3Nf6",
  "key7": "42vjUSfzcKzEmazTDkZBTqCUfmH4nMA9Q2BrCxQSi4ei48jkEv5NEX5aJi4L87vd64tormTs8FVVWkgRNSerkgZF",
  "key8": "2ttfFuF4nTw3332QvCwNTmRLQxHhA1tRfkpqGpTs63cQAf6JGavpMmDGLQ8fqgBUABRdLieSS44S33bDoDwDsgof",
  "key9": "2czcNWPkcZWsVd4fDRTbDenwdvi3Z5oEenrFDpyNqHBwSJheHq9bpsXjTBxUbu2a1Pp7WdBC72pcnSVo5KjtpCpM",
  "key10": "3c1ApWT4iXR5JzZLiv1GKHwo6aCsCev3c7suVBguuVFQoS3Ey39bnEXc2dpnJo9VY7dqq9VtSxSUUqXpshKZm2Zm",
  "key11": "3nCWaJvx5SnfgD6tbWXZ2grtv3SqVj4HVEyLsBqNwqsuNB5SeQLmVTz7R4h13CKjC7CwySzVkw477FmfpHnK96uL",
  "key12": "FoX2JDdbc2bBdbdRBk197pBdH2yFK9mxpvjnM9jB8PF6RJvTaV8hVG7ZFLUUo5ML6DLUxt7gyKxoFBFbwNKqy3d",
  "key13": "48bAUz24Lq62rJyqMNwdifbYb8hzon6E1tY5dcvc7Ma8NZ2cFAkL2qPbZhfJY9fxcc63M5NdRhkNgrygyYh6RooT",
  "key14": "JN9ZWjgTXYC8ZTU4EdxWaU3vgujEB3zv6dCnKooEcFsH4haESp7yYZyTRr2kqWAmsfeZX2Bq78F4meWJSfnLmst",
  "key15": "62bKy4ESuAMjrjpda5LwBDCSZumV9wVQuYPepUBbkGUYhFubhieh7s7byvhK6fTw13nFkjqHBqurGAVGsv18fsg7",
  "key16": "5zcVxgVGnNqLDtseu9seEsA8Y4xFQbxWYEWs78b5C4yDcwcrHWv4PpdyLzt6MqNe4R1pyxe5qgfmBpfxbqYdHLTw",
  "key17": "NNNjHPMVFFC1roswV3G1fR99o9awBn2DNHXgJLtTmk9WWUUCc5iwNxgNce9mQqTVyPLwNF9pjHaQhmXhs8xxcg1",
  "key18": "4qQwwQDbDTwF5Zgq8m62JccNFpxC734xx1N99NcwTtTKaK1RgyPJCAzKpVsxSaELMdJTB9zRJPjW9P5qp9JbvwJf",
  "key19": "XjTfsiwbn5n4St8nYrDHgc7ZGxP392aJebjdLqEGJkgZ3RxPDTigRtxfShee92XzHpzjmBayTUQJX8ExuRqnAzX",
  "key20": "sApSGeeqYFvaumggSmeq9HD3XiEGdXC6gVFFp6fUPpbEV6juoLcVPp2GddnwtyKaB4KSoX1YMwfdoEZeVg3aejp",
  "key21": "4Zn6KbPcx7f3ksvCP7nKtcL7Wp1tWHkvcJdkUJPNN2cAFGnJdYUH6WxAAUnM5fpFc6yqhquxxSTpPtgBy1fTD9MP",
  "key22": "2kXXQax63H8ue4p2TPxZhsANZYtTBvCVY7AzcY5yha2n7JGh5Lz8pK6tyHTi4aNVaGsHRqDaeuiBuPVJrwqoZg3J",
  "key23": "5FXx1faTp7EwRPGXdbnm2bfAJ1PhdEWJS5sN7xtMGJQQkwosdF5gebSJf63SbHN1DxXRQgDib4UW1BKquYfKRtMT",
  "key24": "tYmrd7YQ6eptDVpgKJp6jC69uGGFtoWq1DNhZEe6GhYvS5rLam6hUVxL4D5toXvVM6qFsn6k5fEGnMLPCmzP7Bw",
  "key25": "5igudZyrSBeimqoB5GbiqezbspTupD4GqAWPgsZ8GcCVdHKWWJyFRtPX6e5x9TNcghWBCTC84pmisuGq3da9P3zD",
  "key26": "3fWociv5ffnQfquwGSpLroRmWS4njBTscnjWyTMvDip4UXT85hqiKYTxNvBx1tJXBRWxraPqVzbvK1SRJD8dCiAc",
  "key27": "5Kr8DhTDuL4PzN7SQ2PL35Ff2kDPCAbuMZ6enXMSDp1LjZshfzQww92kvLzZU8EuCwTxLvjwk469K56mUB13ER9x",
  "key28": "LKUXCvetwyHZZVbRViMsB1KNUH7V36UFpjmAe6Jgkehiz3UQaX8XgqfogUQBiWnVv3zmXtr69xfC8HrTTUU74YE",
  "key29": "2Hw6TEpWrTzSt9UYrWrKCKvCJDWCagiJGqSkJo8ggsFHHXC8NCii4awsozsYZFYTP6wTQs9q2GNykVGnGJBz47z8",
  "key30": "4jARFYYBSdAPurxMYmpMNKv5ex288H35F85E2Se5orUidq9bJyanyZSUnh2Ek4Fyd5vFHXZZUjPt85GPPD4sjNkY",
  "key31": "4xSHHnXeennkMhzkriD6iFxksPmacSz35Hamb1rYxo54Zrdtm6A9maYQJrMogydnmM9zxFXh1g5bg9pCETjS3CJX",
  "key32": "t8N5yUa1HnxshfNGbe3dQtFCJtvBimgnT9V25KgjaeAs69W7EnqfDeJudJiHxeAmTx46ocfvjeY6LZYjZ1aBktN",
  "key33": "2V7pGqXuzRvsP2HiiveXHSKfUr9jpDzhUewKZ1FVMmWMZjuwnSjRR9W24RgsVbrWdT8EUunnDJw7gqsE8XpCTVAH"
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
