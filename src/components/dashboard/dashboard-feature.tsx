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
    "3PEUnfV1VMGLZqcizkhwsfRsDs4mfQocpZeDVbstVLvnikBR56qPCVdLcMUPM6gEPrz3Npko6DHYXURJGnnZ3g3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24FKaCEgBpdXwErNoBXhQudAKtYCndkaDi66G2Sd2iE87MwNMJKmY5nfjVFiumf5n1ezYa7X6NXM5qiVW7bXEko9",
  "key1": "nkEurzoazn4xNo56YCJxvKN45HbwL9sQ8CxVUzSPfS3GfVZ9rzqqqhbGRGmXc16FxTiDpasbwsm3fGAjYoT8qfB",
  "key2": "2WhLttYtYZ2r4hiyUykeNQNMUNjiecBBjc2aAgsJwQw1yDVy7EBZBcGCLkrV74Ea5CQ5bXWZXMCZcLcYCNupaEas",
  "key3": "4zTDA6cGuGureFDxwygsoJcoJddJQoNvqv33sD8FEwKdvD6S2wH5SAG2tu1CxeywMaCDvGUZuqYZzKp3MLZqTaxs",
  "key4": "4wq8oSeu2LzrxCtEYCZk1yajYFUTXDTFkSiQQyC178AHMQ7prXDuqGG7foUHzGrghbujew5AdzW4prZchF5ySjCf",
  "key5": "2NEK8yCX3H72CfzEqMHiXjLHh96Y81cUtfZNZ6Lia1fJRRBwTzJiZ7uPPibdZ9LFzpeDrEtH8D4QEdhvhLUU4rLv",
  "key6": "279667RgJT32sghuUu8vB3p4dhuoizoBSC7QBhhMHGrS5DopXGRQQkSe57TohFc5sTMvqrvBosdfYBAZewFb44Ke",
  "key7": "38vxbCTqvVKzecveYbHtufsjgCggUbwJ88djHuwK3Nb4ffR99SK2bLxzijAcUhHHTHFRG19MyaUk4u9tYmtsHALT",
  "key8": "gpoBJ2mAxggoY1ma5d7Hp5j6D4GpiNat54tTrWJXAdUeHvuDrD9ZTrpw1HZEPsemvVmudhY1LJ35Q7f68GtCH9j",
  "key9": "5GKPjsgF3UKSvWuqHsEDT1yHgJf6bmKY6v5HShTTwDscAYF43DPGj5kULci6Et4qh9p9RkbZN52MoAiFJAjf4Fmi",
  "key10": "5EeXy46eS9Ba7JpxyksvzTRU25Y4i6DBtjhpevQDNf6Gzq7XPxbna3JmAuQpwsgiSutNFcVVEognzpZpfcqEyXLf",
  "key11": "2HsXLLABDxURrHEjb45ft32Gxx8tmqexaGyeiUre3aZgJUoRJjSVerAjEKCi8kXEP5PgGqXa91jZiTtKTG3WBQJH",
  "key12": "48TyNnW8mS6eybBJthibu9grRkEV1BWVLSu7yQHdVymQyEJuXd3QHHAQ6RdZA2q7j7oBoEW37Rp4ZnLPQAawZsFw",
  "key13": "4qzC1Qo564dJNyjnVt9RZhN9EN45eQiqw4tNrxzu3GjL6J2qQU1dTccENPivDEEwRFq3f9UXNX4r6aYviQNVjmCe",
  "key14": "5fonofu4jmiiGjDy6WYkgn9d4pvsGX2vUTBhkDA59KSH9urQVqjncfPQy8kF45f16Vzerh1BY3roUQXnZqCdta1J",
  "key15": "2WK6JpHHtjNYbYhLiRt7k8K3JVEbbrVgCXQtX7b5D8JC2YQiMFQogvrXjhtPTh28NER2XZtfX6s28royDtTyPwbA",
  "key16": "3Tm41ja7ZoiMmcqgxddaAdJiy16ra3ovJPYDeVJ16RBzKx5ukKvp46oKQSmWAaS3Z7LCVK3xVUe8zbVEE6Z9Cc3g",
  "key17": "2qPgipBXxrdW51f2ohdxKh8sXhsjUPyoMoijGMjRkKXtbR1rgDELkBTyZKuszBfGYqXZC9nnL5NQYuibsBZ88HZ3",
  "key18": "33X9idafKaPS6uQz7MemXfCw36BVPPWCrJ2mDmJhDaZSSbR4Sd8VzMajrf6obsNUZhajugtsFu3tWBJFqGK4xgJD",
  "key19": "3wh9YZ6v3Kk8aToSvb7onXBd5UWJC7zV2EKHpTghi6aZ71F7So6HAszeiFLJr3qB7uN3UMNmxPAxNfuNLMRHzs5y",
  "key20": "24BMzEm4B4wfms1ftbYd8UwgEMgFEZ9iwHdNQTEBk4c3HRqz21vTMKYNfaGRxpeBfEQoEddyfA26f2CDZiNh6Gko",
  "key21": "2ak2uV7MXG7mnFJJC4gKPR1kTmBeiT8P6G6Zc2fb8VxLiwfYUbYwELnaVHhfnkExJ4VaCgiH59n1LZQjcUHEqa6h",
  "key22": "5bs6UShepFSsvDnMipifY13R9sZ9cCMj2m9miW7mpq9sX1EKzmsvArzrNaLkze5DRp7oSWmJeonZ5mbrncscUtW",
  "key23": "BUuLZDS7nJ4Lw7GYRToDVeire9eTah4ebabo3jJwWuxs59tnpajndVnNhvLvJWGuwLwYGQf9HspgbUawPkfF8GX",
  "key24": "33yEUQy1tB8cewKN3CHk6zcJvY1BuHRrEKbd5FLCsZyCXs6FqWhnDrHbsqDY9eWoq1HhQ4Eit6PQw4HTt8iDQYH1",
  "key25": "2BeBSogkWsMhuF8ytDkSFtyPsXY6nhLzQncjYoAYS5foKeP5KSJWzLSSKys1mZAktdERwhmLBUT5TLdiCMCus2zx",
  "key26": "5nwmwHJ7FocNbT1QSf7zTKtdbbjdNrjWcPUMri6QyT8XUqqc4dT33yNqoEzMwWp2kMikXV1QV7ghTj19Qm4d1iqR",
  "key27": "5W9axGLzdHBS7Rt4yeABgLdYwLHkn2uvmuXjqcgzoFoAtJimMSKnoz5LvVKfb5GTtY8W9brM6msgd2kVgEExt64S"
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
