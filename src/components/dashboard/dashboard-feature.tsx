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
    "2bqMnRZ2WPDtRRQVTZDrrxGzQfDUJhiZ6d9UMfwZEmuFE1UrwzZUbN227iwwnpQobkBDhK3rFJ1QCyvyM4315d7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vCYe5tweUJawwC7EwM8SucDqFxUFLNs8mkZtURmZtTVPKXEFkx6RoKxuoGXqgUAgaTiRfgkSTfDSzYPQtdDxL2b",
  "key1": "4HcR1N8wivowms2AKmxGGV3q7gvvuixS5TUFR6eRHSCj2uVu9MCQ6TeWetrWYPAjoSLrcJek28R5KHR4d2i2huP2",
  "key2": "31XiuzsAQLzVaawq2ue8YcsgEc5GDk2hBCZT66TyGCTNBmdDX8LBiRfjXC8cd1DpdeXMwjp9yAsyseXYzncUmrb",
  "key3": "2vecBRpd958HdRWtCSqgxjPG2hqLNFzAZjTfLayxywMVdKc3nM93VrzQnhVbzmrvXtpYqpX7fA2qD6skwVVhpNLQ",
  "key4": "4raATR4Es3Hx6BbhEnb7DNaF5dLAfPzuHUt83NaDfjduXDxNqXqJ9UTQyudq5GeHquU6g94xEz5LrEn5a12QJQ1h",
  "key5": "5MpfAwVTULPf1khdDWEpyA4iPYwQ62Uq6Xr4NqLbfSyduU1cH3SbDwHsiSsvdCy9dRzVejgq6S4tuMeXsvJDPs3a",
  "key6": "3xCS1wCUnZS9tLVHwBN79TUJaUFVBDtHYJVqN5duKkcEoj9KWbx3pomB8vkaLcpjH8LerSxESNKPQ2e8pNMUQQgd",
  "key7": "88hvqFyhGpXWti8GVu93XkqBAp6yEuf4hvW3b4hsFiYCQa71Gkab3J2F5Mm1bQXhCRRTGvyCMNKU5FSpBhsYtcx",
  "key8": "2gRfV1aHiAkv7oU7AJeoSrXa3RnaoAciubsapoxnzb3a96b3bJSCvki1EYA5HxEjazMZ4JZK5FsmTXW6DeoNRaRB",
  "key9": "3AxnJktdWM87gayfTSZ4qCJs4XsFwsHsBdhu6CsRC96znZYKZTTzxLtiD7GA7DYsvzekfdH2pH75xSrtAp3vbc1t",
  "key10": "4kjPmEPqpt3tP1N4F97pfSNqnS3e1iDFMJ1CVPoDiNVLvLDNyCFcjokGLbYNEpcRcCXtWUNnV9JuNbD5T4hMH1Ad",
  "key11": "5iL7DEqD7WJgCTRsu5xbbGmvPhaG7bskL1AnnNrSfY3kqX7og2e229ZMtXzLcMWcqWwbmPAJBCSfi5Vwc7y3yzDD",
  "key12": "hq22cKPVHhPfMTPBzNJbyhekFP9EurRr8bsveQrcy5BtmpTX48pS2MCXRWwnUXPJA6ocE2n9sa6KToW3ApQCTKH",
  "key13": "2UggFEheXSeJkDhnoVbyW8NM8x48P7hXAnaHMKiXuTbGBBsoyG2Wxy52Ef368iG9HWsmwSy5htEroqGuQMjmV12q",
  "key14": "54wSW5GobkDeSavPAG1jgDzCjdgxT2VdgwPWenjj5131YrcEmZNiW8SjnVsmDT318F1fKYCFQMLfBiFayTkCK94k",
  "key15": "26W8SgboocuaMpfUvG9GcSSsScZbZto4REVkBPbzpe6NTUCVkVZkpeNAm2vEz1jcEoMB1sZcxvY5pwtkndNBJmmE",
  "key16": "2ErymH7JfVa6afNHPT95dMrgYapFCqNcMX19AcBVJc9gaBPx45hgzf1SQcvHcAZMaGzmZAzYNj2WkA8xxKa6CoTe",
  "key17": "63mBm4gMG7vKDwyqTDCMQsShbvrEezKtjPndi9YCW3yg89rTM2A1bpFC4NkWMh1WaAK78ds7yECamnW56N5Vrobs",
  "key18": "4vVUWUng2tqz8DqFEpHvJgLYJRQTeRbUF9ui1d6X459AoAMDAWV5xQfEcnUqrow7MF7dQyQoBiBQcDaGFGBXxjU2",
  "key19": "2G4vkgJKqG46LsKt9vzEcqHBLaC8b6GaVeMfcyLYmMQQmkTfWS6tguu8ZzKb791CydvjaSyzeAnfjRrpE2HcQq4J",
  "key20": "Wk9RuGuwdP65uABM9kbT4nsHamTA99H1XdtahGzJxf3cf1PFLyP7wgyZw5AgtDs2urVi1YXTfGZGk7vZ8t2bhbT",
  "key21": "3XoeMNvNz7oTcrZVhWLdmcEWrdXjQpH8Zb7gyRiP92qHw2GPBaPJe99aD8MT5ekCYyH8q4DTKrAhUdqRkvBn6UqU",
  "key22": "3F69jhnjzU3jBWc1ud5raqsaULXK8yskwqs4jUFywHrHjaah69zHAmUBZpbbcgzsvynqdsatLJTFyTtRM8pruM8V",
  "key23": "64gea25bfBdvHKYxxHUbF8S1XP83Pq511CsBTjfbAzoJbp2irNez7FAJrwVmruffHbed5R1upy8x7oWNxTk1Xud8",
  "key24": "2872Wk9PaPNdzTGVV4psGZfp9p7uPNHaBBYThLAeidpvYt9QjACqp9BC4J4SW6rMPKhXBYqfMFveUjuM7XoM9BPH",
  "key25": "2ffCrTfEScKkDhQ1f93Q6R2aMdTNNrBSCf4Uy92twguszYsRMhJB8ahVjcicyxeuDrfhr3vuWy9nLp7j8aKAvLSX",
  "key26": "48pz9r3XvsobvZ3qP8tpHyiDJdU5PnjvjTJwV2JCgDkQYEbFm7XVxVTQqzYnYuhvsFXkLBM2xkGJ2oSuJ25AJjD6",
  "key27": "46tey2yYXgtwwFL98Yi4phi2uJDdck6X9duw2Q32iUGHmxRHqwJbjFxw1hhWSa2syzT5DrYH2sh1kAxvPPnx95a3",
  "key28": "5n5JNayz6qXaukifUgTUBDtAmn9FoiHBZPFuiawNEmJvCnvdJjmQ9HM4PmcNTJH1aKvUanAVc2ExA6vtbBU6RV9D",
  "key29": "2BBxfMYY1NAXrkcq4urMgTnpu7XDo7b9GJ6UiVugUotJjNJvc5xZ2Vi1xqj4uBZT6TBVi4D3LiTerR8qHJb9wnFy",
  "key30": "4FhbRPgSZyqvWvkaUbR71JPwEJDFJbyLxR4Bx23d1aV2D7sdbnW2VDdHUu6xaEnfgrGtWeLL8nkHJKZpCRZcWgKQ",
  "key31": "48mL5vojTVQrW9fNjWSnhaFopux6k4UtSBqN5XpryU5WKGZs41345jHAEdW46TBEqQ7z5di8cNSzsfMdVc2YeVo9",
  "key32": "2Spi3CMrQcAsxJ2jocs7Y3EoLiXj42QvsSs4ipY22exSRNxuhU5eKTD18VsV65ioVbdyAsspczguzp6pw6NhAggZ",
  "key33": "4tmuaiYRa6FQhgk1jvBwwzBSUqFw3qvN1Cefoe2XxvHLv51giT8yc6ziqQwvhEWGQsv1evcXVp8RbNnmVU7AUJbd",
  "key34": "3y9E3P3GPFkYfumxuNCUe33NjUmT85MayxYA1NX5yPLte8Xf4Jo28roNWGgK4jep3rwdH9VW75mHJwYXXPBeQEop"
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
