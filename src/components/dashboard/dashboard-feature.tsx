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
    "Va5WoC4TW8YuLSrNUwpAgC7BypMgc5bkGFBFFbw6KrBFhXEJSZF6kPpKVUh3nJ6mTL933rGsEpjaQEpcN55hwQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zbmArq8kYXTkHY69Cv6Zewe74WDbrS7CMEm36Cn473tzuZhdQZn4NjX7Et4jf7KeXh4hZZZr3SrXT8Wn1LuQZBg",
  "key1": "zch7UqmPXSj38LxjWTLtG39HjagKVhH2kJtdiQt653zKzwGqyDjZfx2LjPT4NiWndPVBrFaN14tNh1JJJHjEeCi",
  "key2": "3pmN8XfBsTTATHmgX6WTZJ3UAeuunBWeTprixGmteUBMZT6kMr8sQaqjYxAuHc9h2Cmw7CFDpxfkHcy6bvEHtCXb",
  "key3": "4psSC9uJTrGAr4d8MzBvdMRcs3365LaJC2ivro5zw6dLHzbUigt2aXZJ5Ak3VCCXmQANfzU9iMFafUk68gRPkgee",
  "key4": "5Ewjb1bgHdJEEnbiFtyRn2wpTiWXo9HRoK4BvUqUfsGWz8ikpwFTTt2xp4KhSsr1P9FhKyC3AecfDWTXWoew59Tf",
  "key5": "3hwvREJt16LFZKr1yqwUaCq6Lvr6wkf9yX2aM15sEPM3Tt6jzB1t6aZoY3iGGxgfC2RXai4dvzHQvcHxzVNrgbGr",
  "key6": "5PPaWosbgZsvTGu7xQJ4gyKFq8HTaHf6PpUjpkf86s4mpJFZCtwwmbpPbNZP38rYTbsNY5j66Hi9SRaFWN2fCRwZ",
  "key7": "5aDK1hGgN8EbsJe5Bm1u8TEg1kx7ADgtYZAL7vpb7AySwRVAj2KxVuneStsaZmK6aZn6uSj4pN2jXM5g55gRBG1H",
  "key8": "2WTobVMm2z6PHaKksHjHWYB3JC1b7c37BfUwds2vXMN1ca5PCqVZ48d41kU8SMRKgWq2fGjmFFvDHdetY7Gpq7We",
  "key9": "5aTpBDmE8P6TEg3s5XG8VXD2N6ninPRqvB6U5bWjd5X9Ryc62FP5tgjkC9rw2j5AZ7QBPoKDxQWKL4bHfUeX9d7n",
  "key10": "3eNJcuHmgTQ3S529p4givSoqQK7fx7qhDsSEEd7uwFR2JEGsHexqdXBEws4MfJfRACNNfbHjQfdior9NRwsUmK1S",
  "key11": "49md7xry4seYCF4p2Z9C54khz4b9v3bEyN2qnx2uPka7Tgnp92PyBey4Fcm7E1mdiaxYZRzCCNTMHAgxqRrd87DP",
  "key12": "2Mh6wbcZ2dPyS7KPp1nKH6vYP5RSgiuptdmCfA9VicHnjDuPnfb6gMx72ecoNKHkwXqT6UJqokKXEzrBejGrKMWB",
  "key13": "3i2qJL1eAM5kazLHNqyxAquK29W7URT4eKF6LZFTiMbCtzewDUiayoWDeZ9exdpMLjFidT8BbR3byi1crjQWUa25",
  "key14": "45hrbdMoc1yiy3GZuMxab4hkU7xENjMFxtHUuHPtTqnWv82iY9NWDsaNtedSAPsKCme1uWo1u8ps7CWruYEa7MXX",
  "key15": "yiJtvYp9kzVBBKUUFW65ymKmwpGmhMtQnncVTmEX1hwGE3T9DaZ4SxWtSvRT1y3ou9SE5ejdLb2AftJPSCqve8c",
  "key16": "5s2eJo38XFhNwPevM31q1zjrxHFQxdEfGbM2VKaDhTdiKq98YaBVTrhkxV8zknAALSGeneeKnDH9enYdZBbaBkNb",
  "key17": "4meEyBbzVoTp81rWoL1qEPB5T4uaqDL1KzfmXdgTD8w8FXh8Sg2Z4Du3zNGf5JMehMeqGKyDCzgonMjKRjv2mcd2",
  "key18": "3bWUop8hbDy9YmvTHEVzf44VcTR2f2kvmW53hJohuZwnXZikyvomqCwCaQHLaEAXtzkNGWzcQpLcNTQqBXoLTzrc",
  "key19": "2XqCwHUXmrEm1onmNAQk5csc9RmxXHkzZAQGrqio5t5ZH7XJZKg7y7Z2m9Rf4QRWy5AKeJyjBjTVNSSMsbjq9YpH",
  "key20": "3BxHz8DUbcL36t1MbNHWb1withfFj69H66FiSSwKnD6tgYSbJJi1V333Z3R5qcepRC4CPzrt3eDBfFA9vFTn3RPU",
  "key21": "25DniaSAtyCWjMP8kTn23mp2gLdLwBji7kMoZsWnrwnfP1uctkvakUsoegtm4xghaYfVRRvW6ZYsRUVr6sMjU1Pm",
  "key22": "3w9GgiNPkRxesivBB1KJuEiCypteG1BSD5nEuEYm6HAg8n3NUPZQZUWM7PD8AXog5qLZyD2DAKfJV4KLtt8wgkej",
  "key23": "3RKAL2qTHaq7rXhmKEKhLb5CUA5Ydh2EymbdL4URqHPQAWYduK1PgB6C5sz1Lcy1SxusKVvA78QF8Ww7TezpMDf2",
  "key24": "628PKYvgESdzm3LeUas2Jo3icYTQqozsi3k3t9D6v9z9BL1MESu3ds1vLktk16VtXh6xoFZUe6yBbqh1g8zb21wB",
  "key25": "4rcJr9Ma4tMEXL1KiUfzgcdE3tQGZoQ2o7y1sPqARW4EeFqZiAe4Czy47KEovTcD1iwvcAvjPBYp31Jw8ndMSoxL",
  "key26": "4jeWF22CnptAyN5Da7kRC8CEzfKPi7pwNrKWDFmKMuWH7YAZiD1J4nVzSqhDZvhjzBQKd7Xvs17Mgs4juBQSuRQN",
  "key27": "2rv9h4ccpRjxMTmbuRJdjrYV6aA52y1JT4NQ27d8St3ZUZUocT6SpStLDjupxUPzyFpztbS6CzdDypyLjLTvjftX",
  "key28": "66ucCnG9kR9L4iBjF5cBRG4FJxutHrePhXV7ghr3HFR26BNr5yP1S3mDe41wkdhP6CkHVWj7nNgcU4WYtZr8T3B9",
  "key29": "2pNzQ8M2U8BtaN9W8FNNmSW3s8hVPyJ7GUGqpytVJKcTcN6ABQCsxJrjEyGWKXqiqKQLiaGeJANV1JuKGxKpfWeB",
  "key30": "awFjUeYxk8SEDMG4XneWdtJWdQxgoUxFdTPzjxU1BgATP1WYRLFXK6pyRLMWAwrZKeCaeVpHTN6RB98o4gjCcZq",
  "key31": "4p28DRQRhFALgvyvxvbWjNDipvWUaLyHScU9PBDcpxipFPwF1FpdsQ16Lf5Nvwc1CeRuaWG4qgc6ewsEyksirjD5",
  "key32": "MRyfBVnwLv94BMHbmu5ewHkzKpDxdSRr3GtQTstxWmZ2EhdyhnwhAjgA5oNsZugzGQsTuu3vD3AmRe2tbNJmpTd",
  "key33": "2WDd5JWsuvQaPBCQUb63kWV5jC9U8bG2xfUyn64DqKzwX9kuxeLcNkBBdDTGSDfZLAhd4QXZUgwxuVyEoivCRiMB",
  "key34": "edmT7ixgvTWSFhoV4zZS8WYUmKWefSijBJuFUJCbgredC3PvpLQ5jHLj5K4xFfsqoVAgw67UtdV2EUDSPwJru5x",
  "key35": "3XoGbmQZGvnJcTAsT2tuu65JCafQA8ZN924FmBmfAkqDsFuQADMeR1mnHGVpZh4pXweARx46MNvNKaVfbGYajkcM",
  "key36": "4nwwmWZziJAgEndLehCRTHf7qeaXxHyoaEVjrE44u6PqhbUy5w2srUUcYarzH68v5d9hzpTbH9S3Kwson2yc6y2C",
  "key37": "4cTEsAiPMspXp2iDrwnfsZ4HvxfevcPqoBCKAfhWh6bf4rA2bqC8RvdNPL3MT2wctzyDqQyC9frtEbPiDUKcAcQ3",
  "key38": "3HWuhQt1LnhJrzxoKCHZ8xaAY8mkVapxN9sQEbCBxXRVKuUjgGJfAnuYma8PK2y77ETBoR1a4kD9pheyes9bFATY",
  "key39": "3GaZfgMG6j4LVg7st8xKjdf8kp42qFFsooXFBf3p1SK7CJkTCzjatCCx7L7f4rktoeAJTLzEFAMCz92BQpJBFPcd",
  "key40": "ZMzpgiQzNBVg7LuHZ1pC2Lm4WEUNvEoFEw72qen2Unt1nnXU19uBSGiLUrgowhduVZj7ZbG3vPsxxUJ5uGYj64W",
  "key41": "5soDx2FAfWoPNYavRQpTrFy7M9SRWingzdjtUA7ThwL22JhczyNFyGqghJnQsLDP5fxqqLaUem55V793K6j9Qj5",
  "key42": "2TT1f8ZkF2qpS1o3QDRcRumn174VU8kthCXuBV88HVkLFe3KpBKmT8quKUVyk4DesBEaWHE5itvHqVadQw91ks82",
  "key43": "5bGvVKqu9DQfru93ZcRQDG4tZKmC2VD8nGVrKwpdrdHYB5Zd9mji8pJGK8EATMFnkGnqMYv56YT9ktqD54mW78mv"
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
