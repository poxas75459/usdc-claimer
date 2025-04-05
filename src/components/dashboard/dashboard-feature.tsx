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
    "ciiZwLw5nJdDVc1BvKUUxYgd682NCR31nRG3JEGzbhKU7TgNmKbbNmo7rM3QDtYvfmTQqF94NDcwXkQisrAGiSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L15GmjNUxdAoet8J8iGzZgWLyuiHRDKFLEtUA7VkqeUdiffr95PkTHmdJTRhdQTnXCbZzaekSpDXWhwk1yifgHj",
  "key1": "5zPxBiwuUrFkXiEANQmVJ4ntnA6pHo2ua7Zuk94gDsKJweQfGvxpZvX7NjVucLi4x9PuWULMoGEqurfDkmrC3wbA",
  "key2": "42C2tyShZoDR1EkqybLG6fxLK8hAmXG6ENn9NLm3HK4abygvDMo5HwvBa5h8X76Xs373AfNU2TopMJvWP6vssxeC",
  "key3": "41DVxU1rXJWabyp2Fw2RZZTkuJpL4JL5MyhvLNhPioCQZXc837paX1ekc2Kt11MSxQNT6Qu57eTDqwTNTCXbqu9U",
  "key4": "4sByuxVhfHK4RwSxHoByhdxjXbhVchyTQ9Tm4RyaNvC76pi6wPzF6WsvovvEGarEVNFuGgNxFujj6qAx5niYvitj",
  "key5": "5rgNbKHrxF56SYxdPMdyobyegcATZEKsCEKjxuWkpAEBvsfppiAkKYeeVnMZ6RPYxBnc2xWmf8FRrKxtJdMCDFGC",
  "key6": "2frR84QvVrkmaSwnJd3aXL6gNae138iLUbUjpBeMsoDm4U8cFzhjVd9ZHE1GNUxr3s8AKFEYScoPd8XEPx4xCUMf",
  "key7": "3Y31TMPbnVT5rN37tyPtAocGgWTB7KZtpY66pTJaE69onbUTkD5H2EZp4XJC7P4uG3wMEGLL9QfZcC5XHU1WK9nG",
  "key8": "5tt319cETVgG3X4MV2Mt5VCuWd3ejzr9kcbFQXgg82htBndC7mmZJ9VvQenCtuyuebN5PkYnAAfzcofS2FbQqmxf",
  "key9": "4Asd9E6VRnCXkTgTMpiyP3L2n1W3V7jRqMGtsMDujHZZ4D6ibpwBdGKNTocR8FLfBPBKHkt4WJXWDrCsWUufNGiP",
  "key10": "4ky6EBEmwTwmd1oe7VYM8CXkuFBuR6kkDYQrmQKC3vtR2oFqr1P6WX9h1egJDHiQo534dv9VuqWpSzez4q5yRh37",
  "key11": "67FyPVrfcsFKdLjRPeSaHPjB5JfzSggfyjon5j9E3Eer3jZAQ3KtKQB3bhhRXB697q1P7WFjvWQHVrYwsNr13YkS",
  "key12": "3Ef6qHrcXUHMYn1p8zkLfNoBxdew48R85dqvA8s3EPsE7ekpmpyiYawCSwouYTY7WD3vH5bQLxEM4nhezwyazc3m",
  "key13": "54qoANj9MgsrMpFyXuWB5e97MmV54DDqER85bJZjfT4KeYpRGN7Ttk4wToqqtBifQUZYrVnHvMAgPDttbnwhM5L4",
  "key14": "5TrCFG6njMouoNBkSrp2Ny3gohdZeyW1eT4TjzmWd2wfxTGTfXcaWzhS387uJnKhhUtndhzyLitRxnQdL1jvEMWn",
  "key15": "tMWZ4KfihmWuy7pyV3An8oFrG5tXANkaw5Mb123tSm4FF3u6GSzKrPixMs6hEESnDp5aMU2coK6PeFERVHjEtWt",
  "key16": "KyZnnuE9pKAoCRTmeja5aQbA1FccSyag4XmjxkpeTy9t6bshHNDLtk7o2GRcNzysZ5cEzZcu1cWaHKsi4PGQQNg",
  "key17": "3YhJfL2TTGw88XhZXDnBsJH7t3itt29bK7PCoGB21sKb7HhqvzM7b235bqfbE1qjd2L4LHqABeMMXYbTYNuc2EdL",
  "key18": "29i7kbxbGo5zFmNxxvaUhqmzwoKNai9CcheomArA92N4SzaSLexTLRbd4KmooU2ojC78PHUjfLpL1eArXDQfTsby",
  "key19": "2YBPqNRmboFimNiz6RiNwHefkwDLqTk3NDJfkQiNVDrPAUipc3JWrGtKk26p5wq2A1TV8RyKC7B38mSzPzW1NTgu",
  "key20": "54iAqGu8UNeavCATKr1nq4GKJrjNRYXzCSNKprxyLZhEv6uVJtCUUvxjtLjsdUjKJR87zJLiwh3j49z9vwaMm6bu",
  "key21": "2DaqrP9qm35w2JaN7L1Gi9DkpoZN76JWrqUgjgKKYvonynkJLYMPHtCwG9cHdhK9FmiMZ3if68XCnwNLA6Aeoyer",
  "key22": "4TC5v19VXBSryZDrMfKSK1etBead5UGFD7PSMg12BYwxMPobuyHjMUFyqmniSXh3J5rtGwuJLsM3Qm7atDFhMDzq",
  "key23": "4pXVvxGQpTid6cFYqg5EvSTpjsZsPXEytb19n86hXV1UGjUUb93j5kZ4bsY5465zUGjn5tXni6jYwQXiVA4EE1Ff",
  "key24": "4FuTMU8a2QVJKCeLbPb8a2gryG8mjCcPeg6S7kWJnUvJDUvCWu2TCN5zhQNALNEJEExFGJYUPutYc2Wm7kVUA6p9",
  "key25": "4UcwWABfkxSeJgT28Q1XxnWCU7gy55QAFVD6R2dGQhcWVyqvu155SGPtL3B3m9PbmLaRVEu6Y1YUGEodhkmCqv8J"
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
