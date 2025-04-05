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
    "5qRnqC7q6ei6rGkKKETRd6Ehey3XyjVqMa1wfdy3utxySWzKvtaoGDDwhHF1CWT5bYdxsf9BzLgnuhU15keWgvag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JpyYAQmmS4nFycuC1UCJVHoc1A9e7SKXP7LAq7nWszb3qVHTLjEjL8Vq4Ehk6ziBzjeMztowA8fjsvvpZSvm488",
  "key1": "3krURH1bf7MG8ypAR3JvBRVSptG9NstrhFb44M3TCSX32pgn6MXBYjFqCLKjygARseL2XGNBHnzziXVzWQzV5kuU",
  "key2": "5caMWj8ghXidKeHnHgdZinXoG7hZYNyMvP4ga73Wo4Q37QEdiwSLc4sxgPkWmxkxsZfT5Y2b7b4oVP7Qg7BhcVkR",
  "key3": "2t2nykP5xKN6K5R2HrY62txnaQnhrpMPnJ2VasfD1fYdDSBLMegvpdTj9VRyecs6hCkMtSVJaULcRk5y1k9mbbEN",
  "key4": "2WHQTm1ydMGzYVQCGkmFTu9aSiZ9r8op4978ATFTtSXctrBMH8uPHR2stFgvHc5rbuczLCHM8HbhJUf8vQxvUuw7",
  "key5": "3un5txSUX7kPB9Tcnup91fzbr6yV26cS4rUYMbEhir68KiGTC5mEsoUX2LVD6HtLtsqLZGusuJd4zApRN1xmqtPx",
  "key6": "66buwXhcChviq7YLoEKNvLvJw2AxvNH4mQMTackGmqPCoSzwcyKDs7aiW8XYFar4dZAou1jpJrKof94F7d1gJQEU",
  "key7": "4bxKL8wgPxke9fhNh5TT9zXmwe3h75ZoNUJNvDsmgJJ3pzEutG1QbGURygf3WjgwsMn7fjYLYStPUnQdD1K9xkgh",
  "key8": "5GphNzq36dNWDZeCNm5gNfzNa2WHQASZ8xUTj7YbMoVRdEfYRjeUpEAGxG2So1vfTV1tBLnEBEuX7AfArF1K7j2F",
  "key9": "4BTcatJFL92EptmM99znFkvdwwcvx2EpBpFraC1Wgvks3NR7i2JH3DvJUAZ9RjuK4nWPNteBQ2pbKo2oX1QFZ9wv",
  "key10": "4kbHijZ9oxjRJzR3ZNdcwTk6NUFieSeUSdted7jQBmomEu7ba9GjPmfBfkUWtE3yLGUKjj2FcviTtvwktGLp6t97",
  "key11": "3pL6L88AB8TGHHQtQFyHQHt2mzS42F4iG9K1GxfSsmEfX7k8AGqN6mCrcjkiakBeYzH65RCGNgJ4ECYHgR82JCyy",
  "key12": "3RoinmjBRCrS63phdQtST79XJmaEXACnXyVa4MM1dMoQjDsXFuineVxZjx2G7gWsVv3eHBvLMejeyGbrXjMpRjRj",
  "key13": "3y61f6vP31kGZ93pZBgDXUCYqayzsyko99ukJAy39a6pCYH9hmusSNckNVoNu72c4iCRrR5oFzbJRKzK9JCXhffi",
  "key14": "GRTwkn42o1XU2zy4EBzWbA6oUQ6gXCFVa4a4sgWoz8ReWQjw9QwLuUCE4S2oKyhe4Gs2eW5sURFLKoM7s8vvsWB",
  "key15": "4a6be3hDiijTQzqidK8QM1ZGBqHo7H7jxiV6RuAAwbC7UuTBPC6dNrFcbMK5xYHShvyvgSCr9zTwg6cLFpcjnXEr",
  "key16": "1dAvdCHCyLxEbxLWAGbqL9MAD77WCs8GPBHgJ58gY4gajpm11dK1vfjmtQNsBiiozWVt8JGViuvcXgZiYgDVwSY",
  "key17": "4zcQ5U2smPGz63LGnUF4yVWnqv1vj1mYNLFu1BWqApZpM99EwmG72EnGpzL6VsLtuaYvqoS25HpJuzscAp9dpkd1",
  "key18": "3DedvKQEBvZN32rYNf6uYssbhCDkahcGonMdTYoJpq2V65Kk1QFMkWCK18aNMsE2dETPLpAZUDpxUcFuUCBB1xTj",
  "key19": "44EPBcYbNcQcSXfxqYM2XSSngn5dQFETDozyGFh7w3sPWkRsxZCkfyPn8SoBgQRik4FpSxLyZY2Vz5xLZ3F98Fbf",
  "key20": "GGfHmgnFEBpidua75oiKwteEvGqiR3ZX9JkUYnXsKfZeM3jVDodiXRBKhSn4idaxm8ZXuFGoDAMENgu2z31Anko",
  "key21": "XzjeMHr7YQdqKfc58EsbUdedZWYZycRoxkzNLLUAiWjdEie1PPsXmhcsaBHR642ATNkMNurE5Y5vWLuqfgzKkNi",
  "key22": "4NgYaLydyyycqRjvR3wRjWV8hpHhdsrtcDVdtwSr5u3ptJzab579UyyTtQ2W2STK1JoUR1EFN2p2mVLxB2WFnEc5",
  "key23": "5PZSeNjEGDYJvQ32REJreyheKEPPS3j3neithXW7fC1qcMActfaupHuoknsFpYXrVCJFucnuACu2V19ji6MDhTPS",
  "key24": "5U3rkyGVe2yRsK9xrP4RKM8Yq5dos6bW8Qs1C38va3p56AH29J7HvzpDZp3MQAW3SBAo1o5ZMpnee48SWySeffuT",
  "key25": "3TFUurW9KVoBWxGVsUimnHop9zLjuaWpCC8euUooRJtgDDyqzaLY8wicKosrRnfUfRt9nhCSFRKefBr2YquGVVQw",
  "key26": "QXa1ZnUrGsC4WEpS8kR8gmpH3PkK4dnQLTcd2mFjEwZfH8sHxh2tGriixT5C6r1Jqs5Zi6yU9Bcy7zHcchAxgNP",
  "key27": "5c5UHxCo9rB43sdaMtxACCvprkFc5DMNgGhrqmWZmrPVT9Sip8W5Dk83obw9ze2HkHvEFWeemGVu2UeGNEJSqPxw",
  "key28": "35DWTGeVnWS3a4zRHmNyC3ZZmvGoCnRWiDp38EuGY7VX5vvwQyHqEVuZsHuPkceocA2fCnvamkcKeRWfgmoY47BM",
  "key29": "ZtPaN1Tt2LPMALDmnbVokzpiTX3SVZyyLSjjZQfU7NFP7vvag4Ha3FoGe3nhPHEAL2F1MzGVFSWsk9KLSJUDadQ",
  "key30": "4QU4ik51cJcMxmeqxeEDiPF2QCr2B2yKCQcKV1w7BwroQHDdt9RPGRiounxnE9xsdRnYNggXtARz5eov4ZwESWKv",
  "key31": "4yLJpiENvZqknYgDqMANW3wvrXjoVqabcCYNtkiQJqgymtnC1ZYBrdoKa7KioAaY4aNYFNH8uvuKbzUfkp6nhzZs",
  "key32": "3w59cHtVVRh75gEkphRWJajNxfWMBJLaMSEMHbhVNQf3b78j31mKLbK3xUewNrrpzKgp6rye58w4vq3Poat9a8zj",
  "key33": "632B24HAfaiV32vS9TvEamo2HhMmp8kgU2dtouZbJWkou5UGy4kA2tLXa59r4zDKuziGKSgMaGoPPnLmAgjZfQdV",
  "key34": "2CZyaEQFYgqiXNg3mUzn2HAjqwm2EFdZWK61o7YxfXx68kqxd2tnauWTM1gxz5VB6NSjEU6Ur21Mgk8XUq2uHVUP",
  "key35": "2hr6WecFgX4axS627hACQGR2FQBpJK1SvpWCFnh2tBgTPCFT2jpnxPq2CH6pDtzV6GSEwUoLWLm4cc8VfHAcPeiz",
  "key36": "5WUxXU1NfUeYzR2WbooL8GYHWCnMYSQkTB19AiEZEh1ZXvYKt3HUcEKmbpYP6f2jywyupP7LDmxNADLFLxUMGPd4",
  "key37": "4tqjq2bb86TUYh6ZbynTub4nQBGvpfxT7e8CYKtqqX9ADurcoUuMLqnTovbHsM8siWTxVMtXB7EK3KV1yDzD5yWd",
  "key38": "247t5GrNa1fK6JFeTeo9vb5vk7bGxsW9M5F8ERi2k3zgyVWSGrwLBKUvyof54eTjqSqhR9xNzQRdvdAAE5Xb2Tme",
  "key39": "41uJWLWEdXFLQpJofDBNY9Fg8K4DXD6GLmB9gHn1zf5NFqNffKxhyEUezcn8KbzNTrdvayCNotJFnSxPiz7tWJZD",
  "key40": "5zDfWeuBmzvBZVWpDcwjoTSdvKfS72dJXWH7wa3gAre9neHCTzEz1s8AEvakEYE2u16x7yiht8QZymCpkqHcBzz9",
  "key41": "3YrmXZ87G1nALs5SGbuWytQTJYDCNqU4KKiVbYhWNmXnvqaemxsyAmXdngmQKRnW3eMtKMQgnS65No5i48xL8dpa",
  "key42": "2ftFtPcT8sd7uiSpZqzWq4tX7z6KHnA3TFZdvUmkQL3EBB1P1oVj6B8zL5F1v8KpnBxCZ3KDzGYYKDj9oXSbnT7s"
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
