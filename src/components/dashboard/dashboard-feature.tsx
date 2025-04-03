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
    "4mYD65ENcJcdU1BcJ3DjpTqLdgAoSJ2bzYu1CGNoTxbTxbDCyYMJWhuKy6oy3RP5q8CZMkP9BxSbivDnx33K31FY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rxFJFZvsasjb3UV4nWTS7Dg6bT4ssmvWsXFVmwc89CTXSp2B6GrXMUmuEZLH9DtUrbTw5qo8hS9TvX2jcjvnTxv",
  "key1": "3RfdQ3ry2oPwySHb68QXUHmCGZswtojMJmQhdE5BLqKHJqnEXVANochbtfHc9bm1utvJ7CtJgsAcRhun22wsbsRA",
  "key2": "32Zqjc378tdVBUakMFP3PtFF1bZbibNbTrxBoBXgG4Hp95E1Y7DEpyDcgmsxTdg1TGdyMsrpLPHs2uRmFZC7gNwv",
  "key3": "5BpLQSHFogCCm6G4s1GBD1YZTwbc9w46ARUe4ygtSg51sA5RkEYm8Qy56isL2ZKNLuDSVqyZ15pcsDXDULA9rKhQ",
  "key4": "5QGBSBKDHBtzusQDCu9A7FPZHnf8ru2jqzP4qoquxcAkvXjwkcsxSLHeGfR2amoaDVt6bXjoP79uqJAn1o4KQxBo",
  "key5": "36WgM8dJTpEs9FPSxwJV5eKx1HkN9fMYuboA7zJKFBCv9B9enCuDgVzJSMoU9BdTj8PFZ9kfaFGPkEUJr5VwLVhB",
  "key6": "CuwseUkLt4cxaFZfoiQqtEAbCswqfBgNva84a7r7iSPNaBXURinRYJ2XqupyDkQiKxbriXnTzdsC8fdckvxZ356",
  "key7": "4NmcawY7DnUq4zjYs8ZAv6WecrtosUMUJW3HeFZLQiHmKWq6rteisPduuvBC8mn9ct6hp5tq4hqjsH91gKZd8Ubx",
  "key8": "57xKwdZrbzSMhmE3cSdseWeGWJ7Z4fhzDKnLGULErJrazNLGdzvLvM5N2vZ1hUu5YJBBckXMrYT6zx3nK2dFPb9s",
  "key9": "5DGQzaN9h33EKiqkbc8CEzkijzLtngVsmvYTEFZXoaoaNwq4rGEB1f6RrDhVDtjS7vFLhvxRNQnWxvjjUx5yrnwc",
  "key10": "GjspLjfeN73GgBVSbaiehtMMzG21yHv9JP7uW7VTEywomnSepKR81SdD1P9F7GocsSxVA9bG4q4itLAvrwNW9Cd",
  "key11": "RuXJUf84itGyKZrApweWccgmy7enX5o5BN7k8RfK5WZtkxnWWGq9qDCqavvqrT5bDoTcjqS54YAHbupvSAWDsum",
  "key12": "vFEnSN5ShQoZZc1sbp14XVT6rV2biFn9aJY2cZnuxTtQ2zJmZ7RyEdkKDLLB9mKK21ueaHCX1y6oNHKKrM1Y4ec",
  "key13": "2GxHeooT3ys9HquJ2JG6ckMG196RCcjBidRrx7kHyBk8aNrRnuameTSU1sBxk9zQpad88dMhd3sCa132x8faBFNU",
  "key14": "3J8oZqvaDwwkLgvc4bHWQ8WPfgPzf4UQB4w82SPpEzcyMWhw8i4NnSBGRyJke8ihY3xuLH9euRTJbaBVGxgj4gFP",
  "key15": "2kMmMdN6w1YRvz2hUUw4JqXnC4CGRifsPoY5TneKxzYwuFLz2FW73AMM9ofw7vr2Uxq5BRi54z6VPD1ugwgNzokj",
  "key16": "3qLWHmDyCFbA5NrXCYYu7Q6xMTfztkfNvvveGq7awwTH1B9esE5ud2hHEsCTXoST1wahXRDja11WU7EVVCuptPo8",
  "key17": "5ToQjwqk8hWodmnJFEgdRiVkBkpnXRCr33KDN2iBAdvQToh3XGs9RgouQ4addp59aaySd9zXy463di81GcQephNp",
  "key18": "5VzgJEhh9Jg8WTJVT5ptLSm7LBZH3AdS4p9B4LN2CXW2723JgVYJMwr53kygn8WKaUMKTFbbe2aysUosS5o9KPie",
  "key19": "5yeiTyKYjH3kbcwQrD78tLV8f7L8zeJGZmUBDbKXYqKS3qE3nfu6Byrm2SSicGiM7LxVd6QeHmu7ZtJAPnx52rpd",
  "key20": "48MYU9XQEohS7cLLsLzYm8D5tiFaxZUmCjEBxfoukW2t3HUpy5yPQFH2RgDWchDuiPrnpVJWg5LaZ3wdmSu9NMFq",
  "key21": "3SDKM4pbVArXQyrYmXqPg4VdvsPSMvsBCWbw9Xs6mt8AVP3pbrEhbTZiCkwkZarAq5gEN3vtgsyZAkhJRSbWQgQP",
  "key22": "2xBD766v88JN2SYrXJjFjRvXjqhkjJvc7Maa5TKDZGtdKrzr1goBSKygNKWpxJbcDG7BSryYE73Ed6DHiD2oRUMf",
  "key23": "4XoShLoJ7bJEtxNfpx2w3Jp6gjQc3gXKso7a5tMLnUPwfNn1VkMqSG4oNm77YBWdJ2mT2ytj78VLMEtTPJVaUFH6",
  "key24": "yo6Bqpwkb7uWncsAtgCLLX1cVXxSYJFmKBv5Rv3XWVvuHsCFSgaXMMjyXju7FknrbWtnSbuuAwXzMhKeADcKsz5"
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
