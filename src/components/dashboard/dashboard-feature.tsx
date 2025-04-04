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
    "3ecQCaR3aWnTniAv59ihxs1GTfKmNbKPNRUon9EbAkLjd659cejSVQhB4r8PCbxMK6trULwo3fgkFnsh1VS54m1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A1vBaEmaYxQR6EnxsztTSbpJUnzLmy1egLMEsx7jc55skbcqDp2vDgBDVZqpCpbBFd2w5NsJ6U7ubBG2X5j7KYr",
  "key1": "5imXjsDomdJ4hgWS8BeWqWD4UMLx2oNYFjuutSA24kdTp8qy4svDn1URzvRrgas683yB8kHBumjA12FGhPfvM52",
  "key2": "4diUW6gaewVCQmCCKzGToEsS9bjXfR7yHUsDbSUqWCYe9Xfb9RK281NzM5wXt5oTghsi43i3LR7FAXsBJ25Ww8EU",
  "key3": "5CUsW1tzTvDjLSmP72rSfxRgXuqsEfffyWM3ztV2YftVnnTFHaTw7K8s51UWYQsUsN9SVuR5VFbFPxq7HhX5uYHp",
  "key4": "34CSmPKSg7YmFZHG2GNH9EfXrScKZq57PoXDZGLBEUXsGDNsbEVTxHg5YEGUkNXrTmrGy5qAE5TRX4NAjpf9YpbJ",
  "key5": "3EkBMVQAubdFqizjJfKEfKwP8683WuvRHEfiAtUGKdBWh8f68AyW3NkoaKfnbdPsCQgq3wf6sSLZEamJkbm1pK2h",
  "key6": "HN2Ly33HGQqrUkhvbkuWfmhR5boyebPaVJXcXPDnSWCicsqg3cCERHio79KpeZwnKgmi2RfNAzAzCXh9KZyUAbb",
  "key7": "5FyrpEqK8PHX7jomEr7urMxcaK6XQtLTEvwbAoqaG5uSahqLNvaf7eN2TB86bvfRiav9LcaMxrjiyFyBDQs34cZR",
  "key8": "2WdNuUQVEmAMcrtiDDFt7RXLwmoehWtpHaL22A4xGocabouMgPgAt9PYHFk8DtXh1ieVAtQrtSsnfyyCPZpoUN5H",
  "key9": "4efDfFqk1Ntbhk3FbX7sddbKFSr3BLLZAPtZKxhc7fY7q3oHTAwP9HDChXXGPex7oNd8R4dFGGi5FZXkwiZ1Vk3o",
  "key10": "5YWADxqtiJsi72ypy6azvYK1CwgZLLbUrdUm22CJ2sqFSMKVXq2QHrCUcF7Yp789tD8LQgxd8XZpbw9cNrFzvz6G",
  "key11": "5awmuP3X1HA9i2NKKTJrsRZJn86tZioivfg4XnoBauHxsEniJW2V3nFknaigqwCM1AfQPFdYbTtMyaBD56ZkRqNA",
  "key12": "2rM9WSg22KmQALZyznVfrs572VfGm4QpBm9JF6pB9ApSzGxiFbLGyjdxR543YnSbJVFUBQTHN9D4Wm2nn8zAjPhQ",
  "key13": "3QjaCaThzLNXTs3bfQSTnCbk6Cd5eKqLrk5NF4z3skxtR2k6CFZ8R9rWg1mrJxDMBcjmQoWLjDKNZDEFjjj3WCQV",
  "key14": "5gtepqgtUQcYbk6xfLCrdZNtWz4kxHyu4c3xd7D5x9eAHBR27B2SrBvCffShk1EvyjrSEbw4v298fB2ovNNsnQrm",
  "key15": "2m2hCr4f5K4SeHYyJue8D6BQZZS8sAvmQvhpiN6iJMFCYF579jJZmVfssod2KmmCX8C41gDh6a6DDetEqusB3MzN",
  "key16": "2cZnALs7MSFmepbmAbGycr2B1xhdwaqEabT8DMm2cm8AxcRVERWuqGdXADpWR47roG3hFoSEPB3gvRbLsv8UmAu2",
  "key17": "BhpVTxMEajiVb3WivV4CtcwAeNeRSyPSRfizHXidcL1u99KWc93yNVarQcqB7RsXqZLxh5ydsDYiUmGJsSW94S3",
  "key18": "A9kiXtmsKAPXj4rcRuYg54ZGTityzWa6N9Gp3o7YvyCBX8NttYyJ4Y2JmDiFRfQo17UZunhEV1hmxJmPdgy9pd8",
  "key19": "5yzDqmpfch7eUBkBaD9iePAhfsFS1x4eAXg2XJFzXwEUwwFwY1msKA1PNZy5p6Rjf3i6Srgfmfxt7z5LvDjnUHrn",
  "key20": "2y1skYKkwoJ3cwVxHSCBaDbU447dxPbzqz1VRDB8LVkxYCPaFgRPK4QTRBnqTVXSRzdyL8Ks5gg9BxWWPJwqZuUx",
  "key21": "3rmK3QY4QmKwJB32MdJdirB8Minao6jWQmg34Xsiez4LS3mnQMvmhSr9qkyVgAGvj9iK1MjVGoQ6mfmrzuUp4kir",
  "key22": "mLVBPgQFNjoPt6KGdF6z5yQcN65Texo5oTLH95ijWGtpZRTnh1UH1i34j4XUmgwXi3XGrTQ6fSxrk91TEyWrNtY",
  "key23": "3mMeLbUNiXJkSGwPxL6oPuM7YtC1XeF1kejdYEh7MBzjbeU5R7ZzPeYK1kAR2MMoSyGFiVSjC2vSQ6QBj71JgP6g",
  "key24": "5r9NJUbAPuSpthB7ki3uC1EtKYbntoyy3vYT26HE5Xwd8XmWUCSwWvP8k6MsvsUDdnLRfS7B9bS6iRLAqTkgYucT",
  "key25": "51rMNr2AWx6Sb3JutK2sS6uFUZWQ17rVWr1jxq7U4YPjMEjXrEnbDcwHd2XfskoyFGw5JfzEELG57vYpgTrVXtwn",
  "key26": "2ixpa7UN2bAqfpVBpD5k2mef7YkqZ6hGfRrGHFBuNtdD3P3jJomF9fX8haxBdqkAXL4nEbB2h9oNjVs9ngunE54V",
  "key27": "3rXXPYSjuyfynYZVbakTT5vCPpckqpF4tY5PY1qczjMzg8Jrnjbuidc1xfJesxo8FdZK737Di8h25Z8A4ENL2WZB",
  "key28": "4vYnSkZYftuwg2CupFP9f3rrbMc3XtjAqjhfvfwex9n8mcz5PapJCpcCYMUH8yR3AeL98CNhGUF5suPJdmzqcXst",
  "key29": "523bBm8cK8aV7UjNabJruVdGwpdtvtvqoPNfhCzhrERvBwofiKdMFyi4rLyxNNViRFJuj6UwkJMMEdHFXqrB5rS7",
  "key30": "2g9deUhBVVaX9XS6HM9pbFTJu81xiLfYZVACMjAN5UDcfYj6Ef8B4wsomtm9DsY3XaVZRje3W2UmB9zMv4mteoGj",
  "key31": "652sTAMoQbde6rgpNjEHw9MKxdZPQGeuDLeivBYKUX93Vmbs4P9vDd3EkgirzPpgwyHTLTJsuvApHcLff9HJWWzn",
  "key32": "4WhgQ7hrMw8Xh2v2w4mqrAFswwcaNst1WMzAdpHs8U2QTgerNxSxkBz2P3gNtbKrJyr4UCRBM8XdM4E6SH1AGTZC",
  "key33": "c6BENajPTVZkWQaBpru8oD5hHEVtG6NjrBGZDZe93s7PAvs3tEYk7peuNa6L6LT6FvDLppAhePjYtgYVNWAkk74",
  "key34": "yqDttewbDy3cTfwYYYKBNYUkBjwrqDVV3oPF47G3zrgwJWVPz4meNE3SwBkv5A724MPjJXW5XWURaz5GXxutqVH",
  "key35": "2rMk1t4Fv7cGfkNdoWqmBpbMmguDjgipggxwqALo4vDGfHZagHMxaPzwPaSAquvYePiHzR7y3iuBA4e4Qejo2xNH",
  "key36": "5zuC6PHVViZkUvsBisEU8SfqeKii6bFqvyNaaC9jdReDrGRhJhqhJco5AGSz6Qj1N3e2AyTWQWjuhfaCRLZCPPF7",
  "key37": "55BBijpzoxYntneETXYKTwif6Paac7XvJ1CVLG27cHmmDrkVEvyh1wxy21BmM6QgaTd64W1Yta58TJD6oEmX7c3x",
  "key38": "2UgBUytZkaw2zYLVG82qYr5fH9bcjRR1R8C4PVLxACvDuL3KtFXgmTr4vRRFJpR4fiTsTUj9NuJn4gvKE86nnGr8",
  "key39": "4Urp6zpDo6Do89HZaLhACGMhqHWfrXqDANBJQ1vPfUJkw5EShwwKKv7kh1boLtyeD8hwWU1ThNMfcc5tqSFvbGts",
  "key40": "35DZ44ybZQ6NpsckBYEypTBDbsmRS7oEJyQ2LoiiCwUWrekCN2AfkvEcgtwFUUX3fNdWtie5HYcFMGjpt7LLRPnQ",
  "key41": "2ywweHJwEYvAQUx7gR9QFn2R5k8XbeYykgJf77UkpSqKtr1GcsT5G6HNjm798Bmnddt4pHTWSs2ng2T3dQXHKsBh",
  "key42": "d3PBoXE41cmq3JsESL5iZST7XZJPUBeQQFfApxvXR2ZWJs3jj1bUNLoNx38rCb7eR4XoX8h8x54bAZA5aKXhz9k",
  "key43": "Jtwk2L58ZoW48uUKmiXUWkAGyreVrr93QKuhG5ncgvHDZgJSb1GEEASn9BDXhZpCt3exbhWpKsVfxjoo41LJumR",
  "key44": "sBtyj2ZFUpPNsiPhFDxtCGPqJHxU1p2cHwKBf3dqnGRetcywN3ApDhkrKHmQ2UyHjKquHPWrLK4FcCiVdauC34s",
  "key45": "2TAE8vKKUUHQACrELmczZDeLyQ7fhMUd6m9UwooBdX4gzRKp8UU6DxzbXaGSmYyg3qH3mxZqUwHcEBN5TGDM3xXh",
  "key46": "5wRgzzz9vKpgcwfS4QrtddqJ3WE82PtDE9RnsFovYYwD9YbuPoz1ZhBVEdcNAvt5ksMT6rUuVMwxDTzndjBzvcWC"
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
