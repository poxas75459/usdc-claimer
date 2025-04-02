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
    "2k2Ac5X4qqhWfSxbjPC7aEp3iUYKKeuiCZ1RPbCJVRkBSoJvJ1nR2GsUJ4JDHvSEnoC2avVgXgfxHQ8VDN9GYh5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VY8sYdfXPdmUbsXEhqLk68gXwLJP8SYuq7b3WKJAfbZ82erJTmrBAZFAJ1YMi7difLjMPE7KcN9SyoKWgbuuZqQ",
  "key1": "5W8QxTPiAqXRpYDCNZSWTmBsb4LiQCktGonErwoyF7BCPgE1vTncRGdP2wvtkZS4MXR5vWjYA3EAdLoiUt2Mctjh",
  "key2": "4yjCyd2pKJwQts5kws3jNcXnnRLsrdvE376Hm5jSqkEZAG7BbrT7sxcdAPY4Z2JdaYzfjKnFgBNiXkDEVvLs7LbU",
  "key3": "36Bkhsx2aputJuA6PPYbeEhnLA1s5eLks4ehKiyazh3mCcJTAJ86tVQUegQzq4qHn28P6q97J1gFUKUTJB5v2DvM",
  "key4": "3fzG8jKk9nkGchcMYswwnjMmvLrh5HkczWn7nqt5JZ4rk2aDQ7JqnHc3Wo3vqXSzY2azR2mqNmqpf1jfE2PJAPBX",
  "key5": "3deUtZS7Qx5Ces3DP2daL4d9B9UfSmmWJyEMbZrfmSLfrWtuCP2Fpk3ZqftGWXh5KTQzzMikG7iP3v8e2oYnsv7m",
  "key6": "4v8ftqcZu1H8PvNbg1fW1YtvGrR4QotSs92jtbzxsd5pknLtkJaNeG5cNFJPHXcQfvJBYQ5FNxZY19nk4Ljj4UMx",
  "key7": "FX1dHKBKnrbRM9tPP9XFpvfpVkcbU7xpBnLZPdNV7ZXSX2N9NQWexaUfZSndfsTd3YPr2e1C1Bpwy5NHJPo2iqM",
  "key8": "4mGENUEwytBo5XA7Zattt7hicXtQqHsSmHVz7GhRCoMwWowiG2WSF73yNAVNmEJ57QCXhEYH87jd3zraDQn4vu1T",
  "key9": "hnuJmrPTd5YSJ7gGbEio4TQ7LvRD4tu3qg9wxw7X29KMXoFnhkVov67GXKwyBiXWfUjfHuFSGVXf8MAqrrPC91P",
  "key10": "DSVUyL3NEMrMYj6mvDKjpwrkDVPhwMY7WfjxB7mhuP6oayGVK3NfLuxpCzGVM6C14wzRg9LPAeVrTPJHfyGZeGk",
  "key11": "4Ux8CFbw53tZaKdNbjCqtXyfNUJPEnsjPvxjshVmoLuoNAet2nmiCgrmpgy3TrNgXZeMATEZjYwTNhkNYCHv2dPH",
  "key12": "46sSYqpV3czigj8NwZcfMDs7gGYKabsN1qmUzvJrGiTNyPYnUp9rMw99UwXCPeCynKV6xrobcxKxvLpisDpVdLBP",
  "key13": "4zNrMrAcWqCWz2umRVYy3UpDi1Yv4SsLpwfBBf8yndam9eUkd949aizm6eAQcjd2cVPB43R78wFvMosjLznH7FuY",
  "key14": "4D1ZJoGzAochSQjgGcrLxYE4Ljx9yV2kQr1Yt8ckdWVaa7Cio3j7mLrhkyy83igcrKKrDhnz5M45TqucWKdAGCPQ",
  "key15": "58ayi8qytYFVTy7cXeBZjkApTmncpw6dWLtVMAcQXZM4bJSGTdtAdK2RiybfWdGGUCKM2C1Zk6KJF5T33npdJw5y",
  "key16": "4bhgCdS51rxhP2aevYAamqomPCTXfLjm5WLsFzHDHBe8fKrnbKg6Ks6X6FbLe9pRRrFAH4u4N6sCnPZNXuWBL7Yv",
  "key17": "3uvtkBgAgKr1nU2RuAEyKMia7z8qYX5igCfot6r7U8KUDT8JLkAXmkDY2nxtdtvhMrKGvMkso86n1njEHJeSrwPb",
  "key18": "33iLUjKMjoirvBeuXSPP6wj5FQdxx3nZW7LjKuDni5av58gg29agyii6Y1QcHriTGECWJwgCRfKPPPPqTJhFFHEX",
  "key19": "3KmujvixEoT6vBYcPmzFXyuL7agFgG7enZDJnnB1ABe7hPB7zksrjfAbXAYfpovSsiSWsewHzQfLrJgUQZJRyfHP",
  "key20": "2wDB8F26kGKbZe8BN4wx4GbPmA8kaJjYwRCsr3u7ZRHNiAZ2rqBoyVSxW7SBKG22u634reqJ6MQh97MX6NYtqXTA",
  "key21": "67mQvVxDKURgbGzryAH9qkooJm9guaDuLy9sBGEggmFcVikjeDyGNeGJ1XT8EnM8H8U4zdUf8tyPhbH6DT74tN4z",
  "key22": "255PdQdSK2hd4Zi8UzzdrQNDeTHmSLyva3Spvmh39JCHXe15QJa6w3XFbxJQL87rJgpxrQtKAqwpAjtXzvN9Ray1",
  "key23": "ySDZzuY54ivR6rKt8er34QyZXfR2hW3qh7hRQynhNpfD969tk7ZiQ8b8nRWoDC71CcLNxkGo3TTKzssDPyKWjEt",
  "key24": "467Uyj99EuDThUUWq2uFikaXNMrNkBTthmuRLWibFNj2EQfdjaQrYq4HotEqLeUF8fMgMejfoiHHKNGU2VMghJtU",
  "key25": "3i9xvTaXFNKgXYS8zHMpCbYGix6ATZtQ7ckD9ofyv5SKnXRmev2orqpBLdVFXmonS6w3PH1ixzZp1YWdbH8wbkNM",
  "key26": "3ZbLfPNQop2YXRTtqH7wqATycXsU3Dhy43kkA1xJx2mfCXJVdp3osxFZQRYJE8RgkXzeYpdhecCef7iBC89fjAVq",
  "key27": "35dkLVh6bVxx3dGsTLBqF1ybpvppMaGDzKw8yYQMjixf7LTNgmQvCdsB71YdrcC67MapxgyXLcJE657gKV2tzXwM",
  "key28": "3P1xwWBViVjDZZ77SnNbvHmWujyK5EaEcjqrz2mqKzpXYZV9vWoC8iLPXyXzeaC9rrTQETPvN3YBQPRWV3AZmeh9",
  "key29": "phmuQuTz7DsSzgNqvkMXzBcWNydyPS3o491ZBAtz76rE21Jbiv8rDkiCpLhGQBdwqHhhXRbF44VZzoWfYFzf4sa",
  "key30": "Fjid4ZxLueR9XYd32cygvRXX7xVMhJbg9635hsPZ8CTLeT2NZ7wS41Up9scyujngo35uvU9kbAj8Tv1jQNGrqmH",
  "key31": "2tzBjxxSVjjQUFtWmSo6r93ZRQJtAVSvufoAS6hw3Krn7gQWRo4Vr6jx4YuVG1dX2r7TLoiHK6AbsDVq6NmuYc57",
  "key32": "W1NwyGBRN8fFk22xZzBqHpQk6R1QVN3KrPpHk1xFs6NAqzLXa33sbQKpxNYrMd3RGsSCYPe9fyifPGRU6jQwq1b",
  "key33": "5imwwgZo1GpvUwUDACMrJfXEFHF5QUzz8ABH4ttK5n4LfYDUMDqQ5aPfKFNmdFCFPfcDGZ8incda4pR4dYYNa3M6",
  "key34": "2X8gefXSS9mECqC82XnvagNq23q7dLHqsm15B18AA4cUanFBgDrob8Fud574NH2uin3bwEnGYgJE5KFwyJofX3Yc"
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
