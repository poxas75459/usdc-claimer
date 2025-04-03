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
    "G2MuMpF2UwfCg1ugxzVbYBrQLLJubpCCdGzwKZDeqJRZEqHn4S2zXgXm7vnvmfSCQEFRjDWeiu2pyEFNutiYNJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zre26wysTDEnXHKGVKoGy4RaGMczriL6zGsemzyeK2H8xFmZcHr1BEvHAPecCes4GP9pAXqV6X9iFG9itEq38R3",
  "key1": "2cEj3TfDE99sW4fzVA9x7txCCFy2p6neBnTygko8L5J3S674q26w1n28gt4GUeLDTtmj9G2mQ15H4AGA8zVxn1VG",
  "key2": "5dy6PS7CbdzRi6M94xhaGdRaCfr2KA8TTT3UisEL9YkZgEkKRDcYavyFm7c4JQHnkwbgf8BPxgxJxYHe7CspQd2",
  "key3": "FRuo6Wqiywurim6Cp7R2dtFf9npZzKnoZH5UjWvCDBqf42Sr5vQt6Hy8Nb9mhXaVruCg9oKdVR3HbiwDB1qVcrQ",
  "key4": "3T4wTmi5JRAb31Nb6CchGTFZaf93oHdwJCZRdvzRXFfCK6XwCznDWCr3aG46QNFCpCFAWATMxDfaWZ2EVp9XKSaX",
  "key5": "FG1pHXAJJnif5Cn5Zmw9DdUb1vx7NFMCofsfVouZiTpodeksLioqbcKTFpQ55v8nEtgcPhM5PNt6C4QwAxy42Pb",
  "key6": "3u2GDgBZr2RybgCDLzKucsH92wLy8K58Bk5gBQLt9iPMVgS8KxcxMAnqQXAjj7UyVrN6DwjfPAzVA4FbJaxZQfke",
  "key7": "tq6fyDUGpkDpzmpuXt54ir6suc5SsQYvPACKvfTYX8YQDUjE9R6SuyudKVEJeDDqitnSsXGschBf3z8Tx8rNb3J",
  "key8": "4VkkwkakzMK9w2KSm8fpHVXjm2qACG2eP1XwRq5VbVfQ8QFDVq3H9Bz9r97b6euLHdj1fUE15EQjBYDKf2FKUKkA",
  "key9": "5Y7gq4qXYRk6NZTPWzSHkgHVkq5Pvfy8CPuFuWDTyWnXvEpSboJWnPTEV2DTkQ7rP8RCzGtLxEUtvcNSJEe9QVF6",
  "key10": "62WeYGzFSEKH9Fy7CtLFWBtBrWSrL2P3SCqP5Xw9n9pS99FTnmRmnB8Xci4LL7xaS6EjLPV32rRrgf81tHYPXW59",
  "key11": "rniftNgFJ8bXEeSKjqS8v4w3zrFfimPsVsMMKoZnYipjNVvWUAoqGnSP7UAPij562qn3vscXWXDGZmi2J536fkA",
  "key12": "2oZdDixaeZeRdUCcWw3WqhRWkazV7Mc9zqJMkgKr3gp5hxeHEFqWS9UAfkuuekSVaTmJTachX8eoxPa8sY1Z84oy",
  "key13": "4Zex92nTTw7vBz2SQrrm5qQVr5c4WBhLZe52VK2vp44iMKW2ydkBPKMHd5SMYrGnnHbwAEJsNaRCJNfFSEeWCbd4",
  "key14": "2LUDChgeDgm3TsjXzLETU4yHXBxKtAJRVg3NWUVer9NdaHtcpDbJv8MASMAGusqe2virZYrGkSW6P5iLAqhFN9jM",
  "key15": "3CjW9rPfJEVtoBKSwfqFnYAQhGFUgCWqN3Lzd8U4gXohPip6Tc91TouUBbsJbt2q1gjXNeTm77UmcGCmobbhG7vG",
  "key16": "2BR78d1ekf6FhJqgxrN7poc4KBFuJk8DbeBWTGE4FCFdThAggartfkCmTREtuigqgVazZVJNP84mB5bvUk8S9b9K",
  "key17": "2WuJREk18P8t8eP66QSBtcNybLvJ9FirTQmjUroVe9XzZwfHbAjLrTBQJcULkQK7rKM7VUBxKxhGbXpcKZpLkhPK",
  "key18": "gnkWLAvzXPRhd2q5M6eH2CiyBj9XFV6DG6a6J4vXfqWaKe7YDiKkUBF15arrCPpaJh3cYqYU2qb3qQftD3Rpwqx",
  "key19": "4Evq6sz9eF3uvoBhib2KBNKyswaXRpYzMnh6mq1RVwaS9qHMQLmVF3jkeVFZ9e3SwLubsYzQLqUJekbTbVV7zJL",
  "key20": "f1vZSWLchu4oYvhSFrU1MaXHE9YKxdraRL2u1qjNgKZHwZQw8SGN9B4datUwLpEEek9LAveG9MLzCVox7VHHCdA",
  "key21": "4tXkDb1K3GT79c8mmEKhWM9nCEhq6ETr9tLQxjiZHMcXpQCPf4VFgAwk4tNJ5q6dfDiGgrsGJR9TPfm68UTdCyLg",
  "key22": "2jAzuhhQAqtpKCYKFYVXqMKzfrddSAuaEtasPJhCFv9c5n5WjACSQzcthjcR4PBhipak1BbcpEvzdViAnxZkFGnn",
  "key23": "26hcs7nQcPDjSMxSdbpjPdZqbosd9fCigFJoTLUnrhjaRMrxRcUsPQ17QFTigUP8fgQbScZzka2xsgLbgGKoBGDC",
  "key24": "64KB8WXF4h33SYwH6rwu1Umb8SjeMES8H55r7DZx1WBNmbGvikfW6aGKDbqeKcQzgBBg6WeBpU5FurVn8qSegQo7",
  "key25": "5VwiLwQE1gaafRtTLmAhKpnF1uUF7iKWpLQ63FqequyALoVDHHMyANqt2ZJiqBjoWKDNpKLVCTSYKamkLs8JMr1e",
  "key26": "B2nRkd7UCdtv4cSJarcVzZyqDDULsPC239726xCpQBBYHTcxz5gT13NeoNmSJnHPgHKy3uqBrhJzftRHfy52YKD",
  "key27": "4nQtjgKRAhCtBwRyXN8VVK667tVCkMuzWCiUCYeJse1hG119ecFTKzhFKy5R1fbtbEMsX61bcZVSRQMUf9RgpevR",
  "key28": "2Ge7TkcL8bZpDoNkG2u85D1Gnc2Pppr3XoFNi6KELYZuenybnLC2VQ4dDreYa99pfNKfmbGYky3FpFnFkeugLYZN",
  "key29": "5haPwwmNXitNqEGac4mFebEwDFuExGFt4mRbyudkZjcuRjjEpxRisp6pXo6NZXHhX2f4v3BJCr5uFmUUy38AVwaC",
  "key30": "2zRU7AGwjPA95CU6JKZQBXmgyZhPJfBPWTuVw94PzAnNyXizAKAfmVkj6GQZFX3feTaxyVnapyPSbQAPHJNX6h5G",
  "key31": "4jKCiHt9FkCBHgvzkNgU6AXxKYBdm5hk4wx1xFsy2UwW7YK2d3zWmPu3nBzg2tNDctDsRAGa3EC8HSa2137EMfZ5",
  "key32": "41AtY3t2ACv96J7gYP8YkBaAcdUWqqtE8BWvA9sLXcHdaNRSesMZnbQnwCdTjdsZqLxAkRHHj3utUJK8TR7VswVo",
  "key33": "5VTpznwReYwt4GjUuwVrZ8whAGEGuecfx5SNmDitF65kZgMUCBqnoS6mbyeDY2ydNLM9xYy6ZMX1N699bgeLVwgc",
  "key34": "2TdhWCAVq5nmD2C42uRGGJsPtGxJ49TSPLVFGRP4QcMHZ9cYSGZw3hbW8xNGpseneQFELZKXJq3AGQipc2G8gUji",
  "key35": "66ziA5EgQQ98ZHrjvpzNSDH6egEApATSotfXAW3GXLmbyTi22fXfwNd5EvYz9fNL1aQHU2myhgNHDvxZQxAm5ba9"
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
