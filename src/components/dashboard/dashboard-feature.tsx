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
    "5pSKBzYSANv9ttcGUP9ruUHyBB3DeTnFPjj1MotcditKTr8uoTUaR691myJpiREiWawRrP8nxiqe4NWRZjvqa7HT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tLE1foeCzqc2Fi2NBmZUjPqhq61trX51LWzwVXxPHBrPFdKSixsVvNW7fHFbwx7mp9Grn2eKFfatAPU2A7M3kuU",
  "key1": "xA4jBcsnxhtTDK2ENw5sXqpz2u62i9TeBbzUBYoH8JM4LMZ1pxoxPuXZdYiox1GdgM52q2SD8HZTEWRoMk7L9gE",
  "key2": "5bit7pSaxmCu6VxqpjcqHnNCjLs3KGzvRVQnnAALqBgafLG3uNJVTgFggMYUZG1SgngAVt5tX3zFoaadBEzPpnjL",
  "key3": "2q6Hb9n2GpBBFHqGguJqPfYCeFnUoKWRWXHQsiZeHohoUJfPwAUzEzGLXEECoAPWXWZPsZgannrFxJ8hYCwaNwDD",
  "key4": "4djfzxwRGzmd61BKkbxnxiLyAMJENGR2VvLyTxiLpZkaFsj9NvDULbtWN582xKigoEBNyvcjTq9eUKNUTKujj9yy",
  "key5": "3UBEQZC1vuk5fcFX22Jg7BXM8f8be7eYcobeq5mdLRjBsgEbD7dg9dfTPheK1ujbDEyt1juobakcXoudu1MjoU2f",
  "key6": "CvGbimDiAJN2Zbi61teT9jgx2jvoFGobkWQtuwZFNpgjxgpdCK4CbBDP1o3g2xJYrSwv96G87g47qoyihWGfd8p",
  "key7": "4qYXdvA6FhvNV3fwhXA4MpPJnbaA7HsQaKFaCf6AuiS6gcdPnh1AN54LTFat9xbgKixXdKex2wWtGTwoyYUQLVzx",
  "key8": "5VZEtKk3Qamj9H9avNuVuVvFVPkovkwRD3h6Lq1ojcAwQMYvYJ3RZhiJ1FZhpHfWPfv8JjEBXxxsH56YXcQ3M7uj",
  "key9": "3MNgc9ducAPs2qV57d3N8Jpq9ebeDdGCZ5a4Sv94LBv7tms2ihVnHSmiWvQeXjfpoe9WHgMdNtKu6WNZ7zHbcCQo",
  "key10": "2dRbcNVXcw9jays2RN4KKc6KUFWrCJ4mdJqpTxbLpfHwVHctKYc3K1KXVvYtdjRRR7zMkCAgCkb6fKdF5xsTDqNn",
  "key11": "4Hj9aS8oQiADkuPGQgKJN3NkY8mo8Eb9UZuswFq484wcv6cAKpfmtqAhsbziCKdnBdQKDVXJkmfrY6xrMcr2AwUF",
  "key12": "5gYGnKi2cTbDhEFu8aTrs5Mp4aA1XDUP8BpNj1mmrs6muXnzcJP72XSjP1AvdH1WkpCi69Ko3LMWGydRTbf4VNay",
  "key13": "zXUuWWmuQijGgANokedNoFBmkx4XSqtc2i1NxaBEw8k1JELQS6xKksUGNybtEZyV9qZL5aYneiWSF9deD6MSujT",
  "key14": "3ybKE9QX21ZxfzGFY5zeYovZiCxCqdygtLWnhYXXtuK5SDfUzyRj9eyQUUNTg5QqDRbiafRvGqisiD2NzeUJAGsX",
  "key15": "34TVUqTeS99WNnAhGHFD9QqHtvdzzVsej1izZzmTAQVRdnXGdmfqf8DTGekNYCXavpR9es6v721E5EXsRviyHUkX",
  "key16": "5je7hyPvTGj9fTVk5ctJUxSyo5FkW9fmvhZG8Z4yeb2WKBYBpGESvWRUo22oprTnEZpiBMneyqaBfK4j2qTH8wNx",
  "key17": "3D2mZbcVhHtT1C3fXpzvoKV8DuxpeoH5RFZNGKn1GMDKY44KSUUfqzagGy5MDKwhbgBpBivjNMkuytco4D2XxKQY",
  "key18": "35eNrU9sjbBNe8GEE7z3JwsvsjGr59yUrhQ3x7L7R95bfhtbzFnsTXRWfWG5FBNR7LpFyLgxmvWrqiwC5qjhS8Rs",
  "key19": "5i3JwbZFzbvxGuPpfZesGjeLfa9TNhrS8mvjgGke1qwve47BDc7FNymQxocZU95T9eRMDnV5XPMQFNBBk1LrCJ2i",
  "key20": "39K22JbZHEk5fAvMAhnAZ7HqGVB19Cx7QtHLrQtbZe684SLY2VPaKCioMaNsKyLQdqPmGmsPREzeAwfhyksXYVfm",
  "key21": "2M4E2YBpCfuUUGuL3Gfu57jpCGYw9RTh8prLsBNDRNp7uxpoCtgitiM1AtpRnbCVyRkuTBdsmtnuViMmdTjWL4fR",
  "key22": "2CrLZ2p9pQpN3faQ29ZHA3v7RZL7aCNyG3bFg9DKZT3mWW9bfdMkkAqJniVuu4uj1jZpw73kfTqDrHbLXrxhuXBy",
  "key23": "yG8b8wNmEjqWTkfd2xRdgWbWEsu61X9LsG4pcrVCrgDUA52wtgpPU3FQsMGeRqKNPyhTvU58kGG241ASGymEdoH",
  "key24": "49q2D4A2Eqynmiq96dS1jhde6XzrawrA7Eqxazu97rDzrLScpfvUzXrRmoPvmgtcq6zNLBFyU5oPsqDxpcdmHMNu",
  "key25": "3BWtS312ErX3MrxZG4nzyxBx8ykhvSPZRpRgoHZAXmXzanAi89T4wrLQeQyjQNd4iE9mjUuD7ys85eu7fEZUPFGg",
  "key26": "5ohbCPyYtGqTPFS3tYnhBZZe8z3Pz1fFcYoc2XoRrg6YhGyP1qRWPBFJBMg7DpYyzTgdWb4ZYeqVGmuAvJAtwDjR",
  "key27": "2PJGAmrK3Yei5L9XLhLMtYoupNGrSFAs5JpvTYm6XMbWH8orDRcue8JTHkddhJ2YVLHXZ87cvbGqsF1Q2Ust7t8L",
  "key28": "3YJC4pK5neMWMQc8wnxh2zXR5nsr6KXgS8pZCnsfef1qsih9SgWeCMpuHnKRPqcRJ9SkZV7kodxKyeFNL7Za12m",
  "key29": "PiDFgH81hx2nZvYavnKpBmx6Bzn6cxtEJ8Me91JsWGrYnChvpaJariKkHReZRAv1kaSnwTxxiEjeorBZwufY5yD",
  "key30": "4EsPZk7MxiX9dF6gvWijGyUoiH9thWMKtkS366UoxYnudKGaPzBB9M1k5gHJh4btmvez9rRrGvryFUooKPswXenL",
  "key31": "2DsMe5fbsf4zPP6EKNosHU5nEBLgvoVmoKUh1zC4kNyRLEufxSex6Rv2xgrVms4VSTQYKgRHh9ret2M3MQBL7cCM",
  "key32": "TJQYZvj9CJaMahkHZVik4nU5NKd5Mu9V3twWhETMKYgaQ6UVDsFywagZL8YKJipbBBr91uBNqb7KJwzA21oJzfq",
  "key33": "5YaMaTQK43jTRzcFK4kPYZBdQmo1UKK63yH3f37FMPx2PvH1xM6pTziBv4Y6xeUhuYyqL7qhozpNzv7ZYCj3bhaH",
  "key34": "63oFa7xR4WHtipLGCd4MLF9EFeifPtrVQaeMrtb6yYcRuRrmA9KndxoPwbEsq34w9yexqvvrn4HeM43xEB6ik5yi",
  "key35": "37Fn5EAAKEuZGTVVEAweTHwEBmiDKHbr597ShL57ZZWrWBkF3qPnPc1TE4n1zcCvmdbwc5m46kXNt6yKUP86cWdf",
  "key36": "472q75S1hgXtr1b4mLbUooGTf5dyzQ8toBAUxXq6knE3NR33hC22PtFrkrPnry6PzhVEz1kS4nfzJRXDTUdSWn3d",
  "key37": "3jod92yjro6xxBZAY7tLzhipiCY1cFPBpAb44vq9M5s8yXqwT6vuztEubLU8za2hrPx8uBKpAYtextH1Mf3prUsF",
  "key38": "4mXocP1tjB8o7ActbqgGDvASwgdRCeQBTAmnLuPzncmXq8Q4QfrX6Vwguh3cLWemrcL2o9arBhJkzBzKRz9WMN62",
  "key39": "5AAi53B7gpYNaRVsaenBfzY3VUaz7uqK4UV51vfrJgqDpSpHq2kxhAnvs5vtrnA4U2qGTJiks73qjEEz8oj366sh",
  "key40": "44QUb3AtUtfcg2feg8suNro7diNKv6eskR8PLKdVbGQeCo3XGm6MAUs1u9r8oTQzuY6pCUeGB4KQCK6N5saSzBgE",
  "key41": "o5aswieBesyzb5xBwuwi67qum6UmsminvqCkKqoruaMD2pdqWAKik4j6wzbVEnQAvdLiQMXg3uAKiYVYDer1khW",
  "key42": "4HhTnJZMDdfGk3qbe2zDRpMRHgSLDu9StSPgK4aqrnusLS4ar2nVna1Z1FAhSqHiLua6M4SsxHWDzS5M3GybaAZu"
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
