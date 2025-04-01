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
    "2ADRhBZ4CHkw4UGf3aV1tVGPcfz5fmtKnuFAnUZ6kxhnKgkgdSbBNgHKXaCsb7r9JuVK2iijbTDwdCSBgpEi3caX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aKYE54dy1EJRDz5dYWcT7mytyC5aEauuZBo1ngZqbiw2yak73caQbLp5X6t4joF1AhHb4Sg4h1pv58SWmtHgTXE",
  "key1": "4DEBSXsvwPdSyVWo3MiLHPWzBWiRmqQxo3PjHT95fEgFQdq4ZYx2t66KuJvd7oQ7ex6HfhZvLeueJWnEv4fWLTcy",
  "key2": "5UVS79uwatpqJohf3Wido2hx1eitM6KgrzFBneVtgqLTSh7dAWXvHtF6yVFTX9AEnZnjX9er7rLg26XsoRwRjwRB",
  "key3": "3Dgof81L6EjEsPiCQxiTtypVUMHdP2Te5m5Yyp2jsoQxnJSdQGS7ni9fVcXDeSbnEqXAxUgUdDMz49cY9qH7THkY",
  "key4": "VJkvAVZkYNcoMUWLTfS2jaSjzsiqyqE4V1rScNUe666dU32g5jZ3pv8FSDBsuXnQgujFmUqBmWEagNuzT4xyXRr",
  "key5": "T36s8orbzwdtaXTjZMM2S9LMH8DjfcwAyzoyPjmUHyzsLYz53gEDjPEGTqPQXGun6QjYLCPaFDPB1Q7CvtXSeWB",
  "key6": "2D3AdbF7UuSbPwKWV656cBgWBFhgVCWCsKTLprgUjND7N67iCkGiRG4f25uVWvm7JG55EaKUaFmQhWb99jjhoNYu",
  "key7": "28rhu7WSwHxvbzKRhpskKoZAMPHs2uZ2oVwcvaeTuq9WmbLpe6ChUWnjqMierYFe4DWoBDNGbQfU4UGUri7kcqE7",
  "key8": "31XmbLyRpcpqwy9WHadWayCxaUt8QavipZrtvmgf3wGW9YyMzBxpPk2i84Ay65knN5sD4GBmfeEcRrci1Cpky6Em",
  "key9": "62nh12xizz3Anhj1Uy5uDyZRJzCavJuAec9EPRx1kgonNUABeix8evTdyikcegAypy42SGgRNJG1KkEgjfe7XsSv",
  "key10": "AUCja5phbm2WmZyd8nSa712zgRbzb287rFQHEU4gLB1gBrhTGVuBXVPAVnDfNozqGnxaXMCxkbWQ78LQWbJ9ZyV",
  "key11": "4RSN4EuT8NXGxgVKPPaGVSwBaJfpchXKwL2PDSz3BvodzoE61VkxXCVEgnSWGj88BtkVKacUai38Dt92YZiJezTL",
  "key12": "4ti2Lm3jupSxZBVpqVcTtBAS1nPKaMEw5QLgwTMrtF9cFNt6b7E1MyUDoyGvmU7PH5VmnEmDz4TUT7AF443PJ6dU",
  "key13": "3BshbmvXuoUCE8hDXhwVorjbm6qFhVaAQUwZZHzXweNCrTjzdmDYr9zN1psaX2Vw88cFMBKQWhPbC46Ajh16WKHn",
  "key14": "4NB24vocSKSVT1YgeYJLeR8s1SdoGuiRMJ4ToMjTg3CyEQZzbT34orJLriQCYm9mnED18LewrSiZokrmajj2RVDx",
  "key15": "5iAMf17rY4proNdGBE7ZV1ZHE47oMYfsieABx7hBRSB64HMexAM9zDGLMq8SWGV8LuRpjVYQmM8YKf1aSHuMzxmw",
  "key16": "5P7Jom9vSAXCxJZjfoL4ETxtRmw4C6RkWkXggmQmVxawuJk2q3BgRMxNfWKH2u1xZkgZWJRnmZppGETEkJnN41zH",
  "key17": "5sRnfLmyL1VyMRHgf6AT4jYtXcJmzZ4ZrNQE5dcZmybEXTNKS9BaEzhWSuP7W4XXaEkjK5JZZhr9va9BhKYLKrvM",
  "key18": "3fv24jqyXKSdSxfmydEddFKyWhAN65TV9L8Cbb1n8d7kAsaB2vgUbHbN6S3qxe8krKZScd4pwxDxvkYNSyBNjMp3",
  "key19": "5kVeBvr3GrFEifZ4cJmG9ZWvTzkMjnfpaLyLZfhB1ymESSSdUyKyfvWHUoGeJUETSwunuMMH6MrptZzoQmbkBLAU",
  "key20": "5a9DLvKPFuu9e4KU4VGWMe3H1pMahYHwBQZzXZ1Zzuh1oRkgbho7vxny139tN8jF1mGRw55qLp8hhAWQug6ncPnc",
  "key21": "4yk693X6EQuurJvuAxHtJRRRvrPv9a7dga8QZmiEg9VSUfz861vjowg5yxcvY3Tpiav6Pn13iv2AeUvcCKjutgJm",
  "key22": "GLKCQfDhXFXP9Eq66ZSYzJrw9sy3VUvRY45SvBY8jmfe4qCk4oybZnCS3b3vS4FLiwyAPzVK8913RE8VoqvXNQj",
  "key23": "5WtgpogdRKDuyv62VcyhBgmpgXzdSEugoQe8Hvu6um99oMqEBJs9UqpGbSiaJSbM81Mn8GnAXvfofSfJZXidUx7d",
  "key24": "2sCHq8oaqxKccnsV4kthkP8gvNch5rqRYe5ZbGcwPJgaoZeDAiihouZ9XwvFycTDrX6khHsfj7qXkfiPN1QZjiN6",
  "key25": "3CJupeeGPisbKV6wwRAj9ndAFtE2qLVi83Sw77CgNv1rN5ppy9Rnc5gmWRNL44da3U2L3d9oyGegzqXicZ9thq2Y",
  "key26": "qpYPcJCWLPw9sSZ8jzLJT4WzG942eo5YSHzeeUFTiWjfqSgMfAC2hxyiHNiXpMEad2uqDKRBbtqwcWw6k2Kn9ME",
  "key27": "xoUbjGgYrLogmRHD4XNCMJQfudUNzFw9ZkRQ5F4uj8jF5WPikm4Jon7rrV6KR5bxmsSS6DmHXUsYr4utd4vEe9r",
  "key28": "5y8ib6fGwfXJCCXAoceTH4tfpEYPFm1eVL7VDuhmgBkZn8JLMsRQzuz73viZkw3Ci3eNSBxBenQBLJ8r1mzg1eog",
  "key29": "5DBSP3yxDJXidi5cML2Q2CR27GZd5poye3rcSEyk2cptji71LbQqrCTCe57LtsDUDvjXGyCrKQvRfSrhy4LTxBEb",
  "key30": "3UM9KSFetXvWNpkCYgA976RHbCuuYj9bi55aNXQ6BC3n3uNJm8y5XEBwn7cbvEBu1YLjKQuXLVvcm91vQf4uhf5H",
  "key31": "36Mk2qNTyE4XoonzPRajEehfsYkuT3cB5Amni4V1ELnx7QpWoGM9ZSUmwqVzQ3tucEgUTyFv8NP6JxAoVU7eqzd7",
  "key32": "2NnLmdzfRQ7bHd59kS9WoWXf986fCpifFNR66s6pPtpwfU7VrhTYH2V5x2yrS62HcYAwuwtt4h7WTVZQq6etsc35",
  "key33": "28LN3ZYqP4xbXrfcBGmpFSMjAckcJSv6qWCvtP1CAFVUKkfsbg7KzHKG6VtZEWicwT9ijqendtNDoCjcpr5Hp7be",
  "key34": "Rpy6cS1TAhAyBg4EojHvPfjQpK1v3cdQDbwynUmNMQB1ss9aCxDEGjzwgrXDmpxoewW7vxADmBadqr4zSqWN4T8",
  "key35": "4TpWqki1NAet3DgL8JNSYKWjZK2GeM1Jjdx8L26UZk4qM1jotgDF6nyBqWQRGuBbcqJ4WoSuZi9wVEoipV71RTm3",
  "key36": "33BsAjwWqpN8Hggo1vKofJUaSWYzz2Jdq2ob5rQA9d14hYv8gBi9H8cFcLtoWSeASCU5WkDNT4tcSqo7X6Abq7Xc",
  "key37": "uMpSyqCt4LCoGKXg1sNXCYUTju2dJfFRUpZcxVZpzxp5WkxK4n5upV6TSkKmBbjGuVP9syu2DFawzUCrYLmV6mN",
  "key38": "2vTvRy8bCFTqrbA1Zq3uJ9SyXuQb7SnEZs9BCWY8JJARbNVR674aAWrPvtdnXnwzbQVh3CNE3a8WCcaHaBJpkSUG",
  "key39": "5WZwfsvkkmwk6CanJHBBHhsrgytKkqG1U57J9jAXGDgmrTxG1qkRecgroFy6wYLLXAW1XaFiepegnnU6UN1dQXjr",
  "key40": "5egbC7FNqqEAZH9HsaF9C1Eoqfj1DigMSEVRW1XE3E5uikeHQ3397PVAo5xpcJkqhQd1jngGbjbU5fcb8T5L1WfA",
  "key41": "4MUKRmN8YEB3Wa3PF8aY9MwxAuwqa4b6dFUZaMhJPy87xx59hgf5LTVcX3KnLDxqgydgPJSrF1gyesSxYe5A79Ss",
  "key42": "3EeH2DzcEJgAm57tDSwsMwRSBfXc9CD3sgL7zEjHHQwTZN3XoxihMz5btKd2c3LgynT8vFssJCwWm9C9xEp7pY1G",
  "key43": "65TAiDg2ZSUDZkmjGkwigiSpEM4iPVboTXatbAvB6aPggGXajH2MRQoVz2wjeEitw6qzR87PJH5unW9iF6XtGm9W",
  "key44": "4WYHPrC6qGjncamgbjrcb7vjseVt3GuvEfgc1GGRsSHJCtwCnKKM3eMJc4FYFQ5D9Q1hoUsoZtMCVxNhLwPuDkec",
  "key45": "5dP3zNqdweZGfLLzcVvHHCue2LsiKdAY25jrsTsuASLQ74P9wvhbBT2Ua7pWYte1ATXzuk5TAZmzjUMJG3Yp1th5",
  "key46": "2TSJMWcMrbM26mKFnP6wQFhpcDKfAsg1U3i3CFRPAEriJ7i5TSHTng95iVz3gaxxncVpDGrud3YqK3nh89QTpP7F",
  "key47": "4CnzGpq3EwQYjHoTxcwx9BorToru3gxRcb4WjdL7LPvD5gaNstEmDiB1mARbNgiiBy5wpjSg5dkjxFS7ijACrjsU",
  "key48": "4fBXHwSYwqrGzccDK3hYkUb7a5jtgWXhZEMqXkhcY9FdsGot3XiW1SxSc53x5PQAdzx1ZYdGLxy2Fu9wxz7Vyz6z"
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
