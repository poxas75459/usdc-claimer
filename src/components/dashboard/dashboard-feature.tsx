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
    "3mUdnyb1zwqv9WnGRoXMtrmEhi2vCWnqkbifQEoZrTwJ4yngUaMRT5tFyPtSxESY4ho24ahRc7VzPyRhNiFvi3vt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43TCftUo6EYV5VaipiebjzpTPLnn9zXnib3KWvB1ifCBoHxomwy7b2j3dLWMDfP8zzf1sFxpnPWPu8AzwTbK7nru",
  "key1": "5rzqUFm6xcZPQSRNiRHLozgyURyk64MRF6YSsAUyrj2sLBLbpAauuZRtN71kUjCGpxt9JSZdQKv5izSKowRW9bZQ",
  "key2": "5ybTztPDAeemjg2gFrwmQiyjChZBVMSK5eeGJGma66DQKUPQbCkj6TMfQqUUsrcjJ2e5oXVtbSoo6yzKaGAZ2jeA",
  "key3": "7XGnocjpL4GDw38NEKrgNQXyuK3DCgVrRbcdvWDAEUKJwyZcxosPHY5Cm5MHf6npRfvqhomKXiyrtD14m45SLgN",
  "key4": "31MBdTzvH3N8k5uN8HekEgeR9zk3GVm8CJEzBf6dP2P43UyBWsrXiX4GZQJE4pthH4hz9RZGNBcM7opB1WhKZ8NW",
  "key5": "5uGiMq8uk21ucPny2D2iJDYcGmZ7S8PNGka1iRRkTk34vwXi18em6LxDjEQuoAopjDykW3jpe1wgwjMTaNwTf7q9",
  "key6": "YMYBSbqYRgFWeBVS28zoL8efv57eudRjzkkF1y8DAub5h7kk3MhKbv2BTx3C1pHpJ4Q24Eg3TLB5StcjfXLvgZx",
  "key7": "WewAV4VdtXFgRomYPovcetwcQkjkhEKH79K2PdEoaZK8cRU6N6AFzcbun6YCjNgRswE3HrZ6s1FDhY1oT6SUnJe",
  "key8": "3RrZLMpiefEVo1fFAQmxS5LvadHMBLH5Usdzyxy5GrhuHcRe219G7K2FebHdcLoraASGDRr1TJW9hiGRKdzhqWgz",
  "key9": "2ru7YpvA65gnKjXBTLZCu6HDQdQSZQenJuCVQxgFGBTdVsVtkC9vG7un3wG8Lefv6C68khv3AZxiJagiXxUysP6T",
  "key10": "FT2myX74sKm67mQa4p6Z5aSJ2XRWHuXCmX4cVNwZAtNF2kEYX1uNyzrcenfZmdJfBCb4Y3Rpw7FuXK1HWyL5ehK",
  "key11": "urGCLovppcKGb2tTTKEZawCM4Ym253pbs8sdCmBmV11zy9rfiU8TibWZvaLmdZiMFneMdm17FgBgqv2dsdH3F6e",
  "key12": "3gcvP8D59B81HcwKVZvjisMpLgWWkH65aSLwj3ZTx2ixHx6P1o7eTNysgxisx5f5S1qio9ovkcirKDYfT8ipb8iD",
  "key13": "5ucPiSV12DV9RvNxeBc1QT2R6ZNj6aT7H5uJE4Sr5us6nhTpKhcZ72yKUa2k7EHhf98pT8Uxm4ywPQopf1oyCcsg",
  "key14": "23sYrnRMHtnia5FQuNCUquBtKWDoWTHyjyLkXosf8AQqvzReH15tQnAjyHsMYyWpC6awBWEPA7itDzXwB7Td6dLC",
  "key15": "2ftjGcTafUdKhcMmpBb83DrgcU3cDVu1g3ErcWwan1LoMS9VGbn4gsxCQvDN5bBdhFoQmHHmJ4rCxmAZ3e5zg2vJ",
  "key16": "5pGWTa9amn4gfwDz2JrL89vYeFxgo8zxaoVzqKp9gUTDagjNLPWuTKV6owYgxULG45coE3BzK4eFBpYjZij5dd69",
  "key17": "27JRiX3odrjCbaSLzn4iJE5H3z9Yn9QwgGrYEJCaqb9mbW3snN7wyVgnN5cA9FsdypzQ8GvGS9KJHNddvuQNHxH8",
  "key18": "KEWrRcrnwSJvoyfWF16SFbNtPYR5V56uSZCUeKWtJSYMSRWEG5y297EaEb6BwrnnMK3KtRga4VuXfx8KNAPXsvh",
  "key19": "4Cf2MghL2pi75jvQ1oyqKgqAKyXXXQwKuApDfZfVsFQbRc826X2YUqCfuxwUnN9u8S5sVHKH2X56kvGe3uc2MEar",
  "key20": "EvUvFoL2ppWw1XVVevXRfn1NvCibNxUPYGus3DPvhKcVHVZb8aUmGzeVveYYcv2ZCaFFdveeduYep7XeD5nxYTH",
  "key21": "56evygLFLn1vtKqvamUUA9grdf1y1L8orrPrfZhobvoHuPrtqGbWgQntCjVPYW8qW3pdB3KcCSG6zPLz8bqHAJxt",
  "key22": "2amsrd7mejHMZPab4ytMuuK5xVnoxhm2Az8WBdjL62JevH1aDscrMYxAT69qrJodsGfbNGU5wJZ8R2S5L8gFezez",
  "key23": "tewWezDFoq4tH8UhLZRfEaeXhKhiS1it54b2THD8T3vp8VhYrE1zmAwff2GSoysMiYSviqUhu9Sv1Zp3ew7gLYW",
  "key24": "3ToCdcksuHn33s2y9AMsQXS28eCMoXyGF56tA6w54B6429z7AJUoY8hgUrRhw7qyhZCqSFJm4pRKrNceJ8yEHhb2",
  "key25": "kgXjYnKVy2pMkCjTiNBmm5Ppc3jgXSiQj6uBhYcqaqSrA7k128ZULkUJB9ZKviSv1u8WD7qtJebG4B5zMij5Xid",
  "key26": "uGkY1o2Qb1zXrevNzNWned4c2Zwyn1boBN6QuN9SNNNbRpkL7WJSoZPudZoR1hzvxCkfE5w1Mf9wXdhwFsdmRHH",
  "key27": "5BaUY1ysLPKFvSVadD6HxoE34TqGGV5nP7VjkbMop9q5U5PLJZFEeV6soKdYERZN3akAHnhDwZg6n6RakKbYMTaK",
  "key28": "2MvjHfiFUqvECkt9x9PPLsRfXV2kMRHpFqALTfPHbDfSuyseAHr9nbczCvsx1z1Pw8xYna3LaqPWnBHuHYUzZt3i",
  "key29": "4ho1D8RrHkprJgmkGWBHiPWZYL59njCtbcUbgDZV9A72Lixff86LpPvgMoThYmyaBYSrqFC5UuguAnXev34QCWn4",
  "key30": "3cN7xq3hRRrmgmruebChBiyPy42RBcy1YQrxUu1WqhajBYwGE6cN6ajmooKs5MZGjanx1toCdHMLisL3Spr3j5dp",
  "key31": "23atYobmKVvAVhrHXEwzAsEH55oSJZuD4Heb5FfmjhjaqHqnT1LuUvmNGTKHwd8EFv8GKKBuGoT7DEWYDb399aQP",
  "key32": "5YjeNB3q2TiZcdoMAfU9GkBgn6SRdKJhsQ2R56L1wUzLhrw1vTHgaKRwewRciUu1d9TearprQdEwwVZ4XcJf9oBb",
  "key33": "3xoFvKm2T145sbeg5tzSxwynQ7mSbgHbNjFmBxp2w1s93oYKvVUSsBugrNwMofAyyTpeyAz2RGXj9d9cQGQU4mAF",
  "key34": "4CrrRkWfjbGRYsjcgYEELh9QjC9iEZWEbyvsjfWApSgD1pfY9q3jaJvCRnaUDHeiB8mF3mfFTGvR5JPSnKJtBaKs",
  "key35": "3BFGuhkrnJQQqrfQmZafHTVTaLqzKnZ4RUGYM9aYA1B3wSdNWcmbRjj54sRV6MeXnDwUq5PaLSGpkqnsSG5YQ6Wn"
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
