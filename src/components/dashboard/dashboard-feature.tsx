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
    "2NMMZeV7GmHyXNDc6VUhho3XJPKra8ptCHH3xvKGaA5Ka8nZyqzsqqmyooiaz833zk5LqeXoaEXsHp8E1peRVkR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xXZVaCT48gZuZ475ia6WuN5USSPmB9XKUSim5FneNEPey1XWN1HzmXtJ7WQ1wrDH528BzpZtkmZN4zeCkZyH2nn",
  "key1": "p7y6XRiSf2Ndj2ihTdb8kDavSeHA4RVgzYH69qjnLbGBWz9W9QRyayv6r8fitvMxtQW22S8kHQ12NSqQr6L7FuX",
  "key2": "5cw1UpBBEG7Jsh6vfhNxCqkdm4Log71aUmwWeyCqjeTQHVdmucjdg4pMUi5VGp68QLggyAMtcjEwtfUdwcG1szpp",
  "key3": "26u8HkY61nv19RJjVa58PNUnH3fPUK63Q9b4XDKWxQDfa99v34kU8Ungzi459DX5rvQMmBeUvmxehnQzKcmbPvho",
  "key4": "5KjZhHQ6DarZTom3xp582ozx9S9gVySpPeDnYwijBDeBaPV2UuWPek7g1BWg3Qq5jDWeBaLWLZtd1qg7CSMbrE1U",
  "key5": "5CTYJmRxgdz5pVw5xY2tjVF4DEoXf9XYiBY9raiR7k3bC1zEyzgb5xs2P2NZJeLvEJ3sL3sZCScgPhCBp1UVzBgi",
  "key6": "4MyUdvidmwiLDHF2J1tsiaZekvTBFm37jCsnhPULTTxcUEmscgdA7DRUZsBQ9gc9KVce8eyEPQwyfyk3rQWQaPqi",
  "key7": "3iJPYcKVzghEHVtiF1mQ5DWCY42WMQPUBMfy4adZRHv4hbmjcWVeBRfvXbw3K7hs4PLT9hMckfjitjwSycj4zLTv",
  "key8": "3fn7rCT3hv9wtxUCKTfHRF17y1sGLzJQAdsQUZwwSMmAx6k3cnVEcEhEXCwbfRNtKK2Zf6dVeJgYi1EwagcLqvhf",
  "key9": "4Tvm14TGDQd6uk3vXNhfqTKviAxLEuToELsi1hFEYWkrwTaMxmvqa325eo6Mou2YYZw4z2ucS97sx12X1XRCrqXa",
  "key10": "3ShyXe2BS8QVyuP2Bx43Kc9UHEY2kAFScMkHmgV5AFxpfL8cDDimiu6qRnTR1V3ZCihfrTAJcF2EZrgPNXmCbXYG",
  "key11": "44FgkHetJ5FnDu7Y1abnmqQFuK7wrHYew3q8YEHqxRib9B74Z26m4XsfKXhPzhgrLqBAq3gqCHF52MaPeMc9xisy",
  "key12": "2g4vZcitvczHeNmAxAoEj1eRDUPfJxCcAucoUucbJwUQGwAT319QeKshkYhadjYUfXQon75zxh2DTYL6FUTmEmCf",
  "key13": "3FWSXGKyhLoZgRJ4LgN1Bj4rAzJriwQYPBWoLBBFe9wgnmjAmVM3oTtsLojRqepiSmTR9EvRTfwZ5DaRASG8C5fZ",
  "key14": "sWiaZ6zXgxhyqqR1i3BJFM6mVgrXPPofCBcKHWmdPV1BnTsRvYivedjXaAUw4NaVCt5UyEHYrqRcSSn3bnfWD7i",
  "key15": "QTjWcV1bUsNHn5WCTBKYHhCHS7ZZh3SrsjTKs6ZeH1o4szs1fdRhd77ouGZMQ4ZxMGo8fZHYB391YeVGEiGaJRc",
  "key16": "2VgzPkiiJJZ17LRAXcW9LFXT4afgUQGDWauhhpCNugq9VMfk3tPc6bbzUj9838hQWbdjgD1eo9NqfCmwBGJWfKoh",
  "key17": "DfysbXDZsbxZ4URjUnAvCwjyhD9bEcRt44Yh64RbtFoaiVbxDdUoaHvLdHBu7CNE5LYNjrSMbZX94vwuyMXKp2E",
  "key18": "3jHabSCVgdgAkkdszV2qXoQ7x8SQB7gjp2FsmgreTzyXwfj8VotqX23zpeCBfXzsUezLZR2yH3S6AMicVWyJCb5c",
  "key19": "3AbtHdFeJgPKPAzGWqHZaQZqqZwJ6fnVAqPvA3gYjP3tPmAcPFLfZA2wV6hEUxHvDwG7QLjCu232V8J7h1v2LuaR",
  "key20": "u8ybnPq7s2tm4Xoo3CVg4AdYXYT859bCbucv7nRCXpfnPEMhYQCAyYfaoHdq3S7hAqWkDhFXc6kWdEK4Te7r8e6",
  "key21": "5A92Xju2TvnGws2EAGaLkQf3FbuwmV3RS1y7vxhCyFQ1PrhtHFa5rTFJ2eGMT8pnu5fxwGNjoDxDP4RjVHes4gDt",
  "key22": "3tdx6FZ2KTdaUSi8DoG6TUqQahzgyizmD9ZFWNTx9pdEC1oqtV3ohCgjkFioeCofJkEEUQh1j4u4UcU2tkTY3qE2",
  "key23": "5uewqw17sZYwhGLiCMY5ZYQ2PLy4r2EEpNT9ttPRr83PiGfYSa3esUuCXkqfG8RWh4z3uRj72frNgStdU5nH3unQ",
  "key24": "2PYhKkMrnWvySqAu4qvbFEQbSQKJS69GxBm2TVysVwYcDQuKzk4AxUkLDiEyHjVnbov32BxhQxmXDgAE8xcbHQ4T",
  "key25": "3K4aFECiYPgydQKazxEi8u8jxDXJfv67FedMJSoSw2Xg7eBDjD3GK1amCxKrC4JTRFmyHnS1WTRpm18mFER5UPiD",
  "key26": "4s3s9SiUKeC9XfFYRtytsWHvnW9rYT67oLmyTKCcQTdr5SSyLVkttmKcXLKQZebrn1a1CjUFCmAtucJnFZeymZwz",
  "key27": "2BqbtXCf9FS3EeGusbEC8toUpz9nXsyLHrJDyPmiDFUpKW9hSagRustRsYfUHAzobJY2G3XwZtNHHAYdiFKWXxnP",
  "key28": "2v7BjqHmM8hefZSUvoVF2r5S3hxDEU8XdPPvjnheTdgbtGjj6kSzMbvMEuLM4bQ1t9boYBk1813WXpQLBWSoscHo",
  "key29": "4xLgboAW9unDePKFaXWtqVhf1pHE7e6Wk82qpxMssHHkVJFC2D3zCX6xNkgPW1pqzFTQ5kXuvH69MoFSA41ivWqc",
  "key30": "3LDmY4FnPo8dBjHp3fsdDiFagCxT1fRfGtTv13GP6g1jw1zEseWf3NxgnZDYLQMp71n4e1jjth9fnQcRiTat6kzF",
  "key31": "4pLrWv5wbbY4SK3tQ2Wzssho3ZE1YbxTogXmvkQpUSNbH5LwY6TczfsNsaSDuTPzJV2BX9tqVzd2xmF1xTKjbSKW",
  "key32": "4KyJEMYKYPGZboTzWXcNtRdjy8kGmUwRbUF2TMAk3a8CNYWhrU4iUMqsJgxYE6zhLuTeUaJ6FPbKsoZvtadaDnU1",
  "key33": "644uhU7najseQEmx7GX4ZFfEdkcXiPT8adM9JZ9rXU1a8jzUMT9SKVdPp4yiPaFN27VteduRmX5RqsNbk4rSTz3z",
  "key34": "2EG9XDJEsWfQkrJx6PpmGBDtmpteuo8sdij1ELat3vK8UmAX6yJ3Ltg51dkUhYcXMobFiejbDexgga8FxkMqECHH",
  "key35": "66wga761bHcTyrBSZbSab1MxkFypq8ome7RzpkDi2HUnHPPccVyNfUK7HKZvkVt2cmQwKSAMSQJmfJkrmef8asZU",
  "key36": "5yMMKF6NJLkmMps9SvREK9SGu6CL6jjeQ8PGNwYy2pGYcQkteFeKvboVrx7T3LTT12a9v6EV2qoGUPNy8t1kneyW",
  "key37": "3Pp1iRehtDPouqoWPJVPy9YJTBDaABLWubKgbth7qgDwCQN9CGek4uW9MYVZCc91bJ6fNPzaAdxwHUvbA4CuVFGJ",
  "key38": "3eP2PB7stdhLKhEXRdvHmPZrwW6CmksPpydiQjXGdYGbfneHSaNcfQQE8sSLVWGiET7rfWtkCMovXGvG1hZfFDuJ",
  "key39": "65LwAKA4X96QmLy5j7LLho26FxoE9CfDJMz8HFFAEi2noFoF4dRABQXS7h6277pQcy7Vn2GkXBZJjb7hreSAxh9b",
  "key40": "3n5MbJRTXGQG8GjV7msY96AbswsjyagciwnDxgv29Z3iDqh2TfoCku54FE2UDz7uZ1Tw6NaLY9eNwNvtsNARtX8L",
  "key41": "2mbhhRsweniq4Coyqz3VdTos3KThjSTqeYBnQF9BYkVfqDySeGB9B8kCQ8GoA6VYUmDC8uqZoJMZX5ZnL9EX3p2a",
  "key42": "2FqQ6qcC85WJryRWy4SHCVYuHYhwwKFTvfY76fZbQg42FtegEeEtBTgiA1TrVePrNbwehG5yTWQZoYkvJt5TytUy",
  "key43": "25QU2hkMGSKx8otd4nr1cMuysJDqLnHgWmj3v63U76qpobj996TkVBZioTGFeHJcPPfhf8Hsqr9yzozwtY75tsYu",
  "key44": "2qkB1xSeknUB5ccqbpppXhkYqC6kwaL74eB9mhuYmS4d5NLk5Mbdjz5FLixkEmeaGeZxWE2HtP6V72DyoBxJVyMk",
  "key45": "2n5CHWu49QAQAeAcYfmDdahS2AyeKb5nPPURv6RHb3MUquBDoZZpdAQ2hZ2Mwz3pz7QnY68ASRZvzea1SHA8wpWT",
  "key46": "67ouaP8vUGb7kg5wh4uqwKEF1gDMEH7zNh8cb2VLX2XbhJ8RWtSQVWG1vTSDQknaKJrkAxRTCGTW6ujRXroLEVx5"
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
