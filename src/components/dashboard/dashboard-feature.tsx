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
    "3PDytVbjeZYiVMVKBYoRgUQRFt93N6h3Mj5KvvH9EueaSFGxXMXxhFJfoUsCboi9wLxtUkjjrAcbcNohJNZNf3LR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "129jyKRC6vfZXCLnuyF4ia454aqtDXH7CXfnecXHWm4cJXgehQ4eGhDGkLU6chBioJ7W1bJqCHsvJfvTxt8otiLj",
  "key1": "46x4fiWLT65V7PKYFtwrG9vt1iAwWCx7p9kSoWsaPfmhgLRikFb2KrVzpWRSMwU24egvCtzpzPnwm8XTWUejtRC",
  "key2": "56sbBWkrhkgGCB4syVyYErkPNysDAvQXfr3redG4EPbME9BkVEcAHoYHzRJoD349u3oQ7LGDSHqR8i8nKuYk9emi",
  "key3": "2Tt1Ra2M9oVF6GdZBzGquB6ga3vFhYmTKwMxBfYPsYGb7aiEcgkVNze61wkTF1xHPmAdstwBXJSGnifWwH4wvVAu",
  "key4": "3MUgssgZwBUX51ZKA8gPWJB2aZp3U2SLSE14n47JQsRQYv7g21pTk3YkAaabsAE253N9ffG9QwHZzvzaH99HWYUp",
  "key5": "3YZqNq6JM9g8jpwJNCqv6zE5xAMAemn47ZY6dxL4RrdgeMKYQykguq3RygejU7tqnZWqh3tqxLj44hnYvKoDrRAv",
  "key6": "44ENmiT7gse4HpPj4bKhCEz1D8D61e6HSFHjLD3veoUvQEKHSRpGfgGhShsdk2y5MUbJ4AA1MjEU2FiAy2iJpQAP",
  "key7": "5dk6mgTggrxVScyvKmPgho4n8urAoxc33oCuHmB3AiNAk9TTHFz5dTmf3a7q4EnYKsFWJvkf9e7Kyu4STJjWsiyX",
  "key8": "ZGoZ1o4XoNn6rV6b7Qw4yFJwu8s1gVqXgE1qn4BuBvRFq9BSi8wkq4hNRNB1aCzXr62VBdPNjSDActE3j9kGvfY",
  "key9": "3cSyEs5eFe56BDqq63PBVhK2Xen6XrETPVgNr6rBzkgvYrWAGRsKiyjTP44T6BtBcM8jXoPsjwUtvLj4MLCZJ5N4",
  "key10": "589q253shbHFqtikeVX8jRBFvZZi7bh8sf6tCkDXTrSKnzviWX2zvmaqP74A6Wzw4vTYgNJae7TBoNcw4VoaeoHi",
  "key11": "58AnB861jWx4PDybSgKbrjS5HhAMoRjfB97H5ettQEjvyLAhhhcMdU8cqACvQ7su3ED3KvdEDzZx1CMT95Li8RwR",
  "key12": "2eSweCxTBB3EGe2Li73mPGBZe1etNmn41rjtS3KcPMLvP3rGrSobG65zUN2H61bg2sXoKGuiKp98EmUY7xCBnLNQ",
  "key13": "1234kmAKD7gnq5dvDuBHKHuUyUW5CndAdpE2EuoRa1P23fNh5YW4oeozBYSGV5BL2WjmS2y1uCJQgK4kJM7vwhBX",
  "key14": "53U8M8JrWcpzedw3yVrsgAJgXX1DPYFF3QjX6A34BoP8c5qAvB4HHy9rV8EyqowR2rcP4N6nh3vXCzCRtsNTmwXi",
  "key15": "5zpQdG2BMAVViX55U8vQrRMFVEhhYaTsMcHcwjvzDQJFM4mkqwmp3e9HPmXkKWzDx2YQvvDJJkDWgcuoZU8x4eMF",
  "key16": "vA9Ds2SknY4FaCzE41bCP9TgaapAhLMqgxWjvTqAiyd5uZi9a3QzZFmP8o37CV11pfhPbTTodpioDG43AgpJWBc",
  "key17": "5UqL9vCMRFoY3e5XNxBBWdY6NbpJD6s2rjfyZLrmFgq7UbFHhUAB7ytNwZWfTJeiETtwABTzE2doj2TjMW1tWkxU",
  "key18": "4Pw9HYGZccK3UZ1XhWAGBhBQS33dvpLeQYwffvjXhMKyAzV1AG8cfi1btGC9q4Kh9XivcVZkJc8CBsA7NXgw7GvS",
  "key19": "3EMbMTEdRLomJ4wWF5TYXpA1ceN61jV3ztGr4UcbZzR7arm6uKiAwvoiTa4BLF2VBUkm1E9hBb17sHpLPTejL97Z",
  "key20": "2x1wJxSJzmHALdq6kLcK4pdtVdT2QrMosMFKMuaGBRtDsW16wnhLxuzWjXyCo4LngoydCw3oGcqSr1LcVXanZLzE",
  "key21": "2iGQbEJpxWDVYgdQpDp7q6B2FMSSocazmGT3CttUzoX5yTePBsNoMyRAaMu1sKy2MkEPagsFzpi1DBcDpz1Xj2Sv",
  "key22": "349k5FzbxDytCVcaHSWSL8fQHYVJ79T5eaymHSUSf5Yx78Y9MdBg7x6out5Runkktd9jrR3DAVXJU6UZ5JPDwiKF",
  "key23": "3Bm7NU7TRncyESoCHvsYNbqgNYZ5CpHrQufj524wc2C8Frr2iVnMcuiPGUhwp7AF2FYjSWMZrSQ9wxGCXsxmeXdv",
  "key24": "4q2HiNYNARy6sYbFZeYRSuuDaKGzEkFQ3B5K5njiXwfcm4gFaZV98JdMLTDyoWqdqayRZGMtTus4x9TB3cGiTm9n",
  "key25": "2eJoTexSdAuqKGPdAujjuYvBsBTdNuciwU3hFnpKcr2HkWYhua53oV8QvfaJiN5yFCgzKNpnm9DV1Lf6x7LN1dRW",
  "key26": "4aytse4CACy4hJzY9yJLhHsk3PF3UFNjcFtURJ8TGYSjBeVqMNxSxRaaxznMsqMz1YxWrSUJWjNrZTpahN48YY51",
  "key27": "4zU5mTwpT9RpEhsLDRnwsFQFwU7rGjbwvdpyRVucmdDVw9ovbgxzxzRBi9HLM41q2DhbRGEpkau6RtWQLoAUE7Qv",
  "key28": "4ah2rb9Nooqyrv4rpxvS5g5ysMVGWh8WSpybNi4T1HFZwD198viFuRBh5xd8Hos8LyQ1CF4QSDUCcBKCr1GZbJE3",
  "key29": "5GYnLWtS6S7bduG2PD2XXdw22Fp8yS8DY6tXCLvQ4PAKpHtarUyJt5y12GVgcz8cYGUi8DJF6Sn7MicNcAqv9hde",
  "key30": "2UPcMwdgwBmdsvQ3FoXLS83uLMUjRq8GXgvdpX6UNAeAUjQZ86zUZcnhf9yJyQA6HYmkWtHg9HabYhJvPUCKa6ez",
  "key31": "2GWyndJo8mR23ZGutoqfNWgjJaoAHPBZn1VfE2cDhqvVhTCbknehymzcdniftTHem892KvJuEJJDdEyTyoVMRf6U",
  "key32": "3iVhX74tHVtcbVbznCFLzzK4LdKGks8EZmtZfzXZXNaADQNvHdYrtf5QzHxAuKh1JhjpwGv7RYmfEVqW11Raayp3",
  "key33": "3QUX3QcsQnbXMwqm7mQd7gsf8cVr13RJRAxSEH3aRNycL1Q5nFJq9NFkSdXuL9nUY9Vuz16vpCLE855C8gz8uHqk",
  "key34": "WgmVMQf8AbkrnUuoBNyMahNYHQGTapefr9AaZtgyWgZBrbfLv13S2dTMSYhHUNa7xpah4CA9cMbRpY3BPe9FnGH",
  "key35": "3Y4URCR2ntMWmhb2zcF5TBStUhEmiUbGjuTK3ZK3jCynhn5bAGkeAD1R155qog49dtR2D3HZjK6xjpaWiY7ZSz6m",
  "key36": "2jGCpsiTbxVdbpZDEZLF8XFXcVFSLEcAjf58h399qXSfX8RbAL7uYkpVFqM9PM7C6dCzcpkLbze9DRwFtu7FEyEx",
  "key37": "5AbxiavS6hFw3MLBGrUk4V67sLagUVeGYecKH3f2kPikhpq4kmSKRWjHkdwntFkqr3bYsqY7t6RNNax9VEEtC3RD",
  "key38": "64MxPQF6uw8kjyv9C4HCCF6MRtVKUtztJxsTpCLnjveceQPttncwLEZA8TsNC1hsBMAHruywkTnsqReak1hjSf9N",
  "key39": "CivL4yMv5KWzvhca7ntE2biaYHHbtWhFEJS9hhkCnvZP4EsS1ujYVT4BcCA3c4bYbc2W3NuARhywxhwHPvrUZK4",
  "key40": "2o2JRxwZuJFSPHqHAzwjRSRfJmGFwj9rEshLQ9s9qGAXD3r6WXKZ1AYWk4La1Fxfz7xdhdTawS5LX1Cm6QrybRWp",
  "key41": "c3djkqCqSrEAbPi7CP9cTinEu9oLeDfazsa1MQne91GoPHDfVLmEgXfwt1neCi32Ac2zmdMmd1Trt6nmkJj6hVr",
  "key42": "61iZk9UZEtg6eL2BSe62ZSWfiMdoXTeMBc4gE9rxV7QJiZDHPVG2Vk7qMrJDYukKEcJPPSf9vDqWgdo5kD3qsVkx",
  "key43": "4uMGUSEJ91xNUvQuu4pxEk5LKt6LvyGnFeEeMSqhWWDPDvkvsFQDnKC9daUL5wUTUV7Yad6ardsyg37LPpt5m9Rf",
  "key44": "3FARGXDHEjmvjRDnF8fGVaGnmZnueJxtm3QN8FA31owVUBDcG7HnWZxpuTLHofd8tTGQBc1uUr6yxmdwDe1JJ2yf",
  "key45": "3iYNytaJtC5GjUCLStSfcnQg35c6yUvrgJXGsikZtX41qnAS8ijdwaz8M8aw2bvaajgsvGCKpmNaXEdN3STDyYdb",
  "key46": "5B2iM6gU1GX8wYdm5WAxVBHhnUGPEF7rwMkwtj1t1vhR7UM3dsE2ke1gDxVUAMUV33bPFABgGgknM6WD7VGvV3rn",
  "key47": "2guC1cPPRMZ7WKeZZFZfYnxojuE7PPjPvnMkevyev8s5Dp14qLDwxtdnjwFZF9j7ue6v3pxKHae8Xdf1vswr59qm",
  "key48": "2KJDH3Q5SdHuLWnGHSpVaEdDeneY94j7AEzhUNEWQ51PuvqkPn9ZWa61LqY6N6HP2Nib7b7LHpanvEgVCrRB5HCw"
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
