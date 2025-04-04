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
    "4RcZqm5C17zXAxMTr3sQVy2cMbmRxakU17vVfu2AA8BJr1RbZiL3ESmRm6oW2xXzLFx6otpzsgPjGg4JJUv2MRj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MyjEUjhT6bCYe3cSqDhrgisDwPcbA3qmVwKsshhL7gey2LR1bFeMChX9FVCCFd3enjyiiQsTZMarS1ABQh1oUdV",
  "key1": "5BXqD8KkxPxCQ3zVDaTA9rseiY2bdQhPtV23LW4px6JbZ8XaLvMzNQJ4Ba3UyyZEkwBQdVG9bNBgkD6reCrevdJy",
  "key2": "21QeCx3S7b2znxNSMifYetDZmb6L8S4MBtame7NpVXKmPwSpZ1AU4RqdY6xSPSwNeQM8QfKidrvfJGrcbEUKHAFp",
  "key3": "SJ8e1kGfFZiBMbJj1SJS1eMK1XKqwvZH1hbP16zbtTWhUUxHohPenf3oKRXYKowB8drJughAjutE8on4SsGc8k3",
  "key4": "iyujpeaAbim92AJxuPLrUAbvGyERzTEi8jSXxpYJusCDURkwU7Rv6PVza6mDBQZuprHMpZ5gkKdSSTRTmbfk78y",
  "key5": "56D6Wetwne45D4NKi9a9eznHCHRhBnPUWwHpdyDbjLGjS9CmBUGb5f4RK3FCYsrq9DWAq2mBd8yXeUiCatE9RQir",
  "key6": "suRmudmocM9MG3TKquJCZqawaWGGXAJRpT5cd3V6w3NDk9i8mDAgmAs2AuZY5YZny7MTfKqratBKHwSi5jitc4E",
  "key7": "yNgHdbkXVud6wqpxx8C5tysE3xtzKUA4fxkz1cHrfzcrkYXntvNAoNjQDo4YhPwDtcAggcyEwRWmd6h25HjUrr7",
  "key8": "DQQ7V1BgvANX41HbqiHFUcRzEd4KrMzUNWufUS7NDLE47H116u59XJKEctbPXs5wMQVTXoGTZMuwbNEYtfnLrTS",
  "key9": "335iYhpmGmCnvpQoULfTHPXDpeCj4swNb2TdmCNn6arxNKUgWXEg1UhWEHH1k3kHoTkmVTRc6v5aK7YMsE3XxrqS",
  "key10": "3q5JsNMPkvLvKxd2wqSQ6kmTedz6PoZwqmN9qxjC6NNgtEr8TLBdkVC6Zpkei95qVJyKpmL6T62dmYZ41HvuwwNL",
  "key11": "3cucELSrSxLE1s1Z1Gd9FsMYEYkr2Rj9AXZENcQ8B9h5JSmBFLtw8chmwAkEW1tZr4mfVyE4y4gxv9AB7zdhCauj",
  "key12": "5cVreRbfut2RhR2cG1Zq3cYpW9AEoAJ42BuzGMVjAbmChYwa4VdYA5mAR7X4dQrbRGasAxZpg7M7y3vKpDmEttHW",
  "key13": "2NGo2QLiX1HDVymLbbmZ9iNLzyFDgxBXacKnis7UoBsd3npsRFegvi7Nxt6u8qRUpxYVNpkrNuobouX3wuNg37Wq",
  "key14": "dVkM1yHJwXQH64B2MHq7eACrVy9aRaM3GbuokjbTc6y5tX5kkngacvmbCgRN1iVetsk7nUsVbSfFsPpSr3ZAuXr",
  "key15": "5YAKq1a9sMBZc7a6JdnK16k8DcuRBJKaHGYTcsFweekYW5g9fZe8eH5JciRzBNvYxvcepTS7id3B7pbrrhFraWg9",
  "key16": "5CZ8ND3Amosv2Xxscbh7fFczNfD2gaRUXd4TpmbM741rjPrFvDjXtEmP4kkaGL777uLgeaDKqLKKfuqpDYtWoRka",
  "key17": "5dKYGEUwRZ2dxx9NQSxnC4bzPittNMhfKy5CdbDdCzfDvYCiDpfZJydiNp4hiwEJtWCtrpJApG7Fx4miDeeQntFu",
  "key18": "KUWf9JU2t2ZBUHGFQahNhSZgAqBvtfFmFEWtmaUsfZY7xABZJC2KkiYLLsmRAYoRmuePLZeKxWpztH8XRYnk7kv",
  "key19": "5Afg2RCynth9H8pXo1DDU1h7Q9ZDqgWJqALV7W4mU3W8F5vz9LSTMkmKqmLoZ23SME9XVTarY9op6PXAMiauBLF9",
  "key20": "3kbP1J7QzdbcCk88YdYp7FTtJKzDaDn9NQmhpKMqjtCdWhpWgptcAogpfQjVxJSoa3KAy9J3adLBvPU8mvAGZHqp",
  "key21": "29UNSpuXzRejmGPy3r7CiQMdV1NSKUQtGSiJErZwK6x6oHrVwJ3pf45QJKBijnqfWHtP37zGQwzhZSkGuWbB9qib",
  "key22": "WZax4rQi1eN4eKuZAK5qsUaJ9gFtqEzqXTHCvyMdmqGcPudhkz7JMTDhn6iH8jRv4AeH86fQhyVPThuoAWbHnSc",
  "key23": "4SBsJZrj3jwh1ysarbToBnRbquvyEPBmpZ7tBVQCnbgH4U7gbBdyfhRMVmey3BJCEd7aebsbCba8nLXQocMpt5KS",
  "key24": "5xWRhySGpy7n357G245wDXFXZyctKpZWP8Mz7DWm4YGBEcxMTpwm1jifb78ZEVrgzagmtfPtA3e4RMjMj7fDXF8d",
  "key25": "3yR4tPfqRBDqGrjpTkMuMbwMEMbZhy1bRAWH4QrdNpK5vh8KdgDUaZiFDjmoCqmwTfpgdCdrsTdrDZNMmWpN3Np1",
  "key26": "2PyfsrFB5pRHGNeeq3iXEjUGm4xVHCEQm8pi5AA5mahcvNYoW2saXtM3c5G93aUhxkL36iyu6Q6MG3FxKhXjNwKx",
  "key27": "3AtRji8WSaPVFMpBVjEQnwTArDXS2VVUQc1v6ufGmeB9zpXEMxpCPFqg7tppx3xCm55iBhDu86LiiRZgJoivgMVV",
  "key28": "4X7vikY1wGssRLQSArfNVKCYtFBsudN332i426BgRSLNTiRJUMP3bf5U26cdgqDcg4qJ3FNKBBvdyn6KU3gaCbr8",
  "key29": "3TsoQveWLR1yrDfFaUa9bcfWHQSicLqyAaqFjVKYFbmTShUZc3mUooeLutGn3uBCa2NYsVG885JbuEQyoy8j9fbJ",
  "key30": "2sjaS3cPJxyvmqTaqt6w8yTK1ELgvraaF3upCZc34ybDVgC8Gr2yaJsgHxrmrb89zqzJeQDuqEe7KsMsZzDpgrLd",
  "key31": "rXKgzdmP6vcSs3mWsWsc1wszDEKeZwReZFcy7qGocuhFbtF7ksc87LpH4Mmo2RWBvgKUU2ipDFQn5xKm69T1jHC",
  "key32": "51rsC6w6Je5oo7BJuyMp1PW4voZPmGgSqLunsBLe8KLETs9sAzDF7vUkf6T6o1tVUzKSJBr7JR7M9KJRDEv66MAQ",
  "key33": "4X4tA8dvk2LNCjCa8wJ94zqFidV9LHmtHx8swbZoUhaYtZouxvb5XRFPiCVDJxuLiyxXM8jvHfiymtr7YjsNEAGV",
  "key34": "5pEaCbYxg7yahNbKyhk27xLGNMyEbvTiHTYarR8frqToXnqpsU3k1uKLcT78bTSQDeL6YMprkctU2qgjEmNL5PyS",
  "key35": "3FUcW7nfFaZncsSNKn9dwcPtS9Vrks3YYeowuDUB9EFrXaJVbynpFRMSEqpgDvNNntFsutSLpxAzPabkoWstoQ2W",
  "key36": "ATmhBtXVxojT8Qr4ipG317jeyy3iRpKrZ9JYdTiSNLG9VHofLKppFxt9KNM4zVE1htAiLoRPKGavki5LS351Qp8",
  "key37": "2P4RbD2CuqSe7D5upX9tM9LoCgqWUFdGuFMrpEjE1MoKp23o8hAAEv9Hp7eKFk4fTo5mkXXU2CuqgmiZzbxe2boi",
  "key38": "4nHYc9kkSJR8ajvoDQxa5Vref5Lpz741WJTqpH1jKzfgZK9RGDoX1AXr77bmjeF67QspHoKg55aHdr3c7MPdSzQh",
  "key39": "3GgxXQTCa6werEYzhHigYDr7QNjaNNEL6rnw6YQgfw7DPDYKx2r8Ttx8EkRP3J4tcxHDHrfErPax41Ygoaiy4596",
  "key40": "2oUHS1rav6U6h9pY9hWGc4B499Yh9ZcrtBMfE4yweQpkiP7t1jB91UPKxdCiRmew8NDDpHBepWpBYsCvPXpU33h3",
  "key41": "4Rg2mk3zVsmX2iVb5KmhinEEUJg2EZUuBk6TpUVTqs4yZYMH4yhWGWNQkzH5kjzkJj9e7PnTQCzHRTjnfnvq1mEx",
  "key42": "Dv6KjC5aPcrA6kiTKQJi23Ma3QV6JximuJXmoxtVVWpNoDkt3vKByQWNeaBy3s35HjpoMW8J3vZmBL9CVjcd85k",
  "key43": "32zGsx4otgriG1jZ6czL6CtLGb3Jksmw3VLBN6684qchjUfrNbCR1HEuLvg4hkdbpfouFPS2ndoKTgg39Gze5yP4",
  "key44": "5BY23SKvJKeoEDSamP9qKXxkpvter1tYppFG4Hu6raox4np2WsWuWHvyNpqbS8WcJU3EnEfPfRiDwUSzQ8Rjn3LH",
  "key45": "4jk51o2UFvB1ymEzcpich6vnhwBQwfztj6UXi5shK6Y5mYrnkwH974V8su7AWdtRKbk5ycrDiQWN1dcPQqSBK9Yu",
  "key46": "5x2fFSAXEzYAmD7Dn8VxP13BoD2KnUGs9gQBBoc7tkrwy8hPjpWBmZwazSWMKXYbuFR3MkRyLy2QSePx8r2pw1pB",
  "key47": "2ekUpsHh2j3Q8AMVg6E2TUuDjSY6dhs8j6YDcX8v2FV15LhxQx9J2MqrcyubV6p117jaHFjPNJxLEpvqEXriGuLH",
  "key48": "2kWsaRcarLhJSTLcgRfi32pB9fDBsmTfrmBBUJWRhtig2cVSy2FBw1SZ1FiKYKsPyqpe4pUbn2xqCTiiSLYCZEzX"
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
