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
    "5z1ricnXoVanzKLUe5RTQGkqkRxqdBk7SfbcNybbJkqaNpMJbNmn5hyJgxjLHtynxH2auSnab4Ndvu5SEukUctQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36zk8hPmrwbCNieBtH57WPa4ZVJSTxq9AXQf1qVmMkPkW2fpcvm7Hq8xKns7WtfRNzQKP4By6Dq1B2MxwhNp2Lzw",
  "key1": "38wNV28QyvuSBRWtHjZ2EjN2oGJJJxKNXteALXW9pWQYzBgpUWau9fgw4NSUSbDhhhfZGo1bfxSwMGAhkWcRmTaf",
  "key2": "kggMaZPFRRmMb4uL7bfAM3ML9VrGM8x38VkyA37WhssjGtsvrckJJz2tKH13hMUs3fPfM4ZrHRHfcCW5dyZx1TF",
  "key3": "2pyEGzeNzema7RLe5qsVskByGZMzFWYGdMy2i7kaYqWmYHmk4NrjWDFHRreCz1R95jKgyGpercmBAuKDy4LwbvCa",
  "key4": "3XBU526VMbm3yzBmX7DsR7imf4kWM91bG99GRKMJjc3emeMSDDQad3CTbx5cfjNBa1CX5LrFa2CmNnxcP7S5CgAG",
  "key5": "5jGoH1kypfg2joq6VLzvhKJaBHDpsYYDiG4wtHBbQ3LrMxqi2TjvQ4VQzGpBQVcN45LEGLUVL6xssqtE8eRvCV1T",
  "key6": "44KU3wMfqXJdnnDBHBF3QDF3RLfDE3eVq8hR5gQwTa5UV8XMjUGm13wuW6hCuk8BNS8QhKU8Vwe4ArHbsa75TZAS",
  "key7": "3eXRhv6bgW8uvHxV11SqARgBdCQfzdTuJgywqqnneMwVKE2ShUBrNUzniMnQfFP1tzDxjtFZw8fBbjFRZHnHavRv",
  "key8": "2gohT7TaagC1nSUvq8qjDz8tU8NmUsad4zXAWCJMTr15DfJtgBhhjA85w28gjvke33VNL3m4Ev495HAPBiBF8oYQ",
  "key9": "tyvDwkD4syNsR31SUJa1saNGrWzzjdd63sQ693pbaPSj99QwHY8LvogRnJ5WCDHTXY83C7mHTiBXJxnqJk6tMtr",
  "key10": "7sTPmVUfk95BvZb8dTcFPnFh9npMfoSH7PzScbCVb7w4LU7be4pEffXDFMQnbeyA3VmtZ6nAPydh3PsUbFwFi9v",
  "key11": "3iQCNyc2PGjk2TPLxXugNkcrBHZNjn811W4DJLxFCtWb69ZZuk7ng9KX9nUiurMv3RYDuG6Gg8GVbtBLmhVVBWvU",
  "key12": "3vScLL62hqwB9MNdcKkRq5ZzofGYEMpNe8bDfDLpdoALcM4qMCi955VxZd13i8eew6FqphmcahP8QGg3SL7hdAVP",
  "key13": "5AFtTnagwPuviwBWguMEA3sswgtbu6uxE5abDGy9sUFSRxkuHBDCodeo1pXt3AD6fjHB5HXxGtZu2zYHG3BCYEjc",
  "key14": "5AoGTXk25CnoawuPySzHfbaePimWivfLSLqsgLr1VBN8RjVuKCeyCGmTyfLbjVhk5XoufmexTVUSwbP6humPoVC3",
  "key15": "5pKTQmTga4nSvaLrYK7jeUuazs6c59yXXq1rsG6m5ySNhQanNhPDeukR5AqSTFVEqrFNsD1MpPieuwCQug8tuX3z",
  "key16": "3KT6JWyQwng3SWpbv9BYvLzN5TnHojj4CTWYDu54RGSaDU7A5YTpoAr1dQBkWphZQ9GTsBAkHfrVbVgEToqpZy2r",
  "key17": "33MXTEeiN8H7KBVDmAcX6Co7DDvKfzqRDwbjRLopb72U5cniagF6yjCYNAXE5CopTQ2yo636gg7aQAiFmibcCc5J",
  "key18": "3ss5gt3Kg2HibN76hTpCwTWcktH3xpXpQQ2xwybaNHDRu1kqcjVaDTa6rCvK1Xk6u8vwk5oHs3udZEam2fGqHSvb",
  "key19": "4jT6omHV7re3VW1pMPwzr1Aer13hn6AvG6BPpZQqhP1BnKdHQ6wCKMYoVbiXzEWdTPSuW4VNg6tYgiGLcFV17KVL",
  "key20": "3asBthd1bWfXu7Cpz7vTH8fV2cmEH59iRi3ashx4udv4tpXqnLuULmn9ZjedhRKwL9YJUXo3czpfonaBuwntThxM",
  "key21": "FSpCdjdyHXEwE2VeKK3P4Pe6XVS86UTmGeucT2MtfbuwKg2cTGzJLwENsfA4kCLXUWShJNbft8QV4PPAofsSeYE",
  "key22": "4BKMGGSKeQPCnUzK6dwSPP5fhsi4vG5TpCySHrnxJPE9ZjVp5cXFfvQyvZCxG4cZevsjrdF1mQYrc1pMxymukyq8",
  "key23": "4kF9PsYYRxeQrwkwLMop9ZMf8Vx2sQ9QLo5rvJU1ae5BNo131DMdUtiLc6duA1r4aUMMAEyDnhq3yhiXZJ2FRk1Y",
  "key24": "H7dQjsm7jwuDsS8MEwTJYcM9u5NnPCNutH5dCzRNcts7g8nquXFafuJt7fBfHrqPdE84BnQonbJRFc3AD5Nw42j",
  "key25": "651WvQdutkYq8Rcq4HoHY9zg42jBgwnnqz6xD92Fvj7BJ1vSefyUEzFUXLUTQHzQEuT12op3Yyxyr9n1nNKwdkiw",
  "key26": "RQxx6x4c7ocyua2oJKk4cdToskRPaE8FrgDAZE5iuq316HJpGKM1kqR2eY9drXdFYQ2Rjtf7pzxUoHFisYApzWR",
  "key27": "GKKZxr7qD8t5J1tkFLuv5Yu5ELzbQ3zmxKqtvzvZEdMKLom2DcRHzUxTjhSJTuEpcW5C1m5sbwahDZvivSg9q11",
  "key28": "g9hEVMvtcpCiQuotH1xkh1bisiHeMJEyA18PXkMBjf5EKWpn7JkdLqNoJPx8a8ibXTPYLY36tAU6QvFcJjnyRDc"
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
