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
    "5QjaakbAw4Pepy2GxamWk7xbUdmiwmnioQydoNn6FmkLjhdWyxYcgxT3EMMet3w116RKhLVntiwEEQLmrm7ns6sp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mN8CMeCSnM1uRqVEeb3nzRxyLMHXmgj99bTHNGBAihdwSD5VWH8JQoTUzXL7qdgiujoYC3uiEM1iL3xScURuHgD",
  "key1": "4Pv9jkXv3oUFm1m9bigvU7gPtmEyBAaYn3dh5HuouWv28msk4gcnhXWdA8dRxuwX2572Rh9mj5hXCq1CsLYrTWGk",
  "key2": "4beBScpbYy9FZC3E87TMxAxrtLXT3Fhdr5UHR9XZpw6nEp25WvNPeYq8fk2SiXWxxXoeMbrnYMsXTDKKTFmvQEY8",
  "key3": "32sVSGNEfdva8XXrP6yBmASWQyRwothA45tdqxXq5BeK4ViPfhykNQodFG17DcVUkLbcKLa5xygGSf9dCuaX64qf",
  "key4": "4gjyLCPbNi57rhgwRCDQKzar2YYyKMbyijSXqLV6n1dezT3ZjcghmWheRBipKz7P9MGXskszJwDCM6oAdyry17D1",
  "key5": "5j9TupK4m46mB9KsYSRwwFAgGT5QpvkdsgGdHuEa77NEDaiQ8pW6P28T7rc1UgN6veFVMdmTXe2x3CnjLan2EoxU",
  "key6": "4Jc2LgxrWJag8kw9SQRbeAiVUHiuAXZY5yofJEoQAzYwMpT8P7zDXmRostPbBvniDXVjdFcsGoZ97mcz4r8hu7a3",
  "key7": "2D7kjf8TGtaxGeqZoh8TLmP3cAnGNChmJSpUtLu9hftxEPdN8Cc1kZbxwDk8bNNoQcgW1PH4nUmriGtJLBGvrnoZ",
  "key8": "2ACjmZAe8GwFE88TWjxx9TG1BPTtFgDJwcZYvTTQdN9KH5PQpJaW1MnvhYLcRmwU9DhFf9Da8k2G6GVDhuMiNanZ",
  "key9": "3k2ZNH6xwdrsUQt3qHvn6dmp45a1E1miB5sVcgxNNWpd1VD4fGVKYi7wb9zmiuauzmT5RVGCbKsx719LeQi7uiKF",
  "key10": "3SkFc62sa97cx7eeXfFbczH7S1GPAMQc5jcKxdvuu5xV8dA3USJfqG5ZMVAHaiebKD5cYNRfTrxHpcwxKaf3fjF",
  "key11": "SscWGnFbdNiwAEzVmEtUrBQGQiB9Ra9mvfADSGK4G7w1BZkP4kyZdipe7zEJYJpUyQLaQmGMjdchtUAoZZTsob4",
  "key12": "496cS36suygmCp8k2H3PXp9QdU26puuWY46ycockMoRjvcjjBKDuTYduY5pe1AiwrHYdyrkh8L9iBWnZjVF6qZbU",
  "key13": "391JsGobc6PPrvMHCuFBXWwRByaDzm94rc58K8G5dJnVa2kTNxCcZuSCmmCYbuXGVD3NYsdyX2WWHkeZQ8AChBLy",
  "key14": "4JKFxeynjdeY4mTv2pL2Umxzf6Z1bgJrUXPC9zVa9qz8JrHsTFC4akVMxo5i14x7DSTyAt74CBfmEiGeZJfuEb2E",
  "key15": "2inou3Ao3viSBJ6dmVwHMJBztxtmA5Y88rRUFwssvrtNEYfgiGkWw2ccYyvfw1uVtMtjjm96wVXifUYAFCiNrwc2",
  "key16": "4Cb1ifPcYtTS1e1sJn3WYGCx7xH2hahTKpdPVsu4kMQa4vnRmi4KTGaB7cmAjUGhnynmmcosnWiV4nGU3iqvbk4v",
  "key17": "3ut2VfVpwaPHC9J7UgqEAZru5x6rLBDqbgcoB1zasr7dqkeqmgiWjsANG5hNXsme32hvRbUfwnkuLZRHUhqrxr5T",
  "key18": "4oPJNGK4QcjGB3EhRh7vS1oA1igPvTUaoyRCFyeRuJB444fd3iHXRL2pPiwhB4rQUQK1x7tzxXohXnBt3ZVkBmsL",
  "key19": "54dKSojycpm3SMQ7MUDGnZzvu12i8qRhJqkCC9E5vEYtiv3T4AfjN8s7cABcC2xvQvhjJDb38Caj9G2FbUwKyRuw",
  "key20": "2twmnrvRKLGVnb4Lnqu52MfDETKpTKWeEQVTCYjusXa9i1Ex45TVqNP5Hq87VzehouY2LbuWTdnftKAFfEKfJWGe",
  "key21": "5tiLPhY9jDe7heGUbJXR7muKnvBvgnHBBXzRWtCeB7sU5qqu9ePQbuS9soSbcK6ShfHjmpSco9AG49vU4SwpS93S",
  "key22": "5LP3QWT5vBNHN9pBGsMqWFBAMQvtRapMq2wiJQfR297TLCiJBqbYnLNdNabWzkvMtukgySL87jxhS4qn5S6aA3VF",
  "key23": "9zkAJqbotpx9PjKT5NPjtQp4dJkhrCiX98cDnjgqH2EK48rS3cmi3s1EFt115nakb6kAYsysjWdKDernvwEmZap",
  "key24": "4CC4Frj4qDG4tNYTyMn89scpHfYFEqLNv8mGrRptNJc7ztay3uPcAksBi8f9eftKvtGSe3CefxnsJwV7raicUu4u",
  "key25": "32mHSk7VD73rCpj3PttnHrrSVe7tzBG7XJXM5bR6Xp4E5BjpCDxRuKKPJmEXZVGYewNxy1tvuGSr89YsAZmxNCUA",
  "key26": "4Xv92Cwked6VRBqi2Tg1gEH7hb1iiYYrFZT64W9eNcAg3uXYphUmfsqsyhXwhjHp4itmouYaZNek68Gb32FP9Wgd",
  "key27": "2pUm21MDD7DsDWWwohdNXhHsy4EfEM8cPDsr1uiq4bpbEGo5CdDwTnBSow4sU7qGBdUMgewjar25hPrwRnBC9Ym",
  "key28": "2UBj21VAyiMsyoCP4qdUMUf6dnXXFNbnfRxJHCs2SDGnBryKBK2zrDhiVELXdhvaQJUz4BLSFpU9brtKdxxWQCAc",
  "key29": "5GiWCh1LMLgM1picciN2ni51CuWghzsRMEU2jRisaimjFjNaFxBWeLHUfshaLuERKrovsLEw8i9W6ezcm2D2WEY9",
  "key30": "4jSSScngMz4VnWkFChRhJinJbfqjx5vw8UEF1TcXdj4zPYWULwk3k3qjPiR5mheM5hrz3fzA1xqYedT4cZCKWXBa"
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
