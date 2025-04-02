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
    "5RyMWCcTSD7EVfksWcmJwusHLewo6X2YJ8G5SKbjxeSJXBadFtPXWKW3VBa4KGyL1VeJVJqhPPMX5MQ3QqHTpQin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YPSiZ7BfJWZRULJ2R9TSKPeBSPL6sd9sNDQAVG5FoMbqCaNf8PJMasPdwTVacfdVSPArUreZCESSRcwuo4ZsND2",
  "key1": "4EnM6TynmE36a5cJqsXzZutqnDkmpQ2gSzrBb1REPy59z21NuiUVNdmePai4HJ35DaKf6ntSxEP1icUNdAF8bkcK",
  "key2": "5y14KE5Jgrv1FaLrRVHA4JsooiBjgo21fshThzpdzQQjKDWCigRQTVvWwUxYw3L9FzrXfrzgSdzFnHaAvVGy7VwJ",
  "key3": "jHhB5fTGpLYm1DPKd2q1e1jxAX3wupx4FSL6yRUDCknDaXYMS8X1849in3DmpSH6rBHJYvHPfR5vX5po16RuwQ8",
  "key4": "gU4hfMNxtGhBwQep8GKuP3SH6k4jrRDrNnBPwdxdFFpDSaHbiexPaLpFNSqQd5pxq5vvutkKPprc9zpJohVYMrk",
  "key5": "3PrM6rPV4iNpBhdN3x1yamDjZF3zwBou75VVRzVJtQpeZr9GVL51d43s1Gq9g8ZtLgK6pDjWaJCZxRZaqRzrB576",
  "key6": "2UHQmucoPoYHZN2raatHZGkcpqZL3dBknkeHbMS6PrS6CCQpXXrYkAuQ7ttqsCqm6z7hG65h3ohBrBBi9WEaiiD4",
  "key7": "3geXevWSy53oAzosfrr1r5rzQCRwzXdCBHVbfCGLSAzpmMcu1neASskDGvkTNSurVanEDaZGNjXg69xvb5S2si79",
  "key8": "2SSdpwL2Fw6QVZb6MNnAP2o1G9hrXWnZWaNJus6LDC2ALoBMzPBzEq38GFeikaDsSRF6LsBq1kxgdccdLupve4mD",
  "key9": "J6bhyw6WFWaeivF1GXjjjXLNuPKrrzB6wn5KwyQV7RgZJkwuDGA2hdqQKA8pbgzwV2oZUX1aDJQBd4s5ea8Atc4",
  "key10": "do22HUTm2sHKJTsL8eCTdPKE9qypyg38TBymmjiG416ZAnE1CKnkAE7vYKc9un7LiULU5U9xuP9Tb4z6HUfBWTi",
  "key11": "6ZV5mS5xMuiewwc8Nr2yJBjSRD95h2ZLicjHBpry6uLf3NN5jAqgAb6MBgSA21NtpdkfdnwKhq3f9U83ix9Svsk",
  "key12": "2sKeJSYVdPeGFVjTv5ovLHnc94g5a5ThXveCbPEEo4emaatuody7kH9Kg495zBuCVRytkbYEGcYfbfDw5p9G9CY3",
  "key13": "2kL1Pz5WWKH6n9Z6K2iLDKyJxTtJzhq1H1x8HMaWYc7xxzDNuVcgGL22LJGRLNYc6pUFZV4i6M5PqQScTEHuMde5",
  "key14": "HmspEh65inVBGqJ3xDqbdRA5eH6S1hsXYwFk5fM1YtqJqQXZcWtTWW9RGWSuxUSKDMtMVFNXUGU1zJFVcKcpTGU",
  "key15": "2GWGK1zhH6jnU3b3qEDPWMtAeLV1ueb5qssSiE6LspwnKUHH9uiG9ecni9xhNij9uvBs9kgkhK7WpDUT8wUVhBSD",
  "key16": "49k6xdEeVvwae9wzgiXRhgB3EsNMPHYY5kb9NGE9tXowz73F1rkxr6oXJ4egdx5CqqBaZngw2fvG5deWXn4oCfj8",
  "key17": "mpFpsY2F4q2uKbsRjXf6YpG2j23NhVc6TewgUmvauJjuq893kg3rwCXwz1svoUH3ShTFr351bYU56MruU3szkCA",
  "key18": "4rB9kBV3H85uYAXUGT7JemwqcyfcjSbd7LJXZumn4ervfJnwcFdutuBsTet1D8qZ56imhkmj9RqTPcHFqhjLFPet",
  "key19": "2PCjtwRcbpt1GRHy9m4fbnFwMPpfNEvvPBoGeMcoRbykbTcnjDp4BanysK2BY1AhpNE9YGYRMeeMknDF1uLpXB34",
  "key20": "Lbr56CTDiy6SzA9BLEzfsXCF6bq9RDmhatD4v5k6TcaQVVhgS5LKeZBYmqqkJ9KRvGAFxhmWGsGo6ut2bve1Z2v",
  "key21": "4tQ5yCRmmqH4wS6hW9nXBCULy4jxPQ2h7sANtqVoRd4yxkZe9D7vKT2m7AeGYeoKGguvfFj1Skc9rPtdBzaVHafi",
  "key22": "Mmigz5XMHVG474pZUTiPxQL8mVck9qiaofyTL3kkFeSkgXDg24z7U8ZzoS6oKw8v9zCtjhhHMK77DQwc9ZJXnZF",
  "key23": "5FCa37Dx1eZKZNT9B3DkoM4jfoDSKNbtXE64rRZGPPmqm9E4WbeMZc8AcqJRCWtY2TZxqNuydL7dRaVuEgxYnQnr",
  "key24": "U6YJN83oQgXvUkoB34MBpw5tKpByh9VxMQx7LsEqeaSNfKknmSw8U7hkR4kWPp7nSrGAk7a5wn4sTcyjZBc7MGp",
  "key25": "U5CNdJeP7qjfcUxfwnm8oCmeqVabQvRGUoxjQxx2CCauehdFXiEyUzTkjkkuMdRHvS6T7iQZcCgXvz3J39QrLSe",
  "key26": "5Yczj1LXAxeNYh7N1R91223x7S531aMDhJ8LCXau9NyGBQAHfsEiCwjUjPj7iwpGGv91M75FbHDzFMWypCVeenfH",
  "key27": "5xhCQq45VBbQf7yWvg6woS6w4G1cptNquSMyEbwiexSbAVyjJhMmPj5XW7oyci5EHhnPFo8L8uTsh6DtZUc9hvnJ",
  "key28": "2mVbco1yPZCTTMGPk4RoFzLbVwj2CK21YpbZaDT6fA6bYH7EFKoHBHQSk9yCeDFwoyiao2uzDsdU2KoTFaXebpv5",
  "key29": "4qU7n7rATugL5dJtYepsSR2BE5qF4UibBc2jjZ3vPhY89VJqXYtSrey2cXgFerVtpQnaHxAVoYEdVTvnMEH34bs5",
  "key30": "4MUhzP56DCPWkPf3HGiJbqgEXVLWhQfLhpbguAtfZz3jpY7eQ3PJWfSsvDLfYE6uw93kPDmYrfCCdfnXR1GjJ1bh",
  "key31": "4tgrQ1wDgcCywJecMftXJvTNPJcGV3boghjeVmTF3hDzJXqgexM1u6sJbGr1cwTHXfytqZvrKDZRP6tGVAhmUiAU",
  "key32": "2zcDF3XSb8BWDVqUru6RTj3UJmeBm6MhwGcrigJL62p5WYxkdRv62qMaFn9PqEfCLSFbqythKsbbcy3Uj5Us5Xzk",
  "key33": "7ABdH5Zk5YEtdqTELkVmjg5oUSNha7c6VuDN1PWPFLnj6Mwquta6nrEwauMvreGQ56w2VrX9Gvj9A3cxoLUXJFh",
  "key34": "3h8ZG2zxnFtBSAz1Dq71K8zK9D5zcf1PZF7TEGzA3wCfPEdZBUbdNrvdZUTJFNFQLN9qjhhCzHsMPK7YTzcRrA3G",
  "key35": "4CxE5JHFydsgxe7v43UJzEqwvozs48soZAyMdUQuoMt2rUCZYA2nA4CHYVy8kWTyypNMDDp8fHSJgbH2L972AJBy",
  "key36": "5zZeXcjNo6KZ6ivKr43LMxo5noYk5EvxYQsfYRVu23QJS2ECWmv1XLURCfWSFCGwTXLxgQyLdX4wryfdhALc34Bg",
  "key37": "5bSjgN6JnQ7JYx3FkZjpnjEfTtEFeTJditxgpLDY8JLRWfEf9ArbUSjDbfoSKqzenZ5PtB21Two5fSNkkGHYryWU",
  "key38": "3kcpMqUN6fMU7VgAJv6m8VQNw9jzwAPuw5TE6mMJqG8F5JcW59rbamupstHpc5Y16DfeAb8u2VSbo4HLSkQjAX6e",
  "key39": "2Ac2SNvA3B8VApeCDiUs7h8TVKxfLfZJCb3STKm4JugepEQcKH4yJq88v3SyWYcscRUF9zCPR4jFxkuENhN39kSG",
  "key40": "5ZZdLEkn1E1JV88dTTHV9K55UNjtn18CZtYtXtbHTc1rkdu4pzM2TpRbecHzssvTaj2AtLg2juefXUuuoPZf82P4",
  "key41": "3H8hm7DSbj86Ncp2FcEvXKQ6mFhj6NSZnBfNy3wuBqW6u87Q5NdRYschryMN2xMit2kLBLcyd2qywtjUeAs96wmB",
  "key42": "3NazoWjm5cu3xRFnLLvKUxX6ZoG47P7h3E3B5CeRTpbVVaNDCoy71AUvvSukJ2eoKzy5rHMoU8EPzZDXGWBtkMTN",
  "key43": "UE5PyEir1qEYvm9c5rvxESCsJtznE6wns523CpyPjUSekJUeSAHtayp2kzyaJN4iE71o1uwF7U8eTzYBLr5GTS1",
  "key44": "4kkNveh9qZ6MpaNGGdmDDKq4k3VS1ND2BKXYxxYWPS6gsF3vRbcRsFDrs814GkskdxEGayJ2FCh7353ds9qaqmWM",
  "key45": "amwLsLH7H6rYhKtkUAVBV5XSx3x7jgzBQ9WhRhsJ2q5pPJAQpwQU4ZUMLg4qZmxso97EJXLmeMrtSocm3gf1uy7",
  "key46": "kgpHz3YYZLkj5gQSXE3gnUprhdq75E3ABJaq1wnmxdRgUEvZJKpGxqNkdZ1gCf6TiKVG6gJBwaee6HRKAndov3U",
  "key47": "2sJ7ADv1oL7cC9orQGfRjDCgeDJpvh6X2a3etQqSS5U2kmSjSm6mM3neUqrVdBhJntMHaFjNAVEjc4LwqyViceZd",
  "key48": "5TcDABTaAXMaMwDSg68XpDRds8GVvQnrjGhb6eu8qAQAXaC9wFGjTJjZjfdSb572SvXKwW8TRWji8fMyaGxJDZxo"
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
