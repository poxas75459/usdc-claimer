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
    "3M8QULqvscF85UxpwE4rbJhshk93ApSmsWaWjS4XVahvx1iTAow5NXXxfN6wRjg8tmF3dcPaNLLX9CeoaU46PoZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jBomCS3QePevVg5WM4aASMHXG9aSKUYSXWoPspC6xNtrhY5e6SqFUpBXVJ1HdujWjo1aEfDCPihfZyYWPhPC5rT",
  "key1": "2vK72n9aSmid3myAxeJ1SLVzV8tui5BtvPA7GRXvbensFhaTkKzNXKuJA2zDpF7W7wYc4y8a1rQhifQ3E62FP3kB",
  "key2": "3R6BPuuJZTSuAtRaqYQ1cTmYRv9YraG3ggXaaqmmVRMeWXwfPFPfDw4FQ8hWSubXDiGC4iRGfN9VYXPrSJjj6DGU",
  "key3": "UJJxeuFDoBj94vjXUcnSAnjsJL7ZMznA8b7VDqvb2zEzUuv5rn6GeAPcPTTBk45RJzFwtyCD94BtxQmzDnL3FnU",
  "key4": "2YjVzKzdAvUotTYc1TEFa7BCpWiyqFbz7mPnJpi9Y3jdppu9rY92JsZJtDnW5aA5WGEV8WiV57tERs1JE8vLWs4x",
  "key5": "5WGiFHwJWvY9SEk7k2SZBgPrrpCJpnzMy4P4kLVnC2hkZX43JrBg7NbYNawJLhbU4zE3eP56xfFErCa4dqDY4VFn",
  "key6": "2X8T81mgHTjJvyebpDY5Pmnz6A7aYzNTu1cFEXCHsAaJzHYLGUxQ5UdAzU1WfkiorUnNKuhdsUDpSAjpxNgMkct1",
  "key7": "5JgL2mQvT2rmeu3YDkzWGBDgQe62YiopvHU6LVd4BxwmaiWA5ofp7pdzjsyeD1qJc1UzVdMHG4f5Qe8YB4Q7JmLA",
  "key8": "3eBxYeUuvQrVjza1F8c7vaSjZS8Pr7t8zVw5rQ5wT6WgVzEhc7hWbq9rkEitCbJiCGSE4VtzfYHRFYxirfQ7xBQ7",
  "key9": "4wTmyqp5EgsUoRSkRFAPQH6zfz2gcbtRePBxyxhYPKK8DwcUkP5VRnguSvUCJTrUnW4qwVS9hBH6pMqirc8y5J9L",
  "key10": "qHBvGRTcLEij3C34oDZfRNv9AqJLkVYNKfvFW3hSp7Mcd8JwXwyBuLnJAKV1Smv3wTPmyigAQjiPbJjNQxNTW1f",
  "key11": "2mfHYZ1eJyXTEbkjwxAn7TChRz1CoiQpLf8DChJ9oWHVYxyD8whAfQoeVxZzNjxnBnFbVFpskiM1ekQXJzkMBkmJ",
  "key12": "2wsoGVFXu3uQTvubwr52KZ5314MaeJZKK1GpXChWuSX92NPEnDnHXrexxFsgQ4b94oJcFG6W9hVVgXAjrin2ods5",
  "key13": "3pVGQUV5kFm5vrMY4Hauq8Mn2nQ9p2gqdYAQpyAXHsAoEmvY9RAhVzFq4qD4mfhYHuMeYzJFvrrurLXH1b6r13v6",
  "key14": "2F66BEFTdXDpvGmBA5QEViB1iy2KuKqVMdCLTxQPfpsaWs5LZW4t9tFEBJmzN56RGodApZAkXq592gXiivrNmcq1",
  "key15": "882xncbHpQfz9QseDDpfvycQ1xDMBCRt3LcdELimZ8JuLiUbh6KtdmoYbuNZNxSbFFJGtenid47YoJBSvjKQtZS",
  "key16": "3GCdYMk9Ko97MHHhtzqEVbkymtKCEDRRa89XdKyDTbcAhYn8rHpKeoHK6oQZXCayzdNMb5BMVeNC7otKBghGhKJk",
  "key17": "YxDRVSqTo5bBTVs7ZB3m7hty7hmcgRvwPtA64QE4nEc1NW5k1KwWP1uAdes5afEaZKTuTE6o8FzsJdAstD5TYSR",
  "key18": "2J8Ccd23gYHVeh2v9XsGUUkdEyuunms8yCbnLJCBDXvZsfoKqhGeZTNPtH7LHEfG5w4ptVGuHCi1yTN8wnLeARgb",
  "key19": "5xFhSscr4Y5XtugyhdhrS8SALnB1gB2Vus1iARNJcQJLneJyjU2REAk7hd8hom4eK3aeUGsWr32KKvR3AnQYqNU6",
  "key20": "4WyizuLR4jrNLUEFme4JNhECH6h8zEDc9qiQ8gqEyrxq3nMfqXS8UuJPaQ8kUz38Ck5WyJSBPR7wUe3au5kqsyhx",
  "key21": "316aGqJmK66EBnGwRC9RxMnjQgMxWUBzsNiqgfxPBQU4DUH39Xt4exUQQBarsAj4P83z9ZU3ZYMCTy1kNQF377dj",
  "key22": "5vVjT87WysWSxwi3EhMsDcDWxu1BLJoZeipSKnSeFbtcY63XWuYVmQsKqaYHkub5R4k1NWEVThJwmFGnaNwjGhF6",
  "key23": "89iFyvQt4NrJXdLsEpDnHYurnHDgTsjFBZUnDDbVby5TXCCetmdUuizrbg8J9MwN7BZoD5d9TJiqhm72MTjM8EW",
  "key24": "42WKv5YWfJ4hCZv4PH5CnKuai3o7sKsJVfDRnfCsfJPsoCVFxnX88qc8hCt9ntuBSWd7iGnGqsf3jvYU6WcBmQag"
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
