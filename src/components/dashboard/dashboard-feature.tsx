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
    "2CtXM31yuZyPTC3eqzxFJyeSfZnswfFaoySnzUmRxm6LGUFfdbeJgpiZk5kBfvqEezQ9j6kZtHYkWoy6cBnWqddk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63XmnVjsMb9HQPkkZHRoi7MPBPVziVCcA5546LYm91eazgr3SuMtQkEvetB3epjedHzefRkPTDT6jT6Gtxe28EeC",
  "key1": "4dJ1RuCxrgamPNBvftpFDQKQLRj6sdoFPRCwg3974LFGJ5AmnkvqyzVUbkpn17ZZHUPmn5beX2AjyyEVcMuUNQmc",
  "key2": "3Z9Lss4q24AFJruuAPbvJ9KEsPKDbJLPDYEum5B6oxWg78ghEddnHsniy4eZbbsXw4ERzVdQkNVdMCAUn4VFjJF1",
  "key3": "5jMCgeP54PZv9UETmZRQSPb6sFRTR6DnuetYZMqsj8hrHxB6ZVKd2W7xpC5P9gSK3Xm9BYvrTxyQyx1RQiwhrpMe",
  "key4": "2DrKxckCQZutPVEn9D1q1oZgosd4DNwFFAiZ9rohDbBKiBcLCaaC3sr8ktJeuRZGLbrozBYuTaEgdJGHhj895AdX",
  "key5": "nsLvmFW5UcxJ6vGkDDCExgfEsPBUW5SBrza7V7moqwNUCqYxuQrdzemqieybEx2qujdUfsJ3Gptn2PWRS4H46tZ",
  "key6": "4DxrMeB9Gw4ierKgGJ8R3MZp6uQ9rrsbHhxcnT14v9o9twX7F6THpZAxBbqG4qKvpT6KJ4yJduLNPfQ47xskWpsY",
  "key7": "3TbFgbaB3kUWKw8zHnHPhfsTouEDv6TAmn3xJnksfYrxCqnPiTNix3hRVuE4uUk2oTS1H4ygsB1STGh8FYg8JGN4",
  "key8": "3Xf2CSu2MjzQmvyqK4LkYJdrfWL75DDHDYHJWU1Rhu7Cc2XZW2K6QXEBkbWcrB7kwYeWumyCgc1GvrsKKhhGUR7D",
  "key9": "64YQL57D2g6rPsLPPqULHXWio7SDoWBpx1fpYCLuSow6nXtYU9zM6YVazEYCEnXGJ9MZw7JG3wzr4Q2Fp3nQnvwr",
  "key10": "582janz4gDgypPhSkjwYWYi7k4JwUubeZvENouBxSb3jF1DRb5tSzB7kKjBJ5hNxLUJWAnDUDFuCb8ixY5VKQQoU",
  "key11": "24WBf1Xzujp494gKgTQ9XmpH4ea6Qebp3oGMHFybNzxhHcafdZp8TcTuYPtojgwUZkxvH285E4dV3CpMYurwzrw6",
  "key12": "4oujjYdZuWQs1Tgx2oCGonZDUcdaXgzCKMVbA5GsfwoM6R6fkt6Pzdq3tLrQTrRRoWmhvfufs9Gn7ETg1a7BEs1r",
  "key13": "39hWwHXTDJyHyvvNiz6vXxBoQMJKJz8PB4cyatpqkhEQfAt21ax3gdPnd4BhtcskHp2hLYQexWjQPHaLZik5HBg2",
  "key14": "3Hhg4ACTpJhfSrEqL4LaJD6VfL2tDqmiWM3U3MzRXaA7MiWnXhGW6bybCKRqsdH1ZoRkeVup8oQdvsAYDyCjv73F",
  "key15": "2bLuN9uMUCwoTHTPnN9CvqvifjDfHeq4higGgXMtDdVVXSuprJP3zq4FqR1gojM8XB2Mba2nB9TNEeFmYMSuPzsf",
  "key16": "3wFofZDJ6fpGWXFjBSKmw7Stb2NdVivbZAgQu8wu4ZP6KpSFW8DbJj7drZg6qyodVRTfEikMzb7ZtXMgdreKMnYS",
  "key17": "uKv6FDYugS7qimtuWzcvwRBATjzMXpkyBuRtxnAQ1XwvJAagWCKKLm1pyvZ6hWdpSJtv3cT5zCwBf4pvJHJmRgx",
  "key18": "2zZbhqeU8n9VrFTZYNhwM7kSvawjBLNUworvDo7Lm6rbaNfDaeVteLqfVzAPPfRguXqqiWeozuEMqPEg58ubPb4J",
  "key19": "C8FDT2gwNWRieQW1LLMKuMegvxLdXYDxPMjgjoTV1BYN6xnKHEi1pRULFnNxhX9daLTAwvS2Mir7BVWZTZjH6Ga",
  "key20": "28uzLJ9KNudj9bEp8BgZ8S2eR5wdfiekAEJ1vKMvwndn4PDVHsz5TkqWsufsoFkoxcwJTe1TSZSDB1p2eEnbP53p",
  "key21": "kWT5PB3fA3Jey41XxCyrZfS7ci8oGd1EioDgpUS4mxn6vK7Zh85HtpStRxRnuNxggGHecTW7YonVjR4SiDoCJHb",
  "key22": "4bApSNRhcqtBRgXsb9ewvpUbDTrLf7vbEVvEPpAoLVExQH3FUGSnEXQQF84BhoAAVsRRCF3A2EACn7rv83BQG6y3",
  "key23": "2NAz9vi4f177PbRHe9u76aQqdmBAMbEn7HUZ71v3UfkfSpaUMAZ5p7CoePAkemiLypytERvwF5N8gHw2w7GiXtZt",
  "key24": "58WRbcEku97Qr6zgY45ia9MRfzPJdfMvhaFEy3ByHLxM9Lv12rq3pBW96KtFud8bSSTxcAcpGxnseeX5xY5ccwCX"
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
