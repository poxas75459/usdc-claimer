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
    "3atc5NNpBK1DmGUqvXEJBSGihec8VJQrGoFcZvJN6dCbAmE9uEZja27qQ7Z6Kc7ncwBpdrANF6HeYxHa28aVPZR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fcm9jsbDNYfTXXZQaMihDF8EJPn9pVn8tvtUKoEpmDsK5v3659jaBFAsntXAjxDTDxuUR9UobZp7UQrjQzHb6eb",
  "key1": "6LjMTQ8RY4Bo7Hs4pV9q5ZdPN89himCLuJCttpf4JzuMNcyPUNYFpR7pXetbdPHV67G4kFySR7TMf6dUA2RjVgD",
  "key2": "3Zj3zC17o7j1q8BtWudc9cii8JyoHJPgku32iea9fnwmC8N2K5LxGhiWRezcAXQ7KXwb6bhbZ9CCgKyarKL52Ddm",
  "key3": "49hUW7oqzjZqMmExkrX59m59qwCJ4EneoE2JsSxeBAjef4dHnW18pLxHPc7bm3gULXfCvjuxfZ2BBKyTqTEeKMC1",
  "key4": "1bXUzB6NaBb1aEUNjqAw55AEhvaQ3DGzEs5Kz3pB7bL1pmCNcPG4DqANVVqo6Vyc68eETBJBsainLS4Wu67NnCn",
  "key5": "4ovFV1NdARDwfub6Q2Q6cncW85ckyEJk25q4CKxTHBcjKW52UYZerjkHS9UZDyC3bU4nuHQR1TNHCLxBjqkbCeDz",
  "key6": "WHC4ocd94SJKnNQspTH5jSxC2sU1jUzGmdsnUd5Ht7ofnx3syKPbdETYjCrjfJ7ZCU7u5hXrpajwedc4EqGiqjV",
  "key7": "26wnCftgrCzGqmqdMRo5zaeYR5AoBLWK1wAjec7ZChc56wkTBEDYUAusCkfh4gzzTXtcE7Lipd4iFzvapeSV7vgE",
  "key8": "4Yk42yfPKAPUQRCTJo7EokSNJpFARHsTpqFE6Gk1WzwqKccwescz52awBrXiE6B3SxWxadGsGAgK3poqQnheBa5f",
  "key9": "2cz2FR6Yo34J97pEqQxctR2qYyugtvh2naakF2K5E1HKsgadBjDy2Kh7BN9TwdRHmza1jwSMEQSC5A1DsC78vRj9",
  "key10": "2eFC4kWUPYHE6RTvv7FH6H1JHskkrCuCWmnMv3aiDTB1Guipxbxf2qiaCdEiMUe6iqN4CesupZqa4t922mNJuPqh",
  "key11": "3JqGujsUQkU3ZNUBskwaSYQZtA4ca9QyTrDGiEwUiufn1aUvZ1oxW4tuzo8jNf9RmPTWsSpDJad8i1myhjcHoPSt",
  "key12": "5JzmHz2VpMq59iNeYfAdpNBsx4dMM9z4S7A2iEt235DRA96F71xwn6cwZQhJwbJP3X4Uw2mNVjrTKfqF8oUoMxZd",
  "key13": "2hhaDkfd67kAG7KyLYUgJFY3JZYgdvoHYpwbpDAg7jNPeNPdKRARKHobnwtLpN2Rs9JDWkSmKrmvUPRCSsZiHx4f",
  "key14": "24cV2dyJwwEBPJ5YPvqaSTr2WUY4RErxVEBHfxS9dTBsZtAAgyX6rYzoHB2GctPcZL5krsYq6mf9jA3HkW7KRtSM",
  "key15": "a5guPXgNymePUDQu5muNeEQNfhZbr2PWw4FNavVZn5cjJXJ1QRpzeDmabPNAMgecaBwJTK1ZSrJiZFer6UCD4Pn",
  "key16": "62xZANhoiv2jYY3UGuBBnQrAkeg8NbVET3iFJ5pu2Zsu9EMxdySBG9PRp6oLAUgmeTePFVgwcmZDbzzvfUNg8WwA",
  "key17": "5W7RMNAbaLw6ctwucBDshyYEKVYTH1bM7ANdqzb3uKpneSH1tJ6A4JMsNoy5mFeyA5q2GrCDEkua3NDJDjA5NeCt",
  "key18": "2mD9ddXFPUfL6wChm7n3fstDM6DW82paAxHSmpVj5KprhcCTgeQ8V5ACxzt8GPhTcrfd1WVEzgLfZiPojLbLSwCa",
  "key19": "3yLUmEXHkpdvFKuYp8KQqQvdJg84RLwMoucnw6Qfn7BM799QNZkpbe89yPkunr14DHn3Vnrc1wr68d4RpqvCDmyi",
  "key20": "AxGWTAyZTHtyD2JiuqUYEULMjUtSZakhR3NAdJFQ5UBZom6nCiVr6bjXaL2MWbVCsrDkVtmHCsB3MjtnQAxHyaT",
  "key21": "51mbsLVWZSkNyKLAL6xUTYEmQhPUxmZU5tDf2wgW8HPy1LgXSRbM1J5q11FL5TWQqcaJyWh73cpzyyfJq35rmC53",
  "key22": "2W8jsHutuSXtEsMEvmsxiqGejHEewNRE4CKg7fntC11uDuVHqs7mBvDxuzR6xjoXU8QgjpLFs8Tp212c7UWvBXjQ",
  "key23": "44UWRxCrsyn7LHGhCJuu6ndCFWrKLL2XCFV8hpCqGWo9WBRDPBsZABnQZo2efPDmeMdP3hMp4Uyzkp8x7y2VDEBM",
  "key24": "4ByzhzT5PfEVEP1u6AXewvJafonbH5Xf89jpZs4RTAtnqGEZteVuC2AS6n2hqAYk65sGrzpLPSQRCEMejxoLkmQc",
  "key25": "4UkyRaNH5HYgvP8V21jpWoooDpQ3WJDzY44Gh67qMeRpDx6QnjEKyB3Pj7jdaRHgiqmoKaiseAEioxwSN52MoBze",
  "key26": "2uUAcnDj13g3AYxpmWvYvzsh9syyCQrughVrnS9hP4Fs2EV7beWFRo2TCGT7yTXBTQD7ou5yomFLqjxsUECgVTXy",
  "key27": "4BPwhqdh675m9HsL9p7N7D6qGbbg2tK5ASW14u3hKKyepPFskrnp9aL97cWgAD6YPs1iQCMMWjvxvZV9RnBWrCfe",
  "key28": "gXJw4HofW7Hq9x4cByioeqLrcGoSJc7nLpyjbkVKHQHa8yGkL2eu4e9oDqhM5fi9bA77mWmURoqzoRdbKMAj7kV",
  "key29": "3dXeWq2z3eYLEdCeyYuDbNQ6pN2gii76T6wqVWJUMDdNNTfzmGGJJoRCT26u6soVU569ezqZoHZNC4YSW2rV8bTv",
  "key30": "4ioFPuYrgUFT5f832MaggdMLkaVyfsE4X51R4FUsdqNLK13SUbsWH6zJEButkYGcpQXjHaZBw6dGP14ncoREQbFE",
  "key31": "64WS3YYxKdoexcEZMvoqYYjqJakDVtqAr5gjBhB7H7iAWjcQ4EGUhNochZGtJ5PJTNRo4dgJyocGUe6YuprnLmCK",
  "key32": "3gsBzZXqgGuSsuaCY6kXv7wfkhZWQv6WikFxmMdMcYMjhm9pjVWwjcHeLDDWfgKY37d9xzYdf4gRR2of8eZd1KNF",
  "key33": "xrnsfqQfPW1Sgh9dEiobiY4tL8UCkLrJvoZakg9VDEMuCJ7qCYczDZKMWByS4BM5TYnG67ebRXCQ9bGRca22p6q",
  "key34": "3RC19bZohxL6VjLiRbux2cJ2XEJTwYeVga7fR8x6zVkUqk8YrQqDrAvGnoFfYXkHYhKGbdzF7sGyNjKkqh93XthR",
  "key35": "4jDcnXtsSB7fhwY5FyTAcEPe4TvwYLCznCXAYqzMVnTtr5PJmNjjGV22N1cZXAcK82YSwWF1gEzCqkKWxnR4R8rT",
  "key36": "wyY4bR8rXQLLrWN8NYsV1MA6ceAfJ9hEjaww66t1ypJ1o1Y51nX7ni6dCKysfGYokQebda9zKs5UFEAbp9a1LhK",
  "key37": "4R9baFv2KEnGTuYCTDTmJYjqGM1tbjFzShYaz6CbqVZ92cA5b3WTk7ZcEJf2N1Brw8nne1CcKPw4hgo3bHbcYCF1",
  "key38": "4qoNaFDka2HcEtbN1RAKQcjgswMo8jSAy2zRAGgDkrMWAi1wcf9xSdnoGafsH1GL9CkP3ctvV4nWoniVGvECBxsX",
  "key39": "5F8onwKmp2cGAWnkgg5NrgHm3cpgW8Fk4P6AhpuD6XGt4fWuRjbGbYpbSz9rYAJMDESbnF24aSwEiJTnBhNNAQaN",
  "key40": "2qPt4kkcvfjPH9YQHUJzYMcGcQrkgUELfhqGf9aJLpUANRdsWXxEFgMj2tJ1Eay8K9GTxiaAZavXPjXzNb3JicMm",
  "key41": "4SYggTpoL9fSzubr31YQwz3uKy3DXFDmtFDpvheQiocn4UCNdqz2d7aVo1PKAN9RWCpJ6nnADg9C5iivZpKhMnNN",
  "key42": "5H62HKw2tJ7tD1jLUHKboSQ4MyRR7C1fWMnswHUohkxWckFurARP8jLt1hiVrr7LK4nhzGNe74mLrXKcGqKSbb8N",
  "key43": "3CRxwREjWYi7cfQx6soVbgumDffKZnbV1BJzoMa14Rx5QUwT95crQpPRUvQuUnTZdpdq6cAazCYSX2abEdDe6Zuu",
  "key44": "4xhVnGHndDzay6KkggQiMgN26ASgehr1uwFu5FEjGuLz6x2chbyyzceTjq2icrt65xdRakxM3qjHPkuhtfntfcEG",
  "key45": "KKUdzndoHk6qLGMBjn5Y1UCuPFdpR8EjYVHfyZzj5qtXr4vksyLLEyhUFg4Tq1nRyEWEsCYGJPdxST2Y9tPkwBC",
  "key46": "3f3LEqw9DBFzkLUcGErXCayujzhhMYnGFCHJQwpQpTZZCsCgZGzJiBWD7So79jBfqhPid2PPV2Gf84yhxmt876gs",
  "key47": "4fkXbqbmh5nPXY2V3peGavZEMAS2vNumSKaB4DxDFESmM2E18mPvFCKBMK18XJXmRmmgSgkEE9RFsBPJf56yTgJ1",
  "key48": "58yFasV4WXW1UELzUqBBtp1QCtxbTGJhuDQfymRNutiJoPQoeCgTXHDpAgk1GBwrbZ3f9UosUjCDC5oCWZny5Scs",
  "key49": "5dBSCJks4pWSRuqHFzbScmoovnrJLKPQmUnpgnHkN9rEmQEJVHAUTPjb4SXEeQjwgBYMEvdcpS3T3odkGciuey9e"
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
