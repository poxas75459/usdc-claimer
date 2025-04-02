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
    "3xkgj2V7MfzLKo6snJ1F5vMi6FKRi1wsRtM8YzEMsaeR9x2tPWUKFYBEUKgzCMPbfT7FwMxoXY1FDBZc54Ws6PaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JWgv7RE7RWzDjLXH7zorCJ7tfcU7oKrdpUxmaxPqYpKGa6D24XD1hyWXA3yJgLa9igpWW6RTc2jY65WJ3fD3oTj",
  "key1": "3eMuVwmz6F9PvBkw93wtgxCjr1LULKm5WfmrAjbSVg3jedFNdsJUqF3f9MLpdhHX2Mfy5obHxi93EnuDbTzpjXG6",
  "key2": "PcuDN1xLeoofDFLEitT3yqmJDUYrr7qVxEceJsDgKc3yXGj26aJEmRk1KiLKERRtomWt93en1jPTJSpoMauqMp3",
  "key3": "Y59zaNCmQuD2mYMnEVuuEQwbNPCYZW4jyVa2DpqiabqYeMivV2M4yuo3Q1DEWhMCYiL4QFV735S8xUzqyHzfib2",
  "key4": "4FNkQtsxUonpbsV2Drd89e9VeDjdQUzWBCZXTSMkdjvUSTQYbiLC5o6SB4otqAo4hpnqTTEuTMKhVHwTb8zBdRZd",
  "key5": "wapukjB6g6s6aWx6yKBrifrB1iJrsEYiGChKzpUEoYw9eo3LVktgQc8zgTZuHuctcm7uwWGmF5mvEhduJyp465a",
  "key6": "nNGrvd1j7XYq3HMwUaN4Kvt5PVQsQBHvBUj4LyndTKgv4uuaqaUuiHAL9JSir2TvvYXVQ436SeSczZF2r9XmHEJ",
  "key7": "4CJA6Bk6CTrb14ag7LCE4BEDJj72Q9VDaCSgKB7LZR2U8gQDpUW5dNgVrcHTuQFDqpWQaCZeVCRcUfeB7p3VQfs3",
  "key8": "4brxuEVCL9nPRrTzLcWi5LUbzPLbLdcP7ss6kT2qs1fJCZEkXuttrGzSeXFekwX8VBU68deQQR9m6XhfEV1fj3x6",
  "key9": "5vHqrKUmM9cLtkbA4wARf1pZsZ1x2zU5Sh8Q1EELkoPgwJpjQrcamw4QNiTfMQuKZeoKxy9V9sADnZw9gTgobv4H",
  "key10": "24Lbku9rSnBje2shywoH58Dav3WRCScJ5T7gFY326wWUqZEtfWVZKZGx1scqmY3TAUVTP1Bd9xyGzz9rJ8ycTHZz",
  "key11": "4Fa7krfVVQGF6cSzQ9ocu4dehr1QR5M5rMbCtKe6SuJfVrpZRuSHwALd2pY77zMhfRn4Bx7NKFg1dSXQrSU6gxJC",
  "key12": "3TLThfhma7x8FdCyGNo1dsVTctTgQdFYfqBRbg41zDQiYFiQGKczeeDepyZaxuxhijmRNax9KkVGX7AbUEd1XJYp",
  "key13": "4oCJDPkhSwWVBQ4HVm83BuSRjmTfqeagVKUKQ47UqA67uxWgcy97kaQjyLynWPZvBX9w3kwKjinjk42JEeTq3sgt",
  "key14": "5m8FE1bcbEt9hbtmRrSEMAcN8iM9BZVx4wGHQRbDB8htezKKAbvBV7uVpu67aPWzx87RLZWUmhf1vB6mMu7MmKhp",
  "key15": "tedr1i1einvkQn38fVQHBDWTsj6bTDzZE9tG7Dn9HJCXdLt5osMYjh9EMDE7mVd9UCGm6ZNRLyuuDYqC52jSMzL",
  "key16": "2ziwykiktiUtLLExnEEkEoazneo6zmKQqLmYPUPHMKLqnUX3pJoqUNjQhLfB5gy2HpfxPdVhm4WsPXTBUiSKkJxd",
  "key17": "316s6EfMcnonXkR2a51g3MUQTc1hP6mdvrERTK5hdAfFnCNKh7rs7d9iJkhUMrcjWpiYQgHRvm9Jab2vFrStVUy",
  "key18": "4m4xoVy8hnmMKvzx5ZYgoGr89T3E8HDKNxK9HZ1qxs9V2sr6FsGT3J6ksXMqsvos7UC5YczHMggUSd59u7rdiDdH",
  "key19": "4uyAix3SdxnEmSQ7aQnsEhbjZ4NXoAWUiAeVwJUWe2jamWWmQG4NEjtj9pnbX3gzJ1fDzr7AYaize3cpaHA3nnj9",
  "key20": "2kuXa9UNoj5jVDwMnVqjKHs7sqFJU8WGxk8Tg1cEwrhv2HP1e9hZgGtb16sD3J8hJxsWdNM16qjHsjFpSBVGcnUk",
  "key21": "3LDFefMW4BYNKpy2Y9Vr3wz435QNXtGTyqjq3fCeiG5jiUvVQxBd6jwL5U3dKqPxY5cJ6xzabuVFcuL8HSN3Uf6P",
  "key22": "4eFvrpsCbrC7S8F8NqHYChvjNxCZua5NLkC2BsqGGpQU1ZyowQcTpZ3gKZeBdm2QcF7iQS7hq1J3Wdtn9bEbBv5w",
  "key23": "2xqEtbokfdPzbgGbijsESNr6YgfA1wMSMbpp9RLYWWrRNTgwuQk2LwjJewPCrWKiDFBxUHFSwUJpcdQxPTJ7sB3u",
  "key24": "wa9rwfJW8e2EYViti22pQjsDmgUc12EwHbiDjcTrtoePuBrN8uFXRCvDpSQwJUQkPLfFvJgjS6xxnfR4Dttx9WF",
  "key25": "52fThkBSzQcHEJMWam5Ga3iG2ENfFC5HQT3RR9FscYSThWbcAunjUnzkycsy4NpWnQvDXoqxM5hwCxhBhdGGacz9",
  "key26": "57vNzLkj2FYJgX19UVQ1f2ryc1KFwk4pMJ8wrxzCoumZYh6TTgt5MYVnmKPDYtUQJXTFEsAKsnXZFMiApiTp3gAR",
  "key27": "3NZHCUaY6Sr2qdPgmpY8Hp8tD9BtHFjAdVCW14jwiZHWaJVpXms3miB2Xo2xtZB2YEh3MjMH6U21gc3JEpPjGAP2",
  "key28": "4hFvzbDTErpEXVJ5PzJvYwyY84wieWwKJ1DMmEgwW4WHS2HFT6h52Hoo3Dh2qZ5i7dtNzfS8y8vBG3G8dLo93jC7",
  "key29": "3b6JL29uREtKHtzmL68UcMsSj6vk419zGfE18PwjvjUoXHZBd7qt9t7hoMWkQb5txJuTG5h5SstYRByKYSLGLioT",
  "key30": "3kehgNX5FrknsJv6DQSvhBY8YLM78RoLCQ7CxbbsnwMUFEBQpcs3VijKyH4HBJmGakK6WZwTtQhMPRrx3tAjEiN8",
  "key31": "2R1mRoUKeTv2kKcetcKAdGLUqbsSkyaT6jiitw7V4SNHisi4rhusiYaViQPCAkjuEsYfUrKp3t4qrZrSKMgeWabs",
  "key32": "6428ou3iM6QHW6GZiuKLZ8LwCmuRmFJefx9eAKBQv9gdE2LBV5AD6kQRdF8DDJ92NGD6VQkUquCoexd2Gh4MKwWg",
  "key33": "2KLvdWyMV4oSbGwJXAuFpVodGEUK1e1tGRb9nUQRBTiLWjeFNBE2HZ6ZQXb8sRn6PsgR1AtheUum3HqyzhcaJV7B",
  "key34": "Br6LoZ1dJ1teKeT67pGFXiEq3pdGSJWwxaPvkYZbXLHgcnZrujN2mnvqHbeFFL1WJL1jLPej5qp9R9eR5Yzzvbq",
  "key35": "jZfYwCTHLjz7zdtnCS6qaPYaXaMuuJz6iBhYRrTsjZDw7egZ6jiJ5zdfn2y8CdJjb4JGxfJbQoisWbXim9f2FyB",
  "key36": "4J3BM5QjezimR9Q8ULfAEaKXn6Da62Mz73ZCL2H5EbKcm7TjFCpKaNss4gz2EqhM9fcNpGMDQjkAc7xHWwai3ZfD",
  "key37": "CzadmgsU68R8u62EAgs6GVrHVLFXLdyyhvNa5nEVY49XV11D2NbBPEx3Xq49Xpxt9EYQJKMSRfConijK5VwVATq"
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
