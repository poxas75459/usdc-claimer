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
    "hG9rdep3wKCiCP4Rj2NEY8ibF6WSFgALsMZs4SPXgiRLn4u95DTQeqnhskQQHdZpjAzEksZXAVWT8gFqf177C3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23kNpDiwiKde7moEdkK7FhvaH79byEXUKU4bGsSiCcz78pvKGa1rwmpsdKEGLpFwjSV7kyj8jAwdXZpfjcZ7U7RE",
  "key1": "2zUVjxKak7t5c4K6E1dfkXgGQHEmK1FNACUqdXzaP5VGXFThRWyEicgkWPkaEoAZSdh87YwZPcaC3mpDDqfmkJ6R",
  "key2": "7kERKXUf3VBWu42TFWErgfPkxvg9cdCH3Lsc4q3RMwipxk5U1nbSQJvRaVz1G1KNzc4mjhD93dAKviq41x1Eski",
  "key3": "5ifeAWahZNaJsdfvxSVrQbdWSQKSm1eNcjDR47ysnBB7BxNeWjNibS7sdQSe64Z1X8xxeh1tJitPqKm4GsFCYsvw",
  "key4": "s9pibRdNJqdL4Xm9sjmbkHMpThKh2QpMMc2hNekZSaHXbiv2fsips5yfaSqtLizdLciGw1UfajZGFYrWMShtowb",
  "key5": "4Bz7XJMjLxBhSGunLfimcDF71dissue9Q8TFBmRnfyVGKSgeQmJTxoX11dB9hKcyjszu4wq9g9eDCgKZrN4n4tu6",
  "key6": "8Yghig7L1FssQxHudMbnRGnHctps3tsDKDDFBJPkj8QpqLr2LRL6jJK2irsTyo2qCe5ULomshvXzYT45u2dm1kU",
  "key7": "2Y11mWJcdsFxY9yTsieVeKtche9Wh37PgfbxZY1avivvsk3PF4q3qyT4ZZ7dbkxy2sWp6BrNsw372555be5ogHfu",
  "key8": "3CaSSjfFp5b9doKnMvKCARyNF2RVHRY4eTh62KiULJskK21KWXX7sqfrNw22qGavUERZfN76kbqNSahExheW1QoG",
  "key9": "26mRV1Evp1kQ15fizqUMFeuaGGL6YE2paj4rD3ubEuWjyL9Nef74T6dxBjhRjmGFFjWTacQkiZm8LXDaqnuC7Har",
  "key10": "5D2BMqfPovR4nGPhqRenFQv49xu3HpSX4r9L8f1nbU6J6nXSYQNUNWGE7VB5XEHMFyiSrUzNEW8Xh9meFv2qVSc4",
  "key11": "4x3Wb192gidMn679S8ek3MXq9yjbmbDw4VibqqSRoYQhmkAhxgpmjEQYjMETsdScsNNFJy7g72Hx5Ny76u2gBNNm",
  "key12": "56VENqxqzACfoTg994sPACzGEFHqdrE72F3EszuQJ3dafyzAyc2emExX94EuQC5fCa5ZWkNMcecEUtVXS4ppB4aX",
  "key13": "a5bmULSN3ZFwPLmA2nkuXVHa5uQwf8VZmP9E7bdUJSJEh4hRXsELetfQTJCseKEn8UynFQr5FR1tSgipkxobgoM",
  "key14": "5gDeAVYZkvmLHz7Rncm7nx17qMUYjuHbsfiEkjEH9M9keEWuXGAFP1GN1TrGMnjUsdh1KDK2BMXWEsdX7neFQuoJ",
  "key15": "dBg1xvYonNw9AUJjR6fQg7CXPRLhWYS3fxKztNyFMwJT9LRc2nECkNRdgzurxgBaQb9cwkHULsghNq3AyR6cuAW",
  "key16": "jxP6fJVYGnK9eWfhchJM11xFWjuDuBfvt5bZoEPNYTCQFZzRcLKGcu6TyBWd6BU7xFgHpEXWNYbxNtPg1QqS1WL",
  "key17": "X7LiBeUSm2AhCoRSmqTPvNcV1yBLY69PVbsMhvFa3Sw55gtwpwbJcTqExh6RDbeBBYdt2iBMCU2QM6YvikpSvsS",
  "key18": "3sWrmDUXyqWTktV1JwYAJsecr6xtL9kzJ4shMVxcsdb7eZeowLZRise69BAARZJFdw5m5qWFQzRH7xcCgCcxbpUz",
  "key19": "44NFutSypxfcC7zw3nz2gSzzqgQvsTcJmS21AXa2qy9Fra8o7ag458j2wCZaw2BkfkEA1pdxuwMrAKRD7JJjdtH9",
  "key20": "2wHEQP5Uy9PtdjxMWx51NXkrEMqtRnhfmMkoTXunWFHCh24F8cBXYGPwoQvqKNr8siaqnKDDf3qoofbNu4kTPyWz",
  "key21": "MYjmNYcrQoSkM8avnefCtUuWVJT3SdC6KYTeLvodwZp7rwV1FM6hUwzjhBXjKx3nNGkno1sjcaXRjML9nW8eivT",
  "key22": "v3rRkgwNherHt4grGVuZMXHRvegKtGqgMzdR652RyaswMtpdip7uVmWCYjudjckf8xpdCRtwptVsyyRTKS1pQj3",
  "key23": "3eoRpsL2xDEHQhCXANQhZSYxPjv342qtF4m1rf2iFJFAvJgGC9yvFRQU493SCgsG3HWqARrP4WE5xhQKwpAMrnre",
  "key24": "4mFeGTCBSqEcVGpFEPfdxh7zb4k8zG7soQy93orZEdssXhx5Cwveb1Ecty1MCxGCwfLdGZegfKjgQVZXz2zRMd4m",
  "key25": "3qq1hTyAg1nFs3ByUKEKWTF1VoSdnkF4hjPA3piPS4Yt9okbTuWsgHRsaos3uj85TsomdZREixi2nsAr9t4uKKiq",
  "key26": "5tSHBjMTWbjrBw5uyfNHbVoULwSAR6iJXQR17oFXRZdZfZFxeJsTX2DvvsDe5oP8oCYwSsQiGhx7mkzWQWku5Mvd",
  "key27": "66APHGEuma3jQdE4xWU4Ft6kN6SqDQcNSGeyE1N625F641mFwpjonXAG9p7ZRCNr6QoEVa45iY5Z4HcU2Z2Vb9V2",
  "key28": "DDqKJYvgm866JjVmzctiRZ7V7q4GsQg7pkv2qJ1e9Kn7QXuuPh7kjjP3aPRpeASLzk4boAx5eCLq7HvVAVdBQJA",
  "key29": "2DTV1TRPpbtsZgQCyQuX7NAKtBWnbUpcjgjaLjs48mB1LRbFq8J9yvsMwtFHH1H9aXFmXh281RFAR8YA49nJJoBh",
  "key30": "4mgFWKK2JTaqhgSeKqe8oauGa4Rm1HHDsevKoHWo47o6ndRxvLfsXypb5J6jejP9gQKLqv8L4juAr6jo2zL5gy9E",
  "key31": "WjGGzzNmWygT5Dfz15veoRskvNUTDu7onY7a9DaB2rvimJvfdLx46oaKUwkpVbN8KjTHyfbXQigXTDe5AHSa69v",
  "key32": "3kkfSDBh2EW3nV4sQVJcBQu2eiY1GmaFgYb4jx2wfBGK9FnepBPfar3zroLNx5BrQ6BtZUZm766TXLY4PHFnAM63",
  "key33": "2UrKzVwjU1jMpmi35fQREa4UAXRoMk1WR8jvUGvV1RDMdGgbJuVeqMtUG814tN6piMmy4JYzHby26kVqbAUhaK2S"
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
