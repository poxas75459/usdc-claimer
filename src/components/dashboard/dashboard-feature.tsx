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
    "4iXg8TDUYDHVQhc9xed9XyFs5UzRDMDYV6npiyyMUMfa4Q1ytaJbzHZvCQWrx2bKN2mUN1Sohqt2N2KcB8TX3Ayt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9n1dmSWnW1nLwAShZiGC8jMBvPxZZ5FzWKPsN7Zd11jL5ns7gWzpkwd17cBfYfswRKDsCSDjoLhjqZ1GeEf7JCh",
  "key1": "45kYFVpNXtAw8CSRhQWCCCervnhwyG1QE32WiUuXDNJtdfHWFtLNFN9yoJaWNGn1mkBVu5wd3LkKz55aXm1zXF5z",
  "key2": "2ERyMQEd6QdxdZDs6ZpPcjnwrPaD3bjB25zaFYjG5xpD1nYmZMu4qYsSAFkTXmQwzLrB3M8HZPzoKUqAdKX4mPhQ",
  "key3": "532gFVDWCDTsDvZGRLhMiLPBTaeKmBVayocuggW2qtnP17LV2dD876o41DR6tMh4zgZdQtaxTFsJap1nNZhqKZxe",
  "key4": "3CAxSyyUbcXjDkd79u88b6QQTkVvZFCArJKY5PzmAzXAdojD8aNEBH8sJafUJb6tJtCkGo45mLsMQE1VmUqmMNRv",
  "key5": "5HSQRKtjagL5E8QdCq5m9agDBVcqUMrA4GT5LBhkLjBRF3nJgf3ZXDn4xUiUyy2HbyDYUFbVbU22KW687aC4m1jd",
  "key6": "2JzGEwC8z6XmQJHppcF6dVHBCaRSFzxcaLzagYLWEQ8NMoinSEJikhystbXzfnzodMDt79CoTKs4CZPxDk3fwc6A",
  "key7": "gGE3y5YPzmqj8YF1t7XvjjckVtbDpYapSAJ4go2BqR1cywhMwNf3q7QZfrrptf2zhP1YautxEwWGtRMrMLyPYwS",
  "key8": "5VautNEyhPDdbrmAxTRcCnd8t1qC4jsD1oHtDrYTPaCxJbsQndRUX2j51Fx8Dr2RDUuyrU2tPHtYgY3nkhBBe92S",
  "key9": "wfb9T91fpi8LtChN1E6LPH51VrcVWaUqk1cfDE8pweAT162ZTqL7SdezeVX8sqGsRk2NgrM1iTNrXxHrnfBK5Kq",
  "key10": "4sKH34y78a4ES8njNaXons41iERPSvyzMjmMmRiMV3nDK3tk7iUKHN3ugGXXFSaDT7o2VE2Tac179JDJNPh6cwiZ",
  "key11": "EFbKm5nPjUsFTPyCrHarGFxR8bGVht3ar8PUFtf5QzcJsUChU1crjKueA4XEtRcadXEowUrDFSm96mcGJeJ6jgZ",
  "key12": "3ucyPpEmXGQ5hohQbY8YTpDWgmGeohKbaoifJkc3fFwABZHemHZ6EnaB6JaUsLAkhBCDvUEiF7mECigMiJUyPoYw",
  "key13": "3g2QAu2otPE8dJHv4tsC8PkUWyGzttvuBJsbWPeXXb5wbDMSuZ5uMNSRcN7S6XwiGv1S3iVbaEcCBsZ3pGKGvwjr",
  "key14": "14mGC61ZhMpGydLo1ccHewkhRjNQgLjeWmLFPs53bF4xKUHHdKBx572UvMGLN4XiFLYQs4GFnD9cPWm2R2Xim8s",
  "key15": "2XiGuopLc1UKZDTiCMauvECnuyLrnzrZzyXPw1D4Fi16w2Pb731tm47GviRXop77WmUrCHFq4vpkrKtCX4vTj2Fb",
  "key16": "xXLsTExxcZ1cdQdb35Rz1dcvdQHriHdtRMiMuu9Qn3CziMYxmw5TWpuoGqUhooLLULxWhVSKG6wpg4jQFX9mtKC",
  "key17": "4WrRNtM34v5kPseXQsohA7DW9yy7a7cJCFB9U2Hw5AUuuurgVdqRisJ1ZtpuYbLwJpsC1yJaM3mccLWdRHnmKXWn",
  "key18": "39F8t2gNzQfR7uL5tLQPE8tUTj5y3fNffuLSoy3HaNz2rqDNRPLtK8yX9TbDGtRX3ue3Kp7WbhXKs6EXTxdsCwgp",
  "key19": "2imirg9bZNyX2jjYr8JSV8mEuiYyWHpifc83Lne2JUDTX3xVbuHwhN4ZbfMKoyxGsU38bkVyZ3VQfqSR1sAM8byk",
  "key20": "nz5RGScLusBSqydKSsLrtuWjy3ew33p3PkRRZNg4cqhv7A23q4a2VGZgZ7F2MboNaWyrV8hXTLEkgXqqPRdVhEx",
  "key21": "qtQMmMuSKRewy1sPeG33umJHUhrb3xja8YAmJtb7gRMvZjXN3XGx8xLJz5TPtPgn7Bxmp2ag67n7MdhhkTKwAUH",
  "key22": "3q9DEqPqegEqHAUWrMJmEBSC4iyAubXERuqVCLdZtoWxeDiz26kMAsuSCwaGM32ohyHhvo8EwXDTc17NqBRdNtj8",
  "key23": "3izVvvudinbkTLj9ju8aUbe2bt89zAGGbLPnRk7wP825Jzyg5DMqx3kYbUuxgH3KHuN9E6VdUPWuzsLC61QzLD3z",
  "key24": "2yWko5DJ8NKPc6z3Zy9pMXzuQUoRMBtA6EenkTDeMgn9YsWEEKh8XzVBGtEDr7mmo5a7bwAhxZWnfWRVgkJjhG28",
  "key25": "5PK5eCwa1TcX4BvDndn8fsjDLeoDDJq9sJV4avaFvhXrEZbYjGhc6SfnEcKgM8STyJZu7zMfqQPWFCPXsijRzkxG",
  "key26": "5oZDCWfjYhVy3CbCmRjhJcsy88wk91Ke2owNR6xHwrazg1JR2ft9FUAVMFtotTJtzAYHhLC58cAUp54XbSoeiezs",
  "key27": "2dWmTsiQw1xeP1zsv4dVMxg1pf6w4QU6fGaZnR4eqrvQ7kM4PvrxLNphHpkU4BLjKcZAJBor2LiYyorXNA4Lke6f",
  "key28": "3nLxNWyqTEPL41GkWxBtZme8pMS2S4CKZN3WgwGJCMsEV7vSN3tB8EgHRcvffK7Db75NzqmnrBtAACFwTyJZmapn",
  "key29": "oFVnfnH8UVz3FRy5NQCCQLjcpUrCko4zbwSnNZnHX9UDWqKhLQNdaUatiEMZi8V6H132JZN3UHY2A1w6bhYDY7K",
  "key30": "5m2abgegLQJR4CQ3LB9qeKCHyyKciQcfaHe7HvsX9EaNsw8YKvHbRTSeY5gpRtc1JdpbzjTQ3duaE6qiv6Tq3s5A",
  "key31": "4nkofLxLDx9iXauqbK4EyQPUeJYwFPxUfgw7kfWZ8kRYB1eUJuXT5KErHVuAhz1b7bQ18aR6Zik8iXqX9kYwSw4q",
  "key32": "MgS1x9ynqFot3LRp4TxJzq5TQptXivaWj4TBArktf9vYvPAmT9VH7P9bq1gVoMPfdwpwVdtDraLsrSEoDLoWicG",
  "key33": "56fJzNhkqZ2TwDePZ4L61wqFy18PzpgqA7HiRDTVQFcFH8tuvsAR1SNyqJGuHp1UTRGVB6PPGkHCGmakvj6SvetS",
  "key34": "3Gkhp8vDqiBnQcxDTMNDxsVkiDF6yHWR6DXrFbpKaEeay7CtwAFYs6B4RsfpqhJYmyJMNWis7X4ugHqUiMzfKV2V",
  "key35": "2mq7akQzfNeeEwfxJ1W7DJADfeq5wwYJgkWckYobB2t2PN1BehNT75A8L3MRfMxQpYZzoSEjF7vy1DqCMxsFhg11",
  "key36": "6s9WDhPNPLRqRQBv5B7345hDjaFBCGvvYwXPnBQyZTVzqjpwuoaz6ScRukrJANofxer68iCW62tZiRjkJYBnp4y",
  "key37": "vTw1mJRrri43oibDh1HzKh41qHVW3FatuBT7KexG7q3HxW3mCpNewcN1hfs4mKMyE6iwrwwBvxJJPjCedZapQez",
  "key38": "gts1gy32U13EFcpJwbG5TdjUES1N9MeYUgyt8tVaqBu2pUTmAU2dHq6ae9dcTXQSPZJ6x2PK82LHBJSkZS1QvUF",
  "key39": "3kSSFLrgcaWqJzbu6Yyg98mJFsdtaCi35aRLQW3CC8y4sWbbcqQScudTWTxpHF5PBYTSPxKFgyNByxCPAMUjFAiE",
  "key40": "4zLiRertYizPL9kTsQdcBdFKbUdRNY74p4CMQAygYqfJox1gN3d6YNbTQgJsqcfx7ZCAQdEQdXhvdWX9XQC1kH7",
  "key41": "3gHTcnv73uTCUvxdedDDE8CHELqomDmd9nNitbqA1Hqmn8MPisqxTGrD6vMYLdU8CW4va3Utqny7jhjGBU78LFEA",
  "key42": "JLBJAWjsjbrPTTnGpjpXKMQF7gUacZyL9VfYjmSNNnvb2RM2nXzz9A44ccy8hfmGPokJoxXtD5kU3H9qFbJC9MQ",
  "key43": "2srueVz8PJcXGd4AyZMs3rtKkP81WFniMu5FiYddCE31wsGqWG96exqPcuveExkyjntZ53zVbmjFHQypTgKcsBuz",
  "key44": "5cxf2HCL7JLKV2XVDQG84QSXc4pjGoAAtmsi2hU4JENLnAB9eq4GbrC9gp3MqzeDJZv4CVB9o3N3ZGV7YBJvF4MX",
  "key45": "2CwiauTdd8X4Sk6wsBh8TXWA2qgJMJ5LFwVjTDgwegyWkcu8bLuBZYZJfQBUwsG7VNZbfg94wheczoBMveHDA9LZ",
  "key46": "57XqsQdQjUuP6oeCBajCwoLkqMxvTohFFZA3KSnZP4T6kjzrR3Xc43SiVfQMCR1RGCZEAPok3qyUPkAeJ1gGLzg7",
  "key47": "367h6k9BjtBiA22TLsjgm3X3gzxa5qgD3JKGs8QBowt6jwL1MxMiH52qYJAPWy3WQUr12YjvXspusvANT9PK5SyF",
  "key48": "2Tkwwbrkh2R2JsPztYhGnmdGgsbpCz8CeHuGHxZjxzJezyEc43XX5rxKAENprbLjgoYhjvu99y9ukwfqdXyEuKV4"
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
