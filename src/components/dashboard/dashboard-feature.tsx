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
    "57XYtUoDgfZAnHnHPCHQurB1472pR6hMvXkkrrQYDoY8qrYEid3Jo5Rrhw9hUmP9US2x77nfvws4ayxDVrXmmHfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V2xKudWVKDwwGpQdoNm7hgSrYquTFPau1WkbLEfTxWR5y8VdPcDHMLprcSyUpUVv4fQ4FqrEY1fdKztp2co1PUz",
  "key1": "cJoB25nqmdHJy5gUrKk1J2g3m5YHoB1T9st3G9w1TRbc6q7r5gWo6NDkSMw7UbhE7ocnFj6UUpLY7ZAFQa9qfb2",
  "key2": "Bnuu6puhXmrHA48FtsW7UjJHostsHn4H8Vn64iHTw7HVCK9X2mUs4cpjC1iZGrDzqu8twrPrYsNeY8MpXiDLxnq",
  "key3": "4gnJ7UBkeHw21nzuVUpmMWhV4kNGiN5M48DuheeMQFntkrrDfsXaDJH29yhCSLsafArjXNVpZ6vJNs58mudHBFDm",
  "key4": "2AyVdx6GtTg1a4Be4Kxbadb2XRLUN9hawyjBhadLrYbHLifMmAXE1br6i4KXHinq9d7HLh8epD6MehYh8oimTfT4",
  "key5": "4dqR5pzLSayx9YNQiJpTfDVqsuTW8a6Vrchf7go5e7FHKADiJoKKdVXDL9BosFbEAZcwkqqbBiV39BjugGQSwCxZ",
  "key6": "2TAP9B4WxxXrkLMQhwUqB41wQzfzi97Pd138mwEaRgHFbdjp7CnmkYsJXCQNFy6qksUynz24tp6yzp22TNv99S19",
  "key7": "3632dPv5ohx9mjuwANjA2kqaKhxQmx6MbsRQk3XsPsVFLGgstxXZ3fsAafiYdtjygdRfxcgAbeQhG3tuTaHSomDm",
  "key8": "53HjucShAijWg4zkZTBUvujiNxpyqCpGfMGwFbpnNjacmS3cFKfq2M7aQ4vEXr4DwVGUcAr3uUMUidXK26JZUF66",
  "key9": "2Fvd42f5cmGtoawq9XiVsfZpecEmmM6bfGPtkpnMSTJkC1onM3HnLbRKwVaQSxZMvVRsZrDBeMt6Fjbns29ZbwKo",
  "key10": "5X4WmneU33kL2ALjWepeCJRGcR8yb3EXAaSt7UTg1t2wVYYSCupCvLaha7W1JscSYcAR7fQQM3mXGXvwsSvyDJg8",
  "key11": "3CeU6t4yyTMGvvff3NiU37RLfFskmyYsKkaxZFAKCES6SS1pHd5RnFbb8AaFPuNK6enea3DjSZkXVGHg6c2KqohJ",
  "key12": "cRM2vwhGmHNHPEX5zq1fXSt3Z4yGUc5N2qFzfmAs89vtWVT9DPAthzGHGY9dB9v6x261d44StQ2ACqY7yNCKbdS",
  "key13": "5msdoCiQZG81cpjusZzV2Cn629XT3xAagvUcXWMvUmx8HLQ555y91ZR1VM6nzJxVVApWhiFsVnTweg837whYf9sr",
  "key14": "3BRPoNgcYSzQ56trR74w1dZUKZPCP2s8Ye4sM9gQYbKpqkEbPqQ4YJpsf9ufeAoMkGnFZYgXV9ZrJkxPKb2c9K6u",
  "key15": "5myVbbJpLnoGFt23avxQ1bnw2DKZXWThYVsBqSqpgaz8awMhQGC4q19xucVu8e7wgXYVftGv6mGhxpiH8mkhV7aB",
  "key16": "QQzs6KuZa5fkAonMi3qnGhWEYVVHpKTTeQySKxMeLmdGBWCVvAyFNYGBRb7CyHdEjKUniJqTXtRPrDbPuKYiPJm",
  "key17": "2GXYtcy2Tu39HaENEBGSyaioaFGbbsCNepuP8Eb5papFZURuErTfwXmAsTnzofVxRnXvpNEdoT3URyK7JpZYVaRP",
  "key18": "2fPYEwQVQ87XDh1AVVzGcB598TzvbHHMP7fjC87CZBZAdSqsEWCC77rkz7SWyvsTnWo7z6MsZ63DhfBRwbT8XT1D",
  "key19": "2pnfP64wdQVaAA3mjo8T8MZEsg3t7uGoWH3G6b5PyDN7XDLsWjZ4zSXEqZqwZncutMszEFeHFnzYDhG6ZEAEXx9g",
  "key20": "5T2e978MP4x38UQWMPZ6hHsKJNo6c9TcirNNt3t8EmZwx3VT56kZCFpziQJiXnfDAV2kBpvtwC1U8HDux6F9Cned",
  "key21": "5rgym3xfPm8pYk7tSU6spfBXNLu5fzrwCvd5rdhSAg2qvx9y38u7gn736nfzfVnakRi6NbnDit4inU8B8q4oMfib",
  "key22": "5EYk6fiVQAQXK4fw9PFVxWjoeUf4qxus3S6ZZaYRS88pD1dnfKgVa3QsEkpmbxAnEEmrcAar3q3vg1W7Y3aYfv5J",
  "key23": "2mDQt5TKVAMwa3E86aeUvPp7tt58SZhabDDZsk2jvrkc8bAU5PECi5JsqPbaMVU5514xSSMDfULgp4aMvPvNL3N1",
  "key24": "4GYzqNN5ZNPrn2eKGpQm72Rts7iJpFzUL35gVqhLpcC5X6Dt2TbHcPFPUmeFTvJSGYQywYK4BG3tmKiy8h6F4Tsc",
  "key25": "5twPBxzXp4XQgmsEY7jxQn69GrvXiDGbhJxYuTT4CQe76EYgEfVL9T1dVuZr1FNi1m6VAJMYrbFom27LxdVvNLHf",
  "key26": "f2Y8BmtLG5G1yb7H5YqYovLWpStMGnjrysjEoScZ7Hyg9y7489JfXBhWu2mnYp5kZeAs1BGPmVkwmYVuaHHkuW4",
  "key27": "25ruoLBbHjmuvMGJbwf7MmgwfqyiMuRvmDzN8yT5y9GDb8qwQsSsnvChhaXhkLynXPSGJNz3BcFhKw14FLFQTDva",
  "key28": "4k4eFa4DKACj5QofUXUUoA7Q7zAcdwQNCN6SCu3GHRLpHmPJcshME3LizJkx6a7hLVFfUC13yJvZJXyRF9tNfQpn",
  "key29": "Ndyv6M9CU3UpYJjnKpyYUQRqPhiQH58zQKkQzY5NTnN7S79uQPrjoLjoCWBPP2jLJQCuFcvEZsgtatj3Fi1qqxP",
  "key30": "4jtuRU1byitCek86eRKseb1i16aqAttd2tXzevMeW8n3PRwHyarG5jB4Z8P9Q7mkZyeg9dqz4UNGG9byaKtm7AG3",
  "key31": "3KYZzJTjw6r97Dc8FQWkuVrrbzMnPNzV6gXxhQ2e5BQHZUTi2ZRVQmz5Br6rz6AoJ2z5FN5VVEo8ngzHExtZCBnG",
  "key32": "3paUxtJFAcKtzrPMfz36RuswqHZtDhib3WKkK8eMoyYYWvc5v23Qgnw93CqapN6YWzvo7KgQtcde3BAH4dEVVbeE",
  "key33": "2DgULecsSyC1aphX9QugQjJ98RcNAEWteZE2rmirfkfPKvFi1v1qBwPqB2igb2rwmMy86C2pzZwL6q5mYYzYZKTa",
  "key34": "2wAcEVW8PsBiVQDvfZwQdGkTKz22BtGANZNjUeRWzV1jmuLVqjkHdvDoFxS1tTgaf22ZfMbzngRDGpSgmhyp59cD",
  "key35": "56KvPAwquAjEcJeyjHZJKodCpBDw82Lu6DbWGFtj5ofvt5yMwbhFQYyPaqkyExAXMPyEkDyw87m5nSyfyfUFJ3bj",
  "key36": "5Nk8FxZJsDKxNShAY2hCXKoDqQTbHrJ31ejU6Fr95vTAoCPzZQc8Fuk2YqspkMLcqgJwDmQ4bpJqyyKkoxTHW5BL",
  "key37": "2V1Xc3nrMcjJHxiVHPYxNhGv4tPSyFH85XqHHgpxU7Y2CusGbPWeppbwzFyGQKfrH5zAZE5RfEuyiDNPj8Sw2brB",
  "key38": "224SbWCtJLVP7f6Mmu1hiViNkWNv3bLXMoeio4nqhp295gihPht1R6RfoCrNpK6rj9Sq6rhqDY5u8v1qAjpB1rfy",
  "key39": "2RFd2JZuSB8MMdbj3tqo2U7Yr5N1Frkg5v6mB8sYnMZboyntPrkfCGUByi5taRofGKkXf7nJvZHNoaRE5Vonqov7",
  "key40": "4EuaS3jshVXdkzVCiZqjNifmstU9tx14J4UxZZoF8dEUF9Uogq4ncdtjsmQT1B2SmytuRQPnB75YZ4DERKembMkG",
  "key41": "sk7wmQBhXNYJo1UvbuoEjZBwRJxvwnmqpLssVFnHpQKbVrwdy9RHoQ5CLhp9m6nf1Z5BZ7UnLFw3u25ygev4b23",
  "key42": "9eLCZFXYmeJYZfZK59kKUG6ZNReX3q35AxGLVvYyuPV9AcHJvMw3VWSrrALfgsyrtdxUCEiWLLzWbhurfK21iG2",
  "key43": "27sworrfm1KihtXLtkzoxixPitTwRx32X95e7CjsbPioVjs61xBrcKes7nJRCEqeUMLFmhXsdhq9kfgZ9TyUC7xf",
  "key44": "4ipE2vV7bJc3WBcaUjRVgAop5CAgkTsgKijHPNhRbxrsJnjCv6ampoeen7LJjud4t4fgWcfA87rJxFTKx8Ptnwmr",
  "key45": "J2Kc9F7ai89HjpP7sjxjSoT2PrqTkRmg8xahfQM5m7uWPGsfNDK34cjtr64H5xJoHtW3j3eJcuNEch3xJjTqQJY",
  "key46": "47q99Cx5yQGSscx89pnp1vcAaMUkgPRy2SHA2QXsGKYm2zvGAGLqAzXUKzgH7sxT5EHt5TGbpfAfYoMEka4myeof",
  "key47": "4kEGC1GG7myNjG1EqtvtSqXq6mdWBES4FL7245dB5rRTH8cLKuvsHrDC5iUCfVPYYUPCECZyV4ZBpbr5BwPgJ9V9",
  "key48": "2q5HmsbaJRZ9knRUFhyKvYs9vAv2D4qkGxKaKm5WmHPLFbcqT6s3RXTdeebjvMJMKUzQhtzDkeSPNTUoiNkjqpJz"
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
