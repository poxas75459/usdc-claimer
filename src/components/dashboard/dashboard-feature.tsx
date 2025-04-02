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
    "24v2grCocYS1iPu5At45AWACYdJTGmSzPvgDKcsaH8nPSJVeYX8QPEevwv6my6UqJTbgpoNrFeKprZSvE4c2mKKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EyP4C93GDBNQw7DAGkWoWao3vu1yAJxLuPLeZPAm3naM1o44jpapZ4rHDU4CdRXv3UN2pVCeVXiBJmvJN3SqGXB",
  "key1": "kgPbxAW3PytSa2WYUhjQnUnwSpGQLEtXZfNTX68zqin8szG3BQe2qMf68N5A1AdL79uhrFoypsFFcrpJVXfyNCg",
  "key2": "3YpgGw99wfESZJvjpc3Wojp4JSSr5su2wyLfDUFM7X17haCfHD1SmWo45gHkjKWYV2XqsmnaSyLASXQVWPmsVoRd",
  "key3": "knvVgZcECJkR8pGLn678bAUovQBkfPsZr3316r6yyH4sB24V42b2DWWUzMSKcsPqqXAyyuKpwcFemicBb9CdNdg",
  "key4": "6XnktMtqhLN6FkDxxTDquVt5QKeMkw6dDnHe9c5QpWfzjaWKB1umHeidLnJY2o6gPAAAdYTH9x3EyLvanTbyBLL",
  "key5": "3RHkWLjwWnAdWZRAZKGafNM2ZU3UxBsP9tKt3f4xCWfv3BERUFoscMCzwBLXJ1fBxP1kRUwQYodWKibCdXXo7KDL",
  "key6": "3t8pFuPsfdriD11RfpJ5376zDDSSq49kma2mgik1ECNNeQaHMrkTpGn12CvPd2WCJ9zuuni76gmwAs86rrThrxjx",
  "key7": "5a5kxNL9ZogoBVS7GbSSmzHgPbUB7Ckje32b15nFMb6yzBX9bTjVXGzaLFbS9iUuqNbSdXyPQfssKr6HPFY5QAwf",
  "key8": "5jsn47pJexfAvLT77FfxtcsK79mm1jEwiW632PCA6ngK6pmwmQBg5QvAJuJ1aBb9mSj5PhzBLEwtVyCjBCcfe2Xj",
  "key9": "2gX1avts2JkNHpo7pz5a2sY65jUsHRuW39A8TDmwkTBUCSwvDWAYg9mdW4Piws1snkAsEARW9mJQsprN1Cyjc6mX",
  "key10": "4pwX7C3q7Z5D91syyTDz8s96AyqX6iv2WRFysvn5sxvbwY1Kp8RQWRbjxoAwixFaRwyPGrAZq6FYeWYspJzzejCc",
  "key11": "3RhsNZW63D2i79mfV4VoiHezM6bE2jp751zV7nNRkKsaTz5H4cDojfVqxQFpHnJHY6UcyxYKE2rhturRzFDrwkkW",
  "key12": "2LeWN5K2EKdixicqBwe1kVAYuivi2X2iJrhzt9QTNzRAw5vMU9oZ76TqyVc5XnixaEU8KixXoaNGCFX3J4w1HAhM",
  "key13": "5XFbcSt3oZZb8XdAPWAqaEM4yXv6yNjEYuPk1PbNggJ9uNwRsNSUSY9PxGNbV1iqGmGm6J6CNACBxWhWarg5rHWn",
  "key14": "RFeGS6ZXYtzJiVMhahr4QreqJmFULvGsr3hUnQ8qW9LeBWN4s61Lp9rNeEhcaXDcwJ4TSgVcBpGPpxQR31SxLLu",
  "key15": "56ThDCZ8jjBXSzN2ZfCJguLpByLLfGs3T39ZW9gZQEL5H5XoLm6CXDwRX8k7KH6DPPKC58FuhtRMjccCH7JkfmMC",
  "key16": "3TXQexz6wc2vbfJwRcwNg5MQSWNsbZTbqcTyn1pAMZyJbscBRRx9kCJQGJDP7UQAtDLQCCcM5jo4Q3gu165Du2wu",
  "key17": "2ZLHjVKYGxgXwFZXZJ3UiQuX17RB1Lb5Ek2WRo1JMPYoL2yPkoW13Q3VGg5WQhtNUNSNy6UXp2E5PycFC17wXXTC",
  "key18": "5HRFv115LP9ayuF17mBJLcEwiq4MqBLxDQAXyAJD1oa12DWxpJabFqgN15XFJRrNKgp2WJFNhLN7Kiz81j2Azkt",
  "key19": "43CjAoYpWcARSymuY3fbLYutjqvkvnhUZ2nJH7rhtfMLzLo91riF9Amw3W2squrFXz6sQBZKYhVSA94M6XrLo8t7",
  "key20": "4vvJy1LYHFfvqwtUGM9U2mRJpXmWREyzwSyE8xGycM7uGHjAzz1PoKpvm7CBSrxwND7jFKpnjiWdF8ZhkCzfCD3v",
  "key21": "4znZJv1aaF3AYm4ZVb5eczhq6uKQy79wU5Ty6Ncs2r6xkC6JwAGWYXk8QYaLSQhuSNZBu22RpKHG4kbi9LuQjuiq",
  "key22": "4twomeP38nQbTm1FApoo76vWjZpeQBd2jGtg6w2Q7TqpYTvLMH2Y1uFQzoj2EPtuuBa8xwHCVhGBqUxU2erN8rTD",
  "key23": "2nvBCRWeoab5zQ55NcNw94ayvqzPBMkh1jHMEN7efzUDEfkGEye6B2meDj1PmQFojVm2DvweuVNN85Ny1MLywZaf",
  "key24": "2VZSLxsLouKYkvjKMrH8Kn4UQWvWyCUQzQAsXEZnnJF5XxT127Tmbn5dXC92aHAZcp153Z9LbenZ6NvhnR8coXea",
  "key25": "4AF1xJqZB6D8ifsZG7KZ9q9RSBS26kh4psKuZLEFzg5XZjgvtvcAqJcsN5j1afW7eR8sxhdZwbDKWTJs54spj9i8",
  "key26": "3yRHHheL8epjX1iqMzcDdqEkADAjHAMV3QvnRGqx7dQVP7nqg9iHgVvbeRWsDgyttjytfwPo9oBP96PwRUZQLAC9",
  "key27": "QxyYPKm8GVCcScWgjsSvNnJ7Sc6oNty11grpApgAw8Q9xB34NfqbsAUcJp62qVo7RGSdaxyQjj5qBhz9WZe7AoV",
  "key28": "3x4SZChmXykJyef16gENYp7XMCgKauPNpwugTngLaPi6eXKjQU4XwC3DjXjyucU3EHwDzZwnEsSTUdC6AB4o92Gv",
  "key29": "4Whm33vzdJxzQsdXsZgQ6njbLZDg7WdwkZEx99u359B6v9UgGHLTLgPr2m8X9LyJSg9sZHSpAbTw2HvBjSQNghWS",
  "key30": "4yxESynZpXhHVMxcXZwnqJXAHtLkyFfZ7A1MnMnjVchzYUvigoTGnAw9uKLE43DpCsCw8hJk885r9kgHsmHiWPRQ",
  "key31": "5sjb9FzXwaUyGtJzVfMeqg5ARukUo4x6WKcCKmXgPyP3kMzYH1F6969Hxe82XdQST7xw5DrsSeDLznVtMqEGKzTS",
  "key32": "4qddmfnqWLPosGvwdEcR97Pf1Ux5YRMqy713Ks9bRtpT7t9o458grdaDsTA5tuPx4dt81pGaFAsftR4sADfCkJRk",
  "key33": "5DkjdytF7GRpp7V6Z1hyE8KnUdnQAwiDWCU9JGFbkvumRMXQQKn84v7k9TWX5h6h42BUxqFk1sQNqJuKYkbEM8ZX",
  "key34": "62cePucECvMiVpCiuTdMavFZKKcnK6HAFLcfL21V88pDVKftTSqTQFFrFuxPfiFRwyyFdy5TVMFqvGCLCa43GcS9",
  "key35": "2QZrbxELuMyrCrhe2MeYoUvBknCyufxYC6ZsncWRHnF6JZPshsUp2MboPgwWbhDFBhYa6aXqyAijsToqYBb8w5Qb",
  "key36": "5DogU4cPgNH43QoUjFacaYB29fEwzLziwi1XX6gV1wuAdLbkgCYTLdntFspTYvD3KCHBtM7oQhEH6vWobAup5gzY"
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
