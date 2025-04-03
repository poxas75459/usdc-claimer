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
    "5uq5DC7BDdtBF6HAHQAsXVfWt4BjuB9KAzyrLwP4FSkBhXmofq99UmBDtLL4RQbQTJpARnrPtjKYVmCknt6MrrM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57YoBXM6WprKXmRtLRTGKw9cFpKKJT82j1C3FfuGjxaiQ8YnWUKMm728LSopNpYkNi9bmcKydiMDCngG8D2tH5dv",
  "key1": "5DKhbLhEPKewMJQaRq5DZGhGqFk6fFzaSg5erKMm5ZEUK5Zo1HWFg2BRsHYC2XVdvdX5ZtjAaE4VSMqptoY2pDv4",
  "key2": "3sXKedWx6ZcrfNZhMtmfVfYB7ZxZYFPUgaqheBohdGc6P8YHgixcGRgg435KHmqSTQVDhCz3dc5eU2fk8btkR7c1",
  "key3": "2TgKCdSzUDtiDQT5nSj959DENBrgwWsYxb3Qy9sjJPL67G2T34rWFVdJK3XrUrvrwzRTE5MY4eAFcw9dnngUUgE",
  "key4": "24JusuJayNFeETdHsbVD6FP4QwaQdMsL9N6gbMu1iDtXKEMuMTV6B8Ri4LAimNpjZiF8cXdXqCYu8jbny2Wzzi2g",
  "key5": "5h4ujd2zaNoRLUzVWWvhgNJsiwscKWu3zUyTwDkEXHQDWFkfku35Jjew3i1ZC9PeECMctQJxbYvNynHA62RbuCFi",
  "key6": "Umor15MGevez5eHcxqKETLKw3qqB6wc82K4ziwLvZVCQtb8g3QgTCwqvZ4sydC5AYNXE1TiaG71QxPBtvAtSGip",
  "key7": "2ipfjj5CKQHxp8J3wYSgxEGmjELgz3ZkCLui3sTHajnbNUAy9xzMm8WFGke7XrnpQdfYizqGm8wr3P26CNLPJ1AM",
  "key8": "RPeGBrMNupfMWx8LaCCT1876MfFY9puua8Ps19cHxDNGsGJUhgm6NpCztyCGPEJA6ECqdddHBv1DD84b4kgwhk9",
  "key9": "mFuMv6GgitU7XMv5HQfgcZkagjet4qQhrLdkQn1AtZrJmThA2syV8EDQHWqQwdFdLQbnpRWvEVLtoTyb3U9aC9G",
  "key10": "Z58ktVDt9dP6sdwuWyWn1dpyVpKqLcvAmz9u9ZLs9j1CgKgRZyPAuC5ctMTCnWeCahCCxQ3vjnM8uJKSP5iP3nV",
  "key11": "KBKkM1kHKXqbgELLpemt9GEfBdps3sK9EXK52AD7MFHB8xU7Tb1F7C43MndbgwKtEu7fdK94vdSgFRydJz5QEFs",
  "key12": "5TheESH6UdsESmkEF5uztyRpeY2UKpxVPhqq3M5vABkVtd81axKBDYfNtpV5aU4zEeNiCPJ4WvFxnkwcKMvY6RPg",
  "key13": "qh7nycEPiW3PBuNLJy9RnwoAyQuTRevc9112Rvn2z41TWxqDkxuHJ3BmiXLGdqvownKdduu38UDhJ5oCcjejLPJ",
  "key14": "34Gt5apAwm8VxsSrNP2Mbgg7FYFB7ZrQQuks4KGaiC26LvEpavoCtiquDtAUkXkdQD8oNWHrD1oEayL6nTVaWDfR",
  "key15": "482zBf8UxQqGBPnyS8Acfc2udoJC37Fso1CrBBFLD31uxoMDpHXsDEnpK4dkhtGZbdiXeFgymwSDyn2NRBfpzhue",
  "key16": "3ReBKxwcn7hK9e7xh7K9xLrwVLtKxN3bh8dvyj6RJH79HJ671evbMYrCf6k2Nu8T3TAMLPuSqa3DrSUvgXHNWjow",
  "key17": "JYF7o8oPfV4Kx6wv3YipBU6yqMjPXgkSJPQWfL5fBVBGbYqgnMvGabrQDdVUTu3zkWD38NyizjW7Ggr5YuMUVGJ",
  "key18": "5pDYeVfeBR9m8AtzCQxP2DJJZe6PhM3cRWBQs9Qz16jM9b2TWY7nfAh3R1S1D13QT3sFkoqwuz2BuF1VcTwZtoyW",
  "key19": "5XswKArVGwqv8NE6tNdDBYi5ie3GiifsEdHE46WduPjqZbsnxU51L5VErtHYVS8eXLKhGyqs9RGj9S78a48LrwKA",
  "key20": "5p75tUihbpbvY2qSazDF66S1uDC5CmSKtDCwGCtTn7Yjpq5kJs2sWaf3keimNY8SSAborGU61Z1zGd9csr13m2NX",
  "key21": "268hzHQofgjQzads2kV16gM6PQU2X4Zj8j2nug9dSdZXJumGHhbtXu6mBwj8fndULL5VNXLNc9GHGMzDhH8VDYc5",
  "key22": "2ZZtNjxmFqgDSWp7ggKYgepHaBr5BMwRSR8Ky4G42bhL9RAf8njETt26MbNXptwfq18uwjWNVqgWcRyYPGYCNWqF",
  "key23": "3tGyRhimFqtsWKcbwoARJSdkathrLrU3F7nHwjneqqKwcmF3KpfrQ6ynzp66U3NAR6LTfZKxUi6v2jbca9jcAp8C",
  "key24": "esRCETZS7UfTU7KRnUVy15X3Qm1ZMwwwkuGEG7pyQmbPy3zei2YhTLEqYyHwcMa8UPe9yFhqb8wsfGSTNMZvt5V",
  "key25": "383P1pQSUTkg31GZdby2mdGCtTK1pRYbt1b3WFnbvEadaXGGaASMamnKMn1221hAXUiGVJBqSCDqucP7TrtZZzSh",
  "key26": "FMKCthTCwTfuzPV44VmLNnGcbPUhTu7vSMFS3HDT27xh9Xt2F3PuhkdCqQ5PZyWJXcGnv7LpWwhELRr6ncPDpQP",
  "key27": "2LWef8yCgK1ECXqF2tVf4egGEByCm8JAs7g3ZxYshA2usJJ811SXspBxEuuTEeBa592jiDjHpyeU6N2aA1JEB3Uj",
  "key28": "25ZC8m2GxwW2UWa8mdBFCseKSYnM1QJ7TPryHFfw4CGAQjEUtahEckCENkGjxXEoRK7kaVQscnNP3bBAXseKYUcg",
  "key29": "3XEBmBJztZ4Jn1j8MU2d3MwM3ooHVuiMa4PWe54W7NnM7by2H6Cc1Tc6rjFBJbcso5Fzv5pgjoeetpfmKgygj916",
  "key30": "5zs8vUHJKP2xGnAvXHk9sn5qjBSXypD8gYEgFDCUBcfciAbrHtZNjZ2LwKxF2vZuVScFnKEWvwtsJENBj6xw6thQ",
  "key31": "3npipRrhM6qkM66WQa4nh312yg9dKWpvPMe2kJVpvv34Qkw23PFenTevLNT1M1fFt5pvPzM3epnwKvPBEcYGmr5Y",
  "key32": "3zjyD1zQiKRu7CeBTRTaYxminG7qDogNAK8E6yfN49H4EYHD1YbiRVxqf3fjxVJ4TSCWD95p5KWpwmacDgzASieb",
  "key33": "2YnqbPNk7nmRr6oC6n3pA8qKh1sfXBcZ7M7TyFd5sehASdmxze4CbeKa1HZ9VASjArZExmVJzgcAVJUFUf3BBJms",
  "key34": "5iPxEpgmmJjcJWbkjrVVNX845ryvCDQFvyAmLAQJaq8nXFMyFe66LwHTC2yA84esEpSessQEhk9jFfH3AkEUGQsq",
  "key35": "4MYwGrLRhCSg4HSH5UEWJCbnz5UzczAq4SX25FnuJk79HqwbbgFJeEoh6MMThgXTEGJPE3pw4x9e6ADJEhkY9UPj",
  "key36": "5s9u9rppxvPoh1cq7LbA3qy28GeY2g37fxH42cCrYzHXCHNrqDZhpWza8DhnyWReQ1qWGEoFPL2Mi7SHPxqVbj2M",
  "key37": "5sK2YnFZTYvwwgMLCF5tDmZF3AgxLBz96Ej4RhbkQMngRgL13jcAytWmAjs4P7VqrarxW8fJiURwG3XzCGxd7Sq",
  "key38": "3SD8a3hHm5hCNHUVNzfwTAMBTvYfCSfAaYJCA28DuzLvDz9xuqi17jgwNa8gH16J54jZdtWvSFagEEW7oG8zRXDR",
  "key39": "4GUuroxX4xPUB3vptkHeLvAKHmuEqXFJeuJnWXWsmzUzRYgCY6L3dAKiLtEdMd4xFy1VJB9SMT95imUrjw7bb9Jx",
  "key40": "4medFkLWq7QXSPRphF1TALvyxnvse7eSXMTDSgdTW3vw4namnbWCRinaHaoAHsnLrkFF6UdAmz9EQ7pxuRoSbiQg",
  "key41": "5WpAUTbd3tnWF4mdPiQjD8URhNarnPqa2F6XVUTTH22fUzsBjMrGhysCsVSxwtQfLxqwmqbVkAjjMVnM6HkRPsuV",
  "key42": "2E4xGwW7AwWhSy17ku8Bx2MyQoxuFUzb8kiVmgYibGGEDFoxpYEautStPnc7omjmuQrfq9xcY5NgwWjvsZBkP8Z1",
  "key43": "4zDRUoi39FSnr4WzgvyVdN343pwzenq5BayBdtBafhXK61wUbBeEybno3EVyatoZxT5nM5aodtNfwrLjuK4DU3fi",
  "key44": "pW7oNvLsNsmkYZgPZKAPCE6Wx6YB3Kod6LhuSbuiUZHz4hDnaJbMvRbx2wfcpDjqLpeiHXxG3gg1e4CKNgvXti7",
  "key45": "5Gj4mh3Uhn5RAkeqMvYhG9TaYASGozebFMTVYGiWpJAzGEtTvgjwNasevChr2b6HRKb6nBNeuNyjwc3XcqoSVuUu",
  "key46": "2U329J1sMSQswuaa3b9Np9jjiwBES5bLwQhV1mQGVkT35kEHWTYbgaeMZsE45c6dmBRduUdazpathkB5Qee3wHGQ",
  "key47": "2QbYTK5jLK1jQkQWbzHn93Z63mSd4SrXUwMj9dhrkzFMhfFyUfE2mL3VAbMhZL1KEa6bk8KzCptzoiXbuJEYTd9i",
  "key48": "5d75ta2dXujVYvbRnfx1QptUST3QiwpAdSf1xKsPhF1YhMDqJL8wfrJiCjWrN3aasDr3FLXJr3qM3TNqhrpDLBqP",
  "key49": "5Yzs1drJL5hqtqYyu3dZmqzvxz6Y2fj2RgS5LsHsAL3BqHrQJwnFvAnYFuZhUfu6ywCYSbx5RkQuGXu4jRJKBpHk"
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
