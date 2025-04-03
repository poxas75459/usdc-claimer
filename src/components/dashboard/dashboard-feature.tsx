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
    "3aGTXUt9gM7UD32cQvbRZCNgqm4FMsVXLH8yHGbkwyhZ7HwiSdPXfiwy4uB7qTGzZhoWAiQ2zAMcjM7FAhECmBif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jwzweczuXXN6ddXXpjUuXYNJBPLnEoFyXUXcQJ496kJ1HadvPeMvcUur7LDq2Vqpmq8JSceJLWhM634CQN1fBVM",
  "key1": "X1LJS4RaHiFkyw1oUCXAWZaioqijiqtbiLqcbcxe32eWUGfULKHv8MC5n4z9tsVJ65bwCrcuXX3CMZwbvptk2Qu",
  "key2": "2Uj8KRkwvRYtSRok4rtJgmxBsrCVu1xUcQQVU7Cu6iJn1dEjkoFrzAoiiEWtwJFnFB8iAWz19oHtKKSTEf8UxoYj",
  "key3": "5awEwXidW7x1PAhhVzaHXdsUGynh3hZxk3noiPA38FsxJapP5eLiEJc6t66qksKJ9JD6zY5zrXUkXtCFwdeT31Mo",
  "key4": "3338kz7aUWLnzbc8cNC8AVzVDUwqZ4398hju2fqLWLY75cdxD9Rvup7Ee8TPqm2rKJz6C7ZuDeCeLZtZV8RF7pQQ",
  "key5": "4r3rWrbam8vHtmCB6GhTx83WKS1D7GgtU9HRn8oPi6aFCLmnrSE9jZnysZkf4aoMrAKzy8p9Suh5FU5Wpdcz3mfu",
  "key6": "5Nxzcr6rPfbb7GMfQgsoHNoov67eCmps8j4NdG7JYfv1K7PP1kKALeoroinhTfWb3E34cnKcGj8k3tUy48Vj6rip",
  "key7": "2tBQdzwf32wJMFqshzbyssKZ1AJMbJJgtLb7UYhpQuietivq2EN7jvcAicsb1w7AebYdpxYZpVdUkhiK6qD5YMik",
  "key8": "2pBRF4bxLLSEZCQRRXjKmH8egZ3YwdC5Dm481oz36kwCpSvZzaHWAqmvRqd63iXTb7cyWVdXK6ecEq7oHjrbXCnd",
  "key9": "31Cdbw5e2oCFoFoae5yvdaqkFguLCYojJ4owvbAzbUAFHhY34NvoXV7N1qumgTN1Tcwp1AvLJQX3dJVd723efSkB",
  "key10": "3V7fxStyWg6fgapE7aLDDkKtdoNuY3iQPJ8CaXESihqxRF4ebXLn4qXbdowqomjh8apD6KNzugtmBh1kTP3vjaaV",
  "key11": "28AYKeJhq2EKr8zG19nZXAW6rWK5C9rz82jN3vT2en9NQbiKXdwX1mzHo2by5RMeXq8XSS5SZTUAZSYLkjnq7mQL",
  "key12": "4oUBkSFP1G7nU7MZDYi1P5AiUrrkNiVwKaVqYE4PKLbH7t9nFRhFiZFu5Xh5L1XLzWjtm3itkmYsjhVnwp94rRw4",
  "key13": "2UWX8xqR9TEMhCWVFTjcbC9zxiC2B1FZLsPRVaLKKyzLNZjDJ3qZeSyW9fugMEJHiWg4CYeAxqwkHLSHHFDc6Bhi",
  "key14": "mE2YipZ4xoaXEVX1ZRHqD5sHw7Mi7aRvZsCELCGLe6t5whYnooNkYhWGhAZ45xVe5QZ8UZacHjtTDS5KHNYDGf5",
  "key15": "3mAq2vaKC2MHFDNdSEQhYWNHc4gomrpcrVjNgYNQK5igUAz9vAr4u43Jc6u78mQGhNeCL7PSXoSdtgFTp39v4DJ8",
  "key16": "Zp8T7RPheqCcsEVtY6WSgC1kwp495PExE2BvnXDcANwnmDFahwkNuXsNithbhJNwRJdZDxnWFhRzJvoykuhbmDL",
  "key17": "5qcUDo4LqfaZNUVx7KFEdHo3iEjjeRCsHhxcsCVRqwKWJuqZYSo5RbKxe4VY1YEjNmFYZ6JG53sMwSL5TZcy9N4b",
  "key18": "5v6odyZkJFTQRbCf4WxdHaK98RebHnyj6tHqgDAvc4m9r159Rq1vLxHScidX7Tju1vHdwP8FzBEeMbVrQ6qibFQ6",
  "key19": "4cZ7ekXyRN4L6ggN4Ru7b9UzCpB9U59iDYFp2RqrcV6tS3euuxbuzGfpnd6Y4pavEtbcXBY3icQoNVqiasbNSrDA",
  "key20": "BmX1jwtWunBhSveTyFWAm3agRHxkXXYu3uuWNRgYSMVAUFenbPh3YjwtV76H39vpPSEuWfKYLoVh1MDm93wVUT2",
  "key21": "MtubUdWneZPTNvFZDSHVE4tYkw73NrTcnk9UvWsogwRjKf2WW94ReJskHeySmTmKMUKt7FcrHqfTokGwN2ZnmQm",
  "key22": "BfTuRicpBju78NY7XKNFk7ZJh3HnRZFq5ok2vN6GjPXLKnFrBKjBBGMpGvYLrKXww1ApYxz6ktfiV2WANDTgya1",
  "key23": "tYDzB8dair1vJu2yocKfcptCDpXBMkNcdPak8zG8TyudKgRBeXqZvGhfSev5St96eKcGYR2Eoi8AJJgLEuYjaNN",
  "key24": "284QAnkqu9MewtAunB9Z5cy7fRc1432ds4XRTQ4LqmHXieXjUsgPY3a4RNWbZgLc1wYhaRVxrJv7aTe3aGMterLG",
  "key25": "4GPyKUvy4XXes5KfcvDKCjvyzUEoeKscQcWZPuD1pKasKQ5qpqaFkvsb68ttTMJrp53QLZGYDngGhLMd1GxUaNX3",
  "key26": "5RT87pKpQQSWN66RDmUfVZVLfZBadhxmv6695KnR3nTv6CSk2NJZgh2WUBVxx2bnEcGBkJX5EZ6XSxcDUopGtnZg",
  "key27": "595ybfLMb5bF4t9N5k2apnm19vZ2pDBt6PzDz62k4gW3DSnxuR1vcg8HSSFcpkwY95MNQ56SA7Y5quAoikLCkcVJ",
  "key28": "2D2Nw77bBj6MsYx8oyxbpM47RL7dww8AR9PkgYHaC1cDE8rwyzgQe13WjZbKZeRChaGEURJT3G9M6xG8XsEcUimh",
  "key29": "2xwf8rY5JWHKoFHddak7sPevPC78ryosDpQdnNm1Ab6q8xgdcKHuS6YJUJM3phhxWze8NWnun48MyGJ5CUnUggV9",
  "key30": "2yWye8vyhUmpUVy4h9oK1p5XJGYNnr87KWTjYgtEZ6S2ZvL2iXFgeGsGhvNYZeQmugxb3W32McTFZ5Ubbf7um5qd",
  "key31": "EN3edAmCJDb5TT62F2LaJX36UmhkFdgMVLDZ9fUQ631mxQmbXWiHYAxVpQArWjUmdRP6jVapSLCyo3bWru2CxC7"
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
