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
    "3WYreoPxuwTAGgtYKxwk4BjDt3kpViRdeELF8uV7hUxbgVbsUVFgEgqqUw1gXeq7Kv1ugjwLATyns4vCgoJvmbFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vTS2e1SFcVcSB92fGDJF8Ca35s4M4iUSYq8Eg2335yivFg7W9AduCRqrL2BYzo5jmoJKncor3oK6DfEpbfuzgz5",
  "key1": "2u79yotCNMYToeciR1ocLc1Ftp3LppaFaFLmorR9MQw5x3DAqecuogbg67SD2wZwd37tot9RCLaqpkB3MkXTmbLP",
  "key2": "4Q771UEDdP6vbk8Hd9AiCMSKq7FCg2ooxmUgzHsgkyTdgMSa1yGfccSCtuoq668juEmaAM9UvJ1SNAvgJr2Z4Hy9",
  "key3": "4rsf4vAh5Wub9duzwm3fFf6jxrC7TS3xUxuRWB9KbEMPZzg6nKZyQx2CbQ7wyxtQt3Gq3p35U9BozADpQRdvzNK6",
  "key4": "3tbamp2Pz4yaFHTqkfhtdP77j2q8C76Ffwgj1caDfCQznnRhGr5ZFy3t6GpVEdXNQTkAzLB67k3jcC5mF9YY2jNE",
  "key5": "4kwJeYnHoENiMKbU4aUBzsJ4rzr8L5i5cQW9ey5J1VykG3AHdwHgV5gpRMhC33tCnGK7TL5K1R4KhtbRQ1GFY4W6",
  "key6": "aqbngDGgiGjbZjtRfVLVau8ktpeXc6a1tdrgfKBBiXAv1BshRgX4rk4bBXoEFkprD5aQZnopbHTzHahUKTpnLac",
  "key7": "5ppQAUFYPWToUJJ97wCuzeqyzp1r5c2ToeuP4EnFMyz5E4NgErkJHJLgvxztKsuyzJK9hXCdm277HRnjMFbzrLcT",
  "key8": "2hmN3h7xtPXi7FeWpoQtCsgUbFdx2QCFDpx65Tqc3iMCwce9ag1oEyRcci6VDwmipnWPQ8LJsW7vAsRLhni5Xv1M",
  "key9": "2FDGKoKgoinCMCcWFj6KfDA8S2sjuJPfQZso7N3AhsRytt2V8Ti7nuPzWUNdqtpfXJU3RfXrBUmtMr6T2XwMP4Ja",
  "key10": "3cY9hHJRmdunzcGuTU2mzJyHwWiw3uCqvKi22tkdFKHyMvuCtTvjNt6XvfXo3Fh3VaJ1fkHBT4EnYzbnYt6qi24P",
  "key11": "3TUVmVMHNaKwooUBhdEB31iEJN9AWt2XEzpmdErdETb4uHEudHTetfN5LEJE7JjAW5rJ3e2BL429gCBywo1JxC2T",
  "key12": "3Rp3ioZjdAi4CfY5FasVHougfanCzhFvUVKdM4KvanVVhKi6UoJ6uukkZw7dgX4DUZb4kCmykj7ZiHpzjjMhN2se",
  "key13": "4wE1TUkZz8P1GDDUgGjtYB817ufvBdSEYCi7uEjTM75iNgi2iTX59Kvr2Bbet1XCksdByCp3wyYznTHTh8afS3HC",
  "key14": "3ZB1eDphDU2VtcDGSvx6fM9osAQjEAhryzUPLBT8jZUTGPpUSAczpejcgHjgyJnuVSDtCDdGEKj7uhiCEJVUepQW",
  "key15": "56nSXfkw84HKJTyH4kzmpMrERj9mthFx9AMdKLYQZeZE4sNykPivkELnSM23i6JbhzLme7aMpL4sm1UZSXoLaV6q",
  "key16": "4L45DqQ6iA7xNNdoyJwH5dMkiA3bWWDiu8hyqp1e6Cm8eQ2X6qGuwqgfPLNyJRmzVBvvZNtC2P2Ez11mrvkNqMrH",
  "key17": "5bLoQ6bJXtUjwHcShSfTTZzVt1Ggj5puYttvg4TWaehF538gdq7FQQrzZvicGhFFrgHUsHktNDKXbELzgTbK8B92",
  "key18": "4keVXqfEqo2vDQQs3zm8gW22vfggNT6czgnvFYFmxDsowrdSc9UmqxVeWrgdMMSvjWyWQd5StLqJAyN8q4WVvdFx",
  "key19": "3w9t7z7uDQZyvkEaZ9d4f49MLQEF9vDbayKgGGMJFWWNfMmTJD131qN4StZDH7P15MuQJ5kw3JcgcxAAx5EAJoUE",
  "key20": "4x2RtjuTL4uUdmJLsWHkU1UTVdhHxMYSdDxgRKWtqn6xCSkEJUgkLT1TVA2F8oWfHq3Z9EMwBrfPenYnnjCA489h",
  "key21": "5KYEjJVPDm2A46FiGpepagN7PbMrpYUHhwHfySGQBgxnWC6BNUTRmynpTJQdTJhVWhWxBMoFcpUpa8rUUZ1xq2zL",
  "key22": "2ZmSCooF9v8s59tGBnYeMo36GpQTqsSDYDLoEBfSPqLzn8KMguS8pmcTfTVALeaZhCR324XNBehq9YECSZMAEtzs",
  "key23": "2nC83JxMUsULr1P88GZyttzkkJ6tHCgbPM5uNPVpuJxXeU2NEuxa98n2vX9jqNN888jk4YaZHRU1w3UDwDnN7gGc",
  "key24": "5NhS2JLyv3AEZqrAhsBeavz5u8VKLMgTEcygTuQHnSG2jSae8ZVGinHgSgDp8mcvZukEchiUEJkXHgVtY9wvxVy7",
  "key25": "4vMyyQpj3iPBKoVS5yxmi6kp2cik9gdtvxMwyg82QrCf36svYACodCEYCxHccJ6eZ7KciA8MD5LVHLrMn4mdm7fP",
  "key26": "28dD7qyfBGvzyMBC2VsjBme8Y4TwdW3RgUtKw47S7fmq7rG8w9XkFECe9taknNW8GYaDW5qogqbSE3GDVFuAii3K",
  "key27": "3anEW6Br7Aw99ErfebypjsAieXyejZC5JnVZtSRLCfTnmG2wGbQDr3CuJeaemUz4EVHwqhUBPjNnhxuwha72oqtK",
  "key28": "5HB1mMwoFKQQuLor7dDoE7azxYSMFgk8XMmkRgaoNLzrmsNkkhwrc5Y1pZ9V3724iTYdyeUbwu9CWvNawzQKzUYJ",
  "key29": "2YzV4NCWCkcYdt5ZS14WAVqM7vAX9AEYAKbbYxpoCp1LrZs6AK1AysFBuyfSv64UoG7qmGPfLMdD7R3589y8YjvU"
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
