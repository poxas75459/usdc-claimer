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
    "5tByHkB9VcDGCYmcngBRi5vNKP96gaiu1HFRAftWfidXRBKcZBfLLQBsakYPu93pvH58oRAS6dqW43msjY3AwSgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XWddSdpmnzh16QRpkQaF89onVUSzyyNUEHyHscTgjzfMx8Z3fkot9AxWiTBmMnu9D29HMYsMGChRqVgGA3WHAiH",
  "key1": "3rxJLdYkpjBtJuZ6wQnAZ3ogF3nAU9Nb5FGYxmSr22rM49FYeHAQwSxtK6CXZnix92bbdxGaYvAcqu7X2zXUJUaZ",
  "key2": "4Fh83kZHhWLbL4g6xVaKgFrhHpCGj7sGNojmmWiCpGczLaX4swfF1oduiZWZfqQvDwJXjV4cbcMCbkf15EWha1Gm",
  "key3": "4wuGPJo9RuA1ZpqLwQt5ekbvjdEdqyW1bdF2TXutNtokh5TrUNe2d78tGxsPbXbnWSH37pqCa8auWNQiEB8MvKSW",
  "key4": "5KvMmpyfa9TMt2LTmYcC45ghtHJABYadJ7vMSFuuKZSCoaXxnfUrPwZxhgXUTuDXfd9fY3SES3QpBaFFULCoXDHq",
  "key5": "3ZdeUn7LwFyd5yH382NACFSwEorSfWThAqm4baYF2TigKdkHJ4EkVKzWXddDyU92ZQhK36gZoGQcFtrkfqYw1U8U",
  "key6": "2zi5deTuTeSwK1JrbDvC7PRZqWcGNnCdR8EWZeyjyYPkZzu5WyVSuJwCMinHrtHGxPjaSbaXXbLSTEryzeGS7KBw",
  "key7": "B56RUrGU4covu6KtEDQGsAqt9pfsBFyDb9kcx1j8prp7imGiMpVUooKvh44tZoR1act7SZHWhfj3CVLKHmKEn7z",
  "key8": "2etrzmeYVtNtMhgdHEvB1uJNV5hQkxubqgyWiFqJGazRWbA9RV1DFEF7W87wBYCc4ZSHF5JXYC562suRZLvFhDex",
  "key9": "36WyTyR5JdFbxKCLqqquUeMYoZgj5K4GXTyksAAA5zS46pVGYMDoVRCLNwtfYysBXnK9iPeJVZtUFsTJrrWrNB3N",
  "key10": "5cUsSfUuoopbC4b5zL7BmYVXoUu28R1CpPgErUioWwLBKpnsYgBxyScY7e3YsdnwZwxG59cpojUuZb96Ba7uira2",
  "key11": "etNrVj1bLFP4b9RAapr4DRC2HFLkReCPazczmZVf6N298KiKdyHxuQFkU6d24uo96t8TLPkg1XzJuDmZtZJr8bD",
  "key12": "4Eqj5mGHiR21ZKV5R9CdfC74piS9z9rGBRfiSooD4gGSD6RXkrxBycWnSEagfi88kvV2AMuR7ccRsEQyEi57axk",
  "key13": "4s4zH4S1H2o1W9a55ymB1TuP1cukVPbVDRWrveNgVk8SbdSobe7ov5eZWzkVGXu7mBoFtdTxmj18BAjFar2F4iHS",
  "key14": "27vdEs3po7CjoTAETuE6uv7eZcFKoSjnQ3X9XgoC8UGc1FKpmTbPsgMk5oT9BucSS74ngaYVjNoDe5fhLKsNUJsD",
  "key15": "4dzQr3AWw8fAmQknqAyrXbap5mTCGLoKTm8DofBTiUP5fvuCuT2Hfa4226VUnzpFa6NN3vgoxHStNNWgFzwP4ix3",
  "key16": "xVDxL5E54wABzvaj3nSQ1mAUY6HhJR1dmREFNgcXVTZxSFubw8UVszS1EsLTkoaK9ZqDQKXaGG74BYfuDZCLPX1",
  "key17": "5zs3qs1DNnTPzXRwASyPrTBY5a4iobGPpweu7WcpF1YDr2MTm81fiSJ9APDbVBvKUoc1SoyduQESyi2wfttY9LG7",
  "key18": "5Ke44TQkeyf1sYAeZiL6b3fcmreKfE61mdQYg8mGTduxM3driqCtArTQNkDX3L9Zau8tb82YrftKxsZAVLUng2ZD",
  "key19": "3LxRDCQRgcchNJJXGdxn22xPWq9jjxJAebpUwUBNiqrqoYDxG77Y91t2bv5ioEgZNtRtjwdsfmJuAMaNp4L4z4Zs",
  "key20": "5gqiPnBXqkn9Mt4EBvHkwVqXQ5KnjbjX3nCFxZkmL3ZginbRovhVE4Vg5kEDZyCm4EneXRAdLfxgphggBEapvseZ",
  "key21": "5fZkrRrR4FtfNdy8jfnoyqpoWwbRbtQaSuCxDAaQnfeehGeEuuUtg8KyGgBQLorAuq4GR4Eoj2yeedQWS7sng3JS",
  "key22": "4QwqFKaFbX4VzWSp9h1ds26fvFBJYoEsfxWZFC91qgZMGgDLknmr1hEAVj2KV3GzqeVGnspy2NYifJqB6t7EYBpH",
  "key23": "4xsF4cqGuS2qAgaRMKYLUVPT7kefEgkH9AxyUrVosCTwDSszVws5BDCMnqp7XdNxn8BPrzn8MaYZksPDHdNjn3bc",
  "key24": "5JTgTbyks8czXdzQbK9zb3qBJrgoQ8Qwxeg4K8aX2zCAzp2n5FXFqTrKa942YaeqbFVdDxWQ2vAFSdqfmLxpreBa",
  "key25": "uWbF4QuscoxPpzjFJ4eHp8hbEDJVhCmjhNyfQTqUQ97a1PYfEiJxNnBQ1qb9rxQ1nc31f15qPXjzoZhG8SFHhNi",
  "key26": "Vc8w3XKA8umf4Kjn8T15L35yu2kGzprXD9gy1pYuZYgwHZxJMSSnkvzyjwRZAGjhLtkwtwNL6dR2AGvp6H7PtVC",
  "key27": "3dudQEZTLNRt7it72f8CFbtZWDgjKpDH8XWFZ68qDXCFkPgZohDnXq3Z93pdCHefP4jr5Vgd1WKJ8vQLa5V8Nzzx",
  "key28": "5KMrSazbRTcPvPHewU6RRujew64afgV7kbbV9PSURTRM7PzYSafRVQiUYmGa4ENTA9Mne9ES6ZvvqGTrcUvV7hTo",
  "key29": "5jBb6wEMDSVLxvoEDcqJ8VBWkZgFdMNyXrh7QGNQMHahNgTnAtGDdjpZ28Vz8GEGp5KnuNXaGV7Dnettkrpr22S2",
  "key30": "3PJKP6RamAQzWyaSEdLuzUBD3uBYsk5zbmkqosqREtboMGtGLsdPC2xsSWU8g48wM7BgvU1DNGUn1qPRQJhSx347",
  "key31": "2yimYtN1pzmz8wJ7Qa63vkDQ7YxEoRkdf4UNRNQoADRZb6zAS9fsixUsxYeqhavJk21E11vEWkUsCsxyrkUHj7Rc",
  "key32": "3YeJjAeQvfKVuPFQjJhqnbSpfT7qFLxFLfNa5a5v9y9BkgF5Lz2vXPeftpPDrEYGxNVZXkRSWAGr3DbRXeYGasrv"
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
