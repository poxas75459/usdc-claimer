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
    "XS3uvsQM3CUaBXoaDVhbP9RibeEVvKXZG7MkvPrnYMLCFumvGuyBqMzn9Vdkgt9iCUX5rfK3iMsDNwwHfofvKz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vw92PjpvSMJbM3qd5S7BP3avJCEvmAaTg1HnAiREpHTLenVSoM36FveLJzacbeQn9EM5AKsMYEQvHDrdEV4BXvb",
  "key1": "35yBfYisgMkMtr3LrrQCxfexcEm9qV6tDcCsq1txfDRAp9bL86MsmVKM3wnTHR8VwosKwWFepgaWBuTA8rXvfxQF",
  "key2": "34PzLKMAdqH6F4otT4ReV4Cu1RVddwz1grfRWBebDRKcY7kf49di97Y1wDnTZtciTb3XNZFEWUUy8sT1SjaTPS5T",
  "key3": "6Cxw3qT96S5cQoVTXtBJdk7o8U4bmfSEGKS7dKdLQoynjpruqkoxB1gKxo1XGSukkHFSRNhvVqENvc1dwiwFe9H",
  "key4": "5uTot9RSBp9XNsJifzytpa24ys6JP3xPcFQpsVQgwftUDbKywDwHrAZdARLUybwtPYDfM6emGsYjvmNXiTvT7jgU",
  "key5": "Pht7F4xnz8tqwzFtskRVMsyy41QJqYXaaHnKV43oAGKS1pqyTYKNozHmk6gwcbF5Z9ijATGuK1q5TpVKHJgKdrU",
  "key6": "3uHGccjS4Uuaapvkb6DZsyZodH2JhjjFbMeZg2rhmj5aPxqeMgfQNAMbmcFoW7ihudBPsqtCtqfKi69QqmYodJSq",
  "key7": "57SGuCBfY28egfeSzGnLJ9aFbnYvemMrnyrJ5sFpbHQ98gFsEHhwH6FJyDwf96uzqWGhKEV3DLmhsNXy8m111kbt",
  "key8": "4xK45EjY5yAcbqUqMakpo9QW1okWsYc2WLamKonXmHuMbsrqZHpvEybwvfPrnMX4jDxf8e6cWkcumoJWTK6t9BMa",
  "key9": "3uGrpVZBmTf3q94Y5XAoDpwrKoGJugXLuQ7o53QjmLaSeQtDQveCt1UfQaX3yFTeanbebWES9pThhGyt57FtaNKV",
  "key10": "5F28LFBi4KWSjsdeSBXEDZhCbGZASbc3xUE8Snw5aiZgdg5prSQJU9DknpqVea4gntWpQPMEDdnWB76cEKy2s3CP",
  "key11": "4iro9jjvtvAEXXoDEzG48H4aaufHyBk9G38bJ76XqdQQjarFf2AxSLcDuopUFqQfM9VSNvtVtqL1uVvd6cDPuKzf",
  "key12": "26BEVReBw1GwjniGgJkPME3Pjxzq3mfMEfRLYoSTUEwr4Bp98kt1TDvdusTMTkLWohNkRWmptkdXa6j6ZXrMqQnW",
  "key13": "2kdjAUWVxrP3SE1VHAAFNjMwgRzh3GcLh1Cma7zsQTFbCefMKTWzQe66Ftz254PBVuG4Kg7Vi46DZT28LmdQGom2",
  "key14": "4pRkyqTzTL8EKPRVfJyDyZJTFgxM9MgmaCSz5DN1N3cZUwUkuqBjQgTEgxyLsa4NrnDaagb9mGUtUnRzbxfRQXJs",
  "key15": "5ULaPZnixwx3bKq2ScJncHwnM1cBSHnCQdMQvYSj3JQiK7k5sQDz4KnQ44FMnyjLXDvW6CZcMCTt1CzU4MDFgQVj",
  "key16": "38XgL5s97T5Ze1qdnLzRwdURgyuSN6JwkeSL9h8ybxDszMButZXKUf5nDKkQeYcEkVvjPDhrsRcFHomc4LZL6XrH",
  "key17": "44gLy8mr9Z7Nv42vSLEmqHq3QQDSVgX8VWZxwge9UXJhz3gn6aW2fzQbmKsDEEPZvTnw5QxQzUsjPQomvCZ57BbE",
  "key18": "5uivxYLvtH2RvLFWC4upj4xHCTgd1vC8UDZ4ufrm1rW5NjgWmeDsDrBZPo2RXWBta8f1P8HU3ABpMAxTbCr3qQJr",
  "key19": "3yCiMYw2QzQLnuLrMdsJCvTGz2BiqZdvW77ozpruKm4dfWerzPdK68AsaqZxjvfhQDbPG4VLu4NZsAjz15Wfie7i",
  "key20": "5Q9xZAKaR6vaKyG6K52e7CMcDqyKaNBhUREAMP8Zf3E4XzRjacXg2CUiGfknXnQCBm97DPMDQTSMmiWNXCNHKd9N",
  "key21": "4213w6pzjQCZRs15EouyVmcskbbHnLN758a1ir3LyJT8u6BkzaeUvga1FfiB4aKLx7V59dNSErtD9VSxPCcmZCTT",
  "key22": "217iCQGFbfKJBDo1DXfJLVkpTAxymXGtf9aqYvanAJxykAxhtLKMTfWiJU4dKbS6ukqvMmR39sRstbYPT27y1yDC",
  "key23": "tgramFSJQ3S3bx1mso1qN8MzVtMRwU7HwN2LZwmtaHJeVVejvffimT95vcXc7aFfCCD1kGpmCoMWYivjND9NCwx",
  "key24": "Eeoe6HhBnqaRsrMkad29sJUCmVDqnjtePx7K6hA7s4Bebt9wEr28mS57YiKJ2rDPnBa8rZkLYtRLJfPnzid2Tyi",
  "key25": "4xzwDsDtAyvaLNqHHT8W7v4fDx6ELh1PJcBDAwWoFEX8aMLh2NMv86cSQznhYaGCq5Nqtuhf2Q7adVdnJtTPFSDY",
  "key26": "3D87yEwq1wdgLxBFNfCUHhgiyHgRtbHc1brsvFsPeHy93KV2QPtoHan3vKA2bfaPR2BLzJh13u5fFQ4psXMRYCb7",
  "key27": "5RvYcBtm42BgKZFPzptXaccQ7JDj5gE75BkdKM3uTWpTvUeE6KNuGJc5LAmL3UREJuRkf9ze1JJ7BLoKMVFqYR9N",
  "key28": "4E4joNtrtFnr36oCdHWPZMhiwj3ofvK6TrqPnu74HQc6e4JaS6xima1qfurUJ1EJMQA7zU8Q8FDBW3juGioNSknd",
  "key29": "43fFP2mLASPD6wACVfzSj1N9v5ETQU4gpRZN99tGpYjESd5UZQb16J1PLMdtQqhpZ8fb8EqxnPYkiccuCdKVKg77",
  "key30": "4yGrnNoWZrayr5UeHQ312xYA4TL1d2QLwFVjDWvs1WufDt8tCppLj9QsvJ8brfn89EVc4cqBkyufmMvH9iRrarmW",
  "key31": "5NVdJMoTUiM5cSrfuMX82J1pxujCCe9smjvu2nowjMTZQSdw6GMTYBbRzxn5YAKGFe4hJGb9V1VXWUKsDhjto2Hs",
  "key32": "4NZ3G4eaSSwwRHZH3gW73xJzmk1AokgZMSRRnximk7ePTxzWZPcXjC44iJeTjc1Q17WkXYZRbukEfoNF1DM8woB2",
  "key33": "2RDkp5TAS5JqGMNqvu7xpF3eHeyQRiJmKhV9rTgqxCDb6YySSoYY3sAjY3aZxhWdZ63PK2wEszBLsdJmhvtVKT79",
  "key34": "3iZqiic5YzEAb2bgDoLDD288Rgi6Mm2XznCUVTcGsFTzSNdv6pDyuK3Fqbz33RBoFy4hLZMic1SgZqc1doawqwva",
  "key35": "3S3YM4XNGeXhiuXSUS7va3e4ZJDg6iwLN6cqW8Xd1N5Jc2Ljf2CLZcz6MH2rmPs998q7AsEPoC85ECYCxY8NdiQ9",
  "key36": "5qFRFaZx1pxE2pr5Km6pihE72mRbEV7qhieLvFMudFhiMqANNw98URjiQECfRc3dzs4sfbesZAmZxJ5FmPYu2KFz",
  "key37": "5SxMbEYXjxQ8U7zW8uuRDBzgSFN1RYcXBB273mZZuWMZpQSC92UfhvYmvLjcEoyNVYN3Ugec3xYQG44x3k5xsMuH",
  "key38": "3bWc3zc39Js3jQp9CEcfFPdZn6k1aozk4f7sWW1YLFi9w3GyupGKBpUt4JtXvWBhctt86uAHkXAH8xsAWFfkedbz",
  "key39": "53ZiMHSKaFiRnhXoFobfEwfoJzA9uRsGXq6BHoz9MrS5az7rmgip6GuhAbHHgw7WD4pXGBxjhT4D9orV1ZQaguyj"
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
