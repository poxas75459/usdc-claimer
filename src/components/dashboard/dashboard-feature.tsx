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
    "26qq9ipVTxsxVp8wWruk9kE8kfUJQARfz3oVVyf3hXGUG181QyrmasMonrrbBuuqnceC2DBQGRf2o8wxSVEhtuog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51LxxchNytqtjiEq2tKaVBGH2UuZLLNpKJYuFgwWLN3mcuj5cB2XveFUcFQqdSmEc2aZLD3G4vbD7c1trF3v9arq",
  "key1": "4HCAeKp8GqeiU8Vm3jSNsw5mGycEBep4RetR26AEyaijp9ESmj5VrXsYKU3yYKGApk1wppa53NrgUrhzxBmvuYUS",
  "key2": "2vJe4g5fhxYgxjbhZX2AWa7mEiHftV4TC1ySss6jaBpvmw1kXYysBcdPpagvAAuwX2uhrKb4mF8ANCrMcHyyCdJb",
  "key3": "64HSpp6wzoDN8Le6xaPGjYhhKnbjWZzvGhQZyTqpU4Shm7TCbJkVf5LbxFaFdvPn3EL4Jd9R6jQNKrTu3GF1QUrr",
  "key4": "5TTa9BpeAxzJSCYc9at8hSfyizBttW1kM3DCpEguq3HeyR4SM37mN1QM9h3eKY6hXQpa46vkeiRPPejSb9JwqbbV",
  "key5": "YVSFpbB12rRdmAoYVeYqjtaoyFWbEKsjKTYHX1S5nqLARMYYhzLcty4aKEjdbrtErvhDkTjPKeymB2TsyFSaPBh",
  "key6": "2d68QsY3UcVoKbLwPWEHwQEMqWSMuUphbrmpZjTMv4Ty19SCmUHys3btHtAeCovb3eaMM7qDuxY3SNyWUqSuCzPD",
  "key7": "4bQ65e3nDEHbZvithPLNjrU6pNLSARaUG4wUShmxybn2ge8DmHoZnP2UoVHhSvdTV4HfnCPvPTKE4CmZujLtBjRY",
  "key8": "2KWXXi5H8eiuUS7tXXS4Ec4ZS6wYXa3ssQ8ghgxfbqiXWQDfbBd8CeFCwqHNL4vWGw7skQdq9SaBghWJRP9nmxxN",
  "key9": "35DK7m3MDC5PY7mfMEP6tvt6ibNLnGQ7bmz1wRukeSJz8f6Kj46FnF5ukNjVNDX7CFJJRTzdqCbmxmYSV2rm7PTQ",
  "key10": "4TNJhcximb2SM1nZQN5oxMrM6oaeMHdDoZscFn2guyAQykuUEMBzRsa7Jhzq34mqv9megphq1MsqnnKP5Xke9hP6",
  "key11": "5AzFnwYWMcwWmDXbQNGsAXBM9kLXmviowmwxne78znSfYNj3myCqTgzEx6Lvu68vt7W5q2eNBXEkNaadEWZPVDLT",
  "key12": "5zp4iumjywgDssYbWW2TFbpJAhck7GPJMvRE5q8xyA9r6ReyE7zjpURqedXh3LeVeQWsEisKPDUs7U9RmhC13E87",
  "key13": "5kWuySgdRCboXrZHAzqqGeu3MwKhAzoiFrsRvFdb79dgU8aBwrX3UdMrpRZfbKjsFb5vvuYMf4zfQ8dscMXh6zH7",
  "key14": "6zuS4aMkuqoQGhhQPQf87CHk77uhbWfKGVQLX7LBQ4Ja5HqteyLzUzMRFHG8L9kkuk8rE43iK2VBGZgbKWPS4wP",
  "key15": "5QuRmCPSdnQQkRh6ffKi2XwLdY8RJpDwgTio2Ge6QuAugTyYovD7JvUctJQ84pX1VwTAHZhc7NKyRPHVoi4w2DmU",
  "key16": "23ycGPRAfnA8NdNNmpkQjCFVsZUqdpKkyoDHCwZw9Rdm9rzoKN2GD4YGdF8YSL4jGRMMTJtHvXCvMDhoZNnwjhuQ",
  "key17": "3x4dLs1mmsCW9mKMhiH1QQc1oxUX146mNSDgHrjS3gQi8utybrorzGrvBCfeYWaoFWT3HFLWMMdi4B1bameDsjBo",
  "key18": "2PUGibeDpWHFadJ2gx8Pb3evnSZXtQ8wXSQN9snDk9MEhNMPS8hibbmgcdGYvLLsEvkQfUZm6cWgxYz31gA6g13n",
  "key19": "2cN2MVfpEJZMpZbifjbWBqeqyd1nvoad1vQXDu9AQRNkfSjyKVPWju2M9ckXwKGQo3ajSCAhvoL7ZGebDkYUMXMd",
  "key20": "3nVzxZj9wSKkpJdATTTxf2rfiTVNfzRkzixFBqZ1t8PFZVwjqLH331MsDx56r7YzzkHHx3Z4q7M6tACxrFkvyyGP",
  "key21": "2rn1sHvuF4RZMsb5wwYKyBQySAiFCvvUDKZdCazAYFJbNEKJPkvC22HWiKT2xoK2arAHr1KJjr1kgBWs1X2oazJ3",
  "key22": "4hx7UaTFsneYDmPxMhKZFQy5Ri6PKoUDFEnVRqhe1PsfrpW59pBA9Es6gAgd8Gf3trvywA4sMDFhmY2rupVjRe7C",
  "key23": "4noh8mGJtnUn7cdmLvrpY4ZXx53xfMmPn1ChwiWsQ9zCz9TjZJeg1yTzREvEf6qYWWRsLqSzgAbLHGcGmTTEej8m",
  "key24": "44fGTsX7mm9U1d7wp585fZXCnXadM1dknxNMwgvCp19SNGW41GQzGJyXJ7LVK9DybYmxhWRtzXRXUiU9GanfepgM",
  "key25": "54PUxBnGwzXBDgAojFUGT9knFUQSGQVFR1DBBernVGJaJJhqQVj6QDQTqrj8KVTdnjJpDQW9KzJEWEJd3c4mBv3L",
  "key26": "4rJmxtscxDN2Zc8eKYF1uc55524uoX4BWk3Yq5GNWQaf3DfFoBprJcTdV3RYsq58mbFFvq4BwUP91rhSjXGukWkM",
  "key27": "4h8EbCKAD42ywPvbsCUK2sMgT4KydbnZNELF1NbKSEarnR1nG9N1gZxKN3kBmmvqS3ugpj7tzmdRbocbM9kTcqKk",
  "key28": "4pP5nUHsFBmEtLeQoBEZrnDXNTw1UPLp4e12wRgHrELAJV5EasLPRVJUhNLntBdh7egp24RPPTAnSmLf59iWvXJm",
  "key29": "ggUBACtwUUSpctq77wEwCXzF2N4L73iLEnpoWbBnUhK7YkHz8XQAqQfpyxPzMVcvwUQ8CBx7PUEwPdPHfAFxkgy",
  "key30": "26XsrAeAzeaUivmkoBMYs1uC9CAs64fnY5EJhBiXLi7xiyvBVfuedEVmQNoXUDcRvweroV6AcHcEaLtQUsX2z7Cm",
  "key31": "5pNzChT9qgX2KJm5BW9qNBD7BgbLnQBhEbyFmM7G8j3uEqUU2SVKq7zsszos7xzsDfdX5YbFyvBGevNVYcefkQU5",
  "key32": "4CDoPDkPnJDVWsRkpSwZyz3rSzL8yeSaPxr8hzgXqKVZ5yvg37CSFn8bM4aKAkXXLtEdCg8hpF3n47dv3ZrLnXj4",
  "key33": "2jzj73RYJJaYXvbJUsY3TtfbJ83zbCX9otetp4VxFbtShWCmkAAHoW3HW4myr157NJNwBU7YBacR6yz8k7ZHYZti",
  "key34": "2kkRsapSnh2R8n4hNDvhWAExaLv6jRz2bQiNo7h1ETayVFbPojo9i1aHjjzktrgC2CuBDrn9QeBxdY6MzGtsHXJu",
  "key35": "4sfFPSE5BEvoM2Xxmkue1PbHCZhSjiu5hjwfnYabKfUgbEA3Ckizs4hmF19UvQwuEVhzJBcCN8AqULbexZHNfKC6",
  "key36": "4pxdmEb3R4HDMNhvf48oZVALPYYZ4o9hw3YQiq1PuWvMjqvHTL4aaKFxFiwghh4mbuSxmY5LdnfikWwfpyxg2HLA",
  "key37": "2WitNNPn6RRhyNBpQHYCQmc3dUjoiHuFREuG4XEC2TA4F2mqSxxAZGGj1PFPQ9uoavhe6E9n8ATVx7QZKgpQc7W8",
  "key38": "3uL39zQEvtp4gwysbmcpTj7sdv61YsQCmJpG9DV8PQ137rZMoAbpEAe7Tnq2tBwaMZfKbBQT9qMmYRR67HpJpS9",
  "key39": "2W98sE3imJykercFZcf9QwdBPTDW7JanJLobKXdL2yta3FZKcrH1KYXHJqY9Li5sB2rrL6erYDz7rKDgMwYNnJs1",
  "key40": "2isDXhZE7KjLhBhAqqS3VsxYuUcGH67pMzs2ejvE6cp2jhw1TiWpX5KkGvXFfsuWEDfqoCCkvkx3tEK8Tdt1aAsT",
  "key41": "3uCspT7QTEGBTrnuMWstbApnopGwWiHpDU769sEWipUFKQbBCPiCDnTdbpLFamhYDpsHfk4Pq8RzrupU2cvmDCAf",
  "key42": "481TPLddkP54ijCihB985r4tRJJ5QkYe7Y5V8FZSdZvK8WZGHGrrCaXohhciZoBAC6gVtabiQAET89nKBg1Piz1e",
  "key43": "2AGsPUm62BzjchB12pNBkJHgLJDstybD3tnQpzwCHQTw1W5akFcYXtK9bkv89pZrji4Liog47bqWtxztCJQYhnDc",
  "key44": "3BWx9nxYvXYaFBecT6YJ1E7wYJPLiw6nf1exWJha636hQjHXCe6jygHjiGy9jcFBZsBaGUmc4RFXujf8qpLDLTwX",
  "key45": "4d6uVsz9nvWcW8x1QkMyfdMJq9AuS3p2u1hKjH9ndX8mnHqaag7FPTwL5gpVvvb1zaiR7o7SNUb15D7NLj17uEHn",
  "key46": "PqUfAHmCmenvZNq79Sw2xYGuuKpQoUHvJsUAK8zgb2azL3BZwMyhGX7fxUjecVwLh9rPrAcbBZXNPmjv3YKe4zk",
  "key47": "YYgTgENQMCikjaYXkx5XwtSFEn9WhrGKW2rU3YNpxYskNtEwRC2jyekKm277K8M7sgUn3FnVMQBZb2ruPj7XZjC",
  "key48": "57n2FYSD9HSuLZHGCUekZxhQR4X6ng7wVyHjpy3avAaVYncNcPzc9sXn3A2FWZWhbw1dKoA7yCqAwzf4mTZf2FkS",
  "key49": "39bhs5Yvpz4GjiJzidyHSAf2943tLX3yBNnk98X1zgFzLKRUNJR6AAUNYgAeF9m2xgnH2MbGPGeYcskDnRVrJ6HU"
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
