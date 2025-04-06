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
    "5oGx941FctH6kyUd6DYRqeE6z4BGbZq739kTbyvJRv5V3wUwwxRC85uPcieFG1RR7my7tNgsYLt5Pu9mb9yivKMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wB2QGq52YaDsk1qQdyNVbCqqQYz1jZF6D3KZVmyDBNnJR5FhHAr62rhCcETLFU3LgCWwDbVbeHnWc3JWnGNuVrE",
  "key1": "3NqSGecZf92saSGHBgrDLZ2eGVgNKbWuMdVgaiuK2n9YFgxdbLKZCy64Sw4JBybR9SEBqMHiPrbfRDzW27MwUcdH",
  "key2": "22AJDnorHeC91H7gNKSeWKWgJ9Ynvs1jSgvZgqF7znWWYoSotdbVuEexttSD6qbcSZS1WisB6ztaMuoB2M9ZhPNr",
  "key3": "3UVR9yC2n7TuX7YzV7C3Cq2McSBTYrJEu1oEDEa4E7ytQNHaiWYw5NfsnM6EnHxewdZHWV3NJDb1P8EGvfvbPjgu",
  "key4": "3zCnKA2NQdLNRoFbmFPxA5DFupu9438GgXBs3czirZdjE51kTFc8uWpBaJnPKe3marjW8FwJw1i5iF62KUmaVZVK",
  "key5": "2dgHtBN23dTvDkDTL7AbVKaj3JW6hqxWLvoYLcyE6LUxk52NZnymKtZQjcdgeW1pABPjgFdHMKzeD1aDAJ7E5CKF",
  "key6": "5yGCtU56f5vdvsnAGwKnm5LgHLgzzpou62qvJ7T1hY9JRYS99xMn3yRvr5V2vmP7eAnS5bDvnicgSq4DRVxKvbjj",
  "key7": "EHSLupgWN2LfAdPU8FvWcof2pas7YfNQSgtYmVZt6YSF7wRP9Xevg6NBhoLdiZdsdWS8NGqvLCNs9yME49xAZTH",
  "key8": "61hcQffFcGry3bAqAJPpB6D8J7F4nyVEtwQ4cBXD77f4bgs9SkUnVVdFRArD9c2KHxh5SYfG6FsfMFJJwkyg1LeY",
  "key9": "xvreHNL6mdyennZusXJWttb5KNrRq1UeWCQfzEpbVwJnSg8XnY76RfwrFajtHZcXEACyEBKLhuJafQ3TVNMBasb",
  "key10": "5CuCMoRbPbVTpEfysQhvUypGeubQtbnhko81JBmg2mKirxpxTx3ATu6ngJ7tdxySwcrnQQjV5H5DAebHX6m9EX3e",
  "key11": "3FwansA2NvrHTzZ1ZsbqGHCaCrPmUDRKxCV2NKCtq7wzdgd4DxSgj4pkcumgqkC7s4mqqNvZBiWq1uajhVauRGUm",
  "key12": "2gt5TBwyazxwueyHAofms7FpTZwW7ZjuDuAqNCnqoHTNKmWCv8YgkvKvPf7oVrtXaseRNoX7xyqnG92GbRe7XXTX",
  "key13": "4bpzQftwMFn3gNpu7BdiPTd6iziPPLPwi8hEqrbT89RnwJTXwpkY18gEJ8WYvrvkC9jU33ZXXKSZCYud4QeC3FBi",
  "key14": "5xujhxa5CmyYtFaWBuNqW5a4Ge7YVXtVbtDedNTfmghnStjMYjvZeeeaezffz7KQKEWciwd2gSRqWoddU97HrGp9",
  "key15": "5HK8YBsA5QHn1GgqTC48wk4FjFTdrmaAVnEC3etA1cTMzXLZH6qvk93rbpWQZPJYxdwS2ZNK5ofed4Ry3udvstrU",
  "key16": "25ghGJru64w2Y9S1UT26om9pcMrmQfqymJUGWckE2hRx5kxyfcr5efSH2sk5EuxdJiB7HYp61hvoDVkDHs21jxcR",
  "key17": "3azHMDYuRKCskb1tSpSCJgpffCAF5g2NSTH3EuXfM8mUTz78JFaNdtbQTESzzvxziPcTGEsNQFkTpcLAboAtDrHG",
  "key18": "hUPrV3HWoY24MKWcwu7eJMZup7KHR6nUN13VuH4F5dauWdBfVHT9zt6xcCvD3NbAimdn7u1ie6ca4e9d78ZFzMv",
  "key19": "Ht4iu6FJLtvL4sjrL278Z2yHNAaNAo4XnvV1ZqgU8vwHW37yMSMQxqpUTwJqyneKmGZmEoJmj7a1ZgpAjY4bZpJ",
  "key20": "3AxQHwuKsYZxJTynCmB6Ksns9iwTL1LbJdBWGcZEmG1nSsewR4SsbGzDpkPaS7VY1UNVPsh1BvZoFrSyV5PBk1UJ",
  "key21": "24yFJ9koee3o6BD6u1Do4Gbz2N2o7NN9wLir18Xs7QwvfoGnEN7wR5TeSSHu3c3xocYV9FQ2DdfrbjJArBjJ6iWQ",
  "key22": "3FLdGKZmcE8gazGeKMwcdtNagMkMiTCroTENtzCUQDqZ7YoYqwWUx7oGHJUuM484RqyLuTXNnLxJ23rpLWgurTq4",
  "key23": "5BntHzpiAgg7PyZ7xm9AxRJMs8bT9YYhJvXbsHKzTLkYJ4z7Q9az53kJ3RGowYXbgvcerhXpea5HjQ7APD3ry9A1",
  "key24": "5Tf2AV5jrN4QfLPxuM5FB8DD5hAApRU6pZ6ry1oJiVqgTdmRsnvW4pciEzP8jdiHPRbhZpVFcAasHZzV31jfsYnj",
  "key25": "3RssS7Rd12k2i1c726gAUMLYA9abvEqjrrcA6uxUa2GUubGbWexz4iWGhmSk2SWoA1gWVKXAAz5RQmiC5hRwFgA6",
  "key26": "3r29EA57haV5BnWDAB7vB9zmvAUrUPNVmMFnz7zexWyKubkQMUmyLeUK4HtTB9rS2mu8KU7dgd6YHGBQWusRqTaq",
  "key27": "3DjRVzz7tK2s83UmmtvqWfJaS5q1dMEMoSJhygMLPbpPWTT9XT1JMLDBNknCqCikLWzvpXcowDqzt5Sfyphds7Vs",
  "key28": "2MzHzNVf8uMjB6TmonFByWDmadrYXyc6y67zWGho3sLYRnbQCFaAkyduHRdXL2nBHQWMrRKSDqx81ndJZ4GF2aX7",
  "key29": "aJHALsF7smJ7APoYLsosb2NrWp7SPtLSEHgAS6kpKFBfVtbA9S563hrqosgBajLPp31hkmPUrBmqHNGUTEbRKzU",
  "key30": "4mFUYhy4rYYE62JqAFxfbn9oZ2bQ4fLf2mtvvdLshu9PKrmJcEUioFXuTctthrnVWqRsZdbLge9rv6nWbH3KJKed"
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
