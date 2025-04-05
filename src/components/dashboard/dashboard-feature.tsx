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
    "3UDoMaviEXMEuLGuiv7BSiZHJUEtrbDywGz8q3rCCCZ2zQ29zhh8pAgd79Nb3zS9JEw33mEHoTcJgB3t41sY7maH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4APRkdtgxCVWyajqgpkExhqtNRnxVfCEpkVRw6SpeTZEnSEqMrWZXP6B9hY4Ja4ipmXFPsqdQ7dRYaUQFVTY3s9",
  "key1": "5heg2Hhs4Bfev6SW685XzuyyPyxBFCatQPyhXQ58pEemVNktUfBg9xFTzJYjeQz6JjfDcz3SLKHSsUqoCZNgvKXv",
  "key2": "36tGpJYmZckTnaTC5Tfbe1QYDvSbcmn6xrjpUSdJFYmz7E1ULA3sYMQjyFiog6jWdJptvSY9EE79suybnUKMEtGH",
  "key3": "3Erg7kwLZDhoSjwzDaeZGxnYirAaYaXcHX7aqYWdRhfZqG4oLgTZsw84fyd2EdzuaX6pUGCB9r66A9zw8zfnkGpR",
  "key4": "4wX8WQpVTaX5tDDpcdtqrGYbYYDUh6KrumXH72KKg3HMTtaSZeYhcSSYnnSRrQt9CtLjSZLQKF5N7ttDQRAz4kMi",
  "key5": "2bnLfS6faGc9aGWMZA4VC4P99cMWqBHALSg2gsrcEps1JYpXE2yP5arCu3BM6KAyL4cF4iVD9AiSUXcxfje3TQA7",
  "key6": "QmHhe1cgX7LpvhwVo5goujirw1pSEBUPteLTdpPm1MJ7zwx7ctPatdReWswvAMQnDo42Wov7prz3px9DWDKswB8",
  "key7": "5FJKwqZg6vJjfeggg2LJMNrZSBd6cZAWADo2car6DqTUpsPaJXSGVEeyJaMHJoakRdr1bC9DFUCSEAxCEvYkq3RW",
  "key8": "52grWjK8b44ft2CB8xFagRjtLMs7b8V67V5sYK2r2FhiFdP8W5eaGrYbNMQws9RLYYhsMJzeWNkVWyhybR5XUeLM",
  "key9": "2hcGVAbdgNBLA3FXonYutjteq8fuiNYkAHnrX9NwgJwV4JsZqFnDSKkAeYveYay3nqxEazqu5DtAon2JcxcfdpYX",
  "key10": "4oJATmA2DX5xvzKLwe6Ddoz2BwScGXsPQiQZKkDfMyHGBcJv8atKF2DHqF8JtFTsSqBsZS8aXuyPEnacBrr5TbD1",
  "key11": "3HVLNDbAbfwpZhsCurrv58mBYVm2capKqddPDcyMqyeSj27Zrt9G3rdziU2AHWSZbTJmGMYMaY1XtxeDXC6AqCEM",
  "key12": "66mZapgUfsVWn4x3CZkT7zaJSB1ejnBiyTSYBa5C6z96JBq9qQJ5mTX9pTWYd2daD6vHhiix51w6UBiXwGn5RLzr",
  "key13": "5f73vzSnujbZsRkNgxXrtYVttsoLAn4YbdDGHfmEuBvkknoJQWJJZapF7mWKVXumN2U89JboP9YrKEh2ai3kdH1R",
  "key14": "46Qqhx1E2qLosuXYzuyW69YvZR5Qdvu2UJf6Bv3dPgYSz5PS5V3L3tGhNJ2FN8Jf7VXa8XC3p2e5Zx4gAiysHrvi",
  "key15": "JvWrHg72uUb5QP5LL93qJu2Av5vjY5wqYDxufPf1Emzkwa1R3jpLc6PFVBHgbRZ8v7kE4FW2dE8p7JvgT7DAVha",
  "key16": "3PrXwvter3983fifdELtSRcecGc7TKhdDhqA2Xn9rQ2WRx1NUeMQLjnk3R3oqxAbAies53Z7eJV9EP2XmcRPjMhz",
  "key17": "38FkG8Pj8p3nCfteZXUCpcRy46xQKNz31VWdpgjsoJLKaVNkKeYtmWjkxbbx2R7HRb9QaWWkFEkUWrQWHwLC2gs4",
  "key18": "PbNcbgcBBsxXVDeqwXLJiVscQMJ64DBXyKfZqQqjnH6p2nvxKzFmCX4XRDtzeRbc1ms1iyo6omP3PWeVAz5Szst",
  "key19": "4C4Vy1qY6C9LgVskKSavrSPTcB8JzaGbYYiCMqwrKLTb7TAVJ7QNf4qRPQTRWE9HmcTgCgFGy7A2d4LUYbt4m5iH",
  "key20": "4Xx1u9ksa8FqVtAU6ywML11oGapZ65mTbmLzvK5Hha77sMXbDDKjHQf146T4fQ1WfaGoNdWT35cncqgpNffRYLFP",
  "key21": "3nSmpZLaAknQ4rnSKCpAP36QoNpRBf2h6tCuHZEphr4kkB4CwysQQZuMvQnZ15FozwZZptoAzSTHDnRrTQSarrYt",
  "key22": "JPy47GUy4tnzUC47QGVQErQP9HDzmijsPwxhp2nkpR5SJbYT126vsg2WoVNriDvBwiw6mJRrNPCvPWdrWkYyp82",
  "key23": "WYKB1LqciJr6ckPq1jrXHgKpkKR3c7r3YtcP1nWbJG7HJ4Uha8cr7jVMEERLthhywFVta99kWwTa3NWSrHu6mb8",
  "key24": "3SLNFkbbSfbq1j8Y973Nmv44xqTZfq2VbcYERuSsRexgJeoDmmbiEBg1UXjxCMoC8UX6rhvcDWdZMVFbfomV77VR",
  "key25": "5jqne62PKJrK17pCfYUj3agLCuirKV6TaBxiN1VCC5NdhzfXTkpwhuBHz4XrSRftSmAx2eBpY27jgMBaEUYHzNFi",
  "key26": "LCtdHstQr8jgNXF9HScAWy7LbqtQicpoHdXnBKNxG2WbXyw6wehjpW48TwHYxGnWfSiGWjt4w44FZsGALJufAb4",
  "key27": "K2XmZPR1gxV5bKPDuYiPgputjhtLcqw4VdqPiaSpHfezhHBi2Ddz9uXbD3TEiWfgsvYPmSr2TFSh4sUUx6tNz7d",
  "key28": "4JcuhRb7Xu2M9pF76YUeCXchGk2bjunyuGCNTnrsS7XfmXRSRKqpwqMtyF1Ti33NJ4mCu948wLRFnkUAGQ8DKBrJ",
  "key29": "dSKhAgaqC5zh5FY15bhxYGixutnsDdJ73BuM1G3uejRSjY9RCqFpyVcWLu5FTPwAh8nbLS9io6CFq5nJjFhguSk",
  "key30": "5uVqSVfJschknKJHZu47s3493eydBLFhYTTYRfNHR2Bgc7bDWzDA1rudWPAAK3DzqyPftZJhfsmKweLM5r1q7sdu",
  "key31": "4Z9LCdUBCnkQeaSuVL8krPQKRs24NDjJWuUgTws25RxgEDUVt9fLuxudW6SKG8o3bcb8c2jaUtFGoHnQFcP2m9Gb",
  "key32": "ioZUVej1tSSRu1aNASqQeDobkh1aUamx9ZgN49Vd6Bm9B1AX9QV8f7ay36TJJHGfjVbWiBqEnc3k7SAMd84fpkg",
  "key33": "32eF7vTdqdTqJqNMrBWQRxbQxTD2Hao6FwXoUkFCADTWyzJn1fiAw2yeEiUtLcwoVXgUEMUGLtYf7DpVvpgGqm87",
  "key34": "36gqiaFY2NJypYpAvsY3tR8VcN85J48qTkbLpvANiqYaBah6xCuejWb6WUS5RL7mLv7qjwoKuknvuUKhRuhnL8sR",
  "key35": "5Nj61mwoJyQcymZtDc7VBMFf8s7wh3HLZVo9f6mpGHn2fJ5seTBoXwDtCSikLSEefbSUy5h37DoxbD48Z4zYqt1u",
  "key36": "4MyR7CoZgkFsnmECiZpQzqgMZBBbnwWDWLVBxiWXGympBDXiorvWLhbww6LW9f3Tt7RXPSAX2tKvFQsokAK6pthQ",
  "key37": "2uttt4KjoKD3d3fHQ88G3x1ppoqLv8obQHKu8h1iWPL18nB3JsK3NEb4juYi2GxcfPcY6aq6b7M1uwxZ9HFcJZAy"
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
