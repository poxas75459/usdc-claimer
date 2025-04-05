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
    "2kP6eR18CCGQGSyfRFoVzZ9ExVdfuvAZY998f91ZMia9Vbe2ijDfPVFpZxpGpw31EVRUmNVKHPZiadqjkm5icqL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38evnMUzrGEmQKkdDymHUePbE57mx1GwmAPZniYNT2m5tmKkD2xRRPVhr3VP6x9oGHzosb2esDBJVGbnqgi3Y21B",
  "key1": "4jvheNRbyH8hrjKF2tSvrUt3ooKM7xCjVKUWfcgvAAS8TU5Sx6cevqHXozodVm85nbiVC6PGPQEEpMEpGm4GcLkn",
  "key2": "352ja6KHaqachzS4Z135KufEVQ9QifJzgJWHrTHE2vviFVU2uUvETY8jYjvAzKmbPfNdFPLfZEiDT3A3ibPCy2q3",
  "key3": "5NfAaiFyD4zHnA6AxyDX8TrJXnfY4WGNwKL4q2xNJx7DB2xRodKq6W2cFPg7jS2AqFnM5VEqo2QLUrMZZy7Ngpcf",
  "key4": "56KzaSZ8XNv5s8yBJeaCehK4k453S62Ayt6vQRj7KEw6yDgREFyZZcEUmZepAhXNunNSNeUQ8dAbUu9kydXsEJMg",
  "key5": "54wvm7fsfWJyJR3jP9wuFt3Z5VSzDbtefZ6oPKp8acAgdm3AfNp7r9FXhgyoMW7xBTmk9PTQ9PYFkMErKQpjg1rT",
  "key6": "2CYZdHUpdg2FxSB9jPALH6qv1T8gYQnS3wnHQYitYsfwkXp3yyW1J1SLAHuWXaPEEY62PkqeyFFRtFEFe7T9Cpcg",
  "key7": "5roUQq2z6s5kcd1tb3cAE2kqXQvZcSLAhco9FffhMmVQGfWyFuFqm3EdE9oHAuEuQvkJeEAh1wtvHAWks2NKAh45",
  "key8": "429QYLFRfzbt6JSgyuKzirubh1yVNcVzTxJ6Stqjb3DprJJcBbvLJpBYsWAtDMknQqKi2WEPVPdnbMXiFkZMuhDm",
  "key9": "5D5bXWap4wcEvnotf4eyjWDHqfcAoBXHQsibmSZwmanVSCEP8CVtN52V3tKbjaMSGDsfgFkSPBf5dEsXWF69m5pH",
  "key10": "sQWaZxdPJndBWnntQkbCMZei1g5nLiqDjrJFJx1RsT6R2ZYoNVvCs5NKTWyYMtgVGnX6XivRMuvTNrxAgVnzUUt",
  "key11": "2mpcs8JDLn64mtpkTFCgH4GRfYFuDvndo69H5CbSPfzWvqQEzz9EvQsKGdihDoe5deFrYXL3ChUnD259gaSdA7VY",
  "key12": "64yYJWfB8SrQ97dpnWSWPgxyrn13ox2Jp11qMCyVjX3ugBkX5Dgf6NWXvYyGAH9spqjFVJ6LzT5v95QrbGoK4SgN",
  "key13": "hjh7s6vFaQB4LiqoSdAUxdrguPk5F5DST6drSpXz3Tu26ytm68AqRaoYxZQaTFBBjRzgAHscXXenhuJSr3r1ciF",
  "key14": "3E7UocUWo3fDqkTnTXSfRNGk3XcSRBr242fRx74XEVy3fvb5LoUxw2NjewU2i9wbu3d4nsaQm4HhRGzBMAf31Kfc",
  "key15": "2bk9r7YSpLE9HL2g4UYe8eJmX8AThBbuZKswKU2dpkzQf9oKM63r6upfHMhjLrKpaxhVsjvRC8mRHGmW4UjkPbT",
  "key16": "4X4dxikVhYv78PH9uaP79h14xpJB4SJbY2ijc4hKd5qCWHGFtzbxZW6jcMqPhbxDkWQ74J4H7PY5CDKweFakuXSz",
  "key17": "4jiasYgJk6SSvkfSHc5yPKMTHx9fpiLgGk2gXYv5uHMBi2dWVqBMnyjGtfecbZGCyG5BdRf84GqVwtiN37cqtp6Y",
  "key18": "TL3wcDCsoSTWHjHvBNDpud7PeKCM2tDxt4s541CaNZZi4ULLETz69MoBo9d72HXRQksgAjPmzaskwCybhVha7pc",
  "key19": "qx4KYx6LJDDQTbVpFkjTogFjgF4acNPHAtKMweQ6CQAzDavNBnALC7CqrE4CLUK7DdEuXoMu7emvBm6wEYcFoMW",
  "key20": "34GsigvCxciUxtnA4d5qH5PdTTzX1WkwjE3RMr3cwZgvDhVHHNJWuAnaf2tCje4VhFCoANQxzUu3VvgpmaPQMbvm",
  "key21": "2XLWKJnqt2SBTKzMs2r3HAYABUF466WMQXUmnA1wTV2QFXRCwqRhJstbnEteeqvkDmJkkzKH2QHu1qPbWUteFCzM",
  "key22": "3vzNP3RKwTja9ax7LSzMtXigk1ae77poeC4gfs5ZzVBLQsUPH1KaLjPziGYfc8rQ2faQpHQNz9x3oMWFzCX4Z14v",
  "key23": "4FSyfWgUnF7az4sj5tzTwtqFrSKb6z513MghVBxTyVwPMNWjBhF6F7BBy1wAPiYX2Uab6mFvRdMsi4qvDosZw8tG",
  "key24": "5DxoCEMswy2AMKs9ACCHFXxpqXkuZumNHtXNQwpPiHq4HvGHNNuEXzjsmPX2ELqXgMZaaUgKE9HL1qfmfV8gACY1",
  "key25": "2mQN1axPpP5PRxDXkXQf9rR5LHu14pHmGsB9B7edxDBPSKGVBR9cEKjrK3raL8A4EZ9HQ28jVKPzCZKnamS7iLuF",
  "key26": "3r3Mef3hxfmQJ6WQxWh5UFbuKxR2zGtT3BRM9TJ6P2tqwt5xn2qAeawSyxE1j9Ns4Uq5bPSgfpoj5wEr2P7QbTSB",
  "key27": "3csRiFXcpEfCwAUVemaVM5wmebLyaXVVPcCMLVnZxaCF8by6aaxU6piGMBuaskNnWVK3ztSbgRxgEYcKbHqJmetd",
  "key28": "49sdDabhULq6j2fhqVk4ZAB5AbYzeenFctoZGC5q8VcyLbgoLUTmCJeE9DQHaRrDGBUXfbRZd7SM5xzq6q8HBmvC",
  "key29": "5GpxfVa7ghdcp5FUK3jKn1ERdaNj2gV5u9rWR4AxBQ6UthHdok9CCtyJdKbQMkjR1Gq8Fgdx34VQTbubtcn9sNJn",
  "key30": "3znZLBRqTviZZ6o52G1jvuaN3uxc5jukfT6FtP2MeFhqv8ZehVCnyVkDW74yHwuUUGQxUXEtxgaqyqTvLbo7JY2f",
  "key31": "2aTS3WUMFeEbJqmwZqjZW22Ds4nkZdJfVumGf7adw11T3DDhcTZgRJdsgy9dMLhYTLQGP5rYDvGsncxr9hMt3QaF",
  "key32": "S7v9q6uxrEvD57WgFF2PNpc9sbWyfi5Ub5RybarB5yV6b57AnXprBMwg84gJSR9Giig9pbT5PYP77vxCwrVZb6d",
  "key33": "5KGUNTmTSphumDyvMAaJJKBUeuFo8YaTnxMhNAM1wRo6X9S6Si49ifkZb6hRLvsxBRXjpi5pXioLvbuY7nhqXHYn",
  "key34": "5FHhTvGSaEUE1hcMLGh44wRyXjRanSVrmShPtmAKjHzR46YVTxJCLubsQQxgquCzmzGS6yvuKnPfUU1U54v1jPDG",
  "key35": "5jti81MAjPUEbKLN6ogdQtH8eqzjbEoVyD7J94BprQtXT3rDV557YJZoPm3J9z5qW5ScfV3g5i92vcsvkSmjgCr5",
  "key36": "2B6yooKcFnoN5JgYP4gvMJq2gXDTDXWJ4b1ahtKbzwrec7wQfo9efPEHQeimfxg2E1QmWdzByYiJbtjfcyayboa2",
  "key37": "HHSYNXSj5pJ4UqrBASSqck8q5JsMcAvNDnWaRLkq8b6WfuCEgJUvvSvQ4iL4ciWb93qmP9BhXWfjZDfZxzEYtg5",
  "key38": "4yH2wRvXUuMw3b9qwLzgJynW1J43fDsmZiyzwNu4fyjxXhBjRjMiSUXwAUTnCY7NFCBSJicjjw29ZvT8t48cgJk4"
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
