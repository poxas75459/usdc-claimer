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
    "3bsGsBznzFVjqPGXjnRkz69AFkHqRFgDahgf1bhnLXphoYGdNRREzrgCBNhN7KjR2mG3xYYe8RweYpKox3Thk7FU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xLRsjqgkFzHdDDmMmVSMXhCxW54XQidaokuhmtKbWTKxnYifBbFRLrb9gzS8Q1cehNUkyxs3c6THmgs5HLcBevX",
  "key1": "4mw51A82xnvjmvFcD6fcAQNXyZuPoxzqnt2zzxJp6aq2bBoqJpJ6e42iqUoYrhwzEbDrRdW6djE4YF9iLGNg1Mjq",
  "key2": "4nysEiTyQuSUwufkLzWpPWX59hUAbkKVNJrfubpPE3EkVRJ2rMt3nLp3HRk413oSQ942heMomUDuWKFq4ymZsMN9",
  "key3": "YmLrwWUEXexwuPyWukVANdEGtRnk8NgfX61UGsKdxSsow1AiyxgAVx7oRkzXXSNxBqsAER9th1DM5JBw9vdxhra",
  "key4": "bCxBGZUF2UggJT3ocFVdxSXJC9L2rANnyTZNu2njbogPXtp8fRW6LtSxbCKXTsJgiBPWXMqCfiuh1jPsvaeVVRk",
  "key5": "3jV3H4cGmjFCuhE7Ah4LWYv15i2iLkqs95tEywtWukWqEBrLw2WBhjGfLKVLVjmrkfLCMFKti5JLtZQPLYyrj8ru",
  "key6": "4hV7WbHLfx8EVMm4LGpDm1ZzLQm8JZUHY2VsubhmESyiQLikrWxx8FAyEQ3qe1xtoSQaRAr8U7eYpDeZMbVWq83p",
  "key7": "3eXMoQuVupLhafbyoD2FJjYt6qFMcSdX89CqrDKW6eRMWUvHP46f5MDcMvsSLqvyr27XzHmt5KcgrxT6Tm6yY7aU",
  "key8": "5QiB8j7TkXTGHBLuXUsCx17fiH5UR9dFzhuThJ2k3eCvFc79EqB3wgfBxAN8YpMH4WREzCqxEodrofbsr3pvZKYv",
  "key9": "2m4sVQFTJgRSxLExtAa5VRar2j5vp1L1yof18cs2cnb6b5NrUfSjHxpXXJFYSDn9FmdkVjWPorx1yVBFoBNcuhec",
  "key10": "2DUMfBznhVAhh6rYwqo6A51VEmovSop9GRmPnSZ4FrmseFMkTQgQnP9eCPS65Q3TAYkWexTrrRGNECXtNnUgedv9",
  "key11": "21a1woHo6kJCBPCgULzUTkfumgcwKxf92MTncfoqcphD1bLtiTE4kDsR7Evi8kNutyMbkS3BaXPnTehQtJskoBcu",
  "key12": "2qyyNYKZgGHHyjW6mz3g2jM7E1Deuf1FpGQWkUiJWrXG5wcZQAMkDSRmGaGrQrWGYGeaKtwXxc6m3Tp7egHMbng9",
  "key13": "5tdbtB7o8PTercbFpPngf5EuhytzstBcNrQiiXnBW9sXpJ3FF4pciwtLmeP8anPpmnmcruyQ8GPEDPxudgHiKpXC",
  "key14": "5vUk49EmxSoVKGdS6cmqbw43uJg3mnkEefYC9wQDjskDQdgGppntFc7oAxMJvrun7ofWFWaNievbdZWuWsVgJ7Hz",
  "key15": "556rXPCK7DshMzatwSe74sZwkP2vSgSBw1TmYNtnusvDe5zuFvHAS7o4phUSB9PMK96o7Pd29jjyAAt3yrm5M8Qb",
  "key16": "4VbLkPD7vShwg9YNR8PA8ZCwAgqsBb6ZoBSQdeax1KEbdvtWMMKeQiK4oXRn8m2oDRWrEd8BuiqdvZFevALWGA8K",
  "key17": "5Co8XTAHCPUb1pFV4gM74XYMSQBArKRSg3UEurDy3M48JfYFtrkPm1svVSZ27iTbd2tBfwikVFCujM6mzS8T3HBp",
  "key18": "2tGJdBZ5E3GJb5Z3zjpBvaSuAmufBmBHfrGoGXXChVRQ5ZrDtbPYWtAQA4WDyYbWbraasncEFscMtPfLtT3xLzNw",
  "key19": "547mNmkkNwdRGaWVPy3xX75vffKVHVrFFVsgpnNcfANE7QctuRi4mumoJDFjyS6X5WxPsDEC4FLid94mpAAuBFi3",
  "key20": "4mApbzjdo8ZPRfFmt8zNwWtKsZsTntRE1QJ4HK3m2Wo9Wv6o2YteYQaZHjQdc7zvgR98f8WdoTqLXFWFgcbGUX6x",
  "key21": "4gWY217VXVG5e58iCZcAFyCSj5jcpV5goaHkynEAqnuRL3VoZ3LzHmyzaMhYpmuYaCS5WjyU4xFoqyndGq47Cdmf",
  "key22": "2JQHfVbBdR1PMnFohgL4oF8D3TR1aZc7EMRwYSn7P7pzvXinM3L2HwvbGTrUjhoA8xhvBeaAyjpPGLRJXXMdgBhy",
  "key23": "2ET113keimtMjfXXzN7mWggTyXRivaDeP924q7JRkNMKv2HJer7xcEYgKt1pT5eefUjgmikh7iKVea6zx12in4Yn",
  "key24": "4KM21yB4mBCMUSPA5wiNRmgV13YjY54sMDMhzBigruno4Dyj91PbwfRWq66TrgS34zeMffspaWRediJKYvSLmmjs",
  "key25": "5eGngsVJAR62yeEBaPoGwARq84GjVoUbg2e7FKdRLJDThwjkywFF39EB8iCsyredFFq16utyYoujSgBiGneN1Dmg",
  "key26": "56zHjFrLCh1jPDNZP1BViUie8D2RDNN3zLtXAStxj3xJoaB7YCngsyrpVQXKx28mhXt3BVc1eDitQcMzw4YqY56f",
  "key27": "3EWtC5Ba6Jp58XoscA2Hjtkg3Uys3CXax4Jp8ukUCibtHXVN8HtgijHvWtMMAZndwCXPpV81wScpthPsh4woBPwR",
  "key28": "3keUoqGAPbNbcArgEAhP6E4ijbtHeqgkwz7HBKg1wUYM4mKQNokzbm6FD7MgdYHMGik7kYD8AHAmgvU4U8camMpB",
  "key29": "5JMyjGk1dT34LU35QeYnMGeGutXgCfAsDNtuNHDhNKPiAu3u4fnxfxdbaEsFq1myaUcRymdP2kfc3bkM9U6ALc3s",
  "key30": "2ReMgHJXSx6EyLSg3R2gK6JiqgZsaZ4bhn1nfKfa3qujpLPtSJ7dQgR5ppiUsGjBSbihyfrEExajHE9k8tVtg727",
  "key31": "2UWctGfQbNLRBK5EyrhNg6xjWt9Pg2Td2d1cjQES3RYeNTqAECMMvNuwKkmmFaB9vi9Ei8hCrbLc1p6vHdo81JX",
  "key32": "28t22kn2UNZ3GSNDddnJUH7mSqT9yDkvSZM2x7WxuJpr1UxC8NeFn5MAGpnRtqdD9BfjQ7uZEZRFKG4G35LfcqK5",
  "key33": "3jNiWwsKvzCYJSyxQDcKVuY3yveG9TbXXP4UDcVbiKbSyeLAuhCGUk3kZG35MuzFN9XwQwsSyWvKpoWUxxzzL9zj",
  "key34": "27hw9sZcJsRpo8WJsg4rpv4irdEcZgbTmAuWL83q1GgBY5RDZHRizB8AN8t3eWfGMFo3v7fL9p9x1XChxDtzPTii",
  "key35": "iGrLCfPqTLrvHWmwaUkFtau1kfFXGNxmSJMNp2gyGDSvHf6oQUYw95BrqsSXeU5sz4a57PnWqLuPD1sj2ZQPWzN",
  "key36": "4ryJH7KW2Qy5cfwdktJWXdbRBzc2HVewffMBtUgMQMCjs4V2GJDVXAAqeH2EmGA3rG5k1xRYQxwosZL12SnpZBNe",
  "key37": "4T2tD4ybdgwgEwX7m8nNpmr6dwGjABJRNYaSgmYVZFZ82ALhUesbcr3toL52vkvy4LwxFNSmf9kZmt85BYbSkZvR",
  "key38": "FWzxPhNTeGvKUYqgGmHyvjwW7hAieFF2J7XAmG29GVN1Yiq7LqMLxiQZiETLECkLj3MucUhZ6o6XvS6yRcXr5AL",
  "key39": "RhvWFdaotXboyZMSk1E9YxfwULdhh5v1C7YMy5y7rYBrdoQm7TidLcjCQ37obxSGkcNFFvYwnaRtLkF1z9ckTcM",
  "key40": "58CbB3C2WTo89yMSX7fayymRUWCM5xBUgH18jDJkEgRayjdtNpEKZv8h7mn3LMHREfymcja6Eyd6jxqJ6GbxJRFM",
  "key41": "2AL45QuZHqwkct9ag8hXubNyf41Gc9nEzYpjCQZ7VXxrxHR4gBMPg6vpN5GmL2mthrbXvCsYtp9eQQWoVRDWL7ED",
  "key42": "9f5YKJQXvG3rdMKEQxBYhuGgeiRSnRG5AHt7EViMRq3MK7Dtv2tzAbVvhbVv2d6QTJZ5Ck9gVQDERc43vqEPj9j",
  "key43": "2A6Vrtxpo5GfCpg4ZVWVSgn6BhnieYNmChiyG5CmnJCLnjbZ2PXuevFm9ydZ2nvYY8tyHsXrQwGtdVX3CjtZ4Qzr",
  "key44": "2NoQxp7k97oaCo5vBkjEA3W5MoP8is5xufBxTbhdha9ipRqkeG1n6TBJAP4LiVbhHvYcS8z4CkLSwUQKujP5hrf4"
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
