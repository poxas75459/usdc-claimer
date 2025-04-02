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
    "3YwXKbDSSLFEdnQvADq8fVRoPqbbAdLnB2fc56jSd8hU9p68vpm8hLntafEGfbNCnNtRCcZjNbUYcJPY6o31t9Zi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gUL1WuWuxT4fW44zi9Msr5s3uX9VbgKzxbGorK5ofCD1yeoCFkRB8Zg8ytvpv4utrKc6xJUEvxfg3Civ1m1bS2Z",
  "key1": "4uBZthQRsqQrvGPZK9SkSta22nA7LdBsz5JSihfj3hDEVp9aWRMeJJfBS8Swyc3SbvucaFuD3FrowxqNgrNtinKu",
  "key2": "E19pjpMMFqQNC4FEBmrwpebkq429iBDH6U1eDyn4nAyAgjETfeZaHMCMLbtHJbpKpHZHWcQxjzmrkUvpCRYugsF",
  "key3": "4v6P46RALpoHvHAxp4cs5a3WmQWbMU8U9sfazzMy8ZTJmm2tacVGiN6GmCqXrPnsWEbEswx2LkHY7zzTx5zxg7uS",
  "key4": "5HagXT6xKq3GapDhBA6kWvrXmsCHCAqM4dog5U3NApbCHTogwbH4uCatVZJhGeGvhH99dUZdRty46DP3L9DctEyr",
  "key5": "37SSVKbDYMuuSecFugMNcNjwgxekhqYvRbFbPfH8QEF2uXeKUy4WWuRaNx1mrqvp7fju3HVVbuvJXLNEaUQ5Mwvu",
  "key6": "4vZx3CzR1yc67rRtzwD2dru5CU8mSam9weG3ooM8U1eHDdnZvQ9BPTxFEq27NKtHWzoYkP2LR7nhbtKM2AE8nuVs",
  "key7": "r64uAFCA34PFxqmcuN5izGRJNXHxc9BrZYQhitxF2LJMxSBN133B83DWvnYHVbZGD5F4JueKZ3WMfT9Q1dgjk1i",
  "key8": "2zn1zFnxHdDz6oYv3FsH1GQjnNfQghqedAGR97dBMUidNUGQqvL2gnCuYYhNR3AchMppQzX2pH3Z6kDjrEwSiDCu",
  "key9": "3oDNzdo1RKbqtKP61PMFvvPBJDsw8rkpmVu6z2Rhr4iBaRrJG9Q5pYJymzkQajSC7MxWrTpx8AtjeEdYMmiVh7hN",
  "key10": "5FPQXh2Q2dFXQBes3Yzt3v3XLkPfLUaStWoYB4tmmvstd45AUNU5EwoHDv4nGNTuHww9Ld9u7aGuiy2VEK91uukW",
  "key11": "N98Zngfjypts8QR8nCPYQkNRexYN3zZE8vSNc7VD6X2T8LwiDst2rgWgTDoGvfEjcGFkXi7n18PPCpen2w5XGaz",
  "key12": "3LyUyqGMJd3bzhMzaMVE3haRCkUDjikjW8zoZXRXNTF8dmdoGEWPvwGfHSreZbLXfxWftWbdXahEi3GB1Rxodnm2",
  "key13": "4oBkqenGJiVKkhny1VCrhY1D5Lk4j5vgn4AxWEXHoJmU44eNKeUf27VLmPgbxkiVYv8syj3J11qTM3Gi35HR9ms2",
  "key14": "4vy9MHkTKijwBDcJta1b15ZMw8m4evc3PkJEbFvK3f8Fdkmmvm5i1Bk4G35cHpPRQ1AFQHiFCg2pLf3974TMboXr",
  "key15": "5d159mCNier7RnF8Hx2DhSGrWRFLn6fdWyqmMG7kfb2Yf24XnQgH2poRZR9Ecr2Ykd3CwpVycpYyM6E2DsNMJtQV",
  "key16": "c5TVwT1YXCcnFGdHmAXJox6QPrZ4BvSnUj4zXmsCFnPP7LeZoC9RGUFfu4SaXVvgWwATECQZetuR5KbEAYASWST",
  "key17": "2D2spRf36XqdDF1oUsU96FtT35h85FMMNMMKBFBQD4xUZgTzEohPzcNzg23AWTtepxkYk8BK3JEWUuxk3ggzAPFB",
  "key18": "2BYMuZUR2s7uWVV8vLYDzYGQavYGyicL4xYwDZTx3FLBAEB6akFDy8TRQTzsUHHaxnRXE71XzdtWMwu1T6JtFNNx",
  "key19": "2vT5xpNNN7y6PjNAKgyvTweCTRC3ZYicvZKc3onfyAJETWhUh7t2VCFrPzqi81AjAvsktFjfzd9i31BqekdeBgL8",
  "key20": "4y3BfuPybahXnEDTuvreenK3xKGhfFG2NtwegGc42SCnkDtmchCeTdHDbx6jh7kaCF4G19BhSH7WSW4hMS88Cwcm",
  "key21": "RcUggivbLpC74GVc89s17BwsME8xB5HNdacXCP7v6vKRcAiSW4gcuLMY9tCL59C5VxHUNj1jFb2dhiUb6uWpZQV",
  "key22": "3Vmdy49NGXLytSwjXUVVXqi7oXGpkTUEErDzhV8sHU3eVEeY1RqCXVsKcfEisg5N2jWMejmAXzmpbxXAwZRqn78M",
  "key23": "2UMA5BMps3vLb3xEkd5u84nWgYQjC1evsBTfMSqasckzAnvJkMzr1mbVoZm8MrcUh3cga5aUTyzKn2psDubjnozR",
  "key24": "4zWHN814GQabczg7j3BFDk4TgK8bVtLyRDE1JSeFB1CHDnHj3cqibh8PLdaCPb1YNp9wS9sgue1SVrYi2rkGAMUe",
  "key25": "5fbdijHKgNScpsCDMV7j6dMmLp3o8EQtLpi3EXLrZGGBFPYDNqxfiRvabCfTri9SMuCUfJzkYGuhCiT99NGHyoZY",
  "key26": "3Er84b8o2YUcG3agginWNacyfZDuG6Je2vmtusorCLLzeUUrF33b9cUch5zDqiM4RqCJZicXMY55nPKCuYj6yESX",
  "key27": "3jxLZ7mPDyjxdcKWgV8fHbs9gg94fhg5cYUfEiz2d56dzaHJBRj6q9svmUB2YZYtyz5qFfGeECvDrkoMBf4QZtzX",
  "key28": "QdENWkEoK4jMcrhTFcUeajVRKFnqK3Q2oPrqGHQFvgJTMJMvsmRbgsc2TC4U9ZwQA59R8cECVMH18wg52QoxhRg",
  "key29": "34XNcJa14nJjiJczqfXoFJD8q98aenXQYQTtGDjLoFJHU8pDrf8PCAct9SFti28GT71iFDtzdj3QjM1UJFKY85PT",
  "key30": "4Dh39TKexWBYiCfcQ2azcJwa1kbcfBk3pECRqkLZZRZi5isCvkyvZw282qKKdYoGqPRp2nd5ozkQZ66i3sgkfj5x",
  "key31": "44svrd8PydWaA1xJoDZpiEUeDn9cbfBn6boyyQ77EdW99iC5b6tqTHQArJkttjHX6qqWRS18fwyeA9kbwhdB8GNW",
  "key32": "3AZCb67CCaz4mU7RQBaFXBtqZgZjavbauReqj91bSZ9PTW7KkC5UGnNAB3L8xDe9xU1Xof2patQ8hyaw4oJRroTN",
  "key33": "5HYZUK34rHL55QjTno6RvrP8xhSaC1KS6UdGDgX95bbYi7bYbvVUC1J7HTJYbDB6MVTYbPK1jXxxTws2DAqqejUE",
  "key34": "5XxMa8iKPf5miDSjBmM6JEKzbDvzbns2AuCukCNvJoy6s3KGDedKPaj7b6jZWTGBQeps6B8YYw72jeLfmgKH5aTW",
  "key35": "5pMCRb5UYMw5hQbH3rSRtjQJkJqLVwUZ14bkLyNr9KNqZQctt1bijpbDoF8ABXuVQgcqr5CuxcvKTntisBUkx9WK",
  "key36": "3zStb3Y5S4gNZfppcAFJkRj9BX4JgFbN7pMaXEHHJdHcns2WUxuBiFqkiPEnan1SmtdhWcput3gZLLzk6jZnAV2P",
  "key37": "3GaERMeHHaiCFGCTMZMrjap8tdBPLQxPKpUrPPN2adNYf3yPF6Lpbed63gjiUTNM9Hj3uubsiMhXBNvKR4gS8FAY",
  "key38": "5tA2KCb5TBBL3xXB8NoZko47rypbHnhSdpYm9919gHJjf2MfZtnJTfL5ZLdkG1oN2J6UKfgFSb9yoFXB9mpDiwQ",
  "key39": "4V8nYBquQw11mXLY9QudutU2uHyhGbARjsNwbUA1vxQvsDReDeMahBPR3QYqMEr1xnp1jxBhVJkU1zGQ13TdCk2H",
  "key40": "4rV4BTV95fXAuueanTHbyv2xhfdKAnvuz58BDZj2BrqDxedb487PLJ7nR5V5XAtrJSKRfLhVQ4F74TRve2dxCKiS",
  "key41": "2GaE8mPgNj3PkKXd755pw4L96qcgvWqRweScXYjUGwWbdG9hQ6jjL4rJHsnBXxVy8yJZW3eFknodpLeEHAKXRshP",
  "key42": "D3y2K3gU2SRi1o668hfiFx2bZSqjAMQwheiMkwKLAvhSZxzVDWy8hWm3BtnH9R1ZqCe8ARyXNzbPJu9fLwV7kEZ",
  "key43": "4NH4d9HDEDHWdCCLerMwiJEgz6efmuVBpRKQZW7ULUvUPjgQdJTevHkvDcvmyMF1Dq5mPddP7DcAyxEy4WWmqRfA",
  "key44": "iw5dNLUS71xS9HiX7pQvKCoVikRXHN66fGq5NFH8KoHh4mxCqYzuuK32ZghEbNDWhcdTbkpuj41Qgq6ZSmrbsiC",
  "key45": "2t4ucbATbAo3pypeBEVj5xQmCK6Gd6U7SLxYg1kyvQejp5P3zVvLuCccXMnqkLdjZP5NYNyzUsmkZHbEzH7fRiz9",
  "key46": "4JWCN8cLdXv9LG2Z15ARdCTwtneADae6EwHNJD9UriYD2WxW8JkDXYFr4rXkEadNmdHkFsLMg2mYydzonzbB19D2",
  "key47": "2EhfPsgf5T9w3j1ZC9e5qiNgASnaSzXgT9Qrdmu85SCgxs2Gctrz6NutesKhr5ZpNhbQyZLZun1eSHFGyo62HMNZ",
  "key48": "3ZBeptTixZNjXYbjA8vKd6JTGgoB4Fdd3z94s3F3Bn9QqN7WK7JDw2MVg9BBmojibuXcq838zbj8YQqqFUTtQb4b",
  "key49": "39ZEn6LhzpCnoGQMPKptnwC2foCrB1w9brkTFZXdcZ4AfQvLc5W2bd7hYRnZymiFFAHvvzSGLKEpCcEmi9ooMd2n"
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
