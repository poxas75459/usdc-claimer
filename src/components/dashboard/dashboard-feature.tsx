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
    "3iLWoRHzEZgj65dPRiVRzsvBt8xp6nsLJKkBcPHn2Lw8SUYgtXosB6yvoe47QYL1e5zWBJD4G3dgsfSEVNUdjDvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZRqdNQSGo7WG84mCgzqhhnPyYDbpNEJAbEDJApcpShkAcbPeqHFDmiPRHBUWJg68ywFc1Jay1rmZ2KWddMLMjkt",
  "key1": "5rr1M8xZS2Mux8BHZWaC1eFZ4S4WZTExT7sbCPdEsfLYR1gQSNKVcANF4pbrcs761G7ZCCUgUBGo8RmPMsejXPRV",
  "key2": "4tyvcPFg4xda68nrhxadCqQcDCAoKhU7yCTcyj2TunL8FJQyFcENzLGuuSsWdGLFTxy9hH48NQ3x6KzSZL2Du8VY",
  "key3": "5iGgN881R3eSY8MG2RC1j3rPGCAbenQUeT4GbCKohE4xddPGTZpPz3kxpYjFSxm4h3Qi73UL3PuHotZamTT8TPa6",
  "key4": "hYdmFsXNdQid73w4pHYCv2H2xxvUnc5nNbp8Zmh7gjJSSFH1pyEsm4VgzqrdxrCdCEsiFW8tngc1C3VGQebkpfR",
  "key5": "682GRuckoxPszA73fhh79QkN5ddt2gnNLNepH3tcEPHyYDoie4LPDGzPGugX19pg3wd1nzUqr77umjGhumPh5DJ",
  "key6": "9aCfQehzau5Rh3mhcwbKyJosPjafKRdDw2BiJoqzXbS2q27rfDsVG4WGo9tZ26RvEohKD9A4S7qK4mkQbowXYFV",
  "key7": "4FM9ct4KhBnjnERrS6TknQy4pq9AFqmnYBanXh29aatZ1eZMSvVr2JbKMmYca3zKGennVjjRWjdZwN8iDSwCd8pf",
  "key8": "2J1XXHrDWJ3iht4rdBK7Equ43ibFpDVgPTH2WFqT74DvvXPzYfGcFab3U22j8e4qyjEU5uKoTQuCxkMCGCTmr4AY",
  "key9": "4iRFpJBTEyoC8pp5AHhiecAY9XAG7QEv9wcAS1KAwYTEq1FVBrBnNn9rAWsTK4VdNVA2v5HDKBYFcN7V9xL2jYJh",
  "key10": "3DeqtqeAQzXDVBxVnfz8FkjMh6xAZobbUkHk6xD6RrQpkuXEEtngFaLkxWdTnvRCabp9qrVnHuNMnEouzKWCPwQE",
  "key11": "4LVRpd5jigXujk7N3b7LA5LKzhKKkFkVFuCDCzyqY5o5oCS3TkyxCs1yHuSfCeWTwrCB772ftqwj8zKNUDsUXe8q",
  "key12": "yDeWwYUSZtcHKviypJ7HaGWxanss51k3RiEo4dcf4d43L3V31xbAetskk7ktum9sQoc8PopzD69JGjS9kKQeGRv",
  "key13": "3s57p6NpkSxjCB7ta2osohASWgHfm8deqrVePNmxqqMFSiEexr7RtXAEKoBBy1QpypdcvSzZDibkbDzcfgBmiqEi",
  "key14": "5FVYsyMyTNx9BfFDYeTxTq6SjTkHSRersghHsCbfStrnJUeYwM76SPDN2e82pKhEXZ8iWfE23mahtSGDJ8Le7544",
  "key15": "511S1dCF8ADGs19zSBuXAx3YTJ3FysC3M5bmkr6VZsfgd6FXGDWj36oSRWYYdrTXXoWd5vfvegJYnH9XbZTw4qdr",
  "key16": "5d1r9YQtND5NUkqg3VrkpG52hSVRhFKBRGm6CHgnAqxgnEtPeQSr1HLVNcEJTzQnUsJGt1E5LySM1YeFpGGkvyUV",
  "key17": "ujPVKJsaCQQgdxodVKVdWbGJDHPBBC1Em2vrVXBKcKdUW41nAMHBHArDgqQZNqmN5uYxNcu1fweoF88FshWSBQH",
  "key18": "62vAvkperRFa4cVoGBXdThgsZPFXmEc2xF3GyRXXvEwRExza2xsc1cCaiMd96WeJtjbEEToQzwcEPXAB18uKjCq",
  "key19": "ujf4hQ9bN5PMzh89HQXJr1gGHXVtE6bwZ7ruf2QrTnPFbXTjoy7qbNYfSgqpdDvCwJremDgEETfKK6wXNQW1c2D",
  "key20": "5tMx5mp31NT3VE7mtJDTTcBKnzZUVdTkzwKWDTo3p71swPZ6BPuLV4TPQr7diwaG6AJPYV8JeSeHfW5KRpEZscyu",
  "key21": "3fTSzYet8JaiwmoGKq1CC256esakc5sHK4bJe7PV1A1nDAo1PGsPwHB3BTgqSUkW32XkvSkYZArDE4SbcezgSiKX",
  "key22": "5BV6sTL4pZSoJnw1ri9og4ELH1oN8gVfLwnNaN7T5iVAv5RSNCwUvpetL8YgPRCoR5WzRy1TQsFnSZQYgDg5Qnjx",
  "key23": "2pvu4TXNthnP4Wjt67t3hnWbgQYz1znGffkJxfRSTokvEA8s6j54RRxfzFL91HYVpwqbg52prBGkGfWLxMU2n9sz",
  "key24": "4C1rgGMm3TtXpDXCm1gL7EKj54tANTSTwxtgr6BEtvfNZWwTnWQ9svBVfmbYasteosCK68BGWHQJ8baumYKRuQq1",
  "key25": "24GSw8Ymw1Te87bxLkZ1YQCJRDYo9jej4yaLhQQK1Q1uyQAtmPydCn8ZBDxBkXK6ABNQ37DBeKiMeyENo2WELc9k",
  "key26": "5nK4m1BXtCmXJtrbDnnktBTp7BzMjN1RV4cyCwfV1Y4nfEkuEYLjpucNBfonyRb8S5KSK7m5xqb3KPVhvyREDuCB",
  "key27": "6FmzaZ3SJzPgT7Ur9aYYUwjigVgWknyz7fDbNh1cBeUCpZeHBPcGRkxXu5kd3XvKL5pL9BrtPDnnNXNS4HqbTym",
  "key28": "wDsFn2fnwSRo5Hmi3FK3to5PRyxWphKEPo8f6nBNsij7csE2zJ9AP4k1Bws8vJbF1jBp65PsMpNUGJMeqsCuTZT",
  "key29": "5WuTpRyvfzYHgNdYFx1iPb4j4ETDZXo5MTLgxLGAr5GVGtrN8CvSyEYpvMWfYbwUBAsZ2ANoSp7teGBCbgbCccRM",
  "key30": "25e4thfVTf8aMFpnmP9m8fRorvw8bo6aKPdb2j7xT6YtuYmP9FHamv9EgNqH6BFks5XDGYnKDYYQVvg3NiiVQ6fP",
  "key31": "3MeJQP6rCQJcbpzphxpky4975VQUfsv2HqypDrDyxSdv25266GS3kbPEhS2Y3F2oQviSCwy7Xp9UzxSAMDxvPHmg",
  "key32": "4MreZZ6gxRQqyUK5U12DYUqcbHm3yaHmzc8YUGobV48tuKf53No3GJuygeJo1bHDnhiLSo3anuBhaPtX8zzsKiS6",
  "key33": "j4PckYXoc7bh4geAhAUVkvpNbaXPQNmHAgpbwzqc9WA2Bmxa7dmj5cXbNK1jLByCTfJhofGd4Hx8t5CKW5MjZ1w",
  "key34": "5iZcmiyjZzs2rWbNciYJXRX9vrUVjAMEEwcZxFwuEwa5UM716YwSGFsVphN3vB8zxTnqv4md9GVrs3P3CRR7fC5E"
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
