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
    "5X8CpnKzKioxJ5edVdb2khdraBGTDzp8e28QGQwzM8kDZnSdaBNuuEfbb6iZGgAvWkiVhsgT62N3NEW2x4igK2g3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "616yKEjeMaUNmGzVavA5Zi1yUK93RXjP7yqgKV8veuERJMs7u3tKfyAyPqZ78T1ocFAqVxWuJqGoRWfeGLneTer5",
  "key1": "3DoZ22QVaqxvQJtRAC6cmsa59ZzVxrsUmS8ampFoqVcwSxjYApduf3gP98BXKFx1pcj9tM1y9VJX3UyvsoKEK7hs",
  "key2": "3jBUj3YZdCqMCFKDrb4FdjBPRHjMw6bAFA4TCmr7KNosehDMrsZcWcTNhmMJ3a6DADJaW4xkgMxsPsnfoGntpLWh",
  "key3": "3Uj8aftYKZuY1doo1mcoxnKYYdjTw4J6Rj2xkyEXZPhJScEBeyATNrJuAALRpyXspZrUrTdZUQHugoerTLgTBV1D",
  "key4": "3Z84hUWidm2fikPWUtbqgKSUbmYuJD9YEkt4wpJVW7gAM18AeeoX6o9QG3FPCJNci4njLeSXFSNyc4sRfrRZjzzH",
  "key5": "5BsR4vd8s6wDbdNP7ntk3DG6ir7EbEuAWMZSruSEzm8sa2mLByumzmdseXmE4yuVf75gNHHdUmJCCrQM7CvXr7F9",
  "key6": "2yj8T4PqswXNEyg5faFm3DL7ATsuAhHp9drhmHGdoX6m7JKtEtW9aCHynsgCzTtjN5pxQTfjAK9csDTyFMYTcDz7",
  "key7": "5iMgixJLwvc3rMhoj17C1sXDeMkKy6RcJdSjLmAHKW5e2NhBsE6DYHT7zbHWSY66cwFxj4SRhNi69YhATGQ8DFih",
  "key8": "BwkDzRUwNi6j1V7DDuK3P2WmX55555CWBaQFuSPxn8zjjCBg2vrnpV2q91Kgrx5rumHGzYdJnbJoPdQSvS71WRR",
  "key9": "qSgLVKsmoEktmepuFc3Dnga7sTAykdMfaCnJmKvK7dPAC9Afo4A2kbFzawxhn7uUG77CASeRkomc3FpNeGVsGCb",
  "key10": "422SSGCsuxnu6EAshbEP4zUdHDAiB1LYJH4R8xbvYaPKUQfbU6zKW9zsjuaMQwWoGoqJjWQ8bvKgze5n2hWwMXPq",
  "key11": "2KmSd2a9fyEdcu9KXzAWMxH4gCKvwy9W5BBGsn6NxtSFQ9kYZM43FT15igcX26sq3XjPzAMY4czuZjvmG4cNqyoU",
  "key12": "4g9qXDc7nRpRJsrE9HgzMFmaBTTBnL177XfZBF6ezMZFerKCKoyVZwWeQ4VHGmyoTbPmjw8LbM36CvPKi2BJwcrs",
  "key13": "5yTKNPDcJxZFt2z6ShqAFSG9FzXzQ2zumdunQnoneeuNeyvnug2JmhPokprEg3qkQ7wiw5o5P2ZumspnUqXgqs5F",
  "key14": "3wMYDFJa21LMv7YyChdqfpyJxHFFRifxwmTjMVisVB4vLRkLgYPFEPHfs4tihVM2YS7NfYxTKKv3Nmn6HR1k1Lp1",
  "key15": "7ZKKzCr9psmhUrMLFvoCCRMLp9mCfcrfL8nwD44rUXZk3M2w9iUujvGyrh1kn3Q28hww6LzxjkFL3468xRPfC5X",
  "key16": "5Q1jsFqFuLQUUSXLS7jK3K4WEPXzR4HvTHQdHtTKaN9L5DsrjFJ9GkpqPqCSpJjm2rwv39eFo6sZNpVKKsLcb69n",
  "key17": "2nGSjqqzKSPm9WDvKhw4RuAss6semjMZBLWDKRTHRgSrV8DkKs1Lp4vEuJP8uyMNhtWBMKZtpqeu993rYLT8NYJA",
  "key18": "5u9gevREr7mDf9HHFMVaE1yYLyM7qb5rdy2avLCRKTxNH1x6YFNcRwmGbxQ8Vj7qyHgviCdcmk386wkCNjDzxH8s",
  "key19": "5Pafpc7Grvdv7LRbmNT5yazoJWJGfs56Eftiaanmx1gUAvFGNjxFJHJeD4pddsGi2JwYGdvDHjHck2GbaFZic7WU",
  "key20": "jnxax519TMPzM8KMAMpATDBL6VPNYcUue4XppwTqqUKaURF7cPohg6EVAwThz7JCfYPrchgkEUCke9xpaCrN2ci",
  "key21": "jVZyirUUGKygWLopCt1gvnBXeZHTq8UcA8YzdkTMvap5gd3YKo1nz7xGwihrXAzxXH4MhQHbXYTmUMvKGvqB2Nz",
  "key22": "5H5gdqX24XscGBAVxnbokksZkNVvECTBrVYJvw3xYopD3zpDU6FkoJAN2qZZdshvn1p16ibdM75nXBfZAt9u6PrF",
  "key23": "2A51WBMRms3f6vNUrwRaPaGL3pqE2epzrgUYgdwkntgyCD4xwi7kNATzYZfcJDeoLwaGmkLb9VqHdkC61UFDvqGv",
  "key24": "1t5kHLkh1YT9i188cGQhDsKSH4ftSc6SshzLU9XhWh287K6QCgvUmxG73njJ1S3kK3P97jo2PbmYfEGY7P3Cfzs",
  "key25": "5ZNw7CFYdh1kdjP7Zkm13g7QJ3BYtuSZo8pAzS9iAb9yxpLkHcTexH1j5BUCgpARKVYwNaDdksBZTdxq9EKvBDie",
  "key26": "5x5qoDPbkBg7yWs1jKA1oh4vJX22V2kZcWgGmVimanTmtpS4Mzrxss7y6pEihqqhzxVyw1c6LYzchS5Ufuj8wxo2",
  "key27": "2NQ4VypSYPckeTMdH8NcBmQ2DLssSkR1L5dEtAsmDEgCFcrjcs3socTiTLLzXYK2GSwKPoqc7xU47eeTBaDYa8jE",
  "key28": "TAsJ1wvucM8CYsnYiM9dD17rP6dhguTeXrYUYrBAYBasAksyEskKSx6Y88LanqQhiUgBHZSXDbNFk361TcTTyVJ",
  "key29": "4cGvRKBSUJ2BEyr8dNfo8JRhQaaTwfPF4dzEZqXwEfra3ncA9ZggbiWEQUnf5YuJouUrJTAL1KNjxuuJU3RUMVtP",
  "key30": "5rhd31cnKeatqcLddnCDiA5xdNYD3mmome9fKPX3koFJJFY7wCuvPc2NFSCQU6fVgcVZxgj96Cb8kqWnP3cyZLeX",
  "key31": "3z8iX1qVhZoA69EC4HMch3qGgVjTjKoS9PDhc9vRxSiDCVqQf9sp4QmM6gtfmuY3qxpBqFKh4rZMN4xRdCzqf6xi",
  "key32": "EE1QeLG6L4hBfoMLGyjpD1kH3D3opAZuBtEvzGjYa9KtsXSLN9BQvGuJxKmtSsTiQ7gTQucFLdoF3KEwPiARV3J",
  "key33": "5WeMU6gqegmBCU7wEmQTMB2asf6VY1AU1v2CEETdPHs5oN29yv2Mqw49dV3oFu5PX9KGEN87wsvmQMk29Bk6JHqH",
  "key34": "2surzuCwjmooFfvY7EVfMnvuAe1SSrHaiXPXvuH5uz2xqx9rbMc7MNeoMH9JsBdyemZx98QqzooMr7KSTchXarja",
  "key35": "2YUWTR9SQv3LWf5tGmtCsK3ZYoemAAo7bJUHLUrAP5S995cVwp4VgXvYNLTdcea9Qedc82oYrCYLtirs2B4JAeLF",
  "key36": "2F5bxPBWnNvYy2ssTaJYUuuvpinke7iZZnYparFESgLtN26hoRrERFSace5kqZNe6KSoCNY1EyHhphoYAnGGumLz",
  "key37": "5J95DhhfZjwy6WpK4ZXbEU21mymc9KrUMXPHPSTkAvquFatiXGnsnmyowgXgutaUEhwumnJ3UGDnnKMPygAE6zhG",
  "key38": "Ef9H1jYMNUj9WY2LvEkXKzcsJeTKA88SZ98FQgTwyec9k1eHhC25G8JUR6GjYMvP8MT8EWoq2EP7vQRmZkAE76E",
  "key39": "25FypyDjLfgtkgwrSKRPD6Q1NiT5yaLy54U5x1fdxuc7KkvDAv8Hu8HCxuM7wE2fEJsqWB2DjGUed4VF5WyujGRf",
  "key40": "3K8YYtrtLZkc6ZXoJqYf3Yopod6ZFfvMMxWBn3g9zfdefMLYtuY1mW7AgNZaZvoEi9sntcsv7P4gGBv6iQFe5RYG",
  "key41": "4AuAJvi1QwpfK7nePJ16bjdFPQRKjqMzeiF3x9wE6RPc9BPyoGG6Te85KUYocB6PzKuAaJnLJnbQAn8W6E3wnW81",
  "key42": "5etsdziZ78E771oB3iwmKbUkrtmWJU9cAPZFW9wpaaZ6rkcfcsYGcMPKt6bwE6JE8UZPbcdwGZz7ocrJst2piofs",
  "key43": "4USLjVmcDZzcJuraCy4osCd6q94rFFKVuMX5JNiL7esyQNk2DoN7hkCawDNnibsqq9SypgDvaFPRuTcR3Vw1pcJL",
  "key44": "3CyvgHdm5nXHJqBDDKagtUP1Qk8h4VQfjfyhvsme7s5WhS54mSnrE9CfzJkcG4xsGDdTZyiCYzxqwUtng7Jfc9u8",
  "key45": "YhGnREHFVwGRjyw4TVL6GE8R6kDEQVabMvmEap5BPdNLXTVtX1dQJn8ZprmhEg2MNjuTu6fKuJsdtXpCFfJczwp",
  "key46": "5iAxc4t3ioZbgSQGpwmv48zzUa6waSioEekVeAgq1yq32UZvPwSGL25otmtG92dfttiQq1LtQVo8EUso1dGQLyjR"
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
