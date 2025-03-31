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
    "3KJLGnuhvKDQjDYpKXs7wiJAauCQEKouzmQXwphypZtLtEyFuwBjtFPcqjqyhuSFRVKTH7Mx9V7B6AyhioABNShD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63i9Ar6ezpDSyd6jjBvkZJkJJi1u42v6ovFU6TSVbKLjFzafrR9C4cmpG6nuwa7V1RxKYxiTcfM47RbM3Az2trBS",
  "key1": "wLpYa4LkEJcBYSjM59Xtu98tzEt7kvbpL9WskzvHvghYQ8qcH1Jh1MKhQAnuXEGJwcZvEoC6iFiiTx8B22fbvmd",
  "key2": "4LVXWRf5ruCFA6ZbwrHJXHBRkfaVBxqDZW1aG2stLLiJREMdssNeAaLt19Hg3sAr5bvPUtAi8q8LTnY9h25YPZbw",
  "key3": "2fFFVavGXR6eBceNoj2hcz1Lmow1kYWkewdN8zDFX8TivE23vobrnw1kT6RoxU7QvLYmcQKdvgmwCyzB6xLkTsqC",
  "key4": "3D8323mc6t7wrXwu44fhma74m5geDPyjJ99yVZwhn4VPoc2v69Wfp8DJzuk1Wr2YzRMQeoxFrGMUstg385U2BDfT",
  "key5": "3wEjGXPi2zisrjsYSy1qo7tHrfbyDtAvDJLbd4nUZSBkPWQkfkYEvQShvAmXjALyxLvqUYon6mTizgp3cKx34gG5",
  "key6": "Mnbnj3DUmM5i5H6EmTBGUQYaHbdGbkYNEs2HaDrteiMcKDLvxd8qVzBHJgCnAcZX5ytawoM7sMn4sM1GoNCt9sC",
  "key7": "3DcHyctVGh3qUVLvaAiZmRMb6kxxE21beikpbcXhaivfJqWkZDFyDQgLVxVXNhgqEnV8y4KyYXUTqQMMnQkmaXWT",
  "key8": "5n8psc9PphyizPkU2eHSHDN4RPbiGPhdZCzqMuaqLpfbBv68Y28zuGrArMBuQL2NPUPzg9JfrHSURykq88aDVWur",
  "key9": "49tydUStKRrD6SkyhtKrBUuSFiEdfkxduhBJ2dztT8GphdE5H1LpsoTJWsKd59XBaTLgJNXJEsdVUYcbK3aNShdt",
  "key10": "VVZezHvPyp3VHG4ab8rcfJ72qHfgrB1HB4nF3V49CKisrod5GcrpChX7QY65LJy34ay4ikcjG4Z8nCv4jc7m2ci",
  "key11": "4AR5WYrjAHoidrzq385KLK3d2UrD7YcQHJbdhtopaVdhdiFwrXzcgndwf2yPksvCs75YeMVwgBM4EKkDPGVQaWVY",
  "key12": "4w4GJutNLffCy4KbSgvBvU33SNzd3n2BKVT8Bty339651jstRxwxrzQsiNKrxeg7qTBTjifqcnCpcP1TW5z8iSog",
  "key13": "5kbbsHdbFnRnfNZKjMiAauHwXgQ3Py3QHPRDd7kZEJrdReBUXDy7XJJmebkQ3g1C7DzCQajXrjFSSM2uLXHpgFhq",
  "key14": "riH3CCMvHEVx3EER94WmYouj6dsf2YLfX58imLRY1RYKDVgdRggf5U7WgUw5GSRrf9DZMy3Ub8Mhhz5XyYH2fby",
  "key15": "5w24N5y2o9fJ1TYGbBM679KHurcQBd45Kzp9RvxRdYBTWk2VpyApFBMSZzYLpwP3y3QZSWWXWWjgmG6PtBE31eTF",
  "key16": "Kajho88umNViZQki9sfVD8krHXPtNm96YaBYBWYCidAgyGSQSzP7u7dzqXEwAK5RGUgJF8z1z2KVD4stQaTGTq9",
  "key17": "DZP3PHKLnhuUr7rw4NQUL8kZTozrjFeNoHWhwLpE4JremxVJBFJ7B97uoiRerQBekwD9fNMfRAb9P7YYdjvh56i",
  "key18": "5gtnt5pNjVRkdS8cGBn8QT5fVDCyhWK5gqdxBgked8Tioq8TeiXxXsa6wa1Hvt1N5bmz4Af5Zf9GEZxVt9FE9REc",
  "key19": "JzrdUktLB3cYz16U1hqApjCGMn2ec9CvdxwYSKBA2nqk71PTjqy9zFke9cgCgGERGsD8Y7UYtFJVnEGpwMNAUeL",
  "key20": "2Ab71PXrNAToH7nbcph9ovLLJxyt2ocb1H4NmJfoL6HM1pRWcShk1XpiaCuUwdjbVLHVCdcfrrLAuE6uBNhp5gMs",
  "key21": "25f9GJpovQXbRVBhnbfKZ8uwUeXU1bXiDDQSqsv468o1zsdwQT28vXszNm6vLjCbZZcPUMkdSiDvRYRyquWbjpwf",
  "key22": "4ueyUQEcqeseryv7HmmkvSwaFb3KvrTaduNbHEM9YfAVFfiqpSFEW48a9cd2izFpACxT6WLvFCsdkHSW8tFUi5aF",
  "key23": "nypchQCZ3A38J9npjSQSoBRGw6mUhDpSzrr1riTt6W8QM1U2zg7hbuv5WXB3E1r7DEauydSxSgt5io73e9YkcLj",
  "key24": "eyr7c6WiL3DBfXwBdJ65gjb8tZTCdmuPcCK52aZ493rUhqLEUoXG2vbBvegmnCcVnbh5nVVHqwUg9WnZpCC4UZk",
  "key25": "28iL4KLnedQ1FetqBc6hjSH2dKEv4H8u7iPM7ZkXSJi4zCbrXUMtCNgwGtZ1TZ5oKhmku57ohKd3dvDoWbBUGtaF",
  "key26": "Rzgxu2By6qZMb2E9R7xMiJrGUTJjVDrtb6HPDqj9kAGLgPcAwc4pKzoPuEsDDi2Hj5Z2QW6punn2y3ne3mrYmHU",
  "key27": "3ao4DnCi15QbCJpd9ETtwxcCHgUNi9DD6WTXVMdcNXPrJEShdksUvPsye7eRH6PGKM4JMuZG6WgPbJszxRJxfiVm",
  "key28": "5XYZ94mDDGPQUguaQPAorb2UmBV9M6frw4n92rwE55Dy1899izvgBvXtbb3UJeKtEprFTJXHrWpmm4MsT84B4MF4",
  "key29": "4rrmbQok7K9hZUi9YAHYcNLTrdrUHaaCE6G4cUSRNxMFCQEHPnSn7ri5HbXUXeBvyTu15gsjGaHRj2KMcsPNNA3q",
  "key30": "4wZvumRHowe2Nf5FUQyGn5N2cdFMQxYF4QHohR181vbwvZNV1jmUm6YuPwhVTKyB3ZX6KfbiiXnyz5qPoQYNtCri",
  "key31": "5RthGGhpPj2XLn58g3q42uzZVdzGBmHTFAmkRvj5cDEgTquXeKaGvoBj5qarBpXmpPL6pMkfGFQfvPmb4kaFCH65",
  "key32": "X33yDBQysYbSzaAXCjeyryZUSWKJHgUN5pxnJ7HP5HbTXJ3bQo85Yq5WxxQr5tbkzhGkcAqLrQePWLagn66TZYJ",
  "key33": "2ELMLxZ5Z5aKgBVXE66ETPcbruMNJog7Zb3uaSBuYaULkpCNm1wqRRcUbCS7P7cmmoUioHVt7Mr5S4Crqb7KKGfd",
  "key34": "4TwaVfzYAcUEMkuL5uPHVGCQ8YZyjwfnKyyrwsTZe4Fd8oRT9LzgsWahTjhD3zkHwzrTUP6Qr8hnmMoax6KcpS8y",
  "key35": "2VmCyYoGGm6h1cT35SanPkJuro8yxAfFc92zpb5GRaB5AWEkqMeSpUxCcdBtXx9KAFZ9e5cJzP2VJGPDGVUrABFF"
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
