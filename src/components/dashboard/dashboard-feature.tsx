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
    "31PUXzjJnzJtJ6wqqRmmzZS4pzXDPUEmEXQNtph4Na2os2gT4H6i2VwKC1d9uGT7BXXm2BJCx4ssGDQbgfsuzcVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DBXpAna2oJdkv9esMpiMYW2zUE5DD6Rro62iKzs5iUWvkbrVAroynKkXv5vxjvV7ZgnqgT9aSQfDD3xdywSBfGX",
  "key1": "u6YYZxkcD4o1Pmkp1YuvMyDnPBWk5Q7YmtPsfJfn7ZvpMxZtcFDUAnv5Q9nUC3VVqyTdGTaT9JCZmgE7reYJyPQ",
  "key2": "4V4PtCqGC9bJT4bp9VtHcEu24sAN35KJ5eBx4E9AKPCm6gbizZKze3T5sTCqiStiVBt3MUKvGRzU1nvajVY6QxZc",
  "key3": "5LidzeV2rdzq6o6jpvhEG8biwnEewruj22SNU7Nvo8QqjHTeU2zRFdRCHLZWRULZhSkTSEGktvSrc4Yhc9jmGcfg",
  "key4": "c7ahidHS73mLwhVwiPdkHW4GMyAQBJceFV8EPRACDE56JFyDES2Pnb5yVgq93aT91BZTWoK3LCezrrsrNTvLQxm",
  "key5": "3DK6ApVbVHyGTSjSqxqUYrJv3UGpgLx1tQvm5H4b5g6n34p9faF9F9fhvwiFsJCx89qbq4MzPPvTZr397G93EWX1",
  "key6": "5Znann4BktnDvVoZgciHEG5yxYPkoL8imEGkMajFUP8xqYkp219Bk9xjmqHyWeWhSZBDauaYkhc7gfGtLT9f8AyN",
  "key7": "3ByDiTRENtGTzY8C4cxD4MJZsSSJLdwtGBfY3u9v1cLNqTsM5BtCMit57juN98YXi4eKMTn363qzPTfXmYBiWAhJ",
  "key8": "26FXDTw5Y3KwbkCCY1NDkGEqH2nuJw9vPV1kRoKDiaAN3QvnN7gh8VRP7EPUDtyhE3YzzSxK1XSxRrct13hhSWpi",
  "key9": "3GAAb6R7FD4miyFgWM8uBrY4w9NxX8ednVvz3n3NGVLyeihbBXv57ZYvZsG6SrLonKzfXBS9coTYoJkKnyX6G2sb",
  "key10": "iNecSm5SLmsd3vCUr3hm9mCZVYXwECUoy37SPnGz445enM835hEZnhfmuQYDajfhksttwcxTr6zdyBGZ521Sj1n",
  "key11": "47vTo6rqXEv4toGEr2AmA9Cvf7z29feFgvC6VzwAu8344AecMtR9Fx2c9TuuEumzh85B6h2pHbzVBaZKtB7tjJJk",
  "key12": "2GUAbiQ6yfDFFBXNNWm9zYC3yKDJbfm64zVTgJVCmmWUGpiEzudX6KMGABU1AXzddDzw1kqfBie4TozNSN2xSrMj",
  "key13": "3yiTJgsxXBZ9XtbjYo1D5W6ozYnW1U44EvCA3mGWQ9FZarJDSFrn7Wetng94GbrQkZAVu3biLdKz44QtEYfWARhv",
  "key14": "sbyGar18gQAMvkUbbmi8HMo9V78osYJFWw21mX9PDs9xaQKjxN9RfmYEn6qP51pSiMJNXzNTcPVnmQdTTs6hmhp",
  "key15": "2z1JaxWa9nYB4AwWuTeu3ZnRQtZiTKQvrsLwmCo4YuUREWvQVwXd2eX5X7C6umAen9Jtr9w8NnSmJvFH7ApBQDo4",
  "key16": "2HcTbY57JJHuM2opdvxEbsc3EhDXAvbCXVhvM4gcaseLkhyLzFGSBx9kyEEJ7Buc9TSbMKU2ccXNtgfGs3dcnvqA",
  "key17": "PY7rB49n2oCCTwJFh9JYHtFWCm87dsVmS318gdGPrULjyMZXZtAxftomnFZgLRZJW73zLt6g76LjEPjbkoxB78g",
  "key18": "4eJPkMdEKUKuk3DNXD3eJWxrUkYVDYtKnjsvApXAcELiKaiku73mEHXbvmYa6m7TiGjbPppfKV4W54DWL1wNkASy",
  "key19": "HsCu8rA3KZVFPUXfUJjskNgKCm8zRP8JdPr9LwgD8FwpwfFMXzDfPuekncaQbK7jxNGBrcwAx8vMNP6AYqyBcZM",
  "key20": "63ArxhqrnkwCYGiNt7gxSSc7VKnfvZgFRfyH7by8232pHSSJmMBuRJnPQ1Ni8h8YhpkykoxSa8BnPDB2JtmbYVHA",
  "key21": "5voHkSnxjs84cJQeCXBWYxYb3ptAFBLNzJfTX8ik211HMykwLRQ7umD1Wkx8UpeNw3Gk5V9XxK5idZmu5sWUEStT",
  "key22": "2NsBc4gvx4DcYto9oY1vaWXPZKM3m1VWRdfjWykjazooYi2R5cJcyRJsjuSBJ4rTRZcyg2jjb7UkoRsYDdz9RugR",
  "key23": "3PPvoZSP1wZZor9FKSvZyya5XucD4wKtNLkAn99ovdtjeiXzqpdH8xJfLX7oVb92e9tUVQXAneFFErzeMxMv9m7r",
  "key24": "4xau5b66RtjGtzjxdedx9qgjCZxPG6cWMTTNXwpaBqUdNZzASrvJQafiwmYyMu4UCtCKveXgrGiCKtvPjZTQJMT",
  "key25": "3VZh1uD59hSgDogV3Y7Ud2AY28WwJaCfvCdUw8fA2FNUbKwmFj59tzF8kdMKBHrhKcFiVSehiDFQn9JB8GVSNu9o",
  "key26": "3bxBk3UJx2SFvP7fGgcmwuVpXh8jLCEfVnqHoDikZyK59a9vx92Lt3QR7JK5fr9rt57ELoMMaKS1UAvgQfYk5Sfr",
  "key27": "5gtjiiUStmgTggyhkBsATTMxucLFeFjn9EFAT6nkq68EJbWwdC2Uy5wunyhFzCiWfa7wPgqAGTxwB7s85p4RXT3c",
  "key28": "2NxQ5FboXYc2ufrQKDgymmYaxerikC6uqYoGkpWGE4bdUb3GKXgKQUh8CXTP16suKndWvacaB2vUGJVh5V4tJmjJ",
  "key29": "5t6cWCnwpsrmUF1dnAAajCJ25tkhX1YohiCAJgzEBxiYpp8EpmwhNxvphjyRynz7BPz2T2xzcJL2sso43KCf8oG",
  "key30": "4TqaeWbRRp7QWpf57UMhV5rny5dVXixrxogxR9QVjTVKJas5Mb9kpmNDbr7mLdgsbcbdMXTRu9rAYwtvDrHeXPj1",
  "key31": "3KSrGuSxTLBVKzooAN1FxQaHSDW9Agrwdrua4ceEa7s9RAeU6gY7kGWQrYC1gyygacNBcrtk9ULHcWzkYGsmYuvT",
  "key32": "5GDH5jc9EgLnapKqPPTqUimCrcfa41C6a6M8Zu8AFejsmFyZSghx9Bg2692vTJhV6UjNa3vCkiyVJw7n3TyuSN3v",
  "key33": "2GSiatTEQz64oyqybWqMiwyumZe6yQWAF5u64x4NLu5oLWSYQkdMUEE9oYAjsm4APFjbi6kHcaWLkvorg5Rd2oyv"
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
