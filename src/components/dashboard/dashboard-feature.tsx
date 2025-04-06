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
    "5bpLZ2T14MCGMAgiY8FHPemzmjCatVkACUUnGbDSEsyNLT54br6mfyhSAwHwZXMyPgFByUJcQEsVKkncNZVzV5XJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H3SQTPxibH6914TypQ96uAyLQeoaPhibTRW19UuXSqHRePgDxs2L4iHqZw2r9Bfnue9mGBs41yJDMJiwBwSJ3m9",
  "key1": "4ohYMV1sFiFNy3jgNEk7ERcJ9xG7UL9WBvvkWjyftmfeH52g7SWTXFe4cTsbm5bjybz22ANDcJL6vHNJuxc4u9VT",
  "key2": "3BnKD8ydYvGFrATg4UVQSXEwQsed5N4PCAqvdTA5JLEgucLcGXYJoMhNFSuA5FNefg4U5XyMiGztoSrEqq6zg15g",
  "key3": "2cozwBywmFNkcCrbuY13SdSCcmXXpyMema6XVojowARGuYJPXG7Z8p37TUmpUbccWp5SzNTZ19vrkiUtDiRrV42E",
  "key4": "cXc3REttKk9Pf6v5jeQd2J9NqKCbT1waVmwd5kbLhYRtNw6GGBSUJbhSNTQg8KrRNkRupKZExLCofrXKemePvUf",
  "key5": "3N4ZoHRTNTU8TpCx75yDdoCKaLnBQNxQUfMMtB65rAWXYvRbvJ72QUJ7DRi4Wgg9mairA58iQnxmM1cLtGccou1S",
  "key6": "svM8UHZTd9TF8JDrpKp3Muk8mpr2JU9a2un51a3np3Hi33We2idy2Worysc2Rzwpppgb7uqMNobQC3oD9vz8hik",
  "key7": "54JK2a24PSzGTkNXLhTw75oEyvzZ7RbXHhNPp16EX6D9QPBYXQgsyY7n4Do6exBAXMr3KzdW4cFFx5r8mDPYi9Gx",
  "key8": "5mMCBiE5agSzRbP2V44FANBocmuGePstDKX657T5dC6Ky315UyBxkD9mGVoFst78hej5P1LpSgy1a5AQoZqsNfQZ",
  "key9": "2p2XiA4ZeopaDEp8viH1osakzdNKmYRjPsUfewARgXA3RQJoQZYfzjRzcg9stq2b9unMasMTLjJ5bsyJxcNBhjbY",
  "key10": "5PmpmGg4hYAhgp2KtcVsgY2wpm6UbaeaBQtRUEPuaqVxYe7cwB2SFGkLRzaeEdfMoH3gd6YcDLdg1FWnx2zQoKg2",
  "key11": "A6m2kuBxwtBZ3w9sjA9TqJJ5m286NChB52VtmUYSmz9rBxcjJf7anRGM6C7tDZ1f1hw1NoK65hPYXurh1ifUWT3",
  "key12": "4tGs5aDcMELE58qG66JPX19fcf8HECUyTCfcPwL3RQxkFFJatLkDQzxKgXHMrgfkKmmEYjAf5rjdeB1eDdXc3mcY",
  "key13": "3bYEsbnmVLSsdEFbwNMKjQug1uUBKKskviXnHn39VLmV3xdqCPd1gkfkrWWEp2DDWcTu2F7aKSsyBRWfLHQTUzD6",
  "key14": "3Cz4mXM8nFeusQ4jdGxvqLEwGH9SbtisNBe1XKE8BBkQERNifRKWH9aCQfS9B2tFa67Z7P86YhpH91FYiVoSvjtQ",
  "key15": "GC8uFsHxJ2rFEcKKvtxm98L1wC7okF4ZT6rUWC3Ang3cxSw63WKKa1RzXfNeE2rdVDg42fEj8SVGLPL4h55jWa6",
  "key16": "VFr5XKz5QGGxKKcX1UdVDtfi81V3tHy7hAXyasF7ctoGPBeNNDdkQ8Et3EqjV1rw1e9DCB68JJBB5u3JnLvLLzj",
  "key17": "3gNoP6em5FpPFuJGJRJHmhMR7nhjCjg6TxT1XZuuJQKKJPqXu7ZkQqZ4ZDjF4LrQxSudRNZgFHwsBLdWqdXNTNsS",
  "key18": "4Ht2EE37Uvaa6hm6c5Pzc6FGZoppZ7vFq1QMG6XpnCVir9q7wFYafwxGgyzP1J8SxaL9Z6F5SVF6v8eX5dN9AR1V",
  "key19": "5US9omQ93ynWMTMQtmZUW6RXupS6zChCCnZ3Mtdz2yiDKx8KEsNGGEJkYNiah7BksFdgYCwb3wcyvG1AnD777pa9",
  "key20": "3YNLKNxBgcQcGysA9hiwzwALPM8Sa6bWGPmkBCDnoJUgrCtJnSWVWoZJSpcBVC1emF3DZ19AKuaDMn9arzqHo14y",
  "key21": "3WTbf8e8E3sQSyjrZNpBYYstnxcVmvTzterhwJjFugBjJfgUpXrs5V928EnTBAova2u85yGtSQ2mwEbnqfamvjLU",
  "key22": "26DbyeSjG5vEYYoAjuXR9ojWgc5iSTktMdfjhzWzbVLdSgC6QXHrCUoUt7syDdG59qHwNyvUAZ1iqUoBQfcU2YRb",
  "key23": "5xoqQcVgbePAC52vSpjTWTEbjhQDtf8ncnPhodTQajWg4pe3LCfMFHubyshNyL5gT8pU2BVfmzfvakbivRQcNaL8",
  "key24": "E7YkGqfrP7jkcJB3Kq6qxZmB3CRhZur6jubX5G9SL5oXVnPnpMZVptMScUWjpQqeRviC7LdtADLVNY5CdMy43to",
  "key25": "47tuvGCKwBE5sJRaKqpEqAgXYo7dPH8QjKJ8Yjf6d5t7B9HqivHzXPM12evyjwWU4wFiYSt34QoiSXmd68LYfBvV",
  "key26": "hfUNVfiTF77VgH4PPs6r6NRRDEEnYHL3JfNYCmYiw8MeNne1r4puWRJtowzEvvf8o6qCFirLz5SWgrpk3b45EQK",
  "key27": "Ct96XozojZ71qYedJFw5TUxwNRFEPL37aNwZuueGbtPUdxhdNYf4UwyzcwkcQ4JEL5gLtgNYisGRRHUPT3oCQwU",
  "key28": "2fBLhM57bdZRqxwRoCWYAcc6t3mQV6YynrQnpe94rsWbeBqiw8zEXEgN8mhjxM4SyWz7tGtcUbnHocBJrQddRJwg",
  "key29": "5RKygUJXQiTPb1QJKehkUr7GHe5xrZLMBGjzGx7doP9a6f8vsE2JTSD4dgh52MLd2hGf4Dfm9eKnYfLY8DLnApgB",
  "key30": "3zBs2PwX1BLDSEMkzPPhSNBB2g23jdjxh8JBiiAQf9rPfVMH4WrHQfcrQ4t9KJzwNdYLk9fkTXzjc3YSULyN361m",
  "key31": "S57pJmQ9AiqishoJP17DFUN8R1ZrBBYRYnpvYdzbd3226xox6r6fKpo4ShECi84VoWesLmC8F5LmRQeNBiPMeDM",
  "key32": "58nuCrw85wcrG23NS8K23Lh8Cr3817zbbFVVQnCwwUcXAK6TfV6ZKBXAgrXfvu8Vx7TyuYbtZNTqYxjC9GxPssKb",
  "key33": "3PPztNjmorZVAjECUkjRCnitCQETDUy7wYUQWtEmX3wavuC6Ry3GQsYrYckqMHvAdLDRpAJkJBxLAhMAeboKfSd5",
  "key34": "4Ee2ZnjixZap2GRwbdjWmapbcXPcavDpx2HUnh6EuUzgPTc3K4eitfVk2pArY4JioZQjnKzNSr3XG1oQ3miE7FA1",
  "key35": "kVUgHakzC8Vpm6FuGtgJ1JMMNfNeMiHqpcsWumTRxoRqfLRUiahkQHhFCBrEq9y5MKRUzVuMYadC7WyF8LUmfe5",
  "key36": "3XE61wVeZv1pK17gobfZjcGFTqfcxERmX9RYkD9wppUiZSBGywWw9x3ppm9XXM8mHZW6jdT4Zoydq4yYKggRSaHm",
  "key37": "31tAgbwF7wchPucevw4TEvVsavJFNnXL6Cb34Ac2xx8xuRsQZaTMTZMTLCXT8ox18FGnAc2sGyXNubmTnPw7HVCv",
  "key38": "2FxXAUZTsR3fPuFRFVUP6pXpVU7YP4xPtTWFtQMztVshhkatG1vK9hPX7cNE2NqwiG152KJhkSapYMnNGZptR8r9",
  "key39": "bM3c9gRm8Ptzcibwc4RFTm5sUZxMSDEkpmhnNPnSooi8cF7eczFnBxfKwp1feWbYuZuM2iyTrrwXEYYKopp9jLs",
  "key40": "5kW7DP97STNYdnKcHzFq9uxE2ARaA4bAwcKyh5YzFotLWHusGcjrUTaxmLoVZVbbynhrCbfgijNGEFdURwMxDu3E",
  "key41": "5E4Zhxdf9VioTSHh88xTwbQBoXjQswni8Ssww1AD1mvuCtyNK9xVAJc65eNafnYHF48132ehGQAMeT6Ae1gKH5T5",
  "key42": "5VHe7LJ72Crs4m8zVPi1MKUGBRjhXvjQsW8FogpWKHBEBjpLiS7iLVF2yMuaBQU2Mvkp2mnEzQrSW42nezkR8Ngg",
  "key43": "hdrUci1Xg3zumnfHrcPGY8XsC1uFgHEoqzzDuUmu7dyekfZKjrje4jbCzgd8mc67KpsMdDkksLRtv77LaKneZNy",
  "key44": "3jk1X6LNLMX5wJLhthe3Cnrae3pihRp9mcEVox26dyFh5wEgE3gZPrfrgCHrQ2ySmCu1uhA9GSDeSSBUeed7FYtp",
  "key45": "4PCfjrQNWS8LzMwU7aNF4SjCY8dsqY89PL5Q4m8f694Lx5VU6CzEPBrWbb5p627xFSsQsz3Tcwjo1ApZhrDx5kJa",
  "key46": "2G3gKtpErzAWhjkWARSekzdJqt7XZ2aFBe6afxbpJi9VSdWTjJNAN9UB1F1UqL8Xu5v3NoEZ71VibEVPnRikd5Cb",
  "key47": "2BWWZNGiGRDPehByAjDXpYAKi7foKWrMVJ98ez6JdkQhMegFatcG3476f5RNXxxHTXNbZb38FRwhXXorPtvecq8k",
  "key48": "43uVYHtR2cZiosag9HAikq4YLjRRcCWjMxHqzAu162DXJv36SDrAsicJ8q1LDFBVLXAgCwVEvdYahjYeR2rnx5ZT",
  "key49": "3cqMhs2k9uWfPq1hojozfFub11SuuhiU7fjzf4ayxwNnPHgmAhyo74EiSpScDqG9NXdQHMfus3VwZzN3fHgmo4aM"
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
