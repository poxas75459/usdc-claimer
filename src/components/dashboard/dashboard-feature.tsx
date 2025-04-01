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
    "5NppCir2vHkskUYBLMPimMU7iNmGAhfe64ss2Gamu1VYmZRDy9gsTiWugtjPXZmHQqmobM1BnKcWHKcqLseJzHy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nhkvo27kfm6PS2NkYnAyeSJxKXVvi4bSMVJ2Gsnpaoqvj8vnoZ5rVnTKRDEHBKDKgiNf1bgVBfxwAtzF7cyDJYW",
  "key1": "4EX823VkFffi9ZxZqrsBuQ4TBciV35uc42KZUoAHhCm5D2sGsHNAFV2nAMUMkNHPfmmzm6vr9ZCNAfUE2Pix2xm6",
  "key2": "472AwbN8ZQ5zSxVSXQ35JBNKYmDUNNq52PZNV2WCfvs4drbKEPYNz4DZN4BktzKULxxnfHuMFjr4QXkou7zMnojs",
  "key3": "3SeYHuJkPccLVzYRvYZgKHuV3yQhScrP6FngKJziinptpJerhGXXs56SyxfeQcHCTLwhiZNPXKxvqWvsJgNsQ2uG",
  "key4": "4XqhUa6h9n2brxqWbrXcGL79v73uYGCBAkwJEGAewGJVPoqq2BMNdJSSNjgzakwcmhAVRP5Ncrg2NpdqPgbg9dqK",
  "key5": "edcUGTZXtn8kGw3gDwKt4FzdFPiyeFzoGQTo5qNJuAbeMA83zhWfDzmmv4kxbMi8qu1NJCX8kQgJmjVqTXRreCf",
  "key6": "55XmSuVnFcLLaTdvf3NXYsnTc1kuJuRDiwBsq6AspinN3dN9s8FBjREW3kUN96q6711k12dUQTDvToGx5TKk4ffB",
  "key7": "wdxboyap2qiu4MHmVhcCnB6URsNW5DVoFgrFH3VHtWJYS1r1DAGRc6SwpVUgKPFk8vT3NxAnVkEEoQZLC9uTVrk",
  "key8": "5pKUF5ZMokGNTTTCffzxXHdLzRpPe3CWNCS7cH9XjGbhC426SK9ME6tk34uyFqXDSoJFWLA45nCVdmCjoeLyrouL",
  "key9": "dgYGaQ1BpjXqLETFti9nH7ZgKjg9grTnP7xANzN225XcBhGVekDJEQHDN8XgCxArLtCz6jsqnZSNKFnx4cbZJfw",
  "key10": "2uqTKXun3VaMzSWV7mPVWdL657c38gFGsYJG45iGwsNFSJyQRZcVzwEEdjEVevpUbV3MuZ71HspNdejJ3xYV8r7Z",
  "key11": "3Ag5zT2FD4FRzer8dq3et1MmZr4XQ2MHVzttmKhzF4kntcSTwxrX8AumyDwVzC91xgxJerTgBj9JR1uGwXvgqbbg",
  "key12": "2PdkZk9v9BJNjP7JixY95rwttwzQ559JZHYmyULV6LbmhjZYXCueJBfZciiJaMuUwGVbzTBAhpQrBTzNVJ7tzqjS",
  "key13": "5tYTKkHKLp2fnigu8tKAH3A1UQ2jhatYza6A9JZAJQ3E79PXaFbEGqggjaHWzLT7skutd7x3t32mR3L419ZRbheM",
  "key14": "3dJHdfzPLsvgzTTDJxJ3U5jrUK7T1eL3fJR6nsEdvndpBj7RM478U6FaHJ63WC4mjx9DUWKrfRznvV6Vc86EvXFb",
  "key15": "5fJPvv7uR2XBNNL5CytDuVPWRaZfcSZN6p2j7JY8sWhr1hjkAs2S7MftV5wheCvDiCwUf6eHabQ83LVxoE5ApRkT",
  "key16": "49VDH1FV3hpMbNPNHFWG3gWq7gCHT95sKR77D8zfvoe4XbFGCpg9DbKM9xpje8McnokqSLpw3uwwcXX3WzhFM2Hz",
  "key17": "2eWnPoGcyUy9r7Ghyw9XGXhTRuudaQ6wDLUnKDg7KfUAkkYyZFKxArEjjfvxCjFAfCEbLza96oRtH5q5o8PWFapn",
  "key18": "5DS44v5CbDMpzTcB2uFDbjk62bqMM3VgTZ3L75ioH8929CjDGxHyheHcx5aBGsVTzBjntZ5Y7KsrDMDw5UpnCo58",
  "key19": "5Ar8cp7qS6sVPw4uJUdVXheGybGfA5438UfthWYRVFJ2DBjXqcYoQaaD8onTVnpTYgaw7rSq23X9mi3c8ThSQAU2",
  "key20": "4c3LNvsWuYakVTx3hDLyFcUry9S2W9Vdat7UMsvewExKpjaK87tqKPUpN4kbFPM9Zx2voTQf48YtNsHEKEXS4eUn",
  "key21": "5LmSrHQdadfdooHD85V2jYAkHuv9ME7EyfnYwJuaLX7vSKHDJV5xBLHHvjs5XChVQ9kT2LBStirDGTYM73861PHQ",
  "key22": "2z1g351aSeC4kU4qMhQT6nSqmdrdaeb5RN2dDZHtr22ZSb5kcFMTjPuwbiHPArjtgENc4ZxoRa56DhpnngmXkMFc",
  "key23": "XpqQMJwj79ysSp6RJV1reFMX6fKvza9YhabpoLiS5LkAQmmjaUrrki81n8SVfa14jiMz6gpr1LFGN7kJFZJTVks",
  "key24": "2zKzDbcsqSkMbM1MtafLKmWeGoEeYNfdGbXZtMgzeuH4N4HqWPuBBNLtKcn9BeptgykTnv3KTpT4rp7b1JQgUmDP",
  "key25": "DeQcpFD5sAtGJQPHBb9JQpxVXsxUyji1PVU6G46MspVUQ5RDMrmtfhvdr4AQFaAFqtQr2xGDaps2kM7vdejSZW1",
  "key26": "3jraKkpQ5PPoEHGhPro8MVgFDgzc6BsgqTK1MYBzLA3BKrHHkiFEARLRbvKzKz6q1zB1xr7UaFpncw7bHtXfq2GS",
  "key27": "2RSfUtLD3DEFP52qkvUY3j2wHLpcMxTRZJXz4eCg9RDrtEzh6GUy7NkFaJGA3oGh3XXwDmCMTxAWZxQfwDEWuUNA",
  "key28": "479ZFz9weGvLcgMR4TyP5d8BvxMuNBj2EUYSgwLrw3gB1VKpSyhfShJ3VoCeg4yKiMfLPDcxdPFSP7h8oKzniZrx",
  "key29": "xdagu2d6rwV5FgQNQYwSirr5AA4fb9cXdk7PhThMgnV7Lm4e2Jz98EqnKah66wAQ6swCucSoDbKuj8dFYgRVyd3",
  "key30": "28Lk1JosS4wLhK4TdMHWRUm63M8vsyA5snXRetReyfuytTY7YaXbpUC8sRKBFr2H9JYnkpKE4qx2qWtMFMVRxEc3",
  "key31": "HrauE2cXzN5mGpGFfinLjFunaJ9nQfHzPUuWnsvwh6bZeFwxv2XeH9zQqLAP225zTKbUBZ1VjYJivDwj3Y3jnSe",
  "key32": "5uHubr8ZiLDv3bnbdkWEva7ckpXxYD2ajM5nL21PinKdpxtWG5UfgorucA4nvPNEZ8L86DeVXZMd7kQ4cQ95Kapi",
  "key33": "62PU8yFMmebfnkKgzaxcVEnGgUimLJqefCDu2gu9ekpbVueX8onVg9kG7NytCabX2T9TwnoLsNRqCHEcLwWLUEUc",
  "key34": "HWHa8PLuwffpZhLzvNxF6KsqYzTcwEP5v5Wo1kmq6ULUcWzyxGBTWnANYD5HSHSKmtKPnfQckNCTFsmLkVkq2vz",
  "key35": "6aGhTmxXrpWgydQB92gJbDaWMuoMBEPDCBpqix8VzskwmFRGeLc5BVUeDxWwaVpL96U6nEjQuXrcTKGKZacQEhX",
  "key36": "5YJMmvMCpH9huEWx7vSAXpvx1nbqAEp38eFxvgSqza2SEcpUtveUFapP964nyg6U86jh8FRBT4gW1L2PjL7yJdRJ",
  "key37": "5jmfhnySznjrmWnxsYdXosj2pYnJXc7PehRJLmbbF4Q7R5QA3B2xMD5FQSU16UzCpDKeMyTU8XYwiukFqdfwaiKU"
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
