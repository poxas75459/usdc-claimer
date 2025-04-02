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
    "2NmeenkpboQgLdR4VDRAtRd3pVrmSjDv3aTMda1pXZDyQvdVNV6totfSsFvCUFhrMTRx5dknjUrSzTBipnW6T67Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S8PJpuQW5dpEXCbb6MNtTMvYyXvT8xMV8XiiwVGqTVKg8DAiDdUusvRwMnZEgu3b8CgcpJ8k29pjeL9bzvvmDJ2",
  "key1": "3oJNEzF38YCNf1ezMgoDMsr6G4Js1RhT1HdYjtzQoNNzWvstbWviorxtumyKSjLYrajVmSq64yBSN3ZbG1iZeduv",
  "key2": "5NHixMZ69kyGNpAxPiTgeZHg5sBwrxpzxVGiru67uHZEQfzACPBf7bHtvBbS4pV8MHSSgPVSpqoWrTWpRQQB2sTw",
  "key3": "2PyoCuVyuvHeoSXe71bKtwuQTz2FxEJ6a2y8vK72Axkv2QnjYdFjukcoFVWeRCDutTJbzokz8vp34fTD6v65Gi8C",
  "key4": "49tXBsHhKYC8HuXg9aCwaPP4LwXxWh7BPHegMS4GY91S8QvaTrDEXtQ2qrDtDxJ1BSZnYvxrCQs4bqsCbjdhcCm5",
  "key5": "2zzqsZ3frFSYDrbEpYnh2W75yChHZZ4qKfx2RhyMmMgKq5k7hg4ge1aBXr4dR7B7NW4jKrHkbr8pwXJ6ReKPds2n",
  "key6": "4Zix8Tqm7PUuVvMCxyk43Ci6cErDonamr2vyn4orwTmKDerk4ATJcaTxSUKRtaTqExPoCeYv3eBAb4PLHAdU2TnU",
  "key7": "TB8CcXUdYzu7rT3F1qs64rB9Vdic4BTJuag9xMdwqUvmuLxbaYaTzjcAfraFqXpk3eHRXwLHD21tAYMdNqFXMTN",
  "key8": "3kHqqySWZHG12SzLikgmeXx7rWZbq4oPMcUqj3wgsXoxvs6S2vBcAHoNM4kj6uKZ9KedpxkFH4y2rQThNZZTeKot",
  "key9": "31Y5nzXBw4vZJWhLUXaFeNvfu8RMKRLq7wN4BbsNjK6CuHDg18MPNiNF4aMa5CMWnbciXFXtrXqdvxtE4f6FEtth",
  "key10": "4CS8w1G74TW5ARZiTtaJaxrwkPXtpwnjqNnfhPr2jTxAydDaTr44RwNgd8HjU2exLckyqmAZ9cQjQKMe81tokuK9",
  "key11": "CmGEM2AxwwqX8MyseenvzLZ3Le2GBnvDHaxmhpemqzQTxPPMum9jgjVLfGdNmgBsVAVugowqoQX5HnyomU6HJAL",
  "key12": "WjDMgATRoCqXjvxZ8MPKCLjWVxUgAo4XKBGRkBg3XKZH1ToRuJa6ADDxyD36NCkJQjJpkqbsPHLAF6ChuZaEbQx",
  "key13": "39orbTFvGwHTf7YbjfcSP7CGS3zsYGNJVagH8Lp1ZRr47ojduaRA5rjmDhEWtLM6pADW5XbuNH8xMMeXZaM4YiQz",
  "key14": "5xBzDV4rqMdaGvqcpirgZnune6jNuk5n96TM7cqRYN59FdBet5QourULwWo3esRVs6BkdSgpy5g8Q3xYMwknyC8u",
  "key15": "mGJhAaP9eh3vDAi71jf1GFeeuS5cFCsZczgN3M9aSH7v6ZC8xLMEev8iCp7cZBpZFbaGF5yC4X4Vfx3Hc5HqSPT",
  "key16": "4n2VXbDFTEuy2Lrh1PnsprrvY6ScmD8NCzcXTeHZEbZjNuw9E2q1h7c8Bs7gA27mgR6LjDLJJTakMD158iemcSLR",
  "key17": "4mEdvWqGFzaNEmMAfX63PMn8rbaJQEPPFqnyMfeqypkKK2567yYgixgPUdc2cpijoKjFa5jRQtgmYGo29qHpXs1h",
  "key18": "5R8w6ezJjcNLsg664stK6G1pf6k2JexWuURGCrLnnLbfsTWcZzEhDFPGnzdWS5HctTKSEKiu7yFLVDtxmvArGkzn",
  "key19": "5k19Mm4NoGKa9h2hcavCpbwArwxS38fBL7s3FtbtGhUkA9KFfeiNfyuRW7uNemHgU1ccTPqUS8jTXbWMTe1zbMdZ",
  "key20": "2WUPiUsavNiXnXuZmjzyKicuCMYYF2tiP8VcxzFgMfGQ9QQNNkoZyuZDbF18xJzvvaS7rkhH4RVw4zW3AwMWgfU9",
  "key21": "3RVmu8dvC3E4hWreLNucgBY8Zbhs9H3QNmHfisWdndKCCojhpJwBSiNB58kqSqYHTDUyKUQsAcFF493JuRwvw1qU",
  "key22": "2YYNFD3mN8PabHpMqgG3z8RYrETBPCQEvByPmL3ZQSET9pqfLqS888yETDQZQC9hkbvftHnnkx6b271grhw1KJR7",
  "key23": "Fgwr45q2LffWyXZTJfCxXbvGNbxpmMKoXJ5sh2EAwA2j65umKZcefqyszB7uojQ2QoCRzNnc6LA62CQTVQQWsFj",
  "key24": "4S6FstD9Yvf1pU8EkzYJi2XH7Y9JBC1MbWzpScDqZEMPw3C9jrodvyHeyTEJNzLTwQMZizCyK4ZZY2SZgRvzGowt",
  "key25": "4LgCm23Y5Ah6EvSXStHVgpnw8YZWFgCUUJGvgyJR132v9pSkqnefc89zTwmm4fXEmLpFLQmofXJW6RYPAKP5Hy5F",
  "key26": "4BUQTdG3fFVRtTm5735krTkmj5U3ViShvnZUrPruQTcutTWgkrrF6astcbmNcDuy6oQgAWejJSTa5NRAeJQG8e3j",
  "key27": "3ZarUA7jFAfPUQZh8TA1YDVLv4KB95FDNDNv3nnq5F3Z8Sae3wcRt6GWMWjF5bTqgcHGkkdZo8rNWQmrBXpwe44U",
  "key28": "TKU8yT5CRULFfMqBaCC92XiCw48MtUmY3hHr3j73WgYqRzCD3ZboFcWqzaSTb4XZTGPe7Js4HrgY4pGSH66J7NU",
  "key29": "4CzGK4UZpZVA8sZu6YSmrEHHbTGFgHU7LGE5dRuANombGyMNGKZadFaVuPtPDNnpHehGqf4BEbtW14CKuL3okV7e",
  "key30": "5C6e7VWAegTJyMuBrqFkMnvfg5EkMqtUoBKUMdkKpuZ2uZULs6dey4YQKdFpc3TEqSP9d2ikKih7zKJHnfnA7phB",
  "key31": "5kQHi9mkv2CcZVBgTGrrqXjRWJea76uerVT4ZCrpfe4nUqV5Xy2thpVVy9Xi2j674vQjZAJQ6dpLiHuWfcyeYrbz",
  "key32": "4Jwc61xBKRwXHdaTex5jq8ETshxF2RZokTZKUmsVrHsApSkjtMeSFLKjfuRXjd4CPhPGxKYTdQAhJ4DeaGw1aHhr",
  "key33": "33jdKNfAvdezYWcCdYRvUhr14bb2xw2CFbhRm8bDNrg3duQkkcKUQfHRhfHkyre1XmyfQBsNQkEUDvikr2ynFWqT",
  "key34": "4XS4eARb7ZahG4GKRjjRdWaDV86Y7EXGrqqb7o8SkFGoRWHK2s8epvDDWkebCHTkqCAcVJZPnJkRsSKHTT6KCfDw",
  "key35": "417piMQFjyPuMezq2Z7kgytfj137ALyF1ma59FaCPNXk8n6xHECN72oq2ZVDTZFrA8RznXPGAyLspzASsvaEBW2T",
  "key36": "E98XqicNjrf5intiRcgwk7xeXnSM7hPpyvsRmNDuTg876jBqzfJ3UftbtcqAS6DuzXhn8JAhRgUbd54X6smDorQ",
  "key37": "5j4Y5s8zCf2JtZ5hN9PcrhLqscXuwTfWtDfGAgF9zooVuvuUXkLPZLkBGnYxVZ6UQSu9UV5o5wCYoyf1CFVAny6n",
  "key38": "9DQHuJVHwVzmgCCQmFY8BnsAtrHXx52zEuGKPfDJy5hi5KaboQ7h3pmLzqdgphQ99GzkTHQEm3HD6MPNJ2HRNCh",
  "key39": "2sgsxjLE3Ge5ybS8w2SrkTaSS9FFRn1Jsx5dnvDMDHM4TbqzQv6HgYHfQebgzxtkKzNHEZj7P4NvCE8xHfcFYLn",
  "key40": "3vY7Pa5UtkUXUxmijR2x3u5gXTaXQnAhoYJGc4JP9jLKcH1pEAaRWNS1K19V6zf8cqaCSz3Sra8ATBt2M2EaW8qR",
  "key41": "5t4fnWzCk7VTXJW3mx6HP8peB86M4LFiTTaeGqRR5Xecj5QVmWDiB24DnfZi7dqeApr24bXfrqgLfd7vb7uy9kVJ",
  "key42": "26a5KwSNnfhfN8WGbzro8B7JcG4zG9raPTNsczmP9Rm5CB3sPBAKBQTftDuoD1sozKLARBT88XZ3w2fTUezJzzex",
  "key43": "2mcpPYfcQ5rzbNAHStkbmA3fGTJy47TtNxiKquzZi4nzdzJCE4yyGuRXaCXvUcgxJ4FABwfbjMnZqW4My5P3AaP"
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
