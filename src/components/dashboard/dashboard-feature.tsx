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
    "3yu4ktsY3tWPrwnv35gGYdhsvnDymhcCa4HAkDQDJYDxD3pm1A9R2nnP5JyyqTwgHpqYk7FhVvgWgYWX2GHHmH3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ueqPqznecFK6ns2q54J9gBmNcK48LTfrk2vyKyPfNzma6YSQyvUihQyjD7FBtkW6UQi2jjiAvD6do99g7tUjxVD",
  "key1": "5sLg9bGwCP5v7koGisnd33Wuon4uHXYYi1KKgxt1kjircSsX8iGnHBnnNhHu4kogEBKYEo5AEqebiesVYNTq95X8",
  "key2": "4hrDSApkFfDxkFH1EFw7Jxb1vkamYnqs82kGj8jkstawvy3n3QidohGah1pBpbJuvF7zSzX8sD4umw92mCpGzF7Z",
  "key3": "2ciydzvaHTpa9NE1vzPRSGHehMpbKGkTXRFpL3QqPPNZwpVFLxLVyhhYkQv1QCMbLhrhsdTpDNmfEVkhdsarMJTN",
  "key4": "2GJS63kjWsAWsdT55abJv3Zwa25vUNYHDQyc3BF87aNkP6w4RiGBZAysNRhwrRR4R8AngqG2ms91dHCKNGkFE5kH",
  "key5": "5BbBvPpCevxEApWd36Ks8g3qA24t7cZ1rDSi1m3Dy5JHvceNfpDfyTyiuxZoCUa6jyxHwAg99oCLRYoqrKVkC2hT",
  "key6": "3rwCz9RNs4BAzbYx1bm5aanVoJtL24bS7Qi1AduMcDMb9jMscozt6XN7UT4sJXf7shUCp1LCmxvK8KM7EQMbQeUy",
  "key7": "daGHpqb7QwjvQEvrgTtb7uPdNDYuoQPPgf6EyMa9pVx3637Wmrtxn9wqCiBuFzxoLzRaCL62usub3PoKTSP7fnU",
  "key8": "dPaVd6fk65vd2oow4DSqwDWiQpJyRVRZxpt2gxSPGqrKCbSfxxmwpFzBp5SDu31eTP9FK1ZUw826zHtLwfVuXX6",
  "key9": "8xp47LF7Sht4Kz5tB79M68efMnLewVL6eKXK41d6FgCvYvorCwWC95JKsTTorTWfapyDc5xz7EFhUqP5jbuT7CH",
  "key10": "53Cop3jK5esHGu63HXrFSVa9cqyXvtYPpW76T9RB4sMxVDJWzPKMt7J29cNTAJV5cnvZZweV6NngAtDiFp58U8mA",
  "key11": "45G4e6yA8SjV8eHmYMUsA4SPV5g9TimYoqJUMnC898gbUi91rwdpKLEjtKKf8gnhaBmo2ptCLYSFxYjoGtKdNM91",
  "key12": "2vnuY2EF1qiCSy7NrySU9qgdV3zeykNhAVtxuiyXCMLnfUEDEvam8QhBewZDiW91DY9xhWoQ13U1x7kqtkGva4bP",
  "key13": "369XtQz54BVyYYVBrtQU14vM883kXsiXLabUsgDoBQtbqubUasDxbHwJkRXWsFDpR9semzDcqwqkje93RTm9Uvtb",
  "key14": "Wnpmsk4ZHjXnTtTKrcMR9wjLd9PReRNCcNJhymjRLRRfz3oqFNqPeEiHwCshW19BLivt6Lt6AxzgtDtFpDqpK78",
  "key15": "5BcKV8uXwKqTbYHcx1wxH2sFXuTrf6gWcW4AdF6aGo6ESL2en9oNDmwGeStgZoJK2txLiAtfA5qRW7ZHaS3Qg6r1",
  "key16": "5yZsPdkVtBcrYiXACm2ukBeyTuTJMSHdSMYiiPEBGTKD452X9fP1rPtHkfYRnds4m6DYqnHdkwQjSVPAvbfxtE6A",
  "key17": "5JiiAHmeEEMaASuSRVDHDnfPMtDT4PGTcg2nttRdvwaeJrPuWLs5PjqYSqmNiqPAyQ7xKKd6bRcy2VyJnfGCg4Ak",
  "key18": "3d3GHu9NZFpWZr4faoBCFQRC3uHdXGgt9BeLXeJupGrNwsMLJZRyKnwvNbGyS166qEcwwePdH8Wn7pwt7g4eSmCy",
  "key19": "2cF9A2xexBGdbRPwWUefSEmjzhoS8undu6FT36gMkwE9kTZhq7hU6w7oK2kyJeQhHHH2XhjgCpeSgDRVygKEqMDL",
  "key20": "4nybRor4EfBrBQEtLuJyv5tN4gNavLyBPB6sXgSwy2Ld18xRUQiUjJj8YbjTjGa9sAtYcPWnUCmTfRs6LzCaPZDD",
  "key21": "3xcDTUeyVyE7fePhhWMJME1GtADw18ooyDShb66mmxTNm5gRPdsqVbFMW6sj3m13rUTuyS5cA4PVfzza4mrp6PDi",
  "key22": "5fb9MkaqMUcd9HB1MZjDwCyiQoVUGLncChbLxyVWCDo8Fh4xoDS4MCHWtbFogeHPumgvKnzAd9wtecNhKeSxhPXm",
  "key23": "5H4g9ZemF2hFmJnUVpMtazPrULCqrZTsq3ZzWwE8NGSa3zxEr2HFCbjLLYVtsL38bv3fRhBzh8tUfbGr183uKx7c",
  "key24": "325eYrLYP3gKnXvuhutuTKLF35iGKSNaVmB722moLqig6BFdMJuze7eEvNs6Cvj8yFSSrFUfCEDALP3qXi8KvWAb",
  "key25": "2TRdP4wUCTi9vYLSBJsxfexXNCj8Mx52ZDKevMAUrRQ6BACwbXHPhs8vj8jKLzKZpHfuVDLt2Zs1wSuww6aPQUau",
  "key26": "28oiEtdf1cmjpfrEw3ojgjU7FiynQn8rN3k6vuXJotBt4QEDumDMeHtQmbvGUP4wXTT6xFf8SUvJEsavKSCednnN",
  "key27": "5FFmxSQNNs8KBF9LqdYuMCWHjJidSgekkPbEEM1ZtiyZBpQD43CzBXkLRhNWkEX9QQpJsUYtwBxmS4SDW4RvmzbV",
  "key28": "3172vafawvuXQpaVzU1Cgn7sQv26989dAmQQHNVaHXGZNNLFXiwBR5vzfA3hRtHWDHZmDkNtdDbPQoCsqhk27foV",
  "key29": "5dKXvzdmuwhPKKnkzrwLwcWe5q9HPxKUjmYuNnvDbjgnpHk5nSUQLr2Jxs6pMBiLtJVJm68YkZWkAfKR2ZeJRoui",
  "key30": "35Nwe7nfX9N6UPCe5NZfbak23ySEbkjFieVor5htyUSGcwMcPLkks3ranyuJYrpGDQryhqPnD53XfJyduzUo6TBg",
  "key31": "4uWdXXPv7f3vz17kHwTN7sjAd1P6ymdDLz3BMvmiH9rjQwDeRgF2FJKQcLmgNSi7yeeKEM6APUNTgxTnfqSkeJpq",
  "key32": "67hxqs2rrWGzb69QoiPkZ9ce2fmMhFQ1bwDSP6iB3aH3FspqZECgZqRHZofnGK47saw55TtMD34ALDrTdvoxGsPS",
  "key33": "5JVUvUg1hNXRjRY6Aw9jrhoEYxk9qSXr6QnhA8tcsgFN46nGmSFdoJs12gtiiDGM35SwijrZuM3qL1f1TCQ6t54j",
  "key34": "3S2PWVUoBJvM8XHgVw6Ddf4imBZVPcB6XLxfFpULWxHuatnxe13niBghyVHmosr24p3ThaqvEB6zakCVAxKonKoX",
  "key35": "3TNrRCiX6Fc2ZQgupNNCxQQE8wVcJfghYBWxrLS9UTwwYEUaApadL6xMdEHvbFKooE652HPM9jM3A2eaYAwUETdh",
  "key36": "27sQsWsbAsUKK61769TbPSdLF8FdQqq7vfnL25YBiKax4DHXLoAn55QsjN8HfPsXoDKw77Zwzx3g8qBMXvG959Mt",
  "key37": "qG7GeRHtTbyNjcZZMM5hCfr4UoSJyNwAV9zMJ1z5TAa8X3pkk9X43Gr2urLfZLyooSgpAVs3xEUXFKuhBpHrpau",
  "key38": "5ffX2Qq2oDG9BrA7oGquZ9vLinEcSPNx4oM2Amaxgqn5HgxjEMws5cRdSqazRSXF2TdwrmzzHMj3zSQW4QBosJhz",
  "key39": "2tf9DeJEFRYXK2Ukt78dftuowAW9idDX2XW5Asa87ZFMPuLk7i9jRzArkqx4MhHHq4vrBS3Xp2kUVLKF7TDaR4Q7"
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
