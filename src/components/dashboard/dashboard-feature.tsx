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
    "24ivpY2ReV2KAGGyi1khaEcR9yoNg9i4rVw7VZArU9kvZ9LqZapnSbuVep8AFNqbi4va9pNR3NBKEbkZVuFv4yFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MuX5ZyNrvrNqKZuGh2MJFXj7hC7AgJe1g64AB7dVZodjV5MF6D7kEA4eoz1X4KN6dM92fftP8XSD4w3gNVyu1rs",
  "key1": "2J6VVRW8FZQTFDQcpEiN2hkgU4EKnuSR7YA7GdJ7o1iH5py4Pb25P61Sym7hKTd2VrSA4s7xm6uHKohzQhbvYqSw",
  "key2": "2zCtqFS2gqKeUMQZ2zLa9FP4UEZzKWk7KeSRrc2hbzBEwonrsThqxrcFYJ7t64FnzB9UvNVHbrQfd5N5XWWuweJq",
  "key3": "2B7wHR4rLFJYTNYjY6j3JvYFVRgCcmc4mKJF6usFh9DnZwCwc485DCdLcCpK2P1WgN9TdniKikMDJT8BybhbEuR8",
  "key4": "4SXogTv9QeBkquBWyPXXpzhiY6oV5ahpLdvHSxVGMECk2SnrMQA8YixKKNg4V3NQ87j12GBfwZUao82NoCuqGZVP",
  "key5": "28BzWuhL5fGh8GkLEHBp8NNUyDQqE8KoNwBkHELQfbtCiBFhJgyYbTv4p8nWDHjCntzDXQo9B5Xx3PZmGNm7iazf",
  "key6": "3abXiigT2wVTTnDRziHRFqNyMxZ1KG2B1bYGqYNqq14DsjHJJ6xELNyC2r5DnJLxeULvLY5v7bc1AdbRTVTMgsgZ",
  "key7": "5GFXBUCx9mzh2hp4UP69FSmLy7Lpu5FmrQ6t4426oTtmeHf6VBPojG7tPkxM22kvDG7gtaf9rDpxqXwZjMNsWBjJ",
  "key8": "3NBzdjLXuoSeo9f8NCtVkjLoPfSSZjY6oLwyhQzDL6KX25k7EPw9iyTGXP4HfwhouEtPukYFQuCM9TqSsMumVx6c",
  "key9": "4r14wJPwsFNkTAhbo7iCBSnrnW1WMvPu1FYXcg1cekQ4f91rT4BkCvY4SVfNj6DPdwWMhJn6xQmrGxnQUdSHFbiU",
  "key10": "SQ4ZQYcrPLsn9f4uokQCubJc36AJ31WiQPt26G86ByLYEnRWoiwpeqqKuuRM1FfX6hJ4jYJk6yzZxBHa9mVLbhg",
  "key11": "41yz15ebZvPkbpiu7qeM1rrsDhwf9PrnF8mpaLvE2GC24VzbAf5w6BxRSYt97a4yy2mPM9wSFooW8jCoA3mBKdvH",
  "key12": "3oogrXUE9VQHUHhTztTMB8v9DcKL6MuuGSrnhFGnKaHYTTojYSP3bxxsCc8AzEFWS2FjDZNyDH7TBUmQsP97U1Re",
  "key13": "3j3HgLmJPe9q8TPyHEZ8EorZZKutwkE6zq7cY3XJfkfjoAeY9zNTYuwwQWJdzMwASj5gS4T5qa8DrWaF6UZDYR5b",
  "key14": "3MTFrmdztpVMh8rZfvspj9zvHzJSqhy3xDVEkWUfZ9WsmhzXz7qip2m4bXEpbe3MNe77h1fBASoHTpinWcPzfNhg",
  "key15": "61JyXABJE4htLtrHarLakmCJkJYw8rCtcAYEkoCYb68w9dQRM4uoeXZr7HD5Lz1McXSAEG49gmor6QkU7s3rgdKi",
  "key16": "581qUjf4KCDpuGEW1Tk48dFD9xb4PfCtfxWbg7U8SEuBCWPabWR1KR27MLu3p4U5JLUxEioyfRz8oorbGt4rv97V",
  "key17": "2iNGK1opqHn5aj3V8wgnRovTzoN6Sas6Yv6ChRdzAMqruLHBRVvFuRyC2g7C6cRgZwaFnQeLTv9hGsJjKCF3SFVC",
  "key18": "5Lgn3oe7CKh6oZ1mXDscxHuJpNAb1Hk1twi8zK4vuM3933LD4RwfgB5fh8vZiw5xxbrVBm4kgYTFsu7jCgZ9142r",
  "key19": "xWA4YDAg5By5mqUyoPzRB7y4FyDp6n9sqdvvuGpXfCaQWuw7GQcatZBaxKzqwwFugkNY819kDMcz2hax2bqsGQ8",
  "key20": "49M86FRc1Hqxg1XydqWKupj9eE6wPfZ8Vi9EoKCnBsFEnSnkFFpQLBVq8sWEhMMhFam4Mf5qY45LFGvLgoq8rNnV",
  "key21": "4fMpvhDkR2BS1fX9FpYgRUkD5Unja9Yv1tFruJg573vkYSvMy2Ch3JhJRHMG3kaZaqCN3aErksX12sKJxCRLuQFu",
  "key22": "2u4PLKLWrxvtW72G3YBgiz6f2PmS7QUAGseHy1fdBhgKZLD43vAsSpkncgPKMafQ65w4WrT2t7UEYDYaD3VGtd2o",
  "key23": "CkuaSVCub4J9FJxG8ziNjkSmfp4bgd6BjN3ds88Mw6TyiKSC3ULJ3cshBZ6163KH1gnuZ2cRccezYGUuj4ugZ7M",
  "key24": "2z5i2vZSZZGWsfZfieWngPueN4CEDX1jhghCBRaJAd9657Bsvta54kLoW8iD9fREy7rsDK7QwofWgLjoze2H768T",
  "key25": "3LxuYMi9BQK8o7eLtAX8hM8UNwRoVqHcQjTKaNRWZ4yf22Jh7rJZ3RzpLmRwpYCtYXK5eEjqFEjh9wAojEEXmA4",
  "key26": "4vM58gig2TR9XmdwrF7pgpFXaYDwadSUE4LjwRuJkpLDfp6yuUwa4dZaoetccPCAuNEXuk2oG6U7GgheHo5YF2z3",
  "key27": "3j4Cxm5AUAsP1sBvsC479s3Fvxs6Lknn3GoCXBVGEZebYFfVv1YiFAhYXiVU9b7AnWfQFygG64XzaVxtJtMhiC2D",
  "key28": "544qcX393orHk2CxpU4mx7ajZRNrJzfGrp27E2RtBN3qKCtSU5ouw42zjhvmCnRNVRZn12fQYjhwUEi6x8LNKU7y",
  "key29": "5bBahwCu5a4QLtgFy2sFCQXU2zkhmDZ2q5JW1ASzxkFLJqhLVdRcgTxdAxkBtnCFoMaDyotv2uA3DE63hMU5YV9g",
  "key30": "3XdR9gYsBByxL5sLfhE1754VkUDfcLvDERnbFFD9DXj3D5HSQuFXFNoD1afE3VS8hN76nSvMreLV2h2cnpDMp3PT",
  "key31": "33pf2988j78z56bT1tPHrJ6Q6tTSmcAyVv7SN2virKHW61s7qkzFUYpwAHYC8vL6qiFqQ5pgr2qqkuRLogJaQq9d",
  "key32": "43pppxK9ts21T4NFdKzgAohizexrXpkuCYDJWGRpjtR32Xcm1Ha1fiNr6tvX71Te55cDjALbs5UJyFMGSJoJ9Pki"
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
