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
    "23F1zVNEKgWetKNjz8T1tcoNNboXSxsUWfg3WDgSStqESv2oWQRTDdzKHFupHEC8gpc91NRpDXUhrXfwzKXciM6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UrP2HYv1C9mMSWJ8H9AyS73L5vPXg54fiapJd2r6LVFin1aDXM4DE15Ck65Q4sJ1W2zHFjWCQBee5ighZhTkSUk",
  "key1": "3ZSrcghZoro9ybxCye1Ebk7zT4R5Hy8oJ1k86QqPPJEjysbqNTvU6UmQa2m5f5gJun4U7SP9wK1Ga3xSGTP1viGf",
  "key2": "4h441H7JDfE733DWdHgq1viF4TJZPzqtNuA7jgP98HkwrHc5cZkLrd9H7WRfP5SDY95Lkg6pPv8fkrpCJ6uU9hER",
  "key3": "36JtyfnKcaCMxtxUMWsQnp35qx7qyA99C1edGJMMtd3SZw9BToq38xRKm7LuV7NgvrRU4XLanH7bAZsPyU4hWiFc",
  "key4": "YMvyUPsXVYDfU4JEJqLjdPgnFfsB43zVWuD8bfoeiae7wuMmAFQCMr8x5EDghA7Yw8QCAidmdN7R84Gojv3knZC",
  "key5": "2hxpqHt7Atbw96QT5g4uSSp1S2qifgky2aZPdmWkMALBh54GWmCTefpL8RJz7JrgDPZZTXKgKoU4sUBvWD28di4q",
  "key6": "QPAE6MWRncPuGsHL32Pt1Q4KfKNi92Y7pYCrXYZwC7VkYzdJjARpiRbLQ8EqCh6m4R1PH4FbkvQ7wR4mMkYR9Pz",
  "key7": "2htWAFKzUQavgdKcxVEcCix7NLxwEr92tevcWsqzURusxV2YqhTK5jEj6PvLNMUYMjNKoXWvZUeyD2eBjfTSLRWu",
  "key8": "3GDZ2gdxhJ53BnyAnfs789BwfNwLMTwrnAby618rkUArVQ2A7PV43WA2E1RDybAKjeu91pvTyzDm7Gz1CkkwmBF1",
  "key9": "3on5Fmxg4rF1BoyRSztXJcakf6hXMABBM6kz64SYh7Gzu4yX3unguWz5hXc1Mc8PX8TWhMmsm7B3WrsBKZoeyrmM",
  "key10": "2jNEf6Fs9Sj6sc6xQwWgnZHQpxKiEb5B8vL1TGrU7o7uYsjsBZsfjpyubh6vXuWTWHtWhuTSkvHKN3JHTaC8zKMS",
  "key11": "GABs5StM4tCUVvfLpLixdCrdn7dpz8JRu2GHisqRKEdydapuzc6jwqT5kSWdy7CuuugFhWhF9eq6wrwVpw5zgaX",
  "key12": "2bLTdhs71iYWZMezMNwG1td41LpVx15CcuMV4a9gjFeBV7CHHUWRrtqLo7muRzrCjLTV3EWbqcZoakuC2MZPsJy",
  "key13": "59bYwxyoMxbJGQ9vqSevMGzT55qUGsFmmzZfxxy5NLJEAqvBxFKWPbcXqDdAYo8bJ6mbkRy3ZT95JUNYGcLGwujw",
  "key14": "5oZkxGA5d4beKfkZPvDvBKk4KhooBnNGijH8BfDPDi7Lw2CmZB2r58YfaYUFqBdx9uhqVvdXb9RJHdR5EKcT9Lb5",
  "key15": "ZbXm4DQdmsHiKHkNufsXA9EjAW6Q7oxnnAYChS8yAb1wXBQLZZTa83jvAepBVsyWZqtD1wZ1LnKtKzEc6UieyRK",
  "key16": "WUTWCmedfnB6QmGiAUuXqzVL2RVCt1TnZbdfZ3p9NvSF45torpuWpRUBKbSg7UoqV41CUZAyHyLsLSteazXzxnr",
  "key17": "qDiFFbpch2KfdrUDAwfp6hLt1zESogAuJG6A9zVQM8JXrDhQ9aUSCJ3xi9QBgVYeNxa3k1w4MjebQcL8oHCnbBg",
  "key18": "ErtT52VwUwbMXsFBFkBnofaiZzKL1TGEcceN3dXMgWtNBceaEWepMQTxRcFBCq1KJeYPSDDU4tLeeePHZ5QvZVP",
  "key19": "3wZHbNYKQd6j6sGJxkF85zq9HpL1ggykGcRr2mTSrAcLsB3iiwHDbM3XaTWcBjj6uKB1UF3kK2W7ESUJK7Uo24Qu",
  "key20": "1YtqJkTuXQYiWdAN9DqqJV8EmgAzoVQV3HGfGw2VUhtEXFeTHtey7BEup4wSTQyZUaioNBEnUC5jQ9L1RAwJAV2",
  "key21": "4waQPKULwYrBJu8gmLt2jvgQNna5txkQbDnD2yebnwbjti3dsQDBg26ubwVfRvw4dDkHEPSQtjjdcwpaS92JVa7C",
  "key22": "452Yb9gsdjvBG9d693mYQTo18dE5jnk3oe5bRx5j7rD9NynfSpBvZEm5iJbN1LcFnFdpzGACPUqaNWrxRNo9kFGN",
  "key23": "4Xyb2dn7hDDMhZozeteRRvYSFfqntZaYjqEcSUen9LdkGneATYTx9bDxiUrfsAVqBZXNrJ3h2v1oGscRVifT9P6t",
  "key24": "5jF4dPEF7MaUVPNtVzjPdVtJqyPh9auk5B2qZTHyCoSqWuxmRCLgUGEnmxs6cZnubdnbvgxHYSJGmKkiChwEnwcF",
  "key25": "3LDT48KMa7rKsVnbMhrrr3RQbP3rGPKbQW8neqcWHZkrsQ2oPxCukue8SmGJmBNkUnhbGbMTmBrnNjsvYanUfmd5",
  "key26": "4mLSub6d5otVuM8wcRpSFqNzMo87CGWQGDFHfeNeQv8bDk3GFFLEw7VxQDtFAjVdWFLQxxacbaEotjF5C8b2sTR6",
  "key27": "46B5xMLQQhUk1jTLCAH3PseXXSe3YGfX9mEojtM2Df5GkBGfxZinp1HYTdUQAJW8Ly8dK4wVDxtR3SsvSwrNS2ox",
  "key28": "5e67Q1ykRkrVtCMdghVPwYgGtZtAPH2RtAzSV4sBLYeEszktoZEESjYyWBHU55mxT3L7PNgYDuRYKs7C9EeBxznb",
  "key29": "3Kwxz8YCMvGzojzgdCQEgWcQtM3bnCzUW6HcYmWQFMxZZNf8fSqYayLi4qSbSXDeKrPoSYkiaAyTNaEHfwfwNUTc",
  "key30": "r2UGDjBPjzCrGkLbstd33dYh8sCuCZi6b36rEy4PT7JommmUtVrWb6LQcBFvjBmtS4d6afaAZXYseaGw1WZGkBJ",
  "key31": "3v4GAn6rAKheqNh9a6xLoZxQpumpryqoPfugmo8uWgfa7npvfiY66aGSV7a1e7ToLZQoFQkVptZixXgBVzAcrd3t",
  "key32": "kTavyoaFALu3odAUA8DgVX8ootT4oZ2ay6i3EcMw4hxADqxXLVRK4AunpXcuB5ighzjKeSFm43B8odWtzpxr5Zt",
  "key33": "3qQU2Mh2SkNTi65gAtHVBomiyt4knnieF8zGqdjqHG5wS6P9tPrr7nwWyaGKS7kuBhDviLKwc4qsuhEfGb8tWfBY",
  "key34": "5yXEXghHCy14r3aPdPDPiwv7dVYeXPaVteHNXdnBU2pPRcSxNYwVbUBHgvLvHzinE9g6Akaro3BA2wvGArjLY9Ze",
  "key35": "2HA2n3SRZ35VUDrZNKv468hkPpFRq5YhY1xWtfLY7nHV6a52SLScVC4p2YHQasrfCduL26kRJT5XCi2wdcS4WBgi",
  "key36": "33PBD9TZbpV4KjDPVBzk4Y7P6MMqBkHTuUwJzbQdesP6NhQyFQzpRNgkm52JsDnZ7j1oUCyMmVfzTLGQsJ6nMtUy",
  "key37": "59chU5xWnGFTQAHdR8EhVwABYSdxwvAxV78rEpzUA58u673vGKcW3VtQgy5WoAjwW9PZ5jPWdPwcXdsi2Ze2fCDR",
  "key38": "3AMQ8xH5PxQHT4Dd9QBr7PsW5pCUrezYxmivfw4GzEV2ezpquZf3cVaoHpeP4N7tUu1XGuN7QWNEEWKzSn7HZrQW",
  "key39": "rfo5Cw8zHRCZ2Bv5yyPYR6CKWPwooD5z1TkdsFSdcyhXrQ6t6FhGetRD8s4tUrXhbbiR9WWz8rgh12E6E4pzPTP",
  "key40": "5sQUrn35oZQwqjt1KRpPLhnSQdxzKeF7bVimQCJSgRNjGT4UodXbfGLPjpLmWCNVAWcYF1z5gRh555uBdoJ7cw9w",
  "key41": "488p3A9sJTiCaJXReH8bpnZsaM1YdJkeKPWhRXh54RFm7fz9vYsUHbUtxnCGaiLHrqHRUhKeN5WiUY6kkxTKy6zV",
  "key42": "SEHdasbEJnhi9qvqiUNDVszEtderdMXgGtFJ858wczZBVefQpV9WtUtfUYxYTD62JgKrMu5qvSvDrAwVcu1p7Zm",
  "key43": "y7gTdStAYKSqkSZhVd6EHtAXHudE55oVjnct83ybC6Ugk2qMjMrHG11EBDFZUtET9RoycgqVREuixrFjAHJsjpu",
  "key44": "3LkUGYQtTivCxtLAoaL9M4XFP4So5Qp5zypcTECLFuTgDAT6w7i22RyZeidWdAZkdifWKQUNNUXSUncJAYZk1JMq",
  "key45": "2sWbpu5Ytr1LE8QFm2Kz15X4H4yNwfsPzYTeERphgqo3QQrniCkwhvf4vqVAS15sUwRZfQd66CdgraEVpdjPVFHW",
  "key46": "4ba3b4n5xM6Q5fJeMzshKHWo3bv8kDvL9yF1HTY8GL4zbiJjETRQmFCjCmsr39rBiVAogejJmRBwH1AkP14StZ5c",
  "key47": "3NKu1YmVQk3ASc74M3AciCsLD2BF7xnk1Nm54MKN4wpXLK78hoMNrc13C2wUMGnCx2crxTzMe3nSTfEvDkyL2GyV"
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
