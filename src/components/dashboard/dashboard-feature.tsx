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
    "2euu7eppWSkcWGHGfBqVuiqjAudH7zJturVoiCoP1T8kMmU7NihchiL2CjvDqxCFyWDbjfyywBtYq37xicwE7Zd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z44MwDkovQCy4b7kPBkNLxjEhamG3nArmAy59KJAWiPiPP9H7BHHEGQKVK4igaNdm2zc6mLVSmGybSNKmkczEY6",
  "key1": "42RjXsYiTF8noDRw7jynFSYbWUfXzHuxsZdZiusgbuXFXVKgrvhwzgpYPEUd7cQ6Gvph4ATzdnSLyaoRCpzXGLh4",
  "key2": "38yCNUFbZBvX2jzY4TW2CaFaNvEsdraX7WGHCqSVe4w3gFvHSZJTiwocmSAUGKKbkimWf3k4VPzfKaW3VbmDJFVF",
  "key3": "4NippdQSfHybS3GvXSkhAsbd3bVoq2MViEtsYGXrPeugTYrevgep42FSWHT8BA1s2a9zJvsnmJL9PvTPa2ofpSWo",
  "key4": "4NweKFBhQxuh4dTof8QjRNPUc1nSxyLMPZH3RAKR419YphM172SdPxBHKwd9phgQDuLgaC6chSbFNsbJ34c3pz49",
  "key5": "4uqtjPVTevgXbBVKcDeDUDiuXL5tmfMKEciC5ThgaZuK2yVB1uoPHtuTbxiBokViPHR7mirBG42AXDeJdnibAjCp",
  "key6": "5X9zgi49YZGTNsmz4HGS3krEBqUTuykN4V7Go3jaKinqdBFmW8JQtWhkdQBwna6wLaAAmQ7ZkBXq5v7kjHhWiPes",
  "key7": "2sH36nc3V16yrRKsQaUqD6YYkvrPZL3cMfU1R9a3XG7frzkivHUZhuRFim6t2Kf2jQFFhy4QuqktuaojxyZgRFKm",
  "key8": "2C3PkELm7AKYzc4sJUusCdrNxhvmHyMojCiCXGVSkjpMzo7QN5rQKdK9RqXw3kZmDnVbzdpYCEnjseHZiqfqJJJQ",
  "key9": "ZCoTKhwnajGnNdTMSgtVnBav8hFcC7jrCaMkPQWmNmK3inAnc4LMmjbMnocVNgZDJ6QPbYKYHoSrGY2rJ2dqDY8",
  "key10": "2KAXNBw414cTmHiDPhj5x5ctyeaNXaGaivfkd3EvnTbn59cBToZhmzQxxUjfmCWdZoBk4edoc8ZC3TsgH11g9WaJ",
  "key11": "2fgkVj1hnUnV9bnGDw5t3QvCAkKQwnwP7E99LYpMK6ruBwssUrNhRC1SzF3PL3wRB43aNZdkbPESgteKPVWJKJsD",
  "key12": "2hVVvExJiukvGNJ9e2QH54TecxPGJPdDSqCy1MNojRfgK2GC1wjRY1bg6u4JFc7QY8msfknNAVUAwnYDVAh9AbvB",
  "key13": "K3wFKTZrMvyTcJpDCSCyuUbtTYnFKvXN966x4aN8gHPoNHEYkWEKWS3ayW2UwAynfsCuqiipkFFVTbWDaTgVqN2",
  "key14": "2tn2ReqPvyeoK4iuVjoobPZ5bpBT6YBMPeZn6BNYhh7v2tLvgCjohcZS14X7LEFyZhRA9XbALLi3Wgjhznm5MzKy",
  "key15": "3UT7bZt3kB8DAZVGSUnrxna98bJGkH3s9q1GZjzAATmzZUp6aVEsSj817LGXpisVu28CGhBc3SWn8x4P6nCcTQU1",
  "key16": "3XdjSqim2pPoNJwUbYKdmJGzATA2L4oaRVTfKfPYoWucptbKr44qdHSb4yQa3zh2k1Ap3AYLWbL5Zj4rw9aqtmwK",
  "key17": "4kj7wA3fC7js9Nm8y14iB1NyXGpD6JY6oY3r2QAYyi8uThff5LJmUE9e1g2byDn9RdVTpqFRKGAkQFsBSdxSwcYB",
  "key18": "4moGCq7DENuCAuXYraXmw9gj25Gpt94x49enWz6bZkKMbvwqqVHfzDDEiJBgzPJx5xJ8FVgxroyysRWhcoT1oqU7",
  "key19": "2M4GgDDtN9aBp9MG9wb7gSAHRZEMWBjx1PcsMHn7d8gxcw9xxTGv8USgsdPbzA7DQ1UKAXgAEn38SVz5WaU7LZm3",
  "key20": "5gZLsBU1pUyMAQNVfuH7SsYJj5Be8NYeTRCJRkb8bunWhUaKPraoGWYbGcuVd9tEe7gz2PommnJKAQrsiRGX4AfM",
  "key21": "fStSx5KfygXthcn4pESbz8z9sHXtPFXzRNzK5ZPZvcRDxMWkHjEVhcZpzErWcshXorhB1R3APF1kVkpoSYwcwnH",
  "key22": "2MdD7kFzw8xrpcdZQDqt4Eq5MNdEaLJGn6648vRrftnXXTLeaBSp9kezCBFdt5JDCxwBdbQzKTJNZ2PHbMaKREHU",
  "key23": "Mp2rj9mWmAhE9hokjDkTR1MKmZtrwjSjeRqSH9F5nX67EeanZCDk1MuGjP5SbwHzoGa3xm4DrcAd3CfkRBUkqUL",
  "key24": "2DND3zYTqaVdx7bUYWbeumtEjM7TK8Gnh11brr829XCRofveQivqssaPZKEqirP1b6vo476cvZSzvFnuCK3b9GFa",
  "key25": "SLnbKvpATWYa6CEM4bgjtkxNcVud7YZ4Wvvy55z66DHqU231T8TXYgSVNJFLveJ9L2FiYKNW9mVEswjkg9TGyZP",
  "key26": "3xrFKzUi5wSAgZ3ZZRnC8P7k2MhpDhCVkTrDGc96ZPU5FRoSfmhhaPvpajGRNGbZDxDn3i8iCZYBZdNP9aALcL1L",
  "key27": "62LvUgStiNdkZTXKCZpB7w7vyvwW65wwERMTZ74QVeTAWMeQzdd2m9K9ea6d9uiJsSXgLjkcvGX9T5EAP47aunpk",
  "key28": "3tmV2mX6qqWF9jH3oQKceUTGxFBtXbNBZNakrZfkSrQWGr5bHyKbuVRuRwYhpPYStd5m2qdCDCrWHJ12Hofiiu5R",
  "key29": "3kQRzN5XiqzpCAqsn3jaxGo6QoTA6ntSdUtb8deNAkUPpwVDZUmL2KUn1BREfCf32nguXA72fyQDqrpettuXCkjR",
  "key30": "5TjPZ8NHW5JGLBLv4woy2urioEFqfgJLZiWdHVxRQXtd4CvUbCPhEJVW5RZFJYctYccWM34qzhVtyevUxFsRK77R",
  "key31": "27chFCqKg1suHGakUNu2d2rk4Uv5eiHwvuYt8U27fxTB3fdNj9QeEbaHVuHJwAZunZFWSuvn72QDLLQ2yqTBfLoV",
  "key32": "5bLnh1swrQEqHMenME1HYi3bh19VAvBtPudWVu31tg7bz6mvKbMu48dSG59cCBCjhuvKpfU9KE3biW1mKdjjiyHq",
  "key33": "4UrQAeQouzALHnLFJ9D7jAqvpFUCHaQsXX1H3sPD57dN2cgyGNGkGyuQDUZtsdVBT6bf137XgxV8kJuV8jDYdjpm",
  "key34": "27ePMx5bGHaJpBRzzZF2aWPnZCKekxcjT9K87GFeL6wquZ5oNEHwvDdqPphsSViCviTXrY2KLpBV8qNZ5Pz6XoyF",
  "key35": "FEqDh7nrMg8iy72pW68gRdBn4Tb3BaxEKPWSGUwDnA5jrHhhyuNGbWV7h6u831TtacnJinC6unPftmTGhysYTKc",
  "key36": "ArLALvEbVtSwMsHrtUUR3RgM5Z3yuNb9WBFU6QiJHjMQrXYSXUAAFojWsPqbmB1QB9vmKjHM2yVRKJzuvR2vdKb",
  "key37": "4ERRjKu67Sud1n8jU8nHQXRdj6K954zuSeYij34jTNeNyqhSnhwv2C7876Y4wFhxU7Z6fx9PMabMPqiHB8oTjjKW",
  "key38": "42dx7sCcEaenmD9EM5FdF63vhV92KX3yZZc6yPFRyAHLu8nHm4uJreVJaWagvxh8PnW2xoX4h9zP3yFfBJXtsMQX",
  "key39": "SXXjh1JshruzN1DpZXuJNbAHyZ4Q8c3QzokZggo57uVowZ8MqQkytSgnPnjWfwaVbEMCkyGJJQzeqLAixVfHvFU",
  "key40": "3pBRWFpJt8DVy7xt2T8raPVzs8rEPXEiwGxq97tGYWWq9AgWa4Xp9N2UuJ7FhxXFiy5ggSiumfUgw3q9GHYdeMg2",
  "key41": "5bM85zfejaNEKQujAmPmwUTkUGR1rK1yCphdStFE2gfH656QW7yE7DGz6XJL33sXRXBfgLwTmRjVoxvFCJHD7Xou",
  "key42": "3Ny3BFkpzEdFXsCWe949TGVzzS3rmJgheepETBRSsFUi3KL8qjneieNbgssuUgeV6wpBpGHtSsYyrdpjns6djUHU",
  "key43": "t8shHb6A1Vmuv4eyqu2AfE4ozqBHwPSNRFY428is64uofAZzk8W526DV3z6SSSCMDvDVN25xEirnYyxcBbSfy7P",
  "key44": "22mt1rdhviwCApgEQ4AyuhRebqiW4gxqURSuoypcDFz1hX5AuJMyGufZE31nwmDu4QFzN9uq6JVUzUnutPHC71yD"
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
