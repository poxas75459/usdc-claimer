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
    "28KgqbNaoX13BYcc2VCJbNUppWfvrdftU3eGG9GBopCRzNdQPX2TsnAysoTzL2pvcj1JMzo1aXQiKBL7m9JvpP46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FhRorvjho9UzVUv8CcgvKkFJSgC9LMhTKLZpRmpCBhxMGDT1piXgLtYQtA612HGwqgryHMkm4KDc8EVmvVAK8fA",
  "key1": "ZBs1YYkjy2hafPZLB4TKBygS7TP4kXxb34C7RSwudkqf7ixrbfVN6FWMKzicE3aHahxx5dZBVze75egGEytZ13R",
  "key2": "4MGNR8SswXiMsDS4mXMTRmjRcYyiXA1Nii1zjymrKG8eKBEGTgUHkqmKYmM2XhkjCN8mk2NpkK8jX6HzchiN5tQJ",
  "key3": "2aoYrVR7taNQzCjttWeUxwN8nci9EeHQuc1Wf9V8KioY5BRrYUgchnLJiGVJNhaqTmp8Vco6qt6KwqzvjrpVtYTf",
  "key4": "3T5PjQyF5jEt5DCaqvePW5xvLwgCW7Aq2y25hG8Z9u2UXJWg6BtZaBcqe1F5zkupsTzD3ovv58SMiA5ucV5fyJeW",
  "key5": "4pV8qerEud2Efeyz7HKmRdmVywXUb4uTQ9sZ7TzyNhVvZ1ahFWws39GDYSsK6FUQfAq8UdMwc1q2uf4NGiBAckN",
  "key6": "42283ZixbZ6YbUZQdscAv1TmzuSgVXfskZdrFD9Y8uKvkjwg1UAFZ9Ph1uAa2a3k4xEwQxrsRxoXtpGxEEEAUxph",
  "key7": "4VcCzWiaH6HKQw6kF7PFp6b7DMiGS3VrfVJDQ32zzD4T24GN8ssb72mTxuuKi6XuyqH7QjhHSSFsvdz5M6ps4xTb",
  "key8": "2xu7ydPxC7cXs7uiuftiDAPJjBHCF4khcs2LwTgriwkqVdmnWjdGYJd5E17TKwEkGeVrPLGy9hSUY4xCF8Wn2gjM",
  "key9": "sRF6pkuhngVMh763EHHHFssZ6Ap67S5asMaoJ4UPEAqxe9oBuTLHJeNhf1CJ6H8oaVEVHfcrHmm6U4QnD6rhoPy",
  "key10": "3Vp7ouZ7yTRhfHaAScpxN41BzrZHN23xsvnm9Afkjab61rMT6Q75BudPUqLx9fgRc22r7TD4SpziQ5pPYJHt5MXc",
  "key11": "5nvc1NKXJmUJsgsBhdZGc6hZPoGWb9WnZvP26u6uth5xBtaRS7BLWWDoUWwJyhRgwD1CyNBVTdYQsWRxxKn8NJJq",
  "key12": "5bLKqr3pBTzPhghdydewaod2J45U4APsCvSXtPwXVxF6bqKv488gwPoJkqdy2vCgmHCgd1sxAxBY6PCrCemsHVcY",
  "key13": "2m7mt9qnTNPoPY9nQTrBsKRZLhV2v3NZtnDdvCy7ZQDD71ge9drHQ1NHtZaNHZ3RNBqgQXKrPc2Hxgkr6y75XpT2",
  "key14": "3aHrojjkyy7HM7vaxzPMDLUTCuRmuyYNG9na5zVrHAYdDFfjwBKv2vL16RXLEw126ASoZnNyQMUSXF4UQkwyHwH3",
  "key15": "3s3q2RPSBTMoUDrHKKEzSgyAnrUGeDAg9RJqeizV1TQAxR78mmUjhPF4DPsJWrEDgdGmaAVvDa7QPAzZViX5w4JZ",
  "key16": "AjxPxRzDaH3tzCXT1M955Q8JNuB2d8hyc7qz6zvWAr57f4GbEZ5em4TkeKkapKPMr14EZUxEzhSZpmQRJLMCGy7",
  "key17": "4pU8LeTguoUcoMGAmSr8ttDV6KBJnpVx83J9ksdA3nBrWpZ8YWHwkHphmRoxQwFy7uDtmG6GHUwjMWwNaRJoWbXJ",
  "key18": "u7sK41D9UJ58pu8RijbPoQVvvNpPRUpuSaDoMaf9pmnNscCdEnPQ2TGUeGcg699GaMh3T4z9uZQ75EZ39SNnT4j",
  "key19": "3uww9emLPcYHkPxioTpotVXD5A7Zu6jirLZLbhE9NE2SwudBWR13PkRKsEQqSu7735JkTTu26V6xYmTtq6fBa265",
  "key20": "275LxDzZ6xV3fPowr2qydC6aXYmJjP6Z5YUonQvQSea9ytiaGx8QJP2ZEhAZotMPaairsrD81YjdJziFCnPP9ntg",
  "key21": "m1SPMWAsk1FF6EMivdzZWYRnsTbJerj9NZ97AnBFfTZqr64nn9dYcQqYn38ggeaExb3H3GhygBwv8vVirmtVDgm",
  "key22": "95pLhJUpv6ZcSSyGP1PPz1UsUpTkciKPmzyGTe9xHwErDe9AXs9n69zTWm5N4as2WDKsxPZKfRtWijPVmaBhvtM",
  "key23": "45kmJxxYgnonJpbbBwajYRmsZt2fAcRSGDUmNsiW4zk3T2aKHzguFSSDAe4BF3Hzgsx3jnbcF94j5MnrJGpZtqnv",
  "key24": "5rtE4zxNfDQEVrFi3vu9RbryjyrzhgKbFQzQJCgZ8sCdLYk8GxxzdSDfjq9P8FAXYTVsfjLjpBgqdq1HF9U7SjKZ",
  "key25": "5tXMAQti4QGD6i8m4kmA8daEgW8gqbbK4vLGFq75fbWgwBQ6qsuq8afZrm5EU25TqYMVK4wC86ymidGo4MXqX5tE",
  "key26": "57JRPjWpAEbZDVcCFv6Lqd4afrCeha3RopjMbMy291Cp9k2gVWXMSmGbUyqkrSCCTQv1ARmmTWndsWtkBg3xCNVZ",
  "key27": "5hzZC7E8HBMrBSBKFb2w2dojqgxhm7CcgNFTbTg8xre5kVAoCuwhTesQHmdrvNdUyTVUAhzCZpCrpNLAhK5tdBRZ",
  "key28": "42fbvQnQGpxr3VeQZuxL4cewwmY3JF3mUaPBNfCASLcPdN7nQcAKG3UvKghtiPDboPoZzvmmo8dTBy1pNX5saca3",
  "key29": "2FkTmAQrQNSZgo6FTWrL1kfHptRNxPfYs9AUSimQHrECL6YKbschRsesVr4oeCNieVRp1m2iy4pG56zmjeVphidE",
  "key30": "28sw9F7qstkEwEqdDSD1MPohs47kryoiKKS5Cijh9sL5LV1ydXAKBwawkzv1hf4cRraqoBwy2tigQ9JtUuuKr3mg",
  "key31": "26DduPUQwMxqHbX1RGd5ocY4tGjxmFAcTg3nTReWBBep8StTWZ1qD7nAAVRA31ACnB4HasuPiGqqsNsND3vKvtCV",
  "key32": "CJMo1wA1UmdcDzM8sALFHJzzox15FKhnZPcvbwLEDzUbSGRZ5zgMHjwEBSVH6UdauA2H4ucehDnZCAumiPwWKv6",
  "key33": "3mR6VhcedSAbJcYstZiG9WKjDqqRPN1qxUdC5b4ZDJtd3X7NZEHBB9Ca2Qkvj442mATVtuNvFNqE5NonMSMmzXFD",
  "key34": "2fTaWSEBHua3xoJb1n74AZdEzT75vFQwDCyHduguDDJGcNo3wGBisaTd7XsjECNRNt6bdjNQU7dgHiqdDE44Kn5V",
  "key35": "Kc42XSxnLtqeALjvAJaLojiboqfroT4kf4tZCfaqZoEMF8tDiQPGY1He6XWWu9TNAX65kjdL99PnxdhQTptBJgU",
  "key36": "26RhguZAuUsATUiCDuC8ZSibykRCsHPgD7DgPUFBMvZHxLw3VKGGSETCJ1EZAYucZpozX2zjYWxAmNppzVCwRW1f",
  "key37": "4AFwgE8GvivX14A4wv7uMATkkTezwSvYPmTJ3g5Sxy7tJFP8YMrm3p8ZMG9G1mLxYr7pbwrmYEvWyMwzPbFZsgcx",
  "key38": "3ZebjUXL2BC1rmJfZAUu5eNmyFLDRKErjErTneQzZCJWXLb5PT2zmVe9zSzjZjpiLT4x3vAh4RXXPvQyu5LUcqH3",
  "key39": "3zBdJZJmQBVy2sRnFHe3phkLD1oivfkUw8FkydTW2wm9B2Drp5v6BcL3ffNPgUgjiem4gLo9AARTMTDVLqP2svvH",
  "key40": "2HpSmzGTUF54BHyM9VFpTSoNVXuLYhFzthx75MDLHmk1wd92WP9stffFeaXL7Ruk2ccBWt21HKTZZwa6ZZ5w1xH6",
  "key41": "3cC3PaRzoQQCWWGGpEwjb4gYjK3j8NaeKWjWKnsX8UHUQ64uYWvRdUMDfGjv6FaLBjui6bgGuuAuXUqG5dHUpMdw",
  "key42": "yBQ2obgmJKvKgehQ5Vpv6vPqKdarGq4ffcmhfJqspcJ4zXuyAqYNeV2erMUAqCQw2zyAqwvFY87N962iFZYLJsC",
  "key43": "2oaAnErz6BasNdmj5x7xSX3dxLtJ1jDV58Nkqhbvka3RPrPTvw2srH7R4gYnMid4ik2HB79dokKyNewcaZBjhV59",
  "key44": "2kai21KwQaKNLRmu7R7qMNZ99UqZinTDomZGhQaSURAHETdxb6n6u919PG9G8K1dhyDGESQTw8EH74jUtfBA5hYR"
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
