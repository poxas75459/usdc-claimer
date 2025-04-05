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
    "inUA3VoCUvu5JzFRDuLdocjAieTMCnpNEWZiocHqZkYXzhUjxJGLxSuZKqDRuEr31DSXGNvCXskfchGSdiHksTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v1nw6h9B6d7tfkxRMNx9Zoa6XddsvTzH1ds7CUymxRjWCGpnKiN4SfQ9fFsWxC5bWabXzPTLQ65nEsssCbQvPoR",
  "key1": "5Z4hUK2asWppNwzZVkKjKNJqeyAXm294WhFRW1xRsjTabtUVZKWPz4HyUPCGLfLypLVdwnxw7Bm1vHpuV4uRCSEb",
  "key2": "41hKcEfdB5ZybwGChs7qXzVRosCj8e6fv3fAAq7AZiNPC8Y8miPuLW1zYz1uAtcy71RdfQ9KhFUQiXmmKRi575K7",
  "key3": "4MJ5vogEHG9m4gJtUMKmuDe3PPXXt7Ws6eE5bo13r6PhpDuCNpEtSAJhayBwuj3mPgVyWVMqSfrQX6bJWKUEVnwH",
  "key4": "3DE7aSYftq1AbRnKrJKdTPuQcQjdZKPwSRnZYA3hoRQLq1Bm538iyPdZYoHozB3LpwEaD8HSAsBgVEyUCDBRx1v",
  "key5": "66SWXWxamr7Ti9VnCaKkU2ZLEeEiRaWp4CacTKqgW8LMHgbUuFyYscygHFqTxy6RjiWoordATi7rrBnWZ6ixbm3S",
  "key6": "wzNpr4hWDUPD4oujwi3TTxyWwtdD5Uzy5nEDYuFoNgMVcgN2Qb42kKxgx1zgJeur9UC4RJYbe5weLqkxYqjqWWr",
  "key7": "2v8KQME2KG3QMqxy1eWLCDmLjY4QGiVkcVpyBs8KYpv4QWbvoJuuBz4GAVfkEda863iAr5fTmMTPr5oxUQXdc7xi",
  "key8": "5p8sYFwp2o3g4EoKL6TJcSdynAuxgEpsnNJKxBncygMVbmrRQiTmDb3F8VggjqdXgbBZLTwebZydD5N9QNjBcBMT",
  "key9": "5DoQ6Edd1uVksxnmLZePGGfJ3ifuQPYoxSzG3EdopysU6jfH8YtUchmVs1hUUPPKcxvBZ2EzXEieEBtHe12Sz7GX",
  "key10": "5HdZEfL8mTvzCphwNsj3wFwWu386mbU76LZar2M5rQkQSc5btV1XUj44ivbWsmCigUnmzPSqyUhyMX4rJX6qkAL9",
  "key11": "5pnHPHxJ6V53sedDn6BWjLGocgJvXLoLcVzWiWPCW7ZALNubjn56CC3chJSCHLiayVt7BcW4YabZuLAqLVSeWPb1",
  "key12": "2FoD6tkYvayNymGoJZiTkctQz1hXti9EDM4VYYAwgPBt9ZHNx1JCnNWGmLzGTaNyDNKmghsAHomZCsHjULbUSMye",
  "key13": "52AueCvZGrE9s8CEFhLcyfFRQhgpMD8Rho252cBiTY6qbSm2CbX554FqzbQd4gTYhEUo7ivKKpfXgCEUdx1VzjsG",
  "key14": "4rpt2Q4dg7beii2YdXNASXTD5Qfuud1ekgr9QrxouZU4gXaSNSU2VLN6y6WfyL5T7vuK3wGgiCb6YR546feTuR3V",
  "key15": "2c5UmHzKc6RUWGaUW7nVnRmUwXQRgUG86RdknFyEgFjdfVUn9ktCBvPoUAxLEESMKFFX5uBysTepMo3LShjLMouU",
  "key16": "45RvMie1rrT37H2GxAcq1oHstACTtEKrdwZHW3sFTH9Ba4YUZ42CRzxC2KFDFLi75U6NUxg5XKuZUbPPdZpz8ChG",
  "key17": "2KnNGAwaqUBMqdVM79C2dZXRtEENHHMxALSGrLUn1ADTYUkfR9pWqSCc1JHFJY4KNJS9aZ9tFNKwX5CcqfgBiMhU",
  "key18": "4sZRLuB9v9CXJUN4SCNapqtTEJ4sLuq1NRxVBPvEZaYhSbQv1PH1cE1C5jStJYVYfmA4dSWspcHTj79LUG66hGdy",
  "key19": "LwqbfvKYEWGZh8q6kB6W4rNo5Zz6shekT9oKvttpPNudwSEY1WPeEcAvF4M6EFfNc24a8aYvW4Lt48BSCMypFXL",
  "key20": "2pZPCSHTgYrXmdoi5ycCHn3L6aPHJ1P7TpSPVqTLpcfbiX2GxWhGyNCwBXr9JBMq4n37vSEppvYj95crfHnmvcQv",
  "key21": "ZEbBZ3sQ3P5R6Q7F1pfDjt4Ha7ZcSxeh8NfMgxNeMH7Pa8MFc21ths7Z7bG54xThPsZbnKLvsEhCEdRAjvascDi",
  "key22": "2sYXr6ufpYpFegTCrbvRo7AueQQhsbJpcQRo2XxeCr6xjPQe3oKfJyjN5Ta3j3DWPHgRBuTHczsLHyKUgSA9xrmC",
  "key23": "4chRqAxBBhKs5u114pN4dfGJz3dw3qK52wupKstkoCoPMEjuPTtZ6D6UnkpnPqdz7w6AbjxjcusVeNUJ98htbMWv",
  "key24": "5JGigpEd2Fc4Zetfqhhn2j8qst3Roz9az4S35jSwNqze78EqvS4oDwpyLPRhMB33LAWakVwXH7XcoHpgADHdni21",
  "key25": "5hsMqrQhwfxDfvNGe9JDFptUZKTimkGkvBWGJXd1gf1Fk5CBXfNBtR21r9oqAwtE5DDdkFLGshc2EPJKonomgQiL",
  "key26": "2MWN6x23syrAHY3A1W65YUydFj54LQFm41Q1cVjRA8xNBZbhmNag3Tz3vaLmDDKTxV1czKgqSx8p1u5uLPPd6Yyz",
  "key27": "3TbSQWTXVNKnz6ezXz31BhwndGhqkLJ7DvJM3vbVqfE81Cd2sTkFpnSdd9Y7MMFWzz2ys7gc7hJqJDwNtavLo4dA",
  "key28": "6aB9QwuovVUnVP6SsUCgBwKhfURu1oDw5BkLkkmfb15aNEpwk5Ee71jQw48kB1z4SRaN3Ks9Z4PHr3KpxwWYgdM",
  "key29": "3hk1pRpwtSrgSKdFjAb6ftU7xiNJ3BPdwrUfcE4TozmyQZHop6JwvVMVvetKhDSN42UT1snKMSpnSAj2R2NZSJ9K",
  "key30": "1H1jeYP7g4Uj2ap8fbBgyKE4sCjJV9oGJStdqBFk3W4fTes9FETNicmMom1arTErnZosBvPnSrFSxRPVPub1R4m",
  "key31": "2jEFYWJoHPdyoVkgZ4RWog41HdbfQeZD9UwBUkeGq4CiczRJMD8cqyTadNdqXBgwnwL3UUyexbQdWiiYozzmRAE8",
  "key32": "3zWTTpvMKCsZSfNSXo7PtBX6H5XKrQ2MULKBDZsbvmTveV2fdBJkZfRxF4aXeSdFVJFcgUJ5fHmWPUTs85dBZ4qr",
  "key33": "26JsVp3KZdZRPvt4ncveppfHp9uGiZ1J3chobghiyVr2iDyWxDosNbRmjDhE536FnhnEGxQraeCYxsWEVkEwMrEt",
  "key34": "2i6sTiJaFQhxM5LmiQYB7EtpubrQXecfUHiWVEopDmTx2rTEeauWoUiawKhhBNZS5z1WG8csoMtiBLqE2VqmExcP",
  "key35": "3SaVyFiZutSBTQNn6PbhYPiLZ4SYt1YU8jZ2DeD6pX95bHpaDk4g4yWmSQFr7uGt9KRxE7XqzZcZL5ztQ21d56Au"
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
