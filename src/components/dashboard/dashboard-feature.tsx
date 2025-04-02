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
    "3nULGcZWVKAvjCwWK21xSQzqUCbDFhMMeUKJBvoStoP8AjGWbP28KaCBX7wGYniccbCf14WWDTCZ5AdhRRFWVvNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "robghFVsKc7VQ2yhnTyi4xkgBvesHM2NEVM7kru9xhiv77P12un8tyna6RJejtYemM1GCGikVKdnNaRaTKZWqfc",
  "key1": "2JmPn3FLEDYCHHpHWNg6xXK51TPeaqhQFdhhTWe7RAsW2HKN6RZBNcGnE1ERfQxbLf4WS6igT1KG8c93P3x4MA7U",
  "key2": "qVfqWNyDFhUgo38nX5uKEbmT17M6fbeYrNvYw8udCu6rfJkmBuJH1buJN3D55WQL2m6DkwiNKSjShxm7jFgAQhj",
  "key3": "3ByFNn7cEq1Yyh5CYMVHKeYap79U4YUfKVWmbu43e7srdsV8XD1VdwnPEosKG7n1p4DPGkZUWH8wWz4TH4Ba8S6T",
  "key4": "2m4q3Bvw4BMrF3DP79PMoguT2vyLkNvutpCH8Z7nLSeb7rhQ27UgyHQxFca7L6hNKdhqdpz33nWueuG4Nf4DxTFV",
  "key5": "2yc12QwpiUNcpdnHkGLoic4dG9SHTVSXDzKEGV7umtEN78dcYd8EBhn9G4EH5XmJRGQWxDRecxz9JVtsgTebkAzy",
  "key6": "5sUXXCpZtLDE8QJQfWBu7QuhGT8K7zdCWxFH63SrPff8PsyKBNHdnFL4Lzg4jXWryJL9rUjUo5QqhAfwNcE4bBiZ",
  "key7": "4uuNYpNsMrd8dCkRQaqyR44oBo48crNkDCBnB6UPUWnX1zqJtARyuvTKu9etyMbbB4AvcPbPmDiNrM58K4yaSPdn",
  "key8": "PfoXHbYgBMJaYHmQbZDTxPxHVXTJQnceAteqtqL62umJZVRmExVznQWnogXB1CbbzeDZa2XvCsyDQZthtFTmqtZ",
  "key9": "2hN1tE7pxRZ5Q2JkCLWtz1ceqHKLdTUrmQSwuF4DoHipspPHj25JU5RUbexCPWBXBA5wHdwB6e5Tp62TYbmNQH76",
  "key10": "64HeEqZPEAcj84ZHbZN8n51XyWyh5Kjc2kYUQRPE5JF55pHdobGGD1sQwyafndGCEieziRF7CkRVyFMDbgzM4QMc",
  "key11": "5gCdK7mVYbQ48x975pqMxZRviG1UzNtZzgaUFGU9UKXWSQBpjLn2ixWEYZxfvX5smE2eJpcPSLq6czxG3q6Jcp6e",
  "key12": "472djkgRQH5m9i9AqTW5m7Jfh3rnYtJRJbaTsYyroBDaUiPUqyAZ4EPFnGYo59qE8DU3GwJY32gChguUXHUkaJEU",
  "key13": "qnuVzVKfGxqgNg2KXJLSANiKapYeFwXmYC7HcFGdak9Vo4cwoamBWzU62AN8r4g6wLz8B8Kdyu5cyEhjExMkt9A",
  "key14": "43VfC5QeRtDfJdJG8R2r5NAx4f8zf1qv3UVwWhKv39pPSNNoMkfR2Zubi2xB9XQnAwjad6TKrgKciekbFoVvzPpJ",
  "key15": "36C9iSwL9AXHin6zfcb6Fy3zwhP8EeE3Zv89Yt2CT4iBisSM6ioBtpHbtBCiBhQFXtiXus9eWK4ckGSZB4RhXbir",
  "key16": "2uRSnG1JDVTqeSxbqGjvKynSfT1ABAVG1x4vPxoq38r62zF7qrbsSioiLwpqGfyS2UuGBj6jSC6PMr3it59oQMf8",
  "key17": "3JmVXpku1keti2et7X7inhk6gpYjir5uJuVK3qWpoZYRiHkhnA5xwxpLMxhWeWPi5mHNPiaXUgJpm9cSkeyf2DxK",
  "key18": "2ByENY2GGcZyX3BfVLkP69DJMpZrSbZgxcc9mr1U1PpzmAct1aXwZNi58YbaQpLDxQJ4yPsKCijyA3yydmKUJCo5",
  "key19": "WAZd9dhbmbPnNDdqZc4xoL8BrjRMRthtBbF7Rq4nAdvHch2xHYGpPK9RZFHZUsmhYZJjwM1pjPU8qhjGon9e5nj",
  "key20": "2pXje6LjLYRZBrX8CU3gnjnisn8MCrzVufoaDjQvoTJkzj5T2VQyuBeVYodeNYSPuqqg6HDQjJiL3PgjR9jaictF",
  "key21": "5BWAr9QchtmNmuepyjimEetpAP4RcoH8gFfQCo3NxuKPXkZHaxZG5pP6PGvHL4ZwEm54Su9jeszSS9rkdS5DaGrn",
  "key22": "47xGuopAMJJrtaReyKW6zd3yzdvqvRbqxCz9BmAdBRq8MQC4Rn153iUYbDABvb3iLgn1y8qREi7JBW1NQ5h3hCVE",
  "key23": "5FWAzjspJmNEmJEMuuWeqFaE2sFYjtnj1dxu4buQ9NeGz17V1xqwWRg6egu6De56HEN1PpLNNU6ztSqTBJqRACka",
  "key24": "4BiBttmFXiNGuf7KYYdC4TCFCH2b7kDvPHuGX9y4cYLniwTVxSA81yaUdLijrxQrepNj1BvbnGT6afza9Xsf1HJU",
  "key25": "4Zi4jwQS6ySBs5Fwz34Tkxqz7MRcu2eYME6Fy5xALTq363p1RKnR3zo23wuwsjzYmqPyBSioZRdCNV4ZrC6VG73g",
  "key26": "5LipS8AqVCZFoQ5yBDdaiNbbMKcDpG44eGZLrk2gMfMC2Yq6sPYtWyjt1ck13ygHErF61bNC9c7Jsbat2UkxYRfv",
  "key27": "54qQzyk49HvPiMMbMbrFoxJSyzJRrHSSG8zmX7WdM2BChT8idYxMtVk6MxzTsrWngBc6Tvdf8KEjfnu2hTuiSMt6",
  "key28": "2iDdcwa4axAafyt5QoNADug8ScJfZQyutM8Jwo5XHjCim6zgrufgwWrC2FK11oPvQf8qun91WdnnSa1DjKDmggRU",
  "key29": "2Sz6o6RTD1XCnvTbwAg2tPzueyQUNezPkHpDsxUEPGPukhWJ3rCpoPb1LBLZdAuQuMQpxsmBBNcS2aZbgfMMXDj4",
  "key30": "2hPeene2sBwHjajdSYXXm8aQmteYDsEDfCMo4USGifeKDS3Rrz8dxsE88CQ8e1nXurVbX8yUpavUTbsea88CfUXz",
  "key31": "kuAXeYVme2H1hsVjuBYr6QxKXAPya9vkdM6ANDFSxHfFahgzeWLThHQgwByA4r8Z8YCC4q9e9iVAmTiZwT3dmA3",
  "key32": "wdqDQssNW9GWrHNC1ZkhjEcZmi1oxTPQJKK8wiGYkmeJmLE5trs1ALdxoPZBm6QRbmv61JyCA323okzY7AK4NFB",
  "key33": "34J6u4hTFu7vXEJvwg8MtntarAWQs9yeW65zkbMcLWx4radjgmm59gRX5CMYp61HgyjCWhwW8XNwKBTQnxpy7iBA",
  "key34": "398jgy3Yaw1GpSnoiiekQ8rQ6jss6LCoTthg18cY1RHhkxaNFZcTTiemZHVESLVV3aTmGdQhGMSMczpSsQeV7Da1",
  "key35": "2N6rbuNWN1Uh9XREdDREDV7XU1bmpprBkA7kb2mSeFtBDzRL9WT2EJymxC6zsQAVZQmHYP2TT195Ej4jhzWpMUp3",
  "key36": "23sNeHxfSmhSDPkhLEXzaYWZ6Y4M7zQbe8kEbxvJiSVvrwT8SWowQCdwosgKuvyG8999N2cPmB1rFaVsaLfTSGAk",
  "key37": "3WU8oUQV3RH8fJq68rqTwnrRKUwWYecmttjSDPcYxhBxZZz125kpqvNvcurgfwA6tgBBdRUp8CBR9136A5VF9WJD",
  "key38": "5dQWwUkxLfEbAtLeV5xtLdYi1ea48T9gu2BaavVksUzmc1wCjTCHawLPDnByX1ktNGyqDrwVqhbS7ZDok4rsMTDV",
  "key39": "2rutf7R1hj1GQULCke7YPEhRMMJLGMK2WBKSRLeFY2Qm4Pc1BFSeDwwWvFQAiVKdV2JCyQqdBNZr8PRJy73Q2Tf",
  "key40": "Csk5K1Mj24GEJUVwi1dymwNoy4XdTrfnrYpHgu8rdbrwCTzhieVCJdtfqjiMef8m6HV815DBfza1Q4DnaL7po28",
  "key41": "7gdaWiVBDKdf6XyRnJeSvix3qgpzLEMT34oSCRjasf8crmr2XtCeQvE8PryJ85RDwydvJhZsCxrkCiNhoHiVpmv",
  "key42": "4JGtrq9LRo7vkmcUD7xB7iDxUR5WXo4k9hkXwVm9MM7HUdmzWXgBtygEvjqmfmtarrpnJVo7H7Rt17Uc5jvHxxhg"
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
