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
    "4DK7FbbnFAPCszZv16TxVCnvWedvbRncoua6UG2F65YXvsLUidqQZmwAjhVhJv1z79fbp88yh5xRAzQA6Jbxkuy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NU8HsqgjNNXkD6Q5Xz6xq7twufKRSaVr4x6izx1j7MoWSid3fvSBEBxurnbtPmHDTUmZCqz3FKVp66hf3Pa5gFh",
  "key1": "2XxZvzFcJ32VZDJiQfdVhSVYnZn1A18mASoVTdBU8HG8fay9qLWEXCobGe1P5dDraS7dVMJzMptvTF9FUnNeKSow",
  "key2": "PNSqEEjLNzK5Bf3oaLzdoMYQp7zQUcZ5gtE1V5gTqBFYtxqEzyF5H5SyMbngRDidEVqSCKE1CVANdRSZVcpHfNC",
  "key3": "2ewWogcm5DS3R1sK5BxviWuEJXKxEK3XXNQ3uLHQTXFNNWzModVj3V5SPQv7XedQXuuR7FnK3XFqpBYum7UzD4g6",
  "key4": "262tyH3k9eaxh3byY1PyqujRWRbM1HBjD7BdPQqRE9xgwKJtdaz1BCdyoeyHdY7Z6WFn5Q68ovM6EBphfp2pbqNT",
  "key5": "3dwnkCFUXpbfEvRnux7dgNNfcVeCLhviACW3eEcradVk3Ds39BaSooxXqJj7cU5SrMDT4ujoH7cxrvMuSNnraW35",
  "key6": "2JTobXSrKS4AMTSGE5WyHx8sVFjcwUNtZUZWV7P3Jy2safHcQUgyGKz6TEmQTS1BJW2JzjGyu32j3RNZDS9jBZyE",
  "key7": "2obXAC9jLXsnGR6ahuxmzArBiTE1EeDRXADkNNaZVvv5FbP6zKvE8tutV9BLYGU5Zb9eS3ChnnyijwQfzsXQRKDL",
  "key8": "53k3XYVfwSj69iDTtPvnUSuG7ASbN4QoDVd3BmU7Nq7U5Ggzz6oWm53huWXpDP2Nn82qPFVmbHkbWK3cXnwUjE4H",
  "key9": "2KmU7otjexumkNFhDuSc6yE8264c1DTQtyH9b29iwiBDNrgvKdrHVAJGeNVFXqFbgkuBcYS425ypC9RjiQrKya11",
  "key10": "xU8C4kthqhajieennCdHhfTXFbb7PQvyQDov4e81uW2DporSNsjRF8CqKGxghPPrf3C55Tn8wQGGgqk87ZsPWfy",
  "key11": "3ZJE2at2Ax7JbqL5J5udxcbfzAFD2Rj3BsJEbM43F7VSQaiurLKyMkhtmE6F1ewnXS6KqAUxgp4KQ6fvy9aV3KuT",
  "key12": "An3iW9KnKJtwiS5dG1JPER5sFmGy5yY5k1o26CmEFGdZ7HrrCvi2QLmEZkB2NNTziu4RiLVmZ23K7uTpUjnVLE6",
  "key13": "3JBR5ecHyoBkdVbTokBoBXx6Uy7kK2L2jmHy366eacVP9Wd6QUCYLNU38KgeSZw2U4vbZv8LytZY4SpCXcP1QABC",
  "key14": "5BGLkhYvgNJ6zJ9NBRpzpjS7Vsi4VDwKDUCPeX65X7W58P6qVTNbSPMGEJJ1kMtSvJ4i9rbLEnw9GMJpWHgMDeJS",
  "key15": "2EVHmCQsgq64Xn8kW7c1qUVAuyYByJmk7odtZRvcaaeA3iT57iUdq4V2QNsSP71TT5ddDFmqS7othAY9K1jf8ubZ",
  "key16": "4d7r1np4vYqa21V44KJWVQkHL9PFYKUr3qHbA6J5S1SCf3i359SxyW3u9R7AmyjvPZtE6ACv2DEgGyCrUcoW6zuF",
  "key17": "8r5S7n1cDvj9ieB8oERN8TZBdH5wdRcwcVCmPHiZQW9SY8iyRVimMLt7hojEgHMis5YyuCGTWDUC6cpvfgWoBcZ",
  "key18": "36watKXML5MyCGftjEnMWrkwFwyToUePq7bwH37BnQDagiSjdhxhBJT8ZQgBAiJbCpQf4EucxuficqEa9aNsDPB6",
  "key19": "2yRYArz1rQQzgCReBnPFNnLQrU6iyV6jVCtAUwyV5Cuw93dz3MDeuxW2AhHAyA4iHe7tN12PwPqiMMNbMXRbAdK6",
  "key20": "5qeJq8U3SiYSqciG1EZGMf66qLt6mPucesQF1KeHVZMVnXfpjtSCvEp7uWw3HEnWEAUekrXwhzkHe9KsrPbm9WJb",
  "key21": "5NSXy8VxeXcgDcbptWJXn1iTbRbPuzGjii49C5MrtfJMVFaRHfKURLypq4wzRCjMMEyjHWCAgdLwLSb1pXBCU55q",
  "key22": "64vQsZ5X4NAwAL6JtdtKkYDdEzcGtVG7gWBx2NgWfgKC3RkyaH6d2xBPQ6tzjdtD1nXHuvtWvxPjud5CE5RBd4xR",
  "key23": "3SQvDCRzVXnNWjGAr1cyWqBXREzyFpzZgi71Vx8mBGQDag4CtsorYYZvjZtDQVwPRiA3xyRsix2prAKZmv6eCTK",
  "key24": "5q7Sr6EmDjE11xJbNR7B77aroCZzTav4jJeZboo36zeXWEw3sCbKBiSQrfm28YHzJzx9byvjnvGSmrxMW96KeXsN",
  "key25": "3R8nwHGm8ZC62xviBBQ6aTAhdZVKS2TuY4uEvYnpmyyVN89ew8bt4dogMuRCLLvowaBt4dRxuZKc54Tg8MZkAH9X",
  "key26": "5EQiRZVQp5QiupN7bhEcWuGBQfYrjoV1MqFKcbw2nzdZnTziJT6kMtvD6CrGyoNRdiWGMoLa2tQvzd5ERp1yfQ7T",
  "key27": "4bZjjimeDBFcZn574T1mQ37pC3ChDA5uWu9DYg9wMTCxNEyJGDpafJvfFQ4aNJC4rSM5LpRoAkSWDXRckD2BD6dW",
  "key28": "2mbWvPuPfeQsMzHLzxALkHKJ48cnmer96djKcSm8CUqsaX61MnV1Kne8GxdNh12zCMdh4Lg9v2LMMnVoFHsSCjC2",
  "key29": "4ikfSh4rDAWD92495r5YGcBhQurNVigZ8pTR3jDTXfVDKU42pa4DgoygzyJGt2XYxx4qvaSJeatxgX6dymvWg6Jc",
  "key30": "5QP8VE5DAM6mxXguY4Az8K4qTkuxHDHgz68Ece51DvYhgAg3KMrLJf6pxbcJHkzbgsCXPaB5wj1pLoKsGcbVNiGT",
  "key31": "4dmGCvd3kfwho4HdigBWFpqxpRh7ocUtYsUxPsHjnU3n8F8zYRKe6CuCHtNNJn2QZSmYKiP7B5RmDbPn2Qsfa3ey",
  "key32": "4raAuJDr3CXg7xx8AxonvtSaUZyyh7z4NRWcvk5bXsDuorzVnWBrkuu7xDeSJXfJZ2xM8AwhQqbjkqam1zR2xbLm",
  "key33": "5GyZ3gnN1rgofSbnFXv6xJSa9RgxoHw9fD59XQ1ijaktWwVTmZ13Xki5DT4Ko84N6jq8KaDAJbHqyYACC2aTqoiN",
  "key34": "3G6bS26A6HD5JbsNMtwQ2n15B85HY7cx9ogoyWoK6SdUfcwrLyrfxGiUqgSPub5cfjG8j1oRz3wpimqBL9GmmaAQ",
  "key35": "3EePcTitLmACEU7Gxi5wtn4uy589dPM6ZTnfexWfm2Q1FMAjUrLWXjArqcJMVx9R7goZ5QgKsCrvPBV82HfMJcQV",
  "key36": "3vDxtDRB64iGrAEvCTLWbuWKoC3PfYDAYiFsPAG9JW57S2nokcPBMFFe8kq1xbYGk1fVoYbnMmbAtAKR1sbK7ck2",
  "key37": "3CDKmCNsKjWogG6N2y9pypRvLF6xCCw6KfFuWJTAz54ffgoBuB3qcdNUSknkNw5GAMt2UFSQemuiU1gPHvvTMnEd",
  "key38": "2bpAFff2PepCcSYGFm6bMHWTzSHazp69saWSfR4mfyniAGWD6TuTZbAPz6S3NYBCTSHWd3yWeLD1Qr8tfwotLvye",
  "key39": "5ZCuRFqiZS9yteXxwn5YDvXzoE7QxAKexk94nSQfj9VsPLwvPsbbeynjBeM5bf4dHX7x7shXwYqyvC84HK7Gjrpn",
  "key40": "yDJVuNas54Ecc4Ma3MLVwbPqKRqoy5JZjc8z4581S1jSELXgqGg8EpEAg2xZ1zPa56LT6VyU5SQgTHfEDUdvhda",
  "key41": "ow5m5qt1GJMC1Ro38y5BJdYFp6VGCwRozxGNu5zepcZCRc4cabCzgDGTeWS4UC6V1y9ECUQ1vLkkXX2nLgRFt7M",
  "key42": "3F8DDqmt5XZ91d3put79PF9m83L2Mcgcpyms3WPDirzFU2xo1LtMMLKSg2XPo4M7q7NXYrMhJ1U2g81JNQMpLtv6",
  "key43": "56U3qbdCNT9aq8rbKs4YQpDGXCJvH5JD71JkPtUD9eRdz6dG91EVs2T7MCCxn4TU7Yf44BD2EuFkrUKCSRAv2dhS",
  "key44": "3RUBeoUH5uFgU7LnViZG533fqd8V812wyMPGAoiFfLLXjdb7vZv9ScRjQ7PvxZwLR4eSgjJXK9FX3conZiQZhbMT",
  "key45": "3RoCr2ux1oVDTMiSfEdcXMGVhXDGqymyyB8u62dZ9MW65DPahHfR81LwfpjKpME4EJh57gcU7VLAEEjKmQwVgziR"
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
