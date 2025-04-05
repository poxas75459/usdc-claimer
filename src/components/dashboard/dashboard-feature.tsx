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
    "3cXdT8K1QQE2xscTzyu635UXZK51f83qoBWmfMnjPi6eZKVy75M3QumyVagZ5Ko1x2MJenQmrxmUD1eMKVQ26dWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nZfYhoG1tPab65wEPDeasGgRr6JYVP7swDkcGMuiq41HwNk1gtobYLcDdKscQLVJJ3kVnaUbCkNfuJBioFRYusi",
  "key1": "4W4NrRW6ECPbP5BHAfEcCAmtmoRTbtshTrqmYLqhiLeA5tsfrJWcbdvFqGyWxjAND7Ak6YP9vZuqozvFyw6yk8ba",
  "key2": "4HkCBsoyVGJZu63mJR6fvYvkNxWtVZxtcv9dTgw5R1sATKjDda3KYLsiXkXH2bJwWJ7G4G3BDUP39JWs3BmthRfG",
  "key3": "29cFrW5R3TzEZbJRZp9NVSNQSjDkHAPHrMfLj889tmBfP1sbxE9dgW1wJNg27BiiwPYdGj9Fj5MoHYysbR1Tf2rw",
  "key4": "517GMBjwpzZTNemJEYEkpiSNE7zybuBbR4vBQY4ef5LyW3GaoTcUxGTtGZire3wnatEpu9TwSxzRaQaTNzwP7WWs",
  "key5": "4vALLid7eizxy6J7oz3CbjuQdazwgZsE3VQ2mEjCfCYB1NDmye7xMHdWsYfdWztXWHPvQJrK7jcaY6Wv2qVj6kP7",
  "key6": "ztejxH2mRkpWFRM8YHv6eLifhxRA3EHGatvsPq5xETXrHDEniEPLEgGrc6VnUwJuPBYsVP52HqApGaCcgFH6M5V",
  "key7": "3xssE8bLCBWVTCCWZr2G6bKxuXSr5x94uxb6Bgfgw9mnkFSi2toYRabCEpdC3aYHuXUTUDYmJLjrAA94bCJfoqL6",
  "key8": "51K2LbREckQBGEy1xnstGr1ScuBznUQqvEJx4EUWQdBrZmTwEAzVUas4fJqw8aBKPrZrBpQEuMMZ5MtEeTVamL6n",
  "key9": "y4wGEywKsL9LaGrQgnoyaLiKMWsRSxmJSvFbxXcDqZSCqJF6wSwNKo51WAd3ra3xHTv73R2ZcJHFKh4ync1ZiMp",
  "key10": "4HanEqMr7P5Wot3yEREXs1hr6wVxGeP891HEKQvK5EvaHKDcpxsxG7ykXQHUxDn9bBPsbqsEoJpPtQtdoTCE8CSP",
  "key11": "2TpPjoofP2r4e7VoDHedBLS53owEa6u7YV8vaBZwWNCBfZAakE1YL4DkbwDzPZcPQhuXvTiAKR9s9urHYcLeDJS2",
  "key12": "5pJG7ZwUHVcNpAuPrqi889dnVArv1ajk4QqvKfFjrFDtoWcjRqZr72Ld8PMyuhYB6BD9K8CrC2ZqfWy6LU33cJjS",
  "key13": "FRuuB2xGx2XnV5xo79szjbYeTkhSBFUXtMe8Um84DKbTgdUmsaAgeQTcxoKzc6qLHF3DZiEPjWcjBNmBDpAaWSj",
  "key14": "4Pz4wLV2VLqquMbC6tJFekgTsRePnEFCvGcmW5kpBhCs58dMziJW1kxVgLPCx8RLD3q7QKG12AHQhe2PLLu2eaq3",
  "key15": "4NR4PJT517i5ecB2zGC15b3PnU16tjTqtXwxHPDGqWzSiECj6DH9WqXNHMPdWpEDs8pHx2RvNdr8SvyRP9gXzK1k",
  "key16": "34iRzxhgxQMtuJahEzp3R9RGmoTaAuhm3XGQStbB2N2s9RfZB1vp7HEpnYfeL5d8hVCBYqiDUwDhbSixnkj4R4q2",
  "key17": "2ksHtvZ5C3j8e6Hywy3uchuHC3bVuhomnyCNPRGvsnAumqC9yAPi2aukdPeGHddGc4BDkwsh1hJP1JJ7o24apB1X",
  "key18": "5BwmmJ7pod5mwZ14RVXSGEovLh8aYvoqSa9LYTYhx6XxU4rVUhgGayyAGnJZZrYb9WFoCcjmtrV1o8mVKL2MfdWP",
  "key19": "7YQekFGj4RsnCqzhPo8XqMH7jdEvsZDtG1P5pobea4J2r9cF4pKNyqY8GbZYHwyJCimJzzxP5LEgJUZNfy8V4Nq",
  "key20": "hREE8JT29wScFzyZ3yGtXtVNG4ibAkZq46hbFyPqtpTZgBmYDEL5Aukh3qpyYjkWfmQHSSKW9mRTyW4Wh88HoQH",
  "key21": "3DWcaWZJp3m8nQWRQPBSvTZuguCeajCQYPVEPXdhMPDst6RPSV65PgAWWqARsm38e7GefzgnAmQH9dp34ZvNB67T",
  "key22": "4Zw38Skr6XAG4m6xZRxfvbdUtksodV822haZRvpVUayuCUDbxGieq4U1tF9fcpyhmz6TUq6vhmNg7iR7SjNRvzhL",
  "key23": "2F5s2yAGCiSdjSaWpZMBrmAkq5SxfNdUsJra5PrNKmpyQXRMwrb6XF3hhb3RAFJEYUdUPGfBghfaPBb8aoVC4ffP",
  "key24": "4hmyzGjDW6NMWBsBEVc5YTmCn3FJjUsphZuvkbZaW9ZmeUE2wATFCvVoRB1Kaq1fHD3YhXu7a7pMKpxu5KNdQB8j",
  "key25": "4Rie5ufHhKEa7DU3n1KBktuw14FX1EmBa6BM5KBn1A8SM3TYHFno11hRgQyrcW9uPwBWnDV1Q5LWZw7nsp9qCKRL",
  "key26": "3ZB8XrRgP73D2tro2bRgFRfr7oA56xXNrxKyD9SzpZUuHnqHcr5KrNduytRPz77YxCN8DhQTRxo91yp2NL9ZDFjX",
  "key27": "62bxig6nzgHfH7JdUBRtXkLFApwZoN9ztrV2HcGyL7m5Nm667WPDJWzQYT1UGcZQ7wyjChFbHCn9TuicTPUFg9PY",
  "key28": "4j8TuUQS6wNWFAid4bStxaKb9CVn87T5jnVw8we11zoEk6BvtSeKbWKUNjLmaaXBfp9RaTCppyGEe1PAmUEYAjga",
  "key29": "2nBHojYnSRXvnvbD7SF3udvwuoRW6PRyNx1beFMKE15FNTP3iJfoWFHdfHqtRnyAELPS8TZMQKcMP5yquHwunRFT",
  "key30": "35LcsQV51jf5tAZyHuNBHxwMh5PEbVX9gGmQq4aobRBSGZS8y96ZhoNHTPCzpQqn4niXvBW6JUXEAzShscTjvTrq",
  "key31": "4CfqQHskprMy1RZVK6egtTu1JtGfFLz5g8ZdVntcLxVDCzKbc9XDZr5V8qBddD7ffWX5xE4rg2rPzxYwPkt3YRvW",
  "key32": "2nDUBXhqKRwowVACQN1Ntz9EY8yGrxstJvqp8omow7rrHACSwS5XDbAgeH8cHxzw9fzpnu6yaXVCCut4T7P4EWTL",
  "key33": "395dd95E9JDvrVNRe1DarUjDPwW1HLwBoBgMTyb6GKVNUoFWi1Y8ZEJifXTwsQh8TARqqjVBDivGHv9Vom3Tc2KJ",
  "key34": "3spNQsQH78pkL4kEJXWCTCbhRotYXEdhefr4hqJWngnBd89HcC47ZDCcymAvcPStcu62TCic5VbfHESPcuvcZYwR",
  "key35": "VaqyNgkhUdM1Bms9R7pJHJqJYhCKHBQJNnGeSyd2s8gvrBvwtNLHz6EGFfZtdUUD44N82C2JM5mpouue5PaWSgb",
  "key36": "4basfsM5svXLwMJKwrzUpFrRFBTpa7mwWtLYsZpz2MbFKkrcT29WxCT5AToDnTyY94cHnQs6fP1vGjxcepSkWiKS",
  "key37": "5Sxsebn9yGE9sDGWaFtuon9suv2bRThbWkGUTLfhhcXB4GHAYmms24Qx2sfkvPbi6Ao5U8yAgRyzKarYd1NDfeZi",
  "key38": "3Y8gngCNE6C3eBCLTTZsSnoKhaZ2iKPMXz9bKnEBMkvPXwx1UqhSZZhD7woreMVQp2sJSCJ512r7sQB3hk3eRVZw",
  "key39": "2MJR5RdfWKbQRagDMLWp64ovZAY4aH9NjMhZdYnULqRcgFvKNmdqA3VN8D2JBBks22ZQwjP1KkVm5Lfy5cstpX4R",
  "key40": "5rrXPtFh9qp4a9KjDe8pYGbM9hV2AHDjTuLtBLvTHpfYE4tDZoDVvyy2Fw9Tgpat3mJFFi1eKaP6WoVgvP8KDvY",
  "key41": "3ABun9aLs8dBiHMEvdhDJjirgCGDxwkJfFdfLWLNqfTxHNaAyPsBJ7oin68Ti5SM6USFH8xY1ptCX2mdfb7Eh8xz",
  "key42": "7D5ppoXJeDkVxnSpLvw6wqxsWavCgJZcjti1tRMEXQWAiDvrWKNfyBcJGH2gCStyDayKMPk3xE5hejXuaHdVE53",
  "key43": "4hFwtXiDrdggMdaiwm3XUGzr8b2JmpnbTacou77Ba4sJJsy7xYtiFU2yzZ3SPPQYhZxcWxCyhm33LBSXvpRb6rBA",
  "key44": "2nVBf3CBfqkwQpTxhder5HrmK4A8xyXgNt8U1ymu2PFDNEWgVPhSdCFyhBtZrjtviCXHqvwC11kZEfAy3t3D2DYB"
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
