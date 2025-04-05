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
    "212RbxJAgorB9a93YckcyCaxD6XKchVQurqxtN1go3QWti86XztcHi9Mow6Y6mAKDmPbpoMv17AyUgUy4oADMoTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jbQVUrtEgdoHzdzuuSURaWnfJC3M3rmuNSB9oEvY3uqp2RGapoCFUVCSPH8qfT8Z8W5pyYb1SVBt51cwpGei11t",
  "key1": "5KekEPvcuZ5WBUi6KLJ8nwsizzfBGyJ2wPbUvYeUuuiH3tHhDuzCZiQwpMtXaAwFsmy1wMFvhMk7nDEVDNM5r2nS",
  "key2": "2HJXXQNFhhcaKr4f5fAucxvHV9MPjiXBCD4BRHNKCGpoZmZ34RHtNgW35yVKQCSc7GAwzQoDx7SPqLBeJyQkPDAF",
  "key3": "4aR6RVCjENp8cpD7dNquFJdTsL7jKwAMr7dGppFiVAkmF3PSbPTvM9f9beAMRdt48SDHb65X7zJWUEYMCxwXJrTT",
  "key4": "2P73tZUqjpWc4izc2wveU2xdWhsGuBANRKpJCrMKLR6PDKFzmhzuR2cf8NLNiFRswDfzjhKcfxp7VitsCx4eULBZ",
  "key5": "JgLshTVH4Z7gaK4rjNLT3LzwHzA7oR1HRfitvKnECVk7gtMbTxE4aCAzRHB5k9nbXP2u8GFZ6CrzkcZ38oLdGwG",
  "key6": "3KRU6BHRqmioSfBa1uCjgtiLR8iAkBXVtgss916r5KYi9s5GGEn47ePLL4h5nYxrubnpRVm2JL6Vv3jeR1WwMPLR",
  "key7": "46HohyiJoMUFQwJ8gFuTkZjWuJ38hKy5dFpkCRF56ZHdae17Sup1Xf2Nn7icQ53HUYoDonfAirMZcp9ati9gpstj",
  "key8": "2D14Zt6ga7vsteMGtAdJwkvv7S3W9Jb7Y51j8R4MNwfCFWhuHnLpbnmSPV872Qjjauag4S5iKuZ3gjCaMV7Fz6oc",
  "key9": "3DbdyrvF5ppZaCEQ7UBVx6EPJ48rW8NpBHBaKuGk2NzPgTpv1joNBT3ueHaRpNujyTBReoFosDBBGm8voihgYXwr",
  "key10": "5mwKSU3aJxgAiVXRs1Nk8zQfzozKYGndsrfHV4eG2MjuMB1Srp3j7sHpNFyBVBrgHvN4u2iEGP2Vw22FGSJQTWTy",
  "key11": "5TpnSeDFQzZaW3RDBnGMmitkKuAXcpUtgC3Uayw4z6GJw6JQ5EfooDkxQswCQBcJihXGuGri5t5sq77EtJLoSVYE",
  "key12": "QvP2QUq8zLHJLyioZ1xK5XL1to51emuqHv4PecwsjBdEKuEzPdDaxSG12DfpFumy9H8a3dka1wvS1j6sHxSSyhW",
  "key13": "3Sv3ZQh8rcCt8Xcd4zo23ALZPq8Twc1gfHCxWYX77g6WTa6713eyz2MYKn9XLsicKLpetLhQb5RBjYDM9HFoto8G",
  "key14": "62L2Qy8LvUR1VUY5RZ7vTnyX54YFjnzUHK7c413XFnc9izsU5RynertRBy8Jw6z7r5gYdtPTs5WUcm9MguCaXMy9",
  "key15": "bsRBA5PYDVHu1EgiuHskvpx5NSmo1LV24vEvuJrcDpx95tsGKMXM8sux246QsKEWauat2cS2egrAhLPq8k1wba8",
  "key16": "3K9SdABGCdvJb8Yj6GBgXo5Nk6U3eYvkTrCA6tMvakxbgz8K7L1bcJT4Rbu3KK7KeyxYyQTJ5ni9EUJfk7j3Bm3T",
  "key17": "kC6MeaXfpQpbNpppqSjWn4f8a1iHhijRTxppmMqU6dVnowUhp4D3wy2bEgiwZEp8XVaizqgruwHyjNgMUTfaPyy",
  "key18": "2Gfg8yhbJKLJQ1pauVd2pJ52oBK1geRDNC5xk2BekXmi2gwEensRpWY7rf2bDFAxSb1coHCHp5oejkaFJNgMdMgr",
  "key19": "2zqvWYJsyDvTg95B79eBpk4uJt8v9ZQa2zM9ojMeX8E76i6N7qGpPMf9FRAVhophtzm3EA6Hq4orbWUCkFf2wJMf",
  "key20": "49T82otYePRrYPofLqw8usJk84xB7f6CkMisidroMm4v279A92QHdpcTvrBSEu2hJHVrsXVwTysjjqGJf4qYaJqn",
  "key21": "5EwzcK5TrvbpVyaPccGis1chnNKjF2QHT1x3QpRQdR7ioBvNJeZEhbny3yDEyPeYJSVDveVRCxn6Cwa2PKEXM171",
  "key22": "44sKFiEHbweRZjfW5dcZXK99sSresGyHPws1qq3prQWf48HWumPSg4s2sE6QrEUx477a2ZCFcb1szN4swDJ7KKqK",
  "key23": "3LdbxAYSBCED61BnQ5s8cxd8nVozwYGaePmABJhPnjFyDWc1KzcvnRKjTVKKaApXKpehL7pk6cua4KeJPNJ5ABJe",
  "key24": "2fHA3dS1h9byPQfqXykQYYVqz4BFtQ8dVTcYPqxXHFMkigpiUUKcU5AJoh22jzybTvfP8usLRssKNRiT5xBkqgfu",
  "key25": "nKJjtFd1wfGhjgsFRPYxmEH63cLw6ve5btwBYrEZw4nANpEGACiJ5ZA5uqUrPh1caE3wmA1ocaSVkCyLsHrz2os",
  "key26": "i6pNh5EepPogVY7D1LVTxW7Gwi4adxGe6xCXwkZR2LgeKVXUznfkzVjpZapPCDXVPeAuo5fC7FJLvVz6eENp99p",
  "key27": "5ucFiQeGpSL5zZXN894sGuSBBrnEzfyHhR1uSa5kKLkGXpDc34UdnCrTyiXJjwMcTCuZ1wm4zXFyJqjif1UmEmdz",
  "key28": "4HSySzijncVCtpV6K8RCz6iuQY8eRvn1fx7USaFMpw2Y6HHJvRzisowR8X57yqEHTsa9bTLWHeaa26bBomkhwaBU",
  "key29": "as5bV3QrHf3R5EBtYvej1dok3EmdsbeyQf8YcNr8PAgjuRV7rW27XbH5F5x7uAdbXtdvF8xMyN8pfp3LPQjfbqD",
  "key30": "yViuXASjHSMBvJLNq4o5uNQW7sGaUwXMfhgAgD34EuswB6vkLomA7Mp4cZgvVwk6BsXy37ZtvmQUCUySV6HDEQj",
  "key31": "4qgZATdA5Rffr7tBW4BcDSEMMiSPzF1Q8MsSG3Zf3vRmK9SJt1CoNqhGGvy7ACNAUgiNfrmvR1XQCBze3kkpN4y1",
  "key32": "5LTTyYA7FCqa3VkNvr934Zatx4qg67zTBez6XJyYuZVvURfukAV4bSMVoq3tjToR9mGFdgkmpoktzijvq2DDc51u",
  "key33": "1o8drTHwkXCAtHW6RDBgc2nEJ1Cu95kSmHo6VbuxkTvFyAKpnK5QB78dpvVv7jmivrHSopht8dm4RTLNtFtUwbi",
  "key34": "3QVg1tFWTPjGF29EiMfYAvqzajHgGaaz1ZzMJb43aBk9Mi4bPas19BZvbqYAUfqjvcXGoDhqvzFLwSNe8M1tVEHg",
  "key35": "Qypv12b1sQd85Fvg2uPh6JuzyTHzLePEyTCsj8xCFRbw3jVuq2L77jbtfgEgPGFdqFdEQehBvazWEm9a9RyFghm",
  "key36": "JqeW6QxvjHWqARQ19hW8WiWinsrhWCr61cimWwGJZ1HePcC9MwUU5kd8XLFj5aVgqoEc4hwBeZnN2yR5YrA7K8e",
  "key37": "xeHZcr92vVtrVqatDTDuopPVg7s1xTyALjkbRJFAV1em95jTAixVUAySrR84D3T6aNbUiPkR44tT8tQ6C8MJvmX",
  "key38": "2NEb9eHfQwpEqFAYb1ZBn8cbqXFmuRqX2Ct3rXS41NzFa8roRrtTAmvhapx2ZUdAVyqZbedrf6APFxAQYkAJBr64",
  "key39": "2AuNreV2GvAyK8EsHm7M4cUCpF1Jx3Py1T1Yekte28YrcwRrQfWhuwTyuAKNo3Cp5pEBeKcajb6QXkmcDUeSafTN",
  "key40": "29RU8fKsFmtxKM7Tk1z2WgeFSfkMiEKNoisF2LMtS3LzbDYo1QnJTZqV7deU5N57j9eS3uTqzVKEfqupH6hifM16",
  "key41": "3Wy8dgJ8KsC922DvLge7TBrXpGPsmC1rAcmJtNPH3vo3PFxjzrPAeWWDYrDbiq4yNS7RC43XraATmBkszForVm9i",
  "key42": "34bqFF8Sn9dzyYuN6DYVkJLKbpGErmhuSFXjsxGdJGeBTXtZgHdVYaRwbciRx71FkHHjFMu6r4anRMqqfLxE5U1G",
  "key43": "4k1xEXzkK7Qx5Sh6PPE32xT6eSnqNVnANoDVSjCxpQ6YHx4cKCya8dtCMngKGXSQ3H4Nwe5RxDqGzdiStmce6roW",
  "key44": "67ik6Vhnw5WFiiwHRXTxYeTgRU3JdFoWFqMec4jnLCjbuaoCejThQ6ixJrGVzcsJPihdU5Jxg781UKe5bQBmQjSx",
  "key45": "AG7ksCrzQg689BbqAuvK6JgjKNJTRSkXipqgEkkvU42mHFuo22bSRxUYamVahgzyhSsegJCJXhLiViqrT15MAoo",
  "key46": "27xnwhhkBBQ6WUEUndKRPDKG9wjhFCnQUYyGSiCLyhsUkYyunEcoNo4SLmSJb4hZ48oUNcexGVNmYtWGkFKP5JCx",
  "key47": "oBCgEUM2rboosfSzaWUe8CTmegMAqBFX4zQvV8pCGUHma7GVgQowWMRtQVvWsntX9JVFXA2W9TNamFBpZX2fh9N"
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
