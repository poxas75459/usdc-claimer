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
    "Y6ntRZj2rsFEuCTuM3FUsMRB11PXZYBwGwetAr7dG9Poe3HHCBcDZd5tmwZt4XDvKSruKi3x7xGgxZAkdcSEPNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U4yCrc5i7kaY5eKQa29nWkJPkQGeeAiyoeaqySAfT9u2GyYZ1Ux79aNJtwzsxuodFF3xyrb6StZEbysCietBe7p",
  "key1": "spi5VXsbH1fFZ6ZUY9fZfc8nZGQ2uy2kpptrFHfdT8TKMguyCUTmBP9y2witqXgjq4phU57RX1BwAeNCcPLu5VW",
  "key2": "5APq2ayuYTLdF67wW9AM4QoiJFjoP9ktbg8cjDaAfKQLRB1ePg7zy4dEk8an6spPyKgutoA7v2eduAxQJ5nn4jrp",
  "key3": "7G6KW4L9aHWvzJwMN6LqAo8qXAuGJMdGJEuWyAyqa9qCskq1mNN9s5UE275dJTKmrMAriQju9La6j9rgAMTWgjV",
  "key4": "eCBGRjSHpHWH5HzSRTo5SkpM1zeo9h6N9Qs2Qwx8VzCQsUbWVErsAbCoPEsX5HgKnK8Bp4BzMrQtFWsYLhKYJZk",
  "key5": "3wELWQ6RgoX1ZpBzw3DeHTrMmVYnCi9EKc39EjwMW3jat6BReyULZwMvEz5JWLcwQ8owxT6GCYZSURz7RZ9VCY8e",
  "key6": "3WCHt2LV3JSW6hvkyF7drjnA3j8A9xAYDhaKha1anW8BC1VwBf98MZj6BhXJtWRuB6QpkfZCd4xXxNjUaSAs3YXZ",
  "key7": "31yvw5ixn8cP29VDKDbJW9Xx2HwcW6wF3GHmLQ3fYLpohsg6scmRxKQr1ByuWcaRnNyndnrwSZF2GMuZ6qDVLoAy",
  "key8": "3FWWjgk6ixBME2S1Gj4vj2MST1QSsydx3vekyVQiXExMyTjBPvtCRsr66x1Z3eoGJyt4HzmAbiEuxMb5LRyytHVg",
  "key9": "2zkUSbW15AVUJ8GH8gbLowZEdMCqVaQBiJyKjkUsWVzFR635xXNQwfEWGXkm2viFWwAFV66j9xTfzdsPHDBpBSJQ",
  "key10": "2t4kFjhcfxGXu6Rgia7mSE6JTDFaEAQATbDRQuaf4PrqDQ4y9KX6VH3wmKhXeEEPAHiHWpSAUiRDDXeiqCrGNfXM",
  "key11": "49DwWSvYJ137LSgMdEA32FK6Ax4Ye6h7zZqTKWTG4rzxF8v6A8q5EfYkLvnBXWD64kQTP28NPaAq8kSwXXq4SJSa",
  "key12": "2pTLKEq24KfRriEjEoDPshwT8xbDRR4YrRm9hrXBttboJqcSshfq6x2Mm6geHmuPMDRMm8ytbMyMhQBLJtsdvcLi",
  "key13": "2tuKdRKquZokec4tJntdygzqn2Ws7fuMat2actA2PbJiGKN2wXCQP5BvAfVjJd33ySwt8cCVx27hsuGnNiSoZPtY",
  "key14": "2fvetxX4uEe3abPnYmDHyc5AeSzieHUsiV6yoTWp6TpXmyZgoqHKFQvnkF2pyYroZ7FCm2g5BNP6Zp61PLkvVfEg",
  "key15": "373XKUisU1SFJyDX5rWdWLxsNWeAYjBLS6LsJhPWonrcQw9nmcQnyh8Bg6kGrvPajfYAbENg6qax7tnbGiFGwUJt",
  "key16": "5NsSoC3f7RZswWY4T47zNZxJEjUoRbxnEakSM79MiDDWtyxYCksaS9yRx6MpgD3TsSzSwVuzFtUhk2QYEAAboexC",
  "key17": "4BHZGFiiJJVSGYFUjmtyJWiFuqnBKK3NE1vSheyptF6rjV8NHcNpaaorK8GG1UHo75S857wLcamhBUDmGeaBgq79",
  "key18": "D9GkoLtvfhYNs7BNfT3RrqL4dMu4iqnqrKEqYnYWrhuJ5Lhwv4xN67cS2QPzWjtguMHU6Q7rdq29tkoZ7QmkphK",
  "key19": "yy359rcJcz3gm9rC4Q7WUzYC6HqgQ99C2RbknC5cTaLc1Edu2GJKRyj2ZDFBM6VZzKtuoV8qxSs4fdjSQ8WnwXt",
  "key20": "Kz7EPhWH8b5NQdVaPawN2s6MFZWJYh1Ctjk4QUryMcvS6opm8iqMdDjDU3nb9oGNX6w9JAXFg6bK2ShnEbsV4Wr",
  "key21": "3php5gGwbRJMU1m13yMRW9K4rr2mqrG3v6V1MkYMuV6faaEhBoktLUaoG5VoKMvb6xYwZG1VhSW5dbAVjtD3cXMY",
  "key22": "5EHNEstmSmsjM2RoPd4pEZdKXeFuBufKXuDDi2j6BEkkiU4sRayD9d9v5UdVxn3nYFeeQkiostBbabL5x9WrzsJX",
  "key23": "5Wh4fborezqYd8dGJNFqKhKPA2okbjcnHueop3gZ8kMtBuKmC4ZcfgvfuaPQwJUE3E49uXfuv2KXkGvHGaEPhZVt",
  "key24": "5f8HwtP1yqvkuP4P64gdRXykkxxc9tT3A4US9XmdbuzhEgcE1U6ddhUhimLZGYWY7Sa9YCjyxDA8HtoxTvDj3T5Q",
  "key25": "5j4BJLxkDVxdSYkEkSGpjPCAG3YgkhbrFDeQMaMKuo9PTSxohTFNeALsvPDy9k2vSAuzWe6UQFwwjCzTKgHywazo",
  "key26": "2JbPMjQn9oHBuYCjg11AVzPsKAEMjV7Wr5QTziu4JzFpkwkaAvJjp3wdTEKBqJDJYViE81WAEQwQVvRrm2MT4QdR",
  "key27": "pgd4Zd8tFJaziZk9JFS1wmPLWsnSuagCkjmaByceZbYMQC538J3qa53hC5YSCVzh5oX3Rt177U3SCgp5677uwni",
  "key28": "2JWMnBM4zrwJeiAKuruVzaLYL9nmAzXCqPAFrChK1KTrho6gsg8fBMTmiX6tfW2kDvDhR3jEwVF6iWAkY5E8fzCo",
  "key29": "3BecQyBLGH3t1dFdK8TY5LU7JCgVmL82v99M9NDjN1KQT8kw7Ay5WfR7mUN1GMexRbfEQBh5mHakaUKAJUCgTjah",
  "key30": "28nqxr42Md7KXhzFwvJoeFicKUVsCx5uyX8aoMTM7dF55yezKNKqVYLiJno6DfHw6smQfr7ZXVJwQsukHN1Bvo6d",
  "key31": "26KYvyFncYcxno1iiCgtRMQ5s5aJQ3rPKZwq4bkD9zuNcPWYd5K9SzJouzB9t7ypYDHXnGGLSDiCKDvxKKJM7WcJ",
  "key32": "3LE4wGRkKEdC3rgDF98yqoLnUJCJYCDmuvFPzZQaETU6nq4qqaTzw64HtUD6n71zMxYw4NeX3YpCaCX7L5ke12j1",
  "key33": "21AMJLZAmgPjTYMYjQ8cNKXNfs6CEtrDYh3ixu5tWnHhcNDLzW5wpu3b8FgQDNrVsff3gc8f3VHBoceJQmpt1SiG",
  "key34": "eQ5qY4YLHkRyPizRmP1ySYGN2Csm3HDyQBnFnfpbtvo2mNj86hkD3CDRUB2uK3tLVmTKVmfpWvzSXaoqo9U2kVf",
  "key35": "4Ud1SeLkg6Zjav4RYzLr2tCzHHADmJBT5cpwWztTqipFTeK5EpZHBkss2DsS24L4hrbKSedW3rFuwu6RxdLtvajP",
  "key36": "31QY8LWhfyzpfqK4S5ZKs3S3Tbw9Dda9AYk1F3e1czV8BmfXo1dXifWXaXxEZ1jZkFbq5xtJjkR3Z8Ftp7GcJQSg"
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
