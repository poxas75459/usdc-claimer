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
    "53FA2LUnNXv7HhgNyRyXb5vFeoPKExFayRkcExBfyrXdKAGPbkF42x4i9A1yt5RAdXWB98Abj7UszHwg3bGjWJZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W4d5vKZzmvQzU1VDBhRYwdoTG2y7qCyPEyCS2FhQxMqbfuCLVfc3zaTS7spHfNXZYLWTrYS4WtgZpEgG55SYskK",
  "key1": "25ebDFx21DK4KMxruxgiTgEzMByrJYzxYGjC865HgXUoVX3f6BqwCMmAutCX1wpPaVD7cYfSNzTfjVALrsBbzzYF",
  "key2": "SaVd1TeiLCTHW9GNxTMSC8hHKt4U1zV1zzFaDkdbYGCmhC2Hg6Yk3G2Zi31h3tQLRT3zLysg4HGd5xqw1ihhhCn",
  "key3": "61Twgu6A5LHRnuRs2rUYZ1EbPKJKVQ6uh7FyVLkFNp3hcDWMAG3tih3BLYsz3hMii7ysyQvMPH2yCCsgLum2mvQv",
  "key4": "2KPugSM2RG4GhSNUQQP8VnGTcVTMWaFLWGTy4LgqqfcNaRw5585jMkmsJmNZ9GYxrBZENEoaq1k1iTCyfMjVDhmq",
  "key5": "3csxBN1yY8ALdsPhf9zPiSmzw29UCXoVjrHwrwjgKxDwRGzHVa6tDQ3GUjEAkPJRoofzb879smWakT1LJWtNeiKJ",
  "key6": "5yV8hR67Nn9trEHEgagYaSGEKHvbdbStx6tua3XjT4SHATmBgFj3jVf37JyQBY8vx1ucrjWdY5zu5GAvBKbWdXsS",
  "key7": "4CTANEBzQuP44n4eJUkqiTgNuckHsq2AByfW5zEWSu6wFpzKZmLFKePnstPAcTr91hWtYxc8LVcZKNQ8wJZkDUot",
  "key8": "ugtayBAsyfnd9uUyenrA35HgPRnex1vVT1rqNdbfNhBaXemFZ1N7NfDBe9NbRB3SfzyDRq3aSZ97g6MepXeHRBU",
  "key9": "4a4WT4FLkQsMW6ZsVcNv5kNg6PSUfd5Vtv7YEvMYzcSj9W9HGZF23WiZeJwJsHMNLnM8VvkNPd1fW8xwGy4gFqMf",
  "key10": "2vjPEEuPm1cdQRxp2EQgbhpFDen1RMWCuA4XhW4nue9auMv2q2zK5Ugs51vp5YVyNsVqW7cJfUynQ3mtfxpaipUi",
  "key11": "qkKoAJC3ABWtaBuNuK6kq6MimogiCiMfs2R4DVxjaUUDM2T6pyaF3UWuGE9YtwzfGDxRuBJjKmSQ23hQQ5sdAgf",
  "key12": "5L1rfDVgDwJdgdYxD3T5qv9gF6aBMczPcUcogNeYQJCKtu4Nd3BLbVMVbScA5bm3x8MZ7dbtJudiSTEH2XDvyJcG",
  "key13": "fRTLHmK7GPC3ohRUn6VJFJeEcqLM16g81BrJ8zXtCEP4jGE5YQRGM9erNoroncYkm1S2ccoBtJd4wBQqvHxWXMD",
  "key14": "2ge26Mx7yLJ7uPFRucAw6ATtgCbA4ENWgYAYvDxPGfKzTmZqqJjiByQXS65giD4n2oZFUtrrvWqVDz9HhpNUBTQn",
  "key15": "4mwNnJwmFBVjYFhcsar436SkhLCfayvW15MP1erBN83cVWZVa3uvWNUvrKpVh2DzW9SZvHhdrS6kZxoSZwNtvRhK",
  "key16": "3KoQoDa9x8AVvaKaxhF9XN8e7mM3CfUuzAHhiGiBTc8WEoYaMM2anufvLd4wniQQxN9QbA5LM6dz7bzDvjxPXvtR",
  "key17": "2pJT95jtR9BYsnZrZ7kd388ZUrvTHFB1zEu5wh5Rb56sgMb2m3HdRAuzuTqjXJ2sCzj4vbh3aZoMqujaTUpiaMEk",
  "key18": "4ubTKK5rMUND8CsyT31GYNdNT88Rz2KuDSswbYParRpdqabcN1b3ngLrx9fuYR5HxJJnjchzsjEoGGR59bTLKFE3",
  "key19": "2Y4TUBVXQ7xqBCQvAgBeyLSRADEJxezHd2kNgq8GSZLqRp2BuuRcjNYQ8dpCUTkXVzYXdiHqdgJy2aJR1NKm4Bm2",
  "key20": "4RkycCCxBv7ytHFgMGxzZsfTSZGrvHUXvhXWiF1W2mjwbWde5sTbTB6iF5zSgddiryp7rYHSzjyPeRsSpBS9xwwD",
  "key21": "4d1UgLYQg7MzDNjJeLgbXcMNabdw1YH4rRHx8VDuSGTh1xvERKCkp5b5KEd9merFetzexVhHNaF1ccapztKzUfoA",
  "key22": "2yEZns197AzXbgtrN4Kne68dgjQQZWH3dVgsEsL3om7YjHPiv628yfzeYyXPTv9QtVazALQw1oG6uDmo7y1L3K3o",
  "key23": "4UozeCdDXx3PMaVNry5rB3uhj2WUNkaEk9YUP53xw5gxoBVVwtCKHJpM3ir4WFmGoxguYsv4nbPLPkT6SwyKd8ks",
  "key24": "5P8bViFqPgbQcPUKg9HzBEqueAX5K7WPPXVuQXsiR6hjksHpPph8gs7gfgG1Kmimt38yrrMk1Med4C9xR1ssNvPo",
  "key25": "2i1a7AFAQRUcNELYZzCDy2iVNfmXrYQFyryR3cXZDpY8mRJiqd6WFFdxQyFN8jga7FBnLNC1YkmS6k37tp6D7qH3",
  "key26": "4zzDYgZ323Rz4ppgYXkxNUUbqwxcEBYG1aCvNhPm8SYGw3kVZzAQiUKKrLPfUTxte5w2wgKxtRMbgp5q728JR63y",
  "key27": "4GJjMpFmziYS2d1pPLY7YGdHaFsvmd1WBbfzPWUjT9s3U3q4VhHGXpJuqCRjQYh6otZsME5CuTpYJexsehhxDoSD",
  "key28": "7gi4F96j9vP3HGzkcvQuzkpCBcf41ssTAqEqeV6w7KfJ3BmVm4D1Ab9Dkub2TYoQThkeY8ff3rFSyuKU5qMVEsH",
  "key29": "331ok7TcW25XwawF2QhuGrNwMviWfMPNbyaWYoV5i78XrZ3snmdpxtNNq65kTyw8wbsawR3rfBywrnNEd9jva7t1",
  "key30": "5t6xGfAdTjPUvAewZPbWVaEy3cc9w5JFPYGmeSXzGiLTKFHJeEcSLVEaou7zBiy1kRYCugtNWpy53Kk8M3gD9RGv",
  "key31": "2MPEwZaXNGBKfFvNwoSJwCJreTnE6RzDcZxiBHVNJ3pjxbv3ZFZ2PGdP8phJdyLosofD82CiApzr3tdYcSku8KkN",
  "key32": "2xqnF5KyiEs79fEh6pAaGSLykBkoRg6ArxDshACKikW8FWB2GJroyja1Xc7hcB37aLeu9xYhyb3aQv9rR5AUQ7Nw",
  "key33": "M5Ppw8Q9P8eEzzfZzUnAUJHhGUaTj4qiVgcx1HkJ3TxDTnXheSoNdNQeYev78tprT3cwNUzRYmDB95ucYtHzH2h",
  "key34": "2YqVEhgjZykeSaYMJDpGJNv4MLpazu42xveBSsoqCSVmThoxoWrtqKv1BLZCpb89C6Yj5e4RUwEFU5ypUxH38DBj",
  "key35": "25fLYccAeicQizDPdgZmWrhC459bopVgbGi6mB7Ax1mwc8dj4wcwJyWRhhYkgHMVXMJ53NSJayn6QyjFbH5FHRza",
  "key36": "3aSeRdbMNBGiGdxzcyLDaPG2D7iZfuLkAppexM2hcVkPbEWgtyhjC1b8A6MPHUSLLsPFefX7bvkytd3o3tWdwvvQ",
  "key37": "5wMvr52UVY7tGnQu94zK8jBqpdYpAD8nfPdEFHa7CTeHkKEzjuDA262QBwu8YWodzSYR7VAfCA2U5qkgmZXeKi56",
  "key38": "4ip88jMnjSmf3BWkr2Av3JYGdP3HyEdu9Nz5sS9yqhDpVi7GEBpcKkjSaBzLBZjtM37j5PtpqG29DfeQoeexvaCE",
  "key39": "3jM8sSa5j6etE8X9hq581rGNrkBwyvBoP47yhpeCEMhyDMr2z1Wnp5eJ5EtBVwKTsspr9Kreo2ZRCcvzPJyaYTzw",
  "key40": "5V5PhHUa8zcqLeVK1yzscupxApCr3sspQPgwG9ZfmvZN86pvbRAkhVczuCtXmGBBB9i6B8PR4KsXB6kVUStSVvXo",
  "key41": "3FQvjQeaiAYtD5RfR5aLKz8scN1NXeXVWMWBcd296oQHsKfyiznVZdzryZCArvFDgRn3pWaKg2XWnGfj3MRgAuvk",
  "key42": "2siyKJ71vsCJSQeiNBYfFf2MJavLsSwc7nvanSGUp6DEkwAVUvA7HVzHqWoWiZcjSzoKWZH2RB6ppxTWmGr62wy5",
  "key43": "3EHzA3iDbFCLcux7KfF3BmojstU3eM1guNg7H7eBmfa9qvm8kMHHWGJp2fMdmNk9VNZdysLdDFAVaEaMyCucvGTb",
  "key44": "xfK5WozMnAWYmHYGvRXi5YfNEmZd7tK4P42YP5JR9Lh9FpXenDjT75FNk6qjLB4iUMswj5ZqcG2VtnqXt1TbZRv",
  "key45": "eKBWKJW1LjBJCCZdREFQigL7MESK3qSRUSV11BJG6SX8YzKtZzYL7YgebCrpSpwayCNzuSpNHtzPVYXLEpJkPof"
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
