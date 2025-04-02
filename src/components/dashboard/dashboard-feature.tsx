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
    "be61EPwzG7LWhXei7ZD2S3TqqSDBBHnbFxD1jyUPnfja6N7tn8o8uETopzRLAwcMipv7D9rms9pkKvMud4A6KeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NKd6DVjgFs5CZG3fvF2dnhhx3CBDbF6eLa2PsRbwB3CHvA4e7BBV9yR5RYxhX55jcbiGJAqbccJGDCYJdvNoXjZ",
  "key1": "3MTTNF76bnDJaRU58DT4iZK579PuNZnLCsMSKSZ32Yq6eY5UcYjfoT7p4htNm49n9KwyU4LF8EkK4VfjZvQio8ST",
  "key2": "4QCAPELVURYeXDyChV2kiCVn7HCwmz9SbV7Xe3yXkyuCjrzawiJRAhbbzGbu33naN3oB6g5igL3dt9LLyToFZPLY",
  "key3": "3psgED7vYVpT8mx8GvxicnemhrrmRoGQ8c3H9BjBjeiCeL2P5PGfimxGRf7oBA72v3ZsQ2fJroY5ZosJT2f2HVog",
  "key4": "2ApjCUAi94XPfABNEFZajsT6qftzhtAmerKfAkPqDGUYZ56Q9nRtLx8huY7JgqKAVgtH4zYyHcikyRmCJPaMyNm5",
  "key5": "5HSTLdKscBEfNNLuz9FUtPj4jU2f6Qycf7rYxrDMxDniei8Cq94GPSSfZVZDRp2dHTh33gYr9TTCvrxBp9gD9BE5",
  "key6": "3dW5MusFhq5rfeQzZHkhjawTsMc7pppDhZykCtZJzLdS5m1uNqcCuZHLPsxAXBjdH4m7QuTEiBywVDtCDagZNLzb",
  "key7": "4xgHNHi8nBjXcVTK4n4d6sSYmxytqGK2oS8ZCsJ6c8uR3bs7MAxanwQzTMHWLpYsx59XkPSV3A23ghRahu11Y8tg",
  "key8": "56d1FzwVorbhfpvEZrHgCS8RmkFJineE7uEnpTpyJXvByBh5TYZ1tWALsKJ8wvmPTdbzdwGt6FtF6qQTaJgifzMp",
  "key9": "5qGj2P8ACV39mVVn3LBZ7tquGaWPbhiowt8G2U8YRXnaBXPsxnxGbrBLnjrrrDvh8WTVkHSHqax6nfWHNoyxGQwf",
  "key10": "hMrzdmxJtAqcvuLZ9HSqp3d57KibKB1T7joFkTRcUgguBauzL4pTVivUfcDSxpE6VwhvZYBPqNWyJsabL3NuuwL",
  "key11": "2yAFuQC7pdkEqtoa9KygSFtaJYfSJ7A19sMiEujTgKxv66eXAHrX7CPqbFU2dSbswqENLrts1XM95YWWZ4btNcNU",
  "key12": "1zKUsd16aeaYS4HDxwfdf1BuBbvbLHBdXzYbbCrq2YsCLgrqamFf2AimRshn6cSWZjBZgk3VnFiFbztSfm8fNJT",
  "key13": "3b28XKhJRN1Sw94qmWYy3S4LNiYdjuARJXUVYWsRvNJW92DroLeqtKt6n4os3dUEt1tQ19kweo58bDfnyYNqTxis",
  "key14": "CKu9QWVWwizNYM6JYRX7QNDEfFvQ3LvoJjJ3r3rXWQLnJteKgQQbzmHb3By1F9nAFyyX5sbeHLzfyPZfuiSpf9u",
  "key15": "3SQwwSiEg3fRPPevCqtL8o8r5HBfcWc2So8PShuF8ZZx17DCsmGnXLCHAh2uezxewq1WFdqnGLesqKb6ppoNGCUw",
  "key16": "VaMeqRgC1bCf5taX6d5sdJx32kn4u8qXyHsuNJx3veAGtwqVo3mq6wyYkw7pFR6b4r8Hi43yoSR2LH5VNGfef2T",
  "key17": "2zVnCbLSJK6v2VS7acHLZk2hqzBQRjvzeSKxKefzTK735LoCtTxBnGMoKyVqis1A5T1XLZrgjHaC5UzGJmkhDf2g",
  "key18": "3QXFoe8j8jPk9AQx46QxwXsp6WWKVzMBTWR9HNiD7rWUHuxs6MfCxCmfjEi3JdNGjMUaGXkzd2BtD8d746kwinVN",
  "key19": "4QNi5HcGHAwunRgvA4KeDNvX3ezX9n4jio2W6nXtyFZPXoTGtiYU2k6fsCpskeq38FaNhHwz6KhTdTerygXwMfMH",
  "key20": "oCGgoktCoyobEZwNK7kkaXYGcmwCi3WeS6rD2QGBeG8p1CJQNziixkCt2hSbcKa9F4msa2owNsdSk2XFSRC7Kt9",
  "key21": "49spDGXNzRvJ3hfL5pdYqhsGNzMCEQ3Bi27ftqFT5RTGLntpz179DmpfwCA9oSznMYavWFmUKvGwL16vgL8FDZ36",
  "key22": "5HGFSi1Jav8NrYWD2q6U3uypzbhqNwVR6VD1RAwxd5GZcYvdH3cfcjQVDE6j2iwcLfWq83phK7UwDKaqkfqGvh5N",
  "key23": "5ekGZ2xUpDW8RdW2BF4dgpSP1h8J7SCxPBFYfks4TwQS6aV84PK1K3U8oLrJUnE5txnpTXACuE2DMbuaFYpUEKFU",
  "key24": "36FWFrPgHWvi6GKrAKDvgkLPbNk86RyHwdbdbkW3T9nwt8TtAPgNsSLPxWA5HMH45pPQq1PgmbahVSNmbHWWbZFE",
  "key25": "2NFFXULsQ77xXkiHPbf6bYK4kLtnGDWwQ6BrkA7wsvfP3XExE2UtDcLq4rm33CcapzpMALRw47nRRtrDmurMhQ8v"
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
