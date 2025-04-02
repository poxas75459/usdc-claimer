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
    "4bRpdgnSh2yR32RXK9MeMYixSaVFZHe3qNoChEF3R6YcTjWYbMdC4DcuxbnrHvzu8zccQFMa8tCg5hHcxA71ouAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fRpsVssAhNZTYBtjxLuUxMyH4aRLkZzEf7nA4u13SXChUMbAkXJ7rY4hWjo2Zpc3KAkJ1P2vdPoZ4s598Bxpuvk",
  "key1": "2TRtrVHTwHknBDTyEWarE7txrsEG7fm5XsFY8dmgYiaoUvGKKB42RWKRYL91HoHUcKnqLQ2DbmYv5MVq28CHoMGc",
  "key2": "2Jxe5dNDUUaK8fefRR36KBDFKeYYhg31NP3R1NJoCTYP1NtFxvopYJDVvuACiHcmi83kcKDEsDopHCFY869gM9ME",
  "key3": "GrmiSgPViFfJGuGgFZ8hkvqhyino2KAv4k82rHvTu4Pu4ub68K3JeYonTexzVmHQSAxCNvRKHuBWMPdTtCeXWhk",
  "key4": "2Crd6rkFaDAxXKvaMJj9WDw4s6UdtHRmUTFprnFJXBo9ywYefWX2oNm7yfY9dMs5xahgRExbgNwUVmAzPD3pA2ma",
  "key5": "3N36zrSbh96HEf3J8G4TykCWRm9n7R7xftZ3YqYARwQXXoyUiafe5r5baL4dtphcEHNbFJDiMiFrmyHQ1PKMmKFX",
  "key6": "5wusupJ1seBJwGJhrDVY94gTygLQQXTDNLt7mEaocmarQRL5Vbc9yXjtuHLCZUeZ6CM64Har5ZtA51JjUQmb8aAg",
  "key7": "57UKQepwKqTcpZFj3xNp4PadoRRs3an9z8UVXqHFEbMmjRsXKoB4TaeqAFCCjfXmHnCKC9N6sFMWLsZzfqyJj1me",
  "key8": "4J5rzKhhi99oMG8x3dM9BM4YpupW8C8Spyqygzy7GbgFHH8g4aQ2S5ncm8t8QA2XwQh8SCBQxbsUBT9HvTQHrAaT",
  "key9": "3bKfitRWRPYmUevT6deiiSYoRSzRk5zuToySY5cFEAdw9P866F1WMEXNQgKXPhDwAqpcsGEYB3FL1PvVawYAkVDT",
  "key10": "X3oQ5BFopbvnENfrdT1AHDqyCgBwZ9Hhy3A5pZSDjcEtk17pBnyVPoDTrUvD5boKoKDmYBJ1BP79FHa9XEA8kgC",
  "key11": "42uXtyFyGB3gom3qo1GDWiJVfLtS3SquGbKnFtx3xCteSEtitkuEJ9zGHzHZLFa2wS2QTfWqBkBFkFZUxCrwvndN",
  "key12": "2VuDtxNkMGxLfSjehQeahhbkzFauLadMfhZu8sx8DJxTJDNiAesRTT6MGSDG7cxtR3ECVqCRT8gF7sBHpP7bUcn7",
  "key13": "5gWtVf3oMFw8cSGr8rwpNroYV6L1W5bNhbpFNwYVM84UicEvqP49VdT6GvypY1nrpdpkG1bgynXAfTvuSMV82wcp",
  "key14": "5MxbaMZieLnSJLHP61XDpYjog7wuRhf5FLLeyRKrVDcopSqBSK6YU4F9R5djXgsxcZ55TQwzJ65VwQiVXBQfjha6",
  "key15": "3HKJBgwbEbdT5dWdkaXm9SsYpb8Wt7Sa5aYPo3G2E12RZ7Zv3UUBRDcSvgDzMKhuEsZfyXHMuvHQemxDuxB5C2xs",
  "key16": "2wAzyXS5wE4XwzYHhE6w9e43ikV2gUPtyFDY6fgSfKQaAiPD2zGu8RwaDkewdBGqGC4eAAtCWhKpaHo8mpamwX4M",
  "key17": "3W2f6jt42LAh1wheyL5hwhHPP94a6kq6BhSkYt1oqkmgUGniMohwBuSL9ah88bvpNw1gxN19foqnhWcjE5EpdSGD",
  "key18": "2wnforNPyC4cj2vH5xkcDChbzLyXsGrsxhGAtgZUkR1uPUSizb2V4zPvZTBVuMLuBHiKeqK146HG5JpjwKeB1azu",
  "key19": "P9HMxZxr2HoWDp7z7Dhr8Dj1UkRcuY4dZKVEQWbMRRmPUbF2WAJqBLktJ2UfhBGT37k4VZokvTSWptGRWRmELAn",
  "key20": "fkTCzyzco5yNADEVPa3hHGe2ZbWnC2EvTSckk8PZHXVrKFn89HL2mTm5HmnjT62rnja1LRESjVo2GoRS9bGMSJZ",
  "key21": "4NoPRhaeb8XsJTMDctAe3wQzFu6eVwTjb2Jjvjdj3UCDvacn8Mjpas5Vk747QYC5tT1QWAFnAeuPBCTeKwz9GnZ9",
  "key22": "3pQtToxcEQsCNefU5CgSxaqbwYTpMq5dqdK8oFgcPDx6ry4vwa4gUgSnce23sDX7vRQ4Tdrs8ZRR8rMwcPg6ifMJ",
  "key23": "5SZgnWQMjTysAZBaZe64h93GQJiefPeEoM17oWXvyUcy9hEpJPCWTEHN63YwQQaZytbYf5L1t3hhMXAm8WadgE1y",
  "key24": "2PeJRQXBE2JLLHcXmBd1uNCK5aG5C14bTyhSju448YGJuckre9Sh5uinWDVV7vRsgWdD5VDhrLVp8MpEVPphMfp6",
  "key25": "2P7T9WsFqsk5Y5Xw4Zbe34X4M6fv2gDatzXv87yAP7dBvFB8E45fdquYH6UQCDSv96XxJaYxSQojV4xejTLdr4yZ",
  "key26": "2PkeC8APWSRqcFHY3S1Td6NgckzMDSkn8wNbBnBMRkcMTWWeTEgvZ2uktMHYaA3UK7SP1eUTcbLjFzyf9SNtcxsy",
  "key27": "61rcYxv15efpnFeAnJcrHgcKyDM1QEb5XgyMYNUhfx64L7zSmeJZLbzYSwiH66yTRHW9GUbWeyqAwserZUeLec2y",
  "key28": "3yBTxwQNkNB1WHU8XKD85X4HM6qXDdkoSadYUV53t3LGKaSoyekKWiryQJbYSPPzhjZ5GJZJfwxZqNEtZc4HhcK1",
  "key29": "2Fh5bqAGLmcVKypsq6V4oQ1HZSghFLrynFvfGXHPrNia6tWhQCaMk5AA3Q3dcA4uXHpomJqp1cdbeX1PVinf5UXU",
  "key30": "3q94SgtZB9RzprMJUTvGUz5mPj9RiBQXiekgQVTBqSXFibsQukhcUZRx4khvYKHTaZ3Z7GXyULAFHWwVoUB8Q3b5",
  "key31": "cdKeubTs5oGvWYByWLe85A9VUvAi6jogPp2SPfHXzhpS5uBv7erH5hpTAHYdMQe2pdRjtCv7p6d9keHupp6eKok",
  "key32": "3KBfUtoWR9oSgJ47DLCtZ84ooakNG9z84VoQHnkUVNQHQFGgY7fGgmdQUio5vNhiHkZ6rErz8mPzkd2b7q8rSmTH",
  "key33": "TFyeLx1veviHqtGZnbcAuVAYkMD2MZ5T9kE1CD26eZeLqPmy97fRXRbe92LECagTtuhDTdb28HHsUEie6ji76DS",
  "key34": "Xa8fBgSiU8CJrgUxPvFaf65oMrxz6o8nxTLZ3z3BcUURsyBApTdRSjGsNqt5TGbyWBLkeUWaad5sVDC5naYesM1"
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
