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
    "5UBsfCfU2rHGGhtCEBQScN9QSBE2tTgUBkAePRkU7MMpruU2AaSc6P2BeJHspPkGCrHufc2b7L1rUe7aUdQ6AP4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TdAiBUXXfYH4kB4zSSpi6dyFxY8VnQ5Mn7crQGmx51fURGQmXPibsdCq5kr7Lo7mVNDPUcmv4dvSz6wR9n6i6s3",
  "key1": "4xWTKaBg3zkjv6bg3JL8823KBAUnTQcrzndz5cqzzjYSXZBZFiYZaFNowwizgn6LP3v4tU1HtD6e5rXQ9cy5YgFj",
  "key2": "4ZCd9SJRsPihtmotU9JCAaCuhx3z7aEFsw2qQxmcD48LvjqCo9r8WCVq42VQ2J7ZwGKjpJLPJLz2u5yE2C2BD4Rw",
  "key3": "4tGmKR2LaCKxidsoddoc9PLXAMkc4h5p4k21XnsVGLSgEik3wdy25xmzpnBsb9HvNtEFuuXufPQ6F6TFnhmUnaVZ",
  "key4": "2wopRrx6PGgUwLWzgfxwBSYbrR454ZGCN5JoT2oytd2VT9TiJ9n7EfMRrfroWYruF2WJ5JWUPay1kr8Dw3jrxk9T",
  "key5": "2dn8uYht96QmgaXQXAe35QiRtPVBJpWE6gvuSHaMQ8NMigKfYpuGajwC8XfaEa963aGkkLPibD9fM9uVsCdBHgY5",
  "key6": "52YkGZ6i7z38n4j1haJBchEY6Ny9tkGq5H5vNqfqRWLjL43JjXRWaPcHeggkUqSpVLHozKJFBKea3Sjecz1UzqaG",
  "key7": "3BPsi22drPLNzrzFEBZVC1DKghVQP2bhahiAquhUGgWQiZvVs212zqhd4nG72WkrmDzrAXPz1trJEF2BVeXZQ8b4",
  "key8": "243ss2GJRnadaWN7PdytsRVS5smsiaLaW4Up38ZemGp82fJqRCU7TskA48A4DrPxjQ93zf74VZPNTokvN2P3FR3P",
  "key9": "43qqCUp5ck27si9AFF1ysBbVAxHu9VjHtoBSXkkb5nF8br9mPgVgM2VmwJ2twXFgWwE6KRHbE9kf7859YEY78Zhv",
  "key10": "54MNpTL8XauNSBqZmt9cm4c3gCbRpNHm3SUvq8o2a3qdjm8ebmWTBjKK5mcQBzLFX37MuCL7KQP6Uu6yqpfk9mWT",
  "key11": "2kGFxYr7dN3iYXhgxRXympfB6xTMLmAAQQy79mKdeSm3MNFDbWVDuW2KtGseepBayeoThPCZnzF8DF8N94EPCxEM",
  "key12": "RyWpc3mRt23T7sqF7B7a49MHXLh7RCGW9DC1DbV5JFpMTo5paTW8B5mcPmtLXjfzyQZzn2TXbHNxVKZ8nWvN9EQ",
  "key13": "54Z2a8nDXxts9nfFxVMZGSb6tfKowBtkAVVhTsDDE7QnfM3YtwAriiscHBJNgY11VY4T8t2bGstqXFZbwp5PGWy",
  "key14": "wXxaDxYL52C8VSXdbXztqQ1nTDZTfLsvRxihuNFUWkvRWfswrUDaEbTMMvgqZJGqnN1rqajfsBFjCBQ3X6WV9KJ",
  "key15": "3wsfFJX5VmUzQ3RJT6RZVhwKVvWGamoV6XLCi7pqvTUADZQfDKj1pGq5Y4MA57C9dA6YCwANSzFEWjU2EFrF8zt1",
  "key16": "4bRoptpXzeVhwPv9S5sK53hgcKch3vuPxnt4Cfrz6unDV4mJNFh38GQzXJxZb9TKUTPF4JGssVRdcVrGUXYdrQ3f",
  "key17": "5LeSs2BMDQp4FcrnZrJANsXyeFt4yZtQ3tDX2i5AudZsH9tqV5KwokabVvqKApZ86JHKt7KCceJE4PXccnbQqMep",
  "key18": "RGTscKoGND4EKerAsKK58gkYk3SrN1PFjaRgP4kUmS76KryRd3hFReTnHc94GwBqmMzgUsUkUeb5Cikry6rDqfm",
  "key19": "4xZZp47D38wYsDZkzL1i1hBXArzWX1ppSCq7RURGCsouC3D985nF18Xqz1cfGUYE2YYFT2gCSsw5s5qKkX5wf7ER",
  "key20": "4yDt2XjZ9zYnqz2vBkmM2thWeMpgZzNfSnQeDdHYtZy1StY39PFSv7pAfsNyHSHvNmXKTbxGNJk3jWqFA3mLdtyW",
  "key21": "61dSsBgo9MXuhwrbUZYZVuETVjwLN7GmfX7FQtEDb8dVqAvhkCUGxRbu1XDEY4PEnWsmNHk9hWApwJ8ztrmNL4WK",
  "key22": "Jdjuhr4yANDxvQKRvT7UqN7q8AMo7cgbFebEH6fYsAZoJJRq2EAoQQP3F7SeXkzEtgdHky7v5cMjmDYbcj82W9b",
  "key23": "5Yp4Bdmv94JC52ZNUuFVfbo7fMbXshF43zWofL1WYfi5VXdUTrx3m1yMumx5EY5R8nbyYbueZZ7dbuZbdWAaG4Y2",
  "key24": "24CghEakekQvCCXCHMY6bWKbTv3DPYUKWihVqthtY8LWphV8Qrwu9DnirpPdTmMTogjATnQU3dAfhPnXSkYDNSqF",
  "key25": "4kUd9uM8fHdrUzVnaYtEHkcHdppm4vTuXJNucRxJZavTjDnFGaVqKiWT82DkpsX9m8KoSZWtdboFaQhgAMtei4J",
  "key26": "Z53gmpb8sBb92CijFHLBi6u6codHxNZkz17tm2ZbyGmzcpRdLZae9oR8tScCDne1SwHqUK4YJck1XAGng4yDs85"
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
