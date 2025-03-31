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
    "NzJxWXcnHubPR2mC98efB1B5Lv5raGR219D3Ba5tpsSoLHEuCqHbcouFMW7Hvnm76MAYMeSpPhcKf9cnwcukHLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fEg7y3u2ScbabT5A8imh78XDspt7AE84y3X69r8e8XQtxzRuUdU6QGL2HnuSXEs2aG5RDorq5fext5QJ624kwzv",
  "key1": "4dA2dXYuEbLYf4iafSNNVkV73FZn1aVGwQHW7djBSKE6Md7fNACmD8CnVExWDUvPVBiUb3PsuskYPhMZdES9DXa3",
  "key2": "XXPcFmyZmdTgwHieeBPsrwZHWfLv4EhHBcXQjxLMXztA8na3Bn2zEEoX8UG9UvnHG5uzT3ohR5m69vacHF9SwW9",
  "key3": "3CfRJmPKpfmc2Dpor1PsCiHHJHhVcB8AQyCjrxRE5fgNemqhDrzAbQTXzaXh2rTJdSr64aykQEKeQ2wotqyEUuXv",
  "key4": "63cRKvmWRvUCERU3U5neZARmMG5NhEHb4GX9kJG2T6i2hwD9mBxnPn4iBpMhv2LF41cgigAPamJovDBUg6UYg3AU",
  "key5": "2sMNJdnJqU6eNSUqwR1vVC4nRMLPPZM4RcTcqySdFhddivKoRiXS2ZPhXiLBjehY4yGpZikwexVgnoND3qsGd22x",
  "key6": "3poP1HFtJ2jYm3CVs8gf2UqgZ7iu64hndS8iET56zwQCugt2WaaoMovZo1dgV8GKrFfkmfsgEKKDUpjLFVRwW8Na",
  "key7": "2eJXR4V6XLPLuNqRRA9VGMNvGeEwt7nbv8eN9qsBtLrhAi34tRg5XXeTEBbYbQmUBJgB8uVgoCZqGncx13LRbUY1",
  "key8": "2a8hNKEPc4jKz74DqCGDZ5QcN43L57ijjjffd9L29XxtiMFZPHe1NqAkmMi2FYG72JWgYgGLp3cUxuD2ADmkQg9E",
  "key9": "36FagGMPCAbZkm6zNHsmjY4XcGtaHbYQ1Xb3EPG1xvD2zS2UsW4fMCYT5voAKYsmNBnRY1riA941mqgkrsXdzyFS",
  "key10": "4RdL14oYQdjcWqTRqmrcHS2sCoSvhx4NwaPcx8yohfBoQqRxc4bvNaNeH9ziTJ627iibU5exgTH9cGGdeApeNLf7",
  "key11": "3C7KXUz5cDdZRWuDTNKHbZM3VbQ8fPhGFFEs6eY8nHVJPdmDDMRG86rVW2bxKApPwCk9TcqEuZ39GyVgAeoRHZ56",
  "key12": "5jiVBQLhiG8d1Qq7xqXsjt73z2uJdzzsi55ujLXWChUmHShvwjQ9k6bD4gpCtfmS2hqGxJowNkGDg82u4H9wDjrv",
  "key13": "2nghkPXNgVub79fdDnDqggtvHiwhTEQ6nv7q7cejH276QK64Z7ywcS7omW1nixZBLb5ms422HB6DPWVgzQAYzVtC",
  "key14": "S5bYt53v2QL7Xh42JX5d6rV4qAaDw65wxMQ73drBJ2HxsmVT7qfy7ymXdCMNSnEK7McurknoBPwoK9TDZY4zzqB",
  "key15": "MoW5iDcz81FS7pR2q1RqAY7mSxF5GgYsrT7JRRHHp8oupJEvY3ZPrQZgtnFTWFQuDHXciUcTNPC3xrisiSjL1YV",
  "key16": "5sYoYEKdSjxjCFADE2fFqPtiWePEtUeyomQiUqfxHN5PckasG6KwiizZvPn83KX5QVzUWwZii2CaNyCYoJ2oZan4",
  "key17": "3qrwVdFKMLekMXxoRiPyG2naNtjjHM6NxyAb5MUYFcCA5jNSL4ycnpNYZs6bfp9xddrDQH5tzoEUzW7nXiWKJfL6",
  "key18": "3jfaroArjmdHs1Np392qNNi35oUHRT6MoakmRTMWoPvZuwE1ihZaFjZTYSG17STCQckYg3nNvgb9rGxXgHFeDZnX",
  "key19": "4XtKW6w3J9VmPjQF9GWqrgzTq8NJD5FJNvik8GELR51FGmAnqAjtC4MehW5y9q7tJN7j2dijyNt7TC7fwus4yfTR",
  "key20": "2Znsd3C8UaeYU2utczFn1qQTskEx4jrAjcCPbfbs9d7fKs8nYQGEdRSpDGVCYCwTvawPeh7CpnC4HFbNEg5e8PJ6",
  "key21": "2oMttFsndPbCBmsho7fVSCCit5bQCxevFaJpWikrbikDqpCmEU8uD2zxdA5N59KwBfg4qKm6CP2zGjm99FU3gT3R",
  "key22": "5vniAAotoPCXuEzbThBdDZLPAG5qP9LZuPUxwhnqFGW1cVGn8snUZUL9VtT8Pe9xcdoPtLTPLoEUkh53eQsMTDHx",
  "key23": "3UySGSc4yHexgystSk8thqbofjnGafVz2MBDtRMoyQVGWJMHFFkvtiMHMrvP1uBhhe9q4XFTRbewVba2kYAWV4AW",
  "key24": "5jefw36bkcscMQRsA4wGHCv4vYwMVewvpo6dGpYi8W5VZVRieVWLARmbuAgZ88ArNDy1cWWS9aKDkMJa7VuvNa1a",
  "key25": "3dcBQSDeu5Sq1e2fLruYSbqJdAAPoiF8rMfo8H35f2tjXXoDzaWioTq9ac1TpzDUoTAzh2dczGfDVGeKnen6HzCG",
  "key26": "2oZpfodjXEAFwhs1ZJA7GcaYLc1YRT4ybWh45YhGpzhEdoRzV8oxC4dPeuJnmrom7DqhhcG7PFWq4G2EKY8GB6GV",
  "key27": "49XrGYWuXnv3ndN2q8yohXu6txtH1HxhLuG1QveBuFRB1N1TeXWyzbFV5TKr5WRMfWU2Gza4edEW4gHgEdfrH3Jc",
  "key28": "29TRj2i4CSdKqTwAcsXPA6kviJ7etmXEKyZGxiNequfwu5ri9Mf5viVnbomRxZ8Gy614N6WNt46u5po84eQKQLcr",
  "key29": "3PPFU3Z3XoJXUhCDBtiuWUXYnZHtGRxDN35zyLkZqfBAq9aTKM6ZaT3TuUsDGbcFNn2LFyY32yZiL4iC6PpxgBhH",
  "key30": "Yy65GUBDkpz8bnVt1hqfAQZ1pvU391BuQaKTDnnjpN4VGksnXkf3gYbNFzeD92qJarLFeyhLjvN8sDokouH6UPc",
  "key31": "26dYVBrN5kFPosgHPnVfX1cNaDgqj8cwzaXBmc1wruiUCyMbtdmfcLATVKFkgjTRBWoiemybkp3C7puLUHnYE79b"
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
