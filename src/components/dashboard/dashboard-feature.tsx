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
    "7P8qV9uxWLxGpLYtaDjVfHXzKxJEKxszt98ezvhSQbr3Nr64PaTZLrKjZQeQEE9e2uTBaep1Cc9npBVHg8TMkRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rdFUBzX3iwpuhxZEqvbeXDweHw1sGYgLMNpQNiKpiqNGKCXJeZpJMiQrq6pBCLUbEZmhvSLnMgqytsd1M9VyURD",
  "key1": "2s1Lwnx33hRFRfLGLkSdqrqdL3emjBuN2wUyV9nVh2Q2NvqpM37BLxMwSHLidrZhUbVMzAaS6XntsbEGtoZsqi5M",
  "key2": "zowGy46BsKKt7YBvNYqC1QEjXCJC1bnZDw5L6KMZgrL32AnXSw5DWqgt59vTNgMLBqZZyGXeLiRvJL4HCC3Bsvo",
  "key3": "2ptrMRz8oC6JC8Pwb8MqjQmxNZimM8GN5v5ijPWiJdoZDBbm3kG8C8dDZzSEjS7gPc5NLoCruMiEeZD5P73VYH3s",
  "key4": "4QFL7PPVUyZRG7Pvzp7BbB4EcEzMtDjQC32gy8C8y9wzXZcaWWpHPqBQzxDs9SxSbnwiZ5j2xLdKRjNGWfBA85rT",
  "key5": "4jLFwQh4Z8jrrxy56ApuPa9jx6WqGRny9F27igEpGenotTEE5uRTn3uBJU9MWFTuMdyKbhRqVTCzXoPwsobZpnEF",
  "key6": "5J5HMWDLnKqCTjG3oMLwhaukMtGPCoq9z7pxHK45vKMtEtdCimoYLqpJwmBjS9CxuGPFwSeHdj7LkdnSczh3hNEX",
  "key7": "3Wk3rzrrC9XCyUCoTy3Pp1mGAcqW3sNAKJs5QWK2HFQjgcf5oy1cQcXA8sWavWfnLbajhYaaFMgvYTgBAxmQsfET",
  "key8": "2ykTH9eTFF1958AoxzjHqVeB71Uvt9zoxmCfQVVNYY5nXAqEgM29tNqnxZ4bWUwgZZjptPgJcUgUVeBgvEKnEp9b",
  "key9": "4ZtQChKugmwftiFkaqVForStq1tZgtqGudovU2Up6PsGFMVoL2rUHA49tmKasVafxkSYqAbU7pbSjtZfoTfV2rjP",
  "key10": "SnjThWaLi6m18meaD5fPChp6XS2vFoemtWTAK4uaYer3PjHYf17XvFoR8ioUuhSKSmkKP5FqAU9KvM6L6UxNUyG",
  "key11": "3aP2X5AK81UyipT5xtPPw7DhBpjYTduZDiLheiHa39KGX72QGFjcqqzQUkUtfZtSS4z1SzoLXpCds3GU3ixiwmet",
  "key12": "4ak3XfRVkZd1mkD5tbWdDGafAckDanTTEC1yGkC5acmyKdkCU54m7PrhLxYNsArZbctfmn5rDScAJYfxHbVaKxdD",
  "key13": "2wUNwAvowhDhP2GtWWCwfmmNqyksCNfQF4pSZuNDBcsXCKMnMDRZMHpL5Cfqh3ex4cUrP4pseZmGCnp5q5AQJTWd",
  "key14": "2STvvG8FAhm7ZTHWD3zkishiHzX1PYdmRCTJBs8NSJM7wpMUC5w4ZTxd6RhLdz85gwotDpVLd1TNMDDr2xcRjCx4",
  "key15": "5s2jW66fXvfBB6MsRswtS2Kibh7u4V5qWhdMyex7J9k39WkQyUYvFRV3vRQabUH3zzk1JMjHPq3SyVFixdSKWVBr",
  "key16": "rKqNkkEbBrtHWsiyCJBqpavvGf3VW8esKCexhHxZqPXLxLF4xHwuVYTygGv1SY4pdT14gbvGiMiJd3aqUw2uoZY",
  "key17": "3rxG3yrNnamKzjrfWEZfxuba6bYewP1d3u7MPqRU8jBckjBLCkoa3jAd1Fot3Nj7dy7jhssi8RKCs3hM14RXC8bN",
  "key18": "4fp6c6kgHdbbpkLvYoXwuX3fJg7HP5mZNHbiX63jKKkSN5JLYCyhTt1dbTNngMMMV7xd2XcJXJLk2Uo8oWP4CNWq",
  "key19": "4v8Q4UvxMgnoQZRrhRvTxkNpw58fpSnDarB4WwjuR9FgKyBQQVQubP2iJoLQsbzCRcb3L3RdrNCqXjbfwfQxySd7",
  "key20": "2j5swcLB9XK5znNDqhcMtJJ5mxfLghGQtXtFNuHBzKe9EBdvYKCadys27KoCfxTXP6YuYernawxwG8fQkdDxPS8x",
  "key21": "3pPnPnxde7cEPMFyLBAujFVnHAfX6XxZuVv3aNL6JC3455WkhpX2nPNLT5DA2UnXgo5SwqwPRRtemeoBiKjq62zL",
  "key22": "5e7bEzTZwCuHxZU4aWHX9XqS72LstHBWWASNmeV3q9EHoip25ZeGsJxop55bhfNbmzzbqUMBNsfdFMVi59CnvnrC",
  "key23": "5dih4NqyeUQTsJfE8wNHoqq91kdddHvJPX2466qNmLk1FwL5pEmAnPrTHbQ31DLPwSAjQDK629pVgxBKHWL58BDq",
  "key24": "4cjSsM1eTTJzL3yYQvgwufjR4CKoUqSrQLKFPC2sKWNeo8zBKiJefmtNfxjnonTZtaRx6vfhd8izTM2W8inAYDCj",
  "key25": "4W3JjruWQz9Qib52v95VaaGi5X9xqXog2GcGHXrSb4RoEmyFS8dMoPDVfd7Pxh3DZfuxxBJrasiXGY1PfdmG9n1t",
  "key26": "2dhGahzguTkewoKksVA79x5rrSXLZtJCEC4HiCsXxq8n3td2axNxUiwkBnmwtfPaLXfJQiFWTejJgKv2jP4ti8KT",
  "key27": "3mNh4H5NjDE6tK6Bjt64R6inyVotNTkfNmRJqbmVLAKHVXy1a5LV69N8KJxiyc1pV26M8nKXiqUxkzamfzbwx6dS",
  "key28": "48LXRjyMaRkBeoFp2hP325KxaEqSiFqToD1T3wJ9JTirBp2PhWMk36DTRzKmGswRv49BydwcPxC4TJFqrLsHgeJH",
  "key29": "24aUBbRh583yTyL8e5oc2QtLzuiVYssD17TRX3PF4yukuR8eWph5n1fZKzY9v4mJUiD988VqemVhjxZmhJKoTJQz",
  "key30": "5eZ63c6W5agywrFAiLck1mySTUbWVTJQqiv8fJLS1n5ZnJkmndJCVWrdAyHdRZogj662bjgua8kE1E363sKaSxav",
  "key31": "5z4DmCsE9X9Wwd361LLQUgW79FeywLRceDn5wyErgKtQ9RDPNtpXjnpJdFC7X1Vj1myvHfT3PrmXDXN72qKcbWuW",
  "key32": "4WLuxUt5g81fwgPRPmXuYNKRgzfhmuyq8FAa3QibwWaaAPLHmVFMz8mcDy8K9DZFj72D6XS8pjtNLaJCu4THE2bu",
  "key33": "2uMVxqzFceDLXovu39AGsQW1T48xxdeSMEAHankHM95RHzJx3J25nRCqHpCNdyQ9Z7VDC85w4afvruw18hZCV88j",
  "key34": "5qGwpFiRZ8nDJ4v3TyzfafhAgigViEc3S5ek3y91o6cAKJ9pjnzeZggBpLawANnGTcCtSDrnNdEKzrdzYUunfZJB",
  "key35": "4CY81GxFhD4g3Z2px7GiFsYpyoEqTm1oDPedJUR5VfnAFqsDwHdp3fo6GceyiFoZcAX8vZ6iXFQeeQ81kGQBL7W6",
  "key36": "3DagDrtPcNLWHLa6rPiki3WKtvycLbzdm5KbWEM6V9qRvzGuKSyq74J4QmfRkwbUgKyKYKCcAXAL9kbsJvmMbZCN",
  "key37": "5TSkmp5Fmqzup95xdWuzC9Sj119UC4az9mrVeJKmhe8sgA4VLE24Gmzp7tku5Qmja9Brm5GnwVcnxoma4xyi5Qsy",
  "key38": "5smrubf1NssSkuzWXzvapm9kPg9F7w9QhhTx2s4zNaqe2unRVRJ7GM1TkHojNg7absNbh8uo9EwSzSSR9Nq1K9gP",
  "key39": "ZKpfvMCPt5aYNF2xepheNV7gVUFseZtb1CvvUCxVfAtHDbv2dYpCuRzLNbQEaEGBPL6hzexfZbvZ2Z4w7jqhX8k",
  "key40": "5HHng8kgWuPeGTwUXEm5NNwtvznktaVM2fwKKhvSqjErRAoCm9pQ5cUPfwYGUGWKCecfsLU8y72B9dDNyRicQnmx",
  "key41": "5n16CxiJCV5BBB9Zf8bHpuzs7Vdk8iZo1t6BXxBtuyxfdRbV63uNysBjnGoGruFAt3MtRisVWnvkAjKKTHUveVZm",
  "key42": "4qBdQT88SuKJsW2NpUFMdaF9WERVBFoqHogrDUcDCUiD3q31nLfKN1r9jrR2SAMfhvvAgHax16jrhjcRHMUhrB4C",
  "key43": "99njGXjGUiAGqr1n7AWjykAoTRWk41KDnFZnEfvHZ4UPgCd8oaxG2M7tSbzqbH5URwRwLqmcVrcDyVfLmsCc3vZ",
  "key44": "4DNKmDTCjYx3jsdbJJuHaiXiFuuZHYW5bA57Y1hvzxULZqaX9d41po47oJpenwGSNby2GLgmd6BGM89fwynMTFBh",
  "key45": "32U6qwCz9Vrebh8dzPy2qPMAtLNCLMrQdMDZvzjdXeTdfSZmcB7m39Vd3V18zywDiMCtXrkWcKKe4Gdosec8tseR",
  "key46": "4G2BehRZ2FpBLHXc8jtnsKj8aPHXfGn8UesYhvS93gy47kag1pWECw2TfM1BGCTCZ4pugXxQmj64FBnX6i1ekoD6",
  "key47": "5VfHVqc12htN4mDzYQqMF1ELtQSeSX3GaYeh7Y27R5dHQqvkdoyr36q7yq8fuAkCWtnin9554UZpAakpB8Bgk8Ug",
  "key48": "4Sdj4aqQftu1mp4fCK68pxtPhqqKcK94KYajURycM6PuPrKjmWyLgLhcvgK25qC3h7UFJ6Rq2iBwkVXH93hJP6yL",
  "key49": "4i8DtVpECoaPx4G23tqdgg1EUBQLpxvUGicUBa5rjqKAeEdTxAD8WUSov5Q7EntNWv5tCVYKyqMVrWG654zUJbg7"
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
