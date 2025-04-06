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
    "5UEzTznDYB6GqGN3vKY9p3wjm8PHCDKm1ux6ymEaqS2h1L9duiiPuMpLV2qGAkznvbCLacpwtWP2b6v26S2JAvRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GfMaFesKRTJ9GXWNJ5z8Qq4BopmrVVqTWkxcuWL8BHNEyRd2LTpHpwy1V43adnwj2C76QmfJSPicMZQaCrZ7pZB",
  "key1": "3zyShacyDD5cG3x1EB21sgnzSZoVE16hi8Lf9fCTh6TNVtpkNi5EnnmnJbsLEeZ724AQoZ9hermmLXK8s1oZqV3G",
  "key2": "4tHVJqVNCVxrcGja2q7x6rAjP2YJZVN6Do7NJAkFbbRtoYX9xN1UMGfgoKtTg54Mmt9QRF4ZggaLFzxDGgpDJ2Ya",
  "key3": "5hXe7faGCc6mqewQfKjaXVmG1WrmsNccPTZhwtWxVsgXzrnRqwjdAHENnUUoLnBFy9ZjzfxLFfDfBoHU4wJtz7SL",
  "key4": "8aH9uQeJu6yVoUQV2Y44QPKy6BNFWC7PDwdiACzyz54S8vDvGNMwYyRemdQHJmp2bn5p1F7j6Ct58rb8HyNXTbg",
  "key5": "3kaAJRPQ4FnxDgpeoCQEyrZmgxTT2GVN73X1hqBEvdcXJYSG94Xx7oqJWBjZkziQ3Y7UtwQDGcKYr723rj5TrkSW",
  "key6": "2i3aXZRgtGRPH2X5f7qL9cNbuHBFtRWurNDF3SzhYvD3d4qfq1ovchXUk2fALjhaPPfbB62tE72qRER7eggoLAwC",
  "key7": "5GCjA3yQS5pd5LqBBq1spN3vcqoU1PNXwTcJfLQMo1C1X4DyPizqYNmokTWr7FRF7a6zC7icPEqgu6PJs9CjqM2o",
  "key8": "4LCkB7WA3qmdK6nnD1X6nRUZ23GaL2uUodoX11oQg8c66orB8UGaW2YGyVSbJT9b5AFhRnsqFReSG48jvgQn6b7E",
  "key9": "2rbgj2DTo9wZFbCuvmKk14tGbhdW1kAFcwsMLeZEfcFxzoDQvC26wvnHPU2BN1yEWi3qqC8v6U9pPN8E2Zz4G2s6",
  "key10": "2dLqi2WMazVpFjXBFVmw6Muy72UyxPgnc9s9Rvv11sxptcS5uP9pC4RuAx78vguJdRiPfiRRdGKtPP6LFYVyaeQB",
  "key11": "2VYWMdpTLVDFTABaTEaei4umPqv6Z8GxrGTbwHYdkjDRTcSgANxrYqcvLhdvefU52Yc5jKcpuKLfigWbpCpSDuub",
  "key12": "5mZKQoz6Dd3hatU3zEW31uhCVJPU2wgrTw2B5ZHnDFu3J7dJtfXTQMUHxPV1c2MYZ2BCuyyQwyjk81edvfRCSEuH",
  "key13": "52WQPmTRhJhZBeXEKiRpmJekTRZVaChGbuDehLuRGBnmR9PRJMG3MXsn3aivZXa1B9Y6xpYTipgW655tmUNhVEks",
  "key14": "iS3FQDavNBXfmCmgTYJdfBL32CrNAtnQWt9QHqBLfaRgH5FVjtpgPK2YCZZUMQyEWNP1Qpt2aMHdKrcAPkyLBRH",
  "key15": "5ZTTUwHL2onKyQmob5W92gPg9DDz9UjUPFJk66byGnRkJffyQ7Xb1EHwauGgAz5p1C9BdvwyEu14A39CGcMe4S8w",
  "key16": "5AEwqXKJL325zoscsz1U8pivevgBMEySARSyVpSRVi5dgFZvQaDtcqHR86gKfHxYuTTMupoapfZL1YsDZno396JB",
  "key17": "5NzFc3yULbTjMrKNKqvL2h2xAmA6VQx2g8oFHokVDKi9xFH7sxhnXo6rBqSKtZ4FUYuc1QtjsSVfe9tcnaW7S8gW",
  "key18": "3KJcn7zeq8UA2vYoPsM9rJmEq75NNrRL5rZb2ZXkw26KRKiijChH3jCbgVLj583txS9jQzQmyvxm1TLjvfNB385L",
  "key19": "3Z7BFjQU9B7XRKsgLqQSc2mXxgFPjFivcg42xgtMsfz4pezR6ivXKh4uQeS9Tj8KyUMUNLP19JVX224rPBNfdTxa",
  "key20": "4uM1VB3Lwj6zghejMuGobDfNNsqPMhaUnwAr3ZLuNng7nZ8887XqRRrzKP14evMPwTZdEjGKFBdXkQrTZF85c1nd",
  "key21": "X3TN3sftXQmqkscCvdeyBkEZouiykZVVRsXTLqgm5kwiCQ69KsBRWGUsNHsdjPcVdaHc1DHypkTsNRqsR7yGMp3",
  "key22": "5DbHSQArxc5Mx3vXEmPhzjntBxpzbi9aGZ92faf6LT15cJ2pCLyAFaz9L4FEU27dE2XbcN5gq2bBdULsuzgmHoYQ",
  "key23": "417MippmivwrtDuDFQTnx8har9c5jpsu4Eo8xYQdEhgNL2mgb6jgYopDaZwSfvrXZWDT6k6bbnx2cKPNzdXEagxe",
  "key24": "4PApSrgBgFFR3PHsXxNLCJMSLGajwZhtcPuTRi6tP6poP3iZfPrn3TGac8QKAnKXssPnk7hZWQaUP1sUk1NK5Qa4",
  "key25": "DEmxMF6M1Yv7G19ZNVSVujj7Hnyw8fm3kWtTQ5dkVCgiMM3xGiGyEX73Qe4r4TjdNdYvnkj5PngysmBdHoCBjaJ",
  "key26": "2ykozQ76MSyJvyw3C8xBY2svbcuoT6kKHzp3Lyy2a8QvCHe5Q6onXtC3n6JN4KG4zxMGdcbJaGvjhTkbdbZUKMPV",
  "key27": "5zEqicdu2kyP2SR1ebjiqG6u2bySFLkgZxiSt74tV1xZxAsRMGjignd2pKTzisxAuKSzwfWhqQsY8nEx43rJPM9N",
  "key28": "4tK7PmgMbH5QphHiU9YBXVVcNjcbMpNbA4WE6TcfsGiocVLi49NAuB6s8nQk2DF1XtnsmpfyYxK6drJPzGZs8wUj",
  "key29": "3Mbgitf4XQdmW8ra8aysG5WhVDjhLd3pKRauGfqL4QQVK4ZQe55vWBJSArxSfQDHzEKdkko5V4XH3BKfJLFZM9nT",
  "key30": "5CJsKCBBooZovhUmdC6iHvzSjJkAB9KZoQtnqrUp7B9TxD8fmsWYbQJTc3fMG3boAFprnzLdeZqWfbt3iQAEnVjp"
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
