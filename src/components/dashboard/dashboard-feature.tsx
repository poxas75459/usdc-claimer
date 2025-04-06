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
    "4aX78DRwdQZN7V4CEYeu74S8extZioUJ8pzmwtJhR1966izQeYhsEXtKW6NLC2gvMf7HWnXdBgbcbqJ92rWLgWNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R2q162iJz3CwJkLdNNJFmBwhzEuAE7ZhMp4z5pw77vpZ3M11eWHTT6FT3gRW8Tb4GMNVUS4vQ9vguhMzWXscm4K",
  "key1": "2dmp7cEMwDh2GGr2Y5bVajBEcvHVnLe9PLMyf6eNDEM88JH5Wo6PtkACVPD8scVWQLHurGjRnJhrrAGeqSGdZp2Y",
  "key2": "3FYA8ysJ6N8QwbyKkW5Yi2nTPSGkAq9FxhKcHAQSrBX1yXXZ2vFjwnytKdHhYzEF62XBGyZgjv3B87j774pacFkM",
  "key3": "3ziSe9cLp4qKCYHuM23faA3VJEytQQD6ALQYucpTeznj1Yi1TZrBU3ynT6ZxFadZmQTQpUwfLqfAPW5FBLEeXiCS",
  "key4": "9xQp18CBS1c7eBx7qNuBL7m74k4QFKWVzrkd2qH56dmaShQzVC8yjbTRhh7QZnJ76D2gSERyk2vec7UESTPVYfj",
  "key5": "4rMwxmR3op2UgvR6qaUHEaE7UEicezD5tjxpks91YzPyhLitdyPXQFnBzCHfYrUq3wCqguWoLPQseWrGKeYcZjg9",
  "key6": "2wJScu73birncQGoHSf4qLr5Vv9Bex4cfn1wLLuZdnQJkt62pGkp1UXRN6RKwAyg9AwPjZREEGjwozBWFGQbKuq7",
  "key7": "57ek2ggLgd5keq2tgKTGqLr2Bmhv3vFhgvqRcFDEwkQ35CAaC13qMtCgRLJ2u8rvS1c17NARByU8BjAy2q1gZEX6",
  "key8": "4NUhPB4YB4gr3byiscqtQYQeYepEvzz7Z5zzaJ7QzRmmhGqXjEdgxHUgrExHyX1TVvTpF95yCwnTFMHpkk2WpqjZ",
  "key9": "5FUpLemHJWse2NEiq3sMYhCu4mKqynT1KMiAsZbh9nGUNRnBV3YzXpxSaiSH5LvagTKhmEDZvocDayKM1PNbeX3y",
  "key10": "3B8q8aeFpFyvqps4yYpWw7p8XJQActN26U1D4UoirvBt9xiD7xFzBXrxaKH7Xj6iZ5wtC3aMfZdLEfHuikgQMNjz",
  "key11": "5xtby2cyMB7EeREQnJAwBh8CoAkpTfSkgrEHFa1fdLRfc7b2EKhaMsqtGTgtrKaPbEeZ2gnYtpE5J7fDtxRJhZff",
  "key12": "tSggdhV1SYbLCj9U5H7fDjWu5RCm2deFBW78aiDL9L9dQsqFHKiXSx8nkLFyLiuA64me2tFDWeoKzsp2QGZDpZC",
  "key13": "4aiZk3aak7Fn73rSUwrTLaCoQXQjpiQ6aL7iPcQPciRdL8bh83VHP8rSpxpXoDbSxf4FyTGpjpEz97hUKTGzN2sC",
  "key14": "4UtNdhWigH4LjBMmiNji5KSJ6TwH26Zp5LcaQ3vwbdvc3TNwWjiAU9yC2xVbZU6regBiEx8zsGWGxmAbUxCh8Yhf",
  "key15": "5gihsfYGxWWdgm3d8BzgaoxycqMgzqch1CbZkJLYjb9g5zHfvxzWCvXdiEJkUqptHiRyKTnvMMgYSC3qz9U68gsp",
  "key16": "3NTP2fr6D1Zx9B9hWrkw6wuriDaTPhc6LsH65T9fsznq83r1mdwyPxyqVbQuXNoFF7XUmLVedD1jWEkKr7owvt6c",
  "key17": "QMU5SjL1zj2iJdNi8EUxQmbz7zkxoxxdjA4L4B4886Ctv6KJKfpMtWUvYDnJiHALXxh4Y9MhDe4ZQ1NRWicsXFG",
  "key18": "3yDnXHY5i35KN7QQRXcZYQDfY9vg9zubkqM2DyJXTpvatN1S4HMmayLuWyoQmmD5dMuxVdFsGpFDXmpuWQ9jAMFa",
  "key19": "4pqqqXgyL3sLtNQ8zPFAoXKGfo7wZfVc9udUCsCRhBydDN1nJeJrV5jLvfp9MuMnx6exm2Dmd6DcHkcRpmcdUxR3",
  "key20": "22HgKSin82J8qZNMNXD5UurewMRUFrbmQpJCSEBjEpU7dvM9pn8BiehMWjk6vAuGMugFae8qMuuXNTWKb6z16gSU",
  "key21": "3nzEWoNsAjArjmKBJ5GEcJYbFwVqUYemXAswxRRhYXs99cYocKdf31tggsopEmDcQrCeA2dV3Zgs9Bpkxy9vmBNp",
  "key22": "5HFhuBuj34GLaZZaaErjtqBiyNStKmrCwN9rhNdy23bxYLLwXhVcJjyxayVJJzppkWHmbbG1SU749nik9Q2vk8pS",
  "key23": "2pXoYes71546LrVS9DZYuSUEEovCLZ84nbnXc2izgKdxQUEHFa8oD7TeeZvmCrUaZX2Rvv3CMY3mLcd3TDVEKYN5",
  "key24": "5F5jt1RvAhHmnWxZJ2wMimHa6CpiwwJ4Hd1JGmyiwy2yHnaaNRLkHjbPveZmqd2Gip6cUfx68uw6qCCZMC9Wepb2",
  "key25": "57SLRFk2WQmTTbTKxZGPjaX3pXH2sVfTahRhr1p2ejHES5iJXyMs1NWD5J8MdALXsNFBsCWPTKXLJz7yA29dtm38",
  "key26": "52LvaH26Kq41rBzJwxKcmvfshZnyfVk7wht4FYt6YPtL3mEf3twJuoux4kst7pPyCnQFZ1az1Wb2iikhsm1ESjnt",
  "key27": "5g1NtR9GPEkc6TD9Awuv3gTsaNgAZ7TSyMWHjqwv58BEayVEePhUNzzmnWRp5s43DytwBVJBrR3SmnrQRqTEabAk",
  "key28": "4UPEBJK9rjWZxQP1N8rjLcpMcYCDrLdMfdqZZQDCHBspGpnWpYY41bem5PBzMiGQT3ypsRFysvsNzXazPShs73Az",
  "key29": "2PVkBZfx69Zcki8m4tMtCu4CPVnZ3cs4QyZNUosGpeCD7d2Za7Cr4V8hADTxc5hFWwCYgNudwb39YvLXFQ4JyXNf",
  "key30": "YztsyYBWKaAYd8Mfrc1yuxeJWZ9qtTx6n2ZATYVGaJyWZa6PinR6jQDLFWk5gLi59Y6C9pYvGEYTtitAUagBqa8",
  "key31": "3zrHBpZPQ1gfvi5AuoV8M89fTd1rUFb1xtnWTH2HyQEG7DX6bduzohAC992tCvJzS7ukCzyhERUUg76KEmuQxn4Q",
  "key32": "3EocYMvh2VrGqFn3Yi3ETiahKRSTbPGv3SA8uJArkzaWr6C5SDKjHGNDNxcP9BF7phhr5A9bD4EAN4Z51xrsULAg",
  "key33": "3KJU1o3hcAMT9sAyBkpzif2PL8DbnhncY4uNFwSGjBvhtFSXoXXkKdmrVfCzWyzTwyRLHvQYAq4FjaPDP6Qckykw",
  "key34": "5aiMEfDiMo9W2QxR5raN3vhsEEkPCe1acCC9PjDuv5nkpErSzT2p7BKQUtvLWQy86MHduWEXEGYVSi1CdZnm6G14",
  "key35": "5UHm2mVNukpV4cCPXLPdK5mzmDPLXuZ5FC1FHFpg4GBW6GusWfDaVTpkhffRPoTCRfKcWrWpakhDVY64o5acpfgP",
  "key36": "gC2ohiNvt4Q7LzGxVzcLnpkMeoH5Rtc8n3wsS1HGi1B6t7yuuKjKfa67GNoLdeZwd2PGEwUAMrBWMooBfTeqTJ8",
  "key37": "XkENHvMzxeaVYt5CazP7eeB16i2xHF6Jzk3YbjNz7fKjwwP7DBFrp82VffWeqazk2rFM7BQZHCeXy2pUMnAG45f",
  "key38": "2amfH5EbwfZ2GQZ9QRK8QwG5BoVNvVDSF2q2HEjqpneT7pe2iKicXm2xdvXCXfqsho6b5WW7tEmKQddsNVWc6gYo",
  "key39": "57q8AZaZF4Q79zFjeEWyQuZcgkRFmBn9CM5nM8rEKdUwinD7QF8PPiBJcASdED8YMwCtHLq9DBsqFe718BE792u8",
  "key40": "2HVmGPjfEPWEa1kiQKYASRG2u5uY1Ca8F2enu1MQi8gMVHN7JBC3AoLZnBNb4xj8sFuxRYBYhUJr9LVBD7aWzxpv",
  "key41": "5yvQz3jfZdrstAEnBrbEUPHhXwaeuy1We9gyGzB8i4KNNeQUnBHrPsn9LwyWkSga2E5zPjs8Lx9L1ydYVR26RX3P"
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
