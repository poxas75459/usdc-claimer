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
    "2hmR6tUMAdXonyKFMXBZUcmQGubGYAh1yh15ipu8Dyrc3hmLrKzEWnTdXDyM1VHqBpeikZKCfdxW5fanj5Fzc3MH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64aRpG5M97r4SWXc1oN5BPEXV4aScbYguDC6PtZznUnatGikd594hxx5K9EboQEosFfYexZGuyriBkW8EoGDxRg",
  "key1": "3pFuCSReqFNddTH1DSkaHiAyXBvvuUXKo6F5g5ZKu65PcgUwEo7sTHMrykWgyAcj1uCwo6dZnRuPRGzdr8vGjHCm",
  "key2": "2Bjh6b622U4n1w8ePRpT8cSzqKpEXeE46GFrvD9Fk77m3rDbCVBUe6iPmLqmHd1x3XvyYGig9aVGKsQDujKxkGqY",
  "key3": "tVBfayFchrPqJCR7PFoGX1vjzGZq4sTkSWuweRmW3cQiYfohtMw9oZYY3uHQzGyZpDTHWqBde3douq9kwGyJX1N",
  "key4": "U59vWUkqPqxgn5hDDJw8G41p5mxXjMyicPHCoHWHzJkgkAwxgfQ3PsxoQPPobQCuBwphLaiSdBc9yNWg3e4d24H",
  "key5": "NRBo3cGrcZgZwiyywRXyfTdSNMBHFgungdGuvxHgHRGrGXMfXSUpeZBCG545hy1DAiXdTKcaS4ocAKnMgKuNYFZ",
  "key6": "5DiNoZbq9Q1HVZDdr9MaybGSA8DDp9q61u4gSCEarv8twsym4CtaHnU1yL99rjQUVkRoLEkc9B2ZmHv6tFXKQ8cH",
  "key7": "2cwKTVYizkHBgARbAjwYm1N7WNDLUk4qYk45fZBjxpkpxwGcJmWqY8dADg1JmX58eM8Q1Rcmn3FK5MoWtNTEezEN",
  "key8": "5eGNVmB6Z3C3zaCWyC79b5WuXdtb1tXb8Di7pYv4oNEsk2ZGjUpfLt4k51s7iDJM8KmimhTDAsJHSg4An4xPc3Qy",
  "key9": "4PVoXGcrtFrDSqJxq9y7KqGbD7b65uVMAsBbSHDapARBLCGzJ3yFXZbSVmxv1CySgFs1wgR2uYXanGVsixkK46pv",
  "key10": "4ERuegahtSKmzCPjKcmRuodnWhxFbYMfhxNMHfRHZfoZg8g1aX8FZ4PVsXhomUV3gvHwoMrVx29a8zcNh5QhqJED",
  "key11": "aMN1roE2r2DfqmFXA6aGjcjTvcd1sND2tqa9vqgSSC1c8k41ip2V4PcgozQNuoSHdwidVpy4vQmzyko1fCnNCVi",
  "key12": "522f2N1uoxcA3TsQZgm73gf8WYbHz22RmwK5xQntQL2dUP9gVVfWoreDU5FuP2V4VrwVf1ZUiwVRV4skaqXHgHR8",
  "key13": "2ziWLbX8VAJ9eUCVPT4Vbjaefte378Sq8VbSxi44dgShUunZUVBiNoEkRZpQSpD9Bu96vy6D2Q6of2AtCMNM9tQn",
  "key14": "4jjjiU5qXgK3Vzk63gunfDRFWW6P8AEybeWzsNGriLREX2Gt9gKKKJTyAxGXZa82QjRSvNeBkYRQW45xiaBE2yz7",
  "key15": "3saQP1BfxGyouCZZrmpgw9GVueGssjZnNGQbqUdDK4XYLd3bfczVaSzHZwC7e14YiaCqA4BAWoZVjbJNiuQan24f",
  "key16": "4FYJnw8swLA6eCkJGD3EFpYWd4CAGK7rdbBThFgV4KCzL4NSUBS5MPYU3QHMXWVjCueDhiwsHcaPMCYwNtct9K44",
  "key17": "ehag6YUiXQAhdEGTxAFSGQer2vvk6vfKN1cVqB6e17tanxzZ2LWsLPE71UzNwiQGbxCYe1zrD4t7oCvSN2ffbTv",
  "key18": "2dkbweq773joBEB2QMRzxVppWaWV6hCWyEnpm3pWZnDuyhAFtSBtF8GR62zqzHTQtrNuH4GRKA9mpwvEBk1U1JEc",
  "key19": "3xhX6U14QBs4toGCQnTqupPjEnFksDDWUzCC2iep86HQ1rb3twiqhP7R2GrAwEzYRbvKbtMMxAx1gJeLo78Cumag",
  "key20": "ocLV9Yv5KwqRaZXyqU4zp9Vog4D7rqLYgJMwaLY7r2F5hmbWoWyAhWdoC2r2zbXuX2f7rxB1nhLWtA3zwnUNXU4",
  "key21": "53Y5ddgqgeZA6pztyaUQ3RHSzbGrnsRiu18SfBT8gXnxDtY3nPaQR4vcyvHoKU5vsqWg1N18xweJTL7WdwsZ9c5y",
  "key22": "LD3QHxhM9M9qFPxMY9LMkjyeZUKqNsqmiLfGCrUiYLQsMfi4vXFQBd3AHUXVtLx5JVE3U9Dvj5ZAJu1xazZEdGU",
  "key23": "2Bz8Tp7hGd7B6MBZQ5dJqTptpgi8g3ND8pAVV9fapyifrtr4eEjXEGaYxJHYbRwnt8AyFns83QqL2DoMBASbTLS9",
  "key24": "3cHk2vqvjN3FxzK7LnTXciMN9fDg8Uiww69fiHH4PUsikzhE59X4Vo14mBPq3bWDQq9UwjWkdoX31VUb4RjAczL3",
  "key25": "5RVcANEGDv9M3QaEsAtEpHGqm8F2hTbJBBfUBUs7dU22S6qimiz1p7soGDiHHUfjaX7JQBcStuCdkr2vtMXAnsk7",
  "key26": "2Nc9SW5ixhnxBUTnpZjFXPP466JUAv3kFFksNWmNLy7vC6W8gwXzDdbAukgcYRCjajJbf3ccbWbJC2ivronxA5wy",
  "key27": "31NvfyFc22hg2Lm9C5nNt23CrDbrYhKMbitcoM9LogBkumfE2tbQLimbxP5hgphkdcMiRSUSM96ngooU8P255MGp",
  "key28": "55GrdRozg4cc9BXAfyDzzQ13tyNe8gvSm6Cn3qdoxK6FzaK7Vd427NUWiAxQx8gavVYe9QjJnrLm2Q6sC4CSnF9f"
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
