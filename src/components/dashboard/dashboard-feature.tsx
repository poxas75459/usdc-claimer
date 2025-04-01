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
    "5DyvG63pMGYgPKjxSr5SZF7rxCJjT4Q5dmUXH1hX6TQV1JVxCoN5H3mC8y9K9trDSbrR3rAJqGibgvgnu84M7bUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TUrjAxy4RPJM7uwvysLVKxVyVEo6gRnim9j9AZpKywFA79dAVNmqYf5KYqA7QYxgAoQfPrcLQScSLZ3sK39yR3s",
  "key1": "tAbB8ZbrAU4gGMJGqaGXv6kk4c8nX7a6srrJW6WCLWwFRKNiwbyhueB1YZoZsgCym3wT4mjK3n2xRXamGTZ3k16",
  "key2": "6v4wcbvswiRKtBL25WdW7R1XGrEpuGbpaAmVbJrVCALrzsFFjxN1MxUb6ddkYEk7z1TAzQ2ZAMKeUyXGk64CebM",
  "key3": "2dQgh5jC2N5MbEpxGHjKzLRSRibA7vYeCNsEuYRS7GVSLtMYkf5oipp45F4LDM1e4u1jWYbuyZackPj89RZ3DX22",
  "key4": "5qVrmCDNoNj6W9LkGBxm8qe3gJzeHhVYtQW7WxegzJAhXfdhujsJ2KhJWzKep5Nrhrac4FfYq9RLawgzez725k43",
  "key5": "3B1KXHw9SE4wWbhSMF7D88bCQGATshH5KdKH6d4ExbC6y7WRwTTyAAdRytfh9KKob48FjecqnDaWN87BsCMioa9r",
  "key6": "247cd6ozJYmv7ju3ucU3T5BGcq8tjCqrKM5xEbyFrCAx3SdaXpFgJ87uDoJq2fbT5wA81kPe2xiTiNbk6SHswPXC",
  "key7": "4acVwenvwdrJERFi7qjZBmLSDQXYgb61ZmC9zTZ9NDH4nvwfc72Z193eYEDZ2TTvamZuoatLn6mFewNKmRvUwa81",
  "key8": "33kcLoWxnLitV4CT9P2rZjpKK6iY5jk6uFyj4NtvvhjxesKAs9TbcH5w4vE2LEEFLR9iq4Yb5cZUnFmxKy1Nf4YW",
  "key9": "5byB1boW6xzuGY1UnBLru64VA1PVct5RX1dDmM5wJFTpY3sVfzsN8YJPCWkfzbFCjqKkv39aAnwUv7vL39Xz6SrN",
  "key10": "33Aa4YQKNhdDm21Lg1H62Acgg2xQq5DC4DZ9BBSKA4xNpLVYkcAke8GpyursHHEoCFtt3x4kU8WZLpE6arcC1yhL",
  "key11": "4dozsB59Fz3DsCBsHs5C7UhoD8SFgG4h5taz5djGF5rapWBThZCiKS3hwJjBxAhsV6pNQZov1jEZJxkWPAAQoitT",
  "key12": "4NhUgzH3bYjhH7uEnwXwpz8YxsLMPsaKghP7cfMCVEiqnVNgPgARk9peU5rHcP7FWjrMSx5vTPAqyZZpU4MLq4e4",
  "key13": "429muSQbyZhBb54SZ8pSSbkkBjhhnyKNQQsyhDjunfsLPx1GRcfVdAEieh3hT4sRHcE2yJvd5S5UDymQJsjLhctV",
  "key14": "o43enpUJB23a94heQwo1XJ8uDKPqzK4xqFpAkxGXLKxKKNhBEZB87cW4SnAkMk8pbDP4ik4vp4SBPcc4LZvoMti",
  "key15": "4wu5aNWfmC81UNq3Subtsk3SadXWJSQzRBUnheJf3AUAn9CtbeGYEoGoRC3hh8CRZjzw99PXUngFuzNvmPWjeirN",
  "key16": "orwTYPS3bDTQrdW6cvj6BcrbZ1NGaP89bunFyEy9DfD2VZ8RqapZWGvVhB6Tf3xKKXyUnWZDqFqwzh7xptpjapW",
  "key17": "4pLRUNStaTMxCV5fKUZ75hmcHxe9yVVyuTVffNBKLxA89CfWt6GJzJ5dkFxqt9JD5RCACnGZv6uAAhnEenYd2kAq",
  "key18": "63KT7JY9GiHMJ17SnLu3uv8wb7qom6QwvurMZdsVCZoqHDKHcpBR9cq61AYVhmddtHER9ikW7K8Vpr93duD8xWN1",
  "key19": "DAcc6P4Q3RP9Dn6kaDEz8uvCExEDTVNNYJondz7a73tCVEZypY3ecCjrjq4c4MrPvp8or1R42QR4sWyFCBivo8W",
  "key20": "2WEcRtsUiD3WQZZiYoxJPoJ2M8qZLYsdLu9xijQLKWaAXUmMdhbxtgWLFaN3xpFHR7LKE1UU5WG41YbGty1HERSz",
  "key21": "Lsf4Gxkqf5V4CazP1d3uR9y4reLft4L93rvuxm4r1cpx6reom25mXrnh7JTFHWKKfVRjNCkieJhK5Nb5mWwBEuj",
  "key22": "39aj3WHhHjS126X9c6dSXBUW7gkuHyFZ18VuGnEbYhaT4hnm4QX1bNNTNo2RoTTArHipyYfC1vgfBPKFNePZ9XSG",
  "key23": "3KvKhV2DkRJWgBCizHrZeN2RXJe3WJ3DApJmuMGbkpA8pCoZCRo4Z8yPVNpQgydAK66iRyy1fPMr8bALSewuA8TL",
  "key24": "rZShmtLe2WzQfi1TB6qvtYYdbV1dU1on7FaLMcXpW6U4T9vhG7YGxWvn4brDN35QpcseLgzz4zhNC8V4BETNndP",
  "key25": "vCowEnnBZZ7MCj7Yr2H6g27Q42dMEjhg8GKzNvkHXWRTeyBT5VP2HnXLD9R3SKne565p3HwTCPWbafhe2qhDMhJ",
  "key26": "3imk8ywgUpaLedwUcgtpp6ZRtbCEksF2VUsidrUCis9N31X5aPUEKFgYs2E2CZFJFZvsKbfjHBsLCQy6UxcWKQgz",
  "key27": "4Wv85odCwkwC3rYbYtnpG48jBF4QZSYyiPomCoCa2KT8adJKaSH8k6R1jRqSwh7DFsiFMWi9J6DizHgA8DHDgbyH",
  "key28": "362DwTXB3ptz5FEue6G3b82u7V6kJ4huxr6Efs28Ywzux8MPqMm5aEi9kCKZcZgEanXBt57XD4WB7sPkrhoY9wXb",
  "key29": "2mLQnHmwzK9WU8MeYTnuvYf1WjKek4eTAa2qjiMwAaPxBxEhY5eNr2ZRcMq44UnLR4dxdWkSXY3at3EX3DzpfgbC",
  "key30": "3cd9BBV8AxpGQfTe5nFpm8ahc8S7Ur34GtoDuYBUBuT8bzQxvVorrz4KMSw2wZvoMoPHN6Aan6xTgHnyxHS4rQdm",
  "key31": "3EA5r9xmyACc5xYd574xQrptvMRfZkQiGr3ZNvto4xLQQUfwuzj19p67bBsePBVBkSG4McQGmvusMbnFsJqoygkn",
  "key32": "3tDovsfDJW5ESL6oJubxYdTKU1RbyT3kxdqx6AReZcmo15sBpiiin3rPs9dC96on9RFi3RgcBRdUicbkmEicH51W",
  "key33": "5mNzxiZy5qFoyUPXbsqJfwKFaUQVL7bHmMP63qoZBRoGEzZWTfqPmcfNnfBMnZL64Lzf3oiShQbfxvpU7ZCWHQXe",
  "key34": "5zcsfU6S9MVZSC5HZ5yHcgGPk57ynMvyuyCx6XtU2CnFBPeiwkEAju1mNQJs8TNWziFYfEbaQxXdKVY5MS5ppR7V",
  "key35": "4tborQoh1m2HEH3V7fwVB5Znq2tNuXXUtbgC9a4A9uhyGKAyWT5fZWQFbywuhicQeQ5D6dx2XU1vs5hdzeggZnjv",
  "key36": "2QG5qwLDFt9Y4H7nR6yfkYZTqLfzP8eNDrmg7AhdNS9trTk4pSFCtcPH7BkwUqHXD7VnNBntrRhY7ojCVDYs11xc",
  "key37": "cADoxd9WyWfsfzDLbtR1x1TjEHDzT9423PqeNpHJ7vnVgKefqGS5rA5csvhGeFJ9AMu1d9d6Lp6NYzViApzQPsv",
  "key38": "3p5hG9bKG1d6yzSgAdiBFLMq8q7rSMY65SqVV5BC9v4yFiebd1GG8a16DZ2Byu5Xb9Eqm9Ev5WwEpcnT5VVmForu",
  "key39": "wXbx8h8FUFHqwuyFEpto18cwZwKrM5w4BKMXesnq8hNSQpP9kFWAP3tkPVjkrScbbyqn7U616uknSaeDeqm3bdn",
  "key40": "4LAkXiJ7z98ZkoHP1to1SXk1zLGS1tE5g1m6h9eBCrd3RARqY9Jexs2zNgTZPsyprzK2wxdYHje4jHGNDeHkdL31",
  "key41": "5Qouv8VSs9dtnwMVFrLpzcNwWVQqQDnoUjq7J4UGF3jf46rJwxJKgSz91tH5niYTgKRQcTbBARKajsB7jinj1Ut4",
  "key42": "VXxuBH75V7rCRvALkMruBjMsk8jiuT2am41WG7tWG2w22semDH32nxj3giR9b4sLAQEqukrcwXAL6vTAA85pvHZ",
  "key43": "4JEgFxx4R74CEm2dr2K8R5TT7hTRBxTmHofPxjanbMRqfrs6AUny27cv29fBvDrawwdK8w4UFh8tQegwdLNNw9vR",
  "key44": "Q1ZciJuWZXMAJAjFAanxxmyLfF7Lz4fGcTFynusEAiW7PuHF4dGRs6kduStuVSEhu9Pgp6xiTG73oWsD5tA5o6Z",
  "key45": "3b5Fup8qX29QZKeYFx7Peezxcp63v258rt9xYvyXRCTxMJxKUpDwQcjZWknx3aGT4jtr18CDFnmZcuuKUkicjbHW",
  "key46": "29dB73dVPeFBykkDuujs4PpXcGEH1d5U2YNFQ8pQ6TEnpG44eZMP4dJA4YcLS6sbMQpD3sZNE6MNbh6dscub4vFP",
  "key47": "4zkdSPB9B3ttftkE42M1JuwVXnw1xPkrPvBv1aXDZr8sUEo5HhBAH2yJrSxTbMECmVAqeTi5P7CywLHRg8G6MF2m",
  "key48": "PyJa9bVVpcq1A11rrUg8aEaf2g5KVjjDYxrHzTs72nqYtHq5iTnD3gBi3t4G5TZGYYziuMPsWBhpaVU5woXyTgo"
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
