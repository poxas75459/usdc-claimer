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
    "34Vvkzxx6RXmt3VNjCyxvsF7irSS5oSViv3TnBjL77inSvLWBVd5bkreewNvncrMjiYv6k9QjecPiEvUZ5Wc4ZGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sdxen1tcgmJzcFDVsCd2k5M5bS6mNVhnF3NpmpJGKTEZt9qU3G84f4o9JKs529VwfkVcuv3KidTsU4SohHhk52W",
  "key1": "3CtuDD9syhxJmSgK3UYTyt3dvTtsyxzKRuH9FCj4Yx8v6beAAP2HWf1Hq5UCrxss37Cg3RyCiYs2YmAtiApQu1Ci",
  "key2": "2c94wkhwBSiqRT1BGKbSbNAQWVjggZ29XtFPZA6vkCXAv2pp2SGtDjjkpDtwbJDbvxy7VNwjoCSkbCQYybcp4FVz",
  "key3": "Q8VKt1jzKq8A4gYebPZusfkqoDnUv1aCvnXNcPu2N48n28St5NuTJ8YCVUDifrysYhRiCV5irMDyNAW5mGKiT1G",
  "key4": "s6LrdYk27tALji5FLmQBjUA389h46vd8ARfoFRGZdbuiRXE6RtVKKY9gLnkug9iVqWWBiwKyW7SPCCZHBNe3tYD",
  "key5": "5uAnQUWk6re5KRh5cCPfRLxRwjpzYEsD178QMZ2ThUQ3Gm8AK2qBhoas791ndZhsPGGoBZqmEJvsQpoKQY2pD9Ke",
  "key6": "24DuyYNNYEGsxYP9ngyFcD7B7Z7jQTHoGHV6Ue3oCvYREy1ixVjHc7Jk2oMM35UfgP7yqfdn5VqpwEmRMSCt9ctY",
  "key7": "SGhvu3b6QFbSirT6jvyXsnZghJCGSgVTmkCnRDkKXSkmjoA63ADL1yCWFbLaaEb1xVKjaG49FRQYJmsPcxyesxM",
  "key8": "369GwhssKKdKgHqzqe5mj8sGU2T9bcT7tBvwZgy8UnpCCRZWuBLbBbACkhGW3xrVt3pJjz2d54aCNo3t1wa7pcNu",
  "key9": "iFiFkfvwJW7Dh2ue7oEnNfC3E1Y3sVbK5vXBQ8XNqP7dETK9AS2UsmUS2toQRr4g6s6LT5BKy6MS12drYzX1zE4",
  "key10": "5LS7KitMXv5LzMy5EL2VNebzRa558WRBKRF1bvaJCiebXurbSRT7jwPjR9yt5M52DX8A3T8BxY9iwZPDhAbNGkwJ",
  "key11": "2aoJN5aT9z7QjkPjKxmkuhun91JyPaJPc3Rvkdtnnct71VdHJMKorUQifLyP8m5hFFf3hoA7X6R4h1ueq9AUAhH1",
  "key12": "5qefdgPqgFmr7wrpoF66ZL9kjrSqWoFdFAVUM4DWYHp7kttnGUHuqm217rpeZz8SZHYZ6wnHtF3wGFjDpdWPuToc",
  "key13": "5zspFCgms7YvQSa12F4SBqRpL5sUH5zAUDTptFJtYmVqZAPfTEDEU1uV6VWw8VSu6jFop29ysY6AJNVKJ6upAmp",
  "key14": "5UMp6cHN8hahdEmGC4WJJSrdnjxjJVw4q8LHPruCUcVpJGsUfkbhuHdvSxD4jzJZAFa8J5jLYtBbKr5CtKLfM6Zb",
  "key15": "2m6GLHoXXugZeDM6nYyMGgYGYcXnoE5DHCuRU4pUZe2KSwNrjcELkodEhaFTn2RT6yoX2FHmUVhiZ4mUa7jkA5L6",
  "key16": "4UETxj8xk3VkU3dFBTM67ZmfUJub47VCo8EJXFMpQ8KHQc6YhxpDqojKaDbSuXbvVWcX4WWpSEsaVxuksBa2Buyr",
  "key17": "3q7JC6U2nSjaH1FdaqdyYPq14FGUFMtVk3xNauYDUh6WXgxiFYdziSnkvTRjBArk7RzfT91xL2Mi7ByFFCfNiLr7",
  "key18": "3kp1ZKrniRcrzH8DfJcYCoFDygmYLv92qMjHdbf9GbUcW7QQ63du9GdXqYpPiuJDKXuTuvDDtGhtyktRX4rygbv6",
  "key19": "5gmuvZvVGwXnWCVWMgn45PMv7vYKpeR2YVWuThzDP58eAVJpYVk7UoyQiWWuwer9XNtqTw7SFWEiQMLMvg817kTP",
  "key20": "5kkzryNS62Sr5J5fmqCuBJJWyp535ZiiivRHUa4S8j7hrRiCo5oZmTguwXAD5mXe52uTGEYh9g6nWwVJDZM1Q3dV",
  "key21": "5RdJ54uz3DQ3irLY2HqCrmD3Z4iJfAQQSdAYytfyJ2oMSZC7fiEh68nnn7DbHPZzw8hXxenqHHsRXkDXpU16B2Pg",
  "key22": "567DRg96RUdyCEE2iE3ainCo9ag91q8HBWzuD2XcvWbcwkJwSdghHqmAt4khJsVd9JpmJQGGeJMH6w2SNipvyifX",
  "key23": "4ncBh9CZucaVdqowF9yaVsqSCcjEXZDHrmqNWqVyFmRUe9Ydi2pdDiSNyHj8bTf8NjAwCa9WxSyLLKvztpQBkkc1",
  "key24": "23zmsXoYqhbsnBCpnrDrDgR8K3f1szfJ3Q4McqCZYqd15vg2sbUhBQWtEFbQQSbs8EBPgbZSUq99DzqecXGXtKRZ",
  "key25": "4fHe1RWyCs8WLhgprJeLN9rpjc9YzFXpVtYvSny2n2x5wCpTJiajQwtGM74btDsegS844aTbCT6BKsPA5QjLDwv",
  "key26": "4PrTuUhPERfHBysYETe3fXPaFD76C2qcCVuTnYwasFUkCcg27WQgJ49Qh4eeEJF5h9G9C8Tqg3qjodXA5f54ATYJ",
  "key27": "4UZbALbZaANon14FMQS7CRRRTEjWmf1AKgy1GoSnyDLMi5PjMVDeeJMzwQd6uCN3acgD92nuoPr1p8Zt834XGAzL"
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
