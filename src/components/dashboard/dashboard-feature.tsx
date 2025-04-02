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
    "2g7LZQLB5a9XnsgCGdaA2M8ufqiyzEvHEfeDecpcMpSL4HXi6zfygQpsHsprf5iYZcfuzYQ1gzQphqFFkb1dHofG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rzfh3e7aoJUu8MHttsGqVG13HH7n6KwfFk3XFLcoc9FM4ZXE3BHdjRxo28xQaepjELN1339NLcFu8SU4qNkDSda",
  "key1": "3q4RXJcypZtTQyonhSMcYEBnqjc1k335famfcp7TphpBuDnqxoKu7ftCmoVbGpoULEdyCkuRuQ3hPoG38fAQXwXp",
  "key2": "EefP5RTgxr6ZP3oLUXK95FfpygnWKvsRstZ2AEKwuVUyPXFTgWGpXrWCW87BQumfT4zR1yxeXycir2iNLfP8qXm",
  "key3": "35N5Xz5tcyUEVufn5CS5QfPB4U94n9cfjraDDNXWPXwtSX2SmVcTJxUhP99M1VypWc6bZ87kdtz5GWWe3Vu9TVQM",
  "key4": "52sQ7wZqANTGgdsKGHCvo83utsviminmfdT5MpKg3pqrW6LBQCFJEbyMhciq6zBoNHuk3dtmMDoCwSDXS6e9CaVm",
  "key5": "3MUiTr8vrC6KoL6dgoAFDGN6bv4VV9fMgkXeQEDmdrS7dFfJEDbuY2u8LyXxupTUp3D4c4dndWTY5RUEbMD6ghV7",
  "key6": "2GznPBYDNWURMdXkQDQbpPovbvqqUzRYjCZ5c7vb3sz4fQUUvJgGuDU1AWJRXpB81ixAR5kPjhtjPJ3YwuJp9YhB",
  "key7": "5SQ2EKFGGTFwavLvdeKmFB24yjiKUby77djD6JkaQ3EsTKkH2TDv6Rj6qgktM6E1vfgA7fVMeTWZzJrbytLGBZMc",
  "key8": "5iCemddwpQNLaMfnLtSLSqSTYHUnhaW1PyD2jss93jrhhGvcwndRTu4fJPSGqxSvmxCe4gB5R1qe7GN5UDmYJa8B",
  "key9": "2Kz7PQQtXeSkkqoAA4J3NdeuVo1uVNFMQTKGowHQfFxn6gidG8sjaGFBEQqrpHiMjGfcPudjRDGJLCFdL4gJ4K1y",
  "key10": "4Yzh94rvKzkfECdZrz6N6rF1k4cCU8pmhpRVRjgir44yWpN4HrMZRhPBL7CRPcuFQSnj2fnUe8zB7zsxarstiq7V",
  "key11": "2uq6wcD5MHMQ8ngnWX3NB2buX1SHMSg7xGJyNCzbwGdGGqF395M7ESWnfs4vgB1qyDykGGCGrhxprVgeypjsxtZV",
  "key12": "E8PG7LjwWmYoBAYMG9gW3VvKUJyqp1LvA9xypf1jHJ9dmR7FQiYffBaQsm4MnaFRBt5ooCcsr2vReQzBpChL1rh",
  "key13": "42EWkeJbBUh24m1hcaQTAm4o2BtCxzjkRXdrDR3zgpNimN6zhjPtb2XxCscCFw9dEfd1MqeLSD2JZ3vfDty5VgJw",
  "key14": "2J3XdQP4BnGcZZ79EEAekKeKxZYQJasEPDoHmxqoLJzNcD4cED3NYARrmLydsRDUJt74Re5PVH1FDQHPowRxhzzR",
  "key15": "3EgoBk7C2Tdm9kx9pQxFWfwHfo2VeW5PQcwToMQna9GnnZeyNZUCF3kGXofMAK5xw81k147uh6pEKxKvgdYcr17Z",
  "key16": "57SDg3iTCe8uWziRxdCF3mEvBfmKZWerigTC5M7NL8sRJTNJpBXhX8Pva77wh4HvijuY5gLc7i17ZQvZiWa2K9eo",
  "key17": "aMv3Ap1azWsjXC2npNb1sur1ziSz96PScCWCgwWJyNRwWPTLmWrFxb6hRVuHvKJEq9ngUan8FMpSLYZLcGuCHSQ",
  "key18": "4euNKd3WJux2wxSmgwqfTQk1j3P82tGyxjczRtKxFoPs5NANpNX6q9hUENgqqHmCwyiiKvzVwTNgEdJ97bmYCLY7",
  "key19": "2Y4kwSXjZTfsXt3x2SGALhKnArX8m5rLFCjZ28eTqakh2AXyAmATcQj8Twg1y6i1sw7dYNWrL4C84h9Qqvv5ypX4",
  "key20": "7RnhzTZa89MqAjKoLPZoEz1AxtRhB6BqKZqz3bHKsL8j7m7CxpTpqi7ogEHCEwXvjTxCtQ97itmXwcb1XHB5xA6",
  "key21": "5RrBKTZUMhThmMSSDWF4BETx1CSHuo9wSW4GJknMLQ6srwJBeFtWypQc6mPmEv3mWWLoPWLyZxHpovVa13Hc1fYe",
  "key22": "4nz5oUqvqmC3P2421uLpGRF2K7sg7HT3PYMbWdaxdqhMFcAiAHmmvc7SQzSU7LvR9EBxUaUwV6vuNWh6nbVCtCoe",
  "key23": "5Q4LMRZLPQpqCuQxRqXvoHmBLsabkinLf2Rdqcq6x2exYMUyyuEc9yDbiRUrofb4gqw1mrj2e257kFxW8sYbRZne",
  "key24": "3VoBz4GmCqS6iYyGkbZfR2SE1k2cmWtwZkqNnViLtJp3bsZ5UKX56tArTgPEQYC7LMXv2TQdHxw3UqhKyTu687UM",
  "key25": "2YsbvFKdXkDdUQSYreP3CLvQLJywuRAa71CCy7xrjnUJqVV1c1if5VqdFBJVDXTDXTAK2E2XLAYmaDnXXQY7EUoQ",
  "key26": "5JW8BE2DJai8KNPqaqqxdsMPWSTTtGymZ82fdBRvYbnbYeKoJVzdCFmPF7UCBFCSa3YB49Eov4znFvDJpyZ13znY",
  "key27": "4MXGTbZPmxBLBTESxo1AxHBKEEJqr7HpXQcqNgPD7T2tU6kmr9766ec7oQFZdma51giYrwhUpijgJtRXdHP1wbuM",
  "key28": "2k4Y7tkonXB1Bso7eTrUSind3rG6i8zSrz5vuoNG6H4wtHvD3g6ByM2C9D7D2C5BUj1ZmDxLAMUBCyGywF8tKC1k",
  "key29": "5ZP332VEt5cGZVAZZk75UciTjyLRXRYyqXtoQqkBHpFsSdro6cLWhEGx1bHihpz7DYLwdhmB4rwPP9wHMuBbshpV",
  "key30": "nGwmJuhYRX8wtrnwfv93dkhxR5V3YpKfemkAFndXXYCrC2Y195eZpSKxUFQieV78aFMw4ojQ3LnkQuqFNbiPbdk",
  "key31": "41xDSU1kZqibQcjZ5JMS4Ctd887c3bMaawWHabUVLUb8TQyTxz2dmEf8fibXqUmccWvpnXH3aoauBUZBpohwxcGC",
  "key32": "jLQxjbEqdA3yzNNkeGB48b5jSfcHffxBVQNWvKZxVezs9AVidQDi1YvihFSfjqJxMKuyjzk6v3GygUP6QXmr3EC",
  "key33": "43bUsZQSdVdDx7Kq9j3NUAQrrHA9DL6tjsGpBwfPMoiMZ15D1XvKKXMgMXbqUedDh68HNK3gLtXqVSKJ8nBiLMTk",
  "key34": "4aDirbdhGDFDxnFQcYKJoobqDoqdQnj7tdsHgw7EZMwnpcbeuU2DHHdQ9mAgvdtkv5gcWQ6j9LhRL9FDt7Ds8TWA",
  "key35": "YoSwok5Eu1nx2ZuZiNczcJmcq9ZnH94DZVFqEv5AdNscawvGL9bXj9JnqLPAqULCKFV8BDQp3C2XPtQzCBrSCxu",
  "key36": "4Qn5rxUpnvp7cprJ8RhpMTGydq5Xn3kPZinKkJekqJwYFY9wU36dSkRhzL5ShbX9LLdXdFQFfd5QNWkvBbYTRcQV",
  "key37": "NvBN3DDKZvJAkPZJaBvPW6VZ3BUWg4Jc2JPcJTh8hHrGd9gWJ2TYg2vxLzSioPAAs9n2YinWigzV53svwrDjGGH",
  "key38": "4xi8NGGLERQzupoScE9Hx7GUcVJKHb3zrM2fcfuAd4gRPdf5mDkhpXGyKuZqM7Apx1xd2eF1egJaBaWsHphDmaTv",
  "key39": "3dFjnpskhUAZnDLsFsEGwYAVfbe3DTuR2ffejup3Nyh4NwY9Hvr9EZVyXfXeVTtwBqtJAYwPX8yPmTKeHQHrB6EB",
  "key40": "4MhScavHGwjLgqys7Hy2tjuisnH1jeA1pDSS9PhvEt3WyNhQbQGpNWRcQJwvEG443b9WiahDEJ6ndA6h1hSSEtvh",
  "key41": "5EY65ZWkHPpXtYeS3bomT8yYfoCGjyduUEjrHi5dLK1J9AaSAAeVdMURV8DYvs2nQHF1QEoAEfmYk9t9vhwFsGax",
  "key42": "4W4hTwogFyXYiDR3aBb51fi7CufFzWFpqSH47cWsATzd2a9mS3jP23V25ZrgQ2Uj1M3VNbkbivDPnVRveuoabZSW"
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
