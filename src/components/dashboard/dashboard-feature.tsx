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
    "4EJG9jvtwSXmNrkuSLVHfULw1kUPbwKHwrb1HMscZ7jrZjnFoNdnQz6ErjNrBWSd9V6MLHyprHRasd28FMC7vbKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y5ZFnRet4HUoY7YjCHYpqpCiqtyvNeTLifX88KiSdDDPxW4UKdT9VCQWeJ8jo49tSVCrXxMGfZfuYKZoZXaXhQy",
  "key1": "4doo8WgQ8G6Te9Af414wgpwGGCswjg4pdCyxAng4hzvdmgEf3wJPnihFX5sxG7TBN14xCCPW3vA91esbHfUMRYbZ",
  "key2": "z1BqtQNgfJCKkFaiDsGrsuYTDudaDGp3ZUpPRAuWUBiVHLBSsuoax1cWdw1tdATjVvRQkiSWyxe5fVHWmwAnA6K",
  "key3": "XKKmiTgXxuedA5Ra1T8Xdb24zhoxoFZ665duNH9nzXQiBUNS8N6w79GXzyL5Hjd4TkZXMykvDJoV8m1REHrY4it",
  "key4": "2WN1YqpjDPRxvhonQmER4nuzkW9NKSvUSiMPnD7u74dvEoCNxELVBB8L3QujvbGoTe9peTie4GxS4dTCuNchbpbS",
  "key5": "2QCbpSAeLNaTw5RWcrxfTkbKSPF3fNvVGLXwHvHfDSTVRpGab5yaf5wHnwx86ZAdt5BQycMsvP2j3rPEwiW7D21D",
  "key6": "2ES92VpZrgmKSowHWpLYusWC4H5gg14Y58sUgZchvH5RB1kLrA3x5kLLriNdKaxmYgzwyuDwGJaTVFH8BQZ1GiWb",
  "key7": "5kQFjQr27iS4ZNBPLFfXBPtvgjmBzwZtfBgtDpnudxAsUc6ySfWaEcrgmsT9hN7mXJT6dZiRKssPLoZBwEWM8cQ4",
  "key8": "5U9Qsf5mVrpyxc7ZRzPJqyAAhJa5TXSf2D7x7ShSEvhqLJXLS5ChPhZWqK2rmkouyEAZzwbCAZkKM8AmqsVFFfgf",
  "key9": "5LJdSUFbTJWydrW1bAdBN3K9KBLhUbZLPoiFE4xGLkpFscZjoBrjjpAiZMuAWWu7X8Kykx5fvLbZ7ocbHEHzyBvT",
  "key10": "3aq3t3QTHygPBEbvQwPpbaD9HqgbkNsDbfQfVk1cr7o14b6CmDg8RoGCCK3JyaL38a9PyPLtPL45JEQkDmc7DjLo",
  "key11": "MriAf8sbWYq68LTgUHytAUam78FEB2ibeejARpomqNGHZW22Thyvk3pMbq42nYsU2DTq8nxZoDRW6ckKirecJ65",
  "key12": "3jrB6dgmTesfNzwHUgXNQN5tuHPVgxQSzfGYKssRGpyTT9AHkYeWH2ytp8sEMMFy33NCFZSv5J35PkzKhq87M3PZ",
  "key13": "5wuu1QC44sMapEXwft89b957xoqnESLrSEoPTAViTdVm9BqN59ta3XJToo6F6SXtTtwueF2bR7kQhRBvrn8qD4cs",
  "key14": "4YLXcT34UTLDq6YXHSsgEYGuihfupHnE3d7qkC4JKGbGhojfMYve9ckPTCWwN4HN7XBUiuUcxc2ymVoczXPrk5Nj",
  "key15": "4qDB4udFfNPTeSHHAkutF3V2xCHKXTG4pRL2uPBZ8N9afQoPYarkuYA1yW62uAHHjpviumVfanDGVrCLpaX7SVrb",
  "key16": "35LxiVTnNRcFrGBXiQmGdmcE6THCKLZqpcLp7hC5vXNsf6rtGuV2yVjrpaSQWNrMcrAbSW8kpM5YLBQBJKGVD4Ji",
  "key17": "jMkcLNbFSqHkT5Pi3f865n4FVyrq4GfYgXgYjrakfucQPyiwt4X4sYXDp3vskoSoqkEcSSj7oBRbb9WqdUxQDcq",
  "key18": "65tU2Vxg8GDPq2sKjTdaxCn9KwDj1CyYubgY5q4kUwym7d8S3BeyyyM2NWp56UfdgGmnXVpAMnp39Hs9JqENVaM",
  "key19": "4pc1qsis6R1WrjJ2iP8Md85HmCdvurPgx4NRpZHT1KoRVeTEsn5L8NDanTTFz4R79ySfvCLMecEbcFWqcYLxSdtH",
  "key20": "3cThZoKf3sAhLaeoiuXuXJQqTaMUj5Uezxjxt3zdyg4JedZwKWuryELJBh3JcPV9fYMnLwy1xgVGDsTynxmg8DtQ",
  "key21": "5FLE3w7JNz3FHbwUnhurp76Z2H8HrUe7K98NqXGHYaYKnxT44DKYtB5cUA3a4dp92fAFdpUkD7zT3tAjgvoLyr1t",
  "key22": "JrnwLYAZXKfLKgQ4voaors6nvCDAVVnqbtygyVu2n6VuApTWnyfFTv6hM5HpyqYMS8xc7TkFRXZDtJLsRELLs2B",
  "key23": "41iVTNymorxXenG7DnSZbwSpbGoj9HWwvmRetyP5JRcprzZAU33V8XsdgZpLi2UWXbRJmr9brgHntr9ATpxk6NTJ",
  "key24": "kK7yADMWRJ5sL3Ag2YNsq5c9zHg1PhsFdWKnRThsQRfSSfdA7JPXDv9c33coZsydHUvoz2xugGEmJZWs6ETCKeZ",
  "key25": "wyLcVSEELkvPdbNVcFetoPMwVGQj4GmNA3MWtkg3KjTiLccLitxJkNggPdukdJPENCWWGDuwaC9EUCg1HuxXsui",
  "key26": "2qkCvkE47XAbAHTgMrQxkxQoyMq2FjyayQxbVMwZ7wMCUs1qY5kiuQLwnbRBbEuAhJs1iyPv6Lr6rJFNeJtCAZL4",
  "key27": "2xv3wRALoEBbRVjQMWo6bFkKXqzs3tdd5LAUFeayPSQvkqXmQmK2sRRpkwjPaCjSYE7DPUdESyeih4QqhVjUJgpb",
  "key28": "2Ct9LCxxJ1kRmw1PNsATEjJJ8oZFmgFxpBvDd3Jaiki6w22HiKnczayDRicMGi3bf5LbppSSKoXhzCz2fA8ifxz4",
  "key29": "2anVFmVGRezaUHsQSvuV5cLrVM2qBaatPdzPxWanzeDS4ogW4Go5PmCkVJd4LyjZRaPQFqChAvyBeobWXr7rRJzu",
  "key30": "59fJK7UEFU8R4NLGQtWy8Lqc4mpSFw14bcBrkZ1C5FaJyQ4GFjhhdpX3QEjT3P6iAhkvFk69HC3Uat9mT1HJbLYa",
  "key31": "3TZXsGFdigQkBCwGXhHJxGtPQBu2CXu348jGUVCSzxyYPRPM3esMTWbiX1ffzPNWKvntWXM7zMgi84M1Mp41PauV",
  "key32": "i8ZfuQZcwgddWGK5qAA256zZ2GpdnPg4PyicZAqQV5TDskHW51Pg8HWFVPUg3CKaZKitSYzAGx4eAcZGcRuKfmD",
  "key33": "BKaibQv4VV4idQvstL4zq3BHHdfEEgVceDVdHE8cAAJv4GDbGDdmryQdkB7ozCAfAS57rqpW3Cdnyg2ax4sFuq2",
  "key34": "57zfy6Lyqu1FRk9dVjQCRhJRQHgtvWAKBi8tpYYX39TPRS2t4bQytsEJbSSkj3Nm7Tc1qtX7AQnrAzASqsuanHCw",
  "key35": "5gzGszPVidLFjfSoCnZYe2UcgkpBa4jwbcNTMic6m2zxFLNKRrk3ez65vXDFrwd2N3J3GjxrVGwcdyDfwNmVPTYu",
  "key36": "r7WJ3qvux6GvAkJ2SSW35FnytwE7XmKFKP649AivYEAMrrfNtSjDqknagtCiLN9tz4qBWZme64VXyQHepQ2Ycac",
  "key37": "671GQzkr294S9W9p4TWBN3txQ48uXKX3NqfpHUK11h3PpRs26aecAjahvZGuUeKufHYbLQEXxxqFLrmwQmjQdwHo",
  "key38": "5aYmZFhTCHJbmw6Fjjp3Y9io6AYYjqY9Q1ySJiBCz7iQJKZbbSVL6j8F5JkuNQbixM6nLgD3dUAjpgfoF6Hp5yZC",
  "key39": "5DMrUibGhyVJtn4pd8FKL71SVkCBUL1ESnBo1ioW3wDccAxAg7pn6n4diEQWLLy9iiUTbJuQjnCiEYHMADx4s8Dn",
  "key40": "4CgH9tgitDjrXimZtYzC9JXkwRWeNqjpqtveaPz92etE44MDVYsYJp1Tt9sqEa25djzbWgYjD2xpQKdswD9jwz9T",
  "key41": "tA2CR5baaDDab4ME1nVyewMynZqTBEgBtkBhwnzzAuca6B9tbDuXqWCcLeTZ4NgwfBGQSjEqWAdTTFQyDPVSGji",
  "key42": "483xw8SbPYyQ22BABiptnYusB1yG7yLm92rNH8M5TNCX6BxwBDMo1tFwqKy97XKSATpAU7QwbjXWq3JCVWRu32gk",
  "key43": "42WLRusPkjXJ65r1FwoM1QuYag3sS78R5yYGACdsBe2bik527TWKbWgEtL6KFmj3bYki7853EsQztGALvtguDLiY",
  "key44": "qmpCXcc6ZGnVEBFLLiD14joGJttjTRYfaRFoG8ExFRzwzZhAUqQdW4BVaXb7qufAui6THvw3k7ZYndysehUGBJm",
  "key45": "MgA7vCbuYKy9LD45yiijHt1QdLdxwk7sGADkAXjfPu2JWLnSYaLEJzqnJtyAuk7GQ6yebCWsWuoF81oo255DNmz",
  "key46": "4GDa5em6ec2KasNBRkPXHceJcDfoJKgkJBpyNjj8SEgDsAMsg8JDrDeTDBkuvNxnvtqkLa6yzJaajuesgV1iXKhM",
  "key47": "49Ne2zXAah5nMS6LBZhkK6r2FPetEBExHxDyg41aP3pVdqATY3n12deoeLBLYF1rJ5NyWrswkCccaQfx7cMpp8vT",
  "key48": "57nDTdTAf4pNbgRT9LRrbKeratoTHkMQEsvxmnmV4pMPfEyJ9dVqnCpzq7xbNm2iMCpCqXvauFv9DCpRPX1zaje8",
  "key49": "2dRgJ1KPe9pBRyeH6uRtGKzrRurzjZavDwRFieU6bQGfYrULFFDtDaSxBksCxHxhqh9fLC6bYtgyKvn6tufUTySj"
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
