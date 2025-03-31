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
    "5CVBYd5zvAVZUVHkSxfJWHbfdPNs7ixR1hwNmqCY1J5m23bRX8FU9WHViEfVP5YKb3Bt7eB91NqbkjrraLCkFsbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZLDhcU7SN7LB19gizN8MGjuyK6paB7cXt1waejxNfULFDNkKaxSfhLDkk9bW1GeXTzcCuHqZsxxiZ7MRcVgx1e2",
  "key1": "2SvUEA4mj4jWo3BLExb1ce8P7869tvQeAKsCotQ7cD5FYHtRkgYqCXjtQZAf68aNvGvekm7hHK3VznyafTcyTyEo",
  "key2": "22arfd77ZVFPAsC1DK8Z1ocXWtyvRCvoafwEFj6p1ECDVxFrR31HPcR3WgjA3TtVW1CQ2U8r4vVo2R1326FXDoKf",
  "key3": "3cYrUsvopP9ZuMALhDu1SQbeJGESfXwSyY5esZfbDsPx6wM5k9jQ4wNsYxcojgN1Y22przZ4Dsj74F5NL4tvTu54",
  "key4": "2c9i12pmMPvnBKomnCHHn6z1xFcXh5WTqnMKkmDEAGsdbKXSfbLzGEsH1chZBNDB62GNB3Ldvn5GEECQjirdgJpG",
  "key5": "5F1XpGrfkX7vcjLzz7etBzHmrvtCoJbDSTbsoZXoCMs9fTUYY77AyRCFjkj5wSwdNdpcXGzd6h9AX3kD7Wyn2TNV",
  "key6": "TaZB9okWA2ESwK57PmxUqw5HBNyQPuuQo9S3eomZeoYVbDKL2PUDQxiJ8ppBejh9fkfF2SDQjZ5ZJkw4HujUtSM",
  "key7": "5HdM2VhhxaqWQTfm8zisGFHkNmjsPVhAJWLtbrWPACZuW41UoHrCikT9723uiqoP5VmyFZ7ay5DdkDAWzvYFjAh6",
  "key8": "4wYTKUhuXjVBUBz63vGown39dYPJMn7L9EXXVFmYT67GgoHyyuHT9kfKMxukpmcVz49VsGUQmTkYT6Cr5noppD2H",
  "key9": "3zV4FGF4Gci5UCLnju8bLtwFfhL2p5y6oNosf18zptMpR9GXMKcQArMqQaPghu4hYEhyTEbUDDnEa6p5GLpvVy6W",
  "key10": "36RRLxCGgFSGmAojRZB42N2TYtu1D4JJPRGouirnQ8WdS3inBDWduZWT5jiTCDKVf9cG2ViMdWYKy1epBQtxWcDK",
  "key11": "3JNPZ9Ap5uQcyGh4Ynpz1oiyXa26EBA367WJxk3nXK82nNbdhsfWXwgBiv2zAPt1nBXDcjZTo85WYmzwBnoT1AgN",
  "key12": "CLHkgVsZpakDFP31iXsQ2nPX3QcTFYWp4P1C4mgAtDRB8AwkB9tKBVRf8XRVzLWcvuZ5oHzx6FhnUL1j6CutMV7",
  "key13": "3AYEph8T4Tns2vsC1v2NgD2ZbPjb1bJvLJmys7ZzsFQHJyEUV6PqfSAc9uY8xorMNhgZ1aTpCEP4uaQGV2uct8Rp",
  "key14": "2yP52vXRg7JPbnFpPM3ZWMBZmSJzatr4fNgQay8ZoZtpD78b3yW9ukFcKBgAw9TEPCmTKjvdtcaKNanJbghJUnFD",
  "key15": "63gd13AAmUrgbovF63X4YMHstSBfKwKXiyJqvFBPda8XzUUdgHH7PyLDm2XpMUk9An5fNikoM8pw3XoYUx81BCTD",
  "key16": "3SH6oXGdTLDVQYRBx6bXjYLoLfDhjEi5iBo6pjRfBVVnvYQgHsWo8maitEQxZRLaDGaNBWtdkpSKkSwMh1MWg8f5",
  "key17": "65SsSABriPbUJHDUraggQFj47YTWEaL23DXKRHvQZDWFh3R1P82KuwBfhP92pxsXez4Notv3rZzf47fkiumJEH5P",
  "key18": "45TBMA7fH51Ed6scFwJA7YMVq9qsTVXDEkAxyt67hWmTLkqMBP18YrCZtwjMASUeULR9FhZ4JEEStDtuFSdW1L3G",
  "key19": "5kmygGkHUTfMLDbq6pGhXTPMUAhHEEBZvhBZhv9p8j3eSNYL3Qrei92dRkDqwo5P5UjQeNN7Jtegyfr1WuXEs8t1",
  "key20": "UhFATJxRLCyt2wyTnbW9TozEJnWocWh3E5n2kJDXpr4X2tF7k3qgPPqMDfPVpQGQxBCPuJtrAQHfzb6576JPmcs",
  "key21": "4bK1s7ZSekmUGqXHwMBu8gZ1v369a1ePZbnjLGpiHPnY3ojgqC5VzBDvYch8KyDvpbg6bsysYCn8ZqotD5BVfyw5",
  "key22": "4JgBV2ca4a3ENFvhfrpLBZvzJoTbpkeVizbuF3m9dsaW2gd2qxb7KGBxZDj6e5WhtiMq2WsBg6kHPAk515JQSciL",
  "key23": "3pvuyS1QvRBSUzcxCk34j6LrS44zy55FTw7bxMmev2boAEPv9GGv5NWdSf8hdjSrSKcv8ZPFyfnPKLWtKtVnmYw6",
  "key24": "pcwFeHoJUZZZjRWyhFsor9v2hD1acZLATFQphpLsGz3rf2eiHH4kjn3q6i8Dt2no5ChmCmAjyzRt2CXjWfYMGyi",
  "key25": "2koo6UBZNZmQDxhmQTDmGDV1AsFuAjbXJJns62TJF4rKUpEGSiQYsNBDNoLqaB6cyZH3ZeJoZoLmu4iJS6tRiJWs",
  "key26": "4R89S4rLqJnMdk71M3RGpWMPPnGpbtFRGMQbHokMRfw1JaxVdC6jbzFv95zZ2t55Nnmc9ZLcY8Bac1kwZyCkYUCP",
  "key27": "3T2hiHtXps8FDfRDCBaSjMeVzD42Hmn44SMwU7MSsNz1hfAZTHndWeir48g5w1RCMQZmChNSktgVyA4r2uLRFwGK",
  "key28": "Wi7RfLhMYmRSqES4XTLz7XZ8kXduJJUwKxHmXxYLV3HBmmkr6P1M3jqAGYYfwUr5TcjuzFuo39x2cMa6zMhKrQo",
  "key29": "2CCu6759KnPbMYz46YkGDJPfcLpuFLg4XwvYXqf4eo3hr4g5rPFgw9Jf6omVsmvVxfQ1k5B51hNL6C3yzKpYSmA6",
  "key30": "4DhSgKcY8huHbowLgyu46vz88avyiEmWWo3DT2eCVbE98cBshzQGDHN5jvuLnqzaHVwjnq6b4qeycRFUb2gg9Pee"
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
