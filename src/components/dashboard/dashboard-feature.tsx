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
    "51w8Nrfc2P7VT7BRCur6bxvdES8UPjADKXKFc36CY5jKjgEFyiDXuSN2Fv5RVFK2nKbhg2MCAHP5e8WYdtoULZbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bgR8oydxPQzaJd6RvbJ1kJNtynhEFa3wXkEU6cQnUthVNk9mAyqzYG9Py3aPJRRYGHxvKjGnnLt8T5pQfEubTgx",
  "key1": "YmcUqJhCLx7RVY1rxB26uc7ne8VkWJEDV1E8sCY6FpRQCvTenipcArfiYtss3uiRE1JUVunap7AK152hRZnDLYF",
  "key2": "24hwFSqD3Crv8k6YhKpngRaY5aK5BqbvqzLJTBqmAj9gfEH8J1nVsM2CWCWQA7xtP4W6JdLSsZCA2Ts87Yt1uEsh",
  "key3": "A1fCkTGj9nr41jMMvY2h7wDsY3umr7gg54GmUTdDxGBcN2x2eob2sinR27neX9jxgkpnuhDznktRh2JCmws3vYT",
  "key4": "2GcnEDiL7K4uUx5BEAP83BtKJdBbPpHYrzSzk6Uge145xXJCjhyNY6eddJceGd8tNx7hQxAhkk5tigwHWFf64kxE",
  "key5": "JYc8CQR3Yo57mnhKmTbDzNRYkxEKzhErSHCWxP3JX2ePpAfbYRAWZHddXjf25yR3sK2bP9Wjc3Rtsq7TEUxksc8",
  "key6": "5RGpk6qiXpnFVzVms3hnKyKDBkvsCijXsA4REmmDWd2Qc3mb5iHecpfGGv8NRFoE6MvkxCF1u1iMa4v5SxWH6yB2",
  "key7": "58W7ZM7MSgT4i4J2CSWP5Q5yXfqPYPJoA94NjvT3tFqNq79azig9qwYKu194TEMBgZ72DtM928PZLCcgVshAwTfF",
  "key8": "2ye2kDS9mhJNeiANCUsT2Zq9F3ftHb7MvVPHgNEpN7e6FJmNxbsdSoaBazzM1vvmTvc614qRxcYeePuigHPhXSe",
  "key9": "4Rzhw4koHq53RUpxi9EEpALLSKx36X2yLKGejUoxoD4QysFHKVEAKVRDjTa51A2B522Jp6uq5rkf8kTQUwbwdM3b",
  "key10": "5VFQYZx2ZpPpDuaT7qsnaQpyJmoq6ZdqtuYPwpp9NHgFJ4oJBZFh2ncEsvehsnDZvRSwVchEZovi53oAgT6iNR6B",
  "key11": "3iEo6JtvLouZgoPRPpyLAe2dvhpwa8E1cWgo4rrxJ9TKeFzKdDipttKTQMmYc5kWgTeChvfguUAkeXaPjpXywhPH",
  "key12": "Uh5FumfETGomsPaKZa9BptiE3YbHBaCK17JzsJdgKijor2We86ZzwCd715mSBQUEip5Vxp2m2pLf8b1pHXf32iE",
  "key13": "35SiazpsjxW1jmuGhLCxbwCQitfXAKKqrPxqATAjfPsfz8ADoHMZWk2uBCwd3rDdGJEEYoHhx37DVMtzqqqpEKyn",
  "key14": "4yMP1krBL6rufQe5gNjjpWJ5cp9jJYN2mEGu5k9QMvJneZHvXap9H4ipamSH3hqyh8LfMjmTszW25gf8AZ73gDMf",
  "key15": "2S5LZtz4BA59DYt1TB5W7pGtjbuXqDqwg7LjJYGHvpoPBF3U6pL68zTAKGsuEQPhzPKHR2KFxNYji6QM5oPeecc4",
  "key16": "wYM2P5zBzHBjQWFyHefFEiCmwtG6xH4NisfBe2togRjunJvewoLnjMuVLpSGvFyvKNrLk8qWJ3MF3avWt68n32J",
  "key17": "5XmTd53uuqAbyRZnZJcDCFy1T3GtpvsCFEnvVRGP49EApyzwgAvPqicKEC6URpR8jTBtxConVQ5RLdD2Q8Rk5hKh",
  "key18": "5PtPgxgWATfiezHpQHwQgA4xbbi2EMVmtPdR3442jbUUjcsVgPqDXgwsUuvdhGnJEsQWzKZde2Q8QsQr4apTWFe3",
  "key19": "5ghEgCUErBEtYZqxogFGEjb4JfhgMHn3zYGdkiiiLfMKCYyiBuZ2ZZyd3pYvcppTtHHnhTv16ros8r2YD7biqPcQ",
  "key20": "TBy8mJp5L1hVsB5F9tRsXcwE6VdhAeYQDj4WnHw26ZjPTdKXvV59gWx79n8EfFXtzaxzchDYxKiroqsxWKr9Hwd",
  "key21": "55RUmKUHiinDsHu9jJYZvu31QaNJAp1jsZjHAASkyMLTJfYcM1oRvs7N3Yboe5Feus3mmF5zkvYVCFvfxLCvMpvx",
  "key22": "4KgacEXzLmg1VDVvkm2gJVx2GraMumF118iMQVHEc2Qr13tqGpggM3fuFbajaSCwDKZwTLPtNBwuXnhp6eirQdSD",
  "key23": "4vYU9NBS4HMhsn6Mii1o1vA5YAXswYmpYoJLRbS3T5i9xcSVEvUt1EXMzyBb8rMEkx6YXogmnwnHQX9ZTEydxBWT",
  "key24": "3UZ1C8qGHeXcCDhhtBS7QJyaPZNDqGjEEHrMKDZDRFRwNfeNMAqRps5Cp3DULRj6DBj378aVE8GBSubVge2RTKx2",
  "key25": "62kgieHJ9PExxniPJHcL5gHdsNxUJj6nJfCzm87AYQsm2W7Ghz6Ag5T38GexkRT9RR4Mf4k4wxiuJTrDcZvWiTZ1",
  "key26": "4M7QK9H699Dk92SZzCpxUVj4ty7kuDceb5G1TycaXUsBwKbUGLUGdMAzwxfjLP7nkCEUxJKARJM3rAgJxCfgofjK",
  "key27": "3nHdtwDSvngNeHSp1mzgSz4gycxC3neEmeUNCcFB2stj66VNWEBKLJAckqVzF7N8Z9VjfsqaZa6eZbqJD2NoKqb3",
  "key28": "5JDf5twpb11BNsVLZow7ZGVTCB2WFhZa8XQapi1cQ6V83ByaqaFRdcDGWUumzdhWhQPnSccTEgMzsvG9N7DKtEvT",
  "key29": "4L83taeXufVATzAn5BjcLqMFAnRNhbhfFuPqsaSxXL7FYwYmFBHw992MJyY3nAJApKfMxMgTmbJN9oi1vFicTVj3",
  "key30": "55kJsPBSzwpUHWVVmkLFDhPtz3ov8Y7BHNPZKbYkYPypu8FejEJEAvGddLLRonngLw11coUrwPbtJsn1QeCZpNGD",
  "key31": "126kqWQ5uAfh2FYdL8qvvUk2GrU4WL3TKZ2KtBpGkq3ryYTVZ2xJFuvNc8itn1DS64KMuF5LUeynt8KVxy3ULfxm",
  "key32": "PiRg2nKSLwCjDobB9XXmH6d2Z4JsijNfhR18pvfboMG98sTLQqwrs3UtJnE6LJDNHDdkwRrTSKnMZhnexe1iYNi",
  "key33": "R8TRiLrNbVRqfnKHhfj6iSL9nPg5KsD5fQh1oAnAcp58CAfupR3J3rrbY7LyihiCRtdxtyTvzSqepGEJhN549rF",
  "key34": "3bJBuaB79yhiUgVsKFwoTuX3EPdLrNBzEc3S2FGnf7wF3WgCQxSZAQK1o2f7YNAYksef96H4fnmjTgYtQTjQHodR",
  "key35": "33H2qUHk3n5UAWXXd4RvyeUmD3vTdatNavwjhrWvnzpxbaQoRGgGRuatrAypbTpK3sdXu4xBV7a7XKp7Hc42Z4wW",
  "key36": "2JTtgynNSrwSPp4aKaabUKNP4Q2tmjjXQrhmsjpwqjsFCmAoKMfquLSpswTXx5pZUcr4dz5W5fN5PDY4Gg9sUVSB",
  "key37": "4LeStEGXgkTHGBPMPptURqSPpsjyb2tDPqPNyi1CytqFzdps8EZ13rE2SbTnjAPaLDYi8inS9fjnhg5FAHuXxgvM",
  "key38": "3CK8xrGpVFz2qirC3CAeoNMgvxpPtw9p3txnWm3DybZpcHyQengxetqzaq53KbpHjX2fSsAxcEsfhzr2m1mLeT9p",
  "key39": "2LBKqrZKSkzGiH1WobSRh7uSQEjmWVbaNANHgQeJBY5zfF9hVyZLpgyrc54ssR4obBJdhKUtvE4X9edPYUgqXTWB",
  "key40": "2BrRP4WyaUDF3Tng9WkVMaaBSLb5yQ2L1qq8RUzMY6vMKBz78D6J4eg8D1eB5FyGSZ23DFKqfuAWsb4iTMSDr969",
  "key41": "5RJHCuSPGD6fvSwdVvU7jKanEbUeWvpiegVnZryZdu5YB1Z9Gqv7dffG856uaAwQhDyJr13G3KpLpCZNrsbysrWD",
  "key42": "4AoqyV3GQb4a6J3EpruQQAnvYfLUGh2q8X4nCgfxsiPqgWSuZZsnLB7PRULxRp5sk7kWKxHib4wkUPDHzvJGJ1GQ",
  "key43": "xWhG3YrP2oefwFhZhJdAUC4STt1UHetgdMnKQCHXV6dAQPic5rwrH54YydNodfjxuC3A9jc2raAbkmopuKrkbC9",
  "key44": "J7rBMVwvAj5hdydYisSAdFWQXar35x5dECc5uHnNWf54iqpcRWqK1DVHYsGjs844UpSFUeMntUQ6EizbENzTwaV",
  "key45": "3FnS5TzKpBLi7UgAByPUQ27nVnj61CssJ1WzGBywvKgmYwCZC3tiJ2TUfRiTFjKvTbXA7qK7bvooaSjrJ1hPhkq5",
  "key46": "3qJxUYdauS1CF64pMamWXtyqkn2zuZH2vnscCn6zkRunmSC8XvVJ6yaxNVdGUQBbepHegp676wwsFwjwrWZsrRY3"
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
