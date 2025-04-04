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
    "5sKFYPGSGz3ymnttm5yzXo6YsN7VBqzoxAZVdKU8fiAcZbKD4cMJ3j3F7txm6Qkpjj8zCxyrs9dwCNLtWvAbdrfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X4gyd59LR9rTkF9emR3NRKuRjzCEzoewtZT3JTs7KmpSm1pv1EcthqTQYmMYoJyd1CToPMrRASXuboTMHeYM9CV",
  "key1": "2U5v3kQXThAnC5U1u8ca56vosmjyk1bHmWYiTnpFYFhyys4wKKM7TKpLkiVqUtnNGEz4BfKhBAoK63WqEYZzwNjP",
  "key2": "MngfMcW9p6FvGTdxkEhNMHAHgSNz9tU4WNaiXwwH5McMsZtARM2spzGAHZ8RQAi6PHJzWLHd68eULG89Hw4RsBj",
  "key3": "35Q2qJZX7o2o3gNXzkHRiEhBD9uQ9DVBzqewVs3AX9u7VVx5zwUKqdxLq9hFhfinE8DxWjYs5aGgbC2xqe76rKGC",
  "key4": "3fomLs43t6o4sVN4FQtZv9Es77Js3FjsJQdQGhr3rS6Rym4qJWAUHSgjUGRpmckzFMHs7DmNDtgZ2RrvLgc1jCBp",
  "key5": "2YWYNBgKczDhQrJsLAvy55Mw1re5yTV87xfsumrVAwrLcsDxe3soxMRkKNmVX3dqaD41YAwdZWiD2K6dRb5PxW34",
  "key6": "2dNSV5rCzxdgqvW34V85vaQUAy2Qd8QKT3GmVTMLGJL8oSJ8k7gM8BBaL3vZtLBEQXxdVRZNwmVm1TR2W5ietW5N",
  "key7": "4whvuhQx8PEt7pr6dW5zUQxzCL2oW5Ec5XXHGJ7nPB8HNGDibhNULk2K9BvmHd8WStGSvk7i4VEKEcop8Yzmzj5s",
  "key8": "65ADFC6XkKExKfd1Sxk7Xf3gzADwNNhj2Mo6psSrkaFjsEVzucu3mHGNjMHUeFTMsZpvHHZy4yPJHBzEe5KBsQMr",
  "key9": "JLnZLPaQWaxotcT1YLbWHG1RqAN4msmfjo3M4pcgzJtST8QDMAjbwaW4Nbu8UnXeKFUPvnd661g6orYPMRwGmpc",
  "key10": "2mJ8ampc9CQAYamT3ECGDWqAwwaKF4W14oFc2xWkmCzd9vi6ffiez93QCM37QdVch2JpbEquPpWx2VkGRgcgpAGZ",
  "key11": "3pQKR36ndGRRFNQ9UF5WHzZXV5J9anTs29bDnDpLHK4Lz9ikfcpnLkNzokW1rnp2P13VD4M7V3PXyWU2XDB7R5MB",
  "key12": "5vvSMGWx3LQPSJhKykMjkJ7WoPDx81LTHQqKuMeX4eM3eq58wvCy8S15q2noTMe5oSBu8Uu2L35KSEgV2EqyNBQF",
  "key13": "2tdP4HMGv6r6owiUUgzs8w2WWmZBoYYt8UJJpjz6h3rmqxA9up8kPih2K8k1zaVr2yc5GBDVTiCr4rkpHZaK3LXN",
  "key14": "JVTJwMYFV7ScZxxRSD9cwgpRQLSSUzGMFQ356xYzbGhNcDJoJt6YEEPxvxHnf8uQu5EE6xaEwU3xynHSYY9RH87",
  "key15": "5GryzC82Jxok4SRWHmWzp9U1hhE1ZBM1swQ2PDUwLH7n5uFT8F8gNMfC6hUyRMsaPedZ7MPypNTtcAeg9xHmPTwz",
  "key16": "4a6yTdJQGTbByrmRPsha9GWt7fE9kP6X1mAkFTmufvFkRpANYGKPoQadn77GzWvUfPNF4eUzgKr9qXxPwzAk1eyJ",
  "key17": "5AcqLB3zj4HhFBfjztuqV69ymx71ntogv26PM7AiXgjED3CgFqDzctHf45U3gqFyHWCAq98DekAV5XZxEiUwBxm7",
  "key18": "2L7TnER7xb9mebvXxzcDp7aSiqxen7iHgPzSKnwkTaBfj2MWbqbWUf91LYtsWLJwbeupiNSvYJvzxFYRnX2hseGN",
  "key19": "56vzEb2xGmsUAFjBgAKQFke3o9x1n5dgBoJYj37oDucytTc31X21q3E16T4Yvdhj6q4V3ndKmVfEXBSkndLNGjTN",
  "key20": "2XH3bjJNUrfyZmcdy3ptfzdTXK29B1dg8d6c3cED8htaY9HsHcpnkzWeQoCqgsJfzac1sNoEGPuGGic81C7Wa96D",
  "key21": "22wggZiJh2GnyDY8cWX2CGRmjvkKHdBMPAfaHwscVdz8qSUAErNsaJAvozp8ro7VWpsk2s6vH6SzjG39FtWtHShz",
  "key22": "2KaompPKF6V9ZWXoKJUdi7VJPMSnZSSG4nPRUYyUnohZDg364zHq8ncWANTTbS9Ph5kkWt7ajYX4takq2FrfdN32",
  "key23": "5zv2uqpD8XYtXJNWSX37neuWvCF6cC2towSoPP6s17nmkYMaBiKjkR96XHAGTz5BvTmXjjgRJSFMWYJQCzGYpkVi",
  "key24": "5MorRFXou5GkVJV9ZCHDYvZxgw9m9h67sDXPv3eQcrVuPLjnKRazYVfKmoQdfBdmXK4MVC1eM3ysPvWYJmsWGiaA",
  "key25": "39ZLYVgViTDe8mY6EF8t2HfMQdUPnS97FsTbs8Xm33jEM2KomzWhF3dkULsPSqNJ2uVxuHt4wUtqZrUZR4CrzJmA",
  "key26": "5fTRQS1SqZTXBGyZ2CZyL7u3nAwak38ADT2B9DQs77VaqsFKJFCzqXMBicgswSAmzGNhNV1Q22MWSHRyp29dStJ6",
  "key27": "3znBGHnsgBb1QvCvyNKRyF5FxVuaJ5jxz1aSRH9f6kPNqbL5BE95xnJJ5g934ZxzX3qwCYyVEifbLW46sZ5xLFoY",
  "key28": "Exafvty4tpwk1mkPtbK7paL1VnYD4jDyVvKv3UyfZMbHhxQXo9W7eQcMJoRU954YkykSvtZJYPCA9SVn6CRopwT",
  "key29": "3jEcMsukfephNy9JHoeK7PEKqcBqCCAD4rVa5fJjevStSPuvBeU3jQtiiCz1gBDMtezsysGYNfYscDqFz2rgeVLT",
  "key30": "25SRdM4miJo3sW8YBWVEPtT8z2AeUdXA2MHY9eJnRHWDLbc93mBNdFJrMDp3Dt2r9gaNw2YNg9mBHz6r8UtnYGWw",
  "key31": "3XmhKxxaUysRBjocLoKJB6w3bV7B4PQRQCDDVw5LxRzMUvwGh5W2dBk1eu4XiDfhhYsy3rssdtbW4kxRQNWzxx8a"
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
