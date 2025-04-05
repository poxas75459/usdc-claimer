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
    "2QjAnGMVj4uGdkRRwR1ihE9FrcBqnWAgSmNPJDNxLoAu1v3E19ZXM4SqaySYDV55ZXCH6bLvrV2xn9HEeKZdJnEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N2irBu5x2iVouywNJvZxZBSweZ2iKpBxFm44kYarQqWrps55arvzrRXBd98mcqfpXArxt7U7i3Wacky2KZfShwF",
  "key1": "3vgUMdbWK8BVcsbQZaKhPTgKEgKLJMoD3VmcD3RMufoxgLFhRsJxn3RDsz6g8gqoxYfVmjJynjqEH3dZoFW9HoYK",
  "key2": "5T7THnMxoPSYCRtwSbBGxvfhM1cDNkJZftuSRcBUV6MH9b6yFLAChDAQaQFczQ7SgALZF5XZ4nwihbuSPhpzHCv3",
  "key3": "2H4w7LCfmcM8r2QXC5Ux7bwRWDgReVndNnWcvScA1To4QaGefZiF6uAfAmrypoHkecaLtmT4T1TDJDQarGYAztnf",
  "key4": "5TPsFkfUm8C67NNz1vvaiyMfveW7NniY3dxJv9TqT5C5d6pdWNaLRpumFkurxLswhjJvHtkXUGYSLErhFwnfQ773",
  "key5": "2mo96gJaTaWr4PB7wshRZya5FY8XmpAXoeJA8LkLVkuXp2wy69WKzzTW8irqq1QZPF2dWSMrQ7vtwajRUtJyAbR6",
  "key6": "2Lk5s4itFgiRrSuPPGNa2F3NDg8rqiQs6CVVynYwRVLgdHPvji4koNaNsbVyn1FBVG9m97Uwoh8MUeGTdFYtbwF9",
  "key7": "4frwQc3SjCrxT9WLApRyJeyQ1wew9MQhBQxoWddP52am63SJKhUxaafvtVY4uWhuGEiFqFGHNqt2HvL93NzgFLHz",
  "key8": "5joUnvP4PS2gRqmW6zwjShmuN5yBspHuVzvQe9WLBHuV5tKRXpmMkPDp4vrrs4Urs7U27ahbgvczpAeexyKtCUnh",
  "key9": "V6vq3Gtk5gmQ4auCoqs4xWvb6sA4aRHNWCFq5ec99Xj2zBekZpJFDjqnrrmmuZoJKuVXQX3JsXkbmebStJ2E8WJ",
  "key10": "3YDyJM2p82p6mk4WjqsvbHp8WUQjjmLJj8XF1gDXuxsQ7w5MM8Tqe59qEKWMmTpVTogXeyhQcfCRPrkeFyRATr1J",
  "key11": "4TbCsuTwNE2WodLz3uhibB6QkD4mqetUL8stvFymy2n9Hhhchi1EiLmtBxqcmaNFzvwT86V4Sx4NCPc8iY3S6K8g",
  "key12": "5HnD5xByz3wycTbQHuHrQsnq5oZk8CFnq168Lgbahwd5jm6maG3Z7PYtoHH3emwJTewcBRureERkSQGZ444RoYvG",
  "key13": "q3yDZPKcVVcrCEAxb6PfHcQBjiQB1umG4owuZHsbRYzHNupAbgtUyztTyrHLCmKfVT3tsrPWNfsppWHeAM95qsz",
  "key14": "2ap6PyWh8PxyWXMfkiQoU66fyJNiknbfke1Sirax3bzJQX1MzdnbQpPkzSkDSwLUYMy8tMskKRjEyATLv3LCpX5m",
  "key15": "2UjWY4opD54Vbn4u2pyz1AtJAdRJ7UQYYvJDxEFvT17R8WcMeoCMAnyPFg8oAEgKnBDTSuHTgBPp6KXJVS73AoAm",
  "key16": "2ePTDu2kgRKaoP5ambETQoTZYMB4ssAsrQGqyXdGuQquWZNrEVvxNkjj99qeoMr2o8GF7QmmWY5yigSDUXm6YSRS",
  "key17": "GPCJs6kxja1SWdf9vhWFT8vVs1ui1bRsP3p4u7oY8Ux3pyRB1yoEZFKdUf8CEqpGYknD5mUkqxsMMKE6Nw8wiz7",
  "key18": "4t8RjRPSwAzsVJKHsJu3Y8xUR6HG8Q1k1MVz6BuzYv67zLXBy72LAMBpsyAxhAkoazF6V7LTkkGKkWs7VYfFjjyn",
  "key19": "2wiUV66PEo3qqtSjYjTWC55XmSsA3Avu5DbSU89nt7Gjue3x42i9nbUV2h2zkZXLgv4YkBDdyZn93oBAMKQvHfhS",
  "key20": "2AdkqDfK32sW2yiafXf5tMqYA6d2ZtYr2AcvBmF28KhirpWikB5ziiMQirJYiWmdbigtYubb3iGmDmtSXaMxfftq",
  "key21": "3coYyS5zsf19p9kqCqQfqx6RV7cJGJQDF7vYY7XBwyGSX6YtsdhQED2p95hJGpsh1KrtUxZDbUiT1hWX6dEgUEyr",
  "key22": "44fnzjYESSqXF5NyMkkyMYrYLebRLSmjABysRnKzDeqYa24d9tXAT5hKG8ZjjzPBxQDHSUhAifYK8ES2zV5hXaG1",
  "key23": "55TEaLZK8vN1LHPM9eJ3sncDqdFHRYtsKJCF4dyZdgin4bZ63C4xivPxqGDWnYEeaB241sLVnESTij6WYHm9vybi",
  "key24": "4eAFBMeV92Daf63zztv8eL9paykNuJGAbUv3qnmX8DteRwpN1WEg913yKEhg4H8UsdwkgjW9HivRmr7MF86b1Enx",
  "key25": "256Xi3vUy5xc4J1bNewW2EBtEaC9mWaP8eeAh7bwSsaY86NbZxiifFuKaX2xohuDMQtEX4GFb9Tjfg3phyKFyXBa",
  "key26": "3kw6fa7sJPvDFcpk7sWEtAzmUuhBmwdstVi58z6vhUNaEs8MggKZPRWyB5HDp7xojDwwjC4gEZZi95WdmRp16Jpy",
  "key27": "psU77dHWjjKHDDutBQPxcw13Kigz3j1bnrt2Ag3dqaZbykqTKR9BTwtrFT4XYdLhuSGoeZ4PZANzJbXHp5oFP3S",
  "key28": "2S42oRAduLEF6XKQcUH4KaEiyz6TCgyhA3KJvieJRbjsyGst9NHHm4Kpjs3h4nWe2RBLSbWty7ztVbKhnfeMRjYs",
  "key29": "4xom8EBFQAWSbBsfjPHfYJg7HKAus3QhQL146juwNpbky8vWpgE4hjGoBU9VJ1NZWp3JzJkNCf2jwhou9yrENyC9",
  "key30": "5DJEGUBjFfUTRbgwTU2ZV3ora5Q9wfraEKdUDooYtTXuR7ktAxYdSoKfM1H3W7JB59k8jFHB1LamYthhsHxfWs7",
  "key31": "4UihnYLhEWgm3edS9RKoxDkgnAPeiWQwS4fiWMx8h2bQRK3fUpFhoTkNCzEPJQNy1LJtLBx35rHb6GEUJrHFPm7G",
  "key32": "23F2YrYosnsQPEVPaEHdPXNPowKWpYZwS3SSNKMVHACqvVhyxEbwLbPYxCztaz2dp5hSTrpvRht2oiKtwSdHuaGN",
  "key33": "28eMLzNjw2wMguDyauvun2tMgBiKSdkXEUbAXtdF9cSBN2Eim1wA5N1CAGmEv8dXn1xiUHZT87vgSYBRmUcM2Eu4",
  "key34": "4ANYKuk4uoUjWogCZUeZhjEThwG6vZfhgbXwhrRA1bhEeCvnCX2svcJ4m8ruw8UPueNXkfsJZGKyupUuqkNCiFTn",
  "key35": "2xcJf4kq87GstXM84WGE4N7ucsse8eziAP9JxwzuZymkJPNddVJqg527bA8MCXUYpysgZPWykceiCyQMDx1GFTcR",
  "key36": "45odBmuqxwBCNJUVgUByzasrvtw5DsWKo5udJFaMRjP8oJg89twiLEC5KKyYr6G63AJVDUjPU1t99NFb6gWfGCc6",
  "key37": "4aeoAxVnwn2ggbAeQjviPbVcsbhiMfUXsVLVEixQXmcNcEuZYwPS6GhUSUtxNSGzr1kS9toPJPh6Ak2E1gfQEYRK",
  "key38": "62wjssZgAb4rsLeBbVy6tFSwRk7ybQNp6oD1QQFc1C1KcbKeXtURRtCU6hx68bgXHF1v7ivmJb1nRJo6JP4jL1zU",
  "key39": "5fuYCTApMdqtyDY4Cr5JzfbA5kz2S3FEHYCKur259p5dhi5Tx3nAKKYZs2b8X81HrcpaRhS1qsc4L2cCwmMgNErw",
  "key40": "3fxMd8hhaL2CHhf98hKf1PK1ivGXUgEFYmnTyX3sqRde4oLKxUP1uMS75smCskycbyyA5xhmNYa5sFccg5n8dv3w"
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
