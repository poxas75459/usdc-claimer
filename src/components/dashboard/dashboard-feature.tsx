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
    "okpRCC6QkWy3r4BiT1bxDRuNeLWfW91vDNBKdKG7wQmP59gH8iqrnWSzVdoE4yputyqVZeMDRHMwdbyVsCgu6G3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2epj221yRo1AvhVEikVyLLaiiCL9UpJU7GevmKbKyUA3NQTr2Q6rkmFMigU5PDW4ZEpUUANgMzzzFy75d6bEqmYz",
  "key1": "2LF94QWDpuCCjMbupxU9r23iczzYXAHAxK23pxk14NrQ8Zu7kc2PNGuy2UaFVoCWhaxdv2P8DpnZvXc6Su9mNHcF",
  "key2": "4sKHSwvNwFmJrRYg1Gz2RX5RFw7pBhptaJAVNrw5KHFNQNYXpY8UVWKdenkVb97GTmTDWgyAmbXRx1McgQoxcLie",
  "key3": "ZnbhRyXMZfggwMyRKco4tMsgBrrxmdVnRcXUjQhNdESVuaWrB9tAhwgYpioPwqaBbozqVzBjNctwbq5ac4vTcPF",
  "key4": "ET6tXnv1ERqTouhXgZaQbbnUFWnFYccLPZ3mFCYPw86Qv6NyogijGkEFnrrD2r8K8P5HpHSbyKcFXBvxaZYk14t",
  "key5": "5Q5m7EgNtR1i75YCPJFXN4AEfhT8zH4rsAmw3kMaLEDrP8cuFmcDEQBwKTK8YBVNaX3giQunRMC3k2QJAUYofmEw",
  "key6": "3MUsPZk5p2hMZHCmWtqZg7qGfKpzmBrfDUWgHMSkpnoZam2K2ZkjerCwzud8ojnKHstQw1Xm6dVvRZnzCd7iuGjv",
  "key7": "3WQkUHoKUhptDe3sGxQumJq8x6MXqezq3ZKFoucgCoMRYkVhN8mxdiD92jqbtyJoGcDeC1zWhi7UAZBRS8WfA2tx",
  "key8": "3kixLnzeriudtPZW9P3T3Jr3Ukzein6DN4i9XNg99QaAgzNB22v5VGrxo8ZTxiN5h1oMLLXpQP3ZTUXzJg1F8KgD",
  "key9": "2rVQRjcg2GeRipxzFnQkX6PCDeK8xcxBMt6tuWYK9LCqyUdSRieB7wNkXjTpW6CGVn6vMZDUXSwKVrWBWbK2c6QU",
  "key10": "3yAWhbqBLD4BcUgvUiGWueaWgyJMXEsrVNNE7qYtFERQsBzEY7ZQSCVTc92NCuJNsF5ozQA5uivZyASptj5wN8YJ",
  "key11": "2yqskaxGQNCxLzNBJ3EJxjWA3ZZcYWjEgdLq9zzUiGRX3GyH7uZGAkdgHN6PLW5qFijb3ryXTaVWg4fVesLQytpZ",
  "key12": "5r8KkxMWFLuTN8etHUX93GqEUgFzv5uUHWCQ41t96yTsnKuYCFGfPt4S3NakSKR61PSe7PGKaxtSasib8zBnN6Sd",
  "key13": "27FbDEymxZ7YG1amFPZP3V9nGUYsAM5PFLkNqD5PCTrcAL9AMuBBo8AhiSfDgmMdfdhsZQrzBY5XBxLrSKWWm95X",
  "key14": "sKBcna3bKs8Qyco5TjHhrLPbWxX2gR9Jncv7e8XQfoLgsmvHz22dmnR66vfBgbJkoMwumgzACsQkCi2x9Pbvsfg",
  "key15": "4dVHG2vhku8CadsdXeQj4CQiyJPvBjT4NVazQa68Dwf4hSLgTaYhK3SUv6iCPPkGcZkMd88iqRijcvWpAb147z8W",
  "key16": "3gNHPsrAFkSsfMsETzvR5fHxLn6Cc4TNJ4W8wtndK4Lkd7U9NBW1znUvWjsvFswgF6vPfpGAdxnhYBc16SHCW2SG",
  "key17": "4CPUbqftDHffF7ykKeybgSoiAQVeARGgKE36ZZAKfScA5aNfhUsxEAc2g2WKhsCGX4pNcJrosGc5SCfvQX8S78y4",
  "key18": "5ZhQ6yoU5dfGz6phHQTNzumtLgbASnT8kLaXVE5ACswqCQxDgRSyx4pWKEaTDmuxR4gWcDgSnFn5G5um4HerLSdQ",
  "key19": "2m4LcUprrx9Bh8DdesJwywC3xUg114yFTyFfHqsEvgdE5Pkv21yh1VfywCJ7cvbdeTnVhGWuXyJAF661v2nzbA6L",
  "key20": "524HKVhhyaCFwVDNALmPXokXkpKyp33kt9BEpGAmboaTBMs4PmKTNJoh14z2HLKmioCpcGXtiwB4vEMXtagKv1En",
  "key21": "2U8Xxueau1to3Ra8fQsPKdkNQ5B1xVfjKDVA4jvmPVf5rgBAWRejxXst71TRpfj225fRqo8jAySBEnW7ARJPsn1G",
  "key22": "5JbVztLhLKwJHgXev4Ahrx9EuGWgdT2PXEMZsgJH6tyB5heN3bmU86WxCmpbkFTaCxxFdtgBAA4mgzBTxmwYNLS9",
  "key23": "2nisZr9qbnuXm1tk9S7rBnzxQNU3Cx34cHoGETDXsty5BAmcXFvBPRny73Mq7V7hu7cYVgTcUEtcZFk8Y7mxxoEq",
  "key24": "6TPjAMJcUEsG1QqJHQvSqM18ndW4QwuJq15HM3aJ1WQDQgUak1pi6162hitoT7vLDu8jLx4r9tFVbqxp73UM8vQ",
  "key25": "5Rcn3DQta61W6wnBcJbJcFGGVCJ19tLbPKQSPgRJXByHBuzjvjB7LQiYFTUuX2n77j1ErYC2EeAKX49nt4FkZRG1",
  "key26": "4qHsidcaYef4GRE8hwgB1iaDieWGEifTanVK5wkJMU1V12RHxNBZtHV8TStLLRwedhXvafjYmjoyBnWr1DLAAkt1",
  "key27": "B84ZPUYfCWqJgR7uo4LnTyupqeiNDE16gMqHYdQrydWwC4didfTN2aA6e6ps6hf8FznANN8kbeNEXfSVkTASeQL",
  "key28": "23YyWQtrSq4FeocnotLkJ8mtR8atrcsHYJmo83HK6Nc9NxFtvR9ykcaGov6cnsGdSMTVo3GUvyZnbuPsd5TzdXRU",
  "key29": "4Vt1xmGtq27YJnVb2yLDKgEQphLgsyct3hEkrBTwZJCpLQxyJgicDQQg4jkyRn2Y1GUQkHMYjdVULy1wGjeTxKME",
  "key30": "45A4AaCRy4aB2wBfJxXWZVcK4MNHd3CGLHYj1tcVw7ypnR3gyWMivA816jL85W2MyTfPty6mJnPheZh7QBczU8jX",
  "key31": "42GkZFXVgAvZHtp6GX56GZDTS3Ttw6Ywu9mzPoaChcqK5GyRnGY9Z1TgeTSpYqhzBRC781xzs1XvuXiKJxTxF52g",
  "key32": "52K8999S1PdWY1r6q7SYKzwqk93FoBV3kMaPgvTqETDyqKLHMSjVVbNz2uuTz2cJ6oj6kLkRjJ1bgd8nAa8hHqbr",
  "key33": "3oRyPhZefU68M7aDmVyPmZakJhwy8AZnYMxUWLam1GMXeuzHenSnaGWJQXCQhDcxYEq1vbrkG7vu5cVqhBRe53RZ",
  "key34": "4mJmCtfGC9mxGWvovn7xGxu9HKvhoA1QeVGDYMP1o5XigT4Xi86dAaBTMDnUtha7BcwnE6B4B28GZQ8En4X2e4KW",
  "key35": "2KwpY6YgLBnifoWQumW86Rtz5SwNpPeatX7F7aC47FmFpbFnbgbz89tcGEzTpLhNPDigBXdNtziajH7RcEoj8Pfe",
  "key36": "3pdn6oZao4HcWEZMVpquwvLXuC1FUMG3BhG3TviTVHXtJcRYxXJFdYdNZ7XYNCyNcZngcMqLULQdN7BWhLGhDEQq",
  "key37": "5xJ5ny6ox5WmDJMQLJVEAZKS6CZtaD9bXKcxhPRj3GPXu9cmjsQutd3gM9ammfD4Nt5skp2NyaLwFviHco5eMTAM",
  "key38": "5PgXHo3t9VUsCwNDVsv4q16yZJwovvcomLDrsXMyNb2BRFukgpVoMF21KCXfL5NLvzryP1eWY4p658eza2wP73rY",
  "key39": "4frjcVumdbcq1t54bowytSzXEjvEHkZXEx91mFAJWLBviA1LhBsM7t34PSKJv5TFZnAm3AjFwX2G91AdP8YfaMq8",
  "key40": "3ypvHiyLJUFhrRBzP5yzAAs9fmLUGb8Bkccyatb9TgzdUQQu1L4NGw3GGV9nEdmc6wFUAoVauEsDN6somUkC6q2D",
  "key41": "4bCdWKXiy9t6ykVdAsJqg5yhYjy26GC6RHmcQ4j8ppKDffJRssKCm6gJKwFysqBqiKdmdT2hcdY4bRQ5u9g9uMZX",
  "key42": "24rGMgxpQoZCrMGqBNLuk7hpo3SyrNskuG4KY7eEk1QDdKBJoF5uVLsWfUnXnMvySoMVSLYCJZFembQRc4ZVsqaw"
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
