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
    "2P8K894XQvub4T7FPxkFuQfYnpAHLtwrnHzpDDWHX1TuG7VPEWuhkDEwb3dZVKAWvcgsJPyqX5tsrjSCddU7imoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aTvpsiMQCmQBamJsWbNBbkXZH3Mim1r9BG4sDsyvggT2i9wbfduT6BX1zMXiQJ2iBGuf58GVWg88677VPR4deio",
  "key1": "3QP5R7pRoRUCthx75PLqmkRW3qLjEce4xXHBLsetWgKmfm22H8h468T24C8TaEpj6jbFgUXiM3iQ5jrgSn8Q8Svh",
  "key2": "4G9JoobHvHeLAfPrYd9R2gE2ekZmoGS6oM8iU5HyGKwYzyY2cysQHLjUi9v6F1gTbxJLzufDPLhU593AU9R5QeT5",
  "key3": "5MWqMtNbvNcEESMt5pjfoJh5JMEJZP1etuG76QrpVFwAyUDvUeL6S2q1dbxHn5UWy2mTUWVV1jF61Nky1qkAn3db",
  "key4": "3EVbYaW4dNZCkco223JnCzrCzCHocJesrVG6ZTcSFPDSYy4jHymrWxdb9yYYVThSXyn9U44toLi4P7zGCqVn29Sc",
  "key5": "5ARxUbdX2yGp44HsC5CTwfyuVEa7Wq8LA7mL4rgRWnJHEkti1HpNKGqVCQTiUVu53yyw8ncmQLkcqwLEWno8o6dP",
  "key6": "3aCoZ1SNJpf61yupgBuwD3fc6SnUEbebdRLNdmWc37Cfqh6aHQ4RnceDLvsWdra7USquHaYyfdwbSBSwGDJ2L4dm",
  "key7": "5y3MFVPBkbaVYTUvWWiXcnS23tTBoxQeEiiemcE1Xv4wwTvTaGauWxLef3ALCr5GZpFoUBCbR11zg7UomCeuLP3P",
  "key8": "4AEjNeEvyh27DMFt69Ge6XRd4ANj4sWsbcCgK8dpavkHTAB2ou8ec5BRyS2uhLihZqzM4TV4v2ngZ7Xa5JJVWF5m",
  "key9": "83MKTd8DwVUMDuxD2qVVAd15nPKA1bqwMGQzhtRGpngr8oibaazAPm8E7Q3vxWqqKKuss5S6qMYXKwiLk7v4zhb",
  "key10": "43f4DpG9BjKrn2kqUvR3mStTK5bwZj3tcrbLGVCNNRqGbVS8ndHWBMG9iqpAkymSsPS8XqGqRdeAAcXFaQUuJpKR",
  "key11": "4fndkoUdw8beY1KwbJs5eZCzBo1Vqwn8NBJmHCxRfzoUBdAJe7FxEARiCTL5ZtHJWHiU9oGpPDpRmgRKaU28TA8a",
  "key12": "5k23utfF2e8Ad881rhDut8fC4wWh18UcUq8qiE5g5Nz7JcfFmtdMJcU3wvvMRqWUw6e16aXTysYveLCubfqSwn1t",
  "key13": "54hLBpGvX9nNJN9nsweUfJaHLQDsdNG6UYjq7mMw98XcrQN3qLB3q2DzV7nNFz6Qxx3H5yARr4kcKP42swhrnyhX",
  "key14": "xr6CyynqxUUDH26R4BuXjZmNGJiGnbcZmGdGJVxXjZNsnzAawAwSeU1kFGGLv47aytKnAxmwRnJ9BsNVXCEsiJv",
  "key15": "519C21uv6qpevgey9BMRJPpZM6EeHtMHmAFM3piM2HVH3Qa7zr9MTZSeqJbYXVBmxRunq8KjcsRi11MVEjQ27SWW",
  "key16": "3ob7SWFmtTVyoEoUKA9jsAFw4XbTmA1Lt6SQfofkXzA6vB6dDvErXArymxv1zqMLVx5mCLeEvUEL2jV8Ctz14BcS",
  "key17": "38kjmwdsuyDiRSz55pm6Xe4rSi3VvMMQpjgS9WTftoD293YC9jp32g9iv61FBCZBpvBDm5Tc9meLX9DZ2kih4wZD",
  "key18": "5vc1cCAZwnC2wEbEgfoDAR9sVoPLhJJC5GJbkBGZMS1ouNByXVmFWzg8W1gWNcW7W55Wf5fMj4QDnDCXitomxcSA",
  "key19": "2p9hf3Tw2XyWKTWH9resrgRhQGjFiRmEZvsJC8n8USmL6yDturo77CqZzNcmH5toKzdpBE21vtS44z4VsSMntbVD",
  "key20": "35v4weW7tbdZQ8PgNoRz6nL355CBcdLMT2SdTaeFTN7DANiVteNe4ypchcPn8m1KywweLjH38KEgW2Fc9oDNmgQX",
  "key21": "5NgH56WL6DazYYpjke5L9pR7c8SzGFB8z53pDuCW65Zfi5HQk8hXNjJPSo634LeoaMWAdFhxrCLQMXNq74VJEVYu",
  "key22": "61YLCLxccj7LdHDbDYzFMC8Tj15MTxwkVAg7BRFUw5Qd2sNrE9boiuzW83RoktMGUcCGHEQx7TEkYZNmNvdxpwj8",
  "key23": "4uNBQJNWLGs9Rfrzd3qLvsfnBQk8QM7HLTHgscDm1VUETy1sGAezhCkHrGS9B9EhpjqBCqkM4CPYsDx25n3MHzg3",
  "key24": "4FBiyDd7ZBj8CSyhpuQkvPZd47CGryZZWvw5htFEgZ24yuKxi4aAKnMa7nGRGeyZZjUN7atYKyCay2uEgaNNqbHs",
  "key25": "TzsfHMz8TKQBGC5SXw3yN9B6oLYsdSyqS8DYWrLVkqfeUNkR8FADptGoWTBovCufU19u3vTEA8APqpmBfyskdKw",
  "key26": "3UCNf6RE8gQH1RAMuV8LcsnYUEizfYxdyZuGST5c5YA38vgEza6L8duYHG9HKhCvnAFX51ngQRyLVF5p4mjA6W8j",
  "key27": "5Vvucx7nbNoDuP7Q9CyD3AzxMdQVpcR5Wo6Ef2pqQdy9HNNdSLmAPuL8SkEd4dBWDRBHXFC7YvCepqNKADqGcTHA",
  "key28": "59cVHAoJavC9gMgVoAjo5yUoUCr2GGFkdZuaWAEaYBmuVUmxwkz34eFYhFRKqfzaFW634dM2wethzb4EYgPC8eCp",
  "key29": "2jiyDRa6PSyC9mSKLU3CUB9v6WxZMnkX6LUJjaGdYuASj3tK54YCNJGbKM4M46X2JxhNJY9S784zovvH76FSrRAQ",
  "key30": "2cWvc2V1v2aGdQADp5SW1XB7teHx5jXUjpdjRbgWPsD73uqb5kvRnSWwAgvdnXzMXpvWknyooh8QZ4dyQPMcfJ9a",
  "key31": "2i4gz92NK8BaS5Ub7qw278wd5c48G8MgkdPPorXk1ram1UK8h7N1fkw1co89DMg7FnA69vr7Sc4hpmpkJEiYYK58",
  "key32": "xy5No3JsBuv5uYdAMUoyJMf4dPn2bB2fS7K7ddrgidnsBjvvQNRn2Aaru6Qiahtu3Q2X2MnkZv76FddKyEo8xjX",
  "key33": "5CDuZsgQmS5g4cTMhNMsCcTpu6t4gqbYYD1BemHJbLhLxVDbQhKUj9AY4VBnyMSP3FbhHEL6yg5Sst8S9DRCUurS",
  "key34": "42bQ6JjWjiHzfF2pmAMWHwKwrZqhZcUYu35rXHLJaudNaZuxBb4T6d6R7ZHzqYKhUnCYouZYerwpvzGpi6VQYkca",
  "key35": "5sCk6zyXmKiWGvsxWYpCvmXCJMwVmnvL8v4yMDmFhF5x5uu6ctGWkWseErkt5A6gsxjNsck1Ug6sS48ABCXt5rEB",
  "key36": "5jMqS1dmJhpEiWzL8BZdsM7yNf5Q2o173GzCMefTBDTNwgHnhEdAaKS1vZ4cBU1WX8gtp1sa8Bd8wzQrxKSKJjUj",
  "key37": "2hz7dF1Xpe81obYt9ZLQiLCj2jy4p3T56evirqyhenpMCQNNf5JeXWdU3pLb1RMxZwA6BuC11gPWdesMhdnJdMgd",
  "key38": "hqxqNzk5jsPk1ucxjuePjv3GGzeTftQvQk3xqQoZSnpwVwxEAM7qAaC34vmdfDASp2aztn9pD5eXrRcgEvaYtKs",
  "key39": "4PhDstbjer5XEiDbAXnCFCuGk9Hvxq2QtbxeBTGCcPfoJ3K66Ec3DkdozgFZRug7E9qvXnP6HMhpPWCaisa6HbxF",
  "key40": "2yykgVp52vpJJBxW5RQoz5QdX31xYBeWGy5MGitM31tM9bvED5mEn6HmgpAMq4o8XD2kbasEAfTFR967yuekggk5",
  "key41": "3eXXKD8VK5kFH7taEeWsUGuhqGi5KPEhdGfaEd3YmAXVj1DZWW3237b2nTrQ3kW2MrNV7aVcde7cEWgQs4utVyB5",
  "key42": "zPU7vSVmHMqR8iY3ziVDK4c73pz3z1q2YWd2dLzEb7wcFD1xKb5REtmdx8w17BKDk72cs5fhtRi1k3RaGHQr5zx",
  "key43": "3RheBUe4wHXRc1Yu31BwpxpVErt7Fe7W7LEJWafA5cEEaKSmMcQA8K63HJ1agWirBEWKhzXQriXGK2ffKignw8VX",
  "key44": "5WZrceDtQaCd8FGrmiZPxRQseyxXFRyfSzDYN6sEPVJah2LLq52255ZAbffnmXfFQSAQeNLAUpvzh6u8KdpWFicm"
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
