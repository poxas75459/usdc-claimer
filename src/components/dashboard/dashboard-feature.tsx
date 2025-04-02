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
    "2SbNux5F2AnnE8f5cqjKoJXgJA22WPCzkSyUfaodRVaUvb7yF8LdMgnoMeEb6g55WY2MMhLrVs4P9dBYeKLLHHfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jBvSeB5pU6WvyiupzjmWRLse4rRTxyDuYb5d6GjtjG1YzVomTngukr9RPtXNEvVNVjSSEgueuSZ98geFnz4paNg",
  "key1": "4sXLSg9N1FNABTecP7PjssQouiqrkRVUmCcC8W7a8GTbRFoSgfcEEmqJaAh8BdyTcQ8GfoL2Xd1YgEViN1FpWbNN",
  "key2": "4ANWViWL6p35ySha4i4cMPfvWz8TYSVyxJ9spLSG1rZboF1hwZgJR8aiDBxHPNgVCvKtceWLbFT983Z9Wxn1Z9Mi",
  "key3": "2tzaLtBDVSHyCqi2rjPM2pi3CJYPN1HVX6cUKyyhqCUorzBBEeRg9izBhyoxG1PZ8QSDvgSyeDBGa61fDQBfEsoy",
  "key4": "7TFWEELNnc5HBn5bhFUjXKRgZAe6PjmV6FyaEBxPJZJbutjDM8wKEpmHMqZM6XpB9HfEX9THVeMJiGE8vFphawJ",
  "key5": "ZRA29yCTMZXoxQmHcUbr6gcMbDECi9t5mHdMn3Cg5dvxJuYcNcu2sXXS1CDRgQ1puxomFp1ofpyisPa8TBYTiND",
  "key6": "4wEyGJgwc5zhQD2kFgUExfQaKi2fZUkkXUms6hupQ7Mjsod8G6uJm7pxoAK2agve2dQ5DkcREGUJmXac1jgbvGXz",
  "key7": "4m5Z27XQzsQRetGHECVirQsG4kfNsu5efMB8hxrydDJaaGTSmY6iXohzbRnt3W3QWYKST4Vey1PTRCj3aqGxaS1v",
  "key8": "33btBNhCbizjnDDkUvr8zgAcJFRCVxj6145JEzHbFw6cGZ9s22ax6wt19J8REMA6ARf7poxosUUp2D3Vvg1M8pPx",
  "key9": "3jM75gyNYz2qfANuoaY5WiwM8i2GnFFUUawa9tqtRE4Z24nUgeDFa3aThbvAx2XuNHN8ygwi9ZN22YyM7pJ8yUt7",
  "key10": "3iv1hmeAfQ9mdJEfLYorBB5t5E9XY8DQ8YtsTKqKExs9JY4VKELCjTe7TUx829fZ6XwhGoyYh99Tb2QFwcbM68Dq",
  "key11": "4GPxEdus6uEuuhcPMFkkzdbCME4jT3BKY68WvJM46XJuNxiJE3q4UixkY52wAqLo1imLiWp2urox6SstbQagbT2m",
  "key12": "5Eh5ZiEhCvvvT4FuBzxhnfRHQrHsTuigMLVCMp5sByzdDWmqPiUWLFNEAJmM5yN1kGzC4gyHiBVEtxYnZYuR88KT",
  "key13": "5g6voumb3NWR6GZCxWBJUFQ5qKM63DwRqZFWcDTGjY45vk1onwVpmaXJmPmZ2jKDB5B67VqW73A744xysg4aZmLq",
  "key14": "9ZVKaAZ2p1wGqnWhNPkEaM6JGT4cem1kzvEMkzwC4wJMmPkEQVzKrXARrtPp97Tv885wVtuhBTBzELqmr4eXjm5",
  "key15": "XpW1xuHDZ5W6Lv5Qs7D6LwCodn8vArFPsZR1rQe6Uo1dDW55kdH9CZLUT1JSy4PheXqiTKH7STu16DaKp9fTYXX",
  "key16": "5K3Aish47Ai1xTvXBZShnxsaZaoYKgcrDKXqrZJ4jPBUK85H3wB526T1ddYwSnTjovStgxu8JKnMuGYz12gJS9NY",
  "key17": "536ySek2T38a2a4gdN6T4W15prTvnvEaqPX9SC7k2uqVxRzXZSukJZcBE1h2cT2NxLWarZzujufea4vwko3zj3bg",
  "key18": "3jSZTW1BCEjY3K49ouPDahdmdfiLvKALBm5JLzhjFqg8gqZxobrH4cvCXbP631UStRC7wVV812S2Tz2ihuCk7b2j",
  "key19": "3K2hkqBouuAEFmFUiBTa9y8iXAFRDLy3twHRr4wD781CEjC7rtdNi1xnKZZubQAAr2iFT9YzG3R5FPhAXYxbxz8Y",
  "key20": "53F4kV3KMEnKWLLU9od89Qu3eVoauReY9UT6Ye25XAGEHyzstfmdKxUEg7NwHAPAPs9QMn7YaZCWx4egWwKeHZsA",
  "key21": "67D3b3uSFm6vTN4dWh7Tc9nAeHbCDjntjxpqtg11xX3vya4ANRSqeD42W4N5SfBrszub6x1cyQStuefDyrDpmzCT",
  "key22": "4qWTNzUT9nbKh7X44drDrnKQpP6wxQKghV69oKBWJvyyy8BFL3toWJdXwo3ohcMAn1g4GmuScSdA6R4k262FKRwJ",
  "key23": "2r95CsUPSps6ozLeE7UCuxdcrThS8RQHH4wSnGTfYdvjGiZix7Q6ceua8VqeDEWbrGurVX45w1XS58BQ37QB6rxs",
  "key24": "dCKQ7Fo6xNMkWAjBhdWtC5UVm9FPuMzQSauCh2L6X9gknP4m2TvrjN64rfU7XwGcXB9XP9TPjpFo9EVAddxoGgn",
  "key25": "2J5sARwc8S7Kzk4rC3BPD1eJhaWgnFMij1qSXjy3drZiVd5kdPAUGYjrAAieRtSdCNnZpLh6x4GvLYL3rn87VszE",
  "key26": "3hsZV5pDrWChWWj68s3JRQcoFQq4vYwuKxoZRMZq8RgM7KNaKxD39kBqrETKo5qZHqv9sp51wzF3UKDyasupZtGT",
  "key27": "U9oDEZXW2aNe3cwUpBzEecfMBr5uxz3Sp5T7m8pgwSVGsvMqyi9XjhQuZ3oKETWqw1rESwA5V18maAknsZ6fC1b",
  "key28": "3ac9ehNSKc5fMc7hYtS7PVgQuEhbdTspcGT9y3bAqbW9yCYQ7S9ZB5rH7qAPgpCZtvzaNN7abhwizb2ptTAjexJR",
  "key29": "2wRnpws5i6HEuTHLfjyV9TFeWKQYHS9RGEWFr1GEw46PNnxmNEvkLskCyZCMaodRGqZWJ6vuWachxsG319UnJbwT",
  "key30": "2bmdvbGJ3cXiXnAX2qawx5EFa9Gwh1upT5SHYehRNBpozwnX7m5Rf9n8t6FetMcNii2hXNDHNaiBevigi7j9HQWg",
  "key31": "2deX5yjUuagKBpGCjTaqTbFajwjygauhYHGFbsF3NNUEQu6jpGK4rW5RKb2DfLHhxiX9wLn6A1SPL4MsQRuvDsRB",
  "key32": "4WyBVqWSRWhwRHuxptxFHEenTnwaxCTHKyo79W3HaqHsiJJBKtZ3SqcUZjXnkeU1ree91uq2SNcGYGn4wyVBxXo7",
  "key33": "4m4D5cgvDCjPNr72gRfVLZMRtjiV6nLHY4T5QZJJ5CmsPM9byn6awJKTqdwczrkpxebDrC5XoXk4Y39CmidVkcVF",
  "key34": "2Hr2xiugrR2Smm9NpV4MzuZXVZgd9EyefNRkyCB39WqnuKpDZ86RxFMg5pMGLWCursFFwizcc5EvtLxQTe6oHaFv",
  "key35": "5uiA64UWqe5LfCE82MNWbahwLeE1zJcWyp7AdHztv7n9ynbMKqfp1gc7kt7agKYe9gYYK5pD6qbaVQTb4ZpsMNH8",
  "key36": "2pzNBmnYtbtAgfTF8XuG37rswo1xXfMRkkovrP62sfbamAmQ8QDf4nUY3UGuY74EgzNnKweP6bvgptRuXhmnjAd9",
  "key37": "3C4eZ9fmhsM5Q8gAcA5USnmDitJ1Tebmse1o2RQMNYUXzUQrPunTQAtPuEin2YT2DNo7iJ1DGL6g167cbom33xW2",
  "key38": "3L7enUJCFUt15q1eUy3U5GjxQKjRMZfPbwRWeXhzGyzJpnLWhXc7DXmcVmBQvHp9sSuTbR6DrektVqcRbsgQTy8e",
  "key39": "63hUyHfLos8Vt8Ggt1cCA347NsnapyY84YF7FcixTjWrV2dFQ5jfY59ALjhPLcKgqtbRJHV92bdjjeNiyNvvx4kW",
  "key40": "3vAYP2TQSX66ziU9vKKPQcr1SrRzY8qX9KbdcPqT7LE1qxxTopDvUSXM53Rq7cnqcRs6xn5jeUPxgEFigXZw6EJt",
  "key41": "5FxJAQk9nmPMj2978AwQw3BdPwvmcPVT3HCdCDu3xhUs9CYNsP49QBRvCP91V1UnZL1J94xX9Zc8Td5t5S8oBsW5"
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
