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
    "9y2gbjjBRZQLqRcu9Pof3oEcKdfsawScRdoTEdnvUacxg7WgtxLZH7Dj7zoYuBUShoLhWN4QJMsTcdFtSg36Ppq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FBhrxdKpQfFgBgBXuYxVzBPHR3eijC9WVgc48jgCq5bvmh6HWcaTJCstLbrJ4Hp6NrpWnLvth8a65MWjKHuLx5Z",
  "key1": "53UZYjP3vQGK2mDMm4EhX5acbX8JAC79VPE6Wbb21pCpbN73c7qzbRgfXGVPf1HPfhA8z4s3rQxA9hnJ5hUBYcC4",
  "key2": "2doDS7LcG2ZozzBRz1A9Kivg41z8VhgQcSuYyotT5VuGQV7dm9AbNaJrotTBPEp8ajyoSey3JkUG1h8R6AEWPLu7",
  "key3": "3qNAQHvb9cdpwovbvL66eCC2BcYofqoeyMMEMWLf27EVxAhMJZpezvfVQmkvSWc1Ek2mXNjvryP7t33Doj5gbgd4",
  "key4": "23mdFB3UreUJzsvjYXwwSnQ2BoS7WjU3TF5ssDf6wwzr4HSijQSqxeweYxvQkvVpY8SQSrGHntgpKRjFp8cTPvvS",
  "key5": "3DecDgWujPECDNuh7SUZt6GgK59qijk6MAharZdyfXFF16Xw9TY2YXbS5jRcyHwG2CqLFkhVVDgUzf4pmKLywYD9",
  "key6": "3mT4qUsSu4VppQx7xVebyzkVcEpamvssrCiSR9LMgedC1mDoN5gy1EzUWMJFzHkhNJLnc5z32JMTCLnqesSwbSh1",
  "key7": "4EmHEyHyX45mUcv5bFYtS2sJGJoHXRqGPDNVgZ2QNt2r8S4ehWFok7PGgdUDBEV57bUqkPys8j3PbE9e318CmzVS",
  "key8": "2cg2F8Q5wyk7BvTBzcA1AfPoaRjfcony4Am8bVKwwnt7D1pfBDVJnVyzM8n7fCToLg3YhMiVYUjniWVt7iMbCJbk",
  "key9": "kFjGHCgQ4rbYQRjcj75dFp4EsrMcpyoby1SmDuXdUDALnWLrx8cNHZcpc8bHpxRjUuTtjoh5RhJYXJJDLyoXjnm",
  "key10": "3vDdXytJmEDsPiY2tXtfsYaa475NfhLkGqRUP7j2yL3EXxwtrgDriJB7fR2BRAvyjNSZHoMKdrUx1YNDSSpqwAAR",
  "key11": "5bhqxsw1SKHmNU2K6edCxC95HDMhYkiV4QZC5nLfXVSWTeBvXW7RzieCfr1EWwJbYwnzKcvmpijR586gzyK23MfT",
  "key12": "2cbtNJ8s6MvZV1wLUchKzkErqVCcWP7GXoSomwR82gjjLmvYnoQ1rF4VxYknVGd6seRDW61Wrdqr86K9K2BtwcX",
  "key13": "3UbNLEmSPSjFYPjawGSzfPmrsqXMSga7DGswWA3raFPdrGjhNnEtsj1XL9oX9RXFH3p4pZF29AGtEChLgzu18XhK",
  "key14": "Rs8TywT4DRvDyzeWouY9NxXiD9F67TdqYG5cWiLaktAhfpDSSybZ7unPUF49fx5HyCRJosWgojZJqZrVR3dzojz",
  "key15": "5D4H2wDULYQVb6gpgTgbaN8By9Qjm473K5dpXfDVbdcoNg5D1RGLmGDJuDi5LZRDs39pTC3R3NcNQn1orQmcFoDE",
  "key16": "5viPSbtgzQS468CJt6D7hkbB1iSxSNfFJGv12xpLKktNMf35XsLNNoqq2cUCsEs36mhGw1TBLeQKfLSoM5fB53QG",
  "key17": "9cxmYgpFhh93hghSJxk66oY4rbW5Rp28GtUFKwcCG9kpsdhkXAKV5FDq5sZitEpqnrpHQq2gztQ4rFoHPx1BQQY",
  "key18": "B2KNPDEMiHRm36qHsQMNw14zdThLSN6zfZhoZ38QHtANwdtQ3NzAfTRxMezR3QSMChbzkqrKUJUas2rA2TjBy8j",
  "key19": "Tb8NVdBhsnJ2mRXxqCArf5dDAYMuBUhbjNNgLKBjsnyasD4VAw5jiypvPsKHuGSsnBe3YjNSpsYDADipBEmhcRR",
  "key20": "4kGi34TiXVLvTrvFZdr5oMbNCYDyQv4iJSuidc6gLfm4AyXHD9RWPuxxw27NGz2bJWRxfq1GJYzZcXKFhdAtK1zL",
  "key21": "661QrxH5XyTDc74P4z9Nik34aKuyCAproc1PN371yaxC3YNdUZtLPSwr7DrjCCgXFDGBnmGoJiLduhgUiV1ocE8Z",
  "key22": "5zYdRbmJbNsN5aCJtbtLhZn7ZWTGRVVGLuDwLL6ZRtQFwiCbVGF1ZntQXW1wz73q2C8ATiKHyUxubM4Jzpb1Ksgs",
  "key23": "m7K9LnvkSf6Rw4aWv6t8mfz6Yhw8ucLieM6KDDukPaFiwzoX5qRzFRDrcfqwmPp1aA7ezm2rxr3mVFFUCBNM5Fd",
  "key24": "3tAGAQRpoopNVUeA1fr5DzheXaY4wJCzgHrQ9zSoiD8pqmyn4Rwovm8vU1kgRB4s1C3KeGbD5wA8jt25p56A4L1j",
  "key25": "4qnVS2Smj4jhNwjmoQ51gxHYESy9sbBDTfCqv6NEdWGf4QrJgZxxj6ZdGcje352oJhi7HU4usem6mBVwAEmosqXW",
  "key26": "8wEgGvWaaHpTUnkhxLmBqgXkP8GqXyHjjxwGFYwygUxSscDxRWtUPzGR9QVCs1HjaUQZFuS3ZGgS3WSuL8XZBnQ",
  "key27": "4eKMtA174Jko4dxPdRynQsP7Nzebt8M6bs94rbFxspV4oAzf3PyXQUNvZgjkSNiNaZK42Cft98thXSwNEhVqwNcN",
  "key28": "bnGnjkrhwqpdDBxZaxqUWvdabfSAQ6qxZ8r9TLaXpaKKifzAXRAnMQs7gFQ4Mhd6t2n5rzGb3wP9UfwnMJW8Xyi",
  "key29": "2rL7z6hfBkrN1Y8AwSUs53rAVqTkePNGLJfpoXiAa5G5DdNd2YG2QEsYmqeSSqBtSLVg1fX7TiVo7VKKB4EC62qe",
  "key30": "C5QfWT2qQjf46hKA1MyQRwvqLi691RPyQG8QJWwvnVt9A4NnymcACANuDfWbv84tY3J1uaT4of22DbyRYeMnhMb",
  "key31": "DfXjZLbtBZ1mVVokvE2wiY3aFM8w3MVNe8HX2FHxQ2aor3nsytEpZe6YE95uBCdQe7vqQGM5xgc4VvtnTHtHb1E",
  "key32": "4kDiD9TrbDzEucoF2qzrHhrkHKcUjApL7JLoGJsLyKWYnZwnYLvqWD7Z9xMyDmVYUAaPBSG3zHZhHgiHdY5yqgtP",
  "key33": "4Hg23XfrF4jhoZg9o2y3ugCkMRYvTkXjAWSYzzBpEr8abjd9bGGKTpm326kNAjD26QNH8EzdvFT6zgaKLTbBcRYG",
  "key34": "4ajK7fr3EJRf68k3tD1PLDqtW5ajXN1HL6RPUsySQcEnzPrNeK1PZRGzp6deSQ55S8CdVoGD5jGMBKbkwE2BgFSN",
  "key35": "4rhvhQvUKkiUN954hHSYSfBMfxj14trD2sNACV1avv6Bi52gYdsy5cRcgRLuYEJu98sJ4jgYFZBzWi1UPsKg5Cjg"
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
