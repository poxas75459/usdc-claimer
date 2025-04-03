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
    "5h7bRUCFamErjwikh4FLfykqdVJ7Gq2o19HhRpgpaKqLqdkPrdvXxttqBXi4ptSmH1fExiGrGSBDBWWCbAXGmJtR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QRdc6KBr5GJuuaGr8WG93bfDevaGLVPoGjmnQTT9tcb3RhHspcuNndMQVShc6C49W1RMsewE9An65tcziLZdefM",
  "key1": "4dYFN9VcsBkqBhgaEv2MR7h8gPPyQy8jv5BWqvSRZQ47b8DoWpPDcchGXbwRFfgs1Uhr3NAzMb7wTLb5kPjjCEsY",
  "key2": "xJHqPuW2JZhHzpLus5LbXcWTJrt8T9udvsZ8zQr1RXC14JvtV2coSfL87XQWrSema7w3ZGVmYfNt25YSs3E3PQ8",
  "key3": "5o4SfFoYmvfpHpASn6gZCjjofb12vXtj5UPqEqy1afcZTRgycGSXbsCWT2SJGgKYToje6esFqA7uu46TnWCyyvpo",
  "key4": "2uoEEvmL3T4QRxqgwYcUpFPTE9cniPffZz99HbsYhWNuEcKCA9xshFpjz4A27z4C1HQTtSFwSa2E76NBaUtRd1o6",
  "key5": "9zQ93ee6u2Ao6RHRe26ujCtvPHt5H42669zScdvawdevqJhpCP3uiZFYeBKXpvMyTyYmVeWSwjJxU8AVYpuFLCX",
  "key6": "3n6Vqx6mybh7En9RFdaQn2yoapNNCQcDppXaCmBXsqGsZjgwWTnaL25jYvDxnk3pFSvzKRDPwEmFcakJoxNicFvk",
  "key7": "5AkyZVKYxc35e7343M4WQAMSEUMxBQrnE6L14YxQU1FUNzRfW8tGRHKMYVovJ6RQMmtxzjv9wQn9mJV1Kh48B61j",
  "key8": "2LbXJg63aam9WL6GoMUvb3bNDscAum9x5Z8wr1Nnjo4aMeiCWNdurZHurnsjEx6XDw7Si7B243i8xtg3TjzAztG",
  "key9": "24NKGe5oGJ382C1ZuLfShCCXdoPBvwkYR7Np2HkUCenYDRw9oQANcAqrmMQdit3cxgurZaGrtP3eZFJPa7A93PDA",
  "key10": "3tBPYungd2ZphpQPfcAFLnbjpfzTSysSCCCJgmjbASnMfJ96gU1d8C5b4uZR9snhQiE915NvcPEMeR7aGAp14k1W",
  "key11": "5rXnbV3exHiKrnBSwouJMUcQciXimRTAjJHs3jvBK5rQPkFxicZqb3q9Ym24hXnmLRmG3HeHuhGibxa1ZFi8E6oN",
  "key12": "2gjHgn2kzHNVy1mu7P52MoGgWdSwJ6xTvgQqf2C8XDDcmWnvDVkBMS6ZMuY332nB4RRfDgSjZHezjjiUweF3WnQW",
  "key13": "31ys33g2vuTyYeRn8pgCs2G7gRju8VudLwtQDypQUctpgw2HKfHe2N8n9djzofMoYxsjG9SzkBMWMvyXqaykkqKh",
  "key14": "3mNvuMaNm1hwwbFXvGe4zkYgihHeBrPY3YfWDMfkNxPLAWD61Q4C4Xop4YEm9NmeBbGxP7z2DrUEf35vQUoEvVGY",
  "key15": "4b1k1NsEZiGfQX5uCjQjVyrYp7MoJ3wCt9obUWo87aZNWEtTa73WTjATrQvYZgGhNehzpT3MALJVsvUBDWtY9Sfw",
  "key16": "5mSEbfrcssF2tqWKMu1xzGNz8EqGcKccAAc3aTs2TEUnvQdAWRmV6kJdQYkXW662DGJskxic9ntFXJDyY9a6SZUg",
  "key17": "3rL8YoC4kQnRfqbFK6B6DE9zaD2KDPmpDGZXHYZHxC9dDKA2FYNnexkryu1p4rkk7EdEkNEARZndgFvSL6Dfuy9p",
  "key18": "39d6dxUThU6eRfz5yhK69xfp7VhkZoKBTdxeP2CWAtkGLNSBsQJ1m2k2tLPtygsMbhN4jJp5uCYqB7vxuyxNH48a",
  "key19": "4ABXKc7nREbGt5t4q9Mt1HeqKGjYJ52nVBupLqc4FCao8CRcVuiJ9gDsCgwEcLhsJGwX65rFswhme5fq53QcA9q2",
  "key20": "5cPd8dwSXPJzufomVpvQoEH437wRfMUgCQQRpmdiGNz9yLU9eDZUzQBNRZRmtfdzbNkaGmM4EirDZAheWfWMJiuv",
  "key21": "665hMHLZE7APa7p4qDbnZJV9UAa24A4h7qwm9QTF8a2FFjVQGucqcb613HokPVSGEkRMDQePDvm6kaXBSUWQbdnp",
  "key22": "4JeK6QoYmQktEEskBi3iVDJJPdSjwPRWXaUJERLC5jqaHeGBqnNPfQuxE5XByXJNhNejP2WWcY8urx5nFnKBRsZu",
  "key23": "2TDfou3TPivhYX88zqnbcbRcrFWPdU7gkm7oC4cUTvKoUH2kHERzsB59B9LcWBEyXhrqqzNsTkVgA6XX9HtPLrQn",
  "key24": "5hJqzShYCjyb61KiCPdfvHv977cqeBx2ioABEDphNez2sCRLpRSSthXzk5gtHCNoWQjpSAbt3SiJdRRKDURWXKEu",
  "key25": "6wtr1uAAwYfxrKeBvZzFtpby1NjcTb9mbpkZDf8mo42cGjw3bB3KdCcSyDbETuXdJMgVFhwbcES6ccrf4RZy1WR",
  "key26": "5PdQjHeADeH1S74HScma5WbJDiivKm8PbMTNVYRgz2YrMhLPzg8gZcC3F4TT2gUQS2nuZitPQWsCZRVHWSAL22ni",
  "key27": "285WasJvDBiFWo6aYX9qn5FnShdH4FuQ5XxhdLubajMpsPrJdrb5uqCcMXcyvmRzpLG4UVoNHpiALyobqJFKWL6i",
  "key28": "2vdjGkNwuwnvUvjANLAWJZzbS4RxeufTyGkaSAiKD275FJ2HroMgFjNxqhxtUDpmM3YpYV6NfPBnogxiVTa3QhSf",
  "key29": "3Beb6tUi47bJ8PyiFB5sCqUtWPG7YFJvChoyMfPYi38DgHcz3pgVwMfKqo6wZCdjfYrvFBaNs45VpAHx6Ya8cmVb",
  "key30": "f8JzothwvXJR45ZWwPGYDhznD8ikNcf9SkQ8Kp13cxh89r3efjxFVzT8z3c6KuauU5mVGPPzaDC7RWSCzNaFvA7",
  "key31": "5Fz3s3CPRKzpHEFHQ9ZTw3fLjS9qKxKZYKa27yLXV4dBthTg9h7kCWCQ86MWGWy2EnLSqNtxngAKTZVciqjoPyuX",
  "key32": "2RvvRKcWstiUirkU8KNvp4nbpJ4kje1GS7oTG9vV1vBHxUe5Ai2UPf8ffzinERvWFHNVTaTBdTdSHus1QeKj8AB2",
  "key33": "vHDa3cdTn31wkMFHRcNGrwEAsn2TPTL29bYBk7BVFRak9cU5s63RFKr2FCS5dhyfZEPSqcyTNWCBRmHjLC8B87o",
  "key34": "4yddB21gi4ezKm4vwDEshfqPDYjXatfwz4fdZerK2UH25k6JQNb6scjGWBDApj5w53u6CaKpGjD8Zz88aHfLCYCq",
  "key35": "Z9YcMNLGStCHujA1TcsgDGKHGKKMYcH3wJjiUtAiFyDw2gDSfdXi7eWuHK2Ue9RV9a4ATKUQ4zgBj7RW4iWAxnj",
  "key36": "44TGDDkSkWCFXbqguUxneY117qo8z44PQxJPbe37x2RHLgunWGRh7vvNNYx3snAky7toxEqTDGZx113KW5PCkYRn",
  "key37": "2auroRYYGEWSSk9Eiezf4iATT9tMEqrdvJ78GnyUq3uAMcjh2X59CJtFty4FSY7c4sMp3qEbDMcpRvSw5KyRbuju",
  "key38": "2Bqa4oyFtRpuEUm4KcYuounb5bhjnm2GcBCFYkPJPwpGdMb1e71mJT62Y5riaxsKYfCri497gqx26zZiLv1dz3EL",
  "key39": "33EcjGytgrb9XZWgzFy6df9noMiMULNZWCrVWB4nKh8uawiUNDdjUtCjpZKDsEb7ThvRJVGxCt5JsYjXYbt6akf8",
  "key40": "3juvhvCxFfmqaE6o9uKZFpZBzd9KN4k1uNx9TtnBCwpLECUhDL5iaxHKx9qnShC9jP82mWK5nZvpj7KmZrL3Da1L",
  "key41": "5sHGxyuTJEYPeWhuUyJdaXS8QLLwZr7NXaE2gg2JFCF9MRWTftXJPaQRPAUKWPjoRghafvHSFBDpoMpPi7DjoivS",
  "key42": "2tk5g9h1dB14QxPK5mBXgT4z58GfLc4VSyZRe1g3WEMdAaUksvVbUccBEMvPiNiFwrM4cMP1FP9saAxqVPSFY3Ao",
  "key43": "2PMBhCeS9FgJDusFafFLKxbQoyQ6dZvoMFfPu3CKhxTP6tNaeozv9X7c9LBga31cu7vj39rGURYjEYixpysNY6Zm"
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
