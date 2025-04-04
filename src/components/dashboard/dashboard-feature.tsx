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
    "5QzCN9ovtYx1m2fWaBsw2JZPi9CkypUdeNSs4MEXzY4sqE46PtxxMpgw1GeTmVHL1kTpe7K3QEPunWPXLB6X18dZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dV1x6CS1SZzxgw8bFUeHW441tdZ1BjtFZjHvU5U9rFormL75x6JQazrZQtz2ESugWSc68mds6Aq6qKpgijGUE98",
  "key1": "22vB2ScjTS6BsyN2qcN9xucfpGr68Jct5bi1yj6KjWMt6CkBtu5dGMxkJvcfY7YRY5jaTNpD2DNB9iRakPvHZcrs",
  "key2": "3EvHjcJ7oJEgYh5gkhMJNfyFPBKFTiKdUom7mf24X7pLBwZmwvBvuu8BHSTCq3KbNABxTMMwfG1QAC8cLJLmLBVE",
  "key3": "2b4ovd2wiPpmK5Uc2ADK5qU9BTJpmkFb7MrCT61Rh2VAC9KeJAfz6psEa9KYTgmRzJfXRsLWcj2BuTPiGYyL4ssb",
  "key4": "5ux41auadj86R4uavs97Uoese2irrgoyrkYwV3fsz9r8CgymAQrCiipjKdNtvvg3wpwZ9AXkDxCHWs4gK48sraqW",
  "key5": "4bHSez36CPtLbyrGRP3G2XSENQpBcEQ1FJnD4Sk9T5VRZSBgBuHFnB8sckYwB14pZHj3csC2b9ubjFgTYnHHdwKL",
  "key6": "32x5WpT3VzvRGufn9iPQHfQfS9PRaA5QJYnbCW6u53dmnPL8mSzmYW1xEFiuyLugGXdWcUxZKu6TjS18McwiLzMC",
  "key7": "4XEpRQrwzuuTaLTrhyhhyAwJxV5Lm31RqkUW5kfk4VKiZrQDEcduw9axgpT6nNoTDZLMKRsLsdwsevCAxLT7d398",
  "key8": "3N724fgqjdPe9zdSj8Mk11evxqoNdsfbtajvpFojPJfAxiFKgPrvEXaBWy4Z9eL9rq7u3owYtNkaNR1T22e1wKDo",
  "key9": "4u5xDGRQ9vKkFsxPYqa5cycLzHRpdqky69tf2xHj8xDxB8XmH5kD2bRGkTn6sDNoALeYDUqURV9AvRw9yDkRHxwt",
  "key10": "17oaqQJNmEwpb9x1ZsoXTw2hoELRUVw13hC939LH1w67BXCjK71BKLtL5tgmAheXQ8fmHdf6cmreWqVaS434dno",
  "key11": "3ZHSDiX59wETtvRkHY1ZJMaont87hLgp4eU7T8K7e84AiTbY3izqYsbETaQwfCy6GdjVWBjeZNUReTFYoArsDvwz",
  "key12": "27YMYdzNY9deDwzppw3Nj9guC8i2VSK25yyk6hkwSvqpR2igv5Hy2Nc7xNvsAz9kTUta2AF4vLRZ1WQwswBkDEyF",
  "key13": "2Hof8QVyZeAdcLPReXP1YvKEQhVCTpJ563wK34UyVbZwh8vPwmgDkfCYN3ipKw7ZvkPLwkRUTznucaPAjfUc1vh9",
  "key14": "5SE1eFR2RJBmai1HqSXGQLzyNcDWD25qA2cAi8YwQQhWwBmFdFdoxkqzhpWhedJX6Z8F5FASLPKpcd96GGGduawR",
  "key15": "jCUSAdwNJP8VHD43AHGA6v7FdLyYxNDWhhjx9UQoEsVKTJokRxpAcuLcTMLropmota6ckSK8oVhqMBFAabUVRU5",
  "key16": "5jR6QfusAPVdVbyqQzutyeBCS9xbZxTwTnPWu8WvyU8CJZ9SvKjy5rjjiEt1iwsSsSbe7ddTiLguudGvSfLr98vg",
  "key17": "5NM26VXKWsED3V7iN3G16iXkNa5JtpotEwPbnVQczkwNg8p5N294tKv8WNAGdZNsHzEUuu6bCSFKPPdx5YWe5iYe",
  "key18": "3EUPc5bngYF4wMsZukyPHg9vZgvVpdChxVDbK2KupBsuYiR5cpUAhNMvL3fkGBk97Z3iqD2Nzvx3MmEWAwbNaA5q",
  "key19": "64gwF2HwU2rkWNNuExv2Mq6T5YYAVAAoaWYmcrujuJegwcBsAbEnEvYzu2tWnZHQsAHx9JbiHzAhDnSD8w7PjCdw",
  "key20": "xey2NFFpkcUv6NgE6LnT8RL2JC2v3WUkTSYtYc33rLQVLWpio3MEiqxva9MF4sDvbqPNkEwioCxSKEMEiUF2z1x",
  "key21": "GNWoyxGTHLPqFJGD9NL7feTo6D7NtJh9g9ZmdGq6nJyFBqA5i9jTDg2cgCrguRTRA3P71knFka6FnF1GDWvEfyK",
  "key22": "LUceHswWNDzDQLb5Y6YidWbb7HYG9tbVF8bVKTw39u7b4MLcRJLswcJtkSxXZMfy4uuUtVpY5afDuCVgUATqsQL",
  "key23": "4JXQURkLr9NXTQwQU8jGGrEJxULn82y6R5sASjN96T65DaUVVtJUsZoPrFFrFw14Hz3oWgHnAdNSZc8TWTEMhuur",
  "key24": "5WVXTf9uJR7HAsokqJvui5HtKJHscUasaNRqMJgrNse2CjqRTEyFxXySrJ6Xro2ahGR9Kj4JzsQfvbp1DUtWhZuy",
  "key25": "5ZTCb6Cqxyt8FxjhxxHQFgmmsCBZfkKodvMQbZU4YkALnePZcSWfHvAxDf1Pp3mbR1MSL66T1JDi5RaxeRzANyNe",
  "key26": "2fkVRBpgGxvNYeC7agitfSFeuB8QjwGt3jGhVwNBiDcBKWd2xfjpvDX6wePS2h1LyvQCMhJtLsoBkkAE5kyGCV9g",
  "key27": "64PzKKZNVNVmgLUHFWA67uVwQTdBNaz6t2RMwQeoonbFhZPa6zxFHgfdAStmnMr3tFZzouxntTdEyGBsq7P7AToA",
  "key28": "3dYV1PMuUZxiWsSQgaucASK55HJGq2PPdVEy1Cs9cnmAn5F1LMcJ1Bwiu2APF9uQpJ9Bprt9JiMoqhE5YsP564pB",
  "key29": "xaaFMN3s9XVXFAAo3Y49bqfRsSixj5zeUr1MV7W11gLnzF8moJcaT5bJkEo8N9bzKsWRXEVFS7fmAqEXautPKqU",
  "key30": "2zbEAEUUEvyypQUjkDnpuuiZrdJ6VUSoNq1v8xGeqFyyf9W3RS5HB8zCVqkfbboUiHLkWjHR2ef5qhq3iSFLnvnG",
  "key31": "2cHibc6P1Ub91JSZuWW66ybFconGpoEmVBXoqrbGQZPy8bvGTfwzryeZTGwDYgyzgDSkZG4vkZirtXyvbfEBN3ou"
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
