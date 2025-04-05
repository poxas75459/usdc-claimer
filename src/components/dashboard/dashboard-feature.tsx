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
    "5scqgMKjkaVKBZkrfdPwgzwPrmMR899vLXLJSYKJy3C2Z5DWbfNahUopQJrS9WekUSo8o1QdtriaAUaLxcqox3K6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kwMmrDo8DnbtyPWTUJYxKbaHiknb8EJZvFZDcLyXNp57iwpppocFnkhbsVQoLRJh8G2TWNXrVMj5zyr1pH5yn4L",
  "key1": "5m1pcaWdtenULErQpkwCjALNpHoCvkiNGsKfzGtmQt18eT7wjxRVaoXtUe75fuU75AHUJLKF6CGN9wZbDya1kvDs",
  "key2": "67Frzbntmp2gkFNtR2goMLseRuiHGVoTrR2ostzsHiiccFLxUyw39xeCQWGLD8hKD5KbKfVtATkc8pJM1Si7XPLo",
  "key3": "4oBEPfmNcgtAwkDi5Weenu48TVQ3Dzb9M4DKWgHGuq2HUqzrKGY9QJ612RJu3gSQqkduSscV5zuRBTo4E6U24yPV",
  "key4": "5AuBZAveYTKgtAPpb5EYtwkYyr4G9oeiSxTtAVcypCCpAXPA6cEf3wfFC5kxXLpBAgRXGud5i2AD1nWPUQJht7sd",
  "key5": "3od9gNDUfLnk3831A8pLm1Re74rKvg1jhNRenmuygUvmhLKMPhGSG7HLExMkhFgMApCCtpaDWHw2tnGohocinJrd",
  "key6": "65g8PkstxpksAomxpuLdyaLxMnfFPibLbyv96HhwDfHvRqZpYdbL3J1qcY53dKPusE7hrbLqodNES6n7QatMKfN6",
  "key7": "5FFL99AH5AUCb9GBuKfpBj6nCRgFtzJH8KN8GpYVozfAHVz9rMuBziUMa3ddcztKnskgtXytovyKKT3LDrKMrAkz",
  "key8": "3UjDZuXohjRMaMvEVXuDsGo5CpsFuJR27JprwyPd4pachQrwJWXNDdy9gfcr9icP7egYxLYCKybFaQkqcp6rNUbn",
  "key9": "4N3wdF3TBEVdPVWE18KP47ZeeTqetnM1oT3kp3WcLFU97Bsgrm3z6k7miG9qtkgdtWhH2YMrj2831yhtXHXKqura",
  "key10": "PEG9cDe4BB5uwDvjAZ44WCT8ueu1NiL1ZvwJiPHHQMNXohMY2G5CEeBpBrcwoCZZYM8WHApBYkpK5Aq6DJYapko",
  "key11": "4VAehwE8nSTPJbHc1scfYPRMoMP2sGKsL8UBfZ9hu1an9D5D2C2LUwbcGzXbuGQvmAxGxZsVtuvHzCmdqU7fSpzh",
  "key12": "5wDUmvf6nA3mpvPHSYMbsq5TXgR7MoyEL32WYjxX4wdChk168V1h23pmifmM7nYcZ3B1f9BGVFvjbcu1DbdJVDsb",
  "key13": "5Vf1YgwKSuFE1y5FjWaNvFhHF3zCFfkxX4UcvfjXuvmmbngbWVgSP1PTMdkQRahZeXeSE4ML7kmbYL4vKxm6cgdB",
  "key14": "bsiESScDBtanLn8u47d8fdTNMpcWskV1qP7VBM5EKNTCfKR3YemaB9LuxEoxARp5KrD83vYqHU72SU5PuzVJvri",
  "key15": "5J5PXa8ApDEhLxWTgYPj3XGNwy4rH1RrK2yAguZs54GnudoLheujkEM1DChmMB6riBba4UgYzB4Zj929qtsknkY9",
  "key16": "4vrYAmL1ZHNwyRB4waoHutrqZynhSXqpq7C1JWpKiiFF4dL9wPLM851s36NGpixQvscVjkWFDD25672VqVjdRSEc",
  "key17": "3QcdEppMeZoFbWUKg9Eg5MVtu3V62VdXUfAPP7Az1e8HZ7Rx2Kp2aDtLS516U1YKniPaPi8gJ48jpASTXhp3ZR6C",
  "key18": "ptFhV3Uw9CHBjrnPUT6WTjAouDbJPKB7EiU6XPypyTDjY2fLRNrrdZszAo8cmvfE5FL8kwyb54Zh6GkjBXrBo2Z",
  "key19": "3Xj36Ho4jnn5C8TusefQYHWt85Nu2nE419Xb8VqBjwcq5ZmKRkSbJ17UeaxFtojDtNazpUh8ez1fd2MuEYMXUf9f",
  "key20": "4LeUtoqJ24C8c45WVYuJ2r6wUNmMZpndZEh8qjpR2gHm4vNAVSC8GMdtZqVWkAoP8ZSFyafE2sBwytVu5p3z3b7Q",
  "key21": "2ZSC9rvhUwFdn2SBaBFTdAKeFpwKmtfZEUfMhfa4MWbWK45cmsEXGGLGPHMryyhAHbXZJkYvRPuoB2ZxsEcJWaD",
  "key22": "3Uaxcbxo8qDQyVxdtvdE9FvwjKna9kNPEBww9jLUieCdqhQ66nyKypzvVKuB6KHEn6fu3R5j2cbn9fR9a1vWQW5S",
  "key23": "5QTS1mGsD9ef95fWXpYdyFU4XHRvro1iW3YSHjJYJjCG4tDst1MciqNyz8wMRhNYtAWbgAPjjUHKuFSTQTBcknrw",
  "key24": "4APWwkpwfM2XeDvMbBoFiAAWDYNSvY1fMnKGqeCC9tStsQctQmXJrXnRvNGZydKmLqR8rYHNi5RNmUJSUaGaNuYy",
  "key25": "uSQHaYJwUR4qxj9cux9XFRW7cED3pApitEL4BWhv1P8cGKn5TmB1wm48Rr3qBnXZRtQA3YQqN6yjpedxZeiM6nG",
  "key26": "3RiBYL9FgK83z8vtNLK7EPwP2juEcmjksdFZyWKqivjUe2XM4ftzYhgZgMTUQgMpcLpSAAd2zdRay2JvbjNLQxm7"
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
