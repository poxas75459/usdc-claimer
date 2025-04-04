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
    "5S3GqjXRrCirb6prVuxJ54tCwwgAJB1gmYuzdSQyTDfGGXnqfB3ZdmVfsBjuad6wQ43J9JmnMxUpxvFcf3W3gYtD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54APBEWqWhkEE2dHryeQmB1DGf2sZhmgyAmn4qti8F87PNZHDFBho1xZUjaRUic9Zsjv7isfv48Vvyban8qwAXpQ",
  "key1": "cP4yUnqorG3FGKjBixnkYBAzS1VgQs8ohZekbefPq7JD9sLYhTZbAL5djKqyRP7DCS96VLa8DURzTYunxnkFaZ9",
  "key2": "2htNoBZHobdG99StD9S3RdmAxhzGoVW922BPjo1d78oP8NQuo7ASTm6qa6d4bMWzNMN8yJGnBMaNMnpzDKyiENnC",
  "key3": "2J9GjPiZuRL19nC2dpd8pdH2hobuXrbTTLCz6mCVRxvAVYi2auR9RKf7b9scL92io15kjhWkybZMgbnNDAkmNRWx",
  "key4": "3mbqrQDakK2G9UV4oinTvkBpK97cm7KSBBN97F1LkavGqKCcYrqvjinpbLkeA2B4qgXgNQ4sektFWQ7CTbPbAaYR",
  "key5": "5ecZjQzgBQ6fiKSSosWYGzePGAVZKd2s6ixQTTcScbrGjdovZ1d8j7XNQ5wYQ8eVcxLHNpwtM1rn5f2LJR3bo8D3",
  "key6": "2CALrPmgFuv8uio1MYaW6mukjgU7v13ZCupsB1Kej2wkFrRGnTpua3qZ9b5N9JjDbHwjCi3dA3YF2CZZqTShwcoe",
  "key7": "4kgWCFD8Hc7jBj6m83McRupMr4tnDo8vUsZiangS79pRea5RcHbBgrnVJ8nAKgyYS3jZWwaAJDEGgmUoUTa3t66o",
  "key8": "UXhp57FDvvaqWtfoYpLzyv3ToYDdDmkTMFKWQQFQoigG6WfMTt6iarWGquwSFKyoXGdnC9dJR5hY7oYYddFKtws",
  "key9": "4gm293DASUQVtZArog6wtUvmcWvGt9rAgB9smdLGvBJrzgm88cJ1BJGPS4n7NUjx5M2NPMh5xQwb75S4Ych9daYc",
  "key10": "4czsz29z96ih9GdSFVjnwiR6LA1VMmEWLkiHQdwZPJWPkfW1GN53SMEc5LZQkqrKiDdy3MSm7EEGetUqvmHzy8b5",
  "key11": "h3jez4wat5N8Q6w3QsQ3CVg42GVX8wAD2CcnbbWnivvd8TcprL5NokUP5B5pY5G5v3dsA4iUB7EB1sXUxZx3m4U",
  "key12": "29Br1kJB9vq9VSUfhQtgv3D97KvjjHgSCC7KzEMwSy4XDJd2UeMHLiSZC8gy9nhYefcbWBD2dE3kVw94AjqdcdeH",
  "key13": "3cNVaFcjuGgKjBM4EuuNAqe7tC6G5GBwAPgHPHjBfG9Hpz471NQkuFNB7WWCa9cwwrCCaen2Qc39J4ZGz5rdfzUT",
  "key14": "biVabKKkLYkFKyPxaUxNw8K4Cx1gC6DKU2ejjrnaYFC58SPuzJfJ8qt7BhYj7qGQi8MdmE3SgX7Z21UE5DHXjSz",
  "key15": "4YFZ8mK2G7rfBy9a1oAtjbUw2atMF7mHSvdc5FdpfFZGQujnkQWaNQqt2PUvZhjDPrvY7CbA9Mrxo9x3yReFZoWa",
  "key16": "oDyoEAKDeqhEerU7tHuwEQCYdeBnX24Qce1LQ5KzhL56rEqe1PUHzh9pLfrtq1hKKjq4XsQPcjbubwhLnLjTVbr",
  "key17": "3C2mJRAbizS1nSfvxsYUR3DUse6hJAwVqQ8WddD4LbjtC4CRgcRqfedzDbQBiGDy7t3jRsjL1BZu9WFfzg9u8VYW",
  "key18": "3Y9JNsUaeSSFeKkgBHFf2BrFht7mPi6wr4escwU5tjE1EEAoVxd7VTyMYwhF5E7ZUCiufcEap3YnhSKXBinnveMy",
  "key19": "2SaYFb2GrD57usdh2tJkMCJknGr1doSpzGazNoM5QuUykfsDdkrcdEvSuZM4ygupnSuecH7TDRSBHSKDjP85NHBy",
  "key20": "4ToXndHffGKxrPHwxPuRmVgw6yb4BabUCh7H5eVGu7oRYYY7nBVZsk4uY1KCN4aYJj3JBTdfvkMko2Vu8bYHUkyQ",
  "key21": "4Hb4aJok26ymZ85rQyNEcHeh12wFJvqvh3NuhWsKskm5msEYdMeEJ8m4LRTHauPRar3m3UA2nxcpHXr4L4jT92cU",
  "key22": "4G9MEk9CxhZy3D9FLLu2Ci5BzmS4EPJ3mMLvCQogBiriFbTE3qwiLk5g7PbAM8YShnNugGBtovnrauojsdiQH7hJ",
  "key23": "41hnpyLGR5p6hYMnfrNxPLQKooa1ggBkg1WtRfL4AacJVN5npswV9ptRsGLuXA6vukfDMUpaqMPPXrQLpQnpBthZ",
  "key24": "ZnDXKULT4iAoBg2Uq6J93izbnLMbWeAPYkpGmoiUM19q7Q4Kq8AcHczv6ZERdU6PGjb8mgdEY16ecrNB5G6L4ge",
  "key25": "3jj7WEmef6SuHkFUSRLJFVHNhM1tHzwZHsdvicFQoHNPpHQPcaVUwQZZnkVbfu9nHyBmCzm3s4yn7mAudZyiWLd3",
  "key26": "5FydyyA8arAwDVGcgHrojY9MUe3a768agRVMTFPUFnfrbwuKfEeLRmvdytEHyNRAUmkY5wfpoHDdCYMTySrQAsfk",
  "key27": "2xzPP6oUFFXDxm6i2fDTPgYsRXX1UFFwW7Z5hbENau1aKYy23rPQ5g2ASxhd74kvLziQ8Kdc532Z9BZFa1cXQMXi",
  "key28": "3cgDVcH6i1Q8Gwm4Nsi7q3VddGJaApn95GE28wyC1ToizhQmGuQ5pn4qoew5oxnGLEo8hqY5fireEAj4zjqYU3gh",
  "key29": "4yAtbU6SgpfrjJJ9vQBpsTXh5HUNyJci3hxkSAPnBHvBea9B82jwYj3W7Wxz2eqzX4XZkZweCTUFxgVaWmnypcnv",
  "key30": "2zxjaxGKZPQp1aeNLZUnGkexaFonNXd749SrCAYufg4XSnax737EkoEy1WFVoVmHCYWG1A6ztuE9ckHzLMfXjPfs",
  "key31": "vtopjZkCzRpfbSQDzEpREm9GAmDzMZvxFzCzcTZvwBSzTgYLYHExRUioEMaJcA6PvRA1kHRCLZWLKcmsfjmuP37",
  "key32": "27j1WfkwXqt5L1Dk8sSuizGb53duMfyWDrGGotFQPWvCeNi7sszvRt5ZrdKdVj1yzQnSAxoTbUntEexbbuJcJ8MT",
  "key33": "3woxsNBnPXhb27dGi9xXLmUJsdPSJEox6hXK9H9sBE8r9E7qbsNNw1F2KkFtZ3Mt7dHjoBYqBg2N9QV4JLAMoMjS",
  "key34": "5qbkPvCec8XFHKr2UkAmzSGMYpWNSBoorpGRy214hSqLd5ZnyWBgNGv66cz7f65MzCCiqvdGCdvU91bgtXBF381L",
  "key35": "2Wr1S5zbD8ZTnanJgKmPVgnVYaFUqhdzutZD8kPamXzhC6iudhW9PZDHjuUGLkGA4ki4C8RXoQYBjcG2GXrG35Qz",
  "key36": "2KDknP1mKyA1fMS3JVu7woL68XxhyN9q1JCxna44MaHZyDNHLcbJfKH6XMypYS6iFB3aFwn4TXje7bcN6NfYFfF7",
  "key37": "5cQwpmWf79KxLZXS9tijywJiShwS6LUzS1E6BrWPZNcY9gFdbXewWbKB3hFxk2wqx5vgkFNYSKfyphRnKZAgorzG",
  "key38": "2vHxC8xxXtVeG74wgqFzhm2M2hTyYQUcdN6RUMogcmvtoUZXSRPp8XUpvBQWRFLxhEwaMXdxeruSz5EhE8DT1nKF",
  "key39": "5Ksujq39C5VHFpgkGHbmZeFrx8oKmeWQoecPwnV2UiJDBMFi9LEbusGtXkncBeddz8hsyCvsSBucUBGTEJpCkgaT"
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
