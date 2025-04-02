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
    "3FzxHaYs4saujWKJoaG885vyCmawxKpomiSWrRQ4GzmVW6pccLFrGMkJiFJU8ekbevqgJYavCeniDnRAFitH26C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "343K8CczdiidpNh9v3C3y2Pjmk5e6PqmW3rL5cmtSkh2MXNsomKvXFf1uUdianrKJcgBTJ5A9jkFPQBJpY2yo8Nh",
  "key1": "5jNWvWS7eSRddmP1VW9emqGCHfrLs18CoF5Dx4vsTAP11J49uwK4g6yUTiMR3oiP5fhi45nnAsohWYYNbwQphkFL",
  "key2": "amAT4R27LsbJB1bS38N63d5xAuJGPH2EenSAtkvftqPrCkxT5wHMG687n3kfe1rX66g8UGwzKrgApqnCbJTYd9Q",
  "key3": "5gzYtq3DPw5C7QYpioavc9wakRChnVqbPLPFWT3tnq19ZAJPk2rm2xbJ9VFm3sd2x1m3LZt2xqzfNuL18EFwKVT1",
  "key4": "2LM21hNxRcfJ4WyeP4XCFaSeYYsLjp5C3ScVXk1iV8NvgawKCm8K3GdKNsL5262S4mq4sEwa5bnW7ha8cXyvxEKu",
  "key5": "4Cdkp7bzrunJuXru1kzXWfBgqyDi1QSLM9rTsUQxfPZV6HW1HLutczSaW5CTannj44NLmEYTj9mxfFdjgaYWbPjU",
  "key6": "5PAFL2qvcbjvC5Jgea26YJy7uFfPTn7u2CD2YVmREEPZm1ipxTMtdpxW7McTHaPRkVvzaC5nQDoBpDqj8ZFPYAZP",
  "key7": "4TvSabFUJ3svSn5JRbb4VachKgWaRNx3uM7AfUVqCGK1YiCMzwQnaF5UzDo2pT8ezpW5A918zBBDvatpKMRfCMYn",
  "key8": "5PM9b15J4DyF5U8tsw6QtEpVGE5s7jnEiBbk9TNnL6fxDnaSwNJTzpU7nnP6p9GK2yVXCUWUjAe4WFqvYGPcDei6",
  "key9": "5hFU3gEdFUkKZZiB3jfTPKdQq5c4Y6vUbnFRXqKN8CEz5QZvFzV8KL3QaFYSC5mQW9eq5UZ4ukr9MPzF7t3aa255",
  "key10": "3hTsPPtxUsz1kaJvykRAeWSYE87bu3m4Jnzyh64Ns4jVguNe5CNv9w8zswM4maNtyKXExS6iik51fgAZA4qLeBL3",
  "key11": "4vhcVRYieomPtT5mkGS4vLv3EzEKycd5D6i2RjEeBGQxpkvKwj73Ri5C53CiwYj28QhGdFSQLG6GiKtdVP4HKdzr",
  "key12": "5dDGnBHPprNHUnTQt5QoxGkB2NDGx1pmSkZYH4Vhy54sRLz7DcbkUbi3cSeKw9yM9KiARLofdxiwQjRhWbFn5u1c",
  "key13": "3A2qHDGr6ZXy8yZKK9Qz4xcvgCp7LNCW5W37GvDeiomXuLTXRZNUc2Av1hvFGqwAyDbrsMVwgpBW9aP6hMp5EH2z",
  "key14": "5oYMCAeQA5tgaofoWcK7BcUhdiXbzRGUjpSZUzdKHgx9PG4psoDGsEwScBnLJiBGsp8Uu5ofFZc1VCuHtEr9TdeQ",
  "key15": "3Fc3oNUXuhE9b56PWmKwJvgVLey16zxsv3Gx8ZmapebdRRjSJpFR2Zw7CjbHVZ4LaZBMk5P5MyTLpqzY2nGK786D",
  "key16": "mEGNG6EHwA139BCr6ire526vyuc1d2zxddipKPisgf3RuefaqXjQk5dEgqzMG31CvjVo11B1LUpspYH3HrJvHwc",
  "key17": "3sDSSqaicyW6QjWqMQPAhqVYHYXnLMEkBZgcXP4Zp8rZqxBHPT85BUSbTYpMxWZp7LjHWPfaWBBqYxeunZtZMUsm",
  "key18": "553LUpkw2qVMFMoAeaP39jzP2tebR7WjE6G3dqYjJBngGfXUbxhbqP6REPXXz72gbb6WmFtdk1efTKtx5D4zff5i",
  "key19": "4EXKHCoCuACpYUnayAXS5w4Y3U51NEteHkHomsCJN1grHidcEpeugJy6avpUrt6ercrRR43wKW4zRQwcJ6S19dhU",
  "key20": "2r9B5btejLMSYEL28WFKgrn93LXYGvDXdg5Xh9kogbth1WDWF8BRtLkZ6CpCF8XZMiVdBPQbEKUo24HGSvauSQTR",
  "key21": "2C45qu6CfbP4zNdSEeE4mub6c57AU2xWWTTX9PcdJ3MbQxiYMhFxecY9z977pfX8ubFm1kMbCPB83Gch9rdtCu46",
  "key22": "2v6preKM8mtqLQxmYHtgzvFWKY1VhbUkw2mxJ2VzSi1JSi5SqGwdRyshuFPoNCjbpsU9y5Ae4pWmTxHNhd9Qfdyh",
  "key23": "2Yqic94tSKNjYAHqYV3a9wntDeZzAdrYZwkCShetmx155Xvwd3ff7LoT3K4GkV8metbrLZ75QF6zgNzvFBeQGqnz",
  "key24": "2cSJSUdMUZaUjS6dSwJLHpdoQouJHKDqZNcgfywYcbsVSk1LZXaTWaY3M8rthDksBWBXwMCDHLYP8F44qmpULo3Q",
  "key25": "5ZQnGsHDSXxVgL4VP78rddbUTWcKcoPT83hyrtcYxjD7zLRkgLKi99QitNWCDXhYMF21uCQhVT4zZraV1pNAXEzw",
  "key26": "67ADs1rqJs3Qy6MY18w9JxXHata3DaVFacSwCaXUKqGWhh1mkyaDvr3GMEdmHt3qioKrVtJib1KVJCEKC6gp9qzF",
  "key27": "3SU1JVtsmB1FFE3377hku6r3UfCKgk6XPKdDybzzGBAvg6PM1YkF2YLFhSwH4ktNCb1Ke6UjmMA6Fctz5fKRYpCM",
  "key28": "55TgHoXegqFA3ZZyH1PXQEqWenkoYaah43kh7uS95wTvXv78s59MU4bD5aaLaz56tNFf13zGWYktDqsZweegKpYf",
  "key29": "2VhLArWbeysXKcSGXFqBNP6hC5AyBarqyhm1urQab4NRwvji1UAi9UcWmJmRB6WVrCXcVjq9PyAH4QRUy4Bbjkdo",
  "key30": "4fWU6Jfa9qFf7JoRenYpKXUUWjvPcKJNHyVqjZVfsmzkfixdTVdXw7w84HozVPjRHkhS5iZkmhawgywMBnm6b5E2",
  "key31": "2kEfUeuAw5bEUTCpXzxphxmDiA2E8rjTrhjSiH1xefcCBbMvEWKqeDmHDcZTtuvHviAVKuXpNykpXo9x1QSGUNYX",
  "key32": "2MpHVgQGJ21bwdejJTDPUA1vRW5TpPprAUFE3Er9Tjrv8qqmLK3hWmJVTUdAf7GtT5r2Xkzu8ajNx9kkrZY64bgE",
  "key33": "62MSQbSBHsVaF876anw5Kzc3sqbd9ogHfQfuZVA8EuhKCE2dSrsy5HGrK6oFfdPe8f1PC8kYnZ6B7mVPc3DGpGBh"
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
