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
    "Pj4idJqzVgY94HeM42YJ22yFu4L2nL85GEJw6KH5HYBfghZB7mhX9NjsjEhd55Jgk9TnwwAagxk4kvmjmHmYBZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PVpWui1yspVMNCP3cdGmkc96nvrzbU4MPE2gXg9jakGJYRUzujUYdZtdc2BrNSXf4VrhRMAofvgVFzRyFKDoWHY",
  "key1": "2rMdJaQxWZWovfHJv5AyjciHxsFjdfdk3s33kdpXCihMyXEbP3LjknBUBn5imLMSF743LS5chieuafvKsfQq3B99",
  "key2": "5mi3jtZ5fvzthJw6VWheYkoXCNwq2RG5WY1voCAxYrqK9Ebx7ZV1aTzzxDjX7ZANc99i1Wc43JtLUTRbtX4ucBkg",
  "key3": "5aje89384gVfSfugRNXwXSzZqdkZe4o7z2vMETTkEEH3GbVti5SwkNVWKWKXpZ57zWup46kSgkbdCD776GYmz3Vp",
  "key4": "3RVG7sArghJ1Qi7hr7zXRSxMjodw8FmDUr7hAJ1f2gEWMqVihNZPgHJwo5gPdvVUYwH1e1MMrEaV8h5MTs5gtvgn",
  "key5": "rR7Z7pu3dF1Wo6FEsZHEipWqpNhYaHLcinN4hAK2DREwhtpfbqeMoKDsHn7njBfWUfaX9nPo53ep9byPGLT8q4u",
  "key6": "268G81kurpBYpbJZaqjaVYrMyR28GGHMpm5jsEVGdkigSJuAdcL4rz1dBWrdRUJDapmcADwHZU57GMovvEW2uPXY",
  "key7": "gmXjGEfrWepZX7etTif3ToFEaAkzmtBtAJ37axxzMznmnX9288wqZWwgy7GDVw6vWGw5NPUsg8ohQ9dXJx96MVY",
  "key8": "2DPRHRKAdsqscHK2gb2HzAQUGPGDM17jJ1jxpYEk3MoAmkc5qr27rTKikE4M5g8M3xoeeEeThoX2XjJaZwZn2aPv",
  "key9": "2gLdBkhBdV1YyuzezUHi1Ry8e7Lmk47ND1uTS86sSiXdrQVSTgAFihR6NjoPpBiaW78C16EFKbv23XqvBC6aVV5e",
  "key10": "29UD3eAhSLF7AdRPnhqsCLrnyC9kuMtDKA1aiANYYVF2BPs4rPJJg15Lcu8tT79TBKBJj5s4p3qC22CzV8crfYhd",
  "key11": "2RrVh6DYCReR1TpxFMCLxJNykMCqrZ9g5vvUMaaXbKENQwR44CdqX6SYMzM4X5fvARFMfNQFhNeqMLfezKui3JK5",
  "key12": "2K8r9eiEgk8mBzyzdhNcuuTLa8kLxV1aeGVqzZ63JpTAxMg9eyPfdNENuEXsiioPNrUBUiBPDYKbo7jstTvPxLpU",
  "key13": "2kuSuZZ5uWbgtDNZYyZ83pD54fYq1VQGhZygmL3EVzpEAQAxhq8Z5zLWbS73CmiN8A7JYw6pLkeTkucbN5B1Zd96",
  "key14": "mk8ErVdzYPc5QMqKBRuVWFoUoQTEbuJNCCUB8HMJv5X9EzazbtiXQ5USdnPmdjL2zyT63LLy6zBNrzu3cCs3VKf",
  "key15": "25vJ9B46TxQ4B6GqygvJnhiZ6XxF9NX4m4fydVgmysFYdHwYjpDJUu8Xexj17rVVphPfGSYRsKnHFKtFgBMTQc5y",
  "key16": "2nF2DF1LaYKWgwzPkJ5oRKJ9gBc1pMnw9PRehAWNe1LhNiqqGKEgTAtGQX23R3Z9sxtoSZiH1wyH97ruLSjuokkX",
  "key17": "2s5EVFXBauCqS4jUHm2MxpDJo9FxMQD9CsDzHoBWrJeRZBbSivEpXJYmVcCmrdp9wLQ43aeAezYhH9MQ2T2TCR95",
  "key18": "utGYQk1Qt3iZ54gMcpRgEYyPyCDyLMwXR3G5mXsbV7i57z2y48m4EG5H57sVQPM4dydbthqK4cymWobqdiwSPeG",
  "key19": "5bzRu5qReFCoDBdkhtG5EFUK3eM6tjypGMGqowdrnNJdrJ7J6m4SLjCGNeDX7wJBKXoUDaXtbtCKZ7ADDkuzw2Db",
  "key20": "t5qMLsjugsbAQPnSa2uixkJK9kdZK2SP89ra21fzybeALRujPE9WZMfNTVrMQbT9a6MsHjPzLn4rdJVLsNYA5FX",
  "key21": "4CPGxoLaCuNKDwN5YYk4PpcumtUTpTVb4MvnWmDioaqFNWPKTFfSRz8msZoE9KZH29mg55BsDe4km47QJKQZNv4b",
  "key22": "4orkFzxKz1nVTJPpMNnmpRBC5dBb6QKqeTWfZKXTzmuXFnNhMMhzCw1sBSDxGtj3yEbdBVYLc1sPfQyX5EHxrq2A",
  "key23": "4zMjF7KpN5bJx2jCNgmbHoFRDaC7toeYiTeBPdjdDv1XrrBPgr7UbS7MzHx6ENkV1kEhQWAup3vBGArECLHM5Vzb",
  "key24": "fPy8rsxAhoAo2jErkmPqYPBwxqrY13BrxAsaRKoMFTTLWLXmTEcN3jVn2Ltw941tcZVWHvjKmEeTVMurfQqmkTo",
  "key25": "5ZmXg2QFAJQgBALWSdCksgbJJEovQ9pupsXsM9aLPBHsRBX43CsM2DaLKTNKook4hZPgFFhWZwNSBT9KVyoqnr11",
  "key26": "3wwbPiY2ELC1oRKaEaVa2pqkYR71djxg5cmcGjCCfeumQaRvVMtGrYaJEBvFc1Kbs1WG49VBVMzCj5YsJKwmfW6b",
  "key27": "3vmUcT9uwxEdBsyhA7WwPh9w5uFK32u1c6AvzKHR5j48euvJFH3s2DYwWJG1GniByZ49pNj5qdVWeGABYveeV76Z",
  "key28": "5pcENo18fkx2dUwaGPQZjD1gyqhxsLbZ9vgu5ri3Tf7VLfYMUeE6pqGnZfczSmCwX3AuPVdt7oP7PtXXzXyGLUwq",
  "key29": "2M4vEwSyME65N9ArUWBLATvL4KPT8bK7MkSUD6ESSkmRX9pYakAxAWahzNLt1fSAxkpqsidxm5YQfEmWQN2LFMzJ",
  "key30": "4BMcNgU2tiMvc4DFak539vNmNwZCaoVNhXimXfFoxj7CkZc5dabtaUHTdNADyBbsYaUqGmMNKxKvL7LoMHwBKnaH",
  "key31": "2i4oEounLwWXchze1YQzbSFgfvcTCz3wWAHDRBG2omBiTua6RhaS7a9iie9Q7cRXkngz2ukdYcFWKGi3rES4UXMU",
  "key32": "5mTVbBNqpBjCaCBkgokccd8fcqi8tsqScBMkuQVSwJnTWbiyDmm9Xb6PPF344meT64kEQRu1xw4Qy547UPTyCDb4",
  "key33": "3bhxjRYWUqNnDTG7KfDihAEmF3xT1SALzvhXV8f2MJihpPSrC9BDNUWMFXWpYX1uSm9qyZfGTNWwbg934RJvTut",
  "key34": "2FQtZY87VnTzsQNREG1opES9SamucvrYF7SQ572y9gMTEJXr4HEHsdHK4aEhxfUtVQHaW5WmkBCCCFzFgGwrSg8M",
  "key35": "4LYf193jXw24zxSHiS2CDs7GWLLkmeCBNDAhr4fBfU9dJfqY1CxgqeTJ4MYDVkscGHyKH8nV91WpwJhyJUJBTrw3",
  "key36": "5Ga8C3Y7qjUjCXmtksX5mmB8dzdXvXjgWAsyfeBZRdXK1aa5qBzzZecNri77wkcbeAGYzSb7nkBWSguiM9PQzuvh",
  "key37": "3QVCYQ2p3eSUjeK2W7BGwJTCevNDLKzsaF9BVambvd5mwJHfGjCwWTRiakYRrDE1sKTTx3Ta2FPwPWxgrf5ZeDF2",
  "key38": "5Ny1LLDBixa5xHvfM8y5cbvsQzXErWkDBe7f9MYk8gzRLxHZXoGVaJUEd2pCAUeFkknUBj4Hdp4xgxK2aFL3BhNR",
  "key39": "3fXHadPsK5tgewCJ2SL1TndYyxjePUwaawFn8ii3hQ9a3s6xVATu4PkZzkP69a8rk1FMnfZpMM3S3q9UCdMrokHZ",
  "key40": "2Djtx7Y2U2UqmAfCfZH8xsw3GCvuUvEDfvVEJkEfeQsy82Kp3q62Qs2XKrMQMbkAGQmPc6eRD4HQB28iz8bviD2Z",
  "key41": "3MCJ8HePnMqo4S8eNRrAco99k19C6sAo4SUhNzhxVdnD46EUyco8TzgUjxpXfah18zvvh4zxc2AXRQPpTxAYTZUU",
  "key42": "2KgfPLaW9MUG6Yi7A3Co78Udk3TH16Vst5tKE7WMBz1RgguyzkzeBZDVskvzWYjz5uJDHLcr7UT1RuPpCXuNZXea",
  "key43": "2XR3FqkionAKXFQFmW5vVWUvaQLTUJoPqTvFqA17TFwipeM7veXDZ74GjLk5XK3niBXmQRhqnNePS5cEeDf9QG2z",
  "key44": "5PtgjPG52axhzbvaSnmQXTbhdXkRG5uvb2fZee4ar6ry2YJLBTX5eyiig3yY4GycQxGzNA6ZfG899hyAUcTSBYn3"
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
