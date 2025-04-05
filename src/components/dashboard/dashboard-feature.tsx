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
    "37oKgC4Hg8yc1ibgzDntvakhPoVDVm32kis6tajohGJR8ZDSXbAGQTQ8bXnsGEB2DWTmCVFcXQmj5cp3n5RU18fk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HsoLbwAVvXfWJnfbJjTp4SRQmHBwbmntuSuzhjw2AYaimNfP6CjhcvfzvdKetQKfq6XmTDDqmyg1EkLbx7C3B2q",
  "key1": "3seQr8nGYfwPAwf6kHZbLaKFsRrsJpinSxsjiz163PFzSLxADmCk7s3QjJ9TgcZRa8VacHGDbMHM5nC4eV8JaXy9",
  "key2": "4rViaRPwAFM6Jbw8aGnnH5XDX6JR7DhAXjuQKLoys3XvHT8hSMYZFqKi6YiEJpwu1eKzHkniBtKHPB8bTy5ghmiv",
  "key3": "4ya6FrcxC97DUmg3QFh9zJkK9FiFXF2UmffpcWmraUwfsFEwnSeasVu5UgfiAEtriuDVZekRZ4dETuMW7pN7oRj8",
  "key4": "3H7xyz1DS8G54E6nKd7m68TNUCMYwW8C1mykQfoDFaAtatVmPYeXQK9ZvJ7SH34LJxethTqRmGsTodj8ZQaYnFzF",
  "key5": "5F9nuEKf9L87YRvZQtYpNQmG3EJpSgRWoZ881YYGBYx17qv5TTs9iLxDU9Sb2sqzCMW3M5o2oMvGhgm9ViTavkAB",
  "key6": "95XRzZdaTsqiTDusM5NUo3T2qeeNKbc6N7hGzgRZU59r5oBaXUigr4PTvaT9eyeMrtvGPFaWt3L1wGoTbKRgTPQ",
  "key7": "aLon5TyFbGgbjktnL9hnL27PCvofdR4DMrAzv4vjwQ65nrYUnnCARK4M9gGvd3NJXyA9yRJn5vni4VCeThVtmWq",
  "key8": "25bjEtEFdkTcURaZoqXKyKJ8vqHzZWBcgVEPDyptu2aPtDo97yX7wmZwvATSw43TEkjetexzuzit5yunzUrnqC8C",
  "key9": "4skViLDrsFGH3LmjhJ1QrskwAAMEtJwjkuTBnQRoqjaF98rWztm66LZUPSuP2uq8LfT6iYU3zpra5FSLxkFKH9t9",
  "key10": "rZ7yKUSrCsuq2kbhyc44kWkMmz43haJgLAPCFdJguYDTYjm6dTu8p2Q85uTjCMTqtM7E1hZm2i7hx5NFUJeA5nH",
  "key11": "5ymoRV3Tt8t2HcA3URAWk7PQRzwdtGDDddKTEtvVG9a3o77DLvY6XfpP3mCrgKhSFHaTmfMeCnDESWowzj9uU5gc",
  "key12": "3qatxuXaRVXY3kbCryMajSQkppw8r5yhgxgPG77JLaP751nG4ZxueRTMSpyoHz5REm8ZR6umdeYG8va2PPWZp8bn",
  "key13": "62XLvr2VDmvceHmUpY8r9bRRWCjgYmVQnnmqWfibbpC6vvvRiTfgxgcWCkuEGF6FZThXzEgWEPHUTLsFEqrCwep9",
  "key14": "4MMsx8yuySDcXPajERWu8FRzFmYyy3geM2PE2egGwfLxwL54HHW29o5JjEzebzf6YKUE9b9TbvgCEwtZaRGj4qup",
  "key15": "2748CUFuAfQMg5VKxkMqgPV8CsVh1o4dWLEce7oyn9AkeFMphSBPJRgJNpS3VrBiRhmYz876HWUbnyYzoer4gNcg",
  "key16": "22BkAF7kRvUYLhv1M1EdJR1tcHK3ytz7f5UW4j26Lz9i8DjL3RdYfiPZsskemqeJvz4Si9iNo7fFmZyW5VBgMZHf",
  "key17": "3GSoa28gwviGXfrSyyfNDvyUDPKUP8mxyEbeFkJsPLMYn1VHihKL7yj1yp6ADFR4Fr28znhZAL6RqCrHQjwF5zdU",
  "key18": "4kdCVCmXB3aNVd9XyC6w3K4m65ci52FBF2MgQHv4iKbyAuQLbyZuQfAJA9PKcPzqtDzynoGf3rWsW9cfpRYcpVJJ",
  "key19": "yEuTm2iTbYRMA45gddiMtWdpQc6vJGuih1mei8qix9APYWHjURgSJyE8GmrBpKECCVV9cxFboWXc9wThcHvZP4s",
  "key20": "2JZEeznQsLBu6Re1HmTzGqCQf4HpmB71qkDo671NojZchghnfGbhi5FcEZ8e1K2m6w7BUr5MwxTRfUaAYAfy2znT",
  "key21": "3LN8dnZnBgWLYTZTvhm7X8zzM4DTtrEjSoUaDjfrtomTraHJriE4NGmGvYywmSqbWbKKs6zt6xF62VMBHF3Wumm2",
  "key22": "hjsudfZLiaVkVdDB3vCzbtSv4w2xCwfSx6yrBmBgzLy9Hw9uqeW2RgSaNrsaobLHU2FtjRyrqMATs7XTiHtPBFi",
  "key23": "LgrYdWnic2GneA5kpZyP91oakASVyFFaEKBcWonUTc1z8RJuKqnFZci3dVSUyDSEGwJs8MsvUPxHpWVVzmfL3i4",
  "key24": "3xiRsKyPcN2LLovjK37cNFzYuiHsa8Rez3dj2PwzLANvgaqJoGcr9YVwgbWorfFGbk49JvLYb5zAhKNo7927pccC",
  "key25": "5K5jkhdyR1p4UDNBhZirjtUk5EHd1jSBQcMvv6j1N4z3CBUAqyPtK9gJkRAMrnYWXxbeSFMbzocnQ4KhBqcsbDcP",
  "key26": "2hJnNchnqCpMZW6g6Fp8zzy3b2fX2dwQnxUsVAWYAZSLry6wHPCX7NE1VtfGiu9mpYnPbbCtMgHJLRfccXgYWTiL",
  "key27": "54fsowaY3uehfWyYvxcvTfciu6jEGMiMfcCuKCBKsRj44TsG24Nup9pfRcyqZ4NWdMxbb7VSjKPiyFAP7zSsuxuz",
  "key28": "3vgsW2Jcq8SkmMSCcFVgjr8WKANGPZBDWJBABVsNA3jZuFwp1r4AcvXVbdGf3Q5dVR6AiMBjZC1EzSQoJ7G8j3xh",
  "key29": "4jC5tPunphJs1AqzhtLQcha2GzUQPwV1rDEdEEbhU9Vs6Xe7EhkjPrzyMEtqm92sHBAWiRXJz785SFpjn8WvL55M",
  "key30": "2ua23kTKa7FaSVTkeiBM24h3pU4dzo7UNkCvQXbbvoZe8ivAwsrZnAfyEBUGCeSQQFWq5G1CVkzFvc4R9rHU2wLA",
  "key31": "BMAMjzc2G3mSUqUgvAtVgtJbqasDvzqxcjv8vn649otZ5XaU6LSG4z8AyPcFJbLbXbcJVdz1JFDaJw2wt3peL4V",
  "key32": "ofTt2WoXJAHwQE4mRRPZzYUESpgsmE7y73qBeDU7hQVBRmppGqJjLDAB4RiyNyuiUoCCihMo9zx7GZrthrULtEr",
  "key33": "2M7FGJstt3y2DHvB1aySbVu5oBrRiiKGpv2rgQA7vakcV8QebczULUpVUMgsat6MpugRb34UJPCn93xtWLqrTuZ5",
  "key34": "5aALLLzfaesW3WikYX4axoMJ88egxeHMrSpgArnD1Gqug81qZMfaFxQcbpSahK58aneCRXbeXLRwqMP9g3CmHYdh",
  "key35": "5SyoHZrak3PCF3eRkaGSaww9ohDCnDCFfpzu9pXb3nFMJ8QhchKZfm66xtDazdLLTBtdtFymg1RB9Dxk6cxAzNWG",
  "key36": "5GxKzXWMjaBen2KS3jnoekctDCP8FpjTm373e6qXoJpgFPTUjWm3peGUUcziqnfWpE4LywyZn4AAsUEVqwQKM7WZ",
  "key37": "2WmM1XaYJPKVQLSNbY4AwyE9GuXz2HBHhK7Ea756qrJy7qypjM8u8pNBm2Ed47TPL4rYeBhNmBDKZMpgxUJvj6Gi",
  "key38": "4wNwek3T8ZFeXAdiEZhgKW49Upyg9jFvyBH4zgm3GipftavaW9zoWfzPyXnkhHM9vKrArdMQxeLubieENqcZohPR"
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
