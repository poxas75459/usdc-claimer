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
    "MEaD2pLTfGk9PvZB4DtTU9Rfm7fXfH5Dq6FXWgpc5FLqoHDdwzu2MdgiRNkmLinpJ7JbV7GcwWWHayNzikhcuQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28mPGhBs4PEXqLB9MrGRP7m5NrAWsHt1fS7XCoGwFQEsSm1iaQpawTTBnZwvnf4LszK73daT6s8DbZkLvbnKFdxB",
  "key1": "mPB9hdTzBRgMrxXZfbuV1UFmFmuGKShnkAvqNMFbvpU6fkDozRo9foQQmKGxJ6nBQboYf8KbZvKkgFJnoDMtunz",
  "key2": "5rKTGc4efSfBJQQt543KtmcphT7A2UGzxd2EFor91saaWDVJ9ZW5csiHhYf5QmVQPGvav4FkM91sHDFUWiaWTob6",
  "key3": "57PPzH66EdKiG23qUQFBHuv1X1CAb7JZmqhfSM4GdcUe2FKpPzVmQLFuKHSsjPQtz4T5WgKKcWeGXkB1UKvFCX8A",
  "key4": "5Ci6Jn6XxmGRxShnXMZyxoLo2jkcwvBxWrFgRA5Gc61aonXTkDsgp2eFVzazSsYVcBZ4f8KufBVAqasFk2TunbAq",
  "key5": "3Xi2xxqz92191tBsFY2zwF6pB19Eb6XfNAzL7NuQw3vmKQJC1JaC4pBmukgaucabZAsus3kTxNAsmKEV4spFrzf2",
  "key6": "2WR7TuXWQ5sENPewtE26GzbH7gSVtn8wWzmERhWytX4NvkKHuosTpqBMvwxG6BJWTRmVgNPoS2DYz5236Ak6dvyB",
  "key7": "biEQ6MZtpykRiRMNrrafmVqjR8viCnZtg1T6ahnbXvmtdJobFbtH8NKfi4WAsokYyWDf7gt936jScXRE8v8xkqa",
  "key8": "KwatW4r3ZaNkaTeVLWpGZW2Nm4Bnskgen32StgMLU5X5h6yYEdxh1f2P3a96heAZAUkASjN62TFnySqe4p6xP36",
  "key9": "3qEcnfn6S1L3hYD9Dxx4kHtic5Yyuuk6aguaZHZiFnbkDhV5ypZSUEkQXkCKgjboprqfqNR59NxdZbE3jN1XoHb1",
  "key10": "2s2Q1CdEaf7BLahryWzAXcsptJRwFtDskBhbQsx7xDJnqiHEtgCjhGwCRJK6QcTYjp1Vx17154Uhn3Qi2ewLALYG",
  "key11": "FX2LZuxmu2UGkYu5tHa6VdGeK1qbPAnNfJbMM2z3yAUBCKgh5398VjJdcVxvMAFQS4V35SQnq4fWD3ujycPq6Ug",
  "key12": "4AfZux1TG1LkRCYsw2zcczPFgdbz4LQ16L4Anmv6N4eUBDSwisQtsr9ao8uk2irxWQXeCNVui9zkzChNd6zbjuRB",
  "key13": "4kaRxg2D47BidinAhDrhhvwm4feM5qS7cSgwfDCtpQNnzVd6rVm139jLqyxtd2Pn9S8XS5hdjuoQUKWaVjqxJ2jR",
  "key14": "2HFyZGbnW69pMBktT2AzjswCbjpUFMv3RXWzfqQgmsuY58NHWSW7un3R8RpbVNTAAxuUvxTjhVWaaZL8PH8CSXLD",
  "key15": "4rpHgZgM3rEEcgFfcUWNLFXQspk6kRaeqzshf3vN1TNf495oNcRdmht3XcwNA2h7PfUGfy2Y4xU26Dki5uevFziz",
  "key16": "R9snMB3jyFbPGJiGsnSZXQHawsiQAppuJQ9NEPgyumV8yJLo7fuRKKMHE6SZzBs9QKgnQpeUbB6XGEgbH2RuGb1",
  "key17": "59T9DP76v3YvuocF5xuyc2QxvG99XazMauMjByUv2hz8Zo2JmKJ4aJtxEoYWL2MC6NkLTSBk6Nok2TgxEp7zupKF",
  "key18": "3QiHQR18GU45jLmSmkra1QN93QFgpUNao9MM64LVvXo1dn8PtMXGEsvmtq53CLwhXSNzLLdupKBKju7iyyg88MFp",
  "key19": "52j7YsuSACeU2Qf9NU4Ken2gQVDt297M2hxhcNtsBQZxVo3GoXPnG9GezZk3whezQz3gzbYDYGcFrd3M8kcf6y1o",
  "key20": "3TKwLHM4vvFx7sd5pFMbb4dgxNCS18erA3VmC1ErYtbb1oqjLmu5PMyP699x3u1ui9BXsC63ZTMde2ZgqUa6iJJy",
  "key21": "5uiB4j67YPSonjDGWzYRuFwbYf1uV2iJ43EahqD4EV7MUgHu2VCspAfGn6EwnpvnSvByF7neH6a598NJdXyWy3tp",
  "key22": "5DTESzot8tDxiPMKLdRuhopTFUWoNEKh6gPBp9CxgJev2VjzSVemyX29NsDb4uFA9AH2T2TGYzTb9r5XtHSfUcvk",
  "key23": "Le8NDpon1Kp3V9rEC5KZm4gPzMwxs5DdL3gtxHBZWo8EU16qBsDSEx8xRDNM1EGxxHzVgDc4tvzEJ4drKa7fqEJ",
  "key24": "5n19rRKZU6AkyjrWRYywAqFF9VzuWKvqnJD2AfwWwGstWBRqAcPVW1BobMizNmXG7AJ6CSjng9GcaSzmdEvxhnzv",
  "key25": "5nhC1mVMc3jb1vvFmF5X7LqzfLjaKGMXsLoPeqB599aaceEkaAdNqzBpxcHD4w4kwVwXQ43PvYH6SjaV7GcKL4ET",
  "key26": "aLdeKQk4uLgJGNW13piovyUYoSUpzAEtKPajD6JqEBmX3PoaQoYBg9afqgwKJNA1ZrC2UBsz93AshMFGvB2dEXH",
  "key27": "2Z2kbD7MiVZCSwXGaxRi4HtbvodDdYtDXLpVs4foWCvvXbWXBBydVTPbhrqMTAADrQD7vz28zwkonVTPNaZWY9S3",
  "key28": "4tdbmFkAtykiZPmakvbpT9xCLas4VW3bkNB5uSGkbQhPaNfpEBhniHduSEUxK5gePqTg1u77SVUCBTdhnEmb6KHu",
  "key29": "5zFzZkMaaJjvXAgL4tPWgmU43sKg3QqgaFr67SFYHJ1VTQpHopSNvvnijwP3p751jSuweDriZdQsQSZ6SbNZm9UL",
  "key30": "4jNjaSyj7UXRzbGhB4zKAiuuDFPEHPH2vCvtdvqYfftY1qJNdyaZmY2pgygdYs4zYYHMXTBtQvroq8KJg8YovcFV",
  "key31": "CDjhMiYjimYusSTWsTNea48Wj4M7PgYXsueadGR4b4cccpM2KTKDqTSEkm5Zy98jdYGnNax66CgtkLSBC9abgfU",
  "key32": "3ybJL4zxFtGVUxFXskTSN3VmfdzxfMmh9mXzJpUkZPgXEtEXMjcbFKH7knwiptWdxG9Zq6JLy1QTE3F3fiLHuPXw",
  "key33": "295w8mprFwpXUDxAxiX47Zt46aR6ihaWDLu8Yyws2kVcE8DTWnJ8QeaQQ4wh5o2HsE59Mt7V2E6sZzJYS8oPnH6e",
  "key34": "T4AMRcNsk75dfVFwH8DWUAKsXYkXmX7rwePgaZ2QxAGeM4K4G29b5g8LmSfc2qWPoAsensN9e7XwWzHBv4WcVPz"
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
