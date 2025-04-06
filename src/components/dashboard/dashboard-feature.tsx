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
    "5Q9okVHEjV5y47o4Yz1nky9nyPgiqmQAEuiRwsEjRxXu9p7dNzGEbB2KkjapNvGSkk7MVB3Jm27ivDg9KxY8Gmj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b8GdmVTTQzbWKRQfn89YtLB4s8ii2dFyt3HgGa138PeHL73bKFEKw4i6Cr3JedExDDaGeGp88hFagV2aVqR9TLg",
  "key1": "56sUgeMkEv64C1TmZn9mPHsC9tkHTmhpnE8DFSSzkWBoMitd7mSirkxRux7XWSgNcvwFGNVwZkCdyqmfsULD9ayZ",
  "key2": "4ErMcJ1aanvjjRjdmKtFHD5QnMkmdCzB6ghUwqWnkqjnZT65SkzqqCW1DT1wZKEi1jENUJRQScHeWwx7XTz9bHgq",
  "key3": "EY988JVnkJXvTBh4shfXyQ9oC67HMu1yc3nU8LwqpCu5iNabNCAvSUqpz7PJE9tEVQhDYxcDZzu1VxfaKjCVdAn",
  "key4": "5fBzWLpfauurTt8iq2UPjsHM8Aen3vDysG3qzFE9YKN7hAY83EAdNDYKT9Qv7dqgS43XEcBcZfxXRBa6vK6ZxLKX",
  "key5": "KsxF9u2J3rB1yXLJMrPM6CxjX9wAab1JgFTQUbM3CZkkHpiR7ELC4jN81HrFQ86CYRT161uXmorNMZsZfqktrLy",
  "key6": "5bUiRuutzNAyiKYUCRuYoSiR5H3HLhWPMef4hX1EsinPw8wJT19TTr6xxuWN4khwqdSSbgaptEBQCvNA2gV8KUsy",
  "key7": "3NAEA2ge9zvZtCQ1F6SKiRFDwAnG17fTQ84e2sjTgcqb291eN5ymXSFwTn5LV8UWqvFkTgptGJkQwC3p1rB3g13Q",
  "key8": "67P6sJHQtprMTfCe1RrLZ5SJJqFrDb6bfJPRcdmKvcaseZMFdf2CxMAg9eqRBuspyuiKnNPeoHxLKuA5QvYp25Pi",
  "key9": "3ZNqfVYDmfZP2WuqbdctGYsgP4fysd8ARuuZC9Uq49sYWdukZvW9D6owxmPA8YzYZx7xwhmEebVrByapdLcFNQrq",
  "key10": "ZeJ993gamaS3vKVLuA8ECz7gP8GU2bBDLVUCTkzPpzdbywjFTm79wPGDVBpQpcHidK3Sf5LuKAy5ejjVAhUuGRd",
  "key11": "4AdrUMhEPGEHJN9EJVFLPpEjAxaiU7XC436foxjjoB13YQeQS97boRnwSHnSiwbWMM6q6Mdwz9vHNApbRjZd5uwB",
  "key12": "65qUsLp7kB9uSmgYJUYy9qmBfvRUnF4pJFjhFahamuSAeTRGfznd2sJNNiAfkvbniwoRigNNBvht7ThG4vHv4u9",
  "key13": "NdVTHYAYtRuPFUv3uBTHj8CCzmaEH4QadpNiKfvddcqsryvpVFF8JkLyJ9ctb1EPchWjRXKi4WoyeiTJ26aFo3y",
  "key14": "4H8K4Exgz3k15XPLERo9RwnewMFSLZkGPCovJGg9XKPmoDfDxgfYqxV6tLxf2cQXj8jKuLrPKC6aD5RiPH4uqm3u",
  "key15": "5ygpJfhmD9s9vWLZMWdqMnWYUfzTFhcurBdxsGW8f3kGVGcFcN3pem8vLpAX7N6CRTw7yMwFxWhctJZ5nqkYTnMC",
  "key16": "5eFGzzukvEciFeFXVFrSXXM7hCUBmXnNZwn3FtaFvYrb2QJidofGmqu2HBV4RNFNcLUp2xtpSNwXon41tdLaJgXt",
  "key17": "PsrpGEucQQqGoBuhJTvdSQzSzJNXSQdyfQi8AmZPCrobGmKU4nrC2dwJ37BitQTBSEHcseeqnzaC2UniDF5X2gz",
  "key18": "34fv7BcDBKfFhPzuy1FoqZcyttKmcsBUwqXLuzWedqeEK3zwRfTQJ7E9QNrmR2tufhnJyRRfTNkrSfHFBFvXS4kH",
  "key19": "5gwwBThpaVG5a7u8eQ4zagvDEf685bGvZfg84RfSrE9iVr6xiKooiUj2qT1YhwgEriPQF5PhgNrCm2eGheTiLwgB",
  "key20": "5xMqA1DsE6bdJouxfJ2H2QzBkmnmTdQBuxqxzf43DwFD8ZSQYNxJegdi5imywKGGrqfeNxNSwcJGd9NvXfj1PgJq",
  "key21": "3xQNiZVLT62NpY4WtuitQuqdBWjpv1SFuEFUxK3oFLxLdBhoQHriDCkR66BuGnjRDCfKjw1uebHNeofthucJWcxi",
  "key22": "5vPaUShoAccMPwP3v5jNjnGp8YPc7cZokD68LgY7vzTVua4hWc8BBrw7pTiSLZLwbdUxjdsYcubZR9vBWdLoQB5Q",
  "key23": "4QDqCJ4cKo1wkawxUws4ZSvDKAG4rh4MJ8S9MMJsTkMUbPXdvLM7t7xuEHazDAK8QZ79vc7ZizDvva3ijj5xrbJs",
  "key24": "2HV8BvGMGyqMDMtuqSzskoCcbz3x122n5YegLXw3NW17FWruwK88sisGK9eQR6uno8M31pzNrNT3KX71U8Nq2BN6",
  "key25": "3PFsw1fs8MUjoPFvi5G2ZR14KGbF9C5BCRFrqe7ZZtrKxTQowzAaHDkdcmAiNnHbi7gDDvioKVBUVhTkVJi5eaN4",
  "key26": "ZMsNdFBYhXJrphAWBizUDNNbE4xVxJtXSL4jBSkHUysNWRgf58hPhvAj3qgQBgiPuNN3KkqrKf2SJ8bLus6S5JP",
  "key27": "TsdAWrH8oFur9twStP4m7JbNpCTBXxgZ9zXQgBqCzvgKfEgfqaHx1o7BZdNEkGEZi74TjTYXNAGGmYZCStgrs1f",
  "key28": "4tK43V789ygQa9wBcBfx5MPUoZwyz4YftGJHtG1WT7DgdDVQjqWjkKwYwhr5ax4bpPCGX16HSpR2rSUCZQVGfh9T",
  "key29": "5VWJzpNMzwQpNQ5xoAyV4rui7BgcYAtdqh9NgfHqnru8G1QBmoSNwr71eGrWbzadoFLgarLhbMSU9h3icGqC71yA",
  "key30": "2Hr5bRdHicEr3Dddd5bh7R5aszeZSL9fFcRpT51wyWx7FP8FbwYoijqNUdcXdgWNqDsCoQhbuYGH56ZuENwQAMm1",
  "key31": "4apnwpugbFPaNPvFAfXB989D23UVeBFKVLa8mVRdMYSgnNTSJ8v1unknnn5yxBn5XuqWsQxxdVwy8JUwmETBADFr",
  "key32": "5wfq6cTouyfw3dLufVw9nK3AX8eSU6HP6P8wYwoWykbBjgn13fkZrqdLpm4yDMqb84xtwhcUaJRSED35C7B33qCf",
  "key33": "3cjzU6gEYypHPc3kc7XACH2mUGuDR6hQXeYmvL39Ywq52aHmVgKoRrYJ8zhXVZzprRWrPK9tY9bsfWxujAndKMre",
  "key34": "35AEwMrBuBdgBvBTfEZt1Z3rbfPcWGykhbLnGwM7wNZbG2YMThW8xzeW3dPxhDEG7ZnFRvcufLhZFJQRDEBcTVP7",
  "key35": "8Xr9T4QCfoFV8D1GeYcEsJ9Tw4xiDQea1zA97PdCmfEQPVm9BLvhLE88iSYW7TPYR58U9ovnKyEooWq6je89kt1",
  "key36": "2uymTJQVQvRoJQtSzrLGBiF2BfLVR5dZiBnFapHhixjVWS9gzTNqY9ZZV9hTqsEm5C1ZYFApTjvLWBtsdbQ8CL55",
  "key37": "5bhzGZhAHrgbrJa1xNFZnBms4aiKoVph5k6i8coXpBUz1mL2AyyaQn6qDSjFQMmM3JLqTnX2s44QWv8STXFPHCaQ",
  "key38": "3e4fifGvdddP7Q2F4Ezcp785Eg4VxZaN6XWQZ6wQB4AUcAqBB4a8gq78SFWggveLkxQQBgVnCB8Za1Hm1Xs7xLdX",
  "key39": "TRFHonHDbFrLBGiS8xbEFMKqG4dn4J6A6MuRgWQUnx3c1Dnyfz5DhzTSFKfMYEApBr6WMtbkhPBfNV7VK4K2V4Q",
  "key40": "3i29MxhkDvywjc9YFkjVasCgUeNZ3TfNSeCfwxi9E6PUi9TeCYram5gq5KdU9UAoxd1KzWDUNFVDng4uhkSWuhX5",
  "key41": "5uYyoXRuVWJsnWiRJLskPxtPsRxgin5eGWUm4hLd9377RrhW8tqs8ypFfLDTgXFXSiqxqd9ZHrr4xEXHwcpQ4xnS",
  "key42": "VPuXqs1udrNtKVn4auJNTBYuZ3GzReusKzTfHTh5noM3HRaHqWQDWvSHffgMjpD9m3CaWC6GuqjRQs5kZeYiaXT",
  "key43": "3eiUQZfNKKKuBtcEGZDEdrLJwjDYXeEZVLBZv6hSiwmN6z5eQA1U9PGibNSpBohQj93eQ93coFdEquDz2k5J11VD",
  "key44": "UTLdn1LUyoPBhsvjVcgdFbxjW9YeHLLvrKa2iK5RTyggQ3RSQk3TSNxec8sKnFLQ3dqGZT4GgHKxmKonFGKGXTe",
  "key45": "2SZ38oMtyzNkhwk6dHbDjD2LDEnFZxYvq5roN7dvPuA8ZEcBiJJyG4pvEdDocSv1QWZ2E5zqhhcx9SGz1KQ7KPU8",
  "key46": "3VXLmaqUvwPeSZJn72QEeiEkntZP2qVnTRNQJXdychbipzirm1tGiqXYLCf7RZRwna1boZr4YPTpd6561AEinXkd",
  "key47": "4xb6snWghKJmXCznqHrTod8DqZctNT9cwFGN1sph6J7tZtWCLpG7UzqnzoBceK95zFPnyXWZzCdxqyjqZzrq8Ynj",
  "key48": "3TgEJrjB8GJ47EbuzTXe2RXf126sxVxGBkJcC2p9d8H1wm29gNkkSr4aatmLYyH5wx7NanYtjZ83L3djEBo5xeuY",
  "key49": "3gDjpTv17EEYLYEBME3iwYkKJi6u28Ct1SbqPsxsJkH4WTe5caD6QzcGw226xv8gB1NGnnQbCKeRoXse6rCKudx4"
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
