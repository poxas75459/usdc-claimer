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
    "4uM8prtx2XS5hF8reG45gQKfKqf1Br6tPwipcHWrSAyg8gQJtEFsx58ccE3Ws64QMxECWmAGnFYWoNDMa6dMZM5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CPD3yWvvyU55p3asZfekNjutMUEs4e73JPgJ6qqJXQPKTs7hU4sKgNrVHpzxVSqR7WoRGA6YCfx1ekuMxtT7SnJ",
  "key1": "2n3wqKaccNLkmtjukcqKdMhgtqqdfb8oG1SAsDMQxeUjdKPotU78oTXS22v2hNxpa3rj8T9E9j2C2dZTG1ehLNma",
  "key2": "qbY6q1VPrhFEHP3grKa2STjpgr76ioMgr7rzqyVBkdSpVkmZwwD65tyrpyvoaCs85wEUrpD5m6ayAe94W321QuG",
  "key3": "3ws4M4P1LjZLdXStDXBTn9yxYkjm68iS2cUiANJZ13FkWCfZuTW6qCneWpoaHJT3RJoyE55fsMqHG58F6KZtwCg8",
  "key4": "Yk1FNAxDFpvQ74mQtn6n7m4b7jeE2tug5XqdudAxtDMdsEWwaFKoQokcc2HNCF6WA4Hb7V9Cs4bvWHtE2QzKemp",
  "key5": "ygZKefxhPsdAtBSbPPdsRu6BQzy9f4YjTtXKt8YiZq1XBE71QfSHe9o7YScm75feVz8o2GTUv3QXZGnr4yLVr8w",
  "key6": "4mTjQxaeW42UTscB96hKteySEP6wkZXgWcZYzJHR1Td7TtCDRDesqG95MARYf3vyJohMj2tDJCN1Q3ouP8QCSdN3",
  "key7": "4qYUW1Zn1E9N2cdZ3kgi4umSD5iAG5X4mmHGEqy5RGHBgquBvQ1R1iP38W5XPzR5W9dDvcZEarGmQxumqfTA5YtR",
  "key8": "43LEbnAEYdh9vmXZ5b6RxLytU6oZd31noLTAttSBtVGeb9SPtNRgw1W9L1pQWTU7CrgCyozeu9yA3VKtJ1uqv61w",
  "key9": "3QvhSGDiMA1dkzDfyDyGhEM35datRP17PT8iTgPAhJ3SnLgW7naBipfanG1gmWu32vsL4RsExFTFjWH9Z2TUuZA",
  "key10": "5QUwXBfs3GoE2vVCmaij9fuJ6i4FmK2HF7QJUCMtpv1VPBLFMSBBaUNY4fDMLruXFWyfkPJ873EtaxSytyQTXVwE",
  "key11": "46CmAhKiddfUmEp9Lk3TXim59e2tcsYjSSoBpfoFJPCWunLtWBUHDWneMMmfEz3BcNhCJpaEvEDkEwKMjfQaQkGa",
  "key12": "4DEQ9Tbjtd72vnPc4HE64A1vHqLk1Znx3JjNmtJqrGtoDxf93Crii4JnuHkq1r75GwiJAAXrErr585Y4kHmfxDvC",
  "key13": "4FtdQXRryTquhbBqtN6gKCWyXJV2nty3uYmbmXFHZ3NuMAC8DV7LaFYUjD4jWnUTndiUc3w9BbbfryZVYJLooy1q",
  "key14": "2dbx7Kk3NXKbfwNRvpXgzZ5w8KR49pBgBFHnEJMwpBBV5F4PmbHXHb4pJCYdaGfyLem2m7z8SHK14vsD7FdwxsX8",
  "key15": "5pUTEFtwmHNwWUCAhmXa29r2KMp8FAqG5unNQ8iGjFjxmiRyaMMVdXfvipw7BopzGHoaVj3ASyFALPuoE5Yw51EB",
  "key16": "vKEbbJuYTahszcVgizFY3NB2JQ7rm6GPoEVT82wUoEeE6VSBRrtuozrNMS4sMiF2MFJkGRvCJRaGKYZQshKbcGN",
  "key17": "ioQ6hcjDLxACvoxpJDQHbu76CpguLQiiMAkSwR3wgGx4FUoALUrwXTD1tez2mmZH2M2J7jqnx3AkG4NM8hwVbsZ",
  "key18": "CBpXc88o8zXf4zEzrmacM1hZsTfGoUYqCGFdxzgcKCFEZuVzappPy3RwYf1a2ayf1dgfSaqe6fxyYRahqHuhoe4",
  "key19": "3cQ5LcnFFrQz12bQNJZfVVMY34SQpRtJEPAjBnMX8KqJ5Dk9C31uKNnL9pCNcTHo6cvMg2iFSuPB4w6mYnrkHe3i",
  "key20": "4cWZAyZTWKYXuTJMDG7EwZ7LZQ3DW76s4oCcpb6gpAFe4fUUzwZcR5xwv6SzxKFSwTXAX6K1omNuj9A5AJ32FLNU",
  "key21": "4SutEAqUL49x59TtDzZcLdkWZstNKz2rsJj5os1EpmUGNMhMKVtAA6d17JBhwWiE7EBPZQqbTSi6Y2mALsnWUWik",
  "key22": "4Fs39vGpWENe4ceneBkUz77MgiwYevkMSGjbPfmEWug1V9GG9ixoce7VrVopXi2Cvaj5MWGnVdo7fC9i1zYQdVRk",
  "key23": "5XwZDwqCgSTYscVGerC7kpMmwhwh9pUBW9qSUpRT4MvwANVAums2dVbkctNxQKydMzh2cHhJDuNf3yvjEWeq4Hu8",
  "key24": "2Df9CpQRrY3f295NcYCKfAXNFQCMD7gqGyHJaxmigLEihgZKeMvfvM4Z2E4aJBajLdTqNkPZbmnQXvUHVrZ97m66",
  "key25": "4pP8G76Z5C7tL6vgiHrXhwd5RSeQjtAqqV42qrd1W1sciZC6yT1826NnmRBWqFvd7fiAK7u8m2rE6SFzaEnbf7mE",
  "key26": "4Pzpd22a9uK23XH9h5oAWsNceyKwPrHGVwV2DPUQap1mZhZN8mo95Hfdce8GM3YNMZaZotkybJSiLfJoj7q1PbuK",
  "key27": "4FeBZf2gFNAw5QLZ12n7tfUuGWHjibDBZ1qn8pddABBpGaHXJRThFNZ1ZAm6noyzW5fg8HLC3LbUJd2orUxiMwCP",
  "key28": "33E7aXajYGoy6qKznqN3Xz8rSDNkwzuko9PRpygFbMEsPqTHKHUshBQehHD5GR3GDSP2e5PZaUkme82DjnZMLqPS",
  "key29": "2d7tEeWrccgGy9VUQgXHpad5xdtviKqkuEgcLijNX8jr1wJzSCKe7ZfyGH7tcSsQhSTJvpQgBDDdmXiECVh8esHi",
  "key30": "4cjhPHqcm2iW4g9vWRhkcvLTbfVdyqeTkfhAkAoRiFjG9cQgo8xhoM8Aw7YvBvfaJkukGeF44TrnmGfae4AL3VW3",
  "key31": "3T7DsamjwfQ7T75kzfrBd5tpoVbfg4quFPZAKzTWiWQZEoR2K3K2MFXAwdxiFFvDZVRxEiuFjZJcc8GcGoqQHdP4",
  "key32": "41HSxrC1gvwfpZAYyCSGu8zqGRecVausKWnk9z8uX7LHUFTrrbD4HtDX9dWpv8CzpxAi84RR36XHhEasteJrzWAC",
  "key33": "2V4kRw8enZVDm55BXqen1d8tnV5sbwczv4mDN5hmueEX1GsvmysfNbahGgzzU3XtVBm3J3XzxdbzKe58Hd7XdRVc",
  "key34": "2v3asLsXSMXBzCkMCAGSWNUFP1UcYy7fuZiVMqpWoDAckWnnrQDHZJkzEut6xxZMgdp3KdVw4V3grLqEiv84yEkW",
  "key35": "5843FDGyZ77ovwkwii7guiugTDxmEFmZMqq3PwSKvv6cqiRgcmfcG4r4kV8gWGvwEr6dp5vsGAbWLMEpH2aEzwzT",
  "key36": "4RCKDdSnRPF2XQzn5k4K1YfGF5fvH1FF6zFRyJQapTUWBNbia5Fc2eRAMn7Vm3wihJg34vRf97U9mfxssyehKA64",
  "key37": "3tSc1DfrAiXDjfuh3jn4EKJjvXu6vASbZNySZ4cdJbe1wtKyUq7YXvAA7SnPUfLW8rDXnZRnnvoeVSn3iPntAH3p",
  "key38": "3N8xh95ibvHGx6kNA15yArTuVc9tn2dLP5YHb7hoKAmLNG91E2Q7CLLvGqRuGPkuGB79apdyfzYhtdqc5mQN3rGx",
  "key39": "3dfcDakmdebifBRF9w1uHbowKBKWwPA5gJ2KULUVW5PFVyXdmQuTLxgXoxuJ4q3npr6Nu8J9f6Bn1TcmsuSVUBHA",
  "key40": "2QBk2EVFMdZxY8tAcK7mvCKCqUeT3sgfoN414GZ7LzkkJBQLJhpiwisXk5t5Xt6E5aMipFY7EaJJuWCus5d5hh4b",
  "key41": "2PUQSzrNCdidKDcgVeCqKzmqPQhU3pGhW7VEPnY4Hq16P9NX5i3RNNHAFrt9mRYHKCEgd1HvzzE94hxWv7reyKXr",
  "key42": "47W1hTwfJo6xkzDBjWUfzc1CozqvL3LUXWiWRQv5AQQtKLN8NmUcAvutPGzNnGh1whQAuqqJ1TEGSYY4SEGrkTZu",
  "key43": "44GuBGzF1dY4cpf1V5AA5roHkVWkf5VWcGLTqiTgqzfzS4Dd3dwNRG11BqSLYAjtwZdBBRC7LA5LnyDopPFUe7fH",
  "key44": "41xEMPegzPPHFeuUtm39oS13nGkB2DRqfTemAQtxyKhpDs8kzj1VobTvTLCcTihc3YikazTS8Y8TdFWc7f6LLGq2",
  "key45": "4MQjpXvbvDU1L4rjRqoJzs5H1vY9AZxc4AvahYXpxjx1RDcsDwVseewDcu7TcbYJbM5Wuci8BDG3tuXRrrtaxGib",
  "key46": "5japPLukuvMTcpLtHKMwe45CwrDkXa8R5XZDVazwJxHw86TXKnqphfjhrDUfujsvGP7R5S9cJCqsA1btZ5PRe5pt",
  "key47": "3mhFqSfCHJWrNJrTESAigfmSna6k89SAz5JWjGKAXyvHPKiTip87TCLQ2Uupsqz8ndepSkeYHefrRwkxbBftWmaP"
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
