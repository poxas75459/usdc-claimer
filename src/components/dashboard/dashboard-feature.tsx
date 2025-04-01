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
    "4SsTLaQbwPvZ4VcivcVXh2d1n3unGKdMv7LzJLSpzhYYme3odVPrGGZwsvuPUagJc89t9D5ia25QiMxy567PLxHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nuSYteWfJoSZBKr5b3AE1Y4hkpR5HKX3QhER7tigB6XreEiTVkp3vz9zZjFkW5jhqfSsM6ZpGwkeUhUURPBR9pa",
  "key1": "2oUiWXVrB2uMWkQQ8T4ttnUowgFnGu9bmrkHneHwBnFR4fjL9vZ35QLhoLLKVKnYhHMduC4RJgi3qpDQfSAboeHf",
  "key2": "24L9SResfLNnc6BWWER8Xiq9of53GzsV1zt7fkWNLVsnYNGDnSYJCvtfWjBiUmf3L4bH11uZhU8AvkcE6Bjmvu7d",
  "key3": "9inVWTkw1dV3vhZp3MkM3AF778pdStpc66arDB9UcHPcrGroHQdxCPuW2SjrYeA9uHgy8HB1eLAapvXtkjNh835",
  "key4": "B16wkCPBTe9eZXCxmVswi64x55y4XZc76jD9Mxh5gLrq2ekC6r1N3DyHibWTbY3nyD4aKyzJg6pXQZV4LDoC29P",
  "key5": "3x63zLucA811cTUTjWURc1LgNaDeCL6a3TMrisE3oTCj8kjfEzToWEpFAtvXhvh6XLkk1jew8KkAmzJWyZbJ3Af9",
  "key6": "bmdsyipQ1tvUqQeSUt9uUxECXehSLYjvz83xnRtU9fUzR4RVAS3z1Ma6v47pzS4PN5F6FWVE9KYfvgAJAzgWpLS",
  "key7": "sZ6tMBBT58ASx7iBcL2RXjQAZoRm3fZCb8Y61NVutJtCtiN7ECNCnHYp2JTob1SKoaXvbKQBTgTP9fdPgVVCHG8",
  "key8": "5M3axyUADMJJ1gqfCPZXPTg8nDnaGEC7ZoCCoRN1ytZdM3feNRmJ3Z7dF3A7whpLvMsZywmXKsZKyh78Htxzubfr",
  "key9": "4BeSd2P9XQWs3cRWCGCE9aQ99b2G3zoQHHmwQXyZQCNBtHw29WSCQjjYrRw6GBwUQmyYPdxK3cJ2gFCvwYpr32A2",
  "key10": "hmcKX7v7ExroBpQ4LLyA7X7q4x6orzrsvZZr9xjwRUdEVXsTLQiAPAobDNxdTdT724YLJfURJjCiyxPhH6LRDcS",
  "key11": "EnEoGV58z1rPzqtLdmBsKqGscYNYkaX2RGbjEdpZCdWnz5RT8SogFyMYBhPaAokFSgArkg4K4ynuQ5TFzNWoxVo",
  "key12": "xNBJyduSDhvRfomypLyPD49p5ijY78iamdv9jhUVtiy2Cm9kdZLpkDuNU6W12NDboLsKnEkaR7Ttfqdq7knCHVB",
  "key13": "5PUsCe9SatGtkLMKNJEdci7dT9GHcjtMTaKf23TG77hTpUKcw6oZNfkTXBafS9SGmDDMvzeYi7RnKex8JSZDyqFf",
  "key14": "3uREZVz5MQza6ZRAiLY9FxNt3tDfbks6JYNm7qSHFteYhHBkqYxZCXFqiDGLB8WBFrQBHKXq5MSddPpqo9ifWMKV",
  "key15": "3aGrCP2omrChPyYXYKjKshzskCTb8K1zJDj6u4iLQjgZ11KijJzxK6kvaTioJnrbUxHQVMt2pafhVTQF747K3fA7",
  "key16": "64YSbiMPuNrPUfGTLHrRBxQUdwdLiRrTrjsXASrmvs6etgihTM2RNPTp7VvkXkWBRfs72Kd2CE9nfCYq1GJNgkYu",
  "key17": "2fBcXRnaGay7mN9BSvAq9LJrLA15k1f2Y1Dw6nFTtwDkA2cqxp5C1PvytQuvCriBF3jUagoJv3Z5wmL8zeFa7jjv",
  "key18": "3L2m1d3uWtswmVn3jp7Bm5amdBrgXBGZwXcGu7dpCoi9BWq1EWAniTxzns4e4ijLP5QPdZAdhPoXxrdpCo2u4hMt",
  "key19": "56YH9agqqdVcYPAQsuw7YXuDWLDxV6KmnSx6S5NNYKYTYLHcPB4iKkTMhGQxv79TrKQf91Wmanrm5urgziz42B28",
  "key20": "2fym3rErxnSJg4iec3z8yYjvwsJMWqH54WLuTuqY1PqDY9vCbEJ57LJBRB3zwFfisczjWNPjbAZTY9r7fitx9T53",
  "key21": "5hBeHXMtga6QidRWTKh6Gvi2gyVBXQCufpovKdZwg1qGHGXbinK9odDYU3CEFLa2Ta22aEhXNCBeTFE25pVaysDG",
  "key22": "3HMiX9n5u1QC8thpS62MR2VLEGQPsFtxQ6W9NCA3yX3VQRstvFU3YZnerNnW93kmVzUkYduBfM9hPXY8zTNSiTUh",
  "key23": "4xfNSAHRzdFrRCUwzEwB3ifB1e7RyHYWnBd5An27kjHTpFgGSS1iGHVW3Wo1DYJqYPzQPmurHpQ3bvtffuquAvD6",
  "key24": "4uakDJLF6iwXaxPpbW1MUnbuVDT4aPV8bmsadEYH8uzPxUa88JG9qSYp6zoj9JA5mbP9T9e9akdTCCwUbs7GoMhH",
  "key25": "55aRhnDZoXJRbZuBK1t5fs32KqU9kBHbQbm8zzjyK1HWbsBNqZbyZF3vZTvBHK4acgBaGabq8fz7bsNL16Y2FB8C",
  "key26": "2o554YAFAdkTqqy7nkn3FDrwmuHQUZFqheBeFRpEjHFS8QmqDUg4mzWZxq4oq6TcZh7ijUUtGguU9whsrcA9xMqm",
  "key27": "4kyy8chwtP7eNtM4qUi9sw4WLUMU3byQZCcDefowPnqd6LHQeuKK39t8pPAb1CK2otoXencAnxGCVDcwQzdmpKyD",
  "key28": "2TMdCscHU1T2TnBHcizAomJ4G6jsDEm2wvEh3dXA2AQEmaFMZpqUHi1nwRs1zfZD4qSowhdYhUJJSXVpcyrK1Gb3",
  "key29": "3TL2792xrwWiuHAekmqToGko77xWn5EaHDXPJo7PG77FJSwhkPP2t7GZZdntFNVWjvxJCV3CLTfeDcScppYGW8LR",
  "key30": "619FN9mHipRNaMnwvrK9DgJKrgqHMMd3LyZ8TaHw2irYwZ2LRrCy7Ci1m9LVztM3YPNGVDfDFxeHhJA8w3YfE5Ff",
  "key31": "2m5nNVVM8ykSQreEHTfU1Y7pKzcjRW1sP8E6UpKK3vsEivtrTCA8hQa5pN2shecvgD9TLpmhSbo8vALWnnWxtDjY",
  "key32": "SWhGkgkDV9mSGwC67TuBvtAANecqfxde5K7PPVZ6QsM8HF4Bvthf9rSLCViAarPdEyKDfzb73wkdrZJsc4hJfrm",
  "key33": "2zWia1AUNL4hPYmxfkxvsX13A65MpF9BjjZRhW9q572Vi4pwpdqYxM2fAQu3NARUfTLFDmueLDW7b2YcRLC97TKn",
  "key34": "5URF2geP2HjwuFaZij6G4GS91osbCjUjt2JhBjjBQhT8sRAqWVPb2wHNYzF5vUkApuCspCzvePYw5L11AT7RWDmg",
  "key35": "43t7FjC9ZFfZ7bmxY2u9rvhtFG5JW3f2J3PfJrFG3KxqDBBFgbC92NMa8BZiMKb7ctjabYGmXpQ2N7jKZVXsi5pH",
  "key36": "5ts6Yn8VPFk2Txsc21s7N4YwQ3a4iFQLrYM2hEcEodgXY5Rs9NwH1bzphS9foxSrQadXJguzjgwne8o5RMAdwpoa",
  "key37": "67pq6wsZkp5L7SEXd5TsXkKAKM6HpPPuXJ81wuH1gGH6YWMEzkMB4kJCd2ME46oFAYBsvJG143YN7LLBPArugJeh",
  "key38": "4rdtPyokQZSh35MEQZDbjWmn4149rQM3xKmBzTw2MBjFpyrTWbaymhC6JaMAD77LKNascHF7NYAKGmw8edW8eZkZ",
  "key39": "3BQPCr5s8tYhf7zjZTbR9U23H7NzkogMGUBpuxsh1ZuUGMuMExLAHc8srhE29a2x9PPzpdPgh9xzNyef7iQSQrmE",
  "key40": "4WgS8JJ9fqNcqHAeSHNCJ29ND2wjTj79EpUmghJgQ6yEvocBdKojHsPWZ34GgPk3W4f5EpyGF9wFf6D5Tg4vFyDe",
  "key41": "37PzaBNK6LnfREypzYhMRQxzJoQFGL9sLRVJ2ERDZktFDPAKemJEgrhPE9hy44dbEsuQCkkJS2QruF3Lu28C31RJ",
  "key42": "5UeShE1duap445jNdysqRK6VMfJyzVQZ4MHYtCaMDb3qDDsN7qbLZUrk5nztHhE5JkL8hbWt5UpqzLxf5kiyuVyf",
  "key43": "5k25z5d1QkHngC8oSUU5cGJyfQoE15JHwEEWSztkzPhA14VeYnS1TAkpRwMcmzQYaJ1pYSVs9jmXg1PoAPm7Pjiz",
  "key44": "46S397m8hTJA9XpgYd5SS3pWTT4RSTyybG5kUfgS1MF6LjsKpFDVQsaq69VuwCzLQ8y4Uxv82tndvvkpjTvLpdr8",
  "key45": "rnhDVtUfb99LQJBUiqU5yR6VQfE1Brd7nzL6rhgnjR3yKWNq5A92NRfUWEHBxqPQGg4ZRFtPQMubhoLVUV2EeR4",
  "key46": "5koB9mwZhg4rqk9TTYnpah6edG3mDuF17ZpbR3F678CNosusUrWGA7LHZAGPWBYXvXXHoHDC7buFTNdj3Yr7hJub",
  "key47": "4oeqvV2QNr1tgrZ2rWEKoKxAc69fJ8pWuEyzVdQHn6NB3KYMJQPiJL7ogDqs4xEYuajZJPCFjF27vaPptD2538Lo",
  "key48": "5N1TLYm4FYxGfgky3b78m7mbcbqmyyiUoXfnFrPaQmGkBbjbzdC57szPwJmfyst55iBGyrRiAJhrsG8gfi21kWic",
  "key49": "2NJvL5EXfUviZibyBsyPbSaRNMK6uRDx33KB22r45m9evQ92EfWXXyB1ZNmCpA5Sk5rouQfdJcjcMHBwaPKegA9h"
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
