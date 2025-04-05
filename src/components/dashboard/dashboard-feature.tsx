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
    "5ibr51qJfmsHnB7nGeVcGmPuvD8BLvr34VBZLdptJ7hZqR3PSwCHoccBqg5ECV2DddZV3GYSY9gojV8F2BrTiz2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t6hfrePt7aTJnTtWnFW7mcdfLztttoNiD7hBnZHxA2dsEy8KRnF2uG5zSwyhJgwGXWDykUf3MySYgHun1if7pY3",
  "key1": "4mSUNXf5fcvvHwh9iZmAc6BK8A3h6Nyi8eNQggPkq1Ydp2cZ8jLC6dBY53pC95P7wSYwsc5HQxYjyGN6tUfHnSzV",
  "key2": "2EPiRzqRenzkcXzESC2LCZ8tQ84eVAFQky9pSKa4tyzFwuPnByvbQemwcppaE6CraemZhVUDKRpDyCKSF8ewUnKK",
  "key3": "Q2EBdcxY1uWzQjiukzuTQk2XLLRYQiAWyst2MJPFphb25rfqzP9Zp4Rm1a1iEQBemmN8YNworx2r9bMQmsH71Ls",
  "key4": "4hh7kLhDVdoCszQ5h6UVsUitGnFd5pZo7eEsMUi9WjnZ39dcejVmnbQABLPhHZVaho6LQcAT9cqAG5a5DQbofwZi",
  "key5": "3WhKD59Qiw75SJcxPeD1tw6JHdQsCJMdsAgS719W8zg3X5zGUaAurpuLjP5q9agyoYU2TNcyWqVkwRwD9MLFFVoP",
  "key6": "46m3NUBMH7ucUaRmAFMSnn2r8DUxaDeC42SPMRwKSdL1XTkoUtFcGx5gnrtbWqF5Xhva74LTLtFxMfX689U8j4JJ",
  "key7": "4T4Hrhb9YNh284vwQt8p6Bs1wVxJ7TNKY41MVbVQuypV5z5j75nM3iSEccFwpUJHdm9uzRMgrPuLFw8XkjbhvT5R",
  "key8": "3QHio7ZTQSD3GfGC779s91JsyQeP2DQPZtnPeiH91Kyt9mt9rDdVysaaYZtAYRYoiABTP92UDaLiL36EyoHfPST9",
  "key9": "2JVLEwkHtNDzEZfBXQ6Uhs9GPWpKMDwxuLYrxNb2cuqoKHVsSrut4DZvtxGfyWPzBJRqpJYfusfyNE7EQ6AbHbof",
  "key10": "FPsRXFZesATkQ63QfAY2bMQDaX7iKeiLaSBuFUxxyVaDTgqA2MeLE92UYpAVymotkrJ6t5PBsxU8764KhkJz1ez",
  "key11": "W5YeNeavYMsQJd7CKcbkcCNCNW6X73ofsG4Gtn7hJRM9KEiHMSouHJtRuP2u7AXGi5rKCmHggiQumpCWgLYPtv3",
  "key12": "3j6HQwW6JGXFufm1PTJ95mXx532iZDGqkBRhMjaGCDVGvQJ9wkQAVz4PKFP7WD1SPYeTkufssRAX18FtLc2q1Lcd",
  "key13": "41QpnbexWQ7Uom927kdLMeMfEo8FcEXE6r3m8GNRXhQUVxjeJjQkoRHFLhbgqrbkJw7YRgfC1JbtwLUE5TyF33x7",
  "key14": "2c9sfgazMDWhK5rHHbsvNFXHCHptPKqJo9jiKoUMeC52qFhAg6xf7gQt3n3FmyZoYUxKwVgN2sd7c4dvdj8NvTqu",
  "key15": "2pPDUjoUN6DMCCXj78R5cJ5odpdePdvzRkUHMwk2dpG7g6As8BmihNb13rSapfs5VTQZeP9TTmHVFbieue5BeRZ7",
  "key16": "4DqJdkwtA43JrpYYQe81ozjjctuHJHU175WdP372w6Q5cB4sbCy89naJG9X4GeiS1u5uho52ENsqkU9ymeHNndk3",
  "key17": "4niTzFdUkkVvqQ4bRNhvJ53Kh4TEeFb3AGrcTRjPn3Ff9SqPAoVhkoLrt2gWy7diXkC1pAswDN6ehNAA7aCX5Avy",
  "key18": "4qCd4X8xHv7kTqfPNaeWcgjSzyQMCmBfvPYGpoKTZ83hQc8SfVmEapBD8s9MRaSbtKs3dz9Shy3xNw8yBMNqaMXG",
  "key19": "4N7ZNAENVRDMXbNAfErE7NuSozUACpAyHRwf3hzdApFRyhv98M4ZGBkeDpA1oKS3WTJfAwgKUEKWcRHKtmAtUKJQ",
  "key20": "2HzyNCtHzucC7qjvugJcKaamoUdbgqBXtsSwkLKhobEfer9jkutT8ih5BqinXtJFL2pu8SXVWTZiW4kS8SxfNW5",
  "key21": "3BrBShdkPhkorYiLMzvLCBQ8Bh18DDZUzmp5WfEY2Qjau8VJik3CLrZ8uuFwgBUmmbcUj2cV7cASccVLXiFXVV59",
  "key22": "iuahiSYNA4FrPCYaqhgSG1wudb3mu5RXtNeUCJbXEk54522tUJejRjwr6L3gMSt67yTW13rBhb7VytuvR9Q6zCs",
  "key23": "iFNs78ThLKB2oxuMfvGppmE3Ky15ynkrWfTxg4sdrHrXAia3z6eVL8ZkAH6D4oL7NmAsBC6k1vGTeX7dT8SCUju",
  "key24": "5kxkiAfm99U8TDuus1j4pBepiBfc4ta1pS3w8jBS8oTsS1A5H9zmgAPbp433WHp74hBuHyH4PMpy9WYXpywmx7jm",
  "key25": "ubQggm3iVxBjb6jGa5huWax6cNYyenyzeuoudGJxXYfLAEjZKkHscB8hw87b1F536isjBM2QUciAJUwhPXDthf9",
  "key26": "33hzT1Pdqt9h2gkPX7AGD89Kb27b1o5ntAraVgatXLFhxZLomWojLXSS9Ng5z3m7wYakvH4j51TCHuKnFT9CrpEu",
  "key27": "54UVALcs3cj1Uoz7oenaHpA1juLJk6LYd7zAJp8KLpXEGBXWxEfy5FSEDVCjGh6L8yVtWa1TkVkYDVjvr29xAUEu",
  "key28": "5ZCLW9pTegdafQDVaiwyEVjYXySYoC8XeZSzJg9JCj7iuy7HCeKSSSSqN86qmVexRnCMRT3dKNSyYAuq41oDBzf9",
  "key29": "3rUXaVqXxjzxmfo4h1voeihAFqfBNM8pgdxBLaQJFkhNYz52sbYKXQZXWds5arKbnZQgG84JMUXd4675vUc2k8ts",
  "key30": "4Sv5zAjAKnNeWzTjsPjDABYS5inAgQ3MxtZuE87fDGJxp7dKFrnXYmvwruoQNb8XEsbwpt34mzfhg2K6ivrVjHTS",
  "key31": "3uBeZRWHkWdR2MYkfC235yDbsZXG7BmooqruBW5XFJmURsfx8xbtb4UDnhWwTG9FAjQk5yupuk68FaYF9AihQEAL",
  "key32": "2fAiWDcHovekzuxzgJgcBSNvA65B9emGLVTSA1SzdJiyoyzzxjBroQun4JQevKXWcWdPa4TBjSaAN3SPxzz3RJfQ",
  "key33": "3M6vvyS6SWfDZAEweujzMtdLrhh7Y4pqkxZ78xAx1oLKYtfFc3bJVW3bms9D11b6YXgMNdw6grcj3xBtLbqzfXXi",
  "key34": "366xcZ3Nf8Kf1A94ZD4vZgzViNtj375WkqhLiLMtY9sfMX6JsFzYWxwarPQ5drWpaustiewniUfDS3H7PvUZzPfF",
  "key35": "oKhzTrmAfUVc7LF5FBf87NDkkwnZZfbchYmC6VBRmfo2nC8g1SwS8gn9aDm3wppGJ3BxQ8W7Vhg3m689GK6MxAf",
  "key36": "2AiZW6ErAw5xrioD8nELdbycSQ9vd9y1W5vg56Ax4PiRuxrXk3XTtd5zRk73Pgx4qa1eutAaKFviqAARZapZYsU3",
  "key37": "85anyoX2TuZ1NBSZvgM1RMX9aeDAtsxNmHkZwhvAsGYyjSvXSyyfrhXMcBgXFj9i6LRfNr5tumEKsxFhdnBEzj5",
  "key38": "3EhL3Ah1mejDVKfoCRj4DegC3z9UVByuB5dXiduLoRVuQtSFRLJzUVGYnLhFeSJJHC1eDcW2FJ2HCiHWLuDoBgL1",
  "key39": "3X5m7LgoMEzzyRoJBDp2h8Sbq3HFuZJY13siTxHbNaJuwXE5xRoef6tMGXoCGfn2oWJuCQgSeo3M9aVfzXN5nsQY",
  "key40": "448jt7qAo8X9hCUHV1cVpGX9sCSqcvrgfPMJaZhGvT8BRc1YpkBeKdgdwqSAjTWAzcBS84zrR8rjrELuvio83q2e",
  "key41": "3iBYySJXr2eW5RZCNEPJNtXCHdSxb9iMX1CTWnvahM9Sj3cJ4pBawXS5HLTfMo2RP7Xs46JZ8uq1ChWYUPZBnYsW",
  "key42": "5asFFkuEt1HW29PqJs8xPNkp4twZaTefkC1z1eBtW46w4aAC2btaRWbHmoTDTeEoPxuVjZbXrfDAmv6fmRgUL8vn",
  "key43": "4AM5JpMwirGCBEveEpSYW5HbELtjpvHriMvjMYREPxwusoBC4c5UxF7gXiCNLAV3mhsfEZdzkvdPC3GZv255HSW9",
  "key44": "51S8VhK7zkuV1NKdMT6rcFi7Gjs34skrb94nvqWBPJ8NK5fuqwqyYtj68WG5StHYn1Y4VSLTc9B8wfATAmfpfsLn",
  "key45": "3hNvVfYCncfZwHayatq6q5xP1VcFNBmJnAyTJgKej8UGmzXuZfMpBTbVgLBaqga4HZDKgeB3XihRfgTZYG1RQASv",
  "key46": "2KPwH2arwUwoqhZy9ndKfCHZ5Vd2wj4eqyRj4UzSKHitvTBACJAULbFYXGqrxzxbAzPx17sYgxmPPpW6LAcYHSyR"
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
