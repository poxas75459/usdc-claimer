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
    "4uXaEVnEzvojWrD5JQ2ACH6F8mX6a6ejJjX1obA6YUb1MKf7Z4M7B1Tkr8HDGiaGhYcoqMkExeyx33qZFCDyLy5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ADnny14ho8YZnbjCmsQANqGKrTyyi6S79PFTMDz2X5RY6oTQGwPB1CzdYSzcyUsgVeUH7ZVuH6GrmyDAeVeUQN7",
  "key1": "2D1VRjq3A3GeeZdHm9nLx9SujyPPkv9VNkDQM4wfjkDEByDxUwDy6k5gHz4LzKC6MEULL5KUD9wuRWT4H6dqiJwx",
  "key2": "538iJvAj9yVRLDBMEaz2Zfk39pYFFxjtBVDTmYuhTyKpS3cTK2LoKCZzSr2D9WhTza3x5twEPtfax3vr5t83eZyc",
  "key3": "53dJ38CucbCTUT3zBVcGuBJ3jHwFhfCzUpkARtjRrkJGLvRCmaJ2yUyr3k1zYRG2BAj7feTPFPMo5VDtp4DX69bp",
  "key4": "34r5ou74fCVP3coW64RPLyGt8nqxbqP1rfo7Ryous24hYT3WLUpFT6sd9NNrH5GVrBNxN7KGyXvV4dfyBKuGv29",
  "key5": "4hc7eDqxnyaGzYzZWF2zJWZ8MhwJERVaCReEyCijiSdyZRPZVL6Eu5HssJAdGaXgeyo3N6ymqWE1PDE6yiK7oq9M",
  "key6": "3wHr6dotNx2222tPf4vJqj7sFXNApou57F7dMaEA6dPeszZ2nHj9KkrGyZufqt1jtpTodU2k3BB3SEf8idbMBMtt",
  "key7": "2u5cNs3JkMjcHT1DdGbzhw9Ej8od3PZug5hioKjfDsCEC1UkGeeuRudbXeowyySwxTJ6UhKYvX8gcNfSKLQD7LwF",
  "key8": "gxEvReFvz7X6CMwH2sKyuW2wVuWoQ3uEBuZhbDXoEdLCT9K4CyMyrFpCMJTAr5U8up5rhbCoj5XH8BdQ9Fpk2G6",
  "key9": "5inWJzAYiYp6nWUpEWVa5HQNYjVzzETXx4SWESZjXRYaDevUqephyo83wtP9QtCupVTkTbPz1uE42QVohSUeNTES",
  "key10": "4J6ixcJtx7PmZQFwiHP7sUvMxyA4MtXFno9X7J9J6VRL9wD7yfw92Eo6hi79AJbS4s8KxxEBfPazmKV3gmecJnou",
  "key11": "5P4Sdp54LgSBWu1pPJS8aCcNHSdirAtUXgxQsDfLFFY72b2dxmKujLFVbKD6iNuKbGF7ZGYD9qtAXLKvnE9bY3kW",
  "key12": "47Pomd6FAgziSogQURxoPx3gKtfH1UQqK5FFwtpYoCenSqvQFMk8JHrvQeZTTPLBMNL4xhXg9rU1hh6jo2UhQyAM",
  "key13": "5zhHRmi1Ndipc1JiYukgKUm68NJbTnQc3ZUzbv9A2vHhiL7ekS6C1jh1P4qisYNBubEcxMKT4tcDhy6X9VVrBqpG",
  "key14": "3WhfNmV8w6JEVBmSavm8WrjVEKJozmS3aL6D3rrfuL5GEmBgxoRfSWYHo5E2Fak5qRryYUPa2WZZ8PVZoZgWZppC",
  "key15": "G9rxzjgXJYpv2wPvW6GgWjDTb4nQMsvB3mK5EzMiweMTCvN8yncHRfmnibYMKaqD8cykeFho8fSeV2XPKCX6cSa",
  "key16": "3kmfRhigkEeW7ZPje17vsGBqTYSrfPEyGhZm4jPvC5rxHLcnU12wgveRhKCBKkDy9b9xoLP1FGPbqA2Gm5234h6w",
  "key17": "2Xw8TEartPMQPmmBQv9f2Qtc6AdJYvwFBCoJBeqXeMXrtU8z853Rw8cBGNJXCLuHWjdTuKP7rT54VZVYZkjGwav2",
  "key18": "5RiCVajVgXJCGXj6sXzWmaxSz7FvrFVC68XdwattSWG3UoBYguhuZWjuHRm4X2pqeQD1SKsvEVwPBhx2K7toGFQV",
  "key19": "4CmjH9nK47KoUDRhzGf8e8EYDmiR1GQFhDcPCkGyRGZFa7jsDx71P1Sof9vcFCiep1N4uXBhgsMcwhEZR89zHMQY",
  "key20": "twfKcpUZKetzr4beQF4KwKMNLftdqrutuz51F6GLuYsQxnyk68sU1nvmXfu4wHQXVLEz9YVd6gmNT3e82oc5Um4",
  "key21": "3JYVzF66GTTLbdNVsoe6nhhYhQ8LW2KgKNZSsJeSoYruP84CZf816yVCkVoDULZGbWDbo4EctdqEQc4TGvy8YNv8",
  "key22": "vd4rrZoQYyFvgp3qbSc41pKo6NcfrNPMEmvee8mEd8zdvfvdNvLG5dJB7E74SBACdR9JU3Hhd7WkzXpD5SCTV3e",
  "key23": "xYs2SbvtRwFK8FwRUd4UW8pstv3wzidsk5rvyLn6iKAp9qDtGSttgFDYJKEMCH1xxgB8ufHDDsmdcCXBR4DW8r7",
  "key24": "4TKQYXp2g2UuYyjhepcrfxKVw8AtK5aibXZkozunwSGSAHCDs2g9AvddqTMi9aDFFKJbfyjHFmNAX2Q4bwTCU9ws",
  "key25": "4ZbnYuYhMzBEwFPB2Cd8BVZQR7Hnt68pf8vdsix99jR6AWiVJdU9M3xvEPdavnnLipZeM1Eue56oUn2HjQhZzpN5",
  "key26": "2RKXAuB4pvSFUyVZyZTqPP5j1bAecd5b86PJGAA1VY44PDfMQo2bNXJoG1Cx1nKGMFopuvNLLUs7AsdvyN2tqtqE",
  "key27": "YEpX38cZYHjZuc3wxEEa9L29D8camizwH1tgX4AWK8rwYQDGNepFsb4aqqMjvQN5R2rEpWmEhsodZ8dEFHBc728",
  "key28": "3YqtfMXXiwABng7HSR6FCNPAcw9FiViSBFRDKcuBou5CbYbG67FYdFoh4i4qUpn7c8Dd79cWbpn85N1CztBHF793",
  "key29": "5ptrokS7HPn8WFKJh6Z4ekMgz2ZfR6V2uww1jzEigFJiufs1Gu3Lwx2Zg2utEfPmFJmMYhBSr2XYnDRpBMhrnt81",
  "key30": "ATjzHE9PLU7XWLwqZYSFU6SWBQRNU2G1owW8sU8HDUfT4yiUobX6ALd5vPKaxwb6e2ERnbwg7aDXHL4V2DMeQDy",
  "key31": "4eswyLcufWFcEYfDjW2oxrRtn7pi1VusDkPhha5rvRKSQDL35LnseQpZVAsSQTyfr9oT11YuRvLWFS2kDL9hZM67",
  "key32": "64SaNYovtBTybY1cBa7sqJpBsprFQKswRv7U97xP4QdgfV51y8bDjSxj5Ptt5mRgLS6fCxRWC7x9g6s9yL8rU7oC",
  "key33": "4RLcshoKHANdUdwrbdvqR4EN4rkGemHeLrJ1QQapKXjuBc62qAS9phEv67yii4uG4Q4g4TzbNyYYcHE6MKLY4bb4",
  "key34": "3fbezy2Phz2vzN3RvK7nf8WtvijdTXUXE6dcacUA9DJMqZquD5xAQcPnmbwRQgtVzH6yExRVM9n3V8AUyJXVFKpQ",
  "key35": "2dUJqtvDQv94RZgT9L4gFyuXngCpHMSJewQ94JwQRQBuFvKZa5GVPAuTBCEZ5LJuLk5CrkMQBnNwYEaoTjtrxW76",
  "key36": "281AExPnNELcx1frLXWmPjudJfEwsGokzr5TRrnosWYLuNsZ3Lm8jFGJ1tQ4GJJsM7GK43tYGSFgiaueLZcq6sHm",
  "key37": "3r9SqZxA9XM8mcHiLCaVHz1nCXCjFk5WhLRA7WrY8tuTpeeqpP4BE8bZAz9epfFBCSSGNT6jwVABnrUdHd4heSvz",
  "key38": "32AJsW7Noqsytx1BXqHJcS9WFGz3Nrfak7jP8oUiL6k4DjHNjZNhKfzWWzUR3UbyEseDpEjTBKWQof1xxnRb7mxZ",
  "key39": "4Dm7zogLV3EYN8qTCVkxduuC1mgZoruVCcquA3mmmPnsdpEEf6Z5TT8j78nnfSjVrQGNJ6LiPn6ifCvRNk2vzUwi",
  "key40": "56ADZpbyutvD2MmKXeD8cVZdCX4LgxGzKbEFjWp1UWUbdNZbusdFW4QST1i9TKbnZazcAu2i4zY2Sxw3ANbH9G6f",
  "key41": "3AqYvqNmejm8xzdzee8gVPXr5HRrnjdi62fpgLBBR2jVDnLNDxBXD3Xna6BbBYCY7r6Yw3P7xAzU9zWBfbNd2LMN",
  "key42": "5ZhDVSBztYNqFg66PvCxBxXNXo6bBJiugSNK9FYRGXFc1CVdrK36ux222K9ceUsbrtvvkMxXDpAh4dCPdcsm6DE8",
  "key43": "4hBFkX5JKsetK5yWwsnDZXvKHGttrrkfi57c8fUArdMNPkVemNtgw8uYoZznc2U7eMxofDtPWe6Cmpjbo4CVJEeb",
  "key44": "41nDui8aH27R1xFtNuYXcAuz1Tvzvdot1NTaHRrUakyLPGcWA5u7qK2reKZ5qiFbbx98ynQMZBvXV7XEn4JT9NDn"
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
