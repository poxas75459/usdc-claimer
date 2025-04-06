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
    "4ftRsDeNqQFq2zFbAy9hYe8Wukrs9JDmnU8yHAhhMxVUfd6TDnaz7m6zz9ej5TP7vwLNKd4mcfASSCaCpTSdyw3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U2gc6noQvfCmW6uRBP9vLa8aaa3PmzaxRyUfTm2zCjmBq1wVEZMQpFHDD3SwTgLbS6AbXQDzZhLsHbQf6am5hWn",
  "key1": "4jhnhTeSf74SzoW4tXpqVFvfRDQiL3y4YVBxh8TCbYLUh2RWbLueB5sKBZBQkRoVG8C6KofE4HhNVSg44arnEq85",
  "key2": "nvRsbprg79WnZE4jVKBTznwvk6XnfbPJ5ZnuaBe2ZH8A6UKb8pgsFNYPFKr3tMVXwSAhLRz4x2bDf2MprtK14hu",
  "key3": "36QJPhLrFCQTzVYSXnwxn24c2xAxatCxdfSeM8u3x3F4WGFYUu9FnYfwiSgY4aYnNtUM47yHBDoviG3tGab2a4Ts",
  "key4": "4Yq5hQWtyDfjjTpUfx7qXjHupJcVr24eYEriLoYUZSr4eVUqUKxzgkhe83xtovopqfhYQnmZrS6xcTCHzNmzoEy6",
  "key5": "4f5FJcHeTC9KCdRJoWhoieZzfPu8eMmcayhgmQTz1JDYneH6uJEwPXteNpCvb5V8tb4c3z2NCUcCMprRwfFXnKJA",
  "key6": "4T7x7V64TT1ngetcyyxhuz1LYCtDSCPRfgaUAAfKdHYaD5F1j81yL65DCkWoZKJRwC5zVCi8ouxfaAhbxnbpmFFo",
  "key7": "6MgJfXvBDne1kkJ89YtDnNCDwrgFDDFqrtkrpxMAeMZWyKxUVrdHWGXmHnLxBtZLoUX85BfNuxXVPYviCVp9Prk",
  "key8": "HWBroqBfB9sbQZ3RsbmNeRoPnGi837wTXRFN7is7oUuP7VVAgvrhJpakQKPAXk3rCHC4KUxKN5bQpi9z978CGek",
  "key9": "Mkb6yFKbSgbCTjX9kL2pL5CCTHZABYc5ZPgdyhN34C86xGtTfp9Hrzks26NKErQkaxzUPwKpAjh56Q2UnLDA37N",
  "key10": "Nr6UtziE91ceQv63SdQj5D7FxE4bkisXncZWLA5TfXHd1uGNVDZJFDr2vQ8Q8harzhuMp2n1Wuy1g6HrZz4peqr",
  "key11": "5gZkFBAotGbxdsCYjFdY5oGVX5TvfLcY1dY2c9dUu4CULD7jJMv9k5p9DaLnezpDXzDKbZHWrviTnbWZeGS1tcdw",
  "key12": "x7YsQZLq5qdUysMyLKYzqacaWizd4pvHE8a9QVy27nb6GMfgVkajkPSKSmfG7e95WmFnJjyYhzy61gLcUHyCz3w",
  "key13": "2oQXDJgh4faKQwWzpeaxyMLJfKKxUsP3fFDtELYu9QNHEkAF5ZDmhoRxcKuRtSXrNEC9MTEfAnVESJ4df3wz9NgV",
  "key14": "LpTHdvFjDHwmgSFk4JfT7VtrYK2C7CWEddq3meXUk8NUKdLi2c48FSGgdDn8P66Ch7AC8ukmDH1mVefNo5rAoTq",
  "key15": "4aLHSuZY3yzE3ktBH9XoTrrhzzfqaEdUnadePTFQueMWgjwkXWgMw3ZLuT3Xj9o3YJBv9u4ovfuYrAaV8LAY3PQQ",
  "key16": "3kbTiqgvftY1bsicTSdg9RKaCXiRFcoeadaXAx3F2fYeAYqxqFnrW8WYBxovcL3eNhCmQVz4hfwvDRE41BG3P5hs",
  "key17": "hMJztQ5zVyFf69A56iYUqcYuF4776CiufBN38CwA9qxhAVyBNVBrarGzuMKRgcjJh9MAbowvgZL8Ei2FC22qpC5",
  "key18": "2vF7mo3S3EQ7g9gzrYudBdmkg8QBkRhiWeUz5CUxQennhhVegvj12Pd13UpEuoooXQAQjmWZws3AkXS9Y8thUsnd",
  "key19": "5oLak2PJziFaZ8PSWo4LNCUFmUgpCC6bBwuAX4EoUzmnoHfJ34ieFM7QANWYVpMtXrD2NHxJYxnWfEBKVZAnLahy",
  "key20": "xdFKqZDvkwNwRESwiyE1P8GabHhSWgW7pb3eDawdJgmbDKJw9VPKmQQpwquV5xqa4xRAv3cdoNDcBiALs66CnSe",
  "key21": "hAtyBUuRPq1pPKVyVWJiaN6b2SUKi9rajHvgMCDrDr1GVyRfw9dCW6A5KmniLCbS9D6pbwmuKZzPjcSjBoQ4iih",
  "key22": "5QbBPyCCTLbWgC7kUeVPkq5v6SQeCezBFttd6xk7cT7choD78RmBLm7nuyEd444gQD6uvoiVw7HbhB4ZbpxjfJZx",
  "key23": "5i66u1t1k3uL4sApCLvNX5cbt8Q4zCvmfj7rFE9gzEXCb6XPFwzM2w7LqfGgRLutuC82gQhP2xT1P6g6rqWQ2ZoK",
  "key24": "pqyLBVYwPDkVcYqPTR1ALaZTt8Zion2dSptFzaHbkafwqu65qUbK7YFUhaacQF8QCxQswXN7HHREPt5Df9Sejyt",
  "key25": "2CJQxsc8BAaPeZ6SxfyGxBbRfyMxsx3bYxDuvSsDqFauMBh9HnZz2Rcngne5zKfW5btPrmUguuU6N3bsChSC6CwQ"
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
