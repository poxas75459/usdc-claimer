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
    "4YS3uvFeZuQDEeExc2wzMSqbP64jcGgMkzHUsA1j7JirLRNx3Yyb8yTE11psMXQU7kqmxdfMuddv2Fv4BbcLvjUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "swAm2byXtyv1u8F5yGQLe6t7brY6TCDhCcyFXTTbgTutUWLFJ8dCC5ioExbmcsGNffx4weCQZBLitBv1ToY3LeK",
  "key1": "21J9LW2oyRMhF45e7MHonwqFvWKWD6C8tsoJW4cC54BYjiCK19Ai8JVkiEQ3SY2pkyGaHy6KrmSuL9A6s1kY5Cyz",
  "key2": "3jvEH4vbyC2SXgM4TeEnXySJ8fS1FNWAGYSBwN3QtvS1xS2jXDg7wCxxStR93meDfs3hTKVCWpsNW5tJiVLqASM2",
  "key3": "BYKtWitaYpWuhp8Tq5JpGYiX27vkLeq2vonpyg6ax2BpFx9YAMNfJHrtgjApvhR3sEfVAwW9BWPnJSzDnUyMdAM",
  "key4": "3USZS4j58xUM9V2acVHpsaUZA31s5WhyP3DfUmxfD4UQ5PAtpVdxR7yDnVRCdLMXSaeLU67Tzth2HywHRGwteRKL",
  "key5": "2kLxsq3QsgGgWttpe1DNonDZ3fZsmhHLAhAGfYuGnvDQyeZbQXaRU5EUCUdz23bLEZGHoocpvWhRi58nbj7AzTom",
  "key6": "4ivsU2yoU6r7xQCAgFBBxzrUBX22JrYT3aEaAPAc522asfB1E2sJwcH2AsvUvv4mnouznxPGnkxWgu5dez8bxYgH",
  "key7": "3WHpLvbbayksx2a1x1La7LSgRjc4EwcbJr35YKkPYpMXd4P5s7A7wH1uj9WeF5mKW6RwojU3Gc8HftCfk7wkGzvw",
  "key8": "3ubPgPMfV13WL952iuyh72vE3t4cSwQ1ejWP6K4SqenjuwMVqQk51SmWkM4Z46ppdfXLz54wXtwqVQJnWuR7Tu69",
  "key9": "s36Kz89gfNwsyFYfzZHxJvm69NscwfqnQLar57tYrf6NNcHCPEiTrw2V5nx3ss3RZzGw94RSTnCEfVJdTvPEhYy",
  "key10": "4pUx8iRkp5S5vhuo1hbt3GWhKdUgHHTioeMuLV1A8e3KsRchcLto2nbvPgk7T4znaYDojHCxLSS9GUeZRkHbKTwC",
  "key11": "4B7XoWusgYbQhpq1253eeZSjALYcypxuAbRoabLAqahLGqJGKk2Mr9cbp2CkGZDCfsGb4uxc29sxyyJPJFbJ4aG1",
  "key12": "3UdW8WahGLPFJBu4xHvFFeXQBCgp2kgnrntDym6Sii1A8swCeZYXk54QHa1528BEGyVc3anC1tdDMLu61nPGMB6d",
  "key13": "4673AAH3jv8PVNPn8j3iSngPRdqqPYLNbwcBWuj2vVfwZgkN1DiuxkEFBdFgzJkN4VnCogjkGuiUDY1F3udQ3aVM",
  "key14": "2bKJauNoPmjMzqFM62P9KZLh1eG65KNy5iTCGdsKw2tkBYfNTEFiNG7ZouezL4pTCjDCNQoGRFk2JBw7bs39acsp",
  "key15": "UJ91ZWqQD7K63EemQfCyuJvbXhGMJmYEmehFfsMhahsTUsABqEWzcBqKAiGFwtwjEXJAj9empqWnudtiC2yzY2o",
  "key16": "4w3wy9dEEhPmXRWFxY9ZE9m719ggNh2nvNxJih9qG4Zwe5pynJ9cgeo6hJTvszUh8XxtSChMEnQe2Xr5gfjj15uQ",
  "key17": "4k5iuF1ohpvUngVp35KcNnGVTPKvPtd2xrCoW3FrVTYrQazuJoDEszXijJ7toToV2PyjYFxEsG7tCTXqs8aMPivP",
  "key18": "5zDM9G6tMAhf5SyNhiNkTNnP9zP3E7UDiTp63og3mTpZLx5cphY3gwYKV3R3SxsNAnmZfzXd25rKWvkhPVk8j8Yw",
  "key19": "36JHBW2XixWKfuvooypvUGqBkiXB1nnWEVZ9oTA8r8DQPQm9bgSHWyCT4zgpxs7w4L3po4FRu7EAcMPbUD8iJUbf",
  "key20": "66zxM6makzT8P7RUY73259vPGtoepYgs3aNpWEfWRWGwemfC3vJfRgBhzNE1CYNSNdSjsvcC2Z2AAPTRJUDFf3Fb",
  "key21": "k9ArhKgFpmwnSpbg2YtLb8tCToATf8EDkfGMpTkfsFNwWhDZNNtfyhVNgWcFrVYgTu98vSFb1D3pNZ6vVynLJs9",
  "key22": "Pzg5Pv78dBj2gFwLtEaQEySpThpGm24S1aopvTerPCP94j4j5wCT4BEqJPFwr71wUKj7k4FfUbq2nsgnzrdSGvd",
  "key23": "5FjYaWjxp2FSkKGxCc95BBhQ5rco9sqFa1BhaEfX566NDKZ4kQsjs17nAcZGEqB9RupyBxpRbPvN8FMcnKhi5JLx",
  "key24": "4nxNBxRgWXfa5FTjfswNunkSUX9ubJABnVPwygSHcVHqPd4FRicvARaEci3eQ3uDtbRZuqHs2edPbm8vxdrdEe7n",
  "key25": "xAMu8QfCZMtzhwhGC3mdeiseCwf8iyHCXFzLWeURLwrAqDPLSxGpTBd7pEQuLmdT2kwEFz3e9fPTF91WPRMPoct",
  "key26": "5oy4c2rekVXgg5qFN1mEHfEc8YsHb5JGa8rhGc4fQK1CvFBZEeRmLcR1A92QT9sDA5pizUR5S3qbz1mFQHoFvHee",
  "key27": "5mxUDa8TZdxEXZYYZB3J64PkuhfwNLe8N8Q33Na3CeQjS82QpqnuihtsXMZfJZYEWDgp6hsMXfGp2NaxhkYJd9Ev",
  "key28": "3tTgJXftWySoF4tWjhRu4jEYHR1DykzrRdv19rgYoAb3kyYyeDog7Y4NkRKtBWdfBDwxSBuYcdNQj1Uh8t4hoEDn"
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
