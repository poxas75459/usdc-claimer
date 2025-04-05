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
    "2ahD2YxLJJ7nbHoCwyaxWSnzSCugD43MhYy6W2dmyF39nMv7SPnDTKuAPjnQpzaUYsJHm36CUcswXw9hKtMujwt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FGKqbmjcFdMB2Hp3Fmg3rdtXKfWMmzKnd6d89v3CMKfjRGnWwV8EbyEmTbXpiXgiScoZHGzByAjqmDbY7EsbzWA",
  "key1": "447LZmZ8AANBHwvHspC5eEJTJxN1qfHMgoHpDPSuwQBjCRrifoKBCnjCuKn86BrVrNMSUmpsPNekWv8G5APMWhdy",
  "key2": "54hJxhydYdYiTZUNaxgmuP6FDbP59fQEqF6kZb95ejANmCgBgu54o9CrMkLt264dnQVYXfe5Ky97UpzXy71YdjMg",
  "key3": "5t3UP5mbfUwATRrvNkLs6LDbSiUqw8DZs7H1NRtH3PNZEkjCsER28KfGGmK6pvyHfKsUp1AVyycTxaQwviRtqN5K",
  "key4": "4x8sDo9a2ECcy6VckEzLX6KXvd4W5Zs73Vpy76MX4VDBeZQcc1CuRNmB5JTHPaHCnTP7fE95j6gngwGcsPiwu3Bz",
  "key5": "J9P4DTMWGUKeuMFXiVgHXTCmmrkXpnetbQP4XPt8wLeZpCwZwozV58pp9GmfMxkSdyD8RS7Ybw8ptEMU4Hg1JeF",
  "key6": "2UNZ8UFg5HAaTHqNumHK6MdNuzgi3i6MTYXUeb9fJbvx3CzVAcNWAEadRPoSNjn99MQLhs7o2vgeXvnj2WB5tRw",
  "key7": "3pXCokhZjkCaPGBmTSwoz1ueNc8CgG4JoyNSzkk82cwF25mVcy4baKUoWgrpBr86KWBkKxtDZgaYyDpQ8KdG8ZbC",
  "key8": "2St7Z4WLYBN4w5CKijHeWRoGny3LsuzFDSoB2YyG4x1h7ADitTJ9vNT7sfNFCaR8V3JBCizKEp4DknfmrCkxmcXb",
  "key9": "5dTiFEcJe4beLF7ToF3porA2SNcec3ZfEGNw2mMt1FyoF5w9ht5Y1i4TVVJXUxfZsFNSHhWdCvoM2ZRGwb3hVg6c",
  "key10": "2c4Zvq3LDDLHtWnYr3yfQxkzehyEn9BEU6DHzLQACKvDUNQqnpPq1UibfNCc4cvhd3n34uGnb6PotSv6oGdwvg1L",
  "key11": "61FHT9LBn7ifkNehRSdpeXiKumYFyoaNWM2eGSvGR7kyJGS7NVxqUUeizpQN7q8HvNdiaaPykgAzTGjWbGSrLCek",
  "key12": "336fBpT2bsoHnC98rA7ZwD85VpBA7VkjmgtxrtaJMVCnpkQB3wwcGQG9sJFgtJVBb38RXbhyKw7658tScgHXkSuU",
  "key13": "2mVJcVbpPAAYEtERL3YgGWQCtqQHiqwWCSzRepqFatKjafSbtbNZ3ptvpHdfTm99vZkgeqvnVEcCwUwg9bT9fWsa",
  "key14": "2fXKYwpQouR4eatvAGdmfQ8RnMGihm296q7hemWn96vy4o8uuV556yVMRK6ipn8N93mbCKEigpfyRgXbcDmF9jvy",
  "key15": "3G4YhJL3xvETEVmGQYokDrb47pzJVsy7uaeS9FiedbceBaRpyWjWaRLKoczNpmzsQ3SL7tuRFNY9Lzz322qghT2H",
  "key16": "3sWbQYpWScLYdygB8LDMxpj5C1nomBmXYmam5zgzVpFvUWX7HdVCvTE7HH2GQXHePxSeeRDNB1ghMbZXUKy71BiN",
  "key17": "5YaASJfCYq55wRj1NxrQQgHefoLmqu6aHj72nB23VfRmc9tUUzWL7D5eaSk3pZKyf5bYaPo8MEnvaEsNgHFki7Zp",
  "key18": "2rNAvKhG8i5yuKGorfxGfZ6cy47rEw2kxMVNb7uPtsBuwQQ2UiQcgSUrEoYqy2qD8jg1TLgf7Tt9iJ4FhAuacu48",
  "key19": "63gKL8z84XXNfTaccLyrft3CZ7b21Fpum8sTYHCGwQVknXdArAwqfBnQ4qULKHUryYYbc4xv7yLRx83h8xJJpxa5",
  "key20": "5QordMWFNPefLgYt94Dx3y9rU4xhCng21P9FhPugeR9nBB2u9UUAUjAYwWVF8GYW6uwvHSp9ErepEPfoqMsAo4jr",
  "key21": "2DtVKVa5gzXRAcBvtm8qRJXins1FpBrfgZyzyFkJVg4ZtcyfPQ3mE9thTHByf5DrZawYP9y9Tf8AmsSgtQ1fKKTw",
  "key22": "39SdWdxBwmtuXtyR6vZdWS9UR5yjnLuv6gZ4jhPveT55kveXh8bw8ztTQXP1ZJG9teb6i5fszRRYt1P9B64bKbRm",
  "key23": "4WNrCPEcWDotGGYz7bWfnjaDEYbg2m8r5wXymm1yt47eGPTSaN8JTNvN37Wz38i4D9MsPZDrwtfw9v7tSiNXiWTP",
  "key24": "2mPZrbZVECpzgnqngRqgs4JmRiQHFvtS5pctav1tE2gb7eX1Qf25Cmc2gaSwn1mP14FHbE8baZ35c6gqvD5V9cLV",
  "key25": "x7T6K5RTo2rpJXNVdFvXv4kMxXpTMiPLKqKyaZfP1ypgn8Gjj1uXgLZxAXoT2NQSwxj5SUDM8aiwBfbKE3ytpD1",
  "key26": "4Fp6yyzxtSYYLLnnzsz3pMyrjkXwDLiUhjbepWfeQUFaxUcu8PDs73Sc9igMXhcestDeUUzNSFkkitUfnYtLAoVJ",
  "key27": "3YsLwyaqYgAiacYhqc79eWNNd6EeeUyGPYCAiPEoCc3XVyLLhboBj7npdTTMDvbPTSFe3nXK1GgnnERNrcAgk2b7",
  "key28": "2Dxy6qg9o7d63vo1DKaqAzMC3WNodXAJJzj8yUM1DmKGoft28dgFQrpunbNSMyzJGWxhHGVnCkVUWWFxh4LNW3Cg",
  "key29": "5D3vFG4UAj3eArx4oHDJgKJyyQmRZvaqCwZgmPHiSu6kCjgYXu5Jhap4hT2nVbe1snNvR2gVSMTwqoKLeJpXV9Ds",
  "key30": "j5iSuX1L3QJvdEjAXyXjgBggN1zArcLX5FRLjPwq81h5xcZ58idfLnJT18iJsH7tahkYA9G3YxHWZZwLdqoJNJC",
  "key31": "5yW9Zp3TT4chHrq9epaZqa6wFBEr9XtRLbY1eJJDz6MSCargABXsXeEEwETaSvRh9awLHTnd7kaUVqfrepGqoJpM"
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
