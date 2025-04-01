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
    "3PtNvqZE5QoPACHturGKnL1bZzN3T8AksKc1QgFCZPk6rhcPthJrnmMUPLhkcR4szEJiSJmXkLnZUBgBQF4xu3hL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GEdVTYgemFhFRojopU2DVWVJc9zxPzevJaWPcxEjYAoz2WEz1CaHDyEyN1hAiiMGvGoxeCyu8XH5v4tYK358m6a",
  "key1": "51EXsnJBVy6ZvqDpMcJJGuvaRWsv4vjeo3dbUPwUTM7JHVXy2THB1Ko2LHYSTofzX5iezchwXn6Ad137i649dRfx",
  "key2": "5pFPXNB9TrbEqSm4SiUnpfg5owDPsmXfs6PMP8NCQ5j6kt9x2ArCL5yuJQtMbtW8C3EzkPoywj7G2jCpNR6N9EBM",
  "key3": "2oraA8pk6wWMvefXLzq3h6rbbDTTfM8d1Jm4WKcV9nAGAR7VgsF3P25b6Fnx5v75kD2MW6GiP3cHZa4Lx1MHCAF8",
  "key4": "3DqysvpwVg8XSxp5ssWGfg3FDqf6iFM4mfXhekoaDo5dsvc9Ws2qMZBrzvc7ZHvhShkCXihMjoPkuT2ZeMKzUWFT",
  "key5": "4Yq54Nod3hBeP52ABEsY4ytKqEfRQd4qcouyJ854shspSVW5RaoiCDvQfgHSN6gTFDZJkRuTQSYrCpCnuUHBdTrU",
  "key6": "2YUg11JVewEyNtf4SD3g1emxQsFy4AaUQWukcUsYyptHfjhfpUs51iA1QESF1Ny6KnWfBGTJDKvcBYAakstrpism",
  "key7": "2neDt8Fd8DFzAtpuf57pw5SmbSV1RhBtH8jZQquxbZYdGvsQR8NMCEkE12QawdHvke89R4xHXsbjW7ipxvjiaNpq",
  "key8": "5EgeFNR3yWUspdAHx5kgBuF2JBWyMnQXjAuvjj2Dnk8A1BGKS1U4rBWyBWxdrXLfrybL6BhAPrBVSwNBeSN8MnZT",
  "key9": "aM7m5t2fBDrF1hin7Xw7VNUyNhMoq91Ny5ML2kiYPU78hXyQ3wMQV2LacTNf5CS3ZgU1cbs4vvJHjod5SRjYTtr",
  "key10": "3VnrXnHtH1L4ofgCxFzwcAYfcjRx3fYSyBUfccStdQKLkNYhR2kRKheUNSH4xj5uaadjs1m6uCVeRXxWF6SE79im",
  "key11": "2qWMkzSEPxJvvwsvkDz8sRFrdeSpPt5XWS9Qex49Vi4sbdoMQqTHmjtyR1focQPtMzea3RCXFTeE29VogtZs4EZy",
  "key12": "2syBQtqvFC8vujcL4Sg3DTsHne3rFKct5JWcMfgGMtuLSnAWQtcmuuNJuME5rAG9uEHdUQXvAFXBvquxMh8zG7xE",
  "key13": "53x9CWA9jRSysdjfAxXopTKNh1p6WJKAisLbY4wyD2WpRcvP9QvGLy5nCEKGCvpRZDvb17Kg4UgnigXoJ5tdKKyc",
  "key14": "4UkGAdUDkUYnYexzUbxAwByDzgYGDaNS6UkCRhfUYUXoXYDi7PDgek8JMRdMkcKatcn5ByoLb7tebWHhgS4ApTqY",
  "key15": "2KkN6xXrGhu7fgL7bSB1c1T1niQxAxhDPFkZcx4DNYjUnT16hLnNVNfsTuRpHNX2nPQbmoUEgJeSyV1LMTuQENsD",
  "key16": "51FeaUxSw1VWhGNpHv613vhSrQBeEXUY4GQjEtFffMmwJq4vf7NgrvMuEraSQ4EeSVPdJtLsYRRR5Z6UYrYcbYcL",
  "key17": "wMhGFvTrXBdzsDySA8FDu8T5DfpVrfBjXKEP66PrSP6dkdNw481poekELv56N3z94qnhi1YhXjr9U1TetWXDQHP",
  "key18": "KKCpi7gig9Eam9g2nMGTdS3ZaoqT73kAEdXSPTLdcJitUoL2tiULveSFSDzYLe4bY9SQhEQqQAHrgZLw9xcBxKC",
  "key19": "2msYAYEr1gafkoWW1xZsLbSJ2BiU54rUDHG74Daig7s5X1Xu6pE6PfdmDm7mC7UQ184U8kRtcunMMBwTw2LyGi2M",
  "key20": "3z9CjZaLMRzsfhfezBtS6324yRkEouu67D8JVtFespgqsUZ8Tk8DLvmVDjZzF2yiFDDiQkVvpF442BdpzT27bcNn",
  "key21": "5vyNekHoAHCoorLV44uHuRxhPQBtrwyXwft349QuyA95hdLUy1V1tfqfjWLMbPWY6NH5rz5YPTLaTKnJccdqRan7",
  "key22": "uTC4EKxgWiKJWecLo5fn4vSYA4ntv73wzuWomqjMSwyfZyPBocqVmff4br7n98PWxMiDWtoeZHzAUPNqtZEy1B8",
  "key23": "2H2DB6k5WkzZXqkgy2vwzjokah8Eo5TiCGzZJyuztbQsf4sgFkb2tphKeaAoTyoiWCXevdrzaZubb9fRWvA5VANh",
  "key24": "3MVi83DgSZEqW4hoK36yBzLaiYsjqGX9hbte5RnCAXASLRonag8DXMTn4v9E9BxquUd4JSBhvoERF73RvCg1T1Xq",
  "key25": "3VnmuNyFv5avga5cPuT33ZMigoPCzcKKt6xeW2eifqkkhxUNdWeaCPzANsS2vqDWozBMQuLfyAStxr1wRsf4ffKa",
  "key26": "5PYDaRXQBgTJ3AJokmaWnxUby5ysT4RAa4X6yzL4atgeXiKArxmJPYeFG8cHJC1kqu7CKWstNoaz5xoKRmZ4Thvd",
  "key27": "5hiGEmsLVvTcw9cdyBJwoKT8ZbZGGFX5WwnVC5Y9wwtj1hZm5wxi12oqm8vVbKNe1ytcrsavvbXrTm2Er9ARGzuk",
  "key28": "qPNBUiyEKX9aLG4BDn2XyHKVfkrm2r48grcyjFwqm3BGyetGqFQfdksZev3Skbm7rwgT4krt9jU4vqTEUCKMYRP",
  "key29": "5KqMq522U3s5rfcBQ1dVvWUXL846DYj9d33RPJiJV9GP58WMRrgaAFSMgTBCjU1R9odNdnzygkiKVeozza3LV34B",
  "key30": "5AjHkFvqrFptTmZ2QssgR5AAm3jDRQXEWNbgyZi3dB721WPXGiERnRbMWzru4S3GLdxqfkEm1v8JZEWNkNmJNqJG",
  "key31": "3aUfU26Cdga1z2YJ6WGHWMAWxtqwosjdduNDTkmrePQHv7zTqqXVGUL5hDpWM9vDPg9vUNZwgegeCGFsNcRzuV2M",
  "key32": "4vLRgub7uFPrtJXxBXo1B555fw6bSBfKLyDHnRb1QQRpi99DNDySVNmkjCogE9odQF8Jt2Rq4doEtVx4sdD1YUdF",
  "key33": "5tcekZKgMH4KpBJFywMB7pkWfinzipsmxcgVatQzMfjHdKN9xpjq8F1eAWVjfj38FjFa51NGfBnoSW41zfh5w8EZ",
  "key34": "5mjhxjfSvu6rgyhcb4wK7wF29AGwsVoLz7RLYXzUKGcqUi63Fu7Mgyk4v2iYZhNUoeY2exBtotEmrhfr4iYohQGd",
  "key35": "3hzpd8q7prXkFRSnsAsZe5KnctCGRf4GmBNCDMhDRRMvWYutAzuEr7gw1qyyLCk7TZNGhe98VrMmSGZu6d9kFAAp",
  "key36": "Q2SZnqaT2uvTCGUS7sn16PJwrE2qicAYaVNc1R39aGWpd4mZUK88L1FP34KbHbYjSpEBBCx3dMHQSMEfTi4z495"
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
