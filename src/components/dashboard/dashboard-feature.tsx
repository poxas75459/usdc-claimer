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
    "5zwaNmdmoj1X1WbuSiXXnMEv51Zje4wfd6TeKZu3uFqVM3pBD4fPfF2Dnaiy4T3EPBdhcsCvvRE3wz2Nui66SY7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ka8GrE1ZAAUoStBWC37ZAf8FTxYYnTEmZUu1b8sBvdM4Vpk1ZNNAN8RLPc4SgFrufN6pkUk41G7fTp9wQwzsyFq",
  "key1": "2WnjkqQkMDU4wV1nNedAagV7kd13Sbo9yDps9vzwyiTHnGbqneaf69nNUYKLUork6KedQrZ9m7j65kz1tHh3LexE",
  "key2": "3e8NFUksXu1oezykF9TLu5ikLaNA3JJNA8fDiwF4BL8oZpZNXxABVwY38VdYEcjLrMkrdeXczkX2YraCV4d46Var",
  "key3": "3ZmqMmigDsP8TG28mGiG7DQUeYkcJnuWKoWM3u8rtrJsysuGukywUTBo5DdVaD1CLppDoGcLGedsn2Qoo3jreUG2",
  "key4": "4SPn45ZtU9zuDcZbZ9hsSZX4ncHz5apNWChGuBtLLEcBRLaHwUVn88VTZikcMhqQRfc3RpEbmeDwrJnVZAdmiCvU",
  "key5": "4JQQ26LuqDqXcPBt6RP5oBTpuKqJ2oMQtLCrJLJmnTxGZcbhVCoxgsPdWMUYsPQeFNeAkgxa6UkawQvQULtU7ToK",
  "key6": "a7GdSpLVdBaKUDAPPAm39WuRqgL4gsSwzCqJL2hM2VmK7ThFmKgnwV8yF7ghM5Lsc7fMN6kF9GGCW9NrE2XtxZm",
  "key7": "3fNY1ZvBossDqgytUsUTKFFJQ435b3fn38emD3EYhfgz71DsZ2fL24RRiyAqMsHVjEjhLa4LasZfUMYcBLwkjYRH",
  "key8": "2FRKjTQQAWJJxoCxnGXmaFktgQiuoUpvsj9EdMB2F2URxCzBLhhHDWpqZyFNo5gdj4rovqU1wwp8d1Np8uxL9VxP",
  "key9": "4L29h2vsHCfpK1zM5cWEw9KVBa7C7M5Qj6EWZfUGKsnGBMkAz6WiodQQCc7o2rYnv5URtkRgZeMx7r7SpdZqKnxs",
  "key10": "42pT69zfaQwsYpY51JnyA3CU1BE1QHkGyWm8nkTvDuUXptadNNH8YDxpj8H1rKZSnXQRiRMoR4CPSNoSWbA642yu",
  "key11": "32cfttJniKoVJzNcjvR3uxV19G1VkWAsd85HhRPdBYS3DJeTAmQqtY4aS9G7mzQ1GnFdYdtUAsfmWTvFeZwMx9cq",
  "key12": "5qqeYjYC8Cqfhk3yUZAs1mwEK9HHmkGmRVxXtJgzX9TRsNoYt9RGpz6A8LTx4Bpm3ZJhYn3K4qRX1NvartnDStNP",
  "key13": "4boCznSx7REQ9h2YqRctCzLosYQNrufraQpNrXhNvPvrYYT2MPR3RSSbNMEASsYvFp59MLPr1sxWBr6W6SGYhix5",
  "key14": "5f9UrMVCp7dRpewfdobgRpMxVPscDu4qUsC4S3K9wNyPm1LGjB2yPnHRG4sdSstdTjSa4CFwx4m4PFfCfvPGseLj",
  "key15": "46FzLzw4WGV9nWZ6ZoPHE7TqiLeZMgp7c2JAcnVbaGgdQuwi9Pv9B8e7DZ4Q4LtvWhWLYAnrwo5JNDh1TWg9ifsW",
  "key16": "4b6hNdb4MF8tdsW1ad3HYcaiJevFBzdtmrBVvxhxiPjL2E7P6b2bzh2friWVjbnCP2p6mJ3S4UjCvJrhVcAJ8xE2",
  "key17": "5zftU1JCYL5Wf1viVsKmhdJYJSET7GiYCSjgdu9JhKC6sKLMsz5dpriesorxRi7VcQ85uSYM4Gt62GLZyg9Jhm9v",
  "key18": "3SfBFotoxtWA19S4q1JSxkmEvSkgLgqHozv5FMRxTcGeoJsHkCd7ny8gKezKFvzgVZVArLFzTXnG61DPp5wBXsXt",
  "key19": "5DZjEssoq3djiWwAucQhGDdteEzeq1uX9jh54BZwRkQTiTGuMdQT3L9CTzSSYKF1gSHmTtvtnSoSFmujK3GzMYXn",
  "key20": "55xCPPGGVANmx3kfWygbYXJW2dygaVyca5wsbv5U3zvBm3RZzSQtmFuDgh9UqBLRLXzuVzzYM7bF1Grdd6dwh9fR",
  "key21": "4eMaXRjvtWESjgHVgjvNSoNfNQmHq2LQr4TmoGN2yqFndajtXuYBBMi8jyLDzQpL81DVdbenyspmLo51rJDVHfqX",
  "key22": "5fZqxxTbXpkwZ43urTGi8c3QMNkEiFXbCtmj75ArpyLG7RHiaPBeoWcPbCry7uxf4RifaNWeiL3uSiBcbQwCmQtu",
  "key23": "314vin9YhGjpetT7cxAamMM2qREriUt9R73b3MUX6998gWD8YU4C4ukKd1t9sfmDThsu9xuq3GueYq6tbCVXRoQC",
  "key24": "4JsMqfyzb99d5Ng94vKLsomMYRNARjwchBKukGjKD4wCvqC9sp9uPqCcu9djwYtcK9JoTiqN3nf1QQB9mDdxT5X1",
  "key25": "4mJspPBSwHGm37TxCoJta6w6uSwJCB8godCWtxQvyfDtF18N24qVuJCSqeAtnGQ5wBjSa75h717GPg9ddspfSqC2",
  "key26": "Ng5dhrn3Qq4nWfdbigd1LFsoefEAikxF1qMbQ7w8LuJjWg8iNHfvNJdtjWPVyvZudtVTMxTVjgWiy1QN3qUkNcE",
  "key27": "4SRrtHBuVPpwHjjCDdox6E6K5o6khbgoQrB7xR9KqM6or2RnmwVFfotmd9ZzkzWtQty2UUzEt4SD2ox5xtyed5rQ",
  "key28": "2GbCv52LwPL8zcUiTawAfHHSq6rAJH9uSzPHesqZBLtxNgEm37jvbdSsGsxuhQMc68e42Sn8R8oeoqA4XmkS5y1U",
  "key29": "4132hAkV3Am2ETdVoJX3TSPdyBRa1HwFLXRsQYQLQaFxm2uYem4sDkKMpH1wmSXC16rESZMF39AEAznYVqgs7zJX",
  "key30": "3ogsYDMwhTzBneVS2icMxppwPC5AT97zJJjtn4NSkKsQZQzfTw3QYFPYSQqFH56U6HV1fq7eTctWG8QPQeb7JdVG",
  "key31": "sbJGHCihsxTFEh9E954KYjJiszmgsCVm2r2FABm1cdHrjaE8cG67fvAhxQWhAZDWUMnakxW5Ktqmpce3ToMCXTo"
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
