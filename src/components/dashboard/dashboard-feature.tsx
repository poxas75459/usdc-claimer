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
    "3XW4s6BS8KVPMi5oXR38jUzt7eNKP5UpLyBDu7n3KYBFBmkriNriA9TUzyN7MxepTJDQ1WYajEdFQzadcjCUSig6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NDwqqW5hwokdvunEBRxCSvj7koHivhfLaSNt7D8MxvmJv93NfiPt951gMV2iR548GqiL4c5ySwdHWLXVdoXaZ5m",
  "key1": "5oG1jcPwbh27uspVsfMHBcutzvyKX62bxXMPL3Z1Yu5sF3U4oTCG23EzRrJLEHyKhNeuq1oi9F5rGbgT8PnRPVSJ",
  "key2": "6hbCcSr5TQrgkFhSd78B7VcM84sZeTx1QC2ZPiizWuos3b7G5Ekr6LvPb9SezhwoVVLPpa2AUNj4gTpca8TjAPp",
  "key3": "2oosaPTiij4PSXfkWReP6Pkxgrygue1ThcC3hDgqcX8xianWbBZ85mCPwRgRvkBEwrzDMr9SmX3TmLZFNAuaprMM",
  "key4": "4jFh4bpdVJdLB38oBrTyGVQ9xgNeLJZgipX7PcWejVjNmw8opiJc1ExGPo3FDN2rN9Utg2T646HWzFYBTpDn27aq",
  "key5": "gi9AG5aVeoaLpUSs7th9zd2ahsdKFGRHgpFto757XaMPP8auJVgF4qT6A58CN617tVqzBpW4cpZ1gHYqYrB4NM1",
  "key6": "598JLXQjSE7GwDiH5pyKKaDkpzdWxza94rGBEVcQP1HDrUpApsYR5kMANU29zPUw8riRE4tf8okhQHT9TU6BXz3j",
  "key7": "uQX4pky9rkZ6k443SDqUph6S1thDNyv6yWX5A8CCuzqtVWZump7xN81Ze47TLkZ5fdTs6P9r4WRnZhE2JSyWQim",
  "key8": "23M7QdNyxS52ZH6jbWHWwkBc3fRrkBSceKw6NpkyAeYwbJtvCtwUHZrUsRpiRy5bEUM6wyv5SfZPVMKvJ7WBbtBu",
  "key9": "2NioFPg4xfBqWwC1XCsFyVcpTrz2SsR7N1td18vu1LcpY5kif8D31Z3bKeVPGLLokVsjXhS6oT2A59u5zdoLvHSf",
  "key10": "2ZGrxjEi4AjWXhphjDCeFAGPTyNa5dK6KwVebwStMw8TX91br4NweJg6MkPqPxWMKNty87SpJtZcyiXtsXnLvQfM",
  "key11": "5XCLqGPhs6SPkAZtzJ9EY3eEDCY6qcowPeVqFXZZbT7GMYMvrAWWQeFJjcsyeGriEdNWsDpxDWBF46XVQY7CsrfK",
  "key12": "37QAc7MJkpKrJ8JgqH3L3qiRN6LTUDaoTAFpyrZjAvSdwtsxrp29F3B3C4U1iHC4mAHLsiskYpyjmfLptVSdMbN8",
  "key13": "45uwJxkUuk767D2ap1p8AEfVRdMLRa7eq71uiVmc2hgbWRPdocvUb29XoiQKDQmorn5xkaqcnXn9NBRWB6RSvA23",
  "key14": "5J8KUHUJkaiBac5JtNwYooAmfFPmkUSij7ZzZvzFqRm8JTfb9vZ6yB4XmcASWqHRb59k5qTo9jVvwmxLF4ogcRVm",
  "key15": "3PSorcAf9oUXnccZfFimvpZKokBKBn5boTx7uwVkorT8xvbnCAUqN7cWDu5xuCCj1Fun2L6biHpioBdjqxXzCxdA",
  "key16": "4spFU5vYL49t2hz3ir3HZL2Z6jxUHFh9U2aQn16HnRN8eWUXzDCYpnFBWM1M3dvzGtFDr9H2q5mmgqBDj89jePfn",
  "key17": "4HRHtsMSBhhPv9UkQHxkSK5qbFpaNkZArAPAxE9VVmyXeE4xxrhHAvHQPbqbkY1QcRFW694J1JD41Qyw4SGvHgLA",
  "key18": "3uy6xpz52wBRDndJfvKzMzeCRyENsDRAgssMufrx4Q99TwQnPtgirU9Qvgqnm1oRmY4kSVy8NZSz61NeQhAZYkHT",
  "key19": "2fwgGV5NbYg4H7aKBvsVe5fRxq2nBTDPgtbnaY47rxnWtVEU7muMjJS7hA3dcf6MoUJEUerN28uyB9UjeKS56SYN",
  "key20": "2eCf7NQT9ZzkarT2bzS5uC2dwLLmm5nApB9jkAxoE7EMnpWFr3Pnekdbe6xqAVPvduauJB5mDaZJdhUQYNZ17LWp",
  "key21": "39m3y1UTGcEDD2NLupBwVNMjzxbmQqBJNbG558MuByq4jqwSG6AngSQCX2AekqtgYecqeW6gamPZMF7TsHwn6X7j",
  "key22": "46gs9XGrjeFALoWQy71JoHXrC1Lwbxcr3HckBbLhy4WtfUhFWm1z34tt1Trb4CZ8uPhZXu6pTK7FxPsjj2i6NBY",
  "key23": "JbBNrHQP2ZFzd2YxUmkLsGXUJzcEpcSY22P4mLJMKFWqheR7YUjQq31RYf1CUisyBS3rMxUiMooHnJvE7oqQWBf",
  "key24": "568UE3B6YCgZbu6hSZjjxmdv8fkppAfCQbuFdZu2MyT7DjHT6vr6GHtbhzwG6C7QjpHkKcWjh6HntJL7ooqaecCT",
  "key25": "4jDAQTHzSwjGgRR1hq61j1jxjkj7WoLzLt5TGNCck167T9aFJeZrMhs3iv5Qb6uDXZ9tfspgAjqAUtBkymfK1yPD",
  "key26": "3HvegMNkhBCAqbnsA5BVZvTmuDx4dtMJ6BgGjkmwy5TxySAZwwwx4ecYSCuWPKm64g9oZEMinoPYxXK3qSnH2Qox",
  "key27": "5LpzMGEC4ggvyhHuJ35QJz2Zeb6oTYXAD9eoSBPCH3Bkt5mVy5X4W9zy24ooDPjQdDciYDTqV4UZWZLFao5jQgYS",
  "key28": "xRkEpnyrWuYstY4na8qjRvS2eEqzHNmwiRYi649Tzjvvq6iyGWXNc64G7xPSCEA6oZQ43nEHo47wY6tZsVyriCc",
  "key29": "3gPsT4GYAncGEHFXiNn4oqJmxnf1Ui4Gh2BZg5AWPbscjD8cnHWD87ULM8oPJkj6Y3aeNQ3m6KeFEiEpjCWGaBQ6",
  "key30": "4souAZd8jWw8z8qBffn9mXi7EhUnBp2NWjU2HJNCzfn4Qn8ZPqTZvyZJ7Phk6uoMw9PaxGADhSQWRmQSFAaGHYTC",
  "key31": "2R9DX5KqY8wTEUUVAP8gpinwykSWav1oH5gzFr7T1shbzD3u8y9mG7Zdfxg3XWSYC4ekzSzSQ39XABjZuXY52vZo",
  "key32": "3PG9tfBAMLXAgneGbDfXqfvdYTfkD8WSMPowST7xnquPZY6dDDRwG5Vn4E6JxVi5vEDExd5ByzWQbbLc6KGxTt6W",
  "key33": "5F8rWpNvUBWJdN7nvkUC35rBveo7AUHfihrvjocNgPt4j8y2BZ8iAejbG6NwfJubd7uBzNFcxu6aT1fs1afz9eeC",
  "key34": "m6eT2ujgyABkNH4KyNuq8jBNbhSaYVEoYSaRYqiZ8814beCnKdrQCW72eaDDSD8CVeoBog3oWs7DJpGis7st39K",
  "key35": "67hqJ1C3u7dkLEN2NSoYi1R2ZfKFBWjA91smCQ8sHjko4Twwz8azyzEvgjXwsa37FKaZXik1kaiYzow7i7vxViEM",
  "key36": "3feqy38Msc7YF6JS3hkvgn6Bx98wuVeADfRHdxz6f9TvDab39BZf35Jvjriftup2LRmH3rq57Qm4QvSGxAPMEBZo",
  "key37": "2Rsc2PVgza42UzbZjkGd6HkSj6c7KbKa8tvFQpMMT9zUaDhL5PBbuHL6cnQ4k5EYevQBrL33ACfzs4P3dE5cyn2V"
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
