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
    "4tyztpYUuZzWseNL9XJezxiHyqFYseiayWcpmHfta8aCsXrR8Y55dsyXxx1he899iVPQ4uZGsiiYV7dkrFZBvVnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WCKM3gcqcPR86ZAB4swTAuNRKoij6Zd9RE3iKy5QXDSid8RTAtfGFJkQ4NBEfDuEhk5Des5kzCbLmmNa2kNkZeJ",
  "key1": "48Lqp5eEtZ1KCyNnuzD1iqd9KtD75vdneT661s7QdakdthkcHFNbocNBuxBkfGLUw9AoHPb6XmCv6obeDHhAkW2u",
  "key2": "4TPcXwG48KUUmyddwLQTjPts5KwrBAg6ZxsDQZ4GjG7XHNPQx82gdnyi6axLTjKWcSxwzFc4eGh81oQ2ptS6giT7",
  "key3": "5k1BqacX9xEQm21kGra7Jxj7EPHAfnhw8Ak5e7devzKpmJsHGwPHMRojEKeJeL9t24RWG9rakK3nNee7VbhHnmwr",
  "key4": "5tuRqfYXNA7XPdnMQV9QDPDwGBbr81pb2dyiiub6bFnFiE1iHka69mvdgu5Z5A5mDr9xeYCzuAkjGwDUFwvzUobB",
  "key5": "4g9U1gMe25vpTZb3kxdq3VG5GpJijRWezcmaHXbRxKd4TxnJNSx7T45cPRJdS7tWJ1Uy8hWgtFSga9mVXkgnShp3",
  "key6": "3iRctkAxzA7oFU13HgE5s8ga6vbQWCa31vJQXcXBqT1QdPEgCDHajRSfTLtDhFAggGT7PUTE4iGqnLnskJkEYLzL",
  "key7": "36trTAdZ6BgT15NmE2Rws9fuRGw8ZxHTz7A8QQh9dK3v9rxa7THf4e1rCTekSrbBiEgmSU68VmRY3eCW9g9EorKx",
  "key8": "2QTPQq5E82dwi4DzCHT4TDYgi9KG6YoYeMFPbKQ7Xw5gXG1DTn5GDLTMFHt1vsdfQW18A5SLyP8Mw2ZYGbBNfxZq",
  "key9": "2cNsk62n4d2Hr173g2o11Bu7dzDZBeVwT6uDTZndXTDBVGDYUtHDJteUb5BgejFKuY79Z8VJ1p2kBpfqz8NrS4k3",
  "key10": "9ev9z955hmJG8XvWU8WtdPiq3noyeMz17A3fZe4FYxydDpbYvdHmCtQJiXK7RmuJrPHM2P6bTNmoYh7uroP5ycS",
  "key11": "5M2CHm1rJnqHoQMvhseHqooT7YbWiAsK5CmNFp1B9eNATcuBAjsT66kccTnJHWmfJmvpcot3QMDs1pM3qf8hZ4Yp",
  "key12": "4Z6kVsAWpk2kdk1UqzNM7ojm2EBtiV1VZVgqHNKyvpxsaS32bvFWpfzL4rkXizgyAuHB1KkM53yCNy4dwSu8N2Vx",
  "key13": "5nmiMy9NJEV1AWtQZLDM1avc5KamheRDesZBQvUkzoXttec6znE8u4Rot3KuWwkKDtBWSQvrVMjTbm3984ccGfaa",
  "key14": "4dfmQoUtMxkW7trpT2X4JpjBFPRYt6i4vdiP6QaEdYUfEqSH89Cf9F41HJNmtgweEggEUHfboT9Ymn9rgpuDimYX",
  "key15": "5UbBxASErDftAE4mSBYuAxmUPWCtmKAMwu2hpxQj8r8UaYbeNEd4Ndgz7FhxnepjyxYTMRH6y6jaB46dc2aA9Ec4",
  "key16": "2Lir4DbB7Pkv3JzvZKDvhw3T9qgLFNtP2LLMGrEaSHFvgAQZotS4Sx2LcTghESjP1uWaNm3r7nq5gwb2hmg9pFn4",
  "key17": "5YkogTquENShJbjueUE5zCe4jXjeFKmu1k6G7nT7BvwRCGeHK4Q5rTrNohXCTViQKMR25voTJPpEwcmobYrvQZLi",
  "key18": "4YPcdRZiNHdfyJpqq3cn1qNZFzQLaC4xQDmr9SGJvsKknTLjtQJTAqEC4kYpnxDuVUFqWqgHdfAhUgLRZdrY5d3",
  "key19": "2uxnGRtGEe9149KtSf3g6GvMZRRjL5C72NQXEb15zegYqqhmSs3qaQU8Erj1DudSaLLEed9LdcE9eLJGzLe8uS9S",
  "key20": "3kFmz5FA2KsWd2C77PP9BXzNhFQ3ZHQzW4g5NJvayTBbMQe4wcbeW7mCidpXjtbJcRLf9axk16h7soNiFtSZAoc5",
  "key21": "5a6CzgrpeVm7FJK7oh5oqYGDZ5xAYaiW6YDRmCp1g6LjJ4KiKaQgjAXsaSZCQwPrTcV2HHEJqPTN4twXLx6DWsfK",
  "key22": "4PzKbxaMDZM4ZY8roS2ZYtngvxWeTRswaLkzUSj46eKCU39ktT5vt8acyfhAJYUnZf48WduxoYmLPzNoN5oxjXkN",
  "key23": "32nLM1DRaA9doKENesjTG87nP5ooxQQAr6WSzLqeUKJ68zh3bbfEfN7Tk7XYTZDRtHTVnNZQGRWyST3LMMuVykW9",
  "key24": "Mxkt9uYqQY1a4pfXGnpenU6wXDzNomQWqodCaUK5hc5nJzo6zApDJAApGjLuaBzuEBnGPHw9F6APQyyTngHbqzz",
  "key25": "3kExd8f8YWJFXGCvPuBwi8sEPsVWqo7PtMwfaWLPpGYMXJguQszYQ18BU3hA9HRj7mGJNqKF8RsFcWwzWakYXZnC",
  "key26": "32esjJe1fk8SFmubYgsHj99yZ1kPG2ugTWpTWH4QZkf2BjvLU7drWZgP5iYMqTLVQFSw5moa76v2nB9URwASdMec",
  "key27": "4ksf1KTcwfX9E2Tig44RYDVUqi7hjTg3eaemwY36KiVczmoYG88LW5k9Fwvm6RdRumh7GQA1Cq84sGPyqUJpzfBV",
  "key28": "EfnDTh4JjFQsQYmzumWf2XxEuZKLBLyQgStw7pwRz8KciugAVHEyogeUivBNhqhkRNcUZ8GWZV2jWx7s3MuzJGP",
  "key29": "334JXPreEpJTWSTygBdMod5jsxhCZJHLGWYMEkGBa79UdkNgSgv7azSybH5F2SvRjT6AhatgHh8yE6PZQYUJx7ae",
  "key30": "4cddtweTkhbWGLvua92SbtdBEJQADvoBh7CmX9UJHupQiFVroEtAFVy4Le1y91cSt14VuTQYpze9QFkvEkQsbdat",
  "key31": "3JGFEhaqiwEwthXEreuy4FNz9oYyrekjBKJSpti9sDVt42L5QMxVKWWJVyrVMaxYgwgqR25xLtEpATDxE41EZt8T",
  "key32": "4aNwRSHdUpXBfyxW6DwSumdE6vv1QPmisECYWMrgAN37Gc8M9ayPfwq4GCBduZSFQ4CJYoLqtm3Q9rqfUQWxR1Ah",
  "key33": "TmDxMi6wySM1NFC5pYbPoa5Nw3qQBvcqmA141AThDk8AdfXvgunnbSGm8B8r8muGMTcLQmoLmzqV2RvMkwtpP7D",
  "key34": "43gcUMYVarqaF4gqteCvVX1TEPhqFXF9hdifWB5LXPLcFN9xkWhEvvicDPeBmHbfYpTH5nS7WfwVq2Pj2ALHVsaU",
  "key35": "5eHE1nhxYF2DR8bMNiZDL4qrsJyD3WFvf2jAt4MokryfF5pF2UyrZEUPF24LKTqSBrVas6fu4Pvru5vzr9D1ukwP",
  "key36": "swPLwJqzEK7vkMFAmZMnu54NTBRsGX2HgrTDo8VBoy9umf4eSdYGMzUUbwn4xVkTzjGpGwjPNKJrPVvS7VFofQx",
  "key37": "5Dw7FaRAZnghiL9gj1s7N2LbUf8iak5yA6p2KL9woDRP3xMJuivdKsR8tZcFNALddD3JRg7HqKMXcomtgdwauL6A",
  "key38": "5HYoE9ADgCoJ7oUxXH6QmvtcPaEdtDc4saXU5wJ25tHYtzMfew6Vs1fYDsTPb1BrzBRc8LpxQf3whgx4hWCiHEi4",
  "key39": "35KLLKNSb2BibsgRStCpPb5uP3ddVmvijGWyJqxK5ssnnLbc6ZeJ7fYj8zhZgPjW1V5ZeBLeo8toQePfQynpUTzW"
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
