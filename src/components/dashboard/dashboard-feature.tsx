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
    "4JNHzinkJvW2mi2x4PWNNooUG89SX1Cq6qSEUJ89Em9eBX15NQNUX2sYe4kLa6UCginGb9vb4TyKgqGLgGzzY3UP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AsxzGC96Zmfk33zjbXsHmjaX4TDDgnrjKjJsbhPSGiznC9AJu3USnjxQkLdx6UHqKTpaiQw8AbCaMjvkThbRKH6",
  "key1": "5K48FEy4AvSFK4GE2ZAhUWNJzFTZBAF2Y6jcHacdWdiJU1FPMtkr6FXrAeBbgj4oqqe1kPDy7Hu9wvXsopFmj1eA",
  "key2": "2PT54w3HN5gNUJeCNwrAUFnuESg4Lg6wddxmjokPEHaWZrX3NMFCKpJsvwWnaLeBDvopH5Vq2VVNyT5GL1KshbkF",
  "key3": "4tLRqPfocCJoofi6ef5Y4FHTwVf6R8cc2d2ifj3FWQdrf4cTFt1FjrwVuLGfZ1jUZgPhSeC1zHzqDqfQjQYcb26b",
  "key4": "UeeTaS2j4fTGG7ceRGeR794xP32TPn425JHhGgxyFx9i8v3f2uVifqZsqxdpznShYjDQSLDQngGWsHfe4q6wpwV",
  "key5": "2yAsWgVDJZpx7HiakvFa8qUJgTQSPYdpykMGd6XGmLrgzGiEBG4DEXX32wnPWehkZyYNkRx3csk3Ujznog11tT1f",
  "key6": "2LPcTKq8DKNFd7TNBcciGWVWTaNyGaJhoopSG2L73md2dMv6YFjbe6qVCMqRxMnoUNqCLr4Day94RWnzcsV2LPpN",
  "key7": "3KXPY4VMzdrNGkBBxdeMx3yaCQWd7GYacsB5YWPdGTGkfjj2HHjtEqzCpmyemtkc78Mtx3ftXTzF4AGc2d8VTsSe",
  "key8": "2s2f3sCY5Bo5493Dn7mSvPXoSuwvPUtC85mKTUEn8jkgmmB7ThFapsm5eGby8NDNXA7qYuHCsLGXoWgxQJD2vWUe",
  "key9": "4AMTt1qvAWXxNw6NHumGsvp7GK3fva2N6zqBPCsYJBhpff41r2GGVHMGtxG4BFy3vtmEWrvuUZNEujuguy2dkoXn",
  "key10": "4pEWhueY4ujtrcyCQRXCz74jajBU3EFmTtJh6Pok8tZZkvFBBnNW1aEdatMBG3SEnUdu2kMCJqN5XvL6mboPJnik",
  "key11": "4ror5aDdhevN42EF7ViPk9AY4C6jTmkazxjfRaKzpwMAp2KwnaCxBPZS4bMMKCntSE7nvuBWuogSHX73MraHukFB",
  "key12": "3pfz2HVuWKiPVwjoy1D57ZCV4fVpkHt4jLrxc1M2peGz22bTGG87RVjDCdSB7BNDmL1wVuXbBbPxw4uUeT4uuUXC",
  "key13": "2QhLFZLhvMxuM7vAPhu3iqzYEkTvCW7bzusYcCJNT7sydyVoe8SExkVucPS93SQVK22W7qo7xmEukGhvAGHaUYUK",
  "key14": "2NmDZcP9DuGK9i7u3mX7vy86fT5pKECydVCWUqu8YGU158YmBts7skukDC9tgiCh7nkZ92uLrpxqFnCiGqAbuY2m",
  "key15": "4Sphy4FLRw9ypor5CRU9Vc6cykfeNWSmJpsr86eZfpeTz5Pdfx4FvRDNLWPWCbJtfiGF3auXTiZP5FPqrJGE2WGE",
  "key16": "4SRP5v7Vs6WLwUvDfcXosA2b6weZHfUZfmDNBy8F1scsKzKnYdWfme7PnSaYktsmKs16fkTrwurspmT1UikSvH5J",
  "key17": "2Q2HuAfTmvhxqNAdTMQWjhd9my5Rj8VJZeyZ7Lxuw4NAYawbBzT1oHoWU3KEH62GiuJ9E3N6T6BgceMTk8EPtUzQ",
  "key18": "4soj1avEdnouj8KujsY9FzkHpJ4QBWD4k8CyvNcUb8g4aXboUhMkUsFsw9h3MMARTsyavY3u9E3QGWSNQR2dV5oX",
  "key19": "2dC4Rt1kUuZBmiAhVmcZDpkZRLMquTJ4qgwhV7CDY4adM84491uMAM3KcaMz4y9SVFy8azqVd7cAJoStVqy8jiQe",
  "key20": "3SA1sdV4BZMwgQosuvLAmKQ7di47xqQKjBq34HLLv4MEsTtWac7EVGkG33Q2QRZhdzFriXUSPVAMruKrQgwMbq6M",
  "key21": "5YSYAGhHmvDyqrBLvymP5S21piEAmgAboXho6to8C6Kp8svUD2m8X5TwWcmn7xGnwGeExMx4CvkndVACqFVoDjVd",
  "key22": "5hwiziYdeCUzfMBuf7an6dXRTmoYkQ9heTMagkFVmbJ765kfeG47XYn1k5WM77YnRvERoqqDrYC7m53qDszawAhV",
  "key23": "6rnBCjE1febrq2j6m5gigPjKL1gd7g4h7NJCPzb3U76oDi75UHd6EddTqgYrwMcZ4ECvgEMoL31W2NNVJY9fzQJ",
  "key24": "3tn6mPtQLKp548ULWaFxvMdFii4PayQk41pBWBmPzWEbxL3Bw2Y33YDjCVw8rSMZPfyDxAZptYQuiys7AXB6kWbX",
  "key25": "2zmMjqFyXPz44H4pDJ3vVHDvCAZs5Hh7y4NJhMV5xHFyBg5q3HX4PSysPq5GokB1GwE1Avy9b1aGVLHbsDTHvvrz",
  "key26": "A4mh5NSvp46BYtc38h5uJdwrGddUW5tq9BGQTfcCiytjm26LhPHZMnCwL54a5J88enrvniBvYWUwXbo7QMEzGff",
  "key27": "5bA4ZF3vWN2A1kr4E5YooEAcdZ4WanzmNSngNwcHTXqBQU9qcNJzupQ3FA87fhqXu3tqCH6PK5MxbLETR7LMUFeN",
  "key28": "4CiK4ViJS31UnxQvdPkqJom2RJCEY4XHWYv67L89EstQ95GLR2wpRaLV5BXaataZGy7xxPx24vVuLuVcESbUM1au",
  "key29": "2GRyo7CTsWEdyayudv56UuoUGxVwxiraYwW6Vg2ijmb9MtiLAqAhGfvFt2ZJjpJ7Jerp8pk3UPeQhrix12F1SZfi",
  "key30": "5m7Ls3iMXscU81KZvGGDZkUyM27PEv6DaFzMeepAbVdZxUyWVec3BD1TtFaAUX7P8SP35iGqcneZuEmtRikXYizG",
  "key31": "3agymmcB5Tz38cVpNfaEohs4yotHYisoPxsC3me5KabMrSG4mSwKew8eikcdcJjYvtYYjqQk94rMm6SwqA7ZwZzC",
  "key32": "3jG2nk2Jjw7YDiYbV1KcwmUBo3VWL8eCTRqyVMkMtzLxxsuWNkrMCKLqJRFmhGrYQL3ZiacyNjtydzTHaMyqqmeL",
  "key33": "222k6DSY4vowMJEGqt3RvwghPdHW46HPLD4KLWCsfBjuCdpuCAjxYqyDhbygLjrvJt6VHEG22UVnXqWG35xwiXF8",
  "key34": "7f9uPjhbGZNSN48AdK697ziDuZVenTufGDAj63SH9cM8VU72YyR3VRsLaA8T2TGBr2hhkdms7wEKpP49gAhMxLD",
  "key35": "4wxJrZ7ojkoFdtYaxv4oNDLppHhBuipbzas8kuuKpJHZmzYsEwxB7rm7atUoC7GmhSoqTYqSjenDKARhs6uN3d4V",
  "key36": "5ti3tHVuoH8nN5gEpNPgHzHKgkwGeLVdn7gAEBvEFiJsku27eiyrKvxZcnW5FF1LDFmkAEUcG44ZqzBt5SRQJyJa",
  "key37": "47iUt4ydRDrxGUn81zdkcAiY54KSiza6ZPSmbFnVN6VvA7gT4o2H9qki9LTE6sriv8ZnD8o2ZDg5Kx2JarnEShym",
  "key38": "38QeA53EekSxxUfPwFscgJ8cSon9Z2mArzDkJ3aTQMDqvpAoCc9Jc33DtsmVLBnYCHZn94NAYUXAKh3x6S2da4En",
  "key39": "3JNncdLZ2n7dnoF7rhPn65u1tT9Thytxhvma48nLHivLEd4qi4utiT9LjZQPTH2pdctYgoNmQCWkFzCqfdVwN3tp"
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
