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
    "5A15f5313DNWycyozpA58FQRgTS3uBcnN2CqgMkCNnqTAyzizBjJsUHx4F4zTNkjG8dVMosQiLPjA87WhRmRbg7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z8a7TGZH71oh5Pwcvx1oREHeoQsKzkAmNygNWwxDSDYbJGxtXKaggYg4u3FSeZ8ydV8SqGtCvkgwUCi8UfZHTn2",
  "key1": "62rWrKuhxMrwAYvPodCuRzr4Zt5jHwVbiWfrtfxLGCH7xrLWZUkKVvMjPXAfBX3K44TjS6adA1QDjxyAGUJF6H84",
  "key2": "g13Axn4Sn6xNf4stQknghc8eBXfnCCXE2LBHXEwRWeSmLRPCDQZ36P4s3vqa2K3m5bGS9Tmox1SJ1RoaGFDsmoJ",
  "key3": "4nQdqovWKjyvwJvFrwPMsn3qxEzJQcRB3cauCnMWRvGkwUetLPQsDN1KzDbPvgpVa2ZKKBoX87gktYcageVGSoU7",
  "key4": "4RsT6NACt1fnW6SmUHvJuDCRRzHG8c4kNfP2vXRXk5P7kiLXwAvFYaY8HYQeA7GQEajfwCHK7AQuCkP4ezwJXDoz",
  "key5": "3DuwBhzxJWCUtoJbV7hPJbxjKna1PPrPgEANkTJ1tp4fzuFGLyYtuSueLjmbPnMkfK3roQ8tY45erK3ZqKNqmUyj",
  "key6": "3PLwQqozE6iDWd7JUg5AkwW3uXFx5Vsnw1zKsfCFLGyNWYDBjHrRyn879CZfGMAL6KbXTHUysyWTm5xWtP96CRLh",
  "key7": "p6x8nquhhqenWPUorGfH4eiYSohVnv24fLD1uhtKczBoFfPZ3biPTMdVXV3sa7r9zD4hNaswNzxm8uqXZotTTks",
  "key8": "7Ero37EkGxcq4iR3563xYD6RAQf42umLXP1NUswcGvpzEqwgF9c5KTW2bRz1QMtxNFfbeNfFEqdXJ5EDT4VjeMf",
  "key9": "5FdsJ4bduzCQrZuP461dpv7ZucKqLLQRECy342Beh6gsrVABfouvPy15CG5uYJMtdGJ3RgULevejwsZ4Kakb1uEd",
  "key10": "5wkwDW6WTfSaCppwZyW9jYqrEHqjgDCp2bfceMLJJuXhst6QGxxJ2w3XSUsjkvYvk21k9khFbYqd7EnJemUiWBgE",
  "key11": "3uKdCcznYmp5ocR7R7j2AtTJ48grz9RgFVbtmumGwyQifHswuecmRVLkwGEdVCyYqvfKMLC991CNjYeGn3gwYU5Q",
  "key12": "2YromKvKh78CpbPRMgC8HFUUt3SWLR5QYqQG16bcstgnvfKWgVBHrMzxMUzWanfZQpqM3tx3HeEXXAKm7mU6yXHb",
  "key13": "3J9GBzJ5csKLaGDhNPGY3fWkq2LK8Qc7dTX6YHn4gxpNZz6Gp3SXV7BUPcUS6dUt21Dva56XzZZY3gHX6FHpsxKR",
  "key14": "2zv1KuqpCsxY6LtDFaVcQ2o5gCzEYhh5P7cBkwkgP1mt5akZp4jd9MkqkgL7G7FAKQc2bJkypgFgZmHEagwuBECo",
  "key15": "hKmdfwmj6o8CcudbhCwwpkgJDafqhTaDa8gGX6AYaxfBoGahavtCdhbeqDTyskWgFb1tmB6qPHbYyNbyD54ncP5",
  "key16": "SNYq8vGvDoA4xuVmAACeqwx7ASo9Lt6rTiNRYXtnyEkKu95qPrpjCVk4RFvo7hiviZtXYnxuMGDhj5QtZj2458Q",
  "key17": "i6AQKVi7msjsxeTMeiuTVzbYAcqnEa8BXtQf89ofkC663jiYPk5JBXsbHxWcw1wMvqWHFNWg6JYtpKpkiALXiku",
  "key18": "3UxDeNoaZHEsUuUczbYrUGYaKoDK6BAMPA7usC9dcxzUtwPgVeRdP2u9VQyXWGgjPW8adffEBPkGuGrcx1GeKjBR",
  "key19": "cUCQZDVF8jXTGah1puUYfNdogUJ3o7oR2jARSdbN3vHuDuLx2BrxBY1TdMoLvzmAXRpKFTjPjW6p5MSt6g9WvU9",
  "key20": "57D6mkjMQcQVSnUhWWEvqRqrXgyamYqcFUWg5NoW2LwB7xP73wTTBHasopYCZHMKj1hat68fqZUHWxBGVBzZsBzX",
  "key21": "2A1VPt91YPBNWZYZkaSiEPNXMwr5ZskxmW1EXJBTS6sSSWjfbCGJnXzpx27MySYb9GEEKJNUVkygXU1ACWq22Wwe",
  "key22": "J2bmjx2QUm9epCMJqebyHpb9bYLe4Qa3uRCCBEDZhsi6aHXMS9CcQDj3ueFkWR3mLUyvJZULA8wRXXqLwxks1Hd",
  "key23": "TPYBqSBkPpYE8ntdgmkne5krfTzWHmikB3U4z3gd5f6PnuMdrHV64WpryddvGmJd6zw4j31YXLUeqFUDgjZqWr9",
  "key24": "3o35t8wUbJMXmgfhRh4tGmWMjz68qUFTndyiCWmG3DAEUgWBsf6CwPhcr7ZyyfHVcFysgLXvwDPLpXoNPV7HJyy5",
  "key25": "4jshWR7GaxMbKNCF8CfXUEMy9WhDek6q8gLrs68rqs75QSGxaQWfxnwc2RjUL8gy4qBQt4CKaHHF62r1rYJSeX2k",
  "key26": "2Ve2T5ihHaKhbQJL2d41245BFnVeDTyY4zpELFfDpBstjkC9D7oJ8h7cDUehuazbRhyEuYdKyvn3NQSj3qmrbZfv",
  "key27": "5oCWHSA1z4EzwwgpmmTa4RfY3z2aRmeZnTeNCM59hebycTEmyBU9FsUEXnuf9iBpC2DofkA1DqwjpB8LsUfJKn5X",
  "key28": "2MbXtdbE4uGpKpwVTdUnGKyPsgo6m9V6VBHCKNYgSmNpT57tcJ6av8vCFGpVc2uwz98sfU4EWdjRVcKNeV5vC6NF",
  "key29": "uRz9i5KN3hV3aXKUsTFiWxqrqaf8LNvciNAnwgKk715brnEkbYBBNKmXJVz2ygoKMHqpDGynDU8sSo2yUsGpfMz",
  "key30": "4Ayq5btACgruTGU9GxPsHCjSvw9GYr1gfu58Hh4gSVDWJAccsJpLxU7CSJJWrsjhurknaJsHkge2DeqEcA8HHaLN",
  "key31": "2y7UL3TDc2h36YPkokQfhC2EAe4tuZDBweSvYjnw4Virbt3GGigWjuXvZbTju3jKvWWzd2GgDnC2GxHq7wy3bDEc",
  "key32": "4t2NV6NuqQt5nQrDXyi3RcaHtDmSBjdrK2PeN5U2KjEjwaKDtCRaPNYQ52PksMQ3vUBUc2VVXGjcbc75YJPCH7yG",
  "key33": "5VW9RhGXumXDZxnBGXrotJrLrkxZrqmzELFojmnzgEZXbLVR12Ys1QEpk3FtW434fJNKN69LnYtgtU7JkgDFEDYJ",
  "key34": "2dt6rRxfs8VpRsehKtU44othAZmPVHZoj8t61JApj43CBoqreBibBVSP8xBbu6EamF8439HNnnW411CB9HHHiLbK",
  "key35": "5D32xmCwaK4iNwCd6rDuFnV8ahvBGrWS5or7qhvXZCr3bkTFi3t4C83zSTS83KzqPbT6Yc9uNCNy3xxFErQ8nYSR",
  "key36": "37KSaBzujP1NznSwUWAGiCB2SicsusedCGcFzhRASEhUW9siXizdexVtxaiwFFEDzrTeT6xYV92TyKaz6AhjxVuW",
  "key37": "4fbDJKZ3erv24G239zuqYvDudtTBXMTomuqav9G3CTL3qDmm7kqF8HX7tK6rZoCjeJhH25pbnooBdH8M5AFbavg8",
  "key38": "4uvbcUtpNK3fGeFFpRC4kU2nmiGc3XrbWdW2t78iD88MCGgMCSyCD5rBXwFdk5JktNHxayVo5wt7njY1LQgtTBsy",
  "key39": "4RHM9o5gccLThFRV7GTAncRPFAZE2rCKZaMwY7Z2c64QdFDfraHEuN2syVNQwAQkqViQ1y31PYVUqYCHXhy8ydMG",
  "key40": "3RXUHqbcL5NHev7MKXiyswzTNn9Co3s7dKu7AfFVQCEtFwYnHgVvEiYuyx2ZNVuuPawTJVfgbxm1s86pDrxXibfJ",
  "key41": "TEJR9fBnJGJqdyqVYDm59zfwRtv9zEKYfAP8fBMFrkUmwmYy48AEHRJyHNxBnJqvQPgwYdCXiBjHN6jZpj7iUZo",
  "key42": "4rgbwQ4NCU8bvDqSMH298XnEXcpFKBjBFQAhWcPyPy2ns4Btiec9QLn63FZLvM5FPtKxR8WSmi1jqqrgu2cyAsaz",
  "key43": "2BpmHyKwG39qPcexRu9EPxTkK3XndoZiyTPY8hDWHxiRsuWkcno7ieZgpQTRadvtii3dY1UVTGQCwCEC5mSreYMw",
  "key44": "2UmQAppkFT4XHF2LAQn1w3HoKuXtVZnimk6C1hRXacMheSGW4THyNimZi3aykxt9bQtRu2U9goFpuAc87ftKjjy6",
  "key45": "22nGDQ2F54sxvWD5V9W9D7gE1WDydHuDtvKfuWrAGTrwEfPboJ71jVKUa9mwPz1URwrVZ9kDJKX6RDVRtTE6D678",
  "key46": "2BFnJiuk5AQ2RNCJ3LP3HdAracp4DknCsTdxv8h7rLhjSPhKCp7D2V5n1i67rnRuqgAcR6Uy5KRU9hi3YuwW2VCz",
  "key47": "5yfvjhsErdTrupPAXFS3u9dTzxTh6CWwpdJZsY2K3JmKSLCr3SWNdUADCeaPsbyt2w3vNQyCu5MFq9scHGTXhnh4"
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
