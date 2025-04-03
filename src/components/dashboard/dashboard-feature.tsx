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
    "2KHVTEEHQWeoPfZv8J1rxGUYRiN4wS72LVXDFzHfsCtXk3r8U5eguQQ8kwMFutzHaDr2YpSzqAnMQbu33u4MMzTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m1zBbeE6yF3qvxPzxqhtpxve4Cfn1MuAbmXfk72AZGi1NCpQk2Qwg66nRoLQrKUQoU4DJd7LttghFvrHAA7ASG4",
  "key1": "zagJNnwYQPNZ8c83J52v4qW5kPJ3Dg82tzdG1yBTGr4peWEx4xDKH1nS4A6jda4CNZ2YpWK9Le7YUjaUYCqFX7G",
  "key2": "481ZYSSwYMeLsH3fag6f4rYeYhNwJcea12GaCScJRtc9GQ65uTwXWF476N8nC8mc9w1jB4gRniFagHCR8cTey5oH",
  "key3": "3kS8UnppF1h64jc2TyNE37cnpa82PPqTLY8E66r41i5YVfofG3c5cYzkN2UGWbkrtNpiSBJwRTBYr3TMpaYLft6W",
  "key4": "4XzM2BBgSGvcFe3veCUxCpGJ1HoFRHzukcuJvGprNC29WZELJv22YWpw4zAjApZ3rLXpGcAP8YADis1ovwnXdqy2",
  "key5": "3gu3sPxERQJLaWDi4eJYaBKbQnzd3Kk7sQJoYBPkQMo8LUFzuQxqQEjjXT4JcYM1PxjyhiD3W2MTMWsa5JoSmxQB",
  "key6": "4e3yFpWDmjzBykHXZW7xKUTTzbEb2wHLv23kNCMwz9eGmvkZC9p3gDZpB42kdC7t7F1YLD1mqRVGm7y8XHgWStgY",
  "key7": "31HBXpknySy8i2PHRzHDN7GDiGJso9kgZ3EibgW3js2nN2fE4Dwux1YevnQCz8wXh4fdo69sRK31fzWzVW9Rzvnh",
  "key8": "3VF7bByUmeqsNW5wtfKf7Pj8dSQVT4fV56t1eGSeowZXR6FfGinn6WFw9Co4KVhNQq8ZdawMSrS9CqFXM7GVAf7N",
  "key9": "499Z89HHb4Dq5aZGqPC8LCcFxoXrNZtTQmNHs2sMsK6zJjxK4obYj36hxV8yGktCCED1ZtF4jxgKifGTGrvLxeqq",
  "key10": "2UYuBTPXT21pq7kpD7nB8sg8BR8GKgAdVeqpnFfkBgp2fUgHAXcp5eduLqTe18wCWs1aF1XP9ZL48rRafr9n6xrL",
  "key11": "3KRGGPK6iNNKp9rBTq3q8jqZniazB5FZ1QodDQbqHKMJXVPSgYM2UZq6LbDTqCBf5b76fJvYwTs9RbYTcDERAb1P",
  "key12": "2LwcRyx2kAdziQiY8qHUUhozypymKmgpuH9SLPQcPRELKyKCk4ZQN3KCBmbE4rKZSGb3E8F83NoALVBJbxv1XSmW",
  "key13": "9PLZWnPBTYrmDTMvbHtJ8rECx6zJFkhArJ5dtWt5wQoAahjZJ83GKiH9VSMGS5BfhUXzWHuyVfPJfdgFjBAccok",
  "key14": "2qR2wEr1Q55PVRb1p8poP4ddMPNbp3g1mmk4T5osbJLEi3dyvLFFXZugnTtp5PYk3ywyYFuv5PobMXoPfuHKbh87",
  "key15": "2Pe1xsmBgq2bfeEmnGeuePjhuHguhyHvLbYvWQE53UN8GdkeDnZ3AtLMvSob7mFhzSZ6Asnwt1PXeG3Xbnm6EiYJ",
  "key16": "5JcLmc2gYt9EsjHf3sAu1CMvCy31wwyAmTpZx6TnxdVmw2YsDTyMtYLcvNBQkaqgpPtJLkPTxYVQpq7LcRN1XxDv",
  "key17": "5WVMmor3hfjKx95AeDDfVeXS115Y2aw6Sg6yVtqymhuphxfqS72BuQYu156vbd4S4Lbit6PkvvxtkPoLVhHqECwj",
  "key18": "4xsdNZ9JceYbLKfd1dT83VJC2BQSBXDjdhimgP4hvKCgVji26Qu3R2soUDAJ2kH7MYQEGywZYDQTQy6uD5mZjC8W",
  "key19": "4U4ixELV77k9T5qZHZJUsgWTgSYDyi42YzUEnYgBjjfVFUw1XumVuJCB3udDuHgzZrNqWbepVndNcaYx2kQny6Ey",
  "key20": "3YjKmWn1HhYfwfAKdTP3ukunRH9K7Ngoye5djauxgs11CGy9G4bZQiyqNeQ78URyMexMZHF3BiADdordfdA8qeuy",
  "key21": "26rVJ6814zAWXhRLoToVVHhSC8e8ig8V2hqdS1KAAYnHsuZM1aAV7vH2bgDqj2sfb6SUtff7u4Hajk4VVroSkNTR",
  "key22": "3LFHbiNQm8GEUSB91YDL2226tespqGfSn3HFTweTvXP275oK26PJCMS55X6pQMk2tfteJXBJyjyGoMF2LNjtt6qH",
  "key23": "4Mxiof8iA8sbmyDeE5izUpzvRZ5AmNutSeYhmQ3KwCaTo1DGZpMFkLaCFagmN8eUFb6uXMWoVcMsjMocAZWMMTk6",
  "key24": "2FvMx2iAr58rXdS1KcLXUtAYP1mHgfeHyQ5nr71gWvCsDW89MSYa8G9HfjNSk2wvs1okadofkCXmbJX7wcnjC2X9",
  "key25": "3sttDhA3hFXrZpDy5VA9362t658RNEtosJLzfCPtzeaNwVfM8iappBpVyWegL1Vc7Cej6wEzDgWM6YZr2Boo58qy",
  "key26": "38LbK27c7SDPvuQmb21AgB2woJGGaYgi7xkR1Q65yG5JMVQFuBQnGdvuvTNJ44DYEGR7AwgzsyLF6ocM51kDjiWR",
  "key27": "2hJpcf7GFaRVVCCGvnXNGATAtBWAcYmTzgZu2dMbdx2Pdd1rZiQEnNuxo62GTNVhBLBUYFyLpr5hzofxVWVR4aDF",
  "key28": "34sWne5jwT3HktS7ir88HZEtmwm49P87ieoXcHkeLr2TL2xeMZUYeoRAQJ61QLzwPtxLX9by6KSxd2WJWwKUqFNU",
  "key29": "3Jdhy1KBKyuzNMrUhui9vxA7c4vVXzVKMa6ivhRQbJ3K1SpcvFMZFvnMjAi4SDHyriuXbHyYDSFRbs5FuwYLmxrB",
  "key30": "5RL4asXDiTVZMW1g8FXHuBy5eipf2DGaKBK5fNotnMCdZe3apSPfjxa6V1s7YiiTqhoWYHZM4iSt6krWwqC36899",
  "key31": "59cZHwAZx4ECXLsqCx5RSrnKEVG7SH9W8GKaA5V4S8nVJGGU5t1TwSCAKMjkUT8EMo6ceJR3XwdrHVuxFsz23pCU",
  "key32": "arZ89Fc5nyPYNEfunVqmFJzEtXMw2yPBCgQ6k394zMknurTHs1mBPXHfarYkJsPfd7zfXzY2Z5WQqVL3RjseDiQ",
  "key33": "3gGxKYQFqm4YLEk7BbCKmz5772R22kMSGdXz3ixR15Hks4XYYKDdd4UevT4yNkupyhATiKMWoLdneNA5Wo94Tnru",
  "key34": "44d33ffPFcjAgcxrHBVovnD2CKAusG48ASZVAPujaJ2kJHKv7hsBkzrqKEL5BFKW4eXCjQJnc59Bue9rs4v54w8Y",
  "key35": "3uk4quanhFq39FzhV6d21dHWZ8fyuYMsfpeetRp661n7p9LLjrGAboqoyvdKEbkGsbvYBwf7hF4GZXTnSSw9ryz",
  "key36": "ZYpLc4h6Eu3ddWdnLBHgLyhQP34B6uRZ8X5WLCuxXbMqZTtMA8BSibWjDpL4mc4Pij3vAsy9BFXGS1uZTw1H4hs",
  "key37": "6yfaBPqtygAZCdAtqXrqtehJ4i1wVjaL579wk6eRvXuwUUxatSS76eK85ecEFVb1LWYR8nig3RfyYd5ep3WTtGt",
  "key38": "3EvYhtPHhdxqEMSnEFfV4D5cWZ6GscgHfCr2xt7Nih281cUzmaAmqEr6GoQ1AYUT3yEtEDyKqNN7XCYY7Lm5i5ER",
  "key39": "2huJBYmgb1HXW7ToTA39SyeHa5ydRWgUKpUivKEm9JFr7KexEnj5npkc1FN71z3PMny49Zjk7jVzTyBDayuvzmJj",
  "key40": "5LuHYgfCa6xbJ9Am3uDkkrb1DXczZkTJt3cdPjtjFixk3FzteiznXuK7fz8uNjnERAUaCe6nijC6XhtBLA8Td3LB",
  "key41": "ZmTN1mpT6W3ZYuFJnyDGTbA6mbEmV9cbF5rLyxXaN5MCu2m17oQdDqgTcNJ4hXrnpYTWjUtjBrPVfrWXtZ1Ea3k",
  "key42": "2UyJk6xSYhgEbTWr9Cyp3CC3SaRpERUQNcSzWjVbyVpCuvsmPgxbZW57BUEKquQgEMnyNboiomsr7A5S5dpKPkuN",
  "key43": "2bgFxoHsYCJamf1eY8uZdYybXpzcXMZFGnHxwrGmm875dBZ6vKTLRFmQ9gDUgcQm74gJ5ZQ5UeKVXWqXb5XqAFJH",
  "key44": "5YJDsLeLzVrFqG3yq5B1Vjw3EjMdHjwzqUaSHMYhEVMmpsZvyE4mVJDdsDWmWpbyfCFHgMRLEyhzyJVufXPt3CrL"
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
