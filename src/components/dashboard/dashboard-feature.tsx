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
    "2soMJNfuCbWzxDGD6P6dPqYyd3nk4yTKmjApjHSW6jeYZYPFwu1Fa94qmNT1t2q6Z3ZpuL5nvfK3B59grVd5o73Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B39xtuFFVERkA7nc3T9tkBAaunkkJgmyJy2wVnEakYLpinXasEutZnas3yKJEA9z1oDCPRxxZhPnMBpj3wVkwAi",
  "key1": "2GxyoeE1cz3GbThcmK6YN3iesDRbDZhezFYmfKZhafmAhsKJ5a4fTeEChjaCm8ZS8d1FrzDVsbx14bkZ8D4kSBQ2",
  "key2": "5Br4vEqQtnEpDyDzjB4jsVe96bacwQGRdQFpk2CoKp9h8mC2QgnxADAtYTqJ4SFhHWGdt7L84r8BmLMBBZpHrWF",
  "key3": "5sKmbfMEVem2Rui2pAZTAj7JjAYdUQcqJcGmpwZSY5cfLR9Mnvi5n9nUBMUUW4UfMY2PJBFY9gy91VXLFk1yYbfU",
  "key4": "3gz7K75RhRgGbXsDzUFz9ZpFV4u2zHYhVN2gubNv3Jci7fJW4L64AQg74kWKZSdi5gfp6xqK7wd9tp8PNrbSan6C",
  "key5": "3CopeymYuxefjmM62Y1eSsSTC2Tn7nqXi1ZBTjoL8z16Z7JfAFqGe77E3YQou8EHfqc6UiAtLPn2G2Dkox7DnqTG",
  "key6": "2v2SYcofTx6pg3uLrNMeeC67cTse4UvttbSpJ8RRvCuctuF3VkuxHWkZWNwemSZyeAqwz4rUnVwxbqkcV6TrDfMW",
  "key7": "5rkP5ERY9aCRSdgfRPgoHBnP4s7rC9HuuJVQGcCFienJj7CAgqYpzrXkgfQtgaEziSLxQMnZDJXLtSLq73geqvQL",
  "key8": "2jFXc5TSZA81Eb8yr12rwhvkKnF3aNv16mXfsfwboVfPko1MqH5QgoCSzwDfq2EA2hdaFoUyrjfgHnoububZsHe7",
  "key9": "tEvdKUA8QY3HmaAys7juAor5zXjq6Da25EqEr9knvQz7Ps38iQjWv1cywc5JWx33u8c8TrecAR8DVxiiBCAn1bF",
  "key10": "5eEXtX9Bs1d2us8ks5kZGa1gE9gAWDqNDqPX8MKJ5msZhotBERzKTuX8TRCAMVETqoWxDWawnqT22RAucp5ndZQ4",
  "key11": "5dmiv4VdBRWWwbx6FKRqLYQyfRL8ewZ7kZEidKuGMC2HbNTPVECPc4rB7nCDuNqY8UoEYvqQDHFuR2JbfJcLKrgG",
  "key12": "396w4zWYqD3a2uzzxqWx38CtZ8muBUh6S2UqkUoe1QFPcxR21f5Ree8E984R2iXSqXsXF3o4YD5n9D6LTKXA5AUm",
  "key13": "3Mxg9nEYDxwfF2gT6Ymjp1rWiYgcN7cD9QZ2gtnCbPgqiqQqhdKs5FRrEZ1G1fNwBEHcFbpD2pvoKgWPNgBiSeqe",
  "key14": "KGjBY3DGTzYnoqEghcBMBR9u2TuLWVBTYyM17eWcH2rip9EiYCG3HL85pEvV5WgPz2tnFbxF9TLoCiadUpx9jDy",
  "key15": "39XZrkd1itEVd4KMefrFs1BeECBAR6esQagUKBDN7Fh8CnF8VRERTf3Bgkv6GeK5jWvphQiq4SWzvExT2Semve3A",
  "key16": "3CKiL3MN6wUeWF4UeNoZtaGebrqvcsodEkid8PNLakxRnYa8YVcyoSMoVtMe85ijp25SvFcBvFKD9GTYRg9JLfWD",
  "key17": "4wTduLphhqf9dzLmBgnmDZD7e3dd31vejAELKGB2HFSmF2bAKtip1aWb5dUdv9U4hkQC2oCMtFGmTKuDe7YwX6Gi",
  "key18": "4F3XR3o8uK9CfgqyqhQzgQjmW1NrEzaH5qaTMAwvpoMfWhgSyuk7iHH9eJuov2mxsxCVHUmyuCrwhpnDfT4N9YM4",
  "key19": "s9g66hdx6XKBAnS3fUPSsjcpFgdEQdzBQrwoNkjrWxz4F9GrhxnH2i8YP6MNzSSfQczCodX9rzP65WcMWYXwvSC",
  "key20": "oYdqR3ZQfWoC3D13xBd5K6j9rtCkjnJFQJqtvKAzLbFsCjPSqLGE71eushLfgtqSM5XDdvo3VCaaPozBv1sqoyk",
  "key21": "2dychDULuHGcUv6HJ6Gbhe2mJvFR1UvMXPSznPtMe4dPVtwD2DJPFe279VVL9CEPM4jP3ofBFnFVk2Hi5Dxpo6a7",
  "key22": "3m1j8QbxScjRjvnLK3ED2HYZ79fXRJ4bqcXi1aFuxcpLkNv5KboxpUmw9rDWcrEyUoGoJ1Rkz9MT8s6jzYKBJ6bB",
  "key23": "4j3b77wySuFiDFsNvXMfUmvgN7H9W5dU3ixBx8MF6QsSJJAf9XznBU21wTPkDiP9otwa3V7gQeEnTpMEuF8wSgkt",
  "key24": "64K9QvYJaYnZddzWya32Vt82DX1tEmQ1nL5fbazmtUC5bhz3tJWZnpxHQbWrC3beV2aRVjtzkVSRPCcJhnuhWsDs",
  "key25": "4GvTYW3SXu4ZjpECkQ4g91zfz3NpSRXXSGBdD5vr2vpwFki66fqUjrXn5qmgnzGpXn2rJ2SQ3HP6rCZv1Xkw82eD",
  "key26": "2b3mqvQAP3o6C97ZKBYVN5kikk43L3aaPzof2CmVjXTvrCwQmptV17GdzWofidsqReZQp3XyETPjpwb8v2w8kfNq",
  "key27": "2HAHyBjgjjotprzqQdaHjdtxwPLJeg4EN8amqkVWWX7v7CpXc9F4rM8R5usjQJeGZMob3Fpj2P5gzuWgVMSN35C8",
  "key28": "3pbLusrwqTj6QxCJ9iUDqWjiGxu2J7AvfR8zGAuDamqSQcY8ZLVE8eYGvFNLRaLyZ8T9P9DW6VnDnbV7HiyYpCUP",
  "key29": "45EdvYMZjXHavdmp7GudvhGuKzwnBNWvhVsMheja1Z3WU3yUPrzYDenkBoWkbYa2sXtZDsbbe8KhP565pNDA4vrQ",
  "key30": "367cqSAof8ukZNQxxWCkngkCg65gbuDVHhUbGNZ3qsmALCfUda4ojFFEKiAVKjVu3Cswqa2uxnzqSchtCmuKNnkQ",
  "key31": "5drguPwRYN6grLm65VcA1DaSzudwXGdqHTvHAAjDxh61y5NhucDX7qtWudyyQvLJikbNa3WSRUh7qVk5DZcNiUEF",
  "key32": "2Rs796jkbFJos6asbrbRZsmx33Td3vFLpa4jcvfnLdwJNvEu9uEU197X4frgGagHePTxHf2MA82p1V26Rs43VbqL",
  "key33": "2Wdbx6m7V24w57eSvoVjT7iVvsWbPGE6iTfUGTfBMKiexPTmCYKjytdGkZo2PEq2z4u55NrmKEFFzAChQR79R3J5",
  "key34": "uhy6rZTfh2ADLtz2cLNXcsKEiE2reZe6zuEtt22thx5jscQTajYVyCwKgwg7uiqbfNMYii2wNxxX3phNL58PM5f",
  "key35": "4YmSpNXPGnZpK1jH5NPt6ozTysS54vFeKKgsHNYXqHYpdebLgUe8DFQVRfkoALoyPmaY1TctKbCHi3bH26NG1EzN",
  "key36": "5ta8swsunz2tmdJ8J6SFbvW9QGZu5vJUfSneMJYh1jhGjKbTZ5FGAoN5oM9VLPAnBDxB14SCZDQgz5aRkzYttSZW",
  "key37": "qVMrkfR66PJUYozoZcCx1vEtoSmX21Q6N5xdvT6xh8tu5ZC2XwvW2p6b7te2mrWtPKdVay8HFnvBXGEQen3Vd5q"
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
