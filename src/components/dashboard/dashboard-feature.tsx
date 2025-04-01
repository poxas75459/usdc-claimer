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
    "4uuhmufiTvM2m1Ws6gZyN8D3Mdd5m7iMtJ16LbMhMNpUUhcQA4a8Yvfh7vG55Xteh8rXJoCYtJC1Awghqtimjv4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "frt6k6oN2rmJtbBZjrCpKesybVoMQ29oaYL6wZ4Qe8aC555rHg5paYUtKnV8oTCmGafkasfujE8UFDsA1u7zQrc",
  "key1": "3F9LcAuZYGfoZFvRedr7HGTHW1GRvC8Ag5wdqVx58QpnGu8pbao42kD5B2AQf1MfM3N5sCporgvb4PVSZ6snikHL",
  "key2": "4Yb1hDuuRGj7PTnr8h2YCZzPrjbtkANdv2uPFaq9DZ4EBjRuCBis5Ed45iE7AXLBW6aHybW7aE5a66vtsJCwmevu",
  "key3": "3Yy5AoJSCJ37UZbCqQpDzcaZ9A7xKoEtChe6QoN86PYUGxDq7wMVzM2X1Q2spFYCk6G7GiBKqbB9TixVk1tw3tP2",
  "key4": "2a1W6zgtJhpvP3GcfZoTPvZv5cLWniaKMGgGgJ3RiEprD6XEGvWht6ATidFcupk23J4697N34ojG1HDpqaQpWB36",
  "key5": "4j2zweNrDW96fiEDphpQga3vVUE6Sitpj818sbXCSndD28oqKtdNrAYEzXbz622WJbN9kBj4mhoWuqDsbpCYveU8",
  "key6": "ueKp3iuEb3LCwVDPAnuApdBQgvVC12FFShGFeyQ1wpojdBiZtdaQn436JUbE67rgHJ2Q5QQgS2Ksgz1jG691Rq7",
  "key7": "2z8RMENWNj47D5pKWfttjdYFtyL1B4CrqNs8dv36SY3RJQDdyLfurr3i98aGGQcSqwGLnM7m8s31ppDTYnkLu74R",
  "key8": "27BfuYzGs7asdz6QK8DQDdbbLxDpqG1QVyhPA9XM8PWWcnSey9mRZFPKHSJjdn7sWPqwtHBRos8Ui299GTdTrhgA",
  "key9": "2wx9SiLfiRdvRfyTkdcBLAisFz7TGTjuHPS4yzzCvE6gRP4nRTnKafo3iDyMytkAMToueHi2d3aUk44HbvgXp4L3",
  "key10": "raGXVJJkK9Awq7qbPSqUXtTQwaaWJ52WXwFh9tjKHv1EeVqYmZy3T26egQamZPerKfHphUNEKE6SJwJdJdStw5n",
  "key11": "5HmAYcg8dQ1wn9tLF3edHJqSMmmLVkAHqn9Xa3bexm6aLDNRnKKMQnYeDdpCcT5a2DLmEhgf4siFo4WxTnMKitjv",
  "key12": "3WAawkfv8EQ1ZwXqZsJQqMh1cUDc6Lv5jPxcDA5bxSFwttMa6R4uspBK6ezQZArWzshRPRkNyHuNzKDg7xkA7zv2",
  "key13": "6qEhJZcxbrXZPvaJFjJL7dy9Pqeysrt7e2jgs6EBgT23AL6JAGb6CRo1W9VQg4kmab7QGHA1E9g6YNjYcpMccPr",
  "key14": "3zKsyaSdAs7uaj2CvwiajdeajspkGHWD8AFvp2fKomeHHGz1XVEbUM5216mk2M69dWZo3Kwui5LiSiEsgvepqbwQ",
  "key15": "WXk3ejtg6JJMkrJTcUgLAxrdDBJqnY3hvqnPNwR6Lq247XKiFubXskiatSvWULWKmVsGFPd67HJiyQJTXanSFJd",
  "key16": "4SbKAJJs1mizvf7R1y7W6P8LHLE5GkMptcKVJtHm7P9xvcLoFLVcuBWCRiJxKD7T5BGoXHQvW9L7TiNR3hmrucpC",
  "key17": "2KS2Kvm8v81p3vu4e6eRMvuev7u9jR4w7ePqHKLzH5cAeJk8gKukjdht3njLTtP3djWAWf4zzEbEqsEChDiAEVMm",
  "key18": "4aCV6knEbf4iRWY49h2yGtafVQ5KvpDBp2hcuTqP8FbvgK7LhpCjyJitf58J5fegFJoMwSEUEjNwWfb2y1B83xiu",
  "key19": "4MSsKyzusaUcT6iDBwNVsfT5jWKyAGdkxRTz4ZW7e5ZhVpS8ovR2PLeUkenSJ7fn5Hwoa2agg9SEcDYwi9aZQ227",
  "key20": "5bj4QbsC21LTkdhxWMQTygjJjhpSzJpv5FF3qL7t3JzvSqbRoM93ZLsXpYzJ74gLjgr9mBW8eZB69SQBkcrCCuDJ",
  "key21": "49ZvbeKKCTtZSis8By6toUvHZk4z8FQkzEYVaP7NVFU6pYWcL7EuAty6q48o2yPgKabRTttjHm8t9a6KfAZn2RKG",
  "key22": "2hnbJ5A5qdaRHT7s9E7UdGn4AWXTgVRxPG5HraWYywZ8ZVNuYJX9oXRWRgRTiko3A93mJCo2zDiTyLNZ3xdfUfMt",
  "key23": "55EDTWcDK29A9KJkodFbVRPPbYV8GDy3pAXhfwttfnyY9bKVeqyVqRiBjLUEr3tRxt8A1ZJswduB65BzirkkBBTP",
  "key24": "52pJfPjzzzDtPJHoZeF9fQEQYT7vyixhVQspg1urCaedTYNspG8fue8PqsTJqMjuUqyZ3RpkTA4LVKeza3yvSTVJ",
  "key25": "obm2s7Nqp25JMUpbC5ouUU2pBRmKpCkBpaRfmyBpB9uUopwC3bWHxJUmqxJ5MGQSjoz793AYeovuaVQG91Ktvp2",
  "key26": "28mf9TDYzPA9NzgYcG7YPnqUjcfWwGj3ky52fzznmFTzizfp5ebEG6FbNneqP6KDvuZGv7Zd2PvhecGtwnH1opVo",
  "key27": "rbopAXJM67zSFhc8Cd98qbCgDvA4CJ24Qx9aEYuGVhkvP7FW2DnncYHCkGYPnUunshShAGBKT4TttrCJVMBMwgx",
  "key28": "45deAdUttDvyAbDt38mU7XUucBgBTWUDA7Php7a6MFqFXQs1K8ZXRZMcLunqwLXgDjFXwe2DYV8Dh6WQ2Z3FAS1X",
  "key29": "2fZgaLdj8AyE7zVLTi7raDdWE1DrbFv2mqYi2Z9TEP1vgwQYiU1Bf5ciQ82E7WP2J5hBzVtxGjUscrHv6fDTigZA",
  "key30": "Um2SwjCewffFaFinrfMuYaLqLk4mzGTHiRQw6hiYkuHCLgtee4bgRS3uRyABSQAMwNnWfcv9CbbAc9ReuT4hYv6",
  "key31": "2jx33qjq37s2KkDmdib1hT9rBJFrgChpTNfhBNJ6fbeoNwgPB6TwF4nfVaEsUskrvRSK44dTCn8WoPPzqCHEJH8g",
  "key32": "2Vo75NWp6kJT9Fv8MHSMmMzNAMDFrmaErhaMRyfoHci1QSMm4dnrngmyvpMk3FEAeHVbSa2YVypcuqMEyd6ku28K",
  "key33": "sTf5FJ6K8Kqh241wpNqk5rCSSNRRmudMsD8igortj74nRnap6SjdevnjoD8PpJoXyvpc3rTQMEvMKfsASDUMQXx",
  "key34": "3jJ3wZqKvcMnoGt9TzHwWFRoBjCRAayV9EfeVSb6tE1ZwVDvcKVQFZxAZetS6C5ec1hG9oisHyxU9EoB2Ujhr2ox",
  "key35": "wgns6gbJuFdpQNFpVnnnwk1K4rXvqUNWBT5zgRG3nFYXRrNDmcuW5P6pB7urskrJBbJBWTknxcA5avXVyFZaW1T",
  "key36": "5ihA67xGnC1U9fjS3RGnFX47AmW31bgGNkPq5ZTQ6epNiKYgvXoCnAMBq7C3k3CpwfaaSbC6Dosr4RBKjpCvii1W",
  "key37": "2KsvLDBWG5q66U85qkcsJZjs2ap186FZo5n1pVAKWdrArYxijAP8My41TzopSG6peD7Q1W26keXowx6sfoyo1kXF",
  "key38": "bKUaAUsUSNTSZyBh7GjXEsDpBj7wjUXPvJJWE57Ps5w8UkDDHC7XzYrpPRqjRBemmR4qVgQbjyEDkfWWR9WAGKD",
  "key39": "5gh8mnzkDHtLkpBxijmbdYAZToqsginvMZm4VqRoZjvejSXZk1TU548bEZBdfPZEAi8bpmoYhP6zqEG2pQEN5YmS",
  "key40": "2DALndkyPhdAc2HBwNFBWhcmG8eLJfzAwTfDrYq4kjm4z6Rw17gZB45zgAnK8xsER4jAGKFcQDmaYffd31hLpLEB",
  "key41": "4tAjgwRAnhYj28BZ1BYugNi85VkvUdoa8gRr67RiqzTk967masxGYNZ4MTVZpRqN4QbeMqbo2vsEY3n3VHK2TaEe",
  "key42": "3R8JLM6BiZ4WftLGmXacQpombYvAW54tteDWZX1sZPR7fFByGMMVA68dFP8y8WJYNk5ARBMUYcMUDvFNLsAbYCxy",
  "key43": "5mb9BWnqHcdZtNed3txdb7gFStog1eVstDq6inMExhi9UdRc66V9t4vquqyzwP6N3EPR5rfaCpUSoRYL6tVCS9jc",
  "key44": "3S914WHydqLcMgQXr558BPscnRyPDNfsghXYjTo4heHbjmSqSBhW4tc1FQmTdqwJ5M7x3LxPRKQYQFDQZsdsFfe4",
  "key45": "5zW23yCkn5q6W7roPZ3UBEYFT6zDJM5jyXhqMJRLxj55XrJvBGLVUwdWbVN7x5n5ASqvJCiNYq3Ja4FfrLe6UsQH",
  "key46": "2a51U4yArzVtfev7vFu9UYsrzMhZY3VAJw6qAtxehRDZbC1jimjRPyXVikMr2KZ6iX1aMFiEt3ke7a6a369mn7dJ"
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
