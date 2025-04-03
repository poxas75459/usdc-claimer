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
    "5VXRFxHExpTP7FM8UCSTwvoWwMQPL4X2fkrDec9qxLLNfEDLN79E3ohvY3E9tDNXe6zmfqC7HkJSJ1UGLEWrCi83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T2xUYJPxzbavcZt9t98z8E29gz3PvxJu4MCh5rccTBPtP7BV2t1zpo5FiqGzC7VMQWhyyt554dkBgAApMEKZha1",
  "key1": "CsyBi783t8xNaGG5XJuZo5S6pXFve9hVZdwvZn9nwFCDYJS28fMyKNbrfegEBZ6Hpb59BKwe84ecY8EcAyeLAV3",
  "key2": "MT55pZKF4tNHazLgxHACxsSxSLkojQzJZx9tLgdW3gT2HJE9eMRJsnQADhL1TCaGpu5RY1Br9B39F4RwANdUAZH",
  "key3": "3xZ2w1me1YPCQUuXRbV46t8NFvAhjDmBwGTz6t6V2zqGBCHPNWZRatTou3J8M1HM8iEVEHX4uu2srvfJ5BgBuj4D",
  "key4": "hV8jTy1KHQvzEqYyrFexWigeccPbEqjw7D2HuS8EH5BT44sbuNgGeLeXyszen27Egy2Nv6UNrCVThKpi2comGrM",
  "key5": "4oxnEnZLUZBGUsW3J7JU9RKTftEVJ47ZhpLUwfG3Ga6Fua1JkND3CmhZbUX38fiivivDsexrS5RrCDJyb4jtKVc4",
  "key6": "4fXG1u32SADoaCSnQAnAmTQd7qqRsiswNSew52MDmLQDuakViFuPtfFp3fCxCLVq6f7TjTZeDPyM1u1haEno6oC2",
  "key7": "3uYWgASZL3cTsfUpiau8MGZLpjqJUuL1Mmk9xqHyg6ySYGdW2SqWYYjJG9sNEU7K6XfckYCREqst3QBrCUZkjM31",
  "key8": "67rGa5NWNUeDmm8sPuZVcPXaViy5uAh2mACraM795FP9oy85zvnoQinscHojFze2u93WjRUZdfuvxWaZyekqpFWV",
  "key9": "2bKR7Qsfg4C33MwTZq7sDdASmE3GUcMCfa86DwRo4hfHoE6YCQQLUXRYFfLAffxsButkkTmdQ6UZv2SLHsFjCd8i",
  "key10": "3TcL9KECARThguBF3L5XeEDgkM6bKEMjNMvTvKCC9FRUb3FR61r9r34GjQUDqBNS3UmQ8kKRGaCduhuEQNDmdT1J",
  "key11": "3boYpNUHTRvnLWuoojxRt4sMj9968rTqB81mwnKMDdy87AMg81gcth9y5bRFDygzvHo9gFyF4uehLDmj1jt28fmP",
  "key12": "5HAuodGUutiVAHivURgW4GjfhYgHS4L8mvZyKygBRjtpJWYkVHin3MqhsKA64zmY9zHxxtZye1WegAXWHXjtC2ag",
  "key13": "3MeYpTaMEM2AyTt4EGsDJ1Rkykb8313fSHYWNSYi8jCRKGbGCzoUL44xhadsutZ73FtXNpxhVKAzjPLD7QyA7KkV",
  "key14": "2uK7maaPw5wYTgRVNbXtTzKnUCDQhhQ2hnyfqt7heWwL9jhR5GmpFojkfNJ11GCGDmmPL1be9GA5WnVqUGcWYeQo",
  "key15": "3oajpvX5PKXaSoP9tDyv8EkSyNGiWvu994B93MQ8RockS5XTc9k7kbVzhhRMqSLFECUEPS9rSPjKU7UJWeicoNM3",
  "key16": "4B3NJ33SNv4ezjmKKNBB97Z5cRAmqxc6DQ3xGh3oSQEJECoBozhTbv9RMDDPFEgrymK81WDFoTwL4PU7cJn9pnU5",
  "key17": "2BJmTyc2JT8DuEZAMdUheM2JUsscWAZZcZJ8S3Jgsrsg7K5oFQdBiyL9jofcNnUXaRwBW4g2Zkv7HiFAqiKumfkk",
  "key18": "5jThJfVmgMACuGTmZG1J2HkfYPUokN6Fii8RYNkMSBayR7bsd1iQSza8jx3V91QTQdtHw9UTdUvpHcSPyHAmchBs",
  "key19": "2dV2HrYnHpHYHoNWoK2GGBibupFn1Zkf9XjTbAufnqj8D3PoqXsTBVPo4rPi3PtPkoaFJ7wRfP3kAmXRcR4reSXG",
  "key20": "3MuwNAiQtTXPS5mZRhGMbwzK9m7Qot1NH6WijkQwz9Ghft85yZR9NA1QKAZHYk5dWjPfQRVN3LJdE4Q8SmGFHgVY",
  "key21": "4DwS7Z4CCbQEfy5GhMfBijJVRY3ACRkhkbmrqf5ohwW1E8PDpQXzvPmJgooZWSKb7mMKmJjBVhRUya1F25RVC9u8",
  "key22": "3v3vcU2smzYvjdkdVVpZudjMMPybjBUTCNvNC6H2jBD3WTLRAK3468PgGA5Y1JX3266evgMqTzikkNA2771NeEXT",
  "key23": "29btzApVpd5wcRe4WatjP2UiN6DKZJ91fBEGpQuhAYJULTELFe6tZjG4JyBnpwS9hy8zYBuK7f6S61BzvP6L9tfa",
  "key24": "2fEAsLKE8QhhsVHtSG17iHG5yhcc9Zfz2nzrYb4KFHgL1zqmAQHvE5WHkzAZ2xf7SysFozJVifkX3s379Ghvdp1Z",
  "key25": "5EM4XZqi6fE8uNXzTx3FkAF6pn4JS9XdYetUpgug54uSjMRRNECjHPCv2v15sZYvLTYmTJT47SVnwYn9NRA9r3K8",
  "key26": "4ngMHvsui6hCPf1B8txEz6coh4SV18KtetFkd9AuHvkJt7Vaf3HkqpLLiaE1dZAvJYTf82B1EszYRZBXm3w2ZhqM",
  "key27": "8scEfDM4keFvDVvSpkpFHo5EBvmH76kjxzMLwmniiTqwrLaf2Unr6oN1xwvq2FNraihUiBQkvUv7FnHFj6yLDvb",
  "key28": "2v6cvYkApoDE7hmRMR3tZcBKhCMoGJKrGjdzpUmcdrKX2q6sJMrXjAbWTCR18RGBizVR2gGZyAy7HQSoeKMSCdB",
  "key29": "4zmUzLYHXor6msZJbRFypemaxTtonbqoqsADFojf4sgvVoETF5XxAYBSx6nxbX93WaHsJFSZgA8dmkB9jxqACeg3",
  "key30": "ZHMxvpYTr11cwLvxW2fVFVoUbTL2HeUuGeVwLDppL74XRbTzQALa191hbX6RANvGtezeWdeoYBw24eYXuGnmxEs"
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
