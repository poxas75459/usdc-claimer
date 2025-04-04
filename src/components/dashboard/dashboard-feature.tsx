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
    "3MJUkqfrQysSFmGG6V8p9q7cusHENZPgZ4CnUYYHkzacyefarkdbm7z5tFtLDrcqtWDwSX7nF72uYQ34ZJwAVp1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JapnpnBBaHsygVCMmvVeygxWo9VGiQxeCT4LmR5gJprcmQz9FFu3cBy3aZtikHsLRHG7qLvhb49FMMqAfJ4qTLL",
  "key1": "29twvERb2gg1AmGP5qtqfGSRgeeCmECpBoGAxEP1pFCCxhHCZcjpt4VHoWVFWyrkcraW3Spx3FkNHodsx6NU6fsx",
  "key2": "3uTGBzpLao8zETv4jbxv8mBnuXvD2u9UAu96JWVNtqkYzv1kpfxx6PngrjFu6ArZw48vRnnUc2gf9q9Pnn2kLAT5",
  "key3": "4wbhgFD613GTS2mCtqAPGGkQ7SrgJH2wNfKCxMV9Jm12YboXDY17a3iSvcqi7QqZ5V4MAAoTsm6YjPwcQzX8guH",
  "key4": "5X9wmKd7MbB2NoZ5YCc4cTwXLLHdvKL7qd9Ay1Y2pfUsoLQkpo7Q2v1dL1qKDvmPZ2koxctN7RwkpTGpE282zT1x",
  "key5": "2NKkCsPGJ5S6XgEHkFaL9LPBTytED4hks83ZKU3PP3vMSbK93nwefutkjxCZNW8pqVvAJeKcZ1seFp9xrwPZtujf",
  "key6": "8AZTwK14FRnbiJfJic4ktV8dzd25ZAnvHb7bDSThZ6Q7dfsErXEBMpNmDuunpzFzQmQCXvVPmo7yf6SiYbLDgaR",
  "key7": "T8MCPFHYkuJKw592NRwRmjfhbVkBEUVhrjAo6nxMsPXBdE2hTP71fuwpehXNMbQgbyuU6AkJ3Sd93WmgoCx9ww4",
  "key8": "3Xrr5wjt4xEoe4CJGyf83FGg1W9C33wirWPBkXg6woeUjJyRsCbmoi7V3GLzh5sW64ZZQ8193fyh5kxjhZeKH1JW",
  "key9": "43AVXZFqS1HTQf7Sy3SD3pCn1hJh8R3wWfw769uGxZYLTZFA3PXKa4ohLJGvQ5foWRUe1BkPduKoitJgcCt7q2LC",
  "key10": "4JmWUNYXz1RSctdUkbJCpetueV1cXPfcfAgeRA4BccbqN7SRiYTh8tBMHx2aYeQmh2tXkCXYgYxhjsxhVZH1r91Y",
  "key11": "NbUy2QubAo1AG5SHHizbn6K2bFBfbNKB9NqbTd3EMuVY1RzqqNUpV9WUPCyQp6QGscySoP4iM7uxRvq1g9mzwwY",
  "key12": "5AoJtmeUQhYixQHgBHFUqNSXsypWzwDjWSLfbsScGRT2mYxoepMZPtV5tAfvk8XJBQYt4v8MVm4TW14cWiYYEGdU",
  "key13": "5SzD3qaA5rdiSpG7jLz4AJoCUPqfWtbMbYLoqvAU5oGBsP8Fr6VnN9LtxSF9AfLcd7j3ty6KaqKVHD87c1tUfLa4",
  "key14": "51HHFcUZSvqYtrQkBcgFwKc8vzKpzbDzSjDPDby7xsLgL8Duxzo76btJUC11u3vWM9ABr2EcRR336B4Sggj85ppo",
  "key15": "YWq6BmbPzDkqUA7AJT76fUTqhpgkFAguRY6DABk5byJjHpr56D1s7VSe3aBQknz8NxEaTzY41AxT65FoMbxW13y",
  "key16": "2Vb9CoKD3qjp1u29tvGLGn74tzCbihLVaoMM2NoVAQxTRmXpmVDQ4dzQgiE5EyZHNVRxnp4gXBYCckQfCJwZshYj",
  "key17": "3ukhSDseZt22BhD5WzkSEYXXMACnk9VZs6d36Qm19K8LNoqkSSounxtnYve2CmaXDc3wjBqs77hEkRLcqx29c6Wv",
  "key18": "4jFJ4VYztZA4hpMmarrjKYFwMkKWMDc3r2KdZrT2to6oRmN8EyFKTVbdLhZHDWoqhencW7qtcW1dTro2EMLaqMoc",
  "key19": "7ZdhzDcEhPwJ7FzmLDBogjYHcQWN8Cbhahjq7hanPSYeRLZpukiiPtxLzxyWzGswauwM6Zmhs7eAjgKfaZzLZUC",
  "key20": "414gfAiza2JmJZmSEW33w9Wun1gyXHUYKsHXs3m7zcfxZ9SgsR6nmULU4jbT1c6VCYF9McY7FTNAHaYC4x4Nxvgk",
  "key21": "4vc9hLp88Zyy17Nh48dr9dgc1hdyAENpR3Lv6jo2sKqeYFpBS9Wz6KxojBJMeYFWyGY8s7DG7oQEzR6Re9fSMnKk",
  "key22": "5hyNw1D5u6GUjsLko6uhyJaA3BBzSGGo8jNnuSUPh53y7p1epo2NsRAFb6it5QB7vZwAae2Qgp7LBHoonguWEZuY",
  "key23": "28Mm2T2AehgNoZ3y7Xv7buf7VhrxhJS2BVuRE3DSSHhePcyqQBE8Dbo7sHsnxra2sxzNuFnTw1qCaQ56rQiJH5vY",
  "key24": "2pHBytzphY8mzPbCaPw66YH7Ax48pco1Pxjqng8nSCrM8V6o53yi5p3pzkL3NwZFgoEhgPw4VzxPVA9SoPGGwUcV",
  "key25": "5wK7M6RzaLQyJjr9mZfEdb2Rgg2tbPvTHCgp6FT2iA7qtVFjL67iH9WZ3LafurpGb41tsA1fZRdmN41ofHib9ecZ",
  "key26": "42HMPnXgp9hiExTfZ621xbLfDPjuQ2z5ovEgRvo9fk6jHSj5ZMbjowM89dafgVrHDjDpEEThjRobaBoUaDPqnnh8",
  "key27": "61ngc9g9mxPF84xdphrt6yQL3c3LQrEr1Kj5okYRt1Rrkggk9MAoapcBiLx2WPhWFmv3ruPUFvpMhAi3xupQ9rLN",
  "key28": "sFPvBuEFrfz6pP3M7jnSqzHWodyhx5o1NXhe1AGbQscqg2sqkip6ccMD4S1T9ehhxvjBnRxgUqxGd25HHVkT1eT",
  "key29": "gnwsp3hayS6gWycocJsEHhU5Kw8YKhWPuQ5zZFeMFrx29JiWZTCEXm3Er5yHSYGXg84oi9oQySEQqvWNBXkZoSn",
  "key30": "5CisZ2TXc9jL5Q1NJgHKbyE7jVoW1bN1RVDuDdan95y9BAu3bfNNxwSPT86P3xBnazi9FkabYaiHxuPqBqZqgkdJ",
  "key31": "2hXJBeCcG612Cyu6o4DVKeBDGY2Wbci3P5SCJqCgwZWBKiPVem6CnfSaJSvSPPEeX5fqwUYWCBHKdBURTYLjDABW",
  "key32": "4S1bBiq626hngUW9ZnLCtvndhAUqoik1cxRyTLsQGtJ8W89ao9WnFRoF7oEAKexkG5gfJGWRP53xiZq5TAJf68dL",
  "key33": "eZoQqhbUE82kNr4DAX1RC9M9BD7B9m1LU79y1cT4CfzPm28QbR6bBwhjt2tcY8kDjVFBxP8dpzLqHVRsqvbqHYa",
  "key34": "5w6NNbitWg3NGBSK8JsdPE2ub4Qn8WaVQTMAMryRHZ9iN5jUnmf1JjkDGM56ncEzwt9BxXK78EdWd8dGgh4UVDHE",
  "key35": "R1DNhcctwYFWv2FLneFYhuJo4ySknBYiFXCucV3CBZMhDpfYjCTnjiSCRkTwXGoHfXRFzJFdsA2pqPFfR7n8d7U",
  "key36": "52wUuNLotoLs54jkV6imKGysgrYWoEnHpb9z67nNuvV2QbyHaR3iMRyEQ4s1QGeANPgDgLgt2LzbhT4A7Q5T2oWU",
  "key37": "2hrZCt7cdZe2a4WrK8zdwZQ3K5ArCZaKNPuZ5svtMuLXeD2a7BmAUNRtApWRWb7BNBBn3v3wFXPnNYP7sbta2cy5",
  "key38": "aozx7Z9kBCPgd38qjtNwkrs1pxpyNT9z75KwXrT7e213L3ghTr2QkYVf7kSrsxJupGpo4Ny22emDn5w6dfpq4YV",
  "key39": "2TzcRmN5GBDfA7pPmodtKFGxpaPSunrdVdFhMnKB4fFtgQD2C9GnEnhoYWj3TUToy4EzdfX1VETA9xqpCRs4KXG2",
  "key40": "3cHsd7XZyKhuQtbh2U7nPw4DGhRYsPqLUtGeJ33CkxpamsY3LxNCus486aB3RV9NerTiVsCr9yUna3AihbV6EfCz",
  "key41": "3XcXMj9QQZ3NKNhjREhHH4ydATnj2WqnsVo3ecVwtt53x73PCvcDJ9scEKh1omTQPB344gMcXicBzkjndGeNxSRE",
  "key42": "7BHbYTJuE6fSKVxCDKjzkGXzh2tHUvVxZ7pgjemcgkZ3UTmJcvSs9o82kPMMEeMLc57g1GSnU24Gqjavac5Xcxe",
  "key43": "she5YkctehaWTaNYBN497RxxwqePoVK2LF3so1rDcnrp1FJ1pC97hmnYNHH1MNXEaCk2bBrnbGgdXeSrGeJW8pR",
  "key44": "3PY4jtkForjAZ6sXcycchwp8vFbQhJZmjLGCFZx8c5TtxX8tsskvebLWy3o9xSH4pGk7xZGmynRpAQYGeLkZEybG",
  "key45": "2AYQarG12Q3mZ3BLJEboZUzkQw3kjsuXUqtasbj7G2kGEe6zmrt3WbQpfTjYgQAte4nrCTBAB9nXLXTZebyLmtVh",
  "key46": "5DqjVQkHCDGq9ZsQGeWhAZSxsotxRNyurTkykDkNHqP9TvXNtJEDKPwUGRgvqXY6eAoLrKc1ycVfwg5RWhbvNSJj",
  "key47": "5raaUZpWYWogL92vRBnpcTCvyvqEAiQyWdCiSnLNDdS7coyCRv2CXdn6Nyt9YycfFkDtxLSFQAAC7trF7fjsKbje",
  "key48": "2TkDGSFwMEZ2t8VEAZEU3MKUamX4r9MUNPY7caZ15NrzDdBW846PpNBmSD7jkb2a4TsSTafD4fqdZPkWRZr5Goxy",
  "key49": "24TU53Wjo86QkJjLMMbQFxYkvZLTZiPPAsoEazUxCTCdbtb4bcXqGsjkg19L2v7tLZt16PNgwyHcRKiib4sMj193"
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
