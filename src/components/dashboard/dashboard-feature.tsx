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
    "56L2D8s13AwXkWZPXfa8vhPk12JMr5MwF6U7uy374KqGiVMc4kHdako5xNAiyQWXLfR9UfwVQ9zQnXg49QbUESBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ev5KPZzA4MjAobtEDAC1K3g2UTePQrMPz4AwgBEb7BizvaJbKdsZjWSeBN5Ng5S6SCGKb8Axxby27AVuwjXDahm",
  "key1": "2WVraVdxtjYUXXvdGxXzgEem7ZYhAibvYgXGJWBcgqurZXpo2ad9rGB5pdmJTrzUQUvxu5k3UZjCyKSH5dq7ysqq",
  "key2": "2rWj5fKGpWhhnnQYqJZcqefssHm3UGzrgLRzLf5QcsW5rMWwpBeFybScew9xKN3pc6dRGwki4GDT8zdZfh9Mmy9c",
  "key3": "4FsJFDrEnDAPfkpUATWQUH9sufPi3ojnTEP9RCy3FM85WsyHyffWZPAum3nz5FLKzvKz1ZWZYKue9cEREfSgeQKN",
  "key4": "4Akr8tyTGYxTBZRBQFGySjg491oLEk544Fe5t4xVgXZCaY2sDeBwtFqHjtr77i6JrFgUgMuHYVQXn2oeikgAxYd1",
  "key5": "4LVewNAz3y8QuspTYk4Zxcbdmm8cgMTt6CkKpyBfHcNbanhRkZrkDcXDxEXPyQ4M1BG9XkTJ5zJMrAWYFKGmmbFW",
  "key6": "47tUM1trYGMWcA2uU2apV7hNrV7VxBva2viDD6KuvoV5JtTbUbdJB9dRWpBmeE2TYk4NQHtdwvyVq1HNEsdvj1ft",
  "key7": "2unizy5sy6uEVp1jLDVEDHKKXNWGtuMN798cZGqoCg5LBWiXy9TLMLVvUZwmuwzBPrVfdVTJuh6rUvsCEu7ykhiU",
  "key8": "5ekssHBwJZDA4BB4wxQJ7jtA9KtATfgCNxnyS3bNcdZNi8RzZkoaLP8PfKgC76fk4pita3kB6tWGYAWSZxLUz8ah",
  "key9": "29qEYs1DdBr1MSLyta4JcAwekWywHda6Jh9bFXWMwe9DEiULfEyTuMMxoQLyGCJeriLb2Z5ywsBPoNxPvVXpK8Ka",
  "key10": "4GjeEEBH4urD2jhmE4cBKE2jhxu3sHgN1emtAgzNVPdvqCfh46DQP446sTgDUzuReDhu7ALxrbUXVaHQ9BUFFEor",
  "key11": "44BRmZGBYs4AHfp5nPLu2YEc2GBrjXP9eguQHZmKmCCsAyPBjpcUjwGpwnWztQ8QxFYAjLFgbgSpH9yK26UT15eH",
  "key12": "5j6Wqy1RhrG78rjFAX7uJzf1zzjop7nsbb9XrhqZPacLJYyymnUwSaJcbMQokGDWFbX7NFs4ntDVwK1EBzjL2xdm",
  "key13": "2rRWGAEZieJCEd22EeUqLsjS9rDjCoGfiZEoPsu3YmpSpwdwm5fnWWV4wfYaJfZUSoWB56QyCbWBvgTdmMNMn4ty",
  "key14": "GDv8VbFv3vohx7VwNcShYVuTosFQnYVYD4chmHb5qmgsn6Lr1DjbmAV4SPuruJwbpnLVTGKowNeirDpSQu1t5bQ",
  "key15": "bG962wu2yiv7o1EVFVJoyGaPbzQwbxQ7VTuaPZ3qeTkuxn63riv7a7cm2HY8RaV3GzHhhyk1dy77EnibJqikbah",
  "key16": "2F8QCys9eJKFAZPgj2B8nuT71NaNDCBcdXeeSt38N8mBQx9AtBmgxCiji24wrG2GMSVWtcVZShRqo36AJ5vFx6Qs",
  "key17": "2XiySh7Lur1gF5VdqqUpBVifg84xfbasU13xDiusoLiWThvKJNqGrs4aELSadojPaudrQoh3x6k8RBG1rhJepV5z",
  "key18": "21JmYUiTg3coNteSUrYxfkhcfQHkcsgfxAHKk9Cdzhf28dUK3wBQG15CRxoyQBYKRtFRCyqtcxP8mEewHm1MYhgH",
  "key19": "pyVgi6U5fmSXnn2vpxxaTsSpP8YhNiUdryoWagJTPVPfYbLZ5aZGAwk9GED8ucGVNJq8Rk8emCnF4ykGrv5VHNu",
  "key20": "26P5vFrm5p1kpBZXABAvqZNyUhXpKvj8WYwwb4z364Mtyir2s1Csn7efUDDdK8ZfhQ3oM7nkpL5eN3DLLhefvCiS",
  "key21": "wKbfX1mipMVTq4JT8oLfwL4SHtYkmxvGmzHNHjj1Hqw3imMb9cSbUJB6vtdVe5uNXgbsMJ1Lty3n45pgE9EMvhc",
  "key22": "3tTNqM2s1U6YjH5oeW4v6dDWeaxkVxm52e5ouxtM4uzEnnToogxt1y3XXZJzkSkgAQZ3CoJuBqrKxK1gvyg7S1UQ",
  "key23": "4PUm4vQMTQEtZudHzM6gn33phF3ieBEHK3iR9J1o5f81EJViPcuXSrbEgp59LS4bkFXayu4QJDmTFEqJKBL71hwt",
  "key24": "43prMXAZsUpqat7byZFvAVMnzne3z8XwQBYaShr75Ac52hkjT77aS8Nm1asxqGPEgMUhc5d1FdFhkupNh9HikNrW",
  "key25": "WmWHfAHTmndx6nA9QSYwFNrDFJFKA1GcngSkS49er59GD31SeANr2Jv5TCEai4ZAACXnHBT4FrYjKHkkCHpMpj4",
  "key26": "3y8sifx4VjMGdh7Ka3DUquYgcxEnQ41a645fbpuxCUudwQzLo3CYdav3hZCNAh5yDGFEc9S66G4HCz8KnFWGN1iT",
  "key27": "4mFPuFVvYSAsDqAhaf7aYDFYTJzbJG6fE2ZPZGeUa32hW9KuFvqUTSYtswCHijYyr8vPsvPScA4kj6gyRYiE2fx6",
  "key28": "psVJNQv15bDs3vKgkfFysM55o6e9hbdDCozAVM1K7KYVbFniwmLvSoouRQD3SPvpYqWJuSajdeSvb9WSqhjawpt",
  "key29": "26cznL55W2XkUjbnU2K239ReJ8wcyHCfBfmGm6mguGGBAkoFEmP3CM59JkiT1abBAGfCw75iy5SQ6ZqvcdMkk33T",
  "key30": "GFQRmPxzXURFmJSJPFDguX1Mz42ipwnfZkakou46pU4d7qi3NmV8A3uW5pwMSk5ccPgZcgt7EAT7rfZdknzN6qR",
  "key31": "552d8Q2qYkHqmu3yPQHiShgr7WhP7XhDSsqyC58imjaTFh1i4NnoxS27FDADh3n2jqPXq7ubEe1wSS118y4eSPRs",
  "key32": "4DuwEoYrGJWkSAaVaXKW9qP8asjrqktZZFn6LAyCD2FDq56qypeCokuJt35BgoQriES4ResJkJau7KzsY7rAAYbC",
  "key33": "47qjgGi7mzibSqeSJDs6yupLgbCVYzgzYQA4F55Pbwp1KtrX2AneVs9xgBs73jegVwhWEiQQyMUZY6pKkThVYb4N",
  "key34": "5zuXGMFiDpQtbxvxarbmgzNQjhv98Eb9r389y89tD6TxNPGGS6NnWUGjFfj469LVEMbE97NPRbXSEtPvG1k8dgvN",
  "key35": "xZzJCiWkxUZcA5LhZ8J54EcE8Vn4H7tfaeVAN6Fx8Tto1oAiPxjsJ72793Cg9BRUbBBxKRuwABfKizKXrWJ3T6o",
  "key36": "2VBvaDkH8kyMbuFhfjXGJqgAHrxpi5h9SmCBbDSt8adRa56Cb7Q8XB9Xgbxo3BeSSwVovLkQcLa3ubFJu4cW9wb8",
  "key37": "3Z4fLvcP5ANde7KZpoBG3aeU3yT5ZjVBdVG6NQQfc7cCxanqy9aN4R6JcbRMN37uQiGofShpsMMkRDFmHg1guR9L",
  "key38": "X5DyByqVVQNytVTEbk99F4e4TvFBuYGjXGwHZDJaxAPhWy3kmi139QRWTQgETvat9tWMkp4Anzm1QnBQw54iFXy",
  "key39": "4HdBkCVmPX9Q9zvZAhf9SM5V4WwkvTsnPyv9PpyUPnJqTkk4ggSnyKyipYCzAiVQyUnUKRAmZ49sjCLvi9y5Wbbt",
  "key40": "4kCeb2fYdMk7yffbJW9fTmXf4aQgouEmZJUFE29roETfiMicxeHE9VrxGPB8F2hV9wsA1jiC5KpfnTyxM6CLrXpY",
  "key41": "5tgZLySJe4cXqLaf6bfWjJGYxNpGNmnP359WUs6nZRgLn4zHqDG27NNjkjNsokjpvVTniAtgYwJ3qqU3Ecsh2Xn9",
  "key42": "5Pncbp7ag7Rj43e77GnLSntu87b4NbYzNUohCmdM8C8yniKgMFGVGFatNUMryiVWZPE7azvkbsG4dKycAD8ht1fn",
  "key43": "4fBA1gzGbDaXnNVVuUC74obra4nZKTaGzR4m4kFukopcPN2iSrFK4Zmxcs2YxpZSRGuyf9BHoKKWouXwwdMC16bw",
  "key44": "2tWywoEj4LDPYKpaCfJU49416Xw4xiXYh3WhS3FGLpTdybQQMXZWT5vmJ5jwsDfre6jNxPvaW4BnpeJXdgTDKhjx",
  "key45": "2M86jytzXr8uAqJbHcsRQvHiMGx4mDki66WKyoN7Uc9acySAtT1JEHaio8qBsNMiwPq7PzmGaHk9kENgyzq6SB8J",
  "key46": "5NRe7D9gN2HAYF6yNc1RSzcYHYUCocg85NXdK1eAnjYvoGYma8cKJyDLe8GfNpx5Ea9EkchdFZJAsvBtqa8BdP2p",
  "key47": "2LygCGvdp8JYUbVZ7u8JnBbusnYaPqzCvSetYwbFhQoKRnL2tDMreD4EYVBAiy6QwuEcZcrhXS3LwLMwhCZKCm49",
  "key48": "4hDiUaSmcUxeLPPZ7zGN84T3E9MeGFz7bHK9dEQsLYkExSkTHjJiiXSramVU4xZDfcFcEAznsB99X4imB2VRtpDZ",
  "key49": "2zeNK8a1zpxzCWCZcdwA4ANwje2jhGKjRDdpGpi2XmqfAm2AeakVvtaN5xkiRoxXNce2V8o1Lr4dAVPfjC2UAsnA"
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
