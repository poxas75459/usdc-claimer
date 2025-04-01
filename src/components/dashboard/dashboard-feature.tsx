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
    "4V4FxxYpDYMpCMRi9b8Wn976xPV8cG57Q6WiFwTXWht7vN34djkP4NXyAFXJoNawvy1ZgjtSJ4CwS2sCLvoBqokr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zNV9TvpbmR7CuL5EMXzFwPgu54BubSEwmbkZDGGE2Ane8ZABE4gTmBLsBafbCkuYYbKG9aNfM8B8DmBDd9mTnDA",
  "key1": "5nBeWBkfZKWpkqK97JsP8vewkU1greExAUCRc472qDssqfmnicLS2AKBGdnafEcSm4MLmVMRfp5te7dMZfs3uq6o",
  "key2": "4QhjSZcHE5Q5F3N7GyZPxRiJgfjL73j1RskDhmj4xPeM9kB1gaKETusdbbSkKXBSeozyeSoH9GnVRViDaz14q4tM",
  "key3": "3ifwHftuCapBzF4zf2oFsTGVJFSCB9bcKR7zyuvaoPyoT87keHFh4e18sDeGKsdq332bb1xbm6ZpsR9nLDFyPBJE",
  "key4": "2KWTMSLaqwdb85chFmrJMazVzYF2fCFJoE1iDvMiPRoiRWbNb6nNNeK7qMcEGn7oFDP4NnzC3eG26h6mo4wPpdSs",
  "key5": "2V9tFSBiPhjh3twHPT1UN6Zf4d2EpDYJCeM73YSC6fXPozTuK12Fk8xfFeDLDbA5smLiKvzD54L41cGjerxUCkVM",
  "key6": "KL2ZxxbGGVZqk1cdqCJDkUxbaBxTRvwqjDEUBoHHWUT2xDJz5S9AzuHBwdXYj8Ncgz12iHtPaVmo6NPqij1tB8E",
  "key7": "uXunKgzLJp2H12Dk4DjjTsR4Y5H2W8sbaGkT1Z2p19Zfd8wB8koyYYpk2LrN9STaSequfGe7ASH6oT83hYw1n7H",
  "key8": "4Em1SBRnJBp8YHDNxAtCgZyLJQDLtsjjJL7vD94EWBNmQ8bz2ip3KoDd4eVcSWSaKJ3NkLQb3iGm7QiWBJMkBsY5",
  "key9": "m1uDL12JjZTvQ5vU2qF9Uwwu3BpM1t3cnnQsQAiz9A5UJqfWhaT12s4FnSpeqqZZxoeaiShU7gbQt6hANupq3Lv",
  "key10": "2tRgoRPdBxdhXSq7ERQTi5zF4xdcZS5RXk91WgjVpm7stmFC5wMnouxu5To4J9QnpJKx2SCmb7RcjujE1xoKSuGJ",
  "key11": "3g3s1x8Nx7NinfJDm7kRRFAt7DzdzGoohf8n197afs9YhruzTfVPyzihZNf7U8VR1YfHC7SH5tHQGudRHsuVJH5U",
  "key12": "3XtgftPH2hGkBu8H8w6HLNCnp3tQA6aJYjJc7dDiZrFZM1tBS11ndJ6CK7WcVWbTogwqvffgV5UigZrJMi8TmYqj",
  "key13": "4GHYwsqSFsKVU9gpd2vJ6E8igYstp1xAnxqWin1e9R4oAM3h1gVEgsRbdyxikXfhNU4B1T31Jwf2yfTfKYaq1Dh6",
  "key14": "3FSm9tuZmLXUov1sdNuDAc4abmZ5M31EvijUdGcD5Cw5jBD6tfuBMnUKGA9h6nhocYzrsXFcYFuxADLsSWeKbQsf",
  "key15": "234rQgJ2Sb5vZgr8bHBpVKyfajtZjmhxSFHGJJDugHLE9qWDiSU9JYauooqkneNdUwgJdfk79bWFoMaS6opVqMCu",
  "key16": "q174JwvhHwDmeyCpEiqnqvJg5MiK6VqfBo78SkuLWRTyLJShh4Ykoyh4YMGcvyB2AvbThFKWdnKXNQv1mr5AbHg",
  "key17": "5zB2gSZ6aXAh7jZvsfKyjGiDpPpkKykRMgGt5bzMbHeEbXTDwYkS12vtuNkd74pbqLUaFaAnAVtuBy7XwZsmkCzN",
  "key18": "FbGHwxawk5hS5b32L8Ygm1DoYRuiUnkwHcgH6y5HNmUMcsNkG7q3v3ydcGJxKCgChWn5De3hBTFhPuvdnh4V971",
  "key19": "4atx3CUBux8EUGmet284fE4DXKmBofVwfg8RZjgRP135KAbspxpvePGWdCASBGN6aiZZbp88tafC3yExjUAfVdMU",
  "key20": "2ahB7ZHdkBrnCLksVeM33z1owMbdtiDzCCAqXDCyHMigU8YYg4BpjFctAz2jLpbWiQLPtdTPNoDtJiXHtKgFzsjn",
  "key21": "4YCvGevKozPbzC3MyraGfqVYKNJQAv1jCbJC3gVJ7UQXV4tiV9SuVUsXntkMYLDEjNABLdeN7PYTt6oHSFAamNtW",
  "key22": "5Yt9br1daLykFQFnQEDJxcnRCZXtJns2aAtQ8acYw9KKDp1kppj2vTdRPLkzBmWufcVVR3Vkezt2Z4hsidBDxPwq",
  "key23": "yA12Jj1S48EzbnZ19ddM6dZE69kHQYTiNE62uo3ySmDkk9ovyfQv2xQYJjfVxFtYPYcQ3XiWJND3x4vj9pVsteK",
  "key24": "51GLox8cwcitx2wBAbsH4MHiDShsVBF1YNXhs4MeuLw3ML3TPEcMFGdVpAU2DCeRapsEWsczrSaBD3FuhndH4K4i",
  "key25": "5k9bKuGtS6wDu6uHMEz5J81FbpMw5WXnJkapFQwRakXTVLBb5wsbzK8vadWa7evQjbMsNNoBQMqWDv5MrBnbDtci",
  "key26": "uFgyTz3SKDPybjkt1b7hR1dAQsurrWHuYKc4tXvzQvX9oELWGXeLmvNcGtQ18dawqP7JeAJ8D5FbJJavTNYKrDS",
  "key27": "47Uvx7KPdGToLYLDBvpjWJV6M7CDmYP28FWD2ggvuffnBhAVfiBKYhyxAxufXxNrDfRQgGAU3oi33YajRkYAUuYZ",
  "key28": "4pKcqyggF3KX2LSE9mqMpdLfdZy1SXFutVJ2UhkTNrauEJmaawbP53UEoPD2X74brFiH7TDTV4Vye69LyLR4ZLNM",
  "key29": "61DJ6Kw9JRE9x12rErueVn1NKCqSjDeXsTnRFqxSv7C9gbRz4PgzFnqKzN7QuPXd2B7MErHy4QmYRMft41rKAUcU",
  "key30": "DSQAawbz6AGx5stK5PyZSxnqi8TaLBVkDeRGRYZWM4tAKr9YTzU9XeLBvxpCgJUzQa3qxUYnhNN6CGWpvFu2TL3",
  "key31": "CXowVNQ3ovpvrdpYJK1hu7rcmiPen495WNLNwu5iqPMV7NBfJcTiAKJGvBAqvbkdcnr9f52Xwf1AfCMjd4953sE",
  "key32": "4hMvZFdEBKrz1vroti6YVcZ2Mfnagow4ZhBsRxytiVjfATb7EfudnktwWUbb3rWEvUuFQz6mJiqXf3p4z8wibsbk",
  "key33": "LpEyJBprya5Zzaqbz5Wshap2h8aDBJA5CGDgxULHyM92EHjku1p3d5cEd1vctZyjCeHvJ6NQ3N13t8cbaGNu5YX"
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
