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
    "bozjSHNh8uEu5zogufANWp9cxz2bWZrovVY7QG7TYzHGoT7G6ottNoZ5egjwDzR3DmYPfBJEhC8n3hNqhunNKsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nTCqtfPsoe3G49xMbQVyat8gF7XoQPqRuVk8CkyAGhT2caxf7p5eTrcK4evZMRJE46AMMknzbTnDTEmGf4oq7dM",
  "key1": "5xSRRY95KrSW2aRcSR1gExzaQMs8VhtysaJJWfKgGr5De6mhHb6uXjofxJvTauNQ5cqZ5Tnk6duiMNw94bCGLFFT",
  "key2": "5VzZifC2ryGT4c9Ns26XqvHuBNwRvatMN7WRqRiCtrSa1tZZbz5qjC2eL2EcEXnN9CsnAJo3PKj6dYU5rJzEGWNW",
  "key3": "EB9QUCKugUgfrRbNUMBu68D99ihLKJGXTzqcKjrAgHWu7sU62n2q93TXbTG2j7JuExsiLVtvTRSuYmHdqo3fbDW",
  "key4": "2UU3LUA9Bt2gns5M7FY2PovsHTwCZ4s8AokkMCcXUBtcNtTAbQzxfxZ8SqXbh9T2FmdfaSwQ1Ld8AonpReuqdERr",
  "key5": "4CwHBtkRB4nSU8zShz6ehJY6G9hKx6EjPo9zUnfE8sVLNB1xJwe2q4oAKyNaxzTFWG7hjd3cx4ruk6PLpEtSQvFo",
  "key6": "32zgi8r9i6DYKsYSGx6yAriaqbRGoaGWkKf7EP7VQrHcMoXXD6GGzg9fwMTTnfLfr1cBAFix7ieWmVjpkjZii6gG",
  "key7": "3YMc5stdfpkCpjo5n9noLGfJybRoGish4vzpbRfPTLBcBNSCGa1VNQUxX72C8BSZbwT4hQY6aDoVGejtZLsVbYmn",
  "key8": "3Y8opkMrN426isHXvvEuYXLvzT4ar91Fo2eNBsNmSdDqeHN8FYQP7bcZDs73NbJF1fQxGQUFoHWjMj9AKgTq1eti",
  "key9": "5CqfsGcwmxPn3xjtvqCRiwyWCVi3z9kTBGRkCGgnbBE8cw28Exsr11CMonPCvbciaP5bCUq1DbqKnfWNrTjqMjL3",
  "key10": "jKpai1dfy9j9b98xruBaQKwHDyhuUSvfkEJafx2xbmEHTFogKasebZMKbxR4xShRzqS6jW4DgeXwCadYJ73rNHp",
  "key11": "2gvangfAwppcdQeBBXvfMReXfNQhdXHFTpkoh7UfRUfHYRuNq58oLsKpHup3vu7tvwy682hgk6N2QbZcW9kbAzG6",
  "key12": "VmpNrtFyfchUpjH2r6ZZVd3YKzJT7LQ6LbMvaJ3MJ31WPHVicyuJGAUnNXATrM31vVv2fvNhsz9sEdCnGVivmyL",
  "key13": "5dh6aCy8AqZ9E8vctEKkgDZyA6rf2sB2n3RMgZPwRPEeA9NZHNd4RNhzePAp4NQK9Tv4k5kiQLPW3qHs3Shs8RG2",
  "key14": "2g1YA2uyvJ7UvmnuTv95eH2LCgJVHV3EX5ZyzsAu29sqJia6AW3tVv36MrXjF4hpigutafMAY9z2sQwtoyWHKdnU",
  "key15": "2BXYaVKqhwRLndKVR7UCzcfNx2fC742MSRVvg74bSq5zfu2LaHHkyPJoYjRQ4k4KjoAQnZqxZgmzAWeSGSRovsox",
  "key16": "3W57yYxnMF9Muayrv2MAsKL2KHzGoZ9SUFbDDSMcgaQPZQVVym7KErEHkGoXP6Vqhdj85m1p4hf3DtRFKztcyC3Z",
  "key17": "3p4xxLYvfjaVTvnRqD574GgM6q9nf31bRmPHB48qMkJTVKNg142AUMtQvQAN8tzmKFUjEPYXwd82M8SgU7noVyqu",
  "key18": "4Wyed3mAe5Dbd2WDMHSERYADnkLiSogPD2b5Y9aioBSwykNP4NNCjqygJ1URogkaxYgXXc8DY82vcK4ecv6Cxmsn",
  "key19": "2SqvMR7RQXpPvH4adz7KCWfY5BMgJgqe7XZSTnEAcTZsoLGRqZTn6oVpKWgv5AP7W5fHspp9V8gkNVAtYHUdNotJ",
  "key20": "9Mh94oLfHNDLNfB6wcNDJbrjxpSSXUWLav9tNLdTPYESkZtgaU52E3qxDnSYyZMVpK5bgijhECfYsXsCW3fw3Jn",
  "key21": "22TkUS5u2ekhnXDYwfFY62rFo1UQDkuNFv5iHdcMwZsuZTeUv9SAerHXAQ4kV1AQRUe3wnun69CeodV2FwXaWGpz",
  "key22": "3h2T8m8369yLnkUx1e7iqt63zXiR3nG5KX3L3VMNEP2VvnY5amoJCNPDXvmJzVRCNFvixoVUVEad1UvnSrJsX9Zf",
  "key23": "2yqzJTrYiahnfuLv6KSEeLysAYxg9agpXXMyBEbqq7Jk86gBYiMzW8LLr5Tyq2jz3fC5JNT1DzVtTK5of7vRH2iC",
  "key24": "NDVRG88m9cAkJEKs2aKipb39o61k5keqXDSr2zJTJ6vEYEmhhTw4JtaJgSTU7zra6JqtRBL7GjZzp2Vvn2PJLgF",
  "key25": "4UfFfBzKics5MK628Qk3P3rWD5D9CsXkHo6Nu57xnhDrWvp1Vz19PZeGHZVXCPyV7PgFqXTmVcXnu7UUwZxngG11",
  "key26": "4A5QtSDv9LkTtR1qvByd85rBbbatyXpyY9n3t1DRzhKaFRV6xfVnCL5iASToX1CwLQqxu7T5XuzTo8eR4vSsGjYh",
  "key27": "4QwaEoFqbNF5zQZfDQX3EuCvPnEYZ3rJuGtYZaNEpYwwxCLonbmAmS6YYiBornPNVq2FgM5VmD2ynBHYjhifedqt",
  "key28": "56F9ZEVJqrx6nDLwPzEHLtYWHdbRKpswszryexbCuAHsTP4EUZMuRu6WLiu4kUCwdyca5FVGHaZ5sHHha1tKCVAE",
  "key29": "5ZTz9qQRikYAM6kUTurKd6hJ3KkQmN8w6CzQrMwinqswnVNsxREy5sdbWv1GX6ZXDtJvk9F55HQyP69vYp7vPKHo",
  "key30": "2KYzhvfvsYRjVEPXpZtaKSjdKopdGcMb3jA7hhWsMUsB849SLsc8TeHaQoD9Qarp3HGk8dX1cALuSxEtnCbnywoL",
  "key31": "2yvdYnnoN7fMFDnLzGvHHXrYguM5Gbv1rQPNfiJNhaeShEjqqCB8FkS57k1Atu2sCuWP5YG31UB8bWanE126P4f9",
  "key32": "2LciDv9YvS4SXEj9cyWEgMMB8sexFzCURmrVKRGDNkGEUWjbzWxVWLj4bSp6Sij3EjB1SPjw19ttNAcuTiM6GYkR",
  "key33": "3TAupJTq17t88p9RhWpgDC57wEfuyq53fnmo7gvTKVEmHwpEhZucYpUSMgYNdTc6mUSWynxQ39gyQoKLhLndH85n",
  "key34": "HchehdyrUj3y5gN7tbEgr2SeezaPuD9kX6D5VMCcwsdB6qvnPtuciKtZJxjsjBx7T62rxMRhogHE1yPKf81mq7A",
  "key35": "3YNMAdSUhFTpm8JrAJwXqeN8HNqUcJrsKETGoTmzNvtrgEdr3nZ5ywZCF7uSoc4QndAkrASesP3m3RvdG9NmjMxd",
  "key36": "2com6S21SnzRdXrrdDuUhJ2Ck47PVooVdEEwM8t2fnZDkAyc4vomNtPKDFZo7SxwNg8Q1S4LMEEoF4uSUzyTCwWq"
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
