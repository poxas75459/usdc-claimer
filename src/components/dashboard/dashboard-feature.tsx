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
    "5KHFny2Ui8yPJfeZexnCxSfktPPFMyhGAVbV8avqefPputtnamU2m5hjg29n19Z8o3C7wSf4wWfYAMerHAD9bANn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65zqE6kDpzowQemYWPJJr1UswCux7LFDpdk3tXCm652nDCNZsx2T9ozKGngorGMbFeS87QTH4cvihpuxzpfCxoy",
  "key1": "5yDgkvb6D5jUAXcQKiwRC7U7P4YmEs4LRAPyyWJ7qJCx9xjtmJQ5jxWbyatDkiteDKHsprsFvYUv94vx784TtjyR",
  "key2": "3rJie7NjMm454DixtDvJA3RyRaq8rFCBn6ohAMvE68PAgdaQza7jVmbfC3Jug7VicYRNoSMKKMhopfnKbYMjngk3",
  "key3": "62TUTyqik67b5ctG7TwMSihCZBrrm5Tm2ZC9KURPcMeri71EsrpXNRssAA2JLLXz3y4QVvBJxrZQCXQkZcwqrcq",
  "key4": "39CmZD5RzWNaz7EVGGcubyim5CKCtfqbrA8LKCx2CMthP3vwWsXFFZKMiefPsGfbG3J9V2gGSTMJhbCGHXpvD6wf",
  "key5": "3YAMbmyMM2RYxfsMn1G3UMupPvXKaDwYPEjsq2PJSHJivbBbUVVPQcpd3tdv2AU2TARDLVCqU2hWaVkfko8epcLA",
  "key6": "3Jr4ajFrEb9WJZBU4MvsensJ9mr4TEwhYgczbqUM79ucEQN8Vf7RmpaV1jSA4UU7Rf4cc5AuGX2iLy13yqS7y3eN",
  "key7": "2izXU6QGnh86suTTZJ5CGyB45vUZP9YixwPfVwkz2ZGVT8AijffFHxfWQxN7Nn2c2yb2x1zHAeMmDXqdAfaterS9",
  "key8": "5oJr7ZDbApk2bBMF3FqhVSBdd7vo5YTR9ckJyg8eNs7bYoiYc9aB6MZ9QbpZqKUHDrZJARZLzRAfEYjxkEBHSTw9",
  "key9": "2PXzXLRqYdB3ZXy2G9aAddsj1zs3GEqpC8sTtuHPm4RMjDBnCeUkSCkyHWC6E2NfVwK4BaKgRYJHiGuZb6pY1Un9",
  "key10": "sUfNgNjE21LBosaHuxe5Qp7m6rFDeDqnaGtduG8MLdbgmRBRfWKjqRNhKCuLgg3adMH7wNj3s1YYkgc4hfRAT7P",
  "key11": "5VL8yVN7y2YpYnnopHNQ8DyGzphtd8NmUB5FCWmL8vwnGRjXdGjuvt8TDhLn9FQEGtuPaR12nKxCstQExEJJ82k1",
  "key12": "5K7TdHe7oVKYmPFhijb1hANQSUarVhxxtMt8UufGX8xpBWGUrRzXi1W5hhMtCe94wu7UPqVsBCtESidPbRSk1xKu",
  "key13": "4Z6wfcQHeNjfHSArkHr3WGv8hpMu2EGncAc4rVMk8CUpEz8qwNbJr92QqVvrCV3kEXsXQpF5T9mzdiccFNZj4kQk",
  "key14": "5AqCkYwuN7pUoK3t4ESDjwBV8AEquxDgtFYGFWi6SNJjDk3jh5H6wtHfpPrfze1G6Lcx2irzynzS5TGwFZBaZaLP",
  "key15": "2TVSjxW8MWtJaeWYQh6f3thseh8gfucrzXuGxeJJMStvR3EoG6XRC51ZEHYRD2PTSkWXhD6eQQ9aAMWcYDaEcFjR",
  "key16": "5nYPDsLPnW66SeS8XY47sUf3zE3iy9hqfaCRL3Ga1xJYPeu8cL5PVPnPozwMezjkGJwkUZGTA8LvrjnaVdJzQ5UC",
  "key17": "5sVCyBRZUTFn8XgSsJqe38B4NzXRLsBGppk7C19rpxgrbEk2Vi4A4TWnMXvX8izcoGpFDYN77koYVHbzrJAZ4snk",
  "key18": "2rPoqahh4nCZCciC8sSwiksuAswXVKnBRc2nYp5T6baavzLWmkpr1AGuzLj36454vW4Gj9Uz95SLUZM6s4QUHMMG",
  "key19": "3MYuit8Bhrg7oH5GfftHP3X88rvw3v6uSJ37ttd3s3B6CeR3LSS25juphVV68yhw741EoPxfowR1bMf44dogA3XH",
  "key20": "62UWqGzTreS4qhjHRHHqKZBWHiWRtyCvoJkg3SeBAzLMumg1NZxQCeQW7V4tLWtx5dNWe2RAiombE1x7a7zegPrQ",
  "key21": "62pfdv7oHQunTD9ARZVBah98khLufSEPAYhQAUN4Bf7gXwStYHTNF53AA1CWPDJpdXCY15JhcmPnDeLbaw5s3mXS",
  "key22": "B4UWhMyfYH7aF2sUQiQfXD5gX37RmJ3kd6DMd7QNTfxtKtCn5HTDP95f2YXCxA2qiJ4woqsz57csFFX9QN1XZTD",
  "key23": "4bPCrmTXY9vyaQ8RMTiNxSMHUm8JDYNxdcWkPhopJ42EDwnhwipUZL1wXaPEkrytWcq5WYERCXVWYX5RcixGXcrQ",
  "key24": "2CpAWohJXUrYEwCzascnk3W6UB7YALcQSUi2AZrv1Vew4wR71MCUcgP4zpWWXiuo6qUoDDuEx3Q86Vn7p11gJETM",
  "key25": "376tBHDS5Y5stkcm5PxaKQVv5G4VkTfUcnrbvcVADnF8E41a4usyGuDceyfbHrWPTAogYVqE33LCsdkk9EWLeT4z",
  "key26": "5561giU84CR3ThAgEgubWetWXzNTx1n6XPUxE3eprQkHMgzXpgYUnNiRkL17G8GMTizHCR5qjt2KRUY5Y5rYNWdD",
  "key27": "2zg21PpUVsepHdEzRa26Wc7SaKiTCNC2oEUmDnayCyqXqH21TFGysUpvX2NkpAbjZDZ962GkSBMr6Z2L8VkajWhj",
  "key28": "5s6BF1kNKsicLSphfE7YFuajGmAae6Ebhq9AXRMW2LRkcm9pWtpqh1ErHX6wcbFcA2o7VHcwW85UUwy1ivrYgGuA",
  "key29": "56r2kY17fVxjeeqdbyVRYYJKdYruFma7BVHv6JGwDwnHptmhL6TvbBwrsM6g7RMQAzp31wnsD8r7f91SJyvijbej"
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
