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
    "3mhR631exAekzJXcH3w1j92Kcv8uPETPcq3rdkB5gZDYuvoiEpPZ89iinvsHXRahzvhvop3JTQVnGrD27s8VuuZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pEenc8MQSPx5dezQEKB8y42myRrzkR5HTkziwvYKA7aBBv9p1AddHEUpd4BCfaqLAnK7BxRrbufDHnXuSjtwt9X",
  "key1": "54ZSZ1Q899V3tnuHg7unRdUpnDe42r23KZ57y3RewxeBA67j3PUiGBpLKm5PPU7ArpXzUGXoqLTvuyAdiqEt778a",
  "key2": "4acLX58M4tr5Gq3xHUuyunMDZjdJCKPBGGv74JaeZQeoqEXqCGLFdCudZXQuU3s2LWeezSooRYSxUKGYaLFjXQaS",
  "key3": "3yik6zpAYSsNTDB4yFLxRBGQSCJCZTSQpeRRHHN3hiMiYjHWuQ4zbHNp4Em5GXmueTfZEbTZoc9XhQmcpCZAT6W3",
  "key4": "4FrpgxKnRsrswfQiYkUbw8z2yGjnSdmPP5EWLyC9u3KLTkxbBKKWP4Fj3B32NVDaisRtTR2QPuPwukprjkhKJCkK",
  "key5": "2DZGmBUzfnSptq2BYJCkFiHtY4UPH9H1DPNRqdEm7uvwtvg6rrWgyXStutrMX5xfkz7zg61DX1GDRfYaxSnQuXpp",
  "key6": "4YhXcFMTruLFySn4pcLLSvSTmpF6uKZ6qqTWC69Angihxy5jtGiRTjt4vEdAPfTESWn2ZD2ggWM8n7rwDpTL5wub",
  "key7": "59yorZi7yZjGiTeM9zyV1LJzBcFU8VfQeVXgvYyBT9Y36LFDdFH4uBk44rUrpchxX7tRV1sum571BqfLYUUfahAA",
  "key8": "4HMdMmoayaXAArn5nBxxBbvwc8MV7hqmKcBdngz7dM3b7fzCsFAevC9VzFVCcCCdCeD6uyFCZPgokjQC3wKtaDnZ",
  "key9": "1Sk5yVm5WAsyQ6AYxqc9ex6j3qusCr9pmrnHh6B5kVBCaYcrpwMuDedJyr2UM7SHuruM4QeCz1aDfDAf6WLjBkX",
  "key10": "4oBqHuGyAdBQcraZcGQ2cpvU6yLqi93jjBsnmsz79y7kXqjhvLZF57fF4a56JfVnJSc1ZxsqfmvqMaHiimnmTW1G",
  "key11": "3Hhs6m1BNX5siBJWk6fupX6QB9SznJsAPNoAoJmstM4z5RtVNfwCvFKDBUNTWtSvs43XncrrnGfnoPophCHU3dST",
  "key12": "5ZRqHrTPmrd8c8A5t5MVj3A3XChRFjRwQoSq6bbBF6tp9iUAz5fXHVJBbRHSrj242JEVFLMRSBdYkaed68v1mosh",
  "key13": "gWfx3jCq6m3gHNsgDxzLsxqUk4Qq32FUmrKCVtnnJmiGj4jbyrNTTuu7vPh7XWgUN187mGcHn4YfuBYhst2LkUG",
  "key14": "5PwHMvhGzekfumQmRYfCXCH4kAmPH1ck81AU1XFVXkm4KhDZSrSELSEigsjfuM7NRwjfFWDyjNEoaZCRuSzaV3uQ",
  "key15": "66pXJQfmSUx6jNUdEaaBrb5CbGE9tB6kZza5Ars3VucUVWd9UwPWEeF8uKUmKKWshr8xmZNv5AoVfkL2jkLXQYBn",
  "key16": "3iKZXm3iNpAR3BBnG9BF6sgHoRNJ16c748NscE5Yweg692pxigek6TRfNa7C16YpBDmWsPZCeVL9rR2hFvaw4uZG",
  "key17": "3L1ds4eSDuMQuRhLXBKm8hso3S7Jvcaf4EQEUrPxb7okWtYujKaiTZgGQcCiWXefSJeJWJjBEDYQNYSoXzWJd88H",
  "key18": "3sqzM758zwFWLzUYMsg5n4s2fL9ELq6y9Nu9EHpqGkzAvURZ9GTTnsh5rc61EzxbQAaFxvccuTiqLUnTzoSPpNW1",
  "key19": "4ttfwj7AdBm6mKxUKu7KTw9b3SKejgqwRJuMABXyHDJMxDcy2oLERzaFXzdNF6ae95qKzDh9FHvr8p3uE1fPmWJG",
  "key20": "5Ao21AsLwmG83wWLyheXC1T9mA2V6niCcsKmdR7g4T9uM5FLrdeDQ8rroF43adirdeF3Kinq5ZDkrzZHSTLMSkpG",
  "key21": "4XoC2D4tRCgTKy8hMdfq5rEVzrh6TQvnV2sQTx89N6pJ4uFkahCupkEyFH1SSanYomSi8uqHYrHSzQFPYmLhFh2k",
  "key22": "678aVbQUrLGYbghz2dSg6DeN1B3fp46CR6x9AATyaMnMCPFRR8yuFdDrhgPMEyq6NoYRgyjDXZzpcUffkxFU1AtA",
  "key23": "2oVSaXmwuBsQJFRqZt2hw3XigoHZr8xGgnBcu853wP9kzAedBDjTisKVBN1AkoQYbzYN53PMLnL87pvvrXxaNSEm",
  "key24": "4nMFSgWSKypDpPVZQ2iQXuyiUFNfmJa8TikR9ZB79ssmoev1yzmfZhgp5PsVVeSAhXQnFcTrw3gBExRHmxtgsYg8",
  "key25": "SXtdgdmRsjoADmV8zwabTKLa8igyMAyGKoh7jrnLKcHVn6dhoKQP7RrXNvWA7NAheCUDEkRdrPGDdnQLeFD1ZQB",
  "key26": "645yLqdkxL6BNeYLXJef38gCE7NY6LBdESNFNtGw1oHP16VNGmNDhoRZd5pmdSm9oCdAH8VApgvYbyjEVRk15hMa",
  "key27": "5Xw72XjZVk6MgVg5jFPRc7BMqKjrrLURhfUquJcFCtM41QHU5UrrG1QSF5JCmtCMaJEkd6TB6zFktqjwrv7xL6qV",
  "key28": "2uAsS7gBzdRsEjbW47aNLWKLRzs5WoAciisHswJHw7BL78enVFuFHiJ24ZszKsds9ymKLbwWbaj3MMrC2cjpS4a3",
  "key29": "FuRYEPa36PHpNWJ8WGoYu5bW2YDQ5mcRKwhiGFgRSCwB5EHS5NzRG41KWVfAFdmeiCtAVx7SDqYVLyKXfoHRd6V",
  "key30": "4zuNqT2y5enhtotjUK4g2j2ANH3kJmKy2ecTwLA2tRQrQBoZntK4W6zEoXWT1yhLbowH6QiSRdhGsB5mPTJpavkR",
  "key31": "5nkJCRDFkKKzFtKA5MSK8AHH2WduYrRZX2N51hRiVnWewkC2qdNKs3tb5qN7yApSKyW7xiit2vg1WsfkyNFHmfhW",
  "key32": "2YhbdZW6TZFWTWrorQYbJ7YU2hrPoE8qfLLgi4ATgfNAzbt5NFL6Age9RAr7NUnCK8mEBYfkozNgynzpGqptV4yD",
  "key33": "21RVmaVnTdzdxWtT7q9eneoUN9CDa8pPNcBAL2YfBzKRi665ezbg2Gboz7TuF4TZ6UP3iQxec46Lvf4scLfTQpCt",
  "key34": "495CtDgBbEt3zZzWbCMBhhkLkJCaGxuU2REHNGsZHGkibZsy7xF8whsKVE6g3iNiD4ikRnh42LLu3ZNp9yaYs25G",
  "key35": "2MJoxCbrmwExsW6XuZWuhmz9uw5uNaX6fWg4Zj8bFyiU9fA8fXpFxCVKzvz6nD75f8DvCbyGR6FkSRfSnzeEWTGU",
  "key36": "43S5vpizmjRdUwDzpRvKxs3kUid1HK8L7ZmzjHmF8zQkquPLKoGwhLs2M3reDfuaco75dYj1FgHRAJBunouAh6Zu"
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
