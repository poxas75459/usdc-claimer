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
    "3SbdWsonKvZspj22Y6rtCvNNaHdv58Y5MPugtccLesmV3xxoBaSmLiYqY5u5Skq5SK2hXmASsqpUx1TtBAMjiw8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uFQPZ2e2khwAsNLX1zpevJVjJ779Yy2wjL6a7teoHVvmMWuEjVQHEsGaxWWknJLTfnWdz5UQM6A7JEVzjH1de6H",
  "key1": "5uGinMU9E4idDGuaTfPBcTCgWVfnXbH3wzRBreLP2Mu2Egr6onf24bNqoLuKjFC8oVLZRih5UgFi6Maen1FSGKaQ",
  "key2": "zj5YHKWuqE4hMRHnhURfgrLkmrbrTxxoAhtsK2Vp1C6rYyVe3ppx9LteYp8yCfZi5fyhmcQNX716Y22N79nWqMg",
  "key3": "iZXX4qjsuumesJMr7r51GuoUg82ySfU5eSm8S5EtbK1gaL4V4S7uBvHTiBWtpLMPNfuTqj1wseUw4dpLNT7gunW",
  "key4": "4UcQviGdeWtbBBCSmz9Aqyk5MJ6oF1LR7XPTy2BPETMExqe8C6j9B7pjB6nR2jWgg7srz4mBnsjTJ1gMUaZCo1dT",
  "key5": "gq9zbC3aEQRHsJSn5Q3Vxr76DA6dzprdF9Ad7LY5BmS4uhpzEAah582UYcU4Xd1SxCTQuNkHhHbGg8hHq4Gbe5o",
  "key6": "5mqpfeXph3pMANYBYU7iHE3icUNfx9kpjHNTkfSonkm5DojQ3P2JnXrNcSMAwb8hvux1x4FL4G2PfYbVmB5nRWNp",
  "key7": "3kRUpnaxdu6K4K1uAVKVeXfDn4AVbJHgmoetDwkTwDxvHifRqFx8rZUb6VKpeg4HF8pxMQ5eY9Af7GPmSC5AxGvT",
  "key8": "2PLNfrTQHd1KJU76Q6d5pxCmJduRmzj9B3Ucrov7grAXgV8N8BjAP84ocR1FSVvDhiADEVbUfQQw5FTpUWp3Mv7o",
  "key9": "4D1ojynanucaykfhcwYBuo56dKym2T2bukCMsiJEd2gjbPFFDWQzhyGipPaUeCB5B4a6MoQN2MG9YQuUAogRXST7",
  "key10": "3mqXkZKQEJdu9wQoFZo8L4yJE4ySzGvHCDCfCVYASiLfkRH5FUKBb2ZMVLzqamv136cHBzfAt1dgv9ZoWURzM1PD",
  "key11": "3WQ83rwfKQbF9YTrt8cuRH7RL1fs5GJY4bXvbGyWDuqrHA1SqC1xBThz4enq5AaAGjgDpgoFqNRD8zzERiYZEcr1",
  "key12": "5CBcmzS7ez9rbpyJaiSbtqybMQaCxuQPuNrs9nKfXtwysxp3B9puEy4HMGu9pSQe4DQMMyGdbZwgY38CTrBcFVZj",
  "key13": "R1PRMFKEqQBr7ZcEb6Cen1MHaDttLx3uPkT7NUEANEVvvcHcqN9wAWjHconNcQio5JbgWCWhcaBH9TbDLq9yCSA",
  "key14": "2PjEaPx4o7ZzvoyTXtoGWr3MpdZC5uShcXSdUKW4D4ZhGVf7Yi8koasj3GkpPCv8j2vnuZ73daHiMLTYq1FojvRY",
  "key15": "hqi7BFqUdYe4DzNAuXBfYbzDpTMMpRALRyKjbEyf5DFeiw58P4SNrDa6Rs1829QKTTc3DTQ8Bx2FkvSvdy6DTRB",
  "key16": "peWPhthHupBER8onaU6z5WQ28dmxGbAmSLDyRTvmhzzgZKbRCi2cLgaCtcf3Zm3ZYqrRAG8VWrT3j6GxqTjAyzy",
  "key17": "38uUaWmEhboNjxUm8mi2d1ZNbdnKwFqC3da14LScqXVZtwpRhAMcMWDMY9izHXVMiG95fAsyi3DcDnTodC8EwfaQ",
  "key18": "2o68nxAvGvmvKLEP2XJb2CsVBATpigTz1YoaF7q5TETFwKoerefgYwFNhS8tkFhadEaCEj2H92dvd6hnTrCm128E",
  "key19": "4qVynk7fPxvKBzWVVFzAN68SE8mHAwhjtHzkfhMeTJ9rsG4EEn2Mkz7TXB5fsTdoCkLiGHHz7F9b4i4thLitRaaC",
  "key20": "53YhDGxeuRy6cHQAPK9Xn1schZPPMkq4bJ8sP52zHCMc9jVXh6e78qmPNBuFPawHnKFSu1PQPEHBXemWMiQm4ot5",
  "key21": "2Kzwz1ERHY48uqRs96oD9ihUVPC3chma3tJSU8wuhaXKotY7QzLuVUmzpBEyjAGJb3AeCn3BCsmyVs1aaEpV1ipM",
  "key22": "3L8vFm861L1BDBtMAjCP151wCXQ2zZ7ecW5Fkshs2ibm63CJE7Ex3toJsixGj69QX3EnYbpTLxYvowC8CtApFYYj",
  "key23": "ZT9QJDQ59XHkegnSwEUmuEXAyaSw3ghVobEZyuTZNh9boMhZyipaX9uLZQ4hQLVUQ22zQ8Lf5c3Vi45UgxDgQ1S",
  "key24": "2vBQcwo6RZjU36u3Fh7HmSrZFvu41NaLFjr6kJS5nPzsGZAPN4ob56EFr9CTMdvyQ6BaemK4z6b7sdtVui22tWxB",
  "key25": "5pDD98sFQ1jqzHxTttLRjXnwNUJpfmv6vpHRhzHxCLCjjvgrX74ucSAzRuEZSh9ECXzicokJfjos39zoNuaXrkq8",
  "key26": "5MPcQru31PymXD2ZMLgMdtZtQCPjCQ6J5wEdRk6As3BZJKBfoWG8vLBeUhozEmJTQNzA9QEuavq7jWD8rnKJ8BHe",
  "key27": "3rbXWaLUzH2yx51ikqSeUPFiihB1q6zpNati2JFAyg2od2vUQXV41vMdN5oy8mrZdSGTknueJxS6xkkFen7udDJD",
  "key28": "3jXvuFx1px1Kr9GnnPyLuuZnD77yRRMiB1fQd816UpWc7cMuVHpD9i8jhBFwEkDBEe5JSbCmTwNzghkKt9eDYNq3",
  "key29": "26DwCZSVu9HqDCPLrDGbxxE8mmNgFi2UiiSjTeqTXhYNgBXpmKm8wtd72XikHiXYS7WujFpEQ9fRnpN6KtUGF5ix",
  "key30": "2pDJeSx9LkHaGCNueFZJ4GjiaFovi3CvdsZenYtB4FbZhuyECeHw8ubTBaGBDu528UBr8yp4UxbQfvmqfrmwbcPZ",
  "key31": "4W4DDrgwZjiyez4FVLxjV3Xbj6mP2Arihmj9qTGyJUCXFdgXvrE1psFUSf6W8u6o8wLUgh9o5mWDGr8P938hEwwV",
  "key32": "iMnBZu3nc512bi189trMoJJfLY8uMJrchZ15qjYxHN6K4ncXRCSCKCjH25zsk6KifQvsQugJq4Z9w1ziJffMXcf",
  "key33": "4Tn2oMKiRgqt4ku48cGY82HLc3YNc5CnZcdoNCHHAMLZU37n5573PXKEbEE4AWFQ852eb9HLJWu3iVmu3zo7aApq",
  "key34": "43sLree49wYqGpje48FrGRh35V5zPriUuuSXYSGGHYR35jXLKSDHMMrrBGFi2LVHtxbdoUMuXnvSmqey4Ep7Tuix",
  "key35": "4X3kesJzCV9eYHdtf6aggQn2zE6ZwWBuwwcNiMSCn9yTNEGZysY66uzV1EYUN7TCJSXj9Mmmkke1rNCt5uD8Ax3y",
  "key36": "P1tZ5h4kmyxHdKPTAEiqVkXV1eAWJCBjh1xfxDRjf9EAAfC56JWDTjJw6E9d2d8XPz5PqRMXPACihn4oZxccavJ",
  "key37": "4EqQ9xMVcLFXqCsZTVSATw3V9rHmZDGfXZm2tBPge7gHCvdYTx5VhBdDZvXhQNfKhK4GCnm2BnyowK7soMifLkSJ",
  "key38": "5qgM1hHtfhP2pE5XV7vVf185aQrQdoYYW8FUQYKs8hLCd19wBRgqrxhbTatujkUj4HK7J5axyqgaZ7aJ48h522ah",
  "key39": "gd7d3jcMTP7ooRRmZtJyqgBa7vqwh7baZZXfnVy9pPLzbzb2MeVuABbEs59GkoEZiwvWh4pb3PsTPoMBifLkPen",
  "key40": "5JboJxVAoEjp6wrWAMuNBUyPwcXS61XLKruFQ1x1KJGH4kGWVSgiTLZj3b7WGR71DPby12LB7T4A7wT99mUVSXud",
  "key41": "2yHfcjpTD4GMPrfP5ibYoUDKCqvNibHFqrrrvfu2eoX7FCKz3qeQ8QRjBQJ9a7vZgm6ZoUxm43Nezirm45vFwhGA",
  "key42": "5PVpM7wgXUoAZcyBeVmipuGDhbfHf28ddb67sdeasvcjKtoUz3NTCBZbrpC4ag6Kjcg8sqeJv6dixxNyb7fvRzSX",
  "key43": "4EKus71NYhrTnJhAAi2fU7YCNDp3sk4UkxdbuC2gDmNghBxTTR6uZiCsnCfmBX8NkomRaAoJmVTwsJBMCKDqrTxg"
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
