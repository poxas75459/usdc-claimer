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
    "5VGRp4LtsvBvHcvrnBiaJ7t2VvrfGQk7jgNs1DtwycNP9ExRcS6kexJ8cExwWaQuyUVv26JEkUF3oofQit757cuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hWteUaSdqNGaE71j5zZFuwLqQ9FMZAw65pmW1qa4V7Ye92QupiW7B3UgvVb9QUZKzwkMyS5QCULd7zTMTYQqGcb",
  "key1": "kcC5iJSFLdavdeZydfLvqnhyeojh6dAu5auPrxDFYGY2HmYBgoPt6XofNTSfeXtBnvs41sEVF8GLVEc2RYnMUQ3",
  "key2": "5f4eda926bzxnsSkEfFE523qvDTQtan7A4BqCRVctXVCND4GsJWNyWt8AMSWqoy3FxMHAc2fd9vqyyA7P3xmKj1k",
  "key3": "3e7KoxFijP6uGVGu6186h7HrwcHLHzVRDvq43rGB4N4BFp7KJQd1y5uCvDwg23RxCc6qN4hc2dP1WxyqJebjLd1d",
  "key4": "5p5e1f2tYMssgePmfpyYrHrcyEMUbXpbzsexd9JANWPfTdLbAxhx9eDjzZW1HE5i5mTddEAakzcGYg5E37Cmj9tV",
  "key5": "5FCvihvehMH9MuL55rGsppfVvY7g6RfD8haBpVddG91psyJKZhGjheDBVhYdDFMivn65P5eDcGSvFjuKRS6VqBxo",
  "key6": "2i872CLK6R61UnUYbu2ntgTa2cifedLSuv4sTbtV74vBwVAaQ4QsCVjqCcczzFK7Auw843srGQ2yLJENwBzxayjs",
  "key7": "54eiGKpFLYGw4xDM7h8HUecPGr6EsoxM6X47TFLTcjsyrJUmZHwtHN96qUnfE4px8Fr6QvHduvd9ErNW3RY3CaCg",
  "key8": "5kmvPB8oqAyKqVCEbm6m6eEXFw9gup5wZmBvFcb2TnpkGgPBYZSGg4hvci2okCqXchwi7SiTWpae5AcDZuH62xkZ",
  "key9": "v4aK8nLaNSv7rKv7wGSdJWMar6eCLwexeBybemjXLa1sPcQNwpJawwBsiM6cCvSN7QF7x4pqmNWkRERfqdDGQHq",
  "key10": "3K6PrFmeTQQs3fQERMMTqyr9GwAcfa6tkuBaThR7myVpT1rmYvNPYQa81AHEs5aAZfcZyqSZsQWBwsLtZfnAu64X",
  "key11": "37DfN6F43sLHTBi6Xnz4Rq7hNFCSbq1dkWYPtT4ermdiSAH3fGS1uMP1972CcBabSzzR76AFoPB6Recbg8j15Qcz",
  "key12": "2yBGuXihjKBvdsB2NybtnEYDLzqCYxRA2CYupsf3KV7UWaxN2bqvvYJbEnT6VMauTa5SD5GFpHT2hNqopwFwvHxX",
  "key13": "3VbU531ybUqcCPMngbGpMAV2idAE4RsnVAbv7DbcMhM5HkrQvkRTGcq7nWytRUn4BtGDKz3E3UsgzemuKdvoptG7",
  "key14": "3fY7WG17apSo3MCdv4LcuYGRRwdsM77kkR1teUnVURX5bzjRnGp7CgJZHr8DSJSjhpXro8M9ga1XbjxpfeS17ggh",
  "key15": "5nGcfHdHzQSa4mL4oSVQ5oystGnK7oFPkgVAvN8duy1sc71hWTkppSXtk5JhEh9Z3exCVs7kVe9Z5wv12NTMTskz",
  "key16": "5PrsS1uGSZYLSwxdsKrcqv5kRm6rt1XwY7VPci3fV7FQUxRDyGV73x6Zj23vBjWKJn8nyc2HzEpSHppUaEWcbSAM",
  "key17": "4NWHpJKpZEo8y75W7LRA5sLUMNuzbStKREGCv2eTkF6PYsDQyypzNgThbzqR2qTFStmomLKdGNonJ8zoT6r4avp2",
  "key18": "3eRn46cJikmBV4kEz3JpXSjmLF3uXuFg6mYfyzqPPRVVTi2ZXcxnXUmLbZMCDpkT5A1w444MHGuEMeXLRxZpYH2F",
  "key19": "5AKsgBi68js9ANkS4pWozLyHPepcDEoDt5jZp8GKFDxj7hbpKrmZk22BUGpXXzqvH6srka1mniGAjghWag1hs3ut",
  "key20": "3TkGdeyiu6jVbuwLSPpqP7bM51YpLxfFJKhhHMnsricMMcZBKUARtpHMH5Y4z3wZXgHDVvmKqptqXY93XTyKX3yc",
  "key21": "5WryPJP6gKpAB9BVvtszvDk9sywNtA87oypQTHEb8sXauyFZPLK5wjxBSoSefAWXSqP44XXu4sGegtmZv56ENxsc",
  "key22": "51isQvXnZuFtRiW4nFPJ5bcBs3WT8w151sx97bEZoKWxvLN6iWJQG5cYcWFqWnhmipGAz3a6PyomBreYGyERCDmg",
  "key23": "32WoRvRnL5kCgZfkokyxgML9DaoE2gcUdjj7QeEWeKZ6vaPQWs4yo4RuESpFejob24rnt9TuaLErdTxaKxmpghj3",
  "key24": "3gYu394xQYWKw6nqNemvQrjC2PCeTRYjkjZsLgyCpPQezs9BxRNfDHRaSyajmXhJk6kByrMtbRZ8KatYKUfV5Cft",
  "key25": "2ZGQ2tgKmAqzo6wr9E4z9USfJaB8uCdMNE2agmZnz6JKPr1wNKR9TYG1e3Mq9bcmAQuHEGPmPPWrJdN13WMs8aUg",
  "key26": "EX2byKJEiyX1bPL85KkgCsMaqTXUaSpdtYCGeKfbkeRo8Ti76iEYbRxzwvCwRmpiCWkwCVh5rtDsezFFJPSVzTU",
  "key27": "2BkbzttSombvEDiJvUPZrvmn3Cn7RtYqQhUNBcSMMyU9smUUoWy9PrK67uEp6Hfu4aBvemeVZhU1VUuWbSmggHpd"
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
