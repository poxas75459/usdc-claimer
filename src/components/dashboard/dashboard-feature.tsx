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
    "3VrUe6At11RZyn7Jr6kx23o6px9Xo6Qctjz4x8Xgdn94Qx5NUDthUgCL46aB3bWK5XwbENFEasG3SEGVxgcv2Ltc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gV6keeH5Yw83p6hZxE4qY5puLL79jiABDPEnd2CS27GS6gxJXMP3VczFDhkeXKTRnSu9aZAzGMSsKxfEcdwmjML",
  "key1": "5G3F28pWeKZ4YhwZXfPjkgsTTBHSXQX4YGcrf4mGSh9UUz3R9NhpQAn7robgPPiMHJiHsufnMzorGdM57ycnD8EF",
  "key2": "5PnexUGvtCVodVpamr4yPVzqHmCwvDRHFcpjRwXbH7Ke4zEdoaiR9RzD4Lvs3FmBmhqF4zNBGqmZr9MPvQ7jqL2E",
  "key3": "3Q4kTm4KaFigVzUwm8ihaVTzckHYRRmYxHNnYNzpk23P4rDibEMehCQzrFFdewLpiEnGQkEeH9sMRMvneRrBTE5F",
  "key4": "3FJa8cV6FCwyFxRQU4mwgrf63gR3dPBkrrTjC1C8TB8LjPRJs9gqYM4CUkyWrcX9tmKZQiCBHxnku5ZiwvFjd41",
  "key5": "37VxFRmEzSiVNDZAhEJWEzQZ9AzFoNFYCVXshfvS29wZjq94XNH3SKYoESSf5412wVihcV87WVUdmk8VWXMDTGZA",
  "key6": "2PrSdF3XkNEjhgoTsNP5wZanU6x7ZLimNuz6JpodVZtqfxvfkTvjGW98vsL2j2XcGA1ovWcDyf22yBsVowQqZ5Df",
  "key7": "XiRdEfaivpkH5AzYeioRUTxyaNQBwMrnY2yZXYWDmaFs1LScrhasB7oo6faa68ca8TUmn4vhU1QPRLYi8xGXJyU",
  "key8": "2dc5bHFZpRKLxscdXdkzE125sjrBWHvevnnr7Zdnp1YW6Tib1SAevscuP2BvEvqJhtTF94u5pUy1pmv44ggDJMhf",
  "key9": "2MMN93XuN71qRH9RNzHQ7KjuJbCTdTZepGk98MdfHZx4qjZTEZXjrEy2HRCsQQuD9BJNcsjq6ATarMVYb9KXxQwd",
  "key10": "3dbJEAX3T4R6Krq1SQfK9TwjvrYnce2rYGRPode3Sgkziyc7AgiTAWmRvRHfcrEqQek568oiTueuXMuKJxG8Bu3x",
  "key11": "Hc9Y6TLPXJHxdUUgqNU4P7y5dy7dFP6xGkSyANYDaBn57KR6JzHtUEYma7DyAFrmkPnmz91vwN65DjryEiqNcz9",
  "key12": "cvRHVcoC2sei6RnDC1hetWzWDNjom8PTD1J5Lccmmfe35LtXpj5bbCsj6yicscywZqRfozm3fdMmEzWnGxrjzh7",
  "key13": "5P5UrAPK7pUG6oUx9x5f8z1LvNupMnLqLgFBZhH8gJYYLUSTQ7U7gb2mbsVaYA44nGG6U8HTYtWC9o7Fe4AwU4Gu",
  "key14": "fGxaPUopSJcLnJPJdqazAVxfqHExz5EdkpuyAmCEtHoKuvSLYVTs9NkMo31peWNyWZvW451ZmqfSeDp73vNJUx6",
  "key15": "5qzz36Vwiq5Rf9jrymyZgdLexUEgpCEbKYm7dTRy9NzdqUFJJpk9rLm6MRwrsf7Gyukstp9Qir5fR4ZzwgJW3Fz6",
  "key16": "2X78sULy7Fs8q3jZoopGd5u4GhNAYJhA2oy9BFGV5ixUQQFybiPwVQ4tYzy7mpyovUpodppx4dGEnYbkhiBGKimE",
  "key17": "2YapztERvReixFkZSey62ioFDwc9bNC3pxRXeTZ2VbHawgXcvxXmNHywchQBHTckMqKrkzZxKd8cpDQ3sa46EHHj",
  "key18": "5NxYftvZt1km1Xg9AQdZSGwa7hBCJpSsZLaqVDchtub28cCvdJRJ4RYMyvowXnp2ADRxVqDTQUbrj5wXscpb22q3",
  "key19": "3uXE9s5NZE6LNTSfAntuERZKDT96zRYjG1yEXvo84gdcTV7m5T6KuQ2yhZu995Uu7kdxLggEwTi7hf1jBm5F4ZED",
  "key20": "1qXgZe9bBTJAtFBSanFkFxUtbH28YFKZ6ocoMEv3iPrWfqioogRx7pCSvqsww6EYFirDd2vPQ256eo8aBu7g89K",
  "key21": "23FSdqX5vayE7Hr3XUc1DLdyyW8y9oXaxzwRaoizRZatfLaQsFnB6d6PTeKLgmpK1EU8XX71KgHgqtzd3zbbrfGU",
  "key22": "2PgBRAgRwwD6Gp9H86JD5J9wTUqsQXRGL4E6DBBJwBPFL36buBNMaDeD4Zi7o5ihbNCTWmM5ZNCJ1gYgCSW5hHV1",
  "key23": "3LECzdTA1BdbX7eyNokL1fw4dTvkcBvaAfLRjRCwP4VDd5ikvRFD1ZTZJVYTrMzm2KUoeNjJX8Yx8h6qNkhaq3fT",
  "key24": "42o1zRpg3Wj3jXFLrnw75EiPavvV1zhNhLML4EjZm4eucdwz4TqynSXuvUpen6t6DwgoyBMpPn5PnjZxA3DkujvK",
  "key25": "3wmfx2xfAYvwatjmH3szTycH8pfzbBGLgo36A9ek8Ui9Jsp98KvfAvVZGEbZPphQnNPqBJnxTNMxh9RBWEi9KbE7"
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
