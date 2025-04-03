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
    "2QeScfx1wPd5U7v8Zg82ztcfQr5rRJ1aPWdCW5Tm9CRYHoToSBadVc1AEAAYELYHPCcFDpJkdFaodocZ6HutRNHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sBhds9sSHgnNPngDtv8qJepaEShCiTMs3YHv4GxG2dbUr9kRbkwnFwN2HByrnXhRChYhaTqxHg177nBMRLuLNht",
  "key1": "2EZRELYyNkREVqYWJLyjUtaKEEhxGxtKbuYw9RBxy9iihudnbq3JepGhSgsML72onz8TQLuHNb8zhGFgbwzB65q8",
  "key2": "hepP8SE14JbVZtHL2jnujBFr511MfHeto9sELfyWyowb28cE5oFRpiQsLUNLCRx2v1AJ3yCzFGH7fbNMHwdzswM",
  "key3": "3yZ32dd2xZAY45GA7TUvLDJovAgkFEjVSZep4wjizLbHxr5kL6MzYCMfbUMzHvrggvjpyqueeuxBbqnKJ7NBi7dG",
  "key4": "2WK3NVxHKoR1brYBud4nbMBN76sdMDurKSzjcgogZT29TS8EwyPUbVg3ctApKvb8awrLhivump7bCvQJUgD63aJX",
  "key5": "ij75Rx9PyhjUZSrjcPj76FNRvLaGTVtFnGFVZ7BMRX1c4gTtaNkqpATuTPNsJsLYC1VBwwYoRAffJtEGEmytN5G",
  "key6": "4FymekkotB5smjVDzi7sHcQPgqQHutEeBDB2i8UboACwpRGByq2TrUxVFUTTL5qTUFYQ6P9YLUzTARCJAqp3UTcP",
  "key7": "3wq5SZkFeSzLLMQruq4NEQWAHnMzbFoFa7CzZW7iibgXj8SYKqXHAX3GPqerFXbjwzHqy4prK5o7azWUSktZBqZS",
  "key8": "5s5yswM2DahVHbgM7vwvc7DioRGrNArkPBgfnuesg5YrrVd3gxhQ49vxBrMUp1mpQ5eyKw2RTHyMD2c4j2uLCq6F",
  "key9": "WZ1qtpiEHn6RKBpRsgeQYgxv2q9WDttaj2db6ckGXZXFn8qViJbNAfJmorUpwc9nxfUJwyTwcLCDB9ScircpKjQ",
  "key10": "5Qw65mXcivGdwtH79aQJwPmynTLyMVcki9Zxu3exEQU9kuDo1ppnZXuBxfTuSSpjV7mhTRMyzNTQwc2NEhiosZnf",
  "key11": "4HFY1ibUzHdiyJkyXWnFJk8bRx8DfFyv3SDfPdaHPFgKTwVkbRdwfcsdTr6Jb3sKtMZyN5gpbqTTTCcKknSjv3zL",
  "key12": "25WvEWkTMc78KMfvEaHy6qXwBvGwPq7NDUxqrZvjn5VQekAr4xwJKUj3H5j2TKq43mCpaJRn3YCAyCmysLsQ4A4V",
  "key13": "62HJR3zoWKGhvQyaM9QdBSGWRAf6jqZs7J2ZZzjJczjxLxdavC69wctZrB2QupT5a2n7Hz3p3zeEBcDzzVUaaUWD",
  "key14": "3UroegdfvCZszgp1c9tYbaWET5PyaoMtqbZ7CTvMvX6g3VznNnynCVtNzAv9RQ8QNNT3twESK93CQrM6nZmw7qsk",
  "key15": "WqQtwcALgCUwzeH9cKQRJ2ww9PPbxchZaNJMVzL2shhR96nVRHbDH3JhndK2LjY9ZsJ57LckU4M7g4ovzUVP9CA",
  "key16": "1FjkQcVWifNPrn428tweB75TBBZb57CejJeC4Ujfvhvu4f4Y6gFScA9T8WZNAYoDDi1CYmp9SXdHgF2anXv2ceo",
  "key17": "5st5Ms8tDCDYTtnXY6Sso2sYkZhv9hDdw5A8EwH7SBMjyhvtRB9bBgAPgvTWxNhkTTMDrZRrtSoTELQxppT5Lo4v",
  "key18": "3Pk7wDJQiv9XwLbLqoQwx9TbHYLpokdXa6EJK2VfitBbKQLZzuaeJRbwFrtRFUaMiQNSh2Uz346HUk9tCfj1upDU",
  "key19": "4sidPQ8e6RFhXeVAuFqMvRBu6wK2BUSbBGDVKz8Qxuz2Cd4SHnBPWd9SxBLFZBW1u5egtbzfQwAvz8M7Bz8N84hT",
  "key20": "44TakePhKXFwmkqP4yZSpgZJaVfZG7DxfaRtiKfBuTLg2ovNtgwnyUK8SzGnqMmtgA4q5gzNW75dTPukycrbNEJL",
  "key21": "5TT5VJqKFwJnnehqPvymU1XmtBjNcHsoK8juC1Y1WqWJx44QHGH3jYyTTzhUFfKCEDbLYN6q4ePr97oV5AL1aabN",
  "key22": "3ECuikaSibEr9ZjCQUozjqwbyraRFPurHXrNWWhDwwYwuDids65wVgLFjCphBzVtPUgchwRQ9w1usWSm7Ykr4Qao",
  "key23": "5UVhLcqsmWCtobBnQVd8sK6yhuvGRbb5gbkvsFnNGABKHR4ugiuyvMBiki56U1KxPtpHyE3WKjoat62GJrC1fptw",
  "key24": "598nZHN8Z11iTn5EpWRqXtqeRa6teX9Ajfb4SLTyHuXBYmqiaYjfAy77iCNRRL2rhozmth2LUiiMhiEdc4prKaUa",
  "key25": "2gUgz4wttpzy5vVRBaYjgAmLRA6cSeudN1ohdXWBusMy8tCnrApApDggZq27eUCrkLn6nTgawTJSkv7rmpJhyJbf",
  "key26": "4r132AMmbBurz5UdbJS7SzPT7qqaBZcUk3WsnyXgi4xHNGyEYWZALsAHSwe4ADnNTNy4pHBix2NX3x55wZ7ipYDp",
  "key27": "5Sb3qh2FhRVsCbQf696t844Ys2v562NzgvNioJXcCjoQdAtKhEgsfDAmyUZ7TCooyVqErDHbrTf9EC9YRM8yqa4C",
  "key28": "31SrZ5mPLtoSWq3txvLYBh1hqrmEXmdUhabEhvaTSY3KJ7iVsAB53qJpTRKdV26VojA7Q75R8gidhbK1vNwbYPxZ",
  "key29": "2KZf9A2woSgaodFh7YSi4zgL3LPRZWMVLD73XPuDMEhRcHtFyprAzZETWJuzZobn1jyXTe9ZCqMZLLHMVuotL1PP",
  "key30": "4ULyPJt6goAs7nV8Wm6DzaxLWn1kvCYiBRyKtFrqRHkBrdvDkyJXpFSXdZ4urANmuvJbwa4YYoioes4TLgxzMUHT",
  "key31": "4Evkpa6JeFTGEQTQoMJbVvP2avLqvnNU2KN7KafeVyQ9Z6Rz3btktFKaqQFZqe9abqfwEJTC7fsMsbTEz58GBCoP",
  "key32": "51tZFzBXoLqQaTkuV5NPnJkXHPTDeEKFMvyNA9MNDXFyy1ju3BhiLkkFad6h4grFXR9KRSNZicWcSMN47G49wJtH",
  "key33": "yBJ8JdGv2213NRCttk2A8G1st96RMtwMsbMSsqgk8xCswzHTsQNzCdFUa3YMQG3fxj9sqhiNDpQZ6aL8aH66XSv",
  "key34": "3jbYVqHBhdiNf9uRcVwiCAq6n13ZRdXg4rpmZL9uVYB5Fb3W3VRkYtK5Mh2FqJQkbJVRcPuFZswj1SpDLXDHFGxf",
  "key35": "ZgRbu7p63MSidz6Uti93PCR79BieVCcLP3sndYdoLd6d7g3NqgPuqBL2NC38rFBxmd8s7qALJd9MVJrFoqir6gV",
  "key36": "5STSULg39BYK379UEuFexUsAVi3zFBoe8Qb2jS8XGvwEsdrqQntFnFUxSGs6qKg5Ek6RnssFPQSzvRhwKLMiTASQ",
  "key37": "8JnPsBkWhi6yGoQ5Hmmpj7LYC9evCpeebUkaJFBobnEMphbVeKpXb3PVKZDxhDhN7ZcJUewnbYybkRKSvrF1zM3",
  "key38": "4a3DiYbgciiSqsxeNFFaCughpEuRwDt2HbWToxCdFM5apDgUp1rjHPEE3WUK8E9zYhRQbE4E5yXpZiqyGaMj5afe",
  "key39": "XbuW9rVbGLpWcgkYpnzqnbA8yg5byoV9nPgQnkxHroiGEdME79BX5wfELqJmtT3oxjwxVBKLqdRjZkxKEDjJgmx",
  "key40": "2ThQGhp2B2MBMNyHVENQhNe2fvxwvNoWUDM3nQ1Bc1STNNTrF7BRQpX5SPh1u3jCMYANA5NfeuTq6qg7FxkMSRng",
  "key41": "49QGj6NN4u2Vd553zZCF2GF6MNJLhjCZJCfGyk3nNUfvZG6uFvYEfirgmyPdSCZEWb7Y5YBRJE99RwC43t36CTgS",
  "key42": "2QmFkNnvTfEfD8g6JGSe3M2kcsJLjtpVnGRuji2h8EH7KYC4Varvpd75jV57UUTKav8H4H4ovDhiA2E31NkkrSJx",
  "key43": "2zWWL6TNrJmWHEkNAe384LQygx3jaYM3HCM2LUgAErWJabzakSq9jDBejbroHtdgKB6ZiBXRdTTGW5pBEEmtGQBd",
  "key44": "3KLWL4qmUgHFfugWyQQ5dQuZ1USLyyDnxshdFdb1K3PsHtKLmZpq88WUoHkAcSUGoLHXrtozBSLai4jG7JnZ6pR3",
  "key45": "3dqmQN2D7Lw7hdtgYUGLw5QHZVGBbqQkcy64kSs4xi8LUNE1zKFrMW4H5maLjY3MZdKHwtBtFN1drw9ZUzNv2QbX"
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
