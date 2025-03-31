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
    "n4j7m9iDMMmqJCgdtcBqfFeNt1a1oSfDu4Z1r6Avb1FFvQFYXpXiqkXqMFwg96tiZ8EoqsiyYYg9V4pFJpYuuAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZN7TZ81dh9itjVWvzN6oJDLoggi2f6K29u2VCuccHS3pnYkN2c5CEqzTo6DSbVtXa9wu5nYvZyQBu1QCU3r2dLn",
  "key1": "23u8vqUEdE3kEcpYtsasDtsHrsoiFeSiTweukxzcfDN5kYM61oGAXqQ4wgtvFZuaCUuFEBBuBcyRfvR1UFi5dRi5",
  "key2": "4TrLXTGfr3SP5YS6dHn6ve4MC15dKMgcKYrpwG1qq3Aoq5EMvYy7PPtiEDnJwJzb6C1W5LNUmJpERG3qJJLWXS3i",
  "key3": "CMApuf6W5docK9kRgysob7KFLfKz8Bck1SEtBK4txwGBUcTaLEYyFuAUzH5x5mKg2c9tgh8wL6YuLmpjW1bTtSd",
  "key4": "3AhANnyBwZ9uyizTivhWtvKYqVpu9ZSLGePRf5vwdes2iupP5J6xsJ58e3CQ2SZ3sVHdjwDjp8LbKmC3GML79CCk",
  "key5": "33N84iG43VW7akW17yzAwFZKdyi5r2dP2PyRx9TnoAbGZJ6pyDkJbF5PDrAMHfm9pwCS9ccw15qx4YuKUvbmGWvb",
  "key6": "3b92gMHUiExFmu2ugVVmWvq7sDpvKXWUzXhhHM34zYdsoPH5aGJnVWZFku8SuZT27NwaPjdmHztbqRsYyESyNmk9",
  "key7": "21o7UVdVPDTMp8xdtW8xxVULx7SUvH7BTcGaW33nK7N7rHWmR2c9bDYRxXCkpupnWray4FgWNBwatYWNSWtbHjPL",
  "key8": "5fE7yby7PArQGfaJ14xRL8LJ1PnkzrkPgxPKf4faU9KJYHanUUjTuvT8BENCUQ6AbGXaR4KBycUD4qBUWz5fJH97",
  "key9": "49TSqTsffXamXmGQ46HL45cRwCpDZQUC2EEDRZd1rnnGzd3CMFKavHD1kPzzWm4WYv4obBT7zdhmG9VFYs3giTKj",
  "key10": "F4j2MejFaQTU958eXpqU54ZStLTfa6kLA6xJWNNgVcdA7KkziZkohwCiAuyYciFPTAcJ7BoN23sTUWHMkYM3zfy",
  "key11": "3ew6hszFgb5yExWmpAccZoH2wDHKG5mrEhzhJj2zzJEFCNPkHmxXzRc3XsyyyVh7wjFd98r27DXLXfecC94bxEqJ",
  "key12": "2VfrK1HDRhPNo8jEJBHLxswRJwoS2tb6hA4g8CaAeurYuneZeLt7XsdDUSJLr2LyUG1kU5AxKcoej2HUXQdW6JRT",
  "key13": "dtYFLfSCWfLVehzBsbtqPq7sUTsedLFjmNGqfged9ZZCPrD7mYouUbLJ2gH8xFGy12dq6gnuNRsUnqw7KVsX7wr",
  "key14": "3DiU6Ve2GHRybDyQYwiQ7m7hmMgQkUUfpDKXhbFT66dkay4ikfWW12FREzrwWGZGjJjmqv6NN3FcpSBQp7xbYi3G",
  "key15": "64kEFwoPhKtBbAgdJ7HfX7SiHbdLZAUHYJC1jWAQHAvVRNoXCrkRydo2WmFYcFh3vtML3Qn4MtJfsmsBZtr5RQGt",
  "key16": "3d41Lgd9gJWPGPn4v538zKmERRCRCb9PVC3aZpi7kD8Tpt31BujqKGZnwympdFfUCjfZRdYHRhvv7Jp249gSD37F",
  "key17": "3NcHnvREjEjvhMfMP1TEJtn4KhHFcXvDV84PuXxZ6LFattQBAhYS2oNTffrw6CdjXjdxGKkMVwuE8aNtyVU2erZi",
  "key18": "23kxeCLZ3dd1RjNJwDZgPHiqs2nabNXpSANYLdWfxAqG3p1BFTJfVTHccH9RvG9a42X8oCVGzWsmSwDV6uWFGd7A",
  "key19": "258ZvZRoaYcTRfovFZMvgeD7DZ2zWkhDZiQVPPaG5EKps1YtDKYAf1Ym1kCkAqGeArDV14Jt2EFksNg9VU8tuMLW",
  "key20": "KVVM8GL4fv9uDBNkHpCVUZRioGNUXYQWV72v9w431RGNNLQQPXyoopNPXUi7oehbdF8wuKspSxjBdcr1xkKxhmF",
  "key21": "4DyMdQ9PJNxPS7TEAXrm574JEn4WyaV4Ueu7mkdSiJj3w3JSioQrXf3f35YS2F16q7qEqCDfUnGDAVUwGWGzvcSF",
  "key22": "4srrqhapVp9rusWejNrWn3Ckc6wwtM6KJBqWLF1L2kHdXqUWSPKhc8DcAGKd8ER2fk8vvtMHA8xXmCHFHZwec9Xq",
  "key23": "37rs9T8UnW3mzmqTGa8sTK6tjL1gj5XMKN7YwaPJGgGJNnnoYP2YjBZaDbpqhuDtmQ26bUP4eePAS3TRtyeowjc",
  "key24": "36s7RPFx4nnsZ6zqnJunLwSW7PX79Ui8aMsAQVtqgEJrvJywMU3rCURqpJ16HSen99dygFcyu4R7kwT3J924YS3S",
  "key25": "2P1vJeUmPJGqzHBA8T6BA8Hvg3JnCU3vSXf7K88oorRgyFU72zdYUrkD5tRq3ksZGyd26FRqxsh1BKT4hTb3T8qd",
  "key26": "b91q654o6TntRkvEmv93aWCqVNCot62Q4h25evUBeB52UhMUqC5B1TxQGCrYfunhLXdnK24UWmAX92HRJLKayjZ",
  "key27": "VczHmkBii6cpGCCxWcNWYRkZnbCMT4fbXrb6Da22pukB7fn5bcm8ujehBtyEmQzdt9NDrMdyRx4nx45p11w78nd",
  "key28": "5DUPFvnrXnmvCVdfxPzqUpbgbPmLMXu7pxesCho8DPXnJx79DT2xPPdDqai6J5ob2QXbyMq2gXtLv2wcxZ3aPVcp",
  "key29": "oaRHoY5G8Mb9ZGbmxne7j96he8hgCBhT9t4Pit6Lvxb7bx1d3WdJC1ktKiyR9TVGZvAKv3gQgUZEVqAvrHxgki8",
  "key30": "4y6JXNyJkvaeti5g6Zc8FwwzADXowJK9dPaP1jxhHGamsRMdkC1Sv8Bd3SRD5PuSDVwPaXYe5FZwpG9xhLFCRJeK",
  "key31": "542wY2b7PoMhqhce3MV1ChmeUHYzJrFyH5ioPuDoGfe8TDmAmVPsXeMpJ1cNWirrHhDgKfYTR1y3gAkkeLjaMioj",
  "key32": "VRf1pb7qQ9AYCapnixMvMF5Zv8MAuFtGZZPdjpW3a99XQqRGZe71gykQbkPwfGAizLA3kgR6nQo4dgHa7hSYaAw",
  "key33": "5GV4aniafna7rE6fcp6jan13Wrpw7CQ2iELtxZkTGnZBoWHF4MebH4RfS5KQUjpWBzMwEK59J2qtGz2yiBLwmeFj",
  "key34": "24qx5T9fBqw8nXhzCEABVBnFjS5ZLHFvkn47ePB4JsUTyVNApcU3mYyZ7mk3ukxazdaJv3zhGsSWRrk2PeCyEjzy"
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
