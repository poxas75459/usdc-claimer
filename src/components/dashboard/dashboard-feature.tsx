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
    "SNUGPygdFprbKgb3jKdPcUj8hzCLaBTEUUTXnLjWoZxUL3w3yaEZLrwqRxt6ugc29xb5U8iecHhkHsh97ixw7x1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QUNBwds1E92Xz5ZQQLzEYrG8BCzwTNqGcrfDMu4a5c8S8FSMiWoUwtPa1e9nSrLczN3k32b1kyg2koWxHEjbTHA",
  "key1": "5i4txRqTkcCW367z1t86wPrb4ZUSnt2dUSh66tTNkznNPhv224Ex61xS68MxomSrHwENWtx1TpmxzV85Bdf8dysK",
  "key2": "4UkGp87DFprNKMAGafwxsDduxFE6zCs55zEEDzDfPNSqyrHUB9vWRfqamSsqqKZ6RBAaVoFXZ5qKvjXMVXSKT7z8",
  "key3": "5tQcnFiCQRAmfeq27CMXgDggWUYLhmfFE8FgpBdkWfHpnTe5GHJ2fCEyXZC3gKC15yVddPeUrFREQ1sotwYBRSyA",
  "key4": "g2MVF4a98nK5E5mvrsukU3BZKTrLUqYxVdkfatEAc6PkgJsS1wpmbxH9Xb4CNsjZHX9JM6scfCYw9gcSM8Z6g3E",
  "key5": "5BDgqdL9ebNvU3h4FM7qxHagcBdiZeqS2akPJ94rtJFcTTDK5rTSQ1SxD3Wz8pimoaUBRQnUAWVpvtdgYXVzaZFo",
  "key6": "5LpyhAT9pPMjoyv6jaJ1j929oJkPJM7j485KTESH4NEFinosxLaC4XBviUFPKvu93YhUmziTEsVt4AQsUN81f1qs",
  "key7": "42C9oXQFDjfmBH3PRKciHE6rtkNDDiqUbTrnrxpcZZAshuXLyp8usoarDsZVrLGDjEXzXdGHJErpT2RegjoNaB59",
  "key8": "54cmrBThYpdzsuQ5yVHuKCaJo7suhyTgXBbdwyuFDXP98dtghdTHL653fYNKoP7uQuQ92qSAjX1r42AoeY4HCBnB",
  "key9": "3DeiLxaHmdugzwAfVgTFe8bAEGABtwR7YWkcS3vXUsXLazaS8pBM7Z8jQeujsCeALgDgqt8buFnDQQCZJLgzyvB1",
  "key10": "2rSNBJUD8vkQvwuXP5D5FiWZTAMCnFWrkuEAr3EgALcQEzyjJv3UqFxdRWuDfJaEuXhXKKwDpaBwAXkuUvtXeead",
  "key11": "tweZE6oUK3TWQiF5sMkWBfugbF9JEUA2pyyimyRp2cm3hGk87wDRZAQuWyzikz4tgzWAcUdDnyE9Chp7Y2g9fQT",
  "key12": "2KJabYWtxfZJoyUmjuojSiQKArGyp3T9sJm18nW7QHbCP17CMuxHWYPY1tYw4i7eMY3RVT6Msg4LK1KaHU4q718A",
  "key13": "L3rAFGtdiNSxJ5PQtfR39jHEvrwCDjsigUSGwx1C7JLZbZsWzsdq4znFojEpMZtJEBbzQf8HJBX2yXwLG529fC8",
  "key14": "3ci4cnUKsbYqa3fuYNeap5Tjy6zLttVYHagm1FTk1BNpbFzisdmm7Th2CqSv3KmJSuCgiruKAtBkAUFHMBAX5gDA",
  "key15": "NKY35RfkCoXxiMtWjkrgfzPrDU5mK6nPD5rpSb7sK95mFaHVzXcW9e4NtXqkJR5QNWZHNk7ZcwDgRi9RueF93vY",
  "key16": "4Myiwx5YmHGEnpCJYtYvysV6qtj2tDt2ewaTWXGNZuMd2RvkTi7YZ7ttWWrGp1VC883Wn1knffpiHjsgTnjeZHFo",
  "key17": "2UkWshQoYyzeRZm1UWQMwK24Ek97bERXNGFXF667rQ8qBVGbnR6AYSNRK76mdPwwNmmTP32rYHqnpBdA3XfQRLR8",
  "key18": "2DgX5vWjxBFCE2h7RFrNYrWN6iU6iGeb6UaQ6GDCMoG6Y3V9CmTSiEB8qy1dMPGYnG1obCChXpJBVwbgwDbSQLsV",
  "key19": "3oWzCqNHjCa6Ydkt1SrCGC8V6KcJAvXEV622FePxymDkixedWd2hmvEJjWebBnmeN9ksTkW7UG95msGsbNYniGMY",
  "key20": "RZVtUbD6Ri949xaygnZ8eA5nJJ2gX2TnzTGq6j7Ljff5hNgT3SJRPoNr46mdQfDt3VuyBFQLzbxEDHFeuigBY9o",
  "key21": "2TVL9CYskog8PdWLCybaMrAaHGd9fKiE7cpgBEaLgFX2DQAVsxaQx21RX3wHVFz3CYL1yLCryBsbCSLferAN58Zf",
  "key22": "32EjcPAKoEAdQj7oFyKuqoPSKQmmiB97KyAboEUdxSnCeYusk4uZDTNBmAkfSp6uaMbJe3zCoiV5B9rdFZhueFJU",
  "key23": "2yZJbbJ7dh85q4PESj9hrf9zR2uKxLQbNmFBFsDDVmcM81edwwbQ8rfKEA9vWQfSWXJFBreWNd4RmS46e859Gr17",
  "key24": "iKoYtQF1Pba7Mv7SG6jRJBFwkNSK2ULcLtwx4ceRAsfPTKEAoWqJHBpBEhDo5S3x3jP6b8j8bb5Vz6MXRJDQmVR",
  "key25": "35qmPV1zjCBkX2RLma8zYUJRdax5XoneaLh31a1Gk53xNBp9bwUrrWSxpXX68oMg8ELT1rgWhebwdgNRkGEy15uV",
  "key26": "29jVNnJFwK9MU4CkCYdKV8kT4JbBMuRUCpkY5Mh7VAi9jz7C6f3iDgeHNEpkZWHRB1xPZcTud7mFm3oAzAE8bFuX",
  "key27": "4WTEckg6mzjvqsxhDZnnPDxVpv1uPmAF6ythAwCoyXBxHnrfNSupCf8gxeWuYJsyUBDWFEJ27hmQyfLkcHimbWAX",
  "key28": "5gVKmAqngd6AaAU4WRSJiK67NKjGRHZPVKBZprD1vF5NQXpcU76PaZmXVYwLFPf7Favtm1YprXtTaN2oMcG2fD7J",
  "key29": "2Pu1oxyGVNpqLgenET2DR8HjqaGoAEMks9AyqFVeJhcCJvbiFvPG1mMmSgXeKijUvBqY5fP62f1tQYGivC4ZMe8r",
  "key30": "4rn1e5oW9uzQsdzWr7cL6g6MbHCyzt825ssTypYYcZsfe5RBQueeBroAhuaRb8KWPp6AQVgXq2dyw9NVmecp4AfU",
  "key31": "3ygLwsGFTzUuVkmwKG3NdPs5nHLXiqmMQ3wYKx7iChxgq6pLDBc8WjWmL4jE2QwaFwEUt2dN9tW5H2KXd33n429s",
  "key32": "3MT2aT151xiKe4EBuJ1MQhqYsFst9QXtMSGZWNuaQH7geaf1Re8kZPYxWzedEdLCgnm32gDGHTQmwQwNAGSbvrAY",
  "key33": "2JH4F2WJcn2k5JJ7EV8ntmyrtZiJuiK3aVdiA9cL4EbS4f7skLiwheEP6KQd9H5dQJ2bpkaAJXUGT149H5eY2h4G",
  "key34": "4hx2CU1qtF5FPckSU4uUjDQ6EiAJNGw7SNNZSzxiP4m2SfhvuuRNyrYStfCZCV2NmektP1GGnhxJu7sRrUZMCqRQ"
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
