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
    "oP68Y5nRqyXuRSBKhjynCsKbwptLWoXxBeD1n29LN1WBRS9bmCEN4aBgnkdDFBA39CYuJSdk2qGinv6fUXn3nys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KGBbi4tYPXXBVmFqW4YEB62oBxKQpVvrgbbzepdDbLxrvp2p8nsHCiGpabRzxwQVcT461dSziVvKrtQmiL48jyz",
  "key1": "3hT7Aoo1rksY2bGRFcRvQPG2F5MPFkBxfmrQYZhJtFBvbUMUeArL8t3425S477j583DBdWCuzgRaRb6FHeLWn6e4",
  "key2": "5PCowJLBsQzNXe6P4BqyZjEhuvNom2zQgicA7ttotfQ571ghfEXnwqUdjs4MfAqrgY8pcanHB5dQmVKznKpx5meS",
  "key3": "3WX9BFHenk1Y3ab53mmSdwVdLZMc233cuSEcrxTwrzFDmodZ4KweG7nnaovfWYJTdH4YfHoirmvraUh9PeVg8Nrx",
  "key4": "5weobWS1rYaCepWv53QN6g1z2eTM5ow3j1SdZyXhmoEFQ53P4UXA3iHxYeVrdHKdJi8Tj5kigaohvgxTeYbnugNQ",
  "key5": "4PFnr1HrGPeR2fu2KPSyBXSXCn8uEbUGs5x9KdPk8ydW4Yr1GqrDxnHkNvMjTxkpX2jmDFJuViqUfzETXoYfP2Wy",
  "key6": "wHXseMrw6EoCSxs1JqN6bVZuiPMa2r5runHXghhxxULsNPSsGCWxTBkYQ5QY7HyfKWYn92V6N1EuF2Hok8EUEc2",
  "key7": "2XnM2YZd8E5HNi48wYVja2ZGuukpWxKS6tYjKzZzZZhAVxLCbTjzPxP1hp8j5yz3MabJt5FsDZnN2uzwF3v2Kpri",
  "key8": "3xRFuXnNX21L6mo8SqLRhbQA8MDzyoVyNrUDi8tr8KCFVwZm2NrZtDjed56zjbhxdmvrnuSuSWGwben8WthQ9dMC",
  "key9": "2XqtemRKAnMbhVJMdJkNQKGgzeQonCgJRzBeM4t1QVsbyw7jSF13xULFyj1Yf4vCEqDgTdBdMU1jkFFazyrGo4UE",
  "key10": "53YYbjcq9XWjHxdDemojwAQ9fQzAgn12uHxFQZRj2Gb3qDKts2m7NkSRfMLT4yppQg5dbnGLQce34TtAET8UmG5N",
  "key11": "2c2tssmj8BX6huoBWLiBBPk9gDxNuA4nVwWmznzp7HsHEtrDnHXpahyCYo9Dx2XpHjXbpREQNXLGz5cGQgD88ppv",
  "key12": "3a2QQcfxUMLcYnGze49tgVwDeQaYkBoUMk5Mrc4VKtnCk9enuAZPqbTU6E4bvD6GBFtPXwkxVV1tgr7okoqBe8Rr",
  "key13": "66sLv8J6FZv7UGPSgbn7s3aVCsrKLLfrZd282wAex5KfdC4CUMrboWUTjTjdst2MPTcbwsuLLMfZDwngXwjVuPSs",
  "key14": "2sovgajf3Yop285QiZQuXddpzLBF3DZeQ8FM1uednZ439TGzan9vfqScYZe3SzrLKs2ex6CSU9t2GkjCrphDdA7m",
  "key15": "5yKdup5CZoMUzWsK3Ry3jYEs5Twb5JNXLLkPc3esRpyD9xmZNG9PykPQ5pahyD5NL5pYxZmxBzprk4VUB8oFMmmi",
  "key16": "mbjkAKFcJCadYDsQGX8sQKYttSoeGsbGLYoWMCQ9FFVShCsAhQv1iAXp2yBhA9n9CzeHAvyz7e3mhvxeFkwCUq1",
  "key17": "NEeeT7yaf56Wo1hTsZwjYh6ZVS1Qo9r2EQzV4N5z5WW5z3a2qxoXcYxLvxgvYTMcbYp1aQbbYNLcmBHUM95iSgH",
  "key18": "24c54bEhXtwGTRreCTQx7j11bcXCmsJaJo4Ba3as5TCBzfbJvvWgzCi8x9E2rzEE9C2uHiJZw7wQ7UdSCbtevoyj",
  "key19": "5Y4888KUASnWKxgECwonuZVodyt85FSnXTBLZ7sVDtBDoHSfqbtzwRNbc7puLcrPpJVbYoTXtF32HtpB6rEhTPqJ",
  "key20": "PSM7sJKqj5VrnKxv7PtgRjaXLZvMkmt8X18QERLcDjwBqFC452PzA8dA7VMZFNuJXUEE9Wd8EtxThd4rnzUqNAm",
  "key21": "2B1yYh6qyKx9LSUqUSJaEFtppVWuzcc8xNLio97qvtX6NqRjFcsx47sEDHcB8PvjEayazLb3VmJRMMRphgtNwDVz",
  "key22": "4FSWH1yCpicbYv2C8nqUPmC8gqv458WemBo44N7k41bBb1oUunVgEgPmNbdMsQ5szf1d8cejN7qFCUc5kSm84Gvt",
  "key23": "5aTtiRJJPbYAm85w92QcMJYgaNoGv8gytrPEbkmgEmFrenhjSzi4yTTiLm3MpsihbMMo56gbzUybkAwuqBo9YYT4",
  "key24": "2Gf3edTv9ptGsWFawjQUFjcEQybtrV5tEHbGM15SQTX9kyDPRe6DLXQUcpns7JGjhcXChN1iCFFSQ2SiKvB8qGni",
  "key25": "4hxVgbNh3WD3ZdmWYdoQcdqAvh49TSphKiHMxkcroBg1YHb9X3G6b4x8RdfaZ71XV7ScrhMufpV7soLSPNnDrmyt",
  "key26": "5iwd1EvBmD9qowJhGWuJFE39GAL17AvZrpsti3w6z128beNXJ1rqaHYKe7qpKd6yCaSH6QMAUJzv3pN2M9869FTT",
  "key27": "32JFcCw6wY2vDRp6xHM7h1ui4WRMGK7tct3pPyiAPQhLHWqFxiP2bbbN7dHeVxmsBJV5aUPfvKN5obaSqJcg3A2h",
  "key28": "26a12urnFRVwsNEYwznefBHTNQvfm2wdJNkHSnhBtBmQaBJKawdMnJxdJKsEkzJWTWrFGjaeD4bazrh5r89xMs4s",
  "key29": "23Kvp2PB2oeWqknUyesWeXV5P5WmPDL9S6JufX98FdfvvGjxwe8PZMjbk8cKgh8SExL5tt6cvSjPvLSDHA681ZUW",
  "key30": "4gjFF7Adn6NFZB9KP2jer1c5uxuGjbeh69SpfHyMVCESPhTehni4LBz84F1LyTmkJxjKXZSRsY6XACoa7fMnHhY4",
  "key31": "GWQo5Eg1k676qtEQRVNTpiLZPh9AqpVf2Qtgrpc22BKhv1JHm1PxF3xgrnWTwnMKcVuQstagXKNDtPRvxzSiT96",
  "key32": "tpanRd2wU3dqHJv35S3yZdcz25r8RDCmWyyaqK3kHMZHdozLU47VPHArk9D59Lkv24pJJdteSsMiaxE47y2m2zT",
  "key33": "3FjSiTRtoTfj24EeUjfZYFmJuEJiay4PPASMtcVQny1DzbcfH1nSrFpHRmqqQxRB7LYmCig1jts7gj7PwoaWarZu",
  "key34": "5zHF711FUBqRZmRFg5fGhMw7PHftA4UiNnjRH59EvbEJAfkYsifxAjiXS1MNYttLdF5WHpfJx7Y9N1Thw3SYeJNu",
  "key35": "3KBHm1WZycH4gV772NWfVefHF35VPacTdWJhTRN3t2bqStmUKbTJFPJNQVjZZTNKUUS8Ffr73Ln2DnvwpnrAuMV9",
  "key36": "xm1ANefyvUf8iGYVBCZ3hWxzpJFMRSfKkwHPHs8WpgTeF138t1NwS7uH3E1CzxANNHZE6XxCBhoJWYRytRmeQxn",
  "key37": "3yFmbkebFwCQveXNv7rFEoMAAeSzacs337ZRJaWFTLSm5hgtfBXoZkjDuB6quqDdNifa2cBKe2eL7j9EHmZMXm63",
  "key38": "3ns7auimQVCAAJXv1TpSqnYq72iE7Dr1nDTrfsEUNj69QssUpKKBSHF1poEccWYz6QS33KZgix5qLJKDvAbSgUdv",
  "key39": "54on6veM6J6g4LWTkqk7TBpcmWcPXwSf3Se8Vudy5b1XztmpAvp2SMEdAqhUaWvsCyzGeP8i1EcLB678aCkzukKz"
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
