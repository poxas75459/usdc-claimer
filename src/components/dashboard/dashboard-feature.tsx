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
    "5uTwm5mKnKh5DBhXfDFBuP5TDUjPEP8qPTyg3vCo7sGamZSH1gPTUL19sXfLRjzTEo2PJrD6VJLFmRqgu1nmizi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a7tpT6xGNJJjjgb3bRK43pXyo6AXQvtuMoM2hiBT4s4Zb2wTsqLVfR6JzAUNaJqVFkorh7F9WKjiabkrPU1upt5",
  "key1": "3Z1kx79EqVA8hBW7d9tBhpA8kJNCwHpLNjC4QCP15AgtDiNL5QU5Dfr6qumEJJHAjyRBZGStH3mkA6hmwZeRxhKQ",
  "key2": "4X7zT3F1WuNv7D76xn7HSwHf7TsGhKxzCKdLnGM5BvFicTRtS4amZjSadmVL7qeq5FaMSFTGMjTcqynMLhD8ojqb",
  "key3": "4noEMyYi17hLRy7M3LQCaeQAt9qYayFUNX4mrRFFRY2KvGGRno6SuqTHfZVdJTc3341iGArSNsrTNS6qEodGHG9Z",
  "key4": "2nW8orLUrXJBEHeguJZhMwu9CpACdtuK3j2hikyJAUcYnzFJ8rAoL2fgSTSXiAujBHjE3An4cFq8PpVoQrUra7Zz",
  "key5": "2paAX8kq32qRW3CGWx6goGP6PiqE1Jz2CwEaYoDR8urZR2CtZn5eRDQ7sAb5BambShDF5cxqvz1svbTcDpqgEcw7",
  "key6": "4amw2ngHnBVvA2NX3hHw2nsktK2NCg8Cxi1UfmB1BZzPnxsg767nQ9zRrKg2UNdB2e7RrnqyovWVR2QJLP5smjCT",
  "key7": "ZwE8cF9Qhi96kwLucsf58yKNAkS2RedASpWouKFPtRhbbKWqvd8NCLFAaZbWfw9FXBDeKYKmKhfkkayETYqfy6c",
  "key8": "LKMR2GVhULc9Mat9XyPs53s5xs6iofFeni95Pczfa8CQVG7i1giJ1h1WZA3uVML7kFJmpUsxDjQ8nnEkM3S1UWv",
  "key9": "2vZ4FKQgg4PPcG73uve53M2smedySDKsQohGzHAKEmgepU3RD4FjNsF9oBKXKZQcdNA3FA1vSZrovkabmcxfHkPY",
  "key10": "2zNRihBrBsum6Gybn2YYMFyUAQ6u3u5TUw1vvSZZPVuUTyvea3Hg7Fq7pvuSVKiNxn6JWC3qMGBfdAdeKZw9q3e8",
  "key11": "2x3sqaSiGbDWakiovrdMjAYQdkWzYe1dnQmSnE6w2x4LKztQ4xhQUXTmT3akqr1CBci7QMZbWh7R5rQych4djYLN",
  "key12": "3JnczS6F3D6wWxURcMY8MmMZabgmjvHaiujjDoD8TpifWb33AxQg6LiBipokgGnDExr2WxZsNbAKDLMvgNgYTTVS",
  "key13": "2F722SBB7pv7diZGo7RGeYBdEZ2UC1qJnsWYPpvyw9xvhPg94XPGXTr77Nz2zBVAaym878ASUDeGwRxTNaeEtRDM",
  "key14": "3Nz4VEcpcACv2Mvr8AY1fMfCnFoBb9j538XUKNzCw4H2wQrm9gTVB5mdo9qGNZFt4FwdwggV9sBV9kgwPj5VtZVF",
  "key15": "64XKETfo3WB71FLVptKjJVxRz5BMeh543UT1r3cTqdsEDL3cZL7q8SQymq58k1tVfycRcuCMrCUZ5uu28LEeC8LC",
  "key16": "4jWrnBuiF71inw7WcdzHHqe2w4YGPg9CEZMFzEUmCtbM1GdUE5Ytw5nFxpdb22pwgPugDi4j9xq6kQSXTCmFZjGy",
  "key17": "2u74Lqzy5MwdPRqzPmBoBrDQaPYzpzXnxWmBU9wpUseaDjYkxhd7rPPticRcm7R4QSExvW7GhWYHeSeZ8moPRX46",
  "key18": "5dE4zsknpR7KXHdqLdawjwtkCi775wJnH9SYZh3CTTkmDkcyT6SRq13M8m5jsrY6SVwtGnvL9CxEA6gDYpcQGxvp",
  "key19": "3YEvpgknxwBmfEA19h7zHFjR2Mv4GVMAwEQhCPwJwjnoWjMnhBLCiGgxbC8oy8jaQXMcqfNeuqR672WhCfL8ZP9P",
  "key20": "31urEUN5JytrpNqU66f1aDZ1BJo45eokBnTaENDqRLcttzLEvgYXMGHAzd2MiPoHny3K4fKh6KJkB1XMVnF2BMJ4",
  "key21": "2NVaDM2C9ZEwJnsuDCpMAn3waTZ9oLbQaAFnUEZaTNrNJuQZhovDkUfvfvyLztSUj8xyF78BsNWywR3gSzwZ9fBW",
  "key22": "3doRLPyTuL2sRe3ejage14CWeWJiRXPdd1o9z6NxJbtV3cbLomoesKJRLjjEJF4WPVPUc5p35fGPm9LbxfTZhkFr",
  "key23": "37YBqJd3VTpsfh5eavFbU1gUdU8WUqFCVyhs6piX1aUyUJYVudrdGjsgzB75Pr4osPd1mneAfhqT7foM41fVrVEc",
  "key24": "4WTMXFxFKJENT3tqB2vsvaZyjxYQkFGQXffpY6QE8oy3sgZcmdKJwg9bCvmdwdnKqaZG8Fo4VDoyzUCstQZoK33M",
  "key25": "1y9b8jnGyutoKcw8MrprX1F2Uo5dswzBgTD89mgYV5cREbxq7omdMWG9YLwBvKrK9v27mkHMm4Nz6a7aWsSSKdY",
  "key26": "wR47y22rybSa9dLdf4PvzABunrDmAAz9V2Z95FSN8rrLJibkqDMDYsCiZusJ3a8wU5H9AE4gyh9X8TxXe3XxvcP",
  "key27": "47B7zr91gMySFvj5fThFogDvrnprxw6xB8o9YCskC1L8jcW46tBtNktngnxRkTb1H4G5gLnK57ickedqm5WGGGS6",
  "key28": "59XHrGExRstLNonjBJtsK7xLFr2azLgxhdyCATtkwGK1uSvxKRXFLWvQA4kqDLTAFsxV1eSEZe6RRzukrxFNdEC2",
  "key29": "3PxSAVL6nQhzxfFz2SN4dxTTUpvnuXz6MUz1vWMqtzqs6PWegii83nELPk6fsNRdtPqommKWS6aPBj3RMc5is95X",
  "key30": "Uc43GBkPfVFjdM2HH7Wm5ZJjGd64vPQr2WB2vNnTN1vaT84rkYcr3q3RTJftA9REu5Cr3y6ud2DmhrmD7MvURhB",
  "key31": "4J4a1HeHrdMbdLvPZ1rjTTC3gBZMQ2sHcGRJXeEAKwJKC5DzVU3HmDQfNpSq66PBws9aqjCrbB9VZdCoxcZWncCi",
  "key32": "eSAyUA667QYQBUddAUUAMQ143ddno73xZ1nwyxMfrK8mirbbD1GhePxTzLvGW5YZGMKpkK3g9nb5bNGeWGsbGym",
  "key33": "2tFUTpgebcfivXqD7Pt8uZzSxTntdGeeQxycT86JzTdLsJZXqPckRVu3FVmak4bvmNs7vWevmZfAzWdMh52k8Dvu"
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
