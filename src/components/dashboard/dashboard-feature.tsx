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
    "hef7RPQoquP5roYcL7aYkEB5UfKGBKGH2ZxrHeyKXueWzPqNtPWFB7875g7bqarZkgiLv7suh27Unb1w55T8T3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65HYtaZ31cBgFLWPtJP7KRKuFYNxaCGeqVuhQTFG128zyYAEAwUETHCDoq9NQhZArett8QKrPG4yjv8Mdufn52N2",
  "key1": "2FY5wLMCdLfvVbfSvByggdk1ZjkWCMB5gNZaySjhNAsjFVpdBGee7cyzdHJtvbGe42NHsGAPY9Sk8E2EjGpd4F3C",
  "key2": "4P7z7yTie3h1a8pgK9qVRGbRxDXg2tuaB5qnmJhZbySsAKK8x6xg7K3y7PRzDVGSFCmak7D8WYixPFQdp4nTxVZq",
  "key3": "3uTWxnKJZLdDe4KWbWGdgatWYQfi92UgkSqTDBjMHcXpwWRuGNeJqe5CKbkg2g8v7ozYYjUxAf7nVKVUG9vZzC2X",
  "key4": "h86YMxDe7RXNaGUuoLjmcAShux6MMuFKJfUNpBRLDogegyHjdabFuT9NypibBKrScPL4yZugexqS9otfeCrkQT5",
  "key5": "62aEBmeiaS9PVMWVH2epsM8NZ8ogMbgCz9kvMJ3cBk3j2RabDWehnN1eo45XgnttNuYXTa7JHEzxxU3pSj5H2hEv",
  "key6": "3gJQmEiyBX58AKaG2ZJPtxemp6uw77tVxG1Zy9H5UpWD2f9H4Gaq38uXoTGyVGTgGdxAyspkGp3vkzYeAJxgQF6m",
  "key7": "2wjMMKskzMNY8m4Mfqm6qjHmMsUAVMBy7TzRwzr5gB8PurCvynnytBPq6FMwEWvd3gEWbJon1tWrBprPCAfoWRYP",
  "key8": "4Ljh1SuENc1aXTprX4hCtidRC91k2TpShN6uJdg6ikHXyY3hQECeJUcgXeL2jBqiExG7RDAPu7JAS1yjXttHjrwX",
  "key9": "4djMKdP1YJjknLwisavuGy7wm41ZtQLXjqLPjqrvsSuuWDauYahqPUKsFF4YjjJ6Cse7fwrQjjSvaTVV3bPCYj8K",
  "key10": "4N7AH6JgUAHCoN74GeeMMoh1nS3aaKfZ2fjzBfRXwXFp87avc8RnziPrCjp4hLkd4ePQuxFHjJMWuvEGyysUtSfn",
  "key11": "591aWWnAZoGyfyXXCCoUu2c2H5r2XYTTmb16C4e6WbS2gLBnVzjUA6xGBJT4kSKQ6NZAQViUV5Vwky2rkYruUTRK",
  "key12": "5xW2pqE7Utc4TZuTDk67KqYaweAMWeGXjposF6sp3pLcYhiCRg5JZn4arowSMzJchgyhQJcBt5AFrKtmUFXgbvzv",
  "key13": "2PMMdJjVBgGLSbN67CbiAqGoYT1DrYRR14pzWHr9u3VKrhogkRQGtiXVSXFkVjRYjjGpi5GACqRazzhSBytCoewN",
  "key14": "jxDL6dfYNKYpvY99SDUmqj7mJ9ezqUmJRvYyicKHJHp45v7oT43iJMPkm2eMaUG6ZTZHKiyimLkb9ny6mjK7smu",
  "key15": "3PndQoXgVm3z53pSyVVjYzkFRpQuSfk1MhW8PpQ9S3a6JqtgnW98ikEj9rrqjA9whP8gmHjRxcxJczKR8GBaYa8T",
  "key16": "oLjzik5SAUTBFpZ2oS9ZT372Kd43curybLnDCkXgvHtjM4kJC7ZyUJkpUDjgmuoxRsBF7z6d5cnVzWkvzueU9Y6",
  "key17": "5XQNMmjKYEmWRy7hp9N1zhwJ6e3pVBso68mjTaMa2bph7HDFgUdbSqQiuMq2wKU6ye7Sj46VcJzj56VPhmPKftAF",
  "key18": "2TLfixpzDCwiyi98xwjjri1Ef7QNK329zsyqPU6vH89Tj3aeZrFPXtifPEARrZRwYGa5RME8S6VaGwyY6KJesR55",
  "key19": "648Mj2C4FzHM492ZKX8iqr5W2fvSAFPFmBjdW96YD7RLEYYmLQdfY6HWtZjHvj9VS2zpzi7JV45PfCCvh5UjiBy",
  "key20": "ar6xrrH1Nr6TGcLqVPUzMniCkEwqtkA8Royk8ksJA2jURzyKz39aJYakThUBdHDWaKobo1SSZTTFJGWkDi9QkgH",
  "key21": "3ZjnafBPoyXHPzbVGjACiySAmqYuvUK1RharELeK3Ji9AdptenakbCvPrQk7Qyj3rTdS1N5fFVGGDQyKiTt55R5H",
  "key22": "4FWUeZbdkzWXWhYyS6T58TogYJVdX4BUQhor43coGwNLe9TrJtCruLrX4duoqZRobu1Z5TGf2fz5UVPK7uW8SNSQ",
  "key23": "5sCPToP2mggTmYfHdVdr8T4K67U9MB7Vgjk5Kr1HoAfDQ94sr3BqkXEsQ44MoaEfHSAYxhxwvNRQEkdQWhqkwyLM",
  "key24": "GsCk4ZbXsjuBh8rSKyQwurQqWwZgXR63MYTcMZkCdgpT4xU7qeQRde5pZJd3TZZMjzYqDshd8p9jHiD1rH2Kh5r",
  "key25": "5FzdHz9ae3QyPxSkrw9ubsRsjTS6JbCFWRsh8zVtHhgacQmxoqHhzj9ez2BCEwTg6FyqracbPfKmjyon6sJgwj3T",
  "key26": "4h8NBbs6dGCzSexoAPrpCx6yZXZy2mc4q8JtSjA1EoMD741tjw89bfuWXnRSNmu5FmjaZ6bFeK3sfmcW8FmmBaqn",
  "key27": "2AEC8ujnYL4kyxkNcXnqYHaAUBkDJC4fdsX3jGAoCCtnErPFAuzLAZnNDpZamM3y12GsD7mtsLm4EPAdUHgaQR2j",
  "key28": "5G3QA3v8Km6t4mUXqSQ24TCLEq6eK3EJR8BoqFT6Va6t3S6ryrM6T8Z9shvR2yd7BLyBp9hqUkCWSUeka5zcDAP",
  "key29": "2wnRfgTjAB86C5uNWmAkEyMj26mpCGv7XKET4fKvPBpwA1ABmjriLLxoUCEWpArsdNmGZPFsdcMrpo3Q3DZZQRYJ",
  "key30": "E9rv1rRTL2UK6e34ASpKQoN9JBAawADa6ZXWVedF21FXWPcMFpcAxeRrxtcHzQPAQG7L2cbUsfKRwCeFCNJK2Py",
  "key31": "28CxqEaT7wx34ZqMNay5JSqscM2awrnzmhGesXzBeMvUnEwX56WvguMrEd5Uo55YmHzk1bbMTwHcVKd6Y3LZrzVJ",
  "key32": "31KQCrRj7gVfwfDhtrDFivz4NBk4nTpVA6Q9GNPsxmYqSWjjXQGraMUPWCdJBjGFrXhfyNE6sT4RqR4zVTZCGu2j",
  "key33": "59PkMvitdJPCics7Fk4B1bMW8hpLawMSd23PyfkVC5jZu6tg8nf9sVpMu34mGWURfCoGren5jLQTNDGYqenTgNsc",
  "key34": "5qqPovWhxi671osK1rZXAd9fvWxPL9EBHkyCgoWq5CJ8DHBgyZPvSBquHPaj1sm6qEUYoq7Hwqr22pwGANqh7tg2"
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
