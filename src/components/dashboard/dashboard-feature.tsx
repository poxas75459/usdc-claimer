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
    "2aoReJMNBBFYV6EwqocLicHzdMVYTc3kCj6p2rKJjecnasVsFd37KSa2mXo7cGgRsdswULXXNz5QbCTWvaKZxQwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pa5w4WHxgwGddNXM3QH1A3j7nGweJjKBJ3RnALyaHVSim8kkZKJkvAp3NrXPe99DSiSGrUPq6H57wpEm8ErABPm",
  "key1": "35qwG2c4wu1uZfPbBBtiSgAGzP31QBuJsB5eRfiR7oDmbi1mqRENdn3ekyCCgiJFbJzeVD6U1PQqhsHiVzztQETa",
  "key2": "2dHXqP99sQ1NLtFvoJfEFU4RsVwQ6qUnnAomKvpb47g9C3K61FF1t5g5UFiq9fz8U2k1i48roTBzQ2ef51GSKrcF",
  "key3": "ipKJfWwFATu7y5RzFxCAeN4tFVJzrwmX5zM17Td2afPVXhnHwJ1XQvg7Wo4czkvxZMdARAMppPh8jDtwB5xytLB",
  "key4": "Bh7rrpW79taearAjFdKdQ7HDPHZBg8nZSVURbnLjzSH2h4PnkFWtWnYDmtVfZdqDvfaDe4xCDo7c3YFhM32m9cg",
  "key5": "3HVWhMPwdbCAYChPHAHRahBgWGiGpYq7tVau5Ytn2iiTUppfB9cmK2ed3YDEnmX4PgdHuLgqbqunspqHH9y3beB3",
  "key6": "5T46WkjP6DbgCsEZUaAvBR2Ffj1VZkV9SH1r8qzZWL9h722dXb8rw4YCuaMfj5jtvDRkDLscWs2G4H3fstsJvErx",
  "key7": "4yxpRoaSLNqkX9aLsnqUmxCScmK3GrKCKNipskTTogQRB6CPVh96NjH5TmYHrnQA2dbHbDRdYevuxCUQQKqcNF89",
  "key8": "2VeBkNyHEQhstvqCFBwjtgPai8jgR3y1szG5n5WAkQB2tkx7PhSRXA6imHLxnqk7UgeR9eUZ7h2TRPBa4dgwnyF4",
  "key9": "2NZ5g5Juctw9baifVLVXEhrJCkQa1ceNp3ccefK7nHUBwuxvS1ipcwoBhhmhw5c1FPBkfDf7PNBogM5mRDuxs7YD",
  "key10": "2LifkbESms8pGFxfeaBTjPbE9nVKhxQJFVzqSc7Scu3iCbNGAGBFjm5pXgu4kkzK8N5Ne8DDFpZTd1ktGT8yQpBh",
  "key11": "2B4xiB7ZANHCDKNjBHEqmXYYTtF6oNn22L5QQNbu1aHCPKas9tAnP2woXZbqebdup8WrkfJ8GVi4HLietUPa4LEh",
  "key12": "4KNuJUH33kCawiBBvYdQ5zutpzfVpWmUhAXSGk6i5qwtUeaV1Ddo8icAKZ2RZReqd1bFcU69MnHFq4eifxAuGSpR",
  "key13": "5oSpUqztprar9uFuay5fcPrivbZfQBjTjLEk2kgDrfWrXzdcjbe3BFrnVSBKXQJpYntM9R1oV2MVnJ9jKnbS71kF",
  "key14": "5eyMCr8aEbiVZRWynBvHRzn13H59debAgDeZHDsC1AoeQzTot45PzXdpQ2uT7TBJ5dqfUTA1iY6mV9kzPNoXdGaf",
  "key15": "4viJDoftrjLC16QXvaxUitPpeh469kbA2JtvkTvw3vW9PUTGLwhnMifTXq9rtaXombEwEfag6Fr5xkWhxab7L6py",
  "key16": "21kcR7tpbmawS3JtqfqjgRn172zn2fsJmQSEPfx221UgaoZcFaTzzQgZJY8EMT7zmXWFfspN69Azo7MthWNLwsCy",
  "key17": "3rtGfpvsBoLyfXK2bafKTSysvRAyNbTP1qbYpSW6TE9ekJdqM7wma6eAyD5k6Cfo6iHQKeSU2mLf6p7BFfsTafy3",
  "key18": "4xJvKfjKzi5rGFrutSbQHtGUcAGx3mkZKdGAphqSfAW9EWqFNTyrhd4pApMDfCYqufd43DaZTrwS4fEc24roD9kj",
  "key19": "5sJHBqppyHgb4pn6FLCH8KCV5eBXe3dSAZG3UmVcgmUUjpQKQaAmJivzLL15igr8mSk1MprC3dH3JFwC9SokrziS",
  "key20": "3sB9561pHRkPkFEgs7E2JrwMhMcisHBecdSE3Ene5NeV1GLY8DxiFRJoyMpJ5ccYArryaov3gvuqgNFTZRgrWgEu",
  "key21": "21415zBJmmqNsFo3FvM8gwVkMnHG1euT9ciFA1EZMgh6YCbn6DnoVZSG7kiTa2QFqLzmn4RAAeN83yF7YVKgLv5y",
  "key22": "3qqNJaiyELkd7et234CXEN9BAjM1589KWsE9akBakM5GEve1eGN48jY1Mr2RCx7SinbedT3EUz8cZnoHFjCK2GT9",
  "key23": "4NR5BKMs7LHnH6ysmAaPUWX3m2sRR2g95GyTEpjys8eQbjcMAaAAY2MdFv1JejHBKXeC9AqwgJY9njeUha5piqnj",
  "key24": "2JkzDH5XYvDSv16cYCYuoAyFefBVR3JkJQvohCNvYVZgQrMZ27JstmYZLzxSDPkbvQU9h1SznksnPPTwxoNYyfeF",
  "key25": "4j3BKhHLfgQwShfR3Z9VaB1Kj5sEzJfeiGHPGgGgyjTuTEZs1MCpbHyLd8VLTahR4PXyX2oZKZkHQbWfpJ1ruMhe",
  "key26": "33NTVtqGBsyq6KuyJZx8hX2V4ybR5pv3SDJ821yaELVriioiVKryM8ALbzKwN1iaQv1qV6ixMtz75WUxBNo1kUqh",
  "key27": "2W1zz54YB8EeHpn9tyNrohVc47E2nemr4pdrjFuiwvuT3Z9bEs3DeoYqFvgoyXkCC3ofaMBH8qLjRiwHJoLPzqn3",
  "key28": "2RDXfNB3xyxMPjBdqZ6aBGMjvgmUqgq9BjV4Qot6SD83QhNbRGcGF8sbPsZgdJCCUhPeLiUssB3P4PqoqDVUxKDA",
  "key29": "4ZeeGsNrBnuYq6cazDnNJmwzijN4HQLFzm2w8CybCESayeoopTaUuXmWE6YPKCUwx4GgLQXHy1d6kyVvv6moDMr3",
  "key30": "2ExzJ4Lf4ybLqXo6PNbhAMSTwsVJUrocnpYTR6hgu4vrYe83WdAghgjjEbA8akDdCXkrtaynkMEYgW97DTXn82XV",
  "key31": "5CrcHHe59zLm1wBQMHkgpv9GHyAc58Gpf8RxSAmqWLGtK6i9YWCuWuaHeH6hndszzGUYwJLKGFo7XazHPw29khjY",
  "key32": "oFPDBamJtRfEXUbgeFwfufHbAaXW9GgaRgNeDzT5yQFaw6UbJ6RDBwSyuRpmGAsFLdqYDNYVtoDGVBxu97FgKiD",
  "key33": "66dkfZeeF27PhtjqzbV113WfhFkSDRhAHxBM8B9eZW1B9bt6N8SvH9BYeZbYCGxYtFbTPEa2sLYHRQYMVvPYRFno",
  "key34": "4N7s8jPemxdcLC45fW3wAimSWb2d615dFwXboZJ7UUnVzCEfpQeTTJxwQkKPuGiAv9Nmm7CmCsSeoPVJUu67VmjN",
  "key35": "2ZieV5rTovrthpL7b2ZAARRnrt3SiC6d9eQuoHzuYZaSQEqxoH5QafqYyRDeJa2cNxoCsCFNfXMg3yKQUrXh47Mn",
  "key36": "2oDYNfNmXoHsGjCCcxZm4SF33jN8wqvoWAr8K2yVHP3B6c5QA7kEek1a6CrbvG8eHtpnF9YcTXPZDzqMLHQFz16X",
  "key37": "3FArdZEyaYdPaVMAfEmRdPCLgnHAAg6mwBLYV8YCYgr4N6uif2vnP6p7UkSR673GeqBntvfK3RJDssz5JPYXeABX",
  "key38": "3on2acKFU5iCHz4Mjx8NpDtc9pdkdFrNAoA8kHYK7F2mQd3eb3qMTgQFbZhRqDxGSSSTxpwu2934eKP6perCzz7p",
  "key39": "SbnRZGx1yD4UD7wE1PZBD3xTUBa57YsF8oMSR5BiFThZhzjvSViBXkoW959jqjSwJNiJJGak39CZBM353xa8j95",
  "key40": "37QvAroJPV57PdgmY5PnsBzhcMvJ3uDvgAxx4XGWxMghxZk4UAp5VgMTjESuNLDa5yrrtWjF3VKbrv9y1buNH7rQ",
  "key41": "4VQeaTNmaqLg4rwS33Wx6XwoxLimoqGLRTZ8W7t4QsUAPz984B3YumzpHXDF66BgJysws7mx4DqKv1Hmxzkr6abq",
  "key42": "29fnpZDYfeKn5acg4DCo6WctNy3gGc15q3QXcozoPN666t8TDHm5K5pqSe192rcSgXtxxfkC8rUuY4f6iDBDjr5c",
  "key43": "5tScgWffHwyJgqheYwfkEWXttFVf8zB2V6XKSxLbACAicdnx6q5vLxq5Nb778yoe5CPFPX8jwhroYozRQG3PYP3R",
  "key44": "3gDY8x3oHmxdTmVCdYxyqWV4LDePDpsQz4MK98d6oK2V7Vxt8w9BguHnWJzYNsk9VUT3doDXNuVon3J79pQvJJMu",
  "key45": "5jwcknZiTCrGFwyo35H32URnme5exrX9U1VQ9dTGUy559UVKReQB5gbozoQkAmsvLZyZNfqFdnLvBk481zABzQJT",
  "key46": "4Cs3BUE1qBprqDVeVpFmfaPwfznP6S2pZTaNi3wPhj7xkH1km9iK899VNFddsHcqf15tFXWxMEZWez3a5qVx99FA",
  "key47": "3mCkxogYHq8hjkcruuqBeqU4SDbq5u9v3Pq9fjkWpBUHjFTAEqYpnXb1aTTGE793cXpUeAgZzULbX9Wc8EU7ZMbh",
  "key48": "3hhEyPCNGU27iGU62QQmhFw7xJS9G1Xavqo1LgBkz9ZiAEHwVEzexhtg182ESDhmYBQC1maifEVCWwFtXbCVRtz3"
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
