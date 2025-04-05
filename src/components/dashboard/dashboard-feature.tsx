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
    "2eCNyeg1G1iwdNtj3L5TKKUfSZzBb51MpouFUUcTfAodbscfy8GeQKukjGdt9V7ipg2rgTTewuHH6vipJQN8Ft8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5krbmJHXs6bJXiPkKgnPso8r2D9xxrR6cBs1fknG35aiPLouv8psA78g7qFUB2ZxEWiQceXRX2PX47Qe647wZiZX",
  "key1": "28s4YEcYj8v4rRKc6CejRHhoM3rxLzHgSMHgsGC7qSFWcbfnnrwoAugTjT21xVFv9ykJ2NwfQaqgfBSJC7cujyfz",
  "key2": "W9r7AZ9wnaRvaA39b6UcDgw9NL4UGV6f2gftAfQqrQyqjCAHCUFZhAxDXpFURsA38c8bFr5qvqEUH9AhZAEfiKN",
  "key3": "5gncanM1X5M9AZncEr3Nr3mdGomHriDRovysrBz8NCT6whgxZg1FcU3qXsn6B46NbJdiAh1vD3bBnpJHtNUaVyd6",
  "key4": "3R28WWtgtEMxism9KN4vrckfuvvKKv2tU9xTMt47oLQiC6M5ZLs7YybKMhadWkMbRJ6itJRW6t3sdEo83Nh9cRSf",
  "key5": "3CEo21xUgtiAJcFia5mRQkjTXR6iPaNBdKHwjdaf4Zt7X19gv4gibbgVrCa52n5ikrF6RbtjVZCKX4q3FZdLEBRW",
  "key6": "gj5Q48RkwFNXZdUcKrAPnip34JoMXMBFGyf4jTbTtJ62c2sUZ1GydKrJC31n6yDbEvd9TNuH3D48deRZX6ioi7Z",
  "key7": "5fNxkjbZqAczdihJmhre8FYTt7xnQpgyfNVbNUYyGRAZxWX4Mjm8bziUuQeMR86szyA6xEPLbbM4bmmKCH3Dxw8A",
  "key8": "33Te8oZJsLERznySkgCJpXUi6Pt3tSRFtrZMwGwx4KA1wBNVnk9QuqUHw4xVU2NRJiKmd41Cvfqcmc2zus2zLR7f",
  "key9": "4ZwnJAYuFLGJSjQwr5joSBct6c3mKNqjVfs7PdEgTK9xGN1QL6aNZfyk9JiqsSoc3PXYxnVqB27bPEBu9SfEe3BF",
  "key10": "3tMzpqLTySj5vSMnCxhc8wKCZhQvQfUTjdDiC44JQRHQASXYe3ZwtVjghUDcHA4CFRmP6uwEJBAT8pPzrwtHhFBj",
  "key11": "3uChmME63vTnXk3Da9GaRp4QAnxLK9VcvUgtCYiAb77YEHtnHm2zYqkwDXzQ8jA156MYjd58DFVRF2XUgHpjMAYy",
  "key12": "43RAN3FhtdnXAPpqvTCYm815D7X4pHQ1tb5h5znqfhFk2DaNaYmgRQxUVigLb6chP5fDFEz34so2x3PMkBjeCYzL",
  "key13": "2XV1wAsULi5pCUGXtzrwKCo8mu7tXy66s9aWmszovGtTXA6GZ33ogiG2kjNmXjj6avxwBJLBwdWsYMQeQjfiPamS",
  "key14": "5hmTEeyjUEj3DbN6xSunnbWJHrm52iAJei5jp3oMGntdNvd3bvFmgZHCdwAgDnCnsFaSrV1aWjhxcEaqVnBFQ6wu",
  "key15": "MC5b7s4JTqBZ5ep5JxptK9ghM7oxKh6ihbXvPhCkgYQct9JA15MgdKHEpzwYAcFCxb1WriTj7XxUNYWrgBxZc8K",
  "key16": "wnZfMx3dxQPFm2ZJMz4nCMzQgoJzvnLjYGbXy7izLToaGNcbZMi2AeW6tGU4f33frCzSUFvoHUhLNjwsJTksqUJ",
  "key17": "51h4XHDwyTXAFZ2rkCWdzbcJoPmHfhjzmVqF5nMu3rkCX8dp9c6zt3KEcMcBNw66D3icbTpbYdDhJzHkZ9AQAvQ",
  "key18": "2j3TxsLxcXGTcMJqLaqRes54k63SgVBe7V4gdWQDUQR3o2ymY3taQbPH11xAGMsxUPzP6YNuFh2Fvz1vXC3a3k6i",
  "key19": "4qZHWoUzvVu2NEiT9HYUvHsDwERQBhrkhZuCKnNezi7ueQ7ZhbJyZyyShJiyBmHTuUSxrK16ME7aqS7NVVJF3eEg",
  "key20": "5nz1BbvJuswy1W67a6bHZup3e3Aidz6gUTQb6F7sevDxSVL9eoYCMgkmaZqHQXK3hiEemuvT967srZj9imytQjkm",
  "key21": "WoEkATKB59JtcJAK58viriJEeY2RGW7aKqMHJFFNpQZftWam5z6shs5WmGbJGk1XtDfN1JR7nQpogg6psqG9kgv",
  "key22": "274pd4yfcnozdHVodqsR7kEwSwnkv3rbwDABMw1SDrEyGiYJDAJk1s5hSJJgXQ39EqkRsFAzvjDx1umbq65vLoNa",
  "key23": "4h6eovsUcHqDUD1Zs4gqjkgWVLBMfiEM9gER6LMDoCDiovo4VHpK69JpUSUyFSxCgdeNAn8XGbyvwa5GiY5VDNcf",
  "key24": "2ucuqaKVQ7fsYbut962XQvsPMrasFS1pV9P5aZMoMvWn1Chhu98UcPoG2y5x1TP64emEFrv9gzSNj8DBFgoTDeCJ",
  "key25": "3UdBW8sbFLwwHReg5mvcybKwwgB7FQBfrP4qQ1s66fxgHLAnPx8QeSdDwTmBeoxbQwfJADb5mQQM2VfGjoFMKt6U",
  "key26": "4YkiYXBWAHa7MSRfrH9FbELjFCFCx5NVR6r8fsP9zXhaZdn2BRGaQj3AYE3baBRhFbTnqLdqUfVGCMkGSgLRhcZq",
  "key27": "2RoHcKgJzv6bMW6JtNfrMXjGkyBSLvAt9gp2tZ2D4iAxt5ZN9iEjgBfSBHbDNuJbBdzFSYZQYL7yYk5RR2CzDDYY",
  "key28": "4WER61HvqYLP6MLcBSAUuFbLbHL7uH2nF19inyQ8FmYJoWprKKBkYJfty8Txk7T6uCAWGqRbT84fm1LW3x7qGLLc",
  "key29": "z6PujzbQfoDqGqEaHADjx7KbUHCMLkthEQbLuNoDCd7cMAkHSKWYxk484YcJvm4Ymq2Fr5y4PHN5fr4unUsfnXe",
  "key30": "4PfdX9ncqqXNAqaoh3kzJT4mE9PpNkwbEPkeErHRomj5CsRfQSseoxUTGLdPNm7d4N9NxRcL8bUSRz2AjPw9tV4d",
  "key31": "5xzTjb8ay6uh7pgMLMqyePJ9bn4yDp41wemfZXnoJyZVxiSS1wupAwLit3rLLKsVwCy5p6SDWLuhcMz4Ms9oy4eA",
  "key32": "2iaBcLPHLLiFXu5NtvUmJ73o8VjTjVNEJsu5BEuBoesi3D6xzdmp9huRawYYKU6jenJgvCbqTcXPKXXjRbfXojnu"
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
