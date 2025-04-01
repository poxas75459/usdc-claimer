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
    "3nGaBeRVaP9bop7rAw6d77pJdY5drzJcyMY4RKVvX8iNhthQ9QTgBcPoRdK8k5J34a5vaYqVSsPubw9Fp9eXard1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K3LzDZSQEaJ3JUVHBrPJXGJV5GCNLbAMXv6orPM7M3SdxvJSMc9ADfka4mYxTHsu4Ee3bmcHyhz1y5RuXkZfUxj",
  "key1": "ULCnqbxGpxPyhr7rWfS7KTUreEAHscZpuGvMekTMGdNEZSHx9c2rtGucCn9sTKzcfK6QDvaifYkwmQhdh1WovLX",
  "key2": "36pJLw3V7CRaz6YegSYpJEgvFJX1XrdNXzjWQm6JoRD3JcGnh4wJ7khrC6mtgpgKkqYexASRERVcxWL4E4NDApjV",
  "key3": "4Kte2JucG9a9HFHFqHhqGpjMaRGhEzDTTf83TPrW8WsZEwDvTDqBWL6V4VjUn8rvZqMDVJe83YcPVN7XTykkCXEm",
  "key4": "47eX17hBwTPDf4GLVGo92FTYhuwKZKY8mfJKZptrYSKsjNreJukGi8Jb2fwYehwoKwjeGFmXZEQEewshxsaAsGWH",
  "key5": "5CVipo1hbeNfxexqQFnkJgEdViZi8injn3tqm4uE265RoKazHXTmPUDFEcfNfTHoDcBHAc6UUu5yUcFPykorP6PP",
  "key6": "5iJaV1jbEst5jeKKWD24HCUR88uznuZkQ4QCNyzufj6pdKfrunzNFySpZYhgVoFnfg6WwqoDydcem5ZUKryX9d5G",
  "key7": "5zhQd2ou5Z2rbByp2eNkeEt4mKJg41GvHAVk6LymSBPaFmsPhp81ajNEoyZq2BCcvHBHCVQfsBYWng1poy6k39XX",
  "key8": "4qYVR9j4AzZL758w7639Bm1trYQuf86fm5LBLA79bzhQqVMwRYE6T2VAjjsekZJ9p1CNs2orxVyLQkNshwUwP39y",
  "key9": "528LofLcpdfceb1VdGE7sT6kKeeHa5KZLJbuY6F5LQZ9gB2KTSKe33nXCQ1NtpDoLA2SCCG9KabhBXZqgKjmnoKL",
  "key10": "3UqtVvzbcP4VjmJ5jRiZFxCvx75Xetk2twus3gfYpD8RnatTfTqcGqkT7zjB9BfhdbVJJ1cqAqSY9NKHn3ideHpK",
  "key11": "2wh6hnWSCb35Jz1voz8uUnjZBDmyTYQTLXANAPBS5CeakPxuqCqDVqPpy7CcXP7sASCzEnSFBwH2ehnkdDtDVH1c",
  "key12": "5xb9CiWu1uUB45Us9QWM6z8cNU91JukzRx4GQRhreAZCDPLswjcjstcQ11p8qm55mF143fxftwBkZk5uPHNMUQQq",
  "key13": "j4J6dkVDAmpxLBMNb3tU7cgX6R6mpnRbVdLoPHXKsekLNTouX9rKaRJKukJ24MhbK2CjNYeNBKCGxAgaMbMs5UQ",
  "key14": "5Ncj2Yo3tprt3MaHoZveiQrxyfv7E1SgHPpG4y61465HTaZERtZsxdnQGX1NYzJ6sodqWa5tebNFFyoi5q93FVZ9",
  "key15": "wXrp22eF8iBb3Ko9U5YENnDuZfhLf5PWbNTdK4NY7Soyy2Lbk23GpN4JoQRYMw3BJyyJfntHc4LHM2eSHt7286J",
  "key16": "4YxsHKcUTKLPqgH96iUaUaz3LerAriJMeWfwm3A2fELAcRvMtC7JZtNkTMfVRdVyu7oXwTmxZ8JW73qiEM75BvEg",
  "key17": "5623kwfeaNreutxKZ9Naifw8hAWw8Wi5VwCj6jhTKwgje74LcZm8EZSmT7QkhrApPVacbaWPd4DatVj6znTLm9yd",
  "key18": "3vNm5RJMZeNp4ooempwY2JnMEqo2uuKVdNyJ8f46P11E3T7uzm5JkFKDp7yAHBkBsgF4bmyJxawqmxoBtLEtXXhF",
  "key19": "65iqDENWuFw4ThjdVhsLrDba6QQeu6C2edcRX4afxMiARsirpXbdfNU9TimoXk7JuEQ6RWhLbwb3g4ENnqfzw41h",
  "key20": "4cn3ycgizbdFpjcx6P97eN1th7s9Ej5skCA1hZ4XPoznupUM2PKewFCyNDgmrWWGwKN2xHBhUePhHNmsndP9iVCZ",
  "key21": "2eV7XUNCidKJwgoYuq71YrhdgfTMV4djMLngPeoNHwX7VqouYGNYVRBEjQVTc6Mm6RAdVbtWjAf3q6fqYSvAmnja",
  "key22": "2jWSrWkfvWHoGbdacMui9z5fmF1apYUSwQ6HMSzjh1scZbhMq7fYoqFkK9Dx4h7Njw625HfcixQaXRu2ui8QDyVQ",
  "key23": "2HHCpG2pR8U198MbBwmMGN9QtqouxaBR4dsG2Ko1P2KjEqkGyqWuP5KZqjyys6QWFUK3hQTSHuLNfK4TjjmJLV5V",
  "key24": "hBnonkA5VWzmvii2Nt5WW7LeZV1XwL8BC8VypcWehNbuA2yZBMe3e1h3p3PqFSqLxuem9GKdbfCRkC3adbbdj3g",
  "key25": "nrKPtm4J8RWMiX7ZDRMGML8Ycr5gVtSovnCFV4sxbDjKGRxYf2o8F7xzUF7wQQcKNVEDNSEPRA8WVyGY2C1zpJs",
  "key26": "4GJAjCehwTb5yNTC6MTX3fEfmo3j3ZvBc7tDmLYfhiEUNWJWTjhysVDahgaA4rMTALABSkm84WJ9KgW7UPFPdKi",
  "key27": "372HfBo4FwmqbSkUBHQhkfyFa5duE5LYujyt5bPsy7WP8XjwATHk2LHq3bo4EGxBGDE9o5rk3wWnUudCs1dkn6cx",
  "key28": "cCAjhyozbEv3J6r2gYNc6ffAQu5kqNbEnu2Jar3htXp6WSENP5VjRepSyZT3PnjZDCt2sQpnVgT9vg4psVSLgSU",
  "key29": "7BFhth1Ef1whkscQDi8Dw3JJzJHh2hmvwuNVKiBUAWS66kyKDDjy2QzosQJneDpiLSDRCt9yA9GPwzdHRKxyn8E",
  "key30": "3A8s3JqDNM6RFijMmYX8XNSwxuCgB2xoMSqAtqy421h9GLXxBuVLfGMjofnFAUcjxvQayruWMc7iv1HmzJvpahNE",
  "key31": "3Pfd7zYyZVik9WvRNYY8xV29CXk2wBVZVXqXJx8aZcLdJpfAHM6KXjF6RPo6FeNfKFcW4MzDDftQsJyAELs5QfEb",
  "key32": "4hx1vjiNAzPxMePPEvpSZ2kxSUhnBtMtQ7LWCeWR6QVJ4ZBxhiuNkVvCt8y8z75P4oYLoQoorwckk7KRxXaVqbu5",
  "key33": "2Fr5QM9bdqmxRQvwvexhQYNcrJNb2bHCh4nRtinT8gw6TNLfqq5fQDbF2H8izRuonYAv7bxqaMcsos3DiZ8px9tP"
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
