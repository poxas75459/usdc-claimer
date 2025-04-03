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
    "4MrHs5tkKBH4D2jZLKPWFaFCfNMNnm65TYBszxCFHrukYcHUg77eAVWHH5Tt9e7F1i4gBNGFpdbEZrxNp1rx7pWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8XryrziBPLYE7vmhX2DAdjs4CXQGfsY2pyh2L6d7SH61LMwBUv36kZW878WeCzYmT6ecQWLWveqqMZ9MN3wU3FP",
  "key1": "MetbCsnzvTT3zhT9vNe5vU96BeL1KocRZGpwPsz1AhdKER41gFeccbtMTsYr7GkjsG89abXMAA3FHz1eeHG5Pjs",
  "key2": "3ofVYrPUBXxJDMGXoKvZ6tP5wfAC8zsVBbchqNnbYPzeYeM9DfLTLZ9HEUJTTjHgGWUjJ8ZNrmxKqhHRa4hqcdUD",
  "key3": "3BrbbhxwWabdckNDwchVwfpVKRbNo5fwKRZFEMWh4wAMG88cVrefb4Hkdh71vVNbDRCPCrG2kprPWj3xc8s5CYPg",
  "key4": "3b98jEJ7jVDFQ4JYacP4aeWQn1tVXhnQxtYEhZ7rVjZ6mbqJdvMwSsrjK4qkzV2ZKcDTUANasjgVEoJcQYDXDmoe",
  "key5": "41qFaVfZ4RmbG5SPHQpBKBWwBtifRqAU3imJGBLMybjMqqcSc9UN95fRzbnBQK4ve6dy14JjN5mc8FTjprrrsKZx",
  "key6": "4TEUcXomxvF9vM6NWjQSGQ1si2cNbyhyT746oTnDynyKbPmGR8GDJaem5uSKugMkq4v6bt3QF35EV2ScURsBFqu2",
  "key7": "4rzUQYeuUj5f1fmkrEduK374BorZsDSB5VShDXaN3ECepN2wSdpGCtLNdhGZcewurrV9mbittd9g88X33UH11wN7",
  "key8": "9ys1QayyuD3qBQJofeYdXQmrh3SyeaTAa25dXd54xRvXMmEvaiMX6sWWEieeMVxasSYvm5HyEF9LbUkMnifEUpp",
  "key9": "2y4PNW8RUBc6ctj7g16JCxqUBGiG9gfw7tkEoZTbESFwaYE1UErbm5d4ZYnQ85ZMTWiM4WA98Pe2iHRYypDvebet",
  "key10": "3hsr47o19zxdwQSuKoqdBLbBKUH5ie5frMPjnoidjjGoGzrKAaR55a5dPW8943hfHRUeyNaZSKJtvdqQPgn2Cz6s",
  "key11": "2iHuWNrV1FUqupuJTFDqAN71WUp7m1PCTSQVSfG22SvE9VFnhGV4Rvkf5yhfQyHoFv85gL25xLrGhcKzunYEuRMN",
  "key12": "2jFA8vNVMkBk2UYzZYGcxFzMAQbstLX1zkUH58QdR2nEjto1QjLyGMP9PrA9fKokdNbYJt35fbbRHhwYpaPWkq3c",
  "key13": "5wF8MUCWsgmB19AK7oavigNDNorQ4kwbFa2iHBrUbaSjQfKBbUaCgQTX28Ws1ntYNdRK67NSuBfdPChPK5nBm9zC",
  "key14": "MUSq4wCEa281ct4u4auHcE48nQJ6CQbjr6GSSfEQuZPcmqoDyFJSDMc7KpN8qAECJPvKuktJqJW1aLkTCDsjPEG",
  "key15": "5dXUzz1XjEb5C4TKd9j2CUgPoAGMFQucSi1MKcHnM7q5zaiCC3HXfoVKi5rovfQLWsiMeqPoUJmD3foKndpffUmu",
  "key16": "3MH5ffFA5a3p5cFMkcJncM1GGjqVT1pCF5rBB5wKcCL1Uo4WGSBE6VPCkySQRAVUScJpwKVPwgxyFyJBXshqvz71",
  "key17": "4vscJg6DxL1gxGqUujBnJKwoq3i8wUwJyJYaTFy8LGrWEkU95u7o6Ebo5HZvFnDBugmVg6jLvPAdkrEhxf6mKheq",
  "key18": "4YVNvBqoCCPkMoD6JQbYPqRRfYbgsXUSXM9TRsunN9MzqnECzhGyMLpjWG2FVktJdV6ZoZimrUsvjwrHNceDkqwk",
  "key19": "4yfVuqUYvhBUqi2j7pKKBPjCoFHaC9bhn4xnG65m7bSf1nwE32T8p93Vv4p4L7QqgXa7TGGwnVdwG5kdYPHpHLXq",
  "key20": "5zhLKsbrZTYRphpwmZYe55P8PYQYSapo55LkvUKN6K1dyYSjoYkCDfogMBTXenYFbNxp1zNJmWa79oshePJgZm7W",
  "key21": "3ov3XJk5JcW9torf1v6ZVF35g1J7Hyh9BaPETZUjVnnXCsroANrR1WzNEf23YaQ37bJawPqdGmimycqjGtQgC33U",
  "key22": "2HCEFiAAwWxaQkPuGLVg9bhDhvBsR3RCeR8E5Apvk3NcKQxMwBHTPX6sekNBRbp2pYtk6ytR5N7c3QasBMoQUc3r",
  "key23": "4v4UJnnHnUXP293jHhtKDXa4gMDBwr6Erij8yChHxBWMqyrsoCKxbodBpFV3hc71rjwXLbg1x3qbkfy7k8JUpvca",
  "key24": "33kDqBQV29CAe1Yviaibt2FkJEg6e8ZBknqnxdfNCbK7MLjTMDUj3iJvgHNHXr4yAmRTADmwszJhGohxMpMyhPpD",
  "key25": "4Lx4Lf56QkxKmDhiiyRwhHUAYcBUUR9aRDN195gWeLRrRqAn7Tx9VL71gFrPx7mFMPmK4qqErkftvdmj2ScLmDWq",
  "key26": "yczgEAdX7ry7YQnbXw2oXfocpn91kkvGHxnyxRjgLs6KqSMFYxfTxvXwPDXnLohkj1HmmsetDLgDuwKkzZPz5iA",
  "key27": "HMcGUoQ9BFxhiAJajSBfbFhu1WvaqCyYuE1DpYx4Ctg98Cqxx49tM1esBAtWhTd5V1dohkxu3BAfLayVmrDKnVo",
  "key28": "3HUkyFjopfVP3bhaq8VmuTBBQ8mMquZ9fzD1KXcNZ5J34gLvwbJapGkU7JbTfET7fmbzQQavyZMXA9A4sEay9yHV",
  "key29": "6KTPnVQL15ktb4rKsu6K8RYyrgCrexYx5WjAco31MbEEen2V6qkz9ZwypZurZ9JwC2aAdaWbm7y1mqvJztCTvaV",
  "key30": "3HtnHzT12RAvwJS5r6kJ3vr5A95gdNxthcKcTQqLdz7SEFdJhfcedQh4KhKjhqmGWFypeVHqhqMQznkniMZFHE21",
  "key31": "4U1wccE8xoq1HpkcKkTomzCCDf2ULPLuzcBm8N46sapVtCdBRFRTUfYK2P7PBCL1GJC69mj4VnwaNt2wxiCf2ngb",
  "key32": "3QTTB2kEDx1cVG6Ar1taoTHMovoKceqKQoFGF6fYs3tjQQLKW7EjqPqyUaMxLwv6pdFJKQuNnvhd49ysXSH3862X",
  "key33": "5hwSSen4uYkeuH2HW9XtFXgh9kntizop1w6XXQ9NAi9V2aLm1JpNKwwUBZ6GkMg7GLQbRtKHeZLB9aZZrbwJjNod",
  "key34": "4wS4aUrX4cLQ7dZ4TALRqmJfvudGo7a54cnt6HrtbA7p4kVPjEy2wQ1Sbt5eo5wgaZKg9uyarrKCrgxTLtDa5Qjk",
  "key35": "pXyV2xiN2pYZyDJGCAXx26kdgW2pwwy3tNFhqGNDyDYGGcghXbxp8fXhfBNSgkhwfBJVVVdxbPL9npYkSHt5sWJ",
  "key36": "54HnQTXRV9pcyNrwVYVYhrPxhyWFy1oXe2YMBQFr6nCdoW1G5NYxZvGdCBZNZKqViR1uz8p6aL9GyYMJPwqgVa9c",
  "key37": "379XWVfMCWKvnXqKzyVRJUtVStK5burke86jbZMugH6uGykWa2ocdDKfvUVj5BMxLzyaVWwmiX45UMQ38a2nows6",
  "key38": "3MHbu87aMpNjNGSLHJNdATGokY4g7h5AiXJ36frhxSvtX42zXY2Qzy8sGpQ4SNkiQ1R2XTUVC63qpJQzKkPByULL",
  "key39": "28ky6BSFTZKdPjMt6WmBhx9qiuYyv66Y6VYM8RSVxn8gM359n163LWSqdR7NBSG7kBUcdaHRfbEXn5SpfU1428Rw",
  "key40": "2Hrdbom23rJ7b3z1kQXSZuDUymhzRbfA4PzeTQfSB6GncPzxzU86c7ikdqhgQy8VnQ5W5ZZVe7LrZdYnTDakhTDe"
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
