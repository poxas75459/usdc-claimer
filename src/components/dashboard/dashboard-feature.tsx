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
    "3gHHWCPZiSc3bsV98rswY5SNCKMqAJrrbAkNtMJBd5WppuMv5PsjNrenPvzY9gnZUxYa52eThr6ESfPBhvYdGTfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56WGPrCPBrmZqathxtVW5tRWXmCXGVx7sNNcw9tiL7yWLJ49HedKfeGG1vnZywxhy2AhTeEQ1qLFxXcHbrY8DSYs",
  "key1": "4wLukax7EDhd527VqHdHs3jpWYTusvZuGzhbqKmQqsYNeQfBXcHdSZBEmALy7SGKHRrmHQKMwLUTtqv2Co9SE5t3",
  "key2": "5wuQA8hLeTiZJH26ycMMetSyDebUrFrmGP5jatuhiqx2ZyomZzHdKw9vp3nuK2Mpy1Eh1B2QGrXhReL8kqemEuw3",
  "key3": "5WoJ9NxFFXH5N2aT6E9g3hKviR23W4JzitFayXzHLokWj2XKdLtwMPdDh1128oSSdGFWZPB8YbwsFnR47M3ayRuH",
  "key4": "2Zf2Ex1TVq9GaoqkPhJhrGfqJ7Scqox6zNmyMF2UTQ6pipfZq6ixDKKRsSj8knNDajTan7nA7MpM9A1FooK7F5gh",
  "key5": "49RdsxVkSEsWrMoJVoh6eHr4RVCiadsjnt19UFDQZJF6gcuwUvAktnQ8nhwSMGEU6qMTnvfYWoHsTxv92c5D85fp",
  "key6": "2Kr6nKdFsKxmYAn2g6WhoQpEUnMmvSBfQ5cEnj7Y4XjUF2RmkqgiEPZfAszwQe2akBkbNNgWd3S4jSmSLrHDoT8m",
  "key7": "2u55yqM6iSqU5f4qFn5E96aMxF2CAhDd94MknhHC9cxSRAcQVx4DzTBD2qJjmcWbJ9WeSYuH8bsfeWJZMVWMeJ2i",
  "key8": "2id7yALayoE62XXf1vQEKfe2UxkqG9xU6LpLKXBLwE1WHAXJr75kJ5CmFhawLE6CMzwUwynDP7hVV9zzy1ivvw5a",
  "key9": "5SNKU8Ycoxno1pEQE6qLi3DcKPwcP1jVfCvap9qGi2qgLCSp8V83GQxcJnPyDc4MmZgDdrELTAPQFrTpZCb2TTxF",
  "key10": "UiD3tZDBPsje2rgRr7Rzyd4igRDnFjk5pCWEudcTDUqR3xrwFQcJ3qQ5MBJd6Vp8ZxpDTGs5g1qMuYcsm4LaCey",
  "key11": "5PTxRbbUvQrLXe5aUbg67Xz6yp9TZzkB6mu6hVuZD2UTMpYyfqviZYUcbDPiKVgLMyCdYgTVeskZShGFzb4JxTPn",
  "key12": "61PtLzAUVX1BPb61tq6Vt2GRfLGDV3qS9NR6rGFJWdVMA1X5HvYhrH7ZTbemjBX1vrAYZJjoZrjdPZ7nKqJLcRY6",
  "key13": "3BKjKeGRfEy9KKtgcKKHKr8RppUhSmEcaY6N7rMHgEERKTGcM1UeGJ6PXydiuDYAB7w3EnE78W88EDDYmihGFpsU",
  "key14": "2M4mzeC9wvzovTks6tuvEoUMJaWqGZ22QBN738tCsnj86UhTLQE3rKtrXVDrQtRHZXWdNhCJsc8aEue3ZKXSPUiu",
  "key15": "4fv6g8dHdxGdvSXRjhvsY8KbhEKMizfCYkgNW73gGeXSinqBUkSMaAGrNBW45yQn6zY2kviUNycBR2iFHWJmQEvt",
  "key16": "3p2uJy4Uhns6Rwnyv98nRFzto34nskYrie8Hym325zxAEHGss3adCjJtaa89omqpUS3LwCXHSfX2RoF3qaNjgz4X",
  "key17": "41jWeWzqrzzk8mVPkNperuT61iU1cyZcmyyM4DMsoJ29fuKXYJTVuZuXYTskMacrtSUybjhZNUGZ5X4RWtX7L5RG",
  "key18": "vDrkqacYpFvsRh27eDjLXC4716ZofguhLFNxfi1beT2DkR5KttwsXWJsA4ZibANJnJ1aFqMtno8FuGntaHo7HZi",
  "key19": "QXyuATXRpqMoBrVckbd4FthobbsNuRahpSzAjFmBGdCBZdytCiPwk5H829wR2J59N9poPXBQk6jMhh5Rmfabm5L",
  "key20": "HmMHYkbbnj1Pjf7aSV3Hak26P6uq2QwWWDBziaTe33Eyf22kqy9KiBDkP8HpvF7t7PxpnbcZTTHGFcQ9vmtHUhA",
  "key21": "5RF4hiFTv4roL62Do5ht1pk94a5CsPcHTFLX5XfM91yk7Ewnbz63AXfMDRph2xTqwo95PdLbrUc5zwJJQ8KAfugf",
  "key22": "FJ9icGEtPWom9wZvsBsqcWPymPHYV7oEjjRnd9fDsR9pbjwbgyd4or8kMxk9FVBswTvBzLuBD3z2FzssNirAJZQ",
  "key23": "51o1J2ZvRL3euxVWDwCDfEiTpmGxArRiyMwSa5qEaG21dUp9b12Z8i6yojtAGxPXTLKZJP9MDmxrF3iv2YqC7Fzi",
  "key24": "4zeAEHUe463ohQCk9VFvoHVdF4RJzxQeBkxvQwpEEKTamu6wLp8wwyjWSpL9MRC9d9SueFGCyx3Hqckh7sBHufSh",
  "key25": "BY83Ct79VkvFVyjxWUz53yjrXcz8W3YopoWqaMg1Q57e5m1BXcoY5ECw9CXy254JyAqPKZw9VkCPsdYWnfgEcyC",
  "key26": "55vaLJaGPXnVQSjeFULSj7yDAziZZL7r5CgnurybmGTUcYB2G7GBBvW1s6VJGnEtwi8JvBdABeucxQFpqFkvEQgc",
  "key27": "5W1rRZ1K1mfwTHrP8f15M9rLyNMNhLkPceVMLZeZRQn42K7HAcSRxNc6NHcQJ6wcfxKF645FxA6Fnb8Sg6WFb8nj",
  "key28": "4fNyhyhuxJxkD4tTDTgJoteAMdqY8XuSC2ZNGbVymUhoHJE94q7K2FUCKjXCDSDDWaC3tUJA47tFhZfB2hijNeZi",
  "key29": "3XkfayHyzV63xeMENKxoNckRYYwoDNiU5DWXoGdCiG1XA8XL1gDpxuafW7EMXMJvWFDwLA5X6Lvs5P8WJeKy9AdR",
  "key30": "3LEUWh8MfJkGhezbbkfhX8nQDRXpeKHTKNc8w2wcwY5Xb4mb3qK1uGemTCveZKDFEfZdWmeiC6QRvRd9eqa4spXN",
  "key31": "59LRuj6R2hLkZZgXdNLhuA6eV3N4CK7g3hMzREqGSRKdsmpaYSTM5YJXZsmayNqXXhuzC4YDbxNdYGnBPnqNjaHQ",
  "key32": "2Tpi1pRho4fiah2M3rorh5u5bU5HibHWypQZbCvBGHuLgCUduEJa4etuMSdWjyRe8ramPJcUkHu6trSbz3jkk6ah",
  "key33": "3rPGsbdZDwARASqA41h2F8TY33okgH1oGMzX5D2AN6qyUtnwMwdDoRqkmepJdex7Rki2qCkx1rsgoeFnQprjYS2a",
  "key34": "3ZnDGg2oBgkuoH1y4XpfPasBt1nhapcxFMpCqr4YX2hXA6nEozK8bhx34tVH18MQFgvxWQZSAfrtCJrLWxY6qVGS",
  "key35": "42tubupUMg3MABFuatnExp4zbS1wTCuGrMaEMGHkTdEVLQYEjcbs8tbaURLoU63w63Ljr9KNF9HJRbDLChi9bskP",
  "key36": "31zPWUSyXVeRJwCztJewswdpKX6PUam26di25F1svYfECG96fn7TKgeKmjbwgXbfMDK6VH8Bqgsgt1mRx9FktJ1j",
  "key37": "5y697tQdY4kGQrz7v1oY8ZA35A3weeXZto57XE12otbWPY77zPrp8i8gdzxbgkfrk649XFhMWs2n4xrfEFwQYWHo",
  "key38": "4NAUUZfoc38FAZkhrh6RtxuNMMe6AMecYyzuZcjKwZKSmovJDLpLW9MbdZZbHiPcuKmKvTDjtNh2WN9q6sVCu1k4",
  "key39": "33N97b5VknQoz6YnJBwbjCLsKjLirm4QV6r3F6pjuPLx8TXro8F4ofEGb9ybLPMPmYpJ4tvFAV2WxPvF5bLAvVUP",
  "key40": "23FMACTRDMXBxwhspK1Zf8XwLTAYs6ZzEhsPNnWiAxyrs7U5WUDVWMj46gScfU8nsEhZbDgRkXYwyKkuWDVj3MMe",
  "key41": "3CuAQuAsu8EwwEeSmTUdwzDPNGppNowWPgeB7AiF7dkpQJopmEceVbqimdAARz4ud7j9Yg4nh2GNirbN1mFfVA7v",
  "key42": "539hgtRuJN5WUMfQ5uMt3L5PQfH1LoQWjAjwp1NksPFxLPmuBB62PfDM8Srm61ti7WZzYTWB21yfheDfyJ4kxeWT",
  "key43": "59UTap85xLjwxsuy9W7vf7nGFvzapm58yqycVNq68zJfYW1HpLAshcwMkxULyZzQoMNKChhrP5RqJrWKXT8kxKFB"
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
