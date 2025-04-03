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
    "4FokTst99xRqLtEigAe2Hpn32TvY1F9wCgPBA5JjSHfrww2m2oWnwXDdB41az9Z54txW4pKFhfhfwFxD48yfs41t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CAZ5SMLgWZ8rwZZbhPo77DSWWfiLuiUyfgVbRvX7uxqqGqPchAfkHWUMiTcrSApVrZgahdZForha7k4X99RQW6A",
  "key1": "5FaaH1n15bj732vLRFz6pZnd7yhSXPJmon8XUCg4SaiRFVxZmhaGkxDbRvqBxDKZAi6YEP9bHZjhZDRRSVDqfsVL",
  "key2": "rf1gE3scoGveZRt7sYmTZZftV3V2m3GBviz5WYWbeLP9r7rFR9f3gsJYYp8XuFaksRNeMUtBraS3jLSnHwYW75F",
  "key3": "SzxVqSHspP9r8diX5v62uXfBEwu48HGwwDUWKPKh4rkNXURSn77Hv1EUYyQoUGZoz4WFtWK5SRpP563URk7com3",
  "key4": "3HRrXL5PJCsp8w6SURcN5EKwZxXx7HCW7diZEtpd5oQarHbZn2a2kS7aF1iFjp2CpVBT32whSvb57a1Zp1DJMvwB",
  "key5": "2BXS3itQwpHdjkkvTeqeLwxJG5XCaL9S78u1avvACcFFKgHKLEEXgP1eh2LBDQ13JfpZ2MUbAfuaYfQ2pF63xCLG",
  "key6": "3jRDQZPQJGehzExJzfzgvQ884jqy5Pa7WiUyRQ5ouvgRUJAPexjsVWncoYDhRdq1HqGaaWv8qjG659U3iBtL5suH",
  "key7": "2BgzW55vPBrTMcaZhnji8akCnfkGE64HvwTUj8CbZmvoSC4RVzUEufyH3bQ9dVokdvM8yNk3jVNui7dPWfc2FhzC",
  "key8": "2KAxuPVdp89ZTSJp8hTwaAuUW73EBBSE5U2hEm6MLdPvVFhiYnUfyBzHwDcBDi9afwo8unRcnFjiBfQxpJowgnM2",
  "key9": "3JK1hTiWkUvG9wzLrmX3zJ7mZdtpd8JE6CRB8yYYA7AXPtCzSeb2EZnkDgVnLhDBEokvwwTvTqkZPScM6ngzL5VM",
  "key10": "oNRMcRc56PNUA1QM8ne4BChbmnMQmvyE5hJYdA35m3ZPeMw3bnJU36QrSXnQPt2oammU4pP6sTBP7QBczgxTybp",
  "key11": "4ZnzjqtfCpz4GVgTw48XyXf1C5Yhn8JEKrkeqDWiGPvx9PfBJBmTnhBRyXCtUTaLu5oGeSQjkGpYwf14evne51Zy",
  "key12": "3u1Yu2dkurx8pQPrCcrYWwkJVes9dWRga8p7Mvwfbnfd65McRrjK1gedXXXA12ggvshq43Ui3Wrwvxs4LrqXANwp",
  "key13": "5Edh5B1ugkmg2DCGQeBzodFahkNsmi1jAMKLSVewtRFizrqsDQrjuQ6Jv48kYiugy9wJLks9fCdc161FUvfgizsQ",
  "key14": "46SRJKFhu8TaNci1n4uKuD6rW6drSLCj52bgp73oZrdz1r4G8upUwrcBKYEEMmF1ZT5a13agokiEit6VqHVr2GwZ",
  "key15": "2fG58RcwSKWiLm25V3xyx9nFqDb3Ytem2gu1a84MypaYc2TtrDzjagux4vs7aL8ipt1wuzHtGjTY4j63RVTbM7zK",
  "key16": "2vbKGCmtB6nrsbHmkY2HJZzN2ZoywK2er2JdhuqSBE2JC7Gz5pm4RAfZ5pYtiA92w3dqFsYvimdzMYqYYTUDa4SQ",
  "key17": "51BxnVg6HqSYNeztDWvh6kFFFfWW3GVBw2D9Zsw2JfFYSt26wf6KtTUhWptgK173cVteSUhWJUAEywyp9EBeKBfL",
  "key18": "3doQZwRVVk5wHdiWaCZGtD4G9hJa3mqBjwwoqXdyFWvHwG1DVnAV14yNb5qmuqwufVC2N5PSasuyuZgmFZe1nKiN",
  "key19": "2k3TVveG3yMW386HeTFwDR3So9VTZJ7tgFTNHXeS3LAhuJBzyUZYLKgGSSxS97Zp6aWA78xCdAxzHPyqejBaQVQi",
  "key20": "48kY2SfkbQ2HA2z2RVjSR9HKxY878yPLG8EGhZHqZX4oykJsEbVgPdvtjcKoLgNNfbuYqiLmZR1i5x1dRetd4p3C",
  "key21": "2tT9UoqXzxokRpJs2pKzr6AwExk9kD4DDzSbSExyzgBYEuTuyTawm5yZXd2SsZVo6Q9YTFQSXm5WtvnN1PYPiYPZ",
  "key22": "66tzGS2FBwquxCqHCb4vD6Zv8aLtCbAimwL7ou3f7Amyf3MBNTBnjDPKwsTVkcAU1SEhSGSypSfpcqSNSafqSSZm",
  "key23": "3oFnWWoW2scpeA5cMd2zobgaeNKXSYVWTrYt5tUBe9dZmf9oCri6iyf6BPHDW31zLJ7e2JYybZhEQknpoatY9oaz",
  "key24": "61PSuHzzyqs23ofcTLeiKNEkfUApMz3qvFsdSt2rrDoS98W6nKZNHwDSB478SYqjiNdEc2dULu4jCYUvuyKpmocN",
  "key25": "5jegxsWLG1SdfebNgKjDCxQbzNjuFWZZ5HszBrUijXdyLBbW15M6TGMLUkS8BQnokAr57PJj3Mp2RuxoQmVS7aVH",
  "key26": "3kPR9GCfcLuy5TzuQQXpx82jH8B52KEq6tRYRFqap7B35DM1fshyVBsdZNZxJbypv9WDFJ3Qs842Me2M1Ru21s99",
  "key27": "5NdTMADHG6KzGXSD6gVqG31AaFywtFpDAWypbA9iZwApEFTE9iGWR5QsTSiRPz7BxH68U3UbhQQ8naW7zGaYq5b8",
  "key28": "3oHBvdwvLabxWChb81KzQww9JNZHNycPvmqTeMWm7H9Gsjha7Uo24mqAC6PqPKyWqv5GkDQBo2Ps49wzYtpquktv",
  "key29": "8k39NpTrDdcL926zztea1TGnVuzGC7inMFVEeFokDBi2jnVoVtZCPT7TeA9mvc4C77255GXYFPe4N6RC2K73DzY",
  "key30": "29CAVZruhAKfDa1EY2t1pm2mEBQoxfpKg7nRSvLx3BAbtmCbvuGx69HLhMQ5p9AsQ5CLZ25PPBVQczZcipCXuBmq",
  "key31": "Ac7a8ubMnLQtfVw3goxD1s4SHvo3A49CBwCRxNtoC1y2aHsboUhAqyWmKQr2W1B9QHMBfsH3jDL2QGRGSaWtQJd",
  "key32": "4tHm9qfmCiksWLvAUscsDS9pRS2hyrtoCCenMphK6ngAZtaj6tpWEApACV8L9ADixay1UDVxCFBuWtyHySLxAsTP",
  "key33": "3dYdFvBQBMsjhW6dX6yJxgu7cqF8q2tArW42YTZXdgHWmcCMC5TSrq5AUctUS5eqd7m9nK5f1VGfcXaaaD8uqTEd",
  "key34": "9UTFqbPaus5GrwxwZeKMBT9Kx3JVcHicmX7XFJ3SeQpjowRcBhwRbD8F9uvKYBFJ6cgbghQ62SFDXBW8JuZeEze",
  "key35": "rRRgD7N8gPZAtSMV4rhk2a4zDbfxopoCwG9cAABYaBHwrJ7wbjApDz7KKdnNmkhSLpvrmNQKiN3dJW8CCEA19mS",
  "key36": "pdLmazbEae8RYC9tsSDS2VnG7vA9JD6tasiTQFW2MQjhD7BSjL3mTpu7Fm3mXhxnCxFuo4AARGnHmvo5KdkjVie",
  "key37": "5HCCrmnbGQkCDQRVLgX8iH6KgdCE9F2LFnYB315fB59FNQSor4AXYPwXqcVzdnj1dWNAQ4NKYrnrRBGJssQNbBYm",
  "key38": "5Kf4z6tcN4qDqGPSsLCiPLYuLL936R6de6sJm8pDFermp5FVCufjUKRHELR7zZjoXorCzTU673JaCrZQxgujfPBp",
  "key39": "4PLpknPQvpmRGs7KyddhDHHDseNXju7ZKXAk7c8wosft62dtm7u3YXhbNsrodZ4HDK4YzeNxbiFhKqMTopzCWyBa",
  "key40": "5HitkvwxJ4xkB123JYVkrWSbUN755Y9ouTXCBcBumPMURmZzatNzBMCKw6VrCTPrUAMwpFdQ8TQMjtg2YVCCdbhN"
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
