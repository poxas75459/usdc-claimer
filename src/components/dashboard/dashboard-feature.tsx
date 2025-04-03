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
    "4qa4fKx93xuzizCbzzT835Jihgaf1unFxxXpoG62mtCWNMESGePrP24mHFKwKGvMP8gHpPkuyKFxR3kdZ3tfEzgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yQA498uRCpLuaVK99a8DJjEcUFyGzXvEDqkjBvfjWa3fd8HdDxaDb7fAC63sZBZLxkMNF1WJDN3XAdf2JbrXXsg",
  "key1": "5WHE1HuF4LZk2V77Anee82xWUtD6m9Vtv76FJii7MF6dZhfXJCDodTT2i3Kx7C9nbqpb1tsTbsikYtWEzt2JKsPo",
  "key2": "rmWx6xBTYT7eGsPMYKWsU733VD9K7S1qSLDWCTYEsodNDfBFAaug6xjhmqCUH7J1k4uNRm77GaSnSs1q3QeeBe4",
  "key3": "49p41bJQ4bx9X2TCs4rcqjdBAXyVeBGyp6wkqY3G4hQFZ4mcjYmhKSkFitz8CQEwEcLr25spp9QFzyKB56KzUxiJ",
  "key4": "5Cyd5WPUDDeYyBGLQzNxRSQgzPpYP77ozGj7uSaYcpn8EGfzURs7cRnQ2sQJC4QxAdPCVbDzbWPGUXkJhQsSswwt",
  "key5": "4RfdtkdjU8hTf2EJyMVwm2gmjELBxoFyq1iMPp3VoKF7VSLhNGSwnMcZysX6EEzSH6LjpbA9JQWQHfUUH3CqiCKR",
  "key6": "eTcATjL2kzwWVN2QEFDpj8rGMbLwhFiW8NxLCQme5oRH7tBe9GnoJ8ZFDbT45gKEAZ9H86KTAfoz8W2Na8mNbUo",
  "key7": "qa3RqqFXAWj4v8admfGBmTgEgufs6nqm3r3bn3U5xPFQQAMuAmDV1L2AkuPDhTKVwdTqTC3P5skW4UABek6sRm9",
  "key8": "3MEqtKHYWictVwfRdE4yniArSPy1QseYNV3FPzGKvJpZq24JmNpZxeuXqLDfZgisT2DVi213G32CZp4Sx3jYCQiy",
  "key9": "5p9C74uuMUe4XqPY2MeABctYJV1zfDz2sWn7SSULCA2aUxW6pmauxogjHRnA1iix4YkCkspzmjUyECwWPs3mUcBz",
  "key10": "jPtS5FwMp5eKw3nwNhyptD5h1GrUDGrZe69NeqvV7C3nFAeh7t6oAe2kf7Gf3mAfgRzajK26jFNV4DggBGdkvFw",
  "key11": "2e8YsfMD1rpUKGufRb6kwLnNgzXEXafFR5DMgNHivcG8EzbfZvkcZ6NvQHQjnCZZxZMu17U1QQFyQBy64vEQn3FP",
  "key12": "2MrkpvHt82rftzBTmRWV8aTEzNPGBhmTn8EmYsqrVty8upNfXZrJSjqszXywSZzJYodoyQpZXRt4TUQc65wmoBHy",
  "key13": "21BNyf1Axc8dztrMXFBwAWtUk4BE3m9NbBZEeMU4rXu9rQnVvPrUj5eMpKRbAfZ214xK8ZmHyEKpDty9YgZiSaRM",
  "key14": "ZG3NEhEHZU1c8rhcnTLrVy4c3c8Ld9QQhxNPjCxW5zgMKeJsG5Ry1gi6wMQbPfj7rBZxZBiN7z3XXFSPtcunDtZ",
  "key15": "2YcjnLf9rNiQiA5VjaQQcExbGZrPxKgiuqqjPaT2VxdxJzqPLz7XE1yQZBF6LR3qNafn7uBHKViSuvHziivgyG9V",
  "key16": "5EqFEPaZfFWx28G2Zc3uVHE8SDzxhs9xt3cCmPGepTbaJ5jAxFDNcJ2vixzPENj6SLu1s5hS2P5Fx1W8otn2tXq4",
  "key17": "2qDiA3B3bZTjvyyP5GcJy8t9nvsba8ACkEhNmHpcsHdMH134usQ5zMr3BNbLjTSAAmDNu6ciWL3p3Ugke3bdubQK",
  "key18": "s13Bcniywv6QRMdLxDvWd2DSzmHE76fuNE4wvM87N8PRxwQahnsa8gChGWriJGtH7GBbdmjPEAFTHfqSnVr1TBe",
  "key19": "5UZbrurBgivjboWx4G5yH5pwJLYjsz3myJGsTgN2qF3C7v68JfFT3oExJTdjQxu6uiekwLN5ZhKUC4dJQuTkDK3q",
  "key20": "2CDTPnnt5t9oazeNxKJdLBCpuTCCPsQJC9kBQbWfbJLXhpXrNotBifwTAgkWwb5kC8p9tbtZXeNjAc2JRsHFiXCp",
  "key21": "2hq8aV5Tgc1MpYQvEDqfFBLZijF6pquG9dEfhRhsP9msDAFTmv7wNV1KPLtHfF3AKdZxr7s9tu9qChrKgebu64BA",
  "key22": "612u63s7rEY7H4e3Sgvz6WNzbN4Ex6qGSdPZ9WVby9weVpHPrdE5aTiZSTP2oCezPvGq1cXRFK9jNibEBatv8Ygz",
  "key23": "2yB8vGfwYMvcxqJF4J4tBdSeeq3uxmntv9r6APiA7NfVGNv7pATQMRq7QLtJXcYeYBvYu8VXRDVaEN7CTbP5NLzq",
  "key24": "w1PbbydZfHVtoLYC29htEzuP1pNeMGFVRjra4qXdfhMz6tzh75b793QiigRfDc6SZPLhC1wwU43NA7yX6g9Lj85",
  "key25": "5TtQDRYqYR17sfpUcAj3pGiCy8uo4ThxrTAxi62aV1dBVJzijxDD9dEZS6H4qAcvFGGreD8AHdmzUmTy3fUHHWrG",
  "key26": "MhdCKFFcoetYgD8EradvdDzuKMUH42hXv4NRLv3XPThBT7qohUvVCi62jDckV4bcnASVGZnfZnVJNnNArT6zm6d",
  "key27": "5ktZZpAbbRr7EXPvoWNiQNj8e1uceHTCN4JEUKokrys1BPd5m2ntic3gzaAxjPJcJ6Q63JryyGSQJp4W7Jia7PLh",
  "key28": "2AcMy8QNqoPJdg5yLx29fxSKj24XHWCvFG4gXmqhnateqcALFBcxw8asvoeChV1g2unGsUZ5br9dsTf5fbL2YWqH",
  "key29": "67QDrtWttQUZYkk7oyuGiP7MCbp9kaydmZUStorMM5p4xB9Y5P6jkzdtD5SVEzwj1wcsiFde5eTjGdRKRTXnHGuH",
  "key30": "5meBA9PAeEH779PaxmVQGS5GpGgL6cAGhUtuwXwatqkf8YnKBFYzKSQcSq5usAWNWJAgrbdM5J9C6LzSY4VCUJuv",
  "key31": "4DPmpT8xEDqTFjYgMdJG3b5oSegkGBKtbS796vfQqTaHw8i5CaWcy3xbTapH66FFRwZUV3upyVwvhD3wsLkP9ZX3",
  "key32": "2nHuY86wa5174M4TkQy2sZCi5uyZa5siQ8Us5SbTDsr9Evckowm3fJV5CPWjpUNmUxSd1haMGZ77FCgz429QALgR",
  "key33": "3jvQ8jAvYXod1tcsrXZwP9ZUh1LFXHYEpKY6Pt2AD7HYfzegnPdAPjUAFMQd6U4mdaAr9mFYhdEoYrvs69RUeEuf",
  "key34": "2LqTAgREfHs3jWvYVEW3CPb6a6CHz1664BjACKdTTDokAacbKVkFfe6NaYtaE5fWZnuE488zrGcjq3No8JR2dEBx",
  "key35": "4f4ghqsckdbjQqxH5bKJ32e2m8AmscHYJTiGNHF2t2e95x3eCurehvu1R9A5RKGXvZv8jEM8gd38sJYgcwS7PjAw",
  "key36": "Ejr4ieienHDGBZ49jrL86ydL8Hmmbu27YqntjupCkEoAPwydcY92bVFYbq92y64n4FcvVxY5DY7HKX6gSea3B5L"
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
