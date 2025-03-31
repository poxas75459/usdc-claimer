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
    "29UQQL2GKruKV2pckKjffwWkAK8HQqdpornwfXpruNnym5PFJFTnkWHdCyXNBJ57ssFcCvBgg5FMJas8Um4xxrz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ZM4FYmVkyQPvCqGLzL9ZRErYvjjS2bM9DAZoHH8tD2L4egmnjSUmwfdjRvMvcYAWpBXvAtEPKiZpmM3gBnE7Gp",
  "key1": "2NSUonTTXbv8fdCNwqFwpJssr6qqMCbndQnVpfUdHNEMqZQkLpv5dGkd4kMNCZ7oWY4cu34xNkXAN3ALJ3YS4Zyz",
  "key2": "5YhsnyNnc69ZKdRBAAGkiVnh6L4Jtb6es8kd4puaGz5puhyymUpLEEwnEYXfJGr3EGnQtXNuuLzY2ARUnUYjpoy1",
  "key3": "3J8FPEkarZ2kW2RPqvH7fp7JUha6AjuaPGjnvaYehi5P8CjsFWdqiKnbXmikqbVqiVShK1Dp6xq67BDbbwLWCTCZ",
  "key4": "2RGvwaW642VCm4oK1d54qjY8153MDoavD5suzReVCT5DVtUNGGXZBPU2KizFUKwJo6WCuV6iLUneR3b16T22PJEg",
  "key5": "5AYev4BFpjnRNqt6JGinoCnk1Vcc9BQEr4tzMULY24umZ1YFKaTnmPQin5V2YDAGp5oj3gCb5JLSQfAhB83ni8qG",
  "key6": "2PFrSn2Z6oqrEjRPvYpLaWrkdhNQXR3ekKDQVexoGHDRwDDJ2prF34GVHPAKx9fgEgwGDsFqVQb21RVi8gT3qUZN",
  "key7": "2agr2smaSjynAw19942WDFHHZxwhF2pJLtJXqzskvZiLvJxYERZXD7xfxsKN9NHHDd85KFscsAHs95XJVLGj2SmD",
  "key8": "2YdLLwwwNjPAgM8o2srU97jrW2nuWcFNDyYLBDw9mCK7HMtEppFG9zC5hFXkGwHkUWW2U57DxzTQy9ngxadD9bKJ",
  "key9": "3hbkMXrdZ16WKWS6xWkTrWwTs4nF29sgGuPHeWukKXG6r5DjJX6Edni4SrPCompdFTRiXoMpFdH2cK68xKFC8q36",
  "key10": "nbAVhagqR6x1EXGeFVpBpfrszXJ615Lsusf3n3feHAfw75d1ycpVEvDLrEuk2PRXGoLxm2swiDVow1edRUog5ui",
  "key11": "3UnYF9T7KTBjqh3QRirxGHGf6DQxgVKXpATsZAbRSFL6JGiL3pCEC3nuuv3AhW6Mf44jpHdp2jfcQFhkqDFcB4Cb",
  "key12": "38ptWkEoE4sJEDHufgfntnrfnfTUrnPz7nx82xWUg4ougUD4dmqcnKsfKNGUy27a83bbG6ufu7LPNKvrgSfAPSBq",
  "key13": "4vzMGsCtHsbwQVATQ9P4M8nL364nHc6qG21dYmz37sqeA4tnLR1jXyagH8pbYMpsubDtY5euXEY3nHsLgVsHxqZ7",
  "key14": "4FtbmyyvhMFR3jjP2gFnH1tiSQnJ67SpQaXKAV3A2tAztdfvh34UPCBMRyj3rhQvRFy3djvX1mp3z2Sa1ReBpyv5",
  "key15": "2zkMxgPmH4MxBwkqSA9NC3j7hTvzecxSsGMAjFZVMDbw4Wfwt2zisKLxvNvfP8ETqpxfUMeWatjFBt1VyPaAKvnc",
  "key16": "7UsFKr7NN5vEymruWLcaFcryxXuQkpiyRUKkin2hQTHWVfWhBZxKmXbesaCrQAViV8bwHr45jQYihUh8PdEggu3",
  "key17": "eHMFQLGPAWQyPTHsasBd7wCaTt63XnDBiLrMVywDiiyRhFefgsTvPVja8tgkv7Wc7GnW4BkLde7PAtE9kesEHy3",
  "key18": "SfwNsbwNzcz9DywKC1KamZrT2G6cywxTkatyAGLkQVdAprNs5KQxRs6MvFpmsg8XQsDxovzbymEFqudvi2evE9f",
  "key19": "34s3uJ4BiFHcrVQq6bYnbEFsSnBxPWQCAZ8vVqCPa5KYVBgVLAC7YjjYfN4DHXarCdkmz7YCzpveZxLSDyYH3TQs",
  "key20": "5vtJajKWZHZXbVMQ3pXcGQCEQuZEkpqRnQioVLvbQDr4pAgMiFqbE7HouaX42CW1ZgY61YBJdgEe2vr82oHQT4P3",
  "key21": "T1DWMgphMymokKX27juNL3xNQwodG4pHkrRBsYtnZ4zqngHG3YUY7yN1PPqET6FXB8hBZXbkPCDyFxQ6kwDLSNV",
  "key22": "5vvuzjq8UzkGqD5Fi8svCBHzsScmVviitjW3gWT5Re4qfPP5ucDvTdkPaWBQqCwmAKhXep9K6EiaPNRU6Vk9VRj9",
  "key23": "5Q5CUnrfL2DYZqML5s1H5ERjZiHBYSAJVy1Yiq3dqyLYXLey1fQ6rQRJy35pQBP13jnTkG7jASSZ6R3wDsPU55AM",
  "key24": "4ebfAemSjEMcyPTg56UzKm7X1n7ifEVfuqKzqK5EiGDeER7YDhwggCc72ySmQA7mhkqqf2cwrKQBRiHKRtoKUf2x",
  "key25": "2CDg7ECnqNfteuTh344f9fRc2wzFsWAEoWWptEg89d3auRQiXcYBxkNwRXpDA9BofBCXMBQbg5ob76Dk8YehQiF9",
  "key26": "2gS5GRbgSBAkf3CLvXNt6XepvEVzbs2gwndMaJY6YWzWTfwFQ9m9coZhjmKsrRdx1ujZkEyvgh2CV6ktXkf4PFcX",
  "key27": "5pqttvqRmWcRrjvfEFcCYEiXZbq52mDLDhePmvV9s4eu5KpkBFy4i5HPTnDvsAt4PHKgFZZzVVmyN2nBUS2RVLWa",
  "key28": "49HGoZf2CTDN5o15nHg2qfgNt6nMervT6rR9nc2wzUe6x4Y6DpK3Vetisf1h97haQydghT4nY56imzYR5xp4UcHT",
  "key29": "3HETLCxRWh15KEGnGh1ufKheZXoB2V6oTyW5bVDtoPD4CJbMF9Pqe3QfUoeJhJqUB5Ee3TDjnjSTdGm6AijDifNq",
  "key30": "3SxDP6rNbw7VmfBVwbQ1p4nrdM7DwfPKKQUAgMix648ia8RYEkhD4WzXt6E9dtxtqgSHUwzxeMHE13k8aqgRaXEa",
  "key31": "67UTsvJaepm6vgRJrrry8hssA3rr1TXQpMmo72SgAc2UC5VENzHaUmdrzmAoRLYt3q6KBdwTogtRrYJR8Kq1HQXf",
  "key32": "4fvDZUKULqkzi2Tc5Dt72QFURvpVBgxzdCQqbz85JTcyK9ZCyhmCkLtKDHxnrQkzmQbBZe7Gsjk2kTEzJUDFFeS4",
  "key33": "2NNswgXDMX1ZDg7JAv2RbixhrWtNQGsKxvW7S8z4YdvN9rQt9W6JHRFCcwGhzLi83KiJi3RhSJ8i1vH7auPGYTWC",
  "key34": "4icLMSqGp6sXXne6VxHGAzMzPiNm7e6WWjh9xxy478Y9q4cBcxBSLiHh22nXVsTCAyDSDpnZnMg8gjXJLhL8abq7",
  "key35": "y6y2PLfB6u4gVLwmJcWmtdq2bhpbzTPzALwRRmHC3fCT48ZXUhtyaSeXFf6QfvDphJTf9aNSdS7dZjB7akGxthm",
  "key36": "5jBtJgPU8u2BDT6xPyBvJxvYvoTjkQNWZgGuuEwETmd1TNJrG2WECYd32CnMjvcNaETFuG7WdgA2MzUSxdcqvfx2",
  "key37": "3VnxV7gkLemmgdhx3SbQcKcCZVxFVjDzdkHu7eed7o5xkHFLosnXTebxMDpftjvE1tran4JsPxbpdg3u4R66fjeA",
  "key38": "3ACdb4ETErSGQyG7RiuGy1bWqeR5vh4gRNKhMFsc9DCEbPvdwCJEJYdigkF8a5ta7yfeybir1wFpCrGqN4L1DLou",
  "key39": "44A1krMmhrFnW7kzgFhNsXEGMMZS2Qrz7ZoDfvqnTEjVrt8YiJhy8daeqY2UQ86Syh89Lrc9vBQ1At5N4uxKWWTS",
  "key40": "3HZGqgiaujfKwuinXfRKN7q3J84pwfsPteqRzRctKvV67xcba8RHcoj81aaC1DSjTjM4irGegT46xVDq7UkN56J3",
  "key41": "2AkVMzBSMcpSynEUhbcRoF3XixvVkTsr7Uu7hSwoPAVHJFz9sdjFtGHPFihBm9F24AxUZQRsRSfzC5hBhZcDFu8N",
  "key42": "5MSK4Q4G8viwS9xbKUcmnuCDMQBW5bENwNEnJ8gCmW9JHPH9YAdpAnd4VYi9y38JDLKJCwuYnabLew6D5dSGmr8G"
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
