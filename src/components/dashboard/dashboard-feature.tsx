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
    "5o3nL534S4yxUzskVAG31YAjpd4Xboj6D1bYDbyiTiLGGTxuhxN4h46FkvHn5L7oEmkAoKgNDdiD7w9MXfsPjmhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QHiCfBssZMZKfFNQg6wfQDaRTfdhoMRCdSQ7QfdW643bHnNrAMhK1iWkrDmBRePcsCggzBhGQNZX9UpKcedjNWX",
  "key1": "3dWHKFFJ4125eBx9kzuPMLTSj8wCDHoMsZ9ttKVMAJRkRrVKdi4rFHFqPYKqxfSyPzc9a89Zo5AwCA821wHHoLpF",
  "key2": "azbToV8iqcEcPhWKbMYDXEEt45W8hfPgCFFTwAHzbH2WchWKUw2mniMK4mU4vs356h1dYVFHx1Q5zp7vcG8vwWZ",
  "key3": "3HqnpfHuifHXaRydkzfgwweKvgdtGpQX4zZHknwrUP9GWR4ga9FEyTEhzKuWmNWofCuHpj7hKv7JiPUCAUfyLi9m",
  "key4": "24kb7oWDH1jFXdmQtovuYiG3TDTnX2Xb9GWnkytLQxajETqwserE8P3JjtRau2vbQJdt2VfTvbZxJQjfcUhWEQ5X",
  "key5": "5zkyN3cZVitjUmLt5ZyfGhcBDWxqDSiW93smPqzLqwh3qvnvGXQfuqM5BhK3njjUaxvYAUokzVyTBbuhhTc4naha",
  "key6": "m9do9wq4dwAnSivfyksHmmdJqfD7HR9Vtzr1xazEQwYQNHiLLDa9eEinyeUnCwtprfj1GphogZgSSps51TAZtbX",
  "key7": "5H8PHJL79Q5kkfgXuyPEsk74eGyGs1LWhED8k5LiC6nefgs3a6cwHcmTSx5Fwp8rk2fySNVHJEeFytaJqrg8TQ4Y",
  "key8": "3LAeqnt3EQhV33pM7RthJKXSMvkEKwDB1LchtZSDAnD4Ct85f5oEyc4MyxZ1FhocbyRwFspAEiNqyZbJP8PgeeY2",
  "key9": "3SWSBx8W7T3PTWaVarW48J2G4ttTmtaZrCTbZ6o37vEP6G6zN2mMcuDe8hs33JpFtQhhNHpBCir3mvEu5t9zumbk",
  "key10": "4K3ivCSMomhhTRSv68w8QQkoE66UL6cPoHkNaykGJEb2CAaL5n2vSA8QP7SUvNgTbffBSgKjdsrVDXcMMnp14pTv",
  "key11": "MWPyRHx8iKWZ3rwiw2HbJpxeZScXKu8ohLLqijRRGqVp83rF4pt99Hj7B6Qps5UXGhB1bZhuMHFRzERQfBZG56c",
  "key12": "4fnGa4xznX3ThYVdmzoL22Xzd8VRXvHQASNq1YbAkSuxkiXAvBbmU2ZXLuGB84z2pUQo28J2vUDQCSgzpzukaqet",
  "key13": "21zcgXuCVU7dipLaXUTvY3gVJo9LG7RjHiW17fwW3X8GEzaM2BDrWotBAnrMPEv7rNemKne28WSTYDucnkU33hsx",
  "key14": "4JTGR5MK3pAJfB15ezPJfG5diNZxp9bGHtHzmsHbnNnWVFZo7oa8pQacB2AA7YJPeFZtYeByZimkK74TvyJLuX9F",
  "key15": "4rzB1L7Va38qrczpfMuqvRsCNdzoKjqPaWzkG3B7DuaGziexBPfrw994ka2gDcincxBvtZiPQ4NkcXVsbSAEXaY6",
  "key16": "41Bj5ivZUp4A229JEcbtWHXMBTmBQXwkvHyk5FCx83uvoX8cwgVcY9zrjyXezApCHSnZ8J67Z9AbLZXy93WqF8YW",
  "key17": "C4v38TFg7C2XPBSQRfoR3mdjjFfno7bZtAW7dVSJcMWyiL84yHsSfGHBznpxbLaEFCCkKtu4HDssPNNLLwkN3Mi",
  "key18": "2DKwfjndiZz7YSa2ZYyhghZWxTrCoLBf7DiNnxRFoaT6JUGAerfHE9ze5vPWPbV2qAN9aM74XQemT5KQgPP5R32H",
  "key19": "xqJpqf8Pxbd5EFhfRBwvNNukq6shLqdQUf2mqFbBxJjm8Cd93A9iMFtsdqm37cVKfwEDoLTT7SCjEzgD8UzKqG4",
  "key20": "2S3NddGHqnYKBCbEPgoCMvErvQqkDYeVLnw2M541dGkvr4pJDXzNU9SCwtn7t2Pe232aTsVcUCz6UPBY3zvjBBx5",
  "key21": "PLKbAFqdV4VViXMowW78Ne79t9JKX5tqqmYoRUnJnR3DBtAAmUtfMdFNVWyASTNeATJXx8TgXGTFtKBLRHx1qfV",
  "key22": "3TF43bu4sa7K1EU3EmjmbgrMmhZ9GfSMFMWtEm54DxCG4bSALgqT4DoxE7NcCbUsJCiBdUwiykCSV5wEjwg1mcMi",
  "key23": "hRYMAhkgLVdoeAxXFf9Y4yBbij3jSQvbUEyUiF7uJYTYQCzVU4JGTRbonz67TkEKkYZgPHyh3RdthhRsB35jmsx",
  "key24": "4JmHez2FcxJzhmvupi5YdVRd88T1umseGwq4vUG4QWt8NR8YnSwd5Ni7cFXr4W8bpH7pzLiRFfzhkTg4QBQBmmYv",
  "key25": "5zx1uJXzzNZeEeopQsqY3cUDRD4SP1u3ejXjm6K1aPp7K7zyg13ie6ZvKJSYPSafp7X5tUgJWoEzkQ5uM7v5PiPn",
  "key26": "3FYTVg6z2fJhPhypyzRercZqAwDwe26UnWkgRyaTVu4tq8eB5WsU61upUEPJq2upSV3pR58JefouU7jyHPzrshbp",
  "key27": "4sFXEP2U7P4P67LqnqogmFPT3bZGmmrBbUtQTWzLYSfVuAd7WGbwsw5TweQGiaCEN9Vm3jdG7fY42Q46GK4qfuuY",
  "key28": "415F2JRicd8P3nuzvwSqMWiNJcDKn458WDKEdYn42ojuYmyCaStDXvWuk9rznfKT6n1KeqMHQkw1FAAUc4wPXdzx",
  "key29": "2YY5ShHykq42cbjMtTUyAgmqbpa2Fyx9fG7Ecj3Sjbq7bCEtBiaG9PrzaFYerrq6qhjvnVaGgibwWbhHgtgLQrRW",
  "key30": "2utB3oTo6JQSeaQdvuzjzoSjYQm3qYeb1ahnvPhh7aH38SayD5oYJ1qxyKytvDx1MEWE7pZ85awi45cAzszse1DB",
  "key31": "5y7jD4Tmr4dfNDy8KgngMarsyv6NmoWhS6V2cWUTSC7JDpaQWKNP1jB9YscxrALzyF4Npbd66SDbzbjyA86sonQM",
  "key32": "qEZpYjjnhCuBWSNoyq7orpPksCqUvi5uyWgzQYJKRWLYmTMaC3H4TCQF5iE1QLnEeHXFs9oinEZBRdG5JtYuYnw",
  "key33": "4MgAHEhUcVTBkMZ4DbCSW7iND7oWUatm6UJtf9ftxPHKz4y5yS1Eg49hKArmaErpfUCv3ysXRVi5eyPBX4XdF4Dd",
  "key34": "4p5HxPRf5rWDwR7KhnmzZMTbyXrHg7z2WyrA9VXoetdiqSZacMsojNWFyFmTrR5RFYH84BtPqmeoR4CNyKKGtGJn",
  "key35": "5rSEtXpK33FRjVBeGFKgnqFQdKFkRYN4fEH1MBmKNnBxFKegXfy5nvLpZwcpjwsK5QWqkiKcMXKxYMooMhyXxfFT",
  "key36": "MFpnn7ZLvYa8KCqMPBmhGGZzCBGgjaqghNKkyGJ5DCqFedpVjSvAKWSVBmb6mtnu6EuzwDFe6WS3atGik828i6x",
  "key37": "5rwAG2ZChAtfM3Dm8qbf9y8zY4ntveJ3Tw1i9qw2Cg4GJ7c2zUXEr9cXZM3jVHZLWrhdhTCZQnkyw7UD4XsWiJNC",
  "key38": "3qgvhmPacQWxXNRZMP7u8oaeEBRibQ6Ej1P1zP3EPaJmHzZyHVFoAPx1pB69eCZdiXGUfEGPLCJveTRUHhqwfLke",
  "key39": "2U6WLomNDLdv7bYx8zj2QLbvEeY3PmfvmVzv37zG7rFAiQ1C5JuX7uAxdiLtXeJjH1Co4J5umtjvCa1VwBMitg3g"
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
