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
    "5kW9XnWagzWD8ZLjZcJyn8P7eJgY3B1W7FM9QCd8zxjkvgp47iREifnAeoKVT74jqgmpsA5eUuV8p61hsFykj79L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jY8gkNHW6LBaWt8UB3PvTDt6cZniAn1A2ZxUxfjUvoxxqnHrz8D2DfbYCCPU2vjCRuYAfuqMEMVh1S1stnaLG3f",
  "key1": "3afhbAoL2WbniUfKpBHz2Kdkx64Mkfkp1JAVkxj9hmwMhNK85ziYek2xxdyNiUfu6HgAsVQRPzTHTDSTN8obke2f",
  "key2": "2CbJvSxFh6gcuutYGvxSxYZCNmUs14DBrzHXBGiNyVhCoJaGfGWjVMJdS4hMXhXyRV1zqm5goJGPrjVrg2S9grJT",
  "key3": "4a5JMQx3hFjPwDAZraxXcC72BRCbxayFs3BfBeeN73dMc6Qp37ASaWVD9n6EVxY2PuuBfrvuMSBJqPseE7VKDY7U",
  "key4": "2JjQ3dhQ5gPvdxkw115K5kQH5MwbKcgzLBHxb9Z4AZr51fc7RjrmVsYjoREg8qXgycuPoFUaURNer76H6SrnLqVw",
  "key5": "4uPFsrh9vTuztS1hnS37GtST1UCFKiVx3ddYCeSi2i78LYkPJEeUd12LT7V957qa5aDQbotDKJ6TEbeCfzLDZKJ8",
  "key6": "4Gdp8FHisGsCovPBXzYPkXncGD3FjtLHWXK6e6az2UUEpHWba9SVvwJRpvp78MZAzqcVYdfRo1CeXRXzthhU5rox",
  "key7": "24Pppe4ULKg1ebkRsyvjQ6ze7xC38AFV84D2yxDyXX9oyM6tdAAmwq7TbhzwD3ZdQ51jG8mLvFFWVyGB8UYRJ5GP",
  "key8": "ghWvUijZ9WxwkhDzFzRFhSCPohKTAQASBsWszDL7v5YjtwMJzz1fFkqEFz3ytNNiWTPPSr7mfs75TTgmsPWkxmN",
  "key9": "63ikDoK9mhe2KVygJP7EUGPG9troMUKjfDR6cmVSuyBuVaBPnW3YuazKYs4VviMWwv5McBudhfXu55uDdYjySXGu",
  "key10": "2bvJY4HAHehaCRm9MMXQTLi2rzjnNe1S7NfL7ZFHCKMosExf6ffsgAxwQunrUL3EpAdZjwXFGQT8yUVSRyP7S9MR",
  "key11": "2oi8FCkShRAQP7DvGYuPn3R3CnJgweAntcRDooaGRewryQ6LmQ2XG91otPLXZNAohjnss8T17AdkR7LTbtpPM9bd",
  "key12": "3PoQAt9jK16SNMEWBAv3fcbyn2fwjSUjAtqzWMVNt8mRk1n3LegyNRLuB6C6iHWZn9Ag6TdHseaSsfxsM1iHtPKE",
  "key13": "4Xk99L4tyaEra9mGLmwH1Xk6Q3RgE3qaiSjuPyh8bzxgZe2yK288zoknebYsz2F419NKJ3N6tn4TTt3W9ddzo2UQ",
  "key14": "2YncqVwoXsRn3oY6gWnKNfZUgZj8L5HjdMAqMsFTbMCHdkCLaBohMTPebcaa6EcynAkTnwGrLrQECZ8qMJ7h9NKu",
  "key15": "5V947cFTHejdqGtMiYoQnbS2PnRyiU6YqsD7p21qiBJmVabDPndWtuSH5TeibR2t4wq49zpPVsQd4HzFed319fvV",
  "key16": "4zUmi5muSqwbwyFBUMjSJa8mb5HBTaWqwVLpNozkeqNaRpFM4x1C4eMvH5D8befnfH5S98qhmuE58S2nw6J57Jen",
  "key17": "4169625VqfSWVq25AEaEH7p1vYBDuchYN1X8kz9TdW4TQUk3TijEYpyWtG4i7LCpNzaQbwu6npMA7EPHXMipXLNu",
  "key18": "TgKFfk6exZT9BUqrDMC8p97ePxdB3vprcGuPasKKBvucaC8MgQYP671WJzfKMciZNRT5oK7D57RoSxi2EQ6e4xm",
  "key19": "63UqeKimjauvjSbYHpH6GbqQZFNB4w2kr6ssXouapzbMD7GmkJhDjrzyHvC2dtqd1PJMg8qNKGykxAEyDMzUmxZc",
  "key20": "5wAYMjNRMF5TAVfwL5fTzaRXPJP5gsAT2Sy72gKw8n5ji5S3pUNSMS8mYWmTPDwuBVqAkzQUWNgddE5Ds5pnxDPQ",
  "key21": "2keCLJHuwF6GtPoUiprgxbFoiY2aC4KsWuTYHv6JtpiZ2JoNJPtuGqH4zd9qkoRUVUg37qug2SBUHBKjj2BVxVgJ",
  "key22": "djmr3SV45tKAXzzKRgqfsY7TjJ8Qtaq3BbC6EPpRwmaMFrWYa9cQ2BE4h2May2xkTDN4VGG2KDyKJTJbU91ynYv",
  "key23": "4hFFZJ9Ai88WXfgfyXFdyoW9KVJUd5fcxa95gkdcrBr2sNnDvg5cgjppk6MLRd54Xo1XA26a91FNr7Zagk8A92mJ",
  "key24": "RrWMWaErjBtos9VEKsrSTYws96CSYreiMVzu2o6v22drjQpZNxFg5vcV5mtVoexM7fFLCTBiHJmuy1z2JQjy1St",
  "key25": "3Z7DC54geZtsfqKf6JFsy44NRWdvDcUCaNgMFcNL8b9gyoqbQxVSeT7DXfFcPfmziFFSMrZVT7M7jLoMHTFRFkLY"
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
