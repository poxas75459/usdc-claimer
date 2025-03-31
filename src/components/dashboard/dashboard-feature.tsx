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
    "4zCWAL2ts44NJCazsV43Qe3bP9TE9MNNg6cXyex1gemaMuye1CBHK4MvpwsXHtv3nJcXRu6xVmSU1USx2Kcqdqpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yv8mqrbFdcVZdSkM8w8B1RgCeTyjE1WugYPwYrhvvQWT8ko2pAfX58RARg1iUNrSvowwmXY9B5bQcUEhocR8z9n",
  "key1": "5uNWSFwrphjLCd2Mugkd8aYYbSYLH1F34AXvXJWH4WiHbi8gfTAZUGYvN1x4AftjhDC4UXvXEeGbqhuDzFSkxVtE",
  "key2": "54JbPTpVTqoDHHW5yhgiqpxhbPdbGmf2439R7ajxfGCezWCvJfY1M2aCMiVuQ5DG6UrpDrGZkPDtUZBoikT8Wg4c",
  "key3": "3RQgiVhEQsqADPqbwbEeK57iGcHRB9NgMQGSLRFcqfXuaRDfR3hnNEocFgTQGthBdYj4rnyQE5rtEHWyRce8wcct",
  "key4": "362YHwuwKqXEdw17av8z3sy3Gf3nm594uFPxbRYxt4RLsdarEstPWy563qSBvLt1qbDA2pq9SV31Sxi63z8KJFLQ",
  "key5": "2wWws61tCYGZeUzidW3SdhgALurstLqtFgvf1BihJMrAcNi5WfjxgZohsGr3tgzrDTa6YNPts3AqDFj4sw6oXDaQ",
  "key6": "Gqz7yEKKLpExHMXbmsVWg5BAGpLJg6AeuzRYi3LJJwqVqTpSpsCVfcXdBkrghQrADywdfCR6KuYeKSSCjzPKLT6",
  "key7": "3NVt3GKFM8GApEejDBkXK8V63Ys6pWMLjUBQo4RcN9s2FCSj5RpaxJHh39e46SfPPpzs6ejZotBGZD88P8YeiM1v",
  "key8": "GpaqEihhW4musQGeqPUYLSGVgLQRyvveZ8VJLFvrk5buZQafhxvwCHSRksLf5nnT3NpXaiWCETasWEVkVCP8j3E",
  "key9": "u4VoCYZNHGmTm8y8h5853cvQNPzA5XmkMZxZtUpdzmukFEM6ZCQGpZPHiG9dmXSnggwdLo2KrSMtodyhKzj47ix",
  "key10": "cTh8qM62F2PT7fq2KGbVAu1rVDcbtXXF19ncdEfYtmFPRqN6UG42tRw4LCptTwhxHdciK5g1sLX2aYC64kgFjeq",
  "key11": "5zQj6V63ubELj4A6kdGCqfvCsfyxMgoypvKnZXycunK1N6Hu5kSX8kEEzmS5f76DX1sE4UEZE5wZo3sa3mh2DLHm",
  "key12": "5BNejbv63pFG676smnWDHCsirMXF5hrd3WWUeePLwhfN5Zj5rNLqUghJg1pFF7tLp6AzckYTnDEhke7GZT2VBLHL",
  "key13": "4aHXNbJHiW2fRq83faAMvieDkquDkGVYyw8D4wnx7t3PnzNsumPFeT8mXzBB1eaYMwPrqNcbBCeR9ARwxwEfQpht",
  "key14": "3PqKi2U3QN92mJho836sDTTA2u8RKWiz17tnsTVsbrW4xPAEEepnF9pi1rW8bfktKMGhezqbQC8Yr2Boo7cCg8Sk",
  "key15": "2QHDQJmBdVctaPjqGrFVwTYGeUVRXKDPnUg61TNP4p9TLe628zpZCabMUiiUYbs1oDHWhRVwwgzzN4vzb2KQHC9E",
  "key16": "4pUAeukWG1Dg58WQvZq7Ls6ZiYQDEE2Jb8nLTCmV8875v1rFgtSLP3vpm9BFTaxAdiEcG9Uegnkroob2Dut1Q6Tw",
  "key17": "P44WAg3kaKk7n8FmUrXt8bh7yZL2FTdo3J8DuTEzCkJxX1RwhyvjHWRHwg7YQanUk53qcLMH7KvvbKb6uwyq3E7",
  "key18": "5FMkFp7Mr5oDHW6ars5bXS64P9E93VpdK1MPnkLEYK9D3cypgrmMdDzze8d7MVCE1JmSWVS2izGGjSntsLa9tdDN",
  "key19": "i3nGZRLZ6ZwcVNM68wPPD8hzbE9s2cDmCzqEaAH6PbmqAHWbdcc1uc5eb8mgU8sbhki5vctTkdpwroL5993Pj6J",
  "key20": "4mUZoFikSBTRSk3DSJZY7uZW2r7PMxvpjiTiKXQue9ErDeRm5a5RMmGUjTNahv5nP8bvo8B26DfGx4xG4g44nfr3",
  "key21": "5iHqGaDJn5ruf7Z4PhdkmH6bzm5erzcij3BWjSvtXVWw2Sn2AmncRFmwThUSMxfN7Hguc6W1xV3mhEkZkjbXSubU",
  "key22": "4ZktETRVerTqtQ58MH3Pi4tezBEQrGk7KTrepPZw3hWLXUdWVnhKMdaTkTQiH8hK6wRnuBiCtHy7M27t6udK1dPb",
  "key23": "4bgKkM79KSRu4T4zcyDdiPvkzzCBHWJd9ejUWnRV99nDhpMo8PvPcGx3RcjEhKYabbZ2NxDGKJW8pEoWCVs4GbMb",
  "key24": "5KHMPbcqi8noEmtzo7t9PQwRxcyb62J7HrWxE22b9PFWhoSnY8u7f5mrhAM5hsVnuqVEpQC6vRuEojF6bLmjpYyv",
  "key25": "UDCbqqKJgzYj2yhnhmh3wvj6eEkKELaryFWGPgkFNkEBTKfgpUcHnZZgLnq1hMV3yGwD2sWdx4jzEpCtcmteizW",
  "key26": "43vFrbwjfpqvAVJp9efZqaqNbMVttVWsLynteFap5pCMueNMtQzCkbSJrABkaNxh46AU6uFKpw8ktT1ie5KMCt3v",
  "key27": "5PqpuQiz6y3cb9F1MmXDtBFUv6ZghqCDhzDbGZFcmd1J43hCWJs9HQkVh38nsWBTs1boKbdXakqF5WjY4jpcY5hg",
  "key28": "5PFJVi3qCgHS966oexr7F4SL7ZzrYHXAsT7ZWPZJ9Dbqyn9YNLXU3WqgFVdFNWC6N2DtUq5zbcQUmkYzrES1UEwc",
  "key29": "5KCfaQxmvtwzDEUjx2ucQe9eZqPhKbAtSeyku3afeyqcnURpZAuCdbeneKGq5LsQySjcQyjjgVVBpEuB457RegZw",
  "key30": "2QDxxWZi9ewwnYz8vLCe4juxkVkbLndkLDGYXj78YF6LTWP8NWCPjmfZauekecUXdefGPbSAL6Ye8WfQEejgjZnW",
  "key31": "2iSfSP1X7ZTLoV7Lxd6LjKbCDmzUyUbXU1HbnvyJBMoA4XryvRuhG2Kwe6VUscoPAXGyKYEsuEp43ZWXZSZngdcF",
  "key32": "PTcwcJr9x183SPDQwsHZnxyMDK5C53ibfK7HNt9iMAzcBZmWmcMM5N15tvcVR4zvh17y8GDR1GS3stddtAm4Exb",
  "key33": "61bH4crku27ZhmwuWq2snvLH5qwWDSL3snY2s6gyyGY276YTcHfVdZ2ah5aC69vhZ5gPnfRua4Ao7zEfTp5rWQVc",
  "key34": "2g5XFeqGYifURmGBvMoxoiqLcibEaiyyV3HhG2UqBx9YW8YHL8caeyQJWj1aDjnFMZDTmpLDYPMCgCatWTQcbajE",
  "key35": "2vEQjY3DrPDdYCPnR8TZx6QW9kxRLFaWpnXXDr11YbeXCKk928gjPNoZZcLcVSS7DDiXj4z64K4dUaZx8q8fyvcn",
  "key36": "2kAnqSrjCrteKAK7asLGWjc9B6tpXdSnXoev6onSGxPif55k4s5rEXytW79TDae5YqowzEzTKW7cmBD8E9AeDEUk",
  "key37": "5HkJNXFRZ6AzkkYUF4zQJgzCRGLwL2kvixomQDJoRVndjqvH3cQqSkhhsdn5x5LSmkSKYrKhj7dxotHU3RsjoHxz",
  "key38": "31W1tD8EQDogZM7Ab5rurJad75VfPPn12E7WgiJDLF8JbhEc5MW2appmKTWic2sFZtDMd5MkgK4tut1qUtznkjFp"
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
