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
    "5XrSuxwqqwZC93ZLjoyRM5kebpg9UBhqi5t4KdmfLKmc6t9wEoPjUq1v1wVSKmEELpyVboxV8d2zKQE8JVxzo6ab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67g3bk1Vykn7BNJohAPxqWB6q85Q18tQAgD6ofU3MnA7CbYVKcA8HkdDtaNwrsHoDZGmSQEevRstr3NycNyyz4NZ",
  "key1": "4oyDyVTh9wsbA76Rd7euLgkYVysX9yuhX77bdux2aesrSEoy2oY1VsqABbpAa5JFaVzqPhYE5HUGnypi9uuX2uwD",
  "key2": "JKVXZG6FEBC1rPwe5TBn38wnpqqWghhhhHY4c9wUcnDBr7n27JRh1LLEQDLfGwsjxp174w2A5vQKMQdSbiX2zaq",
  "key3": "wYSp5fgUWLeYrMTQ4eVVoYNYG9dwADC3oWFD1VejYjSGTvSDsk36oGwNfVPU9AH33XEy9MM45G2YbNYBSiJkF54",
  "key4": "3h7WGn7omfLV6rbHX9wpFzsgFva86KvjXBKkJADE2vLXYME2XFfxcsuHSB5JCL8o5frvFfGEz1iGEtsdEoxnXnxD",
  "key5": "2cRG9EFSBQYTzaFsSPLcSyPvsN73dB3ij52Ny315kJ4b3q4mptKkYDPCiJgotgULPa14GwBZDrQAypduwPrbMCYB",
  "key6": "28fUubsAASSxWbrBii7QUDnYkgkfsdJDgCX4pCmkGeHc17CY28PFBAdKSTmYJNpvKCk7pVqYyHmvV2DEfuRbQhaR",
  "key7": "5QE4hXBDjmzmYVptJmCdqDVfKjMTzsbZLz4wFS7zivxjxWJcdK6SEF8KaiktJ5vz8vNMnuhs8CkupzhgdWfJpAQp",
  "key8": "eHV7eWhY9oFFrFneG2obg1GUNakxyfsN7NmMz8m5X71SntiLh9AEKrEA9pVBQLzbLT3Fm6ZFVe5Dwbw1dti9kfc",
  "key9": "5nGWZDn1tRY5VJhrRY2WArp4bzw8Y45KTD9DFbyrnzwKWJWxnENbr5oMF4Dxf63yKVqupESThdya8bRBWz6yftXX",
  "key10": "2AwknYGkKgNrfBMx4mXMCh7b8My6qJ1PzXJwx8FJ6hxrxjfKgX4aKTKdtUaErE7pCVggT3ZcxbCqggSF34xmQxHo",
  "key11": "yrnRPG213WuvibKEngfUY1wWnqBxHtsLj47daDf4JboXoe3DRTKqdQzSNCWMfzBDJgp8kyT1yiFY3JHpvY7B3Tx",
  "key12": "2gJDjYyGQ2WdvmfV2cMiMqaBrYdKX8BkrF8uFddD8JfBwxu6QsEig5CyxuAkmb5bZuRiPAeThWMiG9JPgiW4FdYP",
  "key13": "2DKYUe7JSDNZeJ9gveWdBHx8G3xsZ7Dm5SC7Heqk8p8PfM2Ska3rBN6aGFoG3PmGdEpuXUJd3Uo72pdTYTwHjvBP",
  "key14": "3fjBpQkW5NPgJUMvcvTsxBnsRL4jsSF48ij4Z58mCED7JzwWjA1UPpzuVkC2DLGmAS4ZnfvybNyiWDYkL1teZi68",
  "key15": "63oNuoULZpFYEiwNK1HbHoWNU2NYgtA7g8mLh5CWBUwwUKpabwG8k38Gn6ENmEyRzP7s9FMqgZ3QkwCsQuRDviDf",
  "key16": "4yN6PoDGrsi61W3BNdHp1jnoGiVF3DnPkvZFW6gCGtMNQ6FVyiMQKvaUzLh8gmvWZrPo3d6gsY8NpP6qgSFRqtCa",
  "key17": "5dyKt3eFPHVdyxttgkpJffXwvcP8yDeRzMjgWHqUJAkasEdj4rXRiev2urUiAnLdBcwFXnhfkxtJRpdZKxnBya6G",
  "key18": "3n8BEYmGoXhsqkio8j3U93vnGXDFwDtgNAkyxxfYVGLcmr4DGPYSGiv7XVDFxPN79TczvaNjLw7akr4UyieByp1E",
  "key19": "t8gT781maF3aWPCbPtQcAGTNa56difNFFZ4gpaCzuPTF75TNhjesTN2i6nr5pjrioTbbJkid4Kik8J7gamy4EbQ",
  "key20": "5Z1eFrDUzj3ea4dZB2DsWQnQwRdMcPXBTLDQyjwLGEebGaTJf4f6ykNRT8AJCtkQZ1AHWyHPLFhw1sNodT6ecPHU",
  "key21": "5826BECTippFebTxvv7YjCrQnBLQKFgsUnW2Pejxo6hs8W43yvHEcnBcQkBnGgj33tvSLSekLcDgSfWVwNSS5fnX",
  "key22": "2SzktiAeFc8Z7JXfbbRkuoQDyXWfxi83MVsU7pcnB7diopioarac9YA1PgEzuCkYJBcpMTestPw8K8ESntkY55yg",
  "key23": "5LqF8XrEXnueiDqYxcyvSs5jQQ5dCJwTveUgZ22pZM3HnPKr2yN6VES3QvsyrP377sPjhdDj1wMefLcKsDYCrUeM",
  "key24": "4dgihMFYTs8Eu2PdDJHMhVocFiAm2Vnb7DeLuqxs8zaTtd4xXTHAJFcgs8stjbmtbXazbhnqLfkzvyb1MopFJbLC",
  "key25": "3bz4GPUrvDtpUENZDbBEavEvB74B2Mh8pffL3MfQrfQsoJnqcsZesbavyPMX7KZ12LUDFevBhnecSaGg7tkc4F7o",
  "key26": "22kTe4iaE1hacRe7abbjzAxooaYATUvi1ZGpSumzWbo4VS1UMKFMeJ94XnX77b78RgubPpGcX6P1ekUuMzadT5as",
  "key27": "32jGp3uQxM9HMrUtB3HjkFErHsb7AEUiJBReCzg1czvGGKGnvEXhSqdEkCFzveJZxykWvzBLJCCaJFWCChh3ybMu",
  "key28": "259FgxbLoXiL5CfuFAeo1yBfkyMUR8VvbHX5wkAXPJiu68DecKmN7ZzEfbso7RxGaPV3TRNqTLxev7scqD8yTtgf",
  "key29": "zshc6XHpkoKiuPQUnTK64tbGc2KHooewU6NiYiRtuUPqmSEk1J7LZwKmtDCJ12YULep2jphYWRAWieL92HfdTBs",
  "key30": "2obkGHYoGa2v8icM81rn1kELPSp3Mv81H3NrSQQG5zgoNHfDUCcGFKRkEVv17cv7m9AaMpSC9EieAEQdnpRBg3gT",
  "key31": "4gGMM5KEThZDYc8XGnK7c9JRF9xvzBfZT7U9p6jSd5seYidFszmkLJFgXqCVBZPnmaAgu7GUCjZXe1ZM5zDTD9g8",
  "key32": "67WihgLEpL6tz5mR8iuQZoDmn8yL58x7KdXEL2587dJ3RXpPcS2BJkc2T9eJ7bkmAtbGf4sagyxT3ocLw3y3qfNP"
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
