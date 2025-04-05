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
    "5RgzZE6dQj6aFaGDHgf9UBDjpoRdYUVR9SmAgAFjiBcWZcdmdVphkZhNzjLshQBBZsNDmhRsUzeLTrPaRpkm1FzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48DLDV5RcSBpt3bns864AoZ7QTEiXH5ZTdovrxx9oFzk6VS2Jq9krvJNVgeThYaxZznir1rQvQdhTw1UcwgdedqC",
  "key1": "3V4JWYymBegYDp3s8nvNYKDBRQ4TuAFRczYzPwVtiyT1hSZ1yt8MPvBtwq5u2itjFHRKE98cveZ3oeSTiRHKgAcx",
  "key2": "qcjUx9R3tLvtoyy4FnYEjUffYbQ7Rt5yH2DJzv6TAtMgiogQ1AwtVc2RaZocM7kA1CcVWCo6DZQZp9oE5xXVTCH",
  "key3": "2Z6gp75diHauJ5fpadprvMyuhPyG44iR8eE7mx2ULjYN6RVSEU3fjNFejNi3y6xbcAVr7heeyYRfQPQ175yzyNZS",
  "key4": "37mqB1z5qrRBRKsgSjgvAPNzrHLdXsSXacd23NH2AgDftw5uBd7qRxUDbJbxBMT1F9hZ3Prc8eDCiNJLmjeA9YBJ",
  "key5": "3VyWte1w5JnVzUw8bWvbMn2CjT3rBhbJBdWHybzVkzp3CUnj1sz7v4PhUSuRc57uB7YFhgEZmLzPKfLXgxpcab6c",
  "key6": "3SQB4hkcT4oqJDbvDvMRCaGEYGN6Deu2k11Sz5NqXdSisEBp1TzCakmEsiDbHJzT7WLqhT3UhrDBXVQsiH7dVbXH",
  "key7": "2ed9jHvU1BWVMSJVR2nNHZTxTanuSt9hQ1k7MS8gTk6pU2Qsxg6pGrLYHw83rMioU1eWUgLXfph3bimJT9FX1r5U",
  "key8": "PV5riwZBmJrSueADy9jAiMr3EtnThVTKxDxiEADr1QxpNoncFPTjYpfJrseboaokKsotPx6HWB5PSQL8SYmVpi9",
  "key9": "5E1REvGsJJPy4VqBPrcLJaWmV1BWSGH1N7sMX5YFAMFWMJicv66MprPruYt3wJadQDfRqpmncTGNkdqbEh4mQBnz",
  "key10": "4fn9t1odXYKU71GJTnNBaEYofz2ArRQpXtU7oJTd8Q6tEAYqHq9z9A8jGTrjpN5xm2iDCWNYcnC9UowKoAvwaVoc",
  "key11": "5MK3iPxcB43jd79ssjf8eTadkuzEmcodV5dD9zPGRW6L2qC2F3GyD4ydDtPyUHBEMZhE3CEzoP3u69QJ9kFUUAfw",
  "key12": "3TAFYVWRf2ikJreQhsJ5mg45Ksg8zwzauB3ocXVNUkHjnJpBKSokuSQ1YhYyC7ppsrFcsfXd6oZhN7JRbwb2Ff7s",
  "key13": "LfzwBQR9GBbN29SfpXMugcisTRjaKxQo2P1fc8tkyyd92g44WHiBJLQkzHQSAnoadvE18bcweBjjKqxv1xsaBcW",
  "key14": "3SMev6DDecuUEVnzfG2QXA2awhYaqQekhFV3PXJqHjbunZe5ToheJoGzYQSST2QLBhDvC8swZJcof9RkmcqnChGG",
  "key15": "4ejMgTqbgcCZdTvrgiuerU2DXn4Fwee9dcbTjtneBDfF4VqKx5TarLwSR74atcPvRiPeaDXizpAgnxaVcXt1TNrp",
  "key16": "5PwF821GhFZg9jF5EGdUprHZv4B1Yqh56oSxxApBmr9meMZSZDcTk41sh3frsYYre8knvxBL2KJhPDFFoneEj8TJ",
  "key17": "3KPgFvQrxbj25qpboTNezrtVVsrfUApZqH9JdpKqncYmcUBGSpznmQbZ1SY46n7AFxgYAszfGVMcCPAjKD8unPxD",
  "key18": "38Qg2FUNrbyXYPmJzwwN1xRG1wzJvhRRQiZcKdLAjbT4qgx7kGhL99eemZF2pLYN6Ei31uLFn7kNsp5m5SSNoxxX",
  "key19": "4VBmMtungV6uyYLZwb6qiQMi39V1Ko7bhMYCPGjiUvH4mU4fBrppsYUovmurRgJjpiCDT2e9ViLMYovxbKHpDzRw",
  "key20": "4MUu9N4Upvx7VbihZYdYHfW7ZevFBytm5dreYnBRKmXZ1UtZDmV2bBXvJT4pTRgXsnTYiv4YR59UeD2B6TDz9fHD",
  "key21": "3T5uGb5LPhzez9AdzvMC5r9HpJ29J6feidQEKy6kwXQyAjejtLAtn6cFNmJk3bLkPZ6VQVS3HF4wheyrUCJpAQ76",
  "key22": "3pHP4rRx1pBPG1di6hLQG9MCBoeLViQwchz4VNHyJGibHTeQCFM4bfX7BzKvsNizqrvihaUWXYbkTVuRAZ8Bj3bD",
  "key23": "3T8FuW6zK2jw3hpvSdZuUFisz5fCmzkaQc8kXB7BGCkmZTETb74rTzmaxhQ5qaew2ofJT4qLHYyNe1CXdLQBgm28",
  "key24": "EUBxuTTLZhiMDCxJCy22Lsx2T6dTHJE6pmEmhLmoNYcJk48haH7h4VgVq6qNhjBViyP6eZfWd1cX3bo8aPrhXxc",
  "key25": "4RLy7UevNKtD78PMVNMkYJsXjgxtbyGkTFdTEmnPSPCR1A7PX2dcEwihNozQKHq9QCAQmfvckUZFoZpEcTKYhfeW",
  "key26": "4VdofoBij6BTRoSJmBrZDZwzWUt9Fpi27SfRBWjRigMWn4UyVQNHJJTxHXgnBNDP1MzFmgnVuu6Aeb9xwbj9ppeH",
  "key27": "3fbnynzsmUQcThir2ozsSMKEdqErM8R9ttH4qZFW15hK6DuiZCnGw2LzvLs3q9LtGphYM9JcozSJUkTdbdvZLAYg",
  "key28": "2a4sBrCHcUapm19XTTbx5CYKowJ6YX3NfSSpX6NfAfCEZgvPmjqzrmkXgiNVcZCTRA94z7Pcj7prJiHbkGoLNiH4",
  "key29": "2xzbJVhshYgEbdT2ZZfQMXSdxyNUbyJpKhTeTv195gSVdKb2eVdVy3PHiK1gcbykQf36HSrx95ntgfHgj9b6SxRS",
  "key30": "4jV9xbHsMjpkSwUAvaVDk38xe4KvjzG9e94credhuZaybWEaHZWy8WwSgVjgRN3JARCiQUgwD2W8Fj3DXwoJMM4g",
  "key31": "2EGx8qv55nUM5WXQJCVWnM29WPKs3GjbfaAbAuWWm16tomGNLX9wfCi21cPVYyB4f2SUzqsL2MNEWa5kAF7eke8t",
  "key32": "5ivLqzBR8QMcF3rhGSggdJKf5383GuAqDyW76q65FxR4MDEPKmfTKaRXAv2QmeU9G1DdPf2rcU3v2aNu8348FxLK",
  "key33": "5KbyHs97XKJZxyNdjEVYUg72EWaLCMby4yVfNAgxE8zECXFoSjYYHdUaHtPpmqUfAXqUD1ctbgFE3foFWRRyignR",
  "key34": "3dyiJQEsGYmpsdJ7WSczF7RfPBq9HJw8yDzZkjwDqiqgi5JgkpZ2QPd5E6qZR5tZ1YV4JbAWDV6NX9cFoV6rAhR2",
  "key35": "5gSgTPHNQmUM9WM97eByLWEgmdJvUhrNhH5mzX9Bn2Q529wyzqiHJLH9b8S2EQuVww9WaazWA34ZV24FGk7r5uwa",
  "key36": "2oEznVyRH4Mn1vU2nRdZYoExC43MqKyhd9YSWzQXNBFra1JbBEqy2dVpujUHNXrRXLt8AuW3EmdYvTQ7yRe3vMuh",
  "key37": "4pu4ZDnBBev3coYp3oE2rsE7WFFpm8gEnUAXSLmzEQrvz6G72iWZddezyoMWHqnoPHYVnUoS492pJUoVrmdzPeWL",
  "key38": "5dLdvFWf9zF8sU6EjtnqQMS67PKubBx11z78ohRnhUcZH2uRwvH5JmBCuutHzWZTiEeVhzo3KMWzvygDnvLMLVPp",
  "key39": "2ZC8QHLyob4ZAbdxSD7nPnR3zTtwdcC7AL7k5ZSGkjsqGHGXagX6CcRWw474afoiHEDdm5owJKgixtMUTWQgVtAB",
  "key40": "22V2V4YB1XtPtVsGLSAg7rRvg5pcFpajtawAcTx5n3WR1mgiWdRCT7WPpDZdi5vjmuuTnBGLUsXZecsKUKPCmqjo",
  "key41": "2T4ic5wqzpUUYXY1ErvDvMfCuG3d2AACGXo5g86Fd83AFExpr1k2HhxPNeJyKtmdGvF3aTVf6WWxazHsVPravVzz",
  "key42": "262tHVF2cGL3um6PanYFC4i1zTtxDMh6RmTC6z122DDFgXcxD4Ds1fiBfduvbGr6FTpHE7ZgcMjYHGxWDK3Ke3Sx",
  "key43": "4Jd8t2Yj848XMSW18iWLXRb3KfcXCa8HMKcLsc2sFnfM3LwLN8KjZgs4zMmNgNED6YuE71GDpt8jSVZ2JhETTUk8",
  "key44": "oSXZvFxEDoj5h4yJbeqdg8ahNmRYDJ1LwLmJk2c5BW77yYgZrEdgABnjhPNYzxkdmbWAdbScDFgyf49XywsxdXs",
  "key45": "4ft8h27DJvo8QYSZo4kYkAMpG7DzMFJaFbyfjVKcFu6cgMBnFEErbve1VmYV5GwNdAobb3qbGLNgzk1d6PEVzgJ8"
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
