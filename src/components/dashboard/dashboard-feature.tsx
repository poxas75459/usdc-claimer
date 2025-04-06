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
    "sStaJZgVV8FgaaAoGEgZA5iJqkRzjFzGDGP2XvFvWKwNA5EWVwjVP8aYDsjz4H8WeqUNvEb4uAWnzzb7s9iT5i7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xHGdR8yL9Br5xBZ9LTiqxd1143bJr9ikeDSoVfn2NVVYZsPSJFoXbApjYjoWKgNHWto3QegynNqTc1UNw4mmDa5",
  "key1": "mKUaYdvo4uN16vjYwdgzjJ8pDKVYUkJ5EhnpGmUTJdHtThs1NzQKdSeeyVZ8zuZbHiF8aJCGHbNYY2eKSGkSitY",
  "key2": "3uVAxL3hwrAqcAo981MN6zVsewrEP7PJgLUC8hQQiECo3yrex4rBcVr1nxiNYb1PkyVuJLdJT11S5qddQDukGN9D",
  "key3": "GGDX5BuK7msXK26YRsoSpi42jRMK9t9scccaFz5UtEMH7daosy7zAKQiQxypUkxaPjXedDctCSvUvrYWgY2TJwv",
  "key4": "5Wuf3ZwHw8DicoBJZPwbXi1k9MAfnbqx9Pb2omXQXHrsqsr4BkKmtVJehxXeJoEpyWgXySXNczAo57aHuzxcuYAY",
  "key5": "3XsJmZ8PX9uE4Fc5MeJq4xeKs8jEw57exUHxR1h6phz6Jgu8oJq3qNout4451GRNB4rToQUVfjrQJaM5C22h3caB",
  "key6": "5QrtMK5YnnFJTT8NuaNpvEBqKeq1KAKKZRVqfurv3Zdd6t4AJgwhEiGhk2aMoRhNMq9hEVmmvGo24iW82HVhmiZS",
  "key7": "527vvHWLeSMdsiEAap5eheb756AYfoPgUGoMFYWeC7Kmi7gePJNZSjB1KSGYPyMEvUk9N1LxToyku8yeVaQR3SBi",
  "key8": "33kYYNuMqJi8awYb1LsAWRGg3w6NkkJ7gaHHyTjUEHMBRDnF1hNykWNJNF2SkGwFDBigf1yLRze3TjqHbxM4Pyr7",
  "key9": "4PgtDDn6TAUkELGLydT9s5c9D6a8NdNMMUJMnywF5sXgBKnFDt1eChRGsnJcPcB4ASbsJdDWA7jdaXjxC968ai73",
  "key10": "41fY6sCuv3m8YqEdnNeK9TxVgMiVuonvTCt13vW7HYewtAC6t7y3Fu7FPQdAN67S2iMezVSND3tFUHJN2x61WeyF",
  "key11": "KfzzJTLGG2zHwHhM1kaULb5yFiJJWxZGPUG89EAfYjP7niS2LCnn1L7X5A8cZPTno2GZxqR78jBJ3AUrsfF3sMw",
  "key12": "3ZARBAetNDkYyM4Vh3ubo7Re8Q21y2SoCQ4k3y1fgsxbLYs1MNo3qPtatPHJwSVBg73uWWvKSYa4g97oHdhW2JwW",
  "key13": "5qxugtBWog1uReGUnGji6PcThURoyTWa3z2jFNaSk88U34VYYFVbBcLmF2o6CfzJcNfhGhPLv9FNwYhSQMoNtnxD",
  "key14": "2bQwrEGMMp4ETuhcKx1iHgtXKg7uVwT415G2nbpWoD5fJg2fWpLi2Z4V2deCfQJyLZSovKxSKTyGE3giayd8GtQG",
  "key15": "3KcoH7rV1Qt168ggtQQQeuXJZ9ZjY9VwBmdMSKvWHHer4JYwae47pfoCrhWh184izNMchBnbocgDDcNRgYLw5YJ6",
  "key16": "2HZqztPGSyvDxUnqVno1QpDX3Wg8RXEdyieeEiU7LQ9u8quupnRG4DizbNtdsrJAU8ZAaNZmLc1J9ii5bXGrDVoy",
  "key17": "5braB4AK5LV3h8UYUzpWvtHJcjjbGqatZCovQ6FF7JgmuWeJaqxVWQkvA2pXyu1Bec78U4KkSfuQB45gFgARUYt",
  "key18": "Df1Kx5EQzzbU5SY67kt15Y4Hdj39QtjHwDkLq2A5pPq66MKxAcCBqa7JQ2ut8GS2wAju1pbSmghDQYUBB33eCgX",
  "key19": "sD7e97cEK8Fargvt67aiZfr8iiUn2zeMGmx7EKj99joTdsCb7oMBNtgbXF9hmLh7xkVFz6G7NCAcGmsh7118Xy4",
  "key20": "4noxHKJnjnP6Z7KotZWpFHarcet4cKfmjj4hxM739yfXAAqF3HRd5p3cZcSu7iw2HgLWNDv9p6DN7FXcCMaPUjou",
  "key21": "3yYNsK8HRqbxm4NYSu3FAViXQzYWrWmGKyGKHnNMjzCf3rPeyXxddsLTvJ75Ys46hFXHYDVwfWgL7WybWT9Hu3Ah",
  "key22": "5APTQyxPqLnWWPN5YviTzQgibLLa3dwdeydizNec5dwwCQ7PHUvLQv3RuaGkYfQBvVwpacfpjUBa9VDVeobCNwjh",
  "key23": "2eyKXuWk4dYQSan1TvGK5CvURnX4sRdXUDoXQ7yJNNqcEohLubVHu7RVij9HjeJyyD4UZrRkHugXDpa5MeMTrtGe",
  "key24": "23QMG485XMQQHz6rN3hxCzANcvMAurMCKxbMdgTdTQDvGmangiXQEpgzV4hz1ntqgML4HY9Dfa4pq7Bv3ZtnTKSd",
  "key25": "5f6YnfvKrqWm3UdGbMxXgdZULUcYCJ5aU2YJ9nCfaMmn8rhGQArcfjVVmeNSmwhQBVvxbbMaoqKV7jFRYey3K7Nh",
  "key26": "TaSZ24VxyMJzh8APgheU1B2yPmt1xSrsX1kKGFJuPS6zyxnfJnPxWDjyxqdm4uUjRyT7RE7Nzf9PmHpQ3amKuT1",
  "key27": "2V9Cv28ZXv5aHW5wsi6qufD9jvfbjCaTQL89UgN83qm8vpSjY1XXdqaLVnThhreiCBr8pCBLn3vp88hpJ7KSnEhd",
  "key28": "2UC4xutPpRR42Rx5Z8pUHQBBQuRQ34k4shkyVduiJpRbuySrvxSiTsoVkpKrVFzHbaAqcERQpNaGxYUdU1GLy2RZ",
  "key29": "2hFVktY3ZpxBqE3h7iutpmerfe9sWFfCcQ8G3JUJM8A79CLkAEb2gGUBhTqRZZNgFXRoUr71wCowbm4hw4KttHFh",
  "key30": "2SvCbZqwwcg85YN3hb2YKFLrbpLmm2cYxKoTh2RYyWRdiAJtVoT7cdC5kxfMkDXoGoNnnhwwXS4bGi3Evhprx46w",
  "key31": "2Bv6zT15dp1vu4gYSjmqnCfxRVdx7RVriD1RVCZZHE5pvEqXrXdevq9kWe4ArYp6FYd8ZXuYQS6jPaBTFGbqMegr",
  "key32": "FUBoafW33vPcvuzH1oZYs2gxYtgKSYBPMJaHAbi2TEp31uNnZQKjAweLZt9GXR9qeFQrGtsoVp9LuCwbUZvqwkD",
  "key33": "fomMdDtnHYhmdPu4wfbUFr8M46hP1Rfjf6SBvdi4Rgmmf5NPwXZqJhDkpy36n3fXRqU9hVFe4sm8ud23NSw3JCN",
  "key34": "67JciLikXYnCN3AzwtRPiG2zCfXvkHNEh93aBLx68o3vuFgBCYcc7d1GgaMAqmpQmtceApjXwrUJP5nwhGszug8P",
  "key35": "4kebU5Vri9ULqVB4JSq88VvvBzFbYP3yj64v7uT59GadqtUJtQYWPKk1GXBouTVxBgvnpYDrigcMkZjwZDEyZPMa",
  "key36": "HHsLCYRP2mpSz5XSeMAcfhxt6jVB94G8YxSZt9Qd8Bcazwm42CkJjQvP7d8NSinri9VG1cteZSXCDEot24kSgMr",
  "key37": "2Tn2H2ixi45atugdVGGeKwA4HFzjaqDRjR7CaWaBytveSQzgBM7kdo168deB4ke5XnDcnAk8PYNxueRTHFvB7LqQ"
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
