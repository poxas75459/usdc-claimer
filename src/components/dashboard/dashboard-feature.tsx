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
    "3rc6ZXcvAP7WXdveH89S4wXgfu88gS4ayQvAxMKFyJ7CMTN8yTXNCzU5S4RDgRp1Sff6y5bTRmTHRd5rZjVnh11V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eafdiZVbjYJuk2GdMoudegX6jxMxxHFzifFPPNRRt6UwrxHcrwskFXJG6p6LYk3gFJiY81H2rx2kCr1LGkivWjr",
  "key1": "65q6C3tSRacWxa23YBS4Vz8u1rxzdvf54HfV6TnAdVCzRRKFcppaVTXwbQMafgGM6JpqtYAFWp3HerwH874p8kj6",
  "key2": "41jv5Wwe8E5NPqyxXje463oyNdCK2hkSYJCCKV4BSX6MoXUKbrac4ZiMoVycEQ8pw1aDWpPYizH4CdTFMFD1LvJa",
  "key3": "cZczMGgSyZrXwz724ckC5BLzzzERj91nKmHinZY9w9qtzwavJddY4m9vb6R9KevTKZFBCFXMifv5DtagHcDdEEs",
  "key4": "494eJckto7fiMVcfGWCoTEkTbnZUazUGxP2NwX5dJwuCHAXHkzFjv9WHzJRMKWd4h4YeovXoNTqkqjwfsfwmKLZ",
  "key5": "3gGkie8pkrjqS6DMgkQ3Daa9DPFLJGmoE28176jQpjS7rsiMEVNFL5cTAECZkiwrCFPT8EbnjEdiVHud9dE9gXXA",
  "key6": "8e1JhTdXusAWEHVtr9EmbgWP5icjf6TZPZXZwJ3KFYLRYk84hkTo8dNA7pgx4aVgLi1UQK9waWKHuqCxJs1z6Pu",
  "key7": "33qNa3DQi8kcEyo3E88rjSz2eN5aPRLoQRzXnhv4P9SiKUoGdQTby4fbqvZE9833vDYj8EV3i7ZJpic7wxjk1W74",
  "key8": "5QuvHCxyX9wgzUbQXaQ29r58K86Vj2zk2UmJUKfLyB9SkddCgTTqrPPjApBaeCtd8385EGkLSX4agrRWH91jL9Kw",
  "key9": "5RtUdKQumVg38dAV4CeYw7KNJdzBeKHxedoAdvsyAUFiU4T9WxKNrX6dXfegr1ouCjMYp2m1iSnBXmnv7RJ3d8NS",
  "key10": "5doccCNRZExPfFpbDYQFVQPCNEuu83HddwmCjP2z5zAXXb6eQpetDjE1c6BdafWVfx5tWsqnsbGmd9PGvoMLFMkH",
  "key11": "46Y2Q7hHfDFJHAedQLJW65NiEhqSy5PeYrsu9jNgV5Qd6AURgcZwfSJw9uvagSKXmtCtWZe4XZ2KiWASrA5RHRBD",
  "key12": "4EdrTjV1CeqFpHXJKkmQTx6hLUQ6GHveQvyFShFjhk4fcKoBbETrFpycFyiUuK4hkQzht6ZXQacRSUqPu5vmYKU2",
  "key13": "PcRs1pKBk4hYsCuRhywRjXB9ktcDjS5yyPGp93EAA7iAGZYembjf8JafByB84d6ufi5EsGqkvG8A66PJpVE1Z1b",
  "key14": "5u6i8uEF5RTPiq156r2ZfN7CjZTzTHoZAjyJpL5BCZPVtKA88XsxHASgokjrkrJkmC9TBzxapNtYKeDe7JqBrPyh",
  "key15": "5aQmv6bNRaQxMnRzR3oHTSnHQHj3iNsc8Ui7NAVTNa71XtGEJrjN5nyKvWMP65Rzyj4kF9YddCabYQpESKeNpVpm",
  "key16": "t2WgZdFYq384U7Ru52yrTobAYNpnKCh2UicPXyxuZZAzv2n5f2X76VWsvUNeK6FJNLauPxpEKRBTKpamtoSUamq",
  "key17": "2fRWP9g43mm8oUyd528xdE9cSjzp8ZjQrN9kBudFzRw1jE7mMWX665fKntKKhKpjBV2fTraMJrkjMfscjaZ3n5B4",
  "key18": "4twhLWYY3ZLFqP6rf191LPibVnKHekSsisQSAgd2mkvRQfzLrbmgn1UKC6xKjVMbf7JCZXpwySbNBvtdpHGPCHL1",
  "key19": "4E2EYbwxQnjsRvhHEgras4ePXvJpQzy44Ch13MqAZkykAFqctL5Qa76CwukgJ7Vt5Nz9LSpAKinbk657Fg7LGwcj",
  "key20": "45wygoW6PBfEFu6j7L111vcD7vcK6XSeRyQe9MjB5KDmbimqDdRTy9jBYN5cWTqEr1sYgieqBWRaHPgxMz6Z7Scr",
  "key21": "4znn29Th6MkdJTbVDm6mJjF6oo6Me21EACMzA4YWANiNc6LNSJmkhG2wyUv7mTwndDjnQUPzeomc3toaeXrPtSMf",
  "key22": "3zGGjvDdPYeAfsZVyjuvSrQiQDeR8dVJGs1YZLrCAij2sfN3tRZhdt3za5EArzo7Ea3qwi37e3H723Lx7CvK3SkM",
  "key23": "3qcztmyrsgtGG1TL5mRG5WVCwFSYppJq56if68ewoDiKfCFmP8duMfxomUQo3sYu35iZNRDbPqtpXfy2qGq65r5D",
  "key24": "5qPkVGUrPdLaGFpQbTv4qqLsFXAZMQYvU9N5Sc5rFZKr19NqxXBKjWU7gQeB39fGDm12TcnwTfjKVLsbF8XWjKCb",
  "key25": "3EyLkTy5VFSQofht5HRNhn13AAr8vU5VPeuByxMUywzP3pgMwTRa74saramtHP5Vu7DXCh2WQE422bzTRNNtPdTv",
  "key26": "3tcHSJAzJNG9eLHnDXZhzME9MPr8vAaGG4AyJe31Pfb9P3CPTfrz8dfJVFuBpUzosPRW2Dcm6VsiKJsM6GvsKC9c",
  "key27": "47QZmSt1aPngSSxunem6rBajDGwjueQmjv9mYbcDFuAW369EXEDJCibP48ag6siPmnB5ETi8rC2aansoJeFVTaC",
  "key28": "3TmR4WJtezxqWJ3QC6qr9nJiRXjwdK6vTc232wdZk5gmHBEgyGsUWymqFfe1t6YjKLmVQGU1ky7meoTPucqhR4XU",
  "key29": "zs5ZaA2fLPVF9tke25N679iPcRSPzVComG16FtR4ooZs3G6Uh96TK5Rg2FiRApKrcu4VSeWEzq8aR2Fxqaat41U",
  "key30": "4JCq3PMvTo1wsUFnGZamB4qkXSyGyNSjr6ctdrT5aespxVoTaARUU5LR63xtN8uvrqNSfag3EY4pGpnWAXjJ7vxy",
  "key31": "rueUWk4hUVaYidAVtB9LqdXVSoJySDNPzAw4k6DWc4ttgzRcWbp8DuPxa3V8Hruf3Xb7EytUGis19FvCqAEeHG3",
  "key32": "5rFZfMBiPqtSVNRi3EVevAjcmgCFwe3YqmT4RpGfw4xHbUhbYe4f5nNjwN8wcbLSU2BTEqASVkhTTWYDX3wufmy1",
  "key33": "4NgsEceNRjzFGequJSHL66skKg2QUsXxanCkdjhPs1cSHXb7pKQHHUTCUzkrxyDDkm4AVEbY9L2KDnZTaeXXiwfB",
  "key34": "2q4NzkVBj5Uy6MuwPUmBjN2vC2berN8a5cSg5SbAqmKohfswchG2zamoR8EjTe2FxTcqQDDty69qRnWuAYkauQv9",
  "key35": "4gXw2g9vDyZeG2EiMweRacszznqcnVpaBJqS4k9o5Pr8VEbN3vX9UKqLVj4fXPUY56Qqixa2FsJm6Qckiozy1jg5",
  "key36": "4FLA5nP1PLCcBjDSQhBRT1ETQTe4tMjqDBnpDg2GmaXfW7fip1oZR4TDhnGKbzGYeRmSnACsgDEfmNuLGkAACN8W",
  "key37": "Q4myqUdJRBAXHzvekBjsDVx53Qw3GyurM67rdAX9M3ctQd8f7hB7rHoTEGM3KzAExqhjkm2zz3BezVy6VFnRWHB"
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
