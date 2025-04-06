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
    "5a1oeCQfP7ywjvtqAuEBBz18PcThTgtfAw5ayyAoWr8bmXdqNmuKzARTkBGpky9oGcktVjD2B1DKgbtURsBVHzAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HP6tBEN4CMxLYrag1VXa5GynzXmfjQ6wvbTAAfDcbURE4DQ56pU5QijHMETQL8h8W4q2pzu6edoeAieze4NVdeF",
  "key1": "3Uof4ahs6tT7HtK9624PpLSMa984m5J3W4ZqX5qAspQYfEgzxMPR67Kkx23fhWeesQFbZ7nxd88ZYbovaz9qzQYi",
  "key2": "2kXNDaSx9NK1QXXNoHuCiTwSW1r9GS7qWPDhfxtgRvRSzuMhrphM7xaxKbg53ULTdbzBDSUfqiDUcWmTkF6UifHK",
  "key3": "3ovUYZ3azbQCm6yHqruhUw94fdWZKVKv9SDq2n17m6Y5TE5xJimZ35gEvA8y1WyN1mm15eiyj5mqPJ3aTH4YjutE",
  "key4": "2AgGWfZC8DYUCBH1ppQeg9HskEUpwJsRgdCYPbpBLY91zf7DG4RHe9DvPQVXbfNxf517gPUu8ofCMV83bfWrQY2v",
  "key5": "61MkJmABzBSMUDs7fADACPM8jL9f9qXEtYPNTXijzjA4BT32XFJrjuJEN4jUvx3whfZTJ2ugcPRFVkLihtUtfkSh",
  "key6": "5iz6ZHgrRpPmiasjQ3DCyJ9jCRo8w6u3C361H83jCLRqPnokxUAxcBvWm7VaPgcqkuSwNBqp6j4vvUu7CnWs41di",
  "key7": "3b2HNJ8NWEFiNHe1CSGA9XJK6jCj3ESLgPPq1epQUNq6k8yhqAc9Ypgit5P9fQPCY4d33zWCVMc7wo6rSVbe3MFH",
  "key8": "51p8Nyo3zYH49Uv9Apue65P1NpKXhb9gQZXgQp9SFHmoFfXHRJdxeiMGz6w9Nz72Tt6F9knPvu39UKYpycYfNy1A",
  "key9": "2ZfLuZubqjeTDWuNsRJ64XT8XfeiJiuErfjHqYXL3FXA11xi5ssbW7rbmQmZy44VD5V889W9QbKXea1DCsGQZ2CS",
  "key10": "2xKCaPQ2ykAzEeAawQ9JEbt6QA2NmniSVgUSXdsdSVJsVqaTgy5nU6Z7P4exBLvHtmp2JGNKz5HoV1ruxZRspA6w",
  "key11": "3QhsNo9E7y1MTZzs8hHb5oV1tGz5Z6RGoCEHS69RuLgtMjj5hNUcn24AifqdVAbZbbz11tkg2FXJosnnoDYf6pm",
  "key12": "298TXmvBAGwSPCGGUK3EN1G5pVdgzJHTN4reQGNnUSss2oU8EowBL49hSfXNHE7nQyevGxSNc123cfwvWijF7R5i",
  "key13": "5VG9aGC6EA7qMS8M1PZpJBQJ3Lb2cS4x4RfevZrn7KedBjY8D3LsYtQK3TYvqcFpLyFGBxTiXLVN8vEXT4JRn7ic",
  "key14": "48mh9je2uLML8vhd4N1zQea6PLeUhykPg1jYC1ULFco1cAHifTa8baYUmz2YGRq9dp1wEvHZTT8MpUoTF8e11uyE",
  "key15": "5P6y79ohdrmxbAE8nXhfYt2V9E7QJtT1p7qSFVqHh3Sv2PYLUmZDZwH7VVDMy938ENn966MzBPjiJwZarDNZxiBM",
  "key16": "3LVPf7ekYknhaJ4RvQQrZtb2sibGj78dyCJFQEunrjeoRFAwfe195Sjz9JYrtgHHJkY5aJrgMGQSemG9Hr9e1zjD",
  "key17": "4bpNDqxmEhESMYqCW78ZKhuNdNZmCPquwZ8wxweVGSApfwcCpNwRFaVH8femL5SyLgCMgsDrkLRyus2oK3uknAr8",
  "key18": "3HSQjc3ib7fjCaEEHbQQ54ELGGZ1MMuAi1CGi9ZSbaZMnDt6jQMXEnPRBdEDtzD3GUEHgHYxChiUmGaLTt51GRrx",
  "key19": "3NkripsTvn2R35pvqM3NdzmxitXkUbsJ6J5oLj1AgBGRdEs8Vv9RNyTgzt3NKMUT7cQQEZXrEpXyYyYVwwZW9qVx",
  "key20": "5VJidYWrWTBGGEqUAYh5isD7eTAWEzm5W6r8nzQDdH2y9NTRGJayyuPfEGxaL6R5VNt9uNAfJBWF74ViFaz7Ezet",
  "key21": "2KNy3o4bw4Bv8AZd3oUafEqc8pahfQi9RhANvnKiWTn2pb9urqkQTKqYVHWqVukxbZ5P8E73htWpYsxEUpdrBP3N",
  "key22": "3NHA6uzcNiPwFrVUucb69PoBQMEkYf4hb6WfbiaJmsfPU9kUFD96NCRuKXZvLyv32UKjKNsuTUT7NZdhqvF4CcuA",
  "key23": "KunLbMZCBaFE7UuyhyDfRif5yKhMdmf6SBeX2d3bBjBhw5dse6gX69Xzjpg3Pyd8dJnTDmpTEvXqwLmTLHkiLj3",
  "key24": "2ovrfNFCKukDZZiie8Z3nDL13aQJzHrsi71WLpVq2QMRon16c6mroauFY9uuupNSMYRQCzBvJGhP1PMZ6W42UPZv"
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
