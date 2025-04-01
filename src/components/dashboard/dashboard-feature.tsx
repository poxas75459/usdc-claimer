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
    "y1KdczQvz8mqzK6iyb6Mc7TGcYHC7wu7nJ641zFBkCLxKK3rkw4TMjNwEu3EyoX8NjanSZf6g2wqgoKwiEV6DH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qfk4hnsLvKbT8Z925jPnsHrH84LzkHtKuLRAuLt1b6LLqVhweNSHuT7zkX5WSng3yauHQ8sjWuRC59mpYStbxfp",
  "key1": "2y8bLTW1CZfRJSeCjTKqZ5Q8LYmuQRrGjvvR8kMJrwpEx77KDhWrQkxpM9xa6rUBdu3nWdCyNR5gyBJ3SyuEjqw8",
  "key2": "5Vctep3ttcyKHGBEUf1kTmEt6vVaynZWDKaktvJ2oWBJJcXxbzG5jJ3Gp3dTmJwbWH3PxQMT4GTtwj79cMuizpTw",
  "key3": "2GSiWEinjMC6wnDfGspXGxAxVhDBiQUuE1vvZ9bvvaYz6MGy6iKipFa31FWZgnoD63kvq3zL2gvwa4vqMuUEKcxi",
  "key4": "5Z2qD94HkyKv7CwNmYEBGJhNSChS4P1UxJjMnc1Bw8DPKamfjK8rcfdigvDXqZCMRoz5k697RLZvchbiNRuDzwPa",
  "key5": "8F8XY5GPMhTY6prTpeemGk5zpBbfQU7xzRMFP4ZHuQskrzy83PRKWKJvTyb8QTt2kTxiSnqoRHC7MSzCw6aeJRd",
  "key6": "2v6dmEtGj5gDy3NyUM46kCbnifoAUSZmzH5vxDiECqnpv7yHRjmckk4MSuKGcai5bosRenW5zxemVZw6DjF7Xhxq",
  "key7": "u5BQPCDGiqSYqJ14t5voHij5sejuc8pMpECqwtLabWDP7B7jFKauUGSJKG8qZYfECfQR8Cf6ZD1znvTJdJD9bjy",
  "key8": "CNnvA4J6T8zfvz59fsDXsMoLKaM2wXYRr6chZVYZiJyst7scTMh3raqgZ1vAQwSp6S4UmdCp9ZUrdZoWmmSrT8z",
  "key9": "33uLan6h46oMJdKiVCrL7r5pravZxtX1eycM8QonEZrevx28L4zQts2nAE3oRbjWgE9o2DkfkcCEr3MpdKK64ntE",
  "key10": "TH1Ax1qawmJS77qDvQCjmQhCoLTByeMW2Zd2hNkSyJ6s3ksaLjpH52JmWwy5GLGeUKhmbiKcvQDew4QHQsFaee7",
  "key11": "48anhbBrjcjJ7gKURd8QPEREw3tFsAif6n5v7nMPSojppj3hiEQ5LT6nXiomEm1XceMmtZJ5RsEJLovAni6bYoyc",
  "key12": "64Dpi3PoWTrVp6KiBa34E5iPUREjUP74Vyc1sakJaQAPak8MWXHKfYphF9UY2QLKCMW2UUrjNMxVnAohNsVZWRbX",
  "key13": "3bNtxzj3SR283d7exnvWgj3Q7HHwqZXu4eKRFFViwCkJ5mfD147CCEntZWF8EWuk96bmZbybiZ871HEoxuSvuihK",
  "key14": "48Ld3ve4NktMPThLkX5NMd3oHjNBD32y5VL5e6UU6SJYeDUdCeBNsRzgiPQYoXb3Nof3bdRcbHuLXYwCdrpm4iBi",
  "key15": "3y6Moe3TvdekiDsCCVTsxpe4Et3iVg3kBiADXtUeNmShyCJCAfAGsfZDrDhzH3fgBxaqChLgss7U9JAG3BkEKbGD",
  "key16": "3MNSMeZDVcj16m4C3k7eRA49wDfJvPGwqvURGYqkszoLqnCoGgEGAgh9TuAtkXBoAGCzU611xvGeRBoa1KaN8DQg",
  "key17": "syonWW4wYxibG7XWPDGzPWYYmRd4nveGNzXZ9KqKNadzzeKGVtVpxrciVMgLQR5vGYKBGZCHSC8ZpMcV9ecSSrp",
  "key18": "75G2u2tX57X4BoyNeUJSJHzT9QcipTFZE6wRBKo3D1sSACQS4fLCZsGr3br5wyvGcyK4oEt9vG66CNApQotqJUX",
  "key19": "26HHdm2SMsNixxam91WSbm98Ugj7MiLEbLw8z3vdTdK8fmQw2kfjFpMsJV8pebhSUnYXY1TKuDAoot8pYhp4NN1a",
  "key20": "3sjAPkse48saaAkB9nXk4U8va3xbgxCRDsJG9CTMWzo5PefdoCKmDH5P6jm2NoQoAzPQmAnxNzLXFpCk4RLTQRM4",
  "key21": "2pS1MVWtYUdk7XAKdJsdi8U4w9WPZ3NsrQHrzwMYdnmzm9PG8hBXWZbdYpXsLK9LfRxjzy5mPYMTZLjJVsWNKgLw",
  "key22": "3nCGYnAFoUDKRxNPw85r3obVuQuCaNJvxyFUuAJhQLB8wzagEXTwwqyiZ2zesFJJ4zy83x5ubJXP2HU5uLm1FeoF",
  "key23": "5SZHmLQREF3vwTnt6ugm9HFRHuchtALDCZe7hN6CfNTBg3Y2LiL6U99RaCW722tZx1YSBcFufzsEi71h5ScTS9av",
  "key24": "5KqXSLfsUaqke1Xe97FViLPDPymL93CLwJBxHZStggiZTDq62VdZuS7mQ9i83LsW1YwckNHW2F5PBSXmoCA3CAxL",
  "key25": "452hFkJ1KLYFhJY5rgRsjb7FKTbizrsUu4TkGbc4vqg9HYQUmpg3mZzy9eP6CvK5U1bZX2yJNsjpc9eXMdzndhXi",
  "key26": "5sztBBPwTVx2rYUmFXCfS58x3htbCQF2ZeX1tbkNSC8QMub1yyJfBGFsjNuEhAba8QiU7gXiuxF4WGKTJBiJkava",
  "key27": "GssmyQ9V3ce5VnhrK5D48K2jdd6bRkyZjtZL49ychUnX3EzoxxEwqMtKphqyrdJvZQ6hEyPyirXSKUW2T8EaRfm"
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
