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
    "4XMzKkDNSh1mUU84vSbMfsEUJx5LRwWdhGGcSUaj3dPrGU4jJs9yeLXJjbyht2SdZBomH1QSwUm9hgQiW28tgDfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jpPDotkryKgueYiZYQqAvoAZYfpavLyx1ud62Adp6ZA2fr3QFjsziNVzqE6wUPCTanWxAG6hCroKV19695YVPQg",
  "key1": "5eywi4gjywPwFox7Ewh9iwcm5n9qkMDVQNHLhuf6VV7PUrEd9ySFwfEsqW4Z1393368DYwQwWSNmLEFJJe83txB5",
  "key2": "zXFbb9sAfimwDRj7xKzykLEgMR9jcAMk8tNMqVd6Y27DYXJAoVSZRAfUSuKDz5tTj41tY1gTWdLSKBh4oBwd25E",
  "key3": "ZGJE3vWtTQqXqiMLVRo9rdtdTLZzaRqjf72a5U9hBqfZhb2iNNZu3F6r1omFNMmrw7Zp4gQvGavvyvec1yDFran",
  "key4": "4yCkSNw3oBxRGBCZDoZ1U7SPceoBQvVWhabDvdARCEEYrT3RMm6xWmE4Ei8ayoeoV37Ui3PhLawfLLiCuAeqN4Hx",
  "key5": "5A9VoPzEUYZXFPfUAp3gTjFzEUjwekWSqyUrto75v1waywG8Cy2WhmEp5TUoPczNcXAZZ51caX8HjBBSAsy3LS1B",
  "key6": "3oN6H6vdo2Fwgv4DqPNVBeqLy2onSXpYt2QaKAm8y2ZSRty3ijJejEq14kwTkEEnKyhDuQfyeCvJEM4mXMwmgmTJ",
  "key7": "3pMYuR1LBgCvoZdWDWktJJHUcuwfVBuZJk7zc5CrJEubrU1itV4Q8YqZZpvxZB3xVgCotdboGgUssjQfy92WRhe1",
  "key8": "2cFCqUQ58vyNNV1U1RDpytKWnuXPHJDFub1dSyENAwMADXvXHj3oARM9gLkDMP8DU8rBqhAaR28qmD4zXQ7iYCLJ",
  "key9": "3xB9A6eAxb5qjmPoD76MV39v2jinFfBYZ2fdMb4uVios4HG9Pkt8G92pQFfHoK7BRMWFfykeaLrvDEQBr6cDS6ae",
  "key10": "31vqA5QHLxKzFR24ZovdcBTXCuzx742ZqMKmxQcep9EXVRgC4PtHUoDfury9rp6gzw2eLZqzu4C2zz5x3uVcKUTn",
  "key11": "5hhZr27eC9my4cvwZ65VXT1ibhyDkxuP1RFQLkzwokeWqMn8bPH1qdZim21c1JydkeUp6DnKNHcZYEjPKZkz5F6E",
  "key12": "3iPcSEkuxjuFcoc6snycMtWfoFtkKdnwkcY2eNpPcMQdKurfD4UdSPNYnNqomx6fbLgU9HjAq21KTRNt6JSpC8L6",
  "key13": "5583o9iSuCdR8Yv8rJ15Cs4mrQ79EVoT48KD6RESado289EepburGWD9sSe5hvddc75TuKinTcUochh8pUbSo7BW",
  "key14": "2R8HA6qP3JmLVpG4vtXcDVYWjmb8s78yvMGdeV4xfZBGzjrUP6MPsdMF2jwmvWKiYuwuMaz6zeMMLp6wvnFQsHMK",
  "key15": "3YsmSLtaE1F4CVRNFMCEzzoo9W6diutLkGfvbnHUVsLWreDC24cgimUqatBajgjGKefCoad2gnkwjuZFnPT2u3zB",
  "key16": "2rd7pdFTFSaJoNWDnsy9xz9NtUmPdFP11ChVzUJ94d9VGmhMEcHJ7nKJYKzpm3LbHgsticmNqu9Kon6oDFupQKZq",
  "key17": "2ZAZwGJK5hWsvQvArooRqVzfYRMAm8CtpqZAxRHMYckXdnMVJyW8jHuc36AXXeQb7VVrT6E6RwkC3fAUzv9pAFHT",
  "key18": "5rntBFft7MnPJXz86TvahAV5PL5PVrXUeKRtosW7h7k9i3n5pSxeqRugTjafhtWSh4oEB42KGAp9mrxwiSqdbGtE",
  "key19": "3RM2Y9Cj8XLJP7PM1EyJFnLwz5rbiC4JeXzdTq93QU4xnnnfUPwbjPX6iiqj9oE8MMhSR4UBwfYHFaspWsV1Kkvj",
  "key20": "2b5dUGX9aZifViTiB3rTYec6J5ewFM2V4GTWouaUaPEsTYr4hngrVWSNWi5k3w5Nk9YGeSGSugXeDbi4PgtUv7r9",
  "key21": "3h2sMeNvPjbMKggkAoHQkGBJQYm8Uu5qtPsHoQPEtyQ83gnrBfSPyCvQPC67m6nMa4b71TGJgD4czfWVroFxvS5s",
  "key22": "392mrnigjGz39WPJcUArufcZ5JNmuLdRcugAGNMwPTKkRfaoBEpLKa8rY5Spc55ZoCwt5GzADM82QETJUuaBvPN8",
  "key23": "2ChevRh5X5txf8oYecKPzxJv9sGx7kyAvUx2FRwUkGmGwvRe7T9sFiRd3Q8XWPhNBVTrgQd94ag1Rcaace5GucuY",
  "key24": "TWCnHBYFGxxd1VNp5HUbKpdZokmkJJGLEbsx7Y36jHFFZ6U768uuAs6jAW3mBMTwNY8jyQETUJuKxhwF1qDgZ2m",
  "key25": "3vQHq7MMPKTUAUoEiqRa6sE85QN5Q32TkAe624aTSqLQAVtTqcYu9hTvYWWsyrEbu911n7KtSF5SMxcLoYkGcPc4",
  "key26": "4VbfcTwy1Hgioq6cpMmRQ1U1wkQjviZGq4uUymuH1MvAheYuTWgr3RpWkzmNR2hDi9gTAbwSWsAfAkReWVJumxA7",
  "key27": "25rGi2xAMqq2KNeKWTxgsL1Ve7aCwFpjdEjV95maV81VDMo4HJvFcTHrRwA1qqHbAxZwL7qnAnUPP5w9x19buEqx",
  "key28": "5d9AyfTN3L5oVZrpxj3VyzV1dCURxSWasApjLTxP8h64yDzTbbXF66SQC9RsbE3GPcE96LqTqhaSEjhNvBdFR7r4",
  "key29": "twZyruLnR2HisWQGQUziQrMkxGn3KassCoUp61zwVcj9q4qxgcBsnjcRM4pta5rbSB6GToHau7mZWbSuXmhCEam",
  "key30": "NF38ZorpGhKQ3iriYWJT5oAGArwXMV8Yh4sC9FFoGco9DXi8LNaPvvgeA8poKbmYNwdk7pcsAAp6dyAfkf6aUSD",
  "key31": "3mJzfVKa5HRwKweDaP8JgtqC995omg7wH5jLo1oVjUEJKw87EAWXQB6MAigvmRRL3nky8wCud6XLRiXS3r3M6DpA",
  "key32": "ohepBaRY9M37ZyGfCRLreCHJARwL7z1hSwZKvPFkzNC4DBGEobSeYn3RUwYwYGMiP42ZWPjSxc2HyNJXjnoGYBZ",
  "key33": "5SUVprSKPrgAkAKETCRE876TP4ACGPiSDsqdSr5hJGHAaTDu4Eo7rPCwGuUQGySgDND2aRCMWN1tx3j5P3mwTg2a",
  "key34": "n4yquq5CGEFbQMkizGuC2JfTDFXwVi8xDi4MKS7Tuv1hTMscpxRz7UWc76wJmKwYar9XFXLRDPntKhZSbW8RaiX",
  "key35": "4radbKmkoHQEXtZwFTHJr9GKVD8rWPfmrV42dAT85FqchDFD1vckNi8Sp1CGwD5RgQHnP9FSx7djdX7U84ryouXc",
  "key36": "2UFUBsfBDPjDYhyum5Sgt1P2Qd6RxhBpKkZR2Yh1Z9yx4ZeLC9vBd4ew4RYfyP4suoeda7BRHuJfa411jAdmT1aY",
  "key37": "gN6R3zfHjefoosxhaecCc6M4prVXwrqcHfGuTDm5xhixRTTFMCcXzmTCBv85Xz6gERbSEUeyNFZoK6rbRes1yDf",
  "key38": "45fbxLmqUECFNPW4hdkugUVDecmcWp7s5XNco38wohUxgdnTdnN2nyTKfc1PTERuqyHBwdBtZCM25dxXvHbqMuET",
  "key39": "5FznmuuXCnijkr3xEDky4HzHggetyCvrK68wcvDyXHRrX3C2xra5bvoyWo1wQxtPBT2BtQJo9JXT5UnA5gTy7zCL",
  "key40": "33JW627asS9g1JoXcucshZnhZXyi2VTCDcYpVuJ1A78qSS4EE7FbDbVDnttK4AAUcXKfHAEjYQDwv538Kdb6RunF",
  "key41": "5X88ZnVtkyrr2KXaLEW3yTfzJ9YKX268T6FadQHJku1QFCc44DiHfKgzxpKG6HjW24ot338YKmQFWbPXdswhJGRg",
  "key42": "435v9pxPHpT3g4qQ4UF57AAcBtRwSiqCVKkLRuHoQ95LwbPGuGkzZ4yDm7j7BFf27SAPMvGF8VeRETq7XCrdkyfa",
  "key43": "3JRtUsDx2uzMh6PYnmcVndNmq7YCgvktCqypWKmFjxQepWPJgNferVcTYo9PJ9K3wYVBjfjZLaY1UihAHbqF33QQ",
  "key44": "3nfeJrUrBWQfzvZDyNar8WtDzjEa3LpzVG8oVVvwa6yYV4LieTTZkbnaYAVZx7RTJkT87DJ2L71a1X4QRj3eA3YX"
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
