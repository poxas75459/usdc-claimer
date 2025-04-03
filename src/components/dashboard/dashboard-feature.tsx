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
    "4xrQgRFFgUk2Gyk8UimLyZD4CTPxgCeDAJRx8E41fERdRu1SEDcucCo9a6zrjuTgHMSk42m9eUneVYW2C9mBpFZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NpF8tvRS1LMzSRJpmAmHJt4gkJMZP2Z7hPkcGPcVjLsvzEFXuHawVrC3thfagkCtT3ddDH9AxCctBSaSVgUVxLw",
  "key1": "LGv5EJxrTxQDyCdRiy1nq8r4ZTjBbvRCpzRHeuW6jAW9faLRHxysF3LXKQ4ahiqBdEzpTJRYn2i567zpFnY6aVy",
  "key2": "2WxoVsPn1XatDwaWx5frCP3Egc6JZyu3HhdDMj748NZFgi4dEGn9iYNikouX3Lynm4ALpWbNyg96zFZpbfUTYhB2",
  "key3": "NnQtmFaAfx9KqKAE567YnhTEiAaC988FFwMiFmLuMu5jj7oQ4ucwpkKLdND2vHYraiNptBZ44rfZnG77jgwysoE",
  "key4": "2tdUrYtBHw14TSkiYJkeYDnwiHFYDRqDdPTVwYULgxevh4ZqJaD8aWzGeqZvf27rVbwgohDSe39vMEB1ccPqHiGS",
  "key5": "3fNCNYrWxERtRgtwiP5wAc6q2gXqXAPfGqE3NNh8tMuvqQTsMAd7hqcJuB6RnGiNC3xXdKAEkoj3grZKG45WWyja",
  "key6": "48hfmfU12KBky6GAAZKDi9Z3QpqYtdL4Y9L1VArsdjGRk94tNkjb74pNdSM4cMtomaoWhFdZjMDZ6Q8RcwNZmM9w",
  "key7": "451u8qGfp7xVdnT47KYr1MMoFXHNjx2DgJRbh8KfDGCAVm9UnF34vgnKTeH6rtJ7JyBdUhWWRMwNxdCogKzQT2pq",
  "key8": "51wXETXns4RUkhbwafBwuP1mXYsBA7AagQwGJFqoCWtNszGJ1W86thEsLyqGQmKidPhvBLcqG8yjRcXbHEJDuvor",
  "key9": "36hroL3Kpe7TpXy25C1szAnp3UWZPHpJem7WTgma9eUMQ1NgVtw7cgjAKkXQP5ZUDG17MZbV8NiHa2UZMYFmrve8",
  "key10": "vm7f4ooL1JX5j5HAkbHenxa5KS2mppbEJM4HN8BBuzJFQ3qTwtiK2PSD8dBsyggWVP7n7QKkS5k1Ry6v4kknCUU",
  "key11": "3dkEAJrkrtPsYPkzp9LJn7pttciVTsQ1Tps3E7U5PKrE8N8Y2W97icpLXHCvwZJJrf5qxe3f9SJxEVCCqCyP7CKc",
  "key12": "Zs6vV4Cik5onyaUz317kdcfSVZggV4ay4QQv3a1JYcNqREfenhhbprxNFE7ig6bqs74NUreP2RhyN1znKBA8LFb",
  "key13": "4genHsXZyuryJCaiTQDKsSgWsKvq5WAzQgExemfVDVqMG1kLKB4JLHmp4DbKM77rmXxkFtgjmmtfFmr16sVGD6sW",
  "key14": "5QZmyEnrVBQrptbdbtNF21GXc1rxK2jgtMF9PDkTwPGKGSABHBP8wy8yNfYAe7yzHN5gbBkyPiFR1dAHqahiTwpk",
  "key15": "57BYLGrNsN29zZFEQnHR4j8z366TaEPFo3kMjkdqph8vGXGBwawtvjKWvLs1RaaiV3hNbvoFJjy8eYxdzfGu3cw",
  "key16": "2PSKS3MAUZmy4e1mGdu7k4ahonbBpJGhGgLxGAPCFgbnaFFkyJV2ymxJPZ9F1etwXnoMv48h39ZGZuVe5EcpgJJh",
  "key17": "5tBWstNME8Yi2g5Zb41edFxUseQpmBLD1Kg3uFgvgWcJ9WcvL71GiufWvr7knf6B3LxtSz6CzY51JysiGLcTVk6",
  "key18": "VzSe1SPZsmzJfwRgKuevMreBk2Ehp2YZW6HDS5GLRPr58WboPCJ4xBK3pVDAiT3DMHwG7RNaL5iG7C7FDv1P9yK",
  "key19": "YRmMkqPUXXrThjLcywDgvJtX2sn3d9aCqSRUYmsBUeeEk4riaz54HswAgacUXNVbHLT1a3s4wj4qWwYt5oXP3x5",
  "key20": "55ytYDbffXq9KmmzgT796y1XtYozHmvfsMUjAecjw9YNmDEBn4fMrgwGbGuDq5iBokfDaXRAm7tdg6wfconLyvMK",
  "key21": "4y8EAFUvnSm1gAHBFaaiftT8kzLXSsF3XgAsPEjpM3VxFdV3fs6nuH8yTRZgUx3r2UXujzjXfTN2JT7VA5BVsKDL",
  "key22": "4ydZJX1uXpXZD4YaseaijnD84S6taoJPrNP6icbRJGSDLoPKUZWxtw3M6T3HatXbnLLxCmMgGBXPA7Y1JH6k4K8C",
  "key23": "4YwnGx6B8XGP4q4b5oe8RgXkoqu2GoqYv7xHCRrAVCM734nXQzd1n1nbzKmWACTMTgbSMhaER4SxZKPVsrE1e6oE",
  "key24": "BN6m2n1XDMvH8XNcxZPCWfHMNxe3jt8ZwfgxEtQNd14s7uY1AAs8g2a9j3EaEXMirj8uXmRZZJ6mpN5C9qCcUba",
  "key25": "jzH94Bnd5s3gERpjRE7Nzsar3x91oGurjpb5vxJ4tYYxFmwR8qgnnnng6iZV9FEbyGJF1GiLcGkq89swCzNV1z5",
  "key26": "2Lc3LxSF6CkWgAVBw3bxJUHFfkjKGYxWoygwP1vLH8tY9Hy14Ci66n2jz92YR3CZ1jFwzi4dxrR4rouYsXXUsAZD",
  "key27": "2ipXCKno8DXWSJGcD6YbkG25XG4w9wyW1jUDNjDu16YAAYF23Lm7YE3dihyp3JhoX2WazJsYFy1UwBrYFHdgREDV",
  "key28": "2Z6rTRyvjbHmEi5txeyu1FMgHuQyY2Jyoqo39tnhM45bWLBbrwtjKQD1ACLYNywYv5GRtWLjDEbtZ3euz7KNb6s6",
  "key29": "2V7bxEcLJBXCXax4ZGCgjMeBa1a4KD4VCPH45rSPVjVimwcpbJvXGiKvP3jyvAdozdow5CSgmtTuFXmdnNiNhHwc",
  "key30": "7rKwuhuGc3jVrzcp5Nnjt91FQAntXmsFrAJms3JfYqbiNt7m6yZJi2QcfyTArKKNWwoQr3MWdjMnvBDr7YDKA5Q",
  "key31": "5FkmUcdsLy4ETzR1VcYHYG8BdY73yX5W9kDh24fJFnJnhjKcw3DWS3Tq3ao9vh5wku3PYX6iiki5ZXo2kPhTNED",
  "key32": "62xBRzMy4UjEJRp2F3vV6jimwBbXngQujkVVfWGiymuBjAP8uQHqrzzyx9SgaRWidXZFAq5nFkSjJTfkYkr6yoPo"
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
