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
    "y4tNHA4yHTXqWDJidPmsGofdoQHP7ArsA3UYdGtUvm6GyMX6hm3UFJ7GXNacPjvn7FgSQ9P419XBbfvtbBaVaV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3es2JBXLHJaeeVYoaDapNeGwNPUQrS28j49NihA5H54wsYBsgg32qvfwgxC2Pegx3Ah51NyQiyigNfMbJarhG8C7",
  "key1": "2STCMpDdZRcnXciHWRR8CpTFJGkVyHXGEukdTbCRmEHb53SqN6Rpeos419dgz45KynStMhrdegmqrn2uZNMJmcVe",
  "key2": "3aEu6ashXuwz5QcFGoGmEHgFfoAsPv3ry4WKatQpRUfCZmUiQP6Njq5XJFDBnizmeDxNhJFrMFEJ3Wetf2w8rDqp",
  "key3": "5uKcMuYRjgmNGwtCU3sScwc4g5LwSZdoLXzpoVHAXPrwFP2KWUQ2PfRqENZG766cGGZXDeyajhTSP4vfj68pC6rb",
  "key4": "2o1kq8L1UP2oo7qWKpVzuirFuZ7ALoRL449ngALUbVozMspCDFP5dZP8J3zdMcEQbq8J867Jer7K9XmZPptknyix",
  "key5": "2wS5C6baaTf8b39yxzfupMrXPrgzGc2Gqhsh12XRscpsPzRqDh7PLLg31j5jYAa31QZYPn7pfZBDtimJ8sMKVR2i",
  "key6": "21oWFNvY79k3QmDGXAWmjRWnBAX4PCBELFEHR1MvA4pDsXqn37A37rh5Wi3sPV9dK6PxezZD3xuhxLwNi5GVZ3Fp",
  "key7": "4yDWeUXtHrLAtNBJbSQN3WCPFj8RJcaUUiuWQJuzPjc9RNdxiAkxwHx5Wb3fsWX9tPSybH9c6y6KyFQVL2zkKyMX",
  "key8": "bH4beztEYfXMYrysXetGtVsD7xUthyCwoFGPtaQapWqsh6zd8Dge7Grn2wtHjgELB2VsXXBvWpe7BZP2f6wJcP7",
  "key9": "uKGoz7LQYat3CU1drrzv14z2KYfGpocYQBRAvhyyLfbgmuGh3FaBype57CCL2pnafbdtA8ajStUC7zcUDAj8BtZ",
  "key10": "4i5okn47E9Ceq9THWTkfRNFEitjfyGU6xBuC7zthnpLNbdNCeAveUucZjMxy2tPJY4JZ9TK7cf45JDc2WjauA89j",
  "key11": "4iVn8KnZfmKaKzkKG6bfFHzi8C6Lv4Z4S5WzhvgMWGQGbEbUuCCaWoCr8xnabFaHAh3qMxAYwT24gWPxii3b74Mx",
  "key12": "3RZ5MmLWPgjUFP4qWTEoDA6EAm3NhHzqTJf91UM24Pru9EtrLePeVDJE2zTDyiZpbPSGNx1JjBn6UW6Z4MPB27sE",
  "key13": "531V13dEWmZv5DXLBv8qY73LcoSQNvN82hPTDzKmNZgzhmzHn45CFpJCG7xX44mooHSCCW9GoDDLHs3NeKSWaJKk",
  "key14": "5ZkuZVPsJxwPYMLyRyiY8LZ2xyoSDu8zTuwwfyojRiR3iGhL3RiaBUqFdssWFLRFWS4edQCjzB4ufBfaJ67uG1J7",
  "key15": "3DbyLTZWKyL8EvYQa2r2qpPUzUS6tUvfubxZyoXa64FU2Rdyagm5jNJ1nDdSTBfMFiVYiH6ydSKwg22DZYZpoutx",
  "key16": "5K5Zvjdt2fcyp7G93mem8axYuP31f32VB3jmewbiNwouGQeZ3hjAqmqnUrxEa8qSdg9RyvgN5233cB2yzGui8Cns",
  "key17": "49tZt4bG9HUGQasAroFSjNFxdLC785b4tEmQvMp1PBgf6zoLkLqPoFbgRztrh6tbv3CWNVDsiQDEw1uzmGhtEXXg",
  "key18": "3HWSA2x7gPUHAHk4PSikewanwqs5bYeRB4cXAthn1z29zEi2s1TSH8Zi1A9vt34skkkdw1ddfpp9vgriCAL3Dwdz",
  "key19": "2A4AFHEfzxMnC1h7KqMqcQnCciJwtHiEDtD6yQggMX3FJZn9jUUB6JWm6Vr8KkZivVVrD3z3oYCG986mdsNMku8Q",
  "key20": "QPKJcdxUVMQSH4AreuoQXf3D87EWXhM2V9cYFJn9LZdu82iUgDPSaE1p2UhA3TPhS54aicuJXs4AaM8WpqoHuw4",
  "key21": "AFT9n1cg5nxxyJLp2kVj7dmeJTEfZ2e8kTGvkwShvLRerFAdBh6ojEB3qcKoe5G8gM3Eqz6BswzJAg7fK18TWHg",
  "key22": "5VQcfefRBZYDSY6MzTBx5J13MWyNLPiZeKC1xFJ3tZHhv4T7jYcS8DmPXr3AyeaGAdimPFrwEbQkptEcc7C41P1o",
  "key23": "4dp2ZqFPwq2XPYd4w7V2bC8zNhq1TtDKQ3RgdLuFVagFDXicfymB23wwXvaf58USaajZathhQrfg9pjnzZeNLABZ",
  "key24": "3yB4Qxc6wEt7kmBxX7K1NEN6Hdx55v4UdUY8R1bJb4WKiy96gnyYrpSvB2z5MTgjAQ5Z2mRkng1UwxKAf6PX8x6D",
  "key25": "3y9yuZw7dYsc6gM4cHK9GT7ES79ZpbTnBm5H6Kb9kC6WQSRtfkpqY8eu6vdQaw18815eniGXqwTMMbUyxMvDvF4Y",
  "key26": "5mRoMBe4aaYkwpAzRJqP7RnsKDxD6TbcsmirEgWqzKWCQJixAHcxRNH9Q6xT1iAfmf8W1FAvC2wGyuo8J3Q32Awb",
  "key27": "4av954KWSCoW3JPnVY7MpBn66gz3h7V8miXKMHpwVDGaUr27NtcnSNkTVc7vPqZfuzJjoUcyu4TR9TRk7nHEUgGJ",
  "key28": "ZYjrJ3LXPS5SLgsxab7rqM7eYKu9QGDwkvoVNeAvdUEHxU5u7ECCTpBGH5aWCqX4oZxgUbEQVMzpVQ4FpgjkaAd",
  "key29": "JudGP7JhAaRJ3G8LZZh8mX7RM1rLvQppA6851nUZz8ipBVW8c8nqSU9XLqXeuejmuGYXCLW3UWpg1qLPHuBQNQZ",
  "key30": "5CrCttrozszz83Tf1SKVsu6LGsRCRA2NJz9b7NjyHLsuAdWQnHGJVRdkNXW3MxJUkBWgFdfifsHnkZzT59KSv47u",
  "key31": "5PmD7G1524JwTstnAmk7AS7nJLmqQFnQ15ha9dZYMYqyF3oZ1LGqki9dzcZ7u2jtwbbFTzYz1toBdAS716BCR8qY",
  "key32": "2QoLtXjKwRHJsgFF4Y5z1cHz8saVk1DBhkx67kyX1Guz4RQY6EzpCLPueWYw9hj7pbtFWFLQHnDvqSe8DYDfxPfV",
  "key33": "v7DmzGaThvvu7EjtFv2BTHHK1pqEWvWXU2xYZiCXVe28awm9odf7uWmCCN9Y4vrtuizurcbrzW4bK9gxNKRytxK",
  "key34": "2CyPGN8cDpKV9xpbCbbPhZJcJPn8jBVCsGW5FAj1hNWWUNzvwSqZosjQaK51EUFNTqmBYDyk1iUoWAbyXkYHuVrd",
  "key35": "5NSzVqwRDSTHnSgPkoKfqqPxcJ3mo6wwmu3HSQPMsZfADPdtJMEPfEv29kE4ZvHfyWRXXyjYLJwsrbcKE6gYb7pz",
  "key36": "5xvyih9uMB9yfk3qrT11RtnSbLPVYLWwUeGrKeLg6yRvwEhy1Y75UZUPmEZ12wPn6JTbGLEMzQNoFpvt9cqPrjcY",
  "key37": "44hfCpFjRWQAnrUPR1F4m6gZ1Ub4haGdXRuDAzNfuvXm8AyfmjDiPJDRK2Ts3ELKbqyFWBBQTcwt1tiPLCL9Whnz",
  "key38": "ziiLAt8sfocmoiC7CewHUj5zvQ2c9suanQa2SbEYUgo4qEBRerRxpozg9AUBCEiMYbzvWjMimAA58LpmnM9bg2N",
  "key39": "3XWkKSiCGc1tbMeHsVzCeTjReN2dEYW43eKYNEQJAop4TNor34kP1UWzpPAVdPv9ADEEwRnMSNKrZymJwWD6LNaE",
  "key40": "TSMKxNqXh1zCzLsyLpN8K982VirSkZAbuPJbZhWp7xpjQXK8rFu82CwGB87b6R3CcB2tozgCXa71hTCzBKmvbiK",
  "key41": "3nKTqxWoCGDs7hxX2WJUWmyyYMDUdevcvgCzhz6JZ62Mjx9dVrkf2C6sLYdEbhTUzLnxpehvhgG4YAhhEJC3RMrU",
  "key42": "4w6bnroPnutYSuoqwKX4Pz54sKxcSEnZvc1rP9qytvsGRdF15AtakGA89XyA4SDwtB6GtSFB2h2JFnjDJbzKabJV",
  "key43": "4YFiWxsiEgqWzxmPSaUUeVevExZVSC4sdvZKYa5q3drPi5JyAhqS8CpSpeahFsq9b3Q6EX14841KbeRmk9tbqjTg"
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
