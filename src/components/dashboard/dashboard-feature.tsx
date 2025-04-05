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
    "3pr5RTJa6LwFJLxu4BhsqujoEmVJdhKaLjKKMZpn4LbNRuszyuik8gA4mgWQ6GingC1bPjUAqiCe9Wzev9fN2jdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LSey6D8BCuQd5USAFPxgKFNciHbs32zRXCzvZ1t57cWHdLvXdKQYkRDEdJwYjtFretHSjm6AoeP98VpGwjvM8Wm",
  "key1": "7d3NU5KWUNGN3SXrC3A8LUrqNtcEmYS1rH1xRGwzzZb6JeuXrzYJ6tD9iLsUQBWkMH24Af7JPwv3uxbxkJwj2ub",
  "key2": "277EyTnCRaDanKJzG7iurDSKF5TAGmDxqAvj6vqr2pa9JcxrGbCc3LoGd17P3vgsZKvQBdsws643arroxk3EZfSs",
  "key3": "5ent3NqETg8kox9cmGaZ7oFUDsXgXo5W7unfZCkXxfF3VPB1YGpNSgKZJMoKR5qcukBhJkcg5xbo4yVJtYiNUGSA",
  "key4": "3LzKdcn96PmghbWcjPdtg4rWjBVJFTStGCRrFiXDBhAuTnpgVhHy27RU1mJotX4AsdD279a3q3bnnCYcsAEVnguh",
  "key5": "1azLc758wDNh8T1TEeTGErTVeQPQCCcB2jwtBwmsHxakxNubPLZVaB1e6u8MmNX5uodr7mV7s1iyfA4j9J9nCMY",
  "key6": "EgzQMWCT68fso5jJqTaCoD5f2xyLSWyNQWVecDq73h5za9M4M4TYGLG3YrcCdacEe74M6JfXW3VM2sUkn9i1LH8",
  "key7": "3rEnQspkx8e7arGttaakcGfPVfzpaVShK5Mo2T7yJ2dAtQTdY4FwkRz9nEMNwBHA8TCnWcaUEyaKtTdKo3TMCvz5",
  "key8": "2GPbbABqX3aQfLe5zHSLe4EsYWCtV5CpcMp4S6Q6GLbKVEKNrHUchjtk2gsnzrmGLhUaDAmapbkf5Ah4W3fkwREX",
  "key9": "4tJ3dY2ankoqfSKnyNkyVcDkwFCmCqHZYHSBbXSsPTPvz8NNowMNSx247gBsKUc9GNAFsHgEbQEojtzxTa23fUHf",
  "key10": "ZGWYnwkRVKqAstpNSexqiANhDgNZYzm99RmKAbyPYMRUuuZGyt1fGfJpBgKN16HHEi5QFFv4wDn5HwWXqEc6ZMv",
  "key11": "3tWackYK52K5zsJhet5oBq2KdzYCjiPbxrKLe5Mz51CejbiucE8qxRJZ5dQ1yL7GBhoBwsqJBaf664BSxXnDLH85",
  "key12": "Bh8H7g33fK225dwgF6XmyqAfZJ2Xmnj1r5JiXq4NU2T9y1Z4Th8tezeoUc9uxNNU7yRBAXCkLo9nZ6f44fd8tza",
  "key13": "4ydu9BFs7UgexWprWryVDx7EvTUXxaZHUEpeiAmZunEJvY6WLEsxob8Go8BNyJrCD7QwHuZsX6Zirnqi6Jo2Wxky",
  "key14": "4t15yRZRhxMSJczKzdd4F8pcNygforFjzUkQyXUaQJ4mKMXKtFAdrnpPmMWRpKSkkhX8sjiXR94ufCrtRHnSKvt6",
  "key15": "4iVZgGa2m6h7pJPwyh9xKwXqhzrBqomPbfjHFDhdVFihEs6ggRCs4kvgUUYH6wUYMSxSngPLdFvR4Y6bFTHhsT2Y",
  "key16": "2BGjfJuKobrxyWYZz3nEz4ecGaNfY5dyQd3KEFHRqeTZ4ggAcxJwSeExWx1DW17C3XSsU2yntC23w84gMvSmQcgf",
  "key17": "3KWcKTJLnbp7sHvQ42Njh9KKp5ruWZt4fU6rP1FPh81mkDCyw5ofavN55B7T6XU1TSa6eqPwudhovUTa5ZwHuPFR",
  "key18": "2PNCRqRqV6ohLiACeCXBNKrtEkyWGdVRwK2ivvN5QEDdX9CRdBEZWZ3YESbTS6ySRBHXnffyq5zca8T96G4SfD4y",
  "key19": "5GAhV4swNYm6Yiwf5dqxZTcZKG1BMeXohsRbA7b6DJVg9ktQ7GYTfY6S9TtnZgJECPtedJDypgAvfU54pa6mF5ox",
  "key20": "5dTtBbcFjzB93EFgFVo3UqPVZnzT9qCz2iKNKK8PWHnSrvtBsyPBLpFVtJLtDm9CmggoTUG4GL557TKCpgaXhip5",
  "key21": "kkvr1urbtUkeAksbzsS3KtRR93CyWvHzgU9pVPv4HVqdnTWygoDDWMHff5Vk24voWuhue3GbKiJbpUH2WQKPKuw",
  "key22": "3D6uyE8qa2zW5eQyhK6jo14hj2uvNfXNQ93wbtF4kirJYEnPnWx2jFjdGfPH5NVpzMJCY9b4HjCn9r9qLs4uAUB2",
  "key23": "37EG4kXpSwZcupYC2HT9axQA7tJL2HPkTqLS9nFkZhki8rJsom1n9BeHA7ufJcGS1vnWBLZXGyL6TU1McUuCye2Z",
  "key24": "xNvKFehyNDsJv2Fo42dcE83c4tqL2YADVN26aorZAtQ1Z43CHjuGPcM1wEXNLRGYxbnV58rpLdFkdXmwwtVDqXL",
  "key25": "35PjFjRCr5GNzELw11Gd2Sar9W3hpxZRtVDeLrhF3sUStLoY5Mis1sFn5mxEUx5U1LPugJaZkbrNY527WAooiGZN"
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
