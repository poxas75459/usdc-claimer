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
    "3qgYq6YWdVb1icHFGJ7X9BsncML2jR5tvjtDowPjZuD98ccfJ7LC8ffyAtXVED6n6W5Bm2gKdcnsmDd9Y4w6riMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XraCr1bxKJMTMthSZk7LNK9Eshh2cFQCVxzunNDn3uPLEbJ6HFNoNgxviAFaAX3AbrX1PbjxbCY7L5VcRdrZdLi",
  "key1": "4jrRfp9Z3yrtMP5YR4M9ovvwxejjidsu1H3fQ5bUA2KaAdpLGDre8txYAwBF5c4vkQPU7e9B5yGfWVnFDrBH3RCd",
  "key2": "AbqgwfjUE9vqj9i9bE423Zda9fDv6xhFES7ds1cbg3xQbevvX2ApwV3Tjsp94ur1BQKzF7F37KmDwKbCKEqEcGt",
  "key3": "3gTHSvWQomSf6Nz1nAeGsQsnY4mvFbZD9PoXKpd8eRc8QzdF21CnsEsve15BYdN8H3XyeWseyfeRKnNbvGiEaTi1",
  "key4": "DMAkBsbPPxUjaKNndBwztoUVzGhi15fubYraiPKGFNZRrQMoLHG9Wi3BKkx6522VJgqnNAPB8jckhUTvVa27Vju",
  "key5": "3JgAjaqU3ABugfEX8E7fnpUxjj8REKFoNeoY9vTtaDNkzmduq1R6LdHxbF1HUv3wp1cdZKe6EwgynhFRu9GP3Wpv",
  "key6": "379wRN3HAVshxDLZHsypPoBWretMRHwHJ9Am2dCztYKbDVjHZAHhzCsX1q9SNCmVHQfDmcMEYsG4KNRTRteQsd6n",
  "key7": "5Gzg1DXbmK22Q9iCwG3ESQofY25usNYCkGq98XrDUBS2VzH94MMkWPuTAUuGiJTfQw8VEWr9aL7Q7fkHxgrqZ4Xj",
  "key8": "nDvscv7Sp6feqzzs9bSikPJ1PvnrkDw5Dcfn8WJfzNApp3LbSM1tbUhvP2Znqkt62nheNchFyEmfonk33RPxUfQ",
  "key9": "4XzQRM2LRbGCBsc2dXAKEhZRw5VHYAdX2MFk9NakvXPN3Nk28zaEgxFA1aek2j3bpicRMRyevLbJuVsA3z4CVC5T",
  "key10": "2RYL5w4yswKrXqm5yVDVXJn5hRLPz5J5T7xAg24dkVHV4jmSBLptBJbZ39xLPAgyYCpvkXDs3vUnuh2Rbw45NFV7",
  "key11": "3Ny2T8kmpdMQq1mnDi44V1NQAJBKf3W7juohHFG7rNEJPcoTjSsuEJAYt7SLWSWbHrLxQ18XnxCrNPHbdwMFs7hr",
  "key12": "5FPodYJicUsLdTVX6SkZQS3axZWpKEzCAx5NnMUHLHLRt3Zo3TNQohFT2RwFx6DNCLPaxaNuZPhwxub5SjDNR6Za",
  "key13": "5o6koFs5Zrt5yZpWc8oge8QCfQFZz2if1SUH7Rht8Zid3UwmSAcDY6tWhy3qVGPqNBt2RFcCjfnVxjcyXCyJz3D7",
  "key14": "3gKRu5tAof9ZBaWLfkCf5hLm34v5suWHWgJvPZByi3t3sZfepDKzmDjmm5QgYuuMXYP6ghf8ZLq6szBNZyQLatjU",
  "key15": "3LqyYNBba8f7zxpLihYDzjdVctrRgTGPBfsVSJ3zaNyJuzfDcxxHLKQBpDV1bFYZdXmj1xGLF8donDkLPzVja3YS",
  "key16": "3nqFPqQZJpA5x2w3tBJWgEoFTn1nydrMXWHWN3yzZZctuSh85wJyJabRnwTyHo2fnCrrfN4WFEF8x6UeCdiY3Jnm",
  "key17": "24JWnhzRD3RYuPA19s2ESWrS9btSoEtfwL74w9CLboqtnwchba6eWvkQKJrdU29wc4NPihLCfCBLi5ky4NEw6Qsc",
  "key18": "ZSiu9vY2hkhcAhYREVPU9QqdVdvTuY9Kv1uWeCQBBSNCj58soKSkPFyNtZfP2HieBFRdoFn2145xcg4WinFTJ39",
  "key19": "k7y7FpfkJwfar9sfDqdKtmuVHtLuPWoNReVARCvRZ6ZFGAkg5vCoJ1avsHMKMsgLGpTBzryUqmWEwEwFp721KZs",
  "key20": "54yhekeZUXcTppoHTnb5nP7j5JD4S7dBsBAdQf6k1vi3rgyxFSMU5885GJSsTxrNae6oEReS3fxWLdKGsmULjuRc",
  "key21": "3H6wddXs7HZfQqKDR7iuq43xVfSbMVhfCwuRH4ipA8zF2ePwafD4XivtdkdUuF1tpB9Tuu2rCPtVqxv7foJzw52J",
  "key22": "3PTUrToCxouFBUGVvKkQYQwUvbEaBYmiTFuN2nvkQmVDV6pvyaFDYmQdLRX1soA3yqKr1GM5QXeKteDPcb1G5fkz",
  "key23": "5X2ZjCpQ2KaiwETPYWphfBSVgfbPSY4KSt9daSoeyD8VQXApWCU68827thxyevGeUPEra2meHPQxVeKd4gveuMxG",
  "key24": "6HH84CpB8QPCa1s9W9D1GtLyU4Vvfcddj8JphZM7wSDUenz5pBTBVPSYVfVXKJQwQ1SAM94t5bU21kA99ZHwbfs",
  "key25": "4M6rLByXsMsUxmoLG6TzaC5DZtovuPtf4GX8SNrA3BaeUe5tVrBwChF78vRGTvwtASaUyXPbkb68gxVpVFrW3rCS",
  "key26": "3mWDRAqLyoATfDmPD94Fq8qpQb3QNgowvn7PsgQEgAZtExyAkqnhPVRFfmPjRr3t6hhezSADLauzEDCYhYXQbqdd",
  "key27": "5FnNHS4uMb8ZfJoQ92yKKCysiT9k1kJWJL6oUWePbCy4SXxJF7TowQgja5XyKMpZhfCErWYckmALJf3tQYzrWdWD",
  "key28": "4nSizd9B1jYPSeEjErSiKEk6RzCxxowZEwDs6cu5FvXfSi7mLerg714rXyc5rNF5tGPsxCZEzyNu82ZtZecxZsKC",
  "key29": "3b7k9WU11hsp1uWXpTgF9Aa96kDNoFD9iCdvAfCAMiyXhkKLgLa3NZeFkYc8HGoe8iTmq3KNLsNDNbyDAefQ56Sb",
  "key30": "5WvSBY7EEkp3RAqXQco9qGUgHb7vVrZRa8wNNr86NDJ4bs4MiEEPsBLCZn5Ug7P3KRU4MykyufNqM3qLwzLoEmDz",
  "key31": "4cYa68yQeiHQ8tWosBaBeem3x8D1vfysVtHsMaCf4kFbYX2kdGEPmTkaz3xuHVypaHbhpEfDgBSKeq3rxT7n5kxx",
  "key32": "3xRMdz2VNDvDyznnwNcHpcL9qzpLBm1rBug1Mqjjmm51rkK7NwVn5CJnzXzPhSjuyqJbnkDemUCc9SAfpFm1TXFM",
  "key33": "3ng2fkfE6XrcZk2v96BVHoryySKAo2EHCxX6tN4VvRoL2PDJKcGRXBKzgKS8Ug8nepD1ZwK6WYce46V6Z8mw3nHe",
  "key34": "3stSqeMTBWFjbPrFuod66WFkoTty1PaNV3zjv3SdELBYyzNBAje7kYBYM2SxKa81jWdpGwmF7N3b6KCHbS892BzA",
  "key35": "PEuRbYmRQk3wMoUHv4jhNz8KD52dkeHxesh7zSouhngDdEHR59BegXLiyh9cCM1q5C7BVwpQ3hKh2Zm6gUKXVQq",
  "key36": "5NrxQc9TS4W5zJErhsZMAaF8hci5fY5GfgpTeLvSzZg2CQoz1wq5Q6Tu5ppjBT6ZVqLUA6CpT4EqLtuhQnPVD1iy",
  "key37": "5mGHu9VTw2YQifgynTFyTB2epdSPVdbgL2HyNvRpeK3qFxcfXHVZRmrxGPpudvqpLVCmea7She4f7W3fQJAmAQxW",
  "key38": "5cgv3BRykWFYMkEXSibQXvsykdaHfNeE7ktV4GQKsYfWycs4wsVjYoRDGcxc3bJ9Frjr4ukPtGQXi2tvFDFKe1WQ",
  "key39": "2rVgwMHmfVtXLiDdWkiqWV2bZRWTDGChCgvEtY2ovTtfiy85wzrGjVEJiRL2vQHtfVxD4VzMt51yPFiEcMZuAWna",
  "key40": "2YmfR9jSBNb3tC2Ha7W8rjY9KNzs44W8c6eupyYVzLtdazhyQ7vFD4whidnG6LYBvERXLTiGAeRAcnES9WCUWaff",
  "key41": "5tYtRnbKaEmxVoYF5HMhKa1oRHb9XdE6CDPBb8JVeQxwTBn1dLmQzAeZGCFUGFgNhU5ZQYqm8sdHkJRuBM9K6K6F",
  "key42": "2hDGJqzGtG6LD4xe7XMcW4GGLeLX7cUa6ba2wNHCUAwHApoeuLrnc7ssBeDvBCt3pzVW4pur5uomZH43p6YABrgv",
  "key43": "SzGUwm4fCCzquXGnTFSLxPCcCB1mdPSMAu7qKS43QV5QPqndzL4gEkqQUWXFEnxtmqKJdkpSoRfvdfRczUjNprh",
  "key44": "4uDQgny15Mhbq24f6LxhaKCJTgzeP5GcZYWSX4fyDMVaeLoWS232gAAqJZS6hyxS1GGARsDg8ykK4diuuPfpAcfU",
  "key45": "3hviQXcEqxrjyBHDNjaCeXfore6CytavJ2M7dd5SXUrcQXGiBtVxvbKuJx8vpU6Xcjo9fMuwSX5u8DGgwLsUfe1B",
  "key46": "3niKHLf18gcCTV5muCyapPWRBmtwSxdunKbLnyeMcqv4v8c6QxCqRogw4tjxZDZfCunR9DPWwhEZ1JzuqpBtsGA3"
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
