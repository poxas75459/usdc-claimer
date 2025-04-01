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
    "3aCFgZm5xSbMm4EfHNU4PCH9McrffooXAp2yNBowtfMwEqYYDYetKrsR6BhMus7wwPxpzyLPV4QW9qCaEV8fYf3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ybJDapMNrUK5bP8kXmQr1aPLeg1MgzRkTP47smRkUxhNQsNPCySvEyruuMebp4yhdnQ6BydgW7caRsp9RvhNUvw",
  "key1": "4H4uXvEKzRsZJ4uDWwivpegxthvfNZ7HRbAk7F4Por9u6uRy9nmQWKQ3KFgfnTokgKNaew8dJEx7y8efENaVfaJ6",
  "key2": "4Q1YwBZFhJx37YvCcthG2WL1ZLT66sEZB7VRT9APJ8mmVKZmyUw97s1JjQ1JYZrpfUP7d7esvqdmAiUXBXxmy2Qg",
  "key3": "4fg2k8nisNhEQTZT76qdTLKsygUoFWRquDi6UgRPensE1sC3F3oUYM8W3KTRJkCRaBQoBvqrXxTtwMhsVWk1p2RK",
  "key4": "54KUfYrHqzEA4ncGQKCYMu1TVf7yz3qTdRUJLmhcixZxXjEhYBc23j48TxWqnVuFiGKq1gh2iMgMkHb54VVZcKVV",
  "key5": "2JEV3X2MzmiVcZLpbBf4Y4jfD6kEaczUkgnjPbzA5akfFRMURqEfBDt3DH5q79CxbAAMJtvLf3bP5a6YBSBX3JcN",
  "key6": "dMnfvckxEyt46PwebWctUtgaEMrDdwk7f7ynCCy1XhNjiNfmVNucrUbFRzZm9YE9Ycv8Rj7KPPMmsbdT8h6TbGx",
  "key7": "4Q7Y3d3f61fKdx6v5K5V2wYBzpCfjCr57FgZrgpQ13T8pgWarqvVvNCopnJaJu2YsdVWPeJaWUas1m5SG79SxyYu",
  "key8": "4RcKt6pKhKpiPxstTspg5ZD6eK16qZeDmp6BWXG9zdVAVFz3a9P6NgK3dVBMTecT4vb2LCnjNfssXuzZJAneKdps",
  "key9": "2KQMk3LYCsq1qgcvgUzQesU77GWmXCrDMezKm2KSNWfUrpFm5jfisQ4xy9cLZ1MH452fBr6JfFQ9KPqGKhMG7otU",
  "key10": "4drDEyyfuWn8Yo5ocEukzesJTiTHSxBMLNv7kNK87BSEgwKimJadJ1jSaTFA7uJ8XYoX9VBknox6jpzS4mbGE4WT",
  "key11": "3TsmwA8eCajAHLhZmhFzVzQ3W29MZ4Mn5176REvrjjZ7QsYR5GSxd31kLPcCJ42rhPPPq92VnEM6FfKo1sneKovZ",
  "key12": "5k6Z3nT8XhP4b389n1WEswYdQRUwfXYGv7UST9noCDrdZpRoJvRXrfzCGFJmbp646pQ4hwFE1ZVovHEKwXHR1saw",
  "key13": "25zYNEsLYykXvqqhDpUiWYWgthsYwgirqgNz4uBHjxUpKmxcegV5r2wMXwRNtwxt2VeQWFgPxgdCwVDBPDbXiDwh",
  "key14": "9wuyJZsGaH8gAmwi5w3xqDFzJqtwgm6ovzf5SysFU2UR7VSjkFAmpAN71EPc5Fb97FMasiddZHCXE7qnSnPQedu",
  "key15": "4Tox25cHJUMFZPcw1JSrPyrmnBaJf9EfBCvPSvNDAsvwDUmMddmFQJPV4Bc5MKrF3KDZdrDPVapqqxSGoR46R51e",
  "key16": "J6tLyLVu3kgMhYxT1UUcCm2tLZBZEDJGmSZ6ZsEvF4PWLBgLgnw5YGTvxMnfXm1TVebspek27bMd3k3TEHj2sd3",
  "key17": "45rYb74PWRAZ3QnNNrnQoAE799vkGCyxBe13DKWww2nKRrBNAHMQbJru7pUEvicV8MBAKG7ULpTWzws21dPMw9im",
  "key18": "4rQRPWpaHNLNW9rag96JihxBKHjdYWfMjeBgkQa27EdMeEr7avjZCLos7GcM2KgouPRWSU2fk6156QitAgciubMS",
  "key19": "3NQZpfYySgaywDi5phYfMuW7QbumUgJMyuA9KgiWtZRLR5eUkXGD65D69p274a1zngucRTLvRHVMCaJoA85mX1Q5",
  "key20": "62nJA9MXheeDRhCwoFUk5akPjcx5q44ktH5YfAp2D4uNnRULqjK6fwTeBnbwKayiHdH1LQE4gNYfzdpjM9KFvgfv",
  "key21": "3V9JdZ6v14GRs1p24GGGacaTsiTLZqGWpFUrjfgpJGHqyc1jvJ8zSriX8hUymehZUpfE6Qo9FxQVHrYEwrRyebfV",
  "key22": "646gEg2VRPo7r5DKws2h6oWactehuTvWrN9zPDXsL5JMh6BanehMKafmt2c1J6f2LXiCaV4GxzF8o4i3CRuaWzcV",
  "key23": "EA2GvmXXnCYek54UAE58VQYJdmwYtVEMQ4iP5QKfWe14BUCoazBrRaEnSFhgg5v8hugY1ARx1PFAnBfxYnLUJsy",
  "key24": "VqquT55dRu94AVonSpNreNfwWa6RVStyEW4trb8FsD38pNnR2JYi5TETRbJBpsNpciHREm44Z5WJkYy9DuABZZa",
  "key25": "5MwTpbiaAJadpG2FgnFuwPxxJRhQQ6JGXs1TxS4ngGKJJ8cTLHPiwhS5V8zH5fpjuKxCbA98dbjnFDCKJ8fLZcGp",
  "key26": "5VQqP5U8A9D5YgSYhXukvXou1Y13TfQ9UayyujVjFG4bb8kFGqiNwYcsJVcnxhEjW9fxLT4yeoSQJ8UJM8iJQ9Jt",
  "key27": "23CfCzBgSkSYifqdJbVrs4fD52RMLHRaaQsi7MN2hNMA29E8Y8UntTc2J2Yv3rGJ2f2U44zXvC7fCB12GTPcGwL3",
  "key28": "3DFxY1ekeGDMEP4xAfDEbL4p6hvVUtLSJQ8Day5KDuG42TQDUwjkr6JcKuWHRQrSvcgCVGFy1qZysVvYCFJFayqz",
  "key29": "38JQkRbbndNfHTw8a4LkTzEo59c9jVkZi1hgA4SCaoYsAXhqJTJY4wtqcJSo6jZ6bfrCHH3mYK3476Y4Ez5D2fmV",
  "key30": "55wc8eiqH59LWaa3PZHByVSSMxVXxyv88pJsFiJh5vgcjukX1kFj9aK55dEeXjmtYho7sAmpHjJLeTyq2UiHSTDL",
  "key31": "4rJz3QUrstfPv7hY2GTVBFD2wqhYWZDSj3vhYu2bkVop2TWLVYUMtvbtyCcAxqqV3S4fzXiH5cMC5ZUAY6WK2uiY",
  "key32": "dVi5gqUvnXFdMGzn8VuiFFEpjADVhyGVxfUpGnhsraBiXYVFWHzwGXT8zcLPGTS2ErcourufUrViYusP4Swmp5H",
  "key33": "2UCLaTrMqZyzMhMy45L8mXyqARWu4fFYyB8Vmg3GtxLtLs3wYJeWLf9DCUA18eiYKFtTLUw2e3aZGarekakBT1Ab",
  "key34": "5tHE5mgNZNtFMAd8xKeTgdvfa1xuLDhujG2LToPWFwcEVJxt93wrLc1Dp6aLaSuABZRaCQyxooLwhaVk2e22ygPd",
  "key35": "2izDEiHra17rEjRnq3vnGwV8sZZAs4Tphb5fLbVnY1ZmGpUqHV7zHMNnJyKkexjoky6gVRrFCHhmLfQks6HM5bQD",
  "key36": "29fxyAWSJFw9TG2AGgtdkb91Svsa4HudEFyPJEFD8HvvTEqMVJ5SvyRUUo5kr1Y4yLkMve8W2ZEYyTJ3ZY25rJSu",
  "key37": "3o4m6Zik4wRGsFx5ocMohsb8TQcAubGDErNxdjcywZbAwoUfhgNYGXuvAvkaFXnrjS7aDtNLyKAVc87YqhHpuXnv",
  "key38": "ZCTVfM6abBVHK9mfofMhKZ11XxYbxJStSccSVihmCae8iqLSCC8m3hijwLdtEQxjiQhrVSaBqEip4gFaPaiuZZw"
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
