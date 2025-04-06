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
    "5s2Ggk7BifAsDAe1UJnErfPgFtyh5bwwx3Kcyb37HZAJBhC7M6nfpV4SrSwwHpD8iwSd6uzxzEMECmWMzwAtCt3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rXayVWCfAqcjQcVueJd9pemBaJfWJaFzxo6dcqHoHgYhfhVs4EJSkufZEc1VxtBAhxN1nzJU9EAsrucKaugZMeG",
  "key1": "2qFkhJQwg8qJRYfS2AQARmQgNQpnLXquR3fuUm3agNMvbWC342gVmZCC5c8VRQYyZEZQEH6jVoRwU3Sb3LHtEHQ4",
  "key2": "25XtwTFnqDaGc9CjHwftmbbStoXG8eJnEX3L8xpLXJJZAjJ1gXHkSCvdXg64Huo46H1n5e32DZSurtgk38bFLKvD",
  "key3": "3KpeRJTXuvSiZgi1VkAoFzWiVBXNhdJ73nGZy6DyinRzDzjxcwXeEChaogei2zoUBYRtZNKy8KygTQo8r4JtJXVy",
  "key4": "44mdEZqWkcBZVWkANB5EcGVTjZuMdzppeSJvtYYW4zxgbyR6bCSAA55HvYgnhvdoyjSLUSqaHKMhrFSwCkxmBzfR",
  "key5": "5vx6qyUBKKMSbGzUthR3BoK6AjTNBbKV5prZ4pBW2kujUsfRhahH35WtjsRJEbzLE5BYHHH7hB5Rhjqn1DvPTVN4",
  "key6": "3isEQNeN7JXn92Gby2hNVbcJvig4AhHur7GKThWiQzFucXqxqv6ADtTbbDwZKKXGisMA798YiJfDLEcYJVLDhAvk",
  "key7": "4sFknivsvsRbjhokona48J5K4QQbNAvDkHuwPR5N7czuChHKMsJLdbBRACbFbKRxKaBRoj4C5BAyUFpcfXnxCziE",
  "key8": "3Pqf8xCfVeD2f1sWURQXvBm6hfN5fViGxDWUdcGBwBZpVcYU67dmv2zBZogwkRcuGxdCRNMgi3j3pJLk46GyAFY6",
  "key9": "3f8XLeqZ9BiF2VzLCcxb2VFh5wNhshLLDGWhiqhkMe1Zgr42S2xNazonR2ioJoV6dWrojBZDPdpWcaGrktd2FzTz",
  "key10": "5aCFiCB7qjmhsegtvr2xTnZAWaBQgiQ2V6tZZGJKDdAeyBEMonCwFpBU8DKnW85rp9hrvH4zZRpxowjR1TzxU6t2",
  "key11": "z2c62vLqXqQBWnLa22eyo3UzMSue3Awo7SUZM1kAVwoFEEfo3UKuonadLby9zhgV7JpvYbGdvmpHuux9LnZftpb",
  "key12": "2QoAojbYXUXY24bKVKwMoWp64YymzQgp2EmweRc2PLznMfSu2mkf1gtYqAZVqbfxjPTgdQPDHYBzrSD9YQy1Rr1w",
  "key13": "5vjPuLZAeSPErrsFjwwBanNBE4XQAXkKVCaMqK1SBpYaTFtU6fQCvM2AB9DZi1d4WpMHgpwFPoAbYuFiz8757fCC",
  "key14": "5c2UZkqFRMdJ28buKFxAeJwQR1Hz7GHaszUoZMf5rkDUVpW16jyyE3UDVSeH1nphVq3P1Jgpq7Nruwwd3siWvhu9",
  "key15": "3YEHWCwY2Xf1MFGkZXpUN6tKCUq8DyurWNLE6eYotR11K5DHLiNmKSwNgdq8URA8Xm1TZmRspAscauoU7ukwbAcu",
  "key16": "27WXgzNGP8uZKEpFgh9sjsoVkj15dSLhFm9URWjKg3Bvv5evoxG8ioGE5JtZdjLGwJuYYK6PZkK3PzpWoATFC6sx",
  "key17": "CDATytRFo5fZoA1oU37AWQFUbcXjJMdM5nhL9B2Li2VjfMVwPydEVvAqyUpb9C6kCRr2NcKi2sscxTxcqYm7FWr",
  "key18": "3KmoKisTgu6kjPAy6EdNfH89ZHwGvCVRkVVWtReZvoHXjusAR4dQQiaywSwB5XbAxGBQ8SzEP8ZDkWLioFkmBuv",
  "key19": "3QEWaxdmw3fMK33vBv5iH6HfiGcVomQ8f45yfy5VhZyynFMbWnrPsE1iMpGcyDAwkBRWNPLveRW62A5sgwxEwwaA",
  "key20": "2iFmrqASZXkDAREyznBv8FYmPjCH2KGeX481qoRKRDZgNowpgqvhUiVUxAvizhiciFiHQiMjdsGVd1dwtzGrkmEh",
  "key21": "57742E8sDNoWLPnsKYVgWZGiPy6VFjdxnQ2UCpXvGuuyFSXRqPj7ZxTKbGewtn2RMxR8LDYVDjVdNDjEeiWAyQGS",
  "key22": "2inSJjamRKN4GxyiAxuSNBF2duD9KdE2eafqojLfJLb48DkeghyUmTUMyh7BQBx6FAio9d1Ea5cU4ukfFTGCyA5A",
  "key23": "28HLPXTpW2b8jayh3vc7BFZc1jjnr9mSHVrdex24C3ZPktMpWdb9G6vxMhGFrGBhjCtSiugg6dyYw4xNJGRM4kFM",
  "key24": "3XbJaL1B5xsGXYfbLKa6TdrEcq5Rj3Kx3RbD36hThL54t4FfRp6JG6B1snj6djq6vunjWttH9zAtWoLCZJeM8arU",
  "key25": "3SAUdeb3LQzonvnihYAW2zfNMvzq42YasuoJK9S8ArrV9kSuPZoE388tQQsphtyTCg8qnXGzoBHWgFBTvGHeQwWh",
  "key26": "3C6PJTHTdPkXfMSsKbNiiV7EPqjZZZE4awjSamM6weKNFeNKnNgVPo4e629nKwMpucNL4CCnJv2QfjHMuDtYoKLo",
  "key27": "4YKCgdtpVfbGgGNX49rtKPVGd4vdGLvkt491BQX3GKzgPBvMxGP4PR7iryjqqpnfU5NbBF75FGn6k4Xc55UmPXmg",
  "key28": "3G5PwSa8FvvVjkDAnNoGDmdtzRUm6W4r6mDNASDWcndd3XKtDJFteYkafYrd8PeVHBSRRz94zyRgb4hB4WzUkPYV",
  "key29": "57LvVCQGSARYYZaHoeTjJxUEfo6bKTYrPHHn6XKb1jyKQGFFdn5HqQrdsrHmjDqQs6yNqQB2UeKBV3D5mDfHYGZ",
  "key30": "4hpCBmNsTaxzLDZ1An9dqDiw8aFQmebQ88wu7RQiWxMtRYS5jbg571z71zoP76TKboqQLbY4tLUSHwvPLnZDwVaE",
  "key31": "3SCoTuGpyfp4HPKW1DMcMwUYwmrorS8u45T5qDeqcGRqeDpH7HX3xkMWm95opAJ2HgoJkKTXaj2F1oiEwKP7ZqAc",
  "key32": "WPNtPTnQhzsXAEJ4rDUe1kJFFzjq2FSRE6d8aYQCBtN3gn5FuHH6oHizLnfvfoHdfKp6TTF4gtZrypv3ZUqM5bx",
  "key33": "4mW76URupdq7SUdDrZPpahgUBpNCrn4MC3NUwCU954oiArHDvfenW77LUsq38DyP7DAW2ywUn8Q4hFeoum4CMV3s",
  "key34": "3NVPbHNLisdz1pt3ND1ejpgYuZnsmVE8xynNioBQeLH47pWR5nFtnBJru459U3GDVRLokLWijhkZicqCSqQ4zfgH",
  "key35": "5xXFUiSqHfS1ATzS5jqen44tDGURrogHNn3d8vojsxiWZJ29m8TF4ZUERrj6EZXMkMTj8AysMupkZX1H26dvA3gU",
  "key36": "5QUdwjDQrYK4LrgCN2F6qAAsGQsLkPSHmBbeFhGECPp31espBvUXyEqxiL3Y1obgQiu3vjJXMCXPuGPwqfuNdhFU",
  "key37": "ffpBaQKZWKKRtpegyFGBqKo1HS74JXUbELrnofSNmr6FCTzHeaZxQY2byXNeYeYbT7Vm8HWVtLx9EPCSPQCKVvU",
  "key38": "4mB9vkvMKcCBWzDiZLtGbmFQXttAj7adDmT1TJC1bMmEodvjjaupvKvV619czzatiMfRunCTDfMhpcoSjEjkz1tz",
  "key39": "4ZRUeZxEfn3qkxpdh5pp4LDdMGJj13dAxApMe983vwWVfZSPmEhWo8iXJVk1UCBRceVbujVYob5RCedRDtzweJyA",
  "key40": "48sNsGhmxxtFbcLVgvAG9yQZiGXZMe4uF4v8oT6mMErPuLGCciu7CtRo3BdRDVTS5LHKckQBmFcHGnQrTsNYvYN",
  "key41": "3wkd4iQPro887e5ijprmkobd8A7qUKXooT7T8VCNkNEcaCagRAaQ9oBGMp4T6q8Fg3F1kGnGbZfxaV6Ri3aw15JP",
  "key42": "2c9BUbBcw1Se5pLCcxtzoqpjXHZNDWcxTSMY86zx6KKNSYeeW7FdaWjqRon9GQazrgZMgxcJMVs6dVAhvUbJJcfa",
  "key43": "5yzU3xcexW43MBG4FmN4BRiyiazEBPXgiRu5MiaSQJAkij3b7HsLn7c3Ki1VganoEBTgKts5X5r6iazFG8GCAQze",
  "key44": "v9RyogMc5De716mj6cMEMcZavSvrQPWusqZ1cci9TLrVJ3JVYvonymrS8wJJaQsNTMd9gRuphoEm6pfLvXtaugB",
  "key45": "kX2R1PUyNn77B6GRVdQfd1N1d89KcFn94zp34jjyQm3F2embhb65qQEnmupoDu9ZXAhCUNyACxP2aXzwF43vDue",
  "key46": "4haBQiuMm1pxyAEW7zSTuRjFCTv6ruP54ooEPxLCoKHggJX2SWRwW1r2ktEXJjtEQXfsery55VavBZwG4bSgTAB8"
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
