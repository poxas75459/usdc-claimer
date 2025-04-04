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
    "Uy6rQC7wuAJeYxx3AzXkwU8pNYBoCBH8qV3GcqkSpgW31UcXJhGHTeDg6buEnt2sYN8tQxnueet9B2yDPR6Kfk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "391dvnvTyBstx6jYgKpuRGTNHkaoFokHwy3kaxuLPWwtPaJUMqtMMn34bMZmKhZNeuvjnuxZDoCJJaRyccGeGSfL",
  "key1": "4CJn6BAPLB7bEhUYsYUmJ9qNvwoHpHBjAUE46xDFQqpUcwPttE8ZA3fT35N5QVZ8bAvBagDDvGGoxwE1aGh4Fqs3",
  "key2": "5VKNjHzXPtEmWBnkC6PwEHa9UGnxFH7srHNZz8x6kenWgfEXYk7fLxybV16Sf6a9Td5zaKr6uzEtgxKoAUgJx1bK",
  "key3": "Yqz7P2WbdewEy8P4FUR7Tbm5LsbWZzSk3R2MeocRBv1FXxrpytV3iXc26RcCQkC6uCkJyKfkUcTUfdqg7GB4pLx",
  "key4": "jQ78o6uK2b9wU3HWyXjmk8ARatmm4fpsFT89oHxHhYjnYeCD4GxNjbGRmcAJ3o6PhxyaAAU8A3zC5v5EtE7EpRw",
  "key5": "unt4tqLYSQEoq7AXg5gyDMoAwsPeKuHRzftrMan4buUg1JBteEW7tsgK2xCXJYHePuH75GSFYm6NYsWsCwSPjiM",
  "key6": "63iw1tEdZjoAnvfd9toDZ6zVb8ubcqWeBE6yU5T6GSyLek5SVXnMNYmYxpZybhva5gtfsJteRtBrsnixmRxiiY8g",
  "key7": "2nne3kdtGhznwkcZRZNKRBiCGjTPN1dpYfT6GQQV3FeMnTDuGKS9ERNb18qsBTTvqo44LJCeuXN1sBLSNd76FAx9",
  "key8": "2S8WG5quXqpg6w21icJkxfb1wmhXTEy3zAmLE3SYcShrrt37aTHYH51oxAHqaGqxd2v7qJBHaN9sH2xYodUB3Y8s",
  "key9": "4C5eFmAuuL9B46BX3HaUsgLYoA485kjjr789mXBCSA2NZ1UX7go24brBddEJr9e13RbgjkPEtSJ5329NRci2CTQi",
  "key10": "5kHsc74bbRJHQac8oPDjWV5S3y4vE1sFw36V6cdk9WjoXTasx6WcbvW6cZbfQFUeAjSQFUD6w7N3x6rx8XTUyfLK",
  "key11": "4owZhP46iCW4g8Zx6YWXkixZiDx7kZMdB5k5pXDB1uNo68Nr2nFMZuRkQwP8SrFLDtQtk26UnDVRPXQykxASEDkg",
  "key12": "bqmZBKBt3aHUzw6LGqMZzL5m6Ttfyj6bRD3x3n31LD7aAVAxYe45vNgxBKA3S9RBBoAMwzn8BvohcjXnKURFJek",
  "key13": "3ZgErLXTMsafvJ5DqJdDiwMN8z9Fy1yvnGherY2nZswiLMNQWPZSo8mj6ka5h2KLX27bTJe5X2hnSTkfrqk89mm9",
  "key14": "3M9TcnsWPWKycP64bzmRspG1833QuPjAEori81fyTM8SADrhFwRjpg5Rh9JGFnMtPdMyACTsKbZJAN3gu8hxhKC9",
  "key15": "2qBpvfJgs13LDckrfSgFHFt3f9cxhtxd941wSg8cQWETcJXW3gbPLX6K9CueRvDNxTDm4CAed9te3Qg7EDjZ3MUM",
  "key16": "2Vurux488h6aRfzEQhTqZVYM5KHHjyc56ZgvKZ2dRFSq2bjAhiASw4AJ2k1ANJj4CakoHWrHT4dm9nui6VasrHoP",
  "key17": "2bPqRnfuFf8zL7mDRzZRvwgqj7rq3CmP6KnQsaMS4dnmKLfYdB4rahL6LgicrSu4S1LTaACqgsfTHbhzeYBgFvNw",
  "key18": "TXqcTVZYmz2TRRE5GS6UpeaqwF3ZRAKhAzN9YnTPyxrmuSanuKU4oAdKx5kojXPw6JAHJk4zf7PZMhGkhBfTgyF",
  "key19": "3wwykASLQHDiMJcpmvyjJ2CQVeaSQU7MHyN4PU3DkBjt3LcVov76nYZEnTvVYqcRYY5JuiMqrUJ8pda2UPjzk14T",
  "key20": "A2Zvya7Q6uDwCGAw5eC89j5NPd8EtRFj95S6bQLu9b3XnkKfd8B2wSB9C3KaAm7ELRtafXXQ17XmmdprN6EfcVH",
  "key21": "5ZhZkkjBbuJte5GrCKv79RtaCKXbSLH3JrwCVi9m8ocwsuaTX22DZFgpRqWftFQU94sQP3whZPa2FpwvfSgCFhz6",
  "key22": "4rnPQ8rYAqqpgNRhxwjCGnYc4P5JpmNDJeTwBkHnFqHj5nAWybbijq87yqiEyGH5x447yTBmzbz8phDxY8y89bSM",
  "key23": "2C9ccQg6ehNQx4GJ3dEDcSbCPHzUjCGKvWfyagZHE5sPeJ8gY2KMvXNmkL8ZfxCE7JxQLHKYecQ1VJDbdEGbxjpU",
  "key24": "4NvSQPLmoZs187XfUjrVHQ1y1w2V2a7VjaEyReriyyRHLk47vVUxuB6vQ89bF14CajwvJZpSjQDhXREw1pizfRzd",
  "key25": "Lfa6hcvGvLUQbAdo24MWQGbUZMskNVaoZqJ92GsXwQuSLgNEZgYe73XWYBhRmDoEdqAhd3FrFEeT2HVhkf7hRNS",
  "key26": "bKf1N4ZAne3TYooXXbZN8YBSrP8KyuvsKRrC7cDqfP7oro2trghxwNaNytzBou7NLVFoVSQrYPgL79X8C6SFacW",
  "key27": "4XEPHrFmv55NrHCdYeW1XXYyYuREydgnQsD8uGCpmhKTxgs8Tz6t5SKRgnGFHJE7nUFqZh8cZzQ9RtJJbWY95K9v",
  "key28": "56uwABBLJHkY9VzktXCRHNUVLhjuBXBAeSnfaq6atNGwPRZMQURB7RF2iBCRfTRX7dkwL4Tpd1Gfxz15XCgDdT51",
  "key29": "295W6RCmxwzfAgasu4SzFUU49bCARkNwVGh17RU6hV6tMYnz7SK9UkQoZ1gfvhueFirc4z1wMAc8oLecujHzffkJ",
  "key30": "531euStVwTQxcetPCQbXCp6jGqAduu5PK7h1JS2Nn9YbCuHyXU4r5MBuQ7pGrRox4oZd4pNNoxd5ptHogKHZeooq",
  "key31": "3qE6pt52htbjpSu1JaXnSQr93jgYuaFwUqhTMgWf43R5KpEvAgopKFsid91j3hi1D7dXR4ViPh6WU2rVu9hoaaSN"
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
