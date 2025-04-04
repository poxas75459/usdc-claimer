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
    "6wT8VpZTDbmSnh8A4mT9FK3DVBfvpqcwido8ZVwMVH7CJATiYmxp2PtPrwtabpr2gYiFsJaHYSedxohnp4Kz3i9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jvaL4sZvDXtQ3BjwenFLc4b4NPUSPv2U4yLCCpv4DttrPZGPsV1xVux5B7eCHUzsvu2CXWuoPas9MhhtqLWftbY",
  "key1": "2W1QorL7wAhm1wdiUZ78UKRoyQ15kbDcCWuec7cx7YVVsEdiqtRAgdFqUivNdxoC9kKUaDDgow38XmzYDxj2Z9NJ",
  "key2": "5v3fsRwwpWnUbfPtNUpoMQd2B52bFVZHuDGE17DGiFst9KEyDXG86jzmqu54fdWVaCP9X4fhGTpm4QdfQcdyw6Cy",
  "key3": "4PX1zPxh1iS78LQ53oedZawtVoqEY94CxYXv1nRDDBM6uwG97yY6m73FEzAWxaxVLwAwwwEZdRXEY6yQQWRgE4mZ",
  "key4": "3WYecGC7xHgmGPiJGXj939BxCAMoLBZtC99vubAwLjfJivSAw5AASqNCtbWqcyMZK9gQToBm6ExLinx3fMRjh3eU",
  "key5": "4c1HFtyhHq5pzs1znBbvtvSaMwX9yML1vLZYF4e4hZgqF8awdY7t6y1zyQD5orVRDnHyuUNNmwUsMd4kGsXiomvv",
  "key6": "2RK1JQy6e2hLgoVtFSW2vWHZ2gWCEgRg1WcnZAW7GGm52bH8doHAPZ2BduxUjCCLfTNnuGYXQ3UcMgJretsGSDi6",
  "key7": "2if8TugexpTK6FcoGR7WdUULpspPvbABgnuAd1dRVPwpeX4fKSUD3XhsKUvPVFhQzrA4ky2oZHWRqbTAxMxrrHE5",
  "key8": "an78T4bdjRBZVfdG2KGaazGucdpvMNuwZXE2akZPxnkcV5sxUmyD14cSRLRWCLa72k9mFPkaMdURMM13Q3ynsxD",
  "key9": "4jrhxa4QkURPjJAxL1wFXDXDfb8Ukj8kKRrBYu3V424U44MvgpoGEjVvYsfncoXMT7QYqfZ3ntRpMLvEZGaTNS2T",
  "key10": "qS99z3AT1JK4tf1MvTqnRvrGypA3t26GK61tFsYun69NYybewDd1XTSZPNGuMmZnYFnrWEU9VhcVLHtrtBVa4QJ",
  "key11": "5CwAUkc7Jy9nXnarcqw9sUFKVKWYytFBgZxeoX66NcgYsYJJEDwjx3M1VjFrD6ZRqELcJUsMcfayPmSd61fkeRwz",
  "key12": "ofnuoPeURYXwWYcdFYeh761GChYbYwmSoq56YTpQumsz3ZvPadHvhi7owTWJfmzyptCZgn2UYS91qpLFHCsnKRw",
  "key13": "65nQXJv3uYLaEFXPHidKVxjiDjnoWn8UdnMbfuV4m2EnNhW5iNG1EncUKKoCGuF1TjXpBXpbscwzcCPBBB8T3LSx",
  "key14": "2YDM4GmFQWeYSH2hHzRFGP7VZDzTbHHuPiQxR2tXFUfneg98zUAFPaDSXEdzoARF3SVFeyRU2T5W8g24TVuiQgzq",
  "key15": "2nT1Sj999TzFXbpfFgTdAzuQde5nL984uFE4adJHpbDMhjN6pkSeEcHBgnSaKDrLqhoBSb21EuVX2BiMqan2a4ih",
  "key16": "5mCXZZPQBYkwnm8T58rJyaxJRcU1VCFudTs2SYAJ7UUwZvsRxBMSBwoDAyVefn69HaYvaDw1QSEWsMggeL3ybeRi",
  "key17": "4KBFCgtkezF2RZYjdyGmQR1Q37xdXk3owuJtXLShPg2SCdCh9hzw88tzwjs5bEwH9BduHMitcyuYbUTxcXnBosAh",
  "key18": "5MggwDprq6wTHxsziNpAfS23CijkTjryi8m1BwqVUMtWmMykD14z7KoUKeiXEosQPJDptQVwsSG2FouZwQYPP2wP",
  "key19": "4Pz11XNcwSG89bPgVkxBKyT5gYNNLQtudvi9TH8czCQcdwCcRST5TdEPpdGmCsL5csvgiWAYk2eHjz2kpLusRU4r",
  "key20": "4bacjysJQ9Ac4pENuQVYsPrPRunMbQ7VhP5zzHwhCap4strt4qH1yCtRdXCzcanoaD1ENVB3ZfDF7TbPRTXaJqxA",
  "key21": "2zcYquLaJL8Zf11F5mvhTViBBUXrjYm945fRRMWsJJfrX3aAxGEwmpCTVVi9zgvg9amnXeiBzD4bGgfToaXQHCDz",
  "key22": "5mCw9vepry3vJz67GT66prqQbqRBLQVd9eHduBRepLgTycwjraMGHNmzLBVVPXD9ai4Jq257N9gu8uCzqR8NSZ5A",
  "key23": "4mN6fzq98oBHhPmHee7ahdNkPcefRvVLnzARMJTcXRhTQkjgjycJAiSZMLiDWTqnB9dowjm2T36Vg531YAYViTub",
  "key24": "5dYk6tHiroYisqBCESuLBwNo4cvCqXAQi2SCMGdsqvDewWtVUdTpS2ZJbykqkMt2KQyB14eqXv8wYsT1h5XsnuTE",
  "key25": "2xktMjthRC5ak1vtZJUTE8tosQ2K9ANZ1Cjv2f6gQa2sLSULukw78whz3Z3QCk95TTorRqWtWRAFCBPXBroydEf7",
  "key26": "2tFVX9URo3bJqb67WQoPB1nkjTWQ45SpJrhNcMUgCygPzg5sdQrdSzFMu6Q59QUp2oSvf5htrgRa2GH5VZuoquy",
  "key27": "3NCUgcd8HEWtXgT84pewjfGPAfNtkm8iyAcaYpGMnqavakoJT3RHvGV22YeHLL2Y1nWPKyeECH63vMgxiugQ4yv1",
  "key28": "64kxoLrF3P9qaPb6GfnM6h9KE4ApHrTAUyxiFhB4RU8L4TssgQccXQZKizoxzcpmvJjpjJrw3mQyAfmrZg6A6hCR",
  "key29": "2sysjGi2cvMZBbHqZLYq3sy9tA9u7ZDdihPc3K945GUfm16acGQcWxhTsbjKN1EcUWjszV9gPR2JSdR5TeSWDNH5",
  "key30": "5Yp4r28EPRJwnqKJF2wpQGveCo6jfCj2ZCHsLAFCXvKwb6nYh8oP2nQipN6N5XwtAkhuGfJ8ZL1aQSNUa918C5dd",
  "key31": "2F7x9bVMeFT1C9f5o56paYxHtfzMqiiufrVFitGpJXT4MLDJx3EZGTvu2vm3fh5NoUTgeXyYgmAm9CZrSZngN32T",
  "key32": "CPuenkbrzCeynbV5enqnGxA38or4gkkSY7gi1dSGKLdLq2PLMiBYYhHh3BvbHV8pPS7v8htQWcp5fPZsxJCCMzM",
  "key33": "5CTGiqnqc9i49kdg1mcjQWfAdStB4Kaio14CpfmuRW3ugWq58tkJBjTmoxuUKbAsW4Su7vpBDqQ5bcyN8vWz4Ygz",
  "key34": "2ZHZ4bdtoiwfYimHit1XqF1GCHSndP92viyCDdXtL4VYUrXvg8HqL9fCxpxKKgaUhD4j6PAtNYsHhQJmRnYq9Yfq",
  "key35": "2TCJGQgMRXGWSgsfcSvViKWL87UB4nLuiJgsnKcrh17j7ndx8eYHHz4hqopEPWWpPvaHhFycLbydtosCBciMUzxW",
  "key36": "3eiPy6B3jUzuxEfKXJQ2vvGsmZXkKpAfZNodzvbMMLWs4J6B5kZfdy4aUcEYsFE1YZYsxTRKdRw34EuqGjgNQMet"
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
