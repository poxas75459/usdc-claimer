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
    "5DFqmZcK2tEyw1VsKZJYxfRg75N5CxaVpc6Rw2vdvhDvWdRn7pUgQpgFckhmnPrkLASDXgYyvy7Rb7fzHjDa7md4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zPmGFnvZZsLZ16AtwwtTMojMWkZkkATBDmEdWzDoyEQpykgeQNMVdtTjnSiJ2PDGtSuBBCQEtvUDSC1wmLQoZyQ",
  "key1": "a4DMDpUp5VfZ1S5xpF48UbfwMGAXWkWQeZ9HPqrD5sMdjRRbMnBfn9wCTRy6QCgSGZtxxdUEH4BUFy5utrPb7gD",
  "key2": "4drZLsX1UAywxR2mTzSP3m4biGnTHyfuzbS16eoJcNnMP1KuaDwkKKbPWhSshsrb2v8jkTNyEjUedbJg72oCqNvC",
  "key3": "5TDJaYjmGJLB2Mvg8CVrCXLobkfq7fn8oBpBnrYJFBFV9hnnZepQDJrC4dozdUtbMEa7hVHBxmNDZHhj5z1p55ve",
  "key4": "5dHHKyz978s1wraALNRVj9giGikNoexbLxJmNezE6GGHziHJm5obepDjtGW1Pem6PAgm89AYc92DJdpRnTRLyizZ",
  "key5": "653mg1THmbon1EDmencKCaUMmGExgbPBiTUyUqiXwUKSz4GhKvuJESUDMNUJRbFZwvVDk4bM8eY5xKK2BGD7pMCc",
  "key6": "5L8mQ4km8V1bispYGHnNqGpwRkL5CebAt5RhY8PdSh7R7eF8giNA2SLEU6ZsUF3tnU9caDbhLmQ9zhcMN5enDheg",
  "key7": "3dLQKUAniwuvvbGAwDW93T9MnxvBmLMLjvgjRUaMNhpjXovMiibEJq8jKLu75z99H5o7iTVhGTVDwL13v1eEcZTy",
  "key8": "5WCCM1Vu7F9RkfsqRyHiLSY3LwvQWB9MsxFG6kDmhCQjaN6eQzRtzvqXh7Hpdiaj8DJ4eMrKgH9chXUjX5vR11XG",
  "key9": "5USmYhXAvbhNpKvCS2jiQYxZCppEnnpU8zMfXPXUbcpP11wQS43Vx6YWanVxN66WbNsRAByKNz91oLfKj1Kzoram",
  "key10": "5r1437aB6a6JxpNcBEHaYfYrevvatWZUHHRPBSMSunYkf9VTtqWMyPCB8kKBJWVLksGkTqEojXdkdqPNSjdPKKGs",
  "key11": "4gpJa2EzTXs8KrC4at84mDKp8zS2XijyUVsTcMFVrY3Jv1NZfQPfhdxcFak5eFSzLHD8eaNFWCN2AfJxckqQ21WU",
  "key12": "B85hBj9Y4WFb5TQy4dLHqr2vjziquStv3ukxyPFhw9dq61oPR7iX4xVQ6ZSvyCrckRW26PzonuTUYJ3yJDEzpjh",
  "key13": "4cQ5cS4GjG3uovFPos3ELFFJa9PU11PU3ZrhFtbRSttv35pPy1ZgHoatCNbMipd594edZitops9rjerqRKHRdjcG",
  "key14": "hY41Hhcb3qCmCQjvSeTd4aqRmkD4xWPJUs2ccPnhopYTopspecC31TBW5fYeniFpauj74vbudpSUQMCPAFPfEqy",
  "key15": "52eg8Mzqushycb5P5fS2dVPFVXEJEap7U7b6DqFDoExrb3pTfbLxRGQ2RNzwZeY3VTucieAcqkineCzNuiupGz3o",
  "key16": "4VCXXFYhBe9VKLfgpdCT497KHVozo1pqzQyTtWdVxtr3euCeEfLdhdX7YzEfY8Lt4bS35rVL6oBk5AqcAiuac85w",
  "key17": "3uKhxqWadd6Doa2k5RvdZ5sMzSiyi1Wwaa8L4j2qfL6r2DhgeLyQpFGyHCRDpa9VGb6CpHExR4oM9JyfJtrgyYTf",
  "key18": "vFsnbAaUYCDJxeJs6UnJA6bqYRpPPgoe3mFYrbJMhQh73jPZhZ8SSW9oe9gZ4VPi2UXeSmKkXyfSfeZgmp99uQS",
  "key19": "2TnTQ1g5WpPnEGxdcR4QcmE2cNYXQdBhYePacTLG6vXmhbt7zMyvr5ErxAMf4ELmSzQroP9ceqDt4yUksDtFznZG",
  "key20": "538AJ2uGZmtcJFUU6JcwmjQfnk61hGQ2J8gHDNwiA19sJVHQ9MxKxpnu5mXxL3aNe9iDrP1oPqy1yE6brDbFV5v1",
  "key21": "3RxVRUs4B7SJ3ihdHpHfbw8wXeGXDmYFpaxiF27h354WAVE6sZnqsmmFNE59j6qe2DUgc7UpjD74oYiRSevhkVGo",
  "key22": "4tSShA2fUUXe4EB3f9cRUsQAfqthHoD9e55deceB5N2Mp4k3G88PSxmPmABEDx8AQ5yLkYMJMjFPFszUEVwFCYNX",
  "key23": "3WHib237239bfXU6pmjuBRvNVGbW7sx9LWW2KseZ2L7QbseMEqxj2uCu9YvQCdsc9rWdyXy4irkY5pvMnPPTPyEF",
  "key24": "3TjYoLnubJ8798CaWsZRmwmUzmfEG4J9s15aRZzNEZJxCAaG8PTA1Wqfuaha6w5ekXBhVVqCH7xhVWJkL5NfZ791",
  "key25": "2HYg371efB2pkWSHU1UjC4j9Ew3fnCNKKeZR4STGzk8JJ7csHTiKBXzkHZV4KzRYjLW32eJD5Nsz8M3cQBmQbHNj",
  "key26": "5X3zuk5UQk7A1YwLzoBvEttuLxF5ZN1AXH5bnJzbwGHwLfMnicxmA57BEhL1e2PWSCjPYtffLBirtaPLecS9n83K",
  "key27": "5Whgp1oE1Miw1aT2ArANT2c1c7YmS5vcKihXNHb8UZAFeWKZWWFXhCUbvMnDdAy8KaPmr8wpnwW6UVtpA6MWB7w9",
  "key28": "4c4G358fbNFeetcWayBkR9VcMhoFW5aY8JaecWFgUAY6VPGPeH5N9bdXnb7FuHN3eQy5WKzq8m91wtMnZsnKZWPk",
  "key29": "yE9xjaRrZ8oDazm5jWnPAgYVcKuZfQrB6Xv1DuB3b917Xcp1oK77pnULuz5LtKhWcDFhKtLGvPtJu7yzx4bABjU",
  "key30": "3Pb61nMgfakoHjLazoHk2PzenwBQ81fsVCoDb76rqWHHjcnhRGSwwEttefvnd4Zt8r3uGxNXTxnvKz8VzYPjXbVj",
  "key31": "2AHkKcLndx1GanJ68TSbMUtDBUC8cyTWAwW3nm4qjHqibuj41CaQBm8CMHS4SVDaowLVGSgLt19dsBCSG3YvgowF",
  "key32": "2ZeHJnTXsUEp47ioUoPyVkMsprKKn4fCsMUnGphTapqNigoM2GZbJd4ryGg1xAVXJRxnM4uY1bdRpZ2ctAu8nW78",
  "key33": "sn58JLgiRuERmrfcHVrhhk8FdGvWS4Pve2Te2S5gshEtVRXyP9Pc3dtmKpWhrrxJet5LnjEbRGzroNNDSQF8AE1",
  "key34": "3kw2gureJHezcT9t6DwRoxVVnS9cCYvD43vBnzQNZsPYhfrCryw2RPehpX1C5pD8euvjrZnvJfywoJQf68iGs2PF",
  "key35": "3GQi7uvN9hJrxYLQNdgb1SxMrAvmAoaQZWsQ1Aj93rNFGKWKBzSQ7erDxpB9iVEgCHd1Dusw6QXPoExaYpoj9mX2",
  "key36": "HU9z26nPQK9BvVyGxGztzBmySHU8miDSsTW6U1crsL71YZNifF5UmM4faYdjyDbZNwF3f6EF1J9zWhA8uB5FEyn",
  "key37": "2Ds1QM87KQ6k7nsfXR9ywxQLs9MSu7p746PFQVprmfhmrGCHLBJ1xqKQg1oLvzoFgzqTdiu5joBY9FjQvAx8N5pX",
  "key38": "2kTgZGdYEZdKiUqxwoxpnGzRaGXGFgJGtDqN22KKLiHg4rj6F6o5rmFEKAncZSYXf54vayKGxetMtc5EEAWwYMny",
  "key39": "2iFTM1UH3TcDFrksqMdz7vS5afwgBUDLFMJ7MqbgiYRBFZmtPDg71xX9hCZBm29ePbmN28qdvsXR8AVRgtgzUB8D",
  "key40": "5GJ64w5in4ZpMoeepezV6cT1EwhS89RF95gNMbimkyUEhFr1qdPmfRMuGQ2VG6G6hG3oz5xpUaZ2anL7bKZubJ5a",
  "key41": "nsXmLbhi1QfrNs7ntsPSHiRHxWihohfASZnsp8wwTcyK1VdiFWd9NA1TwQLMssupVgCnQx65mHm3gUWGDRQxHKS",
  "key42": "4J3C51SXDx2pYu5MwLn5NJhCoAtiaCMfU1yuFGdUKE9P9rJMMPch6QUruNek9wyKyAVAn6FvvT4uAm4mLgPz2PMv",
  "key43": "2fbcNGypYYY33Y7R8TXaiqj5VyjiomnuCJ4qHX83KiuCwE8rbFeTAyPKpkQVEf5jpzezp3KCG7jMr4CWQtqDzWqo",
  "key44": "SFd9Hm8Km1Proq7LMwZi3ZaCh3qt5tVjJpkP93hSoyLEG4JptvXrPWDycS13WqU8jn6ReRfb3CPEmPE7v2jRTpk",
  "key45": "3QyMZwqF7KVkFPeuWWY7j5pNV1AAzvaw8gRTv6rBMaru3WhurACS1tFSjZN1g76TfztKpu9uoLNyTrPJiQg1CVfV",
  "key46": "5Cbtu6EREsxcoawJPk1E9GpkVXki78B5huHCVQDwwQWvNt9LrgniVdJ5x3XM3KjRiDeP4UEoW31u7EfXEeHFX18r",
  "key47": "2UVtyKhBGQYnaTfYwvvqjvw6DGTN2gBdRqJ9C4ovtFYRoTMcAW7Fte4R1RXLaYL4MT1XSBS6bSVEQnih1swQSUCR",
  "key48": "4qSPiDkwDfjMWds8k3v9uHVdbYq5vePWKNKcJ57qFnorBveuVKs9QMwwgbWsEKLQD4kfCJcpHpTP32RAVrqNY9XQ",
  "key49": "uVMFAxoSY5BvvgveRN2D6R4J3KaVkB4fQwRpCsH1bkRrxakDUJhHp2RgtHXk5eiZk2aoCuhyyBHCyschyQN8su1"
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
