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
    "5D6V94KENDu1xXdGT5DbxpJnUEUQGjWgDqxZkBfeTLwqarcVNJtNRDsxedVwJLeAQcZEVbFUYvWJZ6C6emHNr2AM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53tG4wA8oWJZqgNn7AauNh3XRABVEHPbB9HNR77Hgi7xuBztJGhUuKmoQhAYb2Z3v8ZtmQhSyS61spQRtGQHvhbQ",
  "key1": "595cj7GnBvT3EbbzPwfTnHRizexMkq36SRFVpmjVvwMzSeSCKWtLjwmKwcjtb612YZRULyiiC8hSJSivhN1X2kv",
  "key2": "UoUbDTP8t4wpHvB1ruHi1Nkx4Kb5v2PxjwAjZ454gmJMf8PQoBm11sawcm9ZnLwGD9CjQGr8XqCeZ69mzJ99hSJ",
  "key3": "3dTVaqKuvrBhH1mRCCzzULNT1NJgExva7dQYvgxM4FWvAKXLgPWRY4P3v36GvWbVwEzhSR8NnGxnupyJq4NJyg7a",
  "key4": "2DzXu1LFK4EsxrbQUiJjTCfyz5NRvhuiCipQHdLg1Jkiwj9zvm8f8MARXEpPj8FcnR1SzEyrSrkTkRAhs4wDsFmV",
  "key5": "54kpVTqncMoJB4RQHpG7SKFMVoRvWqHAstZXN9zvQovBDocDccJwcHzcJ2h6tNgrHVtxzmuQZ4VnBKDP6zGofpNh",
  "key6": "5kfzmFCqnYEUepsNMFPvw98fnmseUMExQGmAefYNbWUmGQM6hMG9wfWmsP6X6N4rvHhbqRSwtVwJjXFx9VdF3F6P",
  "key7": "5Az1j8nESQdPKqmtBKHyv3pTbqFDGrhMuLmj7M6BPRFkTyq7CGo36JNUW3f5kn8c6Uka4KNDR7LHpzfJngrEnFeo",
  "key8": "3UatssgtCTaCkQ3Trcs7djiwEkppq8Dni9uPwfxM4bmasZomEfi7J9dWdy2ojzMxdji6WTDQmojrUfPWhBMbifsK",
  "key9": "4oJh3tuYxwWzJLFjnye5GDmHgpbix3jgYFU38WhxoWirtAQwXhXYeX5SgopBQDHahac2SK919D2yzyVjQks7mAVt",
  "key10": "61U1HiyEsXiiZxSMoP3aY8tMENc9q1YDkiK9FkWM1weEEGqSXSn6z5FBCqARSsn7YyRfha5MoF2y1584D3fAi7DD",
  "key11": "4g8v9jCEjNdpnSawgR23b5xMTi87NXPBNDEuLuTUH4uWvjAUNKR1hk9FEJe39vmdXxpDfsdXrycW8uPfUTAoV9nR",
  "key12": "51ripKqvyBZZhFuioNrCA9FM44utK2rfPDyD5sjx6ogoA86rQCXG1ZHm75W6BLKL7s8aAtYSWjbehB7CzRtYVAMC",
  "key13": "3SWq7NGMQ5EcjMDt8zjf1FnMsLubvagn2ccA9KQWeoHiNZjqFM3AsD4t5S94at62YVfVS1d7oQ8wbUR6JmC8LtKX",
  "key14": "ZPcn9FNHXymF8ueBXKdeKUoxEbDz8ypHkf52MnCuSgPgrcks3twGZCQvmUVYDQbtDhtLorUtx141obGiCt9vkYE",
  "key15": "3ruGVhHA4sf3rJWHGkSXZ2HKKHFGowGAy2UuuN3gUsFsG3aVHNBKLNYN4eyapifNH95mdm9giWkDws5iG8CfUYXL",
  "key16": "2JMMSXbxDeKryTjZxX7psJLJD2DvBQu9xEH7z1og2LLiP35np3XDuyJaYqj7wkPFSF7TMwdqTxPR4uBBQN9AeaEw",
  "key17": "5LojbvYYMtMTjwv8e5WqECySn1bRot6LRpc28AuwoChr7uJkEWi4RCEkTaEm4sXUwob71Vd6jpZ4bVBNtMMMsSRA",
  "key18": "3T8MjViYsYjMDAQqpxp3Z6nNNg2PtenmCPi7exd6p52f8Qcxz64iC5GnnLAYR5bcbcHs9PBLLsK4s18xfruA2scr",
  "key19": "3S8pxRdE89gtEcPjbq2xCfHCAVYHdD454wrCn5kGmQBxrXKxpr1u9YoJJQJxyuLF3XXpe5fuy4ukKWVUsh6bhFGh",
  "key20": "3qpHHM1pKg58KErdJ57zsxynFr3EwMLHQ8CquuxHPsnksgYmpk5wgg2r3RNRBt9JHAVKH3eWpatX7aLiUUgedbCX",
  "key21": "3eR1njvL75SogFt5D372NFPqLz414XZkzpQjeRGmeTiBS3RvWsZyXS1i43XAKFpiUEZfqxFnk86LxkmKBM95Rbd6",
  "key22": "2jPTd9qpjC1WLWKiktxKcBY4esftg9p4c4VhERnCqcedUrr37MdJainL8yQQMwPeNuTL5xf2L5bhDrGFiJ67e7i",
  "key23": "4UN4B5FqwEKeSe7TCo3adv5y4ZygqTLumrKEXAU8zyXEBCdNZkstCjbUjqW6B5XTkrUcpP8JangZth7nX5PTyFcc",
  "key24": "4ScaqtVLUcPa4gUf1q6RTHVYArM3nUtvCUAtmpvkMD6v6bwFVbBByMzdp9zNNKQ3NTRmbevJByHGd2AnwHXmzUBB",
  "key25": "3FHEeXqeHE3JozqvcQHVVXHgK9V6tGHiNGzkJKVaxGyTfL7hsL6FgapeA2kEFxTWZQ3JtTivxn7VxwK3aeesMgit",
  "key26": "5UWVCn2MkF8ACdAEWUo73rK8rXX5LRqtub8F411ZESMevuMRmrQjeXqMA2K4sKz7AyyqjetiYGmJ2o1QDc71EqQK",
  "key27": "2xoH6CazPPnwrDngWC5vKjP5nQ4LBhfJPfwLzdzKhvFkkXLFyaxwxAaYKapFVHwfrhzQzSwe3pPt7G4gCDWLsUCz",
  "key28": "2XVTdazmhvESYVVbyGcAACddXssiMDoWNrSL4cRsSwpNEw5AM7GukaqzvRwHt5NX2pQQLCbJyjXrf986F8ea3F1B",
  "key29": "3yhP4nTZYJVtaQd8ASR27SU8YpztMtELb23cWqPAwwrSqwEZRMoPgf63rxEWrUf5NLp7UhcP17inAaeJYzXt2Yho",
  "key30": "4VRQKcyZT96xXMshU18jtbcc75YKapep4EqL2XJV6YoqgsSTRHfdeRserLU3fvLgqSNaoFLVGgGKtnLH5rdyM6at",
  "key31": "tYMDf21TT6NmRqhms1AusxwKdcq2gD7WVmDLicramGucUAWegg5EQ6xcAGUhhAGWgDnk5rBkfXxkmBbmFLDfBXA",
  "key32": "2SfYR9y3t1sm5JDG7E3YCTNDPJuqXdZ2Vcsh1poJdFVZqTMcpPMDqSgjMF2erQ2XVNJxhrkNbrhXUVScGBoNvTsy",
  "key33": "5w6mjJamZNzazjYzp1GdT1EhS6Ah6AEYFpcTsAyar17n9jjhijT3WX5LbwxiKTfcLURqvQgt44YfkTjqecL3sHtm",
  "key34": "3eP9kbrLzFkcU6kDeoM9WoMwskKey6yetJuPNGj3ZseJgHQZwd8TCt6h6NqdZJ6YYc7dyPmL9pcTSnTnLnb543F",
  "key35": "oBqULrvciVsmUXGeWU77W6hwhmx8SjLCBz1mUiY3wi8zHFHc4uGkDpKxCnpsQBN8JrxRCgvcz2Pfdrwv9JGDRuR",
  "key36": "4vcDScnWSVA1iPrxP99sYdSzz6VFiRdQsoUueDUxyXy3uEPx4tFUhiPYSHLGhZjtmCt96CCumpMJe1qna6PcDwAp",
  "key37": "3J3ieG9qqDNbGQ7k5Y25KStTFbCVuuQXXmc7dDNDY77gRqqmZARhg1bVzoJXT2ffK2PPxjTaUP2ZT6w5zTfYB7sT",
  "key38": "5cmeKD4BHtybSTcPPW8nXdJP1MYMWqfUJgFyH6sz5JJaXnS92eiNH7X6xUeQB95Qf9LK9EkPs9g8MzetshFNGdX5",
  "key39": "5XiPUBBjznBFYDzMvn12TYoLrKJADDLsfo3ihs2CLi8AtQguAWYRPdhEoGMZw3W39AHr89JLzTvDrskfqmm5rwRB",
  "key40": "5Q77ZD9Fk9hfV4tHQ61dFMVGcAoF3qfVeVL18bUey95CYmRfkRJcE3aHg8yP4ZTVVjvVU42pb8VpxmZH2kqWukTW",
  "key41": "4BtujeHJzacZtfZgUqR7yiKzyhfxEm9SA4huybvZfn78ydz16uve2ttWkaeraA8zXAWRZTADFSWmLwzpDLqTxYAv",
  "key42": "5C2Lw7TaHd79dfy21uYXykTUcXpQDscuDhE43W3fLSmvNx83GGGsScvA81TazRDh2d28woHot3T9akd9S4sVnEYH",
  "key43": "3cjg8dhqGXnHGKK3YYazpPkfuLNULWkFxDp9U2Ptoq72t2Qj5btdoBqymYJwDzfJc7k6mvVxzZv5WPh9XUUXh38W"
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
