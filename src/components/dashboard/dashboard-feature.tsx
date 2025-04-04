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
    "3sNKxs2nVc9BrjD2YihqkZGycKZxc7DomUd4Dsv6rMVm4oBn95txtRHPCh4FEyNZwpKq3TbqxtzZihuYNFWDZrLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jSKHME9ocjyFQw9EGrydr8Cn5EQPNkeqe7SA6KwrfMJopiRJB9qucq11qkEyJSjCckUzhH9Po7R1hNqjqLzyXA4",
  "key1": "xcZdo8SGTSkYbhydGV2piJgRicduE3c5w3KfLipnQmJtByVZ6eMwXFxuYk5deQBzRCzmFrEuKC9q72ZeYYkU7dn",
  "key2": "5gTtV9aAEbaGBj37XpDT1xVj3XakbbR3VtAHwiNKoJB7TxEjYtKBXAForYZZg7GNxhExpvtSGzGS9qtYxa6DrtQ8",
  "key3": "wh5bsvMKAzdu4v2XYdnaF2ofYKCGVGqZDvLka9kjCx2xahX2UkW1KCFdg8rDU7fFmMf9a6kkW81g4Gk4JJsgy9P",
  "key4": "58pH9JUbmFmWpz1XA6oq478vU2rXxwGdzR1VBHYKgmDySWCycM5KqzVLm8Qgt2s4juAAoXGfhUXq2gBXxvnpupJZ",
  "key5": "4P5ucmtuSuDX2pSo2rQq74ntdn8jamP49xjLH7uUcwYAfMLNYNFjCXRnPL2c3bnnpqriGto4vDeNkof2NRmBBXZH",
  "key6": "NfcFd665V4T78SoXdoWzj7paydP2v3CRbSxdZLNG2srMAvuvRqb7vxnygmj99FSKDjet9USCT8W8VRRjdGidGZ4",
  "key7": "3NDqyYeTDiguHa6P1SzkGFBr5BCVUmeQpoUy1jrbnuLc4oj5dSpktj3Cp2kFvF6bioNMQvgWUMapFBLbZ9m4SLrF",
  "key8": "4uCdZkkE3K2Jo4RBsnrFsxbvQL59Y31vm9oUXno3wjjneBUzaqvrkwqwAshDuxQdrkk4NpoKfd3Bu1K9uhv8TDMH",
  "key9": "2VUueKSqAGtgDDuFzC7ANTjhXGjzR2c82G4AXDKZtMDMgoB3j5XwyHRHhbyT737xeEbx2zhKm1Nrg9AjUmrkRbY7",
  "key10": "5dq5ye6nti8evR2tkKJpUeTfrwrLPqMu3QzXwKGf7v7L5F76DZG98occhn4wuoYCicZ8o1wasQz1yyA5nX1ZYnu",
  "key11": "6331wHyFtYF4Ynp8SUdm8Yy93c3exh3oWnwcDCUMwjKjJV8CFhSc3zmRGXtyTNjgLc1rrd7d1eERtSTFeMtppSEu",
  "key12": "3fwSfWtKP11RHFCFsZzzmKMb8DKjtmXJZaY37TmH8FaetLC47eTYk1EfoCDnnZPwMP8YpDous8TFtGx5xRLBFy1S",
  "key13": "p4sA1sKFMJGjTraddiXKnCHiPn9opzB466MEzbBPtziYZTK3R7PXytbQYGAHQPDFjDAMvoRgZ5ZnSFXW19xNWAr",
  "key14": "2sUp94Ej8ic5nrCkyTcNKgNdWuVjxt7jvSYicDGu5aKMZgNLqbR1m5n5RMduXPSJgpUWFEMhx7PEha9WpcQW8CN9",
  "key15": "5ueRKh3ntxzTWmVVBWcfbYFYjG5VWFE1dLhzE8QE7hX85jmtemRuoBCN828z4EJDjmGy7tac3V6V46VJ79u8mbaG",
  "key16": "123ysvvUzhRPYxSFkao99p4aJLKhwCu6gQJRyPNL2APheGkDt4U9kFBnNZVHuiKggQfMLdP8hySSCtMSX9gvZknf",
  "key17": "45Ympw5hb2o4eHqxEmb4kWVk5chKgTnYu9qY8rqh9qDNLFg6UHGRhicwfe2CSoSvEUnEpdLuooN8sT91Cggd2mK2",
  "key18": "2jp1MpQWWMxco9ZvjMs5fjR1f5W6ypDxC27YqZnxcdbSBrykE94VR89jw362nWWJT9ykP5DGT7XzLgPByZB2Jyw",
  "key19": "3iaaCtfPFJmHpET8nd4RW4T88pQgN2jt45uRsCEpLSxxYdL7SvRGyhfBZEygH5Rv8VfhFco8qwjyWLfBD7QDivMb",
  "key20": "444QarBUiAo1H159qK1n5aA7uGZG87uj9pmytSnNX43Kjcd5GSE4LcBLvyKbBUiBh3uFvs8JqL9b5SufQfgcwUKx",
  "key21": "67djgqh1RQBJidZkuQ4ZG2fgCvpuDTe3FYdBHhWzxJQu6KWmx4tjZayne6KEGbYvJnCDtDR8hmCDxmXRegodLw3j",
  "key22": "49bnymm6wo1k3osLGHNfCoks3AfxWkSMbeoqZJWsvM5kEBEYjnuxANgC8QGDr1dM6dzT66oUHdbYHMRdnzxXdzCV",
  "key23": "5kCL6BMUJN8m2dRHTnzSm3ftwVaKWtG13TbbuiL2YjN4iLooEa1RLGMfodkjxHwH87x9RqsifDWk8CEvJpmuGnAf",
  "key24": "4VQSneZqEaVuda7QeqH91SDWy8iMFRnbqPUcg4fRKLufKCVAkJCDR4GWrv52bJLRY72KoE14T5iBidiWaiWAuvWs",
  "key25": "iyfUxBU51g7Q7QRTn3D96UTbpJPG7jeptcLmVTrfMp3cG37cS3HK5nT88dcZCY4Bh15bpsxYiHr556pKwSBhKhM",
  "key26": "2YaC9VZdA7L2FnNJab4pXtgNajJVAxiAYMouzuyfXz5XtFnVTaf79t1Bith7MqYd4MKcywHrBaLWKGLGKVn9aoD2",
  "key27": "2VWSxh4scHKQvEseRZ2e4K7w2MEGCTqzLMo2T7e1pHUyiURbuPyzxenJkV2aQLoPtYhXjt2CSJw1zJoEpCZTTcUu"
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
