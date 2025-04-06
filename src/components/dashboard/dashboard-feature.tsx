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
    "4XMWLjR14atGgu5qbwSzCFBcbYdurCgLQhrrL5yYepPnHAhbbCJpxdSQ4cSn7wjgjCe9so3hGeb1Aquvbq14ttN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x6yDXdw6qSPmiZvtAVx5yrkcqBhkTH9eTipoEL7KSfFKscNe2x8kuqG7eC8icqG4y8KdfY5PfjR4DAwrxieaMo8",
  "key1": "KozJTtQzcFWDkJhFCnhV5S6LT7ehYDrVR9h9oxMZodMdgT3q3p2uXdjRJqFLTvii6Etq569L86nNs2ePtGWfpcN",
  "key2": "VRFae2rQXhA3gKgz3UZ5KVGRcVutdEYz1Ju8XuQJFh7SqjGxjhrsEfcUvL57MrTSAXe3Qfxuk2Xo4hoMTHXKuCS",
  "key3": "5YMczyqNterRXmR73qwa4fKyBiKisiF1mtxM84Q5sL93X73LmajMxXznZHAWQbcmzgahGUPLLXmDxZw6e73y3Vk",
  "key4": "3hbZgAad7vfTmXtV3YUZxhgqErS6o5dQfh2kJ7hFDkV4RKM2VWJY9huR4i1y8GNegc21spnLrPi9piqaYMuE8eCP",
  "key5": "2WtL8D4o3F1CjvU7sGuqZRKH5swyqZ2upDNX5guGditiUtTbtt1HnARfBX3vAKQiP2XtewgV2NohwbAXZfHzRtV2",
  "key6": "2EySb2S9zt1QifrDPF2dAQ8AtJm92VNJNM5aCg3WPv1oRuppLtDQ9A1X9y99aZf8cXjBmX8KfQ352rwQtt7yf9ZJ",
  "key7": "zTyhE8NuaNNTC1SRwMpdroFVJ5qCTsTt6vzYTrx6NhFty7raggvZ52sF9zJxuWQEYLK8zebEYJUJJWKAW1dqV2u",
  "key8": "hu98mN8Gs8gfgNSJJ6xgv238HiW4tEtq6kZYoKUwdkA6ufZovRZ8JooNhLoLzor83Vi7tWvxyYkrbsuyLzKtTqD",
  "key9": "61xGqQrxptCdL992HTimjmxKFMcut7BQizfMcktfmz7QcqLYHyws4rN7jXdq3AUV5GieREs1cLtgynRg3uTkRhsW",
  "key10": "39TAbNaXr6Lce9MWvQdJgos4cYeDHtqimKzBM1FV2ZT9Adcn8uvDVwExyfmfD5pPSXbSqLt2xjwzNbbiEyrJekjp",
  "key11": "5wmkbeQQT2pShKon37jJMRc1e2cAALW5QhopEazk1E6vtPo1UMNs3AYzyj4cXCA7y18UUnejtf94Zh7ki4Wqi49j",
  "key12": "8qvArswqHiADKRfgwGLKzqn5K5kihVibCGkAwhDxKpBXZox1NLqFE1Pprob2jwB3a26mH3gYh3KKKh7U6XRnSHL",
  "key13": "3Fbj24uqgo1ZqbtGndoEAkrupzSsqwx5Qd7TAte4S9P7Ydpw7KX4hXkXEhmthndmx7RhwuTxPxthfvgo5d54HB8s",
  "key14": "5DChDPGtJV6Ga72cZco3g4doxHw6bZomK7HkYz3ad62Dv2SS85DuqVaTajLgJd4gFGpZfnHHVgRhmWadkjHqHvf7",
  "key15": "3TwoSHJjaLBap1T2Eu4eignk8Gfad44rx7AqiRaPjsGNTEVRJEPC14Gbr8Q2oT9rTvzzXTJo65oottTrvZGueBia",
  "key16": "54vG6YHKrQxnKjq3FZGsC3bqrd7cVnRhLCrMxMhxGQ6sLS48bWyMH9s3aCNtSS34xtdzLG65x1PtQtAgrq4NLZVC",
  "key17": "44uxy2x2XUuBnBKrXWngx9AZDH8BSMpuVcVo29YQgH4LxxoSiDYipts6qQBEZTVjKi95MjG7Hbid7dWSYM3tNxLc",
  "key18": "fxYtA6RkgB3pZkBq3jrWVnDkxQGuyxJs9cqKekGbHws8Donw3aowYnrrC7HdRgeJFTCEwNv7BmZDUHZtrFcSrvD",
  "key19": "5TsQzFMSE4FHUh72DGod6LiZPU8tVjBEPgDQQE1MpbKLChbsVHeKDmmQTuQcauVcWjczcp3HCGuvkMg7LdKzVCFY",
  "key20": "5Bv6BcMPvBGLZX59EJUB8eQ9WX5XHFdpLmUZw2vEpKT8zquz3EM8SXfMa3FF4oHLfUs4sezm1deumk7bQCNftWc4",
  "key21": "36W9tar5GrdFniPjo81SYqy2C92yeEXqutG7bwVv6x7RUcAMoG9XfW3PT6cjVYefN1EQXbWjotQMKTDSkcHWxZJr",
  "key22": "2NaJhE2ha66AHHoCgJkAcHXtUNdTxa5t17QeKVNKP6uWFkTPxgCCr5xfy8fBpfeXZ2DoYnwZsW2xiSYsd5evDA3H",
  "key23": "5UH4mNPJ3z1UtVsfFFADhMBN8opzsTNnbgtNWPhNBQaVXNAhhGD1fxBQkPpEWt6bhCujxzKzXZafStug6UcVohew",
  "key24": "5Mxag7aBgJLG1rviCQTPdD88dKoErQ4NUGrZMbrcHnyG8JKCeKGhDvjFsUre1n6HP1ghTVhLdiq7yQEH34Wq2LiT",
  "key25": "2UmEc8t71RFj2aP2VNWs24uJKGv6WzGH8vn5CFiNq89sR6GfrmmVdMUStJAJECfQFhordWYeaereVXhT6w56UhKH",
  "key26": "2gN8QB3JPFiCxbDdRzs5kiVx3JAHooxcApkKn4AsWT88ujLxax8bGbNUuqvCL78KSCCowHmaj3mfGyqJqgQtvKke",
  "key27": "4n2tTjefE3515RQACHSmNpHNs6tBiM6Lci9PnWhFupxRzCKaoXX24mMqz17KrSqFix9YDMH1t7CroBggTzjRcf14",
  "key28": "2mtWAsifvcF9T9MPtmL6e5VZf9AjmKZgkLFz29zocvMsw1uBfre1cVoMGLPbvNZa2wbXryBX63LHuHZwsAN1WVy9",
  "key29": "M6hUGzMmgkEWD73FCvA3LugyT5g4n28zmEu3wfoKaACwvGT3bH8ttcqvfSqRCVLBgKUyq4p1oxeNv8QeDsaAsrL",
  "key30": "3YPCmU11ot15cPgVXSztyNM9UykA8HgLhNSjSp2y3KQg7WiSFqUMYHeTLF7sqBbA2ZJFMZPLoMPoc3Pr4gmJbE47",
  "key31": "5NUYGxkTYRkc4XxWxwKRcU3N2Jnp2iTLYTGdk2zAuEyFnksBLWMZAkqvYB9UMqoint3xSxcxWU8roh492L97EzDw",
  "key32": "4pQNSYzVMmyGR6tsc6HdP72Mrj82c4bT7agpFZJgorgYd9VGG5MRhktWaofoYXDoBAJXVoMDoG4eVPLNXu7ijwT9",
  "key33": "DmAVNYv7mtUH1VURL7EMHm7iRfZBxM9jwMGpimVTqmwdZjKEE6Uq2kLiCnyz6z1tr5wLKwFP91T81oXgA7miJz1",
  "key34": "5gsFpzpc75p7xJWTg1FL8VpeUSkMgkzQ1WCRSaT8m57cqXBWeznra2D4uLoML28qE4rw9kWJ1XB3vNgjwxRyYkLK",
  "key35": "3rwYjbfJ8XfuvabAUm4H53gBqvpRLTeAkNn662D3fdbGSoHNoYmkmKDfHH737W9up2sU2tH4i89opRH1B6Y2CeLS",
  "key36": "Y1WvmRUpEF3TW95dAfXdgjcz2MaF9UEt5kuT5NVS7f5LtRW7KY6kFwgwtZCaKUB43zsUxyKL8AgmbVvpKPGRvxQ",
  "key37": "8VH33PUpZE4avKrhAHVDSqQ8R7k334niu6E6VAfdi4eZsReyVULvy2ux39X4VSQ3Qf6BYvrxGCPTX17J46dVXp9",
  "key38": "5KT3LHsBd9AWNv1mGvBneC3X62yqWXToFgV9BVWCQ9oGq9p8gNqN3WC7uMsuRZo6Zq5CE1aN6bzTXFmcB7XkggaM",
  "key39": "321ix7HqyGW1qee11tg63GYcSwwsWQksbnFRudQBHwjBiiRfzwhdSDyiCS3er8mN8gv2KYS6QeBCobSXSf8n83pY",
  "key40": "4KMzKz57ut7FSw59uy9ZcQDnXEPCjaDcnV3Ws4Aa53othWHGrcyrkHqWo3nf9ij6tvjcPSEUckRKY5iHTCsig4m3"
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
