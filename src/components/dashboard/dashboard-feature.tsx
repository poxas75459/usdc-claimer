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
    "QxenRcS67eQ4oSFpCTXP1dcrrz2bdxvrL5kJvGyysN8kRfW4vtNE9Q894KEiz8VjziNyxr3Crdj7Y8tFMMmuMwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pGV4xqs8wm8fuh9NSwGLVnHjhyzzoNy53BuHBsYtu1AdKtLDheMPnuHPHTQTaHDgSfg5H6tmwRP99VpiUgfUAmp",
  "key1": "3ZfxQTyW7pLcMrDKwYxmQWr1ht36aHNgJYUSxJgSnVKegBFcbVMvR4eUuFwG2Ya21TGoXxTRdjvnVJ8t2QZJuxwA",
  "key2": "3kqLhC2Sb6S48tdYEt5AcHr9d5h28xGvBBwsrj2SrnapZ1xMfAnBcFD8HKhAxw2jd4Q51dy2BbjNHkSBecu3u1E6",
  "key3": "5q3taqUGNXLP7NoEYFM78fDP6RwJtozsyB1vXLSKGPnybki82KiE5KgDVKyTYQsbTarUqXdT3MdJfVMB8cncPKYg",
  "key4": "dyWXjiLLfuc2WBANbjzztMNZj9PRetge1kim3UXqKfw9UjNgkRw9PDErsqZ8EkLs6TA785fpi7NipqvEGpQFSAM",
  "key5": "LugwsLm3g5Am3XyTMsz1rNirtGma2PN61gKTm2wyWFeHGKUwZHDefUzxG5ULWppURajHSRDEAaAJvKRTzGxjdY3",
  "key6": "b5Un669uChzy8sWnwfuyEsKK1Hjepb3TUbdfsdfVV2uYMwLHejCygG57HqWKrPeUE3pd5xrof5q2gSeV72JbVCS",
  "key7": "3ZKqaYXB3qaZum16g23N2wfCnuS9fVM2eRuyDqJBWworXUJW4cN55hUJDS2pRzNTJfcXBovqRxHSeZAToufWkMXp",
  "key8": "3CB8u7BXL3LsoLoebkxCMgUV7nLiVYTrSn6gvmDR7hXfW6HdGLRt326LxBAcMk9JtoJLpodcEg8urKvLn7HpHThg",
  "key9": "2FLLkwMx4mcWFmTWaaz9tY35tG7czVPTEc5Msgsa1HazhCsa3HGVaRb7sB1EvGwkdQg8QRyoX81gAV9f2U72vmDa",
  "key10": "4pWMhFxzbkk5ouN7j2KFCqAgtRe5mqJStN9Gv6rbNPL3MdMgPrJaFN8s6hakgyfvabcr2sZ6Bh7hBcMcsfoPCXo2",
  "key11": "4SzZWnGutt9bY66jK21YCGZboxgQcKNLqGYC2vm5jepM1sYJPr5hpWExL39Xde17kntEymbdRttN8CUyHRTxLNgt",
  "key12": "GJSoG1kwqsjb2i3KiYcMvJVDUujM3KXgi9jYs8mB4UWJtXvKP3wUbwYAseQimqMHw8jxL6nLjLgswt2AdxjJzUL",
  "key13": "57wjKp23augHtRGq7p5x6wU9E5bAEBawYMCrrvg2Co4pX9taDDgknnegqdpRjcSc9uAA82cXTBfhZo7127digHJp",
  "key14": "3H8PbdaYkSjU9KdBqnJYCE6DdTFCLNQybyEB1HjytTFTHpkQ7X2pGxHGAUzAQENbEUdSQdYRHVmstez57JKmuY1k",
  "key15": "CRvB3FGbBtppGRfxzQWPXm8253oU5DDfFWcGofJUNV8qjdCGCsGR6A5PvUEpTxUu9eLLXcbuZG5Rq1pEGh4PUhB",
  "key16": "54itPJ1T2NAukNptJA2hhzouC5cJFAM6Vch6tbH4H29Ed4wacuhVKPVAHfCQ2X4bpCSe1i96jXZYYxt6XpUs38ev",
  "key17": "5ZDaY2zx3vEkK1fHo1AXF8F9R4V8wMq5Qadw7onnHfJKic4FnpLVo35zm8ew8732vSTiQBRdkcUu7qVEyJfS1zh7",
  "key18": "3uTXM1Ao6LFNUTpF1XjPsp2zEbJGGQtHvDzrJWZBBTjUcKSuAX3JJWes821sRL6JvRaZB29k2hos5FRCKEKf8HZ",
  "key19": "21PiBWpw43KMGWE4qNJsaRdHxR9iUa1hS8Hn7JWezKyNuCWZmvbuenZFCci2DZAQtYCX8BG7aTLhfoDPcY6WVkYV",
  "key20": "5QPG8dUv8U91AwQL13tXi3wqkhER1LLZoi9XAYBuzNPdARWvdHp2mdtNAw8zxn2Ey4H1zykioCinf5WWWjpZoWvp",
  "key21": "22X5oFhxZifinndZJVuu4BpfqpZYJExmJAzFCpKunKxdotkQLL8CchFXbhp9w5PWffUpJCsFAPE6hX2MycrvHdRC",
  "key22": "47WZFXKT3yVsDr8gmo1RLgZ5otG3qQApoH9SeaW187gnGgXiTPyM4gyQpyHftVBGNqFJDqjf1F3bLcxwUYuLMVjz",
  "key23": "3SNw6FeHK45crKvq8rV7f6VAAgRLcXQkZPTdvRQmbKw2xRonMcAyHQqcyF3wvALoAJLDwacjzBU65QX61JBdoNa",
  "key24": "48jwLwDNwaDYaP4k4pRfAzoq8R2BQuNwedDhWFt56c2a9Z6pdfk2UmuyEe6n2qngEjr6raMCLwJaLmjt7xv4bjNk",
  "key25": "5pqVP7nxHXcmstpsKS7AfLFFje9DutPjdYBx94ySEEewGedHC9KGYWPaHTeddW2AQs1iVi5weyzNLRBE2xqGWAnM",
  "key26": "m7EjJmxX8xZFb5KXKhmFysnjaaNMVdVh93gttm9ofjiQc5SnWvpySmGMLTnCPSovhXcyL5DjzAY53hRLqeNHj36",
  "key27": "4wrbLfuRfLCzUf7sNsKVvP5CQs2gVcnQZF3vVjszoEMKTU8YScPeEijuThoTepcfQ6f4xveFmXDpDNRGwrV9Hd7P",
  "key28": "5Uz6kjiTsn1s8n3BERFkTQ47ed7JrbRBsQ9bbuCCBgp5p3simB2LBfnA9y3dk3eHP9XmXYnbTz3LygbPfqHrGQ6S",
  "key29": "5579qENZk4TaDsE58sR2uTSKvaf4VBqDvxqC5hah2xNwcF9SPejT7bw97WBvXTjNmWSx869G1WYCdVRzHsK6fGr3",
  "key30": "2ZitPmiEunc1eGc8oMBxW9Smxk12BJeRJvxETb9aDvgkGig6GWJB9faa8Q33X72R1CfDXE8b3FfomfFJE4RbejoV",
  "key31": "tLFtbdcgMBiHUZbzz4cbE49RVEQdw2aWQ5iUcxJAy584vJy5vpriDvSmtq8XNyudSHxAEck2SQNBnjUC5k4ktRz",
  "key32": "3Y4aHdiknh5C3dY2hPdqjPBmJcVXWJh6HpdMP8qifvcACd8BahMTCRggj8F4jK2VYuqbcW3cwcTT7EUzEyJzu5Bh",
  "key33": "43Qu63fLtAVgsHYJJs1adzqQfim5aCZQN1pwpgmhhgKA8ST8X1JPL3dYhR3sudHpP2XhTrqSFoMT9qNTh6CeevZX",
  "key34": "E98rQgvDVREEjpEwD8SArc8Vi9fMBgA82g9dHoZJDRnbPKNWD34f9qfVPBuT9tYAoGQ5aDgyRB4KGnkUFZU3ejt",
  "key35": "3oQMmFyV7zfWB48Hd2AJYCBXqjVnJJ7FYVy7FJ1eQKYEkvJR4HvicQMo87uvirhoXUsv9Xdp1NmiMjeqMqCoHkBd",
  "key36": "kG1SNZb3qW5KfBmwXWR1SMDFxYxN9HMHMUSJpgfwjLbYyqfEHrx3kthRe5PwM8XkC1GRWWUboUqpxRy76c6VJup",
  "key37": "2p16QeoXBKHdi6G3ptDtPtv1hNWDdHPUNLpUb3JbzUFUXtQzeF49pz6qX6FjLmH94YUqo8DPEsuXUf8xKwfLTCuB",
  "key38": "5Hkq5ghhg8uRohv5PU3W7ZfDgF6a2yFQ1hrVhWZb49P7GHTqEbWeMB4ZbDG9NN9oSXHeSTamnfrKJfxbRGMLduwA",
  "key39": "41sFdRivuYEkdTcsmho8moA5Stmc5sKYaBdVtudZN4fLkhaMU7htUfngaFGYZKRHMcsnqMkxcXR3EH41rViDw3SM",
  "key40": "2r5HthqQ8jNMmSt4dUo7gmPdB3rsGbt1JURShsUyqQtCF9SBJMHK23EYk9PNQgLmwhd5dUBoruMa4wgGSrvGMbNk",
  "key41": "5fs2GxEUE7QFD9RJPezUtBJXop2goNDFw1xnThaBCaAPxEYLREi1K1Er513njxzSkC5xCXWZfrWgtU81hGudKJWT",
  "key42": "2o7PueJKDAKJze9ErH7botZtte5vgKNuB9dwZfLnXDXtzART6W3ViTjLXf5cnUukHt6tKb3RzbjWsqBc7pstkWvS",
  "key43": "4EGXKz6dRC8Fot71i7KGqJn1EQDy8SkvzSNtPJuvoqenmg9FFZz83tfSipYX6Gf4TQDv1ohQKeDBwC1GxTFf53Fw"
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
