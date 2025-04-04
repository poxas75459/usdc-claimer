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
    "5tKSisEDbU7eftPMAP44nd51qRfD2HjrUfztBHRHtjaAbNm1rRyCzfNJByc2w3RoUyirX3v86ZQHGKKApwFsphMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ptU6CzGt8RJSLUZsb2A1yooHXeJRPKzRKSkj6STfBKSVH2wDXtz8bTUZkuHfyHvgHWiF94vYUMVEgwzGcLYqxgj",
  "key1": "5KMExeU8JZA2JM8vt1EVJUWVERX7Gndxqq39AxiL9e3VdUpWbW6YH8XUcDJ883DanahZQgN1SyuoHJ7VieGeAiX7",
  "key2": "RUw6FZri2HwahqwSy9JsVDpWvsyGF1hFDFYZQSRheoVpJeFpbmVXzVARZ3cUbW5pCui9vdoUsJFu3JamxfHkYqx",
  "key3": "2SPhPKvPApGvS3tSUiupGdtoWPmfEeU3TN6ueLm87MFhBYfK42GqCW6zRyKTehYh2zJDjM27c81ZS9vnJC86HfXv",
  "key4": "3nVkQKtQ6gmxHRHzsXmmL3iH1iVDhFm8GS18ZJoCiajupoRg4SEFCdUNPAQJfWWJ4ZW3mgqktcXXuh1WJKT1BdL3",
  "key5": "2kHJAJhWxJyGjKUJd3qHxaBtqDo5bUB7E2obGwit7XZCY69RDF8JeMC7x1qGm9qFevEx9VrqJSHpKGgHYrnKGkY7",
  "key6": "61rw5kjr3dkh53cyYyucKCL9saQnwWj2RRAFCU7DKvYutAEZf11LzNDeRRL9XRXL7toJwZARP6eDZpkURzpWqAws",
  "key7": "3vSmBszpxaLdP7cNYxH8osnUL4XZd16HTaNLPdj7oeEKhfmYKXQ5uAYufwUrnogBEKTCr5twYdpfmNgznKcfcHuf",
  "key8": "2QrMJdPx2RgWMN68KCgFHb9LPVBxohFDWj9uoNqVPMn88iqsmnmWzssHAFynDD2WnLo1E4eLKUADWk1dFPs7g6gr",
  "key9": "5VW6SDBYtSgF7rCLGdgXa1U5TCEt2pbPBLJM8TaLoc2rkBywnoYQDhRqiFwmLZKvWvh8HLoVuJxL6YRVChvvnSs7",
  "key10": "DkBMw2x2nsQuTd5ASXcyE3XtqfjRqUgc2Gwhy1vdhLA5ZE1og3STVyZbYVziVoZ8idYFeaUfXK8Qg9Hcbrvu2fy",
  "key11": "36CcVRtXZiHXjMLEaEhozq7FEqEidj5wTu3wbGymD8sEvjrBAiNfbaiD2NynCFPij9CcMiy1ViyBJpDtDhoKPZTr",
  "key12": "28gDCFtRfL6Conx5WBeca3V9occJYrEWXnPBwTiTSbvYijojrN6xPD8onCAAJphqDAmBuJyeFpRaDxPUvxdc1rqG",
  "key13": "5nSwKC3AVp8nPAwLupfxEMcXjdS7okQyGedC5yYYUUqfcsgmJ84wRU3pG1M8YEy4A2zWfYDn7jotdR3AvVJvZjka",
  "key14": "3hh7JcbMynKWGJXgUxZsJHx1xbxqappY5d6DoHmzLYCWwKiTKnobSwkswQebyf1439q2y2WzPUi5N31tANcZrMBv",
  "key15": "3x4woiTPgZbydMSvmQqqgv2QAGQ7TsoFLifcEFEKFRbj6PLczRXtSLWy7tHXBhwoo5LjpobRtYZcnYQcEW3y1gKq",
  "key16": "4De5GzfLQ1bWvXLFzpm1ZF9Ut7RXjdNmxB7qoRs8gLg6FJmYEWrm6uRqkkvZmrLC3zHuwJ5T4NzwtARd4pgL18Jk",
  "key17": "57xD54hijQm97Lii2eCdrsXCNBDUaj6jGzzutcauViAx3hdYVx7Z5ETGydPtJp8ps4s7vzb1htXeKDv5CvqK4UYy",
  "key18": "1ukB8XJNvMgmMWaSfP5heCCHU9qVyDDXaNkh8YEEg6aYv6KzidvthAGeY7et7kD192PwnSkgiyBHwhVzw5v5M91",
  "key19": "5fvbuPwzgR32AtfAWH2uxc7AvbRggMQYngND3kjxarx8opvrK5PdJFAQArj3fqDStGfTQgBzs3HpYuP2TUgWkxjM",
  "key20": "58tKnFfkafbHNk5iatLNAhUNdH9BnnXjW9MxBXXHnjvStCk8NpfdGvNbLzrjRh5FvDELvPYZMCpkpymBTn68M82F",
  "key21": "SjJ2cpRjCpYUiw36EKL3WvNzzsrjEoqxS12w8T5Yo14gVBZLUJoNbReSazgG7jAfAtEAvCV8FFp2RzRzFmcNsXF",
  "key22": "2gPXtokNiVK4dkh5wpFzCxGPskgUaXdDYHRgDB8TqLrei9WFL9XoFFNix9nTPLc3nNgppeXBA9j8QkVSoiQ3iWKA",
  "key23": "iDPyfwSJ8U7DBgfCq6WDCPULVhwFTy1jwbirgtMREAREUh8J54MFEeY73eCaFhuFVnWbzZTefNdyH3NVG3YPyMm",
  "key24": "aQ3umjn2dHqhRbhy7sfK4qUN92AU71xpXGynd85UWmTW7vSHg787PUZ44BgrkVAdSYLHWN8bmByZoKDFyF3owyQ",
  "key25": "4oqoDM2CrE4qyfzC4vXDk2bepEGvjm64Tt81Tm3WxEDAR2wp48mKU96s4G8RFWnMALSTGsT4kztJoHysgKttXA1N",
  "key26": "3mHyRzAh3Dqh8aegasAqjM7TY6ZgD9GtvboziHYuvaK9pqqBPTvE5s7Qx9WNf3fLhe4exV19XFke4gBdShuVaKq",
  "key27": "5XJN3bSnoTr8tg7D7zwyGXBGLoaM6ZDdfqcLb6PjnjW1f9gLqdD6yXavkNkfaCjMZ9ffPVchx3dtzzecKPcWt82p",
  "key28": "2XZXTvD19cFTTPWstkdDXc5nC6HwaCF6rCSzkRmgwneSbEoifkkivUDgn3kqRi5xzcFAVqjPenNvgocPqMUNHLSu",
  "key29": "5TYXChBQbs8SSirFg4att7QUH3aMFeahLydJovFigJyS47zH7KCuCANqa7KVrYCCv7GGoEFoVtymH6MdCE3RF1s6",
  "key30": "2erREU8fKYZSGTMwzfdRjxUX8Uee86mXYU7uQhUVk3Eck9GMgwbRq1m9fi9TBcwYc3YUS3R2W3gdjesGfuZDLj5a",
  "key31": "3Ya8BaChaJjgcoXupbJ7EyUW55QJv3D9PJRnxhTqdbmGFS1Ybk3eTJjMZYWT4abEbkcw1AfmWH8Nc7EPr2UdcNqL",
  "key32": "rj2VQdNqWyxzHyCsLj9CWhVpcJzw8kZCe3DUeMPMLRvE3U5qdzwXNbCWf8erCMhePwLFZd2hoVGDZk9xFoNdzWL",
  "key33": "5CEgJmQotHt5x2QpV4mpZFZFpTXPMhrgKDsuWz5Mi4Ghy2LZcTivLC1tgH9sT4Fu1BW5EZ1p9wBk9emmFDLRQugU",
  "key34": "2QtHwZLeqdpFC9vyWPZwV6hYKZV7eg8oPmHpD738AhMk2HA11cKJwYYFDQQ543GtY6LvAFxU7GRK9mXd7XmH7zJW",
  "key35": "5Hp5ZRgXHBgHGXPY8ufZK4KJU85Q9hX8svQL8NB2n1Hz3tLD1oeRh1EZLCf7rtsU31naw9j7FTrNyMXnGhqokhxK",
  "key36": "oL9VKY3PPwbuJjVv9ipqTdcEHrmWLTrCQShEq9svRuveFUGLxFuWRQcvZUA64pEEtkorJPDUAGTC7PwnF2rMyM8",
  "key37": "26oQpMFRi2cAgZt916SNXAJASU8Mk9w2igtUTgxfunVqPbJosedwqAZreDQB1RrVwybciGZswgnoruUfKp3vpjss",
  "key38": "2fGpBomYMj4Ft6S54MzpmovvcQseBga1gPWKaWXwPyXgRpMzBdg7Ay2A5Sks8vnaEpWDuAjj554vLts2sVs7BZy5",
  "key39": "3XZdSZgtjnhHJAtWK34ddnmmNcsqY3ey7b7h9f9Vp7ffRtTpJustaxRLEbRVjZhUVapbw4a1fF4K1E7gbjbkVJWi",
  "key40": "48EyafJN6Nmfees2aw2SH4jgtAkkkUyUp9fWGcPKQVE63Vbw1J1KYuhrSh68A5yf6ThVUH4Z2fZZMd74PsYGATUX",
  "key41": "58jay3Gj9gGfBkFc1c1mtiNRMECipQ3LmxKxvtWSkW5Gk4ypmXHj462gDHSMjRXwZaRwyQLCkFdwkQthZnsSMhVJ",
  "key42": "3fDVMeentbdk3HqSQLUaBtp2P6AnD1jvbbWUzwkh6aR5gKS33pjZRAW8RGwCzLW9BUZ39hVbkWBbsjq7jB9gRyt7"
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
