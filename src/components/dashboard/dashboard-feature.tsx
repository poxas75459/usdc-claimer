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
    "LrdP3gANk8moJS72SGSVcsNzDVYWhCjW8CyBwprArccGnbqkYJCqye8BsA5BuWPc7rSyxdxEhQQVe5hHGS6GEiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CtHuHWGp8EM3PDWtQJaz1cf4ANikNQun4P6bGYp22unKU66bbvVDKuc1arRSg3VJySegWXUk9AtVMLzTECYw5Ca",
  "key1": "3qBza8B5W8aPhJ2RMgyQhqPdLXPQxCFc9gMxyuerG6RJzk7uefmuLoSJaAS2actdiZ83vedkjQA8dH6eKxwznubH",
  "key2": "4gEfRjVe1uUgWwfgPTJEw4xmMQWaVJDbW98fQU8eeh3MR7mfCznHpMwhjXVkmaMd9LfyYEykY1SbHiLuzkJpiUuB",
  "key3": "4j72vPCGjiJ6MfR9uar7kzq7G1hWaFP1tbPvtjw8CtYRJtAktY1uQXBm6eb1kuN6vun7zC42zct4bgRyHLTFVhpN",
  "key4": "2VgPjmMQCyQcPYrPHP2QPkYnDyyJv7DYfeTMxv4hy9qatdzY8zg7saaC6h9ka1wDZxCDJYzetQpCyRZ9ZJ3yY4Ho",
  "key5": "2PKuXwXha9c3SynMNo8f4w24F6fjoaffcGsUTUbTcKfs5L1sSEn7Ft8oRh1aKt45HrogdBCsGWdj5r2DZqEWiCVD",
  "key6": "3QPmRbgYubsMHR8uzMVkczR27ZXzouMmX6vV3WiwSkLxt19Dmg21jdFyG9i191SYCH8hEzSxqiEePWn1PNuoToNt",
  "key7": "EB2kKhC3YZbgutm3r1ySFzLySLUeD8unN5FPd4wrBtfiQnBtosXNWWrJ34Wbof3TWhN4PNyPKfjP5ZNauUqyHeF",
  "key8": "3CDCu4ftkLhbzKPowAcoK72KiBhvtxC6s8UKRgMgyDTnZ3Ys9xCZKC1hGJhbnpiRfMHTHXwAiUVv5y7xYRtyk1MR",
  "key9": "3eRntC9D5aeDwCzwpJFv2ziDJy6i6aAurBfU937EXpkVZ7wbrc9gdmJDDx8beWF7PbfkzR8j9Mqycn6T27E3Y3LB",
  "key10": "3EpAh1c3fT2gr5ULvk9pPFemmUSFQxgEWXNcU7nbbCz2Hks6us1f7RUg8jxGgiS3smjHKi8PKxD6Zp32sfpzHMaY",
  "key11": "mbpSuLFcbbeTTsJ8NjQ5fWcGF82ruzFN5XfTiCy1JgKL1EZPdb2wsR3mBC8G2sRFhXpa5L7RYgqheMZzQkeuuns",
  "key12": "3db3PMdmkeDy3dRBYErs1NE9erv44ucbcAQwGKhGHmHy4BhJpipiN5GK61UqvezGAt1sNrAmQSX3sy44whFidh2m",
  "key13": "23ozTmketkTUUBHxX9UuKNJrbU49A8dbxrkYwRpARXdTdCxymzmX4cqssU1zv69ZzqegAv933iyajiGiq3bTyuru",
  "key14": "4bayfZDXwtyPovM6pLTG1tA9p6XU9Tk2euDqrEGzu4cQuNvT1bRFan6mxvkEVZp1e4TcDpRX8DxHUCVpcP9exDA1",
  "key15": "2hEqaD8cY7CbyTj2PZG2zGBFsrd5V8Wszou2U3Ft1HBqnnNkBZMv1TEYwX5RHjieSETU65Dbd61RvWM8Y1ntnwKq",
  "key16": "4CThvaBALQWJPrjpB1DZneQQobFMH2WDUZL44UmbkAUb5CiDbWbU1iv9jGHmCdkEsn4KgRadjiizhqYjhC9GAQnf",
  "key17": "4KpmkieYaBk2vxFRaBhznTr8ERj8T6cietFLH1AXKhrHQ9Y3BkkWbyttycRiT89BcmUMFZBYc46GpLUEt8fGcinX",
  "key18": "TwmdmmDsuT3pBrtdHCurvz8uYVaLsBpHXWCQVuBw68f55fzsQaC5PkVxcH1D3dgdeCMM64EEWU1pD7fdchsbs3S",
  "key19": "44mNSS77zUmVqGZE7JFus6suntV8RykfS5yj1dyvPU9EkqF9LPzBGF2dcV6NK2U4KhG1AjeEDQMZD2uNEa8X75KH",
  "key20": "SUL8Z5KjNXM94KcFAfBfPm4XW2JAaYYi249z8vvsGvKgoCpgUK1Po4gnwhYKf7v3pGfVne3pZhoR2HdfPtLf5vR",
  "key21": "dpw9NeTvZuuJFaAprMvUimZcjuyYVmM238xDFykVubj8tnUnRQZ7XfPGWe4yVc1x7oiFxFKo69hpGayEcojFdGg",
  "key22": "38wZnmCsjqU3Q98M7bVhrecCsAoy6ocUXiA3NypQb59UmtEmmvGECV7bt8e7rJE4zpswsLWsM2gDP7MmyJ7uhKMM",
  "key23": "57NPBu3uyYAvTEcicfVaPsLk1ZWnJwPWeXRqjwxx6ed4xdzv7uxb4GGoMLGtBE4xfSSoBRV71DNZoH2JtjoQGTBm",
  "key24": "2vpCuY3qqJUMp93eEVmPsGkADPowasxpiyeozSLFsk1Mfkg4AcYX4cQcjU4AoneqdTaPgktaeKQNnXYgRGAQGkVQ",
  "key25": "3bMx1XGK433xRQJGTyp8jNdHteLLrpRFCYr9cJXNg7JDgyM7d6RYZ3zmkw1poVnJigPL28zshDkvheJQ3yhUNSSw",
  "key26": "3fzDtLc78cHSkFw6cLr2a4qULgTx873kwurg3dprY5gEYNZpeB2nZkezbzpMW5jKU9JJxexFABsV8P89cCrsz2rC",
  "key27": "g9QFZLjdWQMfHnqpUrT5XiXAYKvCWjgZDtPZpBqMFGPsSsGTCi8BMLMV7QREnBPsJncpysCmAJwM4EBvajpaFff"
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
