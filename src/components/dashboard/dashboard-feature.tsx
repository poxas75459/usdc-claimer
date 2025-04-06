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
    "538whubDq43hfBMm4MBieV4oWYuP2zt6Cop6JUo6t3pKkEcnAPcnZ3pyCzv87739UKB1BAkmiw3VA6nnaPeUE3GA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FGVnua4C3hQMcikKPwn7cUtjJhuBtgkNxFQjfv6hQosZ4KaJo2N6VLE5AvGWJSXtTMjGK3udznmeA62d1Pv7USA",
  "key1": "5oSebMACANg1cWvtW1PcJUj8UWtjPnovyq2SyVZ2MHDyLy9QKDBgJwqGMwRBsbz4d3vM1YMt1qpzmdpQ6jSWVahj",
  "key2": "5WdQcZ9r95QpCQPPQYR7eNVpGEf7hQd1pd81oANUJTcv8R4MAanvDxQuoWeEKSrjtNuqoGc5fdyhENAKTfcFEsfe",
  "key3": "5zFGcCWEQZMk5CTDZGgqUf269MxghgPgNgv1wB9X71RbaqizergYY8WoYR9Ez435KarEQ5wJh9EAAi1LXDvUDLmm",
  "key4": "4SHkWiyfv2GRVi9KUneHcMjmtD1tL4WjwU9GV19j157MaL2pkYeGzw1fyQFBePpm4qPfqaAECerD574DBRwpgYDW",
  "key5": "5uECVQ1qYNNpW3zJDsR432UpuzENLL99DqvHDVuEDsat2uNzSUwiEkuBzWqvSznenNZrQShsCyFjSCC7ySszJeKa",
  "key6": "5VBowvpEBmdDcGoAV575C89cwnigfHUgZqS18KB92gVFvdHibNPZdTWysNgQKmeWK7w1wWHjDBvAyNgdfeBFaeNb",
  "key7": "2N4DwhCbc7k7XgFrmktALNAHMx6Co4CwzEphJ9fLcHkXiD2r3StndrFo9AyVgweSfFWK2dq8bJ1DnubsmFWHsMqF",
  "key8": "56n5WMPn1TEsyQeyYK9eoE5az1KN2575oKcYiTwtdnYBAZMTpxxaPycNZz9BuHYioqb5yW6wuRJ2QW7dMbRDFers",
  "key9": "2fAK9NQtEpK5boUNzydSKgLQL65paKSBVXyeKE2TWNSBnGRJBWSJnSEFM9ocUJ9TKDuCGdunFE1ZtKEMXhJfdPR9",
  "key10": "5dSsdAqjDW1BVjxwMReYXkTvbZBazbynJaWR1fhK93DUM85tbmdkzeJGnb58gjQ2qda3BgQ3Cj8rt32cNdQWwMeK",
  "key11": "2ybZuBorKKqxrLGs884aPxF1JAspUrg4uKEktEhCajK6mi1CjDcyFZAvm2TC7EoLhAtMCHwAASPFjrtzjgNXDL1K",
  "key12": "4gccyy1G4BMzx7RgoCA2KEQdvCDWocWJCQDvJrg1TXKdep5yc5ui577ttmFpMCtfufosvzydtYdeoP8TyrApLQBx",
  "key13": "5wGc2nTXLhvUukQZ8NMoFgRBoWn25wqyrjmXLfdSwqRkuC4RnK6wVbRdL4yjHgPojaeoFXVTdYUEUeL7gEADDq2q",
  "key14": "3DHyp7J3kWKYfebAy3YwbSAswVgBYnyWFWdTrqqsKQA8dTKR6rWbmU4Lb6bo41yJ9NsYaiGJirxzyxT9ijLe3rQv",
  "key15": "3UjZ2jWvkgpYKQaZVKcrL3EapbY5KHWK9u9hKhT43QkWkZruzMiRy3VFDK7ZoB8YMpxHMm2AWPQCM2baH9P7zpGn",
  "key16": "4UVaLSLZ1bAXGhu9hLk7XDBXkSdWe1zsTm8fEoH1epjy8MSZTV78qB1CJcBcC4yGLL7JtoNJwzMvcS5MaxJdUydu",
  "key17": "5kGcdrWmGWoGWELhrDicfjtexrxa3nbZfi33N2o9uuGuDJBEmsyqQNLGKRrQi15xR2PVUFfq7zSqN8LV3orDqFR5",
  "key18": "qrpEzN6VvdP7NqBBG4KUcL4JS2pUwgAkSYqsAro796KpfrYhXBAmCve8o18KKSjhxxcKH46YW2Tikbg8U4gX8vo",
  "key19": "5PrXeA28hvLiTJ2Hnf6n6UGvuhhVEoJ6Cq5QCTo2U3vzwm9PEuW1Neh4jPkapZd7SJ2JfNxSuP7pN37FrVsu31Jn",
  "key20": "RJUsRdoCR5sK4dWspyRRjmoWVUeDzyqUGsZtbf8eGLd3uiWaDuHi42XEUaqyqAhbCXVRJzsuoBXWE3VRPE6F6iT",
  "key21": "57zN3teLcHnHmtFKtipZ2FRTLu6y5Qsb2ofqx3HXQ7DiWWk1az1uv2GA3obX8e5JSZpimhBLpGYCsPnt1fUgkZfr",
  "key22": "46uTrSkmegBKTU3dEgCZe5XFDCU5yfUj5kqJwWTZfn74jUFhpGPDQnonE7dweuyj1PpetEWqLynLaNVCbFNzT4tD",
  "key23": "21F6EfieJYUJWh4UAh5Z2imWiEkWK6DUQZwKeQ2YxB6Ya1ZLQYsX2smkUp3CiBSvJ9oYLdPkUstzbRkdoBCCX3pw",
  "key24": "2P5vXzAa8oydDVqULb5RqETUSjivggMDkUUyTpan6CLfvdSvhRjk66ycwk26jmnFoLjgZUB5GruTGmzswJ4TaYaA",
  "key25": "2yZETwphFSr3GiwFDKQ1tEPMDkbshx36nWV2tAKLsv8H1sXc4T81ddMVqxHt8HYQJhAk9ebyQ3qHGWQUXXq155io",
  "key26": "4KRk2dYkWG2Wb8aJG3BYiZiH7n9eSQB4QtSqDgF52iX8a7SXPXUJqL2gKZUCBtNpohjkVfsgmRTvZ7ZvCuZJzMjw",
  "key27": "25nvEEZNssts2RiRwQk5SKCqXQnPEgcb71F9LFeFPPJCuHxVmwgXrG9rSfWcYDNxUMLKMgYJQbtbSqDR7BKTvaog",
  "key28": "5szp4szMw5zYnLJKGfaSAvpghmP9K1Tbud51CD4qGgXXPxfxhHYV2uEk7pMekY3wKiQoe3QNxiptrZk1VWvdCmBr",
  "key29": "27reMnSZy32Ryfu4QKSBHyG2PXSXHNB8Mh8b7Hfq4pLRRQSNjBhLKgBnsRT32XXG2yVjU94YZ1QeJYgRkQrfEmmv",
  "key30": "3NYyX48c69X6v4niGosUk6h4ZiFrZaCquwUBVo1nEvRTxUcByzPzpM9eHGKEyphvozWMJWjFFXuWBjMgwNSVVs8C"
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
