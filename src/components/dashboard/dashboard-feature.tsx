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
    "5yr5DAaMfoREJ8VXnZAVmLRFPbMshRgjqFHzuuhpMjSCoqhmhHGprHnMaVDGPd8BNWvVicKrThRLQqcni8eCd7Gs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Wv1eLVYaU7858rBn7xiZ4enm3UgsQiG9dFxduJS5j3jMn814Yyn2PwW2cvxyxz1AeCmNbpWesEisMKJP8WqLGj",
  "key1": "5AzNUSXzUUFRh89u4Yo3EGocAT5xmk6cF9RaGM5imYUbMACvyemvzJN132NDYD65mS3ZNTZWDXQqjuLE4j4a51m9",
  "key2": "4WgTKnM7zNe6iYk5SQwpdm2VG9z3wx5DCCdnw4zeQvJHHDpa1whRFeMgXMFgB42ERyRozWT4vvnFuSHz8CNPfM81",
  "key3": "xVJozWNSxWbEEuEEE5fqZfJGjjMWn26NBmQ9pZGgHf6KJLGbTUWCw5SHfY5ZB9m6U751mQsTcRBi86w423vAWPU",
  "key4": "AucaYkBucwYtAxzkBc6gJZb5CbXVPZE3u29uQq8aysZRHcToFc4nvgT1LkJnwxumYe2S9Cz3bVN5mvEMt6qxhkt",
  "key5": "5VGseZLQdWLxB6DVNa2NYD6voszg2JPBdKTy4KM8jHxLvvtuMRdr3EWx1L4tcpaVJ8y31sapDtVkRMwr8AWA2A7B",
  "key6": "5p12T7EFJVJyLmgUwWuGLATrNp7o1xYo9toFyYAjBuMN2VStA7v7Ci2oirDLECEPDyDt5LbECESUXgXXiBqqv1XK",
  "key7": "4bkehTsjv7HQiJJkZaVr5nrVsmARQhUSXcf96zsdDgvKbbVWFetzWpJsuPjGyGE5m1d9Er67ZtuG7M2TzNqCLcZW",
  "key8": "jWNiP8BLuvVCvH8S1gjcdY1dZLM9nk45KyiNN1EQmKSVujJ2u2nWHYqXJVgMUy7mZouFWfoetrHurkaXniKpsjj",
  "key9": "4ziE3BHnNKSkACwXB9o4jiY4hWP3aBho76kGSBoS13gYZDETNniEgJdiehVyG8r34fyRw4hycR51hjKyCeuyhKW",
  "key10": "5h33S8RQkYhni3REcCRgU3Edx8N1UZjApC3JKizd9ABvEUWeXk6afsE9e49it4CpEWsRPNgyAp64HA5K7D8nTfVg",
  "key11": "3ZYGpRfzkHRataroh6WmL79ht7omZuPtiJBF7hWSyNrL8tEEA2G4ACA4j1CxBLmf6zhkmZtm7wF4b72EDvBhkJKz",
  "key12": "28GfQ7t3q76wRNrZauSyAcjYKRdNX6ZgVASEGFhpRY1Ss378HsdiwL6NCwokmhYc2nUQ1m8kiAuxtiimNSjGrJWt",
  "key13": "2zqaLQenjHUtHCMABdJjsYSG6E18BEW2wt914BsVXuGNg3iJqhGiN9t9wzCJLx7fG8RKMUNnGZwdMiuzc72FWa9M",
  "key14": "2sk3nNfDU9SwZd7N8QvFEcy5BNLWetGikLdGaVobuA18fgJ29zBuuMmaC8G7zZ2KaTegbum4bU6Sqijf1yD7Ldm2",
  "key15": "5BknDYqwPCsZ1jzsysP1HtufHUokpf9qVepjqH23GAFzoMziGthzusgHDxYnC1nNqrSiC3wxT247wbxV7LquSu3k",
  "key16": "iu1HB4FxVHqibDwHbJyY3v4Qoo556aEzfEVSv6h3JKjKHueSbtFB35ndbJbM1rXCcaNe94b4HkJbVqTXxehRcBF",
  "key17": "2V1W87F6T3bDaw4iDLTMNoQLG5SkS2Uj4tEVwMJTtCh6nAnMshwia5M9zQpvqyEMPkukB9kVNJkn3NBCcYeh6K7a",
  "key18": "awKQREqFVv6iaLwBeDBZRZJ1vdLqogqgUZcESrxZsZGa5ovjyht31eG3jCEgAwFcmcGPWCWFkpyQs5RjvRKtp3m",
  "key19": "5fFg7KrwSrKhd2XS6KNGh5s883s89u6WngY7CH1BkH6D5F5hxWwij1fya6bceBxGuyvX9WPuV48Jf5ogyEkvXnTn",
  "key20": "3mPTX8JUHvEq7Moq29nv7gz2UiB6fpoA4VaskwryH5Nha1Feryf56ySLKTBmVFS4uXsrSNVoNCw7pRQ9jFCShkjy",
  "key21": "4Sm4U4rcmnb326E6oKvhYZfYDyMMVfFA1GAun1QbJXw19C1QU4Vzv6becGiFDzubpvgaNzQR9MYpEB2MSTA6jMk6",
  "key22": "4ETUXKGcBT91bLiyYAZx5XUv4L89idpZx23d7kfGSgepXgwKxpP6f7M7LJBzyw316YU2GqTx2QAyAPp5xJV6oVfj",
  "key23": "2LhZhwe3mSyv4xN8kb5Z2xYpSzuMFaoHcd1wf3mB2ZyAonZmm5VbbtBa8wMJDQcHSBs2xn7wbBwfdMth2qwzksAv",
  "key24": "5qVgAAT47CsrhsqL5TRiGhfemPMHxjTRLSFLx2QWsM7RueucpXFq8EE1mjbUGPfQ8cvdUYpe7wwX9EAtYVnkRtT9",
  "key25": "LjySPq5Zw6rm42d9z3g7ydxjZaTxkzEEzmitSUhKtKcthfQhXc7yLv45tSbWbf7twMK2jLAmyUJ9wxtNLPVyBwo",
  "key26": "3Ur7YvW1Nt9fCgYDbgsXLEXSv2oQF7gN1SAkBXa6RuccWhgY7mq1XkktmPwJizEW67TH9aDRs77h1VP3Ge75Xcwq",
  "key27": "2TwKyGF3FMsDMWT38e44Ng3VAK3H9qN7SqEnqv9RL7wxeq2V4aLvsQDhvH5kKPQ1AeAUvxTFWhLZwJBmFcwwx6FD",
  "key28": "5njwpbuodv8cFPxshDhKvnnz78JzdU8t8vcd5vBwq93SorhG9zsrWCfeorUZGMSDG7F5cQkT4omAGWwrTpVuNF45",
  "key29": "5uf9io2x1KRAT7msAkx5SVx1FAXBLs8x3WUNb5vN1As8T9ajyjiqp4bywSy7UwovTHb3Q9CpFiuApYLYqbukfS8z",
  "key30": "5wdYDMPRErMWNSfAat3ZrKhVkJqucyrkGS9LLt7mY8WHWhxXcwYafUuCMiUdXBQqzMpqQMsNrbQYFqRjt5PESTfF",
  "key31": "3CGN9t5f2MkxFHQd5ixmAMhVLDx7ttnB1Ef1rf16C3kMNnWJm7S4yfDxbTwpFnHYGQZDcHk7e2EyfREkPw9NrLYF",
  "key32": "4DyAk18AgDMdaypG8g7jbqxmAA1QC3CnL4vT8FStJKWt45ZCbudtH4oNVGUa6xUpTRhamGu2Bs38WaChbb73GN5i",
  "key33": "5qBKoQtPzz6ZkrVBdrNJK1pkzBK9w757RbwkUN6TGesUwAieY6BUAtB7grWsywTYGgTXLYeknTtZdqDY6g6GLcrE",
  "key34": "4T2n5gQ9CXqh6GMooAXXVzXjWiRTds6Rv4zF1ec8rmXHFkN5Q4DDyYGa5xVRyJbYgVvL1KCYPjfPh3DhaziCyf2G",
  "key35": "567UUVgqno27r8igq7w2LQBTgbkNrLDeZB1Gw2evPuAyyMDKqVKsFpGbG7XK6sqrMSys8wYWRQM9vDRGJdEbwy8G",
  "key36": "5Mow9gBoayT7Y5FEnY6a56wH8xZX6pLHQbeyNosuiDtsKZNvfsT4NG6NXFkkbEZy5UHmdjAaYkU9zAtQuTspiTZK",
  "key37": "5zB46eDN4wMsTEdo515CsD2nsb4LcBtURuA4tRzZapV9dznNopwmJ4Vohgav7T3xEz9nttAv3GJQ83mSLpiEpRdJ",
  "key38": "3KGy4QLFS3F7K4zhX7A8ofj4Dw2BqQrA2pVf2j8RH5Kv97eN1DuwXi71WpTgHXNBhnDpdokisPLDhPSLaowKjPJR",
  "key39": "36HhSmWg7gz2PWhXz5TT4Yut83JgqoBNPT7xiYBvQXhtruX6DWdgEi4MbME9ujnk4Dkx5cpJt2mGABY6ZZWRkZFj",
  "key40": "256WihriLmU9qBHsAyEKbH7LgwAKLjoXTiGaMP15bH9rTJ1TZr7Q9BdYR6UWaDub5RVcv1WSTFb6PPPnHMakFicn",
  "key41": "PA37qUGQBrqAjptHcRhvSJCg4UrH4bQZKij6NtpPXo2a6ydjtGBkfYxjspVG27Ki5kosSkTxLVJPWmzsp8UHUF5",
  "key42": "5uVCQP77Y1a1sRXRk65TSaZCc1eFmAP8jYVPQr6jWJya67xbszLDTyjz3nDbgfCvoU19oEAF8qbfvYK3DVK52yHq"
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
