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
    "53JY8wQnBB2bZ2oTXTiwUgJsh3kpF4Ybt2uDBqijowovsLhKPVkqXqJZNGbtYLy8CXBF7SDsGhJ5YmzmBZ2fp3YQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qHEzRD4KpWJvQD1YGrUR8NTHK4EV5y6WEKEepcHRaLcaWXbLRZ3haxMxnUBdGhydUuYJfXzEGLY2P1KWKhDUZVp",
  "key1": "1MiUpNV8DdYWnA39sbHxavo8s4ZTWXupKgru6BhW9VeuQQxeGW3T96dZ2LaFUHrHxrUj2e4ZM7ZYfAtpN6C8BDn",
  "key2": "4Y9xEauWFV77mvaTQ9DFduJextqtpQtAKeNJWbSGVDBGMu6ViGVSMthebimsbter8r1uSpAiN7STKpBSHLWqWnuE",
  "key3": "2yxoJ47gTdEupvnuDFBPiX59qsxd5AWSiQJ9bm5uAEgqzaj7wkhSPSiLKhiyC41vx1LBmgeR9VGhtCAKBdhRmJrb",
  "key4": "5ZvTzWqMuPheQSY6UBDv7Tbhu2m1mTnAs2DNT67BAdjjCXJHdrJSKtREKZYUDT5HMYPRtg8ruxAZPqVKZzqFWzae",
  "key5": "5xZ76Uy1VMr5MH4dYmxjhRC3bk8BTvPbrjsZAckvV9JDceCYYAzVWTtKEgia7CecCX6qx6mQ4ieGAnhD7JwCxEtM",
  "key6": "5isi7tyLzrdNrjbdEbVYSqauYinLYGMPc73YQnxREFUdwL9rYqukQkJwFySVZca8j64UXaAKekWN49SDYEvLvDWo",
  "key7": "66Eb3Ch2ej8mwPVVGkTGTvpn8JeeVSVASat8JKuMMobiJdWL9CcLkaridbS28cEy2AZm1Y2SEv9QVbWRThGprQf3",
  "key8": "53B5Rh8qirmbrmFGn1Gng81qHV24zLTs2U1tEEwyiT7s8Ami7fnWikg1KFaxgN69XABCzcD8Wt793FJK1kF5zaYY",
  "key9": "374qXHK9j6UoKDtcYcB4AXBUCUWHqKJrAKafdmGHXKfYRyWWrjLDwEGq9mDwTp59f1kT7fHEcP9WSV8s3YZDHeDo",
  "key10": "2KHRorXxeGgnc4RTDsWP484HePUo5erunhSgNAKh6nVWM1p3WKBFKXnzFNGpKNzi1mHDb174qetBokMygtnCKVKz",
  "key11": "658LNvmpGyNLMwLxacyNCt9zjLbJQiPT5tm9zhzmYtk6ug7q2qyi2xt2sesC314DE6595hAJan1JkpHExoXkVsJ7",
  "key12": "5NP4FFtuDwzi5cQwi1gdhtwPFWKv6axCaoPoMyCNHxyHx8yGZmMjE6DUUDDgYoamUy2K2nWtdj8MWK1kXw9YyNtP",
  "key13": "384fANY7w15yiwkuNWyUMyA7TjV7YPCqEqqxEBsb2bGuhNHqRaMLokiguXcuymCDS4Pm2xnGFk62uBwcuhobxH5y",
  "key14": "25AYExztDKSVQxfR6NAEqhXQy6gYaBMqZe255wCcaLGT64HyWfa2f5JcbjJ2TCpaouAL7nKTwrBphuxE1QGhXmA2",
  "key15": "KJxPkEmWqn8SjxEunzNH1fPuasqsZbswATqTiNT7XNqcpruxPenuuBKYqgcacQp8QBjYm7o18KNqyKo97ekm53e",
  "key16": "3Rsq7fA4hjpjzgWKvdkgeR8t75PeUqWuKP9TbMQRik9AA43q9sLcdGhxz3nMFRbRyy4kczm7oCEeDZaXB4Be7ZY9",
  "key17": "5qzUXgDrkfeu3xKtBc5rGjJdGGvWBbigRLKod9Ks7F1nGv1ybhPSgbjyyC1KcP8C64xkhPqPi7aP8Z4TeHWkM3X8",
  "key18": "2XKJLpNRRUtMEkmgikW78DhKVbeJ39LK8kYTPUYTBngTv6zbMYbTAsN4ra1LWkEFFPtpYXRBEAr2oSwALF9AodoT",
  "key19": "65DM7ieHWRbukjjjumRZgzBqm1NJxRapX1KLg5Ecws5Xe5Qaqt8rDf8JHj9qhxSVh7RhpqEL6oVAejk9FPMwpqcn",
  "key20": "3BakctMHa8U2khFokNwRGjLiUHgeJmvcKUHuXZxjES1rgYXcKTZQmPd8DSvPNMLBCM41oHsCsRVVWACqvBh3oHUQ",
  "key21": "3wixmyD6tUCPyMApn5eTHy3W9kU5AjsD7syVxr7tTJuRzZfXK4mR4YBfy57Rm5njAtuf2hVPDKpWDTtSNYBTiFij",
  "key22": "4dTmxE1KyvTnSPUKLRujzgZaPXrR1BFUqEDJTVqCqpRy91kms1cmvJA4gUzzBhcd12eF1ewKSjn18R1dohDgdA2q",
  "key23": "r2VUMxLrtcAmevCbFukRasWXPCXrKp2VQkKRaS5fUeu1PSpH8QvjVnup3C1f6HTLMZzFxT2Muvq6q943KT42L4B",
  "key24": "4cbZES8zHUCGEiFqXNg13VCRn8Ztkk49HFcxwz18YRXiQx94Eht6b4P3SPw6EGBgRtfbpjzZHDFfmcauEKoUz9Rz"
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
