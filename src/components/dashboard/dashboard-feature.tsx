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
    "4KmmrB2iyYBB2wTPTFiUSXXMuRZCBrEzWEJiBSasYHSRWKUW3N869SopeLxxAwbVkwtqyRkkVk4P7bL8Bx24afy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UwBm1v4cYBJjnuWg2C6yTrXHAFt2i8CwY5xgu4HBvaGGAKoPzEVvtvsZyh6z4hHp18PnfZEXpieC8bbR4DZh45a",
  "key1": "29xHuyRsDScrpJmDTDKdMc8xjvSGsjotuTWqzGuijjs54h9QwixCd9eaguDrWqTpbyJuPh3WqYCQHNvzgVHiAwVS",
  "key2": "3BbecUifYLYHSqmBhWSH2x1J6eabWCu1mB7cMDj4CmVD6FkXAWzkccPhBe2KerkS1b4NPmKLnSWA4X9s8T4258d5",
  "key3": "3Ma7w1Ms52wg1D95ec8oPF4gpvHvug7Am7qeMDyjD3JgVtUBHaX8yq1vH86Tcuo96Y2csWcVf9c7eSGChL8mW5Q7",
  "key4": "2ckYNthz2V1Zicea1vKEu3m2uX9tLjZkefPsao2gEG95SKs6VQbTuFn2PWkgxXJ6zopLMJgF7dY38HQqXFCNzbbb",
  "key5": "5MbCPLz59UP6M2BycQWRyte1QZVP6BFtzopvpbDeQsvAHDdwnrH2A94bLTuSgETRohQKwBEr5pFyQvNpPbzHYXqJ",
  "key6": "5oHFePooopUWt87qrUpStG61pmrVQZz19vDEZFSBDPC4AzvTQHr51Jkafe7RPcQEG3g5mJBkx74nyRe9U9cNMEDG",
  "key7": "4h1ps1xVLSZAHvrxoEyNj34PgYcjM1UoDA8S6Zo1kKJzifgFkKRwZtTLuZLPGh1sAH2WyP4JjNQ4jCFy8C7YgLKm",
  "key8": "5qNu7qnUAxRgV5LCasotxcQPKt5UPkYejjz1LP5BS3oFXCQb7p3egT7peS7LL8WLWEAPrZzTq43oNvm9VUdeueej",
  "key9": "BjfNCkEwbBM1XUEKgFinzLytQ47R4dMMLEUFoPvg8hmSJutkKV1MiFPv8xN86V64N18VPvnTQBQdhNc91URfX3U",
  "key10": "4zyKeXQTyxtd9YrrJfdv7aodVVXQEBYiDJxeuGDvqFfH8srMc78zHQdghViPBGnqPYm3zy4fj8USBfWaoa2QLvoP",
  "key11": "5jVQiqr9aPCkeEF7eYeepx3WdmVvGRkccDAAk3mWcELtpZzg9332L2qqUvyzzKEWH1fSeiLbDnhqvQd4TZM3FWtZ",
  "key12": "33LxcWNwB81iBu2h1riid1DPGbFX3YMgfoB5FwUD5Pv2tcCtjhhHS47Uax7NzTWRvG9xXoRzNaBVPEJpTaGe4FZr",
  "key13": "5C1xnnanxfLTfR1UBfj7oFSaDZEjC75jwKAMgjRu25792QWgcgfoKQkYmHUGQ77jc5bwsbZFAmSXohpWS38e4zEz",
  "key14": "ram58oqZj4SoH32sEQHfqTW5qBWzhwuUWcZ1QTiurk2kcd4co6DkoTH9QQiMmPKTEF1nSJL7s96zbhw9UsquuGK",
  "key15": "qaWHyXxVKNbrVAUdg8EC5Fscude1BpszWmBLbHztFsEvEGTj6szv4vFz6AEba38pgqbemty5H58Cmx7CWXtSV8y",
  "key16": "218fvCfvvu1zbgabSoTxkGd8T1ZK35jTZfFadVYvZTQtLjB55GADcGWtwiu4ADTJ1So8F73eJu6kHARiB6ajsUPR",
  "key17": "3RTmgbVY9gbsSdPUBZCgHQEJ91LozwdFKBtyv8qk1mp578UzrYoCUpnnyAgFAxymVnS8eFvR5bHJFNuJjzccMsJM",
  "key18": "3v8NMMxARzhFfzDwmj86WRuGCfKnG2UGTc2vgEbEXTAXYrhAaHu53Vw53xpvbNYNwK1sLXtDtLYoTeFzQbKLoc5L",
  "key19": "46rouzvWMLP7eU6NGpT9pYE8Nf3ujwS2DzJhvGfpytGsAAoLuw2EBo1jpLnKxrp8pBibaDgAQ3175v3mTsWEanQd",
  "key20": "61EtP5jPo9shXJjozpsuMoD944ArSNWf2Lh3FwL1GLL3q3bsat4kqiZ5996LBfw91s9p55vyQufMdnMZHw7VoZgi",
  "key21": "21n2RYii3tapzeaPUjZXrqSUtUcmh3wFLPT2S3dAEbtifsPWvm1FcbQMVjXGVTQfiEcSnkw5xBj4U43txn42YSzz",
  "key22": "4kX7ugRweJNdSCQtpqwPbNPsrZQ9nfXrZux5uMNgYtX9kt9ykoTAb3rRRMRL1KnFEfKptbYQr2is3L9t4LHvTEC",
  "key23": "LTyWucQ3tKPVZbrugsqJBaguN9mLUyvUwMyDYLCiJhksUhESWbZusGDJfPBThH2YgQCPSwSgALB2ocSyBemp5KC",
  "key24": "2ScGyhhoibfHC15JBg9Qkc2Jt7TaAmANDBezkvRS8vXk2ZQCtofYQn4BAVyf1N2QLbqSGF7RnD4y84ExN9Pq4tRm",
  "key25": "44yuyCWETUQUMgU9vsitCDUp9vudXVcmhdg8bwBPeoePrggkdPiXPjrUSwTd2A8MnsKQxjcLZaMG9eb2Y7GnbaBt",
  "key26": "dEaBTujX39TwfiSyF42gGvW4y4G1WqUoxZshpbyTJeht4fFyWPHuvgoiU6BiYfChhU1XvNeYwyzyz2aqLjfXA4j",
  "key27": "c11F6yUas6R3mt8NEfq7Y5XaLbziyBW3XUmDUZPcWjaJ1ohvare8G949r7WE9HWzdKRmkq6MocPsDyH3jZY8WLi",
  "key28": "oSmTVNxwndeaPfZcru5Tx453fsGgnqeY8XTB9kqjjiCihLsohNoe5mts5FYnFhE5awDz2D6pZrpeww6x7VxrCP9",
  "key29": "5deJcME6WYuJTp6BA7UUT6wf8dKJgEHvUDhbH8uAThTXoSwUhK8D7DseC4osHGDBAG1bstNw3sgUScn8CWtXxgup",
  "key30": "3TQGGNmwoL7mcPEiCMDH3ASfYxHKaUuyWryVwH1LiBAVkPZbNvFJC1uz2myQSFviZZEoMH9Se7uHYN8b9o8nNyiY",
  "key31": "5yVCgYGAHce6qnEKjSNXtt1LX7w4sxb8zyT9b8xXy2ufFdVtH2ova6ionVYYuBvv7yYtMYJPQrKtd7JK9MguMqSy",
  "key32": "3CVde37ze71KdsNeLT7qZT1XKmtByvVJiGPmzwyQZwqdfbPLRqPdr1hAcD3yS7qdS46qvcmL6m9Yg3crUuNQJ68N",
  "key33": "3BwEVJ8gAQJKtKJxT1HqRWpeao3M822u2ypAK1a4ZKUByHMnNVgkU6CjF3jjrrucaobZHKFQ37TwqJvc3HsSDvfi",
  "key34": "2ufSjGgQypxJnW7D71eKnwYYQaoRsEG8NLnznD6BJua6brrzcn2exyMrBLYTJT6FxaQLoQNaJxyMSXYxwzEUJSnD"
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
