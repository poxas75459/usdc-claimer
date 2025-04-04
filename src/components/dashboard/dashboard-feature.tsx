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
    "22JwAZCnrKd4k4UiiJ2S3n8kHPECReA7tfiQhwkk6FJrsL4toepZgb7pnuwi5tXVZmE9C7sac2LqVwhtgBjG7U6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45nvRLW4tgTXGYmeLNMHQy7MG7mXt6mWuFx2eDNXxLttLycd947XPdBCQ2iVxtwNn2nxFqJrFnxPfa2cJvzTm1wT",
  "key1": "c5G2zhFaXQSKkL7VeR2h9FyvTBa4z8cdW8Ubj5wredPup6QY97ByqUMmhCn7SRXGp1Wpxu6GsorXxN3hyTs4XgH",
  "key2": "41Hzx4P82bm7R44c8hFqhzkkFVEmE6oFrA4YLPqYyhqLSgA7n7YjRCEjvDRuYNaGYv9mXD83J6xC5UGjjK8XXFBU",
  "key3": "2W35Xa6HiAudi4WjbR76FAjgkJ7QxNU9A2KBR9P4PNHd3R897bE9apptUX7UaPDG1Q5JDYaU6nfXTT8TSR9RV8F5",
  "key4": "4T4yEcTdCQkXTaB6a9d2GuVyuqxWKiMdmwJLkPiKexuL83QREHWhKx1YZ226S9i4o4kasm6o9VJdVoCUBu1jDigt",
  "key5": "5wN4HBXECarXF6oxQHT2QiAcLCv2Lpu9eg5dapGGS1bm7puFnQnznFqYLmgjgP38tonupbgxAQQZR6gETG44J1xg",
  "key6": "5dKc4iwfDYgBkC1RwRnSADF1Nc4xASb5v2dFxsz6x47sKSidL9TuF9i8jp7w6HjLUqRtQE6mA3y1azVbXh1ddrCL",
  "key7": "4dxCUvrS2dw7QGi6bKAoibhrky6sm4uQcpHY8G1kBtocPQf2vanNyhYauTYxDnwjsHXXU4N9dEV53tGokvNCX8Uj",
  "key8": "2JxRtwN64bGDsR4XPxuiCwecSvCaFiv3UZeUJqBZaUnR4EoeWYMu27Y7vHjHt7pyEduEhSZkgtr6F4zWbxQsG4YH",
  "key9": "ggzmD1d8e7CNNkMjdsz7GAF2jSGmhW1Q2h97WkPtkhfqVXSG6pjXtsbj9upS31jtEMNBczKvzZdP6CoaTY3SV7R",
  "key10": "5bsL62n5dRCR3vicf5AycbPMGxAyeuauC2GtRPCSf9T195fWW87bsoPGiFoHW8u8iuJkphTo8qhMGWbBxn53jCXW",
  "key11": "u6UwYLqjFuS4Zr31TzYivSjvsDbsbsHiy5dyisKEHxeJga4JdoorGBAsSGFpEeYFkdeT3m4DFdubc8iQPM7fWAS",
  "key12": "2cnS6CEkcFMb1xoYot5m6TUK1woZyj7c3hEoNFpuDEAtgqx9DLKkAynbSm7do7Yfb8SjSu4MvnNHcLS4JpY5queG",
  "key13": "2KNYBtU7BPQG8tKrNgbruHp66Nm4VE3M6VHJGRQqDpr55uEuHsDWApuQicSYEv1Gtozwv6oS9gcjy8h9CcttwXjQ",
  "key14": "4y2fpMu31zuzo7hFpvXud3pvGy5wPHQo1ukUB9BK6PuVTzecNu14JWSE4GGsbhSx9zFYWXF4iMncXYqezR56Fhow",
  "key15": "4MXiLGSE68oGBdPy24og1dckMs4k8euisUfDUpu1JWKLcu163zWLWrowwTB7xjLfDs2HHpkH4qJQeuede7jnbQGq",
  "key16": "5Fik5igZxe6dPHA5iusEBo1tAczc54i5thAwP9feAZS6qfFdiQ2nmmomrUGiNYMNhSHzgKBmzDy41Gq5MXk9X13L",
  "key17": "5cBwpN7VwnTTPCsuem8bXgjSSVtfqkhSE34eLfbTdg1t9tUwQYR8XoBy7AWLEGyFLEy9x66QCfvZtvrhENPbdjBS",
  "key18": "3gXG3tzDrqJJtcjiqahBRfk5K7zCNvBLJbp8YkzhL3v7BXLFkfMSFocgzyEBRou7FSqArMtqGJ7WdcAsTHLU7JHR",
  "key19": "5GZgq3MuUfpp6nyd6cCtoXsWdzEsB3oawxyv7BkVARePRKCmc5CQFqpDJgkJHkydnoSKxfdgLDJqaDpRBjQxrrpe",
  "key20": "3gLdGeTGyk53jDePkvw8GgnK995YjkvrAcEcxsgWQqxL3HSwrkZ6a1DY5oLVQCPYUKjnAHiCasc9T28CLqCF7G2y",
  "key21": "2hUzFC9PefJqA2actN5QJxHA3WvujiKD4utvVSx5zunoeN2aeWpY2XjbJoYPSg2ajbM6zBsHdrx6p6N81wWmyL64",
  "key22": "L6vVQ9MVsF4r5wbqJNuuEfTnm6vsusSwEcz13mNzAG4q9twFMjVrdPte6Z9t8Xd9g5vPvZcbkJpZsZQ4AKCFwzL",
  "key23": "4XPpFaGYPktBDf4oxccfyZUC8sRG9m7urMsn9ncyvBqfacfQ5KbEzxf3cAvKDDt1gSw2czQEHPi2NmZ3PMWpTsED",
  "key24": "zfVpfUp2QyZBWH2Dof6X4AerCXjtEuF3wuyzBKPn7wMsHogNVRgvLEfgKn7sj8S3qUQ3UDR1Ujcnp8Zrtf2MjVk",
  "key25": "3usZFfYsSxmKmspSmcXHNAd3Nwath9NPwDNC3uPwzoRRZ9AisYVJSsxWu6H9xwX7nwYB9HNmW1cKqHYg4BzaCLuS",
  "key26": "3jUZq9Q7Q75LrfJabJze4aFa8rf42DPAs41dfEH64wpbXSWezguDknAaj8Mj6nbMzFqrksh67KcwMvHx7GZknpw5",
  "key27": "2Pz9UBNUktr2oXVaYsyH9YR5YBeqgFXrRMMtwyULhgH21ej4cFsHVVUTLunxFGuz6cyJ59Z1vPVcn2naErsfP71z",
  "key28": "3ru4DCam9aA7pyhtezCtPzaggByg8C88vSscLN2kkqjQAdQz16YG2Yta9dRBBrX4qt8in6e3iraEJe5rYCD2dzi",
  "key29": "imqaqyytSPAEADTexL8DkbDjGteRcSgezh8qmUbkBuUEF5aXic6bHZw6q7Ncf8ooTxxJCAeS3D7E8yFrWKNfNKx",
  "key30": "4F16Uhc9REBLceJ6da3xBgHXkqu3YH5uk5e7mv5yheGeGbsu4WyhAV1jH3PWmbNHYM5PxvL55Y9Xq6389JYgcYEM",
  "key31": "45igfFtQ8AgMydnX2E2HmhjoQn8SpdGzNeaKv1kjVhPwey2qzp912RHM77EFewD7PcMbz93NK4fPrmnkncPtZPyu",
  "key32": "479szwWzALKisDD5pRECcpVGYKL9ynPHLHwHam9jxL3vkCAafxqfTUNRubK44vGpUyD6bzA9sh4SbypQFaX3GQCk",
  "key33": "5WeYxxw9XyuvJA7JEhepruKjdFvXH2kcWg1Bx8MrE8PQoV21YdAaYuNao1LyWQJ8ppRTEDRyw53JJE9BMEDM2VvU"
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
