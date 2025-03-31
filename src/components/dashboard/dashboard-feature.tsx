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
    "2HzaTzRNnhUhPBgjJZsy7QGgr2NbUFrnqHf3kdDkoNLjZsi6v4d7NQuHF62H3X1tdH7B2V6fFEe1g7ugcd6haYpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FPFXbaP2Las6U5PMm38oweg1jKYFVtPqwUmihWrctY3sLQyYukzo2MV8os2BJYnqzAdymPLsyzjRZ8o1ffJyTBC",
  "key1": "DGxy2oMNiyCqRXFc9jmekqhrVJtXoktz1JVXZu2UH7C3JL6hCXhLnHEi5ug8qxcq8PzpG48181CWoFohdjgZ3rJ",
  "key2": "5KoiqKsNpoaEYbsmQkAYRxRDNTAqrdB7A2cpdoqbNjND819b1X2zHFG7i3Xt283FnGSr16WZFyGaauoSXhv8Z6Sg",
  "key3": "5P9UA6PXdVv59eZRwwYixaYCn4nEKHLDG1gFTSE5yADJ89eL9F1vanVKKswdoz32C7nTn7ZrginJs7wz7Kh8bTgq",
  "key4": "2gLeSieLE47Fhq89d1sBzrsqZoVUZUAc2FgCtKuMTerkysmMe4uwkowAXp4DMbAwqW159Xm3WikupYa19cb4c5zC",
  "key5": "6uHGHc5kPxUN4ryeRMj12uT4do19tBBRLY6Ca8GdcWfD1Ruo8H1z1fRf2iXLEPsXengksqrXyiEgSq6j9jmECVg",
  "key6": "5Zwq6R1W5G443xpyPpBNGT4U7NuYXoWn8uMNaki6Mmx9usnQJABeBarXm2W1fZ2YqyG3vUpwddHGbvTwQCwqsQyA",
  "key7": "3AGoV6eDdtpftD4eicTybXF6pT4QdtvA1puek5EpFFVWidsHGbXTbxsREmgqE59n5dD13k1149mYDCYKbLHAu7hD",
  "key8": "3CPzfS8X7m9z9E9cfXPXCvgHQJUe49GKfzCKtE8b99gsMXTZ8pZByUhmDcPxpgctSjvS9riEPPKUicpoeSQUzdBw",
  "key9": "7qp3uSfNdnzY768XXKLTFWFLbvr7A1315vxPjDpGnji3pMq28dSR7i9J4u86mPSx9t5qTV6GqsNqQjA9SETFfzw",
  "key10": "1dzdm6xocjzj9dnqmTqL2kSr8Bk1geJ5XharquX2nxeX3YvChsJrB2bsipp4VgGBJ1pZ6tGpDBMVnFYqQctxYzM",
  "key11": "53jvWPgFPaKKeY6RsNMm8FxeT56qEPFZH4idRMuiydWi4z4Z9VUHoHDNiWbnmB3VXjRKwW8sBo74cp2Sd7MArh9m",
  "key12": "WxLiJyuQ6fH3BXAPgFRPyN9b6uaGXAPt4oTJoh4wNrWFWURQXJ32LbzGs1KQrZtckNdVMPcwFnuz8KXx4A1U234",
  "key13": "53XZahxVhENqffnZ87QkRvfrE6Tm3Ej1v4XJc8rRztAMotW7Q9eYCuQfoFGtrVStB2DwCmtMFvJD1HFzVuDMY4cg",
  "key14": "4urocLURWfsWhqaXyriTYatQbMXtcco3BYv53RMcnwt5bwQAxpu4bjZ8fsCWSVGCjiUSXzXLdm2xvBPNScKoYX9v",
  "key15": "4MdLUJL5aEMy5q6ezpdD8it4Joz8wsQYAxppzrAGuDr1ZRVR3tFx5FfLqLAvByYH6HemTC9Q8kLFKKSnQ4TZeh8i",
  "key16": "4mLPrEvAyoaHNvyA9XX9q4ZkSCfBFo4rmoSSmFUYtuMYxU3KT7TmqSC9CCHZjcm6Hf4REcsrzDqU55nmLXs29rnW",
  "key17": "ksXrDi71LUuqtpj313eNbjJERdtiH4d1FdAUuBKRd2Hwyb2Vh7w8JKViTQb6nX7ca88g1DhwpxrGZxWncRnUvnx",
  "key18": "3ActVed8wH8FrHEmtXrTe96RQ5qm2GnRgnrqbNS6rMWaDqZyvCmbmfhuDxNeoHYxLfcdp9TwkZRmMNsfGhraMZ5L",
  "key19": "3zwNygAsJAqwT4r5jsTJVETVVfGF1hDhHrTBvCMHdp8Z5wbwPs1xWJxG7MNC9tMBJQz1SHz496ePNzjqUYSJvPxi",
  "key20": "CkxdACpfZAnZpfufwhZxgEmjGMYBvjChrZLbCPaNk3DWuAPghLJkvFBTjmQyZPsPLnFm74JYaBu17EagmyqMqJg",
  "key21": "4qJSf8Tx5sEceUkf4hkM2BHcqRfSnAQgbEVYDjkCnMqavA8KUyPCXLU6DAnbRWuaRoc47zR7DNpDJZS3tkXbUwB4",
  "key22": "2H2rJjWFRtZeDi8Vp6TgWVq8EBpdYtXfV447wv6Hbn6pBnk5DLkLJB8R161Y4Nz55gF3WJp1R6o6gRUt6a5oRCA2",
  "key23": "25JeTeJcwWv38nrs9x7Gt5xVey3o5Sb1AwC6gRW5S9aRkBU5NtpAzmFnvtLQTexbTeRhCn3bgHJcSuXm6JWAKVjF",
  "key24": "2uMyTVHzDbPevsU2MYq1uWkQK7VSK3ZcjZyb3rnNNRdjoRUubWgEDH59g4dWHbviqENeHYW3SME8myZASR8yF74x",
  "key25": "ZjmXCueDx7zKQM5ktckyKqGpFWJ2Ux2kfnMatvSVueLfDnUDQYUxk67mGxSXaMdQjtQQNz6rbRN2wQbZN7MFtgi",
  "key26": "3XgAoEiQVU424MjhUgDiSQyfRJ52BWwqVUzmMr1NX7RN1aMzBxaYMSdDNUfbNPSWBvgPqNRYk1J3cur9b99cFt9q",
  "key27": "4pTeHA6H6HZxCEdRsVRRz8BeLe5QSuQ5iENHXqZk672RuhxNHdhxxGJF3kXDTjnLiccidaaTRuxnBnt4sUSTTvEt",
  "key28": "3XPy1gCJc74XTowt3DD66vQ2Njzdzfmyp9shaBb8LFLjCEUPrGhA4zrKUFrcBQxy9AfZhgRo2ghiqPX44QNebXo6",
  "key29": "5xFUXnSsAuSvejaRNVPm38SLfA6ZM8VQALfMTmmJvzTNpZefzh1oxvChbWxzRzTUBzWZFHTeQVEuCP74E8nb1Kh3",
  "key30": "3kwb9y6S5WiVFN6wNPZuy3EtTa64ECXE2Py6RLP9JqodiFkfEjKgLjAeQrdcNUdBjC18e6xuo8AChRBiUt6q7Ro4",
  "key31": "2Rkx8BmPvCHAjCsd45wPQnCuS5koyYmDu8YVKpgp8CKAG2XVXhJ2UD18VjL55vkGt1gyTr4CZfypUwZrTQiituY3",
  "key32": "3NRQi5CrLSqTCChTz7zVaSt66fjfJbemWSNhNsediLYQrkkdBPRnG8N5adaeLBkJRyFmYpwaohSRdEHtDEkuf6jJ",
  "key33": "3UdCdpUaG319WHLidRDRf1hvHTiM2q6KqFTRxmg65fodBFWnEp2WtmZpMooMmQMuWjQiHuXQ817bdMgyDXnLBAx4",
  "key34": "3XqFcN2yp3aQWDMhd1ZfdfbW8BHsAhRTqptGdzQquVAriPT2Beq4ZNADf9rYYk627QGXqrnuJJwQthmuxsPfjTwY",
  "key35": "5tCkVos7BNFr27rJ6GK8GfLVkcAR7puXH7aAUozFSjvdaGoAaeBGvQ88pWQN6Ax23Ge297XLAULNRAhUnYgTiKRd",
  "key36": "4h2AzUZ5vyRKmJkfKG7nebGqXkomMNsmWBvEKupwX9wnCTjdBVEsUoqfEYaUwwu1uW8VV3AZUUCiuqFtyo27HVm9",
  "key37": "5swP3YXGo8c6eqiHJCKWjy2mTi1QdJSuihRtiAQYUt1p4Te5BGhrGcLgB8C8JGgS3cmAGTsnaxYCE9eW71FC5126",
  "key38": "3gNHfJ3W23dgeo37hKktvv9fz88mMuRTRP5cbQdVzRr1RESeELDavz5jq8NaL1SS4SFWmjB6JVDjDAowVSsJRqtM",
  "key39": "2E6VNimYHwkWhgXGZHjuPok8YUn12ymGsnFBQRpEPEU48mBPVcYXkRnDYiTpeW1nPf3Wd4nGmPhLgr83VYkSSJR4",
  "key40": "5ipWc9xm8JGPE4n41YSoYwDd6LYqtLDMhSeDHU5bwdDQp7mp9PJRNgGYnSSCpfWTQZKtmDsTxtgzdjQxnqhjZqJk",
  "key41": "2oR8vBFDUPXYEe8mYobxdgiWLBQPvw5GPBeBdTGwDFuPXae5v61PijgYasJ87DqvfUYL3yPPoCpweq64bcn8J42j",
  "key42": "3r4rWn5yGXoXw3SqUiN9kp9drymDrun9W9gWjSeVBt5P8gWwS8VKSr3CdXBmncB93zeSPmEP519BuwFahJ7yDizh",
  "key43": "MkZuq1V57cUv5GHGtgdjTJ14bX2knkJchwoLiH4xx7BjwW41E6JFWv4r6RRwYjv77EMyZyYvY4voTbmeQkSF9oh",
  "key44": "4DizuzzHRg3YtCnKKEQfHBg27mDFiRSA7cJpVEx64WcYM9XQy6FnC4WZgdinkGR2QZUntfPXrVoZk3ZgYptTQEE",
  "key45": "4oy2zevwFzvXFCN68zi4n3qT8FASVZTRDtHJnNnpm3P7x318s1RhsvgbmWs5ybxeFYcTF9pZftbVqQWnXyTDLmBE",
  "key46": "V7ue7Zh1X3TWyczBd3crZoqyg1sEtzRkGmh5cfq33bSXDg1HmqrJas3rYCC8CLMg2cy6wb62U1mSXXa5tAiqgGm",
  "key47": "6fPPM2wMkmjaEWThueGuXqWEtE4zcUiQ5cxpq2ivbquT2ggahBEp7qYXWQbHzzZnUT7NVWSRcXKFvTVJm6QAKik",
  "key48": "2QL4gycCuAosS8onwHZxpiG83L2j2fa2q9t1ikSLa3ayHicU9VkWShCLe1KV9XwkafgxnS2hW7EZoiJLiK3nxmBm",
  "key49": "5AN4FMwD3bV6dP2hjdeULXwyQmE9e5g1WcLY65ynYH5EJySefnyCv9KMcdiY8A4kQahgiB5xuxNRSnApBukFVQgX"
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
