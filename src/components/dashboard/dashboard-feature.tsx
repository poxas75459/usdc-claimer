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
    "3Nudd7G3vWnjwf1e7pxsiPs2wkefvLhCjRActrTADHiDvbPr8g4BfMDtksRB8x18Z6dASs8HyWLhSht2TybCWSgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41EmGstKwvbgEokMCoKtu5SwkJNwUqZ9txdUkYBPho5ZzuGVMVnK7sBbRWZNU197m9Ro9U9fS2TB6xrz4pgWm9kS",
  "key1": "3YaCLwWDrVu875jChMYVAFawdJmZTVWbDNdyK3QgAT19tsQD8qHMDfRLoTxxDuG9GyFVTEDjySProcwW8yRH8kJN",
  "key2": "53hxYHrQDQtSRP1WGxrJTYLAwr2QLxyFPsta7M9BZZ6kinXfCnEhLLovpebUvD3h3aoj6MLohgshhm5omQntQMF4",
  "key3": "34LvD1rXhyRshmh3bNFXchmsgdHuE5FwR3n2WZ1mF7LKsttCTHFMh656zoDJnhZV4CJoB7kGzYJRkR9z1b8waUA1",
  "key4": "3KKmRujsi4gDM2a6zAkqFX99LWnknFfCeUWwR65Zp1yyox8XvcSUcWtNhyXQvcEQZt6zU7kmerd2xmyFK31gNVTK",
  "key5": "2CtKdzYjCyF7e29Paf4we9VqLYvRPR72HZgG9dUQKufG7tahRUQGUGsMiC18M8sCpseiqMFZLb2J4B74BRYMdkoG",
  "key6": "6DAb78b83xg4DJc51QSXrzm7zDq5n4ZNqAyhCsRR4vUiAv9izkDUrovydnwxoiL8q6Aa6Nfs4X53KdNT7iq9YFy",
  "key7": "3dMy5w1TByRQd3vrzQhLTqK5ifFE4CKtzrS31otpDRWcXG511RkA28fXLhzmH4VDJW4ap2y6YPn72N3mJVYC6mFb",
  "key8": "4C6h2kZdmV5iBKKkGLZ5KjhTZxbpCMjEQWcXHDu7fQWE86Vch5EkRvJ68oCbPsgKwZvikaivBDHcKmU79bwVtSBn",
  "key9": "3VBD7PPJWPc29kup3M4UNa8ChvX9ThdeohcrkTxfG4KsKMhemcp26Ck6f9kgTtut6hjDqnXpVskVMVkVme5t4d9g",
  "key10": "2do5yxhWkB76h63YfdUYuDcCqPrrK1QpH8AVgBNoodUXiQuLRRfxJprvJiMXSjzAv14kxWBd3aW2Qer6rfpqwh46",
  "key11": "4ybUc2qiiTn6eYfdawpfNDApA7Z1GDNUBtXhDKpCGNms7nfEYv6u9Ug8wAv5pf4jXHCGHaWojyjJybkYh4NoGHed",
  "key12": "4Gt3bE7dihM3rF8kpWeW8TEcGZKpcrPDmMPH6zPHuoQbJ5BNHBM4XJz7nsaJPWPx5cT2EkJykg1veHzh4k7JjZRW",
  "key13": "5uNbYHRJhmw27AQjSVzx7cobx6pGXNruvfQZuZeooJhuLixHtsdScswXqfJBzCg9i45zJRqfAkU21yKhgSVcQC6S",
  "key14": "32oVdmucbT5kQ6NMZiQJddyDuXkc3MQsWgkDX7bn5zdQ3hedtywQoRwhjb5H5zdXD9PbEyLTFVuY3G3G3dyt6q5U",
  "key15": "4enNYNTK4c3WVT2kortFxVxZX3qbjxwpVrw9UbjXeviayX8UDDgfuzRKCyu1cU1NZm2whEnHQnEUf1aWeB2eWQpR",
  "key16": "4JUTDReZwsXeJQ7bs744koryg6mnLZj98rDEnqxZLthFMQaVCJTn1BMQCUa7SWKarR5DUrYdGajTcbMaTFbxJd5T",
  "key17": "4zCVEAXVHWtfEGQsHKDDBDynK2sXK2usEzEWo2kcA9891kikRa7xZCSTDNyvgJ9CiH1y6V2ixmZevTojHfuoCALM",
  "key18": "2fLeHMtUSyd7MLv4LLXwoBiiuqrhDqWTBw2L9ww5jgQNnw5cVKSimSz5Dkpy8WiErx7mo4sFuyuxoK1hGENiiY3h",
  "key19": "YJ6gZm9FeBoRsG2GNunfU6jkfG85PnHh8ePmq8XHWwvFP1Agv2aDtTTuAkkUwEFsAGgXEVhNacj12bXitUScKLc",
  "key20": "3CbXLB5891BbQeGLkP9RGwQrxGVwNYrrHoir1G9iNzJ3rsxLhkJyK4eBdaFysPjQv2uSDMWxoaBjM4yxNqgsdzA6",
  "key21": "Mfse3T2EQx261mx4tD1d32egwndKAFif5Vc1j9hYzrhkSA9Tfs4Gu7fz2fgnqRAX6JigZjjSsJXedqcY61KiMiU",
  "key22": "3dTKZd9a1Kj4PL52zs2tmBhrijppoKENZ85nMKhZVyGEGShZfVAiWKaqfHYMZBuTM8zBhnhdQjRuzherg49JRkag",
  "key23": "H2NzibxhaBXm3PJba7ZNKqaKU7QG75fBbbsTAp1xYB4P24VgE187Y7hLo9ftKhPqxCfbiiy7QeBLtP9tUDJ8F8K",
  "key24": "5P7ZMoyFN2bkRErs7WU5menTk7dH1JA9xYnBkT6zekGGeWsFZxUNQFBw9VAYvdjKGviwo7aXMFGeFLv7WJfgipB7",
  "key25": "55tZrvUu1XJCuwmUi1oesGtXmRFP3xnMxGoQYRbaPZVuNM1YhjN23gLNhAFAntich4sCHHRj9w1uLxVUeeUCkCjv",
  "key26": "2739RFp9vGER3AgCh35FpVp7sMcEXnrFmFfZnbhEkcYFbh6eGNcXQdn551VAYdcLkkgKkUkVi53eS4fzkhcvbzmw",
  "key27": "2tr5TprHLTAauRiAU3MPGXvScsCBYaaPVJUtaBYHpcFerugLBoUXGnLqPiZqJ8p613ATWNYqrNiYxQufHLFunmX7",
  "key28": "428kj4egudRadEjnMswpt8NcvLWfJ8V8VRQmG6VgtoFy5YoAt97z4UwQffjagqezEH9GRmsBE6AXZKws4hwEMdx6",
  "key29": "4MSyrUGEzwGDocEZEpCWX28bC5Saq2Uwg9pjqt4XTotK2kEHiL5yum6UhEo7UmrJbSj6vYbEmZ9VUL56KrEoab6q",
  "key30": "3azkyuRr4gdmTjtH1dx58kpoRsgRk2BBhR9PZhqH2nFcEE9c6P9McR8Qu3dNNxufhhudk9wA7cR8K2cYct4nbjor",
  "key31": "2xXAMJMtNus3EYmQZVAW439gB7j9vQu5Z5MejW4kucyazhkt6nPVt6a3nYsQAeMU835mmmpR3P2RAaFEkDUdQPy2",
  "key32": "5pYWMLW1RYXL3orQrmekxTCxGW5pJgsQA8oRdx88bo1QxEwQudybxcPRjVcUgvEWfZMTBTfWbjKP1hAHPfhnn4MX",
  "key33": "5vgmRsZQG4aU437UEc5nEFEyU6RpvVeGNkrCid3tMDeJ1BofeGqjZu8WWuDsR4METtRWbaDzQXPDsjXbmM4nwScF",
  "key34": "3f2ZJfFUZWCNjeX19gnGg1CKeeUdA94epEGXsNgqzMLbW9SbNV59m2a8Shz3fghf5awpeWZBrdHgbkgmb3E32WLJ",
  "key35": "5YukFjPjLZqsuXHmh1gxEgDJJwsn5gHquvhTf9CcLFkTGSXR5YXw12oaWoXV61tdi65qUv8XCr8mdFbH3FFyfGyX",
  "key36": "4js33A7xsSw2fR1zFa2yTV5DGKnn8AyU6xXZX4p1use75nBhiZeXfgeGjqmUb3eLFqodzQuviDd9dHjqQQMhJ2ew",
  "key37": "3NfGs5hYeDEBWaDquG8cZuCoLY1rR6qSi4LTa4vAURwWM6Ysji1at1yHUJ27nYRZB98ffRbaymsf6p5HcR6ADDau",
  "key38": "2h6zk6r95SLomvEiahb7McV1yW6rxKnPD9DBTtFihvziXRnh9o44fiED4wTzTUs7yomQbf844ZJGSdyZjhmFqfsP",
  "key39": "5hL7YaSt5VNmFTUNgXwr5jagw3vGgbdGWogCCEUmsUUL1R6UeGYK9RdgTgkGd2hXWG8coVrMy91bjnSEE8TdJ948",
  "key40": "3k9BDwhQcCiM3ctivN2zvqg34PWyfPjyuF1iw7GqBcUHe5mPe6NivqkwwXnjB7dGRpx3hn9Mo7rNDhSNnasA5YGa",
  "key41": "5Hu8ju3fbM7HoDkwWGoucpbgQEvsLgHavkEupzjrjgBGyik9aZVQXDdS9LNr1LqKL8Kf2nTh3UE7Gy2Vesxsk9Mp",
  "key42": "564KfDU4QmDnNLdzuJq65bmBgAr53Cn46abzninAJMSx24j2FonUqay4dzuY7QJYWSEZCUYokgpnGFpfegHYXeja",
  "key43": "5Ma7w5vMn6kW6ZiWk7DDC7zQ8pdqUCKCcGCSMQFEP1Zoa4NBacuZ4jC1w75et6kNAd58ujPKbKdHeNWyALptzvA6",
  "key44": "2RqZTRTF8DDe27k4k5r9gErBuZKFSuQ4SvK4AVPhFYNFfK5SA63MWpJhXYr256pV4ZQCcw4z13WLKmjjHpxsZCSo",
  "key45": "5NpyVoctsEuuQznGPK7ritb1QdssrrTqm56kkyyAuyzHBMmKnzXBpoBv7ay3TVUJuVhQVTEeUCnzrCGHEtgbRvbi",
  "key46": "3JZ68Co6yku5vkX2Msh6rrYCnL9eWUKEYTjicrPsAVwABYmCcRYRag86umNWT8rnQw3KRpYxHyHrJ5hXXdAXnfM9",
  "key47": "5G1CfpeA2FJitZXciRdW6oc1jynLFDqjTznM3sRSmhUhgdXbyCKUqFNQPgfadjFqGxFTL6k2ySDjeySWHftRK5pD",
  "key48": "29W1gMJNQfwXTTQpQ16GNeUnqoVArYvCciyLnkEZZJkqS3VLrJkCNCdLrPq9iiQnJq4rj2KmQiQDiERYrRqRkGKW"
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
