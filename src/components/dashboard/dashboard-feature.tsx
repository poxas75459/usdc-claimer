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
    "3gmFGQpLNyxR65W9xV8dQuUgsyKbHzp7evDHwawTnZth8Hg1zN13zDtFuBtwvrjFQ4GVbfEGuiXS7tJUG74VMTDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z4PfZJXNvosfF7xeWaVZv3M3FQXKjg98AGyMErKynoTX32wNMsp56MuC3c8CZ1sn4Si9Amr1Eha1Y8X9urtAuRm",
  "key1": "awZuJZd6qMTHWnwc4ZnHBL49Q2PnGaLReMzr75k5dpLTJoxtwyivJhgmGgQg9712Z2Ak8jEEczT6pTtLKvtK9D4",
  "key2": "3xnX6b2kT3s3ZmGQBrnsCq9FC5srMg6hd7etMqtnFTtkE8XQgDB7j19noM16YR95GXmqSzTbD7CbDP3e7jag4mac",
  "key3": "4ysLr77k4LWZqoSYDz4Vbqz73g63BdTV3phbHtHAjG7Fvfhtozr6wXTZYDh36smKTgmqEuknr8zXQC9YLD3FPabm",
  "key4": "hx8GG6RYat2HnwQBEd34PcuFjYDrmwfurxgzZfbkv3uegGwA2tcuDD2nNyvPhiBSiQEoLEDttumxLKvRgqu5Xga",
  "key5": "5evM27CaoBw3jo22pSUj2VwRub7ri9ZrXCMKsdumE4ZST6dQiCAnbQc3RzEeBWsn3bvcfXbGw8xzPH2tdqoF2C6o",
  "key6": "37ceNWsPS4gM4RveCHiLpXujN9q2anVAqZZW3XjEnuxJbspsa6H6dXqex5yMoHdh1v7N7JmefkQ26m6uS2ax8nDP",
  "key7": "4WfJF1LuU8stDMtwvmTPYMzsj3k83xkd1Yzm6EvT1x2D257Q8Vm2Uj1txT3R6A3UnhMVeYUWSUxwwyQEVtKAbFEA",
  "key8": "461CTEhcqWtXtNbdgfLqr5nRGRWXQXAS8qQCkJZseq8X8j7PG5ULff9rvqWLLJbWw978tFK5DZ6nXg4FxQUmqfVL",
  "key9": "3yBMTujjjGrpYYHW66c4wbbfNVDCh8kDkCo6KB5CQxQK7pLLf15piBP1KpCWX9AH5Qs89yQKa1Xf6pnCRyhVdx2o",
  "key10": "32abrWehBtkCbWvbjDhx91TfKy7tc1KhQ3fd7T7RNjpTGzccEf6qXzLJYe8fpGAhNrmkryqZqjuXRDpa59KUSqtr",
  "key11": "4Us3cc4q2smF8DBHvJAJniszsTG9WHYrTvNBw2wEk4J87C4EyNGUE3rHEmDmb7mCvsJMwhKrAR2h3c83eKWJGB9v",
  "key12": "5bVv1bxuuUgFt8AniviUZut47axg32HPywE5dbu4XcGLACinJnEtC6Tvz3QrXn5Kg3fYxGvj4B4Vf6i9uLze7DUh",
  "key13": "2PViszvReiBjtS4spNr6T1XC9oz3ihr5mbiPtC9Ae98HMSTHmCeM3YXRKnkjxthGrcg7ewXBjEu2MFwdPJ5ip9GX",
  "key14": "61oPEYM229Ga9vetLSyPhKBC7Ck3CEuWARokcgyw55XBQhhW8jnPSPafShGdwM2EpipUnfc9FL12H9FpnGw5Ra6f",
  "key15": "36vgQP8nkSWebEoWzaHB2681FbdjT985sLBUcQV3G7ymP3WzES5DcSWEaBcbodSMbrJizMTcYkGcwtF8qHzx51Dt",
  "key16": "3YU5wRh9PDDcdgRNSYqWGy7NS8vn3VAgAgKb6SJiB1Y8tn3Jg8wSEB9JnhPgVtTbyesW29CzTZA9tc99oBtQ6ANR",
  "key17": "2D8RBThU9UUW65gBiYwG71BE7nb9n4SEKCz4gRZXoUAqkKPHSSu5jKrSspWFPHgpBNcdS3mcjxEDFhcy6Jf1v877",
  "key18": "4zxFcv2UEA9rvF5D1Nsusvp9DaBbXDQPt9A4AM1gPo1HVKZRmzyfYxmcHgbbWBCwGeApk7bduFCgVMKi5st5DHjp",
  "key19": "51q8atgTbTf9KChJqXtxaJes1e4ZXuPMTcL8E1Echxg54oNgLEnqAHZmaBhZK1iLDTgKacixaMsPJgZgEYEuerBr",
  "key20": "5XJMWSSsmjjZNtZFnzskntLcAUWDsSccYjQCbdiUf65hayMj82jZvUmUbgeTubDAePvkgycXNg6RDNJ1gqzc1PtH",
  "key21": "z3z4uT4ZB2QaDbpcjqmvoF62YQKsKedXcHf9e6QJN5JVBy71qMJFsEUi5iwf54USia18JNr3qwdpPaGRExRgK9C",
  "key22": "VjXKCahRGiNCDqzRt8qgH28rVMovSGc6VzUHPbT4LEwHJNpLbxZ5JPWnwTYFzJyMABLQnYPYP88qbECkf1qSAFh",
  "key23": "3w9tzzmNbitsqqvn66mC1GSSSfnf8o4NFG434QHRY6p7yD3CQhefvBFaqxbtQ83Q316qHRgsQQy2aBg2T5yUximr",
  "key24": "c7buUeN1n6P7djKfgghmhAKqnB3cngpJV3U8AvT7AmF39BA7ZjUQWgJvies46DcGgmyxApMgjqTGHib58q5NwSm",
  "key25": "3NYRhazXrfyVmvKhKWzoDpZPfPqf3qLydnYtswv91cvFYcwrbjfMLYM6ZN3MnP72t6fXxpdFTfYdRFRMdTGnsPMP",
  "key26": "5sMuSJnN465agzVe1DjLC34zK7UoVSzRnr5RMP2tuor4uMuQwJUs6xDZDAZd8hBUTJyT1mDv3Yc4nZwJhN3peQNm",
  "key27": "2G5AijXFmB1GW5Q5HWRnuvv36MWJZofYuUNPG3A5EwBPCSBSxhz1A3oBjtkLcAgLMwyNouHeeb2ZAzy4NFCHQBK2",
  "key28": "2RT166wsHg4S3MQJWHotwMvw3sKHCP3spjvpaRkeHR1VH655aK8VT14G8v6J3c1m1APxVk53UzvjXZQ1EpwQGFBP",
  "key29": "3NRfdorDT9HJ34wMYCgXpS2jrECpBc65QGK6g7Utm7VsbPXF8oV7iP5T43pUZ7g3TLxN9wRiGBDKGcxko8WFZKVh",
  "key30": "FeyEyMJVdD7px46Mq77dMTfr5BSC2BUTyj6SM2zpJnkCBfKybnUQT3okii9oiVRWramPsJR7CcWUgrPx51C13X1",
  "key31": "2u4MJgEFZBPF9kPfQrNogkBNLcHDaDfeoznqRTjmm13Fgje2C8rXdKsCpPpLAsiu3srToPb4A2dbGVZytVXci3U2",
  "key32": "4xqmxyF234dGXRcu47gcu12Mf7P57Jt4EZt4HKAfVYTu3C2kdM1duwnmrGhEkW22NLVezXnm6yUWY46rB9riog5P",
  "key33": "5ZvqJsrQbcXKR1x1LSMxRKTM6v6SyxGuQjGn9CfsUddx939zCGaMvv3G4io8nu1PmpzdvH67MVGqEaESPhnk84Xn",
  "key34": "2MzAXas9PdzMFAZjxk4fQS27M1KMJKo5KnPyq1JG4UZjbqWyZUJ7PD73CSYBdhV4bpeuktaPdAt6cxDoTs9p8LSQ",
  "key35": "39pMHYtenS1HZKvvVd8DrsgShncyJTdJiFNFzBxqwZU8kYpgP9LVBQmVvaej2aicjDn25BkwNDsWHYKK486yFZza",
  "key36": "3bpFXZQnGQ4Cx2WfjA8typEb3Qy9KGNjh6KqPY9sRBpa3iCygfAXVrU4LNh3XCQzJGmcZPJJkyzBrvn9m9RSDqY",
  "key37": "5EzLjBHcsBzWMitjFdxrRQgMsctPXH1qWEuf5GPg1aB78FG7YMUZrUpLjknAnN8U6Ays2TkR1qFnjCubrFvXux7r",
  "key38": "5fSWvPQ4aPBA1AF2JK6eZkMJzCdA9pPjLRDwgZtfZL5MfhpmXWKbqfCCpUYGpp8aT33dEpt9YyLnhJRmnAB3h28X",
  "key39": "5mpgkSR93xBYaY8v4aZyyRJrWZxdmrCRy4CjQzzJYvqaFz9xkCQDthjx5FnaWn4XdsuQWxB4HfqfaAEjguVDpXgh",
  "key40": "WAVsr7LTF1MKha5L8k9MNoD3YSvAgTwDyjFNoHCUczmqT6ZcAYmrDBxjUDtUYw7LTTipdJizfuN1c4Q9BSKkbMB",
  "key41": "67rpEi2AvnpCmWHjTG4DwyXmxJV2UHmtuiZ3Rc2e3btqdG96bbUXXVufHkqtQbXBTfaLotqdx9rgxhnuruwwCkQ1",
  "key42": "4wS4ts8MvM4cxRMskKhB3W2TAuuMaveKhFXnQDAJnnqGs1s9nX9M3PFU61mVp9fXGgZgWkbbeHJ76QXDMkp9LzUp",
  "key43": "2xdXTsaRuDMfZuN8tBkriofR3sck2PcHGYHmostxQ7HWnv25Dat1Rrn49q2PQ1WBdSxHhDWZURqp4L2WbaWhfApu",
  "key44": "5AkLMJYCB64gxtrk3okzSXePgQn85YKy2iDnn3NvDJFmy9PyRvwyqkVHA1X86Pi27X7Wpt8p7LPEhR4CkY69iwmz",
  "key45": "2ybE9MqLFaHxg8eAvKWwP5daHk8k6JVmiS7ahe44diXUffE8c6hUXoZvv7vfFiFisUvABQ2GBxnFWZzFbFCMfrf3",
  "key46": "xbfZhr4HePwTzPK5AEnCEeEqw1AWbrmBX6d6B2J1CsxMLirNVbncqrkomwr5RwJyPnstdp6QzPDZr9VFL7MCQpN",
  "key47": "5tp6xDwRcDNdwjcUWveCy5jCvunbga7nJ4Zne94KWy9ruAo2P6fbT4DnuX3DMHLzpC7GuzAuKiJKBb4cRWvwLqpB",
  "key48": "3mF6VNDYLW7niDqYMaxuQuUb5LLQPvhe1Mo4NFUQC4WKLkNMChHENwPd4ryJgY436cThZE9bgqH9czVZFkZv5tma"
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
