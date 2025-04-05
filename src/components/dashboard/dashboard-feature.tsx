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
    "uaAQfFRJ6Uj965NiJqEcdBKGvH7zSuwP44dAxmVirGTxJuxXkkZNz1798mQZUt18pdGZUwCBo6dJhneEyPsxYK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u8ZEJKghyfEKYd1uTYknBxKw6pYZciDZxu63f4FBC1K3dvKcxUmyib8gGnyNSfDEJFr8p1rc6tjbZ2oXDZudmak",
  "key1": "4ypgsGavzQxJ6EHH2ioY1EDBRnc7VqE3DjU6HiKikHpPdu588DBsrbRoV2g6r9a29To2qSeveRdbCUR1ucs3jJq2",
  "key2": "4tFzbt8VRrDekkq8xrhLHtPfqqsmBbBLbcfkNHb1MLQVSMwSzLj4nTT9EfnAofcDSWT6kdhpkTe8cx4EuRmBNqng",
  "key3": "3Sw4uZ98bcTuMr3U5qSLcryFYuV2qE3ZEudQwh6D2Z9GowZKYRR2uF28c5XtEQUfA9S2x3vjow2oiF7NXVEXomrR",
  "key4": "2dsQDFT2y5t2XxX3Hw7udzYAttSfyHiV13emz3rhhHNz78AKXrZHrLGjNnsz5e6ne5cxnRKgJ5aeRT9bd7LSEdAk",
  "key5": "X3bpSaG661G5YQ2dg5HyDhFKaAPb5sN4Z9vU4zLNDGYB2jzXAASSmdjZWZ6Cr4zLjFW9LbF9H6SqBiWEsVUnFrt",
  "key6": "q1GNyBFeRtqXugPFggYUatf81cqZ6YmcANeCnK681EdfAzSNY3udQPCiqZos8yvHF1ZV9dkAZzX1gCWccjmHCAj",
  "key7": "55s1u4hKrcSMhLXLpeLjjRBrYAXe13jmVT2jvw2rHvV6WuRQE9ELoyoFY9AXD2iDf4gH7x9HTVDnnFq32tUmC9tH",
  "key8": "5L3VAZ3oLa1EnvhbbHQWLC78XSn9FBoJfS4ayYt2MX5qPD1RuTX2vfZbTrkyRrUkjvU2PLkE4kqZJGadTq6HzsvQ",
  "key9": "528snquJTFSM2ZBVHt5pRp6coG7ekeKWDVU43uhPA6FfKZ3tPNYvYqzHprFF3e5p2sYKcJrD4mYxbhDBxBhphMBX",
  "key10": "64xhTUFQqoC1ztoVM6gigBYZBYeFYjg8yrdYvCQGHQQPvwsvXzWY9WU22qesJAfrXA2gUbEzBqSSYNHfoqVm5vgf",
  "key11": "3BuTgDi3XuEC5vqf3LFMC6nfcejzCqACjJXA59eaHNhQNP4khKuidREV6A7ANKQWhKpfrsNkRfNNzSbzWj2cfNBU",
  "key12": "5zdB4nQWnsGfZv1Ex6bE7krQxWN7Zy4GJd21YtDiK5Q5B9cWUFWufNz4uy1sYBNYhxQPsp23uxLgNiweQdw496J9",
  "key13": "okcrBgkJVX6g2x1vKmuet3LWZHdeMe6PNwfW36UzPpmTN5dFw1uqdLNwPWw3m3V6SJviAY9AnjT4TfbnNdFk38E",
  "key14": "5547SiduKkVhkF7L3SBvJJqJ4i7BxUakuoQUApDKwBmVXPaZbTzL75K5V6B42WZ98ATLZ7tkBjB2jj3y21rZmAke",
  "key15": "2x8JowS7m6DUVi5zXA2StkDQ5WJXG8gmoUfD77c94iHmL6XZ4VqwGh61yrPB1dZmTwHX58vAmUDppD472mZuH15F",
  "key16": "5eStJpqjzdxmZ5FGeNDBMYX8KzcZMJXcCcrMTmghb3dnnhfGWxhnaKmTUh21MuVhvQPB6f7voVea8KmYPsjrm2dr",
  "key17": "49L8LyYtzJkisxgYPfoJwa1SnH2Rbtb41guAz812QygWpjXkPeahy28ixcy1oZkxbXXBfa1P44hW69SD1VB34dhB",
  "key18": "2LqAc8ThoprMdDgmQ6s5UKuxcbhXP4rJ5yWRNToPBj2Zu32g7TPK93JGbfQiFqmiHwM71ABcj1pzAex85HqdN4jA",
  "key19": "4rPuAYk8dCTpdvUoMLxj5whZdR7ZfR2nijxBathK8R7Z7rPqGaZF3hErpRJ8NsXGYci4TH5V8PBqdcmHdcgHZ2zP",
  "key20": "2C2RxMGx6hyKNgtK4zsLBomr8V1TmUeD84F538xLkxMWxRVeFsW4NXtUTGnit3L3LJgwwBwZnt44WwVutNudWTyB",
  "key21": "5dF4vvm4nASNXQEC688DPUTg7zrzngdovafRrn2DFHqjLYDa87gtKPjbj9CSYvguBHAyLjXkxak9Zp9A49iRN2PP",
  "key22": "4KurbTTFSpuPLwuewUDpscQtgLQuhBZUirMikwzyo2ryNBzAndvnjCo6abvJf4uMmjhuD7T1DZdoeugFCGPQxRU3",
  "key23": "u6Y4HTuFVSN8LyDGAhhJY175x8U12DzJ8KEdsTAmAL12cA5cgRRvhnT4cwCyiiTpLKTHcBicuKFpvxEZhjMuwfv",
  "key24": "bxVDh5g2RmFYX8YuoJuGLksAUB7RPyBCHnFDjky8VTHJJSumthnaA3QWFzpmyzFRKgfGuH5w9AQodTy75LPuNZ7",
  "key25": "3j9KF2AEP9WSKc6tJKqqokxRvq6X3eHBwM7P5wkWTNAHfjY2d7j6PS4akxQikxQMrPVin9D9kCoBQRDwpi551QG9",
  "key26": "4uFn9SxZMnyhz6uxztkfT8bFK4JzrzaVMskfD2WQ1yXkeXHLGJ83joaDeqwnheLLA4gkvCgcvZmtrbVknkgPvo7i"
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
