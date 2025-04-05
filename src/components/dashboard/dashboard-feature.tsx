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
    "5A3GWgKbWdp3275ZnmtADw7BHs6xXEtfwMnJhPQY13onB5EJbMeJLwHonCNBRA9VNLXr9J218PvdVjoTpoSrkuw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "idTEJyMtQ3X71mMCheHrFhxiQoTs5fw38nk1De3CrTYGgmaHARPS6dhYYaEt65NPAswvnH3VUUuw1ndS1fPHipL",
  "key1": "5hCJ6uRh9V5qxhmnZYGGWVcpHRBS7nnaKNLNEp2W63jw6LJG4tyrA8Uqzq8fh82P5xSsRQNmDq7WuG5tLRuTMaK4",
  "key2": "2LpB2trrLcj3qcxQn5jHdPEmcQirMGprmN7yA9i1Nds5ntmEHSMoN6AxjDpYXau57pQ51hSqChxuQcbVdhEygd17",
  "key3": "5FEqM7iKfxM9LVMrEHFdydhCRiszjbRNDJVQpUbQJ8XRfkrkx1bKwe3fWgEn5FNS11tLbH5RfpnKC8aRaAdkCnFM",
  "key4": "4KC4v54wzHfqTTb3QeHbXUEhmiquj2xabEoDyPB25kG2Pgya4un9y7zmzoSZg6DXv6ngvE1MBJjRhi7qNirR39X6",
  "key5": "5tqdqcdgFHtTHjWhHGZuGHMgNyRSPiMYH443DiKxAAk5CmHE38UybTBsp3dCZt6Fab7bZ1gWmCsCp1MsZ2WkBkmx",
  "key6": "2kZuvAEyruLgBbuWDw4F1KbQ8nnS7MAHY58Qa939G4F7RG1YayPSgRwsMvX4LEagBZXrPmhvPwtH1gJi2moF5L4U",
  "key7": "53apkNeLJbBAW1jxeKS5D6VQQLBba822kCKRtRE79BguVegKJ4UeFYvTBP4fcjJEVC6aKn6R1MuhUPKJz4soaUvd",
  "key8": "4mmmBMwTaYo3bbgNLsLXS7AFUeocyouF2ePkniAM4Ve189TXNLLZjxX1b8mzLroAUrk9i2tzoqRxJs9moHG3Fkn6",
  "key9": "5niDPaJxZueZdduFZGbXRW82gR9VCnEd3HLkkPkEY4MuVZ6E5WBH7WiFFSjwMvcJRFh4SoxKefMY34e4Ky4psvZt",
  "key10": "24eTR3B38hqjrxAD681EhEmBrQfaQKWPgAExJVQpY6Yu4X2y2K9UfGf6rZyJrPtiYp4oLyPeikdbiEbVaKDqhbmB",
  "key11": "5RyaMcwvGaT3fawkDanf4qb1YS5TgY2eUDuGVvp2AwzBYcAVjfDpuowiYCuNgexFiHz8bqhXtexjRktLWJo2LPwD",
  "key12": "3GtQLUiDjFr5CgSnoxqtsmHCamUs2pDNgZeL8NqASHAcNZvNVGhb7UA4HUhrGT4LmG6YGxG9R7v4or5g7s1dCw82",
  "key13": "5cEfdid96yqwBcE3ipNmKGocDCPGt6zaon4fMFWbG4jb6wYBwPSrXAhsAQsCAfVhSVRHgkcQWRqY71u4xc6AMTmz",
  "key14": "249msESp9KvR7tAZvQTLoZfDjuFTnkPQ9FBqxyYhJ2NggjNn6nPUjNXtn3sVEKmm9UkYiBdMwJEcv3pjDKawJ3A3",
  "key15": "yWYxTnJmc4XrTPgaunPKCWQig7NjWdsQqtdGUbN3dHaoKRvYVpbxghmi2hiwuqEm1h3ThtyjbS32sYdvj2bR4Je",
  "key16": "5dYgWA1L4eP7DY2jzYVvv3rrfLBDViHrZkjoVFGJvAkyBr4eR94jVZQb9TUYH8mnKJMwCeRzG7NKYdpL59LGPCmr",
  "key17": "4H6joKQENAEnovhCKPtMzUxKCsjCEd9jdDvHmaPrZeRYatpiG9TUUA3iN6eTdmERhtHB6v2rCX1FhSDrhYa3tih",
  "key18": "5QL6uTaXEdYzVv2Hp62kc3JDTsJVo8t8cJPvCsUXYPXioV44Tww6LQhLAX5Vvpx9tg3CBQq8ZYCuWxR1U7TUUkMB",
  "key19": "5nT6LwTjXdPVRSH3hAofFr2C5bngCyR1DLx3WJMGgTwEr9f1TyGP6cjxRrPRFAb6N9KUoDAFYJ6Zn3inSc6bTrnD",
  "key20": "35hxPxnz39vXf3EBRYCso6cKZtcJ3cyWmFToVU3BDbEk73f4KxhAatZV6FMnpGo1xV4kpRdnRvNJAr2vxAS2Gy6d",
  "key21": "L3Wcu1z7ox13Y9r2ECwae8XxSq3hzA9WnXqX7tBXyazSGsoAuYyVqj2bhJM66asygtDroqktJgnU5VUepxdpzcj",
  "key22": "ScEu6K5K84jpYqchkktHmqkYfLsDgp4LzEEQWnR7hokegAhFjuhPBQcG3aYLLv33A3n62R28tc28n9pLr6qfNzo",
  "key23": "65Lgn3TB1Wzr3W9oAbqu6bASDMmPk9BZm13ztt8R8zZUBe1CVvy1ZotJhCRjxNhduVr6mfp1Kaj9bGbWwsMQDHUt",
  "key24": "2hdGA7UtKqKtk2FKZkAb4z2MN2vaF6sk5HDN8MHs4cNZsCaSqqmo9oMXnkauucFCgCD4Ha2EaevjxFGwTvw8RFPQ",
  "key25": "4DonJADreaeA5DTh84e6tbJTKMts4q3qk9y5y7Uz74DbiyUxVJ3FPPJNvmsjXAkoJ4kifehg1sSEnzsH6pTs4mGj",
  "key26": "3QkbkUYfA8CHxHGZamFYP6YcTJ6FFmqK61cnorhv7KASSDDThaDHpT1h74F5U3pXCtF46br2LahdeoS3a9DBHcen",
  "key27": "5yWRyphS9X5jQtNA5gYSn4hBj4v48boBH4gsyXm7g3KF5hcbKRkXGaAp29RudRUmV8aq44cR6VSyzXTRSvofW3c",
  "key28": "2PUaC1y7uTe8rkkUmZrd4JAmLapvb17XmjZKr8nhWzXMKn4RMw3KGjfvw7jCTE2dWKHMHw9CQrm9W5F2D1SXaFzy",
  "key29": "2KNDNnaJ8Hwn9mpW7BnXpan1Ghf2FPbh2MdckQD8adkcCxoNp7veaE6q6ufKUPXQv2z7XQK5of7ys5s6N8yxNzLy",
  "key30": "4ZE7mfNEqTU8ZX5fkRDggyVWwgezTXLWaua3excvbegHMKABCvWM9p54HqVULRwdGCajMaehgp7Swct6ErPXSAEC",
  "key31": "4QNec8LBE31mWVWgpFtztWjXrvPQoavqwXFk7x5gxsXQDWkoREuiFk3tRbnoRdjrQezVNRbVV7B2SuiPmz7qYPpa",
  "key32": "3N5GkLSU58HFM3BzjRXGRuXqHZWf4xymf6yt96s2vnTYYRwA9G31PyHnSLs477S6fNFgbgpifjitxWBH7htoQs2v",
  "key33": "7Aedp3SMSTTy8tikuA6NRPsKviQA4fg3vgHHoE13cS4gbczswL7aQCRVTpn4xeQxKprR44kAdEAeeDcvCM6qWij",
  "key34": "5sV2Jm2RFyUsJDpgN83eJgGLtoAgiQqRQsX6Juf2STFfpMjrGkSngwFEMp6zUPmE5EBoFtxD6cxyVWhp3joo1dC6",
  "key35": "2GbFFWfirHN6Ahi6LLAvp8ZzRuNH8s6QJhhJryxtysgUD8ZR7Lw1Fay5fAU9ExbaRPSKr7aBJBFmeqkqdif2SXXk",
  "key36": "66Dw893otmH42JcyWAn8SPoHWfVnHBkkRMpAKdzkcV3TMp3eSLMnZoWn36Z7BWzWS51fpXVLD8J3h8ToxwPoZMKk",
  "key37": "5vsBE26CYmxA6VpbWFsq8zFPRFteo9GhdfHVmMXyVS8RbE5myffm9AKF1KCjffBJ9f483WNgTtCGir35H7hBXchE",
  "key38": "5RFnUbABXJd2WJjMgv6FEi6jp6mHdqG4dciaHRmG4sBrGzK5VhvjELhCzWRTn3P1ez8NmtiM1dgXBtwbxEs8oL4g",
  "key39": "4A9KM5ZuBijodwMjZUtkNPGY73Xfx5bejEL2qrUhwwPBHaC8C6uxcpaHX8x5P7V9o2CsDxfb76jmmorTUXFTn38j"
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
