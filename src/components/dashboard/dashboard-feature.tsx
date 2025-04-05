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
    "2B8L8hTqBQHpjq9tvQKXoRD1c6kDu88jkCV1qzXqRYqiNvtUudwkHMFueyCxnhLZTWyNQS6HwK5hjRLVaguZvm4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4guaC1qFV1BvpHABTnPiQjLJfvnbUnwW8rv8ovFu6YxHotjDhkghVEJcjtaXm5GWcN4DgZZpZQGy7Y3RHnS1DuVG",
  "key1": "3nXgDqJRHMwuQZDRbJXKJKNwi7cyvug9HEUqxUPZCBADJuTLhg6HoMAsdVvE6eEZuaKzaZjoNU8gPQPf6r7soqsh",
  "key2": "5aN6cAaXRhchrHa7d3XD7e5ZXeLNAa69spGNFNLVCanDjBFjBDEFiep929ZZpRR2CF3QynqGk9zqHFSnH9zYHhwJ",
  "key3": "5q9DuBtvcwtmXReGAWksmFpHdDR8qyDXpFQbFLGwqR8T6gASnDXHeDt7ZmwDgwoEEoQte4YfMTYVMXtajuU51NEi",
  "key4": "zZ8bK2V1HLce1QyQttCvfdE43s6BKY244JYm13F4XjFbves4rAjpFniZFUFDYJeMHnRWYSed9EoJcNTje3RCjZF",
  "key5": "3Bp7cnuWELXJxZNCfFG3hZyC7pyAcnzqfHmBarizpG9NMewM27JejYzRgXExa9xSQRHvARyQ17Nzw7adtp3X3h6X",
  "key6": "3PYMUq7SxPhoGdb9yLjyfGnG68pb7xogYYuyhYbS6DSaRT1E3kYH1V3QkUVrG9vLSGebomqu1d3cjHXJkW14znDq",
  "key7": "5cExqyyixuWWcKiVG28A3uP9iVp8afMKoe5zmxkgiqNx7ujhPjZuXtzJS2hALZsdCrwetmP3XaTd8UVPUZ8LTez5",
  "key8": "35V2k6g7Uatft63FJFAAZ8ZgUW17ox6PVYSWVieDvGwy3Ryumgyh8FeHbbNybxqb1WYBrNj65F4RGm6c2kiQLnC6",
  "key9": "3xFsTX2CuoqfASe84dBFnWi2ojiBu3q3miRZDvBsni4qMtkCxB3ftd8wio9FW5p8F83ASvPyqsijkiHBHtBQUK9E",
  "key10": "522ZuWbgz2dABQq6sPgZTwmRoi9kL4oCMQWseistRBeVgYoFmctrAYy87fadifKJCU82cAvf7tMbohiTt4FdrBRY",
  "key11": "2FXJmtDGb9GFZf7BUS7G7rpFEPaYnn3NJvfj6ZxeFNxjQP2WJDp54vwKXhAsLsthf9rJ9bD7PT1ky6LLEHKLkLqB",
  "key12": "2WbVzDu5d2MyYU1Lir5ZRqrrtUz8Z3iv4D3bS1xHWChZJ29FZTEUsmkbUHivTrVQQLZgUHZL7e3n1D89fzi9YZuh",
  "key13": "97zMP6sBrpbNSb1Vsiexn9CDwHBuAdiVYZf1v1H5M83Jtx3Fq48UvFnRaeM4vL4U9rToh2onkAn5Abe9tsWX9ir",
  "key14": "5ZKKN4qDrpbGHH5jcVJTXB4YvUkKkRKYG1FhoPuceermAfWtg6qtZenF7b2n9aHZm7sXGnnfct3SwXFR6C3gFR3B",
  "key15": "3eewy2bjuDyM9m1C49L9r2PeGczwsmNrHaB2X2eoeM7x76dyRsn9zAFhNQUT4Zth8KzPD3F436HX5ug9m14NLUgf",
  "key16": "GKg3Tw366fGuM1EN5w6PDCVnUBQKov8S2Nqr9Hi5fuT8sgVjN7kPopKxLa1Ef2kF6bqiK8oEC1Vo1hv8XJGNzN2",
  "key17": "45FY87atcgQYXHvvM3SbeDvVgpdKVZit3Dc6KE3wUV1tZ8ZmWpSbAXZXRVxcxvMfC6bUpFNwBooPHX8q88t8gBsp",
  "key18": "4dDhFqb8sBVHTNnZ5C9pqXeiA7qi5CNCiStDVc78WdmpvvU43rWNa2HpgMs25N6SNFeBPDQTAK1CfiFLm994hh8B",
  "key19": "4ruvEcZfBvhFQNUXkTqnbnJJkZYUNXKPH9Krfum8hw3UJnfPgqzyDv6iJxXpq7eU3kPNibSL21yeKeSZjTpe3XNr",
  "key20": "CyWxMqwX5hYwDCHjxzAHD3kHgZtoDCbJN96Ljnn2CDjhcfBsRN4Es6KiNzvW1fYrqu3sx717uAjcrPXh9yr6uo2",
  "key21": "ByvmhKXgeuHtnm9hjFdSU1vgXHeZzoUHooJPLU758XHCg8FNfJgNj55GyFXFpa2evg4qZsdKfM8gdRTt22K7d1J",
  "key22": "5TKxW14i5wfmYMkpL8tHEgpuq6iKrFoThTsgvYBFog23ZPYWmuZSth1vc7xYEJQBaLpxhzo46g5DYo5bMa6BkLSw",
  "key23": "51tQqGmMEQT9AVtyox21kyuan4hMF5MdAYnRKLzAbPsYsPo5DPfec88wtVH5tdhaGxAgEUgtktdCZudcFB9xzfuT",
  "key24": "foPKXsVGtjAM6uVQRA3YEvh9zuqE5FSgKh9zXn3P1U5WTzLB5yPGw7BU6m454VMv8fNxmN5iyF1CVJBUeA3EePn",
  "key25": "3hhefCoboz2F3JN7Ttc9AayuGZzgNJzxZQYw7Urjr4B9aVG4URwK7SWPZzAcnhSNS1DuFxLEhZbcuavZJcyyJiwn",
  "key26": "2HaK5KXg78rp8ffN3UL1WDPfoKDwePiGnPHKhcFzCaCtkwn8ooDVZJjVbRxR9N3WtvLdkhTxGwro9DLMux2wCUSp",
  "key27": "412AUDaRTUqp2Jcog4eFWxUBBaWth8vhEXUDshK7kDV9hTqwmBuLCUnxbLFP8FXTpdLzm5sDroMhbwCzpwBA5KST",
  "key28": "4K8wrcgFznTC9httYn4Lbj9NKbprco9psmJM81gMhkzaLtSZFgJtoFhvL9WB3iQpPZmjRjC2MPCntuwFua1r4fU8",
  "key29": "T8DBCXDcwDcr5CT8f27HQtySoH5jeoiVPGUi6eHi6xQRcfWSH8RKrT1r79cvfN7vU4KH8T1PGGDQc3Narb8CAX2",
  "key30": "3kAieUChpgjHsqBm127FDhAAqCjLL8nG5ziaSiKy7bKhzePp539oNhUKXwVqnooGJTbSh5sWRX3amg3aCvH3e5Aj",
  "key31": "2ureZkKcVRLo18xHNTCFACcEDj2BANYkTgT3Rmgdj4KEBtiBFPs1za12BXMxjeE7e8Y2ai63wFYi3dQxo7JSwLwy",
  "key32": "3AZXgcxgQrNqoDvFjfuPXLskgcTCbZgpRQEJtHiiG5M93icfTVvkHQBhEZwqQCtCkifJx1nL2qyKSRCRMSFVhjpX",
  "key33": "2fYnaUPGxDXcfGfEEjFSjtU1w9tM5y2HqvRdCiUTsQ3Ru7ibDQCN4g2BUxKkst9asjFLoENwd4Jto8wXBARWfZPj",
  "key34": "5dRRRWuAEjSLen4pBELA3JiLqPZd3pAr6MzM3b5me3PBST48FxFjnHgBM5xYCVYFupKbtS71MK3nEQgogjohLU6e",
  "key35": "3SzMeskfdMtWyrsURGWHri1xWoKMarcFwHKSPWzjGAW5yXnuxu82rQaTG3frwga7t2o3jAriDt2pb3rxUMVdmmva",
  "key36": "5ctrHRSsHnvJwbiQ8wg8HYZbLee6LCZBzLzcam7b21JoS3c41NAHGaZWUyTn3ft6yZRNWhHp7GwBfEmseaM6ypfK"
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
