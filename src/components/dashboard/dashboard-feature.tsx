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
    "5rHczWHLS4Zm7Y8cj2fiLpS4eguUBwzUkNMEQMNQwrPpeRvDpqK9PNpsxhMJWxXjSdgg6LH76TXKoSzk7ZsBDprM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uz5sQujicn4iJwneFD1zsZAqgtYGFN76w1ZDSDcwovm8LDnZfwgNg67JbHNnt71Qy7PreuP1iE42YqzSZaXWxeG",
  "key1": "3JimgeqhXvfH2Q129wrEvnXH6MGi6LGFy8PdHjSq6pmxxKuQCdmePEiauTeNQBpsYd9Lr3HBsg7vmBTBGZde9TDo",
  "key2": "5BUgvnygf87L3HTJDisPUBUj3c8BZhrhnLqXHmF3dR2cb5GTnA3tiSCmVAU49fT3NcYNgZGBVFd3W1sbf9MvzEFY",
  "key3": "48GavHrYuejoGFNUEsyArx7Ch3h5Tvtf9Qs9aFxW9HVgXCPEkpQBG6Q8Lvds9e67KFijEvCWheb7M3WG1aaCVSfD",
  "key4": "27Uq8aRiaGgifa2ZMDVs31vv3WNsPRuYAk2ty2E3cz8MDCMafpLh9MTuE62S6UQEc1QCsAU1BvAxV4LpCyHUErij",
  "key5": "5g6ft8BMutnocmC2yAqegd19xKn9RuBTxKi7xoxZsCKEEbgueampRAmaRmh6bRhFymYbySkKCyAdred1mPta2Qqx",
  "key6": "2ML8nRxUwyQ3fifHZMfGab9LqR1XzyqHmLx18TN64eL3gEQ8npkfRF8G8XfaACBkkFaxuGJL9hPBNk5SxteL54jF",
  "key7": "2FUdMCQrP7X5jqP3rRjrQVXuaSFAG1gyiyxLeE9kt62wyTDtEXXj7rGvTTpb6npBy8g8DrkN4e8ePDxHwWhJVvEb",
  "key8": "5PBNadr6rrQE7hZojs5zoHSXYKNwb3bDd5BjbbBM8SVDo9dhTq7YADECwz2h5VyArwyKzrPvutpC9JL5XS75zfoG",
  "key9": "5LyJkNRgiYnzsgJsA974fh9SLj8FFTo6YozD8SPrcFomXDKPZLdaUZmXyq2j2UsLes3vrWu1pWLqRuGtJhaabDy5",
  "key10": "3sfghgSdbxBoNbR4AqqWiotVgAdZhH1pkZQjVBHqPCRnMyubhJ7PyK4FubVnMYeAJh52YVaQ4R7ZpnzDiAQEfbRq",
  "key11": "5d3BFNz4yKYNqQELdw21GmGgJRQrq8r5bTcsc8yW6VqfGz32r28Y9aBtQvLRtCMSe5mnhRACMcB5hC7w7D1stFA8",
  "key12": "4NZubjjBRKfyC4QkWJvYz2dhGCL43irAXvQLiRpKEvqLK2VX7xcKAiHqtBy1titnGEseRQBKLFtoBX9johWmJp9D",
  "key13": "21ZCtKBuFaknWckfBX8Ku7WYLBVQ1iFBmrBZ4C9DCKtc7zJ9MMiQToMaRy5PnnV4F1Q4gtjfi6wSBvEyeDTYjTZr",
  "key14": "2dfBjEwE4M7fPSoUSMxWibfL3XnKeGrottaKb5GerAWNuoKuX6M955UHD1ExQkW18oNF7ntBigM8xxHmBUmGyiCn",
  "key15": "2RWNq8taafSypWnkXsEsXt2gtULWvroTHy4AzDRLbe9aAwy9cu9YUayEf7sYwYYaDQdRRdjiPLav1THLEMFdY8RZ",
  "key16": "3oio6bCdgnJPHB5NKaHCVFUgoupgwbTvgCcAUsPHBkSxCUnd8Yb6rrBrHtvaYy7LR6k2DuoXw7AaJaxYzEySZfFD",
  "key17": "3wBq5iyrx8KobyhWx6frGMuUfEfePaZzHNmpZ1VQ3iqxPLvJybG7hMaoSWiKyVvTABAHWENu1R7G813Mv4bj5tsG",
  "key18": "67bFsCqENJdiyQf9SKZUBzR9vr2DxVigmdZJrtHotpybZiTBH74LUmBHVXHTbME2uHnDCpBmuXQpocQwDts476f",
  "key19": "3aHRpMKyxqZvbjKYZzndmqZUo2oxoXd22vtdZn3w3E3p3j3fja63qtcczra8TSC9KZWxAzbD2wqXoh7E2yiApUFJ",
  "key20": "3A4BMVNeFduR1V8JnnnNb9FLWwCqcFMs9AApitJbDu5QaBecwkfk3rw1YPGP6FL2puYbZPoe7Wheju1p8xGk2bDD",
  "key21": "57E1kBRScVrYs5r2hPNSsimUk8yRMUpmdAoLWZXZbGybKErSQDkY1nE9frKSQbyaR4cQWU5ubwxTKThP9KYZwifU",
  "key22": "4872vJPs3zjS6TJ1hRGEvTMyVh4NeHwWCtFf8pXTQFZS3AgmGu7WTvThPqsyLooW8RCAf1PLx6U71W6Bet3mSE9m",
  "key23": "4XUeK47z9YHN9o4Qy4CShWrvgY5UawazU7UsTPAZJVeJ3djQozTHKPxj1jGS1UpDFpsRsYN2rZxn87i86MrNAJNa",
  "key24": "5Jrxg7UQ42NGwxugtYba4cZuoRwLtEXagYajJHwccLjeRLoMeJCG8UoqmRUTbmkDpY8RdBx1KK3kGz6JCjt6EcE6",
  "key25": "NrbU7VNWtnfMM7KqWXV3dKXvvEDnAMakG5Mc2UrtN2gi16PZpfjGn5FuAWdEaH8VYLQWk12oW7MnTyhTgGDaUVq",
  "key26": "2fCxrnvAXCqsyqvLvJoH6SKqYXgNG1nB9Av98woDKeyQf9kadfQW3ibWmW96KyqGHctvudUV6bizDYWR59pAHLTv",
  "key27": "3eEV77w2seXVEgRgW1PkXK5RxYczoipGYXdTxNU1RcaNq5TTBUMJ4n33XgqpPTdoD8VX2BRANsRCrsRchTPMzYKS",
  "key28": "4scgmF1kLDpodMz2JRzLZG8dxDJsgUTpUnxiwymwEHjGKd9DDkd6WgAEf7rJX1L6bDULR74jtnYFmvoXL6thSZbU",
  "key29": "pvk7rFLWrwgfaC6jA7mWFoLQbHvYZoP52VMCazRhmVtmD3ksfKEHCPHGakbRS7BXcrC6GN4XLfk6D2wSnHSsXvy"
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
