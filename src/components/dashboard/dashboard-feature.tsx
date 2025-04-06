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
    "3wabYGWK4sN4UjaFMcEy83TeY4eKXHKBWUHH7LoVUCb9sc7Xckg3wCttya6D72B3iCNwEcHb83uyzNXZeq2S9nZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tUgAGWisWckrsG7gm8mg4dqvK6K9Vb25gTewLk8Q9Jv49SvrJKJDyHa1n6Nn8H8wjtXXsMgh1gXT5t7Fs3JDqvW",
  "key1": "5RJnomKgDpibVgJ4T5yYw3rDdd2kGYjKerRfxBii5rs7Dze2yr5BLCrzEDkVFa8DEumGqvkbnakkTR51XktCY2vf",
  "key2": "UbLYs3NrWpc8DqcFQGNGeHRfQtCFS9BRJxgjdShZXa7h7kXn6Mwbb2qXkdDQMzgxZfbxfWmwX844M7WMY4WGorX",
  "key3": "4k76STMrsuU7TCwPgwWSSfTV5zdfLFtnk7pYK69q8wagqikEyehmhSYALpiHF6ktKDT4rGiP9HMvaeFfYtmvazzX",
  "key4": "33BtkrDQbuuF2DzzbTtjauSExrRasg42bLwVCjs4eP7B16Ju8vTWiMW7rGDJ2JEz9PXMHSXMNU5mrwKnM5WbbpCd",
  "key5": "22942hfJsTqa1vUJ7HaF1UATcvmAccmc2gafMtKDDRCBiwTwMQgoen8F7mTYrZeQmC33zneYKsSs7TBADWo47PWj",
  "key6": "UdNu6NYWhQBaQTn8e6TMLbr59gqnfj3fxy2YrXCYJZiwDFUmjQQB3fsbKEPgSbZ19WrZQcpmkuFxBRAJctmY1GW",
  "key7": "64La9wtKraweLzKr6NfkYBzmCdtEWVSbRcd9WnYKNAZe9PGNxhE4LKcosRfdhh83aBBsZZbmkLoT3USZsu4LErsU",
  "key8": "3wVu99LHta9yhUdN98vQhuzZHRjASCxTnBANXSNfapxdSjzfAiGu9xBD6Njnd8Xsntx1bx334vbyn9hEMBEcq6QA",
  "key9": "szdADCHoNC7Vviu5CurHzzeR1AVKsVojmJX6CZuRvsA1oU8nyWTT3k3KeE86j2FjBQvKVUwuHSEUp7gn74nyB1h",
  "key10": "2nV3c7HCYFfeKjoJc8vedGkZs98VQUCU3Rjf82Zf636hMZZQaJJ84x6b8qY5DV1bVhpSeBSf93NhkQett5cwB5J5",
  "key11": "4kDK9xN6dMhRpmWsaToLctrtKBQrbPDQt9h5Q5op92ZBmL4hi6Y9h9BCfNnk27Yc2eStyJtcNEjaNQoofs4SgFwj",
  "key12": "43xFUMk4Kjafj2mJka6avzq8BaxBodewNWhtesfSrUWK8aKRv11NnKKzoQYPEiAXrANMugizkp5uNeg1VErwhC5J",
  "key13": "4hjNEE6nRXuLYWGu5uXEqXDVPbXpC6ft6XJdHcP2cz9WDy1fbS4AMXQ5wCAxwiyeMYKeX7nhVgyNqgjGAFTbyyZF",
  "key14": "UFspac2LVxE2sAVKbeW1uuxvH2BJ9BLuGnRon8TsjcQgwSKR69K6zjDRUbHTNKzHhYcWgup3W3CdAv48atyvj4J",
  "key15": "4kT8iMgf1Ub7dqcVBDKmG84LpA8dUj9NdDFradPhtr9TgwEQ8GwR68ZUNe8mPx2x5t5McGC8bihBwaePn8hm967q",
  "key16": "uYP8PLev7arfMx5Sh9SqLDagLPv3RTCHSaipW4iW2N87bqrLtUGa5oaPazPSqfr8wTacdnkqPc58HteZ2iRC9FE",
  "key17": "3awQqh2Ebi3ZSqo8JQJkyFvwiKqhmwafo1pNyQ6JgrtYSqCP1AJPHD56dqCWm7XVvYDbJsDcb4jt14e6z1JXaDpg",
  "key18": "21PyTspnLAR54bPqw6HC21U93Jzt2qtUS3HyfqnwSkWGxdmm8zLgZgZCGtMy5FGCMUnk33ze4D4kFwtVBYaxsSKu",
  "key19": "2saWL5mYas7pU78ifvtrbsxgoyVvmQodxJQiBcDt6wfhNqFtT2VSFuLeNp5xmZFbSynYjx18Gd4EiX3wZ1UHG5M",
  "key20": "422KxpXZXCq7PHq7eqFvn8CBXykDnN9vddN7BB2gpDes2VdMNBz4BdZzGcjEzXNcFiaJ8agsceWoJDhU2Lmxy9a9",
  "key21": "52kYAe5VgGLpBTm9AZ4xEAm6BxJ8bbwvzPJUhgdXpykHVWUe6w4ThsVp2DMDXHS3JYq9nmKrB2SNu97FUoHTAbW3",
  "key22": "5pFpp54FuYVRRZsyKAQTcFECwU6BTYZE5YmELxr9gGLx3YLX4tUjuvzG1eEfMgXGkAXQBSphmuUz3cor4fnMfd1X",
  "key23": "4GsFzZErX6qDQGrUv7uTKUgG9y4NKrcCSTbZdrwi5UMkognzSbfYC8v9msMjNyTC7cUkJcKwmPkHJXMLz1wqZViU",
  "key24": "6HqoXWFi2CHpm1SEwydgcnF7TaagMf61evGk46CwkmpajYS8KGfsE1SDvGBpZ1bz3di47g5xwwwZ9YnCD46X1UH",
  "key25": "3yr9prmJ5AQWEVAemzWcHwaNkZ6BNmxiumdj7zzQ8nuyBdD6ZAQKHxVk3qCbZuStX5dx8CU9rdCvtBf9j1AHaiYn",
  "key26": "4xDKX4PbcKvK8rw1jQzAvvk8nTrjfMJAU9kAg339LP5Bdtdzvjkt6H5N4ZPwBEmnJbsNAa29oJP9o7f2zjEMMH6W",
  "key27": "5yPjMQAz8uPuV6SiYSzxXrQFM3XUmKB4VRuJUC9iPuxHCwKEkXDYSnxqDqxUTiZx74CVdBfYJYRrWe64es172krh",
  "key28": "2Y16jTe3hdpsZcHFDPCse4RqrZYjSCYMMnuKG3NPsscgEKszageiKLyMBsLvc85zH8bb79E8bAyWb4PiAsqtUi2J",
  "key29": "4S7PdQMwzZu1Rs5jFNzScai1VL6LwpdddsYLLiiraKsH53c55XQpcrmnwbNoiAkGrNHynUTSXxgjDsLtTMFGZcTV",
  "key30": "4S7Z1rSMKh2j8RAC1kLJKTwva6PTke1KDwgCtrnDmebPRANfHKHqJai28B6xJBoQiMdKFzuvg6naRSbxH974nPEF",
  "key31": "63ERM7FXRaoRaUP4q3SCBgNdP9c86GHyNB5YYhqjAnhjsiKMBXHDGorc4stcMBmn4fMmWRmf3eB6EndH7DHch9WP",
  "key32": "5hvdMBJ2kB9igCbVafdZWBf4CpaVMbmCVytK3bf3mdqDvsPrvMEJ6AV6r18z8vWwDjHaVqbCsAn6LehzpqpXuvgv",
  "key33": "5rNUYm9QS8rsycqCSeMqyuZfqkbCaJLWyRsGQFcmR2mcaQhAVfu5DeLHtViLFEnZDvD1wHChRC7e22yzVkohRyyC",
  "key34": "5T8mnA5yLy8DmXSkt6j1742ExWohYYiCMKSPe1Gm3whQzPiAKbAvpkMZ7hCqCXefj9U251FxgU2j9Xpj2idBLsKQ",
  "key35": "5E1VedcdAsDb7a1mYCERKAXbteQYNXmgDjmsmeoTavA8KJKubNzyFceEhtfuZ33UotvKeCWEtVWPWXCSfWwtLH4m",
  "key36": "mQ9NyP8FpGpJ8gM5hxYStpgeFbu1dWjpRi4hYMoo612zRDGXmd4FGfnVxhg2AbfJaSRwYrRvzHrBSYw2K8ApnAy",
  "key37": "4GeKf5jKNeWckagp3L88FQiQRv1J27vAt4wYd1DaAYmemUiuxfyQXb5DGknPc5kyc9d5ueFDM1Tjcxy4pf11LWFV",
  "key38": "3sDwD7xixEKJR9yhiWNSonksm986JbbAyy3Phvr61PbaUMjbhMcta2T7JyK7HneFos7qn4fUsBzbL3JDAeAKPX5Q",
  "key39": "3VLdtbMVpSXhF3FVeJxWSYKrJp4c3fFM6VcbtdCVm6FGoFSD8ZJXFNL1yJKmzKr6cQ6Doznoj5WFVpjZgCVbw97S",
  "key40": "4ukvGiY8PsEhtMiBBnDEhiwwaQY93P5s2nvUF4eya13jcnJPYKRnuWuijYuzbxgGJ9Y55dpQowk8jGwjFAxJzwVw",
  "key41": "4G8XrGtHx8aTvuo8QXMhVizAJrHZB3X4cY5SBCEd7JmbPw7LszZAGfWMnr73a8VoGTFjnYSYtn4x9iXGjrY6Nrn6",
  "key42": "dexJnPR2VSuoCqFDxcYYmhDPeAn5HrgMpC9veZERGW8NePn5H5HqwdF84Tr98NoqouXraR2rKF2WhW2XS9Wc5ty",
  "key43": "66oBY6XEsb6YQ5g9wtaWJD2yThShfdFRSvbmUhLFRYLPir2cwiNWGs2GtJ7gNeYwY6Lj499ViFD5q7UZgLpbpxRe",
  "key44": "4Dieuqh1zJWkzCPsBY53oUWKq1f99bZv6vXggXFNNUvDTXJ2gFep3kiWJj2iEUrnz9b9uRea671nWuXbneCUGht2",
  "key45": "57KBE9EXLzG9LnsvV7z9M6L8pPQUaxmRJwzVBPbYmAvck7JXbPatH3WKrwTGWidB4EhHE6HC1qLQciLSMYiwh6iJ"
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
