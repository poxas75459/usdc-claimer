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
    "4yitDY4vpgh6KgvNbLUQsZk6ntpatpzkPFwpxReVGvHXjYQ8oyriBMQeWkpeSxQLSK7arNunXtY5SkLjBeKFfXmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jHgyLhqsXA5EU9S9HpCqk9gqWH8mK6GkmRghD4scP6CSPC1NQG1EvDvJh1fU9J3g3JHD7n2D82B5KTxE5JZoVsD",
  "key1": "4yP46Uf8gqT5yQmzqKyRWqPptdhEWQHoUP8JgzbKzGuEsdkkYPEoFH9frE4uJMqFEBbX6jjhqJcEivP5cbLZxPnS",
  "key2": "3BLdmze4Bund6d6TVqs7WKFMM3aMhM5hhu6sZjeid3gk6FMcX1astAGNMHbf2UtDi4KGaDowFJzrfetDnScsDUkz",
  "key3": "4FexhTHYsATEz6byFmxpsjPVHpFtU85tn8xaHpnSFr9grFKU1WWfLQPUNF6AQYkp9v8VwzhYhFqpZjBPbWPFKtvP",
  "key4": "4wtkujUNK1onp7yQYxzLbDXa7WfxJ6SY7QZMMuWxyi1u1khPoTL32xAuLp1Uc7gzoYDxz9spAwfM39p6xSbF7UvW",
  "key5": "5JiHyTkLehvVNKor6hk64G5dKqCS79AEvj1pN4RX1skWdhVRs3V4xsomPzVSJdzh5WhvhYELpKZJicbbwJJdWcum",
  "key6": "2QRofUvJz44pDnyvLi8xM1oroSUTTENiUWVw9yykkobbtdg8ZhSmeP4o97kERJ31Ratrtmkq635XkQA3fCvJcfWk",
  "key7": "3uuM71shBU7KeUhxKV9KXcV5V8JSUiEXQjJTd7VwuqFbztsApE8LSiU6uaFdFzd6NyMqNsekgTq46kJQHpspykzV",
  "key8": "4bescZCeU7qZMWxvRQychn4EbVYfULrf85RXLRNpZa1VbtV9TnUKT8qxTAujZ9YaXUX6U9UQA8z1z3XbXHtd1oZw",
  "key9": "21rMPFBxyANuk3mLvjCogqgjUTeS3DGRuMKF9ch2y4A2a6r93UDMUuw8xNNW3jgk7ohBw5ThpowPWtK18RudvxaG",
  "key10": "5bEKqJCTfVw2eMuh2GNxE6ktqJrERSU8Jw5oPDfufuhvbsdTnPk18wu7Mb9GB8gutcuqdE3U9CoR1bNcP5AYx4iw",
  "key11": "2geDGwfeCBpQWh2cKLrtSayFUGaPZZKSqRvkLcyPcTP8wLfxz96pSNHjM3i61uehoJEuPcdaEYRpa7kF4pU4S7W",
  "key12": "4oshj5yHAnkBhL1b57DHD1BRK6WYDW7PX9arjFH4cgtjUiyQEAFbQnrwVsJW28nNABgoMLE9453hZT2MLaeD6kwT",
  "key13": "2XH7KRmJpJspnomC6jpER2uzWfExLaSQEZK5tK8JN92pvuRofLUHV8Q9G1BY3SYKkbjyHHCdmNbwMvkGSVzTfLWM",
  "key14": "2JwPMfRpdqAcAC2LLz8i5n3UtCtDFPNfczschXAznVENLPYRWJ2RFX7VK7yiMGJA5KfaRZqcwiaHL1tk6AP7myt9",
  "key15": "4Vzwvh8uTHqt8cC6L57Tiiv3Too2Sdjc9gsJhMn4khz5U7Ry5hUka6CGVABU5ae9JmTssRPzop24nnq4qrqyKU2j",
  "key16": "2xXviPFeiii7b46ew3ZssgEbaAEwoGrSk6F8iPpNXbge8moNhwu6zvZNMEfsPx9GhwCZeTpo1cLaN7hnfv9jLQ8B",
  "key17": "h6wQQp98YMXfXcwauEonQxPj6dbf3ZqFh63QuTEFh7FWt9rtrC3x3vxzzYsJqxcr8Q5AqSsgZbcxRt3WzvHsUuM",
  "key18": "3SzioiiswMA7r8D9RF15NyHrqEdhJmVt28ytFXH41zq1yRUPvUXoWvzf9CrZ5gsAYLjvFmoFsdmiCCCmdapnyhxS",
  "key19": "KbCEiRQqqPVj7Ur2AqLmhD5F44RHHE5sNi1FrjeJxsYhgw9LwdedE329YyC3ANWRp6PXdfe2W9KMGS5hkvyw8qS",
  "key20": "3MxjvhWcswxZuNwewBC6rjmY2QA9B5bSRLY9MqVavoWVeW3mZdytEmF4SGbPkCR4qdSscqLYgoVymXFYuRuEbf4S",
  "key21": "4LPhPFSLxPkEw4fn3T2GsrQ9SYdgvYmaxTycPFymZpcotLzop4tqVeGBpmkL5TxfcAwiLaVWLXRkiGvWCm7oSCie",
  "key22": "3ATDWeCw9zPAcFKoSuMht7VYUieXuvkRWjJ2fmPLJqYmFUMDR4C9AxQXj69yoPdC2fUTxFhU2tmuCGuD2Jgqg4Cw",
  "key23": "4odeoALNrVensVGiWGFKe2gtisvZRQfXGgztkgjD21tr624CkbaYpqyD6vrv4jcfSCxM66ph5anm2zyKQ9Wvutcx",
  "key24": "3YbJoKJN8FymYvk9kYvdBH16ukeG7pG3iHGjBqcYyxPhXDFtJqkeRXNhXvrajieoQEJaFQX7ue7r8eTTkzZUcFyT",
  "key25": "5z3tW5mSo2v7ZGykExu4WvpYJPNtUTYogkSf9nEWnwjnBP9tHXDh6g9acMUi6R9dSsMwvf3FuXKf7hE7eRYtuvE9",
  "key26": "5pq4V6Qo88F3mEfk8p3LESVpRgKBYPKCDCgEFcBUdAKSq3wqma35KB6yaBWBDRPHSvHBX4ihkBiXL58yNxQXY8gP",
  "key27": "54FmsxWTwv9q5WTBmrW146wjCmWWRj81zGKAti7hqV432SBqJ47NtL4fGxzB1E9m58pmFsWJPuXhXvSEVEFKuAVU",
  "key28": "2dKgPN7zV2savgD7279jwxYP916bczGZb1Z5dRqBhZ6U8jiL132K8Jnb1X7C61qi2xSs49Rs2kwpxP6jmb6gbSMV",
  "key29": "mG4Bh8SGMmhHp23HbGrtsnybV2YAK3JvJqSmvozZu4evymimCjWKCyd5fTCzgJ1nrJDrGKvDoP9qTqPC5KZ55Ew",
  "key30": "5BSKyvaeuswBxzSxPEp5ac2gaWNq936dxMQYhnnPzRtMJqsuTrwfDDubpDamWt8nAurM3TmEYSrPF9q7pGo5BqoS",
  "key31": "2hjgGABgrKDhZxrHsZT4R1x8bNUo3zhi1pzYzpF9j3p1QjjhAjjwRHDNw97UX1oAFzJaG6Z1Ap2x53riXfTgeo1P",
  "key32": "2c857mWsTSYNnbdqEH7hmsPMcx7qN5q668eKUCt1Ro5wSY3UY8iZiA2nwne3n4BHG4Wtpwvy3dXSDXjoMxNdQzBL",
  "key33": "RK9ksXMHw98FaoMuZqet8LSq72jtaUYY1GPrBitjeqMJcmKTTanWLoTtBCEE26D3cfdrGjhshkDHz6dTptd1g6M",
  "key34": "2wFhhCALVdZnhXV2m69MoPLdiBhnVn4UEyJNbGf9nYrFjpG1i7akLcBf62fPTMo5TiHaW1VKouLqUDuWM6UFo3B5",
  "key35": "4MYvAeXVVviQUwWRQ5xFQRWLBqwMNJqAvRk3ib4jkw2CLNeGA4qTcvyLEfdVRovmQkSSiwRUmVobyYDJEhxbx71N",
  "key36": "3s8FxvdmFiYaP3cq5rfYqbYsWK4AfbhQ46GrYVg7mSCVAAXrKLVNPARcpwN59R5JKwWrT1C3R143H4rNXYR5L891",
  "key37": "4ywYiTocKbGusA6hjW8CBUQ9stoGXHzuFbFzp2xnhJXarMhaQoCcNgcEWERGaSzuAMkk1jZddymM2WjaxCAaavQe",
  "key38": "2nRBT8dd13WVFRnkGD5rvYUb3U4B9mAs5d7WPB69q32aNGNzPKv7PCNnZwysLe5YfTjRRojoCTPJxL59M4FXkXwX",
  "key39": "3aPYUq5VWJwwwW47xbjmkACR37oAd9mNLJJ1D2VBsHjg2hGu6htix2iMJxaKf9DfYgBB2HCjG2iUKCV3vypEKgbm",
  "key40": "5ssXLzp27mzZhAwe1YhvhMeHDrcNEBbozv3RhEVSeNFYksnpMfRzjGM56Ejwtzf8AYuYaY64hbpqBopfSrsoMPXE",
  "key41": "2LTyg6BfLFWJxnWQZgH4Dagomm2tQf3aka7XPNiSyGHia9RRXEJ69VLSZyGaVNNPGK21E8CJWoCwDVLzK7Ph19Zt",
  "key42": "oTy141gaFeoVmknYT8ni8ftxTbFQeSHDKUonFB3eLm6gixeYJfF8bGWuHj1EVwvrRnsh4YgpzdMxQ2ZY95kT8fD",
  "key43": "47FBByczqvwDecGvZXpwEbxrmCRHgHRekRTMmCTBV1j8Fv55pu8Fy6CHq5D4kqakLsjAAHGbYWy4az7UHdJqzCBs",
  "key44": "354FZUfJMo1igw1Tc5LhMkLQXEGNXKCzhF3QqQHNTZqBnZYaq4ftteax6kWVLuWUtYP4qSAkAx12Ca9diC56XBmT",
  "key45": "5JwVty4FjYBWzjzy6929vR7Z5JGUcduFhNDqjWTcE1h7iGEFJEsFydpcx22SfsQreNJ5WfBsdK85rh741d8je6hY",
  "key46": "wP22S9VWbtM536adDtg2MZuK6FCwPks2Q9ZWEHU3rY2QDhFXFqTGHuZAM3GmtGmgfwwb4kpDEQEwaQR3VrWW1UR",
  "key47": "6daZxaJVhNfMg3GsT97fqwqnpX2suXcPuaLdA4UEdqgiGaajQ94zCTYJAA3iuysRV7ik8vdthTAQ11GmnenJD23"
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
