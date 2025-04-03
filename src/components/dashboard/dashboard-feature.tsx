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
    "4qk3484FhsPgEy1MaWpA74s9a2AT1L5kEAoXb7aPTZTGWUwXidhC5riSyzkeBLN9JJvKjbEGo8WFGb294s9yfzg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mWiQ6THancjjypxY1okikXmdj6rWxJXXvBL6zBkMuvYcV6crTdyt7wA81sFB5Cbfwfy5ukRcDcyWKpVqk2tTXCT",
  "key1": "3guXTFEnYb4MmUiEkEqXp87aFjH9pCX9qLCMwSzzBzDiW88gQPE99h27CYR2EBV7Ga1QSPzzhtsddn3h9ULVNmLw",
  "key2": "2xp2sg57GygrUHVQD7DS65vLsWxdcDPrqXt9yZ9Wur71zEDYfmh5n66uM1DMZqukR5pqmvLyNa7uZPbtWJMKC3V2",
  "key3": "258NGoVu6Srb9u8hyauR6M3KJSGtvWXsYEdyxXhbGHxUkDhVgoydMHqukyz9W3Uv4t7CaQ34swsmDbsHQX6TnM34",
  "key4": "fwGKM1LK2EJePgxgLMGBGKyB8HCMXQdiGVwApqtGnbvEaB35YGDaY98VEcGkJ8tSYYWWeP5K7gKVF5D5ATCESvY",
  "key5": "5HM2gxcZBh11LDnhdyAaA6a8SoU6qq9g8ShVc7h9VE7fwKx6CQtx2PPSQ9KRGsXBC5yXGNxN97UD4NspFy4SWdfM",
  "key6": "NuhtxsogzPRWyb3DzMBsCCcjX73xzVxHbA2eEvUNVntuQVSnxopucyFp5hww1CQgrQ9g9VdEySg4Vu9gWt4LNS6",
  "key7": "3aWw5GJBCEvvKUxdRXQsdFYtvddewdBh4qu2DrGr47cCN6GGHJsRpFzRRm5ZEuv4dBHGjYg3WeAFSeuRRGCvTyke",
  "key8": "4siAiZdCng4eRoKK2M4S8d3Dj4B94Mk7LzV5xdNczCnEKXWraGiKmPiZJ3A2eNoC12hBjg9ofCABpxP2i4No3q64",
  "key9": "4podkXcSSFhjtCoFpnj7LoT5jR3yKRE8PSa9fgGHm52bTsG2vEX2rZKqZfwijeSRv3krj3vFTtKuQHwrTNifcai4",
  "key10": "5HVRg55TzoMWFQ4VP6HjDN8znGGMBj7C5arps4hqR3bvr4UNNeZwNTAsRFRzFftAHovrnBujMEuatfhFVsCwwymi",
  "key11": "uVZ3i6MRyhB1pcMv9tgmtr1QYXvFJyJmgW5wxqscfrsVjMCuGunDFHTLdtocgMhbjrVUZ5TeCGdjdg6P5jSrFQT",
  "key12": "28wBEXeMUnGHDP9HPmJVzitBxDr9Aqo8Ep1a6E9acRJ3d4ALjxHp27eqHdNjQZyMS8wkgPuNAwkFTse3AFZHt4b6",
  "key13": "31ZJyRsjwUNmVBDLU7B8eZe35RnCUhj4ZbnXVSxniXMYvsHTK6ixpkv175wji71jVwDvzhFXpW521uV1nDYoWJaD",
  "key14": "58r7qA4j5woNTc8qpP9ibWDFrawRoaMV9UjABukiQKMNAXgxhbagDH1n225vpLCT2VoZ9xDjeBtZmAAZXtkxuULj",
  "key15": "6qzYGAzcMbpZJUNB6EikKSvQmNGrzSJfVpgsp4HxpTQK21r46iRGS6u6d9nyvGxKjaJ5W9impWCtwaLEtTV1Ffv",
  "key16": "4gVcga7hHdcXyVmZKNApsmUtHYVNY2Uufs5hkFoo7SGoqRedpupw8omDFzSciCsBPJDfQraWubTPEy8M7EEaSPw7",
  "key17": "4awLpN4UeS2eyK7PJDtzx7ZSPxzKLQRYG8kks4YBi3RARmGJXTustcCzERzGvb3qnQ2YVKKZi7aJV27wVgKnNif2",
  "key18": "3Ys2FVm8d7t83Yb3zN5A93A8nMopq6gTUtMzrkC9sjKheyUGbrtX6WdSgvABxaa3bfWhJSsPvTM5WuztaiuMapBL",
  "key19": "2reN2ABVCgCcUi8zSaQit4jYNSH5Z8FsW6SL2pF375Ts5pfsZcsMuqpSKKf5dezASN1eXfqGzSpVvCJsXiNVSkhP",
  "key20": "34MPFRsC7FvafLbuRK9xBhRyazq2fQwTMjqgx33gv29PCx26fkkrYJCufcLsWghJk7fqAAA2te8a4T94mcDfoBRr",
  "key21": "5dZ4u1SodGYsnZpsu8Hs8o82SATCC59QLw2Gk5Kzw4jY5pM8c3RnpH4uWYZuJTj4MrGxr8i26D9JyS7L7JBo2ffU",
  "key22": "62dV7r5AdxcrokRkFkn3THWiXYXo569Hw6TNktKquXvdTPc19eNuAt69YbEzRgm8oJ9gjZvQ1AsHPtqUyXdMTQ1m",
  "key23": "2f48RKZX2BgKqeLSgmcoqXegAv8HjRZoYyxYNAzEs8hym1NVSECidXSeyWrmdQK5xjMZRWaXaWdkKyHyJAP1woAG",
  "key24": "4qwJ9jjw2XMc3qe15a3bLipgmZJGibDP9UPULHXWAoZHiDNnjgHXVNFhNzxEHMkMpTe9Njz6aMo7duyv1hBTjvg6",
  "key25": "4uTideeVGwvu7gMB4RmuHfrcUBk8BPaExqCSH56Hopv9V23dE8bbFSTWpXXKpYtpF4uJGMRhJrTH25bztEtW84Q8",
  "key26": "3a3bc318se1sdQsp4wZzna9CMeJSntQ8M4fTNzv3iprDUdHyXbMgCKdPVi6YELebmSzgGYgQe3hz5KYexPc9U9ox",
  "key27": "3U4yNzyp5Y9WSoAEUK3tbq3GAuwLn2W4eqs6Q65UWoCDc9Pj8kzKsu4ssXRVTxb5uSBrQv3Fm2rYdUXuoVBJqJEz",
  "key28": "5JneBZ2z6DVSYC51XfTHtvrpZsKghUhnNpuR79CmhQ7aUbMAVsHNzq5Wbv1yt3upACGBaZvnB1CRXS63tNNxYJiJ",
  "key29": "3CeeaNNBVzcStqJ9uVnyAZ7TRsACcceg33pyAMFGKWByAmrXp5opfNYMmVSRA3znieoA4mKZ1Bwt3tFbPTPwSJtV",
  "key30": "2sW7pcfmH47JRBPmfMvZcFCid7VjNrfxhDQttQ81p8tTcnaH3a8pp2yNVDgSdvAeduWeP4PKvTSoZHX4FrMeqJsL",
  "key31": "2GcsYXDtdtNs728RGdMz6hfEHTJDVrLArasSHxCttf1mnibqNgQyWYggQoRNqHssqGbm2zRqq1BUoF2dqtZRLDy4",
  "key32": "2pbWnZPjbvuzekiQjrkCCXgqC42Yno2gKQVT8C5pWecgMYdcGfR52w9a8Ljz5SnwHj4bm2gHgTgqyXUMFfLpCdUb",
  "key33": "63KPiMiivgd8SHiZ7YRPCRDd1ngK4VE1pH84jCqDQHWaQbgtM8zMR8AWFYvjPJ1iPJk5ZJtbshaJaeeruKvumzid",
  "key34": "5eQrooCPw3VkuHBqvMH3DJW6gkjt7Csv9jQHZfEkLCCk7LoneUMjojcycjNy1Yb9GsU9f7vhRrswDYaB6bW6Lafc",
  "key35": "5QuXY7UCWxoLi493Z1XAMY1pN2pEp8KyC2gfX6QKkpHvKiUTrDzftFghhdv13ZgEgzcYKJnGS59JEw25SHRht1ZN",
  "key36": "21i6hmSjRuDwQwoYsbS2BCMjcRk2aKiowwi6JgkRguo3MBzCwW18D4JHFhpBj3CaG7y47GztaAM8Mg8H9Vo1Yn4m",
  "key37": "3NH94nJu9jxeL7reK9F7M4kD4owoogQcL93Ji5NG5XxbrypGisni5t4gGwXfziEJsoQJZzmjGwZwGhrCvReoAsTa",
  "key38": "2jBbt6TqKMBduKxMwwcDnPE5nA65RTu3xkhuUoEET9bu3y9A6roCFUtUtGYFCZLN1gXCtbxLTBVXZ2iKArKDFwcM",
  "key39": "4CqQ5eahfs35tDu5NEpkWipEab3SmXfoaiXA8aTATq4j972JiVaQJXHQny9ExMfLoTErk19cmt7zDqPv7LfuRLWq",
  "key40": "QVFB7wziFZTyiQ2VDDaKJCzmMkq7yBKiicbK1yVupfdxz7yGDrX854EQECf7SEwNcHq2wrooxBDLehkMY718P6i",
  "key41": "3W7gPGbMcUg63RcpVDWhi4fvjb5zf1tMRQo2ni43fn2oMzMKu5drVZ8y4BL5rKY4x5GozHmbbE8iQoJoYVr9UDRG",
  "key42": "5Bn928U3gw3sf5zZSQi6B4gHZm1bXABUJh4qM3SAX9NoDVGUK7yezDAUp1JsBYbuTo6pU3DEwGQrFkYcW6Si1Rr",
  "key43": "3ef4h8X1tfvL4BB1bs6te8jVy2nHi8wxTEJ4dCkm6ZNSnrA8gvWgW4mFsnWqQbdyvAZ2xx3NE4zEDF8DTzJWpX22"
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
