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
    "XbCVR8vHJa4vkaKauaXUos4gAqf1Lr7zEFewdHs8BgTvFCxkAGWYuWZeewDNNgQSoR23BvxCNgN3mwsfTb1ztnw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vFWvyvB2TFNqKBk93qE5QQzPnVJTVHenCV5GKtxC5F13Mgu8ttkmzyfoQW2K3ub1i8tFeMk9SkwT3DrNuqgCxgU",
  "key1": "5njJHdBapHwUyQnDGCfT676M86tc5XRZAh7SVtjM8Nzu4mEZ2CR4SCJgp6Envc6AuGnbxeMEgfZXYuxk6fX9PTg3",
  "key2": "2ABfaoApfCxkcwnXjroqVDpxAdwW1fU3NwNRiR2NYJPs6FTiWwZd6AqhDcMaP2LtkE4jxjsGDqWywVe4X9M4n2Hs",
  "key3": "3fhwEhHUE2H8YYJ7y7YxXz8XKaqMgBwm1F4dswCNRY8514opw36hrmpNJwzMkJyfrntbEWiQosRg9adkW2BZqiMw",
  "key4": "RNvfxsiE9inq1SebRJ6WYAY5vJrK1biXySG2L7nJcUJPtmMx4WTZrPL7RKnQNkWSChA7mUxQUnXYQDFFdWoKCHC",
  "key5": "3sqBu7QD9UN7bLnZQFaoaCaL1K41jN1fNuuHB68Sacf5Cq8VAxKmMohPcGLwk1zWxgFcSJo3j18pwVmPxA7YDuqY",
  "key6": "3dkHzpYfxc6BUfqhZmnrK9RA4dwMP8wVmF5MhVxshP4iyxjVPndKACPoiHrE2GtYiXZDE4SLQUxMkU6Lw3n5iZvy",
  "key7": "24kNXm6kiqZer4GxHdbWeXaeCC3VHxVrW2ePyBddBiofWnSFLg1GXw3yCdSyKTRg57kQznLGNr714msXX7gSiq5T",
  "key8": "43h2DrQFhkwCEKmgx24watGpm39YUvQsigGothb3uuPmSsmuoSMvZrReyj1UX9RrpduWy27S7jwA6i8NXznJ3bgz",
  "key9": "43JnS85iuFWvm9ZUwmmN9u7qRkLLuCp2SE286bkU3KcS1vYPuEAu22Fi56ypMPEFrRDC1imEnsE7YrA4vCo2HWZE",
  "key10": "2CF3VuHSLkERsQ6SUs38VNFRRaUiVfP44uUcWRnkAfxaY957CzqcPK15a9qJasUbBd4VZV8BkRUX48zs3vt7PY8a",
  "key11": "4H1J6x5wxDyNVi3F8jpvQ9a3Xoe7FyhWL4jqYdDgto1SJ1MedMcqPr9hNF14itCMCMEZCC7E2DA2raTpNo1x8Z4b",
  "key12": "4CTYovzg3qNJPKzRzYiu6G9cXEseiYTBfmi6U4axYLby35DvBLo1abWBJmQCbEK91iQkDRhqXJRK3fxByooxdP1m",
  "key13": "jaRc5Q69ZPsr2zaf5xYkygF9Rm4WeKdFnRNPhhrgF1TJVoea5ZCn46dmdX6AjBmf9WY1AQnLKbY77rDdxbBfAQ5",
  "key14": "4mXYRPmDY8ebgrJ4QFB783RAjh9uewq6gFdNq4ZuzfRLecQrL4EGF9pGKUHPfRyGfxWFEhMM1smPvZgqmsmhtWd9",
  "key15": "67kaDHZGpo8oCGfbwqeN33rmNkq4ocHGq7mMvT4ovmReUmzcYXqMB9oViasirHdYqFRVB4Hfpwz7WQGBGwBTFwBP",
  "key16": "2d2paCFGXmqhSLmL53qqPWnaX3Sn7DgoWEEKwarsP4wSj1fYyxLiYSEUiULtmyV77tEK92uLndExWnjYEoM9bcFo",
  "key17": "BE55d8mqTQaGdvW9YE5Wz8HMbMoMjDvnMeStTc81VbjDm2YzpmRNQRjkfqSgR4zTBTe8uSJS3hjehpmEkWjnEqK",
  "key18": "5AYw8VfuWmnSMECfVmGexjHc2HKRUZkovNsKwKQ3ku65s6Ts8m8FHbZWzxSvwCnjk6xkhVaWsJg515j17ZxByBB",
  "key19": "4imEiNgLNXksBt6d8urbxoiGjYydnBSbihfy4fSgqt1BVR657okjUs1cMkQntp44PzaHNkDS5ZjMpQCtWmAK5Ze",
  "key20": "2dppkDei9b2yqLpTVooWsEBAg3noZVdSUp9XMkgAaoF2Ywikvdi32LwTEdkX9fenCY3o9GtowiQX8TGytyC9kBVz",
  "key21": "3YK2ri9WdV7qDCs1X3jWfEitoyeyaJKBHiNgvXe6XJCoJrvQFDqWqe5ah6zhLRnGLnbFvTt8Vzqk1t4DDEKNN4yu",
  "key22": "pV64qc9TAxd6EQqzocLF74BqRjYS6TZhAjSHWJ2UTmKrTUA6Ezj1hxJVbsUXbC5qTGAKg8214GaFjScpUi3fMhi",
  "key23": "3bZbGWYgkEvZ41kepLbE3f5TNspimsXgKtrQergK1opzK3w8CPTi13sT7Kt7gvPcMcsAZvkLjjfns2TirLS13uch",
  "key24": "64Tuhqt9kw3XL9vPfosgrupufqdcQwq3dvUosaQhEHWxacj8BNvbLtqK338zNoh9X5RsbXnQarrJy1RPc6wCPnMB",
  "key25": "dr9QcvUQtvvVK1wPQdBRKqMkQNhSz6mNFoJXvU1zgA5snCUcUicVfbpgBiVQt7Xq8HfWRzr737ynMPzzYBvZ3dg",
  "key26": "4qF597XKoBBYWYYUbTi3MrUqvRK9sHaEL7kae26APdt8YKUWDJmG8Mwnjj4SS7WtfqupHHALtHheEVvNCY8yHK51",
  "key27": "54v7HqKPk7HJ5CGLt3fQBKVYfxNWMVRFnXPQxY8LX9yeoYWVTaYiA7eDhtUcKYFiLxww2BsEVdRodwXiDAXwCk79",
  "key28": "5SdCwKW1MQc7UhsATvp1u6sPfMSPsLxJ6qQoC4XsvuceZB9QkjnmSkXrRzf5RCvh8MMTxNKxs9mZ5g74z6ZRWfg",
  "key29": "5QwsQ5XsfBtxDn3oCwUar9oSDjmwQKK8dENTnCsHKjEWcEnSLZh1iWZVsNsqVm2nWbG1Po3sAf4bnDnYRLbZuAvY",
  "key30": "5gKuUouemdHwkh8E4XGsq5LqhBkk4joGzRAApyaQ3y5xDHR3Sr27Dj4UqX3ZQkNDA8aoUGFGy3UzPQMLruDXfZfu",
  "key31": "3oBmsgf2vHy88MYw297QhwMSb5MzwHPAJr2YSyMNrDVaos6KxnusiAjFW8cnPS1ApLatTTuRofciJsqFSAvbubqJ",
  "key32": "2pxubbmKQJnMnd7J8csftU8LasbvakogjrVE8fK8XATWsJJPAqHnH2vv9M68zhLTCWHpQqTMisdVWiyPSW9k2yoD",
  "key33": "3TVUBmgDT8rVjsh4ZKwKEHp3GnTBUEyfTg7b2BdQq7ZFgf8UGXXxsdBQzPLTHDm7zS7bQq5JjfeNQNLMfTQvtAnr",
  "key34": "53yWWZSLiQY4AfpV4TPCEstYjXuNCcDR4GxVbYuYRPim8DPxbWouwYMLMKD5j7fQLfFbuZb9whEDhJBeMh8ZeTBc",
  "key35": "Zvf2iArJ4hACwFP6jH5RkqPwiiKyhyGoVtyQpj16csSUf3qRdPzL7HvJGA5c12CJdMG2Hk8WvS4ZfDiPuEo67NC",
  "key36": "226HK4jhz9s988Q6vNCiwd7ZkuB8aDYTBgcUNiGC71CBcD7J6cjoiJqH5Z6c1cnHm3ymBmUFZCxZMi2CvXsDgcuf",
  "key37": "5QB3eMmPeJSGnAFgw7oJQerwMxecaCEZNJeWbkBpeQJtXHsrwZJ7wr9ifKDuyRUh3yufvTju5pVNL9HerycEwQjL",
  "key38": "41jYs5MJi19MMQQwQkeA7UfidvFF318TE8ch3KCpiGdQEJCtfHu7YpWaXaqfi8S1Yht7RNqpH9tEtR72PvZ6EN3G",
  "key39": "4aqgQ2YDAAhKCCiauH1EJXuLpYcGeWFxTLRYgzoDuo3untuPSowe7Hcd6PtN5RyY3bQLV5DCr39wtBaZLLpXioUM",
  "key40": "2cwioKDFsh1vF9DzecBJhQokkHenzNU8SLeXhr1g88HP4ngyBLcMrFM6GfUyDF74vinJQFpj1MZDtSP6heCkPY1m",
  "key41": "2EeB98s313HFWnk3XzM2JkZXYBgahiaDBRvASzdhk5XErECrfFup2d9R4eGzw1BaARgTX6vUEfk1Ysbxtbzb7JD8",
  "key42": "2wNC9E3ESTKtUgyb2WWnfwtePNo3Twfs8MnFPez9v4KGqgLArcXCAzTEXiuUPZawBSho6oiuGAVAAdRp5Zc1nTob",
  "key43": "3A38xW1aWC12JjaENwEXiN4wL8nBRouJ2SWu6CMGj7hHKCZFxbgncvQfskhz34FHZnYkpocEp6MKc6gVWPKK9Qwu",
  "key44": "4ngSQkuAXhVkK4bsp8m2pzsks1qC25AxtFy35LEkZsBiNfYjgaNQ9uDyth3GeXFV5P4nTJpBHJMCxEcxk96JNeA8",
  "key45": "33qxr5P9xaGSBrZjTK88zJSNE3h59NqS7PkBBunFSKS8TWr4P6MKeq4zSsFz7AUTAwQRg9KamSNPb26Bcu3EC22q",
  "key46": "45JwMv3z2YF2sncuXJtQNHmqpMFdT4N9nGiU1gTCRVDU2yHBU6tAHa1cJWo2WesiftzkJjMHLRidGJYHy5Ljneue",
  "key47": "57PqTgMwqNqY76j7JYAJdX2bwe4o3vQuEp2Qw66BxoFGgDvsKy2E7mkBW2phSX1w6K164yLKxq7rWrxWAXt7a1AB"
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
