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
    "emWzLrmFjwkqi2TD2U99xckMVsbQXWZbYTkyhSbHNTqLWosqhbPnqXN3H7W2buQfkoTJKM3Z6Ep2ENULCAE7K7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dP6bsvrc96nxDmMWnuEpeMMRfQQMXsSYD3G1p3y6LkMmwAhfMxYXt5VjvJutejRDwSXgTfmrHiTZwXE1fGmdKCW",
  "key1": "5RMViC3hYNMRQZ6VETEKz5tMqPFMWAo5M7dvz1NRcRYg8Zm6K1HQzPP1hxQse2b5yAx3TKim561gxxqUvEGwVg8H",
  "key2": "53P47T6BN1DYDtRg6w7nMYCKF7Hg1ZCB5wt9m9UWnsm5aSuRMWJSEvzmnT47MexxnvYu8Qr3b5yAfCb4y7a5yvzD",
  "key3": "GdHRgZ25C9254ZMC3yzD7EUVcG2xdkZSKHS3wnVtB2EkDGfKPFT4skZwBpQPbzLonjojhHxzR9S6xwfv9qmfncf",
  "key4": "2Yirt47fWZhvejxc2PLhek7VFw5odPJtU3bkSXuxjVgRGWNc7GtrRvW6f4cHr3X8qd7YckAiKNcnhhXykGDZHPBL",
  "key5": "4wSp7uznCuLX6oCxyB6Ty8dNRjSQJLCGib12vS2QtHXEtrioj7xYW2ymxcJdW8Zg7TqJxyiBTMhVorLaFZ36wkKX",
  "key6": "3K3CzeUNVhDg2AFNKLSL4HgXnFtoBbjsn3MF3RaJJsus8pasLfmUqJtVVAMHh1rbPGzRSiC31D91KpA3BsoW8cXC",
  "key7": "2ehV1aeBedHC2DYPFFkmkpacpb8Qo6XKLRFtTK2S99Pu93Jv8osXFDcGFjzjP8egrVcr7azcaNsjGrYKop9xk7Ma",
  "key8": "5H66Z9oQPUxcxgKe9LnUGhqM8pdUhNiaRyczymeTXxqxUmpycVX75UXcnVxJM53AeM4jLbX3surLsvvKqZt1mSbQ",
  "key9": "46cLW3KYdpj6E6YbYMQYgKYhrfa4qJ3twJwYU91YExo66xCCPUyVAZ7cbcsDYbiocFxehkDEWUxyGN1kdb6r6RxJ",
  "key10": "589QJqVE6CLnU4wDLcTeZXr5s3fpyQwTYbbbCywVqVp3VN1uRjG3ySi1bVPZVuTtTs7xXCMA2KT4xx1n4pS2vdLQ",
  "key11": "29WfcUudaRgmAkpVSH9VLadB1wi2Ya5PzFGBwvLknNGGuFDvKrpavNL1BSmWVPpGVpzYY63kMLQJJ2Zxz1W1fJPm",
  "key12": "5dACUt67ZgaYQanRYSWoj5Tv3mkw13J8JUpxGMTQ6UmYD12Ba6HKAhxyvAbrBGofmp24Gt2zSh4KVohfgUpdDSrn",
  "key13": "38qUjyFSCfopZUYCQGVSXC2ff1dhoFp8GHSuuS1qECaanYK89EZV2FnWnc5j4AozoKRsf395qe4rf9JFgrerYUMz",
  "key14": "4AjwUPC7v9cj51v98kfBAa2eijx14FFdbrwhxAYNpr9CZMFTr1M5FCMCxESJSABuvbN8oH5Bh25NEdCuruLS2ffN",
  "key15": "LkPfKq5cQycN6GCEDphzzWouCD1pVSpAUq3xKU1GzYH9VF7dPdaYh4jBNaxqE77Dnyp5mfyeDBBMuJpK8JmCmHZ",
  "key16": "3xt8pc7a4riJkoXhXupNTmhwctqaWcQqkHCTD7yrSV3NeXzxfxz2LBJjJv2H4XXbXZ1yuCUQ17qY1YSc9EeAQbGJ",
  "key17": "35EVTGGmuQvv3hFeX359rUxYkQuBVV51jUoKKoqxKGBM5hUdpDsXAdUv8omUcjeEQR7CmF7683dCPQrgMnSyHBaw",
  "key18": "2wLrFn9WzMcx2uV2RnUERuKvurE8ohdnSgRcPYMsNSTxTFTbvqh5wyzHYKDLRFPfn8fo15Y2EsjJeuiF6iB23LBn",
  "key19": "3zom7ygPgyPc22f4LzAbd8VdKGs9UXNAHNSe9UHY263AckfFcwa5ghhAeWQLgoXy26ofZdgM2wqnSSwNZxhc9TTj",
  "key20": "59A4Vk9jSP2h3H4zEiWP4G8zwdH4iwJEEFApzVAKrcVKd1rRLUDQsdMTu8nBq9VRFkoMQVAUCSeFMnEV4kf3HavT",
  "key21": "4ee4ggETAM4d6b6hAxDg4bKW2WPBHAj4xBmpJfU6BQLmVQho2Z6kBKUr2QcADZhKgKQL84Gh7RjLAbN95cP73g9x",
  "key22": "5soVW2JjMZ22tpoSEnhXe1iX3pNkiJfEaxGasdsReY7Zpg9VdxHFjK69KdpvXgFanBanXEnJHpfSkqCYLBLxVy2d",
  "key23": "h1JRnQkH4GYukYDZBDLfxPFRn3nW3HhazZb79Aoa3KLo89UQeBCN8wK25MHXweLBvae74Uvg6DJnLrCbipQx1fe",
  "key24": "4Q5NsH7hdMkFgQ2zbmzEzJ19ngUd5Ahp7HNxx3gTPzqkvyjyeK1ihMkVXt53gaPWoTbdzycPdEoCfdg11KgnE5Hq",
  "key25": "33ciDjt9gTNtvEA8P2yJVmkPW6r7mhfVGJNqksT4qhkmpZw9nVLw5ErZzZHxVCwSAYpYApZshhYXphvf4M67BX2P",
  "key26": "4r3AGgcxEwNx5aGWvpz7utqyDaU57iAgSFWCwxHPyKe1D8vbDs9EgD3edM7XwMh6PipgsxusDUwcXk2gu9yF6Ebb",
  "key27": "4yyYAo4jEWfvoxf5PrqHjvfV6VkLyNw5jk5bxZYfTFxwuLZS2w97gusF4DBCCh7PRPx9QhTKBrgXrcgPxoNDrVp6",
  "key28": "9ZiM1cd1EpGSe3CDcCLWaLy9T4vEjxtUno7F6bDAiMBBpJ3DozKGi1MBGMPDiE2HkAUKQ6nVrSkNqzfM6P1HbUh",
  "key29": "5B7RYg9wv4gn2Tkh32kLsukavchHcxS2fBCwgitoo3QYHs5VLqNHnDqPY5NZQRZd16SuFxfmRkyfn5ZakcJgKUMm",
  "key30": "5wvg7iuZTnGVaQWMm1KtpK3mFroQ3inc7Jiatg4SAko7fGGVcmXuPBM7Zg6nPSS2uTi4NEHWk3Cjtbza446eJsf9",
  "key31": "2eqe9vq7VdEmA9jTdVZCbVgdZZbzdszdK2Tye5iJ62yM93nEQVxfKEonJC4KMwFesoLV3oWMPuR16hwxBZbXvjsZ",
  "key32": "52iUrqwWGzZCfLQfkCuazDLJ6rxNcU23Yeq4DzxaEqM7xH5hFqow35annH2HxtBhrZ7rkLAxTmbSaeDUoJeDYZNk",
  "key33": "44N5CdzkmcuC1LLJ9UdDjjuxxL8gGUVJNk8FKkp79X6YAyacnbRsdVwTd7h7WgdTKw8MdE9UB5gcpNBfdU9S2ZXN",
  "key34": "4hs9mBGLbNu1yxSvaCX9T62goJa7Z47HvM58t2h5KhZvGYauepaYv2kF1xR3wwrZRg5x7K5k1yaeEqwJPmkFgEm2",
  "key35": "5PvL8MNKtC825x1tPpCwtrEoqr69Lhzg5NkwGRShk8BDGpbbphxYjM9FY4qJSn53HjWzDuDuvep2erSkv8XTLGpE",
  "key36": "3s9ET12436xRg2rbQQkQkCVzYRt8FcZwG8NCZJmZbubWWdNNqUMUkxfrYvJ5B8Jo15V4W1pxTxyKR9KBzpnWeUzM",
  "key37": "3Nse54mLDbKngvz48jLds11F4c6FWqC5vtyRa8qP4pkAXwr6Hga2oYtBPn8NrPyCqwzQ85FN76YcWGYP6f67FRmX",
  "key38": "2vVTLgJDCmTLHANwaCVaWSyM9EYYLkvrnFPiDcavbZik2JJZikHRq9GNrYHu4pppJb32r1vS1PZyGzWAFrrGVbCV",
  "key39": "HZoeTQnj7W8seUNcamsdtJYt96gMtsLJoVz9D6h3Gi3nXJTR3GwJ8DbezfH4ETMewQeFz9JYgdspQvQxbqaepNg"
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
