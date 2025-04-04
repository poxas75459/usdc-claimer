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
    "3cMVwLMZRmDcjEY1osh8Bt3VdbVZA1iBkrAz3W5W3JARqMixf6YPSwkAZPK9QfUPPWTdN4Wci75tobTRWuAcao58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jd9MwZUunziEukVPPSYrLiLAwydYCVKTv1wBULxeWehFkoFURoJvUNxRc8QBihkF97x2MHjQgbWq1mrvWsgimPk",
  "key1": "67UvsdYV5VFZTU4f836r6ALiGG3QcmPc8M3YHkGMZJX92hbtoTag3MG5FiqRhPCUZhsu6yoMV2VdPBeNWqvRyGkW",
  "key2": "4q4qjFNtbteLGwq2A9vHCvxgxm8McdxAUEwU33xg6FHYkN6XvpcJsbBbsfqzXCqAxD63n4aj2uK9FsmnJs3uoetm",
  "key3": "kVWGQYhAXNbQfZ11tLPjrdeW84rWJGqKnr4w4DPpSPybaYh5Zg4zANLtheRHcTfVNTG3wF4qJDYjYdnX6NYeRXR",
  "key4": "5cKYbdhUCVXxfcyBvv4rBwtcNDzB6X9ekWfpCNhCpwC7gsXSrg4xG6J42srPwyzv882cugukMdYrScWTKmg3voVq",
  "key5": "31hjS4ntDVAHEQ5P92UckfvQZsR8qBQjsW7SN2DbSM4ExgQCjf6xv1MYbzfYeKsxYdQHrfcrQXE631SjZEwL9ZGr",
  "key6": "3JMBx18PUezXJ1JLmCjSwsTHRieTNiAfvFvJW58ZJfYPidTgSYTt5BJjsB1arwWDcgGPBU4SHtqV6gqECdFnuCWQ",
  "key7": "5TfeCE54waLRA1MKo8qSV9VQoh5j9dt6mPRnEFz536mqmFPeb7QREW8VkFJdMXGcxjhSEYeQtshxUSJAdEAAKXJC",
  "key8": "62KYsFZWRFrC37693gwk3oxPk15ShqaEgbsBzUcX7TLdUcKuhE42qtC4tpoF69JpgFX1xmGtXWg19vMPfenS7qcy",
  "key9": "5phvdmMkmWtK4TFxhz48dK5UfYUgUTe2T8rArnNxweyCPwFQfwfk5TiyG34dmtn4Gq5oSDnvG461J3FLvF7AMdjd",
  "key10": "4nChMVboyhXTyyb8eyPr7Lk6kceRWjLyQhQL5esQC32VeTk9jraWqRuWZijX5yQ3FPVSWm33UxjDodXYX6NwEXza",
  "key11": "4dBuB3dKAFJTD6uSin3K1MN63o5t1SwzS5muidoocyWd4h6FwW98HqrUHJMkH1Z2RYJot7AocCxExiSiMZD8CXzv",
  "key12": "VjhEuzf6HQFL7FmZS9k7jCGD3xWeAduotJF5qcfdiw8zBHC3M9iUm1gECUtk6LMMGV5i4P5tAcUuM3a2ZC9HK8h",
  "key13": "TL7JtC8JYoajdjCnx1oQAEqSHfQCuY7i99XwgYWuNLdUpFvkgte8NxxpNy5bKa27gAJSw1uL6hSUHQGhyKXmYQB",
  "key14": "3MJgDv1ZvqCa7LYPqCLWUeSSpfDjDhH2duYSqb74p5MMWjYVuAuVjVEwGQWYjfuUbcPETMHbxkypP12RRBQUz4X6",
  "key15": "2CkRndqRh9zqTYLY9gxprc5iNYYhzCmBUCboA4MbkHWBpV4wobmXndvU7MatEWoxZhdHsCFANGZF6SGxYRHzWPri",
  "key16": "2H5YGrnYAYeyNmjEKfhnvPq1LApUu9kF6Fakps923rc1bWb2XPg34BxfpLJVdDmXsfLWQWZDCdXUR1ff3mv6KSsR",
  "key17": "5MS4RgkefML3rBmPaz9xXhXTABDe4MmhxfPXJ58BogpLdzruZq86kWCHFJYGRARk6r6HofA3emZYBmpFBMMuPMry",
  "key18": "2Vvzn3Bd4BodkXV3LPjFA8uTqyT3tDRgx9rnEwZQSh4aYHfHiDHSwGNXYGwXVCBpn2hxfx5985VwEiypJBHXbkJi",
  "key19": "4TkmXpHYrL2c1CFQn6BryNDLQbm5yWbg8qMyTa22TxG1SyCW3JLM4WZwmqeSbnfxFxp8K4hFkmKxomBZ4ATXvreJ",
  "key20": "5maZaGpLiZmJZBpKDTdwrQaFutfAwEF8mHqhdqdsixXNeFouFm9UXyod7QCbWQs1Tan1oZr6Dg2nWmDwyYu3BwMC",
  "key21": "3GSLMXeDdTAX5r3biJ4yG1qrvssN97e898JfAikr6mU3SKcmLniZ4g9xJaYs2fFz3E7vwSptj7NeD9Acb899Z1Za",
  "key22": "2rtc6fetokvT12NCrCrL86oMtcxAG2WHy7wyWBwd7LMvqWw7ti7yHcXSaRD452cBqymPjJZuvBC8hYzNPV1fqR4P",
  "key23": "3xerBfTJjo8Keoioog4wgg8aMDGZCKZaANrfDAyD2G6sAskkDshaMYhUNEMVjx6B435WM6AM5z5xSaBSqRerGA5R",
  "key24": "k5SAnWyKrAhp635nJzz85EceZb2nj4HVQnU9nKRYJvEYyVjVJL7JPpgR1n6DpxB79cCts1amFB3GF8Mr4JPwjqc",
  "key25": "4LWcQBsvNTK3WREo1G6hf9FioFCYKyRpk2Fd54XRvBPw7xxefQfCczWEVtNrwdLRuGi3FvXuvaTRJpKxdXE5CXfk",
  "key26": "4DkHtFLxGJXgtynKpVxFPEWiyPufThzb5KmLybbRbsAbN8DEeyqgmseLsLvzKMBBja5ydxDCi8M1xPdyHTYRu8jv",
  "key27": "4zKUVcPsnKupTsikNddZj1PQq3ggmEuuBt2n352vW1LcTuf6icBwYci31gSLt5HqVZX52LPuY1gXL2vkAYrZthr2",
  "key28": "5Jw3Qqgd6dwz5xRuEMorJSs9Sinmv2hZQNbvxarYJwEUH3RzY7NzxF7aSnazHaVyoUkJ7QyxMEEhs5SNy241uC39",
  "key29": "31sWL3jV9JJzP6BNFNWymRn2Ph5AVzyskrHKhAiyLDD5vmtvjBscUUJLxhA8HcaGcvLbjXJSPRJzXnewoDRr9UfL",
  "key30": "3fCYwACK9E2b6o2eTRknrcF4HKs38H3aTd8yQcvUVSppRXETfV3g5rkTDavh8MbU8WZQFkheKde2HeCL51ud5Jkm",
  "key31": "FPbCeaFZoJXHBGdJ2PUJ8TSMtzUPXKCegKdXLXSak3iAhcpGxsNZq9NxDW7p3B3pWLPFjXpJZTF3fNMPMsTTYts",
  "key32": "41XT5y2e6UGSNVmz7JW18kJzru9ognozqH87dphzrwtnSeNWGfoDQWU9L2aZxGr9BFQCEv4NXVcvuoSpaHityEdJ"
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
