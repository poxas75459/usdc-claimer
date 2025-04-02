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
    "h9vrRPfdyFhFE6Q8DxEuUu4XiMSQQX8pTtWgVfZHTjxzxC1AWiq9GcuhavjN9wdUo1kXquUaHeKyU21BrzrMrSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2811CbCjehhASsodQc4L3tqc72Bo9m4MhgBLtGKYyPGrmMDofBkpYt719VvrQ3PeoX7RiZS88waMLxsSutiWkArW",
  "key1": "2xzdygoSr58h5hdNqXiMn7wyJg6XuE5WMSWZYx8f1KVam9mHg4LPffjKaCg4H7daCKBy1FmivuPkwcG6BTg2YDvJ",
  "key2": "5Ho958i9tboWzAgXw37R4brSB6FkbBNVPgnggVZ1hjcCgyi3YSVkCwBsL1ZqNXqxuWYK6cAqpi88h7Y2hd9iQgqQ",
  "key3": "Qg6jWbgYq3886trCU2sCS9KwVJkRxAZXmENjmurFwL7hiNK1eEyeaHovH2DwQvjruR1gtz2yrMgqsro6GnTuHPT",
  "key4": "2HvQcJrLegYzVnZmSPBkkMs6vUZgVXXbheogZYkYrB3dBRq7Y7i1my1qjVygybxCg32yJxKdk15pML67nQHEtXwu",
  "key5": "vKffJ3mBLMbndCfVqbkHNxcD8gwmPRSxSyGjGwY9U8GFwsrZdMT58LgKURZU6aNmfvgjDpBhurnMjBEwdCtci9B",
  "key6": "5eo17MpJBFha1nVtpx5KgeMx34NofmqJxk7HXLyB3Qq2vkU11jsNLhJ42nYhXGCQzwdZxz99LULJpJUj3McuZAUM",
  "key7": "34MoBgDb2PCgrCathgv9HofRCteCH5dnPf78jk8qjkY7gtt4nCcoS5n8AjkFo5nwpyCe3Db8xkaBTQ2gjpk7YvLV",
  "key8": "5JWgy3awpvDC1FaeknUGbdHB4cCrVaTudJHTfidrx72WRDKnWUK5U7Zyx2VfXBK4oNcrwW1J5TfCwzxNbd3mfb27",
  "key9": "yRUAxpRPufGcZJtiFf18SwicH2GrUKagHscZSNUDaSGMY5YnNa1TbMKRR7e79gC8Z4taN9JHV1NbeUTPQrjiRuD",
  "key10": "5wgozLWV4uK33ptGPostVHDzi5SBQBYezryDFXX8UtKnNyy9yURaThTzrh2kGFYpdTc2whQRRsvc5Ppg8CH6BQ4s",
  "key11": "37AtSZKY8RJJwCN3emB76JYv1mhjPBubhxhE2H52yPi65Upkax6gNqvmDHUEiWFeQEzFLo6rgkpDmfeJFYnB8BKw",
  "key12": "ARLEeViUz4tLyyzK54Lch5LLFuvLpHyTo53oPuLSDJFVsRggYxTsnFCCE3bVbT4vzPoempQGtPK836axLr41noY",
  "key13": "M6CeQc9f4Fi5SESPGXVbRVj1cHMzEEXDzDyf2bvFHevezn4SHJCoc61d8a5THCbmNuEMDUV5HQA9zu66gk7QU89",
  "key14": "5vka2wnMqhmg4NVghXhj9A9NC2CntiBmjNdEhwyU6pa8oVqo64LLdEJt3LfWT4X22xKQcxTAZ5LDjJFqFHgNpD7a",
  "key15": "5HEsRhZjgAeestkKF3uJJMGJcVx5rwo8oaNqtqrX7ubz2Kc1XV9qRqTYaichrKTTM31bfRLcVZRq8XseC2vpYgmf",
  "key16": "2ps4CLhsQdV5i2fFGKvJFwHnwnyeHvXtmNYfAR88wyp4L38c5WuA1KkKtLyEtq8tKRHzfFEozBZbvBFAW18UkQN5",
  "key17": "WbBGrLte96nakB6k5K7GUiQVgtQHhw4p2YFtaYE1EHcfmb2V2x2xTLeLmjvUe3nypHPBBCL4pmzjCNW1ocMuKNW",
  "key18": "2nAGcffFzbpK7MJM7KC9tuuhBcu9N8sLWspoyeLjZ5autn21MHvxDrUKsuziLbLggPwsqezajXddzfYoit3nLuF2",
  "key19": "2PXs4ehDX92V8YC2btAdczwjQ7dRjmiozCDcvw2wzDpRVQekbs1ND1AFk3HNBnBZdcQR8T182vnxCuKkPxa3bw6c",
  "key20": "4ZzGWfBTRXArjsd6LFxD4nJd51nA3sXPBY1opjR121asrkSDJS4FypTkUkJTw73CZ1tywGnyEjcYtHFJvpLgy24c",
  "key21": "pBqtXasZYHSej8odFz9EHm82BDQrgsN7gY1WyJjA96Jq5yxa5oWS7KxW7mxNvyq5s69b3DmKsgMySWXTQtzRLfc",
  "key22": "28T6ouG3k68LSEZ6oRBZEi3Xui7fDQ7mfumJSXPLzbFevTe8jjYZaFaVHzjwHXAM8mNLdJkT4NQiTArwMEmAAa1V",
  "key23": "2k63FQUwaW8cQcnrY2GK83RB1cvNFDNL8qda221y4285MR88dA793phPce9bVwaVf2fPaRJaUu8f4wYBPAey8gz5",
  "key24": "5Q2SGgKpNyMg7gzA875iQ9d7Y8cimSB2TSX9EWhoDCyBhWiLXgA94nGffefS8WEeDGEc9hRFnmvRW8fC9eGwE1q9",
  "key25": "4mbqHDSEpTEa6TKXEG2559jenoUBYtCQEFN38zA5Lri5ry18yevbvFi7SLMtQbz3UqMfhRPUCRpMkwsctyevPFuP",
  "key26": "8q3sajYk9xk7ku7Q2Zsf4ZX6S9AyWpxGtxTB6U3aU4sovECnb5LoZM8E8e5Ys3vc6aTB3JQjfM3DGqvaKSYgWSS"
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
