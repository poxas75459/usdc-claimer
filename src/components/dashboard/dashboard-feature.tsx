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
    "4fWHWN1GfAcjZPwCe1sBaXnoV18kJ6x6njUawxULUrfZY5Cg8TEF5t7Rdr1BuUMhpxWp5cnt4tMm5nnCQHjgdDDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36RDh2LdY1rxYGczB27ikkyUKCtRs6TTQ5wqnW7MQGJKiSi2sT4g15dwWMF1uwn9KVZW8TjkcPDdEvdVvusk1ets",
  "key1": "5kmjK8uynN6auixjrGLrhfAntXLpywPdeqNfUcKRFzYxxSm7f7hKV8vcYDqGfgubt5BZoqeygo2LRVA7x8ZF32zR",
  "key2": "3uX6nm5yLXcCAiaBc26tYJ4cG4mULGh7LT6Rn6g2NSpnzGjJStGWE3Q9USHB2CadMqJGu2FpaocNpwJ8tKxgM1wD",
  "key3": "5D1aWdtLcJy2rx6unuo7S9Q6MigjSiU4CnwYqitQ52pan51hZKbJygfdstcZ2Qh9LhnEhHPunbpz6cLJXzB24sXj",
  "key4": "BYbpouzQfHUtczKrNHaFaDvpCsAMmWEXo1fAafVCitt7aanQLppoZApKkHKQUsMV53zSKiGoGBK6mQfMRaKQTCa",
  "key5": "3NtxqESS13yN3wgie6wtHZfAwyoSbvmn3qThocC2MwdbcPoXPCmA7MTQQt4w5NowcPSVRPFvPDfdb2eQqdDHNF4c",
  "key6": "5977gpgad2yYBSYKTR1kELmT93kKWbiB8iADgysMeQcuH68ETDnjZkzCnjUd5Mq5BaojsXTTcpbxYMtgtqznGvMR",
  "key7": "5frkDCMfFoPe5ovrumqCDXPeqfCSKRMSjpQe4rRmbREc6a1UXs1HRmV5ksjUZZV5U5RhwmKo5uGzxdbzYddexVSC",
  "key8": "5nepmcUYcgxd4iojT47T3CLBUKJCb82VhYATQjUdoGu92xgfzvgwnXirSX7mpCefiumqHS5y1WYTWcZm7wBgehp8",
  "key9": "2RqzjKhMEVQTzSbkLvuVJVhSordCoV7guFMdys7uZv4VXGTTjiQyLvpaGV7PyzLqpifhP738hEN3abtyheVneXx9",
  "key10": "gK9kcxpjpLogPdkvTauLBAdPss53hhWrcuF5umfj6MCkdW8uZQv3C38FHMi6utxGnQR1zbsZ2uc7VY28pWHXy4u",
  "key11": "4dskzdgtvK3iEmAUS1CZ5A9dicDUYKHnNVpGrNM4acNZvrkvJiHTcS5be43XaSKguT1BpbPNXyGomsWiJ2o6wzhB",
  "key12": "3BQZhf7a6MJxXzVExETfh5tqPfB168bAZAGZTMjxTdXcLMqKHqTfBTcebAPHJZk77Dgwa61aeoe1RVWFFo91v4Kx",
  "key13": "4A9oXhs83LTcrCbP63WnZ8r6r6srCUgBimYkM3HEsAkF3iTkVcU6qtYJresDCVSwdGWUMusjWGujhVCKWMgtPHm6",
  "key14": "4G9Y3yp2M66KnRnSxcohRx87ofXn5TnWxYapMCW7vwmizHsAv2rej8rWHP7ARefeGAxgzjaWYfGAHpeRkgVPZ5Sa",
  "key15": "4NmQz9eCi2btk84ifCfPg7GNqFUfHVf9cTkR31D7yu7J6PXdkk3fLzZZ7gpDCLMVjDad4fR2h36nqjVXprGFhNH8",
  "key16": "5Qqr8MHWYVDPFytwjTjTXBxGEGoaUnCSWwwwiV5LrpHnhudHedx78kPFeFh7S54ghqXezcX4WQoh2wYHRpmWTHCd",
  "key17": "5ewsMojqLg5DF8vyypRY5L1EVXXbZkoxgCPGFVLv8mPk21AUEAFJMcMpSzjvXBf56EJHbeET1h26QauHetgt1JfM",
  "key18": "5Knyz1tdGUnauLABixJjHXZJWfW3mUf2t7gDkG2kHZgqXxVY2grGD3bAtKmSsSXYW93jUDHP6bWwEmnVadwHamTs",
  "key19": "y14Dw8QGrkLucSYdd7zGUmLg7f5q4j3yKH8muQRLAhe2cDPBGq6PwjmHfxkW1QkKtuh4xLFZEbh9GtZj1PmBQDy",
  "key20": "3Rs2CHcgZJiLbCH2XCCJLqjzk1jrp592emsczDxVMPzBNFukVJ6JfLyVYZxNZTHhzYqDgaM25cUf28PTVMrJ4aqU",
  "key21": "bgp1nYMMzu9XN3vM6m8vkQ2rfYt5V3XN2sHrgXZ7kkZ6ihe8puSGHyN4AUx2eDjvGSxViLkZhwfWPshMeroQLpz",
  "key22": "547FRHNvxitEjpsbo2btjD4JhhSpBomaqMuWQ8urq9tYuVkevbfq6FpN8TmbeDaZGiyEhigR5i5EwLJjTBmPScqX",
  "key23": "44VVwLt5PzksXBmkMGyPKTpot1ek41ezzwG5JkSZ8hu5Kp6cz8ZwjNQhn5MUgLkTweYZw826BPuLVWmPTdhU2FSt",
  "key24": "4P5EvmNjQyzFYD6cSZApjgxxJGEUbwCr8vkm5bBu6eAodH2DHmaBeYtgaKNs4oCjAmeUhVntGZjPdPFgXSJu9KnT",
  "key25": "EapySWLNp3LUr93Ad9FvyQoEi6xgyM86DGttEEeDVeLoaPLyWDLpZphhrSSzzJVrdqS2vzDzEeb5VsVd7uEdWUV",
  "key26": "2B6JhWaf2YCaMEXVggRmKRd6pLePYf3Kf2FPm5sBycKvKoGop6NDUAaGF6KYT72uyJRPLVFMxs9RbLwgVGbWCk8A",
  "key27": "5NfJGRN1fEdJnEinaxf3YaoZ3tPXXwEbGgqyEcnMFdUj2UhNWVriatYHHiqGmU2HYtPTbhRaJ8tkXE6HNkxAh9Gd",
  "key28": "5zcb34a68mDC3j4LJvg3thgvM9Ute5kb5RCaMs5pTBVUdeu7KSzbvJfeCtj9pi6ASGmXu168B4xvLHewvRguZfXU",
  "key29": "2cQNx3LzveABw3phTSYho3FkNnMKEdgdnjLneGYMWN9rtkLibKAgqkmGi8gDJLcrZ3vMwr46UtTpVFVf1GGB2P2M",
  "key30": "3FDBPEPEyW3DK71d9KaSGD2yGcPndhjy4nPgMjFBicW1HA6FrTq3VWBSXemckX2NtRSJpc54pNPb47Qryc5TmcmR",
  "key31": "58A1aqEGHQTzm8GAE4AEgwxautWv7hrcQpBzF5JVfaUGiHZcaQ1CshvDTpiSxuan75zk4dYL65dRANZexoRtfyA2",
  "key32": "5ufLeE8e8hciU1LoRoYs9v2T86uaDsoK89zUkuR5o94p5ckyntMu8cBiFwoFJvytzxQ2JtpX6cDdX7X1a2TeDdxt",
  "key33": "656aeX4MWvZKUC7txiFNxvvVyy9nkWZaTWbEWkeQ5oDfTh8EzCXVzVgGh8DGdmba8An6QsfkjsUJymLKcNaGs5AS",
  "key34": "jG7nwqV2ZYuXmAHufM1jLwY6yQRzoiG1xh2ZEJ8fjr5CxjjNuMiT7PhWoXKBkjMJ6YWpbg9FpV69dtZreAGMx3s",
  "key35": "5JFifnyhewCqeTbwywooDqLYv7d9L1D3JNPaVtRgmNpNiguwwU5Xfp59HyByX1bxa9cH99Jjf49TJ26YmFiU6DDL",
  "key36": "42yzXte87cUtHKyAZdDH6MtD6MA4hJNUmMFZB3YMxSzfCjwRPDWmv31Gaf5B5xi7WVuTQgYowyHPjMu9S5PXtD5H",
  "key37": "5rvdev6HoQ4Xrr8wRviVEPHcwaLA4euEBLYa5NKX6juZ5M8him4H31HbN847AdUq42KxvxUFrKm6RmY91VJaqBux",
  "key38": "2gTAWuKwbsSSkKh96NC6t9hVZLLfZWpQGfKW1DuUWXQXcm66j8HmNd3DMtJfZZRpWK2urwVJKbpdmppN4pavWDoW",
  "key39": "3u23ExTyAUZnSTch3uqiozuVW1HNFrNEgac2ji4n9grHfzMuLhThPbf94EEpaTjsdhkaMwdbtzcJeuJtGaDJd1fx",
  "key40": "9fvBKVaRT9A7isJ1PZRW3hrDqiFigxz9fiWNtTXjVzyTFEgp8x5kieZ1UykfVpTk9jVdBqjMDQaa7hrcvgLDmyK"
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
