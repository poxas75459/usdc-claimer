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
    "sKe4Zba5dQRwNeRgbzW9iHwnDU9rJEgCjGKx6eJhxcyd1vSq1vWKc6sn5L2sWvxaadSs4kSUkiN2wxeEB6BARxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36dYzo5RGR7KPBm551i2nrDPFCnk29qVc5yMxrFCN9dR4ZouMbN7bV6xtUbcUdi3yCykNNqqtQtraTwr8fjM2mmZ",
  "key1": "2Jhb5VKtYS77VJmNa1t81ihcpj2QDRDFCw3GNZaiEywpS22W3QrFiJNzmkCgkEQ36XAmeN2PfzfesGK5b37Pxgo2",
  "key2": "2NoFvPivpiiqipe1Uqves3aMT5Lu2fonL4kKvihuUfF1hPWEtpSLJGbhmGva4iPq2ouvUMoJHumLu6kwsZ77vfg",
  "key3": "3eV9pmFBU7BNTXiZSJYDnPqzRuBXdenvbtgfoNkLL971yLD4Q8zfzBcTiDtSU3Pf5eXS71JrMuk5ZSzoidhuNFRh",
  "key4": "65Z2AyHtWakcUYU3SZyBKXwxQQXpNaNVhbQmUTPnN6SUd6K9XXZEGkEhfuMYzDiPx4Y9firQ6N3hTFJBXgWrVrZ",
  "key5": "62wunDvASj8qouPbcHsB7gTxrRxudx3jNWSRBzGkZdkVG4jEoCEt3BgnBx9amxna58SNmJWFyDP95xPf5peY8qaZ",
  "key6": "2wCRKLx5TauJPFeE1z7ja21gdHTwP2i1imRNVtPcTNLR5K6Sseo25b3aQ3ipabd6BP1cmCjieyjL1fzLBCfoXCFZ",
  "key7": "co5MwWrC2LsiMAoWZrePQsjL14Ji6V36wo8oodtoxJWeyKhCLWZTmffePyKYba3wd6uAjgUxYWr9AZhuhhJNZrd",
  "key8": "5jkWtymn5hX8Fw952Nb8vTYBR4QvQ5TUiPw45rNntq9MTNNFGehVUzS5FNXfZPwCfVqiu9bCwGE2oaNfX7Y1bVss",
  "key9": "T1rNwhRVSK7chD1MzKdaKctkZv73wFCad2mN9uqVkusW7dMF3i5baTN5JctdrvqXdmGpygFmnZBP7GKCnpJ7bLj",
  "key10": "3VfTDBB36FgLZBhnhxURpqddWqf6bASLzfYmYyiUDhBw4L9WXGyiSWYmYpiGo9XBJDhQXNrQfpDmTDmJjpx9wB9k",
  "key11": "7neg1gL4FHeXkNeZ3KPavRVAjjdPjkX64DBeYshg1WRFx21Y9SVU4WhGihxmcSm6exv4xFNy8aB63sjxTUCqMX5",
  "key12": "2rX3N23vXEYspg76LbKTNZrtdN1n3wpvMogkMWuZvPeh4xk8m8p4mYBVZQJo1MuMV7YS9xrNfgdvY1yurydL8uNh",
  "key13": "62g2QqfNSL6zutiSL1jXZQRk9htaeCi8wQXjvMWP638bzFTAcmxxm1VK5eKkQ235uCJvjAveUZLLvKaBcvJQEHEU",
  "key14": "63YdqWMX3EMJkuV9kQf2b1qgysRSHquMr4jYkaAbb6bt5DhTNt66WPrZiE8FDG15k1c3Uasts2kVcFncRh2RrraG",
  "key15": "3VRj8doCvJ8LEBnCYFxdEMg6M6D19HWJNCVryPSDameWXt52WL4de8sQAYMaKomxuBmnV7hBbLsiw6cebHZT8B7L",
  "key16": "4c8KjgscRDATRx9SzhHZEKbTmhwDZJpqPMReWwRfepyCnkpWFEqtKytosB7YKhEfkSx7xXpMtsBfVCyDrUr8TqSg",
  "key17": "shfMFbBHjrotJ8pPcgj875j7vJQ4y9fMcrY8unA8TfRg1223mwEXN2jdUARbqQQg3LZpAGJq5wfHQmT9kdbWcZa",
  "key18": "2zYMwpGa2tpGP8mMQFSwHQh73oTayPSLs2dBRME5TpNLyboCkXXNrV9ET3PZ4oXyyYd4UwWF28eRq3bVgv8twQYN",
  "key19": "3wqrMGVW2637gcZTaxz8mQYE5ppRux9SUsNXq79MqEkCrfmrvts2wqySGnXNUXUMcgEhhZyEPuTPBbLX5LCPWrBH",
  "key20": "4Gz5QsMbq9YVjWwURYKsbkmLTcbrLnbx3MZ2XvThxaY4sZpYrq8YjJhQC5GxiUixQcdE98BrcaAsNW3u3JZyEdjZ",
  "key21": "gLugK8VZjkLRpCG82GNEXBNHoaHiHYbQ1WuEXqnEPkge5CfCJtQ112FMDqqSmeHWcgS86woYKnja2xfL2AZCRbc",
  "key22": "4M2jXHE3EfuBaC9JZg8Gut6TFyaWpfHwhvsbAaUeh5dXSpzuw4Ayw5zCbeG4WeWF2vLNbM5Zw16xefUtLqzj1ts8",
  "key23": "249jCe9M5obnLFGrJEkeTsyvGHnhTxgymJjBFjhvREzig1NZRL4xacvLUe6NTkVPZwkpHzswfXh39cPLjNTi9rnQ",
  "key24": "3xHDiWZZEVAr7KoKszSyMLjCeJyzwAncsnksD6JTqeNMxhqiXeuMjDgaL7erQeHSMDARKuwvTAPhKDKN3MQ8tMmN",
  "key25": "wtp1dsPqMhxS7me5e1Ti6nYB41ydgHjsJQaG2pSgcv96B1yZGTncRHt4DUntUbzGQ2zagXSxTdb8GhzdgV13aSX",
  "key26": "4F9ymV7fDHDuMT1eeEUhftkDHSavkBu4GyxDxqHrvpSh26gEpZLrZokYxpn3PzUtKHLejivjEkG9nUbECY7HJB6j",
  "key27": "3R81GemXvXHgaCiF4EbLEYUmWyR841MF2LWbGsW2GEaeUYNF2rTSzMy4Q3tp97KcF1MqKJj1UjLe2JiUxi8DZLt",
  "key28": "3yRaT6bqRBcyh6SeefJYr5TJunpHW7Y3xftaGGC2bEzUta2Jv39gn1TSEXXFN8NJKwNqskwGMg7tMnYkxwtsNWAW",
  "key29": "2nfG1Rtsn1ZCprD2352TccKa2wvoVhZFZDyJ6y9ZhfyPyWDM2gQrKGva8XTke4vuDAJWxKMgN4XrJNmHjc8WgBod",
  "key30": "426sfE8JHe4jr24mdvNHVgCfJjvSPowvJyrEEj1rd2zYd1JoAK4TNGmmV4n2NadZk3DXPPNnKEi88XH4vpGFAq4D",
  "key31": "4VvfzwSaoX1c9eUmhS7BKB9HJVW8CBiF5QFPezHR88MGTmaHhBTJUn3FndvshSkHpMUAdvDDZ5qcQEX8kRo5t9m1",
  "key32": "2wyaN1rQrjzfYXep6Jpf5EG3JJnGBjq12aKhBRDJ4QXFPWPybxRy8Uc3Mmw9F6J225j2gXYWF8v3Z5M3D5QLaNzL",
  "key33": "3ncvs4TDpUcaaj9r8UpkJBgv3gPSyGmP8yhzYyNBLcxka3tZ6PFpPjSKRiWHGGjP4W1GCAX5QsBUViuwEQf4NRpU",
  "key34": "8n16dAQJkSopDNpB16iE5mSdkVuasY48mso9FPGrbPGsXQc1dj1424dx6vomHkpotwcxYx5EUpW9ys4z14UxtHD",
  "key35": "r368HdNAksdNXCpgQ4NJZ3H6zQci7mwEGQ44DqqboHuxnA7rvNSTZPZx9N3CAEq6s8qhcsyAv4qqj3ZhJqqmYJX",
  "key36": "2xVEUDpJWygjCjkreyzU8jRPn1RUkpzzot7v4qSqdGm6NBo5iy4t8k44bfjxVKgeEufN25oKJmxmfnUjcw7BBepp",
  "key37": "2syhmDdrruFz1VS4FdvB8WvfivGBqXgKcC8mEhMiZbNkM6iLabUj2CYgRVCpSkKmPZurMi8KVs3NEeVRn4BHz49v",
  "key38": "56hQC9kyHxux4pYtKw2wGmTtCebadFEjpGNcFJZ6cPehb44QzUCZ7pmKSLohQk8Fn2DicE7ruRceyy8BZmuUnuNR",
  "key39": "5DEsMVqv2Uu2GsdGBVmQyUQ35dCDYPiLu36nKn6GborzGAt4WH5GDxUKFVNaMMqKjLzvXRxtVdq9kjW2s61DemZP",
  "key40": "44qsJA6CfB9yTPnFyTqK7MW1ke6AnLPq6nKSzqtJxvm8fj2RwNqqT7UT7PMDos7LbtntafUvNSEuJ5rD9Uebiwbn",
  "key41": "3Nj3RvG5qL4CWp3m9LDnYmeJ2iYApqSZoF2PNTqjoHRyx7vkrVJd9hBoGDhTiK3Uo5YrjH1dUPfgoHgYC4kNRqhr",
  "key42": "42WNtuX7LFry2a4fRHKR7qiS1gjGxHv1Sskbinap9nAhDnWJU7pwejnWQaQZ73iDdenvU2c1gW9HYAG1D3pb5i2E",
  "key43": "3HE2xmXnCPDdueHu42iNhQmJbC4iQAE6vokx6xBRtvsYxVYB7TUfBpR3m8RQncXtWt7SmjuKR5sGy4PrNs9t4Wn2",
  "key44": "5bBw1PN4xNjHET4PyjM7va8G4xZsEr3FsLPgNam8Sz7bVgcjWzPweCDZzHJ5LxmgW6SuyKpYssjwDA17zoXT8aTz",
  "key45": "hAGh18bhXjsKes4EEM2xHi9tNZTDeTTdru5KidRwTBmao3C3A8sGDwHjSYRR75pDpfrRLNSMobruKm542sQ3mjt",
  "key46": "464KAj85hVoVvvU9418LWCTS4Z5Es235pqoWB8Lij6djNYQVHZe2twpH89FUtAJRpMLt6gJrP5WyfRzs9yNHDoyY",
  "key47": "3vojkAGxE5Bg1ojejzbkzsUcgRVP1USst4SZuDmTdkpkdMT9NmQBaxGG6zozeUfbFsaJa8F9g3vt7eMeeN8jWtEk",
  "key48": "5sBz2VD7q3Gh3CAJtCJit2Yr41bYQgy6pfDRq1zaTX6NhBLD5icM2WBonBsfQdLrRZmErmvoH3QYAnb4PwQsojah"
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
