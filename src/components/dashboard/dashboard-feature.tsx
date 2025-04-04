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
    "Vb3DQ376upfRtF8ucsGH2Gz4BW3uwEsvUyqiuDgeFj5GMFcN8EMVpMiYDdZLHdX2ZkAfTAkskpJ5txEgGAiDPxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QMa14ii4FXPYLSDLusJ8LtzvWjuqAC2W6ZAT4CLRBeiKtCcHJxnjuSCBFiJ2eZysh7yjWt4T8pRWUqUZGR7esqY",
  "key1": "23Ufh3qiSCGDjpf5zH8Wt1DXP4bACXiZqvQUhcyuKP8d1iGf3i5UCkbEKuH8QcNE8S2JqYCXuwxYKqRwCx7RNSwy",
  "key2": "2ywUrf8HLmHH77V9WoHaQUKfnEoKRzCZ6LKDb6GNbNabmXTjXahtAytSDiDuLRwMR1RP7kngfx3QQM3ja3AXq96p",
  "key3": "5fDM3APvsBm1SC4vXudhGJzYwE76p9XTq5eHa3tr3hdkdVkLaxLCPu3uCrmeFnnRhq2SWx7BXTKCAmk9h4xmvWMH",
  "key4": "45uP3KHt2zSyLueELmg5mMyHBEzV2bXKu2XRq9Pn5pkrB7fEgMeyvGqRQHN4FF1RJaijVPpaTmuZt7KGLUrwPZh3",
  "key5": "3wNP84uVuT5v8U8cATjtajgLANk5YRaWRdD5dAeR9QSA6vk7vZQdynTjZTa9fpQfkyk2aiu6fr2J9ZvYzWQQACKi",
  "key6": "2AVenKHicnC3d73xyuPaerF6Ew5fH3RhCRRgphWnKLBo7kvK1Jrbx83tdyqn4S43pGHkAojy5xEjUYuPBPpnQgMe",
  "key7": "3Atq819XPxhWzPPUZGdE33uLsguYEP3KuV6DpQkJgffwoSPy9zgP2r3pYP38fzLDS3ackR4vMsBQKeH1G6nJt9U4",
  "key8": "54mGxtE4MjUaM1ATngRxKgVqSjJ9cvmS2S4fXU3pyQqZHgzze6S9xrbyrXhnwaa9qyxAiBwznPC87sCGjwPW2GJ4",
  "key9": "21aADScraSdHzspNToBKL7dGSCbrrTRaZD6Mt6KuSZrT1WaUToWyyNWtPtHUhDbTiSUKswpdfAVTNT9ZNZ5nHhC3",
  "key10": "3zkGLeCALzdrj9gqSZAzaq3Y1R266Vhcx5TChabQzSm89X48g4zCYEqt5NAaoizx3UHDMRSrZ7bAHKv5TMA9bpdi",
  "key11": "2fNoD4pxMwos6KCauxeQeZxXpQB3GUE765nVDzUdCSDwM7Ri1UzUNme3BQ8BB2oSzG34ZG7bts9nqC1LuAzha2Ty",
  "key12": "5XvcF4tQYG7chqEFNGroGt8WUs7yXX8S25XfWoy8Lt1bVBXoZdqRP5KMxucYzy81i38L6cFGZL9NymryZxJRcacZ",
  "key13": "6Nw767D3gs6mq6Tn2bYwU3p6zcadwWNX2PbfDbUodLAk2o7roLrRNn36Mh9MNtFYGCvNNNV3NuRdLSnK5oLVGik",
  "key14": "2hiLjQRQ5ycknQ7We6JPgcypf4PfVVYcXqF38fkbV4GoSvrSa3X2nS5Bz3ZDQzuntio1g9c3kmZ59RCRPDTfFLVz",
  "key15": "2RkD3mxQSaiwKKpcvTPTR2RFPbcUiRrgUEToDhsR1b4uoZxKgB6iccVTWWE7x4bymc2W57FSE6Ym7YJRDAdxSHgt",
  "key16": "zYa4NsJ7cZApCDDBSKb8qDCSq47HFFerVm2wXFki7duXohXnVTPbweH2aNwpypFQqNPTVoFo1KMMiFwmUThF8qu",
  "key17": "56qWzXxFeFCCF28ciWWqwmQ9ELE3uAXt3zTRJHSAdUGfYiW6qimp4CHYUejDRKnnF7h545YYrVg8xUvVUs5KHYAU",
  "key18": "5SzyrVQZwEj8hpPu275w4XQkFBBxtbiDziMGnuwrr8HyUrzp74vEk8KLsExfFfyuB7D8J6augBoqaWTTVsWUHvSv",
  "key19": "4wmawXZPNzq8XWvRrADNcasEtUXv2EXCCtASkC7R8hH4aK7GbfnM44n83JP9RiADBrzg7WXhXKBrnfYCUVqJb2aM",
  "key20": "Rnc4rxc58zNZ4brVSWTwovWAsiR2riFkZ1t817vAhDtTPQpCpNcF8ET326qYFvGUsXGYh13uYk87BspggKKpWx6",
  "key21": "2Dyz8psPsT6Fk7KjD8abStin6DwBBCsVTFRdoYhGiQS1nC27KSakNm22V4bSN4582AU9aSaEMpfgM47DZiQu5jir",
  "key22": "Y1Rw8kd3M3FseVKeXMnnfAmnjdihBpm96uxe3QoRmKB6h3eNgeKHYabMvnD7qppHLCk8TFaArQXzUJBRmCX5Dds",
  "key23": "4aeSfcfLvqiiMcyQQufbrHJPf3yBfRRybHgs8G7VXmTVDJ7ePCpxEkzpwP5JQvHLTDQdZEeEngJaWgdsZuwbzQRP",
  "key24": "2hS113LtHzSR9vVsQ6dWEQhoRR5SVjMkfsYYe25wkESRbjTAXTifvEpvpHtmEPb3fVpvZSTmMNkL7HPwiU2Ungsd",
  "key25": "4LLRa5dAXBJS8rzJTu8TLbwQ8qinFjCASTXFwsHnBP4KMdUvJKAjuXD3LhbzLSh6BUmwXQctcS34KPnxrQ8Cg6Q3",
  "key26": "2KfenCRDrqFBt92hVWbEYL2TLfxD3Go5kRPD7fCzLBVKoXyVsc9bCA8QJeZoDjZmxcxdjw5dERW88QL1EB79YPFz",
  "key27": "3nTC4gRTACBSfChC8sdeCami5qkHJFApwi2cVVYo8gK9ipmEjSQyVpJdKVvqeGqnBvpdj9nYDMxGmET4gitdv1xX",
  "key28": "5xwjdZdDBLSXoj6AGhu8ScwsA41ie7vSShfe6FS6StgRMJo5iCnhsRxkDWd4YBwaeD6XdR4vJ91p1B2EB9kmg4cG",
  "key29": "2uwzQQ1ae4eN4FQQavbrQa7aiGwfiKCqdwDkZGtMUoq77y2WwK7kaZZfbBKXC3Rw7EDoAYNuSkRKjdwT8wxrxU7F",
  "key30": "2iqDB6W7TBY1ngoZo9VriHjAsiFxVLs2WSYQAkhnD25VHQGZFe5VdymDFde3AbuUSWYHEZpXJo7Kt7HRimebDzVu",
  "key31": "3Eb4jZ4k8tdt3UmCwyuUcmvQn9abrsB5EeeZnvtg9eFtBJutprosiYiw9WH9TiceXV3FswhVzL3TvGkXERQLHq4i",
  "key32": "2MLHyrVStyEAFLDww4DdWXLBeUzjMKKxsEFnccAymznZRAQtgcMEWEf9ktgtUPhSRPXbX7jRZRB9NQMMK6kW5Msy",
  "key33": "4pJWN5PjBD7QacymBRNx5XL8LYztLjURW4pTfWZHqCc5e9FYXhxeaBRnu1QDKXGWA5HM85hzwcEnrajWxmLq37xU",
  "key34": "2Vx57JbkEtj3V5K6HYr6XHNKeCb12pdpgb7gbdExGJ6s1FFXR4LzHB6vBgMZ4h4etyNDQ6sW6AkweSM5crNFKd8J",
  "key35": "5Vd6od2a5fmQxt7G5xynRxz763Jqs7zdxCCRwyZzt66zLdMWKbsikM8yL2PRJ38JfEPWVpapa1wCSfbcAg6yuZaC",
  "key36": "5GWV7T9AK4KeYb8HaNFv4H1Cyg9Q7X2rQaoYtHZTdJMcpqyKwhvjZjGu8N36CSmrEAKvV8sNSiWTWhS4Y469c7jK",
  "key37": "tQRExthy61D6adE8zAxKV7wcsHUyPS2iTVP5apCaCwRebhgWXRd5SfVza5yWomVXseZQciR41NcPVW4h7Q7akBb",
  "key38": "2TzYQSw9fRyFbgba1y81DSZk4UG37CcwauDSAfa2VD5TBwq2L1xucwexjWsQ8EmGiEwbo4tR3jonojRXTJWtQKCk",
  "key39": "55psrYEKNEBT9nFk2CWuiFms1fVYGxcBJAuyvV7VKnecWArz1UTEZb9RsZT6AoMtcoU1dZXHw5Ap1z7oMe4sSVxP",
  "key40": "5xo1EPodu4Cqgp55isnzYpZ4p35M6QrySMUYSd9jteQ4xuM7VwaejPw4JpQgnfB6c8ZrGQ1fdnMHHb5WtQ25BcsM",
  "key41": "4RL8nPxDzaauQ62MCYHyZG3qd8HvQaAeQYASzfgiidsdae4AWcaXQuYcXw9pc9FbWNRDrJmbyhMjbdNSCz2TsUbB",
  "key42": "2ALvZRzQfgF3wGFgcF6V7T3ptS6Zxmu3adMHDMkmsu9KA6BAyEe5PWqGiMRW7RFvjfhd3JtTWTgfDUvFSBFVG4US",
  "key43": "5sqvdr9tRdyNjUibomvssKLG6P69kJrJh9x9L4mcjpcTj4hhieiXwreZB5rRLi1DWaCpnCtrFpZDbTqS4k3EWakd",
  "key44": "5KZKaFwqsmgs2yptwYkxNsGzQQDNuLUrTdooBUnFtnzib4LZXa2NJFH8ZWVTNdybMR6Ge9vKi6W4CwMCvQ6agWjZ",
  "key45": "ApumhbA5R5HMcxyqVNqievz2bi7vZrVDNqR6TReZtyj5JjjjDVeADyj33r4nNJwuKeAZw661cgqNkPByERCwgS8",
  "key46": "4uXPCKbawJAPEMPMwDUY2dhw3AyeWPixxsBWkvjgTrmE4QibPBQQ3ET4vqm4JcWezSYitMNXWn44xdKJDsGD64ks"
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
