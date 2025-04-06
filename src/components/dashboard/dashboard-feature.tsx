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
    "3f6bES6izpWFU9ysucjShPc5mesFicANvuKCc1QxUZwS1GHX95xA5CCepGHSReGxKZeEG31jQMxTXUQTgfuNnKmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CGYxqZSAcPeA2c3kStjw4aRjfswHsVCk2BFEyjUafqYKSeaXV1QsrRG6CwsCescgRSfsrUCcgooQuj74BUdXUb1",
  "key1": "4d9zNTjJyAN9uoRhMca7VJjQT7xNv3djYC1fLLggJFtX6mc9u7YxfwUy7vWcS6obt4vdTeXQrzqUkzBsyCzjYGfE",
  "key2": "5LGdAcjw2exE2hj4DSzbTwrTG4CMRAjjNVtpBoH7cYEYZcinVhieFVhZSZnc33ATXgafCPXANCYWTGLNNLMU1v2L",
  "key3": "3r8fRGUR4tc35emgt9Jrqs6Dae82fAxC44P7dNzFXhawG1MdND8rZh6spu6MmC5cbtsgq34pKmc87ykFyW1mgHbN",
  "key4": "w7umetLH4ABbcfiv9fEjo96CypcATenkdwuxwP59woGnRyQJGqwNLfJ37AtQRFWVtc9mTsv6r1Szzm9b1eTgswL",
  "key5": "2AcbXpMZpgvsqvenrPsBcSrum1A3pkqEgV73HNCHfAMDy6FVdYLvcRQJ1yheayAfFGwjXxdHrNqLCjKqVPMS2zGS",
  "key6": "5tvH8cZUrKffMY37e2MqYyki5yDxFU7S9HfzCFzTXCZzf9tbEtTxijkDGPgniDkYczDLcQZmhGUHmrZ4cRTfVUTg",
  "key7": "qfco8hiwBYBNSsWgsfcLiV4GPQVTciLgRHpThtxzgtwnnW1V1LA1EuNbedbKrE4fWwJraJNrPkztephFyCYbFJ9",
  "key8": "5jZonjQ9vcxLzznJEjcJ6GSrA1XYC2auGYhM5op9TSSwg6WDXApwcWq8AXQ5hNzMcrDL64sC6KkEJipzGUHwEWVC",
  "key9": "hwXeRZD7Fv5wJHdKs2KEMnMiDddicVusfCixRYqTuPrkFvUmu9WtWQMtredVovEHARfNN3qwgoS2mQ7Qa3k2dnB",
  "key10": "36hC1rhkM6vXoTSGsk9Z2ftWXAR4wGaXRNxVC6B2i8MNwgs2A1xm7TV7LmPsjdTS14bgyH4c9kL5q5QChqR4DDC7",
  "key11": "2VvgUfLy2puGhEUy4tXEbbDdruZzSuZqY7e2roNGLM2jLoAQtc2987xHUzu7eeVKA1qu45SmW8NcYPvzmrqDSbNW",
  "key12": "bYMuS7gKAXpNUmEg7hXeBECCuiYqPHBzYDTUQgvS4suFA1BUBxjqVDBsMnbhxBST9WyASeDSkuAxUJJUSaKjLrV",
  "key13": "5diqQqEbb83bCsoPHNDJN1QFndES7Msb6QughPpNXif2FCGJaUcG5DFgzDVKnAJvV6ZNoG64oh4KVsjVuSmrGWGh",
  "key14": "P6wBVW2QrVi6XDgS9A447TsbZMjHoUaKRwBAfiBiogT3Bt1FYAHiYfUMkQTRpFiQtpqv4xwWPjbbMftqJ39q3pA",
  "key15": "2Csap21SDTcCwijREcvxu29Lx2KhSWWztr6icEbpwU7heRfkVJ6dnv1sLybEJyJVegqVVhjWP6cx6AsrTwxHV8oG",
  "key16": "3rpMd7pi1L7PqcexF2pcnpXJtTPqxJU99kcD8WFAuLvxeEGVJDcxR9K1qNHD5ovP5B2GjPDdEg3Y5Jc4mUptYdQr",
  "key17": "5LBNG25bBc6eq1US8vjwfYwEnx2wqgcsvjeaYvSS6B3Lw44enwEpzg56rxEifWkDsKLf147UrVaWNDd5M8eNRFMr",
  "key18": "3vyAMWcd475LpJpAdDbrb81yP2fbS67i1rKzLBdaMTmtvoUnymrraZZUqWpmNc4EugxvXFEJ5qu4NyLDWKrY253V",
  "key19": "2adkYjHUgXVqhaeuprCeqVWXruLg29gFcePBn1BzXZNzZ7sgY25FAEuiVnHY6G18eFAVjys8gg9TCMm3x8DVcg92",
  "key20": "2vV31YEqAtn23datfDTjtQQeZNYwsix6WgyiJQKoz2AzRhShszFKkaokBkf3sf1eVL1PJwTpSC1FsZZTxiRCmy16",
  "key21": "2a9oWz5ssGXnHg4UhyMS64uuf851CQJ8VFsyxmiAcskmMB4afmxHYSUjZn2sEzyHdNVy3LsCvgogbJVgXhdAeDn7",
  "key22": "3w43uiYSTXFwvYk4Jm1n5kgMWwf1Jc9z1D7tfNJ7vUm2rfUnNgkePW1E5Ywv6BoC9F9g1JWEeLdiQXF1uSx8S5k",
  "key23": "2AsUPufXY5ooRUUzQyFYG8xg7viuLyNf5pm7kht1qMFtTcMDv23J9WsoWV39ejBK7LBfpEtPAMfAzkgFx9Dtmy96",
  "key24": "5VQrB5zsjVmSDUJH6PUjWunW3whuLN2yA3H7jFRNT5Gs9PaXKm3TXAwNpg4k2mkotc3cinz9Rd1hC7hgjzs5L45f",
  "key25": "3YpuEd4PoxeTya8mDZFhr6Jz5B92qeSd1e3jfcZqjmvHkmW79CWKgWmABd1Ks98KEccVg3SE18pWdVNTkH6buTXf",
  "key26": "Yv2eof1Q29TYyrKorcma1hoQ7AmTqbyYX5hRZFP6kHLpQVUzSLGoDMECAkXRBywpvnvbhLTfCJvgxmbeLPPwifx",
  "key27": "4HA3ffupjM3BshWG9rk7NWfv8d1HbNFxRFZrXCPeVSBxzwLSvdyTX2mNteJSyD96ZZgNzd2kFauQEoxzsPvB8kjD",
  "key28": "44ARQ2GMhyJBxkw1VmpigV8RS16CkhFXJSaHu8AKnKgowGvd7aN8C3q7c7j1vqSMkPMKcbv4394aX7KiEN7EVzJV",
  "key29": "4CsUaUvdy47URGER1fE24N8cRRVnVoN9ybCqxYpNRgA5wk1j7ithtzwp3HsVTvw5ekxWfxyq2yVQrPDBwHyboQ9S",
  "key30": "3GuiEMk7GX15bmD2x2Wquef3dpx6aNxeHHUcfn43ehBAfTFgyQ9UvWijhJLV5YdjQYNCt9LnuggwyEfMEJkAu1gZ",
  "key31": "33e7u7DSaSmkQEg2137J5g1UctCEY61NHQrKFtPy7X3MPN3DTxSSqwPjPicoVCbtTb8jzwULH2uAfajRYu3myMt9",
  "key32": "4vw8hNRz4z3d9xRYhrsK8Pb3qa4Pjr7qxri4PmxPWxcQTX2BYd7yTGVCXZQ1NervEJUmmZ6UoRf6hZgnmAXYdaip",
  "key33": "4tXMQZRs4MotY8docJmcH2XBatfpKK19vCsSVvcAAqos8hJZGtSKTqeS9nPuCSLgcmPeBHYSCGuHakHk7CSSX4WT",
  "key34": "4Rs16GCSj7befiPtM3r9qkETj6XUzQfZKHqjqfcYDnXudVFo28WQXiUdz7RBP4nJ38Qn6uq2oDYKmoHm8ge7JD3x",
  "key35": "3A8nY5H8juqCDfxJjz5qdiNiVRGwb4f7muJXAWUH1bLvJUqfk13D1tUsXJ2UwWGqvHRAMEFqL1to1rgm79au9paF",
  "key36": "5pfhAA81fz7aeo4FezHNui5wmuZekirs1G32MMkaT9drmuVqqq5pAB7AH76bER7zswbivL8be6cxmiJNRhppT2fu",
  "key37": "C9CrMALTtZ4Dfb2fS6ujJhhUaVCB5HEuKDcLwr8r95Wz8861tXPRa4JcP48X3H8TeKbGpZM4DB1Lg5Sekm2n1s5",
  "key38": "4kMcJGzNRa3LDUAw6hJDBzaFS8s6YvXF7R7oSF4j18NznNMh5roQFtpXeQcWhWgDvoqZpCfvd4BeYTdzUpmjPXm",
  "key39": "57KCAbNArUfGz8SLD7CUSntQ9qKVnAPEWoLRRC8iCTDydPoPTGpuyRTX3836F7iyYn532etwr4QdLXQjn81waEbf",
  "key40": "3bPSCL7gFhp82szNhRKdihj3KM31JLYiVgSWimtXo22XUjySLokkoCD7ruEPisUUS6TDAUvsh8fdLUVeH3RQrYqi",
  "key41": "3Q6UpEGT8rWnMZVxL2cAK48KzWizuVbajNAPzZHo3h8wbFFrDt5QmG1uiZsXJmsdZCHpmZvM4LLLQhAoCMYRH1jB",
  "key42": "2u273xjmRrN7pia1SWPwoqgNAidQ7h84Eh9NRPgLJgZdThQBp2mQ3ndxN47QCeMB7oFLjfD3gsz8VMLdjVMsSvYd",
  "key43": "3fUJQWaekx1uosYr22TfHNi5gymSZHP3Jdxb7UWDg6icgoGeiWE4jKXabJFHABZzQPJpkoeFHoWzPNLnwE3pyuXQ",
  "key44": "5JALphHonzTP1tuM1jWd5GzDEhzUXge9NSmMsFPRvCuGukbhLsevuT2XAFR8erHuJyCzPB8Hzq41Eu9RwTtkAZPR",
  "key45": "2Yzv7wTdGEgZJxmPahUd5BP9Ugny8v4EjfeWtdPXkMkDcjN5PLdFGqT5xBq7eCYfDgYj78W1RqtG3QNgj75pVAgR",
  "key46": "gDTz9cNqfpFkHTk5vcoM5wk7NPyavmyzZDRXuTEGaYYV5evJ2XMvu4uXuFBEFumwqBPC4KuLSEPxCLiCf7p4K56",
  "key47": "1mGc1QaspxN6D9NaVVGv5JvXJPVWMJCNZHs9Uy1z5CPZdMhapCobu9xByJVrLszcjHJzNUQkDksRpuuSJBJBvP4",
  "key48": "2gEpqLHJAHCaDwCPzz3oH4F1PmhP9qyri5LKYfE2U9stYALqPg8by2FHJiurJgxvZRcBmS9b8Voojq5a8QyYgJh7"
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
